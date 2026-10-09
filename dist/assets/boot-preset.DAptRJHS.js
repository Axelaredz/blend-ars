import{l as v,a as y,d as k,b as w,s as E}from"./index.pAOgmpPK.js";import"./playcanvas.BiKF8DQR.js";const N=`
.boot-preset {
    position: fixed;
    inset: 0;
    /* Выше экрана загрузки (100) и окон настроек (150 не смонтированы, но
       порядок должен оставаться верным, если окно откроют позже). */
    z-index: 160;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: #14100ef2;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    color: #ebdbb2;
}
.boot-preset__panel {
    display: flex;
    flex-direction: column;
    width: min(520px, 92vw);
    /* Ограничение по высоте обязательно: пресетов может быть двадцать, и на
       телефон в ландшафте список уехал бы за нижний край окна. */
    max-height: min(82vh, 620px);
    padding: 20px 22px 16px;
    background: #282828f2;
    border: 1px solid #4a4a4a;
    border-radius: max(8px, 0.5em);
}
.boot-preset__title {
    margin: 0 0 8px;
    font-size: 19px;
    font-weight: 700;
}
.boot-preset__text {
    margin: 0 0 14px;
    font-size: 14px;
    line-height: 1.45;
    opacity: 0.85;
}
.boot-preset__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-height: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.boot-preset__item {
    display: flex;
    align-items: baseline;
    gap: 10px;
    width: 100%;
    padding: 11px 14px;
    min-height: 44px;
    border: 1px solid #4a4a4a;
    border-radius: max(6px, 0.35em);
    background: none;
    color: #a89984;
    font: inherit;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    touch-action: manipulation;
}
.boot-preset__item:hover { background: #3c3836; color: #ebdbb2; }
.boot-preset__item:focus-visible { outline: 2px solid #ebdbb2; outline-offset: 2px; }
.boot-preset__item--active { border-color: #fe8019; color: #fe8019; }
.boot-preset__item--active:hover { background: #fe801933; color: #fe8019; }
.boot-preset__name { flex: 1 1 auto; }
.boot-preset__date {
    flex: none;
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    opacity: 0.65;
}
.boot-preset__foot { margin: 14px 0 0; }
.boot-preset__skip {
    appearance: none;
    width: 100%;
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
.boot-preset__skip:hover { background: #3c3836; color: #ebdbb2; }
.boot-preset__skip:focus-visible { outline: 2px solid #ebdbb2; outline-offset: 2px; }
`,L="preset";async function z(){if(new URLSearchParams(location.search).get(L)==="skip")return null;const b=v();if(b.length===0)return null;const _=y();return new Promise(g=>{const o=document.createElement("div");o.className="boot-preset",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-label","Выбор пресета настроек");const i=document.createElement("div");i.className="boot-preset__panel";const r=document.createElement("h2");r.className="boot-preset__title",r.textContent="Пресет настроек";const c=document.createElement("p");c.className="boot-preset__text",c.textContent="Какой пресет загрузить? Приложение дальше работает на нём до следующего запуска.";const p=document.createElement("div");p.className="boot-preset__list";const u=document.createElement("style");u.textContent=N;let f=!1;const s=e=>{f||(f=!0,window.removeEventListener("keydown",x),o.remove(),g(e))},h=e=>{const t=w(e.data);E(e.id),console.info(t.applied.length>0?`[settings] применён пресет «${e.name}»: ${t.applied.join(", ")}`:`[settings] в пресете «${e.name}» нет знакомых настроек`),s(e.name)},a=[];for(const e of b){const t=document.createElement("button");t.className="boot-preset__item",e.id===_&&(t.classList.add("boot-preset__item--active"),t.setAttribute("aria-current","true")),t.type="button";const d=document.createElement("span");d.className="boot-preset__name",d.textContent=e.name;const m=document.createElement("span");m.className="boot-preset__date",m.textContent=e.created>0?k(new Date(e.created)):"",t.append(d,m),t.addEventListener("click",()=>h(e)),a.push(t),p.append(t)}const l=document.createElement("div");l.className="boot-preset__foot";const n=document.createElement("button");n.className="boot-preset__skip",n.type="button",n.textContent="Пропустить — оставить как есть",n.addEventListener("click",()=>s(null)),l.append(n),i.append(r,c,p,l),o.append(u,i);const x=e=>{if(e.key==="Escape"){s(null);return}const t=Number(e.key);Number.isInteger(t)&&t>=1&&t<=9&&a[t-1]?.click()};o.addEventListener("pointerdown",e=>{e.target===o&&s(null)}),window.addEventListener("keydown",x),document.body.append(o),(a.find(e=>e.classList.contains("boot-preset__item--active"))??a[0])?.focus()})}export{z as askBootPreset};
