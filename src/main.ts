/**
 * Точка входа `core`-чанка.
 *
 * Обязательное правило Stage 0: этот модуль и всё, что он тянет на старте,
 * не должны импортировать `playcanvas` статически — иначе ~700 КБ движка
 * попадут в core-чанк и бюджет 250 КБ Brotli будет нарушен.
 * Движок подключается только динамическим `import()` по клику «В бой».
 */
import { Menu } from './ui/menu';

declare global {
    interface Window {
        /** Хук для отладки и e2e-тестов: сюда попадает созданный движок. */
        __blendarsEngine?: { backend: 'webgpu' | 'webgl2' };
        /** Меню отрисовано и готово к клику — на этом моменте мерится boot-время. */
        __blendarsMenuReady?: boolean;
    }
}

const host = document.getElementById('app');
if (!host) throw new Error('#app not found');

let started = false;

const menu = new Menu(host, {
    onPlay: () => {
        void startEngine(menu);
    }
});

// Маркер готовности для perf-сценария menu-offline: выставляется сразу после
// отрисовки меню, до подгрузки движка.
window.__blendarsMenuReady = true;

async function startEngine(menu: Menu): Promise<void> {
    if (started) return;
    started = true;

    try {
        // Динамический импорт: playcanvas уезжает в отдельный чанк и грузится
        // только здесь, уже после отрисовки меню.
        const { initEngine } = await import('./core/engine-bootstrap');

        const canvas = document.createElement('canvas');
        canvas.className = 'game-canvas';
        document.body.append(canvas);

        const result = await initEngine(canvas);
        window.__blendarsEngine = { backend: result.backend };

        menu.setStatus(`Рендер: ${result.backend.toUpperCase()}`);
        console.info('[blendars] engine ready', result.backend);
    } catch (err) {
        started = false;
        console.error('[blendars] engine init failed', err);
        menu.setStatus('Не удалось запустить рендер');
        menu.setBusy(false);
    }
}

// F9 — быстрый перезапуск без похода в DevTools: зависший WebGPU-контекст
// иначе переживает обычный F5.
window.addEventListener('keydown', (e) => {
    if (e.key === 'F9') location.reload();
});