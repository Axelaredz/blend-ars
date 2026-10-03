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
    /**
     * Порядок предпочтения бэкендов. По умолчанию WebGPU primary, WebGL2 —
     * fallback. После падения WebGPU (OOM/потеря устройства) сюда передают
     * `['webgl2']`, чтобы пересоздать движок на заведомо живом бэкенде.
     */
    deviceTypes?: ('webgpu' | 'webgl2')[];
    /**
     * Пропустить зонд адаптера. Нужно только для `?backend=webgpu`: явный
     * выбор пользователя важнее нашей эвристики про софтверный рендер.
     */
    skipAdapterProbe?: boolean;
    /**
     * Поднять физику Ammo (нужна сцене с машиной).
     *
     * Стоит ~1.2 МБ ленивой загрузки (wasm + glue) и заметного времени на
     * инициализацию, поэтому по умолчанию выключено: ангару и меню физика не
     * требуется, а наш сетевой sim детерминирован и без Bullet.
     */
    physics?: boolean;
    /**
     * Колбэк прогресса загрузки. ratio отсутствует, если точный прогресс
     * неизвестен — экран загрузки тогда показывает indeterminate-режим.
     */
    onStage?: (label: string, ratio?: number) => void;
}

export async function initEngine(canvas: HTMLCanvasElement, opts: EngineOptions = {}): Promise<Engine> {
    const onStage = opts.onStage;

    onStage?.('графическое устройство');
    let deviceTypes = opts.deviceTypes ?? ['webgpu', 'webgl2'];
    // Предполётная проверка адаптера: софтверный WebGPU (Lavapipe/LLVMPipe/
    // SwiftShader) успешно создаётся, а на первом же кадре умирает с OOM —
    // при свободной VRAM, что особенно сбивает с толку. Такой адаптер
    // отсекаем заранее, а не через откат после падения.
    if (deviceTypes.includes('webgpu') && !opts.skipAdapterProbe) {
        const adapter = await probeWebGpuAdapter();
        if (adapter && adapter.software) {
            console.warn(`[engine] софтверный WebGPU-адаптер (${adapter.label}) — сразу WebGL2`);
            deviceTypes = deviceTypes.filter(t => t !== 'webgpu');
        }
    }
    // deviceTypes — порядок предпочтения: WebGPU primary, WebGL2 — fallback.
    // Если WebGPU недоступен, createGraphicsDevice сам вернёт WebGL2-устройство.
    const device = await pc.createGraphicsDevice(canvas, {
        deviceTypes,
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
    options.componentSystems = [
        pc.CameraComponentSystem,
        pc.LightComponentSystem,
        pc.RenderComponentSystem,
        pc.ScriptComponentSystem
    ];

    if (opts.physics) {
        // Системы регистрируются сразу, а мир физики — НЕТ: без physicsWorld
        // движок не грузит Ammo, и меню не платит за 1.2 МБ wasm, который
        // понадобится только сцене с машиной.
        options.componentSystems.push(
            pc.RigidBodyComponentSystem,
            pc.CollisionComponentSystem,
            pc.JointComponentSystem
        );
    }
    options.resourceHandlers = [
        pc.TextureHandler,
        pc.ContainerHandler,
        pc.MaterialHandler,
        pc.ModelHandler,
        pc.JsonHandler,
        pc.SceneHandler
    ];

    // Клавиатура нужна сцене с машиной (WASD, пробел, R). Ставится ДО init:
    // AppBase копирует поле в app.keyboard именно во время init, иначе
    // app.keyboard остаётся null, а VehicleInput.update() падает на
    // `keyboard.isPressed` каждый кадр.
    options.keyboard = new pc.Keyboard(window);

    const app = new pc.AppBase(canvas);
    app.init(options);

    // Канвас управляется движком: FILL_WINDOW держит его на весь экран
    // и сам пересчитывает размер при resize/orientationchange.
    app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW, window.innerWidth, window.innerHeight);
    app.setCanvasResolution(pc.RESOLUTION_AUTO);

    device.maxPixelRatio = opts.maxPixelRatio ?? 1;
    // Единица, а не min(dpr, 2): DRS появится только на этапе 2, а до него
    // DPR 2 на весь экран — главный множитель видеопамяти, который мы
    // контролируем. На размытом фоне меню разница незаметна, а упавший по OOM
    // WebGPU (см. watchWebGpuErrors) — заметен очень.

    app.start();

    watchResize(app);
    watchContextLoss(app, device, canvas);

    app.fire('engine:ready');

    // Декодеры: 438 КБ brotli лениво, но до первого GLB они обязаны быть готовы,
    // иначе первая загрузка модели упадёт уже во время сцены.
    onStage?.('декодеры ассетов');
    await initDecoders();
    onStage?.('движок готов', 1);

    return { app, device, backend };
}

/**
 * Ленивая установка физики: грузит Ammo и ставит мир в систему RigidBody.
 *
 * Почему не через AppOptions.physicsWorld: чтобы мир был создан при
 * `AppBase.init`, а это происходит на старте меню. Там физика не нужна, а Ammo
 * — это 1.2 МБ wasm плюс время инициализации, которые меню платить не должно.
 * `setPhysicsWorld()` публичный метод — документированный путь для установки
 * бэкенда после init.
 *
 * Вызывается сценой перед созданием тел; повторные вызовы безопасны.
 */
export async function ensurePhysics(app: pc.AppBase, onStage?: (label: string) => void): Promise<void> {
    const system = app.systems.rigidbody as pc.RigidBodyComponentSystem | undefined;
    if (!system) throw new Error('RigidBodyComponentSystem не зарегистрирован');

    // Уже установлен — ничего не делаем: бэкенд можно поставить только один раз.
    if (system.physicsWorld) return;

    const globals = globalThis as { Ammo?: unknown };

    if (!globals.Ammo) {
        onStage?.('физика');
        // Три шага, и ни один из них нельзя пропустить:
        //  1. setConfig — только регистрирует URL модуля, ничего не грузит;
        //  2. getInstance — асинхронно грузит glue + wasm и отдаёт инстанс;
        //  3. globalThis.Ammo — AmmoPhysicsWorld и vehicle.mjs обращаются к
        //     глобальному `Ammo` по имени, поэтому инстанс обязан туда попасть.
        // Без шага 3 конструктор физического мира падает «Ammo is not defined».
        await new Promise<void>((resolve, reject) => {
            pc.WasmModule.setConfig('Ammo', {
                glueUrl: '/ammo/ammo.wasm.js',
                wasmUrl: '/ammo/ammo.wasm',
                fallbackUrl: '/ammo/ammo.wasm.js',
                errorHandler: (err: unknown) => reject(new Error(`Ammo не загрузился: ${String(err)}`))
            });
            pc.WasmModule.getInstance('Ammo', (instance: unknown) => {
                if (!instance) {
                    reject(new Error('Ammo вернул пустой инстанс'));
                    return;
                }
                globals.Ammo = instance;
                resolve();
            });
        });
    }

    onStage?.('мир физики');
    system.setPhysicsWorld(new pc.AmmoPhysicsWorld());
}

/**
 * Предполётный опрос WebGPU-адаптера: кто реально будет рендерить.
 *
 * Возвращает null, если WebGPU нет вообще (тогда решает createGraphicsDevice).
 * Никогда не бросает: зонд не должен ломать загрузку, он только подсказывает.
 * Строка адаптера всегда уходит в консоль — по ней опознаётся битый стек
 * (как OOM при свободной VRAM на Firefox+NVIDIA/Linux).
 */
async function probeWebGpuAdapter(): Promise<{ label: string; software: boolean } | null> {
    try {
        const gpu = navigator.gpu;
        if (!gpu) return null;
        const adapter = await gpu.requestAdapter({ powerPreference: 'high-performance' });
        if (!adapter) return null;
        const info = adapter.info as GPUAdapterInfo & { isFallbackAdapter?: boolean };
        const label = [info.vendor, info.architecture, info.device, info.description]
            .filter(Boolean)
            .join(' / ');
        // Firefox отдаёт пустой info целиком — тогда единственный опознаватель
        // софтверности это isFallbackAdapter и ужимки лимитов. Пишем всё одной
        // строкой, чтобы по логу пользователя было видно, кто рендерит.
        const fallback = info.isFallbackAdapter === true;
        const limits = adapter.limits;
        console.info(
            `[engine] webgpu adapter: ${label || '(без описания)'} ` +
            `fallback=${String(fallback)} ` +
            `maxTexture2D=${limits.maxTextureDimension2D} ` +
            `maxBuffer=${limits.maxBufferSize} ` +
            `features=${adapter.features.size}`
        );
        const software =
            fallback ||
            /llvmpipe|lavapipe|softpipe|swrast|swiftshader|software|basic render|angle \(google/i
                .test(label);
        return { label, software };
    } catch (err) {
        console.warn('[engine] зонд WebGPU-адаптера не удался, едем вслепую', err);
        return null;
    }
}

/**
 * Слежка за непойманными ошибками WebGPU (`uncapturederror` на raw-устройстве).
 *
 * PlayCanvas сам только логирует их в консоль («Uncaptured WebGPU error») и
 * продолжает рендерить в мёртвый контекст: OOM при создании пайплайна даёт
 * каскад невалидных bind group/буферов, а пользователь видит зависший кадр.
 * Этот вотчер отдаёт текст ошибки наружу, чтобы приложение могло откатиться
 * на WebGL2 вместо бесконечного спама в консоль.
 *
 * Доступ к raw-устройству — тем же приведением типов, что и в watchContextLoss:
 * поле `wgpu` у WebgpuGraphicsDevice приватное по типам, но стабильно по факту.
 *
 * Возвращает отписку. На WebGL2-устройстве делать нечего — возвращает noop.
 */
export function watchWebGpuErrors(
    device: pc.GraphicsDevice,
    onError: (message: string) => void
): () => void {
    if (!device.isWebGPU) return () => undefined;
    const raw = (device as unknown as { wgpu?: GPUDevice | null }).wgpu;
    if (!raw?.addEventListener) return () => undefined;

    const handler = (ev: GPUUncapturedErrorEvent): void => {
        onError(ev.error?.message ?? String(ev.error ?? 'unknown webgpu error'));
    };
    raw.addEventListener('uncapturederror', handler);
    return () => raw.removeEventListener('uncapturederror', handler);
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