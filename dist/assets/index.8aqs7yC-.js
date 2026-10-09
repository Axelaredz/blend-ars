const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/music-player.Dg1qCssf.js","assets/music-audio.DNu4TXPq.js","assets/playcanvas.pl-89mBG.js","assets/finish-card.BU7UHCI5.js","assets/boot-preset.CqsmDHES.js","assets/menu-background.7JduhFlu.js","assets/engine-sound.NEffSnqL.js","assets/look-gestures.BhGm2xnc.js","assets/engine-bootstrap.DOKILe95.js","assets/smoke-scene.N2ScIsGo.js","assets/vehicle-scene.gpKvc69E.js","assets/video-recorder.CIjkjVzd.js","assets/game-over-card.BC8oVBan.js","assets/touch-controls.Cbl88970.js"])))=>i.map(i=>d[i]);
import{_ as ae,E as Xt,T as Po,C as zc,M as is,a as gi,b as Zi,S as Vc,B as Wc,V as yi,c as Yc,d as Kc,e as Jc,f as Xc,g as qc,A as _i,F as xi,P as Qc}from"./playcanvas.pl-89mBG.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const vi="blendars-loading",Zc=`
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
`;function el(){if(document.getElementById(vi))return;const e=document.createElement("style");e.id=vi,e.textContent=Zc,document.head.append(e)}const tl="/blend-ars/assets/loader.CPCrwQQc.webp",nl="#282828",wi="blendars-splash",sl=`
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
    background-color: ${nl};
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
`;function er(e){if(!document.getElementById(wi)){const s=document.createElement("style");s.id=wi,s.textContent=sl,document.head.append(s)}if(e.querySelector(":scope > .splash-logo")){e.classList.add("splash-host");return}const t=document.createElement("div");t.className="splash-logo";const n=document.createElement("img");n.src=tl,n.alt="Blendars",t.append(n),e.prepend(t),e.classList.add("splash-host")}class ol{root;fill;bar;stageEl;bytesEl;errorEl;lastPercent=-1;lastBytesText="";lastStage="";constructor(t,n={}){if(this.root=document.createElement("div"),this.root.className="loading",el(),er(this.root),this.root.setAttribute("role","progressbar"),this.root.setAttribute("aria-valuemin","0"),this.root.setAttribute("aria-valuemax","100"),this.root.setAttribute("aria-valuenow","0"),this.root.setAttribute("aria-label","Загрузка"),n.title!==void 0){const o=document.createElement("h1");o.className="loading__title",o.textContent=n.title,this.root.append(o)}this.bar=document.createElement("div"),this.bar.className="loading__bar loading__bar--unknown",this.fill=document.createElement("div"),this.fill.className="loading__fill",this.bar.append(this.fill),this.bar.removeAttribute("aria-valuenow");const s=document.createElement("div");s.className="loading__row",this.stageEl=document.createElement("span"),this.stageEl.className="loading__stage",this.stageEl.textContent="старт",this.bytesEl=document.createElement("span"),this.bytesEl.className="loading__bytes",this.bytesEl.textContent="",s.append(this.stageEl,this.bytesEl),this.errorEl=document.createElement("div"),this.errorEl.className="loading__error",this.errorEl.hidden=!0,this.root.append(this.bar,s,this.errorEl),t.append(this.root)}setStage(t,n){t!==this.lastStage&&(this.stageEl.textContent=t,this.lastStage=t);const s=n!==void 0&&Number.isFinite(n);if(this.bar.classList.toggle("loading__bar--unknown",!s),s){const o=Math.round(Math.min(1,Math.max(0,n))*100);o!==this.lastPercent&&(this.fill.style.width=`${o}%`,this.root.setAttribute("aria-valuenow",String(o)),this.lastPercent=o)}}setError(t){this.bar.hidden=!0,this.stageEl.textContent="ошибка",this.errorEl.textContent=t,this.errorEl.hidden=!1}updateFromResources(){if(typeof performance.getEntriesByType!="function")return;const t=performance.getEntriesByType("resource");let n=0,s=0;for(const i of t)i.name.indexOf(location.origin)===0&&(n+=i.encodedBodySize||i.transferSize||0,s=Math.max(s,i.responseEnd||0));if(n<=0)return;const o=`${al(n)} загружено`;o!==this.lastBytesText&&(this.bytesEl.textContent=o,this.lastBytesText=o)}hide(){return this.root.setAttribute("aria-hidden","true"),this.root.classList.add("hidden"),new Promise(t=>{let n=!1;const s=()=>{n||(n=!0,this.root.remove(),t())};this.root.addEventListener("transitionend",s,{once:!0}),setTimeout(s,400)})}}function al(e){return e<1024?`${e} Б`:e<1024*1024?`${(e/1024).toFixed(0)} КБ`:`${(e/(1024*1024)).toFixed(1)} МБ`}const tr="/blend-ars/assets/LilitaOne-Regular.C8J_njg9.ttf",il=new URL("/blend-ars/assets/fullscreen.C4xFj3BF.svg",import.meta.url).href,rl=new URL("/blend-ars/assets/fullscreen-exit.D85sBYy_.svg",import.meta.url).href,cl=new URL("/blend-ars/assets/info.BdEiL0Sf.svg",import.meta.url).href,ll=new URL("/blend-ars/assets/book-open.CLVm05VY.svg",import.meta.url).href,dl=new URL("/blend-ars/assets/trophy.DpYLSMCP.svg",import.meta.url).href,Ei=new URL("/blend-ars/assets/gear_six.TA3VDyxO.svg",import.meta.url).href,ul=new URL("/blend-ars/assets/music-note.BpgtDFsX.svg",import.meta.url).href,ml=new URL("/blend-ars/assets/package.BDtnf6Kx.svg",import.meta.url).href,pl=new URL("/blend-ars/assets/flag.CeS1AlXY.svg",import.meta.url).href,fl=new URL("/blend-ars/assets/garage.D_BJEZuB.svg",import.meta.url).href,hl=new URL("/blend-ars/assets/storefront.e4K1ebmi.svg",import.meta.url).href,bl=new URL("/blend-ars/assets/truck.rvSKQmy5.svg",import.meta.url).href,gl=new URL("/blend-ars/assets/coupe.DdXCwqWg.svg",import.meta.url).href,yl=new URL("/blend-ars/assets/x.D2ii0gML.svg",import.meta.url).href,_l=new URL("/blend-ars/assets/list.DXUiLcf_.svg",import.meta.url).href,xl=new URL("/blend-ars/assets/triangle-left.DPdzCyZ0.svg",import.meta.url).href,Wm=new URL("/blend-ars/assets/stop-square.Cvj1GcXd.svg",import.meta.url).href,Ym=new URL("/blend-ars/assets/arrows_clockwise.Toz6NZFk.svg",import.meta.url).href,nr="/blend-ars/assets/ui-click.DcT3uYBZ.wav",vl={click:1,toggle:1.22,window:.86},wl=.5;let sr=()=>.5,et=null,vs=null,Kt=null,Si=!1;function El(e){sr=e}function Sl(){if(Si)return;Si=!0;const e=window.AudioContext??window.webkitAudioContext;if(e!==void 0){try{et=new e}catch{et=null;return}fetch(nr).then(t=>t.arrayBuffer()).then(t=>et?.decodeAudioData(t)).then(t=>{vs=t??null}).catch(()=>{vs=null})}}function Le(e="click"){const t=wl*sr();if(t>0){if(vs!==null&&et!==null){et.state==="suspended"&&et.resume().catch(()=>{});const n=et.createBufferSource();n.buffer=vs,n.playbackRate.value=vl[e];const s=et.createGain();s.gain.value=t,n.connect(s).connect(et.destination),n.start();return}Kt===null&&(Kt=new Audio(nr),Kt.preload="auto"),Kt.volume=t,Kt.currentTime=0,Kt.play().catch(()=>{})}}function Mt(e){const t=n=>{if(!n.isPrimary||n.pointerType==="mouse"&&n.button!==0)return;const s=n.target;if(!(s instanceof Element)||s.closest('[disabled], [aria-disabled="true"]')||s.closest('input[type="range"]'))return;if(s.closest('input[type="checkbox"], .modes__card, [role="switch"]')){Le("toggle");return}s.closest('button, .mitem, [role="button"], .dlg__close')&&Le("click")};return e.addEventListener("pointerdown",t,!0),()=>e.removeEventListener("pointerdown",t,!0)}function ms(e){const t=n=>{const s=n.target;s instanceof HTMLInputElement&&s.type==="range"&&Le("click")};return e.addEventListener("change",t,!0),()=>e.removeEventListener("change",t,!0)}const kl=`
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
`;function Ps(e){const t=document.createElement("div");if(t.className="dlg",t.hidden=!0,t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label",e.title),!document.getElementById("dlg-style")){const c=document.createElement("style");c.id="dlg-style",c.textContent=kl,document.head.append(c)}const n=document.createElement("div");n.className="dlg__panel";const s=document.createElement("h2");s.className="dlg__title",s.textContent=e.title;const o=document.createElement("div");return o.className="dlg__body",o.append(e.body),n.append(s,o),t.append(n),document.body.append(t),{root:t,open(){t.hidden=!1},close(){t.hidden=!0},destroy(){t.remove()}}}const Cl=[{body:"truck",title:"Джип",note:"Грузовик. Родное шасси, грузовая физика.",icon:bl},{body:"maserati",title:"Мазерати",note:"GT3-обвес на том же шасси.",icon:gl}],Nl=`
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
`;function Ll(e){if(!document.getElementById("game-modes-style")){const o=document.createElement("style");o.id="game-modes-style",o.textContent=Nl,document.head.append(o)}const t=document.createElement("div");t.className="modes";const n=Cl.map(o=>{const i=document.createElement("button");i.className="modes__card",i.type="button",i.dataset.body=o.body;const c=document.createElement("span");c.className="modes__art",c.style.setProperty("--modes-icon",`url(${JSON.stringify(o.icon)})`);const p=document.createElement("span");p.className="modes__title",p.textContent=o.title;const l=document.createElement("p");return l.className="modes__note",l.textContent=o.note,i.append(c,p,l),i.addEventListener("pointerdown",f=>{f.preventDefault(),!i.disabled&&e(o.body)}),t.append(i),i}),s=Ps({title:"Режимы игры",body:t});return{dialog:s,open(){s.open()},setBusy(o){for(const i of n)i.disabled=o},destroy(){s.destroy()}}}const Al={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:8,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:6,fill:1.05,rimLeft:6.15,rimRight:6.3,spot:7.05,fog:.005,gamma:1,gammaStrength:.5,toneMapping:2,sunElevation:15,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:.3}},shadows:{val:{cascades:4,distribution:.95,blend:.12,distance:320,resolution:4096,bias:0,normalBias:.05}},postfx:{on:!0,val:{bloom:.1,bloomBlur:16,bloomThreshold:.2,vignette:0,vignetteInner:0,vignetteOuter:.5,vignetteCurvature:.2,taa:0,taaJitter:.95,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:1,fps:0,msaa:!0}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},Rl={version:1,physics:{on:{engineBraking:!0,dragForce:!0,rollingResistance:!0,lateralGripAssist:!0,wheelGrip:!0,rollInfluence:!0,suspStiffness:!0,suspDamping:!0,suspCompression:!0,suspTravel:!0,suspForce:!0,suspRelVel:!0,antiRoll:!0,inertiaScale:!0,highSpeedLock:!0,highSpeedLockAt:!0,camTurnRate:!0,camFollowRate:!0,skidThreshold:!0},val:{engineBraking:.15,dragForce:1.75,rollingResistance:.02,lateralGripAssist:1.5,wheelGrip:4,rollInfluence:.15,suspStiffness:20,suspDamping:2.3,suspCompression:4.4,suspTravel:.35,suspForce:2e4,suspRelVel:2,antiRoll:.68,inertiaScale:1.3,highSpeedLock:.55,highSpeedLockAt:100,camTurnRate:3.5,camFollowRate:11,skidThreshold:.15}},lighting:{val:{exposure:.5,key:5,fill:.3,rimLeft:.5,rimRight:.5,spot:2,fog:.0035,gamma:0,gammaStrength:1.2,toneMapping:2,sunElevation:9,sunAzimuth:135,turbidity:3,rayleigh:2.2,mieCoefficient:.005,mieDirectionalG:.8,skyLuminance:1}},shadows:{val:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3}},postfx:{on:!1,val:{bloom:0,bloomBlur:8,bloomThreshold:.6,vignette:0,vignetteInner:0,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.48,dof:0,dofFocus:1,dofRange:40,dofRadius:1,dofNear:1,grading:0,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:0}},sound:{on:{engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},vol:{engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1}},hud:{on:{stats:!0,record:1280}},graphics:{val:{scale:.5,fps:30,msaa:!1}},recording:{val:{fps:30,quality:"high",keyFrame:2,sound:!0}}},Tl=[{key:"armored-truck-5t-300hp",name:"Бронированный грузовик — 5 т, 300 л.с.",note:"Тяжёлая машина: огромная инерция поворота, крен не валит, ручник срабатывает как тормоз. Дизель: пик момента на 1700 об/мин, отсечка 3400.",val:{mass:5e3,engineTorque:1260,peakTorqueRpm:1700,maxRpm:3400,finalDrive:7.5,brakeForce:11e3,engineBraking:.22,dragForce:4,rollingResistance:.03,lateralGripAssist:2.4,wheelGrip:5,rollInfluence:.12,antiRoll:1.2,inertiaScale:2.8,inertiaRoll:1.9,inertiaPitch:1.6,suspStiffness:26,suspDamping:2.6,suspCompression:5.2,suspTravel:.45,suspForce:7e4,highSpeedLock:.5,highSpeedLockAt:90}},{key:"muscle-car-4t-500hp",name:"Muscle car — 4 т, 500 л.с.",note:"Кузов на мягких пружинах: нос гуляет, на скорости ложится на борт и переворачивается. Атмосферник: пик 4200 об/мин, отсечка 5600.",val:{mass:4e3,engineTorque:850,peakTorqueRpm:4200,maxRpm:5600,finalDrive:6.5,brakeForce:15e3,engineBraking:.1,dragForce:2,rollingResistance:.015,lateralGripAssist:.6,wheelGrip:4.2,rollInfluence:.8,antiRoll:.25,inertiaScale:1.8,inertiaRoll:.6,inertiaPitch:.9,suspStiffness:22,suspDamping:2.4,suspCompression:4.6,suspTravel:.34,suspForce:62e3,highSpeedLock:.6,highSpeedLockAt:130}}],or="blendars.presets.v1",ar="blendars-settings",ir=1;let ge={active:null,list:[]},ki=!1;function it(){if(ki)return ge;ki=!0;try{const e=localStorage.getItem(or);if(!e)return ge;const t=JSON.parse(e);if(!t||typeof t!="object")return ge;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const i=Pl(o);i&&s.push(i)}ge={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ge}function Pl(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function pn(){try{localStorage.setItem(or,JSON.stringify(ge))}catch{}}function qo(){return it().list.slice().sort((t,n)=>n.created-t.created)}function ws(){return it().active}function Ml(){const e=it();return e.active?e.list.find(t=>t.id===e.active)??null:null}function Qo(e){it(),ge.active=e,pn()}function qt(e,t,n=Date.now()){it();const s={id:jl(n),name:e.trim()||gt(new Date(n)),created:n,data:t};return ge.list.push(s),ge.active=s.id,pn(),s}function Il(e,t){const s=it().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,pn(),!0):!1}function rr(e,t){const s=it().list.find(o=>o.id===e);return s?(s.data=t,pn(),!0):!1}function $l(e){it();const t=ge.list.findIndex(n=>n.id===e);t<0||(ge.list.splice(t,1),ge.active===e&&(ge.active=null),pn())}function gt(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function Fl(){it(),ge={active:null,list:[]},pn()}function Bl(e){const t={app:ar,version:ir,name:e.name,created:e.created,data:e.data},n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=`${Dl(e.name)}.json`,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Ol(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==ar||n.version!==ir||!n.data||typeof n.data!="object")return null;const s={data:n.data};return typeof n.name=="string"&&(s.name=n.name),typeof n.created=="number"&&Number.isFinite(n.created)&&(s.created=n.created),s}function Dl(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function jl(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const cr="blendars.physics-presets.v1",ba="blendars-physics",ga=1;let ue={active:null,list:[]},Ci=!1;function rt(){if(Ci)return ue;Ci=!0;try{const e=localStorage.getItem(cr);if(!e)return ue;const t=JSON.parse(e);if(!t||typeof t!="object")return ue;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const i=Hl(o);i&&s.push(i)}ue={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return ue}function Hl(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Bt(){try{localStorage.setItem(cr,JSON.stringify(ue))}catch{}}function Zo(){return rt().list.slice().sort((e,t)=>t.created-e.created)}function ea(){return rt().active}function ta(e){rt(),ue.active=e,Bt()}function lr(e,t,n=Date.now()){rt();const s={id:xr(n),name:e.trim()||_t(new Date(n)),created:n,data:t};return ue.list.push(s),ue.active=s.id,Bt(),s}function dr(e,t){const s=rt().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,Bt(),!0):!1}function ur(e,t){const s=rt().list.find(o=>o.id===e);return s?(s.data=t,Bt(),!0):!1}function mr(e){rt();const t=ue.list.findIndex(n=>n.id===e);t<0||(ue.list.splice(t,1),ue.active===e&&(ue.active=null),Bt())}function pr(){rt(),ue={active:null,list:[]},Bt()}function fr(e){rt();let t=0;for(const n of e){const s=n.created??Date.now()+t,o=n.name?.trim()||_t(new Date(s));ue.list.some(c=>c.name===o&&c.created===s)||(ue.list.push({id:xr(s),name:o,created:s,data:n.data}),t++)}return t>0&&Bt(),t}function _t(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function hr(e){_r(`${Gl(e.name)}.json`,{app:ba,version:ga,...yr(e)})}function br(e){_r("physics-presets.json",{app:ba,version:ga,presets:e.map(yr)})}function gr(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==ba||n.version!==ga)return null;if(Array.isArray(n.presets)){const o=[];for(const i of n.presets){if(!i||typeof i!="object")continue;const c=Ni(i);c&&o.push(c)}return o.length>0?{items:o}:null}const s=Ni(n);return s?{items:[s]}:null}function yr(e){return{name:e.name,created:e.created,data:e.data}}function Ni(e){if(!e.data||typeof e.data!="object")return null;const t={data:e.data};return typeof e.name=="string"&&(t.name=e.name),typeof e.created=="number"&&Number.isFinite(e.created)&&(t.created=e.created),t}function _r(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=e,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Gl(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"physics-preset"}function xr(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const vr="blendars.camera-presets.v1",Ul="blendars.camera-views.v1",ya="blendars-camera",_a=1;let oe={active:null,list:[]},Li=!1;function ct(){if(Li)return oe;Li=!0;try{const e=localStorage.getItem(vr);if(!e)return oe={active:null,list:zl()},oe.list.length>0&&kt(),oe;const t=JSON.parse(e);if(!t||typeof t!="object")return oe;const n=t,s=[];if(Array.isArray(n.list))for(const o of n.list){const i=Vl(o);i&&s.push(i)}oe={active:typeof n.active=="string"?n.active:null,list:s}}catch{}return oe}function zl(){try{const e=localStorage.getItem(Ul);if(!e)return[];const t=JSON.parse(e);if(!t||typeof t!="object")return[];const n=t.list;if(!Array.isArray(n))return[];const s=[];for(const o of n){if(!o||typeof o!="object")continue;const i=o;typeof i.id!="string"||!i.id||!i.view||typeof i.view!="object"||s.push({id:i.id,name:typeof i.name=="string"&&i.name?i.name:"Без имени",created:typeof i.created=="number"&&Number.isFinite(i.created)?i.created:0,data:i.view})}return s}catch{return[]}}function Vl(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function kt(){try{localStorage.setItem(vr,JSON.stringify(oe))}catch{}}function na(){return ct().list.slice().sort((e,t)=>t.created-e.created)}function sa(){return ct().active}function wr(e){ct(),oe.active=e,kt()}function oa(e,t,n=Date.now()){ct();const s={id:Mr(n),name:e.trim()||Fe(new Date(n)),created:n,data:t};return oe.list.push(s),oe.active=s.id,kt(),s}function Er(e,t){const s=ct().list.find(o=>o.id===e);return s?(s.name=t.trim()||s.name,kt(),!0):!1}function Sr(e,t){const s=ct().list.find(o=>o.id===e);return s?(s.data=t,kt(),!0):!1}function kr(e){ct();const t=oe.list.findIndex(n=>n.id===e);t<0||(oe.list.splice(t,1),oe.active===e&&(oe.active=null),kt())}function Cr(){ct(),oe={active:null,list:[]},kt()}function Nr(e){ct();let t=0;for(const n of e){const s=n.created??Date.now()+t,o=n.name?.trim()||Fe(new Date(s));oe.list.some(c=>c.name===o&&c.created===s)||(oe.list.push({id:Mr(s),name:o,created:s,data:n.data}),t++)}return t>0&&kt(),t}function Fe(e=new Date){const t=n=>n<10?`0${n}`:`${n}`;return`${t(e.getDate())}.${t(e.getMonth()+1)}.${e.getFullYear()} ${t(e.getHours())}:${t(e.getMinutes())}`}function Lr(e){Pr(`${Wl(e.name)}.json`,{app:ya,version:_a,...Tr(e)})}function Ar(e){Pr("camera-presets.json",{app:ya,version:_a,presets:e.map(Tr)})}function Rr(e){let t;try{t=JSON.parse(e)}catch{return null}if(!t||typeof t!="object")return null;const n=t;if(n.app!==ya||n.version!==_a)return null;if(Array.isArray(n.presets)){const o=[];for(const i of n.presets){if(!i||typeof i!="object")continue;const c=Ai(i);c&&o.push(c)}return o.length>0?{items:o}:null}const s=Ai(n);return s?{items:[s]}:null}function Tr(e){return{name:e.name,created:e.created,data:e.data}}function Ai(e){if(!e.data||typeof e.data!="object")return null;const t={data:e.data};return typeof e.name=="string"&&(t.name=e.name),typeof e.created=="number"&&Number.isFinite(e.created)&&(t.created=e.created),t}function Pr(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=e,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Wl(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"camera-preset"}function Mr(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}let Ir=null;function xa(e){Ir=e}function Ne(){return Ir?.()??null}const we={yaw:0,lift:0,zoom:1,shoulder:1,distance:6.4,height:2.5,fov:60},aa=["yaw","lift","zoom","distance","height","fov"],Ri={yaw:{label:"Поворот",min:-180,max:180,step:1,unit:"°"},lift:{label:"Наклон",min:-.6,max:3.4,step:.1,unit:" м"},zoom:{label:"Зум",min:.55,max:1.7,step:.01,unit:"×"},distance:{label:"Дистанция",min:3,max:15,step:.1,unit:" м"},height:{label:"Высота",min:1,max:6,step:.1,unit:" м"},fov:{label:"Обзор (fov)",min:40,max:90,step:1,unit:"°"}},Mo=[[-1,"Слева"],[0,"Центр"],[1,"Справа"]];function Ti(e){if(!e||typeof e!="object")return null;const t=e,n=(o,i)=>{const c=t[o];return typeof c=="number"&&Number.isFinite(c)?c:i};return[...aa,"shoulder"].some(o=>typeof t[o]=="number")?{yaw:n("yaw",we.yaw),lift:n("lift",we.lift),zoom:n("zoom",we.zoom),shoulder:n("shoulder",we.shoulder),distance:n("distance",we.distance),height:n("height",we.height),fov:n("fov",we.fov)}:null}function Ct(e){let t={active:null,list:[]},n=!1;const s=()=>{if(n)return t;n=!0;try{const l=localStorage.getItem(e.storageKey);if(!l)return t;const f=JSON.parse(l);if(!f||typeof f!="object")return t;const m=f,h=[];if(Array.isArray(m.list))for(const x of m.list){const g=Yl(x);g&&h.push(g)}t={active:typeof m.active=="string"?m.active:null,list:h}}catch{}return t},o=()=>{try{localStorage.setItem(e.storageKey,JSON.stringify(t))}catch{}},i=(l=new Date)=>{const f=m=>m<10?`0${m}`:`${m}`;return`${f(l.getDate())}.${f(l.getMonth()+1)}.${l.getFullYear()} ${f(l.getHours())}:${f(l.getMinutes())}`},c=l=>({name:l.name,created:l.created,data:l.data});return{id:e.id,title:e.title,list(){return s().list.slice().sort((l,f)=>f.created-l.created)},activeId(){return s().active},setActive(l){s(),t.active=l,o()},add(l,f,m=Date.now()){s();const h={id:Ii(m),name:l.trim()||i(new Date(m)),created:m,data:f};return t.list.push(h),t.active=h.id,o(),h},addMany(l){s();let f=0;for(const m of l){const h=m.created??Date.now()+f,x=m.name?.trim()||i(new Date(h));t.list.some(b=>b.name===x&&b.created===h)||(t.list.push({id:Ii(h),name:x,created:h,data:m.data}),f++)}return f>0&&o(),f},rename(l,f){const m=s().list.find(h=>h.id===l);return m?(m.name=f.trim()||m.name,o(),!0):!1},update(l,f){const m=s().list.find(h=>h.id===l);return m?(m.data=f,o(),!0):!1},remove(l){const f=s().list.findIndex(m=>m.id===l);f<0||(t.list.splice(f,1),t.active===l&&(t.active=null),o())},clear(){s(),t={active:null,list:[]},o()},downloadFile(l){Mi(`${Kl(l.name)}.json`,{app:e.fileTag,version:e.fileVersion,...c(l)})},downloadBundle(l){Mi(`${e.fileBaseName}.json`,{app:e.fileTag,version:e.fileVersion,presets:l.map(c)})},parseFile(l){let f;try{f=JSON.parse(l)}catch{return null}if(!f||typeof f!="object")return null;const m=f;if(m.app!==e.fileTag||m.version!==e.fileVersion)return null;if(Array.isArray(m.presets)){const x=[];for(const g of m.presets){if(!g||typeof g!="object")continue;const b=Pi(g);b&&x.push(b)}return x.length>0?{items:x}:null}const h=Pi(m);return h?{items:[h]}:null},defaultName:i}}function Yl(e){if(!e||typeof e!="object")return null;const t=e;return typeof t.id!="string"||!t.id?null:{id:t.id,name:typeof t.name=="string"&&t.name?t.name:"Без имени",created:typeof t.created=="number"&&Number.isFinite(t.created)?t.created:0,data:t.data}}function Pi(e){if(!e.data||typeof e.data!="object")return null;const t={data:e.data};return typeof e.name=="string"&&(t.name=e.name),typeof e.created=="number"&&Number.isFinite(e.created)&&(t.created=e.created),t}function Mi(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),s=URL.createObjectURL(n),o=document.createElement("a");o.href=s,o.download=e,document.body.append(o),o.click(),o.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Kl(e){return e.replace(/[\\/:*?"<>|]+/g,"-").slice(0,60)||"preset"}function Ii(e){return`${e.toString(36)}-${Math.random().toString(36).slice(2,8)}`}const Jl=Ct({id:"sound",title:"Звук",storageKey:"blendars.sound-presets.v1",fileTag:"blendars-sound",fileVersion:1,fileBaseName:"sound-presets"}),Xl=Ct({id:"lighting",title:"Свет",storageKey:"blendars.lighting-presets.v1",fileTag:"blendars-lighting",fileVersion:1,fileBaseName:"lighting-presets"}),ql=Ct({id:"shadows",title:"Тени",storageKey:"blendars.shadows-presets.v1",fileTag:"blendars-shadows",fileVersion:1,fileBaseName:"shadows-presets"}),Ql=Ct({id:"postfx",title:"Post FX",storageKey:"blendars.postfx-presets.v1",fileTag:"blendars-postfx",fileVersion:1,fileBaseName:"postfx-presets"}),Zl=Ct({id:"hud",title:"Интерфейс",storageKey:"blendars.hud-presets.v1",fileTag:"blendars-hud",fileVersion:1,fileBaseName:"hud-presets"}),ed=Ct({id:"touch",title:"Управление",storageKey:"blendars.touch-presets.v1",fileTag:"blendars-touch",fileVersion:1,fileBaseName:"touch-presets"}),td=Ct({id:"graphics",title:"Графика",storageKey:"blendars.graphics-presets.v1",fileTag:"blendars-graphics",fileVersion:1,fileBaseName:"graphics-presets"}),nd=Ct({id:"recording",title:"Запись",storageKey:"blendars.recording-presets.v1",fileTag:"blendars-recording",fileVersion:1,fileBaseName:"recording-presets"}),sd={id:"physics",title:"Физика",list:Zo,activeId:ea,setActive:ta,add:(e,t,n)=>lr(e,t,n??Date.now()),addMany:fr,rename:dr,update:ur,remove:mr,clear:pr,downloadFile:hr,downloadBundle:br,parseFile:gr,defaultName:_t},od={id:"camera",title:"Камера",list:na,activeId:sa,setActive:wr,add:(e,t,n)=>oa(e,t,n??Date.now()),addMany:Nr,rename:Er,update:Sr,remove:kr,clear:Cr,downloadFile:Lr,downloadBundle:Ar,parseFile:Rr,defaultName:Fe},va="blendars.sound-effects.v3",wa="blendars.sound-effects.v2",$r=[["engine","Двигатель"],["road","Шум качения"],["skid","Скрежет шин"],["shift","Переключение передач"],["impact","Удары кузова"],["landing","Посадка на колёса"],["music","Фоновая музыка"],["uiClick","Клики меню"]],Fr=$r.map(([e])=>e),Br={engine:!0,road:!0,skid:!0,shift:!0,impact:!0,landing:!0,music:!0,uiClick:!0},ad={engine:1,road:.4,skid:1,shift:1,impact:1,landing:1,music:.6,uiClick:1},Oe={...Br},Ae={...ad},je={engineTorque:{label:"Момент двигателя (Н·м)",def:520,off:520,min:200,max:1600,decimals:0,desc:"Пик момента мотора до коробки: разгон и тяга в горку."},peakTorqueRpm:{label:"Обороты пика момента",def:1700,off:1700,min:800,max:6e3,decimals:0,desc:"На этих оборотах мотор тянет сильнее всего; ниже и выше — слабее."},maxRpm:{label:"Отсечка двигателя",def:4200,off:4200,min:2e3,max:8e3,decimals:0,desc:"Потолок оборотов: вместе с главной парой задаёт максимальную скорость."},finalDrive:{label:"Главная пара",def:7,off:7,min:3,max:12,decimals:2,desc:"Множитель всех передач: больше — динамичнее, но ниже потолок скорости."},brakeForce:{label:"Сила тормозов (Н)",def:6500,off:6500,min:2e3,max:2e4,decimals:0,desc:"Тормозная сила на колесо: чем больше, тем резче машина встаёт."},mass:{label:"Масса кузова (кг)",def:2200,off:2200,min:1200,max:8e3,decimals:0,desc:"Вес кузова: влияет на разгон, тормозной путь и работу подвески."},engineBraking:{label:"Торможение двигателем",def:.15,off:.07,min:0,max:.4,decimals:2,desc:"Как сильно машина замедляется с отпущенным газом (доля тормозов)."},dragForce:{label:"Сопротивление воздуха",def:1.75,off:0,min:0,max:4,decimals:2,desc:"Аэродинамика: задаёт упор в воздух на скорости и потолок разгона."},rollingResistance:{label:"Сопротивление качения",def:.02,off:0,min:0,max:.06,decimals:3,desc:"Ход по покрытию: 0,01 — асфальт, 0,02 — грунт (вязнет без газа)."},lateralGripAssist:{label:"Помощь бокового сцепа",def:1.5,off:0,min:0,max:8,decimals:1,desc:"Гасит боковой снос: больше — машина едет туда, куда смотрит нос."},wheelGrip:{label:"Сцепление колёс",def:4,off:2.7,min:1,max:10,decimals:1,desc:"Сцепление шин с покрытием: меньше — раньше срывается в юз."},rollInfluence:{label:"Крен (перенос нагрузки)",def:.3,off:.08,min:0,max:1.2,decimals:2,desc:"Насколько кузов кренится в повороте, нагружая внешние колёса."},suspStiffness:{label:"Жёсткость пружины",def:20,off:20,min:5,max:80,decimals:1,desc:"Упругость подвески: выше — собраннее, но трясёт на кочках."},suspDamping:{label:"Демпфер (распускание)",def:2.3,off:2.3,min:.5,max:8,decimals:2,desc:"Отбой: как быстро пружина распускается и гасит раскачку."},suspCompression:{label:"Демпфер (сжатие)",def:4.4,off:4.4,min:.5,max:12,decimals:2,desc:"Сжатие: как подвеска принимает кочки и жёсткие посадки."},suspTravel:{label:"Ход подвески",def:.35,off:.35,min:.1,max:.8,decimals:2,desc:"Длина хода штока в метрах: больше — мягче, но сильнее кренится."},suspForce:{label:"Предел силы пружины (Н)",def:2e4,off:2e4,min:5e3,max:15e4,decimals:0,desc:"Потолок силы пружины: не даёт кузову лечь на грунт при посадке."},suspRelVel:{label:"Демпфер и скорость кузова",def:1,off:1,min:0,max:2,decimals:2,desc:"Какую долю вертикальной скорости кузова видит демпфер."},antiRoll:{label:"Стабилизатор (рычаг)",def:0,off:0,min:0,max:2.5,decimals:2,desc:"Связывает пружины оси: мешает крену в повороте и раскачке."},inertiaScale:{label:"Инерция поворота (yaw)",def:1.7,off:1,min:.3,max:3.5,decimals:2,desc:"Сопротивление развороту кузова: больше — ленивее руль."},inertiaRoll:{label:"Инерция крена (переворот)",def:1.2,off:1,min:.3,max:2.5,decimals:2,desc:"Масса крена: сколько кузов качается вбок и как охотно ложится."},inertiaPitch:{label:"Инерция тангажа (клевок)",def:1.2,off:1,min:.3,max:2.5,decimals:2,desc:"Клевок носом: как кузов клюёт на тормозе и приседает на газе."},highSpeedLock:{label:"Спад угла руля (доля)",def:.55,off:.4,min:.2,max:1,decimals:2,desc:"Доля руля, остающаяся на скорости спада: меньше — нет срыва."},highSpeedLockAt:{label:"Скорость спада руля",def:100,off:80,min:50,max:200,decimals:0,unit:"kmh",desc:"Скорость, на которой угол руля падает до доли выше."},camTurnRate:{label:"Камера: скорость поворота",def:3.5,off:2.2,min:1,max:6,decimals:1,desc:"Как быстро камера доворачивается вслед за машиной."},camFollowRate:{label:"Камера: сглаживание",def:11,off:9,min:4,max:20,decimals:0,desc:"Жёсткость погони: больше — камера плотнее держит машину."},skidThreshold:{label:"Порог звука юза",def:.15,off:.3,min:0,max:.5,decimals:2,desc:"Порог срыва, с которого слышен визг покрышек."}},De=Object.keys(je),Ea="blendars.physics.v1",me={},ye={};id();function id(){for(const e of De)me[e]=!0,ye[e]=je[e].def}function rd(){try{const e=localStorage.getItem(Ea);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:null,o=typeof n.val=="object"&&n.val!==null?n.val:null;for(const i of De){const c=je[i],p=s?.[i];typeof p=="boolean"&&(me[i]=p);const l=o?.[i];typeof l=="number"&&Number.isFinite(l)&&(ye[i]=Math.min(c.max,Math.max(c.min,l)))}}catch{}}function Qt(){try{localStorage.setItem(Ea,JSON.stringify({on:me,val:ye}))}catch{}}function Km(e){return me[e]?ye[e]:je[e].off}const ps=[];function Jm(e){return ps.push(e),()=>{const t=ps.indexOf(e);t>=0&&ps.splice(t,1)}}const fs=[];function le(){for(const e of fs)e()}function cd(e){return fs.push(e),()=>{const t=fs.indexOf(e);t>=0&&fs.splice(t,1)}}function Zt(){for(const e of ps)e();le()}function Io(e){const t=je[e],n=ye[e];return t.unit==="kmh"?`${Math.round(n)} км/ч`:n.toFixed(t.decimals)}const Or=[0,1,2,3,4],ld=["линейный","филмик","ACES","нейтральный","без тонмаппинга"],st={exposure:{label:"Экспозиция кадра",def:.5,min:.5,max:10,decimals:1},key:{label:"Яркость солнца",def:1,min:0,max:10,decimals:2},fill:{label:"Заполняющий свет",def:.3,min:0,max:15,decimals:2},rimLeft:{label:"Контровой слева",def:.5,min:0,max:15,decimals:2},rimRight:{label:"Контровой справа",def:.5,min:0,max:15,decimals:2},spot:{label:"Верхний софтбокс",def:2,min:0,max:15,decimals:2},fog:{label:"Туман задника",def:.0035,min:0,max:.05,decimals:4},gamma:{label:"Гамма-коррекция (sRGB)",def:1,min:0,max:1,decimals:0,options:[0,1]},gammaStrength:{label:"Сила гаммы",def:1.2,min:.5,max:3,decimals:2},toneMapping:{label:"Тонмаппинг",def:3,min:0,max:4,decimals:0,options:Or},sunElevation:{label:"Высота солнца",def:34,min:-10,max:90,decimals:0},sunAzimuth:{label:"Азимут солнца",def:135,min:0,max:360,decimals:0},turbidity:{label:"Мутность неба",def:3,min:1,max:10,decimals:2},rayleigh:{label:"Рэлеевское рассеяние",def:2.2,min:0,max:5,decimals:2},mieCoefficient:{label:"Ми-рассеяние",def:.005,min:0,max:.05,decimals:3},mieDirectionalG:{label:"Анизотропия Ми",def:.8,min:0,max:.99,decimals:2},skyLuminance:{label:"Яркость неба",def:1,min:0,max:5,decimals:2}},en=Object.keys(st),Sa="blendars.lighting.v1",Ee={};dd();ud();function dd(){for(const e of en)Ee[e]=st[e].def}function ud(){try{const e=localStorage.getItem(Sa);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of en){const i=st[o],c=s?.[o];typeof c=="number"&&Number.isFinite(c)&&(Ee[o]=Math.min(i.max,Math.max(i.min,c)))}}catch{}}function hs(){try{localStorage.setItem(Sa,JSON.stringify({val:Ee}))}catch{}}function md(e){return Ee[e]}function Xm(){return 2**(md("gammaStrength")-1)}const bs=[];function qm(e){return bs.push(e),()=>{const t=bs.indexOf(e);t>=0&&bs.splice(t,1)}}function gs(){for(const e of bs)e();le()}function $i(e){const t=st[e];if(t.options){const n=t.options.indexOf(Ee[e]);return n>=0?n:0}return Math.round((Ee[e]-t.min)/(t.max-t.min)*100)}function pd(e,t){const n=st[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function $o(e){const t=st[e],n=Ee[e];return t.options&&t.options.length===2&&t.options[1]===1?n>=1?"вкл":"выкл":e==="toneMapping"?ld[Or.indexOf(n)]??n.toFixed(t.decimals):n.toFixed(t.decimals)}const fd=[512,1024,2048,4096],He={cascades:{label:"Каскадов",def:2,min:1,max:4,decimals:0,options:[1,2,3,4]},distribution:{label:"Раскладка каскадов",def:.7,min:0,max:1,decimals:2},blend:{label:"Бесшовность каскадов",def:.12,min:0,max:.3,decimals:2},distance:{label:"Дальность теней",def:320,min:50,max:500,decimals:0},resolution:{label:"Разрешение атласа",def:4096,min:0,max:3,decimals:0,options:fd},bias:{label:"Смещение тени",def:0,min:0,max:1,decimals:2},normalBias:{label:"Смещение по нормали",def:0,min:0,max:.5,decimals:2}},vt=Object.keys(He),ka="blendars.shadows.v1",ce={};hd();bd();function hd(){for(const e of vt)ce[e]=He[e].def}function bd(){try{const e=localStorage.getItem(ka);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.val=="object"&&n.val!==null?n.val:null;for(const o of vt){const i=He[o],c=s?.[o];if(!(typeof c!="number"||!Number.isFinite(c))){if(i.options){const l=i.options[c]===c?c:i.options.indexOf(c);l>=0&&l<i.options.length&&(ce[o]=Number(i.options[l]));continue}ce[o]=Math.min(i.max,Math.max(i.min,c))}}}catch{}}function tn(){try{localStorage.setItem(ka,JSON.stringify({val:ce}))}catch{}}function Qm(e){return ce[e]}const ys=[];function Zm(e){return ys.push(e),()=>{const t=ys.indexOf(e);t>=0&&ys.splice(t,1)}}function $n(){for(const e of ys)e();le()}function Fo(e,t){const n=He[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function gd(e,t){const n=He[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function Bo(e){const t=He[e];return e==="distance"?`${Math.round(ce[e])} м`:ce[e].toFixed(t.decimals)}const ot={bloom:{label:"Ореол (bloom)",def:.05,min:0,max:.1,decimals:3},bloomBlur:{label:"Мягкость ореола",def:8,min:1,max:16,decimals:0,options:[1,2,4,8,16]},bloomThreshold:{label:"Порог ореола",def:.6,min:0,max:2,decimals:2},vignette:{label:"Виньетка",def:0,min:0,max:1,decimals:2},vignetteInner:{label:"Виньетка: начало",def:0,min:0,max:1,decimals:2},vignetteOuter:{label:"Виньетка: край",def:1.25,min:.5,max:2,decimals:2},vignetteCurvature:{label:"Виньетка: кромка",def:.5,min:.2,max:1,decimals:2},taa:{label:"Временное сглаживание",def:0,min:0,max:1,decimals:0,options:[0,1]},taaJitter:{label:"Сглаживание: джиттер",def:0,min:0,max:1,decimals:2},dof:{label:"Глубина резкости",def:1,min:0,max:1,decimals:0,options:[0,1]},dofFocus:{label:"Фокус (м)",def:1,min:1,max:60,decimals:1},dofRange:{label:"Зона фокуса (м)",def:40,min:1,max:40,decimals:1},dofRadius:{label:"Сила размытия",def:1,min:1,max:8,decimals:1},dofNear:{label:"Размывать передний план",def:1,min:0,max:1,decimals:0,options:[0,1]},grading:{label:"Цветокоррекция",def:1,min:0,max:1,decimals:0,options:[0,1]},brightness:{label:"Яркость",def:1,min:.5,max:1.5,decimals:2},contrast:{label:"Контраст",def:1,min:.5,max:1.5,decimals:2},saturation:{label:"Насыщенность",def:1,min:0,max:2,decimals:2},fringing:{label:"Аберрация",def:0,min:0,max:100,decimals:0},sharpness:{label:"Резкость",def:0,min:0,max:1,decimals:2}},wt=Object.keys(ot),Ca="blendars.postfx.v1",Na="blendars.postfx.on",te={},Dr=!0;let at=Dr;yd();_d();function yd(){for(const e of wt)te[e]=ot[e].def;at=Dr}function _d(){try{const e=localStorage.getItem(Ca);if(e){const n=JSON.parse(e);if(n&&typeof n=="object"){const s=n,o=typeof s.val=="object"&&s.val!==null?s.val:null;for(const i of wt){const c=ot[i],p=o?.[i];typeof p=="number"&&Number.isFinite(p)&&(te[i]=Math.min(c.max,Math.max(c.min,p)))}}}const t=localStorage.getItem(Na);t!==null&&(at=t!=="0")}catch{}}function tt(){try{localStorage.setItem(Ca,JSON.stringify({val:te})),localStorage.setItem(Na,at?"1":"0")}catch{}}function Oo(e){return te[e]}function rs(){return at}function Do(e){at!==e&&(at=e,tt(),xt())}const La="blendars.hud.v1";let nn=!0,Et=1280;const Re=[],ia=["fps","cpu","draw","vram"],xd={fps:"Частота кадра (FPS и мс)",cpu:"Загрузка CPU (обновление / рендер / физика)",draw:"Вызовы отрисовки и шейдеры",vram:"Видеопамять и разрешение"};let sn={fps:!0,cpu:!0,draw:!0,vram:!0};function vd(){try{const e=localStorage.getItem(La);if(!e)return;const t=JSON.parse(e);if(t&&typeof t=="object"){const n=t.on;if(n&&typeof n=="object"){const s=n.stats;typeof s=="number"&&(nn=s!==0);const o=n.record;(o===1280||o===1920||o==="window")&&(Et=o);const i=n.touch;typeof i=="number"&&(Bn=i!==0)}}}catch{}}const Aa="blendars.stats.v1";function wd(){try{const e=localStorage.getItem(Aa);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s={...sn};for(const o of ia){const i=n[o];typeof i=="boolean"&&(s[o]=i)}sn=s}catch{}}function Ed(){try{localStorage.setItem(Aa,JSON.stringify(sn))}catch{}}function Ra(){try{localStorage.setItem(La,JSON.stringify({on:{stats:nn?1:0,record:Et,touch:Bn?1:0}}))}catch{}}function Es(){return nn}function jr(e){if(nn!==e){nn=e,Ra();for(const t of Re)t();le()}}function $e(e){return sn[e]}function Sd(e){return xd[e]}function kd(e,t){if(sn[e]!==t){sn[e]=t,Ed();for(const n of Re)n();le()}}function Cd(){return Et}function ra(e){if(!(e!==1280&&e!==1920&&e!=="window")&&Et!==e){Et=e,Ra();for(const t of Re)t();le()}}function Nd(e){const t=Et==="window"?e:Et;return!Number.isFinite(t)||t<=0?1280:Math.round(t)}function Hr(e){return Re.push(e),()=>{const t=Re.indexOf(e);t>=0&&Re.splice(t,1)}}let Ld="full";function Ad(){return Ld}let Bn=!0;function jo(){return Bn}function Fi(e){if(Bn!==e){Bn=e,Ra();for(const t of Re)t();le()}}const Gr="blendars.touch.v1";let On=1,Dn=1,jn="split",Hn=!1;function Rd(){try{const e=localStorage.getItem(Gr);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t;typeof n.scale=="number"&&n.scale>=.6&&n.scale<=2&&(On=n.scale),typeof n.opacity=="number"&&n.opacity>=.25&&n.opacity<=1&&(Dn=n.opacity),(n.layout==="split"||n.layout==="left"||n.layout==="right")&&(jn=n.layout),typeof n.swap=="boolean"&&(Hn=n.swap)}catch{}}function Ms(){try{localStorage.setItem(Gr,JSON.stringify({scale:On,opacity:Dn,layout:jn,swap:Hn}))}catch{}}function Ho(){return On}function Bi(e){const t=Math.min(Math.max(e,.6),2);if(On!==t){On=t,Ms();for(const n of Re)n();le()}}function Go(){return Dn}function Oi(e){const t=Math.min(Math.max(e,.25),1);if(Dn!==t){Dn=t,Ms();for(const n of Re)n();le()}}function Di(){return jn}function ji(e){if(jn!==e){jn=e,Ms();for(const t of Re)t();le()}}function Hi(){return Hn}function Gi(e){if(Hn!==e){Hn=e,Ms();for(const t of Re)t();le()}}vd();wd();Rd();const _s=[];function ep(e){return _s.push(e),()=>{const t=_s.indexOf(e);t>=0&&_s.splice(t,1)}}function xt(){for(const e of _s)e();le()}function Ui(e,t){const n=ot[e];if(n.options){const s=n.options.indexOf(t);return s>=0?s:0}return Math.round((t-n.min)/(n.max-n.min)*100)}function Td(e,t){const n=ot[e];if(n.options){const o=Math.min(n.options.length-1,Math.max(0,t));return n.options[o]??n.def}const s=n.min+(n.max-n.min)*(t/100);return Number(s.toFixed(n.decimals))}function Uo(e){const t=te[e],n=ot[e];return n.options&&n.options.length===2&&n.options[1]===1?t>=1?"вкл":"выкл":t.toFixed(n.decimals)}Pd();rd();function Pd(){try{const e=localStorage.getItem(va)??localStorage.getItem(wa);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t,s=typeof n.on=="object"&&n.on!==null?n.on:n,o=typeof n.vol=="object"&&n.vol!==null?n.vol:null;for(const i of Object.keys(Br)){const c=s[i];typeof c=="boolean"&&(Oe[i]=c);const p=o?.[i];typeof p=="number"&&Number.isFinite(p)&&(Ae[i]=Math.min(1,Math.max(0,p)))}}catch{}}function Ss(){try{localStorage.setItem(va,JSON.stringify({on:Oe,vol:Ae})),localStorage.removeItem(wa)}catch{}}function Md(e){return Oe[e]?Ae[e]:0}function tp(e){return Ae[e]}function np(e,t){const n=Math.min(1,Math.max(0,t));Ae[e]!==n&&(Ae[e]=n,Ss(),le())}const Id=`@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${JSON.stringify(tr)}) format('truetype');
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
`;function Ft(){return{version:1,physics:{on:{...me},val:{...ye}},lighting:{val:{...Ee}},shadows:{val:{...ce}},postfx:{on:at,val:{...te}},sound:{on:{...Oe},vol:{...Ae}},hud:{on:{stats:nn,record:Et}},graphics:{val:{scale:on,fps:an,msaa:St}},recording:{val:{fps:rn,quality:cn,keyFrame:ln,sound:dn}}}}function zo(){return{on:{...me},val:{...ye}}}function $d(){const e={},t={};for(const n of De)e[n]=!0,t[n]=je[n].def;return{on:e,val:t}}let ca=!1;function Fd(){return ca}function It(e){const t=[];if(!e||typeof e!="object")return{applied:t};ca=!0;try{return Bd(e,t)}finally{ca=!1}}function Vo(e){let t=!1;for(const n of Object.keys(e.on))if(De.includes(n)){const s=e.on[n];s!==void 0&&(me[n]=s,t=!0)}for(const n of Object.keys(e.val))if(De.includes(n)){const s=je[n];if(s&&typeof s.min=="number"&&typeof s.max=="number"){const o=e.val[n];typeof o=="number"&&(ye[n]=Math.min(s.max,Math.max(s.min,o)),t=!0)}}t&&(Qt(),Zt())}function zi(e){if(!e||typeof e!="object")return null;const t=e,n={},s={};let o=!1;if(t.on&&typeof t.on=="object")for(const[i,c]of Object.entries(t.on))typeof c=="boolean"&&(n[i]=c,o=!0);if(t.val&&typeof t.val=="object")for(const[i,c]of Object.entries(t.val))typeof c=="number"&&Number.isFinite(c)&&(s[i]=c,o=!0);return o?{on:n,val:s}:null}function Bd(e,t){const n=e,s=(E,A,d)=>typeof E=="number"&&Number.isFinite(E)?Math.min(d,Math.max(A,E)):null,o=E=>E&&typeof E=="object"?E:null,i=E=>E&&typeof E=="object"?E:null,c=E=>E&&typeof E=="object"?E:null,p=n.physics&&typeof n.physics=="object"?n.physics:null;if(p){const E=i(p.on),A=o(p.val);let d=!1;for(const C of De){const L=je[C];E&&typeof E[C]=="boolean"&&(me[C]=E[C],d=!0);const S=A?s(A[C],L.min,L.max):null;S!==null&&(ye[C]=S,d=!0)}d&&(Qt(),Zt(),t.push("физика"))}const l=o(n.lighting&&typeof n.lighting=="object"?n.lighting.val:null);if(l){let E=!1;for(const A of en){const d=st[A],C=s(l[A],d.min,d.max);C!==null&&(Ee[A]=C,E=!0)}E&&(hs(),gs(),t.push("свет"))}const f=o(n.shadows&&typeof n.shadows=="object"?n.shadows.val:null);if(f){let E=!1;for(const A of vt){const d=He[A],C=f[A];if(d.options){const M=d.options[C]===C?C:d.options.indexOf(C);M>=0&&M<d.options.length&&(ce[A]=Number(d.options[M]),E=!0);continue}const L=s(C,d.min,d.max);L!==null&&(ce[A]=L,E=!0)}E&&(tn(),$n(),t.push("тени"))}const m=n.postfx&&typeof n.postfx=="object"?n.postfx:null;if(m){let E=!1;typeof m.on=="boolean"&&(at=m.on,E=!0);const A=o(m.val);if(A)for(const d of wt){const C=ot[d],L=A[d];if(C.options){const M=C.options.indexOf(L);M>=0&&M<C.options.length&&(te[d]=Number(C.options[M]),E=!0);continue}const S=s(L,C.min,C.max);S!==null&&(te[d]=S,E=!0)}E&&(tt(),xt(),t.push("Post FX"))}const h=n.sound&&typeof n.sound=="object"?n.sound:null;if(h){const E=i(h.on),A=o(h.vol);let d=!1;for(const C of Fr){E&&typeof E[C]=="boolean"&&(Oe[C]=E[C],d=!0);const L=A?s(A[C],0,1):null;L!==null&&(Ae[C]=L,d=!0)}d&&(Ss(),t.push("звук"))}const x=n.hud&&typeof n.hud=="object"?n.hud:null,g=x&&typeof x.on=="object"?x.on:null;if(g&&typeof g.stats=="boolean"){jr(g.stats);const E=g.record;(E===1280||E===1920||E==="window")&&ra(E),t.push("интерфейс")}const b=c(n.graphics&&typeof n.graphics=="object"?n.graphics.val:null);if(b){let E=!1;const A=b.scale;(A===.5||A===.75||A===1)&&(Ma(A),E=!0);const d=b.fps;(d===0||d===30||d===60||d===120)&&(Ia(d),E=!0),typeof b.msaa=="boolean"&&(Gn(b.msaa),E=!0),te.taa>0&&St&&(Gn(!1),E=!0),E&&(Kn(),Is(),t.push("графика"))}const w=c(n.recording&&typeof n.recording=="object"?n.recording.val:null);if(w){let E=!1;const A=w.fps;(A===24||A===30||A===60)&&(qr(A),E=!0);const d=w.quality;(d==="low"||d==="medium"||d==="high")&&(Qr(d),E=!0);const C=w.keyFrame;(C===1||C===2||C===4)&&(Zr(C),E=!0),typeof w.sound=="boolean"&&(ec(w.sound),E=!0),E&&(Jn(),Xn(),t.push("запись"))}return{applied:t}}const Ta="blendars.graphics.v1";let on=1,an=0,St=!0;const Pa="blendars.gfx-preset.v1",Od={phone:{label:"Телефон",graphics:{scale:.5,fps:30,msaa:!1},shadows:{cascades:1,distribution:.6,blend:.1,distance:100,resolution:512,bias:.5,normalBias:.3},postfxOn:!1,postfx:{bloom:0,vignette:0,fringing:0,sharpness:0,grading:0,taa:0,taaJitter:0}},balanced:{label:"Оптимальный",graphics:{scale:.75,fps:60,msaa:!0},shadows:{cascades:2,distribution:.7,blend:.12,distance:220,resolution:2048,bias:.7,normalBias:.4},postfxOn:!0,postfx:{bloom:.04,bloomBlur:8,bloomThreshold:.6,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:.5,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:0,sharpness:.25}},ultra:{label:"Ультра",graphics:{scale:1,fps:0,msaa:!0},shadows:{cascades:4,distribution:.7,blend:.12,distance:320,resolution:4096,bias:1,normalBias:.5},postfxOn:!0,postfx:{bloom:.06,bloomBlur:8,bloomThreshold:0,vignette:.35,vignetteInner:.55,vignetteOuter:1.25,vignetteCurvature:.5,taa:0,taaJitter:1,dof:0,grading:1,brightness:1,contrast:1,saturation:1,fringing:1,sharpness:.25}}};let Yn="phone";function Dd(){const e=window.matchMedia("(pointer: coarse)").matches,t="ontouchstart"in window,n=navigator.hardwareConcurrency??4,s=navigator.deviceMemory??4,o=Math.min(window.screen.width,window.screen.height)<768;return(e||t)&&(n<=4||s<=4||o)}function jd(){return Yn}function Ur(){try{localStorage.setItem(Pa,Yn)}catch{}}function Hd(){try{const e=localStorage.getItem(Pa);(e==="phone"||e==="balanced"||e==="ultra")&&(Yn=e)}catch{}}function zr(e){const t=Od[e];Yn=e,Ur(),Ma(t.graphics.scale),Ia(t.graphics.fps);const n=t.postfx.taa??0;Gn(n>0?!1:t.graphics.msaa);for(const s of vt)ce[s]=t.shadows[s]??He[s].def;tn(),$n(),at=t.postfxOn;for(const s of wt){const o=t.postfx[s];typeof o=="number"&&(te[s]=o)}tt(),xt()}const xs=[];function Gd(){try{const e=localStorage.getItem(Ta);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.scale===.5||s.scale===.75||s.scale===1)&&(on=s.scale),(s.fps===0||s.fps===30||s.fps===60||s.fps===120)&&(an=s.fps),typeof s.msaa=="boolean"&&(St=s.msaa)}catch{}}function Kn(){try{localStorage.setItem(Ta,JSON.stringify({val:{scale:on,fps:an,msaa:St}}))}catch{}}function Is(){for(const e of xs)e();le()}function Vr(){return on}function Wr(){return an}function Tt(){return St}const Ud=4;function sp(){return St?Ud:1}function Ma(e){on!==e&&(on=e,Kn(),Is())}function Ia(e){an!==e&&(an=e,Kn(),Is())}function Gn(e){St!==e&&(St=e,Kn(),Is())}function Yr(e){return xs.push(e),()=>{const t=xs.indexOf(e);t>=0&&xs.splice(t,1)}}Gd();Hd();const $a="blendars.recording.v1";let rn=30,cn="high",ln=2,dn=!0;const zd=[];function Vd(){try{const e=localStorage.getItem($a);if(!e)return;const t=JSON.parse(e);if(!t||typeof t!="object")return;const n=t.val;if(!n||typeof n!="object")return;const s=n;(s.fps===24||s.fps===30||s.fps===60)&&(rn=s.fps),(s.quality==="low"||s.quality==="medium"||s.quality==="high")&&(cn=s.quality),(s.keyFrame===1||s.keyFrame===2||s.keyFrame===4)&&(ln=s.keyFrame),typeof s.sound=="boolean"&&(dn=s.sound)}catch{}}function Jn(){try{localStorage.setItem($a,JSON.stringify({val:{fps:rn,quality:cn,keyFrame:ln,sound:dn}}))}catch{}}function Xn(){for(const e of zd)e();le()}function Kr(){return rn}function Jr(){return cn}function Xr(){return ln}function la(){return dn}function qr(e){rn!==e&&(rn=e,Jn(),Xn())}function Qr(e){cn!==e&&(cn=e,Jn(),Xn())}function Zr(e){ln!==e&&(ln=e,Jn(),Xn())}function ec(e){dn!==e&&(dn=e,Jn(),Xn())}Vd();function Wd(){const e=Ml();if(e){const l=It(e.data);l.applied.length>0&&console.info(`[settings] применён пресет «${e.name}»: ${l.applied.join(", ")}`);return}let t=!1;try{t=!!(localStorage.getItem(va)??localStorage.getItem(wa)??localStorage.getItem(Ea)??localStorage.getItem(Sa)??localStorage.getItem(ka)??localStorage.getItem(Ca)??localStorage.getItem(Na)??localStorage.getItem(La)??localStorage.getItem(Aa)??localStorage.getItem(Ta)??localStorage.getItem($a)??localStorage.getItem(Pa))}catch{t=!0}if(t)return;const n=Dd();Yn=n?"phone":"ultra",Ur(),Kn(),tn(),tt();const o=Ft();zr("balanced");const i=Ft();It(n?Rl:Al);const c=Ft();It(o),qt("По умолчанию",o),qt("Оптимальный",i),qt(n?"Телефон":"Ультра",c);const p=qo().find(l=>l.name===(n?"Телефон":"Ультра"));Qo(p?p.id:null),console.info(`[settings] сохранённых настроек нет — созданы пресеты «По умолчанию», «Оптимальный», «${n?"Телефон":"Ультра"}» (активен «${n?"Телефон":"Ультра"}»)`)}Wd();function Yd(){const e=document.createElement("div");e.className="settings",e.hidden=!0,e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Настройки");const t=document.createElement("style");t.textContent=Id;const n=document.createElement("div");n.className="settings__panel";const s=document.createElement("h2");s.className="settings__title",s.textContent="Настройки";const o=document.createElement("p");o.className="settings__hint",o.textContent="Галочка — эффект включён, ползунок — его громкость. Выбор сохраняется в браузере и действует сразу.",o.id="settings-hint",e.setAttribute("aria-describedby",o.id);const i=document.createElement("div");i.className="settings__tabs",i.setAttribute("role","tablist");const c=document.createElement("button");c.className="settings__tab settings__tab--on",c.type="button",c.textContent="Звук",c.setAttribute("role","tab"),c.setAttribute("aria-selected","true");const p=document.createElement("button");p.className="settings__tab",p.type="button",p.textContent="Физика",p.setAttribute("role","tab"),p.setAttribute("aria-selected","false");const l=document.createElement("button");l.className="settings__tab",l.type="button",l.textContent="Освещение",l.setAttribute("role","tab"),l.setAttribute("aria-selected","false");const f=document.createElement("button");f.className="settings__tab",f.type="button",f.textContent="Тени",f.setAttribute("role","tab"),f.setAttribute("aria-selected","false");const m=document.createElement("button");m.className="settings__tab",m.type="button",m.textContent="Post FX",m.setAttribute("role","tab"),m.setAttribute("aria-selected","false");const h=document.createElement("button");h.className="settings__tab",h.type="button",h.textContent="Интерфейс",h.setAttribute("role","tab"),h.setAttribute("aria-selected","false");const x=document.createElement("button");x.className="settings__tab",x.type="button",x.textContent="Управление",x.setAttribute("role","tab"),x.setAttribute("aria-selected","false");const g=document.createElement("button");g.className="settings__tab",g.type="button",g.textContent="Камера",g.setAttribute("role","tab"),g.setAttribute("aria-selected","false");const b=document.createElement("button");b.className="settings__tab",b.type="button",b.textContent="Все настройки",b.setAttribute("role","tab"),b.setAttribute("aria-selected","false");const w=document.createElement("button");w.className="settings__tab",w.type="button",w.textContent="Графика",w.setAttribute("role","tab"),w.setAttribute("aria-selected","false");const E=document.createElement("button");E.className="settings__tab",E.type="button",E.textContent="Запись",E.setAttribute("role","tab"),E.setAttribute("aria-selected","false"),i.append(c,p,l,f,m,h,x,g,w,E,b);const A=a=>{const r=[c,p,l,f,m,h,x,g,w,E,b];for(let u=0;u<r.length;u++){const v=r[u];if(!v)continue;const R=u===a;v.classList.toggle("settings__tab--on",R),v.setAttribute("aria-selected",String(R))}d.hidden=a!==0,S.hidden=a!==1,dt.hidden=a!==2,ut.hidden=a!==3,Ve.hidden=a!==4,Ye.hidden=a!==5,Ce.hidden=a!==6,Ot.hidden=a!==7,Nt.hidden=a!==8,mt.hidden=a!==9,pt.hidden=a!==10,a===7&&Gt(),a===10&&Yt()};c.addEventListener("click",()=>A(0)),p.addEventListener("click",()=>A(1)),l.addEventListener("click",()=>A(2)),f.addEventListener("click",()=>A(3)),m.addEventListener("click",()=>A(4)),h.addEventListener("click",()=>A(5)),x.addEventListener("click",()=>A(6)),g.addEventListener("click",()=>A(7)),w.addEventListener("click",()=>A(8)),E.addEventListener("click",()=>A(9)),b.addEventListener("click",()=>A(10));const d=document.createElement("div");d.className="settings__pane",d.append(o);const C=document.createElement("div");C.className="settings__list";const L={};for(const[a,r]of $r){const u=document.createElement("div");u.className="settings__row";const v=document.createElement("label");v.className="settings__head";const R=document.createElement("span");R.textContent=r;const T=document.createElement("input");T.type="checkbox",T.checked=Oe[a],v.append(R,T);const k=document.createElement("div");k.className="settings__vol",k.classList.toggle("settings__vol--off",!Oe[a]);const P=document.createElement("input");P.type="range",P.min="0",P.max="100",P.step="1",P.value=String(Math.round(Ae[a]*100)),P.setAttribute("aria-label",`Громкость: ${r}`);const y=document.createElement("output");y.className="settings__pct",y.textContent=`${P.value}%`,P.addEventListener("input",()=>{Ae[a]=Number(P.value)/100,y.textContent=`${P.value}%`,Ss(),le()}),k.append(P,y),T.addEventListener("change",()=>{Oe[a]=T.checked,k.classList.toggle("settings__vol--off",!T.checked),Ss(),le()}),L[a]=()=>{T.checked=Oe[a],k.classList.toggle("settings__vol--off",!Oe[a]),P.value=String(Math.round(Ae[a]*100)),y.textContent=`${P.value}%`},u.append(v,k),C.append(u)}d.append(C);const S=document.createElement("div");S.className="settings__pane",S.hidden=!0;const M=document.createElement("div");M.className="physics-tabs";const $=document.createElement("button");$.className="physics-tab physics-tab--on",$.type="button",$.textContent="Тонкая настройка",$.setAttribute("role","tab"),$.setAttribute("aria-selected","true");const N=document.createElement("button");N.className="physics-tab",N.type="button",N.textContent="Пресеты физики",N.setAttribute("role","tab"),N.setAttribute("aria-selected","false"),M.append($,N),S.append(M);const _=document.createElement("div");_.className="settings__block";const I=document.createElement("div");I.className="settings__block",S.append(_,I);const H=document.createElement("p");H.className="settings__hint",H.textContent="Галка включает тюнинг «против скольжения»; выключена — исходное поведение игры.",_.append(H);const B=document.createElement("div");B.className="settings__list",_.append(B);const U=a=>{const r=a==="fine";$.classList.toggle("physics-tab--on",r),N.classList.toggle("physics-tab--on",!r),$.setAttribute("aria-selected",String(r)),N.setAttribute("aria-selected",String(!r)),_.hidden=!r,I.hidden=r};$.addEventListener("click",()=>U("fine")),N.addEventListener("click",()=>U("presets"));let F=()=>{};const z=document.createElement("p");z.className="settings__status",z.setAttribute("role","status");const pe=a=>{const r=$d();let u=0;for(const v of Object.keys(a.val)){if(!(v in r.val))continue;const R=a.val[v];typeof R=="number"&&(r.val[v]=R,u++)}Vo(r),ta(null),F(),K(),z.textContent=`Машина «${a.name}»: задано ${u} параметров, остальные — по умолчанию.`},_e=a=>{const r=zi(a.data);if(!r){z.textContent=`В пресете «${a.name}» нет настроек физики.`;return}Vo(r),ta(a.id),F(),K(),z.textContent=`Применён пресет «${a.name}».`},de=(a,r)=>{const u=document.createElement("div");u.className="settings__presetsection";const v=document.createElement("p");return v.className="settings__presettitle",v.textContent=a,u.append(v,r),u},Se=document.createElement("div");Se.className="settings__presets";for(const a of Tl){const r=document.createElement("div");r.className="settings__preset";const u=document.createElement("div");u.className="settings__presetinfo";const v=document.createElement("span");v.className="settings__presetname",v.textContent=a.name;const R=document.createElement("span");R.className="settings__presetmeta",R.textContent=a.note,u.append(v,R);const T=document.createElement("button");T.className="settings__presetbtn",T.type="button",T.textContent="Применить",T.setAttribute("aria-label",`Применить пресет «${a.name}»`),T.addEventListener("click",()=>pe(a)),r.append(u,T),Se.append(r)}const X=document.createElement("div");X.className="settings__presets";const ne=a=>a>0?_t(new Date(a)):"дата неизвестна",K=()=>{X.replaceChildren();const a=Zo(),r=ea();if(a.length===0){const u=document.createElement("p");u.className="settings__presetempty",u.textContent="Своих пресетов нет: настройте физику и нажмите «Сохранить».",X.append(u);return}for(const u of a){const v=document.createElement("div");v.className="settings__preset";const R=u.id===r;R&&v.classList.add("settings__preset--active");const T=document.createElement("div");T.className="settings__presetinfo";const k=document.createElement("span");k.className="settings__presetname",k.textContent=u.name;const P=document.createElement("span");P.className="settings__presetmeta",P.textContent=ne(u.created),T.append(k,P);const y=document.createElement("button");y.className="settings__presetbtn",y.type="button",y.textContent="Применить",y.disabled=R,y.setAttribute("aria-label",`Применить пресет физики «${u.name}»`),y.addEventListener("click",()=>_e(u));const O=document.createElement("button");O.className="settings__presetbtn",O.type="button",O.textContent="✎",O.title="Переименовать",O.setAttribute("aria-label",`Переименовать пресет ${u.name}`),O.addEventListener("click",()=>{const D=document.createElement("input");D.className="settings__presetnameinput",D.type="text",D.value=u.name,k.replaceWith(D),D.focus(),D.select();const V=()=>{dr(u.id,D.value),K()};D.addEventListener("keydown",Y=>{Y.key==="Enter"&&V(),Y.key==="Escape"&&(Y.stopPropagation(),K())}),D.addEventListener("blur",V)});const j=document.createElement("button");j.className="settings__presetbtn",j.type="button",j.textContent="↓",j.title="Экспорт в файл",j.setAttribute("aria-label",`Экспорт пресета ${u.name} в файл`),j.addEventListener("click",()=>hr(u));const G=document.createElement("button");G.className="settings__presetbtn settings__presetbtn--danger",G.type="button",G.textContent="✕",G.title="Удалить",G.setAttribute("aria-label",`Удалить пресет физики «${u.name}»`),G.addEventListener("click",()=>{window.confirm(`Удалить пресет физики «${u.name}»?`)&&(mr(u.id),K(),z.textContent=`Пресет «${u.name}» удалён.`)}),v.append(T,y,O,j,G),X.append(v)}},Q=document.createElement("div");Q.className="settings__presetnamefield";const q=document.createElement("input");q.type="text",q.value=_t(),q.placeholder="Название пресета",q.setAttribute("aria-label","Название нового пресета физики");const se=document.createElement("button");se.className="settings__presetbtn",se.type="button",se.textContent="Сохранить",se.addEventListener("click",()=>{const a=lr(q.value||_t(),zo());q.value=_t(),K(),z.textContent=`Сохранён пресет «${a.name}».`}),Q.append(q,se);const fe=document.createElement("button");fe.className="settings__resetall",fe.type="button",fe.textContent="Обновить активный пресет",fe.addEventListener("click",()=>{const a=ea();if(!a){z.textContent="Активного пресета нет — сохраните новый.";return}ur(a,zo()),K(),z.textContent="Текущие настройки записаны в активный пресет."});const ie=document.createElement("button");ie.className="settings__resetall",ie.type="button",ie.textContent="Импорт из файла";const he=document.createElement("input");he.type="file",he.accept="application/json,.json",he.hidden=!0,ie.addEventListener("click",()=>he.click()),he.addEventListener("change",()=>{const a=he.files?.[0];he.value="",a&&(async()=>{try{const r=gr(await a.text());if(!r){z.textContent="Это не файл пресета физики.";return}const u=fr(r.items);K(),z.textContent=u===0?"Такие пресеты уже есть.":`Импортировано пресетов: ${u}.`}catch(r){z.textContent=`Не удалось прочитать файл: ${r instanceof Error?r.message:"ошибка чтения"}`}})()});const Te=document.createElement("button");Te.className="settings__resetall",Te.type="button",Te.textContent="Экспорт всех в файл",Te.addEventListener("click",()=>{const a=Zo();if(a.length===0){z.textContent="Экспортировать нечего: пресетов нет.";return}br(a),z.textContent=`Выгружено пресетов: ${a.length}.`});const fn=document.createElement("button");fn.className="settings__resetall",fn.type="button",fn.textContent="Убрать все пресеты",fn.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты физики? Настройки останутся как есть.")&&(pr(),K(),z.textContent="Пресеты удалены, текущие настройки не тронуты.")}),I.append(de("Встроенные машины",Se),de("Свои пресеты",X),Q,fe,ie,Te,fn,he,z),K(),U("fine");const qn={};for(const a of De){const r=je[a],u=document.createElement("div");u.className="settings__row";const v=document.createElement("label");v.className="settings__head";const R=document.createElement("span");R.textContent=r.label;const T=document.createElement("input");T.type="checkbox",T.checked=me[a],v.append(R,T);const k=document.createElement("p");k.className="settings__rowdesc",k.textContent=r.desc;const P=document.createElement("div");P.className="settings__vol",P.classList.toggle("settings__vol--off",!me[a]);const y=document.createElement("input");y.type="range",y.min="0",y.max="100",y.step="1",y.value=String(Math.round((ye[a]-r.min)/(r.max-r.min)*100)),y.setAttribute("aria-label",`Значение: ${r.label}`);const O=document.createElement("output");O.className="settings__pct settings__pct--val",O.textContent=Io(a);const j=document.createElement("button");j.className="settings__reset",j.type="button",j.textContent="↺",j.title="Сбросить по умолчанию",j.setAttribute("aria-label",`Сбросить по умолчанию: ${r.label}`);const G=()=>{T.checked=me[a],P.classList.toggle("settings__vol--off",!me[a]),y.value=String(Math.round((ye[a]-r.min)/(r.max-r.min)*100)),O.textContent=Io(a)};qn[a]=G,y.addEventListener("input",()=>{const D=r.min+(r.max-r.min)*(Number(y.value)/100);ye[a]=Number(D.toFixed(r.decimals)),O.textContent=Io(a),Qt(),Zt()}),T.addEventListener("change",()=>{me[a]=T.checked,P.classList.toggle("settings__vol--off",!T.checked),Qt(),Zt()}),j.addEventListener("click",()=>{me[a]=!0,ye[a]=r.def,G(),Qt(),Zt()}),P.append(y,O,j),u.append(v,k,P),B.append(u)}F=()=>{for(const a of De)qn[a]?.()};const hn=document.createElement("button");hn.className="settings__resetall",hn.type="button",hn.textContent="Сбросить все настройки физики",hn.addEventListener("click",()=>{for(const a of De)me[a]=!0,ye[a]=je[a].def,qn[a]?.();Qt(),Zt()}),S.append(hn);const Ot=document.createElement("div");Ot.className="settings__pane",Ot.hidden=!0;const $s=document.createElement("div");$s.className="physics-tabs";const Ge=document.createElement("button");Ge.className="physics-tab physics-tab--on",Ge.type="button",Ge.textContent="Ракурс",Ge.setAttribute("role","tab"),Ge.setAttribute("aria-selected","true");const Ue=document.createElement("button");Ue.className="physics-tab",Ue.type="button",Ue.textContent="Пресеты камеры",Ue.setAttribute("role","tab"),Ue.setAttribute("aria-selected","false"),$s.append(Ge,Ue),Ot.append($s);const ze=document.createElement("div");ze.className="settings__block";const Qn=document.createElement("div");Qn.className="settings__block",Ot.append(ze,Qn);const Zn=(a,r)=>{const u=Ri[a];return`${a==="zoom"?r.toFixed(2):String(Number(r.toFixed(2)))}${u.unit}`},Fs=document.createElement("p");Fs.className="settings__hint",ze.append(Fs);const Bs=document.createElement("div");Bs.className="settings__list";const ja={};for(const a of aa){const r=Ri[a],u=document.createElement("div");u.className="settings__row";const v=document.createElement("div");v.className="settings__head";const R=document.createElement("span");R.textContent=r.label,v.append(R);const T=document.createElement("div");T.className="settings__vol";const k=document.createElement("input");k.type="range",k.min=String(r.min),k.max=String(r.max),k.step=String(r.step),k.value=String(we[a]),k.setAttribute("aria-label",`Ракурс: ${r.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=Zn(a,we[a]);const y=document.createElement("button");y.className="settings__reset",y.type="button",y.textContent="↺",y.title="Сбросить по умолчанию",y.setAttribute("aria-label",`Сбросить по умолчанию: ${r.label}`),k.addEventListener("input",()=>{const O=Number(k.value);Ne()?.write({[a]:O}),P.textContent=Zn(a,O)}),y.addEventListener("click",()=>{Ne()?.write({[a]:we[a]}),k.value=String(we[a]),P.textContent=Zn(a,we[a])}),ja[a]={slider:k,reset:y,out:P},T.append(k,P,y),u.append(v,T),Bs.append(u)}ze.append(Bs);const Os=document.createElement("div");Os.className="settings__shoulder";const Ds=[],Ha=a=>{for(let r=0;r<Mo.length;r++)Ds[r]?.classList.toggle("settings__presetbtn--on",Mo[r]?.[0]===a)};for(const[a,r]of Mo){const u=document.createElement("button");u.className="settings__presetbtn",u.type="button",u.textContent=r,u.setAttribute("aria-label",`Плечо камеры: ${r}`),u.addEventListener("click",()=>{Ne()?.write({shoulder:a}),Ha(a)}),Ds.push(u),Os.append(u)}ze.append(Os);const Dt=document.createElement("button");Dt.className="settings__resetall",Dt.type="button",Dt.textContent="Сбросить вид (C)",Dt.addEventListener("click",()=>{Ne()?.reset(),Gt()}),ze.append(Dt);const jt=document.createElement("button");jt.className="settings__resetall",jt.type="button",jt.textContent="Сохранить пресет",jt.addEventListener("click",()=>{const a=Ne();if(!a){bn.textContent="Ракурс снимается со сцены: сначала войдите в заезд.";return}const r=oa(ke.value||Fe(),{...a.read()});ke.value=Fe(),Pe(),es("presets"),Z.textContent=`Сохранён пресет «${r.name}» — он активен.`}),ze.append(jt);const bn=document.createElement("p");bn.className="settings__status",bn.setAttribute("role","status"),ze.append(bn);const Z=document.createElement("p");Z.className="settings__status",Z.setAttribute("role","status");const gn=document.createElement("div");gn.className="settings__presets";const Ec=a=>a>0?Fe(new Date(a)):"дата неизвестна",Sc=a=>{const r=Ti(a.data);if(!r){Z.textContent=`В пресете «${a.name}» нет ракурса камеры.`;return}const u=Ne();if(!u){Z.textContent="Камера живёт в сцене: войдите в заезд, чтобы применить ракурс.";return}u.write({...r}),wr(a.id),Gt(),Pe(),Z.textContent=`Применён ракурс «${a.name}».`},Pe=()=>{gn.replaceChildren();const a=na(),r=sa();if(a.length===0){const u=document.createElement("p");u.className="settings__presetempty",u.textContent="Своих пресетов нет: войдите в заезд, выставьте ракурс и нажмите «Сохранить».",gn.append(u);return}for(const u of a){const v=document.createElement("div");v.className="settings__preset";const R=u.id===r;R&&v.classList.add("settings__preset--active");const T=document.createElement("div");T.className="settings__presetinfo";const k=document.createElement("span");k.className="settings__presetname",k.textContent=u.name;const P=document.createElement("span");P.className="settings__presetmeta",P.textContent=Ec(u.created),T.append(k,P);const y=document.createElement("button");y.className="settings__presetbtn",y.type="button",y.textContent=R?"Активен":"Применить",y.disabled=R,y.setAttribute("aria-label",`Применить ракурс «${u.name}»`),y.addEventListener("click",()=>Sc(u));const O=document.createElement("span");O.className="settings__presetbadge",O.textContent="Активен",O.title="Этот ракурс применяется кнопкой «Применить» по умолчанию";const j=document.createElement("button");j.className="settings__presetbtn",j.type="button",j.textContent="✎",j.title="Переименовать",j.setAttribute("aria-label",`Переименовать пресет ${u.name}`),j.addEventListener("click",()=>{const V=document.createElement("input");V.className="settings__presetnameinput",V.type="text",V.value=u.name,k.replaceWith(V),V.focus(),V.select();const Y=()=>{Er(u.id,V.value),Pe()};V.addEventListener("keydown",W=>{W.key==="Enter"&&Y(),W.key==="Escape"&&(W.stopPropagation(),Pe())}),V.addEventListener("blur",Y)});const G=document.createElement("button");G.className="settings__presetbtn",G.type="button",G.textContent="↓",G.title="Экспорт в файл",G.setAttribute("aria-label",`Экспорт пресета ${u.name} в файл`),G.addEventListener("click",()=>Lr(u));const D=document.createElement("button");D.className="settings__presetbtn settings__presetbtn--danger",D.type="button",D.textContent="✕",D.title="Удалить",D.setAttribute("aria-label",`Удалить пресет камеры «${u.name}»`),D.addEventListener("click",()=>{window.confirm(`Удалить пресет камеры «${u.name}»?`)&&(kr(u.id),Pe(),Z.textContent=`Пресет «${u.name}» удалён.`)}),v.append(T,y),R&&v.append(O),v.append(j,G,D),gn.append(v)}},js=document.createElement("div");js.className="settings__presetnamefield";const ke=document.createElement("input");ke.type="text",ke.value=Fe(),ke.placeholder="Название пресета",ke.setAttribute("aria-label","Название нового пресета камеры");const Ht=document.createElement("button");Ht.className="settings__presetbtn",Ht.type="button",Ht.textContent="Сохранить",Ht.addEventListener("click",()=>{const a=Ne();if(!a){Z.textContent="Ракурс снимается со сцены: сначала войдите в заезд.";return}const r=oa(ke.value||Fe(),{...a.read()});ke.value=Fe(),Pe(),Z.textContent=`Сохранён пресет «${r.name}».`}),js.append(ke,Ht);const yn=document.createElement("button");yn.className="settings__resetall",yn.type="button",yn.textContent="Обновить активный пресет",yn.addEventListener("click",()=>{const a=sa();if(!a){Z.textContent="Активного пресета нет — сохраните новый.";return}const r=Ne();if(!r){Z.textContent="Ракурс снимается со сцены: сначала войдите в заезд.";return}Sr(a,{...r.read()}),Pe(),Z.textContent="Текущий ракурс записан в активный пресет."});const _n=document.createElement("button");_n.className="settings__resetall",_n.type="button",_n.textContent="Импорт из файла";const lt=document.createElement("input");lt.type="file",lt.accept="application/json,.json",lt.hidden=!0,_n.addEventListener("click",()=>lt.click()),lt.addEventListener("change",()=>{const a=lt.files?.[0];lt.value="",a&&(async()=>{try{const r=Rr(await a.text());if(!r){Z.textContent="Это не файл пресетов камеры.";return}const u=Nr(r.items);Pe(),Z.textContent=u===0?"Такие пресеты уже есть.":`Импортировано пресетов: ${u}.`}catch(r){Z.textContent=`Не удалось прочитать файл: ${r instanceof Error?r.message:"ошибка чтения"}`}})()});const xn=document.createElement("button");xn.className="settings__resetall",xn.type="button",xn.textContent="Экспорт всех в файл",xn.addEventListener("click",()=>{const a=na();if(a.length===0){Z.textContent="Экспортировать нечего: пресетов нет.";return}Ar(a),Z.textContent=`Выгружено пресетов: ${a.length}.`});const vn=document.createElement("button");vn.className="settings__resetall",vn.type="button",vn.textContent="Убрать все пресеты",vn.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты камеры? Ракурс останется как есть.")&&(Cr(),Pe(),Z.textContent="Пресеты удалены, текущий ракурс не тронут.")}),Qn.append(de("Свои пресеты",gn),js,yn,_n,xn,vn,lt,Z);const Gt=()=>{const a=Ne(),r=a!==null,u=a?a.read():{...we};Fs.textContent=r?"Ракурс меняется живьём. Тяните сцену мышью или пальцем (влево — экран влево), колесо или щипок — расстояние, C — сброс.":"Камера живёт в сцене машины: войдите в заезд, и здесь появятся её числа.",bn.textContent="";for(const v of aa){const R=ja[v];if(!R)continue;const T=u[v];R.slider.value=String(T),R.slider.disabled=!r,R.reset.disabled=!r,R.out.textContent=Zn(v,T)}for(const v of Ds)v.disabled=!r;Ha(u.shoulder),Dt.disabled=!r,jt.disabled=!r,Ht.disabled=!r,ke.disabled=!r},es=a=>{const r=a==="view";Ge.classList.toggle("physics-tab--on",r),Ue.classList.toggle("physics-tab--on",!r),Ge.setAttribute("aria-selected",String(r)),Ue.setAttribute("aria-selected",String(!r)),ze.hidden=!r,Qn.hidden=r};Ge.addEventListener("click",()=>es("view")),Ue.addEventListener("click",()=>es("presets")),Pe(),es("view"),Gt();const dt=document.createElement("div");dt.className="settings__pane",dt.hidden=!0;const Hs=document.createElement("p");Hs.className="settings__hint",Hs.textContent="Ползунок — уровень света (слева от центра — студия, к правому краю — ярче), ↺ — сброс строки. Свет главного экрана меняется сразу и запоминается. «Гамма-коррекция» — аппаратная (движок держит её как вкл/выкл), а «Сила гаммы» — непрерывный подъём полутонов поверх неё: 1 — как есть, каждый шаг вверх удваивает свет.",dt.append(Hs);const Gs=document.createElement("div");Gs.className="settings__list";const Us={};for(const a of en){const r=st[a],u=document.createElement("div");u.className="settings__row";const v=document.createElement("div");v.className="settings__head";const R=document.createElement("span");R.textContent=r.label,v.append(R);const T=document.createElement("div");T.className="settings__vol";const k=document.createElement("input");k.type="range",k.min="0",k.max="100",k.step="1",r.options&&(k.max=String(r.options.length-1)),k.value=String($i(a)),k.setAttribute("aria-label",`Освещение: ${r.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=$o(a);const y=document.createElement("button");y.className="settings__reset",y.type="button",y.textContent="↺",y.title="Сбросить по умолчанию",y.setAttribute("aria-label",`Сбросить по умолчанию: ${r.label}`);const O=()=>{k.value=String($i(a)),P.textContent=$o(a)};Us[a]=O,k.addEventListener("input",()=>{Ee[a]=pd(a,Number(k.value)),P.textContent=$o(a),hs(),gs()}),y.addEventListener("click",()=>{Ee[a]=r.def,O(),hs(),gs()}),T.append(k,P,y),u.append(v,T),Gs.append(u)}dt.append(Gs);const wn=document.createElement("button");wn.className="settings__resetall",wn.type="button",wn.textContent="Сбросить все настройки освещения",wn.addEventListener("click",()=>{for(const a of en)Ee[a]=st[a].def,Us[a]?.();hs(),gs()}),dt.append(wn);const ut=document.createElement("div");ut.className="settings__pane",ut.hidden=!0;const zs=document.createElement("p");zs.className="settings__hint",zs.textContent="Каскады разбивают дальность теней на несколько карт: у ближней детализация выше, поэтому машина отбрасывает резкую тень даже вдали. Один каскад — одна карта на всю дальность. Меняется сразу, даже в заезде.",ut.append(zs);const Vs=document.createElement("div");Vs.className="settings__list";const ts={};for(const a of vt){const r=He[a],u=document.createElement("div");u.className="settings__row";const v=document.createElement("div");v.className="settings__head";const R=document.createElement("span");R.textContent=r.label,v.append(R);const T=document.createElement("div");T.className="settings__vol";const k=document.createElement("input");k.type="range",k.min="0",k.max="100",k.step="1",r.options&&(k.max=String(r.options.length-1)),k.value=String(Fo(a,ce[a])),k.setAttribute("aria-label",`Тени: ${r.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=Bo(a);const y=document.createElement("button");y.className="settings__reset",y.type="button",y.textContent="↺",y.title="Сбросить по умолчанию",y.setAttribute("aria-label",`Сбросить по умолчанию: ${r.label}`);const O=()=>{k.value=String(Fo(a,ce[a])),P.textContent=Bo(a)};ts[a]=O,k.addEventListener("input",()=>{ce[a]=gd(a,Number(k.value)),P.textContent=Bo(a),tn(),$n()}),y.addEventListener("click",()=>{ce[a]=r.def,O(),tn(),$n()}),T.append(k,P,y),u.append(v,T),Vs.append(u)}ut.append(Vs);const En=document.createElement("button");En.className="settings__resetall",En.type="button",En.textContent="Сбросить все настройки теней",En.addEventListener("click",()=>{for(const a of vt)ce[a]=He[a].def,ts[a]?.();tn(),$n()}),ut.append(En);const Ve=document.createElement("div");Ve.className="settings__pane",Ve.hidden=!0;const Ws=document.createElement("p");Ws.className="settings__hint",Ws.textContent="Пост-обработка кадра: ореол вокруг солнца, виньетка, резкость, цветокоррекция и глубина резкости. Главный переключатель снимает всю обработку разом, а TAA включается на вкладке «Графика» — там ему и место, рядом с MSAA. Здесь у него остался только джиттер.",Ve.append(Ws);const Ys=document.createElement("div");Ys.className="settings__row";const Ks=document.createElement("label");Ks.className="settings__head";const Ga=document.createElement("span");Ga.textContent="Пост-обработка включена";const We=document.createElement("input");We.type="checkbox",We.checked=rs(),Ks.append(Ga,We),We.addEventListener("change",()=>Do(We.checked)),Ys.append(Ks),Ve.append(Ys);const Js=document.createElement("div");Js.className="settings__list";const Sn={};for(const a of wt){if(a==="taa")continue;const r=ot[a],u=document.createElement("div");u.className="settings__row";const v=document.createElement("div");v.className="settings__head";const R=document.createElement("span");R.textContent=r.label,v.append(R);const T=document.createElement("div");T.className="settings__vol";const k=document.createElement("input");k.type="range",k.min="0",k.max="100",k.step="1",r.options&&(k.max=String(r.options.length-1)),k.value=String(Ui(a,te[a])),k.setAttribute("aria-label",`Post FX: ${r.label}`);const P=document.createElement("output");P.className="settings__pct settings__pct--val",P.textContent=Uo(a);const y=document.createElement("button");y.className="settings__reset",y.type="button",y.textContent="↺",y.title="Сбросить по умолчанию",y.setAttribute("aria-label",`Сбросить по умолчанию: ${r.label}`);const O=()=>{k.value=String(Ui(a,te[a])),P.textContent=Uo(a)};Sn[a]=O,k.addEventListener("input",()=>{te[a]=Td(a,Number(k.value)),P.textContent=Uo(a),tt(),xt()}),y.addEventListener("click",()=>{te[a]=r.def,O(),tt(),xt()}),T.append(k,P,y),u.append(v,T),Js.append(u)}Ve.append(Js);const kn=document.createElement("button");kn.className="settings__resetall",kn.type="button",kn.textContent="Сбросить все настройки Post FX",kn.addEventListener("click",()=>{for(const a of wt)te[a]=ot[a].def,Sn[a]?.();We.checked=!0,Do(!0),tt(),xt(),Vt()}),Ve.append(kn);const Ye=document.createElement("div");Ye.className="settings__pane",Ye.hidden=!0;const Xs=document.createElement("p");Xs.className="settings__hint",Xs.textContent="Служебные элементы поверх игры. Счётчик кадра живёт в левом верхнем углу на всех экранах; ниже выбирается, из каких строк он состоит.",Ye.append(Xs);const qs=document.createElement("div");qs.className="settings__row";const Qs=document.createElement("label");Qs.className="settings__head";const Ua=document.createElement("span");Ua.textContent="Статистика кадра";const Ut=document.createElement("input");Ut.type="checkbox",Ut.checked=Es(),Qs.append(Ua,Ut),Ut.addEventListener("change",()=>jr(Ut.checked)),qs.append(Qs),Ye.append(qs);const Zs=document.createElement("p");Zs.className="settings__hint",Zs.textContent="Строки счётчика кадра. Если снять все, панель останется пустой плашкой — обновление текста всё равно стоит кадра, поэтому лишние строки лучше не держать включёнными без нужды.",Ye.append(Zs);const eo=document.createElement("div");eo.className="settings__row settings__row--stack";const za={};for(const a of ia){const r=document.createElement("label");r.className="settings__check";const u=document.createElement("input");u.type="checkbox",u.checked=$e(a);const v=document.createElement("span");v.textContent=Sd(a),u.addEventListener("change",()=>kd(a,u.checked)),za[a]=u,r.append(u,v),eo.append(r)}Ye.append(eo);const Ce=document.createElement("div");Ce.className="settings__pane",Ce.hidden=!0;const to=document.createElement("p");to.className="settings__hint",to.textContent="Сенсорное управление появляется только на устройствах с тач-экраном. Галочка прячет педали совсем; ниже — размер, прозрачность, расположение и схема кнопок. Всё сохраняется в браузере и действует сразу.",Ce.append(to);const no=document.createElement("div");no.className="settings__row";const so=document.createElement("label");so.className="settings__head";const Va=document.createElement("span");Va.textContent="Сенсорное управление";const zt=document.createElement("input");zt.type="checkbox",zt.checked=jo(),so.append(Va,zt),zt.addEventListener("change",()=>Fi(zt.checked)),no.append(so),Ce.append(no);const oo=document.createElement("div");oo.className="settings__row";const ao=document.createElement("label");ao.className="settings__head";const Wa=document.createElement("span");Wa.textContent="Размер кнопок",ao.append(Wa);const io=document.createElement("div");io.className="settings__vol";const xe=document.createElement("input");xe.type="range",xe.min="60",xe.max="200",xe.step="5",xe.value=String(Math.round(Ho()*100)),xe.setAttribute("aria-label","Размер сенсорных кнопок");const Cn=document.createElement("output");Cn.className="settings__pct",Cn.textContent=`${xe.value}%`,xe.addEventListener("input",()=>{Bi(Number(xe.value)/100),Cn.textContent=`${xe.value}%`}),io.append(xe,Cn),oo.append(ao,io),Ce.append(oo);const ro=document.createElement("div");ro.className="settings__row";const co=document.createElement("label");co.className="settings__head";const Ya=document.createElement("span");Ya.textContent="Прозрачность",co.append(Ya);const lo=document.createElement("div");lo.className="settings__vol";const ve=document.createElement("input");ve.type="range",ve.min="25",ve.max="100",ve.step="5",ve.value=String(Math.round(Go()*100)),ve.setAttribute("aria-label","Прозрачность сенсорных кнопок");const Nn=document.createElement("output");Nn.className="settings__pct",Nn.textContent=`${ve.value}%`,ve.addEventListener("input",()=>{Oi(Number(ve.value)/100),Nn.textContent=`${ve.value}%`}),lo.append(ve,Nn),ro.append(co,lo),Ce.append(ro);const Nt=document.createElement("div");Nt.className="settings__pane",Nt.hidden=!0;const uo=document.createElement("div");uo.className="settings__backend";const mo=document.createElement("p");mo.className="settings__hint",mo.textContent="Масштаб рендера уменьшает число пикселей, которые движок рисует за кадр: картинка мыльнее, но кадры стабильнее. Лимит кадров держит потолок частоты — помогает на ноутбуках от батареи. MSAA применяется при запуске: после его включения страницу нужно перезагрузить. TAA включается живьём и сглаживает всю сцену — его параметры (джиттер, резкость) задаёт выбранный пресет графики.",Nt.append(mo);const Ke=(a,r,u,v)=>{const R=document.createElement("div");R.className="settings__row";const T=document.createElement("div");T.className="settings__head";const k=document.createElement("span");k.textContent=a,T.append(k);const P=document.createElement("div");P.className="settings__vol",P.style.flexWrap="wrap";const y=[];for(const[j,G]of r){const D=document.createElement("button");D.className="settings__resetall",D.type="button",D.style.marginTop="0",D.style.flex="1 1 auto",D.style.textTransform="none",D.textContent=G,D.addEventListener("click",()=>{v(j),O()}),y.push(D),P.append(D)}const O=()=>{const j=u();for(let G=0;G<r.length;G++)y[G]?.toggleAttribute("disabled",r[G]?.[0]===j)};return O(),R.append(T,P),{row:R,refresh:O}},Ka=Ke("Расположение",[["split","По краям"],["left","Слева"],["right","Справа"]],()=>Di(),a=>{(a==="split"||a==="left"||a==="right")&&ji(a)});Ce.append(Ka.row);const Ja=Ke("Кнопки крестовины",[["normal","▲ газ, ▼ тормоз"],["swap","▲ тормоз, ▼ газ"]],()=>Hi()?"swap":"normal",a=>{Gi(a==="swap")});Ce.append(Ja.row);const po=Ke("Масштаб рендера",[["0.5","50 %"],["0.75","75 %"],["1","100 %"]],()=>String(Vr()),a=>{const r=Number(a);(r===.5||r===.75||r===1)&&Ma(r)}),fo=Ke("Лимит кадров",[["0","Выкл"],["30","30 fps"],["60","60 fps"],["120","120 fps"]],()=>String(Wr()),a=>{const r=Number(a);(r===0||r===30||r===60||r===120)&&Ia(r)}),ho=document.createElement("div");ho.className="settings__row";const bo=document.createElement("label");bo.className="settings__head";const Xa=document.createElement("span");Xa.textContent="Сглаживание MSAA";const Je=document.createElement("input");Je.type="checkbox",Je.checked=Tt(),bo.append(Xa,Je);const ns=document.createElement("span");ns.className="settings__pct";const Ln=()=>{Je.checked=Tt(),ns.textContent=Tt()?"сцена — сразу, интерфейс — после перезагрузки":""};Ln(),Je.addEventListener("change",()=>{Gn(Je.checked),Je.checked&&Oo("taa")>0&&(te.taa=0,tt(),xt()),Ln(),Vt()}),ho.append(bo,ns);const go=document.createElement("div");go.className="settings__row";const yo=document.createElement("label");yo.className="settings__head";const qa=document.createElement("span");qa.textContent="Временное сглаживание TAA";const Xe=document.createElement("input");Xe.type="checkbox",Xe.checked=Oo("taa")>0,yo.append(qa,Xe);const _o=document.createElement("span");_o.className="settings__pct";const kc=.1,Cc=.5,Vt=()=>{const a=Oo("taa")>0;Xe.checked=a,_o.textContent=a?"работает сразу":"включит пост-обработку"};Vt(),Xe.addEventListener("change",()=>{te.taa=Xe.checked?1:0,Xe.checked&&!rs()&&(Do(!0),We.checked=!0),Xe.checked&&te.taaJitter<kc&&(te.taaJitter=Cc,Sn.taaJitter?.()),Xe.checked&&Tt()&&(Gn(!1),Ln()),tt(),xt(),Vt()}),go.append(yo,_o);const xo=Ke("Пресет графики",[["phone","Телефон"],["balanced","Оптимальный"],["ultra","Ультра"]],()=>jd(),a=>{if(!(a!=="phone"&&a!=="balanced"&&a!=="ultra")){zr(a),po.refresh(),fo.refresh(),xo.refresh(),Je.checked=Tt(),ns.textContent=Tt()?"применится после перезагрузки":"",Ln(),Vt();for(const r of vt)ts[r]?.();for(const r of wt)Sn[r]?.();We.checked=rs()}}),vo=document.createElement("p");vo.className="settings__hint",vo.textContent="Рендер: WebGL2 работает везде, WebGPU даёт больше эффектов, но на части телефонов подвисает на первом кадре. Смена бэкенда пересобирает движок и перезагружает сцену.",Nt.append(vo,uo,xo.row,po.row,fo.row,ho,go);const mt=document.createElement("div");mt.className="settings__pane",mt.hidden=!0;const wo=document.createElement("p");wo.className="settings__hint",wo.textContent="Разрешение и частота записи — насколько дорого кодировать. Качество кодека — насколько жирный файл: чем выше, тем чётче картинка и тем сильнее просядет игра во время записи. Всё применяется к следующему нажатию «Запись».",mt.append(wo);const Eo=document.createElement("div");Eo.className="settings__recordslot",mt.append(Eo);const So=document.createElement("div");So.className="settings__row";const ko=document.createElement("label");ko.className="settings__head";const Qa=document.createElement("span");Qa.textContent="Звук в файле";const Wt=document.createElement("input");Wt.type="checkbox",Wt.checked=la(),ko.append(Qa,Wt),Wt.addEventListener("change",()=>ec(Wt.checked)),So.append(ko);const Za=Ke("Разрешение",[["1280","720p"],["1920","1080p"],["window","Как на экране"]],()=>String(Cd()),a=>{if(a==="window"){ra("window");return}(a==="1280"||a==="1920")&&ra(Number(a))}),ei=Ke("Частота записи",[["24","24 fps"],["30","30 fps"],["60","60 fps"]],()=>String(Kr()),a=>{const r=Number(a);(r===24||r===30||r===60)&&qr(r)}),ti=Ke("Качество кодека",[["low","Низкое"],["medium","Среднее"],["high","Высокое"]],()=>Jr(),a=>{(a==="low"||a==="medium"||a==="high")&&Qr(a)}),ni=Ke("Ключевой кадр",[["1","1 с"],["2","2 с"],["4","4 с"]],()=>String(Xr()),a=>{const r=Number(a);(r===1||r===2||r===4)&&Zr(r)});mt.append(So,Za.row,ei.row,ti.row,ni.row);const pt=document.createElement("div");pt.className="settings__pane",pt.hidden=!0;const Co=document.createElement("p");Co.className="settings__hint",Co.textContent="Пресет всех настроек — это всё разом: физика, свет, тени, Post FX, звук, интерфейс, графика и запись. Активный пресет применяется при запуске и одинаково работает во всех сценах. Имя нового пресета — дата и время до минуты. Пресеты отдельных групп живут на под-вкладках своих вкладок, а их общий список — ниже.",pt.append(Co);const be=document.createElement("p");be.className="settings__status",be.setAttribute("role","status"),be.textContent="";const ss=document.createElement("div");ss.className="settings__presetnamefield";const qe=document.createElement("input");qe.type="text",qe.value=gt(),qe.placeholder="Название пресета",qe.setAttribute("aria-label","Название нового пресета");const An=document.createElement("button");An.className="settings__presetbtn",An.type="button",An.textContent="Сохранить",ss.append(qe,An);const Nc=document.createElement("div");Nc.className="settings__row";const Rn=document.createElement("button");Rn.className="settings__resetall",Rn.type="button",Rn.textContent="Обновить активный пресет",Rn.addEventListener("click",()=>{const a=ws();if(!a){be.textContent="Активного пресета нет — сохраните новый.";return}rr(a,Ft()),be.textContent="Текущие настройки записаны в активный пресет.",ht()});const Tn=document.createElement("button");Tn.className="settings__resetall",Tn.type="button",Tn.textContent="Импорт из файла";const ft=document.createElement("input");ft.type="file",ft.accept="application/json,.json",ft.hidden=!0,Tn.addEventListener("click",()=>ft.click()),ft.addEventListener("change",()=>{const a=ft.files?.[0];ft.value="",a&&(async()=>{try{const r=Ol(await a.text());if(!r){be.textContent="Это не файл настроек игры.";return}const u=It(r.data);if(u.applied.length===0){be.textContent="В файле нет знакомых настроек.";return}const v=qt(r.name??a.name.replace(/\.json$/i,""),r.data,r.created??Date.now());Qo(v.id),Me(),ht(),qe.value=gt(),be.textContent=`Импортировано «${v.name}»: ${u.applied.join(", ")}`}catch(r){be.textContent=`Не удалось прочитать файл: ${r instanceof Error?r.message:"ошибка чтения"}`}})()});const Pn=document.createElement("button");Pn.className="settings__resetall",Pn.type="button",Pn.textContent="Убрать все пресеты",Pn.addEventListener("click",()=>{window.confirm("Удалить все сохранённые пресеты? Настройки останутся как есть.")&&(Fl(),Me(),ht(),be.textContent="Пресеты удалены, текущие настройки не тронуты.")});const Mn=document.createElement("div");Mn.className="settings__presets";const Me=()=>{for(const a of De)qn[a]?.();for(const a of en)Us[a]?.();for(const a of vt)ts[a]?.();for(const a of wt)Sn[a]?.();for(const a of Fr)L[a]?.();We.checked=rs(),Ut.checked=Es();for(const a of ia){const r=za[a];r&&(r.checked=$e(a))}Je.checked=Tt(),Ln(),Vt(),po.refresh(),fo.refresh(),xo.refresh(),Za.refresh(),ei.refresh(),ti.refresh(),ni.refresh(),Wt.checked=la()},Lc=(a,r)=>{const u=qo().find(R=>R.id===a);if(!u)return;const v=It(u.data);Qo(a),Me(),be.textContent=v.applied.length>0?`Применён пресет «${r}»: ${v.applied.join(", ")}`:`В пресете «${r}» нет знакомых настроек.`},si=a=>a>0?gt(new Date(a)):"дата неизвестна",ht=()=>{Mn.replaceChildren();const a=qo(),r=ws();if(a.length===0){const u=document.createElement("p");u.className="settings__presetempty",u.textContent="Пресетов пока нет. Настройте всё как надо и нажмите «Сохранить».",Mn.append(u);return}for(const u of a){const v=document.createElement("div");v.className="settings__preset";const R=u.id===r;R&&v.classList.add("settings__preset--active");const T=document.createElement("div");T.className="settings__presetinfo";const k=document.createElement("span");k.className="settings__presetname",k.textContent=u.name;const P=document.createElement("span");P.className="settings__presetmeta",P.textContent=R?`${si(u.created)} · активен`:si(u.created),T.append(k,P);const y=document.createElement("button");y.className="settings__presetbtn",y.type="button",y.textContent="✎",y.title="Переименовать",y.setAttribute("aria-label",`Переименовать пресет ${u.name}`),y.addEventListener("click",()=>{const D=document.createElement("input");D.className="settings__presetnameinput",D.type="text",D.value=u.name,k.replaceWith(D),D.focus(),D.select();const V=()=>{Il(u.id,D.value),ht()};D.addEventListener("keydown",Y=>{Y.key==="Enter"&&V(),Y.key==="Escape"&&(Y.stopPropagation(),ht())}),D.addEventListener("blur",V)});const O=document.createElement("button");O.className="settings__presetbtn",O.type="button",O.textContent="Применить",O.disabled=R,O.addEventListener("click",()=>Lc(u.id,u.name));const j=document.createElement("button");j.className="settings__presetbtn",j.type="button",j.textContent="↓",j.title="Экспорт в файл",j.setAttribute("aria-label",`Экспорт пресета ${u.name} в файл`),j.addEventListener("click",()=>Bl(u));const G=document.createElement("button");G.className="settings__presetbtn settings__presetbtn--danger",G.type="button",G.textContent="✕",G.title="Удалить",G.setAttribute("aria-label",`Удалить пресет ${u.name}`),G.addEventListener("click",()=>{window.confirm(`Удалить пресет «${u.name}» всех настроек?`)&&($l(u.id),ht(),be.textContent=`Пресет «${u.name}» удалён.`)}),v.append(T,O,y,j,G),Mn.append(v)}};An.addEventListener("click",()=>{const a=qt(qe.value||gt(),Ft());qe.value=gt(),ht(),be.textContent=`Сохранён пресет «${a.name}».`}),pt.append(ss,Mn,Rn,Tn,Pn,ft,be),ht();const Lt=a=>{const r=Ft();return{[a]:r[a]}},At=a=>{const r=It(a);return r.applied.length>0?{ok:!0,message:`Применено: ${r.applied.join(", ")}.`}:{ok:!1,message:"В пресете нет знакомых настроек этой группы."}},Ac=()=>({touch:{on:jo(),scale:Ho(),opacity:Go(),layout:Di(),swap:Hi()}}),Rc=a=>{const r=a&&typeof a=="object"?a.touch:null;if(!r||typeof r!="object")return{ok:!1,message:"В пресете нет настроек управления."};const u=r;let v=!1;return typeof u.on=="boolean"&&(Fi(u.on),v=!0),typeof u.scale=="number"&&Number.isFinite(u.scale)&&(Bi(u.scale),v=!0),typeof u.opacity=="number"&&Number.isFinite(u.opacity)&&(Oi(u.opacity),v=!0),(u.layout==="split"||u.layout==="left"||u.layout==="right")&&(ji(u.layout),v=!0),typeof u.swap=="boolean"&&(Gi(u.swap),v=!0),v?{ok:!0,message:"Применены настройки сенсорного управления."}:{ok:!1,message:"В пресете нет настроек управления."}},Tc=()=>{zt.checked=jo(),xe.value=String(Math.round(Ho()*100)),Cn.textContent=`${xe.value}%`,ve.value=String(Math.round(Go()*100)),Nn.textContent=`${ve.value}%`,Ka.refresh(),Ja.refresh()},Pc=()=>{const a=Ne();return a?{ok:!0,data:{...a.read()}}:{ok:!1,message:"Ракурс снимается со сцены: сначала войдите в заезд."}},Mc=a=>{const r=Ti(a);if(!r)return{ok:!1,message:"В пресете нет ракурса камеры."};const u=Ne();return u?(u.write({...r}),{ok:!0,message:"Применён ракурс камеры."}):{ok:!1,message:"Камера живёт в сцене: войдите в заезд."}},Ic=a=>{const r=zi(a);return r?(Vo(r),{ok:!0,message:"Применены настройки физики."}):{ok:!1,message:"В пресете нет настроек физики."}},oi={store:Jl,capture:()=>({ok:!0,data:Lt("sound")}),apply:At,afterApply:Me,emptyText:"Своих пресетов звука нет: выставьте громкость и нажмите «Сохранить»."},$c={store:sd,capture:()=>({ok:!0,data:zo()}),apply:Ic,afterApply:()=>{F(),K()},emptyText:"Своих пресетов физики нет: настройте её и нажмите «Сохранить»."},ai={store:Xl,capture:()=>({ok:!0,data:Lt("lighting")}),apply:At,afterApply:Me,emptyText:"Своих пресетов света нет: настройте освещение и нажмите «Сохранить»."},ii={store:ql,capture:()=>({ok:!0,data:Lt("shadows")}),apply:At,afterApply:Me,emptyText:"Своих пресетов теней нет: настройте каскады и нажмите «Сохранить»."},ri={store:Ql,capture:()=>({ok:!0,data:Lt("postfx")}),apply:At,afterApply:Me,emptyText:"Своих пресетов Post FX нет: настройте эффекты и нажмите «Сохранить»."},ci={store:Zl,capture:()=>({ok:!0,data:Lt("hud")}),apply:At,afterApply:Me,emptyText:"Своих пресетов интерфейса нет: выставьте галочки и нажмите «Сохранить»."},li={store:ed,capture:()=>({ok:!0,data:Ac()}),apply:Rc,afterApply:Tc,emptyText:"Своих пресетов управления нет: настройте педали и нажмите «Сохранить»."},Fc={store:od,capture:Pc,apply:Mc,afterApply:Gt,emptyText:"Своих пресетов камеры нет: войдите в заезд, выставьте ракурс и нажмите «Сохранить»."},di={store:td,capture:()=>({ok:!0,data:Lt("graphics")}),apply:At,afterApply:Me,emptyText:"Своих пресетов графики нет: выберите масштаб кадра и нажмите «Сохранить»."},ui={store:nd,capture:()=>({ok:!0,data:Lt("recording")}),apply:At,afterApply:Me,emptyText:"Своих пресетов записи нет: выставьте параметры файла и нажмите «Сохранить»."},Bc=[oi,$c,ai,ii,ri,ci,li,Fc,di,ui],mi=[],Oc=a=>a>0?gt(new Date(a)):"дата неизвестна",pi=(a,r,u,v,R,T)=>{a.replaceChildren();const k=r.list(),P=r.activeId();if(k.length===0){const y=document.createElement("p");y.className="settings__presetempty",y.textContent=u,a.append(y);return}for(const y of k){const O=document.createElement("div");O.className="settings__preset";const j=y.id===P;j&&O.classList.add("settings__preset--active");const G=document.createElement("div");G.className="settings__presetinfo";const D=document.createElement("span");D.className="settings__presetname",D.textContent=y.name;const V=document.createElement("span");V.className="settings__presetmeta",V.textContent=Oc(y.created),G.append(D,V);const Y=document.createElement("button");Y.className="settings__presetbtn",Y.type="button",Y.textContent=j?"Активен":"Применить",Y.disabled=j,Y.setAttribute("aria-label",`Применить пресет «${y.name}»`),Y.addEventListener("click",()=>v(y));const W=document.createElement("span");W.className="settings__presetbadge",W.textContent="Активен";const ee=document.createElement("button");ee.className="settings__presetbtn",ee.type="button",ee.textContent="✎",ee.title="Переименовать",ee.setAttribute("aria-label",`Переименовать пресет ${y.name}`),ee.addEventListener("click",()=>{const Qe=document.createElement("input");Qe.className="settings__presetnameinput",Qe.type="text",Qe.value=y.name,D.replaceWith(Qe),Qe.focus(),Qe.select();const bi=()=>{r.rename(y.id,Qe.value),T()};Qe.addEventListener("keydown",To=>{To.key==="Enter"&&bi(),To.key==="Escape"&&(To.stopPropagation(),T())}),Qe.addEventListener("blur",bi)});const Ie=document.createElement("button");Ie.className="settings__presetbtn",Ie.type="button",Ie.textContent="↓",Ie.title="Экспорт в файл",Ie.setAttribute("aria-label",`Экспорт пресета ${y.name} в файл`),Ie.addEventListener("click",()=>r.downloadFile(y));const Rt=document.createElement("button");Rt.className="settings__presetbtn settings__presetbtn--danger",Rt.type="button",Rt.textContent="✕",Rt.title="Удалить",Rt.setAttribute("aria-label",`Удалить пресет «${y.name}»`),Rt.addEventListener("click",()=>{window.confirm(`Удалить пресет «${y.name}» группы «${r.title}»?`)&&(r.remove(y.id),R(`Пресет «${y.name}» удалён.`),T())}),O.append(G,Y),j&&O.append(W),O.append(ee,Ie,Rt),a.append(O)}},Dc=a=>{const r=document.createElement("div");r.className="settings__block";const u=document.createElement("p");u.className="settings__hint",u.textContent=`Пресет группы «${a.store.title}» хранит только её настройки: применение не трогает остальные вкладки.`;const v=document.createElement("p");v.className="settings__status",v.setAttribute("role","status");const R=W=>{v.textContent=W},T=document.createElement("div");T.className="settings__presets";const k=()=>{pi(T,a.store,a.emptyText,W=>{fi(a,W,R),k()},R,k)},P=document.createElement("div");P.className="settings__presetnamefield";const y=document.createElement("input");y.type="text",y.value=a.store.defaultName(),y.placeholder="Название пресета",y.setAttribute("aria-label",`Название нового пресета: ${a.store.title}`),mi.push(()=>{y.value=a.store.defaultName()});const O=document.createElement("button");O.className="settings__presetbtn",O.type="button",O.textContent="Сохранить",O.addEventListener("click",()=>{const W=a.capture();if(!W.ok){R(W.message);return}const ee=a.store.add(y.value||a.store.defaultName(),W.data);y.value=a.store.defaultName(),k(),R(`Сохранён пресет «${ee.name}» — он активен.`)}),P.append(y,O);const j=document.createElement("button");j.className="settings__resetall",j.type="button",j.textContent="Обновить активный пресет",j.addEventListener("click",()=>{const W=a.store.activeId();if(!W){R("Активного пресета нет — сохраните новый.");return}const ee=a.capture();if(!ee.ok){R(ee.message);return}a.store.update(W,ee.data),k(),R("Текущие настройки записаны в активный пресет.")});const G=document.createElement("button");G.className="settings__resetall",G.type="button",G.textContent="Импорт из файла";const D=document.createElement("input");D.type="file",D.accept="application/json,.json",D.hidden=!0,G.addEventListener("click",()=>D.click()),D.addEventListener("change",()=>{const W=D.files?.[0];D.value="",W&&(async()=>{try{const ee=a.store.parseFile(await W.text());if(!ee){R("Это не файл пресетов этой группы.");return}const Ie=a.store.addMany(ee.items);k(),R(Ie===0?"Такие пресеты уже есть.":`Импортировано пресетов: ${Ie}.`)}catch(ee){R(`Не удалось прочитать файл: ${ee instanceof Error?ee.message:"ошибка чтения"}`)}})()});const V=document.createElement("button");V.className="settings__resetall",V.type="button",V.textContent="Экспорт всех в файл",V.addEventListener("click",()=>{const W=a.store.list();if(W.length===0){R("Экспортировать нечего: пресетов нет.");return}a.store.downloadBundle(W),R(`Выгружено пресетов: ${W.length}.`)});const Y=document.createElement("button");return Y.className="settings__resetall",Y.type="button",Y.textContent="Убрать все пресеты",Y.addEventListener("click",()=>{window.confirm(`Удалить все пресеты группы «${a.store.title}»? Настройки останутся как есть.`)&&(a.store.clear(),k(),R("Пресеты удалены, текущие настройки не тронуты."))}),r.append(u,P,T,j,G,V,Y,D,v),k(),r},fi=(a,r,u)=>{const v=a.apply(r.data);if(!v.ok){u(v.message);return}a.store.setActive(r.id),a.afterApply?.(),u(`«${r.name}»: ${v.message}`)},jc=(a,r)=>{const u=document.createElement("div");for(u.className="settings__block";a.firstChild;)u.append(a.firstChild);const v=document.createElement("div");v.className="settings__block",v.hidden=!0;const R=document.createElement("div");R.className="physics-tabs";const T=document.createElement("button");T.className="physics-tab physics-tab--on",T.type="button",T.textContent="Настройка",T.setAttribute("role","tab"),T.setAttribute("aria-selected","true");const k=document.createElement("button");k.className="physics-tab",k.type="button",k.textContent=r,k.setAttribute("role","tab"),k.setAttribute("aria-selected","false");const P=y=>{T.classList.toggle("physics-tab--on",!y),k.classList.toggle("physics-tab--on",y),T.setAttribute("aria-selected",String(!y)),k.setAttribute("aria-selected",String(y)),u.hidden=y,v.hidden=!y};return T.addEventListener("click",()=>P(!1)),k.addEventListener("click",()=>P(!0)),R.append(T,k),a.append(R,u,v),v},Hc=[[d,oi,"Пресеты звука"],[dt,ai,"Пресеты света"],[ut,ii,"Пресеты теней"],[Ve,ri,"Пресеты Post FX"],[Ye,ci,"Пресеты интерфейса"],[Ce,li,"Пресеты управления"],[Nt,di,"Пресеты графики"],[mt,ui,"Пресеты записи"]];for(const[a,r,u]of Hc)jc(a,u).append(Dc(r));const No=document.createElement("p");No.className="settings__hint",No.textContent="Ниже — пресеты всех групп в одном списке: применяйте, переименовывайте и выгружайте их, не переходя по вкладкам. Пресет выше — это все настройки разом, он применяется при запуске; пресет группы трогает только её.";const os=document.createElement("p");os.className="settings__status",os.setAttribute("role","status");const hi=a=>{os.textContent=a},as=document.createElement("div"),Yt=()=>{as.replaceChildren();let a=0;for(const r of Bc){const u=r.store.list();if(u.length===0)continue;a+=u.length;const v=document.createElement("div");v.className="settings__presets",pi(v,r.store,r.emptyText,R=>{fi(r,R,hi),Yt()},R=>{hi(R),Yt()},()=>{Yt()}),as.append(de(r.store.title,v))}if(a===0){const r=document.createElement("p");r.className="settings__presetempty",r.textContent="Пресетов групп пока нет: сохраните их на под-вкладках «Пресеты …» нужных вкладок.",as.append(r)}},Lo=document.createElement("p");Lo.className="settings__presettitle",Lo.textContent="Все настройки разом";const Ao=document.createElement("p");Ao.className="settings__presettitle",Ao.textContent="Пресеты групп",pt.insertBefore(Lo,ss),pt.append(Ao,No,as,os),Yt();const Ro=document.createElement("div");Ro.className="settings__scroll",Ro.append(d,S,dt,ut,Ve,Ye,Ce,Ot,Nt,mt,pt),n.append(s,i,Ro),e.append(t,n),document.body.append(e);function Gc(){e.hidden=!1,qe.value=gt(),ke.value=Fe(),q.value=_t();for(const a of mi)a();Gt(),Yt()}function Uc(){e.hidden=!0}return{root:e,backendSlot:uo,recordSlot:Eo,open:Gc,close:Uc}}const Kd=300;function Jd(e={}){let t=0,n=!1;const s=()=>{const p=ws();if(!p){n||(n=!0,e.onNoPreset?.());return}const l=Ft();if(!rr(p,l))return;n=!1;const f=ws();f&&e.onSaved?.(f)},i=cd(()=>{Fd()||(window.clearTimeout(t),t=window.setTimeout(s,Kd))}),c=()=>{t!==0&&(window.clearTimeout(t),t=0,s())};return document.addEventListener("visibilitychange",c),window.addEventListener("pagehide",c),{flush(){t!==0&&(window.clearTimeout(t),t=0,s())},destroy(){window.clearTimeout(t),t=0,i(),document.removeEventListener("visibilitychange",c),window.removeEventListener("pagehide",c)}}}const Xd="https://vk.ru/H360ru";function qd(){const e=document.createElement("div"),t=document.createElement("p");t.className="dlg__empty",t.textContent="Описание игры скоро появится. Пока сюда можно поставить правила, список техники и ссылку на сервер.";const n=document.createElement("a");n.className="dlg__link",n.href=Xd,n.target="_blank",n.rel="noopener noreferrer",n.textContent="Группа игры во «ВКонтакте»",e.append(t,n);const s=Ps({title:"Об игре",body:e});return{dialog:s,open(){s.open()},destroy(){s.destroy()}}}const Qd=[{hash:"7a60e38",date:"2026-10-10",subject:"Физика: Ammo убран, бэкенд только Rapier; прогоны проверок на GPU"},{hash:"990154d",date:"2026-10-09",subject:"Вкладка «Физика»: под каждым параметром — строка «за что отвечает»"},{hash:"6fca917",date:"2026-10-09",subject:"Пресеты на подвкладках всех вкладок; вкладка «Все настройки» — общий список пресетов групп"},{hash:"678f1d1",date:"2026-10-09",subject:"Пресеты камеры: плашка активного и кнопка «Сохранить пресет» на подвкладке «Ракурс»"},{hash:"0eb2a7f",date:"2026-10-09",subject:"Камера: перенос пресетов старого ключа blendars.camera-views.v1 в новое хранилище"},{hash:"42d487b",date:"2026-10-09",subject:"Камера: вкладка в настройках с ракурсом и пресетами, кнопка ракурсов убрана из topbar"},{hash:"7372f41",date:"2026-10-09",subject:"Прочность машины: панель на 5 ячеек, сильный удар свыше 50 км/ч, GAME OVER и возврат в меню"},{hash:"e4af8a4",date:"2026-10-09",subject:"UI: вкладка физики, таймер под компасом, уведомления чекпоинтов, тач-жесты"},{hash:"0069c44",date:"2026-10-09",subject:"CI: upload-pages-artifact v5 вместо v3 — под Node 24 артефакт github-pages не создавался"},{hash:"9e7421c",date:"2026-10-09",subject:"Физика машины: сторож увязания, инерция по трём осям, пресеты 5 т и 4 т"},{hash:"709fad1",date:"2026-10-09",subject:"HUD в канвасе: слой под размер виджета вместо полноэкранной текстуры, обрезка полосы компаса"},{hash:"1d33c0a",date:"2026-10-09",subject:"Забег по чекпоинтам: таймер, карточка финиша, окно «Лидеры», личность ВК"},{hash:"e4e4244",date:"2026-10-09",subject:"up"},{hash:"b3964c6",date:"2026-10-09",subject:"Сглаживание: TAA на вкладке «Графика», починка MSAA, ПК-пресеты на MSAA"},{hash:"6f17f25",date:"2026-10-08",subject:"HUD в канвас, UI-аудиошина, Draco/KTX2-ассеты"},{hash:"ad022dc",date:"2026-10-08",subject:"Fix WGSL shader: declare material_diffuse and view_position uniforms in terrain-splat"},{hash:"a206a10",date:"2026-10-08",subject:"Rebuild dist with base /blend-ars/ (GitHub Pages)"},{hash:"15fdf63",date:"2026-10-08",subject:"Deploy built site from dist; path dist in Pages workflow"},{hash:"942a7cc",date:"2026-10-08",subject:"Remove project sources; keep .github and .gitignore"},{hash:"da0f40e",date:"2026-10-08",subject:"Create static.yml"},{hash:"2691051",date:"2026-10-08",subject:"Delete .github/workflows/static.yml"},{hash:"98c2349",date:"2026-10-08",subject:"Delete .github/workflows/npm-publish-github-packages.yml"},{hash:"3ce584f",date:"2026-10-08",subject:"Update static.yml"},{hash:"128f22b",date:"2026-10-03",subject:"Create npm-publish-github-packages.yml"},{hash:"c8e16ab",date:"2026-10-03",subject:"Create static.yml"},{hash:"5a46d53",date:"2026-10-03",subject:"feat(scene): выбор кузова грузовик/Maserati, Maserati в меню, откат WebGPU→WebGL2"},{hash:"5c65165",date:"2026-10-03",subject:"feat(menu): экран загрузки с прогрессом + процедурный 3D-фон меню"},{hash:"1faa7f1",date:"2026-10-03",subject:"test(stage-0): браузерная проверка рендера, smoke-сцена, иконки-заглушки"},{hash:"4f12113",date:"2026-10-03",subject:"feat(stage-0): bootstrap Vite + ленивый PlayCanvas + тулинг бюджетов"},{hash:"eb68f3c",date:"2026-10-03",subject:"docs: rewrite README for PlayCanvas/Colyseus web stack"},{hash:"34ff9ca",date:"2026-10-03",subject:"chore: remove legacy Godot+Nakama tree and web export"},{hash:"9018d77",date:"2026-10-02",subject:"Create FUNDING.yml"},{hash:"7f64ab1",date:"2026-09-30",subject:"Add files via upload"},{hash:"5b7ab23",date:"2026-09-30",subject:"Add files via upload"},{hash:"ebb8901",date:"2026-03-19",subject:"mv"},{hash:"3c3fc26",date:"2026-03-19",subject:"fix: обновлен .gitignore и удалены системные файлы"},{hash:"0e075c9",date:"2026-03-19",subject:"up"},{hash:"9309069",date:"2026-03-19",subject:"upd"},{hash:"b82f5bc",date:"2026-03-19",subject:"docs: оновлення правил проекту"},{hash:"a19f06e",date:"2026-03-19",subject:"up"},{hash:"45bb3b3",date:"2026-03-19",subject:"new rules by demiurgos 19_1"},{hash:"7519417",date:"2026-02-27",subject:"Update README.md"},{hash:"58a3447",date:"2026-02-27",subject:"**BLEND ARS: Initial Project Setup and Development Notice**"},{hash:"60a150e",date:"2026-02-27",subject:"upd"},{hash:"eae4946",date:"2026-02-27",subject:"Exclude addons folder from tracking"},{hash:"cfe0473",date:"2026-02-27",subject:"upd"},{hash:"94b5e5d",date:"2026-02-24",subject:"uikit up"},{hash:"17b03ea",date:"2026-02-24",subject:"mv"},{hash:"c8e9bf6",date:"2026-02-24",subject:"апдейт"},{hash:"48511ce",date:"2026-02-24",subject:"ui_kit"}];function Zd(){const e=Qd;if(!Array.isArray(e))return[];const t=[];for(const n of e){if(!n||typeof n!="object")continue;const s=n,o=s.hash,i=s.date,c=s.subject;typeof o!="string"||typeof c!="string"||t.push({hash:o,date:typeof i=="string"?i:"",subject:c})}return t}function eu(){const e=Zd(),t=document.createElement("div");if(e.length===0){const s=document.createElement("p");s.className="dlg__empty",s.textContent="Журнал пока пуст: сборка сделана без истории git.",t.append(s)}else{const s=document.createElement("p");s.className="devlog__meta",s.textContent=`Последние ${e.length} изменений`;const o=document.createElement("ul");o.className="devlog__list";for(const i of e){const c=document.createElement("li");c.className="devlog__item";const p=document.createElement("span");p.className="devlog__hash",p.textContent=i.hash;const l=document.createElement("span");l.className="devlog__date",l.textContent=i.date;const f=document.createElement("span");f.className="devlog__subject",f.textContent=i.subject,c.append(p,l,f),o.append(c)}t.append(s,o)}const n=Ps({title:"Журнал разработки",body:t});return{dialog:n,open(){n.open()},destroy(){n.destroy()}}}const tc="blendars.race.board.v1",tu=200;let Jt=null;function cs(e){return typeof e=="number"&&Number.isFinite(e)}function nu(e){if(!Array.isArray(e))return[];const t=[];for(const n of e){if(t.length>=tu)break;if(typeof n!="object"||n===null)continue;const s=n;typeof s.uid!="string"||s.uid===""||typeof s.name=="string"&&(!cs(s.bestMs)||s.bestMs<0||t.push({uid:s.uid,name:s.name,photo:typeof s.photo=="string"?s.photo:"",bestMs:s.bestMs,lastMs:cs(s.lastMs)?s.lastMs:s.bestMs,runs:cs(s.runs)&&s.runs>0?Math.floor(s.runs):1,updatedAt:cs(s.updatedAt)?s.updatedAt:0}))}return t.sort(nc)}function nc(e,t){return e.bestMs!==t.bestMs?e.bestMs-t.bestMs:e.updatedAt!==t.updatedAt?e.updatedAt-t.updatedAt:e.uid<t.uid?-1:e.uid>t.uid?1:0}function sc(){if(Jt!==null)return Jt;try{const e=localStorage.getItem(tc);Jt=e===null?[]:nu(JSON.parse(e))}catch(e){console.warn("[race] таблица недоступна, веду её в памяти",e),Jt=[]}return Jt}function su(e){Jt=e;try{localStorage.setItem(tc,JSON.stringify(e))}catch(t){console.warn("[race] рекорд не сохранён на диск",t)}}function ou(){return sc()}function au(e){const t=sc(),n=t.findIndex(f=>f.uid===e.uid),s=n>=0?t[n]:void 0,o=s?.bestMs??0,i=Math.max(0,Math.round(e.timeMs)),c={uid:e.uid,name:e.name,photo:e.photo,bestMs:s===void 0?i:Math.min(s.bestMs,i),lastMs:i,runs:(s?.runs??0)+1,updatedAt:Date.now()},p=t.slice();n>=0?p[n]=c:p.push(c),p.sort(nc),su(p);const l=p.findIndex(f=>f.uid===e.uid);return{rank:l>=0?l+1:p.length,total:p.length,bestMs:c.bestMs,improved:s===void 0||i<o,previousBestMs:o,board:p}}function iu(e,t){const n={state:"idle",startMs:0,lastMs:0,collected:0,total:t.total},s=()=>{if(n.state==="finished"||n.state==="aborted"||(n.state==="idle"&&(n.state="running",n.startMs=performance.now(),e.fire("race:started",n.total)),n.collected+=1,n.total<1||n.collected<n.total))return;n.state="finished",n.lastMs=Math.max(0,Math.round(performance.now()-n.startMs));const i={timeMs:n.lastMs,collected:n.collected,total:n.total};e.fire("race:finished",i),t.onFinished?.(i)};return e.on("checkpoint:visited",s),{view:n,abort:()=>{n.state==="finished"||n.state==="aborted"||(n.lastMs=n.state==="running"?Math.max(0,Math.round(performance.now()-n.startMs)):0,n.state="aborted",e.fire("race:aborted",n.collected))},destroy(){e.off("checkpoint:visited",s)}}}function Vi(e){return e<10?`0${e}`:`${e}`}function Un(e){const t=Number.isFinite(e)&&e>0?e:0,n=Math.floor(t/10);return`${Math.floor(n/6e3)}:${Vi(Math.floor(n/100)%60)}.${Vi(n%100)}`}function op(e){return`${e<0?"−":"+"}${Un(Math.abs(e))}`}const ru=`
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
`;function oc(e,t,n,s){const o=Math.abs(e)%100,i=o%10;return o>=11&&o<=14?s:i===1?t:i>=2&&i<=4?n:s}function cu(e,t,n,s,o,i){const c=document.createElement("li");c.className="leaders__row";const p=document.createElement("span");p.className="leaders__place",p.textContent=`${e}`;const l=document.createElement("span");if(l.className="leaders__who",n!==""){const b=document.createElement("img");b.className="leaders__face",b.src=n,b.alt="",b.loading="lazy",b.addEventListener("error",()=>b.remove()),l.append(b)}const f=document.createElement("span");f.className="leaders__text";const m=document.createElement("span");m.className="leaders__name",m.textContent=t;const h=document.createElement("span");h.className="leaders__about";const x=`${o} ${oc(o,"заезд","заезда","заездов")}`;h.textContent=o>1&&i>s?`${x} · последний ${Un(i)}`:x,f.append(m,h),l.append(f);const g=document.createElement("span");return g.className="leaders__time",g.textContent=Un(s),c.append(p,l,g),c}function lu(e){e.textContent="";const t=ou();if(t.length===0){const i=document.createElement("p");i.className="dlg__empty",i.textContent="Заездов пока нет. Соберите все чекпоинты — результат попадёт в таблицу.",e.append(i);return}const n=document.createElement("p");n.className="leaders__meta",n.textContent=`${t.length} ${oc(t.length,"игрок","игрока","игроков")} · лучшее время на игрока`;const s=document.createElement("ul");s.className="leaders__list";for(let i=0;i<t.length;i++){const c=t[i];c&&s.append(cu(i+1,c.name,c.photo,c.bestMs,c.runs,c.lastMs))}const o=document.createElement("p");o.className="leaders__hint",o.textContent="Таблица — на этом устройстве: заезды других игроков в неё не попадают. Общий рейтинг появится, когда у игры будет сервер.",e.append(n,s,o)}function du(){if(!document.getElementById("leaders-style")){const n=document.createElement("style");n.id="leaders-style",n.textContent=ru,document.head.append(n)}const e=document.createElement("div"),t=Ps({title:"Лидеры",body:e});return{dialog:t,open(){lu(e),t.open()},destroy(){t.destroy()}}}function ls(e,t,n,s){const o=document.createElement("button");return o.className=e,o.type="button",o.style.setProperty("--tb-icon",`url(${JSON.stringify(t)})`),o.title=n,o.setAttribute("aria-label",n),o.addEventListener("pointerdown",i=>{i.preventDefault(),!o.disabled&&s()}),o}const uu=`
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
`;function mu(){const e=document.createElement("button");e.className="tb__btn",e.type="button";const t=()=>document.fullscreenElement!==null,n=()=>{const s=t(),o=s?rl:il;e.style.setProperty("--tb-icon",`url(${JSON.stringify(o)})`);const i=s?"Выйти из полноэкранного режима":"Полноэкранный режим";e.title=i,e.setAttribute("aria-label",i),e.setAttribute("aria-pressed",s?"true":"false")};return e.addEventListener("pointerdown",s=>{s.preventDefault(),!e.disabled&&(t()?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{}))}),document.addEventListener("fullscreenchange",n),n(),{el:e,destroy(){document.removeEventListener("fullscreenchange",n)}}}async function pu(){return(await ae(()=>import("./music-player.Dg1qCssf.js"),__vite__mapDeps([0,1,2]))).createMusicPlayer()}function fu(e){const t=document.createElement("style");t.textContent=uu;const n=document.createElement("header");n.className="tb";const s=document.createElement("div");s.className="tb__slot",s.append(e.statsHost);const o=document.createElement("div");o.className="tb__center";const i=document.createElement("h1");i.className="tb__title",i.textContent=e.title,o.append(i);const c=document.createElement("div");c.className="tb__slot tb__slot--right";const p=document.createElement("div");p.className="tb__extra";const l=mu(),f=qd(),m=eu(),h=du(),x=document.createElement("button");x.className="tb__btn tb__btn--close",x.type="button",x.style.setProperty("--tb-icon",`url(${JSON.stringify(yl)})`),x.title="Скрыть панель",x.setAttribute("aria-label","Скрыть панель");const g=document.createElement("span");g.className="tb__cap",g.innerHTML="Скрыть<br>панель",x.append(g),x.addEventListener("pointerdown",d=>{d.preventDefault(),!x.disabled&&e.onToggleChrome()});let b=null,w=null;const E=ls("tb__btn",ul,"Музыка",()=>{const d=C=>{C.open(),e.windows.open("music")};if(w!==null){d(w);return}b??=pu(),b.then(C=>{w=C,e.windows.register({id:"music",root:C.dialog.root,show:()=>C.open(),hide:()=>C.dialog.close()}),d(C)}).catch(()=>{})});c.append(p,ls("tb__btn",dl,"Лидеры",()=>{h.open(),e.windows.open("leaders")}),ls("tb__btn",ll,"Журнал разработки",()=>{m.open(),e.windows.open("devlog")}),ls("tb__btn",cl,"Об игре",()=>{f.open(),e.windows.open("about")}),E,x,l.el),s.classList.add("tb__slot--left"),n.append(t,s,o,c),e.windows.register({id:"leaders",root:h.dialog.root,show:()=>h.open(),hide:()=>h.dialog.close()}),e.windows.register({id:"about",root:f.dialog.root,show:()=>f.open(),hide:()=>f.dialog.close()}),e.windows.register({id:"devlog",root:m.dialog.root,show:()=>m.open(),hide:()=>m.dialog.close()});const A=[Mt(n),Mt(f.dialog.root),ms(f.dialog.root),Mt(m.dialog.root),ms(m.dialog.root),Mt(h.dialog.root),ms(h.dialog.root)];return{root:n,setExtraButtons(d){p.append(d)},setBackButton(d){s.prepend(d)},setSceneMode(d){n.classList.toggle("tb--scene",d)},destroy(){l.destroy(),f.destroy(),m.destroy(),h.destroy();for(const d of A)d();w?.destroy(),n.remove()}}}const hu=`
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
`;function bu(e={}){const t=document.createElement("style");t.textContent=hu;const n=document.createElement("div");n.className="win";const s=document.createElement("div");s.className="win__bar";const o=document.createElement("button");o.className="win__close",o.type="button",o.textContent="✕",o.title="Закрыть окно",o.setAttribute("aria-label","Закрыть окно"),s.append(o);const i=document.createElement("p");i.className="win__empty",i.textContent="",i.setAttribute("aria-hidden","true"),n.append(t,i),document.body.append(s);const c=new Map,p=[];let l=null,f=null;const m=()=>{for(const S of c.values()){const M=S.id===l;S.root.hidden=!M,M?S.show():S.hide()}n.classList.toggle("win--open",l!==null),s.classList.toggle("win--open",l!==null);for(const S of p)S();h()},h=()=>{const S=n.getBoundingClientRect();if(S.width<=0||S.height<=0)return;const M=document.documentElement.style;M.setProperty("--win-left",`${Math.round(S.left)}px`),M.setProperty("--win-top",`${Math.round(S.top)}px`),M.setProperty("--win-width",`${Math.round(S.width)}px`),M.setProperty("--win-height",`${Math.round(S.height)}px`)},x={root:n,closeBtn:o,register(S){c.set(S.id,S),S.hide(),S.root.hidden=!0},open(S){c.has(S)&&(l=S,f={x:w,y:E,until:performance.now()+d},m())},close(){l!==null&&(l=null,m())},toggle(S){l===S?x.close():x.open(S)},active(){return l},onChange(S){return p.push(S),()=>{const M=p.indexOf(S);M>=0&&p.splice(M,1)}},destroy:()=>{}};o.addEventListener("pointerdown",S=>{S.preventDefault(),x.close()});const g=new ResizeObserver(h);g.observe(n),window.addEventListener("resize",h),window.addEventListener("orientationchange",h),h();const b=S=>{S.key==="Escape"&&(l!==null?(S.stopPropagation(),x.close()):e.onEmptyEscape?.())};document.addEventListener("keydown",b);let w=0,E=0;const A=S=>{w=S.clientX,E=S.clientY},d=400,C=32,L=S=>{if(l===null)return;const M=c.get(l);if(!M||M.root.hidden)return;const $=S.target;if(!($ instanceof Element)||M.root.contains($))return;const N=f;if(N!==null&&performance.now()<N.until){const H=S.clientX-N.x,B=S.clientY-N.y;if(H*H+B*B<=C*C)return}if($.closest(".tb")!==null)return;const _=S.clientX-w,I=S.clientY-E;_*_+I*I>64||x.close()};return document.addEventListener("pointerdown",A,!0),document.addEventListener("click",L),x.destroy=()=>{g.disconnect(),window.removeEventListener("resize",h),window.removeEventListener("orientationchange",h),document.removeEventListener("keydown",b),document.removeEventListener("pointerdown",A,!0),document.removeEventListener("click",L),s.remove();const S=document.documentElement.style;S.removeProperty("--win-left"),S.removeProperty("--win-top"),S.removeProperty("--win-width"),S.removeProperty("--win-height")},x}const gu=`
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
    src: url(${JSON.stringify(tr)}) format('truetype');
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
`,yu={idle:"",starting:"готовлю…",recording:"идёт",encoding:"упаковываю файл…",saving:"сохраняю…",error:"не вышло"},_u=["recording","encoding","saving"],Wo=["Одно не рождается без другого: оболочка без души лишь кукла, душа без оболочки — призрак.","Сон совести рождает чудовищ.","У нас нет формы, и мы страшимся этого.","В здравом теле, витает здравый дух, а значит и душа."];class xu{statsHost;clusterHost;settings;windows;root;playBtn;backBtn;settingsItem;modes;actionsEl;midEl;statusEl;statusText;recordRow;recordBtn;recordDot;recordLabel;recordState;recordBar;recordFill;idleIndex=-1;topbar;chromeHidden=!1;autosave;uiSoundDetach=[];constructor(t,n){this.root=document.createElement("div"),this.root.className="menu";const s=document.createElement("style");s.textContent=gu,this.windows=bu({onEmptyEscape:()=>{this.setChromeHidden(!this.chromeHidden)}}),this.statsHost=document.createElement("div"),this.topbar=fu({statsHost:this.statsHost,title:"BLEND ARS",subtitle:"",windows:this.windows,onToggleChrome:()=>{this.setChromeHidden(!0)}}),this.playBtn=document.createElement("button"),this.playBtn.className="play play--go",this.playBtn.type="button",this.playBtn.textContent="Играть",this.playBtn.addEventListener("pointerdown",x=>{x.preventDefault(),!this.playBtn.disabled&&(Le("click"),this.modes.open(),this.windows.open("modes"))});const o=document.createElement("ul");o.className="actions__list";const i=[["Контейнеры",ml],["Миссии",pl],["Гараж",fl],["Магазин",hl]];for(const[x,g]of i){const b=document.createElement("li"),w=document.createElement("button");w.className="mitem",w.type="button",w.textContent=x,w.disabled=!0,w.title=`${x}: раздел в разработке`,w.style.setProperty("--mitem-icon",`url(${JSON.stringify(g)})`),b.append(w),o.append(b)}this.settingsItem=document.createElement("button"),this.settingsItem.className="mitem",this.settingsItem.type="button",this.settingsItem.textContent="Настройки",this.settingsItem.style.setProperty("--mitem-icon",`url(${JSON.stringify(Ei)})`),this.settingsItem.addEventListener("pointerdown",x=>{x.preventDefault(),!this.settingsItem.disabled&&(Le("click"),this.openSettings())});{const x=document.createElement("li");x.append(this.settingsItem),o.append(x)}this.modes=Ll(x=>{Le("click"),this.modes.dialog.close(),this.windows.close(),n.onScene(x)}),this.backBtn=document.createElement("button"),this.backBtn.className="tb__back",this.backBtn.type="button",this.backBtn.textContent="Назад",this.backBtn.style.setProperty("--tb-icon",`url(${JSON.stringify(xl)})`),this.backBtn.title="Вернуться в меню",this.backBtn.setAttribute("aria-label","Вернуться в меню"),this.backBtn.style.display="none",this.backBtn.addEventListener("pointerdown",x=>{x.preventDefault(),Le("click"),n.onBack?.()}),this.settings=Yd();const c=document.createElement("button");c.className="tb__btn",c.type="button",c.style.setProperty("--tb-icon",`url(${JSON.stringify(Ei)})`),c.title="Настройки",c.setAttribute("aria-label","Настройки"),c.addEventListener("pointerdown",x=>{x.preventDefault(),!c.disabled&&(Le("click"),this.openSettings())});const p=document.createElement("div");p.className="tb__extra",p.append(c),this.topbar.setExtraButtons(p),this.topbar.setBackButton(this.backBtn);const l=document.createElement("div");l.className="actions",l.append(this.playBtn,o),this.actionsEl=l,this.statusText=document.createElement("div"),this.statusText.className="status__text",this.statusText.textContent=this.pickIdlePhrase(),this.recordRow=document.createElement("div"),this.recordRow.className="status__record",this.recordRow.hidden=!0,this.recordBtn=document.createElement("button"),this.recordBtn.className="status__recordbtn",this.recordBtn.type="button",this.recordDot=document.createElement("span"),this.recordDot.className="status__dot",this.recordLabel=document.createElement("span"),this.recordLabel.textContent="Запись",this.recordBtn.append(this.recordDot,this.recordLabel),this.recordBtn.addEventListener("pointerdown",x=>{x.preventDefault(),!this.recordBtn.disabled&&(Le("click"),n.onRecord?.())}),this.recordState=document.createElement("span"),this.recordState.className="status__recordstate",this.recordState.textContent="",this.recordBar=document.createElement("div"),this.recordBar.className="status__recordbar",this.recordFill=document.createElement("span"),this.recordBar.append(this.recordFill),this.recordBar.style.display="none",this.recordRow.append(this.recordBtn,this.recordState,this.recordBar),this.statusEl=document.createElement("div"),this.statusEl.className="status",this.clusterHost=document.createElement("div"),this.clusterHost.className="status__cluster",this.statusEl.append(this.clusterHost),this.statusText.setAttribute("role","status"),this.statusText.setAttribute("aria-live","polite"),this.statusEl.append(this.statusText),this.settings.recordSlot.append(this.recordRow);const f=document.createElement("div");f.className="mid",f.append(l,this.windows.root),this.actionsEl=l,this.midEl=f;const m=document.createElement("div");m.className="wrap",m.append(f);const h=document.createElement("button");h.className="chrome-fab",h.type="button",h.style.setProperty("--fab-icon",`url(${JSON.stringify(_l)})`),h.title="Показать интерфейс",h.setAttribute("aria-label","Показать интерфейс"),h.addEventListener("pointerdown",x=>{x.preventDefault(),Le("click"),this.setChromeHidden(!1)}),this.root.append(s,this.topbar.root,m,this.statusEl,h),t.append(this.root),El(()=>Md("uiClick")),Sl(),this.uiSoundDetach.push(Mt(this.root),Mt(this.settings.root),ms(this.settings.root),Mt(this.modes.dialog.root)),this.windows.register({id:"settings",root:this.settings.root,show:()=>this.settings.open(),hide:()=>this.settings.close()}),this.windows.register({id:"modes",root:this.modes.dialog.root,show:()=>this.modes.open(),hide:()=>this.modes.dialog.close()}),this.settings.close(),this.autosave=Jd({onSaved:x=>{this.setStatus(`Настройки сохранены в пресет «${x}».`)},onNoPreset:()=>{this.setStatus("Настройки применены, но активного пресета нет — сохранять некуда. Сохраните пресет на вкладке «Пресеты».")}})}openSettings(){this.settings.open(),this.windows.open("settings")}setMode(t){const n=t==="scene";this.playBtn.style.display=n?"none":"",this.backBtn.style.display=n?"":"none",this.recordRow.hidden=!n,n&&(this.modes.dialog.close(),this.windows.close()),this.setChromeHidden(!1),this.actionsEl.style.display=n?"none":"",this.midEl.style.gridTemplateColumns=n?"minmax(0, 1fr)":"",this.root.style.background=n?"none":"",this.root.classList.toggle("menu--scene",n)}setChromeHidden(t){this.chromeHidden=t,this.root.classList.toggle("menu--chrome-hidden",t)}isChromeHidden(){return this.chromeHidden}setSceneChrome(t){this.topbar.setSceneMode(t)}statsHostFor(t){return this.statsHost}setBusy(t){this.playBtn.disabled=t,this.settingsItem.disabled=t,this.backBtn.disabled=t,this.modes.setBusy(t),t&&this.setStatus("Инициализация рендера…")}setStatus(t){this.statusText.textContent=t||this.pickIdlePhrase()}setRecordState(t,n){const s=_u.includes(t);this.recordBtn.classList.toggle("live",s),this.recordBtn.disabled=t==="starting"||t==="encoding"||t==="saving",this.recordLabel.textContent=t==="recording"?"Стоп":"Запись",this.recordBar.style.display=t==="encoding"||t==="saving"?"block":"none",this.recordFill.style.width="0%",this.recordState.textContent=n??yu[t]}setRecordProgress(t){this.recordFill.style.width=`${Math.min(Math.max(t,0),1)*100}%`}pickIdlePhrase(){let t=Math.floor(Math.random()*Wo.length);return t===this.idleIndex&&(t=(t+1)%Wo.length),this.idleIndex=t,Wo[t]??""}destroy(){this.topbar.destroy(),this.modes.destroy(),this.windows.destroy(),this.autosave.destroy();for(const t of this.uiSoundDetach)t();this.root.remove(),this.settings.root.remove()}}const vu=`
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
`,wu='<svg class="rswitch__svg" viewBox="0 0 48 26" width="48" height="26" aria-hidden="true" focusable="false"><rect class="rswitch__track" x="1" y="1" width="46" height="24" rx="12"></rect><circle class="rswitch__knob" cx="13" cy="13" r="9"></circle></svg>';function Eu(e,t){const n=document.createElement("div");n.className="rswitch-wrap";const s=document.createElement("span");s.className="rswitch__opt",s.textContent="WebGL2",s.dataset.val="webgl2";const o=document.createElement("button");o.className="rswitch",o.type="button",o.setAttribute("role","switch"),o.innerHTML=wu;const i=document.createElement("span");i.className="rswitch__opt",i.textContent="WebGPU",i.dataset.val="webgpu",n.append(s,o,i);const c=()=>{o.disabled||t.onSwitch()};n.addEventListener("click",c),e.append(n);let p="webgl2",l=!1,f="";const m=()=>{const h=p==="webgpu";o.dataset.state=h?"on":"off",o.setAttribute("aria-checked",h?"true":"false"),s.classList.toggle("rswitch__opt--active",!h),i.classList.toggle("rswitch__opt--active",h);const x=h?"WebGL2":"WebGPU";o.title=o.disabled&&f?f:`Переключить на ${x}`,o.setAttribute("aria-label",`Рендер: ${h?"WebGPU":"WebGL2"}. Переключить на ${x}`),n.classList.toggle("rswitch-wrap--disabled",o.disabled),n.setAttribute("aria-disabled",String(o.disabled))};return m(),{setBackend(h){p=h,m()},setBusy(h){l=h,o.disabled=h||!!f,m()},setUnavailable(h){f=h,o.disabled=l||!!h,m()},destroy(){n.remove()}}}const Su=`
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
`;function In(e,t,n,s,o,i){o<=0||s<=0||(e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(i,o/2,s/2)):e.rect(t,n,s,o),e.fill())}const ku="#ebdbb2",ds="system-ui, -apple-system, 'Segoe UI', sans-serif",ks=.9;function Cu(e){let t="";return{draw:(s,o,i,c)=>{if(o<=0||i<=0||c<=0)return!1;const p=e(),l=p===null?"none":[Math.round(Math.abs(p.speed)*.9),p.rpm,p.gear,p.shifting?1:0,p.gears.length,Math.round(p.charge*100),Math.round(p.boost*100),o,i,window.innerWidth].join("|");if(l===t)return!1;if(t=l,s.clearRect(0,0,o,i),s.fillStyle="rgba(29, 32, 33, 0.93)",s.fillRect(0,0,o,i),p===null)return!0;s.save(),s.scale(c,c);const f=i/c,m=document.documentElement.classList.contains("hud-density--skinny"),h=window.innerWidth>1100,x=window.innerWidth>820,g=12,b=f/2;let w=0;if(s.textBaseline="middle",s.textAlign="left",h){const L=m?48:64,S=4;s.fillStyle="#ffffff1f",In(s,w,b-S/2,L,S,2);const M=Math.max(p.maxRpm-p.idleRpm,1),$=Math.min(Math.max((p.rpm-p.idleRpm)/M,0),1);$>0&&(s.fillStyle=p.rpm>=p.shiftUpRpm?"#fe8019":"#ebdbb2cc",In(s,w,b-S/2,L*$,S,2)),w+=L+g}const E=m?18:24,A=m?9:11;s.fillStyle=ku,s.font=`700 ${E}px ${ds}`;const d=`${Math.round(Math.abs(p.speed)*ks)}`;s.fillText(d,w,b);const C=s.measureText(d).width;if(s.font=`400 ${A}px ${ds}`,s.fillStyle="rgba(235, 219, 178, 0.55)",s.fillText("км/ч",w+C+3,b),w+=C+3+s.measureText("км/ч").width+8,x){const L=p.gears.length,S=m?16:20,M=4,$=p.gear<0?0:p.gear;for(let N=0;N<=L;N++){const _=w+N*(S+4),I=N===$;s.fillStyle=I?p.shifting?"#ffffff4d":"#ebdbb2e6":"#ffffff1a",In(s,_,b-S/2,S,S,M),s.fillStyle=I?p.shifting?"#ffffff8c":"#1d2021":"#ffffff73",s.font=`600 ${m?9:11}px ${ds}`,s.textAlign="center",s.fillText(N===0?"R":`${N}`,_+S/2,b),s.textAlign="left"}w+=(L+1)*(S+4)-4+g}if(h){const L=Math.min(Math.max(p.charge,0),1),S=Math.min(Math.max(p.boost,0),1),M=L>0?L:S;s.font=`400 9px ${ds}`,s.fillStyle="rgba(235, 219, 178, 0.8)",s.fillText(L>0?"ЗАРЯД":"БУСТ",w,b);const $=s.measureText("ЗАРЯД").width,N=m?40:56,_=3,I=w+$+5;s.fillStyle="#ffffff1f",In(s,I,b-_/2,N,_,2),M>0&&(s.fillStyle=S>0?"#fe8019":"#7b5cff",In(s,I,b-_/2,N*M,_,2))}return s.restore(),!0},reset(){t=""},destroy(){t=""}}}function Nu(e,t){const n=document.createElement("div");n.className="cluster",n.setAttribute("role","group"),n.setAttribute("aria-label","Приборы машины");const s=document.createElement("div");s.className="cluster__revs";const o=document.createElement("span");s.append(o);const i=document.createElement("div");i.className="cluster__dials";const c=document.createElement("span");c.className="cluster__speed",c.textContent="0";const p=document.createElement("span");p.className="cluster__unit",p.textContent="км/ч";const l=document.createElement("span");l.append(c,p);const f=document.createElement("div");f.className="cluster__gearbox",i.append(l,f);const m=document.createElement("div");m.className="cluster__boost";const h=document.createElement("span");h.textContent="Заряд";const x=document.createElement("div");x.className="cluster__boostbar";const g=document.createElement("span");x.append(g),m.append(h,x),n.append(s,i,m);const b=document.createElement("style");b.textContent=Su,document.head.append(b);let w=[],E=-1,A=0;const d=()=>{if(A++%4!==0)return;const L=e();if(!L)return;c.textContent=`${Math.round(Math.abs(L.speed)*ks)}`;const S=L.gears.length;if(S!==E){E=S,f.replaceChildren(),w=[];const B=S+1;for(let U=0;U<B;U++){const F=document.createElement("span");F.textContent=U===0?"R":`${U}`,f.append(F),w.push(F)}}const M=L.gear<0?0:L.gear;for(let B=0;B<w.length;B++)w[B]?.classList.toggle("engaged",B===M);f.classList.toggle("shifting",L.shifting);const $=Math.max(L.maxRpm-L.idleRpm,1),N=(L.rpm-L.idleRpm)/$;o.style.width=`${Math.min(Math.max(N,0),1)*100}%`,o.classList.toggle("redline",L.rpm>=L.shiftUpRpm);const _=Math.min(Math.max(L.charge,0),1),I=Math.min(Math.max(L.boost,0),1),H=_>0?_:I;g.style.width=`${H*100}%`,g.classList.toggle("firing",I>0),h.textContent=_>0?"Заряд":"Буст"};n.dataset.cleanup="1",(t??document.body).append(n);const C=window.setInterval(d,1e3/60/4);return{destroy(){window.clearInterval(C),n.remove(),b.remove()}}}const ac="vehicle",ap="vehicleInput",ip="vehicleWheel",Lu="driveCamera",Cs=5,Au=50,Ru=8e3,Tu=600;function Pu(e,t){return Math.abs(e)>Au&&t>=Ru}function Mu(e){return e>0?e-1:0}function Iu(e,t){const n={cells:Cs,max:Cs,lastSpeedKmh:0,lastEventSpeedKmh:0,lastImpulse:0},s=n,o=t.collision,i=t.script?.get(ac);let c=Number.NEGATIVE_INFINITY,p=!1,l=0;const f=()=>{const x=i?.speed;typeof x=="number"&&Number.isFinite(x)&&(l=Math.abs(x)*ks)};e.on("update",f);const m=x=>{if(p)return;let g=0;for(const E of x.contacts??[]){const A=E.impulse??0;A>g&&(g=A)}const b=Math.abs(i?.speed??0)*ks;if(n.lastSpeedKmh=l,n.lastEventSpeedKmh=b,n.lastImpulse=g,!Pu(l,g))return;const w=performance.now();w-c<Tu||(c=w,n.cells=Mu(n.cells),console.info("[lives] удар:",`${Math.round(l)} км/ч по прибору`,"(в событии",`${Math.round(b)} км/ч)`,"· импульс",Math.round(g),"· осталось ячеек",n.cells),e.fire("lives:hit",n.cells),!(n.cells>0)&&(p=!0,e.fire("lives:depleted")))};o?o.on("collisionstart",m):console.warn("[lives] у машины нет collision-компонента — прочность не работает");const h=window;return h.__blendarsLives=s,{view:s,destroy(){e.off("update",f),o?.off("collisionstart",m),h.__blendarsLives===s&&delete h.__blendarsLives}}}const $u={w:220,h:28,pad:8,cellW:18,cellH:10,gap:2,labelSize:12,statusSize:11},Fu={w:184,h:24,pad:6,cellW:14,cellH:8,gap:2,labelSize:11,statusSize:11};function ic(){return document.documentElement.classList.contains("hud-density--skinny")?Fu:$u}function rc(){const e=ic();return{w:e.w,h:e.h}}const Bu="rgba(0, 0, 0, 0.35)",Ou="rgba(40, 40, 40, 0.93)",Wi="#928374",Du="#d5c4a1",ju="#ebdbb2",cc="#8ec07c",Ns="#fabd2f",Yo="#fe8019",Hu="rgba(40, 40, 40, 0.35)",Yi="system-ui, -apple-system, 'Segoe UI', sans-serif",Gu=220,lc=4,dc=1;function Ki(e,t){const n=e;typeof n.letterSpacing=="string"&&(n.letterSpacing=`${t}px`)}const Uu=typeof window.matchMedia!="function"?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches;function zu(e){return e<=dc?{text:"CRITICAL",color:Ns}:e<lc?{text:"DAMAGED",color:Ns}:{text:"STABLE",color:ju}}function Vu(e){return e>=lc?cc:Ns}function uc(e){let t=-2,n=0,s=!1,o=!1,i=null,c=0,p=0,l=0;return{draw:(m,h,x,g)=>{if(h<=0||x<=0||g<=0)return!1;const b=e(),w=b===null?-1:Math.max(0,Math.min(b.cells,b.max)),E=b===null?Cs:Math.max(1,Math.min(b.max,10)),A=performance.now();!Uu&&w>=0&&t>=0&&w<t&&(l=A+Gu);const d=A<l,C=w>=0&&w<=dc,L=ic();if(w===t&&E===n&&d===s&&C===o&&L===i&&h===c&&x===p)return!1;if(t=w,n=E,s=d,o=C,i=L,c=h,p=x,m.clearRect(0,0,h,x),w<0)return!0;m.save(),m.scale(g,g);const S=h/g,M=x/g;m.fillStyle=Bu,m.fillRect(0,0,S,M),m.fillStyle=Ou,m.fillRect(0,0,S,M),m.strokeStyle=d?Yo:Wi,m.lineWidth=d?2:1,m.strokeRect(.5,.5,S-1,M-1),m.fillStyle=d?Yo:C?Ns:cc,m.fillRect(0,3,2,M-6);const $=M/2;m.textBaseline="middle",m.textAlign="left";let N=2+L.pad;Ki(m,L.labelSize*.08),m.font=`700 ${L.labelSize}px ${Yi}`,m.fillStyle=Du,m.fillText("HP",N,$),N+=m.measureText("HP").width+L.pad;const _=$-L.cellH/2;for(let H=0;H<E;H++){const B=N+H*(L.cellW+L.gap);if(H<w&&(m.fillStyle=d?Yo:Vu(w),m.fillRect(B+1,_+1,L.cellW-2,L.cellH-2),C&&!d)){m.save(),m.beginPath(),m.rect(B+1,_+1,L.cellW-2,L.cellH-2),m.clip(),m.strokeStyle=Hu,m.lineWidth=2,m.beginPath();for(let U=B-L.cellH;U<B+L.cellW;U+=4)m.moveTo(U,_+L.cellH),m.lineTo(U+L.cellH,_);m.stroke(),m.restore()}m.strokeStyle=Wi,m.lineWidth=1,m.strokeRect(B+.5,_+.5,L.cellW-1,L.cellH-1)}N+=E*(L.cellW+L.gap)-L.gap+L.pad;const I=zu(w);return m.font=`700 ${L.statusSize}px ${Yi}`,m.fillStyle=I.color,m.fillText(I.text,N,$),Ki(m,0),m.restore(),!0},reset(){c=0,p=0,i=null},destroy(){c=0,p=0,i=null}}}const Wu=`
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
`;function Yu(e,t){const n=document.createElement("div");n.className="lives",n.setAttribute("role","img");const s=document.createElement("canvas");n.append(s);const o=document.createElement("style");o.textContent=Wu,document.head.append(o),document.body.append(n);const i=s.getContext("2d"),c=uc(e);if(!i)return n.remove(),o.remove(),{destroy(){}};let p=0,l=0,f=0,m=-2,h=0;const x=()=>{h=requestAnimationFrame(x);const g=rc(),b=Math.max(1,Math.min(window.devicePixelRatio||1,2));(g.w!==p||g.h!==l||b!==f)&&(p=g.w,l=g.h,f=b,s.width=Math.round(g.w*b),s.height=Math.round(g.h*b),s.style.width=g.w+"px",s.style.height=g.h+"px",c.reset()),c.draw(i,s.width,s.height,s.width/g.w);const w=e(),E=w===null?-1:w.cells;E!==m&&(m=E,n.setAttribute("aria-label",w===null?"":"Прочность "+w.cells+" из "+w.max))};return h=requestAnimationFrame(x),{destroy(){cancelAnimationFrame(h),c.destroy(),n.remove(),o.remove()}}}const da=10;function Ku(e,t){const n=e/t,s=Math.floor(n*6),o=n*6-s,i=.25,c=1-.75*o,p=.25+.75*o,l={0:[1,p,i],1:[c,1,i],2:[i,1,p],3:[i,c,1],4:[p,i,1],5:[1,i,c]},[f,m,h]=l[s%6]??[1,1,1];return new Zi(f,m,h,1)}function Ko(e,t,n){const s=new Vc;return s.diffuse=new Zi(0,0,0),s.emissive=t,s.emissiveIntensity=2,s.blendType=Wc,s.opacity=n,s.depthWrite=!1,s.update(),s}function Ju(e,t,n=da){let s=null;const o=()=>{try{s??=new AudioContext;const N=s;N.state==="suspended"&&N.resume();const _=N.currentTime+.02,I=N.createOscillator();I.type="sawtooth",I.frequency.setValueAtTime(70,_),I.frequency.exponentialRampToValueAtTime(300,_+2.5);const H=N.createBiquadFilter();H.type="lowpass",H.Q.value=6,H.frequency.setValueAtTime(180,_),H.frequency.exponentialRampToValueAtTime(1800,_+2.5);const B=N.createGain();B.gain.setValueAtTime(1e-4,_),B.gain.exponentialRampToValueAtTime(.22,_+2.4),B.gain.setValueAtTime(.22,_+2.5),B.gain.linearRampToValueAtTime(0,_+2.7),I.connect(H).connect(B).connect(N.destination),I.start(_),I.stop(_+2.8);const U=2.4,F=N.createBufferSource(),z=N.createBuffer(1,Math.ceil(N.sampleRate*U),N.sampleRate),pe=z.getChannelData(0);for(let Se=0;Se<pe.length;Se++)pe[Se]=Math.random()*2-1;F.buffer=z;const _e=N.createBiquadFilter();_e.type="bandpass",_e.Q.value=2.5,_e.frequency.setValueAtTime(250,_+2.5),_e.frequency.exponentialRampToValueAtTime(5200,_+4.6);const de=N.createGain();de.gain.setValueAtTime(1e-4,_+2.5),de.gain.exponentialRampToValueAtTime(.3,_+2.62),de.gain.exponentialRampToValueAtTime(.001,_+4.8),F.connect(_e).connect(de).connect(N.destination),F.start(_+2.5),F.stop(_+4.9)}catch{}},i=new Xt("checkpoints");t.addChild(i);const c=(N,_)=>{const I=new yi(N,120,_),H=new yi(N,-20,_),B=e.systems.rigidbody?.raycastFirst(I,H);return B?B.point.y:0},p=(N,_)=>{const I=c(N,_);return Math.abs(c(N+4,_)-I)<1.2&&Math.abs(c(N,_+4)-I)<1.2},l=N=>{let _={x:0,z:0,y:0};for(let I=0;I<8;I++){const H=N/n*Math.PI*2+Math.random()*.6,B=60+Math.random()*200,U=Math.cos(H)*B,F=Math.sin(H)*B;if(_={x:U,z:F,y:c(U,F)},p(U,F))return _}return _},f=e.graphicsDevice,m=new Po({ringRadius:4,tubeRadius:.14,sectorAngle:360,segments:48,sides:10}),h=new Po({ringRadius:2.6,tubeRadius:.12,sectorAngle:360,segments:36,sides:10}),x=new Po({ringRadius:1.5,tubeRadius:.1,sectorAngle:360,segments:24,sides:8}),g=new zc({radius:.35,height:60,heightSegments:1,capSegments:12}),b=is.fromGeometry(f,m),w=is.fromGeometry(f,h),E=is.fromGeometry(f,x),A=is.fromGeometry(f,g),d=[],C=new Map;for(let N=0;N<n;N++){const{x:_,z:I,y:H}=l(N),B=Ku(N,n),U=new Xt(`checkpoint-${N}`);U.setPosition(_,H+.35,I);const F=(q,se,fe,ie)=>{const he=new Xt("ring");return he.addComponent("render",{meshInstances:[new gi(q,se)],castShadows:!1,receiveShadows:!1}),he.setEulerAngles(fe,0,ie),U.addChild(he),he},z=Ko(f,B,.9),pe=Ko(f,B,.55),_e=Ko(f,B,.28),de=F(b,z,0,0),Se=F(w,pe,66,24),X=F(E,pe,108,-30),ne=new Xt("beam");ne.addComponent("render",{meshInstances:[new gi(A,_e)],castShadows:!1,receiveShadows:!1}),ne.setLocalPosition(0,30,0),U.addChild(ne),i.addChild(U);const Q={info:{id:N,x:_,z:I,color:Math.round(B.r*255)<<16|Math.round(B.g*255)<<8|Math.round(B.b*255)},node:U,rings:[de,Se,X],beam:ne,mats:[z,pe],beamMat:_e,state:"alive",t:0};d.push(Q),C.set(U,Q)}const L=N=>{for(const _ of d){if(_.state==="alive"){_.rings[0]?.rotate(0,N*50,0),_.rings[1]?.rotate(N*30,N*-70,0),_.rings[2]?.rotate(N*-45,0,N*60);continue}_.t+=N;const I=_.t;if(I<2.5){const H=I/2.5,B=1-(1-H)*(1-H),U=1+1.3*B;_.node.setLocalScale(U,U,U);const F=N*10*B;_.rings[0]?.rotate(0,F*50,0),_.rings[1]?.rotate(F*30,F*-70,0),_.rings[2]?.rotate(F*-45,0,F*60)}else if(I<5){const H=(I-2.5)/2.5,B=1-H*H,U=Math.max(2.3*B*B,.001);_.node.setLocalScale(U,U,U);const F=N*(10+H*40);_.rings[0]?.rotate(0,F*50,0),_.rings[1]?.rotate(F*30,F*-70,0),_.rings[2]?.rotate(F*-45,0,F*60),_.beam.setLocalScale(1,1+H*2.2,1),_.beam.setLocalPosition(0,30+H*45,0),_.beamMat.opacity=.28*(1-H),_.beamMat.update();for(let z=0;z<_.mats.length;z++){const pe=z===0?.9:.55;_.mats[z].opacity=Math.max(pe*(1-H),0),_.mats[z].update()}}}for(let _=d.length-1;_>=0;_--){const I=d[_];I.state==="dying"&&I.t>=5&&(I.node.destroy(),e.fire("checkpoint:visited",I.info),d.splice(_,1))}};e.on("update",L);const S=()=>t.findByName("vehicle");let M=0;const $=N=>{if(M+=N,M<.25)return;M=0;const I=S()?.getPosition();if(I)for(let H=d.length-1;H>=0;H--){const B=d[H],U=I.x-B.info.x,F=I.z-B.info.z;B.state==="alive"&&U*U+F*F<9*9&&(B.state="dying",B.t=0,o())}};return e.on("update",$),{list:()=>d.map(N=>N.info),destroy(){e.off("update",L),e.off("update",$),s?.close().catch(()=>{}),i.destroy()}}}function mc(){return null}const us=55,Xu={lane:38,zone:32,total:70},qu={lane:26,zone:24,total:50},Qu={lane:0,zone:0,total:0};function Fa(){const e=document.documentElement.classList;return e.contains("hud-density--minimal")?Qu:e.contains("hud-density--skinny")?qu:Xu}const Zu=`
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
`,em={0:"С",45:"СВ",90:"В",135:"ЮВ",180:"Ю",225:"ЮЗ",270:"З",315:"СЗ"};function tm(){return Fa().total<=0}function pc(e,t,n,s=mc){let o=null;const i=()=>{try{o??=new AudioContext,o.state==="suspended"&&o.resume();const d=o,C=d.currentTime+.01;for(const[L,S]of[880,1318.51].entries()){const M=d.createOscillator(),$=d.createGain();M.type="sine",M.frequency.value=S;const N=C+L*.09;$.gain.setValueAtTime(0,N),$.gain.linearRampToValueAtTime(.16,N+.02),$.gain.exponentialRampToValueAtTime(.001,N+.38),M.connect($).connect(d.destination),M.start(N),M.stop(N+.42)}}catch{}},c=document.createElement("div");c.className="compass-toast",document.body.append(c);let p=null;const l=d=>{c.textContent=d,c.classList.add("compass-toast--on"),i(),p!==null&&window.clearTimeout(p),p=window.setTimeout(()=>{c.classList.remove("compass-toast--on"),p=null},2400)};let f=-1,m=-1,h="",x="",g=-1,b=0;const w=d=>(d*180/Math.PI+360)%360,E=(d,C)=>{let L=(d-C)%360;return L>=180&&(L-=360),L<-180&&(L+=360),L};return{draw:(d,C,L)=>{if(L===0||C===0)return!1;const S=e();if(S===null)return h!==""?(d.clearRect(0,0,C,L),h="",!0):!1;const M=w(S),$=t(),N=n(),_=s();_!==null&&_.collected!==m?(m>=0&&_.collected>m&&l(_.collected>=_.total?`Все ${_.total} чекпоинтов собраны`:`Чекпоинт ${_.collected} из ${_.total}`),m=_.collected):(N.length!==f&&f>=0&&N.length<f&&_===null&&l(N.length>0?`Чекпоинт собран · осталось: ${N.length}`:"Все чекпоинты собраны!"),f=N.length);let I="";if(_!==null&&_.state!=="idle"){const X=_.state==="running"?Math.max(0,performance.now()-_.startMs):_.lastMs;I=`${Un(Math.floor(X/100)*100)} · ${_.collected}/${_.total}`}const H=`${C}x${L}|${M.toFixed(2)}|${$?`${$.x.toFixed(1)},${$.z.toFixed(1)}`:""}|${N.length}|${I}`;if(H===h)return!1;h=H;const B=Fa(),U=L/(B.total||1),F=Math.round(B.lane*U),z=F;d.save(),d.beginPath(),d.rect(0,0,C,L),d.clip(),d.clearRect(0,0,C,L);const pe=d.createLinearGradient(0,0,0,F);pe.addColorStop(0,"rgba(235, 219, 178, 0.15)"),pe.addColorStop(.6,"rgba(40, 40, 40, 0.94)"),d.fillStyle=pe,d.fillRect(0,0,C,F),d.strokeStyle="rgba(235, 219, 178, 0.18)",d.lineWidth=1,d.strokeRect(.5,.5,C-1,F-1);const _e=C/(us*2),de=C/2,Se=Math.round((M-us)/15)*15;d.textAlign="center",d.textBaseline="middle";for(let X=Se;X<=M+us;X+=15){const ne=de+E(X,M)*_e,K=em[(X%360+360)%360];K!==void 0?(d.fillStyle="#ebdbb2e6",d.font=`600 ${Math.round(F*.34)}px system-ui, sans-serif`,d.fillText(K,ne,F*.42)):X%45===0?(d.fillStyle="#ebdbb280",d.fillRect(ne-1,F*.3,2,F*.22)):(d.fillStyle="#ebdbb240",d.fillRect(ne-1,F*.36,2,F*.12))}if(d.fillStyle="#fe8019",d.fillRect(de-1.5,F*.14,3,F*.2),$){const X=[...N].map(Q=>{const q=Q.x-$.x,se=Q.z-$.z;return{cp:Q,dist:Math.round(Math.hypot(q,se)),off:E(w(Math.atan2(q,-se)),M)}}).sort((Q,q)=>Q.off-q.off);let ne=-1e9,K=0;for(const{cp:Q,dist:q,off:se}of X){const fe=`#${Q.color.toString(16).padStart(6,"0")}`;let ie=de+se*_e;if(Math.abs(se)>us-4){ie=de+Math.sign(se)*(C/2-14*(C/560)),d.save(),d.translate(ie,F*.42),d.rotate(Math.sign(se)*Math.PI/2),d.fillStyle=fe,d.beginPath(),d.moveTo(0,-6*(C/560)),d.lineTo(5*(C/560),3*(C/560)),d.lineTo(-5*(C/560),3*(C/560)),d.closePath(),d.fill(),d.restore();continue}Math.abs(ie-ne)<34*(C/560)?K=(K+1)%2:K=0,ne=ie;const Te=5*(C/560);d.fillStyle=fe,d.beginPath(),d.moveTo(ie,F*.2-Te),d.lineTo(ie+Te,F*.2),d.lineTo(ie,F*.2+Te),d.lineTo(ie-Te,F*.2),d.closePath(),d.fill(),d.fillStyle="#ebdbb2d9",d.font=`500 ${Math.round(F*.26)}px system-ui, sans-serif`,d.fillText(`${q}м`,ie,F*(.62+K*.24))}}if(_!==null&&I!==""){const X=C/560,ne=Math.max(10,Math.round(B.zone*.62*U));d.font=`600 ${ne}px system-ui, sans-serif`,d.textAlign="center",d.textBaseline="middle",(I!==x||ne!==g)&&(x=I,g=ne,b=d.measureText(I).width);const K=9*X,Q=ne+7*X,q=b+K*2,se=(C-q)/2,fe=z+Math.max(0,(L-z-Q)/2);d.beginPath(),typeof d.roundRect=="function"?d.roundRect(se,fe,q,Q,4*X):d.rect(se,fe,q,Q),d.fillStyle="rgba(29, 32, 33, 0.9)",d.fill(),d.strokeStyle=_.state==="finished"?"#b8bb2680":_.state==="aborted"?"#fabd2f80":"#ebdbb233",d.lineWidth=1,d.stroke(),d.fillStyle=_.state==="finished"?"#b8bb26":_.state==="aborted"?"#fabd2f":"#ebdbb2",d.fillText(I,C/2,fe+Q/2)}return d.restore(),!0},reset(){h=""},destroy(){p!==null&&window.clearTimeout(p),o?.close().catch(()=>{}),c.remove()}}}function nm(e,t,n,s=mc){const o=document.createElement("div");o.className="compass";const i=document.createElement("canvas");o.append(i);const c=document.createElement("style");c.textContent=Zu,o.append(c),document.body.append(o);const p=pc(e,t,n,s),l=()=>{const g=Math.min(window.devicePixelRatio||1,2);i.width=Math.round(i.clientWidth*g),i.height=Math.round(i.clientHeight*g)};l(),window.addEventListener("resize",l);let f=-1,m=-1,h=0;const x=()=>{const g=i.getContext("2d");g&&(i.width!==f||i.height!==m)&&(f=i.width,m=i.height,g.clearRect(0,0,i.width,i.height)),g&&p.draw(g,i.width,i.height),h=requestAnimationFrame(x)};return h=requestAnimationFrame(x),{destroy(){cancelAnimationFrame(h),window.removeEventListener("resize",l),p.destroy(),o.remove(),c.remove()}}}function sm(e,t){const n=e.graphicsDevice,s=l=>{const f=new qc(n,{name:`hud-${l.width}x${l.height}`,format:Qc,width:l.width,height:l.height,mipmaps:!1,minFilter:xi,magFilter:xi,addressU:_i,addressV:_i,anisotropy:1,premultiplyAlpha:!0,srgb:!0});return f.setSource(l),f};let o=null;const i=[];try{o=new Xt("hud-screen"),o.addComponent("screen",{screenSpace:!0,scaleMode:Yc}),e.root.addChild(o);for(const l of t){const f=document.createElement("canvas"),m=f.getContext("2d",{alpha:!0});if(!m)throw new Error("нет 2d-контекста");const h=new Xt(`hud-${l.name}`);h.addComponent("element",{type:Xc,anchor:new Jc(0,0,0,0),pivot:new Kc(0,0),opacity:1,useInput:!1}),o.addChild(h),h.enabled=!1,i.push({layer:l,entity:h,element:h.element,canvas:f,ctx:m,texture:null,sizeKey:"",dirty:!0})}}catch(l){console.warn("[hud] слой HUD не поднялся — HUD остаётся DOM-ом",l);for(const f of i)f.texture?.destroy();return o?.destroy(),{active:!1,destroy(){}}}const c=(l,f)=>{const m=l.layer.rect();if(!m||m.w<=0||m.h<=0)return l.entity.enabled=!1,!1;const h=Math.max(1,Math.round(m.w*f)),x=Math.max(1,Math.round(m.h*f)),g=`${h}x${x}`;if(g!==l.sizeKey){l.sizeKey=g,l.canvas.width=h,l.canvas.height=x;const b=s(l.canvas);l.element.texture=b,l.texture?.destroy(),l.texture=b,l.layer.reset(),l.dirty=!0}return l.element.width=m.w*f,l.element.height=m.h*f,l.entity.setLocalPosition(Math.round(m.x*f),n.height-Math.round((m.y+m.h)*f),0),l.entity.enabled=!0,!0},p=()=>{const l=n.width>0?n.width/Math.max(window.innerWidth,1):1;if(!(l<=0||!Number.isFinite(l)))for(const f of i){if(!f.ctx||!c(f,l))continue;const m=f.texture;if(!m)continue;(f.layer.draw(f.ctx,f.canvas.width,f.canvas.height,l)||f.dirty)&&(f.dirty=!1,m.setSource(f.canvas),m.upload())}};return e.on("prerender",p),{active:!0,destroy(){e.off("prerender",p);for(const l of i)l.texture?.destroy(),l.layer.destroy();o.destroy()}}}function om(e,t,n,s,o,i){e.beginPath(),typeof e.roundRect=="function"?e.roundRect(t,n,s,o,Math.min(i,o/2,s/2)):e.rect(t,n,s,o)}function am(e){let t=!1;const n=pc(e.getHeading,e.getVehicle,e.getCheckpoints,e.readRace),s=Cu(e.read),o=uc(e.readLives),i=()=>{if(tm())return null;const g=Math.min(window.innerWidth*.62,560),b=Fa();if(g<40||b.total<=0)return null;const w=e.safeTop()+(b.lane===26?126:92);return{x:(window.innerWidth-g)/2,y:w,w:g,h:b.total}},c=()=>{const g=e.clusterHost,b=g.parentElement;if(!b||g.offsetParent===null&&b.clientHeight===0)return null;const w=b.getBoundingClientRect();return w.height<4?null:{x:w.left,y:w.top,w:w.width,h:w.height}};return{layers:[(()=>{let g="";return{name:"bar",rect:c,draw(b,w,E,A){const d=`${w}x${E}@${A}`;return d===g?!1:(g=d,b.clearRect(0,0,w,E),b.save(),om(b,0,0,w,E,Math.max(4,6*A)),b.fillStyle="rgba(29, 32, 33, 0.93)",b.fill(),b.strokeStyle="rgba(235, 219, 178, 0.2)",b.lineWidth=Math.max(1,A),b.stroke(),b.restore(),!0)},reset(){g=""},destroy(){g=""}}})(),{name:"compass",rect:i,draw(g,b,w){return n.draw(g,b,w)},reset(){n.reset()},destroy(){n.destroy()}},{name:"cluster",rect:()=>{const g=e.clusterHost,b=c();if(!b)return null;const w=g.getBoundingClientRect();return{x:w.left>0?w.left:b.x+16,y:b.y,w:Math.min(480,Math.max(b.w,240)),h:b.h}},draw(g,b,w,E){return s.draw(g,b,w,E)},reset(){s.reset()},destroy(){s.destroy()}},{name:"lives",rect:()=>{const g=rc(),b=i(),w=e.safeTop()+92;return b!==null&&16+g.w>b.x-8?{x:16,y:b.y+b.h+8,w:g.w,h:g.h}:{x:16,y:w,w:g.w,h:g.h}},draw(g,b,w,E){return o.draw(g,b,w,E)},reset(){o.reset()},destroy(){o.destroy()}}],destroy(){t||(t=!0,n.destroy(),s.destroy(),o.destroy())}}}let Ji=!1,Xi=null;function fc(){return Xi??=ae(()=>import("./index.Dp09MIqC.js"),[]).then(e=>e.default),Xi}function hc(){try{return new URLSearchParams(location.search).has("vk_app_id")}catch{return!1}}const im=1e4;async function rm(){if(Ji||!hc())return!1;Ji=!0;try{const e=await fc(),t=await Promise.race([e.send("VKWebAppInit"),new Promise((n,s)=>{setTimeout(()=>s(new Error("платформа не ответила на VKWebAppInit")),im)})]);if(t?.result)return console.info("[vk] VKWebAppInit: платформа подтвердила запуск приложения"),!0;console.warn("[vk] VKWebAppInit: платформа ответила без подтверждения",t)}catch(e){console.warn("[vk] не удалось инициализировать приложение ВКонтакте",e)}return!1}const Jo={uid:"local",name:"Гость",photo:""},cm=8e3;function lm(){return String("6739294").trim()}function dm(e,t,n){return Promise.race([e,new Promise((s,o)=>{setTimeout(()=>o(new Error(n)),t)})])}async function um(){let e;try{e=new URLSearchParams(location.search)}catch{return Jo}const t=e.get("vk_user_id");if(!t)return Jo;const n=e.get("vk_app_id")??"",s=lm();if(s!==""&&n!==s)return console.warn("[vk] запуск с чужим app_id:",n,"— свой:",s),Jo;const o=`vk:${t}`;if(!hc())return{uid:o,name:"Игрок ВКонтакте",photo:""};try{const i=await fc(),c=await dm(i.send("VKWebAppGetUserInfo"),cm,"платформа не ответила на VKWebAppGetUserInfo"),p=`${c.first_name} ${c.last_name}`.trim();return{uid:o,name:p===""?"Игрок ВКонтакте":p,photo:c.photo_200}}catch(i){return console.warn("[vk] имя игрока не получено",i),{uid:o,name:"Игрок ВКонтакте",photo:""}}}let qi=null;function mm(){return qi??=um(),qi}function pm(e,t){let n=!1,s=null;const o=iu(e,{total:t,onFinished:c=>{fm(c,()=>n).then(p=>{if(n){p();return}s?.(),s=p})}}),i=window;return i.__blendarsRace=o.view,{view:o.view,abort(){o.abort()},destroy(){n=!0,o.destroy(),s?.(),s=null,i.__blendarsRace===o.view&&delete i.__blendarsRace}}}async function fm(e,t){const n=await mm(),s=au({uid:n.uid,name:n.name,photo:n.photo,timeMs:e.timeMs});if(console.info("[race] финиш:",Un(e.timeMs),"· чекпоинтов",e.collected,"из",e.total,"· место",s.rank,"из",s.total,"· игрок",n.uid),t())return()=>{};const{showFinishCard:o}=await ae(async()=>{const{showFinishCard:i}=await import("./finish-card.BU7UHCI5.js");return{showFinishCard:i}},__vite__mapDeps([3,2]));return t()?()=>{}:o({timeMs:e.timeMs,collected:e.collected,total:e.total,outcome:s,identity:n})}function hm(e){let t=0,n=0;const s=e.autoRender,o=()=>{const p=Wr();t=p>0?1e3/p:0,n=t,e.autoRender=t===0?s:!1},i=p=>{t!==0&&(n+=p*1e3,n>=t&&(n=0,e.renderNextFrame=!0))};o(),e.on("update",i);const c=Yr(o);return{destroy(){e.off("update",i),c(),e.autoRender=s}}}let bc=1,$t=null;function bm(){return Vr()*bc}function rp(e){bc=e,ua()}function ua(){$t?.graphicsDevice&&($t.graphicsDevice.maxPixelRatio=bm(),$t.resizeCanvas(),$t.updateCanvasSize())}function gm(e){$t=e,ua();const t=Yr(()=>{ua()});return()=>{t(),$t===e&&($t=null)}}const ym=250,_m="menuRenderFps",xm=`
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
`;function vm(e=null){const t=document.createElement("div");t.className="mini-stats",t.setAttribute("role","status"),t.setAttribute("aria-label","Статистика кадра");const n=document.createElement("span"),s=document.createElement("span"),o=document.createElement("span"),i=document.createElement("span");t.append(n,s,o,i);const c=document.createElement("style");c.id="mini-stats-style",c.textContent=xm,document.head.append(c);const p=A=>{t.classList.toggle("mini-stats--inline",A!==null);const d=A??document.body;t.parentElement!==d&&d.append(t)};p(e);let l=null,f=Es(),m=!1;const h=()=>$e("fps")||$e("cpu")||$e("draw")||$e("vram"),x=()=>{t.classList.toggle("visible",f&&l!==null&&h())},g=(A,d,C)=>{const L=d.fps,S=L>0&&L<30;if(S!==m&&(m=S,n.classList.toggle("warn",S)),C.fps){const M=d.user.get(_m),$=typeof M=="number"&&M>0?` · рендер ${M}`:"";n.textContent=`${L>0?Math.round(L):"—"} FPS${$} · ${d.frameTime.toFixed(1)} ms`}C.cpu&&(s.textContent=`CPU ${d.cpuUpdateTime.toFixed(1)} / ${d.cpuRenderTime.toFixed(1)} / ${d.cpuPhysicsTime.toFixed(1)} мс`),C.draw&&(o.textContent=`Draw ${Xo(d.drawCallCount)} · Прим. ${Xo(d.frame.primitives)} · Шейд. ${Xo(d.frame.shaders)}`),C.vram&&(i.textContent=`VRAM ${Math.round(d.vramTotalBytes/1048576)} МБ · ${A.graphicsDevice.width}×${A.graphicsDevice.height} ${A.graphicsDevice.isWebGPU?"WebGPU":"WebGL2"}`)},b=()=>{const A=l;if(!A||!f)return;const d={fps:$e("fps"),cpu:$e("cpu"),draw:$e("draw"),vram:$e("vram")};n.hidden=!d.fps,s.hidden=!d.cpu,o.hidden=!d.draw,i.hidden=!d.vram,g(A,A.stats,d)};x();const w=window.setInterval(b,ym),E=Hr(()=>{f=Es(),x(),b()});return{setHost(A){p(A),b()},setApp(A){l=A,x(),A&&b()},destroy(){window.clearInterval(w),E(),t.remove(),c.remove()}}}function Xo(e){return Number.isFinite(e)?e>=1e6?`${Math.round(e/1e5)}М`:e>=1e4?`${Math.round(e/1e3)}к`:`${Math.round(e)}`:"—"}const wm="hud-density--skinny",Em="hud-density--minimal";function Sm(){const e=document.documentElement,t=()=>{const n=Ad();e.classList.toggle(wm,n!=="full"),e.classList.toggle(Em,n==="minimal")};return t(),Hr(t)}function cp(){return 1}const Qi="blendars-scrollbar",km=[".dlg__body",".settings__scroll",".settings__tabs",".actions",".mp__list"],bt=e=>km.map(t=>`${t}${e}`).join(`,
`),Cm=`
/* Firefox: тонкая полоса, ползунок gray на дорожке bg1. */
@supports not selector(::-webkit-scrollbar) {
    ${bt("")} {
        scrollbar-width: thin;
        scrollbar-color: #928374 #28282899;
    }
}

@media (hover: hover) and (pointer: fine) {
    /* Chromium и WebKit. 12px — под штрих 8px плюс прозрачная рамка ползунка. */
    ${bt("::-webkit-scrollbar")} {
        width: max(0.75rem, 12px);
        height: max(0.75rem, 12px);
    }
    /* Дорожка — тот же тёмный серый, что подложка панелей: полоса читается как
       часть окна, а не как плашка поверх текста. */
    ${bt("::-webkit-scrollbar-track")} {
        background: #28282899;
        border-radius: 999px;
    }
    /* Стрелочные кнопки в старых WebKit — лишний хром. */
    ${bt("::-webkit-scrollbar-button")} {
        display: none;
        width: 0;
        height: 0;
    }
    /* Прозрачная рамка в 2px + background-clip: padding-box оставляют круглый
       штрих 8px, а не прямоугольник во всю ширину полосы. */
    ${bt("::-webkit-scrollbar-thumb")} {
        background: #928374;
        border: 1px solid transparent;
        background-clip: padding-box;
        border-radius: 999px;
    }
    ${bt("::-webkit-scrollbar-thumb:hover")} { background-color: #ebdbb2; }
    ${bt("::-webkit-scrollbar-thumb:active")} { background-color: #fe8019; }
    /* Уголок на пересечении двух полос серым квадратом вылезал бы в углу
       колонки вкладок, где полоса одна. */
    ${bt("::-webkit-scrollbar-corner")} { background: transparent; }
}
`;function Nm(){if(document.getElementById(Qi))return;const e=document.createElement("style");e.id=Qi,e.textContent=Cm,document.head.append(e)}const Ba=document.getElementById("app");if(!Ba)throw new Error("#app not found");Nm();let re=null,ma=null,Pt=null,pa=null;const zn={boot:.1,device:.35,decoders:.7,background:.95},yt=new ol(document.body);let Vn=null,fa=null,Fn=null,Wn=null,Ls=null,Be=!1,nt=null,As=null;const ha="blendars.backend";function Rs(e){try{e?localStorage.setItem(ha,e):localStorage.removeItem(ha)}catch{}}function Lm(){try{const e=localStorage.getItem(ha);return e==="webgpu"||e==="webgl2"?e:null}catch{return null}}function Am(){const e=new URLSearchParams(location.search).get("backend");return e==="webgpu"||e==="webgl2"?e:null}let un=Am()??Lm();const J=new xu(Ba,{onScene:e=>{yc(J,e)},onBack:()=>{_c(J)},onRecord:()=>{Gm()}});window.__blendarsEnterSmoke=()=>{jm(J)};const Ze=Eu(J.settings.backendSlot,{onSwitch:()=>{Dm()}});{const e=document.createElement("style");e.textContent=vu,document.head.append(e)}navigator.gpu||Ze.setUnavailable("WebGPU не поддерживается этим браузером");function Oa(e,t){const n=t==="scene";e.setMode(t),e.setSceneChrome(n),Ts.setHost(e.statsHostFor(n))}const Ts=vm(J.statsHost);Sm();yt.setStage("интерфейс",zn.boot);window.__blendarsMenuReady=!0;rm();Tm();function Rm(e){As?.();const t=gm(e),n=hm(e);As=()=>{t(),n.destroy()}}async function Tm(){try{yt.setStage("пресет настроек",zn.boot);const{askBootPreset:e}=await ae(async()=>{const{askBootPreset:s}=await import("./boot-preset.CqsmDHES.js");return{askBootPreset:s}},__vite__mapDeps([4,2]));if(await e(),un==="webgpu"){const{confirmWebgpuSwitch:s}=await ae(async()=>{const{confirmWebgpuSwitch:i}=await import("./confirm-dialog.DpA-HaJF.js");return{confirmWebgpuSwitch:i}},[]);await s()||(un=null,Rs(null),J.setStatus("Запуск на WebGL2 — WebGPU не подтверждён"))}const t=await mn((s,o)=>{yt.setStage(s,o??void 0),yt.updateFromResources(),Pm()});window.__blendarsEngine={backend:t.backend},window.__blendarsApp=t.app,Wn=t.backend,Ze.setBackend(t.backend),Ts.setApp(t.app),Rm(t.app),t.backend==="webgpu"&&gc(t),yt.setStage("сцена меню",zn.background);const{buildMenuBackground:n}=await ae(async()=>{const{buildMenuBackground:s}=await import("./menu-background.7JduhFlu.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));nt=await n(t.app),window.__blendarsBackgroundReady=!0,Mm(),yt.setStage("готово",1),J.setStatus(""),await yt.hide(),window.__blendarsInteractive=!0,console.info("[blendars] boot complete",t.backend)}catch(e){console.error("[blendars] boot failed",e),yt.setError("Не удалось запустить рендер. Проверьте поддержку WebGPU/WebGL2 в браузере."),window.__blendarsInteractive=!0}}async function Pm(){const e=new URLSearchParams(location.search).get("bootDelay");if(!e)return;const t=Number(e);!Number.isFinite(t)||t<=0||await new Promise(n=>setTimeout(n,Math.min(t,3e4)))}async function Mm(){try{const{probeServiceWorker:e}=await ae(async()=>{const{probeServiceWorker:n}=await import("./capabilities.Vl_UvQZj.js");return{probeServiceWorker:n}},[]),t=await e("/blend-ars/sw.js");console.info(t==="registered"?"[blendars] Service Worker зарегистрирован: оффлайн-оболочка доступна":`[blendars] Service Worker: ${t} — оффлайн-старт недоступен`)}catch(e){console.warn("[blendars] регистрация Service Worker не удалась",e)}}function mn(e){return Vn??=Im(e),Vn}async function Im(e){const{initEngine:t}=await ae(async()=>{const{initEngine:i}=await import("./engine-bootstrap.DOKILe95.js");return{initEngine:i}},__vite__mapDeps([8,2])),n=document.createElement("canvas");n.className="game-canvas",n.style.zIndex="0",document.body.insertBefore(n,Ba),fa=n;const s=un??"webgl2";return t(n,{physics:!0,deviceTypes:s==="webgl2"?["webgl2","webgpu"]:["webgpu","webgl2"],skipAdapterProbe:s==="webgpu"&&un!==null,onStage:(i,c)=>{c===1?e?.(i,zn.decoders):e?.(i,zn.device)}})}const $m=5,Fm=1e3,Bm=3;function gc(e){let t=0;Fn?.();let n=null;const s=p=>{Rs(null),Da("webgl2",{persist:!1,restoreScene:!1,reason:p})};let o=e.app.frame,i=0;const c=window.setInterval(()=>{if(document.hidden){o=e.app.frame;return}const p=e.app.frame;p===o?(i++,i>=Bm&&(window.clearInterval(c),s("кадры не идут — вероятно, WebGPU завис на первом кадре"))):(i=0,o=p)},Fm);Fn=()=>{window.clearInterval(c),n?.(),n=null},ae(async()=>{const{watchWebGpuErrors:p}=await import("./engine-bootstrap.DOKILe95.js");return{watchWebGpuErrors:p}},__vite__mapDeps([8,2])).then(({watchWebGpuErrors:p})=>{if(Be){Fn?.();return}n=p(e.device,l=>{t++,console.warn(`[blendars] webgpu error #${t}: ${l.slice(0,200)}`),(Om(l)||t>=$m)&&(window.clearInterval(c),s(l))})})}function Om(e){return/out of memory|not enough memory/i.test(e)}async function Da(e,t){if(Be)return;Be=!0,Ze.setBusy(!0),t.reason&&console.warn("[blendars] смена рендера:",t.reason.slice(0,200));const{probeWebGpuAdapter:n}=await ae(async()=>{const{probeWebGpuAdapter:i}=await import("./engine-bootstrap.DOKILe95.js");return{probeWebGpuAdapter:i}},__vite__mapDeps([8,2])),s=setTimeout(()=>{J.setStatus("Рендер переключается дольше обычного… если не идёт — F9")},25e3);if(e==="webgpu"){const i=await n();if(!i){Ze.setUnavailable("WebGPU не поддерживается этим браузером"),J.setStatus("WebGPU не поддерживается этим браузером"),clearTimeout(s),Ze.setBusy(!1),Be=!1;return}i.stalled?console.warn("[blendars] зонд WebGPU не ответил — пробуем по явному запросу"):i.software&&J.setStatus(`WebGPU: софтверный адаптер (${i.label||"без описания"}) — рендер может упасть`);const{confirmWebgpuSwitch:c}=await ae(async()=>{const{confirmWebgpuSwitch:l}=await import("./confirm-dialog.DpA-HaJF.js");return{confirmWebgpuSwitch:l}},[]);if(!await c()){J.setStatus("Остались на WebGL2 — WebGPU не подтверждён"),clearTimeout(s),Ze.setBusy(!1),Be=!1;return}}const o=wc();o.setStage("смена рендера…");try{Fn?.(),Fn=null,o.setStage("смена рендера: остановка движка…"),re?.destroy(),re=null,window.__blendarsSceneReady=!1,xc(),vc(),xa(null),nt?.destroy(),nt=null;const i=await Vn;Vn=null,Wn=null,Ts.setApp(null),As?.(),As=null,i?.detachResize(),i?.app.destroy(),fa?.remove(),fa=null,un=e,t.persist&&Rs(e),o.setStage(`смена рендера: движок ${e.toUpperCase()}…`);const c=await mn();Wn=c.backend,window.__blendarsEngine={backend:c.backend},window.__blendarsApp=c.app,Ze.setBackend(c.backend),Ts.setApp(c.app),c.backend==="webgpu"&&gc(c),c.backend!==e&&J.setStatus(`${e.toUpperCase()} недоступен — рендер: ${c.backend.toUpperCase()}`);const p=t.restoreScene===!1?null:Ls;if(p)o.done(),await yc(J,p);else{Ls=null,o.setStage("смена рендера: сцена меню…");const{buildMenuBackground:l}=await ae(async()=>{const{buildMenuBackground:f}=await import("./menu-background.7JduhFlu.js");return{buildMenuBackground:f}},__vite__mapDeps([5,2,6,7]));nt=await l(c.app),Oa(J,"menu"),J.setBusy(!1),c.backend===e&&J.setStatus(""),o.done()}}catch(i){if(console.error("[blendars] смена рендера не удалась",i),t.allowRetry!==!1&&e!=="webgl2"){o.done(),un="webgl2",Rs(null),Be=!1,Ze.setBusy(!1),await Da("webgl2",{persist:!1,allowRetry:!1});return}o.fail("не удалось сменить рендер"),J.setStatus("Не удалось сменить рендер — перезагрузите страницу (F9)")}finally{clearTimeout(s),Ze.setBusy(!1),Be=!1}}async function Dm(){Be||Wn&&await Da(Wn==="webgpu"?"webgl2":"webgpu",{persist:!0})}async function jm(e){if(!Be){e.setBusy(!0);try{if(await mn(),new URLSearchParams(location.search).get("scene")==="smoke"){const{buildSmokeScene:t}=await ae(async()=>{const{buildSmokeScene:n}=await import("./smoke-scene.N2ScIsGo.js");return{buildSmokeScene:n}},__vite__mapDeps([9,2]));nt?.destroy(),nt=null,t((await mn()).app)}e.setStatus("Ангар появится на этапе 4"),e.setBusy(!1)}catch(t){console.error("[blendars] enter game failed",t),e.setStatus("Не удалось открыть сцену"),e.setBusy(!1)}}}async function yc(e,t){if(Be)return;e.setBusy(!0),e.setStatus(t==="maserati"?"Загрузка сцены: мазерати…":"Загрузка сцены…");const n=wc();try{nt?.destroy(),nt=null;const s=await mn(),{buildVehicleScene:o}=await ae(async()=>{const{buildVehicleScene:i}=await import("./vehicle-scene.gpKvc69E.js");return{buildVehicleScene:i}},__vite__mapDeps([10,2,8,6]));re=await o(s.app,i=>n.setStage(i),{body:t,onAssetProgress:(i,c)=>n.setStage(i,c)}),Oa(e,"scene"),e.setBusy(!1),e.setStatus("WASD / стрелки — ехать, пробел — ручник, R — сброс на месте, Q — плечо камеры"),Ls=t,window.__blendarsSceneReady=!0,Um(s.app),zm(s.app),xa(()=>Hm()),n.done()}catch(s){console.error("[blendars] vehicle scene failed",s),e.setStatus("Не удалось загрузить сцену"),n.fail(String(s?.message??s)),e.setBusy(!1)}}async function _c(e){re?.destroy(),re=null,Ls=null,window.__blendarsSceneReady=!1,xa(null);const t=await mn(),{buildMenuBackground:n}=await ae(async()=>{const{buildMenuBackground:s}=await import("./menu-background.7JduhFlu.js");return{buildMenuBackground:s}},__vite__mapDeps([5,2,6,7]));nt=await n(t.app),Oa(e,"menu"),e.setBusy(!1),e.setStatus(""),xc(),vc()}function Hm(){const e=re?.root.findByName("camera"),t=e?.script?.get(Lu);if(!e||!t)return null;const n=(o,i)=>typeof o=="number"&&Number.isFinite(o)?o:i,s=(o,i,c)=>o<i?i:o>c?c:o;return{read:()=>({yaw:n(t._manualYaw,0),lift:n(t._manualLift,0),zoom:n(t._zoom,1),shoulder:n(t.shoulder,1),distance:n(t.distance,6.4),height:n(t.height,2.5),fov:e.camera?n(e.camera.fov,60):60}),write:o=>{o.yaw!==void 0&&(t._manualYaw=s(o.yaw,-180,180)),o.lift!==void 0&&(t._manualLift=s(o.lift,-.6,3.4)),o.zoom!==void 0&&(t._zoom=s(o.zoom,.55,1.7)),o.shoulder!==void 0&&(t.shoulder=o.shoulder),o.distance!==void 0&&(t.distance=s(o.distance,3,15)),o.height!==void 0&&(t.height=s(o.height,1,6)),o.fov!==void 0&&e.camera&&(e.camera.fov=s(o.fov,40,90))},reset:()=>{t.resetLook()}}}async function Gm(){const e=(t,n)=>{J.setRecordState(t,n)};try{if(!Pt){const{GameRecorder:t}=await ae(async()=>{const{GameRecorder:o}=await import("./video-recorder.CIjkjVzd.js");return{GameRecorder:o}},__vite__mapDeps([11,2,1])),n=Vn;if(n===null){e("error","движок не поднят, запись невозможна");return}const s=(await n.catch(()=>null))?.app??null;if(s===null){e("error","сначала войди в сцену");return}Pt=new t(s,{onState:(o,i)=>e(o,i),onProgress:o=>J.setRecordProgress(o)},{frameRate:Kr(),width:Nd(s.graphicsDevice.canvas.width||window.innerWidth),quality:Jr(),keyFrameInterval:Xr(),sound:la(),attachAudio:o=>re?.audio?.attachRecordStream(o)??(()=>{})})}if(Pt.recording){const t=await Pt.stop();t>0&&e("idle",`файл ${(t/1048576).toFixed(1)} МБ сохранён`)}else await Pt.start()}catch(t){e("error",t instanceof Error?t.message:"запись недоступна")}}function Um(e){const t=()=>re?.root.findByName("vehicle")?.script?.get(ac)??null,n=re?Ju(e,re.root,da):null,s=re?pm(e,da):null,o=re?.root.findByName("vehicle"),i=o?Iu(e,o):null,c=()=>i?.view??null,p=()=>n?.list()??[],l=()=>s?.view??null,f=()=>{const N=re?.root.findByName("camera")?.forward;return N?Math.atan2(N.x,-N.z):null},m=()=>{const $=re?.root.findByName("vehicle")?.getPosition();return $?{x:$.x,z:$.z}:null},h=document.createElement("div");h.style.cssText="position:fixed;left:0;top:0;width:0;height:0;padding-top:env(safe-area-inset-top);visibility:hidden;pointer-events:none",document.body.append(h);let x=0;const g=()=>{const $=Number.parseFloat(getComputedStyle(h).paddingTop);x=Number.isFinite($)?$:0};g(),window.addEventListener("resize",g),window.addEventListener("orientationchange",g);let b=null,w=null,E=null,A=null,d=!0,C=null;const L=()=>{Le("toggle")},S=()=>{s?.abort(),ae(async()=>{const{showGameOverCard:$}=await import("./game-over-card.BC8oVBan.js");return{showGameOverCard:$}},__vite__mapDeps([12,2])).then(({showGameOverCard:$})=>{d&&(C?.(),C=$({max:i?.view.max??Cs,onReturn:()=>{C=null,_c(J)}}))})};e.on("lives:hit",L),e.on("lives:depleted",S);const M=am({getHeading:f,getVehicle:m,getCheckpoints:p,readRace:l,read:t,readLives:c,clusterHost:J.clusterHost,safeTop:()=>x});b=sm(e,M.layers),b.active?document.documentElement.classList.add("hud-in-canvas"):(b=null,M.destroy(),w=Nu(t,J.clusterHost),E=nm(f,m,p,l),A=Yu(c)),ma=()=>{d=!1,e.off("lives:hit",L),e.off("lives:depleted",S),C?.(),C=null,i?.destroy(),A?.destroy(),A=null,Pt?.destroy(),Pt=null,document.documentElement.classList.remove("hud-in-canvas"),b?.destroy(),b=null,w?.destroy(),E?.destroy(),n?.destroy(),s?.destroy(),window.removeEventListener("resize",g),window.removeEventListener("orientationchange",g),h.remove()}}function xc(){ma?.(),ma=null}function zm(e){re&&ae(async()=>{const{attachTouchControls:t}=await import("./touch-controls.Cbl88970.js");return{attachTouchControls:t}},__vite__mapDeps([13,2])).then(({attachTouchControls:t})=>{re&&(pa=t(e,re.root).destroy)})}function vc(){pa?.(),pa=null}function wc(){const e=document.createElement("div");e.className="loading",er(e);const t=document.createElement("div");t.className="loading__title",t.textContent="СЦЕНА";const n=document.createElement("div");n.className="loading__bar loading__bar--unknown";const s=document.createElement("div");s.className="loading__fill",n.append(s);const o=document.createElement("div");return o.className="loading__stage",o.style.opacity="0.8",o.style.fontSize="13px",o.style.textTransform="uppercase",e.append(t,n,o),document.body.append(e),{setStage(i,c){if(o.textContent=i,c===void 0||!Number.isFinite(c)){n.classList.add("loading__bar--unknown");return}n.classList.remove("loading__bar--unknown"),s.style.width=`${Math.round(Math.min(1,Math.max(0,c))*100)}%`},done(){e.remove()},fail(i){n.hidden=!0,o.textContent=`ошибка: ${i}`,setTimeout(()=>e.remove(),4e3)}}}window.addEventListener("keydown",e=>{e.key==="F9"&&location.reload()});export{jo as A,Ho as B,cp as C,Lu as D,Go as E,Di as F,Hi as G,Un as H,op as I,Ps as J,np as K,cd as L,tp as M,ip as V,ws as a,It as b,rp as c,gt as d,Zm as e,Qm as f,md as g,Xm as h,ep as i,Yr as j,Jm as k,qo as l,ac as m,Km as n,qm as o,Oo as p,sp as q,rs as r,Qo as s,Md as t,Tt as u,Le as v,Hr as w,Wm as x,Ym as y,ap as z};
