/**
 * Экран загрузки: полноэкранный оверлей с прогресс-баром и этапами.
 *
 * Показывается с первой отрисовки приложения до готовности 3D-фона меню.
 * Требования, из которых он вырос:
 *  - прогресс не должен врать: пока точный размер ассета неизвестен, показываем
 *    indeterminate-режим (бегущий блик), а не выдуманные проценты;
 *  - байты считаем из PerformanceResourceTiming, а не из локальных счётчиков:
 *    это единственное место, где браузер сам знает, сколько реально пришло по сети;
 *  - ноль байт бюджета `core`: стили инлайном, никаких картинок и шрифтов.
 *
 * Дизайн-API намеренно не принимает колбэки на каждое значение — вызывающий код
 * просто дёргает методы, а компонент сам решает, что перерисовывать.
 */
export interface LoadingScreenOptions {
    /** Заголовок под логотипом. */
    title?: string;
}

const CSS = `
.loading {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
             env(safe-area-inset-bottom) env(safe-area-inset-left);
    background: radial-gradient(ellipse at 50% 40%, #150e2b 0%, #07060d 70%);
    color: #e8e4ff;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    transition: opacity 320ms ease;
}
.loading.hidden { opacity: 0; pointer-events: none; }

.loading__title {
    margin: 0;
    font-size: clamp(28px, 7vw, 52px);
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-shadow: 0 0 28px #7b5cff99;
}

.loading__bar {
    position: relative;
    width: min(420px, 74vw);
    height: 4px;
    background: #ffffff1a;
    overflow: hidden;
}

.loading__fill {
    position: absolute;
    inset: 0 auto 0 0;
    width: 0%;
    background: linear-gradient(90deg, #7b5cff, #ff5cc8);
    transition: width 180ms ease-out;
}

/* indeterminate-режим: пока точного прогресса нет, бежит блик */
.loading__bar--unknown .loading__fill {
    width: 35%;
    animation: loading-sweep 1150ms ease-in-out infinite;
}
@keyframes loading-sweep {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(285%); }
}

.loading__row {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    width: min(420px, 74vw);
    font-size: 13px;
    letter-spacing: 0.06em;
    opacity: 0.85;
    font-variant-numeric: tabular-nums;
}

.loading__stage { text-transform: uppercase; }
.loading__bytes { white-space: nowrap; }
.loading__error { color: #ff8fa8; max-width: min(420px, 74vw); text-align: center; font-size: 13px; }
`;

export class LoadingScreen {
    private readonly root: HTMLDivElement;
    private readonly fill: HTMLDivElement;
    private readonly bar: HTMLDivElement;
    private readonly stageEl: HTMLSpanElement;
    private readonly bytesEl: HTMLSpanElement;
    private readonly errorEl: HTMLDivElement;

    private lastPercent = -1;
    private lastBytesText = '';
    private lastStage = '';

    constructor(host: HTMLElement, opts: LoadingScreenOptions = {}) {
        this.root = document.createElement('div');
        this.root.className = 'loading';
        this.root.setAttribute('role', 'progressbar');
        this.root.setAttribute('aria-valuemin', '0');
        this.root.setAttribute('aria-valuemax', '100');
        this.root.setAttribute('aria-valuenow', '0');
        this.root.setAttribute('aria-label', 'Загрузка');

        const style = document.createElement('style');
        style.textContent = CSS;

        const title = document.createElement('h1');
        title.className = 'loading__title';
        title.textContent = opts.title ?? 'BLENDARS';

        this.bar = document.createElement('div');
        this.bar.className = 'loading__bar loading__bar--unknown';

        this.fill = document.createElement('div');
        this.fill.className = 'loading__fill';
        this.bar.append(this.fill);
        // Пока нет точного прогресса, бар бежит: показывать 0% или выдуманные
        // проценты хуже, чем честное «идёт загрузка».
        this.bar.removeAttribute('aria-valuenow');

        const row = document.createElement('div');
        row.className = 'loading__row';
        this.stageEl = document.createElement('span');
        this.stageEl.className = 'loading__stage';
        this.stageEl.textContent = 'старт';
        this.bytesEl = document.createElement('span');
        this.bytesEl.className = 'loading__bytes';
        this.bytesEl.textContent = '';
        row.append(this.stageEl, this.bytesEl);

        this.errorEl = document.createElement('div');
        this.errorEl.className = 'loading__error';
        this.errorEl.hidden = true;

        this.root.append(style, title, this.bar, row, this.errorEl);
        host.append(this.root);
    }

    /**
     * Новый этап загрузки.
     *
     * @param label   что делаем сейчас, для человека
     * @param ratio   0..1, если известен; undefined — режим indeterminate
     */
    setStage(label: string, ratio?: number): void {
        if (label !== this.lastStage) {
            this.stageEl.textContent = label;
            this.lastStage = label;
        }

        const known = ratio !== undefined && Number.isFinite(ratio);
        this.bar.classList.toggle('loading__bar--unknown', !known);
        if (known) {
            const percent = Math.round(Math.min(1, Math.max(0, ratio)) * 100);
            if (percent !== this.lastPercent) {
                this.fill.style.width = `${percent}%`;
                this.root.setAttribute('aria-valuenow', String(percent));
                this.lastPercent = percent;
            }
        }
    }

    /** Сообщение об ошибке: бар прячем, чтобы не вводить в заблуждение. */
    setError(message: string): void {
        this.bar.hidden = true;
        this.stageEl.textContent = 'ошибка';
        this.errorEl.textContent = message;
        this.errorEl.hidden = false;
    }

    /**
     * Обновляет счётчик байт из PerformanceResourceTiming.
     *
     * transferSize у кросс-доменных запросов равен 0 без Timing-Allow-Origin,
     * поэтому считаем только same-origin — иначе покажем ложные нули.
     */
    updateFromResources(): void {
        if (typeof performance.getEntriesByType !== 'function') return;

        const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        let loaded = 0;
        let total = 0;
        for (const entry of entries) {
            if (entry.name.indexOf(location.origin) !== 0) continue;
            loaded += entry.encodedBodySize || entry.transferSize || 0;
            total = Math.max(total, (entry.responseEnd || 0));
        }
        if (loaded <= 0) return;

        const text = `${formatBytes(loaded)} загружено`;
        if (text !== this.lastBytesText) {
            this.bytesEl.textContent = text;
            this.lastBytesText = text;
        }
    }

    /** Плавно убирает оверлей. Промис резолвится после завершения анимации. */
    hide(): Promise<void> {
        this.root.setAttribute('aria-hidden', 'true');
        this.root.classList.add('hidden');

        return new Promise<void>(resolve => {
            let done = false;
            const finish = (): void => {
                if (done) return;
                done = true;
                this.root.remove();
                resolve();
            };
            this.root.addEventListener('transitionend', finish, { once: true });
            // Фолбэк: если transition не сработал (например, вкладка в фоне),
            // не оставляем экран загрузки навсегда.
            setTimeout(finish, 400);
        });
    }
}

function formatBytes(bytes: number): string {
    if (bytes < 1024) return `${bytes} Б`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} КБ`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`;
}