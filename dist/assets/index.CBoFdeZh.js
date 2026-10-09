const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/music-player.fvf_geO1.js","assets/music-audio.DNu4TXPq.js","assets/playcanvas.BiKF8DQR.js","assets/finish-card.DlxQUIAx.js","assets/boot-preset.CuXNSOgh.js","assets/menu-background.BcL3u8m1.js","assets/engine-sound.C_jeT1Y5.js","assets/look-gestures.BhGm2xnc.js","assets/engine-bootstrap.Dm7KRjCY.js","assets/smoke-scene.C4r09Tql.js","assets/vehicle-scene.BldK0Eyy.js","assets/video-recorder.T8uFKfef.js","assets/game-over-card.DvNDJg6E.js","assets/touch-controls.EqhnkIv9.js"])))=>i.map(i=>d[i]);
import{_ as te,E as It,T as ho,C as vr,M as Gn,a as La,b as ai,S as wr,B as Er,V as Aa,c as Sr,d as kr,e as Cr,f as Nr,g as Lr,A as Ra,F as Ta,P as Ar}from"./playcanvas.BiKF8DQR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();const Pa="blendars-loading",Rr=`
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
`;function Tr(){if(document.getElementById(Pa))return;const e=document.createElement("style");e.id=Pa,e.textContent=Rr,document.head.append(e)}const Pr="/blend-ars/assets/loader.CPCrwQQc.webp",Mr="#282828",Ma="blendars-splash",Ir=`
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
    background-color: ${Mr};
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
`;function ii(e){if(!document.getElementById(Ma)){const s=document.createElement("style");s.id=Ma,s.textContent=Ir,document.head.append(s)}if(e.querySelector(":scope > .splash-logo")){e.classList.add("splash-host");return}const t=document.createElement("div");t.className="splash-logo";const n=document.createElement("img");n.src=Pr,n.alt="Blendars",t.append(n),e.prepend(t),e.classList.add("splash-host")}class $r{root;fill;bar;stageEl;bytesEl;errorEl;lastPercent=-1;lastBytesText="";lastStage="";constructor(t,n={}){if(this.root=document.createElement("div"),this.root.className="loading",Tr(),ii(this.root),this.root.setAttribute("role","progressbar"),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","100"),this.root.setAttribute("aria-valuenow","0"),this.root.setAttribute("aria-label","Загрузка"),n.title!==void 0){const o=document.createElement("h1");o.className="loading__title",o.textContent=n.title,this.root.append(o)}this.bar=document.createElement("div"),this.bar.className="loading__bar loading__bar--unknown",this.fill=document.createElement("div"),this.fill.className="loading__fill",this.bar.append(this.fill),this.bar.removeAttribute("aria-valuenow");const s=document.createElement("div");s.className="loading__row",this.stageEl=document.createElement("span"),this.stageEl.className="loading__stage",this.stageEl.textContent="старт",this.bytesEl=document.createElement("span"),this.bytesEl.className="loading__bytes",this.bytesEl.textContent="",s.append(this.stageEl,this.bytesEl),this.errorEl=document.createElement("div"),this.errorEl.className="loading__error",this.errorEl.hidden=!0,this.root.append(this.bar,s,this.errorEl),t.append(this.root)}setStage(t,n){t!==this.lastStage&&(this.stageEl.textContent=t,this.lastStage=t);const s=n!==void 0&&Number.isFinite(n);if(this.bar.classList.toggle("loading__bar--unknown",!s),s){const o=Math.round(Math.min(1,Math.max(0,n))*100);o!==this.lastPercent&&(this.fill.style.width=`${o}%`,this.root.setAttribute("aria-valuenow",String(o)),this.lastPercent=o)}}setError(t){this.bar.hidden=!0,this.stageEl.textContent="ошибка",this.errorEl.textContent=t,this.errorEl.hidden=!1}updateFromResources(){if(typeof performance.getEntriesByType!="function")return;const t=performance.getEntriesByType("resource");let n=0,s=0;for(const a of t)a.name.indexOf(location.origin)===0&&(n+=a.encodedBodySize||a.transferSize||0,s=Math.max(s,a.responseEnd||0));if(n<=0)return;const o=`${Fr(n)} загружено`;o!==this.lastBytesText&&(this.bytesEl.textContent=o,this.lastBytesText=o)}hide(){return this.root.setAttribute("aria-hidden","true"),this.root.classList.add("hidden"),new Promise(t=>{let n=!1;const s=()=>{n||(n=!0,this.root.remove(),t())};this.root.addEventListener("transitionend",s,{once:!0}),setTimeout(s,400)})}}function Fr(e){return e<1024?`${e} Б`:e<1024*1024?`${(e/1024).toFixed(0)} КБ`:`${(e/(1024*1024)).toFixed(1)} МБ`}const ri="/blend-ars/assets/LilitaOne-Regular.C8J_njg9.ttf",Or=new URL("/blend-ars/assets/fullscreen.C4xFj3BF.svg",import.meta.url).href,Br=new URL("/blend-ars/assets/fullscreen-exit.D85sBYy_.svg",import.meta.url).href,Dr=new URL("/blend-ars/assets/info.BdEiL0Sf.svg",import.meta.url).href,jr=new URL("/blend-ars/assets/book-open.CLVm05VY.svg",import.meta.url).href,Hr=new URL("/blend-ars/assets/trophy.DpYLSMCP.svg",import.meta.url).href,Ia=new URL("/blend-ars/assets/gear_six.TA3VDyxO.svg",import.meta.url).href,zr=new URL("/blend-ars/assets/music-note.BpgtDFsX.svg",import.meta.url).href,Ur=new URL("/blend-ars/assets/package.BDtnf6Kx.svg",import.meta.url).href,Gr=new URL("/blend-ars/assets/flag.CeS1AlXY.svg",import.meta.url).href,Wr=new URL("/blend-ars/assets/garage.D_BJEZuB.svg",import.meta.url).href,Vr=new URL("/blend-ars/assets/storefront.e4K1ebmi.svg",import.meta.url).href,Yr=new URL("/blend-ars/assets/truck.rvSKQmy5.svg",import.meta.url).href,Kr=new URL("/blend-ars/assets/coupe.DdXCwqWg.svg",import.meta.url).href,Jr=new URL("/blend-ars/assets/x.D2ii0gML.svg",import.meta.url).href,Xr=new URL("/blend-ars/assets/list.DXUiLcf_.svg",import.meta.url).href,qr=new URL("/blend-ars/assets/triangle-left.DPdzCyZ0.svg",import.meta.url).href,zu=new URL("/blend-ars/assets/stop-square.Cvj1GcXd.svg",import.meta.url).href,Uu=new URL("/blend-ars/assets/arrows_clockwise.Toz6NZFk.svg",import.meta.url).href,ci="/blend-ars/assets/ui-click.DcT3uYBZ.wav",Qr={click:1,toggle:1.22,window:.86},Zr=.5;let li=()=>.5,Ue=null,as=null,Pt=null,$a=!1;function ec(e){li=e}function tc(){if($a)return;$a=!0;const e=window.AudioContext??window.webkitAudioContext;if(e!==void 0){try{Ue=new e}catch{Ue=null;return}fetch(ci).then(t=>t.arrayBuffer()).then(t=>Ue?.decodeAudioData(t)).then(t=>{as=t??null}).catch(()=>{as=null})}}function we(e="click"){const t=Zr*li();if(t>0){if(as!==null&&Ue!==null){Ue.state==="suspended"&&Ue.resume().catch(()=>{});const n=Ue.createBufferSource();n.buffer=as,n.playbackRate.value=Qr[e];const s=Ue.createGain();s.gain.value=t,n.connect(s).connect(Ue.destination),n.start();return}Pt===null&&(Pt=new Audio(ci),Pt.preload="auto"),Pt.volume=t,Pt.currentTime=0,Pt.play().catch(()=>{})}}function vt(e){const t=n=>{if(!n.isPrimary||n.pointerType==="mouse"&&n.button!==0)return;const s=n.target;if(!(s instanceof Element)||s.closest('[disabled], [aria-disabled="true"]')||s.closest('input[type="range"]'))return;if(s.closest('input[type="checkbox"], .modes__card, [role="switch"]')){we("toggle");return}s.closest('button, .mitem, [role="button"], .dlg__close')&&we("click")};return e.addEventListener("pointerdown",t,!0),()=>e.removeEventListener("pointerdown",t,!0)}function Xn(e){const t=n=>{const s=n.target;s instanceof HTMLInputElement&&s.type==="range"&&we("click")};return e.addEventListener("change",t,!0),()=>e.removeEventListener("change",t,!0)}const nc=`
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
`;function bs(e){const t=document.createElement("div");if(t.className="dlg",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",e.title),!document.getElementById("dlg-style")){const r=document.createElement("style");r.id="dlg-style",r.textContent=nc,document.head.append(r)}const n=document.createElement("div");n.className="dlg__panel";const s=document.createElement("h2");s.className="dlg__title",s.textContent=e.title;const o=document.createElement("div");return o.className="dlg__body",o.append(e.body),n.append(s,o),t.append(n),document.body.append(t),{root:t,open(){t.hidden=!1},close(){t.hidden=!0},destroy(){t.remove()}}}const sc=[{body:"truck",title:"Джип",note:"Грузовик. Родное шасси, грузовая физика.",icon:Yr},{body:"maserati",title:"Мазерати",note:"GT3-обвес на том же шасси.",icon:Kr}],oc=`
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
`;function ac(e){if(!document.getElementById("game-modes-style")){const o=document.createElement("style");o.id="game-modes-style",o.textContent=oc,document.head.append(o)}const t=document.createElement("div");t.className="modes";const n=sc.map(o=>{const a=document.createElement("button");a.className="modes__card",a.type="button",a.dataset.body=o.body;const r=document.createElement("span");r.className="modes__art",r.style.setProperty("--modes-icon",`url(${JSON.stringify(o.icon)})`);const d=document.createElement("span");d.className="modes__title",d.textContent=o.title;const u=document.createElement("p");return u.className="modes__note",u.textContent=o.note,a.append(r,d,u),a.addEventListener("pointerdown",f=>{f.preventDefault(),!a.disabled&&e(o.body)}),t.append(a),a}),s=bs({title:"Режимы игры",body:t});return{dialog:s,open(){s.open()},setBusy(o){for(const a of n)a.disabled=o},destroy(){s.destroy()}}}const ic={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:8,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:6,fill:1.05,rimLeft:6.15,rimRight:6.3,spot:7.05,fog:.005,gamma:1,gammaStrength:.5,toneMapping:2,sunElevation:15,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:.3}},shadows:{val:{cascades:4,distribution:.95,blend:.12,distance:320,resolution:4096,bias:0,normalBias:.05}},postfx:{on:!0,val:{bloom:.1,bloomBlur:16,bloomThreshold:.2,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:.95,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:1,fps:0,msaa:!0}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},rc={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:4,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:5,fill:.3,rimLeft:.5,rimRight:.5,spot:2,fog:.0035,gamma:0,gammaStrength:1.2,toneMapping:2,sunElevation:9,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:1}},shadows:{val:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3}},postfx:{on:!1,val:{bloom:0,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.48,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:.5,fps:30,msaa:!1}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},cc=[{key:"armored-truck-5t-300hp",name:"Бронированный грузовик — 5 т, 300 л.с.",note:"Тяжёлая машина: огромная инерция поворота, крен не валит, ручник срабатывает как тормоз. Дизель: пик момента на 1700 об/мин, отсечка 3400.",val:{mass:5e3,engineTorque:1260,peakTorqueRpm:1700,maxRpm:3400,finalDrive:7.5,brakeForce:11e3,engineBraking:.22,dragForce:4,rollingResistance:.03,lateralGripAssist:2.4,wheelGrip:5,rollInfluence:.12,antiRoll:1.2,inertiaScale:2.8,inertiaRoll:1.9,inertiaPitch:1.6,suspStiffness:26,suspDamping:2.6,suspCompression:5.2,suspTravel:.45,suspForce:7e4,highSpeedLock:.5,highSpeedLockAt:90}},{key:"muscle-car-4t-500hp",name:"Muscle car — 4 т, 500 л.с.",note:"Кузов на мягких пружинах: нос гуляет, на скорости ложится на борт и переворачивается. Атмосферник: пик 4200 об/мин, отсечка 5600.",val:{mass:4e3,engineTorque:850,peakTorqueRpm:4200,maxRpm:5600,finalDrive:6.5,brakeForce:15e3,engineBraking:.1,dragForce:2,rollingResistance:.015,lateralGripAssist:.6,wheelGrip:4.2,rollInfluence:.8,antiRoll:.25,inertiaScale:1.8,inertiaRoll:.6,inertiaPitch:.9,suspStiffness:22,suspDamping:2.4,suspCompression:4.6,suspTravel:.34,suspForce:62e3,highSpeedLock:.6,highSpeedLockAt:130}}],di="blendars.presets.v1",ui="blendars-settings",mi=1;let pe={active:null,list:[]},Fa=!1;function Je(){if(Fa)return pe;Fa=!0;try{const e=localStorage.getItem(di);if(!e)return pe;const t=JSON.parse(e);if(!t||typeof t!="object")return pe;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=lc(o);a&&s.push(a)}pe={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return pe}function lc(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Zt(){try{localStorage.setItem(di,JSON.stringify(pe))}catch{}}function Ao(){return Je().list.slice().sort((t,n)=>n.created-t.created)}function is(){return Je().active}function dc(){const e=Je();return e.active?e.list.find(t=>t.id===e.active)??null:null}function Ro(e){Je(),pe.active=e,Zt()}function $t(e,t,n=Date.now()){Je();const s={id:gc(n),name:e.trim()||yt(new Date(n)),created:n,data:t};return pe.list.push(s),pe.active=s.id,Zt(),s}function uc(e,t){const s=Je().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,Zt(),!0):!1}function pi(e,t){const s=Je().list.find(o=>o.id===e);return s?(s.data=t,Zt(),!0):!1}function mc(e){Je();const t=pe.list.findIndex(n=>n.id===e);t<0||(pe.list.splice(t,1),pe.active===e&&(pe.active=null),Zt())}function yt(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function pc(){Je(),pe={active:null,list:[]},Zt()}function fc(e){const t={app:ui,version:mi,name:e.name,created:e.created,data:e.data},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`${bc(e.name)}.json`,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function hc(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==ui||n.version!==mi||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function bc(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function gc(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const fi="blendars.physics-presets.v1",zo="blendars-physics",Uo=1;let ie={active:null,list:[]},Oa=!1;function Xe(){if(Oa)return ie;Oa=!0;try{const e=localStorage.getItem(fi);if(!e)return ie;const t=JSON.parse(e);if(!t||typeof t!="object")return ie;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=yc(o);a&&s.push(a)}ie={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ie}function yc(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Et(){try{localStorage.setItem(fi,JSON.stringify(ie))}catch{}}function Ba(){return Xe().list.slice().sort((e,t)=>t.created-e.created)}function Da(){return Xe().active}function ja(e){Xe(),ie.active=e,Et()}function xc(e,t,n=Date.now()){Xe();const s={id:gi(n),name:e.trim()||Ft(new Date(n)),created:n,data:t};return ie.list.push(s),ie.active=s.id,Et(),s}function _c(e,t){const s=Xe().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,Et(),!0):!1}function vc(e,t){const s=Xe().list.find(o=>o.id===e);return s?(s.data=t,Et(),!0):!1}function wc(e){Xe();const t=ie.list.findIndex(n=>n.id===e);t<0||(ie.list.splice(t,1),ie.active===e&&(ie.active=null),Et())}function Ec(){Xe(),ie={active:null,list:[]},Et()}function Sc(e){Xe();let t=0;for(const n of e){const s=n.created??Date.now()+t,o=n.name?.trim()||Ft(new Date(s));ie.list.some(r=>r.name===o&&r.created===s)||(ie.list.push({id:gi(s),name:o,created:s,data:n.data}),t++)}return t>0&&Et(),t}function Ft(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function kc(e){bi(`${Lc(e.name)}.json`,{app:zo,version:Uo,...hi(e)})}function Cc(e){bi("physics-presets.json",{app:zo,version:Uo,presets:e.map(hi)})}function Nc(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==zo||n.version!==Uo)return null;if(Array.isArray(n.presets)){const o=[];for(const a of n.presets){if(!a||typeof a!="object")continue;const r=Ha(a);r&&o.push(r)}return o.length>0?{items:o}:null}const s=Ha(n);return s?{items:[s]}:null}function hi(e){return{name:e.name,created:e.created,data:e.data}}function Ha(e){if(!e.data||typeof e.data!="object")return null;const t={data:e.data};return typeof e.name=="string"&&(t.name=e.name),typeof e.created=="number"&&Number.isFinite(e.created)&&(t.created=e.created),t}function bi(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=e,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Lc(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"physics-preset"}function gi(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const yi="blendars.camera-presets.v1",Ac="blendars.camera-views.v1",Go="blendars-camera",Wo=1;let ee={active:null,list:[]},za=!1;function qe(){if(za)return ee;za=!0;try{const e=localStorage.getItem(yi);if(!e)return ee={active:null,list:Rc()},ee.list.length>0&&mt(),ee;const t=JSON.parse(e);if(!t||typeof t!="object")return ee;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const a=Tc(o);a&&s.push(a)}ee={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ee}function Rc(){try{const e=localStorage.getItem(Ac);if(!e)return[];const t=JSON.parse(e);if(!t||typeof t!="object")return[];const n=t.list;if(!Array.isArray(n))return[];const s=[];for(const o of n){if(!o||typeof o!="object")continue;const a=o;typeof a.id!="string"||!a.id||!a.view||typeof a.view!="object"||s.push({id:a.id,name:typeof a.name=="string"&&a.name?a.name:"Без имени",created:typeof a.created=="number"&&Number.isFinite(a.created)?a.created:0,data:a.view})}return s}catch{return[]}}function Tc(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function mt(){try{localStorage.setItem(yi,JSON.stringify(ee))}catch{}}function Ua(){return qe().list.slice().sort((e,t)=>t.created-e.created)}function Ga(){return qe().active}function Pc(e){qe(),ee.active=e,mt()}function Mc(e,t,n=Date.now()){qe();const s={id:vi(n),name:e.trim()||xt(new Date(n)),created:n,data:t};return ee.list.push(s),ee.active=s.id,mt(),s}function Ic(e,t){const s=qe().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,mt(),!0):!1}function $c(e,t){const s=qe().list.find(o=>o.id===e);return s?(s.data=t,mt(),!0):!1}function Fc(e){qe();const t=ee.list.findIndex(n=>n.id===e);t<0||(ee.list.splice(t,1),ee.active===e&&(ee.active=null),mt())}function Oc(){qe(),ee={active:null,list:[]},mt()}function Bc(e){qe();let t=0;for(const n of e){const s=n.created??Date.now()+t,o=n.name?.trim()||xt(new Date(s));ee.list.some(r=>r.name===o&&r.created===s)||(ee.list.push({id:vi(s),name:o,created:s,data:n.data}),t++)}return t>0&&mt(),t}function xt(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function Dc(e){_i(`${zc(e.name)}.json`,{app:Go,version:Wo,...xi(e)})}function jc(e){_i("camera-presets.json",{app:Go,version:Wo,presets:e.map(xi)})}function Hc(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==Go||n.version!==Wo)return null;if(Array.isArray(n.presets)){const o=[];for(const a of n.presets){if(!a||typeof a!="object")continue;const r=Wa(a);r&&o.push(r)}return o.length>0?{items:o}:null}const s=Wa(n);return s?{items:[s]}:null}function xi(e){return{name:e.name,created:e.created,data:e.data}}function Wa(e){if(!e.data||typeof e.data!="object")return null;const t={data:e.data};return typeof e.name=="string"&&(t.name=e.name),typeof e.created=="number"&&Number.isFinite(e.created)&&(t.created=e.created),t}function _i(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=e,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function zc(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"camera-preset"}function vi(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}let wi=null;function Vo(e){wi=e}function ot(){return wi?.()??null}const be={yaw:0,lift:0,zoom:1,shoulder:1,distance:6.4,height:2.5,fov:60},To=["yaw","lift","zoom","distance","height","fov"],Va={yaw:{label:"Поворот",min:-180,max:180,step:1,unit:"°"},lift:{label:"Наклон",min:-.6,max:3.4,step:.1,unit:" м"},zoom:{label:"Зум",min:.55,max:1.7,step:.01,unit:"×"},distance:{label:"Дистанция",min:3,max:15,step:.1,unit:" м"},height:{label:"Высота",min:1,max:6,step:.1,unit:" м"},fov:{label:"Обзор (fov)",min:40,max:90,step:1,unit:"°"}},bo=[[-1,"Слева"],[0,"Центр"],[1,"Справа"]];function Uc(e){if(!e||typeof e!="object")return null;const t=e,n=(o,a)=>{const r=t[o];return typeof r=="number"&&Number.isFinite(r)?r:a};return[...To,"shoulder"].some(o=>typeof t[o]=="number")?{yaw:n("yaw",be.yaw),lift:n("lift",be.lift),zoom:n("zoom",be.zoom),shoulder:n("shoulder",be.shoulder),distance:n("distance",be.distance),height:n("height",be.height),fov:n("fov",be.fov)}:null}const Yo="blendars.sound-effects.v3",Ko="blendars.sound-effects.v2",Ei=[["engine","Двигатель"],["road","Шум качения"],["skid","Скрежет шин"],["shift","Переключение передач"],["impact","Удары кузова"],["landing","Посадка на колёса"],["music","Фоновая музыка"],["uiClick","Клики меню"]],Si=Ei.map(([e])=>e),ki={engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},Gc={engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1},Ae={...ki},Ee={...Gc},Te={engineTorque:{label:"Момент двигателя (Н·м)",def:520,off:520,min:200,max:1600,decimals:0},peakTorqueRpm:{label:"Обороты пика момента",def:1700,off:1700,min:800,max:6e3,decimals:0},maxRpm:{label:"Отсечка двигателя",def:4200,off:4200,min:2e3,max:8e3,decimals:0},finalDrive:{label:"Главная пара",def:7,off:7,min:3,max:12,decimals:2},brakeForce:{label:"Сила тормозов (Н)",def:6500,off:6500,min:2e3,max:2e4,decimals:0},mass:{label:"Масса кузова (кг)",def:2200,off:2200,min:1200,max:8e3,decimals:0},engineBraking:{label:"Торможение двигателем",def:.15,off:.07,min:0,max:.4,decimals:2},dragForce:{label:"Сопротивление воздуха",def:1.75,off:0,min:0,max:4,decimals:2},rollingResistance:{label:"Сопротивление качения",def:.02,off:0,min:0,max:.06,decimals:3},lateralGripAssist:{label:"Помощь бокового сцепа",def:1.5,off:0,min:0,max:8,decimals:1},wheelGrip:{label:"Сцепление колёс",def:4,off:2.7,min:1,max:10,decimals:1},rollInfluence:{label:"Крен (перенос нагрузки)",def:.3,off:.08,min:0,max:1.2,decimals:2},suspStiffness:{label:"Жёсткость пружины",def:20,off:20,min:5,max:80,decimals:1},suspDamping:{label:"Демпфер (распускание)",def:2.3,off:2.3,min:.5,max:8,decimals:2},suspCompression:{label:"Демпфер (сжатие)",def:4.4,off:4.4,min:.5,max:12,decimals:2},suspTravel:{label:"Ход подвески",def:.35,off:.35,min:.1,max:.8,decimals:2},suspForce:{label:"Предел силы пружины (Н)",def:2e4,off:2e4,min:5e3,max:15e4,decimals:0},suspRelVel:{label:"Демпфер и скорость кузова",def:1,off:1,min:0,max:2,decimals:2},antiRoll:{label:"Стабилизатор (рычаг)",def:0,off:0,min:0,max:2.5,decimals:2},inertiaScale:{label:"Инерция поворота (yaw)",def:1.7,off:1,min:.3,max:3.5,decimals:2},inertiaRoll:{label:"Инерция крена (переворот)",def:1.2,off:1,min:.3,max:2.5,decimals:2},inertiaPitch:{label:"Инерция тангажа (клевок)",def:1.2,off:1,min:.3,max:2.5,decimals:2},highSpeedLock:{label:"Спад угла руля (доля)",def:.55,off:.4,min:.2,max:1,decimals:2},highSpeedLockAt:{label:"Скорость спада руля",def:100,off:80,min:50,max:200,decimals:0,unit:"kmh"},camTurnRate:{label:"Камера: скорость поворота",def:3.5,off:2.2,min:1,max:6,decimals:1},camFollowRate:{label:"Камера: сглаживание",def:11,off:9,min:4,max:20,decimals:0},skidThreshold:{label:"Порог звука юза",def:.15,off:.3,min:0,max:.5,decimals:2}},Re=Object.keys(Te),Jo="blendars.physics.v1",ce={},fe={};Wc();function Wc(){for(const e of Re)ce[e]=!0,fe[e]=Te[e].def}function Vc(){try{const e=localStorage.getItem(Jo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:null,o=typeof n.val=="object"&&n.val!==null?n.val:null;for(const a of Re){const r=Te[a],d=s?.[a];typeof d=="boolean"&&(ce[a]=d);const u=o?.[a];typeof u=="number"&&Number.isFinite(u)&&(fe[a]=Math.min(r.max,Math.max(r.min,u)))}}catch{}}function Ot(){try{localStorage.setItem(Jo,JSON.stringify({on:ce,val:fe}))}catch{}}function Gu(e){return ce[e]?fe[e]:Te[e].off}const qn=[];function Wu(e){return qn.push(e),()=>{const t=qn.indexOf(e);t>=0&&qn.splice(t,1)}}const Qn=[];function ae(){for(const e of Qn)e()}function Yc(e){return Qn.push(e),()=>{const t=Qn.indexOf(e);t>=0&&Qn.splice(t,1)}}function Bt(){for(const e of qn)e();ae()}function go(e){const t=Te[e],n=fe[e];return t.unit==="kmh"?`${Math.round(n)} км/ч`:n.toFixed(t.decimals)}const Ci=[0,1,2,3,4],Kc=["линейный","филмик","ACES","нейтральный","без тонмаппинга"],Ve={exposure:{label:"Экспозиция кадра",def:.5,min:.5,max:10,decimals:1},key:{label:"Яркость солнца",def:1,min:0,max:10,decimals:2},fill:{label:"Заполняющий свет",def:.3,min:0,max:15,decimals:2},rimLeft:{label:"Контровой слева",def:.5,min:0,max:15,decimals:2},rimRight:{label:"Контровой справа",def:.5,min:0,max:15,decimals:2},spot:{label:"Верхний софтбокс",def:2,min:0,max:15,decimals:2},fog:{label:"Туман задника",def:.0035,min:0,max:.05,decimals:4},gamma:{label:"Гамма-коррекция (sRGB)",def:1,min:0,max:1,decimals:0,options:[0,1]},gammaStrength:{label:"Сила гаммы",def:1.2,min:.5,max:3,decimals:2},toneMapping:{label:"Тонмаппинг",def:3,min:0,max:4,decimals:0,options:Ci},sunElevation:{label:"Высота солнца",def:34,min:-10,max:90,decimals:0},sunAzimuth:{label:"Азимут солнца",def:135,min:0,max:360,decimals:0},turbidity:{label:"Мутность неба",def:3,min:1,max:10,decimals:2},rayleigh:{label:"Рэлеевское рассеяние",def:2.2,min:0,max:5,decimals:2},mieCoefficient:{label:"Ми-рассеяние",def:.005,min:0,max:.05,decimals:3},mieDirectionalG:{label:"Анизотропия Ми",def:.8,min:0,max:.99,decimals:2},skyLuminance:{label:"Яркость неба",def:1,min:0,max:5,decimals:2}},jt=Object.keys(Ve),Xo="blendars.lighting.v1",ge={};Jc();Xc();function Jc(){for(const e of jt)ge[e]=Ve[e].def}function Xc(){try{const e=localStorage.getItem(Xo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of jt){const a=Ve[o],r=s?.[o];typeof r=="number"&&Number.isFinite(r)&&(ge[o]=Math.min(a.max,Math.max(a.min,r)))}}catch{}}function Zn(){try{localStorage.setItem(Xo,JSON.stringify({val:ge}))}catch{}}function qc(e){return ge[e]}function Vu(){return 2**(qc("gammaStrength")-1)}const es=[];function Yu(e){return es.push(e),()=>{const t=es.indexOf(e);t>=0&&es.splice(t,1)}}function ts(){for(const e of es)e();ae()}function Ya(e){const t=Ve[e];if(t.options){const n=t.options.indexOf(ge[e]);return n>=0?n:0}return Math.round((ge[e]-t.min)/(t.max-t.min)*100)}function Qc(e,t){const n=Ve[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function yo(e){const t=Ve[e],n=ge[e];return t.options&&t.options.length===2&&t.options[1]===1?n>=1?"вкл":"выкл":e==="toneMapping"?Kc[Ci.indexOf(n)]??n.toFixed(t.decimals):n.toFixed(t.decimals)}const Zc=[512,1024,2048,4096],Pe={cascades:{label:"Каскадов",def:2,min:1,max:4,decimals:0,options:[1,2,3,4]},distribution:{label:"Раскладка каскадов",def:.7,min:0,max:1,decimals:2},blend:{label:"Бесшовность каскадов",def:.12,min:0,max:.3,decimals:2},distance:{label:"Дальность теней",def:320,min:50,max:500,decimals:0},resolution:{label:"Разрешение атласа",def:4096,min:0,max:3,decimals:0,options:Zc},bias:{label:"Смещение тени",def:0,min:0,max:1,decimals:2},normalBias:{label:"Смещение по нормали",def:0,min:0,max:.5,decimals:2}},ct=Object.keys(Pe),qo="blendars.shadows.v1",oe={};el();tl();function el(){for(const e of ct)oe[e]=Pe[e].def}function tl(){try{const e=localStorage.getItem(qo);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of ct){const a=Pe[o],r=s?.[o];if(!(typeof r!="number"||!Number.isFinite(r))){if(a.options){const u=a.options[r]===r?r:a.options.indexOf(r);u>=0&&u<a.options.length&&(oe[o]=Number(a.options[u]));continue}oe[o]=Math.min(a.max,Math.max(a.min,r))}}}catch{}}function Ht(){try{localStorage.setItem(qo,JSON.stringify({val:oe}))}catch{}}function Ku(e){return oe[e]}const ns=[];function Ju(e){return ns.push(e),()=>{const t=ns.indexOf(e);t>=0&&ns.splice(t,1)}}function vn(){for(const e of ns)e();ae()}function xo(e,t){const n=Pe[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function nl(e,t){const n=Pe[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function _o(e){const t=Pe[e];return e==="distance"?`${Math.round(oe[e])} м`:oe[e].toFixed(t.decimals)}const Ye={bloom:{label:"Ореол (bloom)",def:.05,min:0,max:.1,decimals:3},bloomBlur:{label:"Мягкость ореола",def:8,min:1,max:16,decimals:0,options:[1,2,4,8,16]},bloomThreshold:{label:"Порог ореола",def:.6,min:0,max:2,decimals:2},vignette:{label:"Виньетка",def:0,min:0,max:1,decimals:2},vignetteInner:{label:"Виньетка: начало",def:0,min:0,max:1,decimals:2},vignetteOuter:{label:"Виньетка: край",def:1.25,min:.5,max:2,decimals:2},vignetteCurvature:{label:"Виньетка: кромка",def:.5,min:.2,max:1,decimals:2},taa:{label:"Временное сглаживание",def:0,min:0,max:1,decimals:0,options:[0,1]},taaJitter:{label:"Сглаживание: джиттер",def:0,min:0,max:1,decimals:2},dof:{label:"Глубина резкости",def:1,min:0,max:1,decimals:0,options:[0,1]},dofFocus:{label:"Фокус (м)",def:1,min:1,max:60,decimals:1},dofRange:{label:"Зона фокуса (м)",def:40,min:1,max:40,decimals:1},dofRadius:{label:"Сила размытия",def:1,min:1,max:8,decimals:1},dofNear:{label:"Размывать передний план",def:1,min:0,max:1,decimals:0,options:[0,1]},grading:{label:"Цветокоррекция",def:1,min:0,max:1,decimals:0,options:[0,1]},brightness:{label:"Яркость",def:1,min:.5,max:1.5,decimals:2},contrast:{label:"Контраст",def:1,min:.5,max:1.5,decimals:2},saturation:{label:"Насыщенность",def:1,min:0,max:2,decimals:2},fringing:{label:"Аберрация",def:0,min:0,max:100,decimals:0},sharpness:{label:"Резкость",def:0,min:0,max:1,decimals:2}},lt=Object.keys(Ye),Qo="blendars.postfx.v1",Zo="blendars.postfx.on",X={},Ni=!0;let Ke=Ni;sl();ol();function sl(){for(const e of lt)X[e]=Ye[e].def;Ke=Ni}function ol(){try{const e=localStorage.getItem(Qo);if(e){const n=JSON.parse(e);if(n&&typeof n=="object"){const s=n,o=typeof s.val=="object"&&s.val!==null?s.val:null;for(const a of lt){const r=Ye[a],d=o?.[a];typeof d=="number"&&Number.isFinite(d)&&(X[a]=Math.min(r.max,Math.max(r.min,d)))}}}const t=localStorage.getItem(Zo);t!==null&&(Ke=t!=="0")}catch{}}function Ge(){try{localStorage.setItem(Qo,JSON.stringify({val:X})),localStorage.setItem(Zo,Ke?"1":"0")}catch{}}function vo(e){return X[e]}function Wn(){return Ke}function wo(e){Ke!==e&&(Ke=e,Ge(),rt())}const ea="blendars.hud.v1";let Ut=!0,dt=1280;const Se=[],Po=["fps","cpu","draw","vram"],al={fps:"Частота кадра (FPS и мс)",cpu:"Загрузка CPU (обновление / рендер / физика)",draw:"Вызовы отрисовки и шейдеры",vram:"Видеопамять и разрешение"};let Gt={fps:!0,cpu:!0,draw:!0,vram:!0};function il(){try{const e=localStorage.getItem(ea);if(!e)return;const t=JSON.parse(e);if(t&&typeof t=="object"){const n=t.on;if(n&&typeof n=="object"){const s=n.stats;typeof s=="number"&&(Ut=s!==0);const o=n.record;(o===1280||o===1920||o==="window")&&(dt=o);const a=n.touch;typeof a=="number"&&(En=a!==0)}}}catch{}}const ta="blendars.stats.v1";function rl(){try{const e=localStorage.getItem(ta);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s={...Gt};for(const o of Po){const a=n[o];typeof a=="boolean"&&(s[o]=a)}Gt=s}catch{}}function cl(){try{localStorage.setItem(ta,JSON.stringify(Gt))}catch{}}function na(){try{localStorage.setItem(ea,JSON.stringify({on:{stats:Ut?1:0,record:dt,touch:En?1:0}}))}catch{}}function rs(){return Ut}function Li(e){if(Ut!==e){Ut=e,na();for(const t of Se)t();ae()}}function Ne(e){return Gt[e]}function ll(e){return al[e]}function dl(e,t){if(Gt[e]!==t){Gt[e]=t,cl();for(const n of Se)n();ae()}}function ul(){return dt}function Mo(e){if(!(e!==1280&&e!==1920&&e!=="window")&&dt!==e){dt=e,na();for(const t of Se)t();ae()}}function ml(e){const t=dt==="window"?e:dt;return!Number.isFinite(t)||t<=0?1280:Math.round(t)}function Ai(e){return Se.push(e),()=>{const t=Se.indexOf(e);t>=0&&Se.splice(t,1)}}let pl="full";function fl(){return pl}let En=!0;function hl(){return En}function bl(e){if(En!==e){En=e,na();for(const t of Se)t();ae()}}const Ri="blendars.touch.v1";let Sn=1,kn=1,Cn="split",Nn=!1;function gl(){try{const e=localStorage.getItem(Ri);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t;typeof n.scale=="number"&&n.scale>=.6&&n.scale<=2&&(Sn=n.scale),typeof n.opacity=="number"&&n.opacity>=.25&&n.opacity<=1&&(kn=n.opacity),(n.layout==="split"||n.layout==="left"||n.layout==="right")&&(Cn=n.layout),typeof n.swap=="boolean"&&(Nn=n.swap)}catch{}}function gs(){try{localStorage.setItem(Ri,JSON.stringify({scale:Sn,opacity:kn,layout:Cn,swap:Nn}))}catch{}}function yl(){return Sn}function xl(e){const t=Math.min(Math.max(e,.6),2);if(Sn!==t){Sn=t,gs();for(const n of Se)n();ae()}}function _l(){return kn}function vl(e){const t=Math.min(Math.max(e,.25),1);if(kn!==t){kn=t,gs();for(const n of Se)n();ae()}}function wl(){return Cn}function El(e){if(Cn!==e){Cn=e,gs();for(const t of Se)t();ae()}}function Sl(){return Nn}function kl(e){if(Nn!==e){Nn=e,gs();for(const t of Se)t();ae()}}il();rl();gl();const ss=[];function Xu(e){return ss.push(e),()=>{const t=ss.indexOf(e);t>=0&&ss.splice(t,1)}}function rt(){for(const e of ss)e();ae()}function Ka(e,t){const n=Ye[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function Cl(e,t){const n=Ye[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function Eo(e){const t=X[e],n=Ye[e];return n.options&&n.options.length===2&&n.options[1]===1?t>=1?"вкл":"выкл":t.toFixed(n.decimals)}Nl();Vc();function Nl(){try{const e=localStorage.getItem(Yo)??localStorage.getItem(Ko);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:n,o=typeof n.vol=="object"&&n.vol!==null?n.vol:null;for(const a of Object.keys(ki)){const r=s[a];typeof r=="boolean"&&(Ae[a]=r);const d=o?.[a];typeof d=="number"&&Number.isFinite(d)&&(Ee[a]=Math.min(1,Math.max(0,d)))}}catch{}}function cs(){try{localStorage.setItem(Yo,JSON.stringify({on:Ae,vol:Ee})),localStorage.removeItem(Ko)}catch{}}function Ll(e){return Ae[e]?Ee[e]:0}function qu(e){return Ee[e]}function Qu(e,t){const n=Math.min(1,Math.max(0,t));Ee[e]!==n&&(Ee[e]=n,cs(),ae())}const Al=`@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JSON.stringify(ri)}) format('truetype');
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
`;function zt(){return{version:1,physics:{on:{...ce},val:{...fe}},lighting:{val:{...ge}},shadows:{val:{...oe}},postfx:{on:Ke,val:{...X}},sound:{on:{...Ae},vol:{...Ee}},hud:{on:{stats:Ut,record:dt}},graphics:{val:{scale:Wt,fps:Vt,msaa:ut}},recording:{val:{fps:Yt,quality:Kt,keyFrame:Jt,sound:Xt}}}}function Ja(){return{on:{...ce},val:{...fe}}}function Rl(){const e={},t={};for(const n of Re)e[n]=!0,t[n]=Te[n].def;return{on:e,val:t}}let Io=!1;function Tl(){return Io}function Dt(e){const t=[];if(!e||typeof e!="object")return{applied:t};Io=!0;try{return Ml(e,t)}finally{Io=!1}}function Xa(e){let t=!1;for(const n of Object.keys(e.on))if(Re.includes(n)){const s=e.on[n];s!==void 0&&(ce[n]=s,t=!0)}for(const n of Object.keys(e.val))if(Re.includes(n)){const s=Te[n];if(s&&typeof s.min=="number"&&typeof s.max=="number"){const o=e.val[n];typeof o=="number"&&(fe[n]=Math.min(s.max,Math.max(s.min,o)),t=!0)}}t&&(Ot(),Bt())}function Pl(e){if(!e||typeof e!="object")return null;const t=e,n={},s={};let o=!1;if(t.on&&typeof t.on=="object")for(const[a,r]of Object.entries(t.on))typeof r=="boolean"&&(n[a]=r,o=!0);if(t.val&&typeof t.val=="object")for(const[a,r]of Object.entries(t.val))typeof r=="number"&&Number.isFinite(r)&&(s[a]=r,o=!0);return o?{on:n,val:s}:null}function Ml(e,t){const n=e,s=(_,C,c)=>typeof _=="number"&&Number.isFinite(_)?Math.min(c,Math.max(C,_)):null,o=_=>_&&typeof _=="object"?_:null,a=_=>_&&typeof _=="object"?_:null,r=_=>_&&typeof _=="object"?_:null,d=n.physics&&typeof n.physics=="object"?n.physics:null;if(d){const _=a(d.on),C=o(d.val);let c=!1;for(const E of Re){const k=Te[E];_&&typeof _[E]=="boolean"&&(ce[E]=_[E],c=!0);const w=C?s(C[E],k.min,k.max):null;w!==null&&(fe[E]=w,c=!0)}c&&(Ot(),Bt(),t.push("физика"))}const u=o(n.lighting&&typeof n.lighting=="object"?n.lighting.val:null);if(u){let _=!1;for(const C of jt){const c=Ve[C],E=s(u[C],c.min,c.max);E!==null&&(ge[C]=E,_=!0)}_&&(Zn(),ts(),t.push("свет"))}const f=o(n.shadows&&typeof n.shadows=="object"?n.shadows.val:null);if(f){let _=!1;for(const C of ct){const c=Pe[C],E=f[C];if(c.options){const T=c.options[E]===E?E:c.options.indexOf(E);T>=0&&T<c.options.length&&(oe[C]=Number(c.options[T]),_=!0);continue}const k=s(E,c.min,c.max);k!==null&&(oe[C]=k,_=!0)}_&&(Ht(),vn(),t.push("тени"))}const p=n.postfx&&typeof n.postfx=="object"?n.postfx:null;if(p){let _=!1;typeof p.on=="boolean"&&(Ke=p.on,_=!0);const C=o(p.val);if(C)for(const c of lt){const E=Ye[c],k=C[c];if(E.options){const T=E.options.indexOf(k);T>=0&&T<E.options.length&&(X[c]=Number(E.options[T]),_=!0);continue}const w=s(k,E.min,E.max);w!==null&&(X[c]=w,_=!0)}_&&(Ge(),rt(),t.push("Post FX"))}const g=n.sound&&typeof n.sound=="object"?n.sound:null;if(g){const _=a(g.on),C=o(g.vol);let c=!1;for(const E of Si){_&&typeof _[E]=="boolean"&&(Ae[E]=_[E],c=!0);const k=C?s(C[E],0,1):null;k!==null&&(Ee[E]=k,c=!0)}c&&(cs(),t.push("звук"))}const v=n.hud&&typeof n.hud=="object"?n.hud:null,y=v&&typeof v.on=="object"?v.on:null;if(y&&typeof y.stats=="boolean"){Li(y.stats);const _=y.record;(_===1280||_===1920||_==="window")&&Mo(_),t.push("интерфейс")}const h=r(n.graphics&&typeof n.graphics=="object"?n.graphics.val:null);if(h){let _=!1;const C=h.scale;(C===.5||C===.75||C===1)&&(aa(C),_=!0);const c=h.fps;(c===0||c===30||c===60||c===120)&&(ia(c),_=!0),typeof h.msaa=="boolean"&&(Ln(h.msaa),_=!0),X.taa>0&&ut&&(Ln(!1),_=!0),_&&(In(),ys(),t.push("графика"))}const x=r(n.recording&&typeof n.recording=="object"?n.recording.val:null);if(x){let _=!1;const C=x.fps;(C===24||C===30||C===60)&&(Di(C),_=!0);const c=x.quality;(c==="low"||c==="medium"||c==="high")&&(ji(c),_=!0);const E=x.keyFrame;(E===1||E===2||E===4)&&(Hi(E),_=!0),typeof x.sound=="boolean"&&(zi(x.sound),_=!0),_&&($n(),Fn(),t.push("запись"))}return{applied:t}}const sa="blendars.graphics.v1";let Wt=1,Vt=0,ut=!0;const oa="blendars.gfx-preset.v1",Il={phone:{label:"Телефон",graphics:{scale:.5,fps:30,msaa:!1},shadows:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3},postfxOn:!1,postfx:{bloom:0,vignette:0,fringing:0,sharpness:0,grading:0,taa:0,taaJitter:0}},balanced:{label:"Оптимальный",graphics:{scale:.75,fps:60,msaa:!0},shadows:{cascades:2,distribution:.7,blend:.12,distance:220,resolution:2048,bias:.7,normalBias:.4},postfxOn:!0,postfx:{bloom:.04,bloomBlur:8,bloomThreshold:.6,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.5,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:.25}},ultra:{label:"Ультра",graphics:{scale:1,fps:0,msaa:!0},shadows:{cascades:4,distribution:.7,blend:.12,distance:320,resolution:4096,bias:1,normalBias:.5},postfxOn:!0,postfx:{bloom:.06,bloomBlur:8,bloomThreshold:0,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:1,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:.25}}};let Mn="phone";function $l(){const e=window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window,n=navigator.hardwareConcurrency??4,s=navigator.deviceMemory??4,o=Math.min(window.screen.width,window.screen.height)<768;return(e||t)&&(n<=4||s<=4||o)}function Fl(){return Mn}function Ti(){try{localStorage.setItem(oa,Mn)}catch{}}function Ol(){try{const e=localStorage.getItem(oa);(e==="phone"||e==="balanced"||e==="ultra")&&(Mn=e)}catch{}}function Pi(e){const t=Il[e];Mn=e,Ti(),aa(t.graphics.scale),ia(t.graphics.fps);const n=t.postfx.taa??0;Ln(n>0?!1:t.graphics.msaa);for(const s of ct)oe[s]=t.shadows[s]??Pe[s].def;Ht(),vn(),Ke=t.postfxOn;for(const s of lt){const o=t.postfx[s];typeof o=="number"&&(X[s]=o)}Ge(),rt()}const os=[];function Bl(){try{const e=localStorage.getItem(sa);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.scale===.5||s.scale===.75||s.scale===1)&&(Wt=s.scale),(s.fps===0||s.fps===30||s.fps===60||s.fps===120)&&(Vt=s.fps),typeof s.msaa=="boolean"&&(ut=s.msaa)}catch{}}function In(){try{localStorage.setItem(sa,JSON.stringify({val:{scale:Wt,fps:Vt,msaa:ut}}))}catch{}}function ys(){for(const e of os)e();ae()}function Mi(){return Wt}function Ii(){return Vt}function gt(){return ut}const Dl=4;function Zu(){return ut?Dl:1}function aa(e){Wt!==e&&(Wt=e,In(),ys())}function ia(e){Vt!==e&&(Vt=e,In(),ys())}function Ln(e){ut!==e&&(ut=e,In(),ys())}function $i(e){return os.push(e),()=>{const t=os.indexOf(e);t>=0&&os.splice(t,1)}}Bl();Ol();const ra="blendars.recording.v1";let Yt=30,Kt="high",Jt=2,Xt=!0;const jl=[];function Hl(){try{const e=localStorage.getItem(ra);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.fps===24||s.fps===30||s.fps===60)&&(Yt=s.fps),(s.quality==="low"||s.quality==="medium"||s.quality==="high")&&(Kt=s.quality),(s.keyFrame===1||s.keyFrame===2||s.keyFrame===4)&&(Jt=s.keyFrame),typeof s.sound=="boolean"&&(Xt=s.sound)}catch{}}function $n(){try{localStorage.setItem(ra,JSON.stringify({val:{fps:Yt,quality:Kt,keyFrame:Jt,sound:Xt}}))}catch{}}function Fn(){for(const e of jl)e();ae()}function Fi(){return Yt}function Oi(){return Kt}function Bi(){return Jt}function $o(){return Xt}function Di(e){Yt!==e&&(Yt=e,$n(),Fn())}function ji(e){Kt!==e&&(Kt=e,$n(),Fn())}function Hi(e){Jt!==e&&(Jt=e,$n(),Fn())}function zi(e){Xt!==e&&(Xt=e,$n(),Fn())}Hl();function zl(){const e=dc();if(e){const u=Dt(e.data);u.applied.length>0&&console.info(`[settings] применён пресет «${e.name}»: ${u.applied.join(", ")}`);return}let t=!1;try{t=!!(localStorage.getItem(Yo)??localStorage.getItem(Ko)??localStorage.getItem(Jo)??localStorage.getItem(Xo)??localStorage.getItem(qo)??localStorage.getItem(Qo)??localStorage.getItem(Zo)??localStorage.getItem(ea)??localStorage.getItem(ta)??localStorage.getItem(sa)??localStorage.getItem(ra)??localStorage.getItem(oa))}catch{t=!0}if(t)return;const n=$l();Mn=n?"phone":"ultra",Ti(),In(),Ht(),Ge();const o=zt();Pi("balanced");const a=zt();Dt(n?rc:ic);const r=zt();Dt(o),$t("По умолчанию",o),$t("Оптимальный",a),$t(n?"Телефон":"Ультра",r);const d=Ao().find(u=>u.name===(n?"Телефон":"Ультра"));Ro(d?d.id:null),console.info(`[settings] сохранённых настроек нет — созданы пресеты «По умолчанию», «Оптимальный», «${n?"Телефон":"Ультра"}» (активен «${n?"Телефон":"Ультра"}»)`)}zl();function Ul(){const e=document.createElement("div");e.className="settings",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Настройки");const t=document.createElement("style");t.textContent=Al;const n=document.createElement("div");n.className="settings__panel";const s=document.createElement("h2");s.className="settings__title",s.textContent="Настройки";const o=document.createElement("p");o.className="settings__hint",o.textContent="Галочка — эффект включён, ползунок — его громкость. Выбор сохраняется в браузере и действует сразу.",o.id="settings-hint",e.setAttribute("aria-describedby",o.id);const a=document.createElement("div");a.className="settings__tabs",a.setAttribute("role","tablist");const r=document.createElement("button");r.className="settings__tab settings__tab--on",r.type="button",r.textContent="Звук",r.setAttribute("role","tab"),r.setAttribute("aria-selected","true");const d=document.createElement("button");d.className="settings__tab",d.type="button",d.textContent="Физика",d.setAttribute("role","tab"),d.setAttribute("aria-selected","false");const u=document.createElement("button");u.className="settings__tab",u.type="button",u.textContent="Освещение",u.setAttribute("role","tab"),u.setAttribute("aria-selected","false");const f=document.createElement("button");f.className="settings__tab",f.type="button",f.textContent="Тени",f.setAttribute("role","tab"),f.setAttribute("aria-selected","false");const p=document.createElement("button");p.className="settings__tab",p.type="button",p.textContent="Post FX",p.setAttribute("role","tab"),p.setAttribute("aria-selected","false");const g=document.createElement("button");g.className="settings__tab",g.type="button",g.textContent="Интерфейс",g.setAttribute("role","tab"),g.setAttribute("aria-selected","false");const v=document.createElement("button");v.className="settings__tab",v.type="button",v.textContent="Управление",v.setAttribute("role","tab"),v.setAttribute("aria-selected","false");const y=document.createElement("button");y.className="settings__tab",y.type="button",y.textContent="Камера",y.setAttribute("role","tab"),y.setAttribute("aria-selected","false");const h=document.createElement("button");h.className="settings__tab",h.type="button",h.textContent="Пресеты",h.setAttribute("role","tab"),h.setAttribute("aria-selected","false");const x=document.createElement("button");x.className="settings__tab",x.type="button",x.textContent="Графика",x.setAttribute("role","tab"),x.setAttribute("aria-selected","false");const _=document.createElement("button");_.className="settings__tab",_.type="button",_.textContent="Запись",_.setAttribute("role","tab"),_.setAttribute("aria-selected","false"),a.append(r,d,u,f,p,g,v,y,x,_,h);const C=i=>{const l=[r,d,u,f,p,g,v,y,x,_,h];for(let m=0;m<l.length;m++){const L=l[m];if(!L)continue;const O=m===i;L.classList.toggle("settings__tab--on",O),L.setAttribute("aria-selected",String(O))}c.hidden=i!==0,w.hidden=i!==1,ft.hidden=i!==2,ht.hidden=i!==3,Ze.hidden=i!==4,et.hidden=i!==5,Ce.hidden=i!==6,St.hidden=i!==7,Lt.hidden=i!==8,bt.hidden=i!==9,Tt.hidden=i!==10,i===7&&cn()};r.addEventListener("click",()=>C(0)),d.addEventListener("click",()=>C(1)),u.addEventListener("click",()=>C(2)),f.addEventListener("click",()=>C(3)),p.addEventListener("click",()=>C(4)),g.addEventListener("click",()=>C(5)),v.addEventListener("click",()=>C(6)),y.addEventListener("click",()=>C(7)),x.addEventListener("click",()=>C(8)),_.addEventListener("click",()=>C(9)),h.addEventListener("click",()=>C(10));const c=document.createElement("div");c.className="settings__pane",c.append(o);const E=document.createElement("div");E.className="settings__list";const k={};for(const[i,l]of Ei){const m=document.createElement("div");m.className="settings__row";const L=document.createElement("label");L.className="settings__head";const O=document.createElement("span");O.textContent=l;const M=document.createElement("input");M.type="checkbox",M.checked=Ae[i],L.append(O,M);const N=document.createElement("div");N.className="settings__vol",N.classList.toggle("settings__vol--off",!Ae[i]);const R=document.createElement("input");R.type="range",R.min="0",R.max="100",R.step="1",R.value=String(Math.round(Ee[i]*100)),R.setAttribute("aria-label",`Громкость: ${l}`);const A=document.createElement("output");A.className="settings__pct",A.textContent=`${R.value}%`,R.addEventListener("input",()=>{Ee[i]=Number(R.value)/100,A.textContent=`${R.value}%`,cs(),ae()}),N.append(R,A),M.addEventListener("change",()=>{Ae[i]=M.checked,N.classList.toggle("settings__vol--off",!M.checked),cs(),ae()}),k[i]=()=>{M.checked=Ae[i],N.classList.toggle("settings__vol--off",!Ae[i]),R.value=String(Math.round(Ee[i]*100)),A.textContent=`${R.value}%`},m.append(L,N),E.append(m)}c.append(E);const w=document.createElement("div");w.className="settings__pane",w.hidden=!0;const T=document.createElement("div");T.className="physics-tabs";const I=document.createElement("button");I.className="physics-tab physics-tab--on",I.type="button",I.textContent="Тонкая настройка",I.setAttribute("role","tab"),I.setAttribute("aria-selected","true");const S=document.createElement("button");S.className="physics-tab",S.type="button",S.textContent="Пресеты физики",S.setAttribute("role","tab"),S.setAttribute("aria-selected","false"),T.append(I,S),w.append(T);const b=document.createElement("div");b.className="settings__block";const P=document.createElement("div");P.className="settings__block",w.append(b,P);const D=document.createElement("p");D.className="settings__hint",D.textContent="Галка включает тюнинг «против скольжения»; выключена — исходное поведение игры.",b.append(D);const F=document.createElement("div");F.className="settings__list",b.append(F);const j=i=>{const l=i==="fine";I.classList.toggle("physics-tab--on",l),S.classList.toggle("physics-tab--on",!l),I.setAttribute("aria-selected",String(l)),S.setAttribute("aria-selected",String(!l)),b.hidden=!l,P.hidden=l};I.addEventListener("click",()=>j("fine")),S.addEventListener("click",()=>j("presets"));let $=()=>{};const U=document.createElement("p");U.className="settings__status",U.setAttribute("role","status");const le=i=>{const l=Rl();let m=0;for(const L of Object.keys(i.val)){if(!(L in l.val))continue;const O=i.val[L];typeof O=="number"&&(l.val[L]=O,m++)}Xa(l),ja(null),$(),Y(),U.textContent=`Машина «${i.name}»: задано ${m} параметров, остальные — по умолчанию.`},he=i=>{const l=Pl(i.data);if(!l){U.textContent=`В пресете «${i.name}» нет настроек физики.`;return}Xa(l),ja(i.id),$(),Y(),U.textContent=`Применён пресет «${i.name}».`},re=(i,l)=>{const m=document.createElement("div");m.className="settings__presetsection";const L=document.createElement("p");return L.className="settings__presettitle",L.textContent=i,m.append(L,l),m},ye=document.createElement("div");ye.className="settings__presets";for(const i of cc){const l=document.createElement("div");l.className="settings__preset";const m=document.createElement("div");m.className="settings__presetinfo";const L=document.createElement("span");L.className="settings__presetname",L.textContent=i.name;const O=document.createElement("span");O.className="settings__presetmeta",O.textContent=i.note,m.append(L,O);const M=document.createElement("button");M.className="settings__presetbtn",M.type="button",M.textContent="Применить",M.setAttribute("aria-label",`Применить пресет «${i.name}»`),M.addEventListener("click",()=>le(i)),l.append(m,M),ye.append(l)}const V=document.createElement("div");V.className="settings__presets";const q=i=>i>0?Ft(new Date(i)):"дата неизвестна",Y=()=>{V.replaceChildren();const i=Ba(),l=Da();if(i.length===0){const m=document.createElement("p");m.className="settings__presetempty",m.textContent="Своих пресетов нет: настройте физику и нажмите «Сохранить».",V.append(m);return}for(const m of i){const L=document.createElement("div");L.className="settings__preset";const O=m.id===l;O&&L.classList.add("settings__preset--active");const M=document.createElement("div");M.className="settings__presetinfo";const N=document.createElement("span");N.className="settings__presetname",N.textContent=m.name;const R=document.createElement("span");R.className="settings__presetmeta",R.textContent=q(m.created),M.append(N,R);const A=document.createElement("button");A.className="settings__presetbtn",A.type="button",A.textContent="Применить",A.disabled=O,A.setAttribute("aria-label",`Применить пресет физики «${m.name}»`),A.addEventListener("click",()=>he(m));const B=document.createElement("button");B.className="settings__presetbtn",B.type="button",B.textContent="✎",B.title="Переименовать",B.setAttribute("aria-label",`Переименовать пресет ${m.name}`),B.addEventListener("click",()=>{const H=document.createElement("input");H.className="settings__presetnameinput",H.type="text",H.value=m.name,N.replaceWith(H),H.focus(),H.select();const st=()=>{_c(m.id,H.value),Y()};H.addEventListener("keydown",ve=>{ve.key==="Enter"&&st(),ve.key==="Escape"&&(ve.stopPropagation(),Y())}),H.addEventListener("blur",st)});const G=document.createElement("button");G.className="settings__presetbtn",G.type="button",G.textContent="↓",G.title="Экспорт в файл",G.setAttribute("aria-label",`Экспорт пресета ${m.name} в файл`),G.addEventListener("click",()=>kc(m));const z=document.createElement("button");z.className="settings__presetbtn settings__presetbtn--danger",z.type="button",z.textContent="✕",z.title="Удалить",z.setAttribute("aria-label",`Удалить пресет физики «${m.name}»`),z.addEventListener("click",()=>{window.confirm(`Удалить пресет физики «${m.name}»?`)&&(wc(m.id),Y(),U.textContent=`Пресет «${m.name}» удалён.`)}),L.append(M,A,B,G,z),V.append(L)}},J=document.createElement("div");J.className="settings__presetnamefield";const K=document.createElement("input");K.type="text",K.value=Ft(),K.placeholder="Название пресета",K.setAttribute("aria-label","Название нового пресета физики");const Q=document.createElement("button");Q.className="settings__presetbtn",Q.type="button",Q.textContent="Сохранить",Q.addEventListener("click",()=>{const i=xc(K.value||Ft(),Ja());K.value=Ft(),Y(),U.textContent=`Сохранён пресет «${i.name}».`}),J.append(K,Q);const de=document.createElement("button");de.className="settings__resetall",de.type="button",de.textContent="Обновить активный пресет",de.addEventListener("click",()=>{const i=Da();if(!i){U.textContent="Активного пресета нет — сохраните новый.";return}vc(i,Ja()),Y(),U.textContent="Текущие настройки записаны в активный пресет."});const ne=document.createElement("button");ne.className="settings__resetall",ne.type="button",ne.textContent="Импорт из файла";const ue=document.createElement("input");ue.type="file",ue.accept="application/json,.json",ue.hidden=!0,ne.addEventListener("click",()=>ue.click()),ue.addEventListener("change",()=>{const i=ue.files?.[0];ue.value="",i&&(async()=>{try{const l=Nc(await i.text());if(!l){U.textContent="Это не файл пресета физики.";return}const m=Sc(l.items);Y(),U.textContent=m===0?"Такие пресеты уже есть.":`Импортировано пресетов: ${m}.`}catch(l){U.textContent=`Не удалось прочитать файл: ${l instanceof Error?l.message:"ошибка чтения"}`}})()});const ke=document.createElement("button");ke.className="settings__resetall",ke.type="button",ke.textContent="Экспорт всех в файл",ke.addEventListener("click",()=>{const i=Ba();if(i.length===0){U.textContent="Экспортировать нечего: пресетов нет.";return}Cc(i),U.textContent=`Выгружено пресетов: ${i.length}.`});const en=document.createElement("button");en.className="settings__resetall",en.type="button",en.textContent="Убрать все пресеты",en.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты физики? Настройки останутся как есть.")&&(Ec(),Y(),U.textContent="Пресеты удалены, текущие настройки не тронуты.")}),P.append(re("Встроенные машины",ye),re("Свои пресеты",V),J,de,ne,ke,en,ue,U),Y(),j("fine");const On={};for(const i of Re){const l=Te[i],m=document.createElement("div");m.className="settings__row";const L=document.createElement("label");L.className="settings__head";const O=document.createElement("span");O.textContent=l.label;const M=document.createElement("input");M.type="checkbox",M.checked=ce[i],L.append(O,M);const N=document.createElement("div");N.className="settings__vol",N.classList.toggle("settings__vol--off",!ce[i]);const R=document.createElement("input");R.type="range",R.min="0",R.max="100",R.step="1",R.value=String(Math.round((fe[i]-l.min)/(l.max-l.min)*100)),R.setAttribute("aria-label",`Значение: ${l.label}`);const A=document.createElement("output");A.className="settings__pct settings__pct--val",A.textContent=go(i);const B=document.createElement("button");B.className="settings__reset",B.type="button",B.textContent="↺",B.title="Сбросить по умолчанию",B.setAttribute("aria-label",`Сбросить по умолчанию: ${l.label}`);const G=()=>{M.checked=ce[i],N.classList.toggle("settings__vol--off",!ce[i]),R.value=String(Math.round((fe[i]-l.min)/(l.max-l.min)*100)),A.textContent=go(i)};On[i]=G,R.addEventListener("input",()=>{const z=l.min+(l.max-l.min)*(Number(R.value)/100);fe[i]=Number(z.toFixed(l.decimals)),A.textContent=go(i),Ot(),Bt()}),M.addEventListener("change",()=>{ce[i]=M.checked,N.classList.toggle("settings__vol--off",!M.checked),Ot(),Bt()}),B.addEventListener("click",()=>{ce[i]=!0,fe[i]=l.def,G(),Ot(),Bt()}),N.append(R,A,B),m.append(L,N),F.append(m)}$=()=>{for(const i of Re)On[i]?.()};const tn=document.createElement("button");tn.className="settings__resetall",tn.type="button",tn.textContent="Сбросить все настройки физики",tn.addEventListener("click",()=>{for(const i of Re)ce[i]=!0,fe[i]=Te[i].def,On[i]?.();Ot(),Bt()}),w.append(tn);const St=document.createElement("div");St.className="settings__pane",St.hidden=!0;const xs=document.createElement("div");xs.className="physics-tabs";const Me=document.createElement("button");Me.className="physics-tab physics-tab--on",Me.type="button",Me.textContent="Ракурс",Me.setAttribute("role","tab"),Me.setAttribute("aria-selected","true");const Ie=document.createElement("button");Ie.className="physics-tab",Ie.type="button",Ie.textContent="Пресеты камеры",Ie.setAttribute("role","tab"),Ie.setAttribute("aria-selected","false"),xs.append(Me,Ie),St.append(xs);const pt=document.createElement("div");pt.className="settings__block";const Bn=document.createElement("div");Bn.className="settings__block",St.append(pt,Bn);const Dn=(i,l)=>{const m=Va[i];return`${i==="zoom"?l.toFixed(2):String(Number(l.toFixed(2)))}${m.unit}`},_s=document.createElement("p");_s.className="settings__hint",pt.append(_s);const vs=document.createElement("div");vs.className="settings__list";const ma={};for(const i of To){const l=Va[i],m=document.createElement("div");m.className="settings__row";const L=document.createElement("div");L.className="settings__head";const O=document.createElement("span");O.textContent=l.label,L.append(O);const M=document.createElement("div");M.className="settings__vol";const N=document.createElement("input");N.type="range",N.min=String(l.min),N.max=String(l.max),N.step=String(l.step),N.value=String(be[i]),N.setAttribute("aria-label",`Ракурс: ${l.label}`);const R=document.createElement("output");R.className="settings__pct settings__pct--val",R.textContent=Dn(i,be[i]);const A=document.createElement("button");A.className="settings__reset",A.type="button",A.textContent="↺",A.title="Сбросить по умолчанию",A.setAttribute("aria-label",`Сбросить по умолчанию: ${l.label}`),N.addEventListener("input",()=>{const B=Number(N.value);ot()?.write({[i]:B}),R.textContent=Dn(i,B)}),A.addEventListener("click",()=>{ot()?.write({[i]:be[i]}),N.value=String(be[i]),R.textContent=Dn(i,be[i])}),ma[i]={slider:N,reset:A,out:R},M.append(N,R,A),m.append(L,M),vs.append(m)}pt.append(vs);const ws=document.createElement("div");ws.className="settings__shoulder";const Es=[],pa=i=>{for(let l=0;l<bo.length;l++)Es[l]?.classList.toggle("settings__presetbtn--on",bo[l]?.[0]===i)};for(const[i,l]of bo){const m=document.createElement("button");m.className="settings__presetbtn",m.type="button",m.textContent=l,m.setAttribute("aria-label",`Плечо камеры: ${l}`),m.addEventListener("click",()=>{ot()?.write({shoulder:i}),pa(i)}),Es.push(m),ws.append(m)}pt.append(ws);const kt=document.createElement("button");kt.className="settings__resetall",kt.type="button",kt.textContent="Сбросить вид (C)",kt.addEventListener("click",()=>{ot()?.reset(),cn()}),pt.append(kt);const Z=document.createElement("p");Z.className="settings__status",Z.setAttribute("role","status");const nn=document.createElement("div");nn.className="settings__presets";const ur=i=>i>0?xt(new Date(i)):"дата неизвестна",mr=i=>{const l=Uc(i.data);if(!l){Z.textContent=`В пресете «${i.name}» нет ракурса камеры.`;return}const m=ot();if(!m){Z.textContent="Камера живёт в сцене: войдите в заезд, чтобы применить ракурс.";return}m.write({...l}),Pc(i.id),cn(),$e(),Z.textContent=`Применён ракурс «${i.name}».`},$e=()=>{nn.replaceChildren();const i=Ua(),l=Ga();if(i.length===0){const m=document.createElement("p");m.className="settings__presetempty",m.textContent="Своих пресетов нет: войдите в заезд, выставьте ракурс и нажмите «Сохранить».",nn.append(m);return}for(const m of i){const L=document.createElement("div");L.className="settings__preset";const O=m.id===l;O&&L.classList.add("settings__preset--active");const M=document.createElement("div");M.className="settings__presetinfo";const N=document.createElement("span");N.className="settings__presetname",N.textContent=m.name;const R=document.createElement("span");R.className="settings__presetmeta",R.textContent=ur(m.created),M.append(N,R);const A=document.createElement("button");A.className="settings__presetbtn",A.type="button",A.textContent="Применить",A.disabled=O,A.setAttribute("aria-label",`Применить ракурс «${m.name}»`),A.addEventListener("click",()=>mr(m));const B=document.createElement("button");B.className="settings__presetbtn",B.type="button",B.textContent="✎",B.title="Переименовать",B.setAttribute("aria-label",`Переименовать пресет ${m.name}`),B.addEventListener("click",()=>{const H=document.createElement("input");H.className="settings__presetnameinput",H.type="text",H.value=m.name,N.replaceWith(H),H.focus(),H.select();const st=()=>{Ic(m.id,H.value),$e()};H.addEventListener("keydown",ve=>{ve.key==="Enter"&&st(),ve.key==="Escape"&&(ve.stopPropagation(),$e())}),H.addEventListener("blur",st)});const G=document.createElement("button");G.className="settings__presetbtn",G.type="button",G.textContent="↓",G.title="Экспорт в файл",G.setAttribute("aria-label",`Экспорт пресета ${m.name} в файл`),G.addEventListener("click",()=>Dc(m));const z=document.createElement("button");z.className="settings__presetbtn settings__presetbtn--danger",z.type="button",z.textContent="✕",z.title="Удалить",z.setAttribute("aria-label",`Удалить пресет камеры «${m.name}»`),z.addEventListener("click",()=>{window.confirm(`Удалить пресет камеры «${m.name}»?`)&&(Fc(m.id),$e(),Z.textContent=`Пресет «${m.name}» удалён.`)}),L.append(M,A,B,G,z),nn.append(L)}},Ss=document.createElement("div");Ss.className="settings__presetnamefield";const Fe=document.createElement("input");Fe.type="text",Fe.value=xt(),Fe.placeholder="Название пресета",Fe.setAttribute("aria-label","Название нового пресета камеры");const Ct=document.createElement("button");Ct.className="settings__presetbtn",Ct.type="button",Ct.textContent="Сохранить",Ct.addEventListener("click",()=>{const i=ot();if(!i){Z.textContent="Ракурс снимается со сцены: сначала войдите в заезд.";return}const l=Mc(Fe.value||xt(),{...i.read()});Fe.value=xt(),$e(),Z.textContent=`Сохранён пресет «${l.name}».`}),Ss.append(Fe,Ct);const sn=document.createElement("button");sn.className="settings__resetall",sn.type="button",sn.textContent="Обновить активный пресет",sn.addEventListener("click",()=>{const i=Ga();if(!i){Z.textContent="Активного пресета нет — сохраните новый.";return}const l=ot();if(!l){Z.textContent="Ракурс снимается со сцены: сначала войдите в заезд.";return}$c(i,{...l.read()}),$e(),Z.textContent="Текущий ракурс записан в активный пресет."});const on=document.createElement("button");on.className="settings__resetall",on.type="button",on.textContent="Импорт из файла";const Qe=document.createElement("input");Qe.type="file",Qe.accept="application/json,.json",Qe.hidden=!0,on.addEventListener("click",()=>Qe.click()),Qe.addEventListener("change",()=>{const i=Qe.files?.[0];Qe.value="",i&&(async()=>{try{const l=Hc(await i.text());if(!l){Z.textContent="Это не файл пресетов камеры.";return}const m=Bc(l.items);$e(),Z.textContent=m===0?"Такие пресеты уже есть.":`Импортировано пресетов: ${m}.`}catch(l){Z.textContent=`Не удалось прочитать файл: ${l instanceof Error?l.message:"ошибка чтения"}`}})()});const an=document.createElement("button");an.className="settings__resetall",an.type="button",an.textContent="Экспорт всех в файл",an.addEventListener("click",()=>{const i=Ua();if(i.length===0){Z.textContent="Экспортировать нечего: пресетов нет.";return}jc(i),Z.textContent=`Выгружено пресетов: ${i.length}.`});const rn=document.createElement("button");rn.className="settings__resetall",rn.type="button",rn.textContent="Убрать все пресеты",rn.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты камеры? Ракурс останется как есть.")&&(Oc(),$e(),Z.textContent="Пресеты удалены, текущий ракурс не тронут.")}),Bn.append(re("Свои пресеты",nn),Ss,sn,on,an,rn,Qe,Z);const cn=()=>{const i=ot(),l=i!==null,m=i?i.read():{...be};_s.textContent=l?"Ракурс меняется живьём. Тяните сцену мышью или пальцем (влево — экран влево), колесо или щипок — расстояние, C — сброс.":"Камера живёт в сцене машины: войдите в заезд, и здесь появятся её числа.";for(const L of To){const O=ma[L];if(!O)continue;const M=m[L];O.slider.value=String(M),O.slider.disabled=!l,O.reset.disabled=!l,O.out.textContent=Dn(L,M)}for(const L of Es)L.disabled=!l;pa(m.shoulder),kt.disabled=!l,Ct.disabled=!l,Fe.disabled=!l},ks=i=>{const l=i==="view";Me.classList.toggle("physics-tab--on",l),Ie.classList.toggle("physics-tab--on",!l),Me.setAttribute("aria-selected",String(l)),Ie.setAttribute("aria-selected",String(!l)),pt.hidden=!l,Bn.hidden=l};Me.addEventListener("click",()=>ks("view")),Ie.addEventListener("click",()=>ks("presets")),$e(),ks("view"),cn();const ft=document.createElement("div");ft.className="settings__pane",ft.hidden=!0;const Cs=document.createElement("p");Cs.className="settings__hint",Cs.textContent="Ползунок — уровень света (слева от центра — студия, к правому краю — ярче), ↺ — сброс строки. Свет главного экрана меняется сразу и запоминается. «Гамма-коррекция» — аппаратная (движок держит её как вкл/выкл), а «Сила гаммы» — непрерывный подъём полутонов поверх неё: 1 — как есть, каждый шаг вверх удваивает свет.",ft.append(Cs);const Ns=document.createElement("div");Ns.className="settings__list";const Ls={};for(const i of jt){const l=Ve[i],m=document.createElement("div");m.className="settings__row";const L=document.createElement("div");L.className="settings__head";const O=document.createElement("span");O.textContent=l.label,L.append(O);const M=document.createElement("div");M.className="settings__vol";const N=document.createElement("input");N.type="range",N.min="0",N.max="100",N.step="1",l.options&&(N.max=String(l.options.length-1)),N.value=String(Ya(i)),N.setAttribute("aria-label",`Освещение: ${l.label}`);const R=document.createElement("output");R.className="settings__pct settings__pct--val",R.textContent=yo(i);const A=document.createElement("button");A.className="settings__reset",A.type="button",A.textContent="↺",A.title="Сбросить по умолчанию",A.setAttribute("aria-label",`Сбросить по умолчанию: ${l.label}`);const B=()=>{N.value=String(Ya(i)),R.textContent=yo(i)};Ls[i]=B,N.addEventListener("input",()=>{ge[i]=Qc(i,Number(N.value)),R.textContent=yo(i),Zn(),ts()}),A.addEventListener("click",()=>{ge[i]=l.def,B(),Zn(),ts()}),M.append(N,R,A),m.append(L,M),Ns.append(m)}ft.append(Ns);const ln=document.createElement("button");ln.className="settings__resetall",ln.type="button",ln.textContent="Сбросить все настройки освещения",ln.addEventListener("click",()=>{for(const i of jt)ge[i]=Ve[i].def,Ls[i]?.();Zn(),ts()}),ft.append(ln);const ht=document.createElement("div");ht.className="settings__pane",ht.hidden=!0;const As=document.createElement("p");As.className="settings__hint",As.textContent="Каскады разбивают дальность теней на несколько карт: у ближней детализация выше, поэтому машина отбрасывает резкую тень даже вдали. Один каскад — одна карта на всю дальность. Меняется сразу, даже в заезде.",ht.append(As);const Rs=document.createElement("div");Rs.className="settings__list";const jn={};for(const i of ct){const l=Pe[i],m=document.createElement("div");m.className="settings__row";const L=document.createElement("div");L.className="settings__head";const O=document.createElement("span");O.textContent=l.label,L.append(O);const M=document.createElement("div");M.className="settings__vol";const N=document.createElement("input");N.type="range",N.min="0",N.max="100",N.step="1",l.options&&(N.max=String(l.options.length-1)),N.value=String(xo(i,oe[i])),N.setAttribute("aria-label",`Тени: ${l.label}`);const R=document.createElement("output");R.className="settings__pct settings__pct--val",R.textContent=_o(i);const A=document.createElement("button");A.className="settings__reset",A.type="button",A.textContent="↺",A.title="Сбросить по умолчанию",A.setAttribute("aria-label",`Сбросить по умолчанию: ${l.label}`);const B=()=>{N.value=String(xo(i,oe[i])),R.textContent=_o(i)};jn[i]=B,N.addEventListener("input",()=>{oe[i]=nl(i,Number(N.value)),R.textContent=_o(i),Ht(),vn()}),A.addEventListener("click",()=>{oe[i]=l.def,B(),Ht(),vn()}),M.append(N,R,A),m.append(L,M),Rs.append(m)}ht.append(Rs);const dn=document.createElement("button");dn.className="settings__resetall",dn.type="button",dn.textContent="Сбросить все настройки теней",dn.addEventListener("click",()=>{for(const i of ct)oe[i]=Pe[i].def,jn[i]?.();Ht(),vn()}),ht.append(dn);const Ze=document.createElement("div");Ze.className="settings__pane",Ze.hidden=!0;const Ts=document.createElement("p");Ts.className="settings__hint",Ts.textContent="Пост-обработка кадра: ореол вокруг солнца, виньетка, резкость, цветокоррекция и глубина резкости. Главный переключатель снимает всю обработку разом, а TAA включается на вкладке «Графика» — там ему и место, рядом с MSAA. Здесь у него остался только джиттер.",Ze.append(Ts);const Ps=document.createElement("div");Ps.className="settings__row";const Ms=document.createElement("label");Ms.className="settings__head";const fa=document.createElement("span");fa.textContent="Пост-обработка включена";const Oe=document.createElement("input");Oe.type="checkbox",Oe.checked=Wn(),Ms.append(fa,Oe),Oe.addEventListener("change",()=>wo(Oe.checked)),Ps.append(Ms),Ze.append(Ps);const Is=document.createElement("div");Is.className="settings__list";const un={};for(const i of lt){if(i==="taa")continue;const l=Ye[i],m=document.createElement("div");m.className="settings__row";const L=document.createElement("div");L.className="settings__head";const O=document.createElement("span");O.textContent=l.label,L.append(O);const M=document.createElement("div");M.className="settings__vol";const N=document.createElement("input");N.type="range",N.min="0",N.max="100",N.step="1",l.options&&(N.max=String(l.options.length-1)),N.value=String(Ka(i,X[i])),N.setAttribute("aria-label",`Post FX: ${l.label}`);const R=document.createElement("output");R.className="settings__pct settings__pct--val",R.textContent=Eo(i);const A=document.createElement("button");A.className="settings__reset",A.type="button",A.textContent="↺",A.title="Сбросить по умолчанию",A.setAttribute("aria-label",`Сбросить по умолчанию: ${l.label}`);const B=()=>{N.value=String(Ka(i,X[i])),R.textContent=Eo(i)};un[i]=B,N.addEventListener("input",()=>{X[i]=Cl(i,Number(N.value)),R.textContent=Eo(i),Ge(),rt()}),A.addEventListener("click",()=>{X[i]=l.def,B(),Ge(),rt()}),M.append(N,R,A),m.append(L,M),Is.append(m)}Ze.append(Is);const mn=document.createElement("button");mn.className="settings__resetall",mn.type="button",mn.textContent="Сбросить все настройки Post FX",mn.addEventListener("click",()=>{for(const i of lt)X[i]=Ye[i].def,un[i]?.();Oe.checked=!0,wo(!0),Ge(),rt(),At()}),Ze.append(mn);const et=document.createElement("div");et.className="settings__pane",et.hidden=!0;const $s=document.createElement("p");$s.className="settings__hint",$s.textContent="Служебные элементы поверх игры. Счётчик кадра живёт в левом верхнем углу на всех экранах; ниже выбирается, из каких строк он состоит.",et.append($s);const Fs=document.createElement("div");Fs.className="settings__row";const Os=document.createElement("label");Os.className="settings__head";const ha=document.createElement("span");ha.textContent="Статистика кадра";const Nt=document.createElement("input");Nt.type="checkbox",Nt.checked=rs(),Os.append(ha,Nt),Nt.addEventListener("change",()=>Li(Nt.checked)),Fs.append(Os),et.append(Fs);const Bs=document.createElement("p");Bs.className="settings__hint",Bs.textContent="Строки счётчика кадра. Если снять все, панель останется пустой плашкой — обновление текста всё равно стоит кадра, поэтому лишние строки лучше не держать включёнными без нужды.",et.append(Bs);const Ds=document.createElement("div");Ds.className="settings__row settings__row--stack";const ba={};for(const i of Po){const l=document.createElement("label");l.className="settings__check";const m=document.createElement("input");m.type="checkbox",m.checked=Ne(i);const L=document.createElement("span");L.textContent=ll(i),m.addEventListener("change",()=>dl(i,m.checked)),ba[i]=m,l.append(m,L),Ds.append(l)}et.append(Ds);const Ce=document.createElement("div");Ce.className="settings__pane",Ce.hidden=!0;const js=document.createElement("p");js.className="settings__hint",js.textContent="Сенсорное управление появляется только на устройствах с тач-экраном. Галочка прячет педали совсем; ниже — размер, прозрачность, расположение и схема кнопок. Всё сохраняется в браузере и действует сразу.",Ce.append(js);const Hs=document.createElement("div");Hs.className="settings__row";const zs=document.createElement("label");zs.className="settings__head";const ga=document.createElement("span");ga.textContent="Сенсорное управление";const pn=document.createElement("input");pn.type="checkbox",pn.checked=hl(),zs.append(ga,pn),pn.addEventListener("change",()=>bl(pn.checked)),Hs.append(zs),Ce.append(Hs);const Us=document.createElement("div");Us.className="settings__row";const Gs=document.createElement("label");Gs.className="settings__head";const ya=document.createElement("span");ya.textContent="Размер кнопок",Gs.append(ya);const Ws=document.createElement("div");Ws.className="settings__vol";const xe=document.createElement("input");xe.type="range",xe.min="60",xe.max="200",xe.step="5",xe.value=String(Math.round(yl()*100)),xe.setAttribute("aria-label","Размер сенсорных кнопок");const Hn=document.createElement("output");Hn.className="settings__pct",Hn.textContent=`${xe.value}%`,xe.addEventListener("input",()=>{xl(Number(xe.value)/100),Hn.textContent=`${xe.value}%`}),Ws.append(xe,Hn),Us.append(Gs,Ws),Ce.append(Us);const Vs=document.createElement("div");Vs.className="settings__row";const Ys=document.createElement("label");Ys.className="settings__head";const xa=document.createElement("span");xa.textContent="Прозрачность",Ys.append(xa);const Ks=document.createElement("div");Ks.className="settings__vol";const _e=document.createElement("input");_e.type="range",_e.min="25",_e.max="100",_e.step="5",_e.value=String(Math.round(_l()*100)),_e.setAttribute("aria-label","Прозрачность сенсорных кнопок");const zn=document.createElement("output");zn.className="settings__pct",zn.textContent=`${_e.value}%`,_e.addEventListener("input",()=>{vl(Number(_e.value)/100),zn.textContent=`${_e.value}%`}),Ks.append(_e,zn),Vs.append(Ys,Ks),Ce.append(Vs);const Lt=document.createElement("div");Lt.className="settings__pane",Lt.hidden=!0;const Js=document.createElement("div");Js.className="settings__backend";const Xs=document.createElement("p");Xs.className="settings__hint",Xs.textContent="Масштаб рендера уменьшает число пикселей, которые движок рисует за кадр: картинка мыльнее, но кадры стабильнее. Лимит кадров держит потолок частоты — помогает на ноутбуках от батареи. MSAA применяется при запуске: после его включения страницу нужно перезагрузить. TAA включается живьём и сглаживает всю сцену — его параметры (джиттер, резкость) задаёт выбранный пресет графики.",Lt.append(Xs);const Be=(i,l,m,L)=>{const O=document.createElement("div");O.className="settings__row";const M=document.createElement("div");M.className="settings__head";const N=document.createElement("span");N.textContent=i,M.append(N);const R=document.createElement("div");R.className="settings__vol",R.style.flexWrap="wrap";const A=[];for(const[G,z]of l){const H=document.createElement("button");H.className="settings__resetall",H.type="button",H.style.marginTop="0",H.style.flex="1 1 auto",H.style.textTransform="none",H.textContent=z,H.addEventListener("click",()=>{L(G),B()}),A.push(H),R.append(H)}const B=()=>{const G=m();for(let z=0;z<l.length;z++)A[z]?.toggleAttribute("disabled",l[z]?.[0]===G)};return B(),O.append(M,R),{row:O,refresh:B}},pr=Be("Расположение",[["split","По краям"],["left","Слева"],["right","Справа"]],()=>wl(),i=>{(i==="split"||i==="left"||i==="right")&&El(i)});Ce.append(pr.row);const fr=Be("Кнопки крестовины",[["normal","▲ газ, ▼ тормоз"],["swap","▲ тормоз, ▼ газ"]],()=>Sl()?"swap":"normal",i=>{kl(i==="swap")});Ce.append(fr.row);const qs=Be("Масштаб рендера",[["0.5","50 %"],["0.75","75 %"],["1","100 %"]],()=>String(Mi()),i=>{const l=Number(i);(l===.5||l===.75||l===1)&&aa(l)}),Qs=Be("Лимит кадров",[["0","Выкл"],["30","30 fps"],["60","60 fps"],["120","120 fps"]],()=>String(Ii()),i=>{const l=Number(i);(l===0||l===30||l===60||l===120)&&ia(l)}),Zs=document.createElement("div");Zs.className="settings__row";const eo=document.createElement("label");eo.className="settings__head";const _a=document.createElement("span");_a.textContent="Сглаживание MSAA";const De=document.createElement("input");De.type="checkbox",De.checked=gt(),eo.append(_a,De);const Un=document.createElement("span");Un.className="settings__pct";const fn=()=>{De.checked=gt(),Un.textContent=gt()?"сцена — сразу, интерфейс — после перезагрузки":""};fn(),De.addEventListener("change",()=>{Ln(De.checked),De.checked&&vo("taa")>0&&(X.taa=0,Ge(),rt()),fn(),At()}),Zs.append(eo,Un);const to=document.createElement("div");to.className="settings__row";const no=document.createElement("label");no.className="settings__head";const va=document.createElement("span");va.textContent="Временное сглаживание TAA";const je=document.createElement("input");je.type="checkbox",je.checked=vo("taa")>0,no.append(va,je);const so=document.createElement("span");so.className="settings__pct";const hr=.1,br=.5,At=()=>{const i=vo("taa")>0;je.checked=i,so.textContent=i?"работает сразу":"включит пост-обработку"};At(),je.addEventListener("change",()=>{X.taa=je.checked?1:0,je.checked&&!Wn()&&(wo(!0),Oe.checked=!0),je.checked&&X.taaJitter<hr&&(X.taaJitter=br,un.taaJitter?.()),je.checked&&gt()&&(Ln(!1),fn()),Ge(),rt(),At()}),to.append(no,so);const oo=Be("Пресет графики",[["phone","Телефон"],["balanced","Оптимальный"],["ultra","Ультра"]],()=>Fl(),i=>{if(!(i!=="phone"&&i!=="balanced"&&i!=="ultra")){Pi(i),qs.refresh(),Qs.refresh(),oo.refresh(),De.checked=gt(),Un.textContent=gt()?"применится после перезагрузки":"",fn(),At();for(const l of ct)jn[l]?.();for(const l of lt)un[l]?.();Oe.checked=Wn()}}),ao=document.createElement("p");ao.className="settings__hint",ao.textContent="Рендер: WebGL2 работает везде, WebGPU даёт больше эффектов, но на части телефонов подвисает на первом кадре. Смена бэкенда пересобирает движок и перезагружает сцену.",Lt.append(ao,Js,oo.row,qs.row,Qs.row,Zs,to);const bt=document.createElement("div");bt.className="settings__pane",bt.hidden=!0;const io=document.createElement("p");io.className="settings__hint",io.textContent="Разрешение и частота записи — насколько дорого кодировать. Качество кодека — насколько жирный файл: чем выше, тем чётче картинка и тем сильнее просядет игра во время записи. Всё применяется к следующему нажатию «Запись».",bt.append(io);const ro=document.createElement("div");ro.className="settings__recordslot",bt.append(ro);const co=document.createElement("div");co.className="settings__row";const lo=document.createElement("label");lo.className="settings__head";const wa=document.createElement("span");wa.textContent="Звук в файле";const Rt=document.createElement("input");Rt.type="checkbox",Rt.checked=$o(),lo.append(wa,Rt),Rt.addEventListener("change",()=>zi(Rt.checked)),co.append(lo);const Ea=Be("Разрешение",[["1280","720p"],["1920","1080p"],["window","Как на экране"]],()=>String(ul()),i=>{if(i==="window"){Mo("window");return}(i==="1280"||i==="1920")&&Mo(Number(i))}),Sa=Be("Частота записи",[["24","24 fps"],["30","30 fps"],["60","60 fps"]],()=>String(Fi()),i=>{const l=Number(i);(l===24||l===30||l===60)&&Di(l)}),ka=Be("Качество кодека",[["low","Низкое"],["medium","Среднее"],["high","Высокое"]],()=>Oi(),i=>{(i==="low"||i==="medium"||i==="high")&&ji(i)}),Ca=Be("Ключевой кадр",[["1","1 с"],["2","2 с"],["4","4 с"]],()=>String(Bi()),i=>{const l=Number(i);(l===1||l===2||l===4)&&Hi(l)});bt.append(co,Ea.row,Sa.row,ka.row,Ca.row);const Tt=document.createElement("div");Tt.className="settings__pane",Tt.hidden=!0;const uo=document.createElement("p");uo.className="settings__hint",uo.textContent="Пресет — это все настройки разом: физика, свет, тени, Post FX, звук и интерфейс. Активный пресет применяется при запуске и одинаково работает во всех сценах. Имя нового пресета — дата и время до минуты.",Tt.append(uo);const me=document.createElement("p");me.className="settings__status",me.setAttribute("role","status"),me.textContent="";const mo=document.createElement("div");mo.className="settings__presetnamefield";const He=document.createElement("input");He.type="text",He.value=yt(),He.placeholder="Название пресета",He.setAttribute("aria-label","Название нового пресета");const hn=document.createElement("button");hn.className="settings__presetbtn",hn.type="button",hn.textContent="Сохранить",mo.append(He,hn);const gr=document.createElement("div");gr.className="settings__row";const bn=document.createElement("button");bn.className="settings__resetall",bn.type="button",bn.textContent="Обновить активный пресет",bn.addEventListener("click",()=>{const i=is();if(!i){me.textContent="Активного пресета нет — сохраните новый.";return}pi(i,zt()),me.textContent="Текущие настройки записаны в активный пресет.",nt()});const gn=document.createElement("button");gn.className="settings__resetall",gn.type="button",gn.textContent="Импорт из файла";const tt=document.createElement("input");tt.type="file",tt.accept="application/json,.json",tt.hidden=!0,gn.addEventListener("click",()=>tt.click()),tt.addEventListener("change",()=>{const i=tt.files?.[0];tt.value="",i&&(async()=>{try{const l=hc(await i.text());if(!l){me.textContent="Это не файл настроек игры.";return}const m=Dt(l.data);if(m.applied.length===0){me.textContent="В файле нет знакомых настроек.";return}const L=$t(l.name??i.name.replace(/\.json$/i,""),l.data,l.created??Date.now());Ro(L.id),po(),nt(),He.value=yt(),me.textContent=`Импортировано «${L.name}»: ${m.applied.join(", ")}`}catch(l){me.textContent=`Не удалось прочитать файл: ${l instanceof Error?l.message:"ошибка чтения"}`}})()});const yn=document.createElement("button");yn.className="settings__resetall",yn.type="button",yn.textContent="Убрать все пресеты",yn.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты? Настройки останутся как есть.")&&(pc(),po(),nt(),me.textContent="Пресеты удалены, текущие настройки не тронуты.")});const xn=document.createElement("div");xn.className="settings__presets";const po=()=>{for(const i of Re)On[i]?.();for(const i of jt)Ls[i]?.();for(const i of ct)jn[i]?.();for(const i of lt)un[i]?.();for(const i of Si)k[i]?.();Oe.checked=Wn(),Nt.checked=rs();for(const i of Po){const l=ba[i];l&&(l.checked=Ne(i))}De.checked=gt(),fn(),At(),qs.refresh(),Qs.refresh(),oo.refresh(),Ea.refresh(),Sa.refresh(),ka.refresh(),Ca.refresh(),Rt.checked=$o()},yr=(i,l)=>{const m=Ao().find(O=>O.id===i);if(!m)return;const L=Dt(m.data);Ro(i),po(),me.textContent=L.applied.length>0?`Применён пресет «${l}»: ${L.applied.join(", ")}`:`В пресете «${l}» нет знакомых настроек.`},Na=i=>i>0?yt(new Date(i)):"дата неизвестна",nt=()=>{xn.replaceChildren();const i=Ao(),l=is();if(i.length===0){const m=document.createElement("p");m.className="settings__presetempty",m.textContent="Пресетов пока нет. Настройте всё как надо и нажмите «Сохранить».",xn.append(m);return}for(const m of i){const L=document.createElement("div");L.className="settings__preset";const O=m.id===l;O&&L.classList.add("settings__preset--active");const M=document.createElement("div");M.className="settings__presetinfo";const N=document.createElement("span");N.className="settings__presetname",N.textContent=m.name;const R=document.createElement("span");R.className="settings__presetmeta",R.textContent=O?`${Na(m.created)} · активен`:Na(m.created),M.append(N,R);const A=document.createElement("button");A.className="settings__presetbtn",A.type="button",A.textContent="✎",A.title="Переименовать",A.setAttribute("aria-label",`Переименовать пресет ${m.name}`),A.addEventListener("click",()=>{const H=document.createElement("input");H.className="settings__presetnameinput",H.type="text",H.value=m.name,N.replaceWith(H),H.focus(),H.select();const st=()=>{uc(m.id,H.value),nt()};H.addEventListener("keydown",ve=>{ve.key==="Enter"&&st(),ve.key==="Escape"&&(ve.stopPropagation(),nt())}),H.addEventListener("blur",st)});const B=document.createElement("button");B.className="settings__presetbtn",B.type="button",B.textContent="Применить",B.disabled=O,B.addEventListener("click",()=>yr(m.id,m.name));const G=document.createElement("button");G.className="settings__presetbtn",G.type="button",G.textContent="↓",G.title="Экспорт в файл",G.setAttribute("aria-label",`Экспорт пресета ${m.name} в файл`),G.addEventListener("click",()=>fc(m));const z=document.createElement("button");z.className="settings__presetbtn settings__presetbtn--danger",z.type="button",z.textContent="✕",z.title="Удалить",z.setAttribute("aria-label",`Удалить пресет ${m.name}`),z.addEventListener("click",()=>{window.confirm(`Удалить пресет «${m.name}»?`)&&(mc(m.id),nt(),me.textContent=`Пресет «${m.name}» удалён.`)}),L.append(M,B,A,G,z),xn.append(L)}};hn.addEventListener("click",()=>{const i=$t(He.value||yt(),zt());He.value=yt(),nt(),me.textContent=`Сохранён пресет «${i.name}».`}),Tt.append(mo,xn,bn,gn,yn,tt,me),nt();const fo=document.createElement("div");fo.className="settings__scroll",fo.append(c,w,ft,ht,Ze,et,Ce,St,Lt,bt,Tt),n.append(s,a,fo),e.append(t,n),document.body.append(e);function xr(){e.hidden=!1,He.value=yt(),Fe.value=xt(),cn()}function _r(){e.hidden=!0}return{root:e,backendSlot:Js,recordSlot:ro,open:xr,close:_r}}const Gl=300;function Wl(e={}){let t=0,n=!1;const s=()=>{const d=is();if(!d){n||(n=!0,e.onNoPreset?.());return}const u=zt();if(!pi(d,u))return;n=!1;const f=is();f&&e.onSaved?.(f)},a=Yc(()=>{Tl()||(window.clearTimeout(t),t=window.setTimeout(s,Gl))}),r=()=>{t!==0&&(window.clearTimeout(t),t=0,s())};return document.addEventListener("visibilitychange",r),window.addEventListener("pagehide",r),{flush(){t!==0&&(window.clearTimeout(t),t=0,s())},destroy(){window.clearTimeout(t),t=0,a(),document.removeEventListener("visibilitychange",r),window.removeEventListener("pagehide",r)}}}const Vl="https://vk.ru/H360ru";function Yl(){const e=document.createElement("div"),t=document.createElement("p");t.className="dlg__empty",t.textContent="Описание игры скоро появится. Пока сюда можно поставить правила, список техники и ссылку на сервер.";const n=document.createElement("a");n.className="dlg__link",n.href=Vl,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Группа игры во «ВКонтакте»",e.append(t,n);const s=bs({title:"Об игре",body:e});return{dialog:s,open(){s.open()},destroy(){s.destroy()}}}const Kl=[{hash:"42d487b",date:"2026-10-09",subject:"Камера: вкладка в настройках с ракурсом и пресетами, кнопка ракурсов убрана из topbar"},{hash:"7372f41",date:"2026-10-09",subject:"Прочность машины: панель на 5 ячеек, сильный удар свыше 50 км/ч, GAME OVER и возврат в меню"},{hash:"e4af8a4",date:"2026-10-09",subject:"UI: вкладка физики, таймер под компасом, уведомления чекпоинтов, тач-жесты"},{hash:"0069c44",date:"2026-10-09",subject:"CI: upload-pages-artifact v5 вместо v3 — под Node 24 артефакт github-pages не создавался"},{hash:"9e7421c",date:"2026-10-09",subject:"Физика машины: сторож увязания, инерция по трём осям, пресеты 5 т и 4 т"},{hash:"709fad1",date:"2026-10-09",subject:"HUD в канвасе: слой под размер виджета вместо полноэкранной текстуры, обрезка полосы компаса"},{hash:"1d33c0a",date:"2026-10-09",subject:"Забег по чекпоинтам: таймер, карточка финиша, окно «Лидеры», личность ВК"},{hash:"e4e4244",date:"2026-10-09",subject:"up"},{hash:"b3964c6",date:"2026-10-09",subject:"Сглаживание: TAA на вкладке «Графика», починка MSAA, ПК-пресеты на MSAA"},{hash:"6f17f25",date:"2026-10-08",subject:"HUD в канвас, UI-аудиошина, Draco/KTX2-ассеты"},{hash:"ad022dc",date:"2026-10-08",subject:"Fix WGSL shader: declare material_diffuse and view_position uniforms in terrain-splat"},{hash:"a206a10",date:"2026-10-08",subject:"Rebuild dist with base /blend-ars/ (GitHub Pages)"},{hash:"15fdf63",date:"2026-10-08",subject:"Deploy built site from dist; path dist in Pages workflow"},{hash:"942a7cc",date:"2026-10-08",subject:"Remove project sources; keep .github and .gitignore"},{hash:"da0f40e",date:"2026-10-08",subject:"Create static.yml"},{hash:"2691051",date:"2026-10-08",subject:"Delete .github/workflows/static.yml"},{hash:"98c2349",date:"2026-10-08",subject:"Delete .github/workflows/npm-publish-github-packages.yml"},{hash:"3ce584f",date:"2026-10-08",subject:"Update static.yml"},{hash:"128f22b",date:"2026-10-03",subject:"Create npm-publish-github-packages.yml"},{hash:"c8e16ab",date:"2026-10-03",subject:"Create static.yml"},{hash:"5a46d53",date:"2026-10-03",subject:"feat(scene): выбор кузова грузовик/Maserati, Maserati в меню, откат WebGPU→WebGL2"},{hash:"5c65165",date:"2026-10-03",subject:"feat(menu): экран загрузки с прогрессом + процедурный 3D-фон меню"},{hash:"1faa7f1",date:"2026-10-03",subject:"test(stage-0): браузерная проверка рендера, smoke-сцена, иконки-заглушки"},{hash:"4f12113",date:"2026-10-03",subject:"feat(stage-0): bootstrap Vite + ленивый PlayCanvas + тулинг бюджетов"},{hash:"eb68f3c",date:"2026-10-03",subject:"docs: rewrite README for PlayCanvas/Colyseus web stack"},{hash:"34ff9ca",date:"2026-10-03",subject:"chore: remove legacy Godot+Nakama tree and web export"},{hash:"9018d77",date:"2026-10-02",subject:"Create FUNDING.yml"},{hash:"7f64ab1",date:"2026-09-30",subject:"Add files via upload"},{hash:"5b7ab23",date:"2026-09-30",subject:"Add files via upload"},{hash:"ebb8901",date:"2026-03-19",subject:"mv"},{hash:"3c3fc26",date:"2026-03-19",subject:"fix: обновлен .gitignore и удалены системные файлы"},{hash:"0e075c9",date:"2026-03-19",subject:"up"},{hash:"9309069",date:"2026-03-19",subject:"upd"},{hash:"b82f5bc",date:"2026-03-19",subject:"docs: оновлення правил проекту"},{hash:"a19f06e",date:"2026-03-19",subject:"up"},{hash:"45bb3b3",date:"2026-03-19",subject:"new rules by demiurgos 19_1"},{hash:"7519417",date:"2026-02-27",subject:"Update README.md"},{hash:"58a3447",date:"2026-02-27",subject:"**BLEND ARS: Initial Project Setup and Development Notice**"},{hash:"60a150e",date:"2026-02-27",subject:"upd"},{hash:"eae4946",date:"2026-02-27",subject:"Exclude addons folder from tracking"},{hash:"cfe0473",date:"2026-02-27",subject:"upd"},{hash:"94b5e5d",date:"2026-02-24",subject:"uikit up"},{hash:"17b03ea",date:"2026-02-24",subject:"mv"},{hash:"c8e9bf6",date:"2026-02-24",subject:"апдейт"},{hash:"48511ce",date:"2026-02-24",subject:"ui_kit"},{hash:"ad054cb",date:"2026-02-24",subject:"up"},{hash:"73e2c24",date:"2026-02-22",subject:"Update 00-core.md"},{hash:"8d20bc4",date:"2026-02-22",subject:"Create 05-ui-perf.md"},{hash:"cf17f7a",date:"2026-02-22",subject:"Update and rename 04-mcp-workflow.md to 04-ui-theme.md"},{hash:"93f52ae",date:"2026-02-22",subject:"Update and rename 03-gdscript-standards.md to 03-ui-core.md"}];function Jl(){const e=Kl;if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,o=s.hash,a=s.date,r=s.subject;typeof o!="string"||typeof r!="string"||t.push({hash:o,date:typeof a=="string"?a:"",subject:r})}return t}function Xl(){const e=Jl(),t=document.createElement("div");if(e.length===0){const s=document.createElement("p");s.className="dlg__empty",s.textContent="Журнал пока пуст: сборка сделана без истории git.",t.append(s)}else{const s=document.createElement("p");s.className="devlog__meta",s.textContent=`Последние ${e.length} изменений`;const o=document.createElement("ul");o.className="devlog__list";for(const a of e){const r=document.createElement("li");r.className="devlog__item";const d=document.createElement("span");d.className="devlog__hash",d.textContent=a.hash;const u=document.createElement("span");u.className="devlog__date",u.textContent=a.date;const f=document.createElement("span");f.className="devlog__subject",f.textContent=a.subject,r.append(d,u,f),o.append(r)}t.append(s,o)}const n=bs({title:"Журнал разработки",body:t});return{dialog:n,open(){n.open()},destroy(){n.destroy()}}}const Ui="blendars.race.board.v1",ql=200;let Mt=null;function Vn(e){return typeof e=="number"&&Number.isFinite(e)}function Ql(e){if(!Array.isArray(e))return[];const t=[];for(const n of e){if(t.length>=ql)break;if(typeof n!="object"||n===null)continue;const s=n;typeof s.uid!="string"||s.uid===""||typeof s.name=="string"&&(!Vn(s.bestMs)||s.bestMs<0||t.push({uid:s.uid,name:s.name,photo:typeof s.photo=="string"?s.photo:"",bestMs:s.bestMs,lastMs:Vn(s.lastMs)?s.lastMs:s.bestMs,runs:Vn(s.runs)&&s.runs>0?Math.floor(s.runs):1,updatedAt:Vn(s.updatedAt)?s.updatedAt:0}))}return t.sort(Gi)}function Gi(e,t){return e.bestMs!==t.bestMs?e.bestMs-t.bestMs:e.updatedAt!==t.updatedAt?e.updatedAt-t.updatedAt:e.uid<t.uid?-1:e.uid>t.uid?1:0}function Wi(){if(Mt!==null)return Mt;try{const e=localStorage.getItem(Ui);Mt=e===null?[]:Ql(JSON.parse(e))}catch(e){console.warn("[race] таблица недоступна, веду её в памяти",e),Mt=[]}return Mt}function Zl(e){Mt=e;try{localStorage.setItem(Ui,JSON.stringify(e))}catch(t){console.warn("[race] рекорд не сохранён на диск",t)}}function ed(){return Wi()}function td(e){const t=Wi(),n=t.findIndex(f=>f.uid===e.uid),s=n>=0?t[n]:void 0,o=s?.bestMs??0,a=Math.max(0,Math.round(e.timeMs)),r={uid:e.uid,name:e.name,photo:e.photo,bestMs:s===void 0?a:Math.min(s.bestMs,a),lastMs:a,runs:(s?.runs??0)+1,updatedAt:Date.now()},d=t.slice();n>=0?d[n]=r:d.push(r),d.sort(Gi),Zl(d);const u=d.findIndex(f=>f.uid===e.uid);return{rank:u>=0?u+1:d.length,total:d.length,bestMs:r.bestMs,improved:s===void 0||a<o,previousBestMs:o,board:d}}function nd(e,t){const n={state:"idle",startMs:0,lastMs:0,collected:0,total:t.total},s=()=>{if(n.state==="finished"||n.state==="aborted"||(n.state==="idle"&&(n.state="running",n.startMs=performance.now(),e.fire("race:started",n.total)),n.collected+=1,n.total<1||n.collected<n.total))return;n.state="finished",n.lastMs=Math.max(0,Math.round(performance.now()-n.startMs));const a={timeMs:n.lastMs,collected:n.collected,total:n.total};e.fire("race:finished",a),t.onFinished?.(a)};return e.on("checkpoint:visited",s),{view:n,abort:()=>{n.state==="finished"||n.state==="aborted"||(n.lastMs=n.state==="running"?Math.max(0,Math.round(performance.now()-n.startMs)):0,n.state="aborted",e.fire("race:aborted",n.collected))},destroy(){e.off("checkpoint:visited",s)}}}function qa(e){return e<10?`0${e}`:`${e}`}function An(e){const t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/10);return`${Math.floor(n/6e3)}:${qa(Math.floor(n/100)%60)}.${qa(n%100)}`}function em(e){return`${e<0?"−":"+"}${An(Math.abs(e))}`}const sd=`
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
`;function Vi(e,t,n,s){const o=Math.abs(e)%100,a=o%10;return o>=11&&o<=14?s:a===1?t:a>=2&&a<=4?n:s}function od(e,t,n,s,o,a){const r=document.createElement("li");r.className="leaders__row";const d=document.createElement("span");d.className="leaders__place",d.textContent=`${e}`;const u=document.createElement("span");if(u.className="leaders__who",n!==""){const h=document.createElement("img");h.className="leaders__face",h.src=n,h.alt="",h.loading="lazy",h.addEventListener("error",()=>h.remove()),u.append(h)}const f=document.createElement("span");f.className="leaders__text";const p=document.createElement("span");p.className="leaders__name",p.textContent=t;const g=document.createElement("span");g.className="leaders__about";const v=`${o} ${Vi(o,"заезд","заезда","заездов")}`;g.textContent=o>1&&a>s?`${v} · последний ${An(a)}`:v,f.append(p,g),u.append(f);const y=document.createElement("span");return y.className="leaders__time",y.textContent=An(s),r.append(d,u,y),r}function ad(e){e.textContent="";const t=ed();if(t.length===0){const a=document.createElement("p");a.className="dlg__empty",a.textContent="Заездов пока нет. Соберите все чекпоинты — результат попадёт в таблицу.",e.append(a);return}const n=document.createElement("p");n.className="leaders__meta",n.textContent=`${t.length} ${Vi(t.length,"игрок","игрока","игроков")} · лучшее время на игрока`;const s=document.createElement("ul");s.className="leaders__list";for(let a=0;a<t.length;a++){const r=t[a];r&&s.append(od(a+1,r.name,r.photo,r.bestMs,r.runs,r.lastMs))}const o=document.createElement("p");o.className="leaders__hint",o.textContent="Таблица — на этом устройстве: заезды других игроков в неё не попадают. Общий рейтинг появится, когда у игры будет сервер.",e.append(n,s,o)}function id(){if(!document.getElementById("leaders-style")){const n=document.createElement("style");n.id="leaders-style",n.textContent=sd,document.head.append(n)}const e=document.createElement("div"),t=bs({title:"Лидеры",body:e});return{dialog:t,open(){ad(e),t.open()},destroy(){t.destroy()}}}function Yn(e,t,n,s){const o=document.createElement("button");return o.className=e,o.type="button",o.style.setProperty("--tb-icon",`url(${JSON.stringify(t)})`),o.title=n,o.setAttribute("aria-label",n),o.addEventListener("pointerdown",a=>{a.preventDefault(),!o.disabled&&s()}),o}const rd=`
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
`;function cd(){const e=document.createElement("button");e.className="tb__btn",e.type="button";const t=()=>document.fullscreenElement!==null,n=()=>{const s=t(),o=s?Br:Or;e.style.setProperty("--tb-icon",`url(${JSON.stringify(o)})`);const a=s?"Выйти из полноэкранного режима":"Полноэкранный режим";e.title=a,e.setAttribute("aria-label",a),e.setAttribute("aria-pressed",s?"true":"false")};return e.addEventListener("pointerdown",s=>{s.preventDefault(),!e.disabled&&(t()?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{}))}),document.addEventListener("fullscreenchange",n),n(),{el:e,destroy(){document.removeEventListener("fullscreenchange",n)}}}async function ld(){return(await te(()=>import("./music-player.fvf_geO1.js"),__vite__mapDeps([0,1,2]))).createMusicPlayer()}function dd(e){const t=document.createElement("style");t.textContent=rd;const n=document.createElement("header");n.className="tb";const s=document.createElement("div");s.className="tb__slot",s.append(e.statsHost);const o=document.createElement("div");o.className="tb__center";const a=document.createElement("h1");a.className="tb__title",a.textContent=e.title,o.append(a);const r=document.createElement("div");r.className="tb__slot tb__slot--right";const d=document.createElement("div");d.className="tb__extra";const u=cd(),f=Yl(),p=Xl(),g=id(),v=document.createElement("button");v.className="tb__btn tb__btn--close",v.type="button",v.style.setProperty("--tb-icon",`url(${JSON.stringify(Jr)})`),v.title="Скрыть панель",v.setAttribute("aria-label","Скрыть панель");const y=document.createElement("span");y.className="tb__cap",y.innerHTML="Скрыть<br>панель",v.append(y),v.addEventListener("pointerdown",c=>{c.preventDefault(),!v.disabled&&e.onToggleChrome()});let h=null,x=null;const _=Yn("tb__btn",zr,"Музыка",()=>{const c=E=>{E.open(),e.windows.open("music")};if(x!==null){c(x);return}h??=ld(),h.then(E=>{x=E,e.windows.register({id:"music",root:E.dialog.root,show:()=>E.open(),hide:()=>E.dialog.close()}),c(E)}).catch(()=>{})});r.append(d,Yn("tb__btn",Hr,"Лидеры",()=>{g.open(),e.windows.open("leaders")}),Yn("tb__btn",jr,"Журнал разработки",()=>{p.open(),e.windows.open("devlog")}),Yn("tb__btn",Dr,"Об игре",()=>{f.open(),e.windows.open("about")}),_,v,u.el),s.classList.add("tb__slot--left"),n.append(t,s,o,r),e.windows.register({id:"leaders",root:g.dialog.root,show:()=>g.open(),hide:()=>g.dialog.close()}),e.windows.register({id:"about",root:f.dialog.root,show:()=>f.open(),hide:()=>f.dialog.close()}),e.windows.register({id:"devlog",root:p.dialog.root,show:()=>p.open(),hide:()=>p.dialog.close()});const C=[vt(n),vt(f.dialog.root),Xn(f.dialog.root),vt(p.dialog.root),Xn(p.dialog.root),vt(g.dialog.root),Xn(g.dialog.root)];return{root:n,setExtraButtons(c){d.append(c)},setBackButton(c){s.prepend(c)},setSceneMode(c){n.classList.toggle("tb--scene",c)},destroy(){u.destroy(),f.destroy(),p.destroy(),g.destroy();for(const c of C)c();x?.destroy(),n.remove()}}}const ud=`
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
`;function md(e={}){const t=document.createElement("style");t.textContent=ud;const n=document.createElement("div");n.className="win";const s=document.createElement("div");s.className="win__bar";const o=document.createElement("button");o.className="win__close",o.type="button",o.textContent="✕",o.title="Закрыть окно",o.setAttribute("aria-label","Закрыть окно"),s.append(o);const a=document.createElement("p");a.className="win__empty",a.textContent="",a.setAttribute("aria-hidden","true"),n.append(t,a),document.body.append(s);const r=new Map,d=[];let u=null,f=null;const p=()=>{for(const w of r.values()){const T=w.id===u;w.root.hidden=!T,T?w.show():w.hide()}n.classList.toggle("win--open",u!==null),s.classList.toggle("win--open",u!==null);for(const w of d)w();g()},g=()=>{const w=n.getBoundingClientRect();if(w.width<=0||w.height<=0)return;const T=document.documentElement.style;T.setProperty("--win-left",`${Math.round(w.left)}px`),T.setProperty("--win-top",`${Math.round(w.top)}px`),T.setProperty("--win-width",`${Math.round(w.width)}px`),T.setProperty("--win-height",`${Math.round(w.height)}px`)},v={root:n,closeBtn:o,register(w){r.set(w.id,w),w.hide(),w.root.hidden=!0},open(w){r.has(w)&&(u=w,f={x,y:_,until:performance.now()+c},p())},close(){u!==null&&(u=null,p())},toggle(w){u===w?v.close():v.open(w)},active(){return u},onChange(w){return d.push(w),()=>{const T=d.indexOf(w);T>=0&&d.splice(T,1)}},destroy:()=>{}};o.addEventListener("pointerdown",w=>{w.preventDefault(),v.close()});const y=new ResizeObserver(g);y.observe(n),window.addEventListener("resize",g),window.addEventListener("orientationchange",g),g();const h=w=>{w.key==="Escape"&&(u!==null?(w.stopPropagation(),v.close()):e.onEmptyEscape?.())};document.addEventListener("keydown",h);let x=0,_=0;const C=w=>{x=w.clientX,_=w.clientY},c=400,E=32,k=w=>{if(u===null)return;const T=r.get(u);if(!T||T.root.hidden)return;const I=w.target;if(!(I instanceof Element)||T.root.contains(I))return;const S=f;if(S!==null&&performance.now()<S.until){const D=w.clientX-S.x,F=w.clientY-S.y;if(D*D+F*F<=E*E)return}if(I.closest(".tb")!==null)return;const b=w.clientX-x,P=w.clientY-_;b*b+P*P>64||v.close()};return document.addEventListener("pointerdown",C,!0),document.addEventListener("click",k),v.destroy=()=>{y.disconnect(),window.removeEventListener("resize",g),window.removeEventListener("orientationchange",g),document.removeEventListener("keydown",h),document.removeEventListener("pointerdown",C,!0),document.removeEventListener("click",k),s.remove();const w=document.documentElement.style;w.removeProperty("--win-left"),w.removeProperty("--win-top"),w.removeProperty("--win-width"),w.removeProperty("--win-height")},v}const pd=`
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
    src: url(${JSON.stringify(ri)}) format('truetype');
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
`,fd={idle:"",starting:"готовлю…",recording:"идёт",encoding:"упаковываю файл…",saving:"сохраняю…",error:"не вышло"},hd=["recording","encoding","saving"],So=["Одно не рождается без другого: оболочка без души лишь кукла, душа без оболочки — призрак.","Сон совести рождает чудовищ.","У нас нет формы, и мы страшимся этого.","В здравом теле, витает здравый дух, а значит и душа."];class bd{statsHost;clusterHost;settings;windows;root;playBtn;backBtn;settingsItem;modes;actionsEl;midEl;statusEl;statusText;recordRow;recordBtn;recordDot;recordLabel;recordState;recordBar;recordFill;idleIndex=-1;topbar;chromeHidden=!1;autosave;uiSoundDetach=[];constructor(t,n){this.root=document.createElement("div"),this.root.className="menu";const s=document.createElement("style");s.textContent=pd,this.windows=md({onEmptyEscape:()=>{this.setChromeHidden(!this.chromeHidden)}}),this.statsHost=document.createElement("div"),this.topbar=dd({statsHost:this.statsHost,title:"BLEND ARS",subtitle:"",windows:this.windows,onToggleChrome:()=>{this.setChromeHidden(!0)}}),this.playBtn=document.createElement("button"),this.playBtn.className="play play--go",this.playBtn.type="button",this.playBtn.textContent="Играть",this.playBtn.addEventListener("pointerdown",v=>{v.preventDefault(),!this.playBtn.disabled&&(we("click"),this.modes.open(),this.windows.open("modes"))});const o=document.createElement("ul");o.className="actions__list";const a=[["Контейнеры",Ur],["Миссии",Gr],["Гараж",Wr],["Магазин",Vr]];for(const[v,y]of a){const h=document.createElement("li"),x=document.createElement("button");x.className="mitem",x.type="button",x.textContent=v,x.disabled=!0,x.title=`${v}: раздел в разработке`,x.style.setProperty("--mitem-icon",`url(${JSON.stringify(y)})`),h.append(x),o.append(h)}this.settingsItem=document.createElement("button"),this.settingsItem.className="mitem",this.settingsItem.type="button",this.settingsItem.textContent="Настройки",this.settingsItem.style.setProperty("--mitem-icon",`url(${JSON.stringify(Ia)})`),this.settingsItem.addEventListener("pointerdown",v=>{v.preventDefault(),!this.settingsItem.disabled&&(we("click"),this.openSettings())});{const v=document.createElement("li");v.append(this.settingsItem),o.append(v)}this.modes=ac(v=>{we("click"),this.modes.dialog.close(),this.windows.close(),n.onScene(v)}),this.backBtn=document.createElement("button"),this.backBtn.className="tb__back",this.backBtn.type="button",this.backBtn.textContent="Назад",this.backBtn.style.setProperty("--tb-icon",`url(${JSON.stringify(qr)})`),this.backBtn.title="Вернуться в меню",this.backBtn.setAttribute("aria-label","Вернуться в меню"),this.backBtn.style.display="none",this.backBtn.addEventListener("pointerdown",v=>{v.preventDefault(),we("click"),n.onBack?.()}),this.settings=Ul();const r=document.createElement("button");r.className="tb__btn",r.type="button",r.style.setProperty("--tb-icon",`url(${JSON.stringify(Ia)})`),r.title="Настройки",r.setAttribute("aria-label","Настройки"),r.addEventListener("pointerdown",v=>{v.preventDefault(),!r.disabled&&(we("click"),this.openSettings())});const d=document.createElement("div");d.className="tb__extra",d.append(r),this.topbar.setExtraButtons(d),this.topbar.setBackButton(this.backBtn);const u=document.createElement("div");u.className="actions",u.append(this.playBtn,o),this.actionsEl=u,this.statusText=document.createElement("div"),this.statusText.className="status__text",this.statusText.textContent=this.pickIdlePhrase(),this.recordRow=document.createElement("div"),this.recordRow.className="status__record",this.recordRow.hidden=!0,this.recordBtn=document.createElement("button"),this.recordBtn.className="status__recordbtn",this.recordBtn.type="button",this.recordDot=document.createElement("span"),this.recordDot.className="status__dot",this.recordLabel=document.createElement("span"),this.recordLabel.textContent="Запись",this.recordBtn.append(this.recordDot,this.recordLabel),this.recordBtn.addEventListener("pointerdown",v=>{v.preventDefault(),!this.recordBtn.disabled&&(we("click"),n.onRecord?.())}),this.recordState=document.createElement("span"),this.recordState.className="status__recordstate",this.recordState.textContent="",this.recordBar=document.createElement("div"),this.recordBar.className="status__recordbar",this.recordFill=document.createElement("span"),this.recordBar.append(this.recordFill),this.recordBar.style.display="none",this.recordRow.append(this.recordBtn,this.recordState,this.recordBar),this.statusEl=document.createElement("div"),this.statusEl.className="status",this.clusterHost=document.createElement("div"),this.clusterHost.className="status__cluster",this.statusEl.append(this.clusterHost),this.statusText.setAttribute("role","status"),this.statusText.setAttribute("aria-live","polite"),this.statusEl.append(this.statusText),this.settings.recordSlot.append(this.recordRow);const f=document.createElement("div");f.className="mid",f.append(u,this.windows.root),this.actionsEl=u,this.midEl=f;const p=document.createElement("div");p.className="wrap",p.append(f);const g=document.createElement("button");g.className="chrome-fab",g.type="button",g.style.setProperty("--fab-icon",`url(${JSON.stringify(Xr)})`),g.title="Показать интерфейс",g.setAttribute("aria-label","Показать интерфейс"),g.addEventListener("pointerdown",v=>{v.preventDefault(),we("click"),this.setChromeHidden(!1)}),this.root.append(s,this.topbar.root,p,this.statusEl,g),t.append(this.root),ec(()=>Ll("uiClick")),tc(),this.uiSoundDetach.push(vt(this.root),vt(this.settings.root),Xn(this.settings.root),vt(this.modes.dialog.root)),this.windows.register({id:"settings",root:this.settings.root,show:()=>this.settings.open(),hide:()=>this.settings.close()}),this.windows.register({id:"modes",root:this.modes.dialog.root,show:()=>this.modes.open(),hide:()=>this.modes.dialog.close()}),this.settings.close(),this.autosave=Wl({onSaved:v=>{this.setStatus(`Настройки сохранены в пресет «${v}».`)},onNoPreset:()=>{this.setStatus("Настройки применены, но активного пресета нет — сохранять некуда. Сохраните пресет на вкладке «Пресеты».")}})}openSettings(){this.settings.open(),this.windows.open("settings")}setMode(t){const n=t==="scene";this.playBtn.style.display=n?"none":"",this.backBtn.style.display=n?"":"none",this.recordRow.hidden=!n,n&&(this.modes.dialog.close(),this.windows.close()),this.setChromeHidden(!1),this.actionsEl.style.display=n?"none":"",this.midEl.style.gridTemplateColumns=n?"minmax(0, 1fr)":"",this.root.style.background=n?"none":"",this.root.classList.toggle("menu--scene",n)}setChromeHidden(t){this.chromeHidden=t,this.root.classList.toggle("menu--chrome-hidden",t)}isChromeHidden(){return this.chromeHidden}setSceneChrome(t){this.topbar.setSceneMode(t)}statsHostFor(t){return this.statsHost}setBusy(t){this.playBtn.disabled=t,this.settingsItem.disabled=t,this.backBtn.disabled=t,this.modes.setBusy(t),t&&this.setStatus("Инициализация рендера…")}setStatus(t){this.statusText.textContent=t||this.pickIdlePhrase()}setRecordState(t,n){const s=hd.includes(t);this.recordBtn.classList.toggle("live",s),this.recordBtn.disabled=t==="starting"||t==="encoding"||t==="saving",this.recordLabel.textContent=t==="recording"?"Стоп":"Запись",this.recordBar.style.display=t==="encoding"||t==="saving"?"block":"none",this.recordFill.style.width="0%",this.recordState.textContent=n??fd[t]}setRecordProgress(t){this.recordFill.style.width=`${Math.min(Math.max(t,0),1)*100}%`}pickIdlePhrase(){let t=Math.floor(Math.random()*So.length);return t===this.idleIndex&&(t=(t+1)%So.length),this.idleIndex=t,So[t]??""}destroy(){this.topbar.destroy(),this.modes.destroy(),this.windows.destroy(),this.autosave.destroy();for(const t of this.uiSoundDetach)t();this.root.remove(),this.settings.root.remove()}}const gd=`
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
`,yd='<svg class="rswitch__svg" viewBox="0 0 48 26" width="48" height="26" aria-hidden="true" focusable="false"><rect class="rswitch__track" x="1" y="1" width="46" height="24" rx="12"></rect><circle class="rswitch__knob" cx="13" cy="13" r="9"></circle></svg>';function xd(e,t){const n=document.createElement("div");n.className="rswitch-wrap";const s=document.createElement("span");s.className="rswitch__opt",s.textContent="WebGL2",s.dataset.val="webgl2";const o=document.createElement("button");o.className="rswitch",o.type="button",o.setAttribute("role","switch"),o.innerHTML=yd;const a=document.createElement("span");a.className="rswitch__opt",a.textContent="WebGPU",a.dataset.val="webgpu",n.append(s,o,a);const r=()=>{o.disabled||t.onSwitch()};n.addEventListener("click",r),e.append(n);let d="webgl2",u=!1,f="";const p=()=>{const g=d==="webgpu";o.dataset.state=g?"on":"off",o.setAttribute("aria-checked",g?"true":"false"),s.classList.toggle("rswitch__opt--active",!g),a.classList.toggle("rswitch__opt--active",g);const v=g?"WebGL2":"WebGPU";o.title=o.disabled&&f?f:`Переключить на ${v}`,o.setAttribute("aria-label",`Рендер: ${g?"WebGPU":"WebGL2"}. Переключить на ${v}`),n.classList.toggle("rswitch-wrap--disabled",o.disabled),n.setAttribute("aria-disabled",String(o.disabled))};return p(),{setBackend(g){d=g,p()},setBusy(g){u=g,o.disabled=g||!!f,p()},setUnavailable(g){f=g,o.disabled=u||!!g,p()},destroy(){n.remove()}}}const _d=`
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
`;function _n(e,t,n,s,o,a){o<=0||s<=0||(e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o),e.fill())}const vd="#ebdbb2",Kn="system-ui, -apple-system, 'Segoe UI', sans-serif",ls=.9;function wd(e){let t="";return{draw:(s,o,a,r)=>{if(o<=0||a<=0||r<=0)return!1;const d=e(),u=d===null?"none":[Math.round(Math.abs(d.speed)*.9),d.rpm,d.gear,d.shifting?1:0,d.gears.length,Math.round(d.charge*100),Math.round(d.boost*100),o,a,window.innerWidth].join("|");if(u===t)return!1;if(t=u,s.clearRect(0,0,o,a),s.fillStyle="rgba(29, 32, 33, 0.93)",s.fillRect(0,0,o,a),d===null)return!0;s.save(),s.scale(r,r);const f=a/r,p=document.documentElement.classList.contains("hud-density--skinny"),g=window.innerWidth>1100,v=window.innerWidth>820,y=12,h=f/2;let x=0;if(s.textBaseline="middle",s.textAlign="left",g){const k=p?48:64,w=4;s.fillStyle="#ffffff1f",_n(s,x,h-w/2,k,w,2);const T=Math.max(d.maxRpm-d.idleRpm,1),I=Math.min(Math.max((d.rpm-d.idleRpm)/T,0),1);I>0&&(s.fillStyle=d.rpm>=d.shiftUpRpm?"#fe8019":"#ebdbb2cc",_n(s,x,h-w/2,k*I,w,2)),x+=k+y}const _=p?18:24,C=p?9:11;s.fillStyle=vd,s.font=`700 ${_}px ${Kn}`;const c=`${Math.round(Math.abs(d.speed)*ls)}`;s.fillText(c,x,h);const E=s.measureText(c).width;if(s.font=`400 ${C}px ${Kn}`,s.fillStyle="rgba(235, 219, 178, 0.55)",s.fillText("км/ч",x+E+3,h),x+=E+3+s.measureText("км/ч").width+8,v){const k=d.gears.length,w=p?16:20,T=4,I=d.gear<0?0:d.gear;for(let S=0;S<=k;S++){const b=x+S*(w+4),P=S===I;s.fillStyle=P?d.shifting?"#ffffff4d":"#ebdbb2e6":"#ffffff1a",_n(s,b,h-w/2,w,w,T),s.fillStyle=P?d.shifting?"#ffffff8c":"#1d2021":"#ffffff73",s.font=`600 ${p?9:11}px ${Kn}`,s.textAlign="center",s.fillText(S===0?"R":`${S}`,b+w/2,h),s.textAlign="left"}x+=(k+1)*(w+4)-4+y}if(g){const k=Math.min(Math.max(d.charge,0),1),w=Math.min(Math.max(d.boost,0),1),T=k>0?k:w;s.font=`400 9px ${Kn}`,s.fillStyle="rgba(235, 219, 178, 0.8)",s.fillText(k>0?"ЗАРЯД":"БУСТ",x,h);const I=s.measureText("ЗАРЯД").width,S=p?40:56,b=3,P=x+I+5;s.fillStyle="#ffffff1f",_n(s,P,h-b/2,S,b,2),T>0&&(s.fillStyle=w>0?"#fe8019":"#7b5cff",_n(s,P,h-b/2,S*T,b,2))}return s.restore(),!0},reset(){t=""},destroy(){t=""}}}function Ed(e,t){const n=document.createElement("div");n.className="cluster",n.setAttribute("role","group"),n.setAttribute("aria-label","Приборы машины");const s=document.createElement("div");s.className="cluster__revs";const o=document.createElement("span");s.append(o);const a=document.createElement("div");a.className="cluster__dials";const r=document.createElement("span");r.className="cluster__speed",r.textContent="0";const d=document.createElement("span");d.className="cluster__unit",d.textContent="км/ч";const u=document.createElement("span");u.append(r,d);const f=document.createElement("div");f.className="cluster__gearbox",a.append(u,f);const p=document.createElement("div");p.className="cluster__boost";const g=document.createElement("span");g.textContent="Заряд";const v=document.createElement("div");v.className="cluster__boostbar";const y=document.createElement("span");v.append(y),p.append(g,v),n.append(s,a,p);const h=document.createElement("style");h.textContent=_d,document.head.append(h);let x=[],_=-1,C=0;const c=()=>{if(C++%4!==0)return;const k=e();if(!k)return;r.textContent=`${Math.round(Math.abs(k.speed)*ls)}`;const w=k.gears.length;if(w!==_){_=w,f.replaceChildren(),x=[];const F=w+1;for(let j=0;j<F;j++){const $=document.createElement("span");$.textContent=j===0?"R":`${j}`,f.append($),x.push($)}}const T=k.gear<0?0:k.gear;for(let F=0;F<x.length;F++)x[F]?.classList.toggle("engaged",F===T);f.classList.toggle("shifting",k.shifting);const I=Math.max(k.maxRpm-k.idleRpm,1),S=(k.rpm-k.idleRpm)/I;o.style.width=`${Math.min(Math.max(S,0),1)*100}%`,o.classList.toggle("redline",k.rpm>=k.shiftUpRpm);const b=Math.min(Math.max(k.charge,0),1),P=Math.min(Math.max(k.boost,0),1),D=b>0?b:P;y.style.width=`${D*100}%`,y.classList.toggle("firing",P>0),g.textContent=b>0?"Заряд":"Буст"};n.dataset.cleanup="1",(t??document.body).append(n);const E=window.setInterval(c,1e3/60/4);return{destroy(){window.clearInterval(E),n.remove(),h.remove()}}}const Yi="vehicle",tm="vehicleInput",nm="vehicleWheel",Sd="driveCamera",ds=5,kd=50,Cd=8e3,Nd=600;function Ld(e,t){return Math.abs(e)>kd&&t>=Cd}function Ad(e){return e>0?e-1:0}function Rd(e,t){const n={cells:ds,max:ds,lastSpeedKmh:0,lastEventSpeedKmh:0,lastImpulse:0},s=n,o=t.collision,a=t.script?.get(Yi);let r=Number.NEGATIVE_INFINITY,d=!1,u=0;const f=()=>{const v=a?.speed;typeof v=="number"&&Number.isFinite(v)&&(u=Math.abs(v)*ls)};e.on("update",f);const p=v=>{if(d)return;let y=0;for(const _ of v.contacts??[]){const C=_.impulse??0;C>y&&(y=C)}const h=Math.abs(a?.speed??0)*ls;if(n.lastSpeedKmh=u,n.lastEventSpeedKmh=h,n.lastImpulse=y,!Ld(u,y))return;const x=performance.now();x-r<Nd||(r=x,n.cells=Ad(n.cells),console.info("[lives] удар:",`${Math.round(u)} км/ч по прибору`,"(в событии",`${Math.round(h)} км/ч)`,"· импульс",Math.round(y),"· осталось ячеек",n.cells),e.fire("lives:hit",n.cells),!(n.cells>0)&&(d=!0,e.fire("lives:depleted")))};o?o.on("collisionstart",p):console.warn("[lives] у машины нет collision-компонента — прочность не работает");const g=window;return g.__blendarsLives=s,{view:s,destroy(){e.off("update",f),o?.off("collisionstart",p),g.__blendarsLives===s&&delete g.__blendarsLives}}}const Td={w:220,h:28,pad:8,cellW:18,cellH:10,gap:2,labelSize:12,statusSize:11},Pd={w:184,h:24,pad:6,cellW:14,cellH:8,gap:2,labelSize:11,statusSize:11};function Ki(){return document.documentElement.classList.contains("hud-density--skinny")?Pd:Td}function Ji(){const e=Ki();return{w:e.w,h:e.h}}const Md="rgba(0, 0, 0, 0.35)",Id="rgba(40, 40, 40, 0.93)",Qa="#928374",$d="#d5c4a1",Fd="#ebdbb2",Xi="#8ec07c",us="#fabd2f",ko="#fe8019",Od="rgba(40, 40, 40, 0.35)",Za="system-ui, -apple-system, 'Segoe UI', sans-serif",Bd=220,qi=4,Qi=1;function ei(e,t){const n=e;typeof n.letterSpacing=="string"&&(n.letterSpacing=`${t}px`)}const Dd=typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches;function jd(e){return e<=Qi?{text:"CRITICAL",color:us}:e<qi?{text:"DAMAGED",color:us}:{text:"STABLE",color:Fd}}function Hd(e){return e>=qi?Xi:us}function Zi(e){let t=-2,n=0,s=!1,o=!1,a=null,r=0,d=0,u=0;return{draw:(p,g,v,y)=>{if(g<=0||v<=0||y<=0)return!1;const h=e(),x=h===null?-1:Math.max(0,Math.min(h.cells,h.max)),_=h===null?ds:Math.max(1,Math.min(h.max,10)),C=performance.now();!Dd&&x>=0&&t>=0&&x<t&&(u=C+Bd);const c=C<u,E=x>=0&&x<=Qi,k=Ki();if(x===t&&_===n&&c===s&&E===o&&k===a&&g===r&&v===d)return!1;if(t=x,n=_,s=c,o=E,a=k,r=g,d=v,p.clearRect(0,0,g,v),x<0)return!0;p.save(),p.scale(y,y);const w=g/y,T=v/y;p.fillStyle=Md,p.fillRect(0,0,w,T),p.fillStyle=Id,p.fillRect(0,0,w,T),p.strokeStyle=c?ko:Qa,p.lineWidth=c?2:1,p.strokeRect(.5,.5,w-1,T-1),p.fillStyle=c?ko:E?us:Xi,p.fillRect(0,3,2,T-6);const I=T/2;p.textBaseline="middle",p.textAlign="left";let S=2+k.pad;ei(p,k.labelSize*.08),p.font=`700 ${k.labelSize}px ${Za}`,p.fillStyle=$d,p.fillText("HP",S,I),S+=p.measureText("HP").width+k.pad;const b=I-k.cellH/2;for(let D=0;D<_;D++){const F=S+D*(k.cellW+k.gap);if(D<x&&(p.fillStyle=c?ko:Hd(x),p.fillRect(F+1,b+1,k.cellW-2,k.cellH-2),E&&!c)){p.save(),p.beginPath(),p.rect(F+1,b+1,k.cellW-2,k.cellH-2),p.clip(),p.strokeStyle=Od,p.lineWidth=2,p.beginPath();for(let j=F-k.cellH;j<F+k.cellW;j+=4)p.moveTo(j,b+k.cellH),p.lineTo(j+k.cellH,b);p.stroke(),p.restore()}p.strokeStyle=Qa,p.lineWidth=1,p.strokeRect(F+.5,b+.5,k.cellW-1,k.cellH-1)}S+=_*(k.cellW+k.gap)-k.gap+k.pad;const P=jd(x);return p.font=`700 ${k.statusSize}px ${Za}`,p.fillStyle=P.color,p.fillText(P.text,S,I),ei(p,0),p.restore(),!0},reset(){r=0,d=0,a=null},destroy(){r=0,d=0,a=null}}}const zd=`
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
`;function Ud(e,t){const n=document.createElement("div");n.className="lives",n.setAttribute("role","img");const s=document.createElement("canvas");n.append(s);const o=document.createElement("style");o.textContent=zd,document.head.append(o),document.body.append(n);const a=s.getContext("2d"),r=Zi(e);if(!a)return n.remove(),o.remove(),{destroy(){}};let d=0,u=0,f=0,p=-2,g=0;const v=()=>{g=requestAnimationFrame(v);const y=Ji(),h=Math.max(1,Math.min(window.devicePixelRatio||1,2));(y.w!==d||y.h!==u||h!==f)&&(d=y.w,u=y.h,f=h,s.width=Math.round(y.w*h),s.height=Math.round(y.h*h),s.style.width=y.w+"px",s.style.height=y.h+"px",r.reset()),r.draw(a,s.width,s.height,s.width/y.w);const x=e(),_=x===null?-1:x.cells;_!==p&&(p=_,n.setAttribute("aria-label",x===null?"":"Прочность "+x.cells+" из "+x.max))};return g=requestAnimationFrame(v),{destroy(){cancelAnimationFrame(g),r.destroy(),n.remove(),o.remove()}}}const Fo=10;function Gd(e,t){const n=e/t,s=Math.floor(n*6),o=n*6-s,a=.25,r=1-.75*o,d=.25+.75*o,u={0:[1,d,a],1:[r,1,a],2:[a,1,d],3:[a,r,1],4:[d,a,1],5:[1,a,r]},[f,p,g]=u[s%6]??[1,1,1];return new ai(f,p,g,1)}function Co(e,t,n){const s=new wr;return s.diffuse=new ai(0,0,0),s.emissive=t,s.emissiveIntensity=2,s.blendType=Er,s.opacity=n,s.depthWrite=!1,s.update(),s}function Wd(e,t,n=Fo){let s=null;const o=()=>{try{s??=new AudioContext;const S=s;S.state==="suspended"&&S.resume();const b=S.currentTime+.02,P=S.createOscillator();P.type="sawtooth",P.frequency.setValueAtTime(70,b),P.frequency.exponentialRampToValueAtTime(300,b+2.5);const D=S.createBiquadFilter();D.type="lowpass",D.Q.value=6,D.frequency.setValueAtTime(180,b),D.frequency.exponentialRampToValueAtTime(1800,b+2.5);const F=S.createGain();F.gain.setValueAtTime(1e-4,b),F.gain.exponentialRampToValueAtTime(.22,b+2.4),F.gain.setValueAtTime(.22,b+2.5),F.gain.linearRampToValueAtTime(0,b+2.7),P.connect(D).connect(F).connect(S.destination),P.start(b),P.stop(b+2.8);const j=2.4,$=S.createBufferSource(),U=S.createBuffer(1,Math.ceil(S.sampleRate*j),S.sampleRate),le=U.getChannelData(0);for(let ye=0;ye<le.length;ye++)le[ye]=Math.random()*2-1;$.buffer=U;const he=S.createBiquadFilter();he.type="bandpass",he.Q.value=2.5,he.frequency.setValueAtTime(250,b+2.5),he.frequency.exponentialRampToValueAtTime(5200,b+4.6);const re=S.createGain();re.gain.setValueAtTime(1e-4,b+2.5),re.gain.exponentialRampToValueAtTime(.3,b+2.62),re.gain.exponentialRampToValueAtTime(.001,b+4.8),$.connect(he).connect(re).connect(S.destination),$.start(b+2.5),$.stop(b+4.9)}catch{}},a=new It("checkpoints");t.addChild(a);const r=(S,b)=>{const P=new Aa(S,120,b),D=new Aa(S,-20,b),F=e.systems.rigidbody?.raycastFirst(P,D);return F?F.point.y:0},d=(S,b)=>{const P=r(S,b);return Math.abs(r(S+4,b)-P)<1.2&&Math.abs(r(S,b+4)-P)<1.2},u=S=>{let b={x:0,z:0,y:0};for(let P=0;P<8;P++){const D=S/n*Math.PI*2+Math.random()*.6,F=60+Math.random()*200,j=Math.cos(D)*F,$=Math.sin(D)*F;if(b={x:j,z:$,y:r(j,$)},d(j,$))return b}return b},f=e.graphicsDevice,p=new ho({ringRadius:4,tubeRadius:.14,sectorAngle:360,segments:48,sides:10}),g=new ho({ringRadius:2.6,tubeRadius:.12,sectorAngle:360,segments:36,sides:10}),v=new ho({ringRadius:1.5,tubeRadius:.1,sectorAngle:360,segments:24,sides:8}),y=new vr({radius:.35,height:60,heightSegments:1,capSegments:12}),h=Gn.fromGeometry(f,p),x=Gn.fromGeometry(f,g),_=Gn.fromGeometry(f,v),C=Gn.fromGeometry(f,y),c=[],E=new Map;for(let S=0;S<n;S++){const{x:b,z:P,y:D}=u(S),F=Gd(S,n),j=new It(`checkpoint-${S}`);j.setPosition(b,D+.35,P);const $=(K,Q,de,ne)=>{const ue=new It("ring");return ue.addComponent("render",{meshInstances:[new La(K,Q)],castShadows:!1,receiveShadows:!1}),ue.setEulerAngles(de,0,ne),j.addChild(ue),ue},U=Co(f,F,.9),le=Co(f,F,.55),he=Co(f,F,.28),re=$(h,U,0,0),ye=$(x,le,66,24),V=$(_,le,108,-30),q=new It("beam");q.addComponent("render",{meshInstances:[new La(C,he)],castShadows:!1,receiveShadows:!1}),q.setLocalPosition(0,30,0),j.addChild(q),a.addChild(j);const J={info:{id:S,x:b,z:P,color:Math.round(F.r*255)<<16|Math.round(F.g*255)<<8|Math.round(F.b*255)},node:j,rings:[re,ye,V],beam:q,mats:[U,le],beamMat:he,state:"alive",t:0};c.push(J),E.set(j,J)}const k=S=>{for(const b of c){if(b.state==="alive"){b.rings[0]?.rotate(0,S*50,0),b.rings[1]?.rotate(S*30,S*-70,0),b.rings[2]?.rotate(S*-45,0,S*60);continue}b.t+=S;const P=b.t;if(P<2.5){const D=P/2.5,F=1-(1-D)*(1-D),j=1+1.3*F;b.node.setLocalScale(j,j,j);const $=S*10*F;b.rings[0]?.rotate(0,$*50,0),b.rings[1]?.rotate($*30,$*-70,0),b.rings[2]?.rotate($*-45,0,$*60)}else if(P<5){const D=(P-2.5)/2.5,F=1-D*D,j=Math.max(2.3*F*F,.001);b.node.setLocalScale(j,j,j);const $=S*(10+D*40);b.rings[0]?.rotate(0,$*50,0),b.rings[1]?.rotate($*30,$*-70,0),b.rings[2]?.rotate($*-45,0,$*60),b.beam.setLocalScale(1,1+D*2.2,1),b.beam.setLocalPosition(0,30+D*45,0),b.beamMat.opacity=.28*(1-D),b.beamMat.update();for(let U=0;U<b.mats.length;U++){const le=U===0?.9:.55;b.mats[U].opacity=Math.max(le*(1-D),0),b.mats[U].update()}}}for(let b=c.length-1;b>=0;b--){const P=c[b];P.state==="dying"&&P.t>=5&&(P.node.destroy(),e.fire("checkpoint:visited",P.info),c.splice(b,1))}};e.on("update",k);const w=()=>t.findByName("vehicle");let T=0;const I=S=>{if(T+=S,T<.25)return;T=0;const P=w()?.getPosition();if(P)for(let D=c.length-1;D>=0;D--){const F=c[D],j=P.x-F.info.x,$=P.z-F.info.z;F.state==="alive"&&j*j+$*$<9*9&&(F.state="dying",F.t=0,o())}};return e.on("update",I),{list:()=>c.map(S=>S.info),destroy(){e.off("update",k),e.off("update",I),s?.close().catch(()=>{}),a.destroy()}}}function er(){return null}const Jn=55,Vd={lane:38,zone:32,total:70},Yd={lane:26,zone:24,total:50},Kd={lane:0,zone:0,total:0};function ca(){const e=document.documentElement.classList;return e.contains("hud-density--minimal")?Kd:e.contains("hud-density--skinny")?Yd:Vd}const Jd=`
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
`,Xd={0:"С",45:"СВ",90:"В",135:"ЮВ",180:"Ю",225:"ЮЗ",270:"З",315:"СЗ"};function qd(){return ca().total<=0}function tr(e,t,n,s=er){let o=null;const a=()=>{try{o??=new AudioContext,o.state==="suspended"&&o.resume();const c=o,E=c.currentTime+.01;for(const[k,w]of[880,1318.51].entries()){const T=c.createOscillator(),I=c.createGain();T.type="sine",T.frequency.value=w;const S=E+k*.09;I.gain.setValueAtTime(0,S),I.gain.linearRampToValueAtTime(.16,S+.02),I.gain.exponentialRampToValueAtTime(.001,S+.38),T.connect(I).connect(c.destination),T.start(S),T.stop(S+.42)}}catch{}},r=document.createElement("div");r.className="compass-toast",document.body.append(r);let d=null;const u=c=>{r.textContent=c,r.classList.add("compass-toast--on"),a(),d!==null&&window.clearTimeout(d),d=window.setTimeout(()=>{r.classList.remove("compass-toast--on"),d=null},2400)};let f=-1,p=-1,g="",v="",y=-1,h=0;const x=c=>(c*180/Math.PI+360)%360,_=(c,E)=>{let k=(c-E)%360;return k>=180&&(k-=360),k<-180&&(k+=360),k};return{draw:(c,E,k)=>{if(k===0||E===0)return!1;const w=e();if(w===null)return g!==""?(c.clearRect(0,0,E,k),g="",!0):!1;const T=x(w),I=t(),S=n(),b=s();b!==null&&b.collected!==p?(p>=0&&b.collected>p&&u(b.collected>=b.total?`Все ${b.total} чекпоинтов собраны`:`Чекпоинт ${b.collected} из ${b.total}`),p=b.collected):(S.length!==f&&f>=0&&S.length<f&&b===null&&u(S.length>0?`Чекпоинт собран · осталось: ${S.length}`:"Все чекпоинты собраны!"),f=S.length);let P="";if(b!==null&&b.state!=="idle"){const V=b.state==="running"?Math.max(0,performance.now()-b.startMs):b.lastMs;P=`${An(Math.floor(V/100)*100)} · ${b.collected}/${b.total}`}const D=`${E}x${k}|${T.toFixed(2)}|${I?`${I.x.toFixed(1)},${I.z.toFixed(1)}`:""}|${S.length}|${P}`;if(D===g)return!1;g=D;const F=ca(),j=k/(F.total||1),$=Math.round(F.lane*j),U=$;c.save(),c.beginPath(),c.rect(0,0,E,k),c.clip(),c.clearRect(0,0,E,k);const le=c.createLinearGradient(0,0,0,$);le.addColorStop(0,"rgba(235, 219, 178, 0.15)"),le.addColorStop(.6,"rgba(40, 40, 40, 0.94)"),c.fillStyle=le,c.fillRect(0,0,E,$),c.strokeStyle="rgba(235, 219, 178, 0.18)",c.lineWidth=1,c.strokeRect(.5,.5,E-1,$-1);const he=E/(Jn*2),re=E/2,ye=Math.round((T-Jn)/15)*15;c.textAlign="center",c.textBaseline="middle";for(let V=ye;V<=T+Jn;V+=15){const q=re+_(V,T)*he,Y=Xd[(V%360+360)%360];Y!==void 0?(c.fillStyle="#ebdbb2e6",c.font=`600 ${Math.round($*.34)}px system-ui, sans-serif`,c.fillText(Y,q,$*.42)):V%45===0?(c.fillStyle="#ebdbb280",c.fillRect(q-1,$*.3,2,$*.22)):(c.fillStyle="#ebdbb240",c.fillRect(q-1,$*.36,2,$*.12))}if(c.fillStyle="#fe8019",c.fillRect(re-1.5,$*.14,3,$*.2),I){const V=[...S].map(J=>{const K=J.x-I.x,Q=J.z-I.z;return{cp:J,dist:Math.round(Math.hypot(K,Q)),off:_(x(Math.atan2(K,-Q)),T)}}).sort((J,K)=>J.off-K.off);let q=-1e9,Y=0;for(const{cp:J,dist:K,off:Q}of V){const de=`#${J.color.toString(16).padStart(6,"0")}`;let ne=re+Q*he;if(Math.abs(Q)>Jn-4){ne=re+Math.sign(Q)*(E/2-14*(E/560)),c.save(),c.translate(ne,$*.42),c.rotate(Math.sign(Q)*Math.PI/2),c.fillStyle=de,c.beginPath(),c.moveTo(0,-6*(E/560)),c.lineTo(5*(E/560),3*(E/560)),c.lineTo(-5*(E/560),3*(E/560)),c.closePath(),c.fill(),c.restore();continue}Math.abs(ne-q)<34*(E/560)?Y=(Y+1)%2:Y=0,q=ne;const ke=5*(E/560);c.fillStyle=de,c.beginPath(),c.moveTo(ne,$*.2-ke),c.lineTo(ne+ke,$*.2),c.lineTo(ne,$*.2+ke),c.lineTo(ne-ke,$*.2),c.closePath(),c.fill(),c.fillStyle="#ebdbb2d9",c.font=`500 ${Math.round($*.26)}px system-ui, sans-serif`,c.fillText(`${K}м`,ne,$*(.62+Y*.24))}}if(b!==null&&P!==""){const V=E/560,q=Math.max(10,Math.round(F.zone*.62*j));c.font=`600 ${q}px system-ui, sans-serif`,c.textAlign="center",c.textBaseline="middle",(P!==v||q!==y)&&(v=P,y=q,h=c.measureText(P).width);const Y=9*V,J=q+7*V,K=h+Y*2,Q=(E-K)/2,de=U+Math.max(0,(k-U-J)/2);c.beginPath(),typeof c.roundRect=="function"?c.roundRect(Q,de,K,J,4*V):c.rect(Q,de,K,J),c.fillStyle="rgba(29, 32, 33, 0.9)",c.fill(),c.strokeStyle=b.state==="finished"?"#b8bb2680":b.state==="aborted"?"#fabd2f80":"#ebdbb233",c.lineWidth=1,c.stroke(),c.fillStyle=b.state==="finished"?"#b8bb26":b.state==="aborted"?"#fabd2f":"#ebdbb2",c.fillText(P,E/2,de+J/2)}return c.restore(),!0},reset(){g=""},destroy(){d!==null&&window.clearTimeout(d),o?.close().catch(()=>{}),r.remove()}}}function Qd(e,t,n,s=er){const o=document.createElement("div");o.className="compass";const a=document.createElement("canvas");o.append(a);const r=document.createElement("style");r.textContent=Jd,o.append(r),document.body.append(o);const d=tr(e,t,n,s),u=()=>{const y=Math.min(window.devicePixelRatio||1,2);a.width=Math.round(a.clientWidth*y),a.height=Math.round(a.clientHeight*y)};u(),window.addEventListener("resize",u);let f=-1,p=-1,g=0;const v=()=>{const y=a.getContext("2d");y&&(a.width!==f||a.height!==p)&&(f=a.width,p=a.height,y.clearRect(0,0,a.width,a.height)),y&&d.draw(y,a.width,a.height),g=requestAnimationFrame(v)};return g=requestAnimationFrame(v),{destroy(){cancelAnimationFrame(g),window.removeEventListener("resize",u),d.destroy(),o.remove(),r.remove()}}}function Zd(e,t){const n=e.graphicsDevice,s=u=>{const f=new Lr(n,{name:`hud-${u.width}x${u.height}`,format:Ar,width:u.width,height:u.height,mipmaps:!1,minFilter:Ta,magFilter:Ta,addressU:Ra,addressV:Ra,anisotropy:1,premultiplyAlpha:!0,srgb:!0});return f.setSource(u),f};let o=null;const a=[];try{o=new It("hud-screen"),o.addComponent("screen",{screenSpace:!0,scaleMode:Sr}),e.root.addChild(o);for(const u of t){const f=document.createElement("canvas"),p=f.getContext("2d",{alpha:!0});if(!p)throw new Error("нет 2d-контекста");const g=new It(`hud-${u.name}`);g.addComponent("element",{type:Nr,anchor:new Cr(0,0,0,0),pivot:new kr(0,0),opacity:1,useInput:!1}),o.addChild(g),g.enabled=!1,a.push({layer:u,entity:g,element:g.element,canvas:f,ctx:p,texture:null,sizeKey:"",dirty:!0})}}catch(u){console.warn("[hud] слой HUD не поднялся — HUD остаётся DOM-ом",u);for(const f of a)f.texture?.destroy();return o?.destroy(),{active:!1,destroy(){}}}const r=(u,f)=>{const p=u.layer.rect();if(!p||p.w<=0||p.h<=0)return u.entity.enabled=!1,!1;const g=Math.max(1,Math.round(p.w*f)),v=Math.max(1,Math.round(p.h*f)),y=`${g}x${v}`;if(y!==u.sizeKey){u.sizeKey=y,u.canvas.width=g,u.canvas.height=v;const h=s(u.canvas);u.element.texture=h,u.texture?.destroy(),u.texture=h,u.layer.reset(),u.dirty=!0}return u.element.width=p.w*f,u.element.height=p.h*f,u.entity.setLocalPosition(Math.round(p.x*f),n.height-Math.round((p.y+p.h)*f),0),u.entity.enabled=!0,!0},d=()=>{const u=n.width>0?n.width/Math.max(window.innerWidth,1):1;if(!(u<=0||!Number.isFinite(u)))for(const f of a){if(!f.ctx||!r(f,u))continue;const p=f.texture;if(!p)continue;(f.layer.draw(f.ctx,f.canvas.width,f.canvas.height,u)||f.dirty)&&(f.dirty=!1,p.setSource(f.canvas),p.upload())}};return e.on("prerender",d),{active:!0,destroy(){e.off("prerender",d);for(const u of a)u.texture?.destroy(),u.layer.destroy();o.destroy()}}}function eu(e,t,n,s,o,a){e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(a,o/2,s/2)):e.rect(t,n,s,o)}function tu(e){let t=!1;const n=tr(e.getHeading,e.getVehicle,e.getCheckpoints,e.readRace),s=wd(e.read),o=Zi(e.readLives),a=()=>{if(qd())return null;const y=Math.min(window.innerWidth*.62,560),h=ca();if(y<40||h.total<=0)return null;const x=e.safeTop()+(h.lane===26?126:92);return{x:(window.innerWidth-y)/2,y:x,w:y,h:h.total}},r=()=>{const y=e.clusterHost,h=y.parentElement;if(!h||y.offsetParent===null&&h.clientHeight===0)return null;const x=h.getBoundingClientRect();return x.height<4?null:{x:x.left,y:x.top,w:x.width,h:x.height}};return{layers:[(()=>{let y="";return{name:"bar",rect:r,draw(h,x,_,C){const c=`${x}x${_}@${C}`;return c===y?!1:(y=c,h.clearRect(0,0,x,_),h.save(),eu(h,0,0,x,_,Math.max(4,6*C)),h.fillStyle="rgba(29, 32, 33, 0.93)",h.fill(),h.strokeStyle="rgba(235, 219, 178, 0.2)",h.lineWidth=Math.max(1,C),h.stroke(),h.restore(),!0)},reset(){y=""},destroy(){y=""}}})(),{name:"compass",rect:a,draw(y,h,x){return n.draw(y,h,x)},reset(){n.reset()},destroy(){n.destroy()}},{name:"cluster",rect:()=>{const y=e.clusterHost,h=r();if(!h)return null;const x=y.getBoundingClientRect();return{x:x.left>0?x.left:h.x+16,y:h.y,w:Math.min(480,Math.max(h.w,240)),h:h.h}},draw(y,h,x,_){return s.draw(y,h,x,_)},reset(){s.reset()},destroy(){s.destroy()}},{name:"lives",rect:()=>{const y=Ji(),h=a(),x=e.safeTop()+92;return h!==null&&16+y.w>h.x-8?{x:16,y:h.y+h.h+8,w:y.w,h:y.h}:{x:16,y:x,w:y.w,h:y.h}},draw(y,h,x,_){return o.draw(y,h,x,_)},reset(){o.reset()},destroy(){o.destroy()}}],destroy(){t||(t=!0,n.destroy(),s.destroy(),o.destroy())}}}let ti=!1,ni=null;function nr(){return ni??=te(()=>import("./index.Dp09MIqC.js"),[]).then(e=>e.default),ni}function sr(){try{return new URLSearchParams(location.search).has("vk_app_id")}catch{return!1}}const nu=1e4;async function su(){if(ti||!sr())return!1;ti=!0;try{const e=await nr(),t=await Promise.race([e.send("VKWebAppInit"),new Promise((n,s)=>{setTimeout(()=>s(new Error("платформа не ответила на VKWebAppInit")),nu)})]);if(t?.result)return console.info("[vk] VKWebAppInit: платформа подтвердила запуск приложения"),!0;console.warn("[vk] VKWebAppInit: платформа ответила без подтверждения",t)}catch(e){console.warn("[vk] не удалось инициализировать приложение ВКонтакте",e)}return!1}const No={uid:"local",name:"Гость",photo:""},ou=8e3;function au(){return String("6739294").trim()}function iu(e,t,n){return Promise.race([e,new Promise((s,o)=>{setTimeout(()=>o(new Error(n)),t)})])}async function ru(){let e;try{e=new URLSearchParams(location.search)}catch{return No}const t=e.get("vk_user_id");if(!t)return No;const n=e.get("vk_app_id")??"",s=au();if(s!==""&&n!==s)return console.warn("[vk] запуск с чужим app_id:",n,"— свой:",s),No;const o=`vk:${t}`;if(!sr())return{uid:o,name:"Игрок ВКонтакте",photo:""};try{const a=await nr(),r=await iu(a.send("VKWebAppGetUserInfo"),ou,"платформа не ответила на VKWebAppGetUserInfo"),d=`${r.first_name} ${r.last_name}`.trim();return{uid:o,name:d===""?"Игрок ВКонтакте":d,photo:r.photo_200}}catch(a){return console.warn("[vk] имя игрока не получено",a),{uid:o,name:"Игрок ВКонтакте",photo:""}}}let si=null;function cu(){return si??=ru(),si}function lu(e,t){let n=!1,s=null;const o=nd(e,{total:t,onFinished:r=>{du(r,()=>n).then(d=>{if(n){d();return}s?.(),s=d})}}),a=window;return a.__blendarsRace=o.view,{view:o.view,abort(){o.abort()},destroy(){n=!0,o.destroy(),s?.(),s=null,a.__blendarsRace===o.view&&delete a.__blendarsRace}}}async function du(e,t){const n=await cu(),s=td({uid:n.uid,name:n.name,photo:n.photo,timeMs:e.timeMs});if(console.info("[race] финиш:",An(e.timeMs),"· чекпоинтов",e.collected,"из",e.total,"· место",s.rank,"из",s.total,"· игрок",n.uid),t())return()=>{};const{showFinishCard:o}=await te(async()=>{const{showFinishCard:a}=await import("./finish-card.DlxQUIAx.js");return{showFinishCard:a}},__vite__mapDeps([3,2]));return t()?()=>{}:o({timeMs:e.timeMs,collected:e.collected,total:e.total,outcome:s,identity:n})}function uu(e){let t=0,n=0;const s=e.autoRender,o=()=>{const d=Ii();t=d>0?1e3/d:0,n=t,e.autoRender=t===0?s:!1},a=d=>{t!==0&&(n+=d*1e3,n>=t&&(n=0,e.renderNextFrame=!0))};o(),e.on("update",a);const r=$i(o);return{destroy(){e.off("update",a),r(),e.autoRender=s}}}let or=1,wt=null;function mu(){return Mi()*or}function sm(e){or=e,Oo()}function Oo(){wt?.graphicsDevice&&(wt.graphicsDevice.maxPixelRatio=mu(),wt.resizeCanvas(),wt.updateCanvasSize())}function pu(e){wt=e,Oo();const t=$i(()=>{Oo()});return()=>{t(),wt===e&&(wt=null)}}const fu=250,hu="menuRenderFps",bu=`
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
`;function gu(e=null){const t=document.createElement("div");t.className="mini-stats",t.setAttribute("role","status"),t.setAttribute("aria-label","Статистика кадра");const n=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");t.append(n,s,o,a);const r=document.createElement("style");r.id="mini-stats-style",r.textContent=bu,document.head.append(r);const d=C=>{t.classList.toggle("mini-stats--inline",C!==null);const c=C??document.body;t.parentElement!==c&&c.append(t)};d(e);let u=null,f=rs(),p=!1;const g=()=>Ne("fps")||Ne("cpu")||Ne("draw")||Ne("vram"),v=()=>{t.classList.toggle("visible",f&&u!==null&&g())},y=(C,c,E)=>{const k=c.fps,w=k>0&&k<30;if(w!==p&&(p=w,n.classList.toggle("warn",w)),E.fps){const T=c.user.get(hu),I=typeof T=="number"&&T>0?` · рендер ${T}`:"";n.textContent=`${k>0?Math.round(k):"—"} FPS${I} · ${c.frameTime.toFixed(1)} ms`}E.cpu&&(s.textContent=`CPU ${c.cpuUpdateTime.toFixed(1)} / ${c.cpuRenderTime.toFixed(1)} / ${c.cpuPhysicsTime.toFixed(1)} мс`),E.draw&&(o.textContent=`Draw ${Lo(c.drawCallCount)} · Прим. ${Lo(c.frame.primitives)} · Шейд. ${Lo(c.frame.shaders)}`),E.vram&&(a.textContent=`VRAM ${Math.round(c.vramTotalBytes/1048576)} МБ · ${C.graphicsDevice.width}×${C.graphicsDevice.height} ${C.graphicsDevice.isWebGPU?"WebGPU":"WebGL2"}`)},h=()=>{const C=u;if(!C||!f)return;const c={fps:Ne("fps"),cpu:Ne("cpu"),draw:Ne("draw"),vram:Ne("vram")};n.hidden=!c.fps,s.hidden=!c.cpu,o.hidden=!c.draw,a.hidden=!c.vram,y(C,C.stats,c)};v();const x=window.setInterval(h,fu),_=Ai(()=>{f=rs(),v(),h()});return{setHost(C){d(C),h()},setApp(C){u=C,v(),C&&h()},destroy(){window.clearInterval(x),_(),t.remove(),r.remove()}}}function Lo(e){return Number.isFinite(e)?e>=1e6?`${Math.round(e/1e5)}М`:e>=1e4?`${Math.round(e/1e3)}к`:`${Math.round(e)}`:"—"}const yu="hud-density--skinny",xu="hud-density--minimal";function _u(){const e=document.documentElement,t=()=>{const n=fl();e.classList.toggle(yu,n!=="full"),e.classList.toggle(xu,n==="minimal")};return t(),Ai(t)}function om(){return 1}const oi="blendars-scrollbar",vu=[".dlg__body",".settings__scroll",".settings__tabs",".actions",".mp__list"],at=e=>vu.map(t=>`${t}${e}`).join(`,
`),wu=`
/* Firefox: тонкая полоса, ползунок gray на дорожке bg1. */
@supports not selector(::-webkit-scrollbar) {
    ${at("")} {
        scrollbar-width: thin;
        scrollbar-color: #928374 #28282899;
    }
}

@media (hover: hover) and (pointer: fine) {
    /* Chromium и WebKit. 12px — под штрих 8px плюс прозрачная рамка ползунка. */
    ${at("::-webkit-scrollbar")} {
        width: max(0.75rem, 12px);
        height: max(0.75rem, 12px);
    }
    /* Дорожка — тот же тёмный серый, что подложка панелей: полоса читается как
       часть окна, а не как плашка поверх текста. */
    ${at("::-webkit-scrollbar-track")} {
        background: #28282899;
        border-radius: 999px;
    }
    /* Стрелочные кнопки в старых WebKit — лишний хром. */
    ${at("::-webkit-scrollbar-button")} {
        display: none;
        width: 0;
        height: 0;
    }
    /* Прозрачная рамка в 2px + background-clip: padding-box оставляют круглый
       штрих 8px, а не прямоугольник во всю ширину полосы. */
    ${at("::-webkit-scrollbar-thumb")} {
        background: #928374;
        border: 1px solid transparent;
        background-clip: padding-box;
        border-radius: 999px;
    }
    ${at("::-webkit-scrollbar-thumb:hover")} { background-color: #ebdbb2; }
    ${at("::-webkit-scrollbar-thumb:active")} { background-color: #fe8019; }
    /* Уголок на пересечении двух полос серым квадратом вылезал бы в углу
       колонки вкладок, где полоса одна. */
    ${at("::-webkit-scrollbar-corner")} { background: transparent; }
}
`;function Eu(){if(document.getElementById(oi))return;const e=document.createElement("style");e.id=oi,e.textContent=wu,document.head.append(e)}const la=document.getElementById("app");if(!la)throw new Error("#app not found");Eu();let se=null,Bo=null,_t=null,Do=null;const Rn={boot:.1,device:.35,decoders:.7,background:.95},it=new $r(document.body);let Tn=null,jo=null,wn=null,Pn=null,ms=null,Le=!1,We=null,ps=null;const Ho="blendars.backend";function fs(e){try{e?localStorage.setItem(Ho,e):localStorage.removeItem(Ho)}catch{}}function Su(){try{const e=localStorage.getItem(Ho);return e==="webgpu"||e==="webgl2"?e:null}catch{return null}}function ku(){const e=new URLSearchParams(location.search).get("backend");return e==="webgpu"||e==="webgl2"?e:null}let qt=ku()??Su();const W=new bd(la,{onScene:e=>{ir(W,e)},onBack:()=>{rr(W)},onRecord:()=>{Bu()}});window.__blendarsEnterSmoke=()=>{Fu(W)};const ze=xd(W.settings.backendSlot,{onSwitch:()=>{$u()}});{const e=document.createElement("style");e.textContent=gd,document.head.append(e)}navigator.gpu||ze.setUnavailable("WebGPU не поддерживается этим браузером");function da(e,t){const n=t==="scene";e.setMode(t),e.setSceneChrome(n),hs.setHost(e.statsHostFor(n))}const hs=gu(W.statsHost);_u();it.setStage("интерфейс",Rn.boot);window.__blendarsMenuReady=!0;su();Nu();function Cu(e){ps?.();const t=pu(e),n=uu(e);ps=()=>{t(),n.destroy()}}async function Nu(){try{it.setStage("пресет настроек",Rn.boot);const{askBootPreset:e}=await te(async()=>{const{askBootPreset:s}=await import("./boot-preset.CuXNSOgh.js");return{askBootPreset:s}},__vite__mapDeps([4,2]));if(await e(),qt==="webgpu"){const{confirmWebgpuSwitch:s}=await te(async()=>{const{confirmWebgpuSwitch:a}=await import("./confirm-dialog.DpA-HaJF.js");return{confirmWebgpuSwitch:a}},[]);await s()||(qt=null,fs(null),W.setStatus("Запуск на WebGL2 — WebGPU не подтверждён"))}const t=await Qt((s,o)=>{it.setStage(s,o??void 0),it.updateFromResources(),Lu()});window.__blendarsEngine={backend:t.backend},window.__blendarsApp=t.app,Pn=t.backend,ze.setBackend(t.backend),hs.setApp(t.app),Cu(t.app),t.backend==="webgpu"&&ar(t),it.setStage("сцена меню",Rn.background);const{buildMenuBackground:n}=await te(async()=>{const{buildMenuBackground:s}=await import("./menu-background.BcL3u8m1.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));We=await n(t.app),window.__blendarsBackgroundReady=!0,Au(),it.setStage("готово",1),W.setStatus(""),await it.hide(),window.__blendarsInteractive=!0,console.info("[blendars] boot complete",t.backend)}catch(e){console.error("[blendars] boot failed",e),it.setError("Не удалось запустить рендер. Проверьте поддержку WebGPU/WebGL2 в браузере."),window.__blendarsInteractive=!0}}async function Lu(){const e=new URLSearchParams(location.search).get("bootDelay");if(!e)return;const t=Number(e);!Number.isFinite(t)||t<=0||await new Promise(n=>setTimeout(n,Math.min(t,3e4)))}async function Au(){try{const{probeServiceWorker:e}=await te(async()=>{const{probeServiceWorker:n}=await import("./capabilities.Vl_UvQZj.js");return{probeServiceWorker:n}},[]),t=await e("/blend-ars/sw.js");console.info(t==="registered"?"[blendars] Service Worker зарегистрирован: оффлайн-оболочка доступна":`[blendars] Service Worker: ${t} — оффлайн-старт недоступен`)}catch(e){console.warn("[blendars] регистрация Service Worker не удалась",e)}}function Qt(e){return Tn??=Ru(e),Tn}async function Ru(e){const{initEngine:t}=await te(async()=>{const{initEngine:a}=await import("./engine-bootstrap.Dm7KRjCY.js");return{initEngine:a}},__vite__mapDeps([8,2])),n=document.createElement("canvas");n.className="game-canvas",n.style.zIndex="0",document.body.insertBefore(n,la),jo=n;const s=qt??"webgl2";return t(n,{physics:!0,deviceTypes:s==="webgl2"?["webgl2","webgpu"]:["webgpu","webgl2"],skipAdapterProbe:s==="webgpu"&&qt!==null,onStage:(a,r)=>{r===1?e?.(a,Rn.decoders):e?.(a,Rn.device)}})}const Tu=5,Pu=1e3,Mu=3;function ar(e){let t=0;wn?.();let n=null;const s=d=>{fs(null),ua("webgl2",{persist:!1,restoreScene:!1,reason:d})};let o=e.app.frame,a=0;const r=window.setInterval(()=>{if(document.hidden){o=e.app.frame;return}const d=e.app.frame;d===o?(a++,a>=Mu&&(window.clearInterval(r),s("кадры не идут — вероятно, WebGPU завис на первом кадре"))):(a=0,o=d)},Pu);wn=()=>{window.clearInterval(r),n?.(),n=null},te(async()=>{const{watchWebGpuErrors:d}=await import("./engine-bootstrap.Dm7KRjCY.js");return{watchWebGpuErrors:d}},__vite__mapDeps([8,2])).then(({watchWebGpuErrors:d})=>{if(Le){wn?.();return}n=d(e.device,u=>{t++,console.warn(`[blendars] webgpu error #${t}: ${u.slice(0,200)}`),(Iu(u)||t>=Tu)&&(window.clearInterval(r),s(u))})})}function Iu(e){return/out of memory|not enough memory/i.test(e)}async function ua(e,t){if(Le)return;Le=!0,ze.setBusy(!0),t.reason&&console.warn("[blendars] смена рендера:",t.reason.slice(0,200));const{probeWebGpuAdapter:n}=await te(async()=>{const{probeWebGpuAdapter:a}=await import("./engine-bootstrap.Dm7KRjCY.js");return{probeWebGpuAdapter:a}},__vite__mapDeps([8,2])),s=setTimeout(()=>{W.setStatus("Рендер переключается дольше обычного… если не идёт — F9")},25e3);if(e==="webgpu"){const a=await n();if(!a){ze.setUnavailable("WebGPU не поддерживается этим браузером"),W.setStatus("WebGPU не поддерживается этим браузером"),clearTimeout(s),ze.setBusy(!1),Le=!1;return}a.stalled?console.warn("[blendars] зонд WebGPU не ответил — пробуем по явному запросу"):a.software&&W.setStatus(`WebGPU: софтверный адаптер (${a.label||"без описания"}) — рендер может упасть`);const{confirmWebgpuSwitch:r}=await te(async()=>{const{confirmWebgpuSwitch:u}=await import("./confirm-dialog.DpA-HaJF.js");return{confirmWebgpuSwitch:u}},[]);if(!await r()){W.setStatus("Остались на WebGL2 — WebGPU не подтверждён"),clearTimeout(s),ze.setBusy(!1),Le=!1;return}}const o=dr();o.setStage("смена рендера…");try{wn?.(),wn=null,o.setStage("смена рендера: остановка движка…"),se?.destroy(),se=null,window.__blendarsSceneReady=!1,cr(),lr(),Vo(null),We?.destroy(),We=null;const a=await Tn;Tn=null,Pn=null,hs.setApp(null),ps?.(),ps=null,a?.detachResize(),a?.app.destroy(),jo?.remove(),jo=null,qt=e,t.persist&&fs(e),o.setStage(`смена рендера: движок ${e.toUpperCase()}…`);const r=await Qt();Pn=r.backend,window.__blendarsEngine={backend:r.backend},window.__blendarsApp=r.app,ze.setBackend(r.backend),hs.setApp(r.app),r.backend==="webgpu"&&ar(r),r.backend!==e&&W.setStatus(`${e.toUpperCase()} недоступен — рендер: ${r.backend.toUpperCase()}`);const d=t.restoreScene===!1?null:ms;if(d)o.done(),await ir(W,d);else{ms=null,o.setStage("смена рендера: сцена меню…");const{buildMenuBackground:u}=await te(async()=>{const{buildMenuBackground:f}=await import("./menu-background.BcL3u8m1.js");return{buildMenuBackground:f}},__vite__mapDeps([5,2,6,7]));We=await u(r.app),da(W,"menu"),W.setBusy(!1),r.backend===e&&W.setStatus(""),o.done()}}catch(a){if(console.error("[blendars] смена рендера не удалась",a),t.allowRetry!==!1&&e!=="webgl2"){o.done(),qt="webgl2",fs(null),Le=!1,ze.setBusy(!1),await ua("webgl2",{persist:!1,allowRetry:!1});return}o.fail("не удалось сменить рендер"),W.setStatus("Не удалось сменить рендер — перезагрузите страницу (F9)")}finally{clearTimeout(s),ze.setBusy(!1),Le=!1}}async function $u(){Le||Pn&&await ua(Pn==="webgpu"?"webgl2":"webgpu",{persist:!0})}async function Fu(e){if(!Le){e.setBusy(!0);try{if(await Qt(),new URLSearchParams(location.search).get("scene")==="smoke"){const{buildSmokeScene:t}=await te(async()=>{const{buildSmokeScene:n}=await import("./smoke-scene.C4r09Tql.js");return{buildSmokeScene:n}},__vite__mapDeps([9,2]));We?.destroy(),We=null,t((await Qt()).app)}e.setStatus("Ангар появится на этапе 4"),e.setBusy(!1)}catch(t){console.error("[blendars] enter game failed",t),e.setStatus("Не удалось открыть сцену"),e.setBusy(!1)}}}async function ir(e,t){if(Le)return;e.setBusy(!0),e.setStatus(t==="maserati"?"Загрузка сцены: мазерати…":"Загрузка сцены…");const n=dr();try{We?.destroy(),We=null;const s=await Qt(),{buildVehicleScene:o}=await te(async()=>{const{buildVehicleScene:a}=await import("./vehicle-scene.BldK0Eyy.js");return{buildVehicleScene:a}},__vite__mapDeps([10,2,8,6]));se=await o(s.app,a=>n.setStage(a),{body:t,onAssetProgress:(a,r)=>n.setStage(a,r)}),da(e,"scene"),e.setBusy(!1),e.setStatus("WASD / стрелки — ехать, пробел — ручник, R — сброс на месте, Q — плечо камеры"),ms=t,window.__blendarsSceneReady=!0,Du(s.app),ju(s.app),Vo(()=>Ou()),n.done()}catch(s){console.error("[blendars] vehicle scene failed",s),e.setStatus("Не удалось загрузить сцену"),n.fail(String(s?.message??s)),e.setBusy(!1)}}async function rr(e){se?.destroy(),se=null,ms=null,window.__blendarsSceneReady=!1,Vo(null);const t=await Qt(),{buildMenuBackground:n}=await te(async()=>{const{buildMenuBackground:s}=await import("./menu-background.BcL3u8m1.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));We=await n(t.app),da(e,"menu"),e.setBusy(!1),e.setStatus(""),cr(),lr()}function Ou(){const e=se?.root.findByName("camera"),t=e?.script?.get(Sd);if(!e||!t)return null;const n=(o,a)=>typeof o=="number"&&Number.isFinite(o)?o:a,s=(o,a,r)=>o<a?a:o>r?r:o;return{read:()=>({yaw:n(t._manualYaw,0),lift:n(t._manualLift,0),zoom:n(t._zoom,1),shoulder:n(t.shoulder,1),distance:n(t.distance,6.4),height:n(t.height,2.5),fov:e.camera?n(e.camera.fov,60):60}),write:o=>{o.yaw!==void 0&&(t._manualYaw=s(o.yaw,-180,180)),o.lift!==void 0&&(t._manualLift=s(o.lift,-.6,3.4)),o.zoom!==void 0&&(t._zoom=s(o.zoom,.55,1.7)),o.shoulder!==void 0&&(t.shoulder=o.shoulder),o.distance!==void 0&&(t.distance=s(o.distance,3,15)),o.height!==void 0&&(t.height=s(o.height,1,6)),o.fov!==void 0&&e.camera&&(e.camera.fov=s(o.fov,40,90))},reset:()=>{t.resetLook()}}}async function Bu(){const e=(t,n)=>{W.setRecordState(t,n)};try{if(!_t){const{GameRecorder:t}=await te(async()=>{const{GameRecorder:o}=await import("./video-recorder.T8uFKfef.js");return{GameRecorder:o}},__vite__mapDeps([11,2,1])),n=Tn;if(n===null){e("error","движок не поднят, запись невозможна");return}const s=(await n.catch(()=>null))?.app??null;if(s===null){e("error","сначала войди в сцену");return}_t=new t(s,{onState:(o,a)=>e(o,a),onProgress:o=>W.setRecordProgress(o)},{frameRate:Fi(),width:ml(s.graphicsDevice.canvas.width||window.innerWidth),quality:Oi(),keyFrameInterval:Bi(),sound:$o(),attachAudio:o=>se?.audio?.attachRecordStream(o)??(()=>{})})}if(_t.recording){const t=await _t.stop();t>0&&e("idle",`файл ${(t/1048576).toFixed(1)} МБ сохранён`)}else await _t.start()}catch(t){e("error",t instanceof Error?t.message:"запись недоступна")}}function Du(e){const t=()=>se?.root.findByName("vehicle")?.script?.get(Yi)??null,n=se?Wd(e,se.root,Fo):null,s=se?lu(e,Fo):null,o=se?.root.findByName("vehicle"),a=o?Rd(e,o):null,r=()=>a?.view??null,d=()=>n?.list()??[],u=()=>s?.view??null,f=()=>{const S=se?.root.findByName("camera")?.forward;return S?Math.atan2(S.x,-S.z):null},p=()=>{const I=se?.root.findByName("vehicle")?.getPosition();return I?{x:I.x,z:I.z}:null},g=document.createElement("div");g.style.cssText="position:fixed;left:0;top:0;width:0;height:0;padding-top:env(safe-area-inset-top);visibility:hidden;pointer-events:none",document.body.append(g);let v=0;const y=()=>{const I=Number.parseFloat(getComputedStyle(g).paddingTop);v=Number.isFinite(I)?I:0};y(),window.addEventListener("resize",y),window.addEventListener("orientationchange",y);let h=null,x=null,_=null,C=null,c=!0,E=null;const k=()=>{we("toggle")},w=()=>{s?.abort(),te(async()=>{const{showGameOverCard:I}=await import("./game-over-card.DvNDJg6E.js");return{showGameOverCard:I}},__vite__mapDeps([12,2])).then(({showGameOverCard:I})=>{c&&(E?.(),E=I({max:a?.view.max??ds,onReturn:()=>{E=null,rr(W)}}))})};e.on("lives:hit",k),e.on("lives:depleted",w);const T=tu({getHeading:f,getVehicle:p,getCheckpoints:d,readRace:u,read:t,readLives:r,clusterHost:W.clusterHost,safeTop:()=>v});h=Zd(e,T.layers),h.active?document.documentElement.classList.add("hud-in-canvas"):(h=null,T.destroy(),x=Ed(t,W.clusterHost),_=Qd(f,p,d,u),C=Ud(r)),Bo=()=>{c=!1,e.off("lives:hit",k),e.off("lives:depleted",w),E?.(),E=null,a?.destroy(),C?.destroy(),C=null,_t?.destroy(),_t=null,document.documentElement.classList.remove("hud-in-canvas"),h?.destroy(),h=null,x?.destroy(),_?.destroy(),n?.destroy(),s?.destroy(),window.removeEventListener("resize",y),window.removeEventListener("orientationchange",y),g.remove()}}function cr(){Bo?.(),Bo=null}function ju(e){se&&te(async()=>{const{attachTouchControls:t}=await import("./touch-controls.EqhnkIv9.js");return{attachTouchControls:t}},__vite__mapDeps([13,2])).then(({attachTouchControls:t})=>{se&&(Do=t(e,se.root).destroy)})}function lr(){Do?.(),Do=null}function dr(){const e=document.createElement("div");e.className="loading",ii(e);const t=document.createElement("div");t.className="loading__title",t.textContent="СЦЕНА";const n=document.createElement("div");n.className="loading__bar loading__bar--unknown";const s=document.createElement("div");s.className="loading__fill",n.append(s);const o=document.createElement("div");return o.className="loading__stage",o.style.opacity="0.8",o.style.fontSize="13px",o.style.textTransform="uppercase",e.append(t,n,o),document.body.append(e),{setStage(a,r){if(o.textContent=a,r===void 0||!Number.isFinite(r)){n.classList.add("loading__bar--unknown");return}n.classList.remove("loading__bar--unknown"),s.style.width=`${Math.round(Math.min(1,Math.max(0,r))*100)}%`},done(){e.remove()},fail(a){n.hidden=!0,o.textContent=`ошибка: ${a}`,setTimeout(()=>e.remove(),4e3)}}}window.addEventListener("keydown",e=>{e.key==="F9"&&location.reload()});export{hl as A,yl as B,om as C,Sd as D,_l as E,wl as F,Sl as G,An as H,em as I,bs as J,Qu as K,Yc as L,qu as M,nm as V,is as a,Dt as b,sm as c,yt as d,Ju as e,Ku as f,qc as g,Vu as h,Xu as i,$i as j,Wu as k,Ao as l,Yi as m,Gu as n,Yu as o,vo as p,Zu as q,Wn as r,Ro as s,Ll as t,gt as u,we as v,Ai as w,zu as x,Uu as y,tm as z};
