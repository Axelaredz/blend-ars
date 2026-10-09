const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/music-player.DYraKlzq.js","assets/music-audio.DNu4TXPq.js","assets/playcanvas.BiKF8DQR.js","assets/finish-card.B0B6bzbP.js","assets/boot-preset.DRwNIOyM.js","assets/menu-background.CXZIcaPO.js","assets/engine-sound.Ck6VRaR9.js","assets/look-gestures.BhGm2xnc.js","assets/engine-bootstrap.DfUiHm_P.js","assets/smoke-scene.C4r09Tql.js","assets/vehicle-scene.CO_Ur6m5.js","assets/video-recorder.T8uFKfef.js","assets/game-over-card.YEuZ7Qib.js","assets/touch-controls.BCOggJNV.js"])))=>i.map(i=>d[i]);
import{_ as q,E as xt,T as Bs,C as Mi,M as En,a as Vo,b as va,S as Pi,B as Ii,V as Yo,c as $i,d as Fi,e as Bi,f as Oi,g as Di,A as Ko,F as Jo,P as ji}from"./playcanvas.BiKF8DQR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Xo="blendars-loading",zi=`
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
`;function Hi(){if(document.getElementById(Xo))return;const e=document.createElement("style");e.id=Xo,e.textContent=zi,document.head.append(e)}const Ui="/blend-ars/assets/loader.CPCrwQQc.webp",Gi="#282828",qo="blendars-splash",Wi=`
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
    background-color: ${Gi};
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
`;function wa(e){if(!document.getElementById(qo)){const s=document.createElement("style");s.id=qo,s.textContent=Wi,document.head.append(s)}if(e.querySelector(":scope > .splash-logo")){e.classList.add("splash-host");return}const t=document.createElement("div");t.className="splash-logo";const n=document.createElement("img");n.src=Ui,n.alt="Blendars",t.append(n),e.prepend(t),e.classList.add("splash-host")}class Vi{root;fill;bar;stageEl;bytesEl;errorEl;lastPercent=-1;lastBytesText="";lastStage="";constructor(t,n={}){if(this.root=document.createElement("div"),this.root.className="loading",Hi(),wa(this.root),this.root.setAttribute("role","progressbar"),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","100"),this.root.setAttribute("aria-valuenow","0"),this.root.setAttribute("aria-label","Загрузка"),n.title!==void 0){const o=document.createElement("h1");o.className="loading__title",o.textContent=n.title,this.root.append(o)}this.bar=document.createElement("div"),this.bar.className="loading__bar loading__bar--unknown",this.fill=document.createElement("div"),this.fill.className="loading__fill",this.bar.append(this.fill),this.bar.removeAttribute("aria-valuenow");const s=document.createElement("div");s.className="loading__row",this.stageEl=document.createElement("span"),this.stageEl.className="loading__stage",this.stageEl.textContent="старт",this.bytesEl=document.createElement("span"),this.bytesEl.className="loading__bytes",this.bytesEl.textContent="",s.append(this.stageEl,this.bytesEl),this.errorEl=document.createElement("div"),this.errorEl.className="loading__error",this.errorEl.hidden=!0,this.root.append(this.bar,s,this.errorEl),t.append(this.root)}setStage(t,n){t!==this.lastStage&&(this.stageEl.textContent=t,this.lastStage=t);const s=n!==void 0&&Number.isFinite(n);if(this.bar.classList.toggle("loading__bar--unknown",!s),s){const o=Math.round(Math.min(1,Math.max(0,n))*100);o!==this.lastPercent&&(this.fill.style.width=`${o}%`,this.root.setAttribute("aria-valuenow",String(o)),this.lastPercent=o)}}setError(t){this.bar.hidden=!0,this.stageEl.textContent="ошибка",this.errorEl.textContent=t,this.errorEl.hidden=!1}updateFromResources(){if(typeof performance.getEntriesByType!="function")return;const t=performance.getEntriesByType("resource");let n=0,s=0;for(const a of t)a.name.indexOf(location.origin)===0&&(n+=a.encodedBodySize||a.transferSize||0,s=Math.max(s,a.responseEnd||0));if(n<=0)return;const o=`${Yi(n)} загружено`;o!==this.lastBytesText&&(this.bytesEl.textContent=o,this.lastBytesText=o)}hide(){return this.root.setAttribute("aria-hidden","true"),this.root.classList.add("hidden"),new Promise(t=>{let n=!1;const s=()=>{n||(n=!0,this.root.remove(),t())};this.root.addEventListener("transitionend",s,{once:!0}),setTimeout(s,400)})}}function Yi(e){return e<1024?`${e} Б`:e<1024*1024?`${(e/1024).toFixed(0)} КБ`:`${(e/(1024*1024)).toFixed(1)} МБ`}const Ea="/blend-ars/assets/LilitaOne-Regular.C8J_njg9.ttf",Ki=new URL("/blend-ars/assets/fullscreen.C4xFj3BF.svg",import.meta.url).href,Ji=new URL("/blend-ars/assets/fullscreen-exit.D85sBYy_.svg",import.meta.url).href,Xi=new URL("/blend-ars/assets/info.BdEiL0Sf.svg",import.meta.url).href,qi=new URL("/blend-ars/assets/book-open.CLVm05VY.svg",import.meta.url).href,Qi=new URL("/blend-ars/assets/trophy.DpYLSMCP.svg",import.meta.url).href,Qo=new URL("/blend-ars/assets/gear_six.TA3VDyxO.svg",import.meta.url).href,Zi=new URL("/blend-ars/assets/camera-rotate.D-uiZS3m.svg",import.meta.url).href,er=new URL("/blend-ars/assets/music-note.BpgtDFsX.svg",import.meta.url).href,tr=new URL("/blend-ars/assets/package.BDtnf6Kx.svg",import.meta.url).href,nr=new URL("/blend-ars/assets/flag.CeS1AlXY.svg",import.meta.url).href,sr=new URL("/blend-ars/assets/garage.D_BJEZuB.svg",import.meta.url).href,or=new URL("/blend-ars/assets/storefront.e4K1ebmi.svg",import.meta.url).href,ar=new URL("/blend-ars/assets/truck.rvSKQmy5.svg",import.meta.url).href,ir=new URL("/blend-ars/assets/coupe.DdXCwqWg.svg",import.meta.url).href,rr=new URL("/blend-ars/assets/x.D2ii0gML.svg",import.meta.url).href,cr=new URL("/blend-ars/assets/list.DXUiLcf_.svg",import.meta.url).href,lr=new URL("/blend-ars/assets/triangle-left.DPdzCyZ0.svg",import.meta.url).href,Gd=new URL("/blend-ars/assets/stop-square.Cvj1GcXd.svg",import.meta.url).href,Wd=new URL("/blend-ars/assets/arrows_clockwise.Toz6NZFk.svg",import.meta.url).href,Sa="/blend-ars/assets/ui-click.DcT3uYBZ.wav",dr={click:1,toggle:1.22,window:.86},ur=.5;let ka=()=>.5,$e=null,Fn=null,bt=null,Zo=!1;function mr(e){ka=e}function pr(){if(Zo)return;Zo=!0;const e=window.AudioContext??window.webkitAudioContext;if(e!==void 0){try{$e=new e}catch{$e=null;return}fetch(Sa).then(t=>t.arrayBuffer()).then(t=>$e?.decodeAudioData(t)).then(t=>{Fn=t??null}).catch(()=>{Fn=null})}}function xe(e="click"){const t=ur*ka();if(t>0){if(Fn!==null&&$e!==null){$e.state==="suspended"&&$e.resume().catch(()=>{});const n=$e.createBufferSource();n.buffer=Fn,n.playbackRate.value=dr[e];const s=$e.createGain();s.gain.value=t,n.connect(s).connect($e.destination),n.start();return}bt===null&&(bt=new Audio(Sa),bt.preload="auto"),bt.volume=t,bt.currentTime=0,bt.play().catch(()=>{})}}function Xe(e){const t=n=>{if(!n.isPrimary||n.pointerType==="mouse"&&n.button!==0)return;const s=n.target;if(!(s instanceof Element)||s.closest('[disabled], [aria-disabled="true"]')||s.closest('input[type="range"]'))return;if(s.closest('input[type="checkbox"], .modes__card, [role="switch"]')){xe("toggle");return}s.closest('button, .mitem, [role="button"], .dlg__close')&&xe("click")};return e.addEventListener("pointerdown",t,!0),()=>e.removeEventListener("pointerdown",t,!0)}function Zt(e){const t=n=>{const s=n.target;s instanceof HTMLInputElement&&s.type==="range"&&xe("click")};return e.addEventListener("change",t,!0),()=>e.removeEventListener("change",t,!0)}const fr=`
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
`;function pn(e){const t=document.createElement("div");if(t.className="dlg",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",e.title),!document.getElementById("dlg-style")){const i=document.createElement("style");i.id="dlg-style",i.textContent=fr,document.head.append(i)}const n=document.createElement("div");n.className="dlg__panel";const s=document.createElement("h2");s.className="dlg__title",s.textContent=e.title;const o=document.createElement("div");return o.className="dlg__body",o.append(e.body),n.append(s,o),t.append(n),document.body.append(t),{root:t,open(){t.hidden=!1},close(){t.hidden=!0},destroy(){t.remove()}}}const hr=[{body:"truck",title:"Джип",note:"Грузовик. Родное шасси, грузовая физика.",icon:ar},{body:"maserati",title:"Мазерати",note:"GT3-обвес на том же шасси.",icon:ir}],br=`
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
`;function gr(e){if(!document.getElementById("game-modes-style")){const o=document.createElement("style");o.id="game-modes-style",o.textContent=br,document.head.append(o)}const t=document.createElement("div");t.className="modes";const n=hr.map(o=>{const a=document.createElement("button");a.className="modes__card",a.type="button",a.dataset.body=o.body;const i=document.createElement("span");i.className="modes__art",i.style.setProperty("--modes-icon",`url(${JSON.stringify(o.icon)})`);const l=document.createElement("span");l.className="modes__title",l.textContent=o.title;const d=document.createElement("p");return d.className="modes__note",d.textContent=o.note,a.append(i,l,d),a.addEventListener("pointerdown",f=>{f.preventDefault(),!a.disabled&&e(o.body)}),t.append(a),a}),s=pn({title:"Режимы игры",body:t});return{dialog:s,open(){s.open()},setBusy(o){for(const a of n)a.disabled=o},destroy(){s.destroy()}}}const xr={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:8,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:6,fill:1.05,rimLeft:6.15,rimRight:6.3,spot:7.05,fog:.005,gamma:1,gammaStrength:.5,toneMapping:2,sunElevation:15,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:.3}},shadows:{val:{cascades:4,distribution:.95,blend:.12,distance:320,resolution:4096,bias:0,normalBias:.05}},postfx:{on:!0,val:{bloom:.1,bloomBlur:16,bloomThreshold:.2,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:.95,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:1,fps:0,msaa:!0}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},_r={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:4,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:5,fill:.3,rimLeft:.5,rimRight:.5,spot:2,fog:.0035,gamma:0,gammaStrength:1.2,toneMapping:2,sunElevation:9,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:1}},shadows:{val:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3}},postfx:{on:!1,val:{bloom:0,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.48,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:.5,fps:30,msaa:!1}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},yr=[{key:"armored-truck-5t-300hp",name:"Бронированный грузовик — 5 т, 300 л.с.",note:"Тяжёлая машина: огромная инерция поворота, крен не валит, ручник срабатывает как тормоз. Дизель: пик момента на 1700 об/мин, отсечка 3400.",val:{mass:5e3,engineTorque:1260,peakTorqueRpm:1700,maxRpm:3400,finalDrive:7.5,brakeForce:11e3,engineBraking:.22,dragForce:4,rollingResistance:.03,lateralGripAssist:2.4,wheelGrip:5,rollInfluence:.12,antiRoll:1.2,inertiaScale:2.8,inertiaRoll:1.9,inertiaPitch:1.6,suspStiffness:26,suspDamping:2.6,suspCompression:5.2,suspTravel:.45,suspForce:7e4,highSpeedLock:.5,highSpeedLockAt:90}},{key:"muscle-car-4t-500hp",name:"Muscle car — 4 т, 500 л.с.",note:"Кузов на мягких пружинах: нос гуляет, на скорости ложится на борт и переворачивается. Атмосферник: пик 4200 об/мин, отсечка 5600.",val:{mass:4e3,engineTorque:850,peakTorqueRpm:4200,maxRpm:5600,finalDrive:6.5,brakeForce:15e3,engineBraking:.1,dragForce:2,rollingResistance:.015,lateralGripAssist:.6,wheelGrip:4.2,rollInfluence:.8,antiRoll:.25,inertiaScale:1.8,inertiaRoll:.6,inertiaPitch:.9,suspStiffness:22,suspDamping:2.4,suspCompression:4.6,suspTravel:.34,suspForce:62e3,highSpeedLock:.6,highSpeedLockAt:130}}],Ca="blendars.presets.v1",Na="blendars-settings",La=1;let ue={active:null,list:[]},ea=!1;function ze(){if(ea)return ue;ea=!0;try{const e=localStorage.getItem(Ca);if(!e)return ue;const t=JSON.parse(e);if(!t||typeof t!="object")return ue;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=vr(o);a&&s.push(a)}ue={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ue}function vr(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Bt(){try{localStorage.setItem(Ca,JSON.stringify(ue))}catch{}}function qs(){return ze().list.slice().sort((t,n)=>n.created-t.created)}function Bn(){return ze().active}function wr(){const e=ze();return e.active?e.list.find(t=>t.id===e.active)??null:null}function Qs(e){ze(),ue.active=e,Bt()}function _t(e,t,n=Date.now()){ze();const s={id:Ar(n),name:e.trim()||Je(new Date(n)),created:n,data:t};return ue.list.push(s),ue.active=s.id,Bt(),s}function Er(e,t){const s=ze().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,Bt(),!0):!1}function Aa(e,t){const s=ze().list.find(o=>o.id===e);return s?(s.data=t,Bt(),!0):!1}function Sr(e){ze();const t=ue.list.findIndex(n=>n.id===e);t<0||(ue.list.splice(t,1),ue.active===e&&(ue.active=null),Bt())}function Je(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function kr(){ze(),ue={active:null,list:[]},Bt()}function Cr(e){const t={app:Na,version:La,name:e.name,created:e.created,data:e.data},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`${Lr(e.name)}.json`,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Nr(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==Na||n.version!==La||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function Lr(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function Ar(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Ra="blendars.physics-presets.v1",lo="blendars-physics",uo=1;let se={active:null,list:[]},ta=!1;function He(){if(ta)return se;ta=!0;try{const e=localStorage.getItem(Ra);if(!e)return se;const t=JSON.parse(e);if(!t||typeof t!="object")return se;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=Rr(o);a&&s.push(a)}se={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return se}function Rr(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function dt(){try{localStorage.setItem(Ra,JSON.stringify(se))}catch{}}function na(){return He().list.slice().sort((e,t)=>t.created-e.created)}function sa(){return He().active}function oa(e){He(),se.active=e,dt()}function Tr(e,t,n=Date.now()){He();const s={id:Pa(n),name:e.trim()||yt(new Date(n)),created:n,data:t};return se.list.push(s),se.active=s.id,dt(),s}function Mr(e,t){const s=He().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,dt(),!0):!1}function Pr(e,t){const s=He().list.find(o=>o.id===e);return s?(s.data=t,dt(),!0):!1}function Ir(e){He();const t=se.list.findIndex(n=>n.id===e);t<0||(se.list.splice(t,1),se.active===e&&(se.active=null),dt())}function $r(){He(),se={active:null,list:[]},dt()}function Fr(e){He();let t=0;for(const n of e){const s=n.created??Date.now()+t,o=n.name?.trim()||yt(new Date(s));se.list.some(i=>i.name===o&&i.created===s)||(se.list.push({id:Pa(s),name:o,created:s,data:n.data}),t++)}return t>0&&dt(),t}function yt(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function Br(e){Ma(`${jr(e.name)}.json`,{app:lo,version:uo,...Ta(e)})}function Or(e){Ma("physics-presets.json",{app:lo,version:uo,presets:e.map(Ta)})}function Dr(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==lo||n.version!==uo)return null;if(Array.isArray(n.presets)){const o=[];for(const a of n.presets){if(!a||typeof a!="object")continue;const i=aa(a);i&&o.push(i)}return o.length>0?{items:o}:null}const s=aa(n);return s?{items:[s]}:null}function Ta(e){return{name:e.name,created:e.created,data:e.data}}function aa(e){if(!e.data||typeof e.data!="object")return null;const t={data:e.data};return typeof e.name=="string"&&(t.name=e.name),typeof e.created=="number"&&Number.isFinite(e.created)&&(t.created=e.created),t}function Ma(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=e,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function jr(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"physics-preset"}function Pa(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const mo="blendars.sound-effects.v3",po="blendars.sound-effects.v2",Ia=[["engine","Двигатель"],["road","Шум качения"],["skid","Скрежет шин"],["shift","Переключение передач"],["impact","Удары кузова"],["landing","Посадка на колёса"],["music","Фоновая музыка"],["uiClick","Клики меню"]],$a=Ia.map(([e])=>e),Fa={engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},zr={engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1},ke={...Fa},_e={...zr},Ne={engineTorque:{label:"Момент двигателя (Н·м)",def:520,off:520,min:200,max:1600,decimals:0},peakTorqueRpm:{label:"Обороты пика момента",def:1700,off:1700,min:800,max:6e3,decimals:0},maxRpm:{label:"Отсечка двигателя",def:4200,off:4200,min:2e3,max:8e3,decimals:0},finalDrive:{label:"Главная пара",def:7,off:7,min:3,max:12,decimals:2},brakeForce:{label:"Сила тормозов (Н)",def:6500,off:6500,min:2e3,max:2e4,decimals:0},mass:{label:"Масса кузова (кг)",def:2200,off:2200,min:1200,max:8e3,decimals:0},engineBraking:{label:"Торможение двигателем",def:.15,off:.07,min:0,max:.4,decimals:2},dragForce:{label:"Сопротивление воздуха",def:1.75,off:0,min:0,max:4,decimals:2},rollingResistance:{label:"Сопротивление качения",def:.02,off:0,min:0,max:.06,decimals:3},lateralGripAssist:{label:"Помощь бокового сцепа",def:1.5,off:0,min:0,max:8,decimals:1},wheelGrip:{label:"Сцепление колёс",def:4,off:2.7,min:1,max:10,decimals:1},rollInfluence:{label:"Крен (перенос нагрузки)",def:.3,off:.08,min:0,max:1.2,decimals:2},suspStiffness:{label:"Жёсткость пружины",def:20,off:20,min:5,max:80,decimals:1},suspDamping:{label:"Демпфер (распускание)",def:2.3,off:2.3,min:.5,max:8,decimals:2},suspCompression:{label:"Демпфер (сжатие)",def:4.4,off:4.4,min:.5,max:12,decimals:2},suspTravel:{label:"Ход подвески",def:.35,off:.35,min:.1,max:.8,decimals:2},suspForce:{label:"Предел силы пружины (Н)",def:2e4,off:2e4,min:5e3,max:15e4,decimals:0},suspRelVel:{label:"Демпфер и скорость кузова",def:1,off:1,min:0,max:2,decimals:2},antiRoll:{label:"Стабилизатор (рычаг)",def:0,off:0,min:0,max:2.5,decimals:2},inertiaScale:{label:"Инерция поворота (yaw)",def:1.7,off:1,min:.3,max:3.5,decimals:2},inertiaRoll:{label:"Инерция крена (переворот)",def:1.2,off:1,min:.3,max:2.5,decimals:2},inertiaPitch:{label:"Инерция тангажа (клевок)",def:1.2,off:1,min:.3,max:2.5,decimals:2},highSpeedLock:{label:"Спад угла руля (доля)",def:.55,off:.4,min:.2,max:1,decimals:2},highSpeedLockAt:{label:"Скорость спада руля",def:100,off:80,min:50,max:200,decimals:0,unit:"kmh"},camTurnRate:{label:"Камера: скорость поворота",def:3.5,off:2.2,min:1,max:6,decimals:1},camFollowRate:{label:"Камера: сглаживание",def:11,off:9,min:4,max:20,decimals:0},skidThreshold:{label:"Порог звука юза",def:.15,off:.3,min:0,max:.5,decimals:2}},Ce=Object.keys(Ne),fo="blendars.physics.v1",ae={},me={};Hr();function Hr(){for(const e of Ce)ae[e]=!0,me[e]=Ne[e].def}function Ur(){try{const e=localStorage.getItem(fo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:null,o=typeof n.val=="object"&&n.val!==null?n.val:null;for(const a of Ce){const i=Ne[a],l=s?.[a];typeof l=="boolean"&&(ae[a]=l);const d=o?.[a];typeof d=="number"&&Number.isFinite(d)&&(me[a]=Math.min(i.max,Math.max(i.min,d)))}}catch{}}function vt(){try{localStorage.setItem(fo,JSON.stringify({on:ae,val:me}))}catch{}}function Vd(e){return ae[e]?me[e]:Ne[e].off}const Ln=[];function Yd(e){return Ln.push(e),()=>{const t=Ln.indexOf(e);t>=0&&Ln.splice(t,1)}}const An=[];function te(){for(const e of An)e()}function Gr(e){return An.push(e),()=>{const t=An.indexOf(e);t>=0&&An.splice(t,1)}}function wt(){for(const e of Ln)e();te()}function Os(e){const t=Ne[e],n=me[e];return t.unit==="kmh"?`${Math.round(n)} км/ч`:n.toFixed(t.decimals)}const Ba=[0,1,2,3,4],Wr=["линейный","филмик","ACES","нейтральный","без тонмаппинга"],Oe={exposure:{label:"Экспозиция кадра",def:.5,min:.5,max:10,decimals:1},key:{label:"Яркость солнца",def:1,min:0,max:10,decimals:2},fill:{label:"Заполняющий свет",def:.3,min:0,max:15,decimals:2},rimLeft:{label:"Контровой слева",def:.5,min:0,max:15,decimals:2},rimRight:{label:"Контровой справа",def:.5,min:0,max:15,decimals:2},spot:{label:"Верхний софтбокс",def:2,min:0,max:15,decimals:2},fog:{label:"Туман задника",def:.0035,min:0,max:.05,decimals:4},gamma:{label:"Гамма-коррекция (sRGB)",def:1,min:0,max:1,decimals:0,options:[0,1]},gammaStrength:{label:"Сила гаммы",def:1.2,min:.5,max:3,decimals:2},toneMapping:{label:"Тонмаппинг",def:3,min:0,max:4,decimals:0,options:Ba},sunElevation:{label:"Высота солнца",def:34,min:-10,max:90,decimals:0},sunAzimuth:{label:"Азимут солнца",def:135,min:0,max:360,decimals:0},turbidity:{label:"Мутность неба",def:3,min:1,max:10,decimals:2},rayleigh:{label:"Рэлеевское рассеяние",def:2.2,min:0,max:5,decimals:2},mieCoefficient:{label:"Ми-рассеяние",def:.005,min:0,max:.05,decimals:3},mieDirectionalG:{label:"Анизотропия Ми",def:.8,min:0,max:.99,decimals:2},skyLuminance:{label:"Яркость неба",def:1,min:0,max:5,decimals:2}},St=Object.keys(Oe),ho="blendars.lighting.v1",fe={};Vr();Yr();function Vr(){for(const e of St)fe[e]=Oe[e].def}function Yr(){try{const e=localStorage.getItem(ho);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of St){const a=Oe[o],i=s?.[o];typeof i=="number"&&Number.isFinite(i)&&(fe[o]=Math.min(a.max,Math.max(a.min,i)))}}catch{}}function Rn(){try{localStorage.setItem(ho,JSON.stringify({val:fe}))}catch{}}function Kr(e){return fe[e]}function Kd(){return 2**(Kr("gammaStrength")-1)}const Tn=[];function Jd(e){return Tn.push(e),()=>{const t=Tn.indexOf(e);t>=0&&Tn.splice(t,1)}}function Mn(){for(const e of Tn)e();te()}function ia(e){const t=Oe[e];if(t.options){const n=t.options.indexOf(fe[e]);return n>=0?n:0}return Math.round((fe[e]-t.min)/(t.max-t.min)*100)}function Jr(e,t){const n=Oe[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function Ds(e){const t=Oe[e],n=fe[e];return t.options&&t.options.length===2&&t.options[1]===1?n>=1?"вкл":"выкл":e==="toneMapping"?Wr[Ba.indexOf(n)]??n.toFixed(t.decimals):n.toFixed(t.decimals)}const Xr=[512,1024,2048,4096],Le={cascades:{label:"Каскадов",def:2,min:1,max:4,decimals:0,options:[1,2,3,4]},distribution:{label:"Раскладка каскадов",def:.7,min:0,max:1,decimals:2},blend:{label:"Бесшовность каскадов",def:.12,min:0,max:.3,decimals:2},distance:{label:"Дальность теней",def:320,min:50,max:500,decimals:0},resolution:{label:"Разрешение атласа",def:4096,min:0,max:3,decimals:0,options:Xr},bias:{label:"Смещение тени",def:0,min:0,max:1,decimals:2},normalBias:{label:"Смещение по нормали",def:0,min:0,max:.5,decimals:2}},Qe=Object.keys(Le),bo="blendars.shadows.v1",ee={};qr();Qr();function qr(){for(const e of Qe)ee[e]=Le[e].def}function Qr(){try{const e=localStorage.getItem(bo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of Qe){const a=Le[o],i=s?.[o];if(!(typeof i!="number"||!Number.isFinite(i))){if(a.options){const d=a.options[i]===i?i:a.options.indexOf(i);d>=0&&d<a.options.length&&(ee[o]=Number(a.options[d]));continue}ee[o]=Math.min(a.max,Math.max(a.min,i))}}}catch{}}function kt(){try{localStorage.setItem(bo,JSON.stringify({val:ee}))}catch{}}function Xd(e){return ee[e]}const Pn=[];function qd(e){return Pn.push(e),()=>{const t=Pn.indexOf(e);t>=0&&Pn.splice(t,1)}}function en(){for(const e of Pn)e();te()}function js(e,t){const n=Le[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function Zr(e,t){const n=Le[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function zs(e){const t=Le[e];return e==="distance"?`${Math.round(ee[e])} м`:ee[e].toFixed(t.decimals)}const De={bloom:{label:"Ореол (bloom)",def:.05,min:0,max:.1,decimals:3},bloomBlur:{label:"Мягкость ореола",def:8,min:1,max:16,decimals:0,options:[1,2,4,8,16]},bloomThreshold:{label:"Порог ореола",def:.6,min:0,max:2,decimals:2},vignette:{label:"Виньетка",def:0,min:0,max:1,decimals:2},vignetteInner:{label:"Виньетка: начало",def:0,min:0,max:1,decimals:2},vignetteOuter:{label:"Виньетка: край",def:1.25,min:.5,max:2,decimals:2},vignetteCurvature:{label:"Виньетка: кромка",def:.5,min:.2,max:1,decimals:2},taa:{label:"Временное сглаживание",def:0,min:0,max:1,decimals:0,options:[0,1]},taaJitter:{label:"Сглаживание: джиттер",def:0,min:0,max:1,decimals:2},dof:{label:"Глубина резкости",def:1,min:0,max:1,decimals:0,options:[0,1]},dofFocus:{label:"Фокус (м)",def:1,min:1,max:60,decimals:1},dofRange:{label:"Зона фокуса (м)",def:40,min:1,max:40,decimals:1},dofRadius:{label:"Сила размытия",def:1,min:1,max:8,decimals:1},dofNear:{label:"Размывать передний план",def:1,min:0,max:1,decimals:0,options:[0,1]},grading:{label:"Цветокоррекция",def:1,min:0,max:1,decimals:0,options:[0,1]},brightness:{label:"Яркость",def:1,min:.5,max:1.5,decimals:2},contrast:{label:"Контраст",def:1,min:.5,max:1.5,decimals:2},saturation:{label:"Насыщенность",def:1,min:0,max:2,decimals:2},fringing:{label:"Аберрация",def:0,min:0,max:100,decimals:0},sharpness:{label:"Резкость",def:0,min:0,max:1,decimals:2}},Ze=Object.keys(De),go="blendars.postfx.v1",xo="blendars.postfx.on",K={},Oa=!0;let je=Oa;ec();tc();function ec(){for(const e of Ze)K[e]=De[e].def;je=Oa}function tc(){try{const e=localStorage.getItem(go);if(e){const n=JSON.parse(e);if(n&&typeof n=="object"){const s=n,o=typeof s.val=="object"&&s.val!==null?s.val:null;for(const a of Ze){const i=De[a],l=o?.[a];typeof l=="number"&&Number.isFinite(l)&&(K[a]=Math.min(i.max,Math.max(i.min,l)))}}}const t=localStorage.getItem(xo);t!==null&&(je=t!=="0")}catch{}}function Fe(){try{localStorage.setItem(go,JSON.stringify({val:K})),localStorage.setItem(xo,je?"1":"0")}catch{}}function Hs(e){return K[e]}function Sn(){return je}function Us(e){je!==e&&(je=e,Fe(),qe())}const _o="blendars.hud.v1";let Nt=!0,et=1280;const ye=[],Zs=["fps","cpu","draw","vram"],nc={fps:"Частота кадра (FPS и мс)",cpu:"Загрузка CPU (обновление / рендер / физика)",draw:"Вызовы отрисовки и шейдеры",vram:"Видеопамять и разрешение"};let Lt={fps:!0,cpu:!0,draw:!0,vram:!0};function sc(){try{const e=localStorage.getItem(_o);if(!e)return;const t=JSON.parse(e);if(t&&typeof t=="object"){const n=t.on;if(n&&typeof n=="object"){const s=n.stats;typeof s=="number"&&(Nt=s!==0);const o=n.record;(o===1280||o===1920||o==="window")&&(et=o);const a=n.touch;typeof a=="number"&&(nn=a!==0)}}}catch{}}const yo="blendars.stats.v1";function oc(){try{const e=localStorage.getItem(yo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s={...Lt};for(const o of Zs){const a=n[o];typeof a=="boolean"&&(s[o]=a)}Lt=s}catch{}}function ac(){try{localStorage.setItem(yo,JSON.stringify(Lt))}catch{}}function vo(){try{localStorage.setItem(_o,JSON.stringify({on:{stats:Nt?1:0,record:et,touch:nn?1:0}}))}catch{}}function On(){return Nt}function Da(e){if(Nt!==e){Nt=e,vo();for(const t of ye)t();te()}}function Ee(e){return Lt[e]}function ic(e){return nc[e]}function rc(e,t){if(Lt[e]!==t){Lt[e]=t,ac();for(const n of ye)n();te()}}function cc(){return et}function eo(e){if(!(e!==1280&&e!==1920&&e!=="window")&&et!==e){et=e,vo();for(const t of ye)t();te()}}function lc(e){const t=et==="window"?e:et;return!Number.isFinite(t)||t<=0?1280:Math.round(t)}function ja(e){return ye.push(e),()=>{const t=ye.indexOf(e);t>=0&&ye.splice(t,1)}}let dc="full";function uc(){return dc}let nn=!0;function mc(){return nn}function pc(e){if(nn!==e){nn=e,vo();for(const t of ye)t();te()}}const za="blendars.touch.v1";let sn=1,on=1,an="split",rn=!1;function fc(){try{const e=localStorage.getItem(za);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t;typeof n.scale=="number"&&n.scale>=.6&&n.scale<=2&&(sn=n.scale),typeof n.opacity=="number"&&n.opacity>=.25&&n.opacity<=1&&(on=n.opacity),(n.layout==="split"||n.layout==="left"||n.layout==="right")&&(an=n.layout),typeof n.swap=="boolean"&&(rn=n.swap)}catch{}}function Yn(){try{localStorage.setItem(za,JSON.stringify({scale:sn,opacity:on,layout:an,swap:rn}))}catch{}}function hc(){return sn}function bc(e){const t=Math.min(Math.max(e,.6),2);if(sn!==t){sn=t,Yn();for(const n of ye)n();te()}}function gc(){return on}function xc(e){const t=Math.min(Math.max(e,.25),1);if(on!==t){on=t,Yn();for(const n of ye)n();te()}}function _c(){return an}function yc(e){if(an!==e){an=e,Yn();for(const t of ye)t();te()}}function vc(){return rn}function wc(e){if(rn!==e){rn=e,Yn();for(const t of ye)t();te()}}sc();oc();fc();const In=[];function Qd(e){return In.push(e),()=>{const t=In.indexOf(e);t>=0&&In.splice(t,1)}}function qe(){for(const e of In)e();te()}function ra(e,t){const n=De[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function Ec(e,t){const n=De[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function Gs(e){const t=K[e],n=De[e];return n.options&&n.options.length===2&&n.options[1]===1?t>=1?"вкл":"выкл":t.toFixed(n.decimals)}Sc();Ur();function Sc(){try{const e=localStorage.getItem(mo)??localStorage.getItem(po);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:n,o=typeof n.vol=="object"&&n.vol!==null?n.vol:null;for(const a of Object.keys(Fa)){const i=s[a];typeof i=="boolean"&&(ke[a]=i);const l=o?.[a];typeof l=="number"&&Number.isFinite(l)&&(_e[a]=Math.min(1,Math.max(0,l)))}}catch{}}function Dn(){try{localStorage.setItem(mo,JSON.stringify({on:ke,vol:_e})),localStorage.removeItem(po)}catch{}}function kc(e){return ke[e]?_e[e]:0}function Zd(e){return _e[e]}function eu(e,t){const n=Math.min(1,Math.max(0,t));_e[e]!==n&&(_e[e]=n,Dn(),te())}const Cc=`@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JSON.stringify(Ea)}) format('truetype');
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
`;function Ct(){return{version:1,physics:{on:{...ae},val:{...me}},lighting:{val:{...fe}},shadows:{val:{...ee}},postfx:{on:je,val:{...K}},sound:{on:{...ke},vol:{..._e}},hud:{on:{stats:Nt,record:et}},graphics:{val:{scale:At,fps:Rt,msaa:tt}},recording:{val:{fps:Tt,quality:Mt,keyFrame:Pt,sound:It}}}}function ca(){return{on:{...ae},val:{...me}}}function Nc(){const e={},t={};for(const n of Ce)e[n]=!0,t[n]=Ne[n].def;return{on:e,val:t}}let to=!1;function Lc(){return to}function Et(e){const t=[];if(!e||typeof e!="object")return{applied:t};to=!0;try{return Rc(e,t)}finally{to=!1}}function la(e){let t=!1;for(const n of Object.keys(e.on))if(Ce.includes(n)){const s=e.on[n];s!==void 0&&(ae[n]=s,t=!0)}for(const n of Object.keys(e.val))if(Ce.includes(n)){const s=Ne[n];if(s&&typeof s.min=="number"&&typeof s.max=="number"){const o=e.val[n];typeof o=="number"&&(me[n]=Math.min(s.max,Math.max(s.min,o)),t=!0)}}t&&(vt(),wt())}function Ac(e){if(!e||typeof e!="object")return null;const t=e,n={},s={};let o=!1;if(t.on&&typeof t.on=="object")for(const[a,i]of Object.entries(t.on))typeof i=="boolean"&&(n[a]=i,o=!0);if(t.val&&typeof t.val=="object")for(const[a,i]of Object.entries(t.val))typeof i=="number"&&Number.isFinite(i)&&(s[a]=i,o=!0);return o?{on:n,val:s}:null}function Rc(e,t){const n=e,s=(y,N,c)=>typeof y=="number"&&Number.isFinite(y)?Math.min(c,Math.max(N,y)):null,o=y=>y&&typeof y=="object"?y:null,a=y=>y&&typeof y=="object"?y:null,i=y=>y&&typeof y=="object"?y:null,l=n.physics&&typeof n.physics=="object"?n.physics:null;if(l){const y=a(l.on),N=o(l.val);let c=!1;for(const m of Ce){const p=Ne[m];y&&typeof y[m]=="boolean"&&(ae[m]=y[m],c=!0);const _=N?s(N[m],p.min,p.max):null;_!==null&&(me[m]=_,c=!0)}c&&(vt(),wt(),t.push("физика"))}const d=o(n.lighting&&typeof n.lighting=="object"?n.lighting.val:null);if(d){let y=!1;for(const N of St){const c=Oe[N],m=s(d[N],c.min,c.max);m!==null&&(fe[N]=m,y=!0)}y&&(Rn(),Mn(),t.push("свет"))}const f=o(n.shadows&&typeof n.shadows=="object"?n.shadows.val:null);if(f){let y=!1;for(const N of Qe){const c=Le[N],m=f[N];if(c.options){const C=c.options[m]===m?m:c.options.indexOf(m);C>=0&&C<c.options.length&&(ee[N]=Number(c.options[C]),y=!0);continue}const p=s(m,c.min,c.max);p!==null&&(ee[N]=p,y=!0)}y&&(kt(),en(),t.push("тени"))}const u=n.postfx&&typeof n.postfx=="object"?n.postfx:null;if(u){let y=!1;typeof u.on=="boolean"&&(je=u.on,y=!0);const N=o(u.val);if(N)for(const c of Ze){const m=De[c],p=N[c];if(m.options){const C=m.options.indexOf(p);C>=0&&C<m.options.length&&(K[c]=Number(m.options[C]),y=!0);continue}const _=s(p,m.min,m.max);_!==null&&(K[c]=_,y=!0)}y&&(Fe(),qe(),t.push("Post FX"))}const x=n.sound&&typeof n.sound=="object"?n.sound:null;if(x){const y=a(x.on),N=o(x.vol);let c=!1;for(const m of $a){y&&typeof y[m]=="boolean"&&(ke[m]=y[m],c=!0);const p=N?s(N[m],0,1):null;p!==null&&(_e[m]=p,c=!0)}c&&(Dn(),t.push("звук"))}const E=n.hud&&typeof n.hud=="object"?n.hud:null,h=E&&typeof E.on=="object"?E.on:null;if(h&&typeof h.stats=="boolean"){Da(h.stats);const y=h.record;(y===1280||y===1920||y==="window")&&eo(y),t.push("интерфейс")}const g=i(n.graphics&&typeof n.graphics=="object"?n.graphics.val:null);if(g){let y=!1;const N=g.scale;(N===.5||N===.75||N===1)&&(So(N),y=!0);const c=g.fps;(c===0||c===30||c===60||c===120)&&(ko(c),y=!0),typeof g.msaa=="boolean"&&(cn(g.msaa),y=!0),K.taa>0&&tt&&(cn(!1),y=!0),y&&(hn(),Kn(),t.push("графика"))}const S=i(n.recording&&typeof n.recording=="object"?n.recording.val:null);if(S){let y=!1;const N=S.fps;(N===24||N===30||N===60)&&(Xa(N),y=!0);const c=S.quality;(c==="low"||c==="medium"||c==="high")&&(qa(c),y=!0);const m=S.keyFrame;(m===1||m===2||m===4)&&(Qa(m),y=!0),typeof S.sound=="boolean"&&(Za(S.sound),y=!0),y&&(bn(),gn(),t.push("запись"))}return{applied:t}}const wo="blendars.graphics.v1";let At=1,Rt=0,tt=!0;const Eo="blendars.gfx-preset.v1",Tc={phone:{label:"Телефон",graphics:{scale:.5,fps:30,msaa:!1},shadows:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3},postfxOn:!1,postfx:{bloom:0,vignette:0,fringing:0,sharpness:0,grading:0,taa:0,taaJitter:0}},balanced:{label:"Оптимальный",graphics:{scale:.75,fps:60,msaa:!0},shadows:{cascades:2,distribution:.7,blend:.12,distance:220,resolution:2048,bias:.7,normalBias:.4},postfxOn:!0,postfx:{bloom:.04,bloomBlur:8,bloomThreshold:.6,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.5,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:.25}},ultra:{label:"Ультра",graphics:{scale:1,fps:0,msaa:!0},shadows:{cascades:4,distribution:.7,blend:.12,distance:320,resolution:4096,bias:1,normalBias:.5},postfxOn:!0,postfx:{bloom:.06,bloomBlur:8,bloomThreshold:0,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:1,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:.25}}};let fn="phone";function Mc(){const e=window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window,n=navigator.hardwareConcurrency??4,s=navigator.deviceMemory??4,o=Math.min(window.screen.width,window.screen.height)<768;return(e||t)&&(n<=4||s<=4||o)}function Pc(){return fn}function Ha(){try{localStorage.setItem(Eo,fn)}catch{}}function Ic(){try{const e=localStorage.getItem(Eo);(e==="phone"||e==="balanced"||e==="ultra")&&(fn=e)}catch{}}function Ua(e){const t=Tc[e];fn=e,Ha(),So(t.graphics.scale),ko(t.graphics.fps);const n=t.postfx.taa??0;cn(n>0?!1:t.graphics.msaa);for(const s of Qe)ee[s]=t.shadows[s]??Le[s].def;kt(),en(),je=t.postfxOn;for(const s of Ze){const o=t.postfx[s];typeof o=="number"&&(K[s]=o)}Fe(),qe()}const $n=[];function $c(){try{const e=localStorage.getItem(wo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.scale===.5||s.scale===.75||s.scale===1)&&(At=s.scale),(s.fps===0||s.fps===30||s.fps===60||s.fps===120)&&(Rt=s.fps),typeof s.msaa=="boolean"&&(tt=s.msaa)}catch{}}function hn(){try{localStorage.setItem(wo,JSON.stringify({val:{scale:At,fps:Rt,msaa:tt}}))}catch{}}function Kn(){for(const e of $n)e();te()}function Ga(){return At}function Wa(){return Rt}function it(){return tt}const Fc=4;function tu(){return tt?Fc:1}function So(e){At!==e&&(At=e,hn(),Kn())}function ko(e){Rt!==e&&(Rt=e,hn(),Kn())}function cn(e){tt!==e&&(tt=e,hn(),Kn())}function Va(e){return $n.push(e),()=>{const t=$n.indexOf(e);t>=0&&$n.splice(t,1)}}$c();Ic();const Co="blendars.recording.v1";let Tt=30,Mt="high",Pt=2,It=!0;const Bc=[];function Oc(){try{const e=localStorage.getItem(Co);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.fps===24||s.fps===30||s.fps===60)&&(Tt=s.fps),(s.quality==="low"||s.quality==="medium"||s.quality==="high")&&(Mt=s.quality),(s.keyFrame===1||s.keyFrame===2||s.keyFrame===4)&&(Pt=s.keyFrame),typeof s.sound=="boolean"&&(It=s.sound)}catch{}}function bn(){try{localStorage.setItem(Co,JSON.stringify({val:{fps:Tt,quality:Mt,keyFrame:Pt,sound:It}}))}catch{}}function gn(){for(const e of Bc)e();te()}function Ya(){return Tt}function Ka(){return Mt}function Ja(){return Pt}function no(){return It}function Xa(e){Tt!==e&&(Tt=e,bn(),gn())}function qa(e){Mt!==e&&(Mt=e,bn(),gn())}function Qa(e){Pt!==e&&(Pt=e,bn(),gn())}function Za(e){It!==e&&(It=e,bn(),gn())}Oc();function Dc(){const e=wr();if(e){const d=Et(e.data);d.applied.length>0&&console.info(`[settings] применён пресет «${e.name}»: ${d.applied.join(", ")}`);return}let t=!1;try{t=!!(localStorage.getItem(mo)??localStorage.getItem(po)??localStorage.getItem(fo)??localStorage.getItem(ho)??localStorage.getItem(bo)??localStorage.getItem(go)??localStorage.getItem(xo)??localStorage.getItem(_o)??localStorage.getItem(yo)??localStorage.getItem(wo)??localStorage.getItem(Co)??localStorage.getItem(Eo))}catch{t=!0}if(t)return;const n=Mc();fn=n?"phone":"ultra",Ha(),hn(),kt(),Fe();const o=Ct();Ua("balanced");const a=Ct();Et(n?_r:xr);const i=Ct();Et(o),_t("По умолчанию",o),_t("Оптимальный",a),_t(n?"Телефон":"Ультра",i);const l=qs().find(d=>d.name===(n?"Телефон":"Ультра"));Qs(l?l.id:null),console.info(`[settings] сохранённых настроек нет — созданы пресеты «По умолчанию», «Оптимальный», «${n?"Телефон":"Ультра"}» (активен «${n?"Телефон":"Ультра"}»)`)}Dc();function jc(){const e=document.createElement("div");e.className="settings",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Настройки");const t=document.createElement("style");t.textContent=Cc;const n=document.createElement("div");n.className="settings__panel";const s=document.createElement("h2");s.className="settings__title",s.textContent="Настройки";const o=document.createElement("p");o.className="settings__hint",o.textContent="Галочка — эффект включён, ползунок — его громкость. Выбор сохраняется в браузере и действует сразу.",o.id="settings-hint",e.setAttribute("aria-describedby",o.id);const a=document.createElement("div");a.className="settings__tabs",a.setAttribute("role","tablist");const i=document.createElement("button");i.className="settings__tab settings__tab--on",i.type="button",i.textContent="Звук",i.setAttribute("role","tab"),i.setAttribute("aria-selected","true");const l=document.createElement("button");l.className="settings__tab",l.type="button",l.textContent="Физика",l.setAttribute("role","tab"),l.setAttribute("aria-selected","false");const d=document.createElement("button");d.className="settings__tab",d.type="button",d.textContent="Освещение",d.setAttribute("role","tab"),d.setAttribute("aria-selected","false");const f=document.createElement("button");f.className="settings__tab",f.type="button",f.textContent="Тени",f.setAttribute("role","tab"),f.setAttribute("aria-selected","false");const u=document.createElement("button");u.className="settings__tab",u.type="button",u.textContent="Post FX",u.setAttribute("role","tab"),u.setAttribute("aria-selected","false");const x=document.createElement("button");x.className="settings__tab",x.type="button",x.textContent="Интерфейс",x.setAttribute("role","tab"),x.setAttribute("aria-selected","false");const E=document.createElement("button");E.className="settings__tab",E.type="button",E.textContent="Управление",E.setAttribute("role","tab"),E.setAttribute("aria-selected","false");const h=document.createElement("button");h.className="settings__tab",h.type="button",h.textContent="Пресеты",h.setAttribute("role","tab"),h.setAttribute("aria-selected","false");const g=document.createElement("button");g.className="settings__tab",g.type="button",g.textContent="Графика",g.setAttribute("role","tab"),g.setAttribute("aria-selected","false");const S=document.createElement("button");S.className="settings__tab",S.type="button",S.textContent="Запись",S.setAttribute("role","tab"),S.setAttribute("aria-selected","false"),a.append(i,l,d,f,u,x,E,g,S,h);const y=r=>{const b=[i,l,d,f,u,x,E,g,S,h];for(let k=0;k<b.length;k++){const M=b[k];if(!M)continue;const D=k===r;M.classList.toggle("settings__tab--on",D),M.setAttribute("aria-selected",String(D))}N.hidden=r!==0,p.hidden=r!==1,nt.hidden=r!==2,st.hidden=r!==3,Ue.hidden=r!==4,Ge.hidden=r!==5,we.hidden=r!==6,mt.hidden=r!==7,ot.hidden=r!==8,ht.hidden=r!==9};i.addEventListener("click",()=>y(0)),l.addEventListener("click",()=>y(1)),d.addEventListener("click",()=>y(2)),f.addEventListener("click",()=>y(3)),u.addEventListener("click",()=>y(4)),x.addEventListener("click",()=>y(5)),E.addEventListener("click",()=>y(6)),g.addEventListener("click",()=>y(7)),S.addEventListener("click",()=>y(8)),h.addEventListener("click",()=>y(9));const N=document.createElement("div");N.className="settings__pane",N.append(o);const c=document.createElement("div");c.className="settings__list";const m={};for(const[r,b]of Ia){const k=document.createElement("div");k.className="settings__row";const M=document.createElement("label");M.className="settings__head";const D=document.createElement("span");D.textContent=b;const F=document.createElement("input");F.type="checkbox",F.checked=ke[r],M.append(D,F);const R=document.createElement("div");R.className="settings__vol",R.classList.toggle("settings__vol--off",!ke[r]);const P=document.createElement("input");P.type="range",P.min="0",P.max="100",P.step="1",P.value=String(Math.round(_e[r]*100)),P.setAttribute("aria-label",`Громкость: ${b}`);const $=document.createElement("output");$.className="settings__pct",$.textContent=`${P.value}%`,P.addEventListener("input",()=>{_e[r]=Number(P.value)/100,$.textContent=`${P.value}%`,Dn(),te()}),R.append(P,$),F.addEventListener("change",()=>{ke[r]=F.checked,R.classList.toggle("settings__vol--off",!F.checked),Dn(),te()}),m[r]=()=>{F.checked=ke[r],R.classList.toggle("settings__vol--off",!ke[r]),P.value=String(Math.round(_e[r]*100)),$.textContent=`${P.value}%`},k.append(M,R),c.append(k)}N.append(c);const p=document.createElement("div");p.className="settings__pane",p.hidden=!0;const _=document.createElement("div");_.className="physics-tabs";const C=document.createElement("button");C.className="physics-tab physics-tab--on",C.type="button",C.textContent="Тонкая настройка",C.setAttribute("role","tab"),C.setAttribute("aria-selected","true");const L=document.createElement("button");L.className="physics-tab",L.type="button",L.textContent="Пресеты физики",L.setAttribute("role","tab"),L.setAttribute("aria-selected","false"),_.append(C,L),p.append(_);const w=document.createElement("div");w.className="settings__block";const v=document.createElement("div");v.className="settings__block",p.append(w,v);const T=document.createElement("p");T.className="settings__hint",T.textContent="Галка включает тюнинг «против скольжения»; выключена — исходное поведение игры.",w.append(T);const B=document.createElement("div");B.className="settings__list",w.append(B);const I=r=>{const b=r==="fine";C.classList.toggle("physics-tab--on",b),L.classList.toggle("physics-tab--on",!b),C.setAttribute("aria-selected",String(b)),L.setAttribute("aria-selected",String(!b)),w.hidden=!b,v.hidden=b};C.addEventListener("click",()=>I("fine")),L.addEventListener("click",()=>I("presets"));let O=()=>{};const A=document.createElement("p");A.className="settings__status",A.setAttribute("role","status");const ne=r=>{const b=Nc();let k=0;for(const M of Object.keys(r.val)){if(!(M in b.val))continue;const D=r.val[M];typeof D=="number"&&(b.val[M]=D,k++)}la(b),oa(null),O(),H(),A.textContent=`Машина «${r.name}»: задано ${k} параметров, остальные — по умолчанию.`},ie=r=>{const b=Ac(r.data);if(!b){A.textContent=`В пресете «${r.name}» нет настроек физики.`;return}la(b),oa(r.id),O(),H(),A.textContent=`Применён пресет «${r.name}».`},re=(r,b)=>{const k=document.createElement("div");k.className="settings__presetsection";const M=document.createElement("p");return M.className="settings__presettitle",M.textContent=r,k.append(M,b),k},oe=document.createElement("div");oe.className="settings__presets";for(const r of yr){const b=document.createElement("div");b.className="settings__preset";const k=document.createElement("div");k.className="settings__presetinfo";const M=document.createElement("span");M.className="settings__presetname",M.textContent=r.name;const D=document.createElement("span");D.className="settings__presetmeta",D.textContent=r.note,k.append(M,D);const F=document.createElement("button");F.className="settings__presetbtn",F.type="button",F.textContent="Применить",F.setAttribute("aria-label",`Применить пресет «${r.name}»`),F.addEventListener("click",()=>ne(r)),b.append(k,F),oe.append(b)}const pe=document.createElement("div");pe.className="settings__presets";const Q=r=>r>0?yt(new Date(r)):"дата неизвестна",H=()=>{pe.replaceChildren();const r=na(),b=sa();if(r.length===0){const k=document.createElement("p");k.className="settings__presetempty",k.textContent="Своих пресетов нет: настройте физику и нажмите «Сохранить».",pe.append(k);return}for(const k of r){const M=document.createElement("div");M.className="settings__preset";const D=k.id===b;D&&M.classList.add("settings__preset--active");const F=document.createElement("div");F.className="settings__presetinfo";const R=document.createElement("span");R.className="settings__presetname",R.textContent=k.name;const P=document.createElement("span");P.className="settings__presetmeta",P.textContent=Q(k.created),F.append(R,P);const $=document.createElement("button");$.className="settings__presetbtn",$.type="button",$.textContent="Применить",$.disabled=D,$.setAttribute("aria-label",`Применить пресет физики «${k.name}»`),$.addEventListener("click",()=>ie(k));const j=document.createElement("button");j.className="settings__presetbtn",j.type="button",j.textContent="✎",j.title="Переименовать",j.setAttribute("aria-label",`Переименовать пресет ${k.name}`),j.addEventListener("click",()=>{const z=document.createElement("input");z.className="settings__presetnameinput",z.type="text",z.value=k.name,R.replaceWith(z),z.focus(),z.select();const Xt=()=>{Mr(k.id,z.value),H()};z.addEventListener("keydown",at=>{at.key==="Enter"&&Xt(),at.key==="Escape"&&(at.stopPropagation(),H())}),z.addEventListener("blur",Xt)});const W=document.createElement("button");W.className="settings__presetbtn",W.type="button",W.textContent="↓",W.title="Экспорт в файл",W.setAttribute("aria-label",`Экспорт пресета ${k.name} в файл`),W.addEventListener("click",()=>Br(k));const U=document.createElement("button");U.className="settings__presetbtn settings__presetbtn--danger",U.type="button",U.textContent="✕",U.title="Удалить",U.setAttribute("aria-label",`Удалить пресет физики «${k.name}»`),U.addEventListener("click",()=>{window.confirm(`Удалить пресет физики «${k.name}»?`)&&(Ir(k.id),H(),A.textContent=`Пресет «${k.name}» удалён.`)}),M.append(F,$,j,W,U),pe.append(M)}},ce=document.createElement("div");ce.className="settings__presetnamefield";const G=document.createElement("input");G.type="text",G.value=yt(),G.placeholder="Название пресета",G.setAttribute("aria-label","Название нового пресета физики");const J=document.createElement("button");J.className="settings__presetbtn",J.type="button",J.textContent="Сохранить",J.addEventListener("click",()=>{const r=Tr(G.value||yt(),ca());G.value=yt(),H(),A.textContent=`Сохранён пресет «${r.name}».`}),ce.append(G,J);const X=document.createElement("button");X.className="settings__resetall",X.type="button",X.textContent="Обновить активный пресет",X.addEventListener("click",()=>{const r=sa();if(!r){A.textContent="Активного пресета нет — сохраните новый.";return}Pr(r,ca()),H(),A.textContent="Текущие настройки записаны в активный пресет."});const le=document.createElement("button");le.className="settings__resetall",le.type="button",le.textContent="Импорт из файла";const Y=document.createElement("input");Y.type="file",Y.accept="application/json,.json",Y.hidden=!0,le.addEventListener("click",()=>Y.click()),Y.addEventListener("change",()=>{const r=Y.files?.[0];Y.value="",r&&(async()=>{try{const b=Dr(await r.text());if(!b){A.textContent="Это не файл пресета физики.";return}const k=Fr(b.items);H(),A.textContent=k===0?"Такие пресеты уже есть.":`Импортировано пресетов: ${k}.`}catch(b){A.textContent=`Не удалось прочитать файл: ${b instanceof Error?b.message:"ошибка чтения"}`}})()});const he=document.createElement("button");he.className="settings__resetall",he.type="button",he.textContent="Экспорт всех в файл",he.addEventListener("click",()=>{const r=na();if(r.length===0){A.textContent="Экспортировать нечего: пресетов нет.";return}Or(r),A.textContent=`Выгружено пресетов: ${r.length}.`});const ve=document.createElement("button");ve.className="settings__resetall",ve.type="button",ve.textContent="Убрать все пресеты",ve.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты физики? Настройки останутся как есть.")&&($r(),H(),A.textContent="Пресеты удалены, текущие настройки не тронуты.")}),v.append(re("Встроенные машины",oe),re("Свои пресеты",pe),ce,X,le,he,ve,Y,A),H(),I("fine");const xn={};for(const r of Ce){const b=Ne[r],k=document.createElement("div");k.className="settings__row";const M=document.createElement("label");M.className="settings__head";const D=document.createElement("span");D.textContent=b.label;const F=document.createElement("input");F.type="checkbox",F.checked=ae[r],M.append(D,F);const R=document.createElement("div");R.className="settings__vol",R.classList.toggle("settings__vol--off",!ae[r]);const P=document.createElement("input");P.type="range",P.min="0",P.max="100",P.step="1",P.value=String(Math.round((me[r]-b.min)/(b.max-b.min)*100)),P.setAttribute("aria-label",`Значение: ${b.label}`);const $=document.createElement("output");$.className="settings__pct settings__pct--val",$.textContent=Os(r);const j=document.createElement("button");j.className="settings__reset",j.type="button",j.textContent="↺",j.title="Сбросить по умолчанию",j.setAttribute("aria-label",`Сбросить по умолчанию: ${b.label}`);const W=()=>{F.checked=ae[r],R.classList.toggle("settings__vol--off",!ae[r]),P.value=String(Math.round((me[r]-b.min)/(b.max-b.min)*100)),$.textContent=Os(r)};xn[r]=W,P.addEventListener("input",()=>{const U=b.min+(b.max-b.min)*(Number(P.value)/100);me[r]=Number(U.toFixed(b.decimals)),$.textContent=Os(r),vt(),wt()}),F.addEventListener("change",()=>{ae[r]=F.checked,R.classList.toggle("settings__vol--off",!F.checked),vt(),wt()}),j.addEventListener("click",()=>{ae[r]=!0,me[r]=b.def,W(),vt(),wt()}),R.append(P,$,j),k.append(M,R),B.append(k)}O=()=>{for(const r of Ce)xn[r]?.()};const Ot=document.createElement("button");Ot.className="settings__resetall",Ot.type="button",Ot.textContent="Сбросить все настройки физики",Ot.addEventListener("click",()=>{for(const r of Ce)ae[r]=!0,me[r]=Ne[r].def,xn[r]?.();vt(),wt()}),p.append(Ot);const nt=document.createElement("div");nt.className="settings__pane",nt.hidden=!0;const Jn=document.createElement("p");Jn.className="settings__hint",Jn.textContent="Ползунок — уровень света (слева от центра — студия, к правому краю — ярче), ↺ — сброс строки. Свет главного экрана меняется сразу и запоминается. «Гамма-коррекция» — аппаратная (движок держит её как вкл/выкл), а «Сила гаммы» — непрерывный подъём полутонов поверх неё: 1 — как есть, каждый шаг вверх удваивает свет.",nt.append(Jn);const Xn=document.createElement("div");Xn.className="settings__list";const qn={};for(const r of St){const b=Oe[r],k=document.createElement("div");k.className="settings__row";const M=document.createElement("div");M.className="settings__head";const D=document.createElement("span");D.textContent=b.label,M.append(D);const F=document.createElement("div");F.className="settings__vol";const R=document.createElement("input");R.type="range",R.min="0",R.max="100",R.step="1",b.options&&(R.max=String(b.options.length-1)),R.value=String(ia(r)),R.setAttribute("aria-label",`Освещение: ${b.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=Ds(r);const $=document.createElement("button");$.className="settings__reset",$.type="button",$.textContent="↺",$.title="Сбросить по умолчанию",$.setAttribute("aria-label",`Сбросить по умолчанию: ${b.label}`);const j=()=>{R.value=String(ia(r)),P.textContent=Ds(r)};qn[r]=j,R.addEventListener("input",()=>{fe[r]=Jr(r,Number(R.value)),P.textContent=Ds(r),Rn(),Mn()}),$.addEventListener("click",()=>{fe[r]=b.def,j(),Rn(),Mn()}),F.append(R,P,$),k.append(M,F),Xn.append(k)}nt.append(Xn);const Dt=document.createElement("button");Dt.className="settings__resetall",Dt.type="button",Dt.textContent="Сбросить все настройки освещения",Dt.addEventListener("click",()=>{for(const r of St)fe[r]=Oe[r].def,qn[r]?.();Rn(),Mn()}),nt.append(Dt);const st=document.createElement("div");st.className="settings__pane",st.hidden=!0;const Qn=document.createElement("p");Qn.className="settings__hint",Qn.textContent="Каскады разбивают дальность теней на несколько карт: у ближней детализация выше, поэтому машина отбрасывает резкую тень даже вдали. Один каскад — одна карта на всю дальность. Меняется сразу, даже в заезде.",st.append(Qn);const Zn=document.createElement("div");Zn.className="settings__list";const _n={};for(const r of Qe){const b=Le[r],k=document.createElement("div");k.className="settings__row";const M=document.createElement("div");M.className="settings__head";const D=document.createElement("span");D.textContent=b.label,M.append(D);const F=document.createElement("div");F.className="settings__vol";const R=document.createElement("input");R.type="range",R.min="0",R.max="100",R.step="1",b.options&&(R.max=String(b.options.length-1)),R.value=String(js(r,ee[r])),R.setAttribute("aria-label",`Тени: ${b.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=zs(r);const $=document.createElement("button");$.className="settings__reset",$.type="button",$.textContent="↺",$.title="Сбросить по умолчанию",$.setAttribute("aria-label",`Сбросить по умолчанию: ${b.label}`);const j=()=>{R.value=String(js(r,ee[r])),P.textContent=zs(r)};_n[r]=j,R.addEventListener("input",()=>{ee[r]=Zr(r,Number(R.value)),P.textContent=zs(r),kt(),en()}),$.addEventListener("click",()=>{ee[r]=b.def,j(),kt(),en()}),F.append(R,P,$),k.append(M,F),Zn.append(k)}st.append(Zn);const jt=document.createElement("button");jt.className="settings__resetall",jt.type="button",jt.textContent="Сбросить все настройки теней",jt.addEventListener("click",()=>{for(const r of Qe)ee[r]=Le[r].def,_n[r]?.();kt(),en()}),st.append(jt);const Ue=document.createElement("div");Ue.className="settings__pane",Ue.hidden=!0;const es=document.createElement("p");es.className="settings__hint",es.textContent="Пост-обработка кадра: ореол вокруг солнца, виньетка, резкость, цветокоррекция и глубина резкости. Главный переключатель снимает всю обработку разом, а TAA включается на вкладке «Графика» — там ему и место, рядом с MSAA. Здесь у него остался только джиттер.",Ue.append(es);const ts=document.createElement("div");ts.className="settings__row";const ns=document.createElement("label");ns.className="settings__head";const Mo=document.createElement("span");Mo.textContent="Пост-обработка включена";const Ae=document.createElement("input");Ae.type="checkbox",Ae.checked=Sn(),ns.append(Mo,Ae),Ae.addEventListener("change",()=>Us(Ae.checked)),ts.append(ns),Ue.append(ts);const ss=document.createElement("div");ss.className="settings__list";const zt={};for(const r of Ze){if(r==="taa")continue;const b=De[r],k=document.createElement("div");k.className="settings__row";const M=document.createElement("div");M.className="settings__head";const D=document.createElement("span");D.textContent=b.label,M.append(D);const F=document.createElement("div");F.className="settings__vol";const R=document.createElement("input");R.type="range",R.min="0",R.max="100",R.step="1",b.options&&(R.max=String(b.options.length-1)),R.value=String(ra(r,K[r])),R.setAttribute("aria-label",`Post FX: ${b.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=Gs(r);const $=document.createElement("button");$.className="settings__reset",$.type="button",$.textContent="↺",$.title="Сбросить по умолчанию",$.setAttribute("aria-label",`Сбросить по умолчанию: ${b.label}`);const j=()=>{R.value=String(ra(r,K[r])),P.textContent=Gs(r)};zt[r]=j,R.addEventListener("input",()=>{K[r]=Ec(r,Number(R.value)),P.textContent=Gs(r),Fe(),qe()}),$.addEventListener("click",()=>{K[r]=b.def,j(),Fe(),qe()}),F.append(R,P,$),k.append(M,F),ss.append(k)}Ue.append(ss);const Ht=document.createElement("button");Ht.className="settings__resetall",Ht.type="button",Ht.textContent="Сбросить все настройки Post FX",Ht.addEventListener("click",()=>{for(const r of Ze)K[r]=De[r].def,zt[r]?.();Ae.checked=!0,Us(!0),Fe(),qe(),pt()}),Ue.append(Ht);const Ge=document.createElement("div");Ge.className="settings__pane",Ge.hidden=!0;const os=document.createElement("p");os.className="settings__hint",os.textContent="Служебные элементы поверх игры. Счётчик кадра живёт в левом верхнем углу на всех экранах; ниже выбирается, из каких строк он состоит.",Ge.append(os);const as=document.createElement("div");as.className="settings__row";const is=document.createElement("label");is.className="settings__head";const Po=document.createElement("span");Po.textContent="Статистика кадра";const ut=document.createElement("input");ut.type="checkbox",ut.checked=On(),is.append(Po,ut),ut.addEventListener("change",()=>Da(ut.checked)),as.append(is),Ge.append(as);const rs=document.createElement("p");rs.className="settings__hint",rs.textContent="Строки счётчика кадра. Если снять все, панель останется пустой плашкой — обновление текста всё равно стоит кадра, поэтому лишние строки лучше не держать включёнными без нужды.",Ge.append(rs);const cs=document.createElement("div");cs.className="settings__row settings__row--stack";const Io={};for(const r of Zs){const b=document.createElement("label");b.className="settings__check";const k=document.createElement("input");k.type="checkbox",k.checked=Ee(r);const M=document.createElement("span");M.textContent=ic(r),k.addEventListener("change",()=>rc(r,k.checked)),Io[r]=k,b.append(k,M),cs.append(b)}Ge.append(cs);const we=document.createElement("div");we.className="settings__pane",we.hidden=!0;const ls=document.createElement("p");ls.className="settings__hint",ls.textContent="Сенсорное управление появляется только на устройствах с тач-экраном. Галочка прячет педали совсем; ниже — размер, прозрачность, расположение и схема кнопок. Всё сохраняется в браузере и действует сразу.",we.append(ls);const ds=document.createElement("div");ds.className="settings__row";const us=document.createElement("label");us.className="settings__head";const $o=document.createElement("span");$o.textContent="Сенсорное управление";const Ut=document.createElement("input");Ut.type="checkbox",Ut.checked=mc(),us.append($o,Ut),Ut.addEventListener("change",()=>pc(Ut.checked)),ds.append(us),we.append(ds);const ms=document.createElement("div");ms.className="settings__row";const ps=document.createElement("label");ps.className="settings__head";const Fo=document.createElement("span");Fo.textContent="Размер кнопок",ps.append(Fo);const fs=document.createElement("div");fs.className="settings__vol";const be=document.createElement("input");be.type="range",be.min="60",be.max="200",be.step="5",be.value=String(Math.round(hc()*100)),be.setAttribute("aria-label","Размер сенсорных кнопок");const yn=document.createElement("output");yn.className="settings__pct",yn.textContent=`${be.value}%`,be.addEventListener("input",()=>{bc(Number(be.value)/100),yn.textContent=`${be.value}%`}),fs.append(be,yn),ms.append(ps,fs),we.append(ms);const hs=document.createElement("div");hs.className="settings__row";const bs=document.createElement("label");bs.className="settings__head";const Bo=document.createElement("span");Bo.textContent="Прозрачность",bs.append(Bo);const gs=document.createElement("div");gs.className="settings__vol";const ge=document.createElement("input");ge.type="range",ge.min="25",ge.max="100",ge.step="5",ge.value=String(Math.round(gc()*100)),ge.setAttribute("aria-label","Прозрачность сенсорных кнопок");const vn=document.createElement("output");vn.className="settings__pct",vn.textContent=`${ge.value}%`,ge.addEventListener("input",()=>{xc(Number(ge.value)/100),vn.textContent=`${ge.value}%`}),gs.append(ge,vn),hs.append(bs,gs),we.append(hs);const mt=document.createElement("div");mt.className="settings__pane",mt.hidden=!0;const xs=document.createElement("div");xs.className="settings__backend";const _s=document.createElement("p");_s.className="settings__hint",_s.textContent="Масштаб рендера уменьшает число пикселей, которые движок рисует за кадр: картинка мыльнее, но кадры стабильнее. Лимит кадров держит потолок частоты — помогает на ноутбуках от батареи. MSAA применяется при запуске: после его включения страницу нужно перезагрузить. TAA включается живьём и сглаживает всю сцену — его параметры (джиттер, резкость) задаёт выбранный пресет графики.",mt.append(_s);const Re=(r,b,k,M)=>{const D=document.createElement("div");D.className="settings__row";const F=document.createElement("div");F.className="settings__head";const R=document.createElement("span");R.textContent=r,F.append(R);const P=document.createElement("div");P.className="settings__vol",P.style.flexWrap="wrap";const $=[];for(const[W,U]of b){const z=document.createElement("button");z.className="settings__resetall",z.type="button",z.style.marginTop="0",z.style.flex="1 1 auto",z.style.textTransform="none",z.textContent=U,z.addEventListener("click",()=>{M(W),j()}),$.push(z),P.append(z)}const j=()=>{const W=k();for(let U=0;U<b.length;U++)$[U]?.toggleAttribute("disabled",b[U]?.[0]===W)};return j(),D.append(F,P),{row:D,refresh:j}},Si=Re("Расположение",[["split","По краям"],["left","Слева"],["right","Справа"]],()=>_c(),r=>{(r==="split"||r==="left"||r==="right")&&yc(r)});we.append(Si.row);const ki=Re("Кнопки крестовины",[["normal","▲ газ, ▼ тормоз"],["swap","▲ тормоз, ▼ газ"]],()=>vc()?"swap":"normal",r=>{wc(r==="swap")});we.append(ki.row);const ys=Re("Масштаб рендера",[["0.5","50 %"],["0.75","75 %"],["1","100 %"]],()=>String(Ga()),r=>{const b=Number(r);(b===.5||b===.75||b===1)&&So(b)}),vs=Re("Лимит кадров",[["0","Выкл"],["30","30 fps"],["60","60 fps"],["120","120 fps"]],()=>String(Wa()),r=>{const b=Number(r);(b===0||b===30||b===60||b===120)&&ko(b)}),ws=document.createElement("div");ws.className="settings__row";const Es=document.createElement("label");Es.className="settings__head";const Oo=document.createElement("span");Oo.textContent="Сглаживание MSAA";const Te=document.createElement("input");Te.type="checkbox",Te.checked=it(),Es.append(Oo,Te);const wn=document.createElement("span");wn.className="settings__pct";const Gt=()=>{Te.checked=it(),wn.textContent=it()?"сцена — сразу, интерфейс — после перезагрузки":""};Gt(),Te.addEventListener("change",()=>{cn(Te.checked),Te.checked&&Hs("taa")>0&&(K.taa=0,Fe(),qe()),Gt(),pt()}),ws.append(Es,wn);const Ss=document.createElement("div");Ss.className="settings__row";const ks=document.createElement("label");ks.className="settings__head";const Do=document.createElement("span");Do.textContent="Временное сглаживание TAA";const Me=document.createElement("input");Me.type="checkbox",Me.checked=Hs("taa")>0,ks.append(Do,Me);const Cs=document.createElement("span");Cs.className="settings__pct";const Ci=.1,Ni=.5,pt=()=>{const r=Hs("taa")>0;Me.checked=r,Cs.textContent=r?"работает сразу":"включит пост-обработку"};pt(),Me.addEventListener("change",()=>{K.taa=Me.checked?1:0,Me.checked&&!Sn()&&(Us(!0),Ae.checked=!0),Me.checked&&K.taaJitter<Ci&&(K.taaJitter=Ni,zt.taaJitter?.()),Me.checked&&it()&&(cn(!1),Gt()),Fe(),qe(),pt()}),Ss.append(ks,Cs);const Ns=Re("Пресет графики",[["phone","Телефон"],["balanced","Оптимальный"],["ultra","Ультра"]],()=>Pc(),r=>{if(!(r!=="phone"&&r!=="balanced"&&r!=="ultra")){Ua(r),ys.refresh(),vs.refresh(),Ns.refresh(),Te.checked=it(),wn.textContent=it()?"применится после перезагрузки":"",Gt(),pt();for(const b of Qe)_n[b]?.();for(const b of Ze)zt[b]?.();Ae.checked=Sn()}}),Ls=document.createElement("p");Ls.className="settings__hint",Ls.textContent="Рендер: WebGL2 работает везде, WebGPU даёт больше эффектов, но на части телефонов подвисает на первом кадре. Смена бэкенда пересобирает движок и перезагружает сцену.",mt.append(Ls,xs,Ns.row,ys.row,vs.row,ws,Ss);const ot=document.createElement("div");ot.className="settings__pane",ot.hidden=!0;const As=document.createElement("p");As.className="settings__hint",As.textContent="Разрешение и частота записи — насколько дорого кодировать. Качество кодека — насколько жирный файл: чем выше, тем чётче картинка и тем сильнее просядет игра во время записи. Всё применяется к следующему нажатию «Запись».",ot.append(As);const Rs=document.createElement("div");Rs.className="settings__recordslot",ot.append(Rs);const Ts=document.createElement("div");Ts.className="settings__row";const Ms=document.createElement("label");Ms.className="settings__head";const jo=document.createElement("span");jo.textContent="Звук в файле";const ft=document.createElement("input");ft.type="checkbox",ft.checked=no(),Ms.append(jo,ft),ft.addEventListener("change",()=>Za(ft.checked)),Ts.append(Ms);const zo=Re("Разрешение",[["1280","720p"],["1920","1080p"],["window","Как на экране"]],()=>String(cc()),r=>{if(r==="window"){eo("window");return}(r==="1280"||r==="1920")&&eo(Number(r))}),Ho=Re("Частота записи",[["24","24 fps"],["30","30 fps"],["60","60 fps"]],()=>String(Ya()),r=>{const b=Number(r);(b===24||b===30||b===60)&&Xa(b)}),Uo=Re("Качество кодека",[["low","Низкое"],["medium","Среднее"],["high","Высокое"]],()=>Ka(),r=>{(r==="low"||r==="medium"||r==="high")&&qa(r)}),Go=Re("Ключевой кадр",[["1","1 с"],["2","2 с"],["4","4 с"]],()=>String(Ja()),r=>{const b=Number(r);(b===1||b===2||b===4)&&Qa(b)});ot.append(Ts,zo.row,Ho.row,Uo.row,Go.row);const ht=document.createElement("div");ht.className="settings__pane",ht.hidden=!0;const Ps=document.createElement("p");Ps.className="settings__hint",Ps.textContent="Пресет — это все настройки разом: физика, свет, тени, Post FX, звук и интерфейс. Активный пресет применяется при запуске и одинаково работает во всех сценах. Имя нового пресета — дата и время до минуты.",ht.append(Ps);const de=document.createElement("p");de.className="settings__status",de.setAttribute("role","status"),de.textContent="";const Is=document.createElement("div");Is.className="settings__presetnamefield";const Pe=document.createElement("input");Pe.type="text",Pe.value=Je(),Pe.placeholder="Название пресета",Pe.setAttribute("aria-label","Название нового пресета");const Wt=document.createElement("button");Wt.className="settings__presetbtn",Wt.type="button",Wt.textContent="Сохранить",Is.append(Pe,Wt);const Li=document.createElement("div");Li.className="settings__row";const Vt=document.createElement("button");Vt.className="settings__resetall",Vt.type="button",Vt.textContent="Обновить активный пресет",Vt.addEventListener("click",()=>{const r=Bn();if(!r){de.textContent="Активного пресета нет — сохраните новый.";return}Aa(r,Ct()),de.textContent="Текущие настройки записаны в активный пресет.",Ve()});const Yt=document.createElement("button");Yt.className="settings__resetall",Yt.type="button",Yt.textContent="Импорт из файла";const We=document.createElement("input");We.type="file",We.accept="application/json,.json",We.hidden=!0,Yt.addEventListener("click",()=>We.click()),We.addEventListener("change",()=>{const r=We.files?.[0];We.value="",r&&(async()=>{try{const b=Nr(await r.text());if(!b){de.textContent="Это не файл настроек игры.";return}const k=Et(b.data);if(k.applied.length===0){de.textContent="В файле нет знакомых настроек.";return}const M=_t(b.name??r.name.replace(/\.json$/i,""),b.data,b.created??Date.now());Qs(M.id),$s(),Ve(),Pe.value=Je(),de.textContent=`Импортировано «${M.name}»: ${k.applied.join(", ")}`}catch(b){de.textContent=`Не удалось прочитать файл: ${b instanceof Error?b.message:"ошибка чтения"}`}})()});const Kt=document.createElement("button");Kt.className="settings__resetall",Kt.type="button",Kt.textContent="Убрать все пресеты",Kt.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты? Настройки останутся как есть.")&&(kr(),$s(),Ve(),de.textContent="Пресеты удалены, текущие настройки не тронуты.")});const Jt=document.createElement("div");Jt.className="settings__presets";const $s=()=>{for(const r of Ce)xn[r]?.();for(const r of St)qn[r]?.();for(const r of Qe)_n[r]?.();for(const r of Ze)zt[r]?.();for(const r of $a)m[r]?.();Ae.checked=Sn(),ut.checked=On();for(const r of Zs){const b=Io[r];b&&(b.checked=Ee(r))}Te.checked=it(),Gt(),pt(),ys.refresh(),vs.refresh(),Ns.refresh(),zo.refresh(),Ho.refresh(),Uo.refresh(),Go.refresh(),ft.checked=no()},Ai=(r,b)=>{const k=qs().find(D=>D.id===r);if(!k)return;const M=Et(k.data);Qs(r),$s(),de.textContent=M.applied.length>0?`Применён пресет «${b}»: ${M.applied.join(", ")}`:`В пресете «${b}» нет знакомых настроек.`},Wo=r=>r>0?Je(new Date(r)):"дата неизвестна",Ve=()=>{Jt.replaceChildren();const r=qs(),b=Bn();if(r.length===0){const k=document.createElement("p");k.className="settings__presetempty",k.textContent="Пресетов пока нет. Настройте всё как надо и нажмите «Сохранить».",Jt.append(k);return}for(const k of r){const M=document.createElement("div");M.className="settings__preset";const D=k.id===b;D&&M.classList.add("settings__preset--active");const F=document.createElement("div");F.className="settings__presetinfo";const R=document.createElement("span");R.className="settings__presetname",R.textContent=k.name;const P=document.createElement("span");P.className="settings__presetmeta",P.textContent=D?`${Wo(k.created)} · активен`:Wo(k.created),F.append(R,P);const $=document.createElement("button");$.className="settings__presetbtn",$.type="button",$.textContent="✎",$.title="Переименовать",$.setAttribute("aria-label",`Переименовать пресет ${k.name}`),$.addEventListener("click",()=>{const z=document.createElement("input");z.className="settings__presetnameinput",z.type="text",z.value=k.name,R.replaceWith(z),z.focus(),z.select();const Xt=()=>{Er(k.id,z.value),Ve()};z.addEventListener("keydown",at=>{at.key==="Enter"&&Xt(),at.key==="Escape"&&(at.stopPropagation(),Ve())}),z.addEventListener("blur",Xt)});const j=document.createElement("button");j.className="settings__presetbtn",j.type="button",j.textContent="Применить",j.disabled=D,j.addEventListener("click",()=>Ai(k.id,k.name));const W=document.createElement("button");W.className="settings__presetbtn",W.type="button",W.textContent="↓",W.title="Экспорт в файл",W.setAttribute("aria-label",`Экспорт пресета ${k.name} в файл`),W.addEventListener("click",()=>Cr(k));const U=document.createElement("button");U.className="settings__presetbtn settings__presetbtn--danger",U.type="button",U.textContent="✕",U.title="Удалить",U.setAttribute("aria-label",`Удалить пресет ${k.name}`),U.addEventListener("click",()=>{window.confirm(`Удалить пресет «${k.name}»?`)&&(Sr(k.id),Ve(),de.textContent=`Пресет «${k.name}» удалён.`)}),M.append(F,j,$,W,U),Jt.append(M)}};Wt.addEventListener("click",()=>{const r=_t(Pe.value||Je(),Ct());Pe.value=Je(),Ve(),de.textContent=`Сохранён пресет «${r.name}».`}),ht.append(Is,Jt,Vt,Yt,Kt,We,de),Ve();const Fs=document.createElement("div");Fs.className="settings__scroll",Fs.append(N,p,nt,st,Ue,Ge,we,mt,ot,ht),n.append(s,a,Fs),e.append(t,n),document.body.append(e);function Ri(){e.hidden=!1,Pe.value=Je()}function Ti(){e.hidden=!0}return{root:e,backendSlot:xs,recordSlot:Rs,open:Ri,close:Ti}}const zc=300;function Hc(e={}){let t=0,n=!1;const s=()=>{const l=Bn();if(!l){n||(n=!0,e.onNoPreset?.());return}const d=Ct();if(!Aa(l,d))return;n=!1;const f=Bn();f&&e.onSaved?.(f)},a=Gr(()=>{Lc()||(window.clearTimeout(t),t=window.setTimeout(s,zc))}),i=()=>{t!==0&&(window.clearTimeout(t),t=0,s())};return document.addEventListener("visibilitychange",i),window.addEventListener("pagehide",i),{flush(){t!==0&&(window.clearTimeout(t),t=0,s())},destroy(){window.clearTimeout(t),t=0,a(),document.removeEventListener("visibilitychange",i),window.removeEventListener("pagehide",i)}}}const Uc="https://vk.ru/H360ru";function Gc(){const e=document.createElement("div"),t=document.createElement("p");t.className="dlg__empty",t.textContent="Описание игры скоро появится. Пока сюда можно поставить правила, список техники и ссылку на сервер.";const n=document.createElement("a");n.className="dlg__link",n.href=Uc,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Группа игры во «ВКонтакте»",e.append(t,n);const s=pn({title:"Об игре",body:e});return{dialog:s,open(){s.open()},destroy(){s.destroy()}}}let ei=null;function No(e){ei=e}function rt(){return ei?.()??null}const Wc={yaw:0,lift:0,zoom:1,shoulder:1,distance:6.4,height:2.5,fov:60},da=["yaw","lift","zoom","distance","height","fov"],ua={yaw:{label:"Поворот",min:-180,max:180,step:1,unit:"°"},lift:{label:"Наклон",min:-.6,max:3.4,step:.1,unit:" м"},zoom:{label:"Зум",min:.55,max:1.7,step:.01,unit:"×"},distance:{label:"Дистанция",min:3,max:15,step:.1,unit:" м"},height:{label:"Высота",min:1,max:6,step:.1,unit:" м"},fov:{label:"Обзор (fov)",min:40,max:90,step:1,unit:"°"}},ti="blendars.camera-views.v1";function Ws(){try{const e=localStorage.getItem(ti);if(!e)return[];const t=JSON.parse(e);if(!t||typeof t!="object")return[];const n=t.list;if(!Array.isArray(n))return[];const s=[];for(const o of n){if(!o||typeof o!="object")continue;const a=o;if(typeof a.id!="string"||!a.id)continue;const i=a.view;if(!i||typeof i!="object")continue;const l=i,d=(f,u)=>typeof f=="number"&&Number.isFinite(f)?f:u;s.push({id:a.id,name:typeof a.name=="string"&&a.name?a.name:"Без имени",created:typeof a.created=="number"?a.created:0,view:{yaw:d(l.yaw,0),lift:d(l.lift,0),zoom:d(l.zoom,1),shoulder:d(l.shoulder,1),distance:d(l.distance,6.4),height:d(l.height,2.5),fov:d(l.fov,60)}})}return s}catch{return[]}}function ma(e){try{localStorage.setItem(ti,JSON.stringify({list:e}))}catch{}}function Vc(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Yc=`
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
`;function Kc(){if(document.getElementById("camv-style"))return;const e=document.createElement("style");e.id="camv-style",e.textContent=Yc,document.head.append(e)}function Jc(){Kc();const e=document.createElement("div"),t=document.createElement("p");t.className="camv__hint";const n={},s=document.createElement("div");for(const c of da){const m=ua[c],p=document.createElement("div");p.className="camv__row";const _=document.createElement("div");_.className="camv__head";const C=document.createElement("span");C.textContent=m.label;const L=document.createElement("span");L.className="camv__val",_.append(C,L);const w=document.createElement("input");w.type="range",w.min=String(m.min),w.max=String(m.max),w.step=String(m.step),w.setAttribute("aria-label",m.label),w.addEventListener("input",()=>{const v=Number(w.value);rt()?.write({[c]:v}),L.textContent=`${w.value}${m.unit}`}),p.append(_,w),s.append(p),n[c]={input:w,out:L}}const o=document.createElement("div");o.className="camv__btns";const a=[],i=[[-1,"Слева"],[0,"Центр"],[1,"Справа"]];for(const[c,m]of i){const p=document.createElement("button");p.className="camv__btn",p.type="button",p.textContent=m,p.addEventListener("click",()=>{rt()?.write({shoulder:c}),l(c)}),a.push(p),o.append(p)}const l=c=>{for(let m=0;m<i.length;m++)a[m]?.classList.toggle("camv__btn--on",i[m]?.[0]===c)},d=document.createElement("button");d.className="camv__btn",d.type="button",d.textContent="Сбросить вид (C)",d.addEventListener("click",()=>{rt()?.reset(),y()});const f=document.createElement("div");f.className="camv__save";const u=document.createElement("input");u.type="text",u.placeholder="Название ракурса",u.setAttribute("aria-label","Название нового ракурса");const x=document.createElement("button");x.className="camv__btn",x.type="button",x.textContent="Сохранить",f.append(u,x);const E=document.createElement("div");E.className="camv__list";const h=document.createElement("p");h.className="camv__status",h.setAttribute("role","status"),h.textContent="",e.append(t,s,o,d,f,E,h);const g=pn({title:"Ракурсы камеры",body:e}),S=(c,m)=>{const p=ua[c];return`${c==="zoom"?m.toFixed(2):String(m)}${p.unit}`},y=()=>{const c=rt(),m=c?.read()??Wc,p=c!==null;t.textContent=p?"Ракурс меняется живьём. Тяните сцену мышью или пальцем (влево — экран влево), колесо или щипок — расстояние, C — сброс.":"Откройте сцену с машиной — здесь появится текущий ракурс.";for(const _ of da){const C=n[_];C&&(C.input.value=String(m[_]),C.input.disabled=!p,C.out.textContent=S(_,m[_]))}for(const _ of a)_.disabled=!p;l(m.shoulder),d.disabled=!p,x.disabled=!p,u.disabled=!p,N()},N=()=>{E.replaceChildren();const c=Ws();if(c.length===0){const m=document.createElement("p");m.className="camv__empty",m.textContent="Сохранённых ракурсов пока нет.",E.append(m);return}for(const m of c){const p=document.createElement("div");p.className="camv__item";const _=document.createElement("span");_.className="camv__name",_.textContent=m.name;const C=document.createElement("button");C.className="camv__btn",C.type="button",C.textContent="Применить",C.disabled=rt()===null,C.addEventListener("click",()=>{const w=rt();w&&(w.write({...m.view}),y(),h.textContent=`Применён ракурс «${m.name}».`)});const L=document.createElement("button");L.className="camv__btn",L.type="button",L.textContent="✕",L.title="Удалить",L.setAttribute("aria-label",`Удалить ракурс ${m.name}`),L.addEventListener("click",()=>{ma(Ws().filter(w=>w.id!==m.id)),N(),h.textContent=`Ракурс «${m.name}» удалён.`}),p.append(_,C,L),E.append(p)}};return x.addEventListener("click",()=>{const c=rt();if(!c)return;const m=Date.now(),p={id:Vc(m),name:u.value.trim()||Je(new Date(m)),created:m,view:{...c.read()}},_=Ws();_.push(p),ma(_),u.value="",N(),h.textContent=`Сохранён ракурс «${p.name}».`}),{dialog:g,open(){y(),g.open()},destroy(){g.destroy()}}}const Xc=[{hash:"e4af8a4",date:"2026-10-09",subject:"UI: вкладка физики, таймер под компасом, уведомления чекпоинтов, тач-жесты"},{hash:"0069c44",date:"2026-10-09",subject:"CI: upload-pages-artifact v5 вместо v3 — под Node 24 артефакт github-pages не создавался"},{hash:"9e7421c",date:"2026-10-09",subject:"Физика машины: сторож увязания, инерция по трём осям, пресеты 5 т и 4 т"},{hash:"709fad1",date:"2026-10-09",subject:"HUD в канвасе: слой под размер виджета вместо полноэкранной текстуры, обрезка полосы компаса"},{hash:"1d33c0a",date:"2026-10-09",subject:"Забег по чекпоинтам: таймер, карточка финиша, окно «Лидеры», личность ВК"},{hash:"e4e4244",date:"2026-10-09",subject:"up"},{hash:"b3964c6",date:"2026-10-09",subject:"Сглаживание: TAA на вкладке «Графика», починка MSAA, ПК-пресеты на MSAA"},{hash:"6f17f25",date:"2026-10-08",subject:"HUD в канвас, UI-аудиошина, Draco/KTX2-ассеты"},{hash:"ad022dc",date:"2026-10-08",subject:"Fix WGSL shader: declare material_diffuse and view_position uniforms in terrain-splat"},{hash:"a206a10",date:"2026-10-08",subject:"Rebuild dist with base /blend-ars/ (GitHub Pages)"},{hash:"15fdf63",date:"2026-10-08",subject:"Deploy built site from dist; path dist in Pages workflow"},{hash:"942a7cc",date:"2026-10-08",subject:"Remove project sources; keep .github and .gitignore"},{hash:"da0f40e",date:"2026-10-08",subject:"Create static.yml"},{hash:"2691051",date:"2026-10-08",subject:"Delete .github/workflows/static.yml"},{hash:"98c2349",date:"2026-10-08",subject:"Delete .github/workflows/npm-publish-github-packages.yml"},{hash:"3ce584f",date:"2026-10-08",subject:"Update static.yml"},{hash:"128f22b",date:"2026-10-03",subject:"Create npm-publish-github-packages.yml"},{hash:"c8e16ab",date:"2026-10-03",subject:"Create static.yml"},{hash:"5a46d53",date:"2026-10-03",subject:"feat(scene): выбор кузова грузовик/Maserati, Maserati в меню, откат WebGPU→WebGL2"},{hash:"5c65165",date:"2026-10-03",subject:"feat(menu): экран загрузки с прогрессом + процедурный 3D-фон меню"},{hash:"1faa7f1",date:"2026-10-03",subject:"test(stage-0): браузерная проверка рендера, smoke-сцена, иконки-заглушки"},{hash:"4f12113",date:"2026-10-03",subject:"feat(stage-0): bootstrap Vite + ленивый PlayCanvas + тулинг бюджетов"},{hash:"eb68f3c",date:"2026-10-03",subject:"docs: rewrite README for PlayCanvas/Colyseus web stack"},{hash:"34ff9ca",date:"2026-10-03",subject:"chore: remove legacy Godot+Nakama tree and web export"},{hash:"9018d77",date:"2026-10-02",subject:"Create FUNDING.yml"},{hash:"7f64ab1",date:"2026-09-30",subject:"Add files via upload"},{hash:"5b7ab23",date:"2026-09-30",subject:"Add files via upload"},{hash:"ebb8901",date:"2026-03-19",subject:"mv"},{hash:"3c3fc26",date:"2026-03-19",subject:"fix: обновлен .gitignore и удалены системные файлы"},{hash:"0e075c9",date:"2026-03-19",subject:"up"},{hash:"9309069",date:"2026-03-19",subject:"upd"},{hash:"b82f5bc",date:"2026-03-19",subject:"docs: оновлення правил проекту"},{hash:"a19f06e",date:"2026-03-19",subject:"up"},{hash:"45bb3b3",date:"2026-03-19",subject:"new rules by demiurgos 19_1"},{hash:"7519417",date:"2026-02-27",subject:"Update README.md"},{hash:"58a3447",date:"2026-02-27",subject:"**BLEND ARS: Initial Project Setup and Development Notice**"},{hash:"60a150e",date:"2026-02-27",subject:"upd"},{hash:"eae4946",date:"2026-02-27",subject:"Exclude addons folder from tracking"},{hash:"cfe0473",date:"2026-02-27",subject:"upd"},{hash:"94b5e5d",date:"2026-02-24",subject:"uikit up"},{hash:"17b03ea",date:"2026-02-24",subject:"mv"},{hash:"c8e9bf6",date:"2026-02-24",subject:"апдейт"},{hash:"48511ce",date:"2026-02-24",subject:"ui_kit"},{hash:"ad054cb",date:"2026-02-24",subject:"up"},{hash:"73e2c24",date:"2026-02-22",subject:"Update 00-core.md"},{hash:"8d20bc4",date:"2026-02-22",subject:"Create 05-ui-perf.md"},{hash:"cf17f7a",date:"2026-02-22",subject:"Update and rename 04-mcp-workflow.md to 04-ui-theme.md"},{hash:"93f52ae",date:"2026-02-22",subject:"Update and rename 03-gdscript-standards.md to 03-ui-core.md"},{hash:"ff72202",date:"2026-02-22",subject:"Update and rename 02-ui-scifi.md to 02-workflow.md"},{hash:"a533398",date:"2026-02-22",subject:"Rename 00-global.md to 00-core.md"}];function qc(){const e=Xc;if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,o=s.hash,a=s.date,i=s.subject;typeof o!="string"||typeof i!="string"||t.push({hash:o,date:typeof a=="string"?a:"",subject:i})}return t}function Qc(){const e=qc(),t=document.createElement("div");if(e.length===0){const s=document.createElement("p");s.className="dlg__empty",s.textContent="Журнал пока пуст: сборка сделана без истории git.",t.append(s)}else{const s=document.createElement("p");s.className="devlog__meta",s.textContent=`Последние ${e.length} изменений`;const o=document.createElement("ul");o.className="devlog__list";for(const a of e){const i=document.createElement("li");i.className="devlog__item";const l=document.createElement("span");l.className="devlog__hash",l.textContent=a.hash;const d=document.createElement("span");d.className="devlog__date",d.textContent=a.date;const f=document.createElement("span");f.className="devlog__subject",f.textContent=a.subject,i.append(l,d,f),o.append(i)}t.append(s,o)}const n=pn({title:"Журнал разработки",body:t});return{dialog:n,open(){n.open()},destroy(){n.destroy()}}}const ni="blendars.race.board.v1",Zc=200;let gt=null;function kn(e){return typeof e=="number"&&Number.isFinite(e)}function el(e){if(!Array.isArray(e))return[];const t=[];for(const n of e){if(t.length>=Zc)break;if(typeof n!="object"||n===null)continue;const s=n;typeof s.uid!="string"||s.uid===""||typeof s.name=="string"&&(!kn(s.bestMs)||s.bestMs<0||t.push({uid:s.uid,name:s.name,photo:typeof s.photo=="string"?s.photo:"",bestMs:s.bestMs,lastMs:kn(s.lastMs)?s.lastMs:s.bestMs,runs:kn(s.runs)&&s.runs>0?Math.floor(s.runs):1,updatedAt:kn(s.updatedAt)?s.updatedAt:0}))}return t.sort(si)}function si(e,t){return e.bestMs!==t.bestMs?e.bestMs-t.bestMs:e.updatedAt!==t.updatedAt?e.updatedAt-t.updatedAt:e.uid<t.uid?-1:e.uid>t.uid?1:0}function oi(){if(gt!==null)return gt;try{const e=localStorage.getItem(ni);gt=e===null?[]:el(JSON.parse(e))}catch(e){console.warn("[race] таблица недоступна, веду её в памяти",e),gt=[]}return gt}function tl(e){gt=e;try{localStorage.setItem(ni,JSON.stringify(e))}catch(t){console.warn("[race] рекорд не сохранён на диск",t)}}function nl(){return oi()}function sl(e){const t=oi(),n=t.findIndex(f=>f.uid===e.uid),s=n>=0?t[n]:void 0,o=s?.bestMs??0,a=Math.max(0,Math.round(e.timeMs)),i={uid:e.uid,name:e.name,photo:e.photo,bestMs:s===void 0?a:Math.min(s.bestMs,a),lastMs:a,runs:(s?.runs??0)+1,updatedAt:Date.now()},l=t.slice();n>=0?l[n]=i:l.push(i),l.sort(si),tl(l);const d=l.findIndex(f=>f.uid===e.uid);return{rank:d>=0?d+1:l.length,total:l.length,bestMs:i.bestMs,improved:s===void 0||a<o,previousBestMs:o,board:l}}function ol(e,t){const n={state:"idle",startMs:0,lastMs:0,collected:0,total:t.total},s=()=>{if(n.state==="finished"||n.state==="aborted"||(n.state==="idle"&&(n.state="running",n.startMs=performance.now(),e.fire("race:started",n.total)),n.collected+=1,n.total<1||n.collected<n.total))return;n.state="finished",n.lastMs=Math.max(0,Math.round(performance.now()-n.startMs));const a={timeMs:n.lastMs,collected:n.collected,total:n.total};e.fire("race:finished",a),t.onFinished?.(a)};return e.on("checkpoint:visited",s),{view:n,abort:()=>{n.state==="finished"||n.state==="aborted"||(n.lastMs=n.state==="running"?Math.max(0,Math.round(performance.now()-n.startMs)):0,n.state="aborted",e.fire("race:aborted",n.collected))},destroy(){e.off("checkpoint:visited",s)}}}function pa(e){return e<10?`0${e}`:`${e}`}function ln(e){const t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/10);return`${Math.floor(n/6e3)}:${pa(Math.floor(n/100)%60)}.${pa(n%100)}`}function nu(e){return`${e<0?"−":"+"}${ln(Math.abs(e))}`}const al=`
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
`;function ai(e,t,n,s){const o=Math.abs(e)%100,a=o%10;return o>=11&&o<=14?s:a===1?t:a>=2&&a<=4?n:s}function il(e,t,n,s,o,a){const i=document.createElement("li");i.className="leaders__row";const l=document.createElement("span");l.className="leaders__place",l.textContent=`${e}`;const d=document.createElement("span");if(d.className="leaders__who",n!==""){const g=document.createElement("img");g.className="leaders__face",g.src=n,g.alt="",g.loading="lazy",g.addEventListener("error",()=>g.remove()),d.append(g)}const f=document.createElement("span");f.className="leaders__text";const u=document.createElement("span");u.className="leaders__name",u.textContent=t;const x=document.createElement("span");x.className="leaders__about";const E=`${o} ${ai(o,"заезд","заезда","заездов")}`;x.textContent=o>1&&a>s?`${E} · последний ${ln(a)}`:E,f.append(u,x),d.append(f);const h=document.createElement("span");return h.className="leaders__time",h.textContent=ln(s),i.append(l,d,h),i}function rl(e){e.textContent="";const t=nl();if(t.length===0){const a=document.createElement("p");a.className="dlg__empty",a.textContent="Заездов пока нет. Соберите все чекпоинты — результат попадёт в таблицу.",e.append(a);return}const n=document.createElement("p");n.className="leaders__meta",n.textContent=`${t.length} ${ai(t.length,"игрок","игрока","игроков")} · лучшее время на игрока`;const s=document.createElement("ul");s.className="leaders__list";for(let a=0;a<t.length;a++){const i=t[a];i&&s.append(il(a+1,i.name,i.photo,i.bestMs,i.runs,i.lastMs))}const o=document.createElement("p");o.className="leaders__hint",o.textContent="Таблица — на этом устройстве: заезды других игроков в неё не попадают. Общий рейтинг появится, когда у игры будет сервер.",e.append(n,s,o)}function cl(){if(!document.getElementById("leaders-style")){const n=document.createElement("style");n.id="leaders-style",n.textContent=al,document.head.append(n)}const e=document.createElement("div"),t=pn({title:"Лидеры",body:e});return{dialog:t,open(){rl(e),t.open()},destroy(){t.destroy()}}}function qt(e,t,n,s){const o=document.createElement("button");return o.className=e,o.type="button",o.style.setProperty("--tb-icon",`url(${JSON.stringify(t)})`),o.title=n,o.setAttribute("aria-label",n),o.addEventListener("pointerdown",a=>{a.preventDefault(),!o.disabled&&s()}),o}const ll=`
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
`;function dl(){const e=document.createElement("button");e.className="tb__btn",e.type="button";const t=()=>document.fullscreenElement!==null,n=()=>{const s=t(),o=s?Ji:Ki;e.style.setProperty("--tb-icon",`url(${JSON.stringify(o)})`);const a=s?"Выйти из полноэкранного режима":"Полноэкранный режим";e.title=a,e.setAttribute("aria-label",a),e.setAttribute("aria-pressed",s?"true":"false")};return e.addEventListener("pointerdown",s=>{s.preventDefault(),!e.disabled&&(t()?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{}))}),document.addEventListener("fullscreenchange",n),n(),{el:e,destroy(){document.removeEventListener("fullscreenchange",n)}}}async function ul(){return(await q(()=>import("./music-player.DYraKlzq.js"),__vite__mapDeps([0,1,2]))).createMusicPlayer()}function ml(e){const t=document.createElement("style");t.textContent=ll;const n=document.createElement("header");n.className="tb";const s=document.createElement("div");s.className="tb__slot",s.append(e.statsHost);const o=document.createElement("div");o.className="tb__center";const a=document.createElement("h1");a.className="tb__title",a.textContent=e.title,o.append(a);const i=document.createElement("div");i.className="tb__slot tb__slot--right";const l=document.createElement("div");l.className="tb__extra";const d=dl(),f=Gc(),u=Qc(),x=Jc(),E=cl(),h=document.createElement("button");h.className="tb__btn tb__btn--close",h.type="button",h.style.setProperty("--tb-icon",`url(${JSON.stringify(rr)})`),h.title="Скрыть панель",h.setAttribute("aria-label","Скрыть панель");const g=document.createElement("span");g.className="tb__cap",g.innerHTML="Скрыть<br>панель",h.append(g),h.addEventListener("pointerdown",m=>{m.preventDefault(),!h.disabled&&e.onToggleChrome()});let S=null,y=null;const N=qt("tb__btn",er,"Музыка",()=>{const m=p=>{p.open(),e.windows.open("music")};if(y!==null){m(y);return}S??=ul(),S.then(p=>{y=p,e.windows.register({id:"music",root:p.dialog.root,show:()=>p.open(),hide:()=>p.dialog.close()}),m(p)}).catch(()=>{})});i.append(l,qt("tb__btn",Qi,"Лидеры",()=>{E.open(),e.windows.open("leaders")}),qt("tb__btn",Zi,"Ракурсы камеры",()=>{x.open(),e.windows.open("camera")}),qt("tb__btn",qi,"Журнал разработки",()=>{u.open(),e.windows.open("devlog")}),qt("tb__btn",Xi,"Об игре",()=>{f.open(),e.windows.open("about")}),N,h,d.el),s.classList.add("tb__slot--left"),n.append(t,s,o,i),e.windows.register({id:"camera",root:x.dialog.root,show:()=>x.open(),hide:()=>x.dialog.close()}),e.windows.register({id:"leaders",root:E.dialog.root,show:()=>E.open(),hide:()=>E.dialog.close()}),e.windows.register({id:"about",root:f.dialog.root,show:()=>f.open(),hide:()=>f.dialog.close()}),e.windows.register({id:"devlog",root:u.dialog.root,show:()=>u.open(),hide:()=>u.dialog.close()});const c=[Xe(n),Xe(f.dialog.root),Zt(f.dialog.root),Xe(u.dialog.root),Zt(u.dialog.root),Xe(E.dialog.root),Zt(E.dialog.root),Xe(x.dialog.root),Zt(x.dialog.root)];return{root:n,setExtraButtons(m){l.append(m)},setBackButton(m){s.prepend(m)},setSceneMode(m){n.classList.toggle("tb--scene",m)},destroy(){d.destroy(),f.destroy(),u.destroy(),x.destroy(),E.destroy();for(const m of c)m();y?.destroy(),n.remove()}}}const pl=`
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
`;function fl(e={}){const t=document.createElement("style");t.textContent=pl;const n=document.createElement("div");n.className="win";const s=document.createElement("div");s.className="win__bar";const o=document.createElement("button");o.className="win__close",o.type="button",o.textContent="✕",o.title="Закрыть окно",o.setAttribute("aria-label","Закрыть окно"),s.append(o);const a=document.createElement("p");a.className="win__empty",a.textContent="",a.setAttribute("aria-hidden","true"),n.append(t,a),document.body.append(s);const i=new Map,l=[];let d=null,f=null;const u=()=>{for(const _ of i.values()){const C=_.id===d;_.root.hidden=!C,C?_.show():_.hide()}n.classList.toggle("win--open",d!==null),s.classList.toggle("win--open",d!==null);for(const _ of l)_();x()},x=()=>{const _=n.getBoundingClientRect();if(_.width<=0||_.height<=0)return;const C=document.documentElement.style;C.setProperty("--win-left",`${Math.round(_.left)}px`),C.setProperty("--win-top",`${Math.round(_.top)}px`),C.setProperty("--win-width",`${Math.round(_.width)}px`),C.setProperty("--win-height",`${Math.round(_.height)}px`)},E={root:n,closeBtn:o,register(_){i.set(_.id,_),_.hide(),_.root.hidden=!0},open(_){i.has(_)&&(d=_,f={x:S,y,until:performance.now()+c},u())},close(){d!==null&&(d=null,u())},toggle(_){d===_?E.close():E.open(_)},active(){return d},onChange(_){return l.push(_),()=>{const C=l.indexOf(_);C>=0&&l.splice(C,1)}},destroy:()=>{}};o.addEventListener("pointerdown",_=>{_.preventDefault(),E.close()});const h=new ResizeObserver(x);h.observe(n),window.addEventListener("resize",x),window.addEventListener("orientationchange",x),x();const g=_=>{_.key==="Escape"&&(d!==null?(_.stopPropagation(),E.close()):e.onEmptyEscape?.())};document.addEventListener("keydown",g);let S=0,y=0;const N=_=>{S=_.clientX,y=_.clientY},c=400,m=32,p=_=>{if(d===null)return;const C=i.get(d);if(!C||C.root.hidden)return;const L=_.target;if(!(L instanceof Element)||C.root.contains(L))return;const w=f;if(w!==null&&performance.now()<w.until){const B=_.clientX-w.x,I=_.clientY-w.y;if(B*B+I*I<=m*m)return}if(L.closest(".tb")!==null)return;const v=_.clientX-S,T=_.clientY-y;v*v+T*T>64||E.close()};return document.addEventListener("pointerdown",N,!0),document.addEventListener("click",p),E.destroy=()=>{h.disconnect(),window.removeEventListener("resize",x),window.removeEventListener("orientationchange",x),document.removeEventListener("keydown",g),document.removeEventListener("pointerdown",N,!0),document.removeEventListener("click",p),s.remove();const _=document.documentElement.style;_.removeProperty("--win-left"),_.removeProperty("--win-top"),_.removeProperty("--win-width"),_.removeProperty("--win-height")},E}const hl=`
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
    src: url(${JSON.stringify(Ea)}) format('truetype');
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
`,bl={idle:"",starting:"готовлю…",recording:"идёт",encoding:"упаковываю файл…",saving:"сохраняю…",error:"не вышло"},gl=["recording","encoding","saving"],Vs=["Одно не рождается без другого: оболочка без души лишь кукла, душа без оболочки — призрак.","Сон совести рождает чудовищ.","У нас нет формы, и мы страшимся этого.","В здравом теле, витает здравый дух, а значит и душа."];class xl{statsHost;clusterHost;settings;windows;root;playBtn;backBtn;settingsItem;modes;actionsEl;midEl;statusEl;statusText;recordRow;recordBtn;recordDot;recordLabel;recordState;recordBar;recordFill;idleIndex=-1;topbar;chromeHidden=!1;autosave;uiSoundDetach=[];constructor(t,n){this.root=document.createElement("div"),this.root.className="menu";const s=document.createElement("style");s.textContent=hl,this.windows=fl({onEmptyEscape:()=>{this.setChromeHidden(!this.chromeHidden)}}),this.statsHost=document.createElement("div"),this.topbar=ml({statsHost:this.statsHost,title:"BLEND ARS",subtitle:"",windows:this.windows,onToggleChrome:()=>{this.setChromeHidden(!0)}}),this.playBtn=document.createElement("button"),this.playBtn.className="play play--go",this.playBtn.type="button",this.playBtn.textContent="Играть",this.playBtn.addEventListener("pointerdown",E=>{E.preventDefault(),!this.playBtn.disabled&&(xe("click"),this.modes.open(),this.windows.open("modes"))});const o=document.createElement("ul");o.className="actions__list";const a=[["Контейнеры",tr],["Миссии",nr],["Гараж",sr],["Магазин",or]];for(const[E,h]of a){const g=document.createElement("li"),S=document.createElement("button");S.className="mitem",S.type="button",S.textContent=E,S.disabled=!0,S.title=`${E}: раздел в разработке`,S.style.setProperty("--mitem-icon",`url(${JSON.stringify(h)})`),g.append(S),o.append(g)}this.settingsItem=document.createElement("button"),this.settingsItem.className="mitem",this.settingsItem.type="button",this.settingsItem.textContent="Настройки",this.settingsItem.style.setProperty("--mitem-icon",`url(${JSON.stringify(Qo)})`),this.settingsItem.addEventListener("pointerdown",E=>{E.preventDefault(),!this.settingsItem.disabled&&(xe("click"),this.openSettings())});{const E=document.createElement("li");E.append(this.settingsItem),o.append(E)}this.modes=gr(E=>{xe("click"),this.modes.dialog.close(),this.windows.close(),n.onScene(E)}),this.backBtn=document.createElement("button"),this.backBtn.className="tb__back",this.backBtn.type="button",this.backBtn.textContent="Назад",this.backBtn.style.setProperty("--tb-icon",`url(${JSON.stringify(lr)})`),this.backBtn.title="Вернуться в меню",this.backBtn.setAttribute("aria-label","Вернуться в меню"),this.backBtn.style.display="none",this.backBtn.addEventListener("pointerdown",E=>{E.preventDefault(),xe("click"),n.onBack?.()}),this.settings=jc();const i=document.createElement("button");i.className="tb__btn",i.type="button",i.style.setProperty("--tb-icon",`url(${JSON.stringify(Qo)})`),i.title="Настройки",i.setAttribute("aria-label","Настройки"),i.addEventListener("pointerdown",E=>{E.preventDefault(),!i.disabled&&(xe("click"),this.openSettings())});const l=document.createElement("div");l.className="tb__extra",l.append(i),this.topbar.setExtraButtons(l),this.topbar.setBackButton(this.backBtn);const d=document.createElement("div");d.className="actions",d.append(this.playBtn,o),this.actionsEl=d,this.statusText=document.createElement("div"),this.statusText.className="status__text",this.statusText.textContent=this.pickIdlePhrase(),this.recordRow=document.createElement("div"),this.recordRow.className="status__record",this.recordRow.hidden=!0,this.recordBtn=document.createElement("button"),this.recordBtn.className="status__recordbtn",this.recordBtn.type="button",this.recordDot=document.createElement("span"),this.recordDot.className="status__dot",this.recordLabel=document.createElement("span"),this.recordLabel.textContent="Запись",this.recordBtn.append(this.recordDot,this.recordLabel),this.recordBtn.addEventListener("pointerdown",E=>{E.preventDefault(),!this.recordBtn.disabled&&(xe("click"),n.onRecord?.())}),this.recordState=document.createElement("span"),this.recordState.className="status__recordstate",this.recordState.textContent="",this.recordBar=document.createElement("div"),this.recordBar.className="status__recordbar",this.recordFill=document.createElement("span"),this.recordBar.append(this.recordFill),this.recordBar.style.display="none",this.recordRow.append(this.recordBtn,this.recordState,this.recordBar),this.statusEl=document.createElement("div"),this.statusEl.className="status",this.clusterHost=document.createElement("div"),this.clusterHost.className="status__cluster",this.statusEl.append(this.clusterHost),this.statusText.setAttribute("role","status"),this.statusText.setAttribute("aria-live","polite"),this.statusEl.append(this.statusText),this.settings.recordSlot.append(this.recordRow);const f=document.createElement("div");f.className="mid",f.append(d,this.windows.root),this.actionsEl=d,this.midEl=f;const u=document.createElement("div");u.className="wrap",u.append(f);const x=document.createElement("button");x.className="chrome-fab",x.type="button",x.style.setProperty("--fab-icon",`url(${JSON.stringify(cr)})`),x.title="Показать интерфейс",x.setAttribute("aria-label","Показать интерфейс"),x.addEventListener("pointerdown",E=>{E.preventDefault(),xe("click"),this.setChromeHidden(!1)}),this.root.append(s,this.topbar.root,u,this.statusEl,x),t.append(this.root),mr(()=>kc("uiClick")),pr(),this.uiSoundDetach.push(Xe(this.root),Xe(this.settings.root),Zt(this.settings.root),Xe(this.modes.dialog.root)),this.windows.register({id:"settings",root:this.settings.root,show:()=>this.settings.open(),hide:()=>this.settings.close()}),this.windows.register({id:"modes",root:this.modes.dialog.root,show:()=>this.modes.open(),hide:()=>this.modes.dialog.close()}),this.settings.close(),this.autosave=Hc({onSaved:E=>{this.setStatus(`Настройки сохранены в пресет «${E}».`)},onNoPreset:()=>{this.setStatus("Настройки применены, но активного пресета нет — сохранять некуда. Сохраните пресет на вкладке «Пресеты».")}})}openSettings(){this.settings.open(),this.windows.open("settings")}setMode(t){const n=t==="scene";this.playBtn.style.display=n?"none":"",this.backBtn.style.display=n?"":"none",this.recordRow.hidden=!n,n&&(this.modes.dialog.close(),this.windows.close()),this.setChromeHidden(!1),this.actionsEl.style.display=n?"none":"",this.midEl.style.gridTemplateColumns=n?"minmax(0, 1fr)":"",this.root.style.background=n?"none":"",this.root.classList.toggle("menu--scene",n)}setChromeHidden(t){this.chromeHidden=t,this.root.classList.toggle("menu--chrome-hidden",t)}isChromeHidden(){return this.chromeHidden}setSceneChrome(t){this.topbar.setSceneMode(t)}statsHostFor(t){return this.statsHost}setBusy(t){this.playBtn.disabled=t,this.settingsItem.disabled=t,this.backBtn.disabled=t,this.modes.setBusy(t),t&&this.setStatus("Инициализация рендера…")}setStatus(t){this.statusText.textContent=t||this.pickIdlePhrase()}setRecordState(t,n){const s=gl.includes(t);this.recordBtn.classList.toggle("live",s),this.recordBtn.disabled=t==="starting"||t==="encoding"||t==="saving",this.recordLabel.textContent=t==="recording"?"Стоп":"Запись",this.recordBar.style.display=t==="encoding"||t==="saving"?"block":"none",this.recordFill.style.width="0%",this.recordState.textContent=n??bl[t]}setRecordProgress(t){this.recordFill.style.width=`${Math.min(Math.max(t,0),1)*100}%`}pickIdlePhrase(){let t=Math.floor(Math.random()*Vs.length);return t===this.idleIndex&&(t=(t+1)%Vs.length),this.idleIndex=t,Vs[t]??""}destroy(){this.topbar.destroy(),this.modes.destroy(),this.windows.destroy(),this.autosave.destroy();for(const t of this.uiSoundDetach)t();this.root.remove(),this.settings.root.remove()}}const _l=`
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
`,yl='<svg class="rswitch__svg" viewBox="0 0 48 26" width="48" height="26" aria-hidden="true" focusable="false"><rect class="rswitch__track" x="1" y="1" width="46" height="24" rx="12"></rect><circle class="rswitch__knob" cx="13" cy="13" r="9"></circle></svg>';function vl(e,t){const n=document.createElement("div");n.className="rswitch-wrap";const s=document.createElement("span");s.className="rswitch__opt",s.textContent="WebGL2",s.dataset.val="webgl2";const o=document.createElement("button");o.className="rswitch",o.type="button",o.setAttribute("role","switch"),o.innerHTML=yl;const a=document.createElement("span");a.className="rswitch__opt",a.textContent="WebGPU",a.dataset.val="webgpu",n.append(s,o,a);const i=()=>{o.disabled||t.onSwitch()};n.addEventListener("click",i),e.append(n);let l="webgl2",d=!1,f="";const u=()=>{const x=l==="webgpu";o.dataset.state=x?"on":"off",o.setAttribute("aria-checked",x?"true":"false"),s.classList.toggle("rswitch__opt--active",!x),a.classList.toggle("rswitch__opt--active",x);const E=x?"WebGL2":"WebGPU";o.title=o.disabled&&f?f:`Переключить на ${E}`,o.setAttribute("aria-label",`Рендер: ${x?"WebGPU":"WebGL2"}. Переключить на ${E}`),n.classList.toggle("rswitch-wrap--disabled",o.disabled),n.setAttribute("aria-disabled",String(o.disabled))};return u(),{setBackend(x){l=x,u()},setBusy(x){d=x,o.disabled=x||!!f,u()},setUnavailable(x){f=x,o.disabled=d||!!x,u()},destroy(){n.remove()}}}const wl=`
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
`;function Qt(e,t,n,s,o,a){o<=0||s<=0||(e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o),e.fill())}const El="#ebdbb2",Cn="system-ui, -apple-system, 'Segoe UI', sans-serif",jn=.9;function Sl(e){let t="";return{draw:(s,o,a,i)=>{if(o<=0||a<=0||i<=0)return!1;const l=e(),d=l===null?"none":[Math.round(Math.abs(l.speed)*.9),l.rpm,l.gear,l.shifting?1:0,l.gears.length,Math.round(l.charge*100),Math.round(l.boost*100),o,a,window.innerWidth].join("|");if(d===t)return!1;if(t=d,s.clearRect(0,0,o,a),s.fillStyle="rgba(29, 32, 33, 0.93)",s.fillRect(0,0,o,a),l===null)return!0;s.save(),s.scale(i,i);const f=a/i,u=document.documentElement.classList.contains("hud-density--skinny"),x=window.innerWidth>1100,E=window.innerWidth>820,h=12,g=f/2;let S=0;if(s.textBaseline="middle",s.textAlign="left",x){const p=u?48:64,_=4;s.fillStyle="#ffffff1f",Qt(s,S,g-_/2,p,_,2);const C=Math.max(l.maxRpm-l.idleRpm,1),L=Math.min(Math.max((l.rpm-l.idleRpm)/C,0),1);L>0&&(s.fillStyle=l.rpm>=l.shiftUpRpm?"#fe8019":"#ebdbb2cc",Qt(s,S,g-_/2,p*L,_,2)),S+=p+h}const y=u?18:24,N=u?9:11;s.fillStyle=El,s.font=`700 ${y}px ${Cn}`;const c=`${Math.round(Math.abs(l.speed)*jn)}`;s.fillText(c,S,g);const m=s.measureText(c).width;if(s.font=`400 ${N}px ${Cn}`,s.fillStyle="rgba(235, 219, 178, 0.55)",s.fillText("км/ч",S+m+3,g),S+=m+3+s.measureText("км/ч").width+8,E){const p=l.gears.length,_=u?16:20,C=4,L=l.gear<0?0:l.gear;for(let w=0;w<=p;w++){const v=S+w*(_+4),T=w===L;s.fillStyle=T?l.shifting?"#ffffff4d":"#ebdbb2e6":"#ffffff1a",Qt(s,v,g-_/2,_,_,C),s.fillStyle=T?l.shifting?"#ffffff8c":"#1d2021":"#ffffff73",s.font=`600 ${u?9:11}px ${Cn}`,s.textAlign="center",s.fillText(w===0?"R":`${w}`,v+_/2,g),s.textAlign="left"}S+=(p+1)*(_+4)-4+h}if(x){const p=Math.min(Math.max(l.charge,0),1),_=Math.min(Math.max(l.boost,0),1),C=p>0?p:_;s.font=`400 9px ${Cn}`,s.fillStyle="rgba(235, 219, 178, 0.8)",s.fillText(p>0?"ЗАРЯД":"БУСТ",S,g);const L=s.measureText("ЗАРЯД").width,w=u?40:56,v=3,T=S+L+5;s.fillStyle="#ffffff1f",Qt(s,T,g-v/2,w,v,2),C>0&&(s.fillStyle=_>0?"#fe8019":"#7b5cff",Qt(s,T,g-v/2,w*C,v,2))}return s.restore(),!0},reset(){t=""},destroy(){t=""}}}function kl(e,t){const n=document.createElement("div");n.className="cluster",n.setAttribute("role","group"),n.setAttribute("aria-label","Приборы машины");const s=document.createElement("div");s.className="cluster__revs";const o=document.createElement("span");s.append(o);const a=document.createElement("div");a.className="cluster__dials";const i=document.createElement("span");i.className="cluster__speed",i.textContent="0";const l=document.createElement("span");l.className="cluster__unit",l.textContent="км/ч";const d=document.createElement("span");d.append(i,l);const f=document.createElement("div");f.className="cluster__gearbox",a.append(d,f);const u=document.createElement("div");u.className="cluster__boost";const x=document.createElement("span");x.textContent="Заряд";const E=document.createElement("div");E.className="cluster__boostbar";const h=document.createElement("span");E.append(h),u.append(x,E),n.append(s,a,u);const g=document.createElement("style");g.textContent=wl,document.head.append(g);let S=[],y=-1,N=0;const c=()=>{if(N++%4!==0)return;const p=e();if(!p)return;i.textContent=`${Math.round(Math.abs(p.speed)*jn)}`;const _=p.gears.length;if(_!==y){y=_,f.replaceChildren(),S=[];const I=_+1;for(let O=0;O<I;O++){const A=document.createElement("span");A.textContent=O===0?"R":`${O}`,f.append(A),S.push(A)}}const C=p.gear<0?0:p.gear;for(let I=0;I<S.length;I++)S[I]?.classList.toggle("engaged",I===C);f.classList.toggle("shifting",p.shifting);const L=Math.max(p.maxRpm-p.idleRpm,1),w=(p.rpm-p.idleRpm)/L;o.style.width=`${Math.min(Math.max(w,0),1)*100}%`,o.classList.toggle("redline",p.rpm>=p.shiftUpRpm);const v=Math.min(Math.max(p.charge,0),1),T=Math.min(Math.max(p.boost,0),1),B=v>0?v:T;h.style.width=`${B*100}%`,h.classList.toggle("firing",T>0),x.textContent=v>0?"Заряд":"Буст"};n.dataset.cleanup="1",(t??document.body).append(n);const m=window.setInterval(c,1e3/60/4);return{destroy(){window.clearInterval(m),n.remove(),g.remove()}}}const ii="vehicle",su="vehicleInput",ou="vehicleWheel",Cl="driveCamera",zn=5,Nl=50,Ll=8e3,Al=600;function Rl(e,t){return Math.abs(e)>Nl&&t>=Ll}function Tl(e){return e>0?e-1:0}function Ml(e,t){const n={cells:zn,max:zn,lastSpeedKmh:0,lastEventSpeedKmh:0,lastImpulse:0},s=n,o=t.collision,a=t.script?.get(ii);let i=Number.NEGATIVE_INFINITY,l=!1,d=0;const f=()=>{const E=a?.speed;typeof E=="number"&&Number.isFinite(E)&&(d=Math.abs(E)*jn)};e.on("update",f);const u=E=>{if(l)return;let h=0;for(const y of E.contacts??[]){const N=y.impulse??0;N>h&&(h=N)}const g=Math.abs(a?.speed??0)*jn;if(n.lastSpeedKmh=d,n.lastEventSpeedKmh=g,n.lastImpulse=h,!Rl(d,h))return;const S=performance.now();S-i<Al||(i=S,n.cells=Tl(n.cells),console.info("[lives] удар:",`${Math.round(d)} км/ч по прибору`,"(в событии",`${Math.round(g)} км/ч)`,"· импульс",Math.round(h),"· осталось ячеек",n.cells),e.fire("lives:hit",n.cells),!(n.cells>0)&&(l=!0,e.fire("lives:depleted")))};o?o.on("collisionstart",u):console.warn("[lives] у машины нет collision-компонента — прочность не работает");const x=window;return x.__blendarsLives=s,{view:s,destroy(){e.off("update",f),o?.off("collisionstart",u),x.__blendarsLives===s&&delete x.__blendarsLives}}}const Pl={w:220,h:28,pad:8,cellW:18,cellH:10,gap:2,labelSize:12,statusSize:11},Il={w:184,h:24,pad:6,cellW:14,cellH:8,gap:2,labelSize:11,statusSize:11};function ri(){return document.documentElement.classList.contains("hud-density--skinny")?Il:Pl}function ci(){const e=ri();return{w:e.w,h:e.h}}const $l="rgba(0, 0, 0, 0.35)",Fl="rgba(40, 40, 40, 0.93)",fa="#928374",Bl="#d5c4a1",Ol="#ebdbb2",li="#8ec07c",Hn="#fabd2f",Ys="#fe8019",Dl="rgba(40, 40, 40, 0.35)",ha="system-ui, -apple-system, 'Segoe UI', sans-serif",jl=220,di=4,ui=1;function ba(e,t){const n=e;typeof n.letterSpacing=="string"&&(n.letterSpacing=`${t}px`)}const zl=typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches;function Hl(e){return e<=ui?{text:"CRITICAL",color:Hn}:e<di?{text:"DAMAGED",color:Hn}:{text:"STABLE",color:Ol}}function Ul(e){return e>=di?li:Hn}function mi(e){let t=-2,n=0,s=!1,o=!1,a=null,i=0,l=0,d=0;return{draw:(u,x,E,h)=>{if(x<=0||E<=0||h<=0)return!1;const g=e(),S=g===null?-1:Math.max(0,Math.min(g.cells,g.max)),y=g===null?zn:Math.max(1,Math.min(g.max,10)),N=performance.now();!zl&&S>=0&&t>=0&&S<t&&(d=N+jl);const c=N<d,m=S>=0&&S<=ui,p=ri();if(S===t&&y===n&&c===s&&m===o&&p===a&&x===i&&E===l)return!1;if(t=S,n=y,s=c,o=m,a=p,i=x,l=E,u.clearRect(0,0,x,E),S<0)return!0;u.save(),u.scale(h,h);const _=x/h,C=E/h;u.fillStyle=$l,u.fillRect(0,0,_,C),u.fillStyle=Fl,u.fillRect(0,0,_,C),u.strokeStyle=c?Ys:fa,u.lineWidth=c?2:1,u.strokeRect(.5,.5,_-1,C-1),u.fillStyle=c?Ys:m?Hn:li,u.fillRect(0,3,2,C-6);const L=C/2;u.textBaseline="middle",u.textAlign="left";let w=2+p.pad;ba(u,p.labelSize*.08),u.font=`700 ${p.labelSize}px ${ha}`,u.fillStyle=Bl,u.fillText("HP",w,L),w+=u.measureText("HP").width+p.pad;const v=L-p.cellH/2;for(let B=0;B<y;B++){const I=w+B*(p.cellW+p.gap);if(B<S&&(u.fillStyle=c?Ys:Ul(S),u.fillRect(I+1,v+1,p.cellW-2,p.cellH-2),m&&!c)){u.save(),u.beginPath(),u.rect(I+1,v+1,p.cellW-2,p.cellH-2),u.clip(),u.strokeStyle=Dl,u.lineWidth=2,u.beginPath();for(let O=I-p.cellH;O<I+p.cellW;O+=4)u.moveTo(O,v+p.cellH),u.lineTo(O+p.cellH,v);u.stroke(),u.restore()}u.strokeStyle=fa,u.lineWidth=1,u.strokeRect(I+.5,v+.5,p.cellW-1,p.cellH-1)}w+=y*(p.cellW+p.gap)-p.gap+p.pad;const T=Hl(S);return u.font=`700 ${p.statusSize}px ${ha}`,u.fillStyle=T.color,u.fillText(T.text,w,L),ba(u,0),u.restore(),!0},reset(){i=0,l=0,a=null},destroy(){i=0,l=0,a=null}}}const Gl=`
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
`;function Wl(e,t){const n=document.createElement("div");n.className="lives",n.setAttribute("role","img");const s=document.createElement("canvas");n.append(s);const o=document.createElement("style");o.textContent=Gl,document.head.append(o),document.body.append(n);const a=s.getContext("2d"),i=mi(e);if(!a)return n.remove(),o.remove(),{destroy(){}};let l=0,d=0,f=0,u=-2,x=0;const E=()=>{x=requestAnimationFrame(E);const h=ci(),g=Math.max(1,Math.min(window.devicePixelRatio||1,2));(h.w!==l||h.h!==d||g!==f)&&(l=h.w,d=h.h,f=g,s.width=Math.round(h.w*g),s.height=Math.round(h.h*g),s.style.width=h.w+"px",s.style.height=h.h+"px",i.reset()),i.draw(a,s.width,s.height,s.width/h.w);const S=e(),y=S===null?-1:S.cells;y!==u&&(u=y,n.setAttribute("aria-label",S===null?"":"Прочность "+S.cells+" из "+S.max))};return x=requestAnimationFrame(E),{destroy(){cancelAnimationFrame(x),i.destroy(),n.remove(),o.remove()}}}const so=10;function Vl(e,t){const n=e/t,s=Math.floor(n*6),o=n*6-s,a=.25,i=1-.75*o,l=.25+.75*o,d={0:[1,l,a],1:[i,1,a],2:[a,1,l],3:[a,i,1],4:[l,a,1],5:[1,a,i]},[f,u,x]=d[s%6]??[1,1,1];return new va(f,u,x,1)}function Ks(e,t,n){const s=new Pi;return s.diffuse=new va(0,0,0),s.emissive=t,s.emissiveIntensity=2,s.blendType=Ii,s.opacity=n,s.depthWrite=!1,s.update(),s}function Yl(e,t,n=so){let s=null;const o=()=>{try{s??=new AudioContext;const w=s;w.state==="suspended"&&w.resume();const v=w.currentTime+.02,T=w.createOscillator();T.type="sawtooth",T.frequency.setValueAtTime(70,v),T.frequency.exponentialRampToValueAtTime(300,v+2.5);const B=w.createBiquadFilter();B.type="lowpass",B.Q.value=6,B.frequency.setValueAtTime(180,v),B.frequency.exponentialRampToValueAtTime(1800,v+2.5);const I=w.createGain();I.gain.setValueAtTime(1e-4,v),I.gain.exponentialRampToValueAtTime(.22,v+2.4),I.gain.setValueAtTime(.22,v+2.5),I.gain.linearRampToValueAtTime(0,v+2.7),T.connect(B).connect(I).connect(w.destination),T.start(v),T.stop(v+2.8);const O=2.4,A=w.createBufferSource(),ne=w.createBuffer(1,Math.ceil(w.sampleRate*O),w.sampleRate),ie=ne.getChannelData(0);for(let pe=0;pe<ie.length;pe++)ie[pe]=Math.random()*2-1;A.buffer=ne;const re=w.createBiquadFilter();re.type="bandpass",re.Q.value=2.5,re.frequency.setValueAtTime(250,v+2.5),re.frequency.exponentialRampToValueAtTime(5200,v+4.6);const oe=w.createGain();oe.gain.setValueAtTime(1e-4,v+2.5),oe.gain.exponentialRampToValueAtTime(.3,v+2.62),oe.gain.exponentialRampToValueAtTime(.001,v+4.8),A.connect(re).connect(oe).connect(w.destination),A.start(v+2.5),A.stop(v+4.9)}catch{}},a=new xt("checkpoints");t.addChild(a);const i=(w,v)=>{const T=new Yo(w,120,v),B=new Yo(w,-20,v),I=e.systems.rigidbody?.raycastFirst(T,B);return I?I.point.y:0},l=(w,v)=>{const T=i(w,v);return Math.abs(i(w+4,v)-T)<1.2&&Math.abs(i(w,v+4)-T)<1.2},d=w=>{let v={x:0,z:0,y:0};for(let T=0;T<8;T++){const B=w/n*Math.PI*2+Math.random()*.6,I=60+Math.random()*200,O=Math.cos(B)*I,A=Math.sin(B)*I;if(v={x:O,z:A,y:i(O,A)},l(O,A))return v}return v},f=e.graphicsDevice,u=new Bs({ringRadius:4,tubeRadius:.14,sectorAngle:360,segments:48,sides:10}),x=new Bs({ringRadius:2.6,tubeRadius:.12,sectorAngle:360,segments:36,sides:10}),E=new Bs({ringRadius:1.5,tubeRadius:.1,sectorAngle:360,segments:24,sides:8}),h=new Mi({radius:.35,height:60,heightSegments:1,capSegments:12}),g=En.fromGeometry(f,u),S=En.fromGeometry(f,x),y=En.fromGeometry(f,E),N=En.fromGeometry(f,h),c=[],m=new Map;for(let w=0;w<n;w++){const{x:v,z:T,y:B}=d(w),I=Vl(w,n),O=new xt(`checkpoint-${w}`);O.setPosition(v,B+.35,T);const A=(J,X,le,Y)=>{const he=new xt("ring");return he.addComponent("render",{meshInstances:[new Vo(J,X)],castShadows:!1,receiveShadows:!1}),he.setEulerAngles(le,0,Y),O.addChild(he),he},ne=Ks(f,I,.9),ie=Ks(f,I,.55),re=Ks(f,I,.28),oe=A(g,ne,0,0),pe=A(S,ie,66,24),Q=A(y,ie,108,-30),H=new xt("beam");H.addComponent("render",{meshInstances:[new Vo(N,re)],castShadows:!1,receiveShadows:!1}),H.setLocalPosition(0,30,0),O.addChild(H),a.addChild(O);const G={info:{id:w,x:v,z:T,color:Math.round(I.r*255)<<16|Math.round(I.g*255)<<8|Math.round(I.b*255)},node:O,rings:[oe,pe,Q],beam:H,mats:[ne,ie],beamMat:re,state:"alive",t:0};c.push(G),m.set(O,G)}const p=w=>{for(const v of c){if(v.state==="alive"){v.rings[0]?.rotate(0,w*50,0),v.rings[1]?.rotate(w*30,w*-70,0),v.rings[2]?.rotate(w*-45,0,w*60);continue}v.t+=w;const T=v.t;if(T<2.5){const B=T/2.5,I=1-(1-B)*(1-B),O=1+1.3*I;v.node.setLocalScale(O,O,O);const A=w*10*I;v.rings[0]?.rotate(0,A*50,0),v.rings[1]?.rotate(A*30,A*-70,0),v.rings[2]?.rotate(A*-45,0,A*60)}else if(T<5){const B=(T-2.5)/2.5,I=1-B*B,O=Math.max(2.3*I*I,.001);v.node.setLocalScale(O,O,O);const A=w*(10+B*40);v.rings[0]?.rotate(0,A*50,0),v.rings[1]?.rotate(A*30,A*-70,0),v.rings[2]?.rotate(A*-45,0,A*60),v.beam.setLocalScale(1,1+B*2.2,1),v.beam.setLocalPosition(0,30+B*45,0),v.beamMat.opacity=.28*(1-B),v.beamMat.update();for(let ne=0;ne<v.mats.length;ne++){const ie=ne===0?.9:.55;v.mats[ne].opacity=Math.max(ie*(1-B),0),v.mats[ne].update()}}}for(let v=c.length-1;v>=0;v--){const T=c[v];T.state==="dying"&&T.t>=5&&(T.node.destroy(),e.fire("checkpoint:visited",T.info),c.splice(v,1))}};e.on("update",p);const _=()=>t.findByName("vehicle");let C=0;const L=w=>{if(C+=w,C<.25)return;C=0;const T=_()?.getPosition();if(T)for(let B=c.length-1;B>=0;B--){const I=c[B],O=T.x-I.info.x,A=T.z-I.info.z;I.state==="alive"&&O*O+A*A<9*9&&(I.state="dying",I.t=0,o())}};return e.on("update",L),{list:()=>c.map(w=>w.info),destroy(){e.off("update",p),e.off("update",L),s?.close().catch(()=>{}),a.destroy()}}}function pi(){return null}const Nn=55,Kl={lane:38,zone:32,total:70},Jl={lane:26,zone:24,total:50},Xl={lane:0,zone:0,total:0};function Lo(){const e=document.documentElement.classList;return e.contains("hud-density--minimal")?Xl:e.contains("hud-density--skinny")?Jl:Kl}const ql=`
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
`,Ql={0:"С",45:"СВ",90:"В",135:"ЮВ",180:"Ю",225:"ЮЗ",270:"З",315:"СЗ"};function Zl(){return Lo().total<=0}function fi(e,t,n,s=pi){let o=null;const a=()=>{try{o??=new AudioContext,o.state==="suspended"&&o.resume();const c=o,m=c.currentTime+.01;for(const[p,_]of[880,1318.51].entries()){const C=c.createOscillator(),L=c.createGain();C.type="sine",C.frequency.value=_;const w=m+p*.09;L.gain.setValueAtTime(0,w),L.gain.linearRampToValueAtTime(.16,w+.02),L.gain.exponentialRampToValueAtTime(.001,w+.38),C.connect(L).connect(c.destination),C.start(w),C.stop(w+.42)}}catch{}},i=document.createElement("div");i.className="compass-toast",document.body.append(i);let l=null;const d=c=>{i.textContent=c,i.classList.add("compass-toast--on"),a(),l!==null&&window.clearTimeout(l),l=window.setTimeout(()=>{i.classList.remove("compass-toast--on"),l=null},2400)};let f=-1,u=-1,x="",E="",h=-1,g=0;const S=c=>(c*180/Math.PI+360)%360,y=(c,m)=>{let p=(c-m)%360;return p>=180&&(p-=360),p<-180&&(p+=360),p};return{draw:(c,m,p)=>{if(p===0||m===0)return!1;const _=e();if(_===null)return x!==""?(c.clearRect(0,0,m,p),x="",!0):!1;const C=S(_),L=t(),w=n(),v=s();v!==null&&v.collected!==u?(u>=0&&v.collected>u&&d(v.collected>=v.total?`Все ${v.total} чекпоинтов собраны`:`Чекпоинт ${v.collected} из ${v.total}`),u=v.collected):(w.length!==f&&f>=0&&w.length<f&&v===null&&d(w.length>0?`Чекпоинт собран · осталось: ${w.length}`:"Все чекпоинты собраны!"),f=w.length);let T="";if(v!==null&&v.state!=="idle"){const Q=v.state==="running"?Math.max(0,performance.now()-v.startMs):v.lastMs;T=`${ln(Math.floor(Q/100)*100)} · ${v.collected}/${v.total}`}const B=`${m}x${p}|${C.toFixed(2)}|${L?`${L.x.toFixed(1)},${L.z.toFixed(1)}`:""}|${w.length}|${T}`;if(B===x)return!1;x=B;const I=Lo(),O=p/(I.total||1),A=Math.round(I.lane*O),ne=A;c.save(),c.beginPath(),c.rect(0,0,m,p),c.clip(),c.clearRect(0,0,m,p);const ie=c.createLinearGradient(0,0,0,A);ie.addColorStop(0,"rgba(235, 219, 178, 0.15)"),ie.addColorStop(.6,"rgba(40, 40, 40, 0.94)"),c.fillStyle=ie,c.fillRect(0,0,m,A),c.strokeStyle="rgba(235, 219, 178, 0.18)",c.lineWidth=1,c.strokeRect(.5,.5,m-1,A-1);const re=m/(Nn*2),oe=m/2,pe=Math.round((C-Nn)/15)*15;c.textAlign="center",c.textBaseline="middle";for(let Q=pe;Q<=C+Nn;Q+=15){const H=oe+y(Q,C)*re,ce=Ql[(Q%360+360)%360];ce!==void 0?(c.fillStyle="#ebdbb2e6",c.font=`600 ${Math.round(A*.34)}px system-ui, sans-serif`,c.fillText(ce,H,A*.42)):Q%45===0?(c.fillStyle="#ebdbb280",c.fillRect(H-1,A*.3,2,A*.22)):(c.fillStyle="#ebdbb240",c.fillRect(H-1,A*.36,2,A*.12))}if(c.fillStyle="#fe8019",c.fillRect(oe-1.5,A*.14,3,A*.2),L){const Q=[...w].map(G=>{const J=G.x-L.x,X=G.z-L.z;return{cp:G,dist:Math.round(Math.hypot(J,X)),off:y(S(Math.atan2(J,-X)),C)}}).sort((G,J)=>G.off-J.off);let H=-1e9,ce=0;for(const{cp:G,dist:J,off:X}of Q){const le=`#${G.color.toString(16).padStart(6,"0")}`;let Y=oe+X*re;if(Math.abs(X)>Nn-4){Y=oe+Math.sign(X)*(m/2-14*(m/560)),c.save(),c.translate(Y,A*.42),c.rotate(Math.sign(X)*Math.PI/2),c.fillStyle=le,c.beginPath(),c.moveTo(0,-6*(m/560)),c.lineTo(5*(m/560),3*(m/560)),c.lineTo(-5*(m/560),3*(m/560)),c.closePath(),c.fill(),c.restore();continue}Math.abs(Y-H)<34*(m/560)?ce=(ce+1)%2:ce=0,H=Y;const ve=5*(m/560);c.fillStyle=le,c.beginPath(),c.moveTo(Y,A*.2-ve),c.lineTo(Y+ve,A*.2),c.lineTo(Y,A*.2+ve),c.lineTo(Y-ve,A*.2),c.closePath(),c.fill(),c.fillStyle="#ebdbb2d9",c.font=`500 ${Math.round(A*.26)}px system-ui, sans-serif`,c.fillText(`${J}м`,Y,A*(.62+ce*.24))}}if(v!==null&&T!==""){const Q=m/560,H=Math.max(10,Math.round(I.zone*.62*O));c.font=`600 ${H}px system-ui, sans-serif`,c.textAlign="center",c.textBaseline="middle",(T!==E||H!==h)&&(E=T,h=H,g=c.measureText(T).width);const ce=9*Q,G=H+7*Q,J=g+ce*2,X=(m-J)/2,le=ne+Math.max(0,(p-ne-G)/2);c.beginPath(),typeof c.roundRect=="function"?c.roundRect(X,le,J,G,4*Q):c.rect(X,le,J,G),c.fillStyle="rgba(29, 32, 33, 0.9)",c.fill(),c.strokeStyle=v.state==="finished"?"#b8bb2680":v.state==="aborted"?"#fabd2f80":"#ebdbb233",c.lineWidth=1,c.stroke(),c.fillStyle=v.state==="finished"?"#b8bb26":v.state==="aborted"?"#fabd2f":"#ebdbb2",c.fillText(T,m/2,le+G/2)}return c.restore(),!0},reset(){x=""},destroy(){l!==null&&window.clearTimeout(l),o?.close().catch(()=>{}),i.remove()}}}function ed(e,t,n,s=pi){const o=document.createElement("div");o.className="compass";const a=document.createElement("canvas");o.append(a);const i=document.createElement("style");i.textContent=ql,o.append(i),document.body.append(o);const l=fi(e,t,n,s),d=()=>{const h=Math.min(window.devicePixelRatio||1,2);a.width=Math.round(a.clientWidth*h),a.height=Math.round(a.clientHeight*h)};d(),window.addEventListener("resize",d);let f=-1,u=-1,x=0;const E=()=>{const h=a.getContext("2d");h&&(a.width!==f||a.height!==u)&&(f=a.width,u=a.height,h.clearRect(0,0,a.width,a.height)),h&&l.draw(h,a.width,a.height),x=requestAnimationFrame(E)};return x=requestAnimationFrame(E),{destroy(){cancelAnimationFrame(x),window.removeEventListener("resize",d),l.destroy(),o.remove(),i.remove()}}}function td(e,t){const n=e.graphicsDevice,s=d=>{const f=new Di(n,{name:`hud-${d.width}x${d.height}`,format:ji,width:d.width,height:d.height,mipmaps:!1,minFilter:Jo,magFilter:Jo,addressU:Ko,addressV:Ko,anisotropy:1,premultiplyAlpha:!0,srgb:!0});return f.setSource(d),f};let o=null;const a=[];try{o=new xt("hud-screen"),o.addComponent("screen",{screenSpace:!0,scaleMode:$i}),e.root.addChild(o);for(const d of t){const f=document.createElement("canvas"),u=f.getContext("2d",{alpha:!0});if(!u)throw new Error("нет 2d-контекста");const x=new xt(`hud-${d.name}`);x.addComponent("element",{type:Oi,anchor:new Bi(0,0,0,0),pivot:new Fi(0,0),opacity:1,useInput:!1}),o.addChild(x),x.enabled=!1,a.push({layer:d,entity:x,element:x.element,canvas:f,ctx:u,texture:null,sizeKey:"",dirty:!0})}}catch(d){console.warn("[hud] слой HUD не поднялся — HUD остаётся DOM-ом",d);for(const f of a)f.texture?.destroy();return o?.destroy(),{active:!1,destroy(){}}}const i=(d,f)=>{const u=d.layer.rect();if(!u||u.w<=0||u.h<=0)return d.entity.enabled=!1,!1;const x=Math.max(1,Math.round(u.w*f)),E=Math.max(1,Math.round(u.h*f)),h=`${x}x${E}`;if(h!==d.sizeKey){d.sizeKey=h,d.canvas.width=x,d.canvas.height=E;const g=s(d.canvas);d.element.texture=g,d.texture?.destroy(),d.texture=g,d.layer.reset(),d.dirty=!0}return d.element.width=u.w*f,d.element.height=u.h*f,d.entity.setLocalPosition(Math.round(u.x*f),n.height-Math.round((u.y+u.h)*f),0),d.entity.enabled=!0,!0},l=()=>{const d=n.width>0?n.width/Math.max(window.innerWidth,1):1;if(!(d<=0||!Number.isFinite(d)))for(const f of a){if(!f.ctx||!i(f,d))continue;const u=f.texture;if(!u)continue;(f.layer.draw(f.ctx,f.canvas.width,f.canvas.height,d)||f.dirty)&&(f.dirty=!1,u.setSource(f.canvas),u.upload())}};return e.on("prerender",l),{active:!0,destroy(){e.off("prerender",l);for(const d of a)d.texture?.destroy(),d.layer.destroy();o.destroy()}}}function nd(e,t,n,s,o,a){e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o)}function sd(e){let t=!1;const n=fi(e.getHeading,e.getVehicle,e.getCheckpoints,e.readRace),s=Sl(e.read),o=mi(e.readLives),a=()=>{if(Zl())return null;const h=Math.min(window.innerWidth*.62,560),g=Lo();if(h<40||g.total<=0)return null;const S=e.safeTop()+(g.lane===26?126:92);return{x:(window.innerWidth-h)/2,y:S,w:h,h:g.total}},i=()=>{const h=e.clusterHost,g=h.parentElement;if(!g||h.offsetParent===null&&g.clientHeight===0)return null;const S=g.getBoundingClientRect();return S.height<4?null:{x:S.left,y:S.top,w:S.width,h:S.height}};return{layers:[(()=>{let h="";return{name:"bar",rect:i,draw(g,S,y,N){const c=`${S}x${y}@${N}`;return c===h?!1:(h=c,g.clearRect(0,0,S,y),g.save(),nd(g,0,0,S,y,Math.max(4,6*N)),g.fillStyle="rgba(29, 32, 33, 0.93)",g.fill(),g.strokeStyle="rgba(235, 219, 178, 0.2)",g.lineWidth=Math.max(1,N),g.stroke(),g.restore(),!0)},reset(){h=""},destroy(){h=""}}})(),{name:"compass",rect:a,draw(h,g,S){return n.draw(h,g,S)},reset(){n.reset()},destroy(){n.destroy()}},{name:"cluster",rect:()=>{const h=e.clusterHost,g=i();if(!g)return null;const S=h.getBoundingClientRect();return{x:S.left>0?S.left:g.x+16,y:g.y,w:Math.min(480,Math.max(g.w,240)),h:g.h}},draw(h,g,S,y){return s.draw(h,g,S,y)},reset(){s.reset()},destroy(){s.destroy()}},{name:"lives",rect:()=>{const h=ci(),g=a(),S=e.safeTop()+92;return g!==null&&16+h.w>g.x-8?{x:16,y:g.y+g.h+8,w:h.w,h:h.h}:{x:16,y:S,w:h.w,h:h.h}},draw(h,g,S,y){return o.draw(h,g,S,y)},reset(){o.reset()},destroy(){o.destroy()}}],destroy(){t||(t=!0,n.destroy(),s.destroy(),o.destroy())}}}let ga=!1,xa=null;function hi(){return xa??=q(()=>import("./index.Dp09MIqC.js"),[]).then(e=>e.default),xa}function bi(){try{return new URLSearchParams(location.search).has("vk_app_id")}catch{return!1}}const od=1e4;async function ad(){if(ga||!bi())return!1;ga=!0;try{const e=await hi(),t=await Promise.race([e.send("VKWebAppInit"),new Promise((n,s)=>{setTimeout(()=>s(new Error("платформа не ответила на VKWebAppInit")),od)})]);if(t?.result)return console.info("[vk] VKWebAppInit: платформа подтвердила запуск приложения"),!0;console.warn("[vk] VKWebAppInit: платформа ответила без подтверждения",t)}catch(e){console.warn("[vk] не удалось инициализировать приложение ВКонтакте",e)}return!1}const Js={uid:"local",name:"Гость",photo:""},id=8e3;function rd(){return String("6739294").trim()}function cd(e,t,n){return Promise.race([e,new Promise((s,o)=>{setTimeout(()=>o(new Error(n)),t)})])}async function ld(){let e;try{e=new URLSearchParams(location.search)}catch{return Js}const t=e.get("vk_user_id");if(!t)return Js;const n=e.get("vk_app_id")??"",s=rd();if(s!==""&&n!==s)return console.warn("[vk] запуск с чужим app_id:",n,"— свой:",s),Js;const o=`vk:${t}`;if(!bi())return{uid:o,name:"Игрок ВКонтакте",photo:""};try{const a=await hi(),i=await cd(a.send("VKWebAppGetUserInfo"),id,"платформа не ответила на VKWebAppGetUserInfo"),l=`${i.first_name} ${i.last_name}`.trim();return{uid:o,name:l===""?"Игрок ВКонтакте":l,photo:i.photo_200}}catch(a){return console.warn("[vk] имя игрока не получено",a),{uid:o,name:"Игрок ВКонтакте",photo:""}}}let _a=null;function dd(){return _a??=ld(),_a}function ud(e,t){let n=!1,s=null;const o=ol(e,{total:t,onFinished:i=>{md(i,()=>n).then(l=>{if(n){l();return}s?.(),s=l})}}),a=window;return a.__blendarsRace=o.view,{view:o.view,abort(){o.abort()},destroy(){n=!0,o.destroy(),s?.(),s=null,a.__blendarsRace===o.view&&delete a.__blendarsRace}}}async function md(e,t){const n=await dd(),s=sl({uid:n.uid,name:n.name,photo:n.photo,timeMs:e.timeMs});if(console.info("[race] финиш:",ln(e.timeMs),"· чекпоинтов",e.collected,"из",e.total,"· место",s.rank,"из",s.total,"· игрок",n.uid),t())return()=>{};const{showFinishCard:o}=await q(async()=>{const{showFinishCard:a}=await import("./finish-card.B0B6bzbP.js");return{showFinishCard:a}},__vite__mapDeps([3,2]));return t()?()=>{}:o({timeMs:e.timeMs,collected:e.collected,total:e.total,outcome:s,identity:n})}function pd(e){let t=0,n=0;const s=e.autoRender,o=()=>{const l=Wa();t=l>0?1e3/l:0,n=t,e.autoRender=t===0?s:!1},a=l=>{t!==0&&(n+=l*1e3,n>=t&&(n=0,e.renderNextFrame=!0))};o(),e.on("update",a);const i=Va(o);return{destroy(){e.off("update",a),i(),e.autoRender=s}}}let gi=1,lt=null;function fd(){return Ga()*gi}function au(e){gi=e,oo()}function oo(){lt?.graphicsDevice&&(lt.graphicsDevice.maxPixelRatio=fd(),lt.resizeCanvas(),lt.updateCanvasSize())}function hd(e){lt=e,oo();const t=Va(()=>{oo()});return()=>{t(),lt===e&&(lt=null)}}const bd=250,gd="menuRenderFps",xd=`
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
`;function _d(e=null){const t=document.createElement("div");t.className="mini-stats",t.setAttribute("role","status"),t.setAttribute("aria-label","Статистика кадра");const n=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");t.append(n,s,o,a);const i=document.createElement("style");i.id="mini-stats-style",i.textContent=xd,document.head.append(i);const l=N=>{t.classList.toggle("mini-stats--inline",N!==null);const c=N??document.body;t.parentElement!==c&&c.append(t)};l(e);let d=null,f=On(),u=!1;const x=()=>Ee("fps")||Ee("cpu")||Ee("draw")||Ee("vram"),E=()=>{t.classList.toggle("visible",f&&d!==null&&x())},h=(N,c,m)=>{const p=c.fps,_=p>0&&p<30;if(_!==u&&(u=_,n.classList.toggle("warn",_)),m.fps){const C=c.user.get(gd),L=typeof C=="number"&&C>0?` · рендер ${C}`:"";n.textContent=`${p>0?Math.round(p):"—"} FPS${L} · ${c.frameTime.toFixed(1)} ms`}m.cpu&&(s.textContent=`CPU ${c.cpuUpdateTime.toFixed(1)} / ${c.cpuRenderTime.toFixed(1)} / ${c.cpuPhysicsTime.toFixed(1)} мс`),m.draw&&(o.textContent=`Draw ${Xs(c.drawCallCount)} · Прим. ${Xs(c.frame.primitives)} · Шейд. ${Xs(c.frame.shaders)}`),m.vram&&(a.textContent=`VRAM ${Math.round(c.vramTotalBytes/1048576)} МБ · ${N.graphicsDevice.width}×${N.graphicsDevice.height} ${N.graphicsDevice.isWebGPU?"WebGPU":"WebGL2"}`)},g=()=>{const N=d;if(!N||!f)return;const c={fps:Ee("fps"),cpu:Ee("cpu"),draw:Ee("draw"),vram:Ee("vram")};n.hidden=!c.fps,s.hidden=!c.cpu,o.hidden=!c.draw,a.hidden=!c.vram,h(N,N.stats,c)};E();const S=window.setInterval(g,bd),y=ja(()=>{f=On(),E(),g()});return{setHost(N){l(N),g()},setApp(N){d=N,E(),N&&g()},destroy(){window.clearInterval(S),y(),t.remove(),i.remove()}}}function Xs(e){return Number.isFinite(e)?e>=1e6?`${Math.round(e/1e5)}М`:e>=1e4?`${Math.round(e/1e3)}к`:`${Math.round(e)}`:"—"}const yd="hud-density--skinny",vd="hud-density--minimal";function wd(){const e=document.documentElement,t=()=>{const n=uc();e.classList.toggle(yd,n!=="full"),e.classList.toggle(vd,n==="minimal")};return t(),ja(t)}function iu(){return 1}const ya="blendars-scrollbar",Ed=[".dlg__body",".settings__scroll",".settings__tabs",".actions",".mp__list"],Ye=e=>Ed.map(t=>`${t}${e}`).join(`,
`),Sd=`
/* Firefox: тонкая полоса, ползунок gray на дорожке bg1. */
@supports not selector(::-webkit-scrollbar) {
    ${Ye("")} {
        scrollbar-width: thin;
        scrollbar-color: #928374 #28282899;
    }
}

@media (hover: hover) and (pointer: fine) {
    /* Chromium и WebKit. 12px — под штрих 8px плюс прозрачная рамка ползунка. */
    ${Ye("::-webkit-scrollbar")} {
        width: max(0.75rem, 12px);
        height: max(0.75rem, 12px);
    }
    /* Дорожка — тот же тёмный серый, что подложка панелей: полоса читается как
       часть окна, а не как плашка поверх текста. */
    ${Ye("::-webkit-scrollbar-track")} {
        background: #28282899;
        border-radius: 999px;
    }
    /* Стрелочные кнопки в старых WebKit — лишний хром. */
    ${Ye("::-webkit-scrollbar-button")} {
        display: none;
        width: 0;
        height: 0;
    }
    /* Прозрачная рамка в 2px + background-clip: padding-box оставляют круглый
       штрих 8px, а не прямоугольник во всю ширину полосы. */
    ${Ye("::-webkit-scrollbar-thumb")} {
        background: #928374;
        border: 1px solid transparent;
        background-clip: padding-box;
        border-radius: 999px;
    }
    ${Ye("::-webkit-scrollbar-thumb:hover")} { background-color: #ebdbb2; }
    ${Ye("::-webkit-scrollbar-thumb:active")} { background-color: #fe8019; }
    /* Уголок на пересечении двух полос серым квадратом вылезал бы в углу
       колонки вкладок, где полоса одна. */
    ${Ye("::-webkit-scrollbar-corner")} { background: transparent; }
}
`;function kd(){if(document.getElementById(ya))return;const e=document.createElement("style");e.id=ya,e.textContent=Sd,document.head.append(e)}const Ao=document.getElementById("app");if(!Ao)throw new Error("#app not found");kd();let Z=null,ao=null,ct=null,io=null;const dn={boot:.1,device:.35,decoders:.7,background:.95},Ke=new Vi(document.body);let un=null,ro=null,tn=null,mn=null,Un=null,Se=!1,Be=null,Gn=null;const co="blendars.backend";function Wn(e){try{e?localStorage.setItem(co,e):localStorage.removeItem(co)}catch{}}function Cd(){try{const e=localStorage.getItem(co);return e==="webgpu"||e==="webgl2"?e:null}catch{return null}}function Nd(){const e=new URLSearchParams(location.search).get("backend");return e==="webgpu"||e==="webgl2"?e:null}let $t=Nd()??Cd();const V=new xl(Ao,{onScene:e=>{_i(V,e)},onBack:()=>{yi(V)},onRecord:()=>{jd()}});window.__blendarsEnterSmoke=()=>{Od(V)};const Ie=vl(V.settings.backendSlot,{onSwitch:()=>{Bd()}});{const e=document.createElement("style");e.textContent=_l,document.head.append(e)}navigator.gpu||Ie.setUnavailable("WebGPU не поддерживается этим браузером");function Ro(e,t){const n=t==="scene";e.setMode(t),e.setSceneChrome(n),Vn.setHost(e.statsHostFor(n))}const Vn=_d(V.statsHost);wd();Ke.setStage("интерфейс",dn.boot);window.__blendarsMenuReady=!0;ad();Ad();function Ld(e){Gn?.();const t=hd(e),n=pd(e);Gn=()=>{t(),n.destroy()}}async function Ad(){try{Ke.setStage("пресет настроек",dn.boot);const{askBootPreset:e}=await q(async()=>{const{askBootPreset:s}=await import("./boot-preset.DRwNIOyM.js");return{askBootPreset:s}},__vite__mapDeps([4,2]));if(await e(),$t==="webgpu"){const{confirmWebgpuSwitch:s}=await q(async()=>{const{confirmWebgpuSwitch:a}=await import("./confirm-dialog.DpA-HaJF.js");return{confirmWebgpuSwitch:a}},[]);await s()||($t=null,Wn(null),V.setStatus("Запуск на WebGL2 — WebGPU не подтверждён"))}const t=await Ft((s,o)=>{Ke.setStage(s,o??void 0),Ke.updateFromResources(),Rd()});window.__blendarsEngine={backend:t.backend},window.__blendarsApp=t.app,mn=t.backend,Ie.setBackend(t.backend),Vn.setApp(t.app),Ld(t.app),t.backend==="webgpu"&&xi(t),Ke.setStage("сцена меню",dn.background);const{buildMenuBackground:n}=await q(async()=>{const{buildMenuBackground:s}=await import("./menu-background.CXZIcaPO.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));Be=await n(t.app),window.__blendarsBackgroundReady=!0,Td(),Ke.setStage("готово",1),V.setStatus(""),await Ke.hide(),window.__blendarsInteractive=!0,console.info("[blendars] boot complete",t.backend)}catch(e){console.error("[blendars] boot failed",e),Ke.setError("Не удалось запустить рендер. Проверьте поддержку WebGPU/WebGL2 в браузере."),window.__blendarsInteractive=!0}}async function Rd(){const e=new URLSearchParams(location.search).get("bootDelay");if(!e)return;const t=Number(e);!Number.isFinite(t)||t<=0||await new Promise(n=>setTimeout(n,Math.min(t,3e4)))}async function Td(){try{const{probeServiceWorker:e}=await q(async()=>{const{probeServiceWorker:n}=await import("./capabilities.Vl_UvQZj.js");return{probeServiceWorker:n}},[]),t=await e("/blend-ars/sw.js");console.info(t==="registered"?"[blendars] Service Worker зарегистрирован: оффлайн-оболочка доступна":`[blendars] Service Worker: ${t} — оффлайн-старт недоступен`)}catch(e){console.warn("[blendars] регистрация Service Worker не удалась",e)}}function Ft(e){return un??=Md(e),un}async function Md(e){const{initEngine:t}=await q(async()=>{const{initEngine:a}=await import("./engine-bootstrap.DfUiHm_P.js");return{initEngine:a}},__vite__mapDeps([8,2])),n=document.createElement("canvas");n.className="game-canvas",n.style.zIndex="0",document.body.insertBefore(n,Ao),ro=n;const s=$t??"webgl2";return t(n,{physics:!0,deviceTypes:s==="webgl2"?["webgl2","webgpu"]:["webgpu","webgl2"],skipAdapterProbe:s==="webgpu"&&$t!==null,onStage:(a,i)=>{i===1?e?.(a,dn.decoders):e?.(a,dn.device)}})}const Pd=5,Id=1e3,$d=3;function xi(e){let t=0;tn?.();let n=null;const s=l=>{Wn(null),To("webgl2",{persist:!1,restoreScene:!1,reason:l})};let o=e.app.frame,a=0;const i=window.setInterval(()=>{if(document.hidden){o=e.app.frame;return}const l=e.app.frame;l===o?(a++,a>=$d&&(window.clearInterval(i),s("кадры не идут — вероятно, WebGPU завис на первом кадре"))):(a=0,o=l)},Id);tn=()=>{window.clearInterval(i),n?.(),n=null},q(async()=>{const{watchWebGpuErrors:l}=await import("./engine-bootstrap.DfUiHm_P.js");return{watchWebGpuErrors:l}},__vite__mapDeps([8,2])).then(({watchWebGpuErrors:l})=>{if(Se){tn?.();return}n=l(e.device,d=>{t++,console.warn(`[blendars] webgpu error #${t}: ${d.slice(0,200)}`),(Fd(d)||t>=Pd)&&(window.clearInterval(i),s(d))})})}function Fd(e){return/out of memory|not enough memory/i.test(e)}async function To(e,t){if(Se)return;Se=!0,Ie.setBusy(!0),t.reason&&console.warn("[blendars] смена рендера:",t.reason.slice(0,200));const{probeWebGpuAdapter:n}=await q(async()=>{const{probeWebGpuAdapter:a}=await import("./engine-bootstrap.DfUiHm_P.js");return{probeWebGpuAdapter:a}},__vite__mapDeps([8,2])),s=setTimeout(()=>{V.setStatus("Рендер переключается дольше обычного… если не идёт — F9")},25e3);if(e==="webgpu"){const a=await n();if(!a){Ie.setUnavailable("WebGPU не поддерживается этим браузером"),V.setStatus("WebGPU не поддерживается этим браузером"),clearTimeout(s),Ie.setBusy(!1),Se=!1;return}a.stalled?console.warn("[blendars] зонд WebGPU не ответил — пробуем по явному запросу"):a.software&&V.setStatus(`WebGPU: софтверный адаптер (${a.label||"без описания"}) — рендер может упасть`);const{confirmWebgpuSwitch:i}=await q(async()=>{const{confirmWebgpuSwitch:d}=await import("./confirm-dialog.DpA-HaJF.js");return{confirmWebgpuSwitch:d}},[]);if(!await i()){V.setStatus("Остались на WebGL2 — WebGPU не подтверждён"),clearTimeout(s),Ie.setBusy(!1),Se=!1;return}}const o=Ei();o.setStage("смена рендера…");try{tn?.(),tn=null,o.setStage("смена рендера: остановка движка…"),Z?.destroy(),Z=null,window.__blendarsSceneReady=!1,vi(),wi(),No(null),Be?.destroy(),Be=null;const a=await un;un=null,mn=null,Vn.setApp(null),Gn?.(),Gn=null,a?.detachResize(),a?.app.destroy(),ro?.remove(),ro=null,$t=e,t.persist&&Wn(e),o.setStage(`смена рендера: движок ${e.toUpperCase()}…`);const i=await Ft();mn=i.backend,window.__blendarsEngine={backend:i.backend},window.__blendarsApp=i.app,Ie.setBackend(i.backend),Vn.setApp(i.app),i.backend==="webgpu"&&xi(i),i.backend!==e&&V.setStatus(`${e.toUpperCase()} недоступен — рендер: ${i.backend.toUpperCase()}`);const l=t.restoreScene===!1?null:Un;if(l)o.done(),await _i(V,l);else{Un=null,o.setStage("смена рендера: сцена меню…");const{buildMenuBackground:d}=await q(async()=>{const{buildMenuBackground:f}=await import("./menu-background.CXZIcaPO.js");return{buildMenuBackground:f}},__vite__mapDeps([5,2,6,7]));Be=await d(i.app),Ro(V,"menu"),V.setBusy(!1),i.backend===e&&V.setStatus(""),o.done()}}catch(a){if(console.error("[blendars] смена рендера не удалась",a),t.allowRetry!==!1&&e!=="webgl2"){o.done(),$t="webgl2",Wn(null),Se=!1,Ie.setBusy(!1),await To("webgl2",{persist:!1,allowRetry:!1});return}o.fail("не удалось сменить рендер"),V.setStatus("Не удалось сменить рендер — перезагрузите страницу (F9)")}finally{clearTimeout(s),Ie.setBusy(!1),Se=!1}}async function Bd(){Se||mn&&await To(mn==="webgpu"?"webgl2":"webgpu",{persist:!0})}async function Od(e){if(!Se){e.setBusy(!0);try{if(await Ft(),new URLSearchParams(location.search).get("scene")==="smoke"){const{buildSmokeScene:t}=await q(async()=>{const{buildSmokeScene:n}=await import("./smoke-scene.C4r09Tql.js");return{buildSmokeScene:n}},__vite__mapDeps([9,2]));Be?.destroy(),Be=null,t((await Ft()).app)}e.setStatus("Ангар появится на этапе 4"),e.setBusy(!1)}catch(t){console.error("[blendars] enter game failed",t),e.setStatus("Не удалось открыть сцену"),e.setBusy(!1)}}}async function _i(e,t){if(Se)return;e.setBusy(!0),e.setStatus(t==="maserati"?"Загрузка сцены: мазерати…":"Загрузка сцены…");const n=Ei();try{Be?.destroy(),Be=null;const s=await Ft(),{buildVehicleScene:o}=await q(async()=>{const{buildVehicleScene:a}=await import("./vehicle-scene.CO_Ur6m5.js");return{buildVehicleScene:a}},__vite__mapDeps([10,2,8,6]));Z=await o(s.app,a=>n.setStage(a),{body:t,onAssetProgress:(a,i)=>n.setStage(a,i)}),Ro(e,"scene"),e.setBusy(!1),e.setStatus("WASD / стрелки — ехать, пробел — ручник, R — сброс на месте, Q — плечо камеры"),Un=t,window.__blendarsSceneReady=!0,zd(s.app),Hd(s.app),No(()=>Dd()),n.done()}catch(s){console.error("[blendars] vehicle scene failed",s),e.setStatus("Не удалось загрузить сцену"),n.fail(String(s?.message??s)),e.setBusy(!1)}}async function yi(e){Z?.destroy(),Z=null,Un=null,window.__blendarsSceneReady=!1,No(null);const t=await Ft(),{buildMenuBackground:n}=await q(async()=>{const{buildMenuBackground:s}=await import("./menu-background.CXZIcaPO.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));Be=await n(t.app),Ro(e,"menu"),e.setBusy(!1),e.setStatus(""),vi(),wi()}function Dd(){const e=Z?.root.findByName("camera"),t=e?.script?.get(Cl);if(!e||!t)return null;const n=(o,a)=>typeof o=="number"&&Number.isFinite(o)?o:a,s=(o,a,i)=>o<a?a:o>i?i:o;return{read:()=>({yaw:n(t._manualYaw,0),lift:n(t._manualLift,0),zoom:n(t._zoom,1),shoulder:n(t.shoulder,1),distance:n(t.distance,6.4),height:n(t.height,2.5),fov:e.camera?n(e.camera.fov,60):60}),write:o=>{o.yaw!==void 0&&(t._manualYaw=s(o.yaw,-180,180)),o.lift!==void 0&&(t._manualLift=s(o.lift,-.6,3.4)),o.zoom!==void 0&&(t._zoom=s(o.zoom,.55,1.7)),o.shoulder!==void 0&&(t.shoulder=o.shoulder),o.distance!==void 0&&(t.distance=s(o.distance,3,15)),o.height!==void 0&&(t.height=s(o.height,1,6)),o.fov!==void 0&&e.camera&&(e.camera.fov=s(o.fov,40,90))},reset:()=>{t.resetLook()}}}async function jd(){const e=(t,n)=>{V.setRecordState(t,n)};try{if(!ct){const{GameRecorder:t}=await q(async()=>{const{GameRecorder:o}=await import("./video-recorder.T8uFKfef.js");return{GameRecorder:o}},__vite__mapDeps([11,2,1])),n=un;if(n===null){e("error","движок не поднят, запись невозможна");return}const s=(await n.catch(()=>null))?.app??null;if(s===null){e("error","сначала войди в сцену");return}ct=new t(s,{onState:(o,a)=>e(o,a),onProgress:o=>V.setRecordProgress(o)},{frameRate:Ya(),width:lc(s.graphicsDevice.canvas.width||window.innerWidth),quality:Ka(),keyFrameInterval:Ja(),sound:no(),attachAudio:o=>Z?.audio?.attachRecordStream(o)??(()=>{})})}if(ct.recording){const t=await ct.stop();t>0&&e("idle",`файл ${(t/1048576).toFixed(1)} МБ сохранён`)}else await ct.start()}catch(t){e("error",t instanceof Error?t.message:"запись недоступна")}}function zd(e){const t=()=>Z?.root.findByName("vehicle")?.script?.get(ii)??null,n=Z?Yl(e,Z.root,so):null,s=Z?ud(e,so):null,o=Z?.root.findByName("vehicle"),a=o?Ml(e,o):null,i=()=>a?.view??null,l=()=>n?.list()??[],d=()=>s?.view??null,f=()=>{const w=Z?.root.findByName("camera")?.forward;return w?Math.atan2(w.x,-w.z):null},u=()=>{const L=Z?.root.findByName("vehicle")?.getPosition();return L?{x:L.x,z:L.z}:null},x=document.createElement("div");x.style.cssText="position:fixed;left:0;top:0;width:0;height:0;padding-top:env(safe-area-inset-top);visibility:hidden;pointer-events:none",document.body.append(x);let E=0;const h=()=>{const L=Number.parseFloat(getComputedStyle(x).paddingTop);E=Number.isFinite(L)?L:0};h(),window.addEventListener("resize",h),window.addEventListener("orientationchange",h);let g=null,S=null,y=null,N=null,c=!0,m=null;const p=()=>{xe("toggle")},_=()=>{s?.abort(),q(async()=>{const{showGameOverCard:L}=await import("./game-over-card.YEuZ7Qib.js");return{showGameOverCard:L}},__vite__mapDeps([12,2])).then(({showGameOverCard:L})=>{c&&(m?.(),m=L({max:a?.view.max??zn,onReturn:()=>{m=null,yi(V)}}))})};e.on("lives:hit",p),e.on("lives:depleted",_);const C=sd({getHeading:f,getVehicle:u,getCheckpoints:l,readRace:d,read:t,readLives:i,clusterHost:V.clusterHost,safeTop:()=>E});g=td(e,C.layers),g.active?document.documentElement.classList.add("hud-in-canvas"):(g=null,C.destroy(),S=kl(t,V.clusterHost),y=ed(f,u,l,d),N=Wl(i)),ao=()=>{c=!1,e.off("lives:hit",p),e.off("lives:depleted",_),m?.(),m=null,a?.destroy(),N?.destroy(),N=null,ct?.destroy(),ct=null,document.documentElement.classList.remove("hud-in-canvas"),g?.destroy(),g=null,S?.destroy(),y?.destroy(),n?.destroy(),s?.destroy(),window.removeEventListener("resize",h),window.removeEventListener("orientationchange",h),x.remove()}}function vi(){ao?.(),ao=null}function Hd(e){Z&&q(async()=>{const{attachTouchControls:t}=await import("./touch-controls.BCOggJNV.js");return{attachTouchControls:t}},__vite__mapDeps([13,2])).then(({attachTouchControls:t})=>{Z&&(io=t(e,Z.root).destroy)})}function wi(){io?.(),io=null}function Ei(){const e=document.createElement("div");e.className="loading",wa(e);const t=document.createElement("div");t.className="loading__title",t.textContent="СЦЕНА";const n=document.createElement("div");n.className="loading__bar loading__bar--unknown";const s=document.createElement("div");s.className="loading__fill",n.append(s);const o=document.createElement("div");return o.className="loading__stage",o.style.opacity="0.8",o.style.fontSize="13px",o.style.textTransform="uppercase",e.append(t,n,o),document.body.append(e),{setStage(a,i){if(o.textContent=a,i===void 0||!Number.isFinite(i)){n.classList.add("loading__bar--unknown");return}n.classList.remove("loading__bar--unknown"),s.style.width=`${Math.round(Math.min(1,Math.max(0,i))*100)}%`},done(){e.remove()},fail(a){n.hidden=!0,o.textContent=`ошибка: ${a}`,setTimeout(()=>e.remove(),4e3)}}}window.addEventListener("keydown",e=>{e.key==="F9"&&location.reload()});export{mc as A,hc as B,iu as C,Cl as D,gc as E,_c as F,vc as G,ln as H,nu as I,pn as J,eu as K,Gr as L,Zd as M,ou as V,Bn as a,Et as b,au as c,Je as d,qd as e,Xd as f,Kr as g,Kd as h,Qd as i,Va as j,Yd as k,qs as l,ii as m,Vd as n,Jd as o,Hs as p,tu as q,Sn as r,Qs as s,kc as t,it as u,xe as v,ja as w,Gd as x,Wd as y,su as z};
