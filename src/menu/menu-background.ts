/**
 * Задний план главного экрана: неоновый ангар с Maserati GT3 в центре.
 *
 * Ангар процедурный (пол-сетка, столбы, свет — ноль байт в бандле), машина —
 * внешний GLB `public/models/maserati-gt3.glb` (39.7 МБ, самодостаточный:
 * текстуры и буфер внутри). Поэтому сборка фона асинхронная: вызывается из
 * boot и ждёт загрузки модели до снятия экрана загрузки.
 *
 * Почему не «красивая сцена с playcanv.as»: тот демо-стор — это BMW i8,
 * торговая марка и дизайн под защитой BMW, в публичный репозиторий это класть
 * нельзя, а iframe весит 15.8 МБ и не работает оффлайн.
 *
 * Ограничения, которые здесь сознательно соблюдаются:
 *  - света без теней (фон, а не сцена боя);
 *  - update без единой аллокации — иначе линтер zero-gc упадёт;
 *  - машина НЕ вращается: стоит как экспонат, движется только камера;
 *  - фон не должен блокировать меню: клики перехватывает DOM поверх канваса.
 */
import * as pc from 'playcanvas';

import { loadContainer } from '../core/load-container';

/** Скорость медленного облёта камеры, градусов в секунду. */
const ORBIT_SPEED = 3.2;

/** Радиус облёта камеры вокруг центра ангара. */
const ORBIT_RADIUS = 9;

/** Высота камеры. */
const ORBIT_HEIGHT = 3.4;

/** Множитель тумана: убирает резкий край пола и добавляет глубины. */
const FOG_DENSITY = 0.028;

export interface MenuBackground {
    root: pc.Entity;
    /** Вызывается при уходе с меню — освобождает свет и текстуры. */
    destroy(): void;
}

/** URL модели-экспоната. Лежит в public, в бандле — ноль байт. */
const MASERATI_URL = '/models/maserati-gt3.glb';

export async function buildMenuBackground(
    app: pc.AppBase,
    onProgress?: (label: string) => void
): Promise<MenuBackground> {
    const device = app.graphicsDevice;
    const root = new pc.Entity('menu-background');
    // app.root, а не app.scene.root: см. комментарий в engine-bootstrap
    app.root.addChild(root);

    // Туман — свойства самого объекта FogParams, он read-only: переприсваивать
    // app.scene.fog нельзя, только мутировать (или использовать сеттеры Scene).
    app.scene.fog.type = pc.FOG_EXP2;
    app.scene.fogColor = new pc.Color(0.04, 0.03, 0.09);
    app.scene.fogDensity = FOG_DENSITY;
    app.scene.ambientLight = new pc.Color(0.16, 0.14, 0.28);

    const gridTexture = makeGridTexture(device);

    // Пол: одна плоскость с процедурной сеткой вместо десятков линий-мешей.
    const floor = new pc.Entity('floor');
    const floorMaterial = new pc.StandardMaterial();
    floorMaterial.diffuse = new pc.Color(0.05, 0.05, 0.09);
    floorMaterial.emissiveMap = gridTexture;
    floorMaterial.emissive = new pc.Color(0.55, 0.75, 1.0);
    floorMaterial.emissiveIntensity = 1.6;
    floorMaterial.gloss = 0.85;
    floorMaterial.metalness = 0.35;
    floorMaterial.update();
    floor.addComponent('render', {
        type: 'plane',
        material: floorMaterial,
        castShadows: false,
        receiveShadows: false
    });
    floor.setLocalScale(60, 1, 60);
    root.addChild(floor);

    // Световые полосы по периметру — источник «неона» и вертикали в кадре.
    const stripMaterial = new pc.StandardMaterial();
    stripMaterial.diffuse = new pc.Color(0, 0, 0);
    stripMaterial.emissive = new pc.Color(1.0, 0.42, 0.86);
    stripMaterial.emissiveIntensity = 5.5;
    stripMaterial.update();

    const PILLAR_COUNT = 6;
    const PILLAR_SPACING = 7;
    for (let i = 0; i < PILLAR_COUNT; i++) {
        const angle = (i / PILLAR_COUNT) * Math.PI * 2;
        const pillar = new pc.Entity(`pillar-${i}`);
        pillar.addComponent('render', {
            type: 'box',
            material: stripMaterial,
            castShadows: false,
            receiveShadows: false
        });
        pillar.setLocalScale(0.18, 4.4, 0.18);
        pillar.setPosition(
            Math.cos(angle) * PILLAR_SPACING,
            2.2,
            Math.sin(angle) * PILLAR_SPACING
        );
        root.addChild(pillar);

        // Свет — только на трёх ближних к камере столбах: остальные всё равно
        // за пределами кадра, а лишний источник стоит реального времени в кадре.
        if (i < 3) {
            const lamp = new pc.Entity(`lamp-${i}`);
            lamp.addComponent('light', {
                type: 'omni',
                color: new pc.Color(1.0, 0.45, 0.85),
                intensity: 2.2,
                range: 9,
                castShadows: false
            });
            lamp.setPosition(pillar.getPosition());
            root.addChild(lamp);
        }
    }

    // Центральный экспонат: Maserati GT3. Стоит неподвижно — вращается только
    // камера облёта. Габариты по инспекции: 2.18 × 1.30 × 4.84 м, низ на
    // y≈0, центр по x/z в нуле — ставится как есть, без масштаба.
    //
    // Машина — опциональна: *.glb в гитигноре, и без файла меню обязано жить
    // на одном процедурном ангаре, а не падать целиком.
    onProgress?.('автомобиль');
    try {
        const carAsset = await loadContainer(app, MASERATI_URL);
        const car = (carAsset.resource as pc.ContainerResource)
            .instantiateRenderEntity({ name: 'maserati' }) as pc.Entity;
        car.setPosition(0, 0, 0);
        root.addChild(car);
    } catch (err) {
        console.warn('[menu-background] без экспоната: модель не загрузилась', err);
    }

    const keyLight = new pc.Entity('key-light');
    keyLight.addComponent('light', {
        type: 'directional',
        color: new pc.Color(0.7, 0.8, 1.0),
        // Ярче, чем было при монолите: машина не светится сама (не emissive),
        // её краску должен вытащить ключевой свет.
        intensity: 1.8,
        castShadows: false
    });
    keyLight.setEulerAngles(48, 28, 0);
    root.addChild(keyLight);

    const camera = new pc.Entity('menu-camera');
    camera.addComponent('camera', {
        clearColor: new pc.Color(0.02, 0.015, 0.05),
        fov: 52,
        nearClip: 0.1,
        farClip: 90,
        toneMapping: pc.TONEMAP_ACES
    });
    root.addChild(camera);

    // Горячий цикл. Ни одной аллокации: позиции пишутся через setPosition,
    // углы считаются арифметически. t — единственная плавающая переменная.
    // Машина статична: экспонат не крутится, облёт даёт камера.
    let angle = 205;
    let t = 0;
    const onUpdate = (dt: number): void => {
        angle += dt * ORBIT_SPEED;
        t += dt;
        camera.setPosition(
            Math.cos(angle * Math.PI / 180) * ORBIT_RADIUS,
            ORBIT_HEIGHT + Math.sin(t * 0.6) * 0.5,
            Math.sin(angle * Math.PI / 180) * ORBIT_RADIUS
        );
        camera.lookAt(0, 0.9, 0);
    };
    app.on('update', onUpdate);

    return {
        root,
        destroy(): void {
            app.off('update', onUpdate);
            gridTexture.destroy();
            root.destroy();
        }
    };
}

/**
 * Текстура сетки пола: рисуется один раз на 2D-канвасе в рантайме.
 * Внешний файл не нужен — в бандле это ноль байт.
 */
function makeGridTexture(device: pc.GraphicsDevice): pc.Texture {
    const SIZE = 512;
    const canvas = document.createElement('canvas');
    canvas.width = SIZE;
    canvas.height = SIZE;

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('2d context недоступен для генерации текстуры пола');

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, SIZE, SIZE);

    const CELL = SIZE / 8;
    ctx.strokeStyle = '#3a5cff';
    ctx.lineWidth = 2;
    for (let i = 0; i <= 8; i++) {
        const p = i * CELL;
        ctx.beginPath();
        ctx.moveTo(p, 0);
        ctx.lineTo(p, SIZE);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, p);
        ctx.lineTo(SIZE, p);
        ctx.stroke();
    }

    // Более яркая линия раз в 4 клетки — читается «разметка ангара».
    ctx.strokeStyle = '#b04cff';
    ctx.lineWidth = 5;
    for (let i = 0; i <= 8; i += 4) {
        const p = i * CELL;
        ctx.beginPath();
        ctx.moveTo(p, 0);
        ctx.lineTo(p, SIZE);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, p);
        ctx.lineTo(SIZE, p);
        ctx.stroke();
    }

    const texture = new pc.Texture(device, {
        name: 'menu-floor-grid',
        width: SIZE,
        height: SIZE,
        format: pc.PIXELFORMAT_RGBA8,
        mipmaps: true,
        addressU: pc.ADDRESS_REPEAT,
        addressV: pc.ADDRESS_REPEAT,
        minFilter: pc.FILTER_LINEAR_MIPMAP_LINEAR,
        magFilter: pc.FILTER_LINEAR
    });
    texture.setSource(canvas);
    return texture;
}