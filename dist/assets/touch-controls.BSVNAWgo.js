import{B as P,C as _,E as B,F as H,G as z,H as D,I as A,J as $,K as N,L as M,M as O}from"./index.JD2ffiGH.js";import"./playcanvas.CtNZ7HIm.js";const R=`
.touch-controls {
    position: fixed;
    inset: 0;
    z-index: 14;
    pointer-events: none;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    user-select: none;
    -webkit-user-select: none;
}
.touch-controls button {
    pointer-events: auto;
    appearance: none;
    border: 1px solid #ebdbb255;
    /* Плотный фон вместо полупрозрачного: кнопки лежат поверх живого кадра, и
       альфа на каждой из них — это блендинг с обновляющимся кадром каждый
       кадр. Прозрачность остаётся доступной пользователю (ползунок на вкладке
       «Управление», --touch-opacity), но по умолчанию интерфейс плотный. */
    background: #1b1830f0;
    color: #e8e4ff;
    border-radius: max(0.375rem, 0.35em);
    cursor: pointer;
    touch-action: none;
    font: inherit;
}
.touch-controls button:hover { border-color: #fe8019; }
.touch-controls button:active,
.touch-controls button.active {
    border-color: #d65d0e;
    background: #fe8019;
    color: #1d2021;
}
.touch-controls button:focus-visible { outline: max(2px, 0.12em) solid #ebdbb2; outline-offset: 2px; }
/* Прозрачность кнопок — пользовательская (вкладка «Управление»), единая
   для всех кнопок панели. */
.touch-controls button { opacity: var(--touch-opacity, 0.85); }
/* Размер кнопки — одна переменная на все правила: минимум 44px (тач-цель
   WCAG 2.5.8), номинал min(15vh, 16vw) с пользовательским множителем
   --pedal-scale, потолок 160px × множитель. min(…, 16vw) ограничивает и по
   ширине: в портрете крестовина из трёх кнопок плюс правая колонка иначе
   не помещались в 390px и наезжали друг на друга. */
.touch-controls {
    --pedal: clamp(44px, min(15vh, 16vw) * var(--pedal-scale, 1), calc(160px * var(--pedal-scale, 1)));
}
/* Педаль — квадрат одного размера везде (в крестовине и в правой колонке). */
.pedal {
    width: var(--pedal);
    height: var(--pedal);
    padding: 0;
    font-size: clamp(18px, 5vh, 56px);
}
/* Крестовина: ▲ газ сверху, ◀ ▶ руль по бокам, ▼ тормоз снизу, в центре —
   стоп (ручник). Ряд поднят над нижним хромом: слева внизу живёт панель
   скорости (~208×100px), по всему низу — статусбар с подсказкой. */
.cross {
    position: absolute;
    left: calc(16px + env(safe-area-inset-left));
    bottom: calc(120px + env(safe-area-inset-bottom));
    display: grid;
    grid-template-columns: repeat(3, var(--pedal));
    grid-template-rows: repeat(3, var(--pedal));
    gap: 6px;
}
.cross .c-up { grid-area: 1 / 2; }
.cross .c-left { grid-area: 2 / 1; }
.cross .c-stop { grid-area: 2 / 2; }
.cross .c-right { grid-area: 2 / 3; }
.cross .c-down { grid-area: 3 / 2; }
/* Расположение групп из вкладки «Управление». По умолчанию — по краям:
   крестовина слева, газ со сбросом справа. «Слева»/«Справа» собирают обе
   группы в одном углу: соседняя группа встаёт вплотную к первой с отступом
   в ширину крестовины (3 педали + 2 зазора). */
.touch-controls.tc--left .side-right {
    left: calc(28px + 3 * var(--pedal) + 12px + env(safe-area-inset-left));
    right: auto;
}
.touch-controls.tc--right .cross {
    left: auto;
    right: calc(28px + var(--pedal) + 12px + env(safe-area-inset-right));
}
/* Своя надпись на иконке-кнопке: глиф-маска уступает место тексту, иначе
   буквы рисовались бы поверх иконки и читались бы как грязь. */
.touch-controls button.tb--text::before { display: none; }
/* Иконка-кнопка (стоп, сброс): глиф той же маской, что в topbar, цвет —
   currentColor, поэтому active перекрашивает и фон, и глиф. */
.icon-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.icon-btn::before {
    content: '';
    width: 45%;
    height: 45%;
    background-color: currentColor;
    -webkit-mask: var(--tb-icon) center / contain no-repeat;
    mask: var(--tb-icon) center / contain no-repeat;
}
/* Правая колонка: газ сверху, под ним сброс. */
.side-right {
    position: absolute;
    right: calc(16px + env(safe-area-inset-right));
    bottom: calc(120px + env(safe-area-inset-bottom));
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.rotate-hint {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 18px;
    background: #05040ae6;
    color: #e8e4ff;
    font-size: 20px;
    letter-spacing: 0.06em;
    text-align: center;
    padding: 24px;
    pointer-events: auto;
}
/* «Не хочу :)»: играть вертикально — подсказка снимается насовсем. Кнопка
   вторична по иерархии (главное — повернуть телефон), поэтому без рамки,
   только цветом и подчёркиванием. */
.rotate-hint__dismiss {
    appearance: none;
    border: none;
    background: none;
    color: #a89ce8;
    font: inherit;
    font-size: 15px;
    letter-spacing: 0.04em;
    text-decoration: underline;
    text-underline-offset: 3px;
    cursor: pointer;
    touch-action: manipulation;
}
.rotate-hint__dismiss:hover { color: #fe8019; }
`;function G(){return window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window}function j(x,w){const u=G(),a=document.createElement("div");a.className="touch-controls";const E=document.createElement("style");E.textContent=R,a.append(E),document.body.append(a);const c=J(w),s={left:!1,right:!1,gas:!1,brake:!1,hand:!1};let m=!1;const i=()=>{if(!c)return;c.steer=(s.right?1:0)-(s.left?1:0);const t=s.gas&&s.brake;c.throttle=t?1:(s.gas?1:0)-(s.brake?1:0),c.brake=t?1:0,c.handbrake=s.hand?1:0},g=[],y=new Map,S=(t,n)=>{const e=M(t),d=e.dx!==0||e.dy!==0||e.scale!==1;n.style.transform=d?`translate(${e.dx}px, ${e.dy}px) scale(${e.scale})`:"",n.style.opacity=String(e.opacity),e.label?(n.textContent=e.label,n.classList.add("tb--text")):(n.textContent=n.dataset.tbNative??"",n.classList.remove("tb--text"))},L=()=>{a.style.display=u&&z()?"":"none",a.style.setProperty("--pedal-scale",String(D()*A())),a.style.setProperty("--touch-opacity",String($())),a.classList.toggle("tc--left",N()==="left"),a.classList.toggle("tc--right",N()==="right"),m=O();for(const[t,n]of y)S(t,n)};L(),g.push(P(L));const h=(t,n,e,d,f=a,r)=>{const o=document.createElement("button");o.type="button",o.className=n,o.textContent=t,o.dataset.tbNative=t,r&&y.set(r,o);const p=C=>{C.preventDefault(),o.setPointerCapture(C.pointerId),o.classList.add("active"),e()},b=()=>{o.classList.remove("active"),d()};return o.addEventListener("pointerdown",p),o.addEventListener("pointerup",b),o.addEventListener("pointercancel",b),f.append(o),g.push(()=>{o.removeEventListener("pointerdown",p),o.removeEventListener("pointerup",b),o.removeEventListener("pointercancel",b)}),o};if(u){const t=document.createElement("div");t.className="cross",a.append(t);const n=p=>{s.gas=p,i()},e=p=>{s.brake=p,i()};h("▲","pedal c-up",()=>{(m?e:n)(!0)},()=>{(m?e:n)(!1)},t,"up"),h("◀","pedal c-left",()=>{s.left=!0,i()},()=>{s.left=!1,i()},t,"left");const d=h("","pedal icon-btn c-stop",()=>{s.hand=!0,i()},()=>{s.hand=!1,i()},t,"hand");d.style.setProperty("--tb-icon",`url(${JSON.stringify(_)})`),d.title="Стоп (ручник)",d.setAttribute("aria-label","Стоп (ручник)"),h("▶","pedal c-right",()=>{s.right=!0,i()},()=>{s.right=!1,i()},t,"right"),h("▼","pedal c-down",()=>{(m?n:e)(!0)},()=>{(m?n:e)(!1)},t,"down");const f=document.createElement("div");f.className="side-right",a.append(f),h("▲","pedal",()=>{s.gas=!0,i()},()=>{s.gas=!1,i()},f,"gas");const r=document.createElement("button");r.type="button",r.className="pedal icon-btn",r.style.setProperty("--tb-icon",`url(${JSON.stringify(B)})`),r.title="Сброс на месте",r.setAttribute("aria-label","Сброс на месте");const o=p=>{p.preventDefault(),x.fire("vehicle:reset")};r.addEventListener("pointerdown",o),f.append(r),y.set("reset",r),g.push(()=>r.removeEventListener("pointerdown",o))}let l=null;const k="blendars.rotate-hint.v1",T=()=>{try{return localStorage.getItem(k)==="off"}catch{return!1}},I=()=>{try{localStorage.setItem(k,"off")}catch{}l?.remove(),l=null},v=()=>{const t=window.innerHeight>window.innerWidth;if(u&&t&&!T()){if(!l){l=document.createElement("div"),l.className="rotate-hint";const n=document.createElement("span");n.textContent="📱 Поверни телефон горизонтально";const e=document.createElement("button");e.type="button",e.className="rotate-hint__dismiss",e.textContent="Не хочу :)",e.title="Играть вертикально, больше не показывать",e.addEventListener("click",I),l.append(n,e),a.append(l)}}else l?.remove(),l=null};return v(),window.addEventListener("resize",v),window.addEventListener("orientationchange",v),g.push(()=>{window.removeEventListener("resize",v),window.removeEventListener("orientationchange",v)}),{destroy(){for(const t of g)t();c&&(c.steer=0,c.throttle=0,c.handbrake=0,c.brake=0),a.remove()}}}function J(x){const u=x.findByName("vehicle")?.script?.get(H);return u||(console.warn("[touch-controls] VehicleInput не найден — педали молчат"),null)}export{j as attachTouchControls};
