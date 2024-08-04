"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=u(function(m,n){
var o=require('@stdlib/math-base-special-pow/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist'),f=require('@stdlib/number-float64-base-to-uint32/dist'),i=32;function g(e){var r,t;if(e.length!==i)throw new Error(v('0lv60',i,e));for(r=0,t=0;t<e.length;t++)e[t]==="1"&&(r+=o(2,i-t-1));return f(r)}n.exports=g
});var s=a();module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
