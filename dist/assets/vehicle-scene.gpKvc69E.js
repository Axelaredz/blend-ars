const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vehicle.Cnxe8LPV.js","assets/playcanvas.pl-89mBG.js","assets/drive-camera.Pm8Fjm1c.js","assets/look-gestures.BhGm2xnc.js"])))=>i.map(i=>d[i]);
import{S as we,s as Ae,t as De,u as le,g as Ne,v as Fe,_ as F,E as y,h as xe,b as L,j as Le,V as H,o as q,G as Pe,l as Ie,m as Me,n as Ue,k as Oe,p as Ge}from"./playcanvas.pl-89mBG.js";import{ensurePhysics as Be}from"./engine-bootstrap.DOKILe95.js";import{l as j,E as Ve}from"./engine-sound.NEffSnqL.js";import{f as h,g as d,e as We,V as Xe,o as He,i as ze,j as $e,k as qe,m as z,n as i,h as je,p as l,q as Ke,D as Je,r as Ye}from"./index.8aqs7yC-.js";const Qe=96,Ze=[40,140],et=[25,90],tt=4,st="/blend-ars/",at=`${st}textures/terrain/`;function k(t,n,c,m){const u=new De(n,"texture",{url:`${at}${n}`},{srgb:c});return t.assets.add(u),new Promise((g,r)=>{u.ready(f=>{const p=f.resource;m&&(p.addressU=le,p.addressV=le),p.anisotropy=Math.min(tt,t.graphicsDevice.maxAnisotropy),g(p)}),u.on("error",f=>r(f instanceof Error?f:new Error(String(f)))),t.assets.load(u)})}const x=new WeakMap;function rt(t){let n=x.get(t);return n||(n=(async()=>{const[c,m,u,g,r,f]=await Promise.all([k(t,"control.webp",!1,!1),k(t,"grass_color.webp",!0,!0),k(t,"rock_color.webp",!0,!0),k(t,"grass_normal.webp",!1,!0),k(t,"rock_normal.webp",!1,!0),k(t,"ao.webp",!1,!1)]);return{control:c,grass:m,rock:u,grassN:g,rockN:r,ao:f}})(),x.set(t,n),n.catch(()=>{x.get(t)===n&&x.delete(t)})),n}function nt(t){const n=new Ne(t.graphicsDevice,{width:4,height:4,format:Fe,mipmaps:!1}),c=document.createElement("canvas");c.width=4,c.height=4;const m=c.getContext("2d");return m.fillStyle="rgb(128,128,255)",m.fillRect(0,0,4,4),n.setSource(c),n}const me=`
uniform sampler2D splatControl;
uniform sampler2D splatGrass;
uniform sampler2D splatRock;
uniform sampler2D splatGrassN;
uniform sampler2D splatRockN;
uniform float splatTiling;
uniform vec2 splatColorFade;
uniform vec2 splatNormalFade;
`,fe=`
var splatControl: texture_2d<f32>;
var splatControlSampler: sampler;
var splatGrass: texture_2d<f32>;
var splatGrassSampler: sampler;
var splatRock: texture_2d<f32>;
var splatRockSampler: sampler;
var splatGrassN: texture_2d<f32>;
var splatGrassNSampler: sampler;
var splatRockN: texture_2d<f32>;
var splatRockNSampler: sampler;
uniform splatTiling: f32;
uniform splatColorFade: vec2f;
uniform splatNormalFade: vec2f;
uniform view_position: vec3f;
`,ot=me+`
void getAlbedo() {
	dAlbedo = material_diffuse.rgb;
	#ifdef STD_DIFFUSE_TEXTURE
		vec3 baseTex = {STD_DIFFUSE_TEXTURE_DECODE}(texture2DBias({STD_DIFFUSE_TEXTURE_NAME}, vUv0, {STD_TEXTURE_BIAS})).{STD_DIFFUSE_TEXTURE_CHANNEL};
		dAlbedo *= baseTex;
	#endif
	vec4 mask = texture2D(splatControl, vUv0).rgba;
	vec2 duv = vUv0 * splatTiling;
	vec3 grass = texture2D(splatGrass, duv).rgb;
	vec3 rock = texture2D(splatRock, duv).rgb;
	float dist = length(view_position - vPositionW);
	float f = 1.0 - smoothstep(splatColorFade.x, splatColorFade.y, dist);
	vec3 layers = grass * mask.r + rock * mask.g + dAlbedo * (mask.b + mask.a);
	dAlbedo = mix(dAlbedo, layers, f);
}
`,it=fe+`
uniform material_diffuse: vec3f;
fn getAlbedo() {
	dAlbedo = uniform.material_diffuse.rgb;
	#ifdef STD_DIFFUSE_TEXTURE
		var baseTex: vec3f = {STD_DIFFUSE_TEXTURE_DECODE}(textureSampleBias({STD_DIFFUSE_TEXTURE_NAME}, {STD_DIFFUSE_TEXTURE_NAME}Sampler, vUv0, {STD_TEXTURE_BIAS})).{STD_DIFFUSE_TEXTURE_CHANNEL};
		dAlbedo = dAlbedo * baseTex;
	#endif
	var mask: vec4f = textureSample(splatControl, splatControlSampler, vUv0);
	var duv: vec2f = vUv0 * uniform.splatTiling;
	var grass: vec3f = textureSample(splatGrass, splatGrassSampler, duv).rgb;
	var rock: vec3f = textureSample(splatRock, splatRockSampler, duv).rgb;
	var dist: f32 = length(uniform.view_position - vPositionW);
	var f: f32 = 1.0 - smoothstep(uniform.splatColorFade.x, uniform.splatColorFade.y, dist);
	var layers: vec3f = grass * mask.r + rock * mask.g + dAlbedo * (mask.b + mask.a);
	dAlbedo = mix(dAlbedo, layers, f);
}
`,lt=me+`
void getNormal() {
	vec4 mask = texture2D(splatControl, vUv0).rgba;
	vec2 duv = vUv0 * splatTiling;
	vec3 nG = texture2D(splatGrassN, duv).rgb * 2.0 - 1.0;
	vec3 nR = texture2D(splatRockN, duv).rgb * 2.0 - 1.0;
	vec3 nD = nG * mask.r + nR * mask.g + vec3(0.0, 0.0, 1.0) * (mask.b + mask.a);
	float dist = length(view_position - vPositionW);
	float f = 1.0 - smoothstep(splatNormalFade.x, splatNormalFade.y, dist);
	nD = normalize(mix(vec3(0.0, 0.0, 1.0), nD, f));
	dNormalW = normalize(dTBN * nD);
}
`,ct=fe+`
fn getNormal() {
	var mask: vec4f = textureSample(splatControl, splatControlSampler, vUv0);
	var duv: vec2f = vUv0 * uniform.splatTiling;
	var nG: vec3f = textureSample(splatGrassN, splatGrassNSampler, duv).rgb * 2.0 - 1.0;
	var nR: vec3f = textureSample(splatRockN, splatRockNSampler, duv).rgb * 2.0 - 1.0;
	var nD: vec3f = nG * mask.r + nR * mask.g + vec3f(0.0, 0.0, 1.0) * (mask.b + mask.a);
	var dist: f32 = length(uniform.view_position - vPositionW);
	var f: f32 = 1.0 - smoothstep(uniform.splatNormalFade.x, uniform.splatNormalFade.y, dist);
	nD = normalize(mix(vec3f(0.0, 0.0, 1.0), nD, f));
	dNormalW = normalize(dTBN * nD);
}
`;function dt(t,n,c){const m=n.render?.meshInstances,u=m?.[0]?.material;if(!m||m.length===0||!u||!(u instanceof we))return()=>{};if(!u.diffuseMap)return console.warn("[terrain-splat] у террейна нет diffuseMap — сплат пропущен"),()=>{};const g=nt(t),r=u.clone();r.aoMap=c.ao,r.aoMapUv=0,r.aoMapChannel="r",r.normalMap=g,r.bumpiness=1,r.setParameter("splatControl",c.control),r.setParameter("splatGrass",c.grass),r.setParameter("splatRock",c.rock),r.setParameter("splatGrassN",c.grassN),r.setParameter("splatRockN",c.rockN),r.setParameter("splatTiling",Qe),r.setParameter("splatColorFade",[...Ze]),r.setParameter("splatNormalFade",[...et]),r.onUpdateShader=f=>{const p=new Ae;return p.glsl.set("diffusePS",ot),p.glsl.set("normalMapPS",lt),p.wgsl.set("diffusePS",it),p.wgsl.set("normalMapPS",ct),f.litOptions.shaderChunks=p,f},r.update();for(const f of m)f.material=r;return()=>{g.destroy(),r.destroy()}}const mt="truck",ft="terrain",ut="maserati",pt="/blend-ars/scenes/vehicle/offroad-truck.glb",gt="/blend-ars/scenes/vehicle/rocky-desert.glb",ht="/blend-ars/models/maserati-gt3.glb",$={x:0,y:-1.3,z:0},vt=90,ce=()=>Math.min(h("distance"),vt),_t={maxTorque:520,idleRpm:800,peakTorqueRpm:1700,maxRpm:4200,finalDrive:7,reverseGear:3.2,shiftUpRpm:3900,shiftDownRpm:1900,shiftTime:.22,maxSteerAngle:30,maxBrakeForce:6500,handbrakeForce:14e3,gears:[3.6,2.2,1.5,1.1]},Et=[{wheelName:"wheel_front_left",properties:{radius:.572,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,steerFactor:1,driveFactor:1,brakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_front_left spring_front_left"}},{wheelName:"wheel_front_right",properties:{radius:.572,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,steerFactor:1,driveFactor:1,brakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_front_right spring_front_right"}},{wheelName:"wheel_rear_left",properties:{radius:.63,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,driveFactor:1,brakeFactor:.7,handbrakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_rear_left spring_rear_left"}},{wheelName:"wheel_rear_right",properties:{radius:.63,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,driveFactor:1,brakeFactor:.7,handbrakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_rear_right spring_rear_right"}}],St=[[2,210,302],[2,210,302],[302,210,2],[302,210,2]],bt=.38,Rt=.5,yt=new L(.025,.025,.03),Tt=[Me,Ue,Oe,q,Ge],de=[[-300,190,0],[300,190,0],[0,190,-300],[0,190,300]];async function xt(t,n,c){const[m,u]=await Promise.all([F(()=>import("./vehicle.Cnxe8LPV.js"),__vite__mapDeps([0,1])),F(()=>import("./drive-camera.Pm8Fjm1c.js"),__vite__mapDeps([2,1,3]))]),g=m.Vehicle,r=m.VehicleInput,f=m.VehicleWheel,p=u.DriveCamera;await Be(t,e=>n?.(e,void 0)),n?.("загрузка моделей",.1);const w=e=>s=>{const v=s.total>0?Math.min(1,s.loaded/s.total):0;c?.onAssetProgress?.(s.fromCache?`${e}: из кеша`:e,v)},[P,I]=await Promise.all([j(t,mt,pt,{onProgress:w("грузовик")}),j(t,ft,gt,{onProgress:w("рельеф")})]),A=rt(t).catch(e=>(console.warn("[vehicle-scene] слои террейна не загрузились, еду на base",e),null)),b=new y("vehicle-scene");t.root.addChild(b),t.scene.fog.type=xe,t.scene.fog.color=new L(.82,.86,.89),t.scene.fog.density=.0035,t.scene.ambientLight=new L(.025,.025,.03),t.scene.clusteredLightingEnabled=t.graphicsDevice.isWebGPU;const M=new y("sun"),T=M.addComponent("light",{type:"directional",intensity:d("key"),castShadows:!0,shadowType:Le,numCascades:h("cascades"),cascadeDistribution:h("distribution"),cascadeBlend:h("blend"),shadowDistance:ce(),shadowResolution:h("resolution"),shadowBias:h("bias"),normalOffsetBias:h("normalBias")});b.addChild(M);const K=()=>{T.numCascades=h("cascades"),T.cascadeDistribution=h("distribution"),T.cascadeBlend=h("blend"),T.shadowDistance=ce(),T.shadowResolution=h("resolution"),T.shadowBias=h("bias"),T.normalOffsetBias=h("normalBias")};K();const ue=We(K);let _=null;try{const{ProceduralSky:e}=await F(async()=>{const{ProceduralSky:v}=await import("./playcanvas.pl-89mBG.js").then(S=>S.as);return{ProceduralSky:v}},[]),s=new y("sky");s.addComponent("script"),_=s.script.create(e,{properties:{sunLight:M,elevation:d("sunElevation"),azimuth:d("sunAzimuth"),turbidity:d("turbidity"),rayleigh:d("rayleigh"),mieCoefficient:d("mieCoefficient"),mieDirectionalG:d("mieDirectionalG"),luminance:d("skyLuminance")}}),b.addChild(s)}catch(e){_=null,console.warn("[vehicle-scene] небо не построено",e)}n?.("рельеф",.5);const U=I.resource.instantiateRenderEntity();let R=U.findByName("terrain");if(R?.render||(R=U.findOne(e=>!!e.render)),!R)throw new Error("в rocky-desert.glb нет узла с рендером для mesh-коллайдера");R.addComponent("collision",{type:"mesh"}),R.addComponent("rigidbody",{type:"static",friction:1});const J=R.render?.asset,D=(J!=null?t.assets.get(J):void 0)?.resource;if(!D||!D.meshes||D.meshes.length===0)throw new Error("у узла terrain нет Render-ресурса для mesh-коллайдера");R.collision.render=D,b.addChild(U);const Y=await A,pe=Y?dt(t,R,Y):()=>{};n?.("техника",.75);const o=P.resource.instantiateRenderEntity();o.name="vehicle",o.setPosition(240,1.6,-240),o.setEulerAngles(0,180,0),o.addComponent("collision",{type:"compound"}),o.addComponent("rigidbody",{type:"dynamic",mass:2200,friction:.4});const O=new y("hull-collider");O.setLocalPosition(0,.55,0),O.addComponent("collision",{type:"box",halfExtents:new H(.95,.7,2.45)}),o.addChild(O);const G=new y("belly-collider");G.setLocalPosition(0,-.05,0),G.addComponent("collision",{type:"box",halfExtents:new H(.8,.3,1.9)}),o.addChild(G),b.addChild(o),o.addComponent("script"),o.script.create(g,{properties:{..._t}}),o.script.create(r);const Q=t.systems.rigidbody;Q.fixedTimeStep=1/60,Q.maxSubSteps=10;const Z=[],ee=()=>{const e=o.script?.get(z);e&&(e.maxTorque=i("engineTorque"),e.peakTorqueRpm=i("peakTorqueRpm"),e.maxRpm=i("maxRpm"),e.finalDrive=i("finalDrive"),e.maxBrakeForce=i("brakeForce"),e.engineBraking=i("engineBraking"),e.dragForce=i("dragForce"),e.rollingResistance=i("rollingResistance"),e.lateralGripAssist=i("lateralGripAssist"),e.highSpeedLock=i("highSpeedLock"),e.highSpeedLockAt=i("highSpeedLockAt"),e.antiRoll=i("antiRoll"));const s=i("wheelGrip"),v=i("rollInfluence"),S=i("suspStiffness"),V=i("suspDamping"),Re=i("suspCompression"),ye=i("suspTravel"),W=i("mass"),X=o.rigidbody;X&&X.mass!==W&&W>0&&(X.mass=W);const Te=o.rigidbody?.mass??2200,Ce=Math.max(i("suspForce"),Te*9.81*1.4),ke=i("suspRelVel");for(const ie of Z)ie.retuneContact(s,v),ie.retuneSuspension(S,V,Re,ye,Ce,ke)};for(const e of Et){const s=o.findByName(e.wheelName);if(!s){console.warn(`[vehicle-scene] не найдено колесо ${e.wheelName}`);continue}s.script||s.addComponent("script"),s.script.create(f,{properties:{...e.properties}});const v=s.script.get(Xe);v&&Z.push(v);const S=new y(`${e.wheelName}_tire`);s.addChild(S),S.setLocalEulerAngles(0,180,0);for(const V of s.render?.meshInstances??[])V.node=S}ee(),c?.body==="maserati"&&await Ct(t,o,e=>n?.(e,void 0));for(let e=0;e<de.length;e++){const s=new y(`wall-${e}`);s.setPosition(...de[e]),s.addComponent("collision",{type:"box",halfExtents:new H(...St[e])}),s.addComponent("rigidbody",{type:"static"}),b.addChild(s)}const E=new y("camera");E.setPosition(0,5,12),E.addComponent("camera",{clearColor:new L(.82,.86,.89),toneMapping:q,farClip:600,fov:60}),E.addComponent("script"),E.addComponent("audiolistener");const te=()=>{const e=E.camera;e&&(e.gammaCorrection=d("gamma")>0?Pe:Ie,e.toneMapping=Tt[d("toneMapping")]??q),t.scene.exposure=bt*(d("exposure")/Rt)*je(),t.scene.fog.density=d("fog"),t.scene.ambientLight=yt,_&&(_.elevation=d("sunElevation"),_.azimuth=d("sunAzimuth"),_.turbidity=d("turbidity"),_.rayleigh=d("rayleigh"),_.mieCoefficient=d("mieCoefficient"),_.mieDirectionalG=d("mieDirectionalG"),_.luminance=d("skyLuminance"),_._baseSunIntensity=d("key"))};te();const ge=He(te);E.script.create(p,{properties:{target:o,distance:6.4,height:2.5,aim:1.4,lookAhead:9,shoulderOffset:1.15,pullback:3.5,pullbackAt:70,clearance:1.4,idleAfter:3,orbitSpeed:5,orbitRadius:10,orbitHeight:3.2,orbitBlendRate:2.5}}),b.addChild(E);let a=null;try{const{CameraFrame:e}=await F(async()=>{const{CameraFrame:s}=await import("./playcanvas.pl-89mBG.js").then(v=>v.at);return{CameraFrame:s}},[]);E.script.create(e),a=E.script.get("cameraFrame")}catch(e){console.warn("[vehicle-scene] пост-обработка не подключилась",e)}const N=()=>{if(!a)return;const e=Ye();a.engineCameraFrame&&(a.engineCameraFrame.enabled=e),a.bloom.enabled=e&&l("bloom")>0,a.bloom.intensity=l("bloom"),a.bloom.blurLevel=Math.round(l("bloomBlur")),a.bloom.threshold=l("bloomThreshold"),a.vignette.enabled=e&&l("vignette")>0,a.vignette.intensity=l("vignette"),a.vignette.inner=l("vignetteInner"),a.vignette.outer=l("vignetteOuter"),a.vignette.curvature=l("vignetteCurvature"),a.taa.jitter=l("taaJitter"),a.taa.enabled=e&&l("taa")>0,a.rendering.samples=a.taa.enabled?1:Ke(),a.dof.enabled=e&&l("dof")>0,a.dof.focusDistance=l("dofFocus"),a.dof.focusRange=l("dofRange"),a.dof.blurRadius=l("dofRadius"),a.dof.nearBlur=l("dofNear")>0,a.grading.enabled=e&&l("grading")>0,a.grading.brightness=l("brightness"),a.grading.contrast=l("contrast"),a.grading.saturation=l("saturation"),a.fringing.enabled=e&&l("fringing")>0,a.fringing.intensity=l("fringing"),a.rendering.sharpness=l("sharpness"),a.rendering.sceneColorMap=!0,a.rendering.sceneDepthMap=!0};N(),t.once("frameend",N);const he=ze(N),ve=$e(N),se=()=>{const e=E.script?.get(Je);e&&(e.turnRate=i("camTurnRate"),e.rate=i("camFollowRate"))};se();const _e=qe(()=>{ee(),se()}),C=o.script?.get(z);if(!C)throw new Error("нет скрипта машины для звука двигателя");const Ee={get rpm(){return C.rpm},get throttle(){return C.throttle},get speedKmh(){return Math.abs(C.speed)*3.6},get slip(){let e=0;for(const s of C.wheels)s.slip>e&&(e=s.slip);return e},get gear(){return C.gear},get airborne(){const e=C.wheels;if(e.length===0)return!1;for(const s of e)if(s.contact)return!1;return!0},get verticalSpeed(){return o.rigidbody?.linearVelocity.y??0}},Se=c?.body==="maserati"?"maserati":"truck",B=await Ve.create(t,o,Se,Ee,e=>n?.(e,void 0)),be=8e3,ae=o.collision,re=e=>{let s=0;for(const v of e.contacts??[]){const S=v.impulse??0;S>s&&(s=S)}B.playImpact(s/be)};ae.on("collisionstart",re);const ne=()=>{o.script?.get(z)?.reset?.()};t.on("vehicle:reset",ne),n?.("сцена готова",1);const oe=window;return oe.__blendarsTruck=o,{root:b,vehicle:o,audio:{attachRecordStream:e=>B.attachRecordStream(e)},destroy(){_e(),ue(),ge(),he(),ve(),pe(),oe.__blendarsTruck=void 0,t.off("vehicle:reset",ne),ae.off("collisionstart",re),B.destroy(),b.destroy()}}}async function Ct(t,n,c){c?.("кузов maserati");let m;try{m=await j(t,ut,ht)}catch(r){console.warn("[vehicle-scene] нет кузова Maserati, еду на грузовике",r);return}const u=n.findByName("body");u&&(u.enabled=!1);const g=m.resource.instantiateRenderEntity();g.name="maserati-shell",g.forEach(r=>{const f=r.render;if(f)for(const p of f.meshInstances){const w=p.mesh,P=w?.indexBuffer?.[0]?.numIndices??0,I=w?.primitive?.[0]?.count??0,A=Math.floor((P||I)/3);A>0&&A<500&&(p.castShadow=!1)}}),n.addChild(g),g.setLocalPosition($.x,$.y,$.z),g.rotateLocal(0,0,180)}export{xt as buildVehicleScene};
