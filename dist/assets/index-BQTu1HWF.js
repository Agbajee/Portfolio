(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tp(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Vt={},_a=[],br=()=>{},g0=()=>!1,cf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ap=n=>n.startsWith("onUpdate:"),mn=Object.assign,wp=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ay=Object.prototype.hasOwnProperty,At=(n,e)=>ay.call(n,e),Ze=Array.isArray,ga=n=>dc(n)==="[object Map]",v0=n=>dc(n)==="[object Set]",Dm=n=>dc(n)==="[object Date]",it=n=>typeof n=="function",Qt=n=>typeof n=="string",Cr=n=>typeof n=="symbol",Ct=n=>n!==null&&typeof n=="object",x0=n=>(Ct(n)||it(n))&&it(n.then)&&it(n.catch),S0=Object.prototype.toString,dc=n=>S0.call(n),ly=n=>dc(n).slice(8,-1),y0=n=>dc(n)==="[object Object]",Cp=n=>Qt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,bl=Tp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uf=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},cy=/-\w/g,qi=uf(n=>n.replace(cy,e=>e.slice(1).toUpperCase())),uy=/\B([A-Z])/g,Lo=uf(n=>n.replace(uy,"-$1").toLowerCase()),ff=uf(n=>n.charAt(0).toUpperCase()+n.slice(1)),Pf=uf(n=>n?`on${ff(n)}`:""),Is=(n,e)=>!Object.is(n,e),Df=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},M0=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},fy=n=>{const e=parseFloat(n);return isNaN(e)?n:e},hy=n=>{const e=Qt(n)?Number(n):NaN;return isNaN(e)?n:e};let Im;const hf=()=>Im||(Im=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function df(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Qt(i)?_y(i):df(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Qt(n)||Ct(n))return n}const dy=/;(?![^(]*\))/g,py=/:([^]+)/,my=/\/\*[^]*?\*\//g;function _y(n){const e={};return n.replace(my,"").split(dy).forEach(t=>{if(t){const i=t.split(py);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ls(n){let e="";if(Qt(n))e=n;else if(Ze(n))for(let t=0;t<n.length;t++){const i=Ls(n[t]);i&&(e+=i+" ")}else if(Ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vy=Tp(gy);function b0(n){return!!n||n===""}function xy(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Rp(n[i],e[i]);return t}function Rp(n,e){if(n===e)return!0;let t=Dm(n),i=Dm(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Cr(n),i=Cr(e),t||i)return n===e;if(t=Ze(n),i=Ze(e),t||i)return t&&i?xy(n,e):!1;if(t=Ct(n),i=Ct(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Rp(n[o],e[o]))return!1}}return String(n)===String(e)}const E0=n=>!!(n&&n.__v_isRef===!0),wt=n=>Qt(n)?n:n==null?"":Ze(n)||Ct(n)&&(n.toString===S0||!it(n.toString))?E0(n)?wt(n.value):JSON.stringify(n,T0,2):String(n),T0=(n,e)=>E0(e)?T0(n,e.value):ga(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[If(i,s)+" =>"]=r,t),{})}:v0(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>If(t))}:Cr(e)?If(e):Ct(e)&&!Ze(e)&&!y0(e)?String(e):e,If=(n,e="")=>{var t;return Cr(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ai;class Sy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ai,!e&&ai&&(this.index=(ai.scopes||(ai.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ai;try{return ai=this,e()}finally{ai=t}}}on(){++this._on===1&&(this.prevScope=ai,ai=this)}off(){this._on>0&&--this._on===0&&(ai=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function yy(){return ai}let zt;const Lf=new WeakSet;class A0{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ai&&ai.active&&ai.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Lf.has(this)&&(Lf.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||C0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Lm(this),R0(this);const e=zt,t=tr;zt=this,tr=!0;try{return this.fn()}finally{P0(this),zt=e,tr=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ip(e);this.deps=this.depsTail=void 0,Lm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Lf.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Hh(this)&&this.run()}get dirty(){return Hh(this)}}let w0=0,El,Tl;function C0(n,e=!1){if(n.flags|=8,e){n.next=Tl,Tl=n;return}n.next=El,El=n}function Pp(){w0++}function Dp(){if(--w0>0)return;if(Tl){let e=Tl;for(Tl=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;El;){let e=El;for(El=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function R0(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function P0(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ip(i),My(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Hh(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(D0(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function D0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Xl)||(n.globalVersion=Xl,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Hh(n))))return;n.flags|=2;const e=n.dep,t=zt,i=tr;zt=n,tr=!0;try{R0(n);const r=n.fn(n._value);(e.version===0||Is(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{zt=t,tr=i,P0(n),n.flags&=-3}}function Ip(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ip(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function My(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let tr=!0;const I0=[];function es(){I0.push(tr),tr=!1}function ts(){const n=I0.pop();tr=n===void 0?!0:n}function Lm(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=zt;zt=void 0;try{e()}finally{zt=t}}}let Xl=0;class by{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!zt||!tr||zt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==zt)t=this.activeLink=new by(zt,this),zt.deps?(t.prevDep=zt.depsTail,zt.depsTail.nextDep=t,zt.depsTail=t):zt.deps=zt.depsTail=t,L0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=zt.depsTail,t.nextDep=void 0,zt.depsTail.nextDep=t,zt.depsTail=t,zt.deps===t&&(zt.deps=i)}return t}trigger(e){this.version++,Xl++,this.notify(e)}notify(e){Pp();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Dp()}}}function L0(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)L0(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Gh=new WeakMap,So=Symbol(""),Wh=Symbol(""),Yl=Symbol("");function Fn(n,e,t){if(tr&&zt){let i=Gh.get(n);i||Gh.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Lp),r.map=i,r.key=t),r.track()}}function Xr(n,e,t,i,r,s){const o=Gh.get(n);if(!o){Xl++;return}const a=l=>{l&&l.trigger()};if(Pp(),e==="clear")o.forEach(a);else{const l=Ze(n),c=l&&Cp(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Yl||!Cr(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Yl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(So)),ga(n)&&a(o.get(Wh)));break;case"delete":l||(a(o.get(So)),ga(n)&&a(o.get(Wh)));break;case"set":ga(n)&&a(o.get(So));break}}Dp()}function Vo(n){const e=Mt(n);return e===n?e:(Fn(e,"iterate",Yl),Xi(n)?e:e.map(ir))}function pf(n){return Fn(n=Mt(n),"iterate",Yl),n}function ys(n,e){return ns(n)?Pa(yo(n)?ir(e):e):ir(e)}const Ey={__proto__:null,[Symbol.iterator](){return Nf(this,Symbol.iterator,n=>ys(this,n))},concat(...n){return Vo(this).concat(...n.map(e=>Ze(e)?Vo(e):e))},entries(){return Nf(this,"entries",n=>(n[1]=ys(this,n[1]),n))},every(n,e){return Lr(this,"every",n,e,void 0,arguments)},filter(n,e){return Lr(this,"filter",n,e,t=>t.map(i=>ys(this,i)),arguments)},find(n,e){return Lr(this,"find",n,e,t=>ys(this,t),arguments)},findIndex(n,e){return Lr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Lr(this,"findLast",n,e,t=>ys(this,t),arguments)},findLastIndex(n,e){return Lr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Lr(this,"forEach",n,e,void 0,arguments)},includes(...n){return Uf(this,"includes",n)},indexOf(...n){return Uf(this,"indexOf",n)},join(n){return Vo(this).join(n)},lastIndexOf(...n){return Uf(this,"lastIndexOf",n)},map(n,e){return Lr(this,"map",n,e,void 0,arguments)},pop(){return ja(this,"pop")},push(...n){return ja(this,"push",n)},reduce(n,...e){return Nm(this,"reduce",n,e)},reduceRight(n,...e){return Nm(this,"reduceRight",n,e)},shift(){return ja(this,"shift")},some(n,e){return Lr(this,"some",n,e,void 0,arguments)},splice(...n){return ja(this,"splice",n)},toReversed(){return Vo(this).toReversed()},toSorted(n){return Vo(this).toSorted(n)},toSpliced(...n){return Vo(this).toSpliced(...n)},unshift(...n){return ja(this,"unshift",n)},values(){return Nf(this,"values",n=>ys(this,n))}};function Nf(n,e,t){const i=pf(n),r=i[e]();return i!==n&&!Xi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Ty=Array.prototype;function Lr(n,e,t,i,r,s){const o=pf(n),a=o!==n&&!Xi(n),l=o[e];if(l!==Ty[e]){const h=l.apply(n,s);return a?ir(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,ys(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Nm(n,e,t,i){const r=pf(n);let s=t;return r!==n&&(Xi(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,ys(n,a),l,n)}),r[e](s,...i)}function Uf(n,e,t){const i=Mt(n);Fn(i,"iterate",Yl);const r=i[e](...t);return(r===-1||r===!1)&&Fp(t[0])?(t[0]=Mt(t[0]),i[e](...t)):r}function ja(n,e,t=[]){es(),Pp();const i=Mt(n)[e].apply(n,t);return Dp(),ts(),i}const Ay=Tp("__proto__,__v_isRef,__isVue"),N0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Cr));function wy(n){Cr(n)||(n=String(n));const e=Mt(this);return Fn(e,"has",n),e.hasOwnProperty(n)}class U0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Oy:k0:s?B0:O0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!r){let l;if(o&&(l=Ey[t]))return l;if(t==="hasOwnProperty")return wy}const a=Reflect.get(e,t,Vn(e)?e:i);if((Cr(t)?N0.has(t):Ay(t))||(r||Fn(e,"get",t),s))return a;if(Vn(a)){const l=o&&Cp(t)?a:a.value;return r&&Ct(l)?Yh(l):l}return Ct(a)?r?Yh(a):mf(a):a}}class F0 extends U0{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ze(e)&&Cp(t);if(!this._isShallow){const c=ns(s);if(!Xi(i)&&!ns(i)&&(s=Mt(s),i=Mt(i)),!o&&Vn(s)&&!Vn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:At(e,t),l=Reflect.set(e,t,i,Vn(e)?e:r);return e===Mt(r)&&(a?Is(i,s)&&Xr(e,"set",t,i):Xr(e,"add",t,i)),l}deleteProperty(e,t){const i=At(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Xr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Cr(t)||!N0.has(t))&&Fn(e,"has",t),i}ownKeys(e){return Fn(e,"iterate",Ze(e)?"length":So),Reflect.ownKeys(e)}}class Cy extends U0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ry=new F0,Py=new Cy,Dy=new F0(!0);const Xh=n=>n,Sc=n=>Reflect.getPrototypeOf(n);function Iy(n,e,t){return function(...i){const r=this.__v_raw,s=Mt(r),o=ga(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Xh:e?Pa:ir;return!e&&Fn(s,"iterate",l?Wh:So),mn(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function yc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ly(n,e){const t={get(r){const s=this.__v_raw,o=Mt(s),a=Mt(r);n||(Is(r,a)&&Fn(o,"get",r),Fn(o,"get",a));const{has:l}=Sc(o),c=e?Xh:n?Pa:ir;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Fn(Mt(r),"iterate",So),r.size},has(r){const s=this.__v_raw,o=Mt(s),a=Mt(r);return n||(Is(r,a)&&Fn(o,"has",r),Fn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Mt(a),c=e?Xh:n?Pa:ir;return!n&&Fn(l,"iterate",So),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return mn(t,n?{add:yc("add"),set:yc("set"),delete:yc("delete"),clear:yc("clear")}:{add(r){!e&&!Xi(r)&&!ns(r)&&(r=Mt(r));const s=Mt(this);return Sc(s).has.call(s,r)||(s.add(r),Xr(s,"add",r,r)),this},set(r,s){!e&&!Xi(s)&&!ns(s)&&(s=Mt(s));const o=Mt(this),{has:a,get:l}=Sc(o);let c=a.call(o,r);c||(r=Mt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Is(s,u)&&Xr(o,"set",r,s):Xr(o,"add",r,s),this},delete(r){const s=Mt(this),{has:o,get:a}=Sc(s);let l=o.call(s,r);l||(r=Mt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Xr(s,"delete",r,void 0),c},clear(){const r=Mt(this),s=r.size!==0,o=r.clear();return s&&Xr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Iy(r,n,e)}),t}function Np(n,e){const t=Ly(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(At(t,r)&&r in i?t:i,r,s)}const Ny={get:Np(!1,!1)},Uy={get:Np(!1,!0)},Fy={get:Np(!0,!1)};const O0=new WeakMap,B0=new WeakMap,k0=new WeakMap,Oy=new WeakMap;function By(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ky(n){return n.__v_skip||!Object.isExtensible(n)?0:By(ly(n))}function mf(n){return ns(n)?n:Up(n,!1,Ry,Ny,O0)}function z0(n){return Up(n,!1,Dy,Uy,B0)}function Yh(n){return Up(n,!0,Py,Fy,k0)}function Up(n,e,t,i,r){if(!Ct(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=ky(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function yo(n){return ns(n)?yo(n.__v_raw):!!(n&&n.__v_isReactive)}function ns(n){return!!(n&&n.__v_isReadonly)}function Xi(n){return!!(n&&n.__v_isShallow)}function Fp(n){return n?!!n.__v_raw:!1}function Mt(n){const e=n&&n.__v_raw;return e?Mt(e):n}function zy(n){return!At(n,"__v_skip")&&Object.isExtensible(n)&&M0(n,"__v_skip",!0),n}const ir=n=>Ct(n)?mf(n):n,Pa=n=>Ct(n)?Yh(n):n;function Vn(n){return n?n.__v_isRef===!0:!1}function va(n){return V0(n,!1)}function Vy(n){return V0(n,!0)}function V0(n,e){return Vn(n)?n:new Hy(n,e)}class Hy{constructor(e,t){this.dep=new Lp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Mt(e),this._value=t?e:ir(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Xi(e)||ns(e);e=i?e:Mt(e),Is(e,t)&&(this._rawValue=e,this._value=i?e:ir(e),this.dep.trigger())}}function dt(n){return Vn(n)?n.value:n}const Gy={get:(n,e,t)=>e==="__v_raw"?n:dt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Vn(r)&&!Vn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function H0(n){return yo(n)?n:new Proxy(n,Gy)}class Wy{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Lp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Xl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&zt!==this)return C0(this,!0),!0}get value(){const e=this.dep.track();return D0(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Xy(n,e,t=!1){let i,r;return it(n)?i=n:(i=n.get,r=n.set),new Wy(i,r,t)}const Mc={},Nu=new WeakMap;let so;function Yy(n,e=!1,t=so){if(t){let i=Nu.get(t);i||Nu.set(t,i=[]),i.push(n)}}function qy(n,e,t=Vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:Xi(y)||r===!1||r===0?Es(y,1):Es(y);let u,h,f,d,_=!1,g=!1;if(Vn(n)?(h=()=>n.value,_=Xi(n)):yo(n)?(h=()=>c(n),_=!0):Ze(n)?(g=!0,_=n.some(y=>yo(y)||Xi(y)),h=()=>n.map(y=>{if(Vn(y))return y.value;if(yo(y))return c(y);if(it(y))return l?l(y,2):y()})):it(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){es();try{f()}finally{ts()}}const y=so;so=u;try{return l?l(n,3,[d]):n(d)}finally{so=y}}:h=br,e&&r){const y=h,A=r===!0?1/0:r;h=()=>Es(y(),A)}const p=yy(),m=()=>{u.stop(),p&&p.active&&wp(p.effects,u)};if(s&&e){const y=e;e=(...A)=>{y(...A),m()}}let x=g?new Array(n.length).fill(Mc):Mc;const b=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(r||_||(g?A.some((C,w)=>Is(C,x[w])):Is(A,x))){f&&f();const C=so;so=u;try{const w=[A,x===Mc?void 0:g&&x[0]===Mc?[]:x,d];x=A,l?l(e,3,w):e(...w)}finally{so=C}}}else u.run()};return a&&a(b),u=new A0(h),u.scheduler=o?()=>o(b,!1):b,d=y=>Yy(y,!1,u),f=u.onStop=()=>{const y=Nu.get(u);if(y){if(l)l(y,4);else for(const A of y)A();Nu.delete(u)}},e?i?b(!0):x=u.run():o?o(b.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function Es(n,e=1/0,t){if(e<=0||!Ct(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Vn(n))Es(n.value,e,t);else if(Ze(n))for(let i=0;i<n.length;i++)Es(n[i],e,t);else if(v0(n)||ga(n))n.forEach(i=>{Es(i,e,t)});else if(y0(n)){for(const i in n)Es(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Es(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pc(n,e,t,i){try{return i?n(...i):n()}catch(r){_f(r,e,t)}}function rr(n,e,t,i){if(it(n)){const r=pc(n,e,t,i);return r&&x0(r)&&r.catch(s=>{_f(s,e,t)}),r}if(Ze(n)){const r=[];for(let s=0;s<n.length;s++)r.push(rr(n[s],e,t,i));return r}}function _f(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(s){es(),pc(s,null,10,[n,l,c]),ts();return}}$y(n,t,r,i,o)}function $y(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const ti=[];let ur=-1;const xa=[];let Ms=null,ca=0;const G0=Promise.resolve();let Uu=null;function Op(n){const e=Uu||G0;return n?e.then(this?n.bind(this):n):e}function Ky(n){let e=ur+1,t=ti.length;for(;e<t;){const i=e+t>>>1,r=ti[i],s=ql(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Bp(n){if(!(n.flags&1)){const e=ql(n),t=ti[ti.length-1];!t||!(n.flags&2)&&e>=ql(t)?ti.push(n):ti.splice(Ky(e),0,n),n.flags|=1,W0()}}function W0(){Uu||(Uu=G0.then(Y0))}function jy(n){Ze(n)?xa.push(...n):Ms&&n.id===-1?Ms.splice(ca+1,0,n):n.flags&1||(xa.push(n),n.flags|=1),W0()}function Um(n,e,t=ur+1){for(;t<ti.length;t++){const i=ti[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ti.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function X0(n){if(xa.length){const e=[...new Set(xa)].sort((t,i)=>ql(t)-ql(i));if(xa.length=0,Ms){Ms.push(...e);return}for(Ms=e,ca=0;ca<Ms.length;ca++){const t=Ms[ca];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ms=null,ca=0}}const ql=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Y0(n){try{for(ur=0;ur<ti.length;ur++){const e=ti[ur];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ur<ti.length;ur++){const e=ti[ur];e&&(e.flags&=-2)}ur=-1,ti.length=0,X0(),Uu=null,(ti.length||xa.length)&&Y0()}}let Qi=null,q0=null;function Fu(n){const e=Qi;return Qi=n,q0=n&&n.type.__scopeId||null,e}function Da(n,e=Qi,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&ku(-1);const s=Fu(e);let o;try{o=n(...r)}finally{Fu(s),i._d&&ku(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function qs(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(es(),rr(l,t,8,[n.el,a,n,e]),ts())}}function pu(n,e){if(On){let t=On.provides;const i=On.parent&&On.parent.provides;i===t&&(t=On.provides=Object.create(i)),t[n]=e}}function Er(n,e,t=!1){const i=wv();if(i||Sa){let r=Sa?Sa._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&it(e)?e.call(i&&i.proxy):e}}const Zy=Symbol.for("v-scx"),Jy=()=>Er(Zy);function mu(n,e,t){return $0(n,e,t)}function $0(n,e,t=Vt){const{immediate:i,deep:r,flush:s,once:o}=t,a=mn({},t),l=e&&i||!e&&s!=="post";let c;if(jl){if(s==="sync"){const d=Jy();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=br,d.resume=br,d.pause=br,d}}const u=On;a.call=(d,_,g)=>rr(d,u,_,g);let h=!1;s==="post"?a.scheduler=d=>{oi(d,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(d,_)=>{_?d():Bp(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=qy(n,e,a);return jl&&(c?c.push(f):l&&f()),f}function Qy(n,e,t){const i=this.proxy,r=Qt(n)?n.includes(".")?K0(i,n):()=>i[n]:n.bind(i,i);let s;it(e)?s=e:(s=e.handler,t=e);const o=mc(this),a=$0(r,s.bind(i),t);return o(),a}function K0(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const eM=Symbol("_vte"),j0=n=>n.__isTeleport,fr=Symbol("_leaveCb"),Za=Symbol("_enterCb");function tM(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return No(()=>{n.isMounted=!0}),Uo(()=>{n.isUnmounting=!0}),n}const Li=[Function,Array],Z0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Li,onEnter:Li,onAfterEnter:Li,onEnterCancelled:Li,onBeforeLeave:Li,onLeave:Li,onAfterLeave:Li,onLeaveCancelled:Li,onBeforeAppear:Li,onAppear:Li,onAfterAppear:Li,onAppearCancelled:Li},J0=n=>{const e=n.subTree;return e.component?J0(e.component):e},nM={name:"BaseTransition",props:Z0,setup(n,{slots:e}){const t=wv(),i=tM();return()=>{const r=e.default&&tv(e.default(),!0);if(!r||!r.length)return;const s=Q0(r),o=Mt(n),{mode:a}=o;if(i.isLeaving)return Ff(s);const l=Fm(s);if(!l)return Ff(s);let c=qh(l,o,i,t,h=>c=h);l.type!==ni&&$l(l,c);let u=t.subTree&&Fm(t.subTree);if(u&&u.type!==ni&&!uo(u,l)&&J0(t).type!==ni){let h=qh(u,o,i,t);if($l(u,h),a==="out-in"&&l.type!==ni)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},Ff(s);a==="in-out"&&l.type!==ni?h.delayLeave=(f,d,_)=>{const g=ev(i,u);g[String(u.key)]=u,f[fr]=()=>{d(),f[fr]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Q0(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==ni){e=t;break}}return e}const iM=nM;function ev(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function qh(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:p,onAppear:m,onAfterAppear:x,onAppearCancelled:b}=e,y=String(n.key),A=ev(t,n),C=(M,B)=>{M&&rr(M,i,9,B)},w=(M,B)=>{const N=B[1];C(M,B),Ze(M)?M.every(L=>L.length<=1)&&N():M.length<=1&&N()},S={mode:o,persisted:a,beforeEnter(M){let B=l;if(!t.isMounted)if(s)B=p||l;else return;M[fr]&&M[fr](!0);const N=A[y];N&&uo(n,N)&&N.el[fr]&&N.el[fr](),C(B,[M])},enter(M){let B=c,N=u,L=h;if(!t.isMounted)if(s)B=m||c,N=x||u,L=b||h;else return;let H=!1;M[Za]=Y=>{H||(H=!0,Y?C(L,[M]):C(N,[M]),S.delayedLeave&&S.delayedLeave(),M[Za]=void 0)};const K=M[Za].bind(null,!1);B?w(B,[M,K]):K()},leave(M,B){const N=String(n.key);if(M[Za]&&M[Za](!0),t.isUnmounting)return B();C(f,[M]);let L=!1;M[fr]=K=>{L||(L=!0,B(),K?C(g,[M]):C(_,[M]),M[fr]=void 0,A[N]===n&&delete A[N])};const H=M[fr].bind(null,!1);A[N]=n,d?w(d,[M,H]):H()},clone(M){const B=qh(M,e,t,i,r);return r&&r(B),B}};return S}function Ff(n){if(gf(n))return n=ks(n),n.children=null,n}function Fm(n){if(!gf(n))return j0(n.type)&&n.children?Q0(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&it(t.default))return t.default()}}function $l(n,e){n.shapeFlag&6&&n.component?(n.transition=e,$l(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function tv(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===qt?(o.patchFlag&128&&r++,i=i.concat(tv(o.children,e,a))):(e||o.type!==ni)&&i.push(a!=null?ks(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function nv(n,e){return it(n)?mn({name:n.name},e,{setup:n}):n}function iv(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Om(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ou=new WeakMap;function Al(n,e,t,i,r=!1){if(Ze(n)){n.forEach((g,p)=>Al(g,e&&(Ze(e)?e[p]:e),t,i,r));return}if(wl(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Al(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Hp(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Vt?a.refs={}:a.refs,h=a.setupState,f=Mt(h),d=h===Vt?g0:g=>Om(u,g)?!1:At(f,g),_=(g,p)=>!(p&&Om(u,p));if(c!=null&&c!==l){if(Bm(e),Qt(c))u[c]=null,d(c)&&(h[c]=null);else if(Vn(c)){const g=e;_(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(it(l))pc(l,a,12,[o,u]);else{const g=Qt(l),p=Vn(l);if(g||p){const m=()=>{if(n.f){const x=g?d(l)?h[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)Ze(x)&&wp(x,s);else if(Ze(x))x.includes(s)||x.push(s);else if(g)u[l]=[s],d(l)&&(h[l]=u[l]);else{const b=[s];_(l,n.k)&&(l.value=b),n.k&&(u[n.k]=b)}}else g?(u[l]=o,d(l)&&(h[l]=o)):p&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const x=()=>{m(),Ou.delete(n)};x.id=-1,Ou.set(n,x),oi(x,t)}else Bm(n),m()}}}function Bm(n){const e=Ou.get(n);e&&(e.flags|=8,Ou.delete(n))}hf().requestIdleCallback;hf().cancelIdleCallback;const wl=n=>!!n.type.__asyncLoader,gf=n=>n.type.__isKeepAlive;function rM(n,e){rv(n,"a",e)}function sM(n,e){rv(n,"da",e)}function rv(n,e,t=On){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(vf(e,i,t),t){let r=t.parent;for(;r&&r.parent;)gf(r.parent.vnode)&&oM(i,e,t,r),r=r.parent}}function oM(n,e,t,i){const r=vf(e,n,i,!0);sv(()=>{wp(i[e],r)},t)}function vf(n,e,t=On,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{es();const a=mc(t),l=rr(e,t,n,o);return a(),ts(),l});return i?r.unshift(s):r.push(s),s}}const cs=n=>(e,t=On)=>{(!jl||n==="sp")&&vf(n,(...i)=>e(...i),t)},aM=cs("bm"),No=cs("m"),lM=cs("bu"),cM=cs("u"),Uo=cs("bum"),sv=cs("um"),uM=cs("sp"),fM=cs("rtg"),hM=cs("rtc");function dM(n,e=On){vf("ec",n,e)}const pM="components",ov=Symbol.for("v-ndc");function mM(n){return Qt(n)?_M(pM,n,!1)||n:n||ov}function _M(n,e,t=!0,i=!1){const r=Qi||On;if(r){const s=r.type;{const a=tb(s,!1);if(a&&(a===e||a===qi(e)||a===ff(qi(e))))return s}const o=km(r[n]||s[n],e)||km(r.appContext[n],e);return!o&&i?s:o}}function km(n,e){return n&&(n[e]||n[qi(e)]||n[ff(qi(e))])}function Hi(n,e,t,i){let r;const s=t,o=Ze(n);if(o||Qt(n)){const a=o&&yo(n);let l=!1,c=!1;a&&(l=!Xi(n),c=ns(n),n=pf(n)),r=new Array(n.length);for(let u=0,h=n.length;u<h;u++)r[u]=e(l?c?Pa(ir(n[u])):ir(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Ct(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const $h=n=>n?Cv(n)?Hp(n):$h(n.parent):null,Cl=mn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$h(n.parent),$root:n=>$h(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>lv(n),$forceUpdate:n=>n.f||(n.f=()=>{Bp(n.update)}),$nextTick:n=>n.n||(n.n=Op.bind(n.proxy)),$watch:n=>Qy.bind(n)}),Of=(n,e)=>n!==Vt&&!n.__isScriptSetup&&At(n,e),gM={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Of(i,e))return o[e]=1,i[e];if(r!==Vt&&At(r,e))return o[e]=2,r[e];if(At(s,e))return o[e]=3,s[e];if(t!==Vt&&At(t,e))return o[e]=4,t[e];Kh&&(o[e]=0)}}const c=Cl[e];let u,h;if(c)return e==="$attrs"&&Fn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Vt&&At(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,At(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Of(r,e)?(r[e]=t,!0):i!==Vt&&At(i,e)?(i[e]=t,!0):At(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Vt&&a[0]!=="$"&&At(n,a)||Of(e,a)||At(s,a)||At(i,a)||At(Cl,a)||At(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:At(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function zm(n){return Ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Kh=!0;function vM(n){const e=lv(n),t=n.proxy,i=n.ctx;Kh=!1,e.beforeCreate&&Vm(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:_,activated:g,deactivated:p,beforeDestroy:m,beforeUnmount:x,destroyed:b,unmounted:y,render:A,renderTracked:C,renderTriggered:w,errorCaptured:S,serverPrefetch:M,expose:B,inheritAttrs:N,components:L,directives:H,filters:K}=e;if(c&&xM(c,i,null),o)for(const z in o){const se=o[z];it(se)&&(i[z]=se.bind(t))}if(r){const z=r.call(t,t);Ct(z)&&(n.data=mf(z))}if(Kh=!0,s)for(const z in s){const se=s[z],ue=it(se)?se.bind(t,t):it(se.get)?se.get.bind(t,t):br,O=!it(se)&&it(se.set)?se.set.bind(t):br,ve=ci({get:ue,set:O});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>ve.value,set:xe=>ve.value=xe})}if(a)for(const z in a)av(a[z],i,t,z);if(l){const z=it(l)?l.call(t):l;Reflect.ownKeys(z).forEach(se=>{pu(se,z[se])})}u&&Vm(u,n,"c");function X(z,se){Ze(se)?se.forEach(ue=>z(ue.bind(t))):se&&z(se.bind(t))}if(X(aM,h),X(No,f),X(lM,d),X(cM,_),X(rM,g),X(sM,p),X(dM,S),X(hM,C),X(fM,w),X(Uo,x),X(sv,y),X(uM,M),Ze(B))if(B.length){const z=n.exposed||(n.exposed={});B.forEach(se=>{Object.defineProperty(z,se,{get:()=>t[se],set:ue=>t[se]=ue,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===br&&(n.render=A),N!=null&&(n.inheritAttrs=N),L&&(n.components=L),H&&(n.directives=H),M&&iv(n)}function xM(n,e,t=br){Ze(n)&&(n=jh(n));for(const i in n){const r=n[i];let s;Ct(r)?"default"in r?s=Er(r.from||i,r.default,!0):s=Er(r.from||i):s=Er(r),Vn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Vm(n,e,t){rr(Ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function av(n,e,t,i){let r=i.includes(".")?K0(t,i):()=>t[i];if(Qt(n)){const s=e[n];it(s)&&mu(r,s)}else if(it(n))mu(r,n.bind(t));else if(Ct(n))if(Ze(n))n.forEach(s=>av(s,e,t,i));else{const s=it(n.handler)?n.handler.bind(t):e[n.handler];it(s)&&mu(r,s,n)}}function lv(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Bu(l,c,o,!0)),Bu(l,e,o)),Ct(e)&&s.set(e,l),l}function Bu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Bu(n,s,t,!0),r&&r.forEach(o=>Bu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=SM[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const SM={data:Hm,props:Gm,emits:Gm,methods:dl,computed:dl,beforeCreate:qn,created:qn,beforeMount:qn,mounted:qn,beforeUpdate:qn,updated:qn,beforeDestroy:qn,beforeUnmount:qn,destroyed:qn,unmounted:qn,activated:qn,deactivated:qn,errorCaptured:qn,serverPrefetch:qn,components:dl,directives:dl,watch:MM,provide:Hm,inject:yM};function Hm(n,e){return e?n?function(){return mn(it(n)?n.call(this,this):n,it(e)?e.call(this,this):e)}:e:n}function yM(n,e){return dl(jh(n),jh(e))}function jh(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qn(n,e){return n?[...new Set([].concat(n,e))]:e}function dl(n,e){return n?mn(Object.create(null),n,e):e}function Gm(n,e){return n?Ze(n)&&Ze(e)?[...new Set([...n,...e])]:mn(Object.create(null),zm(n),zm(e??{})):e}function MM(n,e){if(!n)return e;if(!e)return n;const t=mn(Object.create(null),n);for(const i in e)t[i]=qn(n[i],e[i]);return t}function cv(){return{app:null,config:{isNativeTag:g0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bM=0;function EM(n,e){return function(i,r=null){it(i)||(i=mn({},i)),r!=null&&!Ct(r)&&(r=null);const s=cv(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:bM++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ib,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&it(u.install)?(o.add(u),u.install(c,...h)):it(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||$e(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Hp(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(rr(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=Sa;Sa=c;try{return u()}finally{Sa=h}}};return c}}let Sa=null;const TM=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${qi(e)}Modifiers`]||n[`${Lo(e)}Modifiers`];function AM(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Vt;let r=t;const s=e.startsWith("update:"),o=s&&TM(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Qt(u)?u.trim():u)),o.number&&(r=t.map(fy)));let a,l=i[a=Pf(e)]||i[a=Pf(qi(e))];!l&&s&&(l=i[a=Pf(Lo(e))]),l&&rr(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,rr(c,n,6,r)}}const wM=new WeakMap;function uv(n,e,t=!1){const i=t?wM:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!it(n)){const l=c=>{const u=uv(c,e,!0);u&&(a=!0,mn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Ct(n)&&i.set(n,null),null):(Ze(s)?s.forEach(l=>o[l]=null):mn(o,s),Ct(n)&&i.set(n,o),o)}function xf(n,e){return!n||!cf(e)?!1:(e=e.slice(2).replace(/Once$/,""),At(n,e[0].toLowerCase()+e.slice(1))||At(n,Lo(e))||At(n,e))}function Wm(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:_,inheritAttrs:g}=n,p=Fu(n);let m,x;try{if(t.shapeFlag&4){const y=r||i,A=y;m=pr(c.call(A,y,u,h,d,f,_)),x=a}else{const y=e;m=pr(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),x=e.props?a:CM(a)}}catch(y){Rl.length=0,_f(y,n,1),m=$e(ni)}let b=m;if(x&&g!==!1){const y=Object.keys(x),{shapeFlag:A}=b;y.length&&A&7&&(s&&y.some(Ap)&&(x=RM(x,s)),b=ks(b,x,!1,!0))}return t.dirs&&(b=ks(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&$l(b,t.transition),m=b,Fu(p),m}const CM=n=>{let e;for(const t in n)(t==="class"||t==="style"||cf(t))&&((e||(e={}))[t]=n[t]);return e},RM=(n,e)=>{const t={};for(const i in n)(!Ap(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function PM(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Xm(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(fv(o,i,f)&&!xf(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Xm(i,o,c):!0:!!o;return!1}function Xm(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(fv(e,n,s)&&!xf(t,s))return!0}return!1}function fv(n,e,t){const i=n[t],r=e[t];return t==="style"&&Ct(i)&&Ct(r)?!Rp(i,r):i!==r}function DM({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const hv={},dv=()=>Object.create(hv),pv=n=>Object.getPrototypeOf(n)===hv;function IM(n,e,t,i=!1){const r={},s=dv();n.propsDefaults=Object.create(null),mv(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:z0(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function LM(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Mt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(xf(n.emitsOptions,f))continue;const d=e[f];if(l)if(At(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const _=qi(f);r[_]=Zh(l,a,_,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{mv(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!At(e,h)&&((u=Lo(h))===h||!At(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Zh(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!At(e,h))&&(delete s[h],c=!0)}c&&Xr(n.attrs,"set","")}function mv(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(bl(l))continue;const c=e[l];let u;r&&At(r,u=qi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:xf(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Mt(t),c=a||Vt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Zh(r,l,h,c[h],n,!At(c,h))}}return o}function Zh(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=At(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&it(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=mc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Lo(t))&&(i=!0))}return i}const NM=new WeakMap;function _v(n,e,t=!1){const i=t?NM:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!it(n)){const u=h=>{l=!0;const[f,d]=_v(h,e,!0);mn(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Ct(n)&&i.set(n,_a),_a;if(Ze(s))for(let u=0;u<s.length;u++){const h=qi(s[u]);Ym(h)&&(o[h]=Vt)}else if(s)for(const u in s){const h=qi(u);if(Ym(h)){const f=s[u],d=o[h]=Ze(f)||it(f)?{type:f}:mn({},f),_=d.type;let g=!1,p=!0;if(Ze(_))for(let m=0;m<_.length;++m){const x=_[m],b=it(x)&&x.name;if(b==="Boolean"){g=!0;break}else b==="String"&&(p=!1)}else g=it(_)&&_.name==="Boolean";d[0]=g,d[1]=p,(g||At(d,"default"))&&a.push(h)}}const c=[o,a];return Ct(n)&&i.set(n,c),c}function Ym(n){return n[0]!=="$"&&!bl(n)}const kp=n=>n==="_"||n==="_ctx"||n==="$stable",zp=n=>Ze(n)?n.map(pr):[pr(n)],UM=(n,e,t)=>{if(e._n)return e;const i=Da((...r)=>zp(e(...r)),t);return i._c=!1,i},gv=(n,e,t)=>{const i=n._ctx;for(const r in n){if(kp(r))continue;const s=n[r];if(it(s))e[r]=UM(r,s,i);else if(s!=null){const o=zp(s);e[r]=()=>o}}},vv=(n,e)=>{const t=zp(e);n.slots.default=()=>t},xv=(n,e,t)=>{for(const i in e)(t||!kp(i))&&(n[i]=e[i])},FM=(n,e,t)=>{const i=n.slots=dv();if(n.vnode.shapeFlag&32){const r=e._;r?(xv(i,e,t),t&&M0(i,"_",r,!0)):gv(e,i)}else e&&vv(n,e)},OM=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Vt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:xv(r,e,t):(s=!e.$stable,gv(e,r)),o=e}else e&&(vv(n,e),o={default:1});if(s)for(const a in r)!kp(a)&&o[a]==null&&delete r[a]},oi=HM;function BM(n){return kM(n)}function kM(n,e){const t=hf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=br,insertStaticContent:_}=n,g=(D,R,k,j=null,$=null,I=null,P=void 0,he=null,fe=!!R.dynamicChildren)=>{if(D===R)return;D&&!uo(D,R)&&(j=F(D),xe(D,$,I,!0),D=null),R.patchFlag===-2&&(fe=!1,R.dynamicChildren=null);const{type:ne,ref:de,shapeFlag:E}=R;switch(ne){case Sf:p(D,R,k,j);break;case ni:m(D,R,k,j);break;case _u:D==null&&x(R,k,j,P);break;case qt:L(D,R,k,j,$,I,P,he,fe);break;default:E&1?A(D,R,k,j,$,I,P,he,fe):E&6?H(D,R,k,j,$,I,P,he,fe):(E&64||E&128)&&ne.process(D,R,k,j,$,I,P,he,fe,le)}de!=null&&$?Al(de,D&&D.ref,I,R||D,!R):de==null&&D&&D.ref!=null&&Al(D.ref,null,I,D,!0)},p=(D,R,k,j)=>{if(D==null)i(R.el=a(R.children),k,j);else{const $=R.el=D.el;R.children!==D.children&&c($,R.children)}},m=(D,R,k,j)=>{D==null?i(R.el=l(R.children||""),k,j):R.el=D.el},x=(D,R,k,j)=>{[D.el,D.anchor]=_(D.children,R,k,j,D.el,D.anchor)},b=({el:D,anchor:R},k,j)=>{let $;for(;D&&D!==R;)$=f(D),i(D,k,j),D=$;i(R,k,j)},y=({el:D,anchor:R})=>{let k;for(;D&&D!==R;)k=f(D),r(D),D=k;r(R)},A=(D,R,k,j,$,I,P,he,fe)=>{if(R.type==="svg"?P="svg":R.type==="math"&&(P="mathml"),D==null)C(R,k,j,$,I,P,he,fe);else{const ne=D.el&&D.el._isVueCE?D.el:null;try{ne&&ne._beginPatch(),M(D,R,$,I,P,he,fe)}finally{ne&&ne._endPatch()}}},C=(D,R,k,j,$,I,P,he)=>{let fe,ne;const{props:de,shapeFlag:E,transition:v,dirs:U}=D;if(fe=D.el=o(D.type,I,de&&de.is,de),E&8?u(fe,D.children):E&16&&S(D.children,fe,null,j,$,Bf(D,I),P,he),U&&qs(D,null,j,"created"),w(fe,D,D.scopeId,P,j),de){for(const te in de)te!=="value"&&!bl(te)&&s(fe,te,null,de[te],I,j);"value"in de&&s(fe,"value",null,de.value,I),(ne=de.onVnodeBeforeMount)&&ar(ne,j,D)}U&&qs(D,null,j,"beforeMount");const Q=zM($,v);Q&&v.beforeEnter(fe),i(fe,R,k),((ne=de&&de.onVnodeMounted)||Q||U)&&oi(()=>{ne&&ar(ne,j,D),Q&&v.enter(fe),U&&qs(D,null,j,"mounted")},$)},w=(D,R,k,j,$)=>{if(k&&d(D,k),j)for(let I=0;I<j.length;I++)d(D,j[I]);if($){let I=$.subTree;if(R===I||bv(I.type)&&(I.ssContent===R||I.ssFallback===R)){const P=$.vnode;w(D,P,P.scopeId,P.slotScopeIds,$.parent)}}},S=(D,R,k,j,$,I,P,he,fe=0)=>{for(let ne=fe;ne<D.length;ne++){const de=D[ne]=he?Gr(D[ne]):pr(D[ne]);g(null,de,R,k,j,$,I,P,he)}},M=(D,R,k,j,$,I,P)=>{const he=R.el=D.el;let{patchFlag:fe,dynamicChildren:ne,dirs:de}=R;fe|=D.patchFlag&16;const E=D.props||Vt,v=R.props||Vt;let U;if(k&&$s(k,!1),(U=v.onVnodeBeforeUpdate)&&ar(U,k,R,D),de&&qs(R,D,k,"beforeUpdate"),k&&$s(k,!0),(E.innerHTML&&v.innerHTML==null||E.textContent&&v.textContent==null)&&u(he,""),ne?B(D.dynamicChildren,ne,he,k,j,Bf(R,$),I):P||se(D,R,he,null,k,j,Bf(R,$),I,!1),fe>0){if(fe&16)N(he,E,v,k,$);else if(fe&2&&E.class!==v.class&&s(he,"class",null,v.class,$),fe&4&&s(he,"style",E.style,v.style,$),fe&8){const Q=R.dynamicProps;for(let te=0;te<Q.length;te++){const J=Q[te],Me=E[J],me=v[J];(me!==Me||J==="value")&&s(he,J,Me,me,$,k)}}fe&1&&D.children!==R.children&&u(he,R.children)}else!P&&ne==null&&N(he,E,v,k,$);((U=v.onVnodeUpdated)||de)&&oi(()=>{U&&ar(U,k,R,D),de&&qs(R,D,k,"updated")},j)},B=(D,R,k,j,$,I,P)=>{for(let he=0;he<R.length;he++){const fe=D[he],ne=R[he],de=fe.el&&(fe.type===qt||!uo(fe,ne)||fe.shapeFlag&198)?h(fe.el):k;g(fe,ne,de,null,j,$,I,P,!0)}},N=(D,R,k,j,$)=>{if(R!==k){if(R!==Vt)for(const I in R)!bl(I)&&!(I in k)&&s(D,I,R[I],null,$,j);for(const I in k){if(bl(I))continue;const P=k[I],he=R[I];P!==he&&I!=="value"&&s(D,I,he,P,$,j)}"value"in k&&s(D,"value",R.value,k.value,$)}},L=(D,R,k,j,$,I,P,he,fe)=>{const ne=R.el=D?D.el:a(""),de=R.anchor=D?D.anchor:a("");let{patchFlag:E,dynamicChildren:v,slotScopeIds:U}=R;U&&(he=he?he.concat(U):U),D==null?(i(ne,k,j),i(de,k,j),S(R.children||[],k,de,$,I,P,he,fe)):E>0&&E&64&&v&&D.dynamicChildren&&D.dynamicChildren.length===v.length?(B(D.dynamicChildren,v,k,$,I,P,he),(R.key!=null||$&&R===$.subTree)&&Sv(D,R,!0)):se(D,R,k,de,$,I,P,he,fe)},H=(D,R,k,j,$,I,P,he,fe)=>{R.slotScopeIds=he,D==null?R.shapeFlag&512?$.ctx.activate(R,k,j,P,fe):K(R,k,j,$,I,P,fe):Y(D,R,fe)},K=(D,R,k,j,$,I,P)=>{const he=D.component=jM(D,j,$);if(gf(D)&&(he.ctx.renderer=le),ZM(he,!1,P),he.asyncDep){if($&&$.registerDep(he,X,P),!D.el){const fe=he.subTree=$e(ni);m(null,fe,R,k),D.placeholder=fe.el}}else X(he,D,R,k,$,I,P)},Y=(D,R,k)=>{const j=R.component=D.component;if(PM(D,R,k))if(j.asyncDep&&!j.asyncResolved){z(j,R,k);return}else j.next=R,j.update();else R.el=D.el,j.vnode=R},X=(D,R,k,j,$,I,P)=>{const he=()=>{if(D.isMounted){let{next:E,bu:v,u:U,parent:Q,vnode:te}=D;{const Te=yv(D);if(Te){E&&(E.el=te.el,z(D,E,P)),Te.asyncDep.then(()=>{oi(()=>{D.isUnmounted||ne()},$)});return}}let J=E,Me;$s(D,!1),E?(E.el=te.el,z(D,E,P)):E=te,v&&Df(v),(Me=E.props&&E.props.onVnodeBeforeUpdate)&&ar(Me,Q,E,te),$s(D,!0);const me=Wm(D),Re=D.subTree;D.subTree=me,g(Re,me,h(Re.el),F(Re),D,$,I),E.el=me.el,J===null&&DM(D,me.el),U&&oi(U,$),(Me=E.props&&E.props.onVnodeUpdated)&&oi(()=>ar(Me,Q,E,te),$)}else{let E;const{el:v,props:U}=R,{bm:Q,m:te,parent:J,root:Me,type:me}=D,Re=wl(R);$s(D,!1),Q&&Df(Q),!Re&&(E=U&&U.onVnodeBeforeMount)&&ar(E,J,R),$s(D,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(me);const Te=D.subTree=Wm(D);g(null,Te,k,j,D,$,I),R.el=Te.el}if(te&&oi(te,$),!Re&&(E=U&&U.onVnodeMounted)){const Te=R;oi(()=>ar(E,J,Te),$)}(R.shapeFlag&256||J&&wl(J.vnode)&&J.vnode.shapeFlag&256)&&D.a&&oi(D.a,$),D.isMounted=!0,R=k=j=null}};D.scope.on();const fe=D.effect=new A0(he);D.scope.off();const ne=D.update=fe.run.bind(fe),de=D.job=fe.runIfDirty.bind(fe);de.i=D,de.id=D.uid,fe.scheduler=()=>Bp(de),$s(D,!0),ne()},z=(D,R,k)=>{R.component=D;const j=D.vnode.props;D.vnode=R,D.next=null,LM(D,R.props,j,k),OM(D,R.children,k),es(),Um(D),ts()},se=(D,R,k,j,$,I,P,he,fe=!1)=>{const ne=D&&D.children,de=D?D.shapeFlag:0,E=R.children,{patchFlag:v,shapeFlag:U}=R;if(v>0){if(v&128){O(ne,E,k,j,$,I,P,he,fe);return}else if(v&256){ue(ne,E,k,j,$,I,P,he,fe);return}}U&8?(de&16&&G(ne,$,I),E!==ne&&u(k,E)):de&16?U&16?O(ne,E,k,j,$,I,P,he,fe):G(ne,$,I,!0):(de&8&&u(k,""),U&16&&S(E,k,j,$,I,P,he,fe))},ue=(D,R,k,j,$,I,P,he,fe)=>{D=D||_a,R=R||_a;const ne=D.length,de=R.length,E=Math.min(ne,de);let v;for(v=0;v<E;v++){const U=R[v]=fe?Gr(R[v]):pr(R[v]);g(D[v],U,k,null,$,I,P,he,fe)}ne>de?G(D,$,I,!0,!1,E):S(R,k,j,$,I,P,he,fe,E)},O=(D,R,k,j,$,I,P,he,fe)=>{let ne=0;const de=R.length;let E=D.length-1,v=de-1;for(;ne<=E&&ne<=v;){const U=D[ne],Q=R[ne]=fe?Gr(R[ne]):pr(R[ne]);if(uo(U,Q))g(U,Q,k,null,$,I,P,he,fe);else break;ne++}for(;ne<=E&&ne<=v;){const U=D[E],Q=R[v]=fe?Gr(R[v]):pr(R[v]);if(uo(U,Q))g(U,Q,k,null,$,I,P,he,fe);else break;E--,v--}if(ne>E){if(ne<=v){const U=v+1,Q=U<de?R[U].el:j;for(;ne<=v;)g(null,R[ne]=fe?Gr(R[ne]):pr(R[ne]),k,Q,$,I,P,he,fe),ne++}}else if(ne>v)for(;ne<=E;)xe(D[ne],$,I,!0),ne++;else{const U=ne,Q=ne,te=new Map;for(ne=Q;ne<=v;ne++){const Ee=R[ne]=fe?Gr(R[ne]):pr(R[ne]);Ee.key!=null&&te.set(Ee.key,ne)}let J,Me=0;const me=v-Q+1;let Re=!1,Te=0;const _e=new Array(me);for(ne=0;ne<me;ne++)_e[ne]=0;for(ne=U;ne<=E;ne++){const Ee=D[ne];if(Me>=me){xe(Ee,$,I,!0);continue}let Pe;if(Ee.key!=null)Pe=te.get(Ee.key);else for(J=Q;J<=v;J++)if(_e[J-Q]===0&&uo(Ee,R[J])){Pe=J;break}Pe===void 0?xe(Ee,$,I,!0):(_e[Pe-Q]=ne+1,Pe>=Te?Te=Pe:Re=!0,g(Ee,R[Pe],k,null,$,I,P,he,fe),Me++)}const Se=Re?VM(_e):_a;for(J=Se.length-1,ne=me-1;ne>=0;ne--){const Ee=Q+ne,Pe=R[Ee],Ae=R[Ee+1],Ke=Ee+1<de?Ae.el||Mv(Ae):j;_e[ne]===0?g(null,Pe,k,Ke,$,I,P,he,fe):Re&&(J<0||ne!==Se[J]?ve(Pe,k,Ke,2):J--)}}},ve=(D,R,k,j,$=null)=>{const{el:I,type:P,transition:he,children:fe,shapeFlag:ne}=D;if(ne&6){ve(D.component.subTree,R,k,j);return}if(ne&128){D.suspense.move(R,k,j);return}if(ne&64){P.move(D,R,k,le);return}if(P===qt){i(I,R,k);for(let E=0;E<fe.length;E++)ve(fe[E],R,k,j);i(D.anchor,R,k);return}if(P===_u){b(D,R,k);return}if(j!==2&&ne&1&&he)if(j===0)he.beforeEnter(I),i(I,R,k),oi(()=>he.enter(I),$);else{const{leave:E,delayLeave:v,afterLeave:U}=he,Q=()=>{D.ctx.isUnmounted?r(I):i(I,R,k)},te=()=>{I._isLeaving&&I[fr](!0),E(I,()=>{Q(),U&&U()})};v?v(I,Q,te):te()}else i(I,R,k)},xe=(D,R,k,j=!1,$=!1)=>{const{type:I,props:P,ref:he,children:fe,dynamicChildren:ne,shapeFlag:de,patchFlag:E,dirs:v,cacheIndex:U}=D;if(E===-2&&($=!1),he!=null&&(es(),Al(he,null,k,D,!0),ts()),U!=null&&(R.renderCache[U]=void 0),de&256){R.ctx.deactivate(D);return}const Q=de&1&&v,te=!wl(D);let J;if(te&&(J=P&&P.onVnodeBeforeUnmount)&&ar(J,R,D),de&6)Xe(D.component,k,j);else{if(de&128){D.suspense.unmount(k,j);return}Q&&qs(D,null,R,"beforeUnmount"),de&64?D.type.remove(D,R,k,le,j):ne&&!ne.hasOnce&&(I!==qt||E>0&&E&64)?G(ne,R,k,!1,!0):(I===qt&&E&384||!$&&de&16)&&G(fe,R,k),j&&ze(D)}(te&&(J=P&&P.onVnodeUnmounted)||Q)&&oi(()=>{J&&ar(J,R,D),Q&&qs(D,null,R,"unmounted")},k)},ze=D=>{const{type:R,el:k,anchor:j,transition:$}=D;if(R===qt){Ge(k,j);return}if(R===_u){y(D);return}const I=()=>{r(k),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(D.shapeFlag&1&&$&&!$.persisted){const{leave:P,delayLeave:he}=$,fe=()=>P(k,I);he?he(D.el,I,fe):fe()}else I()},Ge=(D,R)=>{let k;for(;D!==R;)k=f(D),r(D),D=k;r(R)},Xe=(D,R,k)=>{const{bum:j,scope:$,job:I,subTree:P,um:he,m:fe,a:ne}=D;qm(fe),qm(ne),j&&Df(j),$.stop(),I&&(I.flags|=8,xe(P,D,R,k)),he&&oi(he,R),oi(()=>{D.isUnmounted=!0},R)},G=(D,R,k,j=!1,$=!1,I=0)=>{for(let P=I;P<D.length;P++)xe(D[P],R,k,j,$)},F=D=>{if(D.shapeFlag&6)return F(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const R=f(D.anchor||D.el),k=R&&R[eM];return k?f(k):R};let W=!1;const Z=(D,R,k)=>{let j;D==null?R._vnode&&(xe(R._vnode,null,null,!0),j=R._vnode.component):g(R._vnode||null,D,R,null,null,null,k),R._vnode=D,W||(W=!0,Um(j),X0(),W=!1)},le={p:g,um:xe,m:ve,r:ze,mt:K,mc:S,pc:se,pbc:B,n:F,o:n};return{render:Z,hydrate:void 0,createApp:EM(Z)}}function Bf({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function $s({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function zM(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Sv(n,e,t=!1){const i=n.children,r=e.children;if(Ze(i)&&Ze(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Gr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Sv(o,a)),a.type===Sf&&(a.patchFlag===-1&&(a=r[s]=Gr(a)),a.el=o.el),a.type===ni&&!a.el&&(a.el=o.el)}}function VM(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function yv(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yv(e)}function qm(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Mv(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Mv(e.subTree):null}const bv=n=>n.__isSuspense;function HM(n,e){e&&e.pendingBranch?Ze(n)?e.effects.push(...n):e.effects.push(n):jy(n)}const qt=Symbol.for("v-fgt"),Sf=Symbol.for("v-txt"),ni=Symbol.for("v-cmt"),_u=Symbol.for("v-stc"),Rl=[];let Ai=null;function je(n=!1){Rl.push(Ai=n?null:[])}function GM(){Rl.pop(),Ai=Rl[Rl.length-1]||null}let Kl=1;function ku(n,e=!1){Kl+=n,n<0&&Ai&&e&&(Ai.hasOnce=!0)}function Ev(n){return n.dynamicChildren=Kl>0?Ai||_a:null,GM(),Kl>0&&Ai&&Ai.push(n),n}function tt(n,e,t,i,r,s){return Ev(ae(n,e,t,i,r,s,!0))}function Jh(n,e,t,i,r){return Ev($e(n,e,t,i,r,!0))}function zu(n){return n?n.__v_isVNode===!0:!1}function uo(n,e){return n.type===e.type&&n.key===e.key}const Tv=({key:n})=>n??null,gu=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Qt(n)||Vn(n)||it(n)?{i:Qi,r:n,k:e,f:!!t}:n:null);function ae(n,e=null,t=null,i=0,r=null,s=n===qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Tv(e),ref:e&&gu(e),scopeId:q0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qi};return a?(Vp(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Qt(t)?8:16),Kl>0&&!o&&Ai&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ai.push(l),l}const $e=WM;function WM(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===ov)&&(n=ni),zu(n)){const a=ks(n,e,!0);return t&&Vp(a,t),Kl>0&&!s&&Ai&&(a.shapeFlag&6?Ai[Ai.indexOf(n)]=a:Ai.push(a)),a.patchFlag=-2,a}if(nb(n)&&(n=n.__vccOpts),e){e=XM(e);let{class:a,style:l}=e;a&&!Qt(a)&&(e.class=Ls(a)),Ct(l)&&(Fp(l)&&!Ze(l)&&(l=mn({},l)),e.style=df(l))}const o=Qt(n)?1:bv(n)?128:j0(n)?64:Ct(n)?4:it(n)?2:0;return ae(n,e,t,i,r,o,s,!0)}function XM(n){return n?Fp(n)||pv(n)?mn({},n):n:null}function ks(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?qM(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Tv(c),ref:e&&e.ref?t&&s?Ze(s)?s.concat(gu(e)):[s,gu(e)]:gu(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==qt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ks(n.ssContent),ssFallback:n.ssFallback&&ks(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&$l(u,l.clone(u)),u}function po(n=" ",e=0){return $e(Sf,null,n,e)}function Av(n,e){const t=$e(_u,null,n);return t.staticCount=e,t}function YM(n="",e=!1){return e?(je(),Jh(ni,null,n)):$e(ni,null,n)}function pr(n){return n==null||typeof n=="boolean"?$e(ni):Ze(n)?$e(qt,null,n.slice()):zu(n)?Gr(n):$e(Sf,null,String(n))}function Gr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ks(n)}function Vp(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Vp(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!pv(e)?e._ctx=Qi:r===3&&Qi&&(Qi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else it(e)?(e={default:e,_ctx:Qi},t=32):(e=String(e),i&64?(t=16,e=[po(e)]):t=8);n.children=e,n.shapeFlag|=t}function qM(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ls([e.class,i.class]));else if(r==="style")e.style=df([e.style,i.style]);else if(cf(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function ar(n,e,t,i=null){rr(n,e,7,[t,i])}const $M=cv();let KM=0;function jM(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||$M,s={uid:KM++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Sy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_v(i,r),emitsOptions:uv(i,r),emit:null,emitted:null,propsDefaults:Vt,inheritAttrs:i.inheritAttrs,ctx:Vt,data:Vt,props:Vt,attrs:Vt,slots:Vt,refs:Vt,setupState:Vt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=AM.bind(null,s),n.ce&&n.ce(s),s}let On=null;const wv=()=>On||Qi;let Vu,Qh;{const n=hf(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Vu=e("__VUE_INSTANCE_SETTERS__",t=>On=t),Qh=e("__VUE_SSR_SETTERS__",t=>jl=t)}const mc=n=>{const e=On;return Vu(n),n.scope.on(),()=>{n.scope.off(),Vu(e)}},$m=()=>{On&&On.scope.off(),Vu(null)};function Cv(n){return n.vnode.shapeFlag&4}let jl=!1;function ZM(n,e=!1,t=!1){e&&Qh(e);const{props:i,children:r}=n.vnode,s=Cv(n);IM(n,i,s,e),FM(n,r,t||e);const o=s?JM(n,e):void 0;return e&&Qh(!1),o}function JM(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,gM);const{setup:i}=t;if(i){es();const r=n.setupContext=i.length>1?eb(n):null,s=mc(n),o=pc(i,n,0,[n.props,r]),a=x0(o);if(ts(),s(),(a||n.sp)&&!wl(n)&&iv(n),a){if(o.then($m,$m),e)return o.then(l=>{Km(n,l)}).catch(l=>{_f(l,n,0)});n.asyncDep=o}else Km(n,o)}else Rv(n)}function Km(n,e,t){it(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ct(e)&&(n.setupState=H0(e)),Rv(n)}function Rv(n,e,t){const i=n.type;n.render||(n.render=i.render||br);{const r=mc(n);es();try{vM(n)}finally{ts(),r()}}}const QM={get(n,e){return Fn(n,"get",""),n[e]}};function eb(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,QM),slots:n.slots,emit:n.emit,expose:e}}function Hp(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(H0(zy(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Cl)return Cl[t](n)},has(e,t){return t in e||t in Cl}})):n.proxy}function tb(n,e=!0){return it(n)?n.displayName||n.name:n.name||e&&n.__name}function nb(n){return it(n)&&"__vccOpts"in n}const ci=(n,e)=>Xy(n,e,jl);function Gp(n,e,t){try{ku(-1);const i=arguments.length;return i===2?Ct(e)&&!Ze(e)?zu(e)?$e(n,null,[e]):$e(n,e):$e(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&zu(t)&&(t=[t]),$e(n,e,t))}finally{ku(1)}}const ib="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ed;const jm=typeof window<"u"&&window.trustedTypes;if(jm)try{ed=jm.createPolicy("vue",{createHTML:n=>n})}catch{}const Pv=ed?n=>ed.createHTML(n):n=>n,rb="http://www.w3.org/2000/svg",sb="http://www.w3.org/1998/Math/MathML",Vr=typeof document<"u"?document:null,Zm=Vr&&Vr.createElement("template"),ob={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Vr.createElementNS(rb,n):e==="mathml"?Vr.createElementNS(sb,n):t?Vr.createElement(n,{is:t}):Vr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Vr.createTextNode(n),createComment:n=>Vr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Vr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Zm.innerHTML=Pv(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Zm.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},hs="transition",Ja="animation",Zl=Symbol("_vtc"),Dv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ab=mn({},Z0,Dv),lb=n=>(n.displayName="Transition",n.props=ab,n),cb=lb((n,{slots:e})=>Gp(iM,ub(n),e)),Ks=(n,e=[])=>{Ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},Jm=n=>n?Ze(n)?n.some(e=>e.length>1):n.length>1:!1;function ub(n){const e={};for(const L in n)L in Dv||(e[L]=n[L]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,_=fb(r),g=_&&_[0],p=_&&_[1],{onBeforeEnter:m,onEnter:x,onEnterCancelled:b,onLeave:y,onLeaveCancelled:A,onBeforeAppear:C=m,onAppear:w=x,onAppearCancelled:S=b}=e,M=(L,H,K,Y)=>{L._enterCancelled=Y,js(L,H?u:a),js(L,H?c:o),K&&K()},B=(L,H)=>{L._isLeaving=!1,js(L,h),js(L,d),js(L,f),H&&H()},N=L=>(H,K)=>{const Y=L?w:x,X=()=>M(H,L,K);Ks(Y,[H,X]),Qm(()=>{js(H,L?l:s),Nr(H,L?u:a),Jm(Y)||e_(H,i,g,X)})};return mn(e,{onBeforeEnter(L){Ks(m,[L]),Nr(L,s),Nr(L,o)},onBeforeAppear(L){Ks(C,[L]),Nr(L,l),Nr(L,c)},onEnter:N(!1),onAppear:N(!0),onLeave(L,H){L._isLeaving=!0;const K=()=>B(L,H);Nr(L,h),L._enterCancelled?(Nr(L,f),i_(L)):(i_(L),Nr(L,f)),Qm(()=>{L._isLeaving&&(js(L,h),Nr(L,d),Jm(y)||e_(L,i,p,K))}),Ks(y,[L,K])},onEnterCancelled(L){M(L,!1,void 0,!0),Ks(b,[L])},onAppearCancelled(L){M(L,!0,void 0,!0),Ks(S,[L])},onLeaveCancelled(L){B(L),Ks(A,[L])}})}function fb(n){if(n==null)return null;if(Ct(n))return[kf(n.enter),kf(n.leave)];{const e=kf(n);return[e,e]}}function kf(n){return hy(n)}function Nr(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Zl]||(n[Zl]=new Set)).add(e)}function js(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Zl];t&&(t.delete(e),t.size||(n[Zl]=void 0))}function Qm(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let hb=0;function e_(n,e,t,i){const r=n._endId=++hb,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=db(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),s()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function db(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${hs}Delay`),s=i(`${hs}Duration`),o=t_(r,s),a=i(`${Ja}Delay`),l=i(`${Ja}Duration`),c=t_(a,l);let u=null,h=0,f=0;e===hs?o>0&&(u=hs,h=o,f=s.length):e===Ja?c>0&&(u=Ja,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?hs:Ja:null,f=u?u===hs?s.length:l.length:0);const d=u===hs&&/\b(?:transform|all)(?:,|$)/.test(i(`${hs}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function t_(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>n_(t)+n_(n[i])))}function n_(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function i_(n){return(n?n.ownerDocument:document).body.offsetHeight}function pb(n,e,t){const i=n[Zl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const r_=Symbol("_vod"),mb=Symbol("_vsh"),_b=Symbol(""),gb=/(?:^|;)\s*display\s*:/;function vb(n,e,t){const i=n.style,r=Qt(t);let s=!1;if(t&&!r){if(e)if(Qt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&vu(i,a,"")}else for(const o in e)t[o]==null&&vu(i,o,"");for(const o in t)o==="display"&&(s=!0),vu(i,o,t[o])}else if(r){if(e!==t){const o=i[_b];o&&(t+=";"+o),i.cssText=t,s=gb.test(t)}}else e&&n.removeAttribute("style");r_ in n&&(n[r_]=s?i.display:"",n[mb]&&(i.display="none"))}const s_=/\s*!important$/;function vu(n,e,t){if(Ze(t))t.forEach(i=>vu(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=xb(n,e);s_.test(t)?n.setProperty(Lo(i),t.replace(s_,""),"important"):n[i]=t}}const o_=["Webkit","Moz","ms"],zf={};function xb(n,e){const t=zf[e];if(t)return t;let i=qi(e);if(i!=="filter"&&i in n)return zf[e]=i;i=ff(i);for(let r=0;r<o_.length;r++){const s=o_[r]+i;if(s in n)return zf[e]=s}return e}const a_="http://www.w3.org/1999/xlink";function l_(n,e,t,i,r,s=vy(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(a_,e.slice(6,e.length)):n.setAttributeNS(a_,e,t):t==null||s&&!b0(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Cr(t)?String(t):t)}function c_(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Pv(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=b0(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Sb(n,e,t,i){n.addEventListener(e,t,i)}function yb(n,e,t,i){n.removeEventListener(e,t,i)}const u_=Symbol("_vei");function Mb(n,e,t,i,r=null){const s=n[u_]||(n[u_]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=bb(e);if(i){const c=s[e]=Ab(i,r);Sb(n,a,c,l)}else o&&(yb(n,a,o,l),s[e]=void 0)}}const f_=/(?:Once|Passive|Capture)$/;function bb(n){let e;if(f_.test(n)){e={};let i;for(;i=n.match(f_);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Lo(n.slice(2)),e]}let Vf=0;const Eb=Promise.resolve(),Tb=()=>Vf||(Eb.then(()=>Vf=0),Vf=Date.now());function Ab(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;rr(wb(i,t.value),e,5,[i])};return t.value=n,t.attached=Tb(),t}function wb(n,e){if(Ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const h_=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Cb=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?pb(n,i,o):e==="style"?vb(n,t,i):cf(e)?Ap(e)||Mb(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rb(n,e,i,o))?(c_(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&l_(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Qt(i))?c_(n,qi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),l_(n,e,i,o))};function Rb(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&h_(e)&&it(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return h_(e)&&Qt(t)?!1:e in n}const Pb=["ctrl","shift","alt","meta"],Db={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Pb.some(t=>n[`${t}Key`]&&!e.includes(t))},td=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Db[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Ib=mn({patchProp:Cb},ob);let d_;function Lb(){return d_||(d_=BM(Ib))}const Nb=(...n)=>{const e=Lb().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Fb(i);if(!r)return;const s=e._component;!it(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Ub(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ub(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Fb(n){return Qt(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ua=typeof document<"u";function Iv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Ob(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Iv(n.default)}const Et=Object.assign;function Hf(n,e){const t={};for(const i in e){const r=e[i];t[i]=sr(r)?r.map(n):n(r)}return t}const Pl=()=>{},sr=Array.isArray;function p_(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Lv=/#/g,Bb=/&/g,kb=/\//g,zb=/=/g,Vb=/\?/g,Nv=/\+/g,Hb=/%5B/g,Gb=/%5D/g,Uv=/%5E/g,Wb=/%60/g,Fv=/%7B/g,Xb=/%7C/g,Ov=/%7D/g,Yb=/%20/g;function Wp(n){return n==null?"":encodeURI(""+n).replace(Xb,"|").replace(Hb,"[").replace(Gb,"]")}function qb(n){return Wp(n).replace(Fv,"{").replace(Ov,"}").replace(Uv,"^")}function nd(n){return Wp(n).replace(Nv,"%2B").replace(Yb,"+").replace(Lv,"%23").replace(Bb,"%26").replace(Wb,"`").replace(Fv,"{").replace(Ov,"}").replace(Uv,"^")}function $b(n){return nd(n).replace(zb,"%3D")}function Kb(n){return Wp(n).replace(Lv,"%23").replace(Vb,"%3F")}function jb(n){return Kb(n).replace(kb,"%2F")}function Jl(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Zb=/\/$/,Jb=n=>n.replace(Zb,"");function Gf(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=n(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=nE(i??e,t),{fullPath:i+s+o,path:i,query:r,hash:Jl(o)}}function Qb(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function m_(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function eE(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Ia(e.matched[i],t.matched[r])&&Bv(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ia(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Bv(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!tE(n[t],e[t]))return!1;return!0}function tE(n,e){return sr(n)?__(n,e):sr(e)?__(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function __(n,e){return sr(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function nE(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const ds={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let id=function(n){return n.pop="pop",n.push="push",n}({}),Wf=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function iE(n){if(!n)if(ua){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Jb(n)}const rE=/^[^#]+#/;function sE(n,e){return n.replace(rE,"#")+e}function oE(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const yf=()=>({left:window.scrollX,top:window.scrollY});function aE(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=oE(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function g_(n,e){return(history.state?history.state.position-e:-1)+n}const rd=new Map;function lE(n,e){rd.set(n,e)}function cE(n){const e=rd.get(n);return rd.delete(n),e}function uE(n){return typeof n=="string"||n&&typeof n=="object"}function kv(n){return typeof n=="string"||typeof n=="symbol"}let Zt=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const zv=Symbol("");Zt.MATCHER_NOT_FOUND+"",Zt.NAVIGATION_GUARD_REDIRECT+"",Zt.NAVIGATION_ABORTED+"",Zt.NAVIGATION_CANCELLED+"",Zt.NAVIGATION_DUPLICATED+"";function La(n,e){return Et(new Error,{type:n,[zv]:!0},e)}function Ur(n,e){return n instanceof Error&&zv in n&&(e==null||!!(n.type&e))}const fE=["params","query","hash"];function hE(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of fE)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function dE(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(Nv," "),s=r.indexOf("="),o=Jl(s<0?r:r.slice(0,s)),a=s<0?null:Jl(r.slice(s+1));if(o in e){let l=e[o];sr(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function v_(n){let e="";for(let t in n){const i=n[t];if(t=$b(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(sr(i)?i.map(r=>r&&nd(r)):[i&&nd(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function pE(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=sr(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const mE=Symbol(""),x_=Symbol(""),Xp=Symbol(""),Yp=Symbol(""),sd=Symbol("");function Qa(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function bs(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(La(Zt.NAVIGATION_ABORTED,{from:t,to:e})):f instanceof Error?l(f):uE(f)?l(La(Zt.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function Xf(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Iv(l)){const c=(l.__vccOpts||l)[e];c&&s.push(bs(c,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Ob(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const f=(h.__vccOpts||h)[e];return f&&bs(f,t,i,o,a,r)()}))}}return s}function _E(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Ia(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Ia(c,l))||r.push(l))}return[t,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let gE=()=>location.protocol+"//"+location.host;function Vv(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),m_(a,"")}return m_(t,n)+i+r}function vE(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=Vv(n,location),_=t.value,g=e.value;let p=0;if(f){if(t.value=d,e.value=f,o&&o===_){o=null;return}p=g?f.position-g.position:0}else i(d);r.forEach(m=>{m(t.value,_,{delta:p,type:id.pop,direction:p?p>0?Wf.forward:Wf.back:Wf.unknown})})};function l(){o=t.value}function c(f){r.push(f);const d=()=>{const _=r.indexOf(f);_>-1&&r.splice(_,1)};return s.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Et({},f.state,{scroll:yf()}),"")}}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function S_(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?yf():null}}function xE(n){const{history:e,location:t}=window,i={value:Vv(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:gE()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](f)}}function o(l,c){s(l,Et({},e.state,S_(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=Et({},r.value,e.state,{forward:l,scroll:yf()});s(u.current,u,!0),s(l,Et({},S_(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function SE(n){n=iE(n);const e=xE(n),t=vE(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Et({location:"",base:n,go:i,createHref:sE.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function yE(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),SE(n)}let mo=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var hn=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(hn||{});const ME={type:mo.Static,value:""},bE=/[a-zA-Z0-9_]/;function EE(n){if(!n)return[[]];if(n==="/")return[[ME]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=hn.Static,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===hn.Static?s.push({type:mo.Static,value:c}):t===hn.Param||t===hn.ParamRegExp||t===hn.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:mo.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==hn.ParamRegExp){i=t,t=hn.EscapeNext;continue}switch(t){case hn.Static:l==="/"?(c&&h(),o()):l===":"?(h(),t=hn.Param):f();break;case hn.EscapeNext:f(),t=i;break;case hn.Param:l==="("?t=hn.ParamRegExp:bE.test(l)?f():(h(),t=hn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case hn.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=hn.ParamRegExpEnd:u+=l;break;case hn.ParamRegExpEnd:h(),t=hn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===hn.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}const y_="[^/]+?",TE={sensitive:!1,strict:!1,start:!0,end:!0};var Zn=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Zn||{});const AE=/[.+*?^${}()[\]/\\]/g;function wE(n,e){const t=Et({},TE,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[Zn.Root];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=Zn.Segment+(t.sensitive?Zn.BonusCaseSensitive:0);if(f.type===mo.Static)h||(r+="/"),r+=f.value.replace(AE,"\\$&"),d+=Zn.Static;else if(f.type===mo.Param){const{value:_,repeatable:g,optional:p,regexp:m}=f;s.push({name:_,repeatable:g,optional:p});const x=m||y_;if(x!==y_){d+=Zn.BonusCustomRegExp;try{`${x}`}catch(y){throw new Error(`Invalid custom RegExp for param "${_}" (${x}): `+y.message)}}let b=g?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(b=p&&c.length<2?`(?:/${b})`:"/"+b),p&&(b+="?"),r+=b,d+=Zn.Dynamic,p&&(d+=Zn.BonusOptional),g&&(d+=Zn.BonusRepeatable),x===".*"&&(d+=Zn.BonusWildcard)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Zn.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",_=s[f-1];h[_.name]=d&&_.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===mo.Static)u+=d.value;else if(d.type===mo.Param){const{value:_,repeatable:g,optional:p}=d,m=_ in c?c[_]:"";if(sr(m)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const x=sr(m)?m.join("/"):m;if(!x)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=x}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function CE(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Zn.Static+Zn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Zn.Static+Zn.Segment?1:-1:0}function Hv(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=CE(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(M_(i))return 1;if(M_(r))return-1}return r.length-i.length}function M_(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const RE={strict:!1,end:!0,sensitive:!1};function PE(n,e,t){const i=wE(EE(n.path),t),r=Et(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function DE(n,e){const t=[],i=new Map;e=p_(RE,e);function r(h){return i.get(h)}function s(h,f,d){const _=!d,g=E_(h);g.aliasOf=d&&d.record;const p=p_(e,h),m=[g];if("alias"in h){const y=typeof h.alias=="string"?[h.alias]:h.alias;for(const A of y)m.push(E_(Et({},g,{components:d?d.record.components:g.components,path:A,aliasOf:d?d.record:g})))}let x,b;for(const y of m){const{path:A}=y;if(f&&A[0]!=="/"){const C=f.record.path,w=C[C.length-1]==="/"?"":"/";y.path=f.record.path+(A&&w+A)}if(x=PE(y,f,p),d?d.alias.push(x):(b=b||x,b!==x&&b.alias.push(x),_&&h.name&&!T_(x)&&o(h.name)),Gv(x)&&l(x),g.children){const C=g.children;for(let w=0;w<C.length;w++)s(C[w],x,d&&d.children[w])}d=d||x}return b?()=>{o(b)}:Pl}function o(h){if(kv(h)){const f=i.get(h);f&&(i.delete(h),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(h);f>-1&&(t.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){const f=NE(h,t);t.splice(f,0,h),h.record.name&&!T_(h)&&i.set(h.record.name,h)}function c(h,f){let d,_={},g,p;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw La(Zt.MATCHER_NOT_FOUND,{location:h});p=d.record.name,_=Et(b_(f.params,d.keys.filter(b=>!b.optional).concat(d.parent?d.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),h.params&&b_(h.params,d.keys.map(b=>b.name))),g=d.stringify(_)}else if(h.path!=null)g=h.path,d=t.find(b=>b.re.test(g)),d&&(_=d.parse(g),p=d.record.name);else{if(d=f.name?i.get(f.name):t.find(b=>b.re.test(f.path)),!d)throw La(Zt.MATCHER_NOT_FOUND,{location:h,currentLocation:f});p=d.record.name,_=Et({},f.params,h.params),g=d.stringify(_)}const m=[];let x=d;for(;x;)m.unshift(x.record),x=x.parent;return{name:p,path:g,params:_,matched:m,meta:LE(m)}}n.forEach(h=>s(h));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function b_(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function E_(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:IE(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function IE(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function T_(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function LE(n){return n.reduce((e,t)=>Et(e,t.meta),{})}function NE(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Hv(n,e[s])<0?i=s:t=s+1}const r=UE(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function UE(n){let e=n;for(;e=e.parent;)if(Gv(e)&&Hv(n,e)===0)return e}function Gv({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function A_(n){const e=Er(Xp),t=Er(Yp),i=ci(()=>{const l=dt(n.to);return e.resolve(l)}),r=ci(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ia.bind(null,u));if(f>-1)return f;const d=w_(l[c-2]);return c>1&&w_(u)===d&&h[h.length-1].path!==d?h.findIndex(Ia.bind(null,l[c-2])):f}),s=ci(()=>r.value>-1&&kE(t.params,i.value.params)),o=ci(()=>r.value>-1&&r.value===t.matched.length-1&&Bv(t.params,i.value.params));function a(l={}){if(BE(l)){const c=e[dt(n.replace)?"replace":"push"](dt(n.to)).catch(Pl);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ci(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function FE(n){return n.length===1?n[0]:n}const OE=nv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:A_,setup(n,{slots:e}){const t=mf(A_(n)),{options:i}=Er(Xp),r=ci(()=>({[C_(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[C_(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&FE(e.default(t));return n.custom?s:Gp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Hu=OE;function BE(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function kE(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!sr(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function w_(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const C_=(n,e,t)=>n??e??t,zE=nv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Er(sd),r=ci(()=>n.route||i.value),s=Er(x_,0),o=ci(()=>{let c=dt(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ci(()=>r.value.matched[o.value]);pu(x_,ci(()=>o.value+1)),pu(mE,a),pu(sd,r);const l=va();return mu(()=>[l.value,a.value,n.name],([c,u,h],[f,d,_])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Ia(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return R_(t.default,{Component:f,route:c});const d=h.props[u],_=d?d===!0?c.params:typeof d=="function"?d(c):d:null,p=Gp(f,Et({},_,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return R_(t.default,{Component:p,route:c})||p}}});function R_(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Wv=zE;function VE(n){const e=DE(n.routes,n),t=n.parseQuery||dE,i=n.stringifyQuery||v_,r=n.history,s=Qa(),o=Qa(),a=Qa(),l=Vy(ds);let c=ds;ua&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Hf.bind(null,F=>""+F),h=Hf.bind(null,jb),f=Hf.bind(null,Jl);function d(F,W){let Z,le;return kv(F)?(Z=e.getRecordMatcher(F),le=W):le=F,e.addRoute(le,Z)}function _(F){const W=e.getRecordMatcher(F);W&&e.removeRoute(W)}function g(){return e.getRoutes().map(F=>F.record)}function p(F){return!!e.getRecordMatcher(F)}function m(F,W){if(W=Et({},W||l.value),typeof F=="string"){const k=Gf(t,F,W.path),j=e.resolve({path:k.path},W),$=r.createHref(k.fullPath);return Et(k,j,{params:f(j.params),hash:Jl(k.hash),redirectedFrom:void 0,href:$})}let Z;if(F.path!=null)Z=Et({},F,{path:Gf(t,F.path,W.path).path});else{const k=Et({},F.params);for(const j in k)k[j]==null&&delete k[j];Z=Et({},F,{params:h(k)}),W.params=h(W.params)}const le=e.resolve(Z,W),pe=F.hash||"";le.params=u(f(le.params));const D=Qb(i,Et({},F,{hash:qb(pe),path:le.path})),R=r.createHref(D);return Et({fullPath:D,hash:pe,query:i===v_?pE(F.query):F.query||{}},le,{redirectedFrom:void 0,href:R})}function x(F){return typeof F=="string"?Gf(t,F,l.value.path):Et({},F)}function b(F,W){if(c!==F)return La(Zt.NAVIGATION_CANCELLED,{from:W,to:F})}function y(F){return w(F)}function A(F){return y(Et(x(F),{replace:!0}))}function C(F,W){const Z=F.matched[F.matched.length-1];if(Z&&Z.redirect){const{redirect:le}=Z;let pe=typeof le=="function"?le(F,W):le;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=x(pe):{path:pe},pe.params={}),Et({query:F.query,hash:F.hash,params:pe.path!=null?{}:F.params},pe)}}function w(F,W){const Z=c=m(F),le=l.value,pe=F.state,D=F.force,R=F.replace===!0,k=C(Z,le);if(k)return w(Et(x(k),{state:typeof k=="object"?Et({},pe,k.state):pe,force:D,replace:R}),W||Z);const j=Z;j.redirectedFrom=W;let $;return!D&&eE(i,le,Z)&&($=La(Zt.NAVIGATION_DUPLICATED,{to:j,from:le}),ve(le,le,!0,!1)),($?Promise.resolve($):B(j,le)).catch(I=>Ur(I)?Ur(I,Zt.NAVIGATION_GUARD_REDIRECT)?I:O(I):se(I,j,le)).then(I=>{if(I){if(Ur(I,Zt.NAVIGATION_GUARD_REDIRECT))return w(Et({replace:R},x(I.to),{state:typeof I.to=="object"?Et({},pe,I.to.state):pe,force:D}),W||j)}else I=L(j,le,!0,R,pe);return N(j,le,I),I})}function S(F,W){const Z=b(F,W);return Z?Promise.reject(Z):Promise.resolve()}function M(F){const W=Ge.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(F):F()}function B(F,W){let Z;const[le,pe,D]=_E(F,W);Z=Xf(le.reverse(),"beforeRouteLeave",F,W);for(const k of le)k.leaveGuards.forEach(j=>{Z.push(bs(j,F,W))});const R=S.bind(null,F,W);return Z.push(R),G(Z).then(()=>{Z=[];for(const k of s.list())Z.push(bs(k,F,W));return Z.push(R),G(Z)}).then(()=>{Z=Xf(pe,"beforeRouteUpdate",F,W);for(const k of pe)k.updateGuards.forEach(j=>{Z.push(bs(j,F,W))});return Z.push(R),G(Z)}).then(()=>{Z=[];for(const k of D)if(k.beforeEnter)if(sr(k.beforeEnter))for(const j of k.beforeEnter)Z.push(bs(j,F,W));else Z.push(bs(k.beforeEnter,F,W));return Z.push(R),G(Z)}).then(()=>(F.matched.forEach(k=>k.enterCallbacks={}),Z=Xf(D,"beforeRouteEnter",F,W,M),Z.push(R),G(Z))).then(()=>{Z=[];for(const k of o.list())Z.push(bs(k,F,W));return Z.push(R),G(Z)}).catch(k=>Ur(k,Zt.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function N(F,W,Z){a.list().forEach(le=>M(()=>le(F,W,Z)))}function L(F,W,Z,le,pe){const D=b(F,W);if(D)return D;const R=W===ds,k=ua?history.state:{};Z&&(le||R?r.replace(F.fullPath,Et({scroll:R&&k&&k.scroll},pe)):r.push(F.fullPath,pe)),l.value=F,ve(F,W,Z,R),O()}let H;function K(){H||(H=r.listen((F,W,Z)=>{if(!Xe.listening)return;const le=m(F),pe=C(le,Xe.currentRoute.value);if(pe){w(Et(pe,{replace:!0,force:!0}),le).catch(Pl);return}c=le;const D=l.value;ua&&lE(g_(D.fullPath,Z.delta),yf()),B(le,D).catch(R=>Ur(R,Zt.NAVIGATION_ABORTED|Zt.NAVIGATION_CANCELLED)?R:Ur(R,Zt.NAVIGATION_GUARD_REDIRECT)?(w(Et(x(R.to),{force:!0}),le).then(k=>{Ur(k,Zt.NAVIGATION_ABORTED|Zt.NAVIGATION_DUPLICATED)&&!Z.delta&&Z.type===id.pop&&r.go(-1,!1)}).catch(Pl),Promise.reject()):(Z.delta&&r.go(-Z.delta,!1),se(R,le,D))).then(R=>{R=R||L(le,D,!1),R&&(Z.delta&&!Ur(R,Zt.NAVIGATION_CANCELLED)?r.go(-Z.delta,!1):Z.type===id.pop&&Ur(R,Zt.NAVIGATION_ABORTED|Zt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),N(le,D,R)}).catch(Pl)}))}let Y=Qa(),X=Qa(),z;function se(F,W,Z){O(F);const le=X.list();return le.length?le.forEach(pe=>pe(F,W,Z)):console.error(F),Promise.reject(F)}function ue(){return z&&l.value!==ds?Promise.resolve():new Promise((F,W)=>{Y.add([F,W])})}function O(F){return z||(z=!F,K(),Y.list().forEach(([W,Z])=>F?Z(F):W()),Y.reset()),F}function ve(F,W,Z,le){const{scrollBehavior:pe}=n;if(!ua||!pe)return Promise.resolve();const D=!Z&&cE(g_(F.fullPath,0))||(le||!Z)&&history.state&&history.state.scroll||null;return Op().then(()=>pe(F,W,D)).then(R=>R&&aE(R)).catch(R=>se(R,F,W))}const xe=F=>r.go(F);let ze;const Ge=new Set,Xe={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:p,getRoutes:g,resolve:m,options:n,push:y,replace:A,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:ue,install(F){F.component("RouterLink",Hu),F.component("RouterView",Wv),F.config.globalProperties.$router=Xe,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(l)}),ua&&!ze&&l.value===ds&&(ze=!0,y(r.location).catch(le=>{}));const W={};for(const le in ds)Object.defineProperty(W,le,{get:()=>l.value[le],enumerable:!0});F.provide(Xp,Xe),F.provide(Yp,z0(W)),F.provide(sd,l);const Z=F.unmount;Ge.add(F),F.unmount=function(){Ge.delete(F),Ge.size<1&&(c=ds,H&&H(),H=null,l.value=ds,ze=!1,z=!1),Z()}}};function G(F){return F.reduce((W,Z)=>W.then(()=>M(Z)),Promise.resolve())}return Xe}function HE(n){return Er(Yp)}const GE={__name:"App",setup(n){return(e,t)=>(je(),Jh(dt(Wv),null,{default:Da(({Component:i})=>[$e(cb,{name:"page-shell",mode:"out-in"},{default:Da(()=>[(je(),Jh(mM(i)))]),_:2},1024)]),_:1}))}};function Hr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Xv(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Na={duration:.5,overwrite:!1,delay:0},qp,Cn,Wt,Gi=1e8,Ot=1/Gi,od=Math.PI*2,WE=od/4,XE=0,Yv=Math.sqrt,YE=Math.cos,qE=Math.sin,En=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},is=function(e){return typeof e=="number"},$p=function(e){return typeof e>"u"},Rr=function(e){return typeof e=="object"},ui=function(e){return e!==!1},Kp=function(){return typeof window<"u"},bc=function(e){return Jt(e)||En(e)},qv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,$E=/random\([^)]+\)/g,KE=/,\s*/g,P_=/(?:-?\.?\d|\.)+/gi,$v=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,da=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kv=/[+-]=-?[.\d]+/,jE=/[^,'"\[\]\s]+/gi,ZE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,hr,ad,jp,Pi={},Gu={},jv,Zv=function(e){return(Gu=Ua(e,Pi))&&mi},Zp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ql=function(e,t){return!t&&console.warn(e)},Jv=function(e,t){return e&&(Pi[e]=t)&&Gu&&(Gu[e]=t)||Pi},ec=function(){return 0},JE={suppressEvents:!0,isStart:!0,kill:!1},xu={suppressEvents:!0,kill:!1},QE={suppressEvents:!0},Jp={},Ns=[],ld={},Qv,Mi={},qf={},D_=30,Su=[],Qp="",em=function(e){var t=e[0],i,r;if(Rr(t)||Jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Su.length;r--&&!Su[r].targetTest(t););i=Su[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new bx(e[r],i)))||e.splice(r,1);return e},Mo=function(e){return e._gsap||em(Wi(e))[0]._gsap},ex=function(e,t,i){return(i=e[t])&&Jt(i)?e[t]():$p(i)&&e.getAttribute&&e.getAttribute(t)||i},fi=function(e,t){return(e=e.split(",")).forEach(t)||e},nn=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},ya=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},eT=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Wu=function(){var e=Ns.length,t=Ns.slice(0),i,r;for(ld={},Ns.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},tm=function(e){return!!(e._initted||e._startAt||e.add)},tx=function(e,t,i,r){Ns.length&&!Cn&&Wu(),e.render(t,i,!!(Cn&&t<0&&tm(e))),Ns.length&&!Cn&&Wu()},nx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jE).length<2?t:En(e)?e.trim():e},ix=function(e){return e},Di=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},tT=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ua=function(e,t){for(var i in t)e[i]=t[i];return e},I_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Rr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Xu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Dl=function(e){var t=e.parent||Yt,i=e.keyframes?tT(Hn(e.keyframes)):Di;if(ui(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},nT=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},rx=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Mf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},bo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},iT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},cd=function(e,t,i,r){return e._startAt&&(Cn?e._startAt.revert(xu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},rT=function n(e){return!e||e._ts&&n(e.parent)},L_=function(e){return e._repeat?Fa(e._tTime,e=e.duration()+e._rDelay)*e:0},Fa=function(e,t){var i=Math.floor(e=Xt(e/t));return e&&i===e?i-1:i},Yu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},bf=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ot)||0))},Ef=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Xt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),bf(e),i._dirty||bo(i,e)),e},sx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Yu(e.rawTime(),t),(!t._dur||_c(0,t.totalDuration(),i)-t._tTime>Ot)&&t.render(i,!0)),bo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ot}},_r=function(e,t,i,r){return t.parent&&zs(t),t._start=Xt((is(i)?i:i||e!==Yt?Ui(e,i,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),rx(e,t,"_first","_last",e._sort?"_start":0),ud(t)||(e._recent=t),r||sx(e,t),e._ts<0&&Ef(e,e._tTime),e},ox=function(e,t){return(Pi.ScrollTrigger||Zp("scrollTrigger",t))&&Pi.ScrollTrigger.create(t,e)},ax=function(e,t,i,r,s){if(im(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Qv!==Ei.frame)return Ns.push(e),e._lazy=[s,r],1},sT=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},ud=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},oT=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&sT(e)&&!(!e._initted&&ud(e))||(e._ts<0||e._dp._ts<0)&&!ud(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=_c(0,e._tDur,t),u=Fa(l,a),e._yoyo&&u&1&&(o=1-o),u!==Fa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Cn||r||e._zTime===Ot||!t&&e._zTime){if(!e._initted&&ax(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?Ot:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&cd(e,t,i,!0),e._onUpdate&&!i&&wi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&wi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zs(e,1),!i&&!Cn&&(wi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},aT=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Oa=function(e,t,i,r){var s=e._repeat,o=Xt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Xt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ef(e,e._tTime=e._tDur*a),e.parent&&bf(e),i||bo(e.parent,e),e},N_=function(e){return e instanceof ii?bo(e):Oa(e,e._dur)},lT={_start:0,endTime:ec,totalDuration:ec},Ui=function n(e,t,i){var r=e.labels,s=e._recent||lT,o=e.duration()>=Gi?s.endTime(!1):e._dur,a,l,c;return En(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Hn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Il=function(e,t,i){var r=is(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ui(l.vars.inherit)&&l.parent;o.immediateRender=ui(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ln(t[0],o,t[s+1])},Xs=function(e,t){return e||e===0?t(e):t},_c=function(e,t,i){return i<e?e:i>t?t:i},Bn=function(e,t){return!En(e)||!(t=ZE.exec(e))?"":t[1]},cT=function(e,t,i){return Xs(i,function(r){return _c(e,t,r)})},fd=[].slice,lx=function(e,t){return e&&Rr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Rr(e[0]))&&!e.nodeType&&e!==hr},uT=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return En(r)&&!t||lx(r,1)?(s=i).push.apply(s,Wi(r)):i.push(r)})||i},Wi=function(e,t,i){return Wt&&!t&&Wt.selector?Wt.selector(e):En(e)&&!i&&(ad||!Ba())?fd.call((t||jp).querySelectorAll(e),0):Hn(e)?uT(e,i):lx(e)?fd.call(e,0):e?[e]:[]},hd=function(e){return e=Wi(e)[0]||Ql("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Wi(t,i.querySelectorAll?i:i===e?Ql("Invalid scope")||jp.createElement("div"):e)}},cx=function(e){return e.sort(function(){return .5-Math.random()})},ux=function(e){if(Jt(e))return e;var t=Rr(e)?e:{each:e},i=Eo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return En(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,_){var g=(_||t).length,p=o[g],m,x,b,y,A,C,w,S,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Gi])[1],!M){for(w=-Gi;w<(w=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=o[g]=[],m=l?Math.min(M,g)*u-.5:r%M,x=M===Gi?0:l?g*h/M-.5:r/M|0,w=0,S=Gi,C=0;C<g;C++)b=C%M-m,y=x-(C/M|0),p[C]=A=c?Math.abs(c==="y"?y:b):Yv(b*b+y*y),A>w&&(w=A),A<S&&(S=A);r==="random"&&cx(p),p.max=w-S,p.min=S,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Bn(t.amount||t.each)||0,i=i&&g<0?Sx(i):i}return g=(p[f]-p.min)/p.max||0,Xt(p.b+(i?i(g):g)*p.v)+p.u}},dd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Xt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(is(i)?0:Bn(i))}},fx=function(e,t){var i=Hn(e),r,s;return!i&&Rr(e)&&(r=i=e.radius||Gi,e.values?(e=Wi(e.values),(s=!is(e[0]))&&(r*=r)):e=dd(e.increment)),Xs(t,i?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Gi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||is(o)?u:u+Bn(o)}:dd(e))},hx=function(e,t,i,r){return Xs(Hn(e)?!t:i===!0?!!(i=0):!r,function(){return Hn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},fT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},hT=function(e,t){return function(i){return e(parseFloat(i))+(t||Bn(i))}},dT=function(e,t,i){return px(e,t,0,1,i)},dx=function(e,t,i){return Xs(i,function(r){return e[~~t(r)]})},pT=function n(e,t,i){var r=t-e;return Hn(e)?dx(e,n(0,e.length),t):Xs(i,function(s){return(r+(s-e)%r)%r+e})},mT=function n(e,t,i){var r=t-e,s=r*2;return Hn(e)?dx(e,n(0,e.length-1),t):Xs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},tc=function(e){return e.replace($E,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(KE);return hx(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},px=function(e,t,i,r,s){var o=t-e,a=r-i;return Xs(s,function(l){return i+((l-e)/o*a||0)})},_T=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=En(e),a={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Hn(e)&&!Hn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(n(e[c-1],e[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},i=t}else r||(e=Ua(Hn(e)?[]:{},e));if(!u){for(l in t)nm.call(a,e,l,"get",t[l]);s=function(_){return om(_,a)||(o?e.p:e)}}}return Xs(i,s)},U_=function(e,t,i){var r=e.labels,s=Gi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},wi=function(e,t,i){var r=e.vars,s=r[t],o=Wt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ns.length&&Wu(),a&&(Wt=a),u=l?s.apply(c,l):s.call(c),Wt=o,u},pl=function(e){return zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Cn),e.progress()<1&&wi(e,"onInterrupt"),e},pa,mx=[],_x=function(e){if(e)if(e=!e.name&&e.default||e,Kp()||e.headless){var t=e.name,i=Jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ec,render:om,add:nm,kill:IT,modifier:DT,rawVars:0},o={targetTest:0,get:0,getSetter:sm,aliases:{},register:0};if(Ba(),e!==r){if(Mi[t])return;Di(r,Di(Xu(e,s),o)),Ua(r.prototype,Ua(s,Xu(e,o))),Mi[r.prop=t]=r,e.targetTest&&(Su.push(r),Jp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Jv(t,r),e.register&&e.register(mi,r,hi)}else mx.push(e)},Ft=255,ml={aqua:[0,Ft,Ft],lime:[0,Ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ft],navy:[0,0,128],white:[Ft,Ft,Ft],olive:[128,128,0],yellow:[Ft,Ft,0],orange:[Ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ft,0,0],pink:[Ft,192,203],cyan:[0,Ft,Ft],transparent:[Ft,Ft,Ft,0]},$f=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ft+.5|0},gx=function(e,t,i){var r=e?is(e)?[e>>16,e>>8&Ft,e&Ft]:0:ml.black,s,o,a,l,c,u,h,f,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ml[e])r=ml[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ft,r&Ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ft,e&Ft]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(P_),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=$f(l+1/3,s,o),r[1]=$f(l,s,o),r[2]=$f(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match($v),i&&r.length<4&&(r[3]=1),r}else r=e.match(P_)||ml.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Ft,o=r[1]/Ft,a=r[2]/Ft,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},vx=function(e){var t=[],i=[],r=-1;return e.split(Us).forEach(function(s){var o=s.match(da)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},F_=function(e,t,i){var r="",s=(e+r).match(Us),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=gx(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=vx(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Us,"1").split(da),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Us),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Us=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ml)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),gT=/hsl[a]?\(/,xx=function(e){var t=e.join(" "),i;if(Us.lastIndex=0,Us.test(t))return i=gT.test(t),e[1]=F_(e[1],i),e[0]=F_(e[0],i,vx(e[1])),!0},nc,Ei=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,h,f,d,_=function g(p){var m=n()-r,x=p===!0,b,y,A,C;if((m>e||m<0)&&(i+=m-t),r+=m,A=r-i,b=A-o,(b>0||x)&&(C=++h.frame,f=A-h.time*1e3,h.time=A=A/1e3,o+=b+(b>=s?4:s-b),y=1),x||(l=c(g)),y)for(d=0;d<a.length;d++)a[d](A,f,C,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){jv&&(!ad&&Kp()&&(hr=ad=window,jp=hr.document||{},Pi.gsap=mi,(hr.gsapVersions||(hr.gsapVersions=[])).push(mi.version),Zv(Gu||hr.GreenSockGlobals||!hr.gsap&&hr||{}),mx.forEach(_x)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},nc=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),nc=0,c=ec},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=h.time*1e3+s},add:function(p,m,x){var b=m?function(y,A,C,w){p(y,A,C,w),h.remove(b)}:p;return h.remove(p),a[x?"unshift":"push"](b),Ba(),b},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},h}(),Ba=function(){return!nc&&Ei.wake()},_t={},vT=/^[\d.\-M][\d.\-,\s]/,xT=/["']/g,ST=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(xT,"").trim():+c,r=l.substr(a+1).trim();return t},yT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},MT=function(e){var t=(e+"").split("("),i=_t[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[ST(t[1])]:yT(e).split(",").map(nx)):_t._CE&&vT.test(e)?_t._CE("",e):i},Sx=function(e){return function(t){return 1-e(1-t)}},yx=function n(e,t){for(var i=e._first,r;i;)i instanceof ii?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Eo=function(e,t){return e&&(Jt(e)?e:_t[e]||MT(e))||t},Fo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return fi(e,function(a){_t[a]=Pi[a]=s,_t[o=a.toLowerCase()]=i;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},Mx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Kf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/od*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*qE((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Mx(a);return s=od/s,l.config=function(c,u){return n(e,c,u)},l},jf=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Mx(i);return r.config=function(s){return n(e,s)},r};fi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Fo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Fo("Elastic",Kf("in"),Kf("out"),Kf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Fo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Fo("Circ",function(n){return-(Yv(1-n*n)-1)});Fo("Sine",function(n){return n===1?1:-YE(n*WE)+1});Fo("Back",jf("in"),jf("out"),jf());_t.SteppedEase=_t.steps=Pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ot;return function(a){return((r*_c(0,o,a)|0)+s)*i}}};Na.ease=_t["quad.out"];fi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Qp+=n+","+n+"Params,"});var bx=function(e,t){this.id=XE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ex,this.set=t?t.getSetter:sm},ic=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Oa(this,+t.duration,1,1),this.data=t.data,Wt&&(this._ctx=Wt,Wt.data.push(this)),nc||Ei.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Oa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ba(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ef(this,i),!s._dp||s.parent||sx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&_r(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ot||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),tx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+L_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+L_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Fa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Ot?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Yu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ot?0:this._rts,this.totalTime(_c(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),bf(this),iT(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ba(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ot&&(this._tTime-=Ot)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Xt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&_r(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ui(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=QE);var r=Cn;return Cn=i,tm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Cn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,N_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,N_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ui(this,i),ui(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ui(r)),this._dur||(this._zTime=-Ot),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ot,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Ot)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Jt(i)?i:ix,l=function(){var u=r.then;r.then=null,s&&s(),Jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){pl(this)},n}();Di(ic.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ot,_prom:0,_ps:!1,_rts:1});var ii=function(n){Xv(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ui(i.sortChildren),Yt&&_r(i.parent||Yt,Hr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&ox(Hr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Il(0,arguments,this),this},t.from=function(r,s,o){return Il(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Il(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Dl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ln(r,s,Ui(this,o),1),this},t.call=function(r,s,o){return _r(this,ln.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ln(r,o,Ui(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Dl(o).immediateRender=ui(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,Dl(a).immediateRender=ui(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Xt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,_,g,p,m,x,b,y,A,C,w;if(this!==Yt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,b=this._ts,m=!b,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=Xt(u%p),u===l?(g=this._repeat,f=c):(A=Xt(u/p),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=Fa(this._tTime,p),!a&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),C&&g&1&&(f=c-f,w=1),g!==A&&!this._lock){var S=C&&A&1,M=S===(C&&g&1);if(g<A&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Xt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&wi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;yx(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=aT(this,Xt(a),Xt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!A&&(wi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=-Ot);break}}d=_}else{d=this._last;for(var B=r<0?r:f;d;){if(_=d._prev,(d._act||B<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(B-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(B-d._start)*d._ts,s,o||Cn&&tm(d)),f!==this._time||!this._ts&&!m){x=0,_&&(u+=this._zTime=B?-Ot:Ot);break}}d=_}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-Ot)._zTime=f>=a?1:-1,this._ts))return this._start=y,bf(this),this.render(r,s,o);this._onUpdate&&!s&&wi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(wi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(is(s)||(s=Ui(this,s,r)),!(r instanceof ic)){if(Hn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(En(r))return this.addLabel(r,s);if(Jt(r))r=ln.delayedCall(0,r);else return this}return this!==r?_r(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ln?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return En(r)?this.removeLabel(r):Jt(r)?this.killTweensOf(r):(r.parent===this&&Mf(this,r),r===this._recent&&(this._recent=this._last),bo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(Ei.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ui(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=ln.delayedCall(0,s||ec,o);return a.data="isPause",this._hasPause=1,_r(this,a,Ui(this,r))},t.removePause=function(r){var s=this._first;for(r=Ui(this,r);s;)s._start===r&&s.data==="isPause"&&zs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)As!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Wi(r),l=this._first,c=is(s),u;l;)l instanceof ln?eT(l._targets,a)&&(c?(!As||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ui(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=ln.to(o,Di({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ot,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Oa(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Di({startAt:{time:Ui(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),U_(this,Ui(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),U_(this,Ui(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ot)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Xt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return bo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),bo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Gi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,_r(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Xt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Oa(o,o===Yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Yt._ts&&(tx(Yt,Yu(r,Yt)),Qv=Ei.frame),Ei.frame>=D_){D_+=Ri.autoSleep||120;var s=Yt._first;if((!s||!s._ts)&&Ri.autoSleep&&Ei._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ei.sleep()}}},e}(ic);Di(ii.prototype,{_lock:0,_hasPause:0,_forcing:0});var bT=function(e,t,i,r,s,o,a){var l=new hi(this._pt,e,t,0,1,Rx,null,s),c=0,u=0,h,f,d,_,g,p,m,x;for(l.b=i,l.e=r,i+="",r+="",(m=~r.indexOf("random("))&&(r=tc(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),f=i.match(Yf)||[];h=Yf.exec(r);)_=h[0],g=r.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?ya(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Yf.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Kv.test(r)||m)&&(l.e=0),this._pt=l,l},nm=function(e,t,i,r,s,o,a,l,c,u){Jt(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:Jt(h)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Jt(h)?c?CT:wx:rm,_;if(En(r)&&(~r.indexOf("random(")&&(r=tc(r)),r.charAt(1)==="="&&(_=ya(f,r)+(Bn(f)||0),(_||_===0)&&(r=_))),!u||f!==r||pd)return!isNaN(f*r)&&r!==""?(_=new hi(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?PT:Cx,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Zp(t,r),bT.call(this,e,t,f,r,d,l||Ri.stringFilter,c))},ET=function(e,t,i,r,s){if(Jt(e)&&(e=Ll(e,s,t,i,r)),!Rr(e)||e.style&&e.nodeType||Hn(e)||qv(e))return En(e)?Ll(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ll(e[a],s,t,i,r);return o},Ex=function(e,t,i,r,s,o){var a,l,c,u;if(Mi[e]&&(a=new Mi[e]).init(s,a.rawVars?t[e]:ET(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new hi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==pa))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},As,pd,im=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:p,b=e._overwrite==="auto"&&!qp,y=e.timeline,A,C,w,S,M,B,N,L,H,K,Y,X,z;if(y&&(!f||!s)&&(s="none"),e._ease=Eo(s,Na.ease),e._yEase=h?Sx(Eo(h===!0?s:h,Na.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!r.runBackwards,!y||f&&!r.stagger){if(L=p[0]?Mo(p[0]).harness:0,X=L&&r[L.prop],A=Xu(r,Jp),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?xu:JE),g._lazy=0),o){if(zs(e._startAt=ln.set(p,Di({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&ui(l),startAt:null,delay:0,onUpdate:c&&function(){return wi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn||!a&&!d)&&e._startAt.revert(xu),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),w=Di({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ui(l),immediateRender:a,stagger:0,parent:m},A),X&&(w[L.prop]=X),zs(e._startAt=ln.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn?e._startAt.revert(xu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Ot,Ot);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ui(l)||l&&!_,C=0;C<p.length;C++){if(M=p[C],N=M._gsap||em(p)[C]._gsap,e._ptLookup[C]=K={},ld[N.id]&&Ns.length&&Wu(),Y=x===p?C:x.indexOf(M),L&&(H=new L).init(M,X||A,e,Y,x)!==!1&&(e._pt=S=new hi(e._pt,M,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(se){K[se]=S}),H.priority&&(B=1)),!L||X)for(w in A)Mi[w]&&(H=Ex(w,A,e,Y,M,x))?H.priority&&(B=1):K[w]=S=nm.call(e,M,w,"get",A[w],Y,x,0,r.stringFilter);e._op&&e._op[C]&&e.kill(M,e._op[C]),b&&e._pt&&(As=e,Yt.killTweensOf(M,K,e.globalTime(t)),z=!e.parent,As=0),e._pt&&l&&(ld[N.id]=1)}B&&Px(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,f&&t<=0&&y.render(Gi,!0,!0)},TT=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return pd=1,e.vars[t]="+=0",im(e,a),pd=0,l?Ql(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,h.e&&(h.e=nn(i)+Bn(h.e)),h.b&&(h.b=u.s+Bn(h.b))},AT=function(e,t){var i=e[0]?Mo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ua({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},wT=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Hn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ll=function(e,t,i,r,s){return Jt(e)?e.call(t,i,r,s):En(e)&&~e.indexOf("random(")?tc(e):e},Tx=Qp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ax={};fi(Tx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Ax[n]=1});var ln=function(n){Xv(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Dl(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,x=r.parent||Yt,b=(Hn(i)||qv(i)?is(i[0]):"length"in r)?[i]:Wi(i),y,A,C,w,S,M,B,N;if(a._targets=b.length?em(b):Ql("GSAP target "+i+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||bc(c)||bc(u)){if(r=a.vars,y=a.timeline=new ii({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:b}),y.kill(),y.parent=y._dp=Hr(a),y._start=0,f||bc(c)||bc(u)){if(w=b.length,B=f&&ux(f),Rr(f))for(S in f)~Tx.indexOf(S)&&(N||(N={}),N[S]=f[S]);for(A=0;A<w;A++)C=Xu(r,Ax),C.stagger=0,m&&(C.yoyoEase=m),N&&Ua(C,N),M=b[A],C.duration=+Ll(c,Hr(a),A,M,b),C.delay=(+Ll(u,Hr(a),A,M,b)||0)-a._delay,!f&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),y.to(M,C,B?B(A,M,b):0),y._ease=_t.none;y.duration()?c=u=0:a.timeline=0}else if(_){Dl(Di(y.vars.defaults,{ease:"none"})),y._ease=Eo(_.ease||r.ease||"none");var L=0,H,K,Y;if(Hn(_))_.forEach(function(X){return y.to(b,X,">")}),y.duration();else{C={};for(S in _)S==="ease"||S==="easeEach"||wT(S,_[S],C,_.easeEach);for(S in C)for(H=C[S].sort(function(X,z){return X.t-z.t}),L=0,A=0;A<H.length;A++)K=H[A],Y={ease:K.e,duration:(K.t-(A?H[A-1].t:0))/100*c},Y[S]=K.v,y.to(b,Y,L),L+=Y.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!qp&&(As=Hr(a),Yt.killTweensOf(b),As=0),_r(x,Hr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!_&&a._start===Xt(x._time)&&ui(h)&&rT(Hr(a))&&x.data!=="nested")&&(a._tTime=-Ot,a.render(Math.max(0,-u)||0)),p&&ox(Hr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Ot&&!u?l:r<Ot?0:r,f,d,_,g,p,m,x,b,y;if(!c)oT(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(f=Xt(h%g),h===l?(_=this._repeat,f=c):(p=Xt(h/g),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(y=this._yEase,f=c-f),p=Fa(this._tTime,g),f===a&&!o&&this._initted&&_===p)return this._tTime=h,this;_!==p&&(b&&this._yEase&&yx(b,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Xt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(ax(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(f/c),this._from&&(this.ratio=x=1-x),!a&&h&&!s&&!p&&(wi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;b&&b.render(r<0?r:b._dur*b._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&cd(this,r,s,o),wi(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&wi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&cd(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&zs(this,1),!s&&!(u&&!a)&&(h||a||m)&&(wi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){nc||Ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||im(this,c),u=this._ease(c/this._dur),TT(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Ef(this,0),this.parent||rx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,As&&As.vars.overwrite!==!0)._first||pl(this),this.parent&&o!==this.timeline.totalDuration()&&Oa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Wi(r):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,p,m;if((!s||s==="all")&&nT(a,l))return s==="all"&&(this._pt=0),pl(this);for(h=this._op=this._op||[],s!=="all"&&(En(s)&&(g={},fi(s,function(x){return g[x]=1}),s=g),s=AT(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,d={}):(d=h[m]=h[m]||{},_=s);for(g in _)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Mf(this,p,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&pl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Il(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Il(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Yt.killTweensOf(r,s,o)},e}(ic);Di(ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fi("staggerTo,staggerFrom,staggerFromTo",function(n){ln[n]=function(){var e=new ii,t=fd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var rm=function(e,t,i){return e[t]=i},wx=function(e,t,i){return e[t](i)},CT=function(e,t,i,r){return e[t](r.fp,i)},RT=function(e,t,i){return e.setAttribute(t,i)},sm=function(e,t){return Jt(e[t])?wx:$p(e[t])&&e.setAttribute?RT:rm},Cx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},PT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Rx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},om=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},DT=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},IT=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Mf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},LT=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Px=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},hi=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Cx,this.d=l||this,this.set=c||rm,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=LT,this.m=i,this.mt=s,this.tween=r},n}();fi(Qp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Jp[n]=1});Pi.TweenMax=Pi.TweenLite=ln;Pi.TimelineLite=Pi.TimelineMax=ii;Yt=new ii({sortChildren:!1,defaults:Na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=xx;var To=[],yu={},NT=[],O_=0,UT=0,Zf=function(e){return(yu[e]||NT).map(function(t){return t()})},md=function(){var e=Date.now(),t=[];e-O_>2&&(Zf("matchMediaInit"),To.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=hr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Zf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),O_=e,Zf("matchMedia"))},Dx=function(){function n(t,i){this.selector=i&&hd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=UT++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Jt(i)&&(s=r,r=i,i=Jt);var o=this,a=function(){var c=Wt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=hd(s)),Wt=o,h=r.apply(o,arguments),Jt(h)&&o._r.push(h),Wt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,i===Jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Wt;Wt=null,i(this),Wt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof ln&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof ii?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ln)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=To.length;o--;)To[o].id===this.id&&To.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),FT=function(){function n(t){this.contexts=[],this.scope=t,Wt&&Wt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Rr(i)||(i={matches:i});var o=new Dx(0,s||this.scope),a=o.conditions={},l,c,u;Wt&&!o.selector&&(o.selector=Wt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=hr.matchMedia(i[c]),l&&(To.indexOf(o)<0&&To.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(md):l.addEventListener("change",md)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),qu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return _x(r)})},timeline:function(e){return new ii(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,i,r){En(e)&&(e=Wi(e)[0]);var s=Mo(e||{}).get,o=i?ix:nx;return i==="native"&&(i=""),e&&(t?o((Mi[t]&&Mi[t].get||s)(e,t,i,r)):function(a,l,c){return o((Mi[a]&&Mi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Wi(e),e.length>1){var r=e.map(function(u){return mi.quickSetter(u,t,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=Mi[t],a=Mo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;pa._pt=0,h.init(e,i?u+i:u,pa,0,[e]),h.render(1,h),pa._pt&&om(1,pa)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=mi.to(e,Di((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Eo(e.ease,Na.ease)),I_(Na,e||{})},config:function(e){return I_(Ri,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Mi[a]&&!Pi[a]&&Ql(t+" effect requires "+a+" plugin.")}),qf[t]=function(a,l,c){return i(Wi(a),Di(l||{},s),c)},o&&(ii.prototype[t]=function(a,l,c){return this.add(qf[t](a,Rr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=Eo(t)},parseEase:function(e,t){return arguments.length?Eo(e,t):_t},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ii(e),r,s;for(i.smoothChildTiming=ui(e.smoothChildTiming),Yt.remove(i),i._dp=0,i._time=i._tTime=Yt._time,r=Yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof ln&&r.vars.onComplete===r._targets[0]))&&_r(i,r,r._start-r._delay),r=s;return _r(Yt,i,0),i},context:function(e,t){return e?new Dx(e,t):Wt},matchMedia:function(e){return new FT(e)},matchMediaRefresh:function(){return To.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||md()},addEventListener:function(e,t){var i=yu[e]||(yu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=yu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:pT,wrapYoyo:mT,distribute:ux,random:hx,snap:fx,normalize:dT,getUnit:Bn,clamp:cT,splitColor:gx,toArray:Wi,selector:hd,mapRange:px,pipe:fT,unitize:hT,interpolate:_T,shuffle:cx},install:Zv,effects:qf,ticker:Ei,updateRoot:ii.updateRoot,plugins:Mi,globalTimeline:Yt,core:{PropTween:hi,globals:Jv,Tween:ln,Timeline:ii,Animation:ic,getCache:Mo,_removeLinkedListItem:Mf,reverting:function(){return Cn},context:function(e){return e&&Wt&&(Wt.data.push(e),e._ctx=Wt),Wt},suppressOverwrites:function(e){return qp=e}}};fi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return qu[n]=ln[n]});Ei.add(ii.updateRoot);pa=qu.to({},{duration:0});var OT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},BT=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=OT(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Jf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(En(s)&&(l={},fi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}BT(a,s)}}}},mi=qu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Cn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Jf("roundProps",dd),Jf("modifiers"),Jf("snap",fx))||qu;ln.version=ii.version=mi.version="3.14.2";jv=1;Kp()&&Ba();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var B_,ws,Ma,am,_o,k_,lm,kT=function(){return typeof window<"u"},rs={},oo=180/Math.PI,ba=Math.PI/180,Ho=Math.atan2,z_=1e8,cm=/([A-Z])/g,zT=/(left|right|width|margin|padding|x)/i,VT=/[\s,\(]\S/,vr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_d=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},HT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},WT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},XT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ix=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Lx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},YT=function(e,t,i){return e.style[t]=i},qT=function(e,t,i){return e.style.setProperty(t,i)},$T=function(e,t,i){return e._gsap[t]=i},KT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},jT=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},ZT=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},$t="transform",di=$t+"Origin",JT=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in rs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=vr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Wr(r,a)}):this.tfm[e]=o.x?o[e]:Wr(r,e),e===di&&(this.tfm.zOrigin=o.zOrigin);else return vr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf($t)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(di,t,"")),e=$t}(s||t)&&this.props.push(e,t,s[e])},Nx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},QT=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=lm(),(!s||!s.isStart)&&!i[$t]&&(Nx(i),r.zOrigin&&i[di]&&(i[di]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ux=function(e,t){var i={target:e,props:[],revert:QT,save:JT};return e._gsap||mi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Fx,gd=function(e,t){var i=ws.createElementNS?ws.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ws.createElement(e);return i&&i.style?i:ws.createElement(e)},Ci=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(cm,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ka(t)||t,1)||""},V_="O,Moz,ms,Ms,Webkit".split(","),ka=function(e,t,i){var r=t||_o,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(V_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?V_[o]:"")+e},vd=function(){kT()&&window.document&&(B_=window,ws=B_.document,Ma=ws.documentElement,_o=gd("div")||{style:{}},gd("div"),$t=ka($t),di=$t+"Origin",_o.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Fx=!!ka("perspective"),lm=mi.core.reverting,am=1)},H_=function(e){var t=e.ownerSVGElement,i=gd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ma.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ma.removeChild(i),s},G_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Ox=function(e){var t,i;try{t=e.getBBox()}catch{t=H_(e),i=1}return t&&(t.width||t.height)||i||(t=H_(e)),t&&!t.width&&!t.x&&!t.y?{x:+G_(e,["x","cx","x1"])||0,y:+G_(e,["y","cy","y1"])||0,width:0,height:0}:t},Bx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ox(e))},Vs=function(e,t){if(t){var i=e.style,r;t in rs&&t!==di&&(t=$t),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(cm,"-$1").toLowerCase())):i.removeAttribute(t)}},Cs=function(e,t,i,r,s,o){var a=new hi(e._pt,t,i,0,1,o?Lx:Ix);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},W_={deg:1,rad:1,turn:1},e1={grid:1,flex:1},Hs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=_o.style,l=zT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",_,g,p,m;if(r===o||!s||W_[r]||W_[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),m=e.getCTM&&Bx(e),(d||o==="%")&&(rs[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],nn(d?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ws||!g.appendChild)&&(g=ws.body),p=g._gsap,p&&d&&p.width&&l&&p.time===Ei.time&&!p.uncache)return nn(s/p.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+r,_=e[u],x?e.style[t]=x:Vs(e,t)}else(d||o==="%")&&!e1[Ci(g,"display")]&&(a.position=Ci(e,"position")),g===e&&(a.position="static"),g.appendChild(_o),_=_o[u],g.removeChild(_o),a.position="absolute";return l&&d&&(p=Mo(g),p.time=Ei.time,p.width=g[u]),nn(f?_*s/h:_&&s?h/_*s:0)},Wr=function(e,t,i,r){var s;return am||vd(),t in vr&&t!=="transform"&&(t=vr[t],~t.indexOf(",")&&(t=t.split(",")[0])),rs[t]&&t!=="transform"?(s=sc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ku(Ci(e,di))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=$u[t]&&$u[t](e,t,i)||Ci(e,t)||ex(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Hs(e,t,s,i)+i:s},t1=function(e,t,i,r){if(!i||i==="none"){var s=ka(t,e,1),o=s&&Ci(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ci(e,"borderTopColor"))}var a=new hi(this._pt,e.style,t,0,1,Rx),l=0,c=0,u,h,f,d,_,g,p,m,x,b,y,A;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ci(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Ci(e,t)||r,g?e.style[t]=g:Vs(e,t)),u=[i,r],xx(u),i=u[0],r=u[1],f=i.match(da)||[],A=r.match(da)||[],A.length){for(;h=da.exec(r);)p=h[0],x=r.substring(l,h.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),p!==(g=f[c++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),p.charAt(1)==="="&&(p=ya(d,p)+y),m=parseFloat(p),b=p.substr((m+"").length),l=da.lastIndex-b.length,b||(b=b||Ri.units[t]||y,l===r.length&&(r+=b,a.e+=b)),y!==b&&(d=Hs(e,t,g,b)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Lx:Ix;return Kv.test(r)&&(a.e=0),this._pt=a,a},X_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},n1=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=X_[i]||i,t[1]=X_[r]||r,t.join(" ")},i1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],rs[a]&&(l=1,a=a==="transformOrigin"?di:$t),Vs(i,a);l&&(Vs(i,$t),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",sc(i,1),o.uncache=1,Nx(r)))}},$u={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new hi(e._pt,t,i,0,0,i1);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},rc=[1,0,0,1,0,0],kx={},zx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Y_=function(e){var t=Ci(e,$t);return zx(t)?rc:t.substr(7).match($v).map(nn)},um=function(e,t){var i=e._gsap||Mo(e),r=e.style,s=Y_(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?rc:s):(s===rc&&!e.offsetParent&&e!==Ma&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ma.appendChild(e)),s=Y_(e),l?r.display=l:Vs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ma.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xd=function(e,t,i,r,s,o){var a=e._gsap,l=s||um(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],x=l[5],b=t.split(" "),y=parseFloat(b[0])||0,A=parseFloat(b[1])||0,C,w,S,M;i?l!==rc&&(w=d*p-_*g)&&(S=y*(p/w)+A*(-g/w)+(g*x-p*m)/w,M=y*(-_/w)+A*(d/w)-(d*x-_*m)/w,y=S,A=M):(C=Ox(e),y=C.x+(~b[0].indexOf("%")?y/100*C.width:y),A=C.y+(~(b[1]||b[0]).indexOf("%")?A/100*C.height:A)),r||r!==!1&&a.smooth?(m=y-c,x=A-u,a.xOffset=h+(m*d+x*g)-m,a.yOffset=f+(m*_+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[di]="0px 0px",o&&(Cs(o,a,"xOrigin",c,y),Cs(o,a,"yOrigin",u,A),Cs(o,a,"xOffset",h,a.xOffset),Cs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},sc=function(e,t){var i=e._gsap||new bx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ci(e,di)||"0",u,h,f,d,_,g,p,m,x,b,y,A,C,w,S,M,B,N,L,H,K,Y,X,z,se,ue,O,ve,xe,ze,Ge,Xe;return u=h=f=g=p=m=x=b=y=0,d=_=1,i.svg=!!(e.getCTM&&Bx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[$t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[$t]!=="none"?l[$t]:"")),r.scale=r.rotate=r.translate="none"),w=um(e,i.svg),i.svg&&(i.uncache?(se=e.getBBox(),c=i.xOrigin-se.x+"px "+(i.yOrigin-se.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),xd(e,z||c,!!z||i.originIsAbsolute,i.smooth!==!1,w)),A=i.xOrigin||0,C=i.yOrigin||0,w!==rc&&(N=w[0],L=w[1],H=w[2],K=w[3],u=Y=w[4],h=X=w[5],w.length===6?(d=Math.sqrt(N*N+L*L),_=Math.sqrt(K*K+H*H),g=N||L?Ho(L,N)*oo:0,x=H||K?Ho(H,K)*oo+g:0,x&&(_*=Math.abs(Math.cos(x*ba))),i.svg&&(u-=A-(A*N+C*H),h-=C-(A*L+C*K))):(Xe=w[6],ze=w[7],O=w[8],ve=w[9],xe=w[10],Ge=w[11],u=w[12],h=w[13],f=w[14],S=Ho(Xe,xe),p=S*oo,S&&(M=Math.cos(-S),B=Math.sin(-S),z=Y*M+O*B,se=X*M+ve*B,ue=Xe*M+xe*B,O=Y*-B+O*M,ve=X*-B+ve*M,xe=Xe*-B+xe*M,Ge=ze*-B+Ge*M,Y=z,X=se,Xe=ue),S=Ho(-H,xe),m=S*oo,S&&(M=Math.cos(-S),B=Math.sin(-S),z=N*M-O*B,se=L*M-ve*B,ue=H*M-xe*B,Ge=K*B+Ge*M,N=z,L=se,H=ue),S=Ho(L,N),g=S*oo,S&&(M=Math.cos(S),B=Math.sin(S),z=N*M+L*B,se=Y*M+X*B,L=L*M-N*B,X=X*M-Y*B,N=z,Y=se),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=nn(Math.sqrt(N*N+L*L+H*H)),_=nn(Math.sqrt(X*X+Xe*Xe)),S=Ho(Y,X),x=Math.abs(S)>2e-4?S*oo:0,y=Ge?1/(Ge<0?-Ge:Ge):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!zx(Ci(e,$t)),z&&e.setAttribute("transform",z))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=nn(d),i.scaleY=nn(_),i.rotation=nn(g)+a,i.rotationX=nn(p)+a,i.rotationY=nn(m)+a,i.skewX=x+a,i.skewY=b+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[di]=Ku(c)),i.xOffset=i.yOffset=0,i.force3D=Ri.force3D,i.renderTransform=i.svg?s1:Fx?Vx:r1,i.uncache=0,i},Ku=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qf=function(e,t,i){var r=Bn(t);return nn(parseFloat(t)+parseFloat(Hs(e,"x",i+"px",r)))+r},r1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Vx(e,t)},Zs="0deg",el="0px",Js=") ",Vx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,_=i.scaleX,g=i.scaleY,p=i.transformPerspective,m=i.force3D,x=i.target,b=i.zOrigin,y="",A=m==="auto"&&e&&e!==1||m===!0;if(b&&(h!==Zs||u!==Zs)){var C=parseFloat(u)*ba,w=Math.sin(C),S=Math.cos(C),M;C=parseFloat(h)*ba,M=Math.cos(C),o=Qf(x,o,w*M*-b),a=Qf(x,a,-Math.sin(C)*-b),l=Qf(x,l,S*M*-b+b)}p!==el&&(y+="perspective("+p+Js),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(A||o!==el||a!==el||l!==el)&&(y+=l!==el||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Js),c!==Zs&&(y+="rotate("+c+Js),u!==Zs&&(y+="rotateY("+u+Js),h!==Zs&&(y+="rotateX("+h+Js),(f!==Zs||d!==Zs)&&(y+="skew("+f+", "+d+Js),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Js),x.style[$t]=y||"translate(0, 0)"},s1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,_=i.xOrigin,g=i.yOrigin,p=i.xOffset,m=i.yOffset,x=i.forceCSS,b=parseFloat(o),y=parseFloat(a),A,C,w,S,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ba,c*=ba,A=Math.cos(l)*h,C=Math.sin(l)*h,w=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(u*=ba,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,S*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,C*=M)),A=nn(A),C=nn(C),w=nn(w),S=nn(S)):(A=h,S=f,C=w=0),(b&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(b=Hs(d,"x",o,"px"),y=Hs(d,"y",a,"px")),(_||g||p||m)&&(b=nn(b+_-(_*A+g*w)+p),y=nn(y+g-(_*C+g*S)+m)),(r||s)&&(M=d.getBBox(),b=nn(b+r/100*M.width),y=nn(y+s/100*M.height)),M="matrix("+A+","+C+","+w+","+S+","+b+","+y+")",d.setAttribute("transform",M),x&&(d.style[$t]=M)},o1=function(e,t,i,r,s){var o=360,a=En(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?oo:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*z_)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*z_)%o-~~(c/o)*o)),e._pt=f=new hi(e._pt,t,i,r,c,HT),f.e=u,f.u="deg",e._props.push(i),f},q_=function(e,t){for(var i in t)e[i]=t[i];return e},a1=function(e,t,i){var r=q_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,h,f,d,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[$t]=t,a=sc(i,1),Vs(i,$t),i.setAttribute("transform",c)):(c=getComputedStyle(i)[$t],o[$t]=t,a=sc(i,1),o[$t]=c);for(l in rs)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Bn(c),_=Bn(u),h=d!==_?Hs(i,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new hi(e._pt,a,l,h,f-h,_d),e._pt.u=_||0,e._props.push(l));q_(a,r)};fi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});$u[e>1?"border"+n:n]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return Wr(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var Hx={name:"css",register:vd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,h,f,d,_,g,p,m,x,b,y,A,C,w,S,M;am||vd(),this.styles=this.styles||Ux(e),S=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Mi[g]&&Ex(g,t,i,r,e,s)))){if(d=typeof u,_=$u[g],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=tc(u)),_)_(this,e,g,u,i)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Us.lastIndex=0,Us.test(c)||(p=Bn(c),m=Bn(u),m?p!==m&&(c=Hs(e,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),S.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],En(c)&&~c.indexOf("random(")&&(c=tc(c)),Bn(c+"")||c==="auto"||(c+=Ri.units[g]||Bn(Wr(e,g))||""),(c+"").charAt(1)==="="&&(c=Wr(e,g))):c=Wr(e,g),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),g in vr&&(g==="autoAlpha"&&(f===1&&Wr(e,"visibility")==="hidden"&&h&&(f=0),S.push("visibility",0,a.visibility),Cs(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=vr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in rs,b){if(this.styles.save(g),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ci(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var B=e.style.perspective;e.style.perspective=u,u=Ci(e,"perspective"),B?e.style.perspective=B:Vs(e,"perspective")}h=parseFloat(u)}if(y||(A=e._gsap,A.renderTransform&&!t.parseTransform||sc(e,t.parseTransform),C=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new hi(this._pt,a,$t,0,1,A.renderTransform,A,0,-1),y.dep=1),g==="scale")this._pt=new hi(this._pt,A,"scaleY",A.scaleY,(x?ya(A.scaleY,x+h):h)-A.scaleY||0,_d),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){S.push(di,0,a[di]),u=n1(u),A.svg?xd(e,u,0,C,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Cs(this,A,"zOrigin",A.zOrigin,m),Cs(this,a,g,Ku(c),Ku(u)));continue}else if(g==="svgOrigin"){xd(e,u,1,C,0,this);continue}else if(g in kx){o1(this,A,g,f,x?ya(f,x+u):u);continue}else if(g==="smoothOrigin"){Cs(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){a1(this,u,e);continue}}else g in a||(g=ka(g)||g);if(b||(h||h===0)&&(f||f===0)&&!VT.test(u)&&g in a)p=(c+"").substr((f+"").length),h||(h=0),m=Bn(u)||(g in Ri.units?Ri.units[g]:p),p!==m&&(f=Hs(e,g,c,m)),this._pt=new hi(this._pt,b?A:a,g,f,(x?ya(f,x+h):h)-f,!b&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?XT:_d),this._pt.u=m||0,b&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=WT):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=GT);else if(g in a)t1.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,r,s);else if(g!=="parseTransform"){Zp(g,u);continue}b||(g in a?S.push(g,0,a[g]):typeof e[g]=="function"?S.push(g,2,e[g]()):S.push(g,1,c||e[g])),o.push(g)}}w&&Px(this)},render:function(e,t){if(t.tween._time||!lm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Wr,aliases:vr,getSetter:function(e,t,i){var r=vr[t];return r&&r.indexOf(",")<0&&(t=r),t in rs&&t!==di&&(e._gsap.x||Wr(e,"x"))?i&&k_===i?t==="scale"?KT:$T:(k_=i||{})&&(t==="scale"?jT:ZT):e.style&&!$p(e.style[t])?YT:~t.indexOf("-")?qT:sm(e,t)},core:{_removeProperty:Vs,_getMatrix:um}};mi.utils.checkPrefix=ka;mi.core.getStyleSaver=Ux;(function(n,e,t,i){var r=fi(n+","+e+","+t,function(s){rs[s]=1});fi(e,function(s){Ri.units[s]="deg",kx[s]=1}),vr[r[13]]=n+","+e,fi(i,function(s){var o=s.split(":");vr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ri.units[n]="px"});mi.registerPlugin(Hx);var Lt=mi.registerPlugin(Hx)||mi;Lt.core.Tween;/*!
 * ScrollToPlugin 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var kn,Gx,jr,xr,Fs,Wx,Ea,Ec,Xx=function(){return typeof window<"u"},Yx=function(){return kn||Xx()&&(kn=window.gsap)&&kn.registerPlugin&&kn},qx=function(e){return typeof e=="string"},$_=function(e){return typeof e=="function"},oc=function(e,t){var i=t==="x"?"Width":"Height",r="scroll"+i,s="client"+i;return e===jr||e===xr||e===Fs?Math.max(xr[r],Fs[r])-(jr["inner"+i]||xr[s]||Fs[s]):e[r]-e["offset"+i]},ac=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===jr&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=xr[i]!=null?xr:Fs),function(){return e[i]}},l1=function(e,t,i,r){if($_(e)&&(e=e(t,i,r)),typeof e!="object")return qx(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&$_(e[o])?e[o](t,i,r):e[o];return s},$x=function(e,t){if(e=Wx(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var i=e.getBoundingClientRect(),r=!t||t===jr||t===Fs,s=r?{top:xr.clientTop-(jr.pageYOffset||xr.scrollTop||Fs.scrollTop||0),left:xr.clientLeft-(jr.pageXOffset||xr.scrollLeft||Fs.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!r&&t&&(o.x+=ac(t,"x")(),o.y+=ac(t,"y")()),o},K_=function(e,t,i,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:qx(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?oc(t,i)-s:Math.min(oc(t,i),$x(e,t)[i]-s)},Sd=function(){kn=Yx(),Xx()&&kn&&typeof document<"u"&&document.body&&(jr=window,Fs=document.body,xr=document.documentElement,Wx=kn.utils.toArray,kn.config({autoKillThreshold:7}),Ea=kn.config(),Gx=1)},Ya={version:"3.14.2",name:"scrollTo",rawVars:1,register:function(e){kn=e,Sd()},init:function(e,t,i,r,s){Gx||Sd();var o=this,a=kn.getProperty(e,"scrollSnapType");o.isWin=e===jr,o.target=e,o.tween=i,t=l1(t,r,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:Ea).autoKill,o.getX=ac(e,"x"),o.getY=ac(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Ec||(Ec=kn.core.globals().ScrollTrigger),kn.getProperty(e,"scrollBehavior")==="smooth"&&kn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,K_(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,K_(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,h=t.snapInline,f,d,_,g,p;i;)i.r(e,i.d),i=i._next;f=c||!t.skipX?t.getX():a,d=c||!t.skipY?t.getY():l,_=d-l,g=f-a,p=Ea.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(g>p||g<-p)&&f<oc(r,"x")&&(t.skipX=1),!t.skipY&&(_>p||_<-p)&&d<oc(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?jr.scrollTo(t.skipX?f:t.x,t.skipY?d:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),u&&(e===1||e===0)&&(d=r.scrollTop,f=r.scrollLeft,h?r.style.scrollSnapType=h:r.style.removeProperty("scroll-snap-type"),r.scrollTop=d+1,r.scrollLeft=f+1,r.scrollTop=d,r.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,Ec&&Ec.update()},kill:function(e){var t=e==="scrollTo",i=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};Ya.max=oc;Ya.getOffset=$x;Ya.buildGetter=ac;Ya.config=function(n){Ea||Sd()||(Ea=kn.config());for(var e in n)Ea[e]=n[e]};Yx()&&kn.registerPlugin(Ya);function j_(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"})])}function c1(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"})])}function u1(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function f1(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"})])}function h1(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})])}function d1(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"})])}function p1(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[ae("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})])}const m1={class:"nav-shell nav-shell--plain"},_1=["href","onClick"],g1={__name:"SiteHeader",props:{isMenuActive:{type:Boolean,required:!0},activeSection:{type:String,default:"home"},navItems:{type:Array,required:!0}},emits:["toggle-menu","close-menu","navigate"],setup(n,{emit:e}){const t=n,i=e,r=va(!1),s=()=>{r.value=window.scrollY>20},o=a=>{i("navigate",a),t.isMenuActive&&i("close-menu")};return No(()=>{s(),window.addEventListener("scroll",s,{passive:!0})}),Uo(()=>{window.removeEventListener("scroll",s)}),(a,l)=>(je(),tt("nav",{class:Ls({"nav-scrolled":r.value})},[ae("div",m1,[ae("a",{href:"#home",class:"logo",onClick:l[0]||(l[0]=td(c=>o("home"),["prevent"]))},"AYOMIDE AGBAJE"),ae("button",{type:"button",class:"menu-toggle",onClick:l[1]||(l[1]=c=>a.$emit("toggle-menu")),"aria-label":"Toggle menu"},[$e(dt(u1),{class:"menu-toggle-icon"})]),ae("ul",{class:Ls(["nav-menu",{active:n.isMenuActive}])},[(je(!0),tt(qt,null,Hi(n.navItems,c=>(je(),tt("li",{key:c.id},[ae("a",{href:`#${c.id}`,class:Ls({active:n.activeSection===c.id}),onClick:td(u=>o(c.id),["prevent"])},wt(c.label),11,_1)]))),128))],2)])],2))}},v1={class:"section-pager","aria-label":"Section Navigation"},x1=["aria-label","onClick"],S1={class:"pager-index"},y1={class:"pager-label"},M1={__name:"SectionPager",props:{items:{type:Array,required:!0},activeSection:{type:String,default:"home"}},emits:["navigate"],setup(n){return(e,t)=>(je(),tt("aside",v1,[(je(!0),tt(qt,null,Hi(n.items,i=>(je(),tt("button",{key:i.id,type:"button",class:Ls(["pager-dot",{active:n.activeSection===i.id}]),"aria-label":`Go to ${i.label}`,onClick:r=>e.$emit("navigate",i.id)},[ae("span",S1,wt(i.number),1),ae("span",y1,wt(i.label),1)],10,x1))),128))]))}},b1={id:"home",class:"hero route-section"},E1={class:"hero-content"},T1={__name:"HeroSection",emits:["navigate"],setup(n){return(e,t)=>(je(),tt("section",b1,[t[3]||(t[3]=ae("div",{class:"hero-bg"},[ae("canvas",{id:"heroMathCanvas"})],-1)),ae("div",E1,[t[1]||(t[1]=ae("div",{class:"hero-label"},"Full-Stack Engineer (Backend-First)",-1)),t[2]||(t[2]=ae("p",{class:"hero-subtitle"}," Laravel, Vue, Flutter. Backend architecture, Security, and Industrial level performance. ",-1)),ae("a",{href:"#work",class:"cta-button",onClick:t[0]||(t[0]=td(i=>e.$emit("navigate","work"),["prevent"]))}," View Case Studies ")]),t[4]||(t[4]=ae("div",{class:"scroll-indicator"},"Scroll",-1))]))}},Kx=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},A1={},w1={id:"about",class:"route-section"};function C1(n,e){return je(),tt("section",w1,[...e[0]||(e[0]=[Av('<div class="section-number">01 / About</div><h2 class="section-title"><span>WHO I AM</span></h2><div class="about-grid"><div class="about-text"><p> I am a full-stack software engineer with 7+ years of experience building web and mobile applications. My core strength lies in backend architecture designing APIs and systems that are secure, scalable, and maintainable. </p><p> I work primarily with Laravel, Vue, Flutter, and MySQL, with experience in authentication systems, performance optimization, and database modeling. I focus on writing clean, testable code and structuring systems that can evolve without becoming fragile. </p><p> Beyond implementation, I think in terms of product architecture: how features interact, how systems scale, and how engineering decisions affect long-term velocity. </p></div><div class="about-stats"><div class="stat-item"><div class="stat-number">+7</div><div class="stat-label">Years XP</div></div><div class="stat-item"><div class="stat-number">80%</div><div class="stat-label">Uptime SLA</div></div><div class="stat-item"><div class="stat-number">100K+</div><div class="stat-label">Active Users Managed</div></div><div class="stat-item"><div class="stat-number">50+</div><div class="stat-label">Jobs Completed</div></div></div></div>',3)])])}const R1=Kx(A1,[["render",C1]]),jx=[{number:"01",slug:"gamified-short-form-video-backend",title:"Gamified Short-Form Video Backend",stage:"Production System",visualType:"Reward Infrastructure",summary:"Engineered a high-throughput, API-first backend for a reward-driven short-video platform with dual-wallet accounting, earning caps, referrals, and secure withdrawals.",summarySecondary:"Built to survive scale with concurrency-safe transactions, anti-abuse guardrails, and feed architecture tuned for heavy real-time demand.",tags:["Laravel","MySQL","Redis","Sanctum"],metrics:[{value:"2x",label:"Wallet Layers"},{value:"100%",label:"Transactional Safety"},{value:"<200ms",label:"Core API Paths"}],challenge:"The platform needed to reward engagement in real time while preventing fraud vectors and race conditions around payouts.",solution:"Implemented transaction-safe wallet services, anti-abuse guardrails, and queue-backed processing for referral and withdrawal flows.",impact:["Stable payout logic under concurrent user activity","Reduced exploitation risk through layered validation","Predictable API response behavior under traffic bursts"],architecture:["Modular services for wallet, rewards, referrals, and withdrawals","Redis-backed throttling and abuse detection checks","Idempotent payout handlers with database transactions"]},{number:"02",slug:"food-delivery-platform-api",title:"Food Delivery Platform API",stage:"Multi-Role Platform",visualType:"Order Lifecycle Engine",summary:"Built the operational core of a full food-delivery ecosystem covering vendor onboarding, menu orchestration, order lifecycle, and strict role-based access.",summarySecondary:"Architected with modular APIs and a resilient relational model so new product features could ship faster without compromising reliability.",tags:["Laravel","Vue","MySQL","REST API"],metrics:[{value:"6+",label:"Core Roles"},{value:"3x",label:"Faster Feature Additions"},{value:"99.9%",label:"Order Integrity"}],challenge:"Different user types required strict boundaries and clean domain workflows without slowing down future feature expansion.",solution:"Introduced role-aware API modules, normalized data models, and clear order-state transitions with validation checkpoints.",impact:["Faster shipping of vendor and customer features","Cleaner maintainability through separated modules","Reliable end-to-end order status tracking"],architecture:["Role-scoped API endpoints for admin, vendor, rider, and customer","Order pipeline states with explicit transition guards","Relational schema tuned for reporting and dashboard performance"]},{number:"03",slug:"authentication-and-security-systems",title:"Authentication & Security Systems",stage:"Security Layer",visualType:"Identity and Access Control",summary:"Architected a hardened identity layer with OTP flows, 2FA enforcement, device trust verification, and withdrawal protection for high-risk actions.",summarySecondary:"Stacked with rate controls, token hardening, and data-integrity safeguards to reduce abuse while keeping login friction low.",tags:["Laravel","Redis","JWT / Tokens","FCM"],metrics:[{value:"4+",label:"Auth Factors"},{value:"70%",label:"Abuse Drop"},{value:"24/7",label:"Threat Guardrails"}],challenge:"Authentication needed to stay friction-aware for users while preserving strong protection on high-risk operations.",solution:"Built layered auth workflows combining OTP, second-factor checks, device trust, and endpoint-level rate controls.",impact:["Improved account safety with minimal UX friction","Lower brute-force and token abuse incidents","Safer withdrawal and sensitive-operation endpoints"],architecture:["Token lifecycle controls with forced rotation paths","Adaptive OTP and device verification logic","Redis-based throttling plus action-level audit trails"]}];function P1(n){return jx.find(e=>e.slug===n)}const D1={id:"work",class:"route-section"},I1={class:"projects-container projects-compact"},L1={class:"project-visual","aria-hidden":"true"},N1={class:"project-visual-head"},U1={class:"project-visual-type"},F1={class:"project-visual-stage"},O1={class:"project-visual-metrics"},B1={class:"project-metric-value"},k1={class:"project-metric-label"},z1={class:"project-info"},V1={class:"project-number"},H1={class:"project-title"},G1={class:"project-description"},W1={class:"project-description"},X1={class:"project-tags"},Y1={__name:"WorkSection",setup(n){return(e,t)=>(je(),tt("section",D1,[t[1]||(t[1]=ae("div",{class:"section-number"},"02 / Work",-1)),t[2]||(t[2]=ae("h2",{class:"section-title"},[ae("span",null,"SELECTED PROJECTS")],-1)),ae("div",I1,[(je(!0),tt(qt,null,Hi(dt(jx),i=>(je(),tt("article",{key:i.slug,class:"project-item"},[ae("div",L1,[ae("div",N1,[ae("div",U1,wt(i.visualType),1),ae("div",F1,wt(i.stage),1)]),ae("div",O1,[(je(!0),tt(qt,null,Hi(i.metrics,r=>(je(),tt("div",{class:"project-metric",key:r.label},[ae("div",B1,wt(r.value),1),ae("div",k1,wt(r.label),1)]))),128))])]),ae("div",z1,[ae("div",V1,wt(i.number),1),ae("h3",H1,wt(i.title),1),ae("p",G1,wt(i.summary),1),ae("p",W1,wt(i.summarySecondary),1),ae("div",X1,[(je(!0),tt(qt,null,Hi(i.tags,r=>(je(),tt("span",{key:r,class:"tag"},wt(r),1))),128))]),$e(dt(Hu),{class:"project-link",to:{name:"case-study",params:{slug:i.slug}}},{default:Da(()=>[t[0]||(t[0]=ae("span",null,"View Case Study",-1)),$e(dt(c1),{class:"project-link-icon"})]),_:1},8,["to"])])]))),128))])]))}},q1={},$1={id:"stack",class:"route-section"};function K1(n,e){return je(),tt("section",$1,[...e[0]||(e[0]=[Av('<div class="section-number">03 / Stack</div><h2 class="section-title"><span>TECH EXPERTISE</span></h2><div class="tech-grid"><div class="tech-card"><div class="tech-icon">BE</div><h3 class="tech-title">Backend Engineering</h3><ul class="tech-list"><li>Laravel (API-first architecture)</li><li>PHP 8+</li><li>Authentication &amp; 2FA Systems</li><li>RESTful API Design</li><li>Concurrency &amp; Data Integrity</li></ul></div><div class="tech-card"><div class="tech-icon">DB</div><h3 class="tech-title">Database &amp; Caching</h3><ul class="tech-list"><li>MySQL (Schema Design &amp; Indexing)</li><li>Query Optimization</li><li>Redis (Caching &amp; Rate Limiting)</li><li>Transactions &amp; Locking</li><li>Relational Modeling</li></ul></div><div class="tech-card"><div class="tech-icon">FE</div><h3 class="tech-title">Frontend &amp; Mobile</h3><ul class="tech-list"><li>Vue.js</li><li>Flutter</li><li>JavaScript</li><li>State Management</li><li>Responsive UI Systems</li></ul></div><div class="tech-card"><div class="tech-icon">INF</div><h3 class="tech-title">Infrastructure</h3><ul class="tech-list"><li>DigitalOcean / Cloudways</li><li>AWS S3</li><li>NGINX / Apache</li><li>Server Provisioning</li><li>Performance Monitoring</li></ul></div></div>',3)])])}const j1=Kx(q1,[["render",K1]]);function jn(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[ae("path",{"fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z","clip-rule":"evenodd"})])}const Z1={id:"experience",class:"route-section"},J1={class:"experience-timeline"},Q1={class:"timeline-item"},eA={class:"timeline-content"},tA={class:"timeline-achievements"},nA={class:"timeline-item"},iA={class:"timeline-content"},rA={class:"timeline-achievements"},sA={class:"timeline-item"},oA={class:"timeline-content"},aA={class:"timeline-achievements"},lA={__name:"ExperienceSection",setup(n){return(e,t)=>(je(),tt("section",Z1,[t[24]||(t[24]=ae("div",{class:"section-number"},"04 / Experience",-1)),t[25]||(t[25]=ae("h2",{class:"section-title"},[ae("span",null,"TRACK RECORD")],-1)),ae("div",J1,[ae("div",Q1,[t[7]||(t[7]=ae("div",{class:"timeline-date"},"2021 — Present",-1)),ae("div",eA,[t[4]||(t[4]=ae("h3",{class:"timeline-role"},"Full-Stack Engineer",-1)),t[5]||(t[5]=ae("div",{class:"timeline-company"},"Independent / Product-Focused Work",-1)),t[6]||(t[6]=ae("p",{class:"timeline-description"}," Designing and building backend-heavy web and mobile systems from architecture to deployment. ",-1)),ae("ul",tA,[ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[0]||(t[0]=ae("span",null,"Architected API-first Laravel systems with modular routing",-1))]),ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[1]||(t[1]=ae("span",null,"Designed dual-wallet and reward logic with abuse safeguards",-1))]),ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[2]||(t[2]=ae("span",null,"Implemented OTP login, 2FA, and withdrawal protection flows",-1))]),ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[3]||(t[3]=ae("span",null,"Optimized database queries and enforced transactional integrity",-1))])])])]),ae("div",nA,[t[15]||(t[15]=ae("div",{class:"timeline-date"},"2019 — 2021",-1)),ae("div",iA,[t[12]||(t[12]=ae("h3",{class:"timeline-role"},"Full-Stack Developer",-1)),t[13]||(t[13]=ae("div",{class:"timeline-company"},"Client & Startup Projects",-1)),t[14]||(t[14]=ae("p",{class:"timeline-description"}," Built and maintained production web and mobile applications across multiple domains. ",-1)),ae("ul",rA,[ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[8]||(t[8]=ae("span",null,"Developed RESTful APIs consumed by Vue and Flutter apps",-1))]),ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[9]||(t[9]=ae("span",null,"Structured relational databases for performance and maintainability",-1))]),ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[10]||(t[10]=ae("span",null,"Integrated payment systems and role-based access controls",-1))]),ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[11]||(t[11]=ae("span",null,"Managed server deployments on DigitalOcean and Cloudways",-1))])])])]),ae("div",sA,[t[23]||(t[23]=ae("div",{class:"timeline-date"},"2017 — 2019",-1)),ae("div",oA,[t[20]||(t[20]=ae("h3",{class:"timeline-role"},"Software Developer",-1)),t[21]||(t[21]=ae("div",{class:"timeline-company"},"Early Career",-1)),t[22]||(t[22]=ae("p",{class:"timeline-description"}," Focused on core PHP development, frontend integration, and foundational backend systems. ",-1)),ae("ul",aA,[ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[16]||(t[16]=ae("span",null,"Built CRUD systems and admin dashboards",-1))]),ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[17]||(t[17]=ae("span",null,"Gained experience in database normalization and indexing",-1))]),ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[18]||(t[18]=ae("span",null,"Developed reusable components in Vue",-1))]),ae("li",null,[$e(dt(jn),{class:"list-item-icon"}),t[19]||(t[19]=ae("span",null,"Established clean coding and testing habits",-1))])])])])])]))}},cA={id:"foundations",class:"route-section"},uA={class:"foundation-timeline"},fA=["data-index","onMouseenter","onFocusin"],hA={class:"foundation-marker"},dA={class:"foundation-phase"},pA={class:"foundation-content"},mA={class:"foundation-title"},_A={class:"foundation-subtitle"},gA={key:0,class:"foundation-list"},vA={__name:"EducationSection",setup(n){const e=[{phase:"Academic Foundation",title:"B.Sc. Building (Management)",subtitle:"Obafemi Awolowo University",paragraphs:["Built a strong systems mindset around planning, sequencing, and lifecycle execution.","That discipline now shapes how I design backend architecture and delivery workflows."],points:[]},{phase:"Engineering Principles",title:"Architecture-Driven Development",subtitle:"How I structure software decisions",paragraphs:["I optimize for long-term maintainability, predictable behavior, and safe scalability."],points:["API-first system design","Data integrity over shortcuts","Security by default (auth, rate limits, validation)","Performance-aware queries and indexing","Modular architecture for long-term maintainability"]},{phase:"Execution Style",title:"From Scope to Production",subtitle:"Product-aware engineering delivery",paragraphs:["I translate product requirements into clear technical boundaries, implementation phases, and measurable outcomes.","The focus is to ship reliable systems quickly without creating hidden technical debt."],points:[]}],t=va(0);let i=null;const r=s=>{t.value=s};return No(()=>{const s=document.querySelectorAll("#foundations .foundation-timeline-item");i=new IntersectionObserver(o=>{o.forEach(a=>{if(a.isIntersecting){const l=Number(a.target.getAttribute("data-index"));Number.isNaN(l)||(t.value=l)}})},{threshold:.55,rootMargin:"-15% 0px -25% 0px"}),s.forEach(o=>i.observe(o))}),Uo(()=>{i&&i.disconnect()}),(s,o)=>(je(),tt("section",cA,[o[1]||(o[1]=ae("div",{class:"section-number"},"05 / Foundations",-1)),o[2]||(o[2]=ae("h2",{class:"section-title"},[ae("span",null,"EDUCATION & ENGINEERING APPROACH")],-1)),ae("div",uA,[(je(),tt(qt,null,Hi(e,(a,l)=>{var c;return ae("article",{key:a.title,"data-index":l,class:Ls(["foundation-timeline-item",{active:t.value===l}]),tabindex:"0",onMouseenter:u=>r(l),onFocusin:u=>r(l)},[ae("div",hA,[ae("div",dA,wt(a.phase),1),o[0]||(o[0]=ae("span",{class:"foundation-dot"},null,-1))]),ae("div",pA,[ae("h3",mA,wt(a.title),1),ae("div",_A,wt(a.subtitle),1),(je(!0),tt(qt,null,Hi(a.paragraphs,u=>(je(),tt("p",{key:u,class:"foundation-description"},wt(u),1))),128)),(c=a.points)!=null&&c.length?(je(),tt("ul",gA,[(je(!0),tt(qt,null,Hi(a.points,u=>(je(),tt("li",{key:u},[$e(dt(jn),{class:"list-item-icon"}),ae("span",null,wt(u),1)]))),128))])):YM("",!0)])],42,fA)}),64))])]))}},xA={id:"contact",class:"contact-section route-section"},SA={class:"contact-links"},yA={href:"mailto:agbajee835@gmail.com",target:"_blank",rel:"noopener noreferrer",class:"contact-link"},MA={href:"https://github.com/Agbajee",target:"_blank",rel:"noopener noreferrer",class:"contact-link"},bA={href:"https://www.linkedin.com/in/devagbaje",target:"_blank",rel:"noopener noreferrer",class:"contact-link"},EA={href:"https://wa.me/2348145302579",target:"_blank",rel:"noopener noreferrer",class:"contact-link"},TA={__name:"ContactSection",setup(n){return(e,t)=>(je(),tt("section",xA,[t[4]||(t[4]=ae("div",{class:"section-number"},"05 / Contact",-1)),t[5]||(t[5]=ae("h2",{class:"contact-title"},"LET'S BUILD SOMETHING",-1)),t[6]||(t[6]=ae("p",{class:"contact-subtitle"}," Interested in working together? Let's connect and discuss your next project. ",-1)),ae("div",SA,[ae("a",yA,[$e(dt(p1),{class:"contact-link-icon"}),t[0]||(t[0]=po(" agbajee835@gmail.com ",-1))]),ae("a",MA,[$e(dt(d1),{class:"contact-link-icon"}),t[1]||(t[1]=po(" github.com/Agbajee ",-1))]),ae("a",bA,[$e(dt(f1),{class:"contact-link-icon"}),t[2]||(t[2]=po(" linkedin.com/in/devagbaje ",-1))]),ae("a",EA,[$e(dt(h1),{class:"contact-link-icon"}),t[3]||(t[3]=po(" Whatsapp ",-1))])])]))}},AA={id:"year"},wA={__name:"SiteFooter",props:{year:{type:Number,required:!0}},setup(n){return(e,t)=>(je(),tt("footer",null,[ae("p",null,[t[0]||(t[0]=po("© ",-1)),ae("span",AA,wt(n.year),1),t[1]||(t[1]=po(" All Rights Reserved",-1))]),t[2]||(t[2]=ae("p",null,"Designed & Developed with Precision",-1))]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fm="183",CA=0,Z_=1,RA=2,Mu=1,PA=2,_l=3,Gs=0,pi=1,Yr=2,Zr=0,Ta=1,Nl=2,J_=3,Q_=4,DA=5,fo=100,IA=101,LA=102,NA=103,UA=104,FA=200,OA=201,BA=202,kA=203,yd=204,Md=205,zA=206,VA=207,HA=208,GA=209,WA=210,XA=211,YA=212,qA=213,$A=214,bd=0,Ed=1,Td=2,za=3,Ad=4,wd=5,Cd=6,Rd=7,Zx=0,KA=1,jA=2,Tr=0,Jx=1,Qx=2,eS=3,tS=4,nS=5,iS=6,rS=7,sS=300,Ro=301,Va=302,eh=303,th=304,Tf=306,Pd=1e3,$r=1001,Dd=1002,An=1003,ZA=1004,Tc=1005,bn=1006,nh=1007,go=1008,zi=1009,oS=1010,aS=1011,lc=1012,hm=1013,Pr=1014,Sr=1015,ss=1016,dm=1017,pm=1018,cc=1020,lS=35902,cS=35899,uS=1021,fS=1022,er=1023,os=1026,vo=1027,hS=1028,mm=1029,Ha=1030,_m=1031,gm=1033,bu=33776,Eu=33777,Tu=33778,Au=33779,Id=35840,Ld=35841,Nd=35842,Ud=35843,Fd=36196,Od=37492,Bd=37496,kd=37488,zd=37489,Vd=37490,Hd=37491,Gd=37808,Wd=37809,Xd=37810,Yd=37811,qd=37812,$d=37813,Kd=37814,jd=37815,Zd=37816,Jd=37817,Qd=37818,ep=37819,tp=37820,np=37821,ip=36492,rp=36494,sp=36495,op=36283,ap=36284,lp=36285,cp=36286,JA=3200,QA=0,ew=1,Ts="",Fi="srgb",Ga="srgb-linear",ju="linear",Pt="srgb",Go=7680,eg=519,tw=512,nw=513,iw=514,vm=515,rw=516,sw=517,xm=518,ow=519,up=35044,tg=35048,ng="300 es",yr=2e3,Zu=2001;function aw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ju(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lw(){const n=Ju("canvas");return n.style.display="block",n}const ig={};function Qu(...n){const e="THREE."+n.shift();console.log(e,...n)}function dS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function et(...n){n=dS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function vt(...n){n=dS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ef(...n){const e=n.join(" ");e in ig||(ig[e]=!0,et(...n))}function cw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const uw={[bd]:Ed,[Td]:Cd,[Ad]:Rd,[za]:wd,[Ed]:bd,[Cd]:Td,[Rd]:Ad,[wd]:za};class qa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ih=Math.PI/180,fp=180/Math.PI;function Os(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function pt(n,e,t){return Math.max(e,Math.min(t,n))}function fw(n,e){return(n%e+e)%e}function rh(n,e,t){return(1-t)*n+t*e}function gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Nt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $a{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],f=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(h!==g||l!==f||c!==d||u!==_){let p=l*f+c*d+u*_+h*g;p<0&&(f=-f,d=-d,_=-_,g=-g,p=-p);let m=1-a;if(p<.9995){const x=Math.acos(p),b=Math.sin(x);m=Math.sin(m*x)/b,a=Math.sin(a*x)/b,l=l*m+f*a,c=c*m+d*a,u=u*m+_*a,h=h*m+g*a}else{l=l*m+f*a,c=c*m+d*a,u=u*m+_*a,h=h*m+g*a;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sh=new ee,rg=new $a;class ot{constructor(e,t,i,r,s,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],_=i[8],g=r[0],p=r[3],m=r[6],x=r[1],b=r[4],y=r[7],A=r[2],C=r[5],w=r[8];return s[0]=o*g+a*x+l*A,s[3]=o*p+a*b+l*C,s[6]=o*m+a*y+l*w,s[1]=c*g+u*x+h*A,s[4]=c*p+u*b+h*C,s[7]=c*m+u*y+h*w,s[2]=f*g+d*x+_*A,s[5]=f*p+d*b+_*C,s[8]=f*m+d*y+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,_=t*h+i*f+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oh.makeScale(e,t)),this}rotate(e){return this.premultiply(oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oh=new ot,sg=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),og=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hw(){const n={enabled:!0,workingColorSpace:Ga,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Pt&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pt&&(r.r=Aa(r.r),r.g=Aa(r.g),r.b=Aa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ts?ju:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ef("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ef("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ga]:{primaries:e,whitePoint:i,transfer:ju,toXYZ:sg,fromXYZ:og,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Fi},outputColorSpaceConfig:{drawingBufferColorSpace:Fi}},[Fi]:{primaries:e,whitePoint:i,transfer:Pt,toXYZ:sg,fromXYZ:og,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Fi}}}),n}const xt=hw();function Jr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Aa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Wo;class dw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wo===void 0&&(Wo=Ju("canvas")),Wo.width=e.width,Wo.height=e.height;const r=Wo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ju("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jr(t[i]/255)*255):t[i]=Jr(t[i]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pw=0;class Sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=Os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ah(r[o].image)):s.push(ah(r[o]))}else s=ah(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ah(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let mw=0;const lh=new ee;class Gn extends qa{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,i=$r,r=$r,s=bn,o=go,a=er,l=zi,c=Gn.DEFAULT_ANISOTROPY,u=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mw++}),this.uuid=Os(),this.name="",this.source=new Sm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pd:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pd:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=sS;Gn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,i=0,r=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(d+1)/2,A=(m+1)/2,C=(u+f)/4,w=(h+g)/4,S=(_+p)/4;return b>y&&b>A?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=C/i,s=w/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=S/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=S/s),this.set(i,r,s,t),this}let x=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(h-g)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _w extends qa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Gn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Sm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends _w{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class pS extends Gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gw extends Gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kt{constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,_,g,p){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,_,g,p)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Xo.setFromMatrixColumn(e,0).length(),s=1/Xo.setFromMatrixColumn(e,1).length(),o=1/Xo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vw,e,xw)}lookAt(e,t,i){const r=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),ps.crossVectors(i,vi),ps.lengthSq()===0&&(Math.abs(i.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),ps.crossVectors(i,vi)),ps.normalize(),Ac.crossVectors(vi,ps),r[0]=ps.x,r[4]=Ac.x,r[8]=vi.x,r[1]=ps.y,r[5]=Ac.y,r[9]=vi.y,r[2]=ps.z,r[6]=Ac.z,r[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],_=i[2],g=i[6],p=i[10],m=i[14],x=i[3],b=i[7],y=i[11],A=i[15],C=r[0],w=r[4],S=r[8],M=r[12],B=r[1],N=r[5],L=r[9],H=r[13],K=r[2],Y=r[6],X=r[10],z=r[14],se=r[3],ue=r[7],O=r[11],ve=r[15];return s[0]=o*C+a*B+l*K+c*se,s[4]=o*w+a*N+l*Y+c*ue,s[8]=o*S+a*L+l*X+c*O,s[12]=o*M+a*H+l*z+c*ve,s[1]=u*C+h*B+f*K+d*se,s[5]=u*w+h*N+f*Y+d*ue,s[9]=u*S+h*L+f*X+d*O,s[13]=u*M+h*H+f*z+d*ve,s[2]=_*C+g*B+p*K+m*se,s[6]=_*w+g*N+p*Y+m*ue,s[10]=_*S+g*L+p*X+m*O,s[14]=_*M+g*H+p*z+m*ve,s[3]=x*C+b*B+y*K+A*se,s[7]=x*w+b*N+y*Y+A*ue,s[11]=x*S+b*L+y*X+A*O,s[15]=x*M+b*H+y*z+A*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15],x=l*d-c*f,b=a*d-c*h,y=a*f-l*h,A=o*d-c*u,C=o*f-l*u,w=o*h-a*u;return t*(g*x-p*b+m*y)-i*(_*x-p*A+m*C)+r*(_*b-g*A+m*w)-s*(_*y-g*C+p*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],x=t*a-i*o,b=t*l-r*o,y=t*c-s*o,A=i*l-r*a,C=i*c-s*a,w=r*c-s*l,S=u*g-h*_,M=u*p-f*_,B=u*m-d*_,N=h*p-f*g,L=h*m-d*g,H=f*m-d*p,K=x*H-b*L+y*N+A*B-C*M+w*S;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/K;return e[0]=(a*H-l*L+c*N)*Y,e[1]=(r*L-i*H-s*N)*Y,e[2]=(g*w-p*C+m*A)*Y,e[3]=(f*C-h*w-d*A)*Y,e[4]=(l*B-o*H-c*M)*Y,e[5]=(t*H-r*B+s*M)*Y,e[6]=(p*y-_*w-m*b)*Y,e[7]=(u*w-f*y+d*b)*Y,e[8]=(o*L-a*B+c*S)*Y,e[9]=(i*B-t*L-s*S)*Y,e[10]=(_*C-g*y+m*x)*Y,e[11]=(h*y-u*C-d*x)*Y,e[12]=(a*M-o*N-l*S)*Y,e[13]=(t*N-i*M+r*S)*Y,e[14]=(g*b-_*A-p*x)*Y,e[15]=(u*A-h*b+f*x)*Y,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,_=s*h,g=o*u,p=o*h,m=a*h,x=l*c,b=l*u,y=l*h,A=i.x,C=i.y,w=i.z;return r[0]=(1-(g+m))*A,r[1]=(d+y)*A,r[2]=(_-b)*A,r[3]=0,r[4]=(d-y)*C,r[5]=(1-(f+m))*C,r[6]=(p+x)*C,r[7]=0,r[8]=(_+b)*w,r[9]=(p-x)*w,r[10]=(1-(f+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Xo.set(r[0],r[1],r[2]).length();const a=Xo.set(r[4],r[5],r[6]).length(),l=Xo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Ki.copy(this);const c=1/o,u=1/a,h=1/l;return Ki.elements[0]*=c,Ki.elements[1]*=c,Ki.elements[2]*=c,Ki.elements[4]*=u,Ki.elements[5]*=u,Ki.elements[6]*=u,Ki.elements[8]*=h,Ki.elements[9]*=h,Ki.elements[10]*=h,t.setFromRotationMatrix(Ki),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=yr,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===yr)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Zu)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=yr,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),d=-(i+r)/(i-r);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===yr)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Zu)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xo=new ee,Ki=new Kt,vw=new ee(0,0,0),xw=new ee(1,1,1),ps=new ee,Ac=new ee,vi=new ee,ag=new Kt,lg=new $a;class as{constructor(e=0,t=0,i=0,r=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ag.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ag,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lg.setFromEuler(this),this.setFromQuaternion(lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class mS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sw=0;const cg=new ee,Yo=new $a,Fr=new Kt,wc=new ee,tl=new ee,yw=new ee,Mw=new $a,ug=new ee(1,0,0),fg=new ee(0,1,0),hg=new ee(0,0,1),dg={type:"added"},bw={type:"removed"},qo={type:"childadded",child:null},ch={type:"childremoved",child:null};class Wn extends qa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new ee,t=new as,i=new $a,r=new ee(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ot}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yo.setFromAxisAngle(e,t),this.quaternion.multiply(Yo),this}rotateOnWorldAxis(e,t){return Yo.setFromAxisAngle(e,t),this.quaternion.premultiply(Yo),this}rotateX(e){return this.rotateOnAxis(ug,e)}rotateY(e){return this.rotateOnAxis(fg,e)}rotateZ(e){return this.rotateOnAxis(hg,e)}translateOnAxis(e,t){return cg.copy(e).applyQuaternion(this.quaternion),this.position.add(cg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ug,e)}translateY(e){return this.translateOnAxis(fg,e)}translateZ(e){return this.translateOnAxis(hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wc.copy(e):wc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fr.lookAt(tl,wc,this.up):Fr.lookAt(wc,tl,this.up),this.quaternion.setFromRotationMatrix(Fr),r&&(Fr.extractRotation(r.matrixWorld),Yo.setFromRotationMatrix(Fr),this.quaternion.premultiply(Yo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dg),qo.child=e,this.dispatchEvent(qo),qo.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bw),ch.child=e,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dg),qo.child=e,this.dispatchEvent(qo),qo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,yw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,Mw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wn.DEFAULT_UP=new ee(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Cc extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ew={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ew)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _S={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Rc={h:0,s:0,l:0};function fh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=fw(e,1),t=pt(t,0,1),i=pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=fh(o,s,e+1/3),this.g=fh(o,s,e),this.b=fh(o,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Fi){function i(s){s!==void 0&&parseFloat(s)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fi){const i=_S[e.toLowerCase()];return i!==void 0?this.setHex(i,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fi){return xt.workingToColorSpace(Ln.copy(this),e),Math.round(pt(Ln.r*255,0,255))*65536+Math.round(pt(Ln.g*255,0,255))*256+Math.round(pt(Ln.b*255,0,255))}getHexString(e=Fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,s=Ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Fi){xt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,i=Ln.g,r=Ln.b;return e!==Fi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(Rc);const i=rh(ms.h,Rc.h,t),r=rh(ms.s,Rc.s,t),s=rh(ms.l,Rc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new mt;mt.NAMES=_S;class Tw extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ji=new ee,Or=new ee,hh=new ee,Br=new ee,$o=new ee,Ko=new ee,pg=new ee,dh=new ee,ph=new ee,mh=new ee,_h=new rn,gh=new rn,vh=new rn;class Vi{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ji.subVectors(e,t),r.cross(ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ji.subVectors(r,t),Or.subVectors(i,t),hh.subVectors(e,t);const o=ji.dot(ji),a=ji.dot(Or),l=ji.dot(hh),c=Or.dot(Or),u=Or.dot(hh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Br.x),l.addScaledVector(o,Br.y),l.addScaledVector(a,Br.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return _h.setScalar(0),gh.setScalar(0),vh.setScalar(0),_h.fromBufferAttribute(e,t),gh.fromBufferAttribute(e,i),vh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(_h,s.x),o.addScaledVector(gh,s.y),o.addScaledVector(vh,s.z),o}static isFrontFacing(e,t,i,r){return ji.subVectors(i,t),Or.subVectors(e,t),ji.cross(Or).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),ji.cross(Or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Vi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;$o.subVectors(r,i),Ko.subVectors(s,i),dh.subVectors(e,i);const l=$o.dot(dh),c=Ko.dot(dh);if(l<=0&&c<=0)return t.copy(i);ph.subVectors(e,r);const u=$o.dot(ph),h=Ko.dot(ph);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector($o,o);mh.subVectors(e,s);const d=$o.dot(mh),_=Ko.dot(mh);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ko,a);const p=u*_-d*h;if(p<=0&&h-u>=0&&d-_>=0)return pg.subVectors(s,r),a=(h-u)/(h-u+(d-_)),t.copy(r).addScaledVector(pg,a);const m=1/(p+g+f);return o=g*m,a=f*m,t.copy(i).addScaledVector($o,o).addScaledVector(Ko,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gc{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(s,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pc.copy(i.boundingBox)),Pc.applyMatrix4(e.matrixWorld),this.union(Pc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),Dc.subVectors(this.max,nl),jo.subVectors(e.a,nl),Zo.subVectors(e.b,nl),Jo.subVectors(e.c,nl),_s.subVectors(Zo,jo),gs.subVectors(Jo,Zo),Qs.subVectors(jo,Jo);let t=[0,-_s.z,_s.y,0,-gs.z,gs.y,0,-Qs.z,Qs.y,_s.z,0,-_s.x,gs.z,0,-gs.x,Qs.z,0,-Qs.x,-_s.y,_s.x,0,-gs.y,gs.x,0,-Qs.y,Qs.x,0];return!xh(t,jo,Zo,Jo,Dc)||(t=[1,0,0,0,1,0,0,0,1],!xh(t,jo,Zo,Jo,Dc))?!1:(Ic.crossVectors(_s,gs),t=[Ic.x,Ic.y,Ic.z],xh(t,jo,Zo,Jo,Dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kr=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Zi=new ee,Pc=new gc,jo=new ee,Zo=new ee,Jo=new ee,_s=new ee,gs=new ee,Qs=new ee,nl=new ee,Dc=new ee,Ic=new ee,eo=new ee;function xh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){eo.fromArray(n,s);const a=r.x*Math.abs(eo.x)+r.y*Math.abs(eo.y)+r.z*Math.abs(eo.z),l=e.dot(eo),c=t.dot(eo),u=i.dot(eo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const on=new ee,Lc=new gt;let Aw=0;class si{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Aw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=up,this.updateRanges=[],this.gpuType=Sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lc.fromBufferAttribute(this,t),Lc.applyMatrix3(e),this.setXY(t,Lc.x,Lc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==up&&(e.usage=this.usage),e}}class gS extends si{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vS extends si{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nr extends si{constructor(e,t,i){super(new Float32Array(e),t,i)}}const ww=new gc,il=new ee,Sh=new ee;class vc{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ww.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const t=il.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(il,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(Sh)),this.expandByPoint(il.copy(e.center).sub(Sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cw=0;const Ni=new Kt,yh=new Wn,Qo=new ee,xi=new gc,rl=new gc,Sn=new ee;class _i extends qa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aw(e)?vS:gS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,i){return Ni.makeTranslation(e,t,i),this.applyMatrix4(Ni),this}scale(e,t,i){return Ni.makeScale(e,t,i),this.applyMatrix4(Ni),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qo).negate(),this.translate(Qo.x,Qo.y,Qo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];rl.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(xi.min,rl.min),xi.expandByPoint(Sn),Sn.addVectors(xi.max,rl.max),xi.expandByPoint(Sn)):(xi.expandByPoint(rl.min),xi.expandByPoint(rl.max))}xi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Sn.fromBufferAttribute(a,c),l&&(Qo.fromBufferAttribute(e,c),Sn.add(Qo)),r=Math.max(r,i.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new ee,l[S]=new ee;const c=new ee,u=new ee,h=new ee,f=new gt,d=new gt,_=new gt,g=new ee,p=new ee;function m(S,M,B){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,B),f.fromBufferAttribute(s,S),d.fromBufferAttribute(s,M),_.fromBufferAttribute(s,B),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const N=1/(d.x*_.y-_.x*d.y);isFinite(N)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(N),p.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(N),a[S].add(g),a[M].add(g),a[B].add(g),l[S].add(p),l[M].add(p),l[B].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,M=x.length;S<M;++S){const B=x[S],N=B.start,L=B.count;for(let H=N,K=N+L;H<K;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new ee,y=new ee,A=new ee,C=new ee;function w(S){A.fromBufferAttribute(r,S),C.copy(A);const M=a[S];b.copy(M),b.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(C,M);const N=y.dot(l[S])<0?-1:1;o.setXYZW(S,b.x,b.y,b.z,N)}for(let S=0,M=x.length;S<M;++S){const B=x[S],N=B.start,L=B.count;for(let H=N,K=N+L;H<K;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new ee,s=new ee,o=new ee,a=new ee,l=new ee,c=new ee,u=new ee,h=new ee;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let m=0;m<u;m++)f[_++]=c[d++]}return new si(f,u,h)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=up,this.updateRanges=[],this.version=0,this.uuid=Os()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Os()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Os()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xn=new ee;class tf{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gr(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),r=Nt(r,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Qu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new si(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Pw=0;class Oo extends qa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Ta,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yd,this.blendDst=Md,this.blendEquation=fo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ta&&(i.blending=this.blending),this.side!==Gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yd&&(i.blendSrc=this.blendSrc),this.blendDst!==Md&&(i.blendDst=this.blendDst),this.blendEquation!==fo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Go&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Go&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Go&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xS extends Oo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ea;const sl=new ee,ta=new ee,na=new ee,ia=new gt,ol=new gt,SS=new Kt,Nc=new ee,al=new ee,Uc=new ee,mg=new gt,Mh=new gt,_g=new gt;class Dw extends Wn{constructor(e=new xS){if(super(),this.isSprite=!0,this.type="Sprite",ea===void 0){ea=new _i;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Rw(t,5);ea.setIndex([0,1,2,0,2,3]),ea.setAttribute("position",new tf(i,3,0,!1)),ea.setAttribute("uv",new tf(i,2,3,!1))}this.geometry=ea,this.material=e,this.center=new gt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ta.setFromMatrixScale(this.matrixWorld),SS.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),na.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ta.multiplyScalar(-na.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Fc(Nc.set(-.5,-.5,0),na,o,ta,r,s),Fc(al.set(.5,-.5,0),na,o,ta,r,s),Fc(Uc.set(.5,.5,0),na,o,ta,r,s),mg.set(0,0),Mh.set(1,0),_g.set(1,1);let a=e.ray.intersectTriangle(Nc,al,Uc,!1,sl);if(a===null&&(Fc(al.set(-.5,.5,0),na,o,ta,r,s),Mh.set(0,1),a=e.ray.intersectTriangle(Nc,Uc,al,!1,sl),a===null))return;const l=e.ray.origin.distanceTo(sl);l<e.near||l>e.far||t.push({distance:l,point:sl.clone(),uv:Vi.getInterpolation(sl,Nc,al,Uc,mg,Mh,_g,new gt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Fc(n,e,t,i,r,s){ia.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ol.x=s*ia.x-r*ia.y,ol.y=r*ia.x+s*ia.y):ol.copy(ia),n.copy(e),n.x+=ol.x,n.y+=ol.y,n.applyMatrix4(SS)}const zr=new ee,bh=new ee,Oc=new ee,vs=new ee,Eh=new ee,Bc=new ee,Th=new ee;class ym{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zr.copy(this.origin).addScaledVector(this.direction,t),zr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bh.copy(e).add(t).multiplyScalar(.5),Oc.copy(t).sub(e).normalize(),vs.copy(this.origin).sub(bh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Oc),a=vs.dot(this.direction),l=-vs.dot(Oc),c=vs.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(bh).addScaledVector(Oc,f),d}intersectSphere(e,t){zr.subVectors(e.center,this.origin);const i=zr.dot(this.direction),r=zr.dot(zr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,t,i,r,s){Eh.subVectors(t,e),Bc.subVectors(i,e),Th.crossVectors(Eh,Bc);let o=this.direction.dot(Th),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vs.subVectors(this.origin,e);const l=a*this.direction.dot(Bc.crossVectors(vs,Bc));if(l<0)return null;const c=a*this.direction.dot(Eh.cross(vs));if(c<0||l+c>o)return null;const u=-a*vs.dot(Th);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yS extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=Zx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gg=new Kt,to=new ym,kc=new vc,vg=new ee,zc=new ee,Vc=new ee,Hc=new ee,Ah=new ee,Gc=new ee,xg=new ee,Wc=new ee;class ls extends Wn{constructor(e=new _i,t=new yS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ah.fromBufferAttribute(h,e),o?Gc.addScaledVector(Ah,u):Gc.addScaledVector(Ah.sub(t),u))}t.add(Gc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(s),to.copy(e.ray).recast(e.near),!(kc.containsPoint(to.origin)===!1&&(to.intersectSphere(kc,vg)===null||to.origin.distanceToSquared(vg)>(e.far-e.near)**2))&&(gg.copy(s).invert(),to.copy(e.ray).applyMatrix4(gg),!(i.boundingBox!==null&&to.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,to)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],x=Math.max(p.start,d.start),b=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,A=b;y<A;y+=3){const C=a.getX(y),w=a.getX(y+1),S=a.getX(y+2);r=Xc(this,m,e,i,c,u,h,C,w,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=a.getX(p),b=a.getX(p+1),y=a.getX(p+2);r=Xc(this,o,e,i,c,u,h,x,b,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=o[p.materialIndex],x=Math.max(p.start,d.start),b=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=x,A=b;y<A;y+=3){const C=y,w=y+1,S=y+2;r=Xc(this,m,e,i,c,u,h,C,w,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const x=p,b=p+1,y=p+2;r=Xc(this,o,e,i,c,u,h,x,b,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Iw(n,e,t,i,r,s,o,a){let l;if(e.side===pi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gs,a),l===null)return null;Wc.copy(a),Wc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wc);return c<t.near||c>t.far?null:{distance:c,point:Wc.clone(),object:n}}function Xc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,zc),n.getVertexPosition(l,Vc),n.getVertexPosition(c,Hc);const u=Iw(n,e,t,i,zc,Vc,Hc,xg);if(u){const h=new ee;Vi.getBarycoord(xg,zc,Vc,Hc,h),r&&(u.uv=Vi.getInterpolatedAttribute(r,a,l,c,h,new gt)),s&&(u.uv1=Vi.getInterpolatedAttribute(s,a,l,c,h,new gt)),o&&(u.normal=Vi.getInterpolatedAttribute(o,a,l,c,h,new ee),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new ee,materialIndex:0};Vi.getNormal(zc,Vc,Hc,f.normal),u.face=f,u.barycoord=h}return u}class Lw extends Gn{constructor(e=null,t=1,i=1,r,s,o,a,l,c=An,u=An,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wh=new ee,Nw=new ee,Uw=new ot;class ao{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wh.subVectors(i,t).cross(Nw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Uw.getNormalMatrix(e),r=this.coplanarPoint(wh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const no=new vc,Fw=new gt(.5,.5),Yc=new ee;class MS{constructor(e=new ao,t=new ao,i=new ao,r=new ao,s=new ao,o=new ao){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=yr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],_=s[8],g=s[9],p=s[10],m=s[11],x=s[12],b=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-o,d-u,m-_,A-x).normalize(),r[1].setComponents(c+o,d+u,m+_,A+x).normalize(),r[2].setComponents(c+a,d+h,m+g,A+b).normalize(),r[3].setComponents(c-a,d-h,m-g,A-b).normalize(),i)r[4].setComponents(l,f,p,y).normalize(),r[5].setComponents(c-l,d-f,m-p,A-y).normalize();else if(r[4].setComponents(c-l,d-f,m-p,A-y).normalize(),t===yr)r[5].setComponents(c+l,d+f,m+p,A+y).normalize();else if(t===Zu)r[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),no.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),no.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(no)}intersectsSprite(e){no.center.set(0,0,0);const t=Fw.distanceTo(e.center);return no.radius=.7071067811865476+t,no.applyMatrix4(e.matrixWorld),this.intersectsSphere(no)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Yc.x=r.normal.x>0?e.max.x:e.min.x,Yc.y=r.normal.y>0?e.max.y:e.min.y,Yc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bS extends Oo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nf=new ee,rf=new ee,Sg=new Kt,ll=new ym,qc=new vc,Ch=new ee,yg=new ee;class Ow extends Wn{constructor(e=new _i,t=new bS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)nf.fromBufferAttribute(t,r-1),rf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=nf.distanceTo(rf);e.setAttribute("lineDistance",new nr(i,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qc.copy(i.boundingSphere),qc.applyMatrix4(r),qc.radius+=s,e.ray.intersectsSphere(qc)===!1)return;Sg.copy(r).invert(),ll.copy(e.ray).applyMatrix4(Sg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=u.getX(g),x=u.getX(g+1),b=$c(this,e,ll,l,m,x,g);b&&t.push(b)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(d),m=$c(this,e,ll,l,g,p,_-1);m&&t.push(m)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,p=_-1;g<p;g+=c){const m=$c(this,e,ll,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=$c(this,e,ll,l,_-1,d,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $c(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(nf.fromBufferAttribute(a,r),rf.fromBufferAttribute(a,s),t.distanceSqToSegment(nf,rf,Ch,yg)>i)return;Ch.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ch);if(!(c<e.near||c>e.far))return{distance:c,point:yg.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Mg=new ee,bg=new ee;class Bw extends Ow{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Mg.fromBufferAttribute(t,r),bg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Mg.distanceTo(bg);e.setAttribute("lineDistance",new nr(i,1))}else et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ES extends Oo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Eg=new Kt,hp=new ym,Kc=new vc,jc=new ee;class kw extends Wn{constructor(e=new _i,t=new ES){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kc.copy(i.boundingSphere),Kc.applyMatrix4(r),Kc.radius+=s,e.ray.intersectsSphere(Kc)===!1)return;Eg.copy(r).invert(),hp.copy(e.ray).applyMatrix4(Eg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const p=c.getX(_);jc.fromBufferAttribute(h,p),Tg(jc,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)jc.fromBufferAttribute(h,_),Tg(jc,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tg(n,e,t,i,r,s,o){const a=hp.distanceSqToPoint(n);if(a<t){const l=new ee;hp.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class TS extends Gn{constructor(e=[],t=Ro,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zw extends Gn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uc extends Gn{constructor(e,t,i=Pr,r,s,o,a=An,l=An,c,u=os,h=1){if(u!==os&&u!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vw extends uc{constructor(e,t=Pr,i=Ro,r,s,o=An,a=An,l,c=os){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class AS extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xc extends _i{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nr(c,3)),this.setAttribute("normal",new nr(u,3)),this.setAttribute("uv",new nr(h,2));function _(g,p,m,x,b,y,A,C,w,S,M){const B=y/w,N=A/S,L=y/2,H=A/2,K=C/2,Y=w+1,X=S+1;let z=0,se=0;const ue=new ee;for(let O=0;O<X;O++){const ve=O*N-H;for(let xe=0;xe<Y;xe++){const ze=xe*B-L;ue[g]=ze*x,ue[p]=ve*b,ue[m]=K,c.push(ue.x,ue.y,ue.z),ue[g]=0,ue[p]=0,ue[m]=C>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(xe/w),h.push(1-O/S),z+=1}}for(let O=0;O<S;O++)for(let ve=0;ve<w;ve++){const xe=f+ve+Y*O,ze=f+ve+Y*(O+1),Ge=f+(ve+1)+Y*(O+1),Xe=f+(ve+1)+Y*O;l.push(xe,ze,Xe),l.push(ze,Ge,Xe),se+=6}a.addGroup(d,se,M),d+=se,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Af extends _i{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const x=m*f-o;for(let b=0;b<c;b++){const y=b*h-s;_.push(y,-x,0),g.push(0,0,1),p.push(b/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const b=x+c*m,y=x+c*(m+1),A=x+1+c*(m+1),C=x+1+c*m;d.push(b,y,C),d.push(y,A,C)}this.setIndex(d),this.setAttribute("position",new nr(_,3)),this.setAttribute("normal",new nr(g,3)),this.setAttribute("uv",new nr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Af(e.width,e.height,e.widthSegments,e.heightSegments)}}function Wa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Kn(n){const e={};for(let t=0;t<n.length;t++){const i=Wa(n[t]);for(const r in i)e[r]=i[r]}return e}function Hw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Gw={clone:Wa,merge:Kn};var Ww=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ww,this.fragmentShader=Xw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wa(e.uniforms),this.uniformsGroups=Hw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yw extends Dr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qw extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $w extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zc=new ee,Jc=new $a,lr=new ee;class CS extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=yr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zc,Jc,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,Jc,lr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Zc,Jc,lr),lr.x===1&&lr.y===1&&lr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zc,Jc,lr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xs=new ee,Ag=new gt,wg=new gt;class Oi extends CS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fp*2*Math.atan(Math.tan(ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xs.x,xs.y).multiplyScalar(-e/xs.z),xs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xs.x,xs.y).multiplyScalar(-e/xs.z)}getViewSize(e,t){return this.getViewBounds(e,Ag,wg),t.subVectors(wg,Ag)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ih*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class RS extends CS{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ra=-90,sa=1;class Kw extends Wn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oi(ra,sa,e,t);r.layers=this.layers,this.add(r);const s=new Oi(ra,sa,e,t);s.layers=this.layers,this.add(s);const o=new Oi(ra,sa,e,t);o.layers=this.layers,this.add(o);const a=new Oi(ra,sa,e,t);a.layers=this.layers,this.add(a);const l=new Oi(ra,sa,e,t);l.layers=this.layers,this.add(l);const c=new Oi(ra,sa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===yr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class jw extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Cg(n,e,t,i){const r=Zw(i);switch(t){case uS:return n*e;case hS:return n*e/r.components*r.byteLength;case mm:return n*e/r.components*r.byteLength;case Ha:return n*e*2/r.components*r.byteLength;case _m:return n*e*2/r.components*r.byteLength;case fS:return n*e*3/r.components*r.byteLength;case er:return n*e*4/r.components*r.byteLength;case gm:return n*e*4/r.components*r.byteLength;case bu:case Eu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Tu:case Au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ld:case Ud:return Math.max(n,16)*Math.max(e,8)/4;case Id:case Nd:return Math.max(n,8)*Math.max(e,8)/2;case Fd:case Od:case kd:case zd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bd:case Vd:case Hd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $d:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ep:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case np:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ip:case rp:case sp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case op:case ap:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lp:case cp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zw(n){switch(n){case zi:case oS:return{byteLength:1,components:1};case lc:case aS:case ss:return{byteLength:2,components:1};case dm:case pm:return{byteLength:2,components:4};case Pr:case hm:case Sr:return{byteLength:4,components:1};case lS:case cS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fm}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function PS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Jw(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Qw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_C=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,SC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,MC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RC="gl_FragColor = linearToOutputTexel( gl_FragColor );",PC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,IC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,YC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$C=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eR=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_R=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ER=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,CR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,UR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,HR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_P=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:Qw,alphahash_pars_fragment:eC,alphamap_fragment:tC,alphamap_pars_fragment:nC,alphatest_fragment:iC,alphatest_pars_fragment:rC,aomap_fragment:sC,aomap_pars_fragment:oC,batching_pars_vertex:aC,batching_vertex:lC,begin_vertex:cC,beginnormal_vertex:uC,bsdfs:fC,iridescence_fragment:hC,bumpmap_pars_fragment:dC,clipping_planes_fragment:pC,clipping_planes_pars_fragment:mC,clipping_planes_pars_vertex:_C,clipping_planes_vertex:gC,color_fragment:vC,color_pars_fragment:xC,color_pars_vertex:SC,color_vertex:yC,common:MC,cube_uv_reflection_fragment:bC,defaultnormal_vertex:EC,displacementmap_pars_vertex:TC,displacementmap_vertex:AC,emissivemap_fragment:wC,emissivemap_pars_fragment:CC,colorspace_fragment:RC,colorspace_pars_fragment:PC,envmap_fragment:DC,envmap_common_pars_fragment:IC,envmap_pars_fragment:LC,envmap_pars_vertex:NC,envmap_physical_pars_fragment:XC,envmap_vertex:UC,fog_vertex:FC,fog_pars_vertex:OC,fog_fragment:BC,fog_pars_fragment:kC,gradientmap_pars_fragment:zC,lightmap_pars_fragment:VC,lights_lambert_fragment:HC,lights_lambert_pars_fragment:GC,lights_pars_begin:WC,lights_toon_fragment:YC,lights_toon_pars_fragment:qC,lights_phong_fragment:$C,lights_phong_pars_fragment:KC,lights_physical_fragment:jC,lights_physical_pars_fragment:ZC,lights_fragment_begin:JC,lights_fragment_maps:QC,lights_fragment_end:eR,logdepthbuf_fragment:tR,logdepthbuf_pars_fragment:nR,logdepthbuf_pars_vertex:iR,logdepthbuf_vertex:rR,map_fragment:sR,map_pars_fragment:oR,map_particle_fragment:aR,map_particle_pars_fragment:lR,metalnessmap_fragment:cR,metalnessmap_pars_fragment:uR,morphinstance_vertex:fR,morphcolor_vertex:hR,morphnormal_vertex:dR,morphtarget_pars_vertex:pR,morphtarget_vertex:mR,normal_fragment_begin:_R,normal_fragment_maps:gR,normal_pars_fragment:vR,normal_pars_vertex:xR,normal_vertex:SR,normalmap_pars_fragment:yR,clearcoat_normal_fragment_begin:MR,clearcoat_normal_fragment_maps:bR,clearcoat_pars_fragment:ER,iridescence_pars_fragment:TR,opaque_fragment:AR,packing:wR,premultiplied_alpha_fragment:CR,project_vertex:RR,dithering_fragment:PR,dithering_pars_fragment:DR,roughnessmap_fragment:IR,roughnessmap_pars_fragment:LR,shadowmap_pars_fragment:NR,shadowmap_pars_vertex:UR,shadowmap_vertex:FR,shadowmask_pars_fragment:OR,skinbase_vertex:BR,skinning_pars_vertex:kR,skinning_vertex:zR,skinnormal_vertex:VR,specularmap_fragment:HR,specularmap_pars_fragment:GR,tonemapping_fragment:WR,tonemapping_pars_fragment:XR,transmission_fragment:YR,transmission_pars_fragment:qR,uv_pars_fragment:$R,uv_pars_vertex:KR,uv_vertex:jR,worldpos_vertex:ZR,background_vert:JR,background_frag:QR,backgroundCube_vert:eP,backgroundCube_frag:tP,cube_vert:nP,cube_frag:iP,depth_vert:rP,depth_frag:sP,distance_vert:oP,distance_frag:aP,equirect_vert:lP,equirect_frag:cP,linedashed_vert:uP,linedashed_frag:fP,meshbasic_vert:hP,meshbasic_frag:dP,meshlambert_vert:pP,meshlambert_frag:mP,meshmatcap_vert:_P,meshmatcap_frag:gP,meshnormal_vert:vP,meshnormal_frag:xP,meshphong_vert:SP,meshphong_frag:yP,meshphysical_vert:MP,meshphysical_frag:bP,meshtoon_vert:EP,meshtoon_frag:TP,points_vert:AP,points_frag:wP,shadow_vert:CP,shadow_frag:RP,sprite_vert:PP,sprite_frag:DP},Ne={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},mr={basic:{uniforms:Kn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Kn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new mt(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Kn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Kn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Kn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Kn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Kn([Ne.points,Ne.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Kn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Kn([Ne.common,Ne.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Kn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Kn([Ne.sprite,Ne.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Kn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Kn([Ne.lights,Ne.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};mr.physical={uniforms:Kn([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Qc={r:0,b:0,g:0},io=new as,IP=new Kt;function LP(n,e,t,i,r,s){const o=new mt(0);let a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const y=x.backgroundBlurriness>0;b=e.get(b,y)}return b}function _(x){let b=!1;const y=d(x);y===null?p(o,a):y&&y.isColor&&(p(y,1),b=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,b){const y=d(b);y&&(y.isCubeTexture||y.mapping===Tf)?(c===void 0&&(c=new ls(new xc(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:Wa(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),io.copy(b.backgroundRotation),io.x*=-1,io.y*=-1,io.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(io.y*=-1,io.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(IP.makeRotationFromEuler(io)),c.material.toneMapped=xt.getTransfer(y.colorSpace)!==Pt,(u!==y||h!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ls(new Af(2,2),new Dr({name:"BackgroundMaterial",uniforms:Wa(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=xt.getTransfer(y.colorSpace)!==Pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,b){x.getRGB(Qc,wS(n)),t.buffers.color.setClear(Qc.r,Qc.g,Qc.b,b,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:_,addToRenderList:g,dispose:m}}function NP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(N,L,H,K,Y){let X=!1;const z=h(N,K,H,L);s!==z&&(s=z,c(s.object)),X=d(N,K,H,Y),X&&_(N,K,H,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(N,L,H,K),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function h(N,L,H,K){const Y=K.wireframe===!0;let X=i[L.id];X===void 0&&(X={},i[L.id]=X);const z=N.isInstancedMesh===!0?N.id:0;let se=X[z];se===void 0&&(se={},X[z]=se);let ue=se[H.id];ue===void 0&&(ue={},se[H.id]=ue);let O=ue[Y];return O===void 0&&(O=f(l()),ue[Y]=O),O}function f(N){const L=[],H=[],K=[];for(let Y=0;Y<t;Y++)L[Y]=0,H[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:K,object:N,attributes:{},index:null}}function d(N,L,H,K){const Y=s.attributes,X=L.attributes;let z=0;const se=H.getAttributes();for(const ue in se)if(se[ue].location>=0){const ve=Y[ue];let xe=X[ue];if(xe===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor)),ve===void 0||ve.attribute!==xe||xe&&ve.data!==xe.data)return!0;z++}return s.attributesNum!==z||s.index!==K}function _(N,L,H,K){const Y={},X=L.attributes;let z=0;const se=H.getAttributes();for(const ue in se)if(se[ue].location>=0){let ve=X[ue];ve===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor));const xe={};xe.attribute=ve,ve&&ve.data&&(xe.data=ve.data),Y[ue]=xe,z++}s.attributes=Y,s.attributesNum=z,s.index=K}function g(){const N=s.newAttributes;for(let L=0,H=N.length;L<H;L++)N[L]=0}function p(N){m(N,0)}function m(N,L){const H=s.newAttributes,K=s.enabledAttributes,Y=s.attributeDivisors;H[N]=1,K[N]===0&&(n.enableVertexAttribArray(N),K[N]=1),Y[N]!==L&&(n.vertexAttribDivisor(N,L),Y[N]=L)}function x(){const N=s.newAttributes,L=s.enabledAttributes;for(let H=0,K=L.length;H<K;H++)L[H]!==N[H]&&(n.disableVertexAttribArray(H),L[H]=0)}function b(N,L,H,K,Y,X,z){z===!0?n.vertexAttribIPointer(N,L,H,Y,X):n.vertexAttribPointer(N,L,H,K,Y,X)}function y(N,L,H,K){g();const Y=K.attributes,X=H.getAttributes(),z=L.defaultAttributeValues;for(const se in X){const ue=X[se];if(ue.location>=0){let O=Y[se];if(O===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(O=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(O=N.instanceColor)),O!==void 0){const ve=O.normalized,xe=O.itemSize,ze=e.get(O);if(ze===void 0)continue;const Ge=ze.buffer,Xe=ze.type,G=ze.bytesPerElement,F=Xe===n.INT||Xe===n.UNSIGNED_INT||O.gpuType===hm;if(O.isInterleavedBufferAttribute){const W=O.data,Z=W.stride,le=O.offset;if(W.isInstancedInterleavedBuffer){for(let pe=0;pe<ue.locationSize;pe++)m(ue.location+pe,W.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let pe=0;pe<ue.locationSize;pe++)p(ue.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let pe=0;pe<ue.locationSize;pe++)b(ue.location+pe,xe/ue.locationSize,Xe,ve,Z*G,(le+xe/ue.locationSize*pe)*G,F)}else{if(O.isInstancedBufferAttribute){for(let W=0;W<ue.locationSize;W++)m(ue.location+W,O.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let W=0;W<ue.locationSize;W++)p(ue.location+W);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let W=0;W<ue.locationSize;W++)b(ue.location+W,xe/ue.locationSize,Xe,ve,xe*G,xe/ue.locationSize*W*G,F)}}else if(z!==void 0){const ve=z[se];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(ue.location,ve);break;case 3:n.vertexAttrib3fv(ue.location,ve);break;case 4:n.vertexAttrib4fv(ue.location,ve);break;default:n.vertexAttrib1fv(ue.location,ve)}}}}x()}function A(){M();for(const N in i){const L=i[N];for(const H in L){const K=L[H];for(const Y in K){const X=K[Y];for(const z in X)u(X[z].object),delete X[z];delete K[Y]}}delete i[N]}}function C(N){if(i[N.id]===void 0)return;const L=i[N.id];for(const H in L){const K=L[H];for(const Y in K){const X=K[Y];for(const z in X)u(X[z].object),delete X[z];delete K[Y]}}delete i[N.id]}function w(N){for(const L in i){const H=i[L];for(const K in H){const Y=H[K];if(Y[N.id]===void 0)continue;const X=Y[N.id];for(const z in X)u(X[z].object),delete X[z];delete Y[N.id]}}}function S(N){for(const L in i){const H=i[L],K=N.isInstancedMesh===!0?N.id:0,Y=H[K];if(Y!==void 0){for(const X in Y){const z=Y[X];for(const se in z)u(z[se].object),delete z[se];delete Y[X]}delete H[K],Object.keys(H).length===0&&delete i[L]}}}function M(){B(),o=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:B,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:p,disableUnusedAttributes:x}}function UP(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function FP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==er&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const S=w===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==zi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Sr&&!S)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(et("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),C=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:A,samples:C}}function OP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ao,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,m=n.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const x=s?0:i,b=x*4;let y=m.clippingState||null;l.value=y,y=u(_,f,b,d);for(let A=0;A!==b;++A)y[A]=t[A];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,y=d;b!==g;++b,y+=4)o.copy(h[b]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const Rs=4,Rg=[.125,.215,.35,.446,.526,.582],ho=20,BP=256,cl=new RS,Pg=new mt;let Rh=null,Ph=0,Dh=0,Ih=!1;const kP=new ee;class Dg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=kP}=s;Rh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rh,Ph,Dh),this._renderer.xr.enabled=Ih,e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ro||e.mapping===Va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),Dh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:ss,format:er,colorSpace:Ga,depthBuffer:!1},r=Ig(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ig(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zP(s)),this._blurMaterial=HP(s,e,t),this._ggxMaterial=VP(s,e,t)}return r}_compileMaterial(e){const t=new ls(new _i,e);this._renderer.compile(t,cl)}_sceneToCubeUV(e,t,i,r,s){const l=new Oi(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Pg),h.toneMapping=Tr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ls(new xc,new yS({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,m=!0):(p.color.copy(Pg),m=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const A=this._cubeSize;oa(r,y*A,b>2?A:0,A,A),h.setRenderTarget(r),m&&h.render(g,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ro||e.mapping===Va;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;oa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,cl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:_}=this,g=this._sizeLods[i],p=3*g*(i>_-Rs?i-_+Rs:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,oa(s,p,m,3*g,2*g),r.setRenderTarget(s),r.render(a,cl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,oa(e,p,m,3*g,2*g),r.setRenderTarget(e),r.render(a,cl)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ho-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):ho;p>ho&&et(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ho}`);const m=[];let x=0;for(let w=0;w<ho;++w){const S=w/g,M=Math.exp(-S*S/2);m.push(M),w===0?x+=M:w<p&&(x+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-i;const y=this._sizeLods[r],A=3*y*(r>b-Rs?r-b+Rs:0),C=4*(this._cubeSize-y);oa(t,A,C,3*y,2*y),l.setRenderTarget(t),l.render(h,cl)}}function zP(n){const e=[],t=[],i=[];let r=n;const s=n-Rs+1+Rg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Rs?l=Rg[o-n+Rs-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,p=2,m=1,x=new Float32Array(g*_*d),b=new Float32Array(p*_*d),y=new Float32Array(m*_*d);for(let C=0;C<d;C++){const w=C%3*2/3-1,S=C>2?0:-1,M=[w,S,0,w+2/3,S,0,w+2/3,S+1,0,w,S,0,w+2/3,S+1,0,w,S+1,0];x.set(M,g*_*C),b.set(f,p*_*C);const B=[C,C,C,C,C,C];y.set(B,m*_*C)}const A=new _i;A.setAttribute("position",new si(x,g)),A.setAttribute("uv",new si(b,p)),A.setAttribute("faceIndex",new si(y,m)),i.push(new ls(A,null)),r>Rs&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ig(n,e,t){const i=new Ar(n,e,t);return i.texture.mapping=Tf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function VP(n,e,t){return new Dr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:BP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function HP(n,e,t){const i=new Float32Array(ho),r=new ee(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:ho,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Lg(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Ng(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function wf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class DS extends Ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new TS(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xc(5,5,5),s=new Dr({name:"CubemapFromEquirect",uniforms:Wa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pi,blending:Zr});s.uniforms.tEquirect.value=t;const o=new ls(r,s),a=t.minFilter;return t.minFilter===go&&(t.minFilter=bn),new Kw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function GP(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===eh||d===th)if(e.has(f)){const _=e.get(f).texture;return a(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const g=new DS(_.height);return g.fromEquirectangularTexture(n,f),e.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,_=d===eh||d===th,g=d===Ro||d===Va;if(_||g){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Dg(n)),p=_?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return _&&x&&x.height>0||g&&x&&l(x)?(i===null&&(i=new Dg(n)),p=_?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,d){return d===eh?f.mapping=Ro:d===th&&(f.mapping=Va),f}function l(f){let d=0;const _=6;for(let g=0;g<_;g++)f[g]!==void 0&&d++;return d===_}function c(f){const d=f.target;d.removeEventListener("dispose",c);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function WP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ef("WebGLRenderer: "+i+" extension not supported."),r}}}function XP(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(_===void 0)return;if(d!==null){const x=d.array;g=d.version;for(let b=0,y=x.length;b<y;b+=3){const A=x[b+0],C=x[b+1],w=x[b+2];f.push(A,C,C,w,w,A)}}else{const x=_.array;g=_.version;for(let b=0,y=x.length/3-1;b<y;b+=3){const A=b+0,C=b+1,w=b+2;f.push(A,C,C,w,w,A)}}const p=new(_.count>=65535?vS:gS)(f,1);p.version=g;const m=s.get(h);m&&e.remove(m),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function YP(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,s,f*o,_),t.update(d,i,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,i,1)}function h(f,d,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,g,0,_);let m=0;for(let x=0;x<_;x++)m+=d[x]*g[x];t.update(m,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function qP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:vt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function $P(n,e,t){const i=new WeakMap,r=new rn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let B=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",B)};var d=B;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let A=a.attributes.position.count*y,C=1;A>e.maxTextureSize&&(C=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*C*4*h),S=new pS(w,A,C,h);S.type=Sr,S.needsUpdate=!0;const M=y*4;for(let N=0;N<h;N++){const L=m[N],H=x[N],K=b[N],Y=A*C*4*N;for(let X=0;X<L.count;X++){const z=X*M;_===!0&&(r.fromBufferAttribute(L,X),w[Y+z+0]=r.x,w[Y+z+1]=r.y,w[Y+z+2]=r.z,w[Y+z+3]=0),g===!0&&(r.fromBufferAttribute(H,X),w[Y+z+4]=r.x,w[Y+z+5]=r.y,w[Y+z+6]=r.z,w[Y+z+7]=0),p===!0&&(r.fromBufferAttribute(K,X),w[Y+z+8]=r.x,w[Y+z+9]=r.y,w[Y+z+10]=r.z,w[Y+z+11]=K.itemSize===4?r.w:1)}}f={count:h,texture:S,size:new gt(A,C)},i.set(a,f),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function KP(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const jP={[Jx]:"LINEAR_TONE_MAPPING",[Qx]:"REINHARD_TONE_MAPPING",[eS]:"CINEON_TONE_MAPPING",[tS]:"ACES_FILMIC_TONE_MAPPING",[iS]:"AGX_TONE_MAPPING",[rS]:"NEUTRAL_TONE_MAPPING",[nS]:"CUSTOM_TONE_MAPPING"};function ZP(n,e,t,i,r){const s=new Ar(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Ar(e,t,{type:ss,depthBuffer:!1,stencilBuffer:!1}),a=new _i;a.setAttribute("position",new nr([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new nr([0,2,0,0,2,0],2));const l=new Yw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ls(a,l),u=new RS(-1,1,1,-1,0,1);let h=null,f=null,d=!1,_,g=null,p=[],m=!1;this.setSize=function(x,b){s.setSize(x,b),o.setSize(x,b);for(let y=0;y<p.length;y++){const A=p[y];A.setSize&&A.setSize(x,b)}},this.setEffects=function(x){p=x,m=p.length>0&&p[0].isRenderPass===!0;const b=s.width,y=s.height;for(let A=0;A<p.length;A++){const C=p[A];C.setSize&&C.setSize(b,y)}},this.begin=function(x,b){if(d||x.toneMapping===Tr&&p.length===0)return!1;if(g=b,b!==null){const y=b.width,A=b.height;(s.width!==y||s.height!==A)&&this.setSize(y,A)}return m===!1&&x.setRenderTarget(s),_=x.toneMapping,x.toneMapping=Tr,!0},this.hasRenderPass=function(){return m},this.end=function(x,b){x.toneMapping=_,d=!0;let y=s,A=o;for(let C=0;C<p.length;C++){const w=p[C];if(w.enabled!==!1&&(w.render(x,A,y,b),w.needsSwap!==!1)){const S=y;y=A,A=S}}if(h!==x.outputColorSpace||f!==x.toneMapping){h=x.outputColorSpace,f=x.toneMapping,l.defines={},xt.getTransfer(h)===Pt&&(l.defines.SRGB_TRANSFER="");const C=jP[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(g),x.render(c,u),g=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const IS=new Gn,dp=new uc(1,1),LS=new pS,NS=new gw,US=new TS,Ug=[],Fg=[],Og=new Float32Array(16),Bg=new Float32Array(9),kg=new Float32Array(4);function Ka(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ug[r];if(s===void 0&&(s=new Float32Array(r),Ug[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _n(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function gn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cf(n,e){let t=Fg[e];t===void 0&&(t=new Int32Array(e),Fg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function JP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function QP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2fv(this.addr,e),gn(t,e)}}function e2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;n.uniform3fv(this.addr,e),gn(t,e)}}function t2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4fv(this.addr,e),gn(t,e)}}function n2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(_n(t,i))return;kg.set(i),n.uniformMatrix2fv(this.addr,!1,kg),gn(t,i)}}function i2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(_n(t,i))return;Bg.set(i),n.uniformMatrix3fv(this.addr,!1,Bg),gn(t,i)}}function r2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(_n(t,i))return;Og.set(i),n.uniformMatrix4fv(this.addr,!1,Og),gn(t,i)}}function s2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function o2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2iv(this.addr,e),gn(t,e)}}function a2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3iv(this.addr,e),gn(t,e)}}function l2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4iv(this.addr,e),gn(t,e)}}function c2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function u2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2uiv(this.addr,e),gn(t,e)}}function f2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3uiv(this.addr,e),gn(t,e)}}function h2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4uiv(this.addr,e),gn(t,e)}}function d2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(dp.compareFunction=t.isReversedDepthBuffer()?xm:vm,s=dp):s=IS,t.setTexture2D(e||s,r)}function p2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||NS,r)}function m2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||US,r)}function _2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||LS,r)}function g2(n){switch(n){case 5126:return JP;case 35664:return QP;case 35665:return e2;case 35666:return t2;case 35674:return n2;case 35675:return i2;case 35676:return r2;case 5124:case 35670:return s2;case 35667:case 35671:return o2;case 35668:case 35672:return a2;case 35669:case 35673:return l2;case 5125:return c2;case 36294:return u2;case 36295:return f2;case 36296:return h2;case 35678:case 36198:case 36298:case 36306:case 35682:return d2;case 35679:case 36299:case 36307:return p2;case 35680:case 36300:case 36308:case 36293:return m2;case 36289:case 36303:case 36311:case 36292:return _2}}function v2(n,e){n.uniform1fv(this.addr,e)}function x2(n,e){const t=Ka(e,this.size,2);n.uniform2fv(this.addr,t)}function S2(n,e){const t=Ka(e,this.size,3);n.uniform3fv(this.addr,t)}function y2(n,e){const t=Ka(e,this.size,4);n.uniform4fv(this.addr,t)}function M2(n,e){const t=Ka(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function b2(n,e){const t=Ka(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function E2(n,e){const t=Ka(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function T2(n,e){n.uniform1iv(this.addr,e)}function A2(n,e){n.uniform2iv(this.addr,e)}function w2(n,e){n.uniform3iv(this.addr,e)}function C2(n,e){n.uniform4iv(this.addr,e)}function R2(n,e){n.uniform1uiv(this.addr,e)}function P2(n,e){n.uniform2uiv(this.addr,e)}function D2(n,e){n.uniform3uiv(this.addr,e)}function I2(n,e){n.uniform4uiv(this.addr,e)}function L2(n,e,t){const i=this.cache,r=e.length,s=Cf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=dp:o=IS;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function N2(n,e,t){const i=this.cache,r=e.length,s=Cf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||NS,s[o])}function U2(n,e,t){const i=this.cache,r=e.length,s=Cf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||US,s[o])}function F2(n,e,t){const i=this.cache,r=e.length,s=Cf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),gn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||LS,s[o])}function O2(n){switch(n){case 5126:return v2;case 35664:return x2;case 35665:return S2;case 35666:return y2;case 35674:return M2;case 35675:return b2;case 35676:return E2;case 5124:case 35670:return T2;case 35667:case 35671:return A2;case 35668:case 35672:return w2;case 35669:case 35673:return C2;case 5125:return R2;case 36294:return P2;case 36295:return D2;case 36296:return I2;case 35678:case 36198:case 36298:case 36306:case 35682:return L2;case 35679:case 36299:case 36307:return N2;case 35680:case 36300:case 36308:case 36293:return U2;case 36289:case 36303:case 36311:case 36292:return F2}}class B2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=g2(t.type)}}class k2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O2(t.type)}}class z2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function zg(n,e){n.seq.push(e),n.map[e.id]=e}function V2(n,e,t){const i=n.name,r=i.length;for(Lh.lastIndex=0;;){const s=Lh.exec(i),o=Lh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){zg(t,c===void 0?new B2(a,n,e):new k2(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new z2(a),zg(t,h)),t=h}}}class wu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);V2(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const H2=37297;let G2=0;function W2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Hg=new ot;function X2(n){xt._getMatrix(Hg,xt.workingColorSpace,n);const e=`mat3( ${Hg.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case ju:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+W2(n.getShaderSource(e),a)}else return s}function Y2(n,e){const t=X2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const q2={[Jx]:"Linear",[Qx]:"Reinhard",[eS]:"Cineon",[tS]:"ACESFilmic",[iS]:"AgX",[rS]:"Neutral",[nS]:"Custom"};function $2(n,e){const t=q2[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const eu=new ee;function K2(){xt.getLuminanceCoefficients(eu);const n=eu.x.toFixed(4),e=eu.y.toFixed(4),t=eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function Z2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function J2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function gl(n){return n!==""}function Wg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(n){return n.replace(Q2,tD)}const eD=new Map;function tD(n,e){let t=at[e];if(t===void 0){const i=eD.get(e);if(i!==void 0)t=at[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pp(t)}const nD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yg(n){return n.replace(nD,iD)}function iD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rD={[Mu]:"SHADOWMAP_TYPE_PCF",[_l]:"SHADOWMAP_TYPE_VSM"};function sD(n){return rD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oD={[Ro]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE",[Tf]:"ENVMAP_TYPE_CUBE_UV"};function aD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":oD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const lD={[Va]:"ENVMAP_MODE_REFRACTION"};function cD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uD={[Zx]:"ENVMAP_BLENDING_MULTIPLY",[KA]:"ENVMAP_BLENDING_MIX",[jA]:"ENVMAP_BLENDING_ADD"};function fD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":uD[n.combine]||"ENVMAP_BLENDING_NONE"}function hD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=sD(t),c=aD(t),u=cD(t),h=fD(t),f=hD(t),d=j2(t),_=Z2(s),g=r.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gl).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(gl).join(`
`),m.length>0&&(m+=`
`)):(p=[qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),m=[qg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?at.tonemapping_pars_fragment:"",t.toneMapping!==Tr?$2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Y2("linearToOutputTexel",t.outputColorSpace),K2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gl).join(`
`)),o=pp(o),o=Wg(o,t),o=Xg(o,t),a=pp(a),a=Wg(a,t),a=Xg(a,t),o=Yg(o),a=Yg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=x+p+o,y=x+m+a,A=Vg(r,r.VERTEX_SHADER,b),C=Vg(r,r.FRAGMENT_SHADER,y);r.attachShader(g,A),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(N){if(n.debug.checkShaderErrors){const L=r.getProgramInfoLog(g)||"",H=r.getShaderInfoLog(A)||"",K=r.getShaderInfoLog(C)||"",Y=L.trim(),X=H.trim(),z=K.trim();let se=!0,ue=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,A,C);else{const O=Gg(r,A,"vertex"),ve=Gg(r,C,"fragment");vt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+Y+`
`+O+`
`+ve)}else Y!==""?et("WebGLProgram: Program Info Log:",Y):(X===""||z==="")&&(ue=!1);ue&&(N.diagnostics={runnable:se,programLog:Y,vertexShader:{log:X,prefix:p},fragmentShader:{log:z,prefix:m}})}r.deleteShader(A),r.deleteShader(C),S=new wu(r,g),M=J2(r,g)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(g,H2)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=G2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=C,this}let pD=0;class mD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _D(e),t.set(e,i)),i}}class _D{constructor(e){this.id=pD++,this.code=e,this.usedTimes=0}}function gD(n,e,t,i,r,s){const o=new mS,a=new mD,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,M,B,N,L){const H=N.fog,K=L.geometry,Y=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,X=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,z=e.get(S.envMap||Y,X),se=z&&z.mapping===Tf?z.image.height:null,ue=d[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&et("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const O=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ve=O!==void 0?O.length:0;let xe=0;K.morphAttributes.position!==void 0&&(xe=1),K.morphAttributes.normal!==void 0&&(xe=2),K.morphAttributes.color!==void 0&&(xe=3);let ze,Ge,Xe,G;if(ue){const Ue=mr[ue];ze=Ue.vertexShader,Ge=Ue.fragmentShader}else ze=S.vertexShader,Ge=S.fragmentShader,a.update(S),Xe=a.getVertexShaderID(S),G=a.getFragmentShaderID(S);const F=n.getRenderTarget(),W=n.state.buffers.depth.getReversed(),Z=L.isInstancedMesh===!0,le=L.isBatchedMesh===!0,pe=!!S.map,D=!!S.matcap,R=!!z,k=!!S.aoMap,j=!!S.lightMap,$=!!S.bumpMap,I=!!S.normalMap,P=!!S.displacementMap,he=!!S.emissiveMap,fe=!!S.metalnessMap,ne=!!S.roughnessMap,de=S.anisotropy>0,E=S.clearcoat>0,v=S.dispersion>0,U=S.iridescence>0,Q=S.sheen>0,te=S.transmission>0,J=de&&!!S.anisotropyMap,Me=E&&!!S.clearcoatMap,me=E&&!!S.clearcoatNormalMap,Re=E&&!!S.clearcoatRoughnessMap,Te=U&&!!S.iridescenceMap,_e=U&&!!S.iridescenceThicknessMap,Se=Q&&!!S.sheenColorMap,Ee=Q&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,Ae=!!S.specularColorMap,Ke=!!S.specularIntensityMap,V=te&&!!S.transmissionMap,be=te&&!!S.thicknessMap,ye=!!S.gradientMap,De=!!S.alphaMap,ge=S.alphaTest>0,ce=!!S.alphaHash,Fe=!!S.extensions;let Ye=Tr;S.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const St={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:ze,fragmentShader:Ge,defines:S.defines,customVertexShaderID:Xe,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:le,batchingColor:le&&L._colorsTexture!==null,instancing:Z,instancingColor:Z&&L.instanceColor!==null,instancingMorph:Z&&L.morphTexture!==null,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ga,alphaToCoverage:!!S.alphaToCoverage,map:pe,matcap:D,envMap:R,envMapMode:R&&z.mapping,envMapCubeUVHeight:se,aoMap:k,lightMap:j,bumpMap:$,normalMap:I,displacementMap:P,emissiveMap:he,normalMapObjectSpace:I&&S.normalMapType===ew,normalMapTangentSpace:I&&S.normalMapType===QA,metalnessMap:fe,roughnessMap:ne,anisotropy:de,anisotropyMap:J,clearcoat:E,clearcoatMap:Me,clearcoatNormalMap:me,clearcoatRoughnessMap:Re,dispersion:v,iridescence:U,iridescenceMap:Te,iridescenceThicknessMap:_e,sheen:Q,sheenColorMap:Se,sheenRoughnessMap:Ee,specularMap:Pe,specularColorMap:Ae,specularIntensityMap:Ke,transmission:te,transmissionMap:V,thicknessMap:be,gradientMap:ye,opaque:S.transparent===!1&&S.blending===Ta&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:ge,alphaHash:ce,combine:S.combine,mapUv:pe&&_(S.map.channel),aoMapUv:k&&_(S.aoMap.channel),lightMapUv:j&&_(S.lightMap.channel),bumpMapUv:$&&_(S.bumpMap.channel),normalMapUv:I&&_(S.normalMap.channel),displacementMapUv:P&&_(S.displacementMap.channel),emissiveMapUv:he&&_(S.emissiveMap.channel),metalnessMapUv:fe&&_(S.metalnessMap.channel),roughnessMapUv:ne&&_(S.roughnessMap.channel),anisotropyMapUv:J&&_(S.anisotropyMap.channel),clearcoatMapUv:Me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(S.sheenRoughnessMap.channel),specularMapUv:Pe&&_(S.specularMap.channel),specularColorMapUv:Ae&&_(S.specularColorMap.channel),specularIntensityMapUv:Ke&&_(S.specularIntensityMap.channel),transmissionMapUv:V&&_(S.transmissionMap.channel),thicknessMapUv:be&&_(S.thicknessMap.channel),alphaMapUv:De&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(I||de),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!K.attributes.uv&&(pe||De),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||K.attributes.normal===void 0&&I===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:W,skinning:L.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:xe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:pe&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Pt,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&xt.getTransfer(S.emissiveMap.colorSpace)===Pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yr,flipSided:S.side===pi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)M.push(B),M.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(m(M,S),x(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function m(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const M=d[S.type];let B;if(M){const N=mr[M];B=Gw.clone(N.uniforms)}else B=S.uniforms;return B}function y(S,M){let B=u.get(M);return B!==void 0?++B.usedTimes:(B=new dD(n,M,S,r),c.push(B),u.set(M,B)),B}function A(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function C(S){a.remove(S)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:y,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:w}}function vD(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function xD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $g(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,_,g,p,m){let x=n[e];return x===void 0?(x={id:f.id,object:f,geometry:d,material:_,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},n[e]=x):(x.id=f.id,x.object=f,x.geometry=d,x.material=_,x.materialVariant=o(f),x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=p,x.group=m),e++,x}function l(f,d,_,g,p,m){const x=a(f,d,_,g,p,m);_.transmission>0?i.push(x):_.transparent===!0?r.push(x):t.push(x)}function c(f,d,_,g,p,m){const x=a(f,d,_,g,p,m);_.transmission>0?i.unshift(x):_.transparent===!0?r.unshift(x):t.unshift(x)}function u(f,d){t.length>1&&t.sort(f||xD),i.length>1&&i.sort(d||$g),r.length>1&&r.sort(d||$g)}function h(){for(let f=e,d=n.length;f<d;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function SD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Kg,n.set(i,[o])):r>=s.length?(o=new Kg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new mt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function MD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bD=0;function ED(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function TD(n){const e=new yD,t=MD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ee);const r=new ee,s=new Kt,o=new Kt;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,x=0,b=0,y=0,A=0,C=0,w=0;c.sort(ED);for(let M=0,B=c.length;M<B;M++){const N=c[M],L=N.color,H=N.intensity,K=N.distance;let Y=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ha?Y=N.shadow.map.texture:Y=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=L.r*H,h+=L.g*H,f+=L.b*H;else if(N.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(N.sh.coefficients[X],H);w++}else if(N.isDirectionalLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const z=N.shadow,se=t.get(N);se.shadowIntensity=z.intensity,se.shadowBias=z.bias,se.shadowNormalBias=z.normalBias,se.shadowRadius=z.radius,se.shadowMapSize=z.mapSize,i.directionalShadow[d]=se,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=N.shadow.matrix,x++}i.directional[d]=X,d++}else if(N.isSpotLight){const X=e.get(N);X.position.setFromMatrixPosition(N.matrixWorld),X.color.copy(L).multiplyScalar(H),X.distance=K,X.coneCos=Math.cos(N.angle),X.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),X.decay=N.decay,i.spot[g]=X;const z=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,z.updateMatrices(N),N.castShadow&&C++),i.spotLightMatrix[g]=z.matrix,N.castShadow){const se=t.get(N);se.shadowIntensity=z.intensity,se.shadowBias=z.bias,se.shadowNormalBias=z.normalBias,se.shadowRadius=z.radius,se.shadowMapSize=z.mapSize,i.spotShadow[g]=se,i.spotShadowMap[g]=Y,y++}g++}else if(N.isRectAreaLight){const X=e.get(N);X.color.copy(L).multiplyScalar(H),X.halfWidth.set(N.width*.5,0,0),X.halfHeight.set(0,N.height*.5,0),i.rectArea[p]=X,p++}else if(N.isPointLight){const X=e.get(N);if(X.color.copy(N.color).multiplyScalar(N.intensity),X.distance=N.distance,X.decay=N.decay,N.castShadow){const z=N.shadow,se=t.get(N);se.shadowIntensity=z.intensity,se.shadowBias=z.bias,se.shadowNormalBias=z.normalBias,se.shadowRadius=z.radius,se.shadowMapSize=z.mapSize,se.shadowCameraNear=z.camera.near,se.shadowCameraFar=z.camera.far,i.pointShadow[_]=se,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=N.shadow.matrix,b++}i.point[_]=X,_++}else if(N.isHemisphereLight){const X=e.get(N);X.skyColor.copy(N.color).multiplyScalar(H),X.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[m]=X,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==d||S.pointLength!==_||S.spotLength!==g||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==x||S.numPointShadows!==b||S.numSpotShadows!==y||S.numSpotMaps!==A||S.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,S.directionalLength=d,S.pointLength=_,S.spotLength=g,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=x,S.numPointShadows=b,S.numSpotShadows=y,S.numSpotMaps=A,S.numLightProbes=w,i.version=bD++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const b=c[m];if(b.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),h++}else if(b.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(b.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function jg(n){const e=new TD(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function AD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new jg(n),e.set(r,[a])):s>=o.length?(a=new jg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const wD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RD=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],PD=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],Zg=new Kt,ul=new ee,Nh=new ee;function DD(n,e,t){let i=new MS;const r=new gt,s=new gt,o=new rn,a=new qw,l=new $w,c={},u=t.maxTextureSize,h={[Gs]:pi,[pi]:Gs,[Yr]:Yr},f=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:wD,fragmentShader:CD}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new _i;_.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ls(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let m=this.type;this.render=function(C,w,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;this.type===PA&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Mu);const M=n.getRenderTarget(),B=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Zr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const H=m!==this.type;H&&w.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(Y=>Y.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,Y=C.length;K<Y;K++){const X=C[K],z=X.shadow;if(z===void 0){et("WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const se=z.getFrameExtents();r.multiply(se),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/se.x),r.x=s.x*se.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/se.y),r.y=s.y*se.y,z.mapSize.y=s.y));const ue=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ue,z.map===null||H===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===_l){if(X.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ar(r.x,r.y,{format:Ha,type:ss,minFilter:bn,magFilter:bn,generateMipmaps:!1}),z.map.texture.name=X.name+".shadowMap",z.map.depthTexture=new uc(r.x,r.y,Sr),z.map.depthTexture.name=X.name+".shadowMapDepth",z.map.depthTexture.format=os,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=An,z.map.depthTexture.magFilter=An}else X.isPointLight?(z.map=new DS(r.x),z.map.depthTexture=new Vw(r.x,Pr)):(z.map=new Ar(r.x,r.y),z.map.depthTexture=new uc(r.x,r.y,Pr)),z.map.depthTexture.name=X.name+".shadowMap",z.map.depthTexture.format=os,this.type===Mu?(z.map.depthTexture.compareFunction=ue?xm:vm,z.map.depthTexture.minFilter=bn,z.map.depthTexture.magFilter=bn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=An,z.map.depthTexture.magFilter=An);z.camera.updateProjectionMatrix()}const O=z.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<O;ve++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(z.map),n.clear());const xe=z.getViewport(ve);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),L.viewport(o)}if(X.isPointLight){const xe=z.camera,ze=z.matrix,Ge=X.distance||xe.far;Ge!==xe.far&&(xe.far=Ge,xe.updateProjectionMatrix()),ul.setFromMatrixPosition(X.matrixWorld),xe.position.copy(ul),Nh.copy(xe.position),Nh.add(RD[ve]),xe.up.copy(PD[ve]),xe.lookAt(Nh),xe.updateMatrixWorld(),ze.makeTranslation(-ul.x,-ul.y,-ul.z),Zg.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Zg,xe.coordinateSystem,xe.reversedDepth)}else z.updateMatrices(X);i=z.getFrustum(),y(w,S,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===_l&&x(z,S),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(M,B,N)};function x(C,w){const S=e.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ar(r.x,r.y,{format:Ha,type:ss})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,S,f,g,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,S,d,g,null)}function b(C,w,S,M){let B=null;const N=S.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(N!==void 0)B=N;else if(B=S.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=B.uuid,H=w.uuid;let K=c[L];K===void 0&&(K={},c[L]=K);let Y=K[H];Y===void 0&&(Y=B.clone(),K[H]=Y,w.addEventListener("dispose",A)),B=Y}if(B.visible=w.visible,B.wireframe=w.wireframe,M===_l?B.side=w.shadowSide!==null?w.shadowSide:w.side:B.side=w.shadowSide!==null?w.shadowSide:h[w.side],B.alphaMap=w.alphaMap,B.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,B.map=w.map,B.clipShadows=w.clipShadows,B.clippingPlanes=w.clippingPlanes,B.clipIntersection=w.clipIntersection,B.displacementMap=w.displacementMap,B.displacementScale=w.displacementScale,B.displacementBias=w.displacementBias,B.wireframeLinewidth=w.wireframeLinewidth,B.linewidth=w.linewidth,S.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const L=n.properties.get(B);L.light=S}return B}function y(C,w,S,M,B){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&B===_l)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,C.matrixWorld);const H=e.update(C),K=C.material;if(Array.isArray(K)){const Y=H.groups;for(let X=0,z=Y.length;X<z;X++){const se=Y[X],ue=K[se.materialIndex];if(ue&&ue.visible){const O=b(C,ue,M,B);C.onBeforeShadow(n,C,w,S,H,O,se),n.renderBufferDirect(S,null,H,O,C,se),C.onAfterShadow(n,C,w,S,H,O,se)}}}else if(K.visible){const Y=b(C,K,M,B);C.onBeforeShadow(n,C,w,S,H,Y,null),n.renderBufferDirect(S,null,H,Y,C,null),C.onAfterShadow(n,C,w,S,H,Y,null)}}const L=C.children;for(let H=0,K=L.length;H<K;H++)y(L[H],w,S,M,B)}function A(C){C.target.removeEventListener("dispose",A);for(const S in c){const M=c[S],B=C.target.uuid;B in M&&(M[B].dispose(),delete M[B])}}}function ID(n,e){function t(){let V=!1;const be=new rn;let ye=null;const De=new rn(0,0,0,0);return{setMask:function(ge){ye!==ge&&!V&&(n.colorMask(ge,ge,ge,ge),ye=ge)},setLocked:function(ge){V=ge},setClear:function(ge,ce,Fe,Ye,St){St===!0&&(ge*=Ye,ce*=Ye,Fe*=Ye),be.set(ge,ce,Fe,Ye),De.equals(be)===!1&&(n.clearColor(ge,ce,Fe,Ye),De.copy(be))},reset:function(){V=!1,ye=null,De.set(-1,0,0,0)}}}function i(){let V=!1,be=!1,ye=null,De=null,ge=null;return{setReversed:function(ce){if(be!==ce){const Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),be=ce;const Ye=ge;ge=null,this.setClear(Ye)}},getReversed:function(){return be},setTest:function(ce){ce?F(n.DEPTH_TEST):W(n.DEPTH_TEST)},setMask:function(ce){ye!==ce&&!V&&(n.depthMask(ce),ye=ce)},setFunc:function(ce){if(be&&(ce=uw[ce]),De!==ce){switch(ce){case bd:n.depthFunc(n.NEVER);break;case Ed:n.depthFunc(n.ALWAYS);break;case Td:n.depthFunc(n.LESS);break;case za:n.depthFunc(n.LEQUAL);break;case Ad:n.depthFunc(n.EQUAL);break;case wd:n.depthFunc(n.GEQUAL);break;case Cd:n.depthFunc(n.GREATER);break;case Rd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=ce}},setLocked:function(ce){V=ce},setClear:function(ce){ge!==ce&&(ge=ce,be&&(ce=1-ce),n.clearDepth(ce))},reset:function(){V=!1,ye=null,De=null,ge=null,be=!1}}}function r(){let V=!1,be=null,ye=null,De=null,ge=null,ce=null,Fe=null,Ye=null,St=null;return{setTest:function(Ue){V||(Ue?F(n.STENCIL_TEST):W(n.STENCIL_TEST))},setMask:function(Ue){be!==Ue&&!V&&(n.stencilMask(Ue),be=Ue)},setFunc:function(Ue,Ve,st){(ye!==Ue||De!==Ve||ge!==st)&&(n.stencilFunc(Ue,Ve,st),ye=Ue,De=Ve,ge=st)},setOp:function(Ue,Ve,st){(ce!==Ue||Fe!==Ve||Ye!==st)&&(n.stencilOp(Ue,Ve,st),ce=Ue,Fe=Ve,Ye=st)},setLocked:function(Ue){V=Ue},setClear:function(Ue){St!==Ue&&(n.clearStencil(Ue),St=Ue)},reset:function(){V=!1,be=null,ye=null,De=null,ge=null,ce=null,Fe=null,Ye=null,St=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,x=null,b=null,y=null,A=null,C=null,w=new mt(0,0,0),S=0,M=!1,B=null,N=null,L=null,H=null,K=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,z=0;const se=n.getParameter(n.VERSION);se.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(se)[1]),X=z>=1):se.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),X=z>=2);let ue=null,O={};const ve=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),ze=new rn().fromArray(ve),Ge=new rn().fromArray(xe);function Xe(V,be,ye,De){const ge=new Uint8Array(4),ce=n.createTexture();n.bindTexture(V,ce),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<ye;Fe++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(be+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return ce}const G={};G[n.TEXTURE_2D]=Xe(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=Xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=Xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=Xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(n.DEPTH_TEST),o.setFunc(za),$(!1),I(Z_),F(n.CULL_FACE),k(Zr);function F(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function W(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function Z(V,be){return h[V]!==be?(n.bindFramebuffer(V,be),h[V]=be,V===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=be),V===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=be),!0):!1}function le(V,be){let ye=d,De=!1;if(V){ye=f.get(be),ye===void 0&&(ye=[],f.set(be,ye));const ge=V.textures;if(ye.length!==ge.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Fe=ge.length;ce<Fe;ce++)ye[ce]=n.COLOR_ATTACHMENT0+ce;ye.length=ge.length,De=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,De=!0);De&&n.drawBuffers(ye)}function pe(V){return _!==V?(n.useProgram(V),_=V,!0):!1}const D={[fo]:n.FUNC_ADD,[IA]:n.FUNC_SUBTRACT,[LA]:n.FUNC_REVERSE_SUBTRACT};D[NA]=n.MIN,D[UA]=n.MAX;const R={[FA]:n.ZERO,[OA]:n.ONE,[BA]:n.SRC_COLOR,[yd]:n.SRC_ALPHA,[WA]:n.SRC_ALPHA_SATURATE,[HA]:n.DST_COLOR,[zA]:n.DST_ALPHA,[kA]:n.ONE_MINUS_SRC_COLOR,[Md]:n.ONE_MINUS_SRC_ALPHA,[GA]:n.ONE_MINUS_DST_COLOR,[VA]:n.ONE_MINUS_DST_ALPHA,[XA]:n.CONSTANT_COLOR,[YA]:n.ONE_MINUS_CONSTANT_COLOR,[qA]:n.CONSTANT_ALPHA,[$A]:n.ONE_MINUS_CONSTANT_ALPHA};function k(V,be,ye,De,ge,ce,Fe,Ye,St,Ue){if(V===Zr){g===!0&&(W(n.BLEND),g=!1);return}if(g===!1&&(F(n.BLEND),g=!0),V!==DA){if(V!==p||Ue!==M){if((m!==fo||y!==fo)&&(n.blendEquation(n.FUNC_ADD),m=fo,y=fo),Ue)switch(V){case Ta:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFunc(n.ONE,n.ONE);break;case J_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Q_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:vt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ta:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case J_:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Q_:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",V);break}x=null,b=null,A=null,C=null,w.set(0,0,0),S=0,p=V,M=Ue}return}ge=ge||be,ce=ce||ye,Fe=Fe||De,(be!==m||ge!==y)&&(n.blendEquationSeparate(D[be],D[ge]),m=be,y=ge),(ye!==x||De!==b||ce!==A||Fe!==C)&&(n.blendFuncSeparate(R[ye],R[De],R[ce],R[Fe]),x=ye,b=De,A=ce,C=Fe),(Ye.equals(w)===!1||St!==S)&&(n.blendColor(Ye.r,Ye.g,Ye.b,St),w.copy(Ye),S=St),p=V,M=!1}function j(V,be){V.side===Yr?W(n.CULL_FACE):F(n.CULL_FACE);let ye=V.side===pi;be&&(ye=!ye),$(ye),V.blending===Ta&&V.transparent===!1?k(Zr):k(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const De=V.stencilWrite;a.setTest(De),De&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),he(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):W(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(V){B!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),B=V)}function I(V){V!==CA?(F(n.CULL_FACE),V!==N&&(V===Z_?n.cullFace(n.BACK):V===RA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):W(n.CULL_FACE),N=V}function P(V){V!==L&&(X&&n.lineWidth(V),L=V)}function he(V,be,ye){V?(F(n.POLYGON_OFFSET_FILL),(H!==be||K!==ye)&&(H=be,K=ye,o.getReversed()&&(be=-be),n.polygonOffset(be,ye))):W(n.POLYGON_OFFSET_FILL)}function fe(V){V?F(n.SCISSOR_TEST):W(n.SCISSOR_TEST)}function ne(V){V===void 0&&(V=n.TEXTURE0+Y-1),ue!==V&&(n.activeTexture(V),ue=V)}function de(V,be,ye){ye===void 0&&(ue===null?ye=n.TEXTURE0+Y-1:ye=ue);let De=O[ye];De===void 0&&(De={type:void 0,texture:void 0},O[ye]=De),(De.type!==V||De.texture!==be)&&(ue!==ye&&(n.activeTexture(ye),ue=ye),n.bindTexture(V,be||G[V]),De.type=V,De.texture=be)}function E(){const V=O[ue];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(V){vt("WebGLState:",V)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(V){vt("WebGLState:",V)}}function Q(){try{n.texSubImage2D(...arguments)}catch(V){vt("WebGLState:",V)}}function te(){try{n.texSubImage3D(...arguments)}catch(V){vt("WebGLState:",V)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(V){vt("WebGLState:",V)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(V){vt("WebGLState:",V)}}function me(){try{n.texStorage2D(...arguments)}catch(V){vt("WebGLState:",V)}}function Re(){try{n.texStorage3D(...arguments)}catch(V){vt("WebGLState:",V)}}function Te(){try{n.texImage2D(...arguments)}catch(V){vt("WebGLState:",V)}}function _e(){try{n.texImage3D(...arguments)}catch(V){vt("WebGLState:",V)}}function Se(V){ze.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),ze.copy(V))}function Ee(V){Ge.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Ge.copy(V))}function Pe(V,be){let ye=c.get(be);ye===void 0&&(ye=new WeakMap,c.set(be,ye));let De=ye.get(V);De===void 0&&(De=n.getUniformBlockIndex(be,V.name),ye.set(V,De))}function Ae(V,be){const De=c.get(be).get(V);l.get(be)!==De&&(n.uniformBlockBinding(be,De,V.__bindingPointIndex),l.set(be,De))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ue=null,O={},h={},f=new WeakMap,d=[],_=null,g=!1,p=null,m=null,x=null,b=null,y=null,A=null,C=null,w=new mt(0,0,0),S=0,M=!1,B=null,N=null,L=null,H=null,K=null,ze.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:W,bindFramebuffer:Z,drawBuffers:le,useProgram:pe,setBlending:k,setMaterial:j,setFlipSided:$,setCullFace:I,setLineWidth:P,setPolygonOffset:he,setScissorTest:fe,activeTexture:ne,bindTexture:de,unbindTexture:E,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Te,texImage3D:_e,updateUBOMapping:Pe,uniformBlockBinding:Ae,texStorage2D:me,texStorage3D:Re,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:J,compressedTexSubImage3D:Me,scissor:Se,viewport:Ee,reset:Ke}}function LD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return d?new OffscreenCanvas(E,v):Ju("canvas")}function g(E,v,U){let Q=1;const te=de(E);if((te.width>U||te.height>U)&&(Q=U/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const J=Math.floor(Q*te.width),Me=Math.floor(Q*te.height);h===void 0&&(h=_(J,Me));const me=v?_(J,Me):h;return me.width=J,me.height=Me,me.getContext("2d").drawImage(E,0,0,J,Me),et("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Me+")."),me}else return"data"in E&&et("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),E;return E}function p(E){return E.generateMipmaps}function m(E){n.generateMipmap(E)}function x(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(E,v,U,Q,te=!1){if(E!==null){if(n[E]!==void 0)return n[E];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=v;if(v===n.RED&&(U===n.FLOAT&&(J=n.R32F),U===n.HALF_FLOAT&&(J=n.R16F),U===n.UNSIGNED_BYTE&&(J=n.R8)),v===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(J=n.R8UI),U===n.UNSIGNED_SHORT&&(J=n.R16UI),U===n.UNSIGNED_INT&&(J=n.R32UI),U===n.BYTE&&(J=n.R8I),U===n.SHORT&&(J=n.R16I),U===n.INT&&(J=n.R32I)),v===n.RG&&(U===n.FLOAT&&(J=n.RG32F),U===n.HALF_FLOAT&&(J=n.RG16F),U===n.UNSIGNED_BYTE&&(J=n.RG8)),v===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(J=n.RG8UI),U===n.UNSIGNED_SHORT&&(J=n.RG16UI),U===n.UNSIGNED_INT&&(J=n.RG32UI),U===n.BYTE&&(J=n.RG8I),U===n.SHORT&&(J=n.RG16I),U===n.INT&&(J=n.RG32I)),v===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(J=n.RGB8UI),U===n.UNSIGNED_SHORT&&(J=n.RGB16UI),U===n.UNSIGNED_INT&&(J=n.RGB32UI),U===n.BYTE&&(J=n.RGB8I),U===n.SHORT&&(J=n.RGB16I),U===n.INT&&(J=n.RGB32I)),v===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),U===n.UNSIGNED_INT&&(J=n.RGBA32UI),U===n.BYTE&&(J=n.RGBA8I),U===n.SHORT&&(J=n.RGBA16I),U===n.INT&&(J=n.RGBA32I)),v===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),v===n.RGBA){const Me=te?ju:xt.getTransfer(Q);U===n.FLOAT&&(J=n.RGBA32F),U===n.HALF_FLOAT&&(J=n.RGBA16F),U===n.UNSIGNED_BYTE&&(J=Me===Pt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(E,v){let U;return E?v===null||v===Pr||v===cc?U=n.DEPTH24_STENCIL8:v===Sr?U=n.DEPTH32F_STENCIL8:v===lc&&(U=n.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Pr||v===cc?U=n.DEPTH_COMPONENT24:v===Sr?U=n.DEPTH_COMPONENT32F:v===lc&&(U=n.DEPTH_COMPONENT16),U}function A(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==An&&E.minFilter!==bn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){const v=E.target;v.removeEventListener("dispose",C),S(v),v.isVideoTexture&&u.delete(v)}function w(E){const v=E.target;v.removeEventListener("dispose",w),B(v)}function S(E){const v=i.get(E);if(v.__webglInit===void 0)return;const U=E.source,Q=f.get(U);if(Q){const te=Q[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(E),Object.keys(Q).length===0&&f.delete(U)}i.remove(E)}function M(E){const v=i.get(E);n.deleteTexture(v.__webglTexture);const U=E.source,Q=f.get(U);delete Q[v.__cacheKey],o.memory.textures--}function B(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(v.__webglFramebuffer[Q]))for(let te=0;te<v.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(v.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(v.__webglFramebuffer[Q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Q])}else{if(Array.isArray(v.__webglFramebuffer))for(let Q=0;Q<v.__webglFramebuffer.length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[Q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Q=0;Q<v.__webglColorRenderbuffer.length;Q++)v.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=E.textures;for(let Q=0,te=U.length;Q<te;Q++){const J=i.get(U[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(U[Q])}i.remove(E)}let N=0;function L(){N=0}function H(){const E=N;return E>=r.maxTextures&&et("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),N+=1,E}function K(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Y(E,v){const U=i.get(E);if(E.isVideoTexture&&fe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&U.__version!==E.version){const Q=E.image;if(Q===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{G(U,E,v);return}}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+v)}function X(E,v){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){G(U,E,v);return}else E.isExternalTexture&&(U.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+v)}function z(E,v){const U=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){G(U,E,v);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+v)}function se(E,v){const U=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&U.__version!==E.version){F(U,E,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+v)}const ue={[Pd]:n.REPEAT,[$r]:n.CLAMP_TO_EDGE,[Dd]:n.MIRRORED_REPEAT},O={[An]:n.NEAREST,[ZA]:n.NEAREST_MIPMAP_NEAREST,[Tc]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[nh]:n.LINEAR_MIPMAP_NEAREST,[go]:n.LINEAR_MIPMAP_LINEAR},ve={[tw]:n.NEVER,[ow]:n.ALWAYS,[nw]:n.LESS,[vm]:n.LEQUAL,[iw]:n.EQUAL,[xm]:n.GEQUAL,[rw]:n.GREATER,[sw]:n.NOTEQUAL};function xe(E,v){if(v.type===Sr&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===bn||v.magFilter===nh||v.magFilter===Tc||v.magFilter===go||v.minFilter===bn||v.minFilter===nh||v.minFilter===Tc||v.minFilter===go)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,ue[v.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ue[v.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ue[v.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,O[v.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,O[v.minFilter]),v.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===An||v.minFilter!==Tc&&v.minFilter!==go||v.type===Sr&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ze(E,v){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));const Q=v.source;let te=f.get(Q);te===void 0&&(te={},f.set(Q,te));const J=K(v);if(J!==E.__cacheKey){te[J]===void 0&&(te[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),te[J].usedTimes++;const Me=te[E.__cacheKey];Me!==void 0&&(te[E.__cacheKey].usedTimes--,Me.usedTimes===0&&M(v)),E.__cacheKey=J,E.__webglTexture=te[J].texture}return U}function Ge(E,v,U){return Math.floor(Math.floor(E/U)/v)}function Xe(E,v,U,Q){const J=E.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,U,Q,v.data);else{J.sort((_e,Se)=>_e.start-Se.start);let Me=0;for(let _e=1;_e<J.length;_e++){const Se=J[Me],Ee=J[_e],Pe=Se.start+Se.count,Ae=Ge(Ee.start,v.width,4),Ke=Ge(Se.start,v.width,4);Ee.start<=Pe+1&&Ae===Ke&&Ge(Ee.start+Ee.count-1,v.width,4)===Ae?Se.count=Math.max(Se.count,Ee.start+Ee.count-Se.start):(++Me,J[Me]=Ee)}J.length=Me+1;const me=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),Te=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let _e=0,Se=J.length;_e<Se;_e++){const Ee=J[_e],Pe=Math.floor(Ee.start/4),Ae=Math.ceil(Ee.count/4),Ke=Pe%v.width,V=Math.floor(Pe/v.width),be=Ae,ye=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,Ke,V,be,ye,U,Q,v.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,Te)}}function G(E,v,U){let Q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Q=n.TEXTURE_3D);const te=ze(E,v),J=v.source;t.bindTexture(Q,E.__webglTexture,n.TEXTURE0+U);const Me=i.get(J);if(J.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+U);const me=xt.getPrimaries(xt.workingColorSpace),Re=v.colorSpace===Ts?null:xt.getPrimaries(v.colorSpace),Te=v.colorSpace===Ts||me===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let _e=g(v.image,!1,r.maxTextureSize);_e=ne(v,_e);const Se=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type);let Pe=b(v.internalFormat,Se,Ee,v.colorSpace,v.isVideoTexture);xe(Q,v);let Ae;const Ke=v.mipmaps,V=v.isVideoTexture!==!0,be=Me.__version===void 0||te===!0,ye=J.dataReady,De=A(v,_e);if(v.isDepthTexture)Pe=y(v.format===vo,v.type),be&&(V?t.texStorage2D(n.TEXTURE_2D,1,Pe,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Pe,_e.width,_e.height,0,Se,Ee,null));else if(v.isDataTexture)if(Ke.length>0){V&&be&&t.texStorage2D(n.TEXTURE_2D,De,Pe,Ke[0].width,Ke[0].height);for(let ge=0,ce=Ke.length;ge<ce;ge++)Ae=Ke[ge],V?ye&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ae.width,Ae.height,Se,Ee,Ae.data):t.texImage2D(n.TEXTURE_2D,ge,Pe,Ae.width,Ae.height,0,Se,Ee,Ae.data);v.generateMipmaps=!1}else V?(be&&t.texStorage2D(n.TEXTURE_2D,De,Pe,_e.width,_e.height),ye&&Xe(v,_e,Se,Ee)):t.texImage2D(n.TEXTURE_2D,0,Pe,_e.width,_e.height,0,Se,Ee,_e.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){V&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Pe,Ke[0].width,Ke[0].height,_e.depth);for(let ge=0,ce=Ke.length;ge<ce;ge++)if(Ae=Ke[ge],v.format!==er)if(Se!==null)if(V){if(ye)if(v.layerUpdates.size>0){const Fe=Cg(Ae.width,Ae.height,v.format,v.type);for(const Ye of v.layerUpdates){const St=Ae.data.subarray(Ye*Fe/Ae.data.BYTES_PER_ELEMENT,(Ye+1)*Fe/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,Ye,Ae.width,Ae.height,1,Se,St)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ae.width,Ae.height,_e.depth,Se,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ge,Pe,Ae.width,Ae.height,_e.depth,0,Ae.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ge,0,0,0,Ae.width,Ae.height,_e.depth,Se,Ee,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ge,Pe,Ae.width,Ae.height,_e.depth,0,Se,Ee,Ae.data)}else{V&&be&&t.texStorage2D(n.TEXTURE_2D,De,Pe,Ke[0].width,Ke[0].height);for(let ge=0,ce=Ke.length;ge<ce;ge++)Ae=Ke[ge],v.format!==er?Se!==null?V?ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,ge,0,0,Ae.width,Ae.height,Se,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,ge,Pe,Ae.width,Ae.height,0,Ae.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ye&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Ae.width,Ae.height,Se,Ee,Ae.data):t.texImage2D(n.TEXTURE_2D,ge,Pe,Ae.width,Ae.height,0,Se,Ee,Ae.data)}else if(v.isDataArrayTexture)if(V){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Pe,_e.width,_e.height,_e.depth),ye)if(v.layerUpdates.size>0){const ge=Cg(_e.width,_e.height,v.format,v.type);for(const ce of v.layerUpdates){const Fe=_e.data.subarray(ce*ge/_e.data.BYTES_PER_ELEMENT,(ce+1)*ge/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,_e.width,_e.height,1,Se,Ee,Fe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Se,Ee,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,_e.width,_e.height,_e.depth,0,Se,Ee,_e.data);else if(v.isData3DTexture)V?(be&&t.texStorage3D(n.TEXTURE_3D,De,Pe,_e.width,_e.height,_e.depth),ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Se,Ee,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,_e.width,_e.height,_e.depth,0,Se,Ee,_e.data);else if(v.isFramebufferTexture){if(be)if(V)t.texStorage2D(n.TEXTURE_2D,De,Pe,_e.width,_e.height);else{let ge=_e.width,ce=_e.height;for(let Fe=0;Fe<De;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Pe,ge,ce,0,Se,Ee,null),ge>>=1,ce>>=1}}else if(Ke.length>0){if(V&&be){const ge=de(Ke[0]);t.texStorage2D(n.TEXTURE_2D,De,Pe,ge.width,ge.height)}for(let ge=0,ce=Ke.length;ge<ce;ge++)Ae=Ke[ge],V?ye&&t.texSubImage2D(n.TEXTURE_2D,ge,0,0,Se,Ee,Ae):t.texImage2D(n.TEXTURE_2D,ge,Pe,Se,Ee,Ae);v.generateMipmaps=!1}else if(V){if(be){const ge=de(_e);t.texStorage2D(n.TEXTURE_2D,De,Pe,ge.width,ge.height)}ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ee,_e)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Se,Ee,_e);p(v)&&m(Q),Me.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function F(E,v,U){if(v.image.length!==6)return;const Q=ze(E,v),te=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const J=i.get(te);if(te.version!==J.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);const Me=xt.getPrimaries(xt.workingColorSpace),me=v.colorSpace===Ts?null:xt.getPrimaries(v.colorSpace),Re=v.colorSpace===Ts||Me===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,_e=v.image[0]&&v.image[0].isDataTexture,Se=[];for(let ce=0;ce<6;ce++)!Te&&!_e?Se[ce]=g(v.image[ce],!0,r.maxCubemapSize):Se[ce]=_e?v.image[ce].image:v.image[ce],Se[ce]=ne(v,Se[ce]);const Ee=Se[0],Pe=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type),Ke=b(v.internalFormat,Pe,Ae,v.colorSpace),V=v.isVideoTexture!==!0,be=J.__version===void 0||Q===!0,ye=te.dataReady;let De=A(v,Ee);xe(n.TEXTURE_CUBE_MAP,v);let ge;if(Te){V&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ke,Ee.width,Ee.height);for(let ce=0;ce<6;ce++){ge=Se[ce].mipmaps;for(let Fe=0;Fe<ge.length;Fe++){const Ye=ge[Fe];v.format!==er?Pe!==null?V?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Ye.width,Ye.height,Pe,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,Ke,Ye.width,Ye.height,0,Ye.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Ye.width,Ye.height,Pe,Ae,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,Ke,Ye.width,Ye.height,0,Pe,Ae,Ye.data)}}}else{if(ge=v.mipmaps,V&&be){ge.length>0&&De++;const ce=de(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ke,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(_e){V?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Se[ce].width,Se[ce].height,Pe,Ae,Se[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ke,Se[ce].width,Se[ce].height,0,Pe,Ae,Se[ce].data);for(let Fe=0;Fe<ge.length;Fe++){const St=ge[Fe].image[ce].image;V?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,St.width,St.height,Pe,Ae,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,Ke,St.width,St.height,0,Pe,Ae,St.data)}}else{V?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe,Ae,Se[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ke,Pe,Ae,Se[ce]);for(let Fe=0;Fe<ge.length;Fe++){const Ye=ge[Fe];V?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,Pe,Ae,Ye.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,Ke,Pe,Ae,Ye.image[ce])}}}p(v)&&m(n.TEXTURE_CUBE_MAP),J.__version=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function W(E,v,U,Q,te,J){const Me=s.convert(U.format,U.colorSpace),me=s.convert(U.type),Re=b(U.internalFormat,Me,me,U.colorSpace),Te=i.get(v),_e=i.get(U);if(_e.__renderTarget=v,!Te.__hasExternalTextures){const Se=Math.max(1,v.width>>J),Ee=Math.max(1,v.height>>J);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,J,Re,Se,Ee,v.depth,0,Me,me,null):t.texImage2D(te,J,Re,Se,Ee,0,Me,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),he(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,te,_e.__webglTexture,0,P(v)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,te,_e.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(E,v,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),v.depthBuffer){const Q=v.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,J=y(v.stencilBuffer,te),Me=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;he(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(v),J,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(v),J,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,J,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,E)}else{const Q=v.textures;for(let te=0;te<Q.length;te++){const J=Q[te],Me=s.convert(J.format,J.colorSpace),me=s.convert(J.type),Re=b(J.internalFormat,Me,me,J.colorSpace);he(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(v),Re,v.width,v.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(v),Re,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Re,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(E,v,U){const Q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(v.depthTexture);if(te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q){if(te.__webglInit===void 0&&(te.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),xe(n.TEXTURE_CUBE_MAP,v.depthTexture);const Te=s.convert(v.depthTexture.format),_e=s.convert(v.depthTexture.type);let Se;v.depthTexture.format===os?Se=n.DEPTH_COMPONENT24:v.depthTexture.format===vo&&(Se=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Se,v.width,v.height,0,Te,_e,null)}}else Y(v.depthTexture,0);const J=te.__webglTexture,Me=P(v),me=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Re=v.depthTexture.format===vo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===os)he(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,me,J,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Re,me,J,0);else if(v.depthTexture.format===vo)he(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,me,J,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Re,me,J,0);else throw new Error("Unknown depthTexture format")}function pe(E){const v=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const Q=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Q){const te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=Q}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let Q=0;Q<6;Q++)le(v.__webglFramebuffer[Q],E,Q);else{const Q=E.texture.mipmaps;Q&&Q.length>0?le(v.__webglFramebuffer[0],E,0):le(v.__webglFramebuffer,E,0)}else if(U){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]===void 0)v.__webglDepthbuffer[Q]=n.createRenderbuffer(),Z(v.__webglDepthbuffer[Q],E,!1);else{const te=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}else{const Q=E.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Z(v.__webglDepthbuffer,E,!1);else{const te=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function D(E,v,U){const Q=i.get(E);v!==void 0&&W(Q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&pe(E)}function R(E){const v=E.texture,U=i.get(E),Q=i.get(v);E.addEventListener("dispose",w);const te=E.textures,J=E.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=v.version,o.memory.textures++),J){U.__webglFramebuffer=[];for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[me]=[];for(let Re=0;Re<v.mipmaps.length;Re++)U.__webglFramebuffer[me][Re]=n.createFramebuffer()}else U.__webglFramebuffer[me]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)U.__webglFramebuffer[me]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Me)for(let me=0,Re=te.length;me<Re;me++){const Te=i.get(te[me]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&he(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let me=0;me<te.length;me++){const Re=te[me];U.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[me]);const Te=s.convert(Re.format,Re.colorSpace),_e=s.convert(Re.type),Se=b(Re.internalFormat,Te,_e,Re.colorSpace,E.isXRRenderTarget===!0),Ee=P(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,U.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),xe(n.TEXTURE_CUBE_MAP,v);for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)W(U.__webglFramebuffer[me][Re],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re);else W(U.__webglFramebuffer[me],E,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(v)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let me=0,Re=te.length;me<Re;me++){const Te=te[me],_e=i.get(Te);let Se=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,_e.__webglTexture),xe(Se,Te),W(U.__webglFramebuffer,E,Te,n.COLOR_ATTACHMENT0+me,Se,0),p(Te)&&m(Se)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(me=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,Q.__webglTexture),xe(me,v),v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)W(U.__webglFramebuffer[Re],E,v,n.COLOR_ATTACHMENT0,me,Re);else W(U.__webglFramebuffer,E,v,n.COLOR_ATTACHMENT0,me,0);p(v)&&m(me),t.unbindTexture()}E.depthBuffer&&pe(E)}function k(E){const v=E.textures;for(let U=0,Q=v.length;U<Q;U++){const te=v[U];if(p(te)){const J=x(E),Me=i.get(te).__webglTexture;t.bindTexture(J,Me),m(J),t.unbindTexture()}}}const j=[],$=[];function I(E){if(E.samples>0){if(he(E)===!1){const v=E.textures,U=E.width,Q=E.height;let te=n.COLOR_BUFFER_BIT;const J=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(E),me=v.length>1;if(me)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Re=E.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]);const _e=i.get(v[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,U,Q,0,0,U,Q,te,n.NEAREST),l===!0&&(j.length=0,$.length=0,j.push(n.COLOR_ATTACHMENT0+Te),E.depthBuffer&&E.resolveDepthBuffer===!1&&(j.push(J),$.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]);const _e=i.get(v[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function P(E){return Math.min(r.maxSamples,E.samples)}function he(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function fe(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function ne(E,v){const U=E.colorSpace,Q=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==Ga&&U!==Ts&&(xt.getTransfer(U)===Pt?(Q!==er||te!==zi)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",U)),v}function de(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=z,this.setTextureCube=se,this.rebindTextures=D,this.setupRenderTarget=R,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=W,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ND(n,e){function t(i,r=Ts){let s;const o=xt.getTransfer(r);if(i===zi)return n.UNSIGNED_BYTE;if(i===dm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oS)return n.BYTE;if(i===aS)return n.SHORT;if(i===lc)return n.UNSIGNED_SHORT;if(i===hm)return n.INT;if(i===Pr)return n.UNSIGNED_INT;if(i===Sr)return n.FLOAT;if(i===ss)return n.HALF_FLOAT;if(i===uS)return n.ALPHA;if(i===fS)return n.RGB;if(i===er)return n.RGBA;if(i===os)return n.DEPTH_COMPONENT;if(i===vo)return n.DEPTH_STENCIL;if(i===hS)return n.RED;if(i===mm)return n.RED_INTEGER;if(i===Ha)return n.RG;if(i===_m)return n.RG_INTEGER;if(i===gm)return n.RGBA_INTEGER;if(i===bu||i===Eu||i===Tu||i===Au)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Eu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Eu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Au)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Id||i===Ld||i===Nd||i===Ud)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Id)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ud)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fd||i===Od||i===Bd||i===kd||i===zd||i===Vd||i===Hd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fd||i===Od)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===kd)return s.COMPRESSED_R11_EAC;if(i===zd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Vd)return s.COMPRESSED_RG11_EAC;if(i===Hd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gd||i===Wd||i===Xd||i===Yd||i===qd||i===$d||i===Kd||i===jd||i===Zd||i===Jd||i===Qd||i===ep||i===tp||i===np)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$d)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qd)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ep)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tp)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===np)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ip||i===rp||i===sp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ip)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===op||i===ap||i===lp||i===cp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===op)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ap)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cc?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const UD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new AS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dr({vertexShader:UD,fragmentShader:FD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ls(new Af(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BD extends qa{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",p=new OD,m={},x=t.getContextAttributes();let b=null,y=null;const A=[],C=[],w=new gt;let S=null;const M=new Oi;M.viewport=new rn;const B=new Oi;B.viewport=new rn;const N=[M,B],L=new jw;let H=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let F=A[G];return F===void 0&&(F=new uh,A[G]=F),F.getTargetRaySpace()},this.getControllerGrip=function(G){let F=A[G];return F===void 0&&(F=new uh,A[G]=F),F.getGripSpace()},this.getHand=function(G){let F=A[G];return F===void 0&&(F=new uh,A[G]=F),F.getHandSpace()};function Y(G){const F=C.indexOf(G.inputSource);if(F===-1)return;const W=A[F];W!==void 0&&(W.update(G.inputSource,G.frame,c||o),W.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",z);for(let G=0;G<A.length;G++){const F=C[G];F!==null&&(C[G]=null,A[G].disconnect(F))}H=null,K=null,p.reset();for(const G in m)delete m[G];e.setRenderTarget(b),d=null,f=null,h=null,r=null,y=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",X),r.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,Z=null,le=null;x.depth&&(le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=x.stencil?vo:os,Z=x.stencil?cc:Pr);const pe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ar(f.textureWidth,f.textureHeight,{format:er,type:zi,depthTexture:new uc(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const W={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ar(d.framebufferWidth,d.framebufferHeight,{format:er,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(G){for(let F=0;F<G.removed.length;F++){const W=G.removed[F],Z=C.indexOf(W);Z>=0&&(C[Z]=null,A[Z].disconnect(W))}for(let F=0;F<G.added.length;F++){const W=G.added[F];let Z=C.indexOf(W);if(Z===-1){for(let pe=0;pe<A.length;pe++)if(pe>=C.length){C.push(W),Z=pe;break}else if(C[pe]===null){C[pe]=W,Z=pe;break}if(Z===-1)break}const le=A[Z];le&&le.connect(W)}}const se=new ee,ue=new ee;function O(G,F,W){se.setFromMatrixPosition(F.matrixWorld),ue.setFromMatrixPosition(W.matrixWorld);const Z=se.distanceTo(ue),le=F.projectionMatrix.elements,pe=W.projectionMatrix.elements,D=le[14]/(le[10]-1),R=le[14]/(le[10]+1),k=(le[9]+1)/le[5],j=(le[9]-1)/le[5],$=(le[8]-1)/le[0],I=(pe[8]+1)/pe[0],P=D*$,he=D*I,fe=Z/(-$+I),ne=fe*-$;if(F.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ne),G.translateZ(fe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),le[10]===-1)G.projectionMatrix.copy(F.projectionMatrix),G.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const de=D+fe,E=R+fe,v=P-ne,U=he+(Z-ne),Q=k*R/E*de,te=j*R/E*de;G.projectionMatrix.makePerspective(v,U,Q,te,de,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ve(G,F){F===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(F.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let F=G.near,W=G.far;p.texture!==null&&(p.depthNear>0&&(F=p.depthNear),p.depthFar>0&&(W=p.depthFar)),L.near=B.near=M.near=F,L.far=B.far=M.far=W,(H!==L.near||K!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),H=L.near,K=L.far),L.layers.mask=G.layers.mask|6,M.layers.mask=L.layers.mask&-5,B.layers.mask=L.layers.mask&-3;const Z=G.parent,le=L.cameras;ve(L,Z);for(let pe=0;pe<le.length;pe++)ve(le[pe],Z);le.length===2?O(L,M,B):L.projectionMatrix.copy(M.projectionMatrix),xe(G,L,Z)};function xe(G,F,W){W===null?G.matrix.copy(F.matrixWorld):(G.matrix.copy(W.matrixWorld),G.matrix.invert(),G.matrix.multiply(F.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(F.projectionMatrix),G.projectionMatrixInverse.copy(F.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=fp*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(G){return m[G]};let ze=null;function Ge(G,F){if(u=F.getViewerPose(c||o),_=F,u!==null){const W=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Z=!1;W.length!==L.cameras.length&&(L.cameras.length=0,Z=!0);for(let R=0;R<W.length;R++){const k=W[R];let j=null;if(d!==null)j=d.getViewport(k);else{const I=h.getViewSubImage(f,k);j=I.viewport,R===0&&(e.setRenderTargetTextures(y,I.colorTexture,I.depthStencilTexture),e.setRenderTarget(y))}let $=N[R];$===void 0&&($=new Oi,$.layers.enable(R),$.viewport=new rn,N[R]=$),$.matrix.fromArray(k.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(k.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(j.x,j.y,j.width,j.height),R===0&&(L.matrix.copy($.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Z===!0&&L.cameras.push($)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=i.getBinding();const R=h.getDepthInformation(W[0]);R&&R.isValid&&R.texture&&p.init(R,r.renderState)}if(le&&le.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let R=0;R<W.length;R++){const k=W[R].camera;if(k){let j=m[k];j||(j=new AS,m[k]=j);const $=h.getCameraImage(k);j.sourceTexture=$}}}}for(let W=0;W<A.length;W++){const Z=C[W],le=A[W];Z!==null&&le!==void 0&&le.update(Z,F,c||o)}ze&&ze(G,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),_=null}const Xe=new PS;Xe.setAnimationLoop(Ge),this.setAnimationLoop=function(G){ze=G},this.dispose=function(){}}}const ro=new as,kD=new Kt;function zD(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,wS(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,x,b,y){m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===pi&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===pi&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),b=x.envMap,y=x.envMapRotation;b&&(p.envMap.value=b,ro.copy(y),ro.x*=-1,ro.y*=-1,ro.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ro.y*=-1,ro.z*=-1),p.envMapRotation.value.setFromMatrix4(kD.makeRotationFromEuler(ro)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=b*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pi&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){const y=b.program;i.uniformBlockBinding(x,y)}function c(x,b){let y=r[x.id];y===void 0&&(_(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",p));const A=b.program;i.updateUBOMapping(x,A);const C=e.render.frame;s[x.id]!==C&&(f(x),s[x.id]=C)}function u(x){const b=h();x.__bindingPointIndex=b;const y=n.createBuffer(),A=x.__size,C=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,y),y}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const b=r[x.id],y=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let C=0,w=y.length;C<w;C++){const S=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,B=S.length;M<B;M++){const N=S[M];if(d(N,C,M,A)===!0){const L=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let K=0;for(let Y=0;Y<H.length;Y++){const X=H[Y],z=g(X);typeof X=="number"||typeof X=="boolean"?(N.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,L+K,N.__data)):X.isMatrix3?(N.__data[0]=X.elements[0],N.__data[1]=X.elements[1],N.__data[2]=X.elements[2],N.__data[3]=0,N.__data[4]=X.elements[3],N.__data[5]=X.elements[4],N.__data[6]=X.elements[5],N.__data[7]=0,N.__data[8]=X.elements[6],N.__data[9]=X.elements[7],N.__data[10]=X.elements[8],N.__data[11]=0):(X.toArray(N.__data,K),K+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,b,y,A){const C=x.value,w=b+"_"+y;if(A[w]===void 0)return typeof C=="number"||typeof C=="boolean"?A[w]=C:A[w]=C.clone(),!0;{const S=A[w];if(typeof C=="number"||typeof C=="boolean"){if(S!==C)return A[w]=C,!0}else if(S.equals(C)===!1)return S.copy(C),!0}return!1}function _(x){const b=x.uniforms;let y=0;const A=16;for(let w=0,S=b.length;w<S;w++){const M=Array.isArray(b[w])?b[w]:[b[w]];for(let B=0,N=M.length;B<N;B++){const L=M[B],H=Array.isArray(L.value)?L.value:[L.value];for(let K=0,Y=H.length;K<Y;K++){const X=H[K],z=g(X),se=y%A,ue=se%z.boundary,O=se+ue;y+=ue,O!==0&&A-O<z.storage&&(y+=A-O),L.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=z.storage}}}const C=y%A;return C>0&&(y+=A-C),x.__size=y,x.__cache={},this}function g(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):et("WebGLRenderer: Unsupported uniform value type.",x),b}function p(x){const b=x.target;b.removeEventListener("dispose",p);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function m(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}const HD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cr=null;function GD(){return cr===null&&(cr=new Lw(HD,16,16,Ha,ss),cr.name="DFG_LUT",cr.minFilter=bn,cr.magFilter=bn,cr.wrapS=$r,cr.wrapT=$r,cr.generateMipmaps=!1,cr.needsUpdate=!0),cr}class WD{constructor(e={}){const{canvas:t=lw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=zi}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const g=d,p=new Set([gm,_m,mm]),m=new Set([zi,Pr,lc,cc,dm,pm]),x=new Uint32Array(4),b=new Int32Array(4);let y=null,A=null;const C=[],w=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let B=!1;this._outputColorSpace=Fi;let N=0,L=0,H=null,K=-1,Y=null;const X=new rn,z=new rn;let se=null;const ue=new mt(0);let O=0,ve=t.width,xe=t.height,ze=1,Ge=null,Xe=null;const G=new rn(0,0,ve,xe),F=new rn(0,0,ve,xe);let W=!1;const Z=new MS;let le=!1,pe=!1;const D=new Kt,R=new ee,k=new rn,j={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function I(){return H===null?ze:1}let P=i;function he(T,q){return t.getContext(T,q)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fm}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",St,!1),P===null){const q="webgl2";if(P=he(q,T),P===null)throw he(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw vt("WebGLRenderer: "+T.message),T}let fe,ne,de,E,v,U,Q,te,J,Me,me,Re,Te,_e,Se,Ee,Pe,Ae,Ke,V,be,ye,De;function ge(){fe=new WP(P),fe.init(),be=new ND(P,fe),ne=new FP(P,fe,e,be),de=new ID(P,fe),ne.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),E=new qP(P),v=new vD,U=new LD(P,fe,de,v,ne,be,E),Q=new GP(M),te=new Jw(P),ye=new NP(P,te),J=new XP(P,te,E,ye),Me=new KP(P,J,te,ye,E),Ae=new $P(P,ne,U),Se=new OP(v),me=new gD(M,Q,fe,ne,ye,Se),Re=new zD(M,v),Te=new SD,_e=new AD(fe),Pe=new LP(M,Q,de,Me,_,l),Ee=new DD(M,Me,ne),De=new VD(P,E,ne,de),Ke=new UP(P,fe,E),V=new YP(P,fe,E),E.programs=me.programs,M.capabilities=ne,M.extensions=fe,M.properties=v,M.renderLists=Te,M.shadowMap=Ee,M.state=de,M.info=E}ge(),g!==zi&&(S=new ZP(g,t.width,t.height,r,s));const ce=new BD(M,P);this.xr=ce,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(T){T!==void 0&&(ze=T,this.setSize(ve,xe,!1))},this.getSize=function(T){return T.set(ve,xe)},this.setSize=function(T,q,oe=!0){if(ce.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=T,xe=q,t.width=Math.floor(T*ze),t.height=Math.floor(q*ze),oe===!0&&(t.style.width=T+"px",t.style.height=q+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(ve*ze,xe*ze).floor()},this.setDrawingBufferSize=function(T,q,oe){ve=T,xe=q,ze=oe,t.width=Math.floor(T*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(g===zi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(X)},this.getViewport=function(T){return T.copy(G)},this.setViewport=function(T,q,oe,re){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,q,oe,re),de.viewport(X.copy(G).multiplyScalar(ze).round())},this.getScissor=function(T){return T.copy(F)},this.setScissor=function(T,q,oe,re){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,q,oe,re),de.scissor(z.copy(F).multiplyScalar(ze).round())},this.getScissorTest=function(){return W},this.setScissorTest=function(T){de.setScissorTest(W=T)},this.setOpaqueSort=function(T){Ge=T},this.setTransparentSort=function(T){Xe=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,oe=!0){let re=0;if(T){let ie=!1;if(H!==null){const we=H.texture.format;ie=p.has(we)}if(ie){const we=H.texture.type,Ie=m.has(we),Ce=Pe.getClearColor(),Be=Pe.getClearAlpha(),Oe=Ce.r,rt=Ce.g,lt=Ce.b;Ie?(x[0]=Oe,x[1]=rt,x[2]=lt,x[3]=Be,P.clearBufferuiv(P.COLOR,0,x)):(b[0]=Oe,b[1]=rt,b[2]=lt,b[3]=Be,P.clearBufferiv(P.COLOR,0,b))}else re|=P.COLOR_BUFFER_BIT}q&&(re|=P.DEPTH_BUFFER_BIT),oe&&(re|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&P.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",St,!1),Pe.dispose(),Te.dispose(),_e.dispose(),v.dispose(),Q.dispose(),Me.dispose(),ye.dispose(),De.dispose(),me.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Qe),ce.removeEventListener("sessionend",en),nt.stop()};function Fe(T){T.preventDefault(),Qu("WebGLRenderer: Context Lost."),B=!0}function Ye(){Qu("WebGLRenderer: Context Restored."),B=!1;const T=E.autoReset,q=Ee.enabled,oe=Ee.autoUpdate,re=Ee.needsUpdate,ie=Ee.type;ge(),E.autoReset=T,Ee.enabled=q,Ee.autoUpdate=oe,Ee.needsUpdate=re,Ee.type=ie}function St(T){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ue(T){const q=T.target;q.removeEventListener("dispose",Ue),Ve(q)}function Ve(T){st(T),v.remove(T)}function st(T){const q=v.get(T).programs;q!==void 0&&(q.forEach(function(oe){me.releaseProgram(oe)}),T.isShaderMaterial&&me.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,oe,re,ie,we){q===null&&(q=j);const Ie=ie.isMesh&&ie.matrixWorld.determinant()<0,Ce=Ii(T,q,oe,re,ie);de.setMaterial(re,Ie);let Be=oe.index,Oe=1;if(re.wireframe===!0){if(Be=J.getWireframeAttribute(oe),Be===void 0)return;Oe=2}const rt=oe.drawRange,lt=oe.attributes.position;let We=rt.start*Oe,Dt=(rt.start+rt.count)*Oe;we!==null&&(We=Math.max(We,we.start*Oe),Dt=Math.min(Dt,(we.start+we.count)*Oe)),Be!==null?(We=Math.max(We,0),Dt=Math.min(Dt,Be.count)):lt!=null&&(We=Math.max(We,0),Dt=Math.min(Dt,lt.count));const tn=Dt-We;if(tn<0||tn===1/0)return;ye.setup(ie,re,Ce,oe,Be);let jt,It=Ke;if(Be!==null&&(jt=te.get(Be),It=V,It.setIndex(jt)),ie.isMesh)re.wireframe===!0?(de.setLineWidth(re.wireframeLinewidth*I()),It.setMode(P.LINES)):It.setMode(P.TRIANGLES);else if(ie.isLine){let Dn=re.linewidth;Dn===void 0&&(Dn=1),de.setLineWidth(Dn*I()),ie.isLineSegments?It.setMode(P.LINES):ie.isLineLoop?It.setMode(P.LINE_LOOP):It.setMode(P.LINE_STRIP)}else ie.isPoints?It.setMode(P.POINTS):ie.isSprite&&It.setMode(P.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)ef("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))It.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Dn=ie._multiDrawStarts,He=ie._multiDrawCounts,gi=ie._multiDrawCount,yt=Be?te.get(Be).bytesPerElement:1,$i=v.get(re).currentProgram.getUniforms();for(let or=0;or<gi;or++)$i.setValue(P,"_gl_DrawID",or),It.render(Dn[or]/yt,He[or])}else if(ie.isInstancedMesh)It.renderInstances(We,tn,ie.count);else if(oe.isInstancedBufferGeometry){const Dn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,He=Math.min(oe.instanceCount,Dn);It.renderInstances(We,tn,He)}else It.render(We,tn)};function Le(T,q,oe){T.transparent===!0&&T.side===Yr&&T.forceSinglePass===!1?(T.side=pi,T.needsUpdate=!0,Rn(T,q,oe),T.side=Gs,T.needsUpdate=!0,Rn(T,q,oe),T.side=Yr):Rn(T,q,oe)}this.compile=function(T,q,oe=null){oe===null&&(oe=T),A=_e.get(oe),A.init(q),w.push(A),oe.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(A.pushLight(ie),ie.castShadow&&A.pushShadow(ie))}),T!==oe&&T.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(A.pushLight(ie),ie.castShadow&&A.pushShadow(ie))}),A.setupLights();const re=new Set;return T.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const we=ie.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){const Ce=we[Ie];Le(Ce,oe,ie),re.add(Ce)}else Le(we,oe,ie),re.add(we)}),A=w.pop(),re},this.compileAsync=function(T,q,oe=null){const re=this.compile(T,q,oe);return new Promise(ie=>{function we(){if(re.forEach(function(Ie){v.get(Ie).currentProgram.isReady()&&re.delete(Ie)}),re.size===0){ie(T);return}setTimeout(we,10)}fe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Je=null;function qe(T){Je&&Je(T)}function Qe(){nt.stop()}function en(){nt.start()}const nt=new PS;nt.setAnimationLoop(qe),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(T){Je=T,ce.setAnimationLoop(T),T===null?nt.stop():nt.start()},ce.addEventListener("sessionstart",Qe),ce.addEventListener("sessionend",en),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const oe=ce.enabled===!0&&ce.isPresenting===!0,re=S!==null&&(H===null||oe)&&S.begin(M,H);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(q),q=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,q,H),A=_e.get(T,w.length),A.init(q),w.push(A),D.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Z.setFromProjectionMatrix(D,yr,q.reversedDepth),pe=this.localClippingEnabled,le=Se.init(this.clippingPlanes,pe),y=Te.get(T,C.length),y.init(),C.push(y),ce.enabled===!0&&ce.isPresenting===!0){const Ie=M.xr.getDepthSensingMesh();Ie!==null&&Ht(Ie,q,-1/0,M.sortObjects)}Ht(T,q,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(Ge,Xe),$=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,$&&Pe.addToRenderList(y,T),this.info.render.frame++,le===!0&&Se.beginShadows();const ie=A.state.shadowsArray;if(Ee.render(ie,T,q),le===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&S.hasRenderPass())===!1){const Ie=y.opaque,Ce=y.transmissive;if(A.setupLights(),q.isArrayCamera){const Be=q.cameras;if(Ce.length>0)for(let Oe=0,rt=Be.length;Oe<rt;Oe++){const lt=Be[Oe];Gt(Ie,Ce,T,lt)}$&&Pe.render(T);for(let Oe=0,rt=Be.length;Oe<rt;Oe++){const lt=Be[Oe];cn(y,T,lt,lt.viewport)}}else Ce.length>0&&Gt(Ie,Ce,T,q),$&&Pe.render(T),cn(y,T,q)}H!==null&&L===0&&(U.updateMultisampleRenderTarget(H),U.updateRenderTargetMipmap(H)),re&&S.end(M),T.isScene===!0&&T.onAfterRender(M,T,q),ye.resetDefaultState(),K=-1,Y=null,w.pop(),w.length>0?(A=w[w.length-1],le===!0&&Se.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?y=C[C.length-1]:y=null};function Ht(T,q,oe,re){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)oe=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){re&&k.setFromMatrixPosition(T.matrixWorld).applyMatrix4(D);const Ie=Me.update(T),Ce=T.material;Ce.visible&&y.push(T,Ie,Ce,oe,k.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const Ie=Me.update(T),Ce=T.material;if(re&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),k.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),k.copy(Ie.boundingSphere.center)),k.applyMatrix4(T.matrixWorld).applyMatrix4(D)),Array.isArray(Ce)){const Be=Ie.groups;for(let Oe=0,rt=Be.length;Oe<rt;Oe++){const lt=Be[Oe],We=Ce[lt.materialIndex];We&&We.visible&&y.push(T,Ie,We,oe,k.z,lt)}}else Ce.visible&&y.push(T,Ie,Ce,oe,k.z,null)}}const we=T.children;for(let Ie=0,Ce=we.length;Ie<Ce;Ie++)Ht(we[Ie],q,oe,re)}function cn(T,q,oe,re){const{opaque:ie,transmissive:we,transparent:Ie}=T;A.setupLightsView(oe),le===!0&&Se.setGlobalState(M.clippingPlanes,oe),re&&de.viewport(X.copy(re)),ie.length>0&&Rt(ie,q,oe),we.length>0&&Rt(we,q,oe),Ie.length>0&&Rt(Ie,q,oe),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Gt(T,q,oe,re){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[re.id]===void 0){const We=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[re.id]=new Ar(1,1,{generateMipmaps:!0,type:We?ss:zi,minFilter:go,samples:ne.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const we=A.state.transmissionRenderTarget[re.id],Ie=re.viewport||X;we.setSize(Ie.z*M.transmissionResolutionScale,Ie.w*M.transmissionResolutionScale);const Ce=M.getRenderTarget(),Be=M.getActiveCubeFace(),Oe=M.getActiveMipmapLevel();M.setRenderTarget(we),M.getClearColor(ue),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),$&&Pe.render(oe);const rt=M.toneMapping;M.toneMapping=Tr;const lt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),A.setupLightsView(re),le===!0&&Se.setGlobalState(M.clippingPlanes,re),Rt(T,oe,re),U.updateMultisampleRenderTarget(we),U.updateRenderTargetMipmap(we),fe.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Dt=0,tn=q.length;Dt<tn;Dt++){const jt=q[Dt],{object:It,geometry:Dn,material:He,group:gi}=jt;if(He.side===Yr&&It.layers.test(re.layers)){const yt=He.side;He.side=pi,He.needsUpdate=!0,bt(It,oe,re,Dn,He,gi),He.side=yt,He.needsUpdate=!0,We=!0}}We===!0&&(U.updateMultisampleRenderTarget(we),U.updateRenderTargetMipmap(we))}M.setRenderTarget(Ce,Be,Oe),M.setClearColor(ue,O),lt!==void 0&&(re.viewport=lt),M.toneMapping=rt}function Rt(T,q,oe){const re=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,we=T.length;ie<we;ie++){const Ie=T[ie],{object:Ce,geometry:Be,group:Oe}=Ie;let rt=Ie.material;rt.allowOverride===!0&&re!==null&&(rt=re),Ce.layers.test(oe.layers)&&bt(Ce,q,oe,Be,rt,Oe)}}function bt(T,q,oe,re,ie,we){T.onBeforeRender(M,q,oe,re,ie,we),T.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ie.onBeforeRender(M,q,oe,re,T,we),ie.transparent===!0&&ie.side===Yr&&ie.forceSinglePass===!1?(ie.side=pi,ie.needsUpdate=!0,M.renderBufferDirect(oe,q,re,ie,T,we),ie.side=Gs,ie.needsUpdate=!0,M.renderBufferDirect(oe,q,re,ie,T,we),ie.side=Yr):M.renderBufferDirect(oe,q,re,ie,T,we),T.onAfterRender(M,q,oe,re,ie,we)}function Rn(T,q,oe){q.isScene!==!0&&(q=j);const re=v.get(T),ie=A.state.lights,we=A.state.shadowsArray,Ie=ie.state.version,Ce=me.getParameters(T,ie.state,we,q,oe),Be=me.getProgramCacheKey(Ce);let Oe=re.programs;re.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,re.fog=q.fog;const rt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;re.envMap=Q.get(T.envMap||re.environment,rt),re.envMapRotation=re.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",Ue),Oe=new Map,re.programs=Oe);let lt=Oe.get(Be);if(lt!==void 0){if(re.currentProgram===lt&&re.lightsStateVersion===Ie)return Pn(T,Ce),lt}else Ce.uniforms=me.getUniforms(T),T.onBeforeCompile(Ce,M),lt=me.acquireProgram(Ce,Be),Oe.set(Be,lt),re.uniforms=Ce.uniforms;const We=re.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=Se.uniform),Pn(T,Ce),re.needsLights=fn(T),re.lightsStateVersion=Ie,re.needsLights&&(We.ambientLightColor.value=ie.state.ambient,We.lightProbe.value=ie.state.probe,We.directionalLights.value=ie.state.directional,We.directionalLightShadows.value=ie.state.directionalShadow,We.spotLights.value=ie.state.spot,We.spotLightShadows.value=ie.state.spotShadow,We.rectAreaLights.value=ie.state.rectArea,We.ltc_1.value=ie.state.rectAreaLTC1,We.ltc_2.value=ie.state.rectAreaLTC2,We.pointLights.value=ie.state.point,We.pointLightShadows.value=ie.state.pointShadow,We.hemisphereLights.value=ie.state.hemi,We.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,We.spotLightMatrix.value=ie.state.spotLightMatrix,We.spotLightMap.value=ie.state.spotLightMap,We.pointShadowMatrix.value=ie.state.pointShadowMatrix),re.currentProgram=lt,re.uniformsList=null,lt}function Bt(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=wu.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Pn(T,q){const oe=v.get(T);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function Ii(T,q,oe,re,ie){q.isScene!==!0&&(q=j),U.resetTextureUnits();const we=q.fog,Ie=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?q.environment:null,Ce=H===null?M.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ga,Be=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Oe=Q.get(re.envMap||Ie,Be),rt=re.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,lt=!!oe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),We=!!oe.morphAttributes.position,Dt=!!oe.morphAttributes.normal,tn=!!oe.morphAttributes.color;let jt=Tr;re.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(jt=M.toneMapping);const It=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Dn=It!==void 0?It.length:0,He=v.get(re),gi=A.state.lights;if(le===!0&&(pe===!0||T!==Y)){const xn=T===Y&&re.id===K;Se.setState(re,T,xn)}let yt=!1;re.version===He.__version?(He.needsLights&&He.lightsStateVersion!==gi.state.version||He.outputColorSpace!==Ce||ie.isBatchedMesh&&He.batching===!1||!ie.isBatchedMesh&&He.batching===!0||ie.isBatchedMesh&&He.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&He.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&He.instancing===!1||!ie.isInstancedMesh&&He.instancing===!0||ie.isSkinnedMesh&&He.skinning===!1||!ie.isSkinnedMesh&&He.skinning===!0||ie.isInstancedMesh&&He.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&He.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&He.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&He.instancingMorph===!1&&ie.morphTexture!==null||He.envMap!==Oe||re.fog===!0&&He.fog!==we||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Se.numPlanes||He.numIntersection!==Se.numIntersection)||He.vertexAlphas!==rt||He.vertexTangents!==lt||He.morphTargets!==We||He.morphNormals!==Dt||He.morphColors!==tn||He.toneMapping!==jt||He.morphTargetsCount!==Dn)&&(yt=!0):(yt=!0,He.__version=re.version);let $i=He.currentProgram;yt===!0&&($i=Rn(re,q,ie));let or=!1,Ys=!1,ko=!1;const Ut=$i.getUniforms(),Tn=He.uniforms;if(de.useProgram($i.program)&&(or=!0,Ys=!0,ko=!0),re.id!==K&&(K=re.id,Ys=!0),or||Y!==T){de.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ut.setValue(P,"projectionMatrix",T.projectionMatrix),Ut.setValue(P,"viewMatrix",T.matrixWorldInverse);const fs=Ut.map.cameraPosition;fs!==void 0&&fs.setValue(P,R.setFromMatrixPosition(T.matrixWorld)),ne.logarithmicDepthBuffer&&Ut.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ut.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),Y!==T&&(Y=T,Ys=!0,ko=!0)}if(He.needsLights&&(gi.state.directionalShadowMap.length>0&&Ut.setValue(P,"directionalShadowMap",gi.state.directionalShadowMap,U),gi.state.spotShadowMap.length>0&&Ut.setValue(P,"spotShadowMap",gi.state.spotShadowMap,U),gi.state.pointShadowMap.length>0&&Ut.setValue(P,"pointShadowMap",gi.state.pointShadowMap,U)),ie.isSkinnedMesh){Ut.setOptional(P,ie,"bindMatrix"),Ut.setOptional(P,ie,"bindMatrixInverse");const xn=ie.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ut.setValue(P,"boneTexture",xn.boneTexture,U))}ie.isBatchedMesh&&(Ut.setOptional(P,ie,"batchingTexture"),Ut.setValue(P,"batchingTexture",ie._matricesTexture,U),Ut.setOptional(P,ie,"batchingIdTexture"),Ut.setValue(P,"batchingIdTexture",ie._indirectTexture,U),Ut.setOptional(P,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Ut.setValue(P,"batchingColorTexture",ie._colorsTexture,U));const us=oe.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0)&&Ae.update(ie,oe,$i),(Ys||He.receiveShadow!==ie.receiveShadow)&&(He.receiveShadow=ie.receiveShadow,Ut.setValue(P,"receiveShadow",ie.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&q.environment!==null&&(Tn.envMapIntensity.value=q.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=GD()),Ys&&(Ut.setValue(P,"toneMappingExposure",M.toneMappingExposure),He.needsLights&&un(Tn,ko),we&&re.fog===!0&&Re.refreshFogUniforms(Tn,we),Re.refreshMaterialUniforms(Tn,re,ze,xe,A.state.transmissionRenderTarget[T.id]),wu.upload(P,Bt(He),Tn,U)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(wu.upload(P,Bt(He),Tn,U),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ut.setValue(P,"center",ie.center),Ut.setValue(P,"modelViewMatrix",ie.modelViewMatrix),Ut.setValue(P,"normalMatrix",ie.normalMatrix),Ut.setValue(P,"modelMatrix",ie.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const xn=re.uniformsGroups;for(let fs=0,zo=xn.length;fs<zo;fs++){const Pm=xn[fs];De.update(Pm,$i),De.bind(Pm,$i)}}return $i}function un(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function fn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(T,q,oe){const re=v.get(T);re.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),v.get(T.texture).__webglTexture=q,v.get(T.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:oe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const oe=v.get(T);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const vn=P.createFramebuffer();this.setRenderTarget=function(T,q=0,oe=0){H=T,N=q,L=oe;let re=null,ie=!1,we=!1;if(T){const Ce=v.get(T);if(Ce.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(P.FRAMEBUFFER,Ce.__webglFramebuffer),X.copy(T.viewport),z.copy(T.scissor),se=T.scissorTest,de.viewport(X),de.scissor(z),de.setScissorTest(se),K=-1;return}else if(Ce.__webglFramebuffer===void 0)U.setupRenderTarget(T);else if(Ce.__hasExternalTextures)U.rebindTextures(T,v.get(T.texture).__webglTexture,v.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const rt=T.depthTexture;if(Ce.__boundDepthTexture!==rt){if(rt!==null&&v.has(rt)&&(T.width!==rt.image.width||T.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(T)}}const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);const Oe=v.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[q])?re=Oe[q][oe]:re=Oe[q],ie=!0):T.samples>0&&U.useMultisampledRTT(T)===!1?re=v.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?re=Oe[oe]:re=Oe,X.copy(T.viewport),z.copy(T.scissor),se=T.scissorTest}else X.copy(G).multiplyScalar(ze).floor(),z.copy(F).multiplyScalar(ze).floor(),se=W;if(oe!==0&&(re=vn),de.bindFramebuffer(P.FRAMEBUFFER,re)&&de.drawBuffers(T,re),de.viewport(X),de.scissor(z),de.setScissorTest(se),ie){const Ce=v.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ce.__webglTexture,oe)}else if(we){const Ce=q;for(let Be=0;Be<T.textures.length;Be++){const Oe=v.get(T.textures[Be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Be,Oe.__webglTexture,oe,Ce)}}else if(T!==null&&oe!==0){const Ce=v.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ce.__webglTexture,oe)}K=-1},this.readRenderTargetPixels=function(T,q,oe,re,ie,we,Ie,Ce=0){if(!(T&&T.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){de.bindFramebuffer(P.FRAMEBUFFER,Be);try{const Oe=T.textures[Ce],rt=Oe.format,lt=Oe.type;if(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ce),!ne.textureFormatReadable(rt)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(lt)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-re&&oe>=0&&oe<=T.height-ie&&P.readPixels(q,oe,re,ie,be.convert(rt),be.convert(lt),we)}finally{const Oe=H!==null?v.get(H).__webglFramebuffer:null;de.bindFramebuffer(P.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(T,q,oe,re,ie,we,Ie,Ce=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=v.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be)if(q>=0&&q<=T.width-re&&oe>=0&&oe<=T.height-ie){de.bindFramebuffer(P.FRAMEBUFFER,Be);const Oe=T.textures[Ce],rt=Oe.format,lt=Oe.type;if(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ce),!ne.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.bufferData(P.PIXEL_PACK_BUFFER,we.byteLength,P.STREAM_READ),P.readPixels(q,oe,re,ie,be.convert(rt),be.convert(lt),0);const Dt=H!==null?v.get(H).__webglFramebuffer:null;de.bindFramebuffer(P.FRAMEBUFFER,Dt);const tn=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await cw(P,tn,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,we),P.deleteBuffer(We),P.deleteSync(tn),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,oe=0){const re=Math.pow(2,-oe),ie=Math.floor(T.image.width*re),we=Math.floor(T.image.height*re),Ie=q!==null?q.x:0,Ce=q!==null?q.y:0;U.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,oe,0,0,Ie,Ce,ie,we),de.unbindTexture()};const Ir=P.createFramebuffer(),Bo=P.createFramebuffer();this.copyTextureToTexture=function(T,q,oe=null,re=null,ie=0,we=0){let Ie,Ce,Be,Oe,rt,lt,We,Dt,tn;const jt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(oe!==null)Ie=oe.max.x-oe.min.x,Ce=oe.max.y-oe.min.y,Be=oe.isBox3?oe.max.z-oe.min.z:1,Oe=oe.min.x,rt=oe.min.y,lt=oe.isBox3?oe.min.z:0;else{const Tn=Math.pow(2,-ie);Ie=Math.floor(jt.width*Tn),Ce=Math.floor(jt.height*Tn),T.isDataArrayTexture?Be=jt.depth:T.isData3DTexture?Be=Math.floor(jt.depth*Tn):Be=1,Oe=0,rt=0,lt=0}re!==null?(We=re.x,Dt=re.y,tn=re.z):(We=0,Dt=0,tn=0);const It=be.convert(q.format),Dn=be.convert(q.type);let He;q.isData3DTexture?(U.setTexture3D(q,0),He=P.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(U.setTexture2DArray(q,0),He=P.TEXTURE_2D_ARRAY):(U.setTexture2D(q,0),He=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);const gi=P.getParameter(P.UNPACK_ROW_LENGTH),yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),$i=P.getParameter(P.UNPACK_SKIP_PIXELS),or=P.getParameter(P.UNPACK_SKIP_ROWS),Ys=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,jt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Oe),P.pixelStorei(P.UNPACK_SKIP_ROWS,rt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,lt);const ko=T.isDataArrayTexture||T.isData3DTexture,Ut=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const Tn=v.get(T),us=v.get(q),xn=v.get(Tn.__renderTarget),fs=v.get(us.__renderTarget);de.bindFramebuffer(P.READ_FRAMEBUFFER,xn.__webglFramebuffer),de.bindFramebuffer(P.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let zo=0;zo<Be;zo++)ko&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get(T).__webglTexture,ie,lt+zo),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get(q).__webglTexture,we,tn+zo)),P.blitFramebuffer(Oe,rt,Ie,Ce,We,Dt,Ie,Ce,P.DEPTH_BUFFER_BIT,P.NEAREST);de.bindFramebuffer(P.READ_FRAMEBUFFER,null),de.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(ie!==0||T.isRenderTargetTexture||v.has(T)){const Tn=v.get(T),us=v.get(q);de.bindFramebuffer(P.READ_FRAMEBUFFER,Ir),de.bindFramebuffer(P.DRAW_FRAMEBUFFER,Bo);for(let xn=0;xn<Be;xn++)ko?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Tn.__webglTexture,ie,lt+xn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Tn.__webglTexture,ie),Ut?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,us.__webglTexture,we,tn+xn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,us.__webglTexture,we),ie!==0?P.blitFramebuffer(Oe,rt,Ie,Ce,We,Dt,Ie,Ce,P.COLOR_BUFFER_BIT,P.NEAREST):Ut?P.copyTexSubImage3D(He,we,We,Dt,tn+xn,Oe,rt,Ie,Ce):P.copyTexSubImage2D(He,we,We,Dt,Oe,rt,Ie,Ce);de.bindFramebuffer(P.READ_FRAMEBUFFER,null),de.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ut?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(He,we,We,Dt,tn,Ie,Ce,Be,It,Dn,jt.data):q.isCompressedArrayTexture?P.compressedTexSubImage3D(He,we,We,Dt,tn,Ie,Ce,Be,It,jt.data):P.texSubImage3D(He,we,We,Dt,tn,Ie,Ce,Be,It,Dn,jt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,we,We,Dt,Ie,Ce,It,Dn,jt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,we,We,Dt,jt.width,jt.height,It,jt.data):P.texSubImage2D(P.TEXTURE_2D,we,We,Dt,Ie,Ce,It,Dn,jt);P.pixelStorei(P.UNPACK_ROW_LENGTH,gi),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$i),P.pixelStorei(P.UNPACK_SKIP_ROWS,or),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ys),we===0&&q.generateMipmaps&&P.generateMipmap(He),de.unbindTexture()},this.initRenderTarget=function(T){v.get(T).__webglFramebuffer===void 0&&U.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?U.setTextureCube(T,0):T.isData3DTexture?U.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?U.setTexture2DArray(T,0):U.setTexture2D(T,0),de.unbindTexture()},this.resetState=function(){N=0,L=0,H=null,de.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const tu=(1+Math.sqrt(5))/2;function XD(){let n=null,e=null,t=null,i=null,r=null,s=null,o=null,a=null,l=null,c=null;const u=[],h=[],f=[],d=[];let _=null,g=0,p=0,m=0,x=0,b=0,y=null,A=null,C=null;const w={x:0,y:0},S={x:0,y:0};let M=0,B=0,N=0,L=!1,H=!1,K=0,Y=0;const X=1e3/40,z=(G,F,W,Z,le)=>{const pe=Math.exp(-(G*G/(m*m*.7))),D=Math.cos(G*.09+F*.035+W*.42),R=Math.cos(G*(.09*tu)-F*.052+W*.25+tu),k=Math.cos(G*.047+F*(.05/tu)-W*.16+.7),j=(D*.6+R*.32+k*.2)*pe*3.4,$=G-Z,I=F-le,P=Math.sqrt($*$+I*I),he=Math.exp(-P*.09),fe=Math.cos(P*.28-W*3.4),ne=he*fe*M*1.25;return j+ne},se=G=>{g=G?18:30,p=G?72:120,m=G?44:62,x=G?28:42,b=Math.floor(p*.72),y=new Float32Array(g*p),A=new Float32Array(g*p),C=new Float32Array(g);const F=g*(p-1),W=new Float32Array(F*6),Z=new Float32Array(F*6),le=new Float32Array(g*3),pe=new Float32Array(g*3),D=new mt(9675464),R=new mt(16119807),k=new mt(13030655),j=new mt(16777215);let $=0;for(let he=0;he<g;he+=1){const fe=g>1?he/(g-1):0,ne=(fe-.5)*x;C[he]=he*(tu*.41);for(let U=0;U<p;U+=1){const te=((p>1?U/(p-1):0)-.5)*m,J=he*p+U;if(y[J]=te,A[J]=ne,U<p-1){const Me=J+1;W[$]=te,W[$+1]=0,W[$+2]=ne,W[$+3]=y[Me],W[$+4]=0,W[$+5]=A[Me];const me=.2+fe*.55,Re=D.clone().lerp(R,me);Z[$]=Re.r,Z[$+1]=Re.g,Z[$+2]=Re.b,Z[$+3]=Re.r,Z[$+4]=Re.g,Z[$+5]=Re.b,$+=6}}const de=he*p+b;le[he*3]=y[de],le[he*3+1]=0,le[he*3+2]=A[de];const E=.3+fe*.55,v=k.clone().lerp(j,E);pe[he*3]=v.r,pe[he*3+1]=v.g,pe[he*3+2]=v.b}r=new _i;const I=new si(W,3);I.setUsage(tg),r.setAttribute("position",I),r.setAttribute("color",new si(Z,3)),a=new _i;const P=new si(le,3);P.setUsage(tg),a.setAttribute("position",P),a.setAttribute("color",new si(pe,3)),s=new bS({transparent:!0,opacity:G?.34:.42,vertexColors:!0,blending:Nl}),l=new ES({size:G?.36:.32,transparent:!0,opacity:G?.78:.82,vertexColors:!0,depthWrite:!1,blending:Nl}),o=new Bw(r,s),c=new kw(a,l),o.position.y=-4,c.position.y=-4,o.rotation.x=-.38,c.rotation.x=-.38,e.add(o),e.add(c)},ue=(G,F)=>{const W=document.createElement("canvas"),Z=W.getContext("2d");if(!Z)return null;const le=F?28:34,pe=F?24:30,D=F?16:18;Z.font=`600 ${le}px JetBrains Mono, monospace`;const R=Math.ceil(Z.measureText(G).width);W.width=R+pe*2,W.height=le+D*2,Z.clearRect(0,0,W.width,W.height),Z.font=`600 ${le}px JetBrains Mono, monospace`,Z.fillStyle="rgba(220, 228, 255, 0.95)",Z.textBaseline="middle",Z.shadowColor="rgba(190, 208, 255, 0.45)",Z.shadowBlur=10,Z.fillText(G,pe,W.height/2);const k=new zw(W);k.minFilter=bn,k.magFilter=bn,k.needsUpdate=!0;const j=new xS({map:k,transparent:!0,opacity:F?.14:.16,depthWrite:!1,blending:Nl}),$=new Dw(j),I=F?.0072:.0085;return $.scale.set(W.width*I,W.height*I,1),f.push(k),h.push(j),u.push($),$},O=G=>{u.length=0,h.length=0,f.length=0,d.length=0;const F=["phi = (1 + sqrt(5)) / 2","f(x) = cos(phi*x) + cos(x/phi)","y(t) = A cos(wt) + B sin(wt)","sum(k=1..n) k = n(n+1)/2","d/dx[cos(x)] = -sin(x)","O(n log n)","PHP: Queue::dispatch($job)","PHP: Cache::remember(key, ttl)","JS: Promise.all(tasks)","JS: async (req) => await service()","Dart: Future.wait(tasks)","Dart: Stream.periodic(Duration())","Redis: INCR metrics:requests","SQL: SELECT ... FOR UPDATE","JWT.verify(token)","rate_limit(req.ip, 60)","cos(a+b)=cos(a)cos(b)-sin(a)sin(b)","sin^2(x)+cos^2(x)=1"],W=G?12:18,Z=G?12:16,le=G?34:52,pe=G?-1.2:-2,D=G?13:15;for(let R=0;R<W;R+=1){const k=F[R%F.length],j=ue(k,G);if(!j)continue;const $=(Math.random()-.5)*le,I=pe+Math.random()*(D-pe),P=-5+(Math.random()-.5)*Z;j.position.set($,I,P),e.add(j),d.push({baseX:$,baseY:I,baseZ:P,baseScaleX:j.scale.x,baseScaleY:j.scale.y,driftX:.22+Math.random()*.55,driftY:.18+Math.random()*.42,phase:Math.random()*Math.PI*2,speed:.22+Math.random()*.42,parallax:.16+Math.random()*.28,baseOpacity:G?.12:.14,scalePhase:Math.random()*Math.PI*2})}},ve=G=>{if(u.length!==0)for(let F=0;F<u.length;F+=1){const W=u[F],Z=d[F];if(!W||!Z)continue;const le=G*Z.speed+Z.phase,pe=Math.sin(le)*Z.driftX,D=Math.cos(le*.86)*Z.driftY,R=S.x*Z.parallax*2.2,k=-S.y*Z.parallax*1.4;W.position.x=Z.baseX+pe+R,W.position.y=Z.baseY+D+k,W.position.z=Z.baseZ;const j=(Math.sin(G*.7+Z.scalePhase)+1)*.02;W.scale.set(Z.baseScaleX*(1+j),Z.baseScaleY*(1+j),1);const $=h[F];$&&($.opacity=Math.min(.28,Z.baseOpacity+M*.12+j*.8))}},xe=G=>{if(!r||!a)return;const F=r.attributes.position.array,W=a.attributes.position.array,Z=S.x*m*.44,le=S.y*x*.44,D=1+Math.sin(G*.7)*.05+M*.35;let R=0;for(let k=0;k<g;k+=1){const j=C[k];for(let fe=0;fe<p-1;fe+=1){const ne=k*p+fe,de=ne+1,E=y[ne],v=A[ne],U=y[de],Q=A[de],te=z(E,v,G+j,Z,le)*D,J=z(U,Q,G+j,Z,le)*D;F[R]=E,F[R+1]=te,F[R+2]=v,F[R+3]=U,F[R+4]=J,F[R+5]=Q,R+=6}const $=k*p+b,I=y[$],P=A[$],he=z(I,P,G+j,Z,le)*D;W[k*3]=I,W[k*3+1]=he,W[k*3+2]=P}r.attributes.position.needsUpdate=!0,a.attributes.position.needsUpdate=!0,s&&(s.opacity=.35+M*.16),l&&(l.opacity=.78+M*.16,l.size=.32+M*.05)},ze=()=>{if(!t||!i)return;const G=window.innerWidth,F=window.innerHeight;t.aspect=G/F,t.updateProjectionMatrix(),i.setSize(G,F,!1)},Ge=G=>{const F=window.innerWidth||1,W=window.innerHeight||1;if(w.x=(G.clientX/F-.5)*2,w.y=(G.clientY/W-.5)*2,!L){L=!0,B=G.clientX,N=G.clientY;return}const Z=G.clientX-B,le=G.clientY-N,pe=Math.min(1,Math.hypot(Z,le)/26);M=Math.min(1,M+pe*.23),B=G.clientX,N=G.clientY},Xe=G=>{if(_=requestAnimationFrame(Xe),G-Y<X||(Y=G,!e||!t||!i))return;const F=(G-K)/1e3;if(S.x+=(w.x-S.x)*.04,S.y+=(w.y-S.y)*.04,M=Math.max(0,M-.012),o&&c){const W=Math.sin(F*.18)*.02,Z=S.x*.12+W,le=-.38+S.y*.05;o.rotation.y=Z,c.rotation.y=Z,o.rotation.x=le,c.rotation.x=le}t.position.x=S.x*1.6,t.position.y=3.5+S.y*1.2,t.lookAt(0,-2.2,0),xe(F),ve(F),i.render(e,t)};No(()=>{if(n=document.getElementById("heroMathCanvas"),!!n){H=window.matchMedia("(prefers-reduced-motion: reduce)").matches;try{e=new Tw,t=new Oi(46,window.innerWidth/window.innerHeight,.1,200),t.position.set(0,3.5,46),i=new WD({canvas:n,alpha:!0,antialias:!0,powerPreference:"low-power"}),i.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),i.setClearAlpha(0),ze(),se(window.innerWidth<=968),O(window.innerWidth<=968),K=performance.now(),H?(xe(0),ve(0),i.render(e,t)):(_=requestAnimationFrame(Xe),window.addEventListener("mousemove",Ge,{passive:!0}))}catch{}window.addEventListener("resize",ze)}}),Uo(()=>{window.removeEventListener("resize",ze),window.removeEventListener("mousemove",Ge),_!==null&&cancelAnimationFrame(_),o&&e&&e.remove(o),c&&e&&e.remove(c),u.forEach(G=>{e&&G&&e.remove(G)}),r&&r.dispose(),s&&s.dispose(),a&&a.dispose(),l&&l.dispose(),h.forEach(G=>{G&&G.dispose()}),f.forEach(G=>{G&&G.dispose()}),i&&(i.dispose(),typeof i.forceContextLoss=="function"&&i.forceContextLoss())})}function YD(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function qD(n,e,t){return e&&YD(n.prototype,e),n}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wn,Cu,Ti,Ps,Ds,wa,FS,lo,Ul,OS,Kr,Ji,BS,kS=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},zS=1,ma=[],ft=[],wr=[],Fl=Date.now,mp=function(e,t){return t},$D=function(){var e=Ul.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ft),r.push.apply(r,wr),ft=i,wr=r,mp=function(o,a){return t[o](a)}},Bs=function(e,t){return~wr.indexOf(e)&&wr[wr.indexOf(e)+1][t]},Ol=function(e){return!!~OS.indexOf(e)},$n=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Yn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},nu="scrollLeft",iu="scrollTop",_p=function(){return Kr&&Kr.isPressed||ft.cache++},sf=function(e,t){var i=function r(s){if(s||s===0){zS&&(Ti.history.scrollRestoration="manual");var o=Kr&&Kr.isPressed;s=r.v=Math.round(s)||(Kr&&Kr.iOS?1:0),e(s),r.cacheID=ft.cache,o&&mp("ss",s)}else(t||ft.cache!==r.cacheID||mp("ref"))&&(r.cacheID=ft.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ri={s:nu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sf(function(n){return arguments.length?Ti.scrollTo(n,pn.sc()):Ti.pageXOffset||Ps[nu]||Ds[nu]||wa[nu]||0})},pn={s:iu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ri,sc:sf(function(n){return arguments.length?Ti.scrollTo(ri.sc(),n):Ti.pageYOffset||Ps[iu]||Ds[iu]||wa[iu]||0})},li=function(e,t){return(t&&t._ctx&&t._ctx.selector||wn.utils.toArray)(e)[0]||(typeof e=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},KD=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Ws=function(e,t){var i=t.s,r=t.sc;Ol(e)&&(e=Ps.scrollingElement||Ds);var s=ft.indexOf(e),o=r===pn.sc?1:2;!~s&&(s=ft.push(e)-1),ft[s+o]||$n(e,"scroll",_p);var a=ft[s+o],l=a||(ft[s+o]=sf(Bs(e,i),!0)||(Ol(e)?r:sf(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=wn.getProperty(e,"scrollBehavior")==="smooth"),l},gp=function(e,t,i){var r=e,s=e,o=Fl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Fl();g||p-o>l?(s=r,r=_,a=o,o=p):i?r+=_:r=s+(_-s)/(p-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},f=function(_){var g=a,p=s,m=Fl();return(_||_===0)&&_!==r&&u(_),o===a||m-a>c?0:(r+(i?p:-p))/((i?m:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},fl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Jg=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},VS=function(){Ul=wn.core.globals().ScrollTrigger,Ul&&Ul.core&&$D()},HS=function(e){return wn=e||kS(),!Cu&&wn&&typeof document<"u"&&document.body&&(Ti=window,Ps=document,Ds=Ps.documentElement,wa=Ps.body,OS=[Ti,Ps,Ds,wa],wn.utils.clamp,BS=wn.core.context||function(){},lo="onpointerenter"in wa?"pointer":"mouse",FS=sn.isTouch=Ti.matchMedia&&Ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ji=sn.eventTypes=("ontouchstart"in Ds?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ds?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zS=0},500),VS(),Cu=1),Cu};ri.op=pn;ft.cache=0;var sn=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Cu||HS(wn)||console.warn("Please gsap.registerPlugin(Observer)"),Ul||VS();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,h=i.onStop,f=i.onStopDelay,d=i.ignore,_=i.wheelSpeed,g=i.event,p=i.onDragStart,m=i.onDragEnd,x=i.onDrag,b=i.onPress,y=i.onRelease,A=i.onRight,C=i.onLeft,w=i.onUp,S=i.onDown,M=i.onChangeX,B=i.onChangeY,N=i.onChange,L=i.onToggleX,H=i.onToggleY,K=i.onHover,Y=i.onHoverEnd,X=i.onMove,z=i.ignoreCheck,se=i.isNormalizer,ue=i.onGestureStart,O=i.onGestureEnd,ve=i.onWheel,xe=i.onEnable,ze=i.onDisable,Ge=i.onClick,Xe=i.scrollSpeed,G=i.capture,F=i.allowClicks,W=i.lockAxis,Z=i.onLockAxis;this.target=a=li(a)||Ds,this.vars=i,d&&(d=wn.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,Xe=Xe||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ti.getComputedStyle(wa).lineHeight)||22);var le,pe,D,R,k,j,$,I=this,P=0,he=0,fe=i.passive||!u&&i.passive!==!1,ne=Ws(a,ri),de=Ws(a,pn),E=ne(),v=de(),U=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ji[0]==="pointerdown",Q=Ol(a),te=a.ownerDocument||Ps,J=[0,0,0],Me=[0,0,0],me=0,Re=function(){return me=Fl()},Te=function(Ve,st){return(I.event=Ve)&&d&&KD(Ve.target,d)||st&&U&&Ve.pointerType!=="touch"||z&&z(Ve,st)},_e=function(){I._vx.reset(),I._vy.reset(),pe.pause(),h&&h(I)},Se=function(){var Ve=I.deltaX=Jg(J),st=I.deltaY=Jg(Me),Le=Math.abs(Ve)>=r,Je=Math.abs(st)>=r;N&&(Le||Je)&&N(I,Ve,st,J,Me),Le&&(A&&I.deltaX>0&&A(I),C&&I.deltaX<0&&C(I),M&&M(I),L&&I.deltaX<0!=P<0&&L(I),P=I.deltaX,J[0]=J[1]=J[2]=0),Je&&(S&&I.deltaY>0&&S(I),w&&I.deltaY<0&&w(I),B&&B(I),H&&I.deltaY<0!=he<0&&H(I),he=I.deltaY,Me[0]=Me[1]=Me[2]=0),(R||D)&&(X&&X(I),D&&(p&&D===1&&p(I),x&&x(I),D=0),R=!1),j&&!(j=!1)&&Z&&Z(I),k&&(ve(I),k=!1),le=0},Ee=function(Ve,st,Le){J[Le]+=Ve,Me[Le]+=st,I._vx.update(Ve),I._vy.update(st),c?le||(le=requestAnimationFrame(Se)):Se()},Pe=function(Ve,st){W&&!$&&(I.axis=$=Math.abs(Ve)>Math.abs(st)?"x":"y",j=!0),$!=="y"&&(J[2]+=Ve,I._vx.update(Ve,!0)),$!=="x"&&(Me[2]+=st,I._vy.update(st,!0)),c?le||(le=requestAnimationFrame(Se)):Se()},Ae=function(Ve){if(!Te(Ve,1)){Ve=fl(Ve,u);var st=Ve.clientX,Le=Ve.clientY,Je=st-I.x,qe=Le-I.y,Qe=I.isDragging;I.x=st,I.y=Le,(Qe||(Je||qe)&&(Math.abs(I.startX-st)>=s||Math.abs(I.startY-Le)>=s))&&(D||(D=Qe?2:1),Qe||(I.isDragging=!0),Pe(Je,qe))}},Ke=I.onPress=function(Ue){Te(Ue,1)||Ue&&Ue.button||(I.axis=$=null,pe.pause(),I.isPressed=!0,Ue=fl(Ue),P=he=0,I.startX=I.x=Ue.clientX,I.startY=I.y=Ue.clientY,I._vx.reset(),I._vy.reset(),$n(se?a:te,Ji[1],Ae,fe,!0),I.deltaX=I.deltaY=0,b&&b(I))},V=I.onRelease=function(Ue){if(!Te(Ue,1)){Yn(se?a:te,Ji[1],Ae,!0);var Ve=!isNaN(I.y-I.startY),st=I.isDragging,Le=st&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),Je=fl(Ue);!Le&&Ve&&(I._vx.reset(),I._vy.reset(),u&&F&&wn.delayedCall(.08,function(){if(Fl()-me>300&&!Ue.defaultPrevented){if(Ue.target.click)Ue.target.click();else if(te.createEvent){var qe=te.createEvent("MouseEvents");qe.initMouseEvent("click",!0,!0,Ti,1,Je.screenX,Je.screenY,Je.clientX,Je.clientY,!1,!1,!1,!1,0,null),Ue.target.dispatchEvent(qe)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,h&&st&&!se&&pe.restart(!0),D&&Se(),m&&st&&m(I),y&&y(I,Le)}},be=function(Ve){return Ve.touches&&Ve.touches.length>1&&(I.isGesturing=!0)&&ue(Ve,I.isDragging)},ye=function(){return(I.isGesturing=!1)||O(I)},De=function(Ve){if(!Te(Ve)){var st=ne(),Le=de();Ee((st-E)*Xe,(Le-v)*Xe,1),E=st,v=Le,h&&pe.restart(!0)}},ge=function(Ve){if(!Te(Ve)){Ve=fl(Ve,u),ve&&(k=!0);var st=(Ve.deltaMode===1?l:Ve.deltaMode===2?Ti.innerHeight:1)*_;Ee(Ve.deltaX*st,Ve.deltaY*st,0),h&&!se&&pe.restart(!0)}},ce=function(Ve){if(!Te(Ve)){var st=Ve.clientX,Le=Ve.clientY,Je=st-I.x,qe=Le-I.y;I.x=st,I.y=Le,R=!0,h&&pe.restart(!0),(Je||qe)&&Pe(Je,qe)}},Fe=function(Ve){I.event=Ve,K(I)},Ye=function(Ve){I.event=Ve,Y(I)},St=function(Ve){return Te(Ve)||fl(Ve,u)&&Ge(I)};pe=I._dc=wn.delayedCall(f||.25,_e).pause(),I.deltaX=I.deltaY=0,I._vx=gp(0,50,!0),I._vy=gp(0,50,!0),I.scrollX=ne,I.scrollY=de,I.isDragging=I.isGesturing=I.isPressed=!1,BS(this),I.enable=function(Ue){return I.isEnabled||($n(Q?te:a,"scroll",_p),o.indexOf("scroll")>=0&&$n(Q?te:a,"scroll",De,fe,G),o.indexOf("wheel")>=0&&$n(a,"wheel",ge,fe,G),(o.indexOf("touch")>=0&&FS||o.indexOf("pointer")>=0)&&($n(a,Ji[0],Ke,fe,G),$n(te,Ji[2],V),$n(te,Ji[3],V),F&&$n(a,"click",Re,!0,!0),Ge&&$n(a,"click",St),ue&&$n(te,"gesturestart",be),O&&$n(te,"gestureend",ye),K&&$n(a,lo+"enter",Fe),Y&&$n(a,lo+"leave",Ye),X&&$n(a,lo+"move",ce)),I.isEnabled=!0,I.isDragging=I.isGesturing=I.isPressed=R=D=!1,I._vx.reset(),I._vy.reset(),E=ne(),v=de(),Ue&&Ue.type&&Ke(Ue),xe&&xe(I)),I},I.disable=function(){I.isEnabled&&(ma.filter(function(Ue){return Ue!==I&&Ol(Ue.target)}).length||Yn(Q?te:a,"scroll",_p),I.isPressed&&(I._vx.reset(),I._vy.reset(),Yn(se?a:te,Ji[1],Ae,!0)),Yn(Q?te:a,"scroll",De,G),Yn(a,"wheel",ge,G),Yn(a,Ji[0],Ke,G),Yn(te,Ji[2],V),Yn(te,Ji[3],V),Yn(a,"click",Re,!0),Yn(a,"click",St),Yn(te,"gesturestart",be),Yn(te,"gestureend",ye),Yn(a,lo+"enter",Fe),Yn(a,lo+"leave",Ye),Yn(a,lo+"move",ce),I.isEnabled=I.isPressed=I.isDragging=!1,ze&&ze(I))},I.kill=I.revert=function(){I.disable();var Ue=ma.indexOf(I);Ue>=0&&ma.splice(Ue,1),Kr===I&&(Kr=0)},ma.push(I),se&&Ol(a)&&(Kr=I),I.enable(g)},qD(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();sn.version="3.14.2";sn.create=function(n){return new sn(n)};sn.register=HS;sn.getAll=function(){return ma.slice()};sn.getById=function(n){return ma.filter(function(e){return e.vars.id===n})[0]};kS()&&wn.registerPlugin(sn);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ke,fa,ut,kt,bi,Tt,Mm,of,fc,Bl,vl,ru,Nn,Rf,vp,Qn,Qg,e0,ha,GS,Uh,WS,Jn,xp,XS,YS,Ss,Sp,bm,Ca,Em,kl,yp,Fh,su=1,Un=Date.now,Oh=Un(),Yi=0,xl=0,t0=function(e,t,i){var r=yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},n0=function(e,t){return t&&(!yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},jD=function n(){return xl&&requestAnimationFrame(n)},i0=function(){return Rf=1},r0=function(){return Rf=0},dr=function(e){return e},Sl=function(e){return Math.round(e*1e5)/1e5||0},qS=function(){return typeof window<"u"},$S=function(){return ke||qS()&&(ke=window.gsap)&&ke.registerPlugin&&ke},Po=function(e){return!!~Mm.indexOf(e)},KS=function(e){return(e==="Height"?Em:ut["inner"+e])||bi["client"+e]||Tt["client"+e]},jS=function(e){return Bs(e,"getBoundingClientRect")||(Po(e)?function(){return Lu.width=ut.innerWidth,Lu.height=Em,Lu}:function(){return qr(e)})},ZD=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Bs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?KS(s):e["client"+s])||0}},JD=function(e,t){return!t||~wr.indexOf(e)?jS(e):function(){return Lu}},Mr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Bs(e,i))?o()-jS(e)()[s]:Po(e)?(bi[i]||Tt[i])-KS(r):e[i]-e["offset"+r])},ou=function(e,t){for(var i=0;i<ha.length;i+=3)(!t||~t.indexOf(ha[i+1]))&&e(ha[i],ha[i+1],ha[i+2])},yi=function(e){return typeof e=="string"},zn=function(e){return typeof e=="function"},yl=function(e){return typeof e=="number"},co=function(e){return typeof e=="object"},hl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Bh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},aa=Math.abs,ZS="left",JS="top",Tm="right",Am="bottom",Ao="width",wo="height",zl="Right",Vl="Left",Hl="Top",Gl="Bottom",an="padding",Bi="margin",Xa="Width",wm="Height",dn="px",ki=function(e){return ut.getComputedStyle(e)},QD=function(e){var t=ki(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},s0=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},qr=function(e,t){var i=t&&ki(e)[vp]!=="matrix(1, 0, 0, 1, 0, 0)"&&ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},af=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},QS=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},e3=function(e){return function(t){return ke.utils.snap(QS(e),t)}},Cm=function(e){var t=ke.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},t3=function(e){return function(t,i){return Cm(QS(e))(t,i.direction)}},au=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},Mn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},yn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},lu=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},o0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},cu={toggleActions:"play",anticipatePin:0},lf={top:0,left:0,center:.5,bottom:1,right:1},Ru=function(e,t){if(yi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in lf?lf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},uu=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=kt.createElement("div"),g=Po(i)||Bs(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?Tt:i,x=e.indexOf("start")!==-1,b=x?c:u,y="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(y+=(r===pn?Tm:Am)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+r.op.d2],Pu(_,0,r,x),_},Pu=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Xa]=1,s["border"+a+Xa]=0,s[i.p]=t+"px",ke.set(e,s)},ct=[],Mp={},hc,a0=function(){return Un()-Yi>34&&(hc||(hc=requestAnimationFrame(Qr)))},la=function(){(!Jn||!Jn.isPressed||Jn.startX>Tt.clientWidth)&&(ft.cache++,Jn?hc||(hc=requestAnimationFrame(Qr)):Qr(),Yi||Io("scrollStart"),Yi=Un())},kh=function(){YS=ut.innerWidth,XS=ut.innerHeight},Ml=function(e){ft.cache++,(e===!0||!Nn&&!WS&&!kt.fullscreenElement&&!kt.webkitFullscreenElement&&(!xp||YS!==ut.innerWidth||Math.abs(ut.innerHeight-XS)>ut.innerHeight*.25))&&of.restart(!0)},Do={},n3=[],ey=function n(){return yn(ht,"scrollEnd",n)||xo(!0)},Io=function(e){return Do[e]&&Do[e].map(function(t){return t()})||n3},Si=[],ty=function(e){for(var t=0;t<Si.length;t+=5)(!e||Si[t+4]&&Si[t+4].query===e)&&(Si[t].style.cssText=Si[t+1],Si[t].getBBox&&Si[t].setAttribute("transform",Si[t+2]||""),Si[t+3].uncache=1)},ny=function(){return ft.forEach(function(e){return zn(e)&&++e.cacheID&&(e.rec=e())})},Rm=function(e,t){var i;for(Qn=0;Qn<ct.length;Qn++)i=ct[Qn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));kl=!0,t&&ty(t),t||Io("revert")},iy=function(e,t){ft.cache++,(t||!ei)&&ft.forEach(function(i){return zn(i)&&i.cacheID++&&(i.rec=0)}),yi(e)&&(ut.history.scrollRestoration=bm=e)},ei,Co=0,l0,i3=function(){if(l0!==Co){var e=l0=Co;requestAnimationFrame(function(){return e===Co&&xo(!0)})}},ry=function(){Tt.appendChild(Ca),Em=!Jn&&Ca.offsetHeight||ut.innerHeight,Tt.removeChild(Ca)},c0=function(e){return fc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xo=function(e,t){if(bi=kt.documentElement,Tt=kt.body,Mm=[ut,kt,bi,Tt],Yi&&!e&&!kl){Mn(ht,"scrollEnd",ey);return}ry(),ei=ht.isRefreshing=!0,kl||ny();var i=Io("refreshInit");GS&&ht.sort(),t||Rm(),ft.forEach(function(r){zn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ct.slice(0).forEach(function(r){return r.refresh()}),kl=!1,ct.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),yp=1,c0(!0),ct.forEach(function(r){var s=Mr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),c0(!1),yp=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ft.forEach(function(r){zn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),iy(bm,1),of.pause(),Co++,ei=2,Qr(2),ct.forEach(function(r){return zn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ei=ht.isRefreshing=!1,Io("refresh")},bp=0,Du=1,Wl,Qr=function(e){if(e===2||!ei&&!kl){ht.isUpdating=!0,Wl&&Wl.update(0);var t=ct.length,i=Un(),r=i-Oh>=50,s=t&&ct[0].scroll();if(Du=bp>s?-1:1,ei||(bp=s),r&&(Yi&&!Rf&&i-Yi>200&&(Yi=0,Io("scrollEnd")),vl=Oh,Oh=i),Du<0){for(Qn=t;Qn-- >0;)ct[Qn]&&ct[Qn].update(0,r);Du=1}else for(Qn=0;Qn<t;Qn++)ct[Qn]&&ct[Qn].update(0,r);ht.isUpdating=!1}hc=0},Ep=[ZS,JS,Am,Tm,Bi+Gl,Bi+zl,Bi+Hl,Bi+Vl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Iu=Ep.concat([Ao,wo,"boxSizing","max"+Xa,"max"+wm,"position",Bi,an,an+Hl,an+zl,an+Gl,an+Vl]),r3=function(e,t,i){Ra(i);var r=e._gsap;if(r.spacerIsNative)Ra(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},zh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Ep.length,o=t.style,a=e.style,l;s--;)l=Ep[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Am]=a[Tm]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ao]=af(e,ri)+dn,o[wo]=af(e,pn)+dn,o[an]=a[Bi]=a[JS]=a[ZS]="0",Ra(r),a[Ao]=a["max"+Xa]=i[Ao],a[wo]=a["max"+wm]=i[wo],a[an]=i[an],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},s3=/([A-Z])/g,Ra=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||ke.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(s3,"-$1").toLowerCase())}},fu=function(e){for(var t=Iu.length,i=e.style,r=[],s=0;s<t;s++)r.push(Iu[s],i[Iu[s]]);return r.t=e,r},o3=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Lu={left:0,top:0},u0=function(e,t,i,r,s,o,a,l,c,u,h,f,d,_){zn(e)&&(e=e(l)),yi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ru("0"+e.substr(3),i):0));var g=d?d.time():0,p,m,x;if(d&&d.seek(0),isNaN(e)||(e=+e),yl(e))d&&(e=ke.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Pu(a,i,r,!0);else{zn(t)&&(t=t(l));var b=(e||"0").split(" "),y,A,C,w;x=li(t,l)||Tt,y=qr(x)||{},(!y||!y.left&&!y.top)&&ki(x).display==="none"&&(w=x.style.display,x.style.display="block",y=qr(x),w?x.style.display=w:x.style.removeProperty("display")),A=Ru(b[0],y[r.d]),C=Ru(b[1]||"0",i),e=y[r.p]-c[r.p]-u+A+s-C,a&&Pu(a,C,r,i-C<20||a._isStart&&C>20),i-=i-C}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var S=e+i,M=o._isStart;p="scroll"+r.d2,Pu(o,S,r,M&&S>20||!M&&(h?Math.max(Tt[p],bi[p]):o.parentNode[p])<=S+1),h&&(c=qr(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+dn))}return d&&x&&(p=qr(x),d.seek(f),m=qr(x),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},a3=/(webkit|moz|length|cssText|inset)/i,f0=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Tt){e._stOrig=s.cssText,a=ki(e);for(o in a)!+o&&!a3.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;ke.core.getCache(e).uncache=1,t.appendChild(e)}},sy=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},hu=function(e,t,i){var r={};r[t.p]="+="+i,ke.set(e,r)},h0=function(e,t){var i=Ws(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||i();var g=sy(i,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ft.cache++,o.tween&&Qr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=ke.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Mn(e,"wheel",i.wheelHandler),ht.isTouch&&Mn(e,"touchmove",i.wheelHandler),s},ht=function(){function n(t,i){fa||n.register(ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Sp(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xl){this.update=this.refresh=this.kill=dr;return}i=s0(yi(i)||yl(i)||i.nodeType?{trigger:i}:i,cu);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,b=s.once,y=s.snap,A=s.pinReparent,C=s.pinSpacer,w=s.containerAnimation,S=s.fastScrollEnd,M=s.preventOverlaps,B=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ri:pn,N=!h&&h!==0,L=li(i.scroller||ut),H=ke.core.getCache(L),K=Po(L),Y=("pinType"in i?i.pinType:Bs(L,"pinType")||K&&"fixed")==="fixed",X=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],z=N&&i.toggleActions.split(" "),se="markers"in i?i.markers:cu.markers,ue=K?0:parseFloat(ki(L)["border"+B.p2+Xa])||0,O=this,ve=i.onRefreshInit&&function(){return i.onRefreshInit(O)},xe=ZD(L,K,B),ze=JD(L,K),Ge=0,Xe=0,G=0,F=Ws(L,B),W,Z,le,pe,D,R,k,j,$,I,P,he,fe,ne,de,E,v,U,Q,te,J,Me,me,Re,Te,_e,Se,Ee,Pe,Ae,Ke,V,be,ye,De,ge,ce,Fe,Ye;if(O._startClamp=O._endClamp=!1,O._dir=B,p*=45,O.scroller=L,O.scroll=w?w.time.bind(w):F,pe=F(),O.vars=i,r=r||i.animation,"refreshPriority"in i&&(GS=1,i.refreshPriority===-9999&&(Wl=O)),H.tweenScroll=H.tweenScroll||{top:h0(L,pn),left:h0(L,ri)},O.tweenTo=W=H.tweenScroll[B.p],O.scrubDuration=function(Le){be=yl(Le)&&Le,be?V?V.duration(Le):V=ke.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:be,paused:!0,onComplete:function(){return m&&m(O)}}):(V&&V.progress(1).kill(),V=0)},r&&(r.vars.lazy=!1,r._initted&&!O.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),O.animation=r.pause(),r.scrollTrigger=O,O.scrubDuration(h),Ae=0,l||(l=r.vars.id)),y&&((!co(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Tt.style&&ke.set(K?[Tt,bi]:L,{scrollBehavior:"auto"}),ft.forEach(function(Le){return zn(Le)&&Le.target===(K?kt.scrollingElement||bi:L)&&(Le.smooth=!1)}),le=zn(y.snapTo)?y.snapTo:y.snapTo==="labels"?e3(r):y.snapTo==="labelsDirectional"?t3(r):y.directional!==!1?function(Le,Je){return Cm(y.snapTo)(Le,Un()-Xe<500?0:Je.direction)}:ke.utils.snap(y.snapTo),ye=y.duration||{min:.1,max:2},ye=co(ye)?Bl(ye.min,ye.max):Bl(ye,ye),De=ke.delayedCall(y.delay||be/2||.1,function(){var Le=F(),Je=Un()-Xe<500,qe=W.tween;if((Je||Math.abs(O.getVelocity())<10)&&!qe&&!Rf&&Ge!==Le){var Qe=(Le-R)/ne,en=r&&!N?r.totalProgress():Qe,nt=Je?0:(en-Ke)/(Un()-vl)*1e3||0,Ht=ke.utils.clamp(-Qe,1-Qe,aa(nt/2)*nt/.185),cn=Qe+(y.inertia===!1?0:Ht),Gt,Rt,bt=y,Rn=bt.onStart,Bt=bt.onInterrupt,Pn=bt.onComplete;if(Gt=le(cn,O),yl(Gt)||(Gt=cn),Rt=Math.max(0,Math.round(R+Gt*ne)),Le<=k&&Le>=R&&Rt!==Le){if(qe&&!qe._initted&&qe.data<=aa(Rt-Le))return;y.inertia===!1&&(Ht=Gt-Qe),W(Rt,{duration:ye(aa(Math.max(aa(cn-en),aa(Gt-en))*.185/nt/.05||0)),ease:y.ease||"power3",data:aa(Rt-Le),onInterrupt:function(){return De.restart(!0)&&Bt&&Bt(O)},onComplete:function(){O.update(),Ge=F(),r&&!N&&(V?V.resetTo("totalProgress",Gt,r._tTime/r._tDur):r.progress(Gt)),Ae=Ke=r&&!N?r.totalProgress():O.progress,x&&x(O),Pn&&Pn(O)}},Le,Ht*ne,Rt-Le-Ht*ne),Rn&&Rn(O,W.tween)}}else O.isActive&&Ge!==Le&&De.restart(!0)}).pause()),l&&(Mp[l]=O),f=O.trigger=li(f||d!==!0&&d),Ye=f&&f._gsap&&f._gsap.stRevert,Ye&&(Ye=Ye(O)),d=d===!0?f:li(d),yi(a)&&(a={targets:f,className:a}),d&&(_===!1||_===Bi||(_=!_&&d.parentNode&&d.parentNode.style&&ki(d.parentNode).display==="flex"?!1:an),O.pin=d,Z=ke.core.getCache(d),Z.spacer?de=Z.pinState:(C&&(C=li(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),Z.spacerIsNative=!!C,C&&(Z.spacerState=fu(C))),Z.spacer=U=C||kt.createElement("div"),U.classList.add("pin-spacer"),l&&U.classList.add("pin-spacer-"+l),Z.pinState=de=fu(d)),i.force3D!==!1&&ke.set(d,{force3D:!0}),O.spacer=U=Z.spacer,Pe=ki(d),Re=Pe[_+B.os2],te=ke.getProperty(d),J=ke.quickSetter(d,B.a,dn),zh(d,U,Pe),v=fu(d)),se){he=co(se)?s0(se,o0):o0,I=uu("scroller-start",l,L,B,he,0),P=uu("scroller-end",l,L,B,he,0,I),Q=I["offset"+B.op.d2];var St=li(Bs(L,"content")||L);j=this.markerStart=uu("start",l,St,B,he,Q,0,w),$=this.markerEnd=uu("end",l,St,B,he,Q,0,w),w&&(Fe=ke.quickSetter([j,$],B.a,dn)),!Y&&!(wr.length&&Bs(L,"fixedMarkers")===!0)&&(QD(K?Tt:L),ke.set([I,P],{force3D:!0}),_e=ke.quickSetter(I,B.a,dn),Ee=ke.quickSetter(P,B.a,dn))}if(w){var Ue=w.vars.onUpdate,Ve=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){O.update(0,0,1),Ue&&Ue.apply(w,Ve||[])})}if(O.previous=function(){return ct[ct.indexOf(O)-1]},O.next=function(){return ct[ct.indexOf(O)+1]},O.revert=function(Le,Je){if(!Je)return O.kill(!0);var qe=Le!==!1||!O.enabled,Qe=Nn;qe!==O.isReverted&&(qe&&(ge=Math.max(F(),O.scroll.rec||0),G=O.progress,ce=r&&r.progress()),j&&[j,$,I,P].forEach(function(en){return en.style.display=qe?"none":"block"}),qe&&(Nn=O,O.update(qe)),d&&(!A||!O.isActive)&&(qe?r3(d,U,de):zh(d,U,ki(d),Te)),qe||O.update(qe),Nn=Qe,O.isReverted=qe)},O.refresh=function(Le,Je,qe,Qe){if(!((Nn||!O.enabled)&&!Je)){if(d&&Le&&Yi){Mn(n,"scrollEnd",ey);return}!ei&&ve&&ve(O),Nn=O,W.tween&&!qe&&(W.tween.kill(),W.tween=0),V&&V.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Oe){return Oe.vars.immediateRender&&Oe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),O.isReverted||O.revert(!0,!0),O._subPinOffset=!1;var en=xe(),nt=ze(),Ht=w?w.duration():Mr(L,B),cn=ne<=.01||!ne,Gt=0,Rt=Qe||0,bt=co(qe)?qe.end:i.end,Rn=i.endTrigger||f,Bt=co(qe)?qe.start:i.start||(i.start===0||!f?0:d?"0 0":"0 100%"),Pn=O.pinnedContainer=i.pinnedContainer&&li(i.pinnedContainer,O),Ii=f&&Math.max(0,ct.indexOf(O))||0,un=Ii,fn,vn,Ir,Bo,T,q,oe,re,ie,we,Ie,Ce,Be;for(se&&co(qe)&&(Ce=ke.getProperty(I,B.p),Be=ke.getProperty(P,B.p));un-- >0;)q=ct[un],q.end||q.refresh(0,1)||(Nn=O),oe=q.pin,oe&&(oe===f||oe===d||oe===Pn)&&!q.isReverted&&(we||(we=[]),we.unshift(q),q.revert(!0,!0)),q!==ct[un]&&(Ii--,un--);for(zn(Bt)&&(Bt=Bt(O)),Bt=t0(Bt,"start",O),R=u0(Bt,f,en,B,F(),j,I,O,nt,ue,Y,Ht,w,O._startClamp&&"_startClamp")||(d?-.001:0),zn(bt)&&(bt=bt(O)),yi(bt)&&!bt.indexOf("+=")&&(~bt.indexOf(" ")?bt=(yi(Bt)?Bt.split(" ")[0]:"")+bt:(Gt=Ru(bt.substr(2),en),bt=yi(Bt)?Bt:(w?ke.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,R):R)+Gt,Rn=f)),bt=t0(bt,"end",O),k=Math.max(R,u0(bt||(Rn?"100% 0":Ht),Rn,en,B,F()+Gt,$,P,O,nt,ue,Y,Ht,w,O._endClamp&&"_endClamp"))||-.001,Gt=0,un=Ii;un--;)q=ct[un]||{},oe=q.pin,oe&&q.start-q._pinPush<=R&&!w&&q.end>0&&(fn=q.end-(O._startClamp?Math.max(0,q.start):q.start),(oe===f&&q.start-q._pinPush<R||oe===Pn)&&isNaN(Bt)&&(Gt+=fn*(1-q.progress)),oe===d&&(Rt+=fn));if(R+=Gt,k+=Gt,O._startClamp&&(O._startClamp+=Gt),O._endClamp&&!ei&&(O._endClamp=k||-.001,k=Math.min(k,Mr(L,B))),ne=k-R||(R-=.01)&&.001,cn&&(G=ke.utils.clamp(0,1,ke.utils.normalize(R,k,ge))),O._pinPush=Rt,j&&Gt&&(fn={},fn[B.a]="+="+Gt,Pn&&(fn[B.p]="-="+F()),ke.set([j,$],fn)),d&&!(yp&&O.end>=Mr(L,B)))fn=ki(d),Bo=B===pn,Ir=F(),Me=parseFloat(te(B.a))+Rt,!Ht&&k>1&&(Ie=(K?kt.scrollingElement||bi:L).style,Ie={style:Ie,value:Ie["overflow"+B.a.toUpperCase()]},K&&ki(Tt)["overflow"+B.a.toUpperCase()]!=="scroll"&&(Ie.style["overflow"+B.a.toUpperCase()]="scroll")),zh(d,U,fn),v=fu(d),vn=qr(d,!0),re=Y&&Ws(L,Bo?ri:pn)(),_?(Te=[_+B.os2,ne+Rt+dn],Te.t=U,un=_===an?af(d,B)+ne+Rt:0,un&&(Te.push(B.d,un+dn),U.style.flexBasis!=="auto"&&(U.style.flexBasis=un+dn)),Ra(Te),Pn&&ct.forEach(function(Oe){Oe.pin===Pn&&Oe.vars.pinSpacing!==!1&&(Oe._subPinOffset=!0)}),Y&&F(ge)):(un=af(d,B),un&&U.style.flexBasis!=="auto"&&(U.style.flexBasis=un+dn)),Y&&(T={top:vn.top+(Bo?Ir-R:re)+dn,left:vn.left+(Bo?re:Ir-R)+dn,boxSizing:"border-box",position:"fixed"},T[Ao]=T["max"+Xa]=Math.ceil(vn.width)+dn,T[wo]=T["max"+wm]=Math.ceil(vn.height)+dn,T[Bi]=T[Bi+Hl]=T[Bi+zl]=T[Bi+Gl]=T[Bi+Vl]="0",T[an]=fn[an],T[an+Hl]=fn[an+Hl],T[an+zl]=fn[an+zl],T[an+Gl]=fn[an+Gl],T[an+Vl]=fn[an+Vl],E=o3(de,T,A),ei&&F(0)),r?(ie=r._initted,Uh(1),r.render(r.duration(),!0,!0),me=te(B.a)-Me+ne+Rt,Se=Math.abs(ne-me)>1,Y&&Se&&E.splice(E.length-2,2),r.render(0,!0,!0),ie||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Uh(0)):me=ne,Ie&&(Ie.value?Ie.style["overflow"+B.a.toUpperCase()]=Ie.value:Ie.style.removeProperty("overflow-"+B.a));else if(f&&F()&&!w)for(vn=f.parentNode;vn&&vn!==Tt;)vn._pinOffset&&(R-=vn._pinOffset,k-=vn._pinOffset),vn=vn.parentNode;we&&we.forEach(function(Oe){return Oe.revert(!1,!0)}),O.start=R,O.end=k,pe=D=ei?ge:F(),!w&&!ei&&(pe<ge&&F(ge),O.scroll.rec=0),O.revert(!1,!0),Xe=Un(),De&&(Ge=-1,De.restart(!0)),Nn=0,r&&N&&(r._initted||ce)&&r.progress()!==ce&&r.progress(ce||0,!0).render(r.time(),!0,!0),(cn||G!==O.progress||w||g||r&&!r._initted)&&(r&&!N&&(r._initted||G||r.vars.immediateRender!==!1)&&r.totalProgress(w&&R<-.001&&!G?ke.utils.normalize(R,k,0):G,!0),O.progress=cn||(pe-R)/ne===G?0:G),d&&_&&(U._pinOffset=Math.round(O.progress*me)),V&&V.invalidate(),isNaN(Ce)||(Ce-=ke.getProperty(I,B.p),Be-=ke.getProperty(P,B.p),hu(I,B,Ce),hu(j,B,Ce-(Qe||0)),hu(P,B,Be),hu($,B,Be-(Qe||0))),cn&&!ei&&O.update(),u&&!ei&&!fe&&(fe=!0,u(O),fe=!1)}},O.getVelocity=function(){return(F()-D)/(Un()-vl)*1e3||0},O.endAnimation=function(){hl(O.callbackAnimation),r&&(V?V.progress(1):r.paused()?N||hl(r,O.direction<0,1):hl(r,r.reversed()))},O.labelToScroll=function(Le){return r&&r.labels&&(R||O.refresh()||R)+r.labels[Le]/r.duration()*ne||0},O.getTrailing=function(Le){var Je=ct.indexOf(O),qe=O.direction>0?ct.slice(0,Je).reverse():ct.slice(Je+1);return(yi(Le)?qe.filter(function(Qe){return Qe.vars.preventOverlaps===Le}):qe).filter(function(Qe){return O.direction>0?Qe.end<=R:Qe.start>=k})},O.update=function(Le,Je,qe){if(!(w&&!qe&&!Le)){var Qe=ei===!0?ge:O.scroll(),en=Le?0:(Qe-R)/ne,nt=en<0?0:en>1?1:en||0,Ht=O.progress,cn,Gt,Rt,bt,Rn,Bt,Pn,Ii;if(Je&&(D=pe,pe=w?F():Qe,y&&(Ke=Ae,Ae=r&&!N?r.totalProgress():nt)),p&&d&&!Nn&&!su&&Yi&&(!nt&&R<Qe+(Qe-D)/(Un()-vl)*p?nt=1e-4:nt===1&&k>Qe+(Qe-D)/(Un()-vl)*p&&(nt=.9999)),nt!==Ht&&O.enabled){if(cn=O.isActive=!!nt&&nt<1,Gt=!!Ht&&Ht<1,Bt=cn!==Gt,Rn=Bt||!!nt!=!!Ht,O.direction=nt>Ht?1:-1,O.progress=nt,Rn&&!Nn&&(Rt=nt&&!Ht?0:nt===1?1:Ht===1?2:3,N&&(bt=!Bt&&z[Rt+1]!=="none"&&z[Rt+1]||z[Rt],Ii=r&&(bt==="complete"||bt==="reset"||bt in r))),M&&(Bt||Ii)&&(Ii||h||!r)&&(zn(M)?M(O):O.getTrailing(M).forEach(function(Ir){return Ir.endAnimation()})),N||(V&&!Nn&&!su?(V._dp._time-V._start!==V._time&&V.render(V._dp._time-V._start),V.resetTo?V.resetTo("totalProgress",nt,r._tTime/r._tDur):(V.vars.totalProgress=nt,V.invalidate().restart())):r&&r.totalProgress(nt,!!(Nn&&(Xe||Le)))),d){if(Le&&_&&(U.style[_+B.os2]=Re),!Y)J(Sl(Me+me*nt));else if(Rn){if(Pn=!Le&&nt>Ht&&k+1>Qe&&Qe+1>=Mr(L,B),A)if(!Le&&(cn||Pn)){var un=qr(d,!0),fn=Qe-R;f0(d,Tt,un.top+(B===pn?fn:0)+dn,un.left+(B===pn?0:fn)+dn)}else f0(d,U);Ra(cn||Pn?E:v),Se&&nt<1&&cn||J(Me+(nt===1&&!Pn?me:0))}}y&&!W.tween&&!Nn&&!su&&De.restart(!0),a&&(Bt||b&&nt&&(nt<1||!Fh))&&fc(a.targets).forEach(function(Ir){return Ir.classList[cn||b?"add":"remove"](a.className)}),o&&!N&&!Le&&o(O),Rn&&!Nn?(N&&(Ii&&(bt==="complete"?r.pause().totalProgress(1):bt==="reset"?r.restart(!0).pause():bt==="restart"?r.restart(!0):r[bt]()),o&&o(O)),(Bt||!Fh)&&(c&&Bt&&Bh(O,c),X[Rt]&&Bh(O,X[Rt]),b&&(nt===1?O.kill(!1,1):X[Rt]=0),Bt||(Rt=nt===1?1:3,X[Rt]&&Bh(O,X[Rt]))),S&&!cn&&Math.abs(O.getVelocity())>(yl(S)?S:2500)&&(hl(O.callbackAnimation),V?V.progress(1):hl(r,bt==="reverse"?1:!nt,1))):N&&o&&!Nn&&o(O)}if(Ee){var vn=w?Qe/w.duration()*(w._caScrollDist||0):Qe;_e(vn+(I._isFlipped?1:0)),Ee(vn)}Fe&&Fe(-Qe/w.duration()*(w._caScrollDist||0))}},O.enable=function(Le,Je){O.enabled||(O.enabled=!0,Mn(L,"resize",Ml),K||Mn(L,"scroll",la),ve&&Mn(n,"refreshInit",ve),Le!==!1&&(O.progress=G=0,pe=D=Ge=F()),Je!==!1&&O.refresh())},O.getTween=function(Le){return Le&&W?W.tween:V},O.setPositions=function(Le,Je,qe,Qe){if(w){var en=w.scrollTrigger,nt=w.duration(),Ht=en.end-en.start;Le=en.start+Ht*Le/nt,Je=en.start+Ht*Je/nt}O.refresh(!1,!1,{start:n0(Le,qe&&!!O._startClamp),end:n0(Je,qe&&!!O._endClamp)},Qe),O.update()},O.adjustPinSpacing=function(Le){if(Te&&Le){var Je=Te.indexOf(B.d)+1;Te[Je]=parseFloat(Te[Je])+Le+dn,Te[1]=parseFloat(Te[1])+Le+dn,Ra(Te)}},O.disable=function(Le,Je){if(Le!==!1&&O.revert(!0,!0),O.enabled&&(O.enabled=O.isActive=!1,Je||V&&V.pause(),ge=0,Z&&(Z.uncache=1),ve&&yn(n,"refreshInit",ve),De&&(De.pause(),W.tween&&W.tween.kill()&&(W.tween=0)),!K)){for(var qe=ct.length;qe--;)if(ct[qe].scroller===L&&ct[qe]!==O)return;yn(L,"resize",Ml),K||yn(L,"scroll",la)}},O.kill=function(Le,Je){O.disable(Le,Je),V&&!Je&&V.kill(),l&&delete Mp[l];var qe=ct.indexOf(O);qe>=0&&ct.splice(qe,1),qe===Qn&&Du>0&&Qn--,qe=0,ct.forEach(function(Qe){return Qe.scroller===O.scroller&&(qe=1)}),qe||ei||(O.scroll.rec=0),r&&(r.scrollTrigger=null,Le&&r.revert({kill:!1}),Je||r.kill()),j&&[j,$,I,P].forEach(function(Qe){return Qe.parentNode&&Qe.parentNode.removeChild(Qe)}),Wl===O&&(Wl=0),d&&(Z&&(Z.uncache=1),qe=0,ct.forEach(function(Qe){return Qe.pin===d&&qe++}),qe||(Z.spacer=0)),i.onKill&&i.onKill(O)},ct.push(O),O.enable(!1,!1),Ye&&Ye(O),r&&r.add&&!ne){var st=O.update;O.update=function(){O.update=st,ft.cache++,R||k||O.refresh()},ke.delayedCall(.01,O.update),ne=.01,R=k=0}else O.refresh();d&&i3()},n.register=function(i){return fa||(ke=i||$S(),qS()&&window.document&&n.enable(),fa=xl),fa},n.defaults=function(i){if(i)for(var r in i)cu[r]=i[r];return cu},n.disable=function(i,r){xl=0,ct.forEach(function(o){return o[r?"kill":"disable"](i)}),yn(ut,"wheel",la),yn(kt,"scroll",la),clearInterval(ru),yn(kt,"touchcancel",dr),yn(Tt,"touchstart",dr),au(yn,kt,"pointerdown,touchstart,mousedown",i0),au(yn,kt,"pointerup,touchend,mouseup",r0),of.kill(),ou(yn);for(var s=0;s<ft.length;s+=3)lu(yn,ft[s],ft[s+1]),lu(yn,ft[s],ft[s+2])},n.enable=function(){if(ut=window,kt=document,bi=kt.documentElement,Tt=kt.body,ke&&(fc=ke.utils.toArray,Bl=ke.utils.clamp,Sp=ke.core.context||dr,Uh=ke.core.suppressOverwrites||dr,bm=ut.history.scrollRestoration||"auto",bp=ut.pageYOffset||0,ke.core.globals("ScrollTrigger",n),Tt)){xl=1,Ca=document.createElement("div"),Ca.style.height="100vh",Ca.style.position="absolute",ry(),jD(),sn.register(ke),n.isTouch=sn.isTouch,Ss=sn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xp=sn.isTouch===1,Mn(ut,"wheel",la),Mm=[ut,kt,bi,Tt],ke.matchMedia?(n.matchMedia=function(c){var u=ke.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},ke.addEventListener("matchMediaInit",function(){ny(),Rm()}),ke.addEventListener("matchMediaRevert",function(){return ty()}),ke.addEventListener("matchMedia",function(){xo(0,1),Io("matchMedia")}),ke.matchMedia().add("(orientation: portrait)",function(){return kh(),kh})):console.warn("Requires GSAP 3.11.0 or later"),kh(),Mn(kt,"scroll",la);var i=Tt.hasAttribute("style"),r=Tt.style,s=r.borderTopStyle,o=ke.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=qr(Tt),pn.m=Math.round(a.top+pn.sc())||0,ri.m=Math.round(a.left+ri.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),ru=setInterval(a0,250),ke.delayedCall(.5,function(){return su=0}),Mn(kt,"touchcancel",dr),Mn(Tt,"touchstart",dr),au(Mn,kt,"pointerdown,touchstart,mousedown",i0),au(Mn,kt,"pointerup,touchend,mouseup",r0),vp=ke.utils.checkPrefix("transform"),Iu.push(vp),fa=Un(),of=ke.delayedCall(.2,xo).pause(),ha=[kt,"visibilitychange",function(){var c=ut.innerWidth,u=ut.innerHeight;kt.hidden?(Qg=c,e0=u):(Qg!==c||e0!==u)&&Ml()},kt,"DOMContentLoaded",xo,ut,"load",xo,ut,"resize",Ml],ou(Mn),ct.forEach(function(c){return c.enable(0,1)}),l=0;l<ft.length;l+=3)lu(yn,ft[l],ft[l+1]),lu(yn,ft[l],ft[l+2])}},n.config=function(i){"limitCallbacks"in i&&(Fh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(ru)||(ru=r)&&setInterval(a0,r),"ignoreMobileResize"in i&&(xp=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(ou(yn)||ou(Mn,i.autoRefreshEvents||"none"),WS=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=li(i),o=ft.indexOf(s),a=Po(s);~o&&ft.splice(o,a?6:2),r&&(a?wr.unshift(ut,r,Tt,r,bi,r):wr.unshift(s,r))},n.clearMatchMedia=function(i){ct.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(yi(i)?li(i):i).getBoundingClientRect(),a=o[s?Ao:wo]*r||0;return s?o.right-a>0&&o.left+a<ut.innerWidth:o.bottom-a>0&&o.top+a<ut.innerHeight},n.positionInViewport=function(i,r,s){yi(i)&&(i=li(i));var o=i.getBoundingClientRect(),a=o[s?Ao:wo],l=r==null?a/2:r in lf?lf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ut.innerWidth:(o.top+l)/ut.innerHeight},n.killAll=function(i){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Do.killAll||[];Do={},r.forEach(function(s){return s()})}},n}();ht.version="3.14.2";ht.saveStyles=function(n){return n?fc(n).forEach(function(e){if(e&&e.style){var t=Si.indexOf(e);t>=0&&Si.splice(t,5),Si.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ke.core.getCache(e),Sp())}}):Si};ht.revert=function(n,e){return Rm(!n,e)};ht.create=function(n,e){return new ht(n,e)};ht.refresh=function(n){return n?Ml(!0):(fa||ht.register())&&xo(!0)};ht.update=function(n){return++ft.cache&&Qr(n===!0?2:0)};ht.clearScrollMemory=iy;ht.maxScroll=function(n,e){return Mr(n,e?ri:pn)};ht.getScrollFunc=function(n,e){return Ws(li(n),e?ri:pn)};ht.getById=function(n){return Mp[n]};ht.getAll=function(){return ct.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ht.isScrolling=function(){return!!Yi};ht.snapDirectional=Cm;ht.addEventListener=function(n,e){var t=Do[n]||(Do[n]=[]);~t.indexOf(e)||t.push(e)};ht.removeEventListener=function(n,e){var t=Do[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ht.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=ke.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&zn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return zn(s)&&(s=s(),Mn(ht,"refresh",function(){return s=e.batchMax()})),fc(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ht.create(c))}),t};var d0=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Vh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(sn.isTouch?" pinch-zoom":""):"none",e===bi&&n(Tt,t)},du={auto:1,scroll:1},l3=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ke.core.getCache(s),a=Un(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(du[(l=ki(s)).overflowY]||du[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Po(s)&&(du[(l=ki(s)).overflowY]||du[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},oy=function(e,t,i,r){return sn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&l3,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Mn(kt,sn.eventTypes[0],m0,!1,!0)},onDisable:function(){return yn(kt,sn.eventTypes[0],m0,!0)}})},c3=/(input|label|select|textarea)/i,p0,m0=function(e){var t=c3.test(e.target.tagName);(t||p0)&&(e._gsapAllow=!0,p0=t)},u3=function(e){co(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=li(e.target)||bi,u=ke.core.globals().ScrollSmoother,h=u&&u.get(),f=Ss&&(e.content&&li(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Ws(c,pn),_=Ws(c,ri),g=1,p=(sn.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,m=0,x=zn(r)?function(){return r(a)}:function(){return r||2.8},b,y,A=oy(c,e.type,!0,s),C=function(){return y=!1},w=dr,S=dr,M=function(){l=Mr(c,pn),S=Bl(Ss?1:0,l),i&&(w=Bl(0,Mr(c,ri))),b=Co},B=function(){f._gsap.y=Sl(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},N=function(){if(y){requestAnimationFrame(C);var se=Sl(a.deltaY/2),ue=S(d.v-se);if(f&&ue!==d.v+d.offset){d.offset=ue-d.v;var O=Sl((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+O+", 0, 1)",f._gsap.y=O+"px",d.cacheID=ft.cache,Qr()}return!0}d.offset&&B(),y=!0},L,H,K,Y,X=function(){M(),L.isActive()&&L.vars.scrollY>l&&(d()>l?L.progress(1)&&d(l):L.resetTo("scrollY",l))};return f&&ke.set(f,{y:"+=0"}),e.ignoreCheck=function(z){return Ss&&z.type==="touchmove"&&N()||g>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){y=!1;var z=g;g=Sl((ut.visualViewport&&ut.visualViewport.scale||1)/p),L.pause(),z!==g&&Vh(c,g>1.01?!0:i?!1:"x"),H=_(),K=d(),M(),b=Co},e.onRelease=e.onGestureStart=function(z,se){if(d.offset&&B(),!se)Y.restart(!0);else{ft.cache++;var ue=x(),O,ve;i&&(O=_(),ve=O+ue*.05*-z.velocityX/.227,ue*=d0(_,O,ve,Mr(c,ri)),L.vars.scrollX=w(ve)),O=d(),ve=O+ue*.05*-z.velocityY/.227,ue*=d0(d,O,ve,Mr(c,pn)),L.vars.scrollY=S(ve),L.invalidate().duration(ue).play(.01),(Ss&&L.vars.scrollY>=l||O>=l-1)&&ke.to({},{onUpdate:X,duration:ue})}o&&o(z)},e.onWheel=function(){L._ts&&L.pause(),Un()-m>1e3&&(b=0,m=Un())},e.onChange=function(z,se,ue,O,ve){if(Co!==b&&M(),se&&i&&_(w(O[2]===se?H+(z.startX-z.x):_()+se-O[1])),ue){d.offset&&B();var xe=ve[2]===ue,ze=xe?K+z.startY-z.y:d()+ue-ve[1],Ge=S(ze);xe&&ze!==Ge&&(K+=Ge-ze),d(Ge)}(ue||se)&&Qr()},e.onEnable=function(){Vh(c,i?!1:"x"),ht.addEventListener("refresh",X),Mn(ut,"resize",X),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),A.enable()},e.onDisable=function(){Vh(c,!0),yn(ut,"resize",X),ht.removeEventListener("refresh",X),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new sn(e),a.iOS=Ss,Ss&&!d()&&d(1),Ss&&ke.ticker.add(dr),Y=a._dc,L=ke.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sy(d,d(),function(){return L.pause()})},onUpdate:Qr,onComplete:Y.vars.onComplete}),a};ht.sort=function(n){if(zn(n))return ct.sort(n);var e=ut.pageYOffset||0;return ht.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),ct.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ht.observe=function(n){return new sn(n)};ht.normalizeScroll=function(n){if(typeof n>"u")return Jn;if(n===!0&&Jn)return Jn.enable();if(n===!1){Jn&&Jn.kill(),Jn=n;return}var e=n instanceof sn?n:u3(n);return Jn&&Jn.target===e.target&&Jn.kill(),Po(e.target)&&(Jn=e),e};ht.core={_getVelocityProp:gp,_inputObserver:oy,_scrollers:ft,_proxies:wr,bridge:{ss:function(){Yi||Io("scrollStart"),Yi=Un()},ref:function(){return Nn}}};$S()&&ke.registerPlugin(ht);Lt.registerPlugin(ht);let _0=!1;function f3(){No(()=>{const n=!_0;n?(Lt.to(".loader-text",{opacity:1,duration:.5,onComplete:()=>{Lt.to(".loader-text",{scale:1.5,opacity:0,duration:.5,delay:.5}),Lt.to(".page-loader",{yPercent:-100,duration:.8,delay:1,ease:"power2.inOut"})}}),_0=!0):(Lt.set(".loader-text",{opacity:0}),Lt.set(".page-loader",{yPercent:-100}));const e=n?1.5:.2;Lt.timeline({delay:e}).to(".hero-label",{opacity:1,y:0,duration:.8}).to(".hero-subtitle",{opacity:1,y:0,duration:.8},"-=0.2").to(".cta-button",{opacity:1,y:0,duration:.8},"-=0.4").to(".scroll-indicator",{opacity:1,duration:.8},"-=0.4"),Lt.utils.toArray(".section-title").forEach(r=>{Lt.from(r.querySelector("span"),{scrollTrigger:{trigger:r,start:"top 80%"},x:-100,opacity:0,duration:1,ease:"power3.out"})}),Lt.utils.toArray(".about-text p").forEach((r,s)=>{Lt.to(r,{scrollTrigger:{trigger:r,start:"top 85%"},opacity:1,y:0,duration:.8,delay:s*.2})}),Lt.utils.toArray(".stat-item").forEach((r,s)=>{Lt.to(r,{scrollTrigger:{trigger:r,start:"top 85%"},opacity:1,y:0,duration:.8,delay:s*.1})}),Lt.utils.toArray(".project-item").forEach(r=>{Lt.to(r,{scrollTrigger:{trigger:r,start:"top 75%"},opacity:1,y:0,duration:1,ease:"power3.out"})}),Lt.utils.toArray(".tech-card").forEach((r,s)=>{Lt.to(r,{scrollTrigger:{trigger:r,start:"top 85%"},opacity:1,scale:1,duration:.6,delay:s*.1,ease:"back.out(1.7)"})}),Lt.utils.toArray(".timeline-item").forEach(r=>{Lt.to(r,{scrollTrigger:{trigger:r,start:"top 80%"},opacity:1,x:0,duration:.8,ease:"power3.out"})}),Lt.utils.toArray(".foundation-timeline-item").forEach((r,s)=>{Lt.to(r,{scrollTrigger:{trigger:r,start:"top 85%"},opacity:1,x:0,duration:.85,delay:s*.08,ease:"power3.out"})}),Lt.timeline({scrollTrigger:{trigger:".contact-section",start:"top 70%"}}).to(".contact-title",{opacity:1,y:0,duration:1}).to(".contact-subtitle",{opacity:1,y:0,duration:.8},"-=0.6").to(".contact-links",{opacity:1,y:0,duration:.8},"-=0.6"),Lt.utils.toArray(".project-visual").forEach(r=>{Lt.to(r,{scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:1},y:-50})})}),Uo(()=>{ht.getAll().forEach(n=>n.kill()),Lt.killTweensOf("*")})}const h3={class:"scroll-progress"},d3={__name:"HomePage",setup(n){Lt.registerPlugin(Ya);const e=new Date().getFullYear(),t=va(!1),i=va("home"),r=va(0),s=[{id:"home",label:"Home",number:"00"},{id:"about",label:"About",number:"01"},{id:"work",label:"Work",number:"02"},{id:"stack",label:"Stack",number:"03"},{id:"experience",label:"Experience",number:"04"},{id:"foundations",label:"Education",number:"05"},{id:"contact",label:"Contact",number:"06"}],o=ci(()=>s.filter(p=>p.id!=="home")),a=ci(()=>({transform:`scaleX(${r.value})`}));let l=null;const c=()=>{t.value=!t.value},u=()=>{t.value=!1},h=p=>{const m=document.getElementById(p);m&&(Lt.to(window,{scrollTo:{y:m,offsetY:p==="home"?0:80},duration:.95,ease:"power3.inOut"}),u())},f=()=>{const p=window.scrollY+window.innerHeight*.4;let m="home";s.forEach(x=>{const b=document.getElementById(x.id);b&&b.offsetTop<=p&&(m=x.id)}),i.value=m},d=()=>{const p=document.documentElement.scrollHeight-window.innerHeight;r.value=p>0?Math.min(window.scrollY/p,1):0},_=()=>{f(),d()},g=()=>{const p=s.map(m=>document.getElementById(m.id)).filter(Boolean);l=new IntersectionObserver(m=>{m.forEach(x=>{x.isIntersecting&&x.target.classList.add("is-visible")})},{threshold:.18,rootMargin:"0px 0px -12% 0px"}),p.forEach(m=>{l.observe(m)})};return No(async()=>{document.body.classList.add("enhanced-motion"),await Op();const p=document.getElementById("home");p&&p.classList.add("is-visible"),g(),_(),window.addEventListener("scroll",_,{passive:!0}),window.addEventListener("resize",_)}),Uo(()=>{document.body.classList.remove("enhanced-motion"),window.removeEventListener("scroll",_),window.removeEventListener("resize",_),l&&l.disconnect()}),XD(),f3(),(p,m)=>(je(),tt(qt,null,[m[0]||(m[0]=ae("div",{class:"page-loader"},[ae("div",{class:"loader-text"},"Ayomide Agbaje")],-1)),ae("div",h3,[ae("span",{class:"scroll-progress-bar",style:df(a.value)},null,4)]),$e(g1,{"is-menu-active":t.value,"active-section":i.value,"nav-items":o.value,onToggleMenu:c,onCloseMenu:u,onNavigate:h},null,8,["is-menu-active","active-section","nav-items"]),$e(M1,{items:s,"active-section":i.value,onNavigate:h},null,8,["active-section"]),$e(T1,{onNavigate:h}),$e(R1),$e(Y1),$e(j1),$e(lA),$e(vA),$e(TA),$e(wA,{year:dt(e)},null,8,["year"])],64))}},p3={class:"case-study-page"},m3={key:0,class:"case-study-shell"},_3={class:"case-study-header route-section is-visible"},g3={class:"case-study-kicker"},v3={class:"case-study-hero route-section is-visible"},x3={class:"case-study-title"},S3={class:"case-study-summary"},y3={class:"case-study-summary"},M3={class:"case-study-tags"},b3={class:"case-study-grid route-section is-visible"},E3={class:"case-study-panel"},T3={class:"case-study-text"},A3={class:"case-study-panel"},w3={class:"case-study-text"},C3={class:"case-study-grid route-section is-visible"},R3={class:"case-study-panel"},P3={class:"case-study-list"},D3={class:"case-study-panel"},I3={class:"case-study-list"},L3={class:"case-study-metrics route-section is-visible"},N3={class:"case-study-metric-value"},U3={class:"case-study-metric-label"},F3={key:1,class:"case-study-empty"},O3={__name:"CaseStudyPage",setup(n){const e=HE(),t=ci(()=>{const i=e.params.slug;return P1(typeof i=="string"?i:"")});return(i,r)=>(je(),tt("main",p3,[t.value?(je(),tt("div",m3,[ae("header",_3,[$e(dt(Hu),{class:"case-study-back",to:"/"},{default:Da(()=>[$e(dt(j_),{class:"case-study-back-icon"}),r[0]||(r[0]=ae("span",null,"Back to Portfolio",-1))]),_:1}),ae("span",g3,"Case Study "+wt(t.value.number),1)]),ae("section",v3,[ae("h1",x3,wt(t.value.title),1),ae("p",S3,wt(t.value.summary),1),ae("p",y3,wt(t.value.summarySecondary),1),ae("div",M3,[(je(!0),tt(qt,null,Hi(t.value.tags,s=>(je(),tt("span",{key:s,class:"tag"},wt(s),1))),128))])]),ae("section",b3,[ae("article",E3,[r[1]||(r[1]=ae("h2",{class:"case-study-section-title"},"Challenge",-1)),ae("p",T3,wt(t.value.challenge),1)]),ae("article",A3,[r[2]||(r[2]=ae("h2",{class:"case-study-section-title"},"Solution",-1)),ae("p",w3,wt(t.value.solution),1)])]),ae("section",C3,[ae("article",R3,[r[3]||(r[3]=ae("h2",{class:"case-study-section-title"},"Impact",-1)),ae("ul",P3,[(je(!0),tt(qt,null,Hi(t.value.impact,s=>(je(),tt("li",{key:s},[$e(dt(jn),{class:"list-item-icon"}),ae("span",null,wt(s),1)]))),128))])]),ae("article",D3,[r[4]||(r[4]=ae("h2",{class:"case-study-section-title"},"Architecture Notes",-1)),ae("ul",I3,[(je(!0),tt(qt,null,Hi(t.value.architecture,s=>(je(),tt("li",{key:s},[$e(dt(jn),{class:"list-item-icon"}),ae("span",null,wt(s),1)]))),128))])])]),ae("section",L3,[(je(!0),tt(qt,null,Hi(t.value.metrics,s=>(je(),tt("article",{class:"case-study-metric",key:s.label},[ae("div",N3,wt(s.value),1),ae("div",U3,wt(s.label),1)]))),128))])])):(je(),tt("div",F3,[r[6]||(r[6]=ae("h1",{class:"case-study-title"},"Case Study Not Found",-1)),r[7]||(r[7]=ae("p",{class:"case-study-text"},"The requested case study does not exist.",-1)),$e(dt(Hu),{class:"case-study-back",to:"/"},{default:Da(()=>[$e(dt(j_),{class:"case-study-back-icon"}),r[5]||(r[5]=ae("span",null,"Return to Portfolio",-1))]),_:1})]))]))}},B3=VE({history:yE("./"),routes:[{path:"/",name:"home",component:d3},{path:"/case-study/:slug",name:"case-study",component:O3,props:!0},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(n,e,t){return t||(n.hash?{el:n.hash,top:80,behavior:"smooth"}:{top:0})}});Nb(GE).use(B3).mount("#app");
