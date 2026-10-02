/**
 * Меню — чистый DOM, без WebGL и без PlayCanvas.
 *
 * Причина: `core`-чанк должен укладываться в 250 КБ Brotli и стартовать оффлайн
 * быстрее 300 мс. PlayCanvas (650–800 КБ) в него не входит, поэтому канвас и
 * движок создаются лениво — только после клика (см. `main.ts`).
 *
 * Инлайн-стили здесь намеренно: `core` не должен тянуть css-файл отдельным запросом.
 */

export interface MenuHandlers {
    /** Кнопка «В бой» — единственный путь, который поднимает 3D. */
    onPlay: () => void;
}

const CSS = `
:host, .menu {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    background: radial-gradient(circle at 50% 30%, #1b1030 0%, #07060d 70%);
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
.status { min-height: 20px; font-size: 13px; opacity: 0.8; }
`;

export class Menu {
    private readonly root: HTMLDivElement;
    private readonly playBtn: HTMLButtonElement;
    private readonly statusEl: HTMLDivElement;

    constructor(host: HTMLElement, handlers: MenuHandlers) {
        this.root = document.createElement('div');
        this.root.className = 'menu';

        const style = document.createElement('style');
        style.textContent = CSS;

        const title = document.createElement('h1');
        title.className = 'title';
        title.textContent = 'Blendars';

        const sub = document.createElement('p');
        sub.className = 'subtitle';
        sub.textContent = 'тактический кооператив';

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

        this.statusEl = document.createElement('div');
        this.statusEl.className = 'status';
        this.statusEl.textContent = '';

        this.root.append(style, title, sub, this.playBtn, this.statusEl);
        host.append(this.root);
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