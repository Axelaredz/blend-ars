const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/music-player.B8hHwK8D.js","assets/music-audio.DNu4TXPq.js","assets/playcanvas.zR-V_TaA.js","assets/boot-preset.DpdEF7Y5.js","assets/menu-background.Ct5qIB9S.js","assets/engine-sound.Cg91bNYo.js","assets/look-gestures.D7GS3G4t.js","assets/engine-bootstrap.Cufgd3LV.js","assets/smoke-scene.zwMI0kje.js","assets/vehicle-scene.Bnvi83pP.js","assets/video-recorder.ilLNPhk5.js","assets/touch-controls.CkzsH8zU.js"])))=>i.map(i=>d[i]);
import{_ as X,E as nt,T as as,C as wa,M as Zt,a as lo,b as Ao,S as va,B as Ea,V as uo,c as is,d as Sa,e as ka,f as Ca,G as mo,g as Na,A as po,F as fo,P as La}from"./playcanvas.zR-V_TaA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const bo="blendars-loading",Aa=`
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
`;function Ra(){if(document.getElementById(bo))return;const e=document.createElement("style");e.id=bo,e.textContent=Aa,document.head.append(e)}const Ta="/blend-ars/assets/loader.CPCrwQQc.webp",Pa="#282828",ho="blendars-splash",Ia=`
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
    background-color: ${Pa};
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
`;function Ro(e){if(!document.getElementById(ho)){const s=document.createElement("style");s.id=ho,s.textContent=Ia,document.head.append(s)}if(e.querySelector(":scope > .splash-logo")){e.classList.add("splash-host");return}const t=document.createElement("div");t.className="splash-logo";const n=document.createElement("img");n.src=Ta,n.alt="Blendars",t.append(n),e.prepend(t),e.classList.add("splash-host")}class Ma{root;fill;bar;stageEl;bytesEl;errorEl;lastPercent=-1;lastBytesText="";lastStage="";constructor(t,n={}){if(this.root=document.createElement("div"),this.root.className="loading",Ra(),Ro(this.root),this.root.setAttribute("role","progressbar"),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","100"),this.root.setAttribute("aria-valuenow","0"),this.root.setAttribute("aria-label","Загрузка"),n.title!==void 0){const o=document.createElement("h1");o.className="loading__title",o.textContent=n.title,this.root.append(o)}this.bar=document.createElement("div"),this.bar.className="loading__bar loading__bar--unknown",this.fill=document.createElement("div"),this.fill.className="loading__fill",this.bar.append(this.fill),this.bar.removeAttribute("aria-valuenow");const s=document.createElement("div");s.className="loading__row",this.stageEl=document.createElement("span"),this.stageEl.className="loading__stage",this.stageEl.textContent="старт",this.bytesEl=document.createElement("span"),this.bytesEl.className="loading__bytes",this.bytesEl.textContent="",s.append(this.stageEl,this.bytesEl),this.errorEl=document.createElement("div"),this.errorEl.className="loading__error",this.errorEl.hidden=!0,this.root.append(this.bar,s,this.errorEl),t.append(this.root)}setStage(t,n){t!==this.lastStage&&(this.stageEl.textContent=t,this.lastStage=t);const s=n!==void 0&&Number.isFinite(n);if(this.bar.classList.toggle("loading__bar--unknown",!s),s){const o=Math.round(Math.min(1,Math.max(0,n))*100);o!==this.lastPercent&&(this.fill.style.width=`${o}%`,this.root.setAttribute("aria-valuenow",String(o)),this.lastPercent=o)}}setError(t){this.bar.hidden=!0,this.stageEl.textContent="ошибка",this.errorEl.textContent=t,this.errorEl.hidden=!1}updateFromResources(){if(typeof performance.getEntriesByType!="function")return;const t=performance.getEntriesByType("resource");let n=0,s=0;for(const a of t)a.name.indexOf(location.origin)===0&&(n+=a.encodedBodySize||a.transferSize||0,s=Math.max(s,a.responseEnd||0));if(n<=0)return;const o=`${Fa(n)} загружено`;o!==this.lastBytesText&&(this.bytesEl.textContent=o,this.lastBytesText=o)}hide(){return this.root.setAttribute("aria-hidden","true"),this.root.classList.add("hidden"),new Promise(t=>{let n=!1;const s=()=>{n||(n=!0,this.root.remove(),t())};this.root.addEventListener("transitionend",s,{once:!0}),setTimeout(s,400)})}}function Fa(e){return e<1024?`${e} Б`:e<1024*1024?`${(e/1024).toFixed(0)} КБ`:`${(e/(1024*1024)).toFixed(1)} МБ`}const To="/blend-ars/assets/LilitaOne-Regular.C8J_njg9.ttf",Ba=new URL("/blend-ars/assets/fullscreen.C4xFj3BF.svg",import.meta.url).href,$a=new URL("/blend-ars/assets/fullscreen-exit.D85sBYy_.svg",import.meta.url).href,Da=new URL("/blend-ars/assets/info.BdEiL0Sf.svg",import.meta.url).href,Oa=new URL("/blend-ars/assets/book-open.CLVm05VY.svg",import.meta.url).href,go=new URL("/blend-ars/assets/gear_six.TA3VDyxO.svg",import.meta.url).href,ja=new URL("/blend-ars/assets/camera-rotate.D-uiZS3m.svg",import.meta.url).href,Ga=new URL("/blend-ars/assets/music-note.BpgtDFsX.svg",import.meta.url).href,za=new URL("/blend-ars/assets/package.BDtnf6Kx.svg",import.meta.url).href,Ua=new URL("/blend-ars/assets/flag.CeS1AlXY.svg",import.meta.url).href,Ha=new URL("/blend-ars/assets/garage.D_BJEZuB.svg",import.meta.url).href,Va=new URL("/blend-ars/assets/storefront.e4K1ebmi.svg",import.meta.url).href,Wa=new URL("/blend-ars/assets/truck.rvSKQmy5.svg",import.meta.url).href,Ya=new URL("/blend-ars/assets/coupe.DdXCwqWg.svg",import.meta.url).href,Ja=new URL("/blend-ars/assets/x.D2ii0gML.svg",import.meta.url).href,Ka=new URL("/blend-ars/assets/list.DXUiLcf_.svg",import.meta.url).href,Xa=new URL("/blend-ars/assets/triangle-left.DPdzCyZ0.svg",import.meta.url).href,Vc=new URL("/blend-ars/assets/stop-square.Cvj1GcXd.svg",import.meta.url).href,Wc=new URL("/blend-ars/assets/arrows_clockwise.Toz6NZFk.svg",import.meta.url).href,Po="/blend-ars/assets/ui-click.DcT3uYBZ.wav",qa={click:1,toggle:1.22,window:.86},Qa=.5;let Io=()=>.5,we=null,pn=null,tt=null,xo=!1;function Za(e){Io=e}function ei(){if(xo)return;xo=!0;const e=window.AudioContext??window.webkitAudioContext;if(e!==void 0){try{we=new e}catch{we=null;return}fetch(Po).then(t=>t.arrayBuffer()).then(t=>we?.decodeAudioData(t)).then(t=>{pn=t??null}).catch(()=>{pn=null})}}function pe(e="click"){const t=Qa*Io();if(t>0){if(pn!==null&&we!==null){we.state==="suspended"&&we.resume().catch(()=>{});const n=we.createBufferSource();n.buffer=pn,n.playbackRate.value=qa[e];const s=we.createGain();s.gain.value=t,n.connect(s).connect(we.destination),n.start();return}tt===null&&(tt=new Audio(Po),tt.preload="auto"),tt.volume=t,tt.currentTime=0,tt.play().catch(()=>{})}}function We(e){const t=n=>{if(!n.isPrimary||n.pointerType==="mouse"&&n.button!==0)return;const s=n.target;if(!(s instanceof Element)||s.closest('[disabled], [aria-disabled="true"]')||s.closest('input[type="range"]'))return;if(s.closest('input[type="checkbox"], .modes__card, [role="switch"]')){pe("toggle");return}s.closest('button, .mitem, [role="button"], .dlg__close')&&pe("click")};return e.addEventListener("pointerdown",t,!0),()=>e.removeEventListener("pointerdown",t,!0)}function sn(e){const t=n=>{const s=n.target;s instanceof HTMLInputElement&&s.type==="range"&&pe("click")};return e.addEventListener("change",t,!0),()=>e.removeEventListener("change",t,!0)}const ti=`
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
`;function wn(e){const t=document.createElement("div");if(t.className="dlg",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",e.title),!document.getElementById("dlg-style")){const r=document.createElement("style");r.id="dlg-style",r.textContent=ti,document.head.append(r)}const n=document.createElement("div");n.className="dlg__panel";const s=document.createElement("h2");s.className="dlg__title",s.textContent=e.title;const o=document.createElement("div");return o.className="dlg__body",o.append(e.body),n.append(s,o),t.append(n),document.body.append(t),{root:t,open(){t.hidden=!1},close(){t.hidden=!0},destroy(){t.remove()}}}const ni=[{body:"truck",title:"Джип",note:"Грузовик. Родное шасси, грузовая физика.",icon:Wa},{body:"maserati",title:"Мазерати",note:"GT3-обвес на том же шасси.",icon:Ya}],si=`
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
`;function oi(e){if(!document.getElementById("game-modes-style")){const o=document.createElement("style");o.id="game-modes-style",o.textContent=si,document.head.append(o)}const t=document.createElement("div");t.className="modes";const n=ni.map(o=>{const a=document.createElement("button");a.className="modes__card",a.type="button",a.dataset.body=o.body;const r=document.createElement("span");r.className="modes__art",r.style.setProperty("--modes-icon",`url(${JSON.stringify(o.icon)})`);const l=document.createElement("span");l.className="modes__title",l.textContent=o.title;const c=document.createElement("p");return c.className="modes__note",c.textContent=o.note,a.append(r,l,c),a.addEventListener("pointerdown",p=>{p.preventDefault(),!a.disabled&&e(o.body)}),t.append(a),a}),s=wn({title:"Режимы игры",body:t});return{dialog:s,open(){s.open()},setBusy(o){for(const a of n)a.disabled=o},destroy(){s.destroy()}}}const ai={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:8,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:6,fill:1.05,rimLeft:6.15,rimRight:6.3,spot:7.05,fog:.005,gamma:1,gammaStrength:.5,toneMapping:2,sunElevation:15,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:.3}},shadows:{val:{cascades:4,distribution:.95,blend:.12,distance:320,resolution:4096,bias:0,normalBias:.05}},postfx:{on:!0,val:{bloom:.1,bloomBlur:16,bloomThreshold:.2,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:.95,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:1,fps:0,msaa:!0}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},ii={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:4,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:5,fill:.3,rimLeft:.5,rimRight:.5,spot:2,fog:.0035,gamma:0,gammaStrength:1.2,toneMapping:2,sunElevation:9,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:1}},shadows:{val:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3}},postfx:{on:!1,val:{bloom:0,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.48,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:.5,fps:30,msaa:!1}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},Mo="blendars.presets.v1",Fo="blendars-settings",Bo=1;let te={active:null,list:[]},_o=!1;function Ne(){if(_o)return te;_o=!0;try{const e=localStorage.getItem(Mo);if(!e)return te;const t=JSON.parse(e);if(!t||typeof t!="object")return te;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=ri(o);a&&s.push(a)}te={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return te}function ri(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function wt(){try{localStorage.setItem(Mo,JSON.stringify(te))}catch{}}function xs(){return Ne().list.slice().sort((t,n)=>n.created-t.created)}function fn(){return Ne().active}function ci(){const e=Ne();return e.active?e.list.find(t=>t.id===e.active)??null:null}function _s(e){Ne(),te.active=e,wt()}function st(e,t,n=Date.now()){Ne();const s={id:bi(n),name:e.trim()||$e(new Date(n)),created:n,data:t};return te.list.push(s),te.active=s.id,wt(),s}function li(e,t){const s=Ne().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,wt(),!0):!1}function $o(e,t){const s=Ne().list.find(o=>o.id===e);return s?(s.data=t,wt(),!0):!1}function di(e){Ne();const t=te.list.findIndex(n=>n.id===e);t<0||(te.list.splice(t,1),te.active===e&&(te.active=null),wt())}function $e(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function ui(){Ne(),te={active:null,list:[]},wt()}function mi(e){const t={app:Fo,version:Bo,name:e.name,created:e.created,data:e.data},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`${fi(e.name)}.json`,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function pi(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==Fo||n.version!==Bo||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function fi(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function bi(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Do="blendars.physics-presets.v1",hi="blendars-physics",gi=1;let ve={active:null,list:[]},yo=!1;function vn(){if(yo)return ve;yo=!0;try{const e=localStorage.getItem(Do);if(!e)return ve;const t=JSON.parse(e);if(!t||typeof t!="object")return ve;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=xi(o);a&&s.push(a)}ve={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ve}function xi(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Oo(){try{localStorage.setItem(Do,JSON.stringify(ve))}catch{}}function _i(){return vn().list.slice().sort((e,t)=>t.created-e.created)}function yi(){return vn().active}function wi(e){vn(),ve.active=e,Oo()}function rs(e,t,n=Date.now()){vn();const s={id:Si(n),name:e.trim()||vi(new Date(n)),created:n,data:t};return ve.list.push(s),ve.active=s.id,Oo(),s}function vi(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function Ei(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==hi||n.version!==gi||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function Si(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const As="blendars.sound-effects.v3",Rs="blendars.sound-effects.v2",jo=[["engine","Двигатель"],["road","Шум качения"],["skid","Скрежет шин"],["shift","Переключение передач"],["impact","Удары кузова"],["landing","Посадка на колёса"],["music","Фоновая музыка"],["uiClick","Клики меню"]],Go=jo.map(([e])=>e),zo={engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},ki={engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1},be={...zo},re={...ki},je={engineTorque:{label:"Момент двигателя (Н·м)",def:520,off:520,min:200,max:900,decimals:0},brakeForce:{label:"Сила тормозов (Н)",def:6500,off:6500,min:2e3,max:12e3,decimals:0},mass:{label:"Масса кузова (кг)",def:2200,off:2200,min:1200,max:3500,decimals:0},engineBraking:{label:"Торможение двигателем",def:.15,off:.07,min:0,max:.4,decimals:2},dragForce:{label:"Сопротивление воздуха",def:1.75,off:0,min:0,max:4,decimals:2},rollingResistance:{label:"Сопротивление качения",def:.02,off:0,min:0,max:.06,decimals:3},lateralGripAssist:{label:"Помощь бокового сцепа",def:1.5,off:0,min:0,max:6,decimals:1},wheelGrip:{label:"Сцепление колёс",def:4,off:2.7,min:1,max:8,decimals:1},rollInfluence:{label:"Крен (перенос нагрузки)",def:.15,off:.08,min:0,max:.3,decimals:2},suspStiffness:{label:"Жёсткость пружины",def:20,off:20,min:5,max:60,decimals:1},suspDamping:{label:"Демпфер (распускание)",def:2.3,off:2.3,min:.5,max:8,decimals:2},suspCompression:{label:"Демпфер (сжатие)",def:4.4,off:4.4,min:.5,max:12,decimals:2},suspTravel:{label:"Ход подвески",def:.35,off:.35,min:.1,max:.8,decimals:2},suspForce:{label:"Предел силы пружины (Н)",def:2e4,off:2e4,min:5e3,max:6e4,decimals:0},suspRelVel:{label:"Демпфер и скорость кузова",def:1,off:1,min:0,max:2,decimals:2},antiRoll:{label:"Стабилизатор (рычаг)",def:0,off:0,min:0,max:1.5,decimals:2},inertiaScale:{label:"Инерция поворота (yaw)",def:1.3,off:1,min:.5,max:2.5,decimals:2},highSpeedLock:{label:"Спад угла руля (доля)",def:.55,off:.4,min:.2,max:1,decimals:2},highSpeedLockAt:{label:"Скорость спада руля",def:100,off:80,min:50,max:150,decimals:0,unit:"kmh"},camTurnRate:{label:"Камера: скорость поворота",def:3.5,off:2.2,min:1,max:6,decimals:1},camFollowRate:{label:"Камера: сглаживание",def:11,off:9,min:4,max:20,decimals:0},skidThreshold:{label:"Порог звука юза",def:.15,off:.3,min:0,max:.5,decimals:2}},at=Object.keys(je),Ts="blendars.physics.v1",ee={},se={};Ci();function Ci(){for(const e of at)ee[e]=!0,se[e]=je[e].def}function Ni(){try{const e=localStorage.getItem(Ts);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:null,o=typeof n.val=="object"&&n.val!==null?n.val:null;for(const a of at){const r=je[a],l=s?.[a];typeof l=="boolean"&&(ee[a]=l);const c=o?.[a];typeof c=="number"&&Number.isFinite(c)&&(se[a]=Math.min(r.max,Math.max(r.min,c)))}}catch{}}function Mt(){try{localStorage.setItem(Ts,JSON.stringify({on:ee,val:se}))}catch{}}function Yc(e){return ee[e]?se[e]:je[e].off}const on=[];function Jc(e){return on.push(e),()=>{const t=on.indexOf(e);t>=0&&on.splice(t,1)}}const an=[];function J(){for(const e of an)e()}function Li(e){return an.push(e),()=>{const t=an.indexOf(e);t>=0&&an.splice(t,1)}}function Ft(){for(const e of on)e();J()}function cs(e){const t=je[e],n=se[e];return t.unit==="kmh"?`${Math.round(n)} км/ч`:n.toFixed(t.decimals)}const Uo=[0,1,2,3,4],Ai=["линейный","филмик","ACES","нейтральный","без тонмаппинга"],Se={exposure:{label:"Экспозиция кадра",def:.5,min:.5,max:10,decimals:1},key:{label:"Яркость солнца",def:1,min:0,max:10,decimals:2},fill:{label:"Заполняющий свет",def:.3,min:0,max:15,decimals:2},rimLeft:{label:"Контровой слева",def:.5,min:0,max:15,decimals:2},rimRight:{label:"Контровой справа",def:.5,min:0,max:15,decimals:2},spot:{label:"Верхний софтбокс",def:2,min:0,max:15,decimals:2},fog:{label:"Туман задника",def:.0035,min:0,max:.05,decimals:4},gamma:{label:"Гамма-коррекция (sRGB)",def:1,min:0,max:1,decimals:0,options:[0,1]},gammaStrength:{label:"Сила гаммы",def:1.2,min:.5,max:3,decimals:2},toneMapping:{label:"Тонмаппинг",def:3,min:0,max:4,decimals:0,options:Uo},sunElevation:{label:"Высота солнца",def:34,min:-10,max:90,decimals:0},sunAzimuth:{label:"Азимут солнца",def:135,min:0,max:360,decimals:0},turbidity:{label:"Мутность неба",def:3,min:1,max:10,decimals:2},rayleigh:{label:"Рэлеевское рассеяние",def:2.2,min:0,max:5,decimals:2},mieCoefficient:{label:"Ми-рассеяние",def:.005,min:0,max:.05,decimals:3},mieDirectionalG:{label:"Анизотропия Ми",def:.8,min:0,max:.99,decimals:2},skyLuminance:{label:"Яркость неба",def:1,min:0,max:5,decimals:2}},it=Object.keys(Se),Ps="blendars.lighting.v1",oe={};Ri();Ti();function Ri(){for(const e of it)oe[e]=Se[e].def}function Ti(){try{const e=localStorage.getItem(Ps);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of it){const a=Se[o],r=s?.[o];typeof r=="number"&&Number.isFinite(r)&&(oe[o]=Math.min(a.max,Math.max(a.min,r)))}}catch{}}function rn(){try{localStorage.setItem(Ps,JSON.stringify({val:oe}))}catch{}}function Pi(e){return oe[e]}function Kc(){return 2**(Pi("gammaStrength")-1)}const cn=[];function Xc(e){return cn.push(e),()=>{const t=cn.indexOf(e);t>=0&&cn.splice(t,1)}}function ln(){for(const e of cn)e();J()}function wo(e){const t=Se[e];if(t.options){const n=t.options.indexOf(oe[e]);return n>=0?n:0}return Math.round((oe[e]-t.min)/(t.max-t.min)*100)}function Ii(e,t){const n=Se[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function ls(e){const t=Se[e],n=oe[e];return t.options&&t.options.length===2&&t.options[1]===1?n>=1?"вкл":"выкл":e==="toneMapping"?Ai[Uo.indexOf(n)]??n.toFixed(t.decimals):n.toFixed(t.decimals)}const Mi=[512,1024,2048,4096],he={cascades:{label:"Каскадов",def:2,min:1,max:4,decimals:0,options:[1,2,3,4]},distribution:{label:"Раскладка каскадов",def:.7,min:0,max:1,decimals:2},blend:{label:"Бесшовность каскадов",def:.12,min:0,max:.3,decimals:2},distance:{label:"Дальность теней",def:320,min:50,max:500,decimals:0},resolution:{label:"Разрешение атласа",def:4096,min:0,max:3,decimals:0,options:Mi},bias:{label:"Смещение тени",def:0,min:0,max:1,decimals:2},normalBias:{label:"Смещение по нормали",def:0,min:0,max:.5,decimals:2}},De=Object.keys(he),Is="blendars.shadows.v1",Y={};Fi();Bi();function Fi(){for(const e of De)Y[e]=he[e].def}function Bi(){try{const e=localStorage.getItem(Is);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of De){const a=he[o],r=s?.[o];if(!(typeof r!="number"||!Number.isFinite(r))){if(a.options){const c=a.options[r]===r?r:a.options.indexOf(r);c>=0&&c<a.options.length&&(Y[o]=Number(a.options[c]));continue}Y[o]=Math.min(a.max,Math.max(a.min,r))}}}catch{}}function rt(){try{localStorage.setItem(Is,JSON.stringify({val:Y}))}catch{}}function qc(e){return Y[e]}const dn=[];function Qc(e){return dn.push(e),()=>{const t=dn.indexOf(e);t>=0&&dn.splice(t,1)}}function Bt(){for(const e of dn)e();J()}function ds(e,t){const n=he[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function $i(e,t){const n=he[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function us(e){const t=he[e];return e==="distance"?`${Math.round(Y[e])} м`:Y[e].toFixed(t.decimals)}const ke={bloom:{label:"Ореол (bloom)",def:.05,min:0,max:.1,decimals:3},bloomBlur:{label:"Мягкость ореола",def:8,min:1,max:16,decimals:0,options:[1,2,4,8,16]},bloomThreshold:{label:"Порог ореола",def:.6,min:0,max:2,decimals:2},vignette:{label:"Виньетка",def:0,min:0,max:1,decimals:2},vignetteInner:{label:"Виньетка: начало",def:0,min:0,max:1,decimals:2},vignetteOuter:{label:"Виньетка: край",def:1.25,min:.5,max:2,decimals:2},vignetteCurvature:{label:"Виньетка: кромка",def:.5,min:.2,max:1,decimals:2},taa:{label:"Временное сглаживание",def:0,min:0,max:1,decimals:0,options:[0,1]},taaJitter:{label:"Сглаживание: джиттер",def:0,min:0,max:1,decimals:2},dof:{label:"Глубина резкости",def:1,min:0,max:1,decimals:0,options:[0,1]},dofFocus:{label:"Фокус (м)",def:1,min:1,max:60,decimals:1},dofRange:{label:"Зона фокуса (м)",def:40,min:1,max:40,decimals:1},dofRadius:{label:"Сила размытия",def:1,min:1,max:8,decimals:1},dofNear:{label:"Размывать передний план",def:1,min:0,max:1,decimals:0,options:[0,1]},grading:{label:"Цветокоррекция",def:1,min:0,max:1,decimals:0,options:[0,1]},brightness:{label:"Яркость",def:1,min:.5,max:1.5,decimals:2},contrast:{label:"Контраст",def:1,min:.5,max:1.5,decimals:2},saturation:{label:"Насыщенность",def:1,min:0,max:2,decimals:2},fringing:{label:"Аберрация",def:0,min:0,max:100,decimals:0},sharpness:{label:"Резкость",def:0,min:0,max:1,decimals:2}},Oe=Object.keys(ke),Ms="blendars.postfx.v1",Fs="blendars.postfx.on",ne={},Ho=!0;let Ce=Ho;Di();Oi();function Di(){for(const e of Oe)ne[e]=ke[e].def;Ce=Ho}function Oi(){try{const e=localStorage.getItem(Ms);if(e){const n=JSON.parse(e);if(n&&typeof n=="object"){const s=n,o=typeof s.val=="object"&&s.val!==null?s.val:null;for(const a of Oe){const r=ke[a],l=o?.[a];typeof l=="number"&&Number.isFinite(l)&&(ne[a]=Math.min(r.max,Math.max(r.min,l)))}}}const t=localStorage.getItem(Fs);t!==null&&(Ce=t!=="0")}catch{}}function Je(){try{localStorage.setItem(Ms,JSON.stringify({val:ne})),localStorage.setItem(Fs,Ce?"1":"0")}catch{}}function Zc(e){return ne[e]}function ms(){return Ce}function vo(e){Ce!==e&&(Ce=e,Je(),ct())}const Bs="blendars.hud.v1";let dt=!0,Ge=1280;const ce=[],ys=["fps","cpu","draw","vram"],ji={fps:"Частота кадра (FPS и мс)",cpu:"Загрузка CPU (обновление / рендер / физика)",draw:"Вызовы отрисовки и шейдеры",vram:"Видеопамять и разрешение"};let ut={fps:!0,cpu:!0,draw:!0,vram:!0};function Gi(){try{const e=localStorage.getItem(Bs);if(!e)return;const t=JSON.parse(e);if(t&&typeof t=="object"){const n=t.on;if(n&&typeof n=="object"){const s=n.stats;typeof s=="number"&&(dt=s!==0);const o=n.record;(o===1280||o===1920||o==="window")&&(Ge=o);const a=n.touch;typeof a=="number"&&(Dt=a!==0)}}}catch{}}const $s="blendars.stats.v1";function zi(){try{const e=localStorage.getItem($s);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s={...ut};for(const o of ys){const a=n[o];typeof a=="boolean"&&(s[o]=a)}ut=s}catch{}}function Ui(){try{localStorage.setItem($s,JSON.stringify(ut))}catch{}}function Ds(){try{localStorage.setItem(Bs,JSON.stringify({on:{stats:dt?1:0,record:Ge,touch:Dt?1:0}}))}catch{}}function bn(){return dt}function Vo(e){if(dt!==e){dt=e,Ds();for(const t of ce)t();J()}}function me(e){return ut[e]}function Hi(e){return ji[e]}function Vi(e,t){if(ut[e]!==t){ut[e]=t,Ui();for(const n of ce)n();J()}}function Wi(){return Ge}function ws(e){if(!(e!==1280&&e!==1920&&e!=="window")&&Ge!==e){Ge=e,Ds();for(const t of ce)t();J()}}function Yi(e){const t=Ge==="window"?e:Ge;return!Number.isFinite(t)||t<=0?1280:Math.round(t)}function Wo(e){return ce.push(e),()=>{const t=ce.indexOf(e);t>=0&&ce.splice(t,1)}}let Ji="full";function Ki(){return Ji}let Dt=!0;function Xi(){return Dt}function qi(e){if(Dt!==e){Dt=e,Ds();for(const t of ce)t();J()}}const Yo="blendars.touch.v1";let Ot=1,jt=.85,Gt="split",zt=!1;function Qi(){try{const e=localStorage.getItem(Yo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t;typeof n.scale=="number"&&n.scale>=.6&&n.scale<=2&&(Ot=n.scale),typeof n.opacity=="number"&&n.opacity>=.25&&n.opacity<=1&&(jt=n.opacity),(n.layout==="split"||n.layout==="left"||n.layout==="right")&&(Gt=n.layout),typeof n.swap=="boolean"&&(zt=n.swap)}catch{}}function En(){try{localStorage.setItem(Yo,JSON.stringify({scale:Ot,opacity:jt,layout:Gt,swap:zt}))}catch{}}function Zi(){return Ot}function er(e){const t=Math.min(Math.max(e,.6),2);if(Ot!==t){Ot=t,En();for(const n of ce)n();J()}}function tr(){return jt}function nr(e){const t=Math.min(Math.max(e,.25),1);if(jt!==t){jt=t,En();for(const n of ce)n();J()}}function sr(){return Gt}function or(e){if(Gt!==e){Gt=e,En();for(const t of ce)t();J()}}function ar(){return zt}function ir(e){if(zt!==e){zt=e,En();for(const t of ce)t();J()}}Gi();zi();Qi();const un=[];function el(e){return un.push(e),()=>{const t=un.indexOf(e);t>=0&&un.splice(t,1)}}function ct(){for(const e of un)e();J()}function Eo(e,t){const n=ke[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function rr(e,t){const n=ke[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function ps(e){const t=ne[e],n=ke[e];return n.options&&n.options.length===2&&n.options[1]===1?t>=1?"вкл":"выкл":t.toFixed(n.decimals)}cr();Ni();function cr(){try{const e=localStorage.getItem(As)??localStorage.getItem(Rs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:n,o=typeof n.vol=="object"&&n.vol!==null?n.vol:null;for(const a of Object.keys(zo)){const r=s[a];typeof r=="boolean"&&(be[a]=r);const l=o?.[a];typeof l=="number"&&Number.isFinite(l)&&(re[a]=Math.min(1,Math.max(0,l)))}}catch{}}function hn(){try{localStorage.setItem(As,JSON.stringify({on:be,vol:re})),localStorage.removeItem(Rs)}catch{}}function lr(e){return be[e]?re[e]:0}function tl(e){return re[e]}function nl(e,t){const n=Math.min(1,Math.max(0,t));re[e]!==n&&(re[e]=n,hn(),J())}const dr=`@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JSON.stringify(To)}) format('truetype');
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
    background: #1d2021d9;
    -webkit-backdrop-filter: blur(0.75rem);
    backdrop-filter: blur(0.75rem);
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
/* Активный пресет подсвечен рамкой акцента: он применяется при старте. */
.settings__preset--active { border-color: #fe8019; }
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
.settings__status {
    margin-top: 12px;
    font-size: 12px;
    line-height: 1.4;
    opacity: 0.75;
    min-height: 1.4em;
}
`;function lt(){return{version:1,physics:{on:{...ee},val:{...se}},lighting:{val:{...oe}},shadows:{val:{...Y}},postfx:{on:Ce,val:{...ne}},sound:{on:{...be},vol:{...re}},hud:{on:{stats:dt,record:Ge}},graphics:{val:{scale:mt,fps:pt,msaa:ft}},recording:{val:{fps:bt,quality:ht,keyFrame:gt,sound:xt}}}}function ur(){return{on:{...ee},val:{...se}}}let vs=!1;function mr(){return vs}function ot(e){const t=[];if(!e||typeof e!="object")return{applied:t};vs=!0;try{return pr(e,t)}finally{vs=!1}}function pr(e,t){const n=e,s=(y,S,d)=>typeof y=="number"&&Number.isFinite(y)?Math.min(d,Math.max(S,y)):null,o=y=>y&&typeof y=="object"?y:null,a=y=>y&&typeof y=="object"?y:null,r=y=>y&&typeof y=="object"?y:null,l=n.physics&&typeof n.physics=="object"?n.physics:null;if(l){const y=a(l.on),S=o(l.val);let d=!1;for(const m of at){const E=je[m];y&&typeof y[m]=="boolean"&&(ee[m]=y[m],d=!0);const f=S?s(S[m],E.min,E.max):null;f!==null&&(se[m]=f,d=!0)}d&&(Mt(),Ft(),t.push("физика"))}const c=o(n.lighting&&typeof n.lighting=="object"?n.lighting.val:null);if(c){let y=!1;for(const S of it){const d=Se[S],m=s(c[S],d.min,d.max);m!==null&&(oe[S]=m,y=!0)}y&&(rn(),ln(),t.push("свет"))}const p=o(n.shadows&&typeof n.shadows=="object"?n.shadows.val:null);if(p){let y=!1;for(const S of De){const d=he[S],m=p[S];if(d.options){const L=d.options[m]===m?m:d.options.indexOf(m);L>=0&&L<d.options.length&&(Y[S]=Number(d.options[L]),y=!0);continue}const E=s(m,d.min,d.max);E!==null&&(Y[S]=E,y=!0)}y&&(rt(),Bt(),t.push("тени"))}const k=n.postfx&&typeof n.postfx=="object"?n.postfx:null;if(k){let y=!1;typeof k.on=="boolean"&&(Ce=k.on,y=!0);const S=o(k.val);if(S)for(const d of Oe){const m=ke[d],E=S[d];if(m.options){const L=m.options.indexOf(E);L>=0&&L<m.options.length&&(ne[d]=Number(m.options[L]),y=!0);continue}const f=s(E,m.min,m.max);f!==null&&(ne[d]=f,y=!0)}y&&(Je(),ct(),t.push("Post FX"))}const h=n.sound&&typeof n.sound=="object"?n.sound:null;if(h){const y=a(h.on),S=o(h.vol);let d=!1;for(const m of Go){y&&typeof y[m]=="boolean"&&(be[m]=y[m],d=!0);const E=S?s(S[m],0,1):null;E!==null&&(re[m]=E,d=!0)}d&&(hn(),t.push("звук"))}const g=n.hud&&typeof n.hud=="object"?n.hud:null,u=g&&typeof g.on=="object"?g.on:null;if(u&&typeof u.stats=="boolean"){Vo(u.stats);const y=u.record;(y===1280||y===1920||y==="window")&&ws(y),t.push("интерфейс")}const b=r(n.graphics&&typeof n.graphics=="object"?n.graphics.val:null);if(b){let y=!1;const S=b.scale;(S===.5||S===.75||S===1)&&(Gs(S),y=!0);const d=b.fps;(d===0||d===30||d===60||d===120)&&(zs(d),y=!0),typeof b.msaa=="boolean"&&(Us(b.msaa),y=!0),y&&(Yt(),Sn(),t.push("графика"))}const x=r(n.recording&&typeof n.recording=="object"?n.recording.val:null);if(x){let y=!1;const S=x.fps;(S===24||S===30||S===60)&&(na(S),y=!0);const d=x.quality;(d==="low"||d==="medium"||d==="high")&&(sa(d),y=!0);const m=x.keyFrame;(m===1||m===2||m===4)&&(oa(m),y=!0),typeof x.sound=="boolean"&&(aa(x.sound),y=!0),y&&(Jt(),Kt(),t.push("запись"))}return{applied:t}}const Os="blendars.graphics.v1";let mt=1,pt=0,ft=!0;const js="blendars.gfx-preset.v1",fr={phone:{label:"Телефон",graphics:{scale:.5,fps:30,msaa:!1},shadows:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3},postfxOn:!1,postfx:{bloom:0,vignette:0,fringing:0,sharpness:0,grading:0}},balanced:{label:"Оптимальный",graphics:{scale:.75,fps:60,msaa:!1},shadows:{cascades:2,distribution:.7,blend:.12,distance:220,resolution:2048,bias:.7,normalBias:.4},postfxOn:!0,postfx:{bloom:.04,bloomBlur:8,bloomThreshold:.6,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:.25}},ultra:{label:"Ультра",graphics:{scale:1,fps:0,msaa:!0},shadows:{cascades:4,distribution:.7,blend:.12,distance:320,resolution:4096,bias:1,normalBias:.5},postfxOn:!0,postfx:{bloom:.06,bloomBlur:8,bloomThreshold:0,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:.25}}};let Wt="phone";function br(){const e=window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window,n=navigator.hardwareConcurrency??4,s=navigator.deviceMemory??4,o=Math.min(window.screen.width,window.screen.height)<768;return(e||t)&&(n<=4||s<=4||o)}function hr(){return Wt}function Jo(){try{localStorage.setItem(js,Wt)}catch{}}function gr(){try{const e=localStorage.getItem(js);(e==="phone"||e==="balanced"||e==="ultra")&&(Wt=e)}catch{}}function Ko(e){const t=fr[e];Wt=e,Jo(),Gs(t.graphics.scale),zs(t.graphics.fps),Us(t.graphics.msaa);for(const n of De)Y[n]=t.shadows[n]??he[n].def;rt(),Bt(),Ce=t.postfxOn;for(const n of Oe){const s=t.postfx[n];typeof s=="number"&&(ne[n]=s)}Je(),ct()}const mn=[];function xr(){try{const e=localStorage.getItem(Os);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.scale===.5||s.scale===.75||s.scale===1)&&(mt=s.scale),(s.fps===0||s.fps===30||s.fps===60||s.fps===120)&&(pt=s.fps),typeof s.msaa=="boolean"&&(ft=s.msaa)}catch{}}function Yt(){try{localStorage.setItem(Os,JSON.stringify({val:{scale:mt,fps:pt,msaa:ft}}))}catch{}}function Sn(){for(const e of mn)e();J()}function Xo(){return mt}function qo(){return pt}function Pt(){return ft}function Gs(e){mt!==e&&(mt=e,Yt(),Sn())}function zs(e){pt!==e&&(pt=e,Yt(),Sn())}function Us(e){ft!==e&&(ft=e,Yt(),Sn())}function Qo(e){return mn.push(e),()=>{const t=mn.indexOf(e);t>=0&&mn.splice(t,1)}}xr();gr();const Hs="blendars.recording.v1";let bt=30,ht="high",gt=2,xt=!0;const _r=[];function yr(){try{const e=localStorage.getItem(Hs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.fps===24||s.fps===30||s.fps===60)&&(bt=s.fps),(s.quality==="low"||s.quality==="medium"||s.quality==="high")&&(ht=s.quality),(s.keyFrame===1||s.keyFrame===2||s.keyFrame===4)&&(gt=s.keyFrame),typeof s.sound=="boolean"&&(xt=s.sound)}catch{}}function Jt(){try{localStorage.setItem(Hs,JSON.stringify({val:{fps:bt,quality:ht,keyFrame:gt,sound:xt}}))}catch{}}function Kt(){for(const e of _r)e();J()}function Zo(){return bt}function ea(){return ht}function ta(){return gt}function Es(){return xt}function na(e){bt!==e&&(bt=e,Jt(),Kt())}function sa(e){ht!==e&&(ht=e,Jt(),Kt())}function oa(e){gt!==e&&(gt=e,Jt(),Kt())}function aa(e){xt!==e&&(xt=e,Jt(),Kt())}yr();function wr(){const e=ci();if(e){const c=ot(e.data);c.applied.length>0&&console.info(`[settings] применён пресет «${e.name}»: ${c.applied.join(", ")}`);return}let t=!1;try{t=!!(localStorage.getItem(As)??localStorage.getItem(Rs)??localStorage.getItem(Ts)??localStorage.getItem(Ps)??localStorage.getItem(Is)??localStorage.getItem(Ms)??localStorage.getItem(Fs)??localStorage.getItem(Bs)??localStorage.getItem($s)??localStorage.getItem(Os)??localStorage.getItem(Hs)??localStorage.getItem(js))}catch{t=!0}if(t)return;const n=br();Wt=n?"phone":"ultra",Jo(),Yt(),rt(),Je();const o=lt();Ko("balanced");const a=lt();ot(n?ii:ai);const r=lt();ot(o),st("По умолчанию",o),st("Оптимальный",a),st(n?"Телефон":"Ультра",r);const l=xs().find(c=>c.name===(n?"Телефон":"Ультра"));_s(l?l.id:null),console.info(`[settings] сохранённых настроек нет — созданы пресеты «По умолчанию», «Оптимальный», «${n?"Телефон":"Ультра"}» (активен «${n?"Телефон":"Ультра"}»)`)}wr();function vr(){const e=document.createElement("div");e.className="settings",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Настройки");const t=document.createElement("style");t.textContent=dr;const n=document.createElement("div");n.className="settings__panel";const s=document.createElement("h2");s.className="settings__title",s.textContent="Настройки";const o=document.createElement("p");o.className="settings__hint",o.textContent="Галочка — эффект включён, ползунок — его громкость. Выбор сохраняется в браузере и действует сразу.",o.id="settings-hint",e.setAttribute("aria-describedby",o.id);const a=document.createElement("div");a.className="settings__tabs",a.setAttribute("role","tablist");const r=document.createElement("button");r.className="settings__tab settings__tab--on",r.type="button",r.textContent="Звук",r.setAttribute("role","tab"),r.setAttribute("aria-selected","true");const l=document.createElement("button");l.className="settings__tab",l.type="button",l.textContent="Физика",l.setAttribute("role","tab"),l.setAttribute("aria-selected","false");const c=document.createElement("button");c.className="settings__tab",c.type="button",c.textContent="Освещение",c.setAttribute("role","tab"),c.setAttribute("aria-selected","false");const p=document.createElement("button");p.className="settings__tab",p.type="button",p.textContent="Тени",p.setAttribute("role","tab"),p.setAttribute("aria-selected","false");const k=document.createElement("button");k.className="settings__tab",k.type="button",k.textContent="Post FX",k.setAttribute("role","tab"),k.setAttribute("aria-selected","false");const h=document.createElement("button");h.className="settings__tab",h.type="button",h.textContent="Интерфейс",h.setAttribute("role","tab"),h.setAttribute("aria-selected","false");const g=document.createElement("button");g.className="settings__tab",g.type="button",g.textContent="Управление",g.setAttribute("role","tab"),g.setAttribute("aria-selected","false");const u=document.createElement("button");u.className="settings__tab",u.type="button",u.textContent="Пресеты",u.setAttribute("role","tab"),u.setAttribute("aria-selected","false");const b=document.createElement("button");b.className="settings__tab",b.type="button",b.textContent="Графика",b.setAttribute("role","tab"),b.setAttribute("aria-selected","false");const x=document.createElement("button");x.className="settings__tab",x.type="button",x.textContent="Запись",x.setAttribute("role","tab"),x.setAttribute("aria-selected","false"),a.append(r,l,c,p,k,h,g,b,x,u);const y=i=>{const _=[r,l,c,p,k,h,g,b,x,u];for(let N=0;N<_.length;N++){const M=_[N];if(!M)continue;const O=N===i;M.classList.toggle("settings__tab--on",O),M.setAttribute("aria-selected",String(O))}S.hidden=i!==0,E.hidden=i!==1,W.hidden=i!==2,Le.hidden=i!==3,de.hidden=i!==4,Te.hidden=i!==5,ue.hidden=i!==6,Qe.hidden=i!==7,Ue.hidden=i!==8,et.hidden=i!==9};r.addEventListener("click",()=>y(0)),l.addEventListener("click",()=>y(1)),c.addEventListener("click",()=>y(2)),p.addEventListener("click",()=>y(3)),k.addEventListener("click",()=>y(4)),h.addEventListener("click",()=>y(5)),g.addEventListener("click",()=>y(6)),b.addEventListener("click",()=>y(7)),x.addEventListener("click",()=>y(8)),u.addEventListener("click",()=>y(9));const S=document.createElement("div");S.className="settings__pane",S.append(o);const d=document.createElement("div");d.className="settings__list";const m={};for(const[i,_]of jo){const N=document.createElement("div");N.className="settings__row";const M=document.createElement("label");M.className="settings__head";const O=document.createElement("span");O.textContent=_;const I=document.createElement("input");I.type="checkbox",I.checked=be[i],M.append(O,I);const C=document.createElement("div");C.className="settings__vol",C.classList.toggle("settings__vol--off",!be[i]);const P=document.createElement("input");P.type="range",P.min="0",P.max="100",P.step="1",P.value=String(Math.round(re[i]*100)),P.setAttribute("aria-label",`Громкость: ${_}`);const F=document.createElement("output");F.className="settings__pct",F.textContent=`${P.value}%`,P.addEventListener("input",()=>{re[i]=Number(P.value)/100,F.textContent=`${P.value}%`,hn(),J()}),C.append(P,F),I.addEventListener("change",()=>{be[i]=I.checked,C.classList.toggle("settings__vol--off",!I.checked),hn(),J()}),m[i]=()=>{I.checked=be[i],C.classList.toggle("settings__vol--off",!be[i]),P.value=String(Math.round(re[i]*100)),F.textContent=`${P.value}%`},N.append(M,C),d.append(N)}S.append(d);const E=document.createElement("div");E.className="settings__pane",E.hidden=!0;const f=document.createElement("p");f.className="settings__hint",f.textContent="Галочка — тюнинг «против скольжения», выключена — исходное поведение игры. Ползунок — значение, ↺ — сброс строки. Всё применяется сразу, даже за рулём.",E.append(f);const L=document.createElement("div");L.className="physics-tabs";const B=document.createElement("button");B.className="physics-tab physics-tab--on",B.type="button",B.textContent="Тонкая настройка",B.setAttribute("role","tab"),B.setAttribute("aria-selected","true");const w=document.createElement("button");w.className="physics-tab",w.type="button",w.textContent="Пресеты физики",w.setAttribute("role","tab"),w.setAttribute("aria-selected","false"),L.append(B,w),E.append(L);const v=document.createElement("div");v.className="physics-content",E.append(v);const A=document.createElement("div");A.className="settings__list";const T=document.createElement("div");T.className="physics-presets",v.append(A,T);const R=i=>{i==="fine"?(B.classList.add("physics-tab--on"),w.classList.remove("physics-tab--on"),B.setAttribute("aria-selected","true"),w.setAttribute("aria-selected","false"),A.hidden=!1,T.hidden=!0):(B.classList.remove("physics-tab--on"),w.classList.add("physics-tab--on"),B.setAttribute("aria-selected","false"),w.setAttribute("aria-selected","true"),A.hidden=!0,T.hidden=!1)};B.addEventListener("click",()=>R("fine")),w.addEventListener("click",()=>R("presets"));const D=()=>{const i=_i(),_=yi();if(i.length===0){const I=document.createElement("p");I.className="settings__presetempty",I.textContent="Сохраненных пресетов нет",T.append(I);return}const N=document.createElement("div");N.className="settings__presets",i.forEach(I=>{const C=document.createElement("button");C.className="settings__presetbtn",C.textContent=I.name,C.type="button",C.setAttribute("role","menuitemradio"),C.setAttribute("aria-checked",String(I.id===_)),C.setAttribute("aria-label",`Пресет физики: ${I.name}`),C.addEventListener("click",()=>{wi(I.id),R("presets")}),N.append(C)}),T.append(N);const M=document.createElement("button");M.className="settings__presetbtn",M.textContent="Импорт",M.type="button",M.setAttribute("role","menuitem"),M.setAttribute("aria-label","Импорт пресета физики"),M.addEventListener("click",()=>{const I=document.createElement("input");I.type="file",I.accept=".json",I.click(),I.addEventListener("change",async C=>{const F=C.target.files[0];if(!F)return;const j=await F.text(),V=Ei(j);if(!V){console.warn("[settings] Невалидный файл пресета физики");return}rs(V.name??"Импортированный пресет",V.data),T.innerHTML="",D()}),M.parentNode?.replaceChild(I,M),setTimeout(()=>I.click(),100)}),T.append(M);const O=document.createElement("button");O.className="settings__presetbtn",O.textContent="Новый",O.type="button",O.setAttribute("role","menuitem"),O.setAttribute("aria-label","Создать новый пресет физики"),O.addEventListener("click",()=>{rs("Новый пресет",{}),T.innerHTML="",D()}),T.append(O)};D(),R("fine");const $={};for(const i of at){const _=je[i],N=document.createElement("div");N.className="settings__row";const M=document.createElement("label");M.className="settings__head";const O=document.createElement("span");O.textContent=_.label;const I=document.createElement("input");I.type="checkbox",I.checked=ee[i],M.append(O,I);const C=document.createElement("div");C.className="settings__vol",C.classList.toggle("settings__vol--off",!ee[i]);const P=document.createElement("input");P.type="range",P.min="0",P.max="100",P.step="1",P.value=String(Math.round((se[i]-_.min)/(_.max-_.min)*100)),P.setAttribute("aria-label",`Значение: ${_.label}`);const F=document.createElement("output");F.className="settings__pct settings__pct--val",F.textContent=cs(i);const j=document.createElement("button");j.className="settings__reset",j.type="button",j.textContent="↺",j.title="Сбросить по умолчанию",j.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const V=()=>{I.checked=ee[i],C.classList.toggle("settings__vol--off",!ee[i]),P.value=String(Math.round((se[i]-_.min)/(_.max-_.min)*100)),F.textContent=cs(i)};$[i]=V,P.addEventListener("input",()=>{const K=_.min+(_.max-_.min)*(Number(P.value)/100);se[i]=Number(K.toFixed(_.decimals)),F.textContent=cs(i),Mt(),Ft()}),I.addEventListener("change",()=>{ee[i]=I.checked,C.classList.toggle("settings__vol--off",!I.checked),Mt(),Ft()}),j.addEventListener("click",()=>{ee[i]=!0,se[i]=_.def,V(),Mt(),Ft()}),C.append(P,F,j),N.append(M,C),A.append(N)}v.append(A);const z=document.createElement("button");z.className="settings__presetbtn",z.type="button",z.textContent="Сохранить как пресет",z.title="Сохранить текущие настройки физики в пресет",z.addEventListener("click",()=>{const i=prompt("Введите название пресета физики:","");if(i===null||i.trim()==="")return;const _=ur();rs(i.trim(),_),T.innerHTML="",D(),R("presets")}),v.append(z);const G=document.createElement("button");G.className="settings__resetall",G.type="button",G.textContent="Сбросить все настройки физики",G.addEventListener("click",()=>{for(const i of at)ee[i]=!0,se[i]=je[i].def,$[i]?.();Mt(),Ft()}),E.append(G);const W=document.createElement("div");W.className="settings__pane",W.hidden=!0;const q=document.createElement("p");q.className="settings__hint",q.textContent="Ползунок — уровень света (слева от центра — студия, к правому краю — ярче), ↺ — сброс строки. Свет главного экрана меняется сразу и запоминается. «Гамма-коррекция» — аппаратная (движок держит её как вкл/выкл), а «Сила гаммы» — непрерывный подъём полутонов поверх неё: 1 — как есть, каждый шаг вверх удваивает свет.",W.append(q);const ge=document.createElement("div");ge.className="settings__list";const vt={};for(const i of it){const _=Se[i],N=document.createElement("div");N.className="settings__row";const M=document.createElement("div");M.className="settings__head";const O=document.createElement("span");O.textContent=_.label,M.append(O);const I=document.createElement("div");I.className="settings__vol";const C=document.createElement("input");C.type="range",C.min="0",C.max="100",C.step="1",_.options&&(C.max=String(_.options.length-1)),C.value=String(wo(i)),C.setAttribute("aria-label",`Освещение: ${_.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=ls(i);const F=document.createElement("button");F.className="settings__reset",F.type="button",F.textContent="↺",F.title="Сбросить по умолчанию",F.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const j=()=>{C.value=String(wo(i)),P.textContent=ls(i)};vt[i]=j,C.addEventListener("input",()=>{oe[i]=Ii(i,Number(C.value)),P.textContent=ls(i),rn(),ln()}),F.addEventListener("click",()=>{oe[i]=_.def,j(),rn(),ln()}),I.append(C,P,F),N.append(M,I),ge.append(N)}W.append(ge);const le=document.createElement("button");le.className="settings__resetall",le.type="button",le.textContent="Сбросить все настройки освещения",le.addEventListener("click",()=>{for(const i of it)oe[i]=Se[i].def,vt[i]?.();rn(),ln()}),W.append(le);const Le=document.createElement("div");Le.className="settings__pane",Le.hidden=!0;const Ke=document.createElement("p");Ke.className="settings__hint",Ke.textContent="Каскады разбивают дальность теней на несколько карт: у ближней детализация выше, поэтому машина отбрасывает резкую тень даже вдали. Один каскад — одна карта на всю дальность. Меняется сразу, даже в заезде.",Le.append(Ke);const Et=document.createElement("div");Et.className="settings__list";const Xe={};for(const i of De){const _=he[i],N=document.createElement("div");N.className="settings__row";const M=document.createElement("div");M.className="settings__head";const O=document.createElement("span");O.textContent=_.label,M.append(O);const I=document.createElement("div");I.className="settings__vol";const C=document.createElement("input");C.type="range",C.min="0",C.max="100",C.step="1",_.options&&(C.max=String(_.options.length-1)),C.value=String(ds(i,Y[i])),C.setAttribute("aria-label",`Тени: ${_.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=us(i);const F=document.createElement("button");F.className="settings__reset",F.type="button",F.textContent="↺",F.title="Сбросить по умолчанию",F.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const j=()=>{C.value=String(ds(i,Y[i])),P.textContent=us(i)};Xe[i]=j,C.addEventListener("input",()=>{Y[i]=$i(i,Number(C.value)),P.textContent=us(i),rt(),Bt()}),F.addEventListener("click",()=>{Y[i]=_.def,j(),rt(),Bt()}),I.append(C,P,F),N.append(M,I),Et.append(N)}Le.append(Et);const ze=document.createElement("button");ze.className="settings__resetall",ze.type="button",ze.textContent="Сбросить все настройки теней",ze.addEventListener("click",()=>{for(const i of De)Y[i]=he[i].def,Xe[i]?.();rt(),Bt()}),Le.append(ze);const de=document.createElement("div");de.className="settings__pane",de.hidden=!0;const Ae=document.createElement("p");Ae.className="settings__hint",Ae.textContent="Пост-обработка кадра: ореол вокруг солнца, виньетка, резкость, цветокоррекция, временное сглаживание и глубина резкости. Главный переключатель снимает всю обработку разом.",de.append(Ae);const kn=document.createElement("div");kn.className="settings__row";const Cn=document.createElement("label");Cn.className="settings__head";const Ks=document.createElement("span");Ks.textContent="Пост-обработка включена";const Re=document.createElement("input");Re.type="checkbox",Re.checked=ms(),Cn.append(Ks,Re),Re.addEventListener("change",()=>vo(Re.checked)),kn.append(Cn),de.append(kn);const Nn=document.createElement("div");Nn.className="settings__list";const Xt={};for(const i of Oe){const _=ke[i],N=document.createElement("div");N.className="settings__row";const M=document.createElement("div");M.className="settings__head";const O=document.createElement("span");O.textContent=_.label,M.append(O);const I=document.createElement("div");I.className="settings__vol";const C=document.createElement("input");C.type="range",C.min="0",C.max="100",C.step="1",_.options&&(C.max=String(_.options.length-1)),C.value=String(Eo(i,ne[i])),C.setAttribute("aria-label",`Post FX: ${_.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=ps(i);const F=document.createElement("button");F.className="settings__reset",F.type="button",F.textContent="↺",F.title="Сбросить по умолчанию",F.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const j=()=>{C.value=String(Eo(i,ne[i])),P.textContent=ps(i)};Xt[i]=j,C.addEventListener("input",()=>{ne[i]=rr(i,Number(C.value)),P.textContent=ps(i),Je(),ct()}),F.addEventListener("click",()=>{ne[i]=_.def,j(),Je(),ct()}),I.append(C,P,F),N.append(M,I),Nn.append(N)}de.append(Nn);const St=document.createElement("button");St.className="settings__resetall",St.type="button",St.textContent="Сбросить все настройки Post FX",St.addEventListener("click",()=>{for(const i of Oe)ne[i]=ke[i].def,Xt[i]?.();Re.checked=!0,vo(!0),Je(),ct()}),de.append(St);const Te=document.createElement("div");Te.className="settings__pane",Te.hidden=!0;const Ln=document.createElement("p");Ln.className="settings__hint",Ln.textContent="Служебные элементы поверх игры. Счётчик кадра живёт в левом верхнем углу на всех экранах; ниже выбирается, из каких строк он состоит.",Te.append(Ln);const An=document.createElement("div");An.className="settings__row";const Rn=document.createElement("label");Rn.className="settings__head";const Xs=document.createElement("span");Xs.textContent="Статистика кадра";const qe=document.createElement("input");qe.type="checkbox",qe.checked=bn(),Rn.append(Xs,qe),qe.addEventListener("change",()=>Vo(qe.checked)),An.append(Rn),Te.append(An);const Tn=document.createElement("p");Tn.className="settings__hint",Tn.textContent="Строки счётчика кадра. Если снять все, панель останется пустой плашкой — обновление текста всё равно стоит кадра, поэтому лишние строки лучше не держать включёнными без нужды.",Te.append(Tn);const Pn=document.createElement("div");Pn.className="settings__row settings__row--stack";const qs={};for(const i of ys){const _=document.createElement("label");_.className="settings__check";const N=document.createElement("input");N.type="checkbox",N.checked=me(i);const M=document.createElement("span");M.textContent=Hi(i),N.addEventListener("change",()=>Vi(i,N.checked)),qs[i]=N,_.append(N,M),Pn.append(_)}Te.append(Pn);const ue=document.createElement("div");ue.className="settings__pane",ue.hidden=!0;const In=document.createElement("p");In.className="settings__hint",In.textContent="Сенсорное управление появляется только на устройствах с тач-экраном. Галочка прячет педали совсем; ниже — размер, прозрачность, расположение и схема кнопок. Всё сохраняется в браузере и действует сразу.",ue.append(In);const Mn=document.createElement("div");Mn.className="settings__row";const Fn=document.createElement("label");Fn.className="settings__head";const Qs=document.createElement("span");Qs.textContent="Сенсорное управление";const kt=document.createElement("input");kt.type="checkbox",kt.checked=Xi(),Fn.append(Qs,kt),kt.addEventListener("change",()=>qi(kt.checked)),Mn.append(Fn),ue.append(Mn);const Bn=document.createElement("div");Bn.className="settings__row";const $n=document.createElement("label");$n.className="settings__head";const Zs=document.createElement("span");Zs.textContent="Размер кнопок",$n.append(Zs);const Dn=document.createElement("div");Dn.className="settings__vol";const ae=document.createElement("input");ae.type="range",ae.min="60",ae.max="200",ae.step="5",ae.value=String(Math.round(Zi()*100)),ae.setAttribute("aria-label","Размер сенсорных кнопок");const qt=document.createElement("output");qt.className="settings__pct",qt.textContent=`${ae.value}%`,ae.addEventListener("input",()=>{er(Number(ae.value)/100),qt.textContent=`${ae.value}%`}),Dn.append(ae,qt),Bn.append($n,Dn),ue.append(Bn);const On=document.createElement("div");On.className="settings__row";const jn=document.createElement("label");jn.className="settings__head";const eo=document.createElement("span");eo.textContent="Прозрачность",jn.append(eo);const Gn=document.createElement("div");Gn.className="settings__vol";const ie=document.createElement("input");ie.type="range",ie.min="25",ie.max="100",ie.step="5",ie.value=String(Math.round(tr()*100)),ie.setAttribute("aria-label","Прозрачность сенсорных кнопок");const Qt=document.createElement("output");Qt.className="settings__pct",Qt.textContent=`${ie.value}%`,ie.addEventListener("input",()=>{nr(Number(ie.value)/100),Qt.textContent=`${ie.value}%`}),Gn.append(ie,Qt),On.append(jn,Gn),ue.append(On);const Qe=document.createElement("div");Qe.className="settings__pane",Qe.hidden=!0;const zn=document.createElement("div");zn.className="settings__backend";const Un=document.createElement("p");Un.className="settings__hint",Un.textContent="Масштаб рендера уменьшает число пикселей, которые движок рисует за кадр: картинка мыльнее, но кадры стабильнее. Лимит кадров держит потолок частоты — помогает на ноутбуках от батареи. Сглаживание применяется при запуске: после его включения страницу нужно перезагрузить.",Qe.append(Un);const xe=(i,_,N,M)=>{const O=document.createElement("div");O.className="settings__row";const I=document.createElement("div");I.className="settings__head";const C=document.createElement("span");C.textContent=i,I.append(C);const P=document.createElement("div");P.className="settings__vol",P.style.flexWrap="wrap";const F=[];for(const[V,K]of _){const H=document.createElement("button");H.className="settings__resetall",H.type="button",H.style.marginTop="0",H.style.flex="1 1 auto",H.style.textTransform="none",H.textContent=K,H.addEventListener("click",()=>{M(V),j()}),F.push(H),P.append(H)}const j=()=>{const V=N();for(let K=0;K<_.length;K++)F[K]?.toggleAttribute("disabled",_[K]?.[0]===V)};return j(),O.append(I,P),{row:O,refresh:j}},ba=xe("Расположение",[["split","По краям"],["left","Слева"],["right","Справа"]],()=>sr(),i=>{(i==="split"||i==="left"||i==="right")&&or(i)});ue.append(ba.row);const ha=xe("Кнопки крестовины",[["normal","▲ газ, ▼ тормоз"],["swap","▲ тормоз, ▼ газ"]],()=>ar()?"swap":"normal",i=>{ir(i==="swap")});ue.append(ha.row);const Hn=xe("Масштаб рендера",[["0.5","50 %"],["0.75","75 %"],["1","100 %"]],()=>String(Xo()),i=>{const _=Number(i);(_===.5||_===.75||_===1)&&Gs(_)}),Vn=xe("Лимит кадров",[["0","Выкл"],["30","30 fps"],["60","60 fps"],["120","120 fps"]],()=>String(qo()),i=>{const _=Number(i);(_===0||_===30||_===60||_===120)&&zs(_)}),Wn=document.createElement("div");Wn.className="settings__row";const Yn=document.createElement("label");Yn.className="settings__head";const to=document.createElement("span");to.textContent="Сглаживание MSAA";const Pe=document.createElement("input");Pe.type="checkbox",Pe.checked=Pt(),Yn.append(to,Pe);const Ct=document.createElement("span");Ct.className="settings__pct",Ct.textContent=Pt()?"применится после перезагрузки":"",Pe.addEventListener("change",()=>{Us(Pe.checked),Ct.textContent=Pe.checked?"применится после перезагрузки":""}),Wn.append(Yn,Ct);const Jn=xe("Пресет графики",[["phone","Телефон"],["balanced","Оптимальный"],["ultra","Ультра"]],()=>hr(),i=>{if(!(i!=="phone"&&i!=="balanced"&&i!=="ultra")){Ko(i),Hn.refresh(),Vn.refresh(),Jn.refresh(),Pe.checked=Pt(),Ct.textContent=Pt()?"применится после перезагрузки":"";for(const _ of De)Xe[_]?.();for(const _ of Oe)Xt[_]?.();Re.checked=ms()}}),Kn=document.createElement("p");Kn.className="settings__hint",Kn.textContent="Рендер: WebGL2 работает везде, WebGPU даёт больше эффектов, но на части телефонов подвисает на первом кадре. Смена бэкенда пересобирает движок и перезагружает сцену.",Qe.append(Kn,zn,Jn.row,Hn.row,Vn.row,Wn);const Ue=document.createElement("div");Ue.className="settings__pane",Ue.hidden=!0;const Xn=document.createElement("p");Xn.className="settings__hint",Xn.textContent="Разрешение и частота записи — насколько дорого кодировать. Качество кодека — насколько жирный файл: чем выше, тем чётче картинка и тем сильнее просядет игра во время записи. Всё применяется к следующему нажатию «Запись».",Ue.append(Xn);const qn=document.createElement("div");qn.className="settings__recordslot",Ue.append(qn);const Qn=document.createElement("div");Qn.className="settings__row";const Zn=document.createElement("label");Zn.className="settings__head";const no=document.createElement("span");no.textContent="Звук в файле";const Ze=document.createElement("input");Ze.type="checkbox",Ze.checked=Es(),Zn.append(no,Ze),Ze.addEventListener("change",()=>aa(Ze.checked)),Qn.append(Zn);const so=xe("Разрешение",[["1280","720p"],["1920","1080p"],["window","Как на экране"]],()=>String(Wi()),i=>{if(i==="window"){ws("window");return}(i==="1280"||i==="1920")&&ws(Number(i))}),oo=xe("Частота записи",[["24","24 fps"],["30","30 fps"],["60","60 fps"]],()=>String(Zo()),i=>{const _=Number(i);(_===24||_===30||_===60)&&na(_)}),ao=xe("Качество кодека",[["low","Низкое"],["medium","Среднее"],["high","Высокое"]],()=>ea(),i=>{(i==="low"||i==="medium"||i==="high")&&sa(i)}),io=xe("Ключевой кадр",[["1","1 с"],["2","2 с"],["4","4 с"]],()=>String(ta()),i=>{const _=Number(i);(_===1||_===2||_===4)&&oa(_)});Ue.append(Qn,so.row,oo.row,ao.row,io.row);const et=document.createElement("div");et.className="settings__pane",et.hidden=!0;const es=document.createElement("p");es.className="settings__hint",es.textContent="Пресет — это все настройки разом: физика, свет, тени, Post FX, звук и интерфейс. Активный пресет применяется при запуске и одинаково работает во всех сценах. Имя нового пресета — дата и время до минуты.",et.append(es);const Z=document.createElement("p");Z.className="settings__status",Z.setAttribute("role","status"),Z.textContent="";const ts=document.createElement("div");ts.className="settings__presetnamefield";const _e=document.createElement("input");_e.type="text",_e.value=$e(),_e.placeholder="Название пресета",_e.setAttribute("aria-label","Название нового пресета");const Nt=document.createElement("button");Nt.className="settings__presetbtn",Nt.type="button",Nt.textContent="Сохранить",ts.append(_e,Nt);const ga=document.createElement("div");ga.className="settings__row";const Lt=document.createElement("button");Lt.className="settings__resetall",Lt.type="button",Lt.textContent="Обновить активный пресет",Lt.addEventListener("click",()=>{const i=fn();if(!i){Z.textContent="Активного пресета нет — сохраните новый.";return}$o(i,lt()),Z.textContent="Текущие настройки записаны в активный пресет.",Me()});const At=document.createElement("button");At.className="settings__resetall",At.type="button",At.textContent="Импорт из файла";const Ie=document.createElement("input");Ie.type="file",Ie.accept="application/json,.json",Ie.hidden=!0,At.addEventListener("click",()=>Ie.click()),Ie.addEventListener("change",()=>{const i=Ie.files?.[0];Ie.value="",i&&(async()=>{try{const _=pi(await i.text());if(!_){Z.textContent="Это не файл настроек игры.";return}const N=ot(_.data);if(N.applied.length===0){Z.textContent="В файле нет знакомых настроек.";return}const M=st(_.name??i.name.replace(/\.json$/i,""),_.data,_.created??Date.now());_s(M.id),ns(),Me(),_e.value=$e(),Z.textContent=`Импортировано «${M.name}»: ${N.applied.join(", ")}`}catch(_){Z.textContent=`Не удалось прочитать файл: ${_ instanceof Error?_.message:"ошибка чтения"}`}})()});const Rt=document.createElement("button");Rt.className="settings__resetall",Rt.type="button",Rt.textContent="Убрать все пресеты",Rt.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты? Настройки останутся как есть.")&&(ui(),ns(),Me(),Z.textContent="Пресеты удалены, текущие настройки не тронуты.")});const Tt=document.createElement("div");Tt.className="settings__presets";const ns=()=>{for(const i of at)$[i]?.();for(const i of it)vt[i]?.();for(const i of De)Xe[i]?.();for(const i of Oe)Xt[i]?.();for(const i of Go)m[i]?.();Re.checked=ms(),qe.checked=bn();for(const i of ys){const _=qs[i];_&&(_.checked=me(i))}Pe.checked=Pt(),Hn.refresh(),Vn.refresh(),Jn.refresh(),so.refresh(),oo.refresh(),ao.refresh(),io.refresh(),Ze.checked=Es()},xa=(i,_)=>{const N=xs().find(O=>O.id===i);if(!N)return;const M=ot(N.data);_s(i),ns(),Z.textContent=M.applied.length>0?`Применён пресет «${_}»: ${M.applied.join(", ")}`:`В пресете «${_}» нет знакомых настроек.`},ro=i=>i>0?$e(new Date(i)):"дата неизвестна",Me=()=>{Tt.replaceChildren();const i=xs(),_=fn();if(i.length===0){const N=document.createElement("p");N.className="settings__presetempty",N.textContent="Пресетов пока нет. Настройте всё как надо и нажмите «Сохранить».",Tt.append(N);return}for(const N of i){const M=document.createElement("div");M.className="settings__preset";const O=N.id===_;O&&M.classList.add("settings__preset--active");const I=document.createElement("div");I.className="settings__presetinfo";const C=document.createElement("span");C.className="settings__presetname",C.textContent=N.name;const P=document.createElement("span");P.className="settings__presetmeta",P.textContent=O?`${ro(N.created)} · активен`:ro(N.created),I.append(C,P);const F=document.createElement("button");F.className="settings__presetbtn",F.type="button",F.textContent="✎",F.title="Переименовать",F.setAttribute("aria-label",`Переименовать пресет ${N.name}`),F.addEventListener("click",()=>{const H=document.createElement("input");H.className="settings__presetnameinput",H.type="text",H.value=N.name,C.replaceWith(H),H.focus(),H.select();const co=()=>{li(N.id,H.value),Me()};H.addEventListener("keydown",os=>{os.key==="Enter"&&co(),os.key==="Escape"&&(os.stopPropagation(),Me())}),H.addEventListener("blur",co)});const j=document.createElement("button");j.className="settings__presetbtn",j.type="button",j.textContent="Применить",j.disabled=O,j.addEventListener("click",()=>xa(N.id,N.name));const V=document.createElement("button");V.className="settings__presetbtn",V.type="button",V.textContent="↓",V.title="Экспорт в файл",V.setAttribute("aria-label",`Экспорт пресета ${N.name} в файл`),V.addEventListener("click",()=>mi(N));const K=document.createElement("button");K.className="settings__presetbtn settings__presetbtn--danger",K.type="button",K.textContent="✕",K.title="Удалить",K.setAttribute("aria-label",`Удалить пресет ${N.name}`),K.addEventListener("click",()=>{window.confirm(`Удалить пресет «${N.name}»?`)&&(di(N.id),Me(),Z.textContent=`Пресет «${N.name}» удалён.`)}),M.append(I,j,F,V,K),Tt.append(M)}};Nt.addEventListener("click",()=>{const i=st(_e.value||$e(),lt());_e.value=$e(),Me(),Z.textContent=`Сохранён пресет «${i.name}».`}),et.append(ts,Tt,Lt,At,Rt,Ie,Z),Me();const ss=document.createElement("div");ss.className="settings__scroll",ss.append(S,E,W,Le,de,Te,ue,Qe,Ue,et),n.append(s,a,ss),e.append(t,n),document.body.append(e);function _a(){e.hidden=!1,_e.value=$e()}function ya(){e.hidden=!0}return{root:e,backendSlot:zn,recordSlot:qn,open:_a,close:ya}}const Er=300;function Sr(e={}){let t=0,n=!1;const s=()=>{const l=fn();if(!l){n||(n=!0,e.onNoPreset?.());return}const c=lt();if(!$o(l,c))return;n=!1;const p=fn();p&&e.onSaved?.(p)},a=Li(()=>{mr()||(window.clearTimeout(t),t=window.setTimeout(s,Er))}),r=()=>{t!==0&&(window.clearTimeout(t),t=0,s())};return document.addEventListener("visibilitychange",r),window.addEventListener("pagehide",r),{flush(){t!==0&&(window.clearTimeout(t),t=0,s())},destroy(){window.clearTimeout(t),t=0,a(),document.removeEventListener("visibilitychange",r),window.removeEventListener("pagehide",r)}}}const kr="https://vk.ru/H360ru";function Cr(){const e=document.createElement("div"),t=document.createElement("p");t.className="dlg__empty",t.textContent="Описание игры скоро появится. Пока сюда можно поставить правила, список техники и ссылку на сервер.";const n=document.createElement("a");n.className="dlg__link",n.href=kr,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Группа игры во «ВКонтакте»",e.append(t,n);const s=wn({title:"Об игре",body:e});return{dialog:s,open(){s.open()},destroy(){s.destroy()}}}let ia=null;function Vs(e){ia=e}function He(){return ia?.()??null}const Nr={yaw:0,lift:0,zoom:1,shoulder:1,distance:6.4,height:2.5,fov:60},So=["yaw","lift","zoom","distance","height","fov"],ko={yaw:{label:"Поворот",min:-180,max:180,step:1,unit:"°"},lift:{label:"Наклон",min:-.6,max:3.4,step:.1,unit:" м"},zoom:{label:"Зум",min:.55,max:1.7,step:.01,unit:"×"},distance:{label:"Дистанция",min:3,max:15,step:.1,unit:" м"},height:{label:"Высота",min:1,max:6,step:.1,unit:" м"},fov:{label:"Обзор (fov)",min:40,max:90,step:1,unit:"°"}},ra="blendars.camera-views.v1";function fs(){try{const e=localStorage.getItem(ra);if(!e)return[];const t=JSON.parse(e);if(!t||typeof t!="object")return[];const n=t.list;if(!Array.isArray(n))return[];const s=[];for(const o of n){if(!o||typeof o!="object")continue;const a=o;if(typeof a.id!="string"||!a.id)continue;const r=a.view;if(!r||typeof r!="object")continue;const l=r,c=(p,k)=>typeof p=="number"&&Number.isFinite(p)?p:k;s.push({id:a.id,name:typeof a.name=="string"&&a.name?a.name:"Без имени",created:typeof a.created=="number"?a.created:0,view:{yaw:c(l.yaw,0),lift:c(l.lift,0),zoom:c(l.zoom,1),shoulder:c(l.shoulder,1),distance:c(l.distance,6.4),height:c(l.height,2.5),fov:c(l.fov,60)}})}return s}catch{return[]}}function Co(e){try{localStorage.setItem(ra,JSON.stringify({list:e}))}catch{}}function Lr(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Ar=`
.camv__hint {
    margin: 0 0 12px;
    font-size: 13px;
    line-height: 1.45;
    color: #a89984;
}
.camv__row {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 10px 8px;
    border-top: 1px solid #3c3836;
    font-size: 14px;
}
.camv__head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
}
.camv__val {
    color: #a89984;
    font-size: 13px;
    font-variant-numeric: tabular-nums;
}
.camv__row input[type='range'] {
    width: 100%;
    height: 20px;
    /* Тот же синий gruvbox, что у ползунков настроек (см. settings.ts). */
    accent-color: #458588;
    cursor: pointer;
}
.camv__row input[type='range']:focus-visible {
    outline: max(2px, 0.12em) solid #ebdbb2;
    outline-offset: 2px;
}

/* Тумблер: светлая ручка и тёмная рамка — как у ползунков настроек. */
.camv__row input[type='range']::-webkit-slider-thumb {
    box-shadow: 0 0 0 2px #1d2021;
}
.camv__row input[type='range']::-moz-range-thumb {
    box-shadow: 0 0 0 2px #1d2021;
}
.camv__btns {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px 8px;
}
.camv__btn {
    appearance: none;
    flex: 1 1 auto;
    min-height: 44px;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    background: none;
    color: #ebdbb2;
    font: inherit;
    font-size: 13px;
    letter-spacing: 0.04em;
    cursor: pointer;
    touch-action: manipulation;
}
.camv__btn:hover { border-color: #fe8019; color: #fe8019; }
.camv__btn:active { border-color: #d65d0e; color: #d65d0e; background: #1d2021; transform: translateY(1px); }
.camv__btn:focus-visible { outline: 1px solid #ebdbb2; outline-offset: 2px; }
.camv__btn[disabled] { opacity: 0.4; cursor: default; transform: none; }
.camv__btn--on { border-color: #fe8019; color: #fe8019; }
.camv__save {
    display: flex;
    gap: 8px;
    padding: 10px 8px;
}
.camv__save > input {
    flex: 1;
    min-width: 0;
    padding: 8px 10px;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    background: #1d2021;
    color: inherit;
    font: inherit;
    font-size: 14px;
}
.camv__save > input:focus-visible { outline: 2px solid #fe8019; outline-offset: 1px; }
.camv__save > button { flex: none; }
.camv__list { display: flex; flex-direction: column; gap: 8px; padding: 4px 8px 10px; }
.camv__item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    background: #282828e6;
}
.camv__name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
}
.camv__empty { font-size: 13px; opacity: 0.7; }
.camv__status {
    margin: 0;
    padding: 6px 8px 0;
    font-size: 12px;
    line-height: 1.4;
    opacity: 0.75;
    min-height: 1.4em;
}
`;function Rr(){if(document.getElementById("camv-style"))return;const e=document.createElement("style");e.id="camv-style",e.textContent=Ar,document.head.append(e)}function Tr(){Rr();const e=document.createElement("div"),t=document.createElement("p");t.className="camv__hint";const n={},s=document.createElement("div");for(const d of So){const m=ko[d],E=document.createElement("div");E.className="camv__row";const f=document.createElement("div");f.className="camv__head";const L=document.createElement("span");L.textContent=m.label;const B=document.createElement("span");B.className="camv__val",f.append(L,B);const w=document.createElement("input");w.type="range",w.min=String(m.min),w.max=String(m.max),w.step=String(m.step),w.setAttribute("aria-label",m.label),w.addEventListener("input",()=>{const v=Number(w.value);He()?.write({[d]:v}),B.textContent=`${w.value}${m.unit}`}),E.append(f,w),s.append(E),n[d]={input:w,out:B}}const o=document.createElement("div");o.className="camv__btns";const a=[],r=[[-1,"Слева"],[0,"Центр"],[1,"Справа"]];for(const[d,m]of r){const E=document.createElement("button");E.className="camv__btn",E.type="button",E.textContent=m,E.addEventListener("click",()=>{He()?.write({shoulder:d}),l(d)}),a.push(E),o.append(E)}const l=d=>{for(let m=0;m<r.length;m++)a[m]?.classList.toggle("camv__btn--on",r[m]?.[0]===d)},c=document.createElement("button");c.className="camv__btn",c.type="button",c.textContent="Сбросить вид (C)",c.addEventListener("click",()=>{He()?.reset(),y()});const p=document.createElement("div");p.className="camv__save";const k=document.createElement("input");k.type="text",k.placeholder="Название ракурса",k.setAttribute("aria-label","Название нового ракурса");const h=document.createElement("button");h.className="camv__btn",h.type="button",h.textContent="Сохранить",p.append(k,h);const g=document.createElement("div");g.className="camv__list";const u=document.createElement("p");u.className="camv__status",u.setAttribute("role","status"),u.textContent="",e.append(t,s,o,c,p,g,u);const b=wn({title:"Ракурсы камеры",body:e}),x=(d,m)=>{const E=ko[d];return`${d==="zoom"?m.toFixed(2):String(m)}${E.unit}`},y=()=>{const d=He(),m=d?.read()??Nr,E=d!==null;t.textContent=E?"Ракурс меняется живьём. Тяните сцену мышью или пальцем (влево — экран влево), колесо или щипок — расстояние, C — сброс.":"Откройте сцену с машиной — здесь появится текущий ракурс.";for(const f of So){const L=n[f];L&&(L.input.value=String(m[f]),L.input.disabled=!E,L.out.textContent=x(f,m[f]))}for(const f of a)f.disabled=!E;l(m.shoulder),c.disabled=!E,h.disabled=!E,k.disabled=!E,S()},S=()=>{g.replaceChildren();const d=fs();if(d.length===0){const m=document.createElement("p");m.className="camv__empty",m.textContent="Сохранённых ракурсов пока нет.",g.append(m);return}for(const m of d){const E=document.createElement("div");E.className="camv__item";const f=document.createElement("span");f.className="camv__name",f.textContent=m.name;const L=document.createElement("button");L.className="camv__btn",L.type="button",L.textContent="Применить",L.disabled=He()===null,L.addEventListener("click",()=>{const w=He();w&&(w.write({...m.view}),y(),u.textContent=`Применён ракурс «${m.name}».`)});const B=document.createElement("button");B.className="camv__btn",B.type="button",B.textContent="✕",B.title="Удалить",B.setAttribute("aria-label",`Удалить ракурс ${m.name}`),B.addEventListener("click",()=>{Co(fs().filter(w=>w.id!==m.id)),S(),u.textContent=`Ракурс «${m.name}» удалён.`}),E.append(f,L,B),g.append(E)}};return h.addEventListener("click",()=>{const d=He();if(!d)return;const m=Date.now(),E={id:Lr(m),name:k.value.trim()||$e(new Date(m)),created:m,view:{...d.read()}},f=fs();f.push(E),Co(f),k.value="",S(),u.textContent=`Сохранён ракурс «${E.name}».`}),{dialog:b,open(){y(),b.open()},destroy(){b.destroy()}}}const Pr=[{hash:"ad022dc",date:"2026-10-08",subject:"Fix WGSL shader: declare material_diffuse and view_position uniforms in terrain-splat"},{hash:"a206a10",date:"2026-10-08",subject:"Rebuild dist with base /blend-ars/ (GitHub Pages)"},{hash:"15fdf63",date:"2026-10-08",subject:"Deploy built site from dist; path dist in Pages workflow"},{hash:"942a7cc",date:"2026-10-08",subject:"Remove project sources; keep .github and .gitignore"},{hash:"da0f40e",date:"2026-10-08",subject:"Create static.yml"},{hash:"2691051",date:"2026-10-08",subject:"Delete .github/workflows/static.yml"},{hash:"98c2349",date:"2026-10-08",subject:"Delete .github/workflows/npm-publish-github-packages.yml"},{hash:"3ce584f",date:"2026-10-08",subject:"Update static.yml"},{hash:"128f22b",date:"2026-10-03",subject:"Create npm-publish-github-packages.yml"},{hash:"c8e16ab",date:"2026-10-03",subject:"Create static.yml"},{hash:"5a46d53",date:"2026-10-03",subject:"feat(scene): выбор кузова грузовик/Maserati, Maserati в меню, откат WebGPU→WebGL2"},{hash:"5c65165",date:"2026-10-03",subject:"feat(menu): экран загрузки с прогрессом + процедурный 3D-фон меню"},{hash:"1faa7f1",date:"2026-10-03",subject:"test(stage-0): браузерная проверка рендера, smoke-сцена, иконки-заглушки"},{hash:"4f12113",date:"2026-10-03",subject:"feat(stage-0): bootstrap Vite + ленивый PlayCanvas + тулинг бюджетов"},{hash:"eb68f3c",date:"2026-10-03",subject:"docs: rewrite README for PlayCanvas/Colyseus web stack"},{hash:"34ff9ca",date:"2026-10-03",subject:"chore: remove legacy Godot+Nakama tree and web export"},{hash:"9018d77",date:"2026-10-02",subject:"Create FUNDING.yml"},{hash:"7f64ab1",date:"2026-09-30",subject:"Add files via upload"},{hash:"5b7ab23",date:"2026-09-30",subject:"Add files via upload"},{hash:"ebb8901",date:"2026-03-19",subject:"mv"},{hash:"3c3fc26",date:"2026-03-19",subject:"fix: обновлен .gitignore и удалены системные файлы"},{hash:"0e075c9",date:"2026-03-19",subject:"up"},{hash:"9309069",date:"2026-03-19",subject:"upd"},{hash:"b82f5bc",date:"2026-03-19",subject:"docs: оновлення правил проекту"},{hash:"a19f06e",date:"2026-03-19",subject:"up"},{hash:"45bb3b3",date:"2026-03-19",subject:"new rules by demiurgos 19_1"},{hash:"7519417",date:"2026-02-27",subject:"Update README.md"},{hash:"58a3447",date:"2026-02-27",subject:"**BLEND ARS: Initial Project Setup and Development Notice**"},{hash:"60a150e",date:"2026-02-27",subject:"upd"},{hash:"eae4946",date:"2026-02-27",subject:"Exclude addons folder from tracking"},{hash:"cfe0473",date:"2026-02-27",subject:"upd"},{hash:"94b5e5d",date:"2026-02-24",subject:"uikit up"},{hash:"17b03ea",date:"2026-02-24",subject:"mv"},{hash:"c8e9bf6",date:"2026-02-24",subject:"апдейт"},{hash:"48511ce",date:"2026-02-24",subject:"ui_kit"},{hash:"ad054cb",date:"2026-02-24",subject:"up"},{hash:"73e2c24",date:"2026-02-22",subject:"Update 00-core.md"},{hash:"8d20bc4",date:"2026-02-22",subject:"Create 05-ui-perf.md"},{hash:"cf17f7a",date:"2026-02-22",subject:"Update and rename 04-mcp-workflow.md to 04-ui-theme.md"},{hash:"93f52ae",date:"2026-02-22",subject:"Update and rename 03-gdscript-standards.md to 03-ui-core.md"},{hash:"ff72202",date:"2026-02-22",subject:"Update and rename 02-ui-scifi.md to 02-workflow.md"},{hash:"a533398",date:"2026-02-22",subject:"Rename 00-global.md to 00-core.md"},{hash:"134cacc",date:"2026-02-22",subject:"Update and rename 01-mmo-coder.md to 01-gdscpipt.md"},{hash:"bbd1850",date:"2026-02-22",subject:"Update 00-global.md"},{hash:"2096da3",date:"2026-02-20",subject:"Create FUNDING.yml"},{hash:"10fb83e",date:"2026-02-18",subject:"главное меню и экраны настроек"},{hash:"f18331f",date:"2026-02-18",subject:"docs: restructure and improve .cursorrules configuration"},{hash:"a09766e",date:"2026-02-18",subject:"загрузка"},{hash:"3fd518a",date:"2026-02-16",subject:"update branch"},{hash:"52439f9",date:"2026-02-16",subject:"update branch"}];function Ir(){const e=Pr;if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,o=s.hash,a=s.date,r=s.subject;typeof o!="string"||typeof r!="string"||t.push({hash:o,date:typeof a=="string"?a:"",subject:r})}return t}function Mr(){const e=Ir(),t=document.createElement("div");if(e.length===0){const s=document.createElement("p");s.className="dlg__empty",s.textContent="Журнал пока пуст: сборка сделана без истории git.",t.append(s)}else{const s=document.createElement("p");s.className="devlog__meta",s.textContent=`Последние ${e.length} изменений`;const o=document.createElement("ul");o.className="devlog__list";for(const a of e){const r=document.createElement("li");r.className="devlog__item";const l=document.createElement("span");l.className="devlog__hash",l.textContent=a.hash;const c=document.createElement("span");c.className="devlog__date",c.textContent=a.date;const p=document.createElement("span");p.className="devlog__subject",p.textContent=a.subject,r.append(l,c,p),o.append(r)}t.append(s,o)}const n=wn({title:"Журнал разработки",body:t});return{dialog:n,open(){n.open()},destroy(){n.destroy()}}}function en(e,t,n,s){const o=document.createElement("button");return o.className=e,o.type="button",o.style.setProperty("--tb-icon",`url(${JSON.stringify(t)})`),o.title=n,o.setAttribute("aria-label",n),o.addEventListener("pointerdown",a=>{a.preventDefault(),!o.disabled&&s()}),o}const Fr=`
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
`;function Br(){const e=document.createElement("button");e.className="tb__btn",e.type="button";const t=()=>document.fullscreenElement!==null,n=()=>{const s=t(),o=s?$a:Ba;e.style.setProperty("--tb-icon",`url(${JSON.stringify(o)})`);const a=s?"Выйти из полноэкранного режима":"Полноэкранный режим";e.title=a,e.setAttribute("aria-label",a),e.setAttribute("aria-pressed",s?"true":"false")};return e.addEventListener("pointerdown",s=>{s.preventDefault(),!e.disabled&&(t()?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{}))}),document.addEventListener("fullscreenchange",n),n(),{el:e,destroy(){document.removeEventListener("fullscreenchange",n)}}}async function $r(){return(await X(()=>import("./music-player.B8hHwK8D.js"),__vite__mapDeps([0,1,2]))).createMusicPlayer()}function Dr(e){const t=document.createElement("style");t.textContent=Fr;const n=document.createElement("header");n.className="tb";const s=document.createElement("div");s.className="tb__slot",s.append(e.statsHost);const o=document.createElement("div");o.className="tb__center";const a=document.createElement("h1");a.className="tb__title",a.textContent=e.title,o.append(a);const r=document.createElement("div");r.className="tb__slot tb__slot--right";const l=document.createElement("div");l.className="tb__extra";const c=Br(),p=Cr(),k=Mr(),h=Tr(),g=document.createElement("button");g.className="tb__btn tb__btn--close",g.type="button",g.style.setProperty("--tb-icon",`url(${JSON.stringify(Ja)})`),g.title="Скрыть панель",g.setAttribute("aria-label","Скрыть панель");const u=document.createElement("span");u.className="tb__cap",u.innerHTML="Скрыть<br>панель",g.append(u),g.addEventListener("pointerdown",d=>{d.preventDefault(),!g.disabled&&e.onToggleChrome()});let b=null,x=null;const y=en("tb__btn",Ga,"Музыка",()=>{const d=m=>{m.open(),e.windows.open("music")};if(x!==null){d(x);return}b??=$r(),b.then(m=>{x=m,e.windows.register({id:"music",root:m.dialog.root,show:()=>m.open(),hide:()=>m.dialog.close()}),d(m)}).catch(()=>{})});r.append(l,en("tb__btn",ja,"Ракурсы камеры",()=>{h.open(),e.windows.open("camera")}),en("tb__btn",Oa,"Журнал разработки",()=>{k.open(),e.windows.open("devlog")}),en("tb__btn",Da,"Об игре",()=>{p.open(),e.windows.open("about")}),y,g,c.el),s.classList.add("tb__slot--left"),n.append(t,s,o,r),e.windows.register({id:"camera",root:h.dialog.root,show:()=>h.open(),hide:()=>h.dialog.close()}),e.windows.register({id:"about",root:p.dialog.root,show:()=>p.open(),hide:()=>p.dialog.close()}),e.windows.register({id:"devlog",root:k.dialog.root,show:()=>k.open(),hide:()=>k.dialog.close()});const S=[We(n),We(p.dialog.root),sn(p.dialog.root),We(k.dialog.root),sn(k.dialog.root),We(h.dialog.root),sn(h.dialog.root)];return{root:n,setExtraButtons(d){l.append(d)},setBackButton(d){s.prepend(d)},setSceneMode(d){n.classList.toggle("tb--scene",d)},destroy(){c.destroy(),p.destroy(),k.destroy(),h.destroy();for(const d of S)d();x?.destroy(),n.remove()}}}const Or=`
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
`;function jr(e={}){const t=document.createElement("style");t.textContent=Or;const n=document.createElement("div");n.className="win";const s=document.createElement("div");s.className="win__bar";const o=document.createElement("button");o.className="win__close",o.type="button",o.textContent="✕",o.title="Закрыть окно",o.setAttribute("aria-label","Закрыть окно"),s.append(o);const a=document.createElement("p");a.className="win__empty",a.textContent="",a.setAttribute("aria-hidden","true"),n.append(t,a),document.body.append(s);const r=new Map,l=[];let c=null,p=null;const k=()=>{for(const f of r.values()){const L=f.id===c;f.root.hidden=!L,L?f.show():f.hide()}n.classList.toggle("win--open",c!==null),s.classList.toggle("win--open",c!==null);for(const f of l)f();h()},h=()=>{const f=n.getBoundingClientRect();if(f.width<=0||f.height<=0)return;const L=document.documentElement.style;L.setProperty("--win-left",`${Math.round(f.left)}px`),L.setProperty("--win-top",`${Math.round(f.top)}px`),L.setProperty("--win-width",`${Math.round(f.width)}px`),L.setProperty("--win-height",`${Math.round(f.height)}px`)},g={root:n,closeBtn:o,register(f){r.set(f.id,f),f.hide(),f.root.hidden=!0},open(f){r.has(f)&&(c=f,p={x,y,until:performance.now()+d},k())},close(){c!==null&&(c=null,k())},toggle(f){c===f?g.close():g.open(f)},active(){return c},onChange(f){return l.push(f),()=>{const L=l.indexOf(f);L>=0&&l.splice(L,1)}},destroy:()=>{}};o.addEventListener("pointerdown",f=>{f.preventDefault(),g.close()});const u=new ResizeObserver(h);u.observe(n),window.addEventListener("resize",h),window.addEventListener("orientationchange",h),h();const b=f=>{f.key==="Escape"&&(c!==null?(f.stopPropagation(),g.close()):e.onEmptyEscape?.())};document.addEventListener("keydown",b);let x=0,y=0;const S=f=>{x=f.clientX,y=f.clientY},d=400,m=32,E=f=>{if(c===null)return;const L=r.get(c);if(!L||L.root.hidden)return;const B=f.target;if(!(B instanceof Element)||L.root.contains(B))return;const w=p;if(w!==null&&performance.now()<w.until){const T=f.clientX-w.x,R=f.clientY-w.y;if(T*T+R*R<=m*m)return}if(B.closest(".tb")!==null)return;const v=f.clientX-x,A=f.clientY-y;v*v+A*A>64||g.close()};return document.addEventListener("pointerdown",S,!0),document.addEventListener("click",E),g.destroy=()=>{u.disconnect(),window.removeEventListener("resize",h),window.removeEventListener("orientationchange",h),document.removeEventListener("keydown",b),document.removeEventListener("pointerdown",S,!0),document.removeEventListener("click",E),s.remove();const f=document.documentElement.style;f.removeProperty("--win-left"),f.removeProperty("--win-top"),f.removeProperty("--win-width"),f.removeProperty("--win-height")},g}const Gr=`
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
    src: url(${JSON.stringify(To)}) format('truetype');
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
`,zr={idle:"",starting:"готовлю…",recording:"идёт",encoding:"упаковываю файл…",saving:"сохраняю…",error:"не вышло"},Ur=["recording","encoding","saving"],bs=["Одно не рождается без другого: оболочка без души лишь кукла, душа без оболочки — призрак.","Сон совести рождает чудовищ.","У нас нет формы, и мы страшимся этого.","В здравом теле, витает здравый дух, а значит и душа."];class Hr{statsHost;clusterHost;settings;windows;root;playBtn;backBtn;settingsItem;modes;actionsEl;midEl;statusEl;statusText;recordRow;recordBtn;recordDot;recordLabel;recordState;recordBar;recordFill;idleIndex=-1;topbar;chromeHidden=!1;autosave;uiSoundDetach=[];constructor(t,n){this.root=document.createElement("div"),this.root.className="menu";const s=document.createElement("style");s.textContent=Gr,this.windows=jr({onEmptyEscape:()=>{this.setChromeHidden(!this.chromeHidden)}}),this.statsHost=document.createElement("div"),this.topbar=Dr({statsHost:this.statsHost,title:"BLEND ARS",subtitle:"",windows:this.windows,onToggleChrome:()=>{this.setChromeHidden(!0)}}),this.playBtn=document.createElement("button"),this.playBtn.className="play play--go",this.playBtn.type="button",this.playBtn.textContent="Играть",this.playBtn.addEventListener("pointerdown",g=>{g.preventDefault(),!this.playBtn.disabled&&(pe("click"),this.modes.open(),this.windows.open("modes"))});const o=document.createElement("ul");o.className="actions__list";const a=[["Контейнеры",za],["Миссии",Ua],["Гараж",Ha],["Магазин",Va]];for(const[g,u]of a){const b=document.createElement("li"),x=document.createElement("button");x.className="mitem",x.type="button",x.textContent=g,x.disabled=!0,x.title=`${g}: раздел в разработке`,x.style.setProperty("--mitem-icon",`url(${JSON.stringify(u)})`),b.append(x),o.append(b)}this.settingsItem=document.createElement("button"),this.settingsItem.className="mitem",this.settingsItem.type="button",this.settingsItem.textContent="Настройки",this.settingsItem.style.setProperty("--mitem-icon",`url(${JSON.stringify(go)})`),this.settingsItem.addEventListener("pointerdown",g=>{g.preventDefault(),!this.settingsItem.disabled&&(pe("click"),this.openSettings())});{const g=document.createElement("li");g.append(this.settingsItem),o.append(g)}this.modes=oi(g=>{pe("click"),this.modes.dialog.close(),this.windows.close(),n.onScene(g)}),this.backBtn=document.createElement("button"),this.backBtn.className="tb__back",this.backBtn.type="button",this.backBtn.textContent="Назад",this.backBtn.style.setProperty("--tb-icon",`url(${JSON.stringify(Xa)})`),this.backBtn.title="Вернуться в меню",this.backBtn.setAttribute("aria-label","Вернуться в меню"),this.backBtn.style.display="none",this.backBtn.addEventListener("pointerdown",g=>{g.preventDefault(),pe("click"),n.onBack?.()}),this.settings=vr();const r=document.createElement("button");r.className="tb__btn",r.type="button",r.style.setProperty("--tb-icon",`url(${JSON.stringify(go)})`),r.title="Настройки",r.setAttribute("aria-label","Настройки"),r.addEventListener("pointerdown",g=>{g.preventDefault(),!r.disabled&&(pe("click"),this.openSettings())});const l=document.createElement("div");l.className="tb__extra",l.append(r),this.topbar.setExtraButtons(l),this.topbar.setBackButton(this.backBtn);const c=document.createElement("div");c.className="actions",c.append(this.playBtn,o),this.actionsEl=c,this.statusText=document.createElement("div"),this.statusText.className="status__text",this.statusText.textContent=this.pickIdlePhrase(),this.recordRow=document.createElement("div"),this.recordRow.className="status__record",this.recordRow.hidden=!0,this.recordBtn=document.createElement("button"),this.recordBtn.className="status__recordbtn",this.recordBtn.type="button",this.recordDot=document.createElement("span"),this.recordDot.className="status__dot",this.recordLabel=document.createElement("span"),this.recordLabel.textContent="Запись",this.recordBtn.append(this.recordDot,this.recordLabel),this.recordBtn.addEventListener("pointerdown",g=>{g.preventDefault(),!this.recordBtn.disabled&&(pe("click"),n.onRecord?.())}),this.recordState=document.createElement("span"),this.recordState.className="status__recordstate",this.recordState.textContent="",this.recordBar=document.createElement("div"),this.recordBar.className="status__recordbar",this.recordFill=document.createElement("span"),this.recordBar.append(this.recordFill),this.recordBar.style.display="none",this.recordRow.append(this.recordBtn,this.recordState,this.recordBar),this.statusEl=document.createElement("div"),this.statusEl.className="status",this.clusterHost=document.createElement("div"),this.clusterHost.className="status__cluster",this.statusEl.append(this.clusterHost),this.statusText.setAttribute("role","status"),this.statusText.setAttribute("aria-live","polite"),this.statusEl.append(this.statusText),this.settings.recordSlot.append(this.recordRow);const p=document.createElement("div");p.className="mid",p.append(c,this.windows.root),this.actionsEl=c,this.midEl=p;const k=document.createElement("div");k.className="wrap",k.append(p);const h=document.createElement("button");h.className="chrome-fab",h.type="button",h.style.setProperty("--fab-icon",`url(${JSON.stringify(Ka)})`),h.title="Показать интерфейс",h.setAttribute("aria-label","Показать интерфейс"),h.addEventListener("pointerdown",g=>{g.preventDefault(),pe("click"),this.setChromeHidden(!1)}),this.root.append(s,this.topbar.root,k,this.statusEl,h),t.append(this.root),Za(()=>lr("uiClick")),ei(),this.uiSoundDetach.push(We(this.root),We(this.settings.root),sn(this.settings.root),We(this.modes.dialog.root)),this.windows.register({id:"settings",root:this.settings.root,show:()=>this.settings.open(),hide:()=>this.settings.close()}),this.windows.register({id:"modes",root:this.modes.dialog.root,show:()=>this.modes.open(),hide:()=>this.modes.dialog.close()}),this.settings.close(),this.autosave=Sr({onSaved:g=>{this.setStatus(`Настройки сохранены в пресет «${g}».`)},onNoPreset:()=>{this.setStatus("Настройки применены, но активного пресета нет — сохранять некуда. Сохраните пресет на вкладке «Пресеты».")}})}openSettings(){this.settings.open(),this.windows.open("settings")}setMode(t){const n=t==="scene";this.playBtn.style.display=n?"none":"",this.backBtn.style.display=n?"":"none",this.recordRow.hidden=!n,n&&(this.modes.dialog.close(),this.windows.close()),this.setChromeHidden(!1),this.actionsEl.style.display=n?"none":"",this.midEl.style.gridTemplateColumns=n?"minmax(0, 1fr)":"",this.root.style.background=n?"none":"",this.root.classList.toggle("menu--scene",n)}setChromeHidden(t){this.chromeHidden=t,this.root.classList.toggle("menu--chrome-hidden",t)}isChromeHidden(){return this.chromeHidden}setSceneChrome(t){this.topbar.setSceneMode(t)}statsHostFor(t){return this.statsHost}setBusy(t){this.playBtn.disabled=t,this.settingsItem.disabled=t,this.backBtn.disabled=t,this.modes.setBusy(t),t&&this.setStatus("Инициализация рендера…")}setStatus(t){this.statusText.textContent=t||this.pickIdlePhrase()}setRecordState(t,n){const s=Ur.includes(t);this.recordBtn.classList.toggle("live",s),this.recordBtn.disabled=t==="starting"||t==="encoding"||t==="saving",this.recordLabel.textContent=t==="recording"?"Стоп":"Запись",this.recordBar.style.display=t==="encoding"||t==="saving"?"block":"none",this.recordFill.style.width="0%",this.recordState.textContent=n??zr[t]}setRecordProgress(t){this.recordFill.style.width=`${Math.min(Math.max(t,0),1)*100}%`}pickIdlePhrase(){let t=Math.floor(Math.random()*bs.length);return t===this.idleIndex&&(t=(t+1)%bs.length),this.idleIndex=t,bs[t]??""}destroy(){this.topbar.destroy(),this.modes.destroy(),this.windows.destroy(),this.autosave.destroy();for(const t of this.uiSoundDetach)t();this.root.remove(),this.settings.root.remove()}}const Vr=`
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
`,Wr='<svg class="rswitch__svg" viewBox="0 0 48 26" width="48" height="26" aria-hidden="true" focusable="false"><rect class="rswitch__track" x="1" y="1" width="46" height="24" rx="12"></rect><circle class="rswitch__knob" cx="13" cy="13" r="9"></circle></svg>';function Yr(e,t){const n=document.createElement("div");n.className="rswitch-wrap";const s=document.createElement("span");s.className="rswitch__opt",s.textContent="WebGL2",s.dataset.val="webgl2";const o=document.createElement("button");o.className="rswitch",o.type="button",o.setAttribute("role","switch"),o.innerHTML=Wr;const a=document.createElement("span");a.className="rswitch__opt",a.textContent="WebGPU",a.dataset.val="webgpu",n.append(s,o,a);const r=()=>{o.disabled||t.onSwitch()};n.addEventListener("click",r),e.append(n);let l="webgl2",c=!1,p="";const k=()=>{const h=l==="webgpu";o.dataset.state=h?"on":"off",o.setAttribute("aria-checked",h?"true":"false"),s.classList.toggle("rswitch__opt--active",!h),a.classList.toggle("rswitch__opt--active",h);const g=h?"WebGL2":"WebGPU";o.title=o.disabled&&p?p:`Переключить на ${g}`,o.setAttribute("aria-label",`Рендер: ${h?"WebGPU":"WebGL2"}. Переключить на ${g}`),n.classList.toggle("rswitch-wrap--disabled",o.disabled),n.setAttribute("aria-disabled",String(o.disabled))};return k(),{setBackend(h){l=h,k()},setBusy(h){c=h,o.disabled=h||!!p,k()},setUnavailable(h){p=h,o.disabled=c||!!h,k()},destroy(){n.remove()}}}const Jr=`
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
`;function It(e,t,n,s,o,a){o<=0||s<=0||(e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o),e.fill())}const Kr="#ebdbb2",tn="system-ui, -apple-system, 'Segoe UI', sans-serif";function Xr(e){let t="";return{draw:(s,o,a,r)=>{if(o<=0||a<=0||r<=0)return!1;const l=e(),c=l===null?"none":[Math.round(Math.abs(l.speed)*.9),l.rpm,l.gear,l.shifting?1:0,l.gears.length,Math.round(l.charge*100),Math.round(l.boost*100),o,a,window.innerWidth].join("|");if(c===t)return!1;if(t=c,s.clearRect(0,0,o,a),s.fillStyle="rgba(29, 32, 33, 0.93)",s.fillRect(0,0,o,a),l===null)return!0;s.save(),s.scale(r,r);const p=a/r,k=document.documentElement.classList.contains("hud-density--skinny"),h=window.innerWidth>1100,g=window.innerWidth>820,u=12,b=p/2;let x=0;if(s.textBaseline="middle",s.textAlign="left",h){const E=k?48:64,f=4;s.fillStyle="#ffffff1f",It(s,x,b-f/2,E,f,2);const L=Math.max(l.maxRpm-l.idleRpm,1),B=Math.min(Math.max((l.rpm-l.idleRpm)/L,0),1);B>0&&(s.fillStyle=l.rpm>=l.shiftUpRpm?"#fe8019":"#ebdbb2cc",It(s,x,b-f/2,E*B,f,2)),x+=E+u}const y=k?18:24,S=k?9:11;s.fillStyle=Kr,s.font=`700 ${y}px ${tn}`;const d=`${Math.round(Math.abs(l.speed)*.9)}`;s.fillText(d,x,b);const m=s.measureText(d).width;if(s.font=`400 ${S}px ${tn}`,s.fillStyle="rgba(235, 219, 178, 0.55)",s.fillText("км/ч",x+m+3,b),x+=m+3+s.measureText("км/ч").width+8,g){const E=l.gears.length,f=k?16:20,L=4,B=l.gear<0?0:l.gear;for(let w=0;w<=E;w++){const v=x+w*(f+4),A=w===B;s.fillStyle=A?l.shifting?"#ffffff4d":"#ebdbb2e6":"#ffffff1a",It(s,v,b-f/2,f,f,L),s.fillStyle=A?l.shifting?"#ffffff8c":"#1d2021":"#ffffff73",s.font=`600 ${k?9:11}px ${tn}`,s.textAlign="center",s.fillText(w===0?"R":`${w}`,v+f/2,b),s.textAlign="left"}x+=(E+1)*(f+4)-4+u}if(h){const E=Math.min(Math.max(l.charge,0),1),f=Math.min(Math.max(l.boost,0),1),L=E>0?E:f;s.font=`400 9px ${tn}`,s.fillStyle="rgba(235, 219, 178, 0.8)",s.fillText(E>0?"ЗАРЯД":"БУСТ",x,b);const B=s.measureText("ЗАРЯД").width,w=k?40:56,v=3,A=x+B+5;s.fillStyle="#ffffff1f",It(s,A,b-v/2,w,v,2),L>0&&(s.fillStyle=f>0?"#fe8019":"#7b5cff",It(s,A,b-v/2,w*L,v,2))}return s.restore(),!0},reset(){t=""},destroy(){t=""}}}function qr(e,t){const n=document.createElement("div");n.className="cluster",n.setAttribute("role","group"),n.setAttribute("aria-label","Приборы машины");const s=document.createElement("div");s.className="cluster__revs";const o=document.createElement("span");s.append(o);const a=document.createElement("div");a.className="cluster__dials";const r=document.createElement("span");r.className="cluster__speed",r.textContent="0";const l=document.createElement("span");l.className="cluster__unit",l.textContent="км/ч";const c=document.createElement("span");c.append(r,l);const p=document.createElement("div");p.className="cluster__gearbox",a.append(c,p);const k=document.createElement("div");k.className="cluster__boost";const h=document.createElement("span");h.textContent="Заряд";const g=document.createElement("div");g.className="cluster__boostbar";const u=document.createElement("span");g.append(u),k.append(h,g),n.append(s,a,k);const b=document.createElement("style");b.textContent=Jr,document.head.append(b);let x=[],y=-1,S=0;const d=()=>{if(S++%4!==0)return;const E=e();if(!E)return;r.textContent=`${Math.round(Math.abs(E.speed)*.9)}`;const f=E.gears.length;if(f!==y){y=f,p.replaceChildren(),x=[];const R=f+1;for(let D=0;D<R;D++){const $=document.createElement("span");$.textContent=D===0?"R":`${D}`,p.append($),x.push($)}}const L=E.gear<0?0:E.gear;for(let R=0;R<x.length;R++)x[R]?.classList.toggle("engaged",R===L);p.classList.toggle("shifting",E.shifting);const B=Math.max(E.maxRpm-E.idleRpm,1),w=(E.rpm-E.idleRpm)/B;o.style.width=`${Math.min(Math.max(w,0),1)*100}%`,o.classList.toggle("redline",E.rpm>=E.shiftUpRpm);const v=Math.min(Math.max(E.charge,0),1),A=Math.min(Math.max(E.boost,0),1),T=v>0?v:A;u.style.width=`${T*100}%`,u.classList.toggle("firing",A>0),h.textContent=v>0?"Заряд":"Буст"};n.dataset.cleanup="1",(t??document.body).append(n);const m=window.setInterval(d,1e3/60/4);return{destroy(){window.clearInterval(m),n.remove(),b.remove()}}}function Qr(e,t){const n=e/t,s=Math.floor(n*6),o=n*6-s,a=.25,r=1-.75*o,l=.25+.75*o,c={0:[1,l,a],1:[r,1,a],2:[a,1,l],3:[a,r,1],4:[l,a,1],5:[1,a,r]},[p,k,h]=c[s%6]??[1,1,1];return new Ao(p,k,h,1)}function hs(e,t,n){const s=new va;return s.diffuse=new Ao(0,0,0),s.emissive=t,s.emissiveIntensity=2,s.blendType=Ea,s.opacity=n,s.depthWrite=!1,s.update(),s}function Zr(e,t,n=10){let s=null;const o=()=>{try{s??=new AudioContext;const w=s;w.state==="suspended"&&w.resume();const v=w.currentTime+.02,A=w.createOscillator();A.type="sawtooth",A.frequency.setValueAtTime(70,v),A.frequency.exponentialRampToValueAtTime(300,v+2.5);const T=w.createBiquadFilter();T.type="lowpass",T.Q.value=6,T.frequency.setValueAtTime(180,v),T.frequency.exponentialRampToValueAtTime(1800,v+2.5);const R=w.createGain();R.gain.setValueAtTime(1e-4,v),R.gain.exponentialRampToValueAtTime(.22,v+2.4),R.gain.setValueAtTime(.22,v+2.5),R.gain.linearRampToValueAtTime(0,v+2.7),A.connect(T).connect(R).connect(w.destination),A.start(v),A.stop(v+2.8);const D=2.4,$=w.createBufferSource(),z=w.createBuffer(1,Math.ceil(w.sampleRate*D),w.sampleRate),G=z.getChannelData(0);for(let ge=0;ge<G.length;ge++)G[ge]=Math.random()*2-1;$.buffer=z;const W=w.createBiquadFilter();W.type="bandpass",W.Q.value=2.5,W.frequency.setValueAtTime(250,v+2.5),W.frequency.exponentialRampToValueAtTime(5200,v+4.6);const q=w.createGain();q.gain.setValueAtTime(1e-4,v+2.5),q.gain.exponentialRampToValueAtTime(.3,v+2.62),q.gain.exponentialRampToValueAtTime(.001,v+4.8),$.connect(W).connect(q).connect(w.destination),$.start(v+2.5),$.stop(v+4.9)}catch{}},a=new nt("checkpoints");t.addChild(a);const r=(w,v)=>{const A=new uo(w,120,v),T=new uo(w,-20,v),R=e.systems.rigidbody?.raycastFirst(A,T);return R?R.point.y:0},l=(w,v)=>{const A=r(w,v);return Math.abs(r(w+4,v)-A)<1.2&&Math.abs(r(w,v+4)-A)<1.2},c=w=>{let v={x:0,z:0,y:0};for(let A=0;A<8;A++){const T=w/n*Math.PI*2+Math.random()*.6,R=60+Math.random()*200,D=Math.cos(T)*R,$=Math.sin(T)*R;if(v={x:D,z:$,y:r(D,$)},l(D,$))return v}return v},p=e.graphicsDevice,k=new as({ringRadius:4,tubeRadius:.14,sectorAngle:360,segments:48,sides:10}),h=new as({ringRadius:2.6,tubeRadius:.12,sectorAngle:360,segments:36,sides:10}),g=new as({ringRadius:1.5,tubeRadius:.1,sectorAngle:360,segments:24,sides:8}),u=new wa({radius:.35,height:60,heightSegments:1,capSegments:12}),b=Zt.fromGeometry(p,k),x=Zt.fromGeometry(p,h),y=Zt.fromGeometry(p,g),S=Zt.fromGeometry(p,u),d=[],m=new Map;for(let w=0;w<n;w++){const{x:v,z:A,y:T}=c(w),R=Qr(w,n),D=new nt(`checkpoint-${w}`);D.setPosition(v,T+.35,A);const $=(Et,Xe,ze,de)=>{const Ae=new nt("ring");return Ae.addComponent("render",{meshInstances:[new lo(Et,Xe)],castShadows:!1,receiveShadows:!1}),Ae.setEulerAngles(ze,0,de),D.addChild(Ae),Ae},z=hs(p,R,.9),G=hs(p,R,.55),W=hs(p,R,.28),q=$(b,z,0,0),ge=$(x,G,66,24),vt=$(y,G,108,-30),le=new nt("beam");le.addComponent("render",{meshInstances:[new lo(S,W)],castShadows:!1,receiveShadows:!1}),le.setLocalPosition(0,30,0),D.addChild(le),a.addChild(D);const Ke={info:{id:w,x:v,z:A,color:Math.round(R.r*255)<<16|Math.round(R.g*255)<<8|Math.round(R.b*255)},node:D,rings:[q,ge,vt],beam:le,mats:[z,G],beamMat:W,state:"alive",t:0};d.push(Ke),m.set(D,Ke)}const E=w=>{for(const v of d){if(v.state==="alive"){v.rings[0]?.rotate(0,w*50,0),v.rings[1]?.rotate(w*30,w*-70,0),v.rings[2]?.rotate(w*-45,0,w*60);continue}v.t+=w;const A=v.t;if(A<2.5){const T=A/2.5,R=1-(1-T)*(1-T),D=1+1.3*R;v.node.setLocalScale(D,D,D);const $=w*10*R;v.rings[0]?.rotate(0,$*50,0),v.rings[1]?.rotate($*30,$*-70,0),v.rings[2]?.rotate($*-45,0,$*60)}else if(A<5){const T=(A-2.5)/2.5,R=1-T*T,D=Math.max(2.3*R*R,.001);v.node.setLocalScale(D,D,D);const $=w*(10+T*40);v.rings[0]?.rotate(0,$*50,0),v.rings[1]?.rotate($*30,$*-70,0),v.rings[2]?.rotate($*-45,0,$*60),v.beam.setLocalScale(1,1+T*2.2,1),v.beam.setLocalPosition(0,30+T*45,0),v.beamMat.opacity=.28*(1-T),v.beamMat.update();for(let z=0;z<v.mats.length;z++){const G=z===0?.9:.55;v.mats[z].opacity=Math.max(G*(1-T),0),v.mats[z].update()}}}for(let v=d.length-1;v>=0;v--){const A=d[v];A.state==="dying"&&A.t>=5&&(A.node.destroy(),e.fire("checkpoint:visited",A.info),d.splice(v,1))}};e.on("update",E);const f=()=>t.findByName("vehicle");let L=0;const B=w=>{if(L+=w,L<.25)return;L=0;const A=f()?.getPosition();if(A)for(let T=d.length-1;T>=0;T--){const R=d[T],D=A.x-R.info.x,$=A.z-R.info.z;R.state==="alive"&&D*D+$*$<9*9&&(R.state="dying",R.t=0,o())}};return e.on("update",B),{list:()=>d.map(w=>w.info),destroy(){e.off("update",E),e.off("update",B),s?.close().catch(()=>{}),a.destroy()}}}const nn=55,ec=`
.compass {
    position: fixed;
    left: 50%;
    top: calc(env(safe-area-inset-top) + 92px);
    transform: translateX(-50%);
    z-index: 6;
    width: min(62vw, 560px);
    height: 38px;
    border-radius: 6px;
    border: 1px solid #ebdbb22e;
    /* Стекло заменено на плотный фон: backdrop-filter поверх живого канваса
       заставляет компоновщик пересчитывать размытие каждый кадр (полоса
       шириной min(62vw, 560px) — самая большая прозрачная площадь HUD после
       статусбара). 94% непрозрачности держат контраст и без преломления фона. */
    background: linear-gradient(180deg, #ebdbb226 0%, #282828f0 60%);
    box-shadow: inset 0 1px 0 #ebdbb22e, 0 4px 14px #00000040;
    /* Изолированный fixed-виджет без потомков вовне: containment убирает
       его из расчёта раскладки/перерисовки остальной страницы. */
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
/* Уведомление под компасом: сколько чекпоинтов осталось. Появляется снизу
   вверх с проявлением, через 2.4 с растворяется обратно. */
.compass-toast {
    position: fixed;
    left: 50%;
    top: calc(env(safe-area-inset-top) + 142px);
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
   просвет, который в обычном режиме занимала высота полосы. В минимальном
   режиме компаса на кадре нет вовсе: это ровно та деталь, которая мешает
   снимать кадр, и потерять её в заезде ничего не значит. */
:root.hud-density--skinny .compass { height: 26px; }
:root.hud-density--skinny .compass-toast {
    top: calc(env(safe-area-inset-top) + 126px);
    padding: 4px 10px;
    font-size: 11px;
}
:root.hud-density--minimal .compass,
:root.hud-density--minimal .compass-toast { display: none; }
`,tc={0:"С",45:"СВ",90:"В",135:"ЮВ",180:"Ю",225:"ЮЗ",270:"З",315:"СЗ"};function nc(){const e=document.documentElement.classList;return e.contains("hud-density--minimal")?0:e.contains("hud-density--skinny")?26:38}function sc(){return document.documentElement.classList.contains("hud-density--minimal")}function ca(e,t,n){let s=null;const o=()=>{try{s??=new AudioContext,s.state==="suspended"&&s.resume();const u=s,b=u.currentTime+.01;for(const[x,y]of[880,1318.51].entries()){const S=u.createOscillator(),d=u.createGain();S.type="sine",S.frequency.value=y;const m=b+x*.09;d.gain.setValueAtTime(0,m),d.gain.linearRampToValueAtTime(.16,m+.02),d.gain.exponentialRampToValueAtTime(.001,m+.38),S.connect(d).connect(u.destination),S.start(m),S.stop(m+.42)}}catch{}},a=document.createElement("div");a.className="compass-toast",document.body.append(a);let r=null;const l=u=>{a.textContent=u,a.classList.add("compass-toast--on"),o(),r!==null&&window.clearTimeout(r),r=window.setTimeout(()=>{a.classList.remove("compass-toast--on"),r=null},2400)};let c=-1,p="";const k=u=>(u*180/Math.PI+360)%360,h=(u,b)=>{let x=(u-b)%360;return x>=180&&(x-=360),x<-180&&(x+=360),x};return{draw:(u,b,x)=>{if(x===0||b===0)return!1;const y=e();if(y===null)return p!==""?(u.clearRect(0,0,b,x),p="",!0):!1;const S=k(y),d=t(),m=n();m.length!==c&&(c>=0&&m.length<c&&l(m.length>0?`Чекпоинт собран · осталось: ${m.length}`:"Все чекпоинты собраны!"),c=m.length);const E=`${b}x${x}|${S.toFixed(2)}|${d?`${d.x.toFixed(1)},${d.z.toFixed(1)}`:""}|${m.length}`;if(E===p)return!1;p=E,u.clearRect(0,0,b,x);const f=u.createLinearGradient(0,0,0,x);f.addColorStop(0,"rgba(235, 219, 178, 0.15)"),f.addColorStop(.6,"rgba(40, 40, 40, 0.94)"),u.fillStyle=f,u.fillRect(0,0,b,x),u.strokeStyle="rgba(235, 219, 178, 0.18)",u.lineWidth=1,u.strokeRect(.5,.5,b-1,x-1);const L=b/(nn*2),B=b/2,w=Math.round((S-nn)/15)*15;u.textAlign="center",u.textBaseline="middle";for(let v=w;v<=S+nn;v+=15){const A=B+h(v,S)*L,T=tc[(v%360+360)%360];T!==void 0?(u.fillStyle="#ebdbb2e6",u.font=`600 ${Math.round(x*.34)}px system-ui, sans-serif`,u.fillText(T,A,x*.42)):v%45===0?(u.fillStyle="#ebdbb280",u.fillRect(A-1,x*.3,2,x*.22)):(u.fillStyle="#ebdbb240",u.fillRect(A-1,x*.36,2,x*.12))}if(u.fillStyle="#fe8019",u.fillRect(B-1.5,x*.14,3,x*.2),d){const v=[...m].map(R=>{const D=R.x-d.x,$=R.z-d.z;return{cp:R,dist:Math.round(Math.hypot(D,$)),off:h(k(Math.atan2(D,-$)),S)}}).sort((R,D)=>R.off-D.off);let A=-1e9,T=0;for(const{cp:R,dist:D,off:$}of v){const z=`#${R.color.toString(16).padStart(6,"0")}`;let G=B+$*L;if(Math.abs($)>nn-4){G=B+Math.sign($)*(b/2-14*(b/560)),u.save(),u.translate(G,x*.42),u.rotate(Math.sign($)*Math.PI/2),u.fillStyle=z,u.beginPath(),u.moveTo(0,-6*(b/560)),u.lineTo(5*(b/560),3*(b/560)),u.lineTo(-5*(b/560),3*(b/560)),u.closePath(),u.fill(),u.restore();continue}Math.abs(G-A)<34*(b/560)?T=(T+1)%2:T=0,A=G;const q=5*(b/560);u.fillStyle=z,u.beginPath(),u.moveTo(G,x*.2-q),u.lineTo(G+q,x*.2),u.lineTo(G,x*.2+q),u.lineTo(G-q,x*.2),u.closePath(),u.fill(),u.fillStyle="#ebdbb2d9",u.font=`500 ${Math.round(x*.26)}px system-ui, sans-serif`,u.fillText(`${D}м`,G,x*(.62+T*.24))}}return!0},reset(){p=""},destroy(){r!==null&&window.clearTimeout(r),s?.close().catch(()=>{}),a.remove()}}}function oc(e,t,n){const s=document.createElement("div");s.className="compass";const o=document.createElement("canvas");s.append(o);const a=document.createElement("style");a.textContent=ec,s.append(a),document.body.append(s);const r=ca(e,t,n),l=()=>{const g=Math.min(window.devicePixelRatio||1,2);o.width=Math.round(o.clientWidth*g),o.height=Math.round(o.clientHeight*g)};l(),window.addEventListener("resize",l);let c=-1,p=-1,k=0;const h=()=>{const g=o.getContext("2d");g&&(o.width!==c||o.height!==p)&&(c=o.width,p=o.height,g.clearRect(0,0,o.width,o.height)),g&&r.draw(g,o.width,o.height),k=requestAnimationFrame(h)};return k=requestAnimationFrame(h),{destroy(){cancelAnimationFrame(k),window.removeEventListener("resize",l),r.destroy(),s.remove(),a.remove()}}}function ac(e,t){const n=e.graphicsDevice,s=document.createElement("canvas"),o=s.getContext("2d",{alpha:!0});if(!o)return{active:!1,destroy(){}};const a=(b,x)=>{s.width=Math.max(1,b),s.height=Math.max(1,x)};a(n.width,n.height);let r;const l=()=>{const b=new Na(n,{name:"hud-surface",format:La,width:s.width,height:s.height,mipmaps:!1,minFilter:fo,magFilter:fo,addressU:po,addressV:po,anisotropy:1,premultiplyAlpha:!0,srgb:!0});return b.setSource(s),b};try{r=l()}catch(b){return console.warn("[hud] текстура HUD не создалась — HUD остаётся DOM-ом",b),{active:!1,destroy(){}}}let c,p,k;try{c=new nt("hud-screen"),c.addComponent("screen",{screenSpace:!0,scaleMode:Sa,resolution:new is(n.width,n.height)}),p=new nt("hud-surface"),p.addComponent("element",{type:Ca,texture:r,anchor:new ka(0,0,0,0),pivot:new is(0,0),width:n.width,height:n.height,opacity:1,useInput:!1}),c.addChild(p),e.root.addChild(c),k=p.element}catch(b){return console.warn("[hud] слой HUD не поднялся — HUD остаётся DOM-ом",b),r.destroy(),{active:!1,destroy(){}}}const h=()=>{const b=n.width,x=n.height;if(!(b<=0||x<=0)){if(s.width!==b||s.height!==x){a(b,x);const y=l();k.texture=y,r.destroy(),r=y}c.screen&&(c.screen.resolution=new is(b,x)),k.width=b,k.height=x}};let g=!0;const u=()=>{h();const b={ctx:o,width:s.width,height:s.height,scale:s.width>0?s.width/Math.max(window.innerWidth,1):1};(t.draw(b)||g)&&(g=!1,r.setSource(s),r.upload())};return e.on("prerender",u),n.on(mo.EVENT_RESIZE,h),{active:!0,destroy(){e.off("prerender",u),n.off(mo.EVENT_RESIZE,h),c.destroy(),r.destroy()}}}function ic(e,t,n,s,o,a){e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o)}function rc(e){const t=ca(e.getHeading,e.getVehicle,e.getCheckpoints),n=Xr(e.read),s=()=>{if(sc())return null;const l=Math.min(window.innerWidth*.62,560),c=nc();if(l<40||c<=0)return null;const p=e.safeTop()+(c===26?126:92);return{x:(window.innerWidth-l)/2,y:p,w:l,h:c}},o=()=>{const l=e.clusterHost,c=l.parentElement;if(!c||l.offsetParent===null&&c.clientHeight===0)return null;const p=c.getBoundingClientRect();return p.height<4?null:{x:p.left,y:p.top,w:p.width,h:p.height}},a=()=>{const l=e.clusterHost,c=o();if(!c)return null;const p=l.getBoundingClientRect();return{x:p.left>0?p.left:c.x+16,y:c.y,w:Math.min(480,Math.max(c.w,240)),h:c.h}};let r="";return{draw(l){const{ctx:c,width:p,height:k,scale:h}=l,g=s(),u=a(),b=o(),x=[p,k,g?`${g.x.toFixed(0)},${g.y.toFixed(0)},${g.w.toFixed(0)},${g.h.toFixed(0)}`:"none",u?`${u.x.toFixed(0)},${u.y.toFixed(0)},${u.w.toFixed(0)},${u.h.toFixed(0)}`:"none",b?`${b.x.toFixed(0)},${b.y.toFixed(0)},${b.w.toFixed(0)},${b.h.toFixed(0)}`:"none"].join("|"),y=x!==r;y&&(r=x,c.clearRect(0,0,p,k),t.reset(),n.reset());let S=!1;if(y&&b){const d=b.x*h,m=b.y*h,E=b.w*h,f=b.h*h;c.save(),ic(c,d,m,E,f,Math.max(4,6*h)),c.fillStyle="rgba(29, 32, 33, 0.93)",c.fill(),c.strokeStyle="rgba(235, 219, 178, 0.2)",c.lineWidth=Math.max(1,h),c.stroke(),c.restore()}return g&&(c.save(),c.translate(g.x*h,g.y*h),t.draw(c,g.w*h,g.h*h)&&(S=!0),c.restore()),u&&(c.save(),c.translate(u.x*h,u.y*h),n.draw(c,u.w*h,u.h*h,h)&&(S=!0),c.restore()),S||y},destroy(){t.destroy(),n.destroy()}}}function cc(e){let t=0,n=0;const s=e.autoRender,o=()=>{const l=qo();t=l>0?1e3/l:0,n=t,e.autoRender=t===0?s:!1},a=l=>{t!==0&&(n+=l*1e3,n>=t&&(n=0,e.renderNextFrame=!0))};o(),e.on("update",a);const r=Qo(o);return{destroy(){e.off("update",a),r(),e.autoRender=s}}}let la=1,Ye=null;function lc(){return Xo()*la}function sl(e){la=e,Ss()}function Ss(){Ye?.graphicsDevice&&(Ye.graphicsDevice.maxPixelRatio=lc(),Ye.resizeCanvas(),Ye.updateCanvasSize())}function dc(e){Ye=e,Ss();const t=Qo(()=>{Ss()});return()=>{t(),Ye===e&&(Ye=null)}}const uc=250,mc="menuRenderFps",pc=`
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
`;function fc(e=null){const t=document.createElement("div");t.className="mini-stats",t.setAttribute("role","status"),t.setAttribute("aria-label","Статистика кадра");const n=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");t.append(n,s,o,a);const r=document.createElement("style");r.id="mini-stats-style",r.textContent=pc,document.head.append(r);const l=S=>{t.classList.toggle("mini-stats--inline",S!==null);const d=S??document.body;t.parentElement!==d&&d.append(t)};l(e);let c=null,p=bn(),k=!1;const h=()=>me("fps")||me("cpu")||me("draw")||me("vram"),g=()=>{t.classList.toggle("visible",p&&c!==null&&h())},u=(S,d,m)=>{const E=d.fps,f=E>0&&E<30;if(f!==k&&(k=f,n.classList.toggle("warn",f)),m.fps){const L=d.user.get(mc),B=typeof L=="number"&&L>0?` · рендер ${L}`:"";n.textContent=`${E>0?Math.round(E):"—"} FPS${B} · ${d.frameTime.toFixed(1)} ms`}m.cpu&&(s.textContent=`CPU ${d.cpuUpdateTime.toFixed(1)} / ${d.cpuRenderTime.toFixed(1)} / ${d.cpuPhysicsTime.toFixed(1)} мс`),m.draw&&(o.textContent=`Draw ${gs(d.drawCallCount)} · Прим. ${gs(d.frame.primitives)} · Шейд. ${gs(d.frame.shaders)}`),m.vram&&(a.textContent=`VRAM ${Math.round(d.vramTotalBytes/1048576)} МБ · ${S.graphicsDevice.width}×${S.graphicsDevice.height} ${S.graphicsDevice.isWebGPU?"WebGPU":"WebGL2"}`)},b=()=>{const S=c;if(!S||!p)return;const d={fps:me("fps"),cpu:me("cpu"),draw:me("draw"),vram:me("vram")};n.hidden=!d.fps,s.hidden=!d.cpu,o.hidden=!d.draw,a.hidden=!d.vram,u(S,S.stats,d)};g();const x=window.setInterval(b,uc),y=Wo(()=>{p=bn(),g(),b()});return{setHost(S){l(S),b()},setApp(S){c=S,g(),S&&b()},destroy(){window.clearInterval(x),y(),t.remove(),r.remove()}}}function gs(e){return Number.isFinite(e)?e>=1e6?`${Math.round(e/1e5)}М`:e>=1e4?`${Math.round(e/1e3)}к`:`${Math.round(e)}`:"—"}const bc="hud-density--skinny",hc="hud-density--minimal";function gc(){const e=document.documentElement,t=()=>{const n=Ki();e.classList.toggle(bc,n!=="full"),e.classList.toggle(hc,n==="minimal")};return t(),Wo(t)}function ol(){return 1}const No="blendars-scrollbar",xc=[".dlg__body",".settings__scroll",".settings__tabs",".actions",".mp__list"],Fe=e=>xc.map(t=>`${t}${e}`).join(`,
`),_c=`
/* Firefox: тонкая полоса, ползунок gray на дорожке bg1. */
@supports not selector(::-webkit-scrollbar) {
    ${Fe("")} {
        scrollbar-width: thin;
        scrollbar-color: #928374 #28282899;
    }
}

@media (hover: hover) and (pointer: fine) {
    /* Chromium и WebKit. 12px — под штрих 8px плюс прозрачная рамка ползунка. */
    ${Fe("::-webkit-scrollbar")} {
        width: max(0.75rem, 12px);
        height: max(0.75rem, 12px);
    }
    /* Дорожка — тот же тёмный серый, что подложка панелей: полоса читается как
       часть окна, а не как плашка поверх текста. */
    ${Fe("::-webkit-scrollbar-track")} {
        background: #28282899;
        border-radius: 999px;
    }
    /* Стрелочные кнопки в старых WebKit — лишний хром. */
    ${Fe("::-webkit-scrollbar-button")} {
        display: none;
        width: 0;
        height: 0;
    }
    /* Прозрачная рамка в 2px + background-clip: padding-box оставляют круглый
       штрих 8px, а не прямоугольник во всю ширину полосы. */
    ${Fe("::-webkit-scrollbar-thumb")} {
        background: #928374;
        border: 1px solid transparent;
        background-clip: padding-box;
        border-radius: 999px;
    }
    ${Fe("::-webkit-scrollbar-thumb:hover")} { background-color: #ebdbb2; }
    ${Fe("::-webkit-scrollbar-thumb:active")} { background-color: #fe8019; }
    /* Уголок на пересечении двух полос серым квадратом вылезал бы в углу
       колонки вкладок, где полоса одна. */
    ${Fe("::-webkit-scrollbar-corner")} { background: transparent; }
}
`;function yc(){if(document.getElementById(No))return;const e=document.createElement("style");e.id=No,e.textContent=_c,document.head.append(e)}let Lo=!1;function wc(){try{return new URLSearchParams(location.search).has("vk_app_id")}catch{return!1}}const vc=1e4;async function Ec(){if(Lo||!wc())return!1;Lo=!0;try{const{default:e}=await X(async()=>{const{default:n}=await import("./index.Dp09MIqC.js");return{default:n}},[]),t=await Promise.race([e.send("VKWebAppInit"),new Promise((n,s)=>{setTimeout(()=>s(new Error("платформа не ответила на VKWebAppInit")),vc)})]);if(t?.result)return console.info("[vk] VKWebAppInit: платформа подтвердила запуск приложения"),!0;console.warn("[vk] VKWebAppInit: платформа ответила без подтверждения",t)}catch(e){console.warn("[vk] не удалось инициализировать приложение ВКонтакте",e)}return!1}const Sc="vehicle",al="vehicleInput",il="vehicleWheel",kc="driveCamera",Ws=document.getElementById("app");if(!Ws)throw new Error("#app not found");yc();let Q=null,ks=null,Ve=null,Cs=null;const Ut={boot:.1,device:.35,decoders:.7,background:.95},Be=new Ma(document.body);let Ht=null,Ns=null,$t=null,Vt=null,gn=null,fe=!1,Ee=null,xn=null;const Ls="blendars.backend";function _n(e){try{e?localStorage.setItem(Ls,e):localStorage.removeItem(Ls)}catch{}}function Cc(){try{const e=localStorage.getItem(Ls);return e==="webgpu"||e==="webgl2"?e:null}catch{return null}}function Nc(){const e=new URLSearchParams(location.search).get("backend");return e==="webgpu"||e==="webgl2"?e:null}let _t=Nc()??Cc();const U=new Hr(Ws,{onScene:e=>{ua(U,e)},onBack:()=>{Oc(U)},onRecord:()=>{Gc()}});window.__blendarsEnterSmoke=()=>{Dc(U)};const ye=Yr(U.settings.backendSlot,{onSwitch:()=>{$c()}});{const e=document.createElement("style");e.textContent=Vr,document.head.append(e)}navigator.gpu||ye.setUnavailable("WebGPU не поддерживается этим браузером");function Ys(e,t){const n=t==="scene";e.setMode(t),e.setSceneChrome(n),yn.setHost(e.statsHostFor(n))}const yn=fc(U.statsHost);gc();Be.setStage("интерфейс",Ut.boot);window.__blendarsMenuReady=!0;Ec();Ac();function Lc(e){xn?.();const t=dc(e),n=cc(e);xn=()=>{t(),n.destroy()}}async function Ac(){try{Be.setStage("пресет настроек",Ut.boot);const{askBootPreset:e}=await X(async()=>{const{askBootPreset:s}=await import("./boot-preset.DpdEF7Y5.js");return{askBootPreset:s}},__vite__mapDeps([3,2]));if(await e(),_t==="webgpu"){const{confirmWebgpuSwitch:s}=await X(async()=>{const{confirmWebgpuSwitch:a}=await import("./confirm-dialog.BoAueR29.js");return{confirmWebgpuSwitch:a}},[]);await s()||(_t=null,_n(null),U.setStatus("Запуск на WebGL2 — WebGPU не подтверждён"))}const t=await yt((s,o)=>{Be.setStage(s,o??void 0),Be.updateFromResources(),Rc()});window.__blendarsEngine={backend:t.backend},window.__blendarsApp=t.app,Vt=t.backend,ye.setBackend(t.backend),yn.setApp(t.app),Lc(t.app),t.backend==="webgpu"&&da(t),Be.setStage("сцена меню",Ut.background);const{buildMenuBackground:n}=await X(async()=>{const{buildMenuBackground:s}=await import("./menu-background.Ct5qIB9S.js");return{buildMenuBackground:s}},__vite__mapDeps([4,2,5,6]));Ee=await n(t.app),window.__blendarsBackgroundReady=!0,Tc(),Be.setStage("готово",1),U.setStatus(""),await Be.hide(),window.__blendarsInteractive=!0,console.info("[blendars] boot complete",t.backend)}catch(e){console.error("[blendars] boot failed",e),Be.setError("Не удалось запустить рендер. Проверьте поддержку WebGPU/WebGL2 в браузере."),window.__blendarsInteractive=!0}}async function Rc(){const e=new URLSearchParams(location.search).get("bootDelay");if(!e)return;const t=Number(e);!Number.isFinite(t)||t<=0||await new Promise(n=>setTimeout(n,Math.min(t,3e4)))}async function Tc(){try{const{probeServiceWorker:e}=await X(async()=>{const{probeServiceWorker:n}=await import("./capabilities.Vl_UvQZj.js");return{probeServiceWorker:n}},[]),t=await e("/blend-ars/sw.js");console.info(t==="registered"?"[blendars] Service Worker зарегистрирован: оффлайн-оболочка доступна":`[blendars] Service Worker: ${t} — оффлайн-старт недоступен`)}catch(e){console.warn("[blendars] регистрация Service Worker не удалась",e)}}function yt(e){return Ht??=Pc(e),Ht}async function Pc(e){const{initEngine:t}=await X(async()=>{const{initEngine:a}=await import("./engine-bootstrap.Cufgd3LV.js");return{initEngine:a}},__vite__mapDeps([7,2])),n=document.createElement("canvas");n.className="game-canvas",n.style.zIndex="0",document.body.insertBefore(n,Ws),Ns=n;const s=_t??"webgl2";return t(n,{physics:!0,deviceTypes:s==="webgl2"?["webgl2","webgpu"]:["webgpu","webgl2"],skipAdapterProbe:s==="webgpu"&&_t!==null,onStage:(a,r)=>{r===1?e?.(a,Ut.decoders):e?.(a,Ut.device)}})}const Ic=5,Mc=1e3,Fc=3;function da(e){let t=0;$t?.();let n=null;const s=l=>{_n(null),Js("webgl2",{persist:!1,restoreScene:!1,reason:l})};let o=e.app.frame,a=0;const r=window.setInterval(()=>{if(document.hidden){o=e.app.frame;return}const l=e.app.frame;l===o?(a++,a>=Fc&&(window.clearInterval(r),s("кадры не идут — вероятно, WebGPU завис на первом кадре"))):(a=0,o=l)},Mc);$t=()=>{window.clearInterval(r),n?.(),n=null},X(async()=>{const{watchWebGpuErrors:l}=await import("./engine-bootstrap.Cufgd3LV.js");return{watchWebGpuErrors:l}},__vite__mapDeps([7,2])).then(({watchWebGpuErrors:l})=>{if(fe){$t?.();return}n=l(e.device,c=>{t++,console.warn(`[blendars] webgpu error #${t}: ${c.slice(0,200)}`),(Bc(c)||t>=Ic)&&(window.clearInterval(r),s(c))})})}function Bc(e){return/out of memory|not enough memory/i.test(e)}async function Js(e,t){if(fe)return;fe=!0,ye.setBusy(!0),t.reason&&console.warn("[blendars] смена рендера:",t.reason.slice(0,200));const{probeWebGpuAdapter:n}=await X(async()=>{const{probeWebGpuAdapter:a}=await import("./engine-bootstrap.Cufgd3LV.js");return{probeWebGpuAdapter:a}},__vite__mapDeps([7,2])),s=setTimeout(()=>{U.setStatus("Рендер переключается дольше обычного… если не идёт — F9")},25e3);if(e==="webgpu"){const a=await n();if(!a){ye.setUnavailable("WebGPU не поддерживается этим браузером"),U.setStatus("WebGPU не поддерживается этим браузером"),clearTimeout(s),ye.setBusy(!1),fe=!1;return}a.stalled?console.warn("[blendars] зонд WebGPU не ответил — пробуем по явному запросу"):a.software&&U.setStatus(`WebGPU: софтверный адаптер (${a.label||"без описания"}) — рендер может упасть`);const{confirmWebgpuSwitch:r}=await X(async()=>{const{confirmWebgpuSwitch:c}=await import("./confirm-dialog.BoAueR29.js");return{confirmWebgpuSwitch:c}},[]);if(!await r()){U.setStatus("Остались на WebGL2 — WebGPU не подтверждён"),clearTimeout(s),ye.setBusy(!1),fe=!1;return}}const o=fa();o.setStage("смена рендера…");try{$t?.(),$t=null,o.setStage("смена рендера: остановка движка…"),Q?.destroy(),Q=null,window.__blendarsSceneReady=!1,ma(),pa(),Vs(null),Ee?.destroy(),Ee=null;const a=await Ht;Ht=null,Vt=null,yn.setApp(null),xn?.(),xn=null,a?.detachResize(),a?.app.destroy(),Ns?.remove(),Ns=null,_t=e,t.persist&&_n(e),o.setStage(`смена рендера: движок ${e.toUpperCase()}…`);const r=await yt();Vt=r.backend,window.__blendarsEngine={backend:r.backend},window.__blendarsApp=r.app,ye.setBackend(r.backend),yn.setApp(r.app),r.backend==="webgpu"&&da(r),r.backend!==e&&U.setStatus(`${e.toUpperCase()} недоступен — рендер: ${r.backend.toUpperCase()}`);const l=t.restoreScene===!1?null:gn;if(l)o.done(),await ua(U,l);else{gn=null,o.setStage("смена рендера: сцена меню…");const{buildMenuBackground:c}=await X(async()=>{const{buildMenuBackground:p}=await import("./menu-background.Ct5qIB9S.js");return{buildMenuBackground:p}},__vite__mapDeps([4,2,5,6]));Ee=await c(r.app),Ys(U,"menu"),U.setBusy(!1),r.backend===e&&U.setStatus(""),o.done()}}catch(a){if(console.error("[blendars] смена рендера не удалась",a),t.allowRetry!==!1&&e!=="webgl2"){o.done(),_t="webgl2",_n(null),fe=!1,ye.setBusy(!1),await Js("webgl2",{persist:!1,allowRetry:!1});return}o.fail("не удалось сменить рендер"),U.setStatus("Не удалось сменить рендер — перезагрузите страницу (F9)")}finally{clearTimeout(s),ye.setBusy(!1),fe=!1}}async function $c(){fe||Vt&&await Js(Vt==="webgpu"?"webgl2":"webgpu",{persist:!0})}async function Dc(e){if(!fe){e.setBusy(!0);try{if(await yt(),new URLSearchParams(location.search).get("scene")==="smoke"){const{buildSmokeScene:t}=await X(async()=>{const{buildSmokeScene:n}=await import("./smoke-scene.zwMI0kje.js");return{buildSmokeScene:n}},__vite__mapDeps([8,2]));Ee?.destroy(),Ee=null,t((await yt()).app)}e.setStatus("Ангар появится на этапе 4"),e.setBusy(!1)}catch(t){console.error("[blendars] enter game failed",t),e.setStatus("Не удалось открыть сцену"),e.setBusy(!1)}}}async function ua(e,t){if(fe)return;e.setBusy(!0),e.setStatus(t==="maserati"?"Загрузка сцены: мазерати…":"Загрузка сцены…");const n=fa();try{Ee?.destroy(),Ee=null;const s=await yt(),{buildVehicleScene:o}=await X(async()=>{const{buildVehicleScene:a}=await import("./vehicle-scene.Bnvi83pP.js");return{buildVehicleScene:a}},__vite__mapDeps([9,2,7,5]));Q=await o(s.app,a=>n.setStage(a),{body:t,onAssetProgress:(a,r)=>n.setStage(a,r)}),Ys(e,"scene"),e.setBusy(!1),e.setStatus("WASD / стрелки — ехать, пробел — ручник, R — сброс на месте, Q — плечо камеры"),gn=t,window.__blendarsSceneReady=!0,zc(s.app),Uc(s.app),Vs(()=>jc()),n.done()}catch(s){console.error("[blendars] vehicle scene failed",s),e.setStatus("Не удалось загрузить сцену"),n.fail(String(s?.message??s)),e.setBusy(!1)}}async function Oc(e){Q?.destroy(),Q=null,gn=null,window.__blendarsSceneReady=!1,Vs(null);const t=await yt(),{buildMenuBackground:n}=await X(async()=>{const{buildMenuBackground:s}=await import("./menu-background.Ct5qIB9S.js");return{buildMenuBackground:s}},__vite__mapDeps([4,2,5,6]));Ee=await n(t.app),Ys(e,"menu"),e.setBusy(!1),e.setStatus(""),ma(),pa()}function jc(){const e=Q?.root.findByName("camera"),t=e?.script?.get(kc);if(!e||!t)return null;const n=(o,a)=>typeof o=="number"&&Number.isFinite(o)?o:a,s=(o,a,r)=>o<a?a:o>r?r:o;return{read:()=>({yaw:n(t._manualYaw,0),lift:n(t._manualLift,0),zoom:n(t._zoom,1),shoulder:n(t.shoulder,1),distance:n(t.distance,6.4),height:n(t.height,2.5),fov:e.camera?n(e.camera.fov,60):60}),write:o=>{o.yaw!==void 0&&(t._manualYaw=s(o.yaw,-180,180)),o.lift!==void 0&&(t._manualLift=s(o.lift,-.6,3.4)),o.zoom!==void 0&&(t._zoom=s(o.zoom,.55,1.7)),o.shoulder!==void 0&&(t.shoulder=o.shoulder),o.distance!==void 0&&(t.distance=s(o.distance,3,15)),o.height!==void 0&&(t.height=s(o.height,1,6)),o.fov!==void 0&&e.camera&&(e.camera.fov=s(o.fov,40,90))},reset:()=>{t.resetLook()}}}async function Gc(){const e=(t,n)=>{U.setRecordState(t,n)};try{if(!Ve){const{GameRecorder:t}=await X(async()=>{const{GameRecorder:o}=await import("./video-recorder.ilLNPhk5.js");return{GameRecorder:o}},__vite__mapDeps([10,2,1])),n=Ht;if(n===null){e("error","движок не поднят, запись невозможна");return}const s=(await n.catch(()=>null))?.app??null;if(s===null){e("error","сначала войди в сцену");return}Ve=new t(s,{onState:(o,a)=>e(o,a),onProgress:o=>U.setRecordProgress(o)},{frameRate:Zo(),width:Yi(s.graphicsDevice.canvas.width||window.innerWidth),quality:ea(),keyFrameInterval:ta(),sound:Es(),attachAudio:o=>Q?.audio?.attachRecordStream(o)??(()=>{})})}if(Ve.recording){const t=await Ve.stop();t>0&&e("idle",`файл ${(t/1048576).toFixed(1)} МБ сохранён`)}else await Ve.start()}catch(t){e("error",t instanceof Error?t.message:"запись недоступна")}}function zc(e){const t=()=>Q?.root.findByName("vehicle")?.script?.get(Sc)??null,n=Q?Zr(e,Q.root,10):null,s=()=>n?.list()??[],o=()=>{const b=Q?.root.findByName("camera")?.forward;return b?Math.atan2(b.x,-b.z):null},a=()=>{const u=Q?.root.findByName("vehicle")?.getPosition();return u?{x:u.x,z:u.z}:null},r=document.createElement("div");r.style.cssText="position:fixed;left:0;top:0;width:0;height:0;padding-top:env(safe-area-inset-top);visibility:hidden;pointer-events:none",document.body.append(r);let l=0;const c=()=>{const u=Number.parseFloat(getComputedStyle(r).paddingTop);l=Number.isFinite(u)?u:0};c(),window.addEventListener("resize",c),window.addEventListener("orientationchange",c);let p=null,k=null,h=null;const g=rc({getHeading:o,getVehicle:a,getCheckpoints:s,read:t,clusterHost:U.clusterHost,safeTop:()=>l});p=ac(e,g),p.active?document.documentElement.classList.add("hud-in-canvas"):(p=null,g.destroy(),k=qr(t,U.clusterHost),h=oc(o,a,s)),ks=()=>{Ve?.destroy(),Ve=null,document.documentElement.classList.remove("hud-in-canvas"),p?.destroy(),p=null,k?.destroy(),h?.destroy(),n?.destroy(),window.removeEventListener("resize",c),window.removeEventListener("orientationchange",c),r.remove()}}function ma(){ks?.(),ks=null}function Uc(e){Q&&X(async()=>{const{attachTouchControls:t}=await import("./touch-controls.CkzsH8zU.js");return{attachTouchControls:t}},__vite__mapDeps([11,2])).then(({attachTouchControls:t})=>{Q&&(Cs=t(e,Q.root).destroy)})}function pa(){Cs?.(),Cs=null}function fa(){const e=document.createElement("div");e.className="loading",Ro(e);const t=document.createElement("div");t.className="loading__title",t.textContent="СЦЕНА";const n=document.createElement("div");n.className="loading__bar loading__bar--unknown";const s=document.createElement("div");s.className="loading__fill",n.append(s);const o=document.createElement("div");return o.className="loading__stage",o.style.opacity="0.8",o.style.fontSize="13px",o.style.textTransform="uppercase",e.append(t,n,o),document.body.append(e),{setStage(a,r){if(o.textContent=a,r===void 0||!Number.isFinite(r)){n.classList.add("loading__bar--unknown");return}n.classList.remove("loading__bar--unknown"),s.style.width=`${Math.round(Math.min(1,Math.max(0,r))*100)}%`},done(){e.remove()},fail(a){n.hidden=!0,o.textContent=`ошибка: ${a}`,setTimeout(()=>e.remove(),4e3)}}}window.addEventListener("keydown",e=>{e.key==="F9"&&location.reload()});export{tr as A,sr as B,ar as C,kc as D,wn as E,nl as F,Li as G,tl as H,il as V,fn as a,ot as b,sl as c,$e as d,Qc as e,qc as f,Pi as g,Kc as h,el as i,Jc as j,Sc as k,xs as l,Yc as m,Zc as n,Xc as o,ms as p,lr as q,Pt as r,_s as s,Wo as t,Vc as u,Wc as v,al as w,Xi as x,Zi as y,ol as z};
