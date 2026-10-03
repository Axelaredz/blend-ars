// Типы для вендоренных скриптов машины (playcanvas/web-components, MIT).
//
// Файлы оставлены в .mjs без изменений, чтобы дифф против оригинала оставался
// пустым и код можно было пересинхронизировать с апстримом. TypeScript их не
// проверяет — здесь объявляем лишь форму, достаточную для вызовов из нашего кода.
//
// Свойства скриптов настраиваются через create(Vehicle, { properties: {...} }),
// поэтому индексируемая сигнатура сознательно размыта: реальные значения
// по умолчанию живут в самих .mjs.
import type * as pc from 'playcanvas';

export interface ScriptProperties {
    properties?: Record<string, unknown>;
    [key: string]: unknown;
}

declare class VehicleScript extends pc.Script {
    constructor(args?: ScriptProperties);
    static scriptName: string;

    /** Скорость в км/ч — читается HUD. */
    getCurrentSpeedKmHour(): number;

    /** Сброс машины в исходную позицию. */
    reset(): void;

    [key: string]: unknown;
}

declare class VehicleWheelScript extends pc.Script {
    constructor(args?: ScriptProperties);
    static scriptName: string;
    [key: string]: unknown;
}

declare class ChaseCameraScript extends pc.Script {
    constructor(args?: ScriptProperties);
    static scriptName: string;
    [key: string]: unknown;
}

export declare const Vehicle: typeof VehicleScript & {
    new (args?: ScriptProperties): VehicleScript;
};

export declare const VehicleWheel: typeof VehicleWheelScript & {
    new (args?: ScriptProperties): VehicleWheelScript;
};

export declare const ChaseCamera: typeof ChaseCameraScript & {
    new (args?: ScriptProperties): ChaseCameraScript;
};

declare class VehicleInputScript extends pc.Script {
    constructor(args?: ScriptProperties);
    static scriptName: string;
    [key: string]: unknown;
}

export declare const VehicleInput: typeof VehicleInputScript & {
    new (args?: ScriptProperties): VehicleInputScript;
};

export const VEHICLE_SCRIPT_NAME = 'vehicle';
export const VEHICLE_WHEEL_SCRIPT_NAME = 'vehicleWheel';
export const CHASE_CAMERA_SCRIPT_NAME = 'chaseCamera';