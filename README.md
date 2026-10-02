# Blendars

**3D MMO-кооператив в стиле cyberpunk-anime** (Studio Trigger × MAPPA × Guilty Gear Strive).

Веб-клиент на **PlayCanvas Engine v2** (WebGPU, fallback WebGL2) — грузится за секунды на телефоне
и не требует установки. Authoritative multiplayer на **Colyseus 0.16**, детерминированный sim
общий для клиента и сервера — рендер предсказывает локально, сервер остаётся источником правды.

## Стек

| Слой | Технологии |
|---|---|
| Рендер | PlayCanvas Engine v2.x — WebGPU primary, WebGL2 fallback |
| Сборка | Vite 5+, TypeScript strict, zero-GC в горячем цикле |
| Сеть | Colyseus 0.16 — 20Hz lockstep, битпак инпута 6 байт, откат+перепрокрутка |
| Сим | `packages/sim` — int32 Q16.16, общий код клиент+сервер, хеш FNV-1a |
| Ассеты | gltf-transform 4.x — `weld → simplify → meshopt → KTX2 (ETC1S/UASTC)`, LOD |
| Хранилище | OPFS-first, стриминг чанков сразу на диск, Service Worker для оффлайна |

## Условия проекта

Жёсткие бюджеты, всё проверяется автоматически:

- `core` (меню без 3D, чистый DOM) — **≤250 КБ Brotli**; PlayCanvas грузится лениво, отдельным чанком;
- холодный старт из OPFS — **<2с** на Pixel 7 с x4 CPU throttling;
- VRAM ангарa — **≤64 МБ (low) / ≤128 МБ (high)**, drawCalls **≤50/≤100**;
- ноль аллокаций в `update`/`postUpdate`/`frame` — проверяется AST-линтером;
- детерминизм: 2 клиента × 120с без единого десинка по хешу.

## Статус

Проект в начале разработки. Полный технический план — `planogram.v2.md`
(этапы 0–5: bootstrap → загрузчик/OPFS/SW → меню → настройки → ангар → мультиплеер).

Открытые вопросы: геймдизайн боя, источники ассетов, auth (VK/Telegram), деплой.

## Лицензия

Proprietary — все права защищены.