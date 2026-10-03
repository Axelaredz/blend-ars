/**
 * Точка входа `core`-чанка.
 *
 * Обязательное правило Stage 0: этот модуль и всё, что он тянет на старте,
 * не должны импортировать `playcanvas` статически — иначе ~240 КБ движка
 * попадут в core-чанк и бюджет 250 КБ Brotli будет нарушен.
 *
 * Порядок старта:
 *  1. экран загрузки (чистый DOM, рисуется первым же кадром);
 *  2. DOM-меню;
 *  3. движок и 3D-фон меню — по прогрессу экран загрузки;
 *  4. по клику «В бой» переиспользуем тот же движок — второй раз не создаём.
 */
import { LoadingScreen } from './ui/loading-screen';
import { Menu } from './ui/menu';

declare global {
    interface Window {
        /** Хук для отладки и e2e-тестов: сюда попадает созданный движок. */
        __blendarsEngine?: { backend: 'webgpu' | 'webgl2' };
        /** Экран загрузки нарисован — с этого момента считается boot-время. */
        __blendarsMenuReady?: boolean;
        /** Загрузка полностью закончилась, меню кликабельно. */
        __blendarsInteractive?: boolean;
        /** 3D-фон меню построен (канвас под меню уже рисует кадры). */
        __blendarsBackgroundReady?: boolean;
    }
}

const host = document.getElementById('app');
if (!host) throw new Error('#app not found');

type Engine = import('./core/engine-bootstrap').Engine;
type MenuBackground = import('./menu/menu-background').MenuBackground;

/** Доли прогресса по этапам: 0 → 1. Общая точка правды для бара. */
const PROGRESS = {
    boot: 0.1,
    device: 0.35,
    decoders: 0.7,
    background: 0.95
} as const;

const loading = new LoadingScreen(document.body);

let enginePromise: Promise<Engine> | null = null;
let background: MenuBackground | null = null;

// Меню монтируется сразу, но остаётся под экраном загрузки: пользователь не
// видит полуготовый интерфейс, а кликнуть по нему нельзя.
const menu = new Menu(host, {
    onPlay: () => {
        void enterGame(menu);
    }
});

loading.setStage('интерфейс', PROGRESS.boot);
window.__blendarsMenuReady = true;

void boot();

/**
 * Полный цикл загрузки: движок → декодеры → 3D-фон меню.
 *
 * Экран загрузки снимается только после того, как фон реально построен:
 * иначе пользователь увидит пустой чёрный канвас вместо готового меню.
 */
async function boot(): Promise<void> {
    try {
        const engine = await ensureEngine((label, ratio) => {
            loading.setStage(label, ratio ?? undefined);
            loading.updateFromResources();
            void applyBootDelay();
        });
        window.__blendarsEngine = { backend: engine.backend };

        loading.setStage('сцена меню', PROGRESS.background);
        const { buildMenuBackground } = await import('./menu/menu-background');
        background = buildMenuBackground(engine.app);
        window.__blendarsBackgroundReady = true;

        loading.setStage('готово', 1);
        menu.setStatus(`Рендер: ${engine.backend.toUpperCase()}`);
        await loading.hide();

        // Ставится ПОСЛЕ hide: до этого момента меню перекрыто оверлеем и
        // кликабельным не считается.
        window.__blendarsInteractive = true;
        console.info('[blendars] boot complete', engine.backend);
    } catch (err) {
        console.error('[blendars] boot failed', err);
        loading.setError(
            'Не удалось запустить рендер. Проверьте поддержку WebGPU/WebGL2 в браузере.'
        );
        // Меню остаётся рабочим даже без 3D — ошибку пользователь должен видеть,
        // но не в виде мёртвого экрана загрузки навсегда.
        window.__blendarsInteractive = true;
    }
}

/**
 * Отладочная задержка загрузки: `?bootDelay=2000`.
 *
 * Нужна, чтобы увидеть и проверить экран загрузки — в норме он живёт ~250 мс,
 * и снять его скриншот невозможно. В production-коде путь не выполняется:
 * параметр есть только в URL.
 */
async function applyBootDelay(): Promise<void> {
    const raw = new URLSearchParams(location.search).get('bootDelay');
    if (!raw) return;
    const ms = Number(raw);
    if (!Number.isFinite(ms) || ms <= 0) return;
    await new Promise(r => setTimeout(r, Math.min(ms, 30000)));
}

/** Ленивая инициализация движка; повторные вызовы возвращают тот же промис. */
function ensureEngine(
    onStage?: (label: string, ratio?: number) => void
): Promise<Engine> {
    enginePromise ??= createEngine(onStage);
    return enginePromise;
}

async function createEngine(
    onStage?: (label: string, ratio?: number) => void
): Promise<Engine> {
    const { initEngine } = await import('./core/engine-bootstrap');

    const canvas = document.createElement('canvas');
    canvas.className = 'game-canvas';
    // Канвас уходит ПОД меню и под экран загрузки: z-index 0 против 10 и 100.
    canvas.style.zIndex = '0';
    document.body.insertBefore(canvas, host);

    return initEngine(canvas, {
        onStage: (label, ratio) => {
            // ratio приходит от движка только для двух этапов; остальное
            // раскидываем по нашим долям, чтобы бар не прыгал назад.
            if (ratio === 1) {
                onStage?.(label, PROGRESS.decoders);
            } else {
                onStage?.(label, PROGRESS.device);
            }
        }
    });
}

async function enterGame(menu: Menu): Promise<void> {
    menu.setBusy(true);

    try {
        await ensureEngine();

        // Тестовая сцена включается флагом: ?scene=smoke — нужна браузерному
        // тесту, чтобы отличить «движок работает» от «канвас чёрный».
        if (new URLSearchParams(location.search).get('scene') === 'smoke') {
            const { buildSmokeScene } = await import('./core/smoke-scene');
            background?.destroy();
            background = null;
            buildSmokeScene((await ensureEngine()).app);
        }

        // Ангар появится на этапе 4; на этом этапе вход только проверяет,
        // что прогретый движок переиспользуется, а не создаётся заново.
        menu.setStatus('Ангар появится на этапе 4');
    } catch (err) {
        console.error('[blendars] enter game failed', err);
        menu.setStatus('Не удалось открыть сцену');
        menu.setBusy(false);
    }
}

// F9 — быстрый перезапуск без похода в DevTools: зависший WebGPU-контекст
// иначе переживает обычный F5.
window.addEventListener('keydown', (e) => {
    if (e.key === 'F9') location.reload();
});