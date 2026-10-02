/**
 * Единственная точка создания PlayCanvas-приложения.
 *
 * Клиент всегда ленивый: движок поднимается по кнопке «В бой», потому что
 * `core`-чанк (меню) не должен тянуть ~700 КБ движка и WebGPU-инициализацию.
 *
 * Замечания по API, проверенные по playcanvas@2.23:
 *  - `AppBase.init()` принимает ЭКЗЕМПЛЯР `AppOptions` (не объектный литерал),
 *    иначе не хватает ~14 полей по умолчанию;
 *  - tone mapping и gamma живут на `CameraComponent`, а не на `Scene` —
 *    сцену они не красят, каждый рендер-проход решает сам (см. этап 4);
 *  - `glslangUrl`/`twgslUrl` не нужны: встроенные шейдеры движка уже в WGSL,
 *    транспилятор нужен только для пользовательского GLSL.
 */
import * as pc from 'playcanvas';

import { initDecoders } from './decoders';

export type Backend = 'webgpu' | 'webgl2';

export interface Engine {
    app: pc.AppBase;
    device: pc.GraphicsDevice;
    backend: Backend;
}

export interface EngineOptions {
    /** Максимальный pixel ratio; DRS (этап 2) уменьшает его динамически. */
    maxPixelRatio?: number;
    /** Антиалиасинг включать только если есть запас по бюджету VRAM. */
    antialias?: boolean;
}

export async function initEngine(canvas: HTMLCanvasElement, opts: EngineOptions = {}): Promise<Engine> {
    // deviceTypes — порядок предпочтения: WebGPU primary, WebGL2 — fallback.
    // Если WebGPU недоступен, createGraphicsDevice сам вернёт WebGL2-устройство.
    const device = await pc.createGraphicsDevice(canvas, {
        deviceTypes: ['webgpu', 'webgl2'],
        antialias: opts.antialias ?? false,
        alpha: false,
        depth: true,
        stencil: false,
        powerPreference: 'high-performance'
    });

    const backend: Backend = device.isWebGPU ? 'webgpu' : 'webgl2';

    const options = new pc.AppOptions();
    options.graphicsDevice = device;
    // Минимальный набор: каждая неиспользуемая система — это код в бандле.
    // Список расширяется по мере надобности (render, light, script — этап 4+).
    options.componentSystems = [
        pc.CameraComponentSystem,
        pc.LightComponentSystem,
        pc.RenderComponentSystem,
        pc.ScriptComponentSystem
    ];
    options.resourceHandlers = [
        pc.TextureHandler,
        pc.ContainerHandler,
        pc.MaterialHandler,
        pc.ModelHandler,
        pc.JsonHandler,
        pc.SceneHandler
    ];

    const app = new pc.AppBase(canvas);
    app.init(options);

    // Канвас управляется движком: FILL_WINDOW держит его на весь экран
    // и сам пересчитывает размер при resize/orientationchange.
    app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW, window.innerWidth, window.innerHeight);
    app.setCanvasResolution(pc.RESOLUTION_AUTO);

    device.maxPixelRatio = opts.maxPixelRatio ?? Math.min(window.devicePixelRatio, 2);

    app.start();

    watchResize(app);
    watchContextLoss(app, device, canvas);
    await initDecoders();

    return { app, device, backend };
}

/**
 * Без слушателей канвас остаётся прежнего размера при повороте экрана,
 * смене окна или появлении экранной клавиатуры.
 */
function watchResize(app: pc.AppBase): void {
    const onResize = (): void => {
        // resizeCanvas двигает сам канвас под fill mode, updateCanvasSize —
        // сообщает устройству новый размер backbuffer с учётом maxPixelRatio (DRS).
        app.resizeCanvas(window.innerWidth, window.innerHeight);
        app.updateCanvasSize();
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
}

/**
 * Потеря контекста — разные события у разных бэкендов: у WebGL2 это события
 * на канвасе, у WebGPU — `GPUDevice.lost` promise. Событие `gfx:lost` уходит
 * в приложение, там решается: пересоздать ресурсы или предложить перезапуск.
 */
function watchContextLoss(app: pc.AppBase, device: pc.GraphicsDevice, canvas: HTMLCanvasElement): void {
    if (device.isWebGPU) {
        const gpuDevice = (device as unknown as { device?: { lost?: Promise<unknown> } }).device;
        void gpuDevice?.lost?.then((info: unknown) => app.fire('gfx:lost', info));
        return;
    }

    canvas.addEventListener('webglcontextlost', (e) => {
        e.preventDefault(); // иначе браузер не даст восстановить контекст
        app.fire('gfx:lost', undefined);
    }, false);

    canvas.addEventListener('webglcontextrestored', () => {
        app.fire('gfx:restored', undefined);
    }, false);
}