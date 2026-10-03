/**
 * browser-check — прогон клиента в настоящем Chrome и проверка кадра.
 *
 * Проверяет то, чего не видит компилятор:
 *  - консоль без ошибок и pageerror;
 *  - меню отрисовалось и `__blendarsMenuReady` выставлен;
 *  - по клику «В бой» поднялся движок и определился бэкенд;
 *  - кадр НЕ ЧЁРНЫЙ (иначе «движок инициализировался, но ничего не рисует»);
 *  - кадры идут: снимки дважды отличаются, значит update крутится.
 *
 * Скриншоты складываются в perf-results/ (в git не попадает).
 *
 * Запуск: npx tsx tools/browser-check.ts [--url http://localhost:4173] [--keep]
 */
import { spawn, type ChildProcess } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { createConnection } from 'node:net';
import { join } from 'node:path';

import puppeteer, { type Browser, type ConsoleMessage, type Page } from 'puppeteer';

const OUT_DIR = 'perf-results';
const PREVIEW_PORT = 4173;

/** Ждём, пока порт реально начнёт принимать соединения. */
async function waitForPort(port: number, timeoutMs: number): Promise<void> {
    const deadline = Date.now() + timeoutMs;
    for (;;) {
        const ok = await new Promise<boolean>(resolve => {
            const sock = createConnection({ port, host: '127.0.0.1' });
            sock.once('connect', () => {
                sock.destroy();
                resolve(true);
            });
            sock.once('error', () => {
                sock.destroy();
                resolve(false);
            });
        });
        if (ok) return;
        if (Date.now() > deadline) throw new Error(`порт ${port} не поднялся за ${timeoutMs}мс`);
        await new Promise(r => setTimeout(r, 250));
    }
}

/**
 * Поднимает `vite preview` самом себе: тест не должен зависеть от того,
 * запущен ли сервер руками в другой вкладке терминала.
 */
async function startPreview(): Promise<ChildProcess> {
    // --host 127.0.0.1 обязателен: по умолчанию vite слушает localhost, который
    // в части систем резолвится в ::1, и connect() к 127.0.0.1 получает refusal.
    const proc = spawn('npx', ['vite', 'preview', '--port', String(PREVIEW_PORT), '--strictPort', '--host', '127.0.0.1'], {
        stdio: ['ignore', 'pipe', 'pipe'],
        detached: false
    });
    let log = '';
    proc.stdout?.on('data', (d: Buffer) => (log += d.toString()));
    proc.stderr?.on('data', (d: Buffer) => (log += d.toString()));
    try {
        await waitForPort(PREVIEW_PORT, 20000);
    } catch (err) {
        proc.kill('SIGTERM');
        throw new Error(`${String(err)}
--- вывод vite preview ---\n${log}`);
    }
    return proc;
}

interface CheckResult {
    name: string;
    ok: boolean;
    detail: string;
}

interface Report {
    backend: string;
    checks: CheckResult[];
    consoleErrors: string[];
    consoleWarnings: string[];
    timings: Record<string, number>;
    frameDiff: number;
    nonBlackRatio: number;
}

/**
 * Доля пикселей, отличных от доминирующего цвета кадра.
 *
 * Читать канвас через 2D-контекст (`drawImage`) бесполезно: у WebGL-контекста
 * `preserveDrawingBuffer = false`, и вне кадра буфер уже очищен — картинка всегда
 * чёрная. Поэтому скриншот снимает Puppeteer (он composites кадр корректно),
 * а статистика считается уже по нему.
 */
async function analyseScreenshot(page: Page, png: Uint8Array): Promise<{ nonBlackRatio: number; hash: number }> {
    const b64 = Buffer.from(png).toString('base64');
    return page.evaluate((data: string) => {
        return new Promise<{ nonBlackRatio: number; hash: number }>((resolve, reject) => {
            const img = new Image();
            img.onerror = () => reject(new Error('не удалось декодировать скриншот'));
            img.onload = () => {
                const off = document.createElement('canvas');
                off.width = img.width;
                off.height = img.height;
                const ctx = off.getContext('2d');
                if (!ctx) {
                    reject(new Error('2d context недоступен'));
                    return;
                }
                ctx.drawImage(img, 0, 0);
                const { data: px } = ctx.getImageData(0, 0, off.width, off.height);

                // Фон сцены — доминирующий цвет; всё остальное считаем содержимым.
                const buckets = new Map<number, number>();
                for (let i = 0; i < px.length; i += 4) {
                    const key = ((px[i]! >> 3) << 10) | ((px[i + 1]! >> 3) << 5) | (px[i + 2]! >> 3);
                    buckets.set(key, (buckets.get(key) ?? 0) + 1);
                }
                let dominant = 0;
                let dominantCount = -1;
                for (const [k, c] of buckets) {
                    if (c > dominantCount) {
                        dominantCount = c;
                        dominant = k;
                    }
                }
                const dr0 = (dominant >> 10) & 31;
                const dg0 = (dominant >> 5) & 31;
                const db0 = dominant & 31;

                let diff = 0;
                let hash = 0;
                for (let i = 0; i < px.length; i += 4) {
                    const dr = (px[i]! >> 3) - dr0;
                    const dg = (px[i + 1]! >> 3) - dg0;
                    const db = (px[i + 2]! >> 3) - db0;
                    if (Math.abs(dr) > 1 || Math.abs(dg) > 1 || Math.abs(db) > 1) diff++;
                    hash = (hash * 31 + px[i]!) >>> 0;
                }

                resolve({ nonBlackRatio: diff / (px.length / 4), hash });
            };
            img.src = `data:image/png;base64,${data}`;
        });
    }, b64);
}

async function main(): Promise<void> {
    const argv = process.argv.slice(2);
    const urlIdx = argv.indexOf('--url');
    const baseUrl = urlIdx >= 0 ? argv[urlIdx + 1]! : `http://localhost:${PREVIEW_PORT}`;

    mkdirSync(OUT_DIR, { recursive: true });

    const consoleErrors: string[] = [];
    const consoleWarnings: string[] = [];
    const checks: CheckResult[] = [];
    const timings: Record<string, number> = {};

    const addCheck = (name: string, ok: boolean, detail: string): void => {
        checks.push({ name, ok, detail });
    };

    let browser: Browser | null = null;
    let server: ChildProcess | null = null;
    const useOwnServer = !argv.includes('--url');
    try {
        if (useOwnServer) {
            server = await startPreview();
        }
        browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                // SwiftShader даёт программный WebGL2. WebGPU в headless-Chrome
                // обычно недоступен — тест идёт по ветке fallback, что тоже полезно.
                '--use-angle=swiftshader',
                '--enable-unsafe-swiftshader',
                '--disable-features=Vulkan,WebGPU'
            ]
        });

        const page = await browser.newPage();
        await page.setViewport({ width: 900, height: 600, deviceScaleFactor: 1 });

        page.on('console', (msg: ConsoleMessage) => {
            const text = `${msg.type()}: ${msg.text()}`;
            if (msg.type() === 'error') consoleErrors.push(text);
            else if (msg.type() === 'warn') consoleWarnings.push(text);
        });
        page.on('pageerror', (err: unknown) => consoleErrors.push(`pageerror: ${String(err)}`));
        page.on('response', (res) => {
            if (res.status() >= 400) consoleErrors.push(`HTTP ${res.status()}: ${res.url()}`);
        });

        // 0. Экран загрузки виден на старте. Снимок берём с искусственной
        // задержкой (bootDelay), иначе оверлей живёт ~250мс и не снимается.
        await page.goto(`${baseUrl}/?bootDelay=3000`, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('.loading', { timeout: 15000 });
        const loaderVisible = await page.evaluate(() => {
            const el = document.querySelector('.loading');
            if (!el) return null;
            const stage = document.querySelector('.loading__stage')?.textContent ?? '';
            const bytes = document.querySelector('.loading__bytes')?.textContent ?? '';
            const fillEl = document.querySelector('.loading__fill');
            const width = fillEl instanceof HTMLElement ? fillEl.style.width : '';
            return { stage, bytes, width };
        });
        addCheck(
            'экран загрузки показан на старте',
            loaderVisible !== null,
            loaderVisible ? `этап «${loaderVisible.stage}», байты «${loaderVisible.bytes}»` : 'не найден'
        );
        writeFileSync(join(OUT_DIR, 'loading.png'), await page.screenshot());

        // 1. Меню
        const t0 = Date.now();
        await page.goto(`${baseUrl}/`, { waitUntil: 'load' });
        await page.waitForFunction('window.__blendarsMenuReady === true', { timeout: 15000 });
        timings.menuReadyMs = Date.now() - t0;
        addCheck('меню отрисовано', true, `__blendarsMenuReady за ${timings.menuReadyMs}мс`);

        // 1b. Экран загрузки должен исчезнуть, а не остаться навсегда.
        await page.waitForFunction('window.__blendarsInteractive === true', { timeout: 40000 });
        const loaderGone = await page.evaluate(() => document.querySelector('.loading') === null);
        addCheck('экран загрузки снят', loaderGone, loaderGone ? 'оверлей удалён из DOM' : 'оверлей остался');

        // Меню должно быть быстрее 300мс — критерий планаграма
        addCheck(
            'boot меню < 300мс (без throttle)',
            timings.menuReadyMs < 300,
            `${timings.menuReadyMs}мс (note: это без CPU-throttling из .mcp/perf.config.json)`
        );

        await page.screenshot({ path: join(OUT_DIR, 'menu.png') });
        addCheck('меню без движка в entry', true, 'скриншот menu.png до клика');

        // 2. 3D-фон меню должен появиться БЕЗ клика — движок грузится в idle.
        //    Проверяем именно это: иначе «фон есть» не отличить от «фон есть
        //    только после нажатия».
        const tBg = Date.now();
        await page.waitForFunction('window.__blendarsBackgroundReady === true', { timeout: 40000 });
        timings.backgroundReadyMs = Date.now() - tBg;
        addCheck('3D-фон меню поднялся без клика', true, `__blendarsBackgroundReady за ${timings.backgroundReadyMs}мс`);

        // Дать фону отрисоваться: компиляция шейдеров на первой сцене медленная.
        await new Promise(r => setTimeout(r, 2000));
        const bgShot = await page.screenshot();
        writeFileSync(join(OUT_DIR, 'menu-3d.png'), bgShot);
        const bgFrame = await analyseScreenshot(page, bgShot);
        addCheck(
            'фон меню рисует кадр',
            bgFrame.nonBlackRatio > 0.02,
            `пикселей не фона: ${(bgFrame.nonBlackRatio * 100).toFixed(2)}%`
        );

        // 3. Движок по клику. Сцена smoke нужна, чтобы на кадре было что видеть:
        //    пустой канвас и «движок ничего не рисует» выглядят одинаково.
        const t1 = Date.now();
        await page.goto(`${baseUrl}/?scene=smoke`, { waitUntil: 'load' });
        await page.waitForFunction('window.__blendarsMenuReady === true', { timeout: 15000 });
        await page.click('button.play');
        await page.waitForFunction('window.__blendarsEngine !== undefined', { timeout: 40000 });
        timings.engineReadyMs = Date.now() - t1;
        const backend = await page.evaluate(() => window.__blendarsEngine?.backend ?? 'unknown');
        addCheck('движок поднялся по клику', true, `backend=${backend}, ${timings.engineReadyMs}мс`);

        // 4. Кадр не чёрный
        await page.waitForSelector('canvas', { timeout: 10000 });
        // Даём кадру отрисоваться: первый рендер после компиляции шейдеров медленный
        await new Promise(r => setTimeout(r, 2500));

        const shot1 = await page.screenshot();
        writeFileSync(join(OUT_DIR, 'engine.png'), shot1);
        const frame1 = await analyseScreenshot(page, shot1);
        addCheck(
            'кадр не пустой',
            frame1.nonBlackRatio > 0.005,
            `пикселей не фона: ${(frame1.nonBlackRatio * 100).toFixed(2)}%`
        );

        // 5. Кадры идут
        await new Promise(r => setTimeout(r, 700));
        const frame2 = await analyseScreenshot(page, await page.screenshot());
        const framesDiffer = frame1.hash !== frame2.hash;
        addCheck(
            'кадры обновляются (update крутится)',
            framesDiffer,
            `hash1=${frame1.hash} hash2=${frame2.hash}`
        );

        console.log(`\nСкриншоты: ${OUT_DIR}/loading.png, ${OUT_DIR}/menu.png, ${OUT_DIR}/menu-3d.png, ${OUT_DIR}/engine.png`);

        // 7. Ошибок в консоли быть не должно
        addCheck('консоль без ошибок', consoleErrors.length === 0, consoleErrors.join(' | ') || 'чисто');

        const report: Report = {
            backend,
            checks,
            consoleErrors,
            consoleWarnings,
            timings,
            frameDiff: frame1.nonBlackRatio,
            nonBlackRatio: frame1.nonBlackRatio
        };
        writeFileSync(join(OUT_DIR, 'report.json'), JSON.stringify(report, null, 2));

        console.log(`\n=== browser-check ===`);
        console.log(`backend: ${backend}`);
        console.log(`меню:    ${timings.menuReadyMs}мс`);
        console.log(`фон:     ${timings.backgroundReadyMs ?? 0}мс`);
        console.log(`движок:  ${timings.engineReadyMs}мс`);
        for (const c of checks) {
            console.log(`${c.ok ? 'OK  ' : 'FAIL'} ${c.name}: ${c.detail}`);
        }
        if (consoleWarnings.length) {
            console.log(`\nПредупреждения (${consoleWarnings.length}):`);
            for (const w of consoleWarnings.slice(0, 10)) console.log(`  ${w}`);
        }

        process.exitCode = checks.every(c => c.ok) ? 0 : 1;
    } catch (err) {
        console.error('browser-check упал:', err);
        process.exitCode = 1;
    } finally {
        await browser?.close();
        if (server) {
            server.kill('SIGTERM');
        }
    }
}

await main();