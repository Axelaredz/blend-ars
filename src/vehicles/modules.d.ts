// Типы для .mjs-модулей без собственных деклараций: вендоренные скрипты
// машины и штатная процедурная модель неба из пакета playcanvas.
declare module 'playcanvas/scripts/esm/sky/procedural-sky.mjs' {
    import type * as pc from 'playcanvas';
    export const ProceduralSky: new (args?: unknown) => pc.Script;
}

declare module '*.mjs' {
    const anyExport: Record<string, unknown>;
    export = anyExport;
}
