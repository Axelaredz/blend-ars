/**
 * Smoke-сцена: камера, свет и три примитива.
 *
 * Нужна не для красоты, а чтобы браузерный тест видел НЕ-ЧЁРНЫЙ кадр и мог
 * отличить «движок работает» от «движок инициализировался, но ничего не рисует».
 * Вращение куба дополнительно проверяет, что кадры вообще идут.
 *
 * Включается флагом: ?scene=smoke
 */
import * as pc from 'playcanvas';

/** Множитель вращения — одинаков для всех кубов, чтобы не плодить константы. */
const SPIN = 40;

export function buildSmokeScene(app: pc.AppBase): pc.Entity {
    const device = app.graphicsDevice;
    const root = new pc.Entity('smoke-root');
    // ВАЖНО: у AppBase корень — это app.root. `app.scene.root` заполняется только
    // при загрузке .scene через SceneHandler, и без загруженной сцены он null,
    // хотя тип объявлен как Entity (необязательное свойство в рантайме).
    app.root.addChild(root);

    // Камера: очистка неба тёмно-фиолетовая, чтобы отличать от чёрного канваса
    // при проверке «есть ли хоть что-то нарисованное».
    const camera = new pc.Entity('camera');
    camera.addComponent('camera', {
        clearColor: new pc.Color(0.07, 0.05, 0.12),
        fov: 55,
        nearClip: 0.1,
        farClip: 100,
        // Tone mapping задаётся на камере, а не на сцене (см. engine-bootstrap).
        toneMapping: pc.TONEMAP_ACES
    });
    camera.setPosition(0, 1.2, 4);
    camera.lookAt(0, 0, 0);
    root.addChild(camera);

    const light = new pc.Entity('light');
    light.addComponent('light', {
        type: 'directional',
        intensity: 1.6,
        castShadows: false
    });
    light.setEulerAngles(45, 30, 0);
    root.addChild(light);

    const box = new pc.Entity('box');
    const boxMaterial = new pc.StandardMaterial();
    boxMaterial.diffuse = new pc.Color(0.48, 0.36, 0.96);
    boxMaterial.gloss = 0.6;
    boxMaterial.metalness = 0.1;
    boxMaterial.update();
    const boxMesh = pc.Mesh.fromGeometry(device, new pc.BoxGeometry());
    box.addComponent('render', { meshInstances: [new pc.MeshInstance(boxMesh, boxMaterial)] });
    root.addChild(box);

    const sphere = new pc.Entity('sphere');
    const sphereMaterial = new pc.StandardMaterial();
    sphereMaterial.diffuse = new pc.Color(0.96, 0.36, 0.62);
    sphereMaterial.gloss = 0.8;
    sphereMaterial.update();
    const sphereMesh = pc.Mesh.fromGeometry(device, new pc.SphereGeometry({ radius: 0.5 }));
    sphere.addComponent('render', { meshInstances: [new pc.MeshInstance(sphereMesh, sphereMaterial)] });
    sphere.setPosition(1.6, 0, 0);
    root.addChild(sphere);

    const cylinder = new pc.Entity('cylinder');
    const cylMaterial = new pc.StandardMaterial();
    cylMaterial.diffuse = new pc.Color(0.24, 0.86, 0.78);
    cylMaterial.gloss = 0.4;
    cylMaterial.update();
    const cylMesh = pc.Mesh.fromGeometry(device, new pc.CylinderGeometry());
    cylinder.addComponent('render', { meshInstances: [new pc.MeshInstance(cylMesh, cylMaterial)] });
    cylinder.setPosition(-1.6, 0, 0);
    root.addChild(cylinder);

    // update-крутим куб. Горячий цикл: ни одной аллокации — иначе линтер этапа 2 упадёт.
    let t = 0;
    app.on('update', (dt: number) => {
        t += dt * SPIN;
        box.setEulerAngles(t, t * 0.5, 0);
    });

    return root;
}