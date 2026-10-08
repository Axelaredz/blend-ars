const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/music-player.BzXBPdOw.js","assets/music-audio.DNu4TXPq.js","assets/playcanvas.DbI3qi7k.js","assets/boot-preset.Cnck5uFP.js","assets/menu-background.BnxtfccR.js","assets/engine-sound.BcLeiDZH.js","assets/look-gestures.D7GS3G4t.js","assets/engine-bootstrap.CXdJUUkG.js","assets/smoke-scene.BkjTzTbI.js","assets/vehicle-scene.DU9zmKec.js","assets/video-recorder.D8sxvFri.js","assets/touch-controls.BtmxlsMT.js"])))=>i.map(i=>d[i]);
import{_ as ee,E as Kt,T as Zn,C as ia,M as Xt,a as no,b as go,S as ra,B as ca,V as so}from"./playcanvas.DbI3qi7k.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const oo="blendars-loading",la=`
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
`;function da(){if(document.getElementById(oo))return;const e=document.createElement("style");e.id=oo,e.textContent=la,document.head.append(e)}const ua="/blend-ars/assets/loader.CPCrwQQc.webp",ma="#282828",ao="blendars-splash",pa=`
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
    background-color: ${ma};
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
`;function xo(e){if(!document.getElementById(ao)){const s=document.createElement("style");s.id=ao,s.textContent=pa,document.head.append(s)}if(e.querySelector(":scope > .splash-logo")){e.classList.add("splash-host");return}const t=document.createElement("div");t.className="splash-logo";const n=document.createElement("img");n.src=ua,n.alt="Blendars",t.append(n),e.prepend(t),e.classList.add("splash-host")}class fa{root;fill;bar;stageEl;bytesEl;errorEl;lastPercent=-1;lastBytesText="";lastStage="";constructor(t,n={}){if(this.root=document.createElement("div"),this.root.className="loading",da(),xo(this.root),this.root.setAttribute("role","progressbar"),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","100"),this.root.setAttribute("aria-valuenow","0"),this.root.setAttribute("aria-label","Загрузка"),n.title!==void 0){const o=document.createElement("h1");o.className="loading__title",o.textContent=n.title,this.root.append(o)}this.bar=document.createElement("div"),this.bar.className="loading__bar loading__bar--unknown",this.fill=document.createElement("div"),this.fill.className="loading__fill",this.bar.append(this.fill),this.bar.removeAttribute("aria-valuenow");const s=document.createElement("div");s.className="loading__row",this.stageEl=document.createElement("span"),this.stageEl.className="loading__stage",this.stageEl.textContent="старт",this.bytesEl=document.createElement("span"),this.bytesEl.className="loading__bytes",this.bytesEl.textContent="",s.append(this.stageEl,this.bytesEl),this.errorEl=document.createElement("div"),this.errorEl.className="loading__error",this.errorEl.hidden=!0,this.root.append(this.bar,s,this.errorEl),t.append(this.root)}setStage(t,n){t!==this.lastStage&&(this.stageEl.textContent=t,this.lastStage=t);const s=n!==void 0&&Number.isFinite(n);if(this.bar.classList.toggle("loading__bar--unknown",!s),s){const o=Math.round(Math.min(1,Math.max(0,n))*100);o!==this.lastPercent&&(this.fill.style.width=`${o}%`,this.root.setAttribute("aria-valuenow",String(o)),this.lastPercent=o)}}setError(t){this.bar.hidden=!0,this.stageEl.textContent="ошибка",this.errorEl.textContent=t,this.errorEl.hidden=!1}updateFromResources(){if(typeof performance.getEntriesByType!="function")return;const t=performance.getEntriesByType("resource");let n=0,s=0;for(const a of t)a.name.indexOf(location.origin)===0&&(n+=a.encodedBodySize||a.transferSize||0,s=Math.max(s,a.responseEnd||0));if(n<=0)return;const o=`${ba(n)} загружено`;o!==this.lastBytesText&&(this.bytesEl.textContent=o,this.lastBytesText=o)}hide(){return this.root.setAttribute("aria-hidden","true"),this.root.classList.add("hidden"),new Promise(t=>{let n=!1;const s=()=>{n||(n=!0,this.root.remove(),t())};this.root.addEventListener("transitionend",s,{once:!0}),setTimeout(s,400)})}}function ba(e){return e<1024?`${e} Б`:e<1024*1024?`${(e/1024).toFixed(0)} КБ`:`${(e/(1024*1024)).toFixed(1)} МБ`}const _o="/blend-ars/assets/LilitaOne-Regular.C8J_njg9.ttf",ha="/blend-ars/assets/ui-click.DcT3uYBZ.wav",ga=new URL("/blend-ars/assets/fullscreen.C4xFj3BF.svg",import.meta.url).href,xa=new URL("/blend-ars/assets/fullscreen-exit.D85sBYy_.svg",import.meta.url).href,_a=new URL("/blend-ars/assets/info.BdEiL0Sf.svg",import.meta.url).href,ya=new URL("/blend-ars/assets/book-open.CLVm05VY.svg",import.meta.url).href,io=new URL("/blend-ars/assets/gear_six.TA3VDyxO.svg",import.meta.url).href,wa=new URL("/blend-ars/assets/camera-rotate.D-uiZS3m.svg",import.meta.url).href,va=new URL("/blend-ars/assets/music-note.BpgtDFsX.svg",import.meta.url).href,Ea=new URL("/blend-ars/assets/package.BDtnf6Kx.svg",import.meta.url).href,Sa=new URL("/blend-ars/assets/flag.CeS1AlXY.svg",import.meta.url).href,ka=new URL("/blend-ars/assets/garage.D_BJEZuB.svg",import.meta.url).href,Ca=new URL("/blend-ars/assets/storefront.e4K1ebmi.svg",import.meta.url).href,Na=new URL("/blend-ars/assets/truck.rvSKQmy5.svg",import.meta.url).href,La=new URL("/blend-ars/assets/coupe.DdXCwqWg.svg",import.meta.url).href,Aa=new URL("/blend-ars/assets/x.D2ii0gML.svg",import.meta.url).href,Ra=new URL("/blend-ars/assets/list.DXUiLcf_.svg",import.meta.url).href,Ta=new URL("/blend-ars/assets/triangle-left.DPdzCyZ0.svg",import.meta.url).href,mc=new URL("/blend-ars/assets/stop-square.Cvj1GcXd.svg",import.meta.url).href,pc=new URL("/blend-ars/assets/arrows_clockwise.Toz6NZFk.svg",import.meta.url).href,Pa=`
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
`;function bn(e){const t=document.createElement("div");if(t.className="dlg",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",e.title),!document.getElementById("dlg-style")){const r=document.createElement("style");r.id="dlg-style",r.textContent=Pa,document.head.append(r)}const n=document.createElement("div");n.className="dlg__panel";const s=document.createElement("h2");s.className="dlg__title",s.textContent=e.title;const o=document.createElement("div");return o.className="dlg__body",o.append(e.body),n.append(s,o),t.append(n),document.body.append(t),{root:t,open(){t.hidden=!1},close(){t.hidden=!0},destroy(){t.remove()}}}const Ia=[{body:"truck",title:"Джип",note:"Грузовик. Родное шасси, грузовая физика.",icon:Na},{body:"maserati",title:"Мазерати",note:"GT3-обвес на том же шасси.",icon:La}],Fa=`
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
`;function Ba(e){if(!document.getElementById("game-modes-style")){const o=document.createElement("style");o.id="game-modes-style",o.textContent=Fa,document.head.append(o)}const t=document.createElement("div");t.className="modes";const n=Ia.map(o=>{const a=document.createElement("button");a.className="modes__card",a.type="button",a.dataset.body=o.body;const r=document.createElement("span");r.className="modes__art",r.style.setProperty("--modes-icon",`url(${JSON.stringify(o.icon)})`);const m=document.createElement("span");m.className="modes__title",m.textContent=o.title;const u=document.createElement("p");return u.className="modes__note",u.textContent=o.note,a.append(r,m,u),a.addEventListener("pointerdown",y=>{y.preventDefault(),!a.disabled&&e(o.body)}),t.append(a),a}),s=bn({title:"Режимы игры",body:t});return{dialog:s,open(){s.open()},setBusy(o){for(const a of n)a.disabled=o},destroy(){s.destroy()}}}const Ma={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:8,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:6,fill:1.05,rimLeft:6.15,rimRight:6.3,spot:7.05,fog:.005,gamma:1,gammaStrength:.5,toneMapping:2,sunElevation:15,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:.3}},shadows:{val:{cascades:4,distribution:.95,blend:.12,distance:320,resolution:4096,bias:0,normalBias:.05}},postfx:{on:!0,val:{bloom:.1,bloomBlur:16,bloomThreshold:.2,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:.95,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:1,fps:0,msaa:!0}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},Oa={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:4,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:5,fill:.3,rimLeft:.5,rimRight:.5,spot:2,fog:.0035,gamma:0,gammaStrength:1.2,toneMapping:2,sunElevation:9,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:1}},shadows:{val:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3}},postfx:{on:!1,val:{bloom:0,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.48,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:.5,fps:30,msaa:!1}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},yo="blendars.presets.v1",wo="blendars-settings",vo=1;let se={active:null,list:[]},ro=!1;function Ne(){if(ro)return se;ro=!0;try{const e=localStorage.getItem(yo);if(!e)return se;const t=JSON.parse(e);if(!t||typeof t!="object")return se;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=$a(o);a&&s.push(a)}se={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return se}function $a(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function xt(){try{localStorage.setItem(yo,JSON.stringify(se))}catch{}}function us(){return Ne().list.slice().sort((t,n)=>n.created-t.created)}function cn(){return Ne().active}function Da(){const e=Ne();return e.active?e.list.find(t=>t.id===e.active)??null:null}function ms(e){Ne(),se.active=e,xt()}function et(e,t,n=Date.now()){Ne();const s={id:Wa(n),name:e.trim()||Oe(new Date(n)),created:n,data:t};return se.list.push(s),se.active=s.id,xt(),s}function ja(e,t){const s=Ne().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,xt(),!0):!1}function Eo(e,t){const s=Ne().list.find(o=>o.id===e);return s?(s.data=t,xt(),!0):!1}function za(e){Ne();const t=se.list.findIndex(n=>n.id===e);t<0||(se.list.splice(t,1),se.active===e&&(se.active=null),xt())}function Oe(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function Ga(){Ne(),se={active:null,list:[]},xt()}function Ua(e){const t={app:wo,version:vo,name:e.name,created:e.created,data:e.data},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`${Va(e.name)}.json`,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Ha(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==wo||n.version!==vo||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function Va(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function Wa(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const So="blendars.physics-presets.v1",Ya="blendars-physics",Ja=1;let ve={active:null,list:[]},co=!1;function hn(){if(co)return ve;co=!0;try{const e=localStorage.getItem(So);if(!e)return ve;const t=JSON.parse(e);if(!t||typeof t!="object")return ve;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=Ka(o);a&&s.push(a)}ve={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ve}function Ka(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function ko(){try{localStorage.setItem(So,JSON.stringify(ve))}catch{}}function Xa(){return hn().list.slice().sort((e,t)=>t.created-e.created)}function qa(){return hn().active}function Qa(e){hn(),ve.active=e,ko()}function es(e,t,n=Date.now()){hn();const s={id:ti(n),name:e.trim()||Za(new Date(n)),created:n,data:t};return ve.list.push(s),ve.active=s.id,ko(),s}function Za(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function ei(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==Ya||n.version!==Ja||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function ti(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const vs="blendars.sound-effects.v3",Es="blendars.sound-effects.v2",Co=[["engine","Двигатель"],["road","Шум качения"],["skid","Скрежет шин"],["shift","Переключение передач"],["impact","Удары кузова"],["landing","Посадка на колёса"],["music","Фоновая музыка"],["uiClick","Клики меню"]],No=Co.map(([e])=>e),Lo={engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},ni={engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1},he={...Lo},de={...ni},je={engineTorque:{label:"Момент двигателя (Н·м)",def:520,off:520,min:200,max:900,decimals:0},brakeForce:{label:"Сила тормозов (Н)",def:6500,off:6500,min:2e3,max:12e3,decimals:0},mass:{label:"Масса кузова (кг)",def:2200,off:2200,min:1200,max:3500,decimals:0},engineBraking:{label:"Торможение двигателем",def:.15,off:.07,min:0,max:.4,decimals:2},dragForce:{label:"Сопротивление воздуха",def:1.75,off:0,min:0,max:4,decimals:2},rollingResistance:{label:"Сопротивление качения",def:.02,off:0,min:0,max:.06,decimals:3},lateralGripAssist:{label:"Помощь бокового сцепа",def:1.5,off:0,min:0,max:6,decimals:1},wheelGrip:{label:"Сцепление колёс",def:4,off:2.7,min:1,max:8,decimals:1},rollInfluence:{label:"Крен (перенос нагрузки)",def:.15,off:.08,min:0,max:.3,decimals:2},suspStiffness:{label:"Жёсткость пружины",def:20,off:20,min:5,max:60,decimals:1},suspDamping:{label:"Демпфер (распускание)",def:2.3,off:2.3,min:.5,max:8,decimals:2},suspCompression:{label:"Демпфер (сжатие)",def:4.4,off:4.4,min:.5,max:12,decimals:2},suspTravel:{label:"Ход подвески",def:.35,off:.35,min:.1,max:.8,decimals:2},suspForce:{label:"Предел силы пружины (Н)",def:2e4,off:2e4,min:5e3,max:6e4,decimals:0},suspRelVel:{label:"Демпфер и скорость кузова",def:1,off:1,min:0,max:2,decimals:2},antiRoll:{label:"Стабилизатор (рычаг)",def:0,off:0,min:0,max:1.5,decimals:2},inertiaScale:{label:"Инерция поворота (yaw)",def:1.3,off:1,min:.5,max:2.5,decimals:2},highSpeedLock:{label:"Спад угла руля (доля)",def:.55,off:.4,min:.2,max:1,decimals:2},highSpeedLockAt:{label:"Скорость спада руля",def:100,off:80,min:50,max:150,decimals:0,unit:"kmh"},camTurnRate:{label:"Камера: скорость поворота",def:3.5,off:2.2,min:1,max:6,decimals:1},camFollowRate:{label:"Камера: сглаживание",def:11,off:9,min:4,max:20,decimals:0},skidThreshold:{label:"Порог звука юза",def:.15,off:.3,min:0,max:.5,decimals:2}},nt=Object.keys(je),Ss="blendars.physics.v1",ne={},ae={};si();function si(){for(const e of nt)ne[e]=!0,ae[e]=je[e].def}function oi(){try{const e=localStorage.getItem(Ss);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:null,o=typeof n.val=="object"&&n.val!==null?n.val:null;for(const a of nt){const r=je[a],m=s?.[a];typeof m=="boolean"&&(ne[a]=m);const u=o?.[a];typeof u=="number"&&Number.isFinite(u)&&(ae[a]=Math.min(r.max,Math.max(r.min,u)))}}catch{}}function Rt(){try{localStorage.setItem(Ss,JSON.stringify({on:ne,val:ae}))}catch{}}function fc(e){return ne[e]?ae[e]:je[e].off}const Zt=[];function bc(e){return Zt.push(e),()=>{const t=Zt.indexOf(e);t>=0&&Zt.splice(t,1)}}const en=[];function q(){for(const e of en)e()}function ai(e){return en.push(e),()=>{const t=en.indexOf(e);t>=0&&en.splice(t,1)}}function Tt(){for(const e of Zt)e();q()}function ts(e){const t=je[e],n=ae[e];return t.unit==="kmh"?`${Math.round(n)} км/ч`:n.toFixed(t.decimals)}const Ao=[0,1,2,3,4],ii=["линейный","филмик","ACES","нейтральный","без тонмаппинга"],Se={exposure:{label:"Экспозиция кадра",def:.5,min:.5,max:10,decimals:1},key:{label:"Яркость солнца",def:1,min:0,max:10,decimals:2},fill:{label:"Заполняющий свет",def:.3,min:0,max:15,decimals:2},rimLeft:{label:"Контровой слева",def:.5,min:0,max:15,decimals:2},rimRight:{label:"Контровой справа",def:.5,min:0,max:15,decimals:2},spot:{label:"Верхний софтбокс",def:2,min:0,max:15,decimals:2},fog:{label:"Туман задника",def:.0035,min:0,max:.05,decimals:4},gamma:{label:"Гамма-коррекция (sRGB)",def:1,min:0,max:1,decimals:0,options:[0,1]},gammaStrength:{label:"Сила гаммы",def:1.2,min:.5,max:3,decimals:2},toneMapping:{label:"Тонмаппинг",def:3,min:0,max:4,decimals:0,options:Ao},sunElevation:{label:"Высота солнца",def:34,min:-10,max:90,decimals:0},sunAzimuth:{label:"Азимут солнца",def:135,min:0,max:360,decimals:0},turbidity:{label:"Мутность неба",def:3,min:1,max:10,decimals:2},rayleigh:{label:"Рэлеевское рассеяние",def:2.2,min:0,max:5,decimals:2},mieCoefficient:{label:"Ми-рассеяние",def:.005,min:0,max:.05,decimals:3},mieDirectionalG:{label:"Анизотропия Ми",def:.8,min:0,max:.99,decimals:2},skyLuminance:{label:"Яркость неба",def:1,min:0,max:5,decimals:2}},st=Object.keys(Se),ks="blendars.lighting.v1",ie={};ri();ci();function ri(){for(const e of st)ie[e]=Se[e].def}function ci(){try{const e=localStorage.getItem(ks);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of st){const a=Se[o],r=s?.[o];typeof r=="number"&&Number.isFinite(r)&&(ie[o]=Math.min(a.max,Math.max(a.min,r)))}}catch{}}function tn(){try{localStorage.setItem(ks,JSON.stringify({val:ie}))}catch{}}function li(e){return ie[e]}function hc(){return 2**(li("gammaStrength")-1)}const nn=[];function gc(e){return nn.push(e),()=>{const t=nn.indexOf(e);t>=0&&nn.splice(t,1)}}function sn(){for(const e of nn)e();q()}function lo(e){const t=Se[e];if(t.options){const n=t.options.indexOf(ie[e]);return n>=0?n:0}return Math.round((ie[e]-t.min)/(t.max-t.min)*100)}function di(e,t){const n=Se[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function ns(e){const t=Se[e],n=ie[e];return t.options&&t.options.length===2&&t.options[1]===1?n>=1?"вкл":"выкл":e==="toneMapping"?ii[Ao.indexOf(n)]??n.toFixed(t.decimals):n.toFixed(t.decimals)}const ui=[512,1024,2048,4096],ge={cascades:{label:"Каскадов",def:2,min:1,max:4,decimals:0,options:[1,2,3,4]},distribution:{label:"Раскладка каскадов",def:.7,min:0,max:1,decimals:2},blend:{label:"Бесшовность каскадов",def:.12,min:0,max:.3,decimals:2},distance:{label:"Дальность теней",def:320,min:50,max:500,decimals:0},resolution:{label:"Разрешение атласа",def:4096,min:0,max:3,decimals:0,options:ui},bias:{label:"Смещение тени",def:0,min:0,max:1,decimals:2},normalBias:{label:"Смещение по нормали",def:0,min:0,max:.5,decimals:2}},$e=Object.keys(ge),Cs="blendars.shadows.v1",X={};mi();pi();function mi(){for(const e of $e)X[e]=ge[e].def}function pi(){try{const e=localStorage.getItem(Cs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of $e){const a=ge[o],r=s?.[o];if(!(typeof r!="number"||!Number.isFinite(r))){if(a.options){const u=a.options[r]===r?r:a.options.indexOf(r);u>=0&&u<a.options.length&&(X[o]=Number(a.options[u]));continue}X[o]=Math.min(a.max,Math.max(a.min,r))}}}catch{}}function ot(){try{localStorage.setItem(Cs,JSON.stringify({val:X}))}catch{}}function xc(e){return X[e]}const on=[];function _c(e){return on.push(e),()=>{const t=on.indexOf(e);t>=0&&on.splice(t,1)}}function Pt(){for(const e of on)e();q()}function ss(e,t){const n=ge[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function fi(e,t){const n=ge[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function os(e){const t=ge[e];return e==="distance"?`${Math.round(X[e])} м`:X[e].toFixed(t.decimals)}const ke={bloom:{label:"Ореол (bloom)",def:.05,min:0,max:.1,decimals:3},bloomBlur:{label:"Мягкость ореола",def:8,min:1,max:16,decimals:0,options:[1,2,4,8,16]},bloomThreshold:{label:"Порог ореола",def:.6,min:0,max:2,decimals:2},vignette:{label:"Виньетка",def:0,min:0,max:1,decimals:2},vignetteInner:{label:"Виньетка: начало",def:0,min:0,max:1,decimals:2},vignetteOuter:{label:"Виньетка: край",def:1.25,min:.5,max:2,decimals:2},vignetteCurvature:{label:"Виньетка: кромка",def:.5,min:.2,max:1,decimals:2},taa:{label:"Временное сглаживание",def:0,min:0,max:1,decimals:0,options:[0,1]},taaJitter:{label:"Сглаживание: джиттер",def:0,min:0,max:1,decimals:2},dof:{label:"Глубина резкости",def:1,min:0,max:1,decimals:0,options:[0,1]},dofFocus:{label:"Фокус (м)",def:1,min:1,max:60,decimals:1},dofRange:{label:"Зона фокуса (м)",def:40,min:1,max:40,decimals:1},dofRadius:{label:"Сила размытия",def:1,min:1,max:8,decimals:1},dofNear:{label:"Размывать передний план",def:1,min:0,max:1,decimals:0,options:[0,1]},grading:{label:"Цветокоррекция",def:1,min:0,max:1,decimals:0,options:[0,1]},brightness:{label:"Яркость",def:1,min:.5,max:1.5,decimals:2},contrast:{label:"Контраст",def:1,min:.5,max:1.5,decimals:2},saturation:{label:"Насыщенность",def:1,min:0,max:2,decimals:2},fringing:{label:"Аберрация",def:0,min:0,max:100,decimals:0},sharpness:{label:"Резкость",def:0,min:0,max:1,decimals:2}},De=Object.keys(ke),Ns="blendars.postfx.v1",Ls="blendars.postfx.on",oe={},Ro=!0;let Ce=Ro;bi();hi();function bi(){for(const e of De)oe[e]=ke[e].def;Ce=Ro}function hi(){try{const e=localStorage.getItem(Ns);if(e){const n=JSON.parse(e);if(n&&typeof n=="object"){const s=n,o=typeof s.val=="object"&&s.val!==null?s.val:null;for(const a of De){const r=ke[a],m=o?.[a];typeof m=="number"&&Number.isFinite(m)&&(oe[a]=Math.min(r.max,Math.max(r.min,m)))}}}const t=localStorage.getItem(Ls);t!==null&&(Ce=t!=="0")}catch{}}function Je(){try{localStorage.setItem(Ns,JSON.stringify({val:oe})),localStorage.setItem(Ls,Ce?"1":"0")}catch{}}function yc(e){return oe[e]}function as(){return Ce}function uo(e){Ce!==e&&(Ce=e,Je(),at())}const As="blendars.hud.v1";let rt=!0,ze=1280;const ue=[],ps=["fps","cpu","draw","vram"],gi={fps:"Частота кадра (FPS и мс)",cpu:"Загрузка CPU (обновление / рендер / физика)",draw:"Вызовы отрисовки и шейдеры",vram:"Видеопамять и разрешение"};let ct={fps:!0,cpu:!0,draw:!0,vram:!0};function xi(){try{const e=localStorage.getItem(As);if(!e)return;const t=JSON.parse(e);if(t&&typeof t=="object"){const n=t.on;if(n&&typeof n=="object"){const s=n.stats;typeof s=="number"&&(rt=s!==0);const o=n.record;(o===1280||o===1920||o==="window")&&(ze=o);const a=n.touch;typeof a=="number"&&(Ft=a!==0)}}}catch{}}const Rs="blendars.stats.v1";function _i(){try{const e=localStorage.getItem(Rs);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s={...ct};for(const o of ps){const a=n[o];typeof a=="boolean"&&(s[o]=a)}ct=s}catch{}}function yi(){try{localStorage.setItem(Rs,JSON.stringify(ct))}catch{}}function Ts(){try{localStorage.setItem(As,JSON.stringify({on:{stats:rt?1:0,record:ze,touch:Ft?1:0}}))}catch{}}function ln(){return rt}function To(e){if(rt!==e){rt=e,Ts();for(const t of ue)t();q()}}function fe(e){return ct[e]}function wi(e){return gi[e]}function vi(e,t){if(ct[e]!==t){ct[e]=t,yi();for(const n of ue)n();q()}}function Ei(){return ze}function fs(e){if(!(e!==1280&&e!==1920&&e!=="window")&&ze!==e){ze=e,Ts();for(const t of ue)t();q()}}function Si(e){const t=ze==="window"?e:ze;return!Number.isFinite(t)||t<=0?1280:Math.round(t)}function Po(e){return ue.push(e),()=>{const t=ue.indexOf(e);t>=0&&ue.splice(t,1)}}let ki="full";function Ci(){return ki}let Ft=!0;function Ni(){return Ft}function Li(e){if(Ft!==e){Ft=e,Ts();for(const t of ue)t();q()}}const Io="blendars.touch.v1";let Bt=1,Mt=.85,Ot="split",$t=!1;function Ai(){try{const e=localStorage.getItem(Io);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t;typeof n.scale=="number"&&n.scale>=.6&&n.scale<=2&&(Bt=n.scale),typeof n.opacity=="number"&&n.opacity>=.25&&n.opacity<=1&&(Mt=n.opacity),(n.layout==="split"||n.layout==="left"||n.layout==="right")&&(Ot=n.layout),typeof n.swap=="boolean"&&($t=n.swap)}catch{}}function gn(){try{localStorage.setItem(Io,JSON.stringify({scale:Bt,opacity:Mt,layout:Ot,swap:$t}))}catch{}}function Ri(){return Bt}function Ti(e){const t=Math.min(Math.max(e,.6),2);if(Bt!==t){Bt=t,gn();for(const n of ue)n();q()}}function Pi(){return Mt}function Ii(e){const t=Math.min(Math.max(e,.25),1);if(Mt!==t){Mt=t,gn();for(const n of ue)n();q()}}function Fi(){return Ot}function Bi(e){if(Ot!==e){Ot=e,gn();for(const t of ue)t();q()}}function Mi(){return $t}function Oi(e){if($t!==e){$t=e,gn();for(const t of ue)t();q()}}xi();_i();Ai();const an=[];function wc(e){return an.push(e),()=>{const t=an.indexOf(e);t>=0&&an.splice(t,1)}}function at(){for(const e of an)e();q()}function mo(e,t){const n=ke[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function $i(e,t){const n=ke[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function is(e){const t=oe[e],n=ke[e];return n.options&&n.options.length===2&&n.options[1]===1?t>=1?"вкл":"выкл":t.toFixed(n.decimals)}Di();oi();function Di(){try{const e=localStorage.getItem(vs)??localStorage.getItem(Es);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:n,o=typeof n.vol=="object"&&n.vol!==null?n.vol:null;for(const a of Object.keys(Lo)){const r=s[a];typeof r=="boolean"&&(he[a]=r);const m=o?.[a];typeof m=="number"&&Number.isFinite(m)&&(de[a]=Math.min(1,Math.max(0,m)))}}catch{}}function dn(){try{localStorage.setItem(vs,JSON.stringify({on:he,vol:de})),localStorage.removeItem(Es)}catch{}}function ji(e){return he[e]?de[e]:0}function vc(e){return de[e]}function Ec(e,t){const n=Math.min(1,Math.max(0,t));de[e]!==n&&(de[e]=n,dn(),q())}const zi=`@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JSON.stringify(_o)}) format('truetype');
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
`;function it(){return{version:1,physics:{on:{...ne},val:{...ae}},lighting:{val:{...ie}},shadows:{val:{...X}},postfx:{on:Ce,val:{...oe}},sound:{on:{...he},vol:{...de}},hud:{on:{stats:rt,record:ze}},graphics:{val:{scale:lt,fps:dt,msaa:ut}},recording:{val:{fps:mt,quality:pt,keyFrame:ft,sound:bt}}}}function Gi(){return{on:{...ne},val:{...ae}}}let bs=!1;function Ui(){return bs}function tt(e){const t=[];if(!e||typeof e!="object")return{applied:t};bs=!0;try{return Hi(e,t)}finally{bs=!1}}function Hi(e,t){const n=e,s=(g,_,d)=>typeof g=="number"&&Number.isFinite(g)?Math.min(d,Math.max(_,g)):null,o=g=>g&&typeof g=="object"?g:null,a=g=>g&&typeof g=="object"?g:null,r=g=>g&&typeof g=="object"?g:null,m=n.physics&&typeof n.physics=="object"?n.physics:null;if(m){const g=a(m.on),_=o(m.val);let d=!1;for(const c of nt){const f=je[c];g&&typeof g[c]=="boolean"&&(ne[c]=g[c],d=!0);const l=_?s(_[c],f.min,f.max):null;l!==null&&(ae[c]=l,d=!0)}d&&(Rt(),Tt(),t.push("физика"))}const u=o(n.lighting&&typeof n.lighting=="object"?n.lighting.val:null);if(u){let g=!1;for(const _ of st){const d=Se[_],c=s(u[_],d.min,d.max);c!==null&&(ie[_]=c,g=!0)}g&&(tn(),sn(),t.push("свет"))}const y=o(n.shadows&&typeof n.shadows=="object"?n.shadows.val:null);if(y){let g=!1;for(const _ of $e){const d=ge[_],c=y[_];if(d.options){const S=d.options[c]===c?c:d.options.indexOf(c);S>=0&&S<d.options.length&&(X[_]=Number(d.options[S]),g=!0);continue}const f=s(c,d.min,d.max);f!==null&&(X[_]=f,g=!0)}g&&(ot(),Pt(),t.push("тени"))}const k=n.postfx&&typeof n.postfx=="object"?n.postfx:null;if(k){let g=!1;typeof k.on=="boolean"&&(Ce=k.on,g=!0);const _=o(k.val);if(_)for(const d of De){const c=ke[d],f=_[d];if(c.options){const S=c.options.indexOf(f);S>=0&&S<c.options.length&&(oe[d]=Number(c.options[S]),g=!0);continue}const l=s(f,c.min,c.max);l!==null&&(oe[d]=l,g=!0)}g&&(Je(),at(),t.push("Post FX"))}const w=n.sound&&typeof n.sound=="object"?n.sound:null;if(w){const g=a(w.on),_=o(w.vol);let d=!1;for(const c of No){g&&typeof g[c]=="boolean"&&(he[c]=g[c],d=!0);const f=_?s(_[c],0,1):null;f!==null&&(de[c]=f,d=!0)}d&&(dn(),t.push("звук"))}const x=n.hud&&typeof n.hud=="object"?n.hud:null,M=x&&typeof x.on=="object"?x.on:null;if(M&&typeof M.stats=="boolean"){To(M.stats);const g=M.record;(g===1280||g===1920||g==="window")&&fs(g),t.push("интерфейс")}const O=r(n.graphics&&typeof n.graphics=="object"?n.graphics.val:null);if(O){let g=!1;const _=O.scale;(_===.5||_===.75||_===1)&&(Fs(_),g=!0);const d=O.fps;(d===0||d===30||d===60||d===120)&&(Bs(d),g=!0),typeof O.msaa=="boolean"&&(Ms(O.msaa),g=!0),g&&(Ut(),xn(),t.push("графика"))}const F=r(n.recording&&typeof n.recording=="object"?n.recording.val:null);if(F){let g=!1;const _=F.fps;(_===24||_===30||_===60)&&(Go(_),g=!0);const d=F.quality;(d==="low"||d==="medium"||d==="high")&&(Uo(d),g=!0);const c=F.keyFrame;(c===1||c===2||c===4)&&(Ho(c),g=!0),typeof F.sound=="boolean"&&(Vo(F.sound),g=!0),g&&(Ht(),Vt(),t.push("запись"))}return{applied:t}}const Ps="blendars.graphics.v1";let lt=1,dt=0,ut=!0;const Is="blendars.gfx-preset.v1",Vi={phone:{label:"Телефон",graphics:{scale:.5,fps:30,msaa:!1},shadows:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3},postfxOn:!1,postfx:{bloom:0,vignette:0,fringing:0,sharpness:0,grading:0}},balanced:{label:"Оптимальный",graphics:{scale:.75,fps:60,msaa:!1},shadows:{cascades:2,distribution:.7,blend:.12,distance:220,resolution:2048,bias:.7,normalBias:.4},postfxOn:!0,postfx:{bloom:.04,bloomBlur:8,bloomThreshold:.6,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:.25}},ultra:{label:"Ультра",graphics:{scale:1,fps:0,msaa:!0},shadows:{cascades:4,distribution:.7,blend:.12,distance:320,resolution:4096,bias:1,normalBias:.5},postfxOn:!0,postfx:{bloom:.06,bloomBlur:8,bloomThreshold:0,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:.25}}};let Gt="phone";function Wi(){const e=window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window,n=navigator.hardwareConcurrency??4,s=navigator.deviceMemory??4,o=Math.min(window.screen.width,window.screen.height)<768;return(e||t)&&(n<=4||s<=4||o)}function Yi(){return Gt}function Fo(){try{localStorage.setItem(Is,Gt)}catch{}}function Ji(){try{const e=localStorage.getItem(Is);(e==="phone"||e==="balanced"||e==="ultra")&&(Gt=e)}catch{}}function Bo(e){const t=Vi[e];Gt=e,Fo(),Fs(t.graphics.scale),Bs(t.graphics.fps),Ms(t.graphics.msaa);for(const n of $e)X[n]=t.shadows[n]??ge[n].def;ot(),Pt(),Ce=t.postfxOn;for(const n of De){const s=t.postfx[n];typeof s=="number"&&(oe[n]=s)}Je(),at()}const rn=[];function Ki(){try{const e=localStorage.getItem(Ps);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.scale===.5||s.scale===.75||s.scale===1)&&(lt=s.scale),(s.fps===0||s.fps===30||s.fps===60||s.fps===120)&&(dt=s.fps),typeof s.msaa=="boolean"&&(ut=s.msaa)}catch{}}function Ut(){try{localStorage.setItem(Ps,JSON.stringify({val:{scale:lt,fps:dt,msaa:ut}}))}catch{}}function xn(){for(const e of rn)e();q()}function Mo(){return lt}function Oo(){return dt}function Lt(){return ut}function Fs(e){lt!==e&&(lt=e,Ut(),xn())}function Bs(e){dt!==e&&(dt=e,Ut(),xn())}function Ms(e){ut!==e&&(ut=e,Ut(),xn())}function $o(e){return rn.push(e),()=>{const t=rn.indexOf(e);t>=0&&rn.splice(t,1)}}Ki();Ji();const Os="blendars.recording.v1";let mt=30,pt="high",ft=2,bt=!0;const Xi=[];function qi(){try{const e=localStorage.getItem(Os);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.fps===24||s.fps===30||s.fps===60)&&(mt=s.fps),(s.quality==="low"||s.quality==="medium"||s.quality==="high")&&(pt=s.quality),(s.keyFrame===1||s.keyFrame===2||s.keyFrame===4)&&(ft=s.keyFrame),typeof s.sound=="boolean"&&(bt=s.sound)}catch{}}function Ht(){try{localStorage.setItem(Os,JSON.stringify({val:{fps:mt,quality:pt,keyFrame:ft,sound:bt}}))}catch{}}function Vt(){for(const e of Xi)e();q()}function Do(){return mt}function jo(){return pt}function zo(){return ft}function hs(){return bt}function Go(e){mt!==e&&(mt=e,Ht(),Vt())}function Uo(e){pt!==e&&(pt=e,Ht(),Vt())}function Ho(e){ft!==e&&(ft=e,Ht(),Vt())}function Vo(e){bt!==e&&(bt=e,Ht(),Vt())}qi();function Qi(){const e=Da();if(e){const u=tt(e.data);u.applied.length>0&&console.info(`[settings] применён пресет «${e.name}»: ${u.applied.join(", ")}`);return}let t=!1;try{t=!!(localStorage.getItem(vs)??localStorage.getItem(Es)??localStorage.getItem(Ss)??localStorage.getItem(ks)??localStorage.getItem(Cs)??localStorage.getItem(Ns)??localStorage.getItem(Ls)??localStorage.getItem(As)??localStorage.getItem(Rs)??localStorage.getItem(Ps)??localStorage.getItem(Os)??localStorage.getItem(Is))}catch{t=!0}if(t)return;const n=Wi();Gt=n?"phone":"ultra",Fo(),Ut(),ot(),Je();const o=it();Bo("balanced");const a=it();tt(n?Oa:Ma);const r=it();tt(o),et("По умолчанию",o),et("Оптимальный",a),et(n?"Телефон":"Ультра",r);const m=us().find(u=>u.name===(n?"Телефон":"Ультра"));ms(m?m.id:null),console.info(`[settings] сохранённых настроек нет — созданы пресеты «По умолчанию», «Оптимальный», «${n?"Телефон":"Ультра"}» (активен «${n?"Телефон":"Ультра"}»)`)}Qi();function Zi(){const e=document.createElement("div");e.className="settings",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Настройки");const t=document.createElement("style");t.textContent=zi;const n=document.createElement("div");n.className="settings__panel";const s=document.createElement("h2");s.className="settings__title",s.textContent="Настройки";const o=document.createElement("p");o.className="settings__hint",o.textContent="Галочка — эффект включён, ползунок — его громкость. Выбор сохраняется в браузере и действует сразу.",o.id="settings-hint",e.setAttribute("aria-describedby",o.id);const a=document.createElement("div");a.className="settings__tabs",a.setAttribute("role","tablist");const r=document.createElement("button");r.className="settings__tab settings__tab--on",r.type="button",r.textContent="Звук",r.setAttribute("role","tab"),r.setAttribute("aria-selected","true");const m=document.createElement("button");m.className="settings__tab",m.type="button",m.textContent="Физика",m.setAttribute("role","tab"),m.setAttribute("aria-selected","false");const u=document.createElement("button");u.className="settings__tab",u.type="button",u.textContent="Освещение",u.setAttribute("role","tab"),u.setAttribute("aria-selected","false");const y=document.createElement("button");y.className="settings__tab",y.type="button",y.textContent="Тени",y.setAttribute("role","tab"),y.setAttribute("aria-selected","false");const k=document.createElement("button");k.className="settings__tab",k.type="button",k.textContent="Post FX",k.setAttribute("role","tab"),k.setAttribute("aria-selected","false");const w=document.createElement("button");w.className="settings__tab",w.type="button",w.textContent="Интерфейс",w.setAttribute("role","tab"),w.setAttribute("aria-selected","false");const x=document.createElement("button");x.className="settings__tab",x.type="button",x.textContent="Управление",x.setAttribute("role","tab"),x.setAttribute("aria-selected","false");const M=document.createElement("button");M.className="settings__tab",M.type="button",M.textContent="Пресеты",M.setAttribute("role","tab"),M.setAttribute("aria-selected","false");const O=document.createElement("button");O.className="settings__tab",O.type="button",O.textContent="Графика",O.setAttribute("role","tab"),O.setAttribute("aria-selected","false");const F=document.createElement("button");F.className="settings__tab",F.type="button",F.textContent="Запись",F.setAttribute("role","tab"),F.setAttribute("aria-selected","false"),a.append(r,m,u,y,k,w,x,O,F,M);const g=i=>{const p=[r,m,u,y,k,w,x,O,F,M];for(let E=0;E<p.length;E++){const A=p[E];if(!A)continue;const D=E===i;A.classList.toggle("settings__tab--on",D),A.setAttribute("aria-selected",String(D))}_.hidden=i!==0,f.hidden=i!==1,G.hidden=i!==2,xe.hidden=i!==3,me.hidden=i!==4,Te.hidden=i!==5,pe.hidden=i!==6,qe.hidden=i!==7,Ue.hidden=i!==8,Ze.hidden=i!==9};r.addEventListener("click",()=>g(0)),m.addEventListener("click",()=>g(1)),u.addEventListener("click",()=>g(2)),y.addEventListener("click",()=>g(3)),k.addEventListener("click",()=>g(4)),w.addEventListener("click",()=>g(5)),x.addEventListener("click",()=>g(6)),O.addEventListener("click",()=>g(7)),F.addEventListener("click",()=>g(8)),M.addEventListener("click",()=>g(9));const _=document.createElement("div");_.className="settings__pane",_.append(o);const d=document.createElement("div");d.className="settings__list";const c={};for(const[i,p]of Co){const E=document.createElement("div");E.className="settings__row";const A=document.createElement("label");A.className="settings__head";const D=document.createElement("span");D.textContent=p;const L=document.createElement("input");L.type="checkbox",L.checked=he[i],A.append(D,L);const v=document.createElement("div");v.className="settings__vol",v.classList.toggle("settings__vol--off",!he[i]);const C=document.createElement("input");C.type="range",C.min="0",C.max="100",C.step="1",C.value=String(Math.round(de[i]*100)),C.setAttribute("aria-label",`Громкость: ${p}`);const R=document.createElement("output");R.className="settings__pct",R.textContent=`${C.value}%`,C.addEventListener("input",()=>{de[i]=Number(C.value)/100,R.textContent=`${C.value}%`,dn(),q()}),v.append(C,R),L.addEventListener("change",()=>{he[i]=L.checked,v.classList.toggle("settings__vol--off",!L.checked),dn(),q()}),c[i]=()=>{L.checked=he[i],v.classList.toggle("settings__vol--off",!he[i]),C.value=String(Math.round(de[i]*100)),R.textContent=`${C.value}%`},E.append(A,v),d.append(E)}_.append(d);const f=document.createElement("div");f.className="settings__pane",f.hidden=!0;const l=document.createElement("p");l.className="settings__hint",l.textContent="Галочка — тюнинг «против скольжения», выключена — исходное поведение игры. Ползунок — значение, ↺ — сброс строки. Всё применяется сразу, даже за рулём.",f.append(l);const S=document.createElement("div");S.className="physics-tabs";const T=document.createElement("button");T.className="physics-tab physics-tab--on",T.type="button",T.textContent="Тонкая настройка",T.setAttribute("role","tab"),T.setAttribute("aria-selected","true");const b=document.createElement("button");b.className="physics-tab",b.type="button",b.textContent="Пресеты физики",b.setAttribute("role","tab"),b.setAttribute("aria-selected","false"),S.append(T,b),f.append(S);const h=document.createElement("div");h.className="physics-content",f.append(h);const P=document.createElement("div");P.className="settings__list";const I=document.createElement("div");I.className="physics-presets",h.append(P,I);const N=i=>{i==="fine"?(T.classList.add("physics-tab--on"),b.classList.remove("physics-tab--on"),T.setAttribute("aria-selected","true"),b.setAttribute("aria-selected","false"),P.hidden=!1,I.hidden=!0):(T.classList.remove("physics-tab--on"),b.classList.add("physics-tab--on"),T.setAttribute("aria-selected","false"),b.setAttribute("aria-selected","true"),P.hidden=!0,I.hidden=!1)};T.addEventListener("click",()=>N("fine")),b.addEventListener("click",()=>N("presets"));const $=()=>{const i=Xa(),p=qa();if(i.length===0){const L=document.createElement("p");L.className="settings__presetempty",L.textContent="Сохраненных пресетов нет",I.append(L);return}const E=document.createElement("div");E.className="settings__presets",i.forEach(L=>{const v=document.createElement("button");v.className="settings__presetbtn",v.textContent=L.name,v.type="button",v.setAttribute("role","menuitemradio"),v.setAttribute("aria-checked",String(L.id===p)),v.setAttribute("aria-label",`Пресет физики: ${L.name}`),v.addEventListener("click",()=>{Qa(L.id),N("presets")}),E.append(v)}),I.append(E);const A=document.createElement("button");A.className="settings__presetbtn",A.textContent="Импорт",A.type="button",A.setAttribute("role","menuitem"),A.setAttribute("aria-label","Импорт пресета физики"),A.addEventListener("click",()=>{const L=document.createElement("input");L.type="file",L.accept=".json",L.click(),L.addEventListener("change",async v=>{const R=v.target.files[0];if(!R)return;const j=await R.text(),Y=ei(j);if(!Y){console.warn("[settings] Невалидный файл пресета физики");return}es(Y.name??"Импортированный пресет",Y.data),I.innerHTML="",$()}),A.parentNode?.replaceChild(L,A),setTimeout(()=>L.click(),100)}),I.append(A);const D=document.createElement("button");D.className="settings__presetbtn",D.textContent="Новый",D.type="button",D.setAttribute("role","menuitem"),D.setAttribute("aria-label","Создать новый пресет физики"),D.addEventListener("click",()=>{es("Новый пресет",{}),I.innerHTML="",$()}),I.append(D)};$(),N("fine");const B={};for(const i of nt){const p=je[i],E=document.createElement("div");E.className="settings__row";const A=document.createElement("label");A.className="settings__head";const D=document.createElement("span");D.textContent=p.label;const L=document.createElement("input");L.type="checkbox",L.checked=ne[i],A.append(D,L);const v=document.createElement("div");v.className="settings__vol",v.classList.toggle("settings__vol--off",!ne[i]);const C=document.createElement("input");C.type="range",C.min="0",C.max="100",C.step="1",C.value=String(Math.round((ae[i]-p.min)/(p.max-p.min)*100)),C.setAttribute("aria-label",`Значение: ${p.label}`);const R=document.createElement("output");R.className="settings__pct settings__pct--val",R.textContent=ts(i);const j=document.createElement("button");j.className="settings__reset",j.type="button",j.textContent="↺",j.title="Сбросить по умолчанию",j.setAttribute("aria-label",`Сбросить по умолчанию: ${p.label}`);const Y=()=>{L.checked=ne[i],v.classList.toggle("settings__vol--off",!ne[i]),C.value=String(Math.round((ae[i]-p.min)/(p.max-p.min)*100)),R.textContent=ts(i)};B[i]=Y,C.addEventListener("input",()=>{const Q=p.min+(p.max-p.min)*(Number(C.value)/100);ae[i]=Number(Q.toFixed(p.decimals)),R.textContent=ts(i),Rt(),Tt()}),L.addEventListener("change",()=>{ne[i]=L.checked,v.classList.toggle("settings__vol--off",!L.checked),Rt(),Tt()}),j.addEventListener("click",()=>{ne[i]=!0,ae[i]=p.def,Y(),Rt(),Tt()}),v.append(C,R,j),E.append(A,v),P.append(E)}h.append(P);const z=document.createElement("button");z.className="settings__presetbtn",z.type="button",z.textContent="Сохранить как пресет",z.title="Сохранить текущие настройки физики в пресет",z.addEventListener("click",()=>{const i=prompt("Введите название пресета физики:","");if(i===null||i.trim()==="")return;const p=Gi();es(i.trim(),p),I.innerHTML="",$(),N("presets")}),h.append(z);const U=document.createElement("button");U.className="settings__resetall",U.type="button",U.textContent="Сбросить все настройки физики",U.addEventListener("click",()=>{for(const i of nt)ne[i]=!0,ae[i]=je[i].def,B[i]?.();Rt(),Tt()}),f.append(U);const G=document.createElement("div");G.className="settings__pane",G.hidden=!0;const J=document.createElement("p");J.className="settings__hint",J.textContent="Ползунок — уровень света (слева от центра — студия, к правому краю — ярче), ↺ — сброс строки. Свет главного экрана меняется сразу и запоминается. «Гамма-коррекция» — аппаратная (движок держит её как вкл/выкл), а «Сила гаммы» — непрерывный подъём полутонов поверх неё: 1 — как есть, каждый шаг вверх удваивает свет.",G.append(J);const K=document.createElement("div");K.className="settings__list";const Le={};for(const i of st){const p=Se[i],E=document.createElement("div");E.className="settings__row";const A=document.createElement("div");A.className="settings__head";const D=document.createElement("span");D.textContent=p.label,A.append(D);const L=document.createElement("div");L.className="settings__vol";const v=document.createElement("input");v.type="range",v.min="0",v.max="100",v.step="1",p.options&&(v.max=String(p.options.length-1)),v.value=String(lo(i)),v.setAttribute("aria-label",`Освещение: ${p.label}`);const C=document.createElement("output");C.className="settings__pct settings__pct--val",C.textContent=ns(i);const R=document.createElement("button");R.className="settings__reset",R.type="button",R.textContent="↺",R.title="Сбросить по умолчанию",R.setAttribute("aria-label",`Сбросить по умолчанию: ${p.label}`);const j=()=>{v.value=String(lo(i)),C.textContent=ns(i)};Le[i]=j,v.addEventListener("input",()=>{ie[i]=di(i,Number(v.value)),C.textContent=ns(i),tn(),sn()}),R.addEventListener("click",()=>{ie[i]=p.def,j(),tn(),sn()}),L.append(v,C,R),E.append(A,L),K.append(E)}G.append(K);const H=document.createElement("button");H.className="settings__resetall",H.type="button",H.textContent="Сбросить все настройки освещения",H.addEventListener("click",()=>{for(const i of st)ie[i]=Se[i].def,Le[i]?.();tn(),sn()}),G.append(H);const xe=document.createElement("div");xe.className="settings__pane",xe.hidden=!0;const re=document.createElement("p");re.className="settings__hint",re.textContent="Каскады разбивают дальность теней на несколько карт: у ближней детализация выше, поэтому машина отбрасывает резкую тень даже вдали. Один каскад — одна карта на всю дальность. Меняется сразу, даже в заезде.",xe.append(re);const _t=document.createElement("div");_t.className="settings__list";const Ke={};for(const i of $e){const p=ge[i],E=document.createElement("div");E.className="settings__row";const A=document.createElement("div");A.className="settings__head";const D=document.createElement("span");D.textContent=p.label,A.append(D);const L=document.createElement("div");L.className="settings__vol";const v=document.createElement("input");v.type="range",v.min="0",v.max="100",v.step="1",p.options&&(v.max=String(p.options.length-1)),v.value=String(ss(i,X[i])),v.setAttribute("aria-label",`Тени: ${p.label}`);const C=document.createElement("output");C.className="settings__pct settings__pct--val",C.textContent=os(i);const R=document.createElement("button");R.className="settings__reset",R.type="button",R.textContent="↺",R.title="Сбросить по умолчанию",R.setAttribute("aria-label",`Сбросить по умолчанию: ${p.label}`);const j=()=>{v.value=String(ss(i,X[i])),C.textContent=os(i)};Ke[i]=j,v.addEventListener("input",()=>{X[i]=fi(i,Number(v.value)),C.textContent=os(i),ot(),Pt()}),R.addEventListener("click",()=>{X[i]=p.def,j(),ot(),Pt()}),L.append(v,C,R),E.append(A,L),_t.append(E)}xe.append(_t);const Ge=document.createElement("button");Ge.className="settings__resetall",Ge.type="button",Ge.textContent="Сбросить все настройки теней",Ge.addEventListener("click",()=>{for(const i of $e)X[i]=ge[i].def,Ke[i]?.();ot(),Pt()}),xe.append(Ge);const me=document.createElement("div");me.className="settings__pane",me.hidden=!0;const Ae=document.createElement("p");Ae.className="settings__hint",Ae.textContent="Пост-обработка кадра: ореол вокруг солнца, виньетка, резкость, цветокоррекция, временное сглаживание и глубина резкости. Главный переключатель снимает всю обработку разом.",me.append(Ae);const _n=document.createElement("div");_n.className="settings__row";const yn=document.createElement("label");yn.className="settings__head";const Gs=document.createElement("span");Gs.textContent="Пост-обработка включена";const Re=document.createElement("input");Re.type="checkbox",Re.checked=as(),yn.append(Gs,Re),Re.addEventListener("change",()=>uo(Re.checked)),_n.append(yn),me.append(_n);const wn=document.createElement("div");wn.className="settings__list";const Wt={};for(const i of De){const p=ke[i],E=document.createElement("div");E.className="settings__row";const A=document.createElement("div");A.className="settings__head";const D=document.createElement("span");D.textContent=p.label,A.append(D);const L=document.createElement("div");L.className="settings__vol";const v=document.createElement("input");v.type="range",v.min="0",v.max="100",v.step="1",p.options&&(v.max=String(p.options.length-1)),v.value=String(mo(i,oe[i])),v.setAttribute("aria-label",`Post FX: ${p.label}`);const C=document.createElement("output");C.className="settings__pct settings__pct--val",C.textContent=is(i);const R=document.createElement("button");R.className="settings__reset",R.type="button",R.textContent="↺",R.title="Сбросить по умолчанию",R.setAttribute("aria-label",`Сбросить по умолчанию: ${p.label}`);const j=()=>{v.value=String(mo(i,oe[i])),C.textContent=is(i)};Wt[i]=j,v.addEventListener("input",()=>{oe[i]=$i(i,Number(v.value)),C.textContent=is(i),Je(),at()}),R.addEventListener("click",()=>{oe[i]=p.def,j(),Je(),at()}),L.append(v,C,R),E.append(A,L),wn.append(E)}me.append(wn);const yt=document.createElement("button");yt.className="settings__resetall",yt.type="button",yt.textContent="Сбросить все настройки Post FX",yt.addEventListener("click",()=>{for(const i of De)oe[i]=ke[i].def,Wt[i]?.();Re.checked=!0,uo(!0),Je(),at()}),me.append(yt);const Te=document.createElement("div");Te.className="settings__pane",Te.hidden=!0;const vn=document.createElement("p");vn.className="settings__hint",vn.textContent="Служебные элементы поверх игры. Счётчик кадра живёт в левом верхнем углу на всех экранах; ниже выбирается, из каких строк он состоит.",Te.append(vn);const En=document.createElement("div");En.className="settings__row";const Sn=document.createElement("label");Sn.className="settings__head";const Us=document.createElement("span");Us.textContent="Статистика кадра";const Xe=document.createElement("input");Xe.type="checkbox",Xe.checked=ln(),Sn.append(Us,Xe),Xe.addEventListener("change",()=>To(Xe.checked)),En.append(Sn),Te.append(En);const kn=document.createElement("p");kn.className="settings__hint",kn.textContent="Строки счётчика кадра. Если снять все, панель останется пустой плашкой — обновление текста всё равно стоит кадра, поэтому лишние строки лучше не держать включёнными без нужды.",Te.append(kn);const Cn=document.createElement("div");Cn.className="settings__row settings__row--stack";const Hs={};for(const i of ps){const p=document.createElement("label");p.className="settings__check";const E=document.createElement("input");E.type="checkbox",E.checked=fe(i);const A=document.createElement("span");A.textContent=wi(i),E.addEventListener("change",()=>vi(i,E.checked)),Hs[i]=E,p.append(E,A),Cn.append(p)}Te.append(Cn);const pe=document.createElement("div");pe.className="settings__pane",pe.hidden=!0;const Nn=document.createElement("p");Nn.className="settings__hint",Nn.textContent="Сенсорное управление появляется только на устройствах с тач-экраном. Галочка прячет педали совсем; ниже — размер, прозрачность, расположение и схема кнопок. Всё сохраняется в браузере и действует сразу.",pe.append(Nn);const Ln=document.createElement("div");Ln.className="settings__row";const An=document.createElement("label");An.className="settings__head";const Vs=document.createElement("span");Vs.textContent="Сенсорное управление";const wt=document.createElement("input");wt.type="checkbox",wt.checked=Ni(),An.append(Vs,wt),wt.addEventListener("change",()=>Li(wt.checked)),Ln.append(An),pe.append(Ln);const Rn=document.createElement("div");Rn.className="settings__row";const Tn=document.createElement("label");Tn.className="settings__head";const Ws=document.createElement("span");Ws.textContent="Размер кнопок",Tn.append(Ws);const Pn=document.createElement("div");Pn.className="settings__vol";const ce=document.createElement("input");ce.type="range",ce.min="60",ce.max="200",ce.step="5",ce.value=String(Math.round(Ri()*100)),ce.setAttribute("aria-label","Размер сенсорных кнопок");const Yt=document.createElement("output");Yt.className="settings__pct",Yt.textContent=`${ce.value}%`,ce.addEventListener("input",()=>{Ti(Number(ce.value)/100),Yt.textContent=`${ce.value}%`}),Pn.append(ce,Yt),Rn.append(Tn,Pn),pe.append(Rn);const In=document.createElement("div");In.className="settings__row";const Fn=document.createElement("label");Fn.className="settings__head";const Ys=document.createElement("span");Ys.textContent="Прозрачность",Fn.append(Ys);const Bn=document.createElement("div");Bn.className="settings__vol";const le=document.createElement("input");le.type="range",le.min="25",le.max="100",le.step="5",le.value=String(Math.round(Pi()*100)),le.setAttribute("aria-label","Прозрачность сенсорных кнопок");const Jt=document.createElement("output");Jt.className="settings__pct",Jt.textContent=`${le.value}%`,le.addEventListener("input",()=>{Ii(Number(le.value)/100),Jt.textContent=`${le.value}%`}),Bn.append(le,Jt),In.append(Fn,Bn),pe.append(In);const qe=document.createElement("div");qe.className="settings__pane",qe.hidden=!0;const Mn=document.createElement("div");Mn.className="settings__backend";const On=document.createElement("p");On.className="settings__hint",On.textContent="Масштаб рендера уменьшает число пикселей, которые движок рисует за кадр: картинка мыльнее, но кадры стабильнее. Лимит кадров держит потолок частоты — помогает на ноутбуках от батареи. Сглаживание применяется при запуске: после его включения страницу нужно перезагрузить.",qe.append(On);const _e=(i,p,E,A)=>{const D=document.createElement("div");D.className="settings__row";const L=document.createElement("div");L.className="settings__head";const v=document.createElement("span");v.textContent=i,L.append(v);const C=document.createElement("div");C.className="settings__vol",C.style.flexWrap="wrap";const R=[];for(const[Y,Q]of p){const W=document.createElement("button");W.className="settings__resetall",W.type="button",W.style.marginTop="0",W.style.flex="1 1 auto",W.style.textTransform="none",W.textContent=Q,W.addEventListener("click",()=>{A(Y),j()}),R.push(W),C.append(W)}const j=()=>{const Y=E();for(let Q=0;Q<p.length;Q++)R[Q]?.toggleAttribute("disabled",p[Q]?.[0]===Y)};return j(),D.append(L,C),{row:D,refresh:j}},ea=_e("Расположение",[["split","По краям"],["left","Слева"],["right","Справа"]],()=>Fi(),i=>{(i==="split"||i==="left"||i==="right")&&Bi(i)});pe.append(ea.row);const ta=_e("Кнопки крестовины",[["normal","▲ газ, ▼ тормоз"],["swap","▲ тормоз, ▼ газ"]],()=>Mi()?"swap":"normal",i=>{Oi(i==="swap")});pe.append(ta.row);const $n=_e("Масштаб рендера",[["0.5","50 %"],["0.75","75 %"],["1","100 %"]],()=>String(Mo()),i=>{const p=Number(i);(p===.5||p===.75||p===1)&&Fs(p)}),Dn=_e("Лимит кадров",[["0","Выкл"],["30","30 fps"],["60","60 fps"],["120","120 fps"]],()=>String(Oo()),i=>{const p=Number(i);(p===0||p===30||p===60||p===120)&&Bs(p)}),jn=document.createElement("div");jn.className="settings__row";const zn=document.createElement("label");zn.className="settings__head";const Js=document.createElement("span");Js.textContent="Сглаживание MSAA";const Pe=document.createElement("input");Pe.type="checkbox",Pe.checked=Lt(),zn.append(Js,Pe);const vt=document.createElement("span");vt.className="settings__pct",vt.textContent=Lt()?"применится после перезагрузки":"",Pe.addEventListener("change",()=>{Ms(Pe.checked),vt.textContent=Pe.checked?"применится после перезагрузки":""}),jn.append(zn,vt);const Gn=_e("Пресет графики",[["phone","Телефон"],["balanced","Оптимальный"],["ultra","Ультра"]],()=>Yi(),i=>{if(!(i!=="phone"&&i!=="balanced"&&i!=="ultra")){Bo(i),$n.refresh(),Dn.refresh(),Gn.refresh(),Pe.checked=Lt(),vt.textContent=Lt()?"применится после перезагрузки":"";for(const p of $e)Ke[p]?.();for(const p of De)Wt[p]?.();Re.checked=as()}}),Un=document.createElement("p");Un.className="settings__hint",Un.textContent="Рендер: WebGL2 работает везде, WebGPU даёт больше эффектов, но на части телефонов подвисает на первом кадре. Смена бэкенда пересобирает движок и перезагружает сцену.",qe.append(Un,Mn,Gn.row,$n.row,Dn.row,jn);const Ue=document.createElement("div");Ue.className="settings__pane",Ue.hidden=!0;const Hn=document.createElement("p");Hn.className="settings__hint",Hn.textContent="Разрешение и частота записи — насколько дорого кодировать. Качество кодека — насколько жирный файл: чем выше, тем чётче картинка и тем сильнее просядет игра во время записи. Всё применяется к следующему нажатию «Запись».",Ue.append(Hn);const Vn=document.createElement("div");Vn.className="settings__recordslot",Ue.append(Vn);const Wn=document.createElement("div");Wn.className="settings__row";const Yn=document.createElement("label");Yn.className="settings__head";const Ks=document.createElement("span");Ks.textContent="Звук в файле";const Qe=document.createElement("input");Qe.type="checkbox",Qe.checked=hs(),Yn.append(Ks,Qe),Qe.addEventListener("change",()=>Vo(Qe.checked)),Wn.append(Yn);const Xs=_e("Разрешение",[["1280","720p"],["1920","1080p"],["window","Как на экране"]],()=>String(Ei()),i=>{if(i==="window"){fs("window");return}(i==="1280"||i==="1920")&&fs(Number(i))}),qs=_e("Частота записи",[["24","24 fps"],["30","30 fps"],["60","60 fps"]],()=>String(Do()),i=>{const p=Number(i);(p===24||p===30||p===60)&&Go(p)}),Qs=_e("Качество кодека",[["low","Низкое"],["medium","Среднее"],["high","Высокое"]],()=>jo(),i=>{(i==="low"||i==="medium"||i==="high")&&Uo(i)}),Zs=_e("Ключевой кадр",[["1","1 с"],["2","2 с"],["4","4 с"]],()=>String(zo()),i=>{const p=Number(i);(p===1||p===2||p===4)&&Ho(p)});Ue.append(Wn,Xs.row,qs.row,Qs.row,Zs.row);const Ze=document.createElement("div");Ze.className="settings__pane",Ze.hidden=!0;const Jn=document.createElement("p");Jn.className="settings__hint",Jn.textContent="Пресет — это все настройки разом: физика, свет, тени, Post FX, звук и интерфейс. Активный пресет применяется при запуске и одинаково работает во всех сценах. Имя нового пресета — дата и время до минуты.",Ze.append(Jn);const te=document.createElement("p");te.className="settings__status",te.setAttribute("role","status"),te.textContent="";const Kn=document.createElement("div");Kn.className="settings__presetnamefield";const ye=document.createElement("input");ye.type="text",ye.value=Oe(),ye.placeholder="Название пресета",ye.setAttribute("aria-label","Название нового пресета");const Et=document.createElement("button");Et.className="settings__presetbtn",Et.type="button",Et.textContent="Сохранить",Kn.append(ye,Et);const na=document.createElement("div");na.className="settings__row";const St=document.createElement("button");St.className="settings__resetall",St.type="button",St.textContent="Обновить активный пресет",St.addEventListener("click",()=>{const i=cn();if(!i){te.textContent="Активного пресета нет — сохраните новый.";return}Eo(i,it()),te.textContent="Текущие настройки записаны в активный пресет.",Fe()});const kt=document.createElement("button");kt.className="settings__resetall",kt.type="button",kt.textContent="Импорт из файла";const Ie=document.createElement("input");Ie.type="file",Ie.accept="application/json,.json",Ie.hidden=!0,kt.addEventListener("click",()=>Ie.click()),Ie.addEventListener("change",()=>{const i=Ie.files?.[0];Ie.value="",i&&(async()=>{try{const p=Ha(await i.text());if(!p){te.textContent="Это не файл настроек игры.";return}const E=tt(p.data);if(E.applied.length===0){te.textContent="В файле нет знакомых настроек.";return}const A=et(p.name??i.name.replace(/\.json$/i,""),p.data,p.created??Date.now());ms(A.id),Xn(),Fe(),ye.value=Oe(),te.textContent=`Импортировано «${A.name}»: ${E.applied.join(", ")}`}catch(p){te.textContent=`Не удалось прочитать файл: ${p instanceof Error?p.message:"ошибка чтения"}`}})()});const Ct=document.createElement("button");Ct.className="settings__resetall",Ct.type="button",Ct.textContent="Убрать все пресеты",Ct.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты? Настройки останутся как есть.")&&(Ga(),Xn(),Fe(),te.textContent="Пресеты удалены, текущие настройки не тронуты.")});const Nt=document.createElement("div");Nt.className="settings__presets";const Xn=()=>{for(const i of nt)B[i]?.();for(const i of st)Le[i]?.();for(const i of $e)Ke[i]?.();for(const i of De)Wt[i]?.();for(const i of No)c[i]?.();Re.checked=as(),Xe.checked=ln();for(const i of ps){const p=Hs[i];p&&(p.checked=fe(i))}Pe.checked=Lt(),$n.refresh(),Dn.refresh(),Gn.refresh(),Xs.refresh(),qs.refresh(),Qs.refresh(),Zs.refresh(),Qe.checked=hs()},sa=(i,p)=>{const E=us().find(D=>D.id===i);if(!E)return;const A=tt(E.data);ms(i),Xn(),te.textContent=A.applied.length>0?`Применён пресет «${p}»: ${A.applied.join(", ")}`:`В пресете «${p}» нет знакомых настроек.`},eo=i=>i>0?Oe(new Date(i)):"дата неизвестна",Fe=()=>{Nt.replaceChildren();const i=us(),p=cn();if(i.length===0){const E=document.createElement("p");E.className="settings__presetempty",E.textContent="Пресетов пока нет. Настройте всё как надо и нажмите «Сохранить».",Nt.append(E);return}for(const E of i){const A=document.createElement("div");A.className="settings__preset";const D=E.id===p;D&&A.classList.add("settings__preset--active");const L=document.createElement("div");L.className="settings__presetinfo";const v=document.createElement("span");v.className="settings__presetname",v.textContent=E.name;const C=document.createElement("span");C.className="settings__presetmeta",C.textContent=D?`${eo(E.created)} · активен`:eo(E.created),L.append(v,C);const R=document.createElement("button");R.className="settings__presetbtn",R.type="button",R.textContent="✎",R.title="Переименовать",R.setAttribute("aria-label",`Переименовать пресет ${E.name}`),R.addEventListener("click",()=>{const W=document.createElement("input");W.className="settings__presetnameinput",W.type="text",W.value=E.name,v.replaceWith(W),W.focus(),W.select();const to=()=>{ja(E.id,W.value),Fe()};W.addEventListener("keydown",Qn=>{Qn.key==="Enter"&&to(),Qn.key==="Escape"&&(Qn.stopPropagation(),Fe())}),W.addEventListener("blur",to)});const j=document.createElement("button");j.className="settings__presetbtn",j.type="button",j.textContent="Применить",j.disabled=D,j.addEventListener("click",()=>sa(E.id,E.name));const Y=document.createElement("button");Y.className="settings__presetbtn",Y.type="button",Y.textContent="↓",Y.title="Экспорт в файл",Y.setAttribute("aria-label",`Экспорт пресета ${E.name} в файл`),Y.addEventListener("click",()=>Ua(E));const Q=document.createElement("button");Q.className="settings__presetbtn settings__presetbtn--danger",Q.type="button",Q.textContent="✕",Q.title="Удалить",Q.setAttribute("aria-label",`Удалить пресет ${E.name}`),Q.addEventListener("click",()=>{window.confirm(`Удалить пресет «${E.name}»?`)&&(za(E.id),Fe(),te.textContent=`Пресет «${E.name}» удалён.`)}),A.append(L,j,R,Y,Q),Nt.append(A)}};Et.addEventListener("click",()=>{const i=et(ye.value||Oe(),it());ye.value=Oe(),Fe(),te.textContent=`Сохранён пресет «${i.name}».`}),Ze.append(Kn,Nt,St,kt,Ct,Ie,te),Fe();const qn=document.createElement("div");qn.className="settings__scroll",qn.append(_,f,G,xe,me,Te,pe,qe,Ue,Ze),n.append(s,a,qn),e.append(t,n),document.body.append(e);function oa(){e.hidden=!1,ye.value=Oe()}function aa(){e.hidden=!0}return{root:e,backendSlot:Mn,recordSlot:Vn,open:oa,close:aa}}const er=300;function tr(e={}){let t=0,n=!1;const s=()=>{const m=cn();if(!m){n||(n=!0,e.onNoPreset?.());return}const u=it();if(!Eo(m,u))return;n=!1;const y=cn();y&&e.onSaved?.(y)},a=ai(()=>{Ui()||(window.clearTimeout(t),t=window.setTimeout(s,er))}),r=()=>{t!==0&&(window.clearTimeout(t),t=0,s())};return document.addEventListener("visibilitychange",r),window.addEventListener("pagehide",r),{flush(){t!==0&&(window.clearTimeout(t),t=0,s())},destroy(){window.clearTimeout(t),t=0,a(),document.removeEventListener("visibilitychange",r),window.removeEventListener("pagehide",r)}}}const nr="https://vk.ru/H360ru";function sr(){const e=document.createElement("div"),t=document.createElement("p");t.className="dlg__empty",t.textContent="Описание игры скоро появится. Пока сюда можно поставить правила, список техники и ссылку на сервер.";const n=document.createElement("a");n.className="dlg__link",n.href=nr,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Группа игры во «ВКонтакте»",e.append(t,n);const s=bn({title:"Об игре",body:e});return{dialog:s,open(){s.open()},destroy(){s.destroy()}}}let Wo=null;function $s(e){Wo=e}function He(){return Wo?.()??null}const or={yaw:0,lift:0,zoom:1,shoulder:1,distance:6.4,height:2.5,fov:60},po=["yaw","lift","zoom","distance","height","fov"],fo={yaw:{label:"Поворот",min:-180,max:180,step:1,unit:"°"},lift:{label:"Наклон",min:-.6,max:3.4,step:.1,unit:" м"},zoom:{label:"Зум",min:.55,max:1.7,step:.01,unit:"×"},distance:{label:"Дистанция",min:3,max:15,step:.1,unit:" м"},height:{label:"Высота",min:1,max:6,step:.1,unit:" м"},fov:{label:"Обзор (fov)",min:40,max:90,step:1,unit:"°"}},Yo="blendars.camera-views.v1";function rs(){try{const e=localStorage.getItem(Yo);if(!e)return[];const t=JSON.parse(e);if(!t||typeof t!="object")return[];const n=t.list;if(!Array.isArray(n))return[];const s=[];for(const o of n){if(!o||typeof o!="object")continue;const a=o;if(typeof a.id!="string"||!a.id)continue;const r=a.view;if(!r||typeof r!="object")continue;const m=r,u=(y,k)=>typeof y=="number"&&Number.isFinite(y)?y:k;s.push({id:a.id,name:typeof a.name=="string"&&a.name?a.name:"Без имени",created:typeof a.created=="number"?a.created:0,view:{yaw:u(m.yaw,0),lift:u(m.lift,0),zoom:u(m.zoom,1),shoulder:u(m.shoulder,1),distance:u(m.distance,6.4),height:u(m.height,2.5),fov:u(m.fov,60)}})}return s}catch{return[]}}function bo(e){try{localStorage.setItem(Yo,JSON.stringify({list:e}))}catch{}}function ar(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const ir=`
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
`;function rr(){if(document.getElementById("camv-style"))return;const e=document.createElement("style");e.id="camv-style",e.textContent=ir,document.head.append(e)}function cr(){rr();const e=document.createElement("div"),t=document.createElement("p");t.className="camv__hint";const n={},s=document.createElement("div");for(const d of po){const c=fo[d],f=document.createElement("div");f.className="camv__row";const l=document.createElement("div");l.className="camv__head";const S=document.createElement("span");S.textContent=c.label;const T=document.createElement("span");T.className="camv__val",l.append(S,T);const b=document.createElement("input");b.type="range",b.min=String(c.min),b.max=String(c.max),b.step=String(c.step),b.setAttribute("aria-label",c.label),b.addEventListener("input",()=>{const h=Number(b.value);He()?.write({[d]:h}),T.textContent=`${b.value}${c.unit}`}),f.append(l,b),s.append(f),n[d]={input:b,out:T}}const o=document.createElement("div");o.className="camv__btns";const a=[],r=[[-1,"Слева"],[0,"Центр"],[1,"Справа"]];for(const[d,c]of r){const f=document.createElement("button");f.className="camv__btn",f.type="button",f.textContent=c,f.addEventListener("click",()=>{He()?.write({shoulder:d}),m(d)}),a.push(f),o.append(f)}const m=d=>{for(let c=0;c<r.length;c++)a[c]?.classList.toggle("camv__btn--on",r[c]?.[0]===d)},u=document.createElement("button");u.className="camv__btn",u.type="button",u.textContent="Сбросить вид (C)",u.addEventListener("click",()=>{He()?.reset(),g()});const y=document.createElement("div");y.className="camv__save";const k=document.createElement("input");k.type="text",k.placeholder="Название ракурса",k.setAttribute("aria-label","Название нового ракурса");const w=document.createElement("button");w.className="camv__btn",w.type="button",w.textContent="Сохранить",y.append(k,w);const x=document.createElement("div");x.className="camv__list";const M=document.createElement("p");M.className="camv__status",M.setAttribute("role","status"),M.textContent="",e.append(t,s,o,u,y,x,M);const O=bn({title:"Ракурсы камеры",body:e}),F=(d,c)=>{const f=fo[d];return`${d==="zoom"?c.toFixed(2):String(c)}${f.unit}`},g=()=>{const d=He(),c=d?.read()??or,f=d!==null;t.textContent=f?"Ракурс меняется живьём. Тяните сцену мышью или пальцем (влево — экран влево), колесо или щипок — расстояние, C — сброс.":"Откройте сцену с машиной — здесь появится текущий ракурс.";for(const l of po){const S=n[l];S&&(S.input.value=String(c[l]),S.input.disabled=!f,S.out.textContent=F(l,c[l]))}for(const l of a)l.disabled=!f;m(c.shoulder),u.disabled=!f,w.disabled=!f,k.disabled=!f,_()},_=()=>{x.replaceChildren();const d=rs();if(d.length===0){const c=document.createElement("p");c.className="camv__empty",c.textContent="Сохранённых ракурсов пока нет.",x.append(c);return}for(const c of d){const f=document.createElement("div");f.className="camv__item";const l=document.createElement("span");l.className="camv__name",l.textContent=c.name;const S=document.createElement("button");S.className="camv__btn",S.type="button",S.textContent="Применить",S.disabled=He()===null,S.addEventListener("click",()=>{const b=He();b&&(b.write({...c.view}),g(),M.textContent=`Применён ракурс «${c.name}».`)});const T=document.createElement("button");T.className="camv__btn",T.type="button",T.textContent="✕",T.title="Удалить",T.setAttribute("aria-label",`Удалить ракурс ${c.name}`),T.addEventListener("click",()=>{bo(rs().filter(b=>b.id!==c.id)),_(),M.textContent=`Ракурс «${c.name}» удалён.`}),f.append(l,S,T),x.append(f)}};return w.addEventListener("click",()=>{const d=He();if(!d)return;const c=Date.now(),f={id:ar(c),name:k.value.trim()||Oe(new Date(c)),created:c,view:{...d.read()}},l=rs();l.push(f),bo(l),k.value="",_(),M.textContent=`Сохранён ракурс «${f.name}».`}),{dialog:O,open(){g(),O.open()},destroy(){O.destroy()}}}const lr=[{hash:"15fdf63",date:"2026-10-08",subject:"Deploy built site from dist; path dist in Pages workflow"},{hash:"942a7cc",date:"2026-10-08",subject:"Remove project sources; keep .github and .gitignore"},{hash:"da0f40e",date:"2026-10-08",subject:"Create static.yml"},{hash:"2691051",date:"2026-10-08",subject:"Delete .github/workflows/static.yml"},{hash:"98c2349",date:"2026-10-08",subject:"Delete .github/workflows/npm-publish-github-packages.yml"},{hash:"3ce584f",date:"2026-10-08",subject:"Update static.yml"},{hash:"128f22b",date:"2026-10-03",subject:"Create npm-publish-github-packages.yml"},{hash:"c8e16ab",date:"2026-10-03",subject:"Create static.yml"},{hash:"5a46d53",date:"2026-10-03",subject:"feat(scene): выбор кузова грузовик/Maserati, Maserati в меню, откат WebGPU→WebGL2"},{hash:"5c65165",date:"2026-10-03",subject:"feat(menu): экран загрузки с прогрессом + процедурный 3D-фон меню"},{hash:"1faa7f1",date:"2026-10-03",subject:"test(stage-0): браузерная проверка рендера, smoke-сцена, иконки-заглушки"},{hash:"4f12113",date:"2026-10-03",subject:"feat(stage-0): bootstrap Vite + ленивый PlayCanvas + тулинг бюджетов"},{hash:"eb68f3c",date:"2026-10-03",subject:"docs: rewrite README for PlayCanvas/Colyseus web stack"},{hash:"34ff9ca",date:"2026-10-03",subject:"chore: remove legacy Godot+Nakama tree and web export"},{hash:"9018d77",date:"2026-10-02",subject:"Create FUNDING.yml"},{hash:"7f64ab1",date:"2026-09-30",subject:"Add files via upload"},{hash:"5b7ab23",date:"2026-09-30",subject:"Add files via upload"},{hash:"ebb8901",date:"2026-03-19",subject:"mv"},{hash:"3c3fc26",date:"2026-03-19",subject:"fix: обновлен .gitignore и удалены системные файлы"},{hash:"0e075c9",date:"2026-03-19",subject:"up"},{hash:"9309069",date:"2026-03-19",subject:"upd"},{hash:"b82f5bc",date:"2026-03-19",subject:"docs: оновлення правил проекту"},{hash:"a19f06e",date:"2026-03-19",subject:"up"},{hash:"45bb3b3",date:"2026-03-19",subject:"new rules by demiurgos 19_1"},{hash:"7519417",date:"2026-02-27",subject:"Update README.md"},{hash:"58a3447",date:"2026-02-27",subject:"**BLEND ARS: Initial Project Setup and Development Notice**"},{hash:"60a150e",date:"2026-02-27",subject:"upd"},{hash:"eae4946",date:"2026-02-27",subject:"Exclude addons folder from tracking"},{hash:"cfe0473",date:"2026-02-27",subject:"upd"},{hash:"94b5e5d",date:"2026-02-24",subject:"uikit up"},{hash:"17b03ea",date:"2026-02-24",subject:"mv"},{hash:"c8e9bf6",date:"2026-02-24",subject:"апдейт"},{hash:"48511ce",date:"2026-02-24",subject:"ui_kit"},{hash:"ad054cb",date:"2026-02-24",subject:"up"},{hash:"73e2c24",date:"2026-02-22",subject:"Update 00-core.md"},{hash:"8d20bc4",date:"2026-02-22",subject:"Create 05-ui-perf.md"},{hash:"cf17f7a",date:"2026-02-22",subject:"Update and rename 04-mcp-workflow.md to 04-ui-theme.md"},{hash:"93f52ae",date:"2026-02-22",subject:"Update and rename 03-gdscript-standards.md to 03-ui-core.md"},{hash:"ff72202",date:"2026-02-22",subject:"Update and rename 02-ui-scifi.md to 02-workflow.md"},{hash:"a533398",date:"2026-02-22",subject:"Rename 00-global.md to 00-core.md"},{hash:"134cacc",date:"2026-02-22",subject:"Update and rename 01-mmo-coder.md to 01-gdscpipt.md"},{hash:"bbd1850",date:"2026-02-22",subject:"Update 00-global.md"},{hash:"2096da3",date:"2026-02-20",subject:"Create FUNDING.yml"},{hash:"10fb83e",date:"2026-02-18",subject:"главное меню и экраны настроек"},{hash:"f18331f",date:"2026-02-18",subject:"docs: restructure and improve .cursorrules configuration"},{hash:"a09766e",date:"2026-02-18",subject:"загрузка"},{hash:"3fd518a",date:"2026-02-16",subject:"update branch"},{hash:"52439f9",date:"2026-02-16",subject:"update branch"},{hash:"d180409",date:"2026-02-16",subject:"**Base multiplayer foundation with Nakama integration**"},{hash:"4cf32ff",date:"2026-02-16",subject:"Initial commit"}];function dr(){const e=lr;if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,o=s.hash,a=s.date,r=s.subject;typeof o!="string"||typeof r!="string"||t.push({hash:o,date:typeof a=="string"?a:"",subject:r})}return t}function ur(){const e=dr(),t=document.createElement("div");if(e.length===0){const s=document.createElement("p");s.className="dlg__empty",s.textContent="Журнал пока пуст: сборка сделана без истории git.",t.append(s)}else{const s=document.createElement("p");s.className="devlog__meta",s.textContent=`Последние ${e.length} изменений`;const o=document.createElement("ul");o.className="devlog__list";for(const a of e){const r=document.createElement("li");r.className="devlog__item";const m=document.createElement("span");m.className="devlog__hash",m.textContent=a.hash;const u=document.createElement("span");u.className="devlog__date",u.textContent=a.date;const y=document.createElement("span");y.className="devlog__subject",y.textContent=a.subject,r.append(m,u,y),o.append(r)}t.append(s,o)}const n=bn({title:"Журнал разработки",body:t});return{dialog:n,open(){n.open()},destroy(){n.destroy()}}}function qt(e,t,n,s){const o=document.createElement("button");return o.className=e,o.type="button",o.style.setProperty("--tb-icon",`url(${JSON.stringify(t)})`),o.title=n,o.setAttribute("aria-label",n),o.addEventListener("pointerdown",a=>{a.preventDefault(),!o.disabled&&s()}),o}const mr=`
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
    position: sticky;
    top: 0;
    z-index: 5;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: max(0.5rem, 8px);
    width: 100%;
    height: auto;
    padding: max(0.5rem, 8px) max(12px, env(safe-area-inset-right)) max(0.5rem, 8px) max(12px, env(safe-area-inset-left));
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
   многоточие, а не наезжал на кнопки. По вертикали — строго по центру
   блока (подзаголовка больше нет, центрировать нечему мешать). */
.tb__center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: calc(100% - 2 * (366px + 24px));
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
    padding: max(0.25rem, 4px) max(12px, env(safe-area-inset-right)) max(0.25rem, 4px) max(12px, env(safe-area-inset-left));
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
`;function pr(){const e=document.createElement("button");e.className="tb__btn",e.type="button";const t=()=>document.fullscreenElement!==null,n=()=>{const s=t(),o=s?xa:ga;e.style.setProperty("--tb-icon",`url(${JSON.stringify(o)})`);const a=s?"Выйти из полноэкранного режима":"Полноэкранный режим";e.title=a,e.setAttribute("aria-label",a),e.setAttribute("aria-pressed",s?"true":"false")};return e.addEventListener("pointerdown",s=>{s.preventDefault(),!e.disabled&&(t()?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{}))}),document.addEventListener("fullscreenchange",n),n(),{el:e,destroy(){document.removeEventListener("fullscreenchange",n)}}}async function fr(){return(await ee(()=>import("./music-player.BzXBPdOw.js"),__vite__mapDeps([0,1,2]))).createMusicPlayer()}function br(e){const t=document.createElement("style");t.textContent=mr;const n=document.createElement("header");n.className="tb";const s=document.createElement("div");s.className="tb__slot",s.append(e.statsHost);const o=document.createElement("div");o.className="tb__center";const a=document.createElement("h1");a.className="tb__title",a.textContent=e.title,o.append(a);const r=document.createElement("div");r.className="tb__slot tb__slot--right";const m=document.createElement("div");m.className="tb__extra";const u=pr(),y=sr(),k=ur(),w=cr(),x=document.createElement("button");x.className="tb__btn tb__btn--close",x.type="button",x.style.setProperty("--tb-icon",`url(${JSON.stringify(Aa)})`),x.title="Скрыть панель",x.setAttribute("aria-label","Скрыть панель");const M=document.createElement("span");M.className="tb__cap",M.innerHTML="Скрыть<br>панель",x.append(M),x.addEventListener("pointerdown",_=>{_.preventDefault(),!x.disabled&&e.onToggleChrome()});let O=null,F=null;const g=qt("tb__btn",va,"Музыка",()=>{const _=d=>{d.open(),e.windows.open("music")};if(F!==null){_(F);return}O??=fr(),O.then(d=>{F=d,e.windows.register({id:"music",root:d.dialog.root,show:()=>d.open(),hide:()=>d.dialog.close()}),_(d)}).catch(()=>{})});return r.append(m,qt("tb__btn",wa,"Ракурсы камеры",()=>{w.open(),e.windows.open("camera")}),qt("tb__btn",ya,"Журнал разработки",()=>{k.open(),e.windows.open("devlog")}),qt("tb__btn",_a,"Об игре",()=>{y.open(),e.windows.open("about")}),g,x,u.el),s.classList.add("tb__slot--left"),n.append(t,s,o,r),e.windows.register({id:"camera",root:w.dialog.root,show:()=>w.open(),hide:()=>w.dialog.close()}),e.windows.register({id:"about",root:y.dialog.root,show:()=>y.open(),hide:()=>y.dialog.close()}),e.windows.register({id:"devlog",root:k.dialog.root,show:()=>k.open(),hide:()=>k.dialog.close()}),{root:n,setExtraButtons(_){m.append(_)},setBackButton(_){s.prepend(_)},setSceneMode(_){n.classList.toggle("tb--scene",_)},destroy(){u.destroy(),y.destroy(),k.destroy(),w.destroy(),F?.destroy(),n.remove()}}}const hr=`
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
`;function gr(e={}){const t=document.createElement("style");t.textContent=hr;const n=document.createElement("div");n.className="win";const s=document.createElement("div");s.className="win__bar";const o=document.createElement("button");o.className="win__close",o.type="button",o.textContent="✕",o.title="Закрыть окно",o.setAttribute("aria-label","Закрыть окно"),s.append(o);const a=document.createElement("p");a.className="win__empty",a.textContent="",a.setAttribute("aria-hidden","true"),n.append(t,a),document.body.append(s);const r=new Map,m=[];let u=null,y=null;const k=()=>{for(const l of r.values()){const S=l.id===u;l.root.hidden=!S,S?l.show():l.hide()}n.classList.toggle("win--open",u!==null),s.classList.toggle("win--open",u!==null);for(const l of m)l();w()},w=()=>{const l=n.getBoundingClientRect();if(l.width<=0||l.height<=0)return;const S=document.documentElement.style;S.setProperty("--win-left",`${Math.round(l.left)}px`),S.setProperty("--win-top",`${Math.round(l.top)}px`),S.setProperty("--win-width",`${Math.round(l.width)}px`),S.setProperty("--win-height",`${Math.round(l.height)}px`)},x={root:n,closeBtn:o,register(l){r.set(l.id,l),l.hide(),l.root.hidden=!0},open(l){r.has(l)&&(u=l,y={x:F,y:g,until:performance.now()+d},k())},close(){u!==null&&(u=null,k())},toggle(l){u===l?x.close():x.open(l)},active(){return u},onChange(l){return m.push(l),()=>{const S=m.indexOf(l);S>=0&&m.splice(S,1)}},destroy:()=>{}};o.addEventListener("pointerdown",l=>{l.preventDefault(),x.close()});const M=new ResizeObserver(w);M.observe(n),window.addEventListener("resize",w),window.addEventListener("orientationchange",w),w();const O=l=>{l.key==="Escape"&&(u!==null?(l.stopPropagation(),x.close()):e.onEmptyEscape?.())};document.addEventListener("keydown",O);let F=0,g=0;const _=l=>{F=l.clientX,g=l.clientY},d=400,c=32,f=l=>{if(u===null)return;const S=r.get(u);if(!S||S.root.hidden)return;const T=l.target;if(!(T instanceof Element)||S.root.contains(T))return;const b=y;if(b!==null&&performance.now()<b.until){const I=l.clientX-b.x,N=l.clientY-b.y;if(I*I+N*N<=c*c)return}if(T.closest(".tb")!==null)return;const h=l.clientX-F,P=l.clientY-g;h*h+P*P>64||x.close()};return document.addEventListener("pointerdown",_,!0),document.addEventListener("click",f),x.destroy=()=>{M.disconnect(),window.removeEventListener("resize",w),window.removeEventListener("orientationchange",w),document.removeEventListener("keydown",O),document.removeEventListener("pointerdown",_,!0),document.removeEventListener("click",f),s.remove();const l=document.documentElement.style;l.removeProperty("--win-left"),l.removeProperty("--win-top"),l.removeProperty("--win-width"),l.removeProperty("--win-height")},x}const xr=`
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
    src: url(${JSON.stringify(_o)}) format('truetype');
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
`,_r={idle:"",starting:"готовлю…",recording:"идёт",encoding:"упаковываю файл…",saving:"сохраняю…",error:"не вышло"},yr=["recording","encoding","saving"],cs=["Одно не рождается без другого: оболочка без души лишь кукла, душа без оболочки — призрак.","Сон совести рождает чудовищ.","У нас нет формы, и мы страшимся этого.","В здравом теле, витает здравый дух, а значит и душа."];let At=null;function Ve(){const e=.5*ji("uiClick");e>0&&(At||(At=new Audio(ha)),At.volume=e,At.currentTime=0,At.play().catch(()=>{}))}class wr{statsHost;clusterHost;settings;windows;root;playBtn;backBtn;settingsItem;modes;actionsEl;midEl;statusEl;statusText;recordRow;recordBtn;recordDot;recordLabel;recordState;recordBar;recordFill;idleIndex=-1;topbar;chromeHidden=!1;autosave;constructor(t,n){this.root=document.createElement("div"),this.root.className="menu";const s=document.createElement("style");s.textContent=xr,this.windows=gr({onEmptyEscape:()=>{this.setChromeHidden(!this.chromeHidden)}}),this.statsHost=document.createElement("div"),this.topbar=br({statsHost:this.statsHost,title:"BLEND ARS",subtitle:"",windows:this.windows,onToggleChrome:()=>{this.setChromeHidden(!0)}}),this.playBtn=document.createElement("button"),this.playBtn.className="play play--go",this.playBtn.type="button",this.playBtn.textContent="Играть",this.playBtn.addEventListener("pointerdown",x=>{x.preventDefault(),!this.playBtn.disabled&&(Ve(),this.modes.open(),this.windows.open("modes"))});const o=document.createElement("ul");o.className="actions__list";const a=[["Контейнеры",Ea],["Миссии",Sa],["Гараж",ka],["Магазин",Ca]];for(const[x,M]of a){const O=document.createElement("li"),F=document.createElement("button");F.className="mitem",F.type="button",F.textContent=x,F.disabled=!0,F.title=`${x}: раздел в разработке`,F.style.setProperty("--mitem-icon",`url(${JSON.stringify(M)})`),O.append(F),o.append(O)}this.settingsItem=document.createElement("button"),this.settingsItem.className="mitem",this.settingsItem.type="button",this.settingsItem.textContent="Настройки",this.settingsItem.style.setProperty("--mitem-icon",`url(${JSON.stringify(io)})`),this.settingsItem.addEventListener("pointerdown",x=>{x.preventDefault(),!this.settingsItem.disabled&&(Ve(),this.openSettings())});{const x=document.createElement("li");x.append(this.settingsItem),o.append(x)}this.modes=Ba(x=>{Ve(),this.modes.dialog.close(),this.windows.close(),n.onScene(x)}),this.backBtn=document.createElement("button"),this.backBtn.className="tb__back",this.backBtn.type="button",this.backBtn.textContent="Назад",this.backBtn.style.setProperty("--tb-icon",`url(${JSON.stringify(Ta)})`),this.backBtn.title="Вернуться в меню",this.backBtn.setAttribute("aria-label","Вернуться в меню"),this.backBtn.style.display="none",this.backBtn.addEventListener("pointerdown",x=>{x.preventDefault(),Ve(),n.onBack?.()}),this.settings=Zi();const r=document.createElement("button");r.className="tb__btn",r.type="button",r.style.setProperty("--tb-icon",`url(${JSON.stringify(io)})`),r.title="Настройки",r.setAttribute("aria-label","Настройки"),r.addEventListener("pointerdown",x=>{x.preventDefault(),!r.disabled&&(Ve(),this.openSettings())});const m=document.createElement("div");m.className="tb__extra",m.append(r),this.topbar.setExtraButtons(m),this.topbar.setBackButton(this.backBtn);const u=document.createElement("div");u.className="actions",u.append(this.playBtn,o),this.actionsEl=u,this.statusText=document.createElement("div"),this.statusText.className="status__text",this.statusText.textContent=this.pickIdlePhrase(),this.recordRow=document.createElement("div"),this.recordRow.className="status__record",this.recordRow.hidden=!0,this.recordBtn=document.createElement("button"),this.recordBtn.className="status__recordbtn",this.recordBtn.type="button",this.recordDot=document.createElement("span"),this.recordDot.className="status__dot",this.recordLabel=document.createElement("span"),this.recordLabel.textContent="Запись",this.recordBtn.append(this.recordDot,this.recordLabel),this.recordBtn.addEventListener("pointerdown",x=>{x.preventDefault(),!this.recordBtn.disabled&&(Ve(),n.onRecord?.())}),this.recordState=document.createElement("span"),this.recordState.className="status__recordstate",this.recordState.textContent="",this.recordBar=document.createElement("div"),this.recordBar.className="status__recordbar",this.recordFill=document.createElement("span"),this.recordBar.append(this.recordFill),this.recordBar.style.display="none",this.recordRow.append(this.recordBtn,this.recordState,this.recordBar),this.statusEl=document.createElement("div"),this.statusEl.className="status",this.clusterHost=document.createElement("div"),this.clusterHost.className="status__cluster",this.statusEl.append(this.clusterHost),this.statusText.setAttribute("role","status"),this.statusText.setAttribute("aria-live","polite"),this.statusEl.append(this.statusText),this.settings.recordSlot.append(this.recordRow);const y=document.createElement("div");y.className="mid",y.append(u,this.windows.root),this.actionsEl=u,this.midEl=y;const k=document.createElement("div");k.className="wrap",k.append(y);const w=document.createElement("button");w.className="chrome-fab",w.type="button",w.style.setProperty("--fab-icon",`url(${JSON.stringify(Ra)})`),w.title="Показать интерфейс",w.setAttribute("aria-label","Показать интерфейс"),w.addEventListener("pointerdown",x=>{x.preventDefault(),Ve(),this.setChromeHidden(!1)}),this.root.append(s,this.topbar.root,k,this.statusEl,w),t.append(this.root),this.windows.register({id:"settings",root:this.settings.root,show:()=>this.settings.open(),hide:()=>this.settings.close()}),this.windows.register({id:"modes",root:this.modes.dialog.root,show:()=>this.modes.open(),hide:()=>this.modes.dialog.close()}),this.settings.close(),this.autosave=tr({onSaved:x=>{this.setStatus(`Настройки сохранены в пресет «${x}».`)},onNoPreset:()=>{this.setStatus("Настройки применены, но активного пресета нет — сохранять некуда. Сохраните пресет на вкладке «Пресеты».")}})}openSettings(){this.settings.open(),this.windows.open("settings")}setMode(t){const n=t==="scene";this.playBtn.style.display=n?"none":"",this.backBtn.style.display=n?"":"none",this.recordRow.hidden=!n,n&&(this.modes.dialog.close(),this.windows.close()),this.setChromeHidden(!1),this.actionsEl.style.display=n?"none":"",this.midEl.style.gridTemplateColumns=n?"minmax(0, 1fr)":"",this.root.style.background=n?"none":"",this.root.classList.toggle("menu--scene",n)}setChromeHidden(t){this.chromeHidden=t,this.root.classList.toggle("menu--chrome-hidden",t)}isChromeHidden(){return this.chromeHidden}setSceneChrome(t){this.topbar.setSceneMode(t)}statsHostFor(t){return this.statsHost}setBusy(t){this.playBtn.disabled=t,this.settingsItem.disabled=t,this.backBtn.disabled=t,this.modes.setBusy(t),t&&this.setStatus("Инициализация рендера…")}setStatus(t){this.statusText.textContent=t||this.pickIdlePhrase()}setRecordState(t,n){const s=yr.includes(t);this.recordBtn.classList.toggle("live",s),this.recordBtn.disabled=t==="starting"||t==="encoding"||t==="saving",this.recordLabel.textContent=t==="recording"?"Стоп":"Запись",this.recordBar.style.display=t==="encoding"||t==="saving"?"block":"none",this.recordFill.style.width="0%",this.recordState.textContent=n??_r[t]}setRecordProgress(t){this.recordFill.style.width=`${Math.min(Math.max(t,0),1)*100}%`}pickIdlePhrase(){let t=Math.floor(Math.random()*cs.length);return t===this.idleIndex&&(t=(t+1)%cs.length),this.idleIndex=t,cs[t]??""}destroy(){this.topbar.destroy(),this.modes.destroy(),this.windows.destroy(),this.autosave.destroy(),this.root.remove(),this.settings.root.remove()}}const vr=`
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
`,Er='<svg class="rswitch__svg" viewBox="0 0 48 26" width="48" height="26" aria-hidden="true" focusable="false"><rect class="rswitch__track" x="1" y="1" width="46" height="24" rx="12"></rect><circle class="rswitch__knob" cx="13" cy="13" r="9"></circle></svg>';function Sr(e,t){const n=document.createElement("div");n.className="rswitch-wrap";const s=document.createElement("span");s.className="rswitch__opt",s.textContent="WebGL2",s.dataset.val="webgl2";const o=document.createElement("button");o.className="rswitch",o.type="button",o.setAttribute("role","switch"),o.innerHTML=Er;const a=document.createElement("span");a.className="rswitch__opt",a.textContent="WebGPU",a.dataset.val="webgpu",n.append(s,o,a);const r=()=>{o.disabled||t.onSwitch()};n.addEventListener("click",r),e.append(n);let m="webgl2",u=!1,y="";const k=()=>{const w=m==="webgpu";o.dataset.state=w?"on":"off",o.setAttribute("aria-checked",w?"true":"false"),s.classList.toggle("rswitch__opt--active",!w),a.classList.toggle("rswitch__opt--active",w);const x=w?"WebGL2":"WebGPU";o.title=o.disabled&&y?y:`Переключить на ${x}`,o.setAttribute("aria-label",`Рендер: ${w?"WebGPU":"WebGL2"}. Переключить на ${x}`),n.classList.toggle("rswitch-wrap--disabled",o.disabled),n.setAttribute("aria-disabled",String(o.disabled))};return k(),{setBackend(w){m=w,k()},setBusy(w){u=w,o.disabled=w||!!y,k()},setUnavailable(w){y=w,o.disabled=u||!!w,k()},destroy(){n.remove()}}}const kr=`
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
`;function Cr(e,t){const n=document.createElement("div");n.className="cluster",n.setAttribute("role","group"),n.setAttribute("aria-label","Приборы машины");const s=document.createElement("div");s.className="cluster__revs";const o=document.createElement("span");s.append(o);const a=document.createElement("div");a.className="cluster__dials";const r=document.createElement("span");r.className="cluster__speed",r.textContent="0";const m=document.createElement("span");m.className="cluster__unit",m.textContent="км/ч";const u=document.createElement("span");u.append(r,m);const y=document.createElement("div");y.className="cluster__gearbox",a.append(u,y);const k=document.createElement("div");k.className="cluster__boost";const w=document.createElement("span");w.textContent="Заряд";const x=document.createElement("div");x.className="cluster__boostbar";const M=document.createElement("span");x.append(M),k.append(w,x),n.append(s,a,k);const O=document.createElement("style");O.textContent=kr,document.head.append(O);let F=[],g=-1,_=0;const d=()=>{if(_++%4!==0)return;const f=e();if(!f)return;r.textContent=`${Math.round(Math.abs(f.speed)*.9)}`;const l=f.gears.length;if(l!==g){g=l,y.replaceChildren(),F=[];const N=l+1;for(let $=0;$<N;$++){const B=document.createElement("span");B.textContent=$===0?"R":`${$}`,y.append(B),F.push(B)}}const S=f.gear<0?0:f.gear;for(let N=0;N<F.length;N++)F[N]?.classList.toggle("engaged",N===S);y.classList.toggle("shifting",f.shifting);const T=Math.max(f.maxRpm-f.idleRpm,1),b=(f.rpm-f.idleRpm)/T;o.style.width=`${Math.min(Math.max(b,0),1)*100}%`,o.classList.toggle("redline",f.rpm>=f.shiftUpRpm);const h=Math.min(Math.max(f.charge,0),1),P=Math.min(Math.max(f.boost,0),1),I=h>0?h:P;M.style.width=`${I*100}%`,M.classList.toggle("firing",P>0),w.textContent=h>0?"Заряд":"Буст"};n.dataset.cleanup="1",(t??document.body).append(n);const c=window.setInterval(d,1e3/60/4);return{destroy(){window.clearInterval(c),n.remove(),O.remove()}}}function Nr(e,t){const n=e/t,s=Math.floor(n*6),o=n*6-s,a=.25,r=1-.75*o,m=.25+.75*o,u={0:[1,m,a],1:[r,1,a],2:[a,1,m],3:[a,r,1],4:[m,a,1],5:[1,a,r]},[y,k,w]=u[s%6]??[1,1,1];return new go(y,k,w,1)}function ls(e,t,n){const s=new ra;return s.diffuse=new go(0,0,0),s.emissive=t,s.emissiveIntensity=2,s.blendType=ca,s.opacity=n,s.depthWrite=!1,s.update(),s}function Lr(e,t,n=10){let s=null;const o=()=>{try{s??=new AudioContext;const b=s;b.state==="suspended"&&b.resume();const h=b.currentTime+.02,P=b.createOscillator();P.type="sawtooth",P.frequency.setValueAtTime(70,h),P.frequency.exponentialRampToValueAtTime(300,h+2.5);const I=b.createBiquadFilter();I.type="lowpass",I.Q.value=6,I.frequency.setValueAtTime(180,h),I.frequency.exponentialRampToValueAtTime(1800,h+2.5);const N=b.createGain();N.gain.setValueAtTime(1e-4,h),N.gain.exponentialRampToValueAtTime(.22,h+2.4),N.gain.setValueAtTime(.22,h+2.5),N.gain.linearRampToValueAtTime(0,h+2.7),P.connect(I).connect(N).connect(b.destination),P.start(h),P.stop(h+2.8);const $=2.4,B=b.createBufferSource(),z=b.createBuffer(1,Math.ceil(b.sampleRate*$),b.sampleRate),U=z.getChannelData(0);for(let K=0;K<U.length;K++)U[K]=Math.random()*2-1;B.buffer=z;const G=b.createBiquadFilter();G.type="bandpass",G.Q.value=2.5,G.frequency.setValueAtTime(250,h+2.5),G.frequency.exponentialRampToValueAtTime(5200,h+4.6);const J=b.createGain();J.gain.setValueAtTime(1e-4,h+2.5),J.gain.exponentialRampToValueAtTime(.3,h+2.62),J.gain.exponentialRampToValueAtTime(.001,h+4.8),B.connect(G).connect(J).connect(b.destination),B.start(h+2.5),B.stop(h+4.9)}catch{}},a=new Kt("checkpoints");t.addChild(a);const r=(b,h)=>{const P=new so(b,120,h),I=new so(b,-20,h),N=e.systems.rigidbody?.raycastFirst(P,I);return N?N.point.y:0},m=(b,h)=>{const P=r(b,h);return Math.abs(r(b+4,h)-P)<1.2&&Math.abs(r(b,h+4)-P)<1.2},u=b=>{let h={x:0,z:0,y:0};for(let P=0;P<8;P++){const I=b/n*Math.PI*2+Math.random()*.6,N=60+Math.random()*200,$=Math.cos(I)*N,B=Math.sin(I)*N;if(h={x:$,z:B,y:r($,B)},m($,B))return h}return h},y=e.graphicsDevice,k=new Zn({ringRadius:4,tubeRadius:.14,sectorAngle:360,segments:48,sides:10}),w=new Zn({ringRadius:2.6,tubeRadius:.12,sectorAngle:360,segments:36,sides:10}),x=new Zn({ringRadius:1.5,tubeRadius:.1,sectorAngle:360,segments:24,sides:8}),M=new ia({radius:.35,height:60,heightSegments:1,capSegments:12}),O=Xt.fromGeometry(y,k),F=Xt.fromGeometry(y,w),g=Xt.fromGeometry(y,x),_=Xt.fromGeometry(y,M),d=[],c=new Map;for(let b=0;b<n;b++){const{x:h,z:P,y:I}=u(b),N=Nr(b,n),$=new Kt(`checkpoint-${b}`);$.setPosition(h,I+.35,P);const B=(_t,Ke,Ge,me)=>{const Ae=new Kt("ring");return Ae.addComponent("render",{meshInstances:[new no(_t,Ke)],castShadows:!1,receiveShadows:!1}),Ae.setEulerAngles(Ge,0,me),$.addChild(Ae),Ae},z=ls(y,N,.9),U=ls(y,N,.55),G=ls(y,N,.28),J=B(O,z,0,0),K=B(F,U,66,24),Le=B(g,U,108,-30),H=new Kt("beam");H.addComponent("render",{meshInstances:[new no(_,G)],castShadows:!1,receiveShadows:!1}),H.setLocalPosition(0,30,0),$.addChild(H),a.addChild($);const re={info:{id:b,x:h,z:P,color:Math.round(N.r*255)<<16|Math.round(N.g*255)<<8|Math.round(N.b*255)},node:$,rings:[J,K,Le],beam:H,mats:[z,U],beamMat:G,state:"alive",t:0};d.push(re),c.set($,re)}const f=b=>{for(const h of d){if(h.state==="alive"){h.rings[0]?.rotate(0,b*50,0),h.rings[1]?.rotate(b*30,b*-70,0),h.rings[2]?.rotate(b*-45,0,b*60);continue}h.t+=b;const P=h.t;if(P<2.5){const I=P/2.5,N=1-(1-I)*(1-I),$=1+1.3*N;h.node.setLocalScale($,$,$);const B=b*10*N;h.rings[0]?.rotate(0,B*50,0),h.rings[1]?.rotate(B*30,B*-70,0),h.rings[2]?.rotate(B*-45,0,B*60)}else if(P<5){const I=(P-2.5)/2.5,N=1-I*I,$=Math.max(2.3*N*N,.001);h.node.setLocalScale($,$,$);const B=b*(10+I*40);h.rings[0]?.rotate(0,B*50,0),h.rings[1]?.rotate(B*30,B*-70,0),h.rings[2]?.rotate(B*-45,0,B*60),h.beam.setLocalScale(1,1+I*2.2,1),h.beam.setLocalPosition(0,30+I*45,0),h.beamMat.opacity=.28*(1-I),h.beamMat.update();for(let z=0;z<h.mats.length;z++){const U=z===0?.9:.55;h.mats[z].opacity=Math.max(U*(1-I),0),h.mats[z].update()}}}for(let h=d.length-1;h>=0;h--){const P=d[h];P.state==="dying"&&P.t>=5&&(P.node.destroy(),e.fire("checkpoint:visited",P.info),d.splice(h,1))}};e.on("update",f);const l=()=>t.findByName("vehicle");let S=0;const T=b=>{if(S+=b,S<.25)return;S=0;const P=l()?.getPosition();if(P)for(let I=d.length-1;I>=0;I--){const N=d[I],$=P.x-N.info.x,B=P.z-N.info.z;N.state==="alive"&&$*$+B*B<9*9&&(N.state="dying",N.t=0,o())}};return e.on("update",T),{list:()=>d.map(b=>b.info),destroy(){e.off("update",f),e.off("update",T),s?.close().catch(()=>{}),a.destroy()}}}const Qt=55,Ar=`
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
`,Rr={0:"С",45:"СВ",90:"В",135:"ЮВ",180:"Ю",225:"ЮЗ",270:"З",315:"СЗ"};function Tr(e,t,n){const s=document.createElement("div");s.className="compass";const o=document.createElement("canvas");s.append(o);const a=document.createElement("style");a.textContent=Ar,s.append(a),document.body.append(s);let r=null;const m=()=>{try{r??=new AudioContext,r.state==="suspended"&&r.resume();const c=r,f=c.currentTime+.01;for(const[l,S]of[880,1318.51].entries()){const T=c.createOscillator(),b=c.createGain();T.type="sine",T.frequency.value=S;const h=f+l*.09;b.gain.setValueAtTime(0,h),b.gain.linearRampToValueAtTime(.16,h+.02),b.gain.exponentialRampToValueAtTime(.001,h+.38),T.connect(b).connect(c.destination),T.start(h),T.stop(h+.42)}}catch{}},u=document.createElement("div");u.className="compass-toast",document.body.append(u);let y=null;const k=c=>{u.textContent=c,u.classList.add("compass-toast--on"),m(),y!==null&&window.clearTimeout(y),y=window.setTimeout(()=>{u.classList.remove("compass-toast--on"),y=null},2400)};let w=-1,x="";const M=()=>{const c=Math.min(window.devicePixelRatio||1,2);o.width=Math.round(o.clientWidth*c),o.height=Math.round(o.clientHeight*c),x=""};M(),window.addEventListener("resize",M);const O=c=>(c*180/Math.PI+360)%360,F=(c,f)=>{let l=(c-f)%360;return l>=180&&(l-=360),l<-180&&(l+=360),l},g=()=>{const c=o.getContext("2d");if(!c)return;const f=o.width,l=o.height;if(l===0||f===0)return;const S=e();if(S===null){x!==""&&(c.clearRect(0,0,f,l),x="");return}const T=O(S),b=t(),h=n();h.length!==w&&(w>=0&&h.length<w&&k(h.length>0?`Чекпоинт собран · осталось: ${h.length}`:"Все чекпоинты собраны!"),w=h.length);const P=`${T.toFixed(2)}|${b?`${b.x.toFixed(1)},${b.z.toFixed(1)}`:""}|${h.length}`;if(P===x)return;x=P,c.clearRect(0,0,f,l);const I=f/(Qt*2),N=f/2,$=Math.round((T-Qt)/15)*15;c.textAlign="center",c.textBaseline="middle";for(let B=$;B<=T+Qt;B+=15){const z=N+F(B,T)*I,U=Rr[(B%360+360)%360];U!==void 0?(c.fillStyle="#ebdbb2e6",c.font=`600 ${Math.round(l*.34)}px system-ui, sans-serif`,c.fillText(U,z,l*.42)):B%45===0?(c.fillStyle="#ebdbb280",c.fillRect(z-1,l*.3,2,l*.22)):(c.fillStyle="#ebdbb240",c.fillRect(z-1,l*.36,2,l*.12))}if(c.fillStyle="#fe8019",c.fillRect(N-1.5,l*.14,3,l*.2),b){const B=[...h].map(G=>{const J=G.x-b.x,K=G.z-b.z;return{cp:G,dist:Math.round(Math.hypot(J,K)),off:F(O(Math.atan2(J,-K)),T)}}).sort((G,J)=>G.off-J.off);let z=-1e9,U=0;for(const{cp:G,dist:J,off:K}of B){const Le=`#${G.color.toString(16).padStart(6,"0")}`;let H=N+K*I;if(Math.abs(K)>Qt-4){H=N+Math.sign(K)*(f/2-14*(f/560)),c.save(),c.translate(H,l*.42),c.rotate(Math.sign(K)*Math.PI/2),c.fillStyle=Le,c.beginPath(),c.moveTo(0,-6*(f/560)),c.lineTo(5*(f/560),3*(f/560)),c.lineTo(-5*(f/560),3*(f/560)),c.closePath(),c.fill(),c.restore();continue}Math.abs(H-z)<34*(f/560)?U=(U+1)%2:U=0,z=H;const re=5*(f/560);c.fillStyle=Le,c.beginPath(),c.moveTo(H,l*.2-re),c.lineTo(H+re,l*.2),c.lineTo(H,l*.2+re),c.lineTo(H-re,l*.2),c.closePath(),c.fill(),c.fillStyle="#ebdbb2d9",c.font=`500 ${Math.round(l*.26)}px system-ui, sans-serif`,c.fillText(`${J}м`,H,l*(.62+U*.24))}}};let _=0;const d=()=>{g(),_=requestAnimationFrame(d)};return _=requestAnimationFrame(d),{destroy(){cancelAnimationFrame(_),window.removeEventListener("resize",M),y!==null&&window.clearTimeout(y),r?.close().catch(()=>{}),s.remove(),u.remove(),a.remove()}}}function Pr(e){let t=0,n=0;const s=e.autoRender,o=()=>{const m=Oo();t=m>0?1e3/m:0,n=t,e.autoRender=t===0?s:!1},a=m=>{t!==0&&(n+=m*1e3,n>=t&&(n=0,e.renderNextFrame=!0))};o(),e.on("update",a);const r=$o(o);return{destroy(){e.off("update",a),r(),e.autoRender=s}}}let Jo=1,Ye=null;function Ir(){return Mo()*Jo}function Sc(e){Jo=e,gs()}function gs(){Ye?.graphicsDevice&&(Ye.graphicsDevice.maxPixelRatio=Ir(),Ye.resizeCanvas(),Ye.updateCanvasSize())}function Fr(e){Ye=e,gs();const t=$o(()=>{gs()});return()=>{t(),Ye===e&&(Ye=null)}}const Br=250,Mr="menuRenderFps",Or=`
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
`;function $r(e=null){const t=document.createElement("div");t.className="mini-stats",t.setAttribute("role","status"),t.setAttribute("aria-label","Статистика кадра");const n=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");t.append(n,s,o,a);const r=document.createElement("style");r.id="mini-stats-style",r.textContent=Or,document.head.append(r);const m=_=>{t.classList.toggle("mini-stats--inline",_!==null);const d=_??document.body;t.parentElement!==d&&d.append(t)};m(e);let u=null,y=ln(),k=!1;const w=()=>fe("fps")||fe("cpu")||fe("draw")||fe("vram"),x=()=>{t.classList.toggle("visible",y&&u!==null&&w())},M=(_,d,c)=>{const f=d.fps,l=f>0&&f<30;if(l!==k&&(k=l,n.classList.toggle("warn",l)),c.fps){const S=d.user.get(Mr),T=typeof S=="number"&&S>0?` · рендер ${S}`:"";n.textContent=`${f>0?Math.round(f):"—"} FPS${T} · ${d.frameTime.toFixed(1)} ms`}c.cpu&&(s.textContent=`CPU ${d.cpuUpdateTime.toFixed(1)} / ${d.cpuRenderTime.toFixed(1)} / ${d.cpuPhysicsTime.toFixed(1)} мс`),c.draw&&(o.textContent=`Draw ${ds(d.drawCallCount)} · Прим. ${ds(d.frame.primitives)} · Шейд. ${ds(d.frame.shaders)}`),c.vram&&(a.textContent=`VRAM ${Math.round(d.vramTotalBytes/1048576)} МБ · ${_.graphicsDevice.width}×${_.graphicsDevice.height} ${_.graphicsDevice.isWebGPU?"WebGPU":"WebGL2"}`)},O=()=>{const _=u;if(!_||!y)return;const d={fps:fe("fps"),cpu:fe("cpu"),draw:fe("draw"),vram:fe("vram")};n.hidden=!d.fps,s.hidden=!d.cpu,o.hidden=!d.draw,a.hidden=!d.vram,M(_,_.stats,d)};x();const F=window.setInterval(O,Br),g=Po(()=>{y=ln(),x(),O()});return{setHost(_){m(_),O()},setApp(_){u=_,x(),_&&O()},destroy(){window.clearInterval(F),g(),t.remove(),r.remove()}}}function ds(e){return Number.isFinite(e)?e>=1e6?`${Math.round(e/1e5)}М`:e>=1e4?`${Math.round(e/1e3)}к`:`${Math.round(e)}`:"—"}const Dr="hud-density--skinny",jr="hud-density--minimal";function zr(){const e=document.documentElement,t=()=>{const n=Ci();e.classList.toggle(Dr,n!=="full"),e.classList.toggle(jr,n==="minimal")};return t(),Po(t)}function kc(){return 1}const ho="blendars-scrollbar",Gr=[".dlg__body",".settings__scroll",".settings__tabs",".actions",".mp__list"],Be=e=>Gr.map(t=>`${t}${e}`).join(`,
`),Ur=`
/* Firefox: тонкая полоса, ползунок gray на дорожке bg1. */
@supports not selector(::-webkit-scrollbar) {
    ${Be("")} {
        scrollbar-width: thin;
        scrollbar-color: #928374 #28282899;
    }
}

@media (hover: hover) and (pointer: fine) {
    /* Chromium и WebKit. 12px — под штрих 8px плюс прозрачная рамка ползунка. */
    ${Be("::-webkit-scrollbar")} {
        width: max(0.75rem, 12px);
        height: max(0.75rem, 12px);
    }
    /* Дорожка — тот же тёмный серый, что подложка панелей: полоса читается как
       часть окна, а не как плашка поверх текста. */
    ${Be("::-webkit-scrollbar-track")} {
        background: #28282899;
        border-radius: 999px;
    }
    /* Стрелочные кнопки в старых WebKit — лишний хром. */
    ${Be("::-webkit-scrollbar-button")} {
        display: none;
        width: 0;
        height: 0;
    }
    /* Прозрачная рамка в 2px + background-clip: padding-box оставляют круглый
       штрих 8px, а не прямоугольник во всю ширину полосы. */
    ${Be("::-webkit-scrollbar-thumb")} {
        background: #928374;
        border: 1px solid transparent;
        background-clip: padding-box;
        border-radius: 999px;
    }
    ${Be("::-webkit-scrollbar-thumb:hover")} { background-color: #ebdbb2; }
    ${Be("::-webkit-scrollbar-thumb:active")} { background-color: #fe8019; }
    /* Уголок на пересечении двух полос серым квадратом вылезал бы в углу
       колонки вкладок, где полоса одна. */
    ${Be("::-webkit-scrollbar-corner")} { background: transparent; }
}
`;function Hr(){if(document.getElementById(ho))return;const e=document.createElement("style");e.id=ho,e.textContent=Ur,document.head.append(e)}const Vr="vehicle",Cc="vehicleInput",Nc="vehicleWheel",Wr="driveCamera",Ds=document.getElementById("app");if(!Ds)throw new Error("#app not found");Hr();let Z=null,xs=null,We=null,_s=null;const Dt={boot:.1,device:.35,decoders:.7,background:.95},Me=new fa(document.body);let jt=null,ys=null,It=null,zt=null,un=null,be=!1,Ee=null,mn=null;const ws="blendars.backend";function pn(e){try{e?localStorage.setItem(ws,e):localStorage.removeItem(ws)}catch{}}function Yr(){try{const e=localStorage.getItem(ws);return e==="webgpu"||e==="webgl2"?e:null}catch{return null}}function Jr(){const e=new URLSearchParams(location.search).get("backend");return e==="webgpu"||e==="webgl2"?e:null}let ht=Jr()??Yr();const V=new wr(Ds,{onScene:e=>{Xo(V,e)},onBack:()=>{ic(V)},onRecord:()=>{cc()}});window.__blendarsEnterSmoke=()=>{ac(V)};const we=Sr(V.settings.backendSlot,{onSwitch:()=>{oc()}});{const e=document.createElement("style");e.textContent=vr,document.head.append(e)}navigator.gpu||we.setUnavailable("WebGPU не поддерживается этим браузером");function js(e,t){const n=t==="scene";e.setMode(t),e.setSceneChrome(n),fn.setHost(e.statsHostFor(n))}const fn=$r(V.statsHost);zr();Me.setStage("интерфейс",Dt.boot);window.__blendarsMenuReady=!0;Xr();function Kr(e){mn?.();const t=Fr(e),n=Pr(e);mn=()=>{t(),n.destroy()}}async function Xr(){try{Me.setStage("пресет настроек",Dt.boot);const{askBootPreset:e}=await ee(async()=>{const{askBootPreset:s}=await import("./boot-preset.Cnck5uFP.js");return{askBootPreset:s}},__vite__mapDeps([3,2]));if(await e(),ht==="webgpu"){const{confirmWebgpuSwitch:s}=await ee(async()=>{const{confirmWebgpuSwitch:a}=await import("./confirm-dialog.BoAueR29.js");return{confirmWebgpuSwitch:a}},[]);await s()||(ht=null,pn(null),V.setStatus("Запуск на WebGL2 — WebGPU не подтверждён"))}const t=await gt((s,o)=>{Me.setStage(s,o??void 0),Me.updateFromResources(),qr()});window.__blendarsEngine={backend:t.backend},window.__blendarsApp=t.app,zt=t.backend,we.setBackend(t.backend),fn.setApp(t.app),Kr(t.app),t.backend==="webgpu"&&Ko(t),Me.setStage("сцена меню",Dt.background);const{buildMenuBackground:n}=await ee(async()=>{const{buildMenuBackground:s}=await import("./menu-background.BnxtfccR.js");return{buildMenuBackground:s}},__vite__mapDeps([4,2,5,6]));Ee=await n(t.app),window.__blendarsBackgroundReady=!0,Qr(),Me.setStage("готово",1),V.setStatus(""),await Me.hide(),window.__blendarsInteractive=!0,console.info("[blendars] boot complete",t.backend)}catch(e){console.error("[blendars] boot failed",e),Me.setError("Не удалось запустить рендер. Проверьте поддержку WebGPU/WebGL2 в браузере."),window.__blendarsInteractive=!0}}async function qr(){const e=new URLSearchParams(location.search).get("bootDelay");if(!e)return;const t=Number(e);!Number.isFinite(t)||t<=0||await new Promise(n=>setTimeout(n,Math.min(t,3e4)))}async function Qr(){try{const{probeServiceWorker:e}=await ee(async()=>{const{probeServiceWorker:n}=await import("./capabilities.Vl_UvQZj.js");return{probeServiceWorker:n}},[]),t=await e("/blend-ars/sw.js");console.info(t==="registered"?"[blendars] Service Worker зарегистрирован: оффлайн-оболочка доступна":`[blendars] Service Worker: ${t} — оффлайн-старт недоступен`)}catch(e){console.warn("[blendars] регистрация Service Worker не удалась",e)}}function gt(e){return jt??=Zr(e),jt}async function Zr(e){const{initEngine:t}=await ee(async()=>{const{initEngine:a}=await import("./engine-bootstrap.CXdJUUkG.js");return{initEngine:a}},__vite__mapDeps([7,2])),n=document.createElement("canvas");n.className="game-canvas",n.style.zIndex="0",document.body.insertBefore(n,Ds),ys=n;const s=ht??"webgl2";return t(n,{physics:!0,deviceTypes:s==="webgl2"?["webgl2","webgpu"]:["webgpu","webgl2"],skipAdapterProbe:s==="webgpu"&&ht!==null,onStage:(a,r)=>{r===1?e?.(a,Dt.decoders):e?.(a,Dt.device)}})}const ec=5,tc=1e3,nc=3;function Ko(e){let t=0;It?.();let n=null;const s=m=>{pn(null),zs("webgl2",{persist:!1,restoreScene:!1,reason:m})};let o=e.app.frame,a=0;const r=window.setInterval(()=>{if(document.hidden){o=e.app.frame;return}const m=e.app.frame;m===o?(a++,a>=nc&&(window.clearInterval(r),s("кадры не идут — вероятно, WebGPU завис на первом кадре"))):(a=0,o=m)},tc);It=()=>{window.clearInterval(r),n?.(),n=null},ee(async()=>{const{watchWebGpuErrors:m}=await import("./engine-bootstrap.CXdJUUkG.js");return{watchWebGpuErrors:m}},__vite__mapDeps([7,2])).then(({watchWebGpuErrors:m})=>{if(be){It?.();return}n=m(e.device,u=>{t++,console.warn(`[blendars] webgpu error #${t}: ${u.slice(0,200)}`),(sc(u)||t>=ec)&&(window.clearInterval(r),s(u))})})}function sc(e){return/out of memory|not enough memory/i.test(e)}async function zs(e,t){if(be)return;be=!0,we.setBusy(!0),t.reason&&console.warn("[blendars] смена рендера:",t.reason.slice(0,200));const{probeWebGpuAdapter:n}=await ee(async()=>{const{probeWebGpuAdapter:a}=await import("./engine-bootstrap.CXdJUUkG.js");return{probeWebGpuAdapter:a}},__vite__mapDeps([7,2])),s=setTimeout(()=>{V.setStatus("Рендер переключается дольше обычного… если не идёт — F9")},25e3);if(e==="webgpu"){const a=await n();if(!a){we.setUnavailable("WebGPU не поддерживается этим браузером"),V.setStatus("WebGPU не поддерживается этим браузером"),clearTimeout(s),we.setBusy(!1),be=!1;return}a.stalled?console.warn("[blendars] зонд WebGPU не ответил — пробуем по явному запросу"):a.software&&V.setStatus(`WebGPU: софтверный адаптер (${a.label||"без описания"}) — рендер может упасть`);const{confirmWebgpuSwitch:r}=await ee(async()=>{const{confirmWebgpuSwitch:u}=await import("./confirm-dialog.BoAueR29.js");return{confirmWebgpuSwitch:u}},[]);if(!await r()){V.setStatus("Остались на WebGL2 — WebGPU не подтверждён"),clearTimeout(s),we.setBusy(!1),be=!1;return}}const o=Zo();o.setStage("смена рендера…");try{It?.(),It=null,o.setStage("смена рендера: остановка движка…"),Z?.destroy(),Z=null,window.__blendarsSceneReady=!1,qo(),Qo(),$s(null),Ee?.destroy(),Ee=null;const a=await jt;jt=null,zt=null,fn.setApp(null),mn?.(),mn=null,a?.detachResize(),a?.app.destroy(),ys?.remove(),ys=null,ht=e,t.persist&&pn(e),o.setStage(`смена рендера: движок ${e.toUpperCase()}…`);const r=await gt();zt=r.backend,window.__blendarsEngine={backend:r.backend},window.__blendarsApp=r.app,we.setBackend(r.backend),fn.setApp(r.app),r.backend==="webgpu"&&Ko(r),r.backend!==e&&V.setStatus(`${e.toUpperCase()} недоступен — рендер: ${r.backend.toUpperCase()}`);const m=t.restoreScene===!1?null:un;if(m)o.done(),await Xo(V,m);else{un=null,o.setStage("смена рендера: сцена меню…");const{buildMenuBackground:u}=await ee(async()=>{const{buildMenuBackground:y}=await import("./menu-background.BnxtfccR.js");return{buildMenuBackground:y}},__vite__mapDeps([4,2,5,6]));Ee=await u(r.app),js(V,"menu"),V.setBusy(!1),r.backend===e&&V.setStatus(""),o.done()}}catch(a){if(console.error("[blendars] смена рендера не удалась",a),t.allowRetry!==!1&&e!=="webgl2"){o.done(),ht="webgl2",pn(null),be=!1,we.setBusy(!1),await zs("webgl2",{persist:!1,allowRetry:!1});return}o.fail("не удалось сменить рендер"),V.setStatus("Не удалось сменить рендер — перезагрузите страницу (F9)")}finally{clearTimeout(s),we.setBusy(!1),be=!1}}async function oc(){be||zt&&await zs(zt==="webgpu"?"webgl2":"webgpu",{persist:!0})}async function ac(e){if(!be){e.setBusy(!0);try{if(await gt(),new URLSearchParams(location.search).get("scene")==="smoke"){const{buildSmokeScene:t}=await ee(async()=>{const{buildSmokeScene:n}=await import("./smoke-scene.BkjTzTbI.js");return{buildSmokeScene:n}},__vite__mapDeps([8,2]));Ee?.destroy(),Ee=null,t((await gt()).app)}e.setStatus("Ангар появится на этапе 4"),e.setBusy(!1)}catch(t){console.error("[blendars] enter game failed",t),e.setStatus("Не удалось открыть сцену"),e.setBusy(!1)}}}async function Xo(e,t){if(be)return;e.setBusy(!0),e.setStatus(t==="maserati"?"Загрузка сцены: мазерати…":"Загрузка сцены…");const n=Zo();try{Ee?.destroy(),Ee=null;const s=await gt(),{buildVehicleScene:o}=await ee(async()=>{const{buildVehicleScene:a}=await import("./vehicle-scene.DU9zmKec.js");return{buildVehicleScene:a}},__vite__mapDeps([9,2,7,5]));Z=await o(s.app,a=>n.setStage(a),{body:t,onAssetProgress:(a,r)=>n.setStage(a,r)}),js(e,"scene"),e.setBusy(!1),e.setStatus("WASD / стрелки — ехать, пробел — ручник, R — сброс на месте, Q — плечо камеры"),un=t,window.__blendarsSceneReady=!0,lc(s.app),dc(s.app),$s(()=>rc()),n.done()}catch(s){console.error("[blendars] vehicle scene failed",s),e.setStatus("Не удалось загрузить сцену"),n.fail(String(s?.message??s)),e.setBusy(!1)}}async function ic(e){Z?.destroy(),Z=null,un=null,window.__blendarsSceneReady=!1,$s(null);const t=await gt(),{buildMenuBackground:n}=await ee(async()=>{const{buildMenuBackground:s}=await import("./menu-background.BnxtfccR.js");return{buildMenuBackground:s}},__vite__mapDeps([4,2,5,6]));Ee=await n(t.app),js(e,"menu"),e.setBusy(!1),e.setStatus(""),qo(),Qo()}function rc(){const e=Z?.root.findByName("camera"),t=e?.script?.get(Wr);if(!e||!t)return null;const n=(o,a)=>typeof o=="number"&&Number.isFinite(o)?o:a,s=(o,a,r)=>o<a?a:o>r?r:o;return{read:()=>({yaw:n(t._manualYaw,0),lift:n(t._manualLift,0),zoom:n(t._zoom,1),shoulder:n(t.shoulder,1),distance:n(t.distance,6.4),height:n(t.height,2.5),fov:e.camera?n(e.camera.fov,60):60}),write:o=>{o.yaw!==void 0&&(t._manualYaw=s(o.yaw,-180,180)),o.lift!==void 0&&(t._manualLift=s(o.lift,-.6,3.4)),o.zoom!==void 0&&(t._zoom=s(o.zoom,.55,1.7)),o.shoulder!==void 0&&(t.shoulder=o.shoulder),o.distance!==void 0&&(t.distance=s(o.distance,3,15)),o.height!==void 0&&(t.height=s(o.height,1,6)),o.fov!==void 0&&e.camera&&(e.camera.fov=s(o.fov,40,90))},reset:()=>{t.resetLook()}}}async function cc(){const e=(t,n)=>{V.setRecordState(t,n)};try{if(!We){const{GameRecorder:t}=await ee(async()=>{const{GameRecorder:o}=await import("./video-recorder.D8sxvFri.js");return{GameRecorder:o}},__vite__mapDeps([10,2,1])),n=jt;if(n===null){e("error","движок не поднят, запись невозможна");return}const s=(await n.catch(()=>null))?.app??null;if(s===null){e("error","сначала войди в сцену");return}We=new t(s,{onState:(o,a)=>e(o,a),onProgress:o=>V.setRecordProgress(o)},{frameRate:Do(),width:Si(s.graphicsDevice.canvas.width||window.innerWidth),quality:jo(),keyFrameInterval:zo(),sound:hs(),attachAudio:o=>Z?.audio?.attachRecordStream(o)??(()=>{})})}if(We.recording){const t=await We.stop();t>0&&e("idle",`файл ${(t/1048576).toFixed(1)} МБ сохранён`)}else await We.start()}catch(t){e("error",t instanceof Error?t.message:"запись недоступна")}}function lc(e){const n=Cr(()=>Z?.root.findByName("vehicle")?.script?.get(Vr)??null,V.clusterHost),s=Z?Lr(e,Z.root,10):null,o=Tr(()=>{const r=Z?.root.findByName("camera")?.forward;return r?Math.atan2(r.x,-r.z):null},()=>{const a=Z?.root.findByName("vehicle")?.getPosition();return a?{x:a.x,z:a.z}:null},()=>s?.list()??[]);xs=()=>{We?.destroy(),We=null,n.destroy(),s?.destroy(),o.destroy()}}function qo(){xs?.(),xs=null}function dc(e){Z&&ee(async()=>{const{attachTouchControls:t}=await import("./touch-controls.BtmxlsMT.js");return{attachTouchControls:t}},__vite__mapDeps([11,2])).then(({attachTouchControls:t})=>{Z&&(_s=t(e,Z.root).destroy)})}function Qo(){_s?.(),_s=null}function Zo(){const e=document.createElement("div");e.className="loading",xo(e);const t=document.createElement("div");t.className="loading__title",t.textContent="СЦЕНА";const n=document.createElement("div");n.className="loading__bar loading__bar--unknown";const s=document.createElement("div");s.className="loading__fill",n.append(s);const o=document.createElement("div");return o.className="loading__stage",o.style.opacity="0.8",o.style.fontSize="13px",o.style.textTransform="uppercase",e.append(t,n,o),document.body.append(e),{setStage(a,r){if(o.textContent=a,r===void 0||!Number.isFinite(r)){n.classList.add("loading__bar--unknown");return}n.classList.remove("loading__bar--unknown"),s.style.width=`${Math.round(Math.min(1,Math.max(0,r))*100)}%`},done(){e.remove()},fail(a){n.hidden=!0,o.textContent=`ошибка: ${a}`,setTimeout(()=>e.remove(),4e3)}}}window.addEventListener("keydown",e=>{e.key==="F9"&&location.reload()});export{Pi as A,Fi as B,Mi as C,Wr as D,bn as E,Ec as F,ai as G,vc as H,Nc as V,cn as a,tt as b,Sc as c,Oe as d,_c as e,xc as f,li as g,hc as h,wc as i,bc as j,Vr as k,us as l,fc as m,yc as n,gc as o,as as p,ji as q,Lt as r,ms as s,Po as t,mc as u,pc as v,Cc as w,Ni as x,Ri as y,kc as z};
