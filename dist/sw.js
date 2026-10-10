/**
 * Service Worker оболочки: оффлайн-старт меню и кеш статики.
 *
 * ВАЖНО, ЧТО ЗДЕСЬ НЕ РАБОТАЕТ НА БОЕВОМ ХОСТИНГЕ. Там отдаётся
 * `Content-Security-Policy: frame-ancestors 'none'; worker-src 'none'`, а
 * директива `worker-src` управляет в том числе ServiceWorker (MDN:
 * «specifies valid sources for Worker, SharedWorker, or ServiceWorker
 * scripts»). Регистрация под `'none'` отклоняется, поэтому на ca6p.site файл
 * лежит мёртвым грузом. Он нужен на хостинге без запрета worker-src, и именно
 * поэтому регистрация идёт через пробу (loader/capabilities.ts), а не сразу.
 *
 * Что делает файл, когда его разрешают:
 *  - install кладёт в кеш ТОЛЬКО оболочку (список берётся из asset-manifest.json,
 *    который кладёт сборка). Хешированные ассеты туда не кладутся намеренно:
 *    install упал бы на любом битом билде и съел бы квоту на весь старт;
 *  - ассеты (GLB, wasm) обслуживает OPFS-загрузчик, а не этот файл: держать
 *    60 МБ ассетов ещё и в Cache API означало бы две копии на диске;
 *  - navigations отдаются из кеша по адресу оболочки: каталог `/` на хостинге
 *    отвечает 404, поэтому корень приводится к index.html;
 *  - `/api/` и `/colyseus/` не кешируются никогда — это сеть, а не статика.
 *
 * Версия кеша = версия манифеста (короткий sha коммита), поэтому смена сборки
 * автоматически вытесняет старый кеш.
 */
const MANIFEST_PATH = 'asset-manifest.json';
const FALLBACK_VERSION = 'shell-dev-2';
/** Расширения, которые имеет смысл кешировать для оффлайн-старта. */
const CACHEABLE = /\.(js|mjs|css|wasm|json|webp|png|svg|ico|webmanifest)$/;

self.addEventListener('install', (event) => {
    event.waitUntil(
        (async () => {
            const scope = self.registration.scope;
            const version = await cacheVersion();
            const cache = await caches.open(version);
            const shell = await resolveShell(scope);
            // addAll падает целиком при любой ошибке — поэтому кладём по одному и
            // не роняем install из-за одного битого файла.
            await Promise.all(
                shell.map(async (path) => {
                    try {
                        await cache.add(new Request(new URL(path, scope).href, { cache: 'reload' }));
                    } catch (err) {
                        console.warn('[sw] не закэширован', path, err);
                    }
                })
            );
            await self.skipWaiting();
        })()
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            const version = await cacheVersion();
            const names = await caches.keys();
            await Promise.all(names.filter((n) => n !== version).map((n) => caches.delete(n)));
            await self.clients.claim();
        })()
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;
    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;
    // Сеть и колы: никогда не из кеша.
    if (url.pathname.includes('/api/') || url.pathname.includes('/colyseus/')) return;

    if (request.mode === 'navigate') {
        event.respondWith(handleNavigation(event));
        return;
    }
    // Ассеты (GLB, wasm) обслуживает OPFS-загрузчик; здесь только статика.
    if (!CACHEABLE.test(url.pathname)) return;

    // Фоновое обновление кеша отцепляется через waitUntil, который обязан быть
    // вызван СИНХРОННО в обработчике: после любого await браузер бросает
    // InvalidStateError. Поэтому обе фазы создаются здесь, без await.
    const { background, response } = staleWhileRevalidate(request);
    event.waitUntil(background);
    event.respondWith(response);
});

/** Версия кеша вычисляется один раз за жизнь инстанса SW. */
let versionPromise = null;
function cacheVersion() {
    versionPromise ??= resolveVersion(self.registration.scope);
    return versionPromise;
}

/**
 * Stale-while-revalidate: пользователю отдаётся кеш (или сеть), а обновление
 * кеша едет в waitUntil. Один запрос `fetch` обслуживает обе фазы: клон
 * берётся до чтения тела, поэтому тело читается дважды без нагрузки на сеть.
 */
function staleWhileRevalidate(request) {
    const network = fetch(request);

    const background = (async () => {
        try {
            const res = await network;
            if (!res.ok) return;
            const cache = await caches.open(await cacheVersion());
            await cache.put(request, res.clone());
        } catch {
            // Фоновое кеширование — бонус: его отказ не должен ломать сеть.
        }
    })();

    const response = (async () => {
        const cache = await caches.open(await cacheVersion());
        const hit = await cache.match(request);
        if (hit) return hit;
        try {
            return await network;
        } catch {
            return new Response('offline', { status: 503, statusText: 'offline' });
        }
    })();

    return { background, response };
}

/**
 * Навигации — из кеша оболочки (корень и SPA-пути сводятся к index.html
 * относительно scope: каталог `/` на хостинге отвечает 404). Сеть — только
 * если оболочки в кеше нет (первый визит), иначе 503 в оффлайне.
 */
async function handleNavigation(event) {
    const shellUrl = new URL('index.html', self.registration.scope).href;
    const cache = await caches.open(await cacheVersion());
    const hit = await cache.match(shellUrl);
    if (hit) return hit;
    try {
        return await fetch(event.request);
    } catch {
        return new Response('offline', { status: 503, statusText: 'offline' });
    }
}

async function resolveVersion(scope) {
    try {
        const res = await fetch(new URL(MANIFEST_PATH, scope).href, { cache: 'no-cache' });
        if (res.ok) {
            const manifest = await res.json();
            if (manifest && typeof manifest.version === 'string' && manifest.version) {
                return `blendars-shell-${manifest.version}`;
            }
        }
    } catch {
        // Манифеста нет — работаем на статической версии.
    }
    return `blendars-shell-${FALLBACK_VERSION}`;
}

async function resolveShell(scope) {
    try {
        const res = await fetch(new URL(MANIFEST_PATH, scope).href, { cache: 'no-cache' });
        if (res.ok) {
            const manifest = await res.json();
            if (Array.isArray(manifest.shell)) return manifest.shell;
        }
    } catch {
        // Ниже — консервативный список.
    }
    return ['index.html'];
}