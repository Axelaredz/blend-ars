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
import type * as pc from 'playcanvas';

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
        /** Сцена с машиной загружена и физика поднялась. */
        __blendarsSceneReady?: boolean;
    }
}

const host = document.getElementById('app');
if (!host) throw new Error('#app not found');

import { VEHICLE_SCRIPT_NAME } from './vehicles/vehicles.d';

type Engine = import('./core/engine-bootstrap').Engine;
type MenuBackground = import('./menu/menu-background').MenuBackground;
type VehicleSceneHandle = import('./scenes/vehicle-scene').VehicleScene;
type VehicleBody = import('./scenes/vehicle-scene').VehicleBody;

let scene: VehicleSceneHandle | null = null;
let vehicleHudCleanup: (() => void) | null = null;

/** Доли прогресса по этапам: 0 → 1. Общая точка правды для бара. */
const PROGRESS = {
    boot: 0.1,
    device: 0.35,
    decoders: 0.7,
    background: 0.95
} as const;

const loading = new LoadingScreen(document.body);

let enginePromise: Promise<Engine> | null = null;
let engineCanvas: HTMLCanvasElement | null = null;
let unwatchGpuErrors: (() => void) | null = null;
/**
 * Откат уже использован: второй раз пересоздавать движок не пытаемся —
 * иначе зациклимся, если мёртв и WebGL2.
 */
let fallbackUsed = false;
let fallbackInFlight = false;
let background: MenuBackground | null = null;

// Меню монтируется сразу, но остаётся под экраном загрузки: пользователь не
// видит полуготовый интерфейс, а кликнуть по нему нельзя.
const menu = new Menu(host, {
    onPlay: () => {
        void enterGame(menu);
    },
    onScene: (body) => {
        void enterVehicleScene(menu, body);
    },
    onBack: () => {
        void backToMenu(menu);
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

        // WebGPU может успешно создаться и умереть на первом же кадре (OOM на
        // создание пайплайна → каскад невалидных объектов). Без вотчера это
        // зависший кадр + спам в консоль; с ним — молчаливый откат на WebGL2.
        if (engine.backend === 'webgpu') {
            watchForWebGpuFailure(engine);
        }

        loading.setStage('сцена меню', PROGRESS.background);
        const { buildMenuBackground } = await import('./menu/menu-background');
        background = await buildMenuBackground(engine.app);
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
    engineCanvas = canvas;

    // ?backend=webgl2 — принудительный бэкенд для отладки и слабых машин.
    // После отката сюда же ведёт fallbackUsed: второй шанс только на WebGL2.
    const forced = new URLSearchParams(location.search).get('backend');
    // Firefox под Linux: его WebGPU ещё бета и на части стеков (проприетарный
    // NVIDIA) падает с OOM на создании первого же пайплайна при свободной
    // VRAM — воспроизведено на RTX 3060 / Firefox 158. Поэтому по умолчанию
    // сразу WebGL2; ?backend=webgpu возвращает попытку. Пересмотреть, когда
    // WebGPU в Firefox на Linux выйдет из беты.
    const ua = navigator.userAgent;
    const firefoxLinux =
        /firefox\//i.test(ua) && /linux/i.test(ua) && !/android/i.test(ua);
    const deviceTypes: ('webgpu' | 'webgl2')[] =
        forced === 'webgl2' || (forced !== 'webgpu' && (fallbackUsed || firefoxLinux))
            ? ['webgl2']
            : ['webgpu', 'webgl2'];

    return initEngine(canvas, {
        // Физика нужна сцене с машиной. Сам Ammo (1.2 МБ) грузится лениво — при
        // первом обращении к physicsWorld, а не на старте меню.
        physics: true,
        deviceTypes,
        // Явный ?backend=webgpu объезжает зонд софтверного адаптера.
        skipAdapterProbe: forced === 'webgpu',
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

/** Порог спама: столько непойманных ошибок подряд — уже не флуктуация. */
const GPU_ERROR_BUDGET = 5;

/**
 * Откат WebGPU → WebGL2 при смерти контекста в рантайме.
 *
 * Срабатывает на первую же OOM-ошибку (устройство после неё непригодно: все
 * последующие пайплайны/буферы невалидны) либо на исчерпание бюджета мелких
 * validation-ошибок. Одноразовый: fallbackUsed блокирует повтор.
 *
 * Порядок сноса важен: сцена и фон уничтожаются ДО app.destroy() — их destroy
 * освобождает текстуры и отписывается от событий, а после смерти устройства
 * это уже не сработает.
 */
function watchForWebGpuFailure(engine: Engine): void {
    let errors = 0;
    unwatchGpuErrors?.();
    unwatchGpuErrors = null;

    void import('./core/engine-bootstrap').then(({ watchWebGpuErrors }) => {
        // Движок могли откатить, пока грузился чанк, — вотчер мёртвому
        // устройству не нужен, он бы только мешал новому.
        if (fallbackUsed || fallbackInFlight) return;
        unwatchGpuErrors = watchWebGpuErrors(engine.device, (message) => {
            errors++;
            console.warn(`[blendars] webgpu error #${errors}: ${message.slice(0, 200)}`);
            if (isOutOfMemory(message) || errors >= GPU_ERROR_BUDGET) {
                void fallbackToWebGl2(message);
            }
        });
    });
}

function isOutOfMemory(message: string): boolean {
    return /out of memory|not enough memory/i.test(message);
}

async function fallbackToWebGl2(reason: string): Promise<void> {
    if (fallbackUsed || fallbackInFlight) return;
    fallbackInFlight = true;
    console.warn('[blendars] откат на WebGL2:', reason.slice(0, 200));

    try {
        unwatchGpuErrors?.();
        unwatchGpuErrors = null;

        scene?.destroy();
        scene = null;
        window.__blendarsSceneReady = false;
        detachVehicleHud();
        background?.destroy();
        background = null;

        const old = await enginePromise;
        enginePromise = null;
        // app.destroy() сносит и graphicsDevice (см. AppBase.destroy).
        old?.app.destroy();
        engineCanvas?.remove();
        engineCanvas = null;

        fallbackUsed = true;
        const engine = await ensureEngine();
        window.__blendarsEngine = { backend: engine.backend };

        const { buildMenuBackground } = await import('./menu/menu-background');
        background = await buildMenuBackground(engine.app);

        menu.setMode('menu');
        menu.setStatus(`Рендер: ${engine.backend.toUpperCase()} (WebGPU недоступен)`);
    } catch (err) {
        console.error('[blendars] откат на WebGL2 не удался', err);
        menu.setStatus('Рендер недоступен — перезагрузите страницу (F9)');
    } finally {
        fallbackInFlight = false;
    }
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

/**
 * Сцена с машиной: фон меню выключается, грузится демо vehicle-physics.
 *
 * Кузов выбирается в меню: грузовик или Maserati-обвес на том же шасси.
 * Физика Ammo поднимается здесь же — до этого момента её wasm (1.2 МБ) лежал
 * на диске нетронутым и не стоил меню ничего.
 */
async function enterVehicleScene(menu: Menu, body: VehicleBody): Promise<void> {
    menu.setBusy(true);
    menu.setStatus(body === 'maserati' ? 'Загрузка сцены: мазерати…' : 'Загрузка сцены…');
    const loader = showSceneLoader();

    try {
        background?.destroy();
        background = null;

        const engine = await ensureEngine();
        const { buildVehicleScene } = await import('./scenes/vehicle-scene');
        scene = await buildVehicleScene(engine.app, (label) => loader.setStage(label), { body });

        menu.setMode('scene');
        menu.setStatus('WASD / стрелки — ехать, пробел — ручник, R — сброс');
        window.__blendarsSceneReady = true;
        attachVehicleHud(engine.app);
        loader.done();
    } catch (err) {
        console.error('[blendars] vehicle scene failed', err);
        menu.setStatus('Не удалось загрузить сцену');
        loader.fail(String((err as Error)?.message ?? err));
        menu.setBusy(false);
    }
}

/** Возврат в меню: сцена сносится, 3D-фон меню строится заново. */
async function backToMenu(menu: Menu): Promise<void> {
    scene?.destroy();
    scene = null;
    window.__blendarsSceneReady = false;

    const engine = await ensureEngine();
    const { buildMenuBackground } = await import('./menu/menu-background');
    background = await buildMenuBackground(engine.app);

    menu.setMode('menu');
    menu.setBusy(false);
    menu.setStatus(`Рендер: ${engine.backend.toUpperCase()}`);
    detachVehicleHud();
}

/** Мини-HUD машины: скорость и передача. Оригинал рисовал то же самое в DOM. */
function attachVehicleHud(app: pc.AppBase): void {
    const hud = document.createElement('div');
    hud.id = 'vehicle-hud';
    hud.style.cssText =
        'position:fixed;left:24px;bottom:24px;z-index:15;color:#e8e4ff;' +
        'font:600 28px/1.1 system-ui,sans-serif;text-shadow:0 2px 12px #000c;' +
        'pointer-events:none';
    document.body.append(hud);

    const speed = app.systems.rigidbody ? '—' : '—';
    hud.textContent = `${speed} км/ч`;
    // Обновление раз в 4 кадра: HUD не обязан быть 60 Гц, а DOM-текст на
    // каждом кадре — лишняя работа главного потока.
    let frame = 0;
    const onUpdate = (): void => {
        if (frame++ % 4 !== 0) return;
        const script = scene?.root.findByName('vehicle') as pc.Entity | null;
        const vehicleScript = script?.script?.get(VEHICLE_SCRIPT_NAME) as
            | { getCurrentSpeedKmHour?: () => number }
            | null;
        const kmh = Math.round(vehicleScript?.getCurrentSpeedKmHour?.() ?? 0);
        hud.textContent = `${kmh} км/ч`;
    };
    app.on('update', onUpdate);
    hud.dataset.cleanup = '1';
    vehicleHudCleanup = () => {
        app.off('update', onUpdate);
        hud.remove();
    };
}

function detachVehicleHud(): void {
    vehicleHudCleanup?.();
    vehicleHudCleanup = null;
}

function showSceneLoader(): { setStage(label: string): void; done(): void; fail(msg: string): void } {
    const el = document.createElement('div');
    el.className = 'loading';
    el.style.background = 'radial-gradient(ellipse at 50% 40%, #150e2b 0%, #07060d 70%)';
    const title = document.createElement('div');
    title.className = 'loading__title';
    title.textContent = 'СЦЕНА';
    const bar = document.createElement('div');
    bar.className = 'loading__bar loading__bar--unknown';
    const fill = document.createElement('div');
    fill.className = 'loading__fill';
    bar.append(fill);
    const stage = document.createElement('div');
    stage.className = 'loading__stage';
    stage.style.opacity = '0.8';
    stage.style.fontSize = '13px';
    stage.style.textTransform = 'uppercase';
    el.append(title, bar, stage);
    document.body.append(el);

    return {
        setStage(label: string) {
            stage.textContent = label;
        },
        done() {
            el.remove();
        },
        fail(msg: string) {
            bar.hidden = true;
            stage.textContent = `ошибка: ${msg}`;
            setTimeout(() => el.remove(), 4000);
        }
    };
}

// F9 — быстрый перезапуск без похода в DevTools: зависший WebGPU-контекст
// иначе переживает обычный F5.
window.addEventListener('keydown', (e) => {
    if (e.key === 'F9') location.reload();
});