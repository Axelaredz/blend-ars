import { defineConfig, type Plugin } from 'vite';

/**
 * Чанки, которые НЕЛЬЗЯ подгружать вместе с меню.
 *
 * Vite при сборке вставляет `<link rel="modulepreload">` на статические зависимости
 * динамических импортов тоже. Из-за этого playcanvas (1.1 МБ) начинает качаться
 * сразу при открытии index.html, и весь смысл ленивого старта меню (~300 мс
 * оффлайн) пропадает. Плагин вырезает такие ссылки — сам факт загрузки остаётся
 * на динамическом импорте в `src/main.ts`.
 */
const LAZY_CHUNK_RE = /(playcanvas|colyseus)\.[^"]*\.js/;

function lazyEngineChunks(): Plugin {
    return {
        name: 'blendars:no-preload-lazy-chunks',
        enforce: 'post',
        transformIndexHtml: {
            order: 'post',
            handler(html) {
                return html.replace(/<link[^>]*rel="modulepreload"[^>]*>/g, (tag) =>
                    LAZY_CHUNK_RE.test(tag) ? '' : tag
                );
            }
        }
    };
}

// Декодеры (Draco/Basis) PlayCanvas грузит по URL из воркеров, поэтому:
//  - assetsInlineLimit = 0 — инлайн сделал бы их недоступными по URL и раздул core-чанк;
//  - держим их в public/, а не в бандле, чтобы они не попадали в chunks.
export default defineConfig({
    plugins: [lazyEngineChunks()],
    build: {
        target: 'es2022',
        assetsInlineLimit: 0,
        rollupOptions: {
            output: {
                manualChunks(id: string) {
                    if (id.includes('node_modules/playcanvas')) return 'playcanvas';
                    if (id.includes('node_modules/colyseus')) return 'colyseus';
                    return undefined;
                },
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash][extname]'
            }
        }
    },
    worker: {
        format: 'es'
    },
    // COOP/COEP нужны для performance.measureUserAgentSpecificMemory() в perf-тестах.
    server: {
        port: 5173,
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp'
        }
    },
    preview: {
        port: 4173,
        headers: {
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp'
        }
    }
});