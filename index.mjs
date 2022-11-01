// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-uint32@esm/index.mjs";function r(r){var n,i;if(32!==r.length)throw new Error(e("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(n=0,i=0;i<r.length;i++)"1"===r[i]&&(n+=t(2,32-i-1));return s(n)}export{r as default};
//# sourceMappingURL=index.mjs.map
