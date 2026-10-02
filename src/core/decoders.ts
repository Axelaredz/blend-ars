/**
 * Инициализация декодеров ассетов.
 *
 * PlayCanvas **не бандлит** Draco и Basis: `dracoInitialize()`/`basisInitialize()`
 * требуют внешние URL и сами поднимают воркеры. Декодеры лежат в `public/decoders/`
 * и обязаны быть same-origin — воркер с cross-origin `importScripts` не поднимется,
 * а Service Worker их кешировать не сможет.
 *
 * Вызывается до загрузки любого GLB/KTX2, иначе первый декод упадёт.
 */
import * as pc from 'playcanvas';

const BASE = '/decoders';

let initialized: Promise<void> | null = null;

export function initDecoders(): Promise<void> {
    // Повторные вызовы (например, перезапуск сцены) не должны переинициализировать воркеры.
    initialized ??= Promise.all([
        initDraco(),
        initBasis()
    ]).then(() => undefined);

    return initialized;
}

async function initDraco(): Promise<void> {
    pc.dracoInitialize({
        jsUrl: `${BASE}/draco/draco_wasm_wrapper.js`,
        wasmUrl: `${BASE}/draco/draco_decoder.wasm`,
        // Один воркер: в ангаре одновременно декодируется 1–2 меша, пул не окупается.
        numWorkers: 1,
        // Рано инициализировать нечего — GLB грузится только на этапе 4.
        lazyInit: true
    });
}

async function initBasis(): Promise<void> {
    pc.basisInitialize({
        glueUrl: `${BASE}/basis/basis_transcoder.js`,
        wasmUrl: `${BASE}/basis/basis_transcoder.wasm`,
        fallbackUrl: `${BASE}/basis/basis_transcoder.js`,
        numWorkers: 1,
        lazyInit: true
    });
}