// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-uint32@esm/index.mjs";var r=t,n=e,i=s;var a=function(t){var e,s;if(32!==t.length)throw new Error(n("invalid argument. Input string must have a length equal to `%u`. Value: `%s`.",32,t));for(e=0,s=0;s<t.length;s++)"1"===t[s]&&(e+=r(2,32-s-1));return i(e)};export{a as default};
//# sourceMappingURL=index.mjs.map
