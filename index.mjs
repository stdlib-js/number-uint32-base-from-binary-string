// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-uint32@v0.2.3-esm/index.mjs";function r(r){var o,n;if(32!==r.length)throw new Error(s("0lv60",32,r));for(o=0,n=0;n<r.length;n++)"1"===r[n]&&(o+=t(2,32-n-1));return e(o)}export{r as default};
//# sourceMappingURL=index.mjs.map
