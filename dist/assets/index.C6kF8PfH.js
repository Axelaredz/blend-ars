const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/music-player.D_N5SwP-.js","assets/music-audio.DNu4TXPq.js","assets/playcanvas.BiKF8DQR.js","assets/finish-card.B2Vlb96k.js","assets/boot-preset.jDQEzdSF.js","assets/menu-background.DQbJr5Hy.js","assets/engine-sound.CXPmmRea.js","assets/look-gestures.D7GS3G4t.js","assets/engine-bootstrap.D0SAjkWd.js","assets/smoke-scene.C4r09Tql.js","assets/vehicle-scene.M29HcJAR.js","assets/video-recorder.T8uFKfef.js","assets/touch-controls.B0RIng6o.js"])))=>i.map(i=>d[i]);
import{_ as ee,E as pt,T as vs,C as Qa,M as bn,a as Ao,b as Qo,S as Za,B as ei,V as Ro,c as ti,d as ni,e as si,f as oi,g as ai,A as To,F as Mo,P as ii}from"./playcanvas.BiKF8DQR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Po="blendars-loading",ri=`
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
`;function ci(){if(document.getElementById(Po))return;const e=document.createElement("style");e.id=Po,e.textContent=ri,document.head.append(e)}const li="/blend-ars/assets/loader.CPCrwQQc.webp",di="#282828",Io="blendars-splash",ui=`
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
    background-color: ${di};
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
`;function Zo(e){if(!document.getElementById(Io)){const s=document.createElement("style");s.id=Io,s.textContent=ui,document.head.append(s)}if(e.querySelector(":scope > .splash-logo")){e.classList.add("splash-host");return}const t=document.createElement("div");t.className="splash-logo";const n=document.createElement("img");n.src=li,n.alt="Blendars",t.append(n),e.prepend(t),e.classList.add("splash-host")}class mi{root;fill;bar;stageEl;bytesEl;errorEl;lastPercent=-1;lastBytesText="";lastStage="";constructor(t,n={}){if(this.root=document.createElement("div"),this.root.className="loading",ci(),Zo(this.root),this.root.setAttribute("role","progressbar"),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","100"),this.root.setAttribute("aria-valuenow","0"),this.root.setAttribute("aria-label","Загрузка"),n.title!==void 0){const o=document.createElement("h1");o.className="loading__title",o.textContent=n.title,this.root.append(o)}this.bar=document.createElement("div"),this.bar.className="loading__bar loading__bar--unknown",this.fill=document.createElement("div"),this.fill.className="loading__fill",this.bar.append(this.fill),this.bar.removeAttribute("aria-valuenow");const s=document.createElement("div");s.className="loading__row",this.stageEl=document.createElement("span"),this.stageEl.className="loading__stage",this.stageEl.textContent="старт",this.bytesEl=document.createElement("span"),this.bytesEl.className="loading__bytes",this.bytesEl.textContent="",s.append(this.stageEl,this.bytesEl),this.errorEl=document.createElement("div"),this.errorEl.className="loading__error",this.errorEl.hidden=!0,this.root.append(this.bar,s,this.errorEl),t.append(this.root)}setStage(t,n){t!==this.lastStage&&(this.stageEl.textContent=t,this.lastStage=t);const s=n!==void 0&&Number.isFinite(n);if(this.bar.classList.toggle("loading__bar--unknown",!s),s){const o=Math.round(Math.min(1,Math.max(0,n))*100);o!==this.lastPercent&&(this.fill.style.width=`${o}%`,this.root.setAttribute("aria-valuenow",String(o)),this.lastPercent=o)}}setError(t){this.bar.hidden=!0,this.stageEl.textContent="ошибка",this.errorEl.textContent=t,this.errorEl.hidden=!1}updateFromResources(){if(typeof performance.getEntriesByType!="function")return;const t=performance.getEntriesByType("resource");let n=0,s=0;for(const a of t)a.name.indexOf(location.origin)===0&&(n+=a.encodedBodySize||a.transferSize||0,s=Math.max(s,a.responseEnd||0));if(n<=0)return;const o=`${pi(n)} загружено`;o!==this.lastBytesText&&(this.bytesEl.textContent=o,this.lastBytesText=o)}hide(){return this.root.setAttribute("aria-hidden","true"),this.root.classList.add("hidden"),new Promise(t=>{let n=!1;const s=()=>{n||(n=!0,this.root.remove(),t())};this.root.addEventListener("transitionend",s,{once:!0}),setTimeout(s,400)})}}function pi(e){return e<1024?`${e} Б`:e<1024*1024?`${(e/1024).toFixed(0)} КБ`:`${(e/(1024*1024)).toFixed(1)} МБ`}const ea="/blend-ars/assets/LilitaOne-Regular.C8J_njg9.ttf",fi=new URL("/blend-ars/assets/fullscreen.C4xFj3BF.svg",import.meta.url).href,bi=new URL("/blend-ars/assets/fullscreen-exit.D85sBYy_.svg",import.meta.url).href,hi=new URL("/blend-ars/assets/info.BdEiL0Sf.svg",import.meta.url).href,gi=new URL("/blend-ars/assets/book-open.CLVm05VY.svg",import.meta.url).href,xi=new URL("/blend-ars/assets/trophy.DpYLSMCP.svg",import.meta.url).href,Fo=new URL("/blend-ars/assets/gear_six.TA3VDyxO.svg",import.meta.url).href,_i=new URL("/blend-ars/assets/camera-rotate.D-uiZS3m.svg",import.meta.url).href,yi=new URL("/blend-ars/assets/music-note.BpgtDFsX.svg",import.meta.url).href,vi=new URL("/blend-ars/assets/package.BDtnf6Kx.svg",import.meta.url).href,wi=new URL("/blend-ars/assets/flag.CeS1AlXY.svg",import.meta.url).href,Ei=new URL("/blend-ars/assets/garage.D_BJEZuB.svg",import.meta.url).href,Si=new URL("/blend-ars/assets/storefront.e4K1ebmi.svg",import.meta.url).href,ki=new URL("/blend-ars/assets/truck.rvSKQmy5.svg",import.meta.url).href,Ci=new URL("/blend-ars/assets/coupe.DdXCwqWg.svg",import.meta.url).href,Ni=new URL("/blend-ars/assets/x.D2ii0gML.svg",import.meta.url).href,Li=new URL("/blend-ars/assets/list.DXUiLcf_.svg",import.meta.url).href,Ai=new URL("/blend-ars/assets/triangle-left.DPdzCyZ0.svg",import.meta.url).href,Ul=new URL("/blend-ars/assets/stop-square.Cvj1GcXd.svg",import.meta.url).href,Hl=new URL("/blend-ars/assets/arrows_clockwise.Toz6NZFk.svg",import.meta.url).href,ta="/blend-ars/assets/ui-click.DcT3uYBZ.wav",Ri={click:1,toggle:1.22,window:.86},Ti=.5;let na=()=>.5,Pe=null,Ln=null,ut=null,$o=!1;function Mi(e){na=e}function Pi(){if($o)return;$o=!0;const e=window.AudioContext??window.webkitAudioContext;if(e!==void 0){try{Pe=new e}catch{Pe=null;return}fetch(ta).then(t=>t.arrayBuffer()).then(t=>Pe?.decodeAudioData(t)).then(t=>{Ln=t??null}).catch(()=>{Ln=null})}}function _e(e="click"){const t=Ti*na();if(t>0){if(Ln!==null&&Pe!==null){Pe.state==="suspended"&&Pe.resume().catch(()=>{});const n=Pe.createBufferSource();n.buffer=Ln,n.playbackRate.value=Ri[e];const s=Pe.createGain();s.gain.value=t,n.connect(s).connect(Pe.destination),n.start();return}ut===null&&(ut=new Audio(ta),ut.preload="auto"),ut.volume=t,ut.currentTime=0,ut.play().catch(()=>{})}}function Ye(e){const t=n=>{if(!n.isPrimary||n.pointerType==="mouse"&&n.button!==0)return;const s=n.target;if(!(s instanceof Element)||s.closest('[disabled], [aria-disabled="true"]')||s.closest('input[type="range"]'))return;if(s.closest('input[type="checkbox"], .modes__card, [role="switch"]')){_e("toggle");return}s.closest('button, .mitem, [role="button"], .dlg__close')&&_e("click")};return e.addEventListener("pointerdown",t,!0),()=>e.removeEventListener("pointerdown",t,!0)}function Wt(e){const t=n=>{const s=n.target;s instanceof HTMLInputElement&&s.type==="range"&&_e("click")};return e.addEventListener("change",t,!0),()=>e.removeEventListener("change",t,!0)}const Ii=`
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
`;function an(e){const t=document.createElement("div");if(t.className="dlg",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",e.title),!document.getElementById("dlg-style")){const i=document.createElement("style");i.id="dlg-style",i.textContent=Ii,document.head.append(i)}const n=document.createElement("div");n.className="dlg__panel";const s=document.createElement("h2");s.className="dlg__title",s.textContent=e.title;const o=document.createElement("div");return o.className="dlg__body",o.append(e.body),n.append(s,o),t.append(n),document.body.append(t),{root:t,open(){t.hidden=!1},close(){t.hidden=!0},destroy(){t.remove()}}}const Fi=[{body:"truck",title:"Джип",note:"Грузовик. Родное шасси, грузовая физика.",icon:ki},{body:"maserati",title:"Мазерати",note:"GT3-обвес на том же шасси.",icon:Ci}],$i=`
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
`;function Bi(e){if(!document.getElementById("game-modes-style")){const o=document.createElement("style");o.id="game-modes-style",o.textContent=$i,document.head.append(o)}const t=document.createElement("div");t.className="modes";const n=Fi.map(o=>{const a=document.createElement("button");a.className="modes__card",a.type="button",a.dataset.body=o.body;const i=document.createElement("span");i.className="modes__art",i.style.setProperty("--modes-icon",`url(${JSON.stringify(o.icon)})`);const c=document.createElement("span");c.className="modes__title",c.textContent=o.title;const l=document.createElement("p");return l.className="modes__note",l.textContent=o.note,a.append(i,c,l),a.addEventListener("pointerdown",f=>{f.preventDefault(),!a.disabled&&e(o.body)}),t.append(a),a}),s=an({title:"Режимы игры",body:t});return{dialog:s,open(){s.open()},setBusy(o){for(const a of n)a.disabled=o},destroy(){s.destroy()}}}const Di={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:8,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:6,fill:1.05,rimLeft:6.15,rimRight:6.3,spot:7.05,fog:.005,gamma:1,gammaStrength:.5,toneMapping:2,sunElevation:15,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:.3}},shadows:{val:{cascades:4,distribution:.95,blend:.12,distance:320,resolution:4096,bias:0,normalBias:.05}},postfx:{on:!0,val:{bloom:.1,bloomBlur:16,bloomThreshold:.2,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:.95,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:1,fps:0,msaa:!0}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},Oi={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:4,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:5,fill:.3,rimLeft:.5,rimRight:.5,spot:2,fog:.0035,gamma:0,gammaStrength:1.2,toneMapping:2,sunElevation:9,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:1}},shadows:{val:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3}},postfx:{on:!1,val:{bloom:0,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.48,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:.5,fps:30,msaa:!1}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},ji=[{key:"armored-truck-5t-300hp",name:"Бронированный грузовик — 5 т, 300 л.с.",note:"Тяжёлая машина: огромная инерция поворота, крен не валит, ручник срабатывает как тормоз. Дизель: пик момента на 1700 об/мин, отсечка 3400.",val:{mass:5e3,engineTorque:1260,peakTorqueRpm:1700,maxRpm:3400,finalDrive:7.5,brakeForce:11e3,engineBraking:.22,dragForce:4,rollingResistance:.03,lateralGripAssist:2.4,wheelGrip:5,rollInfluence:.12,antiRoll:1.2,inertiaScale:2.8,inertiaRoll:1.9,inertiaPitch:1.6,suspStiffness:26,suspDamping:2.6,suspCompression:5.2,suspTravel:.45,suspForce:7e4,highSpeedLock:.5,highSpeedLockAt:90}},{key:"muscle-car-4t-500hp",name:"Muscle car — 4 т, 500 л.с.",note:"Кузов на мягких пружинах: нос гуляет, на скорости ложится на борт и переворачивается. Атмосферник: пик 4200 об/мин, отсечка 5600.",val:{mass:4e3,engineTorque:850,peakTorqueRpm:4200,maxRpm:5600,finalDrive:6.5,brakeForce:15e3,engineBraking:.1,dragForce:2,rollingResistance:.015,lateralGripAssist:.6,wheelGrip:4.2,rollInfluence:.8,antiRoll:.25,inertiaScale:1.8,inertiaRoll:.6,inertiaPitch:.9,suspStiffness:22,suspDamping:2.4,suspCompression:4.6,suspTravel:.34,suspForce:62e3,highSpeedLock:.6,highSpeedLockAt:130}}],sa="blendars.presets.v1",oa="blendars-settings",aa=1;let re={active:null,list:[]},Bo=!1;function Oe(){if(Bo)return re;Bo=!0;try{const e=localStorage.getItem(sa);if(!e)return re;const t=JSON.parse(e);if(!t||typeof t!="object")return re;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=zi(o);a&&s.push(a)}re={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return re}function zi(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Tt(){try{localStorage.setItem(sa,JSON.stringify(re))}catch{}}function Fs(){return Oe().list.slice().sort((t,n)=>n.created-t.created)}function An(){return Oe().active}function Gi(){const e=Oe();return e.active?e.list.find(t=>t.id===e.active)??null:null}function $s(e){Oe(),re.active=e,Tt()}function ft(e,t,n=Date.now()){Oe();const s={id:Ki(n),name:e.trim()||We(new Date(n)),created:n,data:t};return re.list.push(s),re.active=s.id,Tt(),s}function Ui(e,t){const s=Oe().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,Tt(),!0):!1}function ia(e,t){const s=Oe().list.find(o=>o.id===e);return s?(s.data=t,Tt(),!0):!1}function Hi(e){Oe();const t=re.list.findIndex(n=>n.id===e);t<0||(re.list.splice(t,1),re.active===e&&(re.active=null),Tt())}function We(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function Vi(){Oe(),re={active:null,list:[]},Tt()}function Wi(e){const t={app:oa,version:aa,name:e.name,created:e.created,data:e.data},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`${Ji(e.name)}.json`,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Yi(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==oa||n.version!==aa||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function Ji(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function Ki(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const ra="blendars.physics-presets.v1",Xi="blendars-physics",qi=1;let le={active:null,list:[]},Do=!1;function rn(){if(Do)return le;Do=!0;try{const e=localStorage.getItem(ra);if(!e)return le;const t=JSON.parse(e);if(!t||typeof t!="object")return le;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=Qi(o);a&&s.push(a)}le={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return le}function Qi(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Ys(){try{localStorage.setItem(ra,JSON.stringify(le))}catch{}}function Zi(){return rn().list.slice().sort((e,t)=>t.created-e.created)}function er(){return rn().active}function Oo(e){rn(),le.active=e,Ys()}function ws(e,t,n=Date.now()){rn();const s={id:or(n),name:e.trim()||nr(new Date(n)),created:n,data:t};return le.list.push(s),le.active=s.id,Ys(),s}function tr(e){rn();const t=le.list.findIndex(n=>n.id===e);t<0||(le.list.splice(t,1),le.active===e&&(le.active=null),Ys())}function nr(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function sr(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==Xi||n.version!==qi||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function or(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Js="blendars.sound-effects.v3",Ks="blendars.sound-effects.v2",ca=[["engine","Двигатель"],["road","Шум качения"],["skid","Скрежет шин"],["shift","Переключение передач"],["impact","Удары кузова"],["landing","Посадка на колёса"],["music","Фоновая музыка"],["uiClick","Клики меню"]],la=ca.map(([e])=>e),da={engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},ar={engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1},ve={...da},be={...ar},Ee={engineTorque:{label:"Момент двигателя (Н·м)",def:520,off:520,min:200,max:1600,decimals:0},peakTorqueRpm:{label:"Обороты пика момента",def:1700,off:1700,min:800,max:6e3,decimals:0},maxRpm:{label:"Отсечка двигателя",def:4200,off:4200,min:2e3,max:8e3,decimals:0},finalDrive:{label:"Главная пара",def:7,off:7,min:3,max:12,decimals:2},brakeForce:{label:"Сила тормозов (Н)",def:6500,off:6500,min:2e3,max:2e4,decimals:0},mass:{label:"Масса кузова (кг)",def:2200,off:2200,min:1200,max:8e3,decimals:0},engineBraking:{label:"Торможение двигателем",def:.15,off:.07,min:0,max:.4,decimals:2},dragForce:{label:"Сопротивление воздуха",def:1.75,off:0,min:0,max:4,decimals:2},rollingResistance:{label:"Сопротивление качения",def:.02,off:0,min:0,max:.06,decimals:3},lateralGripAssist:{label:"Помощь бокового сцепа",def:1.5,off:0,min:0,max:8,decimals:1},wheelGrip:{label:"Сцепление колёс",def:4,off:2.7,min:1,max:10,decimals:1},rollInfluence:{label:"Крен (перенос нагрузки)",def:.3,off:.08,min:0,max:1.2,decimals:2},suspStiffness:{label:"Жёсткость пружины",def:20,off:20,min:5,max:80,decimals:1},suspDamping:{label:"Демпфер (распускание)",def:2.3,off:2.3,min:.5,max:8,decimals:2},suspCompression:{label:"Демпфер (сжатие)",def:4.4,off:4.4,min:.5,max:12,decimals:2},suspTravel:{label:"Ход подвески",def:.35,off:.35,min:.1,max:.8,decimals:2},suspForce:{label:"Предел силы пружины (Н)",def:2e4,off:2e4,min:5e3,max:15e4,decimals:0},suspRelVel:{label:"Демпфер и скорость кузова",def:1,off:1,min:0,max:2,decimals:2},antiRoll:{label:"Стабилизатор (рычаг)",def:0,off:0,min:0,max:2.5,decimals:2},inertiaScale:{label:"Инерция поворота (yaw)",def:1.7,off:1,min:.3,max:3.5,decimals:2},inertiaRoll:{label:"Инерция крена (переворот)",def:1.2,off:1,min:.3,max:2.5,decimals:2},inertiaPitch:{label:"Инерция тангажа (клевок)",def:1.2,off:1,min:.3,max:2.5,decimals:2},highSpeedLock:{label:"Спад угла руля (доля)",def:.55,off:.4,min:.2,max:1,decimals:2},highSpeedLockAt:{label:"Скорость спада руля",def:100,off:80,min:50,max:200,decimals:0,unit:"kmh"},camTurnRate:{label:"Камера: скорость поворота",def:3.5,off:2.2,min:1,max:6,decimals:1},camFollowRate:{label:"Камера: сглаживание",def:11,off:9,min:4,max:20,decimals:0},skidThreshold:{label:"Порог звука юза",def:.15,off:.3,min:0,max:.5,decimals:2}},we=Object.keys(Ee),Xs="blendars.physics.v1",oe={},ce={};ir();function ir(){for(const e of we)oe[e]=!0,ce[e]=Ee[e].def}function rr(){try{const e=localStorage.getItem(Xs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:null,o=typeof n.val=="object"&&n.val!==null?n.val:null;for(const a of we){const i=Ee[a],c=s?.[a];typeof c=="boolean"&&(oe[a]=c);const l=o?.[a];typeof l=="number"&&Number.isFinite(l)&&(ce[a]=Math.min(i.max,Math.max(i.min,l)))}}catch{}}function bt(){try{localStorage.setItem(Xs,JSON.stringify({on:oe,val:ce}))}catch{}}function Vl(e){return oe[e]?ce[e]:Ee[e].off}const yn=[];function Wl(e){return yn.push(e),()=>{const t=yn.indexOf(e);t>=0&&yn.splice(t,1)}}const vn=[];function te(){for(const e of vn)e()}function cr(e){return vn.push(e),()=>{const t=vn.indexOf(e);t>=0&&vn.splice(t,1)}}function ht(){for(const e of yn)e();te()}function Es(e){const t=Ee[e],n=ce[e];return t.unit==="kmh"?`${Math.round(n)} км/ч`:n.toFixed(t.decimals)}const ua=[0,1,2,3,4],lr=["линейный","филмик","ACES","нейтральный","без тонмаппинга"],$e={exposure:{label:"Экспозиция кадра",def:.5,min:.5,max:10,decimals:1},key:{label:"Яркость солнца",def:1,min:0,max:10,decimals:2},fill:{label:"Заполняющий свет",def:.3,min:0,max:15,decimals:2},rimLeft:{label:"Контровой слева",def:.5,min:0,max:15,decimals:2},rimRight:{label:"Контровой справа",def:.5,min:0,max:15,decimals:2},spot:{label:"Верхний софтбокс",def:2,min:0,max:15,decimals:2},fog:{label:"Туман задника",def:.0035,min:0,max:.05,decimals:4},gamma:{label:"Гамма-коррекция (sRGB)",def:1,min:0,max:1,decimals:0,options:[0,1]},gammaStrength:{label:"Сила гаммы",def:1.2,min:.5,max:3,decimals:2},toneMapping:{label:"Тонмаппинг",def:3,min:0,max:4,decimals:0,options:ua},sunElevation:{label:"Высота солнца",def:34,min:-10,max:90,decimals:0},sunAzimuth:{label:"Азимут солнца",def:135,min:0,max:360,decimals:0},turbidity:{label:"Мутность неба",def:3,min:1,max:10,decimals:2},rayleigh:{label:"Рэлеевское рассеяние",def:2.2,min:0,max:5,decimals:2},mieCoefficient:{label:"Ми-рассеяние",def:.005,min:0,max:.05,decimals:3},mieDirectionalG:{label:"Анизотропия Ми",def:.8,min:0,max:.99,decimals:2},skyLuminance:{label:"Яркость неба",def:1,min:0,max:5,decimals:2}},xt=Object.keys($e),qs="blendars.lighting.v1",me={};dr();ur();function dr(){for(const e of xt)me[e]=$e[e].def}function ur(){try{const e=localStorage.getItem(qs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of xt){const a=$e[o],i=s?.[o];typeof i=="number"&&Number.isFinite(i)&&(me[o]=Math.min(a.max,Math.max(a.min,i)))}}catch{}}function wn(){try{localStorage.setItem(qs,JSON.stringify({val:me}))}catch{}}function mr(e){return me[e]}function Yl(){return 2**(mr("gammaStrength")-1)}const En=[];function Jl(e){return En.push(e),()=>{const t=En.indexOf(e);t>=0&&En.splice(t,1)}}function Sn(){for(const e of En)e();te()}function jo(e){const t=$e[e];if(t.options){const n=t.options.indexOf(me[e]);return n>=0?n:0}return Math.round((me[e]-t.min)/(t.max-t.min)*100)}function pr(e,t){const n=$e[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function Ss(e){const t=$e[e],n=me[e];return t.options&&t.options.length===2&&t.options[1]===1?n>=1?"вкл":"выкл":e==="toneMapping"?lr[ua.indexOf(n)]??n.toFixed(t.decimals):n.toFixed(t.decimals)}const fr=[512,1024,2048,4096],Se={cascades:{label:"Каскадов",def:2,min:1,max:4,decimals:0,options:[1,2,3,4]},distribution:{label:"Раскладка каскадов",def:.7,min:0,max:1,decimals:2},blend:{label:"Бесшовность каскадов",def:.12,min:0,max:.3,decimals:2},distance:{label:"Дальность теней",def:320,min:50,max:500,decimals:0},resolution:{label:"Разрешение атласа",def:4096,min:0,max:3,decimals:0,options:fr},bias:{label:"Смещение тени",def:0,min:0,max:1,decimals:2},normalBias:{label:"Смещение по нормали",def:0,min:0,max:.5,decimals:2}},Ke=Object.keys(Se),Qs="blendars.shadows.v1",Z={};br();hr();function br(){for(const e of Ke)Z[e]=Se[e].def}function hr(){try{const e=localStorage.getItem(Qs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of Ke){const a=Se[o],i=s?.[o];if(!(typeof i!="number"||!Number.isFinite(i))){if(a.options){const l=a.options[i]===i?i:a.options.indexOf(i);l>=0&&l<a.options.length&&(Z[o]=Number(a.options[l]));continue}Z[o]=Math.min(a.max,Math.max(a.min,i))}}}catch{}}function _t(){try{localStorage.setItem(Qs,JSON.stringify({val:Z}))}catch{}}function Kl(e){return Z[e]}const kn=[];function Xl(e){return kn.push(e),()=>{const t=kn.indexOf(e);t>=0&&kn.splice(t,1)}}function Yt(){for(const e of kn)e();te()}function ks(e,t){const n=Se[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function gr(e,t){const n=Se[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function Cs(e){const t=Se[e];return e==="distance"?`${Math.round(Z[e])} м`:Z[e].toFixed(t.decimals)}const Be={bloom:{label:"Ореол (bloom)",def:.05,min:0,max:.1,decimals:3},bloomBlur:{label:"Мягкость ореола",def:8,min:1,max:16,decimals:0,options:[1,2,4,8,16]},bloomThreshold:{label:"Порог ореола",def:.6,min:0,max:2,decimals:2},vignette:{label:"Виньетка",def:0,min:0,max:1,decimals:2},vignetteInner:{label:"Виньетка: начало",def:0,min:0,max:1,decimals:2},vignetteOuter:{label:"Виньетка: край",def:1.25,min:.5,max:2,decimals:2},vignetteCurvature:{label:"Виньетка: кромка",def:.5,min:.2,max:1,decimals:2},taa:{label:"Временное сглаживание",def:0,min:0,max:1,decimals:0,options:[0,1]},taaJitter:{label:"Сглаживание: джиттер",def:0,min:0,max:1,decimals:2},dof:{label:"Глубина резкости",def:1,min:0,max:1,decimals:0,options:[0,1]},dofFocus:{label:"Фокус (м)",def:1,min:1,max:60,decimals:1},dofRange:{label:"Зона фокуса (м)",def:40,min:1,max:40,decimals:1},dofRadius:{label:"Сила размытия",def:1,min:1,max:8,decimals:1},dofNear:{label:"Размывать передний план",def:1,min:0,max:1,decimals:0,options:[0,1]},grading:{label:"Цветокоррекция",def:1,min:0,max:1,decimals:0,options:[0,1]},brightness:{label:"Яркость",def:1,min:.5,max:1.5,decimals:2},contrast:{label:"Контраст",def:1,min:.5,max:1.5,decimals:2},saturation:{label:"Насыщенность",def:1,min:0,max:2,decimals:2},fringing:{label:"Аберрация",def:0,min:0,max:100,decimals:0},sharpness:{label:"Резкость",def:0,min:0,max:1,decimals:2}},Xe=Object.keys(Be),Zs="blendars.postfx.v1",eo="blendars.postfx.on",q={},ma=!0;let De=ma;xr();_r();function xr(){for(const e of Xe)q[e]=Be[e].def;De=ma}function _r(){try{const e=localStorage.getItem(Zs);if(e){const n=JSON.parse(e);if(n&&typeof n=="object"){const s=n,o=typeof s.val=="object"&&s.val!==null?s.val:null;for(const a of Xe){const i=Be[a],c=o?.[a];typeof c=="number"&&Number.isFinite(c)&&(q[a]=Math.min(i.max,Math.max(i.min,c)))}}}const t=localStorage.getItem(eo);t!==null&&(De=t!=="0")}catch{}}function Ie(){try{localStorage.setItem(Zs,JSON.stringify({val:q})),localStorage.setItem(eo,De?"1":"0")}catch{}}function Ns(e){return q[e]}function hn(){return De}function Ls(e){De!==e&&(De=e,Ie(),Je())}const to="blendars.hud.v1";let vt=!0,qe=1280;const he=[],Bs=["fps","cpu","draw","vram"],yr={fps:"Частота кадра (FPS и мс)",cpu:"Загрузка CPU (обновление / рендер / физика)",draw:"Вызовы отрисовки и шейдеры",vram:"Видеопамять и разрешение"};let wt={fps:!0,cpu:!0,draw:!0,vram:!0};function vr(){try{const e=localStorage.getItem(to);if(!e)return;const t=JSON.parse(e);if(t&&typeof t=="object"){const n=t.on;if(n&&typeof n=="object"){const s=n.stats;typeof s=="number"&&(vt=s!==0);const o=n.record;(o===1280||o===1920||o==="window")&&(qe=o);const a=n.touch;typeof a=="number"&&(Kt=a!==0)}}}catch{}}const no="blendars.stats.v1";function wr(){try{const e=localStorage.getItem(no);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s={...wt};for(const o of Bs){const a=n[o];typeof a=="boolean"&&(s[o]=a)}wt=s}catch{}}function Er(){try{localStorage.setItem(no,JSON.stringify(wt))}catch{}}function so(){try{localStorage.setItem(to,JSON.stringify({on:{stats:vt?1:0,record:qe,touch:Kt?1:0}}))}catch{}}function Rn(){return vt}function pa(e){if(vt!==e){vt=e,so();for(const t of he)t();te()}}function xe(e){return wt[e]}function Sr(e){return yr[e]}function kr(e,t){if(wt[e]!==t){wt[e]=t,Er();for(const n of he)n();te()}}function Cr(){return qe}function Ds(e){if(!(e!==1280&&e!==1920&&e!=="window")&&qe!==e){qe=e,so();for(const t of he)t();te()}}function Nr(e){const t=qe==="window"?e:qe;return!Number.isFinite(t)||t<=0?1280:Math.round(t)}function fa(e){return he.push(e),()=>{const t=he.indexOf(e);t>=0&&he.splice(t,1)}}let Lr="full";function Ar(){return Lr}let Kt=!0;function Rr(){return Kt}function Tr(e){if(Kt!==e){Kt=e,so();for(const t of he)t();te()}}const ba="blendars.touch.v1";let Xt=1,qt=.85,Qt="split",Zt=!1;function Mr(){try{const e=localStorage.getItem(ba);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t;typeof n.scale=="number"&&n.scale>=.6&&n.scale<=2&&(Xt=n.scale),typeof n.opacity=="number"&&n.opacity>=.25&&n.opacity<=1&&(qt=n.opacity),(n.layout==="split"||n.layout==="left"||n.layout==="right")&&(Qt=n.layout),typeof n.swap=="boolean"&&(Zt=n.swap)}catch{}}function $n(){try{localStorage.setItem(ba,JSON.stringify({scale:Xt,opacity:qt,layout:Qt,swap:Zt}))}catch{}}function Pr(){return Xt}function Ir(e){const t=Math.min(Math.max(e,.6),2);if(Xt!==t){Xt=t,$n();for(const n of he)n();te()}}function Fr(){return qt}function $r(e){const t=Math.min(Math.max(e,.25),1);if(qt!==t){qt=t,$n();for(const n of he)n();te()}}function Br(){return Qt}function Dr(e){if(Qt!==e){Qt=e,$n();for(const t of he)t();te()}}function Or(){return Zt}function jr(e){if(Zt!==e){Zt=e,$n();for(const t of he)t();te()}}vr();wr();Mr();const Cn=[];function ql(e){return Cn.push(e),()=>{const t=Cn.indexOf(e);t>=0&&Cn.splice(t,1)}}function Je(){for(const e of Cn)e();te()}function zo(e,t){const n=Be[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function zr(e,t){const n=Be[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function As(e){const t=q[e],n=Be[e];return n.options&&n.options.length===2&&n.options[1]===1?t>=1?"вкл":"выкл":t.toFixed(n.decimals)}Gr();rr();function Gr(){try{const e=localStorage.getItem(Js)??localStorage.getItem(Ks);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:n,o=typeof n.vol=="object"&&n.vol!==null?n.vol:null;for(const a of Object.keys(da)){const i=s[a];typeof i=="boolean"&&(ve[a]=i);const c=o?.[a];typeof c=="number"&&Number.isFinite(c)&&(be[a]=Math.min(1,Math.max(0,c)))}}catch{}}function Tn(){try{localStorage.setItem(Js,JSON.stringify({on:ve,vol:be})),localStorage.removeItem(Ks)}catch{}}function Ur(e){return ve[e]?be[e]:0}function Ql(e){return be[e]}function Zl(e,t){const n=Math.min(1,Math.max(0,t));be[e]!==n&&(be[e]=n,Tn(),te())}const Hr=`@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JSON.stringify(ea)}) format('truetype');
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
`;function yt(){return{version:1,physics:{on:{...oe},val:{...ce}},lighting:{val:{...me}},shadows:{val:{...Z}},postfx:{on:De,val:{...q}},sound:{on:{...ve},vol:{...be}},hud:{on:{stats:vt,record:qe}},graphics:{val:{scale:Et,fps:St,msaa:Qe}},recording:{val:{fps:kt,quality:Ct,keyFrame:Nt,sound:Lt}}}}function Go(){return{on:{...oe},val:{...ce}}}function Vr(){const e={},t={};for(const n of we)e[n]=!0,t[n]=Ee[n].def;return{on:e,val:t}}let Os=!1;function Wr(){return Os}function gt(e){const t=[];if(!e||typeof e!="object")return{applied:t};Os=!0;try{return Jr(e,t)}finally{Os=!1}}function Uo(e){let t=!1;for(const n of Object.keys(e.on))if(we.includes(n)){const s=e.on[n];s!==void 0&&(oe[n]=s,t=!0)}for(const n of Object.keys(e.val))if(we.includes(n)){const s=Ee[n];if(s&&typeof s.min=="number"&&typeof s.max=="number"){const o=e.val[n];typeof o=="number"&&(ce[n]=Math.min(s.max,Math.max(s.min,o)),t=!0)}}t&&(bt(),ht())}function Yr(e){if(!e||typeof e!="object")return null;const t=e,n={},s={};let o=!1;if(t.on&&typeof t.on=="object")for(const[a,i]of Object.entries(t.on))typeof i=="boolean"&&(n[a]=i,o=!0);if(t.val&&typeof t.val=="object")for(const[a,i]of Object.entries(t.val))typeof i=="number"&&Number.isFinite(i)&&(s[a]=i,o=!0);return o?{on:n,val:s}:null}function Jr(e,t){const n=e,s=(v,d,p)=>typeof v=="number"&&Number.isFinite(v)?Math.min(p,Math.max(d,v)):null,o=v=>v&&typeof v=="object"?v:null,a=v=>v&&typeof v=="object"?v:null,i=v=>v&&typeof v=="object"?v:null,c=n.physics&&typeof n.physics=="object"?n.physics:null;if(c){const v=a(c.on),d=o(c.val);let p=!1;for(const u of we){const y=Ee[u];v&&typeof v[u]=="boolean"&&(oe[u]=v[u],p=!0);const h=d?s(d[u],y.min,y.max):null;h!==null&&(ce[u]=h,p=!0)}p&&(bt(),ht(),t.push("физика"))}const l=o(n.lighting&&typeof n.lighting=="object"?n.lighting.val:null);if(l){let v=!1;for(const d of xt){const p=$e[d],u=s(l[d],p.min,p.max);u!==null&&(me[d]=u,v=!0)}v&&(wn(),Sn(),t.push("свет"))}const f=o(n.shadows&&typeof n.shadows=="object"?n.shadows.val:null);if(f){let v=!1;for(const d of Ke){const p=Se[d],u=f[d];if(p.options){const C=p.options[u]===u?u:p.options.indexOf(u);C>=0&&C<p.options.length&&(Z[d]=Number(p.options[C]),v=!0);continue}const y=s(u,p.min,p.max);y!==null&&(Z[d]=y,v=!0)}v&&(_t(),Yt(),t.push("тени"))}const b=n.postfx&&typeof n.postfx=="object"?n.postfx:null;if(b){let v=!1;typeof b.on=="boolean"&&(De=b.on,v=!0);const d=o(b.val);if(d)for(const p of Xe){const u=Be[p],y=d[p];if(u.options){const C=u.options.indexOf(y);C>=0&&C<u.options.length&&(q[p]=Number(u.options[C]),v=!0);continue}const h=s(y,u.min,u.max);h!==null&&(q[p]=h,v=!0)}v&&(Ie(),Je(),t.push("Post FX"))}const m=n.sound&&typeof n.sound=="object"?n.sound:null;if(m){const v=a(m.on),d=o(m.vol);let p=!1;for(const u of la){v&&typeof v[u]=="boolean"&&(ve[u]=v[u],p=!0);const y=d?s(d[u],0,1):null;y!==null&&(be[u]=y,p=!0)}p&&(Tn(),t.push("звук"))}const g=n.hud&&typeof n.hud=="object"?n.hud:null,E=g&&typeof g.on=="object"?g.on:null;if(E&&typeof E.stats=="boolean"){pa(E.stats);const v=E.record;(v===1280||v===1920||v==="window")&&Ds(v),t.push("интерфейс")}const k=i(n.graphics&&typeof n.graphics=="object"?n.graphics.val:null);if(k){let v=!1;const d=k.scale;(d===.5||d===.75||d===1)&&(io(d),v=!0);const p=k.fps;(p===0||p===30||p===60||p===120)&&(ro(p),v=!0),typeof k.msaa=="boolean"&&(en(k.msaa),v=!0),q.taa>0&&Qe&&(en(!1),v=!0),v&&(ln(),Bn(),t.push("графика"))}const N=i(n.recording&&typeof n.recording=="object"?n.recording.val:null);if(N){let v=!1;const d=N.fps;(d===24||d===30||d===60)&&(Sa(d),v=!0);const p=N.quality;(p==="low"||p==="medium"||p==="high")&&(ka(p),v=!0);const u=N.keyFrame;(u===1||u===2||u===4)&&(Ca(u),v=!0),typeof N.sound=="boolean"&&(Na(N.sound),v=!0),v&&(dn(),un(),t.push("запись"))}return{applied:t}}const oo="blendars.graphics.v1";let Et=1,St=0,Qe=!0;const ao="blendars.gfx-preset.v1",Kr={phone:{label:"Телефон",graphics:{scale:.5,fps:30,msaa:!1},shadows:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3},postfxOn:!1,postfx:{bloom:0,vignette:0,fringing:0,sharpness:0,grading:0,taa:0,taaJitter:0}},balanced:{label:"Оптимальный",graphics:{scale:.75,fps:60,msaa:!0},shadows:{cascades:2,distribution:.7,blend:.12,distance:220,resolution:2048,bias:.7,normalBias:.4},postfxOn:!0,postfx:{bloom:.04,bloomBlur:8,bloomThreshold:.6,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.5,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:.25}},ultra:{label:"Ультра",graphics:{scale:1,fps:0,msaa:!0},shadows:{cascades:4,distribution:.7,blend:.12,distance:320,resolution:4096,bias:1,normalBias:.5},postfxOn:!0,postfx:{bloom:.06,bloomBlur:8,bloomThreshold:0,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:1,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:.25}}};let cn="phone";function Xr(){const e=window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window,n=navigator.hardwareConcurrency??4,s=navigator.deviceMemory??4,o=Math.min(window.screen.width,window.screen.height)<768;return(e||t)&&(n<=4||s<=4||o)}function qr(){return cn}function ha(){try{localStorage.setItem(ao,cn)}catch{}}function Qr(){try{const e=localStorage.getItem(ao);(e==="phone"||e==="balanced"||e==="ultra")&&(cn=e)}catch{}}function ga(e){const t=Kr[e];cn=e,ha(),io(t.graphics.scale),ro(t.graphics.fps);const n=t.postfx.taa??0;en(n>0?!1:t.graphics.msaa);for(const s of Ke)Z[s]=t.shadows[s]??Se[s].def;_t(),Yt(),De=t.postfxOn;for(const s of Xe){const o=t.postfx[s];typeof o=="number"&&(q[s]=o)}Ie(),Je()}const Nn=[];function Zr(){try{const e=localStorage.getItem(oo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.scale===.5||s.scale===.75||s.scale===1)&&(Et=s.scale),(s.fps===0||s.fps===30||s.fps===60||s.fps===120)&&(St=s.fps),typeof s.msaa=="boolean"&&(Qe=s.msaa)}catch{}}function ln(){try{localStorage.setItem(oo,JSON.stringify({val:{scale:Et,fps:St,msaa:Qe}}))}catch{}}function Bn(){for(const e of Nn)e();te()}function xa(){return Et}function _a(){return St}function nt(){return Qe}const ec=4;function ed(){return Qe?ec:1}function io(e){Et!==e&&(Et=e,ln(),Bn())}function ro(e){St!==e&&(St=e,ln(),Bn())}function en(e){Qe!==e&&(Qe=e,ln(),Bn())}function ya(e){return Nn.push(e),()=>{const t=Nn.indexOf(e);t>=0&&Nn.splice(t,1)}}Zr();Qr();const co="blendars.recording.v1";let kt=30,Ct="high",Nt=2,Lt=!0;const tc=[];function nc(){try{const e=localStorage.getItem(co);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.fps===24||s.fps===30||s.fps===60)&&(kt=s.fps),(s.quality==="low"||s.quality==="medium"||s.quality==="high")&&(Ct=s.quality),(s.keyFrame===1||s.keyFrame===2||s.keyFrame===4)&&(Nt=s.keyFrame),typeof s.sound=="boolean"&&(Lt=s.sound)}catch{}}function dn(){try{localStorage.setItem(co,JSON.stringify({val:{fps:kt,quality:Ct,keyFrame:Nt,sound:Lt}}))}catch{}}function un(){for(const e of tc)e();te()}function va(){return kt}function wa(){return Ct}function Ea(){return Nt}function js(){return Lt}function Sa(e){kt!==e&&(kt=e,dn(),un())}function ka(e){Ct!==e&&(Ct=e,dn(),un())}function Ca(e){Nt!==e&&(Nt=e,dn(),un())}function Na(e){Lt!==e&&(Lt=e,dn(),un())}nc();function sc(){const e=Gi();if(e){const l=gt(e.data);l.applied.length>0&&console.info(`[settings] применён пресет «${e.name}»: ${l.applied.join(", ")}`);return}let t=!1;try{t=!!(localStorage.getItem(Js)??localStorage.getItem(Ks)??localStorage.getItem(Xs)??localStorage.getItem(qs)??localStorage.getItem(Qs)??localStorage.getItem(Zs)??localStorage.getItem(eo)??localStorage.getItem(to)??localStorage.getItem(no)??localStorage.getItem(oo)??localStorage.getItem(co)??localStorage.getItem(ao))}catch{t=!0}if(t)return;const n=Xr();cn=n?"phone":"ultra",ha(),ln(),_t(),Ie();const o=yt();ga("balanced");const a=yt();gt(n?Oi:Di);const i=yt();gt(o),ft("По умолчанию",o),ft("Оптимальный",a),ft(n?"Телефон":"Ультра",i);const c=Fs().find(l=>l.name===(n?"Телефон":"Ультра"));$s(c?c.id:null),console.info(`[settings] сохранённых настроек нет — созданы пресеты «По умолчанию», «Оптимальный», «${n?"Телефон":"Ультра"}» (активен «${n?"Телефон":"Ультра"}»)`)}sc();function oc(){const e=document.createElement("div");e.className="settings",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Настройки");const t=document.createElement("style");t.textContent=Hr;const n=document.createElement("div");n.className="settings__panel";const s=document.createElement("h2");s.className="settings__title",s.textContent="Настройки";const o=document.createElement("p");o.className="settings__hint",o.textContent="Галочка — эффект включён, ползунок — его громкость. Выбор сохраняется в браузере и действует сразу.",o.id="settings-hint",e.setAttribute("aria-describedby",o.id);const a=document.createElement("div");a.className="settings__tabs",a.setAttribute("role","tablist");const i=document.createElement("button");i.className="settings__tab settings__tab--on",i.type="button",i.textContent="Звук",i.setAttribute("role","tab"),i.setAttribute("aria-selected","true");const c=document.createElement("button");c.className="settings__tab",c.type="button",c.textContent="Физика",c.setAttribute("role","tab"),c.setAttribute("aria-selected","false");const l=document.createElement("button");l.className="settings__tab",l.type="button",l.textContent="Освещение",l.setAttribute("role","tab"),l.setAttribute("aria-selected","false");const f=document.createElement("button");f.className="settings__tab",f.type="button",f.textContent="Тени",f.setAttribute("role","tab"),f.setAttribute("aria-selected","false");const b=document.createElement("button");b.className="settings__tab",b.type="button",b.textContent="Post FX",b.setAttribute("role","tab"),b.setAttribute("aria-selected","false");const m=document.createElement("button");m.className="settings__tab",m.type="button",m.textContent="Интерфейс",m.setAttribute("role","tab"),m.setAttribute("aria-selected","false");const g=document.createElement("button");g.className="settings__tab",g.type="button",g.textContent="Управление",g.setAttribute("role","tab"),g.setAttribute("aria-selected","false");const E=document.createElement("button");E.className="settings__tab",E.type="button",E.textContent="Пресеты",E.setAttribute("role","tab"),E.setAttribute("aria-selected","false");const k=document.createElement("button");k.className="settings__tab",k.type="button",k.textContent="Графика",k.setAttribute("role","tab"),k.setAttribute("aria-selected","false");const N=document.createElement("button");N.className="settings__tab",N.type="button",N.textContent="Запись",N.setAttribute("role","tab"),N.setAttribute("aria-selected","false"),a.append(i,c,l,f,b,m,g,k,N,E);const v=r=>{const x=[i,c,l,f,b,m,g,k,N,E];for(let L=0;L<x.length;L++){const F=x[L];if(!F)continue;const j=L===r;F.classList.toggle("settings__tab--on",j),F.setAttribute("aria-selected",String(j))}d.hidden=r!==0,y.hidden=r!==1,X.hidden=r!==2,ke.hidden=r!==3,je.hidden=r!==4,ze.hidden=r!==5,ge.hidden=r!==6,rt.hidden=r!==7,et.hidden=r!==8,dt.hidden=r!==9};i.addEventListener("click",()=>v(0)),c.addEventListener("click",()=>v(1)),l.addEventListener("click",()=>v(2)),f.addEventListener("click",()=>v(3)),b.addEventListener("click",()=>v(4)),m.addEventListener("click",()=>v(5)),g.addEventListener("click",()=>v(6)),k.addEventListener("click",()=>v(7)),N.addEventListener("click",()=>v(8)),E.addEventListener("click",()=>v(9));const d=document.createElement("div");d.className="settings__pane",d.append(o);const p=document.createElement("div");p.className="settings__list";const u={};for(const[r,x]of ca){const L=document.createElement("div");L.className="settings__row";const F=document.createElement("label");F.className="settings__head";const j=document.createElement("span");j.textContent=x;const B=document.createElement("input");B.type="checkbox",B.checked=ve[r],F.append(j,B);const A=document.createElement("div");A.className="settings__vol",A.classList.toggle("settings__vol--off",!ve[r]);const R=document.createElement("input");R.type="range",R.min="0",R.max="100",R.step="1",R.value=String(Math.round(be[r]*100)),R.setAttribute("aria-label",`Громкость: ${x}`);const S=document.createElement("output");S.className="settings__pct",S.textContent=`${R.value}%`,R.addEventListener("input",()=>{be[r]=Number(R.value)/100,S.textContent=`${R.value}%`,Tn(),te()}),A.append(R,S),B.addEventListener("change",()=>{ve[r]=B.checked,A.classList.toggle("settings__vol--off",!B.checked),Tn(),te()}),u[r]=()=>{B.checked=ve[r],A.classList.toggle("settings__vol--off",!ve[r]),R.value=String(Math.round(be[r]*100)),S.textContent=`${R.value}%`},L.append(F,A),p.append(L)}d.append(p);const y=document.createElement("div");y.className="settings__pane",y.hidden=!0;const h=document.createElement("p");h.className="settings__hint",h.textContent="Галочка — тюнинг «против скольжения», выключена — исходное поведение игры. Ползунок — значение, ↺ — сброс строки. Всё применяется сразу, даже за рулём.",y.append(h);const C=document.createElement("div");C.className="physics-tabs";const T=document.createElement("button");T.className="physics-tab physics-tab--on",T.type="button",T.textContent="Тонкая настройка",T.setAttribute("role","tab"),T.setAttribute("aria-selected","true");const _=document.createElement("button");_.className="physics-tab",_.type="button",_.textContent="Пресеты физики",_.setAttribute("role","tab"),_.setAttribute("aria-selected","false"),C.append(T,_),y.append(C);const w=document.createElement("div");w.className="physics-content",y.append(w);const M=document.createElement("div");M.className="settings__list";const P=document.createElement("div");P.className="physics-presets",w.append(M,P);const I=r=>{r==="fine"?(T.classList.add("physics-tab--on"),_.classList.remove("physics-tab--on"),T.setAttribute("aria-selected","true"),_.setAttribute("aria-selected","false"),M.hidden=!1,P.hidden=!0):(T.classList.remove("physics-tab--on"),_.classList.add("physics-tab--on"),T.setAttribute("aria-selected","false"),_.setAttribute("aria-selected","true"),M.hidden=!0,P.hidden=!1)};T.addEventListener("click",()=>I("fine")),_.addEventListener("click",()=>I("presets"));let O=()=>{};const $=document.createElement("p");$.className="settings__presetempty";const z=r=>{const x=Vr();let L=0;for(const F of Object.keys(r.val)){if(!(F in x.val))continue;const j=r.val[F];typeof j=="number"&&(x.val[F]=j,L++)}Uo(x),Oo(null),O(),$.textContent=`Машина «${r.name}»: задано ${L} параметров, остальные — по умолчанию.`},H=()=>{P.replaceChildren();const r=document.createElement("p");r.className="settings__presetempty",r.textContent="Встроенные машины",P.append(r);const x=document.createElement("div");x.className="settings__presets";for(const S of ji){const D=document.createElement("div");D.className="settings__preset";const J=document.createElement("div");J.className="settings__presetinfo";const U=document.createElement("span");U.className="settings__presetname",U.textContent=S.name;const G=document.createElement("span");G.className="settings__presetmeta",G.textContent=S.note,J.append(U,G);const Q=document.createElement("button");Q.className="settings__presetbtn",Q.type="button",Q.textContent="Применить",Q.setAttribute("aria-label",`Применить пресет «${S.name}»`),Q.addEventListener("click",()=>z(S)),D.append(J,Q),x.append(D)}P.append(x);const L=document.createElement("p");L.className="settings__presetempty",L.textContent="Свои пресеты",P.append(L);const F=Zi(),j=er(),B=document.createElement("div");if(B.className="settings__presets",F.length===0){const S=document.createElement("p");S.className="settings__presetempty",S.textContent="Сохранённых пресетов нет",B.append(S)}for(const S of F){const D=document.createElement("div");D.className="settings__preset";const J=S.id===j;J&&D.classList.add("settings__preset--active");const U=document.createElement("div");U.className="settings__presetinfo";const G=document.createElement("span");G.className="settings__presetname",G.textContent=S.name;const Q=document.createElement("span");Q.className="settings__presetmeta",Q.textContent=J?"активен":"свой пресет",U.append(G,Q);const ue=document.createElement("button");ue.className="settings__presetbtn",ue.type="button",ue.textContent="Применить",ue.setAttribute("aria-label",`Применить пресет физики «${S.name}»`),ue.addEventListener("click",()=>{const Lo=Yr(S.data);if(!Lo){$.textContent=`В пресете «${S.name}» нет настроек физики.`;return}Uo(Lo),Oo(S.id),O(),$.textContent=`Применён пресет «${S.name}».`});const tt=document.createElement("button");tt.className="settings__presetbtn settings__presetbtn--danger",tt.type="button",tt.textContent="✕",tt.title="Удалить пресет",tt.setAttribute("aria-label",`Удалить пресет физики «${S.name}»`),tt.addEventListener("click",()=>{tr(S.id),H()}),D.append(U,ue,tt),B.append(D)}P.append(B),P.append($);const A=document.createElement("button");A.className="settings__presetbtn",A.textContent="Импорт",A.type="button",A.setAttribute("role","menuitem"),A.setAttribute("aria-label","Импорт пресета физики"),A.addEventListener("click",()=>{const S=document.createElement("input");S.type="file",S.accept=".json",S.addEventListener("change",async D=>{const U=D.target.files[0];if(!U)return;const G=await U.text(),Q=sr(G);if(!Q){$.textContent="Это не файл пресета физики.";return}const ue=ws(Q.name??"Импортированный пресет",Q.data);$.textContent=`Импортирован «${ue.name}».`,H()}),setTimeout(()=>S.click(),100)}),P.append(A);const R=document.createElement("button");R.className="settings__presetbtn",R.textContent="Новый",R.type="button",R.setAttribute("role","menuitem"),R.setAttribute("aria-label","Создать новый пресет физики"),R.addEventListener("click",()=>{const S=ws("Новый пресет",Go());$.textContent=`Создан «${S.name}» из текущих настроек.`,H()}),P.append(R)};H(),I("fine");const W={};for(const r of we){const x=Ee[r],L=document.createElement("div");L.className="settings__row";const F=document.createElement("label");F.className="settings__head";const j=document.createElement("span");j.textContent=x.label;const B=document.createElement("input");B.type="checkbox",B.checked=oe[r],F.append(j,B);const A=document.createElement("div");A.className="settings__vol",A.classList.toggle("settings__vol--off",!oe[r]);const R=document.createElement("input");R.type="range",R.min="0",R.max="100",R.step="1",R.value=String(Math.round((ce[r]-x.min)/(x.max-x.min)*100)),R.setAttribute("aria-label",`Значение: ${x.label}`);const S=document.createElement("output");S.className="settings__pct settings__pct--val",S.textContent=Es(r);const D=document.createElement("button");D.className="settings__reset",D.type="button",D.textContent="↺",D.title="Сбросить по умолчанию",D.setAttribute("aria-label",`Сбросить по умолчанию: ${x.label}`);const J=()=>{B.checked=oe[r],A.classList.toggle("settings__vol--off",!oe[r]),R.value=String(Math.round((ce[r]-x.min)/(x.max-x.min)*100)),S.textContent=Es(r)};W[r]=J,R.addEventListener("input",()=>{const U=x.min+(x.max-x.min)*(Number(R.value)/100);ce[r]=Number(U.toFixed(x.decimals)),S.textContent=Es(r),bt(),ht()}),B.addEventListener("change",()=>{oe[r]=B.checked,A.classList.toggle("settings__vol--off",!B.checked),bt(),ht()}),D.addEventListener("click",()=>{oe[r]=!0,ce[r]=x.def,J(),bt(),ht()}),A.append(R,S,D),L.append(F,A),M.append(L)}O=()=>{for(const r of we)W[r]?.()},w.append(M);const V=document.createElement("button");V.className="settings__presetbtn",V.type="button",V.textContent="Сохранить как пресет",V.title="Сохранить текущие настройки физики в пресет",V.addEventListener("click",()=>{const r=prompt("Введите название пресета физики:","");if(r===null||r.trim()==="")return;const x=Go();ws(r.trim(),x),P.innerHTML="",H(),I("presets")}),w.append(V);const Y=document.createElement("button");Y.className="settings__resetall",Y.type="button",Y.textContent="Сбросить все настройки физики",Y.addEventListener("click",()=>{for(const r of we)oe[r]=!0,ce[r]=Ee[r].def,W[r]?.();bt(),ht()}),y.append(Y);const X=document.createElement("div");X.className="settings__pane",X.hidden=!0;const se=document.createElement("p");se.className="settings__hint",se.textContent="Ползунок — уровень света (слева от центра — студия, к правому краю — ярче), ↺ — сброс строки. Свет главного экрана меняется сразу и запоминается. «Гамма-коррекция» — аппаратная (движок держит её как вкл/выкл), а «Сила гаммы» — непрерывный подъём полутонов поверх неё: 1 — как есть, каждый шаг вверх удваивает свет.",X.append(se);const ae=document.createElement("div");ae.className="settings__list";const Ze={};for(const r of xt){const x=$e[r],L=document.createElement("div");L.className="settings__row";const F=document.createElement("div");F.className="settings__head";const j=document.createElement("span");j.textContent=x.label,F.append(j);const B=document.createElement("div");B.className="settings__vol";const A=document.createElement("input");A.type="range",A.min="0",A.max="100",A.step="1",x.options&&(A.max=String(x.options.length-1)),A.value=String(jo(r)),A.setAttribute("aria-label",`Освещение: ${x.label}`);const R=document.createElement("output");R.className="settings__pct settings__pct--val",R.textContent=Ss(r);const S=document.createElement("button");S.className="settings__reset",S.type="button",S.textContent="↺",S.title="Сбросить по умолчанию",S.setAttribute("aria-label",`Сбросить по умолчанию: ${x.label}`);const D=()=>{A.value=String(jo(r)),R.textContent=Ss(r)};Ze[r]=D,A.addEventListener("input",()=>{me[r]=pr(r,Number(A.value)),R.textContent=Ss(r),wn(),Sn()}),S.addEventListener("click",()=>{me[r]=x.def,D(),wn(),Sn()}),B.append(A,R,S),L.append(F,B),ae.append(L)}X.append(ae);const de=document.createElement("button");de.className="settings__resetall",de.type="button",de.textContent="Сбросить все настройки освещения",de.addEventListener("click",()=>{for(const r of xt)me[r]=$e[r].def,Ze[r]?.();wn(),Sn()}),X.append(de);const ke=document.createElement("div");ke.className="settings__pane",ke.hidden=!0;const Mt=document.createElement("p");Mt.className="settings__hint",Mt.textContent="Каскады разбивают дальность теней на несколько карт: у ближней детализация выше, поэтому машина отбрасывает резкую тень даже вдали. Один каскад — одна карта на всю дальность. Меняется сразу, даже в заезде.",ke.append(Mt);const Pt=document.createElement("div");Pt.className="settings__list";const Ce={};for(const r of Ke){const x=Se[r],L=document.createElement("div");L.className="settings__row";const F=document.createElement("div");F.className="settings__head";const j=document.createElement("span");j.textContent=x.label,F.append(j);const B=document.createElement("div");B.className="settings__vol";const A=document.createElement("input");A.type="range",A.min="0",A.max="100",A.step="1",x.options&&(A.max=String(x.options.length-1)),A.value=String(ks(r,Z[r])),A.setAttribute("aria-label",`Тени: ${x.label}`);const R=document.createElement("output");R.className="settings__pct settings__pct--val",R.textContent=Cs(r);const S=document.createElement("button");S.className="settings__reset",S.type="button",S.textContent="↺",S.title="Сбросить по умолчанию",S.setAttribute("aria-label",`Сбросить по умолчанию: ${x.label}`);const D=()=>{A.value=String(ks(r,Z[r])),R.textContent=Cs(r)};Ce[r]=D,A.addEventListener("input",()=>{Z[r]=gr(r,Number(A.value)),R.textContent=Cs(r),_t(),Yt()}),S.addEventListener("click",()=>{Z[r]=x.def,D(),_t(),Yt()}),B.append(A,R,S),L.append(F,B),Pt.append(L)}ke.append(Pt);const It=document.createElement("button");It.className="settings__resetall",It.type="button",It.textContent="Сбросить все настройки теней",It.addEventListener("click",()=>{for(const r of Ke)Z[r]=Se[r].def,Ce[r]?.();_t(),Yt()}),ke.append(It);const je=document.createElement("div");je.className="settings__pane",je.hidden=!0;const Dn=document.createElement("p");Dn.className="settings__hint",Dn.textContent="Пост-обработка кадра: ореол вокруг солнца, виньетка, резкость, цветокоррекция и глубина резкости. Главный переключатель снимает всю обработку разом, а TAA включается на вкладке «Графика» — там ему и место, рядом с MSAA. Здесь у него остался только джиттер.",je.append(Dn);const On=document.createElement("div");On.className="settings__row";const jn=document.createElement("label");jn.className="settings__head";const fo=document.createElement("span");fo.textContent="Пост-обработка включена";const Ne=document.createElement("input");Ne.type="checkbox",Ne.checked=hn(),jn.append(fo,Ne),Ne.addEventListener("change",()=>Ls(Ne.checked)),On.append(jn),je.append(On);const zn=document.createElement("div");zn.className="settings__list";const Ft={};for(const r of Xe){if(r==="taa")continue;const x=Be[r],L=document.createElement("div");L.className="settings__row";const F=document.createElement("div");F.className="settings__head";const j=document.createElement("span");j.textContent=x.label,F.append(j);const B=document.createElement("div");B.className="settings__vol";const A=document.createElement("input");A.type="range",A.min="0",A.max="100",A.step="1",x.options&&(A.max=String(x.options.length-1)),A.value=String(zo(r,q[r])),A.setAttribute("aria-label",`Post FX: ${x.label}`);const R=document.createElement("output");R.className="settings__pct settings__pct--val",R.textContent=As(r);const S=document.createElement("button");S.className="settings__reset",S.type="button",S.textContent="↺",S.title="Сбросить по умолчанию",S.setAttribute("aria-label",`Сбросить по умолчанию: ${x.label}`);const D=()=>{A.value=String(zo(r,q[r])),R.textContent=As(r)};Ft[r]=D,A.addEventListener("input",()=>{q[r]=zr(r,Number(A.value)),R.textContent=As(r),Ie(),Je()}),S.addEventListener("click",()=>{q[r]=x.def,D(),Ie(),Je()}),B.append(A,R,S),L.append(F,B),zn.append(L)}je.append(zn);const $t=document.createElement("button");$t.className="settings__resetall",$t.type="button",$t.textContent="Сбросить все настройки Post FX",$t.addEventListener("click",()=>{for(const r of Xe)q[r]=Be[r].def,Ft[r]?.();Ne.checked=!0,Ls(!0),Ie(),Je(),ct()}),je.append($t);const ze=document.createElement("div");ze.className="settings__pane",ze.hidden=!0;const Gn=document.createElement("p");Gn.className="settings__hint",Gn.textContent="Служебные элементы поверх игры. Счётчик кадра живёт в левом верхнем углу на всех экранах; ниже выбирается, из каких строк он состоит.",ze.append(Gn);const Un=document.createElement("div");Un.className="settings__row";const Hn=document.createElement("label");Hn.className="settings__head";const bo=document.createElement("span");bo.textContent="Статистика кадра";const it=document.createElement("input");it.type="checkbox",it.checked=Rn(),Hn.append(bo,it),it.addEventListener("change",()=>pa(it.checked)),Un.append(Hn),ze.append(Un);const Vn=document.createElement("p");Vn.className="settings__hint",Vn.textContent="Строки счётчика кадра. Если снять все, панель останется пустой плашкой — обновление текста всё равно стоит кадра, поэтому лишние строки лучше не держать включёнными без нужды.",ze.append(Vn);const Wn=document.createElement("div");Wn.className="settings__row settings__row--stack";const ho={};for(const r of Bs){const x=document.createElement("label");x.className="settings__check";const L=document.createElement("input");L.type="checkbox",L.checked=xe(r);const F=document.createElement("span");F.textContent=Sr(r),L.addEventListener("change",()=>kr(r,L.checked)),ho[r]=L,x.append(L,F),Wn.append(x)}ze.append(Wn);const ge=document.createElement("div");ge.className="settings__pane",ge.hidden=!0;const Yn=document.createElement("p");Yn.className="settings__hint",Yn.textContent="Сенсорное управление появляется только на устройствах с тач-экраном. Галочка прячет педали совсем; ниже — размер, прозрачность, расположение и схема кнопок. Всё сохраняется в браузере и действует сразу.",ge.append(Yn);const Jn=document.createElement("div");Jn.className="settings__row";const Kn=document.createElement("label");Kn.className="settings__head";const go=document.createElement("span");go.textContent="Сенсорное управление";const Bt=document.createElement("input");Bt.type="checkbox",Bt.checked=Rr(),Kn.append(go,Bt),Bt.addEventListener("change",()=>Tr(Bt.checked)),Jn.append(Kn),ge.append(Jn);const Xn=document.createElement("div");Xn.className="settings__row";const qn=document.createElement("label");qn.className="settings__head";const xo=document.createElement("span");xo.textContent="Размер кнопок",qn.append(xo);const Qn=document.createElement("div");Qn.className="settings__vol";const pe=document.createElement("input");pe.type="range",pe.min="60",pe.max="200",pe.step="5",pe.value=String(Math.round(Pr()*100)),pe.setAttribute("aria-label","Размер сенсорных кнопок");const mn=document.createElement("output");mn.className="settings__pct",mn.textContent=`${pe.value}%`,pe.addEventListener("input",()=>{Ir(Number(pe.value)/100),mn.textContent=`${pe.value}%`}),Qn.append(pe,mn),Xn.append(qn,Qn),ge.append(Xn);const Zn=document.createElement("div");Zn.className="settings__row";const es=document.createElement("label");es.className="settings__head";const _o=document.createElement("span");_o.textContent="Прозрачность",es.append(_o);const ts=document.createElement("div");ts.className="settings__vol";const fe=document.createElement("input");fe.type="range",fe.min="25",fe.max="100",fe.step="5",fe.value=String(Math.round(Fr()*100)),fe.setAttribute("aria-label","Прозрачность сенсорных кнопок");const pn=document.createElement("output");pn.className="settings__pct",pn.textContent=`${fe.value}%`,fe.addEventListener("input",()=>{$r(Number(fe.value)/100),pn.textContent=`${fe.value}%`}),ts.append(fe,pn),Zn.append(es,ts),ge.append(Zn);const rt=document.createElement("div");rt.className="settings__pane",rt.hidden=!0;const ns=document.createElement("div");ns.className="settings__backend";const ss=document.createElement("p");ss.className="settings__hint",ss.textContent="Масштаб рендера уменьшает число пикселей, которые движок рисует за кадр: картинка мыльнее, но кадры стабильнее. Лимит кадров держит потолок частоты — помогает на ноутбуках от батареи. MSAA применяется при запуске: после его включения страницу нужно перезагрузить. TAA включается живьём и сглаживает всю сцену — его параметры (джиттер, резкость) задаёт выбранный пресет графики.",rt.append(ss);const Le=(r,x,L,F)=>{const j=document.createElement("div");j.className="settings__row";const B=document.createElement("div");B.className="settings__head";const A=document.createElement("span");A.textContent=r,B.append(A);const R=document.createElement("div");R.className="settings__vol",R.style.flexWrap="wrap";const S=[];for(const[J,U]of x){const G=document.createElement("button");G.className="settings__resetall",G.type="button",G.style.marginTop="0",G.style.flex="1 1 auto",G.style.textTransform="none",G.textContent=U,G.addEventListener("click",()=>{F(J),D()}),S.push(G),R.append(G)}const D=()=>{const J=L();for(let U=0;U<x.length;U++)S[U]?.toggleAttribute("disabled",x[U]?.[0]===J)};return D(),j.append(B,R),{row:j,refresh:D}},Ha=Le("Расположение",[["split","По краям"],["left","Слева"],["right","Справа"]],()=>Br(),r=>{(r==="split"||r==="left"||r==="right")&&Dr(r)});ge.append(Ha.row);const Va=Le("Кнопки крестовины",[["normal","▲ газ, ▼ тормоз"],["swap","▲ тормоз, ▼ газ"]],()=>Or()?"swap":"normal",r=>{jr(r==="swap")});ge.append(Va.row);const os=Le("Масштаб рендера",[["0.5","50 %"],["0.75","75 %"],["1","100 %"]],()=>String(xa()),r=>{const x=Number(r);(x===.5||x===.75||x===1)&&io(x)}),as=Le("Лимит кадров",[["0","Выкл"],["30","30 fps"],["60","60 fps"],["120","120 fps"]],()=>String(_a()),r=>{const x=Number(r);(x===0||x===30||x===60||x===120)&&ro(x)}),is=document.createElement("div");is.className="settings__row";const rs=document.createElement("label");rs.className="settings__head";const yo=document.createElement("span");yo.textContent="Сглаживание MSAA";const Ae=document.createElement("input");Ae.type="checkbox",Ae.checked=nt(),rs.append(yo,Ae);const fn=document.createElement("span");fn.className="settings__pct";const Dt=()=>{Ae.checked=nt(),fn.textContent=nt()?"сцена — сразу, интерфейс — после перезагрузки":""};Dt(),Ae.addEventListener("change",()=>{en(Ae.checked),Ae.checked&&Ns("taa")>0&&(q.taa=0,Ie(),Je()),Dt(),ct()}),is.append(rs,fn);const cs=document.createElement("div");cs.className="settings__row";const ls=document.createElement("label");ls.className="settings__head";const vo=document.createElement("span");vo.textContent="Временное сглаживание TAA";const Re=document.createElement("input");Re.type="checkbox",Re.checked=Ns("taa")>0,ls.append(vo,Re);const ds=document.createElement("span");ds.className="settings__pct";const Wa=.1,Ya=.5,ct=()=>{const r=Ns("taa")>0;Re.checked=r,ds.textContent=r?"работает сразу":"включит пост-обработку"};ct(),Re.addEventListener("change",()=>{q.taa=Re.checked?1:0,Re.checked&&!hn()&&(Ls(!0),Ne.checked=!0),Re.checked&&q.taaJitter<Wa&&(q.taaJitter=Ya,Ft.taaJitter?.()),Re.checked&&nt()&&(en(!1),Dt()),Ie(),Je(),ct()}),cs.append(ls,ds);const us=Le("Пресет графики",[["phone","Телефон"],["balanced","Оптимальный"],["ultra","Ультра"]],()=>qr(),r=>{if(!(r!=="phone"&&r!=="balanced"&&r!=="ultra")){ga(r),os.refresh(),as.refresh(),us.refresh(),Ae.checked=nt(),fn.textContent=nt()?"применится после перезагрузки":"",Dt(),ct();for(const x of Ke)Ce[x]?.();for(const x of Xe)Ft[x]?.();Ne.checked=hn()}}),ms=document.createElement("p");ms.className="settings__hint",ms.textContent="Рендер: WebGL2 работает везде, WebGPU даёт больше эффектов, но на части телефонов подвисает на первом кадре. Смена бэкенда пересобирает движок и перезагружает сцену.",rt.append(ms,ns,us.row,os.row,as.row,is,cs);const et=document.createElement("div");et.className="settings__pane",et.hidden=!0;const ps=document.createElement("p");ps.className="settings__hint",ps.textContent="Разрешение и частота записи — насколько дорого кодировать. Качество кодека — насколько жирный файл: чем выше, тем чётче картинка и тем сильнее просядет игра во время записи. Всё применяется к следующему нажатию «Запись».",et.append(ps);const fs=document.createElement("div");fs.className="settings__recordslot",et.append(fs);const bs=document.createElement("div");bs.className="settings__row";const hs=document.createElement("label");hs.className="settings__head";const wo=document.createElement("span");wo.textContent="Звук в файле";const lt=document.createElement("input");lt.type="checkbox",lt.checked=js(),hs.append(wo,lt),lt.addEventListener("change",()=>Na(lt.checked)),bs.append(hs);const Eo=Le("Разрешение",[["1280","720p"],["1920","1080p"],["window","Как на экране"]],()=>String(Cr()),r=>{if(r==="window"){Ds("window");return}(r==="1280"||r==="1920")&&Ds(Number(r))}),So=Le("Частота записи",[["24","24 fps"],["30","30 fps"],["60","60 fps"]],()=>String(va()),r=>{const x=Number(r);(x===24||x===30||x===60)&&Sa(x)}),ko=Le("Качество кодека",[["low","Низкое"],["medium","Среднее"],["high","Высокое"]],()=>wa(),r=>{(r==="low"||r==="medium"||r==="high")&&ka(r)}),Co=Le("Ключевой кадр",[["1","1 с"],["2","2 с"],["4","4 с"]],()=>String(Ea()),r=>{const x=Number(r);(x===1||x===2||x===4)&&Ca(x)});et.append(bs,Eo.row,So.row,ko.row,Co.row);const dt=document.createElement("div");dt.className="settings__pane",dt.hidden=!0;const gs=document.createElement("p");gs.className="settings__hint",gs.textContent="Пресет — это все настройки разом: физика, свет, тени, Post FX, звук и интерфейс. Активный пресет применяется при запуске и одинаково работает во всех сценах. Имя нового пресета — дата и время до минуты.",dt.append(gs);const ie=document.createElement("p");ie.className="settings__status",ie.setAttribute("role","status"),ie.textContent="";const xs=document.createElement("div");xs.className="settings__presetnamefield";const Te=document.createElement("input");Te.type="text",Te.value=We(),Te.placeholder="Название пресета",Te.setAttribute("aria-label","Название нового пресета");const Ot=document.createElement("button");Ot.className="settings__presetbtn",Ot.type="button",Ot.textContent="Сохранить",xs.append(Te,Ot);const Ja=document.createElement("div");Ja.className="settings__row";const jt=document.createElement("button");jt.className="settings__resetall",jt.type="button",jt.textContent="Обновить активный пресет",jt.addEventListener("click",()=>{const r=An();if(!r){ie.textContent="Активного пресета нет — сохраните новый.";return}ia(r,yt()),ie.textContent="Текущие настройки записаны в активный пресет.",Ue()});const zt=document.createElement("button");zt.className="settings__resetall",zt.type="button",zt.textContent="Импорт из файла";const Ge=document.createElement("input");Ge.type="file",Ge.accept="application/json,.json",Ge.hidden=!0,zt.addEventListener("click",()=>Ge.click()),Ge.addEventListener("change",()=>{const r=Ge.files?.[0];Ge.value="",r&&(async()=>{try{const x=Yi(await r.text());if(!x){ie.textContent="Это не файл настроек игры.";return}const L=gt(x.data);if(L.applied.length===0){ie.textContent="В файле нет знакомых настроек.";return}const F=ft(x.name??r.name.replace(/\.json$/i,""),x.data,x.created??Date.now());$s(F.id),_s(),Ue(),Te.value=We(),ie.textContent=`Импортировано «${F.name}»: ${L.applied.join(", ")}`}catch(x){ie.textContent=`Не удалось прочитать файл: ${x instanceof Error?x.message:"ошибка чтения"}`}})()});const Gt=document.createElement("button");Gt.className="settings__resetall",Gt.type="button",Gt.textContent="Убрать все пресеты",Gt.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты? Настройки останутся как есть.")&&(Vi(),_s(),Ue(),ie.textContent="Пресеты удалены, текущие настройки не тронуты.")});const Ut=document.createElement("div");Ut.className="settings__presets";const _s=()=>{for(const r of we)W[r]?.();for(const r of xt)Ze[r]?.();for(const r of Ke)Ce[r]?.();for(const r of Xe)Ft[r]?.();for(const r of la)u[r]?.();Ne.checked=hn(),it.checked=Rn();for(const r of Bs){const x=ho[r];x&&(x.checked=xe(r))}Ae.checked=nt(),Dt(),ct(),os.refresh(),as.refresh(),us.refresh(),Eo.refresh(),So.refresh(),ko.refresh(),Co.refresh(),lt.checked=js()},Ka=(r,x)=>{const L=Fs().find(j=>j.id===r);if(!L)return;const F=gt(L.data);$s(r),_s(),ie.textContent=F.applied.length>0?`Применён пресет «${x}»: ${F.applied.join(", ")}`:`В пресете «${x}» нет знакомых настроек.`},No=r=>r>0?We(new Date(r)):"дата неизвестна",Ue=()=>{Ut.replaceChildren();const r=Fs(),x=An();if(r.length===0){const L=document.createElement("p");L.className="settings__presetempty",L.textContent="Пресетов пока нет. Настройте всё как надо и нажмите «Сохранить».",Ut.append(L);return}for(const L of r){const F=document.createElement("div");F.className="settings__preset";const j=L.id===x;j&&F.classList.add("settings__preset--active");const B=document.createElement("div");B.className="settings__presetinfo";const A=document.createElement("span");A.className="settings__presetname",A.textContent=L.name;const R=document.createElement("span");R.className="settings__presetmeta",R.textContent=j?`${No(L.created)} · активен`:No(L.created),B.append(A,R);const S=document.createElement("button");S.className="settings__presetbtn",S.type="button",S.textContent="✎",S.title="Переименовать",S.setAttribute("aria-label",`Переименовать пресет ${L.name}`),S.addEventListener("click",()=>{const G=document.createElement("input");G.className="settings__presetnameinput",G.type="text",G.value=L.name,A.replaceWith(G),G.focus(),G.select();const Q=()=>{Ui(L.id,G.value),Ue()};G.addEventListener("keydown",ue=>{ue.key==="Enter"&&Q(),ue.key==="Escape"&&(ue.stopPropagation(),Ue())}),G.addEventListener("blur",Q)});const D=document.createElement("button");D.className="settings__presetbtn",D.type="button",D.textContent="Применить",D.disabled=j,D.addEventListener("click",()=>Ka(L.id,L.name));const J=document.createElement("button");J.className="settings__presetbtn",J.type="button",J.textContent="↓",J.title="Экспорт в файл",J.setAttribute("aria-label",`Экспорт пресета ${L.name} в файл`),J.addEventListener("click",()=>Wi(L));const U=document.createElement("button");U.className="settings__presetbtn settings__presetbtn--danger",U.type="button",U.textContent="✕",U.title="Удалить",U.setAttribute("aria-label",`Удалить пресет ${L.name}`),U.addEventListener("click",()=>{window.confirm(`Удалить пресет «${L.name}»?`)&&(Hi(L.id),Ue(),ie.textContent=`Пресет «${L.name}» удалён.`)}),F.append(B,D,S,J,U),Ut.append(F)}};Ot.addEventListener("click",()=>{const r=ft(Te.value||We(),yt());Te.value=We(),Ue(),ie.textContent=`Сохранён пресет «${r.name}».`}),dt.append(xs,Ut,jt,zt,Gt,Ge,ie),Ue();const ys=document.createElement("div");ys.className="settings__scroll",ys.append(d,y,X,ke,je,ze,ge,rt,et,dt),n.append(s,a,ys),e.append(t,n),document.body.append(e);function Xa(){e.hidden=!1,Te.value=We()}function qa(){e.hidden=!0}return{root:e,backendSlot:ns,recordSlot:fs,open:Xa,close:qa}}const ac=300;function ic(e={}){let t=0,n=!1;const s=()=>{const c=An();if(!c){n||(n=!0,e.onNoPreset?.());return}const l=yt();if(!ia(c,l))return;n=!1;const f=An();f&&e.onSaved?.(f)},a=cr(()=>{Wr()||(window.clearTimeout(t),t=window.setTimeout(s,ac))}),i=()=>{t!==0&&(window.clearTimeout(t),t=0,s())};return document.addEventListener("visibilitychange",i),window.addEventListener("pagehide",i),{flush(){t!==0&&(window.clearTimeout(t),t=0,s())},destroy(){window.clearTimeout(t),t=0,a(),document.removeEventListener("visibilitychange",i),window.removeEventListener("pagehide",i)}}}const rc="https://vk.ru/H360ru";function cc(){const e=document.createElement("div"),t=document.createElement("p");t.className="dlg__empty",t.textContent="Описание игры скоро появится. Пока сюда можно поставить правила, список техники и ссылку на сервер.";const n=document.createElement("a");n.className="dlg__link",n.href=rc,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Группа игры во «ВКонтакте»",e.append(t,n);const s=an({title:"Об игре",body:e});return{dialog:s,open(){s.open()},destroy(){s.destroy()}}}let La=null;function lo(e){La=e}function st(){return La?.()??null}const lc={yaw:0,lift:0,zoom:1,shoulder:1,distance:6.4,height:2.5,fov:60},Ho=["yaw","lift","zoom","distance","height","fov"],Vo={yaw:{label:"Поворот",min:-180,max:180,step:1,unit:"°"},lift:{label:"Наклон",min:-.6,max:3.4,step:.1,unit:" м"},zoom:{label:"Зум",min:.55,max:1.7,step:.01,unit:"×"},distance:{label:"Дистанция",min:3,max:15,step:.1,unit:" м"},height:{label:"Высота",min:1,max:6,step:.1,unit:" м"},fov:{label:"Обзор (fov)",min:40,max:90,step:1,unit:"°"}},Aa="blendars.camera-views.v1";function Rs(){try{const e=localStorage.getItem(Aa);if(!e)return[];const t=JSON.parse(e);if(!t||typeof t!="object")return[];const n=t.list;if(!Array.isArray(n))return[];const s=[];for(const o of n){if(!o||typeof o!="object")continue;const a=o;if(typeof a.id!="string"||!a.id)continue;const i=a.view;if(!i||typeof i!="object")continue;const c=i,l=(f,b)=>typeof f=="number"&&Number.isFinite(f)?f:b;s.push({id:a.id,name:typeof a.name=="string"&&a.name?a.name:"Без имени",created:typeof a.created=="number"?a.created:0,view:{yaw:l(c.yaw,0),lift:l(c.lift,0),zoom:l(c.zoom,1),shoulder:l(c.shoulder,1),distance:l(c.distance,6.4),height:l(c.height,2.5),fov:l(c.fov,60)}})}return s}catch{return[]}}function Wo(e){try{localStorage.setItem(Aa,JSON.stringify({list:e}))}catch{}}function dc(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const uc=`
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
`;function mc(){if(document.getElementById("camv-style"))return;const e=document.createElement("style");e.id="camv-style",e.textContent=uc,document.head.append(e)}function pc(){mc();const e=document.createElement("div"),t=document.createElement("p");t.className="camv__hint";const n={},s=document.createElement("div");for(const p of Ho){const u=Vo[p],y=document.createElement("div");y.className="camv__row";const h=document.createElement("div");h.className="camv__head";const C=document.createElement("span");C.textContent=u.label;const T=document.createElement("span");T.className="camv__val",h.append(C,T);const _=document.createElement("input");_.type="range",_.min=String(u.min),_.max=String(u.max),_.step=String(u.step),_.setAttribute("aria-label",u.label),_.addEventListener("input",()=>{const w=Number(_.value);st()?.write({[p]:w}),T.textContent=`${_.value}${u.unit}`}),y.append(h,_),s.append(y),n[p]={input:_,out:T}}const o=document.createElement("div");o.className="camv__btns";const a=[],i=[[-1,"Слева"],[0,"Центр"],[1,"Справа"]];for(const[p,u]of i){const y=document.createElement("button");y.className="camv__btn",y.type="button",y.textContent=u,y.addEventListener("click",()=>{st()?.write({shoulder:p}),c(p)}),a.push(y),o.append(y)}const c=p=>{for(let u=0;u<i.length;u++)a[u]?.classList.toggle("camv__btn--on",i[u]?.[0]===p)},l=document.createElement("button");l.className="camv__btn",l.type="button",l.textContent="Сбросить вид (C)",l.addEventListener("click",()=>{st()?.reset(),v()});const f=document.createElement("div");f.className="camv__save";const b=document.createElement("input");b.type="text",b.placeholder="Название ракурса",b.setAttribute("aria-label","Название нового ракурса");const m=document.createElement("button");m.className="camv__btn",m.type="button",m.textContent="Сохранить",f.append(b,m);const g=document.createElement("div");g.className="camv__list";const E=document.createElement("p");E.className="camv__status",E.setAttribute("role","status"),E.textContent="",e.append(t,s,o,l,f,g,E);const k=an({title:"Ракурсы камеры",body:e}),N=(p,u)=>{const y=Vo[p];return`${p==="zoom"?u.toFixed(2):String(u)}${y.unit}`},v=()=>{const p=st(),u=p?.read()??lc,y=p!==null;t.textContent=y?"Ракурс меняется живьём. Тяните сцену мышью или пальцем (влево — экран влево), колесо или щипок — расстояние, C — сброс.":"Откройте сцену с машиной — здесь появится текущий ракурс.";for(const h of Ho){const C=n[h];C&&(C.input.value=String(u[h]),C.input.disabled=!y,C.out.textContent=N(h,u[h]))}for(const h of a)h.disabled=!y;c(u.shoulder),l.disabled=!y,m.disabled=!y,b.disabled=!y,d()},d=()=>{g.replaceChildren();const p=Rs();if(p.length===0){const u=document.createElement("p");u.className="camv__empty",u.textContent="Сохранённых ракурсов пока нет.",g.append(u);return}for(const u of p){const y=document.createElement("div");y.className="camv__item";const h=document.createElement("span");h.className="camv__name",h.textContent=u.name;const C=document.createElement("button");C.className="camv__btn",C.type="button",C.textContent="Применить",C.disabled=st()===null,C.addEventListener("click",()=>{const _=st();_&&(_.write({...u.view}),v(),E.textContent=`Применён ракурс «${u.name}».`)});const T=document.createElement("button");T.className="camv__btn",T.type="button",T.textContent="✕",T.title="Удалить",T.setAttribute("aria-label",`Удалить ракурс ${u.name}`),T.addEventListener("click",()=>{Wo(Rs().filter(_=>_.id!==u.id)),d(),E.textContent=`Ракурс «${u.name}» удалён.`}),y.append(h,C,T),g.append(y)}};return m.addEventListener("click",()=>{const p=st();if(!p)return;const u=Date.now(),y={id:dc(u),name:b.value.trim()||We(new Date(u)),created:u,view:{...p.read()}},h=Rs();h.push(y),Wo(h),b.value="",d(),E.textContent=`Сохранён ракурс «${y.name}».`}),{dialog:k,open(){v(),k.open()},destroy(){k.destroy()}}}const fc=[{hash:"709fad1",date:"2026-10-09",subject:"HUD в канвасе: слой под размер виджета вместо полноэкранной текстуры, обрезка полосы компаса"},{hash:"1d33c0a",date:"2026-10-09",subject:"Забег по чекпоинтам: таймер, карточка финиша, окно «Лидеры», личность ВК"},{hash:"e4e4244",date:"2026-10-09",subject:"up"},{hash:"b3964c6",date:"2026-10-09",subject:"Сглаживание: TAA на вкладке «Графика», починка MSAA, ПК-пресеты на MSAA"},{hash:"6f17f25",date:"2026-10-08",subject:"HUD в канвас, UI-аудиошина, Draco/KTX2-ассеты"},{hash:"ad022dc",date:"2026-10-08",subject:"Fix WGSL shader: declare material_diffuse and view_position uniforms in terrain-splat"},{hash:"a206a10",date:"2026-10-08",subject:"Rebuild dist with base /blend-ars/ (GitHub Pages)"},{hash:"15fdf63",date:"2026-10-08",subject:"Deploy built site from dist; path dist in Pages workflow"},{hash:"942a7cc",date:"2026-10-08",subject:"Remove project sources; keep .github and .gitignore"},{hash:"da0f40e",date:"2026-10-08",subject:"Create static.yml"},{hash:"2691051",date:"2026-10-08",subject:"Delete .github/workflows/static.yml"},{hash:"98c2349",date:"2026-10-08",subject:"Delete .github/workflows/npm-publish-github-packages.yml"},{hash:"3ce584f",date:"2026-10-08",subject:"Update static.yml"},{hash:"128f22b",date:"2026-10-03",subject:"Create npm-publish-github-packages.yml"},{hash:"c8e16ab",date:"2026-10-03",subject:"Create static.yml"},{hash:"5a46d53",date:"2026-10-03",subject:"feat(scene): выбор кузова грузовик/Maserati, Maserati в меню, откат WebGPU→WebGL2"},{hash:"5c65165",date:"2026-10-03",subject:"feat(menu): экран загрузки с прогрессом + процедурный 3D-фон меню"},{hash:"1faa7f1",date:"2026-10-03",subject:"test(stage-0): браузерная проверка рендера, smoke-сцена, иконки-заглушки"},{hash:"4f12113",date:"2026-10-03",subject:"feat(stage-0): bootstrap Vite + ленивый PlayCanvas + тулинг бюджетов"},{hash:"eb68f3c",date:"2026-10-03",subject:"docs: rewrite README for PlayCanvas/Colyseus web stack"},{hash:"34ff9ca",date:"2026-10-03",subject:"chore: remove legacy Godot+Nakama tree and web export"},{hash:"9018d77",date:"2026-10-02",subject:"Create FUNDING.yml"},{hash:"7f64ab1",date:"2026-09-30",subject:"Add files via upload"},{hash:"5b7ab23",date:"2026-09-30",subject:"Add files via upload"},{hash:"ebb8901",date:"2026-03-19",subject:"mv"},{hash:"3c3fc26",date:"2026-03-19",subject:"fix: обновлен .gitignore и удалены системные файлы"},{hash:"0e075c9",date:"2026-03-19",subject:"up"},{hash:"9309069",date:"2026-03-19",subject:"upd"},{hash:"b82f5bc",date:"2026-03-19",subject:"docs: оновлення правил проекту"},{hash:"a19f06e",date:"2026-03-19",subject:"up"},{hash:"45bb3b3",date:"2026-03-19",subject:"new rules by demiurgos 19_1"},{hash:"7519417",date:"2026-02-27",subject:"Update README.md"},{hash:"58a3447",date:"2026-02-27",subject:"**BLEND ARS: Initial Project Setup and Development Notice**"},{hash:"60a150e",date:"2026-02-27",subject:"upd"},{hash:"eae4946",date:"2026-02-27",subject:"Exclude addons folder from tracking"},{hash:"cfe0473",date:"2026-02-27",subject:"upd"},{hash:"94b5e5d",date:"2026-02-24",subject:"uikit up"},{hash:"17b03ea",date:"2026-02-24",subject:"mv"},{hash:"c8e9bf6",date:"2026-02-24",subject:"апдейт"},{hash:"48511ce",date:"2026-02-24",subject:"ui_kit"},{hash:"ad054cb",date:"2026-02-24",subject:"up"},{hash:"73e2c24",date:"2026-02-22",subject:"Update 00-core.md"},{hash:"8d20bc4",date:"2026-02-22",subject:"Create 05-ui-perf.md"},{hash:"cf17f7a",date:"2026-02-22",subject:"Update and rename 04-mcp-workflow.md to 04-ui-theme.md"},{hash:"93f52ae",date:"2026-02-22",subject:"Update and rename 03-gdscript-standards.md to 03-ui-core.md"},{hash:"ff72202",date:"2026-02-22",subject:"Update and rename 02-ui-scifi.md to 02-workflow.md"},{hash:"a533398",date:"2026-02-22",subject:"Rename 00-global.md to 00-core.md"},{hash:"134cacc",date:"2026-02-22",subject:"Update and rename 01-mmo-coder.md to 01-gdscpipt.md"},{hash:"bbd1850",date:"2026-02-22",subject:"Update 00-global.md"},{hash:"2096da3",date:"2026-02-20",subject:"Create FUNDING.yml"}];function bc(){const e=fc;if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,o=s.hash,a=s.date,i=s.subject;typeof o!="string"||typeof i!="string"||t.push({hash:o,date:typeof a=="string"?a:"",subject:i})}return t}function hc(){const e=bc(),t=document.createElement("div");if(e.length===0){const s=document.createElement("p");s.className="dlg__empty",s.textContent="Журнал пока пуст: сборка сделана без истории git.",t.append(s)}else{const s=document.createElement("p");s.className="devlog__meta",s.textContent=`Последние ${e.length} изменений`;const o=document.createElement("ul");o.className="devlog__list";for(const a of e){const i=document.createElement("li");i.className="devlog__item";const c=document.createElement("span");c.className="devlog__hash",c.textContent=a.hash;const l=document.createElement("span");l.className="devlog__date",l.textContent=a.date;const f=document.createElement("span");f.className="devlog__subject",f.textContent=a.subject,i.append(c,l,f),o.append(i)}t.append(s,o)}const n=an({title:"Журнал разработки",body:t});return{dialog:n,open(){n.open()},destroy(){n.destroy()}}}const Ra="blendars.race.board.v1",gc=200;let mt=null;function gn(e){return typeof e=="number"&&Number.isFinite(e)}function xc(e){if(!Array.isArray(e))return[];const t=[];for(const n of e){if(t.length>=gc)break;if(typeof n!="object"||n===null)continue;const s=n;typeof s.uid!="string"||s.uid===""||typeof s.name=="string"&&(!gn(s.bestMs)||s.bestMs<0||t.push({uid:s.uid,name:s.name,photo:typeof s.photo=="string"?s.photo:"",bestMs:s.bestMs,lastMs:gn(s.lastMs)?s.lastMs:s.bestMs,runs:gn(s.runs)&&s.runs>0?Math.floor(s.runs):1,updatedAt:gn(s.updatedAt)?s.updatedAt:0}))}return t.sort(Ta)}function Ta(e,t){return e.bestMs!==t.bestMs?e.bestMs-t.bestMs:e.updatedAt!==t.updatedAt?e.updatedAt-t.updatedAt:e.uid<t.uid?-1:e.uid>t.uid?1:0}function Ma(){if(mt!==null)return mt;try{const e=localStorage.getItem(Ra);mt=e===null?[]:xc(JSON.parse(e))}catch(e){console.warn("[race] таблица недоступна, веду её в памяти",e),mt=[]}return mt}function _c(e){mt=e;try{localStorage.setItem(Ra,JSON.stringify(e))}catch(t){console.warn("[race] рекорд не сохранён на диск",t)}}function yc(){return Ma()}function vc(e){const t=Ma(),n=t.findIndex(f=>f.uid===e.uid),s=n>=0?t[n]:void 0,o=s?.bestMs??0,a=Math.max(0,Math.round(e.timeMs)),i={uid:e.uid,name:e.name,photo:e.photo,bestMs:s===void 0?a:Math.min(s.bestMs,a),lastMs:a,runs:(s?.runs??0)+1,updatedAt:Date.now()},c=t.slice();n>=0?c[n]=i:c.push(i),c.sort(Ta),_c(c);const l=c.findIndex(f=>f.uid===e.uid);return{rank:l>=0?l+1:c.length,total:c.length,bestMs:i.bestMs,improved:s===void 0||a<o,previousBestMs:o,board:c}}function wc(e,t){const n={state:"idle",startMs:0,lastMs:0,collected:0,total:t.total},s=()=>{if(n.state==="finished"||(n.state==="idle"&&(n.state="running",n.startMs=performance.now(),e.fire("race:started",n.total)),n.collected+=1,n.total<1||n.collected<n.total))return;n.state="finished",n.lastMs=Math.max(0,Math.round(performance.now()-n.startMs));const o={timeMs:n.lastMs,collected:n.collected,total:n.total};e.fire("race:finished",o),t.onFinished?.(o)};return e.on("checkpoint:visited",s),{view:n,destroy(){e.off("checkpoint:visited",s)}}}function Yo(e){return e<10?`0${e}`:`${e}`}function tn(e){const t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/10);return`${Math.floor(n/6e3)}:${Yo(Math.floor(n/100)%60)}.${Yo(n%100)}`}function td(e){return`${e<0?"−":"+"}${tn(Math.abs(e))}`}const Ec=`
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
`;function Pa(e,t,n,s){const o=Math.abs(e)%100,a=o%10;return o>=11&&o<=14?s:a===1?t:a>=2&&a<=4?n:s}function Sc(e,t,n,s,o,a){const i=document.createElement("li");i.className="leaders__row";const c=document.createElement("span");c.className="leaders__place",c.textContent=`${e}`;const l=document.createElement("span");if(l.className="leaders__who",n!==""){const k=document.createElement("img");k.className="leaders__face",k.src=n,k.alt="",k.loading="lazy",k.addEventListener("error",()=>k.remove()),l.append(k)}const f=document.createElement("span");f.className="leaders__text";const b=document.createElement("span");b.className="leaders__name",b.textContent=t;const m=document.createElement("span");m.className="leaders__about";const g=`${o} ${Pa(o,"заезд","заезда","заездов")}`;m.textContent=o>1&&a>s?`${g} · последний ${tn(a)}`:g,f.append(b,m),l.append(f);const E=document.createElement("span");return E.className="leaders__time",E.textContent=tn(s),i.append(c,l,E),i}function kc(e){e.textContent="";const t=yc();if(t.length===0){const a=document.createElement("p");a.className="dlg__empty",a.textContent="Заездов пока нет. Соберите все чекпоинты — результат попадёт в таблицу.",e.append(a);return}const n=document.createElement("p");n.className="leaders__meta",n.textContent=`${t.length} ${Pa(t.length,"игрок","игрока","игроков")} · лучшее время на игрока`;const s=document.createElement("ul");s.className="leaders__list";for(let a=0;a<t.length;a++){const i=t[a];i&&s.append(Sc(a+1,i.name,i.photo,i.bestMs,i.runs,i.lastMs))}const o=document.createElement("p");o.className="leaders__hint",o.textContent="Таблица — на этом устройстве: заезды других игроков в неё не попадают. Общий рейтинг появится, когда у игры будет сервер.",e.append(n,s,o)}function Cc(){if(!document.getElementById("leaders-style")){const n=document.createElement("style");n.id="leaders-style",n.textContent=Ec,document.head.append(n)}const e=document.createElement("div"),t=an({title:"Лидеры",body:e});return{dialog:t,open(){kc(e),t.open()},destroy(){t.destroy()}}}function Ht(e,t,n,s){const o=document.createElement("button");return o.className=e,o.type="button",o.style.setProperty("--tb-icon",`url(${JSON.stringify(t)})`),o.title=n,o.setAttribute("aria-label",n),o.addEventListener("pointerdown",a=>{a.preventDefault(),!o.disabled&&s()}),o}const Nc=`
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
`;function Lc(){const e=document.createElement("button");e.className="tb__btn",e.type="button";const t=()=>document.fullscreenElement!==null,n=()=>{const s=t(),o=s?bi:fi;e.style.setProperty("--tb-icon",`url(${JSON.stringify(o)})`);const a=s?"Выйти из полноэкранного режима":"Полноэкранный режим";e.title=a,e.setAttribute("aria-label",a),e.setAttribute("aria-pressed",s?"true":"false")};return e.addEventListener("pointerdown",s=>{s.preventDefault(),!e.disabled&&(t()?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{}))}),document.addEventListener("fullscreenchange",n),n(),{el:e,destroy(){document.removeEventListener("fullscreenchange",n)}}}async function Ac(){return(await ee(()=>import("./music-player.D_N5SwP-.js"),__vite__mapDeps([0,1,2]))).createMusicPlayer()}function Rc(e){const t=document.createElement("style");t.textContent=Nc;const n=document.createElement("header");n.className="tb";const s=document.createElement("div");s.className="tb__slot",s.append(e.statsHost);const o=document.createElement("div");o.className="tb__center";const a=document.createElement("h1");a.className="tb__title",a.textContent=e.title,o.append(a);const i=document.createElement("div");i.className="tb__slot tb__slot--right";const c=document.createElement("div");c.className="tb__extra";const l=Lc(),f=cc(),b=hc(),m=pc(),g=Cc(),E=document.createElement("button");E.className="tb__btn tb__btn--close",E.type="button",E.style.setProperty("--tb-icon",`url(${JSON.stringify(Ni)})`),E.title="Скрыть панель",E.setAttribute("aria-label","Скрыть панель");const k=document.createElement("span");k.className="tb__cap",k.innerHTML="Скрыть<br>панель",E.append(k),E.addEventListener("pointerdown",u=>{u.preventDefault(),!E.disabled&&e.onToggleChrome()});let N=null,v=null;const d=Ht("tb__btn",yi,"Музыка",()=>{const u=y=>{y.open(),e.windows.open("music")};if(v!==null){u(v);return}N??=Ac(),N.then(y=>{v=y,e.windows.register({id:"music",root:y.dialog.root,show:()=>y.open(),hide:()=>y.dialog.close()}),u(y)}).catch(()=>{})});i.append(c,Ht("tb__btn",xi,"Лидеры",()=>{g.open(),e.windows.open("leaders")}),Ht("tb__btn",_i,"Ракурсы камеры",()=>{m.open(),e.windows.open("camera")}),Ht("tb__btn",gi,"Журнал разработки",()=>{b.open(),e.windows.open("devlog")}),Ht("tb__btn",hi,"Об игре",()=>{f.open(),e.windows.open("about")}),d,E,l.el),s.classList.add("tb__slot--left"),n.append(t,s,o,i),e.windows.register({id:"camera",root:m.dialog.root,show:()=>m.open(),hide:()=>m.dialog.close()}),e.windows.register({id:"leaders",root:g.dialog.root,show:()=>g.open(),hide:()=>g.dialog.close()}),e.windows.register({id:"about",root:f.dialog.root,show:()=>f.open(),hide:()=>f.dialog.close()}),e.windows.register({id:"devlog",root:b.dialog.root,show:()=>b.open(),hide:()=>b.dialog.close()});const p=[Ye(n),Ye(f.dialog.root),Wt(f.dialog.root),Ye(b.dialog.root),Wt(b.dialog.root),Ye(g.dialog.root),Wt(g.dialog.root),Ye(m.dialog.root),Wt(m.dialog.root)];return{root:n,setExtraButtons(u){c.append(u)},setBackButton(u){s.prepend(u)},setSceneMode(u){n.classList.toggle("tb--scene",u)},destroy(){l.destroy(),f.destroy(),b.destroy(),m.destroy(),g.destroy();for(const u of p)u();v?.destroy(),n.remove()}}}const Tc=`
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
`;function Mc(e={}){const t=document.createElement("style");t.textContent=Tc;const n=document.createElement("div");n.className="win";const s=document.createElement("div");s.className="win__bar";const o=document.createElement("button");o.className="win__close",o.type="button",o.textContent="✕",o.title="Закрыть окно",o.setAttribute("aria-label","Закрыть окно"),s.append(o);const a=document.createElement("p");a.className="win__empty",a.textContent="",a.setAttribute("aria-hidden","true"),n.append(t,a),document.body.append(s);const i=new Map,c=[];let l=null,f=null;const b=()=>{for(const h of i.values()){const C=h.id===l;h.root.hidden=!C,C?h.show():h.hide()}n.classList.toggle("win--open",l!==null),s.classList.toggle("win--open",l!==null);for(const h of c)h();m()},m=()=>{const h=n.getBoundingClientRect();if(h.width<=0||h.height<=0)return;const C=document.documentElement.style;C.setProperty("--win-left",`${Math.round(h.left)}px`),C.setProperty("--win-top",`${Math.round(h.top)}px`),C.setProperty("--win-width",`${Math.round(h.width)}px`),C.setProperty("--win-height",`${Math.round(h.height)}px`)},g={root:n,closeBtn:o,register(h){i.set(h.id,h),h.hide(),h.root.hidden=!0},open(h){i.has(h)&&(l=h,f={x:N,y:v,until:performance.now()+p},b())},close(){l!==null&&(l=null,b())},toggle(h){l===h?g.close():g.open(h)},active(){return l},onChange(h){return c.push(h),()=>{const C=c.indexOf(h);C>=0&&c.splice(C,1)}},destroy:()=>{}};o.addEventListener("pointerdown",h=>{h.preventDefault(),g.close()});const E=new ResizeObserver(m);E.observe(n),window.addEventListener("resize",m),window.addEventListener("orientationchange",m),m();const k=h=>{h.key==="Escape"&&(l!==null?(h.stopPropagation(),g.close()):e.onEmptyEscape?.())};document.addEventListener("keydown",k);let N=0,v=0;const d=h=>{N=h.clientX,v=h.clientY},p=400,u=32,y=h=>{if(l===null)return;const C=i.get(l);if(!C||C.root.hidden)return;const T=h.target;if(!(T instanceof Element)||C.root.contains(T))return;const _=f;if(_!==null&&performance.now()<_.until){const P=h.clientX-_.x,I=h.clientY-_.y;if(P*P+I*I<=u*u)return}if(T.closest(".tb")!==null)return;const w=h.clientX-N,M=h.clientY-v;w*w+M*M>64||g.close()};return document.addEventListener("pointerdown",d,!0),document.addEventListener("click",y),g.destroy=()=>{E.disconnect(),window.removeEventListener("resize",m),window.removeEventListener("orientationchange",m),document.removeEventListener("keydown",k),document.removeEventListener("pointerdown",d,!0),document.removeEventListener("click",y),s.remove();const h=document.documentElement.style;h.removeProperty("--win-left"),h.removeProperty("--win-top"),h.removeProperty("--win-width"),h.removeProperty("--win-height")},g}const Pc=`
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
    src: url(${JSON.stringify(ea)}) format('truetype');
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
`,Ic={idle:"",starting:"готовлю…",recording:"идёт",encoding:"упаковываю файл…",saving:"сохраняю…",error:"не вышло"},Fc=["recording","encoding","saving"],Ts=["Одно не рождается без другого: оболочка без души лишь кукла, душа без оболочки — призрак.","Сон совести рождает чудовищ.","У нас нет формы, и мы страшимся этого.","В здравом теле, витает здравый дух, а значит и душа."];class $c{statsHost;clusterHost;settings;windows;root;playBtn;backBtn;settingsItem;modes;actionsEl;midEl;statusEl;statusText;recordRow;recordBtn;recordDot;recordLabel;recordState;recordBar;recordFill;idleIndex=-1;topbar;chromeHidden=!1;autosave;uiSoundDetach=[];constructor(t,n){this.root=document.createElement("div"),this.root.className="menu";const s=document.createElement("style");s.textContent=Pc,this.windows=Mc({onEmptyEscape:()=>{this.setChromeHidden(!this.chromeHidden)}}),this.statsHost=document.createElement("div"),this.topbar=Rc({statsHost:this.statsHost,title:"BLEND ARS",subtitle:"",windows:this.windows,onToggleChrome:()=>{this.setChromeHidden(!0)}}),this.playBtn=document.createElement("button"),this.playBtn.className="play play--go",this.playBtn.type="button",this.playBtn.textContent="Играть",this.playBtn.addEventListener("pointerdown",g=>{g.preventDefault(),!this.playBtn.disabled&&(_e("click"),this.modes.open(),this.windows.open("modes"))});const o=document.createElement("ul");o.className="actions__list";const a=[["Контейнеры",vi],["Миссии",wi],["Гараж",Ei],["Магазин",Si]];for(const[g,E]of a){const k=document.createElement("li"),N=document.createElement("button");N.className="mitem",N.type="button",N.textContent=g,N.disabled=!0,N.title=`${g}: раздел в разработке`,N.style.setProperty("--mitem-icon",`url(${JSON.stringify(E)})`),k.append(N),o.append(k)}this.settingsItem=document.createElement("button"),this.settingsItem.className="mitem",this.settingsItem.type="button",this.settingsItem.textContent="Настройки",this.settingsItem.style.setProperty("--mitem-icon",`url(${JSON.stringify(Fo)})`),this.settingsItem.addEventListener("pointerdown",g=>{g.preventDefault(),!this.settingsItem.disabled&&(_e("click"),this.openSettings())});{const g=document.createElement("li");g.append(this.settingsItem),o.append(g)}this.modes=Bi(g=>{_e("click"),this.modes.dialog.close(),this.windows.close(),n.onScene(g)}),this.backBtn=document.createElement("button"),this.backBtn.className="tb__back",this.backBtn.type="button",this.backBtn.textContent="Назад",this.backBtn.style.setProperty("--tb-icon",`url(${JSON.stringify(Ai)})`),this.backBtn.title="Вернуться в меню",this.backBtn.setAttribute("aria-label","Вернуться в меню"),this.backBtn.style.display="none",this.backBtn.addEventListener("pointerdown",g=>{g.preventDefault(),_e("click"),n.onBack?.()}),this.settings=oc();const i=document.createElement("button");i.className="tb__btn",i.type="button",i.style.setProperty("--tb-icon",`url(${JSON.stringify(Fo)})`),i.title="Настройки",i.setAttribute("aria-label","Настройки"),i.addEventListener("pointerdown",g=>{g.preventDefault(),!i.disabled&&(_e("click"),this.openSettings())});const c=document.createElement("div");c.className="tb__extra",c.append(i),this.topbar.setExtraButtons(c),this.topbar.setBackButton(this.backBtn);const l=document.createElement("div");l.className="actions",l.append(this.playBtn,o),this.actionsEl=l,this.statusText=document.createElement("div"),this.statusText.className="status__text",this.statusText.textContent=this.pickIdlePhrase(),this.recordRow=document.createElement("div"),this.recordRow.className="status__record",this.recordRow.hidden=!0,this.recordBtn=document.createElement("button"),this.recordBtn.className="status__recordbtn",this.recordBtn.type="button",this.recordDot=document.createElement("span"),this.recordDot.className="status__dot",this.recordLabel=document.createElement("span"),this.recordLabel.textContent="Запись",this.recordBtn.append(this.recordDot,this.recordLabel),this.recordBtn.addEventListener("pointerdown",g=>{g.preventDefault(),!this.recordBtn.disabled&&(_e("click"),n.onRecord?.())}),this.recordState=document.createElement("span"),this.recordState.className="status__recordstate",this.recordState.textContent="",this.recordBar=document.createElement("div"),this.recordBar.className="status__recordbar",this.recordFill=document.createElement("span"),this.recordBar.append(this.recordFill),this.recordBar.style.display="none",this.recordRow.append(this.recordBtn,this.recordState,this.recordBar),this.statusEl=document.createElement("div"),this.statusEl.className="status",this.clusterHost=document.createElement("div"),this.clusterHost.className="status__cluster",this.statusEl.append(this.clusterHost),this.statusText.setAttribute("role","status"),this.statusText.setAttribute("aria-live","polite"),this.statusEl.append(this.statusText),this.settings.recordSlot.append(this.recordRow);const f=document.createElement("div");f.className="mid",f.append(l,this.windows.root),this.actionsEl=l,this.midEl=f;const b=document.createElement("div");b.className="wrap",b.append(f);const m=document.createElement("button");m.className="chrome-fab",m.type="button",m.style.setProperty("--fab-icon",`url(${JSON.stringify(Li)})`),m.title="Показать интерфейс",m.setAttribute("aria-label","Показать интерфейс"),m.addEventListener("pointerdown",g=>{g.preventDefault(),_e("click"),this.setChromeHidden(!1)}),this.root.append(s,this.topbar.root,b,this.statusEl,m),t.append(this.root),Mi(()=>Ur("uiClick")),Pi(),this.uiSoundDetach.push(Ye(this.root),Ye(this.settings.root),Wt(this.settings.root),Ye(this.modes.dialog.root)),this.windows.register({id:"settings",root:this.settings.root,show:()=>this.settings.open(),hide:()=>this.settings.close()}),this.windows.register({id:"modes",root:this.modes.dialog.root,show:()=>this.modes.open(),hide:()=>this.modes.dialog.close()}),this.settings.close(),this.autosave=ic({onSaved:g=>{this.setStatus(`Настройки сохранены в пресет «${g}».`)},onNoPreset:()=>{this.setStatus("Настройки применены, но активного пресета нет — сохранять некуда. Сохраните пресет на вкладке «Пресеты».")}})}openSettings(){this.settings.open(),this.windows.open("settings")}setMode(t){const n=t==="scene";this.playBtn.style.display=n?"none":"",this.backBtn.style.display=n?"":"none",this.recordRow.hidden=!n,n&&(this.modes.dialog.close(),this.windows.close()),this.setChromeHidden(!1),this.actionsEl.style.display=n?"none":"",this.midEl.style.gridTemplateColumns=n?"minmax(0, 1fr)":"",this.root.style.background=n?"none":"",this.root.classList.toggle("menu--scene",n)}setChromeHidden(t){this.chromeHidden=t,this.root.classList.toggle("menu--chrome-hidden",t)}isChromeHidden(){return this.chromeHidden}setSceneChrome(t){this.topbar.setSceneMode(t)}statsHostFor(t){return this.statsHost}setBusy(t){this.playBtn.disabled=t,this.settingsItem.disabled=t,this.backBtn.disabled=t,this.modes.setBusy(t),t&&this.setStatus("Инициализация рендера…")}setStatus(t){this.statusText.textContent=t||this.pickIdlePhrase()}setRecordState(t,n){const s=Fc.includes(t);this.recordBtn.classList.toggle("live",s),this.recordBtn.disabled=t==="starting"||t==="encoding"||t==="saving",this.recordLabel.textContent=t==="recording"?"Стоп":"Запись",this.recordBar.style.display=t==="encoding"||t==="saving"?"block":"none",this.recordFill.style.width="0%",this.recordState.textContent=n??Ic[t]}setRecordProgress(t){this.recordFill.style.width=`${Math.min(Math.max(t,0),1)*100}%`}pickIdlePhrase(){let t=Math.floor(Math.random()*Ts.length);return t===this.idleIndex&&(t=(t+1)%Ts.length),this.idleIndex=t,Ts[t]??""}destroy(){this.topbar.destroy(),this.modes.destroy(),this.windows.destroy(),this.autosave.destroy();for(const t of this.uiSoundDetach)t();this.root.remove(),this.settings.root.remove()}}const Bc=`
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
`,Dc='<svg class="rswitch__svg" viewBox="0 0 48 26" width="48" height="26" aria-hidden="true" focusable="false"><rect class="rswitch__track" x="1" y="1" width="46" height="24" rx="12"></rect><circle class="rswitch__knob" cx="13" cy="13" r="9"></circle></svg>';function Oc(e,t){const n=document.createElement("div");n.className="rswitch-wrap";const s=document.createElement("span");s.className="rswitch__opt",s.textContent="WebGL2",s.dataset.val="webgl2";const o=document.createElement("button");o.className="rswitch",o.type="button",o.setAttribute("role","switch"),o.innerHTML=Dc;const a=document.createElement("span");a.className="rswitch__opt",a.textContent="WebGPU",a.dataset.val="webgpu",n.append(s,o,a);const i=()=>{o.disabled||t.onSwitch()};n.addEventListener("click",i),e.append(n);let c="webgl2",l=!1,f="";const b=()=>{const m=c==="webgpu";o.dataset.state=m?"on":"off",o.setAttribute("aria-checked",m?"true":"false"),s.classList.toggle("rswitch__opt--active",!m),a.classList.toggle("rswitch__opt--active",m);const g=m?"WebGL2":"WebGPU";o.title=o.disabled&&f?f:`Переключить на ${g}`,o.setAttribute("aria-label",`Рендер: ${m?"WebGPU":"WebGL2"}. Переключить на ${g}`),n.classList.toggle("rswitch-wrap--disabled",o.disabled),n.setAttribute("aria-disabled",String(o.disabled))};return b(),{setBackend(m){c=m,b()},setBusy(m){l=m,o.disabled=m||!!f,b()},setUnavailable(m){f=m,o.disabled=l||!!m,b()},destroy(){n.remove()}}}const jc=`
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
`;function Vt(e,t,n,s,o,a){o<=0||s<=0||(e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o),e.fill())}const zc="#ebdbb2",xn="system-ui, -apple-system, 'Segoe UI', sans-serif";function Gc(e){let t="";return{draw:(s,o,a,i)=>{if(o<=0||a<=0||i<=0)return!1;const c=e(),l=c===null?"none":[Math.round(Math.abs(c.speed)*.9),c.rpm,c.gear,c.shifting?1:0,c.gears.length,Math.round(c.charge*100),Math.round(c.boost*100),o,a,window.innerWidth].join("|");if(l===t)return!1;if(t=l,s.clearRect(0,0,o,a),s.fillStyle="rgba(29, 32, 33, 0.93)",s.fillRect(0,0,o,a),c===null)return!0;s.save(),s.scale(i,i);const f=a/i,b=document.documentElement.classList.contains("hud-density--skinny"),m=window.innerWidth>1100,g=window.innerWidth>820,E=12,k=f/2;let N=0;if(s.textBaseline="middle",s.textAlign="left",m){const y=b?48:64,h=4;s.fillStyle="#ffffff1f",Vt(s,N,k-h/2,y,h,2);const C=Math.max(c.maxRpm-c.idleRpm,1),T=Math.min(Math.max((c.rpm-c.idleRpm)/C,0),1);T>0&&(s.fillStyle=c.rpm>=c.shiftUpRpm?"#fe8019":"#ebdbb2cc",Vt(s,N,k-h/2,y*T,h,2)),N+=y+E}const v=b?18:24,d=b?9:11;s.fillStyle=zc,s.font=`700 ${v}px ${xn}`;const p=`${Math.round(Math.abs(c.speed)*.9)}`;s.fillText(p,N,k);const u=s.measureText(p).width;if(s.font=`400 ${d}px ${xn}`,s.fillStyle="rgba(235, 219, 178, 0.55)",s.fillText("км/ч",N+u+3,k),N+=u+3+s.measureText("км/ч").width+8,g){const y=c.gears.length,h=b?16:20,C=4,T=c.gear<0?0:c.gear;for(let _=0;_<=y;_++){const w=N+_*(h+4),M=_===T;s.fillStyle=M?c.shifting?"#ffffff4d":"#ebdbb2e6":"#ffffff1a",Vt(s,w,k-h/2,h,h,C),s.fillStyle=M?c.shifting?"#ffffff8c":"#1d2021":"#ffffff73",s.font=`600 ${b?9:11}px ${xn}`,s.textAlign="center",s.fillText(_===0?"R":`${_}`,w+h/2,k),s.textAlign="left"}N+=(y+1)*(h+4)-4+E}if(m){const y=Math.min(Math.max(c.charge,0),1),h=Math.min(Math.max(c.boost,0),1),C=y>0?y:h;s.font=`400 9px ${xn}`,s.fillStyle="rgba(235, 219, 178, 0.8)",s.fillText(y>0?"ЗАРЯД":"БУСТ",N,k);const T=s.measureText("ЗАРЯД").width,_=b?40:56,w=3,M=N+T+5;s.fillStyle="#ffffff1f",Vt(s,M,k-w/2,_,w,2),C>0&&(s.fillStyle=h>0?"#fe8019":"#7b5cff",Vt(s,M,k-w/2,_*C,w,2))}return s.restore(),!0},reset(){t=""},destroy(){t=""}}}function Uc(e,t){const n=document.createElement("div");n.className="cluster",n.setAttribute("role","group"),n.setAttribute("aria-label","Приборы машины");const s=document.createElement("div");s.className="cluster__revs";const o=document.createElement("span");s.append(o);const a=document.createElement("div");a.className="cluster__dials";const i=document.createElement("span");i.className="cluster__speed",i.textContent="0";const c=document.createElement("span");c.className="cluster__unit",c.textContent="км/ч";const l=document.createElement("span");l.append(i,c);const f=document.createElement("div");f.className="cluster__gearbox",a.append(l,f);const b=document.createElement("div");b.className="cluster__boost";const m=document.createElement("span");m.textContent="Заряд";const g=document.createElement("div");g.className="cluster__boostbar";const E=document.createElement("span");g.append(E),b.append(m,g),n.append(s,a,b);const k=document.createElement("style");k.textContent=jc,document.head.append(k);let N=[],v=-1,d=0;const p=()=>{if(d++%4!==0)return;const y=e();if(!y)return;i.textContent=`${Math.round(Math.abs(y.speed)*.9)}`;const h=y.gears.length;if(h!==v){v=h,f.replaceChildren(),N=[];const I=h+1;for(let O=0;O<I;O++){const $=document.createElement("span");$.textContent=O===0?"R":`${O}`,f.append($),N.push($)}}const C=y.gear<0?0:y.gear;for(let I=0;I<N.length;I++)N[I]?.classList.toggle("engaged",I===C);f.classList.toggle("shifting",y.shifting);const T=Math.max(y.maxRpm-y.idleRpm,1),_=(y.rpm-y.idleRpm)/T;o.style.width=`${Math.min(Math.max(_,0),1)*100}%`,o.classList.toggle("redline",y.rpm>=y.shiftUpRpm);const w=Math.min(Math.max(y.charge,0),1),M=Math.min(Math.max(y.boost,0),1),P=w>0?w:M;E.style.width=`${P*100}%`,E.classList.toggle("firing",M>0),m.textContent=w>0?"Заряд":"Буст"};n.dataset.cleanup="1",(t??document.body).append(n);const u=window.setInterval(p,1e3/60/4);return{destroy(){window.clearInterval(u),n.remove(),k.remove()}}}const zs=10;function Hc(e,t){const n=e/t,s=Math.floor(n*6),o=n*6-s,a=.25,i=1-.75*o,c=.25+.75*o,l={0:[1,c,a],1:[i,1,a],2:[a,1,c],3:[a,i,1],4:[c,a,1],5:[1,a,i]},[f,b,m]=l[s%6]??[1,1,1];return new Qo(f,b,m,1)}function Ms(e,t,n){const s=new Za;return s.diffuse=new Qo(0,0,0),s.emissive=t,s.emissiveIntensity=2,s.blendType=ei,s.opacity=n,s.depthWrite=!1,s.update(),s}function Vc(e,t,n=zs){let s=null;const o=()=>{try{s??=new AudioContext;const _=s;_.state==="suspended"&&_.resume();const w=_.currentTime+.02,M=_.createOscillator();M.type="sawtooth",M.frequency.setValueAtTime(70,w),M.frequency.exponentialRampToValueAtTime(300,w+2.5);const P=_.createBiquadFilter();P.type="lowpass",P.Q.value=6,P.frequency.setValueAtTime(180,w),P.frequency.exponentialRampToValueAtTime(1800,w+2.5);const I=_.createGain();I.gain.setValueAtTime(1e-4,w),I.gain.exponentialRampToValueAtTime(.22,w+2.4),I.gain.setValueAtTime(.22,w+2.5),I.gain.linearRampToValueAtTime(0,w+2.7),M.connect(P).connect(I).connect(_.destination),M.start(w),M.stop(w+2.8);const O=2.4,$=_.createBufferSource(),z=_.createBuffer(1,Math.ceil(_.sampleRate*O),_.sampleRate),H=z.getChannelData(0);for(let Y=0;Y<H.length;Y++)H[Y]=Math.random()*2-1;$.buffer=z;const W=_.createBiquadFilter();W.type="bandpass",W.Q.value=2.5,W.frequency.setValueAtTime(250,w+2.5),W.frequency.exponentialRampToValueAtTime(5200,w+4.6);const V=_.createGain();V.gain.setValueAtTime(1e-4,w+2.5),V.gain.exponentialRampToValueAtTime(.3,w+2.62),V.gain.exponentialRampToValueAtTime(.001,w+4.8),$.connect(W).connect(V).connect(_.destination),$.start(w+2.5),$.stop(w+4.9)}catch{}},a=new pt("checkpoints");t.addChild(a);const i=(_,w)=>{const M=new Ro(_,120,w),P=new Ro(_,-20,w),I=e.systems.rigidbody?.raycastFirst(M,P);return I?I.point.y:0},c=(_,w)=>{const M=i(_,w);return Math.abs(i(_+4,w)-M)<1.2&&Math.abs(i(_,w+4)-M)<1.2},l=_=>{let w={x:0,z:0,y:0};for(let M=0;M<8;M++){const P=_/n*Math.PI*2+Math.random()*.6,I=60+Math.random()*200,O=Math.cos(P)*I,$=Math.sin(P)*I;if(w={x:O,z:$,y:i(O,$)},c(O,$))return w}return w},f=e.graphicsDevice,b=new vs({ringRadius:4,tubeRadius:.14,sectorAngle:360,segments:48,sides:10}),m=new vs({ringRadius:2.6,tubeRadius:.12,sectorAngle:360,segments:36,sides:10}),g=new vs({ringRadius:1.5,tubeRadius:.1,sectorAngle:360,segments:24,sides:8}),E=new Qa({radius:.35,height:60,heightSegments:1,capSegments:12}),k=bn.fromGeometry(f,b),N=bn.fromGeometry(f,m),v=bn.fromGeometry(f,g),d=bn.fromGeometry(f,E),p=[],u=new Map;for(let _=0;_<n;_++){const{x:w,z:M,y:P}=l(_),I=Hc(_,n),O=new pt(`checkpoint-${_}`);O.setPosition(w,P+.35,M);const $=(de,ke,Mt,Pt)=>{const Ce=new pt("ring");return Ce.addComponent("render",{meshInstances:[new Ao(de,ke)],castShadows:!1,receiveShadows:!1}),Ce.setEulerAngles(Mt,0,Pt),O.addChild(Ce),Ce},z=Ms(f,I,.9),H=Ms(f,I,.55),W=Ms(f,I,.28),V=$(k,z,0,0),Y=$(N,H,66,24),X=$(v,H,108,-30),se=new pt("beam");se.addComponent("render",{meshInstances:[new Ao(d,W)],castShadows:!1,receiveShadows:!1}),se.setLocalPosition(0,30,0),O.addChild(se),a.addChild(O);const Ze={info:{id:_,x:w,z:M,color:Math.round(I.r*255)<<16|Math.round(I.g*255)<<8|Math.round(I.b*255)},node:O,rings:[V,Y,X],beam:se,mats:[z,H],beamMat:W,state:"alive",t:0};p.push(Ze),u.set(O,Ze)}const y=_=>{for(const w of p){if(w.state==="alive"){w.rings[0]?.rotate(0,_*50,0),w.rings[1]?.rotate(_*30,_*-70,0),w.rings[2]?.rotate(_*-45,0,_*60);continue}w.t+=_;const M=w.t;if(M<2.5){const P=M/2.5,I=1-(1-P)*(1-P),O=1+1.3*I;w.node.setLocalScale(O,O,O);const $=_*10*I;w.rings[0]?.rotate(0,$*50,0),w.rings[1]?.rotate($*30,$*-70,0),w.rings[2]?.rotate($*-45,0,$*60)}else if(M<5){const P=(M-2.5)/2.5,I=1-P*P,O=Math.max(2.3*I*I,.001);w.node.setLocalScale(O,O,O);const $=_*(10+P*40);w.rings[0]?.rotate(0,$*50,0),w.rings[1]?.rotate($*30,$*-70,0),w.rings[2]?.rotate($*-45,0,$*60),w.beam.setLocalScale(1,1+P*2.2,1),w.beam.setLocalPosition(0,30+P*45,0),w.beamMat.opacity=.28*(1-P),w.beamMat.update();for(let z=0;z<w.mats.length;z++){const H=z===0?.9:.55;w.mats[z].opacity=Math.max(H*(1-P),0),w.mats[z].update()}}}for(let w=p.length-1;w>=0;w--){const M=p[w];M.state==="dying"&&M.t>=5&&(M.node.destroy(),e.fire("checkpoint:visited",M.info),p.splice(w,1))}};e.on("update",y);const h=()=>t.findByName("vehicle");let C=0;const T=_=>{if(C+=_,C<.25)return;C=0;const M=h()?.getPosition();if(M)for(let P=p.length-1;P>=0;P--){const I=p[P],O=M.x-I.info.x,$=M.z-I.info.z;I.state==="alive"&&O*O+$*$<9*9&&(I.state="dying",I.t=0,o())}};return e.on("update",T),{list:()=>p.map(_=>_.info),destroy(){e.off("update",y),e.off("update",T),s?.close().catch(()=>{}),a.destroy()}}}function Ia(){return null}const _n=55,Wc=`
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
`,Yc={0:"С",45:"СВ",90:"В",135:"ЮВ",180:"Ю",225:"ЮЗ",270:"З",315:"СЗ"};function Jc(){const e=document.documentElement.classList;return e.contains("hud-density--minimal")?0:e.contains("hud-density--skinny")?26:38}function Kc(){return document.documentElement.classList.contains("hud-density--minimal")}function Fa(e,t,n,s=Ia){let o=null;const a=()=>{try{o??=new AudioContext,o.state==="suspended"&&o.resume();const d=o,p=d.currentTime+.01;for(const[u,y]of[880,1318.51].entries()){const h=d.createOscillator(),C=d.createGain();h.type="sine",h.frequency.value=y;const T=p+u*.09;C.gain.setValueAtTime(0,T),C.gain.linearRampToValueAtTime(.16,T+.02),C.gain.exponentialRampToValueAtTime(.001,T+.38),h.connect(C).connect(d.destination),h.start(T),h.stop(T+.42)}}catch{}},i=document.createElement("div");i.className="compass-toast",document.body.append(i);let c=null;const l=d=>{i.textContent=d,i.classList.add("compass-toast--on"),a(),c!==null&&window.clearTimeout(c),c=window.setTimeout(()=>{i.classList.remove("compass-toast--on"),c=null},2400)};let f=-1,b="",m="",g=-1,E=0;const k=d=>(d*180/Math.PI+360)%360,N=(d,p)=>{let u=(d-p)%360;return u>=180&&(u-=360),u<-180&&(u+=360),u};return{draw:(d,p,u)=>{if(u===0||p===0)return!1;const y=e();if(y===null)return b!==""?(d.clearRect(0,0,p,u),b="",!0):!1;const h=k(y),C=t(),T=n();T.length!==f&&(f>=0&&T.length<f&&l(T.length>0?`Чекпоинт собран · осталось: ${T.length}`:"Все чекпоинты собраны!"),f=T.length);const _=s();let w="";if(_!==null&&_.state!=="idle"){const z=_.state==="running"?Math.max(0,performance.now()-_.startMs):_.lastMs;w=`${tn(Math.floor(z/100)*100)} · ${_.collected}/${_.total}`}const M=`${p}x${u}|${h.toFixed(2)}|${C?`${C.x.toFixed(1)},${C.z.toFixed(1)}`:""}|${T.length}|${w}`;if(M===b)return!1;b=M,d.save(),d.beginPath(),d.rect(0,0,p,u),d.clip(),d.clearRect(0,0,p,u);const P=d.createLinearGradient(0,0,0,u);P.addColorStop(0,"rgba(235, 219, 178, 0.15)"),P.addColorStop(.6,"rgba(40, 40, 40, 0.94)"),d.fillStyle=P,d.fillRect(0,0,p,u),d.strokeStyle="rgba(235, 219, 178, 0.18)",d.lineWidth=1,d.strokeRect(.5,.5,p-1,u-1);const I=p/(_n*2),O=p/2,$=Math.round((h-_n)/15)*15;d.textAlign="center",d.textBaseline="middle";for(let z=$;z<=h+_n;z+=15){const H=O+N(z,h)*I,W=Yc[(z%360+360)%360];W!==void 0?(d.fillStyle="#ebdbb2e6",d.font=`600 ${Math.round(u*.34)}px system-ui, sans-serif`,d.fillText(W,H,u*.42)):z%45===0?(d.fillStyle="#ebdbb280",d.fillRect(H-1,u*.3,2,u*.22)):(d.fillStyle="#ebdbb240",d.fillRect(H-1,u*.36,2,u*.12))}if(d.fillStyle="#fe8019",d.fillRect(O-1.5,u*.14,3,u*.2),C){const z=[...T].map(V=>{const Y=V.x-C.x,X=V.z-C.z;return{cp:V,dist:Math.round(Math.hypot(Y,X)),off:N(k(Math.atan2(Y,-X)),h)}}).sort((V,Y)=>V.off-Y.off);let H=-1e9,W=0;for(const{cp:V,dist:Y,off:X}of z){const se=`#${V.color.toString(16).padStart(6,"0")}`;let ae=O+X*I;if(Math.abs(X)>_n-4){ae=O+Math.sign(X)*(p/2-14*(p/560)),d.save(),d.translate(ae,u*.42),d.rotate(Math.sign(X)*Math.PI/2),d.fillStyle=se,d.beginPath(),d.moveTo(0,-6*(p/560)),d.lineTo(5*(p/560),3*(p/560)),d.lineTo(-5*(p/560),3*(p/560)),d.closePath(),d.fill(),d.restore();continue}Math.abs(ae-H)<34*(p/560)?W=(W+1)%2:W=0,H=ae;const de=5*(p/560);d.fillStyle=se,d.beginPath(),d.moveTo(ae,u*.2-de),d.lineTo(ae+de,u*.2),d.lineTo(ae,u*.2+de),d.lineTo(ae-de,u*.2),d.closePath(),d.fill(),d.fillStyle="#ebdbb2d9",d.font=`500 ${Math.round(u*.26)}px system-ui, sans-serif`,d.fillText(`${Y}м`,ae,u*(.62+W*.24))}}if(_!==null&&w!==""){const z=p/560,H=Math.max(9,Math.round(u*.3));d.font=`600 ${H}px system-ui, sans-serif`,d.textAlign="right",d.textBaseline="middle",(w!==m||H!==g)&&(m=w,g=H,E=d.measureText(w).width);const W=7*z,V=H+6*z,Y=E+W*2,X=p-6*z-Y,se=u-5*z-V;d.beginPath(),typeof d.roundRect=="function"?d.roundRect(X,se,Y,V,4*z):d.rect(X,se,Y,V),d.fillStyle="rgba(29, 32, 33, 0.88)",d.fill(),d.strokeStyle=_.state==="finished"?"#b8bb2680":"#ebdbb233",d.lineWidth=1,d.stroke(),d.fillStyle=_.state==="finished"?"#b8bb26":"#ebdbb2",d.fillText(w,p-6*z-W,se+V/2)}return d.restore(),!0},reset(){b=""},destroy(){c!==null&&window.clearTimeout(c),o?.close().catch(()=>{}),i.remove()}}}function Xc(e,t,n,s=Ia){const o=document.createElement("div");o.className="compass";const a=document.createElement("canvas");o.append(a);const i=document.createElement("style");i.textContent=Wc,o.append(i),document.body.append(o);const c=Fa(e,t,n,s),l=()=>{const E=Math.min(window.devicePixelRatio||1,2);a.width=Math.round(a.clientWidth*E),a.height=Math.round(a.clientHeight*E)};l(),window.addEventListener("resize",l);let f=-1,b=-1,m=0;const g=()=>{const E=a.getContext("2d");E&&(a.width!==f||a.height!==b)&&(f=a.width,b=a.height,E.clearRect(0,0,a.width,a.height)),E&&c.draw(E,a.width,a.height),m=requestAnimationFrame(g)};return m=requestAnimationFrame(g),{destroy(){cancelAnimationFrame(m),window.removeEventListener("resize",l),c.destroy(),o.remove(),i.remove()}}}function qc(e,t){const n=e.graphicsDevice,s=l=>{const f=new ai(n,{name:`hud-${l.width}x${l.height}`,format:ii,width:l.width,height:l.height,mipmaps:!1,minFilter:Mo,magFilter:Mo,addressU:To,addressV:To,anisotropy:1,premultiplyAlpha:!0,srgb:!0});return f.setSource(l),f};let o=null;const a=[];try{o=new pt("hud-screen"),o.addComponent("screen",{screenSpace:!0,scaleMode:ti}),e.root.addChild(o);for(const l of t){const f=document.createElement("canvas"),b=f.getContext("2d",{alpha:!0});if(!b)throw new Error("нет 2d-контекста");const m=new pt(`hud-${l.name}`);m.addComponent("element",{type:oi,anchor:new si(0,0,0,0),pivot:new ni(0,0),opacity:1,useInput:!1}),o.addChild(m),m.enabled=!1,a.push({layer:l,entity:m,element:m.element,canvas:f,ctx:b,texture:null,sizeKey:"",dirty:!0})}}catch(l){console.warn("[hud] слой HUD не поднялся — HUD остаётся DOM-ом",l);for(const f of a)f.texture?.destroy();return o?.destroy(),{active:!1,destroy(){}}}const i=(l,f)=>{const b=l.layer.rect();if(!b||b.w<=0||b.h<=0)return l.entity.enabled=!1,!1;const m=Math.max(1,Math.round(b.w*f)),g=Math.max(1,Math.round(b.h*f)),E=`${m}x${g}`;if(E!==l.sizeKey){l.sizeKey=E,l.canvas.width=m,l.canvas.height=g;const k=s(l.canvas);l.element.texture=k,l.texture?.destroy(),l.texture=k,l.layer.reset(),l.dirty=!0}return l.element.width=b.w*f,l.element.height=b.h*f,l.entity.setLocalPosition(Math.round(b.x*f),n.height-Math.round((b.y+b.h)*f),0),l.entity.enabled=!0,!0},c=()=>{const l=n.width>0?n.width/Math.max(window.innerWidth,1):1;if(!(l<=0||!Number.isFinite(l)))for(const f of a){if(!f.ctx||!i(f,l))continue;const b=f.texture;if(!b)continue;(f.layer.draw(f.ctx,f.canvas.width,f.canvas.height,l)||f.dirty)&&(f.dirty=!1,b.setSource(f.canvas),b.upload())}};return e.on("prerender",c),{active:!0,destroy(){e.off("prerender",c);for(const l of a)l.texture?.destroy(),l.layer.destroy();o.destroy()}}}function Qc(e,t,n,s,o,a){e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o)}function Zc(e){let t=!1;const n=Fa(e.getHeading,e.getVehicle,e.getCheckpoints,e.readRace),s=Gc(e.read),o=()=>{if(Kc())return null;const b=Math.min(window.innerWidth*.62,560),m=Jc();if(b<40||m<=0)return null;const g=e.safeTop()+(m===26?126:92);return{x:(window.innerWidth-b)/2,y:g,w:b,h:m}},a=()=>{const b=e.clusterHost,m=b.parentElement;if(!m||b.offsetParent===null&&m.clientHeight===0)return null;const g=m.getBoundingClientRect();return g.height<4?null:{x:g.left,y:g.top,w:g.width,h:g.height}};return{layers:[(()=>{let b="";return{name:"bar",rect:a,draw(m,g,E,k){const N=`${g}x${E}@${k}`;return N===b?!1:(b=N,m.clearRect(0,0,g,E),m.save(),Qc(m,0,0,g,E,Math.max(4,6*k)),m.fillStyle="rgba(29, 32, 33, 0.93)",m.fill(),m.strokeStyle="rgba(235, 219, 178, 0.2)",m.lineWidth=Math.max(1,k),m.stroke(),m.restore(),!0)},reset(){b=""},destroy(){b=""}}})(),{name:"compass",rect:o,draw(b,m,g){return n.draw(b,m,g)},reset(){n.reset()},destroy(){n.destroy()}},{name:"cluster",rect:()=>{const b=e.clusterHost,m=a();if(!m)return null;const g=b.getBoundingClientRect();return{x:g.left>0?g.left:m.x+16,y:m.y,w:Math.min(480,Math.max(m.w,240)),h:m.h}},draw(b,m,g,E){return s.draw(b,m,g,E)},reset(){s.reset()},destroy(){s.destroy()}}],destroy(){t||(t=!0,n.destroy(),s.destroy())}}}let Jo=!1,Ko=null;function $a(){return Ko??=ee(()=>import("./index.Dp09MIqC.js"),[]).then(e=>e.default),Ko}function Ba(){try{return new URLSearchParams(location.search).has("vk_app_id")}catch{return!1}}const el=1e4;async function tl(){if(Jo||!Ba())return!1;Jo=!0;try{const e=await $a(),t=await Promise.race([e.send("VKWebAppInit"),new Promise((n,s)=>{setTimeout(()=>s(new Error("платформа не ответила на VKWebAppInit")),el)})]);if(t?.result)return console.info("[vk] VKWebAppInit: платформа подтвердила запуск приложения"),!0;console.warn("[vk] VKWebAppInit: платформа ответила без подтверждения",t)}catch(e){console.warn("[vk] не удалось инициализировать приложение ВКонтакте",e)}return!1}const Ps={uid:"local",name:"Гость",photo:""},nl=8e3;function sl(){return String("6739294").trim()}function ol(e,t,n){return Promise.race([e,new Promise((s,o)=>{setTimeout(()=>o(new Error(n)),t)})])}async function al(){let e;try{e=new URLSearchParams(location.search)}catch{return Ps}const t=e.get("vk_user_id");if(!t)return Ps;const n=e.get("vk_app_id")??"",s=sl();if(s!==""&&n!==s)return console.warn("[vk] запуск с чужим app_id:",n,"— свой:",s),Ps;const o=`vk:${t}`;if(!Ba())return{uid:o,name:"Игрок ВКонтакте",photo:""};try{const a=await $a(),i=await ol(a.send("VKWebAppGetUserInfo"),nl,"платформа не ответила на VKWebAppGetUserInfo"),c=`${i.first_name} ${i.last_name}`.trim();return{uid:o,name:c===""?"Игрок ВКонтакте":c,photo:i.photo_200}}catch(a){return console.warn("[vk] имя игрока не получено",a),{uid:o,name:"Игрок ВКонтакте",photo:""}}}let Xo=null;function il(){return Xo??=al(),Xo}function rl(e,t){let n=!1,s=null;const o=wc(e,{total:t,onFinished:i=>{cl(i,()=>n).then(c=>{if(n){c();return}s?.(),s=c})}}),a=window;return a.__blendarsRace=o.view,{view:o.view,destroy(){n=!0,o.destroy(),s?.(),s=null,a.__blendarsRace===o.view&&delete a.__blendarsRace}}}async function cl(e,t){const n=await il(),s=vc({uid:n.uid,name:n.name,photo:n.photo,timeMs:e.timeMs});if(console.info("[race] финиш:",tn(e.timeMs),"· чекпоинтов",e.collected,"из",e.total,"· место",s.rank,"из",s.total,"· игрок",n.uid),t())return()=>{};const{showFinishCard:o}=await ee(async()=>{const{showFinishCard:a}=await import("./finish-card.B2Vlb96k.js");return{showFinishCard:a}},__vite__mapDeps([3,2]));return t()?()=>{}:o({timeMs:e.timeMs,collected:e.collected,total:e.total,outcome:s,identity:n})}function ll(e){let t=0,n=0;const s=e.autoRender,o=()=>{const c=_a();t=c>0?1e3/c:0,n=t,e.autoRender=t===0?s:!1},a=c=>{t!==0&&(n+=c*1e3,n>=t&&(n=0,e.renderNextFrame=!0))};o(),e.on("update",a);const i=ya(o);return{destroy(){e.off("update",a),i(),e.autoRender=s}}}let Da=1,at=null;function dl(){return xa()*Da}function nd(e){Da=e,Gs()}function Gs(){at?.graphicsDevice&&(at.graphicsDevice.maxPixelRatio=dl(),at.resizeCanvas(),at.updateCanvasSize())}function ul(e){at=e,Gs();const t=ya(()=>{Gs()});return()=>{t(),at===e&&(at=null)}}const ml=250,pl="menuRenderFps",fl=`
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
`;function bl(e=null){const t=document.createElement("div");t.className="mini-stats",t.setAttribute("role","status"),t.setAttribute("aria-label","Статистика кадра");const n=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");t.append(n,s,o,a);const i=document.createElement("style");i.id="mini-stats-style",i.textContent=fl,document.head.append(i);const c=d=>{t.classList.toggle("mini-stats--inline",d!==null);const p=d??document.body;t.parentElement!==p&&p.append(t)};c(e);let l=null,f=Rn(),b=!1;const m=()=>xe("fps")||xe("cpu")||xe("draw")||xe("vram"),g=()=>{t.classList.toggle("visible",f&&l!==null&&m())},E=(d,p,u)=>{const y=p.fps,h=y>0&&y<30;if(h!==b&&(b=h,n.classList.toggle("warn",h)),u.fps){const C=p.user.get(pl),T=typeof C=="number"&&C>0?` · рендер ${C}`:"";n.textContent=`${y>0?Math.round(y):"—"} FPS${T} · ${p.frameTime.toFixed(1)} ms`}u.cpu&&(s.textContent=`CPU ${p.cpuUpdateTime.toFixed(1)} / ${p.cpuRenderTime.toFixed(1)} / ${p.cpuPhysicsTime.toFixed(1)} мс`),u.draw&&(o.textContent=`Draw ${Is(p.drawCallCount)} · Прим. ${Is(p.frame.primitives)} · Шейд. ${Is(p.frame.shaders)}`),u.vram&&(a.textContent=`VRAM ${Math.round(p.vramTotalBytes/1048576)} МБ · ${d.graphicsDevice.width}×${d.graphicsDevice.height} ${d.graphicsDevice.isWebGPU?"WebGPU":"WebGL2"}`)},k=()=>{const d=l;if(!d||!f)return;const p={fps:xe("fps"),cpu:xe("cpu"),draw:xe("draw"),vram:xe("vram")};n.hidden=!p.fps,s.hidden=!p.cpu,o.hidden=!p.draw,a.hidden=!p.vram,E(d,d.stats,p)};g();const N=window.setInterval(k,ml),v=fa(()=>{f=Rn(),g(),k()});return{setHost(d){c(d),k()},setApp(d){l=d,g(),d&&k()},destroy(){window.clearInterval(N),v(),t.remove(),i.remove()}}}function Is(e){return Number.isFinite(e)?e>=1e6?`${Math.round(e/1e5)}М`:e>=1e4?`${Math.round(e/1e3)}к`:`${Math.round(e)}`:"—"}const hl="hud-density--skinny",gl="hud-density--minimal";function xl(){const e=document.documentElement,t=()=>{const n=Ar();e.classList.toggle(hl,n!=="full"),e.classList.toggle(gl,n==="minimal")};return t(),fa(t)}function sd(){return 1}const qo="blendars-scrollbar",_l=[".dlg__body",".settings__scroll",".settings__tabs",".actions",".mp__list"],He=e=>_l.map(t=>`${t}${e}`).join(`,
`),yl=`
/* Firefox: тонкая полоса, ползунок gray на дорожке bg1. */
@supports not selector(::-webkit-scrollbar) {
    ${He("")} {
        scrollbar-width: thin;
        scrollbar-color: #928374 #28282899;
    }
}

@media (hover: hover) and (pointer: fine) {
    /* Chromium и WebKit. 12px — под штрих 8px плюс прозрачная рамка ползунка. */
    ${He("::-webkit-scrollbar")} {
        width: max(0.75rem, 12px);
        height: max(0.75rem, 12px);
    }
    /* Дорожка — тот же тёмный серый, что подложка панелей: полоса читается как
       часть окна, а не как плашка поверх текста. */
    ${He("::-webkit-scrollbar-track")} {
        background: #28282899;
        border-radius: 999px;
    }
    /* Стрелочные кнопки в старых WebKit — лишний хром. */
    ${He("::-webkit-scrollbar-button")} {
        display: none;
        width: 0;
        height: 0;
    }
    /* Прозрачная рамка в 2px + background-clip: padding-box оставляют круглый
       штрих 8px, а не прямоугольник во всю ширину полосы. */
    ${He("::-webkit-scrollbar-thumb")} {
        background: #928374;
        border: 1px solid transparent;
        background-clip: padding-box;
        border-radius: 999px;
    }
    ${He("::-webkit-scrollbar-thumb:hover")} { background-color: #ebdbb2; }
    ${He("::-webkit-scrollbar-thumb:active")} { background-color: #fe8019; }
    /* Уголок на пересечении двух полос серым квадратом вылезал бы в углу
       колонки вкладок, где полоса одна. */
    ${He("::-webkit-scrollbar-corner")} { background: transparent; }
}
`;function vl(){if(document.getElementById(qo))return;const e=document.createElement("style");e.id=qo,e.textContent=yl,document.head.append(e)}const wl="vehicle",od="vehicleInput",ad="vehicleWheel",El="driveCamera",uo=document.getElementById("app");if(!uo)throw new Error("#app not found");vl();let ne=null,Us=null,ot=null,Hs=null;const nn={boot:.1,device:.35,decoders:.7,background:.95},Ve=new mi(document.body);let sn=null,Vs=null,Jt=null,on=null,Mn=null,ye=!1,Fe=null,Pn=null;const Ws="blendars.backend";function In(e){try{e?localStorage.setItem(Ws,e):localStorage.removeItem(Ws)}catch{}}function Sl(){try{const e=localStorage.getItem(Ws);return e==="webgpu"||e==="webgl2"?e:null}catch{return null}}function kl(){const e=new URLSearchParams(location.search).get("backend");return e==="webgpu"||e==="webgl2"?e:null}let At=kl()??Sl();const K=new $c(uo,{onScene:e=>{ja(K,e)},onBack:()=>{Bl(K)},onRecord:()=>{Ol()}});window.__blendarsEnterSmoke=()=>{$l(K)};const Me=Oc(K.settings.backendSlot,{onSwitch:()=>{Fl()}});{const e=document.createElement("style");e.textContent=Bc,document.head.append(e)}navigator.gpu||Me.setUnavailable("WebGPU не поддерживается этим браузером");function mo(e,t){const n=t==="scene";e.setMode(t),e.setSceneChrome(n),Fn.setHost(e.statsHostFor(n))}const Fn=bl(K.statsHost);xl();Ve.setStage("интерфейс",nn.boot);window.__blendarsMenuReady=!0;tl();Nl();function Cl(e){Pn?.();const t=ul(e),n=ll(e);Pn=()=>{t(),n.destroy()}}async function Nl(){try{Ve.setStage("пресет настроек",nn.boot);const{askBootPreset:e}=await ee(async()=>{const{askBootPreset:s}=await import("./boot-preset.jDQEzdSF.js");return{askBootPreset:s}},__vite__mapDeps([4,2]));if(await e(),At==="webgpu"){const{confirmWebgpuSwitch:s}=await ee(async()=>{const{confirmWebgpuSwitch:a}=await import("./confirm-dialog.BoAueR29.js");return{confirmWebgpuSwitch:a}},[]);await s()||(At=null,In(null),K.setStatus("Запуск на WebGL2 — WebGPU не подтверждён"))}const t=await Rt((s,o)=>{Ve.setStage(s,o??void 0),Ve.updateFromResources(),Ll()});window.__blendarsEngine={backend:t.backend},window.__blendarsApp=t.app,on=t.backend,Me.setBackend(t.backend),Fn.setApp(t.app),Cl(t.app),t.backend==="webgpu"&&Oa(t),Ve.setStage("сцена меню",nn.background);const{buildMenuBackground:n}=await ee(async()=>{const{buildMenuBackground:s}=await import("./menu-background.DQbJr5Hy.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));Fe=await n(t.app),window.__blendarsBackgroundReady=!0,Al(),Ve.setStage("готово",1),K.setStatus(""),await Ve.hide(),window.__blendarsInteractive=!0,console.info("[blendars] boot complete",t.backend)}catch(e){console.error("[blendars] boot failed",e),Ve.setError("Не удалось запустить рендер. Проверьте поддержку WebGPU/WebGL2 в браузере."),window.__blendarsInteractive=!0}}async function Ll(){const e=new URLSearchParams(location.search).get("bootDelay");if(!e)return;const t=Number(e);!Number.isFinite(t)||t<=0||await new Promise(n=>setTimeout(n,Math.min(t,3e4)))}async function Al(){try{const{probeServiceWorker:e}=await ee(async()=>{const{probeServiceWorker:n}=await import("./capabilities.Vl_UvQZj.js");return{probeServiceWorker:n}},[]),t=await e("/blend-ars/sw.js");console.info(t==="registered"?"[blendars] Service Worker зарегистрирован: оффлайн-оболочка доступна":`[blendars] Service Worker: ${t} — оффлайн-старт недоступен`)}catch(e){console.warn("[blendars] регистрация Service Worker не удалась",e)}}function Rt(e){return sn??=Rl(e),sn}async function Rl(e){const{initEngine:t}=await ee(async()=>{const{initEngine:a}=await import("./engine-bootstrap.D0SAjkWd.js");return{initEngine:a}},__vite__mapDeps([8,2])),n=document.createElement("canvas");n.className="game-canvas",n.style.zIndex="0",document.body.insertBefore(n,uo),Vs=n;const s=At??"webgl2";return t(n,{physics:!0,deviceTypes:s==="webgl2"?["webgl2","webgpu"]:["webgpu","webgl2"],skipAdapterProbe:s==="webgpu"&&At!==null,onStage:(a,i)=>{i===1?e?.(a,nn.decoders):e?.(a,nn.device)}})}const Tl=5,Ml=1e3,Pl=3;function Oa(e){let t=0;Jt?.();let n=null;const s=c=>{In(null),po("webgl2",{persist:!1,restoreScene:!1,reason:c})};let o=e.app.frame,a=0;const i=window.setInterval(()=>{if(document.hidden){o=e.app.frame;return}const c=e.app.frame;c===o?(a++,a>=Pl&&(window.clearInterval(i),s("кадры не идут — вероятно, WebGPU завис на первом кадре"))):(a=0,o=c)},Ml);Jt=()=>{window.clearInterval(i),n?.(),n=null},ee(async()=>{const{watchWebGpuErrors:c}=await import("./engine-bootstrap.D0SAjkWd.js");return{watchWebGpuErrors:c}},__vite__mapDeps([8,2])).then(({watchWebGpuErrors:c})=>{if(ye){Jt?.();return}n=c(e.device,l=>{t++,console.warn(`[blendars] webgpu error #${t}: ${l.slice(0,200)}`),(Il(l)||t>=Tl)&&(window.clearInterval(i),s(l))})})}function Il(e){return/out of memory|not enough memory/i.test(e)}async function po(e,t){if(ye)return;ye=!0,Me.setBusy(!0),t.reason&&console.warn("[blendars] смена рендера:",t.reason.slice(0,200));const{probeWebGpuAdapter:n}=await ee(async()=>{const{probeWebGpuAdapter:a}=await import("./engine-bootstrap.D0SAjkWd.js");return{probeWebGpuAdapter:a}},__vite__mapDeps([8,2])),s=setTimeout(()=>{K.setStatus("Рендер переключается дольше обычного… если не идёт — F9")},25e3);if(e==="webgpu"){const a=await n();if(!a){Me.setUnavailable("WebGPU не поддерживается этим браузером"),K.setStatus("WebGPU не поддерживается этим браузером"),clearTimeout(s),Me.setBusy(!1),ye=!1;return}a.stalled?console.warn("[blendars] зонд WebGPU не ответил — пробуем по явному запросу"):a.software&&K.setStatus(`WebGPU: софтверный адаптер (${a.label||"без описания"}) — рендер может упасть`);const{confirmWebgpuSwitch:i}=await ee(async()=>{const{confirmWebgpuSwitch:l}=await import("./confirm-dialog.BoAueR29.js");return{confirmWebgpuSwitch:l}},[]);if(!await i()){K.setStatus("Остались на WebGL2 — WebGPU не подтверждён"),clearTimeout(s),Me.setBusy(!1),ye=!1;return}}const o=Ua();o.setStage("смена рендера…");try{Jt?.(),Jt=null,o.setStage("смена рендера: остановка движка…"),ne?.destroy(),ne=null,window.__blendarsSceneReady=!1,za(),Ga(),lo(null),Fe?.destroy(),Fe=null;const a=await sn;sn=null,on=null,Fn.setApp(null),Pn?.(),Pn=null,a?.detachResize(),a?.app.destroy(),Vs?.remove(),Vs=null,At=e,t.persist&&In(e),o.setStage(`смена рендера: движок ${e.toUpperCase()}…`);const i=await Rt();on=i.backend,window.__blendarsEngine={backend:i.backend},window.__blendarsApp=i.app,Me.setBackend(i.backend),Fn.setApp(i.app),i.backend==="webgpu"&&Oa(i),i.backend!==e&&K.setStatus(`${e.toUpperCase()} недоступен — рендер: ${i.backend.toUpperCase()}`);const c=t.restoreScene===!1?null:Mn;if(c)o.done(),await ja(K,c);else{Mn=null,o.setStage("смена рендера: сцена меню…");const{buildMenuBackground:l}=await ee(async()=>{const{buildMenuBackground:f}=await import("./menu-background.DQbJr5Hy.js");return{buildMenuBackground:f}},__vite__mapDeps([5,2,6,7]));Fe=await l(i.app),mo(K,"menu"),K.setBusy(!1),i.backend===e&&K.setStatus(""),o.done()}}catch(a){if(console.error("[blendars] смена рендера не удалась",a),t.allowRetry!==!1&&e!=="webgl2"){o.done(),At="webgl2",In(null),ye=!1,Me.setBusy(!1),await po("webgl2",{persist:!1,allowRetry:!1});return}o.fail("не удалось сменить рендер"),K.setStatus("Не удалось сменить рендер — перезагрузите страницу (F9)")}finally{clearTimeout(s),Me.setBusy(!1),ye=!1}}async function Fl(){ye||on&&await po(on==="webgpu"?"webgl2":"webgpu",{persist:!0})}async function $l(e){if(!ye){e.setBusy(!0);try{if(await Rt(),new URLSearchParams(location.search).get("scene")==="smoke"){const{buildSmokeScene:t}=await ee(async()=>{const{buildSmokeScene:n}=await import("./smoke-scene.C4r09Tql.js");return{buildSmokeScene:n}},__vite__mapDeps([9,2]));Fe?.destroy(),Fe=null,t((await Rt()).app)}e.setStatus("Ангар появится на этапе 4"),e.setBusy(!1)}catch(t){console.error("[blendars] enter game failed",t),e.setStatus("Не удалось открыть сцену"),e.setBusy(!1)}}}async function ja(e,t){if(ye)return;e.setBusy(!0),e.setStatus(t==="maserati"?"Загрузка сцены: мазерати…":"Загрузка сцены…");const n=Ua();try{Fe?.destroy(),Fe=null;const s=await Rt(),{buildVehicleScene:o}=await ee(async()=>{const{buildVehicleScene:a}=await import("./vehicle-scene.M29HcJAR.js");return{buildVehicleScene:a}},__vite__mapDeps([10,2,8,6]));ne=await o(s.app,a=>n.setStage(a),{body:t,onAssetProgress:(a,i)=>n.setStage(a,i)}),mo(e,"scene"),e.setBusy(!1),e.setStatus("WASD / стрелки — ехать, пробел — ручник, R — сброс на месте, Q — плечо камеры"),Mn=t,window.__blendarsSceneReady=!0,jl(s.app),zl(s.app),lo(()=>Dl()),n.done()}catch(s){console.error("[blendars] vehicle scene failed",s),e.setStatus("Не удалось загрузить сцену"),n.fail(String(s?.message??s)),e.setBusy(!1)}}async function Bl(e){ne?.destroy(),ne=null,Mn=null,window.__blendarsSceneReady=!1,lo(null);const t=await Rt(),{buildMenuBackground:n}=await ee(async()=>{const{buildMenuBackground:s}=await import("./menu-background.DQbJr5Hy.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));Fe=await n(t.app),mo(e,"menu"),e.setBusy(!1),e.setStatus(""),za(),Ga()}function Dl(){const e=ne?.root.findByName("camera"),t=e?.script?.get(El);if(!e||!t)return null;const n=(o,a)=>typeof o=="number"&&Number.isFinite(o)?o:a,s=(o,a,i)=>o<a?a:o>i?i:o;return{read:()=>({yaw:n(t._manualYaw,0),lift:n(t._manualLift,0),zoom:n(t._zoom,1),shoulder:n(t.shoulder,1),distance:n(t.distance,6.4),height:n(t.height,2.5),fov:e.camera?n(e.camera.fov,60):60}),write:o=>{o.yaw!==void 0&&(t._manualYaw=s(o.yaw,-180,180)),o.lift!==void 0&&(t._manualLift=s(o.lift,-.6,3.4)),o.zoom!==void 0&&(t._zoom=s(o.zoom,.55,1.7)),o.shoulder!==void 0&&(t.shoulder=o.shoulder),o.distance!==void 0&&(t.distance=s(o.distance,3,15)),o.height!==void 0&&(t.height=s(o.height,1,6)),o.fov!==void 0&&e.camera&&(e.camera.fov=s(o.fov,40,90))},reset:()=>{t.resetLook()}}}async function Ol(){const e=(t,n)=>{K.setRecordState(t,n)};try{if(!ot){const{GameRecorder:t}=await ee(async()=>{const{GameRecorder:o}=await import("./video-recorder.T8uFKfef.js");return{GameRecorder:o}},__vite__mapDeps([11,2,1])),n=sn;if(n===null){e("error","движок не поднят, запись невозможна");return}const s=(await n.catch(()=>null))?.app??null;if(s===null){e("error","сначала войди в сцену");return}ot=new t(s,{onState:(o,a)=>e(o,a),onProgress:o=>K.setRecordProgress(o)},{frameRate:va(),width:Nr(s.graphicsDevice.canvas.width||window.innerWidth),quality:wa(),keyFrameInterval:Ea(),sound:js(),attachAudio:o=>ne?.audio?.attachRecordStream(o)??(()=>{})})}if(ot.recording){const t=await ot.stop();t>0&&e("idle",`файл ${(t/1048576).toFixed(1)} МБ сохранён`)}else await ot.start()}catch(t){e("error",t instanceof Error?t.message:"запись недоступна")}}function jl(e){const t=()=>ne?.root.findByName("vehicle")?.script?.get(wl)??null,n=ne?Vc(e,ne.root,zs):null,s=ne?rl(e,zs):null,o=()=>n?.list()??[],a=()=>s?.view??null,i=()=>{const v=ne?.root.findByName("camera")?.forward;return v?Math.atan2(v.x,-v.z):null},c=()=>{const N=ne?.root.findByName("vehicle")?.getPosition();return N?{x:N.x,z:N.z}:null},l=document.createElement("div");l.style.cssText="position:fixed;left:0;top:0;width:0;height:0;padding-top:env(safe-area-inset-top);visibility:hidden;pointer-events:none",document.body.append(l);let f=0;const b=()=>{const N=Number.parseFloat(getComputedStyle(l).paddingTop);f=Number.isFinite(N)?N:0};b(),window.addEventListener("resize",b),window.addEventListener("orientationchange",b);let m=null,g=null,E=null;const k=Zc({getHeading:i,getVehicle:c,getCheckpoints:o,readRace:a,read:t,clusterHost:K.clusterHost,safeTop:()=>f});m=qc(e,k.layers),m.active?document.documentElement.classList.add("hud-in-canvas"):(m=null,k.destroy(),g=Uc(t,K.clusterHost),E=Xc(i,c,o,a)),Us=()=>{ot?.destroy(),ot=null,document.documentElement.classList.remove("hud-in-canvas"),m?.destroy(),m=null,g?.destroy(),E?.destroy(),n?.destroy(),s?.destroy(),window.removeEventListener("resize",b),window.removeEventListener("orientationchange",b),l.remove()}}function za(){Us?.(),Us=null}function zl(e){ne&&ee(async()=>{const{attachTouchControls:t}=await import("./touch-controls.B0RIng6o.js");return{attachTouchControls:t}},__vite__mapDeps([12,2])).then(({attachTouchControls:t})=>{ne&&(Hs=t(e,ne.root).destroy)})}function Ga(){Hs?.(),Hs=null}function Ua(){const e=document.createElement("div");e.className="loading",Zo(e);const t=document.createElement("div");t.className="loading__title",t.textContent="СЦЕНА";const n=document.createElement("div");n.className="loading__bar loading__bar--unknown";const s=document.createElement("div");s.className="loading__fill",n.append(s);const o=document.createElement("div");return o.className="loading__stage",o.style.opacity="0.8",o.style.fontSize="13px",o.style.textTransform="uppercase",e.append(t,n,o),document.body.append(e),{setStage(a,i){if(o.textContent=a,i===void 0||!Number.isFinite(i)){n.classList.add("loading__bar--unknown");return}n.classList.remove("loading__bar--unknown"),s.style.width=`${Math.round(Math.min(1,Math.max(0,i))*100)}%`},done(){e.remove()},fail(a){n.hidden=!0,o.textContent=`ошибка: ${a}`,setTimeout(()=>e.remove(),4e3)}}}window.addEventListener("keydown",e=>{e.key==="F9"&&location.reload()});export{Pr as A,sd as B,Fr as C,El as D,Br as E,Or as F,tn as G,td as H,an as I,Zl as J,cr as K,Ql as L,ad as V,An as a,gt as b,nd as c,We as d,Xl as e,Kl as f,mr as g,Yl as h,ql as i,ya as j,Wl as k,Fs as l,wl as m,Vl as n,Jl as o,Ns as p,ed as q,hn as r,$s as s,Ur as t,nt as u,fa as v,Ul as w,Hl as x,od as y,Rr as z};
