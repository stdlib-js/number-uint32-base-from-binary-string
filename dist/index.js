"use strict";var u=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var a=u(function(m,n){
var o=require('@stdlib/math-base-special-pow/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist'),f=require('@stdlib/number-float64-base-to-uint32/dist'),i=32;function g(t){var r,e;if(t.length!==i)throw new Error(v('0lv60',i,t));for(r=0,e=0;e<t.length;e++)t[e]==="1"&&(r+=o(2,i-e-1));return f(r)}n.exports=g
});var s=a();module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
