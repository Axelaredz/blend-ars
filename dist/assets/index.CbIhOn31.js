const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/music-player.BuS4XW11.js","assets/music-audio.DNu4TXPq.js","assets/playcanvas.CtNZ7HIm.js","assets/finish-card.C5_qSoBB.js","assets/boot-preset.CnSwzjQ0.js","assets/menu-background.DdgSV-qM.js","assets/engine-sound.Bkgwsb0v.js","assets/look-gestures.BhGm2xnc.js","assets/engine-bootstrap.DhwMTVj_.js","assets/smoke-scene.Be29kJNB.js","assets/vehicle-scene.CsS8_2Gv.js","assets/video-recorder.DoDORhjT.js","assets/game-over-card.EPNK1rUY.js","assets/touch-controls.b-AQBUjC.js"])))=>i.map(i=>d[i]);
import{_ as ie,E as Zt,T as oa,C as jl,M as _s,a as nr,b as Or,S as Gl,B as Hl,V as sr,c as Ul,d as zl,e as Vl,f as Wl,g as Kl,A as or,F as ar,P as Yl}from"./playcanvas.CtNZ7HIm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const ir="blendars-loading",ql=`
/* Раскладку оверлея (позиция, слой, грид, фон, логотип) держит splash-host из
   src/ui/splash.ts — там же и заставка. Здесь только типографика и сам бар;
   дублировать раскладку здесь нельзя, иначе правила разъедутся.
   Палитра — gruvbox dark: текст fg #ebdbb2, акцент #fe8019→#fabd2f, ошибка
   bright-red #fb4934 на пилюле bg0_h (иначе её 4.29:1 не дотягивает до AA). */
.loading { color: #ebdbb2; }
.loading.hidden { opacity: 0; pointer-events: none; }

.loading__title {
    margin: 0;
    font-size: clamp(28px, 7vw, 52px);
    letter-spacing: 0.16em;
    text-transform: uppercase;
    text-shadow: 0 0 28px #fe801966;
}

.loading__bar {
    position: relative;
    width: min(420px, 74vw);
    height: 4px;
    background: #3c3836;
    overflow: hidden;
}

.loading__fill {
    position: absolute;
    inset: 0 auto 0 0;
    width: 0%;
    background: linear-gradient(90deg, #fe8019, #fabd2f);
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
.loading__error {
    color: #fb4934;
    background: #1d2021cc;
    border-radius: 4px;
    padding: 6px 12px;
    max-width: min(420px, 74vw);
    text-align: center;
    font-size: 13px;
}
.loading.hidden { opacity: 0; pointer-events: none; }
`;function Jl(){if(document.getElementById(ir))return;const e=document.createElement("style");e.id=ir,e.textContent=ql,document.head.append(e)}const Xl="/blend-ars/assets/loader.CPCrwQQc.webp",Ql="#282828",rr="blendars-splash",Zl=`
.splash-host {
    position: fixed;
    inset: 0;
    /* Выше меню (z-index 10) и канваса (0): оверлей — поверх всего. */
    z-index: 100;
    display: grid;
    /* Строки объявлены явно: логотип тянется на всё свободное по высоте, а под
       ним до четырёх auto-строк (заголовок, бар, этап, ошибка). При одном лишь
       "1fr auto" лишние дети попадали в неявные строки и уезжали за нижний
       край на низком экране. */
    grid-template-rows: minmax(0, 1fr) auto auto auto auto;
    justify-items: center;
    align-items: center;
    gap: 20px;
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
             env(safe-area-inset-bottom) env(safe-area-inset-left);
    background-color: ${Ql};
    color: #ebdbb2;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    transition: opacity 320ms ease;
}

/* Логотип занимает верхнюю строку грида целиком и центрируется в ней. */
.splash-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    /* Без min-height:0 строка грида не даст картинке сжаться, и на низком
       экране она вылезет за нижний ряд с текстом. */
    min-height: 0;
    padding: 24px;
    box-sizing: border-box;
}

.splash-logo img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
}
`;function jr(e){if(!document.getElementById(rr)){const s=document.createElement("style");s.id=rr,s.textContent=Zl,document.head.append(s)}if(e.querySelector(":scope > .splash-logo")){e.classList.add("splash-host");return}const t=document.createElement("div");t.className="splash-logo";const n=document.createElement("img");n.src=Xl,n.alt="Blendars",t.append(n),e.prepend(t),e.classList.add("splash-host")}class ed{root;fill;bar;stageEl;bytesEl;errorEl;lastPercent=-1;lastBytesText="";lastStage="";constructor(t,n={}){if(this.root=document.createElement("div"),this.root.className="loading",Jl(),jr(this.root),this.root.setAttribute("role","progressbar"),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","100"),this.root.setAttribute("aria-valuenow","0"),this.root.setAttribute("aria-label","Загрузка"),n.title!==void 0){const o=document.createElement("h1");o.className="loading__title",o.textContent=n.title,this.root.append(o)}this.bar=document.createElement("div"),this.bar.className="loading__bar loading__bar--unknown",this.fill=document.createElement("div"),this.fill.className="loading__fill",this.bar.append(this.fill),this.bar.removeAttribute("aria-valuenow");const s=document.createElement("div");s.className="loading__row",this.stageEl=document.createElement("span"),this.stageEl.className="loading__stage",this.stageEl.textContent="старт",this.bytesEl=document.createElement("span"),this.bytesEl.className="loading__bytes",this.bytesEl.textContent="",s.append(this.stageEl,this.bytesEl),this.errorEl=document.createElement("div"),this.errorEl.className="loading__error",this.errorEl.hidden=!0,this.root.append(this.bar,s,this.errorEl),t.append(this.root)}setStage(t,n){t!==this.lastStage&&(this.stageEl.textContent=t,this.lastStage=t);const s=n!==void 0&&Number.isFinite(n);if(this.bar.classList.toggle("loading__bar--unknown",!s),s){const o=Math.round(Math.min(1,Math.max(0,n))*100);o!==this.lastPercent&&(this.fill.style.width=`${o}%`,this.root.setAttribute("aria-valuenow",String(o)),this.lastPercent=o)}}setError(t){this.bar.hidden=!0,this.stageEl.textContent="ошибка",this.errorEl.textContent=t,this.errorEl.hidden=!1}updateFromResources(){if(typeof performance.getEntriesByType!="function")return;const t=performance.getEntriesByType("resource");let n=0,s=0;for(const i of t)i.name.indexOf(location.origin)===0&&(n+=i.encodedBodySize||i.transferSize||0,s=Math.max(s,i.responseEnd||0));if(n<=0)return;const o=`${td(n)} загружено`;o!==this.lastBytesText&&(this.bytesEl.textContent=o,this.lastBytesText=o)}hide(){return this.root.setAttribute("aria-hidden","true"),this.root.classList.add("hidden"),new Promise(t=>{let n=!1;const s=()=>{n||(n=!0,this.root.remove(),t())};this.root.addEventListener("transitionend",s,{once:!0}),setTimeout(s,400)})}}function td(e){return e<1024?`${e} Б`:e<1024*1024?`${(e/1024).toFixed(0)} КБ`:`${(e/(1024*1024)).toFixed(1)} МБ`}const Gr="/blend-ars/assets/LilitaOne-Regular.C8J_njg9.ttf",nd=new URL("/blend-ars/assets/fullscreen.C4xFj3BF.svg",import.meta.url).href,sd=new URL("/blend-ars/assets/fullscreen-exit.D85sBYy_.svg",import.meta.url).href,od=new URL("/blend-ars/assets/info.BdEiL0Sf.svg",import.meta.url).href,ad=new URL("/blend-ars/assets/book-open.CLVm05VY.svg",import.meta.url).href,id=new URL("/blend-ars/assets/trophy.DpYLSMCP.svg",import.meta.url).href,cr=new URL("/blend-ars/assets/gear_six.TA3VDyxO.svg",import.meta.url).href,rd=new URL("/blend-ars/assets/music-note.BpgtDFsX.svg",import.meta.url).href,cd=new URL("/blend-ars/assets/package.BDtnf6Kx.svg",import.meta.url).href,ld=new URL("/blend-ars/assets/flag.CeS1AlXY.svg",import.meta.url).href,dd=new URL("/blend-ars/assets/garage.D_BJEZuB.svg",import.meta.url).href,ud=new URL("/blend-ars/assets/storefront.e4K1ebmi.svg",import.meta.url).href,pd=new URL("/blend-ars/assets/truck.rvSKQmy5.svg",import.meta.url).href,md=new URL("/blend-ars/assets/coupe.DdXCwqWg.svg",import.meta.url).href,fd=new URL("/blend-ars/assets/x.D2ii0gML.svg",import.meta.url).href,hd=new URL("/blend-ars/assets/list.DXUiLcf_.svg",import.meta.url).href,bd=new URL("/blend-ars/assets/triangle-left.DPdzCyZ0.svg",import.meta.url).href,Jm=new URL("/blend-ars/assets/stop-square.Cvj1GcXd.svg",import.meta.url).href,Xm=new URL("/blend-ars/assets/arrows_clockwise.Toz6NZFk.svg",import.meta.url).href,Hr="/blend-ars/assets/ui-click.DcT3uYBZ.wav",gd={click:1,toggle:1.22,window:.86},yd=.5;let Ur=()=>.5,et=null,Fs=null,Xt=null,lr=!1;function _d(e){Ur=e}function xd(){if(lr)return;lr=!0;const e=window.AudioContext??window.webkitAudioContext;if(e!==void 0){try{et=new e}catch{et=null;return}fetch(Hr).then(t=>t.arrayBuffer()).then(t=>et?.decodeAudioData(t)).then(t=>{Fs=t??null}).catch(()=>{Fs=null})}}function Ae(e="click"){const t=yd*Ur();if(t>0){if(Fs!==null&&et!==null){et.state==="suspended"&&et.resume().catch(()=>{});const n=et.createBufferSource();n.buffer=Fs,n.playbackRate.value=gd[e];const s=et.createGain();s.gain.value=t,n.connect(s).connect(et.destination),n.start();return}Xt===null&&(Xt=new Audio(Hr),Xt.preload="auto"),Xt.volume=t,Xt.currentTime=0,Xt.play().catch(()=>{})}}function $t(e){const t=n=>{if(!n.isPrimary||n.pointerType==="mouse"&&n.button!==0)return;const s=n.target;if(!(s instanceof Element)||s.closest('[disabled], [aria-disabled="true"]')||s.closest('input[type="range"]'))return;if(s.closest('input[type="checkbox"], .modes__card, [role="switch"]')){Ae("toggle");return}s.closest('button, .mitem, [role="button"], .dlg__close')&&Ae("click")};return e.addEventListener("pointerdown",t,!0),()=>e.removeEventListener("pointerdown",t,!0)}function ks(e){const t=n=>{const s=n.target;s instanceof HTMLInputElement&&s.type==="range"&&Ae("click")};return e.addEventListener("change",t,!0),()=>e.removeEventListener("change",t,!0)}const vd=`
/* Окно занимает прямоугольник панели окон (70% ширины под полосой): координаты
   публикует ui/window-host.ts по геометрии панели. Корень лежит на body, а не
   внутри панели, — иначе окно не поднялось бы над тач-панелями и HUD в сцене. */
.dlg {
    position: fixed;
    left: var(--win-left, 0px);
    top: var(--win-top, 0px);
    width: var(--win-width, 100vw);
    height: var(--win-height, 60vh);
    z-index: 150;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    padding: 0;
    /* Стекло снято (рецепт тот же, что у .win и .settings): окно — большая
       blur-область над живым кадром, а фон затемнён с 85% до 92%, чтобы
       текст читался без преломления. */
    background: #1d2021ec;
    border: 1px solid #ebdbb233;
    border-radius: max(0.375rem, 0.35em);
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    color: #ebdbb2;
}
/* Явное правило для hidden обязательно: .dlg ниже задаёт display: flex, а
   правило из UA-стилей ([hidden] { display: none }) имеет меньшую
   специфичность и проигрывает. Без этого «закрытое» окно продолжало висеть
   поверх экрана и перехватывать клики по меню — кнопки в полосе не нажимались. */
.dlg[hidden] { display: none; }
/* Панель занимает всю область окна и растягивается на неё: список коммитов
   журнала на 20 строк иначе упирался бы в узкую колонку и прокручивался
   впустую, хотя справа было полсотни пустых пикселей. */
.dlg__panel {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 1.125rem 1.375rem 1rem;
    background: transparent;
}
.dlg__title {
    flex: none;
    margin: 0 0 0.75rem;
    font-size: 1.25rem;
    font-weight: 700;
}
.dlg__body {
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 0;
    flex: 1;
    scrollbar-gutter: stable;
    -webkit-overflow-scrolling: touch;
}
.dlg__hint {
    margin: 0 0 12px;
    font-size: 14px;
    line-height: 1.5;
    color: #a89984;
}
.dlg__empty {
    margin: 0 auto;
    max-width: 520px;
    align-self: center;
    padding: 18px 16px;
    border: 1px dashed #4a4a4a;
    border-radius: max(6px, 0.35em);
    font-size: 14px;
    line-height: 1.5;
    color: #a89984;
    text-align: center;
}
.dlg__link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 14px;
    padding: 11px 16px;
    min-height: 44px;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    color: #ebdbb2;
    font-size: 14px;
    text-decoration: none;
}
.dlg__link:hover { border-color: #fe8019; color: #fe8019; background: #3c3836; }
.dlg__link:active { border-color: #d65d0e; color: #d65d0e; background: #1d2021; transform: translateY(1px); }
.dlg__link:focus-visible { outline: 2px solid #ebdbb2; outline-offset: 3px; }

/* --- Журнал разработки ------------------------------------------------- */
.devlog__meta {
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: baseline;
    gap: 10px;
    margin: 0 0 10px;
    padding: 0.5rem 0;
    font-size: 13px;
    color: #a89984;
    background: #1d2021d9;
}
.devlog__list {
    margin: 0;
    padding: 0;
    list-style: none;
    /* Без собственной прокрутки: скроллит тело окна (.dlg__body), иначе
       список крутился внутри крутящегося тела — двойной скроллбар. */
    max-height: none;
    overflow: visible;
}
.devlog__item {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 10px;
    align-items: baseline;
    padding: 9px 8px;
    border-top: 1px solid #3c3836;
    font-size: 14px;
    line-height: 1.4;
}
.devlog__hash {
    font-family: ui-monospace, 'SF Mono', 'Cascadia Mono', Consolas, monospace;
    font-size: 12px;
    color: #fe8019;
}
.devlog__date {
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: #a89984;
}
.devlog__subject { color: #ebdbb2; }
`;function Ws(e){const t=document.createElement("div");if(t.className="dlg",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",e.title),!document.getElementById("dlg-style")){const c=document.createElement("style");c.id="dlg-style",c.textContent=vd,document.head.append(c)}const n=document.createElement("div");n.className="dlg__panel";const s=document.createElement("h2");s.className="dlg__title",s.textContent=e.title;const o=document.createElement("div");return o.className="dlg__body",o.append(e.body),n.append(s,o),t.append(n),document.body.append(t),{root:t,open(){t.hidden=!1},close(){t.hidden=!0},destroy(){t.remove()}}}const wd=[{body:"truck",title:"Джип",note:"Грузовик. Родное шасси, грузовая физика.",icon:pd},{body:"maserati",title:"Мазерати",note:"GT3-обвес на том же шасси.",icon:md}],Ed=`
/* Сетка карточек: две колонки, пока хватает ширины, дальше одна.
   auto-fit вместо фиксированного числа колонок — окно занимает 70%
   экрана, и на телефоне в портрете две карточки в ряд стали бы
   нечитаемыми. */
.modes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
}
.modes__card {
    appearance: none;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    padding: 16px 14px;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    background: #282828e6;
    color: #ebdbb2;
    font: inherit;
    text-align: center;
    cursor: pointer;
    touch-action: manipulation;
}
.modes__card:hover { border-color: #fe8019; background: #3c3836; }
.modes__card:active { transform: translateY(1px); border-color: #d65d0e; }
.modes__card:focus-visible { outline: 1px solid #ebdbb2; outline-offset: 2px; }
.modes__card[disabled] { opacity: 0.5; cursor: default; transform: none; }
/* Иконка кузова — крупная, это опознавательный признак карточки. */
.modes__art {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 96px;
    border: 1px solid #3c3836;
    border-radius: max(0.25rem, 0.35em);
    background: #1d2021;
}
.modes__art::before {
    content: '';
    width: 76px;
    height: 76px;
    background-color: #ebdbb2;
    -webkit-mask: var(--modes-icon) center / contain no-repeat;
    mask: var(--modes-icon) center / contain no-repeat;
}
.modes__card:hover .modes__art::before { background-color: #fe8019; }
/* Заголовок карточки — шрифтом игры, как у разделов макета. */
.modes__title {
    font-family: 'Lilita One', 'Arial Black', system-ui, sans-serif;
    font-size: 1.375rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}
.modes__note {
    margin: 0;
    font-size: 13px;
    line-height: 1.4;
    color: #a89984;
}
`;function Sd(e){if(!document.getElementById("game-modes-style")){const o=document.createElement("style");o.id="game-modes-style",o.textContent=Ed,document.head.append(o)}const t=document.createElement("div");t.className="modes";const n=wd.map(o=>{const i=document.createElement("button");i.className="modes__card",i.type="button",i.dataset.body=o.body;const c=document.createElement("span");c.className="modes__art",c.style.setProperty("--modes-icon",`url(${JSON.stringify(o.icon)})`);const m=document.createElement("span");m.className="modes__title",m.textContent=o.title;const l=document.createElement("p");return l.className="modes__note",l.textContent=o.note,i.append(c,m,l),i.addEventListener("pointerdown",f=>{f.preventDefault(),!i.disabled&&e(o.body)}),t.append(i),i}),s=Ws({title:"Режимы игры",body:t});return{dialog:s,open(){s.open()},setBusy(o){for(const i of n)i.disabled=o},destroy(){s.destroy()}}}const kd={version:1,physics:{on:{steerAngle:!0,wheelAngleX:!0,wheelAngleY:!0,wheelAngleZ:!0,wheelSpin:!0,engineTorque:!0,peakTorqueRpm:!0,maxRpm:!0,finalDrive:!0,brakeForce:!0,mass:!0,engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,inertiaRoll:!0,inertiaPitch:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{steerAngle:40,wheelAngleX:0,wheelAngleY:0,wheelAngleZ:0,wheelSpin:1,engineTorque:1138,peakTorqueRpm:3600,maxRpm:5e3,finalDrive:6.4,brakeForce:18e3,mass:6096,engineBraking:.16,dragForce:2.4,rollingResistance:.028,lateralGripAssist:2,wheelGrip:4.4,rollInfluence:.9,suspStiffness:24,suspDamping:2.8,suspCompression:5,suspTravel:.44,suspForce:45900,suspRelVel:1,antiRoll:1,inertiaScale:1.9,inertiaRoll:1.6,inertiaPitch:1.4,highSpeedLock:.7,highSpeedLockAt:95,camTurnRate:1,camFollowRate:5,skidThreshold:.18}},lighting:{val:{exposure:.6,key:3,fill:.3,rimLeft:.5,rimRight:.5,spot:2,fog:.0035,gamma:1,gammaStrength:1,toneMapping:2,sunElevation:25,sunAzimuth:47,turbidity:1,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:.2}},shadows:{val:{cascades:2,distribution:.7,blend:.12,distance:122,resolution:4096,bias:.05,normalBias:.05}},postfx:{on:!0,val:{bloom:.1,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:1,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:1,brightness:1,contrast:1,saturation:1,fringing:5,sharpness:.05}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.5,skid:1,shift:1,impact:1,landing:1,music:.4,uiClick:.5}},hud:{on:{stats:!0,record:"window"}},graphics:{val:{scale:1,fps:0,msaa:!0}},recording:{val:{fps:24,quality:"high",keyFrame:1,sound:!0}}},Cd={version:1,physics:{on:{steerAngle:!0,wheelAngleX:!0,wheelAngleY:!0,wheelAngleZ:!0,wheelSpin:!0,engineTorque:!0,peakTorqueRpm:!0,maxRpm:!0,finalDrive:!0,brakeForce:!0,mass:!0,engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,inertiaRoll:!0,inertiaPitch:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{steerAngle:40,wheelAngleX:0,wheelAngleY:0,wheelAngleZ:0,wheelSpin:1,engineTorque:1138,peakTorqueRpm:3600,maxRpm:5e3,finalDrive:6.4,brakeForce:18e3,mass:6096,engineBraking:.16,dragForce:2.4,rollingResistance:.028,lateralGripAssist:2,wheelGrip:4.4,rollInfluence:.9,suspStiffness:24,suspDamping:2.8,suspCompression:5,suspTravel:.44,suspForce:45900,suspRelVel:1,antiRoll:1,inertiaScale:1.9,inertiaRoll:1.6,inertiaPitch:1.4,highSpeedLock:.7,highSpeedLockAt:95,camTurnRate:1,camFollowRate:5,skidThreshold:.18}},lighting:{val:{exposure:.6,key:3,fill:.3,rimLeft:.5,rimRight:.5,spot:2,fog:.0035,gamma:1,gammaStrength:1,toneMapping:2,sunElevation:25,sunAzimuth:47,turbidity:1,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:.2}},shadows:{val:{cascades:2,distribution:.7,blend:.12,distance:122,resolution:4096,bias:.05,normalBias:.05}},postfx:{on:!0,val:{bloom:.1,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:1,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:1,brightness:1,contrast:1,saturation:1,fringing:5,sharpness:.05}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.5,skid:1,shift:1,impact:1,landing:1,music:.4,uiClick:.5}},hud:{on:{stats:!0,record:"window"}},graphics:{val:{scale:.5,fps:30,msaa:!1}},recording:{val:{fps:24,quality:"high",keyFrame:1,sound:!0}}},Nd=[{key:"buggy-1.2t-150hp",name:"Багги — 1,2 т, 150 л.с.",note:"Лёгкая труба на длинноходной мягкой подвеске (пружина 16, ход 0,5 м) и короткой паре 12 — прыгает и не пробивает ход. 112 км/ч по отсечке, сопротивление воздуха держит её до 167. Тормозит слабо: 9 000 Н = 0,61 круга.",val:{mass:1200,engineTorque:214,peakTorqueRpm:5e3,maxRpm:6500,finalDrive:12,brakeForce:9e3,steerAngle:40,engineBraking:.1,dragForce:2,rollingResistance:.035,lateralGripAssist:1.6,wheelGrip:5,rollInfluence:1,suspStiffness:16,suspDamping:2.2,suspCompression:3.6,suspTravel:.5,suspForce:22400,suspRelVel:1,antiRoll:.45,inertiaScale:1.5,inertiaRoll:1.6,inertiaPitch:1.5,highSpeedLock:.55,highSpeedLockAt:95,camTurnRate:1,camFollowRate:5,skidThreshold:.15}},{key:"hot-hatch-1.35t-250hp",name:"Хот-хэтч — 1,35 т, 250 л.с.",note:"Переднеприводный характер: тяга 3,97 м/с², чуть шире базы и жёстче (пружина 20), поэтому стоит ровнее багги. 169 км/ч, тормоз 11 000 Н = 0,66 круга.",val:{mass:1350,engineTorque:371,peakTorqueRpm:4800,maxRpm:6500,finalDrive:7.9,brakeForce:11e3,steerAngle:34,engineBraking:.12,dragForce:1.6,rollingResistance:.015,lateralGripAssist:1.3,wheelGrip:5,rollInfluence:.7,suspStiffness:20,suspDamping:2.4,suspCompression:4.4,suspTravel:.32,suspForce:22500,suspRelVel:1,antiRoll:.55,inertiaScale:1.6,inertiaRoll:1.1,inertiaPitch:1.2,highSpeedLock:.6,highSpeedLockAt:110,camTurnRate:1,camFollowRate:5,skidThreshold:.15}},{key:"sport-coupe-1.45t-300hp",name:"Спорт-купе — 1,45 т, 300 л.с.",note:"Обтекаемое (dragForce 1,0) и собранное: пружина 26, ход 0,3 м. 209 км/ч, разгон 3,48 м/с². Тормоз 13 000 Н = 0,68 круга — на грани, как у muscle car, но на меньшей массе.",val:{mass:1450,engineTorque:388,peakTorqueRpm:5500,maxRpm:7200,finalDrive:7.1,brakeForce:13e3,steerAngle:32,engineBraking:.09,dragForce:1,rollingResistance:.014,lateralGripAssist:1.1,wheelGrip:5.4,rollInfluence:.65,suspStiffness:26,suspDamping:2.6,suspCompression:4.8,suspTravel:.3,suspForce:24200,suspRelVel:1,antiRoll:.4,inertiaScale:1.8,inertiaRoll:.7,inertiaPitch:1,highSpeedLock:.55,highSpeedLockAt:120,camTurnRate:1,camFollowRate:5,skidThreshold:.15}},{key:"supercar-1.5t-650hp",name:"Суперкар — 1,5 т, 650 л.с.",note:"Самый мощный и самый злой: 289 км/ч, 5,36 м/с², отсечка 8 000, пара 5,7. Стук в спину: 771 Н·м с 6 000. Тормоз у самой границы круга (0,73), спад руля — самый ранний из всех (0,5 на 130 км/ч).",val:{mass:1500,engineTorque:771,peakTorqueRpm:6e3,maxRpm:8e3,finalDrive:5.7,brakeForce:15e3,steerAngle:30,engineBraking:.08,dragForce:.9,rollingResistance:.012,lateralGripAssist:.9,wheelGrip:5.6,rollInfluence:.6,suspStiffness:34,suspDamping:2.8,suspCompression:5.2,suspTravel:.28,suspForce:25e3,suspRelVel:1,antiRoll:.3,inertiaScale:2,inertiaRoll:.6,inertiaPitch:.9,highSpeedLock:.5,highSpeedLockAt:130,camTurnRate:1,camFollowRate:5,skidThreshold:.15}},{key:"rally-1.6t-350hp",name:"Раллийная — 1,6 т, 350 л.с.",note:"Компромисс между парой и ходом: 185 км/ч, длинная подвеска (0,4 м), грязь держит слабее асфальта (качение 0,025). Рулевой запас шире легковых (36°), угол падает позже — нужен на гравии.",val:{mass:1600,engineTorque:498,peakTorqueRpm:5e3,maxRpm:7e3,finalDrive:7.8,brakeForce:14500,steerAngle:36,engineBraking:.1,dragForce:1.9,rollingResistance:.025,lateralGripAssist:1.4,wheelGrip:5.2,rollInfluence:.7,suspStiffness:24,suspDamping:2.6,suspCompression:4.9,suspTravel:.4,suspForce:26700,suspRelVel:1,antiRoll:.35,inertiaScale:1.7,inertiaRoll:.9,inertiaPitch:1.1,highSpeedLock:.55,highSpeedLockAt:115,camTurnRate:1,camFollowRate:5,skidThreshold:.15}},{key:"sedan-1.8t-200hp",name:"Седан — 1,8 т, 200 л.с.",note:"Спокойный возок: 154 км/ч, разгон 2,90 м/с², широкий стабилизатор 0,8 — крена почти нет. Мягко тормозит двигателем (0,14) и не любит резкий руль: спад до 0,65 уже на 105 км/ч.",val:{mass:1800,engineTorque:356,peakTorqueRpm:4e3,maxRpm:6e3,finalDrive:8,brakeForce:13e3,steerAngle:38,engineBraking:.14,dragForce:1.9,rollingResistance:.018,lateralGripAssist:1.5,wheelGrip:4.6,rollInfluence:.8,suspStiffness:20,suspDamping:2.5,suspCompression:4.5,suspTravel:.34,suspForce:3e4,suspRelVel:1,antiRoll:.8,inertiaScale:1.6,inertiaRoll:1.3,inertiaPitch:1.3,highSpeedLock:.65,highSpeedLockAt:105,camTurnRate:1,camFollowRate:5,skidThreshold:.15}},{key:"pickup-2.6t-300hp",name:"Пикап — 2,6 т, 300 л.с.",note:"Тяговитый и валкий: 593 Н·м с 3 600, 161 км/ч, длинный ход 0,44 м, стабилизатор 1,0. Грунт и грязь (качение 0,028) забирают часть тяги, тормоз 18 000 Н = 0,64 круга.",val:{mass:2600,engineTorque:593,peakTorqueRpm:3600,maxRpm:5e3,finalDrive:6.4,brakeForce:18e3,steerAngle:40,engineBraking:.16,dragForce:2.4,rollingResistance:.028,lateralGripAssist:2,wheelGrip:4.4,rollInfluence:.9,suspStiffness:24,suspDamping:2.8,suspCompression:5,suspTravel:.44,suspForce:45900,suspRelVel:1,antiRoll:1,inertiaScale:1.9,inertiaRoll:1.6,inertiaPitch:1.4,highSpeedLock:.7,highSpeedLockAt:95,camTurnRate:1,camFollowRate:5,skidThreshold:.18}},{key:"suv-2.9t-250hp",name:"Внедорожник — 2,9 т, 250 л.с.",note:"Тяжёлый и мягкий: ход 0,48 м, пружина 22, стабилизатор 1,4 — кренится, но не ложится. 139 км/ч, разгон 2,27 м/с² — самый ленивый из лёгкой половины списка. Слабое сцепление (4,6) при большом весе.",val:{mass:2900,engineTorque:468,peakTorqueRpm:3800,maxRpm:5200,finalDrive:7.7,brakeForce:21e3,steerAngle:42,engineBraking:.18,dragForce:2.6,rollingResistance:.03,lateralGripAssist:2.2,wheelGrip:4.6,rollInfluence:.95,suspStiffness:22,suspDamping:3,suspCompression:5.4,suspTravel:.48,suspForce:51200,suspRelVel:1,antiRoll:1.4,inertiaScale:2,inertiaRoll:1.8,inertiaPitch:1.5,highSpeedLock:.7,highSpeedLockAt:90,camTurnRate:1,camFollowRate:5,skidThreshold:.18}},{key:"tractor-5t-360hp",name:"Дизельный тягач — 5 т, 360 л.с.",note:"Тот самый 5-тонный грузовик из экспорта «Fast Stable 5000 - test 1»: 1 500 Н·м с 1 700, отсечка 3 400, пара 6,6, пружина 28 при ходе 0,45. Тянет с холостых (3,62 м/с²), но больше 106 км/ч не едет. Тормоза подняты с экспортных 11 000 до 35 000 Н (0,54 круга — замеры шасси в шапке: 39 000 Н давали 17,4 м = 0,81 g).",val:{mass:5e3,engineTorque:1500,peakTorqueRpm:1700,maxRpm:3400,finalDrive:6.6,brakeForce:35e3,engineBraking:.22,dragForce:3.2,rollingResistance:.025,lateralGripAssist:2.4,wheelGrip:5.3,rollInfluence:.1,suspStiffness:28,suspDamping:2.9,suspCompression:5.2,suspTravel:.45,suspForce:7e4,suspRelVel:1,antiRoll:1.2,inertiaScale:2.8,inertiaRoll:1.9,inertiaPitch:1.6,highSpeedLock:.5,highSpeedLockAt:90,camTurnRate:1,camFollowRate:5,skidThreshold:.15}},{key:"armored-7t-400hp",name:"Броневик — 7 т, 400 л.с.",note:"Самая тяжёлая машина списка: 7 т, 1 187 Н·м с 2 400, 100 км/ч. Жёсткая подвеска (30) при ходе 0,42 держит вес, стабилизатор 1,5 и инерция 2,4/2,1/1,7 — валится неохотно. Тормоз 42 000 Н = 0,49 круга, зато и не срывается в юз.",val:{mass:7e3,engineTorque:1187,peakTorqueRpm:2400,maxRpm:3800,finalDrive:7.8,brakeForce:42e3,steerAngle:44,engineBraking:.2,dragForce:3.6,rollingResistance:.035,lateralGripAssist:2.6,wheelGrip:5,rollInfluence:1,suspStiffness:30,suspDamping:3.2,suspCompression:6,suspTravel:.42,suspForce:116700,suspRelVel:1,antiRoll:1.5,inertiaScale:2.4,inertiaRoll:2.1,inertiaPitch:1.7,highSpeedLock:.6,highSpeedLockAt:85,camTurnRate:1,camFollowRate:5,skidThreshold:.2}},{key:"armored-truck-5t-300hp",name:"Бронированный грузовик",note:"Ход из экспорта «джип 10.10.2026 08:59»: подвеска собранная (распускание 6,5 против сжатия 2,92), стабилизатор 1,7, сцепление 6, короткий руль на скорости. Тормоза подняты до 15 000 Н — замер: 18,3 м с 60 км/ч (0,77 g). Массу, мотор и коробку пресет не задаёт.",val:{lateralGripAssist:4,wheelGrip:6,brakeForce:15e3,rollInfluence:.9,antiRoll:1.7,suspDamping:6.5,suspCompression:2.92,suspForce:58650,suspRelVel:.74,inertiaScale:1.77,inertiaRoll:.63,highSpeedLock:.24,highSpeedLockAt:64,camTurnRate:1,camFollowRate:5}},{key:"muscle-car-4t-500hp",name:"Muscle car — 4 т, 500 л.с.",note:"Кузов на мягких пружинах: нос гуляет, на скорости ложится на борт и переворачивается. Атмосферник: пик 4200 об/мин, отсечка 5600. Тормозит в пол с 60 км/ч за 17,8 м (0,80 g по замеру).",val:{mass:4e3,engineTorque:850,peakTorqueRpm:4200,maxRpm:5600,finalDrive:6.5,brakeForce:3e4,steerAngle:32,engineBraking:.1,dragForce:2,rollingResistance:.015,lateralGripAssist:.6,wheelGrip:4.2,rollInfluence:.8,antiRoll:.25,inertiaScale:1.8,inertiaRoll:.6,inertiaPitch:.9,suspStiffness:22,suspDamping:2.4,suspCompression:4.6,suspTravel:.34,suspForce:62e3,highSpeedLock:.6,highSpeedLockAt:130,camTurnRate:1,camFollowRate:5}}],zr="blendars.presets.v1",Vr="blendars-settings",Wr=1;let ye={active:null,list:[]},dr=!1;function it(){if(dr)return ye;dr=!0;try{const e=localStorage.getItem(zr);if(!e)return ye;const t=JSON.parse(e);if(!t||typeof t!="object")return ye;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const i=Rd(o);i&&s.push(i)}ye={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ye}function Rd(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function hn(){try{localStorage.setItem(zr,JSON.stringify(ye))}catch{}}function Is(){return it().list.slice().sort((t,n)=>n.created-t.created)}function $s(){return it().active}function Ad(){const e=it();return e.active?e.list.find(t=>t.id===e.active)??null:null}function Ca(e){it(),ye.active=e,hn()}function jn(e,t,n=Date.now()){it();const s={id:Id(n),name:e.trim()||yt(new Date(n)),created:n,data:t};return ye.list.push(s),ye.active=s.id,hn(),s}function Kr(e,t){const s=it().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,hn(),!0):!1}function Yr(e,t){const s=it().list.find(o=>o.id===e);return s?(s.data=t,hn(),!0):!1}function Ld(e){it();const t=ye.list.findIndex(n=>n.id===e);t<0||(ye.list.splice(t,1),ye.active===e&&(ye.active=null),hn())}function yt(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function Td(){it(),ye={active:null,list:[]},hn()}function Pd(e){const t={app:Vr,version:Wr,name:e.name,created:e.created,data:e.data},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`${Fd(e.name)}.json`,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Md(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==Vr||n.version!==Wr||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function Fd(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function Id(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const qr="blendars.physics-presets.v1",Wa="blendars-physics",Ka=1;let pe={active:null,list:[]},ur=!1;function rt(){if(ur)return pe;ur=!0;try{const e=localStorage.getItem(qr);if(!e)return pe;const t=JSON.parse(e);if(!t||typeof t!="object")return pe;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const i=$d(o);i&&s.push(i)}pe={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return pe}function $d(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function jt(){try{localStorage.setItem(qr,JSON.stringify(pe))}catch{}}function Na(){return rt().list.slice().sort((e,t)=>t.created-e.created)}function Ra(){return rt().active}function Aa(e){rt(),pe.active=e,jt()}function Jr(e,t,n=Date.now()){rt();const s={id:rc(n),name:e.trim()||xt(new Date(n)),created:n,data:t};return pe.list.push(s),pe.active=s.id,jt(),s}function Xr(e,t){const s=rt().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,jt(),!0):!1}function Qr(e,t){const s=rt().list.find(o=>o.id===e);return s?(s.data=t,jt(),!0):!1}function Zr(e){rt();const t=pe.list.findIndex(n=>n.id===e);t<0||(pe.list.splice(t,1),pe.active===e&&(pe.active=null),jt())}function ec(){rt(),pe={active:null,list:[]},jt()}function tc(e){rt();let t=0;for(const n of e){const s=n.created??Date.now()+t,o=n.name?.trim()||xt(new Date(s));pe.list.some(c=>c.name===o&&c.created===s)||(pe.list.push({id:rc(s),name:o,created:s,data:n.data}),t++)}return t>0&&jt(),t}function xt(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function nc(e){ic(`${Bd(e.name)}.json`,{app:Wa,version:Ka,...ac(e)})}function sc(e){ic("physics-presets.json",{app:Wa,version:Ka,presets:e.map(ac)})}function oc(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==Wa||n.version!==Ka)return null;if(Array.isArray(n.presets)){const o=[];for(const i of n.presets){if(!i||typeof i!="object")continue;const c=pr(i);c&&o.push(c)}return o.length>0?{items:o}:null}const s=pr(n);return s?{items:[s]}:null}function ac(e){return{name:e.name,created:e.created,data:e.data}}function pr(e){if(!e.data||typeof e.data!="object")return null;const t={data:e.data};return typeof e.name=="string"&&(t.name=e.name),typeof e.created=="number"&&Number.isFinite(e.created)&&(t.created=e.created),t}function ic(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=e,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Bd(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"physics-preset"}function rc(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Gn=[{action:"gas",title:"Газ",note:"Вперёд"},{action:"brake",title:"Тормоз / назад",note:"Нажатый вместе с газом — аккорд заряда"},{action:"left",title:"Руль влево",note:""},{action:"right",title:"Руль вправо",note:""},{action:"handbrake",title:"Ручник",note:"Удержание"},{action:"reset",title:"Сброс на месте",note:"Однократно, по нажатию"},{action:"shoulder",title:"Плечо камеры",note:"Q по умолчанию"},{action:"view",title:"Сброс ракурса",note:"Возврат ручного вида и зума"}],Ks={gas:"KeyW",brake:"KeyS",left:"KeyA",right:"KeyD",handbrake:"Space",reset:"KeyR",shoulder:"KeyQ",view:"KeyC"},Dd={gas:"ArrowUp",brake:"ArrowDown",left:"ArrowLeft",right:"ArrowRight"},cc="blendars.keys.v1",Hn=[];let kt={...Ks};const Od=new Set(["Escape","Tab","F5","F11","F12"]);function jd(e){return e?e.startsWith("Key")?e.slice(3):e.startsWith("Digit")?e.slice(5):e.startsWith("Numpad")?`Num ${e.slice(6)}`:{Space:"Пробел",ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→",ShiftLeft:"Shift (лев)",ShiftRight:"Shift (прав)",ControlLeft:"Ctrl (лев)",ControlRight:"Ctrl (прав)",AltLeft:"Alt (лев)",AltRight:"Alt (прав)",Enter:"Enter",Backspace:"Backspace",Minus:"−",Equal:"=",Comma:",",Period:".",Slash:"/",Backslash:"\\",Semicolon:";",Quote:"'",BracketLeft:"[",BracketRight:"]",Backquote:"ё"}[e]??e:"—"}function lc(e,t){for(const n of Gn)if(n.action!==t&&dc(n.action).includes(e))return n.action;return null}function Ya(e){return Od.has(e)}function Qm(){return kt}function dc(e){const t=kt[e],n=Dd[e];return n&&n!==t?[t,n]:[t]}function uc(e,t){if(!t||Ya(t)||lc(t,e))return!1;if(kt[e]===t)return!0;kt={...kt,[e]:t},pc();for(const n of Hn)n();return!0}function Gd(e){uc(e,Ks[e])}function Hd(){kt={...Ks},pc();for(const e of Hn)e()}function Zm(e){return Hn.push(e),()=>{const t=Hn.indexOf(e);t>=0&&Hn.splice(t,1)}}function pc(){try{localStorage.setItem(cc,JSON.stringify(kt))}catch{}}function Ud(){let e=null;try{const s=localStorage.getItem(cc);e=s?JSON.parse(s):null}catch{e=null}if(!e||typeof e!="object")return;const t=e,n={...Ks};for(const s of Gn){const o=t[s.action];typeof o=="string"&&o.length>0&&!Ya(o)&&(n[s.action]=o)}kt=n}Ud();const mc="blendars.camera-presets.v1",zd="blendars.camera-views.v1",qa="blendars-camera",Ja=1;let ae={active:null,list:[]},mr=!1;function ct(){if(mr)return ae;mr=!0;try{const e=localStorage.getItem(mc);if(!e)return ae={active:null,list:Vd()},ae.list.length>0&&Rt(),ae;const t=JSON.parse(e);if(!t||typeof t!="object")return ae;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const i=Wd(o);i&&s.push(i)}ae={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ae}function Vd(){try{const e=localStorage.getItem(zd);if(!e)return[];const t=JSON.parse(e);if(!t||typeof t!="object")return[];const n=t.list;if(!Array.isArray(n))return[];const s=[];for(const o of n){if(!o||typeof o!="object")continue;const i=o;typeof i.id!="string"||!i.id||!i.view||typeof i.view!="object"||s.push({id:i.id,name:typeof i.name=="string"&&i.name?i.name:"Без имени",created:typeof i.created=="number"&&Number.isFinite(i.created)?i.created:0,data:i.view})}return s}catch{return[]}}function Wd(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Rt(){try{localStorage.setItem(mc,JSON.stringify(ae))}catch{}}function La(){return ct().list.slice().sort((e,t)=>t.created-e.created)}function Ta(){return ct().active}function fc(e){ct(),ae.active=e,Rt()}function Pa(e,t,n=Date.now()){ct();const s={id:kc(n),name:e.trim()||$e(new Date(n)),created:n,data:t};return ae.list.push(s),ae.active=s.id,Rt(),s}function hc(e,t){const s=ct().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,Rt(),!0):!1}function bc(e,t){const s=ct().list.find(o=>o.id===e);return s?(s.data=t,Rt(),!0):!1}function gc(e){ct();const t=ae.list.findIndex(n=>n.id===e);t<0||(ae.list.splice(t,1),ae.active===e&&(ae.active=null),Rt())}function yc(){ct(),ae={active:null,list:[]},Rt()}function _c(e){ct();let t=0;for(const n of e){const s=n.created??Date.now()+t,o=n.name?.trim()||$e(new Date(s));ae.list.some(c=>c.name===o&&c.created===s)||(ae.list.push({id:kc(s),name:o,created:s,data:n.data}),t++)}return t>0&&Rt(),t}function $e(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function xc(e){Sc(`${Kd(e.name)}.json`,{app:qa,version:Ja,...Ec(e)})}function vc(e){Sc("camera-presets.json",{app:qa,version:Ja,presets:e.map(Ec)})}function wc(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==qa||n.version!==Ja)return null;if(Array.isArray(n.presets)){const o=[];for(const i of n.presets){if(!i||typeof i!="object")continue;const c=fr(i);c&&o.push(c)}return o.length>0?{items:o}:null}const s=fr(n);return s?{items:[s]}:null}function Ec(e){return{name:e.name,created:e.created,data:e.data}}function fr(e){if(!e.data||typeof e.data!="object")return null;const t={data:e.data};return typeof e.name=="string"&&(t.name=e.name),typeof e.created=="number"&&Number.isFinite(e.created)&&(t.created=e.created),t}function Sc(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=e,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Kd(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"camera-preset"}function kc(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}let Cc=null;function Xa(e){Cc=e}function Re(){return Cc?.()??null}const Ee={yaw:0,lift:0,zoom:1,shoulder:1,distance:6.4,height:2.5,fov:60},Ma=["yaw","lift","zoom","distance","height","fov"],hr={yaw:{label:"Поворот",min:-180,max:180,step:1,unit:"°"},lift:{label:"Наклон",min:-.6,max:3.4,step:.1,unit:" м"},zoom:{label:"Зум",min:.55,max:1.7,step:.01,unit:"×"},distance:{label:"Дистанция",min:3,max:15,step:.1,unit:" м"},height:{label:"Высота",min:1,max:6,step:.1,unit:" м"},fov:{label:"Обзор (fov)",min:40,max:90,step:1,unit:"°"}},aa=[[-1,"Слева"],[0,"Центр"],[1,"Справа"]];function br(e){if(!e||typeof e!="object")return null;const t=e,n=(o,i)=>{const c=t[o];return typeof c=="number"&&Number.isFinite(c)?c:i};return[...Ma,"shoulder"].some(o=>typeof t[o]=="number")?{yaw:n("yaw",Ee.yaw),lift:n("lift",Ee.lift),zoom:n("zoom",Ee.zoom),shoulder:n("shoulder",Ee.shoulder),distance:n("distance",Ee.distance),height:n("height",Ee.height),fov:n("fov",Ee.fov)}:null}function At(e){let t={active:null,list:[]},n=!1;const s=()=>{if(n)return t;n=!0;try{const l=localStorage.getItem(e.storageKey);if(!l)return t;const f=JSON.parse(l);if(!f||typeof f!="object")return t;const p=f,h=[];if(Array.isArray(p.list))for(const v of p.list){const y=Yd(v);y&&h.push(y)}t={active:typeof p.active=="string"?p.active:null,list:h}}catch{}return t},o=()=>{try{localStorage.setItem(e.storageKey,JSON.stringify(t))}catch{}},i=(l=new Date)=>{const f=p=>p<10?`0${p}`:`${p}`;return`${f(l.getDate())}.${f(l.getMonth()+1)}.${l.getFullYear()} ${f(l.getHours())}:${f(l.getMinutes())}`},c=l=>({name:l.name,created:l.created,data:l.data});return{id:e.id,title:e.title,list(){return s().list.slice().sort((l,f)=>f.created-l.created)},activeId(){return s().active},setActive(l){s(),t.active=l,o()},add(l,f,p=Date.now()){s();const h={id:_r(p),name:l.trim()||i(new Date(p)),created:p,data:f};return t.list.push(h),t.active=h.id,o(),h},addMany(l){s();let f=0;for(const p of l){const h=p.created??Date.now()+f,v=p.name?.trim()||i(new Date(h));t.list.some(b=>b.name===v&&b.created===h)||(t.list.push({id:_r(h),name:v,created:h,data:p.data}),f++)}return f>0&&o(),f},rename(l,f){const p=s().list.find(h=>h.id===l);return p?(p.name=f.trim()||p.name,o(),!0):!1},update(l,f){const p=s().list.find(h=>h.id===l);return p?(p.data=f,o(),!0):!1},remove(l){const f=s().list.findIndex(p=>p.id===l);f<0||(t.list.splice(f,1),t.active===l&&(t.active=null),o())},clear(){s(),t={active:null,list:[]},o()},downloadFile(l){yr(`${qd(l.name)}.json`,{app:e.fileTag,version:e.fileVersion,...c(l)})},downloadBundle(l){yr(`${e.fileBaseName}.json`,{app:e.fileTag,version:e.fileVersion,presets:l.map(c)})},parseFile(l){let f;try{f=JSON.parse(l)}catch{return null}if(!f||typeof f!="object")return null;const p=f;if(p.app!==e.fileTag||p.version!==e.fileVersion)return null;if(Array.isArray(p.presets)){const v=[];for(const y of p.presets){if(!y||typeof y!="object")continue;const b=gr(y);b&&v.push(b)}return v.length>0?{items:v}:null}const h=gr(p);return h?{items:[h]}:null},defaultName:i}}function Yd(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function gr(e){if(!e.data||typeof e.data!="object")return null;const t={data:e.data};return typeof e.name=="string"&&(t.name=e.name),typeof e.created=="number"&&Number.isFinite(e.created)&&(t.created=e.created),t}function yr(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=e,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function qd(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function _r(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Jd=At({id:"sound",title:"Звук",storageKey:"blendars.sound-presets.v1",fileTag:"blendars-sound",fileVersion:1,fileBaseName:"sound-presets"}),Xd=At({id:"lighting",title:"Свет",storageKey:"blendars.lighting-presets.v1",fileTag:"blendars-lighting",fileVersion:1,fileBaseName:"lighting-presets"}),Qd=At({id:"shadows",title:"Тени",storageKey:"blendars.shadows-presets.v1",fileTag:"blendars-shadows",fileVersion:1,fileBaseName:"shadows-presets"}),Zd=At({id:"postfx",title:"Post FX",storageKey:"blendars.postfx-presets.v1",fileTag:"blendars-postfx",fileVersion:1,fileBaseName:"postfx-presets"}),eu=At({id:"hud",title:"Интерфейс",storageKey:"blendars.hud-presets.v1",fileTag:"blendars-hud",fileVersion:1,fileBaseName:"hud-presets"}),tu=At({id:"touch",title:"Управление",storageKey:"blendars.touch-presets.v1",fileTag:"blendars-touch",fileVersion:1,fileBaseName:"touch-presets"}),nu=At({id:"graphics",title:"Графика",storageKey:"blendars.graphics-presets.v1",fileTag:"blendars-graphics",fileVersion:1,fileBaseName:"graphics-presets"}),su=At({id:"recording",title:"Запись",storageKey:"blendars.recording-presets.v1",fileTag:"blendars-recording",fileVersion:1,fileBaseName:"recording-presets"}),ou={id:"physics",title:"Физика",list:Na,activeId:Ra,setActive:Aa,add:(e,t,n)=>Jr(e,t,n??Date.now()),addMany:tc,rename:Xr,update:Qr,remove:Zr,clear:ec,downloadFile:nc,downloadBundle:sc,parseFile:oc,defaultName:xt},au={id:"camera",title:"Камера",list:La,activeId:Ta,setActive:fc,add:(e,t,n)=>Pa(e,t,n??Date.now()),addMany:_c,rename:hc,update:bc,remove:gc,clear:yc,downloadFile:xc,downloadBundle:vc,parseFile:wc,defaultName:$e},Qa="blendars.sound-effects.v3",Za="blendars.sound-effects.v2",Nc=[["engine","Двигатель"],["road","Шум качения"],["skid","Скрежет шин"],["shift","Переключение передач"],["impact","Удары кузова"],["landing","Посадка на колёса"],["music","Фоновая музыка"],["uiClick","Клики меню"]],Rc=Nc.map(([e])=>e),Ac={engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},iu={engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1},De={...Ac},Le={...iu},je={steerAngle:{label:"Руль: угол в упор, °",desc:"Сколько колёса поворачивают в крайнем положении руля. У внедорожников 40–45°, у легковых 30–35°.",def:45,off:45,min:10,max:70,decimals:0},wheelAngleX:{label:"Колесо: наклон вперёд-назад, °",desc:"Разворот модели колеса вокруг поперечной оси машины (как катится).",def:0,off:0,min:-360,max:360,decimals:0},wheelAngleY:{label:"Колесо: разворот вокруг вертикали, °",desc:"Разворот модели колеса вокруг вертикали машины: куда смотрит плоскость колеса.",def:0,off:0,min:-360,max:360,decimals:0},wheelAngleZ:{label:"Колесо: разворот диска (сторона), °",desc:"Разворот диска вокруг продольной оси машины: какой стороной колесо смотрит наружу.",def:0,off:0,min:-360,max:360,decimals:0},wheelSpin:{label:"Колесо: скорость вращения ×",def:1,off:1,min:0,max:50,decimals:1,desc:"Множитель качения: 0 — колёса не крутятся, 1 — по спидометру, больше — быстрее."},engineTorque:{label:"Момент двигателя (Н·м)",def:520,off:520,min:200,max:1600,decimals:0,desc:"Пик момента мотора до коробки: разгон и тяга в горку."},peakTorqueRpm:{label:"Обороты пика момента",def:1700,off:1700,min:800,max:6e3,decimals:0,desc:"На этих оборотах мотор тянет сильнее всего; ниже и выше — слабее."},maxRpm:{label:"Отсечка двигателя",def:4200,off:4200,min:2e3,max:8e3,decimals:0,desc:"Потолок оборотов: вместе с главной парой задаёт максимальную скорость."},finalDrive:{label:"Главная пара",def:7,off:7,min:3,max:12,decimals:2,desc:"Множитель всех передач: больше — динамичнее, но ниже потолок скорости."},brakeForce:{label:"Сила тормозов (Н)",def:6500,off:6500,min:2e3,max:6e4,decimals:0,desc:"Тормозная сила на колесо: чем больше, тем резче машина встаёт."},mass:{label:"Масса кузова (кг)",def:2200,off:2200,min:1200,max:8e3,decimals:0,desc:"Вес кузова: влияет на разгон, тормозной путь и работу подвески."},engineBraking:{label:"Торможение двигателем",def:.15,off:.07,min:0,max:.4,decimals:2,desc:"Как сильно машина замедляется с отпущенным газом (доля тормозов)."},dragForce:{label:"Сопротивление воздуха",def:1.75,off:0,min:0,max:4,decimals:2,desc:"Аэродинамика: задаёт упор в воздух на скорости и потолок разгона."},rollingResistance:{label:"Сопротивление качения",def:.02,off:0,min:0,max:.06,decimals:3,desc:"Ход по покрытию: 0,01 — асфальт, 0,02 — грунт (вязнет без газа)."},lateralGripAssist:{label:"Помощь бокового сцепа",def:1.5,off:0,min:0,max:8,decimals:1,desc:"Гасит боковой снос: больше — машина едет туда, куда смотрит нос."},wheelGrip:{label:"Сцепление колёс",def:4,off:2.7,min:1,max:10,decimals:1,desc:"Сцепление шин с покрытием: меньше — раньше срывается в юз."},rollInfluence:{label:"Крен (перенос нагрузки)",def:.3,off:.08,min:0,max:1.2,decimals:2,desc:"Насколько кузов кренится в повороте, нагружая внешние колёса."},suspStiffness:{label:"Жёсткость пружины",def:20,off:20,min:5,max:80,decimals:1,desc:"Упругость подвески: выше — собраннее, но трясёт на кочках."},suspDamping:{label:"Демпфер (распускание)",def:2.3,off:2.3,min:.5,max:8,decimals:2,desc:"Отбой: как быстро пружина распускается и гасит раскачку."},suspCompression:{label:"Демпфер (сжатие)",def:4.4,off:4.4,min:.5,max:12,decimals:2,desc:"Сжатие: как подвеска принимает кочки и жёсткие посадки."},suspTravel:{label:"Ход подвески",def:.35,off:.35,min:.1,max:.8,decimals:2,desc:"Длина хода штока в метрах: больше — мягче, но сильнее кренится."},suspForce:{label:"Предел силы пружины (Н)",def:2e4,off:2e4,min:5e3,max:15e4,decimals:0,desc:"Потолок силы пружины: не даёт кузову лечь на грунт при посадке."},suspRelVel:{label:"Демпфер и скорость кузова",def:1,off:1,min:0,max:2,decimals:2,desc:"Какую долю вертикальной скорости кузова видит демпфер."},antiRoll:{label:"Стабилизатор (рычаг)",def:0,off:0,min:0,max:2.5,decimals:2,desc:"Связывает пружины оси: мешает крену в повороте и раскачке."},inertiaScale:{label:"Инерция поворота (yaw)",def:1.7,off:1,min:.3,max:3.5,decimals:2,desc:"Сопротивление развороту кузова: больше — ленивее руль."},inertiaRoll:{label:"Инерция крена (переворот)",def:1.2,off:1,min:.3,max:2.5,decimals:2,desc:"Масса крена: сколько кузов качается вбок и как охотно ложится."},inertiaPitch:{label:"Инерция тангажа (клевок)",def:1.2,off:1,min:.3,max:2.5,decimals:2,desc:"Клевок носом: как кузов клюёт на тормозе и приседает на газе."},highSpeedLock:{label:"Спад угла руля (доля)",def:.55,off:.4,min:.2,max:1,decimals:2,desc:"Доля руля, остающаяся на скорости спада: меньше — нет срыва."},highSpeedLockAt:{label:"Скорость спада руля",def:100,off:80,min:50,max:200,decimals:0,unit:"kmh",desc:"Скорость, на которой угол руля падает до доли выше."},camTurnRate:{label:"Камера: скорость поворота",def:1,off:2.2,min:1,max:6,decimals:1,desc:"Как быстро камера доворачивается вслед за машиной."},camFollowRate:{label:"Камера: сглаживание",def:5,off:9,min:4,max:20,decimals:0,desc:"Жёсткость погони: больше — камера плотнее держит машину."},skidThreshold:{label:"Порог звука юза",def:.15,off:.3,min:0,max:.5,decimals:2,desc:"Порог срыва, с которого слышен визг покрышек."}},Oe=Object.keys(je),ei="blendars.physics.v1",me={},_e={};ru();function ru(){for(const e of Oe)me[e]=!0,_e[e]=je[e].def}function cu(){try{const e=localStorage.getItem(ei);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:null,o=typeof n.val=="object"&&n.val!==null?n.val:null;for(const i of Oe){const c=je[i],m=s?.[i];typeof m=="boolean"&&(me[i]=m);const l=o?.[i];typeof l=="number"&&Number.isFinite(l)&&(_e[i]=Math.min(c.max,Math.max(c.min,l)))}}catch{}}function en(){try{localStorage.setItem(ei,JSON.stringify({on:me,val:_e}))}catch{}}function ef(e){return me[e]!==!1?_e[e]:je[e].off}const Cs=[];function tf(e){return Cs.push(e),()=>{const t=Cs.indexOf(e);t>=0&&Cs.splice(t,1)}}const Ns=[];function ne(){for(const e of Ns)e()}function lu(e){return Ns.push(e),()=>{const t=Ns.indexOf(e);t>=0&&Ns.splice(t,1)}}function tn(){for(const e of Cs)e();ne()}function ia(e){const t=je[e],n=_e[e];return t.unit==="kmh"?`${Math.round(n)} км/ч`:n.toFixed(t.decimals)}const Lc=[0,1,2,3,4],du=["линейный","филмик","ACES","нейтральный","без тонмаппинга"],st={exposure:{label:"Экспозиция кадра",def:1,min:.5,max:10,decimals:1},key:{label:"Яркость солнца",def:3,min:0,max:10,decimals:2},fill:{label:"Заполняющий свет",def:.3,min:0,max:15,decimals:2},rimLeft:{label:"Контровой слева",def:.5,min:0,max:15,decimals:2},rimRight:{label:"Контровой справа",def:.5,min:0,max:15,decimals:2},spot:{label:"Верхний софтбокс",def:2,min:0,max:15,decimals:2},fog:{label:"Туман задника",def:.0035,min:0,max:.05,decimals:4},gamma:{label:"Гамма-коррекция (sRGB)",def:1,min:0,max:1,decimals:0,options:[0,1]},gammaStrength:{label:"Сила гаммы",def:.5,min:.5,max:3,decimals:2},toneMapping:{label:"Тонмаппинг",def:2,min:0,max:4,decimals:0,options:Lc},sunElevation:{label:"Высота солнца",def:35,min:-10,max:90,decimals:0},sunAzimuth:{label:"Азимут солнца",def:47,min:0,max:360,decimals:0},turbidity:{label:"Мутность неба",def:1,min:1,max:10,decimals:2},rayleigh:{label:"Рэлеевское рассеяние",def:2.2,min:0,max:5,decimals:2},mieCoefficient:{label:"Ми-рассеяние",def:.005,min:0,max:.05,decimals:3},mieDirectionalG:{label:"Анизотропия Ми",def:.8,min:0,max:.99,decimals:2},skyLuminance:{label:"Яркость неба",def:.2,min:0,max:5,decimals:2}},nn=Object.keys(st),ti="blendars.lighting.v1",ke={};uu();pu();function uu(){for(const e of nn)ke[e]=st[e].def}function pu(){try{const e=localStorage.getItem(ti);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of nn){const i=st[o],c=s?.[o];typeof c=="number"&&Number.isFinite(c)&&(ke[o]=Math.min(i.max,Math.max(i.min,c)))}}catch{}}function Rs(){try{localStorage.setItem(ti,JSON.stringify({val:ke}))}catch{}}function mu(e){return ke[e]}function nf(){return 2**(mu("gammaStrength")-1)}const As=[];function sf(e){return As.push(e),()=>{const t=As.indexOf(e);t>=0&&As.splice(t,1)}}function Ls(){for(const e of As)e();ne()}function xr(e){const t=st[e];if(t.options){const n=t.options.indexOf(ke[e]);return n>=0?n:0}return Math.round((ke[e]-t.min)/(t.max-t.min)*100)}function fu(e,t){const n=st[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function ra(e){const t=st[e],n=ke[e];return t.options&&t.options.length===2&&t.options[1]===1?n>=1?"вкл":"выкл":e==="toneMapping"?du[Lc.indexOf(n)]??n.toFixed(t.decimals):n.toFixed(t.decimals)}const hu=[512,1024,2048,4096],Ge={cascades:{label:"Каскадов",def:1,min:1,max:4,decimals:0,options:[1,2,3,4]},distribution:{label:"Раскладка каскадов",def:.7,min:0,max:1,decimals:2},blend:{label:"Бесшовность каскадов",def:.12,min:0,max:.3,decimals:2},distance:{label:"Дальность теней",def:320,min:50,max:500,decimals:0},resolution:{label:"Разрешение атласа",def:4096,min:0,max:3,decimals:0,options:hu},bias:{label:"Смещение тени",def:0,min:0,max:1,decimals:2},normalBias:{label:"Смещение по нормали",def:0,min:0,max:.5,decimals:2}},wt=Object.keys(Ge),ni="blendars.shadows.v1",de={};bu();gu();function bu(){for(const e of wt)de[e]=Ge[e].def}function gu(){try{const e=localStorage.getItem(ni);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of wt){const i=Ge[o],c=s?.[o];if(!(typeof c!="number"||!Number.isFinite(c))){if(i.options){const l=i.options[c]===c?c:i.options.indexOf(c);l>=0&&l<i.options.length&&(de[o]=Number(i.options[l]));continue}de[o]=Math.min(i.max,Math.max(i.min,c))}}}catch{}}function sn(){try{localStorage.setItem(ni,JSON.stringify({val:de}))}catch{}}function of(e){return de[e]}const Ts=[];function af(e){return Ts.push(e),()=>{const t=Ts.indexOf(e);t>=0&&Ts.splice(t,1)}}function Un(){for(const e of Ts)e();ne()}function ca(e,t){const n=Ge[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function yu(e,t){const n=Ge[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function la(e){const t=Ge[e];return e==="distance"?`${Math.round(de[e])} м`:de[e].toFixed(t.decimals)}const ot={bloom:{label:"Ореол (bloom)",def:.1,min:0,max:.1,decimals:3},bloomBlur:{label:"Мягкость ореола",def:8,min:1,max:16,decimals:0,options:[1,2,4,8,16]},bloomThreshold:{label:"Порог ореола",def:.6,min:0,max:2,decimals:2},vignette:{label:"Виньетка",def:0,min:0,max:1,decimals:2},vignetteInner:{label:"Виньетка: начало",def:0,min:0,max:1,decimals:2},vignetteOuter:{label:"Виньетка: край",def:.5,min:.5,max:2,decimals:2},vignetteCurvature:{label:"Виньетка: кромка",def:.2,min:.2,max:1,decimals:2},taa:{label:"Временное сглаживание",def:0,min:0,max:1,decimals:0,options:[0,1]},taaJitter:{label:"Сглаживание: джиттер",def:1,min:0,max:1,decimals:2},dof:{label:"Глубина резкости",def:0,min:0,max:1,decimals:0,options:[0,1]},dofFocus:{label:"Фокус (м)",def:1,min:1,max:60,decimals:1},dofRange:{label:"Зона фокуса (м)",def:40,min:1,max:40,decimals:1},dofRadius:{label:"Сила размытия",def:1,min:1,max:8,decimals:1},dofNear:{label:"Размывать передний план",def:1,min:0,max:1,decimals:0,options:[0,1]},grading:{label:"Цветокоррекция",def:1,min:0,max:1,decimals:0,options:[0,1]},brightness:{label:"Яркость",def:1,min:.5,max:1.5,decimals:2},contrast:{label:"Контраст",def:1,min:.5,max:1.5,decimals:2},saturation:{label:"Насыщенность",def:1,min:0,max:2,decimals:2},fringing:{label:"Аберрация",def:5,min:0,max:100,decimals:0},sharpness:{label:"Резкость",def:0,min:0,max:1,decimals:2}},Et=Object.keys(ot),si="blendars.postfx.v1",oi="blendars.postfx.on",te={},Tc=!0;let at=Tc;_u();xu();function _u(){for(const e of Et)te[e]=ot[e].def;at=Tc}function xu(){try{const e=localStorage.getItem(si);if(e){const n=JSON.parse(e);if(n&&typeof n=="object"){const s=n,o=typeof s.val=="object"&&s.val!==null?s.val:null;for(const i of Et){const c=ot[i],m=o?.[i];typeof m=="number"&&Number.isFinite(m)&&(te[i]=Math.min(c.max,Math.max(c.min,m)))}}}const t=localStorage.getItem(oi);t!==null&&(at=t!=="0")}catch{}}function tt(){try{localStorage.setItem(si,JSON.stringify({val:te})),localStorage.setItem(oi,at?"1":"0")}catch{}}function da(e){return te[e]}function xs(){return at}function ua(e){at!==e&&(at=e,tt(),vt())}const ai="blendars.hud.v1";let on=!0,Ct=1280;const Se=[],Fa=["fps","cpu","draw","vram"],vu={fps:"Частота кадра (FPS и мс)",cpu:"Загрузка CPU (обновление / рендер / физика)",draw:"Вызовы отрисовки и шейдеры",vram:"Видеопамять и разрешение"};let an={fps:!0,cpu:!1,draw:!0,vram:!0};function wu(){try{const e=localStorage.getItem(ai);if(!e)return;const t=JSON.parse(e);if(t&&typeof t=="object"){const n=t.on;if(n&&typeof n=="object"){const s=n.stats;typeof s=="number"&&(on=s!==0);const o=n.record;(o===1280||o===1920||o==="window")&&(Ct=o);const i=n.touch;typeof i=="number"&&(Vn=i!==0)}}}catch{}}const ii="blendars.stats.v1";function Eu(){try{const e=localStorage.getItem(ii);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s={...an};for(const o of Fa){const i=n[o];typeof i=="boolean"&&(s[o]=i)}an=s}catch{}}function Su(){try{localStorage.setItem(ii,JSON.stringify(an))}catch{}}function ri(){try{localStorage.setItem(ai,JSON.stringify({on:{stats:on?1:0,record:Ct,touch:Vn?1:0}}))}catch{}}function Bs(){return on}function Pc(e){if(on!==e){on=e,ri();for(const t of Se)t();ne()}}function Ie(e){return an[e]}function ku(e){return vu[e]}function Cu(e,t){if(an[e]!==t){an[e]=t,Su();for(const n of Se)n();ne()}}function Nu(){return Ct}function Ia(e){if(!(e!==1280&&e!==1920&&e!=="window")&&Ct!==e){Ct=e,ri();for(const t of Se)t();ne()}}function Ru(e){const t=Ct==="window"?e:Ct;return!Number.isFinite(t)||t<=0?1280:Math.round(t)}function Mc(e){return Se.push(e),()=>{const t=Se.indexOf(e);t>=0&&Se.splice(t,1)}}let Au="full";function Lu(){return Au}let Vn=!0;function pa(){return Vn}function vr(e){if(Vn!==e){Vn=e,ri();for(const t of Se)t();ne()}}const Fc="blendars.touch.v1";let Wn=1,Kn=1,Yn="split",qn=!1;const Ic=["up","down","left","right","hand","gas","reset"],Tu={up:"▲ крестовины (газ или тормоз)",down:"▼ крестовины (газ или тормоз)",left:"◀ руль влево",right:"▶ руль вправо",hand:"Стоп (ручник)",gas:"Газ в правой колонке",reset:"Сброс на месте"},$c={dx:0,dy:0,scale:1,opacity:1,label:""};let Ot={};function Bc(e,t){const n=(s,o,i,c)=>typeof s=="number"&&Number.isFinite(s)?Math.min(Math.max(s,i),c):o;return{dx:n(e.dx,t.dx,-160,160),dy:n(e.dy,t.dy,-160,160),scale:n(e.scale,t.scale,.5,2),opacity:n(e.opacity,t.opacity,.2,1),label:typeof e.label=="string"?e.label.slice(0,8):t.label}}function Dc(e){return{...$c,...Ot[e]??{}}}function wr(e,t){const n=Bc(t,Dc(e));Ot={...Ot,[e]:n},bn();for(const s of Se)s();ne()}function Pu(e){const t={...Ot};delete t[e],Ot=t,bn();for(const n of Se)n();ne()}function Mu(){try{const e=localStorage.getItem(Fc);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t;if(typeof n.scale=="number"&&n.scale>=.6&&n.scale<=2&&(Wn=n.scale),typeof n.opacity=="number"&&n.opacity>=.25&&n.opacity<=1&&(Kn=n.opacity),(n.layout==="split"||n.layout==="left"||n.layout==="right")&&(Yn=n.layout),typeof n.swap=="boolean"&&(qn=n.swap),n.buttons&&typeof n.buttons=="object"){const s=n.buttons;for(const o of Ic){const i=s[o];!i||typeof i!="object"||(Ot[o]=Bc(i,$c))}}}catch{}}function bn(){try{localStorage.setItem(Fc,JSON.stringify({scale:Wn,opacity:Kn,layout:Yn,swap:qn,buttons:Ot}))}catch{}}function ma(){return Wn}function Er(e){const t=Math.min(Math.max(e,.6),2);if(Wn!==t){Wn=t,bn();for(const n of Se)n();ne()}}function fa(){return Kn}function Sr(e){const t=Math.min(Math.max(e,.25),1);if(Kn!==t){Kn=t,bn();for(const n of Se)n();ne()}}function kr(){return Yn}function Cr(e){if(Yn!==e){Yn=e,bn();for(const t of Se)t();ne()}}function Nr(){return qn}function Rr(e){if(qn!==e){qn=e,bn();for(const t of Se)t();ne()}}wu();Eu();Mu();const Ps=[];function rf(e){return Ps.push(e),()=>{const t=Ps.indexOf(e);t>=0&&Ps.splice(t,1)}}function vt(){for(const e of Ps)e();ne()}function Ar(e,t){const n=ot[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function Fu(e,t){const n=ot[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function ha(e){const t=te[e],n=ot[e];return n.options&&n.options.length===2&&n.options[1]===1?t>=1?"вкл":"выкл":t.toFixed(n.decimals)}Iu();cu();function Iu(){try{const e=localStorage.getItem(Qa)??localStorage.getItem(Za);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:n,o=typeof n.vol=="object"&&n.vol!==null?n.vol:null;for(const i of Object.keys(Ac)){const c=s[i];typeof c=="boolean"&&(De[i]=c);const m=o?.[i];typeof m=="number"&&Number.isFinite(m)&&(Le[i]=Math.min(1,Math.max(0,m)))}}catch{}}function Ds(){try{localStorage.setItem(Qa,JSON.stringify({on:De,vol:Le})),localStorage.removeItem(Za)}catch{}}function $u(e){return De[e]?Le[e]:0}function cf(e){return Le[e]}function lf(e,t){const n=Math.min(1,Math.max(0,t));Le[e]!==n&&(Le[e]=n,Ds(),ne())}const Bu=`@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JSON.stringify(Gr)}) format('truetype');
}
/* Окно занимает прямоугольник панели окон (70% ширины под полосой), а не весь
   экран: переменные публикует ui/window-host.ts по геометрии панели, поэтому
   окно совпадает с местом, которое отвела раскладка меню, при любом повороте
   телефона. Раньше было inset: 0 — окно закрывало собой всю игру вместе с
   машиной и полосой, и панель кнопок под ним была недоступна. */
.settings {
    position: fixed;
    left: var(--win-left, 0px);
    top: var(--win-top, 0px);
    width: var(--win-width, 100vw);
    height: var(--win-height, 100vh);
    /* 50: выше тач-панелей (14), HUD (15), тумблера рендера (20) и меню (10),
       ниже только splash загрузки (100). */
    z-index: 50;
    /* Плотный фон без размытия: окно открывается прямо над живым канвасом (в
       сцене), а backdrop-filter такой площади заставляет компоновщик
       пересчитывать размытие каждый кадр — на телефоне это видно как просадка.
       Тот же приём уже применён к полосе меню и панели окон. */
    background: #1d2021f7;
    border: 1px solid #ebdbb233;
    border-radius: max(0.375rem, 0.35em);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    overflow: hidden;
    touch-action: manipulation;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    color: #ebdbb2;
}
/* Авторский display:flex выше UA-[hidden] по приоритету (оба селектора —
   один класс, но авторский стиль всегда бьёт UA) — прячем явно. */
.settings[hidden] { display: none; }
/* Панель занимает всю область окна: список настроек получает всю доступную
   высоту под свой скролл. Раскладка — сетка: заголовок сверху на всю ширину,
   слева вертикальные вкладки, справа содержимое. Шапка и вкладки не сжимаются:
   при нехватке высоты ужимается скролл содержимого. */
.settings__panel {
    background: transparent;
    padding: 0.875rem 1.125rem;
    width: 100%;
    height: 100%;
    max-height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    display: grid;
    grid-template-columns: max(11rem, 180px) minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);
    grid-template-areas: "title title" "tabs scroll";
    gap: 0 max(1rem, 16px);
}
.settings__scroll {
    grid-area: scroll;
    min-height: 0;
    overflow: auto;
    /* Скроллбар не должен наезжать на текст справа. */
    scrollbar-gutter: stable;
}
.settings__title {
    grid-area: title;
    margin: 0 0 6px;
    font-family: 'Lilita One', 'Arial Black', system-ui, sans-serif;
    /* 700 на файле веса 400 — синтетическое утолщение браузером. */
    font-weight: 700;
    font-size: 26px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}
.settings__hint {
    margin: 0 0 14px;
    color: #a89984;
    font-size: 13px;
    line-height: 1.45;
}
/* Вкладки вертикально слева: ЗВУК / ФИЗИКА / ОСВЕЩЕНИЕ / ТЕНИ / POST FX / ….
   Девять вкладок в строку не влезали и переносились кашей; в колонке каждая
   на своей строке, активная подсвечена левой кромкой. На узких экранах (см.
   media ниже) возвращаются в горизонтальный ряд сверху. */
.settings__tabs {
    grid-area: tabs;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 4px;
    margin: 0;
    padding-right: max(0.75rem, 12px);
    border-right: 1px solid #3c3836;
    min-height: 0;
    overflow: auto;
}
.settings__tab {
    appearance: none;
    border: none;
    border-left: 1px solid transparent;
    background: none;
    color: #a89984;
    font: inherit;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: left;
    padding: max(0.5rem, 8px) max(0.75rem, 12px);
    cursor: pointer;
    touch-action: manipulation;
    white-space: normal;
}
.settings__tab:hover { color: #ebdbb2; }
.settings__tab--on { color: #ebdbb2; border-left-color: #fe8019; }
.settings__tab:focus-visible { outline: 2px solid #ebdbb2; outline-offset: 2px; }
.settings__tab:active { color: #d65d0e; }
/* Горизонтальные вкладки физики (в блоке настроек физики) */
.physics-tabs {
    display: flex;
    gap: 4px;
    margin: 0 0 10px;
    border-bottom: 1px solid #3c3836;
}
/* Блок под-вкладки: скрывается атрибутом hidden (display у блока не задан). */
.settings__block[hidden] { display: none; }
.physics-tab {
    appearance: none;
    border: none;
    border-bottom: 2px solid transparent;
    background: none;
    color: #a89984;
    font: inherit;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 6px 12px;
    cursor: pointer;
    touch-action: manipulation;
    white-space: nowrap;
}
.physics-tab:hover { color: #ebdbb2; }
.physics-tab--on { color: #ebdbb2; border-bottom-color: #fe8019; }
.physics-tab:focus-visible { outline: 2px solid #ebdbb2; outline-offset: 2px; }
.physics-tab:active { color: #d65d0e; }
@media (max-width: 640px) {
    /* Узкий экран: колонке вкладок негде жить — ряд сверху, как раньше. */
    .settings__panel {
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: auto auto minmax(0, 1fr);
        grid-template-areas: "title" "tabs" "scroll";
    }
    .settings__tabs {
        flex-direction: row;
        flex-wrap: wrap;
        border-right: none;
        border-bottom: 1px solid #3c3836;
        padding-right: 0;
        padding-bottom: max(0.5rem, 8px);
        overflow: visible;
    }
    .settings__tab {
        border-left: none;
        border-bottom: 2px solid transparent;
        white-space: nowrap;
    }
    .settings__tab--on { border-bottom-color: #fe8019; border-left-color: transparent; }
}
/* Панель вкладки: скрывается атрибутом hidden (display у блока не задан). */
.settings__pane[hidden] { display: none; }
/* Строка: сверху «галочка + название», снизу ползунок громкости/значения.
   Сама строка не кликабельна — иначе тап по ползунку переключал бы чек. */
.settings__row {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 11px 8px;
    border-top: 1px solid #3c3836;
    font-size: 15px;
}
.settings__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    cursor: pointer;
    user-select: none;
}
/* Пояснение параметра под подписью: мельче и тише подписи, но читаемо —
   это справка, а не второй заголовок. Отрицательный отступ сверху съедает
   половину зазора строки, иначе описание отрывается от своей подписи. */
.settings__rowdesc {
    margin: -3px 0 0;
    max-width: 62ch;
    color: #a89984;
    font-size: 12.5px;
    line-height: 1.35;
}
.settings__head input[type='checkbox'],
.settings__check input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    width: max(3rem, 48px);
    height: max(1.625rem, 26px);
    min-width: 48px;
    margin: 0;
    padding: 0;
    flex: none;
    cursor: pointer;
    border: 1px solid #665c54;
    border-radius: 999px;
    background: #504945;
    position: relative;
    transition: background 160ms ease, border-color 160ms ease;
}
.settings__head input[type='checkbox']::after,
.settings__check input[type='checkbox']::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0.2rem;
    transform: translate(0, -50%);
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    background: #ebdbb2;
    transition: transform 160ms ease;
}
.settings__head input[type='checkbox']:checked,
.settings__check input[type='checkbox']:checked {
    /* Включённое состояние — зелёный gruvbox (#b8bb26), а не оранжевый:
       оранжевый в проекте означает акцент и «что-то нажато/в фокусе», а
       переключатель со значением «да» читается как включённый индикатор.
       Раньше он был тем же оранжевым, и вкладка с девятью тумблерами
       выглядела как сплошное пятно акцента без разницы между состояниями. */
    background: #b8bb26;
    border-color: #b8bb26;
}
.settings__head input[type='checkbox']:checked::after,
.settings__check input[type='checkbox']:checked::after {
    transform: translate(1.3rem, -50%);
    /* Ручка темнеет на зелёной дорожке: светлая #ebdbb2 дала бы контраст 1.45:1
       с #b8bb26 и тонула бы в ней, тёмный bg0 — 8.2:1. Заодно читается как
       «переключатель зажжён». */
    background: #282828;
}
.settings__head input:focus-visible,
.settings__check input:focus-visible {
    outline: max(2px, 0.12em) solid #ebdbb2;
    outline-offset: 3px;
}
.settings__vol {
    display: flex;
    align-items: center;
    gap: 12px;
}
/* Ряд из независимых чекбоксов (состав статистики). Обычная .settings__row
   рассчитана на «заголовок + ползунок», поэтому здесь своя раскладка: список
   подписей с галками, каждая на своей строке, — иначе на телефоне три
   длинных подписи в линию не влезают. */
/* Гнездо внешнего переключателя (WebGL2/WebGPU): пустое место с отступом,
   чтобы блок не прилипал к следующей строке. */
.settings__backend {
    display: flex;
    justify-content: flex-start;
    padding: 4px 0 10px;
}
/* Гнездо кнопки записи во вкладке «Запись»: тот же отступ снизу. */
.settings__recordslot { padding: 4px 0 10px; }
.settings__row--stack { gap: 10px; }
.settings__check {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    line-height: 1.35;
    color: #a89984;
    cursor: pointer;
}
/* Выключенный параметр: ползунок остаётся рабочим (значение запоминается),
   но гаснет — состояние читается без чтения галки. */
.settings__vol--off { opacity: 0.45; }
.settings__vol input[type='range'] {
    flex: 1;
    min-width: 0;
    height: 20px;
    /* Gruvbox blue — приглушённый синий вместо оранжевого: ползунок рабочий
       инструмент, а не акцент интерфейса. */
    accent-color: #458588;
    cursor: pointer;
}
.settings__vol input[type='range']:focus-visible {
    outline: 2px solid #ebdbb2;
    outline-offset: 3px;
}
/* Тумблер: светлая ручка и тёмная рамка, иначе на тёмной дорожке gruvbox
   круг сливается с ней и теряется граница хвата. */
.settings__vol input[type='range']::-webkit-slider-thumb {
    box-shadow: 0 0 0 2px #1d2021;
}
.settings__vol input[type='range']::-moz-range-thumb {
    box-shadow: 0 0 0 2px #1d2021;
}
.settings__pct {
    min-width: 44px;
    text-align: right;
    color: #a89984;
    font-size: 13px;
    font-variant-numeric: tabular-nums;
}
/* Значения физики шире процентов («0.020», «100 км/ч»). */
.settings__pct--val { min-width: 64px; }
/* Кнопка сброса одного параметра (↺). Рамка по умолчанию светлая,
   hover — оранжевая, pressed — вдавленная тёмная. */
.settings__reset {
    appearance: none;
    width: max(1.625rem, 26px);
    height: max(1.625rem, 26px);
    min-width: 26px;
    min-height: 26px;
    flex: none;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    background: none;
    color: #a89984;
    font: inherit;
    font-size: 15px;
    line-height: 1;
    cursor: pointer;
    touch-action: manipulation;
}
.settings__reset:hover { border-color: #fe8019; background: #3c3836; color: #fe8019; }
.settings__reset:active { border-color: #d65d0e; background: #1d2021; color: #d65d0e; transform: translateY(1px); }
.settings__reset:focus-visible { outline: 2px solid #ebdbb2; outline-offset: 2px; }
/* «Сбросить все настройки физики» — внизу вкладки физики. */
.settings__resetall {
    appearance: none;
    margin-top: 14px;
    width: 100%;
    padding: 9px 12px;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    background: none;
    color: #a89984;
    font: inherit;
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
}
.settings__resetall:hover { border-color: #fe8019; background: #3c3836; color: #fe8019; }
.settings__resetall:active { border-color: #d65d0e; background: #1d2021; color: #d65d0e; transform: translateY(1px); }
.settings__resetall:focus-visible { outline: 2px solid #ebdbb2; outline-offset: 3px; }
/* --- Пресеты настроек ------------------------------------------------- */
/* Имя пресета: правится на месте, поэтому это же правило и для input. */
.settings__presetname {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.settings__presetnameinput {
    width: 100%;
    min-width: 0;
    padding: 3px 6px;
    border: 1px solid #7b5cff;
    border-radius: 4px;
    background: #1d2021;
    color: inherit;
    font: inherit;
    font-size: 14px;
}
.settings__preset {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border: 1px solid #3c3836;
    border-radius: 6px;
    background: #282828e6;
}
/* Активный пресет подсвечен рамкой акцента и фоном: он применяется при старте.
   Одной тонкой рамки мало — в списке из десятка строк её не видно. */
.settings__preset--active {
    border-color: #fe8019;
    background: #32302f;
}
/* Плашка «Активен» на активной строке: состояние читается словом, а не
   оттенком рамки — так видно и на слабом экране, и боковым зрением. */
.settings__presetbadge {
    flex: none;
    align-self: center;
    padding: 3px 9px;
    border-radius: 999px;
    background: #fe8019;
    color: #1d2021;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    white-space: nowrap;
}
.settings__presetinfo {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    gap: 2px;
}
.settings__presetmeta { font-size: 11px; opacity: 0.6; }
.settings__presetbtn {
    appearance: none;
    flex: none;
    min-width: 30px;
    min-height: 28px;
    height: 28px;
    padding: 0 8px;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    background: none;
    color: #a89984;
    font: inherit;
    font-size: 12px;
    line-height: 1;
    cursor: pointer;
    touch-action: manipulation;
}
.settings__presetbtn:hover { border-color: #fe8019; background: #3c3836; color: #fe8019; }
.settings__presetbtn:active { border-color: #d65d0e; background: #1d2021; color: #d65d0e; transform: translateY(1px); }
.settings__presetbtn:focus-visible { outline: 2px solid #ebdbb2; outline-offset: 2px; }
.settings__presetbtn[disabled] { opacity: 0.4; cursor: default; }
.settings__presetbtn--danger:hover { border-color: #fb4934; color: #fb4934; }
/* Выбранное значение из нескольких (плечо камеры): тот же акцент, что у
   активной вкладки — оранжевая рамка и текст вместо тумблера. */
.settings__presetbtn--on { border-color: #fe8019; color: #fe8019; }
/* Ряд кнопок «Слева / Центр / Справа» на вкладке камеры: во всю ширину,
   как ползунок строки выше. */
.settings__shoulder {
    display: flex;
    gap: 8px;
    padding: 4px 8px 10px;
}
.settings__shoulder > .settings__presetbtn { flex: 1; }
.settings__presetnamefield {
    display: flex;
    gap: 8px;
    align-items: center;
}
.settings__presetnamefield > input {
    flex: 1;
    min-width: 0;
    padding: 8px 10px;
    border: 1px solid #3c3836;
    border-radius: 6px;
    background: #1d2021;
    color: inherit;
    font: inherit;
    font-size: 14px;
}
.settings__presetnamefield > input:focus-visible { outline: 2px solid #fe8019; outline-offset: 1px; }
.settings__presets { display: flex; flex-direction: column; gap: 8px; }
.settings__presetempty { font-size: 13px; opacity: 0.7; }
/* Секция списка пресетов: заголовок («Встроенные машины», «Свои пресеты»)
   отделён от списка и от соседней секции — раньше заголовок был тем же
   классом, что и «список пуст», и сливался с содержимым. */
.settings__presetsection { margin: 0 0 14px; }
.settings__presettitle {
    margin: 0 0 6px;
    color: #a89984;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}
.settings__presetnamefield { margin-bottom: 10px; }
.settings__status {
    margin-top: 12px;
    font-size: 12px;
    line-height: 1.4;
    opacity: 0.75;
    min-height: 1.4em;
}
`;function St(){return{version:1,physics:{on:{...me},val:{..._e}},lighting:{val:{...ke}},shadows:{val:{...de}},postfx:{on:at,val:{...te}},sound:{on:{...De},vol:{...Le}},hud:{on:{stats:on,record:Ct}},graphics:{val:{scale:rn,fps:cn,msaa:Nt}},recording:{val:{fps:ln,quality:dn,keyFrame:un,sound:pn}}}}function ba(){return{on:{...me},val:{..._e}}}function Du(){const e={},t={};for(const n of Oe)e[n]=!0,t[n]=je[n].def;return{on:e,val:t}}let $a=!1;function Ou(){return $a}function Bt(e){const t=[];if(!e||typeof e!="object")return{applied:t};$a=!0;try{return ju(e,t)}finally{$a=!1}}function ga(e){let t=!1;for(const n of Object.keys(e.on))if(Oe.includes(n)){const s=e.on[n];s!==void 0&&(me[n]=s,t=!0)}for(const n of Object.keys(e.val))if(Oe.includes(n)){const s=je[n];if(s&&typeof s.min=="number"&&typeof s.max=="number"){const o=e.val[n];typeof o=="number"&&(_e[n]=Math.min(s.max,Math.max(s.min,o)),t=!0)}}t&&(en(),tn())}function Lr(e){if(!e||typeof e!="object")return null;const t=e,n={},s={};let o=!1;if(t.on&&typeof t.on=="object")for(const[i,c]of Object.entries(t.on))typeof c=="boolean"&&(n[i]=c,o=!0);if(t.val&&typeof t.val=="object")for(const[i,c]of Object.entries(t.val))typeof c=="number"&&Number.isFinite(c)&&(s[i]=c,o=!0);return o?{on:n,val:s}:null}function ju(e,t){const n=e,s=(S,L,d)=>typeof S=="number"&&Number.isFinite(S)?Math.min(d,Math.max(L,S)):null,o=S=>S&&typeof S=="object"?S:null,i=S=>S&&typeof S=="object"?S:null,c=S=>S&&typeof S=="object"?S:null,m=n.physics&&typeof n.physics=="object"?n.physics:null;if(m){const S=i(m.on),L=o(m.val);let d=!1;for(const C of Oe){const R=je[C];S&&typeof S[C]=="boolean"&&(me[C]=S[C],d=!0);const k=L?s(L[C],R.min,R.max):null;k!==null&&(_e[C]=k,d=!0)}d&&(en(),tn(),t.push("физика"))}const l=o(n.lighting&&typeof n.lighting=="object"?n.lighting.val:null);if(l){let S=!1;for(const L of nn){const d=st[L],C=s(l[L],d.min,d.max);C!==null&&(ke[L]=C,S=!0)}S&&(Rs(),Ls(),t.push("свет"))}const f=o(n.shadows&&typeof n.shadows=="object"?n.shadows.val:null);if(f){let S=!1;for(const L of wt){const d=Ge[L],C=f[L];if(d.options){const F=d.options[C]===C?C:d.options.indexOf(C);F>=0&&F<d.options.length&&(de[L]=Number(d.options[F]),S=!0);continue}const R=s(C,d.min,d.max);R!==null&&(de[L]=R,S=!0)}S&&(sn(),Un(),t.push("тени"))}const p=n.postfx&&typeof n.postfx=="object"?n.postfx:null;if(p){let S=!1;typeof p.on=="boolean"&&(at=p.on,S=!0);const L=o(p.val);if(L)for(const d of Et){const C=ot[d],R=L[d];if(C.options){const F=C.options.indexOf(R);F>=0&&F<C.options.length&&(te[d]=Number(C.options[F]),S=!0);continue}const k=s(R,C.min,C.max);k!==null&&(te[d]=k,S=!0)}S&&(tt(),vt(),t.push("Post FX"))}const h=n.sound&&typeof n.sound=="object"?n.sound:null;if(h){const S=i(h.on),L=o(h.vol);let d=!1;for(const C of Rc){S&&typeof S[C]=="boolean"&&(De[C]=S[C],d=!0);const R=L?s(L[C],0,1):null;R!==null&&(Le[C]=R,d=!0)}d&&(Ds(),t.push("звук"))}const v=n.hud&&typeof n.hud=="object"?n.hud:null,y=v&&typeof v.on=="object"?v.on:null;if(y&&typeof y.stats=="boolean"){Pc(y.stats);const S=y.record;(S===1280||S===1920||S==="window")&&Ia(S),t.push("интерфейс")}const b=c(n.graphics&&typeof n.graphics=="object"?n.graphics.val:null);if(b){let S=!1;const L=b.scale;(L===.5||L===.75||L===1)&&(di(L),S=!0);const d=b.fps;(d===0||d===30||d===60||d===120)&&(ui(d),S=!0),typeof b.msaa=="boolean"&&(Jn(b.msaa),S=!0),te.taa>0&&Nt&&(Jn(!1),S=!0),S&&(ns(),Ys(),t.push("графика"))}const E=c(n.recording&&typeof n.recording=="object"?n.recording.val:null);if(E){let S=!1;const L=E.fps;(L===24||L===30||L===60)&&(Kc(L),S=!0);const d=E.quality;(d==="low"||d==="medium"||d==="high")&&(Yc(d),S=!0);const C=E.keyFrame;(C===1||C===2||C===4)&&(qc(C),S=!0),typeof E.sound=="boolean"&&(Jc(E.sound),S=!0),S&&(ss(),os(),t.push("запись"))}return{applied:t}}const ci="blendars.graphics.v1";let rn=1,cn=0,Nt=!0;const li="blendars.gfx-preset.v1",ya={cascades:1,distribution:.7,blend:.12,distance:320,resolution:4096,bias:0,normalBias:0},_a={bloom:.1,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:1,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:1,brightness:1,contrast:1,saturation:1,fringing:5,sharpness:0},Gu={phone:{label:"Телефон",graphics:{scale:.5,fps:30,msaa:!1},shadows:ya,postfxOn:!0,postfx:_a},balanced:{label:"Оптимальный",graphics:{scale:.75,fps:60,msaa:!0},shadows:ya,postfxOn:!0,postfx:_a},ultra:{label:"Ультра",graphics:{scale:1,fps:0,msaa:!0},shadows:ya,postfxOn:!0,postfx:_a}};let ts="phone";function Hu(){const e=window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window,n=navigator.hardwareConcurrency??4,s=navigator.deviceMemory??4,o=Math.min(window.screen.width,window.screen.height)<768;return(e||t)&&(n<=4||s<=4||o)}function Uu(){return ts}function Oc(){try{localStorage.setItem(li,ts)}catch{}}function zu(){try{const e=localStorage.getItem(li);(e==="phone"||e==="balanced"||e==="ultra")&&(ts=e)}catch{}}function jc(e){const t=Gu[e];ts=e,Oc(),di(t.graphics.scale),ui(t.graphics.fps);const n=t.postfx.taa??0;Jn(n>0?!1:t.graphics.msaa);for(const s of wt)de[s]=t.shadows[s]??Ge[s].def;sn(),Un(),at=t.postfxOn;for(const s of Et){const o=t.postfx[s];typeof o=="number"&&(te[s]=o)}tt(),vt()}const Ms=[];function Vu(){try{const e=localStorage.getItem(ci);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.scale===.5||s.scale===.75||s.scale===1)&&(rn=s.scale),(s.fps===0||s.fps===30||s.fps===60||s.fps===120)&&(cn=s.fps),typeof s.msaa=="boolean"&&(Nt=s.msaa)}catch{}}function ns(){try{localStorage.setItem(ci,JSON.stringify({val:{scale:rn,fps:cn,msaa:Nt}}))}catch{}}function Ys(){for(const e of Ms)e();ne()}function Gc(){return rn}function Hc(){return cn}function Ft(){return Nt}const Wu=4;function df(){return Nt?Wu:1}function di(e){rn!==e&&(rn=e,ns(),Ys())}function ui(e){cn!==e&&(cn=e,ns(),Ys())}function Jn(e){Nt!==e&&(Nt=e,ns(),Ys())}function Uc(e){return Ms.push(e),()=>{const t=Ms.indexOf(e);t>=0&&Ms.splice(t,1)}}Vu();zu();const pi="blendars.recording.v1";let ln=30,dn="high",un=2,pn=!0;const Ku=[];function Yu(){try{const e=localStorage.getItem(pi);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.fps===24||s.fps===30||s.fps===60)&&(ln=s.fps),(s.quality==="low"||s.quality==="medium"||s.quality==="high")&&(dn=s.quality),(s.keyFrame===1||s.keyFrame===2||s.keyFrame===4)&&(un=s.keyFrame),typeof s.sound=="boolean"&&(pn=s.sound)}catch{}}function ss(){try{localStorage.setItem(pi,JSON.stringify({val:{fps:ln,quality:dn,keyFrame:un,sound:pn}}))}catch{}}function os(){for(const e of Ku)e();ne()}function zc(){return ln}function Vc(){return dn}function Wc(){return un}function Ba(){return pn}function Kc(e){ln!==e&&(ln=e,ss(),os())}function Yc(e){dn!==e&&(dn=e,ss(),os())}function qc(e){un!==e&&(un=e,ss(),os())}function Jc(e){pn!==e&&(pn=e,ss(),os())}Yu();function qu(){const e=Is(),t=new Set(e.map(s=>s.name)),n=[["По умолчанию","Телефон"],["Ультра","ПК"]];for(const[s,o]of n){const i=e.find(l=>l.name===s);if(!i)continue;const m=(s==="По умолчанию"?[o,"ПК"]:[o]).find(l=>!t.has(l));!m||!Kr(i.id,m)||(t.delete(s),t.add(m),console.info(`[settings] пресет «${s}» переименован в «${m}»`))}}function Ju(){const e=Ad();if(e){const p=Bt(e.data);p.applied.length>0&&console.info(`[settings] применён пресет «${e.name}»: ${p.applied.join(", ")}`);return}let t=!1;try{t=!!(localStorage.getItem(Qa)??localStorage.getItem(Za)??localStorage.getItem(ei)??localStorage.getItem(ti)??localStorage.getItem(ni)??localStorage.getItem(si)??localStorage.getItem(oi)??localStorage.getItem(ai)??localStorage.getItem(ii)??localStorage.getItem(ci)??localStorage.getItem(pi)??localStorage.getItem(li))}catch{t=!0}if(t)return;const n=Hu();ts=n?"phone":"ultra",Oc(),ns(),sn(),tt();const o=St();jc("balanced");const i=St();Bt(Cd);const c=St();Bt(kd);const m=St();Bt(o),jn("Телефон",c),jn("Оптимальный",i),jn("ПК",m);const l=n?"Телефон":"ПК",f=Is().find(p=>p.name===l);Ca(f?f.id:null),console.info(`[settings] сохранённых настроек нет — созданы пресеты «Телефон», «Оптимальный», «ПК» (активен «${l}»)`)}qu();Ju();function Xu(){const e=document.createElement("div");e.className="settings",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Настройки");const t=document.createElement("style");t.textContent=Bu;const n=document.createElement("div");n.className="settings__panel";const s=document.createElement("h2");s.className="settings__title",s.textContent="Настройки";const o=document.createElement("p");o.className="settings__hint",o.textContent="Галочка — эффект включён, ползунок — его громкость. Выбор сохраняется в браузере и действует сразу.",o.id="settings-hint",e.setAttribute("aria-describedby",o.id);const i=document.createElement("div");i.className="settings__tabs",i.setAttribute("role","tablist");const c=document.createElement("button");c.className="settings__tab settings__tab--on",c.type="button",c.textContent="Звук",c.setAttribute("role","tab"),c.setAttribute("aria-selected","true");const m=document.createElement("button");m.className="settings__tab",m.type="button",m.textContent="Физика",m.setAttribute("role","tab"),m.setAttribute("aria-selected","false");const l=document.createElement("button");l.className="settings__tab",l.type="button",l.textContent="Освещение",l.setAttribute("role","tab"),l.setAttribute("aria-selected","false");const f=document.createElement("button");f.className="settings__tab",f.type="button",f.textContent="Тени",f.setAttribute("role","tab"),f.setAttribute("aria-selected","false");const p=document.createElement("button");p.className="settings__tab",p.type="button",p.textContent="Post FX",p.setAttribute("role","tab"),p.setAttribute("aria-selected","false");const h=document.createElement("button");h.className="settings__tab",h.type="button",h.textContent="Интерфейс",h.setAttribute("role","tab"),h.setAttribute("aria-selected","false");const v=document.createElement("button");v.className="settings__tab",v.type="button",v.textContent="Управление",v.setAttribute("role","tab"),v.setAttribute("aria-selected","false");const y=document.createElement("button");y.className="settings__tab",y.type="button",y.textContent="Камера",y.setAttribute("role","tab"),y.setAttribute("aria-selected","false");const b=document.createElement("button");b.className="settings__tab",b.type="button",b.textContent="Все настройки",b.setAttribute("role","tab"),b.setAttribute("aria-selected","false");const E=document.createElement("button");E.className="settings__tab",E.type="button",E.textContent="Графика",E.setAttribute("role","tab"),E.setAttribute("aria-selected","false");const S=document.createElement("button");S.className="settings__tab",S.type="button",S.textContent="Запись",S.setAttribute("role","tab"),S.setAttribute("aria-selected","false"),i.append(c,m,l,f,p,h,v,y,E,S,b);const L=a=>{const r=[c,m,l,f,p,h,v,y,E,S,b];for(let u=0;u<r.length;u++){const w=r[u];if(!w)continue;const P=u===a;w.classList.toggle("settings__tab--on",P),w.setAttribute("aria-selected",String(P))}d.hidden=a!==0,k.hidden=a!==1,dt.hidden=a!==2,ut.hidden=a!==3,Ve.hidden=a!==4,Ke.hidden=a!==5,ce.hidden=a!==6,Gt.hidden=a!==7,Lt.hidden=a!==8,mt.hidden=a!==9,ft.hidden=a!==10,a===7&&Vt(),a===10&&Jt()};c.addEventListener("click",()=>L(0)),m.addEventListener("click",()=>L(1)),l.addEventListener("click",()=>L(2)),f.addEventListener("click",()=>L(3)),p.addEventListener("click",()=>L(4)),h.addEventListener("click",()=>L(5)),v.addEventListener("click",()=>L(6)),y.addEventListener("click",()=>L(7)),E.addEventListener("click",()=>L(8)),S.addEventListener("click",()=>L(9)),b.addEventListener("click",()=>L(10));const d=document.createElement("div");d.className="settings__pane",d.append(o);const C=document.createElement("div");C.className="settings__list";const R={};for(const[a,r]of Nc){const u=document.createElement("div");u.className="settings__row";const w=document.createElement("label");w.className="settings__head";const P=document.createElement("span");P.textContent=r;const A=document.createElement("input");A.type="checkbox",A.checked=De[a],w.append(P,A);const _=document.createElement("div");_.className="settings__vol",_.classList.toggle("settings__vol--off",!De[a]);const T=document.createElement("input");T.type="range",T.min="0",T.max="100",T.step="1",T.value=String(Math.round(Le[a]*100)),T.setAttribute("aria-label",`Громкость: ${r}`);const g=document.createElement("output");g.className="settings__pct",g.textContent=`${T.value}%`,T.addEventListener("input",()=>{Le[a]=Number(T.value)/100,g.textContent=`${T.value}%`,Ds(),ne()}),_.append(T,g),A.addEventListener("change",()=>{De[a]=A.checked,_.classList.toggle("settings__vol--off",!A.checked),Ds(),ne()}),R[a]=()=>{A.checked=De[a],_.classList.toggle("settings__vol--off",!De[a]),T.value=String(Math.round(Le[a]*100)),g.textContent=`${T.value}%`},u.append(w,_),C.append(u)}d.append(C);const k=document.createElement("div");k.className="settings__pane",k.hidden=!0;const F=document.createElement("div");F.className="physics-tabs";const D=document.createElement("button");D.className="physics-tab physics-tab--on",D.type="button",D.textContent="Тонкая настройка",D.setAttribute("role","tab"),D.setAttribute("aria-selected","true");const N=document.createElement("button");N.className="physics-tab",N.type="button",N.textContent="Пресеты физики",N.setAttribute("role","tab"),N.setAttribute("aria-selected","false"),F.append(D,N),k.append(F);const x=document.createElement("div");x.className="settings__block";const $=document.createElement("div");$.className="settings__block",k.append(x,$);const H=document.createElement("p");H.className="settings__hint",H.textContent="Галка включает тюнинг «против скольжения»; выключена — исходное поведение игры.",x.append(H);const j=document.createElement("div");j.className="settings__list",x.append(j);const U=a=>{const r=a==="fine";D.classList.toggle("physics-tab--on",r),N.classList.toggle("physics-tab--on",!r),D.setAttribute("aria-selected",String(r)),N.setAttribute("aria-selected",String(!r)),x.hidden=!r,$.hidden=r};D.addEventListener("click",()=>U("fine")),N.addEventListener("click",()=>U("presets"));let O=()=>{};const z=document.createElement("p");z.className="settings__status",z.setAttribute("role","status");const fe=a=>{const r=Du();let u=0;for(const w of Object.keys(a.val)){if(!(w in r.val))continue;const P=a.val[w];typeof P=="number"&&(r.val[w]=P,u++)}ga(r),Aa(null),O(),Y(),z.textContent=`Машина «${a.name}»: задано ${u} параметров, остальные — по умолчанию.`},xe=a=>{const r=Lr(a.data);if(!r){z.textContent=`В пресете «${a.name}» нет настроек физики.`;return}ga(r),Aa(a.id),O(),Y(),z.textContent=`Применён пресет «${a.name}».`},ue=(a,r)=>{const u=document.createElement("div");u.className="settings__presetsection";const w=document.createElement("p");return w.className="settings__presettitle",w.textContent=a,u.append(w,r),u},Ce=document.createElement("div");Ce.className="settings__presets";for(const a of Nd){const r=document.createElement("div");r.className="settings__preset";const u=document.createElement("div");u.className="settings__presetinfo";const w=document.createElement("span");w.className="settings__presetname",w.textContent=a.name;const P=document.createElement("span");P.className="settings__presetmeta",P.textContent=a.note,u.append(w,P);const A=document.createElement("button");A.className="settings__presetbtn",A.type="button",A.textContent="Применить",A.setAttribute("aria-label",`Применить пресет «${a.name}»`),A.addEventListener("click",()=>fe(a)),r.append(u,A),Ce.append(r)}const J=document.createElement("div");J.className="settings__presets";const se=a=>a>0?xt(new Date(a)):"дата неизвестна",Y=()=>{J.replaceChildren();const a=Na(),r=Ra();if(a.length===0){const u=document.createElement("p");u.className="settings__presetempty",u.textContent="Своих пресетов нет: настройте физику и нажмите «Сохранить».",J.append(u);return}for(const u of a){const w=document.createElement("div");w.className="settings__preset";const P=u.id===r;P&&w.classList.add("settings__preset--active");const A=document.createElement("div");A.className="settings__presetinfo";const _=document.createElement("span");_.className="settings__presetname",_.textContent=u.name;const T=document.createElement("span");T.className="settings__presetmeta",T.textContent=se(u.created),A.append(_,T);const g=document.createElement("button");g.className="settings__presetbtn",g.type="button",g.textContent="Применить",g.disabled=P,g.setAttribute("aria-label",`Применить пресет физики «${u.name}»`),g.addEventListener("click",()=>xe(u));const M=document.createElement("button");M.className="settings__presetbtn",M.type="button",M.textContent="✎",M.title="Переименовать",M.setAttribute("aria-label",`Переименовать пресет ${u.name}`),M.addEventListener("click",()=>{const B=document.createElement("input");B.className="settings__presetnameinput",B.type="text",B.value=u.name,_.replaceWith(B),B.focus(),B.select();const V=()=>{Xr(u.id,B.value),Y()};B.addEventListener("keydown",K=>{K.key==="Enter"&&V(),K.key==="Escape"&&(K.stopPropagation(),Y())}),B.addEventListener("blur",V)});const I=document.createElement("button");I.className="settings__presetbtn",I.type="button",I.textContent="↓",I.title="Экспорт в файл",I.setAttribute("aria-label",`Экспорт пресета ${u.name} в файл`),I.addEventListener("click",()=>nc(u));const G=document.createElement("button");G.className="settings__presetbtn settings__presetbtn--danger",G.type="button",G.textContent="✕",G.title="Удалить",G.setAttribute("aria-label",`Удалить пресет физики «${u.name}»`),G.addEventListener("click",()=>{window.confirm(`Удалить пресет физики «${u.name}»?`)&&(Zr(u.id),Y(),z.textContent=`Пресет «${u.name}» удалён.`)}),w.append(A,g,M,I,G),J.append(w)}},Q=document.createElement("div");Q.className="settings__presetnamefield";const X=document.createElement("input");X.type="text",X.value=xt(),X.placeholder="Название пресета",X.setAttribute("aria-label","Название нового пресета физики");const oe=document.createElement("button");oe.className="settings__presetbtn",oe.type="button",oe.textContent="Сохранить",oe.addEventListener("click",()=>{const a=Jr(X.value||xt(),ba());X.value=xt(),Y(),z.textContent=`Сохранён пресет «${a.name}».`}),Q.append(X,oe);const he=document.createElement("button");he.className="settings__resetall",he.type="button",he.textContent="Обновить активный пресет",he.addEventListener("click",()=>{const a=Ra();if(!a){z.textContent="Активного пресета нет — сохраните новый.";return}Qr(a,ba()),Y(),z.textContent="Текущие настройки записаны в активный пресет."});const re=document.createElement("button");re.className="settings__resetall",re.type="button",re.textContent="Импорт из файла";const be=document.createElement("input");be.type="file",be.accept="application/json,.json",be.hidden=!0,re.addEventListener("click",()=>be.click()),be.addEventListener("change",()=>{const a=be.files?.[0];be.value="",a&&(async()=>{try{const r=oc(await a.text());if(!r){z.textContent="Это не файл пресета физики.";return}const u=tc(r.items);Y(),z.textContent=u===0?"Такие пресеты уже есть.":`Импортировано пресетов: ${u}.`}catch(r){z.textContent=`Не удалось прочитать файл: ${r instanceof Error?r.message:"ошибка чтения"}`}})()});const Te=document.createElement("button");Te.className="settings__resetall",Te.type="button",Te.textContent="Экспорт всех в файл",Te.addEventListener("click",()=>{const a=Na();if(a.length===0){z.textContent="Экспортировать нечего: пресетов нет.";return}sc(a),z.textContent=`Выгружено пресетов: ${a.length}.`});const gn=document.createElement("button");gn.className="settings__resetall",gn.type="button",gn.textContent="Убрать все пресеты",gn.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты физики? Настройки останутся как есть.")&&(ec(),Y(),z.textContent="Пресеты удалены, текущие настройки не тронуты.")}),$.append(ue("Встроенные машины",Ce),ue("Свои пресеты",J),Q,he,re,Te,gn,be,z),Y(),U("fine");const as={};for(const a of Oe){const r=je[a],u=document.createElement("div");u.className="settings__row";const w=document.createElement("label");w.className="settings__head";const P=document.createElement("span");P.textContent=r.label;const A=document.createElement("input");A.type="checkbox",A.checked=me[a],w.append(P,A);const _=document.createElement("p");_.className="settings__rowdesc",_.textContent=r.desc;const T=document.createElement("div");T.className="settings__vol",T.classList.toggle("settings__vol--off",!me[a]);const g=document.createElement("input");g.type="range",g.min="0",g.max="100",g.step="1",g.value=String(Math.round((_e[a]-r.min)/(r.max-r.min)*100)),g.setAttribute("aria-label",`Значение: ${r.label}`);const M=document.createElement("output");M.className="settings__pct settings__pct--val",M.textContent=ia(a);const I=document.createElement("button");I.className="settings__reset",I.type="button",I.textContent="↺",I.title="Сбросить по умолчанию",I.setAttribute("aria-label",`Сбросить по умолчанию: ${r.label}`);const G=()=>{A.checked=me[a],T.classList.toggle("settings__vol--off",!me[a]),g.value=String(Math.round((_e[a]-r.min)/(r.max-r.min)*100)),M.textContent=ia(a)};as[a]=G,g.addEventListener("input",()=>{const B=r.min+(r.max-r.min)*(Number(g.value)/100);_e[a]=Number(B.toFixed(r.decimals)),M.textContent=ia(a),en(),tn()}),A.addEventListener("change",()=>{me[a]=A.checked,T.classList.toggle("settings__vol--off",!A.checked),en(),tn()}),I.addEventListener("click",()=>{me[a]=!0,_e[a]=r.def,G(),en(),tn()}),T.append(g,M,I),u.append(w,_,T),j.append(u)}O=()=>{for(const a of Oe)as[a]?.()};const yn=document.createElement("button");yn.className="settings__resetall",yn.type="button",yn.textContent="Сбросить все настройки физики",yn.addEventListener("click",()=>{for(const a of Oe)me[a]=!0,_e[a]=je[a].def,as[a]?.();en(),tn()}),k.append(yn);const Gt=document.createElement("div");Gt.className="settings__pane",Gt.hidden=!0;const qs=document.createElement("div");qs.className="physics-tabs";const He=document.createElement("button");He.className="physics-tab physics-tab--on",He.type="button",He.textContent="Ракурс",He.setAttribute("role","tab"),He.setAttribute("aria-selected","true");const Ue=document.createElement("button");Ue.className="physics-tab",Ue.type="button",Ue.textContent="Пресеты камеры",Ue.setAttribute("role","tab"),Ue.setAttribute("aria-selected","false"),qs.append(He,Ue),Gt.append(qs);const ze=document.createElement("div");ze.className="settings__block";const is=document.createElement("div");is.className="settings__block",Gt.append(ze,is);const rs=(a,r)=>{const u=hr[a];return`${a==="zoom"?r.toFixed(2):String(Number(r.toFixed(2)))}${u.unit}`},Js=document.createElement("p");Js.className="settings__hint",ze.append(Js);const Xs=document.createElement("div");Xs.className="settings__list";const gi={};for(const a of Ma){const r=hr[a],u=document.createElement("div");u.className="settings__row";const w=document.createElement("div");w.className="settings__head";const P=document.createElement("span");P.textContent=r.label,w.append(P);const A=document.createElement("div");A.className="settings__vol";const _=document.createElement("input");_.type="range",_.min=String(r.min),_.max=String(r.max),_.step=String(r.step),_.value=String(Ee[a]),_.setAttribute("aria-label",`Ракурс: ${r.label}`);const T=document.createElement("output");T.className="settings__pct settings__pct--val",T.textContent=rs(a,Ee[a]);const g=document.createElement("button");g.className="settings__reset",g.type="button",g.textContent="↺",g.title="Сбросить по умолчанию",g.setAttribute("aria-label",`Сбросить по умолчанию: ${r.label}`),_.addEventListener("input",()=>{const M=Number(_.value);Re()?.write({[a]:M}),T.textContent=rs(a,M)}),g.addEventListener("click",()=>{Re()?.write({[a]:Ee[a]}),_.value=String(Ee[a]),T.textContent=rs(a,Ee[a])}),gi[a]={slider:_,reset:g,out:T},A.append(_,T,g),u.append(w,A),Xs.append(u)}ze.append(Xs);const Qs=document.createElement("div");Qs.className="settings__shoulder";const Zs=[],yi=a=>{for(let r=0;r<aa.length;r++)Zs[r]?.classList.toggle("settings__presetbtn--on",aa[r]?.[0]===a)};for(const[a,r]of aa){const u=document.createElement("button");u.className="settings__presetbtn",u.type="button",u.textContent=r,u.setAttribute("aria-label",`Плечо камеры: ${r}`),u.addEventListener("click",()=>{Re()?.write({shoulder:a}),yi(a)}),Zs.push(u),Qs.append(u)}ze.append(Qs);const Ht=document.createElement("button");Ht.className="settings__resetall",Ht.type="button",Ht.textContent="Сбросить вид (C)",Ht.addEventListener("click",()=>{Re()?.reset(),Vt()}),ze.append(Ht);const Ut=document.createElement("button");Ut.className="settings__resetall",Ut.type="button",Ut.textContent="Сохранить пресет",Ut.addEventListener("click",()=>{const a=Re();if(!a){_n.textContent="Ракурс снимается со сцены: сначала войдите в заезд.";return}const r=Pa(Ne.value||$e(),{...a.read()});Ne.value=$e(),Pe(),cs("presets"),Z.textContent=`Сохранён пресет «${r.name}» — он активен.`}),ze.append(Ut);const _n=document.createElement("p");_n.className="settings__status",_n.setAttribute("role","status"),ze.append(_n);const Z=document.createElement("p");Z.className="settings__status",Z.setAttribute("role","status");const xn=document.createElement("div");xn.className="settings__presets";const _l=a=>a>0?$e(new Date(a)):"дата неизвестна",xl=a=>{const r=br(a.data);if(!r){Z.textContent=`В пресете «${a.name}» нет ракурса камеры.`;return}const u=Re();if(!u){Z.textContent="Камера живёт в сцене: войдите в заезд, чтобы применить ракурс.";return}u.write({...r}),fc(a.id),Vt(),Pe(),Z.textContent=`Применён ракурс «${a.name}».`},Pe=()=>{xn.replaceChildren();const a=La(),r=Ta();if(a.length===0){const u=document.createElement("p");u.className="settings__presetempty",u.textContent="Своих пресетов нет: войдите в заезд, выставьте ракурс и нажмите «Сохранить».",xn.append(u);return}for(const u of a){const w=document.createElement("div");w.className="settings__preset";const P=u.id===r;P&&w.classList.add("settings__preset--active");const A=document.createElement("div");A.className="settings__presetinfo";const _=document.createElement("span");_.className="settings__presetname",_.textContent=u.name;const T=document.createElement("span");T.className="settings__presetmeta",T.textContent=_l(u.created),A.append(_,T);const g=document.createElement("button");g.className="settings__presetbtn",g.type="button",g.textContent=P?"Активен":"Применить",g.disabled=P,g.setAttribute("aria-label",`Применить ракурс «${u.name}»`),g.addEventListener("click",()=>xl(u));const M=document.createElement("span");M.className="settings__presetbadge",M.textContent="Активен",M.title="Этот ракурс применяется кнопкой «Применить» по умолчанию";const I=document.createElement("button");I.className="settings__presetbtn",I.type="button",I.textContent="✎",I.title="Переименовать",I.setAttribute("aria-label",`Переименовать пресет ${u.name}`),I.addEventListener("click",()=>{const V=document.createElement("input");V.className="settings__presetnameinput",V.type="text",V.value=u.name,_.replaceWith(V),V.focus(),V.select();const K=()=>{hc(u.id,V.value),Pe()};V.addEventListener("keydown",W=>{W.key==="Enter"&&K(),W.key==="Escape"&&(W.stopPropagation(),Pe())}),V.addEventListener("blur",K)});const G=document.createElement("button");G.className="settings__presetbtn",G.type="button",G.textContent="↓",G.title="Экспорт в файл",G.setAttribute("aria-label",`Экспорт пресета ${u.name} в файл`),G.addEventListener("click",()=>xc(u));const B=document.createElement("button");B.className="settings__presetbtn settings__presetbtn--danger",B.type="button",B.textContent="✕",B.title="Удалить",B.setAttribute("aria-label",`Удалить пресет камеры «${u.name}»`),B.addEventListener("click",()=>{window.confirm(`Удалить пресет камеры «${u.name}»?`)&&(gc(u.id),Pe(),Z.textContent=`Пресет «${u.name}» удалён.`)}),w.append(A,g),P&&w.append(M),w.append(I,G,B),xn.append(w)}},eo=document.createElement("div");eo.className="settings__presetnamefield";const Ne=document.createElement("input");Ne.type="text",Ne.value=$e(),Ne.placeholder="Название пресета",Ne.setAttribute("aria-label","Название нового пресета камеры");const zt=document.createElement("button");zt.className="settings__presetbtn",zt.type="button",zt.textContent="Сохранить",zt.addEventListener("click",()=>{const a=Re();if(!a){Z.textContent="Ракурс снимается со сцены: сначала войдите в заезд.";return}const r=Pa(Ne.value||$e(),{...a.read()});Ne.value=$e(),Pe(),Z.textContent=`Сохранён пресет «${r.name}».`}),eo.append(Ne,zt);const vn=document.createElement("button");vn.className="settings__resetall",vn.type="button",vn.textContent="Обновить активный пресет",vn.addEventListener("click",()=>{const a=Ta();if(!a){Z.textContent="Активного пресета нет — сохраните новый.";return}const r=Re();if(!r){Z.textContent="Ракурс снимается со сцены: сначала войдите в заезд.";return}bc(a,{...r.read()}),Pe(),Z.textContent="Текущий ракурс записан в активный пресет."});const wn=document.createElement("button");wn.className="settings__resetall",wn.type="button",wn.textContent="Импорт из файла";const lt=document.createElement("input");lt.type="file",lt.accept="application/json,.json",lt.hidden=!0,wn.addEventListener("click",()=>lt.click()),lt.addEventListener("change",()=>{const a=lt.files?.[0];lt.value="",a&&(async()=>{try{const r=wc(await a.text());if(!r){Z.textContent="Это не файл пресетов камеры.";return}const u=_c(r.items);Pe(),Z.textContent=u===0?"Такие пресеты уже есть.":`Импортировано пресетов: ${u}.`}catch(r){Z.textContent=`Не удалось прочитать файл: ${r instanceof Error?r.message:"ошибка чтения"}`}})()});const En=document.createElement("button");En.className="settings__resetall",En.type="button",En.textContent="Экспорт всех в файл",En.addEventListener("click",()=>{const a=La();if(a.length===0){Z.textContent="Экспортировать нечего: пресетов нет.";return}vc(a),Z.textContent=`Выгружено пресетов: ${a.length}.`});const Sn=document.createElement("button");Sn.className="settings__resetall",Sn.type="button",Sn.textContent="Убрать все пресеты",Sn.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты камеры? Ракурс останется как есть.")&&(yc(),Pe(),Z.textContent="Пресеты удалены, текущий ракурс не тронут.")}),is.append(ue("Свои пресеты",xn),eo,vn,wn,En,Sn,lt,Z);const Vt=()=>{const a=Re(),r=a!==null,u=a?a.read():{...Ee};Js.textContent=r?"Ракурс меняется живьём. Тяните сцену мышью или пальцем (влево — экран влево), колесо или щипок — расстояние, C — сброс.":"Камера живёт в сцене машины: войдите в заезд, и здесь появятся её числа.",_n.textContent="";for(const w of Ma){const P=gi[w];if(!P)continue;const A=u[w];P.slider.value=String(A),P.slider.disabled=!r,P.reset.disabled=!r,P.out.textContent=rs(w,A)}for(const w of Zs)w.disabled=!r;yi(u.shoulder),Ht.disabled=!r,Ut.disabled=!r,zt.disabled=!r,Ne.disabled=!r},cs=a=>{const r=a==="view";He.classList.toggle("physics-tab--on",r),Ue.classList.toggle("physics-tab--on",!r),He.setAttribute("aria-selected",String(r)),Ue.setAttribute("aria-selected",String(!r)),ze.hidden=!r,is.hidden=r};He.addEventListener("click",()=>cs("view")),Ue.addEventListener("click",()=>cs("presets")),Pe(),cs("view"),Vt();const dt=document.createElement("div");dt.className="settings__pane",dt.hidden=!0;const to=document.createElement("p");to.className="settings__hint",to.textContent="Ползунок — уровень света (слева от центра — студия, к правому краю — ярче), ↺ — сброс строки. Свет главного экрана меняется сразу и запоминается. «Гамма-коррекция» — аппаратная (движок держит её как вкл/выкл), а «Сила гаммы» — непрерывный подъём полутонов поверх неё: 1 — как есть, каждый шаг вверх удваивает свет.",dt.append(to);const no=document.createElement("div");no.className="settings__list";const so={};for(const a of nn){const r=st[a],u=document.createElement("div");u.className="settings__row";const w=document.createElement("div");w.className="settings__head";const P=document.createElement("span");P.textContent=r.label,w.append(P);const A=document.createElement("div");A.className="settings__vol";const _=document.createElement("input");_.type="range",_.min="0",_.max="100",_.step="1",r.options&&(_.max=String(r.options.length-1)),_.value=String(xr(a)),_.setAttribute("aria-label",`Освещение: ${r.label}`);const T=document.createElement("output");T.className="settings__pct settings__pct--val",T.textContent=ra(a);const g=document.createElement("button");g.className="settings__reset",g.type="button",g.textContent="↺",g.title="Сбросить по умолчанию",g.setAttribute("aria-label",`Сбросить по умолчанию: ${r.label}`);const M=()=>{_.value=String(xr(a)),T.textContent=ra(a)};so[a]=M,_.addEventListener("input",()=>{ke[a]=fu(a,Number(_.value)),T.textContent=ra(a),Rs(),Ls()}),g.addEventListener("click",()=>{ke[a]=r.def,M(),Rs(),Ls()}),A.append(_,T,g),u.append(w,A),no.append(u)}dt.append(no);const kn=document.createElement("button");kn.className="settings__resetall",kn.type="button",kn.textContent="Сбросить все настройки освещения",kn.addEventListener("click",()=>{for(const a of nn)ke[a]=st[a].def,so[a]?.();Rs(),Ls()}),dt.append(kn);const ut=document.createElement("div");ut.className="settings__pane",ut.hidden=!0;const oo=document.createElement("p");oo.className="settings__hint",oo.textContent="Каскады разбивают дальность теней на несколько карт: у ближней детализация выше, поэтому машина отбрасывает резкую тень даже вдали. Один каскад — одна карта на всю дальность. Меняется сразу, даже в заезде.",ut.append(oo);const ao=document.createElement("div");ao.className="settings__list";const ls={};for(const a of wt){const r=Ge[a],u=document.createElement("div");u.className="settings__row";const w=document.createElement("div");w.className="settings__head";const P=document.createElement("span");P.textContent=r.label,w.append(P);const A=document.createElement("div");A.className="settings__vol";const _=document.createElement("input");_.type="range",_.min="0",_.max="100",_.step="1",r.options&&(_.max=String(r.options.length-1)),_.value=String(ca(a,de[a])),_.setAttribute("aria-label",`Тени: ${r.label}`);const T=document.createElement("output");T.className="settings__pct settings__pct--val",T.textContent=la(a);const g=document.createElement("button");g.className="settings__reset",g.type="button",g.textContent="↺",g.title="Сбросить по умолчанию",g.setAttribute("aria-label",`Сбросить по умолчанию: ${r.label}`);const M=()=>{_.value=String(ca(a,de[a])),T.textContent=la(a)};ls[a]=M,_.addEventListener("input",()=>{de[a]=yu(a,Number(_.value)),T.textContent=la(a),sn(),Un()}),g.addEventListener("click",()=>{de[a]=r.def,M(),sn(),Un()}),A.append(_,T,g),u.append(w,A),ao.append(u)}ut.append(ao);const Cn=document.createElement("button");Cn.className="settings__resetall",Cn.type="button",Cn.textContent="Сбросить все настройки теней",Cn.addEventListener("click",()=>{for(const a of wt)de[a]=Ge[a].def,ls[a]?.();sn(),Un()}),ut.append(Cn);const Ve=document.createElement("div");Ve.className="settings__pane",Ve.hidden=!0;const io=document.createElement("p");io.className="settings__hint",io.textContent="Пост-обработка кадра: ореол вокруг солнца, виньетка, резкость, цветокоррекция и глубина резкости. Главный переключатель снимает всю обработку разом, а TAA включается на вкладке «Графика» — там ему и место, рядом с MSAA. Здесь у него остался только джиттер.",Ve.append(io);const ro=document.createElement("div");ro.className="settings__row";const co=document.createElement("label");co.className="settings__head";const _i=document.createElement("span");_i.textContent="Пост-обработка включена";const We=document.createElement("input");We.type="checkbox",We.checked=xs(),co.append(_i,We),We.addEventListener("change",()=>ua(We.checked)),ro.append(co),Ve.append(ro);const lo=document.createElement("div");lo.className="settings__list";const Nn={};for(const a of Et){if(a==="taa")continue;const r=ot[a],u=document.createElement("div");u.className="settings__row";const w=document.createElement("div");w.className="settings__head";const P=document.createElement("span");P.textContent=r.label,w.append(P);const A=document.createElement("div");A.className="settings__vol";const _=document.createElement("input");_.type="range",_.min="0",_.max="100",_.step="1",r.options&&(_.max=String(r.options.length-1)),_.value=String(Ar(a,te[a])),_.setAttribute("aria-label",`Post FX: ${r.label}`);const T=document.createElement("output");T.className="settings__pct settings__pct--val",T.textContent=ha(a);const g=document.createElement("button");g.className="settings__reset",g.type="button",g.textContent="↺",g.title="Сбросить по умолчанию",g.setAttribute("aria-label",`Сбросить по умолчанию: ${r.label}`);const M=()=>{_.value=String(Ar(a,te[a])),T.textContent=ha(a)};Nn[a]=M,_.addEventListener("input",()=>{te[a]=Fu(a,Number(_.value)),T.textContent=ha(a),tt(),vt()}),g.addEventListener("click",()=>{te[a]=r.def,M(),tt(),vt()}),A.append(_,T,g),u.append(w,A),lo.append(u)}Ve.append(lo);const Rn=document.createElement("button");Rn.className="settings__resetall",Rn.type="button",Rn.textContent="Сбросить все настройки Post FX",Rn.addEventListener("click",()=>{for(const a of Et)te[a]=ot[a].def,Nn[a]?.();We.checked=!0,ua(!0),tt(),vt(),Yt()}),Ve.append(Rn);const Ke=document.createElement("div");Ke.className="settings__pane",Ke.hidden=!0;const uo=document.createElement("p");uo.className="settings__hint",uo.textContent="Служебные элементы поверх игры. Счётчик кадра живёт в левом верхнем углу на всех экранах; ниже выбирается, из каких строк он состоит.",Ke.append(uo);const po=document.createElement("div");po.className="settings__row";const mo=document.createElement("label");mo.className="settings__head";const xi=document.createElement("span");xi.textContent="Статистика кадра";const Wt=document.createElement("input");Wt.type="checkbox",Wt.checked=Bs(),mo.append(xi,Wt),Wt.addEventListener("change",()=>Pc(Wt.checked)),po.append(mo),Ke.append(po);const fo=document.createElement("p");fo.className="settings__hint",fo.textContent="Строки счётчика кадра. Если снять все, панель останется пустой плашкой — обновление текста всё равно стоит кадра, поэтому лишние строки лучше не держать включёнными без нужды.",Ke.append(fo);const ho=document.createElement("div");ho.className="settings__row settings__row--stack";const vi={};for(const a of Fa){const r=document.createElement("label");r.className="settings__check";const u=document.createElement("input");u.type="checkbox",u.checked=Ie(a);const w=document.createElement("span");w.textContent=ku(a),u.addEventListener("change",()=>Cu(a,u.checked)),vi[a]=u,r.append(u,w),ho.append(r)}Ke.append(ho);const ce=document.createElement("div");ce.className="settings__pane",ce.hidden=!0;const bo=document.createElement("p");bo.className="settings__hint",bo.textContent="Сенсорное управление появляется только на устройствах с тач-экраном. Галочка прячет педали совсем; ниже — размер, прозрачность, расположение и схема кнопок. Всё сохраняется в браузере и действует сразу.",ce.append(bo);const go=document.createElement("div");go.className="settings__row";const yo=document.createElement("label");yo.className="settings__head";const wi=document.createElement("span");wi.textContent="Сенсорное управление";const Kt=document.createElement("input");Kt.type="checkbox",Kt.checked=pa(),yo.append(wi,Kt),Kt.addEventListener("change",()=>vr(Kt.checked)),go.append(yo),ce.append(go);const _o=document.createElement("div");_o.className="settings__row";const xo=document.createElement("label");xo.className="settings__head";const Ei=document.createElement("span");Ei.textContent="Размер кнопок",xo.append(Ei);const vo=document.createElement("div");vo.className="settings__vol";const ve=document.createElement("input");ve.type="range",ve.min="60",ve.max="200",ve.step="5",ve.value=String(Math.round(ma()*100)),ve.setAttribute("aria-label","Размер сенсорных кнопок");const An=document.createElement("output");An.className="settings__pct",An.textContent=`${ve.value}%`,ve.addEventListener("input",()=>{Er(Number(ve.value)/100),An.textContent=`${ve.value}%`}),vo.append(ve,An),_o.append(xo,vo),ce.append(_o);const wo=document.createElement("div");wo.className="settings__row";const Eo=document.createElement("label");Eo.className="settings__head";const Si=document.createElement("span");Si.textContent="Прозрачность",Eo.append(Si);const So=document.createElement("div");So.className="settings__vol";const we=document.createElement("input");we.type="range",we.min="25",we.max="100",we.step="5",we.value=String(Math.round(fa()*100)),we.setAttribute("aria-label","Прозрачность сенсорных кнопок");const Ln=document.createElement("output");Ln.className="settings__pct",Ln.textContent=`${we.value}%`,we.addEventListener("input",()=>{Sr(Number(we.value)/100),Ln.textContent=`${we.value}%`}),So.append(we,Ln),wo.append(Eo,So),ce.append(wo);const Lt=document.createElement("div");Lt.className="settings__pane",Lt.hidden=!0;const ko=document.createElement("div");ko.className="settings__backend";const Co=document.createElement("p");Co.className="settings__hint",Co.textContent="Масштаб рендера уменьшает число пикселей, которые движок рисует за кадр: картинка мыльнее, но кадры стабильнее. Лимит кадров держит потолок частоты — помогает на ноутбуках от батареи. MSAA применяется при запуске: после его включения страницу нужно перезагрузить. TAA включается живьём и сглаживает всю сцену — его параметры (джиттер, резкость) задаёт выбранный пресет графики.",Lt.append(Co);const Ye=(a,r,u,w)=>{const P=document.createElement("div");P.className="settings__row";const A=document.createElement("div");A.className="settings__head";const _=document.createElement("span");_.textContent=a,A.append(_);const T=document.createElement("div");T.className="settings__vol",T.style.flexWrap="wrap";const g=[];for(const[I,G]of r){const B=document.createElement("button");B.className="settings__resetall",B.type="button",B.style.marginTop="0",B.style.flex="1 1 auto",B.style.textTransform="none",B.textContent=G,B.addEventListener("click",()=>{w(I),M()}),g.push(B),T.append(B)}const M=()=>{const I=u();for(let G=0;G<r.length;G++)g[G]?.toggleAttribute("disabled",r[G]?.[0]===I)};return M(),P.append(A,T),{row:P,refresh:M}},ki=Ye("Расположение",[["split","По краям"],["left","Слева"],["right","Справа"]],()=>kr(),a=>{(a==="split"||a==="left"||a==="right")&&Cr(a)});ce.append(ki.row);const Ci=Ye("Кнопки крестовины",[["normal","▲ газ, ▼ тормоз"],["swap","▲ тормоз, ▼ газ"]],()=>Nr()?"swap":"normal",a=>{Rr(a==="swap")});ce.append(Ci.row);const No=document.createElement("p");No.className="settings__hint",No.textContent="Клавиши: нажмите на кнопку с клавишей и нажмите нужную. Escape — отмена. Занятую клавишу настройки не отбирают: сначала снимите её с другого действия. Привязка не зависит от раскладки — W остаётся W и на русском. У газа, тормоза и руля рядом с назначенной клавишей всегда работают стрелки (↑, ↓, ←, →) — переназначать их не нужно.",ce.append(No);const Ni=[];let Ro=null;const Ri=a=>dc(a).map(jd).join(" · "),ds=()=>{for(const a of Ni)a.button.textContent=Ri(a.action)},us=()=>{Ro?.(),Ro=null};for(const a of Gn){const r=document.createElement("div");r.className="settings__row";const u=document.createElement("div");u.className="settings__head";const w=document.createElement("span");w.textContent=a.title,u.append(w);const P=document.createElement("div");P.className="settings__vol",P.style.flexWrap="wrap";const A=document.createElement("span");A.className="settings__pct",A.style.minWidth="8rem",a.note&&(A.textContent=a.note);const _=document.createElement("button");_.className="settings__resetall",_.type="button",_.style.marginTop="0",_.style.minWidth="7rem",_.textContent=Ri(a.action),_.addEventListener("click",()=>{us(),_.textContent="Нажмите клавишу…",A.textContent="Escape — отмена";const g=M=>{if(M.preventDefault(),M.stopPropagation(),M.key==="Escape"){A.textContent=a.note,ds(),us();return}if(Ya(M.code))A.textContent="Клавиша занята интерфейсом";else{const I=lc(M.code);if(I){const G=Gn.find(B=>B.action===I);A.textContent=`Занята: ${G?.title??I}`}else uc(a.action,M.code),A.textContent=a.note}ds(),us()};window.addEventListener("keydown",g,!0),Ro=()=>window.removeEventListener("keydown",g,!0)});const T=document.createElement("button");T.className="settings__resetall",T.type="button",T.style.marginTop="0",T.textContent="▲ по умолчанию",T.title="Вернуть клавишу по умолчанию",T.addEventListener("click",()=>{us(),Gd(a.action);const g=Gn.find(M=>M.action===a.action);A.textContent=g?.note??"",ds()}),P.append(_,T,A),r.append(u,P),ce.append(r),Ni.push({action:a.action,button:_,note:A})}const Ao=document.createElement("div");Ao.className="settings__row";const Tn=document.createElement("button");Tn.className="settings__resetall",Tn.type="button",Tn.textContent="Все клавиши по умолчанию",Tn.addEventListener("click",()=>{Hd(),ds()}),Ao.append(Tn),ce.append(Ao);const Lo=document.createElement("p");Lo.className="settings__hint",Lo.textContent="Кнопка на экране: выберите её и задайте сдвиг, размер, прозрачность и надпись. Действует сразу — окно можно не закрывать.",ce.append(Lo);const To=document.createElement("div");To.className="settings__row";const Po=document.createElement("div");Po.className="settings__head";const Ai=document.createElement("span");Ai.textContent="Кнопка",Po.append(Ai);const Mo=document.createElement("div");Mo.className="settings__vol";const ps=document.createElement("select");for(const a of Ic){const r=document.createElement("option");r.value=a,r.textContent=Tu[a],ps.append(r)}Mo.append(ps),To.append(Po,Mo),ce.append(To);const ms=(a,r,u,w,P,A)=>{const _=document.createElement("div");_.className="settings__row";const T=document.createElement("div");T.className="settings__head";const g=document.createElement("span");g.textContent=a,T.append(g);const M=document.createElement("div");M.className="settings__vol";const I=document.createElement("input");I.type="range",I.min=String(r),I.max=String(u),I.step=String(w),I.setAttribute("aria-label",a);const G=document.createElement("output");G.className="settings__pct";const B=()=>{const V=Number(I.value);G.textContent=A(V),wr(fs(),{[P]:V})};return I.addEventListener("input",B),M.append(I,G),_.append(T,M),{row:_,slider:I,set:V=>{I.value=String(V),G.textContent=A(V)}}},fs=()=>ps.value,Li=ms("Сдвиг по горизонтали",-160,160,4,"dx",a=>`${a} px`),Ti=ms("Сдвиг по вертикали",-160,160,4,"dy",a=>`${a} px`),Pi=ms("Размер",50,200,5,"scale",a=>`${a}%`),Mi=ms("Прозрачность",20,100,5,"opacity",a=>`${a}%`),Fo=document.createElement("div");Fo.className="settings__row";const Io=document.createElement("div");Io.className="settings__head";const Fi=document.createElement("span");Fi.textContent="Надпись",Io.append(Fi);const $o=document.createElement("div");$o.className="settings__vol";const pt=document.createElement("input");pt.type="text",pt.maxLength=8,pt.placeholder="родная",pt.setAttribute("aria-label","Надпись на кнопке"),pt.addEventListener("input",()=>{wr(fs(),{label:pt.value})}),$o.append(pt),Fo.append(Io,$o);const Bo=document.createElement("div");Bo.className="settings__row";const Pn=document.createElement("button");Pn.className="settings__resetall",Pn.type="button",Pn.textContent="Сбросить настройки этой кнопки",Pn.addEventListener("click",()=>{Pu(fs()),Do()}),Bo.append(Pn);function Do(){const a=Dc(fs());Li.set(a.dx),Ti.set(a.dy),Pi.set(Math.round(a.scale*100)),Mi.set(Math.round(a.opacity*100)),pt.value=a.label}ps.addEventListener("change",Do),ce.append(Li.row,Ti.row,Pi.row,Mi.row,Fo,Bo),Do();const Oo=Ye("Масштаб рендера",[["0.5","50 %"],["0.75","75 %"],["1","100 %"]],()=>String(Gc()),a=>{const r=Number(a);(r===.5||r===.75||r===1)&&di(r)}),jo=Ye("Лимит кадров",[["0","Выкл"],["30","30 fps"],["60","60 fps"],["120","120 fps"]],()=>String(Hc()),a=>{const r=Number(a);(r===0||r===30||r===60||r===120)&&ui(r)}),Go=document.createElement("div");Go.className="settings__row";const Ho=document.createElement("label");Ho.className="settings__head";const Ii=document.createElement("span");Ii.textContent="Сглаживание MSAA";const qe=document.createElement("input");qe.type="checkbox",qe.checked=Ft(),Ho.append(Ii,qe);const hs=document.createElement("span");hs.className="settings__pct";const Mn=()=>{qe.checked=Ft(),hs.textContent=Ft()?"сцена — сразу, интерфейс — после перезагрузки":""};Mn(),qe.addEventListener("change",()=>{Jn(qe.checked),qe.checked&&da("taa")>0&&(te.taa=0,tt(),vt()),Mn(),Yt()}),Go.append(Ho,hs);const Uo=document.createElement("div");Uo.className="settings__row";const zo=document.createElement("label");zo.className="settings__head";const $i=document.createElement("span");$i.textContent="Временное сглаживание TAA";const Je=document.createElement("input");Je.type="checkbox",Je.checked=da("taa")>0,zo.append($i,Je);const Vo=document.createElement("span");Vo.className="settings__pct";const vl=.1,wl=.5,Yt=()=>{const a=da("taa")>0;Je.checked=a,Vo.textContent=a?"работает сразу":"включит пост-обработку"};Yt(),Je.addEventListener("change",()=>{te.taa=Je.checked?1:0,Je.checked&&!xs()&&(ua(!0),We.checked=!0),Je.checked&&te.taaJitter<vl&&(te.taaJitter=wl,Nn.taaJitter?.()),Je.checked&&Ft()&&(Jn(!1),Mn()),tt(),vt(),Yt()}),Uo.append(zo,Vo);const Wo=Ye("Пресет графики",[["phone","Телефон"],["balanced","Оптимальный"],["ultra","Ультра"]],()=>Uu(),a=>{if(!(a!=="phone"&&a!=="balanced"&&a!=="ultra")){jc(a),Oo.refresh(),jo.refresh(),Wo.refresh(),qe.checked=Ft(),hs.textContent=Ft()?"применится после перезагрузки":"",Mn(),Yt();for(const r of wt)ls[r]?.();for(const r of Et)Nn[r]?.();We.checked=xs()}}),Ko=document.createElement("p");Ko.className="settings__hint",Ko.textContent="Рендер: WebGL2 работает везде, WebGPU даёт больше эффектов, но на части телефонов подвисает на первом кадре. Смена бэкенда пересобирает движок и перезагружает сцену.",Lt.append(Ko,ko,Wo.row,Oo.row,jo.row,Go,Uo);const mt=document.createElement("div");mt.className="settings__pane",mt.hidden=!0;const Yo=document.createElement("p");Yo.className="settings__hint",Yo.textContent="Разрешение и частота записи — насколько дорого кодировать. Качество кодека — насколько жирный файл: чем выше, тем чётче картинка и тем сильнее просядет игра во время записи. Всё применяется к следующему нажатию «Запись».",mt.append(Yo);const qo=document.createElement("div");qo.className="settings__recordslot",mt.append(qo);const Jo=document.createElement("div");Jo.className="settings__row";const Xo=document.createElement("label");Xo.className="settings__head";const Bi=document.createElement("span");Bi.textContent="Звук в файле";const qt=document.createElement("input");qt.type="checkbox",qt.checked=Ba(),Xo.append(Bi,qt),qt.addEventListener("change",()=>Jc(qt.checked)),Jo.append(Xo);const Di=Ye("Разрешение",[["1280","720p"],["1920","1080p"],["window","Как на экране"]],()=>String(Nu()),a=>{if(a==="window"){Ia("window");return}(a==="1280"||a==="1920")&&Ia(Number(a))}),Oi=Ye("Частота записи",[["24","24 fps"],["30","30 fps"],["60","60 fps"]],()=>String(zc()),a=>{const r=Number(a);(r===24||r===30||r===60)&&Kc(r)}),ji=Ye("Качество кодека",[["low","Низкое"],["medium","Среднее"],["high","Высокое"]],()=>Vc(),a=>{(a==="low"||a==="medium"||a==="high")&&Yc(a)}),Gi=Ye("Ключевой кадр",[["1","1 с"],["2","2 с"],["4","4 с"]],()=>String(Wc()),a=>{const r=Number(a);(r===1||r===2||r===4)&&qc(r)});mt.append(Jo,Di.row,Oi.row,ji.row,Gi.row);const ft=document.createElement("div");ft.className="settings__pane",ft.hidden=!0;const Qo=document.createElement("p");Qo.className="settings__hint",Qo.textContent="Пресет всех настроек — это всё разом: физика, свет, тени, Post FX, звук, интерфейс, графика и запись. Активный пресет применяется при запуске и одинаково работает во всех сценах. Имя нового пресета — дата и время до минуты. Пресеты отдельных групп живут на под-вкладках своих вкладок, а их общий список — ниже.",ft.append(Qo);const ge=document.createElement("p");ge.className="settings__status",ge.setAttribute("role","status"),ge.textContent="";const bs=document.createElement("div");bs.className="settings__presetnamefield";const Xe=document.createElement("input");Xe.type="text",Xe.value=yt(),Xe.placeholder="Название пресета",Xe.setAttribute("aria-label","Название нового пресета");const Fn=document.createElement("button");Fn.className="settings__presetbtn",Fn.type="button",Fn.textContent="Сохранить",bs.append(Xe,Fn);const El=document.createElement("div");El.className="settings__row";const In=document.createElement("button");In.className="settings__resetall",In.type="button",In.textContent="Обновить активный пресет",In.addEventListener("click",()=>{const a=$s();if(!a){ge.textContent="Активного пресета нет — сохраните новый.";return}Yr(a,St()),ge.textContent="Текущие настройки записаны в активный пресет.",bt()});const $n=document.createElement("button");$n.className="settings__resetall",$n.type="button",$n.textContent="Импорт из файла";const ht=document.createElement("input");ht.type="file",ht.accept="application/json,.json",ht.hidden=!0,$n.addEventListener("click",()=>ht.click()),ht.addEventListener("change",()=>{const a=ht.files?.[0];ht.value="",a&&(async()=>{try{const r=Md(await a.text());if(!r){ge.textContent="Это не файл настроек игры.";return}const u=Bt(r.data);if(u.applied.length===0){ge.textContent="В файле нет знакомых настроек.";return}const w=jn(r.name??a.name.replace(/\.json$/i,""),r.data,r.created??Date.now());Ca(w.id),Me(),bt(),Xe.value=yt(),ge.textContent=`Импортировано «${w.name}»: ${u.applied.join(", ")}`}catch(r){ge.textContent=`Не удалось прочитать файл: ${r instanceof Error?r.message:"ошибка чтения"}`}})()});const Bn=document.createElement("button");Bn.className="settings__resetall",Bn.type="button",Bn.textContent="Убрать все пресеты",Bn.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты? Настройки останутся как есть.")&&(Td(),Me(),bt(),ge.textContent="Пресеты удалены, текущие настройки не тронуты.")});const Dn=document.createElement("div");Dn.className="settings__presets";const Me=()=>{for(const a of Oe)as[a]?.();for(const a of nn)so[a]?.();for(const a of wt)ls[a]?.();for(const a of Et)Nn[a]?.();for(const a of Rc)R[a]?.();We.checked=xs(),Wt.checked=Bs();for(const a of Fa){const r=vi[a];r&&(r.checked=Ie(a))}qe.checked=Ft(),Mn(),Yt(),Oo.refresh(),jo.refresh(),Wo.refresh(),Di.refresh(),Oi.refresh(),ji.refresh(),Gi.refresh(),qt.checked=Ba()},Sl=(a,r)=>{const u=Is().find(P=>P.id===a);if(!u)return;const w=Bt(u.data);Ca(a),Me(),ge.textContent=w.applied.length>0?`Применён пресет «${r}»: ${w.applied.join(", ")}`:`В пресете «${r}» нет знакомых настроек.`},Hi=a=>a>0?yt(new Date(a)):"дата неизвестна",bt=()=>{Dn.replaceChildren();const a=Is(),r=$s();if(a.length===0){const u=document.createElement("p");u.className="settings__presetempty",u.textContent="Пресетов пока нет. Настройте всё как надо и нажмите «Сохранить».",Dn.append(u);return}for(const u of a){const w=document.createElement("div");w.className="settings__preset";const P=u.id===r;P&&w.classList.add("settings__preset--active");const A=document.createElement("div");A.className="settings__presetinfo";const _=document.createElement("span");_.className="settings__presetname",_.textContent=u.name;const T=document.createElement("span");T.className="settings__presetmeta",T.textContent=P?`${Hi(u.created)} · активен`:Hi(u.created),A.append(_,T);const g=document.createElement("button");g.className="settings__presetbtn",g.type="button",g.textContent="✎",g.title="Переименовать",g.setAttribute("aria-label",`Переименовать пресет ${u.name}`),g.addEventListener("click",()=>{const B=document.createElement("input");B.className="settings__presetnameinput",B.type="text",B.value=u.name,_.replaceWith(B),B.focus(),B.select();const V=()=>{Kr(u.id,B.value),bt()};B.addEventListener("keydown",K=>{K.key==="Enter"&&V(),K.key==="Escape"&&(K.stopPropagation(),bt())}),B.addEventListener("blur",V)});const M=document.createElement("button");M.className="settings__presetbtn",M.type="button",M.textContent="Применить",M.disabled=P,M.addEventListener("click",()=>Sl(u.id,u.name));const I=document.createElement("button");I.className="settings__presetbtn",I.type="button",I.textContent="↓",I.title="Экспорт в файл",I.setAttribute("aria-label",`Экспорт пресета ${u.name} в файл`),I.addEventListener("click",()=>Pd(u));const G=document.createElement("button");G.className="settings__presetbtn settings__presetbtn--danger",G.type="button",G.textContent="✕",G.title="Удалить",G.setAttribute("aria-label",`Удалить пресет ${u.name}`),G.addEventListener("click",()=>{window.confirm(`Удалить пресет «${u.name}» всех настроек?`)&&(Ld(u.id),bt(),ge.textContent=`Пресет «${u.name}» удалён.`)}),w.append(A,M,g,I,G),Dn.append(w)}};Fn.addEventListener("click",()=>{const a=jn(Xe.value||yt(),St());Xe.value=yt(),bt(),ge.textContent=`Сохранён пресет «${a.name}».`}),ft.append(bs,Dn,In,$n,Bn,ht,ge),bt();const Tt=a=>{const r=St();return{[a]:r[a]}},Pt=a=>{const r=Bt(a);return r.applied.length>0?{ok:!0,message:`Применено: ${r.applied.join(", ")}.`}:{ok:!1,message:"В пресете нет знакомых настроек этой группы."}},kl=()=>({touch:{on:pa(),scale:ma(),opacity:fa(),layout:kr(),swap:Nr()}}),Cl=a=>{const r=a&&typeof a=="object"?a.touch:null;if(!r||typeof r!="object")return{ok:!1,message:"В пресете нет настроек управления."};const u=r;let w=!1;return typeof u.on=="boolean"&&(vr(u.on),w=!0),typeof u.scale=="number"&&Number.isFinite(u.scale)&&(Er(u.scale),w=!0),typeof u.opacity=="number"&&Number.isFinite(u.opacity)&&(Sr(u.opacity),w=!0),(u.layout==="split"||u.layout==="left"||u.layout==="right")&&(Cr(u.layout),w=!0),typeof u.swap=="boolean"&&(Rr(u.swap),w=!0),w?{ok:!0,message:"Применены настройки сенсорного управления."}:{ok:!1,message:"В пресете нет настроек управления."}},Nl=()=>{Kt.checked=pa(),ve.value=String(Math.round(ma()*100)),An.textContent=`${ve.value}%`,we.value=String(Math.round(fa()*100)),Ln.textContent=`${we.value}%`,ki.refresh(),Ci.refresh()},Rl=()=>{const a=Re();return a?{ok:!0,data:{...a.read()}}:{ok:!1,message:"Ракурс снимается со сцены: сначала войдите в заезд."}},Al=a=>{const r=br(a);if(!r)return{ok:!1,message:"В пресете нет ракурса камеры."};const u=Re();return u?(u.write({...r}),{ok:!0,message:"Применён ракурс камеры."}):{ok:!1,message:"Камера живёт в сцене: войдите в заезд."}},Ll=a=>{const r=Lr(a);return r?(ga(r),{ok:!0,message:"Применены настройки физики."}):{ok:!1,message:"В пресете нет настроек физики."}},Ui={store:Jd,capture:()=>({ok:!0,data:Tt("sound")}),apply:Pt,afterApply:Me,emptyText:"Своих пресетов звука нет: выставьте громкость и нажмите «Сохранить»."},Tl={store:ou,capture:()=>({ok:!0,data:ba()}),apply:Ll,afterApply:()=>{O(),Y()},emptyText:"Своих пресетов физики нет: настройте её и нажмите «Сохранить»."},zi={store:Xd,capture:()=>({ok:!0,data:Tt("lighting")}),apply:Pt,afterApply:Me,emptyText:"Своих пресетов света нет: настройте освещение и нажмите «Сохранить»."},Vi={store:Qd,capture:()=>({ok:!0,data:Tt("shadows")}),apply:Pt,afterApply:Me,emptyText:"Своих пресетов теней нет: настройте каскады и нажмите «Сохранить»."},Wi={store:Zd,capture:()=>({ok:!0,data:Tt("postfx")}),apply:Pt,afterApply:Me,emptyText:"Своих пресетов Post FX нет: настройте эффекты и нажмите «Сохранить»."},Ki={store:eu,capture:()=>({ok:!0,data:Tt("hud")}),apply:Pt,afterApply:Me,emptyText:"Своих пресетов интерфейса нет: выставьте галочки и нажмите «Сохранить»."},Yi={store:tu,capture:()=>({ok:!0,data:kl()}),apply:Cl,afterApply:Nl,emptyText:"Своих пресетов управления нет: настройте педали и нажмите «Сохранить»."},Pl={store:au,capture:Rl,apply:Al,afterApply:Vt,emptyText:"Своих пресетов камеры нет: войдите в заезд, выставьте ракурс и нажмите «Сохранить»."},qi={store:nu,capture:()=>({ok:!0,data:Tt("graphics")}),apply:Pt,afterApply:Me,emptyText:"Своих пресетов графики нет: выберите масштаб кадра и нажмите «Сохранить»."},Ji={store:su,capture:()=>({ok:!0,data:Tt("recording")}),apply:Pt,afterApply:Me,emptyText:"Своих пресетов записи нет: выставьте параметры файла и нажмите «Сохранить»."},Ml=[Ui,Tl,zi,Vi,Wi,Ki,Yi,Pl,qi,Ji],Xi=[],Fl=a=>a>0?yt(new Date(a)):"дата неизвестна",Qi=(a,r,u,w,P,A)=>{a.replaceChildren();const _=r.list(),T=r.activeId();if(_.length===0){const g=document.createElement("p");g.className="settings__presetempty",g.textContent=u,a.append(g);return}for(const g of _){const M=document.createElement("div");M.className="settings__preset";const I=g.id===T;I&&M.classList.add("settings__preset--active");const G=document.createElement("div");G.className="settings__presetinfo";const B=document.createElement("span");B.className="settings__presetname",B.textContent=g.name;const V=document.createElement("span");V.className="settings__presetmeta",V.textContent=Fl(g.created),G.append(B,V);const K=document.createElement("button");K.className="settings__presetbtn",K.type="button",K.textContent=I?"Активен":"Применить",K.disabled=I,K.setAttribute("aria-label",`Применить пресет «${g.name}»`),K.addEventListener("click",()=>w(g));const W=document.createElement("span");W.className="settings__presetbadge",W.textContent="Активен";const ee=document.createElement("button");ee.className="settings__presetbtn",ee.type="button",ee.textContent="✎",ee.title="Переименовать",ee.setAttribute("aria-label",`Переименовать пресет ${g.name}`),ee.addEventListener("click",()=>{const Qe=document.createElement("input");Qe.className="settings__presetnameinput",Qe.type="text",Qe.value=g.name,B.replaceWith(Qe),Qe.focus(),Qe.select();const tr=()=>{r.rename(g.id,Qe.value),A()};Qe.addEventListener("keydown",sa=>{sa.key==="Enter"&&tr(),sa.key==="Escape"&&(sa.stopPropagation(),A())}),Qe.addEventListener("blur",tr)});const Fe=document.createElement("button");Fe.className="settings__presetbtn",Fe.type="button",Fe.textContent="↓",Fe.title="Экспорт в файл",Fe.setAttribute("aria-label",`Экспорт пресета ${g.name} в файл`),Fe.addEventListener("click",()=>r.downloadFile(g));const Mt=document.createElement("button");Mt.className="settings__presetbtn settings__presetbtn--danger",Mt.type="button",Mt.textContent="✕",Mt.title="Удалить",Mt.setAttribute("aria-label",`Удалить пресет «${g.name}»`),Mt.addEventListener("click",()=>{window.confirm(`Удалить пресет «${g.name}» группы «${r.title}»?`)&&(r.remove(g.id),P(`Пресет «${g.name}» удалён.`),A())}),M.append(G,K),I&&M.append(W),M.append(ee,Fe,Mt),a.append(M)}},Il=a=>{const r=document.createElement("div");r.className="settings__block";const u=document.createElement("p");u.className="settings__hint",u.textContent=`Пресет группы «${a.store.title}» хранит только её настройки: применение не трогает остальные вкладки.`;const w=document.createElement("p");w.className="settings__status",w.setAttribute("role","status");const P=W=>{w.textContent=W},A=document.createElement("div");A.className="settings__presets";const _=()=>{Qi(A,a.store,a.emptyText,W=>{Zi(a,W,P),_()},P,_)},T=document.createElement("div");T.className="settings__presetnamefield";const g=document.createElement("input");g.type="text",g.value=a.store.defaultName(),g.placeholder="Название пресета",g.setAttribute("aria-label",`Название нового пресета: ${a.store.title}`),Xi.push(()=>{g.value=a.store.defaultName()});const M=document.createElement("button");M.className="settings__presetbtn",M.type="button",M.textContent="Сохранить",M.addEventListener("click",()=>{const W=a.capture();if(!W.ok){P(W.message);return}const ee=a.store.add(g.value||a.store.defaultName(),W.data);g.value=a.store.defaultName(),_(),P(`Сохранён пресет «${ee.name}» — он активен.`)}),T.append(g,M);const I=document.createElement("button");I.className="settings__resetall",I.type="button",I.textContent="Обновить активный пресет",I.addEventListener("click",()=>{const W=a.store.activeId();if(!W){P("Активного пресета нет — сохраните новый.");return}const ee=a.capture();if(!ee.ok){P(ee.message);return}a.store.update(W,ee.data),_(),P("Текущие настройки записаны в активный пресет.")});const G=document.createElement("button");G.className="settings__resetall",G.type="button",G.textContent="Импорт из файла";const B=document.createElement("input");B.type="file",B.accept="application/json,.json",B.hidden=!0,G.addEventListener("click",()=>B.click()),B.addEventListener("change",()=>{const W=B.files?.[0];B.value="",W&&(async()=>{try{const ee=a.store.parseFile(await W.text());if(!ee){P("Это не файл пресетов этой группы.");return}const Fe=a.store.addMany(ee.items);_(),P(Fe===0?"Такие пресеты уже есть.":`Импортировано пресетов: ${Fe}.`)}catch(ee){P(`Не удалось прочитать файл: ${ee instanceof Error?ee.message:"ошибка чтения"}`)}})()});const V=document.createElement("button");V.className="settings__resetall",V.type="button",V.textContent="Экспорт всех в файл",V.addEventListener("click",()=>{const W=a.store.list();if(W.length===0){P("Экспортировать нечего: пресетов нет.");return}a.store.downloadBundle(W),P(`Выгружено пресетов: ${W.length}.`)});const K=document.createElement("button");return K.className="settings__resetall",K.type="button",K.textContent="Убрать все пресеты",K.addEventListener("click",()=>{window.confirm(`Удалить все пресеты группы «${a.store.title}»? Настройки останутся как есть.`)&&(a.store.clear(),_(),P("Пресеты удалены, текущие настройки не тронуты."))}),r.append(u,T,A,I,G,V,K,B,w),_(),r},Zi=(a,r,u)=>{const w=a.apply(r.data);if(!w.ok){u(w.message);return}a.store.setActive(r.id),a.afterApply?.(),u(`«${r.name}»: ${w.message}`)},$l=(a,r)=>{const u=document.createElement("div");for(u.className="settings__block";a.firstChild;)u.append(a.firstChild);const w=document.createElement("div");w.className="settings__block",w.hidden=!0;const P=document.createElement("div");P.className="physics-tabs";const A=document.createElement("button");A.className="physics-tab physics-tab--on",A.type="button",A.textContent="Настройка",A.setAttribute("role","tab"),A.setAttribute("aria-selected","true");const _=document.createElement("button");_.className="physics-tab",_.type="button",_.textContent=r,_.setAttribute("role","tab"),_.setAttribute("aria-selected","false");const T=g=>{A.classList.toggle("physics-tab--on",!g),_.classList.toggle("physics-tab--on",g),A.setAttribute("aria-selected",String(!g)),_.setAttribute("aria-selected",String(g)),u.hidden=g,w.hidden=!g};return A.addEventListener("click",()=>T(!1)),_.addEventListener("click",()=>T(!0)),P.append(A,_),a.append(P,u,w),w},Bl=[[d,Ui,"Пресеты звука"],[dt,zi,"Пресеты света"],[ut,Vi,"Пресеты теней"],[Ve,Wi,"Пресеты Post FX"],[Ke,Ki,"Пресеты интерфейса"],[ce,Yi,"Пресеты управления"],[Lt,qi,"Пресеты графики"],[mt,Ji,"Пресеты записи"]];for(const[a,r,u]of Bl)$l(a,u).append(Il(r));const Zo=document.createElement("p");Zo.className="settings__hint",Zo.textContent="Ниже — пресеты всех групп в одном списке: применяйте, переименовывайте и выгружайте их, не переходя по вкладкам. Пресет выше — это все настройки разом, он применяется при запуске; пресет группы трогает только её.";const gs=document.createElement("p");gs.className="settings__status",gs.setAttribute("role","status");const er=a=>{gs.textContent=a},ys=document.createElement("div"),Jt=()=>{ys.replaceChildren();let a=0;for(const r of Ml){const u=r.store.list();if(u.length===0)continue;a+=u.length;const w=document.createElement("div");w.className="settings__presets",Qi(w,r.store,r.emptyText,P=>{Zi(r,P,er),Jt()},P=>{er(P),Jt()},()=>{Jt()}),ys.append(ue(r.store.title,w))}if(a===0){const r=document.createElement("p");r.className="settings__presetempty",r.textContent="Пресетов групп пока нет: сохраните их на под-вкладках «Пресеты …» нужных вкладок.",ys.append(r)}},ea=document.createElement("p");ea.className="settings__presettitle",ea.textContent="Все настройки разом";const ta=document.createElement("p");ta.className="settings__presettitle",ta.textContent="Пресеты групп",ft.insertBefore(ea,bs),ft.append(ta,Zo,ys,gs),Jt();const na=document.createElement("div");na.className="settings__scroll",na.append(d,k,dt,ut,Ve,Ke,ce,Gt,Lt,mt,ft),n.append(s,i,na),e.append(t,n),document.body.append(e);function Dl(){e.hidden=!1,Xe.value=yt(),Ne.value=$e(),X.value=xt();for(const a of Xi)a();Vt(),Jt()}function Ol(){e.hidden=!0}return{root:e,backendSlot:ko,recordSlot:qo,open:Dl,close:Ol}}const Qu=300;function Zu(e={}){let t=0,n=!1;const s=()=>{const m=$s();if(!m){n||(n=!0,e.onNoPreset?.());return}const l=St();if(!Yr(m,l))return;n=!1;const f=$s();f&&e.onSaved?.(f)},i=lu(()=>{Ou()||(window.clearTimeout(t),t=window.setTimeout(s,Qu))}),c=()=>{t!==0&&(window.clearTimeout(t),t=0,s())};return document.addEventListener("visibilitychange",c),window.addEventListener("pagehide",c),{flush(){t!==0&&(window.clearTimeout(t),t=0,s())},destroy(){window.clearTimeout(t),t=0,i(),document.removeEventListener("visibilitychange",c),window.removeEventListener("pagehide",c)}}}const ep="https://vk.ru/H360ru";function tp(){const e=document.createElement("div"),t=document.createElement("p");t.className="dlg__empty",t.textContent="Описание игры скоро появится. Пока сюда можно поставить правила, список техники и ссылку на сервер.";const n=document.createElement("a");n.className="dlg__link",n.href=ep,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Группа игры во «ВКонтакте»",e.append(t,n);const s=Ws({title:"Об игре",body:e});return{dialog:s,open(){s.open()},destroy(){s.destroy()}}}const np=[{hash:"869d992",date:"2026-10-10",subject:"Машина: настройка хода из экспорта 10.10, тормоза 15 000 Н, коллайдер кузова по крыше модели"},{hash:"724aa1c",date:"2026-10-10",subject:"Колёса: качение от спидометра, посадка от точки контакта, отражение моделей"},{hash:"7a60e38",date:"2026-10-10",subject:"Физика: Ammo убран, бэкенд только Rapier; прогоны проверок на GPU"},{hash:"990154d",date:"2026-10-09",subject:"Вкладка «Физика»: под каждым параметром — строка «за что отвечает»"},{hash:"6fca917",date:"2026-10-09",subject:"Пресеты на подвкладках всех вкладок; вкладка «Все настройки» — общий список пресетов групп"},{hash:"678f1d1",date:"2026-10-09",subject:"Пресеты камеры: плашка активного и кнопка «Сохранить пресет» на подвкладке «Ракурс»"},{hash:"0eb2a7f",date:"2026-10-09",subject:"Камера: перенос пресетов старого ключа blendars.camera-views.v1 в новое хранилище"},{hash:"42d487b",date:"2026-10-09",subject:"Камера: вкладка в настройках с ракурсом и пресетами, кнопка ракурсов убрана из topbar"},{hash:"7372f41",date:"2026-10-09",subject:"Прочность машины: панель на 5 ячеек, сильный удар свыше 50 км/ч, GAME OVER и возврат в меню"},{hash:"e4af8a4",date:"2026-10-09",subject:"UI: вкладка физики, таймер под компасом, уведомления чекпоинтов, тач-жесты"},{hash:"0069c44",date:"2026-10-09",subject:"CI: upload-pages-artifact v5 вместо v3 — под Node 24 артефакт github-pages не создавался"},{hash:"9e7421c",date:"2026-10-09",subject:"Физика машины: сторож увязания, инерция по трём осям, пресеты 5 т и 4 т"},{hash:"709fad1",date:"2026-10-09",subject:"HUD в канвасе: слой под размер виджета вместо полноэкранной текстуры, обрезка полосы компаса"},{hash:"1d33c0a",date:"2026-10-09",subject:"Забег по чекпоинтам: таймер, карточка финиша, окно «Лидеры», личность ВК"},{hash:"e4e4244",date:"2026-10-09",subject:"up"},{hash:"b3964c6",date:"2026-10-09",subject:"Сглаживание: TAA на вкладке «Графика», починка MSAA, ПК-пресеты на MSAA"},{hash:"6f17f25",date:"2026-10-08",subject:"HUD в канвас, UI-аудиошина, Draco/KTX2-ассеты"},{hash:"ad022dc",date:"2026-10-08",subject:"Fix WGSL shader: declare material_diffuse and view_position uniforms in terrain-splat"},{hash:"a206a10",date:"2026-10-08",subject:"Rebuild dist with base /blend-ars/ (GitHub Pages)"},{hash:"15fdf63",date:"2026-10-08",subject:"Deploy built site from dist; path dist in Pages workflow"},{hash:"942a7cc",date:"2026-10-08",subject:"Remove project sources; keep .github and .gitignore"},{hash:"da0f40e",date:"2026-10-08",subject:"Create static.yml"},{hash:"2691051",date:"2026-10-08",subject:"Delete .github/workflows/static.yml"},{hash:"98c2349",date:"2026-10-08",subject:"Delete .github/workflows/npm-publish-github-packages.yml"},{hash:"3ce584f",date:"2026-10-08",subject:"Update static.yml"},{hash:"128f22b",date:"2026-10-03",subject:"Create npm-publish-github-packages.yml"},{hash:"c8e16ab",date:"2026-10-03",subject:"Create static.yml"},{hash:"5a46d53",date:"2026-10-03",subject:"feat(scene): выбор кузова грузовик/Maserati, Maserati в меню, откат WebGPU→WebGL2"},{hash:"5c65165",date:"2026-10-03",subject:"feat(menu): экран загрузки с прогрессом + процедурный 3D-фон меню"},{hash:"1faa7f1",date:"2026-10-03",subject:"test(stage-0): браузерная проверка рендера, smoke-сцена, иконки-заглушки"},{hash:"4f12113",date:"2026-10-03",subject:"feat(stage-0): bootstrap Vite + ленивый PlayCanvas + тулинг бюджетов"},{hash:"eb68f3c",date:"2026-10-03",subject:"docs: rewrite README for PlayCanvas/Colyseus web stack"},{hash:"34ff9ca",date:"2026-10-03",subject:"chore: remove legacy Godot+Nakama tree and web export"},{hash:"9018d77",date:"2026-10-02",subject:"Create FUNDING.yml"},{hash:"7f64ab1",date:"2026-09-30",subject:"Add files via upload"},{hash:"5b7ab23",date:"2026-09-30",subject:"Add files via upload"},{hash:"ebb8901",date:"2026-03-19",subject:"mv"},{hash:"3c3fc26",date:"2026-03-19",subject:"fix: обновлен .gitignore и удалены системные файлы"},{hash:"0e075c9",date:"2026-03-19",subject:"up"},{hash:"9309069",date:"2026-03-19",subject:"upd"},{hash:"b82f5bc",date:"2026-03-19",subject:"docs: оновлення правил проекту"},{hash:"a19f06e",date:"2026-03-19",subject:"up"},{hash:"45bb3b3",date:"2026-03-19",subject:"new rules by demiurgos 19_1"},{hash:"7519417",date:"2026-02-27",subject:"Update README.md"},{hash:"58a3447",date:"2026-02-27",subject:"**BLEND ARS: Initial Project Setup and Development Notice**"},{hash:"60a150e",date:"2026-02-27",subject:"upd"},{hash:"eae4946",date:"2026-02-27",subject:"Exclude addons folder from tracking"},{hash:"cfe0473",date:"2026-02-27",subject:"upd"},{hash:"94b5e5d",date:"2026-02-24",subject:"uikit up"},{hash:"17b03ea",date:"2026-02-24",subject:"mv"}];function sp(){const e=np;if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,o=s.hash,i=s.date,c=s.subject;typeof o!="string"||typeof c!="string"||t.push({hash:o,date:typeof i=="string"?i:"",subject:c})}return t}function op(){const e=sp(),t=document.createElement("div");if(e.length===0){const s=document.createElement("p");s.className="dlg__empty",s.textContent="Журнал пока пуст: сборка сделана без истории git.",t.append(s)}else{const s=document.createElement("p");s.className="devlog__meta",s.textContent=`Последние ${e.length} изменений`;const o=document.createElement("ul");o.className="devlog__list";for(const i of e){const c=document.createElement("li");c.className="devlog__item";const m=document.createElement("span");m.className="devlog__hash",m.textContent=i.hash;const l=document.createElement("span");l.className="devlog__date",l.textContent=i.date;const f=document.createElement("span");f.className="devlog__subject",f.textContent=i.subject,c.append(m,l,f),o.append(c)}t.append(s,o)}const n=Ws({title:"Журнал разработки",body:t});return{dialog:n,open(){n.open()},destroy(){n.destroy()}}}const Xc="blendars.race.board.v1",ap=200;let Qt=null;function vs(e){return typeof e=="number"&&Number.isFinite(e)}function ip(e){if(!Array.isArray(e))return[];const t=[];for(const n of e){if(t.length>=ap)break;if(typeof n!="object"||n===null)continue;const s=n;typeof s.uid!="string"||s.uid===""||typeof s.name=="string"&&(!vs(s.bestMs)||s.bestMs<0||t.push({uid:s.uid,name:s.name,photo:typeof s.photo=="string"?s.photo:"",bestMs:s.bestMs,lastMs:vs(s.lastMs)?s.lastMs:s.bestMs,runs:vs(s.runs)&&s.runs>0?Math.floor(s.runs):1,updatedAt:vs(s.updatedAt)?s.updatedAt:0}))}return t.sort(Qc)}function Qc(e,t){return e.bestMs!==t.bestMs?e.bestMs-t.bestMs:e.updatedAt!==t.updatedAt?e.updatedAt-t.updatedAt:e.uid<t.uid?-1:e.uid>t.uid?1:0}function Zc(){if(Qt!==null)return Qt;try{const e=localStorage.getItem(Xc);Qt=e===null?[]:ip(JSON.parse(e))}catch(e){console.warn("[race] таблица недоступна, веду её в памяти",e),Qt=[]}return Qt}function rp(e){Qt=e;try{localStorage.setItem(Xc,JSON.stringify(e))}catch(t){console.warn("[race] рекорд не сохранён на диск",t)}}function cp(){return Zc()}function lp(e){const t=Zc(),n=t.findIndex(f=>f.uid===e.uid),s=n>=0?t[n]:void 0,o=s?.bestMs??0,i=Math.max(0,Math.round(e.timeMs)),c={uid:e.uid,name:e.name,photo:e.photo,bestMs:s===void 0?i:Math.min(s.bestMs,i),lastMs:i,runs:(s?.runs??0)+1,updatedAt:Date.now()},m=t.slice();n>=0?m[n]=c:m.push(c),m.sort(Qc),rp(m);const l=m.findIndex(f=>f.uid===e.uid);return{rank:l>=0?l+1:m.length,total:m.length,bestMs:c.bestMs,improved:s===void 0||i<o,previousBestMs:o,board:m}}function dp(e,t){const n={state:"idle",startMs:0,lastMs:0,collected:0,total:t.total},s=()=>{if(n.state==="finished"||n.state==="aborted"||(n.state==="idle"&&(n.state="running",n.startMs=performance.now(),e.fire("race:started",n.total)),n.collected+=1,n.total<1||n.collected<n.total))return;n.state="finished",n.lastMs=Math.max(0,Math.round(performance.now()-n.startMs));const i={timeMs:n.lastMs,collected:n.collected,total:n.total};e.fire("race:finished",i),t.onFinished?.(i)};return e.on("checkpoint:visited",s),{view:n,abort:()=>{n.state==="finished"||n.state==="aborted"||(n.lastMs=n.state==="running"?Math.max(0,Math.round(performance.now()-n.startMs)):0,n.state="aborted",e.fire("race:aborted",n.collected))},destroy(){e.off("checkpoint:visited",s)}}}function Tr(e){return e<10?`0${e}`:`${e}`}function Xn(e){const t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/10);return`${Math.floor(n/6e3)}:${Tr(Math.floor(n/100)%60)}.${Tr(n%100)}`}function uf(e){return`${e<0?"−":"+"}${Xn(Math.abs(e))}`}const up=`
.leaders__meta {
    position: sticky;
    top: 0;
    z-index: 1;
    margin: 0 0 10px;
    padding: 0.5rem 0;
    font-size: 13px;
    color: #a89984;
    background: #1d2021d9;
}
.leaders__list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.leaders__row {
    display: grid;
    grid-template-columns: 1.9rem 1fr auto;
    align-items: center;
    gap: 10px;
    padding: 8px 4px;
    border-top: 1px solid #3c3836;
    font-size: 14px;
}
.leaders__place {
    text-align: right;
    font-variant-numeric: tabular-nums;
    color: #a89984;
}
.leaders__who { display: flex; align-items: center; gap: 8px; min-width: 0; }
.leaders__face {
    width: 26px;
    height: 26px;
    flex: none;
    border-radius: 50%;
    object-fit: cover;
    background: #3c3836;
}
.leaders__text { min-width: 0; }
.leaders__name {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.leaders__about {
    display: block;
    font-size: 11px;
    line-height: 1.35;
    color: #a89984;
}
.leaders__time {
    font-variant-numeric: tabular-nums;
    color: #ebdbb2;
}
.leaders__hint {
    margin: 14px 0 0;
    font-size: 11px;
    line-height: 1.45;
    color: #a89984;
}
`;function el(e,t,n,s){const o=Math.abs(e)%100,i=o%10;return o>=11&&o<=14?s:i===1?t:i>=2&&i<=4?n:s}function pp(e,t,n,s,o,i){const c=document.createElement("li");c.className="leaders__row";const m=document.createElement("span");m.className="leaders__place",m.textContent=`${e}`;const l=document.createElement("span");if(l.className="leaders__who",n!==""){const b=document.createElement("img");b.className="leaders__face",b.src=n,b.alt="",b.loading="lazy",b.addEventListener("error",()=>b.remove()),l.append(b)}const f=document.createElement("span");f.className="leaders__text";const p=document.createElement("span");p.className="leaders__name",p.textContent=t;const h=document.createElement("span");h.className="leaders__about";const v=`${o} ${el(o,"заезд","заезда","заездов")}`;h.textContent=o>1&&i>s?`${v} · последний ${Xn(i)}`:v,f.append(p,h),l.append(f);const y=document.createElement("span");return y.className="leaders__time",y.textContent=Xn(s),c.append(m,l,y),c}function mp(e){e.textContent="";const t=cp();if(t.length===0){const i=document.createElement("p");i.className="dlg__empty",i.textContent="Заездов пока нет. Соберите все чекпоинты — результат попадёт в таблицу.",e.append(i);return}const n=document.createElement("p");n.className="leaders__meta",n.textContent=`${t.length} ${el(t.length,"игрок","игрока","игроков")} · лучшее время на игрока`;const s=document.createElement("ul");s.className="leaders__list";for(let i=0;i<t.length;i++){const c=t[i];c&&s.append(pp(i+1,c.name,c.photo,c.bestMs,c.runs,c.lastMs))}const o=document.createElement("p");o.className="leaders__hint",o.textContent="Таблица — на этом устройстве: заезды других игроков в неё не попадают. Общий рейтинг появится, когда у игры будет сервер.",e.append(n,s,o)}function fp(){if(!document.getElementById("leaders-style")){const n=document.createElement("style");n.id="leaders-style",n.textContent=up,document.head.append(n)}const e=document.createElement("div"),t=Ws({title:"Лидеры",body:e});return{dialog:t,open(){mp(e),t.open()},destroy(){t.destroy()}}}function ws(e,t,n,s){const o=document.createElement("button");return o.className=e,o.type="button",o.style.setProperty("--tb-icon",`url(${JSON.stringify(t)})`),o.title=n,o.setAttribute("aria-label",n),o.addEventListener("pointerdown",i=>{i.preventDefault(),!o.disabled&&s()}),o}const hp=`
/* Полоса — первый блок меню, дальше идут кнопки сцены и статус.
   Высота 30% экрана задана пользователем; min-height защищает от вырожденного
   случая (landscape-телефон, у которого 30% — это 90 пикселей и заголовок
   в них не влезает), а max-height — от противоположного: на 4K 30% это
   430 пикселей пустоты, съедающих треть картинки. */
/* Раскладка полосы: две равные колонки по краям, а название вынесено из
   потока и центрируется по всей полосе.
   
   Почему не '1fr auto 1fr': центральная колонка там получает остаток
   минус боковые, а боковые равны только если остаток не отрицателен.
   Как только кнопки (354 пикселя) и статистика (193) не помещались в равные
   доли, «центр» уезжал вбок. Пробовали и 'auto minmax(0,1fr) auto' — там
   центр центрируется по остатку между колонками разной ширины, то есть тоже
   не по экрану. Абсолютное позиционирование даёт настоящий центр полосы при
   любой ширине боковых блоков.
 */
.tb {
    /* Боковое поле полосы. 2rem (32px), а не прежние 12px: крайняя кнопка
       стояла бы вплотную к краю экрана, и по ней на тач-устройстве трудно
       попасть (палец упирается в рамку). safe-area остаётся верхней границей
       max(): на чёлке inset больше и кнопки не уходят под неё. */
    --tb-pad-x: 2rem;
    position: sticky;
    top: 0;
    z-index: 5;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: max(0.5rem, 8px);
    width: 100%;
    height: auto;
    padding: max(0.5rem, 8px) max(var(--tb-pad-x), env(safe-area-inset-right)) max(0.5rem, 8px) max(var(--tb-pad-x), env(safe-area-inset-left));
    box-sizing: border-box;
    color: #ebdbb2;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    flex: none;
    /* Прежде здесь было стекло в духе «Liquid Glass» (референс — новый дизайн
       Telegram): полупрозрачная подложка с градиентом (светлее сверху), blur
       с saturate давали преломление фона, а светлый inset-блик по верхней
       кромке читался как отражение на стекле. Стекло снято — полоса во всю
       ширину экрана, это самая широкая blur-область интерфейса, и каждый
       кадр композитор пересобирал её заново. Градиент сохранён, но теперь он
       непрозрачный: тёплый верхний тон держит ту же рамку и блик, а читаемость
       названия и статистики без преломления выше. Радиус 6px — по требованию:
       меньше фирменных скруглений Telegram, чтобы полоса не спорила с
       панелями меню. */
    background: linear-gradient(180deg, #3a3830f2 0%, #1d2021f2 55%, #1d2021f7 100%);
    border: 1px solid #ebdbb22e;
    border-radius: 6px;
    box-shadow:
        inset 0 1px 0 #ebdbb238,
        inset 0 -1px 0 #00000045,
        0 12px 32px #00000059;
}
/* Узкий экран (телефон в портрете). Три колонки '1fr auto 1fr' здесь не
   работают: название занимает почти всю ширину, и на боковые колонки
   остаётся по 60 пикселей — статистика влезала только обрезком. Поэтому
   полоса переходит в две строки: название сверху во всю ширину, под ним
   слева статистика, справа кнопки. Так всё читается без обрезки. */

.tb__slot { min-width: 0; display: flex; align-items: center; gap: 10px; }
/* Левая колонка — место для статистики, и она не должна расти: панель
   счётчика идёт с white-space и без предела занимала всю колонку, а на
   телефоне дотягивалась до названия. */
.tb__slot--left { overflow: hidden; }
.tb__slot--right { justify-content: flex-end; }
.tb__title {
    margin: 0;
    font-family: 'Lilita One', 'Arial Black', system-ui, sans-serif;
    /* 700 при весе файла 400 — синтетическое утолщение, как в старом меню. */
    font-weight: 700;
    font-size: clamp(22px, 5.2vh, 46px);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    /* Flex-элемент в колонке не тянется до ширины контейнера: без max-width
       заголовок вылезал за центральный блок (обрезанный до 118px на ширине
       900) и наезжал под кнопки. С лимитом в 100% работает ellipsis. */
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: 0 0 24px #fe801966, 0 2px 10px #000c;
}
.tb__subtitle {
    margin: 2px 0 0;
    color: #a89984;
    font-size: clamp(10px, 1.6vh, 13px);
    letter-spacing: 0.08em;
    text-align: center;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}
/* Название — вне потока: см. комментарий у .tb про колонки. Ширина
   ограничена половиной полосы, чтобы текст длиннее подписи уходил в
   многоточие, а не наезжал на кнопки. Боковые поля входят в ограничение
   через --tb-pad-x: центр позиционируется от padding box, поэтому поле
   нужно вычесть дважды — по разу на каждый край. По вертикали — строго
   по центру блока (подзаголовка больше нет, центрировать нечему мешать). */
.tb__center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: calc(100% - 2 * (366px + 2 * var(--tb-pad-x)));
    min-width: 0;
    pointer-events: none;
}
/* Кнопки-иконки: фон и обрамление как у .play (матовое стекло + светлая рамка),
   иконка — через ::before маской, а не маской на самой кнопке. Прежний вариант
   клал mask прямо на кнопку и перезаписывал background-color светлым: квадрат
   фона исчезал, оставалась только форма иконки без обрамления — по WCAG
   не хватало контраста фона (3.5:1) и видимой границы цели. Размер в rem:
   5.25rem ≈ 84px при корне 16px, минимум 44px — тач-цель WCAG 2.5.8. */
.tb__btn {
    appearance: none;
    width: max(3rem, 44px);
    height: max(3rem, 44px);
    min-width: 44px;
    min-height: 44px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ebdbb22e;
    border-radius: 6px;
    /* Тот же вид, что у полосы, в миниатюре: градиент светлее сверху и свой
       блик по верхней кромке. Стекла нет — каждая висящая над живым кадром
       blur-область отдельный рекомпозит-проход компоновщика каждый кадр, а
       чипов в полосе семь; фон затемнён с 90% до 92%, блик и тень остаются. */
    background: linear-gradient(180deg, #ebdbb226 0%, #282828ec 60%);
    box-shadow: inset 0 1px 0 #ebdbb22e, 0 4px 14px #00000040;
    cursor: pointer;
    touch-action: manipulation;
    flex: none;
}
.tb__btn::before {
    content: '';
    width: 60%;
    height: 60%;
    background-color: #ebdbb2;
    -webkit-mask: var(--tb-icon) center / contain no-repeat;
    mask: var(--tb-icon) center / contain no-repeat;
}
.tb__btn:hover { border-color: #fe8019; }
.tb__btn:hover::before { background-color: #fe8019; }
.tb__btn:active { border-color: #d65d0e; background: #1d2021; transform: translateY(1px); }
.tb__btn:active::before { background-color: #d65d0e; }
.tb__btn:focus-visible { outline: max(2px, 0.12em) solid #ebdbb2; outline-offset: 3px; }
.tb__btn[disabled] { opacity: 0.5; cursor: default; transform: none; }
/* Подпись под иконкой close-кнопки («Скрыть панель» в две строки). В меню
   она спрятана: там кнопка — обычная иконка в правом ряду, и текст делал бы
   ряд выше без пользы. Показывается только в сцене (см. .tb--scene). */
.tb__cap {
    display: none;
    font-size: max(0.625rem, 10px);
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: #a89984;
    text-align: center;
}
/* Текстовая кнопка «Назад» в полосе: тот же фон/рамка/радиус, что у иконок.
   Треугольник слева от текста — той же маской, что у .tb__btn, поэтому цвет
   берёт из currentColor и меняется вместе с текстом в hover/active. */
.tb__back {
    appearance: none;
    display: inline-flex;
    align-items: center;
    gap: max(0.375rem, 6px);
    min-width: 44px;
    min-height: max(3rem, 44px);
    padding: 0 max(1rem, 12px);
    border: 1px solid #ebdbb22e;
    border-radius: 6px;
    background: linear-gradient(180deg, #ebdbb226 0%, #282828ec 60%);
    box-shadow: inset 0 1px 0 #ebdbb22e, 0 4px 14px #00000040;
    color: #ebdbb2;
    font: inherit;
    font-size: 1rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
}
.tb__back::before {
    content: '';
    width: 0.9em;
    height: 0.9em;
    flex: none;
    background-color: currentColor;
    -webkit-mask: var(--tb-icon) center / contain no-repeat;
    mask: var(--tb-icon) center / contain no-repeat;
}
.tb__back:hover { border-color: #fe8019; color: #fe8019; }
.tb__back:active { border-color: #d65d0e; background: #1d2021; color: #d65d0e; transform: translateY(1px); }
.tb__back:focus-visible { outline: max(2px, 0.12em) solid #ebdbb2; outline-offset: 3px; }
/* Полоса-контейнер для кнопок меню (настройки и прочее): тот же вид, что и
   у иконок, иначе «Настройки» выглядела бы кнопкой из другого экрана. */
.tb__extra { display: flex; align-items: center; gap: max(0.5rem, 8px); }
/* --- Режим сцены -------------------------------------------------------
   Полоса не скрывается, а разрежается: заголовок и статистика уходят
   (перекрывают кадр), вместо статистики в левом углу — кнопка «Назад»,
   справа — чипы кнопок, в центре — фиксированная close-пилюля. Подложка с
   самой полосы снята целиком: между «Назад» и чипами кадр должен быть
   виден, а close-кнопка в сцене позиционируется от вьюпорта (центр
   экрана). Чипы держат свой фон — стекла на них тоже нет (см. .tb__btn). */
.tb--scene {
    grid-template-columns: max-content minmax(0, 1fr);
    grid-template-rows: auto;
    height: auto;
    min-height: 0;
    max-height: none;
    /* Полоса тянется на всю ширину, но прозрачна и прозрачна для жестов:
       кликабельны только кнопки. Так «Назад» встаёт в левый угол (на место
       статистики), чипы — в правый, а между ними кадр не перекрыт. */
    width: 100%;
    max-width: 100%;
    justify-self: stretch;
    pointer-events: none;
    background: none;
    border-color: transparent;
    box-shadow: none;
}
/* В сцене полоса — только точки клика: иначе её пустая середина
   перехватывала бы жесты камеры. */
.tb--scene > * { pointer-events: auto; }
.tb--scene .tb__center { display: none; }
.tb--scene .tb__slot--left { grid-column: 1; justify-self: start; }
.tb--scene .tb__slot--right { grid-column: 2; justify-self: end; }
/* Close-кнопка («Скрыть панель») в сцене — плавающая пилюля по центру
   верхней кромки экрана, как у игрового HUD: её жмут вслепую, когда нужен
   чистый кадр, и центр находится на ощупь из любой точки экрана. fixed, а
   не absolute: полоса в сцене тянется на всю ширину, но центр пилюли должен
   совпадать с центром экрана. Подпись стоит справа от иконки (в две строки)
   и объясняет кнопку, которую встречают без наведения курсора (тач). */
.tb--scene .tb__btn--close {
    position: fixed;
    left: 50%;
    top: calc(env(safe-area-inset-top) + max(0.5rem, 8px));
    /* Иконка слева, подпись справа — горизонтальная пилюля. */
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: auto;
    height: auto;
    min-width: 44px;
    min-height: 0;
    padding: 9px 14px 9px 11px;
    transform: translateX(-50%);
}
/* Иконка фиксированного размера: 60% от ширины растянул бы крестик по
   подписи, а не по иконке. */
.tb--scene .tb__btn--close::before { width: 22px; height: 22px; }
.tb--scene .tb__btn--close .tb__cap { display: block; text-align: left; line-height: 1.1; }
/* Высота как у остальных чипов полосы: подпись в две строки при кегле 10px
   укладывается в 48px, поэтому вертикальные паддинги не нужны — иначе
   пилюля торчала бы выше соседних кнопок. */
.tb--scene .tb__btn--close { height: max(3rem, 44px); padding-top: 0; padding-bottom: 0; }
/* :active базовой кнопки затирал бы translateX(-50%) — кнопка прыгала бы
   вправо на полширины при каждом нажатии. */
.tb--scene .tb__btn--close:active { transform: translateX(-50%) translateY(1px); }


/* Узкий экран (телефон в портрете). Правила идут после базовых:
   при равной специфичности выигрывает последнее объявление, а базовые
   .tb__btn и .tb__center стоят выше по файлу и иначе перебили бы эти. */
@media (max-width: 700px) {
    .tb {
        /* Одна колонка и три строки: название, статистика, кнопки. */
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        align-content: center;
        justify-items: stretch;
        gap: 6px 10px;
        /* Двухстрочной полосе 30% экрана много, а на телефонном ландшафте
           (высота 400) это уже 120 пикселей — предел, ниже которого полоса
           съела бы кнопки сцены. */
        min-height: 96px;
        padding-top: 4px;
        padding-bottom: 4px;
    }
    /* Раньше статистика и кнопки стояли на одной строке, но при иконках
       84 пикселя четыре кнопки с отступами занимают 354 из 366 доступных —
       на статистику оставалось 12 пикселей, и она схлопывалась в ноль. */
    .tb__center {
        /* На узком экране название снова в потоке: абсолютное позиционирование
           здесь не мешало бы, но три строки с фиксированным max-width
           (посчитанным под 366 пикселей кнопок) обрезали бы его сильнее,
           чем нужно. */
        position: static;
        transform: none;
        grid-column: 1;
        grid-row: 1;
        max-width: none;
    }
    .tb__slot--left { grid-column: 1; grid-row: 2; }
    .tb__slot--right { grid-column: 1; grid-row: 3; justify-self: end; }
    /* Отступ меньше: четыре кнопки по 84 пикселя с отступом 10 занимали бы
       366, а на 390-пиксельном экране после полей остаётся ровно 366 — в
       один пиксель не влезало. */
    .tb__slot, .tb__extra { gap: 6px; }
    /* Close-кнопка на узком экране возвращается в ряд: фиксированный центр
       экрана здесь пересекается с чипами (390 минус ~330 чипов — центр
       попадает в их левую часть). Подпись остаётся справа от иконки. */
    .tb--scene .tb__btn--close { position: static; transform: none; }
    .tb--scene .tb__btn--close:active { transform: translateY(1px); }
    /* В сцене на узком экране — одна строка: «Назад» слева, чипы справа.
       Базовые правила узкого экрана раскладывали полосу на три строки под
       название и статистику, которых в сцене нет. */
    .tb--scene { grid-template-columns: max-content minmax(0, 1fr); grid-template-rows: auto; }
    .tb--scene .tb__slot--left { grid-column: 1; grid-row: 1; justify-self: start; }
    .tb--scene .tb__slot--right { grid-column: 2; grid-row: 1; }
    /* Чипов в сцене восемь — на 390px в один ряд не влезают: без переноса
       ряд уезжал влево под панель статистики и «Назад». Перенос выравнивает
       строки по правому краю, где и жить чипам сцены. */
    .tb--scene .tb__slot--right { flex-wrap: wrap; justify-content: flex-end; }
}
/* --- Плотность HUD ------------------------------------------------------
   Тонкий HUD ужимает полосу, но не размеры касательных целей: у кнопок
   min-width/min-height: 44px стоят ради WCAG 2.5.8 (см. комментарий у
   .tb__btn), поэтому «худее» здесь означает меньше вертикали, плоский фон
   вместо блика с тенью и более плотный ряд, а не меньшую кнопку.
   Минимальный HUD поверх полосы ничего не убирает: чипы и «Назад» нужны,
   чтобы вернуть интерфейс и выйти из сцены. */
:root.hud-density--skinny .tb {
    padding: max(0.25rem, 4px) max(var(--tb-pad-x), env(safe-area-inset-right)) max(0.25rem, 4px) max(var(--tb-pad-x), env(safe-area-inset-left));
}
:root.hud-density--skinny .tb__slot,
:root.hud-density--skinny .tb__extra { gap: 4px; }
:root.hud-density--skinny .tb__title { font-size: clamp(18px, 4vh, 34px); }
:root.hud-density--skinny .tb__subtitle { font-size: clamp(9px, 1.3vh, 11px); }
:root.hud-density--skinny .tb__cap { font-size: max(0.5625rem, 9px); }
/* Плоская заливка без блика и тени: на 44-пиксельной кнопке блик занимает
   заметную часть площади, а в тонком режиме нужен только силуэт. */
:root.hud-density--skinny .tb__btn,
:root.hud-density--skinny .tb__back {
    background: #282828;
    box-shadow: none;
}
`;function bp(){const e=document.createElement("button");e.className="tb__btn",e.type="button";const t=()=>document.fullscreenElement!==null,n=()=>{const s=t(),o=s?sd:nd;e.style.setProperty("--tb-icon",`url(${JSON.stringify(o)})`);const i=s?"Выйти из полноэкранного режима":"Полноэкранный режим";e.title=i,e.setAttribute("aria-label",i),e.setAttribute("aria-pressed",s?"true":"false")};return e.addEventListener("pointerdown",s=>{s.preventDefault(),!e.disabled&&(t()?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{}))}),document.addEventListener("fullscreenchange",n),n(),{el:e,destroy(){document.removeEventListener("fullscreenchange",n)}}}async function gp(){return(await ie(()=>import("./music-player.BuS4XW11.js"),__vite__mapDeps([0,1,2]))).createMusicPlayer()}function yp(e){const t=document.createElement("style");t.textContent=hp;const n=document.createElement("header");n.className="tb";const s=document.createElement("div");s.className="tb__slot",s.append(e.statsHost);const o=document.createElement("div");o.className="tb__center";const i=document.createElement("h1");i.className="tb__title",i.textContent=e.title,o.append(i);const c=document.createElement("div");c.className="tb__slot tb__slot--right";const m=document.createElement("div");m.className="tb__extra";const l=bp(),f=tp(),p=op(),h=fp(),v=document.createElement("button");v.className="tb__btn tb__btn--close",v.type="button",v.style.setProperty("--tb-icon",`url(${JSON.stringify(fd)})`),v.title="Скрыть панель",v.setAttribute("aria-label","Скрыть панель");const y=document.createElement("span");y.className="tb__cap",y.innerHTML="Скрыть<br>панель",v.append(y),v.addEventListener("pointerdown",d=>{d.preventDefault(),!v.disabled&&e.onToggleChrome()});let b=null,E=null;const S=ws("tb__btn",rd,"Музыка",()=>{const d=C=>{C.open(),e.windows.open("music")};if(E!==null){d(E);return}b??=gp(),b.then(C=>{E=C,e.windows.register({id:"music",root:C.dialog.root,show:()=>C.open(),hide:()=>C.dialog.close()}),d(C)}).catch(()=>{})});c.append(m,ws("tb__btn",id,"Лидеры",()=>{h.open(),e.windows.open("leaders")}),ws("tb__btn",ad,"Журнал разработки",()=>{p.open(),e.windows.open("devlog")}),ws("tb__btn",od,"Об игре",()=>{f.open(),e.windows.open("about")}),S,v,l.el),s.classList.add("tb__slot--left"),n.append(t,s,o,c),e.windows.register({id:"leaders",root:h.dialog.root,show:()=>h.open(),hide:()=>h.dialog.close()}),e.windows.register({id:"about",root:f.dialog.root,show:()=>f.open(),hide:()=>f.dialog.close()}),e.windows.register({id:"devlog",root:p.dialog.root,show:()=>p.open(),hide:()=>p.dialog.close()});const L=[$t(n),$t(f.dialog.root),ks(f.dialog.root),$t(p.dialog.root),ks(p.dialog.root),$t(h.dialog.root),ks(h.dialog.root)];return{root:n,setExtraButtons(d){m.append(d)},setBackButton(d){s.prepend(d)},setSceneMode(d){n.classList.toggle("tb--scene",d)},destroy(){l.destroy(),f.destroy(),p.destroy(),h.destroy();for(const d of L)d();E?.destroy(),n.remove()}}}const _p=`
.win {
    position: relative;
    /* Прямоугольник панели публикуется в CSS-переменных на :root: корни окон
       лежат на document.body (иначе не поднялись бы над тач-панелями и HUD),
       и должны попадать ровно в эту область. Через переменные, а не копированием
       процентов в CSS окон: макет изменится в одном месте — здесь. */
    --win-left: 0px;
    --win-top: 0px;
    --win-width: 100vw;
    --win-height: 60vh;
    /* Без открытого окна блока нет вовсе: пустая стеклянная панель
       перекрывала 3D-фон и собирала клики. Показывается только с окном. */
    display: none;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
    /* Стекло снято — как у полосы и статусбара в сцене (см. topbar.ts,
       menu.ts): окно занимает 70% ширины экрана, то есть это самая большая
       blur-область интерфейса, а backdrop-filter над живым кадром стоит
       отдельного рекомпозит-прохода компоновщика каждый кадр. Фон затемнён
       с 85% до 92% — читаемость текста и элементов управления та же, только
       без преломления. */
    background: #1d2021ec;
    border: 1px solid #ebdbb233;
    border-radius: max(0.375rem, 0.35em);
    padding: max(0.5rem, 8px);
    box-sizing: border-box;
}
.win--open { display: flex; }
/* Полоса с крестиком лежит на document.body, а не внутри панели: корни окон
   тоже на body и перекрывают всю область панели (настройки — z-index 50,
   окна — 150), поэтому кнопка внутри .win оказалась бы под ними и не
   нажималась. Свой z-index выше всех окон, прямоугольник — тот же, что у
   панели (переменные публикуются ниже). */
.win__bar {
    position: fixed;
    right: calc(100vw - var(--win-left, 0px) - var(--win-width, 100vw));
    top: var(--win-top, 0px);
    width: var(--win-width, 100vw);
    height: 52px;
    z-index: 160;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    padding-right: 8px;
    box-sizing: border-box;
    /* Пустая полоса, когда окна нет, не нужна: блок занимает своё место
       и без неё. */
    display: none;
    pointer-events: none;
}
/* Селектор по двум классам на одном узле, а не '.win--open .win__bar':
   полоса лежит на body и НЕ является потомком .win, поэтому правило с
   пробелом не срабатывало — полоса оставалась display:none, и крестик имел
   нулевой размер, то есть был некликабельным. */
.win__bar.win--open { display: flex; }
/* Кликабельна только сама кнопка: иначе полоса во всю ширину окна перехватывала
   бы прокрутку журнала и списка настроек. */
.win__bar > * { pointer-events: auto; }
.win__close {
    appearance: none;
    width: max(2.75rem, 44px);
    height: max(2.75rem, 44px);
    min-width: 44px;
    min-height: 44px;
    padding: 0;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    background: #282828e6;
    cursor: pointer;
    touch-action: manipulation;
    flex: none;
    color: #ebdbb2;
    font: inherit;
    font-size: 1.25rem;
    line-height: 1;
}
.win__close:hover { border-color: #fe8019; color: #fe8019; }
.win__close:active { border-color: #d65d0e; color: #d65d0e; background: #1d2021; transform: translateY(1px); }
.win__close:focus-visible { outline: max(2px, 0.12em) solid #ebdbb2; outline-offset: 3px; }
/* Окна: одно на всё время. Прячем через hidden — правило [hidden] ниже
   обязательно авторское, иначе display:flex базового правила его перебьёт. */
.win__slot { min-height: 0; flex: 1; overflow: auto; }
.win__slot[hidden] { display: none; }
/* Пустая панель: подсказок больше нет (убраны как лишний шум) — пустое место
   просто прозрачно и не перекрывает 3D-фон. */
.win__empty {
    margin: 0;
    align-self: start;
    max-width: 29rem;
    padding: 0;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: transparent;
    background: transparent;
    border: none;
    user-select: none;
    pointer-events: none;
}
/* Заглушка живёт ровно тогда, когда окна нет: при открытом окне она
   занимала бы место в панели и уводила взгляд от содержимого. */
.win--open .win__empty { display: none; }
`,Da=new Set;let Oa=!1;function pf(){return Oa}function mf(e){return Da.add(e),()=>{Da.delete(e)}}function xa(e){if(e!==Oa){Oa=e;for(const t of Da)t(e)}}function xp(e={}){const t=document.createElement("style");t.textContent=_p;const n=document.createElement("div");n.className="win";const s=document.createElement("div");s.className="win__bar";const o=document.createElement("button");o.className="win__close",o.type="button",o.textContent="✕",o.title="Закрыть окно",o.setAttribute("aria-label","Закрыть окно"),s.append(o);const i=document.createElement("p");i.className="win__empty",i.textContent="",i.setAttribute("aria-hidden","true"),n.append(t,i),document.body.append(s);const c=new Map,m=[];let l=null,f=null;const p=()=>{for(const k of c.values()){const F=k.id===l;k.root.hidden=!F,F?k.show():k.hide()}n.classList.toggle("win--open",l!==null),s.classList.toggle("win--open",l!==null);for(const k of m)k();h()},h=()=>{const k=n.getBoundingClientRect();if(k.width<=0||k.height<=0)return;const F=document.documentElement.style;F.setProperty("--win-left",`${Math.round(k.left)}px`),F.setProperty("--win-top",`${Math.round(k.top)}px`),F.setProperty("--win-width",`${Math.round(k.width)}px`),F.setProperty("--win-height",`${Math.round(k.height)}px`)},v={root:n,closeBtn:o,register(k){c.set(k.id,k),k.hide(),k.root.hidden=!0},open(k){c.has(k)&&(l=k,xa(!0),f={x:E,y:S,until:performance.now()+d},p())},close(){l!==null&&(l=null,xa(!1),p())},toggle(k){l===k?v.close():v.open(k)},active(){return l},onChange(k){return m.push(k),()=>{const F=m.indexOf(k);F>=0&&m.splice(F,1)}},destroy:()=>{}};o.addEventListener("pointerdown",k=>{k.preventDefault(),v.close()});const y=new ResizeObserver(h);y.observe(n),window.addEventListener("resize",h),window.addEventListener("orientationchange",h),h();const b=k=>{k.key==="Escape"&&(l!==null?(k.stopPropagation(),v.close()):e.onEmptyEscape?.())};document.addEventListener("keydown",b);let E=0,S=0;const L=k=>{E=k.clientX,S=k.clientY},d=400,C=32,R=k=>{if(l===null)return;const F=c.get(l);if(!F||F.root.hidden)return;const D=k.target;if(!(D instanceof Element)||F.root.contains(D)||l==="settings")return;const N=f;if(N!==null&&performance.now()<N.until){const H=k.clientX-N.x,j=k.clientY-N.y;if(H*H+j*j<=C*C)return}if(D.closest(".tb")!==null)return;const x=k.clientX-E,$=k.clientY-S;x*x+$*$>64||v.close()};return document.addEventListener("pointerdown",L,!0),document.addEventListener("click",R),v.destroy=()=>{xa(!1),y.disconnect(),window.removeEventListener("resize",h),window.removeEventListener("orientationchange",h),document.removeEventListener("keydown",b),document.removeEventListener("pointerdown",L,!0),document.removeEventListener("click",R),s.remove();const k=document.documentElement.style;k.removeProperty("--win-left"),k.removeProperty("--win-top"),k.removeProperty("--win-width"),k.removeProperty("--win-height")},v}const vp=`
/* Текст интерфейса не выделяется: двойной клик по кнопке или долгое нажатие
   на тач выделяли подпись и оставляли синий блок поверх игры. Правило лежит
   в CSS меню, потому что меню — единственный стиль, который есть на
   странице всегда (остальные модули подгружаются вместе со сценой). */
button, label, input, select, textarea, .menu, .settings, .cluster,
.touch-controls, .rswitch-wrap, .mini-stats, .tb, .dlg {
    -webkit-user-select: none;
    user-select: none;
    /* iOS: долгое нажатие вызывает системное меню с «Копировать». */
    -webkit-touch-callout: none;
}

/* Меню — прозрачный оверлей ПОВЕРХ 3D-фона: свой фон у него больше нет,
   иначе канвас под ним не видно. Читаемость держит градиент + текст-тень.
   
   Раскладка — три строки сетки, как того просит макет главного экрана:
     1. topbar   — 30% высоты, на всю ширину (статистика, название, кнопки);
     2. рабочая  — остаток высоты, две колонки 30% / 70%:
                   слева панель кнопок меню, справа окна (настройки, журнал);
     3. statusbar— 20% высоты, на всю ширину, в самом низу.
   Проценты по высоте, а не flex-grow: полоса и статус заданы явно и не должны
   разъезжаться при смене содержимого средней строки. Средняя строка —
   minmax(0, 1fr), иначе её содержимое (окно настроек со своим скроллом)
   распирало бы сетку и выталкивало статус за экран. */
.menu {
    position: fixed;
    inset: 0;
    z-index: 10;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    gap: max(0.5rem, 8px);
    color: #ebdbb2;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    /* 300ms задержки на тапе не будет: manipulation убирает double-tap-zoom,
       safe-area учитываем, чтобы кнопки не уходили под чёлку. */
    touch-action: manipulation;
    padding: env(safe-area-inset-top) env(safe-area-inset-right)
             env(safe-area-inset-bottom) env(safe-area-inset-left);
    box-sizing: border-box;
}
/* Обёртка средней строки: центрирует контент и даёт боковые поля.
   Сама сетка 30% / 70% живёт в .mid и ограничена 88rem (~1408px): на широких
   экранах по бокам остаются воздушные поля и контент не расползается на всю
   ширину — так его удобнее воспринимать. На узких экранах поля минимальные. */
.wrap {
    display: grid;
    min-height: 0;
    min-width: 0;
    overflow: hidden;
    padding: max(1rem, 16px) max(1rem, 16px) 0;
    box-sizing: border-box;
}
/* Средняя строка: две колонки. Ширина 30% / 70% задана макетом: слева панель
   кнопок меню (30%), справа окна (70% = остаток). */
.mid {
    display: grid;
    grid-template-columns: 30% minmax(0, 1fr);
    gap: max(1rem, 16px);
    min-height: 0;
    min-width: 0;
    width: min(100%, 88rem);
    margin-inline: auto;
    box-sizing: border-box;
}
@media (min-width: 110rem) {
    /* Очень широкие экраны: чуть больше воздуха между колонками. */
    .mid { gap: max(1.5rem, 24px); }
}
/* Большие экраны: блок окон — правая ПОЛОВИНА экрана, а не 70% от полосы в
   88rem. Левая половина остаётся на машину и панель кнопок: настроил ползунок
   и сразу видишь, что изменилось, — окно для этого не нужно ни закрывать, ни
   сдвигать. Ниже 88rem полоса и так занимает почти весь экран, и половина
   ширины оставила бы окну нечитаемую колонку. */
@media (min-width: 88rem) {
    .mid {
        width: 100%;
        grid-template-columns: minmax(0, 1fr) 50%;
    }
    /* Панель кнопок меню не расползается на половину экрана: остаётся колонкой
       читаемой ширины у левого края. */
    .actions { max-width: 34rem; }
    /* В сцене .mid — одна колонка (её задаёт midEl.style в setChrome), поэтому
       половину задаёт само окно: прижато к правому краю полосы и шириной ровно
       в половину экрана. Прямоугольник окон публикуется по rect этого узла
       (ui/window-host.ts), так что настройки встают ровно туда же. */
    .menu--scene .win {
        justify-self: end;
        width: 50vw;
    }
}
/* Подложка под текст: фон теперь светлое небо окружения (настройки
   скопированы с демо — см. menu-environment), а заголовок без подложки
   падал по контрасту. Градиент тёмный сверху (полоса, статус) и прозрачный
   к низу — машина и пол остаются видны. */
.menu::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    background: linear-gradient(#1d2021e6 0%, #1d202199 38%, #1d202100 70%);
    pointer-events: none;
}
/* В сцене заголовка нет — подложке нечего затемнять (см. setMode). */
.menu--scene::before { display: none; }
/* В сцене колонка прижата к низу (там «Назад» и статус), но полоса с кнопками
   настроек и полного экрана должна остаться наверху. Автоматический отступ
   съедает свободное место и прижимает полосу к верхней кромке, а остальные
   блоки — к нижней, без ручной раскладки через position. */
.menu--scene .tb { margin-bottom: auto; }
/* В сцене оверлей прозрачен для ввода везде, кроме настоящих панелей:
   подсказка по центру — картинка, а не кнопка. Иначе движение пальца по
   экрану браузер считает панорамированием (у оверлея touch-action: auto) и
   обрывает жест pointercancel'ом: замер на телефоне — 2 pointermove из 12,
   камера поворачивалась на 6° вместо 36°. Ввод возвращают себе панели:
   полоса кнопок, окна, статусбар и плавающая кнопка. */
.menu--scene .wrap,
.menu--scene .mid { pointer-events: none; }
.menu--scene .win,
.menu--scene .tb,
.menu--scene .status,
.menu--scene .chrome-fab { pointer-events: auto; }
.menu--scene .win > * { pointer-events: auto; }
/* Скрытый хром (тогл по Escape на пустой панели или кнопкой в полосе):
   прячутся полоса, статусбар и боковая панель окон — остаётся чистый кадр.
   Специфичность 0,2,0 бьёт .win--open (0,1,0), отдельных !important не нужно. */
.menu--chrome-hidden .tb,
.menu--chrome-hidden .status { display: none; }
.menu--chrome-hidden .win { display: none; }
/* Исключение для сцены: счётчик кадра остаётся. Панель счётчика лежит в
   левом слоте полосы (см. topbar.ts, setStatsHost), поэтому «скрыть панель»
   уносило её вместе с кнопками — а это ровно тот прибор, ради которого
   скрытие и делают: видеть частоту кадра и не видеть интерфейса. Полоса
   поэтому не скрывается целиком, а лишается правого ряда кнопок и «Назад»;
   подложки у неё в сцене и так нет (.tb--scene), так что кадр не закрыт.
   Специфичность 0,3,0 перебивает общее правило выше. */
.menu--scene.menu--chrome-hidden .tb { display: flex; }
.menu--scene.menu--chrome-hidden .tb__slot--right,
.menu--scene.menu--chrome-hidden .tb__back { display: none; }
/* Плавающая кнопка возврата интерфейса: видна только при скрытом хроме
   (сам topbar тогда спрятан вместе с кнопкой скрытия). Стоит там же, где была
   кнопка close — правый верхний угол с теми же отступами полосы, поэтому рука
   находит её на ощупь. Размер как у кнопок полосы, тот же фон/рамка. */
.chrome-fab {
    position: fixed;
    top: calc(env(safe-area-inset-top) + max(0.5rem, 8px));
    right: max(12px, env(safe-area-inset-right));
    z-index: 60;
    display: none;
    width: max(3rem, 44px);
    height: max(3rem, 44px);
    min-width: 44px;
    min-height: 44px;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: 1px solid #ebdbb22e;
    border-radius: 6px;
    background: linear-gradient(180deg, #ebdbb226 0%, #282828ec 60%);
    box-shadow: inset 0 1px 0 #ebdbb22e, 0 4px 14px #00000040;
    cursor: pointer;
    touch-action: manipulation;
}
.chrome-fab::before {
    content: '';
    width: 60%;
    height: 60%;
    background-color: #ebdbb2;
    -webkit-mask: var(--fab-icon) center / contain no-repeat;
    mask: var(--fab-icon) center / contain no-repeat;
}
.chrome-fab:hover { border-color: #fe8019; }
.chrome-fab:hover::before { background-color: #fe8019; }
.chrome-fab:active { border-color: #d65d0e; background: #1d2021; transform: translateY(1px); }
.chrome-fab:active::before { background-color: #d65d0e; }
.chrome-fab:focus-visible { outline: max(2px, 0.12em) solid #ebdbb2; outline-offset: 3px; }
.menu--chrome-hidden .chrome-fab { display: inline-flex; }
@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    /* swap: без шрифта заголовок не прыгает по метрикам — падает на
       фолбэк и откатывается, когда файл приедет. */
    font-display: swap;
    src: url(${JSON.stringify(Gr)}) format('truetype');
}
/* Панель кнопок меню — левая колонка 30%. Сверху «Играть» (единственный вход
   в игру), ниже вертикальный список пунктов: иконка слева, подпись справа.
   Именно список, а не вторая колонка кнопок — по вертикали панель растёт
   медленно и не отжимает машину на фоне. */
.actions {
    display: flex;
    flex-direction: column;
    gap: max(0.75rem, 12px);
    align-items: stretch;
    justify-content: center;
    min-width: 0;
    width: min(100%, 25rem);
    /* По умолчанию грид растянул бы панель на всю высоту рабочей строки, и
       список из шести строк висел бы в середине пустой коробки. Панель по
       содержимому и прижата к верху колонки — как список разделов на макете. */
    align-self: start;
    overflow: auto;
    /* Стекло снято — как у окон и полосы (см. window-host.ts, topbar.ts):
       панель занимает всю ширину колонки и висит над живым кадром, а
       backdrop-filter над канвасом пересчитывается компоновщиком каждый кадр.
       Фон затемнён с 85% до 92%. */
    background: #1d2021ec;
    border: 1px solid #ebdbb233;
    border-radius: max(0.375rem, 0.35em);
    padding: max(0.75rem, 12px);
    box-sizing: border-box;
}
/* «Играть» — крупная кнопка во всю ширину панели. Акцент (оранжевая рамка и
   подпись) отличает единственный действующий вход от списка разделов, где
   всё остальное пока заглушки: без этого панель читается как меню настроек. */
.play {
    appearance: none;
    border: 1px solid #ebdbb255;
    /* Матовые прозрачные: плоская тёмная заливка без глянца и свечения, без
       стекла. Заливка 92% — компромисс с WCAG: на яркой ливрее за кнопкой 60%
       давали 3.5:1, 92% держат ≥4.9:1. Disabled-вид под WCAG не подпадают. */
    background: #282828ec;
    color: inherit;
    font: inherit;
    font-size: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    padding: 0.75rem 1rem;
    /* Универсальное скругление: минимум 6px + доля от кегля, поэтому растёт
       вместе со шрифтом (зум, крупные экраны, пользовательские настройки),
       а на мелких не схлопывается в ноль. Чистые px от разрешения не
       зависят вовсе (CSS-пиксель — угловая мера), em добавляет масштаба. */
    border-radius: max(0.375rem, 0.35em);
    cursor: pointer;
    min-height: 2.75rem; /* комфортная цель для пальца, ≥44px */
}
.play--go {
    padding: 1.125rem 1rem;
    border-color: #fe8019;
    color: #fe8019;
    font-family: 'Lilita One', 'Arial Black', system-ui, sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.14em;
}
.play--go:hover { border-color: #fe8019; background: #fe801926; color: #fabd2f; }
.play--go:active { border-color: #d65d0e; background: #1d2021; color: #d65d0e; }
.play:hover { border-color: #fe8019; color: #fe8019; background: #3c3836; }
.play:active { border-color: #d65d0e; color: #d65d0e; background: #1d2021; transform: translateY(1px); }
.play:focus-visible { outline: max(2px, 0.12em) solid #ebdbb2; outline-offset: 4px; }
.play[disabled] { opacity: 0.5; cursor: progress; }

/* --- Список пунктов: иконка слева, подпись справа ---------------------- */
.actions__list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 0;
    padding: 0;
    list-style: none;
}
.mitem {
    appearance: none;
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    /* Отдельный min-height 44px, а не общий с .play: у пункта нет рамки, и та
       же цель для пальца даётся высотой строки, а не размером оформления. */
    min-height: 44px;
    padding: 8px 10px;
    border: 0;
    border-radius: max(0.25rem, 0.35em);
    background: transparent;
    color: #ebdbb2;
    font: inherit;
    font-size: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: left;
    cursor: pointer;
    touch-action: manipulation;
}
.mitem::before {
    content: '';
    width: 22px;
    height: 22px;
    flex: none;
    background-color: currentColor;
    -webkit-mask: var(--mitem-icon) center / contain no-repeat;
    mask: var(--mitem-icon) center / contain no-repeat;
}
.mitem:hover { background: #3c3836; color: #fe8019; }
.mitem:active { background: #1d2021; color: #d65d0e; }
.mitem:focus-visible { outline: 1px solid #ebdbb2; outline-offset: -1px; }
/* Заглушки разделов: пункт есть, работать нечему. Не гасим до невидимости —
   иначе список читается как сломанный, а человек должен видеть, что разделы
   запланированы и придут позже. */
.mitem[disabled] {
    color: #a89984;
    opacity: 0.55;
    cursor: default;
}
.mitem[disabled]:hover { background: transparent; color: #a89984; }
/**
 * Статусбар — нижняя строка сетки на всю ширину, прибит к низу экрана.
 * Текст по центру. Плотный фон + светлая рамка как у остальных панелей.
 *
 * Раскладка — три колонки 1fr auto 1fr: текст в средней центрируется по
 * экрану независимо от блока записи справа. Вариант с flex и распоркой
 * уводил подпись влево на половину ширины кнопки, и при старте записи
 * подсказка прыгала бы примерно на 100 пикселей. */
.status {
    position: sticky;
    bottom: 0;
    z-index: 5;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: max(0.5rem, 8px);
    padding: max(0.5rem, 8px) max(1rem, 16px);
    box-sizing: border-box;
    font-size: 0.8125rem;
    line-height: 1.4;
    text-align: center;
    min-height: 0;
    overflow: hidden;
    /* Статусбар — самая широкая прозрачная площадь HUD: он тянется на всю
       ширину экрана прямо под живым кадром, и blur на нём стоил бы
       отдельного рекомпозит-прохода компоновщика каждый кадр (в сцене ради
       этого он уже гасился правилом .menu--scene). Теперь стекла нет нигде,
       фон затемнён с 85% до 92% — читаемость подсказки и приборов та же. */
    background: #1d2021ec;
    border: 1px solid #ebdbb233;
    border-radius: max(0.375rem, 0.35em);
}
/* Плотность HUD (см. ui/hud-density.ts): статусбар ужимается по вертикали и
   текстом — приборы и подсказка остаются, но полоса отдаёт кадру меньше. */
:root.hud-density--skinny .status {
    padding: max(0.25rem, 4px) max(0.5rem, 8px);
    font-size: 0.75rem;
}
/* HUD в канвасе (ui/hud-canvas.ts): приборы и компас рисуются внутри игрового
   канваса, поэтому непрозрачный фон статусбара перекрыл бы их. Фон и рамку
   в этом режиме рисует сам HUD (ui/scene-hud.ts) — здесь остаётся только
   подсказка, а габариты статусбара сохраняются, чтобы место приборов было
   известно. */
:root.hud-in-canvas .status {
    background: transparent;
    border-color: transparent;
}
.status__text {
    grid-column: 2;
    justify-self: center;
    min-width: 0;
    background: transparent;
    padding: 0.25rem 0.875rem;
    border-radius: max(0.375rem, 0.35em);
    overflow: hidden;
    text-overflow: ellipsis;
}
/* Левая ячейка статусбара: приборы машины (ui/cluster.ts). */
.status__cluster {
    grid-column: 1;
    justify-self: start;
    min-width: 0;
    display: flex;
    align-items: center;
}
/* Портрет телефона: подсказки и фразы статусбара прячем — клавиатурная
   подсказка на таче бессмысленна, а текст съедал ширину у приборов. */
@media (max-width: 700px) and (orientation: portrait) {
    /* HUD в канвасе (ui/hud-canvas.ts): приборы и компас рисуются внутри игрового
   канваса, поэтому непрозрачный фон статусбара перекрыл бы их. Фон и рамку
   в этом режиме рисует сам HUD (ui/scene-hud.ts) — здесь остаётся только
   подсказка, а габариты статусбара сохраняются, чтобы место приборов было
   известно. */
:root.hud-in-canvas .status {
    background: transparent;
    border-color: transparent;
}
.status__text { display: none; }
}
/* --- Запись видео ------------------------------------------------------
   Живёт в статусбаре, а не в приборном кластере: кластер — это приборы, он
   висит над кадром слева снизу и на тач-устройствах вообще уезжает наверх,
   где низ занят педалями. Кнопка записи нужна всегда и именно внизу — там,
   где рука уже лежит на экране. */
.status__record {
    grid-column: 3;
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 8px;
}
.status__recordbtn {
    appearance: none;
    display: flex;
    align-items: center;
    gap: 6px;
    /* 44px — та же цель для пальца, что у кнопок полосы. */
    min-height: 44px;
    padding: 8px 14px;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    background: #282828e6;
    color: #ebdbb2;
    font: 600 11px/1 system-ui, -apple-system, 'Segoe UI', sans-serif;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    touch-action: manipulation;
}
.status__recordbtn:hover { border-color: #fe8019; color: #fe8019; background: #3c3836; }
.status__recordbtn:active { border-color: #d65d0e; color: #d65d0e; background: #1d2021; transform: translateY(1px); }
.status__recordbtn:focus-visible { outline: 1px solid #ebdbb2; outline-offset: 2px; }
.status__recordbtn:disabled { opacity: 0.45; cursor: default; }
/* Точка-индикатор: пустая до записи, оранжевая и мигает — идёт. */
.status__dot {
    width: 8px;
    height: 8px;
    flex: none;
    border-radius: 50%;
    border: 1px solid currentColor;
}
.status__recordbtn.live { border-color: #fe8019; color: #fe8019; background: #fe801933; }
.status__recordbtn.live .status__dot { background: #fe8019; animation: status-blink 1s steps(2, end) infinite; }
@keyframes status-blink { 50% { opacity: 0.25; } }
.status__recordstate {
    font-size: 11px;
    color: #a89984;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
/* Полоса упаковки файла: она появляется только на финальной стадии, когда
   кадры уже закодированы и остаётся свести их в контейнер. */
.status__recordbar {
    width: 96px;
    height: 6px;
    flex: none;
    overflow: hidden;
    border: 1px solid #ebdbb255;
    border-radius: 999px;
    background: #1d2021;
}
.status__recordbar > span {
    display: block;
    width: 0%;
    height: 100%;
    background: #fe8019;
}
/* Вне сцены записи нет: кодировщик живёт в сцене, и кнопка в меню только
   вводила бы в заблуждение. */
.status__record[hidden] { display: none; }
/* Узкий экран: панель кнопок и окна в одну колонку. При 640 пикселях ширины
   30% — это 192, а окно настроек (девять вкладок, списки) в такую колонку
   не влезает и уходило в горизонтальный скролл. Статусбар ниже 20% не
   опускаем: иначе он съест подсказку по управлению в сцене. */
@media (max-width: 640px) {
    .wrap {
        padding: max(0.5rem, 8px) max(0.5rem, 8px) 0;
    }
    .mid {
        grid-template-columns: 1fr;
        grid-template-rows: auto minmax(0, 1fr);
        gap: 12px;
        width: 100%;
    }
    .actions .play { width: 100%; max-width: none; }
.actions .mitem { width: 100%; }
@media (max-width: 640px) {
    /* Список пунктов на телефоне: две колонки, иначе пять строк по 44
       пикселя отжимают окна и статусбар на треть экрана. */
    .actions__list { flex-direction: row; flex-wrap: wrap; }
    .actions .mitem { flex: 1 1 45%; }
}
`,wp={idle:"",starting:"готовлю…",recording:"идёт",encoding:"упаковываю файл…",saving:"сохраняю…",error:"не вышло"},Ep=["recording","encoding","saving"],va=["Одно не рождается без другого: оболочка без души лишь кукла, душа без оболочки — призрак.","Сон совести рождает чудовищ.","У нас нет формы, и мы страшимся этого.","В здравом теле, витает здравый дух, а значит и душа."];class Sp{statsHost;clusterHost;settings;windows;root;playBtn;backBtn;settingsItem;modes;actionsEl;midEl;statusEl;statusText;recordRow;recordBtn;recordDot;recordLabel;recordState;recordBar;recordFill;idleIndex=-1;topbar;chromeHidden=!1;autosave;uiSoundDetach=[];constructor(t,n){this.root=document.createElement("div"),this.root.className="menu";const s=document.createElement("style");s.textContent=vp,this.windows=xp({onEmptyEscape:()=>{this.setChromeHidden(!this.chromeHidden)}}),this.statsHost=document.createElement("div"),this.topbar=yp({statsHost:this.statsHost,title:"BLEND ARS",subtitle:"",windows:this.windows,onToggleChrome:()=>{this.setChromeHidden(!0)}}),this.playBtn=document.createElement("button"),this.playBtn.className="play play--go",this.playBtn.type="button",this.playBtn.textContent="Играть",this.playBtn.addEventListener("pointerdown",v=>{v.preventDefault(),!this.playBtn.disabled&&(Ae("click"),this.modes.open(),this.windows.open("modes"))});const o=document.createElement("ul");o.className="actions__list";const i=[["Контейнеры",cd],["Миссии",ld],["Гараж",dd],["Магазин",ud]];for(const[v,y]of i){const b=document.createElement("li"),E=document.createElement("button");E.className="mitem",E.type="button",E.textContent=v,E.disabled=!0,E.title=`${v}: раздел в разработке`,E.style.setProperty("--mitem-icon",`url(${JSON.stringify(y)})`),b.append(E),o.append(b)}this.settingsItem=document.createElement("button"),this.settingsItem.className="mitem",this.settingsItem.type="button",this.settingsItem.textContent="Настройки",this.settingsItem.style.setProperty("--mitem-icon",`url(${JSON.stringify(cr)})`),this.settingsItem.addEventListener("pointerdown",v=>{v.preventDefault(),!this.settingsItem.disabled&&(Ae("click"),this.openSettings())});{const v=document.createElement("li");v.append(this.settingsItem),o.append(v)}this.modes=Sd(v=>{Ae("click"),this.modes.dialog.close(),this.windows.close(),n.onScene(v)}),this.backBtn=document.createElement("button"),this.backBtn.className="tb__back",this.backBtn.type="button",this.backBtn.textContent="Назад",this.backBtn.style.setProperty("--tb-icon",`url(${JSON.stringify(bd)})`),this.backBtn.title="Вернуться в меню",this.backBtn.setAttribute("aria-label","Вернуться в меню"),this.backBtn.style.display="none",this.backBtn.addEventListener("pointerdown",v=>{v.preventDefault(),Ae("click"),n.onBack?.()}),this.settings=Xu();const c=document.createElement("button");c.className="tb__btn",c.type="button",c.style.setProperty("--tb-icon",`url(${JSON.stringify(cr)})`),c.title="Настройки",c.setAttribute("aria-label","Настройки"),c.addEventListener("pointerdown",v=>{v.preventDefault(),!c.disabled&&(Ae("click"),this.openSettings())});const m=document.createElement("div");m.className="tb__extra",m.append(c),this.topbar.setExtraButtons(m),this.topbar.setBackButton(this.backBtn);const l=document.createElement("div");l.className="actions",l.append(this.playBtn,o),this.actionsEl=l,this.statusText=document.createElement("div"),this.statusText.className="status__text",this.statusText.textContent=this.pickIdlePhrase(),this.recordRow=document.createElement("div"),this.recordRow.className="status__record",this.recordRow.hidden=!0,this.recordBtn=document.createElement("button"),this.recordBtn.className="status__recordbtn",this.recordBtn.type="button",this.recordDot=document.createElement("span"),this.recordDot.className="status__dot",this.recordLabel=document.createElement("span"),this.recordLabel.textContent="Запись",this.recordBtn.append(this.recordDot,this.recordLabel),this.recordBtn.addEventListener("pointerdown",v=>{v.preventDefault(),!this.recordBtn.disabled&&(Ae("click"),n.onRecord?.())}),this.recordState=document.createElement("span"),this.recordState.className="status__recordstate",this.recordState.textContent="",this.recordBar=document.createElement("div"),this.recordBar.className="status__recordbar",this.recordFill=document.createElement("span"),this.recordBar.append(this.recordFill),this.recordBar.style.display="none",this.recordRow.append(this.recordBtn,this.recordState,this.recordBar),this.statusEl=document.createElement("div"),this.statusEl.className="status",this.clusterHost=document.createElement("div"),this.clusterHost.className="status__cluster",this.statusEl.append(this.clusterHost),this.statusText.setAttribute("role","status"),this.statusText.setAttribute("aria-live","polite"),this.statusEl.append(this.statusText),this.settings.recordSlot.append(this.recordRow);const f=document.createElement("div");f.className="mid",f.append(l,this.windows.root),this.actionsEl=l,this.midEl=f;const p=document.createElement("div");p.className="wrap",p.append(f);const h=document.createElement("button");h.className="chrome-fab",h.type="button",h.style.setProperty("--fab-icon",`url(${JSON.stringify(hd)})`),h.title="Показать интерфейс",h.setAttribute("aria-label","Показать интерфейс"),h.addEventListener("pointerdown",v=>{v.preventDefault(),Ae("click"),this.setChromeHidden(!1)}),this.root.append(s,this.topbar.root,p,this.statusEl,h),t.append(this.root),_d(()=>$u("uiClick")),xd(),this.uiSoundDetach.push($t(this.root),$t(this.settings.root),ks(this.settings.root),$t(this.modes.dialog.root)),this.windows.register({id:"settings",root:this.settings.root,show:()=>this.settings.open(),hide:()=>this.settings.close()}),this.windows.register({id:"modes",root:this.modes.dialog.root,show:()=>this.modes.open(),hide:()=>this.modes.dialog.close()}),this.settings.close(),this.autosave=Zu({onSaved:v=>{this.setStatus(`Настройки сохранены в пресет «${v}».`)},onNoPreset:()=>{this.setStatus("Настройки применены, но активного пресета нет — сохранять некуда. Сохраните пресет на вкладке «Пресеты».")}})}openSettings(){this.settings.open(),this.windows.open("settings")}setMode(t){const n=t==="scene";this.playBtn.style.display=n?"none":"",this.backBtn.style.display=n?"":"none",this.recordRow.hidden=!n,n&&(this.modes.dialog.close(),this.windows.close()),this.setChromeHidden(!1),this.actionsEl.style.display=n?"none":"",this.midEl.style.gridTemplateColumns=n?"minmax(0, 1fr)":"",this.root.style.background=n?"none":"",this.root.classList.toggle("menu--scene",n)}setChromeHidden(t){this.chromeHidden=t,this.root.classList.toggle("menu--chrome-hidden",t)}isChromeHidden(){return this.chromeHidden}setSceneChrome(t){this.topbar.setSceneMode(t)}statsHostFor(t){return this.statsHost}setBusy(t){this.playBtn.disabled=t,this.settingsItem.disabled=t,this.backBtn.disabled=t,this.modes.setBusy(t),t&&this.setStatus("Инициализация рендера…")}setStatus(t){this.statusText.textContent=t||this.pickIdlePhrase()}setRecordState(t,n){const s=Ep.includes(t);this.recordBtn.classList.toggle("live",s),this.recordBtn.disabled=t==="starting"||t==="encoding"||t==="saving",this.recordLabel.textContent=t==="recording"?"Стоп":"Запись",this.recordBar.style.display=t==="encoding"||t==="saving"?"block":"none",this.recordFill.style.width="0%",this.recordState.textContent=n??wp[t]}setRecordProgress(t){this.recordFill.style.width=`${Math.min(Math.max(t,0),1)*100}%`}pickIdlePhrase(){let t=Math.floor(Math.random()*va.length);return t===this.idleIndex&&(t=(t+1)%va.length),this.idleIndex=t,va[t]??""}destroy(){this.topbar.destroy(),this.modes.destroy(),this.windows.destroy(),this.autosave.destroy();for(const t of this.uiSoundDetach)t();this.root.remove(),this.settings.root.remove()}}const kp=`
/* Палитра — gruvbox dark: текст fg #ebdbb2, выкл. bg2 #504945, вкл. зелёный
   #b8bb26, ручка bg0. Неактивная подпись — opacity .72: на фоне вкладки это
   ≥5:1 (замер; при .45 было 3.02).

   Обрамления нет намеренно: раньше строка была пилюлей с рамкой и заливкой
   поверх ровно такой же строки настроек, и тумблер читался отдельным блоком
   внутри списка. Теперь это ровно та же строка, просто с переключателем. */
.rswitch-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    /* 44px вместо 40: строка теперь кликабельная целиком, и пальцу нужна
       такая же цель, как у кнопок полосы. */
    min-height: 44px;
    box-sizing: border-box;
    font: 600 11px/1 system-ui, -apple-system, 'Segoe UI', sans-serif;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #ebdbb2;
    text-shadow: 0 1px 6px #000c;
    white-space: nowrap;
    /* Кликается вся строка — и подписи, и сам переключатель, поэтому курсор
       и подавление dblclick-зума на контейнере, а не на кнопке. */
    cursor: pointer;
    touch-action: manipulation;
}
.rswitch-wrap--disabled { cursor: default; }
.rswitch-wrap--disabled .rswitch { opacity: 0.45; }
.rswitch__opt {
    /* Подписи больше не индикаторы мимо клика, а часть кнопки: раньше у них
       стоял pointer-events: none, и клик по слову «WebGPU» ничего не делал. */
    user-select: none;
    opacity: 0.72;
}
.rswitch__opt--active { opacity: 1; }
.rswitch {
    appearance: none;
    border: none;
    background: transparent;
    padding: 4px;
    margin: 0;
    /* Сама кнопка не перехватывает курсор и не ловит нажатие отдельно: всё
       делает контейнер, иначе клик по переключателю сработал бы дважды. */
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 56px;
    min-height: 32px;
    border-radius: 999px;
}
/* Hover повторяет состояние, а не всегда оранжевый: оранжевая обводка на
   зелёной пилюле читалась бы как «тут что-то сломалось». */
.rswitch:hover .rswitch__track { stroke: #fabd2f; }
.rswitch[data-state="on"]:hover .rswitch__track { stroke: #c8cb37; }
.rswitch:focus-visible { outline: 1px solid #ebdbb2; outline-offset: 2px; }
.rswitch[disabled] { opacity: 0.45; }
.rswitch__svg { display: block; overflow: visible; }
.rswitch__track {
    fill: #504945;
    stroke: #665c54;
    stroke-width: 1.5;
    transition: fill 160ms ease;
}
/* Включено — зелёный, как у переключателей в остальных вкладках (#b8bb26). */
.rswitch[data-state="on"] .rswitch__track { fill: #b8bb26; stroke: #b8bb26; }
.rswitch__knob {
    fill: #ebdbb2;
    transition: transform 160ms ease;
}
/* Ручка темнеет на зелёном: светлая дала бы контраст 1.45:1 и тонула бы в
   дорожке, тёмный bg0 — 8.2:1. */
.rswitch[data-state="on"] .rswitch__knob { fill: #282828; }
.rswitch[data-state="on"] .rswitch__knob { transform: translateX(22px); }
`,Cp='<svg class="rswitch__svg" viewBox="0 0 48 26" width="48" height="26" aria-hidden="true" focusable="false"><rect class="rswitch__track" x="1" y="1" width="46" height="24" rx="12"></rect><circle class="rswitch__knob" cx="13" cy="13" r="9"></circle></svg>';function Np(e,t){const n=document.createElement("div");n.className="rswitch-wrap";const s=document.createElement("span");s.className="rswitch__opt",s.textContent="WebGL2",s.dataset.val="webgl2";const o=document.createElement("button");o.className="rswitch",o.type="button",o.setAttribute("role","switch"),o.innerHTML=Cp;const i=document.createElement("span");i.className="rswitch__opt",i.textContent="WebGPU",i.dataset.val="webgpu",n.append(s,o,i);const c=()=>{o.disabled||t.onSwitch()};n.addEventListener("click",c),e.append(n);let m="webgl2",l=!1,f="";const p=()=>{const h=m==="webgpu";o.dataset.state=h?"on":"off",o.setAttribute("aria-checked",h?"true":"false"),s.classList.toggle("rswitch__opt--active",!h),i.classList.toggle("rswitch__opt--active",h);const v=h?"WebGL2":"WebGPU";o.title=o.disabled&&f?f:`Переключить на ${v}`,o.setAttribute("aria-label",`Рендер: ${h?"WebGPU":"WebGL2"}. Переключить на ${v}`),n.classList.toggle("rswitch-wrap--disabled",o.disabled),n.setAttribute("aria-disabled",String(o.disabled))};return p(),{setBackend(h){m=h,p()},setBusy(h){l=h,o.disabled=h||!!f,p()},setUnavailable(h){f=h,o.disabled=l||!!h,p()},destroy(){n.remove()}}}const Rp=`
/* Приборы — строка внутри статусбара: фон и рамку даёт сам статусбар,
   виджет их не дублирует. Цвет — от статусбара (inherit), чтобы приборы
   не выглядели чужеродным окном на полосе. */
.cluster {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    box-sizing: border-box;
    color: inherit;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    font-variant-numeric: tabular-nums;
    pointer-events: none;
}
/* Шкала оборотов: холостые у левого края, красная зона от точки
   переключения вверх (её рисует скрипт машины, а не сам прибор). */
.cluster__revs {
    width: 64px;
    height: 4px;
    border-radius: 2px;
    background: #ffffff1f;
    overflow: hidden;
    flex: none;
}
.cluster__revs > span {
    display: block;
    width: 0;
    height: 100%;
    border-radius: 2px;
    background: #ebdbb2cc;
    transition: width 0.06s linear, background-color 0.15s;
}
.cluster__revs > span.redline { background: #fe8019; }
.cluster__dials {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex: none;
}
.cluster__speed {
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
}
.cluster__unit {
    font-size: 11px;
    font-weight: 400;
    opacity: 0.55;
    margin-left: 3px;
}
.cluster__gearbox {
    display: flex;
    gap: 4px;
    align-self: center;
}
.cluster__gearbox > span {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background: #ffffff1a;
    color: #ffffff73;
    font-size: 11px;
    font-weight: 600;
}
.cluster__gearbox > span.engaged {
    background: #ebdbb2e6;
    color: #1d2021;
}
/* Посреди переключения включённая передача гаснет — иначе прибор на эти
   доли секунды выглядит зависшим (так и в примере PlayCanvas). */
.cluster__gearbox.shifting > span.engaged {
    background: #ffffff4d;
    color: #ffffff8c;
}
/* Аккумулятор: газ + тормоз на месте копит заряд, на выпуске горит буст. */
.cluster__boost {
    display: flex;
    align-items: center;
    gap: 5px;
    flex: none;
    font-size: 9px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.8;
}
.cluster__boostbar {
    width: 56px;
    height: 3px;
    border-radius: 2px;
    background: #ffffff1f;
    overflow: hidden;
}
.cluster__boostbar > span {
    display: block;
    width: 0;
    height: 100%;
    background: #7b5cff;
    transition: width 0.08s linear, background-color 0.2s;
}
.cluster__boostbar > span.firing { background: #fe8019; }
/* Узкий экран: подсказка в центре статусбара длинная, и приборы обязаны
   уступать ей место по частям — сначала шкалы, потом коробка передач.
   Скорость остаётся всегда. */
@media (max-width: 1100px) {
    .cluster__revs, .cluster__boost { display: none; }
}
@media (max-width: 820px) {
    .cluster__gearbox { display: none; }
}
/* Плотность HUD (см. ui/hud-density.ts): приборы ужимаются, но ничего не
   исчезает — скорость, передача и заряд остаются читаемыми в любом режиме,
   иначе тонкий HUD превратился бы в «ездить вслепую». */
:root.hud-density--skinny .cluster__speed { font-size: 18px; }
:root.hud-density--skinny .cluster__unit { font-size: 9px; }
:root.hud-density--skinny .cluster__revs { width: 48px; }
:root.hud-density--skinny .cluster__gearbox > span {
    width: 16px;
    height: 16px;
    font-size: 9px;
}
:root.hud-density--skinny .cluster__boostbar { width: 40px; }
`;function On(e,t,n,s,o,i){o<=0||s<=0||(e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(i,o/2,s/2)):e.rect(t,n,s,o),e.fill())}const Ap="#ebdbb2",Es="system-ui, -apple-system, 'Segoe UI', sans-serif",Os=.9;function Lp(e){let t="";return{draw:(s,o,i,c)=>{if(o<=0||i<=0||c<=0)return!1;const m=e(),l=m===null?"none":[Math.round(Math.abs(m.speed)*.9),m.rpm,m.gear,m.shifting?1:0,m.gears.length,Math.round(m.charge*100),Math.round(m.boost*100),o,i,window.innerWidth].join("|");if(l===t)return!1;if(t=l,s.clearRect(0,0,o,i),s.fillStyle="rgba(29, 32, 33, 0.93)",s.fillRect(0,0,o,i),m===null)return!0;s.save(),s.scale(c,c);const f=i/c,p=document.documentElement.classList.contains("hud-density--skinny"),h=window.innerWidth>1100,v=window.innerWidth>820,y=12,b=f/2;let E=0;if(s.textBaseline="middle",s.textAlign="left",h){const R=p?48:64,k=4;s.fillStyle="#ffffff1f",On(s,E,b-k/2,R,k,2);const F=Math.max(m.maxRpm-m.idleRpm,1),D=Math.min(Math.max((m.rpm-m.idleRpm)/F,0),1);D>0&&(s.fillStyle=m.rpm>=m.shiftUpRpm?"#fe8019":"#ebdbb2cc",On(s,E,b-k/2,R*D,k,2)),E+=R+y}const S=p?18:24,L=p?9:11;s.fillStyle=Ap,s.font=`700 ${S}px ${Es}`;const d=`${Math.round(Math.abs(m.speed)*Os)}`;s.fillText(d,E,b);const C=s.measureText(d).width;if(s.font=`400 ${L}px ${Es}`,s.fillStyle="rgba(235, 219, 178, 0.55)",s.fillText("км/ч",E+C+3,b),E+=C+3+s.measureText("км/ч").width+8,v){const R=m.gears.length,k=p?16:20,F=4,D=m.gear<0?0:m.gear;for(let N=0;N<=R;N++){const x=E+N*(k+4),$=N===D;s.fillStyle=$?m.shifting?"#ffffff4d":"#ebdbb2e6":"#ffffff1a",On(s,x,b-k/2,k,k,F),s.fillStyle=$?m.shifting?"#ffffff8c":"#1d2021":"#ffffff73",s.font=`600 ${p?9:11}px ${Es}`,s.textAlign="center",s.fillText(N===0?"R":`${N}`,x+k/2,b),s.textAlign="left"}E+=(R+1)*(k+4)-4+y}if(h){const R=Math.min(Math.max(m.charge,0),1),k=Math.min(Math.max(m.boost,0),1),F=R>0?R:k;s.font=`400 9px ${Es}`,s.fillStyle="rgba(235, 219, 178, 0.8)",s.fillText(R>0?"ЗАРЯД":"БУСТ",E,b);const D=s.measureText("ЗАРЯД").width,N=p?40:56,x=3,$=E+D+5;s.fillStyle="#ffffff1f",On(s,$,b-x/2,N,x,2),F>0&&(s.fillStyle=k>0?"#fe8019":"#7b5cff",On(s,$,b-x/2,N*F,x,2))}return s.restore(),!0},reset(){t=""},destroy(){t=""}}}function Tp(e,t){const n=document.createElement("div");n.className="cluster",n.setAttribute("role","group"),n.setAttribute("aria-label","Приборы машины");const s=document.createElement("div");s.className="cluster__revs";const o=document.createElement("span");s.append(o);const i=document.createElement("div");i.className="cluster__dials";const c=document.createElement("span");c.className="cluster__speed",c.textContent="0";const m=document.createElement("span");m.className="cluster__unit",m.textContent="км/ч";const l=document.createElement("span");l.append(c,m);const f=document.createElement("div");f.className="cluster__gearbox",i.append(l,f);const p=document.createElement("div");p.className="cluster__boost";const h=document.createElement("span");h.textContent="Заряд";const v=document.createElement("div");v.className="cluster__boostbar";const y=document.createElement("span");v.append(y),p.append(h,v),n.append(s,i,p);const b=document.createElement("style");b.textContent=Rp,document.head.append(b);let E=[],S=-1,L=0;const d=()=>{if(L++%4!==0)return;const R=e();if(!R)return;c.textContent=`${Math.round(Math.abs(R.speed)*Os)}`;const k=R.gears.length;if(k!==S){S=k,f.replaceChildren(),E=[];const j=k+1;for(let U=0;U<j;U++){const O=document.createElement("span");O.textContent=U===0?"R":`${U}`,f.append(O),E.push(O)}}const F=R.gear<0?0:R.gear;for(let j=0;j<E.length;j++)E[j]?.classList.toggle("engaged",j===F);f.classList.toggle("shifting",R.shifting);const D=Math.max(R.maxRpm-R.idleRpm,1),N=(R.rpm-R.idleRpm)/D;o.style.width=`${Math.min(Math.max(N,0),1)*100}%`,o.classList.toggle("redline",R.rpm>=R.shiftUpRpm);const x=Math.min(Math.max(R.charge,0),1),$=Math.min(Math.max(R.boost,0),1),H=x>0?x:$;y.style.width=`${H*100}%`,y.classList.toggle("firing",$>0),h.textContent=x>0?"Заряд":"Буст"};n.dataset.cleanup="1",(t??document.body).append(n);const C=window.setInterval(d,1e3/60/4);return{destroy(){window.clearInterval(C),n.remove(),b.remove()}}}const tl="vehicle",ff="vehicleInput",hf="vehicleWheel",Pp="driveCamera",js=5,Mp=50,Fp=8e3,Ip=600;function $p(e,t){return Math.abs(e)>Mp&&t>=Fp}function Bp(e){return e>0?e-1:0}function Dp(e,t){const n={cells:js,max:js,lastSpeedKmh:0,lastEventSpeedKmh:0,lastImpulse:0},s=n,o=t.collision,i=t.script?.get(tl);let c=Number.NEGATIVE_INFINITY,m=!1,l=0;const f=()=>{const v=i?.speed;typeof v=="number"&&Number.isFinite(v)&&(l=Math.abs(v)*Os)};e.on("update",f);const p=v=>{if(m)return;let y=0;for(const S of v.contacts??[]){const L=S.impulse??0;L>y&&(y=L)}const b=Math.abs(i?.speed??0)*Os;if(n.lastSpeedKmh=l,n.lastEventSpeedKmh=b,n.lastImpulse=y,!$p(l,y))return;const E=performance.now();E-c<Ip||(c=E,n.cells=Bp(n.cells),console.info("[lives] удар:",`${Math.round(l)} км/ч по прибору`,"(в событии",`${Math.round(b)} км/ч)`,"· импульс",Math.round(y),"· осталось ячеек",n.cells),e.fire("lives:hit",n.cells),!(n.cells>0)&&(m=!0,e.fire("lives:depleted")))};o?o.on("collisionstart",p):console.warn("[lives] у машины нет collision-компонента — прочность не работает");const h=window;return h.__blendarsLives=s,{view:s,destroy(){e.off("update",f),o?.off("collisionstart",p),h.__blendarsLives===s&&delete h.__blendarsLives}}}const Op={w:220,h:28,pad:8,cellW:18,cellH:10,gap:2,labelSize:12,statusSize:11},jp={w:184,h:24,pad:6,cellW:14,cellH:8,gap:2,labelSize:11,statusSize:11};function nl(){return document.documentElement.classList.contains("hud-density--skinny")?jp:Op}function sl(){const e=nl();return{w:e.w,h:e.h}}const Gp="rgba(0, 0, 0, 0.35)",Hp="rgba(40, 40, 40, 0.93)",Pr="#928374",Up="#d5c4a1",zp="#ebdbb2",ol="#8ec07c",Gs="#fabd2f",wa="#fe8019",Vp="rgba(40, 40, 40, 0.35)",Mr="system-ui, -apple-system, 'Segoe UI', sans-serif",Wp=220,al=4,il=1;function Fr(e,t){const n=e;typeof n.letterSpacing=="string"&&(n.letterSpacing=`${t}px`)}const Kp=typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Yp(e){return e<=il?{text:"CRITICAL",color:Gs}:e<al?{text:"DAMAGED",color:Gs}:{text:"STABLE",color:zp}}function qp(e){return e>=al?ol:Gs}function rl(e){let t=-2,n=0,s=!1,o=!1,i=null,c=0,m=0,l=0;return{draw:(p,h,v,y)=>{if(h<=0||v<=0||y<=0)return!1;const b=e(),E=b===null?-1:Math.max(0,Math.min(b.cells,b.max)),S=b===null?js:Math.max(1,Math.min(b.max,10)),L=performance.now();!Kp&&E>=0&&t>=0&&E<t&&(l=L+Wp);const d=L<l,C=E>=0&&E<=il,R=nl();if(E===t&&S===n&&d===s&&C===o&&R===i&&h===c&&v===m)return!1;if(t=E,n=S,s=d,o=C,i=R,c=h,m=v,p.clearRect(0,0,h,v),E<0)return!0;p.save(),p.scale(y,y);const k=h/y,F=v/y;p.fillStyle=Gp,p.fillRect(0,0,k,F),p.fillStyle=Hp,p.fillRect(0,0,k,F),p.strokeStyle=d?wa:Pr,p.lineWidth=d?2:1,p.strokeRect(.5,.5,k-1,F-1),p.fillStyle=d?wa:C?Gs:ol,p.fillRect(0,3,2,F-6);const D=F/2;p.textBaseline="middle",p.textAlign="left";let N=2+R.pad;Fr(p,R.labelSize*.08),p.font=`700 ${R.labelSize}px ${Mr}`,p.fillStyle=Up,p.fillText("HP",N,D),N+=p.measureText("HP").width+R.pad;const x=D-R.cellH/2;for(let H=0;H<S;H++){const j=N+H*(R.cellW+R.gap);if(H<E&&(p.fillStyle=d?wa:qp(E),p.fillRect(j+1,x+1,R.cellW-2,R.cellH-2),C&&!d)){p.save(),p.beginPath(),p.rect(j+1,x+1,R.cellW-2,R.cellH-2),p.clip(),p.strokeStyle=Vp,p.lineWidth=2,p.beginPath();for(let U=j-R.cellH;U<j+R.cellW;U+=4)p.moveTo(U,x+R.cellH),p.lineTo(U+R.cellH,x);p.stroke(),p.restore()}p.strokeStyle=Pr,p.lineWidth=1,p.strokeRect(j+.5,x+.5,R.cellW-1,R.cellH-1)}N+=S*(R.cellW+R.gap)-R.gap+R.pad;const $=Yp(E);return p.font=`700 ${R.statusSize}px ${Mr}`,p.fillStyle=$.color,p.fillText($.text,N,D),Fr(p,0),p.restore(),!0},reset(){c=0,m=0,i=null},destroy(){c=0,m=0,i=null}}}const Jp=`
/* Фолбэк-путь: слои HUD-канваса не поднялись, панель рисуется своим канвасом
   в DOM. Место то же, что у панели в канвасе: слева сверху, под полосой. */
.lives {
    position: fixed;
    left: 16px;
    top: calc(env(safe-area-inset-top) + 92px);
    z-index: 6;
    pointer-events: none;
}
.lives canvas { display: block; }
/* Узкий экран: полоса компаса (min(62vw, 560px) по центру) дотягивается до
   левого края — панель уезжает под неё, как и в канвасной раскладке. */
@media (max-width: 900px) {
    .lives { top: calc(env(safe-area-inset-top) + 170px); }
}
`;function Xp(e,t){const n=document.createElement("div");n.className="lives",n.setAttribute("role","img");const s=document.createElement("canvas");n.append(s);const o=document.createElement("style");o.textContent=Jp,document.head.append(o),document.body.append(n);const i=s.getContext("2d"),c=rl(e);if(!i)return n.remove(),o.remove(),{destroy(){}};let m=0,l=0,f=0,p=-2,h=0;const v=()=>{h=requestAnimationFrame(v);const y=sl(),b=Math.max(1,Math.min(window.devicePixelRatio||1,2));(y.w!==m||y.h!==l||b!==f)&&(m=y.w,l=y.h,f=b,s.width=Math.round(y.w*b),s.height=Math.round(y.h*b),s.style.width=y.w+"px",s.style.height=y.h+"px",c.reset()),c.draw(i,s.width,s.height,s.width/y.w);const E=e(),S=E===null?-1:E.cells;S!==p&&(p=S,n.setAttribute("aria-label",E===null?"":"Прочность "+E.cells+" из "+E.max))};return h=requestAnimationFrame(v),{destroy(){cancelAnimationFrame(h),c.destroy(),n.remove(),o.remove()}}}const ja=10;function Qp(e,t){const n=e/t,s=Math.floor(n*6),o=n*6-s,i=.25,c=1-.75*o,m=.25+.75*o,l={0:[1,m,i],1:[c,1,i],2:[i,1,m],3:[i,c,1],4:[m,i,1],5:[1,i,c]},[f,p,h]=l[s%6]??[1,1,1];return new Or(f,p,h,1)}function Ea(e,t,n){const s=new Gl;return s.diffuse=new Or(0,0,0),s.emissive=t,s.emissiveIntensity=2,s.blendType=Hl,s.opacity=n,s.depthWrite=!1,s.update(),s}function Zp(e,t,n=ja){let s=null;const o=()=>{try{s??=new AudioContext;const N=s;N.state==="suspended"&&N.resume();const x=N.currentTime+.02,$=N.createOscillator();$.type="sawtooth",$.frequency.setValueAtTime(70,x),$.frequency.exponentialRampToValueAtTime(300,x+2.5);const H=N.createBiquadFilter();H.type="lowpass",H.Q.value=6,H.frequency.setValueAtTime(180,x),H.frequency.exponentialRampToValueAtTime(1800,x+2.5);const j=N.createGain();j.gain.setValueAtTime(1e-4,x),j.gain.exponentialRampToValueAtTime(.22,x+2.4),j.gain.setValueAtTime(.22,x+2.5),j.gain.linearRampToValueAtTime(0,x+2.7),$.connect(H).connect(j).connect(N.destination),$.start(x),$.stop(x+2.8);const U=2.4,O=N.createBufferSource(),z=N.createBuffer(1,Math.ceil(N.sampleRate*U),N.sampleRate),fe=z.getChannelData(0);for(let Ce=0;Ce<fe.length;Ce++)fe[Ce]=Math.random()*2-1;O.buffer=z;const xe=N.createBiquadFilter();xe.type="bandpass",xe.Q.value=2.5,xe.frequency.setValueAtTime(250,x+2.5),xe.frequency.exponentialRampToValueAtTime(5200,x+4.6);const ue=N.createGain();ue.gain.setValueAtTime(1e-4,x+2.5),ue.gain.exponentialRampToValueAtTime(.3,x+2.62),ue.gain.exponentialRampToValueAtTime(.001,x+4.8),O.connect(xe).connect(ue).connect(N.destination),O.start(x+2.5),O.stop(x+4.9)}catch{}},i=new Zt("checkpoints");t.addChild(i);const c=(N,x)=>{const $=new sr(N,120,x),H=new sr(N,-20,x),j=e.systems.rigidbody?.raycastFirst($,H);return j?j.point.y:0},m=(N,x)=>{const $=c(N,x);return Math.abs(c(N+4,x)-$)<1.2&&Math.abs(c(N,x+4)-$)<1.2},l=N=>{let x={x:0,z:0,y:0};for(let $=0;$<8;$++){const H=N/n*Math.PI*2+Math.random()*.6,j=60+Math.random()*200,U=Math.cos(H)*j,O=Math.sin(H)*j;if(x={x:U,z:O,y:c(U,O)},m(U,O))return x}return x},f=e.graphicsDevice,p=new oa({ringRadius:4,tubeRadius:.14,sectorAngle:360,segments:48,sides:10}),h=new oa({ringRadius:2.6,tubeRadius:.12,sectorAngle:360,segments:36,sides:10}),v=new oa({ringRadius:1.5,tubeRadius:.1,sectorAngle:360,segments:24,sides:8}),y=new jl({radius:.35,height:60,heightSegments:1,capSegments:12}),b=_s.fromGeometry(f,p),E=_s.fromGeometry(f,h),S=_s.fromGeometry(f,v),L=_s.fromGeometry(f,y),d=[],C=new Map;for(let N=0;N<n;N++){const{x,z:$,y:H}=l(N),j=Qp(N,n),U=new Zt(`checkpoint-${N}`);U.setPosition(x,H+.35,$);const O=(X,oe,he,re)=>{const be=new Zt("ring");return be.addComponent("render",{meshInstances:[new nr(X,oe)],castShadows:!1,receiveShadows:!1}),be.setEulerAngles(he,0,re),U.addChild(be),be},z=Ea(f,j,.9),fe=Ea(f,j,.55),xe=Ea(f,j,.28),ue=O(b,z,0,0),Ce=O(E,fe,66,24),J=O(S,fe,108,-30),se=new Zt("beam");se.addComponent("render",{meshInstances:[new nr(L,xe)],castShadows:!1,receiveShadows:!1}),se.setLocalPosition(0,30,0),U.addChild(se),i.addChild(U);const Q={info:{id:N,x,z:$,color:Math.round(j.r*255)<<16|Math.round(j.g*255)<<8|Math.round(j.b*255)},node:U,rings:[ue,Ce,J],beam:se,mats:[z,fe],beamMat:xe,state:"alive",t:0};d.push(Q),C.set(U,Q)}const R=N=>{for(const x of d){if(x.state==="alive"){x.rings[0]?.rotate(0,N*50,0),x.rings[1]?.rotate(N*30,N*-70,0),x.rings[2]?.rotate(N*-45,0,N*60);continue}x.t+=N;const $=x.t;if($<2.5){const H=$/2.5,j=1-(1-H)*(1-H),U=1+1.3*j;x.node.setLocalScale(U,U,U);const O=N*10*j;x.rings[0]?.rotate(0,O*50,0),x.rings[1]?.rotate(O*30,O*-70,0),x.rings[2]?.rotate(O*-45,0,O*60)}else if($<5){const H=($-2.5)/2.5,j=1-H*H,U=Math.max(2.3*j*j,.001);x.node.setLocalScale(U,U,U);const O=N*(10+H*40);x.rings[0]?.rotate(0,O*50,0),x.rings[1]?.rotate(O*30,O*-70,0),x.rings[2]?.rotate(O*-45,0,O*60),x.beam.setLocalScale(1,1+H*2.2,1),x.beam.setLocalPosition(0,30+H*45,0),x.beamMat.opacity=.28*(1-H),x.beamMat.update();for(let z=0;z<x.mats.length;z++){const fe=z===0?.9:.55;x.mats[z].opacity=Math.max(fe*(1-H),0),x.mats[z].update()}}}for(let x=d.length-1;x>=0;x--){const $=d[x];$.state==="dying"&&$.t>=5&&($.node.destroy(),e.fire("checkpoint:visited",$.info),d.splice(x,1))}};e.on("update",R);const k=()=>t.findByName("vehicle");let F=0;const D=N=>{if(F+=N,F<.25)return;F=0;const $=k()?.getPosition();if($)for(let H=d.length-1;H>=0;H--){const j=d[H],U=$.x-j.info.x,O=$.z-j.info.z;j.state==="alive"&&U*U+O*O<9*9&&(j.state="dying",j.t=0,o())}};return e.on("update",D),{list:()=>d.map(N=>N.info),destroy(){e.off("update",R),e.off("update",D),s?.close().catch(()=>{}),i.destroy()}}}function cl(){return null}const Ss=55,em={lane:38,zone:32,total:70},tm={lane:26,zone:24,total:50},nm={lane:0,zone:0,total:0};function mi(){const e=document.documentElement.classList;return e.contains("hud-density--minimal")?nm:e.contains("hud-density--skinny")?tm:em}const sm=`
.compass {
    position: fixed;
    left: 50%;
    top: calc(env(safe-area-inset-top) + 92px);
    transform: translateX(-50%);
    z-index: 6;
    width: min(62vw, 560px);
    /* Лента плюс полоса таймера под ней (см. compassMetrics): фон и рамку
       ленты рисует painter внутри канваса, а вокруг всей области — только
       обрезка скруглением. Тень и подложка ушли из CSS: под полосой таймера
       они давали видимый прямоугольник под пустым местом. */
    height: 70px;
    border-radius: 6px;
    /* Стекло заменено на плотный фон: backdrop-filter поверх живого канваса
       заставляет компоновщик пересчитывать размытие каждый кадр (полоса
       шириной min(62vw, 560px) — самая большая прозрачная площадь HUD после
       статусбара). */
    contain: layout paint style;
    overflow: hidden;
    pointer-events: none;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
}
.compass canvas {
    display: block;
    width: 100%;
    height: 100%;
}
/* Уведомление под компасом: событие чекпоинта. Появляется снизу вверх с
   проявлением, через 2.4 с растворяется обратно. Координата считается от низа
   ленты плюс полоса таймера: 92 + 70 + 8. */
.compass-toast {
    position: fixed;
    left: 50%;
    top: calc(env(safe-area-inset-top) + 170px);
    transform: translateX(-50%) translateY(14px);
    z-index: 6;
    padding: 7px 16px;
    border-radius: 6px;
    border: 1px solid #ebdbb22e;
    background: linear-gradient(180deg, #ebdbb226 0%, #282828f0 60%);
    contain: layout paint style;
    box-shadow: inset 0 1px 0 #ebdbb22e, 0 4px 14px #00000040;
    color: #ebdbb2;
    font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04em;
    opacity: 0;
    transition: opacity 0.35s ease-out, transform 0.35s ease-out;
    pointer-events: none;
    white-space: nowrap;
}
.compass-toast--on {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
}
/* Плотность HUD (см. ui/hud-density.ts): полоса ниже, подпись короче, а
   уведомление подтягивается к ней — иначе между ними остаётся пустой
   просвет, который в обычном режиме занимает высота ленты и таймера. В
   минимальном режиме компаса на кадре нет вовсе: это ровно та деталь,
   которая мешает снимать кадр, и потерять её в заезде ничего не значит. */
:root.hud-density--skinny .compass { height: 50px; }
:root.hud-density--skinny .compass-toast {
    top: calc(env(safe-area-inset-top) + 184px);
    padding: 4px 10px;
    font-size: 11px;
}
:root.hud-density--minimal .compass,
:root.hud-density--minimal .compass-toast { display: none; }
`,om={0:"С",45:"СВ",90:"В",135:"ЮВ",180:"Ю",225:"ЮЗ",270:"З",315:"СЗ"};function am(){return mi().total<=0}function ll(e,t,n,s=cl){let o=null;const i=()=>{try{o??=new AudioContext,o.state==="suspended"&&o.resume();const d=o,C=d.currentTime+.01;for(const[R,k]of[880,1318.51].entries()){const F=d.createOscillator(),D=d.createGain();F.type="sine",F.frequency.value=k;const N=C+R*.09;D.gain.setValueAtTime(0,N),D.gain.linearRampToValueAtTime(.16,N+.02),D.gain.exponentialRampToValueAtTime(.001,N+.38),F.connect(D).connect(d.destination),F.start(N),F.stop(N+.42)}}catch{}},c=document.createElement("div");c.className="compass-toast",document.body.append(c);let m=null;const l=d=>{c.textContent=d,c.classList.add("compass-toast--on"),i(),m!==null&&window.clearTimeout(m),m=window.setTimeout(()=>{c.classList.remove("compass-toast--on"),m=null},2400)};let f=-1,p=-1,h="",v="",y=-1,b=0;const E=d=>(d*180/Math.PI+360)%360,S=(d,C)=>{let R=(d-C)%360;return R>=180&&(R-=360),R<-180&&(R+=360),R};return{draw:(d,C,R)=>{if(R===0||C===0)return!1;const k=e();if(k===null)return h!==""?(d.clearRect(0,0,C,R),h="",!0):!1;const F=E(k),D=t(),N=n(),x=s();x!==null&&x.collected!==p?(p>=0&&x.collected>p&&l(x.collected>=x.total?`Все ${x.total} чекпоинтов собраны`:`Чекпоинт ${x.collected} из ${x.total}`),p=x.collected):(N.length!==f&&f>=0&&N.length<f&&x===null&&l(N.length>0?`Чекпоинт собран · осталось: ${N.length}`:"Все чекпоинты собраны!"),f=N.length);let $="";if(x!==null&&x.state!=="idle"){const J=x.state==="running"?Math.max(0,performance.now()-x.startMs):x.lastMs;$=`${Xn(Math.floor(J/100)*100)} · ${x.collected}/${x.total}`}const H=`${C}x${R}|${F.toFixed(2)}|${D?`${D.x.toFixed(1)},${D.z.toFixed(1)}`:""}|${N.length}|${$}`;if(H===h)return!1;h=H;const j=mi(),U=R/(j.total||1),O=Math.round(j.lane*U),z=O;d.save(),d.beginPath(),d.rect(0,0,C,R),d.clip(),d.clearRect(0,0,C,R);const fe=d.createLinearGradient(0,0,0,O);fe.addColorStop(0,"rgba(235, 219, 178, 0.15)"),fe.addColorStop(.6,"rgba(40, 40, 40, 0.94)"),d.fillStyle=fe,d.fillRect(0,0,C,O),d.strokeStyle="rgba(235, 219, 178, 0.18)",d.lineWidth=1,d.strokeRect(.5,.5,C-1,O-1);const xe=C/(Ss*2),ue=C/2,Ce=Math.round((F-Ss)/15)*15;d.textAlign="center",d.textBaseline="middle";for(let J=Ce;J<=F+Ss;J+=15){const se=ue+S(J,F)*xe,Y=om[(J%360+360)%360];Y!==void 0?(d.fillStyle="#ebdbb2e6",d.font=`600 ${Math.round(O*.34)}px system-ui, sans-serif`,d.fillText(Y,se,O*.42)):J%45===0?(d.fillStyle="#ebdbb280",d.fillRect(se-1,O*.3,2,O*.22)):(d.fillStyle="#ebdbb240",d.fillRect(se-1,O*.36,2,O*.12))}if(d.fillStyle="#fe8019",d.fillRect(ue-1.5,O*.14,3,O*.2),D){const J=[...N].map(Q=>{const X=Q.x-D.x,oe=Q.z-D.z;return{cp:Q,dist:Math.round(Math.hypot(X,oe)),off:S(E(Math.atan2(X,-oe)),F)}}).sort((Q,X)=>Q.off-X.off);let se=-1e9,Y=0;for(const{cp:Q,dist:X,off:oe}of J){const he=`#${Q.color.toString(16).padStart(6,"0")}`;let re=ue+oe*xe;if(Math.abs(oe)>Ss-4){re=ue+Math.sign(oe)*(C/2-14*(C/560)),d.save(),d.translate(re,O*.42),d.rotate(Math.sign(oe)*Math.PI/2),d.fillStyle=he,d.beginPath(),d.moveTo(0,-6*(C/560)),d.lineTo(5*(C/560),3*(C/560)),d.lineTo(-5*(C/560),3*(C/560)),d.closePath(),d.fill(),d.restore();continue}Math.abs(re-se)<34*(C/560)?Y=(Y+1)%2:Y=0,se=re;const Te=5*(C/560);d.fillStyle=he,d.beginPath(),d.moveTo(re,O*.2-Te),d.lineTo(re+Te,O*.2),d.lineTo(re,O*.2+Te),d.lineTo(re-Te,O*.2),d.closePath(),d.fill(),d.fillStyle="#ebdbb2d9",d.font=`500 ${Math.round(O*.26)}px system-ui, sans-serif`,d.fillText(`${X}м`,re,O*(.62+Y*.24))}}if(x!==null&&$!==""){const J=C/560,se=Math.max(10,Math.round(j.zone*.62*U));d.font=`600 ${se}px system-ui, sans-serif`,d.textAlign="center",d.textBaseline="middle",($!==v||se!==y)&&(v=$,y=se,b=d.measureText($).width);const Y=9*J,Q=se+7*J,X=b+Y*2,oe=(C-X)/2,he=z+Math.max(0,(R-z-Q)/2);d.beginPath(),typeof d.roundRect=="function"?d.roundRect(oe,he,X,Q,4*J):d.rect(oe,he,X,Q),d.fillStyle="rgba(29, 32, 33, 0.9)",d.fill(),d.strokeStyle=x.state==="finished"?"#b8bb2680":x.state==="aborted"?"#fabd2f80":"#ebdbb233",d.lineWidth=1,d.stroke(),d.fillStyle=x.state==="finished"?"#b8bb26":x.state==="aborted"?"#fabd2f":"#ebdbb2",d.fillText($,C/2,he+Q/2)}return d.restore(),!0},reset(){h=""},destroy(){m!==null&&window.clearTimeout(m),o?.close().catch(()=>{}),c.remove()}}}function im(e,t,n,s=cl){const o=document.createElement("div");o.className="compass";const i=document.createElement("canvas");o.append(i);const c=document.createElement("style");c.textContent=sm,o.append(c),document.body.append(o);const m=ll(e,t,n,s),l=()=>{const y=Math.min(window.devicePixelRatio||1,2);i.width=Math.round(i.clientWidth*y),i.height=Math.round(i.clientHeight*y)};l(),window.addEventListener("resize",l);let f=-1,p=-1,h=0;const v=()=>{const y=i.getContext("2d");y&&(i.width!==f||i.height!==p)&&(f=i.width,p=i.height,y.clearRect(0,0,i.width,i.height)),y&&m.draw(y,i.width,i.height),h=requestAnimationFrame(v)};return h=requestAnimationFrame(v),{destroy(){cancelAnimationFrame(h),window.removeEventListener("resize",l),m.destroy(),o.remove(),c.remove()}}}function rm(e,t){const n=e.graphicsDevice,s=l=>{const f=new Kl(n,{name:`hud-${l.width}x${l.height}`,format:Yl,width:l.width,height:l.height,mipmaps:!1,minFilter:ar,magFilter:ar,addressU:or,addressV:or,anisotropy:1,premultiplyAlpha:!0,srgb:!0});return f.setSource(l),f};let o=null;const i=[];try{o=new Zt("hud-screen"),o.addComponent("screen",{screenSpace:!0,scaleMode:Ul}),e.root.addChild(o);for(const l of t){const f=document.createElement("canvas"),p=f.getContext("2d",{alpha:!0});if(!p)throw new Error("нет 2d-контекста");const h=new Zt(`hud-${l.name}`);h.addComponent("element",{type:Wl,anchor:new Vl(0,0,0,0),pivot:new zl(0,0),opacity:1,useInput:!1}),o.addChild(h),h.enabled=!1,i.push({layer:l,entity:h,element:h.element,canvas:f,ctx:p,texture:null,sizeKey:"",dirty:!0})}}catch(l){console.warn("[hud] слой HUD не поднялся — HUD остаётся DOM-ом",l);for(const f of i)f.texture?.destroy();return o?.destroy(),{active:!1,destroy(){}}}const c=(l,f)=>{const p=l.layer.rect();if(!p||p.w<=0||p.h<=0)return l.entity.enabled=!1,!1;const h=Math.max(1,Math.round(p.w*f)),v=Math.max(1,Math.round(p.h*f)),y=`${h}x${v}`;if(y!==l.sizeKey){l.sizeKey=y,l.canvas.width=h,l.canvas.height=v;const b=s(l.canvas);l.element.texture=b,l.texture?.destroy(),l.texture=b,l.layer.reset(),l.dirty=!0}return l.element.width=p.w*f,l.element.height=p.h*f,l.entity.setLocalPosition(Math.round(p.x*f),n.height-Math.round((p.y+p.h)*f),0),l.entity.enabled=!0,!0},m=()=>{const l=n.width>0?n.width/Math.max(window.innerWidth,1):1;if(!(l<=0||!Number.isFinite(l)))for(const f of i){if(!f.ctx||!c(f,l))continue;const p=f.texture;if(!p)continue;(f.layer.draw(f.ctx,f.canvas.width,f.canvas.height,l)||f.dirty)&&(f.dirty=!1,p.setSource(f.canvas),p.upload())}};return e.on("prerender",m),{active:!0,destroy(){e.off("prerender",m);for(const l of i)l.texture?.destroy(),l.layer.destroy();o.destroy()}}}function cm(e,t,n,s,o,i){e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(i,o/2,s/2)):e.rect(t,n,s,o)}function lm(e){let t=!1;const n=ll(e.getHeading,e.getVehicle,e.getCheckpoints,e.readRace),s=Lp(e.read),o=rl(e.readLives),i=()=>{if(am())return null;const y=Math.min(window.innerWidth*.62,560),b=mi();if(y<40||b.total<=0)return null;const E=e.safeTop()+(b.lane===26?126:92);return{x:(window.innerWidth-y)/2,y:E,w:y,h:b.total}},c=()=>{const y=e.clusterHost,b=y.parentElement;if(!b||y.offsetParent===null&&b.clientHeight===0)return null;const E=b.getBoundingClientRect();return E.height<4?null:{x:E.left,y:E.top,w:E.width,h:E.height}};return{layers:[(()=>{let y="";return{name:"bar",rect:c,draw(b,E,S,L){const d=`${E}x${S}@${L}`;return d===y?!1:(y=d,b.clearRect(0,0,E,S),b.save(),cm(b,0,0,E,S,Math.max(4,6*L)),b.fillStyle="rgba(29, 32, 33, 0.93)",b.fill(),b.strokeStyle="rgba(235, 219, 178, 0.2)",b.lineWidth=Math.max(1,L),b.stroke(),b.restore(),!0)},reset(){y=""},destroy(){y=""}}})(),{name:"compass",rect:i,draw(y,b,E){return n.draw(y,b,E)},reset(){n.reset()},destroy(){n.destroy()}},{name:"cluster",rect:()=>{const y=e.clusterHost,b=c();if(!b)return null;const E=y.getBoundingClientRect();return{x:E.left>0?E.left:b.x+16,y:b.y,w:Math.min(480,Math.max(b.w,240)),h:b.h}},draw(y,b,E,S){return s.draw(y,b,E,S)},reset(){s.reset()},destroy(){s.destroy()}},{name:"lives",rect:()=>{const y=sl(),b=i(),E=e.safeTop()+92;return b!==null&&16+y.w>b.x-8?{x:16,y:b.y+b.h+8,w:y.w,h:y.h}:{x:16,y:E,w:y.w,h:y.h}},draw(y,b,E,S){return o.draw(y,b,E,S)},reset(){o.reset()},destroy(){o.destroy()}}],destroy(){t||(t=!0,n.destroy(),s.destroy(),o.destroy())}}}let Ir=!1,$r=null;function dl(){return $r??=ie(()=>import("./index.Dp09MIqC.js"),[]).then(e=>e.default),$r}function ul(){try{return new URLSearchParams(location.search).has("vk_app_id")}catch{return!1}}const dm=1e4;async function um(){if(Ir||!ul())return!1;Ir=!0;try{const e=await dl(),t=await Promise.race([e.send("VKWebAppInit"),new Promise((n,s)=>{setTimeout(()=>s(new Error("платформа не ответила на VKWebAppInit")),dm)})]);if(t?.result)return console.info("[vk] VKWebAppInit: платформа подтвердила запуск приложения"),!0;console.warn("[vk] VKWebAppInit: платформа ответила без подтверждения",t)}catch(e){console.warn("[vk] не удалось инициализировать приложение ВКонтакте",e)}return!1}const Sa={uid:"local",name:"Гость",photo:""},pm=8e3;function mm(){return String("6739294").trim()}function fm(e,t,n){return Promise.race([e,new Promise((s,o)=>{setTimeout(()=>o(new Error(n)),t)})])}async function hm(){let e;try{e=new URLSearchParams(location.search)}catch{return Sa}const t=e.get("vk_user_id");if(!t)return Sa;const n=e.get("vk_app_id")??"",s=mm();if(s!==""&&n!==s)return console.warn("[vk] запуск с чужим app_id:",n,"— свой:",s),Sa;const o=`vk:${t}`;if(!ul())return{uid:o,name:"Игрок ВКонтакте",photo:""};try{const i=await dl(),c=await fm(i.send("VKWebAppGetUserInfo"),pm,"платформа не ответила на VKWebAppGetUserInfo"),m=`${c.first_name} ${c.last_name}`.trim();return{uid:o,name:m===""?"Игрок ВКонтакте":m,photo:c.photo_200}}catch(i){return console.warn("[vk] имя игрока не получено",i),{uid:o,name:"Игрок ВКонтакте",photo:""}}}let Br=null;function bm(){return Br??=hm(),Br}function gm(e,t){let n=!1,s=null;const o=dp(e,{total:t,onFinished:c=>{ym(c,()=>n).then(m=>{if(n){m();return}s?.(),s=m})}}),i=window;return i.__blendarsRace=o.view,{view:o.view,abort(){o.abort()},destroy(){n=!0,o.destroy(),s?.(),s=null,i.__blendarsRace===o.view&&delete i.__blendarsRace}}}async function ym(e,t){const n=await bm(),s=lp({uid:n.uid,name:n.name,photo:n.photo,timeMs:e.timeMs});if(console.info("[race] финиш:",Xn(e.timeMs),"· чекпоинтов",e.collected,"из",e.total,"· место",s.rank,"из",s.total,"· игрок",n.uid),t())return()=>{};const{showFinishCard:o}=await ie(async()=>{const{showFinishCard:i}=await import("./finish-card.C5_qSoBB.js");return{showFinishCard:i}},__vite__mapDeps([3,2]));return t()?()=>{}:o({timeMs:e.timeMs,collected:e.collected,total:e.total,outcome:s,identity:n})}function _m(e){let t=0,n=0;const s=e.autoRender,o=()=>{const m=Hc();t=m>0?1e3/m:0,n=t,e.autoRender=t===0?s:!1},i=m=>{t!==0&&(n+=m*1e3,n>=t&&(n=0,e.renderNextFrame=!0))};o(),e.on("update",i);const c=Uc(o);return{destroy(){e.off("update",i),c(),e.autoRender=s}}}let pl=1,Dt=null;function xm(){return Gc()*pl}function bf(e){pl=e,Ga()}function Ga(){Dt?.graphicsDevice&&(Dt.graphicsDevice.maxPixelRatio=xm(),Dt.resizeCanvas(),Dt.updateCanvasSize())}function vm(e){Dt=e,Ga();const t=Uc(()=>{Ga()});return()=>{t(),Dt===e&&(Dt=null)}}const wm=250,Em="menuRenderFps",Sm=`
.mini-stats {
    position: fixed;
    top: max(10px, env(safe-area-inset-top));
    left: max(10px, env(safe-area-inset-left));
    z-index: 130;
    display: none;
    padding: 7px 10px 6px;
    /* Фон непрозрачный: панель висит над живым кадром, а полупрозрачная
       подложка читалась как «стекло» — ради этого вида и держалось
       преломление фона, которое ушло вместе с blur. Прозрачность здесь
       была чистым расходом на перерисовку кадра: цифры под ней всё равно
       приходилось пересобирать каждые 250 мс. */
    background: #0d0a18;
    border: 1px solid #7b5cff44;
    border-radius: 9px;
    color: #d9d3ff;
    font-family: ui-monospace, 'SF Mono', 'Cascadia Mono', Consolas, monospace;
    font-size: 11px;
    line-height: 1.5;
    font-variant-numeric: tabular-nums;
    white-space: pre;
    pointer-events: none;
    text-shadow: 0 1px 2px #000a;
}
/* Узкий экран: в полосе остаётся только первая строка (fps и миллисекунды).
   Четыре строки на телефоне занимали половину 30%-полосы и наезжали на
   машину; остальное и так видно в сцене, где панель возвращается в угол
   (см. Menu.statsHostFor). */
@media (max-width: 700px) {
    .mini-stats--inline > span:not(:first-child) { display: none; }
}
.mini-stats.visible { display: block; }
/* Встроенный режим: панель внутри блока статистики topbar. Позиционирование
   и внешний отступ снимаем — её место задаёт раскладка родителя. */
.mini-stats--inline {
    position: static;
    /* Ограничение ширины обязательно: строки идут с white-space: pre, и без
       предела панель занимала всю левую колонку topbar, а на телефоне
       (390px) ещё и наезжала на название по центру. */
    max-width: 40ch;
    /* В полосе перенос допустим: лучше три коротких строки, чем одна
       обрезанная. Ширину в ch, а не в процентах: панель не должна
       растягиваться на весь экран, иначе пустое место между строк. */
    white-space: pre-wrap;
    overflow: hidden;
    padding: 5px 8px 4px;
    /* В полосе меню панель читается на тёмном фоне самого меню, поэтому
       подложка мягче угловой: она не должна выглядеть отдельным окном. */
    background: #1d2021;
    border-color: #4a4a4a;
}
/* Первая строка — главная (fps и миллисекунды), она чуть крупнее. */
/* Строки — блоки, а не инлайны. Инлайны слипались: «133.3 мсCPU 0.4»
   читалось как одно число (это было и до переезда в полосу, просто панель
   была узкой и бросалось в глаза не сразу). */
.mini-stats > span { display: block; }
.mini-stats > span[hidden] { display: none; }
.mini-stats > span:first-child { color: #fff; font-size: 12px; }
/* Ниже 30 fps цифра краснеет: на глаз это и так видно, но когда панель
   наезжает на интерфейс, цвет читается быстрее. */
.mini-stats > span:first-child.warn { color: #ffb469; }
/* Плотность HUD (см. ui/hud-density.ts): в тонком режиме панель мельчает,
   в минимальном её нет вовсе. Специфичности 0,3,0 хватает, чтобы перебить
   .mini-stats.visible (0,2,0), поэтому !important не нужен. */
:root.hud-density--skinny .mini-stats { padding: 4px 7px 3px; font-size: 10px; }
:root.hud-density--skinny .mini-stats > span:first-child { font-size: 11px; }
:root.hud-density--minimal .mini-stats { display: none; }
`;function km(e=null){const t=document.createElement("div");t.className="mini-stats",t.setAttribute("role","status"),t.setAttribute("aria-label","Статистика кадра");const n=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span"),i=document.createElement("span");t.append(n,s,o,i);const c=document.createElement("style");c.id="mini-stats-style",c.textContent=Sm,document.head.append(c);const m=L=>{t.classList.toggle("mini-stats--inline",L!==null);const d=L??document.body;t.parentElement!==d&&d.append(t)};m(e);let l=null,f=Bs(),p=!1;const h=()=>Ie("fps")||Ie("cpu")||Ie("draw")||Ie("vram"),v=()=>{t.classList.toggle("visible",f&&l!==null&&h())},y=(L,d,C)=>{const R=d.fps,k=R>0&&R<30;if(k!==p&&(p=k,n.classList.toggle("warn",k)),C.fps){const F=d.user.get(Em),D=typeof F=="number"&&F>0?` · рендер ${F}`:"";n.textContent=`${R>0?Math.round(R):"—"} FPS${D} · ${d.frameTime.toFixed(1)} ms`}C.cpu&&(s.textContent=`CPU ${d.cpuUpdateTime.toFixed(1)} / ${d.cpuRenderTime.toFixed(1)} / ${d.cpuPhysicsTime.toFixed(1)} мс`),C.draw&&(o.textContent=`Draw ${ka(d.drawCallCount)} · Прим. ${ka(d.frame.primitives)} · Шейд. ${ka(d.frame.shaders)}`),C.vram&&(i.textContent=`VRAM ${Math.round(d.vramTotalBytes/1048576)} МБ · ${L.graphicsDevice.width}×${L.graphicsDevice.height} ${L.graphicsDevice.isWebGPU?"WebGPU":"WebGL2"}`)},b=()=>{const L=l;if(!L||!f)return;const d={fps:Ie("fps"),cpu:Ie("cpu"),draw:Ie("draw"),vram:Ie("vram")};n.hidden=!d.fps,s.hidden=!d.cpu,o.hidden=!d.draw,i.hidden=!d.vram,y(L,L.stats,d)};v();const E=window.setInterval(b,wm),S=Mc(()=>{f=Bs(),v(),b()});return{setHost(L){m(L),b()},setApp(L){l=L,v(),L&&b()},destroy(){window.clearInterval(E),S(),t.remove(),c.remove()}}}function ka(e){return Number.isFinite(e)?e>=1e6?`${Math.round(e/1e5)}М`:e>=1e4?`${Math.round(e/1e3)}к`:`${Math.round(e)}`:"—"}const Cm="hud-density--skinny",Nm="hud-density--minimal";function Rm(){const e=document.documentElement,t=()=>{const n=Lu();e.classList.toggle(Cm,n!=="full"),e.classList.toggle(Nm,n==="minimal")};return t(),Mc(t)}function gf(){return 1}const Dr="blendars-scrollbar",Am=[".dlg__body",".settings__scroll",".settings__tabs",".actions",".mp__list"],gt=e=>Am.map(t=>`${t}${e}`).join(`,
`),Lm=`
/* Firefox: тонкая полоса, ползунок gray на дорожке bg1. */
@supports not selector(::-webkit-scrollbar) {
    ${gt("")} {
        scrollbar-width: thin;
        scrollbar-color: #928374 #28282899;
    }
}

@media (hover: hover) and (pointer: fine) {
    /* Chromium и WebKit. 12px — под штрих 8px плюс прозрачная рамка ползунка. */
    ${gt("::-webkit-scrollbar")} {
        width: max(0.75rem, 12px);
        height: max(0.75rem, 12px);
    }
    /* Дорожка — тот же тёмный серый, что подложка панелей: полоса читается как
       часть окна, а не как плашка поверх текста. */
    ${gt("::-webkit-scrollbar-track")} {
        background: #28282899;
        border-radius: 999px;
    }
    /* Стрелочные кнопки в старых WebKit — лишний хром. */
    ${gt("::-webkit-scrollbar-button")} {
        display: none;
        width: 0;
        height: 0;
    }
    /* Прозрачная рамка в 2px + background-clip: padding-box оставляют круглый
       штрих 8px, а не прямоугольник во всю ширину полосы. */
    ${gt("::-webkit-scrollbar-thumb")} {
        background: #928374;
        border: 1px solid transparent;
        background-clip: padding-box;
        border-radius: 999px;
    }
    ${gt("::-webkit-scrollbar-thumb:hover")} { background-color: #ebdbb2; }
    ${gt("::-webkit-scrollbar-thumb:active")} { background-color: #fe8019; }
    /* Уголок на пересечении двух полос серым квадратом вылезал бы в углу
       колонки вкладок, где полоса одна. */
    ${gt("::-webkit-scrollbar-corner")} { background: transparent; }
}
`;function Tm(){if(document.getElementById(Dr))return;const e=document.createElement("style");e.id=Dr,e.textContent=Lm,document.head.append(e)}const fi=document.getElementById("app");if(!fi)throw new Error("#app not found");Tm();let le=null,Ha=null,It=null,Ua=null;const Qn={boot:.1,device:.35,decoders:.7,background:.95},_t=new ed(document.body);let Zn=null,za=null,zn=null,es=null,Hs=null,Be=!1,nt=null,Us=null;const Va="blendars.backend";function zs(e){try{e?localStorage.setItem(Va,e):localStorage.removeItem(Va)}catch{}}function Pm(){try{const e=localStorage.getItem(Va);return e==="webgpu"||e==="webgl2"?e:null}catch{return null}}function Mm(){const e=new URLSearchParams(location.search).get("backend");return e==="webgpu"||e==="webgl2"?e:null}let mn=Mm()??Pm();const q=new Sp(fi,{onScene:e=>{fl(q,e)},onBack:()=>{hl(q)},onRecord:()=>{Wm()}});window.__blendarsEnterSmoke=()=>{zm(q)};const Ze=Np(q.settings.backendSlot,{onSwitch:()=>{Um()}});{const e=document.createElement("style");e.textContent=kp,document.head.append(e)}navigator.gpu||Ze.setUnavailable("WebGPU не поддерживается этим браузером");function hi(e,t){const n=t==="scene";e.setMode(t),e.setSceneChrome(n),Vs.setHost(e.statsHostFor(n))}const Vs=km(q.statsHost);Rm();_t.setStage("интерфейс",Qn.boot);window.__blendarsMenuReady=!0;um();Im();function Fm(e){Us?.();const t=vm(e),n=_m(e);Us=()=>{t(),n.destroy()}}async function Im(){try{_t.setStage("пресет настроек",Qn.boot);const{askBootPreset:e}=await ie(async()=>{const{askBootPreset:s}=await import("./boot-preset.CnSwzjQ0.js");return{askBootPreset:s}},__vite__mapDeps([4,2]));if(await e(),mn==="webgpu"){const{confirmWebgpuSwitch:s}=await ie(async()=>{const{confirmWebgpuSwitch:i}=await import("./confirm-dialog.DpA-HaJF.js");return{confirmWebgpuSwitch:i}},[]);await s()||(mn=null,zs(null),q.setStatus("Запуск на WebGL2 — WebGPU не подтверждён"))}const t=await fn((s,o)=>{_t.setStage(s,o??void 0),_t.updateFromResources(),$m()});window.__blendarsEngine={backend:t.backend},window.__blendarsApp=t.app,es=t.backend,Ze.setBackend(t.backend),Vs.setApp(t.app),Fm(t.app),t.backend==="webgpu"&&ml(t),_t.setStage("сцена меню",Qn.background);const{buildMenuBackground:n}=await ie(async()=>{const{buildMenuBackground:s}=await import("./menu-background.DdgSV-qM.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));nt=await n(t.app),window.__blendarsBackgroundReady=!0,Bm(),_t.setStage("готово",1),q.setStatus(""),await _t.hide(),window.__blendarsInteractive=!0,console.info("[blendars] boot complete",t.backend)}catch(e){console.error("[blendars] boot failed",e),_t.setError("Не удалось запустить рендер. Проверьте поддержку WebGPU/WebGL2 в браузере."),window.__blendarsInteractive=!0}}async function $m(){const e=new URLSearchParams(location.search).get("bootDelay");if(!e)return;const t=Number(e);!Number.isFinite(t)||t<=0||await new Promise(n=>setTimeout(n,Math.min(t,3e4)))}async function Bm(){try{const{probeServiceWorker:e}=await ie(async()=>{const{probeServiceWorker:n}=await import("./capabilities.Vl_UvQZj.js");return{probeServiceWorker:n}},[]),t=await e("/blend-ars/sw.js");console.info(t==="registered"?"[blendars] Service Worker зарегистрирован: оффлайн-оболочка доступна":`[blendars] Service Worker: ${t} — оффлайн-старт недоступен`)}catch(e){console.warn("[blendars] регистрация Service Worker не удалась",e)}}function fn(e){return Zn??=Dm(e),Zn}async function Dm(e){const{initEngine:t}=await ie(async()=>{const{initEngine:i}=await import("./engine-bootstrap.DhwMTVj_.js");return{initEngine:i}},__vite__mapDeps([8,2])),n=document.createElement("canvas");n.className="game-canvas",n.style.zIndex="0",document.body.insertBefore(n,fi),za=n;const s=mn??"webgl2";return t(n,{physics:!0,deviceTypes:s==="webgl2"?["webgl2","webgpu"]:["webgpu","webgl2"],skipAdapterProbe:s==="webgpu"&&mn!==null,onStage:(i,c)=>{c===1?e?.(i,Qn.decoders):e?.(i,Qn.device)}})}const Om=5,jm=1e3,Gm=3;function ml(e){let t=0;zn?.();let n=null;const s=m=>{zs(null),bi("webgl2",{persist:!1,restoreScene:!1,reason:m})};let o=e.app.frame,i=0;const c=window.setInterval(()=>{if(document.hidden){o=e.app.frame;return}const m=e.app.frame;m===o?(i++,i>=Gm&&(window.clearInterval(c),s("кадры не идут — вероятно, WebGPU завис на первом кадре"))):(i=0,o=m)},jm);zn=()=>{window.clearInterval(c),n?.(),n=null},ie(async()=>{const{watchWebGpuErrors:m}=await import("./engine-bootstrap.DhwMTVj_.js");return{watchWebGpuErrors:m}},__vite__mapDeps([8,2])).then(({watchWebGpuErrors:m})=>{if(Be){zn?.();return}n=m(e.device,l=>{t++,console.warn(`[blendars] webgpu error #${t}: ${l.slice(0,200)}`),(Hm(l)||t>=Om)&&(window.clearInterval(c),s(l))})})}function Hm(e){return/out of memory|not enough memory/i.test(e)}async function bi(e,t){if(Be)return;Be=!0,Ze.setBusy(!0),t.reason&&console.warn("[blendars] смена рендера:",t.reason.slice(0,200));const{probeWebGpuAdapter:n}=await ie(async()=>{const{probeWebGpuAdapter:i}=await import("./engine-bootstrap.DhwMTVj_.js");return{probeWebGpuAdapter:i}},__vite__mapDeps([8,2])),s=setTimeout(()=>{q.setStatus("Рендер переключается дольше обычного… если не идёт — F9")},25e3);if(e==="webgpu"){const i=await n();if(!i){Ze.setUnavailable("WebGPU не поддерживается этим браузером"),q.setStatus("WebGPU не поддерживается этим браузером"),clearTimeout(s),Ze.setBusy(!1),Be=!1;return}i.stalled?console.warn("[blendars] зонд WebGPU не ответил — пробуем по явному запросу"):i.software&&q.setStatus(`WebGPU: софтверный адаптер (${i.label||"без описания"}) — рендер может упасть`);const{confirmWebgpuSwitch:c}=await ie(async()=>{const{confirmWebgpuSwitch:l}=await import("./confirm-dialog.DpA-HaJF.js");return{confirmWebgpuSwitch:l}},[]);if(!await c()){q.setStatus("Остались на WebGL2 — WebGPU не подтверждён"),clearTimeout(s),Ze.setBusy(!1),Be=!1;return}}const o=yl();o.setStage("смена рендера…");try{zn?.(),zn=null,o.setStage("смена рендера: остановка движка…"),le?.destroy(),le=null,window.__blendarsSceneReady=!1,bl(),gl(),Xa(null),nt?.destroy(),nt=null;const i=await Zn;Zn=null,es=null,Vs.setApp(null),Us?.(),Us=null,i?.detachResize(),i?.app.destroy(),za?.remove(),za=null,mn=e,t.persist&&zs(e),o.setStage(`смена рендера: движок ${e.toUpperCase()}…`);const c=await fn();es=c.backend,window.__blendarsEngine={backend:c.backend},window.__blendarsApp=c.app,Ze.setBackend(c.backend),Vs.setApp(c.app),c.backend==="webgpu"&&ml(c),c.backend!==e&&q.setStatus(`${e.toUpperCase()} недоступен — рендер: ${c.backend.toUpperCase()}`);const m=t.restoreScene===!1?null:Hs;if(m)o.done(),await fl(q,m);else{Hs=null,o.setStage("смена рендера: сцена меню…");const{buildMenuBackground:l}=await ie(async()=>{const{buildMenuBackground:f}=await import("./menu-background.DdgSV-qM.js");return{buildMenuBackground:f}},__vite__mapDeps([5,2,6,7]));nt=await l(c.app),hi(q,"menu"),q.setBusy(!1),c.backend===e&&q.setStatus(""),o.done()}}catch(i){if(console.error("[blendars] смена рендера не удалась",i),t.allowRetry!==!1&&e!=="webgl2"){o.done(),mn="webgl2",zs(null),Be=!1,Ze.setBusy(!1),await bi("webgl2",{persist:!1,allowRetry:!1});return}o.fail("не удалось сменить рендер"),q.setStatus("Не удалось сменить рендер — перезагрузите страницу (F9)")}finally{clearTimeout(s),Ze.setBusy(!1),Be=!1}}async function Um(){Be||es&&await bi(es==="webgpu"?"webgl2":"webgpu",{persist:!0})}async function zm(e){if(!Be){e.setBusy(!0);try{if(await fn(),new URLSearchParams(location.search).get("scene")==="smoke"){const{buildSmokeScene:t}=await ie(async()=>{const{buildSmokeScene:n}=await import("./smoke-scene.Be29kJNB.js");return{buildSmokeScene:n}},__vite__mapDeps([9,2]));nt?.destroy(),nt=null,t((await fn()).app)}e.setStatus("Ангар появится на этапе 4"),e.setBusy(!1)}catch(t){console.error("[blendars] enter game failed",t),e.setStatus("Не удалось открыть сцену"),e.setBusy(!1)}}}async function fl(e,t){if(Be)return;e.setBusy(!0),e.setStatus(t==="maserati"?"Загрузка сцены: мазерати…":"Загрузка сцены…");const n=yl();try{nt?.destroy(),nt=null;const s=await fn(),{buildVehicleScene:o}=await ie(async()=>{const{buildVehicleScene:i}=await import("./vehicle-scene.CsS8_2Gv.js");return{buildVehicleScene:i}},__vite__mapDeps([10,2,8,6]));le=await o(s.app,i=>n.setStage(i),{body:t,onAssetProgress:(i,c)=>n.setStage(i,c)}),hi(e,"scene"),e.setBusy(!1),e.setStatus("WASD / стрелки — ехать, пробел — ручник, R — сброс на месте, Q — плечо камеры"),Hs=t,window.__blendarsSceneReady=!0,Km(s.app),Ym(s.app),Xa(()=>Vm()),n.done()}catch(s){console.error("[blendars] vehicle scene failed",s),e.setStatus("Не удалось загрузить сцену"),n.fail(String(s?.message??s)),e.setBusy(!1)}}async function hl(e){le?.destroy(),le=null,Hs=null,window.__blendarsSceneReady=!1,Xa(null);const t=await fn(),{buildMenuBackground:n}=await ie(async()=>{const{buildMenuBackground:s}=await import("./menu-background.DdgSV-qM.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));nt=await n(t.app),hi(e,"menu"),e.setBusy(!1),e.setStatus(""),bl(),gl()}function Vm(){const e=le?.root.findByName("camera"),t=e?.script?.get(Pp);if(!e||!t)return null;const n=(o,i)=>typeof o=="number"&&Number.isFinite(o)?o:i,s=(o,i,c)=>o<i?i:o>c?c:o;return{read:()=>({yaw:n(t._manualYaw,0),lift:n(t._manualLift,0),zoom:n(t._zoom,1),shoulder:n(t.shoulder,1),distance:n(t.distance,6.4),height:n(t.height,2.5),fov:e.camera?n(e.camera.fov,60):60}),write:o=>{o.yaw!==void 0&&(t._manualYaw=s(o.yaw,-180,180)),o.lift!==void 0&&(t._manualLift=s(o.lift,-.6,3.4)),o.zoom!==void 0&&(t._zoom=s(o.zoom,.55,1.7)),o.shoulder!==void 0&&(t.shoulder=o.shoulder),o.distance!==void 0&&(t.distance=s(o.distance,3,15)),o.height!==void 0&&(t.height=s(o.height,1,6)),o.fov!==void 0&&e.camera&&(e.camera.fov=s(o.fov,40,90))},reset:()=>{t.resetLook()}}}async function Wm(){const e=(t,n)=>{q.setRecordState(t,n)};try{if(!It){const{GameRecorder:t}=await ie(async()=>{const{GameRecorder:o}=await import("./video-recorder.DoDORhjT.js");return{GameRecorder:o}},__vite__mapDeps([11,2,1])),n=Zn;if(n===null){e("error","движок не поднят, запись невозможна");return}const s=(await n.catch(()=>null))?.app??null;if(s===null){e("error","сначала войди в сцену");return}It=new t(s,{onState:(o,i)=>e(o,i),onProgress:o=>q.setRecordProgress(o)},{frameRate:zc(),width:Ru(s.graphicsDevice.canvas.width||window.innerWidth),quality:Vc(),keyFrameInterval:Wc(),sound:Ba(),attachAudio:o=>le?.audio?.attachRecordStream(o)??(()=>{})})}if(It.recording){const t=await It.stop();t>0&&e("idle",`файл ${(t/1048576).toFixed(1)} МБ сохранён`)}else await It.start()}catch(t){e("error",t instanceof Error?t.message:"запись недоступна")}}function Km(e){const t=()=>le?.root.findByName("vehicle")?.script?.get(tl)??null,n=le?Zp(e,le.root,ja):null,s=le?gm(e,ja):null,o=le?.root.findByName("vehicle"),i=o?Dp(e,o):null,c=()=>i?.view??null,m=()=>n?.list()??[],l=()=>s?.view??null,f=()=>{const N=le?.root.findByName("camera")?.forward;return N?Math.atan2(N.x,-N.z):null},p=()=>{const D=le?.root.findByName("vehicle")?.getPosition();return D?{x:D.x,z:D.z}:null},h=document.createElement("div");h.style.cssText="position:fixed;left:0;top:0;width:0;height:0;padding-top:env(safe-area-inset-top);visibility:hidden;pointer-events:none",document.body.append(h);let v=0;const y=()=>{const D=Number.parseFloat(getComputedStyle(h).paddingTop);v=Number.isFinite(D)?D:0};y(),window.addEventListener("resize",y),window.addEventListener("orientationchange",y);let b=null,E=null,S=null,L=null,d=!0,C=null;const R=()=>{Ae("toggle")},k=()=>{s?.abort(),ie(async()=>{const{showGameOverCard:D}=await import("./game-over-card.EPNK1rUY.js");return{showGameOverCard:D}},__vite__mapDeps([12,2])).then(({showGameOverCard:D})=>{d&&(C?.(),C=D({max:i?.view.max??js,onReturn:()=>{C=null,hl(q)}}))})};e.on("lives:hit",R),e.on("lives:depleted",k);const F=lm({getHeading:f,getVehicle:p,getCheckpoints:m,readRace:l,read:t,readLives:c,clusterHost:q.clusterHost,safeTop:()=>v});b=rm(e,F.layers),b.active?document.documentElement.classList.add("hud-in-canvas"):(b=null,F.destroy(),E=Tp(t,q.clusterHost),S=im(f,p,m,l),L=Xp(c)),Ha=()=>{d=!1,e.off("lives:hit",R),e.off("lives:depleted",k),C?.(),C=null,i?.destroy(),L?.destroy(),L=null,It?.destroy(),It=null,document.documentElement.classList.remove("hud-in-canvas"),b?.destroy(),b=null,E?.destroy(),S?.destroy(),n?.destroy(),s?.destroy(),window.removeEventListener("resize",y),window.removeEventListener("orientationchange",y),h.remove()}}function bl(){Ha?.(),Ha=null}function Ym(e){le&&ie(async()=>{const{attachTouchControls:t}=await import("./touch-controls.b-AQBUjC.js");return{attachTouchControls:t}},__vite__mapDeps([13,2])).then(({attachTouchControls:t})=>{le&&(Ua=t(e,le.root).destroy)})}function gl(){Ua?.(),Ua=null}function yl(){const e=document.createElement("div");e.className="loading",jr(e);const t=document.createElement("div");t.className="loading__title",t.textContent="СЦЕНА";const n=document.createElement("div");n.className="loading__bar loading__bar--unknown";const s=document.createElement("div");s.className="loading__fill",n.append(s);const o=document.createElement("div");return o.className="loading__stage",o.style.opacity="0.8",o.style.fontSize="13px",o.style.textTransform="uppercase",e.append(t,n,o),document.body.append(e),{setStage(i,c){if(o.textContent=i,c===void 0||!Number.isFinite(c)){n.classList.add("loading__bar--unknown");return}n.classList.remove("loading__bar--unknown"),s.style.width=`${Math.round(Math.min(1,Math.max(0,c))*100)}%`},done(){e.remove()},fail(i){n.hidden=!0,o.textContent=`ошибка: ${i}`,setTimeout(()=>e.remove(),4e3)}}}window.addEventListener("keydown",e=>{e.key==="F9"&&location.reload()});export{Ae as A,Mc as B,Jm as C,Pp as D,Xm as E,ff as F,pa as G,ma as H,gf as I,fa as J,kr as K,Dc as L,Nr as M,Xn as N,uf as O,Ws as P,lf as Q,lu as R,cf as S,hf as V,$s as a,Bt as b,bf as c,yt as d,af as e,mf as f,mu as g,of as h,nf as i,pf as j,rf as k,Is as l,Uc as m,tf as n,sf as o,tl as p,ef as q,dc as r,Ca as s,da as t,df as u,Qm as v,xs as w,Zm as x,$u as y,Ft as z};
