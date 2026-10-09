import{v as w}from"./index.CEHTTqeM.js";import"./playcanvas.BiKF8DQR.js";const h=5e3,y=250,E=`
.gameover {
    position: fixed;
    inset: 0;
    z-index: 150;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    /* Подложка плотнее, чем у карточки финиша: сцена за ней гасится — это
       экран смерти, а не окно над живой игрой. */
    background: #14100ef2;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    color: #ebdbb2;
}
.gameover__panel {
    width: min(420px, 94vw);
    padding: 22px 20px 18px;
    background: #282828f5;
    border: 1px solid #fb4934;
    border-radius: max(8px, 0.5em);
    text-align: center;
    animation: go-in 180ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes go-in {
    from { opacity: 0; transform: translateY(10px) scale(0.98); }
    to { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
    .gameover__panel { animation: none; }
}
.gameover__title {
    margin: 0 0 8px;
    font-size: 30px;
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: 0.06em;
    font-variant-numeric: tabular-nums;
    color: #fbf1c7;
}
.gameover__text {
    margin: 0 0 14px;
    font-size: 13px;
    line-height: 1.45;
    color: #ebdbb2;
}
.gameover__count {
    margin: 0 0 14px;
    font-size: 12px;
    letter-spacing: 0.04em;
    font-variant-numeric: tabular-nums;
    color: #fabd2f;
}
.gameover__hint {
    margin: 0 0 14px;
    font-size: 11px;
    line-height: 1.4;
    color: #a89984;
}
.gameover__btn {
    appearance: none;
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #fabd2f;
    border-radius: max(6px, 0.35em);
    background: none;
    color: #fabd2f;
    font: inherit;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
}
.gameover__btn:hover { background: #fabd2f33; }
.gameover__btn:focus-visible { outline: 2px solid #ebdbb2; outline-offset: 2px; }
`;function N(n){const p=n.autoReturnMs??h,e=document.createElement("div");e.className="gameover",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Игра окончена");const i=document.createElement("div");i.className="gameover__panel";const c=document.createElement("h2");c.className="gameover__title",c.textContent="GAME OVER";const s=document.createElement("p");s.className="gameover__text",s.textContent=`Прочность исчерпана: снято ${n.max} из ${n.max}.`;const o=document.createElement("p");o.className="gameover__count";const m=document.createElement("p");m.className="gameover__hint",m.textContent="Сильный удар на скорости свыше 50 км/ч снимает одну ячейку прочности.";const t=document.createElement("button");t.className="gameover__btn",t.type="button",t.textContent="В меню",i.append(c,s,o,m,t);const l=document.createElement("style");l.textContent=E;let d=!1,u=0,f=0;const _=Date.now()+p,x=()=>{d||(d=!0,window.clearTimeout(u),window.clearInterval(f),window.removeEventListener("keydown",b),e.remove(),l.remove())},g=()=>{const v=`Возврат в меню через ${Math.max(0,Math.ceil((_-Date.now())/1e3))} с`;v!==o.textContent&&(o.textContent=v)},a=()=>{d||(x(),n.onReturn())},b=r=>{r.key==="Escape"&&a()};return g(),f=window.setInterval(g,y),u=window.setTimeout(a,p),t.addEventListener("click",a),e.addEventListener("pointerdown",r=>{r.target===e&&a()}),window.addEventListener("keydown",b),e.append(l,i),document.body.append(e),t.focus(),w("window"),x}export{N as showGameOverCard};
