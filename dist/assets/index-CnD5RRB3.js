(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function up(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const zt={},la=[],yr=()=>{},n0=()=>!1,$u=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),fp=n=>n.startsWith("onUpdate:"),pn=Object.assign,dp=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},GS=Object.prototype.hasOwnProperty,Tt=(n,e)=>GS.call(n,e),Ze=Array.isArray,ca=n=>ic(n)==="[object Map]",i0=n=>ic(n)==="[object Set]",_m=n=>ic(n)==="[object Date]",it=n=>typeof n=="function",Jt=n=>typeof n=="string",Ar=n=>typeof n=="symbol",wt=n=>n!==null&&typeof n=="object",r0=n=>(wt(n)||it(n))&&it(n.then)&&it(n.catch),s0=Object.prototype.toString,ic=n=>s0.call(n),WS=n=>ic(n).slice(8,-1),o0=n=>ic(n)==="[object Object]",hp=n=>Jt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,pl=up(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ku=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},XS=/-\w/g,Xi=Ku(n=>n.replace(XS,e=>e.slice(1).toUpperCase())),qS=/\B([A-Z])/g,Po=Ku(n=>n.replace(qS,"-$1").toLowerCase()),ju=Ku(n=>n.charAt(0).toUpperCase()+n.slice(1)),_f=Ku(n=>n?`on${ju(n)}`:""),Ps=(n,e)=>!Object.is(n,e),gf=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},a0=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},YS=n=>{const e=parseFloat(n);return isNaN(e)?n:e},$S=n=>{const e=Jt(n)?Number(n):NaN;return isNaN(e)?n:e};let gm;const Zu=()=>gm||(gm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ju(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Jt(i)?JS(i):Ju(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Jt(n)||wt(n))return n}const KS=/;(?![^(]*\))/g,jS=/:([^]+)/,ZS=/\/\*[^]*?\*\//g;function JS(n){const e={};return n.replace(ZS,"").split(KS).forEach(t=>{if(t){const i=t.split(jS);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ds(n){let e="";if(Jt(n))e=n;else if(Ze(n))for(let t=0;t<n.length;t++){const i=Ds(n[t]);i&&(e+=i+" ")}else if(wt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const QS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ey=up(QS);function l0(n){return!!n||n===""}function ty(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=pp(n[i],e[i]);return t}function pp(n,e){if(n===e)return!0;let t=_m(n),i=_m(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Ar(n),i=Ar(e),t||i)return n===e;if(t=Ze(n),i=Ze(e),t||i)return t&&i?ty(n,e):!1;if(t=wt(n),i=wt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!pp(n[o],e[o]))return!1}}return String(n)===String(e)}const c0=n=>!!(n&&n.__v_isRef===!0),At=n=>Jt(n)?n:n==null?"":Ze(n)||wt(n)&&(n.toString===s0||!it(n.toString))?c0(n)?At(n.value):JSON.stringify(n,u0,2):String(n),u0=(n,e)=>c0(e)?u0(n,e.value):ca(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[vf(i,s)+" =>"]=r,t),{})}:i0(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>vf(t))}:Ar(e)?vf(e):wt(e)&&!Ze(e)&&!o0(e)?String(e):e,vf=(n,e="")=>{var t;return Ar(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let si;class ny{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=si,!e&&si&&(this.index=(si.scopes||(si.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=si;try{return si=this,e()}finally{si=t}}}on(){++this._on===1&&(this.prevScope=si,si=this)}off(){this._on>0&&--this._on===0&&(si=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function iy(){return si}let kt;const xf=new WeakSet;class f0{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,si&&si.active&&si.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xf.has(this)&&(xf.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||h0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vm(this),p0(this);const e=kt,t=er;kt=this,er=!0;try{return this.fn()}finally{m0(this),kt=e,er=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gp(e);this.deps=this.depsTail=void 0,vm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xf.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wd(this)&&this.run()}get dirty(){return wd(this)}}let d0=0,ml,_l;function h0(n,e=!1){if(n.flags|=8,e){n.next=_l,_l=n;return}n.next=ml,ml=n}function mp(){d0++}function _p(){if(--d0>0)return;if(_l){let e=_l;for(_l=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ml;){let e=ml;for(ml=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function p0(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function m0(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),gp(i),ry(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function wd(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_0(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function _0(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ul)||(n.globalVersion=Ul,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!wd(n))))return;n.flags|=2;const e=n.dep,t=kt,i=er;kt=n,er=!0;try{p0(n);const r=n.fn(n._value);(e.version===0||Ps(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{kt=t,er=i,m0(n),n.flags&=-3}}function gp(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)gp(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ry(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let er=!0;const g0=[];function Jr(){g0.push(er),er=!1}function Qr(){const n=g0.pop();er=n===void 0?!0:n}function vm(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=kt;kt=void 0;try{e()}finally{kt=t}}}let Ul=0;class sy{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!kt||!er||kt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==kt)t=this.activeLink=new sy(kt,this),kt.deps?(t.prevDep=kt.depsTail,kt.depsTail.nextDep=t,kt.depsTail=t):kt.deps=kt.depsTail=t,v0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=kt.depsTail,t.nextDep=void 0,kt.depsTail.nextDep=t,kt.depsTail=t,kt.deps===t&&(kt.deps=i)}return t}trigger(e){this.version++,Ul++,this.notify(e)}notify(e){mp();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{_p()}}}function v0(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)v0(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Cd=new WeakMap,go=Symbol(""),Rd=Symbol(""),Fl=Symbol("");function Nn(n,e,t){if(er&&kt){let i=Cd.get(n);i||Cd.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new vp),r.map=i,r.key=t),r.track()}}function Gr(n,e,t,i,r,s){const o=Cd.get(n);if(!o){Ul++;return}const a=l=>{l&&l.trigger()};if(mp(),e==="clear")o.forEach(a);else{const l=Ze(n),c=l&&hp(t);if(l&&t==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Fl||!Ar(f)&&f>=u)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Fl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(go)),ca(n)&&a(o.get(Rd)));break;case"delete":l||(a(o.get(go)),ca(n)&&a(o.get(Rd)));break;case"set":ca(n)&&a(o.get(go));break}}_p()}function Oo(n){const e=yt(n);return e===n?e:(Nn(e,"iterate",Fl),Gi(n)?e:e.map(nr))}function Qu(n){return Nn(n=yt(n),"iterate",Fl),n}function xs(n,e){return es(n)?Ma(vo(n)?nr(e):e):nr(e)}const oy={__proto__:null,[Symbol.iterator](){return Sf(this,Symbol.iterator,n=>xs(this,n))},concat(...n){return Oo(this).concat(...n.map(e=>Ze(e)?Oo(e):e))},entries(){return Sf(this,"entries",n=>(n[1]=xs(this,n[1]),n))},every(n,e){return Dr(this,"every",n,e,void 0,arguments)},filter(n,e){return Dr(this,"filter",n,e,t=>t.map(i=>xs(this,i)),arguments)},find(n,e){return Dr(this,"find",n,e,t=>xs(this,t),arguments)},findIndex(n,e){return Dr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Dr(this,"findLast",n,e,t=>xs(this,t),arguments)},findLastIndex(n,e){return Dr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Dr(this,"forEach",n,e,void 0,arguments)},includes(...n){return yf(this,"includes",n)},indexOf(...n){return yf(this,"indexOf",n)},join(n){return Oo(this).join(n)},lastIndexOf(...n){return yf(this,"lastIndexOf",n)},map(n,e){return Dr(this,"map",n,e,void 0,arguments)},pop(){return Ga(this,"pop")},push(...n){return Ga(this,"push",n)},reduce(n,...e){return xm(this,"reduce",n,e)},reduceRight(n,...e){return xm(this,"reduceRight",n,e)},shift(){return Ga(this,"shift")},some(n,e){return Dr(this,"some",n,e,void 0,arguments)},splice(...n){return Ga(this,"splice",n)},toReversed(){return Oo(this).toReversed()},toSorted(n){return Oo(this).toSorted(n)},toSpliced(...n){return Oo(this).toSpliced(...n)},unshift(...n){return Ga(this,"unshift",n)},values(){return Sf(this,"values",n=>xs(this,n))}};function Sf(n,e,t){const i=Qu(n),r=i[e]();return i!==n&&!Gi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const ay=Array.prototype;function Dr(n,e,t,i,r,s){const o=Qu(n),a=o!==n&&!Gi(n),l=o[e];if(l!==ay[e]){const d=l.apply(n,s);return a?nr(d):d}let c=t;o!==n&&(a?c=function(d,f){return t.call(this,xs(n,d),f,n)}:t.length>2&&(c=function(d,f){return t.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function xm(n,e,t,i){const r=Qu(n);let s=t;return r!==n&&(Gi(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,xs(n,a),l,n)}),r[e](s,...i)}function yf(n,e,t){const i=yt(n);Nn(i,"iterate",Fl);const r=i[e](...t);return(r===-1||r===!1)&&yp(t[0])?(t[0]=yt(t[0]),i[e](...t)):r}function Ga(n,e,t=[]){Jr(),mp();const i=yt(n)[e].apply(n,t);return _p(),Qr(),i}const ly=up("__proto__,__v_isRef,__isVue"),x0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ar));function cy(n){Ar(n)||(n=String(n));const e=yt(this);return Nn(e,"has",n),e.hasOwnProperty(n)}class S0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?xy:b0:s?E0:M0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ze(e);if(!r){let l;if(o&&(l=oy[t]))return l;if(t==="hasOwnProperty")return cy}const a=Reflect.get(e,t,zn(e)?e:i);if((Ar(t)?x0.has(t):ly(t))||(r||Nn(e,"get",t),s))return a;if(zn(a)){const l=o&&hp(t)?a:a.value;return r&&wt(l)?Dd(l):l}return wt(a)?r?Dd(a):ef(a):a}}class y0 extends S0{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ze(e)&&hp(t);if(!this._isShallow){const c=es(s);if(!Gi(i)&&!es(i)&&(s=yt(s),i=yt(i)),!o&&zn(s)&&!zn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:Tt(e,t),l=Reflect.set(e,t,i,zn(e)?e:r);return e===yt(r)&&(a?Ps(i,s)&&Gr(e,"set",t,i):Gr(e,"add",t,i)),l}deleteProperty(e,t){const i=Tt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Gr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ar(t)||!x0.has(t))&&Nn(e,"has",t),i}ownKeys(e){return Nn(e,"iterate",Ze(e)?"length":go),Reflect.ownKeys(e)}}class uy extends S0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const fy=new y0,dy=new uy,hy=new y0(!0);const Pd=n=>n,fc=n=>Reflect.getPrototypeOf(n);function py(n,e,t){return function(...i){const r=this.__v_raw,s=yt(r),o=ca(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Pd:e?Ma:nr;return!e&&Nn(s,"iterate",l?Rd:go),pn(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function dc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function my(n,e){const t={get(r){const s=this.__v_raw,o=yt(s),a=yt(r);n||(Ps(r,a)&&Nn(o,"get",r),Nn(o,"get",a));const{has:l}=fc(o),c=e?Pd:n?Ma:nr;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Nn(yt(r),"iterate",go),r.size},has(r){const s=this.__v_raw,o=yt(s),a=yt(r);return n||(Ps(r,a)&&Nn(o,"has",r),Nn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=yt(a),c=e?Pd:n?Ma:nr;return!n&&Nn(l,"iterate",go),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return pn(t,n?{add:dc("add"),set:dc("set"),delete:dc("delete"),clear:dc("clear")}:{add(r){!e&&!Gi(r)&&!es(r)&&(r=yt(r));const s=yt(this);return fc(s).has.call(s,r)||(s.add(r),Gr(s,"add",r,r)),this},set(r,s){!e&&!Gi(s)&&!es(s)&&(s=yt(s));const o=yt(this),{has:a,get:l}=fc(o);let c=a.call(o,r);c||(r=yt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ps(s,u)&&Gr(o,"set",r,s):Gr(o,"add",r,s),this},delete(r){const s=yt(this),{has:o,get:a}=fc(s);let l=o.call(s,r);l||(r=yt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Gr(s,"delete",r,void 0),c},clear(){const r=yt(this),s=r.size!==0,o=r.clear();return s&&Gr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=py(r,n,e)}),t}function xp(n,e){const t=my(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Tt(t,r)&&r in i?t:i,r,s)}const _y={get:xp(!1,!1)},gy={get:xp(!1,!0)},vy={get:xp(!0,!1)};const M0=new WeakMap,E0=new WeakMap,b0=new WeakMap,xy=new WeakMap;function Sy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yy(n){return n.__v_skip||!Object.isExtensible(n)?0:Sy(WS(n))}function ef(n){return es(n)?n:Sp(n,!1,fy,_y,M0)}function T0(n){return Sp(n,!1,hy,gy,E0)}function Dd(n){return Sp(n,!0,dy,vy,b0)}function Sp(n,e,t,i,r){if(!wt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=yy(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function vo(n){return es(n)?vo(n.__v_raw):!!(n&&n.__v_isReactive)}function es(n){return!!(n&&n.__v_isReadonly)}function Gi(n){return!!(n&&n.__v_isShallow)}function yp(n){return n?!!n.__v_raw:!1}function yt(n){const e=n&&n.__v_raw;return e?yt(e):n}function My(n){return!Tt(n,"__v_skip")&&Object.isExtensible(n)&&a0(n,"__v_skip",!0),n}const nr=n=>wt(n)?ef(n):n,Ma=n=>wt(n)?Dd(n):n;function zn(n){return n?n.__v_isRef===!0:!1}function ua(n){return A0(n,!1)}function Ey(n){return A0(n,!0)}function A0(n,e){return zn(n)?n:new by(n,e)}class by{constructor(e,t){this.dep=new vp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:yt(e),this._value=t?e:nr(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Gi(e)||es(e);e=i?e:yt(e),Ps(e,t)&&(this._rawValue=e,this._value=i?e:nr(e),this.dep.trigger())}}function pt(n){return zn(n)?n.value:n}const Ty={get:(n,e,t)=>e==="__v_raw"?n:pt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return zn(r)&&!zn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function w0(n){return vo(n)?n:new Proxy(n,Ty)}class Ay{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new vp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ul-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&kt!==this)return h0(this,!0),!0}get value(){const e=this.dep.track();return _0(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function wy(n,e,t=!1){let i,r;return it(n)?i=n:(i=n.get,r=n.set),new Ay(i,r,t)}const hc={},yu=new WeakMap;let no;function Cy(n,e=!1,t=no){if(t){let i=yu.get(t);i||yu.set(t,i=[]),i.push(n)}}function Ry(n,e,t=zt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:Gi(y)||r===!1||r===0?Ms(y,1):Ms(y);let u,d,f,h,m=!1,g=!1;if(zn(n)?(d=()=>n.value,m=Gi(n)):vo(n)?(d=()=>c(n),m=!0):Ze(n)?(g=!0,m=n.some(y=>vo(y)||Gi(y)),d=()=>n.map(y=>{if(zn(y))return y.value;if(vo(y))return c(y);if(it(y))return l?l(y,2):y()})):it(n)?e?d=l?()=>l(n,2):n:d=()=>{if(f){Jr();try{f()}finally{Qr()}}const y=no;no=u;try{return l?l(n,3,[h]):n(h)}finally{no=y}}:d=yr,e&&r){const y=d,A=r===!0?1/0:r;d=()=>Ms(y(),A)}const p=iy(),_=()=>{u.stop(),p&&p.active&&dp(p.effects,u)};if(s&&e){const y=e;e=(...A)=>{y(...A),_()}}let v=g?new Array(n.length).fill(hc):hc;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(r||m||(g?A.some((R,w)=>Ps(R,v[w])):Ps(A,v))){f&&f();const R=no;no=u;try{const w=[A,v===hc?void 0:g&&v[0]===hc?[]:v,h];v=A,l?l(e,3,w):e(...w)}finally{no=R}}}else u.run()};return a&&a(E),u=new f0(d),u.scheduler=o?()=>o(E,!1):E,h=y=>Cy(y,!1,u),f=u.onStop=()=>{const y=yu.get(u);if(y){if(l)l(y,4);else for(const A of y)A();yu.delete(u)}},e?i?E(!0):v=u.run():o?o(E.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Ms(n,e=1/0,t){if(e<=0||!wt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,zn(n))Ms(n.value,e,t);else if(Ze(n))for(let i=0;i<n.length;i++)Ms(n[i],e,t);else if(i0(n)||ca(n))n.forEach(i=>{Ms(i,e,t)});else if(o0(n)){for(const i in n)Ms(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ms(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rc(n,e,t,i){try{return i?n(...i):n()}catch(r){tf(r,e,t)}}function ir(n,e,t,i){if(it(n)){const r=rc(n,e,t,i);return r&&r0(r)&&r.catch(s=>{tf(s,e,t)}),r}if(Ze(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ir(n[s],e,t,i));return r}}function tf(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||zt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(s){Jr(),rc(s,null,10,[n,l,c]),Qr();return}}Py(n,t,r,i,o)}function Py(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Zn=[];let cr=-1;const fa=[];let Ss=null,ta=0;const C0=Promise.resolve();let Mu=null;function Mp(n){const e=Mu||C0;return n?e.then(this?n.bind(this):n):e}function Dy(n){let e=cr+1,t=Zn.length;for(;e<t;){const i=e+t>>>1,r=Zn[i],s=Ol(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ep(n){if(!(n.flags&1)){const e=Ol(n),t=Zn[Zn.length-1];!t||!(n.flags&2)&&e>=Ol(t)?Zn.push(n):Zn.splice(Dy(e),0,n),n.flags|=1,R0()}}function R0(){Mu||(Mu=C0.then(D0))}function Iy(n){Ze(n)?fa.push(...n):Ss&&n.id===-1?Ss.splice(ta+1,0,n):n.flags&1||(fa.push(n),n.flags|=1),R0()}function Sm(n,e,t=cr+1){for(;t<Zn.length;t++){const i=Zn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Zn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function P0(n){if(fa.length){const e=[...new Set(fa)].sort((t,i)=>Ol(t)-Ol(i));if(fa.length=0,Ss){Ss.push(...e);return}for(Ss=e,ta=0;ta<Ss.length;ta++){const t=Ss[ta];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ss=null,ta=0}}const Ol=n=>n.id==null?n.flags&2?-1:1/0:n.id;function D0(n){try{for(cr=0;cr<Zn.length;cr++){const e=Zn[cr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rc(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cr<Zn.length;cr++){const e=Zn[cr];e&&(e.flags&=-2)}cr=-1,Zn.length=0,P0(),Mu=null,(Zn.length||fa.length)&&D0()}}let Ji=null,I0=null;function Eu(n){const e=Ji;return Ji=n,I0=n&&n.type.__scopeId||null,e}function Ea(n,e=Ji,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Au(-1);const s=Eu(e);let o;try{o=n(...r)}finally{Eu(s),i._d&&Au(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ws(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Jr(),ir(l,t,8,[n.el,a,n,e]),Qr())}}function tu(n,e){if(Un){let t=Un.provides;const i=Un.parent&&Un.parent.provides;i===t&&(t=Un.provides=Object.create(i)),t[n]=e}}function Mr(n,e,t=!1){const i=dv();if(i||da){let r=da?da._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&it(e)?e.call(i&&i.proxy):e}}const Ly=Symbol.for("v-scx"),Ny=()=>Mr(Ly);function nu(n,e,t){return L0(n,e,t)}function L0(n,e,t=zt){const{immediate:i,deep:r,flush:s,once:o}=t,a=pn({},t),l=e&&i||!e&&s!=="post";let c;if(zl){if(s==="sync"){const h=Ny();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=yr,h.resume=yr,h.pause=yr,h}}const u=Un;a.call=(h,m,g)=>ir(h,u,m,g);let d=!1;s==="post"?a.scheduler=h=>{ri(h,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(h,m)=>{m?h():Ep(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Ry(n,e,a);return zl&&(c?c.push(f):l&&f()),f}function Uy(n,e,t){const i=this.proxy,r=Jt(n)?n.includes(".")?N0(i,n):()=>i[n]:n.bind(i,i);let s;it(e)?s=e:(s=e.handler,t=e);const o=sc(this),a=L0(r,s.bind(i),t);return o(),a}function N0(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Fy=Symbol("_vte"),U0=n=>n.__isTeleport,ur=Symbol("_leaveCb"),Wa=Symbol("_enterCb");function Oy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Do(()=>{n.isMounted=!0}),Io(()=>{n.isUnmounting=!0}),n}const Ii=[Function,Array],F0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ii,onEnter:Ii,onAfterEnter:Ii,onEnterCancelled:Ii,onBeforeLeave:Ii,onLeave:Ii,onAfterLeave:Ii,onLeaveCancelled:Ii,onBeforeAppear:Ii,onAppear:Ii,onAfterAppear:Ii,onAppearCancelled:Ii},O0=n=>{const e=n.subTree;return e.component?O0(e.component):e},By={name:"BaseTransition",props:F0,setup(n,{slots:e}){const t=dv(),i=Oy();return()=>{const r=e.default&&z0(e.default(),!0);if(!r||!r.length)return;const s=B0(r),o=yt(n),{mode:a}=o;if(i.isLeaving)return Mf(s);const l=ym(s);if(!l)return Mf(s);let c=Id(l,o,i,t,d=>c=d);l.type!==Jn&&Bl(l,c);let u=t.subTree&&ym(t.subTree);if(u&&u.type!==Jn&&!ao(u,l)&&O0(t).type!==Jn){let d=Id(u,o,i,t);if(Bl(u,d),a==="out-in"&&l.type!==Jn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},Mf(s);a==="in-out"&&l.type!==Jn?d.delayLeave=(f,h,m)=>{const g=k0(i,u);g[String(u.key)]=u,f[ur]=()=>{h(),f[ur]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function B0(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Jn){e=t;break}}return e}const ky=By;function k0(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Id(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:p,onAppear:_,onAfterAppear:v,onAppearCancelled:E}=e,y=String(n.key),A=k0(t,n),R=(M,O)=>{M&&ir(M,i,9,O)},w=(M,O)=>{const L=O[1];R(M,O),Ze(M)?M.every(D=>D.length<=1)&&L():M.length<=1&&L()},S={mode:o,persisted:a,beforeEnter(M){let O=l;if(!t.isMounted)if(s)O=p||l;else return;M[ur]&&M[ur](!0);const L=A[y];L&&ao(n,L)&&L.el[ur]&&L.el[ur](),R(O,[M])},enter(M){let O=c,L=u,D=d;if(!t.isMounted)if(s)O=_||c,L=v||u,D=E||d;else return;let H=!1;M[Wa]=G=>{H||(H=!0,G?R(D,[M]):R(L,[M]),S.delayedLeave&&S.delayedLeave(),M[Wa]=void 0)};const q=M[Wa].bind(null,!1);O?w(O,[M,q]):q()},leave(M,O){const L=String(n.key);if(M[Wa]&&M[Wa](!0),t.isUnmounting)return O();R(f,[M]);let D=!1;M[ur]=q=>{D||(D=!0,O(),q?R(g,[M]):R(m,[M]),M[ur]=void 0,A[L]===n&&delete A[L])};const H=M[ur].bind(null,!1);A[L]=n,h?w(h,[M,H]):H()},clone(M){const O=Id(M,e,t,i,r);return r&&r(O),O}};return S}function Mf(n){if(nf(n))return n=Fs(n),n.children=null,n}function ym(n){if(!nf(n))return U0(n.type)&&n.children?B0(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&it(t.default))return t.default()}}function Bl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Bl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function z0(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===qt?(o.patchFlag&128&&r++,i=i.concat(z0(o.children,e,a))):(e||o.type!==Jn)&&i.push(a!=null?Fs(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function V0(n,e){return it(n)?pn({name:n.name},e,{setup:n}):n}function H0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Mm(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const bu=new WeakMap;function gl(n,e,t,i,r=!1){if(Ze(n)){n.forEach((g,p)=>gl(g,e&&(Ze(e)?e[p]:e),t,i,r));return}if(vl(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&gl(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?wp(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===zt?a.refs={}:a.refs,d=a.setupState,f=yt(d),h=d===zt?n0:g=>Mm(u,g)?!1:Tt(f,g),m=(g,p)=>!(p&&Mm(u,p));if(c!=null&&c!==l){if(Em(e),Jt(c))u[c]=null,h(c)&&(d[c]=null);else if(zn(c)){const g=e;m(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(it(l))rc(l,a,12,[o,u]);else{const g=Jt(l),p=zn(l);if(g||p){const _=()=>{if(n.f){const v=g?h(l)?d[l]:u[l]:m()||!n.k?l.value:u[n.k];if(r)Ze(v)&&dp(v,s);else if(Ze(v))v.includes(s)||v.push(s);else if(g)u[l]=[s],h(l)&&(d[l]=u[l]);else{const E=[s];m(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else g?(u[l]=o,h(l)&&(d[l]=o)):p&&(m(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const v=()=>{_(),bu.delete(n)};v.id=-1,bu.set(n,v),ri(v,t)}else Em(n),_()}}}function Em(n){const e=bu.get(n);e&&(e.flags|=8,bu.delete(n))}Zu().requestIdleCallback;Zu().cancelIdleCallback;const vl=n=>!!n.type.__asyncLoader,nf=n=>n.type.__isKeepAlive;function zy(n,e){G0(n,"a",e)}function Vy(n,e){G0(n,"da",e)}function G0(n,e,t=Un){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(rf(e,i,t),t){let r=t.parent;for(;r&&r.parent;)nf(r.parent.vnode)&&Hy(i,e,t,r),r=r.parent}}function Hy(n,e,t,i){const r=rf(e,n,i,!0);W0(()=>{dp(i[e],r)},t)}function rf(n,e,t=Un,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Jr();const a=sc(t),l=ir(e,t,n,o);return a(),Qr(),l});return i?r.unshift(s):r.push(s),s}}const as=n=>(e,t=Un)=>{(!zl||n==="sp")&&rf(n,(...i)=>e(...i),t)},Gy=as("bm"),Do=as("m"),Wy=as("bu"),Xy=as("u"),Io=as("bum"),W0=as("um"),qy=as("sp"),Yy=as("rtg"),$y=as("rtc");function Ky(n,e=Un){rf("ec",n,e)}const jy="components",X0=Symbol.for("v-ndc");function Zy(n){return Jt(n)?Jy(jy,n,!1)||n:n||X0}function Jy(n,e,t=!0,i=!1){const r=Ji||Un;if(r){const s=r.type;{const a=OM(s,!1);if(a&&(a===e||a===Xi(e)||a===ju(Xi(e))))return s}const o=bm(r[n]||s[n],e)||bm(r.appContext[n],e);return!o&&i?s:o}}function bm(n,e){return n&&(n[e]||n[Xi(e)]||n[ju(Xi(e))])}function zi(n,e,t,i){let r;const s=t,o=Ze(n);if(o||Jt(n)){const a=o&&vo(n);let l=!1,c=!1;a&&(l=!Gi(n),c=es(n),n=Qu(n)),r=new Array(n.length);for(let u=0,d=n.length;u<d;u++)r[u]=e(l?c?Ma(nr(n[u])):nr(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(wt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Ld=n=>n?hv(n)?wp(n):Ld(n.parent):null,xl=pn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ld(n.parent),$root:n=>Ld(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Y0(n),$forceUpdate:n=>n.f||(n.f=()=>{Ep(n.update)}),$nextTick:n=>n.n||(n.n=Mp.bind(n.proxy)),$watch:n=>Uy.bind(n)}),Ef=(n,e)=>n!==zt&&!n.__isScriptSetup&&Tt(n,e),Qy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ef(i,e))return o[e]=1,i[e];if(r!==zt&&Tt(r,e))return o[e]=2,r[e];if(Tt(s,e))return o[e]=3,s[e];if(t!==zt&&Tt(t,e))return o[e]=4,t[e];Nd&&(o[e]=0)}}const c=xl[e];let u,d;if(c)return e==="$attrs"&&Nn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==zt&&Tt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Tt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ef(r,e)?(r[e]=t,!0):i!==zt&&Tt(i,e)?(i[e]=t,!0):Tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==zt&&a[0]!=="$"&&Tt(n,a)||Ef(e,a)||Tt(s,a)||Tt(i,a)||Tt(xl,a)||Tt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Tm(n){return Ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Nd=!0;function eM(n){const e=Y0(n),t=n.proxy,i=n.ctx;Nd=!1,e.beforeCreate&&Am(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:g,deactivated:p,beforeDestroy:_,beforeUnmount:v,destroyed:E,unmounted:y,render:A,renderTracked:R,renderTriggered:w,errorCaptured:S,serverPrefetch:M,expose:O,inheritAttrs:L,components:D,directives:H,filters:q}=e;if(c&&tM(c,i,null),o)for(const B in o){const ne=o[B];it(ne)&&(i[B]=ne.bind(t))}if(r){const B=r.call(t,t);wt(B)&&(n.data=ef(B))}if(Nd=!0,s)for(const B in s){const ne=s[B],fe=it(ne)?ne.bind(t,t):it(ne.get)?ne.get.bind(t,t):yr,F=!it(ne)&&it(ne.set)?ne.set.bind(t):yr,ge=ai({get:fe,set:F});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>ge.value,set:ve=>ge.value=ve})}if(a)for(const B in a)q0(a[B],i,t,B);if(l){const B=it(l)?l.call(t):l;Reflect.ownKeys(B).forEach(ne=>{tu(ne,B[ne])})}u&&Am(u,n,"c");function W(B,ne){Ze(ne)?ne.forEach(fe=>B(fe.bind(t))):ne&&B(ne.bind(t))}if(W(Gy,d),W(Do,f),W(Wy,h),W(Xy,m),W(zy,g),W(Vy,p),W(Ky,S),W($y,R),W(Yy,w),W(Io,v),W(W0,y),W(qy,M),Ze(O))if(O.length){const B=n.exposed||(n.exposed={});O.forEach(ne=>{Object.defineProperty(B,ne,{get:()=>t[ne],set:fe=>t[ne]=fe,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===yr&&(n.render=A),L!=null&&(n.inheritAttrs=L),D&&(n.components=D),H&&(n.directives=H),M&&H0(n)}function tM(n,e,t=yr){Ze(n)&&(n=Ud(n));for(const i in n){const r=n[i];let s;wt(r)?"default"in r?s=Mr(r.from||i,r.default,!0):s=Mr(r.from||i):s=Mr(r),zn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Am(n,e,t){ir(Ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function q0(n,e,t,i){let r=i.includes(".")?N0(t,i):()=>t[i];if(Jt(n)){const s=e[n];it(s)&&nu(r,s)}else if(it(n))nu(r,n.bind(t));else if(wt(n))if(Ze(n))n.forEach(s=>q0(s,e,t,i));else{const s=it(n.handler)?n.handler.bind(t):e[n.handler];it(s)&&nu(r,s,n)}}function Y0(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Tu(l,c,o,!0)),Tu(l,e,o)),wt(e)&&s.set(e,l),l}function Tu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Tu(n,s,t,!0),r&&r.forEach(o=>Tu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=nM[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const nM={data:wm,props:Cm,emits:Cm,methods:rl,computed:rl,beforeCreate:Gn,created:Gn,beforeMount:Gn,mounted:Gn,beforeUpdate:Gn,updated:Gn,beforeDestroy:Gn,beforeUnmount:Gn,destroyed:Gn,unmounted:Gn,activated:Gn,deactivated:Gn,errorCaptured:Gn,serverPrefetch:Gn,components:rl,directives:rl,watch:rM,provide:wm,inject:iM};function wm(n,e){return e?n?function(){return pn(it(n)?n.call(this,this):n,it(e)?e.call(this,this):e)}:e:n}function iM(n,e){return rl(Ud(n),Ud(e))}function Ud(n){if(Ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Gn(n,e){return n?[...new Set([].concat(n,e))]:e}function rl(n,e){return n?pn(Object.create(null),n,e):e}function Cm(n,e){return n?Ze(n)&&Ze(e)?[...new Set([...n,...e])]:pn(Object.create(null),Tm(n),Tm(e??{})):e}function rM(n,e){if(!n)return e;if(!e)return n;const t=pn(Object.create(null),n);for(const i in e)t[i]=Gn(n[i],e[i]);return t}function $0(){return{app:null,config:{isNativeTag:n0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let sM=0;function oM(n,e){return function(i,r=null){it(i)||(i=pn({},i)),r!=null&&!wt(r)&&(r=null);const s=$0(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:sM++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:kM,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&it(u.install)?(o.add(u),u.install(c,...d)):it(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||$e(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,wp(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ir(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=da;da=c;try{return u()}finally{da=d}}};return c}}let da=null;const aM=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Xi(e)}Modifiers`]||n[`${Po(e)}Modifiers`];function lM(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||zt;let r=t;const s=e.startsWith("update:"),o=s&&aM(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Jt(u)?u.trim():u)),o.number&&(r=t.map(YS)));let a,l=i[a=_f(e)]||i[a=_f(Xi(e))];!l&&s&&(l=i[a=_f(Po(e))]),l&&ir(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ir(c,n,6,r)}}const cM=new WeakMap;function K0(n,e,t=!1){const i=t?cM:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!it(n)){const l=c=>{const u=K0(c,e,!0);u&&(a=!0,pn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(wt(n)&&i.set(n,null),null):(Ze(s)?s.forEach(l=>o[l]=null):pn(o,s),wt(n)&&i.set(n,o),o)}function sf(n,e){return!n||!$u(e)?!1:(e=e.slice(2).replace(/Once$/,""),Tt(n,e[0].toLowerCase()+e.slice(1))||Tt(n,Po(e))||Tt(n,e))}function Rm(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:m,inheritAttrs:g}=n,p=Eu(n);let _,v;try{if(t.shapeFlag&4){const y=r||i,A=y;_=hr(c.call(A,y,u,d,h,f,m)),v=a}else{const y=e;_=hr(y.length>1?y(d,{attrs:a,slots:o,emit:l}):y(d,null)),v=e.props?a:uM(a)}}catch(y){Sl.length=0,tf(y,n,1),_=$e(Jn)}let E=_;if(v&&g!==!1){const y=Object.keys(v),{shapeFlag:A}=E;y.length&&A&7&&(s&&y.some(fp)&&(v=fM(v,s)),E=Fs(E,v,!1,!0))}return t.dirs&&(E=Fs(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Bl(E,t.transition),_=E,Eu(p),_}const uM=n=>{let e;for(const t in n)(t==="class"||t==="style"||$u(t))&&((e||(e={}))[t]=n[t]);return e},fM=(n,e)=>{const t={};for(const i in n)(!fp(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function dM(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Pm(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(j0(o,i,f)&&!sf(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Pm(i,o,c):!0:!!o;return!1}function Pm(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(j0(e,n,s)&&!sf(t,s))return!0}return!1}function j0(n,e,t){const i=n[t],r=e[t];return t==="style"&&wt(i)&&wt(r)?!pp(i,r):i!==r}function hM({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Z0={},J0=()=>Object.create(Z0),Q0=n=>Object.getPrototypeOf(n)===Z0;function pM(n,e,t,i=!1){const r={},s=J0();n.propsDefaults=Object.create(null),ev(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:T0(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function mM(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=yt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(sf(n.emitsOptions,f))continue;const h=e[f];if(l)if(Tt(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const m=Xi(f);r[m]=Fd(l,a,m,h,n,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{ev(n,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!Tt(e,d)&&((u=Po(d))===d||!Tt(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=Fd(l,a,d,void 0,n,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!Tt(e,d))&&(delete s[d],c=!0)}c&&Gr(n.attrs,"set","")}function ev(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(pl(l))continue;const c=e[l];let u;r&&Tt(r,u=Xi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:sf(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=yt(t),c=a||zt;for(let u=0;u<s.length;u++){const d=s[u];t[d]=Fd(r,l,d,c[d],n,!Tt(c,d))}}return o}function Fd(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&it(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=sc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Po(t))&&(i=!0))}return i}const _M=new WeakMap;function tv(n,e,t=!1){const i=t?_M:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!it(n)){const u=d=>{l=!0;const[f,h]=tv(d,e,!0);pn(o,f),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return wt(n)&&i.set(n,la),la;if(Ze(s))for(let u=0;u<s.length;u++){const d=Xi(s[u]);Dm(d)&&(o[d]=zt)}else if(s)for(const u in s){const d=Xi(u);if(Dm(d)){const f=s[u],h=o[d]=Ze(f)||it(f)?{type:f}:pn({},f),m=h.type;let g=!1,p=!0;if(Ze(m))for(let _=0;_<m.length;++_){const v=m[_],E=it(v)&&v.name;if(E==="Boolean"){g=!0;break}else E==="String"&&(p=!1)}else g=it(m)&&m.name==="Boolean";h[0]=g,h[1]=p,(g||Tt(h,"default"))&&a.push(d)}}const c=[o,a];return wt(n)&&i.set(n,c),c}function Dm(n){return n[0]!=="$"&&!pl(n)}const bp=n=>n==="_"||n==="_ctx"||n==="$stable",Tp=n=>Ze(n)?n.map(hr):[hr(n)],gM=(n,e,t)=>{if(e._n)return e;const i=Ea((...r)=>Tp(e(...r)),t);return i._c=!1,i},nv=(n,e,t)=>{const i=n._ctx;for(const r in n){if(bp(r))continue;const s=n[r];if(it(s))e[r]=gM(r,s,i);else if(s!=null){const o=Tp(s);e[r]=()=>o}}},iv=(n,e)=>{const t=Tp(e);n.slots.default=()=>t},rv=(n,e,t)=>{for(const i in e)(t||!bp(i))&&(n[i]=e[i])},vM=(n,e,t)=>{const i=n.slots=J0();if(n.vnode.shapeFlag&32){const r=e._;r?(rv(i,e,t),t&&a0(i,"_",r,!0)):nv(e,i)}else e&&iv(n,e)},xM=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=zt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:rv(r,e,t):(s=!e.$stable,nv(e,r)),o=e}else e&&(iv(n,e),o={default:1});if(s)for(const a in r)!bp(a)&&o[a]==null&&delete r[a]},ri=bM;function SM(n){return yM(n)}function yM(n,e){const t=Zu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=yr,insertStaticContent:m}=n,g=(I,P,V,J=null,j=null,N=null,C=void 0,ae=null,ce=!!P.dynamicChildren)=>{if(I===P)return;I&&!ao(I,P)&&(J=z(I),ve(I,j,N,!0),I=null),P.patchFlag===-2&&(ce=!1,P.dynamicChildren=null);const{type:ee,ref:de,shapeFlag:T}=P;switch(ee){case of:p(I,P,V,J);break;case Jn:_(I,P,V,J);break;case iu:I==null&&v(P,V,J,C);break;case qt:D(I,P,V,J,j,N,C,ae,ce);break;default:T&1?A(I,P,V,J,j,N,C,ae,ce):T&6?H(I,P,V,J,j,N,C,ae,ce):(T&64||T&128)&&ee.process(I,P,V,J,j,N,C,ae,ce,he)}de!=null&&j?gl(de,I&&I.ref,N,P||I,!P):de==null&&I&&I.ref!=null&&gl(I.ref,null,N,I,!0)},p=(I,P,V,J)=>{if(I==null)i(P.el=a(P.children),V,J);else{const j=P.el=I.el;P.children!==I.children&&c(j,P.children)}},_=(I,P,V,J)=>{I==null?i(P.el=l(P.children||""),V,J):P.el=I.el},v=(I,P,V,J)=>{[I.el,I.anchor]=m(I.children,P,V,J,I.el,I.anchor)},E=({el:I,anchor:P},V,J)=>{let j;for(;I&&I!==P;)j=f(I),i(I,V,J),I=j;i(P,V,J)},y=({el:I,anchor:P})=>{let V;for(;I&&I!==P;)V=f(I),r(I),I=V;r(P)},A=(I,P,V,J,j,N,C,ae,ce)=>{if(P.type==="svg"?C="svg":P.type==="math"&&(C="mathml"),I==null)R(P,V,J,j,N,C,ae,ce);else{const ee=I.el&&I.el._isVueCE?I.el:null;try{ee&&ee._beginPatch(),M(I,P,j,N,C,ae,ce)}finally{ee&&ee._endPatch()}}},R=(I,P,V,J,j,N,C,ae)=>{let ce,ee;const{props:de,shapeFlag:T,transition:x,dirs:U}=I;if(ce=I.el=o(I.type,N,de&&de.is,de),T&8?u(ce,I.children):T&16&&S(I.children,ce,null,J,j,bf(I,N),C,ae),U&&Ws(I,null,J,"created"),w(ce,I,I.scopeId,C,J),de){for(const ie in de)ie!=="value"&&!pl(ie)&&s(ce,ie,null,de[ie],N,J);"value"in de&&s(ce,"value",null,de.value,N),(ee=de.onVnodeBeforeMount)&&or(ee,J,I)}U&&Ws(I,null,J,"beforeMount");const Z=MM(j,x);Z&&x.beforeEnter(ce),i(ce,P,V),((ee=de&&de.onVnodeMounted)||Z||U)&&ri(()=>{ee&&or(ee,J,I),Z&&x.enter(ce),U&&Ws(I,null,J,"mounted")},j)},w=(I,P,V,J,j)=>{if(V&&h(I,V),J)for(let N=0;N<J.length;N++)h(I,J[N]);if(j){let N=j.subTree;if(P===N||lv(N.type)&&(N.ssContent===P||N.ssFallback===P)){const C=j.vnode;w(I,C,C.scopeId,C.slotScopeIds,j.parent)}}},S=(I,P,V,J,j,N,C,ae,ce=0)=>{for(let ee=ce;ee<I.length;ee++){const de=I[ee]=ae?Vr(I[ee]):hr(I[ee]);g(null,de,P,V,J,j,N,C,ae)}},M=(I,P,V,J,j,N,C)=>{const ae=P.el=I.el;let{patchFlag:ce,dynamicChildren:ee,dirs:de}=P;ce|=I.patchFlag&16;const T=I.props||zt,x=P.props||zt;let U;if(V&&Xs(V,!1),(U=x.onVnodeBeforeUpdate)&&or(U,V,P,I),de&&Ws(P,I,V,"beforeUpdate"),V&&Xs(V,!0),(T.innerHTML&&x.innerHTML==null||T.textContent&&x.textContent==null)&&u(ae,""),ee?O(I.dynamicChildren,ee,ae,V,J,bf(P,j),N):C||ne(I,P,ae,null,V,J,bf(P,j),N,!1),ce>0){if(ce&16)L(ae,T,x,V,j);else if(ce&2&&T.class!==x.class&&s(ae,"class",null,x.class,j),ce&4&&s(ae,"style",T.style,x.style,j),ce&8){const Z=P.dynamicProps;for(let ie=0;ie<Z.length;ie++){const K=Z[ie],Me=T[K],pe=x[K];(pe!==Me||K==="value")&&s(ae,K,Me,pe,j,V)}}ce&1&&I.children!==P.children&&u(ae,P.children)}else!C&&ee==null&&L(ae,T,x,V,j);((U=x.onVnodeUpdated)||de)&&ri(()=>{U&&or(U,V,P,I),de&&Ws(P,I,V,"updated")},J)},O=(I,P,V,J,j,N,C)=>{for(let ae=0;ae<P.length;ae++){const ce=I[ae],ee=P[ae],de=ce.el&&(ce.type===qt||!ao(ce,ee)||ce.shapeFlag&198)?d(ce.el):V;g(ce,ee,de,null,J,j,N,C,!0)}},L=(I,P,V,J,j)=>{if(P!==V){if(P!==zt)for(const N in P)!pl(N)&&!(N in V)&&s(I,N,P[N],null,j,J);for(const N in V){if(pl(N))continue;const C=V[N],ae=P[N];C!==ae&&N!=="value"&&s(I,N,ae,C,j,J)}"value"in V&&s(I,"value",P.value,V.value,j)}},D=(I,P,V,J,j,N,C,ae,ce)=>{const ee=P.el=I?I.el:a(""),de=P.anchor=I?I.anchor:a("");let{patchFlag:T,dynamicChildren:x,slotScopeIds:U}=P;U&&(ae=ae?ae.concat(U):U),I==null?(i(ee,V,J),i(de,V,J),S(P.children||[],V,de,j,N,C,ae,ce)):T>0&&T&64&&x&&I.dynamicChildren&&I.dynamicChildren.length===x.length?(O(I.dynamicChildren,x,V,j,N,C,ae),(P.key!=null||j&&P===j.subTree)&&sv(I,P,!0)):ne(I,P,V,de,j,N,C,ae,ce)},H=(I,P,V,J,j,N,C,ae,ce)=>{P.slotScopeIds=ae,I==null?P.shapeFlag&512?j.ctx.activate(P,V,J,C,ce):q(P,V,J,j,N,C,ce):G(I,P,ce)},q=(I,P,V,J,j,N,C)=>{const ae=I.component=IM(I,J,j);if(nf(I)&&(ae.ctx.renderer=he),LM(ae,!1,C),ae.asyncDep){if(j&&j.registerDep(ae,W,C),!I.el){const ce=ae.subTree=$e(Jn);_(null,ce,P,V),I.placeholder=ce.el}}else W(ae,I,P,V,j,N,C)},G=(I,P,V)=>{const J=P.component=I.component;if(dM(I,P,V))if(J.asyncDep&&!J.asyncResolved){B(J,P,V);return}else J.next=P,J.update();else P.el=I.el,J.vnode=P},W=(I,P,V,J,j,N,C)=>{const ae=()=>{if(I.isMounted){let{next:T,bu:x,u:U,parent:Z,vnode:ie}=I;{const Ae=ov(I);if(Ae){T&&(T.el=ie.el,B(I,T,C)),Ae.asyncDep.then(()=>{ri(()=>{I.isUnmounted||ee()},j)});return}}let K=T,Me;Xs(I,!1),T?(T.el=ie.el,B(I,T,C)):T=ie,x&&gf(x),(Me=T.props&&T.props.onVnodeBeforeUpdate)&&or(Me,Z,T,ie),Xs(I,!0);const pe=Rm(I),Be=I.subTree;I.subTree=pe,g(Be,pe,d(Be.el),z(Be),I,j,N),T.el=pe.el,K===null&&hM(I,pe.el),U&&ri(U,j),(Me=T.props&&T.props.onVnodeUpdated)&&ri(()=>or(Me,Z,T,ie),j)}else{let T;const{el:x,props:U}=P,{bm:Z,m:ie,parent:K,root:Me,type:pe}=I,Be=vl(P);Xs(I,!1),Z&&gf(Z),!Be&&(T=U&&U.onVnodeBeforeMount)&&or(T,K,P),Xs(I,!0);{Me.ce&&Me.ce._hasShadowRoot()&&Me.ce._injectChildStyle(pe);const Ae=I.subTree=Rm(I);g(null,Ae,V,J,I,j,N),P.el=Ae.el}if(ie&&ri(ie,j),!Be&&(T=U&&U.onVnodeMounted)){const Ae=P;ri(()=>or(T,K,Ae),j)}(P.shapeFlag&256||K&&vl(K.vnode)&&K.vnode.shapeFlag&256)&&I.a&&ri(I.a,j),I.isMounted=!0,P=V=J=null}};I.scope.on();const ce=I.effect=new f0(ae);I.scope.off();const ee=I.update=ce.run.bind(ce),de=I.job=ce.runIfDirty.bind(ce);de.i=I,de.id=I.uid,ce.scheduler=()=>Ep(de),Xs(I,!0),ee()},B=(I,P,V)=>{P.component=I;const J=I.vnode.props;I.vnode=P,I.next=null,mM(I,P.props,J,V),xM(I,P.children,V),Jr(),Sm(I),Qr()},ne=(I,P,V,J,j,N,C,ae,ce=!1)=>{const ee=I&&I.children,de=I?I.shapeFlag:0,T=P.children,{patchFlag:x,shapeFlag:U}=P;if(x>0){if(x&128){F(ee,T,V,J,j,N,C,ae,ce);return}else if(x&256){fe(ee,T,V,J,j,N,C,ae,ce);return}}U&8?(de&16&&$(ee,j,N),T!==ee&&u(V,T)):de&16?U&16?F(ee,T,V,J,j,N,C,ae,ce):$(ee,j,N,!0):(de&8&&u(V,""),U&16&&S(T,V,J,j,N,C,ae,ce))},fe=(I,P,V,J,j,N,C,ae,ce)=>{I=I||la,P=P||la;const ee=I.length,de=P.length,T=Math.min(ee,de);let x;for(x=0;x<T;x++){const U=P[x]=ce?Vr(P[x]):hr(P[x]);g(I[x],U,V,null,j,N,C,ae,ce)}ee>de?$(I,j,N,!0,!1,T):S(P,V,J,j,N,C,ae,ce,T)},F=(I,P,V,J,j,N,C,ae,ce)=>{let ee=0;const de=P.length;let T=I.length-1,x=de-1;for(;ee<=T&&ee<=x;){const U=I[ee],Z=P[ee]=ce?Vr(P[ee]):hr(P[ee]);if(ao(U,Z))g(U,Z,V,null,j,N,C,ae,ce);else break;ee++}for(;ee<=T&&ee<=x;){const U=I[T],Z=P[x]=ce?Vr(P[x]):hr(P[x]);if(ao(U,Z))g(U,Z,V,null,j,N,C,ae,ce);else break;T--,x--}if(ee>T){if(ee<=x){const U=x+1,Z=U<de?P[U].el:J;for(;ee<=x;)g(null,P[ee]=ce?Vr(P[ee]):hr(P[ee]),V,Z,j,N,C,ae,ce),ee++}}else if(ee>x)for(;ee<=T;)ve(I[ee],j,N,!0),ee++;else{const U=ee,Z=ee,ie=new Map;for(ee=Z;ee<=x;ee++){const Te=P[ee]=ce?Vr(P[ee]):hr(P[ee]);Te.key!=null&&ie.set(Te.key,ee)}let K,Me=0;const pe=x-Z+1;let Be=!1,Ae=0;const me=new Array(pe);for(ee=0;ee<pe;ee++)me[ee]=0;for(ee=U;ee<=T;ee++){const Te=I[ee];if(Me>=pe){ve(Te,j,N,!0);continue}let Pe;if(Te.key!=null)Pe=ie.get(Te.key);else for(K=Z;K<=x;K++)if(me[K-Z]===0&&ao(Te,P[K])){Pe=K;break}Pe===void 0?ve(Te,j,N,!0):(me[Pe-Z]=ee+1,Pe>=Ae?Ae=Pe:Be=!0,g(Te,P[Pe],V,null,j,N,C,ae,ce),Me++)}const Se=Be?EM(me):la;for(K=Se.length-1,ee=pe-1;ee>=0;ee--){const Te=Z+ee,Pe=P[Te],we=P[Te+1],Ke=Te+1<de?we.el||av(we):J;me[ee]===0?g(null,Pe,V,Ke,j,N,C,ae,ce):Be&&(K<0||ee!==Se[K]?ge(Pe,V,Ke,2):K--)}}},ge=(I,P,V,J,j=null)=>{const{el:N,type:C,transition:ae,children:ce,shapeFlag:ee}=I;if(ee&6){ge(I.component.subTree,P,V,J);return}if(ee&128){I.suspense.move(P,V,J);return}if(ee&64){C.move(I,P,V,he);return}if(C===qt){i(N,P,V);for(let T=0;T<ce.length;T++)ge(ce[T],P,V,J);i(I.anchor,P,V);return}if(C===iu){E(I,P,V);return}if(J!==2&&ee&1&&ae)if(J===0)ae.beforeEnter(N),i(N,P,V),ri(()=>ae.enter(N),j);else{const{leave:T,delayLeave:x,afterLeave:U}=ae,Z=()=>{I.ctx.isUnmounted?r(N):i(N,P,V)},ie=()=>{N._isLeaving&&N[ur](!0),T(N,()=>{Z(),U&&U()})};x?x(N,Z,ie):ie()}else i(N,P,V)},ve=(I,P,V,J=!1,j=!1)=>{const{type:N,props:C,ref:ae,children:ce,dynamicChildren:ee,shapeFlag:de,patchFlag:T,dirs:x,cacheIndex:U}=I;if(T===-2&&(j=!1),ae!=null&&(Jr(),gl(ae,null,V,I,!0),Qr()),U!=null&&(P.renderCache[U]=void 0),de&256){P.ctx.deactivate(I);return}const Z=de&1&&x,ie=!vl(I);let K;if(ie&&(K=C&&C.onVnodeBeforeUnmount)&&or(K,P,I),de&6)Ne(I.component,V,J);else{if(de&128){I.suspense.unmount(V,J);return}Z&&Ws(I,null,P,"beforeUnmount"),de&64?I.type.remove(I,P,V,he,J):ee&&!ee.hasOnce&&(N!==qt||T>0&&T&64)?$(ee,P,V,!1,!0):(N===qt&&T&384||!j&&de&16)&&$(ce,P,V),J&&be(I)}(ie&&(K=C&&C.onVnodeUnmounted)||Z)&&ri(()=>{K&&or(K,P,I),Z&&Ws(I,null,P,"unmounted")},V)},be=I=>{const{type:P,el:V,anchor:J,transition:j}=I;if(P===qt){De(V,J);return}if(P===iu){y(I);return}const N=()=>{r(V),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(I.shapeFlag&1&&j&&!j.persisted){const{leave:C,delayLeave:ae}=j,ce=()=>C(V,N);ae?ae(I.el,N,ce):ce()}else N()},De=(I,P)=>{let V;for(;I!==P;)V=f(I),r(I),I=V;r(P)},Ne=(I,P,V)=>{const{bum:J,scope:j,job:N,subTree:C,um:ae,m:ce,a:ee}=I;Im(ce),Im(ee),J&&gf(J),j.stop(),N&&(N.flags|=8,ve(C,I,P,V)),ae&&ri(ae,P),ri(()=>{I.isUnmounted=!0},P)},$=(I,P,V,J=!1,j=!1,N=0)=>{for(let C=N;C<I.length;C++)ve(I[C],P,V,J,j)},z=I=>{if(I.shapeFlag&6)return z(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const P=f(I.anchor||I.el),V=P&&P[Fy];return V?f(V):P};let Y=!1;const le=(I,P,V)=>{let J;I==null?P._vnode&&(ve(P._vnode,null,null,!0),J=P._vnode.component):g(P._vnode||null,I,P,null,null,null,V),P._vnode=I,Y||(Y=!0,Sm(J),P0(),Y=!1)},he={p:g,um:ve,m:ge,r:be,mt:q,mc:S,pc:ne,pbc:O,n:z,o:n};return{render:le,hydrate:void 0,createApp:oM(le)}}function bf({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function MM(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function sv(n,e,t=!1){const i=n.children,r=e.children;if(Ze(i)&&Ze(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Vr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&sv(o,a)),a.type===of&&(a.patchFlag===-1&&(a=r[s]=Vr(a)),a.el=o.el),a.type===Jn&&!a.el&&(a.el=o.el)}}function EM(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function ov(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ov(e)}function Im(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function av(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?av(e.subTree):null}const lv=n=>n.__isSuspense;function bM(n,e){e&&e.pendingBranch?Ze(n)?e.effects.push(...n):e.effects.push(n):Iy(n)}const qt=Symbol.for("v-fgt"),of=Symbol.for("v-txt"),Jn=Symbol.for("v-cmt"),iu=Symbol.for("v-stc"),Sl=[];let Ti=null;function je(n=!1){Sl.push(Ti=n?null:[])}function TM(){Sl.pop(),Ti=Sl[Sl.length-1]||null}let kl=1;function Au(n,e=!1){kl+=n,n<0&&Ti&&e&&(Ti.hasOnce=!0)}function cv(n){return n.dynamicChildren=kl>0?Ti||la:null,TM(),kl>0&&Ti&&Ti.push(n),n}function tt(n,e,t,i,r,s){return cv(oe(n,e,t,i,r,s,!0))}function Od(n,e,t,i,r){return cv($e(n,e,t,i,r,!0))}function wu(n){return n?n.__v_isVNode===!0:!1}function ao(n,e){return n.type===e.type&&n.key===e.key}const uv=({key:n})=>n??null,ru=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Jt(n)||zn(n)||it(n)?{i:Ji,r:n,k:e,f:!!t}:n:null);function oe(n,e=null,t=null,i=0,r=null,s=n===qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&uv(e),ref:e&&ru(e),scopeId:I0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ji};return a?(Ap(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Jt(t)?8:16),kl>0&&!o&&Ti&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ti.push(l),l}const $e=AM;function AM(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===X0)&&(n=Jn),wu(n)){const a=Fs(n,e,!0);return t&&Ap(a,t),kl>0&&!s&&Ti&&(a.shapeFlag&6?Ti[Ti.indexOf(n)]=a:Ti.push(a)),a.patchFlag=-2,a}if(BM(n)&&(n=n.__vccOpts),e){e=wM(e);let{class:a,style:l}=e;a&&!Jt(a)&&(e.class=Ds(a)),wt(l)&&(yp(l)&&!Ze(l)&&(l=pn({},l)),e.style=Ju(l))}const o=Jt(n)?1:lv(n)?128:U0(n)?64:wt(n)?4:it(n)?2:0;return oe(n,e,t,i,r,o,s,!0)}function wM(n){return n?yp(n)||Q0(n)?pn({},n):n:null}function Fs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?RM(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&uv(c),ref:e&&e.ref?t&&s?Ze(s)?s.concat(ru(e)):[s,ru(e)]:ru(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==qt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Fs(n.ssContent),ssFallback:n.ssFallback&&Fs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Bl(u,l.clone(u)),u}function uo(n=" ",e=0){return $e(of,null,n,e)}function fv(n,e){const t=$e(iu,null,n);return t.staticCount=e,t}function CM(n="",e=!1){return e?(je(),Od(Jn,null,n)):$e(Jn,null,n)}function hr(n){return n==null||typeof n=="boolean"?$e(Jn):Ze(n)?$e(qt,null,n.slice()):wu(n)?Vr(n):$e(of,null,String(n))}function Vr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Fs(n)}function Ap(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ap(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Q0(e)?e._ctx=Ji:r===3&&Ji&&(Ji.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else it(e)?(e={default:e,_ctx:Ji},t=32):(e=String(e),i&64?(t=16,e=[uo(e)]):t=8);n.children=e,n.shapeFlag|=t}function RM(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ds([e.class,i.class]));else if(r==="style")e.style=Ju([e.style,i.style]);else if($u(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function or(n,e,t,i=null){ir(n,e,7,[t,i])}const PM=$0();let DM=0;function IM(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||PM,s={uid:DM++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tv(i,r),emitsOptions:K0(i,r),emit:null,emitted:null,propsDefaults:zt,inheritAttrs:i.inheritAttrs,ctx:zt,data:zt,props:zt,attrs:zt,slots:zt,refs:zt,setupState:zt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=lM.bind(null,s),n.ce&&n.ce(s),s}let Un=null;const dv=()=>Un||Ji;let Cu,Bd;{const n=Zu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Cu=e("__VUE_INSTANCE_SETTERS__",t=>Un=t),Bd=e("__VUE_SSR_SETTERS__",t=>zl=t)}const sc=n=>{const e=Un;return Cu(n),n.scope.on(),()=>{n.scope.off(),Cu(e)}},Lm=()=>{Un&&Un.scope.off(),Cu(null)};function hv(n){return n.vnode.shapeFlag&4}let zl=!1;function LM(n,e=!1,t=!1){e&&Bd(e);const{props:i,children:r}=n.vnode,s=hv(n);pM(n,i,s,e),vM(n,r,t||e);const o=s?NM(n,e):void 0;return e&&Bd(!1),o}function NM(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Qy);const{setup:i}=t;if(i){Jr();const r=n.setupContext=i.length>1?FM(n):null,s=sc(n),o=rc(i,n,0,[n.props,r]),a=r0(o);if(Qr(),s(),(a||n.sp)&&!vl(n)&&H0(n),a){if(o.then(Lm,Lm),e)return o.then(l=>{Nm(n,l)}).catch(l=>{tf(l,n,0)});n.asyncDep=o}else Nm(n,o)}else pv(n)}function Nm(n,e,t){it(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:wt(e)&&(n.setupState=w0(e)),pv(n)}function pv(n,e,t){const i=n.type;n.render||(n.render=i.render||yr);{const r=sc(n);Jr();try{eM(n)}finally{Qr(),r()}}}const UM={get(n,e){return Nn(n,"get",""),n[e]}};function FM(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,UM),slots:n.slots,emit:n.emit,expose:e}}function wp(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(w0(My(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in xl)return xl[t](n)},has(e,t){return t in e||t in xl}})):n.proxy}function OM(n,e=!0){return it(n)?n.displayName||n.name:n.name||e&&n.__name}function BM(n){return it(n)&&"__vccOpts"in n}const ai=(n,e)=>wy(n,e,zl);function Cp(n,e,t){try{Au(-1);const i=arguments.length;return i===2?wt(e)&&!Ze(e)?wu(e)?$e(n,null,[e]):$e(n,e):$e(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&wu(t)&&(t=[t]),$e(n,e,t))}finally{Au(1)}}const kM="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kd;const Um=typeof window<"u"&&window.trustedTypes;if(Um)try{kd=Um.createPolicy("vue",{createHTML:n=>n})}catch{}const mv=kd?n=>kd.createHTML(n):n=>n,zM="http://www.w3.org/2000/svg",VM="http://www.w3.org/1998/Math/MathML",kr=typeof document<"u"?document:null,Fm=kr&&kr.createElement("template"),HM={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?kr.createElementNS(zM,n):e==="mathml"?kr.createElementNS(VM,n):t?kr.createElement(n,{is:t}):kr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>kr.createTextNode(n),createComment:n=>kr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>kr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Fm.innerHTML=mv(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Fm.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},us="transition",Xa="animation",Vl=Symbol("_vtc"),_v={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},GM=pn({},F0,_v),WM=n=>(n.displayName="Transition",n.props=GM,n),XM=WM((n,{slots:e})=>Cp(ky,qM(n),e)),qs=(n,e=[])=>{Ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},Om=n=>n?Ze(n)?n.some(e=>e.length>1):n.length>1:!1;function qM(n){const e={};for(const D in n)D in _v||(e[D]=n[D]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,m=YM(r),g=m&&m[0],p=m&&m[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:E,onLeave:y,onLeaveCancelled:A,onBeforeAppear:R=_,onAppear:w=v,onAppearCancelled:S=E}=e,M=(D,H,q,G)=>{D._enterCancelled=G,Ys(D,H?u:a),Ys(D,H?c:o),q&&q()},O=(D,H)=>{D._isLeaving=!1,Ys(D,d),Ys(D,h),Ys(D,f),H&&H()},L=D=>(H,q)=>{const G=D?w:v,W=()=>M(H,D,q);qs(G,[H,W]),Bm(()=>{Ys(H,D?l:s),Ir(H,D?u:a),Om(G)||km(H,i,g,W)})};return pn(e,{onBeforeEnter(D){qs(_,[D]),Ir(D,s),Ir(D,o)},onBeforeAppear(D){qs(R,[D]),Ir(D,l),Ir(D,c)},onEnter:L(!1),onAppear:L(!0),onLeave(D,H){D._isLeaving=!0;const q=()=>O(D,H);Ir(D,d),D._enterCancelled?(Ir(D,f),Hm(D)):(Hm(D),Ir(D,f)),Bm(()=>{D._isLeaving&&(Ys(D,d),Ir(D,h),Om(y)||km(D,i,p,q))}),qs(y,[D,q])},onEnterCancelled(D){M(D,!1,void 0,!0),qs(E,[D])},onAppearCancelled(D){M(D,!0,void 0,!0),qs(S,[D])},onLeaveCancelled(D){O(D),qs(A,[D])}})}function YM(n){if(n==null)return null;if(wt(n))return[Tf(n.enter),Tf(n.leave)];{const e=Tf(n);return[e,e]}}function Tf(n){return $S(n)}function Ir(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Vl]||(n[Vl]=new Set)).add(e)}function Ys(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Vl];t&&(t.delete(e),t.size||(n[Vl]=void 0))}function Bm(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let $M=0;function km(n,e,t,i){const r=n._endId=++$M,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=KM(n,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{n.removeEventListener(c,f),s()},f=h=>{h.target===n&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),n.addEventListener(c,f)}function KM(n,e){const t=window.getComputedStyle(n),i=m=>(t[m]||"").split(", "),r=i(`${us}Delay`),s=i(`${us}Duration`),o=zm(r,s),a=i(`${Xa}Delay`),l=i(`${Xa}Duration`),c=zm(a,l);let u=null,d=0,f=0;e===us?o>0&&(u=us,d=o,f=s.length):e===Xa?c>0&&(u=Xa,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?us:Xa:null,f=u?u===us?s.length:l.length:0);const h=u===us&&/\b(?:transform|all)(?:,|$)/.test(i(`${us}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function zm(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Vm(t)+Vm(n[i])))}function Vm(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Hm(n){return(n?n.ownerDocument:document).body.offsetHeight}function jM(n,e,t){const i=n[Vl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Gm=Symbol("_vod"),ZM=Symbol("_vsh"),JM=Symbol(""),QM=/(?:^|;)\s*display\s*:/;function eE(n,e,t){const i=n.style,r=Jt(t);let s=!1;if(t&&!r){if(e)if(Jt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&su(i,a,"")}else for(const o in e)t[o]==null&&su(i,o,"");for(const o in t)o==="display"&&(s=!0),su(i,o,t[o])}else if(r){if(e!==t){const o=i[JM];o&&(t+=";"+o),i.cssText=t,s=QM.test(t)}}else e&&n.removeAttribute("style");Gm in n&&(n[Gm]=s?i.display:"",n[ZM]&&(i.display="none"))}const Wm=/\s*!important$/;function su(n,e,t){if(Ze(t))t.forEach(i=>su(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=tE(n,e);Wm.test(t)?n.setProperty(Po(i),t.replace(Wm,""),"important"):n[i]=t}}const Xm=["Webkit","Moz","ms"],Af={};function tE(n,e){const t=Af[e];if(t)return t;let i=Xi(e);if(i!=="filter"&&i in n)return Af[e]=i;i=ju(i);for(let r=0;r<Xm.length;r++){const s=Xm[r]+i;if(s in n)return Af[e]=s}return e}const qm="http://www.w3.org/1999/xlink";function Ym(n,e,t,i,r,s=ey(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(qm,e.slice(6,e.length)):n.setAttributeNS(qm,e,t):t==null||s&&!l0(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ar(t)?String(t):t)}function $m(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?mv(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=l0(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function nE(n,e,t,i){n.addEventListener(e,t,i)}function iE(n,e,t,i){n.removeEventListener(e,t,i)}const Km=Symbol("_vei");function rE(n,e,t,i,r=null){const s=n[Km]||(n[Km]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=sE(e);if(i){const c=s[e]=lE(i,r);nE(n,a,c,l)}else o&&(iE(n,a,o,l),s[e]=void 0)}}const jm=/(?:Once|Passive|Capture)$/;function sE(n){let e;if(jm.test(n)){e={};let i;for(;i=n.match(jm);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Po(n.slice(2)),e]}let wf=0;const oE=Promise.resolve(),aE=()=>wf||(oE.then(()=>wf=0),wf=Date.now());function lE(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ir(cE(i,t.value),e,5,[i])};return t.value=n,t.attached=aE(),t}function cE(n,e){if(Ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Zm=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,uE=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?jM(n,i,o):e==="style"?eE(n,t,i):$u(e)?fp(e)||rE(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fE(n,e,i,o))?($m(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ym(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Jt(i))?$m(n,Xi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ym(n,e,i,o))};function fE(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Zm(e)&&it(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Zm(e)&&Jt(t)?!1:e in n}const dE=["ctrl","shift","alt","meta"],hE={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>dE.some(t=>n[`${t}Key`]&&!e.includes(t))},zd=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=hE[e[o]];if(a&&a(r,e))return}return n(r,...s)})},pE=pn({patchProp:uE},HM);let Jm;function mE(){return Jm||(Jm=SM(pE))}const _E=(...n)=>{const e=mE().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=vE(i);if(!r)return;const s=e._component;!it(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,gE(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function gE(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function vE(n){return Jt(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const na=typeof document<"u";function gv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function xE(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&gv(n.default)}const Et=Object.assign;function Cf(n,e){const t={};for(const i in e){const r=e[i];t[i]=rr(r)?r.map(n):n(r)}return t}const yl=()=>{},rr=Array.isArray;function Qm(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const vv=/#/g,SE=/&/g,yE=/\//g,ME=/=/g,EE=/\?/g,xv=/\+/g,bE=/%5B/g,TE=/%5D/g,Sv=/%5E/g,AE=/%60/g,yv=/%7B/g,wE=/%7C/g,Mv=/%7D/g,CE=/%20/g;function Rp(n){return n==null?"":encodeURI(""+n).replace(wE,"|").replace(bE,"[").replace(TE,"]")}function RE(n){return Rp(n).replace(yv,"{").replace(Mv,"}").replace(Sv,"^")}function Vd(n){return Rp(n).replace(xv,"%2B").replace(CE,"+").replace(vv,"%23").replace(SE,"%26").replace(AE,"`").replace(yv,"{").replace(Mv,"}").replace(Sv,"^")}function PE(n){return Vd(n).replace(ME,"%3D")}function DE(n){return Rp(n).replace(vv,"%23").replace(EE,"%3F")}function IE(n){return DE(n).replace(yE,"%2F")}function Hl(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const LE=/\/$/,NE=n=>n.replace(LE,"");function Rf(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=n(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=BE(i??e,t),{fullPath:i+s+o,path:i,query:r,hash:Hl(o)}}function UE(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function e_(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function FE(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&ba(e.matched[i],t.matched[r])&&Ev(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ba(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Ev(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!OE(n[t],e[t]))return!1;return!0}function OE(n,e){return rr(n)?t_(n,e):rr(e)?t_(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function t_(n,e){return rr(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function BE(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const fs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Hd=function(n){return n.pop="pop",n.push="push",n}({}),Pf=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function kE(n){if(!n)if(na){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),NE(n)}const zE=/^[^#]+#/;function VE(n,e){return n.replace(zE,"#")+e}function HE(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const af=()=>({left:window.scrollX,top:window.scrollY});function GE(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=HE(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function n_(n,e){return(history.state?history.state.position-e:-1)+n}const Gd=new Map;function WE(n,e){Gd.set(n,e)}function XE(n){const e=Gd.get(n);return Gd.delete(n),e}function qE(n){return typeof n=="string"||n&&typeof n=="object"}function bv(n){return typeof n=="string"||typeof n=="symbol"}let Kt=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const Tv=Symbol("");Kt.MATCHER_NOT_FOUND+"",Kt.NAVIGATION_GUARD_REDIRECT+"",Kt.NAVIGATION_ABORTED+"",Kt.NAVIGATION_CANCELLED+"",Kt.NAVIGATION_DUPLICATED+"";function Ta(n,e){return Et(new Error,{type:n,[Tv]:!0},e)}function Lr(n,e){return n instanceof Error&&Tv in n&&(e==null||!!(n.type&e))}const YE=["params","query","hash"];function $E(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of YE)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function KE(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(xv," "),s=r.indexOf("="),o=Hl(s<0?r:r.slice(0,s)),a=s<0?null:Hl(r.slice(s+1));if(o in e){let l=e[o];rr(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function i_(n){let e="";for(let t in n){const i=n[t];if(t=PE(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(rr(i)?i.map(r=>r&&Vd(r)):[i&&Vd(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function jE(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=rr(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const ZE=Symbol(""),r_=Symbol(""),Pp=Symbol(""),Dp=Symbol(""),Wd=Symbol("");function qa(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ys(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Ta(Kt.NAVIGATION_ABORTED,{from:t,to:e})):f instanceof Error?l(f):qE(f)?l(Ta(Kt.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Df(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(gv(l)){const c=(l.__vccOpts||l)[e];c&&s.push(ys(c,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=xE(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&ys(f,t,i,o,a,r)()}))}}return s}function JE(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>ba(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>ba(c,l))||r.push(l))}return[t,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let QE=()=>location.protocol+"//"+location.host;function Av(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),e_(a,"")}return e_(t,n)+i+r}function eb(n,e,t,i){let r=[],s=[],o=null;const a=({state:f})=>{const h=Av(n,location),m=t.value,g=e.value;let p=0;if(f){if(t.value=h,e.value=f,o&&o===m){o=null;return}p=g?f.position-g.position:0}else i(h);r.forEach(_=>{_(t.value,m,{delta:p,type:Hd.pop,direction:p?p>0?Pf.forward:Pf.back:Pf.unknown})})};function l(){o=t.value}function c(f){r.push(f);const h=()=>{const m=r.indexOf(f);m>-1&&r.splice(m,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(Et({},f.state,{scroll:af()}),"")}}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function s_(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?af():null}}function tb(n){const{history:e,location:t}=window,i={value:Av(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=n.indexOf("#"),f=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:QE()+n+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(h){console.error(h),t[u?"replace":"assign"](f)}}function o(l,c){s(l,Et({},e.state,s_(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=Et({},r.value,e.state,{forward:l,scroll:af()});s(u.current,u,!0),s(l,Et({},s_(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function nb(n){n=kE(n);const e=tb(n),t=eb(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Et({location:"",base:n,go:i,createHref:VE.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ib(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),nb(n)}let fo=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var fn=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(fn||{});const rb={type:fo.Static,value:""},sb=/[a-zA-Z0-9_]/;function ob(n){if(!n)return[[]];if(n==="/")return[[rb]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=fn.Static,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){c&&(t===fn.Static?s.push({type:fo.Static,value:c}):t===fn.Param||t===fn.ParamRegExp||t===fn.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:fo.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==fn.ParamRegExp){i=t,t=fn.EscapeNext;continue}switch(t){case fn.Static:l==="/"?(c&&d(),o()):l===":"?(d(),t=fn.Param):f();break;case fn.EscapeNext:f(),t=i;break;case fn.Param:l==="("?t=fn.ParamRegExp:sb.test(l)?f():(d(),t=fn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case fn.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=fn.ParamRegExpEnd:u+=l;break;case fn.ParamRegExpEnd:d(),t=fn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===fn.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}const o_="[^/]+?",ab={sensitive:!1,strict:!1,start:!0,end:!0};var Yn=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Yn||{});const lb=/[.+*?^${}()[\]/\\]/g;function cb(n,e){const t=Et({},ab,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[Yn.Root];t.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=Yn.Segment+(t.sensitive?Yn.BonusCaseSensitive:0);if(f.type===fo.Static)d||(r+="/"),r+=f.value.replace(lb,"\\$&"),h+=Yn.Static;else if(f.type===fo.Param){const{value:m,repeatable:g,optional:p,regexp:_}=f;s.push({name:m,repeatable:g,optional:p});const v=_||o_;if(v!==o_){h+=Yn.BonusCustomRegExp;try{`${v}`}catch(y){throw new Error(`Invalid custom RegExp for param "${m}" (${v}): `+y.message)}}let E=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(E=p&&c.length<2?`(?:/${E})`:"/"+E),p&&(E+="?"),r+=E,h+=Yn.Dynamic,p&&(h+=Yn.BonusOptional),g&&(h+=Yn.BonusRepeatable),v===".*"&&(h+=Yn.BonusWildcard)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Yn.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",m=s[f-1];d[m.name]=h&&m.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===fo.Static)u+=h.value;else if(h.type===fo.Param){const{value:m,repeatable:g,optional:p}=h,_=m in c?c[m]:"";if(rr(_)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const v=rr(_)?_.join("/"):_;if(!v)if(p)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=v}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function ub(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Yn.Static+Yn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Yn.Static+Yn.Segment?1:-1:0}function wv(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=ub(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(a_(i))return 1;if(a_(r))return-1}return r.length-i.length}function a_(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const fb={strict:!1,end:!0,sensitive:!1};function db(n,e,t){const i=cb(ob(n.path),t),r=Et(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function hb(n,e){const t=[],i=new Map;e=Qm(fb,e);function r(d){return i.get(d)}function s(d,f,h){const m=!h,g=c_(d);g.aliasOf=h&&h.record;const p=Qm(e,d),_=[g];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const A of y)_.push(c_(Et({},g,{components:h?h.record.components:g.components,path:A,aliasOf:h?h.record:g})))}let v,E;for(const y of _){const{path:A}=y;if(f&&A[0]!=="/"){const R=f.record.path,w=R[R.length-1]==="/"?"":"/";y.path=f.record.path+(A&&w+A)}if(v=db(y,f,p),h?h.alias.push(v):(E=E||v,E!==v&&E.alias.push(v),m&&d.name&&!u_(v)&&o(d.name)),Cv(v)&&l(v),g.children){const R=g.children;for(let w=0;w<R.length;w++)s(R[w],v,h&&h.children[w])}h=h||v}return E?()=>{o(E)}:yl}function o(d){if(bv(d)){const f=i.get(d);f&&(i.delete(d),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(d);f>-1&&(t.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function l(d){const f=_b(d,t);t.splice(f,0,d),d.record.name&&!u_(d)&&i.set(d.record.name,d)}function c(d,f){let h,m={},g,p;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw Ta(Kt.MATCHER_NOT_FOUND,{location:d});p=h.record.name,m=Et(l_(f.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&l_(d.params,h.keys.map(E=>E.name))),g=h.stringify(m)}else if(d.path!=null)g=d.path,h=t.find(E=>E.re.test(g)),h&&(m=h.parse(g),p=h.record.name);else{if(h=f.name?i.get(f.name):t.find(E=>E.re.test(f.path)),!h)throw Ta(Kt.MATCHER_NOT_FOUND,{location:d,currentLocation:f});p=h.record.name,m=Et({},f.params,d.params),g=h.stringify(m)}const _=[];let v=h;for(;v;)_.unshift(v.record),v=v.parent;return{name:p,path:g,params:m,matched:_,meta:mb(_)}}n.forEach(d=>s(d));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function l_(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function c_(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:pb(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function pb(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function u_(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function mb(n){return n.reduce((e,t)=>Et(e,t.meta),{})}function _b(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;wv(n,e[s])<0?i=s:t=s+1}const r=gb(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function gb(n){let e=n;for(;e=e.parent;)if(Cv(e)&&wv(n,e)===0)return e}function Cv({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function f_(n){const e=Mr(Pp),t=Mr(Dp),i=ai(()=>{const l=pt(n.to);return e.resolve(l)}),r=ai(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=t.matched;if(!u||!d.length)return-1;const f=d.findIndex(ba.bind(null,u));if(f>-1)return f;const h=d_(l[c-2]);return c>1&&d_(u)===h&&d[d.length-1].path!==h?d.findIndex(ba.bind(null,l[c-2])):f}),s=ai(()=>r.value>-1&&yb(t.params,i.value.params)),o=ai(()=>r.value>-1&&r.value===t.matched.length-1&&Ev(t.params,i.value.params));function a(l={}){if(Sb(l)){const c=e[pt(n.replace)?"replace":"push"](pt(n.to)).catch(yl);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ai(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function vb(n){return n.length===1?n[0]:n}const xb=V0({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:f_,setup(n,{slots:e}){const t=ef(f_(n)),{options:i}=Mr(Pp),r=ai(()=>({[h_(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[h_(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&vb(e.default(t));return n.custom?s:Cp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Ru=xb;function Sb(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function yb(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!rr(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function d_(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const h_=(n,e,t)=>n??e??t,Mb=V0({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Mr(Wd),r=ai(()=>n.route||i.value),s=Mr(r_,0),o=ai(()=>{let c=pt(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=ai(()=>r.value.matched[o.value]);tu(r_,ai(()=>o.value+1)),tu(ZE,a),tu(Wd,r);const l=ua();return nu(()=>[l.value,a.value,n.name],([c,u,d],[f,h,m])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!ba(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return p_(t.default,{Component:f,route:c});const h=d.props[u],m=h?h===!0?c.params:typeof h=="function"?h(c):h:null,p=Cp(f,Et({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return p_(t.default,{Component:p,route:c})||p}}});function p_(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Rv=Mb;function Eb(n){const e=hb(n.routes,n),t=n.parseQuery||KE,i=n.stringifyQuery||i_,r=n.history,s=qa(),o=qa(),a=qa(),l=Ey(fs);let c=fs;na&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cf.bind(null,z=>""+z),d=Cf.bind(null,IE),f=Cf.bind(null,Hl);function h(z,Y){let le,he;return bv(z)?(le=e.getRecordMatcher(z),he=Y):he=z,e.addRoute(he,le)}function m(z){const Y=e.getRecordMatcher(z);Y&&e.removeRoute(Y)}function g(){return e.getRoutes().map(z=>z.record)}function p(z){return!!e.getRecordMatcher(z)}function _(z,Y){if(Y=Et({},Y||l.value),typeof z=="string"){const V=Rf(t,z,Y.path),J=e.resolve({path:V.path},Y),j=r.createHref(V.fullPath);return Et(V,J,{params:f(J.params),hash:Hl(V.hash),redirectedFrom:void 0,href:j})}let le;if(z.path!=null)le=Et({},z,{path:Rf(t,z.path,Y.path).path});else{const V=Et({},z.params);for(const J in V)V[J]==null&&delete V[J];le=Et({},z,{params:d(V)}),Y.params=d(Y.params)}const he=e.resolve(le,Y),xe=z.hash||"";he.params=u(f(he.params));const I=UE(i,Et({},z,{hash:RE(xe),path:he.path})),P=r.createHref(I);return Et({fullPath:I,hash:xe,query:i===i_?jE(z.query):z.query||{}},he,{redirectedFrom:void 0,href:P})}function v(z){return typeof z=="string"?Rf(t,z,l.value.path):Et({},z)}function E(z,Y){if(c!==z)return Ta(Kt.NAVIGATION_CANCELLED,{from:Y,to:z})}function y(z){return w(z)}function A(z){return y(Et(v(z),{replace:!0}))}function R(z,Y){const le=z.matched[z.matched.length-1];if(le&&le.redirect){const{redirect:he}=le;let xe=typeof he=="function"?he(z,Y):he;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=v(xe):{path:xe},xe.params={}),Et({query:z.query,hash:z.hash,params:xe.path!=null?{}:z.params},xe)}}function w(z,Y){const le=c=_(z),he=l.value,xe=z.state,I=z.force,P=z.replace===!0,V=R(le,he);if(V)return w(Et(v(V),{state:typeof V=="object"?Et({},xe,V.state):xe,force:I,replace:P}),Y||le);const J=le;J.redirectedFrom=Y;let j;return!I&&FE(i,he,le)&&(j=Ta(Kt.NAVIGATION_DUPLICATED,{to:J,from:he}),ge(he,he,!0,!1)),(j?Promise.resolve(j):O(J,he)).catch(N=>Lr(N)?Lr(N,Kt.NAVIGATION_GUARD_REDIRECT)?N:F(N):ne(N,J,he)).then(N=>{if(N){if(Lr(N,Kt.NAVIGATION_GUARD_REDIRECT))return w(Et({replace:P},v(N.to),{state:typeof N.to=="object"?Et({},xe,N.to.state):xe,force:I}),Y||J)}else N=D(J,he,!0,P,xe);return L(J,he,N),N})}function S(z,Y){const le=E(z,Y);return le?Promise.reject(le):Promise.resolve()}function M(z){const Y=De.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(z):z()}function O(z,Y){let le;const[he,xe,I]=JE(z,Y);le=Df(he.reverse(),"beforeRouteLeave",z,Y);for(const V of he)V.leaveGuards.forEach(J=>{le.push(ys(J,z,Y))});const P=S.bind(null,z,Y);return le.push(P),$(le).then(()=>{le=[];for(const V of s.list())le.push(ys(V,z,Y));return le.push(P),$(le)}).then(()=>{le=Df(xe,"beforeRouteUpdate",z,Y);for(const V of xe)V.updateGuards.forEach(J=>{le.push(ys(J,z,Y))});return le.push(P),$(le)}).then(()=>{le=[];for(const V of I)if(V.beforeEnter)if(rr(V.beforeEnter))for(const J of V.beforeEnter)le.push(ys(J,z,Y));else le.push(ys(V.beforeEnter,z,Y));return le.push(P),$(le)}).then(()=>(z.matched.forEach(V=>V.enterCallbacks={}),le=Df(I,"beforeRouteEnter",z,Y,M),le.push(P),$(le))).then(()=>{le=[];for(const V of o.list())le.push(ys(V,z,Y));return le.push(P),$(le)}).catch(V=>Lr(V,Kt.NAVIGATION_CANCELLED)?V:Promise.reject(V))}function L(z,Y,le){a.list().forEach(he=>M(()=>he(z,Y,le)))}function D(z,Y,le,he,xe){const I=E(z,Y);if(I)return I;const P=Y===fs,V=na?history.state:{};le&&(he||P?r.replace(z.fullPath,Et({scroll:P&&V&&V.scroll},xe)):r.push(z.fullPath,xe)),l.value=z,ge(z,Y,le,P),F()}let H;function q(){H||(H=r.listen((z,Y,le)=>{if(!Ne.listening)return;const he=_(z),xe=R(he,Ne.currentRoute.value);if(xe){w(Et(xe,{replace:!0,force:!0}),he).catch(yl);return}c=he;const I=l.value;na&&WE(n_(I.fullPath,le.delta),af()),O(he,I).catch(P=>Lr(P,Kt.NAVIGATION_ABORTED|Kt.NAVIGATION_CANCELLED)?P:Lr(P,Kt.NAVIGATION_GUARD_REDIRECT)?(w(Et(v(P.to),{force:!0}),he).then(V=>{Lr(V,Kt.NAVIGATION_ABORTED|Kt.NAVIGATION_DUPLICATED)&&!le.delta&&le.type===Hd.pop&&r.go(-1,!1)}).catch(yl),Promise.reject()):(le.delta&&r.go(-le.delta,!1),ne(P,he,I))).then(P=>{P=P||D(he,I,!1),P&&(le.delta&&!Lr(P,Kt.NAVIGATION_CANCELLED)?r.go(-le.delta,!1):le.type===Hd.pop&&Lr(P,Kt.NAVIGATION_ABORTED|Kt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),L(he,I,P)}).catch(yl)}))}let G=qa(),W=qa(),B;function ne(z,Y,le){F(z);const he=W.list();return he.length?he.forEach(xe=>xe(z,Y,le)):console.error(z),Promise.reject(z)}function fe(){return B&&l.value!==fs?Promise.resolve():new Promise((z,Y)=>{G.add([z,Y])})}function F(z){return B||(B=!z,q(),G.list().forEach(([Y,le])=>z?le(z):Y()),G.reset()),z}function ge(z,Y,le,he){const{scrollBehavior:xe}=n;if(!na||!xe)return Promise.resolve();const I=!le&&XE(n_(z.fullPath,0))||(he||!le)&&history.state&&history.state.scroll||null;return Mp().then(()=>xe(z,Y,I)).then(P=>P&&GE(P)).catch(P=>ne(P,z,Y))}const ve=z=>r.go(z);let be;const De=new Set,Ne={currentRoute:l,listening:!0,addRoute:h,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:p,getRoutes:g,resolve:_,options:n,push:y,replace:A,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:fe,install(z){z.component("RouterLink",Ru),z.component("RouterView",Rv),z.config.globalProperties.$router=Ne,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>pt(l)}),na&&!be&&l.value===fs&&(be=!0,y(r.location).catch(he=>{}));const Y={};for(const he in fs)Object.defineProperty(Y,he,{get:()=>l.value[he],enumerable:!0});z.provide(Pp,Ne),z.provide(Dp,T0(Y)),z.provide(Wd,l);const le=z.unmount;De.add(z),z.unmount=function(){De.delete(z),De.size<1&&(c=fs,H&&H(),H=null,l.value=fs,be=!1,B=!1),le()}}};function $(z){return z.reduce((Y,le)=>Y.then(()=>M(le)),Promise.resolve())}return Ne}function bb(n){return Mr(Dp)}const Tb={__name:"App",setup(n){return(e,t)=>(je(),Od(pt(Rv),null,{default:Ea(({Component:i})=>[$e(XM,{name:"page-shell",mode:"out-in"},{default:Ea(()=>[(je(),Od(Zy(i)))]),_:2},1024)]),_:1}))}};function zr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Pv(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Aa={duration:.5,overwrite:!1,delay:0},Ip,An,Gt,Vi=1e8,Ft=1/Vi,Xd=Math.PI*2,Ab=Xd/4,wb=0,Dv=Math.sqrt,Cb=Math.cos,Rb=Math.sin,Mn=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},ts=function(e){return typeof e=="number"},Lp=function(e){return typeof e>"u"},wr=function(e){return typeof e=="object"},ci=function(e){return e!==!1},Np=function(){return typeof window<"u"},pc=function(e){return jt(e)||Mn(e)},Iv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vn=Array.isArray,Pb=/random\([^)]+\)/g,Db=/,\s*/g,m_=/(?:-?\.?\d|\.)+/gi,Lv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,If=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nv=/[+-]=-?[.\d]+/,Ib=/[^,'"\[\]\s]+/gi,Lb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,fr,qd,Up,Ri={},Pu={},Uv,Fv=function(e){return(Pu=wa(e,Ri))&&mi},Fp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Gl=function(e,t){return!t&&console.warn(e)},Ov=function(e,t){return e&&(Ri[e]=t)&&Pu&&(Pu[e]=t)||Ri},Wl=function(){return 0},Nb={suppressEvents:!0,isStart:!0,kill:!1},ou={suppressEvents:!0,kill:!1},Ub={suppressEvents:!0},Op={},Is=[],Yd={},Bv,yi={},Lf={},__=30,au=[],Bp="",kp=function(e){var t=e[0],i,r;if(wr(t)||jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=au.length;r--&&!au[r].targetTest(t););i=au[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new lx(e[r],i)))||e.splice(r,1);return e},xo=function(e){return e._gsap||kp(Hi(e))[0]._gsap},kv=function(e,t,i){return(i=e[t])&&jt(i)?e[t]():Lp(i)&&e.getAttribute&&e.getAttribute(t)||i},ui=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},ha=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Fb=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Du=function(){var e=Is.length,t=Is.slice(0),i,r;for(Yd={},Is.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},zp=function(e){return!!(e._initted||e._startAt||e.add)},zv=function(e,t,i,r){Is.length&&!An&&Du(),e.render(t,i,!!(An&&t<0&&zp(e))),Is.length&&!An&&Du()},Vv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ib).length<2?t:Mn(e)?e.trim():e},Hv=function(e){return e},Pi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ob=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},wa=function(e,t){for(var i in t)e[i]=t[i];return e},g_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=wr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Iu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ml=function(e){var t=e.parent||Xt,i=e.keyframes?Ob(Vn(e.keyframes)):Pi;if(ci(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Bb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Gv=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},lf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},So=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},kb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$d=function(e,t,i,r){return e._startAt&&(An?e._startAt.revert(ou):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},zb=function n(e){return!e||e._ts&&n(e.parent)},v_=function(e){return e._repeat?Ca(e._tTime,e=e.duration()+e._rDelay)*e:0},Ca=function(e,t){var i=Math.floor(e=Wt(e/t));return e&&i===e?i-1:i},Lu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},cf=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ft)||0))},uf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Wt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),cf(e),i._dirty||So(i,e)),e},Wv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Lu(e.rawTime(),t),(!t._dur||oc(0,t.totalDuration(),i)-t._tTime>Ft)&&t.render(i,!0)),So(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ft}},mr=function(e,t,i,r){return t.parent&&Os(t),t._start=Wt((ts(i)?i:i||e!==Xt?Ni(e,i,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Gv(e,t,"_first","_last",e._sort?"_start":0),Kd(t)||(e._recent=t),r||Wv(e,t),e._ts<0&&uf(e,e._tTime),e},Xv=function(e,t){return(Ri.ScrollTrigger||Fp("scrollTrigger",t))&&Ri.ScrollTrigger.create(t,e)},qv=function(e,t,i,r,s){if(Hp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Bv!==Ei.frame)return Is.push(e),e._lazy=[s,r],1},Vb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Kd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Hb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Vb(e)&&!(!e._initted&&Kd(e))||(e._ts<0||e._dp._ts<0)&&!Kd(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=oc(0,e._tDur,t),u=Ca(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ca(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||An||r||e._zTime===Ft||!t&&e._zTime){if(!e._initted&&qv(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Ft:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&$d(e,t,i,!0),e._onUpdate&&!i&&Ai(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ai(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Os(e,1),!i&&!An&&(Ai(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Gb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ra=function(e,t,i,r){var s=e._repeat,o=Wt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Wt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&uf(e,e._tTime=e._tDur*a),e.parent&&cf(e),i||So(e.parent,e),e},x_=function(e){return e instanceof Qn?So(e):Ra(e,e._dur)},Wb={_start:0,endTime:Wl,totalDuration:Wl},Ni=function n(e,t,i){var r=e.labels,s=e._recent||Wb,o=e.duration()>=Vi?s.endTime(!1):e._dur,a,l,c;return Mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Vn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},El=function(e,t,i){var r=ts(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ci(l.vars.inherit)&&l.parent;o.immediateRender=ci(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new an(t[0],o,t[s+1])},Hs=function(e,t){return e||e===0?t(e):t},oc=function(e,t,i){return i<e?e:i>t?t:i},Fn=function(e,t){return!Mn(e)||!(t=Lb.exec(e))?"":t[1]},Xb=function(e,t,i){return Hs(i,function(r){return oc(e,t,r)})},jd=[].slice,Yv=function(e,t){return e&&wr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wr(e[0]))&&!e.nodeType&&e!==fr},qb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Mn(r)&&!t||Yv(r,1)?(s=i).push.apply(s,Hi(r)):i.push(r)})||i},Hi=function(e,t,i){return Gt&&!t&&Gt.selector?Gt.selector(e):Mn(e)&&!i&&(qd||!Pa())?jd.call((t||Up).querySelectorAll(e),0):Vn(e)?qb(e,i):Yv(e)?jd.call(e,0):e?[e]:[]},Zd=function(e){return e=Hi(e)[0]||Gl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Hi(t,i.querySelectorAll?i:i===e?Gl("Invalid scope")||Up.createElement("div"):e)}},$v=function(e){return e.sort(function(){return .5-Math.random()})},Kv=function(e){if(jt(e))return e;var t=wr(e)?e:{each:e},i=yo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,d=r;return Mn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],d=r[1]),function(f,h,m){var g=(m||t).length,p=o[g],_,v,E,y,A,R,w,S,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Vi])[1],!M){for(w=-Vi;w<(w=m[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(p=o[g]=[],_=l?Math.min(M,g)*u-.5:r%M,v=M===Vi?0:l?g*d/M-.5:r/M|0,w=0,S=Vi,R=0;R<g;R++)E=R%M-_,y=v-(R/M|0),p[R]=A=c?Math.abs(c==="y"?y:E):Dv(E*E+y*y),A>w&&(w=A),A<S&&(S=A);r==="random"&&$v(p),p.max=w-S,p.min=S,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Fn(t.amount||t.each)||0,i=i&&g<0?sx(i):i}return g=(p[f]-p.min)/p.max||0,Wt(p.b+(i?i(g):g)*p.v)+p.u}},Jd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Wt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ts(i)?0:Fn(i))}},jv=function(e,t){var i=Vn(e),r,s;return!i&&wr(e)&&(r=i=e.radius||Vi,e.values?(e=Hi(e.values),(s=!ts(e[0]))&&(r*=r)):e=Jd(e.increment)),Hs(t,i?jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Vi,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!r||c<=r?e[u]:o,s||u===o||ts(o)?u:u+Fn(o)}:Jd(e))},Zv=function(e,t,i,r){return Hs(Vn(e)?!t:i===!0?!!(i=0):!r,function(){return Vn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Yb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},$b=function(e,t){return function(i){return e(parseFloat(i))+(t||Fn(i))}},Kb=function(e,t,i){return Qv(e,t,0,1,i)},Jv=function(e,t,i){return Hs(i,function(r){return e[~~t(r)]})},jb=function n(e,t,i){var r=t-e;return Vn(e)?Jv(e,n(0,e.length),t):Hs(i,function(s){return(r+(s-e)%r)%r+e})},Zb=function n(e,t,i){var r=t-e,s=r*2;return Vn(e)?Jv(e,n(0,e.length-1),t):Hs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Xl=function(e){return e.replace(Pb,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Db);return Zv(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Qv=function(e,t,i,r,s){var o=t-e,a=r-i;return Hs(s,function(l){return i+((l-e)/o*a||0)})},Jb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Mn(e),a={},l,c,u,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Vn(e)&&!Vn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(n(e[c-1],e[c]));d--,s=function(m){m*=d;var g=Math.min(f,~~m);return u[g](m-g)},i=t}else r||(e=wa(Vn(e)?[]:{},e));if(!u){for(l in t)Vp.call(a,e,l,"get",t[l]);s=function(m){return Xp(m,a)||(o?e.p:e)}}}return Hs(i,s)},S_=function(e,t,i){var r=e.labels,s=Vi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ai=function(e,t,i){var r=e.vars,s=r[t],o=Gt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Is.length&&Du(),a&&(Gt=a),u=l?s.apply(c,l):s.call(c),Gt=o,u},sl=function(e){return Os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&Ai(e,"onInterrupt"),e},oa,ex=[],tx=function(e){if(e)if(e=!e.name&&e.default||e,Np()||e.headless){var t=e.name,i=jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Wl,render:Xp,add:Vp,kill:pT,modifier:hT,rawVars:0},o={targetTest:0,get:0,getSetter:Wp,aliases:{},register:0};if(Pa(),e!==r){if(yi[t])return;Pi(r,Pi(Iu(e,s),o)),wa(r.prototype,wa(s,Iu(e,o))),yi[r.prop=t]=r,e.targetTest&&(au.push(r),Op[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ov(t,r),e.register&&e.register(mi,r,fi)}else ex.push(e)},Ut=255,ol={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},Nf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ut+.5|0},nx=function(e,t,i){var r=e?ts(e)?[e>>16,e>>8&Ut,e&Ut]:0:ol.black,s,o,a,l,c,u,d,f,h,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ol[e])r=ol[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ut,r&Ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ut,e&Ut]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(m_),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Nf(l+1/3,s,o),r[1]=Nf(l,s,o),r[2]=Nf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Lv),i&&r.length<4&&(r[3]=1),r}else r=e.match(m_)||ol.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Ut,o=r[1]/Ut,a=r[2]/Ut,d=Math.max(s,o,a),f=Math.min(s,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(o-a)/h+(o<a?6:0):d===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},ix=function(e){var t=[],i=[],r=-1;return e.split(Ls).forEach(function(s){var o=s.match(sa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},y_=function(e,t,i){var r="",s=(e+r).match(Ls),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=nx(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=ix(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ls,"1").split(sa),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ls),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},Ls=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ol)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Qb=/hsl[a]?\(/,rx=function(e){var t=e.join(" "),i;if(Ls.lastIndex=0,Ls.test(t))return i=Qb.test(t),e[1]=y_(e[1],i),e[0]=y_(e[0],i,ix(e[1])),!0},ql,Ei=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,d,f,h,m=function g(p){var _=n()-r,v=p===!0,E,y,A,R;if((_>e||_<0)&&(i+=_-t),r+=_,A=r-i,E=A-o,(E>0||v)&&(R=++d.frame,f=A-d.time*1e3,d.time=A=A/1e3,o+=E+(E>=s?4:s-E),y=1),v||(l=c(g)),y)for(h=0;h<a.length;h++)a[h](A,f,R,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Uv&&(!qd&&Np()&&(fr=qd=window,Up=fr.document||{},Ri.gsap=mi,(fr.gsapVersions||(fr.gsapVersions=[])).push(mi.version),Fv(Pu||fr.GreenSockGlobals||!fr.gsap&&fr||{}),ex.forEach(tx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},ql=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ql=0,c=Wl},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,_,v){var E=_?function(y,A,R,w){p(y,A,R,w),d.remove(E)}:p;return d.remove(p),a[v?"unshift":"push"](E),Pa(),E},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&h>=_&&h--},_listeners:a},d}(),Pa=function(){return!ql&&Ei.wake()},_t={},eT=/^[\d.\-M][\d.\-,\s]/,tT=/["']/g,nT=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(tT,"").trim():+c,r=l.substr(a+1).trim();return t},iT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},rT=function(e){var t=(e+"").split("("),i=_t[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[nT(t[1])]:iT(e).split(",").map(Vv)):_t._CE&&eT.test(e)?_t._CE("",e):i},sx=function(e){return function(t){return 1-e(1-t)}},ox=function n(e,t){for(var i=e._first,r;i;)i instanceof Qn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},yo=function(e,t){return e&&(jt(e)?e:_t[e]||rT(e))||t},Lo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ui(e,function(a){_t[a]=Ri[a]=s,_t[o=a.toLowerCase()]=i;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},ax=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Uf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Xd*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*Rb((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:ax(a);return s=Xd/s,l.config=function(c,u){return n(e,c,u)},l},Ff=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:ax(i);return r.config=function(s){return n(e,s)},r};ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Lo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Lo("Elastic",Uf("in"),Uf("out"),Uf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Lo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Lo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Lo("Circ",function(n){return-(Dv(1-n*n)-1)});Lo("Sine",function(n){return n===1?1:-Cb(n*Ab)+1});Lo("Back",Ff("in"),Ff("out"),Ff());_t.SteppedEase=_t.steps=Ri.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Ft;return function(a){return((r*oc(0,o,a)|0)+s)*i}}};Aa.ease=_t["quad.out"];ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Bp+=n+","+n+"Params,"});var lx=function(e,t){this.id=wb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:kv,this.set=t?t.getSetter:Wp},Yl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,Gt&&(this._ctx=Gt,Gt.data.push(this)),ql||Ei.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Pa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(uf(this,i),!s._dp||s.parent||Wv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ft||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),zv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+v_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+v_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ca(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Ft?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Lu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ft?0:this._rts,this.totalTime(oc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),cf(this),kb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ft&&(this._tTime-=Ft)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Wt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&mr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ci(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Lu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Ub);var r=An;return An=i,zp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),An=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,x_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,x_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ni(this,i),ci(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ci(r)),this._dur||(this._zTime=-Ft),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ft,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Ft)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=jt(i)?i:Hv,l=function(){var u=r.then;r.then=null,s&&s(),jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){sl(this)},n}();Pi(Yl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ft,_prom:0,_ps:!1,_rts:1});var Qn=function(n){Pv(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ci(i.sortChildren),Xt&&mr(i.parent||Xt,zr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Xv(zr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return El(0,arguments,this),this},t.from=function(r,s,o){return El(1,arguments,this),this},t.fromTo=function(r,s,o,a){return El(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ml(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new an(r,s,Ni(this,o),1),this},t.call=function(r,s,o){return mr(this,an.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new an(r,o,Ni(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Ml(o).immediateRender=ci(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,d){return a.startAt=o,Ml(a).immediateRender=ci(a.immediateRender),this.staggerTo(r,s,a,l,c,u,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Wt(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,h,m,g,p,_,v,E,y,A,R,w;if(this!==Xt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,E=this._ts,_=!E,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(f=Wt(u%p),u===l?(g=this._repeat,f=c):(A=Wt(u/p),g=~~A,g&&g===A&&(f=c,g--),f>c&&(f=c)),A=Ca(this._tTime,p),!a&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),R&&g&1&&(f=c-f,w=1),g!==A&&!this._lock){var S=R&&A&1,M=S===(R&&g&1);if(g<A&&(S=!S),a=S?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Wt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ai(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=S?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;ox(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Gb(this,Wt(a),Wt(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!A&&(Ai(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(h=this._first;h;){if(m=h._next,(h._act||f>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,o),f!==this._time||!this._ts&&!_){v=0,m&&(u+=this._zTime=-Ft);break}}h=m}else{h=this._last;for(var O=r<0?r:f;h;){if(m=h._prev,(h._act||O<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(O-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(O-h._start)*h._ts,s,o||An&&zp(h)),f!==this._time||!this._ts&&!_){v=0,m&&(u+=this._zTime=O?-Ft:Ft);break}}h=m}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Ft)._zTime=f>=a?1:-1,this._ts))return this._start=y,cf(this),this.render(r,s,o);this._onUpdate&&!s&&Ai(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Os(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ai(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ts(s)||(s=Ni(this,s,r)),!(r instanceof Yl)){if(Vn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Mn(r))return this.addLabel(r,s);if(jt(r))r=an.delayedCall(0,r);else return this}return this!==r?mr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof an?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Mn(r)?this.removeLabel(r):jt(r)?this.killTweensOf(r):(r.parent===this&&lf(this,r),r===this._recent&&(this._recent=this._last),So(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(Ei.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ni(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=an.delayedCall(0,s||Wl,o);return a.data="isPause",this._hasPause=1,mr(this,a,Ni(this,r))},t.removePause=function(r){var s=this._first;for(r=Ni(this,r);s;)s._start===r&&s.data==="isPause"&&Os(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)bs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Hi(r),l=this._first,c=ts(s),u;l;)l instanceof an?Fb(l._targets,a)&&(c?(!bs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ni(o,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,m=an.to(o,Pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ft,onStart:function(){if(o.pause(),!h){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&Ra(m,p,0,1).render(m._time,!0,!0),h=1}u&&u.apply(m,d||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Pi({startAt:{time:Ni(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),S_(this,Ni(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),S_(this,Ni(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ft)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Wt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return So(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),So(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Vi,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,mr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Wt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ra(o,o===Xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Xt._ts&&(zv(Xt,Lu(r,Xt)),Bv=Ei.frame),Ei.frame>=__){__+=Ci.autoSleep||120;var s=Xt._first;if((!s||!s._ts)&&Ci.autoSleep&&Ei._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ei.sleep()}}},e}(Yl);Pi(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var sT=function(e,t,i,r,s,o,a){var l=new fi(this._pt,e,t,0,1,px,null,s),c=0,u=0,d,f,h,m,g,p,_,v;for(l.b=i,l.e=r,i+="",r+="",(_=~r.indexOf("random("))&&(r=Xl(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(If)||[];d=If.exec(r);)m=d[0],g=r.substring(c,d.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),m!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:m.charAt(1)==="="?ha(p,m)-p:parseFloat(m)-p,m:h&&h<4?Math.round:0},c=If.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Nv.test(r)||_)&&(l.e=0),this._pt=l,l},Vp=function(e,t,i,r,s,o,a,l,c,u){jt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:jt(d)?c?e[t.indexOf("set")||!jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=jt(d)?c?uT:dx:Gp,m;if(Mn(r)&&(~r.indexOf("random(")&&(r=Xl(r)),r.charAt(1)==="="&&(m=ha(f,r)+(Fn(f)||0),(m||m===0)&&(r=m))),!u||f!==r||Qd)return!isNaN(f*r)&&r!==""?(m=new fi(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?dT:hx,0,h),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!d&&!(t in e)&&Fp(t,r),sT.call(this,e,t,f,r,h,l||Ci.stringFilter,c))},oT=function(e,t,i,r,s){if(jt(e)&&(e=bl(e,s,t,i,r)),!wr(e)||e.style&&e.nodeType||Vn(e)||Iv(e))return Mn(e)?bl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=bl(e[a],s,t,i,r);return o},cx=function(e,t,i,r,s,o){var a,l,c,u;if(yi[e]&&(a=new yi[e]).init(s,a.rawVars?t[e]:oT(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new fi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==oa))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},bs,Qd,Hp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,f=r.keyframes,h=r.autoRevert,m=e._dur,g=e._startAt,p=e._targets,_=e.parent,v=_&&_.data==="nested"?_.vars.targets:p,E=e._overwrite==="auto"&&!Ip,y=e.timeline,A,R,w,S,M,O,L,D,H,q,G,W,B;if(y&&(!f||!s)&&(s="none"),e._ease=yo(s,Aa.ease),e._yEase=d?sx(yo(d===!0?s:d,Aa.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!r.runBackwards,!y||f&&!r.stagger){if(D=p[0]?xo(p[0]).harness:0,W=D&&r[D.prop],A=Iu(r,Op),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!h?g.render(-1,!0):g.revert(u&&m?ou:Nb),g._lazy=0),o){if(Os(e._startAt=an.set(p,Pi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&ci(l),startAt:null,delay:0,onUpdate:c&&function(){return Ai(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!a&&!h)&&e._startAt.revert(ou),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&m&&!g){if(t&&(a=!1),w=Pi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ci(l),immediateRender:a,stagger:0,parent:_},A),W&&(w[D.prop]=W),Os(e._startAt=an.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(ou):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Ft,Ft);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ci(l)||l&&!m,R=0;R<p.length;R++){if(M=p[R],L=M._gsap||kp(p)[R]._gsap,e._ptLookup[R]=q={},Yd[L.id]&&Is.length&&Du(),G=v===p?R:v.indexOf(M),D&&(H=new D).init(M,W||A,e,G,v)!==!1&&(e._pt=S=new fi(e._pt,M,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(ne){q[ne]=S}),H.priority&&(O=1)),!D||W)for(w in A)yi[w]&&(H=cx(w,A,e,G,M,v))?H.priority&&(O=1):q[w]=S=Vp.call(e,M,w,"get",A[w],G,v,0,r.stringFilter);e._op&&e._op[R]&&e.kill(M,e._op[R]),E&&e._pt&&(bs=e,Xt.killTweensOf(M,q,e.globalTime(t)),B=!e.parent,bs=0),e._pt&&l&&(Yd[L.id]=1)}O&&mx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,f&&t<=0&&y.render(Vi,!0,!0)},aT=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Qd=1,e.vars[t]="+=0",Hp(e,a),Qd=0,l?Gl(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,d.e&&(d.e=tn(i)+Fn(d.e)),d.b&&(d.b=u.s+Fn(d.b))},lT=function(e,t){var i=e[0]?xo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=wa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},cT=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Vn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},bl=function(e,t,i,r,s){return jt(e)?e.call(t,i,r,s):Mn(e)&&~e.indexOf("random(")?Xl(e):e},ux=Bp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",fx={};ui(ux+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return fx[n]=1});var an=function(n){Pv(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ml(r))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,m=l.keyframes,g=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,v=r.parent||Xt,E=(Vn(i)||Iv(i)?ts(i[0]):"length"in r)?[i]:Hi(i),y,A,R,w,S,M,O,L;if(a._targets=E.length?kp(E):Gl("GSAP target "+i+" not found. https://gsap.com",!Ci.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,m||f||pc(c)||pc(u)){if(r=a.vars,y=a.timeline=new Qn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:E}),y.kill(),y.parent=y._dp=zr(a),y._start=0,f||pc(c)||pc(u)){if(w=E.length,O=f&&Kv(f),wr(f))for(S in f)~ux.indexOf(S)&&(L||(L={}),L[S]=f[S]);for(A=0;A<w;A++)R=Iu(r,fx),R.stagger=0,_&&(R.yoyoEase=_),L&&wa(R,L),M=E[A],R.duration=+bl(c,zr(a),A,M,E),R.delay=(+bl(u,zr(a),A,M,E)||0)-a._delay,!f&&w===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),y.to(M,R,O?O(A,M,E):0),y._ease=_t.none;y.duration()?c=u=0:a.timeline=0}else if(m){Ml(Pi(y.vars.defaults,{ease:"none"})),y._ease=yo(m.ease||r.ease||"none");var D=0,H,q,G;if(Vn(m))m.forEach(function(W){return y.to(E,W,">")}),y.duration();else{R={};for(S in m)S==="ease"||S==="easeEach"||cT(S,m[S],R,m.easeEach);for(S in R)for(H=R[S].sort(function(W,B){return W.t-B.t}),D=0,A=0;A<H.length;A++)q=H[A],G={ease:q.e,duration:(q.t-(A?H[A-1].t:0))/100*c},G[S]=q.v,y.to(E,G,D),D+=G.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return h===!0&&!Ip&&(bs=zr(a),Xt.killTweensOf(E),bs=0),mr(v,zr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!m&&a._start===Wt(v._time)&&ci(d)&&zb(zr(a))&&v.data!=="nested")&&(a._tTime=-Ft,a.render(Math.max(0,-u)||0)),p&&Xv(zr(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-Ft&&!u?l:r<Ft?0:r,f,h,m,g,p,_,v,E,y;if(!c)Hb(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(f=Wt(d%g),d===l?(m=this._repeat,f=c):(p=Wt(d/g),m=~~p,m&&m===p?(f=c,m--):f>c&&(f=c)),_=this._yoyo&&m&1,_&&(y=this._yEase,f=c-f),p=Ca(this._tTime,g),f===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&(E&&this._yEase&&ox(E,_),this.vars.repeatRefresh&&!_&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Wt(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(qv(this,u?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/c),this._from&&(this.ratio=v=1-v),!a&&d&&!s&&!p&&(Ai(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;E&&E.render(r<0?r:E._dur*E._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&$d(this,r,s,o),Ai(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Ai(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&$d(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Os(this,1),!s&&!(u&&!a)&&(d||a||_)&&(Ai(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){ql||Ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Hp(this,c),u=this._ease(c/this._dur),aT(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(uf(this,0),this.parent||Gv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?sl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,bs&&bs.vars.overwrite!==!0)._first||sl(this),this.parent&&o!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Hi(r):a,c=this._ptLookup,u=this._pt,d,f,h,m,g,p,_;if((!s||s==="all")&&Bb(a,l))return s==="all"&&(this._pt=0),sl(this);for(d=this._op=this._op||[],s!=="all"&&(Mn(s)&&(g={},ui(s,function(v){return g[v]=1}),s=g),s=lT(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],s==="all"?(d[_]=s,m=f,h={}):(h=d[_]=d[_]||{},m=s);for(g in m)p=f&&f[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&lf(this,p,"_pt"),delete f[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&sl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return El(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return El(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Xt.killTweensOf(r,s,o)},e}(Yl);Pi(an.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ui("staggerTo,staggerFrom,staggerFromTo",function(n){an[n]=function(){var e=new Qn,t=jd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Gp=function(e,t,i){return e[t]=i},dx=function(e,t,i){return e[t](i)},uT=function(e,t,i,r){return e[t](r.fp,i)},fT=function(e,t,i){return e.setAttribute(t,i)},Wp=function(e,t){return jt(e[t])?dx:Lp(e[t])&&e.setAttribute?fT:Gp},hx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},dT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},px=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Xp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},hT=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},pT=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?lf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},mT=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},mx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},fi=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||hx,this.d=l||this,this.set=c||Gp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=mT,this.m=i,this.mt=s,this.tween=r},n}();ui(Bp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Op[n]=1});Ri.TweenMax=Ri.TweenLite=an;Ri.TimelineLite=Ri.TimelineMax=Qn;Xt=new Qn({sortChildren:!1,defaults:Aa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ci.stringFilter=rx;var Mo=[],lu={},_T=[],M_=0,gT=0,Of=function(e){return(lu[e]||_T).map(function(t){return t()})},eh=function(){var e=Date.now(),t=[];e-M_>2&&(Of("matchMediaInit"),Mo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=fr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Of("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),M_=e,Of("matchMedia"))},_x=function(){function n(t,i){this.selector=i&&Zd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=gT++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){jt(i)&&(s=r,r=i,i=jt);var o=this,a=function(){var c=Gt,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Zd(s)),Gt=o,d=r.apply(o,arguments),jt(d)&&o._r.push(d),Gt=c,o.selector=u,o.isReverted=!1,d};return o.last=a,i===jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Gt;Gt=null,i(this),Gt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof an&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof an)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Mo.length;o--;)Mo[o].id===this.id&&Mo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),vT=function(){function n(t){this.contexts=[],this.scope=t,Gt&&Gt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){wr(i)||(i={matches:i});var o=new _x(0,s||this.scope),a=o.conditions={},l,c,u;Gt&&!o.selector&&(o.selector=Gt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=fr.matchMedia(i[c]),l&&(Mo.indexOf(o)<0&&Mo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(eh):l.addEventListener("change",eh)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Nu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return tx(r)})},timeline:function(e){return new Qn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Mn(e)&&(e=Hi(e)[0]);var s=xo(e||{}).get,o=i?Hv:Vv;return i==="native"&&(i=""),e&&(t?o((yi[t]&&yi[t].get||s)(e,t,i,r)):function(a,l,c){return o((yi[a]&&yi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Hi(e),e.length>1){var r=e.map(function(u){return mi.quickSetter(u,t,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=yi[t],a=xo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;oa._pt=0,d.init(e,i?u+i:u,oa,0,[e]),d.render(1,d),oa._pt&&Xp(1,oa)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=mi.to(e,Pi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=yo(e.ease,Aa.ease)),g_(Aa,e||{})},config:function(e){return g_(Ci,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!yi[a]&&!Ri[a]&&Gl(t+" effect requires "+a+" plugin.")}),Lf[t]=function(a,l,c){return i(Hi(a),Pi(l||{},s),c)},o&&(Qn.prototype[t]=function(a,l,c){return this.add(Lf[t](a,wr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=yo(t)},parseEase:function(e,t){return arguments.length?yo(e,t):_t},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Qn(e),r,s;for(i.smoothChildTiming=ci(e.smoothChildTiming),Xt.remove(i),i._dp=0,i._time=i._tTime=Xt._time,r=Xt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof an&&r.vars.onComplete===r._targets[0]))&&mr(i,r,r._start-r._delay),r=s;return mr(Xt,i,0),i},context:function(e,t){return e?new _x(e,t):Gt},matchMedia:function(e){return new vT(e)},matchMediaRefresh:function(){return Mo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||eh()},addEventListener:function(e,t){var i=lu[e]||(lu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=lu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:jb,wrapYoyo:Zb,distribute:Kv,random:Zv,snap:jv,normalize:Kb,getUnit:Fn,clamp:Xb,splitColor:nx,toArray:Hi,selector:Zd,mapRange:Qv,pipe:Yb,unitize:$b,interpolate:Jb,shuffle:$v},install:Fv,effects:Lf,ticker:Ei,updateRoot:Qn.updateRoot,plugins:yi,globalTimeline:Xt,core:{PropTween:fi,globals:Ov,Tween:an,Timeline:Qn,Animation:Yl,getCache:xo,_removeLinkedListItem:lf,reverting:function(){return An},context:function(e){return e&&Gt&&(Gt.data.push(e),e._ctx=Gt),Gt},suppressOverwrites:function(e){return Ip=e}}};ui("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Nu[n]=an[n]});Ei.add(Qn.updateRoot);oa=Nu.to({},{duration:0});var xT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},ST=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=xT(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Bf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Mn(s)&&(l={},ui(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}ST(a,s)}}}},mi=Nu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)An?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Bf("roundProps",Jd),Bf("modifiers"),Bf("snap",jv))||Nu;an.version=Qn.version=mi.version="3.14.2";Uv=1;Np()&&Pa();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var E_,Ts,pa,qp,ho,b_,Yp,yT=function(){return typeof window<"u"},ns={},io=180/Math.PI,ma=Math.PI/180,Bo=Math.atan2,T_=1e8,$p=/([A-Z])/g,MT=/(left|right|width|margin|padding|x)/i,ET=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},th=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},AT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},gx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},vx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},CT=function(e,t,i){return e.style[t]=i},RT=function(e,t,i){return e.style.setProperty(t,i)},PT=function(e,t,i){return e._gsap[t]=i},DT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},IT=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},LT=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Yt="transform",di=Yt+"Origin",NT=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in ns&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Hr(r,a)}):this.tfm[e]=o.x?o[e]:Hr(r,e),e===di&&(this.tfm.zOrigin=o.zOrigin);else return _r.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Yt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(di,t,"")),e=Yt}(s||t)&&this.props.push(e,t,s[e])},xx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},UT=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace($p,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Yp(),(!s||!s.isStart)&&!i[Yt]&&(xx(i),r.zOrigin&&i[di]&&(i[di]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Sx=function(e,t){var i={target:e,props:[],revert:UT,save:NT};return e._gsap||mi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},yx,nh=function(e,t){var i=Ts.createElementNS?Ts.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ts.createElement(e);return i&&i.style?i:Ts.createElement(e)},wi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace($p,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Da(t)||t,1)||""},A_="O,Moz,ms,Ms,Webkit".split(","),Da=function(e,t,i){var r=t||ho,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(A_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?A_[o]:"")+e},ih=function(){yT()&&window.document&&(E_=window,Ts=E_.document,pa=Ts.documentElement,ho=nh("div")||{style:{}},nh("div"),Yt=Da(Yt),di=Yt+"Origin",ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yx=!!Da("perspective"),Yp=mi.core.reverting,qp=1)},w_=function(e){var t=e.ownerSVGElement,i=nh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),pa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),pa.removeChild(i),s},C_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Mx=function(e){var t,i;try{t=e.getBBox()}catch{t=w_(e),i=1}return t&&(t.width||t.height)||i||(t=w_(e)),t&&!t.width&&!t.x&&!t.y?{x:+C_(e,["x","cx","x1"])||0,y:+C_(e,["y","cy","y1"])||0,width:0,height:0}:t},Ex=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Mx(e))},Bs=function(e,t){if(t){var i=e.style,r;t in ns&&t!==di&&(t=Yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace($p,"-$1").toLowerCase())):i.removeAttribute(t)}},As=function(e,t,i,r,s,o){var a=new fi(e._pt,t,i,0,1,o?vx:gx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},R_={deg:1,rad:1,turn:1},FT={grid:1,flex:1},ks=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ho.style,l=MT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",h=r==="%",m,g,p,_;if(r===o||!s||R_[r]||R_[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),_=e.getCTM&&Ex(e),(h||o==="%")&&(ns[t]||~t.indexOf("adius")))return m=_?e.getBBox()[l?"width":"height"]:e[u],tn(h?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ts||!g.appendChild)&&(g=Ts.body),p=g._gsap,p&&h&&p.width&&l&&p.time===Ei.time&&!p.uncache)return tn(s/p.width*d);if(h&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,m=e[u],v?e.style[t]=v:Bs(e,t)}else(h||o==="%")&&!FT[wi(g,"display")]&&(a.position=wi(e,"position")),g===e&&(a.position="static"),g.appendChild(ho),m=ho[u],g.removeChild(ho),a.position="absolute";return l&&h&&(p=xo(g),p.time=Ei.time,p.width=g[u]),tn(f?m*s/d:m&&s?d/m*s:0)},Hr=function(e,t,i,r){var s;return qp||ih(),t in _r&&t!=="transform"&&(t=_r[t],~t.indexOf(",")&&(t=t.split(",")[0])),ns[t]&&t!=="transform"?(s=Kl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Fu(wi(e,di))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Uu[t]&&Uu[t](e,t,i)||wi(e,t)||kv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ks(e,t,s,i)+i:s},OT=function(e,t,i,r){if(!i||i==="none"){var s=Da(t,e,1),o=s&&wi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=wi(e,"borderTopColor"))}var a=new fi(this._pt,e.style,t,0,1,px),l=0,c=0,u,d,f,h,m,g,p,_,v,E,y,A;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=wi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=wi(e,t)||r,g?e.style[t]=g:Bs(e,t)),u=[i,r],rx(u),i=u[0],r=u[1],f=i.match(sa)||[],A=r.match(sa)||[],A.length){for(;d=sa.exec(r);)p=d[0],v=r.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),p!==(g=f[c++]||"")&&(h=parseFloat(g)||0,y=g.substr((h+"").length),p.charAt(1)==="="&&(p=ha(h,p)+y),_=parseFloat(p),E=p.substr((_+"").length),l=sa.lastIndex-E.length,E||(E=E||Ci.units[t]||y,l===r.length&&(r+=E,a.e+=E)),y!==E&&(h=ks(e,t,g,E)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:h,c:_-h,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?vx:gx;return Nv.test(r)&&(a.e=0),this._pt=a,a},P_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},BT=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=P_[i]||i,t[1]=P_[r]||r,t.join(" ")},kT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ns[a]&&(l=1,a=a==="transformOrigin"?di:Yt),Bs(i,a);l&&(Bs(i,Yt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Kl(i,1),o.uncache=1,xx(r)))}},Uu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new fi(e._pt,t,i,0,0,kT);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},$l=[1,0,0,1,0,0],bx={},Tx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},D_=function(e){var t=wi(e,Yt);return Tx(t)?$l:t.substr(7).match(Lv).map(tn)},Kp=function(e,t){var i=e._gsap||xo(e),r=e.style,s=D_(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?$l:s):(s===$l&&!e.offsetParent&&e!==pa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,pa.appendChild(e)),s=D_(e),l?r.display=l:Bs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):pa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},rh=function(e,t,i,r,s,o){var a=e._gsap,l=s||Kp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],m=l[1],g=l[2],p=l[3],_=l[4],v=l[5],E=t.split(" "),y=parseFloat(E[0])||0,A=parseFloat(E[1])||0,R,w,S,M;i?l!==$l&&(w=h*p-m*g)&&(S=y*(p/w)+A*(-g/w)+(g*v-p*_)/w,M=y*(-m/w)+A*(h/w)-(h*v-m*_)/w,y=S,A=M):(R=Mx(e),y=R.x+(~E[0].indexOf("%")?y/100*R.width:y),A=R.y+(~(E[1]||E[0]).indexOf("%")?A/100*R.height:A)),r||r!==!1&&a.smooth?(_=y-c,v=A-u,a.xOffset=d+(_*h+v*g)-_,a.yOffset=f+(_*m+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[di]="0px 0px",o&&(As(o,a,"xOrigin",c,y),As(o,a,"yOrigin",u,A),As(o,a,"xOffset",d,a.xOffset),As(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},Kl=function(e,t){var i=e._gsap||new lx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=wi(e,di)||"0",u,d,f,h,m,g,p,_,v,E,y,A,R,w,S,M,O,L,D,H,q,G,W,B,ne,fe,F,ge,ve,be,De,Ne;return u=d=f=g=p=_=v=E=y=0,h=m=1,i.svg=!!(e.getCTM&&Ex(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),r.scale=r.rotate=r.translate="none"),w=Kp(e,i.svg),i.svg&&(i.uncache?(ne=e.getBBox(),c=i.xOrigin-ne.x+"px "+(i.yOrigin-ne.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),rh(e,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,w)),A=i.xOrigin||0,R=i.yOrigin||0,w!==$l&&(L=w[0],D=w[1],H=w[2],q=w[3],u=G=w[4],d=W=w[5],w.length===6?(h=Math.sqrt(L*L+D*D),m=Math.sqrt(q*q+H*H),g=L||D?Bo(D,L)*io:0,v=H||q?Bo(H,q)*io+g:0,v&&(m*=Math.abs(Math.cos(v*ma))),i.svg&&(u-=A-(A*L+R*H),d-=R-(A*D+R*q))):(Ne=w[6],be=w[7],F=w[8],ge=w[9],ve=w[10],De=w[11],u=w[12],d=w[13],f=w[14],S=Bo(Ne,ve),p=S*io,S&&(M=Math.cos(-S),O=Math.sin(-S),B=G*M+F*O,ne=W*M+ge*O,fe=Ne*M+ve*O,F=G*-O+F*M,ge=W*-O+ge*M,ve=Ne*-O+ve*M,De=be*-O+De*M,G=B,W=ne,Ne=fe),S=Bo(-H,ve),_=S*io,S&&(M=Math.cos(-S),O=Math.sin(-S),B=L*M-F*O,ne=D*M-ge*O,fe=H*M-ve*O,De=q*O+De*M,L=B,D=ne,H=fe),S=Bo(D,L),g=S*io,S&&(M=Math.cos(S),O=Math.sin(S),B=L*M+D*O,ne=G*M+W*O,D=D*M-L*O,W=W*M-G*O,L=B,G=ne),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,_=180-_),h=tn(Math.sqrt(L*L+D*D+H*H)),m=tn(Math.sqrt(W*W+Ne*Ne)),S=Bo(G,W),v=Math.abs(S)>2e-4?S*io:0,y=De?1/(De<0?-De:De):0),i.svg&&(B=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Tx(wi(e,Yt)),B&&e.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(h*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=tn(h),i.scaleY=tn(m),i.rotation=tn(g)+a,i.rotationX=tn(p)+a,i.rotationY=tn(_)+a,i.skewX=v+a,i.skewY=E+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[di]=Fu(c)),i.xOffset=i.yOffset=0,i.force3D=Ci.force3D,i.renderTransform=i.svg?VT:yx?Ax:zT,i.uncache=0,i},Fu=function(e){return(e=e.split(" "))[0]+" "+e[1]},kf=function(e,t,i){var r=Fn(t);return tn(parseFloat(t)+parseFloat(ks(e,"x",i+"px",r)))+r},zT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ax(e,t)},$s="0deg",Ya="0px",Ks=") ",Ax=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,m=i.scaleX,g=i.scaleY,p=i.transformPerspective,_=i.force3D,v=i.target,E=i.zOrigin,y="",A=_==="auto"&&e&&e!==1||_===!0;if(E&&(d!==$s||u!==$s)){var R=parseFloat(u)*ma,w=Math.sin(R),S=Math.cos(R),M;R=parseFloat(d)*ma,M=Math.cos(R),o=kf(v,o,w*M*-E),a=kf(v,a,-Math.sin(R)*-E),l=kf(v,l,S*M*-E+E)}p!==Ya&&(y+="perspective("+p+Ks),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(A||o!==Ya||a!==Ya||l!==Ya)&&(y+=l!==Ya||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ks),c!==$s&&(y+="rotate("+c+Ks),u!==$s&&(y+="rotateY("+u+Ks),d!==$s&&(y+="rotateX("+d+Ks),(f!==$s||h!==$s)&&(y+="skew("+f+", "+h+Ks),(m!==1||g!==1)&&(y+="scale("+m+", "+g+Ks),v.style[Yt]=y||"translate(0, 0)"},VT=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,m=i.xOrigin,g=i.yOrigin,p=i.xOffset,_=i.yOffset,v=i.forceCSS,E=parseFloat(o),y=parseFloat(a),A,R,w,S,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ma,c*=ma,A=Math.cos(l)*d,R=Math.sin(l)*d,w=Math.sin(l-c)*-f,S=Math.cos(l-c)*f,c&&(u*=ma,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,S*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,R*=M)),A=tn(A),R=tn(R),w=tn(w),S=tn(S)):(A=d,S=f,R=w=0),(E&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(E=ks(h,"x",o,"px"),y=ks(h,"y",a,"px")),(m||g||p||_)&&(E=tn(E+m-(m*A+g*w)+p),y=tn(y+g-(m*R+g*S)+_)),(r||s)&&(M=h.getBBox(),E=tn(E+r/100*M.width),y=tn(y+s/100*M.height)),M="matrix("+A+","+R+","+w+","+S+","+E+","+y+")",h.setAttribute("transform",M),v&&(h.style[Yt]=M)},HT=function(e,t,i,r,s){var o=360,a=Mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?io:1),c=l-r,u=r+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*T_)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*T_)%o-~~(c/o)*o)),e._pt=f=new fi(e._pt,t,i,r,c,bT),f.e=u,f.u="deg",e._props.push(i),f},I_=function(e,t){for(var i in t)e[i]=t[i];return e},GT=function(e,t,i){var r=I_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,d,f,h,m;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Yt]=t,a=Kl(i,1),Bs(i,Yt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Yt],o[Yt]=t,a=Kl(i,1),o[Yt]=c);for(l in ns)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=Fn(c),m=Fn(u),d=h!==m?ks(i,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new fi(e._pt,a,l,d,f-d,th),e._pt.u=m||0,e._props.push(l));I_(a,r)};ui("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Uu[e>1?"border"+n:n]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(m){return Hr(a,m,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(m,g){return h[m]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,h,d)}});var wx={name:"css",register:ih,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,d,f,h,m,g,p,_,v,E,y,A,R,w,S,M;qp||ih(),this.styles=this.styles||Sx(e),S=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(u=t[g],!(yi[g]&&cx(g,t,i,r,e,s)))){if(h=typeof u,m=Uu[g],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Xl(u)),m)m(this,e,g,u,i)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Ls.lastIndex=0,Ls.test(c)||(p=Fn(c),_=Fn(u),_?p!==_&&(c=ks(e,g,c,_)+_):p&&(u+=p)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),S.push(g,0,a[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Mn(c)&&~c.indexOf("random(")&&(c=Xl(c)),Fn(c+"")||c==="auto"||(c+=Ci.units[g]||Fn(Hr(e,g))||""),(c+"").charAt(1)==="="&&(c=Hr(e,g))):c=Hr(e,g),f=parseFloat(c),v=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),g in _r&&(g==="autoAlpha"&&(f===1&&Hr(e,"visibility")==="hidden"&&d&&(f=0),S.push("visibility",0,a.visibility),As(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=_r[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in ns,E){if(this.styles.save(g),M=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=wi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var O=e.style.perspective;e.style.perspective=u,u=wi(e,"perspective"),O?e.style.perspective=O:Bs(e,"perspective")}d=parseFloat(u)}if(y||(A=e._gsap,A.renderTransform&&!t.parseTransform||Kl(e,t.parseTransform),R=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new fi(this._pt,a,Yt,0,1,A.renderTransform,A,0,-1),y.dep=1),g==="scale")this._pt=new fi(this._pt,A,"scaleY",A.scaleY,(v?ha(A.scaleY,v+d):d)-A.scaleY||0,th),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){S.push(di,0,a[di]),u=BT(u),A.svg?rh(e,u,0,R,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==A.zOrigin&&As(this,A,"zOrigin",A.zOrigin,_),As(this,a,g,Fu(c),Fu(u)));continue}else if(g==="svgOrigin"){rh(e,u,1,R,0,this);continue}else if(g in bx){HT(this,A,g,f,v?ha(f,v+u):u);continue}else if(g==="smoothOrigin"){As(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){GT(this,u,e);continue}}else g in a||(g=Da(g)||g);if(E||(d||d===0)&&(f||f===0)&&!ET.test(u)&&g in a)p=(c+"").substr((f+"").length),d||(d=0),_=Fn(u)||(g in Ci.units?Ci.units[g]:p),p!==_&&(f=ks(e,g,c,_)),this._pt=new fi(this._pt,E?A:a,g,f,(v?ha(f,v+d):d)-f,!E&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?wT:th),this._pt.u=_||0,E&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=AT):p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=TT);else if(g in a)OT.call(this,e,g,c,v?v+u:u);else if(g in e)this.add(e,g,c||e[g],v?v+u:u,r,s);else if(g!=="parseTransform"){Fp(g,u);continue}E||(g in a?S.push(g,0,a[g]):typeof e[g]=="function"?S.push(g,2,e[g]()):S.push(g,1,c||e[g])),o.push(g)}}w&&mx(this)},render:function(e,t){if(t.tween._time||!Yp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Hr,aliases:_r,getSetter:function(e,t,i){var r=_r[t];return r&&r.indexOf(",")<0&&(t=r),t in ns&&t!==di&&(e._gsap.x||Hr(e,"x"))?i&&b_===i?t==="scale"?DT:PT:(b_=i||{})&&(t==="scale"?IT:LT):e.style&&!Lp(e.style[t])?CT:~t.indexOf("-")?RT:Wp(e,t)},core:{_removeProperty:Bs,_getMatrix:Kp}};mi.utils.checkPrefix=Da;mi.core.getStyleSaver=Sx;(function(n,e,t,i){var r=ui(n+","+e+","+t,function(s){ns[s]=1});ui(e,function(s){Ci.units[s]="deg",bx[s]=1}),_r[r[13]]=n+","+e,ui(i,function(s){var o=s.split(":");_r[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ci.units[n]="px"});mi.registerPlugin(wx);var It=mi.registerPlugin(wx)||mi;It.core.Tween;/*!
 * ScrollToPlugin 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On,Cx,$r,gr,Ns,Rx,_a,mc,Px=function(){return typeof window<"u"},Dx=function(){return On||Px()&&(On=window.gsap)&&On.registerPlugin&&On},Ix=function(e){return typeof e=="string"},L_=function(e){return typeof e=="function"},jl=function(e,t){var i=t==="x"?"Width":"Height",r="scroll"+i,s="client"+i;return e===$r||e===gr||e===Ns?Math.max(gr[r],Ns[r])-($r["inner"+i]||gr[s]||Ns[s]):e[r]-e["offset"+i]},Zl=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===$r&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=gr[i]!=null?gr:Ns),function(){return e[i]}},WT=function(e,t,i,r){if(L_(e)&&(e=e(t,i,r)),typeof e!="object")return Ix(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&L_(e[o])?e[o](t,i,r):e[o];return s},Lx=function(e,t){if(e=Rx(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var i=e.getBoundingClientRect(),r=!t||t===$r||t===Ns,s=r?{top:gr.clientTop-($r.pageYOffset||gr.scrollTop||Ns.scrollTop||0),left:gr.clientLeft-($r.pageXOffset||gr.scrollLeft||Ns.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!r&&t&&(o.x+=Zl(t,"x")(),o.y+=Zl(t,"y")()),o},N_=function(e,t,i,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:Ix(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?jl(t,i)-s:Math.min(jl(t,i),Lx(e,t)[i]-s)},sh=function(){On=Dx(),Px()&&On&&typeof document<"u"&&document.body&&($r=window,Ns=document.body,gr=document.documentElement,Rx=On.utils.toArray,On.config({autoKillThreshold:7}),_a=On.config(),Cx=1)},Ba={version:"3.14.2",name:"scrollTo",rawVars:1,register:function(e){On=e,sh()},init:function(e,t,i,r,s){Cx||sh();var o=this,a=On.getProperty(e,"scrollSnapType");o.isWin=e===$r,o.target=e,o.tween=i,t=WT(t,r,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:_a).autoKill,o.getX=Zl(e,"x"),o.getY=Zl(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),mc||(mc=On.core.globals().ScrollTrigger),On.getProperty(e,"scrollBehavior")==="smooth"&&On.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,N_(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,N_(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,d=t.snapInline,f,h,m,g,p;i;)i.r(e,i.d),i=i._next;f=c||!t.skipX?t.getX():a,h=c||!t.skipY?t.getY():l,m=h-l,g=f-a,p=_a.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(g>p||g<-p)&&f<jl(r,"x")&&(t.skipX=1),!t.skipY&&(m>p||m<-p)&&h<jl(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?$r.scrollTo(t.skipX?f:t.x,t.skipY?h:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),u&&(e===1||e===0)&&(h=r.scrollTop,f=r.scrollLeft,d?r.style.scrollSnapType=d:r.style.removeProperty("scroll-snap-type"),r.scrollTop=h+1,r.scrollLeft=f+1,r.scrollTop=h,r.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,mc&&mc.update()},kill:function(e){var t=e==="scrollTo",i=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};Ba.max=jl;Ba.getOffset=Lx;Ba.buildGetter=Zl;Ba.config=function(n){_a||sh()||(_a=On.config());for(var e in n)_a[e]=n[e]};Dx()&&On.registerPlugin(Ba);function U_(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[oe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"})])}function XT(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[oe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"})])}function qT(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[oe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function YT(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[oe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"})])}function $T(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[oe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})])}function KT(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[oe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"})])}function jT(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[oe("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})])}const ZT={class:"nav-shell nav-shell--plain"},JT=["href","onClick"],QT={__name:"SiteHeader",props:{isMenuActive:{type:Boolean,required:!0},activeSection:{type:String,default:"home"},navItems:{type:Array,required:!0}},emits:["toggle-menu","close-menu","navigate"],setup(n,{emit:e}){const t=n,i=e,r=ua(!1),s=()=>{r.value=window.scrollY>20},o=a=>{i("navigate",a),t.isMenuActive&&i("close-menu")};return Do(()=>{s(),window.addEventListener("scroll",s,{passive:!0})}),Io(()=>{window.removeEventListener("scroll",s)}),(a,l)=>(je(),tt("nav",{class:Ds({"nav-scrolled":r.value})},[oe("div",ZT,[oe("a",{href:"#home",class:"logo",onClick:l[0]||(l[0]=zd(c=>o("home"),["prevent"]))},"AYOMIDE AGBAJE"),oe("button",{type:"button",class:"menu-toggle",onClick:l[1]||(l[1]=c=>a.$emit("toggle-menu")),"aria-label":"Toggle menu"},[$e(pt(qT),{class:"menu-toggle-icon"})]),oe("ul",{class:Ds(["nav-menu",{active:n.isMenuActive}])},[(je(!0),tt(qt,null,zi(n.navItems,c=>(je(),tt("li",{key:c.id},[oe("a",{href:`#${c.id}`,class:Ds({active:n.activeSection===c.id}),onClick:zd(u=>o(c.id),["prevent"])},At(c.label),11,JT)]))),128))],2)])],2))}},e1={class:"section-pager","aria-label":"Section Navigation"},t1=["aria-label","onClick"],n1={class:"pager-index"},i1={class:"pager-label"},r1={__name:"SectionPager",props:{items:{type:Array,required:!0},activeSection:{type:String,default:"home"}},emits:["navigate"],setup(n){return(e,t)=>(je(),tt("aside",e1,[(je(!0),tt(qt,null,zi(n.items,i=>(je(),tt("button",{key:i.id,type:"button",class:Ds(["pager-dot",{active:n.activeSection===i.id}]),"aria-label":`Go to ${i.label}`,onClick:r=>e.$emit("navigate",i.id)},[oe("span",n1,At(i.number),1),oe("span",i1,At(i.label),1)],10,t1))),128))]))}},s1={id:"home",class:"hero route-section"},o1={class:"hero-content"},a1={__name:"HeroSection",emits:["navigate"],setup(n){return(e,t)=>(je(),tt("section",s1,[t[3]||(t[3]=oe("div",{class:"hero-bg"},[oe("canvas",{id:"particleCanvas"})],-1)),oe("div",o1,[t[1]||(t[1]=oe("div",{class:"hero-label"},"Full-Stack Engineer (Backend-First)",-1)),t[2]||(t[2]=oe("p",{class:"hero-subtitle"}," Laravel, Vue, Flutter. Backend architecture, Security, and Industrial level performance. ",-1)),oe("a",{href:"#work",class:"cta-button",onClick:t[0]||(t[0]=zd(i=>e.$emit("navigate","work"),["prevent"]))}," View Case Studies ")]),t[4]||(t[4]=oe("div",{class:"scroll-indicator"},"Scroll",-1))]))}},Nx=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},l1={},c1={id:"about",class:"route-section"};function u1(n,e){return je(),tt("section",c1,[...e[0]||(e[0]=[fv('<div class="section-number">01 / About</div><h2 class="section-title"><span>WHO I AM</span></h2><div class="about-grid"><div class="about-text"><p> I am a full-stack software engineer with 7+ years of experience building web and mobile applications. My core strength lies in backend architecture designing APIs and systems that are secure, scalable, and maintainable. </p><p> I work primarily with Laravel, Vue, Flutter, and MySQL, with experience in authentication systems, performance optimization, and database modeling. I focus on writing clean, testable code and structuring systems that can evolve without becoming fragile. </p><p> Beyond implementation, I think in terms of product architecture: how features interact, how systems scale, and how engineering decisions affect long-term velocity. </p></div><div class="about-stats"><div class="stat-item"><div class="stat-number">+7</div><div class="stat-label">Years XP</div></div><div class="stat-item"><div class="stat-number">80%</div><div class="stat-label">Uptime SLA</div></div><div class="stat-item"><div class="stat-number">100K+</div><div class="stat-label">Active Users Managed</div></div><div class="stat-item"><div class="stat-number">50+</div><div class="stat-label">Jobs Completed</div></div></div></div>',3)])])}const f1=Nx(l1,[["render",u1]]),Ux=[{number:"01",slug:"gamified-short-form-video-backend",title:"Gamified Short-Form Video Backend",stage:"Production System",visualType:"Reward Infrastructure",summary:"Engineered a high-throughput, API-first backend for a reward-driven short-video platform with dual-wallet accounting, earning caps, referrals, and secure withdrawals.",summarySecondary:"Built to survive scale with concurrency-safe transactions, anti-abuse guardrails, and feed architecture tuned for heavy real-time demand.",tags:["Laravel","MySQL","Redis","Sanctum"],metrics:[{value:"2x",label:"Wallet Layers"},{value:"100%",label:"Transactional Safety"},{value:"<200ms",label:"Core API Paths"}],challenge:"The platform needed to reward engagement in real time while preventing fraud vectors and race conditions around payouts.",solution:"Implemented transaction-safe wallet services, anti-abuse guardrails, and queue-backed processing for referral and withdrawal flows.",impact:["Stable payout logic under concurrent user activity","Reduced exploitation risk through layered validation","Predictable API response behavior under traffic bursts"],architecture:["Modular services for wallet, rewards, referrals, and withdrawals","Redis-backed throttling and abuse detection checks","Idempotent payout handlers with database transactions"]},{number:"02",slug:"food-delivery-platform-api",title:"Food Delivery Platform API",stage:"Multi-Role Platform",visualType:"Order Lifecycle Engine",summary:"Built the operational core of a full food-delivery ecosystem covering vendor onboarding, menu orchestration, order lifecycle, and strict role-based access.",summarySecondary:"Architected with modular APIs and a resilient relational model so new product features could ship faster without compromising reliability.",tags:["Laravel","Vue","MySQL","REST API"],metrics:[{value:"6+",label:"Core Roles"},{value:"3x",label:"Faster Feature Additions"},{value:"99.9%",label:"Order Integrity"}],challenge:"Different user types required strict boundaries and clean domain workflows without slowing down future feature expansion.",solution:"Introduced role-aware API modules, normalized data models, and clear order-state transitions with validation checkpoints.",impact:["Faster shipping of vendor and customer features","Cleaner maintainability through separated modules","Reliable end-to-end order status tracking"],architecture:["Role-scoped API endpoints for admin, vendor, rider, and customer","Order pipeline states with explicit transition guards","Relational schema tuned for reporting and dashboard performance"]},{number:"03",slug:"authentication-and-security-systems",title:"Authentication & Security Systems",stage:"Security Layer",visualType:"Identity and Access Control",summary:"Architected a hardened identity layer with OTP flows, 2FA enforcement, device trust verification, and withdrawal protection for high-risk actions.",summarySecondary:"Stacked with rate controls, token hardening, and data-integrity safeguards to reduce abuse while keeping login friction low.",tags:["Laravel","Redis","JWT / Tokens","FCM"],metrics:[{value:"4+",label:"Auth Factors"},{value:"70%",label:"Abuse Drop"},{value:"24/7",label:"Threat Guardrails"}],challenge:"Authentication needed to stay friction-aware for users while preserving strong protection on high-risk operations.",solution:"Built layered auth workflows combining OTP, second-factor checks, device trust, and endpoint-level rate controls.",impact:["Improved account safety with minimal UX friction","Lower brute-force and token abuse incidents","Safer withdrawal and sensitive-operation endpoints"],architecture:["Token lifecycle controls with forced rotation paths","Adaptive OTP and device verification logic","Redis-based throttling plus action-level audit trails"]}];function d1(n){return Ux.find(e=>e.slug===n)}const h1={id:"work",class:"route-section"},p1={class:"projects-container projects-compact"},m1={class:"project-visual","aria-hidden":"true"},_1={class:"project-visual-head"},g1={class:"project-visual-type"},v1={class:"project-visual-stage"},x1={class:"project-visual-metrics"},S1={class:"project-metric-value"},y1={class:"project-metric-label"},M1={class:"project-info"},E1={class:"project-number"},b1={class:"project-title"},T1={class:"project-description"},A1={class:"project-description"},w1={class:"project-tags"},C1={__name:"WorkSection",setup(n){return(e,t)=>(je(),tt("section",h1,[t[1]||(t[1]=oe("div",{class:"section-number"},"02 / Work",-1)),t[2]||(t[2]=oe("h2",{class:"section-title"},[oe("span",null,"SELECTED PROJECTS")],-1)),oe("div",p1,[(je(!0),tt(qt,null,zi(pt(Ux),i=>(je(),tt("article",{key:i.slug,class:"project-item"},[oe("div",m1,[oe("div",_1,[oe("div",g1,At(i.visualType),1),oe("div",v1,At(i.stage),1)]),oe("div",x1,[(je(!0),tt(qt,null,zi(i.metrics,r=>(je(),tt("div",{class:"project-metric",key:r.label},[oe("div",S1,At(r.value),1),oe("div",y1,At(r.label),1)]))),128))])]),oe("div",M1,[oe("div",E1,At(i.number),1),oe("h3",b1,At(i.title),1),oe("p",T1,At(i.summary),1),oe("p",A1,At(i.summarySecondary),1),oe("div",w1,[(je(!0),tt(qt,null,zi(i.tags,r=>(je(),tt("span",{key:r,class:"tag"},At(r),1))),128))]),$e(pt(Ru),{class:"project-link",to:{name:"case-study",params:{slug:i.slug}}},{default:Ea(()=>[t[0]||(t[0]=oe("span",null,"View Case Study",-1)),$e(pt(XT),{class:"project-link-icon"})]),_:1},8,["to"])])]))),128))])]))}},R1={},P1={id:"stack",class:"route-section"};function D1(n,e){return je(),tt("section",P1,[...e[0]||(e[0]=[fv('<div class="section-number">03 / Stack</div><h2 class="section-title"><span>TECH EXPERTISE</span></h2><div class="tech-grid"><div class="tech-card"><div class="tech-icon">BE</div><h3 class="tech-title">Backend Engineering</h3><ul class="tech-list"><li>Laravel (API-first architecture)</li><li>PHP 8+</li><li>Authentication &amp; 2FA Systems</li><li>RESTful API Design</li><li>Concurrency &amp; Data Integrity</li></ul></div><div class="tech-card"><div class="tech-icon">DB</div><h3 class="tech-title">Database &amp; Caching</h3><ul class="tech-list"><li>MySQL (Schema Design &amp; Indexing)</li><li>Query Optimization</li><li>Redis (Caching &amp; Rate Limiting)</li><li>Transactions &amp; Locking</li><li>Relational Modeling</li></ul></div><div class="tech-card"><div class="tech-icon">FE</div><h3 class="tech-title">Frontend &amp; Mobile</h3><ul class="tech-list"><li>Vue.js</li><li>Flutter</li><li>JavaScript</li><li>State Management</li><li>Responsive UI Systems</li></ul></div><div class="tech-card"><div class="tech-icon">INF</div><h3 class="tech-title">Infrastructure</h3><ul class="tech-list"><li>DigitalOcean / Cloudways</li><li>AWS S3</li><li>NGINX / Apache</li><li>Server Provisioning</li><li>Performance Monitoring</li></ul></div></div>',3)])])}const I1=Nx(R1,[["render",D1]]);function qn(n,e){return je(),tt("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[oe("path",{"fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z","clip-rule":"evenodd"})])}const L1={id:"experience",class:"route-section"},N1={class:"experience-timeline"},U1={class:"timeline-item"},F1={class:"timeline-content"},O1={class:"timeline-achievements"},B1={class:"timeline-item"},k1={class:"timeline-content"},z1={class:"timeline-achievements"},V1={class:"timeline-item"},H1={class:"timeline-content"},G1={class:"timeline-achievements"},W1={__name:"ExperienceSection",setup(n){return(e,t)=>(je(),tt("section",L1,[t[24]||(t[24]=oe("div",{class:"section-number"},"04 / Experience",-1)),t[25]||(t[25]=oe("h2",{class:"section-title"},[oe("span",null,"TRACK RECORD")],-1)),oe("div",N1,[oe("div",U1,[t[7]||(t[7]=oe("div",{class:"timeline-date"},"2021 — Present",-1)),oe("div",F1,[t[4]||(t[4]=oe("h3",{class:"timeline-role"},"Full-Stack Engineer",-1)),t[5]||(t[5]=oe("div",{class:"timeline-company"},"Independent / Product-Focused Work",-1)),t[6]||(t[6]=oe("p",{class:"timeline-description"}," Designing and building backend-heavy web and mobile systems from architecture to deployment. ",-1)),oe("ul",O1,[oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[0]||(t[0]=oe("span",null,"Architected API-first Laravel systems with modular routing",-1))]),oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[1]||(t[1]=oe("span",null,"Designed dual-wallet and reward logic with abuse safeguards",-1))]),oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[2]||(t[2]=oe("span",null,"Implemented OTP login, 2FA, and withdrawal protection flows",-1))]),oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[3]||(t[3]=oe("span",null,"Optimized database queries and enforced transactional integrity",-1))])])])]),oe("div",B1,[t[15]||(t[15]=oe("div",{class:"timeline-date"},"2019 — 2021",-1)),oe("div",k1,[t[12]||(t[12]=oe("h3",{class:"timeline-role"},"Full-Stack Developer",-1)),t[13]||(t[13]=oe("div",{class:"timeline-company"},"Client & Startup Projects",-1)),t[14]||(t[14]=oe("p",{class:"timeline-description"}," Built and maintained production web and mobile applications across multiple domains. ",-1)),oe("ul",z1,[oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[8]||(t[8]=oe("span",null,"Developed RESTful APIs consumed by Vue and Flutter apps",-1))]),oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[9]||(t[9]=oe("span",null,"Structured relational databases for performance and maintainability",-1))]),oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[10]||(t[10]=oe("span",null,"Integrated payment systems and role-based access controls",-1))]),oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[11]||(t[11]=oe("span",null,"Managed server deployments on DigitalOcean and Cloudways",-1))])])])]),oe("div",V1,[t[23]||(t[23]=oe("div",{class:"timeline-date"},"2017 — 2019",-1)),oe("div",H1,[t[20]||(t[20]=oe("h3",{class:"timeline-role"},"Software Developer",-1)),t[21]||(t[21]=oe("div",{class:"timeline-company"},"Early Career",-1)),t[22]||(t[22]=oe("p",{class:"timeline-description"}," Focused on core PHP development, frontend integration, and foundational backend systems. ",-1)),oe("ul",G1,[oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[16]||(t[16]=oe("span",null,"Built CRUD systems and admin dashboards",-1))]),oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[17]||(t[17]=oe("span",null,"Gained experience in database normalization and indexing",-1))]),oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[18]||(t[18]=oe("span",null,"Developed reusable components in Vue",-1))]),oe("li",null,[$e(pt(qn),{class:"list-item-icon"}),t[19]||(t[19]=oe("span",null,"Established clean coding and testing habits",-1))])])])])])]))}},X1={id:"foundations",class:"route-section"},q1={class:"foundation-timeline"},Y1=["data-index","onMouseenter","onFocusin"],$1={class:"foundation-marker"},K1={class:"foundation-phase"},j1={class:"foundation-content"},Z1={class:"foundation-title"},J1={class:"foundation-subtitle"},Q1={key:0,class:"foundation-list"},eA={__name:"EducationSection",setup(n){const e=[{phase:"Academic Foundation",title:"B.Sc. Building (Management)",subtitle:"Obafemi Awolowo University",paragraphs:["Built a strong systems mindset around planning, sequencing, and lifecycle execution.","That discipline now shapes how I design backend architecture and delivery workflows."],points:[]},{phase:"Engineering Principles",title:"Architecture-Driven Development",subtitle:"How I structure software decisions",paragraphs:["I optimize for long-term maintainability, predictable behavior, and safe scalability."],points:["API-first system design","Data integrity over shortcuts","Security by default (auth, rate limits, validation)","Performance-aware queries and indexing","Modular architecture for long-term maintainability"]},{phase:"Execution Style",title:"From Scope to Production",subtitle:"Product-aware engineering delivery",paragraphs:["I translate product requirements into clear technical boundaries, implementation phases, and measurable outcomes.","The focus is to ship reliable systems quickly without creating hidden technical debt."],points:[]}],t=ua(0);let i=null;const r=s=>{t.value=s};return Do(()=>{const s=document.querySelectorAll("#foundations .foundation-timeline-item");i=new IntersectionObserver(o=>{o.forEach(a=>{if(a.isIntersecting){const l=Number(a.target.getAttribute("data-index"));Number.isNaN(l)||(t.value=l)}})},{threshold:.55,rootMargin:"-15% 0px -25% 0px"}),s.forEach(o=>i.observe(o))}),Io(()=>{i&&i.disconnect()}),(s,o)=>(je(),tt("section",X1,[o[1]||(o[1]=oe("div",{class:"section-number"},"05 / Foundations",-1)),o[2]||(o[2]=oe("h2",{class:"section-title"},[oe("span",null,"EDUCATION & ENGINEERING APPROACH")],-1)),oe("div",q1,[(je(),tt(qt,null,zi(e,(a,l)=>{var c;return oe("article",{key:a.title,"data-index":l,class:Ds(["foundation-timeline-item",{active:t.value===l}]),tabindex:"0",onMouseenter:u=>r(l),onFocusin:u=>r(l)},[oe("div",$1,[oe("div",K1,At(a.phase),1),o[0]||(o[0]=oe("span",{class:"foundation-dot"},null,-1))]),oe("div",j1,[oe("h3",Z1,At(a.title),1),oe("div",J1,At(a.subtitle),1),(je(!0),tt(qt,null,zi(a.paragraphs,u=>(je(),tt("p",{key:u,class:"foundation-description"},At(u),1))),128)),(c=a.points)!=null&&c.length?(je(),tt("ul",Q1,[(je(!0),tt(qt,null,zi(a.points,u=>(je(),tt("li",{key:u},[$e(pt(qn),{class:"list-item-icon"}),oe("span",null,At(u),1)]))),128))])):CM("",!0)])],42,Y1)}),64))])]))}},tA={id:"contact",class:"contact-section route-section"},nA={class:"contact-links"},iA={href:"mailto:agbajee835@gmail.com",target:"_blank",rel:"noopener noreferrer",class:"contact-link"},rA={href:"https://github.com/Agbajee",target:"_blank",rel:"noopener noreferrer",class:"contact-link"},sA={href:"https://www.linkedin.com/in/devagbaje",target:"_blank",rel:"noopener noreferrer",class:"contact-link"},oA={href:"https://wa.me/2348145302579",target:"_blank",rel:"noopener noreferrer",class:"contact-link"},aA={__name:"ContactSection",setup(n){return(e,t)=>(je(),tt("section",tA,[t[4]||(t[4]=oe("div",{class:"section-number"},"05 / Contact",-1)),t[5]||(t[5]=oe("h2",{class:"contact-title"},"LET'S BUILD SOMETHING",-1)),t[6]||(t[6]=oe("p",{class:"contact-subtitle"}," Interested in working together? Let's connect and discuss your next project. ",-1)),oe("div",nA,[oe("a",iA,[$e(pt(jT),{class:"contact-link-icon"}),t[0]||(t[0]=uo(" agbajee835@gmail.com ",-1))]),oe("a",rA,[$e(pt(KT),{class:"contact-link-icon"}),t[1]||(t[1]=uo(" github.com/Agbajee ",-1))]),oe("a",sA,[$e(pt(YT),{class:"contact-link-icon"}),t[2]||(t[2]=uo(" linkedin.com/in/devagbaje ",-1))]),oe("a",oA,[$e(pt($T),{class:"contact-link-icon"}),t[3]||(t[3]=uo(" Whatsapp ",-1))])])]))}},lA={id:"year"},cA={__name:"SiteFooter",props:{year:{type:Number,required:!0}},setup(n){return(e,t)=>(je(),tt("footer",null,[oe("p",null,[t[0]||(t[0]=uo("© ",-1)),oe("span",lA,At(n.year),1),t[1]||(t[1]=uo(" All Rights Reserved",-1))]),t[2]||(t[2]=oe("p",null,"Designed & Developed with Precision",-1))]))}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jp="183",uA=0,F_=1,fA=2,cu=1,dA=2,al=3,zs=0,hi=1,Wr=2,Kr=0,ga=1,Ou=2,O_=3,B_=4,hA=5,lo=100,pA=101,mA=102,_A=103,gA=104,vA=200,xA=201,SA=202,yA=203,oh=204,ah=205,MA=206,EA=207,bA=208,TA=209,AA=210,wA=211,CA=212,RA=213,PA=214,lh=0,ch=1,uh=2,Ia=3,fh=4,dh=5,hh=6,ph=7,Fx=0,DA=1,IA=2,Er=0,Ox=1,Bx=2,kx=3,zx=4,Vx=5,Hx=6,Gx=7,Wx=300,Ao=301,La=302,zf=303,Vf=304,ff=306,mh=1e3,qr=1001,_h=1002,bn=1003,LA=1004,_c=1005,kn=1006,Hf=1007,po=1008,ki=1009,Xx=1010,qx=1011,Jl=1012,Zp=1013,Cr=1014,vr=1015,is=1016,Jp=1017,Qp=1018,Ql=1020,Yx=35902,$x=35899,Kx=1021,jx=1022,Qi=1023,rs=1026,mo=1027,Zx=1028,em=1029,Na=1030,tm=1031,nm=1033,uu=33776,fu=33777,du=33778,hu=33779,gh=35840,vh=35841,xh=35842,Sh=35843,yh=36196,Mh=37492,Eh=37496,bh=37488,Th=37489,Ah=37490,wh=37491,Ch=37808,Rh=37809,Ph=37810,Dh=37811,Ih=37812,Lh=37813,Nh=37814,Uh=37815,Fh=37816,Oh=37817,Bh=37818,kh=37819,zh=37820,Vh=37821,Hh=36492,Gh=36494,Wh=36495,Xh=36283,qh=36284,Yh=36285,$h=36286,NA=3200,UA=0,FA=1,Es="",Ui="srgb",Ua="srgb-linear",Bu="linear",Rt="srgb",ko=7680,k_=519,OA=512,BA=513,kA=514,im=515,zA=516,VA=517,rm=518,HA=519,z_=35044,GA=35048,V_="300 es",xr=2e3,ku=2001;function WA(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XA(){const n=zu("canvas");return n.style.display="block",n}const H_={};function G_(...n){const e="THREE."+n.shift();console.log(e,...n)}function Jx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function et(...n){n=Jx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function St(...n){n=Jx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Vu(...n){const e=n.join(" ");e in H_||(H_[e]=!0,et(...n))}function qA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const YA={[lh]:ch,[uh]:hh,[fh]:ph,[Ia]:dh,[ch]:lh,[hh]:uh,[ph]:fh,[dh]:Ia};class ka{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=Math.PI/180,Kh=180/Math.PI;function ac(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function $A(n,e){return(n%e+e)%e}function Wf(n,e,t){return(1-t)*n+t*e}function $a(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ii(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(e=0,t=0){Lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class za{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],m=s[o+2],g=s[o+3];if(d!==g||l!==f||c!==h||u!==m){let p=l*f+c*h+u*m+d*g;p<0&&(f=-f,h=-h,m=-m,g=-g,p=-p);let _=1-a;if(p<.9995){const v=Math.acos(p),E=Math.sin(v);_=Math.sin(_*v)/E,a=Math.sin(a*v)/E,l=l*_+f*a,c=c*_+h*a,u=u*_+m*a,d=d*_+g*a}else{l=l*_+f*a,c=c*_+h*a,u=u*_+m*a,d=d*_+g*a;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],m=s[o+3];return e[t]=a*m+u*d+l*h-c*f,e[t+1]=l*m+u*f+c*d-a*h,e[t+2]=c*m+u*h+a*f-l*d,e[t+3]=u*m-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"YZX":this._x=f*u*d+c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d-f*h*m;break;case"XZY":this._x=f*u*d-c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d+f*h*m;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,i=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(W_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(W_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xf.copy(this).projectOnVector(e),this.sub(Xf)}reflect(e){return this.sub(Xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xf=new re,W_=new za;class ot{constructor(e,t,i,r,s,o,a,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],m=i[8],g=r[0],p=r[3],_=r[6],v=r[1],E=r[4],y=r[7],A=r[2],R=r[5],w=r[8];return s[0]=o*g+a*v+l*A,s[3]=o*p+a*E+l*R,s[6]=o*_+a*y+l*w,s[1]=c*g+u*v+d*A,s[4]=c*p+u*E+d*R,s[7]=c*_+u*y+d*w,s[2]=f*g+h*v+m*A,s[5]=f*p+h*E+m*R,s[8]=f*_+h*y+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,m=t*d+i*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=h*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qf.makeScale(e,t)),this}rotate(e){return this.premultiply(qf.makeRotation(-e)),this}translate(e,t){return this.premultiply(qf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new ot,X_=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q_=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KA(){const n={enabled:!0,workingColorSpace:Ua,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Rt&&(r.r=jr(r.r),r.g=jr(r.g),r.b=jr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Rt&&(r.r=va(r.r),r.g=va(r.g),r.b=va(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Es?Bu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ua]:{primaries:e,whitePoint:i,transfer:Bu,toXYZ:X_,fromXYZ:q_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:e,whitePoint:i,transfer:Rt,toXYZ:X_,fromXYZ:q_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),n}const gt=KA();function jr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function va(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zo;class jA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zo===void 0&&(zo=zu("canvas")),zo.width=e.width,zo.height=e.height;const r=zo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jr(t[i]/255)*255):t[i]=jr(t[i]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZA=0;class sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZA++}),this.uuid=ac(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yf(r[o].image)):s.push(Yf(r[o]))}else s=Yf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Yf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let JA=0;const $f=new re;class ti extends ka{constructor(e=ti.DEFAULT_IMAGE,t=ti.DEFAULT_MAPPING,i=qr,r=qr,s=kn,o=po,a=Qi,l=ki,c=ti.DEFAULT_ANISOTROPY,u=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=ac(),this.name="",this.source=new sm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case qr:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case qr:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Wx;ti.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,i=0,r=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],m=l[9],g=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+h+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(h+1)/2,A=(_+1)/2,R=(u+f)/4,w=(d+g)/4,S=(m+p)/4;return E>y&&E>A?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=R/i,s=w/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=S/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=S/s),this.set(i,r,s,t),this}let v=Math.sqrt((p-m)*(p-m)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-m)/v,this.y=(d-g)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QA extends ka{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new ti(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new sm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class br extends QA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qx extends ti{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ew extends ti{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zt{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,m,g,p){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,m,g,p)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,m,g,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=f,_[3]=h,_[7]=m,_[11]=g,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Vo.setFromMatrixColumn(e,0).length(),s=1/Vo.setFromMatrixColumn(e,1).length(),o=1/Vo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,m=a*u,g=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+m*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=m+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,m=c*u,g=c*d;t[0]=f+g*a,t[4]=m*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-m,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,m=c*u,g=c*d;t[0]=f-g*a,t[4]=-o*d,t[8]=m+h*a,t[1]=h+m*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,m=a*u,g=a*d;t[0]=l*u,t[4]=m*c-h,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=h*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=g-f*d,t[8]=m*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+m,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,h=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=o*u,t[9]=h*d-m,t[2]=m*d-h,t[6]=a*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tw,e,nw)}lookAt(e,t,i){const r=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ds.crossVectors(i,gi),ds.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ds.crossVectors(i,gi)),ds.normalize(),gc.crossVectors(gi,ds),r[0]=ds.x,r[4]=gc.x,r[8]=gi.x,r[1]=ds.y,r[5]=gc.y,r[9]=gi.y,r[2]=ds.z,r[6]=gc.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],m=i[2],g=i[6],p=i[10],_=i[14],v=i[3],E=i[7],y=i[11],A=i[15],R=r[0],w=r[4],S=r[8],M=r[12],O=r[1],L=r[5],D=r[9],H=r[13],q=r[2],G=r[6],W=r[10],B=r[14],ne=r[3],fe=r[7],F=r[11],ge=r[15];return s[0]=o*R+a*O+l*q+c*ne,s[4]=o*w+a*L+l*G+c*fe,s[8]=o*S+a*D+l*W+c*F,s[12]=o*M+a*H+l*B+c*ge,s[1]=u*R+d*O+f*q+h*ne,s[5]=u*w+d*L+f*G+h*fe,s[9]=u*S+d*D+f*W+h*F,s[13]=u*M+d*H+f*B+h*ge,s[2]=m*R+g*O+p*q+_*ne,s[6]=m*w+g*L+p*G+_*fe,s[10]=m*S+g*D+p*W+_*F,s[14]=m*M+g*H+p*B+_*ge,s[3]=v*R+E*O+y*q+A*ne,s[7]=v*w+E*L+y*G+A*fe,s[11]=v*S+E*D+y*W+A*F,s[15]=v*M+E*H+y*B+A*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],m=e[3],g=e[7],p=e[11],_=e[15],v=l*h-c*f,E=a*h-c*d,y=a*f-l*d,A=o*h-c*u,R=o*f-l*u,w=o*d-a*u;return t*(g*v-p*E+_*y)-i*(m*v-p*A+_*R)+r*(m*E-g*A+_*w)-s*(m*y-g*R+p*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],m=e[12],g=e[13],p=e[14],_=e[15],v=t*a-i*o,E=t*l-r*o,y=t*c-s*o,A=i*l-r*a,R=i*c-s*a,w=r*c-s*l,S=u*g-d*m,M=u*p-f*m,O=u*_-h*m,L=d*p-f*g,D=d*_-h*g,H=f*_-h*p,q=v*H-E*D+y*L+A*O-R*M+w*S;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/q;return e[0]=(a*H-l*D+c*L)*G,e[1]=(r*D-i*H-s*L)*G,e[2]=(g*w-p*R+_*A)*G,e[3]=(f*R-d*w-h*A)*G,e[4]=(l*O-o*H-c*M)*G,e[5]=(t*H-r*O+s*M)*G,e[6]=(p*y-m*w-_*E)*G,e[7]=(u*w-f*y+h*E)*G,e[8]=(o*D-a*O+c*S)*G,e[9]=(i*O-t*D-s*S)*G,e[10]=(m*R-g*y+_*v)*G,e[11]=(d*y-u*R-h*v)*G,e[12]=(a*M-o*L-l*S)*G,e[13]=(t*L-i*M+r*S)*G,e[14]=(g*E-m*A-p*v)*G,e[15]=(u*A-d*E+f*v)*G,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,m=s*d,g=o*u,p=o*d,_=a*d,v=l*c,E=l*u,y=l*d,A=i.x,R=i.y,w=i.z;return r[0]=(1-(g+_))*A,r[1]=(h+y)*A,r[2]=(m-E)*A,r[3]=0,r[4]=(h-y)*R,r[5]=(1-(f+_))*R,r[6]=(p+v)*R,r[7]=0,r[8]=(m+E)*w,r[9]=(p-v)*w,r[10]=(1-(f+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Vo.set(r[0],r[1],r[2]).length();const a=Vo.set(r[4],r[5],r[6]).length(),l=Vo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Yi.copy(this);const c=1/o,u=1/a,d=1/l;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=u,Yi.elements[5]*=u,Yi.elements[6]*=u,Yi.elements[8]*=d,Yi.elements[9]*=d,Yi.elements[10]*=d,t.setFromRotationMatrix(Yi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=xr,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,g;if(l)m=s/(o-s),g=o*s/(o-s);else if(a===xr)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ku)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=xr,l=!1){const c=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r);let m,g;if(l)m=1/(o-s),g=o/(o-s);else if(a===xr)m=-2/(o-s),g=-(o+s)/(o-s);else if(a===ku)m=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vo=new re,Yi=new Zt,tw=new re(0,0,0),nw=new re(1,1,1),ds=new re,gc=new re,gi=new re,Y_=new Zt,$_=new za;class ss{constructor(e=0,t=0,i=0,r=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Y_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $_.setFromEuler(this),this.setFromQuaternion($_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class eS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iw=0;const K_=new re,Ho=new za,Nr=new Zt,vc=new re,Ka=new re,rw=new re,sw=new za,j_=new re(1,0,0),Z_=new re(0,1,0),J_=new re(0,0,1),Q_={type:"added"},ow={type:"removed"},Go={type:"childadded",child:null},Kf={type:"childremoved",child:null};class ni extends ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=ac(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ni.DEFAULT_UP.clone();const e=new re,t=new ss,i=new za,r=new re(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ot}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=ni.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.multiply(Ho),this}rotateOnWorldAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.premultiply(Ho),this}rotateX(e){return this.rotateOnAxis(j_,e)}rotateY(e){return this.rotateOnAxis(Z_,e)}rotateZ(e){return this.rotateOnAxis(J_,e)}translateOnAxis(e,t){return K_.copy(e).applyQuaternion(this.quaternion),this.position.add(K_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(j_,e)}translateY(e){return this.translateOnAxis(Z_,e)}translateZ(e){return this.translateOnAxis(J_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vc.copy(e):vc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nr.lookAt(Ka,vc,this.up):Nr.lookAt(vc,Ka,this.up),this.quaternion.setFromRotationMatrix(Nr),r&&(Nr.extractRotation(r.matrixWorld),Ho.setFromRotationMatrix(Nr),this.quaternion.premultiply(Ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Q_),Go.child=e,this.dispatchEvent(Go),Go.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ow),Kf.child=e,this.dispatchEvent(Kf),Kf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Q_),Go.child=e,this.dispatchEvent(Go),Go.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,rw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,sw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ni.DEFAULT_UP=new re(0,1,0);ni.DEFAULT_MATRIX_AUTO_UPDATE=!0;ni.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xc extends ni{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aw={type:"move"};class jf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),_=this._getHandJoint(c,g);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const tS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Zf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=$A(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Zf(o,s,e+1/3),this.g=Zf(o,s,e),this.b=Zf(o,s,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ui){function i(s){s!==void 0&&parseFloat(s)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ui){const i=tS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ui){return gt.workingToColorSpace(Dn.copy(this),e),Math.round(mt(Dn.r*255,0,255))*65536+Math.round(mt(Dn.g*255,0,255))*256+Math.round(mt(Dn.b*255,0,255))}getHexString(e=Ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(Dn.copy(this),t);const i=Dn.r,r=Dn.g,s=Dn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Ui){gt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,i=Dn.g,r=Dn.b;return e!==Ui?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(Sc);const i=Wf(hs.h,Sc.h,t),r=Wf(hs.s,Sc.s,t),s=Wf(hs.l,Sc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new lt;lt.NAMES=tS;class lw extends ni{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $i=new re,Ur=new re,Jf=new re,Fr=new re,Wo=new re,Xo=new re,eg=new re,Qf=new re,ed=new re,td=new re,nd=new nn,id=new nn,rd=new nn;class Zi{constructor(e=new re,t=new re,i=new re){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),$i.subVectors(e,t),r.cross($i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){$i.subVectors(r,t),Ur.subVectors(i,t),Jf.subVectors(e,t);const o=$i.dot($i),a=$i.dot(Ur),l=$i.dot(Jf),c=Ur.dot(Ur),u=Ur.dot(Jf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-h-m,m,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fr)===null?!1:Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fr.x),l.addScaledVector(o,Fr.y),l.addScaledVector(a,Fr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return nd.setScalar(0),id.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(e,t),id.fromBufferAttribute(e,i),rd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(nd,s.x),o.addScaledVector(id,s.y),o.addScaledVector(rd,s.z),o}static isFrontFacing(e,t,i,r){return $i.subVectors(i,t),Ur.subVectors(e,t),$i.cross(Ur).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Ur.subVectors(this.a,this.b),$i.cross(Ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Zi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Wo.subVectors(r,i),Xo.subVectors(s,i),Qf.subVectors(e,i);const l=Wo.dot(Qf),c=Xo.dot(Qf);if(l<=0&&c<=0)return t.copy(i);ed.subVectors(e,r);const u=Wo.dot(ed),d=Xo.dot(ed);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Wo,o);td.subVectors(e,s);const h=Wo.dot(td),m=Xo.dot(td);if(m>=0&&h<=m)return t.copy(s);const g=h*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Xo,a);const p=u*m-h*d;if(p<=0&&d-u>=0&&h-m>=0)return eg.subVectors(s,r),a=(d-u)/(d-u+(h-m)),t.copy(r).addScaledVector(eg,a);const _=1/(p+g+f);return o=g*_,a=f*_,t.copy(i).addScaledVector(Wo,o).addScaledVector(Xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class lc{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ki):Ki.fromBufferAttribute(s,o),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yc.copy(i.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),Mc.subVectors(this.max,ja),qo.subVectors(e.a,ja),Yo.subVectors(e.b,ja),$o.subVectors(e.c,ja),ps.subVectors(Yo,qo),ms.subVectors($o,Yo),js.subVectors(qo,$o);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-js.z,js.y,ps.z,0,-ps.x,ms.z,0,-ms.x,js.z,0,-js.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-js.y,js.x,0];return!sd(t,qo,Yo,$o,Mc)||(t=[1,0,0,0,1,0,0,0,1],!sd(t,qo,Yo,$o,Mc))?!1:(Ec.crossVectors(ps,ms),t=[Ec.x,Ec.y,Ec.z],sd(t,qo,Yo,$o,Mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Or=[new re,new re,new re,new re,new re,new re,new re,new re],Ki=new re,yc=new lc,qo=new re,Yo=new re,$o=new re,ps=new re,ms=new re,js=new re,ja=new re,Mc=new re,Ec=new re,Zs=new re;function sd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zs.fromArray(n,s);const a=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),l=e.dot(Zs),c=t.dot(Zs),u=i.dot(Zs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sn=new re,bc=new Lt;let cw=0;class li{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=z_,this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bc.fromBufferAttribute(this,t),bc.applyMatrix3(e),this.setXY(t,bc.x,bc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$a(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ii(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$a(t,this.array)),t}setX(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$a(t,this.array)),t}setY(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$a(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$a(t,this.array)),t}setW(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),i=ii(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),i=ii(i,this.array),r=ii(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),i=ii(i,this.array),r=ii(r,this.array),s=ii(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==z_&&(e.usage=this.usage),e}}class nS extends li{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class iS extends li{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tr extends li{constructor(e,t,i){super(new Float32Array(e),t,i)}}const uw=new lc,Za=new re,od=new re;class cc{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Za.subVectors(e,this.center);const t=Za.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Za,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(od.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Za.copy(e.center).add(od)),this.expandByPoint(Za.copy(e.center).sub(od))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fw=0;const Li=new Zt,ad=new ni,Ko=new re,vi=new lc,Ja=new lc,xn=new re;class pi extends ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fw++}),this.uuid=ac(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(WA(e)?iS:nS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,i){return Li.makeTranslation(e,t,i),this.applyMatrix4(Li),this}scale(e,t,i){return Li.makeScale(e,t,i),this.applyMatrix4(Li),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];vi.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const i=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ja.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(vi.min,Ja.min),vi.expandByPoint(xn),xn.addVectors(vi.max,Ja.max),vi.expandByPoint(xn)):(vi.expandByPoint(Ja.min),vi.expandByPoint(Ja.max))}vi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)xn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(xn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xn.fromBufferAttribute(a,c),l&&(Ko.fromBufferAttribute(e,c),xn.add(Ko)),r=Math.max(r,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new re,l[S]=new re;const c=new re,u=new re,d=new re,f=new Lt,h=new Lt,m=new Lt,g=new re,p=new re;function _(S,M,O){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,O),f.fromBufferAttribute(s,S),h.fromBufferAttribute(s,M),m.fromBufferAttribute(s,O),u.sub(c),d.sub(c),h.sub(f),m.sub(f);const L=1/(h.x*m.y-m.x*h.y);isFinite(L)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(L),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(L),a[S].add(g),a[M].add(g),a[O].add(g),l[S].add(p),l[M].add(p),l[O].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let S=0,M=v.length;S<M;++S){const O=v[S],L=O.start,D=O.count;for(let H=L,q=L+D;H<q;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new re,y=new re,A=new re,R=new re;function w(S){A.fromBufferAttribute(r,S),R.copy(A);const M=a[S];E.copy(M),E.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(R,M);const L=y.dot(l[S])<0?-1:1;o.setXYZW(S,E.x,E.y,E.z,L)}for(let S=0,M=v.length;S<M;++S){const O=v[S],L=O.start,D=O.count;for(let H=L,q=L+D;H<q;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new re,s=new re,o=new re,a=new re,l=new re,c=new re,u=new re,d=new re;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,m=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*u;for(let _=0;_<u;_++)f[m++]=c[h++]}return new li(f,u,d)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let dw=0;class Va extends ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=ac(),this.name="",this.type="Material",this.blending=ga,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=ah,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ga&&(i.blending=this.blending),this.side!==zs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oh&&(i.blendSrc=this.blendSrc),this.blendDst!==ah&&(i.blendDst=this.blendDst),this.blendEquation!==lo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ko&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ko&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ko&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Br=new re,ld=new re,Tc=new re,_s=new re,cd=new re,Ac=new re,ud=new re;class om{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Br.copy(this.origin).addScaledVector(this.direction,t),Br.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ld.copy(e).add(t).multiplyScalar(.5),Tc.copy(t).sub(e).normalize(),_s.copy(this.origin).sub(ld);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Tc),a=_s.dot(this.direction),l=-_s.dot(Tc),c=_s.lengthSq(),u=Math.abs(1-o*o);let d,f,h,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const g=1/u;d*=g,f*=g,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ld).addScaledVector(Tc,f),h}intersectSphere(e,t){Br.subVectors(e.center,this.origin);const i=Br.dot(this.direction),r=Br.dot(Br)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Br)!==null}intersectTriangle(e,t,i,r,s){cd.subVectors(t,e),Ac.subVectors(i,e),ud.crossVectors(cd,Ac);let o=this.direction.dot(ud),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_s.subVectors(this.origin,e);const l=a*this.direction.dot(Ac.crossVectors(_s,Ac));if(l<0)return null;const c=a*this.direction.dot(cd.cross(_s));if(c<0||l+c>o)return null;const u=-a*_s.dot(ud);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rS extends Va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Fx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tg=new Zt,Js=new om,wc=new cc,ng=new re,Cc=new re,Rc=new re,Pc=new re,fd=new re,Dc=new re,ig=new re,Ic=new re;class os extends ni{constructor(e=new pi,t=new rS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Dc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(fd.fromBufferAttribute(d,e),o?Dc.addScaledVector(fd,u):Dc.addScaledVector(fd.sub(t),u))}t.add(Dc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(s),Js.copy(e.ray).recast(e.near),!(wc.containsPoint(Js.origin)===!1&&(Js.intersectSphere(wc,ng)===null||Js.origin.distanceToSquared(ng)>(e.far-e.near)**2))&&(tg.copy(s).invert(),Js.copy(e.ray).applyMatrix4(tg),!(i.boundingBox!==null&&Js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Js)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const p=f[m],_=o[p.materialIndex],v=Math.max(p.start,h.start),E=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let y=v,A=E;y<A;y+=3){const R=a.getX(y),w=a.getX(y+1),S=a.getX(y+2);r=Lc(this,_,e,i,c,u,d,R,w,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let p=m,_=g;p<_;p+=3){const v=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);r=Lc(this,o,e,i,c,u,d,v,E,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const p=f[m],_=o[p.materialIndex],v=Math.max(p.start,h.start),E=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let y=v,A=E;y<A;y+=3){const R=y,w=y+1,S=y+2;r=Lc(this,_,e,i,c,u,d,R,w,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const m=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=m,_=g;p<_;p+=3){const v=p,E=p+1,y=p+2;r=Lc(this,o,e,i,c,u,d,v,E,y),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function hw(n,e,t,i,r,s,o,a){let l;if(e.side===hi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zs,a),l===null)return null;Ic.copy(a),Ic.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ic);return c<t.near||c>t.far?null:{distance:c,point:Ic.clone(),object:n}}function Lc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Cc),n.getVertexPosition(l,Rc),n.getVertexPosition(c,Pc);const u=hw(n,e,t,i,Cc,Rc,Pc,ig);if(u){const d=new re;Zi.getBarycoord(ig,Cc,Rc,Pc,d),r&&(u.uv=Zi.getInterpolatedAttribute(r,a,l,c,d,new Lt)),s&&(u.uv1=Zi.getInterpolatedAttribute(s,a,l,c,d,new Lt)),o&&(u.normal=Zi.getInterpolatedAttribute(o,a,l,c,d,new re),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new re,materialIndex:0};Zi.getNormal(Cc,Rc,Pc,f.normal),u.face=f,u.barycoord=d}return u}class pw extends ti{constructor(e=null,t=1,i=1,r,s,o,a,l,c=bn,u=bn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dd=new re,mw=new re,_w=new ot;class ro{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=dd.subVectors(i,t).cross(mw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(dd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_w.getNormalMatrix(e),r=this.coplanarPoint(dd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new cc,gw=new Lt(.5,.5),Nc=new re;class sS{constructor(e=new ro,t=new ro,i=new ro,r=new ro,s=new ro,o=new ro){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],m=s[8],g=s[9],p=s[10],_=s[11],v=s[12],E=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-o,h-u,_-m,A-v).normalize(),r[1].setComponents(c+o,h+u,_+m,A+v).normalize(),r[2].setComponents(c+a,h+d,_+g,A+E).normalize(),r[3].setComponents(c-a,h-d,_-g,A-E).normalize(),i)r[4].setComponents(l,f,p,y).normalize(),r[5].setComponents(c-l,h-f,_-p,A-y).normalize();else if(r[4].setComponents(c-l,h-f,_-p,A-y).normalize(),t===xr)r[5].setComponents(c+l,h+f,_+p,A+y).normalize();else if(t===ku)r[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);const t=gw.distanceTo(e.center);return Qs.radius=.7071067811865476+t,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Nc.x=r.normal.x>0?e.max.x:e.min.x,Nc.y=r.normal.y>0?e.max.y:e.min.y,Nc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oS extends Va{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hu=new re,Gu=new re,rg=new Zt,Qa=new om,Uc=new cc,hd=new re,sg=new re;class vw extends ni{constructor(e=new pi,t=new oS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Hu.fromBufferAttribute(t,r-1),Gu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Hu.distanceTo(Gu);e.setAttribute("lineDistance",new tr(i,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(r),Uc.radius+=s,e.ray.intersectsSphere(Uc)===!1)return;rg.copy(r).invert(),Qa.copy(e.ray).applyMatrix4(rg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=h,p=m-1;g<p;g+=c){const _=u.getX(g),v=u.getX(g+1),E=Fc(this,e,Qa,l,_,v,g);E&&t.push(E)}if(this.isLineLoop){const g=u.getX(m-1),p=u.getX(h),_=Fc(this,e,Qa,l,g,p,m-1);_&&t.push(_)}}else{const h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=h,p=m-1;g<p;g+=c){const _=Fc(this,e,Qa,l,g,g+1,g);_&&t.push(_)}if(this.isLineLoop){const g=Fc(this,e,Qa,l,m-1,h,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fc(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Hu.fromBufferAttribute(a,r),Gu.fromBufferAttribute(a,s),t.distanceSqToSegment(Hu,Gu,hd,sg)>i)return;hd.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(hd);if(!(c<e.near||c>e.far))return{distance:c,point:sg.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const og=new re,ag=new re;class xw extends vw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)og.fromBufferAttribute(t,r),ag.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+og.distanceTo(ag);e.setAttribute("lineDistance",new tr(i,1))}else et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jh extends Va{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lg=new Zt,Zh=new om,Oc=new cc,Bc=new re;class cg extends ni{constructor(e=new pi,t=new jh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oc.copy(i.boundingSphere),Oc.applyMatrix4(r),Oc.radius+=s,e.ray.intersectsSphere(Oc)===!1)return;lg.copy(r).invert(),Zh.copy(e.ray).applyMatrix4(lg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let m=f,g=h;m<g;m++){const p=c.getX(m);Bc.fromBufferAttribute(d,p),ug(Bc,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let m=f,g=h;m<g;m++)Bc.fromBufferAttribute(d,m),ug(Bc,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ug(n,e,t,i,r,s,o){const a=Zh.distanceSqToPoint(n);if(a<t){const l=new re;Zh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class aS extends ti{constructor(e=[],t=Ao,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ec extends ti{constructor(e,t,i=Cr,r,s,o,a=bn,l=bn,c,u=rs,d=1){if(u!==rs&&u!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sw extends ec{constructor(e,t=Cr,i=Ao,r,s,o=bn,a=bn,l,c=rs){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class lS extends ti{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class uc extends pi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new tr(c,3)),this.setAttribute("normal",new tr(u,3)),this.setAttribute("uv",new tr(d,2));function m(g,p,_,v,E,y,A,R,w,S,M){const O=y/w,L=A/S,D=y/2,H=A/2,q=R/2,G=w+1,W=S+1;let B=0,ne=0;const fe=new re;for(let F=0;F<W;F++){const ge=F*L-H;for(let ve=0;ve<G;ve++){const be=ve*O-D;fe[g]=be*v,fe[p]=ge*E,fe[_]=q,c.push(fe.x,fe.y,fe.z),fe[g]=0,fe[p]=0,fe[_]=R>0?1:-1,u.push(fe.x,fe.y,fe.z),d.push(ve/w),d.push(1-F/S),B+=1}}for(let F=0;F<S;F++)for(let ge=0;ge<w;ge++){const ve=f+ge+G*F,be=f+ge+G*(F+1),De=f+(ge+1)+G*(F+1),Ne=f+(ge+1)+G*F;l.push(ve,be,Ne),l.push(be,De,Ne),ne+=6}a.addGroup(h,ne,M),h+=ne,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class df extends pi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],m=[],g=[],p=[];for(let _=0;_<u;_++){const v=_*f-o;for(let E=0;E<c;E++){const y=E*d-s;m.push(y,-v,0),g.push(0,0,1),p.push(E/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const E=v+c*_,y=v+c*(_+1),A=v+1+c*(_+1),R=v+1+c*_;h.push(E,y,R),h.push(y,A,R)}this.setIndex(h),this.setAttribute("position",new tr(m,3)),this.setAttribute("normal",new tr(g,3)),this.setAttribute("uv",new tr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.width,e.height,e.widthSegments,e.heightSegments)}}function Fa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xn(n){const e={};for(let t=0;t<n.length;t++){const i=Fa(n[t]);for(const r in i)e[r]=i[r]}return e}function yw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Mw={clone:Fa,merge:Xn};var Ew=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends Va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ew,this.fragmentShader=bw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fa(e.uniforms),this.uniformsGroups=yw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Tw extends Rr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Aw extends Va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ww extends Va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kc=new re,zc=new za,ar=new re;class uS extends ni{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=xr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kc,zc,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,zc,ar.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(kc,zc,ar),ar.x===1&&ar.y===1&&ar.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kc,zc,ar.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gs=new re,fg=new Lt,dg=new Lt;class Fi extends uS{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kh*2*Math.atan(Math.tan(Gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,fg,dg),t.subVectors(dg,fg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class fS extends uS{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jo=-90,Zo=1;class Cw extends ni{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fi(jo,Zo,e,t);r.layers=this.layers,this.add(r);const s=new Fi(jo,Zo,e,t);s.layers=this.layers,this.add(s);const o=new Fi(jo,Zo,e,t);o.layers=this.layers,this.add(o);const a=new Fi(jo,Zo,e,t);a.layers=this.layers,this.add(a);const l=new Fi(jo,Zo,e,t);l.layers=this.layers,this.add(l);const c=new Fi(jo,Zo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===xr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Rw extends Fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function hg(n,e,t,i){const r=Pw(i);switch(t){case Kx:return n*e;case Zx:return n*e/r.components*r.byteLength;case em:return n*e/r.components*r.byteLength;case Na:return n*e*2/r.components*r.byteLength;case tm:return n*e*2/r.components*r.byteLength;case jx:return n*e*3/r.components*r.byteLength;case Qi:return n*e*4/r.components*r.byteLength;case nm:return n*e*4/r.components*r.byteLength;case uu:case fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case du:case hu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vh:case Sh:return Math.max(n,16)*Math.max(e,8)/4;case gh:case xh:return Math.max(n,8)*Math.max(e,8)/2;case yh:case Mh:case bh:case Th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eh:case Ah:case wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hh:case Gh:case Wh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Xh:case qh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Yh:case $h:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pw(n){switch(n){case ki:case Xx:return{byteLength:1,components:1};case Jl:case qx:case is:return{byteLength:2,components:1};case Jp:case Qp:return{byteLength:2,components:4};case Cr:case Zp:case vr:return{byteLength:4,components:1};case Yx:case $x:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jp}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dS(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Dw(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],g=d[h];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const g=d[h];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Iw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lw=`#ifdef USE_ALPHAHASH
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
#endif`,Nw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ow=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bw=`#ifdef USE_AOMAP
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
#endif`,kw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zw=`#ifdef USE_BATCHING
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
#endif`,Vw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ww=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xw=`#ifdef USE_IRIDESCENCE
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
#endif`,qw=`#ifdef USE_BUMPMAP
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
#endif`,Yw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$w=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tC=`#define PI 3.141592653589793
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
} // validated`,nC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iC=`vec3 transformedNormal = objectNormal;
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
#endif`,rC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lC="gl_FragColor = linearToOutputTexel( gl_FragColor );",cC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uC=`#ifdef USE_ENVMAP
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
#endif`,fC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dC=`#ifdef USE_ENVMAP
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
#endif`,hC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pC=`#ifdef USE_ENVMAP
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
#endif`,mC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_C=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xC=`#ifdef USE_GRADIENTMAP
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
}`,SC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EC=`uniform bool receiveShadow;
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
#endif`,bC=`#ifdef USE_ENVMAP
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
#endif`,TC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RC=`PhysicalMaterial material;
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
#endif`,PC=`uniform sampler2D dfgLUT;
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
}`,DC=`
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
#endif`,IC=`#if defined( RE_IndirectDiffuse )
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
#endif`,LC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VC=`#if defined( USE_POINTS_UV )
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
#endif`,HC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YC=`#ifdef USE_MORPHTARGETS
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
#endif`,$C=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eR=`#ifdef USE_NORMALMAP
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
#endif`,tR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_R=`float getShadowMask() {
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
}`,gR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vR=`#ifdef USE_SKINNING
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
#endif`,xR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SR=`#ifdef USE_SKINNING
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
#endif`,yR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ER=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TR=`#ifdef USE_TRANSMISSION
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
#endif`,AR=`#ifdef USE_TRANSMISSION
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
#endif`,wR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IR=`uniform sampler2D t2D;
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
}`,LR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`#include <common>
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
}`,BR=`#if DEPTH_PACKING == 3200
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
}`,kR=`#define DISTANCE
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
}`,zR=`#define DISTANCE
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
}`,VR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GR=`uniform float scale;
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
}`,WR=`uniform vec3 diffuse;
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
}`,XR=`#include <common>
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
}`,qR=`uniform vec3 diffuse;
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
}`,YR=`#define LAMBERT
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
}`,$R=`#define LAMBERT
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
}`,KR=`#define MATCAP
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
}`,jR=`#define MATCAP
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
}`,ZR=`#define NORMAL
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
}`,JR=`#define NORMAL
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
}`,QR=`#define PHONG
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
}`,eP=`#define PHONG
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
}`,tP=`#define STANDARD
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
}`,nP=`#define STANDARD
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
}`,iP=`#define TOON
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
}`,rP=`#define TOON
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
}`,sP=`uniform float size;
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
}`,oP=`uniform vec3 diffuse;
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
}`,aP=`#include <common>
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
}`,lP=`uniform vec3 color;
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
}`,cP=`uniform float rotation;
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
}`,uP=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Iw,alphahash_pars_fragment:Lw,alphamap_fragment:Nw,alphamap_pars_fragment:Uw,alphatest_fragment:Fw,alphatest_pars_fragment:Ow,aomap_fragment:Bw,aomap_pars_fragment:kw,batching_pars_vertex:zw,batching_vertex:Vw,begin_vertex:Hw,beginnormal_vertex:Gw,bsdfs:Ww,iridescence_fragment:Xw,bumpmap_pars_fragment:qw,clipping_planes_fragment:Yw,clipping_planes_pars_fragment:$w,clipping_planes_pars_vertex:Kw,clipping_planes_vertex:jw,color_fragment:Zw,color_pars_fragment:Jw,color_pars_vertex:Qw,color_vertex:eC,common:tC,cube_uv_reflection_fragment:nC,defaultnormal_vertex:iC,displacementmap_pars_vertex:rC,displacementmap_vertex:sC,emissivemap_fragment:oC,emissivemap_pars_fragment:aC,colorspace_fragment:lC,colorspace_pars_fragment:cC,envmap_fragment:uC,envmap_common_pars_fragment:fC,envmap_pars_fragment:dC,envmap_pars_vertex:hC,envmap_physical_pars_fragment:bC,envmap_vertex:pC,fog_vertex:mC,fog_pars_vertex:_C,fog_fragment:gC,fog_pars_fragment:vC,gradientmap_pars_fragment:xC,lightmap_pars_fragment:SC,lights_lambert_fragment:yC,lights_lambert_pars_fragment:MC,lights_pars_begin:EC,lights_toon_fragment:TC,lights_toon_pars_fragment:AC,lights_phong_fragment:wC,lights_phong_pars_fragment:CC,lights_physical_fragment:RC,lights_physical_pars_fragment:PC,lights_fragment_begin:DC,lights_fragment_maps:IC,lights_fragment_end:LC,logdepthbuf_fragment:NC,logdepthbuf_pars_fragment:UC,logdepthbuf_pars_vertex:FC,logdepthbuf_vertex:OC,map_fragment:BC,map_pars_fragment:kC,map_particle_fragment:zC,map_particle_pars_fragment:VC,metalnessmap_fragment:HC,metalnessmap_pars_fragment:GC,morphinstance_vertex:WC,morphcolor_vertex:XC,morphnormal_vertex:qC,morphtarget_pars_vertex:YC,morphtarget_vertex:$C,normal_fragment_begin:KC,normal_fragment_maps:jC,normal_pars_fragment:ZC,normal_pars_vertex:JC,normal_vertex:QC,normalmap_pars_fragment:eR,clearcoat_normal_fragment_begin:tR,clearcoat_normal_fragment_maps:nR,clearcoat_pars_fragment:iR,iridescence_pars_fragment:rR,opaque_fragment:sR,packing:oR,premultiplied_alpha_fragment:aR,project_vertex:lR,dithering_fragment:cR,dithering_pars_fragment:uR,roughnessmap_fragment:fR,roughnessmap_pars_fragment:dR,shadowmap_pars_fragment:hR,shadowmap_pars_vertex:pR,shadowmap_vertex:mR,shadowmask_pars_fragment:_R,skinbase_vertex:gR,skinning_pars_vertex:vR,skinning_vertex:xR,skinnormal_vertex:SR,specularmap_fragment:yR,specularmap_pars_fragment:MR,tonemapping_fragment:ER,tonemapping_pars_fragment:bR,transmission_fragment:TR,transmission_pars_fragment:AR,uv_pars_fragment:wR,uv_pars_vertex:CR,uv_vertex:RR,worldpos_vertex:PR,background_vert:DR,background_frag:IR,backgroundCube_vert:LR,backgroundCube_frag:NR,cube_vert:UR,cube_frag:FR,depth_vert:OR,depth_frag:BR,distance_vert:kR,distance_frag:zR,equirect_vert:VR,equirect_frag:HR,linedashed_vert:GR,linedashed_frag:WR,meshbasic_vert:XR,meshbasic_frag:qR,meshlambert_vert:YR,meshlambert_frag:$R,meshmatcap_vert:KR,meshmatcap_frag:jR,meshnormal_vert:ZR,meshnormal_frag:JR,meshphong_vert:QR,meshphong_frag:eP,meshphysical_vert:tP,meshphysical_frag:nP,meshtoon_vert:iP,meshtoon_frag:rP,points_vert:sP,points_frag:oP,shadow_vert:aP,shadow_frag:lP,sprite_vert:cP,sprite_frag:uP},Fe={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},pr={basic:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Xn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Xn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Xn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new lt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Xn([Fe.points,Fe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Xn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Xn([Fe.common,Fe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Xn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Xn([Fe.sprite,Fe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:Xn([Fe.common,Fe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:Xn([Fe.lights,Fe.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};pr.physical={uniforms:Xn([pr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Vc={r:0,b:0,g:0},eo=new ss,fP=new Zt;function dP(n,e,t,i,r,s){const o=new lt(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function h(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){const y=v.backgroundBlurriness>0;E=e.get(E,y)}return E}function m(v){let E=!1;const y=h(v);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,E){const y=h(E);y&&(y.isCubeTexture||y.mapping===ff)?(c===void 0&&(c=new os(new uc(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:Fa(pr.backgroundCube.uniforms),vertexShader:pr.backgroundCube.vertexShader,fragmentShader:pr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),eo.copy(E.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fP.makeRotationFromEuler(eo)),c.material.toneMapped=gt.getTransfer(y.colorSpace)!==Rt,(u!==y||d!==y.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new os(new df(2,2),new Rr({name:"BackgroundMaterial",uniforms:Fa(pr.background.uniforms),vertexShader:pr.background.vertexShader,fragmentShader:pr.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=gt.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,E){v.getRGB(Vc,cS(n)),t.buffers.color.setClear(Vc.r,Vc.g,Vc.b,E,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,E=1){o.set(v),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:m,addToRenderList:g,dispose:_}}function hP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(L,D,H,q,G){let W=!1;const B=d(L,q,H,D);s!==B&&(s=B,c(s.object)),W=h(L,q,H,G),W&&m(L,q,H,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(L,D,H,q),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,D,H,q){const G=q.wireframe===!0;let W=i[D.id];W===void 0&&(W={},i[D.id]=W);const B=L.isInstancedMesh===!0?L.id:0;let ne=W[B];ne===void 0&&(ne={},W[B]=ne);let fe=ne[H.id];fe===void 0&&(fe={},ne[H.id]=fe);let F=fe[G];return F===void 0&&(F=f(l()),fe[G]=F),F}function f(L){const D=[],H=[],q=[];for(let G=0;G<t;G++)D[G]=0,H[G]=0,q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:q,object:L,attributes:{},index:null}}function h(L,D,H,q){const G=s.attributes,W=D.attributes;let B=0;const ne=H.getAttributes();for(const fe in ne)if(ne[fe].location>=0){const ge=G[fe];let ve=W[fe];if(ve===void 0&&(fe==="instanceMatrix"&&L.instanceMatrix&&(ve=L.instanceMatrix),fe==="instanceColor"&&L.instanceColor&&(ve=L.instanceColor)),ge===void 0||ge.attribute!==ve||ve&&ge.data!==ve.data)return!0;B++}return s.attributesNum!==B||s.index!==q}function m(L,D,H,q){const G={},W=D.attributes;let B=0;const ne=H.getAttributes();for(const fe in ne)if(ne[fe].location>=0){let ge=W[fe];ge===void 0&&(fe==="instanceMatrix"&&L.instanceMatrix&&(ge=L.instanceMatrix),fe==="instanceColor"&&L.instanceColor&&(ge=L.instanceColor));const ve={};ve.attribute=ge,ge&&ge.data&&(ve.data=ge.data),G[fe]=ve,B++}s.attributes=G,s.attributesNum=B,s.index=q}function g(){const L=s.newAttributes;for(let D=0,H=L.length;D<H;D++)L[D]=0}function p(L){_(L,0)}function _(L,D){const H=s.newAttributes,q=s.enabledAttributes,G=s.attributeDivisors;H[L]=1,q[L]===0&&(n.enableVertexAttribArray(L),q[L]=1),G[L]!==D&&(n.vertexAttribDivisor(L,D),G[L]=D)}function v(){const L=s.newAttributes,D=s.enabledAttributes;for(let H=0,q=D.length;H<q;H++)D[H]!==L[H]&&(n.disableVertexAttribArray(H),D[H]=0)}function E(L,D,H,q,G,W,B){B===!0?n.vertexAttribIPointer(L,D,H,G,W):n.vertexAttribPointer(L,D,H,q,G,W)}function y(L,D,H,q){g();const G=q.attributes,W=H.getAttributes(),B=D.defaultAttributeValues;for(const ne in W){const fe=W[ne];if(fe.location>=0){let F=G[ne];if(F===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),F!==void 0){const ge=F.normalized,ve=F.itemSize,be=e.get(F);if(be===void 0)continue;const De=be.buffer,Ne=be.type,$=be.bytesPerElement,z=Ne===n.INT||Ne===n.UNSIGNED_INT||F.gpuType===Zp;if(F.isInterleavedBufferAttribute){const Y=F.data,le=Y.stride,he=F.offset;if(Y.isInstancedInterleavedBuffer){for(let xe=0;xe<fe.locationSize;xe++)_(fe.location+xe,Y.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let xe=0;xe<fe.locationSize;xe++)p(fe.location+xe);n.bindBuffer(n.ARRAY_BUFFER,De);for(let xe=0;xe<fe.locationSize;xe++)E(fe.location+xe,ve/fe.locationSize,Ne,ge,le*$,(he+ve/fe.locationSize*xe)*$,z)}else{if(F.isInstancedBufferAttribute){for(let Y=0;Y<fe.locationSize;Y++)_(fe.location+Y,F.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let Y=0;Y<fe.locationSize;Y++)p(fe.location+Y);n.bindBuffer(n.ARRAY_BUFFER,De);for(let Y=0;Y<fe.locationSize;Y++)E(fe.location+Y,ve/fe.locationSize,Ne,ge,ve*$,ve/fe.locationSize*Y*$,z)}}else if(B!==void 0){const ge=B[ne];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(fe.location,ge);break;case 3:n.vertexAttrib3fv(fe.location,ge);break;case 4:n.vertexAttrib4fv(fe.location,ge);break;default:n.vertexAttrib1fv(fe.location,ge)}}}}v()}function A(){M();for(const L in i){const D=i[L];for(const H in D){const q=D[H];for(const G in q){const W=q[G];for(const B in W)u(W[B].object),delete W[B];delete q[G]}}delete i[L]}}function R(L){if(i[L.id]===void 0)return;const D=i[L.id];for(const H in D){const q=D[H];for(const G in q){const W=q[G];for(const B in W)u(W[B].object),delete W[B];delete q[G]}}delete i[L.id]}function w(L){for(const D in i){const H=i[D];for(const q in H){const G=H[q];if(G[L.id]===void 0)continue;const W=G[L.id];for(const B in W)u(W[B].object),delete W[B];delete G[L.id]}}}function S(L){for(const D in i){const H=i[D],q=L.isInstancedMesh===!0?L.id:0,G=H[q];if(G!==void 0){for(const W in G){const B=G[W];for(const ne in B)u(B[ne].object),delete B[ne];delete G[W]}delete H[q],Object.keys(H).length===0&&delete i[D]}}}function M(){O(),o=!0,s!==r&&(s=r,c(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:O,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:p,disableUnusedAttributes:v}}function pP(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let m=0;m<d;m++)h+=u[m];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g]*f[g];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Qi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const S=w===is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ki&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vr&&!S)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(et("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:p,maxAttributes:_,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:y,maxSamples:A,samples:R}}function _P(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ro,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,_=n.get(d);if(!r||m===null||m.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,E=v*4;let y=_.clippingState||null;l.value=y,y=u(m,f,E,h);for(let A=0;A!==E;++A)y[A]=t[A];_.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,m){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const _=h+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let E=0,y=h;E!==g;++E,y+=4)o.copy(d[E]).applyMatrix4(v,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const ws=4,pg=[.125,.215,.35,.446,.526,.582],co=20,gP=256,el=new fS,mg=new lt;let pd=null,md=0,_d=0,gd=!1;const vP=new re;class _g{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=vP}=s;pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pd,md,_d),this._renderer.xr.enabled=gd,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===La?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:is,format:Qi,colorSpace:Ua,depthBuffer:!1},r=gg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xP(s)),this._blurMaterial=yP(s,e,t),this._ggxMaterial=SP(s,e,t)}return r}_compileMaterial(e){const t=new os(new pi,e);this._renderer.compile(t,el)}_sceneToCubeUV(e,t,i,r,s){const l=new Fi(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(mg),d.toneMapping=Er,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new os(new uc,new rS({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let _=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,_=!0):(p.color.copy(mg),_=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const A=this._cubeSize;Jo(r,y*A,E>2?A:0,A,A),d.setRenderTarget(r),_&&d.render(g,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ao||e.mapping===La;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Jo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,el)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:m}=this,g=this._sizeLods[i],p=3*g*(i>m-ws?i-m+ws:0),_=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-t,Jo(s,p,_,3*g,2*g),r.setRenderTarget(s),r.render(a,el),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Jo(e,p,_,3*g,2*g),r.setRenderTarget(e),r.render(a,el)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&St("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*co-1),g=s/m,p=isFinite(s)?1+Math.floor(u*g):co;p>co&&et(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${co}`);const _=[];let v=0;for(let w=0;w<co;++w){const S=w/g,M=Math.exp(-S*S/2);_.push(M),w===0?v+=M:w<p&&(v+=2*M)}for(let w=0;w<_.length;w++)_[w]=_[w]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=m,f.mipInt.value=E-i;const y=this._sizeLods[r],A=3*y*(r>E-ws?r-E+ws:0),R=4*(this._cubeSize-y);Jo(t,A,R,3*y,2*y),l.setRenderTarget(t),l.render(d,el)}}function xP(n){const e=[],t=[],i=[];let r=n;const s=n-ws+1+pg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-ws?l=pg[o-n+ws-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,m=6,g=3,p=2,_=1,v=new Float32Array(g*m*h),E=new Float32Array(p*m*h),y=new Float32Array(_*m*h);for(let R=0;R<h;R++){const w=R%3*2/3-1,S=R>2?0:-1,M=[w,S,0,w+2/3,S,0,w+2/3,S+1,0,w,S,0,w+2/3,S+1,0,w,S+1,0];v.set(M,g*m*R),E.set(f,p*m*R);const O=[R,R,R,R,R,R];y.set(O,_*m*R)}const A=new pi;A.setAttribute("position",new li(v,g)),A.setAttribute("uv",new li(E,p)),A.setAttribute("faceIndex",new li(y,_)),i.push(new os(A,null)),r>ws&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function gg(n,e,t){const i=new br(n,e,t);return i.texture.mapping=ff,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function SP(n,e,t){return new Rr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gP,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hf(),fragmentShader:`

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
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function yP(n,e,t){const i=new Float32Array(co),r=new re(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hf(),fragmentShader:`

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
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function vg(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

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
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function xg(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function hf(){return`

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
	`}class hS extends br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new aS(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new uc(5,5,5),s=new Rr({name:"CubemapFromEquirect",uniforms:Fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:Kr});s.uniforms.tEquirect.value=t;const o=new os(r,s),a=t.minFilter;return t.minFilter===po&&(t.minFilter=kn),new Cw(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function MP(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===zf||h===Vf)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const g=new hS(m.height);return g.fromEquirectangularTexture(n,f),e.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const h=f.mapping,m=h===zf||h===Vf,g=h===Ao||h===La;if(m||g){let p=t.get(f);const _=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return i===null&&(i=new _g(n)),p=m?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const v=f.image;return m&&v&&v.height>0||g&&v&&l(v)?(i===null&&(i=new _g(n)),p=m?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function a(f,h){return h===zf?f.mapping=Ao:h===Vf&&(f.mapping=La),f}function l(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function EP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Vu("WebGLRenderer: "+i+" extension not supported."),r}}}function bP(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,m=d.attributes.position;let g=0;if(m===void 0)return;if(h!==null){const v=h.array;g=h.version;for(let E=0,y=v.length;E<y;E+=3){const A=v[E+0],R=v[E+1],w=v[E+2];f.push(A,R,R,w,w,A)}}else{const v=m.array;g=m.version;for(let E=0,y=v.length/3-1;E<y;E+=3){const A=E+0,R=E+1,w=E+2;f.push(A,R,R,w,w,A)}}const p=new(m.count>=65535?iS:nS)(f,1);p.version=g;const _=s.get(d);_&&e.remove(_),s.set(d,p)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function TP(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,f*o,m),t.update(h,i,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,m);let p=0;for(let _=0;_<m;_++)p+=h[_];t.update(p,i,1)}function d(f,h,m,g){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f.length;_++)c(f[_]/o,h[_],g[_]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,g,0,m);let _=0;for(let v=0;v<m;v++)_+=h[v]*g[v];t.update(_,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function AP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:St("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wP(n,e,t){const i=new WeakMap,r=new nn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let O=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",O)};var h=O;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let A=a.attributes.position.count*y,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*R*4*d),S=new Qx(w,A,R,d);S.type=vr,S.needsUpdate=!0;const M=y*4;for(let L=0;L<d;L++){const D=_[L],H=v[L],q=E[L],G=A*R*4*L;for(let W=0;W<D.count;W++){const B=W*M;m===!0&&(r.fromBufferAttribute(D,W),w[G+B+0]=r.x,w[G+B+1]=r.y,w[G+B+2]=r.z,w[G+B+3]=0),g===!0&&(r.fromBufferAttribute(H,W),w[G+B+4]=r.x,w[G+B+5]=r.y,w[G+B+6]=r.z,w[G+B+7]=0),p===!0&&(r.fromBufferAttribute(q,W),w[G+B+8]=r.x,w[G+B+9]=r.y,w[G+B+10]=r.z,w[G+B+11]=q.itemSize===4?r.w:1)}}f={count:d,texture:S,size:new Lt(A,R)},i.set(a,f),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function CP(n,e,t,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const RP={[Ox]:"LINEAR_TONE_MAPPING",[Bx]:"REINHARD_TONE_MAPPING",[kx]:"CINEON_TONE_MAPPING",[zx]:"ACES_FILMIC_TONE_MAPPING",[Hx]:"AGX_TONE_MAPPING",[Gx]:"NEUTRAL_TONE_MAPPING",[Vx]:"CUSTOM_TONE_MAPPING"};function PP(n,e,t,i,r){const s=new br(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new br(e,t,{type:is,depthBuffer:!1,stencilBuffer:!1}),a=new pi;a.setAttribute("position",new tr([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new tr([0,2,0,0,2,0],2));const l=new Tw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new os(a,l),u=new fS(-1,1,1,-1,0,1);let d=null,f=null,h=!1,m,g=null,p=[],_=!1;this.setSize=function(v,E){s.setSize(v,E),o.setSize(v,E);for(let y=0;y<p.length;y++){const A=p[y];A.setSize&&A.setSize(v,E)}},this.setEffects=function(v){p=v,_=p.length>0&&p[0].isRenderPass===!0;const E=s.width,y=s.height;for(let A=0;A<p.length;A++){const R=p[A];R.setSize&&R.setSize(E,y)}},this.begin=function(v,E){if(h||v.toneMapping===Er&&p.length===0)return!1;if(g=E,E!==null){const y=E.width,A=E.height;(s.width!==y||s.height!==A)&&this.setSize(y,A)}return _===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=Er,!0},this.hasRenderPass=function(){return _},this.end=function(v,E){v.toneMapping=m,h=!0;let y=s,A=o;for(let R=0;R<p.length;R++){const w=p[R];if(w.enabled!==!1&&(w.render(v,A,y,E),w.needsSwap!==!1)){const S=y;y=A,A=S}}if(d!==v.outputColorSpace||f!==v.toneMapping){d=v.outputColorSpace,f=v.toneMapping,l.defines={},gt.getTransfer(d)===Rt&&(l.defines.SRGB_TRANSFER="");const R=RP[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(g),v.render(c,u),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const pS=new ti,Jh=new ec(1,1),mS=new Qx,_S=new ew,gS=new aS,Sg=[],yg=[],Mg=new Float32Array(16),Eg=new Float32Array(9),bg=new Float32Array(4);function Ha(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sg[r];if(s===void 0&&(s=new Float32Array(r),Sg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _n(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pf(n,e){let t=yg[e];t===void 0&&(t=new Int32Array(e),yg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function DP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function IP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2fv(this.addr,e),_n(t,e)}}function LP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;n.uniform3fv(this.addr,e),_n(t,e)}}function NP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4fv(this.addr,e),_n(t,e)}}function UP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(mn(t,i))return;bg.set(i),n.uniformMatrix2fv(this.addr,!1,bg),_n(t,i)}}function FP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(mn(t,i))return;Eg.set(i),n.uniformMatrix3fv(this.addr,!1,Eg),_n(t,i)}}function OP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(mn(t,i))return;Mg.set(i),n.uniformMatrix4fv(this.addr,!1,Mg),_n(t,i)}}function BP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2iv(this.addr,e),_n(t,e)}}function zP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3iv(this.addr,e),_n(t,e)}}function VP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4iv(this.addr,e),_n(t,e)}}function HP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;n.uniform2uiv(this.addr,e),_n(t,e)}}function WP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;n.uniform3uiv(this.addr,e),_n(t,e)}}function XP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;n.uniform4uiv(this.addr,e),_n(t,e)}}function qP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Jh.compareFunction=t.isReversedDepthBuffer()?rm:im,s=Jh):s=pS,t.setTexture2D(e||s,r)}function YP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||_S,r)}function $P(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||gS,r)}function KP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||mS,r)}function jP(n){switch(n){case 5126:return DP;case 35664:return IP;case 35665:return LP;case 35666:return NP;case 35674:return UP;case 35675:return FP;case 35676:return OP;case 5124:case 35670:return BP;case 35667:case 35671:return kP;case 35668:case 35672:return zP;case 35669:case 35673:return VP;case 5125:return HP;case 36294:return GP;case 36295:return WP;case 36296:return XP;case 35678:case 36198:case 36298:case 36306:case 35682:return qP;case 35679:case 36299:case 36307:return YP;case 35680:case 36300:case 36308:case 36293:return $P;case 36289:case 36303:case 36311:case 36292:return KP}}function ZP(n,e){n.uniform1fv(this.addr,e)}function JP(n,e){const t=Ha(e,this.size,2);n.uniform2fv(this.addr,t)}function QP(n,e){const t=Ha(e,this.size,3);n.uniform3fv(this.addr,t)}function eD(n,e){const t=Ha(e,this.size,4);n.uniform4fv(this.addr,t)}function tD(n,e){const t=Ha(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nD(n,e){const t=Ha(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iD(n,e){const t=Ha(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rD(n,e){n.uniform1iv(this.addr,e)}function sD(n,e){n.uniform2iv(this.addr,e)}function oD(n,e){n.uniform3iv(this.addr,e)}function aD(n,e){n.uniform4iv(this.addr,e)}function lD(n,e){n.uniform1uiv(this.addr,e)}function cD(n,e){n.uniform2uiv(this.addr,e)}function uD(n,e){n.uniform3uiv(this.addr,e)}function fD(n,e){n.uniform4uiv(this.addr,e)}function dD(n,e,t){const i=this.cache,r=e.length,s=pf(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),_n(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Jh:o=pS;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function hD(n,e,t){const i=this.cache,r=e.length,s=pf(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),_n(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||_S,s[o])}function pD(n,e,t){const i=this.cache,r=e.length,s=pf(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),_n(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||gS,s[o])}function mD(n,e,t){const i=this.cache,r=e.length,s=pf(t,r);mn(i,s)||(n.uniform1iv(this.addr,s),_n(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mS,s[o])}function _D(n){switch(n){case 5126:return ZP;case 35664:return JP;case 35665:return QP;case 35666:return eD;case 35674:return tD;case 35675:return nD;case 35676:return iD;case 5124:case 35670:return rD;case 35667:case 35671:return sD;case 35668:case 35672:return oD;case 35669:case 35673:return aD;case 5125:return lD;case 36294:return cD;case 36295:return uD;case 36296:return fD;case 35678:case 36198:case 36298:case 36306:case 35682:return dD;case 35679:case 36299:case 36307:return hD;case 35680:case 36300:case 36308:case 36293:return pD;case 36289:case 36303:case 36311:case 36292:return mD}}class gD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jP(t.type)}}class vD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_D(t.type)}}class xD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function Tg(n,e){n.seq.push(e),n.map[e.id]=e}function SD(n,e,t){const i=n.name,r=i.length;for(vd.lastIndex=0;;){const s=vd.exec(i),o=vd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tg(t,c===void 0?new gD(a,n,e):new vD(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new xD(a),Tg(t,d)),t=d}}}class pu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);SD(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ag(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yD=37297;let MD=0;function ED(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const wg=new ot;function bD(n){gt._getMatrix(wg,gt.workingColorSpace,n);const e=`mat3( ${wg.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(n)){case Bu:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Cg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ED(n.getShaderSource(e),a)}else return s}function TD(n,e){const t=bD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const AD={[Ox]:"Linear",[Bx]:"Reinhard",[kx]:"Cineon",[zx]:"ACESFilmic",[Hx]:"AgX",[Gx]:"Neutral",[Vx]:"Custom"};function wD(n,e){const t=AD[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hc=new re;function CD(){gt.getLuminanceCoefficients(Hc);const n=Hc.x.toFixed(4),e=Hc.y.toFixed(4),t=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function PD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ll(n){return n!==""}function Rg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ID=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(n){return n.replace(ID,ND)}const LD=new Map;function ND(n,e){let t=at[e];if(t===void 0){const i=LD.get(e);if(i!==void 0)t=at[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qh(t)}const UD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(n){return n.replace(UD,FD)}function FD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ig(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const OD={[cu]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function BD(n){return OD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kD={[Ao]:"ENVMAP_TYPE_CUBE",[La]:"ENVMAP_TYPE_CUBE",[ff]:"ENVMAP_TYPE_CUBE_UV"};function zD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const VD={[La]:"ENVMAP_MODE_REFRACTION"};function HD(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":VD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GD={[Fx]:"ENVMAP_BLENDING_MULTIPLY",[DA]:"ENVMAP_BLENDING_MIX",[IA]:"ENVMAP_BLENDING_ADD"};function WD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":GD[n.combine]||"ENVMAP_BLENDING_NONE"}function XD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function qD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=BD(t),c=zD(t),u=HD(t),d=WD(t),f=XD(t),h=RD(t),m=PD(s),g=r.createProgram();let p,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ll).join(`
`),p.length>0&&(p+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ll).join(`
`),_.length>0&&(_+=`
`)):(p=[Ig(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),_=[Ig(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?at.tonemapping_pars_fragment:"",t.toneMapping!==Er?wD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,TD("linearToOutputTexel",t.outputColorSpace),CD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ll).join(`
`)),o=Qh(o),o=Rg(o,t),o=Pg(o,t),a=Qh(a),a=Rg(a,t),a=Pg(a,t),o=Dg(o),a=Dg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===V_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===V_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=v+p+o,y=v+_+a,A=Ag(r,r.VERTEX_SHADER,E),R=Ag(r,r.FRAGMENT_SHADER,y);r.attachShader(g,A),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(L){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(g)||"",H=r.getShaderInfoLog(A)||"",q=r.getShaderInfoLog(R)||"",G=D.trim(),W=H.trim(),B=q.trim();let ne=!0,fe=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,A,R);else{const F=Cg(r,A,"vertex"),ge=Cg(r,R,"fragment");St("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+F+`
`+ge)}else G!==""?et("WebGLProgram: Program Info Log:",G):(W===""||B==="")&&(fe=!1);fe&&(L.diagnostics={runnable:ne,programLog:G,vertexShader:{log:W,prefix:p},fragmentShader:{log:B,prefix:_}})}r.deleteShader(A),r.deleteShader(R),S=new pu(r,g),M=DD(r,g)}let S;this.getUniforms=function(){return S===void 0&&w(this),S};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(g,yD)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MD++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=R,this}let YD=0;class $D{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new KD(e),t.set(e,i)),i}}class KD{constructor(e){this.id=YD++,this.code=e,this.usedTimes=0}}function jD(n,e,t,i,r,s){const o=new eS,a=new $D,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,M,O,L,D){const H=L.fog,q=D.geometry,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,W=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,B=e.get(S.envMap||G,W),ne=B&&B.mapping===ff?B.image.height:null,fe=h[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&et("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const F=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ge=F!==void 0?F.length:0;let ve=0;q.morphAttributes.position!==void 0&&(ve=1),q.morphAttributes.normal!==void 0&&(ve=2),q.morphAttributes.color!==void 0&&(ve=3);let be,De,Ne,$;if(fe){const Oe=pr[fe];be=Oe.vertexShader,De=Oe.fragmentShader}else be=S.vertexShader,De=S.fragmentShader,a.update(S),Ne=a.getVertexShaderID(S),$=a.getFragmentShaderID(S);const z=n.getRenderTarget(),Y=n.state.buffers.depth.getReversed(),le=D.isInstancedMesh===!0,he=D.isBatchedMesh===!0,xe=!!S.map,I=!!S.matcap,P=!!B,V=!!S.aoMap,J=!!S.lightMap,j=!!S.bumpMap,N=!!S.normalMap,C=!!S.displacementMap,ae=!!S.emissiveMap,ce=!!S.metalnessMap,ee=!!S.roughnessMap,de=S.anisotropy>0,T=S.clearcoat>0,x=S.dispersion>0,U=S.iridescence>0,Z=S.sheen>0,ie=S.transmission>0,K=de&&!!S.anisotropyMap,Me=T&&!!S.clearcoatMap,pe=T&&!!S.clearcoatNormalMap,Be=T&&!!S.clearcoatRoughnessMap,Ae=U&&!!S.iridescenceMap,me=U&&!!S.iridescenceThicknessMap,Se=Z&&!!S.sheenColorMap,Te=Z&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,we=!!S.specularColorMap,Ke=!!S.specularIntensityMap,k=ie&&!!S.transmissionMap,Ee=ie&&!!S.thicknessMap,ye=!!S.gradientMap,Ie=!!S.alphaMap,_e=S.alphaTest>0,ue=!!S.alphaHash,ke=!!S.extensions;let qe=Er;S.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(qe=n.toneMapping);const vt={shaderID:fe,shaderType:S.type,shaderName:S.name,vertexShader:be,fragmentShader:De,defines:S.defines,customVertexShaderID:Ne,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:he,batchingColor:he&&D._colorsTexture!==null,instancing:le,instancingColor:le&&D.instanceColor!==null,instancingMorph:le&&D.morphTexture!==null,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ua,alphaToCoverage:!!S.alphaToCoverage,map:xe,matcap:I,envMap:P,envMapMode:P&&B.mapping,envMapCubeUVHeight:ne,aoMap:V,lightMap:J,bumpMap:j,normalMap:N,displacementMap:C,emissiveMap:ae,normalMapObjectSpace:N&&S.normalMapType===FA,normalMapTangentSpace:N&&S.normalMapType===UA,metalnessMap:ce,roughnessMap:ee,anisotropy:de,anisotropyMap:K,clearcoat:T,clearcoatMap:Me,clearcoatNormalMap:pe,clearcoatRoughnessMap:Be,dispersion:x,iridescence:U,iridescenceMap:Ae,iridescenceThicknessMap:me,sheen:Z,sheenColorMap:Se,sheenRoughnessMap:Te,specularMap:Pe,specularColorMap:we,specularIntensityMap:Ke,transmission:ie,transmissionMap:k,thicknessMap:Ee,gradientMap:ye,opaque:S.transparent===!1&&S.blending===ga&&S.alphaToCoverage===!1,alphaMap:Ie,alphaTest:_e,alphaHash:ue,combine:S.combine,mapUv:xe&&m(S.map.channel),aoMapUv:V&&m(S.aoMap.channel),lightMapUv:J&&m(S.lightMap.channel),bumpMapUv:j&&m(S.bumpMap.channel),normalMapUv:N&&m(S.normalMap.channel),displacementMapUv:C&&m(S.displacementMap.channel),emissiveMapUv:ae&&m(S.emissiveMap.channel),metalnessMapUv:ce&&m(S.metalnessMap.channel),roughnessMapUv:ee&&m(S.roughnessMap.channel),anisotropyMapUv:K&&m(S.anisotropyMap.channel),clearcoatMapUv:Me&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:me&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(S.sheenRoughnessMap.channel),specularMapUv:Pe&&m(S.specularMap.channel),specularColorMapUv:we&&m(S.specularColorMap.channel),specularIntensityMapUv:Ke&&m(S.specularIntensityMap.channel),transmissionMapUv:k&&m(S.transmissionMap.channel),thicknessMapUv:Ee&&m(S.thicknessMap.channel),alphaMapUv:Ie&&m(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(N||de),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(xe||Ie),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||q.attributes.normal===void 0&&N===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Y,skinning:D.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&gt.getTransfer(S.map.colorSpace)===Rt,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&gt.getTransfer(S.emissiveMap.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wr,flipSided:S.side===hi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ke&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&S.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)M.push(O),M.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(_(M,S),v(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=h[S.type];let O;if(M){const L=pr[M];O=Mw.clone(L.uniforms)}else O=S.uniforms;return O}function y(S,M){let O=u.get(M);return O!==void 0?++O.usedTimes:(O=new qD(n,M,S,r),c.push(O),u.set(M,O)),O}function A(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function R(S){a.remove(S)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:w}}function ZD(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function JD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Lg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ng(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,m,g,p,_){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:p,group:_},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.materialVariant=o(f),v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=p,v.group=_),e++,v}function l(f,h,m,g,p,_){const v=a(f,h,m,g,p,_);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function c(f,h,m,g,p,_){const v=a(f,h,m,g,p,_);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function u(f,h){t.length>1&&t.sort(f||JD),i.length>1&&i.sort(h||Lg),r.length>1&&r.sort(h||Lg)}function d(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function QD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ng,n.set(i,[o])):r>=s.length?(o=new Ng,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function e2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new lt};break;case"SpotLight":t={position:new re,direction:new re,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new re,halfWidth:new re,halfHeight:new re};break}return n[e.id]=t,t}}}function t2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let n2=0;function i2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function r2(n){const e=new e2,t=t2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new re);const r=new re,s=new Zt,o=new Zt;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,m=0,g=0,p=0,_=0,v=0,E=0,y=0,A=0,R=0,w=0;c.sort(i2);for(let M=0,O=c.length;M<O;M++){const L=c[M],D=L.color,H=L.intensity,q=L.distance;let G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Na?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=D.r*H,d+=D.g*H,f+=D.b*H;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],H);w++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,ne=t.get(L);ne.shadowIntensity=B.intensity,ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,i.directionalShadow[h]=ne,i.directionalShadowMap[h]=G,i.directionalShadowMatrix[h]=L.shadow.matrix,v++}i.directional[h]=W,h++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(D).multiplyScalar(H),W.distance=q,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[g]=W;const B=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,B.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[g]=B.matrix,L.castShadow){const ne=t.get(L);ne.shadowIntensity=B.intensity,ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,i.spotShadow[g]=ne,i.spotShadowMap[g]=G,y++}g++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(D).multiplyScalar(H),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=W,p++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const B=L.shadow,ne=t.get(L);ne.shadowIntensity=B.intensity,ne.shadowBias=B.bias,ne.shadowNormalBias=B.normalBias,ne.shadowRadius=B.radius,ne.shadowMapSize=B.mapSize,ne.shadowCameraNear=B.camera.near,ne.shadowCameraFar=B.camera.far,i.pointShadow[m]=ne,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=L.shadow.matrix,E++}i.point[m]=W,m++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(H),W.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[_]=W,_++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==h||S.pointLength!==m||S.spotLength!==g||S.rectAreaLength!==p||S.hemiLength!==_||S.numDirectionalShadows!==v||S.numPointShadows!==E||S.numSpotShadows!==y||S.numSpotMaps!==A||S.numLightProbes!==w)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=p,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,S.directionalLength=h,S.pointLength=m,S.spotLength=g,S.rectAreaLength=p,S.hemiLength=_,S.numDirectionalShadows=v,S.numPointShadows=E,S.numSpotShadows=y,S.numSpotMaps=A,S.numLightProbes=w,i.version=n2++)}function l(c,u){let d=0,f=0,h=0,m=0,g=0;const p=u.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const E=c[_];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(E.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),h++}else if(E.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(E.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function Ug(n){const e=new r2(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function s2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ug(n),e.set(r,[a])):s>=o.length?(a=new Ug(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const o2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a2=`uniform sampler2D shadow_pass;
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
}`,l2=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],c2=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],Fg=new Zt,tl=new re,xd=new re;function u2(n,e,t){let i=new sS;const r=new Lt,s=new Lt,o=new nn,a=new Aw,l=new ww,c={},u=t.maxTextureSize,d={[zs]:hi,[hi]:zs,[Wr]:Wr},f=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:o2,fragmentShader:a2}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new pi;m.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new os(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let _=this.type;this.render=function(R,w,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===dA&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cu);const M=n.getRenderTarget(),O=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),D=n.state;D.setBlending(Kr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=_!==this.type;H&&w.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(G=>G.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,G=R.length;q<G;q++){const W=R[q],B=W.shadow;if(B===void 0){et("WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const ne=B.getFrameExtents();r.multiply(ne),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,B.mapSize.y=s.y));const fe=n.state.buffers.depth.getReversed();if(B.camera._reversedDepth=fe,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===al){if(W.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new br(r.x,r.y,{format:Na,type:is,minFilter:kn,magFilter:kn,generateMipmaps:!1}),B.map.texture.name=W.name+".shadowMap",B.map.depthTexture=new ec(r.x,r.y,vr),B.map.depthTexture.name=W.name+".shadowMapDepth",B.map.depthTexture.format=rs,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=bn,B.map.depthTexture.magFilter=bn}else W.isPointLight?(B.map=new hS(r.x),B.map.depthTexture=new Sw(r.x,Cr)):(B.map=new br(r.x,r.y),B.map.depthTexture=new ec(r.x,r.y,Cr)),B.map.depthTexture.name=W.name+".shadowMap",B.map.depthTexture.format=rs,this.type===cu?(B.map.depthTexture.compareFunction=fe?rm:im,B.map.depthTexture.minFilter=kn,B.map.depthTexture.magFilter=kn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=bn,B.map.depthTexture.magFilter=bn);B.camera.updateProjectionMatrix()}const F=B.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<F;ge++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(B.map),n.clear());const ve=B.getViewport(ge);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),D.viewport(o)}if(W.isPointLight){const ve=B.camera,be=B.matrix,De=W.distance||ve.far;De!==ve.far&&(ve.far=De,ve.updateProjectionMatrix()),tl.setFromMatrixPosition(W.matrixWorld),ve.position.copy(tl),xd.copy(ve.position),xd.add(l2[ge]),ve.up.copy(c2[ge]),ve.lookAt(xd),ve.updateMatrixWorld(),be.makeTranslation(-tl.x,-tl.y,-tl.z),Fg.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Fg,ve.coordinateSystem,ve.reversedDepth)}else B.updateMatrices(W);i=B.getFrustum(),y(w,S,B.camera,W,this.type)}B.isPointLightShadow!==!0&&this.type===al&&v(B,S),B.needsUpdate=!1}_=this.type,p.needsUpdate=!1,n.setRenderTarget(M,O,L)};function v(R,w){const S=e.update(g);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new br(r.x,r.y,{format:Na,type:is})),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,S,f,g,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,S,h,g,null)}function E(R,w,S,M){let O=null;const L=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)O=L;else if(O=S.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=O.uuid,H=w.uuid;let q=c[D];q===void 0&&(q={},c[D]=q);let G=q[H];G===void 0&&(G=O.clone(),q[H]=G,w.addEventListener("dispose",A)),O=G}if(O.visible=w.visible,O.wireframe=w.wireframe,M===al?O.side=w.shadowSide!==null?w.shadowSide:w.side:O.side=w.shadowSide!==null?w.shadowSide:d[w.side],O.alphaMap=w.alphaMap,O.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,O.map=w.map,O.clipShadows=w.clipShadows,O.clippingPlanes=w.clippingPlanes,O.clipIntersection=w.clipIntersection,O.displacementMap=w.displacementMap,O.displacementScale=w.displacementScale,O.displacementBias=w.displacementBias,O.wireframeLinewidth=w.wireframeLinewidth,O.linewidth=w.linewidth,S.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const D=n.properties.get(O);D.light=S}return O}function y(R,w,S,M,O){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&O===al)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const H=e.update(R),q=R.material;if(Array.isArray(q)){const G=H.groups;for(let W=0,B=G.length;W<B;W++){const ne=G[W],fe=q[ne.materialIndex];if(fe&&fe.visible){const F=E(R,fe,M,O);R.onBeforeShadow(n,R,w,S,H,F,ne),n.renderBufferDirect(S,null,H,F,R,ne),R.onAfterShadow(n,R,w,S,H,F,ne)}}}else if(q.visible){const G=E(R,q,M,O);R.onBeforeShadow(n,R,w,S,H,G,null),n.renderBufferDirect(S,null,H,G,R,null),R.onAfterShadow(n,R,w,S,H,G,null)}}const D=R.children;for(let H=0,q=D.length;H<q;H++)y(D[H],w,S,M,O)}function A(R){R.target.removeEventListener("dispose",A);for(const S in c){const M=c[S],O=R.target.uuid;O in M&&(M[O].dispose(),delete M[O])}}}function f2(n,e){function t(){let k=!1;const Ee=new nn;let ye=null;const Ie=new nn(0,0,0,0);return{setMask:function(_e){ye!==_e&&!k&&(n.colorMask(_e,_e,_e,_e),ye=_e)},setLocked:function(_e){k=_e},setClear:function(_e,ue,ke,qe,vt){vt===!0&&(_e*=qe,ue*=qe,ke*=qe),Ee.set(_e,ue,ke,qe),Ie.equals(Ee)===!1&&(n.clearColor(_e,ue,ke,qe),Ie.copy(Ee))},reset:function(){k=!1,ye=null,Ie.set(-1,0,0,0)}}}function i(){let k=!1,Ee=!1,ye=null,Ie=null,_e=null;return{setReversed:function(ue){if(Ee!==ue){const ke=e.get("EXT_clip_control");ue?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Ee=ue;const qe=_e;_e=null,this.setClear(qe)}},getReversed:function(){return Ee},setTest:function(ue){ue?z(n.DEPTH_TEST):Y(n.DEPTH_TEST)},setMask:function(ue){ye!==ue&&!k&&(n.depthMask(ue),ye=ue)},setFunc:function(ue){if(Ee&&(ue=YA[ue]),Ie!==ue){switch(ue){case lh:n.depthFunc(n.NEVER);break;case ch:n.depthFunc(n.ALWAYS);break;case uh:n.depthFunc(n.LESS);break;case Ia:n.depthFunc(n.LEQUAL);break;case fh:n.depthFunc(n.EQUAL);break;case dh:n.depthFunc(n.GEQUAL);break;case hh:n.depthFunc(n.GREATER);break;case ph:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=ue}},setLocked:function(ue){k=ue},setClear:function(ue){_e!==ue&&(_e=ue,Ee&&(ue=1-ue),n.clearDepth(ue))},reset:function(){k=!1,ye=null,Ie=null,_e=null,Ee=!1}}}function r(){let k=!1,Ee=null,ye=null,Ie=null,_e=null,ue=null,ke=null,qe=null,vt=null;return{setTest:function(Oe){k||(Oe?z(n.STENCIL_TEST):Y(n.STENCIL_TEST))},setMask:function(Oe){Ee!==Oe&&!k&&(n.stencilMask(Oe),Ee=Oe)},setFunc:function(Oe,Ge,st){(ye!==Oe||Ie!==Ge||_e!==st)&&(n.stencilFunc(Oe,Ge,st),ye=Oe,Ie=Ge,_e=st)},setOp:function(Oe,Ge,st){(ue!==Oe||ke!==Ge||qe!==st)&&(n.stencilOp(Oe,Ge,st),ue=Oe,ke=Ge,qe=st)},setLocked:function(Oe){k=Oe},setClear:function(Oe){vt!==Oe&&(n.clearStencil(Oe),vt=Oe)},reset:function(){k=!1,Ee=null,ye=null,Ie=null,_e=null,ue=null,ke=null,qe=null,vt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],m=null,g=!1,p=null,_=null,v=null,E=null,y=null,A=null,R=null,w=new lt(0,0,0),S=0,M=!1,O=null,L=null,D=null,H=null,q=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,B=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ne)[1]),W=B>=1):ne.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),W=B>=2);let fe=null,F={};const ge=n.getParameter(n.SCISSOR_BOX),ve=n.getParameter(n.VIEWPORT),be=new nn().fromArray(ge),De=new nn().fromArray(ve);function Ne(k,Ee,ye,Ie){const _e=new Uint8Array(4),ue=n.createTexture();n.bindTexture(k,ue),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<ye;ke++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(Ee+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ue}const $={};$[n.TEXTURE_2D]=Ne(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=Ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=Ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=Ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),z(n.DEPTH_TEST),o.setFunc(Ia),j(!1),N(F_),z(n.CULL_FACE),V(Kr);function z(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function Y(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function le(k,Ee){return d[k]!==Ee?(n.bindFramebuffer(k,Ee),d[k]=Ee,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ee),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function he(k,Ee){let ye=h,Ie=!1;if(k){ye=f.get(Ee),ye===void 0&&(ye=[],f.set(Ee,ye));const _e=k.textures;if(ye.length!==_e.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,ke=_e.length;ue<ke;ue++)ye[ue]=n.COLOR_ATTACHMENT0+ue;ye.length=_e.length,Ie=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ye)}function xe(k){return m!==k?(n.useProgram(k),m=k,!0):!1}const I={[lo]:n.FUNC_ADD,[pA]:n.FUNC_SUBTRACT,[mA]:n.FUNC_REVERSE_SUBTRACT};I[_A]=n.MIN,I[gA]=n.MAX;const P={[vA]:n.ZERO,[xA]:n.ONE,[SA]:n.SRC_COLOR,[oh]:n.SRC_ALPHA,[AA]:n.SRC_ALPHA_SATURATE,[bA]:n.DST_COLOR,[MA]:n.DST_ALPHA,[yA]:n.ONE_MINUS_SRC_COLOR,[ah]:n.ONE_MINUS_SRC_ALPHA,[TA]:n.ONE_MINUS_DST_COLOR,[EA]:n.ONE_MINUS_DST_ALPHA,[wA]:n.CONSTANT_COLOR,[CA]:n.ONE_MINUS_CONSTANT_COLOR,[RA]:n.CONSTANT_ALPHA,[PA]:n.ONE_MINUS_CONSTANT_ALPHA};function V(k,Ee,ye,Ie,_e,ue,ke,qe,vt,Oe){if(k===Kr){g===!0&&(Y(n.BLEND),g=!1);return}if(g===!1&&(z(n.BLEND),g=!0),k!==hA){if(k!==p||Oe!==M){if((_!==lo||y!==lo)&&(n.blendEquation(n.FUNC_ADD),_=lo,y=lo),Oe)switch(k){case ga:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ou:n.blendFunc(n.ONE,n.ONE);break;case O_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case B_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:St("WebGLState: Invalid blending: ",k);break}else switch(k){case ga:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ou:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case O_:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B_:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",k);break}v=null,E=null,A=null,R=null,w.set(0,0,0),S=0,p=k,M=Oe}return}_e=_e||Ee,ue=ue||ye,ke=ke||Ie,(Ee!==_||_e!==y)&&(n.blendEquationSeparate(I[Ee],I[_e]),_=Ee,y=_e),(ye!==v||Ie!==E||ue!==A||ke!==R)&&(n.blendFuncSeparate(P[ye],P[Ie],P[ue],P[ke]),v=ye,E=Ie,A=ue,R=ke),(qe.equals(w)===!1||vt!==S)&&(n.blendColor(qe.r,qe.g,qe.b,vt),w.copy(qe),S=vt),p=k,M=!1}function J(k,Ee){k.side===Wr?Y(n.CULL_FACE):z(n.CULL_FACE);let ye=k.side===hi;Ee&&(ye=!ye),j(ye),k.blending===ga&&k.transparent===!1?V(Kr):V(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const Ie=k.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ae(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?z(n.SAMPLE_ALPHA_TO_COVERAGE):Y(n.SAMPLE_ALPHA_TO_COVERAGE)}function j(k){O!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),O=k)}function N(k){k!==uA?(z(n.CULL_FACE),k!==L&&(k===F_?n.cullFace(n.BACK):k===fA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Y(n.CULL_FACE),L=k}function C(k){k!==D&&(W&&n.lineWidth(k),D=k)}function ae(k,Ee,ye){k?(z(n.POLYGON_OFFSET_FILL),(H!==Ee||q!==ye)&&(H=Ee,q=ye,o.getReversed()&&(Ee=-Ee),n.polygonOffset(Ee,ye))):Y(n.POLYGON_OFFSET_FILL)}function ce(k){k?z(n.SCISSOR_TEST):Y(n.SCISSOR_TEST)}function ee(k){k===void 0&&(k=n.TEXTURE0+G-1),fe!==k&&(n.activeTexture(k),fe=k)}function de(k,Ee,ye){ye===void 0&&(fe===null?ye=n.TEXTURE0+G-1:ye=fe);let Ie=F[ye];Ie===void 0&&(Ie={type:void 0,texture:void 0},F[ye]=Ie),(Ie.type!==k||Ie.texture!==Ee)&&(fe!==ye&&(n.activeTexture(ye),fe=ye),n.bindTexture(k,Ee||$[k]),Ie.type=k,Ie.texture=Ee)}function T(){const k=F[fe];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(k){St("WebGLState:",k)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(k){St("WebGLState:",k)}}function Z(){try{n.texSubImage2D(...arguments)}catch(k){St("WebGLState:",k)}}function ie(){try{n.texSubImage3D(...arguments)}catch(k){St("WebGLState:",k)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(k){St("WebGLState:",k)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(k){St("WebGLState:",k)}}function pe(){try{n.texStorage2D(...arguments)}catch(k){St("WebGLState:",k)}}function Be(){try{n.texStorage3D(...arguments)}catch(k){St("WebGLState:",k)}}function Ae(){try{n.texImage2D(...arguments)}catch(k){St("WebGLState:",k)}}function me(){try{n.texImage3D(...arguments)}catch(k){St("WebGLState:",k)}}function Se(k){be.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),be.copy(k))}function Te(k){De.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function Pe(k,Ee){let ye=c.get(Ee);ye===void 0&&(ye=new WeakMap,c.set(Ee,ye));let Ie=ye.get(k);Ie===void 0&&(Ie=n.getUniformBlockIndex(Ee,k.name),ye.set(k,Ie))}function we(k,Ee){const Ie=c.get(Ee).get(k);l.get(Ee)!==Ie&&(n.uniformBlockBinding(Ee,Ie,k.__bindingPointIndex),l.set(Ee,Ie))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,F={},d={},f=new WeakMap,h=[],m=null,g=!1,p=null,_=null,v=null,E=null,y=null,A=null,R=null,w=new lt(0,0,0),S=0,M=!1,O=null,L=null,D=null,H=null,q=null,be.set(0,0,n.canvas.width,n.canvas.height),De.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:z,disable:Y,bindFramebuffer:le,drawBuffers:he,useProgram:xe,setBlending:V,setMaterial:J,setFlipSided:j,setCullFace:N,setLineWidth:C,setPolygonOffset:ae,setScissorTest:ce,activeTexture:ee,bindTexture:de,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Ae,texImage3D:me,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:pe,texStorage3D:Be,texSubImage2D:Z,texSubImage3D:ie,compressedTexSubImage2D:K,compressedTexSubImage3D:Me,scissor:Se,viewport:Te,reset:Ke}}function d2(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,x){return h?new OffscreenCanvas(T,x):zu("canvas")}function g(T,x,U){let Z=1;const ie=de(T);if((ie.width>U||ie.height>U)&&(Z=U/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Z*ie.width),Me=Math.floor(Z*ie.height);d===void 0&&(d=m(K,Me));const pe=x?m(K,Me):d;return pe.width=K,pe.height=Me,pe.getContext("2d").drawImage(T,0,0,K,Me),et("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+K+"x"+Me+")."),pe}else return"data"in T&&et("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),T;return T}function p(T){return T.generateMipmaps}function _(T){n.generateMipmap(T)}function v(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,x,U,Z,ie=!1){if(T!==null){if(n[T]!==void 0)return n[T];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=x;if(x===n.RED&&(U===n.FLOAT&&(K=n.R32F),U===n.HALF_FLOAT&&(K=n.R16F),U===n.UNSIGNED_BYTE&&(K=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.R8UI),U===n.UNSIGNED_SHORT&&(K=n.R16UI),U===n.UNSIGNED_INT&&(K=n.R32UI),U===n.BYTE&&(K=n.R8I),U===n.SHORT&&(K=n.R16I),U===n.INT&&(K=n.R32I)),x===n.RG&&(U===n.FLOAT&&(K=n.RG32F),U===n.HALF_FLOAT&&(K=n.RG16F),U===n.UNSIGNED_BYTE&&(K=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.RG8UI),U===n.UNSIGNED_SHORT&&(K=n.RG16UI),U===n.UNSIGNED_INT&&(K=n.RG32UI),U===n.BYTE&&(K=n.RG8I),U===n.SHORT&&(K=n.RG16I),U===n.INT&&(K=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.RGB8UI),U===n.UNSIGNED_SHORT&&(K=n.RGB16UI),U===n.UNSIGNED_INT&&(K=n.RGB32UI),U===n.BYTE&&(K=n.RGB8I),U===n.SHORT&&(K=n.RGB16I),U===n.INT&&(K=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),U===n.UNSIGNED_INT&&(K=n.RGBA32UI),U===n.BYTE&&(K=n.RGBA8I),U===n.SHORT&&(K=n.RGBA16I),U===n.INT&&(K=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),x===n.RGBA){const Me=ie?Bu:gt.getTransfer(Z);U===n.FLOAT&&(K=n.RGBA32F),U===n.HALF_FLOAT&&(K=n.RGBA16F),U===n.UNSIGNED_BYTE&&(K=Me===Rt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(T,x){let U;return T?x===null||x===Cr||x===Ql?U=n.DEPTH24_STENCIL8:x===vr?U=n.DEPTH32F_STENCIL8:x===Jl&&(U=n.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Cr||x===Ql?U=n.DEPTH_COMPONENT24:x===vr?U=n.DEPTH_COMPONENT32F:x===Jl&&(U=n.DEPTH_COMPONENT16),U}function A(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==bn&&T.minFilter!==kn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){const x=T.target;x.removeEventListener("dispose",R),S(x),x.isVideoTexture&&u.delete(x)}function w(T){const x=T.target;x.removeEventListener("dispose",w),O(x)}function S(T){const x=i.get(T);if(x.__webglInit===void 0)return;const U=T.source,Z=f.get(U);if(Z){const ie=Z[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&M(T),Object.keys(Z).length===0&&f.delete(U)}i.remove(T)}function M(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const U=T.source,Z=f.get(U);delete Z[x.__cacheKey],o.memory.textures--}function O(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let ie=0;ie<x.__webglFramebuffer[Z].length;ie++)n.deleteFramebuffer(x.__webglFramebuffer[Z][ie]);else n.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[Z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=T.textures;for(let Z=0,ie=U.length;Z<ie;Z++){const K=i.get(U[Z]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(U[Z])}i.remove(T)}let L=0;function D(){L=0}function H(){const T=L;return T>=r.maxTextures&&et("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),L+=1,T}function q(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function G(T,x){const U=i.get(T);if(T.isVideoTexture&&ce(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){const Z=T.image;if(Z===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{$(U,T,x);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function W(T,x){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){$(U,T,x);return}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function B(T,x){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){$(U,T,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function ne(T,x){const U=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&U.__version!==T.version){z(U,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const fe={[mh]:n.REPEAT,[qr]:n.CLAMP_TO_EDGE,[_h]:n.MIRRORED_REPEAT},F={[bn]:n.NEAREST,[LA]:n.NEAREST_MIPMAP_NEAREST,[_c]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[Hf]:n.LINEAR_MIPMAP_NEAREST,[po]:n.LINEAR_MIPMAP_LINEAR},ge={[OA]:n.NEVER,[HA]:n.ALWAYS,[BA]:n.LESS,[im]:n.LEQUAL,[kA]:n.EQUAL,[rm]:n.GEQUAL,[zA]:n.GREATER,[VA]:n.NOTEQUAL};function ve(T,x){if(x.type===vr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===kn||x.magFilter===Hf||x.magFilter===_c||x.magFilter===po||x.minFilter===kn||x.minFilter===Hf||x.minFilter===_c||x.minFilter===po)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,fe[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,fe[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,fe[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,F[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,F[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===bn||x.minFilter!==_c&&x.minFilter!==po||x.type===vr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function be(T,x){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const Z=x.source;let ie=f.get(Z);ie===void 0&&(ie={},f.set(Z,ie));const K=q(x);if(K!==T.__cacheKey){ie[K]===void 0&&(ie[K]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ie[K].usedTimes++;const Me=ie[T.__cacheKey];Me!==void 0&&(ie[T.__cacheKey].usedTimes--,Me.usedTimes===0&&M(x)),T.__cacheKey=K,T.__webglTexture=ie[K].texture}return U}function De(T,x,U){return Math.floor(Math.floor(T/U)/x)}function Ne(T,x,U,Z){const K=T.updateRanges;if(K.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,Z,x.data);else{K.sort((me,Se)=>me.start-Se.start);let Me=0;for(let me=1;me<K.length;me++){const Se=K[Me],Te=K[me],Pe=Se.start+Se.count,we=De(Te.start,x.width,4),Ke=De(Se.start,x.width,4);Te.start<=Pe+1&&we===Ke&&De(Te.start+Te.count-1,x.width,4)===we?Se.count=Math.max(Se.count,Te.start+Te.count-Se.start):(++Me,K[Me]=Te)}K.length=Me+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Be=n.getParameter(n.UNPACK_SKIP_PIXELS),Ae=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let me=0,Se=K.length;me<Se;me++){const Te=K[me],Pe=Math.floor(Te.start/4),we=Math.ceil(Te.count/4),Ke=Pe%x.width,k=Math.floor(Pe/x.width),Ee=we,ye=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,k),t.texSubImage2D(n.TEXTURE_2D,0,Ke,k,Ee,ye,U,Z,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ae)}}function $(T,x,U){let Z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=n.TEXTURE_3D);const ie=be(T,x),K=x.source;t.bindTexture(Z,T.__webglTexture,n.TEXTURE0+U);const Me=i.get(K);if(K.version!==Me.__version||ie===!0){t.activeTexture(n.TEXTURE0+U);const pe=gt.getPrimaries(gt.workingColorSpace),Be=x.colorSpace===Es?null:gt.getPrimaries(x.colorSpace),Ae=x.colorSpace===Es||pe===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let me=g(x.image,!1,r.maxTextureSize);me=ee(x,me);const Se=s.convert(x.format,x.colorSpace),Te=s.convert(x.type);let Pe=E(x.internalFormat,Se,Te,x.colorSpace,x.isVideoTexture);ve(Z,x);let we;const Ke=x.mipmaps,k=x.isVideoTexture!==!0,Ee=Me.__version===void 0||ie===!0,ye=K.dataReady,Ie=A(x,me);if(x.isDepthTexture)Pe=y(x.format===mo,x.type),Ee&&(k?t.texStorage2D(n.TEXTURE_2D,1,Pe,me.width,me.height):t.texImage2D(n.TEXTURE_2D,0,Pe,me.width,me.height,0,Se,Te,null));else if(x.isDataTexture)if(Ke.length>0){k&&Ee&&t.texStorage2D(n.TEXTURE_2D,Ie,Pe,Ke[0].width,Ke[0].height);for(let _e=0,ue=Ke.length;_e<ue;_e++)we=Ke[_e],k?ye&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,Se,Te,we.data):t.texImage2D(n.TEXTURE_2D,_e,Pe,we.width,we.height,0,Se,Te,we.data);x.generateMipmaps=!1}else k?(Ee&&t.texStorage2D(n.TEXTURE_2D,Ie,Pe,me.width,me.height),ye&&Ne(x,me,Se,Te)):t.texImage2D(n.TEXTURE_2D,0,Pe,me.width,me.height,0,Se,Te,me.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){k&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Pe,Ke[0].width,Ke[0].height,me.depth);for(let _e=0,ue=Ke.length;_e<ue;_e++)if(we=Ke[_e],x.format!==Qi)if(Se!==null)if(k){if(ye)if(x.layerUpdates.size>0){const ke=hg(we.width,we.height,x.format,x.type);for(const qe of x.layerUpdates){const vt=we.data.subarray(qe*ke/we.data.BYTES_PER_ELEMENT,(qe+1)*ke/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,qe,we.width,we.height,1,Se,vt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,me.depth,Se,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Pe,we.width,we.height,me.depth,0,we.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ye&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,me.depth,Se,Te,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Pe,we.width,we.height,me.depth,0,Se,Te,we.data)}else{k&&Ee&&t.texStorage2D(n.TEXTURE_2D,Ie,Pe,Ke[0].width,Ke[0].height);for(let _e=0,ue=Ke.length;_e<ue;_e++)we=Ke[_e],x.format!==Qi?Se!==null?k?ye&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,Se,we.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Pe,we.width,we.height,0,we.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ye&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,Se,Te,we.data):t.texImage2D(n.TEXTURE_2D,_e,Pe,we.width,we.height,0,Se,Te,we.data)}else if(x.isDataArrayTexture)if(k){if(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Pe,me.width,me.height,me.depth),ye)if(x.layerUpdates.size>0){const _e=hg(me.width,me.height,x.format,x.type);for(const ue of x.layerUpdates){const ke=me.data.subarray(ue*_e/me.data.BYTES_PER_ELEMENT,(ue+1)*_e/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,me.width,me.height,1,Se,Te,ke)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Se,Te,me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,me.width,me.height,me.depth,0,Se,Te,me.data);else if(x.isData3DTexture)k?(Ee&&t.texStorage3D(n.TEXTURE_3D,Ie,Pe,me.width,me.height,me.depth),ye&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Se,Te,me.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,me.width,me.height,me.depth,0,Se,Te,me.data);else if(x.isFramebufferTexture){if(Ee)if(k)t.texStorage2D(n.TEXTURE_2D,Ie,Pe,me.width,me.height);else{let _e=me.width,ue=me.height;for(let ke=0;ke<Ie;ke++)t.texImage2D(n.TEXTURE_2D,ke,Pe,_e,ue,0,Se,Te,null),_e>>=1,ue>>=1}}else if(Ke.length>0){if(k&&Ee){const _e=de(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Pe,_e.width,_e.height)}for(let _e=0,ue=Ke.length;_e<ue;_e++)we=Ke[_e],k?ye&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Se,Te,we):t.texImage2D(n.TEXTURE_2D,_e,Pe,Se,Te,we);x.generateMipmaps=!1}else if(k){if(Ee){const _e=de(me);t.texStorage2D(n.TEXTURE_2D,Ie,Pe,_e.width,_e.height)}ye&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Te,me)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Se,Te,me);p(x)&&_(Z),Me.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function z(T,x,U){if(x.image.length!==6)return;const Z=be(T,x),ie=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+U);const K=i.get(ie);if(ie.version!==K.__version||Z===!0){t.activeTexture(n.TEXTURE0+U);const Me=gt.getPrimaries(gt.workingColorSpace),pe=x.colorSpace===Es?null:gt.getPrimaries(x.colorSpace),Be=x.colorSpace===Es||Me===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Ae=x.isCompressedTexture||x.image[0].isCompressedTexture,me=x.image[0]&&x.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!Ae&&!me?Se[ue]=g(x.image[ue],!0,r.maxCubemapSize):Se[ue]=me?x.image[ue].image:x.image[ue],Se[ue]=ee(x,Se[ue]);const Te=Se[0],Pe=s.convert(x.format,x.colorSpace),we=s.convert(x.type),Ke=E(x.internalFormat,Pe,we,x.colorSpace),k=x.isVideoTexture!==!0,Ee=K.__version===void 0||Z===!0,ye=ie.dataReady;let Ie=A(x,Te);ve(n.TEXTURE_CUBE_MAP,x);let _e;if(Ae){k&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Ke,Te.width,Te.height);for(let ue=0;ue<6;ue++){_e=Se[ue].mipmaps;for(let ke=0;ke<_e.length;ke++){const qe=_e[ke];x.format!==Qi?Pe!==null?k?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,0,0,qe.width,qe.height,Pe,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,Ke,qe.width,qe.height,0,qe.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,0,0,qe.width,qe.height,Pe,we,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke,Ke,qe.width,qe.height,0,Pe,we,qe.data)}}}else{if(_e=x.mipmaps,k&&Ee){_e.length>0&&Ie++;const ue=de(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Ke,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(me){k?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,Pe,we,Se[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,Se[ue].width,Se[ue].height,0,Pe,we,Se[ue].data);for(let ke=0;ke<_e.length;ke++){const vt=_e[ke].image[ue].image;k?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,0,0,vt.width,vt.height,Pe,we,vt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,Ke,vt.width,vt.height,0,Pe,we,vt.data)}}else{k?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Pe,we,Se[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ke,Pe,we,Se[ue]);for(let ke=0;ke<_e.length;ke++){const qe=_e[ke];k?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,0,0,Pe,we,qe.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ke+1,Ke,Pe,we,qe.image[ue])}}}p(x)&&_(n.TEXTURE_CUBE_MAP),K.__version=ie.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Y(T,x,U,Z,ie,K){const Me=s.convert(U.format,U.colorSpace),pe=s.convert(U.type),Be=E(U.internalFormat,Me,pe,U.colorSpace),Ae=i.get(x),me=i.get(U);if(me.__renderTarget=x,!Ae.__hasExternalTextures){const Se=Math.max(1,x.width>>K),Te=Math.max(1,x.height>>K);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,K,Be,Se,Te,x.depth,0,Me,pe,null):t.texImage2D(ie,K,Be,Se,Te,0,Me,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ie,me.__webglTexture,0,C(x)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ie,me.__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(T,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const Z=x.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,K=y(x.stencilBuffer,ie),Me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ae(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(x),K,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(x),K,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,T)}else{const Z=x.textures;for(let ie=0;ie<Z.length;ie++){const K=Z[ie],Me=s.convert(K.format,K.colorSpace),pe=s.convert(K.type),Be=E(K.internalFormat,Me,pe,K.colorSpace);ae(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(x),Be,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(x),Be,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Be,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(T,x,U){const Z=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(x.depthTexture);if(ie.__renderTarget=x,(!ie.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),ve(n.TEXTURE_CUBE_MAP,x.depthTexture);const Ae=s.convert(x.depthTexture.format),me=s.convert(x.depthTexture.type);let Se;x.depthTexture.format===rs?Se=n.DEPTH_COMPONENT24:x.depthTexture.format===mo&&(Se=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Se,x.width,x.height,0,Ae,me,null)}}else G(x.depthTexture,0);const K=ie.__webglTexture,Me=C(x),pe=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Be=x.depthTexture.format===mo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===rs)ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Be,pe,K,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Be,pe,K,0);else if(x.depthTexture.format===mo)ae(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Be,pe,K,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Be,pe,K,0);else throw new Error("Unknown depthTexture format")}function xe(T){const x=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=Z}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let Z=0;Z<6;Z++)he(x.__webglFramebuffer[Z],T,Z);else{const Z=T.texture.mipmaps;Z&&Z.length>0?he(x.__webglFramebuffer[0],T,0):he(x.__webglFramebuffer,T,0)}else if(U){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=n.createRenderbuffer(),le(x.__webglDepthbuffer[Z],T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,K)}}else{const Z=T.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),le(x.__webglDepthbuffer,T,!1);else{const ie=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,K)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(T,x,U){const Z=i.get(T);x!==void 0&&Y(Z.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&xe(T)}function P(T){const x=T.texture,U=i.get(T),Z=i.get(x);T.addEventListener("dispose",w);const ie=T.textures,K=T.isWebGLCubeRenderTarget===!0,Me=ie.length>1;if(Me||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=x.version,o.memory.textures++),K){U.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[pe]=[];for(let Be=0;Be<x.mipmaps.length;Be++)U.__webglFramebuffer[pe][Be]=n.createFramebuffer()}else U.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)U.__webglFramebuffer[pe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Me)for(let pe=0,Be=ie.length;pe<Be;pe++){const Ae=i.get(ie[pe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&ae(T)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){const Be=ie[pe];U.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[pe]);const Ae=s.convert(Be.format,Be.colorSpace),me=s.convert(Be.type),Se=E(Be.internalFormat,Ae,me,Be.colorSpace,T.isXRRenderTarget===!0),Te=C(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Se,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,U.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),le(U.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ve(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Be=0;Be<x.mipmaps.length;Be++)Y(U.__webglFramebuffer[pe][Be],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Be);else Y(U.__webglFramebuffer[pe],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(x)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let pe=0,Be=ie.length;pe<Be;pe++){const Ae=ie[pe],me=i.get(Ae);let Se=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Se=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,me.__webglTexture),ve(Se,Ae),Y(U.__webglFramebuffer,T,Ae,n.COLOR_ATTACHMENT0+pe,Se,0),p(Ae)&&_(Se)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,Z.__webglTexture),ve(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let Be=0;Be<x.mipmaps.length;Be++)Y(U.__webglFramebuffer[Be],T,x,n.COLOR_ATTACHMENT0,pe,Be);else Y(U.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,pe,0);p(x)&&_(pe),t.unbindTexture()}T.depthBuffer&&xe(T)}function V(T){const x=T.textures;for(let U=0,Z=x.length;U<Z;U++){const ie=x[U];if(p(ie)){const K=v(T),Me=i.get(ie).__webglTexture;t.bindTexture(K,Me),_(K),t.unbindTexture()}}}const J=[],j=[];function N(T){if(T.samples>0){if(ae(T)===!1){const x=T.textures,U=T.width,Z=T.height;let ie=n.COLOR_BUFFER_BIT;const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(T),pe=x.length>1;if(pe)for(let Ae=0;Ae<x.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Be=T.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ae=0;Ae<x.length;Ae++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);const me=i.get(x[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,U,Z,0,0,U,Z,ie,n.NEAREST),l===!0&&(J.length=0,j.length=0,J.push(n.COLOR_ATTACHMENT0+Ae),T.depthBuffer&&T.resolveDepthBuffer===!1&&(J.push(K),j.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,j)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<x.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,Me.__webglColorRenderbuffer[Ae]);const me=i.get(x[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function C(T){return Math.min(r.maxSamples,T.samples)}function ae(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function ee(T,x){const U=T.colorSpace,Z=T.format,ie=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Ua&&U!==Es&&(gt.getTransfer(U)===Rt?(Z!==Qi||ie!==ki)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",U)),x}function de(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=B,this.setTextureCube=ne,this.rebindTextures=I,this.setupRenderTarget=P,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function h2(n,e){function t(i,r=Es){let s;const o=gt.getTransfer(r);if(i===ki)return n.UNSIGNED_BYTE;if(i===Jp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$x)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xx)return n.BYTE;if(i===qx)return n.SHORT;if(i===Jl)return n.UNSIGNED_SHORT;if(i===Zp)return n.INT;if(i===Cr)return n.UNSIGNED_INT;if(i===vr)return n.FLOAT;if(i===is)return n.HALF_FLOAT;if(i===Kx)return n.ALPHA;if(i===jx)return n.RGB;if(i===Qi)return n.RGBA;if(i===rs)return n.DEPTH_COMPONENT;if(i===mo)return n.DEPTH_STENCIL;if(i===Zx)return n.RED;if(i===em)return n.RED_INTEGER;if(i===Na)return n.RG;if(i===tm)return n.RG_INTEGER;if(i===nm)return n.RGBA_INTEGER;if(i===uu||i===fu||i===du||i===hu)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===uu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===du)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===uu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===du)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gh||i===vh||i===xh||i===Sh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yh||i===Mh||i===Eh||i===bh||i===Th||i===Ah||i===wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yh||i===Mh)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Eh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===bh)return s.COMPRESSED_R11_EAC;if(i===Th)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ah)return s.COMPRESSED_RG11_EAC;if(i===wh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ch||i===Rh||i===Ph||i===Dh||i===Ih||i===Lh||i===Nh||i===Uh||i===Fh||i===Oh||i===Bh||i===kh||i===zh||i===Vh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ch)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ph)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ih)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vh)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hh||i===Gh||i===Wh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hh)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xh||i===qh||i===Yh||i===$h)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$h)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ql?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const p2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m2=`
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

}`;class _2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new lS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Rr({vertexShader:p2,fragmentShader:m2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new os(new df(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g2 extends ka{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,m=null;const g=typeof XRWebGLBinding<"u",p=new _2,_={},v=t.getContextAttributes();let E=null,y=null;const A=[],R=[],w=new Lt;let S=null;const M=new Fi;M.viewport=new nn;const O=new Fi;O.viewport=new nn;const L=[M,O],D=new Rw;let H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let z=A[$];return z===void 0&&(z=new jf,A[$]=z),z.getTargetRaySpace()},this.getControllerGrip=function($){let z=A[$];return z===void 0&&(z=new jf,A[$]=z),z.getGripSpace()},this.getHand=function($){let z=A[$];return z===void 0&&(z=new jf,A[$]=z),z.getHandSpace()};function G($){const z=R.indexOf($.inputSource);if(z===-1)return;const Y=A[z];Y!==void 0&&(Y.update($.inputSource,$.frame,c||o),Y.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",B);for(let $=0;$<A.length;$++){const z=R[$];z!==null&&(R[$]=null,A[$].disconnect(z))}H=null,q=null,p.reset();for(const $ in _)delete _[$];e.setRenderTarget(E),h=null,f=null,d=null,r=null,y=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",W),r.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,le=null,he=null;v.depth&&(he=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=v.stencil?mo:rs,le=v.stencil?Ql:Cr);const xe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(xe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new br(f.textureWidth,f.textureHeight,{format:Qi,type:ki,depthTexture:new ec(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Y={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new br(h.framebufferWidth,h.framebufferHeight,{format:Qi,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B($){for(let z=0;z<$.removed.length;z++){const Y=$.removed[z],le=R.indexOf(Y);le>=0&&(R[le]=null,A[le].disconnect(Y))}for(let z=0;z<$.added.length;z++){const Y=$.added[z];let le=R.indexOf(Y);if(le===-1){for(let xe=0;xe<A.length;xe++)if(xe>=R.length){R.push(Y),le=xe;break}else if(R[xe]===null){R[xe]=Y,le=xe;break}if(le===-1)break}const he=A[le];he&&he.connect(Y)}}const ne=new re,fe=new re;function F($,z,Y){ne.setFromMatrixPosition(z.matrixWorld),fe.setFromMatrixPosition(Y.matrixWorld);const le=ne.distanceTo(fe),he=z.projectionMatrix.elements,xe=Y.projectionMatrix.elements,I=he[14]/(he[10]-1),P=he[14]/(he[10]+1),V=(he[9]+1)/he[5],J=(he[9]-1)/he[5],j=(he[8]-1)/he[0],N=(xe[8]+1)/xe[0],C=I*j,ae=I*N,ce=le/(-j+N),ee=ce*-j;if(z.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ee),$.translateZ(ce),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),he[10]===-1)$.projectionMatrix.copy(z.projectionMatrix),$.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const de=I+ce,T=P+ce,x=C-ee,U=ae+(le-ee),Z=V*P/T*de,ie=J*P/T*de;$.projectionMatrix.makePerspective(x,U,Z,ie,de,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ge($,z){z===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(z.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let z=$.near,Y=$.far;p.texture!==null&&(p.depthNear>0&&(z=p.depthNear),p.depthFar>0&&(Y=p.depthFar)),D.near=O.near=M.near=z,D.far=O.far=M.far=Y,(H!==D.near||q!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,q=D.far),D.layers.mask=$.layers.mask|6,M.layers.mask=D.layers.mask&-5,O.layers.mask=D.layers.mask&-3;const le=$.parent,he=D.cameras;ge(D,le);for(let xe=0;xe<he.length;xe++)ge(he[xe],le);he.length===2?F(D,M,O):D.projectionMatrix.copy(M.projectionMatrix),ve($,D,le)};function ve($,z,Y){Y===null?$.matrix.copy(z.matrixWorld):($.matrix.copy(Y.matrixWorld),$.matrix.invert(),$.matrix.multiply(z.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(z.projectionMatrix),$.projectionMatrixInverse.copy(z.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Kh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function($){return _[$]};let be=null;function De($,z){if(u=z.getViewerPose(c||o),m=z,u!==null){const Y=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let le=!1;Y.length!==D.cameras.length&&(D.cameras.length=0,le=!0);for(let P=0;P<Y.length;P++){const V=Y[P];let J=null;if(h!==null)J=h.getViewport(V);else{const N=d.getViewSubImage(f,V);J=N.viewport,P===0&&(e.setRenderTargetTextures(y,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(y))}let j=L[P];j===void 0&&(j=new Fi,j.layers.enable(P),j.viewport=new nn,L[P]=j),j.matrix.fromArray(V.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(V.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(J.x,J.y,J.width,J.height),P===0&&(D.matrix.copy(j.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),le===!0&&D.cameras.push(j)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=i.getBinding();const P=d.getDepthInformation(Y[0]);P&&P.isValid&&P.texture&&p.init(P,r.renderState)}if(he&&he.includes("camera-access")&&g){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<Y.length;P++){const V=Y[P].camera;if(V){let J=_[V];J||(J=new lS,_[V]=J);const j=d.getCameraImage(V);J.sourceTexture=j}}}}for(let Y=0;Y<A.length;Y++){const le=R[Y],he=A[Y];le!==null&&he!==void 0&&he.update(le,z,c||o)}be&&be($,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),m=null}const Ne=new dS;Ne.setAnimationLoop(De),this.setAnimationLoop=function($){be=$},this.dispose=function(){}}}const to=new ss,v2=new Zt;function x2(n,e){function t(p,_){p.matrixAutoUpdate===!0&&p.updateMatrix(),_.value.copy(p.matrix)}function i(p,_){_.color.getRGB(p.fogColor.value,cS(n)),_.isFog?(p.fogNear.value=_.near,p.fogFar.value=_.far):_.isFogExp2&&(p.fogDensity.value=_.density)}function r(p,_,v,E,y){_.isMeshBasicMaterial?s(p,_):_.isMeshLambertMaterial?(s(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(p,_),d(p,_)):_.isMeshPhongMaterial?(s(p,_),u(p,_),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(p,_),f(p,_),_.isMeshPhysicalMaterial&&h(p,_,y)):_.isMeshMatcapMaterial?(s(p,_),m(p,_)):_.isMeshDepthMaterial?s(p,_):_.isMeshDistanceMaterial?(s(p,_),g(p,_)):_.isMeshNormalMaterial?s(p,_):_.isLineBasicMaterial?(o(p,_),_.isLineDashedMaterial&&a(p,_)):_.isPointsMaterial?l(p,_,v,E):_.isSpriteMaterial?c(p,_):_.isShadowMaterial?(p.color.value.copy(_.color),p.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(p,_){p.opacity.value=_.opacity,_.color&&p.diffuse.value.copy(_.color),_.emissive&&p.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.bumpMap&&(p.bumpMap.value=_.bumpMap,t(_.bumpMap,p.bumpMapTransform),p.bumpScale.value=_.bumpScale,_.side===hi&&(p.bumpScale.value*=-1)),_.normalMap&&(p.normalMap.value=_.normalMap,t(_.normalMap,p.normalMapTransform),p.normalScale.value.copy(_.normalScale),_.side===hi&&p.normalScale.value.negate()),_.displacementMap&&(p.displacementMap.value=_.displacementMap,t(_.displacementMap,p.displacementMapTransform),p.displacementScale.value=_.displacementScale,p.displacementBias.value=_.displacementBias),_.emissiveMap&&(p.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,p.emissiveMapTransform)),_.specularMap&&(p.specularMap.value=_.specularMap,t(_.specularMap,p.specularMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest);const v=e.get(_),E=v.envMap,y=v.envMapRotation;E&&(p.envMap.value=E,to.copy(y),to.x*=-1,to.y*=-1,to.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),p.envMapRotation.value.setFromMatrix4(v2.makeRotationFromEuler(to)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=_.reflectivity,p.ior.value=_.ior,p.refractionRatio.value=_.refractionRatio),_.lightMap&&(p.lightMap.value=_.lightMap,p.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,p.lightMapTransform)),_.aoMap&&(p.aoMap.value=_.aoMap,p.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,p.aoMapTransform))}function o(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform))}function a(p,_){p.dashSize.value=_.dashSize,p.totalSize.value=_.dashSize+_.gapSize,p.scale.value=_.scale}function l(p,_,v,E){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.size.value=_.size*v,p.scale.value=E*.5,_.map&&(p.map.value=_.map,t(_.map,p.uvTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function c(p,_){p.diffuse.value.copy(_.color),p.opacity.value=_.opacity,p.rotation.value=_.rotation,_.map&&(p.map.value=_.map,t(_.map,p.mapTransform)),_.alphaMap&&(p.alphaMap.value=_.alphaMap,t(_.alphaMap,p.alphaMapTransform)),_.alphaTest>0&&(p.alphaTest.value=_.alphaTest)}function u(p,_){p.specular.value.copy(_.specular),p.shininess.value=Math.max(_.shininess,1e-4)}function d(p,_){_.gradientMap&&(p.gradientMap.value=_.gradientMap)}function f(p,_){p.metalness.value=_.metalness,_.metalnessMap&&(p.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,p.metalnessMapTransform)),p.roughness.value=_.roughness,_.roughnessMap&&(p.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,p.roughnessMapTransform)),_.envMap&&(p.envMapIntensity.value=_.envMapIntensity)}function h(p,_,v){p.ior.value=_.ior,_.sheen>0&&(p.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),p.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(p.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,p.sheenColorMapTransform)),_.sheenRoughnessMap&&(p.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,p.sheenRoughnessMapTransform))),_.clearcoat>0&&(p.clearcoat.value=_.clearcoat,p.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(p.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,p.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(p.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===hi&&p.clearcoatNormalScale.value.negate())),_.dispersion>0&&(p.dispersion.value=_.dispersion),_.iridescence>0&&(p.iridescence.value=_.iridescence,p.iridescenceIOR.value=_.iridescenceIOR,p.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(p.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,p.iridescenceMapTransform)),_.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),_.transmission>0&&(p.transmission.value=_.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(p.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,p.transmissionMapTransform)),p.thickness.value=_.thickness,_.thicknessMap&&(p.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=_.attenuationDistance,p.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(p.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(p.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=_.specularIntensity,p.specularColor.value.copy(_.specularColor),_.specularColorMap&&(p.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,p.specularColorMapTransform)),_.specularIntensityMap&&(p.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,_){_.matcap&&(p.matcap.value=_.matcap)}function g(p,_){const v=e.get(_).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function S2(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const y=E.program;i.uniformBlockBinding(v,y)}function c(v,E){let y=r[v.id];y===void 0&&(m(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",p));const A=E.program;i.updateUBOMapping(v,A);const R=e.render.frame;s[v.id]!==R&&(f(v),s[v.id]=R)}function u(v){const E=d();v.__bindingPointIndex=E;const y=n.createBuffer(),A=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return St("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const E=r[v.id],y=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let R=0,w=y.length;R<w;R++){const S=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,O=S.length;M<O;M++){const L=S[M];if(h(L,R,M,A)===!0){const D=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let G=0;G<H.length;G++){const W=H[G],B=g(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,D+q,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,q),q+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,E,y,A){const R=v.value,w=E+"_"+y;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{const S=A[w];if(typeof R=="number"||typeof R=="boolean"){if(S!==R)return A[w]=R,!0}else if(S.equals(R)===!1)return S.copy(R),!0}return!1}function m(v){const E=v.uniforms;let y=0;const A=16;for(let w=0,S=E.length;w<S;w++){const M=Array.isArray(E[w])?E[w]:[E[w]];for(let O=0,L=M.length;O<L;O++){const D=M[O],H=Array.isArray(D.value)?D.value:[D.value];for(let q=0,G=H.length;q<G;q++){const W=H[q],B=g(W),ne=y%A,fe=ne%B.boundary,F=ne+fe;y+=fe,F!==0&&A-F<B.storage&&(y+=A-F),D.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=B.storage}}}const R=y%A;return R>0&&(y+=A-R),v.__size=y,v.__cache={},this}function g(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):et("WebGLRenderer: Unsupported uniform value type.",v),E}function p(v){const E=v.target;E.removeEventListener("dispose",p);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function _(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}const y2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let lr=null;function M2(){return lr===null&&(lr=new pw(y2,16,16,Na,is),lr.name="DFG_LUT",lr.minFilter=kn,lr.magFilter=kn,lr.wrapS=qr,lr.wrapT=qr,lr.generateMipmaps=!1,lr.needsUpdate=!0),lr}class E2{constructor(e={}){const{canvas:t=XA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=ki}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=h,p=new Set([nm,tm,em]),_=new Set([ki,Cr,Jl,Ql,Jp,Qp]),v=new Uint32Array(4),E=new Int32Array(4);let y=null,A=null;const R=[],w=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let O=!1;this._outputColorSpace=Ui;let L=0,D=0,H=null,q=-1,G=null;const W=new nn,B=new nn;let ne=null;const fe=new lt(0);let F=0,ge=t.width,ve=t.height,be=1,De=null,Ne=null;const $=new nn(0,0,ge,ve),z=new nn(0,0,ge,ve);let Y=!1;const le=new sS;let he=!1,xe=!1;const I=new Zt,P=new re,V=new nn,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function N(){return H===null?be:1}let C=i;function ae(b,X){return t.getContext(b,X)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jp}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",vt,!1),C===null){const X="webgl2";if(C=ae(X,b),C===null)throw ae(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw St("WebGLRenderer: "+b.message),b}let ce,ee,de,T,x,U,Z,ie,K,Me,pe,Be,Ae,me,Se,Te,Pe,we,Ke,k,Ee,ye,Ie;function _e(){ce=new EP(C),ce.init(),Ee=new h2(C,ce),ee=new mP(C,ce,e,Ee),de=new f2(C,ce),ee.reversedDepthBuffer&&f&&de.buffers.depth.setReversed(!0),T=new AP(C),x=new ZD,U=new d2(C,ce,de,x,ee,Ee,T),Z=new MP(M),ie=new Dw(C),ye=new hP(C,ie),K=new bP(C,ie,T,ye),Me=new CP(C,K,ie,ye,T),we=new wP(C,ee,U),Se=new _P(x),pe=new jD(M,Z,ce,ee,ye,Se),Be=new x2(M,x),Ae=new QD,me=new s2(ce),Pe=new dP(M,Z,de,Me,m,l),Te=new u2(M,Me,ee),Ie=new S2(C,T,ee,de),Ke=new pP(C,ce,T),k=new TP(C,ce,T),T.programs=pe.programs,M.capabilities=ee,M.extensions=ce,M.properties=x,M.renderLists=Ae,M.shadowMap=Te,M.state=de,M.info=T}_e(),g!==ki&&(S=new PP(g,t.width,t.height,r,s));const ue=new g2(M,C);this.xr=ue,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=ce.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ce.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(b){b!==void 0&&(be=b,this.setSize(ge,ve,!1))},this.getSize=function(b){return b.set(ge,ve)},this.setSize=function(b,X,se=!0){if(ue.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=b,ve=X,t.width=Math.floor(b*be),t.height=Math.floor(X*be),se===!0&&(t.style.width=b+"px",t.style.height=X+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(ge*be,ve*be).floor()},this.setDrawingBufferSize=function(b,X,se){ge=b,ve=X,be=se,t.width=Math.floor(b*se),t.height=Math.floor(X*se),this.setViewport(0,0,b,X)},this.setEffects=function(b){if(g===ki){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let X=0;X<b.length;X++)if(b[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(W)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,X,se,te){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,X,se,te),de.viewport(W.copy($).multiplyScalar(be).round())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,X,se,te){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,X,se,te),de.scissor(B.copy(z).multiplyScalar(be).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(b){de.setScissorTest(Y=b)},this.setOpaqueSort=function(b){De=b},this.setTransparentSort=function(b){Ne=b},this.getClearColor=function(b){return b.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,se=!0){let te=0;if(b){let Q=!1;if(H!==null){const Ce=H.texture.format;Q=p.has(Ce)}if(Q){const Ce=H.texture.type,Le=_.has(Ce),Re=Pe.getClearColor(),Ve=Pe.getClearAlpha(),ze=Re.r,rt=Re.g,ct=Re.b;Le?(v[0]=ze,v[1]=rt,v[2]=ct,v[3]=Ve,C.clearBufferuiv(C.COLOR,0,v)):(E[0]=ze,E[1]=rt,E[2]=ct,E[3]=Ve,C.clearBufferiv(C.COLOR,0,E))}else te|=C.COLOR_BUFFER_BIT}X&&(te|=C.DEPTH_BUFFER_BIT),se&&(te|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&C.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",vt,!1),Pe.dispose(),Ae.dispose(),me.dispose(),x.dispose(),Z.dispose(),Me.dispose(),ye.dispose(),Ie.dispose(),pe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Qe),ue.removeEventListener("sessionend",Qt),nt.stop()};function ke(b){b.preventDefault(),G_("WebGLRenderer: Context Lost."),O=!0}function qe(){G_("WebGLRenderer: Context Restored."),O=!1;const b=T.autoReset,X=Te.enabled,se=Te.autoUpdate,te=Te.needsUpdate,Q=Te.type;_e(),T.autoReset=b,Te.enabled=X,Te.autoUpdate=se,Te.needsUpdate=te,Te.type=Q}function vt(b){St("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Oe(b){const X=b.target;X.removeEventListener("dispose",Oe),Ge(X)}function Ge(b){st(b),x.remove(b)}function st(b){const X=x.get(b).programs;X!==void 0&&(X.forEach(function(se){pe.releaseProgram(se)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,se,te,Q,Ce){X===null&&(X=J);const Le=Q.isMesh&&Q.matrixWorld.determinant()<0,Re=Di(b,X,se,te,Q);de.setMaterial(te,Le);let Ve=se.index,ze=1;if(te.wireframe===!0){if(Ve=K.getWireframeAttribute(se),Ve===void 0)return;ze=2}const rt=se.drawRange,ct=se.attributes.position;let Xe=rt.start*ze,Pt=(rt.start+rt.count)*ze;Ce!==null&&(Xe=Math.max(Xe,Ce.start*ze),Pt=Math.min(Pt,(Ce.start+Ce.count)*ze)),Ve!==null?(Xe=Math.max(Xe,0),Pt=Math.min(Pt,Ve.count)):ct!=null&&(Xe=Math.max(Xe,0),Pt=Math.min(Pt,ct.count));const en=Pt-Xe;if(en<0||en===1/0)return;ye.setup(Q,te,Re,se,Ve);let $t,Dt=Ke;if(Ve!==null&&($t=ie.get(Ve),Dt=k,Dt.setIndex($t)),Q.isMesh)te.wireframe===!0?(de.setLineWidth(te.wireframeLinewidth*N()),Dt.setMode(C.LINES)):Dt.setMode(C.TRIANGLES);else if(Q.isLine){let Rn=te.linewidth;Rn===void 0&&(Rn=1),de.setLineWidth(Rn*N()),Q.isLineSegments?Dt.setMode(C.LINES):Q.isLineLoop?Dt.setMode(C.LINE_LOOP):Dt.setMode(C.LINE_STRIP)}else Q.isPoints?Dt.setMode(C.POINTS):Q.isSprite&&Dt.setMode(C.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Vu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Rn=Q._multiDrawStarts,We=Q._multiDrawCounts,_i=Q._multiDrawCount,xt=Ve?ie.get(Ve).bytesPerElement:1,qi=x.get(te).currentProgram.getUniforms();for(let sr=0;sr<_i;sr++)qi.setValue(C,"_gl_DrawID",sr),Dt.render(Rn[sr]/xt,We[sr])}else if(Q.isInstancedMesh)Dt.renderInstances(Xe,en,Q.count);else if(se.isInstancedBufferGeometry){const Rn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,We=Math.min(se.instanceCount,Rn);Dt.renderInstances(Xe,en,We)}else Dt.render(Xe,en)};function Ue(b,X,se){b.transparent===!0&&b.side===Wr&&b.forceSinglePass===!1?(b.side=hi,b.needsUpdate=!0,wn(b,X,se),b.side=zs,b.needsUpdate=!0,wn(b,X,se),b.side=Wr):wn(b,X,se)}this.compile=function(b,X,se=null){se===null&&(se=b),A=me.get(se),A.init(X),w.push(A),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),b!==se&&b.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(A.pushLight(Q),Q.castShadow&&A.pushShadow(Q))}),A.setupLights();const te=new Set;return b.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Le=0;Le<Ce.length;Le++){const Re=Ce[Le];Ue(Re,se,Q),te.add(Re)}else Ue(Ce,se,Q),te.add(Ce)}),A=w.pop(),te},this.compileAsync=function(b,X,se=null){const te=this.compile(b,X,se);return new Promise(Q=>{function Ce(){if(te.forEach(function(Le){x.get(Le).currentProgram.isReady()&&te.delete(Le)}),te.size===0){Q(b);return}setTimeout(Ce,10)}ce.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Je=null;function Ye(b){Je&&Je(b)}function Qe(){nt.stop()}function Qt(){nt.start()}const nt=new dS;nt.setAnimationLoop(Ye),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(b){Je=b,ue.setAnimationLoop(b),b===null?nt.stop():nt.start()},ue.addEventListener("sessionstart",Qe),ue.addEventListener("sessionend",Qt),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;const se=ue.enabled===!0&&ue.isPresenting===!0,te=S!==null&&(H===null||se)&&S.begin(M,H);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(X),X=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,X,H),A=me.get(b,w.length),A.init(X),w.push(A),I.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),le.setFromProjectionMatrix(I,xr,X.reversedDepth),xe=this.localClippingEnabled,he=Se.init(this.clippingPlanes,xe),y=Ae.get(b,R.length),y.init(),R.push(y),ue.enabled===!0&&ue.isPresenting===!0){const Le=M.xr.getDepthSensingMesh();Le!==null&&Vt(Le,X,-1/0,M.sortObjects)}Vt(b,X,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(De,Ne),j=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,j&&Pe.addToRenderList(y,b),this.info.render.frame++,he===!0&&Se.beginShadows();const Q=A.state.shadowsArray;if(Te.render(Q,b,X),he===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&S.hasRenderPass())===!1){const Le=y.opaque,Re=y.transmissive;if(A.setupLights(),X.isArrayCamera){const Ve=X.cameras;if(Re.length>0)for(let ze=0,rt=Ve.length;ze<rt;ze++){const ct=Ve[ze];Ht(Le,Re,b,ct)}j&&Pe.render(b);for(let ze=0,rt=Ve.length;ze<rt;ze++){const ct=Ve[ze];ln(y,b,ct,ct.viewport)}}else Re.length>0&&Ht(Le,Re,b,X),j&&Pe.render(b),ln(y,b,X)}H!==null&&D===0&&(U.updateMultisampleRenderTarget(H),U.updateRenderTargetMipmap(H)),te&&S.end(M),b.isScene===!0&&b.onAfterRender(M,b,X),ye.resetDefaultState(),q=-1,G=null,w.pop(),w.length>0?(A=w[w.length-1],he===!0&&Se.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function Vt(b,X,se,te){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)se=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||le.intersectsSprite(b)){te&&V.setFromMatrixPosition(b.matrixWorld).applyMatrix4(I);const Le=Me.update(b),Re=b.material;Re.visible&&y.push(b,Le,Re,se,V.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||le.intersectsObject(b))){const Le=Me.update(b),Re=b.material;if(te&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),V.copy(b.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),V.copy(Le.boundingSphere.center)),V.applyMatrix4(b.matrixWorld).applyMatrix4(I)),Array.isArray(Re)){const Ve=Le.groups;for(let ze=0,rt=Ve.length;ze<rt;ze++){const ct=Ve[ze],Xe=Re[ct.materialIndex];Xe&&Xe.visible&&y.push(b,Le,Xe,se,V.z,ct)}}else Re.visible&&y.push(b,Le,Re,se,V.z,null)}}const Ce=b.children;for(let Le=0,Re=Ce.length;Le<Re;Le++)Vt(Ce[Le],X,se,te)}function ln(b,X,se,te){const{opaque:Q,transmissive:Ce,transparent:Le}=b;A.setupLightsView(se),he===!0&&Se.setGlobalState(M.clippingPlanes,se),te&&de.viewport(W.copy(te)),Q.length>0&&Ct(Q,X,se),Ce.length>0&&Ct(Ce,X,se),Le.length>0&&Ct(Le,X,se),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Ht(b,X,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[te.id]===void 0){const Xe=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[te.id]=new br(1,1,{generateMipmaps:!0,type:Xe?is:ki,minFilter:po,samples:ee.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const Ce=A.state.transmissionRenderTarget[te.id],Le=te.viewport||W;Ce.setSize(Le.z*M.transmissionResolutionScale,Le.w*M.transmissionResolutionScale);const Re=M.getRenderTarget(),Ve=M.getActiveCubeFace(),ze=M.getActiveMipmapLevel();M.setRenderTarget(Ce),M.getClearColor(fe),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),j&&Pe.render(se);const rt=M.toneMapping;M.toneMapping=Er;const ct=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),A.setupLightsView(te),he===!0&&Se.setGlobalState(M.clippingPlanes,te),Ct(b,se,te),U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Pt=0,en=X.length;Pt<en;Pt++){const $t=X[Pt],{object:Dt,geometry:Rn,material:We,group:_i}=$t;if(We.side===Wr&&Dt.layers.test(te.layers)){const xt=We.side;We.side=hi,We.needsUpdate=!0,Mt(Dt,se,te,Rn,We,_i),We.side=xt,We.needsUpdate=!0,Xe=!0}}Xe===!0&&(U.updateMultisampleRenderTarget(Ce),U.updateRenderTargetMipmap(Ce))}M.setRenderTarget(Re,Ve,ze),M.setClearColor(fe,F),ct!==void 0&&(te.viewport=ct),M.toneMapping=rt}function Ct(b,X,se){const te=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Ce=b.length;Q<Ce;Q++){const Le=b[Q],{object:Re,geometry:Ve,group:ze}=Le;let rt=Le.material;rt.allowOverride===!0&&te!==null&&(rt=te),Re.layers.test(se.layers)&&Mt(Re,X,se,Ve,rt,ze)}}function Mt(b,X,se,te,Q,Ce){b.onBeforeRender(M,X,se,te,Q,Ce),b.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Q.onBeforeRender(M,X,se,te,b,Ce),Q.transparent===!0&&Q.side===Wr&&Q.forceSinglePass===!1?(Q.side=hi,Q.needsUpdate=!0,M.renderBufferDirect(se,X,te,Q,b,Ce),Q.side=zs,Q.needsUpdate=!0,M.renderBufferDirect(se,X,te,Q,b,Ce),Q.side=Wr):M.renderBufferDirect(se,X,te,Q,b,Ce),b.onAfterRender(M,X,se,te,Q,Ce)}function wn(b,X,se){X.isScene!==!0&&(X=J);const te=x.get(b),Q=A.state.lights,Ce=A.state.shadowsArray,Le=Q.state.version,Re=pe.getParameters(b,Q.state,Ce,X,se),Ve=pe.getProgramCacheKey(Re);let ze=te.programs;te.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;const rt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;te.envMap=Z.get(b.envMap||te.environment,rt),te.envMapRotation=te.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",Oe),ze=new Map,te.programs=ze);let ct=ze.get(Ve);if(ct!==void 0){if(te.currentProgram===ct&&te.lightsStateVersion===Le)return Cn(b,Re),ct}else Re.uniforms=pe.getUniforms(b),b.onBeforeCompile(Re,M),ct=pe.acquireProgram(Re,Ve),ze.set(Ve,ct),te.uniforms=Re.uniforms;const Xe=te.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xe.clippingPlanes=Se.uniform),Cn(b,Re),te.needsLights=un(b),te.lightsStateVersion=Le,te.needsLights&&(Xe.ambientLightColor.value=Q.state.ambient,Xe.lightProbe.value=Q.state.probe,Xe.directionalLights.value=Q.state.directional,Xe.directionalLightShadows.value=Q.state.directionalShadow,Xe.spotLights.value=Q.state.spot,Xe.spotLightShadows.value=Q.state.spotShadow,Xe.rectAreaLights.value=Q.state.rectArea,Xe.ltc_1.value=Q.state.rectAreaLTC1,Xe.ltc_2.value=Q.state.rectAreaLTC2,Xe.pointLights.value=Q.state.point,Xe.pointLightShadows.value=Q.state.pointShadow,Xe.hemisphereLights.value=Q.state.hemi,Xe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Xe.spotLightMatrix.value=Q.state.spotLightMatrix,Xe.spotLightMap.value=Q.state.spotLightMap,Xe.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=ct,te.uniformsList=null,ct}function Ot(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=pu.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function Cn(b,X){const se=x.get(b);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function Di(b,X,se,te,Q){X.isScene!==!0&&(X=J),U.resetTextureUnits();const Ce=X.fog,Le=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,Re=H===null?M.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ua,Ve=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,ze=Z.get(te.envMap||Le,Ve),rt=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ct=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Xe=!!se.morphAttributes.position,Pt=!!se.morphAttributes.normal,en=!!se.morphAttributes.color;let $t=Er;te.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&($t=M.toneMapping);const Dt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Rn=Dt!==void 0?Dt.length:0,We=x.get(te),_i=A.state.lights;if(he===!0&&(xe===!0||b!==G)){const vn=b===G&&te.id===q;Se.setState(te,b,vn)}let xt=!1;te.version===We.__version?(We.needsLights&&We.lightsStateVersion!==_i.state.version||We.outputColorSpace!==Re||Q.isBatchedMesh&&We.batching===!1||!Q.isBatchedMesh&&We.batching===!0||Q.isBatchedMesh&&We.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&We.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&We.instancing===!1||!Q.isInstancedMesh&&We.instancing===!0||Q.isSkinnedMesh&&We.skinning===!1||!Q.isSkinnedMesh&&We.skinning===!0||Q.isInstancedMesh&&We.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&We.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&We.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&We.instancingMorph===!1&&Q.morphTexture!==null||We.envMap!==ze||te.fog===!0&&We.fog!==Ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Se.numPlanes||We.numIntersection!==Se.numIntersection)||We.vertexAlphas!==rt||We.vertexTangents!==ct||We.morphTargets!==Xe||We.morphNormals!==Pt||We.morphColors!==en||We.toneMapping!==$t||We.morphTargetsCount!==Rn)&&(xt=!0):(xt=!0,We.__version=te.version);let qi=We.currentProgram;xt===!0&&(qi=wn(te,X,Q));let sr=!1,Gs=!1,Uo=!1;const Nt=qi.getUniforms(),En=We.uniforms;if(de.useProgram(qi.program)&&(sr=!0,Gs=!0,Uo=!0),te.id!==q&&(q=te.id,Gs=!0),sr||G!==b){de.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Nt.setValue(C,"projectionMatrix",b.projectionMatrix),Nt.setValue(C,"viewMatrix",b.matrixWorldInverse);const cs=Nt.map.cameraPosition;cs!==void 0&&cs.setValue(C,P.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&Nt.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Nt.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,Gs=!0,Uo=!0)}if(We.needsLights&&(_i.state.directionalShadowMap.length>0&&Nt.setValue(C,"directionalShadowMap",_i.state.directionalShadowMap,U),_i.state.spotShadowMap.length>0&&Nt.setValue(C,"spotShadowMap",_i.state.spotShadowMap,U),_i.state.pointShadowMap.length>0&&Nt.setValue(C,"pointShadowMap",_i.state.pointShadowMap,U)),Q.isSkinnedMesh){Nt.setOptional(C,Q,"bindMatrix"),Nt.setOptional(C,Q,"bindMatrixInverse");const vn=Q.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Nt.setValue(C,"boneTexture",vn.boneTexture,U))}Q.isBatchedMesh&&(Nt.setOptional(C,Q,"batchingTexture"),Nt.setValue(C,"batchingTexture",Q._matricesTexture,U),Nt.setOptional(C,Q,"batchingIdTexture"),Nt.setValue(C,"batchingIdTexture",Q._indirectTexture,U),Nt.setOptional(C,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Nt.setValue(C,"batchingColorTexture",Q._colorsTexture,U));const ls=se.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&we.update(Q,se,qi),(Gs||We.receiveShadow!==Q.receiveShadow)&&(We.receiveShadow=Q.receiveShadow,Nt.setValue(C,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(En.envMapIntensity.value=X.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=M2()),Gs&&(Nt.setValue(C,"toneMappingExposure",M.toneMappingExposure),We.needsLights&&cn(En,Uo),Ce&&te.fog===!0&&Be.refreshFogUniforms(En,Ce),Be.refreshMaterialUniforms(En,te,be,ve,A.state.transmissionRenderTarget[b.id]),pu.upload(C,Ot(We),En,U)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(pu.upload(C,Ot(We),En,U),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Nt.setValue(C,"center",Q.center),Nt.setValue(C,"modelViewMatrix",Q.modelViewMatrix),Nt.setValue(C,"normalMatrix",Q.normalMatrix),Nt.setValue(C,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const vn=te.uniformsGroups;for(let cs=0,Fo=vn.length;cs<Fo;cs++){const mm=vn[cs];Ie.update(mm,qi),Ie.bind(mm,qi)}}return qi}function cn(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function un(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(b,X,se){const te=x.get(b);te.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=X,x.get(b.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const se=x.get(b);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0};const gn=C.createFramebuffer();this.setRenderTarget=function(b,X=0,se=0){H=b,L=X,D=se;let te=null,Q=!1,Ce=!1;if(b){const Re=x.get(b);if(Re.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(C.FRAMEBUFFER,Re.__webglFramebuffer),W.copy(b.viewport),B.copy(b.scissor),ne=b.scissorTest,de.viewport(W),de.scissor(B),de.setScissorTest(ne),q=-1;return}else if(Re.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(Re.__hasExternalTextures)U.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const rt=b.depthTexture;if(Re.__boundDepthTexture!==rt){if(rt!==null&&x.has(rt)&&(b.width!==rt.image.width||b.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const ze=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ze[X])?te=ze[X][se]:te=ze[X],Q=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?te=x.get(b).__webglMultisampledFramebuffer:Array.isArray(ze)?te=ze[se]:te=ze,W.copy(b.viewport),B.copy(b.scissor),ne=b.scissorTest}else W.copy($).multiplyScalar(be).floor(),B.copy(z).multiplyScalar(be).floor(),ne=Y;if(se!==0&&(te=gn),de.bindFramebuffer(C.FRAMEBUFFER,te)&&de.drawBuffers(b,te),de.viewport(W),de.scissor(B),de.setScissorTest(ne),Q){const Re=x.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re.__webglTexture,se)}else if(Ce){const Re=X;for(let Ve=0;Ve<b.textures.length;Ve++){const ze=x.get(b.textures[Ve]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ve,ze.__webglTexture,se,Re)}}else if(b!==null&&se!==0){const Re=x.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,se)}q=-1},this.readRenderTargetPixels=function(b,X,se,te,Q,Ce,Le,Re=0){if(!(b&&b.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Ve=Ve[Le]),Ve){de.bindFramebuffer(C.FRAMEBUFFER,Ve);try{const ze=b.textures[Re],rt=ze.format,ct=ze.type;if(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Re),!ee.textureFormatReadable(rt)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(ct)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-te&&se>=0&&se<=b.height-Q&&C.readPixels(X,se,te,Q,Ee.convert(rt),Ee.convert(ct),Ce)}finally{const ze=H!==null?x.get(H).__webglFramebuffer:null;de.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,X,se,te,Q,Ce,Le,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(Ve=Ve[Le]),Ve)if(X>=0&&X<=b.width-te&&se>=0&&se<=b.height-Q){de.bindFramebuffer(C.FRAMEBUFFER,Ve);const ze=b.textures[Re],rt=ze.format,ct=ze.type;if(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Re),!ee.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.bufferData(C.PIXEL_PACK_BUFFER,Ce.byteLength,C.STREAM_READ),C.readPixels(X,se,te,Q,Ee.convert(rt),Ee.convert(ct),0);const Pt=H!==null?x.get(H).__webglFramebuffer:null;de.bindFramebuffer(C.FRAMEBUFFER,Pt);const en=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await qA(C,en,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Xe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ce),C.deleteBuffer(Xe),C.deleteSync(en),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,se=0){const te=Math.pow(2,-se),Q=Math.floor(b.image.width*te),Ce=Math.floor(b.image.height*te),Le=X!==null?X.x:0,Re=X!==null?X.y:0;U.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,se,0,0,Le,Re,Q,Ce),de.unbindTexture()};const Pr=C.createFramebuffer(),No=C.createFramebuffer();this.copyTextureToTexture=function(b,X,se=null,te=null,Q=0,Ce=0){let Le,Re,Ve,ze,rt,ct,Xe,Pt,en;const $t=b.isCompressedTexture?b.mipmaps[Ce]:b.image;if(se!==null)Le=se.max.x-se.min.x,Re=se.max.y-se.min.y,Ve=se.isBox3?se.max.z-se.min.z:1,ze=se.min.x,rt=se.min.y,ct=se.isBox3?se.min.z:0;else{const En=Math.pow(2,-Q);Le=Math.floor($t.width*En),Re=Math.floor($t.height*En),b.isDataArrayTexture?Ve=$t.depth:b.isData3DTexture?Ve=Math.floor($t.depth*En):Ve=1,ze=0,rt=0,ct=0}te!==null?(Xe=te.x,Pt=te.y,en=te.z):(Xe=0,Pt=0,en=0);const Dt=Ee.convert(X.format),Rn=Ee.convert(X.type);let We;X.isData3DTexture?(U.setTexture3D(X,0),We=C.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(U.setTexture2DArray(X,0),We=C.TEXTURE_2D_ARRAY):(U.setTexture2D(X,0),We=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,X.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,X.unpackAlignment);const _i=C.getParameter(C.UNPACK_ROW_LENGTH),xt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),qi=C.getParameter(C.UNPACK_SKIP_PIXELS),sr=C.getParameter(C.UNPACK_SKIP_ROWS),Gs=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,$t.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$t.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,rt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ct);const Uo=b.isDataArrayTexture||b.isData3DTexture,Nt=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const En=x.get(b),ls=x.get(X),vn=x.get(En.__renderTarget),cs=x.get(ls.__renderTarget);de.bindFramebuffer(C.READ_FRAMEBUFFER,vn.__webglFramebuffer),de.bindFramebuffer(C.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let Fo=0;Fo<Ve;Fo++)Uo&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(b).__webglTexture,Q,ct+Fo),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(X).__webglTexture,Ce,en+Fo)),C.blitFramebuffer(ze,rt,Le,Re,Xe,Pt,Le,Re,C.DEPTH_BUFFER_BIT,C.NEAREST);de.bindFramebuffer(C.READ_FRAMEBUFFER,null),de.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Q!==0||b.isRenderTargetTexture||x.has(b)){const En=x.get(b),ls=x.get(X);de.bindFramebuffer(C.READ_FRAMEBUFFER,Pr),de.bindFramebuffer(C.DRAW_FRAMEBUFFER,No);for(let vn=0;vn<Ve;vn++)Uo?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,En.__webglTexture,Q,ct+vn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,En.__webglTexture,Q),Nt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ls.__webglTexture,Ce,en+vn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ls.__webglTexture,Ce),Q!==0?C.blitFramebuffer(ze,rt,Le,Re,Xe,Pt,Le,Re,C.COLOR_BUFFER_BIT,C.NEAREST):Nt?C.copyTexSubImage3D(We,Ce,Xe,Pt,en+vn,ze,rt,Le,Re):C.copyTexSubImage2D(We,Ce,Xe,Pt,ze,rt,Le,Re);de.bindFramebuffer(C.READ_FRAMEBUFFER,null),de.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Nt?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(We,Ce,Xe,Pt,en,Le,Re,Ve,Dt,Rn,$t.data):X.isCompressedArrayTexture?C.compressedTexSubImage3D(We,Ce,Xe,Pt,en,Le,Re,Ve,Dt,$t.data):C.texSubImage3D(We,Ce,Xe,Pt,en,Le,Re,Ve,Dt,Rn,$t):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ce,Xe,Pt,Le,Re,Dt,Rn,$t.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ce,Xe,Pt,$t.width,$t.height,Dt,$t.data):C.texSubImage2D(C.TEXTURE_2D,Ce,Xe,Pt,Le,Re,Dt,Rn,$t);C.pixelStorei(C.UNPACK_ROW_LENGTH,_i),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,qi),C.pixelStorei(C.UNPACK_SKIP_ROWS,sr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Gs),Ce===0&&X.generateMipmaps&&C.generateMipmap(We),de.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),de.unbindTexture()},this.resetState=function(){L=0,D=0,H=null,de.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}function b2(){let n=null,e=null,t=null,i=null,r=null,s=null,o=null,a=null,l=null,c=null,u=null,d=null,f=null,h=null;const m=[],g=[],p=[],_={x:0,y:0},v={x:0,y:0},E=1e3/30;let y=0,A=!1,R=0;const w=new lt(11454719),S=new lt(16695167),M=new lt(8843180),O=new lt(10467327),L=new lt(16096779),D=new lt(4906624),H=new lt,q=new lt,G=(be,De,Ne)=>{const $=Math.max(0,Math.min(1,(Ne-be)/(De-be)));return $*$*(3-2*$)},W=be=>{m.length=0,g.length=0,p.length=0;const De=be?3:4,Ne=be?4:6,$=be?13:11,z=be?7:6,Y=-((Ne-1)*z)/2;for(let C=0;C<De;C+=1)for(let ae=0;ae<Ne;ae+=1){const ce=(C-(De-1)/2)*$+(Math.random()-.5)*.9,ee=Y+ae*z+(Math.random()-.5)*.5,de=(Math.random()-.5)*7;m.push(new re(ce,ee,de))}const le=new Float32Array(m.length*3),he=new Float32Array(m.length*3),xe=new lt(13095678),I=new lt(6809849);m.forEach((C,ae)=>{le[ae*3]=C.x,le[ae*3+1]=C.y,le[ae*3+2]=C.z;const ce=xe.clone().lerp(I,Math.random()*.3);he[ae*3]=ce.r,he[ae*3+1]=ce.g,he[ae*3+2]=ce.b});const P=(C,ae)=>C*Ne+ae;for(let C=0;C<De;C+=1)for(let ae=0;ae<Ne-1;ae+=1){const ce=m[P(C,ae)],ee=m[P(C,ae+1)];g.push({from:ce,to:ee})}for(let C=0;C<De-1;C+=1)for(let ae=0;ae<Ne;ae+=1){const ce=m[P(C,ae)],ee=m[P(C+1,ae)];g.push({from:ce,to:ee})}for(let C=0;C<De-1;C+=1)for(let ae=0;ae<Ne-1;ae+=1)if(Math.random()>.58){const ce=m[P(C,ae)],ee=m[P(C+1,ae+1)];g.push({from:ce,to:ee})}const V=new Float32Array(g.length*6);g.forEach((C,ae)=>{V[ae*6]=C.from.x,V[ae*6+1]=C.from.y,V[ae*6+2]=C.from.z,V[ae*6+3]=C.to.x,V[ae*6+4]=C.to.y,V[ae*6+5]=C.to.z});const J=be?7:13,j=new Float32Array(J*3);for(let C=0;C<J;C+=1){const ae=Math.floor(Math.random()*g.length);p.push({connectionIndex:ae,progress:Math.random(),speed:.16+Math.random()*.2});const ce=g[ae];j[C*3]=ce.from.x,j[C*3+1]=ce.from.y,j[C*3+2]=ce.from.z}a=new pi,a.setAttribute("position",new li(le,3)),a.setAttribute("color",new li(he,3)),c=new pi,c.setAttribute("position",new li(V,3)),d=new pi;const N=new li(j,3);N.setUsage(GA),d.setAttribute("position",N),l=new jh({size:be?.95:.85,transparent:!0,opacity:.52,depthWrite:!1,blending:Ou,vertexColors:!0}),u=new oS({color:O,transparent:!0,opacity:.16}),f=new jh({size:be?1.15:1.05,color:14870768,transparent:!0,opacity:.82,depthWrite:!1,blending:Ou}),r=new cg(a,l),s=new xw(c,u),o=new cg(d,f),e.add(s),e.add(r),e.add(o)},B=()=>{if(!i||!t)return;const be=window.innerWidth,De=window.innerHeight;i.setSize(be,De,!1),t.aspect=be/De,t.updateProjectionMatrix()},ne=be=>{const De=window.innerWidth||1,Ne=window.innerHeight||1;_.x=(be.clientX/De-.5)*2,_.y=(be.clientY/Ne-.5)*2},fe=()=>{!i||!e||!t||i.render(e,t)},F=be=>{const De=be%36,Ne=G(10.5,14,De)*(1-G(20,24,De)),$=G(24,30,De);return H.copy(w).lerp(S,Ne*.55).lerp(M,$*.68),q.copy(O).lerp(L,Ne*.45).lerp(D,$*.72),l&&(l.color.copy(H),l.opacity=.44+Ne*.14+$*.08),u&&(u.color.copy(q),u.opacity=.12+Ne*.09+$*.05),f&&(f.color.copy(H).lerp(M,$*.45),f.opacity=.78+Ne*.12),{burst:Ne,optimize:$,pulseSpeedMultiplier:.42+Ne*1.1+$*.36}},ge=(be,De)=>{if(!d||p.length===0)return;const Ne=d.attributes.position.array;p.forEach(($,z)=>{$.progress+=be*$.speed*De,$.progress>=1&&($.progress=0,Math.random()>.55&&($.connectionIndex=Math.floor(Math.random()*g.length)));const Y=g[$.connectionIndex],le=$.progress;Ne[z*3]=Y.from.x+(Y.to.x-Y.from.x)*le,Ne[z*3+1]=Y.from.y+(Y.to.y-Y.from.y)*le,Ne[z*3+2]=Y.from.z+(Y.to.z-Y.from.z)*le}),d.attributes.position.needsUpdate=!0},ve=be=>{if(n=requestAnimationFrame(ve),be-y<E||(y=be,!r||!t))return;const De=(be-R)/1e3,Ne=E/1e3,$=F(De);v.x+=(_.x-v.x)*.03,v.y+=(_.y-v.y)*.03;const z=Math.sin(De*.12)*.7,Y=Math.cos(De*.09)*.45;r.rotation.y+=28e-5+$.burst*35e-5,r.rotation.x=v.y*.08+Y*.02,s&&(s.rotation.y=r.rotation.y*.98,s.rotation.x=r.rotation.x*.98),o&&(o.rotation.y=r.rotation.y,o.rotation.x=r.rotation.x),t.position.x=z+v.x*1.6,t.position.y=Y-v.y*1.2,t.lookAt(0,0,0),ge(Ne,$.pulseSpeedMultiplier),fe()};Do(()=>{if(h=document.getElementById("particleCanvas"),!!h){A=window.matchMedia("(prefers-reduced-motion: reduce)").matches;try{e=new lw,t=new Fi(50,window.innerWidth/window.innerHeight,.1,200),t.position.set(0,0,56),i=new E2({canvas:h,antialias:!0,alpha:!0,powerPreference:"low-power"}),i.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),i.setClearAlpha(0),B();const be=window.innerWidth<768;W(be),R=performance.now(),A?(F(0),ge(.16,.45),fe()):(n=requestAnimationFrame(ve),be||window.addEventListener("mousemove",ne,{passive:!0}))}catch{}window.addEventListener("resize",B)}}),Io(()=>{window.removeEventListener("mousemove",ne),window.removeEventListener("resize",B),n!==null&&cancelAnimationFrame(n),r&&e&&e.remove(r),s&&e&&e.remove(s),o&&e&&e.remove(o),a&&a.dispose(),l&&l.dispose(),c&&c.dispose(),u&&u.dispose(),d&&d.dispose(),f&&f.dispose(),i&&(i.dispose(),typeof i.forceContextLoss=="function"&&i.forceContextLoss())})}function T2(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function A2(n,e,t){return e&&T2(n.prototype,e),n}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tn,mu,bi,Cs,Rs,xa,vS,so,Tl,xS,Yr,ji,SS,yS=function(){return Tn||typeof window<"u"&&(Tn=window.gsap)&&Tn.registerPlugin&&Tn},MS=1,aa=[],dt=[],Tr=[],Al=Date.now,ep=function(e,t){return t},w2=function(){var e=Tl.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,dt),r.push.apply(r,Tr),dt=i,Tr=r,ep=function(o,a){return t[o](a)}},Us=function(e,t){return~Tr.indexOf(e)&&Tr[Tr.indexOf(e)+1][t]},wl=function(e){return!!~xS.indexOf(e)},Wn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Hn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Gc="scrollLeft",Wc="scrollTop",tp=function(){return Yr&&Yr.isPressed||dt.cache++},Wu=function(e,t){var i=function r(s){if(s||s===0){MS&&(bi.history.scrollRestoration="manual");var o=Yr&&Yr.isPressed;s=r.v=Math.round(s)||(Yr&&Yr.iOS?1:0),e(s),r.cacheID=dt.cache,o&&ep("ss",s)}else(t||dt.cache!==r.cacheID||ep("ref"))&&(r.cacheID=dt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ei={s:Gc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wu(function(n){return arguments.length?bi.scrollTo(n,hn.sc()):bi.pageXOffset||Cs[Gc]||Rs[Gc]||xa[Gc]||0})},hn={s:Wc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ei,sc:Wu(function(n){return arguments.length?bi.scrollTo(ei.sc(),n):bi.pageYOffset||Cs[Wc]||Rs[Wc]||xa[Wc]||0})},oi=function(e,t){return(t&&t._ctx&&t._ctx.selector||Tn.utils.toArray)(e)[0]||(typeof e=="string"&&Tn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},C2=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Vs=function(e,t){var i=t.s,r=t.sc;wl(e)&&(e=Cs.scrollingElement||Rs);var s=dt.indexOf(e),o=r===hn.sc?1:2;!~s&&(s=dt.push(e)-1),dt[s+o]||Wn(e,"scroll",tp);var a=dt[s+o],l=a||(dt[s+o]=Wu(Us(e,i),!0)||(wl(e)?r:Wu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Tn.getProperty(e,"scrollBehavior")==="smooth"),l},np=function(e,t,i){var r=e,s=e,o=Al(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,g){var p=Al();g||p-o>l?(s=r,r=m,a=o,o=p):i?r+=m:r=s+(m-s)/(p-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(m){var g=a,p=s,_=Al();return(m||m===0)&&m!==r&&u(m),o===a||_-a>c?0:(r+(i?p:-p))/((i?_:o)-g)*1e3};return{update:u,reset:d,getVelocity:f}},nl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Og=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},ES=function(){Tl=Tn.core.globals().ScrollTrigger,Tl&&Tl.core&&w2()},bS=function(e){return Tn=e||yS(),!mu&&Tn&&typeof document<"u"&&document.body&&(bi=window,Cs=document,Rs=Cs.documentElement,xa=Cs.body,xS=[bi,Cs,Rs,xa],Tn.utils.clamp,SS=Tn.core.context||function(){},so="onpointerenter"in xa?"pointer":"mouse",vS=rn.isTouch=bi.matchMedia&&bi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in bi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ji=rn.eventTypes=("ontouchstart"in Rs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Rs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return MS=0},500),ES(),mu=1),mu};ei.op=hn;dt.cache=0;var rn=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){mu||bS(Tn)||console.warn("Please gsap.registerPlugin(Observer)"),Tl||ES();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,d=i.onStop,f=i.onStopDelay,h=i.ignore,m=i.wheelSpeed,g=i.event,p=i.onDragStart,_=i.onDragEnd,v=i.onDrag,E=i.onPress,y=i.onRelease,A=i.onRight,R=i.onLeft,w=i.onUp,S=i.onDown,M=i.onChangeX,O=i.onChangeY,L=i.onChange,D=i.onToggleX,H=i.onToggleY,q=i.onHover,G=i.onHoverEnd,W=i.onMove,B=i.ignoreCheck,ne=i.isNormalizer,fe=i.onGestureStart,F=i.onGestureEnd,ge=i.onWheel,ve=i.onEnable,be=i.onDisable,De=i.onClick,Ne=i.scrollSpeed,$=i.capture,z=i.allowClicks,Y=i.lockAxis,le=i.onLockAxis;this.target=a=oi(a)||Rs,this.vars=i,h&&(h=Tn.utils.toArray(h)),r=r||1e-9,s=s||0,m=m||1,Ne=Ne||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(bi.getComputedStyle(xa).lineHeight)||22);var he,xe,I,P,V,J,j,N=this,C=0,ae=0,ce=i.passive||!u&&i.passive!==!1,ee=Vs(a,ei),de=Vs(a,hn),T=ee(),x=de(),U=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ji[0]==="pointerdown",Z=wl(a),ie=a.ownerDocument||Cs,K=[0,0,0],Me=[0,0,0],pe=0,Be=function(){return pe=Al()},Ae=function(Ge,st){return(N.event=Ge)&&h&&C2(Ge.target,h)||st&&U&&Ge.pointerType!=="touch"||B&&B(Ge,st)},me=function(){N._vx.reset(),N._vy.reset(),xe.pause(),d&&d(N)},Se=function(){var Ge=N.deltaX=Og(K),st=N.deltaY=Og(Me),Ue=Math.abs(Ge)>=r,Je=Math.abs(st)>=r;L&&(Ue||Je)&&L(N,Ge,st,K,Me),Ue&&(A&&N.deltaX>0&&A(N),R&&N.deltaX<0&&R(N),M&&M(N),D&&N.deltaX<0!=C<0&&D(N),C=N.deltaX,K[0]=K[1]=K[2]=0),Je&&(S&&N.deltaY>0&&S(N),w&&N.deltaY<0&&w(N),O&&O(N),H&&N.deltaY<0!=ae<0&&H(N),ae=N.deltaY,Me[0]=Me[1]=Me[2]=0),(P||I)&&(W&&W(N),I&&(p&&I===1&&p(N),v&&v(N),I=0),P=!1),J&&!(J=!1)&&le&&le(N),V&&(ge(N),V=!1),he=0},Te=function(Ge,st,Ue){K[Ue]+=Ge,Me[Ue]+=st,N._vx.update(Ge),N._vy.update(st),c?he||(he=requestAnimationFrame(Se)):Se()},Pe=function(Ge,st){Y&&!j&&(N.axis=j=Math.abs(Ge)>Math.abs(st)?"x":"y",J=!0),j!=="y"&&(K[2]+=Ge,N._vx.update(Ge,!0)),j!=="x"&&(Me[2]+=st,N._vy.update(st,!0)),c?he||(he=requestAnimationFrame(Se)):Se()},we=function(Ge){if(!Ae(Ge,1)){Ge=nl(Ge,u);var st=Ge.clientX,Ue=Ge.clientY,Je=st-N.x,Ye=Ue-N.y,Qe=N.isDragging;N.x=st,N.y=Ue,(Qe||(Je||Ye)&&(Math.abs(N.startX-st)>=s||Math.abs(N.startY-Ue)>=s))&&(I||(I=Qe?2:1),Qe||(N.isDragging=!0),Pe(Je,Ye))}},Ke=N.onPress=function(Oe){Ae(Oe,1)||Oe&&Oe.button||(N.axis=j=null,xe.pause(),N.isPressed=!0,Oe=nl(Oe),C=ae=0,N.startX=N.x=Oe.clientX,N.startY=N.y=Oe.clientY,N._vx.reset(),N._vy.reset(),Wn(ne?a:ie,ji[1],we,ce,!0),N.deltaX=N.deltaY=0,E&&E(N))},k=N.onRelease=function(Oe){if(!Ae(Oe,1)){Hn(ne?a:ie,ji[1],we,!0);var Ge=!isNaN(N.y-N.startY),st=N.isDragging,Ue=st&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),Je=nl(Oe);!Ue&&Ge&&(N._vx.reset(),N._vy.reset(),u&&z&&Tn.delayedCall(.08,function(){if(Al()-pe>300&&!Oe.defaultPrevented){if(Oe.target.click)Oe.target.click();else if(ie.createEvent){var Ye=ie.createEvent("MouseEvents");Ye.initMouseEvent("click",!0,!0,bi,1,Je.screenX,Je.screenY,Je.clientX,Je.clientY,!1,!1,!1,!1,0,null),Oe.target.dispatchEvent(Ye)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,d&&st&&!ne&&xe.restart(!0),I&&Se(),_&&st&&_(N),y&&y(N,Ue)}},Ee=function(Ge){return Ge.touches&&Ge.touches.length>1&&(N.isGesturing=!0)&&fe(Ge,N.isDragging)},ye=function(){return(N.isGesturing=!1)||F(N)},Ie=function(Ge){if(!Ae(Ge)){var st=ee(),Ue=de();Te((st-T)*Ne,(Ue-x)*Ne,1),T=st,x=Ue,d&&xe.restart(!0)}},_e=function(Ge){if(!Ae(Ge)){Ge=nl(Ge,u),ge&&(V=!0);var st=(Ge.deltaMode===1?l:Ge.deltaMode===2?bi.innerHeight:1)*m;Te(Ge.deltaX*st,Ge.deltaY*st,0),d&&!ne&&xe.restart(!0)}},ue=function(Ge){if(!Ae(Ge)){var st=Ge.clientX,Ue=Ge.clientY,Je=st-N.x,Ye=Ue-N.y;N.x=st,N.y=Ue,P=!0,d&&xe.restart(!0),(Je||Ye)&&Pe(Je,Ye)}},ke=function(Ge){N.event=Ge,q(N)},qe=function(Ge){N.event=Ge,G(N)},vt=function(Ge){return Ae(Ge)||nl(Ge,u)&&De(N)};xe=N._dc=Tn.delayedCall(f||.25,me).pause(),N.deltaX=N.deltaY=0,N._vx=np(0,50,!0),N._vy=np(0,50,!0),N.scrollX=ee,N.scrollY=de,N.isDragging=N.isGesturing=N.isPressed=!1,SS(this),N.enable=function(Oe){return N.isEnabled||(Wn(Z?ie:a,"scroll",tp),o.indexOf("scroll")>=0&&Wn(Z?ie:a,"scroll",Ie,ce,$),o.indexOf("wheel")>=0&&Wn(a,"wheel",_e,ce,$),(o.indexOf("touch")>=0&&vS||o.indexOf("pointer")>=0)&&(Wn(a,ji[0],Ke,ce,$),Wn(ie,ji[2],k),Wn(ie,ji[3],k),z&&Wn(a,"click",Be,!0,!0),De&&Wn(a,"click",vt),fe&&Wn(ie,"gesturestart",Ee),F&&Wn(ie,"gestureend",ye),q&&Wn(a,so+"enter",ke),G&&Wn(a,so+"leave",qe),W&&Wn(a,so+"move",ue)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=P=I=!1,N._vx.reset(),N._vy.reset(),T=ee(),x=de(),Oe&&Oe.type&&Ke(Oe),ve&&ve(N)),N},N.disable=function(){N.isEnabled&&(aa.filter(function(Oe){return Oe!==N&&wl(Oe.target)}).length||Hn(Z?ie:a,"scroll",tp),N.isPressed&&(N._vx.reset(),N._vy.reset(),Hn(ne?a:ie,ji[1],we,!0)),Hn(Z?ie:a,"scroll",Ie,$),Hn(a,"wheel",_e,$),Hn(a,ji[0],Ke,$),Hn(ie,ji[2],k),Hn(ie,ji[3],k),Hn(a,"click",Be,!0),Hn(a,"click",vt),Hn(ie,"gesturestart",Ee),Hn(ie,"gestureend",ye),Hn(a,so+"enter",ke),Hn(a,so+"leave",qe),Hn(a,so+"move",ue),N.isEnabled=N.isPressed=N.isDragging=!1,be&&be(N))},N.kill=N.revert=function(){N.disable();var Oe=aa.indexOf(N);Oe>=0&&aa.splice(Oe,1),Yr===N&&(Yr=0)},aa.push(N),ne&&wl(a)&&(Yr=N),N.enable(g)},A2(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();rn.version="3.14.2";rn.create=function(n){return new rn(n)};rn.register=bS;rn.getAll=function(){return aa.slice()};rn.getById=function(n){return aa.filter(function(e){return e.vars.id===n})[0]};yS()&&Tn.registerPlugin(rn);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var He,ia,ft,Bt,Mi,bt,am,Xu,tc,Cl,cl,Xc,In,mf,ip,Kn,Bg,kg,ra,TS,Sd,AS,$n,rp,wS,CS,vs,sp,lm,Sa,cm,Rl,op,yd,qc=1,Ln=Date.now,Md=Ln(),Wi=0,ul=0,zg=function(e,t,i){var r=Si(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Vg=function(e,t){return t&&(!Si(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},R2=function n(){return ul&&requestAnimationFrame(n)},Hg=function(){return mf=1},Gg=function(){return mf=0},dr=function(e){return e},fl=function(e){return Math.round(e*1e5)/1e5||0},RS=function(){return typeof window<"u"},PS=function(){return He||RS()&&(He=window.gsap)&&He.registerPlugin&&He},wo=function(e){return!!~am.indexOf(e)},DS=function(e){return(e==="Height"?cm:ft["inner"+e])||Mi["client"+e]||bt["client"+e]},IS=function(e){return Us(e,"getBoundingClientRect")||(wo(e)?function(){return Su.width=ft.innerWidth,Su.height=cm,Su}:function(){return Xr(e)})},P2=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Us(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?DS(s):e["client"+s])||0}},D2=function(e,t){return!t||~Tr.indexOf(e)?IS(e):function(){return Su}},Sr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Us(e,i))?o()-IS(e)()[s]:wo(e)?(Mi[i]||bt[i])-DS(r):e[i]-e["offset"+r])},Yc=function(e,t){for(var i=0;i<ra.length;i+=3)(!t||~t.indexOf(ra[i+1]))&&e(ra[i],ra[i+1],ra[i+2])},Si=function(e){return typeof e=="string"},Bn=function(e){return typeof e=="function"},dl=function(e){return typeof e=="number"},oo=function(e){return typeof e=="object"},il=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Ed=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Qo=Math.abs,LS="left",NS="top",um="right",fm="bottom",Eo="width",bo="height",Pl="Right",Dl="Left",Il="Top",Ll="Bottom",on="padding",Oi="margin",Oa="Width",dm="Height",dn="px",Bi=function(e){return ft.getComputedStyle(e)},I2=function(e){var t=Bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Wg=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Xr=function(e,t){var i=t&&Bi(e)[ip]!=="matrix(1, 0, 0, 1, 0, 0)"&&He.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},qu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},US=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},L2=function(e){return function(t){return He.utils.snap(US(e),t)}},hm=function(e){var t=He.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},N2=function(e){return function(t,i){return hm(US(e))(t,i.direction)}},$c=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},yn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},Sn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Kc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Xg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jc={toggleActions:"play",anticipatePin:0},Yu={top:0,left:0,center:.5,bottom:1,right:1},_u=function(e,t){if(Si(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Yu?Yu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Zc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,m=Bt.createElement("div"),g=wo(i)||Us(i,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=g?bt:i,v=e.indexOf("start")!==-1,E=v?c:u,y="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(y+=(r===hn?um:fm)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=v,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=y,m.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(m,_.children[0]):_.appendChild(m),m._offset=m["offset"+r.op.d2],gu(m,0,r,v),m},gu=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Oa]=1,s["border"+a+Oa]=0,s[i.p]=t+"px",He.set(e,s)},ut=[],ap={},nc,qg=function(){return Ln()-Wi>34&&(nc||(nc=requestAnimationFrame(Zr)))},ea=function(){(!$n||!$n.isPressed||$n.startX>bt.clientWidth)&&(dt.cache++,$n?nc||(nc=requestAnimationFrame(Zr)):Zr(),Wi||Ro("scrollStart"),Wi=Ln())},bd=function(){CS=ft.innerWidth,wS=ft.innerHeight},hl=function(e){dt.cache++,(e===!0||!In&&!AS&&!Bt.fullscreenElement&&!Bt.webkitFullscreenElement&&(!rp||CS!==ft.innerWidth||Math.abs(ft.innerHeight-wS)>ft.innerHeight*.25))&&Xu.restart(!0)},Co={},U2=[],FS=function n(){return Sn(ht,"scrollEnd",n)||_o(!0)},Ro=function(e){return Co[e]&&Co[e].map(function(t){return t()})||U2},xi=[],OS=function(e){for(var t=0;t<xi.length;t+=5)(!e||xi[t+4]&&xi[t+4].query===e)&&(xi[t].style.cssText=xi[t+1],xi[t].getBBox&&xi[t].setAttribute("transform",xi[t+2]||""),xi[t+3].uncache=1)},BS=function(){return dt.forEach(function(e){return Bn(e)&&++e.cacheID&&(e.rec=e())})},pm=function(e,t){var i;for(Kn=0;Kn<ut.length;Kn++)i=ut[Kn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Rl=!0,t&&OS(t),t||Ro("revert")},kS=function(e,t){dt.cache++,(t||!jn)&&dt.forEach(function(i){return Bn(i)&&i.cacheID++&&(i.rec=0)}),Si(e)&&(ft.history.scrollRestoration=lm=e)},jn,To=0,Yg,F2=function(){if(Yg!==To){var e=Yg=To;requestAnimationFrame(function(){return e===To&&_o(!0)})}},zS=function(){bt.appendChild(Sa),cm=!$n&&Sa.offsetHeight||ft.innerHeight,bt.removeChild(Sa)},$g=function(e){return tc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},_o=function(e,t){if(Mi=Bt.documentElement,bt=Bt.body,am=[ft,Bt,Mi,bt],Wi&&!e&&!Rl){yn(ht,"scrollEnd",FS);return}zS(),jn=ht.isRefreshing=!0,Rl||BS();var i=Ro("refreshInit");TS&&ht.sort(),t||pm(),dt.forEach(function(r){Bn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ut.slice(0).forEach(function(r){return r.refresh()}),Rl=!1,ut.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),op=1,$g(!0),ut.forEach(function(r){var s=Sr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),$g(!1),op=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),dt.forEach(function(r){Bn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),kS(lm,1),Xu.pause(),To++,jn=2,Zr(2),ut.forEach(function(r){return Bn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),jn=ht.isRefreshing=!1,Ro("refresh")},lp=0,vu=1,Nl,Zr=function(e){if(e===2||!jn&&!Rl){ht.isUpdating=!0,Nl&&Nl.update(0);var t=ut.length,i=Ln(),r=i-Md>=50,s=t&&ut[0].scroll();if(vu=lp>s?-1:1,jn||(lp=s),r&&(Wi&&!mf&&i-Wi>200&&(Wi=0,Ro("scrollEnd")),cl=Md,Md=i),vu<0){for(Kn=t;Kn-- >0;)ut[Kn]&&ut[Kn].update(0,r);vu=1}else for(Kn=0;Kn<t;Kn++)ut[Kn]&&ut[Kn].update(0,r);ht.isUpdating=!1}nc=0},cp=[LS,NS,fm,um,Oi+Ll,Oi+Pl,Oi+Il,Oi+Dl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xu=cp.concat([Eo,bo,"boxSizing","max"+Oa,"max"+dm,"position",Oi,on,on+Il,on+Pl,on+Ll,on+Dl]),O2=function(e,t,i){ya(i);var r=e._gsap;if(r.spacerIsNative)ya(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Td=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=cp.length,o=t.style,a=e.style,l;s--;)l=cp[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[fm]=a[um]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Eo]=qu(e,ei)+dn,o[bo]=qu(e,hn)+dn,o[on]=a[Oi]=a[NS]=a[LS]="0",ya(r),a[Eo]=a["max"+Oa]=i[Eo],a[bo]=a["max"+dm]=i[bo],a[on]=i[on],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},B2=/([A-Z])/g,ya=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||He.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(B2,"-$1").toLowerCase())}},Jc=function(e){for(var t=xu.length,i=e.style,r=[],s=0;s<t;s++)r.push(xu[s],i[xu[s]]);return r.t=e,r},k2=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Su={left:0,top:0},Kg=function(e,t,i,r,s,o,a,l,c,u,d,f,h,m){Bn(e)&&(e=e(l)),Si(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?_u("0"+e.substr(3),i):0));var g=h?h.time():0,p,_,v;if(h&&h.seek(0),isNaN(e)||(e=+e),dl(e))h&&(e=He.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),a&&gu(a,i,r,!0);else{Bn(t)&&(t=t(l));var E=(e||"0").split(" "),y,A,R,w;v=oi(t,l)||bt,y=Xr(v)||{},(!y||!y.left&&!y.top)&&Bi(v).display==="none"&&(w=v.style.display,v.style.display="block",y=Xr(v),w?v.style.display=w:v.style.removeProperty("display")),A=_u(E[0],y[r.d]),R=_u(E[1]||"0",i),e=y[r.p]-c[r.p]-u+A+s-R,a&&gu(a,R,r,i-R<20||a._isStart&&R>20),i-=i-R}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var S=e+i,M=o._isStart;p="scroll"+r.d2,gu(o,S,r,M&&S>20||!M&&(d?Math.max(bt[p],Mi[p]):o.parentNode[p])<=S+1),d&&(c=Xr(a),d&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+dn))}return h&&v&&(p=Xr(v),h.seek(f),_=Xr(v),h._caScrollDist=p[r.p]-_[r.p],e=e/h._caScrollDist*f),h&&h.seek(g),h?e:Math.round(e)},z2=/(webkit|moz|length|cssText|inset)/i,jg=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===bt){e._stOrig=s.cssText,a=Bi(e);for(o in a)!+o&&!z2.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;He.core.getCache(e).uncache=1,t.appendChild(e)}},VS=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Qc=function(e,t,i){var r={};r[t.p]="+="+i,He.set(e,r)},Zg=function(e,t){var i=Vs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,d){var f=o.tween,h=l.onComplete,m={};c=c||i();var g=VS(i,c,function(){f.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=m,m[r]=function(){return g(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){dt.cache++,o.tween&&Zr()},l.onComplete=function(){o.tween=0,h&&h.call(f)},f=o.tween=He.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},yn(e,"wheel",i.wheelHandler),ht.isTouch&&yn(e,"touchmove",i.wheelHandler),s},ht=function(){function n(t,i){ia||n.register(He)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),sp(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ul){this.update=this.refresh=this.kill=dr;return}i=Wg(Si(i)||dl(i)||i.nodeType?{trigger:i}:i,jc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,m=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,_=s.onScrubComplete,v=s.onSnapComplete,E=s.once,y=s.snap,A=s.pinReparent,R=s.pinSpacer,w=s.containerAnimation,S=s.fastScrollEnd,M=s.preventOverlaps,O=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ei:hn,L=!d&&d!==0,D=oi(i.scroller||ft),H=He.core.getCache(D),q=wo(D),G=("pinType"in i?i.pinType:Us(D,"pinType")||q&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],B=L&&i.toggleActions.split(" "),ne="markers"in i?i.markers:jc.markers,fe=q?0:parseFloat(Bi(D)["border"+O.p2+Oa])||0,F=this,ge=i.onRefreshInit&&function(){return i.onRefreshInit(F)},ve=P2(D,q,O),be=D2(D,q),De=0,Ne=0,$=0,z=Vs(D,O),Y,le,he,xe,I,P,V,J,j,N,C,ae,ce,ee,de,T,x,U,Z,ie,K,Me,pe,Be,Ae,me,Se,Te,Pe,we,Ke,k,Ee,ye,Ie,_e,ue,ke,qe;if(F._startClamp=F._endClamp=!1,F._dir=O,p*=45,F.scroller=D,F.scroll=w?w.time.bind(w):z,xe=z(),F.vars=i,r=r||i.animation,"refreshPriority"in i&&(TS=1,i.refreshPriority===-9999&&(Nl=F)),H.tweenScroll=H.tweenScroll||{top:Zg(D,hn),left:Zg(D,ei)},F.tweenTo=Y=H.tweenScroll[O.p],F.scrubDuration=function(Ue){Ee=dl(Ue)&&Ue,Ee?k?k.duration(Ue):k=He.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ee,paused:!0,onComplete:function(){return _&&_(F)}}):(k&&k.progress(1).kill(),k=0)},r&&(r.vars.lazy=!1,r._initted&&!F.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),F.animation=r.pause(),r.scrollTrigger=F,F.scrubDuration(d),we=0,l||(l=r.vars.id)),y&&((!oo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in bt.style&&He.set(q?[bt,Mi]:D,{scrollBehavior:"auto"}),dt.forEach(function(Ue){return Bn(Ue)&&Ue.target===(q?Bt.scrollingElement||Mi:D)&&(Ue.smooth=!1)}),he=Bn(y.snapTo)?y.snapTo:y.snapTo==="labels"?L2(r):y.snapTo==="labelsDirectional"?N2(r):y.directional!==!1?function(Ue,Je){return hm(y.snapTo)(Ue,Ln()-Ne<500?0:Je.direction)}:He.utils.snap(y.snapTo),ye=y.duration||{min:.1,max:2},ye=oo(ye)?Cl(ye.min,ye.max):Cl(ye,ye),Ie=He.delayedCall(y.delay||Ee/2||.1,function(){var Ue=z(),Je=Ln()-Ne<500,Ye=Y.tween;if((Je||Math.abs(F.getVelocity())<10)&&!Ye&&!mf&&De!==Ue){var Qe=(Ue-P)/ee,Qt=r&&!L?r.totalProgress():Qe,nt=Je?0:(Qt-Ke)/(Ln()-cl)*1e3||0,Vt=He.utils.clamp(-Qe,1-Qe,Qo(nt/2)*nt/.185),ln=Qe+(y.inertia===!1?0:Vt),Ht,Ct,Mt=y,wn=Mt.onStart,Ot=Mt.onInterrupt,Cn=Mt.onComplete;if(Ht=he(ln,F),dl(Ht)||(Ht=ln),Ct=Math.max(0,Math.round(P+Ht*ee)),Ue<=V&&Ue>=P&&Ct!==Ue){if(Ye&&!Ye._initted&&Ye.data<=Qo(Ct-Ue))return;y.inertia===!1&&(Vt=Ht-Qe),Y(Ct,{duration:ye(Qo(Math.max(Qo(ln-Qt),Qo(Ht-Qt))*.185/nt/.05||0)),ease:y.ease||"power3",data:Qo(Ct-Ue),onInterrupt:function(){return Ie.restart(!0)&&Ot&&Ot(F)},onComplete:function(){F.update(),De=z(),r&&!L&&(k?k.resetTo("totalProgress",Ht,r._tTime/r._tDur):r.progress(Ht)),we=Ke=r&&!L?r.totalProgress():F.progress,v&&v(F),Cn&&Cn(F)}},Ue,Vt*ee,Ct-Ue-Vt*ee),wn&&wn(F,Y.tween)}}else F.isActive&&De!==Ue&&Ie.restart(!0)}).pause()),l&&(ap[l]=F),f=F.trigger=oi(f||h!==!0&&h),qe=f&&f._gsap&&f._gsap.stRevert,qe&&(qe=qe(F)),h=h===!0?f:oi(h),Si(a)&&(a={targets:f,className:a}),h&&(m===!1||m===Oi||(m=!m&&h.parentNode&&h.parentNode.style&&Bi(h.parentNode).display==="flex"?!1:on),F.pin=h,le=He.core.getCache(h),le.spacer?de=le.pinState:(R&&(R=oi(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),le.spacerIsNative=!!R,R&&(le.spacerState=Jc(R))),le.spacer=U=R||Bt.createElement("div"),U.classList.add("pin-spacer"),l&&U.classList.add("pin-spacer-"+l),le.pinState=de=Jc(h)),i.force3D!==!1&&He.set(h,{force3D:!0}),F.spacer=U=le.spacer,Pe=Bi(h),Be=Pe[m+O.os2],ie=He.getProperty(h),K=He.quickSetter(h,O.a,dn),Td(h,U,Pe),x=Jc(h)),ne){ae=oo(ne)?Wg(ne,Xg):Xg,N=Zc("scroller-start",l,D,O,ae,0),C=Zc("scroller-end",l,D,O,ae,0,N),Z=N["offset"+O.op.d2];var vt=oi(Us(D,"content")||D);J=this.markerStart=Zc("start",l,vt,O,ae,Z,0,w),j=this.markerEnd=Zc("end",l,vt,O,ae,Z,0,w),w&&(ke=He.quickSetter([J,j],O.a,dn)),!G&&!(Tr.length&&Us(D,"fixedMarkers")===!0)&&(I2(q?bt:D),He.set([N,C],{force3D:!0}),me=He.quickSetter(N,O.a,dn),Te=He.quickSetter(C,O.a,dn))}if(w){var Oe=w.vars.onUpdate,Ge=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){F.update(0,0,1),Oe&&Oe.apply(w,Ge||[])})}if(F.previous=function(){return ut[ut.indexOf(F)-1]},F.next=function(){return ut[ut.indexOf(F)+1]},F.revert=function(Ue,Je){if(!Je)return F.kill(!0);var Ye=Ue!==!1||!F.enabled,Qe=In;Ye!==F.isReverted&&(Ye&&(_e=Math.max(z(),F.scroll.rec||0),$=F.progress,ue=r&&r.progress()),J&&[J,j,N,C].forEach(function(Qt){return Qt.style.display=Ye?"none":"block"}),Ye&&(In=F,F.update(Ye)),h&&(!A||!F.isActive)&&(Ye?O2(h,U,de):Td(h,U,Bi(h),Ae)),Ye||F.update(Ye),In=Qe,F.isReverted=Ye)},F.refresh=function(Ue,Je,Ye,Qe){if(!((In||!F.enabled)&&!Je)){if(h&&Ue&&Wi){yn(n,"scrollEnd",FS);return}!jn&&ge&&ge(F),In=F,Y.tween&&!Ye&&(Y.tween.kill(),Y.tween=0),k&&k.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(ze){return ze.vars.immediateRender&&ze.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),F.isReverted||F.revert(!0,!0),F._subPinOffset=!1;var Qt=ve(),nt=be(),Vt=w?w.duration():Sr(D,O),ln=ee<=.01||!ee,Ht=0,Ct=Qe||0,Mt=oo(Ye)?Ye.end:i.end,wn=i.endTrigger||f,Ot=oo(Ye)?Ye.start:i.start||(i.start===0||!f?0:h?"0 0":"0 100%"),Cn=F.pinnedContainer=i.pinnedContainer&&oi(i.pinnedContainer,F),Di=f&&Math.max(0,ut.indexOf(F))||0,cn=Di,un,gn,Pr,No,b,X,se,te,Q,Ce,Le,Re,Ve;for(ne&&oo(Ye)&&(Re=He.getProperty(N,O.p),Ve=He.getProperty(C,O.p));cn-- >0;)X=ut[cn],X.end||X.refresh(0,1)||(In=F),se=X.pin,se&&(se===f||se===h||se===Cn)&&!X.isReverted&&(Ce||(Ce=[]),Ce.unshift(X),X.revert(!0,!0)),X!==ut[cn]&&(Di--,cn--);for(Bn(Ot)&&(Ot=Ot(F)),Ot=zg(Ot,"start",F),P=Kg(Ot,f,Qt,O,z(),J,N,F,nt,fe,G,Vt,w,F._startClamp&&"_startClamp")||(h?-.001:0),Bn(Mt)&&(Mt=Mt(F)),Si(Mt)&&!Mt.indexOf("+=")&&(~Mt.indexOf(" ")?Mt=(Si(Ot)?Ot.split(" ")[0]:"")+Mt:(Ht=_u(Mt.substr(2),Qt),Mt=Si(Ot)?Ot:(w?He.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,P):P)+Ht,wn=f)),Mt=zg(Mt,"end",F),V=Math.max(P,Kg(Mt||(wn?"100% 0":Vt),wn,Qt,O,z()+Ht,j,C,F,nt,fe,G,Vt,w,F._endClamp&&"_endClamp"))||-.001,Ht=0,cn=Di;cn--;)X=ut[cn]||{},se=X.pin,se&&X.start-X._pinPush<=P&&!w&&X.end>0&&(un=X.end-(F._startClamp?Math.max(0,X.start):X.start),(se===f&&X.start-X._pinPush<P||se===Cn)&&isNaN(Ot)&&(Ht+=un*(1-X.progress)),se===h&&(Ct+=un));if(P+=Ht,V+=Ht,F._startClamp&&(F._startClamp+=Ht),F._endClamp&&!jn&&(F._endClamp=V||-.001,V=Math.min(V,Sr(D,O))),ee=V-P||(P-=.01)&&.001,ln&&($=He.utils.clamp(0,1,He.utils.normalize(P,V,_e))),F._pinPush=Ct,J&&Ht&&(un={},un[O.a]="+="+Ht,Cn&&(un[O.p]="-="+z()),He.set([J,j],un)),h&&!(op&&F.end>=Sr(D,O)))un=Bi(h),No=O===hn,Pr=z(),Me=parseFloat(ie(O.a))+Ct,!Vt&&V>1&&(Le=(q?Bt.scrollingElement||Mi:D).style,Le={style:Le,value:Le["overflow"+O.a.toUpperCase()]},q&&Bi(bt)["overflow"+O.a.toUpperCase()]!=="scroll"&&(Le.style["overflow"+O.a.toUpperCase()]="scroll")),Td(h,U,un),x=Jc(h),gn=Xr(h,!0),te=G&&Vs(D,No?ei:hn)(),m?(Ae=[m+O.os2,ee+Ct+dn],Ae.t=U,cn=m===on?qu(h,O)+ee+Ct:0,cn&&(Ae.push(O.d,cn+dn),U.style.flexBasis!=="auto"&&(U.style.flexBasis=cn+dn)),ya(Ae),Cn&&ut.forEach(function(ze){ze.pin===Cn&&ze.vars.pinSpacing!==!1&&(ze._subPinOffset=!0)}),G&&z(_e)):(cn=qu(h,O),cn&&U.style.flexBasis!=="auto"&&(U.style.flexBasis=cn+dn)),G&&(b={top:gn.top+(No?Pr-P:te)+dn,left:gn.left+(No?te:Pr-P)+dn,boxSizing:"border-box",position:"fixed"},b[Eo]=b["max"+Oa]=Math.ceil(gn.width)+dn,b[bo]=b["max"+dm]=Math.ceil(gn.height)+dn,b[Oi]=b[Oi+Il]=b[Oi+Pl]=b[Oi+Ll]=b[Oi+Dl]="0",b[on]=un[on],b[on+Il]=un[on+Il],b[on+Pl]=un[on+Pl],b[on+Ll]=un[on+Ll],b[on+Dl]=un[on+Dl],T=k2(de,b,A),jn&&z(0)),r?(Q=r._initted,Sd(1),r.render(r.duration(),!0,!0),pe=ie(O.a)-Me+ee+Ct,Se=Math.abs(ee-pe)>1,G&&Se&&T.splice(T.length-2,2),r.render(0,!0,!0),Q||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Sd(0)):pe=ee,Le&&(Le.value?Le.style["overflow"+O.a.toUpperCase()]=Le.value:Le.style.removeProperty("overflow-"+O.a));else if(f&&z()&&!w)for(gn=f.parentNode;gn&&gn!==bt;)gn._pinOffset&&(P-=gn._pinOffset,V-=gn._pinOffset),gn=gn.parentNode;Ce&&Ce.forEach(function(ze){return ze.revert(!1,!0)}),F.start=P,F.end=V,xe=I=jn?_e:z(),!w&&!jn&&(xe<_e&&z(_e),F.scroll.rec=0),F.revert(!1,!0),Ne=Ln(),Ie&&(De=-1,Ie.restart(!0)),In=0,r&&L&&(r._initted||ue)&&r.progress()!==ue&&r.progress(ue||0,!0).render(r.time(),!0,!0),(ln||$!==F.progress||w||g||r&&!r._initted)&&(r&&!L&&(r._initted||$||r.vars.immediateRender!==!1)&&r.totalProgress(w&&P<-.001&&!$?He.utils.normalize(P,V,0):$,!0),F.progress=ln||(xe-P)/ee===$?0:$),h&&m&&(U._pinOffset=Math.round(F.progress*pe)),k&&k.invalidate(),isNaN(Re)||(Re-=He.getProperty(N,O.p),Ve-=He.getProperty(C,O.p),Qc(N,O,Re),Qc(J,O,Re-(Qe||0)),Qc(C,O,Ve),Qc(j,O,Ve-(Qe||0))),ln&&!jn&&F.update(),u&&!jn&&!ce&&(ce=!0,u(F),ce=!1)}},F.getVelocity=function(){return(z()-I)/(Ln()-cl)*1e3||0},F.endAnimation=function(){il(F.callbackAnimation),r&&(k?k.progress(1):r.paused()?L||il(r,F.direction<0,1):il(r,r.reversed()))},F.labelToScroll=function(Ue){return r&&r.labels&&(P||F.refresh()||P)+r.labels[Ue]/r.duration()*ee||0},F.getTrailing=function(Ue){var Je=ut.indexOf(F),Ye=F.direction>0?ut.slice(0,Je).reverse():ut.slice(Je+1);return(Si(Ue)?Ye.filter(function(Qe){return Qe.vars.preventOverlaps===Ue}):Ye).filter(function(Qe){return F.direction>0?Qe.end<=P:Qe.start>=V})},F.update=function(Ue,Je,Ye){if(!(w&&!Ye&&!Ue)){var Qe=jn===!0?_e:F.scroll(),Qt=Ue?0:(Qe-P)/ee,nt=Qt<0?0:Qt>1?1:Qt||0,Vt=F.progress,ln,Ht,Ct,Mt,wn,Ot,Cn,Di;if(Je&&(I=xe,xe=w?z():Qe,y&&(Ke=we,we=r&&!L?r.totalProgress():nt)),p&&h&&!In&&!qc&&Wi&&(!nt&&P<Qe+(Qe-I)/(Ln()-cl)*p?nt=1e-4:nt===1&&V>Qe+(Qe-I)/(Ln()-cl)*p&&(nt=.9999)),nt!==Vt&&F.enabled){if(ln=F.isActive=!!nt&&nt<1,Ht=!!Vt&&Vt<1,Ot=ln!==Ht,wn=Ot||!!nt!=!!Vt,F.direction=nt>Vt?1:-1,F.progress=nt,wn&&!In&&(Ct=nt&&!Vt?0:nt===1?1:Vt===1?2:3,L&&(Mt=!Ot&&B[Ct+1]!=="none"&&B[Ct+1]||B[Ct],Di=r&&(Mt==="complete"||Mt==="reset"||Mt in r))),M&&(Ot||Di)&&(Di||d||!r)&&(Bn(M)?M(F):F.getTrailing(M).forEach(function(Pr){return Pr.endAnimation()})),L||(k&&!In&&!qc?(k._dp._time-k._start!==k._time&&k.render(k._dp._time-k._start),k.resetTo?k.resetTo("totalProgress",nt,r._tTime/r._tDur):(k.vars.totalProgress=nt,k.invalidate().restart())):r&&r.totalProgress(nt,!!(In&&(Ne||Ue)))),h){if(Ue&&m&&(U.style[m+O.os2]=Be),!G)K(fl(Me+pe*nt));else if(wn){if(Cn=!Ue&&nt>Vt&&V+1>Qe&&Qe+1>=Sr(D,O),A)if(!Ue&&(ln||Cn)){var cn=Xr(h,!0),un=Qe-P;jg(h,bt,cn.top+(O===hn?un:0)+dn,cn.left+(O===hn?0:un)+dn)}else jg(h,U);ya(ln||Cn?T:x),Se&&nt<1&&ln||K(Me+(nt===1&&!Cn?pe:0))}}y&&!Y.tween&&!In&&!qc&&Ie.restart(!0),a&&(Ot||E&&nt&&(nt<1||!yd))&&tc(a.targets).forEach(function(Pr){return Pr.classList[ln||E?"add":"remove"](a.className)}),o&&!L&&!Ue&&o(F),wn&&!In?(L&&(Di&&(Mt==="complete"?r.pause().totalProgress(1):Mt==="reset"?r.restart(!0).pause():Mt==="restart"?r.restart(!0):r[Mt]()),o&&o(F)),(Ot||!yd)&&(c&&Ot&&Ed(F,c),W[Ct]&&Ed(F,W[Ct]),E&&(nt===1?F.kill(!1,1):W[Ct]=0),Ot||(Ct=nt===1?1:3,W[Ct]&&Ed(F,W[Ct]))),S&&!ln&&Math.abs(F.getVelocity())>(dl(S)?S:2500)&&(il(F.callbackAnimation),k?k.progress(1):il(r,Mt==="reverse"?1:!nt,1))):L&&o&&!In&&o(F)}if(Te){var gn=w?Qe/w.duration()*(w._caScrollDist||0):Qe;me(gn+(N._isFlipped?1:0)),Te(gn)}ke&&ke(-Qe/w.duration()*(w._caScrollDist||0))}},F.enable=function(Ue,Je){F.enabled||(F.enabled=!0,yn(D,"resize",hl),q||yn(D,"scroll",ea),ge&&yn(n,"refreshInit",ge),Ue!==!1&&(F.progress=$=0,xe=I=De=z()),Je!==!1&&F.refresh())},F.getTween=function(Ue){return Ue&&Y?Y.tween:k},F.setPositions=function(Ue,Je,Ye,Qe){if(w){var Qt=w.scrollTrigger,nt=w.duration(),Vt=Qt.end-Qt.start;Ue=Qt.start+Vt*Ue/nt,Je=Qt.start+Vt*Je/nt}F.refresh(!1,!1,{start:Vg(Ue,Ye&&!!F._startClamp),end:Vg(Je,Ye&&!!F._endClamp)},Qe),F.update()},F.adjustPinSpacing=function(Ue){if(Ae&&Ue){var Je=Ae.indexOf(O.d)+1;Ae[Je]=parseFloat(Ae[Je])+Ue+dn,Ae[1]=parseFloat(Ae[1])+Ue+dn,ya(Ae)}},F.disable=function(Ue,Je){if(Ue!==!1&&F.revert(!0,!0),F.enabled&&(F.enabled=F.isActive=!1,Je||k&&k.pause(),_e=0,le&&(le.uncache=1),ge&&Sn(n,"refreshInit",ge),Ie&&(Ie.pause(),Y.tween&&Y.tween.kill()&&(Y.tween=0)),!q)){for(var Ye=ut.length;Ye--;)if(ut[Ye].scroller===D&&ut[Ye]!==F)return;Sn(D,"resize",hl),q||Sn(D,"scroll",ea)}},F.kill=function(Ue,Je){F.disable(Ue,Je),k&&!Je&&k.kill(),l&&delete ap[l];var Ye=ut.indexOf(F);Ye>=0&&ut.splice(Ye,1),Ye===Kn&&vu>0&&Kn--,Ye=0,ut.forEach(function(Qe){return Qe.scroller===F.scroller&&(Ye=1)}),Ye||jn||(F.scroll.rec=0),r&&(r.scrollTrigger=null,Ue&&r.revert({kill:!1}),Je||r.kill()),J&&[J,j,N,C].forEach(function(Qe){return Qe.parentNode&&Qe.parentNode.removeChild(Qe)}),Nl===F&&(Nl=0),h&&(le&&(le.uncache=1),Ye=0,ut.forEach(function(Qe){return Qe.pin===h&&Ye++}),Ye||(le.spacer=0)),i.onKill&&i.onKill(F)},ut.push(F),F.enable(!1,!1),qe&&qe(F),r&&r.add&&!ee){var st=F.update;F.update=function(){F.update=st,dt.cache++,P||V||F.refresh()},He.delayedCall(.01,F.update),ee=.01,P=V=0}else F.refresh();h&&F2()},n.register=function(i){return ia||(He=i||PS(),RS()&&window.document&&n.enable(),ia=ul),ia},n.defaults=function(i){if(i)for(var r in i)jc[r]=i[r];return jc},n.disable=function(i,r){ul=0,ut.forEach(function(o){return o[r?"kill":"disable"](i)}),Sn(ft,"wheel",ea),Sn(Bt,"scroll",ea),clearInterval(Xc),Sn(Bt,"touchcancel",dr),Sn(bt,"touchstart",dr),$c(Sn,Bt,"pointerdown,touchstart,mousedown",Hg),$c(Sn,Bt,"pointerup,touchend,mouseup",Gg),Xu.kill(),Yc(Sn);for(var s=0;s<dt.length;s+=3)Kc(Sn,dt[s],dt[s+1]),Kc(Sn,dt[s],dt[s+2])},n.enable=function(){if(ft=window,Bt=document,Mi=Bt.documentElement,bt=Bt.body,He&&(tc=He.utils.toArray,Cl=He.utils.clamp,sp=He.core.context||dr,Sd=He.core.suppressOverwrites||dr,lm=ft.history.scrollRestoration||"auto",lp=ft.pageYOffset||0,He.core.globals("ScrollTrigger",n),bt)){ul=1,Sa=document.createElement("div"),Sa.style.height="100vh",Sa.style.position="absolute",zS(),R2(),rn.register(He),n.isTouch=rn.isTouch,vs=rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),rp=rn.isTouch===1,yn(ft,"wheel",ea),am=[ft,Bt,Mi,bt],He.matchMedia?(n.matchMedia=function(c){var u=He.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},He.addEventListener("matchMediaInit",function(){BS(),pm()}),He.addEventListener("matchMediaRevert",function(){return OS()}),He.addEventListener("matchMedia",function(){_o(0,1),Ro("matchMedia")}),He.matchMedia().add("(orientation: portrait)",function(){return bd(),bd})):console.warn("Requires GSAP 3.11.0 or later"),bd(),yn(Bt,"scroll",ea);var i=bt.hasAttribute("style"),r=bt.style,s=r.borderTopStyle,o=He.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Xr(bt),hn.m=Math.round(a.top+hn.sc())||0,ei.m=Math.round(a.left+ei.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(bt.setAttribute("style",""),bt.removeAttribute("style")),Xc=setInterval(qg,250),He.delayedCall(.5,function(){return qc=0}),yn(Bt,"touchcancel",dr),yn(bt,"touchstart",dr),$c(yn,Bt,"pointerdown,touchstart,mousedown",Hg),$c(yn,Bt,"pointerup,touchend,mouseup",Gg),ip=He.utils.checkPrefix("transform"),xu.push(ip),ia=Ln(),Xu=He.delayedCall(.2,_o).pause(),ra=[Bt,"visibilitychange",function(){var c=ft.innerWidth,u=ft.innerHeight;Bt.hidden?(Bg=c,kg=u):(Bg!==c||kg!==u)&&hl()},Bt,"DOMContentLoaded",_o,ft,"load",_o,ft,"resize",hl],Yc(yn),ut.forEach(function(c){return c.enable(0,1)}),l=0;l<dt.length;l+=3)Kc(Sn,dt[l],dt[l+1]),Kc(Sn,dt[l],dt[l+2])}},n.config=function(i){"limitCallbacks"in i&&(yd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Xc)||(Xc=r)&&setInterval(qg,r),"ignoreMobileResize"in i&&(rp=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Yc(Sn)||Yc(yn,i.autoRefreshEvents||"none"),AS=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=oi(i),o=dt.indexOf(s),a=wo(s);~o&&dt.splice(o,a?6:2),r&&(a?Tr.unshift(ft,r,bt,r,Mi,r):Tr.unshift(s,r))},n.clearMatchMedia=function(i){ut.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Si(i)?oi(i):i).getBoundingClientRect(),a=o[s?Eo:bo]*r||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},n.positionInViewport=function(i,r,s){Si(i)&&(i=oi(i));var o=i.getBoundingClientRect(),a=o[s?Eo:bo],l=r==null?a/2:r in Yu?Yu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},n.killAll=function(i){if(ut.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Co.killAll||[];Co={},r.forEach(function(s){return s()})}},n}();ht.version="3.14.2";ht.saveStyles=function(n){return n?tc(n).forEach(function(e){if(e&&e.style){var t=xi.indexOf(e);t>=0&&xi.splice(t,5),xi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),He.core.getCache(e),sp())}}):xi};ht.revert=function(n,e){return pm(!n,e)};ht.create=function(n,e){return new ht(n,e)};ht.refresh=function(n){return n?hl(!0):(ia||ht.register())&&_o(!0)};ht.update=function(n){return++dt.cache&&Zr(n===!0?2:0)};ht.clearScrollMemory=kS;ht.maxScroll=function(n,e){return Sr(n,e?ei:hn)};ht.getScrollFunc=function(n,e){return Vs(oi(n),e?ei:hn)};ht.getById=function(n){return ap[n]};ht.getAll=function(){return ut.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ht.isScrolling=function(){return!!Wi};ht.snapDirectional=hm;ht.addEventListener=function(n,e){var t=Co[n]||(Co[n]=[]);~t.indexOf(e)||t.push(e)};ht.removeEventListener=function(n,e){var t=Co[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ht.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var d=[],f=[],h=He.delayedCall(r,function(){u(d,f),d=[],f=[]}).pause();return function(m){d.length||h.restart(!0),d.push(m.trigger),f.push(m),s<=d.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Bn(s)&&(s=s(),yn(ht,"refresh",function(){return s=e.batchMax()})),tc(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ht.create(c))}),t};var Jg=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Ad=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(rn.isTouch?" pinch-zoom":""):"none",e===Mi&&n(bt,t)},eu={auto:1,scroll:1},V2=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||He.core.getCache(s),a=Ln(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==bt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(eu[(l=Bi(s)).overflowY]||eu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!wo(s)&&(eu[(l=Bi(s)).overflowY]||eu[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},HS=function(e,t,i,r){return rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&V2,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&yn(Bt,rn.eventTypes[0],e0,!1,!0)},onDisable:function(){return Sn(Bt,rn.eventTypes[0],e0,!0)}})},H2=/(input|label|select|textarea)/i,Qg,e0=function(e){var t=H2.test(e.target.tagName);(t||Qg)&&(e._gsapAllow=!0,Qg=t)},G2=function(e){oo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=oi(e.target)||Mi,u=He.core.globals().ScrollSmoother,d=u&&u.get(),f=vs&&(e.content&&oi(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Vs(c,hn),m=Vs(c,ei),g=1,p=(rn.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,_=0,v=Bn(r)?function(){return r(a)}:function(){return r||2.8},E,y,A=HS(c,e.type,!0,s),R=function(){return y=!1},w=dr,S=dr,M=function(){l=Sr(c,hn),S=Cl(vs?1:0,l),i&&(w=Cl(0,Sr(c,ei))),E=To},O=function(){f._gsap.y=fl(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},L=function(){if(y){requestAnimationFrame(R);var ne=fl(a.deltaY/2),fe=S(h.v-ne);if(f&&fe!==h.v+h.offset){h.offset=fe-h.v;var F=fl((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+F+", 0, 1)",f._gsap.y=F+"px",h.cacheID=dt.cache,Zr()}return!0}h.offset&&O(),y=!0},D,H,q,G,W=function(){M(),D.isActive()&&D.vars.scrollY>l&&(h()>l?D.progress(1)&&h(l):D.resetTo("scrollY",l))};return f&&He.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return vs&&B.type==="touchmove"&&L()||g>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){y=!1;var B=g;g=fl((ft.visualViewport&&ft.visualViewport.scale||1)/p),D.pause(),B!==g&&Ad(c,g>1.01?!0:i?!1:"x"),H=m(),q=h(),M(),E=To},e.onRelease=e.onGestureStart=function(B,ne){if(h.offset&&O(),!ne)G.restart(!0);else{dt.cache++;var fe=v(),F,ge;i&&(F=m(),ge=F+fe*.05*-B.velocityX/.227,fe*=Jg(m,F,ge,Sr(c,ei)),D.vars.scrollX=w(ge)),F=h(),ge=F+fe*.05*-B.velocityY/.227,fe*=Jg(h,F,ge,Sr(c,hn)),D.vars.scrollY=S(ge),D.invalidate().duration(fe).play(.01),(vs&&D.vars.scrollY>=l||F>=l-1)&&He.to({},{onUpdate:W,duration:fe})}o&&o(B)},e.onWheel=function(){D._ts&&D.pause(),Ln()-_>1e3&&(E=0,_=Ln())},e.onChange=function(B,ne,fe,F,ge){if(To!==E&&M(),ne&&i&&m(w(F[2]===ne?H+(B.startX-B.x):m()+ne-F[1])),fe){h.offset&&O();var ve=ge[2]===fe,be=ve?q+B.startY-B.y:h()+fe-ge[1],De=S(be);ve&&be!==De&&(q+=De-be),h(De)}(fe||ne)&&Zr()},e.onEnable=function(){Ad(c,i?!1:"x"),ht.addEventListener("refresh",W),yn(ft,"resize",W),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=m.smooth=!1),A.enable()},e.onDisable=function(){Ad(c,!0),Sn(ft,"resize",W),ht.removeEventListener("refresh",W),A.kill()},e.lockAxis=e.lockAxis!==!1,a=new rn(e),a.iOS=vs,vs&&!h()&&h(1),vs&&He.ticker.add(dr),G=a._dc,D=He.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:VS(h,h(),function(){return D.pause()})},onUpdate:Zr,onComplete:G.vars.onComplete}),a};ht.sort=function(n){if(Bn(n))return ut.sort(n);var e=ft.pageYOffset||0;return ht.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),ut.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ht.observe=function(n){return new rn(n)};ht.normalizeScroll=function(n){if(typeof n>"u")return $n;if(n===!0&&$n)return $n.enable();if(n===!1){$n&&$n.kill(),$n=n;return}var e=n instanceof rn?n:G2(n);return $n&&$n.target===e.target&&$n.kill(),wo(e.target)&&($n=e),e};ht.core={_getVelocityProp:np,_inputObserver:HS,_scrollers:dt,_proxies:Tr,bridge:{ss:function(){Wi||Ro("scrollStart"),Wi=Ln()},ref:function(){return In}}};PS()&&He.registerPlugin(ht);It.registerPlugin(ht);let t0=!1;function W2(){Do(()=>{const n=!t0;n?(It.to(".loader-text",{opacity:1,duration:.5,onComplete:()=>{It.to(".loader-text",{scale:1.5,opacity:0,duration:.5,delay:.5}),It.to(".page-loader",{yPercent:-100,duration:.8,delay:1,ease:"power2.inOut"})}}),t0=!0):(It.set(".loader-text",{opacity:0}),It.set(".page-loader",{yPercent:-100}));const e=n?1.5:.2;It.timeline({delay:e}).to(".hero-label",{opacity:1,y:0,duration:.8}).to(".hero-subtitle",{opacity:1,y:0,duration:.8},"-=0.2").to(".cta-button",{opacity:1,y:0,duration:.8},"-=0.4").to(".scroll-indicator",{opacity:1,duration:.8},"-=0.4"),It.utils.toArray(".section-title").forEach(r=>{It.from(r.querySelector("span"),{scrollTrigger:{trigger:r,start:"top 80%"},x:-100,opacity:0,duration:1,ease:"power3.out"})}),It.utils.toArray(".about-text p").forEach((r,s)=>{It.to(r,{scrollTrigger:{trigger:r,start:"top 85%"},opacity:1,y:0,duration:.8,delay:s*.2})}),It.utils.toArray(".stat-item").forEach((r,s)=>{It.to(r,{scrollTrigger:{trigger:r,start:"top 85%"},opacity:1,y:0,duration:.8,delay:s*.1})}),It.utils.toArray(".project-item").forEach(r=>{It.to(r,{scrollTrigger:{trigger:r,start:"top 75%"},opacity:1,y:0,duration:1,ease:"power3.out"})}),It.utils.toArray(".tech-card").forEach((r,s)=>{It.to(r,{scrollTrigger:{trigger:r,start:"top 85%"},opacity:1,scale:1,duration:.6,delay:s*.1,ease:"back.out(1.7)"})}),It.utils.toArray(".timeline-item").forEach(r=>{It.to(r,{scrollTrigger:{trigger:r,start:"top 80%"},opacity:1,x:0,duration:.8,ease:"power3.out"})}),It.utils.toArray(".foundation-timeline-item").forEach((r,s)=>{It.to(r,{scrollTrigger:{trigger:r,start:"top 85%"},opacity:1,x:0,duration:.85,delay:s*.08,ease:"power3.out"})}),It.timeline({scrollTrigger:{trigger:".contact-section",start:"top 70%"}}).to(".contact-title",{opacity:1,y:0,duration:1}).to(".contact-subtitle",{opacity:1,y:0,duration:.8},"-=0.6").to(".contact-links",{opacity:1,y:0,duration:.8},"-=0.6"),It.utils.toArray(".project-visual").forEach(r=>{It.to(r,{scrollTrigger:{trigger:r,start:"top bottom",end:"bottom top",scrub:1},y:-50})})}),Io(()=>{ht.getAll().forEach(n=>n.kill()),It.killTweensOf("*")})}const X2={class:"scroll-progress"},q2={__name:"HomePage",setup(n){It.registerPlugin(Ba);const e=new Date().getFullYear(),t=ua(!1),i=ua("home"),r=ua(0),s=[{id:"home",label:"Home",number:"00"},{id:"about",label:"About",number:"01"},{id:"work",label:"Work",number:"02"},{id:"stack",label:"Stack",number:"03"},{id:"experience",label:"Experience",number:"04"},{id:"foundations",label:"Education",number:"05"},{id:"contact",label:"Contact",number:"06"}],o=ai(()=>s.filter(p=>p.id!=="home")),a=ai(()=>({transform:`scaleX(${r.value})`}));let l=null;const c=()=>{t.value=!t.value},u=()=>{t.value=!1},d=p=>{const _=document.getElementById(p);_&&(It.to(window,{scrollTo:{y:_,offsetY:p==="home"?0:80},duration:.95,ease:"power3.inOut"}),u())},f=()=>{const p=window.scrollY+window.innerHeight*.4;let _="home";s.forEach(v=>{const E=document.getElementById(v.id);E&&E.offsetTop<=p&&(_=v.id)}),i.value=_},h=()=>{const p=document.documentElement.scrollHeight-window.innerHeight;r.value=p>0?Math.min(window.scrollY/p,1):0},m=()=>{f(),h()},g=()=>{const p=s.map(_=>document.getElementById(_.id)).filter(Boolean);l=new IntersectionObserver(_=>{_.forEach(v=>{v.isIntersecting&&v.target.classList.add("is-visible")})},{threshold:.18,rootMargin:"0px 0px -12% 0px"}),p.forEach(_=>{l.observe(_)})};return Do(async()=>{document.body.classList.add("enhanced-motion"),await Mp();const p=document.getElementById("home");p&&p.classList.add("is-visible"),g(),m(),window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m)}),Io(()=>{document.body.classList.remove("enhanced-motion"),window.removeEventListener("scroll",m),window.removeEventListener("resize",m),l&&l.disconnect()}),b2(),W2(),(p,_)=>(je(),tt(qt,null,[_[0]||(_[0]=oe("div",{class:"page-loader"},[oe("div",{class:"loader-text"},"Ayomide Agbaje")],-1)),oe("div",X2,[oe("span",{class:"scroll-progress-bar",style:Ju(a.value)},null,4)]),$e(QT,{"is-menu-active":t.value,"active-section":i.value,"nav-items":o.value,onToggleMenu:c,onCloseMenu:u,onNavigate:d},null,8,["is-menu-active","active-section","nav-items"]),$e(r1,{items:s,"active-section":i.value,onNavigate:d},null,8,["active-section"]),$e(a1,{onNavigate:d}),$e(f1),$e(C1),$e(I1),$e(W1),$e(eA),$e(aA),$e(cA,{year:pt(e)},null,8,["year"])],64))}},Y2={class:"case-study-page"},$2={key:0,class:"case-study-shell"},K2={class:"case-study-header route-section is-visible"},j2={class:"case-study-kicker"},Z2={class:"case-study-hero route-section is-visible"},J2={class:"case-study-title"},Q2={class:"case-study-summary"},e3={class:"case-study-summary"},t3={class:"case-study-tags"},n3={class:"case-study-grid route-section is-visible"},i3={class:"case-study-panel"},r3={class:"case-study-text"},s3={class:"case-study-panel"},o3={class:"case-study-text"},a3={class:"case-study-grid route-section is-visible"},l3={class:"case-study-panel"},c3={class:"case-study-list"},u3={class:"case-study-panel"},f3={class:"case-study-list"},d3={class:"case-study-metrics route-section is-visible"},h3={class:"case-study-metric-value"},p3={class:"case-study-metric-label"},m3={key:1,class:"case-study-empty"},_3={__name:"CaseStudyPage",setup(n){const e=bb(),t=ai(()=>{const i=e.params.slug;return d1(typeof i=="string"?i:"")});return(i,r)=>(je(),tt("main",Y2,[t.value?(je(),tt("div",$2,[oe("header",K2,[$e(pt(Ru),{class:"case-study-back",to:"/"},{default:Ea(()=>[$e(pt(U_),{class:"case-study-back-icon"}),r[0]||(r[0]=oe("span",null,"Back to Portfolio",-1))]),_:1}),oe("span",j2,"Case Study "+At(t.value.number),1)]),oe("section",Z2,[oe("h1",J2,At(t.value.title),1),oe("p",Q2,At(t.value.summary),1),oe("p",e3,At(t.value.summarySecondary),1),oe("div",t3,[(je(!0),tt(qt,null,zi(t.value.tags,s=>(je(),tt("span",{key:s,class:"tag"},At(s),1))),128))])]),oe("section",n3,[oe("article",i3,[r[1]||(r[1]=oe("h2",{class:"case-study-section-title"},"Challenge",-1)),oe("p",r3,At(t.value.challenge),1)]),oe("article",s3,[r[2]||(r[2]=oe("h2",{class:"case-study-section-title"},"Solution",-1)),oe("p",o3,At(t.value.solution),1)])]),oe("section",a3,[oe("article",l3,[r[3]||(r[3]=oe("h2",{class:"case-study-section-title"},"Impact",-1)),oe("ul",c3,[(je(!0),tt(qt,null,zi(t.value.impact,s=>(je(),tt("li",{key:s},[$e(pt(qn),{class:"list-item-icon"}),oe("span",null,At(s),1)]))),128))])]),oe("article",u3,[r[4]||(r[4]=oe("h2",{class:"case-study-section-title"},"Architecture Notes",-1)),oe("ul",f3,[(je(!0),tt(qt,null,zi(t.value.architecture,s=>(je(),tt("li",{key:s},[$e(pt(qn),{class:"list-item-icon"}),oe("span",null,At(s),1)]))),128))])])]),oe("section",d3,[(je(!0),tt(qt,null,zi(t.value.metrics,s=>(je(),tt("article",{class:"case-study-metric",key:s.label},[oe("div",h3,At(s.value),1),oe("div",p3,At(s.label),1)]))),128))])])):(je(),tt("div",m3,[r[6]||(r[6]=oe("h1",{class:"case-study-title"},"Case Study Not Found",-1)),r[7]||(r[7]=oe("p",{class:"case-study-text"},"The requested case study does not exist.",-1)),$e(pt(Ru),{class:"case-study-back",to:"/"},{default:Ea(()=>[$e(pt(U_),{class:"case-study-back-icon"}),r[5]||(r[5]=oe("span",null,"Return to Portfolio",-1))]),_:1})]))]))}},g3=Eb({history:ib("./"),routes:[{path:"/",name:"home",component:q2},{path:"/case-study/:slug",name:"case-study",component:_3,props:!0},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior(n,e,t){return t||(n.hash?{el:n.hash,top:80,behavior:"smooth"}:{top:0})}});_E(Tb).use(g3).mount("#app");
