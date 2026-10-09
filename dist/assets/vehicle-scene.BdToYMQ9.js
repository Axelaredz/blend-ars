const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vehicle.DrvK-wD2.js","assets/playcanvas.zR-V_TaA.js","assets/drive-camera.Df54WXl1.js","assets/look-gestures.D7GS3G4t.js"])))=>i.map(i=>d[i]);
import{S as Ne,t as Fe,u as xe,v as me,g as Le,w as Pe,_ as L,E as C,h as Ie,b as I,j as Me,V as j,p as Y,l as Ue,m as Oe,n as Ge,o as Be,k as Ve,q as We}from"./playcanvas.zR-V_TaA.js";import{ensurePhysics as Xe}from"./engine-bootstrap.92J1uDsM.js";import{l as Q,E as ze}from"./engine-sound.Ditoa3xE.js";import{f as h,g as d,e as He,V as $e,o as qe,i as je,j as Ke,k as Je,m as K,n as c,h as Ye,p as i,q as Qe,D as Ze,r as et}from"./index.BgBuMrWZ.js";const tt=96,st=[40,140],at=[25,90],rt=4,nt="/blend-ars/",ot=`${nt}textures/terrain/`;function k(t,o,l,m){const u=new xe(o,"texture",{url:`${ot}${o}`},{srgb:l});return t.assets.add(u),new Promise((g,r)=>{u.ready(f=>{const p=f.resource;m&&(p.addressU=me,p.addressV=me),p.anisotropy=Math.min(rt,t.graphicsDevice.maxAnisotropy),g(p)}),u.on("error",f=>r(f instanceof Error?f:new Error(String(f)))),t.assets.load(u)})}const P=new WeakMap;function it(t){let o=P.get(t);return o||(o=(async()=>{const[l,m,u,g,r,f]=await Promise.all([k(t,"control.webp",!1,!1),k(t,"grass_color.webp",!0,!0),k(t,"rock_color.webp",!0,!0),k(t,"grass_normal.webp",!1,!0),k(t,"rock_normal.webp",!1,!0),k(t,"ao.webp",!1,!1)]);return{control:l,grass:m,rock:u,grassN:g,rockN:r,ao:f}})(),P.set(t,o),o.catch(()=>{P.get(t)===o&&P.delete(t)})),o}function lt(t){const o=new Le(t.graphicsDevice,{width:4,height:4,format:Pe,mipmaps:!1}),l=document.createElement("canvas");l.width=4,l.height=4;const m=l.getContext("2d");return m.fillStyle="rgb(128,128,255)",m.fillRect(0,0,4,4),o.setSource(l),o}const pe=`
uniform sampler2D splatControl;
uniform sampler2D splatGrass;
uniform sampler2D splatRock;
uniform sampler2D splatGrassN;
uniform sampler2D splatRockN;
uniform float splatTiling;
uniform vec2 splatColorFade;
uniform vec2 splatNormalFade;
`,ge=`
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
`,ct=pe+`
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
`,dt=ge+`
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
`,mt=pe+`
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
`,ft=ge+`
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
`;function ut(t,o,l){const m=o.render?.meshInstances,u=m?.[0]?.material;if(!m||m.length===0||!u||!(u instanceof Ne))return()=>{};if(!u.diffuseMap)return console.warn("[terrain-splat] у террейна нет diffuseMap — сплат пропущен"),()=>{};const g=lt(t),r=u.clone();r.aoMap=l.ao,r.aoMapUv=0,r.aoMapChannel="r",r.normalMap=g,r.bumpiness=1,r.setParameter("splatControl",l.control),r.setParameter("splatGrass",l.grass),r.setParameter("splatRock",l.rock),r.setParameter("splatGrassN",l.grassN),r.setParameter("splatRockN",l.rockN),r.setParameter("splatTiling",tt),r.setParameter("splatColorFade",[...st]),r.setParameter("splatNormalFade",[...at]),r.onUpdateShader=f=>{const p=new Fe;return p.glsl.set("diffusePS",ct),p.glsl.set("normalMapPS",mt),p.wgsl.set("diffusePS",dt),p.wgsl.set("normalMapPS",ft),f.litOptions.shaderChunks=p,f},r.update();for(const f of m)f.material=r;return()=>{g.destroy(),r.destroy()}}const pt="truck",gt="terrain",ht="maserati",vt="/blend-ars/scenes/vehicle/offroad-truck.glb",_t="/blend-ars/scenes/vehicle/rocky-desert.glb",St="/blend-ars/models/maserati-gt3.glb",J={x:0,y:-1.3,z:0},Et=90,fe=()=>Math.min(h("distance"),Et),bt={maxTorque:520,idleRpm:800,peakTorqueRpm:1700,maxRpm:4200,finalDrive:7,reverseGear:3.2,shiftUpRpm:3900,shiftDownRpm:1900,shiftTime:.22,maxSteerAngle:30,maxBrakeForce:6500,handbrakeForce:14e3,gears:[3.6,2.2,1.5,1.1]},yt=[{wheelName:"wheel_front_left",properties:{radius:.572,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,steerFactor:1,driveFactor:1,brakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_front_left spring_front_left"}},{wheelName:"wheel_front_right",properties:{radius:.572,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,steerFactor:1,driveFactor:1,brakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_front_right spring_front_right"}},{wheelName:"wheel_rear_left",properties:{radius:.63,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,driveFactor:1,brakeFactor:.7,handbrakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_rear_left spring_rear_left"}},{wheelName:"wheel_rear_right",properties:{radius:.63,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,driveFactor:1,brakeFactor:.7,handbrakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_rear_right spring_rear_right"}}],Rt=[[2,210,302],[2,210,302],[302,210,2],[302,210,2]],Ct=.38,Tt=.5,wt=new I(.025,.025,.03),kt=[Ge,Be,Ve,Y,We],ue=[[-300,190,0],[300,190,0],[0,190,-300],[0,190,300]];async function It(t,o,l){const[m,u]=await Promise.all([L(()=>import("./vehicle.DrvK-wD2.js"),__vite__mapDeps([0,1])),L(()=>import("./drive-camera.Df54WXl1.js"),__vite__mapDeps([2,1,3]))]),g=m.Vehicle,r=m.VehicleInput,f=m.VehicleWheel,p=u.DriveCamera;await Xe(t,e=>o?.(e,void 0)),o?.("загрузка моделей",.1);const A=e=>s=>{const v=s.total>0?Math.min(1,s.loaded/s.total):0;l?.onAssetProgress?.(s.fromCache?`${e}: из кеша`:e,v)},[M,U]=await Promise.all([Q(t,pt,vt,{onProgress:A("грузовик")}),Q(t,gt,_t,{onProgress:A("рельеф")})]),D=it(t).catch(e=>(console.warn("[vehicle-scene] слои террейна не загрузились, еду на base",e),null)),y=new C("vehicle-scene");t.root.addChild(y),t.scene.fog.type=Ie,t.scene.fog.color=new I(.82,.86,.89),t.scene.fog.density=.0035,t.scene.ambientLight=new I(.025,.025,.03),t.scene.clusteredLightingEnabled=t.graphicsDevice.isWebGPU;const O=new C("sun"),T=O.addComponent("light",{type:"directional",intensity:d("key"),castShadows:!0,shadowType:Me,numCascades:h("cascades"),cascadeDistribution:h("distribution"),cascadeBlend:h("blend"),shadowDistance:fe(),shadowResolution:h("resolution"),shadowBias:h("bias"),normalOffsetBias:h("normalBias")});y.addChild(O);const Z=()=>{T.numCascades=h("cascades"),T.cascadeDistribution=h("distribution"),T.cascadeBlend=h("blend"),T.shadowDistance=fe(),T.shadowResolution=h("resolution"),T.shadowBias=h("bias"),T.normalOffsetBias=h("normalBias")};Z();const he=He(Z);let _=null;try{const{ProceduralSky:e}=await L(async()=>{const{ProceduralSky:v}=await import("./playcanvas.zR-V_TaA.js").then(E=>E.aq);return{ProceduralSky:v}},[]),s=new C("sky");s.addComponent("script"),_=s.script.create(e,{properties:{sunLight:O,elevation:d("sunElevation"),azimuth:d("sunAzimuth"),turbidity:d("turbidity"),rayleigh:d("rayleigh"),mieCoefficient:d("mieCoefficient"),mieDirectionalG:d("mieDirectionalG"),luminance:d("skyLuminance")}}),y.addChild(s)}catch(e){_=null,console.warn("[vehicle-scene] небо не построено",e)}o?.("рельеф",.5);const G=U.resource.instantiateRenderEntity();let R=G.findByName("terrain");if(R?.render||(R=G.findOne(e=>!!e.render)),!R)throw new Error("в rocky-desert.glb нет узла с рендером для mesh-коллайдера");R.addComponent("collision",{type:"mesh"}),R.addComponent("rigidbody",{type:"static",friction:1});const ee=R.render?.asset,N=(ee!=null?t.assets.get(ee):void 0)?.resource;if(!N||!N.meshes||N.meshes.length===0)throw new Error("у узла terrain нет Render-ресурса для mesh-коллайдера");R.collision.render=N,y.addChild(G);const te=await D,ve=te?ut(t,R,te):()=>{};o?.("техника",.75);const n=M.resource.instantiateRenderEntity();n.name="vehicle",n.setPosition(240,1.6,-240),n.setEulerAngles(0,180,0),n.addComponent("collision",{type:"compound"}),n.addComponent("rigidbody",{type:"dynamic",mass:2200,friction:.4});const B=new C("hull-collider");B.setLocalPosition(0,.55,0),B.addComponent("collision",{type:"box",halfExtents:new j(.95,.7,2.45)}),n.addChild(B);const V=new C("belly-collider");V.setLocalPosition(0,-.05,0),V.addComponent("collision",{type:"box",halfExtents:new j(.8,.3,1.9)}),n.addChild(V),y.addChild(n),n.addComponent("script"),n.script.create(g,{properties:{...bt}}),n.script.create(r);const se=t.systems.rigidbody;se.fixedTimeStep=1/60,se.maxSubSteps=10;const ae=[],re=()=>{const e=n.script?.get(K);e&&(e.maxTorque=c("engineTorque"),e.maxBrakeForce=c("brakeForce"),e.engineBraking=c("engineBraking"),e.dragForce=c("dragForce"),e.rollingResistance=c("rollingResistance"),e.lateralGripAssist=c("lateralGripAssist"),e.highSpeedLock=c("highSpeedLock"),e.highSpeedLockAt=c("highSpeedLockAt"),e.antiRoll=c("antiRoll"));const s=c("wheelGrip"),v=c("rollInfluence"),E=c("suspStiffness"),X=c("suspDamping"),Te=c("suspCompression"),we=c("suspTravel"),z=c("mass"),H=n.rigidbody;H&&H.mass!==z&&z>0&&(H.mass=z);const ke=n.rigidbody?.mass??2200,Ae=Math.max(c("suspForce"),ke*9.81*1.4),De=c("suspRelVel");for(const b of ae)b.retuneContact(s,v),b.retuneSuspension(E,X,Te,we,Ae,De);const $=globalThis.Ammo,x=n.rigidbody?.body?.nativeBody,q=n.rigidbody?.mass??0;if($&&x&&q>0){const b=new $.btVector3(0,0,0);x.getCollisionShape().calculateLocalInertia(q,b),b.setValue(b.x(),b.y()*c("inertiaScale"),b.z()),x.setMassProps(q,b),x.updateInertiaTensor(),$.destroy(b)}};for(const e of yt){const s=n.findByName(e.wheelName);if(!s){console.warn(`[vehicle-scene] не найдено колесо ${e.wheelName}`);continue}s.script||s.addComponent("script"),s.script.create(f,{properties:{...e.properties}});const v=s.script.get($e);v&&ae.push(v);const E=new C(`${e.wheelName}_tire`);s.addChild(E),E.setLocalEulerAngles(0,180,0);for(const X of s.render?.meshInstances??[])X.node=E}re(),l?.body==="maserati"&&await At(t,n,e=>o?.(e,void 0));for(let e=0;e<ue.length;e++){const s=new C(`wall-${e}`);s.setPosition(...ue[e]),s.addComponent("collision",{type:"box",halfExtents:new j(...Rt[e])}),s.addComponent("rigidbody",{type:"static"}),y.addChild(s)}const S=new C("camera");S.setPosition(0,5,12),S.addComponent("camera",{clearColor:new I(.82,.86,.89),toneMapping:Y,farClip:600,fov:60}),S.addComponent("script"),S.addComponent("audiolistener");const ne=()=>{const e=S.camera;e&&(e.gammaCorrection=d("gamma")>0?Ue:Oe,e.toneMapping=kt[d("toneMapping")]??Y),t.scene.exposure=Ct*(d("exposure")/Tt)*Ye(),t.scene.fog.density=d("fog"),t.scene.ambientLight=wt,_&&(_.elevation=d("sunElevation"),_.azimuth=d("sunAzimuth"),_.turbidity=d("turbidity"),_.rayleigh=d("rayleigh"),_.mieCoefficient=d("mieCoefficient"),_.mieDirectionalG=d("mieDirectionalG"),_.luminance=d("skyLuminance"),_._baseSunIntensity=d("key"))};ne();const _e=qe(ne);S.script.create(p,{properties:{target:n,distance:6.4,height:2.5,aim:1.4,lookAhead:9,shoulderOffset:1.15,pullback:3.5,pullbackAt:70,clearance:1.4,idleAfter:3,orbitSpeed:5,orbitRadius:10,orbitHeight:3.2,orbitBlendRate:2.5}}),y.addChild(S);let a=null;try{const{CameraFrame:e}=await L(async()=>{const{CameraFrame:s}=await import("./playcanvas.zR-V_TaA.js").then(v=>v.ar);return{CameraFrame:s}},[]);S.script.create(e),a=S.script.get("cameraFrame")}catch(e){console.warn("[vehicle-scene] пост-обработка не подключилась",e)}const F=()=>{if(!a)return;const e=et();a.engineCameraFrame&&(a.engineCameraFrame.enabled=e),a.bloom.enabled=e&&i("bloom")>0,a.bloom.intensity=i("bloom"),a.bloom.blurLevel=Math.round(i("bloomBlur")),a.bloom.threshold=i("bloomThreshold"),a.vignette.enabled=e&&i("vignette")>0,a.vignette.intensity=i("vignette"),a.vignette.inner=i("vignetteInner"),a.vignette.outer=i("vignetteOuter"),a.vignette.curvature=i("vignetteCurvature"),a.taa.jitter=i("taaJitter"),a.taa.enabled=e&&i("taa")>0,a.rendering.samples=a.taa.enabled?1:Qe(),a.dof.enabled=e&&i("dof")>0,a.dof.focusDistance=i("dofFocus"),a.dof.focusRange=i("dofRange"),a.dof.blurRadius=i("dofRadius"),a.dof.nearBlur=i("dofNear")>0,a.grading.enabled=e&&i("grading")>0,a.grading.brightness=i("brightness"),a.grading.contrast=i("contrast"),a.grading.saturation=i("saturation"),a.fringing.enabled=e&&i("fringing")>0,a.fringing.intensity=i("fringing"),a.rendering.sharpness=i("sharpness"),a.rendering.sceneColorMap=!0,a.rendering.sceneDepthMap=!0};F(),t.once("frameend",F);const Se=je(F),Ee=Ke(F),oe=()=>{const e=S.script?.get(Ze);e&&(e.turnRate=c("camTurnRate"),e.rate=c("camFollowRate"))};oe();const be=Je(()=>{re(),oe()}),w=n.script?.get(K);if(!w)throw new Error("нет скрипта машины для звука двигателя");const ye={get rpm(){return w.rpm},get throttle(){return w.throttle},get speedKmh(){return Math.abs(w.speed)*3.6},get slip(){let e=0;for(const s of w.wheels)s.slip>e&&(e=s.slip);return e},get gear(){return w.gear},get airborne(){const e=w.wheels;if(e.length===0)return!1;for(const s of e)if(s.contact)return!1;return!0},get verticalSpeed(){return n.rigidbody?.linearVelocity.y??0}},Re=l?.body==="maserati"?"maserati":"truck",W=await ze.create(t,n,Re,ye,e=>o?.(e,void 0)),Ce=8e3,ie=n.collision,le=e=>{let s=0;for(const v of e.contacts??[]){const E=v.impulse??0;E>s&&(s=E)}W.playImpact(s/Ce)};ie.on("collisionstart",le);const ce=()=>{n.script?.get(K)?.reset?.()};t.on("vehicle:reset",ce),o?.("сцена готова",1);const de=window;return de.__blendarsTruck=n,{root:y,vehicle:n,audio:{attachRecordStream:e=>W.attachRecordStream(e)},destroy(){be(),he(),_e(),Se(),Ee(),ve(),de.__blendarsTruck=void 0,t.off("vehicle:reset",ce),ie.off("collisionstart",le),W.destroy(),y.destroy()}}}async function At(t,o,l){l?.("кузов maserati");let m;try{m=await Q(t,ht,St)}catch(r){console.warn("[vehicle-scene] нет кузова Maserati, еду на грузовике",r);return}const u=o.findByName("body");u&&(u.enabled=!1);const g=m.resource.instantiateRenderEntity();g.name="maserati-shell",g.forEach(r=>{const f=r.render;if(f)for(const p of f.meshInstances){const A=p.mesh,M=A?.indexBuffer?.[0]?.numIndices??0,U=A?.primitive?.[0]?.count??0,D=Math.floor((M||U)/3);D>0&&D<500&&(p.castShadow=!1)}}),o.addChild(g),g.setLocalPosition(J.x,J.y,J.z),g.rotateLocal(0,0,180)}export{It as buildVehicleScene};
