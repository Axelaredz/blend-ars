const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/music-player.B3rPUW-E.js","assets/music-audio.DNu4TXPq.js","assets/playcanvas.zR-V_TaA.js","assets/boot-preset.DAPWf2G0.js","assets/menu-background.CNzFEeWB.js","assets/engine-sound.CZvcYxXn.js","assets/look-gestures.D7GS3G4t.js","assets/engine-bootstrap.DcnisRIi.js","assets/smoke-scene.zwMI0kje.js","assets/vehicle-scene.L1NgibC8.js","assets/video-recorder.ilLNPhk5.js","assets/touch-controls.I345S93u.js"])))=>i.map(i=>d[i]);
import{_ as q,E as rt,T as ps,C as Ta,M as sn,a as _o,b as Do,S as Pa,B as Ia,V as yo,c as fs,d as Ma,e as Fa,f as Ba,G as wo,g as Da,A as vo,F as Eo,P as $a}from"./playcanvas.zR-V_TaA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const So="blendars-loading",Oa=`
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
`;function ja(){if(document.getElementById(So))return;const e=document.createElement("style");e.id=So,e.textContent=Oa,document.head.append(e)}const Ga="/blend-ars/assets/loader.CPCrwQQc.webp",za="#282828",ko="blendars-splash",Ua=`
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
    background-color: ${za};
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
`;function $o(e){if(!document.getElementById(ko)){const s=document.createElement("style");s.id=ko,s.textContent=Ua,document.head.append(s)}if(e.querySelector(":scope > .splash-logo")){e.classList.add("splash-host");return}const t=document.createElement("div");t.className="splash-logo";const n=document.createElement("img");n.src=Ga,n.alt="Blendars",t.append(n),e.prepend(t),e.classList.add("splash-host")}class Ha{root;fill;bar;stageEl;bytesEl;errorEl;lastPercent=-1;lastBytesText="";lastStage="";constructor(t,n={}){if(this.root=document.createElement("div"),this.root.className="loading",ja(),$o(this.root),this.root.setAttribute("role","progressbar"),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","100"),this.root.setAttribute("aria-valuenow","0"),this.root.setAttribute("aria-label","Загрузка"),n.title!==void 0){const o=document.createElement("h1");o.className="loading__title",o.textContent=n.title,this.root.append(o)}this.bar=document.createElement("div"),this.bar.className="loading__bar loading__bar--unknown",this.fill=document.createElement("div"),this.fill.className="loading__fill",this.bar.append(this.fill),this.bar.removeAttribute("aria-valuenow");const s=document.createElement("div");s.className="loading__row",this.stageEl=document.createElement("span"),this.stageEl.className="loading__stage",this.stageEl.textContent="старт",this.bytesEl=document.createElement("span"),this.bytesEl.className="loading__bytes",this.bytesEl.textContent="",s.append(this.stageEl,this.bytesEl),this.errorEl=document.createElement("div"),this.errorEl.className="loading__error",this.errorEl.hidden=!0,this.root.append(this.bar,s,this.errorEl),t.append(this.root)}setStage(t,n){t!==this.lastStage&&(this.stageEl.textContent=t,this.lastStage=t);const s=n!==void 0&&Number.isFinite(n);if(this.bar.classList.toggle("loading__bar--unknown",!s),s){const o=Math.round(Math.min(1,Math.max(0,n))*100);o!==this.lastPercent&&(this.fill.style.width=`${o}%`,this.root.setAttribute("aria-valuenow",String(o)),this.lastPercent=o)}}setError(t){this.bar.hidden=!0,this.stageEl.textContent="ошибка",this.errorEl.textContent=t,this.errorEl.hidden=!1}updateFromResources(){if(typeof performance.getEntriesByType!="function")return;const t=performance.getEntriesByType("resource");let n=0,s=0;for(const a of t)a.name.indexOf(location.origin)===0&&(n+=a.encodedBodySize||a.transferSize||0,s=Math.max(s,a.responseEnd||0));if(n<=0)return;const o=`${Va(n)} загружено`;o!==this.lastBytesText&&(this.bytesEl.textContent=o,this.lastBytesText=o)}hide(){return this.root.setAttribute("aria-hidden","true"),this.root.classList.add("hidden"),new Promise(t=>{let n=!1;const s=()=>{n||(n=!0,this.root.remove(),t())};this.root.addEventListener("transitionend",s,{once:!0}),setTimeout(s,400)})}}function Va(e){return e<1024?`${e} Б`:e<1024*1024?`${(e/1024).toFixed(0)} КБ`:`${(e/(1024*1024)).toFixed(1)} МБ`}const Oo="/blend-ars/assets/LilitaOne-Regular.C8J_njg9.ttf",Wa=new URL("/blend-ars/assets/fullscreen.C4xFj3BF.svg",import.meta.url).href,Ya=new URL("/blend-ars/assets/fullscreen-exit.D85sBYy_.svg",import.meta.url).href,Ja=new URL("/blend-ars/assets/info.BdEiL0Sf.svg",import.meta.url).href,Ka=new URL("/blend-ars/assets/book-open.CLVm05VY.svg",import.meta.url).href,Co=new URL("/blend-ars/assets/gear_six.TA3VDyxO.svg",import.meta.url).href,Xa=new URL("/blend-ars/assets/camera-rotate.D-uiZS3m.svg",import.meta.url).href,qa=new URL("/blend-ars/assets/music-note.BpgtDFsX.svg",import.meta.url).href,Qa=new URL("/blend-ars/assets/package.BDtnf6Kx.svg",import.meta.url).href,Za=new URL("/blend-ars/assets/flag.CeS1AlXY.svg",import.meta.url).href,ei=new URL("/blend-ars/assets/garage.D_BJEZuB.svg",import.meta.url).href,ti=new URL("/blend-ars/assets/storefront.e4K1ebmi.svg",import.meta.url).href,ni=new URL("/blend-ars/assets/truck.rvSKQmy5.svg",import.meta.url).href,si=new URL("/blend-ars/assets/coupe.DdXCwqWg.svg",import.meta.url).href,oi=new URL("/blend-ars/assets/x.D2ii0gML.svg",import.meta.url).href,ai=new URL("/blend-ars/assets/list.DXUiLcf_.svg",import.meta.url).href,ii=new URL("/blend-ars/assets/triangle-left.DPdzCyZ0.svg",import.meta.url).href,nl=new URL("/blend-ars/assets/stop-square.Cvj1GcXd.svg",import.meta.url).href,sl=new URL("/blend-ars/assets/arrows_clockwise.Toz6NZFk.svg",import.meta.url).href,jo="/blend-ars/assets/ui-click.DcT3uYBZ.wav",ri={click:1,toggle:1.22,window:.86},ci=.5;let Go=()=>.5,Se=null,xn=null,it=null,No=!1;function li(e){Go=e}function di(){if(No)return;No=!0;const e=window.AudioContext??window.webkitAudioContext;if(e!==void 0){try{Se=new e}catch{Se=null;return}fetch(jo).then(t=>t.arrayBuffer()).then(t=>Se?.decodeAudioData(t)).then(t=>{xn=t??null}).catch(()=>{xn=null})}}function pe(e="click"){const t=ci*Go();if(t>0){if(xn!==null&&Se!==null){Se.state==="suspended"&&Se.resume().catch(()=>{});const n=Se.createBufferSource();n.buffer=xn,n.playbackRate.value=ri[e];const s=Se.createGain();s.gain.value=t,n.connect(s).connect(Se.destination),n.start();return}it===null&&(it=new Audio(jo),it.preload="auto"),it.volume=t,it.currentTime=0,it.play().catch(()=>{})}}function qe(e){const t=n=>{if(!n.isPrimary||n.pointerType==="mouse"&&n.button!==0)return;const s=n.target;if(!(s instanceof Element)||s.closest('[disabled], [aria-disabled="true"]')||s.closest('input[type="range"]'))return;if(s.closest('input[type="checkbox"], .modes__card, [role="switch"]')){pe("toggle");return}s.closest('button, .mitem, [role="button"], .dlg__close')&&pe("click")};return e.addEventListener("pointerdown",t,!0),()=>e.removeEventListener("pointerdown",t,!0)}function ln(e){const t=n=>{const s=n.target;s instanceof HTMLInputElement&&s.type==="range"&&pe("click")};return e.addEventListener("change",t,!0),()=>e.removeEventListener("change",t,!0)}const ui=`
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
`;function Cn(e){const t=document.createElement("div");if(t.className="dlg",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",e.title),!document.getElementById("dlg-style")){const r=document.createElement("style");r.id="dlg-style",r.textContent=ui,document.head.append(r)}const n=document.createElement("div");n.className="dlg__panel";const s=document.createElement("h2");s.className="dlg__title",s.textContent=e.title;const o=document.createElement("div");return o.className="dlg__body",o.append(e.body),n.append(s,o),t.append(n),document.body.append(t),{root:t,open(){t.hidden=!1},close(){t.hidden=!0},destroy(){t.remove()}}}const mi=[{body:"truck",title:"Джип",note:"Грузовик. Родное шасси, грузовая физика.",icon:ni},{body:"maserati",title:"Мазерати",note:"GT3-обвес на том же шасси.",icon:si}],pi=`
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
`;function fi(e){if(!document.getElementById("game-modes-style")){const o=document.createElement("style");o.id="game-modes-style",o.textContent=pi,document.head.append(o)}const t=document.createElement("div");t.className="modes";const n=mi.map(o=>{const a=document.createElement("button");a.className="modes__card",a.type="button",a.dataset.body=o.body;const r=document.createElement("span");r.className="modes__art",r.style.setProperty("--modes-icon",`url(${JSON.stringify(o.icon)})`);const l=document.createElement("span");l.className="modes__title",l.textContent=o.title;const c=document.createElement("p");return c.className="modes__note",c.textContent=o.note,a.append(r,l,c),a.addEventListener("pointerdown",p=>{p.preventDefault(),!a.disabled&&e(o.body)}),t.append(a),a}),s=Cn({title:"Режимы игры",body:t});return{dialog:s,open(){s.open()},setBusy(o){for(const a of n)a.disabled=o},destroy(){s.destroy()}}}const bi={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:8,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:6,fill:1.05,rimLeft:6.15,rimRight:6.3,spot:7.05,fog:.005,gamma:1,gammaStrength:.5,toneMapping:2,sunElevation:15,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:.3}},shadows:{val:{cascades:4,distribution:.95,blend:.12,distance:320,resolution:4096,bias:0,normalBias:.05}},postfx:{on:!0,val:{bloom:.1,bloomBlur:16,bloomThreshold:.2,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:.95,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:1,fps:0,msaa:!0}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},hi={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:4,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:5,fill:.3,rimLeft:.5,rimRight:.5,spot:2,fog:.0035,gamma:0,gammaStrength:1.2,toneMapping:2,sunElevation:9,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:1}},shadows:{val:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3}},postfx:{on:!1,val:{bloom:0,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.48,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:.5,fps:30,msaa:!1}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},zo="blendars.presets.v1",Uo="blendars-settings",Ho=1;let ne={active:null,list:[]},Lo=!1;function Te(){if(Lo)return ne;Lo=!0;try{const e=localStorage.getItem(zo);if(!e)return ne;const t=JSON.parse(e);if(!t||typeof t!="object")return ne;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=gi(o);a&&s.push(a)}ne={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ne}function gi(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function St(){try{localStorage.setItem(zo,JSON.stringify(ne))}catch{}}function Ns(){return Te().list.slice().sort((t,n)=>n.created-t.created)}function _n(){return Te().active}function xi(){const e=Te();return e.active?e.list.find(t=>t.id===e.active)??null:null}function Ls(e){Te(),ne.active=e,St()}function ct(e,t,n=Date.now()){Te();const s={id:ki(n),name:e.trim()||Oe(new Date(n)),created:n,data:t};return ne.list.push(s),ne.active=s.id,St(),s}function _i(e,t){const s=Te().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,St(),!0):!1}function Vo(e,t){const s=Te().list.find(o=>o.id===e);return s?(s.data=t,St(),!0):!1}function yi(e){Te();const t=ne.list.findIndex(n=>n.id===e);t<0||(ne.list.splice(t,1),ne.active===e&&(ne.active=null),St())}function Oe(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function wi(){Te(),ne={active:null,list:[]},St()}function vi(e){const t={app:Uo,version:Ho,name:e.name,created:e.created,data:e.data},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`${Si(e.name)}.json`,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Ei(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==Uo||n.version!==Ho||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function Si(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function ki(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Wo="blendars.physics-presets.v1",Ci="blendars-physics",Ni=1;let ke={active:null,list:[]},Ao=!1;function Nn(){if(Ao)return ke;Ao=!0;try{const e=localStorage.getItem(Wo);if(!e)return ke;const t=JSON.parse(e);if(!t||typeof t!="object")return ke;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=Li(o);a&&s.push(a)}ke={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ke}function Li(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Yo(){try{localStorage.setItem(Wo,JSON.stringify(ke))}catch{}}function Ai(){return Nn().list.slice().sort((e,t)=>t.created-e.created)}function Ri(){return Nn().active}function Ti(e){Nn(),ke.active=e,Yo()}function bs(e,t,n=Date.now()){Nn();const s={id:Mi(n),name:e.trim()||Pi(new Date(n)),created:n,data:t};return ke.list.push(s),ke.active=s.id,Yo(),s}function Pi(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function Ii(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==Ci||n.version!==Ni||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function Mi(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const $s="blendars.sound-effects.v3",Os="blendars.sound-effects.v2",Jo=[["engine","Двигатель"],["road","Шум качения"],["skid","Скрежет шин"],["shift","Переключение передач"],["impact","Удары кузова"],["landing","Посадка на колёса"],["music","Фоновая музыка"],["uiClick","Клики меню"]],Ko=Jo.map(([e])=>e),Xo={engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},Fi={engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1},be={...Xo},re={...Fi},Ue={engineTorque:{label:"Момент двигателя (Н·м)",def:520,off:520,min:200,max:900,decimals:0},brakeForce:{label:"Сила тормозов (Н)",def:6500,off:6500,min:2e3,max:12e3,decimals:0},mass:{label:"Масса кузова (кг)",def:2200,off:2200,min:1200,max:3500,decimals:0},engineBraking:{label:"Торможение двигателем",def:.15,off:.07,min:0,max:.4,decimals:2},dragForce:{label:"Сопротивление воздуха",def:1.75,off:0,min:0,max:4,decimals:2},rollingResistance:{label:"Сопротивление качения",def:.02,off:0,min:0,max:.06,decimals:3},lateralGripAssist:{label:"Помощь бокового сцепа",def:1.5,off:0,min:0,max:6,decimals:1},wheelGrip:{label:"Сцепление колёс",def:4,off:2.7,min:1,max:8,decimals:1},rollInfluence:{label:"Крен (перенос нагрузки)",def:.15,off:.08,min:0,max:.3,decimals:2},suspStiffness:{label:"Жёсткость пружины",def:20,off:20,min:5,max:60,decimals:1},suspDamping:{label:"Демпфер (распускание)",def:2.3,off:2.3,min:.5,max:8,decimals:2},suspCompression:{label:"Демпфер (сжатие)",def:4.4,off:4.4,min:.5,max:12,decimals:2},suspTravel:{label:"Ход подвески",def:.35,off:.35,min:.1,max:.8,decimals:2},suspForce:{label:"Предел силы пружины (Н)",def:2e4,off:2e4,min:5e3,max:6e4,decimals:0},suspRelVel:{label:"Демпфер и скорость кузова",def:1,off:1,min:0,max:2,decimals:2},antiRoll:{label:"Стабилизатор (рычаг)",def:0,off:0,min:0,max:1.5,decimals:2},inertiaScale:{label:"Инерция поворота (yaw)",def:1.3,off:1,min:.5,max:2.5,decimals:2},highSpeedLock:{label:"Спад угла руля (доля)",def:.55,off:.4,min:.2,max:1,decimals:2},highSpeedLockAt:{label:"Скорость спада руля",def:100,off:80,min:50,max:150,decimals:0,unit:"kmh"},camTurnRate:{label:"Камера: скорость поворота",def:3.5,off:2.2,min:1,max:6,decimals:1},camFollowRate:{label:"Камера: сглаживание",def:11,off:9,min:4,max:20,decimals:0},skidThreshold:{label:"Порог звука юза",def:.15,off:.3,min:0,max:.5,decimals:2}},dt=Object.keys(Ue),js="blendars.physics.v1",te={},se={};Bi();function Bi(){for(const e of dt)te[e]=!0,se[e]=Ue[e].def}function Di(){try{const e=localStorage.getItem(js);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:null,o=typeof n.val=="object"&&n.val!==null?n.val:null;for(const a of dt){const r=Ue[a],l=s?.[a];typeof l=="boolean"&&(te[a]=l);const c=o?.[a];typeof c=="number"&&Number.isFinite(c)&&(se[a]=Math.min(r.max,Math.max(r.min,c)))}}catch{}}function Dt(){try{localStorage.setItem(js,JSON.stringify({on:te,val:se}))}catch{}}function ol(e){return te[e]?se[e]:Ue[e].off}const dn=[];function al(e){return dn.push(e),()=>{const t=dn.indexOf(e);t>=0&&dn.splice(t,1)}}const un=[];function K(){for(const e of un)e()}function $i(e){return un.push(e),()=>{const t=un.indexOf(e);t>=0&&un.splice(t,1)}}function $t(){for(const e of dn)e();K()}function hs(e){const t=Ue[e],n=se[e];return t.unit==="kmh"?`${Math.round(n)} км/ч`:n.toFixed(t.decimals)}const qo=[0,1,2,3,4],Oi=["линейный","филмик","ACES","нейтральный","без тонмаппинга"],Le={exposure:{label:"Экспозиция кадра",def:.5,min:.5,max:10,decimals:1},key:{label:"Яркость солнца",def:1,min:0,max:10,decimals:2},fill:{label:"Заполняющий свет",def:.3,min:0,max:15,decimals:2},rimLeft:{label:"Контровой слева",def:.5,min:0,max:15,decimals:2},rimRight:{label:"Контровой справа",def:.5,min:0,max:15,decimals:2},spot:{label:"Верхний софтбокс",def:2,min:0,max:15,decimals:2},fog:{label:"Туман задника",def:.0035,min:0,max:.05,decimals:4},gamma:{label:"Гамма-коррекция (sRGB)",def:1,min:0,max:1,decimals:0,options:[0,1]},gammaStrength:{label:"Сила гаммы",def:1.2,min:.5,max:3,decimals:2},toneMapping:{label:"Тонмаппинг",def:3,min:0,max:4,decimals:0,options:qo},sunElevation:{label:"Высота солнца",def:34,min:-10,max:90,decimals:0},sunAzimuth:{label:"Азимут солнца",def:135,min:0,max:360,decimals:0},turbidity:{label:"Мутность неба",def:3,min:1,max:10,decimals:2},rayleigh:{label:"Рэлеевское рассеяние",def:2.2,min:0,max:5,decimals:2},mieCoefficient:{label:"Ми-рассеяние",def:.005,min:0,max:.05,decimals:3},mieDirectionalG:{label:"Анизотропия Ми",def:.8,min:0,max:.99,decimals:2},skyLuminance:{label:"Яркость неба",def:1,min:0,max:5,decimals:2}},ut=Object.keys(Le),Gs="blendars.lighting.v1",oe={};ji();Gi();function ji(){for(const e of ut)oe[e]=Le[e].def}function Gi(){try{const e=localStorage.getItem(Gs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of ut){const a=Le[o],r=s?.[o];typeof r=="number"&&Number.isFinite(r)&&(oe[o]=Math.min(a.max,Math.max(a.min,r)))}}catch{}}function mn(){try{localStorage.setItem(Gs,JSON.stringify({val:oe}))}catch{}}function zi(e){return oe[e]}function il(){return 2**(zi("gammaStrength")-1)}const pn=[];function rl(e){return pn.push(e),()=>{const t=pn.indexOf(e);t>=0&&pn.splice(t,1)}}function fn(){for(const e of pn)e();K()}function Ro(e){const t=Le[e];if(t.options){const n=t.options.indexOf(oe[e]);return n>=0?n:0}return Math.round((oe[e]-t.min)/(t.max-t.min)*100)}function Ui(e,t){const n=Le[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function gs(e){const t=Le[e],n=oe[e];return t.options&&t.options.length===2&&t.options[1]===1?n>=1?"вкл":"выкл":e==="toneMapping"?Oi[qo.indexOf(n)]??n.toFixed(t.decimals):n.toFixed(t.decimals)}const Hi=[512,1024,2048,4096],he={cascades:{label:"Каскадов",def:2,min:1,max:4,decimals:0,options:[1,2,3,4]},distribution:{label:"Раскладка каскадов",def:.7,min:0,max:1,decimals:2},blend:{label:"Бесшовность каскадов",def:.12,min:0,max:.3,decimals:2},distance:{label:"Дальность теней",def:320,min:50,max:500,decimals:0},resolution:{label:"Разрешение атласа",def:4096,min:0,max:3,decimals:0,options:Hi},bias:{label:"Смещение тени",def:0,min:0,max:1,decimals:2},normalBias:{label:"Смещение по нормали",def:0,min:0,max:.5,decimals:2}},Ge=Object.keys(he),zs="blendars.shadows.v1",J={};Vi();Wi();function Vi(){for(const e of Ge)J[e]=he[e].def}function Wi(){try{const e=localStorage.getItem(zs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of Ge){const a=he[o],r=s?.[o];if(!(typeof r!="number"||!Number.isFinite(r))){if(a.options){const c=a.options[r]===r?r:a.options.indexOf(r);c>=0&&c<a.options.length&&(J[o]=Number(a.options[c]));continue}J[o]=Math.min(a.max,Math.max(a.min,r))}}}catch{}}function mt(){try{localStorage.setItem(zs,JSON.stringify({val:J}))}catch{}}function cl(e){return J[e]}const bn=[];function ll(e){return bn.push(e),()=>{const t=bn.indexOf(e);t>=0&&bn.splice(t,1)}}function Ot(){for(const e of bn)e();K()}function xs(e,t){const n=he[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function Yi(e,t){const n=he[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function _s(e){const t=he[e];return e==="distance"?`${Math.round(J[e])} м`:J[e].toFixed(t.decimals)}const Ae={bloom:{label:"Ореол (bloom)",def:.05,min:0,max:.1,decimals:3},bloomBlur:{label:"Мягкость ореола",def:8,min:1,max:16,decimals:0,options:[1,2,4,8,16]},bloomThreshold:{label:"Порог ореола",def:.6,min:0,max:2,decimals:2},vignette:{label:"Виньетка",def:0,min:0,max:1,decimals:2},vignetteInner:{label:"Виньетка: начало",def:0,min:0,max:1,decimals:2},vignetteOuter:{label:"Виньетка: край",def:1.25,min:.5,max:2,decimals:2},vignetteCurvature:{label:"Виньетка: кромка",def:.5,min:.2,max:1,decimals:2},taa:{label:"Временное сглаживание",def:0,min:0,max:1,decimals:0,options:[0,1]},taaJitter:{label:"Сглаживание: джиттер",def:0,min:0,max:1,decimals:2},dof:{label:"Глубина резкости",def:1,min:0,max:1,decimals:0,options:[0,1]},dofFocus:{label:"Фокус (м)",def:1,min:1,max:60,decimals:1},dofRange:{label:"Зона фокуса (м)",def:40,min:1,max:40,decimals:1},dofRadius:{label:"Сила размытия",def:1,min:1,max:8,decimals:1},dofNear:{label:"Размывать передний план",def:1,min:0,max:1,decimals:0,options:[0,1]},grading:{label:"Цветокоррекция",def:1,min:0,max:1,decimals:0,options:[0,1]},brightness:{label:"Яркость",def:1,min:.5,max:1.5,decimals:2},contrast:{label:"Контраст",def:1,min:.5,max:1.5,decimals:2},saturation:{label:"Насыщенность",def:1,min:0,max:2,decimals:2},fringing:{label:"Аберрация",def:0,min:0,max:100,decimals:0},sharpness:{label:"Резкость",def:0,min:0,max:1,decimals:2}},ze=Object.keys(Ae),Us="blendars.postfx.v1",Hs="blendars.postfx.on",V={},Qo=!0;let Re=Qo;Ji();Ki();function Ji(){for(const e of ze)V[e]=Ae[e].def;Re=Qo}function Ki(){try{const e=localStorage.getItem(Us);if(e){const n=JSON.parse(e);if(n&&typeof n=="object"){const s=n,o=typeof s.val=="object"&&s.val!==null?s.val:null;for(const a of ze){const r=Ae[a],l=o?.[a];typeof l=="number"&&Number.isFinite(l)&&(V[a]=Math.min(r.max,Math.max(r.min,l)))}}}const t=localStorage.getItem(Hs);t!==null&&(Re=t!=="0")}catch{}}function Ce(){try{localStorage.setItem(Us,JSON.stringify({val:V})),localStorage.setItem(Hs,Re?"1":"0")}catch{}}function ys(e){return V[e]}function on(){return Re}function ws(e){Re!==e&&(Re=e,Ce(),je())}const Vs="blendars.hud.v1";let ft=!0,He=1280;const ce=[],As=["fps","cpu","draw","vram"],Xi={fps:"Частота кадра (FPS и мс)",cpu:"Загрузка CPU (обновление / рендер / физика)",draw:"Вызовы отрисовки и шейдеры",vram:"Видеопамять и разрешение"};let bt={fps:!0,cpu:!0,draw:!0,vram:!0};function qi(){try{const e=localStorage.getItem(Vs);if(!e)return;const t=JSON.parse(e);if(t&&typeof t=="object"){const n=t.on;if(n&&typeof n=="object"){const s=n.stats;typeof s=="number"&&(ft=s!==0);const o=n.record;(o===1280||o===1920||o==="window")&&(He=o);const a=n.touch;typeof a=="number"&&(Gt=a!==0)}}}catch{}}const Ws="blendars.stats.v1";function Qi(){try{const e=localStorage.getItem(Ws);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s={...bt};for(const o of As){const a=n[o];typeof a=="boolean"&&(s[o]=a)}bt=s}catch{}}function Zi(){try{localStorage.setItem(Ws,JSON.stringify(bt))}catch{}}function Ys(){try{localStorage.setItem(Vs,JSON.stringify({on:{stats:ft?1:0,record:He,touch:Gt?1:0}}))}catch{}}function yn(){return ft}function Zo(e){if(ft!==e){ft=e,Ys();for(const t of ce)t();K()}}function me(e){return bt[e]}function er(e){return Xi[e]}function tr(e,t){if(bt[e]!==t){bt[e]=t,Zi();for(const n of ce)n();K()}}function nr(){return He}function Rs(e){if(!(e!==1280&&e!==1920&&e!=="window")&&He!==e){He=e,Ys();for(const t of ce)t();K()}}function sr(e){const t=He==="window"?e:He;return!Number.isFinite(t)||t<=0?1280:Math.round(t)}function ea(e){return ce.push(e),()=>{const t=ce.indexOf(e);t>=0&&ce.splice(t,1)}}let or="full";function ar(){return or}let Gt=!0;function ir(){return Gt}function rr(e){if(Gt!==e){Gt=e,Ys();for(const t of ce)t();K()}}const ta="blendars.touch.v1";let zt=1,Ut=.85,Ht="split",Vt=!1;function cr(){try{const e=localStorage.getItem(ta);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t;typeof n.scale=="number"&&n.scale>=.6&&n.scale<=2&&(zt=n.scale),typeof n.opacity=="number"&&n.opacity>=.25&&n.opacity<=1&&(Ut=n.opacity),(n.layout==="split"||n.layout==="left"||n.layout==="right")&&(Ht=n.layout),typeof n.swap=="boolean"&&(Vt=n.swap)}catch{}}function Ln(){try{localStorage.setItem(ta,JSON.stringify({scale:zt,opacity:Ut,layout:Ht,swap:Vt}))}catch{}}function lr(){return zt}function dr(e){const t=Math.min(Math.max(e,.6),2);if(zt!==t){zt=t,Ln();for(const n of ce)n();K()}}function ur(){return Ut}function mr(e){const t=Math.min(Math.max(e,.25),1);if(Ut!==t){Ut=t,Ln();for(const n of ce)n();K()}}function pr(){return Ht}function fr(e){if(Ht!==e){Ht=e,Ln();for(const t of ce)t();K()}}function br(){return Vt}function hr(e){if(Vt!==e){Vt=e,Ln();for(const t of ce)t();K()}}qi();Qi();cr();const hn=[];function dl(e){return hn.push(e),()=>{const t=hn.indexOf(e);t>=0&&hn.splice(t,1)}}function je(){for(const e of hn)e();K()}function To(e,t){const n=Ae[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function gr(e,t){const n=Ae[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function vs(e){const t=V[e],n=Ae[e];return n.options&&n.options.length===2&&n.options[1]===1?t>=1?"вкл":"выкл":t.toFixed(n.decimals)}xr();Di();function xr(){try{const e=localStorage.getItem($s)??localStorage.getItem(Os);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:n,o=typeof n.vol=="object"&&n.vol!==null?n.vol:null;for(const a of Object.keys(Xo)){const r=s[a];typeof r=="boolean"&&(be[a]=r);const l=o?.[a];typeof l=="number"&&Number.isFinite(l)&&(re[a]=Math.min(1,Math.max(0,l)))}}catch{}}function wn(){try{localStorage.setItem($s,JSON.stringify({on:be,vol:re})),localStorage.removeItem(Os)}catch{}}function _r(e){return be[e]?re[e]:0}function ul(e){return re[e]}function ml(e,t){const n=Math.min(1,Math.max(0,t));re[e]!==n&&(re[e]=n,wn(),K())}const yr=`@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JSON.stringify(Oo)}) format('truetype');
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
`;function pt(){return{version:1,physics:{on:{...te},val:{...se}},lighting:{val:{...oe}},shadows:{val:{...J}},postfx:{on:Re,val:{...V}},sound:{on:{...be},vol:{...re}},hud:{on:{stats:ft,record:He}},graphics:{val:{scale:ht,fps:gt,msaa:Ve}},recording:{val:{fps:xt,quality:_t,keyFrame:yt,sound:wt}}}}function wr(){return{on:{...te},val:{...se}}}let Ts=!1;function vr(){return Ts}function lt(e){const t=[];if(!e||typeof e!="object")return{applied:t};Ts=!0;try{return Er(e,t)}finally{Ts=!1}}function Er(e,t){const n=e,s=(y,S,d)=>typeof y=="number"&&Number.isFinite(y)?Math.min(d,Math.max(S,y)):null,o=y=>y&&typeof y=="object"?y:null,a=y=>y&&typeof y=="object"?y:null,r=y=>y&&typeof y=="object"?y:null,l=n.physics&&typeof n.physics=="object"?n.physics:null;if(l){const y=a(l.on),S=o(l.val);let d=!1;for(const m of dt){const E=Ue[m];y&&typeof y[m]=="boolean"&&(te[m]=y[m],d=!0);const f=S?s(S[m],E.min,E.max):null;f!==null&&(se[m]=f,d=!0)}d&&(Dt(),$t(),t.push("физика"))}const c=o(n.lighting&&typeof n.lighting=="object"?n.lighting.val:null);if(c){let y=!1;for(const S of ut){const d=Le[S],m=s(c[S],d.min,d.max);m!==null&&(oe[S]=m,y=!0)}y&&(mn(),fn(),t.push("свет"))}const p=o(n.shadows&&typeof n.shadows=="object"?n.shadows.val:null);if(p){let y=!1;for(const S of Ge){const d=he[S],m=p[S];if(d.options){const L=d.options[m]===m?m:d.options.indexOf(m);L>=0&&L<d.options.length&&(J[S]=Number(d.options[L]),y=!0);continue}const E=s(m,d.min,d.max);E!==null&&(J[S]=E,y=!0)}y&&(mt(),Ot(),t.push("тени"))}const k=n.postfx&&typeof n.postfx=="object"?n.postfx:null;if(k){let y=!1;typeof k.on=="boolean"&&(Re=k.on,y=!0);const S=o(k.val);if(S)for(const d of ze){const m=Ae[d],E=S[d];if(m.options){const L=m.options.indexOf(E);L>=0&&L<m.options.length&&(V[d]=Number(m.options[L]),y=!0);continue}const f=s(E,m.min,m.max);f!==null&&(V[d]=f,y=!0)}y&&(Ce(),je(),t.push("Post FX"))}const h=n.sound&&typeof n.sound=="object"?n.sound:null;if(h){const y=a(h.on),S=o(h.vol);let d=!1;for(const m of Ko){y&&typeof y[m]=="boolean"&&(be[m]=y[m],d=!0);const E=S?s(S[m],0,1):null;E!==null&&(re[m]=E,d=!0)}d&&(wn(),t.push("звук"))}const g=n.hud&&typeof n.hud=="object"?n.hud:null,u=g&&typeof g.on=="object"?g.on:null;if(u&&typeof u.stats=="boolean"){Zo(u.stats);const y=u.record;(y===1280||y===1920||y==="window")&&Rs(y),t.push("интерфейс")}const b=r(n.graphics&&typeof n.graphics=="object"?n.graphics.val:null);if(b){let y=!1;const S=b.scale;(S===.5||S===.75||S===1)&&(Xs(S),y=!0);const d=b.fps;(d===0||d===30||d===60||d===120)&&(qs(d),y=!0),typeof b.msaa=="boolean"&&(Wt(b.msaa),y=!0),V.taa>0&&Ve&&(Wt(!1),y=!0),y&&(qt(),An(),t.push("графика"))}const x=r(n.recording&&typeof n.recording=="object"?n.recording.val:null);if(x){let y=!1;const S=x.fps;(S===24||S===30||S===60)&&(da(S),y=!0);const d=x.quality;(d==="low"||d==="medium"||d==="high")&&(ua(d),y=!0);const m=x.keyFrame;(m===1||m===2||m===4)&&(ma(m),y=!0),typeof x.sound=="boolean"&&(pa(x.sound),y=!0),y&&(Qt(),Zt(),t.push("запись"))}return{applied:t}}const Js="blendars.graphics.v1";let ht=1,gt=0,Ve=!0;const Ks="blendars.gfx-preset.v1",Sr={phone:{label:"Телефон",graphics:{scale:.5,fps:30,msaa:!1},shadows:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3},postfxOn:!1,postfx:{bloom:0,vignette:0,fringing:0,sharpness:0,grading:0,taa:0,taaJitter:0}},balanced:{label:"Оптимальный",graphics:{scale:.75,fps:60,msaa:!0},shadows:{cascades:2,distribution:.7,blend:.12,distance:220,resolution:2048,bias:.7,normalBias:.4},postfxOn:!0,postfx:{bloom:.04,bloomBlur:8,bloomThreshold:.6,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.5,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:.25}},ultra:{label:"Ультра",graphics:{scale:1,fps:0,msaa:!0},shadows:{cascades:4,distribution:.7,blend:.12,distance:320,resolution:4096,bias:1,normalBias:.5},postfxOn:!0,postfx:{bloom:.06,bloomBlur:8,bloomThreshold:0,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:1,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:.25}}};let Xt="phone";function kr(){const e=window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window,n=navigator.hardwareConcurrency??4,s=navigator.deviceMemory??4,o=Math.min(window.screen.width,window.screen.height)<768;return(e||t)&&(n<=4||s<=4||o)}function Cr(){return Xt}function na(){try{localStorage.setItem(Ks,Xt)}catch{}}function Nr(){try{const e=localStorage.getItem(Ks);(e==="phone"||e==="balanced"||e==="ultra")&&(Xt=e)}catch{}}function sa(e){const t=Sr[e];Xt=e,na(),Xs(t.graphics.scale),qs(t.graphics.fps);const n=t.postfx.taa??0;Wt(n>0?!1:t.graphics.msaa);for(const s of Ge)J[s]=t.shadows[s]??he[s].def;mt(),Ot(),Re=t.postfxOn;for(const s of ze){const o=t.postfx[s];typeof o=="number"&&(V[s]=o)}Ce(),je()}const gn=[];function Lr(){try{const e=localStorage.getItem(Js);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.scale===.5||s.scale===.75||s.scale===1)&&(ht=s.scale),(s.fps===0||s.fps===30||s.fps===60||s.fps===120)&&(gt=s.fps),typeof s.msaa=="boolean"&&(Ve=s.msaa)}catch{}}function qt(){try{localStorage.setItem(Js,JSON.stringify({val:{scale:ht,fps:gt,msaa:Ve}}))}catch{}}function An(){for(const e of gn)e();K()}function oa(){return ht}function aa(){return gt}function Je(){return Ve}const Ar=4;function pl(){return Ve?Ar:1}function Xs(e){ht!==e&&(ht=e,qt(),An())}function qs(e){gt!==e&&(gt=e,qt(),An())}function Wt(e){Ve!==e&&(Ve=e,qt(),An())}function ia(e){return gn.push(e),()=>{const t=gn.indexOf(e);t>=0&&gn.splice(t,1)}}Lr();Nr();const Qs="blendars.recording.v1";let xt=30,_t="high",yt=2,wt=!0;const Rr=[];function Tr(){try{const e=localStorage.getItem(Qs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.fps===24||s.fps===30||s.fps===60)&&(xt=s.fps),(s.quality==="low"||s.quality==="medium"||s.quality==="high")&&(_t=s.quality),(s.keyFrame===1||s.keyFrame===2||s.keyFrame===4)&&(yt=s.keyFrame),typeof s.sound=="boolean"&&(wt=s.sound)}catch{}}function Qt(){try{localStorage.setItem(Qs,JSON.stringify({val:{fps:xt,quality:_t,keyFrame:yt,sound:wt}}))}catch{}}function Zt(){for(const e of Rr)e();K()}function ra(){return xt}function ca(){return _t}function la(){return yt}function Ps(){return wt}function da(e){xt!==e&&(xt=e,Qt(),Zt())}function ua(e){_t!==e&&(_t=e,Qt(),Zt())}function ma(e){yt!==e&&(yt=e,Qt(),Zt())}function pa(e){wt!==e&&(wt=e,Qt(),Zt())}Tr();function Pr(){const e=xi();if(e){const c=lt(e.data);c.applied.length>0&&console.info(`[settings] применён пресет «${e.name}»: ${c.applied.join(", ")}`);return}let t=!1;try{t=!!(localStorage.getItem($s)??localStorage.getItem(Os)??localStorage.getItem(js)??localStorage.getItem(Gs)??localStorage.getItem(zs)??localStorage.getItem(Us)??localStorage.getItem(Hs)??localStorage.getItem(Vs)??localStorage.getItem(Ws)??localStorage.getItem(Js)??localStorage.getItem(Qs)??localStorage.getItem(Ks))}catch{t=!0}if(t)return;const n=kr();Xt=n?"phone":"ultra",na(),qt(),mt(),Ce();const o=pt();sa("balanced");const a=pt();lt(n?hi:bi);const r=pt();lt(o),ct("По умолчанию",o),ct("Оптимальный",a),ct(n?"Телефон":"Ультра",r);const l=Ns().find(c=>c.name===(n?"Телефон":"Ультра"));Ls(l?l.id:null),console.info(`[settings] сохранённых настроек нет — созданы пресеты «По умолчанию», «Оптимальный», «${n?"Телефон":"Ультра"}» (активен «${n?"Телефон":"Ультра"}»)`)}Pr();function Ir(){const e=document.createElement("div");e.className="settings",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Настройки");const t=document.createElement("style");t.textContent=yr;const n=document.createElement("div");n.className="settings__panel";const s=document.createElement("h2");s.className="settings__title",s.textContent="Настройки";const o=document.createElement("p");o.className="settings__hint",o.textContent="Галочка — эффект включён, ползунок — его громкость. Выбор сохраняется в браузере и действует сразу.",o.id="settings-hint",e.setAttribute("aria-describedby",o.id);const a=document.createElement("div");a.className="settings__tabs",a.setAttribute("role","tablist");const r=document.createElement("button");r.className="settings__tab settings__tab--on",r.type="button",r.textContent="Звук",r.setAttribute("role","tab"),r.setAttribute("aria-selected","true");const l=document.createElement("button");l.className="settings__tab",l.type="button",l.textContent="Физика",l.setAttribute("role","tab"),l.setAttribute("aria-selected","false");const c=document.createElement("button");c.className="settings__tab",c.type="button",c.textContent="Освещение",c.setAttribute("role","tab"),c.setAttribute("aria-selected","false");const p=document.createElement("button");p.className="settings__tab",p.type="button",p.textContent="Тени",p.setAttribute("role","tab"),p.setAttribute("aria-selected","false");const k=document.createElement("button");k.className="settings__tab",k.type="button",k.textContent="Post FX",k.setAttribute("role","tab"),k.setAttribute("aria-selected","false");const h=document.createElement("button");h.className="settings__tab",h.type="button",h.textContent="Интерфейс",h.setAttribute("role","tab"),h.setAttribute("aria-selected","false");const g=document.createElement("button");g.className="settings__tab",g.type="button",g.textContent="Управление",g.setAttribute("role","tab"),g.setAttribute("aria-selected","false");const u=document.createElement("button");u.className="settings__tab",u.type="button",u.textContent="Пресеты",u.setAttribute("role","tab"),u.setAttribute("aria-selected","false");const b=document.createElement("button");b.className="settings__tab",b.type="button",b.textContent="Графика",b.setAttribute("role","tab"),b.setAttribute("aria-selected","false");const x=document.createElement("button");x.className="settings__tab",x.type="button",x.textContent="Запись",x.setAttribute("role","tab"),x.setAttribute("aria-selected","false"),a.append(r,l,c,p,k,h,g,b,x,u);const y=i=>{const _=[r,l,c,p,k,h,g,b,x,u];for(let N=0;N<_.length;N++){const M=_[N];if(!M)continue;const O=N===i;M.classList.toggle("settings__tab--on",O),M.setAttribute("aria-selected",String(O))}S.hidden=i!==0,E.hidden=i!==1,Y.hidden=i!==2,Pe.hidden=i!==3,de.hidden=i!==4,Me.hidden=i!==5,ue.hidden=i!==6,nt.hidden=i!==7,Ye.hidden=i!==8,at.hidden=i!==9};r.addEventListener("click",()=>y(0)),l.addEventListener("click",()=>y(1)),c.addEventListener("click",()=>y(2)),p.addEventListener("click",()=>y(3)),k.addEventListener("click",()=>y(4)),h.addEventListener("click",()=>y(5)),g.addEventListener("click",()=>y(6)),b.addEventListener("click",()=>y(7)),x.addEventListener("click",()=>y(8)),u.addEventListener("click",()=>y(9));const S=document.createElement("div");S.className="settings__pane",S.append(o);const d=document.createElement("div");d.className="settings__list";const m={};for(const[i,_]of Jo){const N=document.createElement("div");N.className="settings__row";const M=document.createElement("label");M.className="settings__head";const O=document.createElement("span");O.textContent=_;const I=document.createElement("input");I.type="checkbox",I.checked=be[i],M.append(O,I);const C=document.createElement("div");C.className="settings__vol",C.classList.toggle("settings__vol--off",!be[i]);const P=document.createElement("input");P.type="range",P.min="0",P.max="100",P.step="1",P.value=String(Math.round(re[i]*100)),P.setAttribute("aria-label",`Громкость: ${_}`);const F=document.createElement("output");F.className="settings__pct",F.textContent=`${P.value}%`,P.addEventListener("input",()=>{re[i]=Number(P.value)/100,F.textContent=`${P.value}%`,wn(),K()}),C.append(P,F),I.addEventListener("change",()=>{be[i]=I.checked,C.classList.toggle("settings__vol--off",!I.checked),wn(),K()}),m[i]=()=>{I.checked=be[i],C.classList.toggle("settings__vol--off",!be[i]),P.value=String(Math.round(re[i]*100)),F.textContent=`${P.value}%`},N.append(M,C),d.append(N)}S.append(d);const E=document.createElement("div");E.className="settings__pane",E.hidden=!0;const f=document.createElement("p");f.className="settings__hint",f.textContent="Галочка — тюнинг «против скольжения», выключена — исходное поведение игры. Ползунок — значение, ↺ — сброс строки. Всё применяется сразу, даже за рулём.",E.append(f);const L=document.createElement("div");L.className="physics-tabs";const B=document.createElement("button");B.className="physics-tab physics-tab--on",B.type="button",B.textContent="Тонкая настройка",B.setAttribute("role","tab"),B.setAttribute("aria-selected","true");const w=document.createElement("button");w.className="physics-tab",w.type="button",w.textContent="Пресеты физики",w.setAttribute("role","tab"),w.setAttribute("aria-selected","false"),L.append(B,w),E.append(L);const v=document.createElement("div");v.className="physics-content",E.append(v);const A=document.createElement("div");A.className="settings__list";const T=document.createElement("div");T.className="physics-presets",v.append(A,T);const R=i=>{i==="fine"?(B.classList.add("physics-tab--on"),w.classList.remove("physics-tab--on"),B.setAttribute("aria-selected","true"),w.setAttribute("aria-selected","false"),A.hidden=!1,T.hidden=!0):(B.classList.remove("physics-tab--on"),w.classList.add("physics-tab--on"),B.setAttribute("aria-selected","false"),w.setAttribute("aria-selected","true"),A.hidden=!0,T.hidden=!1)};B.addEventListener("click",()=>R("fine")),w.addEventListener("click",()=>R("presets"));const $=()=>{const i=Ai(),_=Ri();if(i.length===0){const I=document.createElement("p");I.className="settings__presetempty",I.textContent="Сохраненных пресетов нет",T.append(I);return}const N=document.createElement("div");N.className="settings__presets",i.forEach(I=>{const C=document.createElement("button");C.className="settings__presetbtn",C.textContent=I.name,C.type="button",C.setAttribute("role","menuitemradio"),C.setAttribute("aria-checked",String(I.id===_)),C.setAttribute("aria-label",`Пресет физики: ${I.name}`),C.addEventListener("click",()=>{Ti(I.id),R("presets")}),N.append(C)}),T.append(N);const M=document.createElement("button");M.className="settings__presetbtn",M.textContent="Импорт",M.type="button",M.setAttribute("role","menuitem"),M.setAttribute("aria-label","Импорт пресета физики"),M.addEventListener("click",()=>{const I=document.createElement("input");I.type="file",I.accept=".json",I.click(),I.addEventListener("change",async C=>{const F=C.target.files[0];if(!F)return;const j=await F.text(),W=Ii(j);if(!W){console.warn("[settings] Невалидный файл пресета физики");return}bs(W.name??"Импортированный пресет",W.data),T.innerHTML="",$()}),M.parentNode?.replaceChild(I,M),setTimeout(()=>I.click(),100)}),T.append(M);const O=document.createElement("button");O.className="settings__presetbtn",O.textContent="Новый",O.type="button",O.setAttribute("role","menuitem"),O.setAttribute("aria-label","Создать новый пресет физики"),O.addEventListener("click",()=>{bs("Новый пресет",{}),T.innerHTML="",$()}),T.append(O)};$(),R("fine");const D={};for(const i of dt){const _=Ue[i],N=document.createElement("div");N.className="settings__row";const M=document.createElement("label");M.className="settings__head";const O=document.createElement("span");O.textContent=_.label;const I=document.createElement("input");I.type="checkbox",I.checked=te[i],M.append(O,I);const C=document.createElement("div");C.className="settings__vol",C.classList.toggle("settings__vol--off",!te[i]);const P=document.createElement("input");P.type="range",P.min="0",P.max="100",P.step="1",P.value=String(Math.round((se[i]-_.min)/(_.max-_.min)*100)),P.setAttribute("aria-label",`Значение: ${_.label}`);const F=document.createElement("output");F.className="settings__pct settings__pct--val",F.textContent=hs(i);const j=document.createElement("button");j.className="settings__reset",j.type="button",j.textContent="↺",j.title="Сбросить по умолчанию",j.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const W=()=>{I.checked=te[i],C.classList.toggle("settings__vol--off",!te[i]),P.value=String(Math.round((se[i]-_.min)/(_.max-_.min)*100)),F.textContent=hs(i)};D[i]=W,P.addEventListener("input",()=>{const X=_.min+(_.max-_.min)*(Number(P.value)/100);se[i]=Number(X.toFixed(_.decimals)),F.textContent=hs(i),Dt(),$t()}),I.addEventListener("change",()=>{te[i]=I.checked,C.classList.toggle("settings__vol--off",!I.checked),Dt(),$t()}),j.addEventListener("click",()=>{te[i]=!0,se[i]=_.def,W(),Dt(),$t()}),C.append(P,F,j),N.append(M,C),A.append(N)}v.append(A);const z=document.createElement("button");z.className="settings__presetbtn",z.type="button",z.textContent="Сохранить как пресет",z.title="Сохранить текущие настройки физики в пресет",z.addEventListener("click",()=>{const i=prompt("Введите название пресета физики:","");if(i===null||i.trim()==="")return;const _=wr();bs(i.trim(),_),T.innerHTML="",$(),R("presets")}),v.append(z);const G=document.createElement("button");G.className="settings__resetall",G.type="button",G.textContent="Сбросить все настройки физики",G.addEventListener("click",()=>{for(const i of dt)te[i]=!0,se[i]=Ue[i].def,D[i]?.();Dt(),$t()}),E.append(G);const Y=document.createElement("div");Y.className="settings__pane",Y.hidden=!0;const Q=document.createElement("p");Q.className="settings__hint",Q.textContent="Ползунок — уровень света (слева от центра — студия, к правому краю — ярче), ↺ — сброс строки. Свет главного экрана меняется сразу и запоминается. «Гамма-коррекция» — аппаратная (движок держит её как вкл/выкл), а «Сила гаммы» — непрерывный подъём полутонов поверх неё: 1 — как есть, каждый шаг вверх удваивает свет.",Y.append(Q);const ge=document.createElement("div");ge.className="settings__list";const kt={};for(const i of ut){const _=Le[i],N=document.createElement("div");N.className="settings__row";const M=document.createElement("div");M.className="settings__head";const O=document.createElement("span");O.textContent=_.label,M.append(O);const I=document.createElement("div");I.className="settings__vol";const C=document.createElement("input");C.type="range",C.min="0",C.max="100",C.step="1",_.options&&(C.max=String(_.options.length-1)),C.value=String(Ro(i)),C.setAttribute("aria-label",`Освещение: ${_.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=gs(i);const F=document.createElement("button");F.className="settings__reset",F.type="button",F.textContent="↺",F.title="Сбросить по умолчанию",F.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const j=()=>{C.value=String(Ro(i)),P.textContent=gs(i)};kt[i]=j,C.addEventListener("input",()=>{oe[i]=Ui(i,Number(C.value)),P.textContent=gs(i),mn(),fn()}),F.addEventListener("click",()=>{oe[i]=_.def,j(),mn(),fn()}),I.append(C,P,F),N.append(M,I),ge.append(N)}Y.append(ge);const le=document.createElement("button");le.className="settings__resetall",le.type="button",le.textContent="Сбросить все настройки освещения",le.addEventListener("click",()=>{for(const i of ut)oe[i]=Le[i].def,kt[i]?.();mn(),fn()}),Y.append(le);const Pe=document.createElement("div");Pe.className="settings__pane",Pe.hidden=!0;const Ze=document.createElement("p");Ze.className="settings__hint",Ze.textContent="Каскады разбивают дальность теней на несколько карт: у ближней детализация выше, поэтому машина отбрасывает резкую тень даже вдали. Один каскад — одна карта на всю дальность. Меняется сразу, даже в заезде.",Pe.append(Ze);const Ct=document.createElement("div");Ct.className="settings__list";const et={};for(const i of Ge){const _=he[i],N=document.createElement("div");N.className="settings__row";const M=document.createElement("div");M.className="settings__head";const O=document.createElement("span");O.textContent=_.label,M.append(O);const I=document.createElement("div");I.className="settings__vol";const C=document.createElement("input");C.type="range",C.min="0",C.max="100",C.step="1",_.options&&(C.max=String(_.options.length-1)),C.value=String(xs(i,J[i])),C.setAttribute("aria-label",`Тени: ${_.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=_s(i);const F=document.createElement("button");F.className="settings__reset",F.type="button",F.textContent="↺",F.title="Сбросить по умолчанию",F.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const j=()=>{C.value=String(xs(i,J[i])),P.textContent=_s(i)};et[i]=j,C.addEventListener("input",()=>{J[i]=Yi(i,Number(C.value)),P.textContent=_s(i),mt(),Ot()}),F.addEventListener("click",()=>{J[i]=_.def,j(),mt(),Ot()}),I.append(C,P,F),N.append(M,I),Ct.append(N)}Pe.append(Ct);const We=document.createElement("button");We.className="settings__resetall",We.type="button",We.textContent="Сбросить все настройки теней",We.addEventListener("click",()=>{for(const i of Ge)J[i]=he[i].def,et[i]?.();mt(),Ot()}),Pe.append(We);const de=document.createElement("div");de.className="settings__pane",de.hidden=!0;const Ie=document.createElement("p");Ie.className="settings__hint",Ie.textContent="Пост-обработка кадра: ореол вокруг солнца, виньетка, резкость, цветокоррекция и глубина резкости. Главный переключатель снимает всю обработку разом, а TAA включается на вкладке «Графика» — там ему и место, рядом с MSAA. Здесь у него остался только джиттер.",de.append(Ie);const Rn=document.createElement("div");Rn.className="settings__row";const Tn=document.createElement("label");Tn.className="settings__head";const so=document.createElement("span");so.textContent="Пост-обработка включена";const xe=document.createElement("input");xe.type="checkbox",xe.checked=on(),Tn.append(so,xe),xe.addEventListener("change",()=>ws(xe.checked)),Rn.append(Tn),de.append(Rn);const Pn=document.createElement("div");Pn.className="settings__list";const Nt={};for(const i of ze){if(i==="taa")continue;const _=Ae[i],N=document.createElement("div");N.className="settings__row";const M=document.createElement("div");M.className="settings__head";const O=document.createElement("span");O.textContent=_.label,M.append(O);const I=document.createElement("div");I.className="settings__vol";const C=document.createElement("input");C.type="range",C.min="0",C.max="100",C.step="1",_.options&&(C.max=String(_.options.length-1)),C.value=String(To(i,V[i])),C.setAttribute("aria-label",`Post FX: ${_.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=vs(i);const F=document.createElement("button");F.className="settings__reset",F.type="button",F.textContent="↺",F.title="Сбросить по умолчанию",F.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const j=()=>{C.value=String(To(i,V[i])),P.textContent=vs(i)};Nt[i]=j,C.addEventListener("input",()=>{V[i]=gr(i,Number(C.value)),P.textContent=vs(i),Ce(),je()}),F.addEventListener("click",()=>{V[i]=_.def,j(),Ce(),je()}),I.append(C,P,F),N.append(M,I),Pn.append(N)}de.append(Pn);const Lt=document.createElement("button");Lt.className="settings__resetall",Lt.type="button",Lt.textContent="Сбросить все настройки Post FX",Lt.addEventListener("click",()=>{for(const i of ze)V[i]=Ae[i].def,Nt[i]?.();xe.checked=!0,ws(!0),Ce(),je(),st()}),de.append(Lt);const Me=document.createElement("div");Me.className="settings__pane",Me.hidden=!0;const In=document.createElement("p");In.className="settings__hint",In.textContent="Служебные элементы поверх игры. Счётчик кадра живёт в левом верхнем углу на всех экранах; ниже выбирается, из каких строк он состоит.",Me.append(In);const Mn=document.createElement("div");Mn.className="settings__row";const Fn=document.createElement("label");Fn.className="settings__head";const oo=document.createElement("span");oo.textContent="Статистика кадра";const tt=document.createElement("input");tt.type="checkbox",tt.checked=yn(),Fn.append(oo,tt),tt.addEventListener("change",()=>Zo(tt.checked)),Mn.append(Fn),Me.append(Mn);const Bn=document.createElement("p");Bn.className="settings__hint",Bn.textContent="Строки счётчика кадра. Если снять все, панель останется пустой плашкой — обновление текста всё равно стоит кадра, поэтому лишние строки лучше не держать включёнными без нужды.",Me.append(Bn);const Dn=document.createElement("div");Dn.className="settings__row settings__row--stack";const ao={};for(const i of As){const _=document.createElement("label");_.className="settings__check";const N=document.createElement("input");N.type="checkbox",N.checked=me(i);const M=document.createElement("span");M.textContent=er(i),N.addEventListener("change",()=>tr(i,N.checked)),ao[i]=N,_.append(N,M),Dn.append(_)}Me.append(Dn);const ue=document.createElement("div");ue.className="settings__pane",ue.hidden=!0;const $n=document.createElement("p");$n.className="settings__hint",$n.textContent="Сенсорное управление появляется только на устройствах с тач-экраном. Галочка прячет педали совсем; ниже — размер, прозрачность, расположение и схема кнопок. Всё сохраняется в браузере и действует сразу.",ue.append($n);const On=document.createElement("div");On.className="settings__row";const jn=document.createElement("label");jn.className="settings__head";const io=document.createElement("span");io.textContent="Сенсорное управление";const At=document.createElement("input");At.type="checkbox",At.checked=ir(),jn.append(io,At),At.addEventListener("change",()=>rr(At.checked)),On.append(jn),ue.append(On);const Gn=document.createElement("div");Gn.className="settings__row";const zn=document.createElement("label");zn.className="settings__head";const ro=document.createElement("span");ro.textContent="Размер кнопок",zn.append(ro);const Un=document.createElement("div");Un.className="settings__vol";const ae=document.createElement("input");ae.type="range",ae.min="60",ae.max="200",ae.step="5",ae.value=String(Math.round(lr()*100)),ae.setAttribute("aria-label","Размер сенсорных кнопок");const en=document.createElement("output");en.className="settings__pct",en.textContent=`${ae.value}%`,ae.addEventListener("input",()=>{dr(Number(ae.value)/100),en.textContent=`${ae.value}%`}),Un.append(ae,en),Gn.append(zn,Un),ue.append(Gn);const Hn=document.createElement("div");Hn.className="settings__row";const Vn=document.createElement("label");Vn.className="settings__head";const co=document.createElement("span");co.textContent="Прозрачность",Vn.append(co);const Wn=document.createElement("div");Wn.className="settings__vol";const ie=document.createElement("input");ie.type="range",ie.min="25",ie.max="100",ie.step="5",ie.value=String(Math.round(ur()*100)),ie.setAttribute("aria-label","Прозрачность сенсорных кнопок");const tn=document.createElement("output");tn.className="settings__pct",tn.textContent=`${ie.value}%`,ie.addEventListener("input",()=>{mr(Number(ie.value)/100),tn.textContent=`${ie.value}%`}),Wn.append(ie,tn),Hn.append(Vn,Wn),ue.append(Hn);const nt=document.createElement("div");nt.className="settings__pane",nt.hidden=!0;const Yn=document.createElement("div");Yn.className="settings__backend";const Jn=document.createElement("p");Jn.className="settings__hint",Jn.textContent="Масштаб рендера уменьшает число пикселей, которые движок рисует за кадр: картинка мыльнее, но кадры стабильнее. Лимит кадров держит потолок частоты — помогает на ноутбуках от батареи. MSAA применяется при запуске: после его включения страницу нужно перезагрузить. TAA включается живьём и сглаживает всю сцену — его параметры (джиттер, резкость) задаёт выбранный пресет графики.",nt.append(Jn);const _e=(i,_,N,M)=>{const O=document.createElement("div");O.className="settings__row";const I=document.createElement("div");I.className="settings__head";const C=document.createElement("span");C.textContent=i,I.append(C);const P=document.createElement("div");P.className="settings__vol",P.style.flexWrap="wrap";const F=[];for(const[W,X]of _){const H=document.createElement("button");H.className="settings__resetall",H.type="button",H.style.marginTop="0",H.style.flex="1 1 auto",H.style.textTransform="none",H.textContent=X,H.addEventListener("click",()=>{M(W),j()}),F.push(H),P.append(H)}const j=()=>{const W=N();for(let X=0;X<_.length;X++)F[X]?.toggleAttribute("disabled",_[X]?.[0]===W)};return j(),O.append(I,P),{row:O,refresh:j}},Ea=_e("Расположение",[["split","По краям"],["left","Слева"],["right","Справа"]],()=>pr(),i=>{(i==="split"||i==="left"||i==="right")&&fr(i)});ue.append(Ea.row);const Sa=_e("Кнопки крестовины",[["normal","▲ газ, ▼ тормоз"],["swap","▲ тормоз, ▼ газ"]],()=>br()?"swap":"normal",i=>{hr(i==="swap")});ue.append(Sa.row);const Kn=_e("Масштаб рендера",[["0.5","50 %"],["0.75","75 %"],["1","100 %"]],()=>String(oa()),i=>{const _=Number(i);(_===.5||_===.75||_===1)&&Xs(_)}),Xn=_e("Лимит кадров",[["0","Выкл"],["30","30 fps"],["60","60 fps"],["120","120 fps"]],()=>String(aa()),i=>{const _=Number(i);(_===0||_===30||_===60||_===120)&&qs(_)}),qn=document.createElement("div");qn.className="settings__row";const Qn=document.createElement("label");Qn.className="settings__head";const lo=document.createElement("span");lo.textContent="Сглаживание MSAA";const ye=document.createElement("input");ye.type="checkbox",ye.checked=Je(),Qn.append(lo,ye);const nn=document.createElement("span");nn.className="settings__pct";const Rt=()=>{ye.checked=Je(),nn.textContent=Je()?"сцена — сразу, интерфейс — после перезагрузки":""};Rt(),ye.addEventListener("change",()=>{Wt(ye.checked),ye.checked&&ys("taa")>0&&(V.taa=0,Ce(),je()),Rt(),st()}),qn.append(Qn,nn);const Zn=document.createElement("div");Zn.className="settings__row";const es=document.createElement("label");es.className="settings__head";const uo=document.createElement("span");uo.textContent="Временное сглаживание TAA";const we=document.createElement("input");we.type="checkbox",we.checked=ys("taa")>0,es.append(uo,we);const ts=document.createElement("span");ts.className="settings__pct";const ka=.1,Ca=.5,st=()=>{const i=ys("taa")>0;we.checked=i,ts.textContent=i?"работает сразу":"включит пост-обработку"};st(),we.addEventListener("change",()=>{V.taa=we.checked?1:0,we.checked&&!on()&&(ws(!0),xe.checked=!0),we.checked&&V.taaJitter<ka&&(V.taaJitter=Ca,Nt.taaJitter?.()),we.checked&&Je()&&(Wt(!1),Rt()),Ce(),je(),st()}),Zn.append(es,ts);const ns=_e("Пресет графики",[["phone","Телефон"],["balanced","Оптимальный"],["ultra","Ультра"]],()=>Cr(),i=>{if(!(i!=="phone"&&i!=="balanced"&&i!=="ultra")){sa(i),Kn.refresh(),Xn.refresh(),ns.refresh(),ye.checked=Je(),nn.textContent=Je()?"применится после перезагрузки":"",Rt(),st();for(const _ of Ge)et[_]?.();for(const _ of ze)Nt[_]?.();xe.checked=on()}}),ss=document.createElement("p");ss.className="settings__hint",ss.textContent="Рендер: WebGL2 работает везде, WebGPU даёт больше эффектов, но на части телефонов подвисает на первом кадре. Смена бэкенда пересобирает движок и перезагружает сцену.",nt.append(ss,Yn,ns.row,Kn.row,Xn.row,qn,Zn);const Ye=document.createElement("div");Ye.className="settings__pane",Ye.hidden=!0;const os=document.createElement("p");os.className="settings__hint",os.textContent="Разрешение и частота записи — насколько дорого кодировать. Качество кодека — насколько жирный файл: чем выше, тем чётче картинка и тем сильнее просядет игра во время записи. Всё применяется к следующему нажатию «Запись».",Ye.append(os);const as=document.createElement("div");as.className="settings__recordslot",Ye.append(as);const is=document.createElement("div");is.className="settings__row";const rs=document.createElement("label");rs.className="settings__head";const mo=document.createElement("span");mo.textContent="Звук в файле";const ot=document.createElement("input");ot.type="checkbox",ot.checked=Ps(),rs.append(mo,ot),ot.addEventListener("change",()=>pa(ot.checked)),is.append(rs);const po=_e("Разрешение",[["1280","720p"],["1920","1080p"],["window","Как на экране"]],()=>String(nr()),i=>{if(i==="window"){Rs("window");return}(i==="1280"||i==="1920")&&Rs(Number(i))}),fo=_e("Частота записи",[["24","24 fps"],["30","30 fps"],["60","60 fps"]],()=>String(ra()),i=>{const _=Number(i);(_===24||_===30||_===60)&&da(_)}),bo=_e("Качество кодека",[["low","Низкое"],["medium","Среднее"],["high","Высокое"]],()=>ca(),i=>{(i==="low"||i==="medium"||i==="high")&&ua(i)}),ho=_e("Ключевой кадр",[["1","1 с"],["2","2 с"],["4","4 с"]],()=>String(la()),i=>{const _=Number(i);(_===1||_===2||_===4)&&ma(_)});Ye.append(is,po.row,fo.row,bo.row,ho.row);const at=document.createElement("div");at.className="settings__pane",at.hidden=!0;const cs=document.createElement("p");cs.className="settings__hint",cs.textContent="Пресет — это все настройки разом: физика, свет, тени, Post FX, звук и интерфейс. Активный пресет применяется при запуске и одинаково работает во всех сценах. Имя нового пресета — дата и время до минуты.",at.append(cs);const ee=document.createElement("p");ee.className="settings__status",ee.setAttribute("role","status"),ee.textContent="";const ls=document.createElement("div");ls.className="settings__presetnamefield";const ve=document.createElement("input");ve.type="text",ve.value=Oe(),ve.placeholder="Название пресета",ve.setAttribute("aria-label","Название нового пресета");const Tt=document.createElement("button");Tt.className="settings__presetbtn",Tt.type="button",Tt.textContent="Сохранить",ls.append(ve,Tt);const Na=document.createElement("div");Na.className="settings__row";const Pt=document.createElement("button");Pt.className="settings__resetall",Pt.type="button",Pt.textContent="Обновить активный пресет",Pt.addEventListener("click",()=>{const i=_n();if(!i){ee.textContent="Активного пресета нет — сохраните новый.";return}Vo(i,pt()),ee.textContent="Текущие настройки записаны в активный пресет.",Be()});const It=document.createElement("button");It.className="settings__resetall",It.type="button",It.textContent="Импорт из файла";const Fe=document.createElement("input");Fe.type="file",Fe.accept="application/json,.json",Fe.hidden=!0,It.addEventListener("click",()=>Fe.click()),Fe.addEventListener("change",()=>{const i=Fe.files?.[0];Fe.value="",i&&(async()=>{try{const _=Ei(await i.text());if(!_){ee.textContent="Это не файл настроек игры.";return}const N=lt(_.data);if(N.applied.length===0){ee.textContent="В файле нет знакомых настроек.";return}const M=ct(_.name??i.name.replace(/\.json$/i,""),_.data,_.created??Date.now());Ls(M.id),ds(),Be(),ve.value=Oe(),ee.textContent=`Импортировано «${M.name}»: ${N.applied.join(", ")}`}catch(_){ee.textContent=`Не удалось прочитать файл: ${_ instanceof Error?_.message:"ошибка чтения"}`}})()});const Mt=document.createElement("button");Mt.className="settings__resetall",Mt.type="button",Mt.textContent="Убрать все пресеты",Mt.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты? Настройки останутся как есть.")&&(wi(),ds(),Be(),ee.textContent="Пресеты удалены, текущие настройки не тронуты.")});const Ft=document.createElement("div");Ft.className="settings__presets";const ds=()=>{for(const i of dt)D[i]?.();for(const i of ut)kt[i]?.();for(const i of Ge)et[i]?.();for(const i of ze)Nt[i]?.();for(const i of Ko)m[i]?.();xe.checked=on(),tt.checked=yn();for(const i of As){const _=ao[i];_&&(_.checked=me(i))}ye.checked=Je(),Rt(),st(),Kn.refresh(),Xn.refresh(),ns.refresh(),po.refresh(),fo.refresh(),bo.refresh(),ho.refresh(),ot.checked=Ps()},La=(i,_)=>{const N=Ns().find(O=>O.id===i);if(!N)return;const M=lt(N.data);Ls(i),ds(),ee.textContent=M.applied.length>0?`Применён пресет «${_}»: ${M.applied.join(", ")}`:`В пресете «${_}» нет знакомых настроек.`},go=i=>i>0?Oe(new Date(i)):"дата неизвестна",Be=()=>{Ft.replaceChildren();const i=Ns(),_=_n();if(i.length===0){const N=document.createElement("p");N.className="settings__presetempty",N.textContent="Пресетов пока нет. Настройте всё как надо и нажмите «Сохранить».",Ft.append(N);return}for(const N of i){const M=document.createElement("div");M.className="settings__preset";const O=N.id===_;O&&M.classList.add("settings__preset--active");const I=document.createElement("div");I.className="settings__presetinfo";const C=document.createElement("span");C.className="settings__presetname",C.textContent=N.name;const P=document.createElement("span");P.className="settings__presetmeta",P.textContent=O?`${go(N.created)} · активен`:go(N.created),I.append(C,P);const F=document.createElement("button");F.className="settings__presetbtn",F.type="button",F.textContent="✎",F.title="Переименовать",F.setAttribute("aria-label",`Переименовать пресет ${N.name}`),F.addEventListener("click",()=>{const H=document.createElement("input");H.className="settings__presetnameinput",H.type="text",H.value=N.name,C.replaceWith(H),H.focus(),H.select();const xo=()=>{_i(N.id,H.value),Be()};H.addEventListener("keydown",ms=>{ms.key==="Enter"&&xo(),ms.key==="Escape"&&(ms.stopPropagation(),Be())}),H.addEventListener("blur",xo)});const j=document.createElement("button");j.className="settings__presetbtn",j.type="button",j.textContent="Применить",j.disabled=O,j.addEventListener("click",()=>La(N.id,N.name));const W=document.createElement("button");W.className="settings__presetbtn",W.type="button",W.textContent="↓",W.title="Экспорт в файл",W.setAttribute("aria-label",`Экспорт пресета ${N.name} в файл`),W.addEventListener("click",()=>vi(N));const X=document.createElement("button");X.className="settings__presetbtn settings__presetbtn--danger",X.type="button",X.textContent="✕",X.title="Удалить",X.setAttribute("aria-label",`Удалить пресет ${N.name}`),X.addEventListener("click",()=>{window.confirm(`Удалить пресет «${N.name}»?`)&&(yi(N.id),Be(),ee.textContent=`Пресет «${N.name}» удалён.`)}),M.append(I,j,F,W,X),Ft.append(M)}};Tt.addEventListener("click",()=>{const i=ct(ve.value||Oe(),pt());ve.value=Oe(),Be(),ee.textContent=`Сохранён пресет «${i.name}».`}),at.append(ls,Ft,Pt,It,Mt,Fe,ee),Be();const us=document.createElement("div");us.className="settings__scroll",us.append(S,E,Y,Pe,de,Me,ue,nt,Ye,at),n.append(s,a,us),e.append(t,n),document.body.append(e);function Aa(){e.hidden=!1,ve.value=Oe()}function Ra(){e.hidden=!0}return{root:e,backendSlot:Yn,recordSlot:as,open:Aa,close:Ra}}const Mr=300;function Fr(e={}){let t=0,n=!1;const s=()=>{const l=_n();if(!l){n||(n=!0,e.onNoPreset?.());return}const c=pt();if(!Vo(l,c))return;n=!1;const p=_n();p&&e.onSaved?.(p)},a=$i(()=>{vr()||(window.clearTimeout(t),t=window.setTimeout(s,Mr))}),r=()=>{t!==0&&(window.clearTimeout(t),t=0,s())};return document.addEventListener("visibilitychange",r),window.addEventListener("pagehide",r),{flush(){t!==0&&(window.clearTimeout(t),t=0,s())},destroy(){window.clearTimeout(t),t=0,a(),document.removeEventListener("visibilitychange",r),window.removeEventListener("pagehide",r)}}}const Br="https://vk.ru/H360ru";function Dr(){const e=document.createElement("div"),t=document.createElement("p");t.className="dlg__empty",t.textContent="Описание игры скоро появится. Пока сюда можно поставить правила, список техники и ссылку на сервер.";const n=document.createElement("a");n.className="dlg__link",n.href=Br,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Группа игры во «ВКонтакте»",e.append(t,n);const s=Cn({title:"Об игре",body:e});return{dialog:s,open(){s.open()},destroy(){s.destroy()}}}let fa=null;function Zs(e){fa=e}function Ke(){return fa?.()??null}const $r={yaw:0,lift:0,zoom:1,shoulder:1,distance:6.4,height:2.5,fov:60},Po=["yaw","lift","zoom","distance","height","fov"],Io={yaw:{label:"Поворот",min:-180,max:180,step:1,unit:"°"},lift:{label:"Наклон",min:-.6,max:3.4,step:.1,unit:" м"},zoom:{label:"Зум",min:.55,max:1.7,step:.01,unit:"×"},distance:{label:"Дистанция",min:3,max:15,step:.1,unit:" м"},height:{label:"Высота",min:1,max:6,step:.1,unit:" м"},fov:{label:"Обзор (fov)",min:40,max:90,step:1,unit:"°"}},ba="blendars.camera-views.v1";function Es(){try{const e=localStorage.getItem(ba);if(!e)return[];const t=JSON.parse(e);if(!t||typeof t!="object")return[];const n=t.list;if(!Array.isArray(n))return[];const s=[];for(const o of n){if(!o||typeof o!="object")continue;const a=o;if(typeof a.id!="string"||!a.id)continue;const r=a.view;if(!r||typeof r!="object")continue;const l=r,c=(p,k)=>typeof p=="number"&&Number.isFinite(p)?p:k;s.push({id:a.id,name:typeof a.name=="string"&&a.name?a.name:"Без имени",created:typeof a.created=="number"?a.created:0,view:{yaw:c(l.yaw,0),lift:c(l.lift,0),zoom:c(l.zoom,1),shoulder:c(l.shoulder,1),distance:c(l.distance,6.4),height:c(l.height,2.5),fov:c(l.fov,60)}})}return s}catch{return[]}}function Mo(e){try{localStorage.setItem(ba,JSON.stringify({list:e}))}catch{}}function Or(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const jr=`
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
`;function Gr(){if(document.getElementById("camv-style"))return;const e=document.createElement("style");e.id="camv-style",e.textContent=jr,document.head.append(e)}function zr(){Gr();const e=document.createElement("div"),t=document.createElement("p");t.className="camv__hint";const n={},s=document.createElement("div");for(const d of Po){const m=Io[d],E=document.createElement("div");E.className="camv__row";const f=document.createElement("div");f.className="camv__head";const L=document.createElement("span");L.textContent=m.label;const B=document.createElement("span");B.className="camv__val",f.append(L,B);const w=document.createElement("input");w.type="range",w.min=String(m.min),w.max=String(m.max),w.step=String(m.step),w.setAttribute("aria-label",m.label),w.addEventListener("input",()=>{const v=Number(w.value);Ke()?.write({[d]:v}),B.textContent=`${w.value}${m.unit}`}),E.append(f,w),s.append(E),n[d]={input:w,out:B}}const o=document.createElement("div");o.className="camv__btns";const a=[],r=[[-1,"Слева"],[0,"Центр"],[1,"Справа"]];for(const[d,m]of r){const E=document.createElement("button");E.className="camv__btn",E.type="button",E.textContent=m,E.addEventListener("click",()=>{Ke()?.write({shoulder:d}),l(d)}),a.push(E),o.append(E)}const l=d=>{for(let m=0;m<r.length;m++)a[m]?.classList.toggle("camv__btn--on",r[m]?.[0]===d)},c=document.createElement("button");c.className="camv__btn",c.type="button",c.textContent="Сбросить вид (C)",c.addEventListener("click",()=>{Ke()?.reset(),y()});const p=document.createElement("div");p.className="camv__save";const k=document.createElement("input");k.type="text",k.placeholder="Название ракурса",k.setAttribute("aria-label","Название нового ракурса");const h=document.createElement("button");h.className="camv__btn",h.type="button",h.textContent="Сохранить",p.append(k,h);const g=document.createElement("div");g.className="camv__list";const u=document.createElement("p");u.className="camv__status",u.setAttribute("role","status"),u.textContent="",e.append(t,s,o,c,p,g,u);const b=Cn({title:"Ракурсы камеры",body:e}),x=(d,m)=>{const E=Io[d];return`${d==="zoom"?m.toFixed(2):String(m)}${E.unit}`},y=()=>{const d=Ke(),m=d?.read()??$r,E=d!==null;t.textContent=E?"Ракурс меняется живьём. Тяните сцену мышью или пальцем (влево — экран влево), колесо или щипок — расстояние, C — сброс.":"Откройте сцену с машиной — здесь появится текущий ракурс.";for(const f of Po){const L=n[f];L&&(L.input.value=String(m[f]),L.input.disabled=!E,L.out.textContent=x(f,m[f]))}for(const f of a)f.disabled=!E;l(m.shoulder),c.disabled=!E,h.disabled=!E,k.disabled=!E,S()},S=()=>{g.replaceChildren();const d=Es();if(d.length===0){const m=document.createElement("p");m.className="camv__empty",m.textContent="Сохранённых ракурсов пока нет.",g.append(m);return}for(const m of d){const E=document.createElement("div");E.className="camv__item";const f=document.createElement("span");f.className="camv__name",f.textContent=m.name;const L=document.createElement("button");L.className="camv__btn",L.type="button",L.textContent="Применить",L.disabled=Ke()===null,L.addEventListener("click",()=>{const w=Ke();w&&(w.write({...m.view}),y(),u.textContent=`Применён ракурс «${m.name}».`)});const B=document.createElement("button");B.className="camv__btn",B.type="button",B.textContent="✕",B.title="Удалить",B.setAttribute("aria-label",`Удалить ракурс ${m.name}`),B.addEventListener("click",()=>{Mo(Es().filter(w=>w.id!==m.id)),S(),u.textContent=`Ракурс «${m.name}» удалён.`}),E.append(f,L,B),g.append(E)}};return h.addEventListener("click",()=>{const d=Ke();if(!d)return;const m=Date.now(),E={id:Or(m),name:k.value.trim()||Oe(new Date(m)),created:m,view:{...d.read()}},f=Es();f.push(E),Mo(f),k.value="",S(),u.textContent=`Сохранён ракурс «${E.name}».`}),{dialog:b,open(){y(),b.open()},destroy(){b.destroy()}}}const Ur=[{hash:"6f17f25",date:"2026-10-08",subject:"HUD в канвас, UI-аудиошина, Draco/KTX2-ассеты"},{hash:"ad022dc",date:"2026-10-08",subject:"Fix WGSL shader: declare material_diffuse and view_position uniforms in terrain-splat"},{hash:"a206a10",date:"2026-10-08",subject:"Rebuild dist with base /blend-ars/ (GitHub Pages)"},{hash:"15fdf63",date:"2026-10-08",subject:"Deploy built site from dist; path dist in Pages workflow"},{hash:"942a7cc",date:"2026-10-08",subject:"Remove project sources; keep .github and .gitignore"},{hash:"da0f40e",date:"2026-10-08",subject:"Create static.yml"},{hash:"2691051",date:"2026-10-08",subject:"Delete .github/workflows/static.yml"},{hash:"98c2349",date:"2026-10-08",subject:"Delete .github/workflows/npm-publish-github-packages.yml"},{hash:"3ce584f",date:"2026-10-08",subject:"Update static.yml"},{hash:"128f22b",date:"2026-10-03",subject:"Create npm-publish-github-packages.yml"},{hash:"c8e16ab",date:"2026-10-03",subject:"Create static.yml"},{hash:"5a46d53",date:"2026-10-03",subject:"feat(scene): выбор кузова грузовик/Maserati, Maserati в меню, откат WebGPU→WebGL2"},{hash:"5c65165",date:"2026-10-03",subject:"feat(menu): экран загрузки с прогрессом + процедурный 3D-фон меню"},{hash:"1faa7f1",date:"2026-10-03",subject:"test(stage-0): браузерная проверка рендера, smoke-сцена, иконки-заглушки"},{hash:"4f12113",date:"2026-10-03",subject:"feat(stage-0): bootstrap Vite + ленивый PlayCanvas + тулинг бюджетов"},{hash:"eb68f3c",date:"2026-10-03",subject:"docs: rewrite README for PlayCanvas/Colyseus web stack"},{hash:"34ff9ca",date:"2026-10-03",subject:"chore: remove legacy Godot+Nakama tree and web export"},{hash:"9018d77",date:"2026-10-02",subject:"Create FUNDING.yml"},{hash:"7f64ab1",date:"2026-09-30",subject:"Add files via upload"},{hash:"5b7ab23",date:"2026-09-30",subject:"Add files via upload"},{hash:"ebb8901",date:"2026-03-19",subject:"mv"},{hash:"3c3fc26",date:"2026-03-19",subject:"fix: обновлен .gitignore и удалены системные файлы"},{hash:"0e075c9",date:"2026-03-19",subject:"up"},{hash:"9309069",date:"2026-03-19",subject:"upd"},{hash:"b82f5bc",date:"2026-03-19",subject:"docs: оновлення правил проекту"},{hash:"a19f06e",date:"2026-03-19",subject:"up"},{hash:"45bb3b3",date:"2026-03-19",subject:"new rules by demiurgos 19_1"},{hash:"7519417",date:"2026-02-27",subject:"Update README.md"},{hash:"58a3447",date:"2026-02-27",subject:"**BLEND ARS: Initial Project Setup and Development Notice**"},{hash:"60a150e",date:"2026-02-27",subject:"upd"},{hash:"eae4946",date:"2026-02-27",subject:"Exclude addons folder from tracking"},{hash:"cfe0473",date:"2026-02-27",subject:"upd"},{hash:"94b5e5d",date:"2026-02-24",subject:"uikit up"},{hash:"17b03ea",date:"2026-02-24",subject:"mv"},{hash:"c8e9bf6",date:"2026-02-24",subject:"апдейт"},{hash:"48511ce",date:"2026-02-24",subject:"ui_kit"},{hash:"ad054cb",date:"2026-02-24",subject:"up"},{hash:"73e2c24",date:"2026-02-22",subject:"Update 00-core.md"},{hash:"8d20bc4",date:"2026-02-22",subject:"Create 05-ui-perf.md"},{hash:"cf17f7a",date:"2026-02-22",subject:"Update and rename 04-mcp-workflow.md to 04-ui-theme.md"},{hash:"93f52ae",date:"2026-02-22",subject:"Update and rename 03-gdscript-standards.md to 03-ui-core.md"},{hash:"ff72202",date:"2026-02-22",subject:"Update and rename 02-ui-scifi.md to 02-workflow.md"},{hash:"a533398",date:"2026-02-22",subject:"Rename 00-global.md to 00-core.md"},{hash:"134cacc",date:"2026-02-22",subject:"Update and rename 01-mmo-coder.md to 01-gdscpipt.md"},{hash:"bbd1850",date:"2026-02-22",subject:"Update 00-global.md"},{hash:"2096da3",date:"2026-02-20",subject:"Create FUNDING.yml"},{hash:"10fb83e",date:"2026-02-18",subject:"главное меню и экраны настроек"},{hash:"f18331f",date:"2026-02-18",subject:"docs: restructure and improve .cursorrules configuration"},{hash:"a09766e",date:"2026-02-18",subject:"загрузка"},{hash:"3fd518a",date:"2026-02-16",subject:"update branch"}];function Hr(){const e=Ur;if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,o=s.hash,a=s.date,r=s.subject;typeof o!="string"||typeof r!="string"||t.push({hash:o,date:typeof a=="string"?a:"",subject:r})}return t}function Vr(){const e=Hr(),t=document.createElement("div");if(e.length===0){const s=document.createElement("p");s.className="dlg__empty",s.textContent="Журнал пока пуст: сборка сделана без истории git.",t.append(s)}else{const s=document.createElement("p");s.className="devlog__meta",s.textContent=`Последние ${e.length} изменений`;const o=document.createElement("ul");o.className="devlog__list";for(const a of e){const r=document.createElement("li");r.className="devlog__item";const l=document.createElement("span");l.className="devlog__hash",l.textContent=a.hash;const c=document.createElement("span");c.className="devlog__date",c.textContent=a.date;const p=document.createElement("span");p.className="devlog__subject",p.textContent=a.subject,r.append(l,c,p),o.append(r)}t.append(s,o)}const n=Cn({title:"Журнал разработки",body:t});return{dialog:n,open(){n.open()},destroy(){n.destroy()}}}function an(e,t,n,s){const o=document.createElement("button");return o.className=e,o.type="button",o.style.setProperty("--tb-icon",`url(${JSON.stringify(t)})`),o.title=n,o.setAttribute("aria-label",n),o.addEventListener("pointerdown",a=>{a.preventDefault(),!o.disabled&&s()}),o}const Wr=`
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
`;function Yr(){const e=document.createElement("button");e.className="tb__btn",e.type="button";const t=()=>document.fullscreenElement!==null,n=()=>{const s=t(),o=s?Ya:Wa;e.style.setProperty("--tb-icon",`url(${JSON.stringify(o)})`);const a=s?"Выйти из полноэкранного режима":"Полноэкранный режим";e.title=a,e.setAttribute("aria-label",a),e.setAttribute("aria-pressed",s?"true":"false")};return e.addEventListener("pointerdown",s=>{s.preventDefault(),!e.disabled&&(t()?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{}))}),document.addEventListener("fullscreenchange",n),n(),{el:e,destroy(){document.removeEventListener("fullscreenchange",n)}}}async function Jr(){return(await q(()=>import("./music-player.B3rPUW-E.js"),__vite__mapDeps([0,1,2]))).createMusicPlayer()}function Kr(e){const t=document.createElement("style");t.textContent=Wr;const n=document.createElement("header");n.className="tb";const s=document.createElement("div");s.className="tb__slot",s.append(e.statsHost);const o=document.createElement("div");o.className="tb__center";const a=document.createElement("h1");a.className="tb__title",a.textContent=e.title,o.append(a);const r=document.createElement("div");r.className="tb__slot tb__slot--right";const l=document.createElement("div");l.className="tb__extra";const c=Yr(),p=Dr(),k=Vr(),h=zr(),g=document.createElement("button");g.className="tb__btn tb__btn--close",g.type="button",g.style.setProperty("--tb-icon",`url(${JSON.stringify(oi)})`),g.title="Скрыть панель",g.setAttribute("aria-label","Скрыть панель");const u=document.createElement("span");u.className="tb__cap",u.innerHTML="Скрыть<br>панель",g.append(u),g.addEventListener("pointerdown",d=>{d.preventDefault(),!g.disabled&&e.onToggleChrome()});let b=null,x=null;const y=an("tb__btn",qa,"Музыка",()=>{const d=m=>{m.open(),e.windows.open("music")};if(x!==null){d(x);return}b??=Jr(),b.then(m=>{x=m,e.windows.register({id:"music",root:m.dialog.root,show:()=>m.open(),hide:()=>m.dialog.close()}),d(m)}).catch(()=>{})});r.append(l,an("tb__btn",Xa,"Ракурсы камеры",()=>{h.open(),e.windows.open("camera")}),an("tb__btn",Ka,"Журнал разработки",()=>{k.open(),e.windows.open("devlog")}),an("tb__btn",Ja,"Об игре",()=>{p.open(),e.windows.open("about")}),y,g,c.el),s.classList.add("tb__slot--left"),n.append(t,s,o,r),e.windows.register({id:"camera",root:h.dialog.root,show:()=>h.open(),hide:()=>h.dialog.close()}),e.windows.register({id:"about",root:p.dialog.root,show:()=>p.open(),hide:()=>p.dialog.close()}),e.windows.register({id:"devlog",root:k.dialog.root,show:()=>k.open(),hide:()=>k.dialog.close()});const S=[qe(n),qe(p.dialog.root),ln(p.dialog.root),qe(k.dialog.root),ln(k.dialog.root),qe(h.dialog.root),ln(h.dialog.root)];return{root:n,setExtraButtons(d){l.append(d)},setBackButton(d){s.prepend(d)},setSceneMode(d){n.classList.toggle("tb--scene",d)},destroy(){c.destroy(),p.destroy(),k.destroy(),h.destroy();for(const d of S)d();x?.destroy(),n.remove()}}}const Xr=`
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
`;function qr(e={}){const t=document.createElement("style");t.textContent=Xr;const n=document.createElement("div");n.className="win";const s=document.createElement("div");s.className="win__bar";const o=document.createElement("button");o.className="win__close",o.type="button",o.textContent="✕",o.title="Закрыть окно",o.setAttribute("aria-label","Закрыть окно"),s.append(o);const a=document.createElement("p");a.className="win__empty",a.textContent="",a.setAttribute("aria-hidden","true"),n.append(t,a),document.body.append(s);const r=new Map,l=[];let c=null,p=null;const k=()=>{for(const f of r.values()){const L=f.id===c;f.root.hidden=!L,L?f.show():f.hide()}n.classList.toggle("win--open",c!==null),s.classList.toggle("win--open",c!==null);for(const f of l)f();h()},h=()=>{const f=n.getBoundingClientRect();if(f.width<=0||f.height<=0)return;const L=document.documentElement.style;L.setProperty("--win-left",`${Math.round(f.left)}px`),L.setProperty("--win-top",`${Math.round(f.top)}px`),L.setProperty("--win-width",`${Math.round(f.width)}px`),L.setProperty("--win-height",`${Math.round(f.height)}px`)},g={root:n,closeBtn:o,register(f){r.set(f.id,f),f.hide(),f.root.hidden=!0},open(f){r.has(f)&&(c=f,p={x,y,until:performance.now()+d},k())},close(){c!==null&&(c=null,k())},toggle(f){c===f?g.close():g.open(f)},active(){return c},onChange(f){return l.push(f),()=>{const L=l.indexOf(f);L>=0&&l.splice(L,1)}},destroy:()=>{}};o.addEventListener("pointerdown",f=>{f.preventDefault(),g.close()});const u=new ResizeObserver(h);u.observe(n),window.addEventListener("resize",h),window.addEventListener("orientationchange",h),h();const b=f=>{f.key==="Escape"&&(c!==null?(f.stopPropagation(),g.close()):e.onEmptyEscape?.())};document.addEventListener("keydown",b);let x=0,y=0;const S=f=>{x=f.clientX,y=f.clientY},d=400,m=32,E=f=>{if(c===null)return;const L=r.get(c);if(!L||L.root.hidden)return;const B=f.target;if(!(B instanceof Element)||L.root.contains(B))return;const w=p;if(w!==null&&performance.now()<w.until){const T=f.clientX-w.x,R=f.clientY-w.y;if(T*T+R*R<=m*m)return}if(B.closest(".tb")!==null)return;const v=f.clientX-x,A=f.clientY-y;v*v+A*A>64||g.close()};return document.addEventListener("pointerdown",S,!0),document.addEventListener("click",E),g.destroy=()=>{u.disconnect(),window.removeEventListener("resize",h),window.removeEventListener("orientationchange",h),document.removeEventListener("keydown",b),document.removeEventListener("pointerdown",S,!0),document.removeEventListener("click",E),s.remove();const f=document.documentElement.style;f.removeProperty("--win-left"),f.removeProperty("--win-top"),f.removeProperty("--win-width"),f.removeProperty("--win-height")},g}const Qr=`
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
    src: url(${JSON.stringify(Oo)}) format('truetype');
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
`,Zr={idle:"",starting:"готовлю…",recording:"идёт",encoding:"упаковываю файл…",saving:"сохраняю…",error:"не вышло"},ec=["recording","encoding","saving"],Ss=["Одно не рождается без другого: оболочка без души лишь кукла, душа без оболочки — призрак.","Сон совести рождает чудовищ.","У нас нет формы, и мы страшимся этого.","В здравом теле, витает здравый дух, а значит и душа."];class tc{statsHost;clusterHost;settings;windows;root;playBtn;backBtn;settingsItem;modes;actionsEl;midEl;statusEl;statusText;recordRow;recordBtn;recordDot;recordLabel;recordState;recordBar;recordFill;idleIndex=-1;topbar;chromeHidden=!1;autosave;uiSoundDetach=[];constructor(t,n){this.root=document.createElement("div"),this.root.className="menu";const s=document.createElement("style");s.textContent=Qr,this.windows=qr({onEmptyEscape:()=>{this.setChromeHidden(!this.chromeHidden)}}),this.statsHost=document.createElement("div"),this.topbar=Kr({statsHost:this.statsHost,title:"BLEND ARS",subtitle:"",windows:this.windows,onToggleChrome:()=>{this.setChromeHidden(!0)}}),this.playBtn=document.createElement("button"),this.playBtn.className="play play--go",this.playBtn.type="button",this.playBtn.textContent="Играть",this.playBtn.addEventListener("pointerdown",g=>{g.preventDefault(),!this.playBtn.disabled&&(pe("click"),this.modes.open(),this.windows.open("modes"))});const o=document.createElement("ul");o.className="actions__list";const a=[["Контейнеры",Qa],["Миссии",Za],["Гараж",ei],["Магазин",ti]];for(const[g,u]of a){const b=document.createElement("li"),x=document.createElement("button");x.className="mitem",x.type="button",x.textContent=g,x.disabled=!0,x.title=`${g}: раздел в разработке`,x.style.setProperty("--mitem-icon",`url(${JSON.stringify(u)})`),b.append(x),o.append(b)}this.settingsItem=document.createElement("button"),this.settingsItem.className="mitem",this.settingsItem.type="button",this.settingsItem.textContent="Настройки",this.settingsItem.style.setProperty("--mitem-icon",`url(${JSON.stringify(Co)})`),this.settingsItem.addEventListener("pointerdown",g=>{g.preventDefault(),!this.settingsItem.disabled&&(pe("click"),this.openSettings())});{const g=document.createElement("li");g.append(this.settingsItem),o.append(g)}this.modes=fi(g=>{pe("click"),this.modes.dialog.close(),this.windows.close(),n.onScene(g)}),this.backBtn=document.createElement("button"),this.backBtn.className="tb__back",this.backBtn.type="button",this.backBtn.textContent="Назад",this.backBtn.style.setProperty("--tb-icon",`url(${JSON.stringify(ii)})`),this.backBtn.title="Вернуться в меню",this.backBtn.setAttribute("aria-label","Вернуться в меню"),this.backBtn.style.display="none",this.backBtn.addEventListener("pointerdown",g=>{g.preventDefault(),pe("click"),n.onBack?.()}),this.settings=Ir();const r=document.createElement("button");r.className="tb__btn",r.type="button",r.style.setProperty("--tb-icon",`url(${JSON.stringify(Co)})`),r.title="Настройки",r.setAttribute("aria-label","Настройки"),r.addEventListener("pointerdown",g=>{g.preventDefault(),!r.disabled&&(pe("click"),this.openSettings())});const l=document.createElement("div");l.className="tb__extra",l.append(r),this.topbar.setExtraButtons(l),this.topbar.setBackButton(this.backBtn);const c=document.createElement("div");c.className="actions",c.append(this.playBtn,o),this.actionsEl=c,this.statusText=document.createElement("div"),this.statusText.className="status__text",this.statusText.textContent=this.pickIdlePhrase(),this.recordRow=document.createElement("div"),this.recordRow.className="status__record",this.recordRow.hidden=!0,this.recordBtn=document.createElement("button"),this.recordBtn.className="status__recordbtn",this.recordBtn.type="button",this.recordDot=document.createElement("span"),this.recordDot.className="status__dot",this.recordLabel=document.createElement("span"),this.recordLabel.textContent="Запись",this.recordBtn.append(this.recordDot,this.recordLabel),this.recordBtn.addEventListener("pointerdown",g=>{g.preventDefault(),!this.recordBtn.disabled&&(pe("click"),n.onRecord?.())}),this.recordState=document.createElement("span"),this.recordState.className="status__recordstate",this.recordState.textContent="",this.recordBar=document.createElement("div"),this.recordBar.className="status__recordbar",this.recordFill=document.createElement("span"),this.recordBar.append(this.recordFill),this.recordBar.style.display="none",this.recordRow.append(this.recordBtn,this.recordState,this.recordBar),this.statusEl=document.createElement("div"),this.statusEl.className="status",this.clusterHost=document.createElement("div"),this.clusterHost.className="status__cluster",this.statusEl.append(this.clusterHost),this.statusText.setAttribute("role","status"),this.statusText.setAttribute("aria-live","polite"),this.statusEl.append(this.statusText),this.settings.recordSlot.append(this.recordRow);const p=document.createElement("div");p.className="mid",p.append(c,this.windows.root),this.actionsEl=c,this.midEl=p;const k=document.createElement("div");k.className="wrap",k.append(p);const h=document.createElement("button");h.className="chrome-fab",h.type="button",h.style.setProperty("--fab-icon",`url(${JSON.stringify(ai)})`),h.title="Показать интерфейс",h.setAttribute("aria-label","Показать интерфейс"),h.addEventListener("pointerdown",g=>{g.preventDefault(),pe("click"),this.setChromeHidden(!1)}),this.root.append(s,this.topbar.root,k,this.statusEl,h),t.append(this.root),li(()=>_r("uiClick")),di(),this.uiSoundDetach.push(qe(this.root),qe(this.settings.root),ln(this.settings.root),qe(this.modes.dialog.root)),this.windows.register({id:"settings",root:this.settings.root,show:()=>this.settings.open(),hide:()=>this.settings.close()}),this.windows.register({id:"modes",root:this.modes.dialog.root,show:()=>this.modes.open(),hide:()=>this.modes.dialog.close()}),this.settings.close(),this.autosave=Fr({onSaved:g=>{this.setStatus(`Настройки сохранены в пресет «${g}».`)},onNoPreset:()=>{this.setStatus("Настройки применены, но активного пресета нет — сохранять некуда. Сохраните пресет на вкладке «Пресеты».")}})}openSettings(){this.settings.open(),this.windows.open("settings")}setMode(t){const n=t==="scene";this.playBtn.style.display=n?"none":"",this.backBtn.style.display=n?"":"none",this.recordRow.hidden=!n,n&&(this.modes.dialog.close(),this.windows.close()),this.setChromeHidden(!1),this.actionsEl.style.display=n?"none":"",this.midEl.style.gridTemplateColumns=n?"minmax(0, 1fr)":"",this.root.style.background=n?"none":"",this.root.classList.toggle("menu--scene",n)}setChromeHidden(t){this.chromeHidden=t,this.root.classList.toggle("menu--chrome-hidden",t)}isChromeHidden(){return this.chromeHidden}setSceneChrome(t){this.topbar.setSceneMode(t)}statsHostFor(t){return this.statsHost}setBusy(t){this.playBtn.disabled=t,this.settingsItem.disabled=t,this.backBtn.disabled=t,this.modes.setBusy(t),t&&this.setStatus("Инициализация рендера…")}setStatus(t){this.statusText.textContent=t||this.pickIdlePhrase()}setRecordState(t,n){const s=ec.includes(t);this.recordBtn.classList.toggle("live",s),this.recordBtn.disabled=t==="starting"||t==="encoding"||t==="saving",this.recordLabel.textContent=t==="recording"?"Стоп":"Запись",this.recordBar.style.display=t==="encoding"||t==="saving"?"block":"none",this.recordFill.style.width="0%",this.recordState.textContent=n??Zr[t]}setRecordProgress(t){this.recordFill.style.width=`${Math.min(Math.max(t,0),1)*100}%`}pickIdlePhrase(){let t=Math.floor(Math.random()*Ss.length);return t===this.idleIndex&&(t=(t+1)%Ss.length),this.idleIndex=t,Ss[t]??""}destroy(){this.topbar.destroy(),this.modes.destroy(),this.windows.destroy(),this.autosave.destroy();for(const t of this.uiSoundDetach)t();this.root.remove(),this.settings.root.remove()}}const nc=`
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
`,sc='<svg class="rswitch__svg" viewBox="0 0 48 26" width="48" height="26" aria-hidden="true" focusable="false"><rect class="rswitch__track" x="1" y="1" width="46" height="24" rx="12"></rect><circle class="rswitch__knob" cx="13" cy="13" r="9"></circle></svg>';function oc(e,t){const n=document.createElement("div");n.className="rswitch-wrap";const s=document.createElement("span");s.className="rswitch__opt",s.textContent="WebGL2",s.dataset.val="webgl2";const o=document.createElement("button");o.className="rswitch",o.type="button",o.setAttribute("role","switch"),o.innerHTML=sc;const a=document.createElement("span");a.className="rswitch__opt",a.textContent="WebGPU",a.dataset.val="webgpu",n.append(s,o,a);const r=()=>{o.disabled||t.onSwitch()};n.addEventListener("click",r),e.append(n);let l="webgl2",c=!1,p="";const k=()=>{const h=l==="webgpu";o.dataset.state=h?"on":"off",o.setAttribute("aria-checked",h?"true":"false"),s.classList.toggle("rswitch__opt--active",!h),a.classList.toggle("rswitch__opt--active",h);const g=h?"WebGL2":"WebGPU";o.title=o.disabled&&p?p:`Переключить на ${g}`,o.setAttribute("aria-label",`Рендер: ${h?"WebGPU":"WebGL2"}. Переключить на ${g}`),n.classList.toggle("rswitch-wrap--disabled",o.disabled),n.setAttribute("aria-disabled",String(o.disabled))};return k(),{setBackend(h){l=h,k()},setBusy(h){c=h,o.disabled=h||!!p,k()},setUnavailable(h){p=h,o.disabled=c||!!h,k()},destroy(){n.remove()}}}const ac=`
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
`;function Bt(e,t,n,s,o,a){o<=0||s<=0||(e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o),e.fill())}const ic="#ebdbb2",rn="system-ui, -apple-system, 'Segoe UI', sans-serif";function rc(e){let t="";return{draw:(s,o,a,r)=>{if(o<=0||a<=0||r<=0)return!1;const l=e(),c=l===null?"none":[Math.round(Math.abs(l.speed)*.9),l.rpm,l.gear,l.shifting?1:0,l.gears.length,Math.round(l.charge*100),Math.round(l.boost*100),o,a,window.innerWidth].join("|");if(c===t)return!1;if(t=c,s.clearRect(0,0,o,a),s.fillStyle="rgba(29, 32, 33, 0.93)",s.fillRect(0,0,o,a),l===null)return!0;s.save(),s.scale(r,r);const p=a/r,k=document.documentElement.classList.contains("hud-density--skinny"),h=window.innerWidth>1100,g=window.innerWidth>820,u=12,b=p/2;let x=0;if(s.textBaseline="middle",s.textAlign="left",h){const E=k?48:64,f=4;s.fillStyle="#ffffff1f",Bt(s,x,b-f/2,E,f,2);const L=Math.max(l.maxRpm-l.idleRpm,1),B=Math.min(Math.max((l.rpm-l.idleRpm)/L,0),1);B>0&&(s.fillStyle=l.rpm>=l.shiftUpRpm?"#fe8019":"#ebdbb2cc",Bt(s,x,b-f/2,E*B,f,2)),x+=E+u}const y=k?18:24,S=k?9:11;s.fillStyle=ic,s.font=`700 ${y}px ${rn}`;const d=`${Math.round(Math.abs(l.speed)*.9)}`;s.fillText(d,x,b);const m=s.measureText(d).width;if(s.font=`400 ${S}px ${rn}`,s.fillStyle="rgba(235, 219, 178, 0.55)",s.fillText("км/ч",x+m+3,b),x+=m+3+s.measureText("км/ч").width+8,g){const E=l.gears.length,f=k?16:20,L=4,B=l.gear<0?0:l.gear;for(let w=0;w<=E;w++){const v=x+w*(f+4),A=w===B;s.fillStyle=A?l.shifting?"#ffffff4d":"#ebdbb2e6":"#ffffff1a",Bt(s,v,b-f/2,f,f,L),s.fillStyle=A?l.shifting?"#ffffff8c":"#1d2021":"#ffffff73",s.font=`600 ${k?9:11}px ${rn}`,s.textAlign="center",s.fillText(w===0?"R":`${w}`,v+f/2,b),s.textAlign="left"}x+=(E+1)*(f+4)-4+u}if(h){const E=Math.min(Math.max(l.charge,0),1),f=Math.min(Math.max(l.boost,0),1),L=E>0?E:f;s.font=`400 9px ${rn}`,s.fillStyle="rgba(235, 219, 178, 0.8)",s.fillText(E>0?"ЗАРЯД":"БУСТ",x,b);const B=s.measureText("ЗАРЯД").width,w=k?40:56,v=3,A=x+B+5;s.fillStyle="#ffffff1f",Bt(s,A,b-v/2,w,v,2),L>0&&(s.fillStyle=f>0?"#fe8019":"#7b5cff",Bt(s,A,b-v/2,w*L,v,2))}return s.restore(),!0},reset(){t=""},destroy(){t=""}}}function cc(e,t){const n=document.createElement("div");n.className="cluster",n.setAttribute("role","group"),n.setAttribute("aria-label","Приборы машины");const s=document.createElement("div");s.className="cluster__revs";const o=document.createElement("span");s.append(o);const a=document.createElement("div");a.className="cluster__dials";const r=document.createElement("span");r.className="cluster__speed",r.textContent="0";const l=document.createElement("span");l.className="cluster__unit",l.textContent="км/ч";const c=document.createElement("span");c.append(r,l);const p=document.createElement("div");p.className="cluster__gearbox",a.append(c,p);const k=document.createElement("div");k.className="cluster__boost";const h=document.createElement("span");h.textContent="Заряд";const g=document.createElement("div");g.className="cluster__boostbar";const u=document.createElement("span");g.append(u),k.append(h,g),n.append(s,a,k);const b=document.createElement("style");b.textContent=ac,document.head.append(b);let x=[],y=-1,S=0;const d=()=>{if(S++%4!==0)return;const E=e();if(!E)return;r.textContent=`${Math.round(Math.abs(E.speed)*.9)}`;const f=E.gears.length;if(f!==y){y=f,p.replaceChildren(),x=[];const R=f+1;for(let $=0;$<R;$++){const D=document.createElement("span");D.textContent=$===0?"R":`${$}`,p.append(D),x.push(D)}}const L=E.gear<0?0:E.gear;for(let R=0;R<x.length;R++)x[R]?.classList.toggle("engaged",R===L);p.classList.toggle("shifting",E.shifting);const B=Math.max(E.maxRpm-E.idleRpm,1),w=(E.rpm-E.idleRpm)/B;o.style.width=`${Math.min(Math.max(w,0),1)*100}%`,o.classList.toggle("redline",E.rpm>=E.shiftUpRpm);const v=Math.min(Math.max(E.charge,0),1),A=Math.min(Math.max(E.boost,0),1),T=v>0?v:A;u.style.width=`${T*100}%`,u.classList.toggle("firing",A>0),h.textContent=v>0?"Заряд":"Буст"};n.dataset.cleanup="1",(t??document.body).append(n);const m=window.setInterval(d,1e3/60/4);return{destroy(){window.clearInterval(m),n.remove(),b.remove()}}}function lc(e,t){const n=e/t,s=Math.floor(n*6),o=n*6-s,a=.25,r=1-.75*o,l=.25+.75*o,c={0:[1,l,a],1:[r,1,a],2:[a,1,l],3:[a,r,1],4:[l,a,1],5:[1,a,r]},[p,k,h]=c[s%6]??[1,1,1];return new Do(p,k,h,1)}function ks(e,t,n){const s=new Pa;return s.diffuse=new Do(0,0,0),s.emissive=t,s.emissiveIntensity=2,s.blendType=Ia,s.opacity=n,s.depthWrite=!1,s.update(),s}function dc(e,t,n=10){let s=null;const o=()=>{try{s??=new AudioContext;const w=s;w.state==="suspended"&&w.resume();const v=w.currentTime+.02,A=w.createOscillator();A.type="sawtooth",A.frequency.setValueAtTime(70,v),A.frequency.exponentialRampToValueAtTime(300,v+2.5);const T=w.createBiquadFilter();T.type="lowpass",T.Q.value=6,T.frequency.setValueAtTime(180,v),T.frequency.exponentialRampToValueAtTime(1800,v+2.5);const R=w.createGain();R.gain.setValueAtTime(1e-4,v),R.gain.exponentialRampToValueAtTime(.22,v+2.4),R.gain.setValueAtTime(.22,v+2.5),R.gain.linearRampToValueAtTime(0,v+2.7),A.connect(T).connect(R).connect(w.destination),A.start(v),A.stop(v+2.8);const $=2.4,D=w.createBufferSource(),z=w.createBuffer(1,Math.ceil(w.sampleRate*$),w.sampleRate),G=z.getChannelData(0);for(let ge=0;ge<G.length;ge++)G[ge]=Math.random()*2-1;D.buffer=z;const Y=w.createBiquadFilter();Y.type="bandpass",Y.Q.value=2.5,Y.frequency.setValueAtTime(250,v+2.5),Y.frequency.exponentialRampToValueAtTime(5200,v+4.6);const Q=w.createGain();Q.gain.setValueAtTime(1e-4,v+2.5),Q.gain.exponentialRampToValueAtTime(.3,v+2.62),Q.gain.exponentialRampToValueAtTime(.001,v+4.8),D.connect(Y).connect(Q).connect(w.destination),D.start(v+2.5),D.stop(v+4.9)}catch{}},a=new rt("checkpoints");t.addChild(a);const r=(w,v)=>{const A=new yo(w,120,v),T=new yo(w,-20,v),R=e.systems.rigidbody?.raycastFirst(A,T);return R?R.point.y:0},l=(w,v)=>{const A=r(w,v);return Math.abs(r(w+4,v)-A)<1.2&&Math.abs(r(w,v+4)-A)<1.2},c=w=>{let v={x:0,z:0,y:0};for(let A=0;A<8;A++){const T=w/n*Math.PI*2+Math.random()*.6,R=60+Math.random()*200,$=Math.cos(T)*R,D=Math.sin(T)*R;if(v={x:$,z:D,y:r($,D)},l($,D))return v}return v},p=e.graphicsDevice,k=new ps({ringRadius:4,tubeRadius:.14,sectorAngle:360,segments:48,sides:10}),h=new ps({ringRadius:2.6,tubeRadius:.12,sectorAngle:360,segments:36,sides:10}),g=new ps({ringRadius:1.5,tubeRadius:.1,sectorAngle:360,segments:24,sides:8}),u=new Ta({radius:.35,height:60,heightSegments:1,capSegments:12}),b=sn.fromGeometry(p,k),x=sn.fromGeometry(p,h),y=sn.fromGeometry(p,g),S=sn.fromGeometry(p,u),d=[],m=new Map;for(let w=0;w<n;w++){const{x:v,z:A,y:T}=c(w),R=lc(w,n),$=new rt(`checkpoint-${w}`);$.setPosition(v,T+.35,A);const D=(Ct,et,We,de)=>{const Ie=new rt("ring");return Ie.addComponent("render",{meshInstances:[new _o(Ct,et)],castShadows:!1,receiveShadows:!1}),Ie.setEulerAngles(We,0,de),$.addChild(Ie),Ie},z=ks(p,R,.9),G=ks(p,R,.55),Y=ks(p,R,.28),Q=D(b,z,0,0),ge=D(x,G,66,24),kt=D(y,G,108,-30),le=new rt("beam");le.addComponent("render",{meshInstances:[new _o(S,Y)],castShadows:!1,receiveShadows:!1}),le.setLocalPosition(0,30,0),$.addChild(le),a.addChild($);const Ze={info:{id:w,x:v,z:A,color:Math.round(R.r*255)<<16|Math.round(R.g*255)<<8|Math.round(R.b*255)},node:$,rings:[Q,ge,kt],beam:le,mats:[z,G],beamMat:Y,state:"alive",t:0};d.push(Ze),m.set($,Ze)}const E=w=>{for(const v of d){if(v.state==="alive"){v.rings[0]?.rotate(0,w*50,0),v.rings[1]?.rotate(w*30,w*-70,0),v.rings[2]?.rotate(w*-45,0,w*60);continue}v.t+=w;const A=v.t;if(A<2.5){const T=A/2.5,R=1-(1-T)*(1-T),$=1+1.3*R;v.node.setLocalScale($,$,$);const D=w*10*R;v.rings[0]?.rotate(0,D*50,0),v.rings[1]?.rotate(D*30,D*-70,0),v.rings[2]?.rotate(D*-45,0,D*60)}else if(A<5){const T=(A-2.5)/2.5,R=1-T*T,$=Math.max(2.3*R*R,.001);v.node.setLocalScale($,$,$);const D=w*(10+T*40);v.rings[0]?.rotate(0,D*50,0),v.rings[1]?.rotate(D*30,D*-70,0),v.rings[2]?.rotate(D*-45,0,D*60),v.beam.setLocalScale(1,1+T*2.2,1),v.beam.setLocalPosition(0,30+T*45,0),v.beamMat.opacity=.28*(1-T),v.beamMat.update();for(let z=0;z<v.mats.length;z++){const G=z===0?.9:.55;v.mats[z].opacity=Math.max(G*(1-T),0),v.mats[z].update()}}}for(let v=d.length-1;v>=0;v--){const A=d[v];A.state==="dying"&&A.t>=5&&(A.node.destroy(),e.fire("checkpoint:visited",A.info),d.splice(v,1))}};e.on("update",E);const f=()=>t.findByName("vehicle");let L=0;const B=w=>{if(L+=w,L<.25)return;L=0;const A=f()?.getPosition();if(A)for(let T=d.length-1;T>=0;T--){const R=d[T],$=A.x-R.info.x,D=A.z-R.info.z;R.state==="alive"&&$*$+D*D<9*9&&(R.state="dying",R.t=0,o())}};return e.on("update",B),{list:()=>d.map(w=>w.info),destroy(){e.off("update",E),e.off("update",B),s?.close().catch(()=>{}),a.destroy()}}}const cn=55,uc=`
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
`,mc={0:"С",45:"СВ",90:"В",135:"ЮВ",180:"Ю",225:"ЮЗ",270:"З",315:"СЗ"};function pc(){const e=document.documentElement.classList;return e.contains("hud-density--minimal")?0:e.contains("hud-density--skinny")?26:38}function fc(){return document.documentElement.classList.contains("hud-density--minimal")}function ha(e,t,n){let s=null;const o=()=>{try{s??=new AudioContext,s.state==="suspended"&&s.resume();const u=s,b=u.currentTime+.01;for(const[x,y]of[880,1318.51].entries()){const S=u.createOscillator(),d=u.createGain();S.type="sine",S.frequency.value=y;const m=b+x*.09;d.gain.setValueAtTime(0,m),d.gain.linearRampToValueAtTime(.16,m+.02),d.gain.exponentialRampToValueAtTime(.001,m+.38),S.connect(d).connect(u.destination),S.start(m),S.stop(m+.42)}}catch{}},a=document.createElement("div");a.className="compass-toast",document.body.append(a);let r=null;const l=u=>{a.textContent=u,a.classList.add("compass-toast--on"),o(),r!==null&&window.clearTimeout(r),r=window.setTimeout(()=>{a.classList.remove("compass-toast--on"),r=null},2400)};let c=-1,p="";const k=u=>(u*180/Math.PI+360)%360,h=(u,b)=>{let x=(u-b)%360;return x>=180&&(x-=360),x<-180&&(x+=360),x};return{draw:(u,b,x)=>{if(x===0||b===0)return!1;const y=e();if(y===null)return p!==""?(u.clearRect(0,0,b,x),p="",!0):!1;const S=k(y),d=t(),m=n();m.length!==c&&(c>=0&&m.length<c&&l(m.length>0?`Чекпоинт собран · осталось: ${m.length}`:"Все чекпоинты собраны!"),c=m.length);const E=`${b}x${x}|${S.toFixed(2)}|${d?`${d.x.toFixed(1)},${d.z.toFixed(1)}`:""}|${m.length}`;if(E===p)return!1;p=E,u.clearRect(0,0,b,x);const f=u.createLinearGradient(0,0,0,x);f.addColorStop(0,"rgba(235, 219, 178, 0.15)"),f.addColorStop(.6,"rgba(40, 40, 40, 0.94)"),u.fillStyle=f,u.fillRect(0,0,b,x),u.strokeStyle="rgba(235, 219, 178, 0.18)",u.lineWidth=1,u.strokeRect(.5,.5,b-1,x-1);const L=b/(cn*2),B=b/2,w=Math.round((S-cn)/15)*15;u.textAlign="center",u.textBaseline="middle";for(let v=w;v<=S+cn;v+=15){const A=B+h(v,S)*L,T=mc[(v%360+360)%360];T!==void 0?(u.fillStyle="#ebdbb2e6",u.font=`600 ${Math.round(x*.34)}px system-ui, sans-serif`,u.fillText(T,A,x*.42)):v%45===0?(u.fillStyle="#ebdbb280",u.fillRect(A-1,x*.3,2,x*.22)):(u.fillStyle="#ebdbb240",u.fillRect(A-1,x*.36,2,x*.12))}if(u.fillStyle="#fe8019",u.fillRect(B-1.5,x*.14,3,x*.2),d){const v=[...m].map(R=>{const $=R.x-d.x,D=R.z-d.z;return{cp:R,dist:Math.round(Math.hypot($,D)),off:h(k(Math.atan2($,-D)),S)}}).sort((R,$)=>R.off-$.off);let A=-1e9,T=0;for(const{cp:R,dist:$,off:D}of v){const z=`#${R.color.toString(16).padStart(6,"0")}`;let G=B+D*L;if(Math.abs(D)>cn-4){G=B+Math.sign(D)*(b/2-14*(b/560)),u.save(),u.translate(G,x*.42),u.rotate(Math.sign(D)*Math.PI/2),u.fillStyle=z,u.beginPath(),u.moveTo(0,-6*(b/560)),u.lineTo(5*(b/560),3*(b/560)),u.lineTo(-5*(b/560),3*(b/560)),u.closePath(),u.fill(),u.restore();continue}Math.abs(G-A)<34*(b/560)?T=(T+1)%2:T=0,A=G;const Q=5*(b/560);u.fillStyle=z,u.beginPath(),u.moveTo(G,x*.2-Q),u.lineTo(G+Q,x*.2),u.lineTo(G,x*.2+Q),u.lineTo(G-Q,x*.2),u.closePath(),u.fill(),u.fillStyle="#ebdbb2d9",u.font=`500 ${Math.round(x*.26)}px system-ui, sans-serif`,u.fillText(`${$}м`,G,x*(.62+T*.24))}}return!0},reset(){p=""},destroy(){r!==null&&window.clearTimeout(r),s?.close().catch(()=>{}),a.remove()}}}function bc(e,t,n){const s=document.createElement("div");s.className="compass";const o=document.createElement("canvas");s.append(o);const a=document.createElement("style");a.textContent=uc,s.append(a),document.body.append(s);const r=ha(e,t,n),l=()=>{const g=Math.min(window.devicePixelRatio||1,2);o.width=Math.round(o.clientWidth*g),o.height=Math.round(o.clientHeight*g)};l(),window.addEventListener("resize",l);let c=-1,p=-1,k=0;const h=()=>{const g=o.getContext("2d");g&&(o.width!==c||o.height!==p)&&(c=o.width,p=o.height,g.clearRect(0,0,o.width,o.height)),g&&r.draw(g,o.width,o.height),k=requestAnimationFrame(h)};return k=requestAnimationFrame(h),{destroy(){cancelAnimationFrame(k),window.removeEventListener("resize",l),r.destroy(),s.remove(),a.remove()}}}function hc(e,t){const n=e.graphicsDevice,s=document.createElement("canvas"),o=s.getContext("2d",{alpha:!0});if(!o)return{active:!1,destroy(){}};const a=(b,x)=>{s.width=Math.max(1,b),s.height=Math.max(1,x)};a(n.width,n.height);let r;const l=()=>{const b=new Da(n,{name:"hud-surface",format:$a,width:s.width,height:s.height,mipmaps:!1,minFilter:Eo,magFilter:Eo,addressU:vo,addressV:vo,anisotropy:1,premultiplyAlpha:!0,srgb:!0});return b.setSource(s),b};try{r=l()}catch(b){return console.warn("[hud] текстура HUD не создалась — HUD остаётся DOM-ом",b),{active:!1,destroy(){}}}let c,p,k;try{c=new rt("hud-screen"),c.addComponent("screen",{screenSpace:!0,scaleMode:Ma,resolution:new fs(n.width,n.height)}),p=new rt("hud-surface"),p.addComponent("element",{type:Ba,texture:r,anchor:new Fa(0,0,0,0),pivot:new fs(0,0),width:n.width,height:n.height,opacity:1,useInput:!1}),c.addChild(p),e.root.addChild(c),k=p.element}catch(b){return console.warn("[hud] слой HUD не поднялся — HUD остаётся DOM-ом",b),r.destroy(),{active:!1,destroy(){}}}const h=()=>{const b=n.width,x=n.height;if(!(b<=0||x<=0)){if(s.width!==b||s.height!==x){a(b,x);const y=l();k.texture=y,r.destroy(),r=y}c.screen&&(c.screen.resolution=new fs(b,x)),k.width=b,k.height=x}};let g=!0;const u=()=>{h();const b={ctx:o,width:s.width,height:s.height,scale:s.width>0?s.width/Math.max(window.innerWidth,1):1};(t.draw(b)||g)&&(g=!1,r.setSource(s),r.upload())};return e.on("prerender",u),n.on(wo.EVENT_RESIZE,h),{active:!0,destroy(){e.off("prerender",u),n.off(wo.EVENT_RESIZE,h),c.destroy(),r.destroy()}}}function gc(e,t,n,s,o,a){e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o)}function xc(e){const t=ha(e.getHeading,e.getVehicle,e.getCheckpoints),n=rc(e.read),s=()=>{if(fc())return null;const l=Math.min(window.innerWidth*.62,560),c=pc();if(l<40||c<=0)return null;const p=e.safeTop()+(c===26?126:92);return{x:(window.innerWidth-l)/2,y:p,w:l,h:c}},o=()=>{const l=e.clusterHost,c=l.parentElement;if(!c||l.offsetParent===null&&c.clientHeight===0)return null;const p=c.getBoundingClientRect();return p.height<4?null:{x:p.left,y:p.top,w:p.width,h:p.height}},a=()=>{const l=e.clusterHost,c=o();if(!c)return null;const p=l.getBoundingClientRect();return{x:p.left>0?p.left:c.x+16,y:c.y,w:Math.min(480,Math.max(c.w,240)),h:c.h}};let r="";return{draw(l){const{ctx:c,width:p,height:k,scale:h}=l,g=s(),u=a(),b=o(),x=[p,k,g?`${g.x.toFixed(0)},${g.y.toFixed(0)},${g.w.toFixed(0)},${g.h.toFixed(0)}`:"none",u?`${u.x.toFixed(0)},${u.y.toFixed(0)},${u.w.toFixed(0)},${u.h.toFixed(0)}`:"none",b?`${b.x.toFixed(0)},${b.y.toFixed(0)},${b.w.toFixed(0)},${b.h.toFixed(0)}`:"none"].join("|"),y=x!==r;y&&(r=x,c.clearRect(0,0,p,k),t.reset(),n.reset());let S=!1;if(y&&b){const d=b.x*h,m=b.y*h,E=b.w*h,f=b.h*h;c.save(),gc(c,d,m,E,f,Math.max(4,6*h)),c.fillStyle="rgba(29, 32, 33, 0.93)",c.fill(),c.strokeStyle="rgba(235, 219, 178, 0.2)",c.lineWidth=Math.max(1,h),c.stroke(),c.restore()}return g&&(c.save(),c.translate(g.x*h,g.y*h),t.draw(c,g.w*h,g.h*h)&&(S=!0),c.restore()),u&&(c.save(),c.translate(u.x*h,u.y*h),n.draw(c,u.w*h,u.h*h,h)&&(S=!0),c.restore()),S||y},destroy(){t.destroy(),n.destroy()}}}function _c(e){let t=0,n=0;const s=e.autoRender,o=()=>{const l=aa();t=l>0?1e3/l:0,n=t,e.autoRender=t===0?s:!1},a=l=>{t!==0&&(n+=l*1e3,n>=t&&(n=0,e.renderNextFrame=!0))};o(),e.on("update",a);const r=ia(o);return{destroy(){e.off("update",a),r(),e.autoRender=s}}}let ga=1,Qe=null;function yc(){return oa()*ga}function fl(e){ga=e,Is()}function Is(){Qe?.graphicsDevice&&(Qe.graphicsDevice.maxPixelRatio=yc(),Qe.resizeCanvas(),Qe.updateCanvasSize())}function wc(e){Qe=e,Is();const t=ia(()=>{Is()});return()=>{t(),Qe===e&&(Qe=null)}}const vc=250,Ec="menuRenderFps",Sc=`
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
`;function kc(e=null){const t=document.createElement("div");t.className="mini-stats",t.setAttribute("role","status"),t.setAttribute("aria-label","Статистика кадра");const n=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");t.append(n,s,o,a);const r=document.createElement("style");r.id="mini-stats-style",r.textContent=Sc,document.head.append(r);const l=S=>{t.classList.toggle("mini-stats--inline",S!==null);const d=S??document.body;t.parentElement!==d&&d.append(t)};l(e);let c=null,p=yn(),k=!1;const h=()=>me("fps")||me("cpu")||me("draw")||me("vram"),g=()=>{t.classList.toggle("visible",p&&c!==null&&h())},u=(S,d,m)=>{const E=d.fps,f=E>0&&E<30;if(f!==k&&(k=f,n.classList.toggle("warn",f)),m.fps){const L=d.user.get(Ec),B=typeof L=="number"&&L>0?` · рендер ${L}`:"";n.textContent=`${E>0?Math.round(E):"—"} FPS${B} · ${d.frameTime.toFixed(1)} ms`}m.cpu&&(s.textContent=`CPU ${d.cpuUpdateTime.toFixed(1)} / ${d.cpuRenderTime.toFixed(1)} / ${d.cpuPhysicsTime.toFixed(1)} мс`),m.draw&&(o.textContent=`Draw ${Cs(d.drawCallCount)} · Прим. ${Cs(d.frame.primitives)} · Шейд. ${Cs(d.frame.shaders)}`),m.vram&&(a.textContent=`VRAM ${Math.round(d.vramTotalBytes/1048576)} МБ · ${S.graphicsDevice.width}×${S.graphicsDevice.height} ${S.graphicsDevice.isWebGPU?"WebGPU":"WebGL2"}`)},b=()=>{const S=c;if(!S||!p)return;const d={fps:me("fps"),cpu:me("cpu"),draw:me("draw"),vram:me("vram")};n.hidden=!d.fps,s.hidden=!d.cpu,o.hidden=!d.draw,a.hidden=!d.vram,u(S,S.stats,d)};g();const x=window.setInterval(b,vc),y=ea(()=>{p=yn(),g(),b()});return{setHost(S){l(S),b()},setApp(S){c=S,g(),S&&b()},destroy(){window.clearInterval(x),y(),t.remove(),r.remove()}}}function Cs(e){return Number.isFinite(e)?e>=1e6?`${Math.round(e/1e5)}М`:e>=1e4?`${Math.round(e/1e3)}к`:`${Math.round(e)}`:"—"}const Cc="hud-density--skinny",Nc="hud-density--minimal";function Lc(){const e=document.documentElement,t=()=>{const n=ar();e.classList.toggle(Cc,n!=="full"),e.classList.toggle(Nc,n==="minimal")};return t(),ea(t)}function bl(){return 1}const Fo="blendars-scrollbar",Ac=[".dlg__body",".settings__scroll",".settings__tabs",".actions",".mp__list"],De=e=>Ac.map(t=>`${t}${e}`).join(`,
`),Rc=`
/* Firefox: тонкая полоса, ползунок gray на дорожке bg1. */
@supports not selector(::-webkit-scrollbar) {
    ${De("")} {
        scrollbar-width: thin;
        scrollbar-color: #928374 #28282899;
    }
}

@media (hover: hover) and (pointer: fine) {
    /* Chromium и WebKit. 12px — под штрих 8px плюс прозрачная рамка ползунка. */
    ${De("::-webkit-scrollbar")} {
        width: max(0.75rem, 12px);
        height: max(0.75rem, 12px);
    }
    /* Дорожка — тот же тёмный серый, что подложка панелей: полоса читается как
       часть окна, а не как плашка поверх текста. */
    ${De("::-webkit-scrollbar-track")} {
        background: #28282899;
        border-radius: 999px;
    }
    /* Стрелочные кнопки в старых WebKit — лишний хром. */
    ${De("::-webkit-scrollbar-button")} {
        display: none;
        width: 0;
        height: 0;
    }
    /* Прозрачная рамка в 2px + background-clip: padding-box оставляют круглый
       штрих 8px, а не прямоугольник во всю ширину полосы. */
    ${De("::-webkit-scrollbar-thumb")} {
        background: #928374;
        border: 1px solid transparent;
        background-clip: padding-box;
        border-radius: 999px;
    }
    ${De("::-webkit-scrollbar-thumb:hover")} { background-color: #ebdbb2; }
    ${De("::-webkit-scrollbar-thumb:active")} { background-color: #fe8019; }
    /* Уголок на пересечении двух полос серым квадратом вылезал бы в углу
       колонки вкладок, где полоса одна. */
    ${De("::-webkit-scrollbar-corner")} { background: transparent; }
}
`;function Tc(){if(document.getElementById(Fo))return;const e=document.createElement("style");e.id=Fo,e.textContent=Rc,document.head.append(e)}let Bo=!1;function Pc(){try{return new URLSearchParams(location.search).has("vk_app_id")}catch{return!1}}const Ic=1e4;async function Mc(){if(Bo||!Pc())return!1;Bo=!0;try{const{default:e}=await q(async()=>{const{default:n}=await import("./index.Dp09MIqC.js");return{default:n}},[]),t=await Promise.race([e.send("VKWebAppInit"),new Promise((n,s)=>{setTimeout(()=>s(new Error("платформа не ответила на VKWebAppInit")),Ic)})]);if(t?.result)return console.info("[vk] VKWebAppInit: платформа подтвердила запуск приложения"),!0;console.warn("[vk] VKWebAppInit: платформа ответила без подтверждения",t)}catch(e){console.warn("[vk] не удалось инициализировать приложение ВКонтакте",e)}return!1}const Fc="vehicle",hl="vehicleInput",gl="vehicleWheel",Bc="driveCamera",eo=document.getElementById("app");if(!eo)throw new Error("#app not found");Tc();let Z=null,Ms=null,Xe=null,Fs=null;const Yt={boot:.1,device:.35,decoders:.7,background:.95},$e=new Ha(document.body);let Jt=null,Bs=null,jt=null,Kt=null,vn=null,fe=!1,Ne=null,En=null;const Ds="blendars.backend";function Sn(e){try{e?localStorage.setItem(Ds,e):localStorage.removeItem(Ds)}catch{}}function Dc(){try{const e=localStorage.getItem(Ds);return e==="webgpu"||e==="webgl2"?e:null}catch{return null}}function $c(){const e=new URLSearchParams(location.search).get("backend");return e==="webgpu"||e==="webgl2"?e:null}let vt=$c()??Dc();const U=new tc(eo,{onScene:e=>{_a(U,e)},onBack:()=>{Xc(U)},onRecord:()=>{Qc()}});window.__blendarsEnterSmoke=()=>{Kc(U)};const Ee=oc(U.settings.backendSlot,{onSwitch:()=>{Jc()}});{const e=document.createElement("style");e.textContent=nc,document.head.append(e)}navigator.gpu||Ee.setUnavailable("WebGPU не поддерживается этим браузером");function to(e,t){const n=t==="scene";e.setMode(t),e.setSceneChrome(n),kn.setHost(e.statsHostFor(n))}const kn=kc(U.statsHost);Lc();$e.setStage("интерфейс",Yt.boot);window.__blendarsMenuReady=!0;Mc();jc();function Oc(e){En?.();const t=wc(e),n=_c(e);En=()=>{t(),n.destroy()}}async function jc(){try{$e.setStage("пресет настроек",Yt.boot);const{askBootPreset:e}=await q(async()=>{const{askBootPreset:s}=await import("./boot-preset.DAPWf2G0.js");return{askBootPreset:s}},__vite__mapDeps([3,2]));if(await e(),vt==="webgpu"){const{confirmWebgpuSwitch:s}=await q(async()=>{const{confirmWebgpuSwitch:a}=await import("./confirm-dialog.BoAueR29.js");return{confirmWebgpuSwitch:a}},[]);await s()||(vt=null,Sn(null),U.setStatus("Запуск на WebGL2 — WebGPU не подтверждён"))}const t=await Et((s,o)=>{$e.setStage(s,o??void 0),$e.updateFromResources(),Gc()});window.__blendarsEngine={backend:t.backend},window.__blendarsApp=t.app,Kt=t.backend,Ee.setBackend(t.backend),kn.setApp(t.app),Oc(t.app),t.backend==="webgpu"&&xa(t),$e.setStage("сцена меню",Yt.background);const{buildMenuBackground:n}=await q(async()=>{const{buildMenuBackground:s}=await import("./menu-background.CNzFEeWB.js");return{buildMenuBackground:s}},__vite__mapDeps([4,2,5,6]));Ne=await n(t.app),window.__blendarsBackgroundReady=!0,zc(),$e.setStage("готово",1),U.setStatus(""),await $e.hide(),window.__blendarsInteractive=!0,console.info("[blendars] boot complete",t.backend)}catch(e){console.error("[blendars] boot failed",e),$e.setError("Не удалось запустить рендер. Проверьте поддержку WebGPU/WebGL2 в браузере."),window.__blendarsInteractive=!0}}async function Gc(){const e=new URLSearchParams(location.search).get("bootDelay");if(!e)return;const t=Number(e);!Number.isFinite(t)||t<=0||await new Promise(n=>setTimeout(n,Math.min(t,3e4)))}async function zc(){try{const{probeServiceWorker:e}=await q(async()=>{const{probeServiceWorker:n}=await import("./capabilities.Vl_UvQZj.js");return{probeServiceWorker:n}},[]),t=await e("/blend-ars/sw.js");console.info(t==="registered"?"[blendars] Service Worker зарегистрирован: оффлайн-оболочка доступна":`[blendars] Service Worker: ${t} — оффлайн-старт недоступен`)}catch(e){console.warn("[blendars] регистрация Service Worker не удалась",e)}}function Et(e){return Jt??=Uc(e),Jt}async function Uc(e){const{initEngine:t}=await q(async()=>{const{initEngine:a}=await import("./engine-bootstrap.DcnisRIi.js");return{initEngine:a}},__vite__mapDeps([7,2])),n=document.createElement("canvas");n.className="game-canvas",n.style.zIndex="0",document.body.insertBefore(n,eo),Bs=n;const s=vt??"webgl2";return t(n,{physics:!0,deviceTypes:s==="webgl2"?["webgl2","webgpu"]:["webgpu","webgl2"],skipAdapterProbe:s==="webgpu"&&vt!==null,onStage:(a,r)=>{r===1?e?.(a,Yt.decoders):e?.(a,Yt.device)}})}const Hc=5,Vc=1e3,Wc=3;function xa(e){let t=0;jt?.();let n=null;const s=l=>{Sn(null),no("webgl2",{persist:!1,restoreScene:!1,reason:l})};let o=e.app.frame,a=0;const r=window.setInterval(()=>{if(document.hidden){o=e.app.frame;return}const l=e.app.frame;l===o?(a++,a>=Wc&&(window.clearInterval(r),s("кадры не идут — вероятно, WebGPU завис на первом кадре"))):(a=0,o=l)},Vc);jt=()=>{window.clearInterval(r),n?.(),n=null},q(async()=>{const{watchWebGpuErrors:l}=await import("./engine-bootstrap.DcnisRIi.js");return{watchWebGpuErrors:l}},__vite__mapDeps([7,2])).then(({watchWebGpuErrors:l})=>{if(fe){jt?.();return}n=l(e.device,c=>{t++,console.warn(`[blendars] webgpu error #${t}: ${c.slice(0,200)}`),(Yc(c)||t>=Hc)&&(window.clearInterval(r),s(c))})})}function Yc(e){return/out of memory|not enough memory/i.test(e)}async function no(e,t){if(fe)return;fe=!0,Ee.setBusy(!0),t.reason&&console.warn("[blendars] смена рендера:",t.reason.slice(0,200));const{probeWebGpuAdapter:n}=await q(async()=>{const{probeWebGpuAdapter:a}=await import("./engine-bootstrap.DcnisRIi.js");return{probeWebGpuAdapter:a}},__vite__mapDeps([7,2])),s=setTimeout(()=>{U.setStatus("Рендер переключается дольше обычного… если не идёт — F9")},25e3);if(e==="webgpu"){const a=await n();if(!a){Ee.setUnavailable("WebGPU не поддерживается этим браузером"),U.setStatus("WebGPU не поддерживается этим браузером"),clearTimeout(s),Ee.setBusy(!1),fe=!1;return}a.stalled?console.warn("[blendars] зонд WebGPU не ответил — пробуем по явному запросу"):a.software&&U.setStatus(`WebGPU: софтверный адаптер (${a.label||"без описания"}) — рендер может упасть`);const{confirmWebgpuSwitch:r}=await q(async()=>{const{confirmWebgpuSwitch:c}=await import("./confirm-dialog.BoAueR29.js");return{confirmWebgpuSwitch:c}},[]);if(!await r()){U.setStatus("Остались на WebGL2 — WebGPU не подтверждён"),clearTimeout(s),Ee.setBusy(!1),fe=!1;return}}const o=va();o.setStage("смена рендера…");try{jt?.(),jt=null,o.setStage("смена рендера: остановка движка…"),Z?.destroy(),Z=null,window.__blendarsSceneReady=!1,ya(),wa(),Zs(null),Ne?.destroy(),Ne=null;const a=await Jt;Jt=null,Kt=null,kn.setApp(null),En?.(),En=null,a?.detachResize(),a?.app.destroy(),Bs?.remove(),Bs=null,vt=e,t.persist&&Sn(e),o.setStage(`смена рендера: движок ${e.toUpperCase()}…`);const r=await Et();Kt=r.backend,window.__blendarsEngine={backend:r.backend},window.__blendarsApp=r.app,Ee.setBackend(r.backend),kn.setApp(r.app),r.backend==="webgpu"&&xa(r),r.backend!==e&&U.setStatus(`${e.toUpperCase()} недоступен — рендер: ${r.backend.toUpperCase()}`);const l=t.restoreScene===!1?null:vn;if(l)o.done(),await _a(U,l);else{vn=null,o.setStage("смена рендера: сцена меню…");const{buildMenuBackground:c}=await q(async()=>{const{buildMenuBackground:p}=await import("./menu-background.CNzFEeWB.js");return{buildMenuBackground:p}},__vite__mapDeps([4,2,5,6]));Ne=await c(r.app),to(U,"menu"),U.setBusy(!1),r.backend===e&&U.setStatus(""),o.done()}}catch(a){if(console.error("[blendars] смена рендера не удалась",a),t.allowRetry!==!1&&e!=="webgl2"){o.done(),vt="webgl2",Sn(null),fe=!1,Ee.setBusy(!1),await no("webgl2",{persist:!1,allowRetry:!1});return}o.fail("не удалось сменить рендер"),U.setStatus("Не удалось сменить рендер — перезагрузите страницу (F9)")}finally{clearTimeout(s),Ee.setBusy(!1),fe=!1}}async function Jc(){fe||Kt&&await no(Kt==="webgpu"?"webgl2":"webgpu",{persist:!0})}async function Kc(e){if(!fe){e.setBusy(!0);try{if(await Et(),new URLSearchParams(location.search).get("scene")==="smoke"){const{buildSmokeScene:t}=await q(async()=>{const{buildSmokeScene:n}=await import("./smoke-scene.zwMI0kje.js");return{buildSmokeScene:n}},__vite__mapDeps([8,2]));Ne?.destroy(),Ne=null,t((await Et()).app)}e.setStatus("Ангар появится на этапе 4"),e.setBusy(!1)}catch(t){console.error("[blendars] enter game failed",t),e.setStatus("Не удалось открыть сцену"),e.setBusy(!1)}}}async function _a(e,t){if(fe)return;e.setBusy(!0),e.setStatus(t==="maserati"?"Загрузка сцены: мазерати…":"Загрузка сцены…");const n=va();try{Ne?.destroy(),Ne=null;const s=await Et(),{buildVehicleScene:o}=await q(async()=>{const{buildVehicleScene:a}=await import("./vehicle-scene.L1NgibC8.js");return{buildVehicleScene:a}},__vite__mapDeps([9,2,7,5]));Z=await o(s.app,a=>n.setStage(a),{body:t,onAssetProgress:(a,r)=>n.setStage(a,r)}),to(e,"scene"),e.setBusy(!1),e.setStatus("WASD / стрелки — ехать, пробел — ручник, R — сброс на месте, Q — плечо камеры"),vn=t,window.__blendarsSceneReady=!0,Zc(s.app),el(s.app),Zs(()=>qc()),n.done()}catch(s){console.error("[blendars] vehicle scene failed",s),e.setStatus("Не удалось загрузить сцену"),n.fail(String(s?.message??s)),e.setBusy(!1)}}async function Xc(e){Z?.destroy(),Z=null,vn=null,window.__blendarsSceneReady=!1,Zs(null);const t=await Et(),{buildMenuBackground:n}=await q(async()=>{const{buildMenuBackground:s}=await import("./menu-background.CNzFEeWB.js");return{buildMenuBackground:s}},__vite__mapDeps([4,2,5,6]));Ne=await n(t.app),to(e,"menu"),e.setBusy(!1),e.setStatus(""),ya(),wa()}function qc(){const e=Z?.root.findByName("camera"),t=e?.script?.get(Bc);if(!e||!t)return null;const n=(o,a)=>typeof o=="number"&&Number.isFinite(o)?o:a,s=(o,a,r)=>o<a?a:o>r?r:o;return{read:()=>({yaw:n(t._manualYaw,0),lift:n(t._manualLift,0),zoom:n(t._zoom,1),shoulder:n(t.shoulder,1),distance:n(t.distance,6.4),height:n(t.height,2.5),fov:e.camera?n(e.camera.fov,60):60}),write:o=>{o.yaw!==void 0&&(t._manualYaw=s(o.yaw,-180,180)),o.lift!==void 0&&(t._manualLift=s(o.lift,-.6,3.4)),o.zoom!==void 0&&(t._zoom=s(o.zoom,.55,1.7)),o.shoulder!==void 0&&(t.shoulder=o.shoulder),o.distance!==void 0&&(t.distance=s(o.distance,3,15)),o.height!==void 0&&(t.height=s(o.height,1,6)),o.fov!==void 0&&e.camera&&(e.camera.fov=s(o.fov,40,90))},reset:()=>{t.resetLook()}}}async function Qc(){const e=(t,n)=>{U.setRecordState(t,n)};try{if(!Xe){const{GameRecorder:t}=await q(async()=>{const{GameRecorder:o}=await import("./video-recorder.ilLNPhk5.js");return{GameRecorder:o}},__vite__mapDeps([10,2,1])),n=Jt;if(n===null){e("error","движок не поднят, запись невозможна");return}const s=(await n.catch(()=>null))?.app??null;if(s===null){e("error","сначала войди в сцену");return}Xe=new t(s,{onState:(o,a)=>e(o,a),onProgress:o=>U.setRecordProgress(o)},{frameRate:ra(),width:sr(s.graphicsDevice.canvas.width||window.innerWidth),quality:ca(),keyFrameInterval:la(),sound:Ps(),attachAudio:o=>Z?.audio?.attachRecordStream(o)??(()=>{})})}if(Xe.recording){const t=await Xe.stop();t>0&&e("idle",`файл ${(t/1048576).toFixed(1)} МБ сохранён`)}else await Xe.start()}catch(t){e("error",t instanceof Error?t.message:"запись недоступна")}}function Zc(e){const t=()=>Z?.root.findByName("vehicle")?.script?.get(Fc)??null,n=Z?dc(e,Z.root,10):null,s=()=>n?.list()??[],o=()=>{const b=Z?.root.findByName("camera")?.forward;return b?Math.atan2(b.x,-b.z):null},a=()=>{const u=Z?.root.findByName("vehicle")?.getPosition();return u?{x:u.x,z:u.z}:null},r=document.createElement("div");r.style.cssText="position:fixed;left:0;top:0;width:0;height:0;padding-top:env(safe-area-inset-top);visibility:hidden;pointer-events:none",document.body.append(r);let l=0;const c=()=>{const u=Number.parseFloat(getComputedStyle(r).paddingTop);l=Number.isFinite(u)?u:0};c(),window.addEventListener("resize",c),window.addEventListener("orientationchange",c);let p=null,k=null,h=null;const g=xc({getHeading:o,getVehicle:a,getCheckpoints:s,read:t,clusterHost:U.clusterHost,safeTop:()=>l});p=hc(e,g),p.active?document.documentElement.classList.add("hud-in-canvas"):(p=null,g.destroy(),k=cc(t,U.clusterHost),h=bc(o,a,s)),Ms=()=>{Xe?.destroy(),Xe=null,document.documentElement.classList.remove("hud-in-canvas"),p?.destroy(),p=null,k?.destroy(),h?.destroy(),n?.destroy(),window.removeEventListener("resize",c),window.removeEventListener("orientationchange",c),r.remove()}}function ya(){Ms?.(),Ms=null}function el(e){Z&&q(async()=>{const{attachTouchControls:t}=await import("./touch-controls.I345S93u.js");return{attachTouchControls:t}},__vite__mapDeps([11,2])).then(({attachTouchControls:t})=>{Z&&(Fs=t(e,Z.root).destroy)})}function wa(){Fs?.(),Fs=null}function va(){const e=document.createElement("div");e.className="loading",$o(e);const t=document.createElement("div");t.className="loading__title",t.textContent="СЦЕНА";const n=document.createElement("div");n.className="loading__bar loading__bar--unknown";const s=document.createElement("div");s.className="loading__fill",n.append(s);const o=document.createElement("div");return o.className="loading__stage",o.style.opacity="0.8",o.style.fontSize="13px",o.style.textTransform="uppercase",e.append(t,n,o),document.body.append(e),{setStage(a,r){if(o.textContent=a,r===void 0||!Number.isFinite(r)){n.classList.add("loading__bar--unknown");return}n.classList.remove("loading__bar--unknown"),s.style.width=`${Math.round(Math.min(1,Math.max(0,r))*100)}%`},done(){e.remove()},fail(a){n.hidden=!0,o.textContent=`ошибка: ${a}`,setTimeout(()=>e.remove(),4e3)}}}window.addEventListener("keydown",e=>{e.key==="F9"&&location.reload()});export{lr as A,bl as B,ur as C,Bc as D,pr as E,br as F,Cn as G,ml as H,$i as I,ul as J,gl as V,_n as a,lt as b,fl as c,Oe as d,ll as e,cl as f,zi as g,il as h,dl as i,ia as j,al as k,Ns as l,Fc as m,ol as n,rl as o,ys as p,pl as q,on as r,Ls as s,_r as t,Je as u,ea as v,nl as w,sl as x,hl as y,ir as z};
