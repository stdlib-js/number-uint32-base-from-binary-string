// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-uint32@v0.2.0-esm/index.mjs";function n(n){var r,i;if(32!==n.length)throw new Error(e("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,n));for(r=0,i=0;i<n.length;i++)"1"===n[i]&&(r+=t(2,32-i-1));return s(r)}export{n as default};
//# sourceMappingURL=index.mjs.map
