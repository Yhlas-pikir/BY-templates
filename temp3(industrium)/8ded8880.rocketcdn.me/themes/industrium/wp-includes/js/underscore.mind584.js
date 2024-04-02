/*! This file is auto-generated */
!function(n,r){var t,e;"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,t=n._,(e=n._=r()).noConflict=function(){return n._=t,e})}(this,function(){var n="1.13.6",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},e=Array.prototype,F=Object.prototype,V="undefined"!=typeof Symbol?Symbol.prototype:null,P=e.push,f=e.slice,s=F.toString,q=F.hasOwnProperty,t="undefined"!=typeof ArrayBuffer,u="undefined"!=typeof DataView,U=Array.isArray,W=Object.keys,z=Object.create,L=t&&ArrayBuffer.isView,$=isNaN,C=isFinite,K=!{toString:null}.propertyIsEnumerable("toString"),J=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],G=Math.pow(2,53)-1;function l(u,o){return o=null==o?u.length-1:+o,function(){for(var n=Math.max(arguments.length-o,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+o];switch(o){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}for(var e=Array(o+1),t=0;t<o;t++)e[t]=arguments[t];return e[o]=r,u.apply(this,e)}}function o(n){var r=typeof n;return"function"==r||"object"==r&&!!n}function H(n){return void 0===n}function Q(n){return!0===n||!1===n||"[object Boolean]"===s.call(n)}function i(n){var r="[object "+n+"]";return function(n){return s.call(n)===r}}var X=i("String"),Y=i("Number"),Z=i("Date"),nn=i("RegExp"),rn=i("Error"),tn=i("Symbol"),en=i("ArrayBuffer"),a=i("Function"),r=r.document&&r.document.childNodes,p=a="function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof r?function(n){return"function"==typeof n||!1}:a,r=i("Object"),un=u&&r(new DataView(new ArrayBuffer(8))),a="undefined"!=typeof Map&&r(new Map),u=i("DataView");var h=un?function(n){return null!=n&&p(n.getInt8)&&en(n.buffer)}:u,v=U||i("Array");function y(n,r){return null!=n&&q.call(n,r)}var on=i("Arguments"),an=(!function(){on(arguments)||(on=function(n){return y(n,"callee")})}(),on);function fn(n){return Y(n)&&$(n)}function cn(n){return function(){return n}}function ln(r){return function(n){n=r(n);return"number"==typeof n&&0<=n&&n<=G}}function sn(r){return function(n){return null==n?void 0:n[r]}}var d=sn("byteLength"),pn=ln(d),hn=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var vn=t?function(n){return L?L(n)&&!h(n):pn(n)&&hn.test(s.call(n))}:cn(!1),g=sn("length");function yn(n,r){r=function(r){for(var t={},n=r.length,e=0;e<n;++e)t[r[e]]=!0;return{contains:function(n){return!0===t[n]},push:function(n){return t[n]=!0,r.push(n)}}}(r);var t=J.length,e=n.constructor,u=p(e)&&e.prototype||F,o="constructor";for(y(n,o)&&!r.contains(o)&&r.push(o);t--;)(o=J[t])in n&&n[o]!==u[o]&&!r.contains(o)&&r.push(o)}function b(n){if(!o(n))return[];if(W)return W(n);var r,t=[];for(r in n)y(n,r)&&t.push(r);return K&&yn(n,t),t}function dn(n,r){var t=b(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function m(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)}function gn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,d(n))}m.VERSION=n,m.prototype.valueOf=m.prototype.toJSON=m.prototype.value=function(){return this._wrapped},m.prototype.toString=function(){return String(this._wrapped)};var bn="[object DataView]";function mn(n,r,t,e){var u;return n===r?0!==n||1/n==1/r:null!=n&&null!=r&&(n!=n?r!=r:("function"==(u=typeof n)||"object"==u||"object"==typeof r)&&function n(r,t,e,u){r instanceof m&&(r=r._wrapped);t instanceof m&&(t=t._wrapped);var o=s.call(r);if(o!==s.call(t))return!1;if(un&&"[object Object]"==o&&h(r)){if(!h(t))return!1;o=bn}switch(o){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return V.valueOf.call(r)===V.valueOf.call(t);case"[object ArrayBuffer]":case bn:return n(gn(r),gn(t),e,u)}o="[object Array]"===o;if(!o&&vn(r)){var i=d(r);if(i!==d(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;o=!0}if(!o){if("object"!=typeof r||"object"!=typeof t)return!1;var i=r.constructor,a=t.constructor;if(i!==a&&!(p(i)&&i instanceof i&&p(a)&&a instanceof a)&&"constructor"in r&&"constructor"in t)return!1}e=e||[];u=u||[];var f=e.length;for(;f--;)if(e[f]===r)return u[f]===t;e.push(r);u.push(t);if(o){if((f=r.length)!==t.length)return!1;for(;f--;)if(!mn(r[f],t[f],e,u))return!1}else{var c,l=b(r);if(f=l.length,b(t).length!==f)return!1;for(;f--;)if(c=l[f],!y(t,c)||!mn(r[c],t[c],e,u))return!1}e.pop();u.pop();return!0}(n,r,t,e))}function c(n){if(!o(n))return[];var r,t=[];for(r in n)t.push(r);return K&&yn(n,t),t}function jn(e){var u=g(e);return function(n){if(null==n)return!1;var r=c(n);if(g(r))return!1;for(var t=0;t<u;t++)if(!p(n[e[t]]))return!1;return e!==wn||!p(n[_n])}}var _n="forEach",r=["clear","delete"],u=["get","has","set"],U=r.concat(_n,u),wn=r.concat(u),t=["add"].concat(r,_n,"has"),u=a?jn(U):i("Map"),r=a?jn(wn):i("WeakMap"),U=a?jn(t):i("Set"),a=i("WeakSet");function j(n){for(var r=b(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function An(n){for(var r={},t=b(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function xn(n){var r,t=[];for(r in n)p(n[r])&&t.push(r);return t.sort()}function Sn(f,c){return function(n){var r=arguments.length;if(c&&(n=Object(n)),!(r<2||null==n))for(var t=1;t<r;t++)for(var e=arguments[t],u=f(e),o=u.length,i=0;i<o;i++){var a=u[i];c&&void 0!==n[a]||(n[a]=e[a])}return n}}var On=Sn(c),_=Sn(b),Mn=Sn(c,!0);function En(n){var r;return o(n)?z?z(n):((r=function(){}).prototype=n,n=new r,r.prototype=null,n):{}}function Bn(n){return v(n)?n:[n]}function w(n){return m.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){n=Nn(n,w(r));return H(n)?t:n}function Tn(n){return n}function A(r){return r=_({},r),function(n){return dn(n,r)}}function kn(r){return r=w(r),function(n){return Nn(n,r)}}function x(u,o,n){if(void 0===o)return u;switch(null==n?3:n){case 1:return function(n){return u.call(o,n)};case 3:return function(n,r,t){return u.call(o,n,r,t)};case 4:return function(n,r,t,e){return u.call(o,n,r,t,e)}}return function(){return u.apply(o,arguments)}}function Dn(n,r,t){return null==n?Tn:p(n)?x(n,r,t):(o(n)&&!v(n)?A:kn)(n)}function Rn(n,r){return Dn(n,r,1/0)}function S(n,r,t){return m.iteratee!==Rn?m.iteratee(n,r):Dn(n,r,t)}function Fn(){}function Vn(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}m.toPath=Bn,m.iteratee=Rn;var O=Date.now||function(){return(new Date).getTime()};function Pn(r){function t(n){return r[n]}var n="(?:"+b(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,t):n}}var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},qn=Pn(t),t=Pn(An(t)),Un=m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Wn=/(.)^/,zn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Ln=/\\|'|\r|\n|\u2028|\u2029/g;function $n(n){return"\\"+zn[n]}var Cn=/^\s*(\w|\$)+\s*$/;var Kn=0;function Jn(n,r,t,e,u){return e instanceof r?(e=En(n.prototype),o(r=n.apply(e,u))?r:e):n.apply(t,u)}var M=l(function(u,o){function i(){for(var n=0,r=o.length,t=Array(r),e=0;e<r;e++)t[e]=o[e]===a?arguments[n++]:o[e];for(;n<arguments.length;)t.push(arguments[n++]);return Jn(u,i,this,this,t)}var a=M.placeholder;return i}),Gn=(M.placeholder=m,l(function(r,t,e){var u;if(p(r))return u=l(function(n){return Jn(r,u,t,this,e.concat(n))});throw new TypeError("Bind must be called on a function")})),E=ln(g);function B(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=g(n);o<i;o++){var a=n[o];if(E(a)&&(v(a)||an(a)))if(1<r)B(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var Hn=l(function(n,r){var t=(r=B(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=Gn(n[e],n)}return n});var Qn=l(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),Xn=M(Qn,m,1);function Yn(n){return function(){return!n.apply(this,arguments)}}function Zn(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var nr=M(Zn,2);function rr(n,r,t){r=S(r,t);for(var e,u=b(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function tr(o){return function(n,r,t){r=S(r,t);for(var e=g(n),u=0<o?0:e-1;0<=u&&u<e;u+=o)if(r(n[u],u,n))return u;return-1}}var er=tr(1),ur=tr(-1);function or(n,r,t,e){for(var u=(t=S(t,e,1))(r),o=0,i=g(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function ir(o,i,a){return function(n,r,t){var e=0,u=g(n);if("number"==typeof t)0<o?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=i(f.call(n,e,u),fn))?t+e:-1;for(t=0<o?e:u-1;0<=t&&t<u;t+=o)if(n[t]===r)return t;return-1}}var ar=ir(1,er,or),fr=ir(-1,ur);function cr(n,r,t){r=(E(n)?er:rr)(n,r,t);if(void 0!==r&&-1!==r)return n[r]}function N(n,r,t){if(r=x(r,t),E(n))for(u=0,o=n.length;u<o;u++)r(n[u],u,n);else for(var e=b(n),u=0,o=e.length;u<o;u++)r(n[e[u]],e[u],n);return n}function I(n,r,t){r=S(r,t);for(var e=!E(n)&&b(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function lr(p){return function(n,r,t,e){var u=3<=arguments.length,o=n,i=x(r,e,4),a=t,f=!E(o)&&b(o),c=(f||o).length,l=0<p?0:c-1;for(u||(a=o[f?f[l]:l],l+=p);0<=l&&l<c;l+=p){var s=f?f[l]:l;a=i(a,o[s],s,o)}return a}}var sr=lr(1),pr=lr(-1);function T(n,e,r){var u=[];return e=S(e,r),N(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u}function hr(n,r,t){r=S(r,t);for(var e=!E(n)&&b(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function vr(n,r,t){r=S(r,t);for(var e=!E(n)&&b(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function k(n,r,t,e){return E(n)||(n=j(n)),0<=ar(n,r,t="number"==typeof t&&!e?t:0)}var yr=l(function(n,t,e){var u,o;return p(t)?o=t:(t=w(t),u=t.slice(0,-1),t=t[t.length-1]),I(n,function(n){var r=o;if(!r){if(null==(n=u&&u.length?Nn(n,u):n))return;r=n[t]}return null==r?r:r.apply(n,e)})});function dr(n,r){return I(n,kn(r))}function gr(n,e,r){var t,u,o=-1/0,i=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=E(n)?n:j(n)).length;a<f;a++)null!=(t=n[a])&&o<t&&(o=t);else e=S(e,r),N(n,function(n,r,t){u=e(n,r,t),(i<u||u===-1/0&&o===-1/0)&&(o=n,i=u)});return o}var br=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function mr(n){return n?v(n)?f.call(n):X(n)?n.match(br):E(n)?I(n,Tn):j(n):[]}function jr(n,r,t){if(null==r||t)return(n=E(n)?n:j(n))[Vn(n.length-1)];for(var e=mr(n),t=g(e),u=(r=Math.max(Math.min(r,t),0),t-1),o=0;o<r;o++){var i=Vn(o,u),a=e[o];e[o]=e[i],e[i]=a}return e.slice(0,r)}function D(o,r){return function(t,e,n){var u=r?[[],[]]:{};return e=S(e,n),N(t,function(n,r){r=e(n,r,t);o(u,n,r)}),u}}var _r=D(function(n,r,t){y(n,t)?n[t].push(r):n[t]=[r]}),wr=D(function(n,r,t){n[t]=r}),Ar=D(function(n,r,t){y(n,t)?n[t]++:n[t]=1}),xr=D(function(n,r,t){n[t?0:1].push(r)},!0);function Sr(n,r,t){return r in t}var Or=l(function(n,r){var t={},e=r[0];if(null!=n){p(e)?(1<r.length&&(e=x(e,r[1])),r=c(n)):(e=Sr,r=B(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}}return t}),Mr=l(function(n,t){var r,e=t[0];return p(e)?(e=Yn(e),1<t.length&&(r=t[1])):(t=I(B(t,!1,!1),String),e=function(n,r){return!k(t,r)}),Or(n,e,r)});function Er(n,r,t){return f.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Br(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:Er(n,n.length-r)}function R(n,r,t){return f.call(n,null==r||t?1:r)}var Nr=l(function(n,r){return r=B(r,!0,!0),T(n,function(n){return!k(r,n)})}),Ir=l(function(n,r){return Nr(n,r)});function Tr(n,r,t,e){Q(r)||(e=t,t=r,r=!1),null!=t&&(t=S(t,e));for(var u=[],o=[],i=0,a=g(n);i<a;i++){var f=n[i],c=t?t(f,i,n):f;r&&!t?(i&&o===c||u.push(f),o=c):t?k(o,c)||(o.push(c),u.push(f)):k(u,f)||u.push(f)}return u}var kr=l(function(n){return Tr(B(n,!0,!0))});function Dr(n){for(var r=n&&gr(n,g).length||0,t=Array(r),e=0;e<r;e++)t[e]=dr(n,e);return t}var Rr=l(Dr);function Fr(n,r){return n._chain?m(r).chain():r}function Vr(t){return N(xn(t),function(n){var r=m[n]=t[n];m.prototype[n]=function(){var n=[this._wrapped];return P.apply(n,arguments),Fr(this,r.apply(m,n))}}),m}N(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];m.prototype[r]=function(){var n=this._wrapped;return null!=n&&(t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0]),Fr(this,n)}}),N(["concat","join","slice"],function(n){var r=e[n];m.prototype[n]=function(){var n=this._wrapped;return Fr(this,n=null!=n?r.apply(n,arguments):n)}});n=Vr({__proto__:null,VERSION:n,restArguments:l,isObject:o,isNull:function(n){return null===n},isUndefined:H,isBoolean:Q,isElement:function(n){return!(!n||1!==n.nodeType)},isString:X,isNumber:Y,isDate:Z,isRegExp:nn,isError:rn,isSymbol:tn,isArrayBuffer:en,isDataView:h,isArray:v,isFunction:p,isArguments:an,isFinite:function(n){return!tn(n)&&C(n)&&!isNaN(parseFloat(n))},isNaN:fn,isTypedArray:vn,isEmpty:function(n){var r;return null==n||("number"==typeof(r=g(n))&&(v(n)||X(n)||an(n))?0===r:0===g(b(n)))},isMatch:dn,isEqual:function(n,r){return mn(n,r)},isMap:u,isWeakMap:r,isSet:U,isWeakSet:a,keys:b,allKeys:c,values:j,pairs:function(n){for(var r=b(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:An,functions:xn,methods:xn,extend:On,extendOwn:_,assign:_,defaults:Mn,create:function(n,r){return n=En(n),r&&_(n,r),n},clone:function(n){return o(n)?v(n)?n.slice():On({},n):n},tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=w(r)).length,e=0;e<t;e++){var u=r[e];if(!y(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=S(r,t);for(var e=b(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:Tn,constant:cn,noop:Fn,toPath:Bn,property:kn,propertyOf:function(r){return null==r?Fn:function(n){return In(r,n)}},matcher:A,matches:A,times:function(n,r,t){var e=Array(Math.max(0,n));r=x(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Vn,now:O,escape:qn,unescape:t,templateSettings:Un,template:function(o,n,r){n=Mn({},n=!n&&r?r:n,m.templateSettings);var t,r=RegExp([(n.escape||Wn).source,(n.interpolate||Wn).source,(n.evaluate||Wn).source].join("|")+"|$","g"),i=0,a="__p+='";if(o.replace(r,function(n,r,t,e,u){return a+=o.slice(i,u).replace(Ln,$n),i=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",r=n.variable){if(!Cn.test(r))throw new Error("variable is not a bare identifier: "+r)}else a="with(obj||{}){\n"+a+"}\n",r="obj";a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(r,"_",a)}catch(n){throw n.source=a,n}function e(n){return t.call(this,n,m)}return e.source="function("+r+"){\n"+a+"}",e},result:function(n,r,t){var e=(r=w(r)).length;if(!e)return p(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=p(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Kn+"";return n?n+r:r},chain:function(n){return(n=m(n))._chain=!0,n},iteratee:Rn,partial:M,bind:Gn,bindAll:Hn,memoize:function(e,u){function o(n){var r=o.cache,t=""+(u?u.apply(this,arguments):n);return y(r,t)||(r[t]=e.apply(this,arguments)),r[t]}return o.cache={},o},delay:Qn,defer:Xn,throttle:function(t,e,u){function o(){l=!1===u.leading?0:O(),i=null,c=t.apply(a,f),i||(a=f=null)}function n(){var n=O(),r=(l||!1!==u.leading||(l=n),e-(n-l));return a=this,f=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(a,f),i||(a=f=null)):i||!1===u.trailing||(i=setTimeout(o,r)),c}var i,a,f,c,l=0;return u=u||{},n.cancel=function(){clearTimeout(i),l=0,i=a=f=null},n},debounce:function(r,t,e){function u(){var n=O()-i;n<t?o=setTimeout(u,t-n):(o=null,e||(f=r.apply(c,a)),o||(a=c=null))}var o,i,a,f,c,n=l(function(n){return c=this,a=n,i=O(),o||(o=setTimeout(u,t),e&&(f=r.apply(c,a))),f});return n.cancel=function(){clearTimeout(o),o=a=c=null},n},wrap:function(n,r){return M(r,n)},negate:Yn,compose:function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:Zn,once:nr,findKey:rr,findIndex:er,findLastIndex:ur,sortedIndex:or,indexOf:ar,lastIndexOf:fr,find:cr,detect:cr,findWhere:function(n,r){return cr(n,A(r))},each:N,forEach:N,map:I,collect:I,reduce:sr,foldl:sr,inject:sr,reduceRight:pr,foldr:pr,filter:T,select:T,reject:function(n,r,t){return T(n,Yn(S(r)),t)},every:hr,all:hr,some:vr,any:vr,contains:k,includes:k,include:k,invoke:yr,pluck:dr,where:function(n,r){return T(n,A(r))},max:gr,min:function(n,e,r){var t,u,o=1/0,i=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=E(n)?n:j(n)).length;a<f;a++)null!=(t=n[a])&&t<o&&(o=t);else e=S(e,r),N(n,function(n,r,t){((u=e(n,r,t))<i||u===1/0&&o===1/0)&&(o=n,i=u)});return o},shuffle:function(n){return jr(n,1/0)},sample:jr,sortBy:function(n,e,r){var u=0;return e=S(e,r),dr(I(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")},groupBy:_r,indexBy:wr,countBy:Ar,partition:xr,toArray:mr,size:function(n){return null==n?0:(E(n)?n:b(n)).length},pick:Or,omit:Mr,first:Br,head:Br,take:Br,initial:Er,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:R(n,Math.max(0,n.length-r))},rest:R,tail:R,drop:R,compact:function(n){return T(n,Boolean)},flatten:function(n,r){return B(n,r,!1)},without:Ir,uniq:Tr,unique:Tr,union:kr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=g(n);e<u;e++){var o=n[e];if(!k(r,o)){for(var i=1;i<t&&k(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Nr,unzip:Dr,transpose:Dr,zip:Rr,object:function(n,r){for(var t={},e=0,u=g(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t=t||(r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(f.call(n,e,e+=r));return t},mixin:Vr,default:m});return n._=n});