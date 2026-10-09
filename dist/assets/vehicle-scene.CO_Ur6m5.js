const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vehicle.B4_fks3q.js","assets/playcanvas.BiKF8DQR.js","assets/drive-camera.B5xmvUuZ.js","assets/look-gestures.BhGm2xnc.js"])))=>i.map(i=>d[i]);
import{S as Ne,s as Fe,t as xe,u as me,g as Le,v as Pe,_ as L,E as T,h as Ie,b as I,j as Me,V as j,o as Y,G as Ue,l as Oe,m as Ge,n as Be,k as Ve,p as We}from"./playcanvas.BiKF8DQR.js";import{ensurePhysics as Xe}from"./engine-bootstrap.DfUiHm_P.js";import{l as Q,E as ze}from"./engine-sound.Ck6VRaR9.js";import{f as h,g as d,e as He,V as $e,o as qe,i as je,j as Ke,k as Je,m as K,n as o,h as Ye,p as l,q as Qe,D as Ze,r as et}from"./index.DxbShEp6.js";const tt=96,st=[40,140],at=[25,90],rt=4,nt="/blend-ars/",ot=`${nt}textures/terrain/`;function w(t,i,c,m){const f=new xe(i,"texture",{url:`${ot}${i}`},{srgb:c});return t.assets.add(f),new Promise((g,r)=>{f.ready(u=>{const p=u.resource;m&&(p.addressU=me,p.addressV=me),p.anisotropy=Math.min(rt,t.graphicsDevice.maxAnisotropy),g(p)}),f.on("error",u=>r(u instanceof Error?u:new Error(String(u)))),t.assets.load(f)})}const P=new WeakMap;function it(t){let i=P.get(t);return i||(i=(async()=>{const[c,m,f,g,r,u]=await Promise.all([w(t,"control.webp",!1,!1),w(t,"grass_color.webp",!0,!0),w(t,"rock_color.webp",!0,!0),w(t,"grass_normal.webp",!1,!0),w(t,"rock_normal.webp",!1,!0),w(t,"ao.webp",!1,!1)]);return{control:c,grass:m,rock:f,grassN:g,rockN:r,ao:u}})(),P.set(t,i),i.catch(()=>{P.get(t)===i&&P.delete(t)})),i}function lt(t){const i=new Le(t.graphicsDevice,{width:4,height:4,format:Pe,mipmaps:!1}),c=document.createElement("canvas");c.width=4,c.height=4;const m=c.getContext("2d");return m.fillStyle="rgb(128,128,255)",m.fillRect(0,0,4,4),i.setSource(c),i}const pe=`
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
`,ut=ge+`
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
`;function ft(t,i,c){const m=i.render?.meshInstances,f=m?.[0]?.material;if(!m||m.length===0||!f||!(f instanceof Ne))return()=>{};if(!f.diffuseMap)return console.warn("[terrain-splat] у террейна нет diffuseMap — сплат пропущен"),()=>{};const g=lt(t),r=f.clone();r.aoMap=c.ao,r.aoMapUv=0,r.aoMapChannel="r",r.normalMap=g,r.bumpiness=1,r.setParameter("splatControl",c.control),r.setParameter("splatGrass",c.grass),r.setParameter("splatRock",c.rock),r.setParameter("splatGrassN",c.grassN),r.setParameter("splatRockN",c.rockN),r.setParameter("splatTiling",tt),r.setParameter("splatColorFade",[...st]),r.setParameter("splatNormalFade",[...at]),r.onUpdateShader=u=>{const p=new Fe;return p.glsl.set("diffusePS",ct),p.glsl.set("normalMapPS",mt),p.wgsl.set("diffusePS",dt),p.wgsl.set("normalMapPS",ut),u.litOptions.shaderChunks=p,u},r.update();for(const u of m)u.material=r;return()=>{g.destroy(),r.destroy()}}const pt="truck",gt="terrain",ht="maserati",vt="/blend-ars/scenes/vehicle/offroad-truck.glb",_t="/blend-ars/scenes/vehicle/rocky-desert.glb",St="/blend-ars/models/maserati-gt3.glb",J={x:0,y:-1.3,z:0},Et=90,ue=()=>Math.min(h("distance"),Et),bt={maxTorque:520,idleRpm:800,peakTorqueRpm:1700,maxRpm:4200,finalDrive:7,reverseGear:3.2,shiftUpRpm:3900,shiftDownRpm:1900,shiftTime:.22,maxSteerAngle:30,maxBrakeForce:6500,handbrakeForce:14e3,gears:[3.6,2.2,1.5,1.1]},yt=[{wheelName:"wheel_front_left",properties:{radius:.572,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,steerFactor:1,driveFactor:1,brakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_front_left spring_front_left"}},{wheelName:"wheel_front_right",properties:{radius:.572,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,steerFactor:1,driveFactor:1,brakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_front_right spring_front_right"}},{wheelName:"wheel_rear_left",properties:{radius:.63,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,driveFactor:1,brakeFactor:.7,handbrakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_rear_left spring_rear_left"}},{wheelName:"wheel_rear_right",properties:{radius:.63,trackOffset:.18,suspensionRestLength:.45,maxSuspensionTravel:.35,driveFactor:1,brakeFactor:.7,handbrakeFactor:1,linkageAxis:[1,0,0],linkage:"arm_rear_right spring_rear_right"}}],Rt=[[2,210,302],[2,210,302],[302,210,2],[302,210,2]],Tt=.38,Ct=.5,kt=new I(.025,.025,.03),wt=[Ge,Be,Ve,Y,We],fe=[[-300,190,0],[300,190,0],[0,190,-300],[0,190,300]];async function It(t,i,c){const[m,f]=await Promise.all([L(()=>import("./vehicle.B4_fks3q.js"),__vite__mapDeps([0,1])),L(()=>import("./drive-camera.B5xmvUuZ.js"),__vite__mapDeps([2,1,3]))]),g=m.Vehicle,r=m.VehicleInput,u=m.VehicleWheel,p=f.DriveCamera;await Xe(t,e=>i?.(e,void 0)),i?.("загрузка моделей",.1);const A=e=>s=>{const v=s.total>0?Math.min(1,s.loaded/s.total):0;c?.onAssetProgress?.(s.fromCache?`${e}: из кеша`:e,v)},[M,U]=await Promise.all([Q(t,pt,vt,{onProgress:A("грузовик")}),Q(t,gt,_t,{onProgress:A("рельеф")})]),D=it(t).catch(e=>(console.warn("[vehicle-scene] слои террейна не загрузились, еду на base",e),null)),y=new T("vehicle-scene");t.root.addChild(y),t.scene.fog.type=Ie,t.scene.fog.color=new I(.82,.86,.89),t.scene.fog.density=.0035,t.scene.ambientLight=new I(.025,.025,.03),t.scene.clusteredLightingEnabled=t.graphicsDevice.isWebGPU;const O=new T("sun"),C=O.addComponent("light",{type:"directional",intensity:d("key"),castShadows:!0,shadowType:Me,numCascades:h("cascades"),cascadeDistribution:h("distribution"),cascadeBlend:h("blend"),shadowDistance:ue(),shadowResolution:h("resolution"),shadowBias:h("bias"),normalOffsetBias:h("normalBias")});y.addChild(O);const Z=()=>{C.numCascades=h("cascades"),C.cascadeDistribution=h("distribution"),C.cascadeBlend=h("blend"),C.shadowDistance=ue(),C.shadowResolution=h("resolution"),C.shadowBias=h("bias"),C.normalOffsetBias=h("normalBias")};Z();const he=He(Z);let _=null;try{const{ProceduralSky:e}=await L(async()=>{const{ProceduralSky:v}=await import("./playcanvas.BiKF8DQR.js").then(E=>E.ap);return{ProceduralSky:v}},[]),s=new T("sky");s.addComponent("script"),_=s.script.create(e,{properties:{sunLight:O,elevation:d("sunElevation"),azimuth:d("sunAzimuth"),turbidity:d("turbidity"),rayleigh:d("rayleigh"),mieCoefficient:d("mieCoefficient"),mieDirectionalG:d("mieDirectionalG"),luminance:d("skyLuminance")}}),y.addChild(s)}catch(e){_=null,console.warn("[vehicle-scene] небо не построено",e)}i?.("рельеф",.5);const G=U.resource.instantiateRenderEntity();let R=G.findByName("terrain");if(R?.render||(R=G.findOne(e=>!!e.render)),!R)throw new Error("в rocky-desert.glb нет узла с рендером для mesh-коллайдера");R.addComponent("collision",{type:"mesh"}),R.addComponent("rigidbody",{type:"static",friction:1});const ee=R.render?.asset,N=(ee!=null?t.assets.get(ee):void 0)?.resource;if(!N||!N.meshes||N.meshes.length===0)throw new Error("у узла terrain нет Render-ресурса для mesh-коллайдера");R.collision.render=N,y.addChild(G);const te=await D,ve=te?ft(t,R,te):()=>{};i?.("техника",.75);const n=M.resource.instantiateRenderEntity();n.name="vehicle",n.setPosition(240,1.6,-240),n.setEulerAngles(0,180,0),n.addComponent("collision",{type:"compound"}),n.addComponent("rigidbody",{type:"dynamic",mass:2200,friction:.4});const B=new T("hull-collider");B.setLocalPosition(0,.55,0),B.addComponent("collision",{type:"box",halfExtents:new j(.95,.7,2.45)}),n.addChild(B);const V=new T("belly-collider");V.setLocalPosition(0,-.05,0),V.addComponent("collision",{type:"box",halfExtents:new j(.8,.3,1.9)}),n.addChild(V),y.addChild(n),n.addComponent("script"),n.script.create(g,{properties:{...bt}}),n.script.create(r);const se=t.systems.rigidbody;se.fixedTimeStep=1/60,se.maxSubSteps=10;const ae=[],re=()=>{const e=n.script?.get(K);e&&(e.maxTorque=o("engineTorque"),e.peakTorqueRpm=o("peakTorqueRpm"),e.maxRpm=o("maxRpm"),e.finalDrive=o("finalDrive"),e.maxBrakeForce=o("brakeForce"),e.engineBraking=o("engineBraking"),e.dragForce=o("dragForce"),e.rollingResistance=o("rollingResistance"),e.lateralGripAssist=o("lateralGripAssist"),e.highSpeedLock=o("highSpeedLock"),e.highSpeedLockAt=o("highSpeedLockAt"),e.antiRoll=o("antiRoll"));const s=o("wheelGrip"),v=o("rollInfluence"),E=o("suspStiffness"),X=o("suspDamping"),Ce=o("suspCompression"),ke=o("suspTravel"),z=o("mass"),H=n.rigidbody;H&&H.mass!==z&&z>0&&(H.mass=z);const we=n.rigidbody?.mass??2200,Ae=Math.max(o("suspForce"),we*9.81*1.4),De=o("suspRelVel");for(const b of ae)b.retuneContact(s,v),b.retuneSuspension(E,X,Ce,ke,Ae,De);const $=globalThis.Ammo,x=n.rigidbody?.body??null,q=n.rigidbody?.mass??0;if($&&x&&q>0){const b=new $.btVector3(0,0,0);x.getCollisionShape().calculateLocalInertia(q,b),b.setValue(b.x()*o("inertiaPitch"),b.y()*o("inertiaScale"),b.z()*o("inertiaRoll")),x.setMassProps(q,b),x.updateInertiaTensor(),$.destroy(b)}};for(const e of yt){const s=n.findByName(e.wheelName);if(!s){console.warn(`[vehicle-scene] не найдено колесо ${e.wheelName}`);continue}s.script||s.addComponent("script"),s.script.create(u,{properties:{...e.properties}});const v=s.script.get($e);v&&ae.push(v);const E=new T(`${e.wheelName}_tire`);s.addChild(E),E.setLocalEulerAngles(0,180,0);for(const X of s.render?.meshInstances??[])X.node=E}re(),c?.body==="maserati"&&await At(t,n,e=>i?.(e,void 0));for(let e=0;e<fe.length;e++){const s=new T(`wall-${e}`);s.setPosition(...fe[e]),s.addComponent("collision",{type:"box",halfExtents:new j(...Rt[e])}),s.addComponent("rigidbody",{type:"static"}),y.addChild(s)}const S=new T("camera");S.setPosition(0,5,12),S.addComponent("camera",{clearColor:new I(.82,.86,.89),toneMapping:Y,farClip:600,fov:60}),S.addComponent("script"),S.addComponent("audiolistener");const ne=()=>{const e=S.camera;e&&(e.gammaCorrection=d("gamma")>0?Ue:Oe,e.toneMapping=wt[d("toneMapping")]??Y),t.scene.exposure=Tt*(d("exposure")/Ct)*Ye(),t.scene.fog.density=d("fog"),t.scene.ambientLight=kt,_&&(_.elevation=d("sunElevation"),_.azimuth=d("sunAzimuth"),_.turbidity=d("turbidity"),_.rayleigh=d("rayleigh"),_.mieCoefficient=d("mieCoefficient"),_.mieDirectionalG=d("mieDirectionalG"),_.luminance=d("skyLuminance"),_._baseSunIntensity=d("key"))};ne();const _e=qe(ne);S.script.create(p,{properties:{target:n,distance:6.4,height:2.5,aim:1.4,lookAhead:9,shoulderOffset:1.15,pullback:3.5,pullbackAt:70,clearance:1.4,idleAfter:3,orbitSpeed:5,orbitRadius:10,orbitHeight:3.2,orbitBlendRate:2.5}}),y.addChild(S);let a=null;try{const{CameraFrame:e}=await L(async()=>{const{CameraFrame:s}=await import("./playcanvas.BiKF8DQR.js").then(v=>v.aq);return{CameraFrame:s}},[]);S.script.create(e),a=S.script.get("cameraFrame")}catch(e){console.warn("[vehicle-scene] пост-обработка не подключилась",e)}const F=()=>{if(!a)return;const e=et();a.engineCameraFrame&&(a.engineCameraFrame.enabled=e),a.bloom.enabled=e&&l("bloom")>0,a.bloom.intensity=l("bloom"),a.bloom.blurLevel=Math.round(l("bloomBlur")),a.bloom.threshold=l("bloomThreshold"),a.vignette.enabled=e&&l("vignette")>0,a.vignette.intensity=l("vignette"),a.vignette.inner=l("vignetteInner"),a.vignette.outer=l("vignetteOuter"),a.vignette.curvature=l("vignetteCurvature"),a.taa.jitter=l("taaJitter"),a.taa.enabled=e&&l("taa")>0,a.rendering.samples=a.taa.enabled?1:Qe(),a.dof.enabled=e&&l("dof")>0,a.dof.focusDistance=l("dofFocus"),a.dof.focusRange=l("dofRange"),a.dof.blurRadius=l("dofRadius"),a.dof.nearBlur=l("dofNear")>0,a.grading.enabled=e&&l("grading")>0,a.grading.brightness=l("brightness"),a.grading.contrast=l("contrast"),a.grading.saturation=l("saturation"),a.fringing.enabled=e&&l("fringing")>0,a.fringing.intensity=l("fringing"),a.rendering.sharpness=l("sharpness"),a.rendering.sceneColorMap=!0,a.rendering.sceneDepthMap=!0};F(),t.once("frameend",F);const Se=je(F),Ee=Ke(F),oe=()=>{const e=S.script?.get(Ze);e&&(e.turnRate=o("camTurnRate"),e.rate=o("camFollowRate"))};oe();const be=Je(()=>{re(),oe()}),k=n.script?.get(K);if(!k)throw new Error("нет скрипта машины для звука двигателя");const ye={get rpm(){return k.rpm},get throttle(){return k.throttle},get speedKmh(){return Math.abs(k.speed)*3.6},get slip(){let e=0;for(const s of k.wheels)s.slip>e&&(e=s.slip);return e},get gear(){return k.gear},get airborne(){const e=k.wheels;if(e.length===0)return!1;for(const s of e)if(s.contact)return!1;return!0},get verticalSpeed(){return n.rigidbody?.linearVelocity.y??0}},Re=c?.body==="maserati"?"maserati":"truck",W=await ze.create(t,n,Re,ye,e=>i?.(e,void 0)),Te=8e3,ie=n.collision,le=e=>{let s=0;for(const v of e.contacts??[]){const E=v.impulse??0;E>s&&(s=E)}W.playImpact(s/Te)};ie.on("collisionstart",le);const ce=()=>{n.script?.get(K)?.reset?.()};t.on("vehicle:reset",ce),i?.("сцена готова",1);const de=window;return de.__blendarsTruck=n,{root:y,vehicle:n,audio:{attachRecordStream:e=>W.attachRecordStream(e)},destroy(){be(),he(),_e(),Se(),Ee(),ve(),de.__blendarsTruck=void 0,t.off("vehicle:reset",ce),ie.off("collisionstart",le),W.destroy(),y.destroy()}}}async function At(t,i,c){c?.("кузов maserati");let m;try{m=await Q(t,ht,St)}catch(r){console.warn("[vehicle-scene] нет кузова Maserati, еду на грузовике",r);return}const f=i.findByName("body");f&&(f.enabled=!1);const g=m.resource.instantiateRenderEntity();g.name="maserati-shell",g.forEach(r=>{const u=r.render;if(u)for(const p of u.meshInstances){const A=p.mesh,M=A?.indexBuffer?.[0]?.numIndices??0,U=A?.primitive?.[0]?.count??0,D=Math.floor((M||U)/3);D>0&&D<500&&(p.castShadow=!1)}}),i.addChild(g),g.setLocalPosition(J.x,J.y,J.z),g.rotateLocal(0,0,180)}export{It as buildVehicleScene};
