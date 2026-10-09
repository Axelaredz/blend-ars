import{G as u,H as N}from"./index.pAOgmpPK.js";import"./playcanvas.BiKF8DQR.js";const E=10,C=`
.finish {
    position: fixed;
    inset: 0;
    z-index: 145;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    /* Подложка просвечивает: видно, что игра за окном жива. */
    background: #14100ecc;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    color: #ebdbb2;
}
.finish__panel {
    width: min(420px, 94vw);
    max-height: 92vh;
    overflow-y: auto;
    padding: 18px 20px 16px;
    background: #282828f5;
    border: 1px solid #4a4a4a;
    border-radius: max(8px, 0.5em);
    text-align: center;
}
.finish__title {
    margin: 0 0 6px;
    font-size: 18px;
    font-weight: 700;
}
.finish__time {
    margin: 0 0 12px;
    font-family: 'Lilita One', system-ui, sans-serif;
    font-size: 40px;
    line-height: 1.05;
    letter-spacing: 0.02em;
    font-variant-numeric: tabular-nums;
    color: #fe8019;
}
.finish__rows {
    margin: 0 0 12px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 4px 12px;
    font-size: 13px;
    text-align: left;
}
.finish__label { color: #a89984; }
.finish__value { text-align: right; font-variant-numeric: tabular-nums; }
.finish__value--record { color: #b8bb26; font-weight: 700; }
.finish__board-title {
    margin: 0 0 6px;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #a89984;
}
.finish__board {
    margin: 0 0 12px;
    padding: 0;
    list-style: none;
    border-top: 1px solid #3c3836;
}
.finish__row {
    display: grid;
    grid-template-columns: 28px 1fr auto;
    align-items: center;
    gap: 8px;
    padding: 7px 4px;
    border-bottom: 1px solid #3c3836;
    font-size: 13px;
    text-align: left;
}
.finish__row--me { background: #fe80191f; }
.finish__place { color: #a89984; font-variant-numeric: tabular-nums; }
.finish__who { display: flex; align-items: center; gap: 7px; min-width: 0; }
.finish__who span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.finish__face {
    width: 22px;
    height: 22px;
    flex: none;
    border-radius: 50%;
    object-fit: cover;
    background: #3c3836;
}
.finish__ms { font-variant-numeric: tabular-nums; color: #ebdbb2; }
.finish__hint {
    margin: 0 0 14px;
    font-size: 11px;
    line-height: 1.4;
    color: #a89984;
}
.finish__btn {
    appearance: none;
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #fe8019;
    border-radius: max(6px, 0.35em);
    background: none;
    color: #fe8019;
    font: inherit;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
}
.finish__btn:hover { background: #fe801933; }
.finish__btn:focus-visible { outline: 2px solid #ebdbb2; outline-offset: 2px; }
`;function h(a,n,c=!1){const s=document.createElement("span");s.className="finish__label",s.textContent=a;const r=document.createElement("span");return r.className=c?"finish__value finish__value--record":"finish__value",r.textContent=n,[s,r]}function y(a,n,c,s,r){const o=document.createElement("li");o.className=r?"finish__row finish__row--me":"finish__row";const e=document.createElement("span");e.className="finish__place",e.textContent=`${a}`;const l=document.createElement("span");if(l.className="finish__who",c!==""){const i=document.createElement("img");i.className="finish__face",i.src=c,i.alt="",i.loading="lazy",i.addEventListener("error",()=>i.remove()),l.append(i)}const m=document.createElement("span");m.textContent=n,l.append(m);const d=document.createElement("span");return d.className="finish__ms",d.textContent=u(s),o.append(e,l,d),o}function M(a){const n=document.createElement("div");n.className="finish",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label","Результат заезда");const c=document.createElement("div");c.className="finish__panel";const s=document.createElement("h2");s.className="finish__title",s.textContent="Все чекпоинты собраны!";const r=document.createElement("p");r.className="finish__time",r.textContent=u(a.timeMs);const o=document.createElement("div");o.className="finish__rows",o.append(...h("Чекпоинтов",`${a.collected} из ${a.total}`));const{outcome:e,identity:l}=a;if(o.append(...h("Место в таблице",`${e.rank} из ${e.total}`)),e.previousBestMs>0){const t=a.timeMs-e.previousBestMs;o.append(...h(e.improved?"Новый рекорд":"Личный рекорд",e.improved?u(e.bestMs):`${u(e.bestMs)} (${N(t)})`,e.improved))}else o.append(...h("Личный рекорд",u(e.bestMs),!0));const m=document.createElement("p");m.className="finish__board-title",m.textContent="Таблица лидеров";const d=document.createElement("ul");d.className="finish__board";const i=e.board.findIndex(t=>t.uid===l.uid),g=e.board.slice(0,E);for(let t=0;t<g.length;t++){const f=g[t];f&&d.append(y(t+1,f.name,f.photo,f.bestMs,f.uid===l.uid))}if(i>=E){const t=e.board[i];t&&d.append(y(i+1,t.name,t.photo,t.bestMs,!0))}const x=document.createElement("p");x.className="finish__hint",x.textContent=l.uid==="local"?"Гость: заезд записан на это устройство. Войдите во ВКонтакте, чтобы результат шёл под вашим именем.":"Таблица — на этом устройстве: заезды других игроков в неё не попадают.";const p=document.createElement("button");p.className="finish__btn",p.type="button",p.textContent="Продолжить",c.append(s,r,o,m,d,x,p);const b=document.createElement("style");b.textContent=C;let v=!1;const _=()=>{v||(v=!0,window.removeEventListener("keydown",w),n.remove(),b.remove())},w=t=>{t.key==="Escape"&&_()};return p.addEventListener("click",_),n.addEventListener("pointerdown",t=>{t.target===n&&_()}),window.addEventListener("keydown",w),n.append(b,c),document.body.append(n),p.focus(),_}export{M as showFinishCard};
