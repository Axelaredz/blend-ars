/**
 * Меню — чистый DOM, без WebGL и без PlayCanvas.
 *
 * Причина: `core`-чанк должен укладываться в 250 КБ Brotli и стартовать оффлайн
 * быстрее 300 мс. PlayCanvas (650–800 КБ) в него не входит, поэтому канвас и
 * движок создаются лениво — только после клика (см. `main.ts`).
 *
 * Инлайн-стили здесь намеренно: `core` не должен тянуть css-файл отдельным запросом.
 */

import type { VehicleBody } from '../scenes/vehicle-scene';

export interface MenuHandlers {
    /** Кнопка «В бой» — основной путь в игру. */
    onPlay: () => void;
    /**
     * Кнопки сцены — запуск демо с физикой (порт vehicle-physics).
     * Кузов выбирается кнопкой: «Сцена» (грузовик) или «Мазерати» (GT3-обвес
     * на том же шасси). Физика в обоих случаях грузовая, проверенная.
     */
    onScene: (body: VehicleBody) => void;
    /** Кнопка «Назад» — возврат из сцены в меню. */
    onBack?: () => void;
}

const CSS = `
/* Меню — прозрачный оверлей ПОВЕРХ 3D-фона: свой фон у него больше нет,
   иначе канвас под ним не видно. Читаемость держит градиент + текст-тень. */
:host, .menu {
    position: fixed;
    inset: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    color: #e8e4ff;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    /* 300ms задержки на тапе не будет: manipulation убирает double-tap-zoom,
       safe-area учитываем, чтобы кнопки не уходили под чёлку. */
    touch-action: manipulation;
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
             env(safe-area-inset-bottom) env(safe-area-inset-left);
}
.title {
    margin: 0;
    font-size: clamp(32px, 8vw, 64px);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-shadow: 0 0 24px #7b5cff88;
}
.subtitle { margin: 0; opacity: 0.65; font-size: 14px; letter-spacing: 0.08em; }
.play {
    appearance: none;
    border: 1px solid #7b5cff;
    background: #7b5cff22;
    color: inherit;
    font: inherit;
    font-size: 18px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 14px 40px;
    border-radius: 2px;
    cursor: pointer;
    min-height: 48px; /* комфортная цель для пальца */
}
.play:hover { background: #7b5cff44; }
.play:focus-visible { outline: 2px solid #e8e4ff; outline-offset: 4px; }
.play[disabled] { opacity: 0.5; cursor: progress; }
.actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
.actions .play { min-width: 132px; }
.status { min-height: 20px; font-size: 13px; opacity: 0.8; }
`;

export class Menu {
    private readonly root: HTMLDivElement;
    private readonly playBtn: HTMLButtonElement;
    private readonly sceneBtn: HTMLButtonElement;
    private readonly maseratiBtn: HTMLButtonElement;
    private readonly backBtn: HTMLButtonElement;
    private readonly statusEl: HTMLDivElement;
    private readonly titleEl: HTMLHeadingElement;
    private readonly subEl: HTMLParagraphElement;

    constructor(host: HTMLElement, handlers: MenuHandlers) {
        this.root = document.createElement('div');
        this.root.className = 'menu';

        const style = document.createElement('style');
        style.textContent = CSS;

        this.titleEl = document.createElement('h1');
        this.titleEl.className = 'title';
        this.titleEl.textContent = 'Blendars';

        this.subEl = document.createElement('p');
        this.subEl.className = 'subtitle';
        this.subEl.textContent = 'тактический кооператив';

        this.playBtn = document.createElement('button');
        this.playBtn.className = 'play';
        this.playBtn.type = 'button';
        this.playBtn.textContent = 'В бой';
        // pointerdown, а не click: 300ms-delay на мобильных уже отсутствует,
        // но pointerdown снимает ещё и задержку на проброс события до обработчика.
        this.playBtn.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            if (this.playBtn.disabled) return;
            this.setBusy(true);
            handlers.onPlay();
        });

        this.sceneBtn = document.createElement('button');
        this.sceneBtn.className = 'play';
        this.sceneBtn.type = 'button';
        this.sceneBtn.textContent = 'Сцена';
        this.sceneBtn.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            if (this.sceneBtn.disabled) return;
            handlers.onScene('truck');
        });

        this.maseratiBtn = document.createElement('button');
        this.maseratiBtn.className = 'play';
        this.maseratiBtn.type = 'button';
        this.maseratiBtn.textContent = 'Мазерати';
        this.maseratiBtn.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            if (this.maseratiBtn.disabled) return;
            handlers.onScene('maserati');
        });

        this.backBtn = document.createElement('button');
        this.backBtn.className = 'play';
        this.backBtn.type = 'button';
        this.backBtn.textContent = 'Назад';
        this.backBtn.style.display = 'none';
        this.backBtn.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            handlers.onBack?.();
        });

        const actions = document.createElement('div');
        actions.className = 'actions';
        actions.append(this.playBtn, this.sceneBtn, this.maseratiBtn, this.backBtn);

        this.statusEl = document.createElement('div');
        this.statusEl.className = 'status';
        this.statusEl.textContent = '';

        this.root.append(style, this.titleEl, this.subEl, actions, this.statusEl);
        host.append(this.root);
    }

    /**
     * Переключает набор кнопок: в меню видны «В бой», «Сцена» и «Мазерати»,
     * в сцене — только «Назад». Иначе поверх 3D остаётся оверлей с
     * неработающими кнопками.
     */
    setMode(mode: 'menu' | 'scene'): void {
        const inScene = mode === 'scene';
        this.playBtn.style.display = inScene ? 'none' : '';
        this.sceneBtn.style.display = inScene ? 'none' : '';
        this.maseratiBtn.style.display = inScene ? 'none' : '';
        this.backBtn.style.display = inScene ? '' : 'none';
        // Заголовок и подзаголовок в сцене тоже лишние: 3D видно сквозь меню,
        // а «BLENDARS» поверх пустыни выглядит как баг, а не как UI.
        this.titleEl.style.display = inScene ? 'none' : '';
        this.subEl.style.display = inScene ? 'none' : '';
        // Подсказку с управлением оставляем — она и есть содержимое оверлея.
        this.root.style.background = inScene ? 'none' : '';
        this.root.style.justifyContent = inScene ? 'flex-end' : '';
        this.statusEl.style.paddingBottom = inScene ? '24px' : '';
    }

    /** Блокирует повторные нажатия и пишет статус — «кликнул, движок грузится». */
    setBusy(busy: boolean): void {
        this.playBtn.disabled = busy;
        this.playBtn.textContent = busy ? 'Загрузка…' : 'В бой';
        if (busy) this.setStatus('Инициализация рендера…');
    }

    setStatus(text: string): void {
        this.statusEl.textContent = text;
    }

    destroy(): void {
        this.root.remove();
    }
}
