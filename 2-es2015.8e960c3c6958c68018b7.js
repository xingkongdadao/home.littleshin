(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/q54":function(t,e,i){"use strict";var s=i("8Y7J"),n=i("SVse"),r=i("XNiG"),a=i("2Vo4"),l=i("HDdC"),o=i("VRyK");i("quSY"),i("LRne"),i("xgIS");var c=i("pLZG");i("lJxs"),i("7o/Q"),i("eIep"),i("1G5W"),i("IzEk");var u=i("vkgz");function h(t,e){return()=>{if(Object(n.s)(e)){const e=Array.from(t.querySelectorAll(`[class*=${d}]`)),i=/\bflex-layout-.+?\b/g;e.forEach(t=>{t.classList.contains(`${d}ssr`)&&t.parentNode?t.parentNode.removeChild(t):t.className.replace(i,"")})}}}i.d(e,"c",(function(){return p})),i.d(e,"j",(function(){return h})),i.d(e,"d",(function(){return g})),i.d(e,"e",(function(){return m})),i.d(e,"g",(function(){return b})),i.d(e,"a",(function(){return x})),i.d(e,"b",(function(){return C})),i.d(e,"i",(function(){return q})),i.d(e,"h",(function(){return z})),i.d(e,"k",(function(){return F})),i.d(e,"f",(function(){return U}));const d="flex-layout-";let p=(()=>(class{}))();class f{constructor(t=!1,e="all",i="",s="",n=0){this.matches=t,this.mediaQuery=e,this.mqAlias=i,this.suffix=s,this.priority=n,this.property=""}clone(){return new f(this.matches,this.mediaQuery,this.mqAlias,this.suffix)}}let y=(()=>{class t{constructor(){this.stylesheet=new Map}addStyleToElement(t,e,i){const s=this.stylesheet.get(t);s?s.set(e,i):this.stylesheet.set(t,new Map([[e,i]]))}clearStyles(){this.stylesheet.clear()}getStyleForElement(t,e){const i=this.stylesheet.get(t);let s="";if(i){const t=i.get(e);"number"!=typeof t&&"string"!=typeof t||(s=t+"")}return s}}return t.ngInjectableDef=Object(s.Pb)({factory:function(){return new t},token:t,providedIn:"root"}),t})();const g={addFlexToParent:!0,addOrientationBps:!1,disableDefaultBps:!1,disableVendorPrefixes:!1,serverLoaded:!1,useColumnBasisZero:!0,printWithBreakpoints:[],mediaTriggerAutoRestore:!0,ssrObserveBreakpoints:[]},m=new s.o("Flex Layout token, config options for the library",{providedIn:"root",factory:()=>g}),b=new s.o("FlexLayoutServerLoaded",{providedIn:"root",factory:()=>!1}),x=new s.o("Flex Layout token, collect all breakpoints into one provider",{providedIn:"root",factory:()=>null});function w(t,e){return t=t?t.clone():new f,e&&(t.mqAlias=e.alias,t.mediaQuery=e.mediaQuery,t.suffix=e.suffix,t.priority=e.priority),t}const v="inline",E=["row","column","row-reverse","column-reverse"];function k(t){if(t)switch(t.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":t="wrap-reverse";break;case"no":case"none":case"nowrap":t="nowrap";break;default:t="wrap"}return t}class C{constructor(t,e,i,s){this.elementRef=t,this.styleBuilder=e,this.styler=i,this.marshal=s,this.DIRECTIVE_KEY="",this.inputs=[],this.mru={},this.destroySubject=new r.a,this.styleCache=new Map}get parentElement(){return this.elementRef.nativeElement.parentElement}get nativeElement(){return this.elementRef.nativeElement}get activatedValue(){return this.marshal.getValue(this.nativeElement,this.DIRECTIVE_KEY)}set activatedValue(t){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,this.marshal.activatedAlias)}ngOnChanges(t){Object.keys(t).forEach(e=>{if(-1!==this.inputs.indexOf(e)){const i=e.split(".").slice(1).join(".");this.setValue(t[e].currentValue,i)}})}ngOnDestroy(){this.destroySubject.next(),this.destroySubject.complete(),this.marshal.releaseElement(this.nativeElement)}init(t=[]){this.marshal.init(this.elementRef.nativeElement,this.DIRECTIVE_KEY,this.updateWithValue.bind(this),this.clearStyles.bind(this),t)}addStyles(t,e){const i=this.styleBuilder,s=i.shouldCache;let n=this.styleCache.get(t);n&&s||(n=i.buildStyles(t,e),s&&this.styleCache.set(t,n)),this.mru=Object.assign({},n),this.applyStyleToElement(n),i.sideEffect(t,n,e)}clearStyles(){Object.keys(this.mru).forEach(t=>{this.mru[t]=""}),this.applyStyleToElement(this.mru),this.mru={}}triggerUpdate(){this.marshal.triggerUpdate(this.nativeElement,this.DIRECTIVE_KEY)}getFlexFlowDirection(t,e=!1){if(t){const[i,s]=this.styler.getFlowDirection(t);if(!s&&e){const e=function(t){let[e,i,s]=function(t){t=t?t.toLowerCase():"";let[e,i,s]=t.split(" ");return E.find(t=>t===e)||(e=E[0]),i===v&&(i=s!==v?s:"",s=v),[e,k(i),!!s]}(t);return function(t,e=null,i=!1){return{display:i?"inline-flex":"flex","box-sizing":"border-box","flex-direction":t,"flex-wrap":e||null}}(e,i,s)}(i);this.styler.applyStyleToElements(e,[t])}return i.trim()}return"row"}applyStyleToElement(t,e,i=this.nativeElement){this.styler.applyStyleToElement(i,t,e)}setValue(t,e){this.marshal.setValue(this.nativeElement,this.DIRECTIVE_KEY,t,e)}updateWithValue(t){this.addStyles(t)}}const A=[{alias:"xs",mediaQuery:"screen and (min-width: 0px) and (max-width: 599.9px)",priority:1e3},{alias:"sm",mediaQuery:"screen and (min-width: 600px) and (max-width: 959.9px)",priority:900},{alias:"md",mediaQuery:"screen and (min-width: 960px) and (max-width: 1279.9px)",priority:800},{alias:"lg",mediaQuery:"screen and (min-width: 1280px) and (max-width: 1919.9px)",priority:700},{alias:"xl",mediaQuery:"screen and (min-width: 1920px) and (max-width: 4999.9px)",priority:600},{alias:"lt-sm",overlapping:!0,mediaQuery:"screen and (max-width: 599.9px)",priority:950},{alias:"lt-md",overlapping:!0,mediaQuery:"screen and (max-width: 959.9px)",priority:850},{alias:"lt-lg",overlapping:!0,mediaQuery:"screen and (max-width: 1279.9px)",priority:750},{alias:"lt-xl",overlapping:!0,priority:650,mediaQuery:"screen and (max-width: 1919.9px)"},{alias:"gt-xs",overlapping:!0,mediaQuery:"screen and (min-width: 600px)",priority:-950},{alias:"gt-sm",overlapping:!0,mediaQuery:"screen and (min-width: 960px)",priority:-850},{alias:"gt-md",overlapping:!0,mediaQuery:"screen and (min-width: 1280px)",priority:-750},{alias:"gt-lg",overlapping:!0,mediaQuery:"screen and (min-width: 1920px)",priority:-650}],S="(orientation: portrait) and (min-width: 600px) and (max-width: 839.9px)",j="(orientation: landscape) and (min-width: 960px) and (max-width: 1279.9px)",M="(orientation: portrait) and (min-width: 840px)",O="(orientation: landscape) and (min-width: 1280px)",B={HANDSET:"(orientation: portrait) and (max-width: 599.9px), (orientation: landscape) and (max-width: 959.9px)",TABLET:`${S} , ${j}`,WEB:`${M}, ${O} `,HANDSET_PORTRAIT:"(orientation: portrait) and (max-width: 599.9px)",TABLET_PORTRAIT:`${S} `,WEB_PORTRAIT:`${M}`,HANDSET_LANDSCAPE:"(orientation: landscape) and (max-width: 959.9px)]",TABLET_LANDSCAPE:`${j}`,WEB_LANDSCAPE:`${O}`},Q=[{alias:"handset",priority:2e3,mediaQuery:B.HANDSET},{alias:"handset.landscape",priority:2e3,mediaQuery:B.HANDSET_LANDSCAPE},{alias:"handset.portrait",priority:2e3,mediaQuery:B.HANDSET_PORTRAIT},{alias:"tablet",priority:2100,mediaQuery:B.TABLET},{alias:"tablet.landscape",priority:2100,mediaQuery:B.TABLET},{alias:"tablet.portrait",priority:2100,mediaQuery:B.TABLET_PORTRAIT},{alias:"web",priority:2200,mediaQuery:B.WEB,overlapping:!0},{alias:"web.landscape",priority:2200,mediaQuery:B.WEB_LANDSCAPE,overlapping:!0},{alias:"web.portrait",priority:2200,mediaQuery:B.WEB_PORTRAIT,overlapping:!0}],I=/(\.|-|_)/g;function L(t){let e=t.length>0?t.charAt(0):"",i=t.length>1?t.slice(1):"";return e.toUpperCase()+i}const V=new s.o("Token (@angular/flex-layout) Breakpoints",{providedIn:"root",factory:()=>{const t=Object(s.U)(x),e=Object(s.U)(m),i=[].concat.apply([],(t||[]).map(t=>Array.isArray(t)?t:[t]));return function(t,e=[]){const i={};return t.forEach(t=>{i[t.alias]=t}),e.forEach(t=>{i[t.alias]?function(t,...e){if(null==t)throw TypeError("Cannot convert undefined or null to object");for(let i of e)if(null!=i)for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e])}(i[t.alias],t):i[t.alias]=t}),(s=Object.keys(i).map(t=>i[t])).forEach(t=>{t.suffix||(t.suffix=function(t){return t.replace(I,"|").split("|").map(L).join("")}(t.alias),t.overlapping=!!t.overlapping)}),s;var s}((e.disableDefaultBps?[]:A).concat(e.addOrientationBps?Q:[]),i)}});function T(t,e){return(e&&e.priority||0)-(t&&t.priority||0)}function P(t,e){return(t.priority||0)-(e.priority||0)}let _=(()=>{class t{constructor(t){this.findByMap=new Map,this.items=[...t].sort(P)}findByAlias(t){return t?this.findWithPredicate(t,e=>e.alias==t):null}findByQuery(t){return this.findWithPredicate(t,e=>e.mediaQuery==t)}get overlappings(){return this.items.filter(t=>1==t.overlapping)}get aliases(){return this.items.map(t=>t.alias)}get suffixes(){return this.items.map(t=>t.suffix?t.suffix:"")}findWithPredicate(t,e){let i=this.findByMap.get(t);return i||(i=this.items.find(e)||null,this.findByMap.set(t,i)),i||null}}return t.ngInjectableDef=Object(s.Pb)({factory:function(){return new t(Object(s.Qb)(V))},token:t,providedIn:"root"}),t})(),D=(()=>{class t{constructor(t,e,i){this._zone=t,this._platformId=e,this._document=i,this.source=new a.a(new f(!0)),this.registry=new Map,this._observable$=this.source.asObservable()}get activations(){const t=[];return this.registry.forEach((e,i)=>{e.matches&&t.push(i)}),t}isActive(t){const e=this.registry.get(t);return!!e&&e.matches}observe(t,e=!1){if(t&&t.length){const i=this._observable$.pipe(Object(c.a)(i=>!e||t.indexOf(i.mediaQuery)>-1)),s=new l.a(e=>{const i=this.registerQuery(t);if(i.length){const t=i.pop();i.forEach(t=>{e.next(t)}),this.source.next(t)}e.complete()});return Object(o.a)(s,i)}return this._observable$}registerQuery(t){const e=Array.isArray(t)?t:[t],i=[];return function(t,e){const i=t.filter(t=>!R[t]);if(i.length>0){const t=i.join(", ");try{const s=e.createElement("style");s.setAttribute("type","text/css"),s.styleSheet||s.appendChild(e.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${t} {.fx-query-test{ }}\n`)),e.head.appendChild(s),i.forEach(t=>R[t]=s)}catch(s){console.error(s)}}}(e,this._document),e.forEach(t=>{let e=this.registry.get(t);e||((e=this.buildMQL(t)).addListener(e=>{this._zone.run(()=>this.source.next(new f(e.matches,t)))}),this.registry.set(t,e)),e.matches&&i.push(new f(!0,t))}),i}buildMQL(t){return function(t,e){return e&&window.matchMedia("all").addListener?window.matchMedia(t):{matches:"all"===t||""===t,media:t,addListener:()=>{},removeListener:()=>{}}}(t,Object(n.s)(this._platformId))}}return t.ngInjectableDef=Object(s.Pb)({factory:function(){return new t(Object(s.Qb)(s.x),Object(s.Qb)(s.z),Object(s.Qb)(n.c))},token:t,providedIn:"root"}),t})();const R={},W="print",N={alias:W,mediaQuery:W,priority:1e3};let K=(()=>{class t{constructor(t,e){this.breakpoints=t,this.layoutConfig=e,this.isPrinting=!1,this.queue=new $,this.deactivations=[]}withPrintQuery(t){return[...t,W]}isPrintEvent(t){return t.mediaQuery.startsWith(W)}get printAlias(){return this.layoutConfig.printWithBreakpoints||[]}get printBreakPoints(){return this.printAlias.map(t=>this.breakpoints.findByAlias(t)).filter(t=>null!==t)}getEventBreakpoints({mediaQuery:t}){const e=this.breakpoints.findByQuery(t);return(e?[...this.printBreakPoints,e]:this.printBreakPoints).sort(T)}updateEvent(t){let e=this.breakpoints.findByQuery(t.mediaQuery);return this.isPrintEvent(t)&&(e=this.getEventBreakpoints(t)[0],t.mediaQuery=e?e.mediaQuery:""),w(t,e)}interceptEvents(t){return e=>{this.isPrintEvent(e)?e.matches&&!this.isPrinting?(this.startPrinting(t,this.getEventBreakpoints(e)),t.updateStyles()):!e.matches&&this.isPrinting&&(this.stopPrinting(t),t.updateStyles()):this.collectActivations(e)}}blockPropagation(){return t=>!(this.isPrinting||this.isPrintEvent(t))}startPrinting(t,e){this.isPrinting=!0,t.activatedBreakpoints=this.queue.addPrintBreakpoints(e)}stopPrinting(t){t.activatedBreakpoints=this.deactivations,this.deactivations=[],this.queue.clear(),this.isPrinting=!1}collectActivations(t){if(!this.isPrinting)if(t.matches)this.deactivations=[];else{const e=this.breakpoints.findByQuery(t.mediaQuery);e&&(this.deactivations.push(e),this.deactivations.sort(T))}}}return t.ngInjectableDef=Object(s.Pb)({factory:function(){return new t(Object(s.Qb)(_),Object(s.Qb)(m))},token:t,providedIn:"root"}),t})();class ${constructor(){this.printBreakpoints=[]}addPrintBreakpoints(t){return t.push(N),t.sort(T),t.forEach(t=>this.addBreakpoint(t)),this.printBreakpoints}addBreakpoint(t){t&&void 0===this.printBreakpoints.find(e=>e.mediaQuery===t.mediaQuery)&&(this.printBreakpoints=function(t){return!!t&&t.mediaQuery.startsWith(W)}(t)?[t,...this.printBreakpoints]:[...this.printBreakpoints,t])}clear(){this.printBreakpoints=[]}}function Y(t){for(let e in t){let i=t[e]||"";switch(e){case"display":t.display="flex"===i?["-webkit-flex","flex"]:"inline-flex"===i?["-webkit-inline-flex","inline-flex"]:i;break;case"align-items":case"align-self":case"align-content":case"flex":case"flex-basis":case"flex-flow":case"flex-grow":case"flex-shrink":case"flex-wrap":case"justify-content":t["-webkit-"+e]=i;break;case"flex-direction":t["-webkit-flex-direction"]=i=i||"row",t["flex-direction"]=i;break;case"order":t.order=t["-webkit-"+e]=isNaN(+i)?"0":i}}return t}let q=(()=>{class t{constructor(t,e,i,s){this._serverStylesheet=t,this._serverModuleLoaded=e,this._platformId=i,this.layoutConfig=s}applyStyleToElement(t,e,i=null){let s={};"string"==typeof e&&(s[e]=i,e=s),s=this.layoutConfig.disableVendorPrefixes?e:Y(e),this._applyMultiValueStyleToElement(s,t)}applyStyleToElements(t,e=[]){const i=this.layoutConfig.disableVendorPrefixes?t:Y(t);e.forEach(t=>{this._applyMultiValueStyleToElement(i,t)})}getFlowDirection(t){let e=this.lookupStyle(t,"flex-direction");return[e||"row",this.lookupInlineStyle(t,"flex-direction")||Object(n.t)(this._platformId)&&this._serverModuleLoaded?e:""]}lookupAttributeValue(t,e){return t.getAttribute(e)||""}lookupInlineStyle(t,e){return Object(n.s)(this._platformId)?t.style.getPropertyValue(e):this._getServerStyle(t,e)}lookupStyle(t,e,i=!1){let s="";return t&&((s=this.lookupInlineStyle(t,e))||(Object(n.s)(this._platformId)?i||(s=getComputedStyle(t).getPropertyValue(e)):this._serverModuleLoaded&&(s=this._serverStylesheet.getStyleForElement(t,e)))),s?s.trim():""}_applyMultiValueStyleToElement(t,e){Object.keys(t).sort().forEach(i=>{const s=t[i],r=Array.isArray(s)?s:[s];r.sort();for(let t of r)t=t?t+"":"",Object(n.s)(this._platformId)||!this._serverModuleLoaded?Object(n.s)(this._platformId)?e.style.setProperty(i,t):this._setServerStyle(e,i,t):this._serverStylesheet.addStyleToElement(e,i,t)})}_setServerStyle(t,e,i){e=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();const s=this._readStyleAttribute(t);s[e]=i||"",this._writeStyleAttribute(t,s)}_getServerStyle(t,e){return this._readStyleAttribute(t)[e]||""}_readStyleAttribute(t){const e={},i=t.getAttribute("style");if(i){const t=i.split(/;+/g);for(let i=0;i<t.length;i++){const s=t[i].trim();if(s.length>0){const t=s.indexOf(":");if(-1===t)throw new Error(`Invalid CSS style: ${s}`);e[s.substr(0,t).trim()]=s.substr(t+1).trim()}}}return e}_writeStyleAttribute(t,e){let i="";for(const s in e)e[s]&&(i+=s+":"+e[s]+";");t.setAttribute("style",i)}}return t.ngInjectableDef=Object(s.Pb)({factory:function(){return new t(Object(s.Qb)(y,8),Object(s.Qb)(b,8),Object(s.Qb)(s.z),Object(s.Qb)(m))},token:t,providedIn:"root"}),t})();class z{constructor(){this.shouldCache=!0}sideEffect(t,e,i){}}function F(t,e="1",i="1"){let s=[e,i,t],n=t.indexOf("calc");if(n>0){s[2]=J(t.substring(n).trim());let e=t.substr(0,n).trim().split(" ");2==e.length&&(s[0]=e[0],s[1]=e[1])}else if(0==n)s[2]=J(t.trim());else{let n=t.split(" ");s=3===n.length?n:[e,i,t]}return s}function J(t){return t.replace(/[\s]/g,"").replace(/[\/\*\+\-]/g," $& ")}let U=(()=>{class t{constructor(t,e,i){this.matchMedia=t,this.breakpoints=e,this.hook=i,this.activatedBreakpoints=[],this.elementMap=new Map,this.elementKeyMap=new WeakMap,this.watcherMap=new WeakMap,this.updateMap=new WeakMap,this.clearMap=new WeakMap,this.subject=new r.a,this.observeActivations()}get activatedAlias(){return this.activatedBreakpoints[0]?this.activatedBreakpoints[0].alias:""}onMediaChange(t){const e=this.findByQuery(t.mediaQuery);e&&((t=w(t,e)).matches&&-1===this.activatedBreakpoints.indexOf(e)?(this.activatedBreakpoints.push(e),this.activatedBreakpoints.sort(T),this.updateStyles()):t.matches||-1===this.activatedBreakpoints.indexOf(e)||(this.activatedBreakpoints.splice(this.activatedBreakpoints.indexOf(e),1),this.activatedBreakpoints.sort(T),this.updateStyles()))}init(t,e,i,s,n=[]){H(this.updateMap,t,e,i),H(this.clearMap,t,e,s),this.buildElementKeyMap(t,e),this.watchExtraTriggers(t,e,n)}getValue(t,e,i){const s=this.elementMap.get(t);if(s){const t=void 0!==i?s.get(i):this.getActivatedValues(s,e);if(t)return t.get(e)}}hasValue(t,e){const i=this.elementMap.get(t);if(i){const t=this.getActivatedValues(i,e);if(t)return void 0!==t.get(e)||!1}return!1}setValue(t,e,i,s){let n=this.elementMap.get(t);if(n){const r=(n.get(s)||new Map).set(e,i);n.set(s,r),this.elementMap.set(t,n)}else n=(new Map).set(s,(new Map).set(e,i)),this.elementMap.set(t,n);const r=this.getValue(t,e);void 0!==r&&this.updateElement(t,e,r)}trackValue(t,e){return this.subject.asObservable().pipe(Object(c.a)(i=>i.element===t&&i.key===e))}updateStyles(){this.elementMap.forEach((t,e)=>{const i=new Set(this.elementKeyMap.get(e));let s=this.getActivatedValues(t);s&&s.forEach((t,s)=>{this.updateElement(e,s,t),i.delete(s)}),i.forEach(i=>{if(s=this.getActivatedValues(t,i)){const t=s.get(i);this.updateElement(e,i,t)}else this.clearElement(e,i)})})}clearElement(t,e){const i=this.clearMap.get(t);if(i){const s=i.get(e);s&&(s(),this.subject.next({element:t,key:e,value:""}))}}updateElement(t,e,i){const s=this.updateMap.get(t);if(s){const n=s.get(e);n&&(n(i),this.subject.next({element:t,key:e,value:i}))}}releaseElement(t){const e=this.watcherMap.get(t);e&&(e.forEach(t=>t.unsubscribe()),this.watcherMap.delete(t));const i=this.elementMap.get(t);i&&(i.forEach((t,e)=>i.delete(e)),this.elementMap.delete(t))}triggerUpdate(t,e){const i=this.elementMap.get(t);if(i){const s=this.getActivatedValues(i,e);s&&(e?this.updateElement(t,e,s.get(e)):s.forEach((e,i)=>this.updateElement(t,i,e)))}}buildElementKeyMap(t,e){let i=this.elementKeyMap.get(t);i||(i=new Set,this.elementKeyMap.set(t,i)),i.add(e)}watchExtraTriggers(t,e,i){if(i&&i.length){let s=this.watcherMap.get(t);if(s||(s=new Map,this.watcherMap.set(t,s)),!s.get(e)){const n=Object(o.a)(...i).subscribe(()=>{const i=this.getValue(t,e);this.updateElement(t,e,i)});s.set(e,n)}}}findByQuery(t){return this.breakpoints.findByQuery(t)}getActivatedValues(t,e){for(let s=0;s<this.activatedBreakpoints.length;s++){const i=t.get(this.activatedBreakpoints[s].alias);if(i&&(void 0===e||i.has(e)))return i}const i=t.get("");return void 0===e||i&&i.has(e)?i:void 0}observeActivations(){const t=this.breakpoints.items.map(t=>t.mediaQuery);this.matchMedia.observe(this.hook.withPrintQuery(t)).pipe(Object(u.a)(this.hook.interceptEvents(this)),Object(c.a)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this))}}return t.ngInjectableDef=Object(s.Pb)({factory:function(){return new t(Object(s.Qb)(D),Object(s.Qb)(_),Object(s.Qb)(K))},token:t,providedIn:"root"}),t})();function H(t,e,i,s){if(void 0!==s){let n=t.get(e);n||(n=new Map,t.set(e,n)),n.set(i,s)}}},"1G5W":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var s=i("l7GE"),n=i("ZUHj");function r(t){return e=>e.lift(new a(t))}class a{constructor(t){this.notifier=t}call(t,e){const i=new l(t),s=Object(n.a)(i,this.notifier);return s&&!i.seenValue?(i.add(s),e.subscribe(i)):i}}class l extends s.a{constructor(t){super(t),this.seenValue=!1}notifyNext(t,e,i,s,n){this.seenValue=!0,this.complete()}notifyComplete(){}}},IP0z:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i("SVse"),i("8Y7J");let s=(()=>(class{}))()},KCVW:function(t,e,i){"use strict";function s(t){return null!=t&&"false"!==`${t}`}i.d(e,"a",(function(){return s})),i("8Y7J")},MfXf:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));class s{}},Nhcz:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i("8Y7J"),i("/q54"),i("KCVW");let s=(()=>(class{}))()},VDRc:function(t,e,i){"use strict";i.d(e,"c",(function(){return M})),i.d(e,"e",(function(){return h})),i.d(e,"b",(function(){return f})),i.d(e,"d",(function(){return g})),i.d(e,"a",(function(){return x}));var s=i("8Y7J"),n=i("/q54"),r=(i("XNiG"),i("1G5W"));const a="inline",l=["row","column","row-reverse","column-reverse"];function o(t){t=t?t.toLowerCase():"";let[e,i,s]=t.split(" ");return l.find(t=>t===e)||(e=l[0]),i===a&&(i=s!==a?s:"",s=a),[e,u(i),!!s]}function c(t){let[e]=o(t);return e.indexOf("row")>-1}function u(t){if(t)switch(t.toLowerCase()){case"reverse":case"wrap-reverse":case"reverse-wrap":t="wrap-reverse";break;case"no":case"none":case"nowrap":t="nowrap";break;default:t="wrap"}return t}let h=(()=>{class t extends n.h{buildStyles(t){return function(t){let[e,i,s]=o(t);return function(t,e=null,i=!1){return{display:i?"inline-flex":"flex","box-sizing":"border-box","flex-direction":t,"flex-wrap":e||null}}(e,i,s)}(t)}}return t.ngInjectableDef=Object(s.Pb)({factory:function(){return new t},token:t,providedIn:"root"}),t})();const d=["fxLayout","fxLayout.xs","fxLayout.sm","fxLayout.md","fxLayout.lg","fxLayout.xl","fxLayout.lt-sm","fxLayout.lt-md","fxLayout.lt-lg","fxLayout.lt-xl","fxLayout.gt-xs","fxLayout.gt-sm","fxLayout.gt-md","fxLayout.gt-lg"];let p=(()=>(class extends n.b{constructor(t,e,i,s){super(t,i,e,s),this.elRef=t,this.styleUtils=e,this.styleBuilder=i,this.marshal=s,this.DIRECTIVE_KEY="layout",this.styleCache=y,this.init()}}))(),f=(()=>(class extends p{constructor(){super(...arguments),this.inputs=d}}))();const y=new Map;let g=(()=>{class t extends n.h{buildStyles(t,e){const i={},[s,n]=t.split(" ");switch(s){case"center":i["justify-content"]="center";break;case"space-around":i["justify-content"]="space-around";break;case"space-between":i["justify-content"]="space-between";break;case"space-evenly":i["justify-content"]="space-evenly";break;case"end":case"flex-end":i["justify-content"]="flex-end";break;case"start":case"flex-start":default:i["justify-content"]="flex-start"}switch(n){case"start":case"flex-start":i["align-items"]=i["align-content"]="flex-start";break;case"center":i["align-items"]=i["align-content"]="center";break;case"end":case"flex-end":i["align-items"]=i["align-content"]="flex-end";break;case"space-between":i["align-content"]="space-between",i["align-items"]="stretch";break;case"space-around":i["align-content"]="space-around",i["align-items"]="stretch";break;case"baseline":i["align-content"]="stretch",i["align-items"]="baseline";break;case"stretch":default:i["align-items"]=i["align-content"]="stretch"}return function(t,...e){if(null==t)throw TypeError("Cannot convert undefined or null to object");for(let i of e)if(null!=i)for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}(i,{display:e.inline?"inline-flex":"flex","flex-direction":e.layout,"box-sizing":"border-box","max-width":"stretch"===n?c(e.layout)?null:"100%":null,"max-height":"stretch"===n&&c(e.layout)?"100%":null})}}return t.ngInjectableDef=Object(s.Pb)({factory:function(){return new t},token:t,providedIn:"root"}),t})();const m=["fxLayoutAlign","fxLayoutAlign.xs","fxLayoutAlign.sm","fxLayoutAlign.md","fxLayoutAlign.lg","fxLayoutAlign.xl","fxLayoutAlign.lt-sm","fxLayoutAlign.lt-md","fxLayoutAlign.lt-lg","fxLayoutAlign.lt-xl","fxLayoutAlign.gt-xs","fxLayoutAlign.gt-sm","fxLayoutAlign.gt-md","fxLayoutAlign.gt-lg"];let b=(()=>(class extends n.b{constructor(t,e,i,s){super(t,i,e,s),this.elRef=t,this.styleUtils=e,this.styleBuilder=i,this.marshal=s,this.DIRECTIVE_KEY="layout-align",this.layout="row",this.inline=!1,this.init(),this.marshal.trackValue(this.nativeElement,"layout").pipe(Object(r.a)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this))}updateWithValue(t){const e=this.layout||"row",i=this.inline;"row"===e&&i?this.styleCache=C:"row"!==e||i?"row-reverse"===e&&i?this.styleCache=S:"row-reverse"!==e||i?"column"===e&&i?this.styleCache=A:"column"!==e||i?"column-reverse"===e&&i?this.styleCache=j:"column-reverse"!==e||i||(this.styleCache=k):this.styleCache=v:this.styleCache=E:this.styleCache=w,this.addStyles(t,{layout:e,inline:i})}onLayoutChange(t){const e=t.value.split(" ");this.layout=e[0],this.inline=t.value.includes("inline"),l.find(t=>t===this.layout)||(this.layout="row"),this.triggerUpdate()}}))(),x=(()=>(class extends b{constructor(){super(...arguments),this.inputs=m}}))();const w=new Map,v=new Map,E=new Map,k=new Map,C=new Map,A=new Map,S=new Map,j=new Map;let M=(()=>(class{}))()},kCW2:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));class s{}},u9T3:function(t,e,i){"use strict";i.d(e,"a",(function(){return r})),i("8Y7J");var s=i("SVse"),n=i("/q54");let r=(()=>{class t{constructor(t,e){Object(s.t)(e)&&!t&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}static withConfig(e,i=[]){return{ngModule:t,providers:e.serverLoaded?[{provide:n.e,useValue:Object.assign({},n.d,e)},{provide:n.a,useValue:i,multi:!0},{provide:n.g,useValue:!0}]:[{provide:n.e,useValue:Object.assign({},n.d,e)},{provide:n.a,useValue:i,multi:!0}]}}}return t})()},ura0:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return l})),i("8Y7J");var s=i("SVse"),n=i("/q54");i("KCVW"),i("1G5W");let r=(()=>(class extends n.b{constructor(t,e,i,n,r){super(t,null,e,i),this.elementRef=t,this.styler=e,this.marshal=i,this.delegate=n,this.ngClassInstance=r,this.DIRECTIVE_KEY="ngClass",this.ngClassInstance||(this.ngClassInstance=new s.h(this.delegate)),this.init(),this.setValue("","")}set klass(t){this.ngClassInstance.klass=t,this.setValue(t,"")}updateWithValue(t){this.ngClassInstance.ngClass=t,this.ngClassInstance.ngDoCheck()}ngDoCheck(){this.ngClassInstance.ngDoCheck()}}))();const a=["ngClass","ngClass.xs","ngClass.sm","ngClass.md","ngClass.lg","ngClass.xl","ngClass.lt-sm","ngClass.lt-md","ngClass.lt-lg","ngClass.lt-xl","ngClass.gt-xs","ngClass.gt-sm","ngClass.gt-md","ngClass.gt-lg"];let l=(()=>(class extends r{constructor(){super(...arguments),this.inputs=a}}))(),o=(()=>(class{}))()}}]);