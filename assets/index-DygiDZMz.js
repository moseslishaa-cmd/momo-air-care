(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Wv={exports:{}},zc={},jv={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),EM=Symbol.for("react.portal"),TM=Symbol.for("react.fragment"),wM=Symbol.for("react.strict_mode"),AM=Symbol.for("react.profiler"),CM=Symbol.for("react.provider"),bM=Symbol.for("react.context"),RM=Symbol.for("react.forward_ref"),PM=Symbol.for("react.suspense"),LM=Symbol.for("react.memo"),DM=Symbol.for("react.lazy"),jp=Symbol.iterator;function IM(t){return t===null||typeof t!="object"?null:(t=jp&&t[jp]||t["@@iterator"],typeof t=="function"?t:null)}var Xv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yv=Object.assign,$v={};function oo(t,e,n){this.props=t,this.context=e,this.refs=$v,this.updater=n||Xv}oo.prototype.isReactComponent={};oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qv(){}qv.prototype=oo.prototype;function fh(t,e,n){this.props=t,this.context=e,this.refs=$v,this.updater=n||Xv}var dh=fh.prototype=new qv;dh.constructor=fh;Yv(dh,oo.prototype);dh.isPureReactComponent=!0;var Xp=Array.isArray,Kv=Object.prototype.hasOwnProperty,hh={current:null},Zv={key:!0,ref:!0,__self:!0,__source:!0};function Qv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Kv.call(e,i)&&!Zv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:_a,type:t,key:s,ref:o,props:r,_owner:hh.current}}function NM(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ph(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function UM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yp=/\/+/g;function mu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UM(""+t.key):e.toString(36)}function Il(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case EM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+mu(o,0):i,Xp(r)?(n="",t!=null&&(n=t.replace(Yp,"$&/")+"/"),Il(r,e,n,"",function(c){return c})):r!=null&&(ph(r)&&(r=NM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Yp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Xp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+mu(s,a);o+=Il(s,e,n,l,r)}else if(l=IM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+mu(s,a++),o+=Il(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var i=[],r=0;return Il(t,i,"","",function(s){return e.call(n,s,r++)}),i}function FM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Nl={transition:null},OM={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:hh};function Jv(){throw Error("act(...) is not supported in production builds of React.")}Fe.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!ph(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=oo;Fe.Fragment=TM;Fe.Profiler=AM;Fe.PureComponent=fh;Fe.StrictMode=wM;Fe.Suspense=PM;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OM;Fe.act=Jv;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Kv.call(e,l)&&!Zv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:_a,type:t.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(t){return t={$$typeof:bM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CM,_context:t},t.Consumer=t};Fe.createElement=Qv;Fe.createFactory=function(t){var e=Qv.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:RM,render:t}};Fe.isValidElement=ph;Fe.lazy=function(t){return{$$typeof:DM,_payload:{_status:-1,_result:t},_init:FM}};Fe.memo=function(t,e){return{$$typeof:LM,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=Nl.transition;Nl.transition={};try{t()}finally{Nl.transition=e}};Fe.unstable_act=Jv;Fe.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Fe.useContext=function(t){return Qt.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Fe.useId=function(){return Qt.current.useId()};Fe.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Fe.useRef=function(t){return Qt.current.useRef(t)};Fe.useState=function(t){return Qt.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return Qt.current.useTransition()};Fe.version="18.3.1";jv.exports=Fe;var Z=jv.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kM=Z,zM=Symbol.for("react.element"),BM=Symbol.for("react.fragment"),VM=Object.prototype.hasOwnProperty,HM=kM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GM={key:!0,ref:!0,__self:!0,__source:!0};function ex(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)VM.call(e,i)&&!GM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:zM,type:t,key:s,ref:o,props:r,_owner:HM.current}}zc.Fragment=BM;zc.jsx=ex;zc.jsxs=ex;Wv.exports=zc;var S=Wv.exports,Bf={},tx={exports:{}},yn={},nx={exports:{}},ix={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,B){var G=L.length;L.push(B);e:for(;0<G;){var re=G-1>>>1,xe=L[re];if(0<r(xe,B))L[re]=B,L[G]=xe,G=re;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var B=L[0],G=L.pop();if(G!==B){L[0]=G;e:for(var re=0,xe=L.length,je=xe>>>1;re<je;){var j=2*(re+1)-1,ie=L[j],de=j+1,se=L[de];if(0>r(ie,G))de<xe&&0>r(se,ie)?(L[re]=se,L[de]=G,re=de):(L[re]=ie,L[j]=G,re=j);else if(de<xe&&0>r(se,G))L[re]=se,L[de]=G,re=de;else break e}}return B}function r(L,B){var G=L.sortIndex-B.sortIndex;return G!==0?G:L.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=L)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function M(L){if(y=!1,g(L),!v)if(n(l)!==null)v=!0,Q(b);else{var B=n(c);B!==null&&ne(M,B.startTime-L)}}function b(L,B){v=!1,y&&(y=!1,h(P),P=-1),p=!0;var G=d;try{for(g(B),f=n(l);f!==null&&(!(f.expirationTime>B)||L&&!I());){var re=f.callback;if(typeof re=="function"){f.callback=null,d=f.priorityLevel;var xe=re(f.expirationTime<=B);B=t.unstable_now(),typeof xe=="function"?f.callback=xe:f===n(l)&&i(l),g(B)}else i(l);f=n(l)}if(f!==null)var je=!0;else{var j=n(c);j!==null&&ne(M,j.startTime-B),je=!1}return je}finally{f=null,d=G,p=!1}}var A=!1,C=null,P=-1,E=5,_=-1;function I(){return!(t.unstable_now()-_<E)}function H(){if(C!==null){var L=t.unstable_now();_=L;var B=!0;try{B=C(!0,L)}finally{B?D():(A=!1,C=null)}}else A=!1}var D;if(typeof x=="function")D=function(){x(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,X=Y.port2;Y.port1.onmessage=H,D=function(){X.postMessage(null)}}else D=function(){m(H,0)};function Q(L){C=L,A||(A=!0,D())}function ne(L,B){P=m(function(){L(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Q(b))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var G=d;d=B;try{return L()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=d;d=L;try{return B()}finally{d=G}},t.unstable_scheduleCallback=function(L,B,G){var re=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?re+G:re):G=re,L){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=G+xe,L={id:u++,callback:B,priorityLevel:L,startTime:G,expirationTime:xe,sortIndex:-1},G>re?(L.sortIndex=G,e(c,L),n(l)===null&&L===n(c)&&(y?(h(P),P=-1):y=!0,ne(M,G-re))):(L.sortIndex=xe,e(l,L),v||p||(v=!0,Q(b))),L},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(L){var B=d;return function(){var G=d;d=B;try{return L.apply(this,arguments)}finally{d=G}}}})(ix);nx.exports=ix;var WM=nx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jM=Z,xn=WM;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rx=new Set,Zo={};function Jr(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(Zo[t]=e,t=0;t<e.length;t++)rx.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=Object.prototype.hasOwnProperty,XM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$p={},qp={};function YM(t){return Vf.call(qp,t)?!0:Vf.call($p,t)?!1:XM.test(t)?qp[t]=!0:($p[t]=!0,!1)}function $M(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function qM(t,e,n,i){if(e===null||typeof e>"u"||$M(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var mh=/[\-:]([a-z])/g;function gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mh,gh);Ft[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mh,gh);Ft[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mh,gh);Ft[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function vh(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qM(e,n,r,i)&&(n=null),i||r===null?YM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=jM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Es=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),xh=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),sx=Symbol.for("react.provider"),ox=Symbol.for("react.context"),yh=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),Wf=Symbol.for("react.suspense_list"),_h=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),ax=Symbol.for("react.offscreen"),Kp=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,gu;function Lo(t){if(gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);gu=e&&e[1]||""}return`
`+gu+t}var vu=!1;function xu(t,e){if(!t||vu)return"";vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Lo(t):""}function KM(t){switch(t.tag){case 5:return Lo(t.type);case 16:return Lo("Lazy");case 13:return Lo("Suspense");case 19:return Lo("SuspenseList");case 0:case 2:case 15:return t=xu(t.type,!1),t;case 11:return t=xu(t.type.render,!1),t;case 1:return t=xu(t.type,!0),t;default:return""}}function jf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case Es:return"Portal";case Hf:return"Profiler";case xh:return"StrictMode";case Gf:return"Suspense";case Wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ox:return(t.displayName||"Context")+".Consumer";case sx:return(t._context.displayName||"Context")+".Provider";case yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _h:return e=t.displayName||null,e!==null?e:jf(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return jf(t(e))}catch{}}return null}function ZM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jf(e);case 8:return e===xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QM(t){var e=lx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=QM(t))}function cx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=lx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ec(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xf(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ux(t,e){e=e.checked,e!=null&&vh(t,"checked",e,!1)}function Yf(t,e){ux(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$f(t,e.type,n):e.hasOwnProperty("defaultValue")&&$f(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $f(t,e,n){(e!=="number"||ec(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Do=Array.isArray;function zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Do(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function fx(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,hx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JM=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){JM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function px(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function mx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=px(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var e1=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zf(t,e){if(e){if(e1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Qf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jf=null;function Sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ed=null,Bs=null,Vs=null;function tm(t){if(t=Ea(t)){if(typeof ed!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Wc(e),ed(t.stateNode,t.type,e))}}function gx(t){Bs?Vs?Vs.push(t):Vs=[t]:Bs=t}function vx(){if(Bs){var t=Bs,e=Vs;if(Vs=Bs=null,tm(t),e)for(t=0;t<e.length;t++)tm(e[t])}}function xx(t,e){return t(e)}function yx(){}var yu=!1;function _x(t,e,n){if(yu)return t(e,n);yu=!0;try{return xx(t,e,n)}finally{yu=!1,(Bs!==null||Vs!==null)&&(yx(),vx())}}function Jo(t,e){var n=t.stateNode;if(n===null)return null;var i=Wc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var td=!1;if(wi)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){td=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{td=!1}function t1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ko=!1,tc=null,nc=!1,nd=null,n1={onError:function(t){ko=!0,tc=t}};function i1(t,e,n,i,r,s,o,a,l){ko=!1,tc=null,t1.apply(n1,arguments)}function r1(t,e,n,i,r,s,o,a,l){if(i1.apply(this,arguments),ko){if(ko){var c=tc;ko=!1,tc=null}else throw Error(ee(198));nc||(nc=!0,nd=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Sx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nm(t){if(es(t)!==t)throw Error(ee(188))}function s1(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return nm(r),t;if(s===i)return nm(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Mx(t){return t=s1(t),t!==null?Ex(t):null}function Ex(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ex(t);if(e!==null)return e;t=t.sibling}return null}var Tx=xn.unstable_scheduleCallback,im=xn.unstable_cancelCallback,o1=xn.unstable_shouldYield,a1=xn.unstable_requestPaint,vt=xn.unstable_now,l1=xn.unstable_getCurrentPriorityLevel,Mh=xn.unstable_ImmediatePriority,wx=xn.unstable_UserBlockingPriority,ic=xn.unstable_NormalPriority,c1=xn.unstable_LowPriority,Ax=xn.unstable_IdlePriority,Bc=null,si=null;function u1(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(Bc,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:h1,f1=Math.log,d1=Math.LN2;function h1(t){return t>>>=0,t===0?32:31-(f1(t)/d1|0)|0}var Wa=64,ja=4194304;function Io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Io(a):(s&=o,s!==0&&(i=Io(s)))}else o=n&~r,o!==0?i=Io(o):s!==0&&(i=Io(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function p1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=p1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cx(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function _u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function g1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function bx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rx,Th,Px,Lx,Dx,rd=!1,Xa=[],Qi=null,Ji=null,er=null,ea=new Map,ta=new Map,ji=[],v1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rm(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(e.pointerId)}}function yo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ea(e),e!==null&&Th(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function x1(t,e,n,i,r){switch(e){case"focusin":return Qi=yo(Qi,t,e,n,i,r),!0;case"dragenter":return Ji=yo(Ji,t,e,n,i,r),!0;case"mouseover":return er=yo(er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ea.set(s,yo(ea.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ta.set(s,yo(ta.get(s)||null,t,e,n,i,r)),!0}return!1}function Ix(t){var e=Ir(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=Sx(n),e!==null){t.blockedOn=e,Dx(t.priority,function(){Px(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Jf=i,n.target.dispatchEvent(i),Jf=null}else return e=Ea(n),e!==null&&Th(e),t.blockedOn=n,!1;e.shift()}return!0}function sm(t,e,n){Ul(t)&&n.delete(e)}function y1(){rd=!1,Qi!==null&&Ul(Qi)&&(Qi=null),Ji!==null&&Ul(Ji)&&(Ji=null),er!==null&&Ul(er)&&(er=null),ea.forEach(sm),ta.forEach(sm)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,rd||(rd=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,y1)))}function na(t){function e(r){return _o(r,t)}if(0<Xa.length){_o(Xa[0],t);for(var n=1;n<Xa.length;n++){var i=Xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&_o(Qi,t),Ji!==null&&_o(Ji,t),er!==null&&_o(er,t),ea.forEach(e),ta.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)Ix(n),n.blockedOn===null&&ji.shift()}var Hs=Di.ReactCurrentBatchConfig,sc=!0;function _1(t,e,n,i){var r=Ke,s=Hs.transition;Hs.transition=null;try{Ke=1,wh(t,e,n,i)}finally{Ke=r,Hs.transition=s}}function S1(t,e,n,i){var r=Ke,s=Hs.transition;Hs.transition=null;try{Ke=4,wh(t,e,n,i)}finally{Ke=r,Hs.transition=s}}function wh(t,e,n,i){if(sc){var r=sd(t,e,n,i);if(r===null)Pu(t,e,i,oc,n),rm(t,i);else if(x1(r,t,e,n,i))i.stopPropagation();else if(rm(t,i),e&4&&-1<v1.indexOf(t)){for(;r!==null;){var s=Ea(r);if(s!==null&&Rx(s),s=sd(t,e,n,i),s===null&&Pu(t,e,i,oc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Pu(t,e,i,null,n)}}var oc=null;function sd(t,e,n,i){if(oc=null,t=Sh(i),t=Ir(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Sx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return oc=t,null}function Nx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case Mh:return 1;case wx:return 4;case ic:case c1:return 16;case Ax:return 536870912;default:return 16}default:return 16}}var $i=null,Ah=null,Fl=null;function Ux(){if(Fl)return Fl;var t,e=Ah,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Fl=r.slice(t,1<i?1-i:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ya(){return!0}function om(){return!1}function _n(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ya:om,this.isPropagationStopped=om,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),e}var ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=_n(ao),Ma=ft({},ao,{view:0,detail:0}),M1=_n(Ma),Su,Mu,So,Vc=ft({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==So&&(So&&t.type==="mousemove"?(Su=t.screenX-So.screenX,Mu=t.screenY-So.screenY):Mu=Su=0,So=t),Su)},movementY:function(t){return"movementY"in t?t.movementY:Mu}}),am=_n(Vc),E1=ft({},Vc,{dataTransfer:0}),T1=_n(E1),w1=ft({},Ma,{relatedTarget:0}),Eu=_n(w1),A1=ft({},ao,{animationName:0,elapsedTime:0,pseudoElement:0}),C1=_n(A1),b1=ft({},ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),R1=_n(b1),P1=ft({},ao,{data:0}),lm=_n(P1),L1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=I1[t])?!!e[t]:!1}function bh(){return N1}var U1=ft({},Ma,{key:function(t){if(t.key){var e=L1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?D1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bh,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),F1=_n(U1),O1=ft({},Vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=_n(O1),k1=ft({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bh}),z1=_n(k1),B1=ft({},ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),V1=_n(B1),H1=ft({},Vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G1=_n(H1),W1=[9,13,27,32],Rh=wi&&"CompositionEvent"in window,zo=null;wi&&"documentMode"in document&&(zo=document.documentMode);var j1=wi&&"TextEvent"in window&&!zo,Fx=wi&&(!Rh||zo&&8<zo&&11>=zo),um=" ",fm=!1;function Ox(t,e){switch(t){case"keyup":return W1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function X1(t,e){switch(t){case"compositionend":return kx(e);case"keypress":return e.which!==32?null:(fm=!0,um);case"textInput":return t=e.data,t===um&&fm?null:t;default:return null}}function Y1(t,e){if(ws)return t==="compositionend"||!Rh&&Ox(t,e)?(t=Ux(),Fl=Ah=$i=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fx&&e.locale!=="ko"?null:e.data;default:return null}}var $1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$1[t.type]:e==="textarea"}function zx(t,e,n,i){gx(i),e=ac(e,"onChange"),0<e.length&&(n=new Ch("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Bo=null,ia=null;function q1(t){Kx(t,0)}function Hc(t){var e=bs(t);if(cx(e))return t}function K1(t,e){if(t==="change")return e}var Bx=!1;if(wi){var Tu;if(wi){var wu="oninput"in document;if(!wu){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),wu=typeof hm.oninput=="function"}Tu=wu}else Tu=!1;Bx=Tu&&(!document.documentMode||9<document.documentMode)}function pm(){Bo&&(Bo.detachEvent("onpropertychange",Vx),ia=Bo=null)}function Vx(t){if(t.propertyName==="value"&&Hc(ia)){var e=[];zx(e,ia,t,Sh(t)),_x(q1,e)}}function Z1(t,e,n){t==="focusin"?(pm(),Bo=e,ia=n,Bo.attachEvent("onpropertychange",Vx)):t==="focusout"&&pm()}function Q1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hc(ia)}function J1(t,e){if(t==="click")return Hc(e)}function eE(t,e){if(t==="input"||t==="change")return Hc(e)}function tE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:tE;function ra(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Vf.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gm(t,e){var n=mm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mm(n)}}function Hx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gx(){for(var t=window,e=ec();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ec(t.document)}return e}function Ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nE(t){var e=Gx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hx(n.ownerDocument.documentElement,n)){if(i!==null&&Ph(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=gm(n,s);var o=gm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iE=wi&&"documentMode"in document&&11>=document.documentMode,As=null,od=null,Vo=null,ad=!1;function vm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ad||As==null||As!==ec(i)||(i=As,"selectionStart"in i&&Ph(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vo&&ra(Vo,i)||(Vo=i,i=ac(od,"onSelect"),0<i.length&&(e=new Ch("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=As)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},Au={},Wx={};wi&&(Wx=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Gc(t){if(Au[t])return Au[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wx)return Au[t]=e[n];return t}var jx=Gc("animationend"),Xx=Gc("animationiteration"),Yx=Gc("animationstart"),$x=Gc("transitionend"),qx=new Map,xm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){qx.set(t,e),Jr(e,[t])}for(var Cu=0;Cu<xm.length;Cu++){var bu=xm[Cu],rE=bu.toLowerCase(),sE=bu[0].toUpperCase()+bu.slice(1);hr(rE,"on"+sE)}hr(jx,"onAnimationEnd");hr(Xx,"onAnimationIteration");hr(Yx,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr($x,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oE=new Set("cancel close invalid load scroll toggle".split(" ").concat(No));function ym(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,r1(i,e,void 0,t),t.currentTarget=null}function Kx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ym(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ym(r,a,c),s=l}}}if(nc)throw t=nd,nc=!1,nd=null,t}function it(t,e){var n=e[dd];n===void 0&&(n=e[dd]=new Set);var i=t+"__bubble";n.has(i)||(Zx(e,t,2,!1),n.add(i))}function Ru(t,e,n){var i=0;e&&(i|=4),Zx(n,t,i,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[qa]){t[qa]=!0,rx.forEach(function(n){n!=="selectionchange"&&(oE.has(n)||Ru(n,!1,t),Ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,Ru("selectionchange",!1,e))}}function Zx(t,e,n,i){switch(Nx(e)){case 1:var r=_1;break;case 4:r=S1;break;default:r=wh}n=r.bind(null,e,n,t),r=void 0,!td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ir(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_x(function(){var c=s,u=Sh(n),f=[];e:{var d=qx.get(t);if(d!==void 0){var p=Ch,v=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":p=F1;break;case"focusin":v="focus",p=Eu;break;case"focusout":v="blur",p=Eu;break;case"beforeblur":case"afterblur":p=Eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=T1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=z1;break;case jx:case Xx:case Yx:p=C1;break;case $x:p=V1;break;case"scroll":p=M1;break;case"wheel":p=G1;break;case"copy":case"cut":case"paste":p=R1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=cm}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var x=c,g;x!==null;){g=x;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,h!==null&&(M=Jo(x,h),M!=null&&y.push(oa(x,M,g)))),m)break;x=x.return}0<y.length&&(d=new p(d,v,null,n,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Jf&&(v=n.relatedTarget||n.fromElement)&&(Ir(v)||v[Ai]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Ir(v):null,v!==null&&(m=es(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=am,M="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=cm,M="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?d:bs(p),g=v==null?d:bs(v),d=new y(M,x+"leave",p,n,u),d.target=m,d.relatedTarget=g,M=null,Ir(u)===c&&(y=new y(h,x+"enter",v,n,u),y.target=g,y.relatedTarget=m,M=y),m=M,p&&v)t:{for(y=p,h=v,x=0,g=y;g;g=ns(g))x++;for(g=0,M=h;M;M=ns(M))g++;for(;0<x-g;)y=ns(y),x--;for(;0<g-x;)h=ns(h),g--;for(;x--;){if(y===h||h!==null&&y===h.alternate)break t;y=ns(y),h=ns(h)}y=null}else y=null;p!==null&&_m(f,d,p,y,!1),v!==null&&m!==null&&_m(f,m,v,y,!0)}}e:{if(d=c?bs(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=K1;else if(dm(d))if(Bx)b=eE;else{b=Q1;var A=Z1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=J1);if(b&&(b=b(t,c))){zx(f,b,n,u);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&$f(d,"number",d.value)}switch(A=c?bs(c):window,t){case"focusin":(dm(A)||A.contentEditable==="true")&&(As=A,od=c,Vo=null);break;case"focusout":Vo=od=As=null;break;case"mousedown":ad=!0;break;case"contextmenu":case"mouseup":case"dragend":ad=!1,vm(f,n,u);break;case"selectionchange":if(iE)break;case"keydown":case"keyup":vm(f,n,u)}var C;if(Rh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ws?Ox(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Fx&&n.locale!=="ko"&&(ws||P!=="onCompositionStart"?P==="onCompositionEnd"&&ws&&(C=Ux()):($i=u,Ah="value"in $i?$i.value:$i.textContent,ws=!0)),A=ac(c,P),0<A.length&&(P=new lm(P,t,null,n,u),f.push({event:P,listeners:A}),C?P.data=C:(C=kx(n),C!==null&&(P.data=C)))),(C=j1?X1(t,n):Y1(t,n))&&(c=ac(c,"onBeforeInput"),0<c.length&&(u=new lm("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=C))}Kx(f,e)})}function oa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ac(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Jo(t,n),s!=null&&i.unshift(oa(t,s,r)),s=Jo(t,e),s!=null&&i.push(oa(t,s,r))),t=t.return}return i}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _m(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Jo(n,s),l!=null&&o.unshift(oa(n,l,a))):r||(l=Jo(n,s),l!=null&&o.push(oa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aE=/\r\n?/g,lE=/\u0000|\uFFFD/g;function Sm(t){return(typeof t=="string"?t:""+t).replace(aE,`
`).replace(lE,"")}function Ka(t,e,n){if(e=Sm(e),Sm(t)!==e&&n)throw Error(ee(425))}function lc(){}var ld=null,cd=null;function ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fd=typeof setTimeout=="function"?setTimeout:void 0,cE=typeof clearTimeout=="function"?clearTimeout:void 0,Mm=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof Mm<"u"?function(t){return Mm.resolve(null).then(t).catch(fE)}:fd;function fE(t){setTimeout(function(){throw t})}function Lu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);na(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Em(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var lo=Math.random().toString(36).slice(2),ti="__reactFiber$"+lo,aa="__reactProps$"+lo,Ai="__reactContainer$"+lo,dd="__reactEvents$"+lo,dE="__reactListeners$"+lo,hE="__reactHandles$"+lo;function Ir(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Em(t);t!==null;){if(n=t[ti])return n;t=Em(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[ti]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Wc(t){return t[aa]||null}var hd=[],Rs=-1;function pr(t){return{current:t}}function ot(t){0>Rs||(t.current=hd[Rs],hd[Rs]=null,Rs--)}function et(t,e){Rs++,hd[Rs]=t.current,t.current=e}var cr={},jt=pr(cr),sn=pr(!1),jr=cr;function qs(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function cc(){ot(sn),ot(jt)}function Tm(t,e,n){if(jt.current!==cr)throw Error(ee(168));et(jt,e),et(sn,n)}function Qx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,ZM(t)||"Unknown",r));return ft({},n,i)}function uc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,jr=jt.current,et(jt,t),et(sn,sn.current),!0}function wm(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=Qx(t,e,jr),i.__reactInternalMemoizedMergedChildContext=t,ot(sn),ot(jt),et(jt,t)):ot(sn),et(sn,n)}var yi=null,jc=!1,Du=!1;function Jx(t){yi===null?yi=[t]:yi.push(t)}function pE(t){jc=!0,Jx(t)}function mr(){if(!Du&&yi!==null){Du=!0;var t=0,e=Ke;try{var n=yi;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,jc=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),Tx(Mh,mr),r}finally{Ke=e,Du=!1}}return null}var Ps=[],Ls=0,fc=null,dc=0,En=[],Tn=0,Xr=null,Si=1,Mi="";function Ar(t,e){Ps[Ls++]=dc,Ps[Ls++]=fc,fc=t,dc=e}function ey(t,e,n){En[Tn++]=Si,En[Tn++]=Mi,En[Tn++]=Xr,Xr=t;var i=Si;t=Mi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Si=1<<32-Gn(e)+r|n<<r|i,Mi=s+t}else Si=1<<s|n<<r|i,Mi=t}function Lh(t){t.return!==null&&(Ar(t,1),ey(t,1,0))}function Dh(t){for(;t===fc;)fc=Ps[--Ls],Ps[Ls]=null,dc=Ps[--Ls],Ps[Ls]=null;for(;t===Xr;)Xr=En[--Tn],En[Tn]=null,Mi=En[--Tn],En[Tn]=null,Si=En[--Tn],En[Tn]=null}var mn=null,pn=null,lt=!1,Vn=null;function ty(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Am(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Si,overflow:Mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function pd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function md(t){if(lt){var e=pn;if(e){var n=e;if(!Am(t,e)){if(pd(t))throw Error(ee(418));e=tr(n.nextSibling);var i=mn;e&&Am(t,e)?ty(i,n):(t.flags=t.flags&-4097|2,lt=!1,mn=t)}}else{if(pd(t))throw Error(ee(418));t.flags=t.flags&-4097|2,lt=!1,mn=t}}}function Cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Za(t){if(t!==mn)return!1;if(!lt)return Cm(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ud(t.type,t.memoizedProps)),e&&(e=pn)){if(pd(t))throw ny(),Error(ee(418));for(;e;)ty(t,e),e=tr(e.nextSibling)}if(Cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?tr(t.stateNode.nextSibling):null;return!0}function ny(){for(var t=pn;t;)t=tr(t.nextSibling)}function Ks(){pn=mn=null,lt=!1}function Ih(t){Vn===null?Vn=[t]:Vn.push(t)}var mE=Di.ReactCurrentBatchConfig;function Mo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Qa(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bm(t){var e=t._init;return e(t._payload)}function iy(t){function e(h,x){if(t){var g=h.deletions;g===null?(h.deletions=[x],h.flags|=16):g.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=sr(h,x),h.index=0,h.sibling=null,h}function s(h,x,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<x?(h.flags|=2,x):g):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,x,g,M){return x===null||x.tag!==6?(x=zu(g,h.mode,M),x.return=h,x):(x=r(x,g),x.return=h,x)}function l(h,x,g,M){var b=g.type;return b===Ts?u(h,x,g.props.children,M,g.key):x!==null&&(x.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gi&&bm(b)===x.type)?(M=r(x,g.props),M.ref=Mo(h,x,g),M.return=h,M):(M=Wl(g.type,g.key,g.props,null,h.mode,M),M.ref=Mo(h,x,g),M.return=h,M)}function c(h,x,g,M){return x===null||x.tag!==4||x.stateNode.containerInfo!==g.containerInfo||x.stateNode.implementation!==g.implementation?(x=Bu(g,h.mode,M),x.return=h,x):(x=r(x,g.children||[]),x.return=h,x)}function u(h,x,g,M,b){return x===null||x.tag!==7?(x=Vr(g,h.mode,M,b),x.return=h,x):(x=r(x,g),x.return=h,x)}function f(h,x,g){if(typeof x=="string"&&x!==""||typeof x=="number")return x=zu(""+x,h.mode,g),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:return g=Wl(x.type,x.key,x.props,null,h.mode,g),g.ref=Mo(h,null,x),g.return=h,g;case Es:return x=Bu(x,h.mode,g),x.return=h,x;case Gi:var M=x._init;return f(h,M(x._payload),g)}if(Do(x)||vo(x))return x=Vr(x,h.mode,g,null),x.return=h,x;Qa(h,x)}return null}function d(h,x,g,M){var b=x!==null?x.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(h,x,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Va:return g.key===b?l(h,x,g,M):null;case Es:return g.key===b?c(h,x,g,M):null;case Gi:return b=g._init,d(h,x,b(g._payload),M)}if(Do(g)||vo(g))return b!==null?null:u(h,x,g,M,null);Qa(h,g)}return null}function p(h,x,g,M,b){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(g)||null,a(x,h,""+M,b);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Va:return h=h.get(M.key===null?g:M.key)||null,l(x,h,M,b);case Es:return h=h.get(M.key===null?g:M.key)||null,c(x,h,M,b);case Gi:var A=M._init;return p(h,x,g,A(M._payload),b)}if(Do(M)||vo(M))return h=h.get(g)||null,u(x,h,M,b,null);Qa(x,M)}return null}function v(h,x,g,M){for(var b=null,A=null,C=x,P=x=0,E=null;C!==null&&P<g.length;P++){C.index>P?(E=C,C=null):E=C.sibling;var _=d(h,C,g[P],M);if(_===null){C===null&&(C=E);break}t&&C&&_.alternate===null&&e(h,C),x=s(_,x,P),A===null?b=_:A.sibling=_,A=_,C=E}if(P===g.length)return n(h,C),lt&&Ar(h,P),b;if(C===null){for(;P<g.length;P++)C=f(h,g[P],M),C!==null&&(x=s(C,x,P),A===null?b=C:A.sibling=C,A=C);return lt&&Ar(h,P),b}for(C=i(h,C);P<g.length;P++)E=p(C,h,P,g[P],M),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?P:E.key),x=s(E,x,P),A===null?b=E:A.sibling=E,A=E);return t&&C.forEach(function(I){return e(h,I)}),lt&&Ar(h,P),b}function y(h,x,g,M){var b=vo(g);if(typeof b!="function")throw Error(ee(150));if(g=b.call(g),g==null)throw Error(ee(151));for(var A=b=null,C=x,P=x=0,E=null,_=g.next();C!==null&&!_.done;P++,_=g.next()){C.index>P?(E=C,C=null):E=C.sibling;var I=d(h,C,_.value,M);if(I===null){C===null&&(C=E);break}t&&C&&I.alternate===null&&e(h,C),x=s(I,x,P),A===null?b=I:A.sibling=I,A=I,C=E}if(_.done)return n(h,C),lt&&Ar(h,P),b;if(C===null){for(;!_.done;P++,_=g.next())_=f(h,_.value,M),_!==null&&(x=s(_,x,P),A===null?b=_:A.sibling=_,A=_);return lt&&Ar(h,P),b}for(C=i(h,C);!_.done;P++,_=g.next())_=p(C,h,P,_.value,M),_!==null&&(t&&_.alternate!==null&&C.delete(_.key===null?P:_.key),x=s(_,x,P),A===null?b=_:A.sibling=_,A=_);return t&&C.forEach(function(H){return e(h,H)}),lt&&Ar(h,P),b}function m(h,x,g,M){if(typeof g=="object"&&g!==null&&g.type===Ts&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Va:e:{for(var b=g.key,A=x;A!==null;){if(A.key===b){if(b=g.type,b===Ts){if(A.tag===7){n(h,A.sibling),x=r(A,g.props.children),x.return=h,h=x;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Gi&&bm(b)===A.type){n(h,A.sibling),x=r(A,g.props),x.ref=Mo(h,A,g),x.return=h,h=x;break e}n(h,A);break}else e(h,A);A=A.sibling}g.type===Ts?(x=Vr(g.props.children,h.mode,M,g.key),x.return=h,h=x):(M=Wl(g.type,g.key,g.props,null,h.mode,M),M.ref=Mo(h,x,g),M.return=h,h=M)}return o(h);case Es:e:{for(A=g.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===g.containerInfo&&x.stateNode.implementation===g.implementation){n(h,x.sibling),x=r(x,g.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=Bu(g,h.mode,M),x.return=h,h=x}return o(h);case Gi:return A=g._init,m(h,x,A(g._payload),M)}if(Do(g))return v(h,x,g,M);if(vo(g))return y(h,x,g,M);Qa(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,x!==null&&x.tag===6?(n(h,x.sibling),x=r(x,g),x.return=h,h=x):(n(h,x),x=zu(g,h.mode,M),x.return=h,h=x),o(h)):n(h,x)}return m}var Zs=iy(!0),ry=iy(!1),hc=pr(null),pc=null,Ds=null,Nh=null;function Uh(){Nh=Ds=pc=null}function Fh(t){var e=hc.current;ot(hc),t._currentValue=e}function gd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){pc=t,Nh=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(Nh!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(pc===null)throw Error(ee(308));Ds=t,pc.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var Nr=null;function Oh(t){Nr===null?Nr=[t]:Nr.push(t)}function sy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Oh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function kh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function oy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ge&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,Oh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Eh(t,n)}}function Rm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function mc(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(d=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=ft({},f,d);break e;case 2:Wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=f}}function Pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Ta={},oi=pr(Ta),la=pr(Ta),ca=pr(Ta);function Ur(t){if(t===Ta)throw Error(ee(174));return t}function zh(t,e){switch(et(ca,e),et(la,t),et(oi,Ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Kf(e,t)}ot(oi),et(oi,e)}function Qs(){ot(oi),ot(la),ot(ca)}function ay(t){Ur(ca.current);var e=Ur(oi.current),n=Kf(e,t.type);e!==n&&(et(la,t),et(oi,n))}function Bh(t){la.current===t&&(ot(oi),ot(la))}var ct=pr(0);function gc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Iu=[];function Vh(){for(var t=0;t<Iu.length;t++)Iu[t]._workInProgressVersionPrimary=null;Iu.length=0}var zl=Di.ReactCurrentDispatcher,Nu=Di.ReactCurrentBatchConfig,Yr=0,ut=null,Et=null,Pt=null,vc=!1,Ho=!1,ua=0,gE=0;function Bt(){throw Error(ee(321))}function Hh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function Gh(t,e,n,i,r,s){if(Yr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zl.current=t===null||t.memoizedState===null?_E:SE,t=n(i,r),Ho){s=0;do{if(Ho=!1,ua=0,25<=s)throw Error(ee(301));s+=1,Pt=Et=null,e.updateQueue=null,zl.current=ME,t=n(i,r)}while(Ho)}if(zl.current=xc,e=Et!==null&&Et.next!==null,Yr=0,Pt=Et=ut=null,vc=!1,e)throw Error(ee(300));return t}function Wh(){var t=ua!==0;return ua=0,t}function Kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ut.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Dn(){if(Et===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Pt===null?ut.memoizedState:Pt.next;if(e!==null)Pt=e,Et=t;else{if(t===null)throw Error(ee(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Pt===null?ut.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function fa(t,e){return typeof e=="function"?e(t):e}function Uu(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Yr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ut.lanes|=u,$r|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Xn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,$r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fu(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Xn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ly(){}function cy(t,e){var n=ut,i=Dn(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,jh(dy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,da(9,fy.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ee(349));Yr&30||uy(n,e,r)}return r}function uy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fy(t,e,n,i){e.value=n,e.getSnapshot=i,hy(e)&&py(t)}function dy(t,e,n){return n(function(){hy(e)&&py(t)})}function hy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function py(t){var e=Ci(t,1);e!==null&&Wn(e,t,1,-1)}function Lm(t){var e=Kn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},e.queue=t,t=t.dispatch=yE.bind(null,ut,t),[e.memoizedState,t]}function da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function my(){return Dn().memoizedState}function Bl(t,e,n,i){var r=Kn();ut.flags|=t,r.memoizedState=da(1|e,n,void 0,i===void 0?null:i)}function Xc(t,e,n,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(Et!==null){var o=Et.memoizedState;if(s=o.destroy,i!==null&&Hh(i,o.deps)){r.memoizedState=da(e,n,s,i);return}}ut.flags|=t,r.memoizedState=da(1|e,n,s,i)}function Dm(t,e){return Bl(8390656,8,t,e)}function jh(t,e){return Xc(2048,8,t,e)}function gy(t,e){return Xc(4,2,t,e)}function vy(t,e){return Xc(4,4,t,e)}function xy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yy(t,e,n){return n=n!=null?n.concat([t]):null,Xc(4,4,xy.bind(null,e,t),n)}function Xh(){}function _y(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Sy(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function My(t,e,n){return Yr&21?(Xn(n,e)||(n=Cx(),ut.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function vE(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=Nu.transition;Nu.transition={};try{t(!1),e()}finally{Ke=n,Nu.transition=i}}function Ey(){return Dn().memoizedState}function xE(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ty(t))wy(e,n);else if(n=sy(t,e,n,i),n!==null){var r=Zt();Wn(n,t,i,r),Ay(n,e,i)}}function yE(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ty(t))wy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Xn(a,o)){var l=e.interleaved;l===null?(r.next=r,Oh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=sy(t,e,r,i),n!==null&&(r=Zt(),Wn(n,t,i,r),Ay(n,e,i))}}function Ty(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function wy(t,e){Ho=vc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ay(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Eh(t,n)}}var xc={readContext:Ln,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},_E={readContext:Ln,useCallback:function(t,e){return Kn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:Dm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bl(4194308,4,xy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bl(4,2,t,e)},useMemo:function(t,e){var n=Kn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Kn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xE.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Kn();return t={current:t},e.memoizedState=t},useState:Lm,useDebugValue:Xh,useDeferredValue:function(t){return Kn().memoizedState=t},useTransition:function(){var t=Lm(!1),e=t[0];return t=vE.bind(null,t[1]),Kn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Kn();if(lt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Lt===null)throw Error(ee(349));Yr&30||uy(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Dm(dy.bind(null,i,s,t),[t]),i.flags|=2048,da(9,fy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Kn(),e=Lt.identifierPrefix;if(lt){var n=Mi,i=Si;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SE={readContext:Ln,useCallback:_y,useContext:Ln,useEffect:jh,useImperativeHandle:yy,useInsertionEffect:gy,useLayoutEffect:vy,useMemo:Sy,useReducer:Uu,useRef:my,useState:function(){return Uu(fa)},useDebugValue:Xh,useDeferredValue:function(t){var e=Dn();return My(e,Et.memoizedState,t)},useTransition:function(){var t=Uu(fa)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:ly,useSyncExternalStore:cy,useId:Ey,unstable_isNewReconciler:!1},ME={readContext:Ln,useCallback:_y,useContext:Ln,useEffect:jh,useImperativeHandle:yy,useInsertionEffect:gy,useLayoutEffect:vy,useMemo:Sy,useReducer:Fu,useRef:my,useState:function(){return Fu(fa)},useDebugValue:Xh,useDeferredValue:function(t){var e=Dn();return Et===null?e.memoizedState=t:My(e,Et.memoizedState,t)},useTransition:function(){var t=Fu(fa)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:ly,useSyncExternalStore:cy,useId:Ey,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yc={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=rr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Wn(e,t,r,i),kl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=rr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,r),e!==null&&(Wn(e,t,r,i),kl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=rr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Wn(e,t,i,n),kl(e,t,i))}};function Im(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,i)||!ra(r,s):!0}function Cy(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=on(e)?jr:jt.current,i=e.contextTypes,s=(i=i!=null)?qs(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Nm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yc.enqueueReplaceState(e,e.state,null)}function xd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=on(e)?jr:jt.current,r.context=qs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yc.enqueueReplaceState(r,r.state,null),mc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e){try{var n="",i=e;do n+=KM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function yd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EE=typeof WeakMap=="function"?WeakMap:Map;function by(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_c||(_c=!0,Rd=i),yd(t,e)},n}function Ry(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){yd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){yd(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Um(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new EE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=OE.bind(null,t,e,n),e.then(t,t))}function Fm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Om(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var TE=Di.ReactCurrentOwner,rn=!1;function $t(t,e,n,i){e.child=t===null?ry(e,null,n,i):Zs(e,t.child,n,i)}function km(t,e,n,i,r){n=n.render;var s=e.ref;return Gs(e,r),i=Gh(t,e,n,i,s,r),n=Wh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(lt&&n&&Lh(e),e.flags|=1,$t(t,e,i,r),e.child)}function zm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ep(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Py(t,e,s,i,r)):(t=Wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,i)&&t.ref===e.ref)return bi(t,e,r)}return e.flags|=1,t=sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Py(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ra(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,bi(t,e,r)}return _d(t,e,n,i,r)}function Ly(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(Ns,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,et(Ns,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,et(Ns,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,et(Ns,hn),hn|=i;return $t(t,e,r,n),e.child}function Dy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _d(t,e,n,i,r){var s=on(n)?jr:jt.current;return s=qs(e,s),Gs(e,r),n=Gh(t,e,n,i,s,r),i=Wh(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(lt&&i&&Lh(e),e.flags|=1,$t(t,e,n,r),e.child)}function Bm(t,e,n,i,r){if(on(n)){var s=!0;uc(e)}else s=!1;if(Gs(e,r),e.stateNode===null)Vl(t,e),Cy(e,n,i),xd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=on(n)?jr:jt.current,c=qs(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Nm(e,o,i,c),Wi=!1;var d=e.memoizedState;o.state=d,mc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||sn.current||Wi?(typeof u=="function"&&(vd(e,n,u,i),l=e.memoizedState),(a=Wi||Im(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,oy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=on(n)?jr:jt.current,l=qs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Nm(e,o,i,l),Wi=!1,d=e.memoizedState,o.state=d,mc(e,i,o,r);var v=e.memoizedState;a!==f||d!==v||sn.current||Wi?(typeof p=="function"&&(vd(e,n,p,i),v=e.memoizedState),(c=Wi||Im(e,n,c,i,d,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Sd(t,e,n,i,s,r)}function Sd(t,e,n,i,r,s){Dy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&wm(e,n,!1),bi(t,e,s);i=e.stateNode,TE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Zs(e,t.child,null,s),e.child=Zs(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&wm(e,n,!0),e.child}function Iy(t){var e=t.stateNode;e.pendingContext?Tm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tm(t,e.context,!1),zh(t,e.containerInfo)}function Vm(t,e,n,i,r){return Ks(),Ih(r),e.flags|=256,$t(t,e,n,i),e.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function Ed(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ny(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),et(ct,r&1),t===null)return md(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Kc(o,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ed(n),e.memoizedState=Md,t):Yh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ed(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Md,i}return s=t.child,t=s.sibling,i=sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yh(t,e){return e=Kc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,i){return i!==null&&Ih(i),Zs(e,t.child,null,n),t=Yh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ou(Error(ee(422))),Ja(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Zs(e,t.child,null,o),e.child.memoizedState=Ed(o),e.memoizedState=Md,s);if(!(e.mode&1))return Ja(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Ou(s,i,void 0),Ja(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Wn(i,t,r,-1))}return Jh(),i=Ou(Error(ee(421))),Ja(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=tr(r.nextSibling),mn=e,lt=!0,Vn=null,t!==null&&(En[Tn++]=Si,En[Tn++]=Mi,En[Tn++]=Xr,Si=t.id,Mi=t.overflow,Xr=e),e=Yh(e,i.children),e.flags|=4096,e)}function Hm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gd(t.return,e,n)}function ku(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Uy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hm(t,n,e);else if(t.tag===19)Hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(et(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&gc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ku(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&gc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ku(e,!0,n,null,s);break;case"together":ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AE(t,e,n){switch(e.tag){case 3:Iy(e),Ks();break;case 5:ay(e);break;case 1:on(e.type)&&uc(e);break;case 4:zh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;et(hc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(et(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?Ny(t,e,n):(et(ct,ct.current&1),t=bi(t,e,n),t!==null?t.sibling:null);et(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Uy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),et(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Ly(t,e,n)}return bi(t,e,n)}var Fy,Td,Oy,ky;Fy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Td=function(){};Oy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(oi.current);var s=null;switch(n){case"input":r=Xf(t,r),i=Xf(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=qf(t,r),i=qf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=lc)}Zf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Zo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Zo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};ky=function(t,e,n,i){n!==i&&(e.flags|=4)};function Eo(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function CE(t,e,n){var i=e.pendingProps;switch(Dh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return on(e.type)&&cc(),Vt(e),null;case 3:return i=e.stateNode,Qs(),ot(sn),ot(jt),Vh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Dd(Vn),Vn=null))),Td(t,e),Vt(e),null;case 5:Bh(e);var r=Ur(ca.current);if(n=e.type,t!==null&&e.stateNode!=null)Oy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Vt(e),null}if(t=Ur(oi.current),Za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[aa]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<No.length;r++)it(No[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Zp(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Jp(i,s),it("invalid",i)}Zf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",""+a]):Zo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":Ha(i),Qp(i,s,!0);break;case"textarea":Ha(i),em(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=lc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[aa]=i,Fy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qf(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<No.length;r++)it(No[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Zp(t,i),r=Xf(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",t);break;case"textarea":Jp(t,i),r=qf(t,i),it("invalid",t);break;default:r=i}Zf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?mx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qo(t,l):typeof l=="number"&&Qo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Zo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&vh(t,s,l,o))}switch(n){case"input":Ha(t),Qp(t,i,!1);break;case"textarea":Ha(t),em(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=lc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)ky(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Ur(ca.current),Ur(oi.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Vt(e),null;case 13:if(ot(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&pn!==null&&e.mode&1&&!(e.flags&128))ny(),Ks(),e.flags|=98560,s=!1;else if(s=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ti]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Vn!==null&&(Dd(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Tt===0&&(Tt=3):Jh())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Qs(),Td(t,e),t===null&&sa(e.stateNode.containerInfo),Vt(e),null;case 10:return Fh(e.type._context),Vt(e),null;case 17:return on(e.type)&&cc(),Vt(e),null;case 19:if(ot(ct),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Eo(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=gc(t),o!==null){for(e.flags|=128,Eo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return et(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>eo&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304)}else{if(!i)if(t=gc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Vt(e),null}else 2*vt()-s.renderingStartTime>eo&&n!==1073741824&&(e.flags|=128,i=!0,Eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ct.current,et(ct,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Qh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function bE(t,e){switch(Dh(e),e.tag){case 1:return on(e.type)&&cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),ot(sn),ot(jt),Vh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bh(e),null;case 13:if(ot(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ct),null;case 4:return Qs(),null;case 10:return Fh(e.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var el=!1,Wt=!1,RE=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function wd(t,e,n){try{n()}catch(i){mt(t,e,i)}}var Gm=!1;function PE(t,e){if(ld=sc,t=Gx(),Ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:t,selectionRange:n},sc=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){mt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=Gm,Gm=!1,v}function Go(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wd(e,n,s)}r=r.next}while(r!==i)}}function $c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zy(t){var e=t.alternate;e!==null&&(t.alternate=null,zy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[aa],delete e[dd],delete e[dE],delete e[hE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function By(t){return t.tag===5||t.tag===3||t.tag===4}function Wm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||By(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=lc));else if(i!==4&&(t=t.child,t!==null))for(Cd(t,e,n),t=t.sibling;t!==null;)Cd(t,e,n),t=t.sibling}function bd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}var Dt=null,Bn=!1;function Ni(t,e,n){for(n=n.child;n!==null;)Vy(t,e,n),n=n.sibling}function Vy(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(Bc,n)}catch{}switch(n.tag){case 5:Wt||Is(n,e);case 6:var i=Dt,r=Bn;Dt=null,Ni(t,e,n),Dt=i,Bn=r,Dt!==null&&(Bn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Bn?(t=Dt,n=n.stateNode,t.nodeType===8?Lu(t.parentNode,n):t.nodeType===1&&Lu(t,n),na(t)):Lu(Dt,n.stateNode));break;case 4:i=Dt,r=Bn,Dt=n.stateNode.containerInfo,Bn=!0,Ni(t,e,n),Dt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wd(n,e,o),r=r.next}while(r!==i)}Ni(t,e,n);break;case 1:if(!Wt&&(Is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}Ni(t,e,n);break;case 21:Ni(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Ni(t,e,n),Wt=i):Ni(t,e,n);break;default:Ni(t,e,n)}}function jm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RE),e.forEach(function(i){var r=zE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Bn=!1;break e;case 3:Dt=a.stateNode.containerInfo,Bn=!0;break e;case 4:Dt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Dt===null)throw Error(ee(160));Vy(s,o,r),Dt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hy(e,t),e=e.sibling}function Hy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),qn(t),i&4){try{Go(3,t,t.return),$c(3,t)}catch(y){mt(t,t.return,y)}try{Go(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:In(e,t),qn(t),i&512&&n!==null&&Is(n,n.return);break;case 5:if(In(e,t),qn(t),i&512&&n!==null&&Is(n,n.return),t.flags&32){var r=t.stateNode;try{Qo(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ux(r,s),Qf(a,o);var c=Qf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?mx(r,f):u==="dangerouslySetInnerHTML"?hx(r,f):u==="children"?Qo(r,f):vh(r,u,f,c)}switch(a){case"input":Yf(r,s);break;case"textarea":fx(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?zs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?zs(r,!!s.multiple,s.defaultValue,!0):zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[aa]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(In(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(In(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{na(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:In(e,t),qn(t);break;case 13:In(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kh=vt())),i&4&&jm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(c=Wt)||u,In(e,t),Wt=c):In(e,t),qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(pe=t,u=t.child;u!==null;){for(f=pe=u;pe!==null;){switch(d=pe,p=d.child,d.tag){case 0:case 11:case 14:case 15:Go(4,d,d.return);break;case 1:Is(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:Is(d,d.return);break;case 22:if(d.memoizedState!==null){Ym(f);continue}}p!==null?(p.return=d,pe=p):Ym(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=px("display",o))}catch(y){mt(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){mt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),qn(t),i&4&&jm(t);break;case 21:break;default:In(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(By(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Qo(r,""),i.flags&=-33);var s=Wm(t);bd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Wm(t);Cd(t,a,o);break;default:throw Error(ee(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LE(t,e,n){pe=t,Gy(t)}function Gy(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||el;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=el;var c=Wt;if(el=o,(Wt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?$m(r):l!==null?(l.return=o,pe=l):$m(r);for(;s!==null;)pe=s,Gy(s),s=s.sibling;pe=r,el=a,Wt=c}Xm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Xm(t)}}function Xm(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||$c(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&na(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Wt||e.flags&512&&Ad(e)}catch(d){mt(e,e.return,d)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Ym(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function $m(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$c(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Ad(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{Ad(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var DE=Math.ceil,yc=Di.ReactCurrentDispatcher,$h=Di.ReactCurrentOwner,Rn=Di.ReactCurrentBatchConfig,Ge=0,Lt=null,St=null,Ut=0,hn=0,Ns=pr(0),Tt=0,ha=null,$r=0,qc=0,qh=0,Wo=null,tn=null,Kh=0,eo=1/0,xi=null,_c=!1,Rd=null,ir=null,tl=!1,qi=null,Sc=0,jo=0,Pd=null,Hl=-1,Gl=0;function Zt(){return Ge&6?vt():Hl!==-1?Hl:Hl=vt()}function rr(t){return t.mode&1?Ge&2&&Ut!==0?Ut&-Ut:mE.transition!==null?(Gl===0&&(Gl=Cx()),Gl):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Nx(t.type)),t):1}function Wn(t,e,n,i){if(50<jo)throw jo=0,Pd=null,Error(ee(185));Sa(t,n,i),(!(Ge&2)||t!==Lt)&&(t===Lt&&(!(Ge&2)&&(qc|=n),Tt===4&&Xi(t,Ut)),an(t,i),n===1&&Ge===0&&!(e.mode&1)&&(eo=vt()+500,jc&&mr()))}function an(t,e){var n=t.callbackNode;m1(t,e);var i=rc(t,t===Lt?Ut:0);if(i===0)n!==null&&im(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&im(n),e===1)t.tag===0?pE(qm.bind(null,t)):Jx(qm.bind(null,t)),uE(function(){!(Ge&6)&&mr()}),n=null;else{switch(bx(i)){case 1:n=Mh;break;case 4:n=wx;break;case 16:n=ic;break;case 536870912:n=Ax;break;default:n=ic}n=Zy(n,Wy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wy(t,e){if(Hl=-1,Gl=0,Ge&6)throw Error(ee(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var i=rc(t,t===Lt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Mc(t,i);else{e=i;var r=Ge;Ge|=2;var s=Xy();(Lt!==t||Ut!==e)&&(xi=null,eo=vt()+500,Br(t,e));do try{UE();break}catch(a){jy(t,a)}while(!0);Uh(),yc.current=s,Ge=r,St!==null?e=0:(Lt=null,Ut=0,e=Tt)}if(e!==0){if(e===2&&(r=id(t),r!==0&&(i=r,e=Ld(t,r))),e===1)throw n=ha,Br(t,0),Xi(t,i),an(t,vt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!IE(r)&&(e=Mc(t,i),e===2&&(s=id(t),s!==0&&(i=s,e=Ld(t,s))),e===1))throw n=ha,Br(t,0),Xi(t,i),an(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Cr(t,tn,xi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=Kh+500-vt(),10<e)){if(rc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=fd(Cr.bind(null,t,tn,xi),e);break}Cr(t,tn,xi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Gn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*DE(i/1960))-i,10<i){t.timeoutHandle=fd(Cr.bind(null,t,tn,xi),i);break}Cr(t,tn,xi);break;case 5:Cr(t,tn,xi);break;default:throw Error(ee(329))}}}return an(t,vt()),t.callbackNode===n?Wy.bind(null,t):null}function Ld(t,e){var n=Wo;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Mc(t,e),t!==2&&(e=tn,tn=n,e!==null&&Dd(e)),t}function Dd(t){tn===null?tn=t:tn.push.apply(tn,t)}function IE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~qh,e&=~qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function qm(t){if(Ge&6)throw Error(ee(327));Ws();var e=rc(t,0);if(!(e&1))return an(t,vt()),null;var n=Mc(t,e);if(t.tag!==0&&n===2){var i=id(t);i!==0&&(e=i,n=Ld(t,i))}if(n===1)throw n=ha,Br(t,0),Xi(t,e),an(t,vt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,tn,xi),an(t,vt()),null}function Zh(t,e){var n=Ge;Ge|=1;try{return t(e)}finally{Ge=n,Ge===0&&(eo=vt()+500,jc&&mr())}}function qr(t){qi!==null&&qi.tag===0&&!(Ge&6)&&Ws();var e=Ge;Ge|=1;var n=Rn.transition,i=Ke;try{if(Rn.transition=null,Ke=1,t)return t()}finally{Ke=i,Rn.transition=n,Ge=e,!(Ge&6)&&mr()}}function Qh(){hn=Ns.current,ot(Ns)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cE(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(Dh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&cc();break;case 3:Qs(),ot(sn),ot(jt),Vh();break;case 5:Bh(i);break;case 4:Qs();break;case 13:ot(ct);break;case 19:ot(ct);break;case 10:Fh(i.type._context);break;case 22:case 23:Qh()}n=n.return}if(Lt=t,St=t=sr(t.current,null),Ut=hn=e,Tt=0,ha=null,qh=qc=$r=0,tn=Wo=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Nr=null}return t}function jy(t,e){do{var n=St;try{if(Uh(),zl.current=xc,vc){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}vc=!1}if(Yr=0,Pt=Et=ut=null,Ho=!1,ua=0,$h.current=null,n===null||n.return===null){Tt=1,ha=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Fm(o);if(p!==null){p.flags&=-257,Om(p,o,a,s,e),p.mode&1&&Um(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Um(s,c,e),Jh();break e}l=Error(ee(426))}}else if(lt&&a.mode&1){var m=Fm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Om(m,o,a,s,e),Ih(Js(l,a));break e}}s=l=Js(l,a),Tt!==4&&(Tt=2),Wo===null?Wo=[s]:Wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=by(s,l,e);Rm(s,h);break e;case 1:a=l;var x=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ir===null||!ir.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Ry(s,a,e);Rm(s,M);break e}}s=s.return}while(s!==null)}$y(n)}catch(b){e=b,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function Xy(){var t=yc.current;return yc.current=xc,t===null?xc:t}function Jh(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Lt===null||!($r&268435455)&&!(qc&268435455)||Xi(Lt,Ut)}function Mc(t,e){var n=Ge;Ge|=2;var i=Xy();(Lt!==t||Ut!==e)&&(xi=null,Br(t,e));do try{NE();break}catch(r){jy(t,r)}while(!0);if(Uh(),Ge=n,yc.current=i,St!==null)throw Error(ee(261));return Lt=null,Ut=0,Tt}function NE(){for(;St!==null;)Yy(St)}function UE(){for(;St!==null&&!o1();)Yy(St)}function Yy(t){var e=Ky(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?$y(t):St=e,$h.current=null}function $y(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bE(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,St=null;return}}else if(n=CE(n,e,hn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Tt===0&&(Tt=5)}function Cr(t,e,n){var i=Ke,r=Rn.transition;try{Rn.transition=null,Ke=1,FE(t,e,n,i)}finally{Rn.transition=r,Ke=i}return null}function FE(t,e,n,i){do Ws();while(qi!==null);if(Ge&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(g1(t,s),t===Lt&&(St=Lt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,Zy(ic,function(){return Ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=Ke;Ke=1;var a=Ge;Ge|=4,$h.current=null,PE(t,n),Hy(n,t),nE(cd),sc=!!ld,cd=ld=null,t.current=n,LE(n),a1(),Ge=a,Ke=o,Rn.transition=s}else t.current=n;if(tl&&(tl=!1,qi=t,Sc=r),s=t.pendingLanes,s===0&&(ir=null),u1(n.stateNode),an(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_c)throw _c=!1,t=Rd,Rd=null,t;return Sc&1&&t.tag!==0&&Ws(),s=t.pendingLanes,s&1?t===Pd?jo++:(jo=0,Pd=t):jo=0,mr(),null}function Ws(){if(qi!==null){var t=bx(Sc),e=Rn.transition,n=Ke;try{if(Rn.transition=null,Ke=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,Sc=0,Ge&6)throw Error(ee(331));var r=Ge;for(Ge|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Go(8,u,s)}var f=u.child;if(f!==null)f.return=u,pe=f;else for(;pe!==null;){u=pe;var d=u.sibling,p=u.return;if(zy(u),u===c){pe=null;break}if(d!==null){d.return=p,pe=d;break}pe=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Go(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var x=t.current;for(pe=x;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=x;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$c(9,a)}}catch(b){mt(a,a.return,b)}if(a===o){pe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,pe=M;break e}pe=a.return}}if(Ge=r,mr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(Bc,t)}catch{}i=!0}return i}finally{Ke=n,Rn.transition=e}}return!1}function Km(t,e,n){e=Js(n,e),e=by(t,e,1),t=nr(t,e,1),e=Zt(),t!==null&&(Sa(t,1,e),an(t,e))}function mt(t,e,n){if(t.tag===3)Km(t,t,n);else for(;e!==null;){if(e.tag===3){Km(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Js(n,t),t=Ry(e,t,1),e=nr(e,t,1),t=Zt(),e!==null&&(Sa(e,1,t),an(e,t));break}}e=e.return}}function OE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ut&n)===n&&(Tt===4||Tt===3&&(Ut&130023424)===Ut&&500>vt()-Kh?Br(t,0):qh|=n),an(t,e)}function qy(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=Zt();t=Ci(t,e),t!==null&&(Sa(t,e,n),an(t,n))}function kE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qy(t,n)}function zE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),qy(t,n)}var Ky;Ky=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,AE(t,e,n);rn=!!(t.flags&131072)}else rn=!1,lt&&e.flags&1048576&&ey(e,dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Vl(t,e),t=e.pendingProps;var r=qs(e,jt.current);Gs(e,n),r=Gh(null,e,i,t,r,n);var s=Wh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(s=!0,uc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kh(e),r.updater=Yc,e.stateNode=r,r._reactInternals=e,xd(e,i,t,n),e=Sd(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&Lh(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Vl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=VE(i),t=zn(i,t),r){case 0:e=_d(null,e,i,t,n);break e;case 1:e=Bm(null,e,i,t,n);break e;case 11:e=km(null,e,i,t,n);break e;case 14:e=zm(null,e,i,zn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),_d(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Bm(t,e,i,r,n);case 3:e:{if(Iy(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,oy(t,e),mc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Js(Error(ee(423)),e),e=Vm(t,e,i,n,r);break e}else if(i!==r){r=Js(Error(ee(424)),e),e=Vm(t,e,i,n,r);break e}else for(pn=tr(e.stateNode.containerInfo.firstChild),mn=e,lt=!0,Vn=null,n=ry(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),i===r){e=bi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return ay(e),t===null&&md(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ud(i,r)?o=null:s!==null&&ud(i,s)&&(e.flags|=32),Dy(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&md(e),null;case 13:return Ny(t,e,n);case 4:return zh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Zs(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),km(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,et(hc,i._currentValue),i._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===r.children&&!sn.current){e=bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),gd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),gd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Gs(e,n),r=Ln(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),zm(t,e,i,r,n);case 15:return Py(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Vl(t,e),e.tag=1,on(i)?(t=!0,uc(e)):t=!1,Gs(e,n),Cy(e,i,r),xd(e,i,r,n),Sd(null,e,i,!0,t,n);case 19:return Uy(t,e,n);case 22:return Ly(t,e,n)}throw Error(ee(156,e.tag))};function Zy(t,e){return Tx(t,e)}function BE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new BE(t,e,n,i)}function ep(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VE(t){if(typeof t=="function")return ep(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yh)return 11;if(t===_h)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")ep(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ts:return Vr(n.children,r,s,e);case xh:o=8,r|=8;break;case Hf:return t=An(12,n,e,r|2),t.elementType=Hf,t.lanes=s,t;case Gf:return t=An(13,n,e,r),t.elementType=Gf,t.lanes=s,t;case Wf:return t=An(19,n,e,r),t.elementType=Wf,t.lanes=s,t;case ax:return Kc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sx:o=10;break e;case ox:o=9;break e;case yh:o=11;break e;case _h:o=14;break e;case Gi:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Kc(t,e,n,i){return t=An(22,t,i,e),t.elementType=ax,t.lanes=n,t.stateNode={isHidden:!1},t}function zu(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function Bu(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_u(0),this.expirationTimes=_u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_u(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tp(t,e,n,i,r,s,o,a,l){return t=new HE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kh(s),t}function GE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qy(t){if(!t)return cr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(on(n))return Qx(t,n,e)}return e}function Jy(t,e,n,i,r,s,o,a,l){return t=tp(n,i,!0,t,r,s,o,a,l),t.context=Qy(null),n=t.current,i=Zt(),r=rr(n),s=Ti(i,r),s.callback=e??null,nr(n,s,r),t.current.lanes=r,Sa(t,r,i),an(t,i),t}function Zc(t,e,n,i){var r=e.current,s=Zt(),o=rr(r);return n=Qy(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,o),t!==null&&(Wn(t,r,o,s),kl(t,r,o)),o}function Ec(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function np(t,e){Zm(t,e),(t=t.alternate)&&Zm(t,e)}function WE(){return null}var e_=typeof reportError=="function"?reportError:function(t){console.error(t)};function ip(t){this._internalRoot=t}Qc.prototype.render=ip.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Zc(t,e,null,null)};Qc.prototype.unmount=ip.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){Zc(null,t,null,null)}),e[Ai]=null}};function Qc(t){this._internalRoot=t}Qc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&Ix(t)}};function rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qm(){}function jE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ec(o);s.call(c)}}var o=Jy(e,i,t,0,null,!1,!1,"",Qm);return t._reactRootContainer=o,t[Ai]=o.current,sa(t.nodeType===8?t.parentNode:t),qr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ec(l);a.call(c)}}var l=tp(t,0,!1,null,null,!1,!1,"",Qm);return t._reactRootContainer=l,t[Ai]=l.current,sa(t.nodeType===8?t.parentNode:t),qr(function(){Zc(e,l,n,i)}),l}function eu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ec(o);a.call(l)}}Zc(e,o,t,r)}else o=jE(n,e,t,r,i);return Ec(o)}Rx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Io(e.pendingLanes);n!==0&&(Eh(e,n|1),an(e,vt()),!(Ge&6)&&(eo=vt()+500,mr()))}break;case 13:qr(function(){var i=Ci(t,1);if(i!==null){var r=Zt();Wn(i,t,1,r)}}),np(t,1)}};Th=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=Zt();Wn(e,t,134217728,n)}np(t,134217728)}};Px=function(t){if(t.tag===13){var e=rr(t),n=Ci(t,e);if(n!==null){var i=Zt();Wn(n,t,e,i)}np(t,e)}};Lx=function(){return Ke};Dx=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};ed=function(t,e,n){switch(e){case"input":if(Yf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wc(i);if(!r)throw Error(ee(90));cx(i),Yf(i,r)}}}break;case"textarea":fx(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};xx=Zh;yx=qr;var XE={usingClientEntryPoint:!1,Events:[Ea,bs,Wc,gx,vx,Zh]},To={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YE={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mx(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||WE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Bc=nl.inject(YE),si=nl}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XE;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(e))throw Error(ee(200));return GE(t,e,null,n)};yn.createRoot=function(t,e){if(!rp(t))throw Error(ee(299));var n=!1,i="",r=e_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tp(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,sa(t.nodeType===8?t.parentNode:t),new ip(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Mx(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return qr(t)};yn.hydrate=function(t,e,n){if(!Jc(e))throw Error(ee(200));return eu(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!rp(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=e_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Jy(e,null,t,1,n??null,r,!1,s,o),t[Ai]=e.current,sa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Qc(e)};yn.render=function(t,e,n){if(!Jc(e))throw Error(ee(200));return eu(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Jc(t))throw Error(ee(40));return t._reactRootContainer?(qr(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};yn.unstable_batchedUpdates=Zh;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Jc(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return eu(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function t_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t_)}catch(t){console.error(t)}}t_(),tx.exports=yn;var $E=tx.exports,Jm=$E;Bf.createRoot=Jm.createRoot,Bf.hydrateRoot=Jm.hydrateRoot;const sp=Z.createContext({});function wa(t){const e=Z.useRef(null);return e.current===null&&(e.current=t()),e.current}const qE=typeof window<"u",op=qE?Z.useLayoutEffect:Z.useEffect,tu=Z.createContext(null);function ap(t,e){t.indexOf(e)===-1&&t.push(e)}function Tc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const ci=(t,e,n)=>n>e?e:n<t?t:n;let lp=()=>{};const ur={},n_=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function i_(t){return typeof t=="object"&&t!==null}const r_=t=>/^0[^.\s]+$/u.test(t);function s_(t){let e;return()=>(e===void 0&&(e=t()),e)}const Pn=t=>t,KE=(t,e)=>n=>e(t(n)),Aa=(...t)=>t.reduce(KE),pa=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class cp{constructor(){this.subscriptions=[]}add(e){return ap(this.subscriptions,e),()=>Tc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const gn=t=>t*1e3,Cn=t=>t/1e3;function o_(t,e){return e?t*(1e3/e):0}const a_=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,ZE=1e-7,QE=12;function JE(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=a_(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>ZE&&++a<QE);return o}function Ca(t,e,n,i){if(t===e&&n===i)return Pn;const r=s=>JE(s,0,1,t,n);return s=>s===0||s===1?s:a_(r(s),e,i)}const l_=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,c_=t=>e=>1-t(1-e),u_=Ca(.33,1.53,.69,.99),up=c_(u_),f_=l_(up),d_=t=>t>=1?1:(t*=2)<1?.5*up(t):.5*(2-Math.pow(2,-10*(t-1))),fp=t=>1-Math.sin(Math.acos(t)),h_=c_(fp),p_=l_(fp),eT=Ca(.42,0,1,1),tT=Ca(0,0,.58,1),m_=Ca(.42,0,.58,1),nT=t=>Array.isArray(t)&&typeof t[0]!="number",g_=t=>Array.isArray(t)&&typeof t[0]=="number",iT={linear:Pn,easeIn:eT,easeInOut:m_,easeOut:tT,circIn:fp,circInOut:p_,circOut:h_,backIn:up,backInOut:f_,backOut:u_,anticipate:d_},rT=t=>typeof t=="string",eg=t=>{if(g_(t)){lp(t.length===4);const[e,n,i,r]=t;return Ca(e,n,i,r)}else if(rT(t))return iT[t];return t},il=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function sT(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),t()),u(a)}const c={schedule:(u,f=!1,d=!1)=>{const v=d&&r?n:i;return f&&o.add(u),v.add(u),u},cancel:u=>{i.delete(u),o.delete(u)},process:u=>{if(a=u,r){s=!0;return}r=!0;const f=n;n=i,i=f,n.forEach(l),n.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const oT=40;function v_(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=il.reduce((g,M)=>(g[M]=sT(s),g),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:f,preRender:d,render:p,postRender:v}=o,y=()=>{const g=ur.useManualTiming,M=g?r.timestamp:performance.now();n=!1,g||(r.delta=i?1e3/60:Math.max(Math.min(M-r.timestamp,oT),1)),r.timestamp=M,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),f.process(r),d.process(r),p.process(r),v.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(y))},m=()=>{n=!0,i=!0,r.isProcessing||t(y)};return{schedule:il.reduce((g,M)=>{const b=o[M];return g[M]=(A,C=!1,P=!1)=>(n||m(),b.schedule(A,C,P)),g},{}),cancel:g=>{for(let M=0;M<il.length;M++)o[il[M]].cancel(g)},state:r,steps:o}}const{schedule:qe,cancel:Ri,state:It,steps:Vu}=v_(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pn,!0);let jl;function aT(){jl=void 0}const qt={now:()=>(jl===void 0&&qt.set(It.isProcessing||ur.useManualTiming?It.timestamp:performance.now()),jl),set:t=>{jl=t,queueMicrotask(aT)}},x_=t=>e=>typeof e=="string"&&e.startsWith(t),y_=x_("--"),lT=x_("var(--"),dp=t=>lT(t)?cT.test(t.split("/*")[0].trim()):!1,cT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function tg(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const co={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ma={...co,transform:t=>ci(0,1,t)},rl={...co,default:1},Xo=t=>Math.round(t*1e5)/1e5,hp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function uT(t){return t==null}const fT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,pp=(t,e)=>n=>!!(typeof n=="string"&&fT.test(n)&&n.startsWith(t)||e&&!uT(n)&&Object.prototype.hasOwnProperty.call(n,e)),__=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(hp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},dT=t=>ci(0,255,t),Hu={...co,transform:t=>Math.round(dT(t))},Fr={test:pp("rgb","red"),parse:__("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Hu.transform(t)+", "+Hu.transform(e)+", "+Hu.transform(n)+", "+Xo(ma.transform(i))+")"};function hT(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Id={test:pp("#"),parse:hT,transform:Fr.transform},ba=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Vi=ba("deg"),ai=ba("%"),me=ba("px"),pT=ba("vh"),mT=ba("vw"),ng={...ai,parse:t=>ai.parse(t)/100,transform:t=>ai.transform(t*100)},Us={test:pp("hsl","hue"),parse:__("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ai.transform(Xo(e))+", "+ai.transform(Xo(n))+", "+Xo(ma.transform(i))+")"},_t={test:t=>Fr.test(t)||Id.test(t)||Us.test(t),parse:t=>Fr.test(t)?Fr.parse(t):Us.test(t)?Us.parse(t):Id.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Fr.transform(t):Us.transform(t),getAnimatableNone:t=>{const e=_t.parse(t);return e.alpha=0,_t.transform(e)}},gT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function vT(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(hp))==null?void 0:e.length)||0)+(((n=t.match(gT))==null?void 0:n.length)||0)>0}const S_="number",M_="color",xT="var",yT="var(",ig="${}",_T=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function to(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(_T,l=>(_t.test(l)?(i.color.push(s),r.push(M_),n.push(_t.parse(l))):l.startsWith(yT)?(i.var.push(s),r.push(xT),n.push(l)):(i.number.push(s),r.push(S_),n.push(parseFloat(l))),++s,ig)).split(ig);return{values:n,split:a,indexes:i,types:r}}function ST(t){return to(t).values}function E_({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===S_?r+=Xo(i[s]):o===M_?r+=_t.transform(i[s]):r+=i[s]}return r}}function MT(t){return E_(to(t))}const ET=t=>typeof t=="number"?0:_t.test(t)?_t.getAnimatableNone(t):t,TT=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:ET(t);function wT(t){const e=to(t);return E_(e)(e.values.map((i,r)=>TT(i,e.split[r])))}const jn={test:vT,parse:ST,createTransformer:MT,getAnimatableNone:wT};function Gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function AT({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Gu(l,a,t+1/3),s=Gu(l,a,t),o=Gu(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function wc(t,e){return n=>n>0?e:t}const st=(t,e,n)=>t+(e-t)*n,Wu=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},CT=[Id,Fr,Us],bT=t=>CT.find(e=>e.test(t));function rg(t){const e=bT(t);if(!e)return!1;let n=e.parse(t);return e===Us&&(n=AT(n)),n}const sg=(t,e)=>{const n=rg(t),i=rg(e);if(!n||!i)return wc(t,e);const r={...n};return s=>(r.red=Wu(n.red,i.red,s),r.green=Wu(n.green,i.green,s),r.blue=Wu(n.blue,i.blue,s),r.alpha=st(n.alpha,i.alpha,s),Fr.transform(r))},Nd=new Set(["none","hidden"]);function RT(t,e){return Nd.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function PT(t,e){return n=>st(t,e,n)}function mp(t){return typeof t=="number"?PT:typeof t=="string"?dp(t)?wc:_t.test(t)?sg:IT:Array.isArray(t)?T_:typeof t=="object"?_t.test(t)?sg:LT:wc}function T_(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>mp(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function LT(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=mp(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function DT(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const IT=(t,e)=>{const n=jn.createTransformer(e),i=to(t),r=to(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Nd.has(t)&&!r.values.length||Nd.has(e)&&!i.values.length?RT(t,e):Aa(T_(DT(i,r),r.values),n):wc(t,e)};function w_(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?st(t,e,n):mp(t)(t,e)}const NT=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>qe.update(e,n),stop:()=>Ri(e),now:()=>It.isProcessing?It.timestamp:qt.now()}},A_=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Ac=2e4;function gp(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Ac;)e+=n,i=t.next(e);return e>=Ac?1/0:e}function UT(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(gp(i),Ac);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Cn(r)}}const pt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Ud(t,e){return t*Math.sqrt(1-e*e)}const FT=12;function OT(t,e,n){let i=n;for(let r=1;r<FT;r++)i=i-t(i)/e(i);return i}const ju=.001;function kT({duration:t=pt.duration,bounce:e=pt.bounce,velocity:n=pt.velocity,mass:i=pt.mass}){let r,s,o=1-e;o=ci(pt.minDamping,pt.maxDamping,o),t=ci(pt.minDuration,pt.maxDuration,Cn(t)),o<1?(r=c=>{const u=c*o,f=u*t,d=u-n,p=Ud(c,o),v=Math.exp(-f);return ju-d/p*v},s=c=>{const f=c*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,v=Math.exp(-f),y=Ud(Math.pow(c,2),o);return(-r(c)+ju>0?-1:1)*((d-p)*v)/y}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-ju+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=OT(r,s,a);if(t=gn(t),isNaN(l))return{stiffness:pt.stiffness,damping:pt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const zT=["duration","bounce"],BT=["stiffness","damping","mass"];function og(t,e){return e.some(n=>t[n]!==void 0)}function VT(t){let e={velocity:pt.velocity,stiffness:pt.stiffness,damping:pt.damping,mass:pt.mass,isResolvedFromDuration:!1,...t};if(!og(t,BT)&&og(t,zT))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*ci(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:pt.mass,stiffness:r,damping:s}}else{const n=kT({...t,velocity:0});e={...e,...n,mass:pt.mass},e.isResolvedFromDuration=!0}return e}function Cc(t=pt.visualDuration,e=pt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:d,isResolvedFromDuration:p}=VT({...n,velocity:-Cn(n.velocity||0)}),v=d||0,y=c/(2*Math.sqrt(l*u)),m=o-s,h=Cn(Math.sqrt(l/u)),x=Math.abs(m)<5;i||(i=x?pt.restSpeed.granular:pt.restSpeed.default),r||(r=x?pt.restDelta.granular:pt.restDelta.default);let g,M,b,A,C,P;if(y<1)b=Ud(h,y),A=(v+y*h*m)/b,g=_=>{const I=Math.exp(-y*h*_);return o-I*(A*Math.sin(b*_)+m*Math.cos(b*_))},C=y*h*A+m*b,P=y*h*m-A*b,M=_=>Math.exp(-y*h*_)*(C*Math.sin(b*_)+P*Math.cos(b*_));else if(y===1){g=I=>o-Math.exp(-h*I)*(m+(v+h*m)*I);const _=v+h*m;M=I=>Math.exp(-h*I)*(h*_*I-v)}else{const _=h*Math.sqrt(y*y-1);g=Y=>{const X=Math.exp(-y*h*Y),Q=Math.min(_*Y,300);return o-X*((v+y*h*m)*Math.sinh(Q)+_*m*Math.cosh(Q))/_};const I=(v+y*h*m)/_,H=y*h*I-m*_,D=y*h*m-I*_;M=Y=>{const X=Math.exp(-y*h*Y),Q=Math.min(_*Y,300);return X*(H*Math.sinh(Q)+D*Math.cosh(Q))}}const E={calculatedDuration:p&&f||null,velocity:_=>gn(M(_)),next:_=>{if(!p&&y<1){const H=Math.exp(-y*h*_),D=Math.sin(b*_),Y=Math.cos(b*_),X=o-H*(A*D+m*Y),Q=gn(H*(C*D+P*Y));return a.done=Math.abs(Q)<=i&&Math.abs(o-X)<=r,a.value=a.done?o:X,a}const I=g(_);if(p)a.done=_>=f;else{const H=gn(M(_));a.done=Math.abs(H)<=i&&Math.abs(o-I)<=r}return a.value=a.done?o:I,a},toString:()=>{const _=Math.min(gp(E),Ac),I=A_(H=>E.next(_*H).value,_,30);return _+"ms "+I},toTransition:()=>{}};return E}Cc.applyToOptions=t=>{const e=UT(t,100,Cc);return t.ease=e.ease,t.duration=gn(e.duration),t.type="keyframes",t};const HT=5;function C_(t,e,n){const i=Math.max(e-HT,0);return o_(n-t(i),e-i)}function Fd({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,v=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=n*e;const m=f+y,h=o===void 0?m:o(m);h!==m&&(y=h-f);const x=P=>-y*Math.exp(-P/i),g=P=>h+x(P),M=P=>{const E=x(P),_=g(P);d.done=Math.abs(E)<=c,d.value=d.done?h:_};let b,A;const C=P=>{p(d.value)&&(b=P,A=Cc({keyframes:[d.value,v(d.value)],velocity:C_(g,P,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return C(0),{calculatedDuration:null,next:P=>{let E=!1;return!A&&b===void 0&&(E=!0,M(P),C(P)),b!==void 0&&P>=b?A.next(P-b):(!E&&M(P),d)}}}function GT(t,e,n){const i=[],r=n||ur.mix||w_,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Pn:e;a=Aa(l,a)}i.push(a)}return i}function b_(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(lp(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=GT(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);const d=pa(t[f],t[f+1],u);return a[f](d)};return n?u=>c(ci(t[0],t[s-1],u)):c}function WT(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=pa(0,e,i);t.push(st(n,1,r))}}function jT(t){const e=[0];return WT(e,t.length-1),e}function XT(t,e){return t.map(n=>n*e)}function YT(t,e){return t.map(()=>e||m_).splice(0,t.length-1)}function Yo({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=nT(i)?i.map(eg):eg(i),s={done:!1,value:e[0]},o=XT(n&&n.length===e.length?n:jT(e),t),a=b_(o,e,{ease:Array.isArray(r)?r:YT(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const $T=t=>t!==null;function nu(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter($T),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const qT={decay:Fd,inertia:Fd,tween:Yo,keyframes:Yo,spring:Cc};function R_(t){typeof t.type=="string"&&(t.type=qT[t.type])}class vp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const KT=t=>t/100;class ga extends vp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==qt.now()&&this.tick(qt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;R_(e);const{type:n=Yo,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||Yo;l!==Yo&&typeof a[0]!="number"&&(this.mixKeyframes=Aa(KT,w_(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=gp(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:f,repeatType:d,repeatDelay:p,type:v,onUpdate:y,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let g=this.currentTime,M=i;if(f){const P=Math.min(this.currentTime,r)/a;let E=Math.floor(P),_=P%1;!_&&P>=1&&(_=1),_===1&&E--,E=Math.min(E,f+1),!!(E%2)&&(d==="reverse"?(_=1-_,p&&(_-=p/a)):d==="mirror"&&(M=o)),g=ci(0,1,_)*a}let b;x?(this.delayState.value=u[0],b=this.delayState):b=M.next(g),s&&!x&&(b.value=s(b.value));let{done:A}=b;!x&&l!==null&&(A=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return C&&v!==Fd&&(b.value=nu(u,this.options,m,this.speed)),y&&y(b.value),C&&this.finish(),b}then(e,n){return this.finished.then(e,n)}get duration(){return Cn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Cn(e)}get time(){return Cn(this.currentTime)}set time(e){e=gn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return C_(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(qt.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Cn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=NT,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(qt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function ZT(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Or=t=>t*180/Math.PI,Od=t=>{const e=Or(Math.atan2(t[1],t[0]));return kd(e)},QT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Od,rotateZ:Od,skewX:t=>Or(Math.atan(t[1])),skewY:t=>Or(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},kd=t=>(t=t%360,t<0&&(t+=360),t),ag=Od,lg=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),cg=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),JT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:lg,scaleY:cg,scale:t=>(lg(t)+cg(t))/2,rotateX:t=>kd(Or(Math.atan2(t[6],t[5]))),rotateY:t=>kd(Or(Math.atan2(-t[2],t[0]))),rotateZ:ag,rotate:ag,skewX:t=>Or(Math.atan(t[4])),skewY:t=>Or(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function zd(t){return t.includes("scale")?1:0}function Bd(t,e){if(!t||t==="none")return zd(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=JT,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=QT,r=a}if(!r)return zd(e);const s=i[e],o=r[1].split(",").map(tw);return typeof s=="function"?s(o):o[s]}const ew=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Bd(n,e)};function tw(t){return parseFloat(t.trim())}const uo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fo=new Set(uo),ug=t=>t===co||t===me,nw=new Set(["x","y","z"]),iw=uo.filter(t=>!nw.has(t));function rw(t){const e=[];return iw.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Ki={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Bd(e,"x"),y:(t,{transform:e})=>Bd(e,"y")};Ki.translateX=Ki.x;Ki.translateY=Ki.y;const Hr=new Set;let Vd=!1,Hd=!1,Gd=!1;function P_(){if(Hd){const t=Array.from(Hr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=rw(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Hd=!1,Vd=!1,Hr.forEach(t=>t.complete(Gd)),Hr.clear()}function L_(){Hr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Hd=!0)})}function sw(){Gd=!0,L_(),P_(),Gd=!1}class xp{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(Hr.add(this),Vd||(Vd=!0,qe.read(L_),qe.resolveKeyframes(P_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}ZT(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Hr.delete(this)}cancel(){this.state==="scheduled"&&(Hr.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ow=t=>t.startsWith("--");function D_(t,e,n){ow(e)?t.style.setProperty(e,n):t.style[e]=n}const aw={};function I_(t,e){const n=s_(t);return()=>aw[e]??n()}const lw=I_(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),N_=I_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Uo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,fg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Uo([0,.65,.55,1]),circOut:Uo([.55,0,1,.45]),backIn:Uo([.31,.01,.66,-.59]),backOut:Uo([.33,1.53,.69,.99])};function U_(t,e){if(t)return typeof t=="function"?N_()?A_(t,e):"ease-out":g_(t)?Uo(t):Array.isArray(t)?t.map(n=>U_(n,e)||fg.easeOut):fg[t]}function cw(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const f=U_(a,r);Array.isArray(f)&&(u.easing=f);const d={delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(d.pseudoElement=c),t.animate(u,d)}function F_(t){return typeof t=="function"&&"applyToOptions"in t}function uw({type:t,...e}){return F_(t)&&N_()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class O_ extends vp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,lp(typeof e.type!="string");const c=uw(e);this.animation=cw(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=nu(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),D_(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Cn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Cn(e)}get time(){return Cn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=gn(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&lw()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),Pn):r(this)}}const k_={anticipate:d_,backInOut:f_,circInOut:p_};function fw(t){return t in k_}function dw(t){typeof t.ease=="string"&&fw(t.ease)&&(t.ease=k_[t.ease])}const Xu=10;class hw extends O_{constructor(e){dw(e),R_(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new ga({...o,autoplay:!1}),l=Math.max(Xu,qt.now()-this.startTime),c=ci(0,Xu,l-Xu),u=a.sample(l).value,{name:f}=this.options;s&&f&&D_(s,f,u),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,u,c),a.stop()}}const dg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(jn.test(t)||t==="0")&&!t.startsWith("url("));function pw(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function mw(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=dg(r,e),a=dg(s,e);return!o||!a?!1:pw(t)||(n==="spring"||F_(n))&&i}function Wd(t){t.duration=0,t.type="keyframes"}const z_=new Set(["opacity","clipPath","filter","transform"]),gw=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function vw(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&gw.test(t[e]))return!0;return!1}const xw=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),yw=s_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function _w(t){var f;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!(((f=e==null?void 0:e.owner)==null?void 0:f.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return yw()&&n&&(z_.has(n)||xw.has(n)&&vw(a))&&(n!=="transform"||!u)&&!c&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const Sw=40;class Mw extends vp{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...f}){var v;super(),this.stop=()=>{var y,m;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(m=this.keyframeResolver)==null||m.cancel()},this.createdAt=qt.now();const d={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...f},p=(u==null?void 0:u.KeyframeResolver)||xp;this.keyframeResolver=new p(a,(y,m,h)=>this.onKeyframesResolved(y,m,d,!h),l,c,u),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(e,n,i,r){var h,x;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=qt.now();let f=!0;mw(e,s,o,a)||(f=!1,(ur.instantAnimations||!l)&&(u==null||u(nu(e,i,n))),e[0]=e[e.length-1],Wd(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>Sw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},v=f&&!c&&_w(p),y=(x=(h=p.motionValue)==null?void 0:h.owner)==null?void 0:x.current;let m;if(v)try{m=new hw({...p,element:y})}catch{m=new ga(p)}else m=new ga(p);m.finished.then(()=>{this.notifyFinished()}).catch(Pn),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),sw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function B_(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const Ew=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Tw(t){const e=Ew.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function V_(t,e,n=1){const[i,r]=Tw(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return n_(o)?parseFloat(o):o}return dp(r)?V_(r,e,n+1):r}const ww={type:"spring",stiffness:500,damping:25,restSpeed:10},Aw=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Cw={type:"keyframes",duration:.8},bw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Rw=(t,{keyframes:e})=>e.length>2?Cw:fo.has(t)?t.startsWith("scale")?Aw(e[1]):ww:bw;function H_(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function yp(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?H_(n,t):n}const Pw=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Lw(t){for(const e in t)if(!Pw.has(e))return!0;return!1}const _p=(t,e,n,i={},r,s)=>o=>{const a=yp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-gn(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};Lw(a)||Object.assign(u,Rw(t,u)),u.duration&&(u.duration=gn(u.duration)),u.repeatDelay&&(u.repeatDelay=gn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Wd(u),u.delay===0&&(f=!0)),(ur.instantAnimations||ur.skipAnimations||r!=null&&r.shouldSkipAnimations)&&(f=!0,Wd(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,f&&!s&&e.get()!==void 0){const d=nu(u.keyframes,a);if(d!==void 0){qe.update(()=>{u.onUpdate(d),u.onComplete()});return}}return a.isSync?new ga(u):new Mw(u)};function hg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Sp(t,e,n,i){if(typeof e=="function"){const[r,s]=hg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=hg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function Gr(t,e,n){const i=t.getProps();return Sp(i,e,n!==void 0?n:i.custom,t)}const G_=new Set(["width","height","top","left","right","bottom",...uo]),pg=30,Dw=t=>!isNaN(parseFloat(t)),$o={current:void 0};class Iw{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=qt.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=qt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Dw(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new cp);const i=this.events[e].add(n);return e==="change"?()=>{i(),qe.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return $o.current&&$o.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=qt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>pg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,pg);return o_(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Kr(t,e){return new Iw(t,e)}const jd=t=>Array.isArray(t);function Nw(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Kr(n))}function Uw(t){return jd(t)?t[t.length-1]||0:t}function Fw(t,e){const n=Gr(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=Uw(s[o]);Nw(t,o,a)}}const wt=t=>!!(t&&t.getVelocity);function Ow(t){return!!(wt(t)&&t.add)}function Xd(t,e){const n=t.getValue("willChange");if(Ow(n))return n.add(e);if(!n&&ur.WillChange){const i=new ur.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Mp(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const kw="framerAppearId",W_="data-"+Mp(kw);function j_(t){return t.props[W_]}function zw({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function X_(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?H_(s,l):l;const c=s==null?void 0:s.reduceMotion;i&&(s=i);const u=[],f=r&&t.animationState&&t.animationState.getState()[r];for(const d in a){const p=t.getValue(d,t.latestValues[d]??null),v=a[d];if(v===void 0||f&&zw(f,d))continue;const y={delay:n,...yp(s||{},d)},m=p.get();if(m!==void 0&&!p.isAnimating()&&!Array.isArray(v)&&v===m&&!y.velocity){qe.update(()=>p.set(v));continue}let h=!1;if(window.MotionHandoffAnimation){const M=j_(t);if(M){const b=window.MotionHandoffAnimation(M,d,qe);b!==null&&(y.startTime=b,h=!0)}}Xd(t,d);const x=c??t.shouldReduceMotion;p.start(_p(d,p,v,x&&G_.has(d)?{type:!1}:y,t,h));const g=p.animation;g&&u.push(g)}if(o){const d=()=>qe.update(()=>{o&&Fw(t,o)});u.length?Promise.all(u).then(d):d()}return u}function Yd(t,e,n={}){var l;const i=Gr(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(X_(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=r;return Bw(t,e,c,u,f,d,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function Bw(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(Yd(l,e,{...o,delay:n+(typeof i=="function"?0:i)+B_(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function Vw(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Yd(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Yd(t,e,n);else{const r=typeof e=="function"?Gr(t,e,n.custom):e;i=Promise.all(X_(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const Hw={test:t=>t==="auto",parse:t=>t},Y_=t=>e=>e.test(t),$_=[co,me,ai,Vi,mT,pT,Hw],mg=t=>$_.find(Y_(t));function Gw(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||r_(t):!0}const Ww=new Set(["brightness","contrast","saturate","opacity"]);function jw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(hp)||[];if(!i)return t;const r=n.replace(i,"");let s=Ww.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Xw=/\b([a-z-]*)\(.*?\)/gu,$d={...jn,getAnimatableNone:t=>{const e=t.match(Xw);return e?e.map(jw).join(" "):t}},qd={...jn,getAnimatableNone:t=>{const e=jn.parse(t);return jn.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},gg={...co,transform:Math.round},Yw={rotate:Vi,rotateX:Vi,rotateY:Vi,rotateZ:Vi,scale:rl,scaleX:rl,scaleY:rl,scaleZ:rl,skew:Vi,skewX:Vi,skewY:Vi,distance:me,translateX:me,translateY:me,translateZ:me,x:me,y:me,z:me,perspective:me,transformPerspective:me,opacity:ma,originX:ng,originY:ng,originZ:me},Ep={borderWidth:me,borderTopWidth:me,borderRightWidth:me,borderBottomWidth:me,borderLeftWidth:me,borderRadius:me,borderTopLeftRadius:me,borderTopRightRadius:me,borderBottomRightRadius:me,borderBottomLeftRadius:me,width:me,maxWidth:me,height:me,maxHeight:me,top:me,right:me,bottom:me,left:me,inset:me,insetBlock:me,insetBlockStart:me,insetBlockEnd:me,insetInline:me,insetInlineStart:me,insetInlineEnd:me,padding:me,paddingTop:me,paddingRight:me,paddingBottom:me,paddingLeft:me,paddingBlock:me,paddingBlockStart:me,paddingBlockEnd:me,paddingInline:me,paddingInlineStart:me,paddingInlineEnd:me,margin:me,marginTop:me,marginRight:me,marginBottom:me,marginLeft:me,marginBlock:me,marginBlockStart:me,marginBlockEnd:me,marginInline:me,marginInlineStart:me,marginInlineEnd:me,fontSize:me,backgroundPositionX:me,backgroundPositionY:me,...Yw,zIndex:gg,fillOpacity:ma,strokeOpacity:ma,numOctaves:gg},$w={...Ep,color:_t,backgroundColor:_t,outlineColor:_t,fill:_t,stroke:_t,borderColor:_t,borderTopColor:_t,borderRightColor:_t,borderBottomColor:_t,borderLeftColor:_t,filter:$d,WebkitFilter:$d,mask:qd,WebkitMask:qd},q_=t=>$w[t],qw=new Set([$d,qd]);function K_(t,e){let n=q_(t);return qw.has(n)||(n=jn),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Kw=new Set(["auto","none","0"]);function Zw(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!Kw.has(s)&&to(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=K_(n,r)}class Qw extends xp{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let f=e[u];if(typeof f=="string"&&(f=f.trim(),dp(f))){const d=V_(f,n.current);d!==void 0&&(e[u]=d),u===e.length-1&&(this.finalKeyframe=f)}}if(this.resolveNoneKeyframes(),!G_.has(i)||e.length!==2)return;const[r,s]=e,o=mg(r),a=mg(s),l=tg(r),c=tg(s);if(l!==c&&Ki[i]){this.needsMeasurement=!0;return}if(o!==a)if(ug(o)&&ug(a))for(let u=0;u<e.length;u++){const f=e[u];typeof f=="string"&&(e[u]=parseFloat(f))}else Ki[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||Gw(e[r]))&&i.push(r);i.length&&Zw(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ki[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=Ki[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function Z_(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const Q_=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function Xl(t){return i_(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Tp}=v_(queueMicrotask,!1),kn={x:!1,y:!1};function J_(){return kn.x||kn.y}function Jw(t){return t==="x"||t==="y"?kn[t]?null:(kn[t]=!0,()=>{kn[t]=!1}):kn.x||kn.y?null:(kn.x=kn.y=!0,()=>{kn.x=kn.y=!1})}function eS(t,e){const n=Z_(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function eA(t){return!(t.pointerType==="touch"||J_())}function tA(t,e,n={}){const[i,r,s]=eS(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",v)},f=m=>{c&&(c(m),c=void 0),u()},d=m=>{a=!1,window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),l&&(l=!1,f(m))},p=()=>{a=!0,window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",d,r)},v=m=>{if(m.pointerType!=="touch"){if(a){l=!0;return}f(m)}},y=m=>{if(!eA(m))return;l=!1;const h=e(o,m);typeof h=="function"&&(c=h,o.addEventListener("pointerleave",v,r))};o.addEventListener("pointerenter",y,r),o.addEventListener("pointerdown",p,r)}),s}const tS=(t,e)=>e?t===e?!0:tS(t,e.parentElement):!1,wp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,nA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function iA(t){return nA.has(t.tagName)||t.isContentEditable===!0}const rA=new Set(["INPUT","SELECT","TEXTAREA"]);function sA(t){return rA.has(t.tagName)||t.isContentEditable===!0}const Yl=new WeakSet;function vg(t){return e=>{e.key==="Enter"&&t(e)}}function Yu(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const oA=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=vg(()=>{if(Yl.has(n))return;Yu(n,"down");const r=vg(()=>{Yu(n,"up")}),s=()=>Yu(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function xg(t){return wp(t)&&!J_()}const yg=new WeakSet;function aA(t,e,n={}){const[i,r,s]=eS(t,n),o=a=>{const l=a.currentTarget;if(!xg(a)||yg.has(a))return;Yl.add(l),n.stopPropagation&&yg.add(a);const c=e(l,a),u=(p,v)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),Yl.has(l)&&Yl.delete(l),xg(p)&&typeof c=="function"&&c(p,{success:v})},f=p=>{u(p,l===window||l===document||n.useGlobalTarget||tS(l,p.target))},d=p=>{u(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),Xl(a)&&(a.addEventListener("focus",c=>oA(c,r)),!iA(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Ap(t){return i_(t)&&"ownerSVGElement"in t}const $l=new WeakMap;let Hi;const nS=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Ap(i)&&"getBBox"in i?i.getBBox()[e]:i[n],lA=nS("inline","width","offsetWidth"),cA=nS("block","height","offsetHeight");function uA({target:t,borderBoxSize:e}){var n;(n=$l.get(t))==null||n.forEach(i=>{i(t,{get width(){return lA(t,e)},get height(){return cA(t,e)}})})}function fA(t){t.forEach(uA)}function dA(){typeof ResizeObserver>"u"||(Hi=new ResizeObserver(fA))}function hA(t,e){Hi||dA();const n=Z_(t);return n.forEach(i=>{let r=$l.get(i);r||(r=new Set,$l.set(i,r)),r.add(e),Hi==null||Hi.observe(i)}),()=>{n.forEach(i=>{const r=$l.get(i);r==null||r.delete(e),r!=null&&r.size||Hi==null||Hi.unobserve(i)})}}const ql=new Set;let Fs;function pA(){Fs=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};ql.forEach(e=>e(t))},window.addEventListener("resize",Fs)}function mA(t){return ql.add(t),Fs||pA(),()=>{ql.delete(t),!ql.size&&typeof Fs=="function"&&(window.removeEventListener("resize",Fs),Fs=void 0)}}function _g(t,e){return typeof t=="function"?mA(t):hA(t,e)}function gA(t){return Ap(t)&&t.tagName==="svg"}function vA(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=b_(r,s,o);return e?a(i):a}function xA(t,e,n={}){const i=t.get();let r=null,s=i,o;const a=typeof i=="string"?i.replace(/[\d.-]/g,""):void 0,l=()=>{r&&(r.stop(),r=null),t.animation=void 0},c=()=>{const f=Sg(t.get()),d=Sg(s);if(f===d){l();return}const p=r?r.getGeneratorVelocity():t.getVelocity();l(),r=new ga({keyframes:[f,d],velocity:p,type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:o})},u=()=>{var f;c(),t.animation=r??void 0,(f=t.events.animationStart)==null||f.notify(),r==null||r.then(()=>{var d;t.animation=void 0,(d=t.events.animationComplete)==null||d.notify()})};if(t.attach((f,d)=>{s=f,o=p=>d($u(p,a)),qe.postRender(u)},l),wt(e)){let f=n.skipInitialAnimation===!0;const d=e.on("change",v=>{f?(f=!1,t.jump($u(v,a),!1)):t.set($u(v,a))}),p=t.on("destroy",d);return()=>{d(),p()}}return l}function $u(t,e){return e?t+e:t}function Sg(t){return typeof t=="number"?t:parseFloat(t)}const yA=[...$_,_t,jn],_A=t=>yA.find(Y_(t)),Mg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Os=()=>({x:Mg(),y:Mg()}),Eg=()=>({min:0,max:0}),Mt=()=>({x:Eg(),y:Eg()}),SA=new WeakMap;function iu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function va(t){return typeof t=="string"||Array.isArray(t)}const Cp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bp=["initial",...Cp];function ru(t){return iu(t.animate)||bp.some(e=>va(t[e]))}function iS(t){return!!(ru(t)||t.variants)}function MA(t,e,n){for(const i in e){const r=e[i],s=n[i];if(wt(r))t.addValue(i,r);else if(wt(s))t.addValue(i,Kr(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Kr(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Kd={current:null},rS={current:!1},EA=typeof window<"u";function TA(){if(rS.current=!0,!!EA)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Kd.current=t.matches;t.addEventListener("change",e),e()}else Kd.current=!1}const Tg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let bc={};function sS(t){bc=t}function wA(){return bc}class AA{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=xp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=qt.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,qe.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=ru(n),this.isVariantNode=iS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in d){const v=d[p];c[p]!==void 0&&wt(v)&&v.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,SA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(rS.current||TA(),this.shouldReduceMotion=Kd.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Ri(this.notifyUpdate),Ri(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&z_.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,f=new O_({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:gn(u)}),d=o(f);this.valueSubscriptions.set(e,()=>{d(),f.cancel()});return}const i=fo.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&qe.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in bc){const n=bc[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Mt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Tg.length;i++){const r=Tg[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=MA(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Kr(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(n_(i)||r_(i))?i=parseFloat(i):!_A(i)&&jn.test(n)&&(i=K_(e,n)),this.setBaseTarget(e,wt(i)?i.get():i)),wt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=Sp(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!wt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new cp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Tp.render(this.render)}}class oS extends AA{constructor(){super(...arguments),this.KeyframeResolver=Qw}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;wt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class gr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function aS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function CA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function bA(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function qu(t){return t===void 0||t===1}function Zd({scale:t,scaleX:e,scaleY:n}){return!qu(t)||!qu(e)||!qu(n)}function br(t){return Zd(t)||lS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function lS(t){return wg(t.x)||wg(t.y)}function wg(t){return t&&t!=="0%"}function Rc(t,e,n){const i=t-n,r=e*i;return n+r}function Ag(t,e,n,i,r){return r!==void 0&&(t=Rc(t,r,i)),Rc(t,n,i)+e}function Qd(t,e=0,n=1,i,r){t.min=Ag(t.min,e,n,i,r),t.max=Ag(t.max,e,n,i,r)}function cS(t,{x:e,y:n}){Qd(t.x,e.translate,e.scale,e.originPoint),Qd(t.y,n.translate,n.scale,n.originPoint)}const Cg=.999999999999,bg=1.0000000000001;function RA(t,e,n,i=!1){var a;const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(Jn(t.x,-s.scroll.offset.x),Jn(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,cS(t,o)),i&&br(s.latestValues)&&Kl(t,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}e.x<bg&&e.x>Cg&&(e.x=1),e.y<bg&&e.y>Cg&&(e.y=1)}function Jn(t,e){t.min+=e,t.max+=e}function Rg(t,e,n,i,r=.5){const s=st(t.min,t.max,r);Qd(t,e,n,s,i)}function Pg(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Kl(t,e,n){const i=n??t;Rg(t.x,Pg(e.x,i.x),e.scaleX,e.scale,e.originX),Rg(t.y,Pg(e.y,i.y),e.scaleY,e.scale,e.originY)}function uS(t,e){return aS(bA(t.getBoundingClientRect(),e))}function PA(t,e,n){const i=uS(t,n),{scroll:r}=e;return r&&(Jn(i.x,r.offset.x),Jn(i.y,r.offset.y)),i}const LA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},DA=uo.length;function IA(t,e,n){let i="",r=!0;for(let s=0;s<DA;s++){const o=uo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||n){const c=Q_(a,Ep[o]);if(!l){r=!1;const u=LA[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Rp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(fo.has(l)){o=!0;continue}else if(y_(l)){r[l]=c;continue}else{const u=Q_(c,Ep[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=IA(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}function fS(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function Lg(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const wo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(me.test(t))t=parseFloat(t);else return t;const n=Lg(t,e.target.x),i=Lg(t,e.target.y);return`${n}% ${i}%`}},NA={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=jn.parse(t);if(r.length>5)return i;const s=jn.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=st(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},Jd={borderRadius:{...wo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wo,borderTopRightRadius:wo,borderBottomLeftRadius:wo,borderBottomRightRadius:wo,boxShadow:NA};function dS(t,{layout:e,layoutId:n}){return fo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Jd[t]||t==="opacity")}function Pp(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(wt(i[a])||r&&wt(r[a])||dS(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function UA(t){return window.getComputedStyle(t)}class FA extends oS{constructor(){super(...arguments),this.type="html",this.renderInstance=fS}readValueFromInstance(e,n){var i;if(fo.has(n))return(i=this.projection)!=null&&i.isProjecting?zd(n):ew(e,n);{const r=UA(e),s=(y_(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return uS(e,n)}build(e,n,i){Rp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Pp(e,n,i)}}const OA={offset:"stroke-dashoffset",array:"stroke-dasharray"},kA={offset:"strokeDashoffset",array:"strokeDasharray"};function zA(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?OA:kA;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const BA=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function hS(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(Rp(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:d}=t;f.transform&&(d.transform=f.transform,delete f.transform),(d.transform||f.transformOrigin)&&(d.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),d.transform&&(d.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete f.transformBox);for(const p of BA)f[p]!==void 0&&(d[p]=f[p],delete f[p]);e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),r!==void 0&&zA(f,r,s,o,!1)}const pS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),mS=t=>typeof t=="string"&&t.toLowerCase()==="svg";function VA(t,e,n,i){fS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(pS.has(r)?r:Mp(r),e.attrs[r])}function gS(t,e,n){const i=Pp(t,e,n);for(const r in t)if(wt(t[r])||wt(e[r])){const s=uo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class HA extends oS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Mt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(fo.has(n)){const i=q_(n);return i&&i.default||0}return n=pS.has(n)?n:Mp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return gS(e,n,i)}build(e,n,i){hS(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){VA(e,n,i,r)}mount(e){this.isSVGTag=mS(e.tagName),super.mount(e)}}const GA=bp.length;function vS(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?vS(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<GA;n++){const i=bp[n],r=t.props[i];(va(r)||r===!1)&&(e[i]=r)}return e}function xS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const WA=[...Cp].reverse(),jA=Cp.length;function XA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>Vw(t,n,i)))}function YA(t){let e=XA(t),n=Dg(),i=!0,r=!1;const s=c=>(u,f)=>{var p;const d=Gr(t,f,c==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(d){const{transition:v,transitionEnd:y,...m}=d;u={...u,...m,...y}}return u};function o(c){e=c(t)}function a(c){const{props:u}=t,f=vS(t.parent)||{},d=[],p=new Set;let v={},y=1/0;for(let h=0;h<jA;h++){const x=WA[h],g=n[x],M=u[x]!==void 0?u[x]:f[x],b=va(M),A=x===c?g.isActive:null;A===!1&&(y=h);let C=M===f[x]&&M!==u[x]&&b;if(C&&(i||r)&&t.manuallyAnimateOnMount&&(C=!1),g.protectedKeys={...v},!g.isActive&&A===null||!M&&!g.prevProp||iu(M)||typeof M=="boolean")continue;if(x==="exit"&&g.isActive&&A!==!0){g.prevResolvedValues&&(v={...v,...g.prevResolvedValues});continue}const P=$A(g.prevProp,M);let E=P||x===c&&g.isActive&&!C&&b||h>y&&b,_=!1;const I=Array.isArray(M)?M:[M];let H=I.reduce(s(x),{});A===!1&&(H={});const{prevResolvedValues:D={}}=g,Y={...D,...H},X=L=>{E=!0,p.has(L)&&(_=!0,p.delete(L)),g.needsAnimating[L]=!0;const B=t.getValue(L);B&&(B.liveStyle=!1)};for(const L in Y){const B=H[L],G=D[L];if(v.hasOwnProperty(L))continue;let re=!1;jd(B)&&jd(G)?re=!xS(B,G):re=B!==G,re?B!=null?X(L):p.add(L):B!==void 0&&p.has(L)?X(L):g.protectedKeys[L]=!0}g.prevProp=M,g.prevResolvedValues=H,g.isActive&&(v={...v,...H}),(i||r)&&t.blockInitialAnimation&&(E=!1);const Q=C&&P;E&&(!Q||_)&&d.push(...I.map(L=>{const B={type:x};if(typeof L=="string"&&(i||r)&&!Q&&t.manuallyAnimateOnMount&&t.parent){const{parent:G}=t,re=Gr(G,L);if(G.enteringChildren&&re){const{delayChildren:xe}=re.transition||{};B.delay=B_(G.enteringChildren,t,xe)}}return{animation:L,options:B}}))}if(p.size){const h={};if(typeof u.initial!="boolean"){const x=Gr(t,Array.isArray(u.initial)?u.initial[0]:u.initial);x&&x.transition&&(h.transition=x.transition)}p.forEach(x=>{const g=t.getBaseTarget(x),M=t.getValue(x);M&&(M.liveStyle=!0),h[x]=g??null}),d.push({animation:h})}let m=!!d.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(m=!1),i=!1,r=!1,m?e(d):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=t.variantChildren)==null||d.forEach(p=>{var v;return(v=p.animationState)==null?void 0:v.setActive(c,u)}),n[c].isActive=u;const f=a(c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Dg(),r=!0}}}function $A(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!xS(e,t):!1}function yr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Dg(){return{animate:yr(!0),whileInView:yr(),whileHover:yr(),whileTap:yr(),whileDrag:yr(),whileFocus:yr(),exit:yr()}}function eh(t,e){t.min=e.min,t.max=e.max}function Nn(t,e){eh(t.x,e.x),eh(t.y,e.y)}function Ig(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const yS=1e-4,qA=1-yS,KA=1+yS,_S=.01,ZA=0-_S,QA=0+_S;function Kt(t){return t.max-t.min}function JA(t,e,n){return Math.abs(t-e)<=n}function Ng(t,e,n,i=.5){t.origin=i,t.originPoint=st(e.min,e.max,t.origin),t.scale=Kt(n)/Kt(e),t.translate=st(n.min,n.max,t.origin)-t.originPoint,(t.scale>=qA&&t.scale<=KA||isNaN(t.scale))&&(t.scale=1),(t.translate>=ZA&&t.translate<=QA||isNaN(t.translate))&&(t.translate=0)}function qo(t,e,n,i){Ng(t.x,e.x,n.x,i?i.originX:void 0),Ng(t.y,e.y,n.y,i?i.originY:void 0)}function Ug(t,e,n,i=0){const r=i?st(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+Kt(e)}function e2(t,e,n,i){Ug(t.x,e.x,n.x,i==null?void 0:i.x),Ug(t.y,e.y,n.y,i==null?void 0:i.y)}function Fg(t,e,n,i=0){const r=i?st(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+Kt(e)}function Pc(t,e,n,i){Fg(t.x,e.x,n.x,i==null?void 0:i.x),Fg(t.y,e.y,n.y,i==null?void 0:i.y)}function Og(t,e,n,i,r){return t-=e,t=Rc(t,1/n,i),r!==void 0&&(t=Rc(t,1/r,i)),t}function t2(t,e=0,n=1,i=.5,r,s=t,o=t){if(ai.test(e)&&(e=parseFloat(e),e=st(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=st(s.min,s.max,i);t===s&&(a-=e),t.min=Og(t.min,e,n,a,r),t.max=Og(t.max,e,n,a,r)}function kg(t,e,[n,i,r],s,o){t2(t,e[n],e[i],e[r],e.scale,s,o)}const n2=["x","scaleX","originX"],i2=["y","scaleY","originY"];function zg(t,e,n,i){kg(t.x,e,n2,n?n.x:void 0,i?i.x:void 0),kg(t.y,e,i2,n?n.y:void 0,i?i.y:void 0)}function Bg(t){return t.translate===0&&t.scale===1}function SS(t){return Bg(t.x)&&Bg(t.y)}function Vg(t,e){return t.min===e.min&&t.max===e.max}function r2(t,e){return Vg(t.x,e.x)&&Vg(t.y,e.y)}function Hg(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function MS(t,e){return Hg(t.x,e.x)&&Hg(t.y,e.y)}function Gg(t){return Kt(t.x)/Kt(t.y)}function Wg(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Zn(t){return[t("x"),t("y")]}function s2(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:d,skewX:p,skewY:v}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),v&&(i+=`skewY(${v}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const ES=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],o2=ES.length,jg=t=>typeof t=="string"?parseFloat(t):t,Xg=t=>typeof t=="number"||me.test(t);function a2(t,e,n,i,r,s){r?(t.opacity=st(0,n.opacity??1,l2(i)),t.opacityExit=st(e.opacity??1,0,c2(i))):s&&(t.opacity=st(e.opacity??1,n.opacity??1,i));for(let o=0;o<o2;o++){const a=ES[o];let l=Yg(e,a),c=Yg(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Xg(l)===Xg(c)?(t[a]=Math.max(st(jg(l),jg(c),i),0),(ai.test(c)||ai.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=st(e.rotate||0,n.rotate||0,i))}function Yg(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const l2=TS(0,.5,h_),c2=TS(.5,.95,Pn);function TS(t,e,n){return i=>i<t?0:i>e?1:n(pa(t,e,i))}function u2(t,e,n){const i=wt(t)?t:Kr(t);return i.start(_p("",i,e,n)),i.animation}function xa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const f2=(t,e)=>t.depth-e.depth;class d2{constructor(){this.children=[],this.isDirty=!1}add(e){ap(this.children,e),this.isDirty=!0}remove(e){Tc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(f2),this.isDirty=!1,this.children.forEach(e)}}function h2(t,e){const n=qt.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ri(i),t(s-e))};return qe.setup(i,!0),()=>Ri(i)}function Zl(t){return wt(t)?t.get():t}class p2{constructor(){this.members=[]}add(e){ap(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(Tc(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(Tc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Ql={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ku=["","X","Y","Z"],m2=1e3;let g2=0;function Zu(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function wS(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=j_(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",qe,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&wS(i)}function AS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=g2++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(y2),this.nodes.forEach(w2),this.nodes.forEach(A2),this.nodes.forEach(_2)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new d2)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new cp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Ap(o)&&!gA(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,f=0;const d=()=>this.root.updateBlockedByResize=!1;qe.read(()=>{f=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==f&&(f=p,this.root.updateBlockedByResize=!0,u&&u(),u=h2(d,250),Ql.hasAnimatedSinceResize&&(Ql.hasAnimatedSinceResize=!1,this.nodes.forEach(Kg)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:f,hasRelativeLayoutChanged:d,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||c.getDefaultTransition()||L2,{onLayoutAnimationStart:y,onLayoutAnimationComplete:m}=c.getProps(),h=!this.targetLayout||!MS(this.targetLayout,p),x=!f&&d;if(this.options.layoutRoot||this.resumeFrom||x||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const g={...yp(v,"layout"),onPlay:y,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(g.delay=0,g.type=!1),this.startAnimation(g),this.setAnimationOrigin(u,x)}else f||Kg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ri(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(C2),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,(typeof f.latestValues.x=="string"||typeof f.latestValues.y=="string")&&(f.isLayoutDirty=!0),f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(M2),this.nodes.forEach($g);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(qg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(E2),this.nodes.forEach(T2),this.nodes.forEach(v2),this.nodes.forEach(x2)):this.nodes.forEach(qg),this.clearAllSnapshots();const a=qt.now();It.delta=ci(0,1e3/60,a-It.timestamp),It.timestamp=a,It.isProcessing=!0,Vu.update.process(It),Vu.preRender.process(It),Vu.render.process(It),It.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Tp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(S2),this.sharedNodes.forEach(b2)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,qe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){qe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Kt(this.snapshot.measuredBox.x)&&!Kt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Mt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!SS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||br(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),D2(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return Mt();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(I2))){const{scroll:u}=this.root;u&&(Jn(a.x,u.offset.x),Jn(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=Mt();if(Nn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:d}=u;u!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&Nn(a,o),Jn(a.x,f.offset.x),Jn(a.y,f.offset.y))}return a}applyTransform(o,a=!1,l){var u,f;const c=l||Mt();Nn(c,o);for(let d=0;d<this.path.length;d++){const p=this.path[d];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(Jn(c.x,-p.scroll.offset.x),Jn(c.y,-p.scroll.offset.y)),br(p.latestValues)&&Kl(c,p.latestValues,(u=p.layout)==null?void 0:u.layoutBox)}return br(this.latestValues)&&Kl(c,this.latestValues,(f=this.layout)==null?void 0:f.layoutBox),c}removeTransform(o){var l;const a=Mt();Nn(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!br(u.latestValues))continue;let f;u.instance&&(Zd(u.latestValues)&&u.updateSnapshot(),f=Mt(),Nn(f,u.measurePageBox())),zg(a,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,f)}return br(this.latestValues)&&zg(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==It.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:f}=this.options;if(!this.layout||!(u||f))return;this.resolvedRelativeTargetAt=It.timestamp;const d=this.getClosestProjectingParent();d&&this.linkedParentVersion!==d.layoutVersion&&!d.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&d&&d.layout?this.createRelativeTarget(d,this.layout.layoutBox,d.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Mt(),this.targetWithTransforms=Mt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),e2(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Nn(this.target,this.layout.layoutBox),cS(this.target,this.targetDelta)):Nn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?this.createRelativeTarget(d,this.target,d.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Zd(this.parent.latestValues)||lS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),Pc(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Nn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var v;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===It.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Nn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,d=this.treeScale.y;RA(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Mt());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ig(this.prevProjectionDelta.x,this.projectionDelta.x),Ig(this.prevProjectionDelta.y,this.projectionDelta.y)),qo(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==d||!Wg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Wg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Os(),this.projectionDelta=Os(),this.projectionDeltaWithTransform=Os()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Os();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=Mt(),p=l?l.source:void 0,v=this.layout?this.layout.source:void 0,y=p!==v,m=this.getStack(),h=!m||m.members.length<=1,x=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(P2));this.animationProgress=0;let g;this.mixTargetDelta=M=>{const b=M/1e3;Zg(f.x,o.x,b),Zg(f.y,o.y,b),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pc(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),R2(this.relativeTarget,this.relativeTargetOrigin,d,b),g&&r2(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=Mt()),Nn(g,this.relativeTarget)),y&&(this.animationValues=u,a2(u,c,this.latestValues,b,x,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=b},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Ri(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=qe.update(()=>{Ql.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Kr(0)),this.motionValue.jump(0,!1),this.currentAnimation=u2(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(m2),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&CS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Mt();const f=Kt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=Kt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Nn(a,l),Kl(a,u),qo(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new p2),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Zu("z",o,c,this.animationValues);for(let u=0;u<Ku.length;u++)Zu(`rotate${Ku[u]}`,o,c,this.animationValues),Zu(`skew${Ku[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Zl(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Zl(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!br(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=s2(this.projectionDeltaWithTransform,this.treeScale,u);l&&(f=l(u,f)),o.transform=f;const{x:d,y:p}=this.projectionDelta;o.transformOrigin=`${d.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const v in Jd){if(u[v]===void 0)continue;const{correct:y,applyTo:m,isCSSVariable:h}=Jd[v],x=f==="none"?u[v]:y(u[v],c);if(m){const g=m.length;for(let M=0;M<g;M++)o[m[M]]=x}else h?this.options.visualElement.renderState.vars[v]=x:o[v]=x}this.options.layoutId&&(o.pointerEvents=c===this?Zl(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach($g),this.root.sharedNodes.clear()}}}function v2(t){t.updateLayout()}function x2(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")Zn(f=>{const d=o?e.measuredBox[f]:e.layoutBox[f],p=Kt(d);d.min=i[f].min,d.max=d.min+p});else if(s==="x"||s==="y"){const f=s==="x"?"y":"x";eh(o?e.measuredBox[f]:e.layoutBox[f],i[f])}else CS(s,e.layoutBox,i)&&Zn(f=>{const d=o?e.measuredBox[f]:e.layoutBox[f],p=Kt(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Os();qo(a,i,e.layoutBox);const l=Os();o?qo(l,t.applyTransform(r,!0),e.measuredBox):qo(l,i,e.layoutBox);const c=!SS(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const v=t.options.layoutAnchor||void 0,y=Mt();Pc(y,e.layoutBox,d.layoutBox,v);const m=Mt();Pc(m,i,p.layoutBox,v),MS(y,m)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=m,t.relativeTargetOrigin=y,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function y2(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function _2(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function S2(t){t.clearSnapshot()}function $g(t){t.clearMeasurements()}function M2(t){t.isLayoutDirty=!0,t.updateLayout()}function qg(t){t.isLayoutDirty=!1}function E2(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function T2(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Kg(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function w2(t){t.resolveTargetDelta()}function A2(t){t.calcProjection()}function C2(t){t.resetSkewAndRotation()}function b2(t){t.removeLeadSnapshot()}function Zg(t,e,n){t.translate=st(e.translate,0,n),t.scale=st(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Qg(t,e,n,i){t.min=st(e.min,n.min,i),t.max=st(e.max,n.max,i)}function R2(t,e,n,i){Qg(t.x,e.x,n.x,i),Qg(t.y,e.y,n.y,i)}function P2(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const L2={duration:.45,ease:[.4,0,.1,1]},Jg=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),e0=Jg("applewebkit/")&&!Jg("chrome/")?Math.round:Pn;function t0(t){t.min=e0(t.min),t.max=e0(t.max)}function D2(t){t0(t.x),t0(t.y)}function CS(t,e,n){return t==="position"||t==="preserve-aspect"&&!JA(Gg(e),Gg(n),.2)}function I2(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const N2=AS({attachResizeListener:(t,e)=>xa(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Qu={current:void 0},bS=AS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Qu.current){const t=new N2({});t.mount(window),t.setOptions({layoutScroll:!0}),Qu.current=t}return Qu.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ra=Z.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function n0(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function U2(...t){return e=>{let n=!1;const i=t.map(r=>{const s=n0(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():n0(t[r],null)}}}}function F2(...t){return Z.useCallback(U2(...t),t)}class O2 extends Z.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(Xl(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=Xl(i)&&i.offsetWidth||0,s=Xl(i)&&i.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}}function k2({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s}){var d;const o=Z.useId(),a=Z.useRef(null),l=Z.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:c}=Z.useContext(Ra),u=((d=t.props)==null?void 0:d.ref)??(t==null?void 0:t.ref),f=F2(a,u);return Z.useInsertionEffect(()=>{const{width:p,height:v,top:y,left:m,right:h,bottom:x}=l.current;if(e||s===!1||!a.current||!p||!v)return;const g=n==="left"?`left: ${m}`:`right: ${h}`,M=i==="bottom"?`bottom: ${x}`:`top: ${y}`;a.current.dataset.motionPopId=o;const b=document.createElement("style");c&&(b.nonce=c);const A=r??document.head;return A.appendChild(b),b.sheet&&b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${v}px !important;
            ${g}px !important;
            ${M}px !important;
          }
        `),()=>{var C;(C=a.current)==null||C.removeAttribute("data-motion-pop-id"),A.contains(b)&&A.removeChild(b)}},[e]),S.jsx(O2,{isPresent:e,childRef:a,sizeRef:l,pop:s,children:s===!1?t:Z.cloneElement(t,{ref:f})})}const z2=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:c})=>{const u=wa(B2),f=Z.useId();let d=!0,p=Z.useMemo(()=>(d=!1,{id:f,initial:e,isPresent:n,custom:r,onExitComplete:v=>{u.set(v,!0);for(const y of u.values())if(!y)return;i&&i()},register:v=>(u.set(v,!1),()=>u.delete(v))}),[n,u,i]);return s&&d&&(p={...p}),Z.useMemo(()=>{u.forEach((v,y)=>u.set(y,!1))},[n]),Z.useEffect(()=>{!n&&!u.size&&i&&i()},[n]),t=S.jsx(k2,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,children:t}),S.jsx(tu.Provider,{value:p,children:t})};function B2(){return new Map}function RS(t=!0){const e=Z.useContext(tu);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=Z.useId();Z.useEffect(()=>{if(t)return r(s)},[t]);const o=Z.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const sl=t=>t.key||"";function i0(t){const e=[];return Z.Children.forEach(t,n=>{Z.isValidElement(n)&&e.push(n)}),e}const su=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[u,f]=RS(o),d=Z.useMemo(()=>i0(t),[t]),p=o&&!u?[]:d.map(sl),v=Z.useRef(!0),y=Z.useRef(d),m=wa(()=>new Map),h=Z.useRef(new Set),[x,g]=Z.useState(d),[M,b]=Z.useState(d);op(()=>{v.current=!1,y.current=d;for(let P=0;P<M.length;P++){const E=sl(M[P]);p.includes(E)?(m.delete(E),h.current.delete(E)):m.get(E)!==!0&&m.set(E,!1)}},[M,p.length,p.join("-")]);const A=[];if(d!==x){let P=[...d];for(let E=0;E<M.length;E++){const _=M[E],I=sl(_);p.includes(I)||(P.splice(E,0,_),A.push(_))}return s==="wait"&&A.length&&(P=A),b(i0(P)),g(d),null}const{forceRender:C}=Z.useContext(sp);return S.jsx(S.Fragment,{children:M.map(P=>{const E=sl(P),_=o&&!u?!1:d===M||p.includes(E),I=()=>{if(h.current.has(E))return;if(m.has(E))h.current.add(E),m.set(E,!0);else return;let H=!0;m.forEach(D=>{D||(H=!1)}),H&&(C==null||C(),b(y.current),o&&(f==null||f()),i&&i())};return S.jsx(z2,{isPresent:_,initial:!v.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:_?void 0:I,anchorX:a,anchorY:l,children:P},E)})})},PS=Z.createContext({strict:!1}),r0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let s0=!1;function V2(){if(s0)return;const t={};for(const e in r0)t[e]={isEnabled:n=>r0[e].some(i=>!!n[i])};sS(t),s0=!0}function LS(){return V2(),wA()}function H2(t){const e=LS();for(const n in t)e[n]={...e[n],...t[n]};sS(e)}const G2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Lc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||G2.has(t)}let DS=t=>!Lc(t);function W2(t){typeof t=="function"&&(DS=e=>e.startsWith("on")?!Lc(e):t(e))}try{W2(require("@emotion/is-prop-valid").default)}catch{}function j2(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||wt(t[r])||(DS(r)||n===!0&&Lc(r)||!e&&!Lc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const ou=Z.createContext({});function X2(t,e){if(ru(t)){const{initial:n,animate:i}=t;return{initial:n===!1||va(n)?n:void 0,animate:va(i)?i:void 0}}return t.inherit!==!1?e:{}}function Y2(t){const{initial:e,animate:n}=X2(t,Z.useContext(ou));return Z.useMemo(()=>({initial:e,animate:n}),[o0(e),o0(n)])}function o0(t){return Array.isArray(t)?t.join(" "):t}const Lp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function IS(t,e,n){for(const i in e)!wt(e[i])&&!dS(i,n)&&(t[i]=e[i])}function $2({transformTemplate:t},e){return Z.useMemo(()=>{const n=Lp();return Rp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function q2(t,e){const n=t.style||{},i={};return IS(i,n,t),Object.assign(i,$2(t,e)),i}function K2(t,e){const n={},i=q2(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const NS=()=>({...Lp(),attrs:{}});function Z2(t,e,n,i){const r=Z.useMemo(()=>{const s=NS();return hS(s,e,mS(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};IS(s,t.style,t),r.style={...s,...r.style}}return r}const Q2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Dp(t){return typeof t!="string"||t.includes("-")?!1:!!(Q2.indexOf(t)>-1||/[A-Z]/u.test(t))}function J2(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??Dp(t)?Z2:K2)(e,i,r,t),c=j2(e,typeof t=="string",s),u=t!==Z.Fragment?{...c,...l,ref:n}:{},{children:f}=e,d=Z.useMemo(()=>wt(f)?f.get():f,[f]);return Z.createElement(t,{...u,children:d})}function eC({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:tC(n,i,r,t),renderState:e()}}function tC(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=Zl(s[d]);let{initial:o,animate:a}=t;const l=ru(t),c=iS(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!iu(f)){const d=Array.isArray(f)?f:[f];for(let p=0;p<d.length;p++){const v=Sp(t,d[p]);if(v){const{transitionEnd:y,transition:m,...h}=v;for(const x in h){let g=h[x];if(Array.isArray(g)){const M=u?g.length-1:0;g=g[M]}g!==null&&(r[x]=g)}for(const x in y)r[x]=y[x]}}}return r}const US=t=>(e,n)=>{const i=Z.useContext(ou),r=Z.useContext(tu),s=()=>eC(t,e,i,r);return n?s():wa(s)},nC=US({scrapeMotionValuesFromProps:Pp,createRenderState:Lp}),iC=US({scrapeMotionValuesFromProps:gS,createRenderState:NS}),rC=Symbol.for("motionComponentSymbol");function sC(t,e,n){const i=Z.useRef(n);Z.useInsertionEffect(()=>{i.current=n});const r=Z.useRef(null);return Z.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s));const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s);e&&(s?e.mount(s):e.unmount())},[e])}const FS=Z.createContext({});function Ms(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function oC(t,e,n,i,r,s){var g,M;const{visualElement:o}=Z.useContext(ou),a=Z.useContext(PS),l=Z.useContext(tu),c=Z.useContext(Ra),u=c.reducedMotion,f=c.skipAnimations,d=Z.useRef(null),p=Z.useRef(!1);i=i||a.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:f,isSVG:s}),p.current&&d.current&&(d.current.manuallyAnimateOnMount=!0));const v=d.current,y=Z.useContext(FS);v&&!v.projection&&r&&(v.type==="html"||v.type==="svg")&&aC(d.current,n,r,y);const m=Z.useRef(!1);Z.useInsertionEffect(()=>{v&&m.current&&v.update(n,l)});const h=n[W_],x=Z.useRef(!!h&&typeof window<"u"&&!((g=window.MotionHandoffIsComplete)!=null&&g.call(window,h))&&((M=window.MotionHasOptimisedAnimation)==null?void 0:M.call(window,h)));return op(()=>{p.current=!0,v&&(m.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),v.scheduleRenderMicrotask(),x.current&&v.animationState&&v.animationState.animateChanges())}),Z.useEffect(()=>{v&&(!x.current&&v.animationState&&v.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var b;(b=window.MotionHandoffMarkAsComplete)==null||b.call(window,h)}),x.current=!1),v.enteringChildren=void 0)}),v}function aC(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:f}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:OS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Ms(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:f,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function OS(t){if(t)return t.options.allowProjection!==!1?t.projection:OS(t.parent)}function Ju(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&H2(i);const s=n?n==="svg":Dp(t),o=s?iC:nC;function a(c,u){let f;const d={...Z.useContext(Ra),...c,layoutId:lC(c)},{isStatic:p}=d,v=Y2(c),y=o(c,p);if(!p&&typeof window<"u"){cC();const m=uC(d);f=m.MeasureLayout,v.visualElement=oC(t,y,d,r,m.ProjectionNode,s)}return S.jsxs(ou.Provider,{value:v,children:[f&&v.visualElement?S.jsx(f,{visualElement:v.visualElement,...d}):null,J2(t,c,sC(y,v.visualElement,u),y,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=Z.forwardRef(a);return l[rC]=t,l}function lC({layoutId:t}){const e=Z.useContext(sp).id;return e&&t!==void 0?e+"-"+t:t}function cC(t,e){Z.useContext(PS).strict}function uC(t){const e=LS(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function fC(t,e){if(typeof Proxy>"u")return Ju;const n=new Map,i=(s,o)=>Ju(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Ju(o,void 0,t,e)),n.get(o))})}const dC=(t,e)=>e.isSVG??Dp(t)?new HA(e):new FA(e,{allowProjection:t!==Z.Fragment});class hC extends gr{constructor(e){super(e),e.animationState||(e.animationState=YA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();iu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let pC=0;class mC extends gr{constructor(){super(...arguments),this.id=pC++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"){const l=Gr(this.node,o,a);if(l){const{transition:c,transitionEnd:u,...f}=l;for(const d in f)(s=this.node.getValue(d))==null||s.jump(f[d])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const gC={animation:{Feature:hC},exit:{Feature:mC}};function Pa(t){return{point:{x:t.pageX,y:t.pageY}}}const vC=t=>e=>wp(e)&&t(e,Pa(e));function Ko(t,e,n,i){return xa(t,e,vC(n),i)}const kS=({current:t})=>t?t.ownerDocument.defaultView:null,a0=(t,e)=>Math.abs(t-e);function xC(t,e){const n=a0(t.x,e.x),i=a0(t.y,e.y);return Math.sqrt(n**2+i**2)}const l0=new Set(["auto","scroll"]);class zS{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ol(this.lastRawMoveEventInfo,this.transformPagePoint));const p=ef(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,y=xC(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!y)return;const{point:m}=p,{timestamp:h}=It;this.history.push({...m,timestamp:h});const{onStart:x,onMove:g}=this.handlers;v||(x&&x(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,p)},this.handlePointerMove=(p,v)=>{this.lastMoveEvent=p,this.lastRawMoveEventInfo=v,this.lastMoveEventInfo=ol(v,this.transformPagePoint),qe.update(this.updatePoint,!0)},this.handlePointerUp=(p,v)=>{this.end();const{onEnd:y,onSessionEnd:m,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=ef(p.type==="pointercancel"?this.lastMoveEventInfo:ol(v,this.transformPagePoint),this.history);this.startEvent&&y&&y(p,x),m&&m(p,x)},!wp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=Pa(e),c=ol(l,this.transformPagePoint),{point:u}=c,{timestamp:f}=It;this.history=[{...u,timestamp:f}];const{onSessionStart:d}=n;d&&d(e,ef(c,this.history)),this.removeListeners=Aa(Ko(this.contextWindow,"pointermove",this.handlePointerMove),Ko(this.contextWindow,"pointerup",this.handlePointerUp),Ko(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(l0.has(i.overflowX)||l0.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),qe.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ri(this.updatePoint)}}function ol(t,e){return e?{point:e(t.point)}:t}function c0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ef({point:t},e){return{point:t,delta:c0(t,BS(e)),offset:c0(t,yC(e)),velocity:_C(e,.1)}}function yC(t){return t[0]}function BS(t){return t[t.length-1]}function _C(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=BS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>gn(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>gn(e)*2&&(i=t[1]);const s=Cn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function SC(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?st(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?st(n,t,i.max):Math.min(t,n)),t}function u0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function MC(t,{top:e,left:n,bottom:i,right:r}){return{x:u0(t.x,n,r),y:u0(t.y,e,i)}}function f0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function EC(t,e){return{x:f0(t.x,e.x),y:f0(t.y,e.y)}}function TC(t,e){let n=.5;const i=Kt(t),r=Kt(e);return r>i?n=pa(e.min,e.max-i,t.min):i>r&&(n=pa(t.min,t.max-r,e.min)),ci(0,1,n)}function wC(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const th=.35;function AC(t=th){return t===!1?t=0:t===!0&&(t=th),{x:d0(t,"left","right"),y:d0(t,"top","bottom")}}function d0(t,e,n){return{min:h0(t,e),max:h0(t,n)}}function h0(t,e){return typeof t=="number"?t:t[e]||0}const CC=new WeakMap;class bC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Mt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=f=>{n&&this.snapToCursor(Pa(f).point),this.stopAnimation()},o=(f,d)=>{const{drag:p,dragPropagation:v,onDragStart:y}=this.getProps();if(p&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Jw(p),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=d,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Zn(h=>{let x=this.getAxisMotionValue(h).get()||0;if(ai.test(x)){const{projection:g}=this.visualElement;if(g&&g.layout){const M=g.layout.layoutBox[h];M&&(x=Kt(M)*(parseFloat(x)/100))}}this.originPoint[h]=x}),y&&qe.update(()=>y(f,d),!1,!0),Xd(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},a=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d;const{dragPropagation:p,dragDirectionLock:v,onDirectionLock:y,onDrag:m}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=d;if(v&&this.currentDirection===null){this.currentDirection=PC(h),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",d.point,h),this.updateAxis("y",d.point,h),this.visualElement.render(),m&&qe.update(()=>m(f,d),!1,!0)},l=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d,this.stop(f,d),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new zS(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:kS(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&qe.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!al(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=SC(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Ms(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=MC(i.layoutBox,e):this.constraints=!1,this.elastic=AC(n),r!==this.constraints&&!Ms(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&Zn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=wC(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ms(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=PA(i,r.root,this.visualElement.getTransformPagePoint());let o=EC(r.layout.layoutBox,s);if(n){const a=n(CA(o));this.hasMutatedConstraints=!!a,a&&(o=aS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Zn(u=>{if(!al(u,n,this.currentDirection))return;let f=l&&l[u]||{};(o===!0||o===u)&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,v={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Xd(this.visualElement,e),i.start(_p(e,i,0,n,this.visualElement,!1))}stopAnimation(){Zn(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Zn(n=>{const{drag:i}=this.getProps();if(!al(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-st(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ms(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Zn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=TC({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Zn(o=>{if(!al(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(st(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;CC.set(this.visualElement,this);const e=this.visualElement.current,n=Ko(e,"pointerdown",c=>{const{drag:u,dragListener:f=!0}=this.getProps(),d=c.target,p=d!==e&&sA(d);u&&f&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();Ms(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=RC(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),qe.read(r);const a=xa(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(Zn(f=>{const d=this.getAxisMotionValue(f);d&&(this.originPoint[f]+=c[f].translate,d.set(d.get()+c[f].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=th,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function p0(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function RC(t,e,n){const i=_g(t,p0(n)),r=_g(e,p0(n));return()=>{i(),r()}}function al(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function PC(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class LC extends gr{constructor(e){super(e),this.removeGroupControls=Pn,this.removeListeners=Pn,this.controls=new bC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const tf=t=>(e,n)=>{t&&qe.update(()=>t(e,n),!1,!0)};class DC extends gr{constructor(){super(...arguments),this.removePointerDownListener=Pn}onPointerDown(e){this.session=new zS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:kS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:tf(e),onStart:tf(n),onMove:tf(i),onEnd:(s,o)=>{delete this.session,r&&qe.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ko(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let nf=!1;class IC extends Z.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),nf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ql.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),nf=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||qe.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),Tp.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;nf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function VS(t){const[e,n]=RS(),i=Z.useContext(sp);return S.jsx(IC,{...t,layoutGroup:i,switchLayoutGroup:Z.useContext(FS),isPresent:e,safeToRemove:n})}const NC={pan:{Feature:DC},drag:{Feature:LC,ProjectionNode:bS,MeasureLayout:VS}};function m0(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&qe.postRender(()=>s(e,Pa(e)))}class UC extends gr{mount(){const{current:e}=this.node;e&&(this.unmount=tA(e,(n,i)=>(m0(this.node,i,"Start"),r=>m0(this.node,r,"End"))))}unmount(){}}class FC extends gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Aa(xa(this.node.current,"focus",()=>this.onFocus()),xa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function g0(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&qe.postRender(()=>s(e,Pa(e)))}class OC extends gr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=aA(e,(r,s)=>(g0(this.node,s,"Start"),(o,{success:a})=>g0(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const nh=new WeakMap,rf=new WeakMap,kC=t=>{const e=nh.get(t.target);e&&e(t)},zC=t=>{t.forEach(kC)};function BC({root:t,...e}){const n=t||document;rf.has(n)||rf.set(n,{});const i=rf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(zC,{root:t,...e})),i[r]}function VC(t,e,n){const i=BC(e);return nh.set(t,n),i.observe(t),()=>{nh.delete(t),i.unobserve(t)}}const HC={some:0,all:1};class GC extends gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:HC[r]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),p=u?f:d;p&&p(c)};this.stopObserver=VC(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(WC(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function WC({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const jC={inView:{Feature:GC},tap:{Feature:OC},focus:{Feature:FC},hover:{Feature:UC}},XC={layout:{ProjectionNode:bS,MeasureLayout:VS}},YC={...gC,...jC,...NC,...XC},Zr=fC(YC,dC);function Dc(t){const e=wa(()=>Kr(t)),{isStatic:n}=Z.useContext(Ra);if(n){const[,i]=Z.useState(t);Z.useEffect(()=>e.on("change",i),[])}return e}function HS(t,e){const n=Dc(e()),i=()=>n.set(e());return i(),op(()=>{const r=()=>qe.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),Ri(i)}}),n}function $C(t){$o.current=[],t();const e=HS($o.current,t);return $o.current=void 0,e}function qC(t,e,n,i){if(typeof t=="function")return $C(t);const s=vA(e,n,i),o=Array.isArray(t)?v0(t,s):v0([t],([l])=>s(l)),a=Array.isArray(t)?void 0:t.accelerate;return a&&!a.isTransformed&&typeof e!="function"&&Array.isArray(n)&&(i==null?void 0:i.clamp)!==!1&&(o.accelerate={...a,times:e,keyframes:n,isTransformed:!0}),o}function v0(t,e){const n=wa(()=>[]);return HS(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}function KC(t,e={}){const{isStatic:n}=Z.useContext(Ra),i=()=>wt(t)?t.get():t;if(n)return qC(i);const r=Dc(i());return Z.useInsertionEffect(()=>xA(r,t,e),[r,JSON.stringify(e)]),r}function x0(t,e={}){return KC(t,{type:"spring",...e})}function ZC({children:t}){return S.jsx(S.Fragment,{children:t})}function Yn(t=768){const e=`(max-width: ${t}px)`,[n,i]=Z.useState(()=>typeof window<"u"?window.matchMedia(e).matches:!1);return Z.useEffect(()=>{const r=window.matchMedia(e),s=()=>i(r.matches);return s(),r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[e]),n}function ui({className:t="",background:e="transparent",particleColor:n="#ffffff",particleDensity:i=120,minSize:r=1,maxSize:s=3,speed:o=1}){const a=Z.useRef(null),l=Yn();return Z.useEffect(()=>{if(l)return;const c=a.current,u=c.getContext("2d");let f,d=[];const p=()=>{c.width=c.offsetWidth,c.height=c.offsetHeight,m()},y=(g=>{const M=parseInt(g.slice(1,3),16),b=parseInt(g.slice(3,5),16),A=parseInt(g.slice(5,7),16);return`${M},${b},${A}`})(n.startsWith("#")?n:"#ffffff");function m(){d=[];const g=Math.floor(c.width*c.height/(400*400/i));for(let M=0;M<g;M++)d.push({x:Math.random()*c.width,y:Math.random()*c.height,size:r+Math.random()*(s-r),opacity:Math.random(),opacityDir:Math.random()>.5?1:-1,opacitySpeed:.003+Math.random()*.008*o,vx:(Math.random()-.5)*.3*o,vy:(Math.random()-.5)*.3*o})}function h(){u.clearRect(0,0,c.width,c.height),e!=="transparent"&&(u.fillStyle=e,u.fillRect(0,0,c.width,c.height));for(const g of d)g.opacity+=g.opacityDir*g.opacitySpeed,g.opacity>=1&&(g.opacity=1,g.opacityDir=-1),g.opacity<=.05&&(g.opacity=.05,g.opacityDir=1),g.x+=g.vx,g.y+=g.vy,g.x<0&&(g.x=c.width),g.x>c.width&&(g.x=0),g.y<0&&(g.y=c.height),g.y>c.height&&(g.y=0),u.beginPath(),u.arc(g.x,g.y,g.size,0,Math.PI*2),u.fillStyle=`rgba(${y},${g.opacity})`,u.fill();f=requestAnimationFrame(h)}const x=new ResizeObserver(p);return x.observe(c),p(),h(),()=>{cancelAnimationFrame(f),x.disconnect()}},[e,n,i,r,s,o,l]),l?null:S.jsx("canvas",{ref:a,className:t,style:{width:"100%",height:"100%",display:"block"}})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ip="164",QC=0,y0=1,JC=2,GS=1,eb=2,vi=3,fr=0,ln=1,_i=2,or=0,js=1,_0=2,S0=3,M0=4,tb=5,Lr=100,nb=101,ib=102,rb=103,sb=104,ob=200,ab=201,lb=202,cb=203,ih=204,rh=205,ub=206,fb=207,db=208,hb=209,pb=210,mb=211,gb=212,vb=213,xb=214,yb=0,_b=1,Sb=2,Ic=3,Mb=4,Eb=5,Tb=6,wb=7,WS=0,Ab=1,Cb=2,ar=0,bb=1,Rb=2,Pb=3,Lb=4,Db=5,Ib=6,Nb=7,jS=300,no=301,io=302,sh=303,oh=304,au=306,ah=1e3,kr=1001,lh=1002,bn=1003,Ub=1004,ll=1005,Hn=1006,sf=1007,zr=1008,dr=1009,Fb=1010,Ob=1011,XS=1012,YS=1013,ro=1014,Zi=1015,lu=1016,$S=1017,qS=1018,La=1020,kb=35902,zb=1021,Bb=1022,ii=1023,Vb=1024,Hb=1025,Xs=1026,ya=1027,Gb=1028,KS=1029,Wb=1030,ZS=1031,QS=1033,of=33776,af=33777,lf=33778,cf=33779,E0=35840,T0=35841,w0=35842,A0=35843,C0=36196,b0=37492,R0=37496,P0=37808,L0=37809,D0=37810,I0=37811,N0=37812,U0=37813,F0=37814,O0=37815,k0=37816,z0=37817,B0=37818,V0=37819,H0=37820,G0=37821,uf=36492,W0=36494,j0=36495,jb=36283,X0=36284,Y0=36285,$0=36286,Xb=3200,Yb=3201,$b=0,qb=1,Yi="",Qn="srgb",vr="srgb-linear",Np="display-p3",cu="display-p3-linear",Nc="linear",rt="srgb",Uc="rec709",Fc="p3",is=7680,q0=519,Kb=512,Zb=513,Qb=514,JS=515,Jb=516,eR=517,tR=518,nR=519,K0=35044,Z0="300 es",Ei=2e3,Oc=2001;class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ff=Math.PI/180,ch=180/Math.PI;function Da(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function iR(t,e){return(t%e+e)%e}function df(t,e,n){return(1-n)*t+n*e}function Ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(e,n,i,r,s,o,a,l,c){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],v=i[8],y=r[0],m=r[3],h=r[6],x=r[1],g=r[4],M=r[7],b=r[2],A=r[5],C=r[8];return s[0]=o*y+a*x+l*b,s[3]=o*m+a*g+l*A,s[6]=o*h+a*M+l*C,s[1]=c*y+u*x+f*b,s[4]=c*m+u*g+f*A,s[7]=c*h+u*M+f*C,s[2]=d*y+p*x+v*b,s[5]=d*m+p*g+v*A,s[8]=d*h+p*M+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,v=n*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(hf.makeScale(e,n)),this}rotate(e){return this.premultiply(hf.makeRotation(-e)),this}translate(e,n){return this.premultiply(hf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hf=new Pe;function eM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rR(){const t=kc("canvas");return t.style.display="block",t}const Q0={};function sR(t){t in Q0||(Q0[t]=!0,console.warn(t))}const J0=new Pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ev=new Pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cl={[vr]:{transfer:Nc,primaries:Uc,toReference:t=>t,fromReference:t=>t},[Qn]:{transfer:rt,primaries:Uc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[cu]:{transfer:Nc,primaries:Fc,toReference:t=>t.applyMatrix3(ev),fromReference:t=>t.applyMatrix3(J0)},[Np]:{transfer:rt,primaries:Fc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ev),fromReference:t=>t.applyMatrix3(J0).convertLinearToSRGB()}},oR=new Set([vr,cu]),Ze={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!oR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=cl[e].toReference,r=cl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return cl[t].primaries},getTransfer:function(t){return t===Yi?Nc:cl[t].transfer}};function Ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let rs;class aR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=kc("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ys(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ys(n[i]/255)*255):n[i]=Ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lR=0;class tM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mf(r[o].image)):s.push(mf(r[o]))}else s=mf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?aR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cR=0;class cn extends ho{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=kr,r=kr,s=Hn,o=zr,a=ii,l=dr,c=cn.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cR++}),this.uuid=Da(),this.name="",this.source=new tM(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ah:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case lh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ah:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case lh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=jS;cn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(p+1)/2,b=(h+1)/2,A=(u+d)/4,C=(f+y)/4,P=(v+m)/4;return g>M&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=C/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=P/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-v)*(m-v)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(f-y)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uR extends ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new tM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends uR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class nM extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fR extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(f!==y||l!==d||c!==p||u!==v){let m=1-a;const h=l*d+c*p+u*v+f*y,x=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const b=Math.sqrt(g),A=Math.atan2(b,h*x);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const M=a*x;if(l=l*m+d*M,c=c*m+p*M,u=u*m+v*M,f=f*m+y*M,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*f+l*p-c*d,e[n+1]=l*v+u*d+c*f-a*p,e[n+2]=c*v+u*p+a*d-l*f,e[n+3]=u*v-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gf.copy(this).projectOnVector(e),this.sub(gf)}reflect(e){return this.sub(gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gf=new z,tv=new Ia;class Na{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Un.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Un.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Un.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Un):Un.fromBufferAttribute(s,o),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ul.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ul.copy(i.boundingBox)),ul.applyMatrix4(e.matrixWorld),this.union(ul)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),fl.subVectors(this.max,Co),ss.subVectors(e.a,Co),os.subVectors(e.b,Co),as.subVectors(e.c,Co),Ui.subVectors(os,ss),Fi.subVectors(as,os),_r.subVectors(ss,as);let n=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-_r.z,_r.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,_r.z,0,-_r.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-_r.y,_r.x,0];return!vf(n,ss,os,as,fl)||(n=[1,0,0,0,1,0,0,0,1],!vf(n,ss,os,as,fl))?!1:(dl.crossVectors(Ui,Fi),n=[dl.x,dl.y,dl.z],vf(n,ss,os,as,fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new z,new z,new z,new z,new z,new z,new z,new z],Un=new z,ul=new Na,ss=new z,os=new z,as=new z,Ui=new z,Fi=new z,_r=new z,Co=new z,fl=new z,dl=new z,Sr=new z;function vf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Sr.fromArray(t,s);const a=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),c=n.dot(Sr),u=i.dot(Sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dR=new Na,bo=new z,xf=new z;class Up{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):dR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(xf)),this.expandByPoint(bo.copy(e.center).sub(xf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new z,yf=new z,hl=new z,Oi=new z,_f=new z,pl=new z,Sf=new z;class hR{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yf.copy(e).add(n).multiplyScalar(.5),hl.copy(n).sub(e).normalize(),Oi.copy(this.origin).sub(yf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(hl),a=Oi.dot(this.direction),l=-Oi.dot(hl),c=Oi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,v;if(u>0)if(f=o*l-a,d=o*a-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const y=1/u;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yf).addScaledVector(hl,d),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){_f.subVectors(n,e),pl.subVectors(i,e),Sf.crossVectors(_f,pl);let o=this.direction.dot(Sf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);const l=a*this.direction.dot(pl.crossVectors(Oi,pl));if(l<0)return null;const c=a*this.direction.dot(_f.cross(Oi));if(c<0||l+c>o)return null;const u=-a*Oi.dot(Sf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,v,y,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,v,y,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,v,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,y=c*f;n[0]=d+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,y=c*f;n[0]=d-y*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,v=a*u,y=a*f;n[0]=l*u,n[4]=v*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=y-d*f,n[8]=v*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+v,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+y,n[5]=o*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*u,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pR,e,mR)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ki.crossVectors(i,fn),ki.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ki.crossVectors(i,fn)),ki.normalize(),ml.crossVectors(fn,ki),r[0]=ki.x,r[4]=ml.x,r[8]=fn.x,r[1]=ki.y,r[5]=ml.y,r[9]=fn.y,r[2]=ki.z,r[6]=ml.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],v=i[2],y=i[6],m=i[10],h=i[14],x=i[3],g=i[7],M=i[11],b=i[15],A=r[0],C=r[4],P=r[8],E=r[12],_=r[1],I=r[5],H=r[9],D=r[13],Y=r[2],X=r[6],Q=r[10],ne=r[14],L=r[3],B=r[7],G=r[11],re=r[15];return s[0]=o*A+a*_+l*Y+c*L,s[4]=o*C+a*I+l*X+c*B,s[8]=o*P+a*H+l*Q+c*G,s[12]=o*E+a*D+l*ne+c*re,s[1]=u*A+f*_+d*Y+p*L,s[5]=u*C+f*I+d*X+p*B,s[9]=u*P+f*H+d*Q+p*G,s[13]=u*E+f*D+d*ne+p*re,s[2]=v*A+y*_+m*Y+h*L,s[6]=v*C+y*I+m*X+h*B,s[10]=v*P+y*H+m*Q+h*G,s[14]=v*E+y*D+m*ne+h*re,s[3]=x*A+g*_+M*Y+b*L,s[7]=x*C+g*I+M*X+b*B,s[11]=x*P+g*H+M*Q+b*G,s[15]=x*E+g*D+M*ne+b*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],y=e[7],m=e[11],h=e[15];return v*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],y=e[13],m=e[14],h=e[15],x=f*m*c-y*d*c+y*l*p-a*m*p-f*l*h+a*d*h,g=v*d*c-u*m*c-v*l*p+o*m*p+u*l*h-o*d*h,M=u*y*c-v*f*c+v*a*p-o*y*p-u*a*h+o*f*h,b=v*f*l-u*y*l-v*a*d+o*y*d+u*a*m-o*f*m,A=n*x+i*g+r*M+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=x*C,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*h-i*d*h)*C,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*h+i*l*h)*C,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*C,e[4]=g*C,e[5]=(u*m*s-v*d*s+v*r*p-n*m*p-u*r*h+n*d*h)*C,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*h-n*l*h)*C,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*C,e[8]=M*C,e[9]=(v*f*s-u*y*s-v*i*p+n*y*p+u*i*h-n*f*h)*C,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*h+n*a*h)*C,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*C,e[12]=b*C,e[13]=(u*y*r-v*f*r+v*i*d-n*y*d-u*i*m+n*f*m)*C,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*m-n*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,v=s*f,y=o*u,m=o*f,h=a*f,x=l*c,g=l*u,M=l*f,b=i.x,A=i.y,C=i.z;return r[0]=(1-(y+h))*b,r[1]=(p+M)*b,r[2]=(v-g)*b,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(d+h))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(v+g)*C,r[9]=(m-x)*C,r[10]=(1-(d+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ls.set(r[0],r[1],r[2]).length();const o=ls.set(r[4],r[5],r[6]).length(),a=ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const c=1/s,u=1/o,f=1/a;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===Ei)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Oc)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let v,y;if(a===Ei)v=(o+s)*f,y=-2*f;else if(a===Oc)v=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ls=new z,Fn=new At,pR=new z(0,0,0),mR=new z(1,1,1),ki=new z,ml=new z,fn=new z,nv=new At,iv=new Ia;class Pi{constructor(e=0,n=0,i=0,r=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return iv.setFromEuler(this),this.setFromQuaternion(iv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class iM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gR=0;const rv=new z,cs=new Ia,pi=new At,gl=new z,Ro=new z,vR=new z,xR=new Ia,sv=new z(1,0,0),ov=new z(0,1,0),av=new z(0,0,1),lv={type:"added"},yR={type:"removed"},us={type:"childadded",child:null},Mf={type:"childremoved",child:null};class vn extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gR++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new z,n=new Pi,i=new Ia,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Pe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,n){return cs.setFromAxisAngle(e,n),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(sv,e)}rotateY(e){return this.rotateOnAxis(ov,e)}rotateZ(e){return this.rotateOnAxis(av,e)}translateOnAxis(e,n){return rv.copy(e).applyQuaternion(this.quaternion),this.position.add(rv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sv,e)}translateY(e){return this.translateOnAxis(ov,e)}translateZ(e){return this.translateOnAxis(av,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?gl.copy(e):gl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Ro,gl,this.up):pi.lookAt(gl,Ro,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(pi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lv),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yR),Mf.child=e,this.dispatchEvent(Mf),Mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lv),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,vR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,xR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vn.DEFAULT_UP=new z(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new z,mi=new z,Ef=new z,gi=new z,fs=new z,ds=new z,cv=new z,Tf=new z,wf=new z,Af=new z;class ni{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),mi.subVectors(i,n),Ef.subVectors(e,n);const o=On.dot(On),a=On.dot(mi),l=On.dot(Ef),c=mi.dot(mi),u=mi.dot(Ef),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,v=(o*u-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),mi.subVectors(e,n),On.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),On.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ni.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ni.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,i),ds.subVectors(s,i),Tf.subVectors(e,i);const l=fs.dot(Tf),c=ds.dot(Tf);if(l<=0&&c<=0)return n.copy(i);wf.subVectors(e,r);const u=fs.dot(wf),f=ds.dot(wf);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(fs,o);Af.subVectors(e,s);const p=fs.dot(Af),v=ds.dot(Af);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ds,a);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return cv.subVectors(s,r),a=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(cv,a);const h=1/(m+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(fs,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},vl={h:0,s:0,l:0};function Cf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=iR(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Cf(o,s,e+1/3),this.g=Cf(o,s,e),this.b=Cf(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const i=rM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=pf(e.r),this.g=pf(e.g),this.b=pf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Ze.fromWorkingColorSpace(Gt.copy(this),e),Math.round(nn(Gt.r*255,0,255))*65536+Math.round(nn(Gt.g*255,0,255))*256+Math.round(nn(Gt.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Qn){Ze.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(vl);const i=df(zi.h,vl.h,n),r=df(zi.s,vl.s,n),s=df(zi.l,vl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Qe;Qe.NAMES=rM;let _R=0;class uu extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_R++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=js,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=rh,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ih&&(i.blendSrc=this.blendSrc),this.blendDst!==rh&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ic&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sM extends uu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=WS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new z,xl=new Ye;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=K0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sR("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xl.fromBufferAttribute(this,n),xl.applyMatrix3(e),this.setXY(n,xl.x,xl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==K0&&(e.usage=this.usage),e}}class oM extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class aM extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wr extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}let SR=0;const Mn=new At,bf=new vn,hs=new z,dn=new Na,Po=new Na,Rt=new z;class ts extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SR++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eM(e)?aM:oM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Pe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Up);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(dn.min,Po.min),dn.expandByPoint(Rt),Rt.addVectors(dn.max,Po.max),dn.expandByPoint(Rt)):(dn.expandByPoint(Po.min),dn.expandByPoint(Po.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Rt.add(hs)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new z,l[P]=new z;const c=new z,u=new z,f=new z,d=new Ye,p=new Ye,v=new Ye,y=new z,m=new z;function h(P,E,_){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,_),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,_),u.sub(c),f.sub(c),p.sub(d),v.sub(d);const I=1/(p.x*v.y-v.x*p.y);isFinite(I)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(I),a[P].add(y),a[E].add(y),a[_].add(y),l[P].add(m),l[E].add(m),l[_].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,E=x.length;P<E;++P){const _=x[P],I=_.start,H=_.count;for(let D=I,Y=I+H;D<Y;D+=3)h(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const g=new z,M=new z,b=new z,A=new z;function C(P){b.fromBufferAttribute(r,P),A.copy(b);const E=a[P];g.copy(E),g.sub(b.multiplyScalar(b.dot(E))).normalize(),M.crossVectors(A,E);const I=M.dot(l[P])<0?-1:1;o.setXYZW(P,g.x,g.y,g.z,I)}for(let P=0,E=x.length;P<E;++P){const _=x[P],I=_.start,H=_.count;for(let D=I,Y=I+H;D<Y;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new li(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ts,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uv=new At,Mr=new hR,yl=new Up,fv=new z,ps=new z,ms=new z,gs=new z,Rf=new z,_l=new z,Sl=new Ye,Ml=new Ye,El=new Ye,dv=new z,hv=new z,pv=new z,Tl=new z,wl=new z;class ri extends vn{constructor(e=new ts,n=new sM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Rf.fromBufferAttribute(f,e),o?_l.addScaledVector(Rf,u):_l.addScaledVector(Rf.sub(n),u))}n.add(_l)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(yl.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(yl,fv)===null||Mr.origin.distanceToSquared(fv)>(e.far-e.near)**2))&&(uv.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(uv),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const m=d[v],h=o[m.materialIndex],x=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,b=g;M<b;M+=3){const A=a.getX(M),C=a.getX(M+1),P=a.getX(M+2);r=Al(this,h,e,i,c,u,f,A,C,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const x=a.getX(m),g=a.getX(m+1),M=a.getX(m+2);r=Al(this,o,e,i,c,u,f,x,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const m=d[v],h=o[m.materialIndex],x=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=x,b=g;M<b;M+=3){const A=M,C=M+1,P=M+2;r=Al(this,h,e,i,c,u,f,A,C,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,h=y;m<h;m+=3){const x=m,g=m+1,M=m+2;r=Al(this,o,e,i,c,u,f,x,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function MR(t,e,n,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fr,a),l===null)return null;wl.copy(a),wl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(wl);return c<n.near||c>n.far?null:{distance:c,point:wl.clone(),object:t}}function Al(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ps),t.getVertexPosition(l,ms),t.getVertexPosition(c,gs);const u=MR(t,e,n,i,ps,ms,gs,Tl);if(u){r&&(Sl.fromBufferAttribute(r,a),Ml.fromBufferAttribute(r,l),El.fromBufferAttribute(r,c),u.uv=ni.getInterpolation(Tl,ps,ms,gs,Sl,Ml,El,new Ye)),s&&(Sl.fromBufferAttribute(s,a),Ml.fromBufferAttribute(s,l),El.fromBufferAttribute(s,c),u.uv1=ni.getInterpolation(Tl,ps,ms,gs,Sl,Ml,El,new Ye)),o&&(dv.fromBufferAttribute(o,a),hv.fromBufferAttribute(o,l),pv.fromBufferAttribute(o,c),u.normal=ni.getInterpolation(Tl,ps,ms,gs,dv,hv,pv,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};ni.getNormal(ps,ms,gs,f.normal),u.face=f}return u}class Ua extends ts{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wr(c,3)),this.setAttribute("normal",new Wr(u,3)),this.setAttribute("uv",new Wr(f,2));function v(y,m,h,x,g,M,b,A,C,P,E){const _=M/C,I=b/P,H=M/2,D=b/2,Y=A/2,X=C+1,Q=P+1;let ne=0,L=0;const B=new z;for(let G=0;G<Q;G++){const re=G*I-D;for(let xe=0;xe<X;xe++){const je=xe*_-H;B[y]=je*x,B[m]=re*g,B[h]=Y,c.push(B.x,B.y,B.z),B[y]=0,B[m]=0,B[h]=A>0?1:-1,u.push(B.x,B.y,B.z),f.push(xe/C),f.push(1-G/P),ne+=1}}for(let G=0;G<P;G++)for(let re=0;re<C;re++){const xe=d+re+X*G,je=d+re+X*(G+1),j=d+(re+1)+X*(G+1),ie=d+(re+1)+X*G;l.push(xe,je,ie),l.push(je,j,ie),L+=6}a.addGroup(p,L,E),p+=L,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function so(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=so(t[n]);for(const r in i)e[r]=i[r]}return e}function ER(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function lM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const TR={clone:so,merge:Yt};var wR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends uu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wR,this.fragmentShader=AR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=ER(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class cM extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new z,mv=new Ye,gv=new Ye;class wn extends cM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ch*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ch*2*Math.atan(Math.tan(ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,mv,gv),n.subVectors(gv,mv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ff*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vs=-90,xs=1;class CR extends vn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(vs,xs,e,n);r.layers=this.layers,this.add(r);const s=new wn(vs,xs,e,n);s.layers=this.layers,this.add(s);const o=new wn(vs,xs,e,n);o.layers=this.layers,this.add(o);const a=new wn(vs,xs,e,n);a.layers=this.layers,this.add(a);const l=new wn(vs,xs,e,n);l.layers=this.layers,this.add(l);const c=new wn(vs,xs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class uM extends cn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:no,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bR extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new uM(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Hn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ua(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:or});s.uniforms.tEquirect.value=n;const o=new ri(r,s),a=n.minFilter;return n.minFilter===zr&&(n.minFilter=Hn),new CR(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Pf=new z,RR=new z,PR=new Pe;class Rr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Pf.subVectors(i,n).cross(RR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Pf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||PR.getNormalMatrix(e),r=this.coplanarPoint(Pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Up,Cl=new z;class fM{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,o=new Rr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],v=r[9],y=r[10],m=r[11],h=r[12],x=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-p,M-h).normalize(),i[1].setComponents(l+s,d+c,m+p,M+h).normalize(),i[2].setComponents(l+o,d+u,m+v,M+x).normalize(),i[3].setComponents(l-o,d-u,m-v,M-x).normalize(),i[4].setComponents(l-a,d-f,m-y,M-g).normalize(),n===Ei)i[5].setComponents(l+a,d+f,m+y,M+g).normalize();else if(n===Oc)i[5].setComponents(a,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Cl.x=r.normal.x>0?e.max.x:e.min.x,Cl.y=r.normal.y>0?e.max.y:e.min.y,Cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function LR(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let p=0,v=d.length;p<v;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Fa extends ts{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],v=[],y=[],m=[];for(let h=0;h<u;h++){const x=h*d-o;for(let g=0;g<c;g++){const M=g*f-s;v.push(M,-x,0),y.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const g=x+c*h,M=x+c*(h+1),b=x+1+c*(h+1),A=x+1+c*h;p.push(g,M,A),p.push(M,b,A)}this.setIndex(p),this.setAttribute("position",new Wr(v,3)),this.setAttribute("normal",new Wr(y,3)),this.setAttribute("uv",new Wr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.widthSegments,e.heightSegments)}}var DR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IR=`#ifdef USE_ALPHAHASH
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
#endif`,NR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kR=`#ifdef USE_AOMAP
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
#endif`,zR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BR=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,VR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,HR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jR=`#ifdef USE_IRIDESCENCE
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
#endif`,XR=`#ifdef USE_BUMPMAP
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
#endif`,YR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$R=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,JR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tP=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,nP=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iP=`vec3 transformedNormal = objectNormal;
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
#endif`,rP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lP="gl_FragColor = linearToOutputTexel( gl_FragColor );",cP=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uP=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dP=`#ifdef USE_ENVMAP
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
#endif`,hP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pP=`#ifdef USE_ENVMAP
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
#endif`,mP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yP=`#ifdef USE_GRADIENTMAP
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
}`,_P=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EP=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,TP=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,wP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,PP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LP=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,DP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,IP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VP=`#if defined( USE_POINTS_UV )
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
#endif`,HP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,YP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$P=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eL=`#ifdef USE_NORMALMAP
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
#endif`,tL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,pL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xL=`#ifdef USE_SKINNING
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
#endif`,yL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_L=`#ifdef USE_SKINNING
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
#endif`,SL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ML=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TL=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wL=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AL=`#ifdef USE_TRANSMISSION
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
#endif`,CL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DL=`uniform sampler2D t2D;
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
}`,IL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NL=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OL=`#include <common>
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
}`,kL=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zL=`#define DISTANCE
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
}`,BL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,VL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GL=`uniform float scale;
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
}`,WL=`uniform vec3 diffuse;
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
}`,jL=`#include <common>
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
}`,XL=`uniform vec3 diffuse;
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
}`,YL=`#define LAMBERT
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
}`,$L=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,qL=`#define MATCAP
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
}`,KL=`#define MATCAP
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
}`,ZL=`#define NORMAL
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
}`,QL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JL=`#define PHONG
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
}`,eD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,tD=`#define STANDARD
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
}`,nD=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,iD=`#define TOON
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
}`,rD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sD=`uniform float size;
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
}`,oD=`uniform vec3 diffuse;
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
}`,aD=`#include <common>
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
}`,lD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,cD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,uD=`uniform vec3 diffuse;
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
}`,Re={alphahash_fragment:DR,alphahash_pars_fragment:IR,alphamap_fragment:NR,alphamap_pars_fragment:UR,alphatest_fragment:FR,alphatest_pars_fragment:OR,aomap_fragment:kR,aomap_pars_fragment:zR,batching_pars_vertex:BR,batching_vertex:VR,begin_vertex:HR,beginnormal_vertex:GR,bsdfs:WR,iridescence_fragment:jR,bumpmap_pars_fragment:XR,clipping_planes_fragment:YR,clipping_planes_pars_fragment:$R,clipping_planes_pars_vertex:qR,clipping_planes_vertex:KR,color_fragment:ZR,color_pars_fragment:QR,color_pars_vertex:JR,color_vertex:eP,common:tP,cube_uv_reflection_fragment:nP,defaultnormal_vertex:iP,displacementmap_pars_vertex:rP,displacementmap_vertex:sP,emissivemap_fragment:oP,emissivemap_pars_fragment:aP,colorspace_fragment:lP,colorspace_pars_fragment:cP,envmap_fragment:uP,envmap_common_pars_fragment:fP,envmap_pars_fragment:dP,envmap_pars_vertex:hP,envmap_physical_pars_fragment:TP,envmap_vertex:pP,fog_vertex:mP,fog_pars_vertex:gP,fog_fragment:vP,fog_pars_fragment:xP,gradientmap_pars_fragment:yP,lightmap_pars_fragment:_P,lights_lambert_fragment:SP,lights_lambert_pars_fragment:MP,lights_pars_begin:EP,lights_toon_fragment:wP,lights_toon_pars_fragment:AP,lights_phong_fragment:CP,lights_phong_pars_fragment:bP,lights_physical_fragment:RP,lights_physical_pars_fragment:PP,lights_fragment_begin:LP,lights_fragment_maps:DP,lights_fragment_end:IP,logdepthbuf_fragment:NP,logdepthbuf_pars_fragment:UP,logdepthbuf_pars_vertex:FP,logdepthbuf_vertex:OP,map_fragment:kP,map_pars_fragment:zP,map_particle_fragment:BP,map_particle_pars_fragment:VP,metalnessmap_fragment:HP,metalnessmap_pars_fragment:GP,morphinstance_vertex:WP,morphcolor_vertex:jP,morphnormal_vertex:XP,morphtarget_pars_vertex:YP,morphtarget_vertex:$P,normal_fragment_begin:qP,normal_fragment_maps:KP,normal_pars_fragment:ZP,normal_pars_vertex:QP,normal_vertex:JP,normalmap_pars_fragment:eL,clearcoat_normal_fragment_begin:tL,clearcoat_normal_fragment_maps:nL,clearcoat_pars_fragment:iL,iridescence_pars_fragment:rL,opaque_fragment:sL,packing:oL,premultiplied_alpha_fragment:aL,project_vertex:lL,dithering_fragment:cL,dithering_pars_fragment:uL,roughnessmap_fragment:fL,roughnessmap_pars_fragment:dL,shadowmap_pars_fragment:hL,shadowmap_pars_vertex:pL,shadowmap_vertex:mL,shadowmask_pars_fragment:gL,skinbase_vertex:vL,skinning_pars_vertex:xL,skinning_vertex:yL,skinnormal_vertex:_L,specularmap_fragment:SL,specularmap_pars_fragment:ML,tonemapping_fragment:EL,tonemapping_pars_fragment:TL,transmission_fragment:wL,transmission_pars_fragment:AL,uv_pars_fragment:CL,uv_pars_vertex:bL,uv_vertex:RL,worldpos_vertex:PL,background_vert:LL,background_frag:DL,backgroundCube_vert:IL,backgroundCube_frag:NL,cube_vert:UL,cube_frag:FL,depth_vert:OL,depth_frag:kL,distanceRGBA_vert:zL,distanceRGBA_frag:BL,equirect_vert:VL,equirect_frag:HL,linedashed_vert:GL,linedashed_frag:WL,meshbasic_vert:jL,meshbasic_frag:XL,meshlambert_vert:YL,meshlambert_frag:$L,meshmatcap_vert:qL,meshmatcap_frag:KL,meshnormal_vert:ZL,meshnormal_frag:QL,meshphong_vert:JL,meshphong_frag:eD,meshphysical_vert:tD,meshphysical_frag:nD,meshtoon_vert:iD,meshtoon_frag:rD,points_vert:sD,points_frag:oD,shadow_vert:aD,shadow_frag:lD,sprite_vert:cD,sprite_frag:uD},ae={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},ei={basic:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Yt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Yt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Yt([ae.points,ae.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Yt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Yt([ae.common,ae.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Yt([ae.sprite,ae.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Yt([ae.common,ae.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Yt([ae.lights,ae.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};ei.physical={uniforms:Yt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};const bl={r:0,b:0,g:0},Tr=new Pi,fD=new At;function dD(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function v(x){let g=x.isScene===!0?x.background:null;return g&&g.isTexture&&(g=(x.backgroundBlurriness>0?n:e).get(g)),g}function y(x){let g=!1;const M=v(x);M===null?h(a,l):M&&M.isColor&&(h(M,1),g=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(x,g){const M=v(g);M&&(M.isCubeTexture||M.mapping===au)?(u===void 0&&(u=new ri(new Ua(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:so(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Tr.copy(g.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fD.makeRotationFromEuler(Tr)),u.material.toneMapped=Ze.getTransfer(M.colorSpace)!==rt,(f!==M||d!==M.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,p=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ri(new Fa(2,2),new Li({name:"BackgroundMaterial",uniforms:so(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,p=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,g){x.getRGB(bl,lM(t)),i.buffers.color.setClear(bl.r,bl.g,bl.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(x,g=1){a.set(x),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(a,l)},render:y,addToRenderList:m}}function hD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(_,I,H,D,Y){let X=!1;const Q=f(D,H,I);s!==Q&&(s=Q,c(s.object)),X=p(_,D,H,Y),X&&v(_,D,H,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(_,I,H,D),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function u(_){return t.deleteVertexArray(_)}function f(_,I,H){const D=H.wireframe===!0;let Y=i[_.id];Y===void 0&&(Y={},i[_.id]=Y);let X=Y[I.id];X===void 0&&(X={},Y[I.id]=X);let Q=X[D];return Q===void 0&&(Q=d(l()),X[D]=Q),Q}function d(_){const I=[],H=[],D=[];for(let Y=0;Y<n;Y++)I[Y]=0,H[Y]=0,D[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:D,object:_,attributes:{},index:null}}function p(_,I,H,D){const Y=s.attributes,X=I.attributes;let Q=0;const ne=H.getAttributes();for(const L in ne)if(ne[L].location>=0){const G=Y[L];let re=X[L];if(re===void 0&&(L==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),L==="instanceColor"&&_.instanceColor&&(re=_.instanceColor)),G===void 0||G.attribute!==re||re&&G.data!==re.data)return!0;Q++}return s.attributesNum!==Q||s.index!==D}function v(_,I,H,D){const Y={},X=I.attributes;let Q=0;const ne=H.getAttributes();for(const L in ne)if(ne[L].location>=0){let G=X[L];G===void 0&&(L==="instanceMatrix"&&_.instanceMatrix&&(G=_.instanceMatrix),L==="instanceColor"&&_.instanceColor&&(G=_.instanceColor));const re={};re.attribute=G,G&&G.data&&(re.data=G.data),Y[L]=re,Q++}s.attributes=Y,s.attributesNum=Q,s.index=D}function y(){const _=s.newAttributes;for(let I=0,H=_.length;I<H;I++)_[I]=0}function m(_){h(_,0)}function h(_,I){const H=s.newAttributes,D=s.enabledAttributes,Y=s.attributeDivisors;H[_]=1,D[_]===0&&(t.enableVertexAttribArray(_),D[_]=1),Y[_]!==I&&(t.vertexAttribDivisor(_,I),Y[_]=I)}function x(){const _=s.newAttributes,I=s.enabledAttributes;for(let H=0,D=I.length;H<D;H++)I[H]!==_[H]&&(t.disableVertexAttribArray(H),I[H]=0)}function g(_,I,H,D,Y,X,Q){Q===!0?t.vertexAttribIPointer(_,I,H,Y,X):t.vertexAttribPointer(_,I,H,D,Y,X)}function M(_,I,H,D){y();const Y=D.attributes,X=H.getAttributes(),Q=I.defaultAttributeValues;for(const ne in X){const L=X[ne];if(L.location>=0){let B=Y[ne];if(B===void 0&&(ne==="instanceMatrix"&&_.instanceMatrix&&(B=_.instanceMatrix),ne==="instanceColor"&&_.instanceColor&&(B=_.instanceColor)),B!==void 0){const G=B.normalized,re=B.itemSize,xe=e.get(B);if(xe===void 0)continue;const je=xe.buffer,j=xe.type,ie=xe.bytesPerElement,de=j===t.INT||j===t.UNSIGNED_INT||B.gpuType===YS;if(B.isInterleavedBufferAttribute){const se=B.data,Oe=se.stride,ke=B.offset;if(se.isInstancedInterleavedBuffer){for(let F=0;F<L.locationSize;F++)h(L.location+F,se.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let F=0;F<L.locationSize;F++)m(L.location+F);t.bindBuffer(t.ARRAY_BUFFER,je);for(let F=0;F<L.locationSize;F++)g(L.location+F,re/L.locationSize,j,G,Oe*ie,(ke+re/L.locationSize*F)*ie,de)}else{if(B.isInstancedBufferAttribute){for(let se=0;se<L.locationSize;se++)h(L.location+se,B.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let se=0;se<L.locationSize;se++)m(L.location+se);t.bindBuffer(t.ARRAY_BUFFER,je);for(let se=0;se<L.locationSize;se++)g(L.location+se,re/L.locationSize,j,G,re*ie,re/L.locationSize*se*ie,de)}}else if(Q!==void 0){const G=Q[ne];if(G!==void 0)switch(G.length){case 2:t.vertexAttrib2fv(L.location,G);break;case 3:t.vertexAttrib3fv(L.location,G);break;case 4:t.vertexAttrib4fv(L.location,G);break;default:t.vertexAttrib1fv(L.location,G)}}}}x()}function b(){P();for(const _ in i){const I=i[_];for(const H in I){const D=I[H];for(const Y in D)u(D[Y].object),delete D[Y];delete I[H]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const I=i[_.id];for(const H in I){const D=I[H];for(const Y in D)u(D[Y].object),delete D[Y];delete I[H]}delete i[_.id]}function C(_){for(const I in i){const H=i[I];if(H[_.id]===void 0)continue;const D=H[_.id];for(const Y in D)u(D[Y].object),delete D[Y];delete H[_.id]}}function P(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function pD(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<f;p++)this.render(c[p],u[p]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];n.update(p,i,1)}}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let y=0;y<f;y++)v+=u[y];for(let y=0;y<d.length;y++)n.update(v,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mD(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ii&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===lu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==dr&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zi&&!C)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:M,maxSamples:b}}function gD(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Rr,a=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,g=x*4;let M=h.clippingState||null;l.value=M,M=u(v,d,g,p);for(let b=0;b!==g;++b)M[b]=n[b];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,v){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const h=p+y*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,M=p;g!==y;++g,M+=4)o.copy(f[g]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function vD(t){let e=new WeakMap;function n(o,a){return a===sh?o.mapping=no:a===oh&&(o.mapping=io),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===sh||a===oh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bR(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class xD extends cM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ks=4,vv=[.125,.215,.35,.446,.526,.582],Dr=20,Lf=new xD,xv=new Qe;let Df=null,If=0,Nf=0,Uf=!1;const Pr=(1+Math.sqrt(5))/2,ys=1/Pr,yv=[new z(-Pr,ys,0),new z(Pr,ys,0),new z(-ys,0,Pr),new z(ys,0,Pr),new z(0,Pr,-ys),new z(0,Pr,ys),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class _v{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Df=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Df,If,Nf),this._renderer.xr.enabled=Uf,e.scissorTest=!1,Rl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Df=this._renderer.getRenderTarget(),If=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:lu,format:ii,colorSpace:vr,depthBuffer:!1},r=Sv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yD(s)),this._blurMaterial=_D(s,e,n)}return r}_compileMaterial(e){const n=new ri(this._lodPlanes[0],e);this._renderer.compile(n,Lf)}_sceneToCubeUV(e,n,i,r){const a=new wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(xv),u.toneMapping=ar,u.autoClear=!1;const p=new sM({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),v=new ri(new Ua,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(xv),y=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const g=this._cubeSize;Rl(r,x*g,h>2?g:0,g,g),u.setRenderTarget(r),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===no||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Lf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yv[(r-s-1)%yv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ri(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Dr-1),y=s/v,m=isFinite(s)?1+Math.floor(u*y):Dr;m>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Dr}`);const h=[];let x=0;for(let C=0;C<Dr;++C){const P=C/y,E=Math.exp(-P*P/2);h.push(E),C===0?x+=E:C<m&&(x+=2*E)}for(let C=0;C<h.length;C++)h[C]=h[C]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const M=this._sizeLods[r],b=3*M*(r>g-ks?r-g+ks:0),A=4*(this._cubeSize-M);Rl(n,b,A,3*M,2*M),l.setRenderTarget(n),l.render(f,Lf)}}function yD(t){const e=[],n=[],i=[];let r=t;const s=t-ks+1+vv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ks?l=vv[o-t+ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,y=3,m=2,h=1,x=new Float32Array(y*v*p),g=new Float32Array(m*v*p),M=new Float32Array(h*v*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,P=A>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];x.set(E,y*v*A),g.set(d,m*v*A);const _=[A,A,A,A,A,A];M.set(_,h*v*A)}const b=new ts;b.setAttribute("position",new li(x,y)),b.setAttribute("uv",new li(g,m)),b.setAttribute("faceIndex",new li(M,h)),e.push(b),r>ks&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Sv(t,e,n){const i=new Qr(t,e,n);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _D(t,e,n){const i=new Float32Array(Dr),r=new z(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Mv(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Ev(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Fp(){return`

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
	`}function SD(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===sh||l===oh,u=l===no||l===io;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new _v(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new _v(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function MD(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ED(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const y=d.morphAttributes[v];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const y=p[v];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,v=f.attributes.position;let y=0;if(p!==null){const x=p.array;y=p.version;for(let g=0,M=x.length;g<M;g+=3){const b=x[g+0],A=x[g+1],C=x[g+2];d.push(b,A,A,C,C,b)}}else if(v!==void 0){const x=v.array;y=v.version;for(let g=0,M=x.length/3-1;g<M;g+=3){const b=g+0,A=g+1,C=g+2;d.push(b,A,A,C,C,b)}}else return;const m=new(eM(d)?aM:oM)(d,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function TD(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*o,v),n.update(p,i,v))}function u(d,p,v){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<v;m++)this.render(d[m]/o,p[m]);else{y.multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];n.update(m,i,1)}}function f(d,p,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,v);let h=0;for(let x=0;x<v;x++)h+=p[x];for(let x=0;x<y.length;x++)n.update(h,i,y[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function wD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function AD(t,e,n){const i=new WeakMap,r=new Nt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let _=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var p=_;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let b=a.attributes.position.count*M,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*A*4*f),P=new nM(C,b,A,f);P.type=Zi,P.needsUpdate=!0;const E=M*4;for(let I=0;I<f;I++){const H=h[I],D=x[I],Y=g[I],X=b*A*4*I;for(let Q=0;Q<H.count;Q++){const ne=Q*E;v===!0&&(r.fromBufferAttribute(H,Q),C[X+ne+0]=r.x,C[X+ne+1]=r.y,C[X+ne+2]=r.z,C[X+ne+3]=0),y===!0&&(r.fromBufferAttribute(D,Q),C[X+ne+4]=r.x,C[X+ne+5]=r.y,C[X+ne+6]=r.z,C[X+ne+7]=0),m===!0&&(r.fromBufferAttribute(Y,Q),C[X+ne+8]=r.x,C[X+ne+9]=r.y,C[X+ne+10]=r.z,C[X+ne+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new Ye(b,A)},i.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function CD(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class hM extends cn{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Xs,u!==Xs&&u!==ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xs&&(i=ro),i===void 0&&u===ya&&(i=La),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const pM=new cn,mM=new hM(1,1);mM.compareFunction=JS;const gM=new nM,vM=new fR,xM=new uM,Tv=[],wv=[],Av=new Float32Array(16),Cv=new Float32Array(9),bv=new Float32Array(4);function po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Tv[r];if(s===void 0&&(s=new Float32Array(r),Tv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function fu(t,e){let n=wv[e];n===void 0&&(n=new Int32Array(e),wv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function RD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function PD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function LD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function DD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;bv.set(i),t.uniformMatrix2fv(this.addr,!1,bv),bt(n,i)}}function ID(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Cv.set(i),t.uniformMatrix3fv(this.addr,!1,Cv),bt(n,i)}}function ND(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Av.set(i),t.uniformMatrix4fv(this.addr,!1,Av),bt(n,i)}}function UD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function FD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function OD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function kD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function zD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function VD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function HD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function GD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?mM:pM;n.setTexture2D(e||s,r)}function WD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||vM,r)}function jD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||xM,r)}function XD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||gM,r)}function YD(t){switch(t){case 5126:return bD;case 35664:return RD;case 35665:return PD;case 35666:return LD;case 35674:return DD;case 35675:return ID;case 35676:return ND;case 5124:case 35670:return UD;case 35667:case 35671:return FD;case 35668:case 35672:return OD;case 35669:case 35673:return kD;case 5125:return zD;case 36294:return BD;case 36295:return VD;case 36296:return HD;case 35678:case 36198:case 36298:case 36306:case 35682:return GD;case 35679:case 36299:case 36307:return WD;case 35680:case 36300:case 36308:case 36293:return jD;case 36289:case 36303:case 36311:case 36292:return XD}}function $D(t,e){t.uniform1fv(this.addr,e)}function qD(t,e){const n=po(e,this.size,2);t.uniform2fv(this.addr,n)}function KD(t,e){const n=po(e,this.size,3);t.uniform3fv(this.addr,n)}function ZD(t,e){const n=po(e,this.size,4);t.uniform4fv(this.addr,n)}function QD(t,e){const n=po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function JD(t,e){const n=po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function e3(t,e){const n=po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function t3(t,e){t.uniform1iv(this.addr,e)}function n3(t,e){t.uniform2iv(this.addr,e)}function i3(t,e){t.uniform3iv(this.addr,e)}function r3(t,e){t.uniform4iv(this.addr,e)}function s3(t,e){t.uniform1uiv(this.addr,e)}function o3(t,e){t.uniform2uiv(this.addr,e)}function a3(t,e){t.uniform3uiv(this.addr,e)}function l3(t,e){t.uniform4uiv(this.addr,e)}function c3(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||pM,s[o])}function u3(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||vM,s[o])}function f3(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||xM,s[o])}function d3(t,e,n){const i=this.cache,r=e.length,s=fu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||gM,s[o])}function h3(t){switch(t){case 5126:return $D;case 35664:return qD;case 35665:return KD;case 35666:return ZD;case 35674:return QD;case 35675:return JD;case 35676:return e3;case 5124:case 35670:return t3;case 35667:case 35671:return n3;case 35668:case 35672:return i3;case 35669:case 35673:return r3;case 5125:return s3;case 36294:return o3;case 36295:return a3;case 36296:return l3;case 35678:case 36198:case 36298:case 36306:case 35682:return c3;case 35679:case 36299:case 36307:return u3;case 35680:case 36300:case 36308:case 36293:return f3;case 36289:case 36303:case 36311:case 36292:return d3}}class p3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=YD(n.type)}}class m3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=h3(n.type)}}class g3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ff=/(\w+)(\])?(\[|\.)?/g;function Rv(t,e){t.seq.push(e),t.map[e.id]=e}function v3(t,e,n){const i=t.name,r=i.length;for(Ff.lastIndex=0;;){const s=Ff.exec(i),o=Ff.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Rv(n,c===void 0?new p3(a,t,e):new m3(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new g3(a),Rv(n,f)),n=f}}}class Jl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);v3(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Pv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const x3=37297;let y3=0;function _3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function S3(t){const e=Ze.getPrimaries(Ze.workingColorSpace),n=Ze.getPrimaries(t);let i;switch(e===n?i="":e===Fc&&n===Uc?i="LinearDisplayP3ToLinearSRGB":e===Uc&&n===Fc&&(i="LinearSRGBToLinearDisplayP3"),t){case vr:case cu:return[i,"LinearTransferOETF"];case Qn:case Np:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Lv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+_3(t.getShaderSource(e),o)}else return r}function M3(t,e){const n=S3(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function E3(t,e){let n;switch(e){case bb:n="Linear";break;case Rb:n="Reinhard";break;case Pb:n="OptimizedCineon";break;case Lb:n="ACESFilmic";break;case Ib:n="AgX";break;case Nb:n="Neutral";break;case Db:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function T3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function w3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function A3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Fo(t){return t!==""}function Dv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C3=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(t){return t.replace(C3,R3)}const b3=new Map;function R3(t,e){let n=Re[e];if(n===void 0){const i=b3.get(e);if(i!==void 0)n=Re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uh(n)}const P3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nv(t){return t.replace(P3,L3)}function L3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function D3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===GS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===eb?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function I3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function U3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case WS:e="ENVMAP_BLENDING_MULTIPLY";break;case Ab:e="ENVMAP_BLENDING_MIX";break;case Cb:e="ENVMAP_BLENDING_ADD";break}return e}function F3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function O3(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=D3(n),c=I3(n),u=N3(n),f=U3(n),d=F3(n),p=T3(n),v=w3(s),y=r.createProgram();let m,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Fo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Fo).join(`
`),h.length>0&&(h+=`
`)):(m=[Uv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),h=[Uv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?Re.tonemapping_pars_fragment:"",n.toneMapping!==ar?E3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,M3("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fo).join(`
`)),o=uh(o),o=Dv(o,n),o=Iv(o,n),a=uh(a),a=Dv(a,n),a=Iv(a,n),o=Nv(o),a=Nv(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Z0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Z0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=x+m+o,M=x+h+a,b=Pv(r,r.VERTEX_SHADER,g),A=Pv(r,r.FRAGMENT_SHADER,M);r.attachShader(y,b),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(I){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),D=r.getShaderInfoLog(b).trim(),Y=r.getShaderInfoLog(A).trim();let X=!0,Q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,A);else{const ne=Lv(r,b,"vertex"),L=Lv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+ne+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(D===""||Y==="")&&(Q=!1);Q&&(I.diagnostics={runnable:X,programLog:H,vertexShader:{log:D,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(b),r.deleteShader(A),P=new Jl(r,y),E=A3(r,y)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,x3)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=y3++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=A,this}let k3=0;class z3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new B3(e),n.set(e,i)),i}}class B3{constructor(e){this.id=k3++,this.code=e,this.usedTimes=0}}function V3(t,e,n,i,r,s,o){const a=new iM,l=new z3,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,_,I,H,D){const Y=H.fog,X=D.geometry,Q=E.isMeshStandardMaterial?H.environment:null,ne=(E.isMeshStandardMaterial?n:e).get(E.envMap||Q),L=ne&&ne.mapping===au?ne.image.height:null,B=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=G!==void 0?G.length:0;let xe=0;X.morphAttributes.position!==void 0&&(xe=1),X.morphAttributes.normal!==void 0&&(xe=2),X.morphAttributes.color!==void 0&&(xe=3);let je,j,ie,de;if(B){const $e=ei[B];je=$e.vertexShader,j=$e.fragmentShader}else je=E.vertexShader,j=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),de=l.getFragmentShaderID(E);const se=t.getRenderTarget(),Oe=D.isInstancedMesh===!0,ke=D.isBatchedMesh===!0,F=!!E.map,tt=!!E.matcap,Me=!!ne,Je=!!E.aoMap,we=!!E.lightMap,Be=!!E.bumpMap,Ne=!!E.normalMap,Ve=!!E.displacementMap,dt=!!E.emissiveMap,R=!!E.metalnessMap,T=!!E.roughnessMap,W=E.anisotropy>0,q=E.clearcoat>0,J=E.dispersion>0,te=E.iridescence>0,Se=E.sheen>0,fe=E.transmission>0,ue=W&&!!E.anisotropyMap,Le=q&&!!E.clearcoatMap,oe=q&&!!E.clearcoatNormalMap,_e=q&&!!E.clearcoatRoughnessMap,He=te&&!!E.iridescenceMap,Ee=te&&!!E.iridescenceThicknessMap,ge=Se&&!!E.sheenColorMap,De=Se&&!!E.sheenRoughnessMap,ze=!!E.specularMap,gt=!!E.specularColorMap,Ie=!!E.specularIntensityMap,N=fe&&!!E.transmissionMap,K=fe&&!!E.thicknessMap,$=!!E.gradientMap,le=!!E.alphaMap,he=E.alphaTest>0,We=!!E.alphaHash,nt=!!E.extensions;let ht=ar;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ht=t.toneMapping);const Ot={shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:je,fragmentShader:j,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ke,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:vr,alphaToCoverage:!!E.alphaToCoverage,map:F,matcap:tt,envMap:Me,envMapMode:Me&&ne.mapping,envMapCubeUVHeight:L,aoMap:Je,lightMap:we,bumpMap:Be,normalMap:Ne,displacementMap:d&&Ve,emissiveMap:dt,normalMapObjectSpace:Ne&&E.normalMapType===qb,normalMapTangentSpace:Ne&&E.normalMapType===$b,metalnessMap:R,roughnessMap:T,anisotropy:W,anisotropyMap:ue,clearcoat:q,clearcoatMap:Le,clearcoatNormalMap:oe,clearcoatRoughnessMap:_e,dispersion:J,iridescence:te,iridescenceMap:He,iridescenceThicknessMap:Ee,sheen:Se,sheenColorMap:ge,sheenRoughnessMap:De,specularMap:ze,specularColorMap:gt,specularIntensityMap:Ie,transmission:fe,transmissionMap:N,thicknessMap:K,gradientMap:$,opaque:E.transparent===!1&&E.blending===js&&E.alphaToCoverage===!1,alphaMap:le,alphaTest:he,alphaHash:We,combine:E.combine,mapUv:F&&y(E.map.channel),aoMapUv:Je&&y(E.aoMap.channel),lightMapUv:we&&y(E.lightMap.channel),bumpMapUv:Be&&y(E.bumpMap.channel),normalMapUv:Ne&&y(E.normalMap.channel),displacementMapUv:Ve&&y(E.displacementMap.channel),emissiveMapUv:dt&&y(E.emissiveMap.channel),metalnessMapUv:R&&y(E.metalnessMap.channel),roughnessMapUv:T&&y(E.roughnessMap.channel),anisotropyMapUv:ue&&y(E.anisotropyMap.channel),clearcoatMapUv:Le&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:oe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:De&&y(E.sheenRoughnessMap.channel),specularMapUv:ze&&y(E.specularMap.channel),specularColorMapUv:gt&&y(E.specularColorMap.channel),specularIntensityMapUv:Ie&&y(E.specularIntensityMap.channel),transmissionMapUv:N&&y(E.transmissionMap.channel),thicknessMapUv:K&&y(E.thicknessMap.channel),alphaMapUv:le&&y(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ne||W),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!X.attributes.uv&&(F||le),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:xe,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ht,useLegacyLights:t._useLegacyLights,decodeVideoTexture:F&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_i,flipSided:E.side===ln,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:nt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:nt&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function h(E){const _=[];if(E.shaderID?_.push(E.shaderID):(_.push(E.customVertexShaderID),_.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)_.push(I),_.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(x(_,E),g(_,E),_.push(t.outputColorSpace)),_.push(E.customProgramCacheKey),_.join()}function x(E,_){E.push(_.precision),E.push(_.outputColorSpace),E.push(_.envMapMode),E.push(_.envMapCubeUVHeight),E.push(_.mapUv),E.push(_.alphaMapUv),E.push(_.lightMapUv),E.push(_.aoMapUv),E.push(_.bumpMapUv),E.push(_.normalMapUv),E.push(_.displacementMapUv),E.push(_.emissiveMapUv),E.push(_.metalnessMapUv),E.push(_.roughnessMapUv),E.push(_.anisotropyMapUv),E.push(_.clearcoatMapUv),E.push(_.clearcoatNormalMapUv),E.push(_.clearcoatRoughnessMapUv),E.push(_.iridescenceMapUv),E.push(_.iridescenceThicknessMapUv),E.push(_.sheenColorMapUv),E.push(_.sheenRoughnessMapUv),E.push(_.specularMapUv),E.push(_.specularColorMapUv),E.push(_.specularIntensityMapUv),E.push(_.transmissionMapUv),E.push(_.thicknessMapUv),E.push(_.combine),E.push(_.fogExp2),E.push(_.sizeAttenuation),E.push(_.morphTargetsCount),E.push(_.morphAttributeCount),E.push(_.numDirLights),E.push(_.numPointLights),E.push(_.numSpotLights),E.push(_.numSpotLightMaps),E.push(_.numHemiLights),E.push(_.numRectAreaLights),E.push(_.numDirLightShadows),E.push(_.numPointLightShadows),E.push(_.numSpotLightShadows),E.push(_.numSpotLightShadowsWithMaps),E.push(_.numLightProbes),E.push(_.shadowMapType),E.push(_.toneMapping),E.push(_.numClippingPlanes),E.push(_.numClipIntersection),E.push(_.depthPacking)}function g(E,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.useLegacyLights&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.alphaToCoverage&&a.enable(20),E.push(a.mask)}function M(E){const _=v[E.type];let I;if(_){const H=ei[_];I=TR.clone(H.uniforms)}else I=E.uniforms;return I}function b(E,_){let I;for(let H=0,D=u.length;H<D;H++){const Y=u[H];if(Y.cacheKey===_){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new O3(t,_,E,s),u.push(I)),I}function A(E){if(--E.usedTimes===0){const _=u.indexOf(E);u[_]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:P}}function H3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function G3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Fv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ov(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,v,y,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:y,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function a(f,d,p,v,y,m){const h=o(f,d,p,v,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,v,y,m){const h=o(f,d,p,v,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||G3),i.length>1&&i.sort(d||Fv),r.length>1&&r.sort(d||Fv)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function W3(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ov,t.set(i,[o])):r>=s.length?(o=new Ov,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function j3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Qe};break;case"SpotLight":n={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function X3(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Y3=0;function $3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function q3(t){const e=new j3,n=X3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new At,o=new At;function a(c,u){let f=0,d=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let v=0,y=0,m=0,h=0,x=0,g=0,M=0,b=0,A=0,C=0,P=0;c.sort($3);const E=u===!0?Math.PI:1;for(let I=0,H=c.length;I<H;I++){const D=c[I],Y=D.color,X=D.intensity,Q=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=Y.r*X*E,d+=Y.g*X*E,p+=Y.b*X*E;else if(D.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(D.sh.coefficients[L],X);P++}else if(D.isDirectionalLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const B=D.shadow,G=n.get(D);G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,i.directionalShadow[v]=G,i.directionalShadowMap[v]=ne,i.directionalShadowMatrix[v]=D.shadow.matrix,g++}i.directional[v]=L,v++}else if(D.isSpotLight){const L=e.get(D);L.position.setFromMatrixPosition(D.matrixWorld),L.color.copy(Y).multiplyScalar(X*E),L.distance=Q,L.coneCos=Math.cos(D.angle),L.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),L.decay=D.decay,i.spot[m]=L;const B=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,B.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[m]=B.matrix,D.castShadow){const G=n.get(D);G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,i.spotShadow[m]=G,i.spotShadowMap[m]=ne,b++}m++}else if(D.isRectAreaLight){const L=e.get(D);L.color.copy(Y).multiplyScalar(X),L.halfWidth.set(D.width*.5,0,0),L.halfHeight.set(0,D.height*.5,0),i.rectArea[h]=L,h++}else if(D.isPointLight){const L=e.get(D);if(L.color.copy(D.color).multiplyScalar(D.intensity*E),L.distance=D.distance,L.decay=D.decay,D.castShadow){const B=D.shadow,G=n.get(D);G.shadowBias=B.bias,G.shadowNormalBias=B.normalBias,G.shadowRadius=B.radius,G.shadowMapSize=B.mapSize,G.shadowCameraNear=B.camera.near,G.shadowCameraFar=B.camera.far,i.pointShadow[y]=G,i.pointShadowMap[y]=ne,i.pointShadowMatrix[y]=D.shadow.matrix,M++}i.point[y]=L,y++}else if(D.isHemisphereLight){const L=e.get(D);L.skyColor.copy(D.color).multiplyScalar(X*E),L.groundColor.copy(D.groundColor).multiplyScalar(X*E),i.hemi[x]=L,x++}}h>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=p;const _=i.hash;(_.directionalLength!==v||_.pointLength!==y||_.spotLength!==m||_.rectAreaLength!==h||_.hemiLength!==x||_.numDirectionalShadows!==g||_.numPointShadows!==M||_.numSpotShadows!==b||_.numSpotMaps!==A||_.numLightProbes!==P)&&(i.directional.length=v,i.spot.length=m,i.rectArea.length=h,i.point.length=y,i.hemi.length=x,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,_.directionalLength=v,_.pointLength=y,_.spotLength=m,_.rectAreaLength=h,_.hemiLength=x,_.numDirectionalShadows=g,_.numPointShadows=M,_.numSpotShadows=b,_.numSpotMaps=A,_.numLightProbes=P,i.version=Y3++)}function l(c,u){let f=0,d=0,p=0,v=0,y=0;const m=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const g=c[h];if(g.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(g.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function kv(t){const e=new q3(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function K3(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new kv(t),e.set(r,[a])):s>=o.length?(a=new kv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Z3 extends uu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q3 extends uu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const J3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tI(t,e,n){let i=new fM;const r=new Ye,s=new Ye,o=new Nt,a=new Z3({depthPacking:Yb}),l=new Q3,c={},u=n.maxTextureSize,f={[fr]:ln,[ln]:fr,[_i]:_i},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:J3,fragmentShader:eI}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new ts;v.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ri(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=GS;let h=this.type;this.render=function(A,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),_=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),H=t.state;H.setBlending(or),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const D=h!==vi&&this.type===vi,Y=h===vi&&this.type!==vi;for(let X=0,Q=A.length;X<Q;X++){const ne=A[X],L=ne.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const B=L.getFrameExtents();if(r.multiply(B),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/B.x),r.x=s.x*B.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/B.y),r.y=s.y*B.y,L.mapSize.y=s.y)),L.map===null||D===!0||Y===!0){const re=this.type!==vi?{minFilter:bn,magFilter:bn}:{};L.map!==null&&L.map.dispose(),L.map=new Qr(r.x,r.y,re),L.map.texture.name=ne.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const G=L.getViewportCount();for(let re=0;re<G;re++){const xe=L.getViewport(re);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),H.viewport(o),L.updateMatrices(ne,re),i=L.getFrustum(),M(C,P,L.camera,ne,this.type)}L.isPointLightShadow!==!0&&this.type===vi&&x(L,P),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(E,_,I)};function x(A,C){const P=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,P,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,P,p,y,null)}function g(A,C,P,E){let _=null;const I=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)_=I;else if(_=P.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=_.uuid,D=C.uuid;let Y=c[H];Y===void 0&&(Y={},c[H]=Y);let X=Y[D];X===void 0&&(X=_.clone(),Y[D]=X,C.addEventListener("dispose",b)),_=X}if(_.visible=C.visible,_.wireframe=C.wireframe,E===vi?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:f[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const H=t.properties.get(_);H.light=P}return _}function M(A,C,P,E,_){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===vi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const D=e.update(A),Y=A.material;if(Array.isArray(Y)){const X=D.groups;for(let Q=0,ne=X.length;Q<ne;Q++){const L=X[Q],B=Y[L.materialIndex];if(B&&B.visible){const G=g(A,B,E,_);A.onBeforeShadow(t,A,C,P,D,G,L),t.renderBufferDirect(P,null,D,G,A,L),A.onAfterShadow(t,A,C,P,D,G,L)}}}else if(Y.visible){const X=g(A,Y,E,_);A.onBeforeShadow(t,A,C,P,D,X,null),t.renderBufferDirect(P,null,D,X,A,null),A.onAfterShadow(t,A,C,P,D,X,null)}}const H=A.children;for(let D=0,Y=H.length;D<Y;D++)M(H[D],C,P,E,_)}function b(A){A.target.removeEventListener("dispose",b);for(const P in c){const E=c[P],_=A.target.uuid;_ in E&&(E[_].dispose(),delete E[_])}}}function nI(t){function e(){let N=!1;const K=new Nt;let $=null;const le=new Nt(0,0,0,0);return{setMask:function(he){$!==he&&!N&&(t.colorMask(he,he,he,he),$=he)},setLocked:function(he){N=he},setClear:function(he,We,nt,ht,Ot){Ot===!0&&(he*=ht,We*=ht,nt*=ht),K.set(he,We,nt,ht),le.equals(K)===!1&&(t.clearColor(he,We,nt,ht),le.copy(K))},reset:function(){N=!1,$=null,le.set(-1,0,0,0)}}}function n(){let N=!1,K=null,$=null,le=null;return{setTest:function(he){he?de(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(he){K!==he&&!N&&(t.depthMask(he),K=he)},setFunc:function(he){if($!==he){switch(he){case yb:t.depthFunc(t.NEVER);break;case _b:t.depthFunc(t.ALWAYS);break;case Sb:t.depthFunc(t.LESS);break;case Ic:t.depthFunc(t.LEQUAL);break;case Mb:t.depthFunc(t.EQUAL);break;case Eb:t.depthFunc(t.GEQUAL);break;case Tb:t.depthFunc(t.GREATER);break;case wb:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}$=he}},setLocked:function(he){N=he},setClear:function(he){le!==he&&(t.clearDepth(he),le=he)},reset:function(){N=!1,K=null,$=null,le=null}}}function i(){let N=!1,K=null,$=null,le=null,he=null,We=null,nt=null,ht=null,Ot=null;return{setTest:function($e){N||($e?de(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function($e){K!==$e&&!N&&(t.stencilMask($e),K=$e)},setFunc:function($e,$n,Xt){($!==$e||le!==$n||he!==Xt)&&(t.stencilFunc($e,$n,Xt),$=$e,le=$n,he=Xt)},setOp:function($e,$n,Xt){(We!==$e||nt!==$n||ht!==Xt)&&(t.stencilOp($e,$n,Xt),We=$e,nt=$n,ht=Xt)},setLocked:function($e){N=$e},setClear:function($e){Ot!==$e&&(t.clearStencil($e),Ot=$e)},reset:function(){N=!1,K=null,$=null,le=null,he=null,We=null,nt=null,ht=null,Ot=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,v=!1,y=null,m=null,h=null,x=null,g=null,M=null,b=null,A=new Qe(0,0,0),C=0,P=!1,E=null,_=null,I=null,H=null,D=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ne)[1]),X=Q>=1):ne.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),X=Q>=2);let L=null,B={};const G=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),xe=new Nt().fromArray(G),je=new Nt().fromArray(re);function j(N,K,$,le){const he=new Uint8Array(4),We=t.createTexture();t.bindTexture(N,We),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<$;nt++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(K,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(K+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return We}const ie={};ie[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(Ic),Be(!1),Ne(y0),de(t.CULL_FACE),Je(or);function de(N){c[N]!==!0&&(t.enable(N),c[N]=!0)}function se(N){c[N]!==!1&&(t.disable(N),c[N]=!1)}function Oe(N,K){return u[N]!==K?(t.bindFramebuffer(N,K),u[N]=K,N===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=K),N===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=K),!0):!1}function ke(N,K){let $=d,le=!1;if(N){$=f.get(K),$===void 0&&($=[],f.set(K,$));const he=N.textures;if($.length!==he.length||$[0]!==t.COLOR_ATTACHMENT0){for(let We=0,nt=he.length;We<nt;We++)$[We]=t.COLOR_ATTACHMENT0+We;$.length=he.length,le=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,le=!0);le&&t.drawBuffers($)}function F(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const tt={[Lr]:t.FUNC_ADD,[nb]:t.FUNC_SUBTRACT,[ib]:t.FUNC_REVERSE_SUBTRACT};tt[rb]=t.MIN,tt[sb]=t.MAX;const Me={[ob]:t.ZERO,[ab]:t.ONE,[lb]:t.SRC_COLOR,[ih]:t.SRC_ALPHA,[pb]:t.SRC_ALPHA_SATURATE,[db]:t.DST_COLOR,[ub]:t.DST_ALPHA,[cb]:t.ONE_MINUS_SRC_COLOR,[rh]:t.ONE_MINUS_SRC_ALPHA,[hb]:t.ONE_MINUS_DST_COLOR,[fb]:t.ONE_MINUS_DST_ALPHA,[mb]:t.CONSTANT_COLOR,[gb]:t.ONE_MINUS_CONSTANT_COLOR,[vb]:t.CONSTANT_ALPHA,[xb]:t.ONE_MINUS_CONSTANT_ALPHA};function Je(N,K,$,le,he,We,nt,ht,Ot,$e){if(N===or){v===!0&&(se(t.BLEND),v=!1);return}if(v===!1&&(de(t.BLEND),v=!0),N!==tb){if(N!==y||$e!==P){if((m!==Lr||g!==Lr)&&(t.blendEquation(t.FUNC_ADD),m=Lr,g=Lr),$e)switch(N){case js:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _0:t.blendFunc(t.ONE,t.ONE);break;case S0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case M0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case js:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case S0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case M0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}h=null,x=null,M=null,b=null,A.set(0,0,0),C=0,y=N,P=$e}return}he=he||K,We=We||$,nt=nt||le,(K!==m||he!==g)&&(t.blendEquationSeparate(tt[K],tt[he]),m=K,g=he),($!==h||le!==x||We!==M||nt!==b)&&(t.blendFuncSeparate(Me[$],Me[le],Me[We],Me[nt]),h=$,x=le,M=We,b=nt),(ht.equals(A)===!1||Ot!==C)&&(t.blendColor(ht.r,ht.g,ht.b,Ot),A.copy(ht),C=Ot),y=N,P=!1}function we(N,K){N.side===_i?se(t.CULL_FACE):de(t.CULL_FACE);let $=N.side===ln;K&&($=!$),Be($),N.blending===js&&N.transparent===!1?Je(or):Je(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const le=N.stencilWrite;o.setTest(le),le&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(N){E!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),E=N)}function Ne(N){N!==QC?(de(t.CULL_FACE),N!==_&&(N===y0?t.cullFace(t.BACK):N===JC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),_=N}function Ve(N){N!==I&&(X&&t.lineWidth(N),I=N)}function dt(N,K,$){N?(de(t.POLYGON_OFFSET_FILL),(H!==K||D!==$)&&(t.polygonOffset(K,$),H=K,D=$)):se(t.POLYGON_OFFSET_FILL)}function R(N){N?de(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function T(N){N===void 0&&(N=t.TEXTURE0+Y-1),L!==N&&(t.activeTexture(N),L=N)}function W(N,K,$){$===void 0&&(L===null?$=t.TEXTURE0+Y-1:$=L);let le=B[$];le===void 0&&(le={type:void 0,texture:void 0},B[$]=le),(le.type!==N||le.texture!==K)&&(L!==$&&(t.activeTexture($),L=$),t.bindTexture(N,K||ie[N]),le.type=N,le.texture=K)}function q(){const N=B[L];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function He(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(N){xe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),xe.copy(N))}function De(N){je.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),je.copy(N))}function ze(N,K){let $=l.get(K);$===void 0&&($=new WeakMap,l.set(K,$));let le=$.get(N);le===void 0&&(le=t.getUniformBlockIndex(K,N.name),$.set(N,le))}function gt(N,K){const le=l.get(K).get(N);a.get(K)!==le&&(t.uniformBlockBinding(K,le,N.__bindingPointIndex),a.set(K,le))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,B={},u={},f=new WeakMap,d=[],p=null,v=!1,y=null,m=null,h=null,x=null,g=null,M=null,b=null,A=new Qe(0,0,0),C=0,P=!1,E=null,_=null,I=null,H=null,D=null,xe.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:se,bindFramebuffer:Oe,drawBuffers:ke,useProgram:F,setBlending:Je,setMaterial:we,setFlipSided:Be,setCullFace:Ne,setLineWidth:Ve,setPolygonOffset:dt,setScissorTest:R,activeTexture:T,bindTexture:W,unbindTexture:q,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:He,texImage3D:Ee,updateUBOMapping:ze,uniformBlockBinding:gt,texStorage2D:oe,texStorage3D:_e,texSubImage2D:Se,texSubImage3D:fe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Le,scissor:ge,viewport:De,reset:Ie}}function iI(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,T){return p?new OffscreenCanvas(R,T):kc("canvas")}function y(R,T,W){let q=1;const J=dt(R);if((J.width>W||J.height>W)&&(q=W/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const te=Math.floor(q*J.width),Se=Math.floor(q*J.height);f===void 0&&(f=v(te,Se));const fe=T?v(te,Se):f;return fe.width=te,fe.height=Se,fe.getContext("2d").drawImage(R,0,0,te,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+te+"x"+Se+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==bn&&R.minFilter!==Hn}function h(R){t.generateMipmap(R)}function x(R,T,W,q,J=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=T;if(T===t.RED&&(W===t.FLOAT&&(te=t.R32F),W===t.HALF_FLOAT&&(te=t.R16F),W===t.UNSIGNED_BYTE&&(te=t.R8)),T===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(te=t.R8UI),W===t.UNSIGNED_SHORT&&(te=t.R16UI),W===t.UNSIGNED_INT&&(te=t.R32UI),W===t.BYTE&&(te=t.R8I),W===t.SHORT&&(te=t.R16I),W===t.INT&&(te=t.R32I)),T===t.RG&&(W===t.FLOAT&&(te=t.RG32F),W===t.HALF_FLOAT&&(te=t.RG16F),W===t.UNSIGNED_BYTE&&(te=t.RG8)),T===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(te=t.RG8UI),W===t.UNSIGNED_SHORT&&(te=t.RG16UI),W===t.UNSIGNED_INT&&(te=t.RG32UI),W===t.BYTE&&(te=t.RG8I),W===t.SHORT&&(te=t.RG16I),W===t.INT&&(te=t.RG32I)),T===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),T===t.RGBA){const Se=J?Nc:Ze.getTransfer(q);W===t.FLOAT&&(te=t.RGBA32F),W===t.HALF_FLOAT&&(te=t.RGBA16F),W===t.UNSIGNED_BYTE&&(te=Se===rt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function g(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==bn&&R.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function M(R){const T=R.target;T.removeEventListener("dispose",M),A(T),T.isVideoTexture&&u.delete(T)}function b(R){const T=R.target;T.removeEventListener("dispose",b),P(T)}function A(R){const T=i.get(R);if(T.__webglInit===void 0)return;const W=R.source,q=d.get(W);if(q){const J=q[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(R),Object.keys(q).length===0&&d.delete(W)}i.remove(R)}function C(R){const T=i.get(R);t.deleteTexture(T.__webglTexture);const W=R.source,q=d.get(W);delete q[T.__cacheKey],o.memory.textures--}function P(R){const T=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(T.__webglFramebuffer[q]))for(let J=0;J<T.__webglFramebuffer[q].length;J++)t.deleteFramebuffer(T.__webglFramebuffer[q][J]);else t.deleteFramebuffer(T.__webglFramebuffer[q]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[q])}else{if(Array.isArray(T.__webglFramebuffer))for(let q=0;q<T.__webglFramebuffer.length;q++)t.deleteFramebuffer(T.__webglFramebuffer[q]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let q=0;q<T.__webglColorRenderbuffer.length;q++)T.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[q]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=R.textures;for(let q=0,J=W.length;q<J;q++){const te=i.get(W[q]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(W[q])}i.remove(R)}let E=0;function _(){E=0}function I(){const R=E;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function H(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function D(R,T){const W=i.get(R);if(R.isVideoTexture&&Ne(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const q=R.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(W,R,T);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+T)}function Y(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){xe(W,R,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+T)}function X(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){xe(W,R,T);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+T)}function Q(R,T){const W=i.get(R);if(R.version>0&&W.__version!==R.version){je(W,R,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+T)}const ne={[ah]:t.REPEAT,[kr]:t.CLAMP_TO_EDGE,[lh]:t.MIRRORED_REPEAT},L={[bn]:t.NEAREST,[Ub]:t.NEAREST_MIPMAP_NEAREST,[ll]:t.NEAREST_MIPMAP_LINEAR,[Hn]:t.LINEAR,[sf]:t.LINEAR_MIPMAP_NEAREST,[zr]:t.LINEAR_MIPMAP_LINEAR},B={[Kb]:t.NEVER,[nR]:t.ALWAYS,[Zb]:t.LESS,[JS]:t.LEQUAL,[Qb]:t.EQUAL,[tR]:t.GEQUAL,[Jb]:t.GREATER,[eR]:t.NOTEQUAL};function G(R,T){if(T.type===Zi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===sf||T.magFilter===ll||T.magFilter===zr||T.minFilter===Hn||T.minFilter===sf||T.minFilter===ll||T.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,ne[T.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,ne[T.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,ne[T.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,L[T.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,B[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===bn||T.minFilter!==ll&&T.minFilter!==zr||T.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function re(R,T){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",M));const q=T.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const te=H(T);if(te!==R.__cacheKey){J[te]===void 0&&(J[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),J[te].usedTimes++;const Se=J[R.__cacheKey];Se!==void 0&&(J[R.__cacheKey].usedTimes--,Se.usedTimes===0&&C(T)),R.__cacheKey=te,R.__webglTexture=J[te].texture}return W}function xe(R,T,W){let q=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(q=t.TEXTURE_3D);const J=re(R,T),te=T.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+W);const Se=i.get(te);if(te.version!==Se.__version||J===!0){n.activeTexture(t.TEXTURE0+W);const fe=Ze.getPrimaries(Ze.workingColorSpace),ue=T.colorSpace===Yi?null:Ze.getPrimaries(T.colorSpace),Le=T.colorSpace===Yi||fe===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let oe=y(T.image,!1,r.maxTextureSize);oe=Ve(T,oe);const _e=s.convert(T.format,T.colorSpace),He=s.convert(T.type);let Ee=x(T.internalFormat,_e,He,T.colorSpace,T.isVideoTexture);G(q,T);let ge;const De=T.mipmaps,ze=T.isVideoTexture!==!0,gt=Se.__version===void 0||J===!0,Ie=te.dataReady,N=g(T,oe);if(T.isDepthTexture)Ee=t.DEPTH_COMPONENT16,T.type===Zi?Ee=t.DEPTH_COMPONENT32F:T.type===ro?Ee=t.DEPTH_COMPONENT24:T.type===La&&(Ee=t.DEPTH24_STENCIL8),gt&&(ze?n.texStorage2D(t.TEXTURE_2D,1,Ee,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Ee,oe.width,oe.height,0,_e,He,null));else if(T.isDataTexture)if(De.length>0){ze&&gt&&n.texStorage2D(t.TEXTURE_2D,N,Ee,De[0].width,De[0].height);for(let K=0,$=De.length;K<$;K++)ge=De[K],ze?Ie&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ge.width,ge.height,_e,He,ge.data):n.texImage2D(t.TEXTURE_2D,K,Ee,ge.width,ge.height,0,_e,He,ge.data);T.generateMipmaps=!1}else ze?(gt&&n.texStorage2D(t.TEXTURE_2D,N,Ee,oe.width,oe.height),Ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,_e,He,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,oe.width,oe.height,0,_e,He,oe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ze&&gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,N,Ee,De[0].width,De[0].height,oe.depth);for(let K=0,$=De.length;K<$;K++)ge=De[K],T.format!==ii?_e!==null?ze?Ie&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ge.width,ge.height,oe.depth,_e,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Ee,ge.width,ge.height,oe.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?Ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ge.width,ge.height,oe.depth,_e,He,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Ee,ge.width,ge.height,oe.depth,0,_e,He,ge.data)}else{ze&&gt&&n.texStorage2D(t.TEXTURE_2D,N,Ee,De[0].width,De[0].height);for(let K=0,$=De.length;K<$;K++)ge=De[K],T.format!==ii?_e!==null?ze?Ie&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,ge.width,ge.height,_e,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Ee,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?Ie&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ge.width,ge.height,_e,He,ge.data):n.texImage2D(t.TEXTURE_2D,K,Ee,ge.width,ge.height,0,_e,He,ge.data)}else if(T.isDataArrayTexture)ze?(gt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,N,Ee,oe.width,oe.height,oe.depth),Ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,He,oe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,oe.width,oe.height,oe.depth,0,_e,He,oe.data);else if(T.isData3DTexture)ze?(gt&&n.texStorage3D(t.TEXTURE_3D,N,Ee,oe.width,oe.height,oe.depth),Ie&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,He,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,oe.width,oe.height,oe.depth,0,_e,He,oe.data);else if(T.isFramebufferTexture){if(gt)if(ze)n.texStorage2D(t.TEXTURE_2D,N,Ee,oe.width,oe.height);else{let K=oe.width,$=oe.height;for(let le=0;le<N;le++)n.texImage2D(t.TEXTURE_2D,le,Ee,K,$,0,_e,He,null),K>>=1,$>>=1}}else if(De.length>0){if(ze&&gt){const K=dt(De[0]);n.texStorage2D(t.TEXTURE_2D,N,Ee,K.width,K.height)}for(let K=0,$=De.length;K<$;K++)ge=De[K],ze?Ie&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e,He,ge):n.texImage2D(t.TEXTURE_2D,K,Ee,_e,He,ge);T.generateMipmaps=!1}else if(ze){if(gt){const K=dt(oe);n.texStorage2D(t.TEXTURE_2D,N,Ee,K.width,K.height)}Ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,He,oe)}else n.texImage2D(t.TEXTURE_2D,0,Ee,_e,He,oe);m(T)&&h(q),Se.__version=te.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function je(R,T,W){if(T.image.length!==6)return;const q=re(R,T),J=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+W);const te=i.get(J);if(J.version!==te.__version||q===!0){n.activeTexture(t.TEXTURE0+W);const Se=Ze.getPrimaries(Ze.workingColorSpace),fe=T.colorSpace===Yi?null:Ze.getPrimaries(T.colorSpace),ue=T.colorSpace===Yi||Se===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Le=T.isCompressedTexture||T.image[0].isCompressedTexture,oe=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let $=0;$<6;$++)!Le&&!oe?_e[$]=y(T.image[$],!0,r.maxCubemapSize):_e[$]=oe?T.image[$].image:T.image[$],_e[$]=Ve(T,_e[$]);const He=_e[0],Ee=s.convert(T.format,T.colorSpace),ge=s.convert(T.type),De=x(T.internalFormat,Ee,ge,T.colorSpace),ze=T.isVideoTexture!==!0,gt=te.__version===void 0||q===!0,Ie=J.dataReady;let N=g(T,He);G(t.TEXTURE_CUBE_MAP,T);let K;if(Le){ze&&gt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,N,De,He.width,He.height);for(let $=0;$<6;$++){K=_e[$].mipmaps;for(let le=0;le<K.length;le++){const he=K[le];T.format!==ii?Ee!==null?ze?Ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,he.width,he.height,Ee,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,De,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,0,0,he.width,he.height,Ee,ge,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le,De,he.width,he.height,0,Ee,ge,he.data)}}}else{if(K=T.mipmaps,ze&&gt){K.length>0&&N++;const $=dt(_e[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,N,De,$.width,$.height)}for(let $=0;$<6;$++)if(oe){ze?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,_e[$].width,_e[$].height,Ee,ge,_e[$].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,De,_e[$].width,_e[$].height,0,Ee,ge,_e[$].data);for(let le=0;le<K.length;le++){const We=K[le].image[$].image;ze?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,We.width,We.height,Ee,ge,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,De,We.width,We.height,0,Ee,ge,We.data)}}else{ze?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ee,ge,_e[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,De,Ee,ge,_e[$]);for(let le=0;le<K.length;le++){const he=K[le];ze?Ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,0,0,Ee,ge,he.image[$]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+$,le+1,De,Ee,ge,he.image[$])}}}m(T)&&h(t.TEXTURE_CUBE_MAP),te.__version=J.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function j(R,T,W,q,J,te){const Se=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),ue=x(W.internalFormat,Se,fe,W.colorSpace);if(!i.get(T).__hasExternalTextures){const oe=Math.max(1,T.width>>te),_e=Math.max(1,T.height>>te);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,te,ue,oe,_e,T.depth,0,Se,fe,null):n.texImage2D(J,te,ue,oe,_e,0,Se,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Be(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,J,i.get(W).__webglTexture,0,we(T)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,J,i.get(W).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(R,T,W){if(t.bindRenderbuffer(t.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let q=t.DEPTH_COMPONENT24;if(W||Be(T)){const J=T.depthTexture;J&&J.isDepthTexture&&(J.type===Zi?q=t.DEPTH_COMPONENT32F:J.type===ro&&(q=t.DEPTH_COMPONENT24));const te=we(T);Be(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,q,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,q,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,q,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const q=we(T);W&&Be(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,T.width,T.height):Be(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const q=T.textures;for(let J=0;J<q.length;J++){const te=q[J],Se=s.convert(te.format,te.colorSpace),fe=s.convert(te.type),ue=x(te.internalFormat,Se,fe,te.colorSpace),Le=we(T);W&&Be(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,ue,T.width,T.height):Be(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,ue,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ue,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),D(T.depthTexture,0);const q=i.get(T.depthTexture).__webglTexture,J=we(T);if(T.depthTexture.format===Xs)Be(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,q,0);else if(T.depthTexture.format===ya)Be(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function se(R){const T=i.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");de(T.__webglFramebuffer,R)}else if(W){T.__webglDepthbuffer=[];for(let q=0;q<6;q++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[q]),T.__webglDepthbuffer[q]=t.createRenderbuffer(),ie(T.__webglDepthbuffer[q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),ie(T.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(R,T,W){const q=i.get(R);T!==void 0&&j(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&se(R)}function ke(R){const T=R.texture,W=i.get(R),q=i.get(T);R.addEventListener("dispose",b);const J=R.textures,te=R.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=T.version,o.memory.textures++),te){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let ue=0;ue<T.mipmaps.length;ue++)W.__webglFramebuffer[fe][ue]=t.createFramebuffer()}else W.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)W.__webglFramebuffer[fe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Se)for(let fe=0,ue=J.length;fe<ue;fe++){const Le=i.get(J[fe]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Be(R)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let fe=0;fe<J.length;fe++){const ue=J[fe];W.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[fe]);const Le=s.convert(ue.format,ue.colorSpace),oe=s.convert(ue.type),_e=x(ue.internalFormat,Le,oe,ue.colorSpace,R.isXRRenderTarget===!0),He=we(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,_e,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,W.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(W.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),G(t.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)j(W.__webglFramebuffer[fe][ue],R,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ue);else j(W.__webglFramebuffer[fe],R,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(T)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let fe=0,ue=J.length;fe<ue;fe++){const Le=J[fe],oe=i.get(Le);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),G(t.TEXTURE_2D,Le),j(W.__webglFramebuffer,R,Le,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(Le)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,q.__webglTexture),G(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let ue=0;ue<T.mipmaps.length;ue++)j(W.__webglFramebuffer[ue],R,T,t.COLOR_ATTACHMENT0,fe,ue);else j(W.__webglFramebuffer,R,T,t.COLOR_ATTACHMENT0,fe,0);m(T)&&h(fe),n.unbindTexture()}R.depthBuffer&&se(R)}function F(R){const T=R.textures;for(let W=0,q=T.length;W<q;W++){const J=T[W];if(m(J)){const te=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Se=i.get(J).__webglTexture;n.bindTexture(te,Se),h(te),n.unbindTexture()}}}const tt=[],Me=[];function Je(R){if(R.samples>0){if(Be(R)===!1){const T=R.textures,W=R.width,q=R.height;let J=t.COLOR_BUFFER_BIT;const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(R),fe=T.length>1;if(fe)for(let ue=0;ue<T.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ue=0;ue<T.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const Le=i.get(T[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,W,q,0,0,W,q,J,t.NEAREST),l===!0&&(tt.length=0,Me.length=0,tt.push(t.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(tt.push(te),Me.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Me)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,tt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ue=0;ue<T.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,Se.__webglColorRenderbuffer[ue]);const Le=i.get(T[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function we(R){return Math.min(r.maxSamples,R.samples)}function Be(R){const T=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ne(R){const T=o.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function Ve(R,T){const W=R.colorSpace,q=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==vr&&W!==Yi&&(Ze.getTransfer(W)===rt?(q!==ii||J!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=_,this.setTexture2D=D,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=Q,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Be}function rI(t,e){function n(i,r=Yi){let s;const o=Ze.getTransfer(r);if(i===dr)return t.UNSIGNED_BYTE;if(i===$S)return t.UNSIGNED_SHORT_4_4_4_4;if(i===qS)return t.UNSIGNED_SHORT_5_5_5_1;if(i===kb)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Fb)return t.BYTE;if(i===Ob)return t.SHORT;if(i===XS)return t.UNSIGNED_SHORT;if(i===YS)return t.INT;if(i===ro)return t.UNSIGNED_INT;if(i===Zi)return t.FLOAT;if(i===lu)return t.HALF_FLOAT;if(i===zb)return t.ALPHA;if(i===Bb)return t.RGB;if(i===ii)return t.RGBA;if(i===Vb)return t.LUMINANCE;if(i===Hb)return t.LUMINANCE_ALPHA;if(i===Xs)return t.DEPTH_COMPONENT;if(i===ya)return t.DEPTH_STENCIL;if(i===Gb)return t.RED;if(i===KS)return t.RED_INTEGER;if(i===Wb)return t.RG;if(i===ZS)return t.RG_INTEGER;if(i===QS)return t.RGBA_INTEGER;if(i===of||i===af||i===lf||i===cf)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===of)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===af)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===of)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===af)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===E0||i===T0||i===w0||i===A0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===E0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===T0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===w0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===A0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===C0||i===b0||i===R0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===C0||i===b0)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===R0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===P0||i===L0||i===D0||i===I0||i===N0||i===U0||i===F0||i===O0||i===k0||i===z0||i===B0||i===V0||i===H0||i===G0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===P0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===L0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===D0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===I0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===N0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===U0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===F0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===O0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===k0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===z0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===B0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===V0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===H0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===G0)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uf||i===W0||i===j0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uf)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===W0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===j0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jb||i===X0||i===Y0||i===$0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===uf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===X0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Y0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===La?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class sI extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pl extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oI={type:"move"};class Of{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oI)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Pl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const aI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lI=`
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

}`;class cI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Li({vertexShader:aI,fragmentShader:lI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ri(new Fa(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class uI extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const y=new cI,m=n.getContextAttributes();let h=null,x=null;const g=[],M=[],b=new Ye;let A=null;const C=new wn;C.layers.enable(1),C.viewport=new Nt;const P=new wn;P.layers.enable(2),P.viewport=new Nt;const E=[C,P],_=new sI;_.layers.enable(1),_.layers.enable(2);let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=g[j];return ie===void 0&&(ie=new Of,g[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=g[j];return ie===void 0&&(ie=new Of,g[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=g[j];return ie===void 0&&(ie=new Of,g[j]=ie),ie.getHandSpace()};function D(j){const ie=M.indexOf(j.inputSource);if(ie===-1)return;const de=g[ie];de!==void 0&&(de.update(j.inputSource,j.frame,c||o),de.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",X);for(let j=0;j<g.length;j++){const ie=M[j];ie!==null&&(M[j]=null,g[j].disconnect(ie))}I=null,H=null,y.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,x=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Qr(p.framebufferWidth,p.framebufferHeight,{format:ii,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,de=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?ya:Xs,de=m.stencil?La:ro);const Oe={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Qr(d.textureWidth,d.textureHeight,{format:ii,type:dr,depthTexture:new hM(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(j){for(let ie=0;ie<j.removed.length;ie++){const de=j.removed[ie],se=M.indexOf(de);se>=0&&(M[se]=null,g[se].disconnect(de))}for(let ie=0;ie<j.added.length;ie++){const de=j.added[ie];let se=M.indexOf(de);if(se===-1){for(let ke=0;ke<g.length;ke++)if(ke>=M.length){M.push(de),se=ke;break}else if(M[ke]===null){M[ke]=de,se=ke;break}if(se===-1)break}const Oe=g[se];Oe&&Oe.connect(de)}}const Q=new z,ne=new z;function L(j,ie,de){Q.setFromMatrixPosition(ie.matrixWorld),ne.setFromMatrixPosition(de.matrixWorld);const se=Q.distanceTo(ne),Oe=ie.projectionMatrix.elements,ke=de.projectionMatrix.elements,F=Oe[14]/(Oe[10]-1),tt=Oe[14]/(Oe[10]+1),Me=(Oe[9]+1)/Oe[5],Je=(Oe[9]-1)/Oe[5],we=(Oe[8]-1)/Oe[0],Be=(ke[8]+1)/ke[0],Ne=F*we,Ve=F*Be,dt=se/(-we+Be),R=dt*-we;ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(R),j.translateZ(dt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const T=F+dt,W=tt+dt,q=Ne-R,J=Ve+(se-R),te=Me*tt/W*T,Se=Je*tt/W*T;j.projectionMatrix.makePerspective(q,J,te,Se,T,W),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function B(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;y.texture!==null&&(j.near=y.depthNear,j.far=y.depthFar),_.near=P.near=C.near=j.near,_.far=P.far=C.far=j.far,(I!==_.near||H!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,H=_.far,C.near=I,C.far=H,P.near=I,P.far=H,C.updateProjectionMatrix(),P.updateProjectionMatrix(),j.updateProjectionMatrix());const ie=j.parent,de=_.cameras;B(_,ie);for(let se=0;se<de.length;se++)B(de[se],ie);de.length===2?L(_,C,P):_.projectionMatrix.copy(C.projectionMatrix),G(j,_,ie)};function G(j,ie,de){de===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ch*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null};let re=null;function xe(j,ie){if(u=ie.getViewerPose(c||o),v=ie,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let se=!1;de.length!==_.cameras.length&&(_.cameras.length=0,se=!0);for(let ke=0;ke<de.length;ke++){const F=de[ke];let tt=null;if(p!==null)tt=p.getViewport(F);else{const Je=f.getViewSubImage(d,F);tt=Je.viewport,ke===0&&(e.setRenderTargetTextures(x,Je.colorTexture,d.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(x))}let Me=E[ke];Me===void 0&&(Me=new wn,Me.layers.enable(ke),Me.viewport=new Nt,E[ke]=Me),Me.matrix.fromArray(F.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(F.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(tt.x,tt.y,tt.width,tt.height),ke===0&&(_.matrix.copy(Me.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),se===!0&&_.cameras.push(Me)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const ke=f.getDepthInformation(de[0]);ke&&ke.isValid&&ke.texture&&y.init(e,ke,r.renderState)}}for(let de=0;de<g.length;de++){const se=M[de],Oe=g[de];se!==null&&Oe!==void 0&&Oe.update(se,ie,c||o)}y.render(e,_),re&&re(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const je=new dM;je.setAnimationLoop(xe),this.setAnimationLoop=function(j){re=j},this.dispose=function(){}}}const wr=new Pi,fI=new At;function dI(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,lM(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,g,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ln&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ln&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),g=x.envMap,M=x.envMapRotation;if(g&&(m.envMap.value=g,wr.copy(M),wr.x*=-1,wr.y*=-1,wr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),m.envMapRotation.value.setFromMatrix4(fI.makeRotationFromEuler(wr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const b=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*b,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hI(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,g){const M=g.program;i.uniformBlockBinding(x,M)}function c(x,g){let M=r[x.id];M===void 0&&(v(x),M=u(x),r[x.id]=M,x.addEventListener("dispose",m));const b=g.program;i.updateUBOMapping(x,b);const A=e.render.frame;s[x.id]!==A&&(d(x),s[x.id]=A)}function u(x){const g=f();x.__bindingPointIndex=g;const M=t.createBuffer(),b=x.__size,A=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const g=r[x.id],M=x.uniforms,b=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,C=M.length;A<C;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,_=P.length;E<_;E++){const I=P[E];if(p(I,A,E,b)===!0){const H=I.__offset,D=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let X=0;X<D.length;X++){const Q=D[X],ne=y(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,H+Y,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,g,M,b){const A=x.value,C=g+"_"+M;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const P=b[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return b[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(x){const g=x.uniforms;let M=0;const b=16;for(let C=0,P=g.length;C<P;C++){const E=Array.isArray(g[C])?g[C]:[g[C]];for(let _=0,I=E.length;_<I;_++){const H=E[_],D=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,X=D.length;Y<X;Y++){const Q=D[Y],ne=y(Q),L=M%b;L!==0&&b-L<ne.boundary&&(M+=b-L),H.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=ne.storage}}}const A=M%b;return A>0&&(M+=b-A),x.__size=M,x.__cache={},this}function y(x){const g={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(g.boundary=4,g.storage=4):x.isVector2?(g.boundary=8,g.storage=8):x.isVector3||x.isColor?(g.boundary=16,g.storage=12):x.isVector4?(g.boundary=16,g.storage=16):x.isMatrix3?(g.boundary=48,g.storage=48):x.isMatrix4?(g.boundary=64,g.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),g}function m(x){const g=x.target;g.removeEventListener("dispose",m);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class pI{constructor(e={}){const{canvas:n=rR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,m=null;const h=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this._useLegacyLights=!1,this.toneMapping=ar,this.toneMappingExposure=1;const g=this;let M=!1,b=0,A=0,C=null,P=-1,E=null;const _=new Nt,I=new Nt;let H=null;const D=new Qe(0);let Y=0,X=n.width,Q=n.height,ne=1,L=null,B=null;const G=new Nt(0,0,X,Q),re=new Nt(0,0,X,Q);let xe=!1;const je=new fM;let j=!1,ie=!1;const de=new At,se=new z,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return C===null?ne:1}let F=i;function tt(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ip}`),n.addEventListener("webglcontextlost",N,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",$,!1),F===null){const U="webgl2";if(F=tt(U,w),F===null)throw tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,Je,we,Be,Ne,Ve,dt,R,T,W,q,J,te,Se,fe,ue,Le,oe,_e,He,Ee,ge,De,ze;function gt(){Me=new MD(F),Me.init(),ge=new rI(F,Me),Je=new mD(F,Me,e,ge),we=new nI(F),Be=new wD(F),Ne=new H3,Ve=new iI(F,Me,we,Ne,Je,ge,Be),dt=new vD(g),R=new SD(g),T=new LR(F),De=new hD(F,T),W=new ED(F,T,Be,De),q=new CD(F,W,T,Be),_e=new AD(F,Je,Ve),ue=new gD(Ne),J=new V3(g,dt,R,Me,Je,De,ue),te=new dI(g,Ne),Se=new W3,fe=new K3(Me),oe=new dD(g,dt,R,we,q,d,l),Le=new tI(g,q,Je),ze=new hI(F,Be,Je,we),He=new pD(F,Me,Be),Ee=new TD(F,Me,Be),Be.programs=J.programs,g.capabilities=Je,g.extensions=Me,g.properties=Ne,g.renderLists=Se,g.shadowMap=Le,g.state=we,g.info=Be}gt();const Ie=new uI(g,F);this.xr=Ie,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(X,Q,!1))},this.getSize=function(w){return w.set(X,Q)},this.setSize=function(w,U,V=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,Q=U,n.width=Math.floor(w*ne),n.height=Math.floor(U*ne),V===!0&&(n.style.width=w+"px",n.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(X*ne,Q*ne).floor()},this.setDrawingBufferSize=function(w,U,V){X=w,Q=U,ne=V,n.width=Math.floor(w*V),n.height=Math.floor(U*V),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(_)},this.getViewport=function(w){return w.copy(G)},this.setViewport=function(w,U,V,O){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,U,V,O),we.viewport(_.copy(G).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(re)},this.setScissor=function(w,U,V,O){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,U,V,O),we.scissor(I.copy(re).multiplyScalar(ne).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(w){we.setScissorTest(xe=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(w=!0,U=!0,V=!0){let O=0;if(w){let k=!1;if(C!==null){const ce=C.texture.format;k=ce===QS||ce===ZS||ce===KS}if(k){const ce=C.texture.type,ve=ce===dr||ce===ro||ce===XS||ce===La||ce===$S||ce===qS,ye=oe.getClearColor(),Te=oe.getClearAlpha(),Ae=ye.r,be=ye.g,Ue=ye.b;ve?(p[0]=Ae,p[1]=be,p[2]=Ue,p[3]=Te,F.clearBufferuiv(F.COLOR,0,p)):(v[0]=Ae,v[1]=be,v[2]=Ue,v[3]=Te,F.clearBufferiv(F.COLOR,0,v))}else O|=F.COLOR_BUFFER_BIT}U&&(O|=F.DEPTH_BUFFER_BIT),V&&(O|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",N,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",$,!1),Se.dispose(),fe.dispose(),Ne.dispose(),dt.dispose(),R.dispose(),q.dispose(),De.dispose(),ze.dispose(),J.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",$e),Ie.removeEventListener("sessionend",$n),Xt.stop()};function N(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Be.autoReset,U=Le.enabled,V=Le.autoUpdate,O=Le.needsUpdate,k=Le.type;gt(),Be.autoReset=w,Le.enabled=U,Le.autoUpdate=V,Le.needsUpdate=O,Le.type=k}function $(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){const U=w.target;U.removeEventListener("dispose",le),he(U)}function he(w){We(w),Ne.remove(w)}function We(w){const U=Ne.get(w).programs;U!==void 0&&(U.forEach(function(V){J.releaseProgram(V)}),w.isShaderMaterial&&J.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,V,O,k,ce){U===null&&(U=Oe);const ve=k.isMesh&&k.matrixWorld.determinant()<0,ye=yM(w,U,V,O,k);we.setMaterial(O,ve);let Te=V.index,Ae=1;if(O.wireframe===!0){if(Te=W.getWireframeAttribute(V),Te===void 0)return;Ae=2}const be=V.drawRange,Ue=V.attributes.position;let xt=be.start*Ae,kt=(be.start+be.count)*Ae;ce!==null&&(xt=Math.max(xt,ce.start*Ae),kt=Math.min(kt,(ce.start+ce.count)*Ae)),Te!==null?(xt=Math.max(xt,0),kt=Math.min(kt,Te.count)):Ue!=null&&(xt=Math.max(xt,0),kt=Math.min(kt,Ue.count));const un=kt-xt;if(un<0||un===1/0)return;De.setup(k,O,ye,V,Te);let fi,Xe=He;if(Te!==null&&(fi=T.get(Te),Xe=Ee,Xe.setIndex(fi)),k.isMesh)O.wireframe===!0?(we.setLineWidth(O.wireframeLinewidth*ke()),Xe.setMode(F.LINES)):Xe.setMode(F.TRIANGLES);else if(k.isLine){let Ce=O.linewidth;Ce===void 0&&(Ce=1),we.setLineWidth(Ce*ke()),k.isLineSegments?Xe.setMode(F.LINES):k.isLineLoop?Xe.setMode(F.LINE_LOOP):Xe.setMode(F.LINE_STRIP)}else k.isPoints?Xe.setMode(F.POINTS):k.isSprite&&Xe.setMode(F.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?Xe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):Xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Xe.renderInstances(xt,un,k.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,mo=Math.min(V.instanceCount,Ce);Xe.renderInstances(xt,un,mo)}else Xe.render(xt,un)};function nt(w,U,V){w.transparent===!0&&w.side===_i&&w.forceSinglePass===!1?(w.side=ln,w.needsUpdate=!0,za(w,U,V),w.side=fr,w.needsUpdate=!0,za(w,U,V),w.side=_i):za(w,U,V)}this.compile=function(w,U,V=null){V===null&&(V=w),m=fe.get(V),m.init(U),x.push(m),V.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==V&&w.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(g._useLegacyLights);const O=new Set;return w.traverse(function(k){const ce=k.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const ye=ce[ve];nt(ye,V,k),O.add(ye)}else nt(ce,V,k),O.add(ce)}),x.pop(),m=null,O},this.compileAsync=function(w,U,V=null){const O=this.compile(w,U,V);return new Promise(k=>{function ce(){if(O.forEach(function(ve){Ne.get(ve).currentProgram.isReady()&&O.delete(ve)}),O.size===0){k(w);return}setTimeout(ce,10)}Me.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let ht=null;function Ot(w){ht&&ht(w)}function $e(){Xt.stop()}function $n(){Xt.start()}const Xt=new dM;Xt.setAnimationLoop(Ot),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(w){ht=w,Ie.setAnimationLoop(w),w===null?Xt.stop():Xt.start()},Ie.addEventListener("sessionstart",$e),Ie.addEventListener("sessionend",$n),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(U),U=Ie.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,U,C),m=fe.get(w,x.length),m.init(U),x.push(m),de.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),je.setFromProjectionMatrix(de),ie=this.localClippingEnabled,j=ue.init(this.clippingPlanes,ie),y=Se.get(w,h.length),y.init(),h.push(y),Op(w,U,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(L,B);const V=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1;V&&oe.addToRenderList(y,w),this.info.render.frame++,j===!0&&ue.beginShadows();const O=m.state.shadowsArray;Le.render(O,w,U),j===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=y.opaque,ce=y.transmissive;if(m.setupLights(g._useLegacyLights),U.isArrayCamera){const ve=U.cameras;if(ce.length>0)for(let ye=0,Te=ve.length;ye<Te;ye++){const Ae=ve[ye];zp(k,ce,w,Ae)}V&&oe.render(w);for(let ye=0,Te=ve.length;ye<Te;ye++){const Ae=ve[ye];kp(y,w,Ae,Ae.viewport)}}else ce.length>0&&zp(k,ce,w,U),V&&oe.render(w),kp(y,w,U);C!==null&&(Ve.updateMultisampleRenderTarget(C),Ve.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(g,w,U),De.resetDefaultState(),P=-1,E=null,x.pop(),x.length>0?(m=x[x.length-1],j===!0&&ue.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function Op(w,U,V,O){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||je.intersectsSprite(w)){O&&se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(de);const ve=q.update(w),ye=w.material;ye.visible&&y.push(w,ve,ye,V,se.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||je.intersectsObject(w))){const ve=q.update(w),ye=w.material;if(O&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),se.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),se.copy(ve.boundingSphere.center)),se.applyMatrix4(w.matrixWorld).applyMatrix4(de)),Array.isArray(ye)){const Te=ve.groups;for(let Ae=0,be=Te.length;Ae<be;Ae++){const Ue=Te[Ae],xt=ye[Ue.materialIndex];xt&&xt.visible&&y.push(w,ve,xt,V,se.z,Ue)}}else ye.visible&&y.push(w,ve,ye,V,se.z,null)}}const ce=w.children;for(let ve=0,ye=ce.length;ve<ye;ve++)Op(ce[ve],U,V,O)}function kp(w,U,V,O){const k=w.opaque,ce=w.transmissive,ve=w.transparent;m.setupLightsView(V),j===!0&&ue.setGlobalState(g.clippingPlanes,V),O&&we.viewport(_.copy(O)),k.length>0&&ka(k,U,V),ce.length>0&&ka(ce,U,V),ve.length>0&&ka(ve,U,V),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function zp(w,U,V,O){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[O.id]===void 0&&(m.state.transmissionRenderTarget[O.id]=new Qr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?lu:dr,minFilter:zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ce=m.state.transmissionRenderTarget[O.id],ve=O.viewport||_;ce.setSize(ve.z,ve.w);const ye=g.getRenderTarget();g.setRenderTarget(ce),g.getClearColor(D),Y=g.getClearAlpha(),Y<1&&g.setClearColor(16777215,.5),g.clear();const Te=g.toneMapping;g.toneMapping=ar;const Ae=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),m.setupLightsView(O),j===!0&&ue.setGlobalState(g.clippingPlanes,O),ka(w,V,O),Ve.updateMultisampleRenderTarget(ce),Ve.updateRenderTargetMipmap(ce),Me.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ue=0,xt=U.length;Ue<xt;Ue++){const kt=U[Ue],un=kt.object,fi=kt.geometry,Xe=kt.material,Ce=kt.group;if(Xe.side===_i&&un.layers.test(O.layers)){const mo=Xe.side;Xe.side=ln,Xe.needsUpdate=!0,Bp(un,V,O,fi,Xe,Ce),Xe.side=mo,Xe.needsUpdate=!0,be=!0}}be===!0&&(Ve.updateMultisampleRenderTarget(ce),Ve.updateRenderTargetMipmap(ce))}g.setRenderTarget(ye),g.setClearColor(D,Y),Ae!==void 0&&(O.viewport=Ae),g.toneMapping=Te}function ka(w,U,V){const O=U.isScene===!0?U.overrideMaterial:null;for(let k=0,ce=w.length;k<ce;k++){const ve=w[k],ye=ve.object,Te=ve.geometry,Ae=O===null?ve.material:O,be=ve.group;ye.layers.test(V.layers)&&Bp(ye,U,V,Te,Ae,be)}}function Bp(w,U,V,O,k,ce){w.onBeforeRender(g,U,V,O,k,ce),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(g,U,V,O,w,ce),k.transparent===!0&&k.side===_i&&k.forceSinglePass===!1?(k.side=ln,k.needsUpdate=!0,g.renderBufferDirect(V,U,O,k,w,ce),k.side=fr,k.needsUpdate=!0,g.renderBufferDirect(V,U,O,k,w,ce),k.side=_i):g.renderBufferDirect(V,U,O,k,w,ce),w.onAfterRender(g,U,V,O,k,ce)}function za(w,U,V){U.isScene!==!0&&(U=Oe);const O=Ne.get(w),k=m.state.lights,ce=m.state.shadowsArray,ve=k.state.version,ye=J.getParameters(w,k.state,ce,U,V),Te=J.getProgramCacheKey(ye);let Ae=O.programs;O.environment=w.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(w.isMeshStandardMaterial?R:dt).get(w.envMap||O.environment),O.envMapRotation=O.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",le),Ae=new Map,O.programs=Ae);let be=Ae.get(Te);if(be!==void 0){if(O.currentProgram===be&&O.lightsStateVersion===ve)return Hp(w,ye),be}else ye.uniforms=J.getUniforms(w),w.onBuild(V,ye,g),w.onBeforeCompile(ye,g),be=J.acquireProgram(ye,Te),Ae.set(Te,be),O.uniforms=ye.uniforms;const Ue=O.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=ue.uniform),Hp(w,ye),O.needsLights=SM(w),O.lightsStateVersion=ve,O.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMap.value=k.state.directionalShadowMap,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotShadowMap.value=k.state.spotShadowMap,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMap.value=k.state.pointShadowMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),O.currentProgram=be,O.uniformsList=null,be}function Vp(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Jl.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Hp(w,U){const V=Ne.get(w);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function yM(w,U,V,O,k){U.isScene!==!0&&(U=Oe),Ve.resetTextureUnits();const ce=U.fog,ve=O.isMeshStandardMaterial?U.environment:null,ye=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:vr,Te=(O.isMeshStandardMaterial?R:dt).get(O.envMap||ve),Ae=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,be=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ue=!!V.morphAttributes.position,xt=!!V.morphAttributes.normal,kt=!!V.morphAttributes.color;let un=ar;O.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(un=g.toneMapping);const fi=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Xe=fi!==void 0?fi.length:0,Ce=Ne.get(O),mo=m.state.lights;if(j===!0&&(ie===!0||w!==E)){const Sn=w===E&&O.id===P;ue.setState(O,w,Sn)}let at=!1;O.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==mo.state.version||Ce.outputColorSpace!==ye||k.isBatchedMesh&&Ce.batching===!1||!k.isBatchedMesh&&Ce.batching===!0||k.isInstancedMesh&&Ce.instancing===!1||!k.isInstancedMesh&&Ce.instancing===!0||k.isSkinnedMesh&&Ce.skinning===!1||!k.isSkinnedMesh&&Ce.skinning===!0||k.isInstancedMesh&&Ce.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ce.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ce.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ce.instancingMorph===!1&&k.morphTexture!==null||Ce.envMap!==Te||O.fog===!0&&Ce.fog!==ce||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ue.numPlanes||Ce.numIntersection!==ue.numIntersection)||Ce.vertexAlphas!==Ae||Ce.vertexTangents!==be||Ce.morphTargets!==Ue||Ce.morphNormals!==xt||Ce.morphColors!==kt||Ce.toneMapping!==un||Ce.morphTargetsCount!==Xe)&&(at=!0):(at=!0,Ce.__version=O.version);let xr=Ce.currentProgram;at===!0&&(xr=za(O,U,k));let Gp=!1,go=!1,du=!1;const zt=xr.getUniforms(),Ii=Ce.uniforms;if(we.useProgram(xr.program)&&(Gp=!0,go=!0,du=!0),O.id!==P&&(P=O.id,go=!0),Gp||E!==w){zt.setValue(F,"projectionMatrix",w.projectionMatrix),zt.setValue(F,"viewMatrix",w.matrixWorldInverse);const Sn=zt.map.cameraPosition;Sn!==void 0&&Sn.setValue(F,se.setFromMatrixPosition(w.matrixWorld)),Je.logarithmicDepthBuffer&&zt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&zt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,go=!0,du=!0)}if(k.isSkinnedMesh){zt.setOptional(F,k,"bindMatrix"),zt.setOptional(F,k,"bindMatrixInverse");const Sn=k.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),zt.setValue(F,"boneTexture",Sn.boneTexture,Ve))}k.isBatchedMesh&&(zt.setOptional(F,k,"batchingTexture"),zt.setValue(F,"batchingTexture",k._matricesTexture,Ve));const hu=V.morphAttributes;if((hu.position!==void 0||hu.normal!==void 0||hu.color!==void 0)&&_e.update(k,V,xr),(go||Ce.receiveShadow!==k.receiveShadow)&&(Ce.receiveShadow=k.receiveShadow,zt.setValue(F,"receiveShadow",k.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ii.envMap.value=Te,Ii.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(Ii.envMapIntensity.value=U.environmentIntensity),go&&(zt.setValue(F,"toneMappingExposure",g.toneMappingExposure),Ce.needsLights&&_M(Ii,du),ce&&O.fog===!0&&te.refreshFogUniforms(Ii,ce),te.refreshMaterialUniforms(Ii,O,ne,Q,m.state.transmissionRenderTarget[w.id]),Jl.upload(F,Vp(Ce),Ii,Ve)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Jl.upload(F,Vp(Ce),Ii,Ve),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&zt.setValue(F,"center",k.center),zt.setValue(F,"modelViewMatrix",k.modelViewMatrix),zt.setValue(F,"normalMatrix",k.normalMatrix),zt.setValue(F,"modelMatrix",k.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Sn=O.uniformsGroups;for(let pu=0,MM=Sn.length;pu<MM;pu++){const Wp=Sn[pu];ze.update(Wp,xr),ze.bind(Wp,xr)}}return xr}function _M(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function SM(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,U,V){Ne.get(w.texture).__webglTexture=U,Ne.get(w.depthTexture).__webglTexture=V;const O=Ne.get(w);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=V===void 0,O.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const V=Ne.get(w);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,V=0){C=w,b=U,A=V;let O=!0,k=null,ce=!1,ve=!1;if(w){const Te=Ne.get(w);Te.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(F.FRAMEBUFFER,null),O=!1):Te.__webglFramebuffer===void 0?Ve.setupRenderTarget(w):Te.__hasExternalTextures&&Ve.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);const Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ve=!0);const be=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(be[U])?k=be[U][V]:k=be[U],ce=!0):w.samples>0&&Ve.useMultisampledRTT(w)===!1?k=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[V]:k=be,_.copy(w.viewport),I.copy(w.scissor),H=w.scissorTest}else _.copy(G).multiplyScalar(ne).floor(),I.copy(re).multiplyScalar(ne).floor(),H=xe;if(we.bindFramebuffer(F.FRAMEBUFFER,k)&&O&&we.drawBuffers(w,k),we.viewport(_),we.scissor(I),we.setScissorTest(H),ce){const Te=Ne.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,V)}else if(ve){const Te=Ne.get(w.texture),Ae=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Te.__webglTexture,V||0,Ae)}P=-1},this.readRenderTargetPixels=function(w,U,V,O,k,ce,ve){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){we.bindFramebuffer(F.FRAMEBUFFER,ye);try{const Te=w.texture,Ae=Te.format,be=Te.type;if(!Je.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-O&&V>=0&&V<=w.height-k&&F.readPixels(U,V,O,k,ge.convert(Ae),ge.convert(be),ce)}finally{const Te=C!==null?Ne.get(C).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,Te)}}},this.copyFramebufferToTexture=function(w,U,V=0){const O=Math.pow(2,-V),k=Math.floor(U.image.width*O),ce=Math.floor(U.image.height*O);Ve.setTexture2D(U,0),F.copyTexSubImage2D(F.TEXTURE_2D,V,0,0,w.x,w.y,k,ce),we.unbindTexture()},this.copyTextureToTexture=function(w,U,V,O=0){const k=U.image.width,ce=U.image.height,ve=ge.convert(V.format),ye=ge.convert(V.type);Ve.setTexture2D(V,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,w.x,w.y,k,ce,ve,ye,U.image.data):U.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,w.x,w.y,U.mipmaps[0].width,U.mipmaps[0].height,ve,U.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,O,w.x,w.y,ve,ye,U.image),O===0&&V.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(w,U,V,O,k=0){const ce=w.max.x-w.min.x,ve=w.max.y-w.min.y,ye=w.max.z-w.min.z,Te=ge.convert(O.format),Ae=ge.convert(O.type);let be;if(O.isData3DTexture)Ve.setTexture3D(O,0),be=F.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Ve.setTexture2DArray(O,0),be=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const Ue=F.getParameter(F.UNPACK_ROW_LENGTH),xt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),kt=F.getParameter(F.UNPACK_SKIP_PIXELS),un=F.getParameter(F.UNPACK_SKIP_ROWS),fi=F.getParameter(F.UNPACK_SKIP_IMAGES),Xe=V.isCompressedTexture?V.mipmaps[k]:V.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Xe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Xe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,w.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,w.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?F.texSubImage3D(be,k,U.x,U.y,U.z,ce,ve,ye,Te,Ae,Xe.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(be,k,U.x,U.y,U.z,ce,ve,ye,Te,Xe.data):F.texSubImage3D(be,k,U.x,U.y,U.z,ce,ve,ye,Te,Ae,Xe),F.pixelStorei(F.UNPACK_ROW_LENGTH,Ue),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,kt),F.pixelStorei(F.UNPACK_SKIP_ROWS,un),F.pixelStorei(F.UNPACK_SKIP_IMAGES,fi),k===0&&O.generateMipmaps&&F.generateMipmap(be),we.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ve.setTextureCube(w,0):w.isData3DTexture?Ve.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ve.setTexture2DArray(w,0):Ve.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){b=0,A=0,C=null,we.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Np?"display-p3":"srgb",n.unpackColorSpace=Ze.workingColorSpace===cu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mI extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class gI extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vI{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=zv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function zv(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);const xI=({width:t="100vw",height:e="100vh",cameraZ:n=125,planeSize:i=256,speed:r=.5})=>{const s=Z.useRef(null),o=Z.useRef(null),a=Yn();return Z.useEffect(()=>{class l{constructor(){this.uniforms={time:{type:"f",value:0}},this.mesh=this.createMesh(),this.time=r}createMesh(){return new ri(new Fa(i,i,i,i),new gI({uniforms:this.uniforms,vertexShader:`
              #define GLSLIFY 1
              attribute vec3 position;
              uniform mat4 projectionMatrix;
              uniform mat4 modelViewMatrix;
              uniform float time;
              varying vec3 vPosition;

              mat4 rotateMatrixX(float radian) {
                return mat4(
                  1.0, 0.0, 0.0, 0.0,
                  0.0, cos(radian), -sin(radian), 0.0,
                  0.0, sin(radian), cos(radian), 0.0,
                  0.0, 0.0, 0.0, 1.0
                );
              }

              vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
              vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
              vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
              vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

              float cnoise(vec3 P) {
                vec3 Pi0 = floor(P);
                vec3 Pi1 = Pi0 + vec3(1.0);
                Pi0 = mod289(Pi0);
                Pi1 = mod289(Pi1);
                vec3 Pf0 = fract(P);
                vec3 Pf1 = Pf0 - vec3(1.0);
                vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
                vec4 iy = vec4(Pi0.yy, Pi1.yy);
                vec4 iz0 = Pi0.zzzz;
                vec4 iz1 = Pi1.zzzz;

                vec4 ixy = permute(permute(ix) + iy);
                vec4 ixy0 = permute(ixy + iz0);
                vec4 ixy1 = permute(ixy + iz1);

                vec4 gx0 = ixy0 * (1.0 / 7.0);
                vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
                gx0 = fract(gx0);
                vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
                vec4 sz0 = step(gz0, vec4(0.0));
                gx0 -= sz0 * (step(0.0, gx0) - 0.5);
                gy0 -= sz0 * (step(0.0, gy0) - 0.5);

                vec4 gx1 = ixy1 * (1.0 / 7.0);
                vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
                gx1 = fract(gx1);
                vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
                vec4 sz1 = step(gz1, vec4(0.0));
                gx1 -= sz1 * (step(0.0, gx1) - 0.5);
                gy1 -= sz1 * (step(0.0, gy1) - 0.5);

                vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
                vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
                vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
                vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
                vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
                vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
                vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
                vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

                vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));
                g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
                vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));
                g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;

                float n000 = dot(g000, Pf0);
                float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
                float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
                float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
                float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
                float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
                float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
                float n111 = dot(g111, Pf1);

                vec3 fade_xyz = fade(Pf0);
                vec4 n_z = mix(vec4(n000,n100,n010,n110), vec4(n001,n101,n011,n111), fade_xyz.z);
                vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
                float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
                return 2.2 * n_xyz;
              }

              void main(void) {
                vec3 updatePosition = (rotateMatrixX(radians(90.0)) * vec4(position, 1.0)).xyz;
                float sin1 = sin(radians(updatePosition.x / 128.0 * 90.0));
                vec3 noisePosition = updatePosition + vec3(0.0, 0.0, time * -30.0);
                float noise1 = cnoise(noisePosition * 0.08);
                float noise2 = cnoise(noisePosition * 0.06);
                float noise3 = cnoise(noisePosition * 0.4);
                vec3 lastPosition = updatePosition + vec3(0.0,
                  noise1 * sin1 * 8.0
                  + noise2 * sin1 * 8.0
                  + noise3 * (abs(sin1) * 2.0 + 0.5)
                  + pow(sin1, 2.0) * 40.0, 0.0);

                vPosition = lastPosition;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(lastPosition, 1.0);
              }
            `,fragmentShader:`
              precision highp float;
              #define GLSLIFY 1
              varying vec3 vPosition;

              void main(void) {
                float opacity = (96.0 - length(vPosition)) / 256.0 * 0.6;
                vec3 color = vec3(1.0);
                gl_FragColor = vec4(color, opacity);
              }
            `,transparent:!0}))}render(A){this.uniforms.time.value+=A*this.time}}const c=new pI({canvas:s.current,antialias:!1}),u=new mI,f=new wn(45,window.innerWidth/window.innerHeight,1,1e4),d=new vI,p=new l;let v;const y=()=>{const b=s.current;b.width=window.innerWidth,b.height=window.innerHeight,f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)};let m=!1;const h=()=>{p.render(d.getDelta()),c.render(u,f),v=requestAnimationFrame(h)},x=()=>{m||(m=!0,d.getDelta(),h())},g=()=>{m&&(m=!1,cancelAnimationFrame(v))};c.setSize(window.innerWidth,window.innerHeight),c.setClearColor(0,0),f.position.set(0,16,n),f.lookAt(new z(0,28,0)),u.add(p.mesh),window.addEventListener("resize",y),y();const M=new IntersectionObserver(([b])=>{b.isIntersecting?x():g()},{threshold:0});return o.current&&M.observe(o.current),x(),()=>{g(),M.disconnect(),window.removeEventListener("resize",y),c.dispose()}},[n,i,r]),S.jsxs("div",{ref:o,style:{position:"relative",width:t,height:a?"auto":e,minHeight:a?"100vh":void 0,background:"#F9A800"},children:[S.jsx("canvas",{ref:s,style:{position:"absolute",top:0,right:0,bottom:0,left:0,zIndex:1}}),S.jsx("div",{style:{position:"absolute",inset:0,zIndex:2,pointerEvents:"none"},children:S.jsx(ui,{background:"transparent",particleColor:"#ffffff",particleDensity:60,minSize:.5,maxSize:1.8,speed:.7})}),S.jsx("div",{style:{position:"absolute",inset:0,zIndex:3,background:"linear-gradient(160deg, rgba(0,0,0,0.18) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",pointerEvents:"none"}}),S.jsxs("nav",{style:{position:"absolute",top:0,left:0,right:0,zIndex:11,display:"flex",alignItems:"center",justifyContent:"space-between",padding:a?"14px 18px":"22px 48px",background:"rgba(0,0,0,0.08)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(255,255,255,0.12)"},children:[S.jsxs("div",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:a?"1.05rem":"1.4rem",letterSpacing:"0.12em",color:"#fff",textTransform:"uppercase"},children:["Momo ",S.jsx("span",{style:{color:"#FFE566"},children:"Air Care"})]}),!a&&S.jsx("div",{style:{display:"flex",gap:"36px",fontFamily:"'Inter', sans-serif",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase"},children:[{label:"Services",href:"#services"},{label:"About",href:"#about"},{label:"FAQ",href:"#faq"},{label:"Contact",href:"#contact"}].map(l=>S.jsx("a",{href:l.href,style:{color:"rgba(255,255,255,0.75)",textDecoration:"none",transition:"color 0.2s"},onMouseEnter:c=>c.target.style.color="#fff",onMouseLeave:c=>c.target.style.color="rgba(255,255,255,0.75)",children:l.label},l.label))}),S.jsx("a",{href:"tel:+14252005790",style:{fontFamily:"'Oswald', sans-serif",fontWeight:600,fontSize:a?"0.82rem":"0.95rem",letterSpacing:"0.06em",color:"#F9A800",textDecoration:"none",background:"#1a1a1a",padding:a?"9px 14px":"11px 22px",borderRadius:"8px",boxShadow:"0 2px 12px rgba(0,0,0,0.25)",transition:"background 0.2s, transform 0.15s",whiteSpace:"nowrap"},onMouseEnter:l=>{l.currentTarget.style.background="#333",l.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:l=>{l.currentTarget.style.background="#1a1a1a",l.currentTarget.style.transform="translateY(0)"},children:"(425) 200-5790"})]}),S.jsxs("div",{style:{position:a?"relative":"absolute",top:0,left:0,right:0,bottom:0,zIndex:4,minHeight:a?"100vh":void 0,display:"flex",flexDirection:"column",justifyContent:a?"center":"flex-end",padding:a?"96px 20px 56px":"0 72px 48px"},children:[!a&&S.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"120px",pointerEvents:"none"},children:S.jsx("h2",{style:{fontFamily:"'Bebas Neue', sans-serif",fontSize:"clamp(2rem, 9vw, 7rem)",fontWeight:400,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.1)",margin:0,lineHeight:1,userSelect:"none",whiteSpace:"nowrap",textShadow:"0 0 60px rgba(249,168,0,0.12)"},children:"MOMO Air Care"})}),S.jsxs("div",{style:{display:"flex",flexDirection:a?"column":"row",alignItems:a?"flex-start":"flex-end",gap:"0",width:"100%"},children:[S.jsxs("div",{style:{flex:a?"none":1,width:a?"100%":"auto",minWidth:0,display:"flex",flexDirection:"column",alignItems:"flex-start",paddingBottom:"8px"},children:[S.jsxs("h1",{style:{margin:"0 0 16px",fontFamily:"'Inter', sans-serif",fontSize:a?"clamp(2rem, 9vw, 2.6rem)":"clamp(2.6rem, 5vw, 4.2rem)",fontWeight:900,color:"#ffffff",lineHeight:1.05,textShadow:"0 2px 24px rgba(0,0,0,0.2)"},children:["There's Clean.",S.jsx("br",{}),"Then There's MOMO."]}),S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px",flexWrap:"wrap"},children:[S.jsx(ZC,{children:S.jsx("span",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"0.85rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(255,255,255,0.6)"},children:"Momo Air Care"})}),S.jsx("span",{style:{width:"1px",height:"14px",background:"rgba(255,255,255,0.2)"}}),S.jsx("span",{style:{color:"#FFE566",fontSize:"0.8rem"},children:"★★★★★"}),S.jsx("span",{style:{fontSize:"0.68rem",fontWeight:600,color:"rgba(255,255,255,0.55)"},children:"5.0 · 200+ Reviews"}),S.jsx("span",{style:{width:"1px",height:"14px",background:"rgba(255,255,255,0.2)"}}),S.jsx("span",{style:{fontSize:"0.68rem",fontWeight:600,color:"rgba(255,255,255,0.55)"},children:"📍 Greater Seattle"})]}),S.jsx("p",{style:{margin:"0 0 28px",fontSize:"0.92rem",fontWeight:400,color:"rgba(255,255,255,0.7)",maxWidth:"400px",lineHeight:1.7,fontFamily:"'Inter', sans-serif"},children:"Professional duct & dryer vent cleaning for healthier air, lower energy bills, and total peace of mind."}),S.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:a?"10px":"16px",marginBottom:"24px",flexWrap:"wrap"},children:[S.jsx("a",{href:"tel:+14252005790",style:{display:"inline-flex",alignItems:"center",gap:"8px",textDecoration:"none",fontFamily:"'Oswald', sans-serif",fontWeight:600,fontSize:"1rem",letterSpacing:"0.1em",textTransform:"uppercase",background:"#1a1a1a",color:"#F9A800",padding:"15px 28px",borderRadius:"10px",boxShadow:"0 6px 24px rgba(0,0,0,0.35)",transition:"transform 0.15s, box-shadow 0.15s",whiteSpace:"nowrap"},onMouseEnter:l=>{l.currentTarget.style.transform="translateY(-3px)",l.currentTarget.style.boxShadow="0 12px 32px rgba(0,0,0,0.45)"},onMouseLeave:l=>{l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="0 6px 24px rgba(0,0,0,0.35)"},children:"📞 Call Now — Free Quote"}),S.jsx("a",{href:"#services",style:{display:"inline-flex",alignItems:"center",textDecoration:"none",fontFamily:"'Oswald', sans-serif",fontWeight:600,fontSize:"1rem",letterSpacing:"0.1em",textTransform:"uppercase",background:"rgba(255,255,255,0.15)",color:"#fff",border:"1.5px solid rgba(255,255,255,0.4)",backdropFilter:"blur(8px)",padding:"15px 28px",borderRadius:"10px",transition:"background 0.15s, transform 0.15s",whiteSpace:"nowrap"},onMouseEnter:a?void 0:l=>{l.currentTarget.style.background="rgba(255,255,255,0.25)",l.currentTarget.style.transform="translateY(-3px)"},onMouseLeave:a?void 0:l=>{l.currentTarget.style.background="rgba(255,255,255,0.15)",l.currentTarget.style.transform="translateY(0)"},children:"Our Services →"})]}),S.jsx("div",{style:{display:"flex",gap:"6px",flexWrap:"wrap"},children:["✓ Same-Day Service","✓ 100% Satisfaction","✓ No Hidden Fees"].map(l=>S.jsx("div",{style:{padding:"6px 12px",background:"rgba(0,0,0,0.18)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"999px",fontFamily:"'Inter', sans-serif",fontSize:"0.63rem",fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:"rgba(255,255,255,0.75)",whiteSpace:"nowrap"},children:l},l))})]}),!a&&S.jsx("div",{style:{flexShrink:0,width:"460px",display:"flex",alignItems:"flex-end",justifyContent:"center"},children:S.jsx("img",{src:"/momo-giraffe.png",alt:"Momo mascot",style:{width:"100%",objectFit:"contain",filter:"drop-shadow(0 24px 48px rgba(0,0,0,0.3))"}})})]})]}),!a&&S.jsxs("div",{style:{position:"absolute",bottom:"24px",left:"50%",transform:"translateX(-50%)",zIndex:11,display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",fontFamily:"'Inter', sans-serif",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)"},children:[S.jsx("span",{children:"Scroll"}),S.jsx("div",{style:{width:"1px",height:"28px",background:"linear-gradient(180deg, rgba(255,255,255,0.5), transparent)"}})]})]})},yI={blue:{base:220,spread:200},purple:{base:280,spread:300},green:{base:120,spread:200},red:{base:0,spread:200},orange:{base:30,spread:200}},_I=`
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-repeat: no-repeat;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }

  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 0% 100% / 0.9),
      transparent 100%
    );
    filter: brightness(1.5);
  }

  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 1)),
      transparent 100%
    );
  }

  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: calc(var(--radius) * 1px);
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }

  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`;function Oa({children:t,className:e="",glowColor:n="blue",width:i,height:r}){const s=Z.useRef(null),o=Yn();Z.useEffect(()=>{if(o)return;const u=s.current;if(!u)return;const f=d=>{const p=u.getBoundingClientRect();u.style.setProperty("--x",(d.clientX-p.left).toFixed(1)),u.style.setProperty("--xp",((d.clientX-p.left)/p.width).toFixed(3)),u.style.setProperty("--y",(d.clientY-p.top).toFixed(1)),u.style.setProperty("--yp",((d.clientY-p.top)/p.height).toFixed(3))};return u.addEventListener("pointermove",f,{passive:!0}),()=>u.removeEventListener("pointermove",f)},[o]);const{base:a,spread:l}=yI[n],c={"--base":a,"--spread":l,"--radius":"16","--border":"2","--backdrop":"hsl(0 0% 100% / 0.12)","--backup-border":"hsl(0 0% 100% / 0.25)","--size":"260","--outer":"1","--saturation":"0","--lightness":"100","--border-size":"calc(var(--border, 2) * 1px)","--spotlight-size":"calc(var(--size, 150) * 1px)","--hue":"0",backgroundImage:`radial-gradient(
      var(--spotlight-size) var(--spotlight-size) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 0% 100% / 0.15),
      transparent
    )`,backgroundColor:"var(--backdrop, transparent)",border:"var(--border-size) solid var(--backup-border)",position:"relative",touchAction:o?"pan-y":"none",willChange:"background-image",...i!==void 0?{width:typeof i=="number"?`${i}px`:i}:{},...r!==void 0?{height:typeof r=="number"?`${r}px`:r}:{}};return S.jsxs(S.Fragment,{children:[S.jsx("style",{dangerouslySetInnerHTML:{__html:_I}}),S.jsxs("div",{ref:s,"data-glow":!0,style:c,className:`rounded-2xl relative shadow-[0_8px_32px_rgba(0,0,0,0.15)] p-6 backdrop-blur-[12px] transition-transform duration-150 ${o?"":"hover:-translate-y-2"} ${e}`,children:[S.jsx("div",{"data-glow":!0}),t]})]})}const _s=[{type:"before",image:"/gallery-before-1.jpg",label:"Heavy dust & debris clogging the air duct",tag:"Before"},{type:"after",image:"/gallery-after-1.jpg",label:"Spotless, fully cleared air duct after service",tag:"After"},{type:"before",image:"/gallery-before-2.jpg",label:"Clogged dryer vent — serious fire hazard",tag:"Before"},{type:"after",image:"/gallery-after-2.jpg",label:"Fully cleared dryer vent — safe & flowing",tag:"After"},{type:"before",image:"/gallery-before-3.jpg",label:"Mold & buildup inside return duct",tag:"Before"},{type:"after",image:"/gallery-after-3.jpg",label:"Sanitized, fresh return duct — like new",tag:"After"}];function Ss({type:t,image:e,label:n,tag:i,gradient:r,emoji:s}){const o=t==="before",a=Yn();return S.jsxs("div",{style:{borderRadius:"16px",overflow:"hidden",position:"relative",aspectRatio:"4/3",transition:"transform 0.2s, box-shadow 0.2s",boxShadow:"0 4px 20px rgba(0,0,0,0.18)",background:r||"#111"},onMouseEnter:a?void 0:l=>{l.currentTarget.style.transform="translateY(-4px)",l.currentTarget.style.boxShadow="0 14px 36px rgba(0,0,0,0.28)"},onMouseLeave:a?void 0:l=>{l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.18)"},children:[e?S.jsx("img",{src:e,alt:n,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}):S.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px"},children:[S.jsx("span",{style:{fontSize:"2.8rem"},children:s}),S.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.08em",textAlign:"center",maxWidth:"78%",color:o?"rgba(255,200,100,0.9)":"rgba(30,90,30,0.9)",lineHeight:1.4,textTransform:"uppercase"},children:n})]}),S.jsx("div",{style:{position:"absolute",top:"12px",left:"12px",padding:"4px 10px",borderRadius:"999px",fontFamily:"'Oswald', sans-serif",fontWeight:600,fontSize:"0.6rem",letterSpacing:"0.15em",textTransform:"uppercase",background:o?"rgba(0,0,0,0.65)":"rgba(20,120,20,0.85)",color:o?"#F9A800":"#fff",backdropFilter:"blur(4px)"},children:i})]})}function Bv({icon:t,title:e,subtitle:n,bullets:i}){return S.jsxs("div",{style:{background:"rgba(0,0,0,0.18)",borderRadius:"20px",padding:"32px 28px",backdropFilter:"blur(4px)",border:"1px solid rgba(255,255,255,0.15)",flex:1},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"16px"},children:[S.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"12px",background:"#F9A800",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:t}),S.jsxs("div",{children:[S.jsx("div",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"1.1rem",color:"#fff",letterSpacing:"0.04em",textTransform:"uppercase"},children:e}),S.jsx("div",{style:{fontSize:"0.72rem",color:"rgba(255,255,255,0.5)",fontWeight:500,marginTop:"2px"},children:n})]})]}),S.jsx("div",{style:{height:"1px",background:"rgba(255,255,255,0.12)",marginBottom:"16px"}}),S.jsx("ul",{style:{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:"10px"},children:i.map((r,s)=>S.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[S.jsx("span",{style:{color:"#F9A800",fontWeight:700,fontSize:"1rem",lineHeight:1.4,flexShrink:0},children:"→"}),S.jsx("span",{style:{fontSize:"0.82rem",color:"rgba(255,255,255,0.78)",lineHeight:1.6},children:r})]},s))})]})}function SI(){return S.jsxs("section",{style:{background:"#F9A800",fontFamily:"'Inter', sans-serif",position:"relative"},className:"px-6 pb-24 pt-4",children:[S.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden"},children:S.jsx(ui,{background:"transparent",particleColor:"#ffffff",particleDensity:60,minSize:.5,maxSize:1.8,speed:.7})}),S.jsxs("div",{style:{position:"relative",zIndex:1},className:"max-w-5xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-12",children:[S.jsx("p",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-white/60 mb-3",children:"Real Results"}),S.jsx("h2",{className:"text-3xl md:text-4xl font-black text-white leading-tight",children:"See the Difference"})]}),S.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",marginBottom:"40px"},children:[S.jsxs("div",{children:[S.jsx("p",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"2rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(255,255,255,0.6)",textAlign:"center",marginBottom:"12px"},children:"Duct Cleaning"}),S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[S.jsx(Ss,{..._s[0]}),S.jsx(Ss,{..._s[1]})]})]}),S.jsxs("div",{children:[S.jsx("p",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"2rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(255,255,255,0.6)",textAlign:"center",marginBottom:"12px"},children:"Return Duct Cleaning"}),S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[S.jsx(Ss,{..._s[2]}),S.jsx(Ss,{..._s[3]})]})]}),S.jsxs("div",{children:[S.jsx("p",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"2rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(255,255,255,0.6)",textAlign:"center",marginBottom:"12px"},children:"Blower Cleaning"}),S.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[S.jsx(Ss,{..._s[4]}),S.jsx(Ss,{..._s[5]})]})]})]}),S.jsxs("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"},children:[S.jsx(Bv,{icon:S.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#111",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[S.jsx("path",{d:"M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"}),S.jsx("polyline",{points:"9 22 9 12 15 12 15 22"})]}),title:"Return Duct Cleaning",subtitle:"Deep cleaning where dirty air re-enters your system",bullets:["We use a high-powered rotary brush system to scrub the full length of your return ducts.","Removes built-up mold, dust, allergens, and debris that recirculate through your home.","Every vent cover is removed, cleaned, and reinstalled — leaving no detail untouched."]}),S.jsx(Bv,{icon:S.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#111",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[S.jsx("circle",{cx:"12",cy:"12",r:"3"}),S.jsx("path",{d:"M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"}),S.jsx("path",{d:"M15.54 8.46a5 5 0 010 7.07M8.46 8.46a5 5 0 000 7.07"})]}),title:"Furnace Blower Cleaning",subtitle:"The heart of your HVAC — fully removed & deep cleaned",bullets:["We physically remove the furnace blower to access every blade and housing compartment.","A rotary brush system is used to break loose years of compacted dust and grime.","Deep cleaned and reinstalled — restoring full airflow and extending the life of your system."]})]}),S.jsx("p",{style:{textAlign:"center",marginTop:"28px",fontFamily:"'Inter', sans-serif",fontSize:"0.75rem",fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(255,255,255,0.5)"},children:"Real results from real homes in the area"})]})]})}const Vv={background:"linear-gradient(105deg, #bbb 0%, #888 20%, #ffffff 45%, #f0f0f0 50%, #ffffff 55%, #999 80%, #aaa 100%)",backgroundSize:"250% 100%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"shine-sweep 9s linear infinite",fontFamily:"'Oswald', sans-serif",fontWeight:600,letterSpacing:"0.08em",display:"block"},MI=[{title:"Air Duct Cleaning",description:"Deep cleaning of your entire duct system — removing dust, allergens, and buildup for fresher, healthier air.",glowColor:"blue"},{title:"Dryer Vent Cleaning",description:"Prevent fire hazards and boost dryer efficiency. We clear lint and blockages so your machine runs safely.",glowColor:"red"},{title:"Duct Insulation",description:"Properly insulated ducts keep conditioned air where it belongs — cutting energy waste and utility bills.",glowColor:"green"},{title:"HVAC Services",description:"Full-service HVAC inspections, maintenance, and repairs. We keep your system running clean year-round.",glowColor:"purple"}];function EI(){const t=Yn();return S.jsxs(S.Fragment,{children:[S.jsx("section",{style:{fontFamily:"'Inter', sans-serif",position:"relative"},children:S.jsx("div",{style:{position:"relative",zIndex:1},children:S.jsxs("div",{style:{background:"linear-gradient(180deg, #D08E00 0%, #F9A800 60px)",paddingTop:"60px",paddingBottom:"80px",paddingLeft:"24px",paddingRight:"24px",position:"relative"},children:[S.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden"},children:S.jsx(ui,{background:"transparent",particleColor:"#ffffff",particleDensity:60,minSize:.5,maxSize:1.8,speed:.7})}),S.jsxs("div",{className:"max-w-6xl mx-auto",style:{position:"relative",zIndex:1},children:[S.jsxs("div",{className:"text-center mb-12",children:[S.jsx("div",{style:{display:"inline-flex",alignItems:"center",background:"rgba(0,0,0,0.12)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.25)",borderRadius:"999px",padding:"5px 16px",marginBottom:"14px",fontFamily:"'Inter', sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.85)"},children:"What We Do"}),S.jsx("h2",{className:"text-3xl md:text-4xl font-black text-white leading-tight",children:"Our Services"})]}),S.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6",children:MI.map(e=>S.jsxs(Oa,{glowColor:e.glowColor,className:"flex flex-col gap-4",children:[S.jsxs("div",{className:"flex flex-col leading-none",children:[S.jsx("span",{style:{...Vv,fontSize:"1.5rem"},children:"MOMO"}),S.jsx("span",{style:{...Vv,fontSize:"0.75rem",letterSpacing:"0.2em",marginTop:"2px"},children:"AIR CARE"})]}),S.jsx("h3",{className:"text-base font-black text-gray-900 leading-snug",children:e.title}),S.jsx("p",{className:"text-sm text-gray-500 leading-relaxed font-light",children:e.description})]},e.title))})]})]})})}),S.jsx(SI,{}),S.jsx("section",{style:{fontFamily:"'Inter', sans-serif",position:"relative"},children:S.jsx("div",{style:{position:"relative",zIndex:1},children:S.jsxs("div",{style:{background:"#F9A800",paddingBottom:"80px",paddingLeft:"24px",paddingRight:"24px",position:"relative"},children:[S.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden"},children:S.jsx(ui,{background:"transparent",particleColor:"#ffffff",particleDensity:60,minSize:.5,maxSize:1.8,speed:.7})}),S.jsxs("div",{className:"max-w-6xl mx-auto",style:{position:"relative",zIndex:1},children:[S.jsxs("div",{style:{marginTop:"0px"},children:[S.jsxs("div",{className:"text-center mb-10",children:[S.jsx("div",{style:{display:"inline-flex",alignItems:"center",background:"rgba(0,0,0,0.12)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.25)",borderRadius:"999px",padding:"5px 16px",marginBottom:"14px",fontFamily:"'Inter', sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.85)"},children:"How It Works"}),S.jsx("h3",{style:{fontFamily:"'Inter', sans-serif",fontSize:"1.8rem",fontWeight:900,color:"#fff",margin:0},children:"Simple. Fast. Guaranteed."})]}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:t?"1fr":"repeat(3, 1fr)",gap:t?"12px":"24px"},children:[{step:"01",title:"Book a Free Quote",desc:"Call or fill out our form. We assess your home and give you a clear, upfront price — no surprises."},{step:"02",title:"We Come to You",desc:"Our certified technicians arrive on time with professional equipment and handle everything from start to finish."},{step:"03",title:"Breathe Cleaner Air",desc:"Within hours your ducts are spotless. Notice fresher air, quieter airflow, and lower energy costs immediately."}].map((e,n)=>S.jsxs("div",{style:{background:"rgba(0,0,0,0.12)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"16px",padding:t?"18px 18px":"28px 24px",position:"relative",display:t?"flex":"block",alignItems:t?"center":void 0,gap:t?"16px":void 0},children:[!t&&S.jsx("div",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"3rem",color:"rgba(255,255,255,0.1)",lineHeight:1,marginBottom:"12px",position:"absolute",top:"16px",right:"20px"},children:e.step}),S.jsx("div",{style:{width:t?"44px":"36px",height:t?"44px":"36px",borderRadius:"50%",background:"#1a1a1a",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:t?0:"16px",flexShrink:0,fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:t?"1.05rem":"0.85rem",color:"#F9A800"},children:n+1}),S.jsxs("div",{style:{minWidth:0},children:[S.jsx("h4",{style:{fontFamily:"'Inter', sans-serif",fontWeight:800,fontSize:"1rem",color:"#fff",margin:t?"0 0 4px":"0 0 10px"},children:e.title}),S.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.85rem",fontWeight:300,color:"rgba(255,255,255,0.75)",lineHeight:1.6,margin:0},children:e.desc})]})]},e.step))})]}),S.jsxs("div",{style:{marginTop:"48px",background:"rgba(0,0,0,0.15)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"16px",overflow:"hidden",display:"flex",flexDirection:t?"column":"row",alignItems:t?"center":"stretch"},children:[S.jsxs("div",{style:{flex:1,width:t?"100%":"auto",padding:t?"24px 22px 8px":"28px 32px",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:t?"20px":"24px"},children:[S.jsx("div",{style:{display:"flex",gap:t?"20px 28px":"40px",flexWrap:"wrap"},children:[{num:"2,500+",label:"Homes Served"},{num:"10+",label:"Years Experience"},{num:"100%",label:"Satisfaction Rate"},{num:"5★",label:"Average Rating"}].map(e=>S.jsxs("div",{children:[S.jsx("div",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"1.6rem",color:"#fff",lineHeight:1},children:e.num}),S.jsx("div",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.7rem",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.55)",marginTop:"4px"},children:e.label})]},e.label))}),S.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[{text:"Licensed & Insured",icon:S.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"#F9A800",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:S.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})},{text:"Certified Technicians",icon:S.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"#F9A800",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[S.jsx("circle",{cx:"12",cy:"8",r:"4"}),S.jsx("path",{d:"M9 12l-4 8h14l-4-8"})]})},{text:"100% Satisfaction Guarantee",icon:S.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"#F9A800",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:S.jsx("polyline",{points:"20 6 9 17 4 12"})})}].map(e=>S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"7px",background:"rgba(0,0,0,0.2)",border:"1px solid rgba(249,168,0,0.25)",borderRadius:"8px",padding:"7px 14px",fontFamily:"'Inter', sans-serif",fontSize:"0.68rem",fontWeight:600,color:"rgba(255,255,255,0.75)",letterSpacing:"0.06em",textTransform:"uppercase",whiteSpace:"nowrap"},children:[e.icon,e.text]},e.text))}),S.jsx("a",{href:"tel:+14252005790",style:{textDecoration:"none",alignSelf:"flex-start",fontFamily:"'Oswald', sans-serif",fontWeight:600,fontSize:"1rem",letterSpacing:"0.1em",textTransform:"uppercase",background:"#1a1a1a",color:"#F9A800",padding:"14px 28px",borderRadius:"10px",boxShadow:"0 4px 20px rgba(0,0,0,0.3)",transition:"transform 0.15s, box-shadow 0.15s",whiteSpace:"nowrap"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 8px 28px rgba(0,0,0,0.4)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.3)"},children:"Book Your Service →"})]}),S.jsx("div",{style:{width:t?"170px":"200px",flexShrink:0,overflow:"hidden",display:"flex",alignItems:"flex-end",justifyContent:"center",paddingTop:t?"8px":0},children:S.jsx("img",{src:"/stats-image.png",alt:"Momo mascot — it's so easy",style:{width:"100%",height:t?"auto":"100%",objectFit:t?"contain":"cover",display:"block"}})})]})]})]})})})]})}const TI=[{name:"Sarah M.",city:"Redmond, WA",text:"I couldn't believe how much dust was built up in our ducts. After Momo came through, the air in our home felt completely different — lighter, cleaner, and my allergies haven't bothered me since. Highly recommend.",glowColor:"blue"},{name:"James R.",city:"Bellevue, WA",text:"They found a serious lint blockage in our dryer vent that we had no idea about. The tech explained everything clearly and had it cleared in under an hour. Professional, fast, and reasonably priced. Will call again.",glowColor:"orange"},{name:"Linda K.",city:"Kirkland, WA",text:"Our HVAC had been running constantly and our energy bills were through the roof. Momo cleaned the full duct system and within two weeks our bill dropped noticeably. Wish we had called sooner.",glowColor:"green"},{name:"Daniel T.",city:"Sammamish, WA",text:"Punctual, professional, and thorough. The technician walked me through the entire process and showed me before-and-after photos. The house smells fresher and our HVAC is running quieter than ever.",glowColor:"purple"}],wI=()=>S.jsx("div",{style:{display:"flex",gap:"3px",marginBottom:"2px"},children:[...Array(5)].map((t,e)=>S.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"#B8860B",xmlns:"http://www.w3.org/2000/svg",children:S.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})},e))});function AI(){return S.jsxs("section",{style:{background:"#F9A800",fontFamily:"'Inter', sans-serif",position:"relative"},className:"px-6 pb-24 pt-4",children:[S.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden"},children:S.jsx(ui,{background:"transparent",particleColor:"#ffffff",particleDensity:60,minSize:.5,maxSize:1.8,speed:.7})}),S.jsxs("div",{style:{position:"relative",zIndex:1},className:"max-w-6xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-12",children:[S.jsx("p",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-white/60 mb-3",children:"What Our Customers Say"}),S.jsx("h2",{className:"text-3xl md:text-4xl font-black text-white leading-tight",children:"Real Results. Real People."})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6",children:TI.map(t=>S.jsxs(Oa,{glowColor:t.glowColor,className:"flex flex-col gap-4",children:[S.jsxs("div",{className:"flex items-start justify-between gap-4",children:[S.jsxs("div",{children:[S.jsx("p",{className:"font-black text-base leading-tight",style:{color:"#1a1a1a"},children:t.name}),S.jsx("p",{className:"text-xs font-light tracking-wide mt-0.5",style:{color:"#888"},children:t.city})]}),S.jsx("div",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:600,fontSize:"0.6rem",letterSpacing:"0.12em",color:"#F9A800",background:"rgba(25,25,25,0.85)",padding:"4px 10px",borderRadius:"999px",whiteSpace:"nowrap",flexShrink:0},children:"VERIFIED"})]}),S.jsx(wI,{}),S.jsxs("p",{className:"text-sm leading-relaxed font-light",style:{color:"#444"},children:['"',t.text,'"']})]},t.name))})]})]})}const Hv=[{tag:"AIR",title:"Healthier Air for Your Family",description:"We eliminate dust, allergens, mold, and bacteria from your duct system — improving indoor air quality and protecting the health of everyone in your home."},{tag:"ECO",title:"Lower Energy Bills",description:"Blocked ducts force your HVAC system to work harder and longer. A clean system runs at peak efficiency, reducing energy consumption and cutting your monthly costs."},{tag:"SAFE",title:"Fire Prevention",description:"Lint accumulation in dryer vents is one of the leading causes of residential fires. Our thorough cleaning eliminates that risk and keeps your home and family protected."},{tag:"PRO",title:"Certified & Fully Guaranteed",description:"Our technicians are licensed, insured, and trained to the highest industry standards. Every job is backed by a 100% satisfaction guarantee — no exceptions."},{tag:"FAST",title:"Same-Week Availability",description:"We know your time is valuable. That's why we offer flexible scheduling with same-week appointments and arrive on time, every time — with no hidden fees."},{tag:"DEEP",title:"Whole-System Cleaning",description:"We don't just clean the visible parts. We service every register, return vent, main trunk line, and air handler — leaving zero buildup behind."}],CI=[{number:"2500+",label:"Homes Served"},{number:"10+",label:"Years of Experience"},{number:"100%",label:"Satisfaction Rate"},{number:"5★",label:"Average Rating"}],kf={height:"1px",background:"linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.25), transparent)",margin:"4px 0"};function bI(){return S.jsxs("section",{style:{background:"#F9A800",fontFamily:"'Inter', sans-serif",position:"relative"},className:"px-6 pb-24 pt-4",children:[S.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden"},children:S.jsx(ui,{background:"transparent",particleColor:"#ffffff",particleDensity:60,minSize:.5,maxSize:1.8,speed:.7})}),S.jsx("div",{style:{position:"relative",zIndex:1},className:"max-w-6xl mx-auto",children:S.jsxs("div",{children:[S.jsxs("div",{className:"text-center mb-12",children:[S.jsx("p",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-white/60 mb-3",children:"The Momo Difference"}),S.jsx("h2",{className:"text-3xl md:text-4xl font-black text-white leading-tight",children:"Why Choose Momo Air Care?"})]}),S.jsxs(Oa,{glowColor:"blue",className:"flex flex-col gap-0",width:"100%",children:[S.jsx("p",{className:"text-sm leading-relaxed",style:{color:"#444",marginBottom:"28px"},children:"At Momo Air Care, we believe clean air isn't a luxury — it's a right. We bring professional-grade duct and vent cleaning directly to your door, with the care and precision your home deserves. Here's what sets us apart:"}),S.jsx("div",{className:"flex flex-col gap-6",children:Hv.map((t,e)=>S.jsxs("div",{children:[S.jsxs("div",{className:"flex gap-5 items-start",children:[S.jsx("div",{className:"w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl",style:{background:"hsl(0 0% 100% / 0.2)",fontFamily:"'Oswald', sans-serif",fontWeight:600,fontSize:"0.7rem",letterSpacing:"0.12em",color:"rgba(255,255,255,0.85)"},children:t.tag}),S.jsxs("div",{className:"flex flex-col gap-1",children:[S.jsx("h3",{className:"text-base font-black leading-snug",style:{color:"#1a1a1a"},children:t.title}),S.jsx("p",{className:"text-sm leading-relaxed font-light",style:{color:"#555"},children:t.description})]})]}),e<Hv.length-1&&S.jsx("div",{style:{...kf,marginTop:"24px"}})]},t.title))}),S.jsx("div",{style:{...kf,margin:"32px 0 28px"}}),S.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:CI.map(t=>S.jsxs("div",{className:"flex flex-col items-center gap-1 text-center",children:[S.jsx("span",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:600,fontSize:"2rem",background:"linear-gradient(135deg, #bbb 0%, #fff 45%, #bbb 100%)",backgroundSize:"200% 100%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"shine-sweep 9s linear infinite"},children:t.number}),S.jsx("span",{className:"text-xs font-semibold tracking-widest uppercase",style:{color:"#888"},children:t.label})]},t.label))}),S.jsx("div",{style:{...kf,margin:"28px 0 24px"}}),S.jsx("p",{className:"text-xs text-center font-semibold tracking-widest uppercase",style:{color:"rgba(255,255,255,0.5)"},children:"Licensed · Insured · Local · Trusted"})]})]})})]})}const Gv=[{q:"How often should I clean my air ducts?",a:"We recommend cleaning your air ducts once every 1–2 years. If you have pets, allergies, young children, or recent renovations, annual cleaning is the best way to keep your air fresh and your family healthy."},{q:"How long does the cleaning process take?",a:"A full duct cleaning typically takes 2–4 hours depending on the size of your home and the number of vents. We work efficiently and won't rush — every duct gets the attention it needs."},{q:"Will my house be messy after the service?",a:"Not at all. We use professional-grade negative air pressure equipment that contains all dust and debris during the cleaning. We leave your home exactly as we found it — just with cleaner air."},{q:"Do you clean dryer vents too?",a:"Yes! Dryer vent cleaning is one of our most popular services. A clogged dryer vent is a leading cause of house fires and significantly reduces your dryer's efficiency. We clear it completely."},{q:"Is duct cleaning really worth it?",a:"Absolutely. Clean ducts mean better air quality, a more efficient HVAC system, lower energy bills, and fewer allergy symptoms. Most customers notice the difference from the very first day."},{q:"Are you insured and certified?",a:"Yes. Momo Air Care is fully licensed, insured, and our technicians are certified professionals. Every job is backed by our 100% satisfaction guarantee — your peace of mind is our priority."}];function RI({item:t,index:e,isOpen:n,onToggle:i}){return S.jsxs("div",{children:[S.jsxs("button",{onClick:i,style:{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"20px 0",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",textAlign:"left"},children:[S.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontWeight:700,fontSize:"0.95rem",color:"#1a1a1a",lineHeight:1.4},children:t.q}),S.jsx(Zr.span,{animate:{rotate:n?45:0},transition:{duration:.25,ease:"easeInOut"},style:{flexShrink:0,width:"28px",height:"28px",borderRadius:"50%",background:"hsl(0 0% 100% / 0.3)",display:"flex",alignItems:"center",justifyContent:"center",color:"#1a1a1a",fontSize:"1.2rem",lineHeight:1,fontWeight:300},children:"+"})]}),S.jsx(su,{initial:!1,children:n&&S.jsx(Zr.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},style:{overflow:"hidden"},children:S.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontSize:"0.875rem",fontWeight:300,color:"#555",lineHeight:1.7,paddingBottom:"20px",margin:0},children:t.a})},"answer")})]})}const PI={height:"1px",background:"linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.3), transparent)"};function LI(){const[t,e]=Z.useState(null),n=Yn(),i=r=>e(t===r?null:r);return S.jsxs("section",{style:{background:"#F9A800",fontFamily:"'Inter', sans-serif",position:"relative"},className:"px-6 pb-24 pt-4",children:[S.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden"},children:S.jsx(ui,{background:"transparent",particleColor:"#ffffff",particleDensity:60,minSize:.5,maxSize:1.8,speed:.7})}),S.jsxs("div",{style:{position:"relative",zIndex:1},className:"max-w-5xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-12",children:[S.jsx("p",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-white/60 mb-3",children:"Got Questions?"}),S.jsx("h2",{className:"text-3xl md:text-4xl font-black text-white leading-tight",children:"Frequently Asked Questions"})]}),S.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:"0px"},children:[!n&&S.jsx("img",{src:"/momo-faq-left.png",alt:"Momo mascot",style:{width:"200px",flexShrink:0,objectFit:"contain",marginBottom:"-6px"}}),S.jsx("div",{style:{flex:1,minWidth:0},children:S.jsx(Oa,{glowColor:"blue",className:"flex flex-col",width:"100%",children:Gv.map((r,s)=>S.jsxs("div",{children:[S.jsx(RI,{item:r,index:s,isOpen:t===s,onToggle:()=>i(s)}),s<Gv.length-1&&S.jsx("div",{style:PI})]},r.q))})}),!n&&S.jsx("img",{src:"/momo-faq.png",alt:"Momo mascot",style:{width:"200px",flexShrink:0,objectFit:"contain",marginBottom:"-6px"}})]})]})]})}const DI=[{name:"Arlington",lat:48.166,lng:-122.116,dir:"right",major:!1},{name:"Marysville",lat:48.051,lng:-122.177,dir:"right",major:!1},{name:"Everett",lat:47.979,lng:-122.202,dir:"left",major:!1},{name:"Monroe",lat:47.855,lng:-121.972,dir:"right",major:!1},{name:"Duvall",lat:47.742,lng:-121.985,dir:"right",major:!1},{name:"Seattle",lat:47.606,lng:-122.332,dir:"left",major:!0},{name:"North Bend",lat:47.492,lng:-121.787,dir:"bottom",major:!1},{name:"Tacoma",lat:47.252,lng:-122.444,dir:"left",major:!1},{name:"Lacey",lat:47.034,lng:-122.822,dir:"right",major:!1},{name:"Olympia",lat:47.037,lng:-122.9,dir:"left",major:!1}],zf=[[48.2,-122.1],[48.17,-122.12],[48.05,-122.18],[47.98,-122.2],[47.91,-122.24],[47.82,-122.31],[47.72,-122.34],[47.61,-122.33],[47.52,-122.3],[47.47,-122.3],[47.32,-122.31],[47.25,-122.44],[47.17,-122.51],[47.1,-122.62],[47.04,-122.82],[47.03,-122.9]],II=[[48.36,-122.22],[48.22,-121.82],[47.62,-121.55],[47.38,-121.62],[46.92,-122.55],[46.88,-123.08],[47.42,-122.86],[48.02,-122.42],[48.36,-122.22]],NI=["Olympia","Lacey","Tumwater","DuPont","Tacoma","Puyallup","Federal Way","Auburn","Kent","Renton","Seattle","Bellevue","Kirkland","Redmond","Bothell","Lynnwood","Everett","Marysville","Arlington","Monroe","Duvall","Snoqualmie","North Bend"],UI={home:S.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#F9A800",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[S.jsx("path",{d:"M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"}),S.jsx("polyline",{points:"9 21 9 12 15 12 15 21"})]}),bolt:S.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#F9A800",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:S.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})}),map:S.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#F9A800",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[S.jsx("polyline",{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"}),S.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"18"}),S.jsx("line",{x1:"16",y1:"6",x2:"16",y2:"22"})]}),phone:S.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#F9A800",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:S.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.2 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})})},FI=[{icon:"home",label:"Residential & Commercial"},{icon:"bolt",label:"Same-Day Appointments Available"},{icon:"map",label:"Full I-5 Corridor Coverage"},{icon:"phone",label:"Free Phone Consultations"}];function OI(){const t=Z.useRef(null),e=Z.useRef(null);return Z.useEffect(()=>{const n=window.L;if(!n||!t.current||e.current)return;const i=window.matchMedia("(max-width: 768px)").matches||"ontouchstart"in window&&navigator.maxTouchPoints>0,r=n.map(t.current,{center:[47.62,-122.45],zoom:8,scrollWheelZoom:!1,zoomControl:!i,dragging:!i,touchZoom:!i,doubleClickZoom:!i,boxZoom:!i,keyboard:!i,tap:!i});n.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19}).addTo(r),n.polygon(II,{color:"#F9A800",weight:2.5,opacity:.85,fillColor:"#F9A800",fillOpacity:.18,dashArray:"7, 5"}).addTo(r),n.polyline(zf,{color:"#F9A800",weight:16,opacity:.25}).addTo(r),n.polyline(zf,{color:"#e06b00",weight:5,opacity:1}).addTo(r),n.polyline(zf,{color:"#fff",weight:2,opacity:.7,dashArray:"5, 12"}).addTo(r);const s=o=>{const a=o?22:16,l=a/2;return n.divIcon({className:"",html:`<div style="position:relative;width:${a}px;height:${a}px">
          ${o?'<div style="position:absolute;inset:-5px;border-radius:50%;border:2.5px solid rgba(249,168,0,0.7);animation:momo-ping 2s ease-out infinite"></div>':""}
          <div style="width:${a}px;height:${a}px;background:radial-gradient(circle at 38% 35%,#FFE566,#F9A800 60%,#e06b00);border:${o?3.5:2.5}px solid #fff;border-radius:50%;box-shadow:0 0 0 ${o?3:2}px rgba(249,168,0,0.6),0 3px 12px rgba(0,0,0,0.35)"></div>
        </div>`,iconSize:[a,a],iconAnchor:[l,l]})};return DI.forEach(o=>{const a=o.dir==="left"?[-10,0]:o.dir==="top"?[0,-10]:o.dir==="bottom"?[0,10]:[10,0];n.marker([o.lat,o.lng],{icon:s(o.major)}).bindTooltip(o.name,{permanent:!0,direction:o.dir,offset:a,className:"momo-tip"}).addTo(r)}),e.current=r,()=>{r.remove(),e.current=null}},[]),S.jsx("div",{ref:t,style:{width:"100%",height:"460px",borderRadius:"20px",overflow:"hidden",boxShadow:"0 8px 48px rgba(0,0,0,0.22)",touchAction:"pan-y"}})}function kI(){return S.jsxs("section",{style:{background:"#F9A800",position:"relative",padding:"80px 24px 100px",fontFamily:"'Inter', sans-serif"},children:[S.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden"},children:S.jsx(ui,{background:"transparent",particleColor:"#ffffff",particleDensity:50,minSize:.5,maxSize:1.8,speed:.7})}),S.jsxs("div",{style:{position:"relative",zIndex:1,maxWidth:"1080px",margin:"0 auto"},children:[S.jsxs("div",{style:{textAlign:"center",marginBottom:"52px"},children:[S.jsx("p",{style:{fontSize:"0.7rem",fontWeight:700,letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(255,255,255,0.6)",margin:"0 0 12px"},children:"Where We Work"}),S.jsx("h2",{style:{fontWeight:900,fontSize:"clamp(2rem, 4vw, 3rem)",color:"#fff",margin:"0 0 14px",lineHeight:1.1},children:"Our Service Area"}),S.jsx("p",{style:{fontWeight:600,fontSize:"1.05rem",color:"rgba(255,255,255,0.9)",margin:"0 0 12px"},children:"Proudly Serving Greater Puget Sound, Washington"}),S.jsx("p",{style:{fontSize:"0.9rem",color:"rgba(255,255,255,0.72)",maxWidth:"580px",margin:"0 auto",lineHeight:1.8},children:"From Olympia in the south to Arlington in the north — we provide professional air duct cleaning, dryer vent cleaning, duct insulation and HVAC services throughout the region."})]}),S.jsx("div",{style:{marginBottom:"48px",borderRadius:"20px",overflow:"hidden"},children:S.jsx(OI,{})}),S.jsxs("div",{style:{display:"flex",gap:"40px",flexWrap:"wrap",justifyContent:"center"},children:[S.jsxs("div",{style:{flex:1,minWidth:"280px",maxWidth:"560px"},children:[S.jsx("h3",{style:{fontWeight:800,fontSize:"1.15rem",color:"#fff",margin:"0 0 16px"},children:"Cities We Serve"}),S.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[NI.map(t=>S.jsx("div",{style:{background:"rgba(255,255,255,0.18)",backdropFilter:"blur(8px)",border:"1px solid rgba(255,255,255,0.35)",borderRadius:"999px",padding:"6px 15px",fontWeight:600,fontSize:"0.78rem",color:"#fff"},children:t},t)),S.jsx("div",{style:{background:"rgba(255,255,255,0.1)",border:"1px dashed rgba(255,255,255,0.3)",borderRadius:"999px",padding:"6px 15px",fontStyle:"italic",fontSize:"0.78rem",color:"rgba(255,255,255,0.6)"},children:"& surrounding communities"})]})]}),S.jsxs("div",{style:{flex:1,minWidth:"280px",maxWidth:"440px"},children:[S.jsx("h3",{style:{fontWeight:800,fontSize:"1.15rem",color:"#fff",margin:"0 0 16px"},children:"What We Offer"}),S.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[FI.map(t=>S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px",background:"rgba(255,255,255,0.14)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.25)",borderRadius:"14px",padding:"12px 18px"},children:[S.jsx("span",{style:{flexShrink:0,display:"flex",alignItems:"center"},children:UI[t.icon]}),S.jsx("span",{style:{fontSize:"0.88rem",fontWeight:600,color:"#fff"},children:t.label})]},t.label)),S.jsxs("div",{style:{marginTop:"6px",background:"rgba(0,0,0,0.14)",borderRadius:"12px",padding:"14px 18px",border:"1px solid rgba(255,255,255,0.1)"},children:[S.jsx("p",{style:{margin:"0 0 8px",fontSize:"0.8rem",color:"rgba(255,255,255,0.7)",lineHeight:1.7},children:"Not sure if we cover your area? Call us — we'll let you know right away."}),S.jsx("a",{href:"tel:+14252005790",style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"0.9rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"#F9A800",textDecoration:"none"},children:"(425) 200-5790 →"})]})]})]})]})]})]})}const zI="moses.lishaa@gmail.com",Ll={width:"100%",padding:"14px 16px",borderRadius:"10px",border:"1.5px solid hsl(0 0% 100% / 0.35)",background:"hsl(0 0% 100% / 0.15)",backdropFilter:"blur(8px)",color:"#1a1a1a",fontFamily:"'Inter', sans-serif",fontSize:"0.9rem",fontWeight:400,outline:"none",boxSizing:"border-box",transition:"border-color 0.2s"},Dl={display:"block",fontFamily:"'Inter', sans-serif",fontSize:"0.75rem",fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#1a1a1a",marginBottom:"6px"};function BI(){const t=Yn(),[e,n]=Z.useState("idle"),i=async r=>{if(r.preventDefault(),e==="sending")return;const s=r.target,o=new FormData(s),a=Object.fromEntries(o.entries());a._subject="🔔 New MOMO Air Care Lead!",a._template="table",n("sending");try{const c=await(await fetch(`https://formsubmit.co/ajax/${zI}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)})).json();c&&(c.success===!0||c.success==="true")?(n("success"),s.reset()):n("error")}catch{n("error")}};return S.jsxs("section",{style:{background:"#F9A800",fontFamily:"'Inter', sans-serif",position:"relative"},className:"px-6 pb-0 pt-4",children:[S.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden"},children:S.jsx(ui,{background:"transparent",particleColor:"#ffffff",particleDensity:60,minSize:.5,maxSize:1.8,speed:.7})}),S.jsxs("div",{style:{position:"relative",zIndex:1},className:"max-w-5xl mx-auto",children:[S.jsxs("div",{className:"text-center mb-10",children:[S.jsx("p",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-white/60 mb-3",children:"Let's Get Started"}),S.jsxs("h2",{className:"text-3xl md:text-5xl font-black text-white leading-tight mb-4",children:["Ready to Breathe",S.jsx("br",{}),"Cleaner Air?"]}),S.jsx("p",{className:"text-xs font-semibold tracking-[0.25em] uppercase text-white/60",children:"Get your free quote today — same day service available"})]}),S.jsxs("div",{className:"text-center mb-10",children:[S.jsx("a",{href:"tel:+14252005790",style:{display:"inline-block",fontFamily:"'Oswald', sans-serif",fontWeight:600,fontSize:"clamp(2.2rem, 6vw, 3.5rem)",letterSpacing:"0.05em",color:"#ffffff",textShadow:`
                1px 1px 0 #ccc,
                2px 2px 0 #bbb,
                3px 3px 0 #aaa,
                4px 4px 0 #999,
                5px 5px 0 #888,
                6px 6px 0 #777,
                7px 7px 12px rgba(0,0,0,0.3)
              `,textDecoration:"none",lineHeight:1},children:"(425) 200-5790"}),S.jsx("p",{style:{marginTop:"8px",fontSize:"0.78rem",fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(255,255,255,0.5)"},children:"Tap to call · Available 7 days a week"})]}),S.jsxs("div",{style:{display:"flex",flexDirection:t?"column":"row",alignItems:t?"center":"flex-end",gap:"0px",marginLeft:t?0:"-110px"},children:[S.jsx("img",{src:"/momo-giraffe.png",alt:"Momo mascot",style:{width:t?"150px":"200px",maxWidth:"45%",order:t?2:0,flexShrink:0,objectFit:"contain",objectPosition:"bottom",marginBottom:t?"-2px":"-6px",marginTop:t?"6px":0,filter:t?"drop-shadow(0 10px 20px rgba(0,0,0,0.2))":void 0}}),S.jsx("div",{style:{flex:1,width:t?"100%":"auto",order:t?1:0},children:S.jsx(Oa,{glowColor:"blue",className:"flex flex-col gap-6",width:"100%",children:e==="success"?S.jsxs("div",{style:{textAlign:"center",padding:"24px 8px"},children:[S.jsx("div",{style:{fontSize:"2.6rem",marginBottom:"10px"},children:"✅"}),S.jsx("h4",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"1.4rem",color:"#1a1a1a",margin:"0 0 8px",letterSpacing:"0.04em"},children:"Thank You!"}),S.jsxs("p",{style:{fontSize:"0.95rem",color:"#1a1a1a",lineHeight:1.6,margin:0},children:["We got your request and will reach out shortly. Need it now? Call ",S.jsx("a",{href:"tel:+14252005790",style:{color:"#1a1a1a",fontWeight:800},children:"(425) 200-5790"}),"."]})]}):S.jsxs("form",{onSubmit:i,className:"flex flex-col gap-6",children:[S.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[S.jsxs("div",{children:[S.jsx("label",{style:Dl,children:"Name"}),S.jsx("input",{name:"name",type:"text",required:!0,placeholder:"John Smith",style:Ll})]}),S.jsxs("div",{children:[S.jsx("label",{style:Dl,children:"Phone"}),S.jsx("input",{name:"phone",type:"tel",required:!0,placeholder:"(425) 000-0000",style:Ll})]})]}),S.jsxs("div",{children:[S.jsx("label",{style:Dl,children:"Email"}),S.jsx("input",{name:"email",type:"email",placeholder:"you@email.com",style:Ll})]}),S.jsxs("div",{children:[S.jsx("label",{style:Dl,children:"Message"}),S.jsx("textarea",{name:"message",placeholder:"Tell us about your home and what service you need...",rows:4,style:{...Ll,resize:"none",lineHeight:1.6}})]}),e==="error"&&S.jsx("p",{style:{margin:0,fontSize:"0.85rem",fontWeight:700,color:"#7a1500",textAlign:"center"},children:"Something went wrong. Please call us at (425) 200-5790."}),S.jsx("button",{type:"submit",disabled:e==="sending",style:{width:"100%",padding:"18px",borderRadius:"12px",border:"none",background:"linear-gradient(135deg, #1a1a1a 0%, #333 100%)",color:"#F9A800",fontFamily:"'Oswald', sans-serif",fontWeight:600,fontSize:"1.1rem",letterSpacing:"0.12em",textTransform:"uppercase",cursor:e==="sending"?"wait":"pointer",opacity:e==="sending"?.7:1,boxShadow:"0 4px 20px rgba(0,0,0,0.25)",transition:"transform 0.15s, box-shadow 0.15s"},onMouseEnter:t?void 0:r=>{r.currentTarget.style.transform="translateY(-2px)",r.currentTarget.style.boxShadow="0 8px 28px rgba(0,0,0,0.3)"},onMouseLeave:t?void 0:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.25)"},children:e==="sending"?"Sending…":"Get Free Quote"})]})})})]})]}),S.jsxs("footer",{style:{marginTop:"80px",paddingBottom:"40px",textAlign:"center"},children:[S.jsx("div",{style:{height:"1px",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",marginBottom:"24px"}}),S.jsx("a",{href:"mailto:info@momoaircare.com",style:{display:"inline-block",marginBottom:"20px",fontFamily:"'Inter', sans-serif",fontSize:"0.85rem",fontWeight:400,color:"rgba(255,255,255,0.6)",textDecoration:"none",letterSpacing:"0.03em",borderBottom:"1px solid rgba(255,255,255,0.25)",paddingBottom:"1px",transition:"color 0.2s"},onMouseEnter:r=>r.target.style.color="#fff",onMouseLeave:r=>r.target.style.color="rgba(255,255,255,0.6)",children:"info@momoaircare.com"}),S.jsx("div",{style:{height:"1px",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",marginBottom:"20px"}}),S.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",gap:"16px 32px",fontFamily:"'Inter', sans-serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.55)",letterSpacing:"0.05em"},children:[S.jsx("span",{children:"© 2025 Momo Air Care · All Rights Reserved"}),S.jsx("div",{style:{display:"flex",gap:"20px"},children:["Services","About","Contact"].map(r=>S.jsx("a",{href:"#",style:{color:"rgba(255,255,255,0.65)",textDecoration:"none",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",fontSize:"0.72rem",transition:"color 0.2s"},onMouseEnter:s=>s.target.style.color="#fff",onMouseLeave:s=>s.target.style.color="rgba(255,255,255,0.65)",children:r},r))})]})]})]})}function VI(){const[t,e]=Z.useState(!1),n=Yn();return Z.useEffect(()=>{const i=()=>e(window.scrollY>window.innerHeight*.6);return window.addEventListener("scroll",i,{passive:!0}),()=>window.removeEventListener("scroll",i)},[]),S.jsx(su,{children:t&&S.jsx(Zr.a,{href:"tel:+14252005790",initial:{x:120,opacity:0},animate:{x:0,opacity:1},exit:{x:120,opacity:0},whileHover:{scale:1.08,boxShadow:"0 0 36px 10px rgba(249,168,0,0.9), 0 0 70px 20px rgba(249,168,0,0.55), 0 6px 32px rgba(0,0,0,0.25)"},whileTap:{scale:.96},transition:{type:"spring",stiffness:260,damping:24},style:{position:"fixed",right:n?"14px":"24px",top:n?"auto":"50%",bottom:n?"16px":"auto",marginTop:n?0:"-28px",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:n?"12px 18px":"14px 22px",border:"1.5px solid rgba(255,230,50,0.9)",borderRadius:"14px",background:"linear-gradient(135deg, #fffbe0 0%, #FFE566 40%, #FFF9C4 60%, #F9A800 100%)",boxShadow:"0 0 18px 4px rgba(249,168,0,0.55), 0 0 40px 8px rgba(249,168,0,0.3), 0 4px 24px rgba(0,0,0,0.18)",cursor:"pointer",textDecoration:"none",animation:"glow-pulse 2s ease-in-out infinite"},children:S.jsx("span",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"1rem",letterSpacing:"0.08em",background:"linear-gradient(105deg, #5a3a00 0%, #7a5000 20%, #fff8e0 48%, #ffe066 52%, #7a5000 80%, #3a2000 100%)",backgroundSize:"250% 100%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"shine-sweep 2.2s linear infinite"},children:"(425) 200-5790"})})})}function HI(){const t=Yn(),e=Dc(-300),n=Dc(-300),i=x0(e,{stiffness:120,damping:18,mass:.8}),r=x0(n,{stiffness:120,damping:18,mass:.8});return Z.useEffect(()=>{if(t)return;const s=o=>{e.set(o.clientX-80),n.set(o.clientY-220)};return window.addEventListener("mousemove",s,{passive:!0}),()=>window.removeEventListener("mousemove",s)},[t]),t?null:S.jsx(Zr.img,{src:"/momo-giraffe.png",alt:"Momo mascot",style:{position:"fixed",x:i,y:r,width:"160px",pointerEvents:"none",zIndex:999,objectFit:"contain"}})}function GI({triggerRef:t}){const[e,n]=Z.useState(!1),[i,r]=Z.useState(!1),s=Z.useRef(!1),o=Yn();Z.useEffect(()=>{if(!(t!=null&&t.current))return;const l=new IntersectionObserver(([c])=>{c.isIntersecting&&!s.current&&(s.current=!0,setTimeout(()=>n(!0),400))},{threshold:.2});return l.observe(t.current),()=>l.disconnect()},[t]);const a=()=>{navigator.clipboard.writeText("MOMO20").then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return S.jsx(su,{children:e&&S.jsx(S.Fragment,{children:S.jsxs(Zr.div,{initial:{opacity:0,x:-60},animate:{opacity:1,x:0},exit:{opacity:0,x:-60},transition:{type:"spring",stiffness:280,damping:26},style:{position:"fixed",top:o?"auto":"57%",bottom:o?"84px":"auto",right:"8px",transform:o?"none":"translateY(-50%)",zIndex:9001,width:"100%",maxWidth:o?"146px":"180px",background:"#111",borderRadius:"16px",overflow:"hidden",boxShadow:"0 0 0 1px rgba(249,168,0,0.3), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(249,168,0,0.1)",fontFamily:"'Inter', sans-serif"},children:[S.jsxs("div",{style:{background:"#F9A800",padding:"4px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[S.jsx("span",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"0.62rem",letterSpacing:"0.18em",textTransform:"uppercase",color:"#111",whiteSpace:"nowrap"},children:"Limited Offer"}),S.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#111",strokeWidth:"2.5",strokeLinecap:"round",children:[S.jsx("circle",{cx:"6",cy:"6",r:"3"}),S.jsx("circle",{cx:"6",cy:"18",r:"3"}),S.jsx("line",{x1:"20",y1:"4",x2:"8.12",y2:"15.88"}),S.jsx("line",{x1:"14.47",y1:"14.48",x2:"20",y2:"20"}),S.jsx("line",{x1:"8.12",y1:"8.12",x2:"12",y2:"12"})]})]}),S.jsxs("div",{style:{padding:"8px 8px"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"center",gap:"4px",marginBottom:"7px"},children:[S.jsx("span",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"1.55rem",lineHeight:1,color:"#F9A800",letterSpacing:"-0.02em"},children:"20%"}),S.jsx("span",{style:{fontFamily:"'Inter', sans-serif",fontWeight:800,fontSize:"1rem",color:"#fff",letterSpacing:"0.04em",textTransform:"uppercase"},children:"OFF"})]}),S.jsx("button",{onClick:a,style:{display:"block",width:"100%",background:"transparent",border:"1.5px dashed rgba(249,168,0,0.6)",borderRadius:"10px",padding:"6px",textAlign:"center",fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"0.78rem",letterSpacing:"0.22em",color:"#F9A800",cursor:"pointer",marginBottom:"6px",transition:"background 0.2s, border-color 0.2s"},onMouseEnter:l=>{l.currentTarget.style.background="rgba(249,168,0,0.08)"},onMouseLeave:l=>{l.currentTarget.style.background="transparent"},children:i?"✓ COPIED!":"MOMO20"}),S.jsx("a",{href:"tel:+14252005790",style:{display:"block",width:"100%",background:"#F9A800",color:"#111",borderRadius:"10px",padding:"9px",textAlign:"center",fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"0.92rem",letterSpacing:"0.1em",textTransform:"uppercase",textDecoration:"none",boxShadow:"0 4px 20px rgba(249,168,0,0.35)",transition:"transform 0.15s, box-shadow 0.15s"},onMouseEnter:l=>{l.currentTarget.style.transform="translateY(-2px)",l.currentTarget.style.boxShadow="0 8px 28px rgba(249,168,0,0.5)"},onMouseLeave:l=>{l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="0 4px 20px rgba(249,168,0,0.35)"},children:"Call Now"})]})]})})})}function WI({triggerRef:t}){const[e,n]=Z.useState(!1),i=Z.useRef(!1),r=Yn();Z.useEffect(()=>{if(!(t!=null&&t.current))return;const o=new IntersectionObserver(([a])=>{a.isIntersecting&&!i.current&&(i.current=!0,setTimeout(()=>n(!0),500))},{threshold:.2});return o.observe(t.current),()=>o.disconnect()},[t]);const s=()=>n(!1);return S.jsx(su,{children:e&&S.jsxs(S.Fragment,{children:[S.jsx(Zr.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:s,style:{position:"fixed",inset:0,zIndex:9e3,background:"rgba(0,0,0,0.7)",backdropFilter:"blur(6px)"}}),S.jsx("div",{style:{position:"fixed",inset:0,zIndex:9001,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:S.jsxs(Zr.div,{initial:{opacity:0,scale:.9,y:30},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.94,y:20},transition:{type:"spring",stiffness:260,damping:26},style:{pointerEvents:"all",width:r?"92vw":"65vw",maxWidth:r?"92vw":"860px",maxHeight:r?"90vh":"none",overflowY:r?"auto":"visible",background:"#111",borderRadius:r?"20px":"28px",overflow:"hidden",boxShadow:"0 0 0 1.5px rgba(249,168,0,0.35), 0 40px 100px rgba(0,0,0,0.8)",fontFamily:"'Inter', sans-serif",display:"flex",flexDirection:"column"},children:[S.jsxs("div",{style:{background:"#F9A800",padding:"12px 28px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[S.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#111",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[S.jsx("circle",{cx:"12",cy:"12",r:"10"}),S.jsx("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),S.jsx("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})]}),S.jsx("span",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:"0.78rem",letterSpacing:"0.22em",textTransform:"uppercase",color:"#111"},children:"Did You Know?"})]}),S.jsx("button",{onClick:s,style:{background:"rgba(0,0,0,0.15)",border:"none",borderRadius:"50%",width:"28px",height:"28px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.1rem",color:"#111",lineHeight:1},children:"×"})]}),S.jsxs("div",{style:{display:"flex",flexDirection:r?"column":"row",alignItems:"stretch",minHeight:r?"auto":"360px"},children:[S.jsx("div",{style:{flex:r?"0 0 auto":"0 0 42%",height:r?"244px":"auto",background:`
                  radial-gradient(circle at 50% 40%, rgba(249,168,0,0.45) 0%, rgba(249,168,0,0) 60%),
                  linear-gradient(180deg, rgba(0,0,0,0.42), rgba(0,0,0,0.60)),
                  repeating-linear-gradient(45deg, #F9A800 0px, #F9A800 26px, #141414 26px, #141414 52px)
                `,display:"flex",alignItems:"flex-end",justifyContent:"center",position:"relative",overflow:"hidden"},children:S.jsx("img",{src:"/momo-think-gold.png",alt:"MOMO mascot",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"contain",objectPosition:"center bottom",padding:r?"14px 0 0":"20px 0 0",filter:"drop-shadow(0 10px 20px rgba(0,0,0,0.5))",zIndex:1}})}),S.jsxs("div",{style:{flex:1,padding:r?"24px 22px 28px":"40px 36px",display:"flex",flexDirection:"column",justifyContent:"center",gap:r?"16px":"20px"},children:[S.jsxs("div",{children:[S.jsx("div",{style:{fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:r?"3.4rem":"5.2rem",lineHeight:1,color:"#F9A800",letterSpacing:"-0.02em"},children:"5,970"}),S.jsxs("div",{style:{fontSize:"1rem",fontWeight:900,color:"#fff",textTransform:"uppercase",letterSpacing:"0.06em",marginTop:"6px",lineHeight:1.3},children:["HOMES DESTROYED LAST YEAR!",S.jsx("br",{}),S.jsx("span",{style:{color:"#F9A800"},children:"DIRTY DRYER VENT WAS THE CAUSE."})]})]}),S.jsx("div",{style:{height:"1px",background:"linear-gradient(90deg, rgba(249,168,0,0.4), transparent)"}}),S.jsxs("p",{style:{fontSize:"0.95rem",fontWeight:400,color:"rgba(255,255,255,0.72)",lineHeight:1.75,margin:0},children:[S.jsx("span",{style:{color:"#fff",fontWeight:900,fontSize:"1.1rem",display:"block",marginBottom:"8px",textTransform:"uppercase",letterSpacing:"0.04em"},children:"DON'T LET THIS HAPPEN TO YOU!"}),"One clogged vent. One spark. ",S.jsx("span",{style:{color:"#F9A800",fontWeight:800},children:"Your home is gone forever."})," It takes one phone call to prevent it — and MOMO does it for just ",S.jsx("span",{style:{color:"#F9A800",fontWeight:800,fontSize:"1.1em"},children:"$69!"})]}),S.jsxs("a",{href:"tel:+14252005790",onClick:s,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",background:"#F9A800",color:"#111",borderRadius:"12px",padding:r?"15px 20px":"16px 28px",fontFamily:"'Oswald', sans-serif",fontWeight:700,fontSize:r?"0.85rem":"1rem",letterSpacing:"0.08em",textTransform:"uppercase",textDecoration:"none",textAlign:"center",boxShadow:"0 6px 24px rgba(249,168,0,0.4)",transition:"transform 0.15s, box-shadow 0.15s",alignSelf:r?"stretch":"flex-start"},onMouseEnter:o=>{o.currentTarget.style.transform="translateY(-2px)",o.currentTarget.style.boxShadow="0 10px 32px rgba(249,168,0,0.55)"},onMouseLeave:o=>{o.currentTarget.style.transform="translateY(0)",o.currentTarget.style.boxShadow="0 6px 24px rgba(249,168,0,0.4)"},children:["Clean My Dryer Vent — Only ",S.jsx("span",{style:{fontSize:"1.5rem",fontWeight:900,marginLeft:"8px"},children:"$69!"})]}),S.jsx("button",{onClick:s,style:{background:"none",border:"none",cursor:"pointer",fontSize:"0.75rem",color:"rgba(255,255,255,0.25)",textAlign:"left",padding:0,fontFamily:"'Inter', sans-serif"},children:"No thanks, I'll take my chances"})]})]})]})})]})})}function jI(){const t=Z.useRef(null),e=Z.useRef(null),n=Z.useRef(null);return S.jsxs("div",{style:{position:"relative",minHeight:"100vh",width:"100%",background:"#F9A800"},children:[S.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",backgroundImage:"radial-gradient(circle at center, #FFF991 0%, transparent 70%)",opacity:.6,mixBlendMode:"multiply"}}),S.jsx("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"},children:S.jsx(ui,{background:"transparent",particleColor:"#ffffff",particleDensity:60,minSize:.5,maxSize:1.8,speed:.7})}),S.jsxs("div",{style:{position:"relative",zIndex:1},children:[S.jsx(xI,{}),S.jsx("div",{id:"services",ref:e,children:S.jsx(EI,{})}),S.jsx("div",{id:"testimonials",ref:t,children:S.jsx(AI,{})}),S.jsx("div",{id:"faq",children:S.jsx(LI,{})}),S.jsx("div",{id:"about",children:S.jsx(bI,{})}),S.jsx(kI,{}),S.jsx("div",{id:"contact",ref:n,children:S.jsx(BI,{})}),S.jsx(VI,{}),S.jsx(HI,{})]}),S.jsx(GI,{triggerRef:t}),S.jsx(WI,{triggerRef:e})]})}Bf.createRoot(document.getElementById("root")).render(S.jsx(jI,{}));
