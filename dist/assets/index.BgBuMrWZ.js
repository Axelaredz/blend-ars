const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/music-player.D9QxtgXB.js","assets/music-audio.DNu4TXPq.js","assets/playcanvas.zR-V_TaA.js","assets/finish-card.DX_SSJbU.js","assets/boot-preset.C3xAZMnG.js","assets/menu-background.rA4ifnQq.js","assets/engine-sound.Ditoa3xE.js","assets/look-gestures.D7GS3G4t.js","assets/engine-bootstrap.92J1uDsM.js","assets/smoke-scene.zwMI0kje.js","assets/vehicle-scene.BdToYMQ9.js","assets/video-recorder.ilLNPhk5.js","assets/touch-controls.JMoLA5fj.js"])))=>i.map(i=>d[i]);
import{_ as Z,E as dt,T as hs,C as Ha,M as on,a as So,b as Vo,S as Va,B as Wa,V as ko,c as bs,d as Ya,e as Ja,f as Ka,G as Co,g as Xa,A as No,F as Lo,P as qa}from"./playcanvas.zR-V_TaA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Ao="blendars-loading",Qa=`
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
`;function Za(){if(document.getElementById(Ao))return;const e=document.createElement("style");e.id=Ao,e.textContent=Qa,document.head.append(e)}const ei="/blend-ars/assets/loader.CPCrwQQc.webp",ti="#282828",Ro="blendars-splash",ni=`
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
    background-color: ${ti};
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
`;function Wo(e){if(!document.getElementById(Ro)){const s=document.createElement("style");s.id=Ro,s.textContent=ni,document.head.append(s)}if(e.querySelector(":scope > .splash-logo")){e.classList.add("splash-host");return}const t=document.createElement("div");t.className="splash-logo";const n=document.createElement("img");n.src=ei,n.alt="Blendars",t.append(n),e.prepend(t),e.classList.add("splash-host")}class si{root;fill;bar;stageEl;bytesEl;errorEl;lastPercent=-1;lastBytesText="";lastStage="";constructor(t,n={}){if(this.root=document.createElement("div"),this.root.className="loading",Za(),Wo(this.root),this.root.setAttribute("role","progressbar"),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","100"),this.root.setAttribute("aria-valuenow","0"),this.root.setAttribute("aria-label","Загрузка"),n.title!==void 0){const o=document.createElement("h1");o.className="loading__title",o.textContent=n.title,this.root.append(o)}this.bar=document.createElement("div"),this.bar.className="loading__bar loading__bar--unknown",this.fill=document.createElement("div"),this.fill.className="loading__fill",this.bar.append(this.fill),this.bar.removeAttribute("aria-valuenow");const s=document.createElement("div");s.className="loading__row",this.stageEl=document.createElement("span"),this.stageEl.className="loading__stage",this.stageEl.textContent="старт",this.bytesEl=document.createElement("span"),this.bytesEl.className="loading__bytes",this.bytesEl.textContent="",s.append(this.stageEl,this.bytesEl),this.errorEl=document.createElement("div"),this.errorEl.className="loading__error",this.errorEl.hidden=!0,this.root.append(this.bar,s,this.errorEl),t.append(this.root)}setStage(t,n){t!==this.lastStage&&(this.stageEl.textContent=t,this.lastStage=t);const s=n!==void 0&&Number.isFinite(n);if(this.bar.classList.toggle("loading__bar--unknown",!s),s){const o=Math.round(Math.min(1,Math.max(0,n))*100);o!==this.lastPercent&&(this.fill.style.width=`${o}%`,this.root.setAttribute("aria-valuenow",String(o)),this.lastPercent=o)}}setError(t){this.bar.hidden=!0,this.stageEl.textContent="ошибка",this.errorEl.textContent=t,this.errorEl.hidden=!1}updateFromResources(){if(typeof performance.getEntriesByType!="function")return;const t=performance.getEntriesByType("resource");let n=0,s=0;for(const a of t)a.name.indexOf(location.origin)===0&&(n+=a.encodedBodySize||a.transferSize||0,s=Math.max(s,a.responseEnd||0));if(n<=0)return;const o=`${oi(n)} загружено`;o!==this.lastBytesText&&(this.bytesEl.textContent=o,this.lastBytesText=o)}hide(){return this.root.setAttribute("aria-hidden","true"),this.root.classList.add("hidden"),new Promise(t=>{let n=!1;const s=()=>{n||(n=!0,this.root.remove(),t())};this.root.addEventListener("transitionend",s,{once:!0}),setTimeout(s,400)})}}function oi(e){return e<1024?`${e} Б`:e<1024*1024?`${(e/1024).toFixed(0)} КБ`:`${(e/(1024*1024)).toFixed(1)} МБ`}const Yo="/blend-ars/assets/LilitaOne-Regular.C8J_njg9.ttf",ai=new URL("/blend-ars/assets/fullscreen.C4xFj3BF.svg",import.meta.url).href,ii=new URL("/blend-ars/assets/fullscreen-exit.D85sBYy_.svg",import.meta.url).href,ri=new URL("/blend-ars/assets/info.BdEiL0Sf.svg",import.meta.url).href,ci=new URL("/blend-ars/assets/book-open.CLVm05VY.svg",import.meta.url).href,To=new URL("/blend-ars/assets/gear_six.TA3VDyxO.svg",import.meta.url).href,li=new URL("/blend-ars/assets/camera-rotate.D-uiZS3m.svg",import.meta.url).href,di=new URL("/blend-ars/assets/music-note.BpgtDFsX.svg",import.meta.url).href,ui=new URL("/blend-ars/assets/package.BDtnf6Kx.svg",import.meta.url).href,mi=new URL("/blend-ars/assets/flag.CeS1AlXY.svg",import.meta.url).href,pi=new URL("/blend-ars/assets/garage.D_BJEZuB.svg",import.meta.url).href,fi=new URL("/blend-ars/assets/storefront.e4K1ebmi.svg",import.meta.url).href,hi=new URL("/blend-ars/assets/truck.rvSKQmy5.svg",import.meta.url).href,bi=new URL("/blend-ars/assets/coupe.DdXCwqWg.svg",import.meta.url).href,gi=new URL("/blend-ars/assets/x.D2ii0gML.svg",import.meta.url).href,xi=new URL("/blend-ars/assets/list.DXUiLcf_.svg",import.meta.url).href,_i=new URL("/blend-ars/assets/triangle-left.DPdzCyZ0.svg",import.meta.url).href,Nl=new URL("/blend-ars/assets/stop-square.Cvj1GcXd.svg",import.meta.url).href,Ll=new URL("/blend-ars/assets/arrows_clockwise.Toz6NZFk.svg",import.meta.url).href,Jo="/blend-ars/assets/ui-click.DcT3uYBZ.wav",yi={click:1,toggle:1.22,window:.86},wi=.5;let Ko=()=>.5,Ne=null,yn=null,ct=null,Mo=!1;function vi(e){Ko=e}function Ei(){if(Mo)return;Mo=!0;const e=window.AudioContext??window.webkitAudioContext;if(e!==void 0){try{Ne=new e}catch{Ne=null;return}fetch(Jo).then(t=>t.arrayBuffer()).then(t=>Ne?.decodeAudioData(t)).then(t=>{yn=t??null}).catch(()=>{yn=null})}}function ge(e="click"){const t=wi*Ko();if(t>0){if(yn!==null&&Ne!==null){Ne.state==="suspended"&&Ne.resume().catch(()=>{});const n=Ne.createBufferSource();n.buffer=yn,n.playbackRate.value=yi[e];const s=Ne.createGain();s.gain.value=t,n.connect(s).connect(Ne.destination),n.start();return}ct===null&&(ct=new Audio(Jo),ct.preload="auto"),ct.volume=t,ct.currentTime=0,ct.play().catch(()=>{})}}function et(e){const t=n=>{if(!n.isPrimary||n.pointerType==="mouse"&&n.button!==0)return;const s=n.target;if(!(s instanceof Element)||s.closest('[disabled], [aria-disabled="true"]')||s.closest('input[type="range"]'))return;if(s.closest('input[type="checkbox"], .modes__card, [role="switch"]')){ge("toggle");return}s.closest('button, .mitem, [role="button"], .dlg__close')&&ge("click")};return e.addEventListener("pointerdown",t,!0),()=>e.removeEventListener("pointerdown",t,!0)}function un(e){const t=n=>{const s=n.target;s instanceof HTMLInputElement&&s.type==="range"&&ge("click")};return e.addEventListener("change",t,!0),()=>e.removeEventListener("change",t,!0)}const Si=`
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
`;function Ln(e){const t=document.createElement("div");if(t.className="dlg",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",e.title),!document.getElementById("dlg-style")){const i=document.createElement("style");i.id="dlg-style",i.textContent=Si,document.head.append(i)}const n=document.createElement("div");n.className="dlg__panel";const s=document.createElement("h2");s.className="dlg__title",s.textContent=e.title;const o=document.createElement("div");return o.className="dlg__body",o.append(e.body),n.append(s,o),t.append(n),document.body.append(t),{root:t,open(){t.hidden=!1},close(){t.hidden=!0},destroy(){t.remove()}}}const ki=[{body:"truck",title:"Джип",note:"Грузовик. Родное шасси, грузовая физика.",icon:hi},{body:"maserati",title:"Мазерати",note:"GT3-обвес на том же шасси.",icon:bi}],Ci=`
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
`;function Ni(e){if(!document.getElementById("game-modes-style")){const o=document.createElement("style");o.id="game-modes-style",o.textContent=Ci,document.head.append(o)}const t=document.createElement("div");t.className="modes";const n=ki.map(o=>{const a=document.createElement("button");a.className="modes__card",a.type="button",a.dataset.body=o.body;const i=document.createElement("span");i.className="modes__art",i.style.setProperty("--modes-icon",`url(${JSON.stringify(o.icon)})`);const c=document.createElement("span");c.className="modes__title",c.textContent=o.title;const l=document.createElement("p");return l.className="modes__note",l.textContent=o.note,a.append(i,c,l),a.addEventListener("pointerdown",f=>{f.preventDefault(),!a.disabled&&e(o.body)}),t.append(a),a}),s=Ln({title:"Режимы игры",body:t});return{dialog:s,open(){s.open()},setBusy(o){for(const a of n)a.disabled=o},destroy(){s.destroy()}}}const Li={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:8,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:6,fill:1.05,rimLeft:6.15,rimRight:6.3,spot:7.05,fog:.005,gamma:1,gammaStrength:.5,toneMapping:2,sunElevation:15,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:.3}},shadows:{val:{cascades:4,distribution:.95,blend:.12,distance:320,resolution:4096,bias:0,normalBias:.05}},postfx:{on:!0,val:{bloom:.1,bloomBlur:16,bloomThreshold:.2,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:.95,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:1,fps:0,msaa:!0}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},Ai={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:4,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:5,fill:.3,rimLeft:.5,rimRight:.5,spot:2,fog:.0035,gamma:0,gammaStrength:1.2,toneMapping:2,sunElevation:9,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:1}},shadows:{val:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3}},postfx:{on:!1,val:{bloom:0,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.48,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:.5,fps:30,msaa:!1}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},Xo="blendars.presets.v1",qo="blendars-settings",Qo=1;let ie={active:null,list:[]},Po=!1;function Ie(){if(Po)return ie;Po=!0;try{const e=localStorage.getItem(Xo);if(!e)return ie;const t=JSON.parse(e);if(!t||typeof t!="object")return ie;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=Ri(o);a&&s.push(a)}ie={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ie}function Ri(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Nt(){try{localStorage.setItem(Xo,JSON.stringify(ie))}catch{}}function Rs(){return Ie().list.slice().sort((t,n)=>n.created-t.created)}function wn(){return Ie().active}function Ti(){const e=Ie();return e.active?e.list.find(t=>t.id===e.active)??null:null}function Ts(e){Ie(),ie.active=e,Nt()}function ut(e,t,n=Date.now()){Ie();const s={id:Di(n),name:e.trim()||Ue(new Date(n)),created:n,data:t};return ie.list.push(s),ie.active=s.id,Nt(),s}function Mi(e,t){const s=Ie().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,Nt(),!0):!1}function Zo(e,t){const s=Ie().list.find(o=>o.id===e);return s?(s.data=t,Nt(),!0):!1}function Pi(e){Ie();const t=ie.list.findIndex(n=>n.id===e);t<0||(ie.list.splice(t,1),ie.active===e&&(ie.active=null),Nt())}function Ue(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function Ii(){Ie(),ie={active:null,list:[]},Nt()}function Fi(e){const t={app:qo,version:Qo,name:e.name,created:e.created,data:e.data},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`${Bi(e.name)}.json`,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function $i(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==qo||n.version!==Qo||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function Bi(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function Di(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const ea="blendars.physics-presets.v1",Oi="blendars-physics",ji=1;let Le={active:null,list:[]},Io=!1;function An(){if(Io)return Le;Io=!0;try{const e=localStorage.getItem(ea);if(!e)return Le;const t=JSON.parse(e);if(!t||typeof t!="object")return Le;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=Ui(o);a&&s.push(a)}Le={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return Le}function Ui(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function ta(){try{localStorage.setItem(ea,JSON.stringify(Le))}catch{}}function Gi(){return An().list.slice().sort((e,t)=>t.created-e.created)}function zi(){return An().active}function Hi(e){An(),Le.active=e,ta()}function gs(e,t,n=Date.now()){An();const s={id:Yi(n),name:e.trim()||Vi(new Date(n)),created:n,data:t};return Le.list.push(s),Le.active=s.id,ta(),s}function Vi(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function Wi(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==Oi||n.version!==ji||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function Yi(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Gs="blendars.sound-effects.v3",zs="blendars.sound-effects.v2",na=[["engine","Двигатель"],["road","Шум качения"],["skid","Скрежет шин"],["shift","Переключение передач"],["impact","Удары кузова"],["landing","Посадка на колёса"],["music","Фоновая музыка"],["uiClick","Клики меню"]],sa=na.map(([e])=>e),oa={engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},Ji={engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1},_e={...oa},ue={...Ji},Ve={engineTorque:{label:"Момент двигателя (Н·м)",def:520,off:520,min:200,max:900,decimals:0},brakeForce:{label:"Сила тормозов (Н)",def:6500,off:6500,min:2e3,max:12e3,decimals:0},mass:{label:"Масса кузова (кг)",def:2200,off:2200,min:1200,max:3500,decimals:0},engineBraking:{label:"Торможение двигателем",def:.15,off:.07,min:0,max:.4,decimals:2},dragForce:{label:"Сопротивление воздуха",def:1.75,off:0,min:0,max:4,decimals:2},rollingResistance:{label:"Сопротивление качения",def:.02,off:0,min:0,max:.06,decimals:3},lateralGripAssist:{label:"Помощь бокового сцепа",def:1.5,off:0,min:0,max:6,decimals:1},wheelGrip:{label:"Сцепление колёс",def:4,off:2.7,min:1,max:8,decimals:1},rollInfluence:{label:"Крен (перенос нагрузки)",def:.15,off:.08,min:0,max:.3,decimals:2},suspStiffness:{label:"Жёсткость пружины",def:20,off:20,min:5,max:60,decimals:1},suspDamping:{label:"Демпфер (распускание)",def:2.3,off:2.3,min:.5,max:8,decimals:2},suspCompression:{label:"Демпфер (сжатие)",def:4.4,off:4.4,min:.5,max:12,decimals:2},suspTravel:{label:"Ход подвески",def:.35,off:.35,min:.1,max:.8,decimals:2},suspForce:{label:"Предел силы пружины (Н)",def:2e4,off:2e4,min:5e3,max:6e4,decimals:0},suspRelVel:{label:"Демпфер и скорость кузова",def:1,off:1,min:0,max:2,decimals:2},antiRoll:{label:"Стабилизатор (рычаг)",def:0,off:0,min:0,max:1.5,decimals:2},inertiaScale:{label:"Инерция поворота (yaw)",def:1.3,off:1,min:.5,max:2.5,decimals:2},highSpeedLock:{label:"Спад угла руля (доля)",def:.55,off:.4,min:.2,max:1,decimals:2},highSpeedLockAt:{label:"Скорость спада руля",def:100,off:80,min:50,max:150,decimals:0,unit:"kmh"},camTurnRate:{label:"Камера: скорость поворота",def:3.5,off:2.2,min:1,max:6,decimals:1},camFollowRate:{label:"Камера: сглаживание",def:11,off:9,min:4,max:20,decimals:0},skidThreshold:{label:"Порог звука юза",def:.15,off:.3,min:0,max:.5,decimals:2}},pt=Object.keys(Ve),Hs="blendars.physics.v1",ae={},re={};Ki();function Ki(){for(const e of pt)ae[e]=!0,re[e]=Ve[e].def}function Xi(){try{const e=localStorage.getItem(Hs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:null,o=typeof n.val=="object"&&n.val!==null?n.val:null;for(const a of pt){const i=Ve[a],c=s?.[a];typeof c=="boolean"&&(ae[a]=c);const l=o?.[a];typeof l=="number"&&Number.isFinite(l)&&(re[a]=Math.min(i.max,Math.max(i.min,l)))}}catch{}}function Dt(){try{localStorage.setItem(Hs,JSON.stringify({on:ae,val:re}))}catch{}}function Al(e){return ae[e]?re[e]:Ve[e].off}const mn=[];function Rl(e){return mn.push(e),()=>{const t=mn.indexOf(e);t>=0&&mn.splice(t,1)}}const pn=[];function ee(){for(const e of pn)e()}function qi(e){return pn.push(e),()=>{const t=pn.indexOf(e);t>=0&&pn.splice(t,1)}}function Ot(){for(const e of mn)e();ee()}function xs(e){const t=Ve[e],n=re[e];return t.unit==="kmh"?`${Math.round(n)} км/ч`:n.toFixed(t.decimals)}const aa=[0,1,2,3,4],Qi=["линейный","филмик","ACES","нейтральный","без тонмаппинга"],Te={exposure:{label:"Экспозиция кадра",def:.5,min:.5,max:10,decimals:1},key:{label:"Яркость солнца",def:1,min:0,max:10,decimals:2},fill:{label:"Заполняющий свет",def:.3,min:0,max:15,decimals:2},rimLeft:{label:"Контровой слева",def:.5,min:0,max:15,decimals:2},rimRight:{label:"Контровой справа",def:.5,min:0,max:15,decimals:2},spot:{label:"Верхний софтбокс",def:2,min:0,max:15,decimals:2},fog:{label:"Туман задника",def:.0035,min:0,max:.05,decimals:4},gamma:{label:"Гамма-коррекция (sRGB)",def:1,min:0,max:1,decimals:0,options:[0,1]},gammaStrength:{label:"Сила гаммы",def:1.2,min:.5,max:3,decimals:2},toneMapping:{label:"Тонмаппинг",def:3,min:0,max:4,decimals:0,options:aa},sunElevation:{label:"Высота солнца",def:34,min:-10,max:90,decimals:0},sunAzimuth:{label:"Азимут солнца",def:135,min:0,max:360,decimals:0},turbidity:{label:"Мутность неба",def:3,min:1,max:10,decimals:2},rayleigh:{label:"Рэлеевское рассеяние",def:2.2,min:0,max:5,decimals:2},mieCoefficient:{label:"Ми-рассеяние",def:.005,min:0,max:.05,decimals:3},mieDirectionalG:{label:"Анизотропия Ми",def:.8,min:0,max:.99,decimals:2},skyLuminance:{label:"Яркость неба",def:1,min:0,max:5,decimals:2}},ft=Object.keys(Te),Vs="blendars.lighting.v1",ce={};Zi();er();function Zi(){for(const e of ft)ce[e]=Te[e].def}function er(){try{const e=localStorage.getItem(Vs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of ft){const a=Te[o],i=s?.[o];typeof i=="number"&&Number.isFinite(i)&&(ce[o]=Math.min(a.max,Math.max(a.min,i)))}}catch{}}function fn(){try{localStorage.setItem(Vs,JSON.stringify({val:ce}))}catch{}}function tr(e){return ce[e]}function Tl(){return 2**(tr("gammaStrength")-1)}const hn=[];function Ml(e){return hn.push(e),()=>{const t=hn.indexOf(e);t>=0&&hn.splice(t,1)}}function bn(){for(const e of hn)e();ee()}function Fo(e){const t=Te[e];if(t.options){const n=t.options.indexOf(ce[e]);return n>=0?n:0}return Math.round((ce[e]-t.min)/(t.max-t.min)*100)}function nr(e,t){const n=Te[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function _s(e){const t=Te[e],n=ce[e];return t.options&&t.options.length===2&&t.options[1]===1?n>=1?"вкл":"выкл":e==="toneMapping"?Qi[aa.indexOf(n)]??n.toFixed(t.decimals):n.toFixed(t.decimals)}const sr=[512,1024,2048,4096],ye={cascades:{label:"Каскадов",def:2,min:1,max:4,decimals:0,options:[1,2,3,4]},distribution:{label:"Раскладка каскадов",def:.7,min:0,max:1,decimals:2},blend:{label:"Бесшовность каскадов",def:.12,min:0,max:.3,decimals:2},distance:{label:"Дальность теней",def:320,min:50,max:500,decimals:0},resolution:{label:"Разрешение атласа",def:4096,min:0,max:3,decimals:0,options:sr},bias:{label:"Смещение тени",def:0,min:0,max:1,decimals:2},normalBias:{label:"Смещение по нормали",def:0,min:0,max:.5,decimals:2}},ze=Object.keys(ye),Ws="blendars.shadows.v1",Q={};or();ar();function or(){for(const e of ze)Q[e]=ye[e].def}function ar(){try{const e=localStorage.getItem(Ws);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of ze){const a=ye[o],i=s?.[o];if(!(typeof i!="number"||!Number.isFinite(i))){if(a.options){const l=a.options[i]===i?i:a.options.indexOf(i);l>=0&&l<a.options.length&&(Q[o]=Number(a.options[l]));continue}Q[o]=Math.min(a.max,Math.max(a.min,i))}}}catch{}}function ht(){try{localStorage.setItem(Ws,JSON.stringify({val:Q}))}catch{}}function Pl(e){return Q[e]}const gn=[];function Il(e){return gn.push(e),()=>{const t=gn.indexOf(e);t>=0&&gn.splice(t,1)}}function jt(){for(const e of gn)e();ee()}function ys(e,t){const n=ye[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function ir(e,t){const n=ye[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function ws(e){const t=ye[e];return e==="distance"?`${Math.round(Q[e])} м`:Q[e].toFixed(t.decimals)}const Me={bloom:{label:"Ореол (bloom)",def:.05,min:0,max:.1,decimals:3},bloomBlur:{label:"Мягкость ореола",def:8,min:1,max:16,decimals:0,options:[1,2,4,8,16]},bloomThreshold:{label:"Порог ореола",def:.6,min:0,max:2,decimals:2},vignette:{label:"Виньетка",def:0,min:0,max:1,decimals:2},vignetteInner:{label:"Виньетка: начало",def:0,min:0,max:1,decimals:2},vignetteOuter:{label:"Виньетка: край",def:1.25,min:.5,max:2,decimals:2},vignetteCurvature:{label:"Виньетка: кромка",def:.5,min:.2,max:1,decimals:2},taa:{label:"Временное сглаживание",def:0,min:0,max:1,decimals:0,options:[0,1]},taaJitter:{label:"Сглаживание: джиттер",def:0,min:0,max:1,decimals:2},dof:{label:"Глубина резкости",def:1,min:0,max:1,decimals:0,options:[0,1]},dofFocus:{label:"Фокус (м)",def:1,min:1,max:60,decimals:1},dofRange:{label:"Зона фокуса (м)",def:40,min:1,max:40,decimals:1},dofRadius:{label:"Сила размытия",def:1,min:1,max:8,decimals:1},dofNear:{label:"Размывать передний план",def:1,min:0,max:1,decimals:0,options:[0,1]},grading:{label:"Цветокоррекция",def:1,min:0,max:1,decimals:0,options:[0,1]},brightness:{label:"Яркость",def:1,min:.5,max:1.5,decimals:2},contrast:{label:"Контраст",def:1,min:.5,max:1.5,decimals:2},saturation:{label:"Насыщенность",def:1,min:0,max:2,decimals:2},fringing:{label:"Аберрация",def:0,min:0,max:100,decimals:0},sharpness:{label:"Резкость",def:0,min:0,max:1,decimals:2}},He=Object.keys(Me),Ys="blendars.postfx.v1",Js="blendars.postfx.on",J={},ia=!0;let Pe=ia;rr();cr();function rr(){for(const e of He)J[e]=Me[e].def;Pe=ia}function cr(){try{const e=localStorage.getItem(Ys);if(e){const n=JSON.parse(e);if(n&&typeof n=="object"){const s=n,o=typeof s.val=="object"&&s.val!==null?s.val:null;for(const a of He){const i=Me[a],c=o?.[a];typeof c=="number"&&Number.isFinite(c)&&(J[a]=Math.min(i.max,Math.max(i.min,c)))}}}const t=localStorage.getItem(Js);t!==null&&(Pe=t!=="0")}catch{}}function Ae(){try{localStorage.setItem(Ys,JSON.stringify({val:J})),localStorage.setItem(Js,Pe?"1":"0")}catch{}}function vs(e){return J[e]}function an(){return Pe}function Es(e){Pe!==e&&(Pe=e,Ae(),Ge())}const Ks="blendars.hud.v1";let gt=!0,We=1280;const me=[],Ms=["fps","cpu","draw","vram"],lr={fps:"Частота кадра (FPS и мс)",cpu:"Загрузка CPU (обновление / рендер / физика)",draw:"Вызовы отрисовки и шейдеры",vram:"Видеопамять и разрешение"};let xt={fps:!0,cpu:!0,draw:!0,vram:!0};function dr(){try{const e=localStorage.getItem(Ks);if(!e)return;const t=JSON.parse(e);if(t&&typeof t=="object"){const n=t.on;if(n&&typeof n=="object"){const s=n.stats;typeof s=="number"&&(gt=s!==0);const o=n.record;(o===1280||o===1920||o==="window")&&(We=o);const a=n.touch;typeof a=="number"&&(Gt=a!==0)}}}catch{}}const Xs="blendars.stats.v1";function ur(){try{const e=localStorage.getItem(Xs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s={...xt};for(const o of Ms){const a=n[o];typeof a=="boolean"&&(s[o]=a)}xt=s}catch{}}function mr(){try{localStorage.setItem(Xs,JSON.stringify(xt))}catch{}}function qs(){try{localStorage.setItem(Ks,JSON.stringify({on:{stats:gt?1:0,record:We,touch:Gt?1:0}}))}catch{}}function vn(){return gt}function ra(e){if(gt!==e){gt=e,qs();for(const t of me)t();ee()}}function be(e){return xt[e]}function pr(e){return lr[e]}function fr(e,t){if(xt[e]!==t){xt[e]=t,mr();for(const n of me)n();ee()}}function hr(){return We}function Ps(e){if(!(e!==1280&&e!==1920&&e!=="window")&&We!==e){We=e,qs();for(const t of me)t();ee()}}function br(e){const t=We==="window"?e:We;return!Number.isFinite(t)||t<=0?1280:Math.round(t)}function ca(e){return me.push(e),()=>{const t=me.indexOf(e);t>=0&&me.splice(t,1)}}let gr="full";function xr(){return gr}let Gt=!0;function _r(){return Gt}function yr(e){if(Gt!==e){Gt=e,qs();for(const t of me)t();ee()}}const la="blendars.touch.v1";let zt=1,Ht=.85,Vt="split",Wt=!1;function wr(){try{const e=localStorage.getItem(la);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t;typeof n.scale=="number"&&n.scale>=.6&&n.scale<=2&&(zt=n.scale),typeof n.opacity=="number"&&n.opacity>=.25&&n.opacity<=1&&(Ht=n.opacity),(n.layout==="split"||n.layout==="left"||n.layout==="right")&&(Vt=n.layout),typeof n.swap=="boolean"&&(Wt=n.swap)}catch{}}function Rn(){try{localStorage.setItem(la,JSON.stringify({scale:zt,opacity:Ht,layout:Vt,swap:Wt}))}catch{}}function vr(){return zt}function Er(e){const t=Math.min(Math.max(e,.6),2);if(zt!==t){zt=t,Rn();for(const n of me)n();ee()}}function Sr(){return Ht}function kr(e){const t=Math.min(Math.max(e,.25),1);if(Ht!==t){Ht=t,Rn();for(const n of me)n();ee()}}function Cr(){return Vt}function Nr(e){if(Vt!==e){Vt=e,Rn();for(const t of me)t();ee()}}function Lr(){return Wt}function Ar(e){if(Wt!==e){Wt=e,Rn();for(const t of me)t();ee()}}dr();ur();wr();const xn=[];function Fl(e){return xn.push(e),()=>{const t=xn.indexOf(e);t>=0&&xn.splice(t,1)}}function Ge(){for(const e of xn)e();ee()}function $o(e,t){const n=Me[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function Rr(e,t){const n=Me[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function Ss(e){const t=J[e],n=Me[e];return n.options&&n.options.length===2&&n.options[1]===1?t>=1?"вкл":"выкл":t.toFixed(n.decimals)}Tr();Xi();function Tr(){try{const e=localStorage.getItem(Gs)??localStorage.getItem(zs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:n,o=typeof n.vol=="object"&&n.vol!==null?n.vol:null;for(const a of Object.keys(oa)){const i=s[a];typeof i=="boolean"&&(_e[a]=i);const c=o?.[a];typeof c=="number"&&Number.isFinite(c)&&(ue[a]=Math.min(1,Math.max(0,c)))}}catch{}}function En(){try{localStorage.setItem(Gs,JSON.stringify({on:_e,vol:ue})),localStorage.removeItem(zs)}catch{}}function Mr(e){return _e[e]?ue[e]:0}function $l(e){return ue[e]}function Bl(e,t){const n=Math.min(1,Math.max(0,t));ue[e]!==n&&(ue[e]=n,En(),ee())}const Pr=`@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JSON.stringify(Yo)}) format('truetype');
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
`;function bt(){return{version:1,physics:{on:{...ae},val:{...re}},lighting:{val:{...ce}},shadows:{val:{...Q}},postfx:{on:Pe,val:{...J}},sound:{on:{..._e},vol:{...ue}},hud:{on:{stats:gt,record:We}},graphics:{val:{scale:_t,fps:yt,msaa:Ye}},recording:{val:{fps:wt,quality:vt,keyFrame:Et,sound:St}}}}function Ir(){return{on:{...ae},val:{...re}}}let Is=!1;function Fr(){return Is}function mt(e){const t=[];if(!e||typeof e!="object")return{applied:t};Is=!0;try{return $r(e,t)}finally{Is=!1}}function $r(e,t){const n=e,s=(x,d,u)=>typeof x=="number"&&Number.isFinite(x)?Math.min(u,Math.max(d,x)):null,o=x=>x&&typeof x=="object"?x:null,a=x=>x&&typeof x=="object"?x:null,i=x=>x&&typeof x=="object"?x:null,c=n.physics&&typeof n.physics=="object"?n.physics:null;if(c){const x=a(c.on),d=o(c.val);let u=!1;for(const m of pt){const y=Ve[m];x&&typeof x[m]=="boolean"&&(ae[m]=x[m],u=!0);const p=d?s(d[m],y.min,y.max):null;p!==null&&(re[m]=p,u=!0)}u&&(Dt(),Ot(),t.push("физика"))}const l=o(n.lighting&&typeof n.lighting=="object"?n.lighting.val:null);if(l){let x=!1;for(const d of ft){const u=Te[d],m=s(l[d],u.min,u.max);m!==null&&(ce[d]=m,x=!0)}x&&(fn(),bn(),t.push("свет"))}const f=o(n.shadows&&typeof n.shadows=="object"?n.shadows.val:null);if(f){let x=!1;for(const d of ze){const u=ye[d],m=f[d];if(u.options){const k=u.options[m]===m?m:u.options.indexOf(m);k>=0&&k<u.options.length&&(Q[d]=Number(u.options[k]),x=!0);continue}const y=s(m,u.min,u.max);y!==null&&(Q[d]=y,x=!0)}x&&(ht(),jt(),t.push("тени"))}const v=n.postfx&&typeof n.postfx=="object"?n.postfx:null;if(v){let x=!1;typeof v.on=="boolean"&&(Pe=v.on,x=!0);const d=o(v.val);if(d)for(const u of He){const m=Me[u],y=d[u];if(m.options){const k=m.options.indexOf(y);k>=0&&k<m.options.length&&(J[u]=Number(m.options[k]),x=!0);continue}const p=s(y,m.min,m.max);p!==null&&(J[u]=p,x=!0)}x&&(Ae(),Ge(),t.push("Post FX"))}const h=n.sound&&typeof n.sound=="object"?n.sound:null;if(h){const x=a(h.on),d=o(h.vol);let u=!1;for(const m of sa){x&&typeof x[m]=="boolean"&&(_e[m]=x[m],u=!0);const y=d?s(d[m],0,1):null;y!==null&&(ue[m]=y,u=!0)}u&&(En(),t.push("звук"))}const g=n.hud&&typeof n.hud=="object"?n.hud:null,C=g&&typeof g.on=="object"?g.on:null;if(C&&typeof C.stats=="boolean"){ra(C.stats);const x=C.record;(x===1280||x===1920||x==="window")&&Ps(x),t.push("интерфейс")}const E=i(n.graphics&&typeof n.graphics=="object"?n.graphics.val:null);if(E){let x=!1;const d=E.scale;(d===.5||d===.75||d===1)&&(eo(d),x=!0);const u=E.fps;(u===0||u===30||u===60||u===120)&&(to(u),x=!0),typeof E.msaa=="boolean"&&(Yt(E.msaa),x=!0),J.taa>0&&Ye&&(Yt(!1),x=!0),x&&(Qt(),Tn(),t.push("графика"))}const S=i(n.recording&&typeof n.recording=="object"?n.recording.val:null);if(S){let x=!1;const d=S.fps;(d===24||d===30||d===60)&&(xa(d),x=!0);const u=S.quality;(u==="low"||u==="medium"||u==="high")&&(_a(u),x=!0);const m=S.keyFrame;(m===1||m===2||m===4)&&(ya(m),x=!0),typeof S.sound=="boolean"&&(wa(S.sound),x=!0),x&&(Zt(),en(),t.push("запись"))}return{applied:t}}const Qs="blendars.graphics.v1";let _t=1,yt=0,Ye=!0;const Zs="blendars.gfx-preset.v1",Br={phone:{label:"Телефон",graphics:{scale:.5,fps:30,msaa:!1},shadows:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3},postfxOn:!1,postfx:{bloom:0,vignette:0,fringing:0,sharpness:0,grading:0,taa:0,taaJitter:0}},balanced:{label:"Оптимальный",graphics:{scale:.75,fps:60,msaa:!0},shadows:{cascades:2,distribution:.7,blend:.12,distance:220,resolution:2048,bias:.7,normalBias:.4},postfxOn:!0,postfx:{bloom:.04,bloomBlur:8,bloomThreshold:.6,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.5,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:.25}},ultra:{label:"Ультра",graphics:{scale:1,fps:0,msaa:!0},shadows:{cascades:4,distribution:.7,blend:.12,distance:320,resolution:4096,bias:1,normalBias:.5},postfxOn:!0,postfx:{bloom:.06,bloomBlur:8,bloomThreshold:0,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:1,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:.25}}};let qt="phone";function Dr(){const e=window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window,n=navigator.hardwareConcurrency??4,s=navigator.deviceMemory??4,o=Math.min(window.screen.width,window.screen.height)<768;return(e||t)&&(n<=4||s<=4||o)}function Or(){return qt}function da(){try{localStorage.setItem(Zs,qt)}catch{}}function jr(){try{const e=localStorage.getItem(Zs);(e==="phone"||e==="balanced"||e==="ultra")&&(qt=e)}catch{}}function ua(e){const t=Br[e];qt=e,da(),eo(t.graphics.scale),to(t.graphics.fps);const n=t.postfx.taa??0;Yt(n>0?!1:t.graphics.msaa);for(const s of ze)Q[s]=t.shadows[s]??ye[s].def;ht(),jt(),Pe=t.postfxOn;for(const s of He){const o=t.postfx[s];typeof o=="number"&&(J[s]=o)}Ae(),Ge()}const _n=[];function Ur(){try{const e=localStorage.getItem(Qs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.scale===.5||s.scale===.75||s.scale===1)&&(_t=s.scale),(s.fps===0||s.fps===30||s.fps===60||s.fps===120)&&(yt=s.fps),typeof s.msaa=="boolean"&&(Ye=s.msaa)}catch{}}function Qt(){try{localStorage.setItem(Qs,JSON.stringify({val:{scale:_t,fps:yt,msaa:Ye}}))}catch{}}function Tn(){for(const e of _n)e();ee()}function ma(){return _t}function pa(){return yt}function qe(){return Ye}const Gr=4;function Dl(){return Ye?Gr:1}function eo(e){_t!==e&&(_t=e,Qt(),Tn())}function to(e){yt!==e&&(yt=e,Qt(),Tn())}function Yt(e){Ye!==e&&(Ye=e,Qt(),Tn())}function fa(e){return _n.push(e),()=>{const t=_n.indexOf(e);t>=0&&_n.splice(t,1)}}Ur();jr();const no="blendars.recording.v1";let wt=30,vt="high",Et=2,St=!0;const zr=[];function Hr(){try{const e=localStorage.getItem(no);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.fps===24||s.fps===30||s.fps===60)&&(wt=s.fps),(s.quality==="low"||s.quality==="medium"||s.quality==="high")&&(vt=s.quality),(s.keyFrame===1||s.keyFrame===2||s.keyFrame===4)&&(Et=s.keyFrame),typeof s.sound=="boolean"&&(St=s.sound)}catch{}}function Zt(){try{localStorage.setItem(no,JSON.stringify({val:{fps:wt,quality:vt,keyFrame:Et,sound:St}}))}catch{}}function en(){for(const e of zr)e();ee()}function ha(){return wt}function ba(){return vt}function ga(){return Et}function Fs(){return St}function xa(e){wt!==e&&(wt=e,Zt(),en())}function _a(e){vt!==e&&(vt=e,Zt(),en())}function ya(e){Et!==e&&(Et=e,Zt(),en())}function wa(e){St!==e&&(St=e,Zt(),en())}Hr();function Vr(){const e=Ti();if(e){const l=mt(e.data);l.applied.length>0&&console.info(`[settings] применён пресет «${e.name}»: ${l.applied.join(", ")}`);return}let t=!1;try{t=!!(localStorage.getItem(Gs)??localStorage.getItem(zs)??localStorage.getItem(Hs)??localStorage.getItem(Vs)??localStorage.getItem(Ws)??localStorage.getItem(Ys)??localStorage.getItem(Js)??localStorage.getItem(Ks)??localStorage.getItem(Xs)??localStorage.getItem(Qs)??localStorage.getItem(no)??localStorage.getItem(Zs))}catch{t=!0}if(t)return;const n=Dr();qt=n?"phone":"ultra",da(),Qt(),ht(),Ae();const o=bt();ua("balanced");const a=bt();mt(n?Ai:Li);const i=bt();mt(o),ut("По умолчанию",o),ut("Оптимальный",a),ut(n?"Телефон":"Ультра",i);const c=Rs().find(l=>l.name===(n?"Телефон":"Ультра"));Ts(c?c.id:null),console.info(`[settings] сохранённых настроек нет — созданы пресеты «По умолчанию», «Оптимальный», «${n?"Телефон":"Ультра"}» (активен «${n?"Телефон":"Ультра"}»)`)}Vr();function Wr(){const e=document.createElement("div");e.className="settings",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Настройки");const t=document.createElement("style");t.textContent=Pr;const n=document.createElement("div");n.className="settings__panel";const s=document.createElement("h2");s.className="settings__title",s.textContent="Настройки";const o=document.createElement("p");o.className="settings__hint",o.textContent="Галочка — эффект включён, ползунок — его громкость. Выбор сохраняется в браузере и действует сразу.",o.id="settings-hint",e.setAttribute("aria-describedby",o.id);const a=document.createElement("div");a.className="settings__tabs",a.setAttribute("role","tablist");const i=document.createElement("button");i.className="settings__tab settings__tab--on",i.type="button",i.textContent="Звук",i.setAttribute("role","tab"),i.setAttribute("aria-selected","true");const c=document.createElement("button");c.className="settings__tab",c.type="button",c.textContent="Физика",c.setAttribute("role","tab"),c.setAttribute("aria-selected","false");const l=document.createElement("button");l.className="settings__tab",l.type="button",l.textContent="Освещение",l.setAttribute("role","tab"),l.setAttribute("aria-selected","false");const f=document.createElement("button");f.className="settings__tab",f.type="button",f.textContent="Тени",f.setAttribute("role","tab"),f.setAttribute("aria-selected","false");const v=document.createElement("button");v.className="settings__tab",v.type="button",v.textContent="Post FX",v.setAttribute("role","tab"),v.setAttribute("aria-selected","false");const h=document.createElement("button");h.className="settings__tab",h.type="button",h.textContent="Интерфейс",h.setAttribute("role","tab"),h.setAttribute("aria-selected","false");const g=document.createElement("button");g.className="settings__tab",g.type="button",g.textContent="Управление",g.setAttribute("role","tab"),g.setAttribute("aria-selected","false");const C=document.createElement("button");C.className="settings__tab",C.type="button",C.textContent="Пресеты",C.setAttribute("role","tab"),C.setAttribute("aria-selected","false");const E=document.createElement("button");E.className="settings__tab",E.type="button",E.textContent="Графика",E.setAttribute("role","tab"),E.setAttribute("aria-selected","false");const S=document.createElement("button");S.className="settings__tab",S.type="button",S.textContent="Запись",S.setAttribute("role","tab"),S.setAttribute("aria-selected","false"),a.append(i,c,l,f,v,h,g,E,S,C);const x=r=>{const _=[i,c,l,f,v,h,g,E,S,C];for(let L=0;L<_.length;L++){const I=_[L];if(!I)continue;const j=L===r;I.classList.toggle("settings__tab--on",j),I.setAttribute("aria-selected",String(j))}d.hidden=r!==0,y.hidden=r!==1,G.hidden=r!==2,K.hidden=r!==3,fe.hidden=r!==4,$e.hidden=r!==5,he.hidden=r!==6,ot.hidden=r!==7,Xe.hidden=r!==8,rt.hidden=r!==9};i.addEventListener("click",()=>x(0)),c.addEventListener("click",()=>x(1)),l.addEventListener("click",()=>x(2)),f.addEventListener("click",()=>x(3)),v.addEventListener("click",()=>x(4)),h.addEventListener("click",()=>x(5)),g.addEventListener("click",()=>x(6)),E.addEventListener("click",()=>x(7)),S.addEventListener("click",()=>x(8)),C.addEventListener("click",()=>x(9));const d=document.createElement("div");d.className="settings__pane",d.append(o);const u=document.createElement("div");u.className="settings__list";const m={};for(const[r,_]of na){const L=document.createElement("div");L.className="settings__row";const I=document.createElement("label");I.className="settings__head";const j=document.createElement("span");j.textContent=_;const M=document.createElement("input");M.type="checkbox",M.checked=_e[r],I.append(j,M);const N=document.createElement("div");N.className="settings__vol",N.classList.toggle("settings__vol--off",!_e[r]);const T=document.createElement("input");T.type="range",T.min="0",T.max="100",T.step="1",T.value=String(Math.round(ue[r]*100)),T.setAttribute("aria-label",`Громкость: ${_}`);const F=document.createElement("output");F.className="settings__pct",F.textContent=`${T.value}%`,T.addEventListener("input",()=>{ue[r]=Number(T.value)/100,F.textContent=`${T.value}%`,En(),ee()}),N.append(T,F),M.addEventListener("change",()=>{_e[r]=M.checked,N.classList.toggle("settings__vol--off",!M.checked),En(),ee()}),m[r]=()=>{M.checked=_e[r],N.classList.toggle("settings__vol--off",!_e[r]),T.value=String(Math.round(ue[r]*100)),F.textContent=`${T.value}%`},L.append(I,N),u.append(L)}d.append(u);const y=document.createElement("div");y.className="settings__pane",y.hidden=!0;const p=document.createElement("p");p.className="settings__hint",p.textContent="Галочка — тюнинг «против скольжения», выключена — исходное поведение игры. Ползунок — значение, ↺ — сброс строки. Всё применяется сразу, даже за рулём.",y.append(p);const k=document.createElement("div");k.className="physics-tabs";const A=document.createElement("button");A.className="physics-tab physics-tab--on",A.type="button",A.textContent="Тонкая настройка",A.setAttribute("role","tab"),A.setAttribute("aria-selected","true");const b=document.createElement("button");b.className="physics-tab",b.type="button",b.textContent="Пресеты физики",b.setAttribute("role","tab"),b.setAttribute("aria-selected","false"),k.append(A,b),y.append(k);const w=document.createElement("div");w.className="physics-content",y.append(w);const R=document.createElement("div");R.className="settings__list";const $=document.createElement("div");$.className="physics-presets",w.append(R,$);const P=r=>{r==="fine"?(A.classList.add("physics-tab--on"),b.classList.remove("physics-tab--on"),A.setAttribute("aria-selected","true"),b.setAttribute("aria-selected","false"),R.hidden=!1,$.hidden=!0):(A.classList.remove("physics-tab--on"),b.classList.add("physics-tab--on"),A.setAttribute("aria-selected","false"),b.setAttribute("aria-selected","true"),R.hidden=!0,$.hidden=!1)};A.addEventListener("click",()=>P("fine")),b.addEventListener("click",()=>P("presets"));const B=()=>{const r=Gi(),_=zi();if(r.length===0){const M=document.createElement("p");M.className="settings__presetempty",M.textContent="Сохраненных пресетов нет",$.append(M);return}const L=document.createElement("div");L.className="settings__presets",r.forEach(M=>{const N=document.createElement("button");N.className="settings__presetbtn",N.textContent=M.name,N.type="button",N.setAttribute("role","menuitemradio"),N.setAttribute("aria-checked",String(M.id===_)),N.setAttribute("aria-label",`Пресет физики: ${M.name}`),N.addEventListener("click",()=>{Hi(M.id),P("presets")}),L.append(N)}),$.append(L);const I=document.createElement("button");I.className="settings__presetbtn",I.textContent="Импорт",I.type="button",I.setAttribute("role","menuitem"),I.setAttribute("aria-label","Импорт пресета физики"),I.addEventListener("click",()=>{const M=document.createElement("input");M.type="file",M.accept=".json",M.click(),M.addEventListener("change",async N=>{const F=N.target.files[0];if(!F)return;const U=await F.text(),X=Wi(U);if(!X){console.warn("[settings] Невалидный файл пресета физики");return}gs(X.name??"Импортированный пресет",X.data),$.innerHTML="",B()}),I.parentNode?.replaceChild(M,I),setTimeout(()=>M.click(),100)}),$.append(I);const j=document.createElement("button");j.className="settings__presetbtn",j.textContent="Новый",j.type="button",j.setAttribute("role","menuitem"),j.setAttribute("aria-label","Создать новый пресет физики"),j.addEventListener("click",()=>{gs("Новый пресет",{}),$.innerHTML="",B()}),$.append(j)};B(),P("fine");const D={};for(const r of pt){const _=Ve[r],L=document.createElement("div");L.className="settings__row";const I=document.createElement("label");I.className="settings__head";const j=document.createElement("span");j.textContent=_.label;const M=document.createElement("input");M.type="checkbox",M.checked=ae[r],I.append(j,M);const N=document.createElement("div");N.className="settings__vol",N.classList.toggle("settings__vol--off",!ae[r]);const T=document.createElement("input");T.type="range",T.min="0",T.max="100",T.step="1",T.value=String(Math.round((re[r]-_.min)/(_.max-_.min)*100)),T.setAttribute("aria-label",`Значение: ${_.label}`);const F=document.createElement("output");F.className="settings__pct settings__pct--val",F.textContent=xs(r);const U=document.createElement("button");U.className="settings__reset",U.type="button",U.textContent="↺",U.title="Сбросить по умолчанию",U.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const X=()=>{M.checked=ae[r],N.classList.toggle("settings__vol--off",!ae[r]),T.value=String(Math.round((re[r]-_.min)/(_.max-_.min)*100)),F.textContent=xs(r)};D[r]=X,T.addEventListener("input",()=>{const ne=_.min+(_.max-_.min)*(Number(T.value)/100);re[r]=Number(ne.toFixed(_.decimals)),F.textContent=xs(r),Dt(),Ot()}),M.addEventListener("change",()=>{ae[r]=M.checked,N.classList.toggle("settings__vol--off",!M.checked),Dt(),Ot()}),U.addEventListener("click",()=>{ae[r]=!0,re[r]=_.def,X(),Dt(),Ot()}),N.append(T,F,U),L.append(I,N),R.append(L)}w.append(R);const O=document.createElement("button");O.className="settings__presetbtn",O.type="button",O.textContent="Сохранить как пресет",O.title="Сохранить текущие настройки физики в пресет",O.addEventListener("click",()=>{const r=prompt("Введите название пресета физики:","");if(r===null||r.trim()==="")return;const _=Ir();gs(r.trim(),_),$.innerHTML="",B(),P("presets")}),w.append(O);const z=document.createElement("button");z.className="settings__resetall",z.type="button",z.textContent="Сбросить все настройки физики",z.addEventListener("click",()=>{for(const r of pt)ae[r]=!0,re[r]=Ve[r].def,D[r]?.();Dt(),Ot()}),y.append(z);const G=document.createElement("div");G.className="settings__pane",G.hidden=!0;const H=document.createElement("p");H.className="settings__hint",H.textContent="Ползунок — уровень света (слева от центра — студия, к правому краю — ярче), ↺ — сброс строки. Свет главного экрана меняется сразу и запоминается. «Гамма-коррекция» — аппаратная (движок держит её как вкл/выкл), а «Сила гаммы» — непрерывный подъём полутонов поверх неё: 1 — как есть, каждый шаг вверх удваивает свет.",G.append(H);const W=document.createElement("div");W.className="settings__list";const te={};for(const r of ft){const _=Te[r],L=document.createElement("div");L.className="settings__row";const I=document.createElement("div");I.className="settings__head";const j=document.createElement("span");j.textContent=_.label,I.append(j);const M=document.createElement("div");M.className="settings__vol";const N=document.createElement("input");N.type="range",N.min="0",N.max="100",N.step="1",_.options&&(N.max=String(_.options.length-1)),N.value=String(Fo(r)),N.setAttribute("aria-label",`Освещение: ${_.label}`);const T=document.createElement("output");T.className="settings__pct settings__pct--val",T.textContent=_s(r);const F=document.createElement("button");F.className="settings__reset",F.type="button",F.textContent="↺",F.title="Сбросить по умолчанию",F.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const U=()=>{N.value=String(Fo(r)),T.textContent=_s(r)};te[r]=U,N.addEventListener("input",()=>{ce[r]=nr(r,Number(N.value)),T.textContent=_s(r),fn(),bn()}),F.addEventListener("click",()=>{ce[r]=_.def,U(),fn(),bn()}),M.append(N,T,F),L.append(I,M),W.append(L)}G.append(W);const q=document.createElement("button");q.className="settings__resetall",q.type="button",q.textContent="Сбросить все настройки освещения",q.addEventListener("click",()=>{for(const r of ft)ce[r]=Te[r].def,te[r]?.();fn(),bn()}),G.append(q);const K=document.createElement("div");K.className="settings__pane",K.hidden=!0;const Je=document.createElement("p");Je.className="settings__hint",Je.textContent="Каскады разбивают дальность теней на несколько карт: у ближней детализация выше, поэтому машина отбрасывает резкую тень даже вдали. Один каскад — одна карта на всю дальность. Меняется сразу, даже в заезде.",K.append(Je);const pe=document.createElement("div");pe.className="settings__list";const nt={};for(const r of ze){const _=ye[r],L=document.createElement("div");L.className="settings__row";const I=document.createElement("div");I.className="settings__head";const j=document.createElement("span");j.textContent=_.label,I.append(j);const M=document.createElement("div");M.className="settings__vol";const N=document.createElement("input");N.type="range",N.min="0",N.max="100",N.step="1",_.options&&(N.max=String(_.options.length-1)),N.value=String(ys(r,Q[r])),N.setAttribute("aria-label",`Тени: ${_.label}`);const T=document.createElement("output");T.className="settings__pct settings__pct--val",T.textContent=ws(r);const F=document.createElement("button");F.className="settings__reset",F.type="button",F.textContent="↺",F.title="Сбросить по умолчанию",F.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const U=()=>{N.value=String(ys(r,Q[r])),T.textContent=ws(r)};nt[r]=U,N.addEventListener("input",()=>{Q[r]=ir(r,Number(N.value)),T.textContent=ws(r),ht(),jt()}),F.addEventListener("click",()=>{Q[r]=_.def,U(),ht(),jt()}),M.append(N,T,F),L.append(I,M),pe.append(L)}K.append(pe);const Ke=document.createElement("button");Ke.className="settings__resetall",Ke.type="button",Ke.textContent="Сбросить все настройки теней",Ke.addEventListener("click",()=>{for(const r of ze)Q[r]=ye[r].def,nt[r]?.();ht(),jt()}),K.append(Ke);const fe=document.createElement("div");fe.className="settings__pane",fe.hidden=!0;const Fe=document.createElement("p");Fe.className="settings__hint",Fe.textContent="Пост-обработка кадра: ореол вокруг солнца, виньетка, резкость, цветокоррекция и глубина резкости. Главный переключатель снимает всю обработку разом, а TAA включается на вкладке «Графика» — там ему и место, рядом с MSAA. Здесь у него остался только джиттер.",fe.append(Fe);const Mn=document.createElement("div");Mn.className="settings__row";const Pn=document.createElement("label");Pn.className="settings__head";const co=document.createElement("span");co.textContent="Пост-обработка включена";const we=document.createElement("input");we.type="checkbox",we.checked=an(),Pn.append(co,we),we.addEventListener("change",()=>Es(we.checked)),Mn.append(Pn),fe.append(Mn);const In=document.createElement("div");In.className="settings__list";const Lt={};for(const r of He){if(r==="taa")continue;const _=Me[r],L=document.createElement("div");L.className="settings__row";const I=document.createElement("div");I.className="settings__head";const j=document.createElement("span");j.textContent=_.label,I.append(j);const M=document.createElement("div");M.className="settings__vol";const N=document.createElement("input");N.type="range",N.min="0",N.max="100",N.step="1",_.options&&(N.max=String(_.options.length-1)),N.value=String($o(r,J[r])),N.setAttribute("aria-label",`Post FX: ${_.label}`);const T=document.createElement("output");T.className="settings__pct settings__pct--val",T.textContent=Ss(r);const F=document.createElement("button");F.className="settings__reset",F.type="button",F.textContent="↺",F.title="Сбросить по умолчанию",F.setAttribute("aria-label",`Сбросить по умолчанию: ${_.label}`);const U=()=>{N.value=String($o(r,J[r])),T.textContent=Ss(r)};Lt[r]=U,N.addEventListener("input",()=>{J[r]=Rr(r,Number(N.value)),T.textContent=Ss(r),Ae(),Ge()}),F.addEventListener("click",()=>{J[r]=_.def,U(),Ae(),Ge()}),M.append(N,T,F),L.append(I,M),In.append(L)}fe.append(In);const At=document.createElement("button");At.className="settings__resetall",At.type="button",At.textContent="Сбросить все настройки Post FX",At.addEventListener("click",()=>{for(const r of He)J[r]=Me[r].def,Lt[r]?.();we.checked=!0,Es(!0),Ae(),Ge(),at()}),fe.append(At);const $e=document.createElement("div");$e.className="settings__pane",$e.hidden=!0;const Fn=document.createElement("p");Fn.className="settings__hint",Fn.textContent="Служебные элементы поверх игры. Счётчик кадра живёт в левом верхнем углу на всех экранах; ниже выбирается, из каких строк он состоит.",$e.append(Fn);const $n=document.createElement("div");$n.className="settings__row";const Bn=document.createElement("label");Bn.className="settings__head";const lo=document.createElement("span");lo.textContent="Статистика кадра";const st=document.createElement("input");st.type="checkbox",st.checked=vn(),Bn.append(lo,st),st.addEventListener("change",()=>ra(st.checked)),$n.append(Bn),$e.append($n);const Dn=document.createElement("p");Dn.className="settings__hint",Dn.textContent="Строки счётчика кадра. Если снять все, панель останется пустой плашкой — обновление текста всё равно стоит кадра, поэтому лишние строки лучше не держать включёнными без нужды.",$e.append(Dn);const On=document.createElement("div");On.className="settings__row settings__row--stack";const uo={};for(const r of Ms){const _=document.createElement("label");_.className="settings__check";const L=document.createElement("input");L.type="checkbox",L.checked=be(r);const I=document.createElement("span");I.textContent=pr(r),L.addEventListener("change",()=>fr(r,L.checked)),uo[r]=L,_.append(L,I),On.append(_)}$e.append(On);const he=document.createElement("div");he.className="settings__pane",he.hidden=!0;const jn=document.createElement("p");jn.className="settings__hint",jn.textContent="Сенсорное управление появляется только на устройствах с тач-экраном. Галочка прячет педали совсем; ниже — размер, прозрачность, расположение и схема кнопок. Всё сохраняется в браузере и действует сразу.",he.append(jn);const Un=document.createElement("div");Un.className="settings__row";const Gn=document.createElement("label");Gn.className="settings__head";const mo=document.createElement("span");mo.textContent="Сенсорное управление";const Rt=document.createElement("input");Rt.type="checkbox",Rt.checked=_r(),Gn.append(mo,Rt),Rt.addEventListener("change",()=>yr(Rt.checked)),Un.append(Gn),he.append(Un);const zn=document.createElement("div");zn.className="settings__row";const Hn=document.createElement("label");Hn.className="settings__head";const po=document.createElement("span");po.textContent="Размер кнопок",Hn.append(po);const Vn=document.createElement("div");Vn.className="settings__vol";const le=document.createElement("input");le.type="range",le.min="60",le.max="200",le.step="5",le.value=String(Math.round(vr()*100)),le.setAttribute("aria-label","Размер сенсорных кнопок");const tn=document.createElement("output");tn.className="settings__pct",tn.textContent=`${le.value}%`,le.addEventListener("input",()=>{Er(Number(le.value)/100),tn.textContent=`${le.value}%`}),Vn.append(le,tn),zn.append(Hn,Vn),he.append(zn);const Wn=document.createElement("div");Wn.className="settings__row";const Yn=document.createElement("label");Yn.className="settings__head";const fo=document.createElement("span");fo.textContent="Прозрачность",Yn.append(fo);const Jn=document.createElement("div");Jn.className="settings__vol";const de=document.createElement("input");de.type="range",de.min="25",de.max="100",de.step="5",de.value=String(Math.round(Sr()*100)),de.setAttribute("aria-label","Прозрачность сенсорных кнопок");const nn=document.createElement("output");nn.className="settings__pct",nn.textContent=`${de.value}%`,de.addEventListener("input",()=>{kr(Number(de.value)/100),nn.textContent=`${de.value}%`}),Jn.append(de,nn),Wn.append(Yn,Jn),he.append(Wn);const ot=document.createElement("div");ot.className="settings__pane",ot.hidden=!0;const Kn=document.createElement("div");Kn.className="settings__backend";const Xn=document.createElement("p");Xn.className="settings__hint",Xn.textContent="Масштаб рендера уменьшает число пикселей, которые движок рисует за кадр: картинка мыльнее, но кадры стабильнее. Лимит кадров держит потолок частоты — помогает на ноутбуках от батареи. MSAA применяется при запуске: после его включения страницу нужно перезагрузить. TAA включается живьём и сглаживает всю сцену — его параметры (джиттер, резкость) задаёт выбранный пресет графики.",ot.append(Xn);const ve=(r,_,L,I)=>{const j=document.createElement("div");j.className="settings__row";const M=document.createElement("div");M.className="settings__head";const N=document.createElement("span");N.textContent=r,M.append(N);const T=document.createElement("div");T.className="settings__vol",T.style.flexWrap="wrap";const F=[];for(const[X,ne]of _){const Y=document.createElement("button");Y.className="settings__resetall",Y.type="button",Y.style.marginTop="0",Y.style.flex="1 1 auto",Y.style.textTransform="none",Y.textContent=ne,Y.addEventListener("click",()=>{I(X),U()}),F.push(Y),T.append(Y)}const U=()=>{const X=L();for(let ne=0;ne<_.length;ne++)F[ne]?.toggleAttribute("disabled",_[ne]?.[0]===X)};return U(),j.append(M,T),{row:j,refresh:U}},$a=ve("Расположение",[["split","По краям"],["left","Слева"],["right","Справа"]],()=>Cr(),r=>{(r==="split"||r==="left"||r==="right")&&Nr(r)});he.append($a.row);const Ba=ve("Кнопки крестовины",[["normal","▲ газ, ▼ тормоз"],["swap","▲ тормоз, ▼ газ"]],()=>Lr()?"swap":"normal",r=>{Ar(r==="swap")});he.append(Ba.row);const qn=ve("Масштаб рендера",[["0.5","50 %"],["0.75","75 %"],["1","100 %"]],()=>String(ma()),r=>{const _=Number(r);(_===.5||_===.75||_===1)&&eo(_)}),Qn=ve("Лимит кадров",[["0","Выкл"],["30","30 fps"],["60","60 fps"],["120","120 fps"]],()=>String(pa()),r=>{const _=Number(r);(_===0||_===30||_===60||_===120)&&to(_)}),Zn=document.createElement("div");Zn.className="settings__row";const es=document.createElement("label");es.className="settings__head";const ho=document.createElement("span");ho.textContent="Сглаживание MSAA";const Ee=document.createElement("input");Ee.type="checkbox",Ee.checked=qe(),es.append(ho,Ee);const sn=document.createElement("span");sn.className="settings__pct";const Tt=()=>{Ee.checked=qe(),sn.textContent=qe()?"сцена — сразу, интерфейс — после перезагрузки":""};Tt(),Ee.addEventListener("change",()=>{Yt(Ee.checked),Ee.checked&&vs("taa")>0&&(J.taa=0,Ae(),Ge()),Tt(),at()}),Zn.append(es,sn);const ts=document.createElement("div");ts.className="settings__row";const ns=document.createElement("label");ns.className="settings__head";const bo=document.createElement("span");bo.textContent="Временное сглаживание TAA";const Se=document.createElement("input");Se.type="checkbox",Se.checked=vs("taa")>0,ns.append(bo,Se);const ss=document.createElement("span");ss.className="settings__pct";const Da=.1,Oa=.5,at=()=>{const r=vs("taa")>0;Se.checked=r,ss.textContent=r?"работает сразу":"включит пост-обработку"};at(),Se.addEventListener("change",()=>{J.taa=Se.checked?1:0,Se.checked&&!an()&&(Es(!0),we.checked=!0),Se.checked&&J.taaJitter<Da&&(J.taaJitter=Oa,Lt.taaJitter?.()),Se.checked&&qe()&&(Yt(!1),Tt()),Ae(),Ge(),at()}),ts.append(ns,ss);const os=ve("Пресет графики",[["phone","Телефон"],["balanced","Оптимальный"],["ultra","Ультра"]],()=>Or(),r=>{if(!(r!=="phone"&&r!=="balanced"&&r!=="ultra")){ua(r),qn.refresh(),Qn.refresh(),os.refresh(),Ee.checked=qe(),sn.textContent=qe()?"применится после перезагрузки":"",Tt(),at();for(const _ of ze)nt[_]?.();for(const _ of He)Lt[_]?.();we.checked=an()}}),as=document.createElement("p");as.className="settings__hint",as.textContent="Рендер: WebGL2 работает везде, WebGPU даёт больше эффектов, но на части телефонов подвисает на первом кадре. Смена бэкенда пересобирает движок и перезагружает сцену.",ot.append(as,Kn,os.row,qn.row,Qn.row,Zn,ts);const Xe=document.createElement("div");Xe.className="settings__pane",Xe.hidden=!0;const is=document.createElement("p");is.className="settings__hint",is.textContent="Разрешение и частота записи — насколько дорого кодировать. Качество кодека — насколько жирный файл: чем выше, тем чётче картинка и тем сильнее просядет игра во время записи. Всё применяется к следующему нажатию «Запись».",Xe.append(is);const rs=document.createElement("div");rs.className="settings__recordslot",Xe.append(rs);const cs=document.createElement("div");cs.className="settings__row";const ls=document.createElement("label");ls.className="settings__head";const go=document.createElement("span");go.textContent="Звук в файле";const it=document.createElement("input");it.type="checkbox",it.checked=Fs(),ls.append(go,it),it.addEventListener("change",()=>wa(it.checked)),cs.append(ls);const xo=ve("Разрешение",[["1280","720p"],["1920","1080p"],["window","Как на экране"]],()=>String(hr()),r=>{if(r==="window"){Ps("window");return}(r==="1280"||r==="1920")&&Ps(Number(r))}),_o=ve("Частота записи",[["24","24 fps"],["30","30 fps"],["60","60 fps"]],()=>String(ha()),r=>{const _=Number(r);(_===24||_===30||_===60)&&xa(_)}),yo=ve("Качество кодека",[["low","Низкое"],["medium","Среднее"],["high","Высокое"]],()=>ba(),r=>{(r==="low"||r==="medium"||r==="high")&&_a(r)}),wo=ve("Ключевой кадр",[["1","1 с"],["2","2 с"],["4","4 с"]],()=>String(ga()),r=>{const _=Number(r);(_===1||_===2||_===4)&&ya(_)});Xe.append(cs,xo.row,_o.row,yo.row,wo.row);const rt=document.createElement("div");rt.className="settings__pane",rt.hidden=!0;const ds=document.createElement("p");ds.className="settings__hint",ds.textContent="Пресет — это все настройки разом: физика, свет, тени, Post FX, звук и интерфейс. Активный пресет применяется при запуске и одинаково работает во всех сценах. Имя нового пресета — дата и время до минуты.",rt.append(ds);const oe=document.createElement("p");oe.className="settings__status",oe.setAttribute("role","status"),oe.textContent="";const us=document.createElement("div");us.className="settings__presetnamefield";const ke=document.createElement("input");ke.type="text",ke.value=Ue(),ke.placeholder="Название пресета",ke.setAttribute("aria-label","Название нового пресета");const Mt=document.createElement("button");Mt.className="settings__presetbtn",Mt.type="button",Mt.textContent="Сохранить",us.append(ke,Mt);const ja=document.createElement("div");ja.className="settings__row";const Pt=document.createElement("button");Pt.className="settings__resetall",Pt.type="button",Pt.textContent="Обновить активный пресет",Pt.addEventListener("click",()=>{const r=wn();if(!r){oe.textContent="Активного пресета нет — сохраните новый.";return}Zo(r,bt()),oe.textContent="Текущие настройки записаны в активный пресет.",De()});const It=document.createElement("button");It.className="settings__resetall",It.type="button",It.textContent="Импорт из файла";const Be=document.createElement("input");Be.type="file",Be.accept="application/json,.json",Be.hidden=!0,It.addEventListener("click",()=>Be.click()),Be.addEventListener("change",()=>{const r=Be.files?.[0];Be.value="",r&&(async()=>{try{const _=$i(await r.text());if(!_){oe.textContent="Это не файл настроек игры.";return}const L=mt(_.data);if(L.applied.length===0){oe.textContent="В файле нет знакомых настроек.";return}const I=ut(_.name??r.name.replace(/\.json$/i,""),_.data,_.created??Date.now());Ts(I.id),ms(),De(),ke.value=Ue(),oe.textContent=`Импортировано «${I.name}»: ${L.applied.join(", ")}`}catch(_){oe.textContent=`Не удалось прочитать файл: ${_ instanceof Error?_.message:"ошибка чтения"}`}})()});const Ft=document.createElement("button");Ft.className="settings__resetall",Ft.type="button",Ft.textContent="Убрать все пресеты",Ft.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты? Настройки останутся как есть.")&&(Ii(),ms(),De(),oe.textContent="Пресеты удалены, текущие настройки не тронуты.")});const $t=document.createElement("div");$t.className="settings__presets";const ms=()=>{for(const r of pt)D[r]?.();for(const r of ft)te[r]?.();for(const r of ze)nt[r]?.();for(const r of He)Lt[r]?.();for(const r of sa)m[r]?.();we.checked=an(),st.checked=vn();for(const r of Ms){const _=uo[r];_&&(_.checked=be(r))}Ee.checked=qe(),Tt(),at(),qn.refresh(),Qn.refresh(),os.refresh(),xo.refresh(),_o.refresh(),yo.refresh(),wo.refresh(),it.checked=Fs()},Ua=(r,_)=>{const L=Rs().find(j=>j.id===r);if(!L)return;const I=mt(L.data);Ts(r),ms(),oe.textContent=I.applied.length>0?`Применён пресет «${_}»: ${I.applied.join(", ")}`:`В пресете «${_}» нет знакомых настроек.`},vo=r=>r>0?Ue(new Date(r)):"дата неизвестна",De=()=>{$t.replaceChildren();const r=Rs(),_=wn();if(r.length===0){const L=document.createElement("p");L.className="settings__presetempty",L.textContent="Пресетов пока нет. Настройте всё как надо и нажмите «Сохранить».",$t.append(L);return}for(const L of r){const I=document.createElement("div");I.className="settings__preset";const j=L.id===_;j&&I.classList.add("settings__preset--active");const M=document.createElement("div");M.className="settings__presetinfo";const N=document.createElement("span");N.className="settings__presetname",N.textContent=L.name;const T=document.createElement("span");T.className="settings__presetmeta",T.textContent=j?`${vo(L.created)} · активен`:vo(L.created),M.append(N,T);const F=document.createElement("button");F.className="settings__presetbtn",F.type="button",F.textContent="✎",F.title="Переименовать",F.setAttribute("aria-label",`Переименовать пресет ${L.name}`),F.addEventListener("click",()=>{const Y=document.createElement("input");Y.className="settings__presetnameinput",Y.type="text",Y.value=L.name,N.replaceWith(Y),Y.focus(),Y.select();const Eo=()=>{Mi(L.id,Y.value),De()};Y.addEventListener("keydown",fs=>{fs.key==="Enter"&&Eo(),fs.key==="Escape"&&(fs.stopPropagation(),De())}),Y.addEventListener("blur",Eo)});const U=document.createElement("button");U.className="settings__presetbtn",U.type="button",U.textContent="Применить",U.disabled=j,U.addEventListener("click",()=>Ua(L.id,L.name));const X=document.createElement("button");X.className="settings__presetbtn",X.type="button",X.textContent="↓",X.title="Экспорт в файл",X.setAttribute("aria-label",`Экспорт пресета ${L.name} в файл`),X.addEventListener("click",()=>Fi(L));const ne=document.createElement("button");ne.className="settings__presetbtn settings__presetbtn--danger",ne.type="button",ne.textContent="✕",ne.title="Удалить",ne.setAttribute("aria-label",`Удалить пресет ${L.name}`),ne.addEventListener("click",()=>{window.confirm(`Удалить пресет «${L.name}»?`)&&(Pi(L.id),De(),oe.textContent=`Пресет «${L.name}» удалён.`)}),I.append(M,U,F,X,ne),$t.append(I)}};Mt.addEventListener("click",()=>{const r=ut(ke.value||Ue(),bt());ke.value=Ue(),De(),oe.textContent=`Сохранён пресет «${r.name}».`}),rt.append(us,$t,Pt,It,Ft,Be,oe),De();const ps=document.createElement("div");ps.className="settings__scroll",ps.append(d,y,G,K,fe,$e,he,ot,Xe,rt),n.append(s,a,ps),e.append(t,n),document.body.append(e);function Ga(){e.hidden=!1,ke.value=Ue()}function za(){e.hidden=!0}return{root:e,backendSlot:Kn,recordSlot:rs,open:Ga,close:za}}const Yr=300;function Jr(e={}){let t=0,n=!1;const s=()=>{const c=wn();if(!c){n||(n=!0,e.onNoPreset?.());return}const l=bt();if(!Zo(c,l))return;n=!1;const f=wn();f&&e.onSaved?.(f)},a=qi(()=>{Fr()||(window.clearTimeout(t),t=window.setTimeout(s,Yr))}),i=()=>{t!==0&&(window.clearTimeout(t),t=0,s())};return document.addEventListener("visibilitychange",i),window.addEventListener("pagehide",i),{flush(){t!==0&&(window.clearTimeout(t),t=0,s())},destroy(){window.clearTimeout(t),t=0,a(),document.removeEventListener("visibilitychange",i),window.removeEventListener("pagehide",i)}}}const Kr="https://vk.ru/H360ru";function Xr(){const e=document.createElement("div"),t=document.createElement("p");t.className="dlg__empty",t.textContent="Описание игры скоро появится. Пока сюда можно поставить правила, список техники и ссылку на сервер.";const n=document.createElement("a");n.className="dlg__link",n.href=Kr,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Группа игры во «ВКонтакте»",e.append(t,n);const s=Ln({title:"Об игре",body:e});return{dialog:s,open(){s.open()},destroy(){s.destroy()}}}let va=null;function so(e){va=e}function Qe(){return va?.()??null}const qr={yaw:0,lift:0,zoom:1,shoulder:1,distance:6.4,height:2.5,fov:60},Bo=["yaw","lift","zoom","distance","height","fov"],Do={yaw:{label:"Поворот",min:-180,max:180,step:1,unit:"°"},lift:{label:"Наклон",min:-.6,max:3.4,step:.1,unit:" м"},zoom:{label:"Зум",min:.55,max:1.7,step:.01,unit:"×"},distance:{label:"Дистанция",min:3,max:15,step:.1,unit:" м"},height:{label:"Высота",min:1,max:6,step:.1,unit:" м"},fov:{label:"Обзор (fov)",min:40,max:90,step:1,unit:"°"}},Ea="blendars.camera-views.v1";function ks(){try{const e=localStorage.getItem(Ea);if(!e)return[];const t=JSON.parse(e);if(!t||typeof t!="object")return[];const n=t.list;if(!Array.isArray(n))return[];const s=[];for(const o of n){if(!o||typeof o!="object")continue;const a=o;if(typeof a.id!="string"||!a.id)continue;const i=a.view;if(!i||typeof i!="object")continue;const c=i,l=(f,v)=>typeof f=="number"&&Number.isFinite(f)?f:v;s.push({id:a.id,name:typeof a.name=="string"&&a.name?a.name:"Без имени",created:typeof a.created=="number"?a.created:0,view:{yaw:l(c.yaw,0),lift:l(c.lift,0),zoom:l(c.zoom,1),shoulder:l(c.shoulder,1),distance:l(c.distance,6.4),height:l(c.height,2.5),fov:l(c.fov,60)}})}return s}catch{return[]}}function Oo(e){try{localStorage.setItem(Ea,JSON.stringify({list:e}))}catch{}}function Qr(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Zr=`
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
`;function ec(){if(document.getElementById("camv-style"))return;const e=document.createElement("style");e.id="camv-style",e.textContent=Zr,document.head.append(e)}function tc(){ec();const e=document.createElement("div"),t=document.createElement("p");t.className="camv__hint";const n={},s=document.createElement("div");for(const u of Bo){const m=Do[u],y=document.createElement("div");y.className="camv__row";const p=document.createElement("div");p.className="camv__head";const k=document.createElement("span");k.textContent=m.label;const A=document.createElement("span");A.className="camv__val",p.append(k,A);const b=document.createElement("input");b.type="range",b.min=String(m.min),b.max=String(m.max),b.step=String(m.step),b.setAttribute("aria-label",m.label),b.addEventListener("input",()=>{const w=Number(b.value);Qe()?.write({[u]:w}),A.textContent=`${b.value}${m.unit}`}),y.append(p,b),s.append(y),n[u]={input:b,out:A}}const o=document.createElement("div");o.className="camv__btns";const a=[],i=[[-1,"Слева"],[0,"Центр"],[1,"Справа"]];for(const[u,m]of i){const y=document.createElement("button");y.className="camv__btn",y.type="button",y.textContent=m,y.addEventListener("click",()=>{Qe()?.write({shoulder:u}),c(u)}),a.push(y),o.append(y)}const c=u=>{for(let m=0;m<i.length;m++)a[m]?.classList.toggle("camv__btn--on",i[m]?.[0]===u)},l=document.createElement("button");l.className="camv__btn",l.type="button",l.textContent="Сбросить вид (C)",l.addEventListener("click",()=>{Qe()?.reset(),x()});const f=document.createElement("div");f.className="camv__save";const v=document.createElement("input");v.type="text",v.placeholder="Название ракурса",v.setAttribute("aria-label","Название нового ракурса");const h=document.createElement("button");h.className="camv__btn",h.type="button",h.textContent="Сохранить",f.append(v,h);const g=document.createElement("div");g.className="camv__list";const C=document.createElement("p");C.className="camv__status",C.setAttribute("role","status"),C.textContent="",e.append(t,s,o,l,f,g,C);const E=Ln({title:"Ракурсы камеры",body:e}),S=(u,m)=>{const y=Do[u];return`${u==="zoom"?m.toFixed(2):String(m)}${y.unit}`},x=()=>{const u=Qe(),m=u?.read()??qr,y=u!==null;t.textContent=y?"Ракурс меняется живьём. Тяните сцену мышью или пальцем (влево — экран влево), колесо или щипок — расстояние, C — сброс.":"Откройте сцену с машиной — здесь появится текущий ракурс.";for(const p of Bo){const k=n[p];k&&(k.input.value=String(m[p]),k.input.disabled=!y,k.out.textContent=S(p,m[p]))}for(const p of a)p.disabled=!y;c(m.shoulder),l.disabled=!y,h.disabled=!y,v.disabled=!y,d()},d=()=>{g.replaceChildren();const u=ks();if(u.length===0){const m=document.createElement("p");m.className="camv__empty",m.textContent="Сохранённых ракурсов пока нет.",g.append(m);return}for(const m of u){const y=document.createElement("div");y.className="camv__item";const p=document.createElement("span");p.className="camv__name",p.textContent=m.name;const k=document.createElement("button");k.className="camv__btn",k.type="button",k.textContent="Применить",k.disabled=Qe()===null,k.addEventListener("click",()=>{const b=Qe();b&&(b.write({...m.view}),x(),C.textContent=`Применён ракурс «${m.name}».`)});const A=document.createElement("button");A.className="camv__btn",A.type="button",A.textContent="✕",A.title="Удалить",A.setAttribute("aria-label",`Удалить ракурс ${m.name}`),A.addEventListener("click",()=>{Oo(ks().filter(b=>b.id!==m.id)),d(),C.textContent=`Ракурс «${m.name}» удалён.`}),y.append(p,k,A),g.append(y)}};return h.addEventListener("click",()=>{const u=Qe();if(!u)return;const m=Date.now(),y={id:Qr(m),name:v.value.trim()||Ue(new Date(m)),created:m,view:{...u.read()}},p=ks();p.push(y),Oo(p),v.value="",d(),C.textContent=`Сохранён ракурс «${y.name}».`}),{dialog:E,open(){x(),E.open()},destroy(){E.destroy()}}}const nc=[{hash:"b3964c6",date:"2026-10-09",subject:"Сглаживание: TAA на вкладке «Графика», починка MSAA, ПК-пресеты на MSAA"},{hash:"6f17f25",date:"2026-10-08",subject:"HUD в канвас, UI-аудиошина, Draco/KTX2-ассеты"},{hash:"ad022dc",date:"2026-10-08",subject:"Fix WGSL shader: declare material_diffuse and view_position uniforms in terrain-splat"},{hash:"a206a10",date:"2026-10-08",subject:"Rebuild dist with base /blend-ars/ (GitHub Pages)"},{hash:"15fdf63",date:"2026-10-08",subject:"Deploy built site from dist; path dist in Pages workflow"},{hash:"942a7cc",date:"2026-10-08",subject:"Remove project sources; keep .github and .gitignore"},{hash:"da0f40e",date:"2026-10-08",subject:"Create static.yml"},{hash:"2691051",date:"2026-10-08",subject:"Delete .github/workflows/static.yml"},{hash:"98c2349",date:"2026-10-08",subject:"Delete .github/workflows/npm-publish-github-packages.yml"},{hash:"3ce584f",date:"2026-10-08",subject:"Update static.yml"},{hash:"128f22b",date:"2026-10-03",subject:"Create npm-publish-github-packages.yml"},{hash:"c8e16ab",date:"2026-10-03",subject:"Create static.yml"},{hash:"5a46d53",date:"2026-10-03",subject:"feat(scene): выбор кузова грузовик/Maserati, Maserati в меню, откат WebGPU→WebGL2"},{hash:"5c65165",date:"2026-10-03",subject:"feat(menu): экран загрузки с прогрессом + процедурный 3D-фон меню"},{hash:"1faa7f1",date:"2026-10-03",subject:"test(stage-0): браузерная проверка рендера, smoke-сцена, иконки-заглушки"},{hash:"4f12113",date:"2026-10-03",subject:"feat(stage-0): bootstrap Vite + ленивый PlayCanvas + тулинг бюджетов"},{hash:"eb68f3c",date:"2026-10-03",subject:"docs: rewrite README for PlayCanvas/Colyseus web stack"},{hash:"34ff9ca",date:"2026-10-03",subject:"chore: remove legacy Godot+Nakama tree and web export"},{hash:"9018d77",date:"2026-10-02",subject:"Create FUNDING.yml"},{hash:"7f64ab1",date:"2026-09-30",subject:"Add files via upload"},{hash:"5b7ab23",date:"2026-09-30",subject:"Add files via upload"},{hash:"ebb8901",date:"2026-03-19",subject:"mv"},{hash:"3c3fc26",date:"2026-03-19",subject:"fix: обновлен .gitignore и удалены системные файлы"},{hash:"0e075c9",date:"2026-03-19",subject:"up"},{hash:"9309069",date:"2026-03-19",subject:"upd"},{hash:"b82f5bc",date:"2026-03-19",subject:"docs: оновлення правил проекту"},{hash:"a19f06e",date:"2026-03-19",subject:"up"},{hash:"45bb3b3",date:"2026-03-19",subject:"new rules by demiurgos 19_1"},{hash:"7519417",date:"2026-02-27",subject:"Update README.md"},{hash:"58a3447",date:"2026-02-27",subject:"**BLEND ARS: Initial Project Setup and Development Notice**"},{hash:"60a150e",date:"2026-02-27",subject:"upd"},{hash:"eae4946",date:"2026-02-27",subject:"Exclude addons folder from tracking"},{hash:"cfe0473",date:"2026-02-27",subject:"upd"},{hash:"94b5e5d",date:"2026-02-24",subject:"uikit up"},{hash:"17b03ea",date:"2026-02-24",subject:"mv"},{hash:"c8e9bf6",date:"2026-02-24",subject:"апдейт"},{hash:"48511ce",date:"2026-02-24",subject:"ui_kit"},{hash:"ad054cb",date:"2026-02-24",subject:"up"},{hash:"73e2c24",date:"2026-02-22",subject:"Update 00-core.md"},{hash:"8d20bc4",date:"2026-02-22",subject:"Create 05-ui-perf.md"},{hash:"cf17f7a",date:"2026-02-22",subject:"Update and rename 04-mcp-workflow.md to 04-ui-theme.md"},{hash:"93f52ae",date:"2026-02-22",subject:"Update and rename 03-gdscript-standards.md to 03-ui-core.md"},{hash:"ff72202",date:"2026-02-22",subject:"Update and rename 02-ui-scifi.md to 02-workflow.md"},{hash:"a533398",date:"2026-02-22",subject:"Rename 00-global.md to 00-core.md"},{hash:"134cacc",date:"2026-02-22",subject:"Update and rename 01-mmo-coder.md to 01-gdscpipt.md"},{hash:"bbd1850",date:"2026-02-22",subject:"Update 00-global.md"},{hash:"2096da3",date:"2026-02-20",subject:"Create FUNDING.yml"},{hash:"10fb83e",date:"2026-02-18",subject:"главное меню и экраны настроек"},{hash:"f18331f",date:"2026-02-18",subject:"docs: restructure and improve .cursorrules configuration"},{hash:"a09766e",date:"2026-02-18",subject:"загрузка"}];function sc(){const e=nc;if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,o=s.hash,a=s.date,i=s.subject;typeof o!="string"||typeof i!="string"||t.push({hash:o,date:typeof a=="string"?a:"",subject:i})}return t}function oc(){const e=sc(),t=document.createElement("div");if(e.length===0){const s=document.createElement("p");s.className="dlg__empty",s.textContent="Журнал пока пуст: сборка сделана без истории git.",t.append(s)}else{const s=document.createElement("p");s.className="devlog__meta",s.textContent=`Последние ${e.length} изменений`;const o=document.createElement("ul");o.className="devlog__list";for(const a of e){const i=document.createElement("li");i.className="devlog__item";const c=document.createElement("span");c.className="devlog__hash",c.textContent=a.hash;const l=document.createElement("span");l.className="devlog__date",l.textContent=a.date;const f=document.createElement("span");f.className="devlog__subject",f.textContent=a.subject,i.append(c,l,f),o.append(i)}t.append(s,o)}const n=Ln({title:"Журнал разработки",body:t});return{dialog:n,open(){n.open()},destroy(){n.destroy()}}}function rn(e,t,n,s){const o=document.createElement("button");return o.className=e,o.type="button",o.style.setProperty("--tb-icon",`url(${JSON.stringify(t)})`),o.title=n,o.setAttribute("aria-label",n),o.addEventListener("pointerdown",a=>{a.preventDefault(),!o.disabled&&s()}),o}const ac=`
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
`;function ic(){const e=document.createElement("button");e.className="tb__btn",e.type="button";const t=()=>document.fullscreenElement!==null,n=()=>{const s=t(),o=s?ii:ai;e.style.setProperty("--tb-icon",`url(${JSON.stringify(o)})`);const a=s?"Выйти из полноэкранного режима":"Полноэкранный режим";e.title=a,e.setAttribute("aria-label",a),e.setAttribute("aria-pressed",s?"true":"false")};return e.addEventListener("pointerdown",s=>{s.preventDefault(),!e.disabled&&(t()?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{}))}),document.addEventListener("fullscreenchange",n),n(),{el:e,destroy(){document.removeEventListener("fullscreenchange",n)}}}async function rc(){return(await Z(()=>import("./music-player.D9QxtgXB.js"),__vite__mapDeps([0,1,2]))).createMusicPlayer()}function cc(e){const t=document.createElement("style");t.textContent=ac;const n=document.createElement("header");n.className="tb";const s=document.createElement("div");s.className="tb__slot",s.append(e.statsHost);const o=document.createElement("div");o.className="tb__center";const a=document.createElement("h1");a.className="tb__title",a.textContent=e.title,o.append(a);const i=document.createElement("div");i.className="tb__slot tb__slot--right";const c=document.createElement("div");c.className="tb__extra";const l=ic(),f=Xr(),v=oc(),h=tc(),g=document.createElement("button");g.className="tb__btn tb__btn--close",g.type="button",g.style.setProperty("--tb-icon",`url(${JSON.stringify(gi)})`),g.title="Скрыть панель",g.setAttribute("aria-label","Скрыть панель");const C=document.createElement("span");C.className="tb__cap",C.innerHTML="Скрыть<br>панель",g.append(C),g.addEventListener("pointerdown",u=>{u.preventDefault(),!g.disabled&&e.onToggleChrome()});let E=null,S=null;const x=rn("tb__btn",di,"Музыка",()=>{const u=m=>{m.open(),e.windows.open("music")};if(S!==null){u(S);return}E??=rc(),E.then(m=>{S=m,e.windows.register({id:"music",root:m.dialog.root,show:()=>m.open(),hide:()=>m.dialog.close()}),u(m)}).catch(()=>{})});i.append(c,rn("tb__btn",li,"Ракурсы камеры",()=>{h.open(),e.windows.open("camera")}),rn("tb__btn",ci,"Журнал разработки",()=>{v.open(),e.windows.open("devlog")}),rn("tb__btn",ri,"Об игре",()=>{f.open(),e.windows.open("about")}),x,g,l.el),s.classList.add("tb__slot--left"),n.append(t,s,o,i),e.windows.register({id:"camera",root:h.dialog.root,show:()=>h.open(),hide:()=>h.dialog.close()}),e.windows.register({id:"about",root:f.dialog.root,show:()=>f.open(),hide:()=>f.dialog.close()}),e.windows.register({id:"devlog",root:v.dialog.root,show:()=>v.open(),hide:()=>v.dialog.close()});const d=[et(n),et(f.dialog.root),un(f.dialog.root),et(v.dialog.root),un(v.dialog.root),et(h.dialog.root),un(h.dialog.root)];return{root:n,setExtraButtons(u){c.append(u)},setBackButton(u){s.prepend(u)},setSceneMode(u){n.classList.toggle("tb--scene",u)},destroy(){l.destroy(),f.destroy(),v.destroy(),h.destroy();for(const u of d)u();S?.destroy(),n.remove()}}}const lc=`
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
`;function dc(e={}){const t=document.createElement("style");t.textContent=lc;const n=document.createElement("div");n.className="win";const s=document.createElement("div");s.className="win__bar";const o=document.createElement("button");o.className="win__close",o.type="button",o.textContent="✕",o.title="Закрыть окно",o.setAttribute("aria-label","Закрыть окно"),s.append(o);const a=document.createElement("p");a.className="win__empty",a.textContent="",a.setAttribute("aria-hidden","true"),n.append(t,a),document.body.append(s);const i=new Map,c=[];let l=null,f=null;const v=()=>{for(const p of i.values()){const k=p.id===l;p.root.hidden=!k,k?p.show():p.hide()}n.classList.toggle("win--open",l!==null),s.classList.toggle("win--open",l!==null);for(const p of c)p();h()},h=()=>{const p=n.getBoundingClientRect();if(p.width<=0||p.height<=0)return;const k=document.documentElement.style;k.setProperty("--win-left",`${Math.round(p.left)}px`),k.setProperty("--win-top",`${Math.round(p.top)}px`),k.setProperty("--win-width",`${Math.round(p.width)}px`),k.setProperty("--win-height",`${Math.round(p.height)}px`)},g={root:n,closeBtn:o,register(p){i.set(p.id,p),p.hide(),p.root.hidden=!0},open(p){i.has(p)&&(l=p,f={x:S,y:x,until:performance.now()+u},v())},close(){l!==null&&(l=null,v())},toggle(p){l===p?g.close():g.open(p)},active(){return l},onChange(p){return c.push(p),()=>{const k=c.indexOf(p);k>=0&&c.splice(k,1)}},destroy:()=>{}};o.addEventListener("pointerdown",p=>{p.preventDefault(),g.close()});const C=new ResizeObserver(h);C.observe(n),window.addEventListener("resize",h),window.addEventListener("orientationchange",h),h();const E=p=>{p.key==="Escape"&&(l!==null?(p.stopPropagation(),g.close()):e.onEmptyEscape?.())};document.addEventListener("keydown",E);let S=0,x=0;const d=p=>{S=p.clientX,x=p.clientY},u=400,m=32,y=p=>{if(l===null)return;const k=i.get(l);if(!k||k.root.hidden)return;const A=p.target;if(!(A instanceof Element)||k.root.contains(A))return;const b=f;if(b!==null&&performance.now()<b.until){const $=p.clientX-b.x,P=p.clientY-b.y;if($*$+P*P<=m*m)return}if(A.closest(".tb")!==null)return;const w=p.clientX-S,R=p.clientY-x;w*w+R*R>64||g.close()};return document.addEventListener("pointerdown",d,!0),document.addEventListener("click",y),g.destroy=()=>{C.disconnect(),window.removeEventListener("resize",h),window.removeEventListener("orientationchange",h),document.removeEventListener("keydown",E),document.removeEventListener("pointerdown",d,!0),document.removeEventListener("click",y),s.remove();const p=document.documentElement.style;p.removeProperty("--win-left"),p.removeProperty("--win-top"),p.removeProperty("--win-width"),p.removeProperty("--win-height")},g}const uc=`
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
    src: url(${JSON.stringify(Yo)}) format('truetype');
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
`,mc={idle:"",starting:"готовлю…",recording:"идёт",encoding:"упаковываю файл…",saving:"сохраняю…",error:"не вышло"},pc=["recording","encoding","saving"],Cs=["Одно не рождается без другого: оболочка без души лишь кукла, душа без оболочки — призрак.","Сон совести рождает чудовищ.","У нас нет формы, и мы страшимся этого.","В здравом теле, витает здравый дух, а значит и душа."];class fc{statsHost;clusterHost;settings;windows;root;playBtn;backBtn;settingsItem;modes;actionsEl;midEl;statusEl;statusText;recordRow;recordBtn;recordDot;recordLabel;recordState;recordBar;recordFill;idleIndex=-1;topbar;chromeHidden=!1;autosave;uiSoundDetach=[];constructor(t,n){this.root=document.createElement("div"),this.root.className="menu";const s=document.createElement("style");s.textContent=uc,this.windows=dc({onEmptyEscape:()=>{this.setChromeHidden(!this.chromeHidden)}}),this.statsHost=document.createElement("div"),this.topbar=cc({statsHost:this.statsHost,title:"BLEND ARS",subtitle:"",windows:this.windows,onToggleChrome:()=>{this.setChromeHidden(!0)}}),this.playBtn=document.createElement("button"),this.playBtn.className="play play--go",this.playBtn.type="button",this.playBtn.textContent="Играть",this.playBtn.addEventListener("pointerdown",g=>{g.preventDefault(),!this.playBtn.disabled&&(ge("click"),this.modes.open(),this.windows.open("modes"))});const o=document.createElement("ul");o.className="actions__list";const a=[["Контейнеры",ui],["Миссии",mi],["Гараж",pi],["Магазин",fi]];for(const[g,C]of a){const E=document.createElement("li"),S=document.createElement("button");S.className="mitem",S.type="button",S.textContent=g,S.disabled=!0,S.title=`${g}: раздел в разработке`,S.style.setProperty("--mitem-icon",`url(${JSON.stringify(C)})`),E.append(S),o.append(E)}this.settingsItem=document.createElement("button"),this.settingsItem.className="mitem",this.settingsItem.type="button",this.settingsItem.textContent="Настройки",this.settingsItem.style.setProperty("--mitem-icon",`url(${JSON.stringify(To)})`),this.settingsItem.addEventListener("pointerdown",g=>{g.preventDefault(),!this.settingsItem.disabled&&(ge("click"),this.openSettings())});{const g=document.createElement("li");g.append(this.settingsItem),o.append(g)}this.modes=Ni(g=>{ge("click"),this.modes.dialog.close(),this.windows.close(),n.onScene(g)}),this.backBtn=document.createElement("button"),this.backBtn.className="tb__back",this.backBtn.type="button",this.backBtn.textContent="Назад",this.backBtn.style.setProperty("--tb-icon",`url(${JSON.stringify(_i)})`),this.backBtn.title="Вернуться в меню",this.backBtn.setAttribute("aria-label","Вернуться в меню"),this.backBtn.style.display="none",this.backBtn.addEventListener("pointerdown",g=>{g.preventDefault(),ge("click"),n.onBack?.()}),this.settings=Wr();const i=document.createElement("button");i.className="tb__btn",i.type="button",i.style.setProperty("--tb-icon",`url(${JSON.stringify(To)})`),i.title="Настройки",i.setAttribute("aria-label","Настройки"),i.addEventListener("pointerdown",g=>{g.preventDefault(),!i.disabled&&(ge("click"),this.openSettings())});const c=document.createElement("div");c.className="tb__extra",c.append(i),this.topbar.setExtraButtons(c),this.topbar.setBackButton(this.backBtn);const l=document.createElement("div");l.className="actions",l.append(this.playBtn,o),this.actionsEl=l,this.statusText=document.createElement("div"),this.statusText.className="status__text",this.statusText.textContent=this.pickIdlePhrase(),this.recordRow=document.createElement("div"),this.recordRow.className="status__record",this.recordRow.hidden=!0,this.recordBtn=document.createElement("button"),this.recordBtn.className="status__recordbtn",this.recordBtn.type="button",this.recordDot=document.createElement("span"),this.recordDot.className="status__dot",this.recordLabel=document.createElement("span"),this.recordLabel.textContent="Запись",this.recordBtn.append(this.recordDot,this.recordLabel),this.recordBtn.addEventListener("pointerdown",g=>{g.preventDefault(),!this.recordBtn.disabled&&(ge("click"),n.onRecord?.())}),this.recordState=document.createElement("span"),this.recordState.className="status__recordstate",this.recordState.textContent="",this.recordBar=document.createElement("div"),this.recordBar.className="status__recordbar",this.recordFill=document.createElement("span"),this.recordBar.append(this.recordFill),this.recordBar.style.display="none",this.recordRow.append(this.recordBtn,this.recordState,this.recordBar),this.statusEl=document.createElement("div"),this.statusEl.className="status",this.clusterHost=document.createElement("div"),this.clusterHost.className="status__cluster",this.statusEl.append(this.clusterHost),this.statusText.setAttribute("role","status"),this.statusText.setAttribute("aria-live","polite"),this.statusEl.append(this.statusText),this.settings.recordSlot.append(this.recordRow);const f=document.createElement("div");f.className="mid",f.append(l,this.windows.root),this.actionsEl=l,this.midEl=f;const v=document.createElement("div");v.className="wrap",v.append(f);const h=document.createElement("button");h.className="chrome-fab",h.type="button",h.style.setProperty("--fab-icon",`url(${JSON.stringify(xi)})`),h.title="Показать интерфейс",h.setAttribute("aria-label","Показать интерфейс"),h.addEventListener("pointerdown",g=>{g.preventDefault(),ge("click"),this.setChromeHidden(!1)}),this.root.append(s,this.topbar.root,v,this.statusEl,h),t.append(this.root),vi(()=>Mr("uiClick")),Ei(),this.uiSoundDetach.push(et(this.root),et(this.settings.root),un(this.settings.root),et(this.modes.dialog.root)),this.windows.register({id:"settings",root:this.settings.root,show:()=>this.settings.open(),hide:()=>this.settings.close()}),this.windows.register({id:"modes",root:this.modes.dialog.root,show:()=>this.modes.open(),hide:()=>this.modes.dialog.close()}),this.settings.close(),this.autosave=Jr({onSaved:g=>{this.setStatus(`Настройки сохранены в пресет «${g}».`)},onNoPreset:()=>{this.setStatus("Настройки применены, но активного пресета нет — сохранять некуда. Сохраните пресет на вкладке «Пресеты».")}})}openSettings(){this.settings.open(),this.windows.open("settings")}setMode(t){const n=t==="scene";this.playBtn.style.display=n?"none":"",this.backBtn.style.display=n?"":"none",this.recordRow.hidden=!n,n&&(this.modes.dialog.close(),this.windows.close()),this.setChromeHidden(!1),this.actionsEl.style.display=n?"none":"",this.midEl.style.gridTemplateColumns=n?"minmax(0, 1fr)":"",this.root.style.background=n?"none":"",this.root.classList.toggle("menu--scene",n)}setChromeHidden(t){this.chromeHidden=t,this.root.classList.toggle("menu--chrome-hidden",t)}isChromeHidden(){return this.chromeHidden}setSceneChrome(t){this.topbar.setSceneMode(t)}statsHostFor(t){return this.statsHost}setBusy(t){this.playBtn.disabled=t,this.settingsItem.disabled=t,this.backBtn.disabled=t,this.modes.setBusy(t),t&&this.setStatus("Инициализация рендера…")}setStatus(t){this.statusText.textContent=t||this.pickIdlePhrase()}setRecordState(t,n){const s=pc.includes(t);this.recordBtn.classList.toggle("live",s),this.recordBtn.disabled=t==="starting"||t==="encoding"||t==="saving",this.recordLabel.textContent=t==="recording"?"Стоп":"Запись",this.recordBar.style.display=t==="encoding"||t==="saving"?"block":"none",this.recordFill.style.width="0%",this.recordState.textContent=n??mc[t]}setRecordProgress(t){this.recordFill.style.width=`${Math.min(Math.max(t,0),1)*100}%`}pickIdlePhrase(){let t=Math.floor(Math.random()*Cs.length);return t===this.idleIndex&&(t=(t+1)%Cs.length),this.idleIndex=t,Cs[t]??""}destroy(){this.topbar.destroy(),this.modes.destroy(),this.windows.destroy(),this.autosave.destroy();for(const t of this.uiSoundDetach)t();this.root.remove(),this.settings.root.remove()}}const hc=`
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
`,bc='<svg class="rswitch__svg" viewBox="0 0 48 26" width="48" height="26" aria-hidden="true" focusable="false"><rect class="rswitch__track" x="1" y="1" width="46" height="24" rx="12"></rect><circle class="rswitch__knob" cx="13" cy="13" r="9"></circle></svg>';function gc(e,t){const n=document.createElement("div");n.className="rswitch-wrap";const s=document.createElement("span");s.className="rswitch__opt",s.textContent="WebGL2",s.dataset.val="webgl2";const o=document.createElement("button");o.className="rswitch",o.type="button",o.setAttribute("role","switch"),o.innerHTML=bc;const a=document.createElement("span");a.className="rswitch__opt",a.textContent="WebGPU",a.dataset.val="webgpu",n.append(s,o,a);const i=()=>{o.disabled||t.onSwitch()};n.addEventListener("click",i),e.append(n);let c="webgl2",l=!1,f="";const v=()=>{const h=c==="webgpu";o.dataset.state=h?"on":"off",o.setAttribute("aria-checked",h?"true":"false"),s.classList.toggle("rswitch__opt--active",!h),a.classList.toggle("rswitch__opt--active",h);const g=h?"WebGL2":"WebGPU";o.title=o.disabled&&f?f:`Переключить на ${g}`,o.setAttribute("aria-label",`Рендер: ${h?"WebGPU":"WebGL2"}. Переключить на ${g}`),n.classList.toggle("rswitch-wrap--disabled",o.disabled),n.setAttribute("aria-disabled",String(o.disabled))};return v(),{setBackend(h){c=h,v()},setBusy(h){l=h,o.disabled=h||!!f,v()},setUnavailable(h){f=h,o.disabled=l||!!h,v()},destroy(){n.remove()}}}const xc=`
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
`;function Bt(e,t,n,s,o,a){o<=0||s<=0||(e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o),e.fill())}const _c="#ebdbb2",cn="system-ui, -apple-system, 'Segoe UI', sans-serif";function yc(e){let t="";return{draw:(s,o,a,i)=>{if(o<=0||a<=0||i<=0)return!1;const c=e(),l=c===null?"none":[Math.round(Math.abs(c.speed)*.9),c.rpm,c.gear,c.shifting?1:0,c.gears.length,Math.round(c.charge*100),Math.round(c.boost*100),o,a,window.innerWidth].join("|");if(l===t)return!1;if(t=l,s.clearRect(0,0,o,a),s.fillStyle="rgba(29, 32, 33, 0.93)",s.fillRect(0,0,o,a),c===null)return!0;s.save(),s.scale(i,i);const f=a/i,v=document.documentElement.classList.contains("hud-density--skinny"),h=window.innerWidth>1100,g=window.innerWidth>820,C=12,E=f/2;let S=0;if(s.textBaseline="middle",s.textAlign="left",h){const y=v?48:64,p=4;s.fillStyle="#ffffff1f",Bt(s,S,E-p/2,y,p,2);const k=Math.max(c.maxRpm-c.idleRpm,1),A=Math.min(Math.max((c.rpm-c.idleRpm)/k,0),1);A>0&&(s.fillStyle=c.rpm>=c.shiftUpRpm?"#fe8019":"#ebdbb2cc",Bt(s,S,E-p/2,y*A,p,2)),S+=y+C}const x=v?18:24,d=v?9:11;s.fillStyle=_c,s.font=`700 ${x}px ${cn}`;const u=`${Math.round(Math.abs(c.speed)*.9)}`;s.fillText(u,S,E);const m=s.measureText(u).width;if(s.font=`400 ${d}px ${cn}`,s.fillStyle="rgba(235, 219, 178, 0.55)",s.fillText("км/ч",S+m+3,E),S+=m+3+s.measureText("км/ч").width+8,g){const y=c.gears.length,p=v?16:20,k=4,A=c.gear<0?0:c.gear;for(let b=0;b<=y;b++){const w=S+b*(p+4),R=b===A;s.fillStyle=R?c.shifting?"#ffffff4d":"#ebdbb2e6":"#ffffff1a",Bt(s,w,E-p/2,p,p,k),s.fillStyle=R?c.shifting?"#ffffff8c":"#1d2021":"#ffffff73",s.font=`600 ${v?9:11}px ${cn}`,s.textAlign="center",s.fillText(b===0?"R":`${b}`,w+p/2,E),s.textAlign="left"}S+=(y+1)*(p+4)-4+C}if(h){const y=Math.min(Math.max(c.charge,0),1),p=Math.min(Math.max(c.boost,0),1),k=y>0?y:p;s.font=`400 9px ${cn}`,s.fillStyle="rgba(235, 219, 178, 0.8)",s.fillText(y>0?"ЗАРЯД":"БУСТ",S,E);const A=s.measureText("ЗАРЯД").width,b=v?40:56,w=3,R=S+A+5;s.fillStyle="#ffffff1f",Bt(s,R,E-w/2,b,w,2),k>0&&(s.fillStyle=p>0?"#fe8019":"#7b5cff",Bt(s,R,E-w/2,b*k,w,2))}return s.restore(),!0},reset(){t=""},destroy(){t=""}}}function wc(e,t){const n=document.createElement("div");n.className="cluster",n.setAttribute("role","group"),n.setAttribute("aria-label","Приборы машины");const s=document.createElement("div");s.className="cluster__revs";const o=document.createElement("span");s.append(o);const a=document.createElement("div");a.className="cluster__dials";const i=document.createElement("span");i.className="cluster__speed",i.textContent="0";const c=document.createElement("span");c.className="cluster__unit",c.textContent="км/ч";const l=document.createElement("span");l.append(i,c);const f=document.createElement("div");f.className="cluster__gearbox",a.append(l,f);const v=document.createElement("div");v.className="cluster__boost";const h=document.createElement("span");h.textContent="Заряд";const g=document.createElement("div");g.className="cluster__boostbar";const C=document.createElement("span");g.append(C),v.append(h,g),n.append(s,a,v);const E=document.createElement("style");E.textContent=xc,document.head.append(E);let S=[],x=-1,d=0;const u=()=>{if(d++%4!==0)return;const y=e();if(!y)return;i.textContent=`${Math.round(Math.abs(y.speed)*.9)}`;const p=y.gears.length;if(p!==x){x=p,f.replaceChildren(),S=[];const P=p+1;for(let B=0;B<P;B++){const D=document.createElement("span");D.textContent=B===0?"R":`${B}`,f.append(D),S.push(D)}}const k=y.gear<0?0:y.gear;for(let P=0;P<S.length;P++)S[P]?.classList.toggle("engaged",P===k);f.classList.toggle("shifting",y.shifting);const A=Math.max(y.maxRpm-y.idleRpm,1),b=(y.rpm-y.idleRpm)/A;o.style.width=`${Math.min(Math.max(b,0),1)*100}%`,o.classList.toggle("redline",y.rpm>=y.shiftUpRpm);const w=Math.min(Math.max(y.charge,0),1),R=Math.min(Math.max(y.boost,0),1),$=w>0?w:R;C.style.width=`${$*100}%`,C.classList.toggle("firing",R>0),h.textContent=w>0?"Заряд":"Буст"};n.dataset.cleanup="1",(t??document.body).append(n);const m=window.setInterval(u,1e3/60/4);return{destroy(){window.clearInterval(m),n.remove(),E.remove()}}}const $s=10;function vc(e,t){const n=e/t,s=Math.floor(n*6),o=n*6-s,a=.25,i=1-.75*o,c=.25+.75*o,l={0:[1,c,a],1:[i,1,a],2:[a,1,c],3:[a,i,1],4:[c,a,1],5:[1,a,i]},[f,v,h]=l[s%6]??[1,1,1];return new Vo(f,v,h,1)}function Ns(e,t,n){const s=new Va;return s.diffuse=new Vo(0,0,0),s.emissive=t,s.emissiveIntensity=2,s.blendType=Wa,s.opacity=n,s.depthWrite=!1,s.update(),s}function Ec(e,t,n=$s){let s=null;const o=()=>{try{s??=new AudioContext;const b=s;b.state==="suspended"&&b.resume();const w=b.currentTime+.02,R=b.createOscillator();R.type="sawtooth",R.frequency.setValueAtTime(70,w),R.frequency.exponentialRampToValueAtTime(300,w+2.5);const $=b.createBiquadFilter();$.type="lowpass",$.Q.value=6,$.frequency.setValueAtTime(180,w),$.frequency.exponentialRampToValueAtTime(1800,w+2.5);const P=b.createGain();P.gain.setValueAtTime(1e-4,w),P.gain.exponentialRampToValueAtTime(.22,w+2.4),P.gain.setValueAtTime(.22,w+2.5),P.gain.linearRampToValueAtTime(0,w+2.7),R.connect($).connect(P).connect(b.destination),R.start(w),R.stop(w+2.8);const B=2.4,D=b.createBufferSource(),O=b.createBuffer(1,Math.ceil(b.sampleRate*B),b.sampleRate),z=O.getChannelData(0);for(let W=0;W<z.length;W++)z[W]=Math.random()*2-1;D.buffer=O;const G=b.createBiquadFilter();G.type="bandpass",G.Q.value=2.5,G.frequency.setValueAtTime(250,w+2.5),G.frequency.exponentialRampToValueAtTime(5200,w+4.6);const H=b.createGain();H.gain.setValueAtTime(1e-4,w+2.5),H.gain.exponentialRampToValueAtTime(.3,w+2.62),H.gain.exponentialRampToValueAtTime(.001,w+4.8),D.connect(G).connect(H).connect(b.destination),D.start(w+2.5),D.stop(w+4.9)}catch{}},a=new dt("checkpoints");t.addChild(a);const i=(b,w)=>{const R=new ko(b,120,w),$=new ko(b,-20,w),P=e.systems.rigidbody?.raycastFirst(R,$);return P?P.point.y:0},c=(b,w)=>{const R=i(b,w);return Math.abs(i(b+4,w)-R)<1.2&&Math.abs(i(b,w+4)-R)<1.2},l=b=>{let w={x:0,z:0,y:0};for(let R=0;R<8;R++){const $=b/n*Math.PI*2+Math.random()*.6,P=60+Math.random()*200,B=Math.cos($)*P,D=Math.sin($)*P;if(w={x:B,z:D,y:i(B,D)},c(B,D))return w}return w},f=e.graphicsDevice,v=new hs({ringRadius:4,tubeRadius:.14,sectorAngle:360,segments:48,sides:10}),h=new hs({ringRadius:2.6,tubeRadius:.12,sectorAngle:360,segments:36,sides:10}),g=new hs({ringRadius:1.5,tubeRadius:.1,sectorAngle:360,segments:24,sides:8}),C=new Ha({radius:.35,height:60,heightSegments:1,capSegments:12}),E=on.fromGeometry(f,v),S=on.fromGeometry(f,h),x=on.fromGeometry(f,g),d=on.fromGeometry(f,C),u=[],m=new Map;for(let b=0;b<n;b++){const{x:w,z:R,y:$}=l(b),P=vc(b,n),B=new dt(`checkpoint-${b}`);B.setPosition(w,$+.35,R);const D=(pe,nt,Ke,fe)=>{const Fe=new dt("ring");return Fe.addComponent("render",{meshInstances:[new So(pe,nt)],castShadows:!1,receiveShadows:!1}),Fe.setEulerAngles(Ke,0,fe),B.addChild(Fe),Fe},O=Ns(f,P,.9),z=Ns(f,P,.55),G=Ns(f,P,.28),H=D(E,O,0,0),W=D(S,z,66,24),te=D(x,z,108,-30),q=new dt("beam");q.addComponent("render",{meshInstances:[new So(d,G)],castShadows:!1,receiveShadows:!1}),q.setLocalPosition(0,30,0),B.addChild(q),a.addChild(B);const Je={info:{id:b,x:w,z:R,color:Math.round(P.r*255)<<16|Math.round(P.g*255)<<8|Math.round(P.b*255)},node:B,rings:[H,W,te],beam:q,mats:[O,z],beamMat:G,state:"alive",t:0};u.push(Je),m.set(B,Je)}const y=b=>{for(const w of u){if(w.state==="alive"){w.rings[0]?.rotate(0,b*50,0),w.rings[1]?.rotate(b*30,b*-70,0),w.rings[2]?.rotate(b*-45,0,b*60);continue}w.t+=b;const R=w.t;if(R<2.5){const $=R/2.5,P=1-(1-$)*(1-$),B=1+1.3*P;w.node.setLocalScale(B,B,B);const D=b*10*P;w.rings[0]?.rotate(0,D*50,0),w.rings[1]?.rotate(D*30,D*-70,0),w.rings[2]?.rotate(D*-45,0,D*60)}else if(R<5){const $=(R-2.5)/2.5,P=1-$*$,B=Math.max(2.3*P*P,.001);w.node.setLocalScale(B,B,B);const D=b*(10+$*40);w.rings[0]?.rotate(0,D*50,0),w.rings[1]?.rotate(D*30,D*-70,0),w.rings[2]?.rotate(D*-45,0,D*60),w.beam.setLocalScale(1,1+$*2.2,1),w.beam.setLocalPosition(0,30+$*45,0),w.beamMat.opacity=.28*(1-$),w.beamMat.update();for(let O=0;O<w.mats.length;O++){const z=O===0?.9:.55;w.mats[O].opacity=Math.max(z*(1-$),0),w.mats[O].update()}}}for(let w=u.length-1;w>=0;w--){const R=u[w];R.state==="dying"&&R.t>=5&&(R.node.destroy(),e.fire("checkpoint:visited",R.info),u.splice(w,1))}};e.on("update",y);const p=()=>t.findByName("vehicle");let k=0;const A=b=>{if(k+=b,k<.25)return;k=0;const R=p()?.getPosition();if(R)for(let $=u.length-1;$>=0;$--){const P=u[$],B=R.x-P.info.x,D=R.z-P.info.z;P.state==="alive"&&B*B+D*D<9*9&&(P.state="dying",P.t=0,o())}};return e.on("update",A),{list:()=>u.map(b=>b.info),destroy(){e.off("update",y),e.off("update",A),s?.close().catch(()=>{}),a.destroy()}}}function Sc(e,t){const n={state:"idle",startMs:0,lastMs:0,collected:0,total:t.total},s=()=>{if(n.state==="finished"||(n.state==="idle"&&(n.state="running",n.startMs=performance.now(),e.fire("race:started",n.total)),n.collected+=1,n.total<1||n.collected<n.total))return;n.state="finished",n.lastMs=Math.max(0,performance.now()-n.startMs);const o={timeMs:n.lastMs,collected:n.collected,total:n.total};e.fire("race:finished",o),t.onFinished?.(o)};return e.on("checkpoint:visited",s),{view:n,destroy(){e.off("checkpoint:visited",s)}}}function jo(e){return e<10?`0${e}`:`${e}`}function oo(e){const t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/10);return`${Math.floor(n/6e3)}:${jo(Math.floor(n/100)%60)}.${jo(n%100)}`}function Ol(e){return`${e<0?"−":"+"}${oo(Math.abs(e))}`}function Sa(){return null}const ln=55,kc=`
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
`,Cc={0:"С",45:"СВ",90:"В",135:"ЮВ",180:"Ю",225:"ЮЗ",270:"З",315:"СЗ"};function Nc(){const e=document.documentElement.classList;return e.contains("hud-density--minimal")?0:e.contains("hud-density--skinny")?26:38}function Lc(){return document.documentElement.classList.contains("hud-density--minimal")}function ka(e,t,n,s=Sa){let o=null;const a=()=>{try{o??=new AudioContext,o.state==="suspended"&&o.resume();const d=o,u=d.currentTime+.01;for(const[m,y]of[880,1318.51].entries()){const p=d.createOscillator(),k=d.createGain();p.type="sine",p.frequency.value=y;const A=u+m*.09;k.gain.setValueAtTime(0,A),k.gain.linearRampToValueAtTime(.16,A+.02),k.gain.exponentialRampToValueAtTime(.001,A+.38),p.connect(k).connect(d.destination),p.start(A),p.stop(A+.42)}}catch{}},i=document.createElement("div");i.className="compass-toast",document.body.append(i);let c=null;const l=d=>{i.textContent=d,i.classList.add("compass-toast--on"),a(),c!==null&&window.clearTimeout(c),c=window.setTimeout(()=>{i.classList.remove("compass-toast--on"),c=null},2400)};let f=-1,v="",h="",g=-1,C=0;const E=d=>(d*180/Math.PI+360)%360,S=(d,u)=>{let m=(d-u)%360;return m>=180&&(m-=360),m<-180&&(m+=360),m};return{draw:(d,u,m)=>{if(m===0||u===0)return!1;const y=e();if(y===null)return v!==""?(d.clearRect(0,0,u,m),v="",!0):!1;const p=E(y),k=t(),A=n();A.length!==f&&(f>=0&&A.length<f&&l(A.length>0?`Чекпоинт собран · осталось: ${A.length}`:"Все чекпоинты собраны!"),f=A.length);const b=s();let w="";if(b!==null&&b.state!=="idle"){const O=b.state==="running"?Math.max(0,performance.now()-b.startMs):b.lastMs;w=`${oo(Math.floor(O/100)*100)} · ${b.collected}/${b.total}`}const R=`${u}x${m}|${p.toFixed(2)}|${k?`${k.x.toFixed(1)},${k.z.toFixed(1)}`:""}|${A.length}|${w}`;if(R===v)return!1;v=R,d.clearRect(0,0,u,m);const $=d.createLinearGradient(0,0,0,m);$.addColorStop(0,"rgba(235, 219, 178, 0.15)"),$.addColorStop(.6,"rgba(40, 40, 40, 0.94)"),d.fillStyle=$,d.fillRect(0,0,u,m),d.strokeStyle="rgba(235, 219, 178, 0.18)",d.lineWidth=1,d.strokeRect(.5,.5,u-1,m-1);const P=u/(ln*2),B=u/2,D=Math.round((p-ln)/15)*15;d.textAlign="center",d.textBaseline="middle";for(let O=D;O<=p+ln;O+=15){const z=B+S(O,p)*P,G=Cc[(O%360+360)%360];G!==void 0?(d.fillStyle="#ebdbb2e6",d.font=`600 ${Math.round(m*.34)}px system-ui, sans-serif`,d.fillText(G,z,m*.42)):O%45===0?(d.fillStyle="#ebdbb280",d.fillRect(z-1,m*.3,2,m*.22)):(d.fillStyle="#ebdbb240",d.fillRect(z-1,m*.36,2,m*.12))}if(d.fillStyle="#fe8019",d.fillRect(B-1.5,m*.14,3,m*.2),k){const O=[...A].map(H=>{const W=H.x-k.x,te=H.z-k.z;return{cp:H,dist:Math.round(Math.hypot(W,te)),off:S(E(Math.atan2(W,-te)),p)}}).sort((H,W)=>H.off-W.off);let z=-1e9,G=0;for(const{cp:H,dist:W,off:te}of O){const q=`#${H.color.toString(16).padStart(6,"0")}`;let K=B+te*P;if(Math.abs(te)>ln-4){K=B+Math.sign(te)*(u/2-14*(u/560)),d.save(),d.translate(K,m*.42),d.rotate(Math.sign(te)*Math.PI/2),d.fillStyle=q,d.beginPath(),d.moveTo(0,-6*(u/560)),d.lineTo(5*(u/560),3*(u/560)),d.lineTo(-5*(u/560),3*(u/560)),d.closePath(),d.fill(),d.restore();continue}Math.abs(K-z)<34*(u/560)?G=(G+1)%2:G=0,z=K;const pe=5*(u/560);d.fillStyle=q,d.beginPath(),d.moveTo(K,m*.2-pe),d.lineTo(K+pe,m*.2),d.lineTo(K,m*.2+pe),d.lineTo(K-pe,m*.2),d.closePath(),d.fill(),d.fillStyle="#ebdbb2d9",d.font=`500 ${Math.round(m*.26)}px system-ui, sans-serif`,d.fillText(`${W}м`,K,m*(.62+G*.24))}}if(b!==null&&w!==""){const O=u/560,z=Math.max(9,Math.round(m*.3));d.font=`600 ${z}px system-ui, sans-serif`,d.textAlign="right",d.textBaseline="middle",(w!==h||z!==g)&&(h=w,g=z,C=d.measureText(w).width);const G=7*O,H=z+6*O,W=C+G*2,te=u-6*O-W,q=m-5*O-H;d.beginPath(),typeof d.roundRect=="function"?d.roundRect(te,q,W,H,4*O):d.rect(te,q,W,H),d.fillStyle="rgba(29, 32, 33, 0.88)",d.fill(),d.strokeStyle=b.state==="finished"?"#b8bb2680":"#ebdbb233",d.lineWidth=1,d.stroke(),d.fillStyle=b.state==="finished"?"#b8bb26":"#ebdbb2",d.fillText(w,u-6*O-G,q+H/2)}return!0},reset(){v=""},destroy(){c!==null&&window.clearTimeout(c),o?.close().catch(()=>{}),i.remove()}}}function Ac(e,t,n,s=Sa){const o=document.createElement("div");o.className="compass";const a=document.createElement("canvas");o.append(a);const i=document.createElement("style");i.textContent=kc,o.append(i),document.body.append(o);const c=ka(e,t,n,s),l=()=>{const C=Math.min(window.devicePixelRatio||1,2);a.width=Math.round(a.clientWidth*C),a.height=Math.round(a.clientHeight*C)};l(),window.addEventListener("resize",l);let f=-1,v=-1,h=0;const g=()=>{const C=a.getContext("2d");C&&(a.width!==f||a.height!==v)&&(f=a.width,v=a.height,C.clearRect(0,0,a.width,a.height)),C&&c.draw(C,a.width,a.height),h=requestAnimationFrame(g)};return h=requestAnimationFrame(g),{destroy(){cancelAnimationFrame(h),window.removeEventListener("resize",l),c.destroy(),o.remove(),i.remove()}}}function Rc(e,t){const n=e.graphicsDevice,s=document.createElement("canvas"),o=s.getContext("2d",{alpha:!0});if(!o)return{active:!1,destroy(){}};const a=(E,S)=>{s.width=Math.max(1,E),s.height=Math.max(1,S)};a(n.width,n.height);let i;const c=()=>{const E=new Xa(n,{name:"hud-surface",format:qa,width:s.width,height:s.height,mipmaps:!1,minFilter:Lo,magFilter:Lo,addressU:No,addressV:No,anisotropy:1,premultiplyAlpha:!0,srgb:!0});return E.setSource(s),E};try{i=c()}catch(E){return console.warn("[hud] текстура HUD не создалась — HUD остаётся DOM-ом",E),{active:!1,destroy(){}}}let l,f,v;try{l=new dt("hud-screen"),l.addComponent("screen",{screenSpace:!0,scaleMode:Ya,resolution:new bs(n.width,n.height)}),f=new dt("hud-surface"),f.addComponent("element",{type:Ka,texture:i,anchor:new Ja(0,0,0,0),pivot:new bs(0,0),width:n.width,height:n.height,opacity:1,useInput:!1}),l.addChild(f),e.root.addChild(l),v=f.element}catch(E){return console.warn("[hud] слой HUD не поднялся — HUD остаётся DOM-ом",E),i.destroy(),{active:!1,destroy(){}}}const h=()=>{const E=n.width,S=n.height;if(!(E<=0||S<=0)){if(s.width!==E||s.height!==S){a(E,S);const x=c();v.texture=x,i.destroy(),i=x}l.screen&&(l.screen.resolution=new bs(E,S)),v.width=E,v.height=S}};let g=!0;const C=()=>{h();const E={ctx:o,width:s.width,height:s.height,scale:s.width>0?s.width/Math.max(window.innerWidth,1):1};(t.draw(E)||g)&&(g=!1,i.setSource(s),i.upload())};return e.on("prerender",C),n.on(Co.EVENT_RESIZE,h),{active:!0,destroy(){e.off("prerender",C),n.off(Co.EVENT_RESIZE,h),l.destroy(),i.destroy()}}}function Tc(e,t,n,s,o,a){e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o)}function Mc(e){const t=ka(e.getHeading,e.getVehicle,e.getCheckpoints,e.readRace),n=yc(e.read),s=()=>{if(Lc())return null;const c=Math.min(window.innerWidth*.62,560),l=Nc();if(c<40||l<=0)return null;const f=e.safeTop()+(l===26?126:92);return{x:(window.innerWidth-c)/2,y:f,w:c,h:l}},o=()=>{const c=e.clusterHost,l=c.parentElement;if(!l||c.offsetParent===null&&l.clientHeight===0)return null;const f=l.getBoundingClientRect();return f.height<4?null:{x:f.left,y:f.top,w:f.width,h:f.height}},a=()=>{const c=e.clusterHost,l=o();if(!l)return null;const f=c.getBoundingClientRect();return{x:f.left>0?f.left:l.x+16,y:l.y,w:Math.min(480,Math.max(l.w,240)),h:l.h}};let i="";return{draw(c){const{ctx:l,width:f,height:v,scale:h}=c,g=s(),C=a(),E=o(),S=[f,v,g?`${g.x.toFixed(0)},${g.y.toFixed(0)},${g.w.toFixed(0)},${g.h.toFixed(0)}`:"none",C?`${C.x.toFixed(0)},${C.y.toFixed(0)},${C.w.toFixed(0)},${C.h.toFixed(0)}`:"none",E?`${E.x.toFixed(0)},${E.y.toFixed(0)},${E.w.toFixed(0)},${E.h.toFixed(0)}`:"none"].join("|"),x=S!==i;x&&(i=S,l.clearRect(0,0,f,v),t.reset(),n.reset());let d=!1;if(x&&E){const u=E.x*h,m=E.y*h,y=E.w*h,p=E.h*h;l.save(),Tc(l,u,m,y,p,Math.max(4,6*h)),l.fillStyle="rgba(29, 32, 33, 0.93)",l.fill(),l.strokeStyle="rgba(235, 219, 178, 0.2)",l.lineWidth=Math.max(1,h),l.stroke(),l.restore()}return g&&(l.save(),l.translate(g.x*h,g.y*h),t.draw(l,g.w*h,g.h*h)&&(d=!0),l.restore()),C&&(l.save(),l.translate(C.x*h,C.y*h),n.draw(l,C.w*h,C.h*h,h)&&(d=!0),l.restore()),d||x},destroy(){t.destroy(),n.destroy()}}}let Uo=!1,Go=null;function Ca(){return Go??=Z(()=>import("./index.Dp09MIqC.js"),[]).then(e=>e.default),Go}function Na(){try{return new URLSearchParams(location.search).has("vk_app_id")}catch{return!1}}const Pc=1e4;async function Ic(){if(Uo||!Na())return!1;Uo=!0;try{const e=await Ca(),t=await Promise.race([e.send("VKWebAppInit"),new Promise((n,s)=>{setTimeout(()=>s(new Error("платформа не ответила на VKWebAppInit")),Pc)})]);if(t?.result)return console.info("[vk] VKWebAppInit: платформа подтвердила запуск приложения"),!0;console.warn("[vk] VKWebAppInit: платформа ответила без подтверждения",t)}catch(e){console.warn("[vk] не удалось инициализировать приложение ВКонтакте",e)}return!1}const Ls={uid:"local",name:"Гость",photo:""},Fc=8e3;function $c(){return String("6739294").trim()}function Bc(e,t,n){return Promise.race([e,new Promise((s,o)=>{setTimeout(()=>o(new Error(n)),t)})])}async function Dc(){let e;try{e=new URLSearchParams(location.search)}catch{return Ls}const t=e.get("vk_user_id");if(!t)return Ls;const n=e.get("vk_app_id")??"",s=$c();if(s!==""&&n!==s)return console.warn("[vk] запуск с чужим app_id:",n,"— свой:",s),Ls;const o=`vk:${t}`;if(!Na())return{uid:o,name:"Игрок ВКонтакте",photo:""};try{const a=await Ca(),i=await Bc(a.send("VKWebAppGetUserInfo"),Fc,"платформа не ответила на VKWebAppGetUserInfo"),c=`${i.first_name} ${i.last_name}`.trim();return{uid:o,name:c===""?"Игрок ВКонтакте":c,photo:i.photo_200}}catch(a){return console.warn("[vk] имя игрока не получено",a),{uid:o,name:"Игрок ВКонтакте",photo:""}}}let zo=null;function Oc(){return zo??=Dc(),zo}const La="blendars.race.board.v1",jc=200;let lt=null;function dn(e){return typeof e=="number"&&Number.isFinite(e)}function Uc(e){if(!Array.isArray(e))return[];const t=[];for(const n of e){if(t.length>=jc)break;if(typeof n!="object"||n===null)continue;const s=n;typeof s.uid!="string"||s.uid===""||typeof s.name=="string"&&(!dn(s.bestMs)||s.bestMs<0||t.push({uid:s.uid,name:s.name,photo:typeof s.photo=="string"?s.photo:"",bestMs:s.bestMs,lastMs:dn(s.lastMs)?s.lastMs:s.bestMs,runs:dn(s.runs)&&s.runs>0?Math.floor(s.runs):1,updatedAt:dn(s.updatedAt)?s.updatedAt:0}))}return t.sort(Aa)}function Aa(e,t){return e.bestMs!==t.bestMs?e.bestMs-t.bestMs:e.updatedAt!==t.updatedAt?e.updatedAt-t.updatedAt:e.uid<t.uid?-1:e.uid>t.uid?1:0}function Gc(){if(lt!==null)return lt;try{const e=localStorage.getItem(La);lt=e===null?[]:Uc(JSON.parse(e))}catch(e){console.warn("[race] таблица недоступна, веду её в памяти",e),lt=[]}return lt}function zc(e){lt=e;try{localStorage.setItem(La,JSON.stringify(e))}catch(t){console.warn("[race] рекорд не сохранён на диск",t)}}function Hc(e){const t=Gc(),n=t.findIndex(f=>f.uid===e.uid),s=n>=0?t[n]:void 0,o=s?.bestMs??0,a=Math.max(0,Math.round(e.timeMs)),i={uid:e.uid,name:e.name,photo:e.photo,bestMs:s===void 0?a:Math.min(s.bestMs,a),lastMs:a,runs:(s?.runs??0)+1,updatedAt:Date.now()},c=t.slice();n>=0?c[n]=i:c.push(i),c.sort(Aa),zc(c);const l=c.findIndex(f=>f.uid===e.uid);return{rank:l>=0?l+1:c.length,total:c.length,bestMs:i.bestMs,improved:s===void 0||a<o,previousBestMs:o,board:c}}function Vc(e,t){let n=!1,s=null;const o=Sc(e,{total:t,onFinished:i=>{Wc(i,()=>n).then(c=>{if(n){c();return}s?.(),s=c})}}),a=window;return a.__blendarsRace=o.view,{view:o.view,destroy(){n=!0,o.destroy(),s?.(),s=null,a.__blendarsRace===o.view&&delete a.__blendarsRace}}}async function Wc(e,t){const n=await Oc(),s=Hc({uid:n.uid,name:n.name,photo:n.photo,timeMs:e.timeMs});if(console.info("[race] финиш:",oo(e.timeMs),"· чекпоинтов",e.collected,"из",e.total,"· место",s.rank,"из",s.total,"· игрок",n.uid),t())return()=>{};const{showFinishCard:o}=await Z(async()=>{const{showFinishCard:a}=await import("./finish-card.DX_SSJbU.js");return{showFinishCard:a}},__vite__mapDeps([3,2]));return t()?()=>{}:o({timeMs:e.timeMs,collected:e.collected,total:e.total,outcome:s,identity:n})}function Yc(e){let t=0,n=0;const s=e.autoRender,o=()=>{const c=pa();t=c>0?1e3/c:0,n=t,e.autoRender=t===0?s:!1},a=c=>{t!==0&&(n+=c*1e3,n>=t&&(n=0,e.renderNextFrame=!0))};o(),e.on("update",a);const i=fa(o);return{destroy(){e.off("update",a),i(),e.autoRender=s}}}let Ra=1,tt=null;function Jc(){return ma()*Ra}function jl(e){Ra=e,Bs()}function Bs(){tt?.graphicsDevice&&(tt.graphicsDevice.maxPixelRatio=Jc(),tt.resizeCanvas(),tt.updateCanvasSize())}function Kc(e){tt=e,Bs();const t=fa(()=>{Bs()});return()=>{t(),tt===e&&(tt=null)}}const Xc=250,qc="menuRenderFps",Qc=`
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
`;function Zc(e=null){const t=document.createElement("div");t.className="mini-stats",t.setAttribute("role","status"),t.setAttribute("aria-label","Статистика кадра");const n=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");t.append(n,s,o,a);const i=document.createElement("style");i.id="mini-stats-style",i.textContent=Qc,document.head.append(i);const c=d=>{t.classList.toggle("mini-stats--inline",d!==null);const u=d??document.body;t.parentElement!==u&&u.append(t)};c(e);let l=null,f=vn(),v=!1;const h=()=>be("fps")||be("cpu")||be("draw")||be("vram"),g=()=>{t.classList.toggle("visible",f&&l!==null&&h())},C=(d,u,m)=>{const y=u.fps,p=y>0&&y<30;if(p!==v&&(v=p,n.classList.toggle("warn",p)),m.fps){const k=u.user.get(qc),A=typeof k=="number"&&k>0?` · рендер ${k}`:"";n.textContent=`${y>0?Math.round(y):"—"} FPS${A} · ${u.frameTime.toFixed(1)} ms`}m.cpu&&(s.textContent=`CPU ${u.cpuUpdateTime.toFixed(1)} / ${u.cpuRenderTime.toFixed(1)} / ${u.cpuPhysicsTime.toFixed(1)} мс`),m.draw&&(o.textContent=`Draw ${As(u.drawCallCount)} · Прим. ${As(u.frame.primitives)} · Шейд. ${As(u.frame.shaders)}`),m.vram&&(a.textContent=`VRAM ${Math.round(u.vramTotalBytes/1048576)} МБ · ${d.graphicsDevice.width}×${d.graphicsDevice.height} ${d.graphicsDevice.isWebGPU?"WebGPU":"WebGL2"}`)},E=()=>{const d=l;if(!d||!f)return;const u={fps:be("fps"),cpu:be("cpu"),draw:be("draw"),vram:be("vram")};n.hidden=!u.fps,s.hidden=!u.cpu,o.hidden=!u.draw,a.hidden=!u.vram,C(d,d.stats,u)};g();const S=window.setInterval(E,Xc),x=ca(()=>{f=vn(),g(),E()});return{setHost(d){c(d),E()},setApp(d){l=d,g(),d&&E()},destroy(){window.clearInterval(S),x(),t.remove(),i.remove()}}}function As(e){return Number.isFinite(e)?e>=1e6?`${Math.round(e/1e5)}М`:e>=1e4?`${Math.round(e/1e3)}к`:`${Math.round(e)}`:"—"}const el="hud-density--skinny",tl="hud-density--minimal";function nl(){const e=document.documentElement,t=()=>{const n=xr();e.classList.toggle(el,n!=="full"),e.classList.toggle(tl,n==="minimal")};return t(),ca(t)}function Ul(){return 1}const Ho="blendars-scrollbar",sl=[".dlg__body",".settings__scroll",".settings__tabs",".actions",".mp__list"],Oe=e=>sl.map(t=>`${t}${e}`).join(`,
`),ol=`
/* Firefox: тонкая полоса, ползунок gray на дорожке bg1. */
@supports not selector(::-webkit-scrollbar) {
    ${Oe("")} {
        scrollbar-width: thin;
        scrollbar-color: #928374 #28282899;
    }
}

@media (hover: hover) and (pointer: fine) {
    /* Chromium и WebKit. 12px — под штрих 8px плюс прозрачная рамка ползунка. */
    ${Oe("::-webkit-scrollbar")} {
        width: max(0.75rem, 12px);
        height: max(0.75rem, 12px);
    }
    /* Дорожка — тот же тёмный серый, что подложка панелей: полоса читается как
       часть окна, а не как плашка поверх текста. */
    ${Oe("::-webkit-scrollbar-track")} {
        background: #28282899;
        border-radius: 999px;
    }
    /* Стрелочные кнопки в старых WebKit — лишний хром. */
    ${Oe("::-webkit-scrollbar-button")} {
        display: none;
        width: 0;
        height: 0;
    }
    /* Прозрачная рамка в 2px + background-clip: padding-box оставляют круглый
       штрих 8px, а не прямоугольник во всю ширину полосы. */
    ${Oe("::-webkit-scrollbar-thumb")} {
        background: #928374;
        border: 1px solid transparent;
        background-clip: padding-box;
        border-radius: 999px;
    }
    ${Oe("::-webkit-scrollbar-thumb:hover")} { background-color: #ebdbb2; }
    ${Oe("::-webkit-scrollbar-thumb:active")} { background-color: #fe8019; }
    /* Уголок на пересечении двух полос серым квадратом вылезал бы в углу
       колонки вкладок, где полоса одна. */
    ${Oe("::-webkit-scrollbar-corner")} { background: transparent; }
}
`;function al(){if(document.getElementById(Ho))return;const e=document.createElement("style");e.id=Ho,e.textContent=ol,document.head.append(e)}const il="vehicle",Gl="vehicleInput",zl="vehicleWheel",rl="driveCamera",ao=document.getElementById("app");if(!ao)throw new Error("#app not found");al();let se=null,Ds=null,Ze=null,Os=null;const Jt={boot:.1,device:.35,decoders:.7,background:.95},je=new si(document.body);let Kt=null,js=null,Ut=null,Xt=null,Sn=null,xe=!1,Re=null,kn=null;const Us="blendars.backend";function Cn(e){try{e?localStorage.setItem(Us,e):localStorage.removeItem(Us)}catch{}}function cl(){try{const e=localStorage.getItem(Us);return e==="webgpu"||e==="webgl2"?e:null}catch{return null}}function ll(){const e=new URLSearchParams(location.search).get("backend");return e==="webgpu"||e==="webgl2"?e:null}let kt=ll()??cl();const V=new fc(ao,{onScene:e=>{Ma(V,e)},onBack:()=>{wl(V)},onRecord:()=>{El()}});window.__blendarsEnterSmoke=()=>{yl(V)};const Ce=gc(V.settings.backendSlot,{onSwitch:()=>{_l()}});{const e=document.createElement("style");e.textContent=hc,document.head.append(e)}navigator.gpu||Ce.setUnavailable("WebGPU не поддерживается этим браузером");function io(e,t){const n=t==="scene";e.setMode(t),e.setSceneChrome(n),Nn.setHost(e.statsHostFor(n))}const Nn=Zc(V.statsHost);nl();je.setStage("интерфейс",Jt.boot);window.__blendarsMenuReady=!0;Ic();ul();function dl(e){kn?.();const t=Kc(e),n=Yc(e);kn=()=>{t(),n.destroy()}}async function ul(){try{je.setStage("пресет настроек",Jt.boot);const{askBootPreset:e}=await Z(async()=>{const{askBootPreset:s}=await import("./boot-preset.C3xAZMnG.js");return{askBootPreset:s}},__vite__mapDeps([4,2]));if(await e(),kt==="webgpu"){const{confirmWebgpuSwitch:s}=await Z(async()=>{const{confirmWebgpuSwitch:a}=await import("./confirm-dialog.BoAueR29.js");return{confirmWebgpuSwitch:a}},[]);await s()||(kt=null,Cn(null),V.setStatus("Запуск на WebGL2 — WebGPU не подтверждён"))}const t=await Ct((s,o)=>{je.setStage(s,o??void 0),je.updateFromResources(),ml()});window.__blendarsEngine={backend:t.backend},window.__blendarsApp=t.app,Xt=t.backend,Ce.setBackend(t.backend),Nn.setApp(t.app),dl(t.app),t.backend==="webgpu"&&Ta(t),je.setStage("сцена меню",Jt.background);const{buildMenuBackground:n}=await Z(async()=>{const{buildMenuBackground:s}=await import("./menu-background.rA4ifnQq.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));Re=await n(t.app),window.__blendarsBackgroundReady=!0,pl(),je.setStage("готово",1),V.setStatus(""),await je.hide(),window.__blendarsInteractive=!0,console.info("[blendars] boot complete",t.backend)}catch(e){console.error("[blendars] boot failed",e),je.setError("Не удалось запустить рендер. Проверьте поддержку WebGPU/WebGL2 в браузере."),window.__blendarsInteractive=!0}}async function ml(){const e=new URLSearchParams(location.search).get("bootDelay");if(!e)return;const t=Number(e);!Number.isFinite(t)||t<=0||await new Promise(n=>setTimeout(n,Math.min(t,3e4)))}async function pl(){try{const{probeServiceWorker:e}=await Z(async()=>{const{probeServiceWorker:n}=await import("./capabilities.Vl_UvQZj.js");return{probeServiceWorker:n}},[]),t=await e("/blend-ars/sw.js");console.info(t==="registered"?"[blendars] Service Worker зарегистрирован: оффлайн-оболочка доступна":`[blendars] Service Worker: ${t} — оффлайн-старт недоступен`)}catch(e){console.warn("[blendars] регистрация Service Worker не удалась",e)}}function Ct(e){return Kt??=fl(e),Kt}async function fl(e){const{initEngine:t}=await Z(async()=>{const{initEngine:a}=await import("./engine-bootstrap.92J1uDsM.js");return{initEngine:a}},__vite__mapDeps([8,2])),n=document.createElement("canvas");n.className="game-canvas",n.style.zIndex="0",document.body.insertBefore(n,ao),js=n;const s=kt??"webgl2";return t(n,{physics:!0,deviceTypes:s==="webgl2"?["webgl2","webgpu"]:["webgpu","webgl2"],skipAdapterProbe:s==="webgpu"&&kt!==null,onStage:(a,i)=>{i===1?e?.(a,Jt.decoders):e?.(a,Jt.device)}})}const hl=5,bl=1e3,gl=3;function Ta(e){let t=0;Ut?.();let n=null;const s=c=>{Cn(null),ro("webgl2",{persist:!1,restoreScene:!1,reason:c})};let o=e.app.frame,a=0;const i=window.setInterval(()=>{if(document.hidden){o=e.app.frame;return}const c=e.app.frame;c===o?(a++,a>=gl&&(window.clearInterval(i),s("кадры не идут — вероятно, WebGPU завис на первом кадре"))):(a=0,o=c)},bl);Ut=()=>{window.clearInterval(i),n?.(),n=null},Z(async()=>{const{watchWebGpuErrors:c}=await import("./engine-bootstrap.92J1uDsM.js");return{watchWebGpuErrors:c}},__vite__mapDeps([8,2])).then(({watchWebGpuErrors:c})=>{if(xe){Ut?.();return}n=c(e.device,l=>{t++,console.warn(`[blendars] webgpu error #${t}: ${l.slice(0,200)}`),(xl(l)||t>=hl)&&(window.clearInterval(i),s(l))})})}function xl(e){return/out of memory|not enough memory/i.test(e)}async function ro(e,t){if(xe)return;xe=!0,Ce.setBusy(!0),t.reason&&console.warn("[blendars] смена рендера:",t.reason.slice(0,200));const{probeWebGpuAdapter:n}=await Z(async()=>{const{probeWebGpuAdapter:a}=await import("./engine-bootstrap.92J1uDsM.js");return{probeWebGpuAdapter:a}},__vite__mapDeps([8,2])),s=setTimeout(()=>{V.setStatus("Рендер переключается дольше обычного… если не идёт — F9")},25e3);if(e==="webgpu"){const a=await n();if(!a){Ce.setUnavailable("WebGPU не поддерживается этим браузером"),V.setStatus("WebGPU не поддерживается этим браузером"),clearTimeout(s),Ce.setBusy(!1),xe=!1;return}a.stalled?console.warn("[blendars] зонд WebGPU не ответил — пробуем по явному запросу"):a.software&&V.setStatus(`WebGPU: софтверный адаптер (${a.label||"без описания"}) — рендер может упасть`);const{confirmWebgpuSwitch:i}=await Z(async()=>{const{confirmWebgpuSwitch:l}=await import("./confirm-dialog.BoAueR29.js");return{confirmWebgpuSwitch:l}},[]);if(!await i()){V.setStatus("Остались на WebGL2 — WebGPU не подтверждён"),clearTimeout(s),Ce.setBusy(!1),xe=!1;return}}const o=Fa();o.setStage("смена рендера…");try{Ut?.(),Ut=null,o.setStage("смена рендера: остановка движка…"),se?.destroy(),se=null,window.__blendarsSceneReady=!1,Pa(),Ia(),so(null),Re?.destroy(),Re=null;const a=await Kt;Kt=null,Xt=null,Nn.setApp(null),kn?.(),kn=null,a?.detachResize(),a?.app.destroy(),js?.remove(),js=null,kt=e,t.persist&&Cn(e),o.setStage(`смена рендера: движок ${e.toUpperCase()}…`);const i=await Ct();Xt=i.backend,window.__blendarsEngine={backend:i.backend},window.__blendarsApp=i.app,Ce.setBackend(i.backend),Nn.setApp(i.app),i.backend==="webgpu"&&Ta(i),i.backend!==e&&V.setStatus(`${e.toUpperCase()} недоступен — рендер: ${i.backend.toUpperCase()}`);const c=t.restoreScene===!1?null:Sn;if(c)o.done(),await Ma(V,c);else{Sn=null,o.setStage("смена рендера: сцена меню…");const{buildMenuBackground:l}=await Z(async()=>{const{buildMenuBackground:f}=await import("./menu-background.rA4ifnQq.js");return{buildMenuBackground:f}},__vite__mapDeps([5,2,6,7]));Re=await l(i.app),io(V,"menu"),V.setBusy(!1),i.backend===e&&V.setStatus(""),o.done()}}catch(a){if(console.error("[blendars] смена рендера не удалась",a),t.allowRetry!==!1&&e!=="webgl2"){o.done(),kt="webgl2",Cn(null),xe=!1,Ce.setBusy(!1),await ro("webgl2",{persist:!1,allowRetry:!1});return}o.fail("не удалось сменить рендер"),V.setStatus("Не удалось сменить рендер — перезагрузите страницу (F9)")}finally{clearTimeout(s),Ce.setBusy(!1),xe=!1}}async function _l(){xe||Xt&&await ro(Xt==="webgpu"?"webgl2":"webgpu",{persist:!0})}async function yl(e){if(!xe){e.setBusy(!0);try{if(await Ct(),new URLSearchParams(location.search).get("scene")==="smoke"){const{buildSmokeScene:t}=await Z(async()=>{const{buildSmokeScene:n}=await import("./smoke-scene.zwMI0kje.js");return{buildSmokeScene:n}},__vite__mapDeps([9,2]));Re?.destroy(),Re=null,t((await Ct()).app)}e.setStatus("Ангар появится на этапе 4"),e.setBusy(!1)}catch(t){console.error("[blendars] enter game failed",t),e.setStatus("Не удалось открыть сцену"),e.setBusy(!1)}}}async function Ma(e,t){if(xe)return;e.setBusy(!0),e.setStatus(t==="maserati"?"Загрузка сцены: мазерати…":"Загрузка сцены…");const n=Fa();try{Re?.destroy(),Re=null;const s=await Ct(),{buildVehicleScene:o}=await Z(async()=>{const{buildVehicleScene:a}=await import("./vehicle-scene.BdToYMQ9.js");return{buildVehicleScene:a}},__vite__mapDeps([10,2,8,6]));se=await o(s.app,a=>n.setStage(a),{body:t,onAssetProgress:(a,i)=>n.setStage(a,i)}),io(e,"scene"),e.setBusy(!1),e.setStatus("WASD / стрелки — ехать, пробел — ручник, R — сброс на месте, Q — плечо камеры"),Sn=t,window.__blendarsSceneReady=!0,Sl(s.app),kl(s.app),so(()=>vl()),n.done()}catch(s){console.error("[blendars] vehicle scene failed",s),e.setStatus("Не удалось загрузить сцену"),n.fail(String(s?.message??s)),e.setBusy(!1)}}async function wl(e){se?.destroy(),se=null,Sn=null,window.__blendarsSceneReady=!1,so(null);const t=await Ct(),{buildMenuBackground:n}=await Z(async()=>{const{buildMenuBackground:s}=await import("./menu-background.rA4ifnQq.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));Re=await n(t.app),io(e,"menu"),e.setBusy(!1),e.setStatus(""),Pa(),Ia()}function vl(){const e=se?.root.findByName("camera"),t=e?.script?.get(rl);if(!e||!t)return null;const n=(o,a)=>typeof o=="number"&&Number.isFinite(o)?o:a,s=(o,a,i)=>o<a?a:o>i?i:o;return{read:()=>({yaw:n(t._manualYaw,0),lift:n(t._manualLift,0),zoom:n(t._zoom,1),shoulder:n(t.shoulder,1),distance:n(t.distance,6.4),height:n(t.height,2.5),fov:e.camera?n(e.camera.fov,60):60}),write:o=>{o.yaw!==void 0&&(t._manualYaw=s(o.yaw,-180,180)),o.lift!==void 0&&(t._manualLift=s(o.lift,-.6,3.4)),o.zoom!==void 0&&(t._zoom=s(o.zoom,.55,1.7)),o.shoulder!==void 0&&(t.shoulder=o.shoulder),o.distance!==void 0&&(t.distance=s(o.distance,3,15)),o.height!==void 0&&(t.height=s(o.height,1,6)),o.fov!==void 0&&e.camera&&(e.camera.fov=s(o.fov,40,90))},reset:()=>{t.resetLook()}}}async function El(){const e=(t,n)=>{V.setRecordState(t,n)};try{if(!Ze){const{GameRecorder:t}=await Z(async()=>{const{GameRecorder:o}=await import("./video-recorder.ilLNPhk5.js");return{GameRecorder:o}},__vite__mapDeps([11,2,1])),n=Kt;if(n===null){e("error","движок не поднят, запись невозможна");return}const s=(await n.catch(()=>null))?.app??null;if(s===null){e("error","сначала войди в сцену");return}Ze=new t(s,{onState:(o,a)=>e(o,a),onProgress:o=>V.setRecordProgress(o)},{frameRate:ha(),width:br(s.graphicsDevice.canvas.width||window.innerWidth),quality:ba(),keyFrameInterval:ga(),sound:Fs(),attachAudio:o=>se?.audio?.attachRecordStream(o)??(()=>{})})}if(Ze.recording){const t=await Ze.stop();t>0&&e("idle",`файл ${(t/1048576).toFixed(1)} МБ сохранён`)}else await Ze.start()}catch(t){e("error",t instanceof Error?t.message:"запись недоступна")}}function Sl(e){const t=()=>se?.root.findByName("vehicle")?.script?.get(il)??null,n=se?Ec(e,se.root,$s):null,s=se?Vc(e,$s):null,o=()=>n?.list()??[],a=()=>s?.view??null,i=()=>{const x=se?.root.findByName("camera")?.forward;return x?Math.atan2(x.x,-x.z):null},c=()=>{const S=se?.root.findByName("vehicle")?.getPosition();return S?{x:S.x,z:S.z}:null},l=document.createElement("div");l.style.cssText="position:fixed;left:0;top:0;width:0;height:0;padding-top:env(safe-area-inset-top);visibility:hidden;pointer-events:none",document.body.append(l);let f=0;const v=()=>{const S=Number.parseFloat(getComputedStyle(l).paddingTop);f=Number.isFinite(S)?S:0};v(),window.addEventListener("resize",v),window.addEventListener("orientationchange",v);let h=null,g=null,C=null;const E=Mc({getHeading:i,getVehicle:c,getCheckpoints:o,readRace:a,read:t,clusterHost:V.clusterHost,safeTop:()=>f});h=Rc(e,E),h.active?document.documentElement.classList.add("hud-in-canvas"):(h=null,E.destroy(),g=wc(t,V.clusterHost),C=Ac(i,c,o,a)),Ds=()=>{Ze?.destroy(),Ze=null,document.documentElement.classList.remove("hud-in-canvas"),h?.destroy(),h=null,g?.destroy(),C?.destroy(),n?.destroy(),s?.destroy(),window.removeEventListener("resize",v),window.removeEventListener("orientationchange",v),l.remove()}}function Pa(){Ds?.(),Ds=null}function kl(e){se&&Z(async()=>{const{attachTouchControls:t}=await import("./touch-controls.JMoLA5fj.js");return{attachTouchControls:t}},__vite__mapDeps([12,2])).then(({attachTouchControls:t})=>{se&&(Os=t(e,se.root).destroy)})}function Ia(){Os?.(),Os=null}function Fa(){const e=document.createElement("div");e.className="loading",Wo(e);const t=document.createElement("div");t.className="loading__title",t.textContent="СЦЕНА";const n=document.createElement("div");n.className="loading__bar loading__bar--unknown";const s=document.createElement("div");s.className="loading__fill",n.append(s);const o=document.createElement("div");return o.className="loading__stage",o.style.opacity="0.8",o.style.fontSize="13px",o.style.textTransform="uppercase",e.append(t,n,o),document.body.append(e),{setStage(a,i){if(o.textContent=a,i===void 0||!Number.isFinite(i)){n.classList.add("loading__bar--unknown");return}n.classList.remove("loading__bar--unknown"),s.style.width=`${Math.round(Math.min(1,Math.max(0,i))*100)}%`},done(){e.remove()},fail(a){n.hidden=!0,o.textContent=`ошибка: ${a}`,setTimeout(()=>e.remove(),4e3)}}}window.addEventListener("keydown",e=>{e.key==="F9"&&location.reload()});export{vr as A,Ul as B,Sr as C,rl as D,Cr as E,Lr as F,oo as G,Ol as H,Ln as I,Bl as J,qi as K,$l as L,zl as V,wn as a,mt as b,jl as c,Ue as d,Il as e,Pl as f,tr as g,Tl as h,Fl as i,fa as j,Rl as k,Rs as l,il as m,Al as n,Ml as o,vs as p,Dl as q,an as r,Ts as s,Mr as t,qe as u,ca as v,Nl as w,Ll as x,Gl as y,_r as z};
