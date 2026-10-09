import{v as N,w as T,x as _,y as I,z as P,A as z,B as A,C as B,E as L,F as D}from"./index.C6kF8PfH.js";import"./playcanvas.BiKF8DQR.js";const H=`
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
    background: #141126b8;
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
`;function O(){return window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window}function j(b,x){const p=O(),o=document.createElement("div");o.className="touch-controls";const y=document.createElement("style");y.textContent=H,o.append(y),document.body.append(o);const a=R(x),t={left:!1,right:!1,gas:!1,brake:!1,hand:!1};let h=!1;const s=()=>{if(!a)return;a.steer=(t.right?1:0)-(t.left?1:0);const n=t.gas&&t.brake;a.throttle=n?1:(t.gas?1:0)-(t.brake?1:0),a.brake=n?1:0,a.handbrake=t.hand?1:0},f=[],w=()=>{o.style.display=p&&P()?"":"none",o.style.setProperty("--pedal-scale",String(z()*A())),o.style.setProperty("--touch-opacity",String(B())),o.classList.toggle("tc--left",L()==="left"),o.classList.toggle("tc--right",L()==="right"),h=D()};w(),f.push(N(w));const d=(n,l,r,g,u=o)=>{const e=document.createElement("button");e.type="button",e.className=l,e.textContent=n;const v=k=>{k.preventDefault(),e.setPointerCapture(k.pointerId),e.classList.add("active"),r()},i=()=>{e.classList.remove("active"),g()};return e.addEventListener("pointerdown",v),e.addEventListener("pointerup",i),e.addEventListener("pointercancel",i),u.append(e),f.push(()=>{e.removeEventListener("pointerdown",v),e.removeEventListener("pointerup",i),e.removeEventListener("pointercancel",i)}),e};if(p){const n=document.createElement("div");n.className="cross",o.append(n);const l=i=>{t.gas=i,s()},r=i=>{t.brake=i,s()};d("▲","pedal c-up",()=>{(h?r:l)(!0)},()=>{(h?r:l)(!1)},n),d("◀","pedal c-left",()=>{t.left=!0,s()},()=>{t.left=!1,s()},n);const g=d("","pedal icon-btn c-stop",()=>{t.hand=!0,s()},()=>{t.hand=!1,s()},n);g.style.setProperty("--tb-icon",`url(${JSON.stringify(T)})`),g.title="Стоп (ручник)",g.setAttribute("aria-label","Стоп (ручник)"),d("▶","pedal c-right",()=>{t.right=!0,s()},()=>{t.right=!1,s()},n),d("▼","pedal c-down",()=>{(h?l:r)(!0)},()=>{(h?l:r)(!1)},n);const u=document.createElement("div");u.className="side-right",o.append(u),d("▲","pedal",()=>{t.gas=!0,s()},()=>{t.gas=!1,s()},u);const e=document.createElement("button");e.type="button",e.className="pedal icon-btn",e.style.setProperty("--tb-icon",`url(${JSON.stringify(_)})`),e.title="Сброс на месте",e.setAttribute("aria-label","Сброс на месте");const v=i=>{i.preventDefault(),b.fire("vehicle:reset")};e.addEventListener("pointerdown",v),u.append(e),f.push(()=>e.removeEventListener("pointerdown",v))}let c=null;const E="blendars.rotate-hint.v1",C=()=>{try{return localStorage.getItem(E)==="off"}catch{return!1}},S=()=>{try{localStorage.setItem(E,"off")}catch{}c?.remove(),c=null},m=()=>{const n=window.innerHeight>window.innerWidth;if(p&&n&&!C()){if(!c){c=document.createElement("div"),c.className="rotate-hint";const l=document.createElement("span");l.textContent="📱 Поверни телефон горизонтально";const r=document.createElement("button");r.type="button",r.className="rotate-hint__dismiss",r.textContent="Не хочу :)",r.title="Играть вертикально, больше не показывать",r.addEventListener("click",S),c.append(l,r),o.append(c)}}else c?.remove(),c=null};return m(),window.addEventListener("resize",m),window.addEventListener("orientationchange",m),f.push(()=>{window.removeEventListener("resize",m),window.removeEventListener("orientationchange",m)}),{destroy(){for(const n of f)n();a&&(a.steer=0,a.throttle=0,a.handbrake=0,a.brake=0),o.remove()}}}function R(b){const p=b.findByName("vehicle")?.script?.get(I);return p||(console.warn("[touch-controls] VehicleInput не найден — педали молчат"),null)}export{j as attachTouchControls};
