/**
 * Загрузка GLB-контейнера через AssetRegistry.
 *
 * ВАЖНО: `AssetRegistry.load(asset)` возвращает **void** — это событийная
 * API (`load:asset:<id>` / `error:asset:<id>`), а не промис. Оборачивать его
 * в await бесполезно: await undefined даст undefined и мы уйдём дальше с
 * неготовым ресурсом. Правильная обёртка — `loadFromUrl`, который к тому же
 * переиспользует уже зарегистрированный по URL ассет.
 */
import * as pc from 'playcanvas';

export function loadContainer(app: pc.AppBase, url: string): Promise<pc.Asset> {
    return new Promise((resolve, reject) => {
        app.assets.loadFromUrl(url, 'container', (err, asset) => {
            if (err || !asset) {
                reject(new Error(`не удалось загрузить ${url}: ${String(err ?? 'ресурс пуст')}`));
                return;
            }
            resolve(asset);
        });
    });
}
