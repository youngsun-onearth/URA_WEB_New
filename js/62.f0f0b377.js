"use strict";(self["webpackChunkura_web"]=self["webpackChunkura_web"]||[]).push([[62],{6062:function(e,a,n){n.r(a),n.d(a,{default:function(){return i}});var t=n(6768),r=n(8776),c=n(4282);const s={id:"container"};var o={__name:"FaceXRSample",setup(e){return(0,t.sV)((()=>{const e=new c.g({container:document.querySelector("#container")}),{renderer:a,scene:n,camera:t}=e,s=new r.HemisphereLight(16777215,12303359,1);n.add(s);const o=e.addFaceMesh(),d=(new r.TextureLoader).load("./faceMesh.png");o.material.map=d,o.material.transparent=!0,o.material.needsUpdate=!0,n.add(o);const i=async()=>{console.log("button clicked"),await e.start(),a.setAnimationLoop((()=>{a.render(n,t)}))};i()})),(e,a)=>((0,t.uX)(),(0,t.CE)("div",s))}};const d=o;var i=d}}]);
//# sourceMappingURL=62.f0f0b377.js.map