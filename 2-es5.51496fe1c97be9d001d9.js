function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{Nhcz:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n("8Y7J"),n("/q54"),n("KCVW");var r=function(){}},u9T3:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n("8Y7J");var r=n("SVse"),i=n("/q54"),u=function(){function t(t,e){Object(r.C)(e)&&!t&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}return t.withConfig=function(e,n){return void 0===n&&(n=[]),{ngModule:t,providers:e.serverLoaded?[{provide:i.e,useValue:Object.assign({},i.d,e)},{provide:i.a,useValue:n,multi:!0},{provide:i.g,useValue:!0}]:[{provide:i.e,useValue:Object.assign({},i.d,e)},{provide:i.a,useValue:n,multi:!0}]}},t}()},ura0:function(t,e,n){"use strict";n.d(e,"b",function(){return p}),n.d(e,"a",function(){return g});var r=n("8Y7J"),i=n("SVse"),u=n("/q54");n("KCVW"),n("1G5W");var l=function(t,e,n){void 0===n&&(n=!0),this.key=t,this.value=e,this.key=n?t.replace(/['"]/g,"").trim():t.trim(),this.value=n?e.replace(/['"]/g,"").trim():e.trim(),this.value=this.value.replace(/;/,"")};function a(t){var e=typeof t;return"object"===e?t.constructor===Array?"array":t.constructor===Set?"set":"object":e}function s(t){var e=t.split(":"),n=e[0],r=e.slice(1);return new l(n,r.join(":"))}function o(t,e){return e.key&&(t[e.key]=e.value),t}var c=function(t){function e(e,n,r,u,l,a,s,o){var c;(c=t.call(this,e,null,n,r)||this).elementRef=e,c.styler=n,c.marshal=r,c.delegate=u,c.sanitizer=l,c.ngStyleInstance=a,c.DIRECTIVE_KEY="ngStyle",c.ngStyleInstance||(c.ngStyleInstance=new i.p(c.delegate)),c.init();var y=c.nativeElement.getAttribute("style")||"";return c.fallbackStyles=c.buildStyleMap(y),c.isServer=s&&Object(i.C)(o),c}_inheritsLoose(e,t);var n=e.prototype;return n.updateWithValue=function(t){var e=this.buildStyleMap(t);this.ngStyleInstance.ngStyle=Object.assign({},this.fallbackStyles,e),this.isServer&&this.applyStyleToElement(e),this.ngStyleInstance.ngDoCheck()},n.clearStyles=function(){this.ngStyleInstance.ngStyle=this.fallbackStyles,this.ngStyleInstance.ngDoCheck()},n.buildStyleMap=function(t){var e,n,i,u,l=this,c=function(t){return l.sanitizer.sanitize(r.H.STYLE,t)||""};if(t)switch(a(t)){case"string":return f((void 0===u&&(u=";"),String(t).trim().split(u).map(function(t){return t.trim()}).filter(function(t){return""!==t})),c);case"array":return f(t,c);case"set":default:return n=c,i=[],"set"===a(e=t)?e.forEach(function(t){return i.push(t)}):Object.keys(e).forEach(function(t){i.push(t+":"+e[t])}),function(t,e){return i.map(s).filter(function(t){return!!t}).map(function(t){return e&&(t.value=e(t.value)),t}).reduce(o,{})}(0,n)}return{}},n.ngDoCheck=function(){this.ngStyleInstance.ngDoCheck()},e}(u.b),y=["ngStyle","ngStyle.xs","ngStyle.sm","ngStyle.md","ngStyle.lg","ngStyle.xl","ngStyle.lt-sm","ngStyle.lt-md","ngStyle.lt-lg","ngStyle.lt-xl","ngStyle.gt-xs","ngStyle.gt-sm","ngStyle.gt-md","ngStyle.gt-lg"],g=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).inputs=y,e}return _inheritsLoose(e,t),e}(c);function f(t,e){return t.map(s).filter(function(t){return!!t}).map(function(t){return e&&(t.value=e(t.value)),t}).reduce(o,{})}var p=function(){}}}]);