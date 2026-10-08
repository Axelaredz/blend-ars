import{E as Ke,F as Ye,G as Qe,H as Ge,q as Ze}from"./index.Pz9Ujn6W.js";import{a as et,e as tt,r as nt}from"./music-audio.DNu4TXPq.js";import"./playcanvas.DbI3qi7k.js";const Le=new URL("/blend-ars/assets/play.ljQgqKpg.svg",import.meta.url).href,rt=new URL("/blend-ars/assets/pause.BsfZCdau.svg",import.meta.url).href,ot=new URL("/blend-ars/assets/stop.BNSTkhWY.svg",import.meta.url).href,it=new URL("/blend-ars/assets/play-forward.BLxBrQDV.svg",import.meta.url).href,at=new URL("/blend-ars/assets/play-back.B_o0TVu1.svg",import.meta.url).href,st=new URL("/blend-ars/assets/shuffle.DRAhmmsA.svg",import.meta.url).href,Ae=new URL("/blend-ars/assets/repeat.BQqP9Uhv.svg",import.meta.url).href,lt=new URL("/blend-ars/assets/repeat-one.BIFD9HWc.svg",import.meta.url).href,Ce=new URL("/blend-ars/assets/speaker-high.19nB43rP.svg",import.meta.url).href,ct=new URL("/blend-ars/assets/speaker-mute.1uM3gyfc.svg",import.meta.url).href,dt=new URL("/blend-ars/assets/folder-open.CfcSX5vp.svg",import.meta.url).href,Ne=new Set(["mp3","ogg","oga","opus","wav","m4a","mp4","m4b","aac","flac","weba","webm","aif","aiff","aifc"]),Q=["off","all","one"],Re={off:"Повтор выключен",all:"Повтор всего плейлиста",one:"Повтор одного трека"},Me="blendars.music.mode.v1",P=40,Pe=6,ut=12,pt=5,de=new Intl.Collator("ru",{numeric:!0,sensitivity:"base"}),mt=`
.mp {
    display: flex;
    flex-direction: column;
    gap: 12px;
    /* 100% от тела окна: .dlg__body — flex-элемент колонки с определённой
       высотой, поэтому процент разрешается, и список получает свою
       прокрутку вместо общей прокрутки окна. */
    height: 100%;
    box-sizing: border-box;
    /* Обрезка: полоса прогресса и кнопки не должны вылезать за окно, когда
       панель окон на телефоне узкая. */
    overflow: hidden;
}

/* --- Шапка: выбор папки и что в ней нашлось --------------------------- */
.mp__head {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}
.mp__folder {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    padding: 0 14px;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    background: #282828e6;
    color: #ebdbb2;
    font: inherit;
    font-size: 14px;
    cursor: pointer;
    touch-action: manipulation;
}
.mp__folder::before {
    content: '';
    width: 18px;
    height: 18px;
    flex: none;
    background-color: #ebdbb2;
    -webkit-mask: var(--mp-icon) center / contain no-repeat;
    mask: var(--mp-icon) center / contain no-repeat;
}
.mp__folder:hover { border-color: #fe8019; color: #fe8019; }
.mp__folder:hover::before { background-color: #fe8019; }
.mp__folder:active { border-color: #d65d0e; color: #d65d0e; }
.mp__folder:focus-visible { outline: 1px solid #ebdbb2; outline-offset: 2px; }
.mp__folder[disabled] { opacity: 0.5; cursor: default; }
/* Состояние папки одной строкой: имя и счётчик. Многоточие, а не перенос —
   иначе на узкой панели шапка съедает треть окна. */
.mp__status {
    margin: 0;
    min-width: 0;
    flex: 1;
    font-size: 13px;
    line-height: 1.4;
    color: #a89984;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* --- Сейчас играет ------------------------------------------------------ */
.mp__now {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px 12px;
    border: 1px solid #ebdbb233;
    border-radius: max(0.375rem, 0.35em);
    background: #28282880;
}
.mp__title {
    margin: 0;
    font-size: 15px;
    line-height: 1.35;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.mp__title--idle { color: #a89984; font-style: italic; }
.mp__times {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: #a89984;
}

/* Полоса прогресса: клик и перетаскивание — перемотка. */
.mp__seek {
    display: flex;
    align-items: center;
    /* Зона нажатия 22px при высоте самой полосы 10px: промахнуться мимо неё
       на телефоне почти невозможно, а сама полоса не раздувает панель. */
    height: 22px;
    cursor: pointer;
    touch-action: none;
}
.mp__seek:focus-visible { outline: 1px solid #ebdbb2; outline-offset: 2px; border-radius: 4px; }
.mp__seek[aria-disabled="true"] { opacity: 0.45; cursor: default; }
.mp__track {
    position: relative;
    width: 100%;
    height: 10px;
    overflow: hidden;
    border: 1px solid #ebdbb255;
    border-radius: 999px;
    background: #1d2021;
}
.mp__fill {
    position: absolute;
    inset: 0;
    /* Масштаб вместо width: см. пункт 2 в шапке модуля. */
    transform: scaleX(0);
    transform-origin: left center;
    background: #fe8019;
    will-change: transform;
}

/* --- Транспорт ---------------------------------------------------------- */
.mp__ctrls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
}
.mp__btn {
    appearance: none;
    width: max(3rem, 44px);
    height: max(3rem, 44px);
    min-width: 44px;
    min-height: 44px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ebdbb255;
    border-radius: max(0.375rem, 0.35em);
    background: #282828e6;
    cursor: pointer;
    touch-action: manipulation;
}
.mp__btn::before {
    content: '';
    width: 58%;
    height: 58%;
    background-color: #ebdbb2;
    -webkit-mask: var(--mp-icon) center / contain no-repeat;
    mask: var(--mp-icon) center / contain no-repeat;
}
.mp__btn:hover { border-color: #fe8019; }
.mp__btn:hover::before { background-color: #fe8019; }
.mp__btn:active { border-color: #d65d0e; transform: translateY(1px); }
.mp__btn:active::before { background-color: #d65d0e; }
.mp__btn:focus-visible { outline: 1px solid #ebdbb2; outline-offset: 2px; }
.mp__btn[disabled] { opacity: 0.45; cursor: default; transform: none; }
/* Главная кнопка заметнее остальных: оранжевая заливка вместо серого
   стекла и на 8 пикселей больше соседей. */
.mp__btn--main {
    width: max(3.5rem, 52px);
    height: max(3.5rem, 52px);
    min-width: 52px;
    min-height: 52px;
    border-color: #fe8019;
    background: #fe801933;
}
.mp__btn--main::before { width: 64%; height: 64%; background-color: #fe8019; }
.mp__btn--main:hover { background: #fe801944; }
/* Включённый режим (перемешивание, повтор, звук) — оранжевая рамка. */
.mp__btn--on { border-color: #fe8019; }
.mp__btn--on::before { background-color: #fe8019; }

/* --- Громкость ---------------------------------------------------------- */
.mp__vol {
    display: flex;
    align-items: center;
    gap: 10px;
}
.mp__volslider {
    flex: 1;
    min-width: 0;
    height: 22px;
    margin: 0;
    /* Тот же синий gruvbox, что у ползунков настроек (см. settings.ts). */
    accent-color: #458588;
    cursor: pointer;
}

/* Тумблер: светлая ручка и тёмная рамка — как у ползунков настроек. */
.mp__vol::-webkit-slider-thumb {
    box-shadow: 0 0 0 2px #1d2021;
}
.mp__vol::-moz-range-thumb {
    box-shadow: 0 0 0 2px #1d2021;
}
.mp__volvalue {
    flex: none;
    min-width: 44px;
    text-align: right;
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: #a89984;
}

/* --- Список треков ------------------------------------------------------ */
.mp__list {
    position: relative;
    flex: 1 1 auto;
    min-height: 120px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-gutter: stable;
    -webkit-overflow-scrolling: touch;
    border: 1px solid #ebdbb233;
    border-radius: max(0.375rem, 0.35em);
}
/* Пустой блок нужной высоты: из него скроллится лента с рядами. */
.mp__spacer { position: relative; width: 100%; }
.mp__rows { position: absolute; top: 0; left: 0; right: 0; will-change: transform; }
.mp__row {
    display: flex;
    align-items: center;
    gap: 10px;
    /* Жёстко ROW_H: виртуализация считает позицию ряда как index * ROW_H. */
    height: 40px;
    padding: 0 10px;
    border: 0;
    border-bottom: 1px solid #3c3836;
    background: transparent;
    color: #ebdbb2;
    font: inherit;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    touch-action: manipulation;
    overflow: hidden;
}
.mp__row:hover { background: #3c3836; }
.mp__row:focus-visible { outline: 1px solid #ebdbb2; outline-offset: -1px; }
.mp__row--active { background: #fe801920; color: #fe8019; }
/* Номер фиксированной ширины: подписи «9» и «10» иначе прыгали бы на пиксель
   при каждой смене. */
.mp__num {
    flex: none;
    width: 28px;
    text-align: right;
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: #665c54;
}
.mp__row--active .mp__num { color: #fe8019; }
.mp__label { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.mp__empty {
    margin: 0;
    padding: 22px 16px;
    border: 1px dashed #4a4a4a;
    border-radius: max(6px, 0.35em);
    font-size: 14px;
    line-height: 1.5;
    color: #a89984;
    text-align: center;
}
`;function $e(s){const a=s.lastIndexOf(".");return a<=0?"":s.slice(a+1).toLowerCase()}function Be(s){const a=s.lastIndexOf(".");return a<=0?s:s.slice(0,a)}function ue(s){if(!Number.isFinite(s)||s<0)return"0:00";const a=Math.floor(s),d=a%60,p=Math.floor(a/60)%60,u=Math.floor(a/3600),_=String(d).padStart(2,"0");return u===0?`${p}:${_}`:`${u}:${String(p).padStart(2,"0")}:${_}`}const ft="blendars-music",z="folder",Oe="last";function Te(){return new Promise((s,a)=>{if(typeof indexedDB>"u"){a(new Error("нет IndexedDB"));return}const d=indexedDB.open(ft,1);d.onupgradeneeded=()=>{d.result.createObjectStore(z)},d.onsuccess=()=>s(d.result),d.onerror=()=>a(d.error??new Error("IndexedDB не открылась"))})}async function bt(s){let a=null;try{a=await Te(),await new Promise((d,p)=>{const u=a.transaction(z,"readwrite");u.objectStore(z).put(s,Oe),u.oncomplete=()=>d(),u.onerror=()=>p(u.error??new Error("запись не удалась"))})}catch{}finally{a?.close()}}async function ht(){let s=null;try{return s=await Te(),await new Promise(a=>{const p=s.transaction(z,"readonly").objectStore(z).get(Oe);p.onsuccess=()=>{const u=p.result;a(u!=null&&u.kind==="directory"?u:null)},p.onerror=()=>a(null)})}catch{return null}finally{s?.close()}}const o=et;function vt(){let s=[],a=-1,d="off",p=!1,u=!1,_=0,H=!1,pe=!1,$=0;if(!document.getElementById("music-player-style")){const e=document.createElement("style");e.id="music-player-style",e.textContent=mt,document.head.append(e)}const j=document.createElement("div");j.className="mp";const W=document.createElement("div");W.className="mp__head";const m=document.createElement("p");m.className="mp__status",m.textContent="Папка не выбрана — музыка не играет.";function k(e,n,r){const t=document.createElement("button");return t.className="mp__btn",t.type="button",t.title=n,t.setAttribute("aria-label",n),t.style.setProperty("--mp-icon",`url(${JSON.stringify(e)})`),t.addEventListener("pointerdown",i=>{i.preventDefault(),!t.disabled&&r()}),t}const v=document.createElement("button");v.className="mp__folder",v.type="button",v.textContent="Выбрать папку",v.style.setProperty("--mp-icon",`url(${JSON.stringify(dt)})`),W.append(v,m);const G=document.createElement("div");G.className="mp__now";const w=document.createElement("p");w.className="mp__title mp__title--idle",w.textContent="Ничего не играет";const c=document.createElement("div");c.className="mp__seek",c.tabIndex=0,c.setAttribute("role","slider"),c.setAttribute("aria-label","Перемотка трека"),c.setAttribute("aria-valuemin","0"),c.setAttribute("aria-valuemax","100"),c.setAttribute("aria-valuenow","0"),c.setAttribute("aria-valuetext","0:00");const X=document.createElement("div");X.className="mp__track";const B=document.createElement("div");B.className="mp__fill",X.append(B),c.append(X);const Z=document.createElement("div");Z.className="mp__times";const O=document.createElement("span");O.textContent="0:00";const q=document.createElement("span");q.textContent="0:00",Z.append(O,q),G.append(w,c,Z);const ee=document.createElement("div");ee.className="mp__ctrls";const me=k(at,"Предыдущий трек",je),E=k(Le,"Играть",We);E.classList.add("mp__btn--main");const fe=k(it,"Следующий трек",xe),be=k(ot,"Стоп",F),V=k(st,"Перемешать",Xe),S=k(Ae,Re.off,qe);V.setAttribute("aria-pressed","false"),S.setAttribute("aria-pressed","false"),ee.append(me,E,fe,be,V,S);const te=document.createElement("div");te.className="mp__vol";const C=k(Ce,"Выключить звук",De);C.classList.add("mp__btn--on");const h=document.createElement("input");h.className="mp__volslider",h.type="range",h.min="0",h.max="100",h.step="1",h.setAttribute("aria-label","Громкость музыки");const ne=document.createElement("span");ne.className="mp__volvalue",te.append(C,h,ne);const f=document.createElement("div");f.className="mp__list";const J=document.createElement("div");J.className="mp__spacer";const L=document.createElement("div");L.className="mp__rows",J.append(L),f.append(J);const N=document.createElement("p");N.className="mp__empty",N.textContent="Папка не выбрана или в ней нет аудиофайлов. Поддерживаются mp3, ogg, opus, wav, m4a, flac, aac и webm; вложенные папки обходятся, скрытые пропускаются.",N.hidden=!0,j.append(W,G,ee,te,f,N);const g=document.createElement("input");g.type="file",g.multiple=!0,g.accept="audio/*",g.hidden=!0,g.setAttribute("webkitdirectory",""),g.setAttribute("directory",""),j.append(g);const re=Ke({title:"Музыка",body:j});function K(){h.value=String(Math.round(Ge("music")*100)),ne.textContent=`${h.value}%`;const e=u?0:Ze("music"),n=e>0?Ce:ct;C.style.setProperty("--mp-icon",`url(${JSON.stringify(n)})`),C.classList.toggle("mp__btn--on",e>0),C.setAttribute("aria-pressed",String(e>0)),C.title=e>0?"Выключить звук":"Включить звук",o.volume=e}h.addEventListener("input",()=>{u=!1,Ye("music",Number(h.value)/100),K()});function De(){u=!u,K()}const Ue=Qe(K),x=new Map;async function Ie(e){const n=x.get(e);if(n!==void 0)return x.delete(e),x.set(e,n),n;const r=s[e];if(r===void 0)throw new Error(`трек ${e} исчез из плейлиста`);const t=r.source,i=t.kind==="file"?t.file:await t.handle.getFile(),b=URL.createObjectURL(i);for(x.set(e,b);x.size>ut;){const l=x.keys().next();if(l.done===!0)break;const A=l.value,Se=x.get(A);Se!==void 0&&URL.revokeObjectURL(Se),x.delete(A)}return b}function he(){for(const e of x.values())URL.revokeObjectURL(e);x.clear()}let T=240,D=0,U=0;const Y=new Map;function ge(){for(const[e,n]of Y)n.classList.toggle("mp__row--active",e===a)}function Fe(e){const n=s[e],r=document.createElement("button");r.className="mp__row",r.type="button",r.dataset.index=String(e);const t=document.createElement("span");t.className="mp__num",t.textContent=String(e+1);const i=document.createElement("span");return i.className="mp__label",i.textContent=n?.title??"",r.append(t,i),n!==void 0&&n.rel!==n.title&&(r.title=n.rel),r}function R(e){const n=s.length;if(n===0){N.hidden=!1,f.hidden=!0,(D!==0||U!==0||L.childElementCount>0)&&(L.replaceChildren(),Y.clear(),D=0,U=0);return}N.hidden=!0,f.hidden=!1,J.style.height=`${n*P}px`;const r=f.scrollTop,t=Math.max(0,Math.floor(r/P)-Pe),i=Math.min(n,Math.ceil((r+T)/P)+Pe);if(!e&&t===D&&i===U)return;D=t,U=i,L.style.transform=`translateY(${t*P}px)`;const b=document.createDocumentFragment();Y.clear();for(let l=t;l<i;l++){const A=Fe(l);Y.set(l,A),b.append(A)}L.replaceChildren(b),ge()}function ze(){if(a>=0&&(a<D||a>=U)){const e=a*P;f.scrollTop=e<f.scrollTop?e:e+P-T,R(!0);return}ge()}let oe=!1;f.addEventListener("scroll",()=>{oe||(oe=!0,requestAnimationFrame(()=>{oe=!1,R(!1)}))},{passive:!0});const _e=new ResizeObserver(()=>{T=f.clientHeight,R(!0)});_e.observe(f),L.addEventListener("click",e=>{const n=e.target;if(!(n instanceof Element))return;const r=n.closest(".mp__row");if(!(r instanceof HTMLElement))return;const t=Number(r.dataset.index);if(!(!Number.isInteger(t)||t<0||t>=s.length)){if(t===a){o.currentTime=0,o.play().catch(()=>{});return}M(t)}});function I(){const e=o.duration,n=o.currentTime,r=Number.isFinite(e)&&e>0?n/e:0;B.style.transform=`scaleX(${r})`,c.setAttribute("aria-valuenow",String(Math.round(r*100)));const t=ue(n);O.textContent=t,c.setAttribute("aria-valuetext",t)}function ie(){O.textContent="0:00",q.textContent="0:00",B.style.transform="scaleX(0)",c.setAttribute("aria-valuenow","0"),c.setAttribute("aria-valuetext","0:00")}function ae(e){c.setAttribute("aria-disabled",e?"false":"true")}function He(){return c.getAttribute("aria-disabled")!=="true"}function se(e,n){const r=s.length;if(r===0)return-1;if(p){if(r===1)return 0;let i=e;for(;i===e;)i=Math.random()*r|0;return i}const t=n?e+1:e-1;return t>=0&&t<r?t:d==="off"?-1:n?0:r-1}async function M(e,n){if(e<0||e>=s.length)return;a=e,$=0;const r=s[e];if(r===void 0)return;w.textContent=r.title,w.classList.remove("mp__title--idle"),w.title=r.rel,ie(),ae(!0),y(),ze();let t;try{t=await Ie(e)}catch(i){m.textContent=`Не удалось прочитать файл: ${i instanceof Error?i.message:"ошибка чтения"}`;return}if(a===e){o.src=t;{tt(),nt();try{await o.play()}catch{}}}}function xe(){const e=se(a,!0);if(e<0){F();return}M(e)}function je(){if(o.currentTime>3){o.currentTime=0;return}const e=se(a,!1);if(e<0){F();return}M(e)}function We(){if(!(a<0||s.length===0)){if(!o.paused){o.pause();return}if(Number.isFinite(o.duration)&&o.duration>0){o.play().catch(()=>{});return}M(a)}}function F(){o.pause(),o.currentTime=0,ie(),y()}function y(){const e=s.length>0,n=e&&!o.paused&&!o.ended,r=n?rt:Le;E.style.setProperty("--mp-icon",`url(${JSON.stringify(r)})`),E.title=n?"Пауза":"Играть",E.setAttribute("aria-label",E.title);for(const i of[me,E,fe,be])i.disabled=!e;V.classList.toggle("mp__btn--on",p),V.setAttribute("aria-pressed",String(p));const t=d==="one"?lt:Ae;S.style.setProperty("--mp-icon",`url(${JSON.stringify(t)})`),S.title=Re[d],S.setAttribute("aria-label",S.title),S.setAttribute("aria-pressed",String(d!=="off"))}function Xe(){p=!p,Ee(),y()}function qe(){const e=Q[(Q.indexOf(d)+1)%Q.length];e!==void 0&&(d=e),Ee(),y()}function ve(e){const n=X.getBoundingClientRect();return n.width<=0?0:Math.min(1,Math.max(0,(e.clientX-n.left)/n.width))}function le(e){const n=o.duration;if(!Number.isFinite(n)||n<=0)return;const r=Math.min(n,Math.max(0,e*n));o.currentTime=r,B.style.transform=`scaleX(${e})`;const t=ue(r);O.textContent=t,c.setAttribute("aria-valuenow",String(Math.round(e*100))),c.setAttribute("aria-valuetext",t)}c.addEventListener("pointerdown",e=>{He()&&(e.preventDefault(),H=!0,c.setPointerCapture(e.pointerId),le(ve(e)))}),c.addEventListener("pointermove",e=>{H&&le(ve(e))});const we=e=>{H&&(H=!1,c.hasPointerCapture(e.pointerId)&&c.releasePointerCapture(e.pointerId))};c.addEventListener("pointerup",we),c.addEventListener("pointercancel",we),c.addEventListener("keydown",e=>{const n=o.duration;if(!Number.isFinite(n)||n<=0)return;const r=e.shiftKey?30:5;let t=null;e.key==="ArrowRight"?t=Math.min(n,o.currentTime+r):e.key==="ArrowLeft"?t=Math.max(0,o.currentTime-r):e.key==="Home"?t=0:e.key==="End"&&(t=n),t!==null&&(e.preventDefault(),e.stopPropagation(),le(t/n))}),o.addEventListener("timeupdate",I),o.addEventListener("play",()=>{$=0,y(),I()}),o.addEventListener("pause",()=>{y(),I()}),o.addEventListener("seeked",I),o.addEventListener("ended",()=>{if(d==="one"){o.currentTime=0,o.play().catch(()=>{});return}const e=se(a,!0);if(e<0){y();return}M(e)}),o.addEventListener("loadedmetadata",()=>{q.textContent=ue(o.duration),I()}),o.addEventListener("error",()=>{if($>=pt){F(),m.textContent="Подряд несколько файлов не читается — остановился.";return}if($++,s.length<=1){F(),m.textContent="Не удалось декодировать трек.";return}xe()});async function ye(e,n){const r=[],t=[{dir:e,prefix:""}];for(;t.length>0;){const i=t.pop(),b=i.dir.values();for await(const l of b){if(n!==_)return r;if(l.kind==="directory"){l.name.startsWith(".")||t.push({dir:l,prefix:`${i.prefix}${l.name}/`});continue}l.name.startsWith(".")||!Ne.has($e(l.name))||(r.push({title:Be(l.name),rel:`${i.prefix}${l.name}`,source:{kind:"handle",handle:l}}),r.length&255||(m.textContent=`Сканирование… найдено ${r.length}`))}}return r}function ce(e,n){if(s=e,he(),a=-1,$=0,o.pause(),o.removeAttribute("src"),o.load(),w.textContent="Ничего не играет",w.classList.add("mp__title--idle"),w.removeAttribute("title"),ie(),ae(!1),T=f.clientHeight,R(!0),y(),s.length===0){m.textContent=`${n}: аудиофайлов не найдено.`;return}m.textContent=`${n} — треков: ${s.length}. Запускаю первый.`,M(0)}async function Ve(){if(typeof window.showDirectoryPicker!="function"){g.click();return}v.disabled=!0;try{const e=await window.showDirectoryPicker({id:"blendars-music",mode:"read"}),n=++_;m.textContent=`Сканирование «${e.name}»…`;const r=await ye(e,n);if(n!==_)return;r.sort((t,i)=>de.compare(t.rel,i.rel)),bt(e),ce(r,e.name)}catch(e){if(e instanceof DOMException&&(e.name==="AbortError"||e.name==="NotAllowedError"))return;m.textContent=`Не удалось открыть папку: ${e instanceof Error?e.message:"ошибка доступа"}`}finally{v.disabled=!1}}v.addEventListener("pointerdown",e=>{e.preventDefault(),!v.disabled&&Ve()}),g.addEventListener("change",()=>{const e=g.files,n=e===null?[]:Array.from(e);if(g.value="",n.length===0)return;++_;const r=[];for(const l of n)l.name.startsWith(".")||!Ne.has($e(l.name))||r.push({title:Be(l.name),rel:l.webkitRelativePath||l.name,source:{kind:"file",file:l}});r.sort((l,A)=>de.compare(l.rel,A.rel));const t=n[0];if(t===void 0)return;const i=(t.webkitRelativePath||t.name).split("/")[0]||"Папка",b=n.some(l=>l.webkitRelativePath.includes("/"));ce(r,i),!b&&r.length>0&&(m.textContent=`${i}: прочитан только верхний уровень, вложенные папки браузер не отдал. В Chrome и Edge папку можно выбрать кнопкой выше — там обход вложенности гарантирован.`)});async function ke(){if(pe)return;pe=!0;const e=await ht();if(e===null)return;if(await e.queryPermission?.({mode:"read"})==="granted"){const t=++_;m.textContent=`Сканирование «${e.name}»…`;const i=await ye(e,t);if(t!==_)return;i.sort((b,l)=>de.compare(b.rel,l.rel)),ce(i,e.name);return}const r=document.createElement("button");r.className="mp__folder",r.type="button",r.textContent=`Открыть «${e.name}»`,r.addEventListener("pointerdown",t=>{t.preventDefault();const i=e.requestPermission?.({mode:"read"});if(i===void 0){r.remove();return}i.then(b=>{b==="granted"?ke():m.textContent="Доступ к папке не выдан.",r.remove()})}),m.textContent=`Прошлая папка «${e.name}» — откройте её снова.`,W.insertBefore(r,m)}function Ee(){try{localStorage.setItem(Me,JSON.stringify({shuffle:p,repeat:d}))}catch{}}function Je(){try{const e=localStorage.getItem(Me);if(e===null)return;const n=JSON.parse(e);if(n===null||typeof n!="object")return;const r=n;p=r.shuffle===!0;const t=r.repeat;typeof t=="string"&&Q.includes(t)&&(d=t)}catch{}}return Je(),K(),y(),ae(!1),R(!0),ke(),{dialog:re,open(){re.open(),T=f.clientHeight,R(!0)},destroy(){Ue(),_e.disconnect(),o.pause(),o.removeAttribute("src"),o.load(),he(),_++,re.destroy()}}}export{vt as createMusicPlayer};
