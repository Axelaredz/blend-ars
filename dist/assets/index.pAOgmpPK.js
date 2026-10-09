const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/music-player.rfOHvQdP.js","assets/music-audio.DNu4TXPq.js","assets/playcanvas.BiKF8DQR.js","assets/finish-card.Ogohiw_d.js","assets/boot-preset.DAptRJHS.js","assets/menu-background.GAxVkhYs.js","assets/engine-sound.B-Ca0CEO.js","assets/look-gestures.BhGm2xnc.js","assets/engine-bootstrap.uj0NgSQT.js","assets/smoke-scene.C4r09Tql.js","assets/vehicle-scene.C1D122Ew.js","assets/video-recorder.T8uFKfef.js","assets/touch-controls.j7S05nRc.js"])))=>i.map(i=>d[i]);
import{_ as Z,E as xt,T as Is,C as gi,M as En,a as Uo,b as fa,S as xi,B as _i,V as Go,c as yi,d as vi,e as wi,f as Ei,g as Si,A as Ho,F as Vo,P as ki}from"./playcanvas.BiKF8DQR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Wo="blendars-loading",Ci=`
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
`;function Ni(){if(document.getElementById(Wo))return;const e=document.createElement("style");e.id=Wo,e.textContent=Ci,document.head.append(e)}const Li="/blend-ars/assets/loader.CPCrwQQc.webp",Ai="#282828",Yo="blendars-splash",Ri=`
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
    background-color: ${Ai};
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
`;function ha(e){if(!document.getElementById(Yo)){const s=document.createElement("style");s.id=Yo,s.textContent=Ri,document.head.append(s)}if(e.querySelector(":scope > .splash-logo")){e.classList.add("splash-host");return}const t=document.createElement("div");t.className="splash-logo";const n=document.createElement("img");n.src=Li,n.alt="Blendars",t.append(n),e.prepend(t),e.classList.add("splash-host")}class Ti{root;fill;bar;stageEl;bytesEl;errorEl;lastPercent=-1;lastBytesText="";lastStage="";constructor(t,n={}){if(this.root=document.createElement("div"),this.root.className="loading",Ni(),ha(this.root),this.root.setAttribute("role","progressbar"),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","100"),this.root.setAttribute("aria-valuenow","0"),this.root.setAttribute("aria-label","Загрузка"),n.title!==void 0){const o=document.createElement("h1");o.className="loading__title",o.textContent=n.title,this.root.append(o)}this.bar=document.createElement("div"),this.bar.className="loading__bar loading__bar--unknown",this.fill=document.createElement("div"),this.fill.className="loading__fill",this.bar.append(this.fill),this.bar.removeAttribute("aria-valuenow");const s=document.createElement("div");s.className="loading__row",this.stageEl=document.createElement("span"),this.stageEl.className="loading__stage",this.stageEl.textContent="старт",this.bytesEl=document.createElement("span"),this.bytesEl.className="loading__bytes",this.bytesEl.textContent="",s.append(this.stageEl,this.bytesEl),this.errorEl=document.createElement("div"),this.errorEl.className="loading__error",this.errorEl.hidden=!0,this.root.append(this.bar,s,this.errorEl),t.append(this.root)}setStage(t,n){t!==this.lastStage&&(this.stageEl.textContent=t,this.lastStage=t);const s=n!==void 0&&Number.isFinite(n);if(this.bar.classList.toggle("loading__bar--unknown",!s),s){const o=Math.round(Math.min(1,Math.max(0,n))*100);o!==this.lastPercent&&(this.fill.style.width=`${o}%`,this.root.setAttribute("aria-valuenow",String(o)),this.lastPercent=o)}}setError(t){this.bar.hidden=!0,this.stageEl.textContent="ошибка",this.errorEl.textContent=t,this.errorEl.hidden=!1}updateFromResources(){if(typeof performance.getEntriesByType!="function")return;const t=performance.getEntriesByType("resource");let n=0,s=0;for(const a of t)a.name.indexOf(location.origin)===0&&(n+=a.encodedBodySize||a.transferSize||0,s=Math.max(s,a.responseEnd||0));if(n<=0)return;const o=`${Pi(n)} загружено`;o!==this.lastBytesText&&(this.bytesEl.textContent=o,this.lastBytesText=o)}hide(){return this.root.setAttribute("aria-hidden","true"),this.root.classList.add("hidden"),new Promise(t=>{let n=!1;const s=()=>{n||(n=!0,this.root.remove(),t())};this.root.addEventListener("transitionend",s,{once:!0}),setTimeout(s,400)})}}function Pi(e){return e<1024?`${e} Б`:e<1024*1024?`${(e/1024).toFixed(0)} КБ`:`${(e/(1024*1024)).toFixed(1)} МБ`}const ba="/blend-ars/assets/LilitaOne-Regular.C8J_njg9.ttf",Mi=new URL("/blend-ars/assets/fullscreen.C4xFj3BF.svg",import.meta.url).href,Ii=new URL("/blend-ars/assets/fullscreen-exit.D85sBYy_.svg",import.meta.url).href,$i=new URL("/blend-ars/assets/info.BdEiL0Sf.svg",import.meta.url).href,Fi=new URL("/blend-ars/assets/book-open.CLVm05VY.svg",import.meta.url).href,Bi=new URL("/blend-ars/assets/trophy.DpYLSMCP.svg",import.meta.url).href,Jo=new URL("/blend-ars/assets/gear_six.TA3VDyxO.svg",import.meta.url).href,Oi=new URL("/blend-ars/assets/camera-rotate.D-uiZS3m.svg",import.meta.url).href,Di=new URL("/blend-ars/assets/music-note.BpgtDFsX.svg",import.meta.url).href,ji=new URL("/blend-ars/assets/package.BDtnf6Kx.svg",import.meta.url).href,zi=new URL("/blend-ars/assets/flag.CeS1AlXY.svg",import.meta.url).href,Ui=new URL("/blend-ars/assets/garage.D_BJEZuB.svg",import.meta.url).href,Gi=new URL("/blend-ars/assets/storefront.e4K1ebmi.svg",import.meta.url).href,Hi=new URL("/blend-ars/assets/truck.rvSKQmy5.svg",import.meta.url).href,Vi=new URL("/blend-ars/assets/coupe.DdXCwqWg.svg",import.meta.url).href,Wi=new URL("/blend-ars/assets/x.D2ii0gML.svg",import.meta.url).href,Yi=new URL("/blend-ars/assets/list.DXUiLcf_.svg",import.meta.url).href,Ji=new URL("/blend-ars/assets/triangle-left.DPdzCyZ0.svg",import.meta.url).href,md=new URL("/blend-ars/assets/stop-square.Cvj1GcXd.svg",import.meta.url).href,pd=new URL("/blend-ars/assets/arrows_clockwise.Toz6NZFk.svg",import.meta.url).href,ga="/blend-ars/assets/ui-click.DcT3uYBZ.wav",Ki={click:1,toggle:1.22,window:.86},Xi=.5;let xa=()=>.5,$e=null,Fn=null,bt=null,Ko=!1;function qi(e){xa=e}function Qi(){if(Ko)return;Ko=!0;const e=window.AudioContext??window.webkitAudioContext;if(e!==void 0){try{$e=new e}catch{$e=null;return}fetch(ga).then(t=>t.arrayBuffer()).then(t=>$e?.decodeAudioData(t)).then(t=>{Fn=t??null}).catch(()=>{Fn=null})}}function Ee(e="click"){const t=Xi*xa();if(t>0){if(Fn!==null&&$e!==null){$e.state==="suspended"&&$e.resume().catch(()=>{});const n=$e.createBufferSource();n.buffer=Fn,n.playbackRate.value=Ki[e];const s=$e.createGain();s.gain.value=t,n.connect(s).connect($e.destination),n.start();return}bt===null&&(bt=new Audio(ga),bt.preload="auto"),bt.volume=t,bt.currentTime=0,bt.play().catch(()=>{})}}function Xe(e){const t=n=>{if(!n.isPrimary||n.pointerType==="mouse"&&n.button!==0)return;const s=n.target;if(!(s instanceof Element)||s.closest('[disabled], [aria-disabled="true"]')||s.closest('input[type="range"]'))return;if(s.closest('input[type="checkbox"], .modes__card, [role="switch"]')){Ee("toggle");return}s.closest('button, .mitem, [role="button"], .dlg__close')&&Ee("click")};return e.addEventListener("pointerdown",t,!0),()=>e.removeEventListener("pointerdown",t,!0)}function Zt(e){const t=n=>{const s=n.target;s instanceof HTMLInputElement&&s.type==="range"&&Ee("click")};return e.addEventListener("change",t,!0),()=>e.removeEventListener("change",t,!0)}const Zi=`
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
`;function pn(e){const t=document.createElement("div");if(t.className="dlg",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",e.title),!document.getElementById("dlg-style")){const r=document.createElement("style");r.id="dlg-style",r.textContent=Zi,document.head.append(r)}const n=document.createElement("div");n.className="dlg__panel";const s=document.createElement("h2");s.className="dlg__title",s.textContent=e.title;const o=document.createElement("div");return o.className="dlg__body",o.append(e.body),n.append(s,o),t.append(n),document.body.append(t),{root:t,open(){t.hidden=!1},close(){t.hidden=!0},destroy(){t.remove()}}}const er=[{body:"truck",title:"Джип",note:"Грузовик. Родное шасси, грузовая физика.",icon:Hi},{body:"maserati",title:"Мазерати",note:"GT3-обвес на том же шасси.",icon:Vi}],tr=`
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
`;function nr(e){if(!document.getElementById("game-modes-style")){const o=document.createElement("style");o.id="game-modes-style",o.textContent=tr,document.head.append(o)}const t=document.createElement("div");t.className="modes";const n=er.map(o=>{const a=document.createElement("button");a.className="modes__card",a.type="button",a.dataset.body=o.body;const r=document.createElement("span");r.className="modes__art",r.style.setProperty("--modes-icon",`url(${JSON.stringify(o.icon)})`);const l=document.createElement("span");l.className="modes__title",l.textContent=o.title;const d=document.createElement("p");return d.className="modes__note",d.textContent=o.note,a.append(r,l,d),a.addEventListener("pointerdown",p=>{p.preventDefault(),!a.disabled&&e(o.body)}),t.append(a),a}),s=pn({title:"Режимы игры",body:t});return{dialog:s,open(){s.open()},setBusy(o){for(const a of n)a.disabled=o},destroy(){s.destroy()}}}const sr={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:8,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:6,fill:1.05,rimLeft:6.15,rimRight:6.3,spot:7.05,fog:.005,gamma:1,gammaStrength:.5,toneMapping:2,sunElevation:15,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:.3}},shadows:{val:{cascades:4,distribution:.95,blend:.12,distance:320,resolution:4096,bias:0,normalBias:.05}},postfx:{on:!0,val:{bloom:.1,bloomBlur:16,bloomThreshold:.2,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:.95,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:1,fps:0,msaa:!0}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},or={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:4,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:5,fill:.3,rimLeft:.5,rimRight:.5,spot:2,fog:.0035,gamma:0,gammaStrength:1.2,toneMapping:2,sunElevation:9,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:1}},shadows:{val:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3}},postfx:{on:!1,val:{bloom:0,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.48,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:.5,fps:30,msaa:!1}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},ar=[{key:"armored-truck-5t-300hp",name:"Бронированный грузовик — 5 т, 300 л.с.",note:"Тяжёлая машина: огромная инерция поворота, крен не валит, ручник срабатывает как тормоз. Дизель: пик момента на 1700 об/мин, отсечка 3400.",val:{mass:5e3,engineTorque:1260,peakTorqueRpm:1700,maxRpm:3400,finalDrive:7.5,brakeForce:11e3,engineBraking:.22,dragForce:4,rollingResistance:.03,lateralGripAssist:2.4,wheelGrip:5,rollInfluence:.12,antiRoll:1.2,inertiaScale:2.8,inertiaRoll:1.9,inertiaPitch:1.6,suspStiffness:26,suspDamping:2.6,suspCompression:5.2,suspTravel:.45,suspForce:7e4,highSpeedLock:.5,highSpeedLockAt:90}},{key:"muscle-car-4t-500hp",name:"Muscle car — 4 т, 500 л.с.",note:"Кузов на мягких пружинах: нос гуляет, на скорости ложится на борт и переворачивается. Атмосферник: пик 4200 об/мин, отсечка 5600.",val:{mass:4e3,engineTorque:850,peakTorqueRpm:4200,maxRpm:5600,finalDrive:6.5,brakeForce:15e3,engineBraking:.1,dragForce:2,rollingResistance:.015,lateralGripAssist:.6,wheelGrip:4.2,rollInfluence:.8,antiRoll:.25,inertiaScale:1.8,inertiaRoll:.6,inertiaPitch:.9,suspStiffness:22,suspDamping:2.4,suspCompression:4.6,suspTravel:.34,suspForce:62e3,highSpeedLock:.6,highSpeedLockAt:130}}],_a="blendars.presets.v1",ya="blendars-settings",va=1;let ue={active:null,list:[]},Xo=!1;function ze(){if(Xo)return ue;Xo=!0;try{const e=localStorage.getItem(_a);if(!e)return ue;const t=JSON.parse(e);if(!t||typeof t!="object")return ue;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=ir(o);a&&s.push(a)}ue={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ue}function ir(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Bt(){try{localStorage.setItem(_a,JSON.stringify(ue))}catch{}}function Ys(){return ze().list.slice().sort((t,n)=>n.created-t.created)}function Bn(){return ze().active}function rr(){const e=ze();return e.active?e.list.find(t=>t.id===e.active)??null:null}function Js(e){ze(),ue.active=e,Bt()}function _t(e,t,n=Date.now()){ze();const s={id:fr(n),name:e.trim()||Ke(new Date(n)),created:n,data:t};return ue.list.push(s),ue.active=s.id,Bt(),s}function cr(e,t){const s=ze().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,Bt(),!0):!1}function wa(e,t){const s=ze().list.find(o=>o.id===e);return s?(s.data=t,Bt(),!0):!1}function lr(e){ze();const t=ue.list.findIndex(n=>n.id===e);t<0||(ue.list.splice(t,1),ue.active===e&&(ue.active=null),Bt())}function Ke(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function dr(){ze(),ue={active:null,list:[]},Bt()}function ur(e){const t={app:ya,version:va,name:e.name,created:e.created,data:e.data},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`${pr(e.name)}.json`,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function mr(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==ya||n.version!==va||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function pr(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function fr(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Ea="blendars.physics-presets.v1",ao="blendars-physics",io=1;let se={active:null,list:[]},qo=!1;function Ue(){if(qo)return se;qo=!0;try{const e=localStorage.getItem(Ea);if(!e)return se;const t=JSON.parse(e);if(!t||typeof t!="object")return se;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=hr(o);a&&s.push(a)}se={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return se}function hr(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function dt(){try{localStorage.setItem(Ea,JSON.stringify(se))}catch{}}function Qo(){return Ue().list.slice().sort((e,t)=>t.created-e.created)}function Zo(){return Ue().active}function ea(e){Ue(),se.active=e,dt()}function br(e,t,n=Date.now()){Ue();const s={id:Ca(n),name:e.trim()||yt(new Date(n)),created:n,data:t};return se.list.push(s),se.active=s.id,dt(),s}function gr(e,t){const s=Ue().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,dt(),!0):!1}function xr(e,t){const s=Ue().list.find(o=>o.id===e);return s?(s.data=t,dt(),!0):!1}function _r(e){Ue();const t=se.list.findIndex(n=>n.id===e);t<0||(se.list.splice(t,1),se.active===e&&(se.active=null),dt())}function yr(){Ue(),se={active:null,list:[]},dt()}function vr(e){Ue();let t=0;for(const n of e){const s=n.created??Date.now()+t,o=n.name?.trim()||yt(new Date(s));se.list.some(r=>r.name===o&&r.created===s)||(se.list.push({id:Ca(s),name:o,created:s,data:n.data}),t++)}return t>0&&dt(),t}function yt(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function wr(e){ka(`${kr(e.name)}.json`,{app:ao,version:io,...Sa(e)})}function Er(e){ka("physics-presets.json",{app:ao,version:io,presets:e.map(Sa)})}function Sr(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==ao||n.version!==io)return null;if(Array.isArray(n.presets)){const o=[];for(const a of n.presets){if(!a||typeof a!="object")continue;const r=ta(a);r&&o.push(r)}return o.length>0?{items:o}:null}const s=ta(n);return s?{items:[s]}:null}function Sa(e){return{name:e.name,created:e.created,data:e.data}}function ta(e){if(!e.data||typeof e.data!="object")return null;const t={data:e.data};return typeof e.name=="string"&&(t.name=e.name),typeof e.created=="number"&&Number.isFinite(e.created)&&(t.created=e.created),t}function ka(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=e,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function kr(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"physics-preset"}function Ca(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const ro="blendars.sound-effects.v3",co="blendars.sound-effects.v2",Na=[["engine","Двигатель"],["road","Шум качения"],["skid","Скрежет шин"],["shift","Переключение передач"],["impact","Удары кузова"],["landing","Посадка на колёса"],["music","Фоновая музыка"],["uiClick","Клики меню"]],La=Na.map(([e])=>e),Aa={engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},Cr={engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1},ke={...Aa},xe={...Cr},Ne={engineTorque:{label:"Момент двигателя (Н·м)",def:520,off:520,min:200,max:1600,decimals:0},peakTorqueRpm:{label:"Обороты пика момента",def:1700,off:1700,min:800,max:6e3,decimals:0},maxRpm:{label:"Отсечка двигателя",def:4200,off:4200,min:2e3,max:8e3,decimals:0},finalDrive:{label:"Главная пара",def:7,off:7,min:3,max:12,decimals:2},brakeForce:{label:"Сила тормозов (Н)",def:6500,off:6500,min:2e3,max:2e4,decimals:0},mass:{label:"Масса кузова (кг)",def:2200,off:2200,min:1200,max:8e3,decimals:0},engineBraking:{label:"Торможение двигателем",def:.15,off:.07,min:0,max:.4,decimals:2},dragForce:{label:"Сопротивление воздуха",def:1.75,off:0,min:0,max:4,decimals:2},rollingResistance:{label:"Сопротивление качения",def:.02,off:0,min:0,max:.06,decimals:3},lateralGripAssist:{label:"Помощь бокового сцепа",def:1.5,off:0,min:0,max:8,decimals:1},wheelGrip:{label:"Сцепление колёс",def:4,off:2.7,min:1,max:10,decimals:1},rollInfluence:{label:"Крен (перенос нагрузки)",def:.3,off:.08,min:0,max:1.2,decimals:2},suspStiffness:{label:"Жёсткость пружины",def:20,off:20,min:5,max:80,decimals:1},suspDamping:{label:"Демпфер (распускание)",def:2.3,off:2.3,min:.5,max:8,decimals:2},suspCompression:{label:"Демпфер (сжатие)",def:4.4,off:4.4,min:.5,max:12,decimals:2},suspTravel:{label:"Ход подвески",def:.35,off:.35,min:.1,max:.8,decimals:2},suspForce:{label:"Предел силы пружины (Н)",def:2e4,off:2e4,min:5e3,max:15e4,decimals:0},suspRelVel:{label:"Демпфер и скорость кузова",def:1,off:1,min:0,max:2,decimals:2},antiRoll:{label:"Стабилизатор (рычаг)",def:0,off:0,min:0,max:2.5,decimals:2},inertiaScale:{label:"Инерция поворота (yaw)",def:1.7,off:1,min:.3,max:3.5,decimals:2},inertiaRoll:{label:"Инерция крена (переворот)",def:1.2,off:1,min:.3,max:2.5,decimals:2},inertiaPitch:{label:"Инерция тангажа (клевок)",def:1.2,off:1,min:.3,max:2.5,decimals:2},highSpeedLock:{label:"Спад угла руля (доля)",def:.55,off:.4,min:.2,max:1,decimals:2},highSpeedLockAt:{label:"Скорость спада руля",def:100,off:80,min:50,max:200,decimals:0,unit:"kmh"},camTurnRate:{label:"Камера: скорость поворота",def:3.5,off:2.2,min:1,max:6,decimals:1},camFollowRate:{label:"Камера: сглаживание",def:11,off:9,min:4,max:20,decimals:0},skidThreshold:{label:"Порог звука юза",def:.15,off:.3,min:0,max:.5,decimals:2}},Ce=Object.keys(Ne),lo="blendars.physics.v1",ae={},me={};Nr();function Nr(){for(const e of Ce)ae[e]=!0,me[e]=Ne[e].def}function Lr(){try{const e=localStorage.getItem(lo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:null,o=typeof n.val=="object"&&n.val!==null?n.val:null;for(const a of Ce){const r=Ne[a],l=s?.[a];typeof l=="boolean"&&(ae[a]=l);const d=o?.[a];typeof d=="number"&&Number.isFinite(d)&&(me[a]=Math.min(r.max,Math.max(r.min,d)))}}catch{}}function vt(){try{localStorage.setItem(lo,JSON.stringify({on:ae,val:me}))}catch{}}function fd(e){return ae[e]?me[e]:Ne[e].off}const Ln=[];function hd(e){return Ln.push(e),()=>{const t=Ln.indexOf(e);t>=0&&Ln.splice(t,1)}}const An=[];function ee(){for(const e of An)e()}function Ar(e){return An.push(e),()=>{const t=An.indexOf(e);t>=0&&An.splice(t,1)}}function wt(){for(const e of Ln)e();ee()}function $s(e){const t=Ne[e],n=me[e];return t.unit==="kmh"?`${Math.round(n)} км/ч`:n.toFixed(t.decimals)}const Ra=[0,1,2,3,4],Rr=["линейный","филмик","ACES","нейтральный","без тонмаппинга"],Oe={exposure:{label:"Экспозиция кадра",def:.5,min:.5,max:10,decimals:1},key:{label:"Яркость солнца",def:1,min:0,max:10,decimals:2},fill:{label:"Заполняющий свет",def:.3,min:0,max:15,decimals:2},rimLeft:{label:"Контровой слева",def:.5,min:0,max:15,decimals:2},rimRight:{label:"Контровой справа",def:.5,min:0,max:15,decimals:2},spot:{label:"Верхний софтбокс",def:2,min:0,max:15,decimals:2},fog:{label:"Туман задника",def:.0035,min:0,max:.05,decimals:4},gamma:{label:"Гамма-коррекция (sRGB)",def:1,min:0,max:1,decimals:0,options:[0,1]},gammaStrength:{label:"Сила гаммы",def:1.2,min:.5,max:3,decimals:2},toneMapping:{label:"Тонмаппинг",def:3,min:0,max:4,decimals:0,options:Ra},sunElevation:{label:"Высота солнца",def:34,min:-10,max:90,decimals:0},sunAzimuth:{label:"Азимут солнца",def:135,min:0,max:360,decimals:0},turbidity:{label:"Мутность неба",def:3,min:1,max:10,decimals:2},rayleigh:{label:"Рэлеевское рассеяние",def:2.2,min:0,max:5,decimals:2},mieCoefficient:{label:"Ми-рассеяние",def:.005,min:0,max:.05,decimals:3},mieDirectionalG:{label:"Анизотропия Ми",def:.8,min:0,max:.99,decimals:2},skyLuminance:{label:"Яркость неба",def:1,min:0,max:5,decimals:2}},St=Object.keys(Oe),uo="blendars.lighting.v1",fe={};Tr();Pr();function Tr(){for(const e of St)fe[e]=Oe[e].def}function Pr(){try{const e=localStorage.getItem(uo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of St){const a=Oe[o],r=s?.[o];typeof r=="number"&&Number.isFinite(r)&&(fe[o]=Math.min(a.max,Math.max(a.min,r)))}}catch{}}function Rn(){try{localStorage.setItem(uo,JSON.stringify({val:fe}))}catch{}}function Mr(e){return fe[e]}function bd(){return 2**(Mr("gammaStrength")-1)}const Tn=[];function gd(e){return Tn.push(e),()=>{const t=Tn.indexOf(e);t>=0&&Tn.splice(t,1)}}function Pn(){for(const e of Tn)e();ee()}function na(e){const t=Oe[e];if(t.options){const n=t.options.indexOf(fe[e]);return n>=0?n:0}return Math.round((fe[e]-t.min)/(t.max-t.min)*100)}function Ir(e,t){const n=Oe[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function Fs(e){const t=Oe[e],n=fe[e];return t.options&&t.options.length===2&&t.options[1]===1?n>=1?"вкл":"выкл":e==="toneMapping"?Rr[Ra.indexOf(n)]??n.toFixed(t.decimals):n.toFixed(t.decimals)}const $r=[512,1024,2048,4096],Le={cascades:{label:"Каскадов",def:2,min:1,max:4,decimals:0,options:[1,2,3,4]},distribution:{label:"Раскладка каскадов",def:.7,min:0,max:1,decimals:2},blend:{label:"Бесшовность каскадов",def:.12,min:0,max:.3,decimals:2},distance:{label:"Дальность теней",def:320,min:50,max:500,decimals:0},resolution:{label:"Разрешение атласа",def:4096,min:0,max:3,decimals:0,options:$r},bias:{label:"Смещение тени",def:0,min:0,max:1,decimals:2},normalBias:{label:"Смещение по нормали",def:0,min:0,max:.5,decimals:2}},Qe=Object.keys(Le),mo="blendars.shadows.v1",Q={};Fr();Br();function Fr(){for(const e of Qe)Q[e]=Le[e].def}function Br(){try{const e=localStorage.getItem(mo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of Qe){const a=Le[o],r=s?.[o];if(!(typeof r!="number"||!Number.isFinite(r))){if(a.options){const d=a.options[r]===r?r:a.options.indexOf(r);d>=0&&d<a.options.length&&(Q[o]=Number(a.options[d]));continue}Q[o]=Math.min(a.max,Math.max(a.min,r))}}}catch{}}function kt(){try{localStorage.setItem(mo,JSON.stringify({val:Q}))}catch{}}function xd(e){return Q[e]}const Mn=[];function _d(e){return Mn.push(e),()=>{const t=Mn.indexOf(e);t>=0&&Mn.splice(t,1)}}function en(){for(const e of Mn)e();ee()}function Bs(e,t){const n=Le[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function Or(e,t){const n=Le[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function Os(e){const t=Le[e];return e==="distance"?`${Math.round(Q[e])} м`:Q[e].toFixed(t.decimals)}const De={bloom:{label:"Ореол (bloom)",def:.05,min:0,max:.1,decimals:3},bloomBlur:{label:"Мягкость ореола",def:8,min:1,max:16,decimals:0,options:[1,2,4,8,16]},bloomThreshold:{label:"Порог ореола",def:.6,min:0,max:2,decimals:2},vignette:{label:"Виньетка",def:0,min:0,max:1,decimals:2},vignetteInner:{label:"Виньетка: начало",def:0,min:0,max:1,decimals:2},vignetteOuter:{label:"Виньетка: край",def:1.25,min:.5,max:2,decimals:2},vignetteCurvature:{label:"Виньетка: кромка",def:.5,min:.2,max:1,decimals:2},taa:{label:"Временное сглаживание",def:0,min:0,max:1,decimals:0,options:[0,1]},taaJitter:{label:"Сглаживание: джиттер",def:0,min:0,max:1,decimals:2},dof:{label:"Глубина резкости",def:1,min:0,max:1,decimals:0,options:[0,1]},dofFocus:{label:"Фокус (м)",def:1,min:1,max:60,decimals:1},dofRange:{label:"Зона фокуса (м)",def:40,min:1,max:40,decimals:1},dofRadius:{label:"Сила размытия",def:1,min:1,max:8,decimals:1},dofNear:{label:"Размывать передний план",def:1,min:0,max:1,decimals:0,options:[0,1]},grading:{label:"Цветокоррекция",def:1,min:0,max:1,decimals:0,options:[0,1]},brightness:{label:"Яркость",def:1,min:.5,max:1.5,decimals:2},contrast:{label:"Контраст",def:1,min:.5,max:1.5,decimals:2},saturation:{label:"Насыщенность",def:1,min:0,max:2,decimals:2},fringing:{label:"Аберрация",def:0,min:0,max:100,decimals:0},sharpness:{label:"Резкость",def:0,min:0,max:1,decimals:2}},Ze=Object.keys(De),po="blendars.postfx.v1",fo="blendars.postfx.on",J={},Ta=!0;let je=Ta;Dr();jr();function Dr(){for(const e of Ze)J[e]=De[e].def;je=Ta}function jr(){try{const e=localStorage.getItem(po);if(e){const n=JSON.parse(e);if(n&&typeof n=="object"){const s=n,o=typeof s.val=="object"&&s.val!==null?s.val:null;for(const a of Ze){const r=De[a],l=o?.[a];typeof l=="number"&&Number.isFinite(l)&&(J[a]=Math.min(r.max,Math.max(r.min,l)))}}}const t=localStorage.getItem(fo);t!==null&&(je=t!=="0")}catch{}}function Fe(){try{localStorage.setItem(po,JSON.stringify({val:J})),localStorage.setItem(fo,je?"1":"0")}catch{}}function Ds(e){return J[e]}function Sn(){return je}function js(e){je!==e&&(je=e,Fe(),qe())}const ho="blendars.hud.v1";let Nt=!0,et=1280;const _e=[],Ks=["fps","cpu","draw","vram"],zr={fps:"Частота кадра (FPS и мс)",cpu:"Загрузка CPU (обновление / рендер / физика)",draw:"Вызовы отрисовки и шейдеры",vram:"Видеопамять и разрешение"};let Lt={fps:!0,cpu:!0,draw:!0,vram:!0};function Ur(){try{const e=localStorage.getItem(ho);if(!e)return;const t=JSON.parse(e);if(t&&typeof t=="object"){const n=t.on;if(n&&typeof n=="object"){const s=n.stats;typeof s=="number"&&(Nt=s!==0);const o=n.record;(o===1280||o===1920||o==="window")&&(et=o);const a=n.touch;typeof a=="number"&&(nn=a!==0)}}}catch{}}const bo="blendars.stats.v1";function Gr(){try{const e=localStorage.getItem(bo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s={...Lt};for(const o of Ks){const a=n[o];typeof a=="boolean"&&(s[o]=a)}Lt=s}catch{}}function Hr(){try{localStorage.setItem(bo,JSON.stringify(Lt))}catch{}}function go(){try{localStorage.setItem(ho,JSON.stringify({on:{stats:Nt?1:0,record:et,touch:nn?1:0}}))}catch{}}function On(){return Nt}function Pa(e){if(Nt!==e){Nt=e,go();for(const t of _e)t();ee()}}function we(e){return Lt[e]}function Vr(e){return zr[e]}function Wr(e,t){if(Lt[e]!==t){Lt[e]=t,Hr();for(const n of _e)n();ee()}}function Yr(){return et}function Xs(e){if(!(e!==1280&&e!==1920&&e!=="window")&&et!==e){et=e,go();for(const t of _e)t();ee()}}function Jr(e){const t=et==="window"?e:et;return!Number.isFinite(t)||t<=0?1280:Math.round(t)}function Ma(e){return _e.push(e),()=>{const t=_e.indexOf(e);t>=0&&_e.splice(t,1)}}let Kr="full";function Xr(){return Kr}let nn=!0;function qr(){return nn}function Qr(e){if(nn!==e){nn=e,go();for(const t of _e)t();ee()}}const Ia="blendars.touch.v1";let sn=1,on=1,an="split",rn=!1;function Zr(){try{const e=localStorage.getItem(Ia);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t;typeof n.scale=="number"&&n.scale>=.6&&n.scale<=2&&(sn=n.scale),typeof n.opacity=="number"&&n.opacity>=.25&&n.opacity<=1&&(on=n.opacity),(n.layout==="split"||n.layout==="left"||n.layout==="right")&&(an=n.layout),typeof n.swap=="boolean"&&(rn=n.swap)}catch{}}function Hn(){try{localStorage.setItem(Ia,JSON.stringify({scale:sn,opacity:on,layout:an,swap:rn}))}catch{}}function ec(){return sn}function tc(e){const t=Math.min(Math.max(e,.6),2);if(sn!==t){sn=t,Hn();for(const n of _e)n();ee()}}function nc(){return on}function sc(e){const t=Math.min(Math.max(e,.25),1);if(on!==t){on=t,Hn();for(const n of _e)n();ee()}}function oc(){return an}function ac(e){if(an!==e){an=e,Hn();for(const t of _e)t();ee()}}function ic(){return rn}function rc(e){if(rn!==e){rn=e,Hn();for(const t of _e)t();ee()}}Ur();Gr();Zr();const In=[];function yd(e){return In.push(e),()=>{const t=In.indexOf(e);t>=0&&In.splice(t,1)}}function qe(){for(const e of In)e();ee()}function sa(e,t){const n=De[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function cc(e,t){const n=De[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function zs(e){const t=J[e],n=De[e];return n.options&&n.options.length===2&&n.options[1]===1?t>=1?"вкл":"выкл":t.toFixed(n.decimals)}lc();Lr();function lc(){try{const e=localStorage.getItem(ro)??localStorage.getItem(co);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:n,o=typeof n.vol=="object"&&n.vol!==null?n.vol:null;for(const a of Object.keys(Aa)){const r=s[a];typeof r=="boolean"&&(ke[a]=r);const l=o?.[a];typeof l=="number"&&Number.isFinite(l)&&(xe[a]=Math.min(1,Math.max(0,l)))}}catch{}}function Dn(){try{localStorage.setItem(ro,JSON.stringify({on:ke,vol:xe})),localStorage.removeItem(co)}catch{}}function dc(e){return ke[e]?xe[e]:0}function vd(e){return xe[e]}function wd(e,t){const n=Math.min(1,Math.max(0,t));xe[e]!==n&&(xe[e]=n,Dn(),ee())}const uc=`@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JSON.stringify(ba)}) format('truetype');
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
`;function Ct(){return{version:1,physics:{on:{...ae},val:{...me}},lighting:{val:{...fe}},shadows:{val:{...Q}},postfx:{on:je,val:{...J}},sound:{on:{...ke},vol:{...xe}},hud:{on:{stats:Nt,record:et}},graphics:{val:{scale:At,fps:Rt,msaa:tt}},recording:{val:{fps:Tt,quality:Pt,keyFrame:Mt,sound:It}}}}function oa(){return{on:{...ae},val:{...me}}}function mc(){const e={},t={};for(const n of Ce)e[n]=!0,t[n]=Ne[n].def;return{on:e,val:t}}let qs=!1;function pc(){return qs}function Et(e){const t=[];if(!e||typeof e!="object")return{applied:t};qs=!0;try{return hc(e,t)}finally{qs=!1}}function aa(e){let t=!1;for(const n of Object.keys(e.on))if(Ce.includes(n)){const s=e.on[n];s!==void 0&&(ae[n]=s,t=!0)}for(const n of Object.keys(e.val))if(Ce.includes(n)){const s=Ne[n];if(s&&typeof s.min=="number"&&typeof s.max=="number"){const o=e.val[n];typeof o=="number"&&(me[n]=Math.min(s.max,Math.max(s.min,o)),t=!0)}}t&&(vt(),wt())}function fc(e){if(!e||typeof e!="object")return null;const t=e,n={},s={};let o=!1;if(t.on&&typeof t.on=="object")for(const[a,r]of Object.entries(t.on))typeof r=="boolean"&&(n[a]=r,o=!0);if(t.val&&typeof t.val=="object")for(const[a,r]of Object.entries(t.val))typeof r=="number"&&Number.isFinite(r)&&(s[a]=r,o=!0);return o?{on:n,val:s}:null}function hc(e,t){const n=e,s=(v,L,c)=>typeof v=="number"&&Number.isFinite(v)?Math.min(c,Math.max(L,v)):null,o=v=>v&&typeof v=="object"?v:null,a=v=>v&&typeof v=="object"?v:null,r=v=>v&&typeof v=="object"?v:null,l=n.physics&&typeof n.physics=="object"?n.physics:null;if(l){const v=a(l.on),L=o(l.val);let c=!1;for(const m of Ce){const b=Ne[m];v&&typeof v[m]=="boolean"&&(ae[m]=v[m],c=!0);const g=L?s(L[m],b.min,b.max):null;g!==null&&(me[m]=g,c=!0)}c&&(vt(),wt(),t.push("физика"))}const d=o(n.lighting&&typeof n.lighting=="object"?n.lighting.val:null);if(d){let v=!1;for(const L of St){const c=Oe[L],m=s(d[L],c.min,c.max);m!==null&&(fe[L]=m,v=!0)}v&&(Rn(),Pn(),t.push("свет"))}const p=o(n.shadows&&typeof n.shadows=="object"?n.shadows.val:null);if(p){let v=!1;for(const L of Qe){const c=Le[L],m=p[L];if(c.options){const E=c.options[m]===m?m:c.options.indexOf(m);E>=0&&E<c.options.length&&(Q[L]=Number(c.options[E]),v=!0);continue}const b=s(m,c.min,c.max);b!==null&&(Q[L]=b,v=!0)}v&&(kt(),en(),t.push("тени"))}const h=n.postfx&&typeof n.postfx=="object"?n.postfx:null;if(h){let v=!1;typeof h.on=="boolean"&&(je=h.on,v=!0);const L=o(h.val);if(L)for(const c of Ze){const m=De[c],b=L[c];if(m.options){const E=m.options.indexOf(b);E>=0&&E<m.options.length&&(J[c]=Number(m.options[E]),v=!0);continue}const g=s(b,m.min,m.max);g!==null&&(J[c]=g,v=!0)}v&&(Fe(),qe(),t.push("Post FX"))}const u=n.sound&&typeof n.sound=="object"?n.sound:null;if(u){const v=a(u.on),L=o(u.vol);let c=!1;for(const m of La){v&&typeof v[m]=="boolean"&&(ke[m]=v[m],c=!0);const b=L?s(L[m],0,1):null;b!==null&&(xe[m]=b,c=!0)}c&&(Dn(),t.push("звук"))}const x=n.hud&&typeof n.hud=="object"?n.hud:null,S=x&&typeof x.on=="object"?x.on:null;if(S&&typeof S.stats=="boolean"){Pa(S.stats);const v=S.record;(v===1280||v===1920||v==="window")&&Xs(v),t.push("интерфейс")}const k=r(n.graphics&&typeof n.graphics=="object"?n.graphics.val:null);if(k){let v=!1;const L=k.scale;(L===.5||L===.75||L===1)&&(yo(L),v=!0);const c=k.fps;(c===0||c===30||c===60||c===120)&&(vo(c),v=!0),typeof k.msaa=="boolean"&&(cn(k.msaa),v=!0),J.taa>0&&tt&&(cn(!1),v=!0),v&&(hn(),Vn(),t.push("графика"))}const N=r(n.recording&&typeof n.recording=="object"?n.recording.val:null);if(N){let v=!1;const L=N.fps;(L===24||L===30||L===60)&&(Ga(L),v=!0);const c=N.quality;(c==="low"||c==="medium"||c==="high")&&(Ha(c),v=!0);const m=N.keyFrame;(m===1||m===2||m===4)&&(Va(m),v=!0),typeof N.sound=="boolean"&&(Wa(N.sound),v=!0),v&&(bn(),gn(),t.push("запись"))}return{applied:t}}const xo="blendars.graphics.v1";let At=1,Rt=0,tt=!0;const _o="blendars.gfx-preset.v1",bc={phone:{label:"Телефон",graphics:{scale:.5,fps:30,msaa:!1},shadows:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3},postfxOn:!1,postfx:{bloom:0,vignette:0,fringing:0,sharpness:0,grading:0,taa:0,taaJitter:0}},balanced:{label:"Оптимальный",graphics:{scale:.75,fps:60,msaa:!0},shadows:{cascades:2,distribution:.7,blend:.12,distance:220,resolution:2048,bias:.7,normalBias:.4},postfxOn:!0,postfx:{bloom:.04,bloomBlur:8,bloomThreshold:.6,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.5,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:.25}},ultra:{label:"Ультра",graphics:{scale:1,fps:0,msaa:!0},shadows:{cascades:4,distribution:.7,blend:.12,distance:320,resolution:4096,bias:1,normalBias:.5},postfxOn:!0,postfx:{bloom:.06,bloomBlur:8,bloomThreshold:0,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:1,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:.25}}};let fn="phone";function gc(){const e=window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window,n=navigator.hardwareConcurrency??4,s=navigator.deviceMemory??4,o=Math.min(window.screen.width,window.screen.height)<768;return(e||t)&&(n<=4||s<=4||o)}function xc(){return fn}function $a(){try{localStorage.setItem(_o,fn)}catch{}}function _c(){try{const e=localStorage.getItem(_o);(e==="phone"||e==="balanced"||e==="ultra")&&(fn=e)}catch{}}function Fa(e){const t=bc[e];fn=e,$a(),yo(t.graphics.scale),vo(t.graphics.fps);const n=t.postfx.taa??0;cn(n>0?!1:t.graphics.msaa);for(const s of Qe)Q[s]=t.shadows[s]??Le[s].def;kt(),en(),je=t.postfxOn;for(const s of Ze){const o=t.postfx[s];typeof o=="number"&&(J[s]=o)}Fe(),qe()}const $n=[];function yc(){try{const e=localStorage.getItem(xo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.scale===.5||s.scale===.75||s.scale===1)&&(At=s.scale),(s.fps===0||s.fps===30||s.fps===60||s.fps===120)&&(Rt=s.fps),typeof s.msaa=="boolean"&&(tt=s.msaa)}catch{}}function hn(){try{localStorage.setItem(xo,JSON.stringify({val:{scale:At,fps:Rt,msaa:tt}}))}catch{}}function Vn(){for(const e of $n)e();ee()}function Ba(){return At}function Oa(){return Rt}function it(){return tt}const vc=4;function Ed(){return tt?vc:1}function yo(e){At!==e&&(At=e,hn(),Vn())}function vo(e){Rt!==e&&(Rt=e,hn(),Vn())}function cn(e){tt!==e&&(tt=e,hn(),Vn())}function Da(e){return $n.push(e),()=>{const t=$n.indexOf(e);t>=0&&$n.splice(t,1)}}yc();_c();const wo="blendars.recording.v1";let Tt=30,Pt="high",Mt=2,It=!0;const wc=[];function Ec(){try{const e=localStorage.getItem(wo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.fps===24||s.fps===30||s.fps===60)&&(Tt=s.fps),(s.quality==="low"||s.quality==="medium"||s.quality==="high")&&(Pt=s.quality),(s.keyFrame===1||s.keyFrame===2||s.keyFrame===4)&&(Mt=s.keyFrame),typeof s.sound=="boolean"&&(It=s.sound)}catch{}}function bn(){try{localStorage.setItem(wo,JSON.stringify({val:{fps:Tt,quality:Pt,keyFrame:Mt,sound:It}}))}catch{}}function gn(){for(const e of wc)e();ee()}function ja(){return Tt}function za(){return Pt}function Ua(){return Mt}function Qs(){return It}function Ga(e){Tt!==e&&(Tt=e,bn(),gn())}function Ha(e){Pt!==e&&(Pt=e,bn(),gn())}function Va(e){Mt!==e&&(Mt=e,bn(),gn())}function Wa(e){It!==e&&(It=e,bn(),gn())}Ec();function Sc(){const e=rr();if(e){const d=Et(e.data);d.applied.length>0&&console.info(`[settings] применён пресет «${e.name}»: ${d.applied.join(", ")}`);return}let t=!1;try{t=!!(localStorage.getItem(ro)??localStorage.getItem(co)??localStorage.getItem(lo)??localStorage.getItem(uo)??localStorage.getItem(mo)??localStorage.getItem(po)??localStorage.getItem(fo)??localStorage.getItem(ho)??localStorage.getItem(bo)??localStorage.getItem(xo)??localStorage.getItem(wo)??localStorage.getItem(_o))}catch{t=!0}if(t)return;const n=gc();fn=n?"phone":"ultra",$a(),hn(),kt(),Fe();const o=Ct();Fa("balanced");const a=Ct();Et(n?or:sr);const r=Ct();Et(o),_t("По умолчанию",o),_t("Оптимальный",a),_t(n?"Телефон":"Ультра",r);const l=Ys().find(d=>d.name===(n?"Телефон":"Ультра"));Js(l?l.id:null),console.info(`[settings] сохранённых настроек нет — созданы пресеты «По умолчанию», «Оптимальный», «${n?"Телефон":"Ультра"}» (активен «${n?"Телефон":"Ультра"}»)`)}Sc();function kc(){const e=document.createElement("div");e.className="settings",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Настройки");const t=document.createElement("style");t.textContent=uc;const n=document.createElement("div");n.className="settings__panel";const s=document.createElement("h2");s.className="settings__title",s.textContent="Настройки";const o=document.createElement("p");o.className="settings__hint",o.textContent="Галочка — эффект включён, ползунок — его громкость. Выбор сохраняется в браузере и действует сразу.",o.id="settings-hint",e.setAttribute("aria-describedby",o.id);const a=document.createElement("div");a.className="settings__tabs",a.setAttribute("role","tablist");const r=document.createElement("button");r.className="settings__tab settings__tab--on",r.type="button",r.textContent="Звук",r.setAttribute("role","tab"),r.setAttribute("aria-selected","true");const l=document.createElement("button");l.className="settings__tab",l.type="button",l.textContent="Физика",l.setAttribute("role","tab"),l.setAttribute("aria-selected","false");const d=document.createElement("button");d.className="settings__tab",d.type="button",d.textContent="Освещение",d.setAttribute("role","tab"),d.setAttribute("aria-selected","false");const p=document.createElement("button");p.className="settings__tab",p.type="button",p.textContent="Тени",p.setAttribute("role","tab"),p.setAttribute("aria-selected","false");const h=document.createElement("button");h.className="settings__tab",h.type="button",h.textContent="Post FX",h.setAttribute("role","tab"),h.setAttribute("aria-selected","false");const u=document.createElement("button");u.className="settings__tab",u.type="button",u.textContent="Интерфейс",u.setAttribute("role","tab"),u.setAttribute("aria-selected","false");const x=document.createElement("button");x.className="settings__tab",x.type="button",x.textContent="Управление",x.setAttribute("role","tab"),x.setAttribute("aria-selected","false");const S=document.createElement("button");S.className="settings__tab",S.type="button",S.textContent="Пресеты",S.setAttribute("role","tab"),S.setAttribute("aria-selected","false");const k=document.createElement("button");k.className="settings__tab",k.type="button",k.textContent="Графика",k.setAttribute("role","tab"),k.setAttribute("aria-selected","false");const N=document.createElement("button");N.className="settings__tab",N.type="button",N.textContent="Запись",N.setAttribute("role","tab"),N.setAttribute("aria-selected","false"),a.append(r,l,d,p,h,u,x,k,N,S);const v=i=>{const f=[r,l,d,p,h,u,x,k,N,S];for(let w=0;w<f.length;w++){const R=f[w];if(!R)continue;const O=w===i;R.classList.toggle("settings__tab--on",O),R.setAttribute("aria-selected",String(O))}L.hidden=i!==0,b.hidden=i!==1,nt.hidden=i!==2,st.hidden=i!==3,Ge.hidden=i!==4,He.hidden=i!==5,ve.hidden=i!==6,mt.hidden=i!==7,ot.hidden=i!==8,ht.hidden=i!==9};r.addEventListener("click",()=>v(0)),l.addEventListener("click",()=>v(1)),d.addEventListener("click",()=>v(2)),p.addEventListener("click",()=>v(3)),h.addEventListener("click",()=>v(4)),u.addEventListener("click",()=>v(5)),x.addEventListener("click",()=>v(6)),k.addEventListener("click",()=>v(7)),N.addEventListener("click",()=>v(8)),S.addEventListener("click",()=>v(9));const L=document.createElement("div");L.className="settings__pane",L.append(o);const c=document.createElement("div");c.className="settings__list";const m={};for(const[i,f]of Na){const w=document.createElement("div");w.className="settings__row";const R=document.createElement("label");R.className="settings__head";const O=document.createElement("span");O.textContent=f;const F=document.createElement("input");F.type="checkbox",F.checked=ke[i],R.append(O,F);const A=document.createElement("div");A.className="settings__vol",A.classList.toggle("settings__vol--off",!ke[i]);const P=document.createElement("input");P.type="range",P.min="0",P.max="100",P.step="1",P.value=String(Math.round(xe[i]*100)),P.setAttribute("aria-label",`Громкость: ${f}`);const M=document.createElement("output");M.className="settings__pct",M.textContent=`${P.value}%`,P.addEventListener("input",()=>{xe[i]=Number(P.value)/100,M.textContent=`${P.value}%`,Dn(),ee()}),A.append(P,M),F.addEventListener("change",()=>{ke[i]=F.checked,A.classList.toggle("settings__vol--off",!F.checked),Dn(),ee()}),m[i]=()=>{F.checked=ke[i],A.classList.toggle("settings__vol--off",!ke[i]),P.value=String(Math.round(xe[i]*100)),M.textContent=`${P.value}%`},w.append(R,A),c.append(w)}L.append(c);const b=document.createElement("div");b.className="settings__pane",b.hidden=!0;const g=document.createElement("div");g.className="physics-tabs";const E=document.createElement("button");E.className="physics-tab physics-tab--on",E.type="button",E.textContent="Тонкая настройка",E.setAttribute("role","tab"),E.setAttribute("aria-selected","true");const I=document.createElement("button");I.className="physics-tab",I.type="button",I.textContent="Пресеты физики",I.setAttribute("role","tab"),I.setAttribute("aria-selected","false"),g.append(E,I),b.append(g);const y=document.createElement("div");y.className="settings__block";const _=document.createElement("div");_.className="settings__block",b.append(y,_);const T=document.createElement("p");T.className="settings__hint",T.textContent="Галка включает тюнинг «против скольжения»; выключена — исходное поведение игры.",y.append(T);const B=document.createElement("div");B.className="settings__list",y.append(B);const $=i=>{const f=i==="fine";E.classList.toggle("physics-tab--on",f),I.classList.toggle("physics-tab--on",!f),E.setAttribute("aria-selected",String(f)),I.setAttribute("aria-selected",String(!f)),y.hidden=!f,_.hidden=f};E.addEventListener("click",()=>$("fine")),I.addEventListener("click",()=>$("presets"));let D=()=>{};const C=document.createElement("p");C.className="settings__status",C.setAttribute("role","status");const te=i=>{const f=mc();let w=0;for(const R of Object.keys(i.val)){if(!(R in f.val))continue;const O=i.val[R];typeof O=="number"&&(f.val[R]=O,w++)}aa(f),ea(null),D(),U(),C.textContent=`Машина «${i.name}»: задано ${w} параметров, остальные — по умолчанию.`},ie=i=>{const f=fc(i.data);if(!f){C.textContent=`В пресете «${i.name}» нет настроек физики.`;return}aa(f),ea(i.id),D(),U(),C.textContent=`Применён пресет «${i.name}».`},re=(i,f)=>{const w=document.createElement("div");w.className="settings__presetsection";const R=document.createElement("p");return R.className="settings__presettitle",R.textContent=i,w.append(R,f),w},oe=document.createElement("div");oe.className="settings__presets";for(const i of ar){const f=document.createElement("div");f.className="settings__preset";const w=document.createElement("div");w.className="settings__presetinfo";const R=document.createElement("span");R.className="settings__presetname",R.textContent=i.name;const O=document.createElement("span");O.className="settings__presetmeta",O.textContent=i.note,w.append(R,O);const F=document.createElement("button");F.className="settings__presetbtn",F.type="button",F.textContent="Применить",F.setAttribute("aria-label",`Применить пресет «${i.name}»`),F.addEventListener("click",()=>te(i)),f.append(w,F),oe.append(f)}const pe=document.createElement("div");pe.className="settings__presets";const q=i=>i>0?yt(new Date(i)):"дата неизвестна",U=()=>{pe.replaceChildren();const i=Qo(),f=Zo();if(i.length===0){const w=document.createElement("p");w.className="settings__presetempty",w.textContent="Своих пресетов нет: настройте физику и нажмите «Сохранить».",pe.append(w);return}for(const w of i){const R=document.createElement("div");R.className="settings__preset";const O=w.id===f;O&&R.classList.add("settings__preset--active");const F=document.createElement("div");F.className="settings__presetinfo";const A=document.createElement("span");A.className="settings__presetname",A.textContent=w.name;const P=document.createElement("span");P.className="settings__presetmeta",P.textContent=q(w.created),F.append(A,P);const M=document.createElement("button");M.className="settings__presetbtn",M.type="button",M.textContent="Применить",M.disabled=O,M.setAttribute("aria-label",`Применить пресет физики «${w.name}»`),M.addEventListener("click",()=>ie(w));const j=document.createElement("button");j.className="settings__presetbtn",j.type="button",j.textContent="✎",j.title="Переименовать",j.setAttribute("aria-label",`Переименовать пресет ${w.name}`),j.addEventListener("click",()=>{const z=document.createElement("input");z.className="settings__presetnameinput",z.type="text",z.value=w.name,A.replaceWith(z),z.focus(),z.select();const Xt=()=>{gr(w.id,z.value),U()};z.addEventListener("keydown",at=>{at.key==="Enter"&&Xt(),at.key==="Escape"&&(at.stopPropagation(),U())}),z.addEventListener("blur",Xt)});const V=document.createElement("button");V.className="settings__presetbtn",V.type="button",V.textContent="↓",V.title="Экспорт в файл",V.setAttribute("aria-label",`Экспорт пресета ${w.name} в файл`),V.addEventListener("click",()=>wr(w));const G=document.createElement("button");G.className="settings__presetbtn settings__presetbtn--danger",G.type="button",G.textContent="✕",G.title="Удалить",G.setAttribute("aria-label",`Удалить пресет физики «${w.name}»`),G.addEventListener("click",()=>{window.confirm(`Удалить пресет физики «${w.name}»?`)&&(_r(w.id),U(),C.textContent=`Пресет «${w.name}» удалён.`)}),R.append(F,M,j,V,G),pe.append(R)}},ce=document.createElement("div");ce.className="settings__presetnamefield";const H=document.createElement("input");H.type="text",H.value=yt(),H.placeholder="Название пресета",H.setAttribute("aria-label","Название нового пресета физики");const K=document.createElement("button");K.className="settings__presetbtn",K.type="button",K.textContent="Сохранить",K.addEventListener("click",()=>{const i=br(H.value||yt(),oa());H.value=yt(),U(),C.textContent=`Сохранён пресет «${i.name}».`}),ce.append(H,K);const X=document.createElement("button");X.className="settings__resetall",X.type="button",X.textContent="Обновить активный пресет",X.addEventListener("click",()=>{const i=Zo();if(!i){C.textContent="Активного пресета нет — сохраните новый.";return}xr(i,oa()),U(),C.textContent="Текущие настройки записаны в активный пресет."});const le=document.createElement("button");le.className="settings__resetall",le.type="button",le.textContent="Импорт из файла";const Y=document.createElement("input");Y.type="file",Y.accept="application/json,.json",Y.hidden=!0,le.addEventListener("click",()=>Y.click()),Y.addEventListener("change",()=>{const i=Y.files?.[0];Y.value="",i&&(async()=>{try{const f=Sr(await i.text());if(!f){C.textContent="Это не файл пресета физики.";return}const w=vr(f.items);U(),C.textContent=w===0?"Такие пресеты уже есть.":`Импортировано пресетов: ${w}.`}catch(f){C.textContent=`Не удалось прочитать файл: ${f instanceof Error?f.message:"ошибка чтения"}`}})()});const he=document.createElement("button");he.className="settings__resetall",he.type="button",he.textContent="Экспорт всех в файл",he.addEventListener("click",()=>{const i=Qo();if(i.length===0){C.textContent="Экспортировать нечего: пресетов нет.";return}Er(i),C.textContent=`Выгружено пресетов: ${i.length}.`});const ye=document.createElement("button");ye.className="settings__resetall",ye.type="button",ye.textContent="Убрать все пресеты",ye.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты физики? Настройки останутся как есть.")&&(yr(),U(),C.textContent="Пресеты удалены, текущие настройки не тронуты.")}),_.append(re("Встроенные машины",oe),re("Свои пресеты",pe),ce,X,le,he,ye,Y,C),U(),$("fine");const xn={};for(const i of Ce){const f=Ne[i],w=document.createElement("div");w.className="settings__row";const R=document.createElement("label");R.className="settings__head";const O=document.createElement("span");O.textContent=f.label;const F=document.createElement("input");F.type="checkbox",F.checked=ae[i],R.append(O,F);const A=document.createElement("div");A.className="settings__vol",A.classList.toggle("settings__vol--off",!ae[i]);const P=document.createElement("input");P.type="range",P.min="0",P.max="100",P.step="1",P.value=String(Math.round((me[i]-f.min)/(f.max-f.min)*100)),P.setAttribute("aria-label",`Значение: ${f.label}`);const M=document.createElement("output");M.className="settings__pct settings__pct--val",M.textContent=$s(i);const j=document.createElement("button");j.className="settings__reset",j.type="button",j.textContent="↺",j.title="Сбросить по умолчанию",j.setAttribute("aria-label",`Сбросить по умолчанию: ${f.label}`);const V=()=>{F.checked=ae[i],A.classList.toggle("settings__vol--off",!ae[i]),P.value=String(Math.round((me[i]-f.min)/(f.max-f.min)*100)),M.textContent=$s(i)};xn[i]=V,P.addEventListener("input",()=>{const G=f.min+(f.max-f.min)*(Number(P.value)/100);me[i]=Number(G.toFixed(f.decimals)),M.textContent=$s(i),vt(),wt()}),F.addEventListener("change",()=>{ae[i]=F.checked,A.classList.toggle("settings__vol--off",!F.checked),vt(),wt()}),j.addEventListener("click",()=>{ae[i]=!0,me[i]=f.def,V(),vt(),wt()}),A.append(P,M,j),w.append(R,A),B.append(w)}D=()=>{for(const i of Ce)xn[i]?.()};const Ot=document.createElement("button");Ot.className="settings__resetall",Ot.type="button",Ot.textContent="Сбросить все настройки физики",Ot.addEventListener("click",()=>{for(const i of Ce)ae[i]=!0,me[i]=Ne[i].def,xn[i]?.();vt(),wt()}),b.append(Ot);const nt=document.createElement("div");nt.className="settings__pane",nt.hidden=!0;const Wn=document.createElement("p");Wn.className="settings__hint",Wn.textContent="Ползунок — уровень света (слева от центра — студия, к правому краю — ярче), ↺ — сброс строки. Свет главного экрана меняется сразу и запоминается. «Гамма-коррекция» — аппаратная (движок держит её как вкл/выкл), а «Сила гаммы» — непрерывный подъём полутонов поверх неё: 1 — как есть, каждый шаг вверх удваивает свет.",nt.append(Wn);const Yn=document.createElement("div");Yn.className="settings__list";const Jn={};for(const i of St){const f=Oe[i],w=document.createElement("div");w.className="settings__row";const R=document.createElement("div");R.className="settings__head";const O=document.createElement("span");O.textContent=f.label,R.append(O);const F=document.createElement("div");F.className="settings__vol";const A=document.createElement("input");A.type="range",A.min="0",A.max="100",A.step="1",f.options&&(A.max=String(f.options.length-1)),A.value=String(na(i)),A.setAttribute("aria-label",`Освещение: ${f.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=Fs(i);const M=document.createElement("button");M.className="settings__reset",M.type="button",M.textContent="↺",M.title="Сбросить по умолчанию",M.setAttribute("aria-label",`Сбросить по умолчанию: ${f.label}`);const j=()=>{A.value=String(na(i)),P.textContent=Fs(i)};Jn[i]=j,A.addEventListener("input",()=>{fe[i]=Ir(i,Number(A.value)),P.textContent=Fs(i),Rn(),Pn()}),M.addEventListener("click",()=>{fe[i]=f.def,j(),Rn(),Pn()}),F.append(A,P,M),w.append(R,F),Yn.append(w)}nt.append(Yn);const Dt=document.createElement("button");Dt.className="settings__resetall",Dt.type="button",Dt.textContent="Сбросить все настройки освещения",Dt.addEventListener("click",()=>{for(const i of St)fe[i]=Oe[i].def,Jn[i]?.();Rn(),Pn()}),nt.append(Dt);const st=document.createElement("div");st.className="settings__pane",st.hidden=!0;const Kn=document.createElement("p");Kn.className="settings__hint",Kn.textContent="Каскады разбивают дальность теней на несколько карт: у ближней детализация выше, поэтому машина отбрасывает резкую тень даже вдали. Один каскад — одна карта на всю дальность. Меняется сразу, даже в заезде.",st.append(Kn);const Xn=document.createElement("div");Xn.className="settings__list";const _n={};for(const i of Qe){const f=Le[i],w=document.createElement("div");w.className="settings__row";const R=document.createElement("div");R.className="settings__head";const O=document.createElement("span");O.textContent=f.label,R.append(O);const F=document.createElement("div");F.className="settings__vol";const A=document.createElement("input");A.type="range",A.min="0",A.max="100",A.step="1",f.options&&(A.max=String(f.options.length-1)),A.value=String(Bs(i,Q[i])),A.setAttribute("aria-label",`Тени: ${f.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=Os(i);const M=document.createElement("button");M.className="settings__reset",M.type="button",M.textContent="↺",M.title="Сбросить по умолчанию",M.setAttribute("aria-label",`Сбросить по умолчанию: ${f.label}`);const j=()=>{A.value=String(Bs(i,Q[i])),P.textContent=Os(i)};_n[i]=j,A.addEventListener("input",()=>{Q[i]=Or(i,Number(A.value)),P.textContent=Os(i),kt(),en()}),M.addEventListener("click",()=>{Q[i]=f.def,j(),kt(),en()}),F.append(A,P,M),w.append(R,F),Xn.append(w)}st.append(Xn);const jt=document.createElement("button");jt.className="settings__resetall",jt.type="button",jt.textContent="Сбросить все настройки теней",jt.addEventListener("click",()=>{for(const i of Qe)Q[i]=Le[i].def,_n[i]?.();kt(),en()}),st.append(jt);const Ge=document.createElement("div");Ge.className="settings__pane",Ge.hidden=!0;const qn=document.createElement("p");qn.className="settings__hint",qn.textContent="Пост-обработка кадра: ореол вокруг солнца, виньетка, резкость, цветокоррекция и глубина резкости. Главный переключатель снимает всю обработку разом, а TAA включается на вкладке «Графика» — там ему и место, рядом с MSAA. Здесь у него остался только джиттер.",Ge.append(qn);const Qn=document.createElement("div");Qn.className="settings__row";const Zn=document.createElement("label");Zn.className="settings__head";const Lo=document.createElement("span");Lo.textContent="Пост-обработка включена";const Ae=document.createElement("input");Ae.type="checkbox",Ae.checked=Sn(),Zn.append(Lo,Ae),Ae.addEventListener("change",()=>js(Ae.checked)),Qn.append(Zn),Ge.append(Qn);const es=document.createElement("div");es.className="settings__list";const zt={};for(const i of Ze){if(i==="taa")continue;const f=De[i],w=document.createElement("div");w.className="settings__row";const R=document.createElement("div");R.className="settings__head";const O=document.createElement("span");O.textContent=f.label,R.append(O);const F=document.createElement("div");F.className="settings__vol";const A=document.createElement("input");A.type="range",A.min="0",A.max="100",A.step="1",f.options&&(A.max=String(f.options.length-1)),A.value=String(sa(i,J[i])),A.setAttribute("aria-label",`Post FX: ${f.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=zs(i);const M=document.createElement("button");M.className="settings__reset",M.type="button",M.textContent="↺",M.title="Сбросить по умолчанию",M.setAttribute("aria-label",`Сбросить по умолчанию: ${f.label}`);const j=()=>{A.value=String(sa(i,J[i])),P.textContent=zs(i)};zt[i]=j,A.addEventListener("input",()=>{J[i]=cc(i,Number(A.value)),P.textContent=zs(i),Fe(),qe()}),M.addEventListener("click",()=>{J[i]=f.def,j(),Fe(),qe()}),F.append(A,P,M),w.append(R,F),es.append(w)}Ge.append(es);const Ut=document.createElement("button");Ut.className="settings__resetall",Ut.type="button",Ut.textContent="Сбросить все настройки Post FX",Ut.addEventListener("click",()=>{for(const i of Ze)J[i]=De[i].def,zt[i]?.();Ae.checked=!0,js(!0),Fe(),qe(),pt()}),Ge.append(Ut);const He=document.createElement("div");He.className="settings__pane",He.hidden=!0;const ts=document.createElement("p");ts.className="settings__hint",ts.textContent="Служебные элементы поверх игры. Счётчик кадра живёт в левом верхнем углу на всех экранах; ниже выбирается, из каких строк он состоит.",He.append(ts);const ns=document.createElement("div");ns.className="settings__row";const ss=document.createElement("label");ss.className="settings__head";const Ao=document.createElement("span");Ao.textContent="Статистика кадра";const ut=document.createElement("input");ut.type="checkbox",ut.checked=On(),ss.append(Ao,ut),ut.addEventListener("change",()=>Pa(ut.checked)),ns.append(ss),He.append(ns);const os=document.createElement("p");os.className="settings__hint",os.textContent="Строки счётчика кадра. Если снять все, панель останется пустой плашкой — обновление текста всё равно стоит кадра, поэтому лишние строки лучше не держать включёнными без нужды.",He.append(os);const as=document.createElement("div");as.className="settings__row settings__row--stack";const Ro={};for(const i of Ks){const f=document.createElement("label");f.className="settings__check";const w=document.createElement("input");w.type="checkbox",w.checked=we(i);const R=document.createElement("span");R.textContent=Vr(i),w.addEventListener("change",()=>Wr(i,w.checked)),Ro[i]=w,f.append(w,R),as.append(f)}He.append(as);const ve=document.createElement("div");ve.className="settings__pane",ve.hidden=!0;const is=document.createElement("p");is.className="settings__hint",is.textContent="Сенсорное управление появляется только на устройствах с тач-экраном. Галочка прячет педали совсем; ниже — размер, прозрачность, расположение и схема кнопок. Всё сохраняется в браузере и действует сразу.",ve.append(is);const rs=document.createElement("div");rs.className="settings__row";const cs=document.createElement("label");cs.className="settings__head";const To=document.createElement("span");To.textContent="Сенсорное управление";const Gt=document.createElement("input");Gt.type="checkbox",Gt.checked=qr(),cs.append(To,Gt),Gt.addEventListener("change",()=>Qr(Gt.checked)),rs.append(cs),ve.append(rs);const ls=document.createElement("div");ls.className="settings__row";const ds=document.createElement("label");ds.className="settings__head";const Po=document.createElement("span");Po.textContent="Размер кнопок",ds.append(Po);const us=document.createElement("div");us.className="settings__vol";const be=document.createElement("input");be.type="range",be.min="60",be.max="200",be.step="5",be.value=String(Math.round(ec()*100)),be.setAttribute("aria-label","Размер сенсорных кнопок");const yn=document.createElement("output");yn.className="settings__pct",yn.textContent=`${be.value}%`,be.addEventListener("input",()=>{tc(Number(be.value)/100),yn.textContent=`${be.value}%`}),us.append(be,yn),ls.append(ds,us),ve.append(ls);const ms=document.createElement("div");ms.className="settings__row";const ps=document.createElement("label");ps.className="settings__head";const Mo=document.createElement("span");Mo.textContent="Прозрачность",ps.append(Mo);const fs=document.createElement("div");fs.className="settings__vol";const ge=document.createElement("input");ge.type="range",ge.min="25",ge.max="100",ge.step="5",ge.value=String(Math.round(nc()*100)),ge.setAttribute("aria-label","Прозрачность сенсорных кнопок");const vn=document.createElement("output");vn.className="settings__pct",vn.textContent=`${ge.value}%`,ge.addEventListener("input",()=>{sc(Number(ge.value)/100),vn.textContent=`${ge.value}%`}),fs.append(ge,vn),ms.append(ps,fs),ve.append(ms);const mt=document.createElement("div");mt.className="settings__pane",mt.hidden=!0;const hs=document.createElement("div");hs.className="settings__backend";const bs=document.createElement("p");bs.className="settings__hint",bs.textContent="Масштаб рендера уменьшает число пикселей, которые движок рисует за кадр: картинка мыльнее, но кадры стабильнее. Лимит кадров держит потолок частоты — помогает на ноутбуках от батареи. MSAA применяется при запуске: после его включения страницу нужно перезагрузить. TAA включается живьём и сглаживает всю сцену — его параметры (джиттер, резкость) задаёт выбранный пресет графики.",mt.append(bs);const Re=(i,f,w,R)=>{const O=document.createElement("div");O.className="settings__row";const F=document.createElement("div");F.className="settings__head";const A=document.createElement("span");A.textContent=i,F.append(A);const P=document.createElement("div");P.className="settings__vol",P.style.flexWrap="wrap";const M=[];for(const[V,G]of f){const z=document.createElement("button");z.className="settings__resetall",z.type="button",z.style.marginTop="0",z.style.flex="1 1 auto",z.style.textTransform="none",z.textContent=G,z.addEventListener("click",()=>{R(V),j()}),M.push(z),P.append(z)}const j=()=>{const V=w();for(let G=0;G<f.length;G++)M[G]?.toggleAttribute("disabled",f[G]?.[0]===V)};return j(),O.append(F,P),{row:O,refresh:j}},li=Re("Расположение",[["split","По краям"],["left","Слева"],["right","Справа"]],()=>oc(),i=>{(i==="split"||i==="left"||i==="right")&&ac(i)});ve.append(li.row);const di=Re("Кнопки крестовины",[["normal","▲ газ, ▼ тормоз"],["swap","▲ тормоз, ▼ газ"]],()=>ic()?"swap":"normal",i=>{rc(i==="swap")});ve.append(di.row);const gs=Re("Масштаб рендера",[["0.5","50 %"],["0.75","75 %"],["1","100 %"]],()=>String(Ba()),i=>{const f=Number(i);(f===.5||f===.75||f===1)&&yo(f)}),xs=Re("Лимит кадров",[["0","Выкл"],["30","30 fps"],["60","60 fps"],["120","120 fps"]],()=>String(Oa()),i=>{const f=Number(i);(f===0||f===30||f===60||f===120)&&vo(f)}),_s=document.createElement("div");_s.className="settings__row";const ys=document.createElement("label");ys.className="settings__head";const Io=document.createElement("span");Io.textContent="Сглаживание MSAA";const Te=document.createElement("input");Te.type="checkbox",Te.checked=it(),ys.append(Io,Te);const wn=document.createElement("span");wn.className="settings__pct";const Ht=()=>{Te.checked=it(),wn.textContent=it()?"сцена — сразу, интерфейс — после перезагрузки":""};Ht(),Te.addEventListener("change",()=>{cn(Te.checked),Te.checked&&Ds("taa")>0&&(J.taa=0,Fe(),qe()),Ht(),pt()}),_s.append(ys,wn);const vs=document.createElement("div");vs.className="settings__row";const ws=document.createElement("label");ws.className="settings__head";const $o=document.createElement("span");$o.textContent="Временное сглаживание TAA";const Pe=document.createElement("input");Pe.type="checkbox",Pe.checked=Ds("taa")>0,ws.append($o,Pe);const Es=document.createElement("span");Es.className="settings__pct";const ui=.1,mi=.5,pt=()=>{const i=Ds("taa")>0;Pe.checked=i,Es.textContent=i?"работает сразу":"включит пост-обработку"};pt(),Pe.addEventListener("change",()=>{J.taa=Pe.checked?1:0,Pe.checked&&!Sn()&&(js(!0),Ae.checked=!0),Pe.checked&&J.taaJitter<ui&&(J.taaJitter=mi,zt.taaJitter?.()),Pe.checked&&it()&&(cn(!1),Ht()),Fe(),qe(),pt()}),vs.append(ws,Es);const Ss=Re("Пресет графики",[["phone","Телефон"],["balanced","Оптимальный"],["ultra","Ультра"]],()=>xc(),i=>{if(!(i!=="phone"&&i!=="balanced"&&i!=="ultra")){Fa(i),gs.refresh(),xs.refresh(),Ss.refresh(),Te.checked=it(),wn.textContent=it()?"применится после перезагрузки":"",Ht(),pt();for(const f of Qe)_n[f]?.();for(const f of Ze)zt[f]?.();Ae.checked=Sn()}}),ks=document.createElement("p");ks.className="settings__hint",ks.textContent="Рендер: WebGL2 работает везде, WebGPU даёт больше эффектов, но на части телефонов подвисает на первом кадре. Смена бэкенда пересобирает движок и перезагружает сцену.",mt.append(ks,hs,Ss.row,gs.row,xs.row,_s,vs);const ot=document.createElement("div");ot.className="settings__pane",ot.hidden=!0;const Cs=document.createElement("p");Cs.className="settings__hint",Cs.textContent="Разрешение и частота записи — насколько дорого кодировать. Качество кодека — насколько жирный файл: чем выше, тем чётче картинка и тем сильнее просядет игра во время записи. Всё применяется к следующему нажатию «Запись».",ot.append(Cs);const Ns=document.createElement("div");Ns.className="settings__recordslot",ot.append(Ns);const Ls=document.createElement("div");Ls.className="settings__row";const As=document.createElement("label");As.className="settings__head";const Fo=document.createElement("span");Fo.textContent="Звук в файле";const ft=document.createElement("input");ft.type="checkbox",ft.checked=Qs(),As.append(Fo,ft),ft.addEventListener("change",()=>Wa(ft.checked)),Ls.append(As);const Bo=Re("Разрешение",[["1280","720p"],["1920","1080p"],["window","Как на экране"]],()=>String(Yr()),i=>{if(i==="window"){Xs("window");return}(i==="1280"||i==="1920")&&Xs(Number(i))}),Oo=Re("Частота записи",[["24","24 fps"],["30","30 fps"],["60","60 fps"]],()=>String(ja()),i=>{const f=Number(i);(f===24||f===30||f===60)&&Ga(f)}),Do=Re("Качество кодека",[["low","Низкое"],["medium","Среднее"],["high","Высокое"]],()=>za(),i=>{(i==="low"||i==="medium"||i==="high")&&Ha(i)}),jo=Re("Ключевой кадр",[["1","1 с"],["2","2 с"],["4","4 с"]],()=>String(Ua()),i=>{const f=Number(i);(f===1||f===2||f===4)&&Va(f)});ot.append(Ls,Bo.row,Oo.row,Do.row,jo.row);const ht=document.createElement("div");ht.className="settings__pane",ht.hidden=!0;const Rs=document.createElement("p");Rs.className="settings__hint",Rs.textContent="Пресет — это все настройки разом: физика, свет, тени, Post FX, звук и интерфейс. Активный пресет применяется при запуске и одинаково работает во всех сценах. Имя нового пресета — дата и время до минуты.",ht.append(Rs);const de=document.createElement("p");de.className="settings__status",de.setAttribute("role","status"),de.textContent="";const Ts=document.createElement("div");Ts.className="settings__presetnamefield";const Me=document.createElement("input");Me.type="text",Me.value=Ke(),Me.placeholder="Название пресета",Me.setAttribute("aria-label","Название нового пресета");const Vt=document.createElement("button");Vt.className="settings__presetbtn",Vt.type="button",Vt.textContent="Сохранить",Ts.append(Me,Vt);const pi=document.createElement("div");pi.className="settings__row";const Wt=document.createElement("button");Wt.className="settings__resetall",Wt.type="button",Wt.textContent="Обновить активный пресет",Wt.addEventListener("click",()=>{const i=Bn();if(!i){de.textContent="Активного пресета нет — сохраните новый.";return}wa(i,Ct()),de.textContent="Текущие настройки записаны в активный пресет.",We()});const Yt=document.createElement("button");Yt.className="settings__resetall",Yt.type="button",Yt.textContent="Импорт из файла";const Ve=document.createElement("input");Ve.type="file",Ve.accept="application/json,.json",Ve.hidden=!0,Yt.addEventListener("click",()=>Ve.click()),Ve.addEventListener("change",()=>{const i=Ve.files?.[0];Ve.value="",i&&(async()=>{try{const f=mr(await i.text());if(!f){de.textContent="Это не файл настроек игры.";return}const w=Et(f.data);if(w.applied.length===0){de.textContent="В файле нет знакомых настроек.";return}const R=_t(f.name??i.name.replace(/\.json$/i,""),f.data,f.created??Date.now());Js(R.id),Ps(),We(),Me.value=Ke(),de.textContent=`Импортировано «${R.name}»: ${w.applied.join(", ")}`}catch(f){de.textContent=`Не удалось прочитать файл: ${f instanceof Error?f.message:"ошибка чтения"}`}})()});const Jt=document.createElement("button");Jt.className="settings__resetall",Jt.type="button",Jt.textContent="Убрать все пресеты",Jt.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты? Настройки останутся как есть.")&&(dr(),Ps(),We(),de.textContent="Пресеты удалены, текущие настройки не тронуты.")});const Kt=document.createElement("div");Kt.className="settings__presets";const Ps=()=>{for(const i of Ce)xn[i]?.();for(const i of St)Jn[i]?.();for(const i of Qe)_n[i]?.();for(const i of Ze)zt[i]?.();for(const i of La)m[i]?.();Ae.checked=Sn(),ut.checked=On();for(const i of Ks){const f=Ro[i];f&&(f.checked=we(i))}Te.checked=it(),Ht(),pt(),gs.refresh(),xs.refresh(),Ss.refresh(),Bo.refresh(),Oo.refresh(),Do.refresh(),jo.refresh(),ft.checked=Qs()},fi=(i,f)=>{const w=Ys().find(O=>O.id===i);if(!w)return;const R=Et(w.data);Js(i),Ps(),de.textContent=R.applied.length>0?`Применён пресет «${f}»: ${R.applied.join(", ")}`:`В пресете «${f}» нет знакомых настроек.`},zo=i=>i>0?Ke(new Date(i)):"дата неизвестна",We=()=>{Kt.replaceChildren();const i=Ys(),f=Bn();if(i.length===0){const w=document.createElement("p");w.className="settings__presetempty",w.textContent="Пресетов пока нет. Настройте всё как надо и нажмите «Сохранить».",Kt.append(w);return}for(const w of i){const R=document.createElement("div");R.className="settings__preset";const O=w.id===f;O&&R.classList.add("settings__preset--active");const F=document.createElement("div");F.className="settings__presetinfo";const A=document.createElement("span");A.className="settings__presetname",A.textContent=w.name;const P=document.createElement("span");P.className="settings__presetmeta",P.textContent=O?`${zo(w.created)} · активен`:zo(w.created),F.append(A,P);const M=document.createElement("button");M.className="settings__presetbtn",M.type="button",M.textContent="✎",M.title="Переименовать",M.setAttribute("aria-label",`Переименовать пресет ${w.name}`),M.addEventListener("click",()=>{const z=document.createElement("input");z.className="settings__presetnameinput",z.type="text",z.value=w.name,A.replaceWith(z),z.focus(),z.select();const Xt=()=>{cr(w.id,z.value),We()};z.addEventListener("keydown",at=>{at.key==="Enter"&&Xt(),at.key==="Escape"&&(at.stopPropagation(),We())}),z.addEventListener("blur",Xt)});const j=document.createElement("button");j.className="settings__presetbtn",j.type="button",j.textContent="Применить",j.disabled=O,j.addEventListener("click",()=>fi(w.id,w.name));const V=document.createElement("button");V.className="settings__presetbtn",V.type="button",V.textContent="↓",V.title="Экспорт в файл",V.setAttribute("aria-label",`Экспорт пресета ${w.name} в файл`),V.addEventListener("click",()=>ur(w));const G=document.createElement("button");G.className="settings__presetbtn settings__presetbtn--danger",G.type="button",G.textContent="✕",G.title="Удалить",G.setAttribute("aria-label",`Удалить пресет ${w.name}`),G.addEventListener("click",()=>{window.confirm(`Удалить пресет «${w.name}»?`)&&(lr(w.id),We(),de.textContent=`Пресет «${w.name}» удалён.`)}),R.append(F,j,M,V,G),Kt.append(R)}};Vt.addEventListener("click",()=>{const i=_t(Me.value||Ke(),Ct());Me.value=Ke(),We(),de.textContent=`Сохранён пресет «${i.name}».`}),ht.append(Ts,Kt,Wt,Yt,Jt,Ve,de),We();const Ms=document.createElement("div");Ms.className="settings__scroll",Ms.append(L,b,nt,st,Ge,He,ve,mt,ot,ht),n.append(s,a,Ms),e.append(t,n),document.body.append(e);function hi(){e.hidden=!1,Me.value=Ke()}function bi(){e.hidden=!0}return{root:e,backendSlot:hs,recordSlot:Ns,open:hi,close:bi}}const Cc=300;function Nc(e={}){let t=0,n=!1;const s=()=>{const l=Bn();if(!l){n||(n=!0,e.onNoPreset?.());return}const d=Ct();if(!wa(l,d))return;n=!1;const p=Bn();p&&e.onSaved?.(p)},a=Ar(()=>{pc()||(window.clearTimeout(t),t=window.setTimeout(s,Cc))}),r=()=>{t!==0&&(window.clearTimeout(t),t=0,s())};return document.addEventListener("visibilitychange",r),window.addEventListener("pagehide",r),{flush(){t!==0&&(window.clearTimeout(t),t=0,s())},destroy(){window.clearTimeout(t),t=0,a(),document.removeEventListener("visibilitychange",r),window.removeEventListener("pagehide",r)}}}const Lc="https://vk.ru/H360ru";function Ac(){const e=document.createElement("div"),t=document.createElement("p");t.className="dlg__empty",t.textContent="Описание игры скоро появится. Пока сюда можно поставить правила, список техники и ссылку на сервер.";const n=document.createElement("a");n.className="dlg__link",n.href=Lc,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Группа игры во «ВКонтакте»",e.append(t,n);const s=pn({title:"Об игре",body:e});return{dialog:s,open(){s.open()},destroy(){s.destroy()}}}let Ya=null;function Eo(e){Ya=e}function rt(){return Ya?.()??null}const Rc={yaw:0,lift:0,zoom:1,shoulder:1,distance:6.4,height:2.5,fov:60},ia=["yaw","lift","zoom","distance","height","fov"],ra={yaw:{label:"Поворот",min:-180,max:180,step:1,unit:"°"},lift:{label:"Наклон",min:-.6,max:3.4,step:.1,unit:" м"},zoom:{label:"Зум",min:.55,max:1.7,step:.01,unit:"×"},distance:{label:"Дистанция",min:3,max:15,step:.1,unit:" м"},height:{label:"Высота",min:1,max:6,step:.1,unit:" м"},fov:{label:"Обзор (fov)",min:40,max:90,step:1,unit:"°"}},Ja="blendars.camera-views.v1";function Us(){try{const e=localStorage.getItem(Ja);if(!e)return[];const t=JSON.parse(e);if(!t||typeof t!="object")return[];const n=t.list;if(!Array.isArray(n))return[];const s=[];for(const o of n){if(!o||typeof o!="object")continue;const a=o;if(typeof a.id!="string"||!a.id)continue;const r=a.view;if(!r||typeof r!="object")continue;const l=r,d=(p,h)=>typeof p=="number"&&Number.isFinite(p)?p:h;s.push({id:a.id,name:typeof a.name=="string"&&a.name?a.name:"Без имени",created:typeof a.created=="number"?a.created:0,view:{yaw:d(l.yaw,0),lift:d(l.lift,0),zoom:d(l.zoom,1),shoulder:d(l.shoulder,1),distance:d(l.distance,6.4),height:d(l.height,2.5),fov:d(l.fov,60)}})}return s}catch{return[]}}function ca(e){try{localStorage.setItem(Ja,JSON.stringify({list:e}))}catch{}}function Tc(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Pc=`
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
`;function Mc(){if(document.getElementById("camv-style"))return;const e=document.createElement("style");e.id="camv-style",e.textContent=Pc,document.head.append(e)}function Ic(){Mc();const e=document.createElement("div"),t=document.createElement("p");t.className="camv__hint";const n={},s=document.createElement("div");for(const c of ia){const m=ra[c],b=document.createElement("div");b.className="camv__row";const g=document.createElement("div");g.className="camv__head";const E=document.createElement("span");E.textContent=m.label;const I=document.createElement("span");I.className="camv__val",g.append(E,I);const y=document.createElement("input");y.type="range",y.min=String(m.min),y.max=String(m.max),y.step=String(m.step),y.setAttribute("aria-label",m.label),y.addEventListener("input",()=>{const _=Number(y.value);rt()?.write({[c]:_}),I.textContent=`${y.value}${m.unit}`}),b.append(g,y),s.append(b),n[c]={input:y,out:I}}const o=document.createElement("div");o.className="camv__btns";const a=[],r=[[-1,"Слева"],[0,"Центр"],[1,"Справа"]];for(const[c,m]of r){const b=document.createElement("button");b.className="camv__btn",b.type="button",b.textContent=m,b.addEventListener("click",()=>{rt()?.write({shoulder:c}),l(c)}),a.push(b),o.append(b)}const l=c=>{for(let m=0;m<r.length;m++)a[m]?.classList.toggle("camv__btn--on",r[m]?.[0]===c)},d=document.createElement("button");d.className="camv__btn",d.type="button",d.textContent="Сбросить вид (C)",d.addEventListener("click",()=>{rt()?.reset(),v()});const p=document.createElement("div");p.className="camv__save";const h=document.createElement("input");h.type="text",h.placeholder="Название ракурса",h.setAttribute("aria-label","Название нового ракурса");const u=document.createElement("button");u.className="camv__btn",u.type="button",u.textContent="Сохранить",p.append(h,u);const x=document.createElement("div");x.className="camv__list";const S=document.createElement("p");S.className="camv__status",S.setAttribute("role","status"),S.textContent="",e.append(t,s,o,d,p,x,S);const k=pn({title:"Ракурсы камеры",body:e}),N=(c,m)=>{const b=ra[c];return`${c==="zoom"?m.toFixed(2):String(m)}${b.unit}`},v=()=>{const c=rt(),m=c?.read()??Rc,b=c!==null;t.textContent=b?"Ракурс меняется живьём. Тяните сцену мышью или пальцем (влево — экран влево), колесо или щипок — расстояние, C — сброс.":"Откройте сцену с машиной — здесь появится текущий ракурс.";for(const g of ia){const E=n[g];E&&(E.input.value=String(m[g]),E.input.disabled=!b,E.out.textContent=N(g,m[g]))}for(const g of a)g.disabled=!b;l(m.shoulder),d.disabled=!b,u.disabled=!b,h.disabled=!b,L()},L=()=>{x.replaceChildren();const c=Us();if(c.length===0){const m=document.createElement("p");m.className="camv__empty",m.textContent="Сохранённых ракурсов пока нет.",x.append(m);return}for(const m of c){const b=document.createElement("div");b.className="camv__item";const g=document.createElement("span");g.className="camv__name",g.textContent=m.name;const E=document.createElement("button");E.className="camv__btn",E.type="button",E.textContent="Применить",E.disabled=rt()===null,E.addEventListener("click",()=>{const y=rt();y&&(y.write({...m.view}),v(),S.textContent=`Применён ракурс «${m.name}».`)});const I=document.createElement("button");I.className="camv__btn",I.type="button",I.textContent="✕",I.title="Удалить",I.setAttribute("aria-label",`Удалить ракурс ${m.name}`),I.addEventListener("click",()=>{ca(Us().filter(y=>y.id!==m.id)),L(),S.textContent=`Ракурс «${m.name}» удалён.`}),b.append(g,E,I),x.append(b)}};return u.addEventListener("click",()=>{const c=rt();if(!c)return;const m=Date.now(),b={id:Tc(m),name:h.value.trim()||Ke(new Date(m)),created:m,view:{...c.read()}},g=Us();g.push(b),ca(g),h.value="",L(),S.textContent=`Сохранён ракурс «${b.name}».`}),{dialog:k,open(){v(),k.open()},destroy(){k.destroy()}}}const $c=[{hash:"0069c44",date:"2026-10-09",subject:"CI: upload-pages-artifact v5 вместо v3 — под Node 24 артефакт github-pages не создавался"},{hash:"9e7421c",date:"2026-10-09",subject:"Физика машины: сторож увязания, инерция по трём осям, пресеты 5 т и 4 т"},{hash:"709fad1",date:"2026-10-09",subject:"HUD в канвасе: слой под размер виджета вместо полноэкранной текстуры, обрезка полосы компаса"},{hash:"1d33c0a",date:"2026-10-09",subject:"Забег по чекпоинтам: таймер, карточка финиша, окно «Лидеры», личность ВК"},{hash:"e4e4244",date:"2026-10-09",subject:"up"},{hash:"b3964c6",date:"2026-10-09",subject:"Сглаживание: TAA на вкладке «Графика», починка MSAA, ПК-пресеты на MSAA"},{hash:"6f17f25",date:"2026-10-08",subject:"HUD в канвас, UI-аудиошина, Draco/KTX2-ассеты"},{hash:"ad022dc",date:"2026-10-08",subject:"Fix WGSL shader: declare material_diffuse and view_position uniforms in terrain-splat"},{hash:"a206a10",date:"2026-10-08",subject:"Rebuild dist with base /blend-ars/ (GitHub Pages)"},{hash:"15fdf63",date:"2026-10-08",subject:"Deploy built site from dist; path dist in Pages workflow"},{hash:"942a7cc",date:"2026-10-08",subject:"Remove project sources; keep .github and .gitignore"},{hash:"da0f40e",date:"2026-10-08",subject:"Create static.yml"},{hash:"2691051",date:"2026-10-08",subject:"Delete .github/workflows/static.yml"},{hash:"98c2349",date:"2026-10-08",subject:"Delete .github/workflows/npm-publish-github-packages.yml"},{hash:"3ce584f",date:"2026-10-08",subject:"Update static.yml"},{hash:"128f22b",date:"2026-10-03",subject:"Create npm-publish-github-packages.yml"},{hash:"c8e16ab",date:"2026-10-03",subject:"Create static.yml"},{hash:"5a46d53",date:"2026-10-03",subject:"feat(scene): выбор кузова грузовик/Maserati, Maserati в меню, откат WebGPU→WebGL2"},{hash:"5c65165",date:"2026-10-03",subject:"feat(menu): экран загрузки с прогрессом + процедурный 3D-фон меню"},{hash:"1faa7f1",date:"2026-10-03",subject:"test(stage-0): браузерная проверка рендера, smoke-сцена, иконки-заглушки"},{hash:"4f12113",date:"2026-10-03",subject:"feat(stage-0): bootstrap Vite + ленивый PlayCanvas + тулинг бюджетов"},{hash:"eb68f3c",date:"2026-10-03",subject:"docs: rewrite README for PlayCanvas/Colyseus web stack"},{hash:"34ff9ca",date:"2026-10-03",subject:"chore: remove legacy Godot+Nakama tree and web export"},{hash:"9018d77",date:"2026-10-02",subject:"Create FUNDING.yml"},{hash:"7f64ab1",date:"2026-09-30",subject:"Add files via upload"},{hash:"5b7ab23",date:"2026-09-30",subject:"Add files via upload"},{hash:"ebb8901",date:"2026-03-19",subject:"mv"},{hash:"3c3fc26",date:"2026-03-19",subject:"fix: обновлен .gitignore и удалены системные файлы"},{hash:"0e075c9",date:"2026-03-19",subject:"up"},{hash:"9309069",date:"2026-03-19",subject:"upd"},{hash:"b82f5bc",date:"2026-03-19",subject:"docs: оновлення правил проекту"},{hash:"a19f06e",date:"2026-03-19",subject:"up"},{hash:"45bb3b3",date:"2026-03-19",subject:"new rules by demiurgos 19_1"},{hash:"7519417",date:"2026-02-27",subject:"Update README.md"},{hash:"58a3447",date:"2026-02-27",subject:"**BLEND ARS: Initial Project Setup and Development Notice**"},{hash:"60a150e",date:"2026-02-27",subject:"upd"},{hash:"eae4946",date:"2026-02-27",subject:"Exclude addons folder from tracking"},{hash:"cfe0473",date:"2026-02-27",subject:"upd"},{hash:"94b5e5d",date:"2026-02-24",subject:"uikit up"},{hash:"17b03ea",date:"2026-02-24",subject:"mv"},{hash:"c8e9bf6",date:"2026-02-24",subject:"апдейт"},{hash:"48511ce",date:"2026-02-24",subject:"ui_kit"},{hash:"ad054cb",date:"2026-02-24",subject:"up"},{hash:"73e2c24",date:"2026-02-22",subject:"Update 00-core.md"},{hash:"8d20bc4",date:"2026-02-22",subject:"Create 05-ui-perf.md"},{hash:"cf17f7a",date:"2026-02-22",subject:"Update and rename 04-mcp-workflow.md to 04-ui-theme.md"},{hash:"93f52ae",date:"2026-02-22",subject:"Update and rename 03-gdscript-standards.md to 03-ui-core.md"},{hash:"ff72202",date:"2026-02-22",subject:"Update and rename 02-ui-scifi.md to 02-workflow.md"},{hash:"a533398",date:"2026-02-22",subject:"Rename 00-global.md to 00-core.md"},{hash:"134cacc",date:"2026-02-22",subject:"Update and rename 01-mmo-coder.md to 01-gdscpipt.md"}];function Fc(){const e=$c;if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,o=s.hash,a=s.date,r=s.subject;typeof o!="string"||typeof r!="string"||t.push({hash:o,date:typeof a=="string"?a:"",subject:r})}return t}function Bc(){const e=Fc(),t=document.createElement("div");if(e.length===0){const s=document.createElement("p");s.className="dlg__empty",s.textContent="Журнал пока пуст: сборка сделана без истории git.",t.append(s)}else{const s=document.createElement("p");s.className="devlog__meta",s.textContent=`Последние ${e.length} изменений`;const o=document.createElement("ul");o.className="devlog__list";for(const a of e){const r=document.createElement("li");r.className="devlog__item";const l=document.createElement("span");l.className="devlog__hash",l.textContent=a.hash;const d=document.createElement("span");d.className="devlog__date",d.textContent=a.date;const p=document.createElement("span");p.className="devlog__subject",p.textContent=a.subject,r.append(l,d,p),o.append(r)}t.append(s,o)}const n=pn({title:"Журнал разработки",body:t});return{dialog:n,open(){n.open()},destroy(){n.destroy()}}}const Ka="blendars.race.board.v1",Oc=200;let gt=null;function kn(e){return typeof e=="number"&&Number.isFinite(e)}function Dc(e){if(!Array.isArray(e))return[];const t=[];for(const n of e){if(t.length>=Oc)break;if(typeof n!="object"||n===null)continue;const s=n;typeof s.uid!="string"||s.uid===""||typeof s.name=="string"&&(!kn(s.bestMs)||s.bestMs<0||t.push({uid:s.uid,name:s.name,photo:typeof s.photo=="string"?s.photo:"",bestMs:s.bestMs,lastMs:kn(s.lastMs)?s.lastMs:s.bestMs,runs:kn(s.runs)&&s.runs>0?Math.floor(s.runs):1,updatedAt:kn(s.updatedAt)?s.updatedAt:0}))}return t.sort(Xa)}function Xa(e,t){return e.bestMs!==t.bestMs?e.bestMs-t.bestMs:e.updatedAt!==t.updatedAt?e.updatedAt-t.updatedAt:e.uid<t.uid?-1:e.uid>t.uid?1:0}function qa(){if(gt!==null)return gt;try{const e=localStorage.getItem(Ka);gt=e===null?[]:Dc(JSON.parse(e))}catch(e){console.warn("[race] таблица недоступна, веду её в памяти",e),gt=[]}return gt}function jc(e){gt=e;try{localStorage.setItem(Ka,JSON.stringify(e))}catch(t){console.warn("[race] рекорд не сохранён на диск",t)}}function zc(){return qa()}function Uc(e){const t=qa(),n=t.findIndex(p=>p.uid===e.uid),s=n>=0?t[n]:void 0,o=s?.bestMs??0,a=Math.max(0,Math.round(e.timeMs)),r={uid:e.uid,name:e.name,photo:e.photo,bestMs:s===void 0?a:Math.min(s.bestMs,a),lastMs:a,runs:(s?.runs??0)+1,updatedAt:Date.now()},l=t.slice();n>=0?l[n]=r:l.push(r),l.sort(Xa),jc(l);const d=l.findIndex(p=>p.uid===e.uid);return{rank:d>=0?d+1:l.length,total:l.length,bestMs:r.bestMs,improved:s===void 0||a<o,previousBestMs:o,board:l}}function Gc(e,t){const n={state:"idle",startMs:0,lastMs:0,collected:0,total:t.total},s=()=>{if(n.state==="finished"||(n.state==="idle"&&(n.state="running",n.startMs=performance.now(),e.fire("race:started",n.total)),n.collected+=1,n.total<1||n.collected<n.total))return;n.state="finished",n.lastMs=Math.max(0,Math.round(performance.now()-n.startMs));const o={timeMs:n.lastMs,collected:n.collected,total:n.total};e.fire("race:finished",o),t.onFinished?.(o)};return e.on("checkpoint:visited",s),{view:n,destroy(){e.off("checkpoint:visited",s)}}}function la(e){return e<10?`0${e}`:`${e}`}function ln(e){const t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/10);return`${Math.floor(n/6e3)}:${la(Math.floor(n/100)%60)}.${la(n%100)}`}function Sd(e){return`${e<0?"−":"+"}${ln(Math.abs(e))}`}const Hc=`
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
`;function Qa(e,t,n,s){const o=Math.abs(e)%100,a=o%10;return o>=11&&o<=14?s:a===1?t:a>=2&&a<=4?n:s}function Vc(e,t,n,s,o,a){const r=document.createElement("li");r.className="leaders__row";const l=document.createElement("span");l.className="leaders__place",l.textContent=`${e}`;const d=document.createElement("span");if(d.className="leaders__who",n!==""){const k=document.createElement("img");k.className="leaders__face",k.src=n,k.alt="",k.loading="lazy",k.addEventListener("error",()=>k.remove()),d.append(k)}const p=document.createElement("span");p.className="leaders__text";const h=document.createElement("span");h.className="leaders__name",h.textContent=t;const u=document.createElement("span");u.className="leaders__about";const x=`${o} ${Qa(o,"заезд","заезда","заездов")}`;u.textContent=o>1&&a>s?`${x} · последний ${ln(a)}`:x,p.append(h,u),d.append(p);const S=document.createElement("span");return S.className="leaders__time",S.textContent=ln(s),r.append(l,d,S),r}function Wc(e){e.textContent="";const t=zc();if(t.length===0){const a=document.createElement("p");a.className="dlg__empty",a.textContent="Заездов пока нет. Соберите все чекпоинты — результат попадёт в таблицу.",e.append(a);return}const n=document.createElement("p");n.className="leaders__meta",n.textContent=`${t.length} ${Qa(t.length,"игрок","игрока","игроков")} · лучшее время на игрока`;const s=document.createElement("ul");s.className="leaders__list";for(let a=0;a<t.length;a++){const r=t[a];r&&s.append(Vc(a+1,r.name,r.photo,r.bestMs,r.runs,r.lastMs))}const o=document.createElement("p");o.className="leaders__hint",o.textContent="Таблица — на этом устройстве: заезды других игроков в неё не попадают. Общий рейтинг появится, когда у игры будет сервер.",e.append(n,s,o)}function Yc(){if(!document.getElementById("leaders-style")){const n=document.createElement("style");n.id="leaders-style",n.textContent=Hc,document.head.append(n)}const e=document.createElement("div"),t=pn({title:"Лидеры",body:e});return{dialog:t,open(){Wc(e),t.open()},destroy(){t.destroy()}}}function qt(e,t,n,s){const o=document.createElement("button");return o.className=e,o.type="button",o.style.setProperty("--tb-icon",`url(${JSON.stringify(t)})`),o.title=n,o.setAttribute("aria-label",n),o.addEventListener("pointerdown",a=>{a.preventDefault(),!o.disabled&&s()}),o}const Jc=`
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
`;function Kc(){const e=document.createElement("button");e.className="tb__btn",e.type="button";const t=()=>document.fullscreenElement!==null,n=()=>{const s=t(),o=s?Ii:Mi;e.style.setProperty("--tb-icon",`url(${JSON.stringify(o)})`);const a=s?"Выйти из полноэкранного режима":"Полноэкранный режим";e.title=a,e.setAttribute("aria-label",a),e.setAttribute("aria-pressed",s?"true":"false")};return e.addEventListener("pointerdown",s=>{s.preventDefault(),!e.disabled&&(t()?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{}))}),document.addEventListener("fullscreenchange",n),n(),{el:e,destroy(){document.removeEventListener("fullscreenchange",n)}}}async function Xc(){return(await Z(()=>import("./music-player.rfOHvQdP.js"),__vite__mapDeps([0,1,2]))).createMusicPlayer()}function qc(e){const t=document.createElement("style");t.textContent=Jc;const n=document.createElement("header");n.className="tb";const s=document.createElement("div");s.className="tb__slot",s.append(e.statsHost);const o=document.createElement("div");o.className="tb__center";const a=document.createElement("h1");a.className="tb__title",a.textContent=e.title,o.append(a);const r=document.createElement("div");r.className="tb__slot tb__slot--right";const l=document.createElement("div");l.className="tb__extra";const d=Kc(),p=Ac(),h=Bc(),u=Ic(),x=Yc(),S=document.createElement("button");S.className="tb__btn tb__btn--close",S.type="button",S.style.setProperty("--tb-icon",`url(${JSON.stringify(Wi)})`),S.title="Скрыть панель",S.setAttribute("aria-label","Скрыть панель");const k=document.createElement("span");k.className="tb__cap",k.innerHTML="Скрыть<br>панель",S.append(k),S.addEventListener("pointerdown",m=>{m.preventDefault(),!S.disabled&&e.onToggleChrome()});let N=null,v=null;const L=qt("tb__btn",Di,"Музыка",()=>{const m=b=>{b.open(),e.windows.open("music")};if(v!==null){m(v);return}N??=Xc(),N.then(b=>{v=b,e.windows.register({id:"music",root:b.dialog.root,show:()=>b.open(),hide:()=>b.dialog.close()}),m(b)}).catch(()=>{})});r.append(l,qt("tb__btn",Bi,"Лидеры",()=>{x.open(),e.windows.open("leaders")}),qt("tb__btn",Oi,"Ракурсы камеры",()=>{u.open(),e.windows.open("camera")}),qt("tb__btn",Fi,"Журнал разработки",()=>{h.open(),e.windows.open("devlog")}),qt("tb__btn",$i,"Об игре",()=>{p.open(),e.windows.open("about")}),L,S,d.el),s.classList.add("tb__slot--left"),n.append(t,s,o,r),e.windows.register({id:"camera",root:u.dialog.root,show:()=>u.open(),hide:()=>u.dialog.close()}),e.windows.register({id:"leaders",root:x.dialog.root,show:()=>x.open(),hide:()=>x.dialog.close()}),e.windows.register({id:"about",root:p.dialog.root,show:()=>p.open(),hide:()=>p.dialog.close()}),e.windows.register({id:"devlog",root:h.dialog.root,show:()=>h.open(),hide:()=>h.dialog.close()});const c=[Xe(n),Xe(p.dialog.root),Zt(p.dialog.root),Xe(h.dialog.root),Zt(h.dialog.root),Xe(x.dialog.root),Zt(x.dialog.root),Xe(u.dialog.root),Zt(u.dialog.root)];return{root:n,setExtraButtons(m){l.append(m)},setBackButton(m){s.prepend(m)},setSceneMode(m){n.classList.toggle("tb--scene",m)},destroy(){d.destroy(),p.destroy(),h.destroy(),u.destroy(),x.destroy();for(const m of c)m();v?.destroy(),n.remove()}}}const Qc=`
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
`;function Zc(e={}){const t=document.createElement("style");t.textContent=Qc;const n=document.createElement("div");n.className="win";const s=document.createElement("div");s.className="win__bar";const o=document.createElement("button");o.className="win__close",o.type="button",o.textContent="✕",o.title="Закрыть окно",o.setAttribute("aria-label","Закрыть окно"),s.append(o);const a=document.createElement("p");a.className="win__empty",a.textContent="",a.setAttribute("aria-hidden","true"),n.append(t,a),document.body.append(s);const r=new Map,l=[];let d=null,p=null;const h=()=>{for(const g of r.values()){const E=g.id===d;g.root.hidden=!E,E?g.show():g.hide()}n.classList.toggle("win--open",d!==null),s.classList.toggle("win--open",d!==null);for(const g of l)g();u()},u=()=>{const g=n.getBoundingClientRect();if(g.width<=0||g.height<=0)return;const E=document.documentElement.style;E.setProperty("--win-left",`${Math.round(g.left)}px`),E.setProperty("--win-top",`${Math.round(g.top)}px`),E.setProperty("--win-width",`${Math.round(g.width)}px`),E.setProperty("--win-height",`${Math.round(g.height)}px`)},x={root:n,closeBtn:o,register(g){r.set(g.id,g),g.hide(),g.root.hidden=!0},open(g){r.has(g)&&(d=g,p={x:N,y:v,until:performance.now()+c},h())},close(){d!==null&&(d=null,h())},toggle(g){d===g?x.close():x.open(g)},active(){return d},onChange(g){return l.push(g),()=>{const E=l.indexOf(g);E>=0&&l.splice(E,1)}},destroy:()=>{}};o.addEventListener("pointerdown",g=>{g.preventDefault(),x.close()});const S=new ResizeObserver(u);S.observe(n),window.addEventListener("resize",u),window.addEventListener("orientationchange",u),u();const k=g=>{g.key==="Escape"&&(d!==null?(g.stopPropagation(),x.close()):e.onEmptyEscape?.())};document.addEventListener("keydown",k);let N=0,v=0;const L=g=>{N=g.clientX,v=g.clientY},c=400,m=32,b=g=>{if(d===null)return;const E=r.get(d);if(!E||E.root.hidden)return;const I=g.target;if(!(I instanceof Element)||E.root.contains(I))return;const y=p;if(y!==null&&performance.now()<y.until){const B=g.clientX-y.x,$=g.clientY-y.y;if(B*B+$*$<=m*m)return}if(I.closest(".tb")!==null)return;const _=g.clientX-N,T=g.clientY-v;_*_+T*T>64||x.close()};return document.addEventListener("pointerdown",L,!0),document.addEventListener("click",b),x.destroy=()=>{S.disconnect(),window.removeEventListener("resize",u),window.removeEventListener("orientationchange",u),document.removeEventListener("keydown",k),document.removeEventListener("pointerdown",L,!0),document.removeEventListener("click",b),s.remove();const g=document.documentElement.style;g.removeProperty("--win-left"),g.removeProperty("--win-top"),g.removeProperty("--win-width"),g.removeProperty("--win-height")},x}const el=`
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
    src: url(${JSON.stringify(ba)}) format('truetype');
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
`,tl={idle:"",starting:"готовлю…",recording:"идёт",encoding:"упаковываю файл…",saving:"сохраняю…",error:"не вышло"},nl=["recording","encoding","saving"],Gs=["Одно не рождается без другого: оболочка без души лишь кукла, душа без оболочки — призрак.","Сон совести рождает чудовищ.","У нас нет формы, и мы страшимся этого.","В здравом теле, витает здравый дух, а значит и душа."];class sl{statsHost;clusterHost;settings;windows;root;playBtn;backBtn;settingsItem;modes;actionsEl;midEl;statusEl;statusText;recordRow;recordBtn;recordDot;recordLabel;recordState;recordBar;recordFill;idleIndex=-1;topbar;chromeHidden=!1;autosave;uiSoundDetach=[];constructor(t,n){this.root=document.createElement("div"),this.root.className="menu";const s=document.createElement("style");s.textContent=el,this.windows=Zc({onEmptyEscape:()=>{this.setChromeHidden(!this.chromeHidden)}}),this.statsHost=document.createElement("div"),this.topbar=qc({statsHost:this.statsHost,title:"BLEND ARS",subtitle:"",windows:this.windows,onToggleChrome:()=>{this.setChromeHidden(!0)}}),this.playBtn=document.createElement("button"),this.playBtn.className="play play--go",this.playBtn.type="button",this.playBtn.textContent="Играть",this.playBtn.addEventListener("pointerdown",x=>{x.preventDefault(),!this.playBtn.disabled&&(Ee("click"),this.modes.open(),this.windows.open("modes"))});const o=document.createElement("ul");o.className="actions__list";const a=[["Контейнеры",ji],["Миссии",zi],["Гараж",Ui],["Магазин",Gi]];for(const[x,S]of a){const k=document.createElement("li"),N=document.createElement("button");N.className="mitem",N.type="button",N.textContent=x,N.disabled=!0,N.title=`${x}: раздел в разработке`,N.style.setProperty("--mitem-icon",`url(${JSON.stringify(S)})`),k.append(N),o.append(k)}this.settingsItem=document.createElement("button"),this.settingsItem.className="mitem",this.settingsItem.type="button",this.settingsItem.textContent="Настройки",this.settingsItem.style.setProperty("--mitem-icon",`url(${JSON.stringify(Jo)})`),this.settingsItem.addEventListener("pointerdown",x=>{x.preventDefault(),!this.settingsItem.disabled&&(Ee("click"),this.openSettings())});{const x=document.createElement("li");x.append(this.settingsItem),o.append(x)}this.modes=nr(x=>{Ee("click"),this.modes.dialog.close(),this.windows.close(),n.onScene(x)}),this.backBtn=document.createElement("button"),this.backBtn.className="tb__back",this.backBtn.type="button",this.backBtn.textContent="Назад",this.backBtn.style.setProperty("--tb-icon",`url(${JSON.stringify(Ji)})`),this.backBtn.title="Вернуться в меню",this.backBtn.setAttribute("aria-label","Вернуться в меню"),this.backBtn.style.display="none",this.backBtn.addEventListener("pointerdown",x=>{x.preventDefault(),Ee("click"),n.onBack?.()}),this.settings=kc();const r=document.createElement("button");r.className="tb__btn",r.type="button",r.style.setProperty("--tb-icon",`url(${JSON.stringify(Jo)})`),r.title="Настройки",r.setAttribute("aria-label","Настройки"),r.addEventListener("pointerdown",x=>{x.preventDefault(),!r.disabled&&(Ee("click"),this.openSettings())});const l=document.createElement("div");l.className="tb__extra",l.append(r),this.topbar.setExtraButtons(l),this.topbar.setBackButton(this.backBtn);const d=document.createElement("div");d.className="actions",d.append(this.playBtn,o),this.actionsEl=d,this.statusText=document.createElement("div"),this.statusText.className="status__text",this.statusText.textContent=this.pickIdlePhrase(),this.recordRow=document.createElement("div"),this.recordRow.className="status__record",this.recordRow.hidden=!0,this.recordBtn=document.createElement("button"),this.recordBtn.className="status__recordbtn",this.recordBtn.type="button",this.recordDot=document.createElement("span"),this.recordDot.className="status__dot",this.recordLabel=document.createElement("span"),this.recordLabel.textContent="Запись",this.recordBtn.append(this.recordDot,this.recordLabel),this.recordBtn.addEventListener("pointerdown",x=>{x.preventDefault(),!this.recordBtn.disabled&&(Ee("click"),n.onRecord?.())}),this.recordState=document.createElement("span"),this.recordState.className="status__recordstate",this.recordState.textContent="",this.recordBar=document.createElement("div"),this.recordBar.className="status__recordbar",this.recordFill=document.createElement("span"),this.recordBar.append(this.recordFill),this.recordBar.style.display="none",this.recordRow.append(this.recordBtn,this.recordState,this.recordBar),this.statusEl=document.createElement("div"),this.statusEl.className="status",this.clusterHost=document.createElement("div"),this.clusterHost.className="status__cluster",this.statusEl.append(this.clusterHost),this.statusText.setAttribute("role","status"),this.statusText.setAttribute("aria-live","polite"),this.statusEl.append(this.statusText),this.settings.recordSlot.append(this.recordRow);const p=document.createElement("div");p.className="mid",p.append(d,this.windows.root),this.actionsEl=d,this.midEl=p;const h=document.createElement("div");h.className="wrap",h.append(p);const u=document.createElement("button");u.className="chrome-fab",u.type="button",u.style.setProperty("--fab-icon",`url(${JSON.stringify(Yi)})`),u.title="Показать интерфейс",u.setAttribute("aria-label","Показать интерфейс"),u.addEventListener("pointerdown",x=>{x.preventDefault(),Ee("click"),this.setChromeHidden(!1)}),this.root.append(s,this.topbar.root,h,this.statusEl,u),t.append(this.root),qi(()=>dc("uiClick")),Qi(),this.uiSoundDetach.push(Xe(this.root),Xe(this.settings.root),Zt(this.settings.root),Xe(this.modes.dialog.root)),this.windows.register({id:"settings",root:this.settings.root,show:()=>this.settings.open(),hide:()=>this.settings.close()}),this.windows.register({id:"modes",root:this.modes.dialog.root,show:()=>this.modes.open(),hide:()=>this.modes.dialog.close()}),this.settings.close(),this.autosave=Nc({onSaved:x=>{this.setStatus(`Настройки сохранены в пресет «${x}».`)},onNoPreset:()=>{this.setStatus("Настройки применены, но активного пресета нет — сохранять некуда. Сохраните пресет на вкладке «Пресеты».")}})}openSettings(){this.settings.open(),this.windows.open("settings")}setMode(t){const n=t==="scene";this.playBtn.style.display=n?"none":"",this.backBtn.style.display=n?"":"none",this.recordRow.hidden=!n,n&&(this.modes.dialog.close(),this.windows.close()),this.setChromeHidden(!1),this.actionsEl.style.display=n?"none":"",this.midEl.style.gridTemplateColumns=n?"minmax(0, 1fr)":"",this.root.style.background=n?"none":"",this.root.classList.toggle("menu--scene",n)}setChromeHidden(t){this.chromeHidden=t,this.root.classList.toggle("menu--chrome-hidden",t)}isChromeHidden(){return this.chromeHidden}setSceneChrome(t){this.topbar.setSceneMode(t)}statsHostFor(t){return this.statsHost}setBusy(t){this.playBtn.disabled=t,this.settingsItem.disabled=t,this.backBtn.disabled=t,this.modes.setBusy(t),t&&this.setStatus("Инициализация рендера…")}setStatus(t){this.statusText.textContent=t||this.pickIdlePhrase()}setRecordState(t,n){const s=nl.includes(t);this.recordBtn.classList.toggle("live",s),this.recordBtn.disabled=t==="starting"||t==="encoding"||t==="saving",this.recordLabel.textContent=t==="recording"?"Стоп":"Запись",this.recordBar.style.display=t==="encoding"||t==="saving"?"block":"none",this.recordFill.style.width="0%",this.recordState.textContent=n??tl[t]}setRecordProgress(t){this.recordFill.style.width=`${Math.min(Math.max(t,0),1)*100}%`}pickIdlePhrase(){let t=Math.floor(Math.random()*Gs.length);return t===this.idleIndex&&(t=(t+1)%Gs.length),this.idleIndex=t,Gs[t]??""}destroy(){this.topbar.destroy(),this.modes.destroy(),this.windows.destroy(),this.autosave.destroy();for(const t of this.uiSoundDetach)t();this.root.remove(),this.settings.root.remove()}}const ol=`
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
`,al='<svg class="rswitch__svg" viewBox="0 0 48 26" width="48" height="26" aria-hidden="true" focusable="false"><rect class="rswitch__track" x="1" y="1" width="46" height="24" rx="12"></rect><circle class="rswitch__knob" cx="13" cy="13" r="9"></circle></svg>';function il(e,t){const n=document.createElement("div");n.className="rswitch-wrap";const s=document.createElement("span");s.className="rswitch__opt",s.textContent="WebGL2",s.dataset.val="webgl2";const o=document.createElement("button");o.className="rswitch",o.type="button",o.setAttribute("role","switch"),o.innerHTML=al;const a=document.createElement("span");a.className="rswitch__opt",a.textContent="WebGPU",a.dataset.val="webgpu",n.append(s,o,a);const r=()=>{o.disabled||t.onSwitch()};n.addEventListener("click",r),e.append(n);let l="webgl2",d=!1,p="";const h=()=>{const u=l==="webgpu";o.dataset.state=u?"on":"off",o.setAttribute("aria-checked",u?"true":"false"),s.classList.toggle("rswitch__opt--active",!u),a.classList.toggle("rswitch__opt--active",u);const x=u?"WebGL2":"WebGPU";o.title=o.disabled&&p?p:`Переключить на ${x}`,o.setAttribute("aria-label",`Рендер: ${u?"WebGPU":"WebGL2"}. Переключить на ${x}`),n.classList.toggle("rswitch-wrap--disabled",o.disabled),n.setAttribute("aria-disabled",String(o.disabled))};return h(),{setBackend(u){l=u,h()},setBusy(u){d=u,o.disabled=u||!!p,h()},setUnavailable(u){p=u,o.disabled=d||!!u,h()},destroy(){n.remove()}}}const rl=`
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
`;function Qt(e,t,n,s,o,a){o<=0||s<=0||(e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o),e.fill())}const cl="#ebdbb2",Cn="system-ui, -apple-system, 'Segoe UI', sans-serif";function ll(e){let t="";return{draw:(s,o,a,r)=>{if(o<=0||a<=0||r<=0)return!1;const l=e(),d=l===null?"none":[Math.round(Math.abs(l.speed)*.9),l.rpm,l.gear,l.shifting?1:0,l.gears.length,Math.round(l.charge*100),Math.round(l.boost*100),o,a,window.innerWidth].join("|");if(d===t)return!1;if(t=d,s.clearRect(0,0,o,a),s.fillStyle="rgba(29, 32, 33, 0.93)",s.fillRect(0,0,o,a),l===null)return!0;s.save(),s.scale(r,r);const p=a/r,h=document.documentElement.classList.contains("hud-density--skinny"),u=window.innerWidth>1100,x=window.innerWidth>820,S=12,k=p/2;let N=0;if(s.textBaseline="middle",s.textAlign="left",u){const b=h?48:64,g=4;s.fillStyle="#ffffff1f",Qt(s,N,k-g/2,b,g,2);const E=Math.max(l.maxRpm-l.idleRpm,1),I=Math.min(Math.max((l.rpm-l.idleRpm)/E,0),1);I>0&&(s.fillStyle=l.rpm>=l.shiftUpRpm?"#fe8019":"#ebdbb2cc",Qt(s,N,k-g/2,b*I,g,2)),N+=b+S}const v=h?18:24,L=h?9:11;s.fillStyle=cl,s.font=`700 ${v}px ${Cn}`;const c=`${Math.round(Math.abs(l.speed)*.9)}`;s.fillText(c,N,k);const m=s.measureText(c).width;if(s.font=`400 ${L}px ${Cn}`,s.fillStyle="rgba(235, 219, 178, 0.55)",s.fillText("км/ч",N+m+3,k),N+=m+3+s.measureText("км/ч").width+8,x){const b=l.gears.length,g=h?16:20,E=4,I=l.gear<0?0:l.gear;for(let y=0;y<=b;y++){const _=N+y*(g+4),T=y===I;s.fillStyle=T?l.shifting?"#ffffff4d":"#ebdbb2e6":"#ffffff1a",Qt(s,_,k-g/2,g,g,E),s.fillStyle=T?l.shifting?"#ffffff8c":"#1d2021":"#ffffff73",s.font=`600 ${h?9:11}px ${Cn}`,s.textAlign="center",s.fillText(y===0?"R":`${y}`,_+g/2,k),s.textAlign="left"}N+=(b+1)*(g+4)-4+S}if(u){const b=Math.min(Math.max(l.charge,0),1),g=Math.min(Math.max(l.boost,0),1),E=b>0?b:g;s.font=`400 9px ${Cn}`,s.fillStyle="rgba(235, 219, 178, 0.8)",s.fillText(b>0?"ЗАРЯД":"БУСТ",N,k);const I=s.measureText("ЗАРЯД").width,y=h?40:56,_=3,T=N+I+5;s.fillStyle="#ffffff1f",Qt(s,T,k-_/2,y,_,2),E>0&&(s.fillStyle=g>0?"#fe8019":"#7b5cff",Qt(s,T,k-_/2,y*E,_,2))}return s.restore(),!0},reset(){t=""},destroy(){t=""}}}function dl(e,t){const n=document.createElement("div");n.className="cluster",n.setAttribute("role","group"),n.setAttribute("aria-label","Приборы машины");const s=document.createElement("div");s.className="cluster__revs";const o=document.createElement("span");s.append(o);const a=document.createElement("div");a.className="cluster__dials";const r=document.createElement("span");r.className="cluster__speed",r.textContent="0";const l=document.createElement("span");l.className="cluster__unit",l.textContent="км/ч";const d=document.createElement("span");d.append(r,l);const p=document.createElement("div");p.className="cluster__gearbox",a.append(d,p);const h=document.createElement("div");h.className="cluster__boost";const u=document.createElement("span");u.textContent="Заряд";const x=document.createElement("div");x.className="cluster__boostbar";const S=document.createElement("span");x.append(S),h.append(u,x),n.append(s,a,h);const k=document.createElement("style");k.textContent=rl,document.head.append(k);let N=[],v=-1,L=0;const c=()=>{if(L++%4!==0)return;const b=e();if(!b)return;r.textContent=`${Math.round(Math.abs(b.speed)*.9)}`;const g=b.gears.length;if(g!==v){v=g,p.replaceChildren(),N=[];const $=g+1;for(let D=0;D<$;D++){const C=document.createElement("span");C.textContent=D===0?"R":`${D}`,p.append(C),N.push(C)}}const E=b.gear<0?0:b.gear;for(let $=0;$<N.length;$++)N[$]?.classList.toggle("engaged",$===E);p.classList.toggle("shifting",b.shifting);const I=Math.max(b.maxRpm-b.idleRpm,1),y=(b.rpm-b.idleRpm)/I;o.style.width=`${Math.min(Math.max(y,0),1)*100}%`,o.classList.toggle("redline",b.rpm>=b.shiftUpRpm);const _=Math.min(Math.max(b.charge,0),1),T=Math.min(Math.max(b.boost,0),1),B=_>0?_:T;S.style.width=`${B*100}%`,S.classList.toggle("firing",T>0),u.textContent=_>0?"Заряд":"Буст"};n.dataset.cleanup="1",(t??document.body).append(n);const m=window.setInterval(c,1e3/60/4);return{destroy(){window.clearInterval(m),n.remove(),k.remove()}}}const Zs=10;function ul(e,t){const n=e/t,s=Math.floor(n*6),o=n*6-s,a=.25,r=1-.75*o,l=.25+.75*o,d={0:[1,l,a],1:[r,1,a],2:[a,1,l],3:[a,r,1],4:[l,a,1],5:[1,a,r]},[p,h,u]=d[s%6]??[1,1,1];return new fa(p,h,u,1)}function Hs(e,t,n){const s=new xi;return s.diffuse=new fa(0,0,0),s.emissive=t,s.emissiveIntensity=2,s.blendType=_i,s.opacity=n,s.depthWrite=!1,s.update(),s}function ml(e,t,n=Zs){let s=null;const o=()=>{try{s??=new AudioContext;const y=s;y.state==="suspended"&&y.resume();const _=y.currentTime+.02,T=y.createOscillator();T.type="sawtooth",T.frequency.setValueAtTime(70,_),T.frequency.exponentialRampToValueAtTime(300,_+2.5);const B=y.createBiquadFilter();B.type="lowpass",B.Q.value=6,B.frequency.setValueAtTime(180,_),B.frequency.exponentialRampToValueAtTime(1800,_+2.5);const $=y.createGain();$.gain.setValueAtTime(1e-4,_),$.gain.exponentialRampToValueAtTime(.22,_+2.4),$.gain.setValueAtTime(.22,_+2.5),$.gain.linearRampToValueAtTime(0,_+2.7),T.connect(B).connect($).connect(y.destination),T.start(_),T.stop(_+2.8);const D=2.4,C=y.createBufferSource(),te=y.createBuffer(1,Math.ceil(y.sampleRate*D),y.sampleRate),ie=te.getChannelData(0);for(let pe=0;pe<ie.length;pe++)ie[pe]=Math.random()*2-1;C.buffer=te;const re=y.createBiquadFilter();re.type="bandpass",re.Q.value=2.5,re.frequency.setValueAtTime(250,_+2.5),re.frequency.exponentialRampToValueAtTime(5200,_+4.6);const oe=y.createGain();oe.gain.setValueAtTime(1e-4,_+2.5),oe.gain.exponentialRampToValueAtTime(.3,_+2.62),oe.gain.exponentialRampToValueAtTime(.001,_+4.8),C.connect(re).connect(oe).connect(y.destination),C.start(_+2.5),C.stop(_+4.9)}catch{}},a=new xt("checkpoints");t.addChild(a);const r=(y,_)=>{const T=new Go(y,120,_),B=new Go(y,-20,_),$=e.systems.rigidbody?.raycastFirst(T,B);return $?$.point.y:0},l=(y,_)=>{const T=r(y,_);return Math.abs(r(y+4,_)-T)<1.2&&Math.abs(r(y,_+4)-T)<1.2},d=y=>{let _={x:0,z:0,y:0};for(let T=0;T<8;T++){const B=y/n*Math.PI*2+Math.random()*.6,$=60+Math.random()*200,D=Math.cos(B)*$,C=Math.sin(B)*$;if(_={x:D,z:C,y:r(D,C)},l(D,C))return _}return _},p=e.graphicsDevice,h=new Is({ringRadius:4,tubeRadius:.14,sectorAngle:360,segments:48,sides:10}),u=new Is({ringRadius:2.6,tubeRadius:.12,sectorAngle:360,segments:36,sides:10}),x=new Is({ringRadius:1.5,tubeRadius:.1,sectorAngle:360,segments:24,sides:8}),S=new gi({radius:.35,height:60,heightSegments:1,capSegments:12}),k=En.fromGeometry(p,h),N=En.fromGeometry(p,u),v=En.fromGeometry(p,x),L=En.fromGeometry(p,S),c=[],m=new Map;for(let y=0;y<n;y++){const{x:_,z:T,y:B}=d(y),$=ul(y,n),D=new xt(`checkpoint-${y}`);D.setPosition(_,B+.35,T);const C=(K,X,le,Y)=>{const he=new xt("ring");return he.addComponent("render",{meshInstances:[new Uo(K,X)],castShadows:!1,receiveShadows:!1}),he.setEulerAngles(le,0,Y),D.addChild(he),he},te=Hs(p,$,.9),ie=Hs(p,$,.55),re=Hs(p,$,.28),oe=C(k,te,0,0),pe=C(N,ie,66,24),q=C(v,ie,108,-30),U=new xt("beam");U.addComponent("render",{meshInstances:[new Uo(L,re)],castShadows:!1,receiveShadows:!1}),U.setLocalPosition(0,30,0),D.addChild(U),a.addChild(D);const H={info:{id:y,x:_,z:T,color:Math.round($.r*255)<<16|Math.round($.g*255)<<8|Math.round($.b*255)},node:D,rings:[oe,pe,q],beam:U,mats:[te,ie],beamMat:re,state:"alive",t:0};c.push(H),m.set(D,H)}const b=y=>{for(const _ of c){if(_.state==="alive"){_.rings[0]?.rotate(0,y*50,0),_.rings[1]?.rotate(y*30,y*-70,0),_.rings[2]?.rotate(y*-45,0,y*60);continue}_.t+=y;const T=_.t;if(T<2.5){const B=T/2.5,$=1-(1-B)*(1-B),D=1+1.3*$;_.node.setLocalScale(D,D,D);const C=y*10*$;_.rings[0]?.rotate(0,C*50,0),_.rings[1]?.rotate(C*30,C*-70,0),_.rings[2]?.rotate(C*-45,0,C*60)}else if(T<5){const B=(T-2.5)/2.5,$=1-B*B,D=Math.max(2.3*$*$,.001);_.node.setLocalScale(D,D,D);const C=y*(10+B*40);_.rings[0]?.rotate(0,C*50,0),_.rings[1]?.rotate(C*30,C*-70,0),_.rings[2]?.rotate(C*-45,0,C*60),_.beam.setLocalScale(1,1+B*2.2,1),_.beam.setLocalPosition(0,30+B*45,0),_.beamMat.opacity=.28*(1-B),_.beamMat.update();for(let te=0;te<_.mats.length;te++){const ie=te===0?.9:.55;_.mats[te].opacity=Math.max(ie*(1-B),0),_.mats[te].update()}}}for(let _=c.length-1;_>=0;_--){const T=c[_];T.state==="dying"&&T.t>=5&&(T.node.destroy(),e.fire("checkpoint:visited",T.info),c.splice(_,1))}};e.on("update",b);const g=()=>t.findByName("vehicle");let E=0;const I=y=>{if(E+=y,E<.25)return;E=0;const T=g()?.getPosition();if(T)for(let B=c.length-1;B>=0;B--){const $=c[B],D=T.x-$.info.x,C=T.z-$.info.z;$.state==="alive"&&D*D+C*C<9*9&&($.state="dying",$.t=0,o())}};return e.on("update",I),{list:()=>c.map(y=>y.info),destroy(){e.off("update",b),e.off("update",I),s?.close().catch(()=>{}),a.destroy()}}}function Za(){return null}const Nn=55,pl={lane:38,zone:32,total:70},fl={lane:26,zone:24,total:50},hl={lane:0,zone:0,total:0};function So(){const e=document.documentElement.classList;return e.contains("hud-density--minimal")?hl:e.contains("hud-density--skinny")?fl:pl}const bl=`
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
`,gl={0:"С",45:"СВ",90:"В",135:"ЮВ",180:"Ю",225:"ЮЗ",270:"З",315:"СЗ"};function xl(){return So().total<=0}function ei(e,t,n,s=Za){let o=null;const a=()=>{try{o??=new AudioContext,o.state==="suspended"&&o.resume();const c=o,m=c.currentTime+.01;for(const[b,g]of[880,1318.51].entries()){const E=c.createOscillator(),I=c.createGain();E.type="sine",E.frequency.value=g;const y=m+b*.09;I.gain.setValueAtTime(0,y),I.gain.linearRampToValueAtTime(.16,y+.02),I.gain.exponentialRampToValueAtTime(.001,y+.38),E.connect(I).connect(c.destination),E.start(y),E.stop(y+.42)}}catch{}},r=document.createElement("div");r.className="compass-toast",document.body.append(r);let l=null;const d=c=>{r.textContent=c,r.classList.add("compass-toast--on"),a(),l!==null&&window.clearTimeout(l),l=window.setTimeout(()=>{r.classList.remove("compass-toast--on"),l=null},2400)};let p=-1,h=-1,u="",x="",S=-1,k=0;const N=c=>(c*180/Math.PI+360)%360,v=(c,m)=>{let b=(c-m)%360;return b>=180&&(b-=360),b<-180&&(b+=360),b};return{draw:(c,m,b)=>{if(b===0||m===0)return!1;const g=e();if(g===null)return u!==""?(c.clearRect(0,0,m,b),u="",!0):!1;const E=N(g),I=t(),y=n(),_=s();_!==null&&_.collected!==h?(h>=0&&_.collected>h&&d(_.collected>=_.total?`Все ${_.total} чекпоинтов собраны`:`Чекпоинт ${_.collected} из ${_.total}`),h=_.collected):(y.length!==p&&p>=0&&y.length<p&&_===null&&d(y.length>0?`Чекпоинт собран · осталось: ${y.length}`:"Все чекпоинты собраны!"),p=y.length);let T="";if(_!==null&&_.state!=="idle"){const q=_.state==="running"?Math.max(0,performance.now()-_.startMs):_.lastMs;T=`${ln(Math.floor(q/100)*100)} · ${_.collected}/${_.total}`}const B=`${m}x${b}|${E.toFixed(2)}|${I?`${I.x.toFixed(1)},${I.z.toFixed(1)}`:""}|${y.length}|${T}`;if(B===u)return!1;u=B;const $=So(),D=b/($.total||1),C=Math.round($.lane*D),te=C;c.save(),c.beginPath(),c.rect(0,0,m,b),c.clip(),c.clearRect(0,0,m,b);const ie=c.createLinearGradient(0,0,0,C);ie.addColorStop(0,"rgba(235, 219, 178, 0.15)"),ie.addColorStop(.6,"rgba(40, 40, 40, 0.94)"),c.fillStyle=ie,c.fillRect(0,0,m,C),c.strokeStyle="rgba(235, 219, 178, 0.18)",c.lineWidth=1,c.strokeRect(.5,.5,m-1,C-1);const re=m/(Nn*2),oe=m/2,pe=Math.round((E-Nn)/15)*15;c.textAlign="center",c.textBaseline="middle";for(let q=pe;q<=E+Nn;q+=15){const U=oe+v(q,E)*re,ce=gl[(q%360+360)%360];ce!==void 0?(c.fillStyle="#ebdbb2e6",c.font=`600 ${Math.round(C*.34)}px system-ui, sans-serif`,c.fillText(ce,U,C*.42)):q%45===0?(c.fillStyle="#ebdbb280",c.fillRect(U-1,C*.3,2,C*.22)):(c.fillStyle="#ebdbb240",c.fillRect(U-1,C*.36,2,C*.12))}if(c.fillStyle="#fe8019",c.fillRect(oe-1.5,C*.14,3,C*.2),I){const q=[...y].map(H=>{const K=H.x-I.x,X=H.z-I.z;return{cp:H,dist:Math.round(Math.hypot(K,X)),off:v(N(Math.atan2(K,-X)),E)}}).sort((H,K)=>H.off-K.off);let U=-1e9,ce=0;for(const{cp:H,dist:K,off:X}of q){const le=`#${H.color.toString(16).padStart(6,"0")}`;let Y=oe+X*re;if(Math.abs(X)>Nn-4){Y=oe+Math.sign(X)*(m/2-14*(m/560)),c.save(),c.translate(Y,C*.42),c.rotate(Math.sign(X)*Math.PI/2),c.fillStyle=le,c.beginPath(),c.moveTo(0,-6*(m/560)),c.lineTo(5*(m/560),3*(m/560)),c.lineTo(-5*(m/560),3*(m/560)),c.closePath(),c.fill(),c.restore();continue}Math.abs(Y-U)<34*(m/560)?ce=(ce+1)%2:ce=0,U=Y;const ye=5*(m/560);c.fillStyle=le,c.beginPath(),c.moveTo(Y,C*.2-ye),c.lineTo(Y+ye,C*.2),c.lineTo(Y,C*.2+ye),c.lineTo(Y-ye,C*.2),c.closePath(),c.fill(),c.fillStyle="#ebdbb2d9",c.font=`500 ${Math.round(C*.26)}px system-ui, sans-serif`,c.fillText(`${K}м`,Y,C*(.62+ce*.24))}}if(_!==null&&T!==""){const q=m/560,U=Math.max(10,Math.round($.zone*.62*D));c.font=`600 ${U}px system-ui, sans-serif`,c.textAlign="center",c.textBaseline="middle",(T!==x||U!==S)&&(x=T,S=U,k=c.measureText(T).width);const ce=9*q,H=U+7*q,K=k+ce*2,X=(m-K)/2,le=te+Math.max(0,(b-te-H)/2);c.beginPath(),typeof c.roundRect=="function"?c.roundRect(X,le,K,H,4*q):c.rect(X,le,K,H),c.fillStyle="rgba(29, 32, 33, 0.9)",c.fill(),c.strokeStyle=_.state==="finished"?"#b8bb2680":"#ebdbb233",c.lineWidth=1,c.stroke(),c.fillStyle=_.state==="finished"?"#b8bb26":"#ebdbb2",c.fillText(T,m/2,le+H/2)}return c.restore(),!0},reset(){u=""},destroy(){l!==null&&window.clearTimeout(l),o?.close().catch(()=>{}),r.remove()}}}function _l(e,t,n,s=Za){const o=document.createElement("div");o.className="compass";const a=document.createElement("canvas");o.append(a);const r=document.createElement("style");r.textContent=bl,o.append(r),document.body.append(o);const l=ei(e,t,n,s),d=()=>{const S=Math.min(window.devicePixelRatio||1,2);a.width=Math.round(a.clientWidth*S),a.height=Math.round(a.clientHeight*S)};d(),window.addEventListener("resize",d);let p=-1,h=-1,u=0;const x=()=>{const S=a.getContext("2d");S&&(a.width!==p||a.height!==h)&&(p=a.width,h=a.height,S.clearRect(0,0,a.width,a.height)),S&&l.draw(S,a.width,a.height),u=requestAnimationFrame(x)};return u=requestAnimationFrame(x),{destroy(){cancelAnimationFrame(u),window.removeEventListener("resize",d),l.destroy(),o.remove(),r.remove()}}}function yl(e,t){const n=e.graphicsDevice,s=d=>{const p=new Si(n,{name:`hud-${d.width}x${d.height}`,format:ki,width:d.width,height:d.height,mipmaps:!1,minFilter:Vo,magFilter:Vo,addressU:Ho,addressV:Ho,anisotropy:1,premultiplyAlpha:!0,srgb:!0});return p.setSource(d),p};let o=null;const a=[];try{o=new xt("hud-screen"),o.addComponent("screen",{screenSpace:!0,scaleMode:yi}),e.root.addChild(o);for(const d of t){const p=document.createElement("canvas"),h=p.getContext("2d",{alpha:!0});if(!h)throw new Error("нет 2d-контекста");const u=new xt(`hud-${d.name}`);u.addComponent("element",{type:Ei,anchor:new wi(0,0,0,0),pivot:new vi(0,0),opacity:1,useInput:!1}),o.addChild(u),u.enabled=!1,a.push({layer:d,entity:u,element:u.element,canvas:p,ctx:h,texture:null,sizeKey:"",dirty:!0})}}catch(d){console.warn("[hud] слой HUD не поднялся — HUD остаётся DOM-ом",d);for(const p of a)p.texture?.destroy();return o?.destroy(),{active:!1,destroy(){}}}const r=(d,p)=>{const h=d.layer.rect();if(!h||h.w<=0||h.h<=0)return d.entity.enabled=!1,!1;const u=Math.max(1,Math.round(h.w*p)),x=Math.max(1,Math.round(h.h*p)),S=`${u}x${x}`;if(S!==d.sizeKey){d.sizeKey=S,d.canvas.width=u,d.canvas.height=x;const k=s(d.canvas);d.element.texture=k,d.texture?.destroy(),d.texture=k,d.layer.reset(),d.dirty=!0}return d.element.width=h.w*p,d.element.height=h.h*p,d.entity.setLocalPosition(Math.round(h.x*p),n.height-Math.round((h.y+h.h)*p),0),d.entity.enabled=!0,!0},l=()=>{const d=n.width>0?n.width/Math.max(window.innerWidth,1):1;if(!(d<=0||!Number.isFinite(d)))for(const p of a){if(!p.ctx||!r(p,d))continue;const h=p.texture;if(!h)continue;(p.layer.draw(p.ctx,p.canvas.width,p.canvas.height,d)||p.dirty)&&(p.dirty=!1,h.setSource(p.canvas),h.upload())}};return e.on("prerender",l),{active:!0,destroy(){e.off("prerender",l);for(const d of a)d.texture?.destroy(),d.layer.destroy();o.destroy()}}}function vl(e,t,n,s,o,a){e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o)}function wl(e){let t=!1;const n=ei(e.getHeading,e.getVehicle,e.getCheckpoints,e.readRace),s=ll(e.read),o=()=>{if(xl())return null;const h=Math.min(window.innerWidth*.62,560),u=So();if(h<40||u.total<=0)return null;const x=e.safeTop()+(u.lane===26?126:92);return{x:(window.innerWidth-h)/2,y:x,w:h,h:u.total}},a=()=>{const h=e.clusterHost,u=h.parentElement;if(!u||h.offsetParent===null&&u.clientHeight===0)return null;const x=u.getBoundingClientRect();return x.height<4?null:{x:x.left,y:x.top,w:x.width,h:x.height}};return{layers:[(()=>{let h="";return{name:"bar",rect:a,draw(u,x,S,k){const N=`${x}x${S}@${k}`;return N===h?!1:(h=N,u.clearRect(0,0,x,S),u.save(),vl(u,0,0,x,S,Math.max(4,6*k)),u.fillStyle="rgba(29, 32, 33, 0.93)",u.fill(),u.strokeStyle="rgba(235, 219, 178, 0.2)",u.lineWidth=Math.max(1,k),u.stroke(),u.restore(),!0)},reset(){h=""},destroy(){h=""}}})(),{name:"compass",rect:o,draw(h,u,x){return n.draw(h,u,x)},reset(){n.reset()},destroy(){n.destroy()}},{name:"cluster",rect:()=>{const h=e.clusterHost,u=a();if(!u)return null;const x=h.getBoundingClientRect();return{x:x.left>0?x.left:u.x+16,y:u.y,w:Math.min(480,Math.max(u.w,240)),h:u.h}},draw(h,u,x,S){return s.draw(h,u,x,S)},reset(){s.reset()},destroy(){s.destroy()}}],destroy(){t||(t=!0,n.destroy(),s.destroy())}}}let da=!1,ua=null;function ti(){return ua??=Z(()=>import("./index.Dp09MIqC.js"),[]).then(e=>e.default),ua}function ni(){try{return new URLSearchParams(location.search).has("vk_app_id")}catch{return!1}}const El=1e4;async function Sl(){if(da||!ni())return!1;da=!0;try{const e=await ti(),t=await Promise.race([e.send("VKWebAppInit"),new Promise((n,s)=>{setTimeout(()=>s(new Error("платформа не ответила на VKWebAppInit")),El)})]);if(t?.result)return console.info("[vk] VKWebAppInit: платформа подтвердила запуск приложения"),!0;console.warn("[vk] VKWebAppInit: платформа ответила без подтверждения",t)}catch(e){console.warn("[vk] не удалось инициализировать приложение ВКонтакте",e)}return!1}const Vs={uid:"local",name:"Гость",photo:""},kl=8e3;function Cl(){return String("6739294").trim()}function Nl(e,t,n){return Promise.race([e,new Promise((s,o)=>{setTimeout(()=>o(new Error(n)),t)})])}async function Ll(){let e;try{e=new URLSearchParams(location.search)}catch{return Vs}const t=e.get("vk_user_id");if(!t)return Vs;const n=e.get("vk_app_id")??"",s=Cl();if(s!==""&&n!==s)return console.warn("[vk] запуск с чужим app_id:",n,"— свой:",s),Vs;const o=`vk:${t}`;if(!ni())return{uid:o,name:"Игрок ВКонтакте",photo:""};try{const a=await ti(),r=await Nl(a.send("VKWebAppGetUserInfo"),kl,"платформа не ответила на VKWebAppGetUserInfo"),l=`${r.first_name} ${r.last_name}`.trim();return{uid:o,name:l===""?"Игрок ВКонтакте":l,photo:r.photo_200}}catch(a){return console.warn("[vk] имя игрока не получено",a),{uid:o,name:"Игрок ВКонтакте",photo:""}}}let ma=null;function Al(){return ma??=Ll(),ma}function Rl(e,t){let n=!1,s=null;const o=Gc(e,{total:t,onFinished:r=>{Tl(r,()=>n).then(l=>{if(n){l();return}s?.(),s=l})}}),a=window;return a.__blendarsRace=o.view,{view:o.view,destroy(){n=!0,o.destroy(),s?.(),s=null,a.__blendarsRace===o.view&&delete a.__blendarsRace}}}async function Tl(e,t){const n=await Al(),s=Uc({uid:n.uid,name:n.name,photo:n.photo,timeMs:e.timeMs});if(console.info("[race] финиш:",ln(e.timeMs),"· чекпоинтов",e.collected,"из",e.total,"· место",s.rank,"из",s.total,"· игрок",n.uid),t())return()=>{};const{showFinishCard:o}=await Z(async()=>{const{showFinishCard:a}=await import("./finish-card.Ogohiw_d.js");return{showFinishCard:a}},__vite__mapDeps([3,2]));return t()?()=>{}:o({timeMs:e.timeMs,collected:e.collected,total:e.total,outcome:s,identity:n})}function Pl(e){let t=0,n=0;const s=e.autoRender,o=()=>{const l=Oa();t=l>0?1e3/l:0,n=t,e.autoRender=t===0?s:!1},a=l=>{t!==0&&(n+=l*1e3,n>=t&&(n=0,e.renderNextFrame=!0))};o(),e.on("update",a);const r=Da(o);return{destroy(){e.off("update",a),r(),e.autoRender=s}}}let si=1,lt=null;function Ml(){return Ba()*si}function kd(e){si=e,eo()}function eo(){lt?.graphicsDevice&&(lt.graphicsDevice.maxPixelRatio=Ml(),lt.resizeCanvas(),lt.updateCanvasSize())}function Il(e){lt=e,eo();const t=Da(()=>{eo()});return()=>{t(),lt===e&&(lt=null)}}const $l=250,Fl="menuRenderFps",Bl=`
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
`;function Ol(e=null){const t=document.createElement("div");t.className="mini-stats",t.setAttribute("role","status"),t.setAttribute("aria-label","Статистика кадра");const n=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");t.append(n,s,o,a);const r=document.createElement("style");r.id="mini-stats-style",r.textContent=Bl,document.head.append(r);const l=L=>{t.classList.toggle("mini-stats--inline",L!==null);const c=L??document.body;t.parentElement!==c&&c.append(t)};l(e);let d=null,p=On(),h=!1;const u=()=>we("fps")||we("cpu")||we("draw")||we("vram"),x=()=>{t.classList.toggle("visible",p&&d!==null&&u())},S=(L,c,m)=>{const b=c.fps,g=b>0&&b<30;if(g!==h&&(h=g,n.classList.toggle("warn",g)),m.fps){const E=c.user.get(Fl),I=typeof E=="number"&&E>0?` · рендер ${E}`:"";n.textContent=`${b>0?Math.round(b):"—"} FPS${I} · ${c.frameTime.toFixed(1)} ms`}m.cpu&&(s.textContent=`CPU ${c.cpuUpdateTime.toFixed(1)} / ${c.cpuRenderTime.toFixed(1)} / ${c.cpuPhysicsTime.toFixed(1)} мс`),m.draw&&(o.textContent=`Draw ${Ws(c.drawCallCount)} · Прим. ${Ws(c.frame.primitives)} · Шейд. ${Ws(c.frame.shaders)}`),m.vram&&(a.textContent=`VRAM ${Math.round(c.vramTotalBytes/1048576)} МБ · ${L.graphicsDevice.width}×${L.graphicsDevice.height} ${L.graphicsDevice.isWebGPU?"WebGPU":"WebGL2"}`)},k=()=>{const L=d;if(!L||!p)return;const c={fps:we("fps"),cpu:we("cpu"),draw:we("draw"),vram:we("vram")};n.hidden=!c.fps,s.hidden=!c.cpu,o.hidden=!c.draw,a.hidden=!c.vram,S(L,L.stats,c)};x();const N=window.setInterval(k,$l),v=Ma(()=>{p=On(),x(),k()});return{setHost(L){l(L),k()},setApp(L){d=L,x(),L&&k()},destroy(){window.clearInterval(N),v(),t.remove(),r.remove()}}}function Ws(e){return Number.isFinite(e)?e>=1e6?`${Math.round(e/1e5)}М`:e>=1e4?`${Math.round(e/1e3)}к`:`${Math.round(e)}`:"—"}const Dl="hud-density--skinny",jl="hud-density--minimal";function zl(){const e=document.documentElement,t=()=>{const n=Xr();e.classList.toggle(Dl,n!=="full"),e.classList.toggle(jl,n==="minimal")};return t(),Ma(t)}function Cd(){return 1}const pa="blendars-scrollbar",Ul=[".dlg__body",".settings__scroll",".settings__tabs",".actions",".mp__list"],Ye=e=>Ul.map(t=>`${t}${e}`).join(`,
`),Gl=`
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
`;function Hl(){if(document.getElementById(pa))return;const e=document.createElement("style");e.id=pa,e.textContent=Gl,document.head.append(e)}const Vl="vehicle",Nd="vehicleInput",Ld="vehicleWheel",Wl="driveCamera",ko=document.getElementById("app");if(!ko)throw new Error("#app not found");Hl();let ne=null,to=null,ct=null,no=null;const dn={boot:.1,device:.35,decoders:.7,background:.95},Je=new Ti(document.body);let un=null,so=null,tn=null,mn=null,jn=null,Se=!1,Be=null,zn=null;const oo="blendars.backend";function Un(e){try{e?localStorage.setItem(oo,e):localStorage.removeItem(oo)}catch{}}function Yl(){try{const e=localStorage.getItem(oo);return e==="webgpu"||e==="webgl2"?e:null}catch{return null}}function Jl(){const e=new URLSearchParams(location.search).get("backend");return e==="webgpu"||e==="webgl2"?e:null}let $t=Jl()??Yl();const W=new sl(ko,{onScene:e=>{ai(W,e)},onBack:()=>{id(W)},onRecord:()=>{cd()}});window.__blendarsEnterSmoke=()=>{ad(W)};const Ie=il(W.settings.backendSlot,{onSwitch:()=>{od()}});{const e=document.createElement("style");e.textContent=ol,document.head.append(e)}navigator.gpu||Ie.setUnavailable("WebGPU не поддерживается этим браузером");function Co(e,t){const n=t==="scene";e.setMode(t),e.setSceneChrome(n),Gn.setHost(e.statsHostFor(n))}const Gn=Ol(W.statsHost);zl();Je.setStage("интерфейс",dn.boot);window.__blendarsMenuReady=!0;Sl();Xl();function Kl(e){zn?.();const t=Il(e),n=Pl(e);zn=()=>{t(),n.destroy()}}async function Xl(){try{Je.setStage("пресет настроек",dn.boot);const{askBootPreset:e}=await Z(async()=>{const{askBootPreset:s}=await import("./boot-preset.DAptRJHS.js");return{askBootPreset:s}},__vite__mapDeps([4,2]));if(await e(),$t==="webgpu"){const{confirmWebgpuSwitch:s}=await Z(async()=>{const{confirmWebgpuSwitch:a}=await import("./confirm-dialog.DpA-HaJF.js");return{confirmWebgpuSwitch:a}},[]);await s()||($t=null,Un(null),W.setStatus("Запуск на WebGL2 — WebGPU не подтверждён"))}const t=await Ft((s,o)=>{Je.setStage(s,o??void 0),Je.updateFromResources(),ql()});window.__blendarsEngine={backend:t.backend},window.__blendarsApp=t.app,mn=t.backend,Ie.setBackend(t.backend),Gn.setApp(t.app),Kl(t.app),t.backend==="webgpu"&&oi(t),Je.setStage("сцена меню",dn.background);const{buildMenuBackground:n}=await Z(async()=>{const{buildMenuBackground:s}=await import("./menu-background.GAxVkhYs.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));Be=await n(t.app),window.__blendarsBackgroundReady=!0,Ql(),Je.setStage("готово",1),W.setStatus(""),await Je.hide(),window.__blendarsInteractive=!0,console.info("[blendars] boot complete",t.backend)}catch(e){console.error("[blendars] boot failed",e),Je.setError("Не удалось запустить рендер. Проверьте поддержку WebGPU/WebGL2 в браузере."),window.__blendarsInteractive=!0}}async function ql(){const e=new URLSearchParams(location.search).get("bootDelay");if(!e)return;const t=Number(e);!Number.isFinite(t)||t<=0||await new Promise(n=>setTimeout(n,Math.min(t,3e4)))}async function Ql(){try{const{probeServiceWorker:e}=await Z(async()=>{const{probeServiceWorker:n}=await import("./capabilities.Vl_UvQZj.js");return{probeServiceWorker:n}},[]),t=await e("/blend-ars/sw.js");console.info(t==="registered"?"[blendars] Service Worker зарегистрирован: оффлайн-оболочка доступна":`[blendars] Service Worker: ${t} — оффлайн-старт недоступен`)}catch(e){console.warn("[blendars] регистрация Service Worker не удалась",e)}}function Ft(e){return un??=Zl(e),un}async function Zl(e){const{initEngine:t}=await Z(async()=>{const{initEngine:a}=await import("./engine-bootstrap.uj0NgSQT.js");return{initEngine:a}},__vite__mapDeps([8,2])),n=document.createElement("canvas");n.className="game-canvas",n.style.zIndex="0",document.body.insertBefore(n,ko),so=n;const s=$t??"webgl2";return t(n,{physics:!0,deviceTypes:s==="webgl2"?["webgl2","webgpu"]:["webgpu","webgl2"],skipAdapterProbe:s==="webgpu"&&$t!==null,onStage:(a,r)=>{r===1?e?.(a,dn.decoders):e?.(a,dn.device)}})}const ed=5,td=1e3,nd=3;function oi(e){let t=0;tn?.();let n=null;const s=l=>{Un(null),No("webgl2",{persist:!1,restoreScene:!1,reason:l})};let o=e.app.frame,a=0;const r=window.setInterval(()=>{if(document.hidden){o=e.app.frame;return}const l=e.app.frame;l===o?(a++,a>=nd&&(window.clearInterval(r),s("кадры не идут — вероятно, WebGPU завис на первом кадре"))):(a=0,o=l)},td);tn=()=>{window.clearInterval(r),n?.(),n=null},Z(async()=>{const{watchWebGpuErrors:l}=await import("./engine-bootstrap.uj0NgSQT.js");return{watchWebGpuErrors:l}},__vite__mapDeps([8,2])).then(({watchWebGpuErrors:l})=>{if(Se){tn?.();return}n=l(e.device,d=>{t++,console.warn(`[blendars] webgpu error #${t}: ${d.slice(0,200)}`),(sd(d)||t>=ed)&&(window.clearInterval(r),s(d))})})}function sd(e){return/out of memory|not enough memory/i.test(e)}async function No(e,t){if(Se)return;Se=!0,Ie.setBusy(!0),t.reason&&console.warn("[blendars] смена рендера:",t.reason.slice(0,200));const{probeWebGpuAdapter:n}=await Z(async()=>{const{probeWebGpuAdapter:a}=await import("./engine-bootstrap.uj0NgSQT.js");return{probeWebGpuAdapter:a}},__vite__mapDeps([8,2])),s=setTimeout(()=>{W.setStatus("Рендер переключается дольше обычного… если не идёт — F9")},25e3);if(e==="webgpu"){const a=await n();if(!a){Ie.setUnavailable("WebGPU не поддерживается этим браузером"),W.setStatus("WebGPU не поддерживается этим браузером"),clearTimeout(s),Ie.setBusy(!1),Se=!1;return}a.stalled?console.warn("[blendars] зонд WebGPU не ответил — пробуем по явному запросу"):a.software&&W.setStatus(`WebGPU: софтверный адаптер (${a.label||"без описания"}) — рендер может упасть`);const{confirmWebgpuSwitch:r}=await Z(async()=>{const{confirmWebgpuSwitch:d}=await import("./confirm-dialog.DpA-HaJF.js");return{confirmWebgpuSwitch:d}},[]);if(!await r()){W.setStatus("Остались на WebGL2 — WebGPU не подтверждён"),clearTimeout(s),Ie.setBusy(!1),Se=!1;return}}const o=ci();o.setStage("смена рендера…");try{tn?.(),tn=null,o.setStage("смена рендера: остановка движка…"),ne?.destroy(),ne=null,window.__blendarsSceneReady=!1,ii(),ri(),Eo(null),Be?.destroy(),Be=null;const a=await un;un=null,mn=null,Gn.setApp(null),zn?.(),zn=null,a?.detachResize(),a?.app.destroy(),so?.remove(),so=null,$t=e,t.persist&&Un(e),o.setStage(`смена рендера: движок ${e.toUpperCase()}…`);const r=await Ft();mn=r.backend,window.__blendarsEngine={backend:r.backend},window.__blendarsApp=r.app,Ie.setBackend(r.backend),Gn.setApp(r.app),r.backend==="webgpu"&&oi(r),r.backend!==e&&W.setStatus(`${e.toUpperCase()} недоступен — рендер: ${r.backend.toUpperCase()}`);const l=t.restoreScene===!1?null:jn;if(l)o.done(),await ai(W,l);else{jn=null,o.setStage("смена рендера: сцена меню…");const{buildMenuBackground:d}=await Z(async()=>{const{buildMenuBackground:p}=await import("./menu-background.GAxVkhYs.js");return{buildMenuBackground:p}},__vite__mapDeps([5,2,6,7]));Be=await d(r.app),Co(W,"menu"),W.setBusy(!1),r.backend===e&&W.setStatus(""),o.done()}}catch(a){if(console.error("[blendars] смена рендера не удалась",a),t.allowRetry!==!1&&e!=="webgl2"){o.done(),$t="webgl2",Un(null),Se=!1,Ie.setBusy(!1),await No("webgl2",{persist:!1,allowRetry:!1});return}o.fail("не удалось сменить рендер"),W.setStatus("Не удалось сменить рендер — перезагрузите страницу (F9)")}finally{clearTimeout(s),Ie.setBusy(!1),Se=!1}}async function od(){Se||mn&&await No(mn==="webgpu"?"webgl2":"webgpu",{persist:!0})}async function ad(e){if(!Se){e.setBusy(!0);try{if(await Ft(),new URLSearchParams(location.search).get("scene")==="smoke"){const{buildSmokeScene:t}=await Z(async()=>{const{buildSmokeScene:n}=await import("./smoke-scene.C4r09Tql.js");return{buildSmokeScene:n}},__vite__mapDeps([9,2]));Be?.destroy(),Be=null,t((await Ft()).app)}e.setStatus("Ангар появится на этапе 4"),e.setBusy(!1)}catch(t){console.error("[blendars] enter game failed",t),e.setStatus("Не удалось открыть сцену"),e.setBusy(!1)}}}async function ai(e,t){if(Se)return;e.setBusy(!0),e.setStatus(t==="maserati"?"Загрузка сцены: мазерати…":"Загрузка сцены…");const n=ci();try{Be?.destroy(),Be=null;const s=await Ft(),{buildVehicleScene:o}=await Z(async()=>{const{buildVehicleScene:a}=await import("./vehicle-scene.C1D122Ew.js");return{buildVehicleScene:a}},__vite__mapDeps([10,2,8,6]));ne=await o(s.app,a=>n.setStage(a),{body:t,onAssetProgress:(a,r)=>n.setStage(a,r)}),Co(e,"scene"),e.setBusy(!1),e.setStatus("WASD / стрелки — ехать, пробел — ручник, R — сброс на месте, Q — плечо камеры"),jn=t,window.__blendarsSceneReady=!0,ld(s.app),dd(s.app),Eo(()=>rd()),n.done()}catch(s){console.error("[blendars] vehicle scene failed",s),e.setStatus("Не удалось загрузить сцену"),n.fail(String(s?.message??s)),e.setBusy(!1)}}async function id(e){ne?.destroy(),ne=null,jn=null,window.__blendarsSceneReady=!1,Eo(null);const t=await Ft(),{buildMenuBackground:n}=await Z(async()=>{const{buildMenuBackground:s}=await import("./menu-background.GAxVkhYs.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));Be=await n(t.app),Co(e,"menu"),e.setBusy(!1),e.setStatus(""),ii(),ri()}function rd(){const e=ne?.root.findByName("camera"),t=e?.script?.get(Wl);if(!e||!t)return null;const n=(o,a)=>typeof o=="number"&&Number.isFinite(o)?o:a,s=(o,a,r)=>o<a?a:o>r?r:o;return{read:()=>({yaw:n(t._manualYaw,0),lift:n(t._manualLift,0),zoom:n(t._zoom,1),shoulder:n(t.shoulder,1),distance:n(t.distance,6.4),height:n(t.height,2.5),fov:e.camera?n(e.camera.fov,60):60}),write:o=>{o.yaw!==void 0&&(t._manualYaw=s(o.yaw,-180,180)),o.lift!==void 0&&(t._manualLift=s(o.lift,-.6,3.4)),o.zoom!==void 0&&(t._zoom=s(o.zoom,.55,1.7)),o.shoulder!==void 0&&(t.shoulder=o.shoulder),o.distance!==void 0&&(t.distance=s(o.distance,3,15)),o.height!==void 0&&(t.height=s(o.height,1,6)),o.fov!==void 0&&e.camera&&(e.camera.fov=s(o.fov,40,90))},reset:()=>{t.resetLook()}}}async function cd(){const e=(t,n)=>{W.setRecordState(t,n)};try{if(!ct){const{GameRecorder:t}=await Z(async()=>{const{GameRecorder:o}=await import("./video-recorder.T8uFKfef.js");return{GameRecorder:o}},__vite__mapDeps([11,2,1])),n=un;if(n===null){e("error","движок не поднят, запись невозможна");return}const s=(await n.catch(()=>null))?.app??null;if(s===null){e("error","сначала войди в сцену");return}ct=new t(s,{onState:(o,a)=>e(o,a),onProgress:o=>W.setRecordProgress(o)},{frameRate:ja(),width:Jr(s.graphicsDevice.canvas.width||window.innerWidth),quality:za(),keyFrameInterval:Ua(),sound:Qs(),attachAudio:o=>ne?.audio?.attachRecordStream(o)??(()=>{})})}if(ct.recording){const t=await ct.stop();t>0&&e("idle",`файл ${(t/1048576).toFixed(1)} МБ сохранён`)}else await ct.start()}catch(t){e("error",t instanceof Error?t.message:"запись недоступна")}}function ld(e){const t=()=>ne?.root.findByName("vehicle")?.script?.get(Vl)??null,n=ne?ml(e,ne.root,Zs):null,s=ne?Rl(e,Zs):null,o=()=>n?.list()??[],a=()=>s?.view??null,r=()=>{const v=ne?.root.findByName("camera")?.forward;return v?Math.atan2(v.x,-v.z):null},l=()=>{const N=ne?.root.findByName("vehicle")?.getPosition();return N?{x:N.x,z:N.z}:null},d=document.createElement("div");d.style.cssText="position:fixed;left:0;top:0;width:0;height:0;padding-top:env(safe-area-inset-top);visibility:hidden;pointer-events:none",document.body.append(d);let p=0;const h=()=>{const N=Number.parseFloat(getComputedStyle(d).paddingTop);p=Number.isFinite(N)?N:0};h(),window.addEventListener("resize",h),window.addEventListener("orientationchange",h);let u=null,x=null,S=null;const k=wl({getHeading:r,getVehicle:l,getCheckpoints:o,readRace:a,read:t,clusterHost:W.clusterHost,safeTop:()=>p});u=yl(e,k.layers),u.active?document.documentElement.classList.add("hud-in-canvas"):(u=null,k.destroy(),x=dl(t,W.clusterHost),S=_l(r,l,o,a)),to=()=>{ct?.destroy(),ct=null,document.documentElement.classList.remove("hud-in-canvas"),u?.destroy(),u=null,x?.destroy(),S?.destroy(),n?.destroy(),s?.destroy(),window.removeEventListener("resize",h),window.removeEventListener("orientationchange",h),d.remove()}}function ii(){to?.(),to=null}function dd(e){ne&&Z(async()=>{const{attachTouchControls:t}=await import("./touch-controls.j7S05nRc.js");return{attachTouchControls:t}},__vite__mapDeps([12,2])).then(({attachTouchControls:t})=>{ne&&(no=t(e,ne.root).destroy)})}function ri(){no?.(),no=null}function ci(){const e=document.createElement("div");e.className="loading",ha(e);const t=document.createElement("div");t.className="loading__title",t.textContent="СЦЕНА";const n=document.createElement("div");n.className="loading__bar loading__bar--unknown";const s=document.createElement("div");s.className="loading__fill",n.append(s);const o=document.createElement("div");return o.className="loading__stage",o.style.opacity="0.8",o.style.fontSize="13px",o.style.textTransform="uppercase",e.append(t,n,o),document.body.append(e),{setStage(a,r){if(o.textContent=a,r===void 0||!Number.isFinite(r)){n.classList.add("loading__bar--unknown");return}n.classList.remove("loading__bar--unknown"),s.style.width=`${Math.round(Math.min(1,Math.max(0,r))*100)}%`},done(){e.remove()},fail(a){n.hidden=!0,o.textContent=`ошибка: ${a}`,setTimeout(()=>e.remove(),4e3)}}}window.addEventListener("keydown",e=>{e.key==="F9"&&location.reload()});export{ec as A,Cd as B,nc as C,Wl as D,oc as E,ic as F,ln as G,Sd as H,pn as I,wd as J,Ar as K,vd as L,Ld as V,Bn as a,Et as b,kd as c,Ke as d,_d as e,xd as f,Mr as g,bd as h,yd as i,Da as j,hd as k,Ys as l,Vl as m,fd as n,gd as o,Ds as p,Ed as q,Sn as r,Js as s,dc as t,it as u,Ma as v,md as w,pd as x,Nd as y,qr as z};
