const w=`
.confirm {
    position: fixed;
    inset: 0;
    z-index: 140;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    /* Полупрозрачный слой поверх игры: видно, что приложение живо. Плотность
       поднята с 80% до 95%: слой закрывает весь экран, и каждый лишний процент
       альфы — это блендинг целого кадра поверх обновляющейся сцены. */
    background: #14100ef2;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    color: #ebdbb2;
}
.confirm__panel {
    width: min(460px, 92vw);
    padding: 20px 22px 18px;
    background: #282828f2;
    border: 1px solid #4a4a4a;
    border-radius: max(8px, 0.5em);
    text-align: center;
}
.confirm__title {
    margin: 0 0 10px;
    font-size: 19px;
    font-weight: 700;
}
.confirm__text {
    margin: 0 0 16px;
    font-size: 14px;
    line-height: 1.45;
    opacity: 0.85;
}
.confirm__timer {
    margin: 0 0 14px;
    font-size: 13px;
    font-variant-numeric: tabular-nums;
    color: #fe8019;
}
.confirm__buttons { display: flex; gap: 10px; justify-content: center; }
.confirm__btn {
    appearance: none;
    flex: 1;
    padding: 11px 14px;
    border: 1px solid #4a4a4a;
    border-radius: max(6px, 0.35em);
    background: none;
    color: #a89984;
    font: inherit;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
}
.confirm__btn:hover { background: #3c3836; color: #ebdbb2; }
.confirm__btn:focus-visible { outline: 2px solid #ebdbb2; outline-offset: 2px; }
.confirm__btn--ok { border-color: #fe8019; color: #fe8019; }
.confirm__btn--ok:hover { background: #fe801933; color: #fe8019; }
`;function v(n){const a=n.timeoutSeconds??0;return new Promise(g=>{const t=document.createElement("div");t.className="confirm",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true");const s=document.createElement("div");s.className="confirm__panel";const l=document.createElement("h2");l.className="confirm__title",l.textContent=n.title;const m=document.createElement("p");m.className="confirm__text",m.textContent=n.text;const c=document.createElement("p");c.className="confirm__timer";const d=document.createElement("div");d.className="confirm__buttons";const o=document.createElement("button");o.className="confirm__btn confirm__btn--ok",o.type="button",o.textContent=n.okLabel;const r=document.createElement("button");r.className="confirm__btn",r.type="button",r.textContent=n.cancelLabel,d.append(r,o),s.append(l,m,c,d);const f=document.createElement("style");f.textContent=w;let u=!1,p=0,b=0;const i=e=>{u||(u=!0,window.clearInterval(p),window.clearTimeout(b),window.removeEventListener("keydown",x),t.remove(),f.remove(),g(e))},x=e=>{e.key==="Escape"&&i(!1)};if(o.addEventListener("click",()=>i(!0)),r.addEventListener("click",()=>i(!1)),t.addEventListener("pointerdown",e=>{e.target===t&&i(!1)}),window.addEventListener("keydown",x),a>0){let e=a;const _=()=>{c.textContent=`Вернёмся на WebGL2 через ${e} с`};_(),p=window.setInterval(()=>{if(e-=.1,e<=0){i(!1);return}e<=5&&_()},100),b=window.setTimeout(()=>i(!1),a*1e3)}else c.remove();t.append(f,s),document.body.append(t),o.focus()})}async function y(n=5){return v({title:"Переключиться на WebGPU?",text:"WebGPU — экспериментальный рендер. На этом устройстве он может показать чёрный экран или зависнуть на первом кадре (iOS, часть видеокарт на Linux). WebGL2 проверен на всех целевых машинах.",okLabel:"Попробовать WebGPU",cancelLabel:"Остаться на WebGL2",timeoutSeconds:n})}export{y as confirmWebgpuSwitch,v as confirmWithTimeout};
