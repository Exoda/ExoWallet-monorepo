(this.webpackJsonp=this.webpackJsonp||[]).push([[81],{3079:function(t,n){function r(t){return 41+(t.script?t.script.length:107)}function e(t){return 9+(t.script?t.script.length:25)}function u(t,n){return 3*r({})}function i(t,n){return 10+t.reduce((function(t,n){return t+r(n)}),0)+n.reduce((function(t,n){return t+e(n)}),0)}function c(t){return"number"!==typeof t?NaN:isFinite(t)?Math.floor(t)!==t||t<0?NaN:t:NaN}function o(t){return t.reduce((function(t,n){return t+c(n.value)}),0)}var f=e({});t.exports={dustThreshold:u,finalize:function(t,n,r){var e=i(t,n),c=r*(e+f),a=o(t)-(o(n)+c);a>u()&&(n=n.concat({value:a}));var s=o(t)-o(n);return isFinite(s)?{inputs:t,outputs:n,fee:s}:{fee:r*e}},inputBytes:r,outputBytes:e,sumOrNaN:o,sumForgiving:function(t){return t.reduce((function(t,n){return t+(isFinite(n.value)?n.value:0)}),0)},transactionBytes:i,uintOrNaN:c}},3157:function(t,n,r){var e=r(3079);t.exports=function(t,n,r){if(!isFinite(e.uintOrNaN(r)))return{};for(var u=e.transactionBytes([],n),i=0,c=[],o=e.sumOrNaN(n),f=0;f<t.length;++f){var a=t[f],s=e.inputBytes(a),l=r*s,p=e.uintOrNaN(a.value);if(l>a.value){if(f===t.length-1)return{fee:r*(u+s)}}else if(u+=s,i+=p,c.push(a),!(i<o+r*u))return e.finalize(c,n,r)}return{fee:r*u}}},3158:function(t,n,r){var e=r(3079);t.exports=function(t,n,r){if(!isFinite(e.uintOrNaN(r)))return{};for(var u=e.transactionBytes([],n),i=0,c=[],o=e.sumOrNaN(n),f=e.dustThreshold({},r),a=0;a<t.length;++a){var s=t[a],l=e.inputBytes(s),p=r*(u+l),v=e.uintOrNaN(s.value);if(!(i+v>o+p+f)&&(u+=l,i+=v,c.push(s),!(i<o+p)))return e.finalize(c,n,r)}return{fee:r*u}}},3228:function(t,n,r){var e=r(3157),u=r(3158),i=r(3079);function c(t,n){return t.value-n*i.inputBytes(t)}t.exports=function(t,n,r){t=t.concat().sort((function(t,n){return c(n,r)-c(t,r)}));var i=u(t,n,r);return i.inputs?i:e(t,n,r)}},3229:function(t,n,r){var e=r(3079);t.exports=function(t,n,r){if(!isFinite(e.uintOrNaN(r)))return{};var u=e.transactionBytes(t,n),i=r*u;if(0===n.length)return{fee:i};var c=e.sumOrNaN(t)-e.sumForgiving(n)-i;if(!isFinite(c)||c<0)return{fee:i};var o=n.reduce((function(t,n){return t+!isFinite(n.value)}),0);if(0===c&&0===o)return e.finalize(t,n,r);var f=n.reduce((function(t,n){return t+!n.value}),0),a=Math.floor(c/f);return n.every((function(t){return void 0!==t.value||a>e.dustThreshold(t,r)}))?(n=n.map((function(t){if(void 0!==t.value)return t;var n={};for(var r in t)n[r]=t[r];return n.value=a,n})),e.finalize(t,n,r)):{fee:i}}},5189:function(t,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return x}));var e=r(6),u=r.n(e),i=r(9),c=r.n(i),o=r(12),f=r.n(o),a=r(5),s=r.n(a),l=r(3334),p=r(14);function v(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=s()(t);if(n){var u=s()(this).constructor;r=Reflect.construct(e,arguments,u)}else r=e.apply(this,arguments);return f()(this,r)}}var h=function(t){c()(r,t);var n=v(r);function r(){return n.apply(this,arguments)}return u()(r)}(r(3335).a);function y(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=s()(t);if(n){var u=s()(this).constructor;r=Reflect.construct(e,arguments,u)}else r=e.apply(this,arguments);return f()(this,r)}}var d=function(t){c()(r,t);var n=y(r);function r(){return n.apply(this,arguments)}return u()(r)}(r(3336).a);function N(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=s()(t);if(n){var u=s()(this).constructor;r=Reflect.construct(e,arguments,u)}else r=e.apply(this,arguments);return f()(this,r)}}var R=function(t){c()(r,t);var n=N(r);function r(){return n.apply(this,arguments)}return u()(r)}(r(3337).a);function g(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=s()(t);if(n){var u=s()(this).constructor;r=Reflect.construct(e,arguments,u)}else r=e.apply(this,arguments);return f()(this,r)}}var B=function(t){c()(r,t);var n=g(r);function r(){return n.apply(this,arguments)}return u()(r)}(r(3338).a),m=r(2095);function O(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=s()(t);if(n){var u=s()(this).constructor;r=Reflect.construct(e,arguments,u)}else r=e.apply(this,arguments);return f()(this,r)}}var x=function(t){c()(r,t);var n=O(r);function r(){for(var t,r=arguments.length,e=new Array(r),u=0;u<r;u++)e[u]=arguments[u];return(t=n.call.apply(n,[this].concat(e))).keyringMap={hd:d,hw:h,imported:R,watching:B,external:B},t.settings=m.default,t}var e=r.prototype;return e.getDefaultPurpose=function(){return 44},e.getCoinName=function(){return"DOGE"},e.getCoinType=function(){return p.i},e.getXprvReg=function(){return/^[d]gpv/},e.getXpubReg=function(){return/^[d]gub/},e.getDefaultBlockNums=function(){return[10,5,3]},e.getDefaultBlockTime=function(){return 60},u()(r)}(l.a)}}]);