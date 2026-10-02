/**
 * measure-bundle — считает размер бандла brotli + gzip по всем .js/.css/.wasm в dist.
 *
 * Важно: берутся ВСЕ файлы dist, а не только dist/assets/*.js — иначе из бюджета
 * выпадают wasm-декодеры и css, которые как раз и съедают мегабайты.
 *
 * Бюджеты (этап 0): core ≤250 КБ brotli, playcanvas-чанк ≤900 КБ brotli.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { brotliCompressSync, constants as zlibConstants, gzipSync } from 'node:zlib';

import { join } from 'node:path';

const DIST = 'dist';

const BUDGETS_KB = {
    core: 250,
    playcanvas: 900,
    colyseus: 250,
    decoders: 450
};

const EXTENSIONS = ['.js', '.css', '.wasm'];

function walk(dir: string, out: string[] = []): string[] {
    for (const entry of readdirSync(dir)) {
        const full = join(dir, entry);
        if (statSync(full).isDirectory()) walk(full, out);
        else if (EXTENSIONS.some(e => full.endsWith(e))) out.push(full);
    }
    return out;
}

interface Row {
    file: string;
    raw: number;
    br: number;
    gz: number;
}

function kb(bytes: number): string {
    return (bytes / 1024).toFixed(1).padStart(8);
}

function main(): void {
    let files: string[];
    try {
        files = walk(DIST);
    } catch {
        console.error('dist/ не найден — сначала `npm run build`');
        process.exit(1);
    }

    const rows: Row[] = files.map((f) => {
        const buf = readFileSync(f);
        return {
            file: f.replace(`${DIST}/`, ''),
            raw: buf.length,
            br: brotliCompressSync(buf, {
                params: {
                    // 11 — уровень, который отдаёт CDN (Cloudflare/CloudFront);
                    // 9 даст заниженные цифры и обманет на выборе бюджета.
                    [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
                    [zlibConstants.BROTLI_PARAM_SIZE_HINT]: buf.length
                }
            }).length,
            gz: gzipSync(buf, { level: 9 }).length
        };
    }).sort((a, b) => b.br - a.br);

    console.log('файл'.padEnd(46) + '   raw KB   brotli KB    gzip KB');
    console.log('-'.repeat(78));
    for (const r of rows) {
        console.log(r.file.padEnd(46) + kb(r.raw) + kb(r.br) + kb(r.gz));
    }

    const totalBr = rows.reduce((s, r) => s + r.br, 0);
    console.log('-'.repeat(78));
    console.log('ИТОГО'.padEnd(46) + kb(rows.reduce((s, r) => s + r.raw, 0)) + kb(totalBr) + kb(rows.reduce((s, r) => s + r.gz, 0)));

    // Проверка бюджетов
    const checkChunk = (chunk: string): boolean => {
        const row = rows.find(r => r.file.includes(`-${chunk}.`) || r.file.startsWith(`assets/${chunk}.`));
        if (!row) {
            console.log(`  ${chunk}: чанк не найден (пропуск)`);
            return true;
        }
        const limit = BUDGETS_KB[chunk as keyof typeof BUDGETS_KB]!;
        const within = row.br / 1024 <= limit;
        console.log(`  ${chunk}: ${(row.br / 1024).toFixed(1)} КБ / ${limit} КБ brotli — ${within ? 'OK' : 'ПРЕВЫШЕН'}`);
        return within;
    };

    console.log('\nБюджеты:');
    let ok = true;

    // core = entry-чанк (index.html + assets/index.*). В нём не должно быть движка:
    // если playcanvas уехал в entry, ленивый старт из меню не работает.
    const entry = rows.find(r => /^assets\/index\.[^/]*\.js$/.test(r.file));
    if (!entry) {
        console.error('  core: entry-чанк не найден — сборка сломана');
        ok = false;
    } else {
        const within = entry.br / 1024 <= BUDGETS_KB.core;
        ok &&= within;
        console.log(`  core: ${(entry.br / 1024).toFixed(1)} КБ / ${BUDGETS_KB.core} КБ brotli — ${within ? 'OK' : 'ПРЕВЫШЕН'}`);
    }

    // Проверяем не имя файла, а реальный код движка внутри entry: иначе ложное
    // срабатывание, потому что entry всегда содержит ссылку на имя чанка в
    // карте зависимостей Vite.
    if (entry) {
        const engineMarker = 'WebgpuGraphicsDevice';
        const engineChunk = rows.find(r => r.file.includes('playcanvas'));
        const coreJs = readFileSync(join(DIST, entry.file), 'utf8');
        const coreHasEngine = engineChunk ? coreJs.includes(engineMarker) : false;
        console.log(`  core без движка: ${coreHasEngine ? 'НАРУШЕН (код движка в entry)' : 'OK'}`);
        // `&&=` короткозамыкает и не вызывает проверку, если ok уже false —
        // поэтому собираем результаты явно, без сокращённого присваивания.
        ok = ok && !coreHasEngine;
    }

    const pcOk = checkChunk('playcanvas');
    const colyseusOk = checkChunk('colyseus');
    ok = ok && pcOk && colyseusOk;

    // Декодеры грузятся лениво и по отдельности, но их суммарный вес — тоже бюджет:
    // на Pixel 7 это отдельный медленный запрос перед первым кадром.
    const decoderBr = rows.filter(r => r.file.startsWith('decoders/')).reduce((s, r) => s + r.br, 0);
    const decLimit = BUDGETS_KB.decoders * 1024;
    const decWithin = decoderBr <= decLimit;
    ok = ok && decWithin;
    console.log(`  decoders (lazy): ${(decoderBr / 1024).toFixed(1)} КБ / ${BUDGETS_KB.decoders} КБ brotli — ${decWithin ? 'OK' : 'ПРЕВЫШЕН'}`);

    process.exit(ok ? 0 : 1);
}

main();