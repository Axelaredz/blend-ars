/**
 * Сцена «Внедорожник» — порт демо playcanvas/web-components `vehicle-physics.html`.
 *
 * Оригинал (MIT, © PlayCanvas Ltd) написан под web-components API; здесь тот же
 * состав сцены собран на нашем стеке: AppBase + AmmoPhysicsWorld + наши
 * component-системы. Скрипты машины и камеры — вендоренные .mjs без правок,
 * значения взяты из декларативной разметки оригинала.
 *
 * Что важно знать про этот сценарий:
 *  - он НЕ детерминирован: Ammo считает шаг физики на своей точности, поэтому
 *    для сетевого кода (этап 5, packages/sim) он непригоден. Это витрина
 *    физики, а не основа игры;
 *  - `Vehicle._groundBelow()` вызывает `rigidbody.raycastAll()` каждый кадр и
 *    аллоцирует массив попаданий — это осознанное исключение из нашего
 *    правила zero-GC, и линтер сюда не смотрит (.mjs вне tsconfig).
 *
 * Модели (10 МБ) лежат в public/scenes/vehicle/ и уже сжаты авторами:
 * геометрия — KHR_draco_mesh_compression, текстуры — KHR_texture_basisu (KTX2).
 */
import * as pc from 'playcanvas';

import { ensurePhysics } from '../core/engine-bootstrap';
import { loadContainer } from '../core/load-container';
import { VEHICLE_SCRIPT_NAME } from '../vehicles/vehicles.d';

// Скрипты подключаются динамически: они нужны только этой сцене и не должны
// попадать в чанк меню. Типы живут в vehicles.d.ts.
type VehicleModule = typeof import('../vehicles/vehicle.mjs');
type ChaseCameraModule = typeof import('../vehicles/chase-camera.mjs');
type ScriptCtor = new (args?: unknown) => pc.Script;

export interface VehicleScene {
    root: pc.Entity;
    /** Кузов — для отладочной телеметрии (высота над грунтом в тестах). */
    vehicle: pc.Entity;
    destroy(): void;
}

/**
 * Кузов на шасси грузовика. Физика, подвеска и колёса всегда от грузовика
 * (проверено: стоит на грунте, y=1.95) — меняется только визуальный обвес:
 *  - `truck`: родной кузов;
 *  - `maserati`: кузов GT3 поверх, родной `body` гасится.
 * Полноценной ходовой под Maserati нет: у Sketchfab-модели все 48 мешей
 * в нулевых узлах (геометрия запечена в вершины), колёса отдельно не
 * выделяются, рычагов/пружин нет в принципе — цеплять Vehicle-скрипт не к чему.
 */
export type VehicleBody = 'truck' | 'maserati';

export interface VehicleSceneOptions {
    body?: VehicleBody;
}

/**
 * Смещение кузова Maserati относительно начала шасси: низ модели (y≈0)
 * должен лечь чуть выше плоскости контакта колёс грузовика (y≈-1.45: центры
 * −0.88/−0.82 минус радиусы 0.57/0.63). +15 см запаса, чтобы днище не цепляло
 * грунт на сжатии подвески. По z центры совпадают.
 */
const MASERATI_OFFSET = { x: 0, y: -1.3, z: 0 };

/** Нос GT3 в модели смотрит на +Z, а перед шасси — на −Z: разворот на 180°. */
// const MASERATI_YAW = 0;

const MASERATI_URL = '/models/maserati-gt3.glb';

/** Параметры ходовой из оригинальной разметки — чтобы поведение совпало. */
const VEHICLE_PROPERTIES = {
    maxTorque: 520,
    idleRpm: 800,
    peakTorqueRpm: 1700,
    maxRpm: 4200,
    finalDrive: 7,
    reverseGear: 3.2,
    shiftUpRpm: 3900,
    shiftDownRpm: 1900,
    shiftTime: 0.22,
    maxSteerAngle: 30,
    highSpeedLock: 0.4,
    highSpeedLockAt: 80,
    maxBrakeForce: 6500,
    handbrakeForce: 14000,
    gears: [3.6, 2.2, 1.5, 1.1]
} as const;

interface WheelSetup {
    wheelName: string;
    properties: Record<string, unknown>;
}

/**
 * Колёса. Имена и настройки скопированы из оригинала один в один: скрипт сам
 * ищет рычаги по именам (`linkage: 'arm_front_left spring_front_left'`), поэтому
 * переименование узлов сломает подвеску молча.
 */
const WHEELS: WheelSetup[] = [
    {
        wheelName: 'wheel_front_left',
        properties: {
            radius: 0.572,
            grip: 2.7,
            rollInfluence: 0.08,
            trackOffset: 0.18,
            suspensionRestLength: 0.45,
            maxSuspensionTravel: 0.35,
            steerFactor: 1,
            driveFactor: 1,
            brakeFactor: 1,
            linkageAxis: [1, 0, 0],
            linkage: 'arm_front_left spring_front_left'
        }
    },
    {
        wheelName: 'wheel_front_right',
        properties: {
            radius: 0.572,
            grip: 2.7,
            rollInfluence: 0.08,
            trackOffset: 0.18,
            suspensionRestLength: 0.45,
            maxSuspensionTravel: 0.35,
            steerFactor: 1,
            driveFactor: 1,
            brakeFactor: 1,
            linkageAxis: [1, 0, 0],
            linkage: 'arm_front_right spring_front_right'
        }
    },
    {
        wheelName: 'wheel_rear_left',
        properties: {
            radius: 0.630,
            grip: 2.7,
            rollInfluence: 0.08,
            trackOffset: 0.18,
            suspensionRestLength: 0.45,
            maxSuspensionTravel: 0.35,
            driveFactor: 1,
            brakeFactor: 0.7,
            handbrakeFactor: 1,
            linkageAxis: [1, 0, 0],
            linkage: 'arm_rear_left spring_rear_left'
        }
    },
    {
        wheelName: 'wheel_rear_right',
        properties: {
            radius: 0.630,
            grip: 2.7,
            rollInfluence: 0.08,
            trackOffset: 0.18,
            suspensionRestLength: 0.45,
            maxSuspensionTravel: 0.35,
            driveFactor: 1,
            brakeFactor: 0.7,
            handbrakeFactor: 1,
            linkageAxis: [1, 0, 0],
            linkage: 'arm_rear_right spring_rear_right'
        }
    }
];

/** Стенки по периметру рельефа: колёса и камера не должны уехать с карты. */
const WALL_HALF_EXTENTS: [number, number, number][] = [
    [2, 210, 302],
    [2, 210, 302],
    [302, 210, 2],
    [302, 210, 2]
];

const WALL_POSITIONS: [number, number, number][] = [
    [-300, 190, 0],
    [300, 190, 0],
    [0, 190, -300],
    [0, 190, 300]
];

export async function buildVehicleScene(
    app: pc.AppBase,
    onProgress?: (label: string, ratio?: number) => void,
    opts?: VehicleSceneOptions
): Promise<VehicleScene> {
    const [vehicleModule, chaseCameraModule] = await Promise.all([
        import('../vehicles/vehicle.mjs') as Promise<VehicleModule>,
        import('../vehicles/chase-camera.mjs') as Promise<ChaseCameraModule>
    ]);
    const VehicleClass = vehicleModule.Vehicle as unknown as ScriptCtor;
    const VehicleInputClass = vehicleModule.VehicleInput as unknown as ScriptCtor;
    const VehicleWheelClass = vehicleModule.VehicleWheel as unknown as ScriptCtor;
    const ChaseCameraClass = chaseCameraModule.ChaseCamera as unknown as ScriptCtor;

    // Физика поднимается здесь: меню за неё не платит, а сцене она нужна
    // до создания тел. ensurePhysics идемпотентен.
    await ensurePhysics(app, label => onProgress?.(label, undefined));

    onProgress?.('загрузка моделей', 0.1);
    const [truckAsset, terrainAsset] = await Promise.all([
        loadContainer(app, '/scenes/vehicle/offroad-truck.glb'),
        loadContainer(app, '/scenes/vehicle/rocky-desert.glb')
    ]);

    const root = new pc.Entity('vehicle-scene');
    // Наш движок: app.root, не app.scene.root — см. engine-bootstrap
    app.root.addChild(root);

    // Сброс состояния, оставленного фоном меню: тот ставит тёмно-фиолетовый
    // туман под неоновый ангар. Плюс параметры из оригинальной разметки —
    // экспозиция и дымка задают «дневную пустыню», без них кадр выцветает.
    app.scene.exposure = 0.38;
    app.scene.fog.type = pc.FOG_EXP2;
    app.scene.fogColor = new pc.Color(0.82, 0.86, 0.89);
    app.scene.fogDensity = 0.0035;
    app.scene.ambientLight = new pc.Color(0.05, 0.05, 0.06);

    // Солнце и небо — как в оригинале: 4 каскада теней на 320 м.
    // Солнце. Интенсивность и направление выставляет скрипт неба (он получает
    // ссылку на этот источник), поэтому тут только качество теней — те же
    // параметры, что в оригинале.
    const sun = new pc.Entity('sun');
    sun.addComponent('light', {
        type: 'directional',
        intensity: 1,
        castShadows: true,
        shadowType: pc.SHADOW_PCF5_32F,
        numCascades: 4,
        cascadeDistribution: 0.7,
        cascadeBlend: 0.12,
        shadowDistance: 320,
        shadowResolution: 2048,
        shadowBias: 0.2,
        normalOffsetBias: 0.05
    });
    root.addChild(sun);

    // Небо — штатная процедурная модель из движка, не из web-components.
    try {
        const { ProceduralSky } = await import('playcanvas/scripts/esm/sky/procedural-sky.mjs');
        const sky = new pc.Entity('sky');
        sky.addComponent('script');
        // Параметры неба — из разметки оригинала: elevation/azimuth задают время
        // суток, а sunLight связывает небо с источником света.
        sky.script!.create(ProceduralSky, {
            properties: {
                sunLight: sun,
                elevation: 34,
                azimuth: 135,
                turbidity: 3,
                rayleigh: 2.2,
                mieCoefficient: 0.005,
                mieDirectionalG: 0.8,
                luminance: 1
            }
        });
        root.addChild(sky);
    } catch (err) {
        // Небо — украшение: без него сцена просто останется с однотонным фоном.
        console.warn('[vehicle-scene] небо не построено', err);
    }

    // Рельеф: статический rigidbody + mesh-коллайдер.
    //
    // ВАЖНО: коллайдер ставится на узел С РЕНДЕРОМ, а не на корень контейнера.
    // mesh-коллизия берёт меши только из собственного render-компонента сущности;
    // у корня instantiateRenderEntity рендера нет (меши лежат в дочерних узлах),
    // поэтому фигура получается пустой и грузовик падает сквозь пол. В оригинале
    // тот же нюанс: «the collider goes on the bound node because a mesh needs
    // a render component».
    onProgress?.('рельеф', 0.5);
    const terrainRoot = (terrainAsset.resource as pc.ContainerResource)
        .instantiateRenderEntity({ name: 'terrain-root' }) as pc.Entity;
    let terrainNode = terrainRoot.findByName('terrain') as pc.Entity | null;
    if (!terrainNode?.render) {
        // Запасной путь: первый попавшийся узел с рендером, если привязка
        // по имени не сошлась (например, glTF переименовали при экспорте).
        terrainNode = terrainRoot.findOne((node) => Boolean((node as pc.Entity).render)) as pc.Entity | null;
    }
    if (!terrainNode) {
        throw new Error('в rocky-desert.glb нет узла с рендером для mesh-коллайдера');
    }
    terrainNode.addComponent('collision', { type: 'mesh' });
    terrainNode.addComponent('rigidbody', { type: 'static', friction: 1 });
    // Привязка коллайдера к Render-ресурсу узла: mesh-фигура строится ТОЛЬКО
    // из component._render/_model, сам render-компонент сущности движок не
    // подхватывает (см. createMeshShape/doRecreateMeshShape). Без этой строки
    // фигура пустая и грузовик падает сквозь пол — молча, без ошибок в консоли.
    const terrainRenderId = terrainNode.render?.asset;
    const terrainRenderAsset = terrainRenderId != null ? app.assets.get(terrainRenderId) : undefined;
    // Тип структурный: класс Render движок из пакета не экспортирует.
    const terrainRender = terrainRenderAsset?.resource as { meshes?: unknown[] } | undefined;
    if (!terrainRender || !terrainRender.meshes || terrainRender.meshes.length === 0) {
        throw new Error('у узла terrain нет Render-ресурса для mesh-коллайдера');
    }
    terrainNode.collision!.render = terrainRender;
    root.addChild(terrainRoot);

    // Грузовик: контейнер сразу становится физическим телом — узлы уже
    // разложены по местам (arm_*, spring_*, wheel_*), скрипту важны их имена.
    onProgress?.('техника', 0.75);
    const vehicle = (truckAsset.resource as pc.ContainerResource)
        .instantiateRenderEntity({ name: 'vehicle' }) as pc.Entity;
    vehicle.setPosition(240, 1.6, -240);
    vehicle.setEulerAngles(0, 180, 0);

    // Центр масс — в начале координат: single-box поднял бы массу на 1.45 м
    // при Track 2.1 м, и грузовик переворачивался бы на любом уклоне.
    vehicle.addComponent('collision', { type: 'compound' });
    vehicle.addComponent('rigidbody', {
        type: 'dynamic',
        mass: 2200,
        friction: 0.4
    });

    const hull = new pc.Entity('hull-collider');
    hull.setLocalPosition(0, 0.55, 0);
    hull.addComponent('collision', { type: 'box', halfExtents: new pc.Vec3(0.95, 0.7, 2.45) });
    vehicle.addChild(hull);
    root.addChild(vehicle);

    // Скрипты. entity.script.create() — современный API; в web-components
    // они цеплялись декларативно через <pc-script-instance>.
    vehicle.addComponent('script');
    vehicle.script!.create(VehicleClass, { properties: { ...VEHICLE_PROPERTIES } });
    vehicle.script!.create(VehicleInputClass);

    for (const wheel of WHEELS) {
        const wheelEntity = vehicle.findByName(wheel.wheelName) as pc.Entity | null;
        if (!wheelEntity) {
            console.warn(`[vehicle-scene] не найдено колесо ${wheel.wheelName}`);
            continue;
        }
        if (!wheelEntity.script) wheelEntity.addComponent('script');
        wheelEntity.script!.create(VehicleWheelClass, { properties: { ...wheel.properties } });
    }

    // Обвес Maserati: грузится только по выбору (39.7 МБ мимо пути truck).
    // Родной кузов гасится целиком (узел без детей), рычаги/пружины/колёса
    // остаются — они и есть ходовая, скрипт других имён не знает.
    if (opts?.body === 'maserati') {
        await mountMaseratiShell(app, vehicle, (label) => onProgress?.(label, undefined));
    }

    // Стенки рельефа — коллайдеры без рендера.
    for (let i = 0; i < WALL_POSITIONS.length; i++) {
        const wall = new pc.Entity(`wall-${i}`);
        wall.setPosition(...WALL_POSITIONS[i]!);
        wall.addComponent('collision', {
            type: 'box',
            halfExtents: new pc.Vec3(...WALL_HALF_EXTENTS[i]!)
        });
        wall.addComponent('rigidbody', { type: 'static' });
        root.addChild(wall);
    }

    // Камера преследования: в оригинале тоже отдельная сущность, но она
    // вешается на существующий rig, а не создаётся заново.
    const camera = new pc.Entity('camera');
    camera.setPosition(0, 5, 12);
    camera.addComponent('camera', {
        clearColor: new pc.Color(0.82, 0.86, 0.89),
        toneMapping: pc.TONEMAP_NEUTRAL,
        farClip: 600,
        fov: 60
    });
    camera.addComponent('script');
    camera.script!.create(ChaseCameraClass, {
        properties: {
            target: vehicle,
            distance: 8.5,
            height: 2.9,
            aim: 1.5,
            turnRate: 2.2,
            rate: 9,
            pullback: 3.5,
            pullbackAt: 70,
            clearance: 1.4
        }
    });
    root.addChild(camera);

    // Сброс по R: скрипт ввода шлёт событие, слушаем его на уровне сцены.
    const onReset = (): void => {
        const script = vehicle.script?.get(VEHICLE_SCRIPT_NAME) as { reset?: () => void } | null;
        script?.reset?.();
    };
    app.on('vehicle:reset', onReset);

    onProgress?.('сцена готова', 1);

    // Отладочный хук для browser-check: высота кузова семплируется тестом,
    // чтобы поймать «машина падает сквозь пол» числом, а не глазом.
    const debugWindow = window as unknown as { __blendarsTruck?: pc.Entity | undefined };
    debugWindow.__blendarsTruck = vehicle;

    return {
        root,
        vehicle,
        destroy(): void {
            debugWindow.__blendarsTruck = undefined;
            app.off('vehicle:reset', onReset);
            root.destroy();
            // Ресурсы контейнеров остаются в AssetRegistry — их снимает destroy(app).
        }
    };
}

/**
 * Кузов Maserati поверх шасси грузовика.
 *
 * Сначала грузим — и только при успехе гасим родной `body`: файл в гитигноре
 * (*.glb), и на чистой машине его может не быть — тогда едем на грузовике,
 * а не падаем целиком.
 */
async function mountMaseratiShell(
    app: pc.AppBase,
    vehicle: pc.Entity,
    onProgress?: (label: string) => void
): Promise<void> {
    onProgress?.('кузов maserati');
    let shellAsset: pc.Asset;
    try {
        shellAsset = await loadContainer(app, MASERATI_URL);
    } catch (err) {
        console.warn('[vehicle-scene] нет кузова Maserati, еду на грузовике', err);
        return;
    }
    const truckBody = vehicle.findByName('body');
    if (truckBody) truckBody.enabled = false;
    const shell = (shellAsset.resource as pc.ContainerResource)
        .instantiateRenderEntity({ name: 'maserati-shell' }) as pc.Entity;
    // Шасси кренится в физике — обвес едет вместе с ним как ребёнок.
    // Порядок важен: сначала в иерархию, потом трансформ (см. ниже).
    vehicle.addChild(shell);
    shell.setLocalPosition(MASERATI_OFFSET.x, MASERATI_OFFSET.y, MASERATI_OFFSET.z);
    // Поворот — ТОЛЬКО через кватернион: setEulerAngles/setLocalEulerAngles
    // оставляют сущность в рассинхроне (кэш эйлера (180,0,180), а кватернион
    // identity) — рендер идёт по кватерниону, и кузов остаётся неразвёрнутым.
    // Прямая запись кватерниона этот рассинхрон обходит.
    shell.setLocalRotation(new pc.Quat().setFromEulerAngles(90, -90, -90));
}
