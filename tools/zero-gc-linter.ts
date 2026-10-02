/**
 * zero-gc-linter — проверка горячего цикла на аллокации.
 *
 * Идея (принцип №2 планаграма): в `update`/`postUpdate`/`frame` запрещены
 * выражения, которые создают объекты или массивы. Проверка идёт по AST, а не по
 * регуляркам — иначе `// new Foo()` в комментарии даёт ложное срабатывание,
 * а `new Foo` в строке внутри update — ложное отсутствие.
 *
 * Запуск: npx tsx tools/zero-gc-linter.ts src --fail-on-new-in-update
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

import ts from 'typescript';

const HOT_METHODS = new Set([
    'update',
    'postUpdate',
    'fixedUpdate',
    'frame',
    'tick',
    'onUpdate',
    'onPostUpdate'
]);

const HOT_FUNCTIONS = new Set(['update', 'postUpdate', 'fixedUpdate', 'frame', 'tick']);

/** Методы/свойства, которые почти всегда аллоцируют. */
const ALLOCATING_CALLS = new Set(['sort', 'reverse', 'splice', 'reduce', 'map', 'filter', 'concat', 'flat']);

interface Finding {
    file: string;
    line: number;
    col: number;
    rule: string;
    text: string;
}

function walk(dir: string, out: string[] = []): string[] {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) walk(full, out);
        else if (/\.tsx?$/.test(full)) out.push(full);
    }
    return out;
}

/** Возвращает true, если узел — вход в hot-функцию (метод/функция/стрелка). */
function hotEntryOf(node: ts.Node): 'push' | 'pop' | null {
    // class method: update() {}
    if (ts.isMethodDeclaration(node) && node.name && ts.isIdentifier(node.name)) {
        return HOT_METHODS.has(node.name.text) ? 'push' : null;
    }
    // function update() {}
    if (ts.isFunctionDeclaration(node)) {
        return node.name && HOT_FUNCTIONS.has(node.name.text) ? 'push' : null;
    }
    // obj.update = () => {} / { frame: function() {} }
    if ((ts.isPropertyAssignment(node) || ts.isPropertyDeclaration(node)) && ts.isIdentifier(node.name)) {
        return HOT_METHODS.has(node.name.text) ? 'push' : null;
    }
    // const frame = (dt) => {}
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
        return HOT_FUNCTIONS.has(node.name.text) && ts.isArrowFunction(node.initializer) ? 'push' : null;
    }
    return null;
}

/** true, если стрелка сама является hot-функцией (`update = () => {}`). */
function isHotArrow(node: ts.ArrowFunction): boolean {
    const p = node.parent;
    if (ts.isBinaryExpression(p) && p.operatorToken.kind === ts.SyntaxKind.EqualsToken && ts.isPropertyAccessExpression(p.left)) {
        return HOT_METHODS.has(p.left.name.text);
    }
    if (ts.isPropertyAssignment(p) && ts.isIdentifier(p.name)) {
        return HOT_METHODS.has(p.name.text);
    }
    if (ts.isVariableDeclaration(p) && ts.isIdentifier(p.name)) {
        return HOT_FUNCTIONS.has(p.name.text);
    }
    return false;
}

function checkFile(file: string, root: string): Finding[] {
    const source = readFileSync(file, 'utf8');
    const sf = ts.createSourceFile(file, source, ts.ScriptTarget.ES2022, true, ts.ScriptKind.TS);
    const findings: Finding[] = [];
    let hotDepth = 0;

    const report = (node: ts.Node, rule: string) => {
        if (hotDepth === 0) return;
        const pos = sf.getLineAndCharacterOfPosition(node.getStart(sf));
        findings.push({
            file: relative(root, file),
            line: pos.line + 1,
            col: pos.character + 1,
            rule,
            text: node.getText(sf).replace(/\s+/gu, ' ').slice(0, 60)
        });
    };

    const visit = (node: ts.Node): void => {
        let entered = false;
        if (hotEntryOf(node) === 'push' || (ts.isArrowFunction(node) && isHotArrow(node))) {
            hotDepth++;
            entered = true;
        }

        if (ts.isNewExpression(node)) {
            report(node, node.expression.getText(sf) === 'Array' ? 'new Array()' : 'new <Class>()');
        } else if (ts.isArrayLiteralExpression(node)) {
            report(node, 'литерал массива');
        } else if (ts.isObjectLiteralExpression(node)) {
            report(node, 'объектный литерал');
        } else if (ts.isSpreadElement(node) || ts.isSpreadAssignment(node)) {
            report(node, 'spread');
        } else if (ts.isTemplateExpression(node)) {
            report(node, 'шаблонная строка');
        } else if (ts.isTaggedTemplateExpression(node)) {
            report(node, 'tagged template');
        } else if (ts.isFunctionExpression(node) || ts.isArrowFunction(node)) {
            // Внутренние функции аллоцируются на каждый вызов, если не hoisted
            const p = node.parent;
            if (ts.isCallExpression(p) || ts.isNewExpression(p) || ts.isArrayLiteralExpression(p)) {
                report(node, 'inline-функция как аргумент');
            }
        } else if (ts.isCallExpression(node)) {
            const callee = node.expression;
            const name = ts.isPropertyAccessExpression(callee) ? callee.name.text : callee.getText(sf);
            if (ALLOCATING_CALLS.has(name)) {
                report(node, `${name}()`);
            }
            if (name === 'set' && ts.isPropertyAccessExpression(callee)) {
                report(node, `set() на ${callee.expression.getText(sf)}`);
            }
            if (name === 'concat' || name === 'join') {
                report(node, `${name}() создаёт строку`);
            }
        }

        ts.forEachChild(node, visit);

        if (entered) hotDepth--;
    };

    visit(sf);
    return findings;
}

function main(): void {
    const argv = process.argv.slice(2);
    const paths = argv.filter(a => !a.startsWith('--'));
    const targets = paths.length > 0 ? paths : ['src'];

    let total = 0;
    for (const target of targets) {
        const files = statSync(target).isDirectory() ? walk(target) : [target];
        for (const file of files) {
            for (const f of checkFile(file, process.cwd())) {
                total++;
                console.error(`${f.file}:${f.line}:${f.col}  [${f.rule}]  ${f.text}`);
            }
        }
    }

    if (total === 0) {
        console.log('zero-gc: нарушений не найдено');
        return;
    }
    console.error(`\nzero-gc: ${total} нарушени(й) в горячем цикле`);
    process.exit(1);
}

main();