self["webpackChunk"]([1],{

/***/ "./node_modules/montecarlo/montecarlo.js":
/*!***********************************************!*\
  !*** ./node_modules/montecarlo/montecarlo.js ***!
  \***********************************************/
/*! exports provided: DiscretizationScheme, assertSlabEmpty, __wbg_new_410d028cca82cf04, assertStackEmpty, __wbg_call_ce9b4ee44f33326d, __wbg_self_94af25ab6983ff22, __wbg_crypto_928f7a98da33cf58, __wbg_getRandomValues_bf82a46302370cc0, __wbg_getRandomValues_2a57f17feb958097, __wbg_require_443fbcad222426b2, __wbg_randomFillSync_29737e08f29b48df, Process, __wbindgen_object_drop_ref, __wbindgen_is_undefined, __wbindgen_jsval_eq, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscretizationScheme", function() { return DiscretizationScheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertSlabEmpty", function() { return assertSlabEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_410d028cca82cf04", function() { return __wbg_new_410d028cca82cf04; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertStackEmpty", function() { return assertStackEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_ce9b4ee44f33326d", function() { return __wbg_call_ce9b4ee44f33326d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_94af25ab6983ff22", function() { return __wbg_self_94af25ab6983ff22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_crypto_928f7a98da33cf58", function() { return __wbg_crypto_928f7a98da33cf58; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getRandomValues_bf82a46302370cc0", function() { return __wbg_getRandomValues_bf82a46302370cc0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getRandomValues_2a57f17feb958097", function() { return __wbg_getRandomValues_2a57f17feb958097; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_require_443fbcad222426b2", function() { return __wbg_require_443fbcad222426b2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_randomFillSync_29737e08f29b48df", function() { return __wbg_randomFillSync_29737e08f29b48df; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process", function() { return Process; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return __wbindgen_is_undefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_jsval_eq", function() { return __wbindgen_jsval_eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony import */ var _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./montecarlo_bg.wasm */ "./node_modules/montecarlo/montecarlo_bg.wasm");
/* tslint:disable */


function _assertNum(n) {
    if (typeof (n) !== 'number') throw new Error('expected a number argument');
}

let cachegetFloat64Memory = null;
function getFloat64Memory() {
    if (cachegetFloat64Memory === null || cachegetFloat64Memory.buffer !== _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetFloat64Memory = new Float64Array(_montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetFloat64Memory;
}

function getArrayF64FromWasm(ptr, len) {
    return getFloat64Memory().subarray(ptr / 8, ptr / 8 + len);
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_global_argument_ptr"]();
    }
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint32Memory = new Uint32Array(_montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint32Memory;
}
/**
*/
const DiscretizationScheme = Object.freeze({ Exact: 0, EulerMaruyama: 1, });

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory = new Uint8Array(_montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

const slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];

function assertSlabEmpty() {
    for (let i = 4; i < slab.length; i++) {
        if (typeof (slab[i]) === 'number') continue;
        throw new Error('slab is not currently empty');
    }
}

let slab_next = slab.length;

function addHeapObject(obj) {
    if (slab_next === slab.length) slab.push(slab.length + 1);
    const idx = slab_next;
    const next = slab[idx];

    if (typeof (next) !== 'number') throw new Error('corrupt slab');
    slab_next = next;

    slab[idx] = { obj, cnt: 1 };
    return idx << 1;
}

function __wbg_new_410d028cca82cf04(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
}

const __wbg_call_ce9b4ee44f33326d_target = Function.prototype.call || function () {
    throw new Error(`wasm-bindgen: Function.prototype.call does not exist`);
};

const stack = [];

function assertStackEmpty() {
    if (stack.length === 0) return;
    throw new Error('stack is not currently empty');
}

function getObject(idx) {
    if ((idx & 1) === 1) {
        return stack[idx >> 1];
    } else {
        const val = slab[idx >> 1];

        if (typeof (val) === 'number') throw new Error('corrupt slab');
        return val.obj;

    }
}

function __wbg_call_ce9b4ee44f33326d(arg0, arg1) {
    return addHeapObject(__wbg_call_ce9b4ee44f33326d_target.call(getObject(arg0), getObject(arg1)));
}

const __wbg_self_94af25ab6983ff22_target = function () {
    return this.self;
};

function __wbg_self_94af25ab6983ff22(arg0) {
    return addHeapObject(__wbg_self_94af25ab6983ff22_target.call(getObject(arg0)));
}

const __wbg_crypto_928f7a98da33cf58_target = function () {
    return this.crypto;
};

function __wbg_crypto_928f7a98da33cf58(arg0) {
    return addHeapObject(__wbg_crypto_928f7a98da33cf58_target.call(getObject(arg0)));
}

const __wbg_getRandomValues_bf82a46302370cc0_target = function () {
    return this.getRandomValues;
};

function __wbg_getRandomValues_bf82a46302370cc0(arg0) {
    return addHeapObject(__wbg_getRandomValues_bf82a46302370cc0_target.call(getObject(arg0)));
}

const __wbg_getRandomValues_2a57f17feb958097_target = function (x0) {
    return this.getRandomValues(x0);
};

function getArrayU8FromWasm(ptr, len) {
    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
}

function __wbg_getRandomValues_2a57f17feb958097(arg0, arg1, arg2) {
    let varg1 = getArrayU8FromWasm(arg1, arg2);
    __wbg_getRandomValues_2a57f17feb958097_target.call(getObject(arg0), varg1);
}

function __wbg_require_443fbcad222426b2(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(__webpack_require__("./node_modules/montecarlo sync recursive")(varg0));
}

const __wbg_randomFillSync_29737e08f29b48df_target = function (x0) {
    return this.randomFillSync(x0);
};

function __wbg_randomFillSync_29737e08f29b48df(arg0, arg1, arg2) {
    let varg1 = getArrayU8FromWasm(arg1, arg2);
    __wbg_randomFillSync_29737e08f29b48df_target.call(getObject(arg0), varg1);
}

function freeProcess(ptr) {

    _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_process_free"](ptr);
}
/**
*/
class Process {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeProcess(ptr);
    }

    /**
    * @returns {number}
    */
    get vol() {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_get_process_vol"](this.ptr);
    }
    set vol(arg0) {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        _assertNum(arg0);
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_set_process_vol"](this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get rate() {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_get_process_rate"](this.ptr);
    }
    set rate(arg0) {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        _assertNum(arg0);
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_set_process_rate"](this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get initial_value() {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_get_process_initial_value"](this.ptr);
    }
    set initial_value(arg0) {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        _assertNum(arg0);
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_set_process_initial_value"](this.ptr, arg0);
    }
    /**
    * @param {number} arg0
    * @param {number} arg1
    * @param {number} arg2
    * @returns {}
    */
    constructor(arg0, arg1, arg2) {
        _assertNum(arg0);
        _assertNum(arg1);
        _assertNum(arg2);
        this.ptr = _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["process_new"](arg0, arg1, arg2);
    }
    /**
    * @param {number} arg0
    * @param {number} arg1
    * @param {number} arg2
    * @param {number} arg3
    * @returns {Float64Array}
    */
    calc_paths(arg0, arg1, arg2, arg3) {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        _assertNum(arg0);
        _assertNum(arg1);
        _assertNum(arg2);
        _assertNum(arg3);
        const retptr = globalArgumentPtr();
        _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["process_calc_paths"](retptr, this.ptr, arg0, arg1, arg2, arg3);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayF64FromWasm(rustptr, rustlen).slice();
        _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](rustptr, rustlen * 8);
        return realRet;

    }
}

function dropRef(idx) {

    if ((idx & 1) === 1) throw new Error('cannot drop ref of stack objects');

    idx = idx >> 1;
    if (idx < 4) return;
    let obj = slab[idx];

    if (typeof (obj) === 'number') throw new Error('corrupt slab');
    obj.cnt -= 1;
    if (obj.cnt > 0) return;

    // If we hit 0 then free up our space in the slab
    slab[idx] = slab_next;
    slab_next = idx;
}

function __wbindgen_object_drop_ref(i) {
    dropRef(i);
}

function __wbindgen_is_undefined(idx) {
    return getObject(idx) === undefined ? 1 : 0;
}

function __wbindgen_jsval_eq(a, b) {
    return getObject(a) === getObject(b) ? 1 : 0;
}

function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}



/***/ }),

/***/ "./node_modules/montecarlo/montecarlo_bg.wasm":
/*!****************************************************!*\
  !*** ./node_modules/montecarlo/montecarlo_bg.wasm ***!
  \****************************************************/
/*! exports provided: memory, __indirect_function_table, __heap_base, __data_end, __rustc_debug_gdb_scripts_section__, __wbindgen_global_argument_ptr, __wbg_process_free, __wbg_get_process_vol, __wbg_set_process_vol, __wbg_get_process_rate, __wbg_set_process_rate, __wbg_get_process_initial_value, __wbg_set_process_initial_value, process_new, process_calc_paths, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./montecarlo */ "./node_modules/montecarlo/montecarlo.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM2Qzs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyRUFBMkUsMERBQVc7QUFDdEYsaURBQWlELDBEQUFXO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtGQUFtQztBQUNyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RSwwREFBVztBQUNwRiwrQ0FBK0MsMERBQVc7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDRDQUE0Qyw4QkFBOEI7O0FBRWpGOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUsMERBQVc7QUFDbEYsNkNBQTZDLDBEQUFXO0FBQ3hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxpQkFBaUIsR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLGFBQWE7O0FBRXZFO0FBQ1AsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSx5QkFBeUIsZ0VBQVEsS0FBSyxDQUFDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLHNFQUF1QjtBQUMzQjtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlFQUEwQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlFQUEwQjtBQUN6QztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBFQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBFQUEyQjtBQUMxQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1GQUFvQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1GQUFvQztBQUNuRDtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtEQUFnQjtBQUNuQztBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQXVCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsbUVBQW9CO0FBQzVCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0EiLCJmaWxlIjoiMS53b3JrZXJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL21vbnRlY2FybG9fYmcud2FzbSc7XG5cbmZ1bmN0aW9uIF9hc3NlcnROdW0obikge1xuICAgIGlmICh0eXBlb2YgKG4pICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCBhIG51bWJlciBhcmd1bWVudCcpO1xufVxuXG5sZXQgY2FjaGVnZXRGbG9hdDY0TWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldEZsb2F0NjRNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0RmxvYXQ2NE1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldEZsb2F0NjRNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRGbG9hdDY0TWVtb3J5ID0gbmV3IEZsb2F0NjRBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRGbG9hdDY0TWVtb3J5O1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheUY2NEZyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGdldEZsb2F0NjRNZW1vcnkoKS5zdWJhcnJheShwdHIgLyA4LCBwdHIgLyA4ICsgbGVuKTtcbn1cblxubGV0IGNhY2hlZEdsb2JhbEFyZ3VtZW50UHRyID0gbnVsbDtcbmZ1bmN0aW9uIGdsb2JhbEFyZ3VtZW50UHRyKCkge1xuICAgIGlmIChjYWNoZWRHbG9iYWxBcmd1bWVudFB0ciA9PT0gbnVsbCkge1xuICAgICAgICBjYWNoZWRHbG9iYWxBcmd1bWVudFB0ciA9IHdhc20uX193YmluZGdlbl9nbG9iYWxfYXJndW1lbnRfcHRyKCk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRHbG9iYWxBcmd1bWVudFB0cjtcbn1cblxubGV0IGNhY2hlZ2V0VWludDMyTWVtb3J5ID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQzMk1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50MzJNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRVaW50MzJNZW1vcnkuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpIHtcbiAgICAgICAgY2FjaGVnZXRVaW50MzJNZW1vcnkgPSBuZXcgVWludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0VWludDMyTWVtb3J5O1xufVxuLyoqXG4qL1xuZXhwb3J0IGNvbnN0IERpc2NyZXRpemF0aW9uU2NoZW1lID0gT2JqZWN0LmZyZWV6ZSh7IEV4YWN0OiAwLCBFdWxlck1hcnV5YW1hOiAxLCB9KTtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuY29uc3Qgc2xhYiA9IFt7IG9iajogdW5kZWZpbmVkIH0sIHsgb2JqOiBudWxsIH0sIHsgb2JqOiB0cnVlIH0sIHsgb2JqOiBmYWxzZSB9XTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFNsYWJFbXB0eSgpIHtcbiAgICBmb3IgKGxldCBpID0gNDsgaSA8IHNsYWIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoc2xhYltpXSkgPT09ICdudW1iZXInKSBjb250aW51ZTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzbGFiIGlzIG5vdCBjdXJyZW50bHkgZW1wdHknKTtcbiAgICB9XG59XG5cbmxldCBzbGFiX25leHQgPSBzbGFiLmxlbmd0aDtcblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoc2xhYl9uZXh0ID09PSBzbGFiLmxlbmd0aCkgc2xhYi5wdXNoKHNsYWIubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gc2xhYl9uZXh0O1xuICAgIGNvbnN0IG5leHQgPSBzbGFiW2lkeF07XG5cbiAgICBpZiAodHlwZW9mIChuZXh0KSAhPT0gJ251bWJlcicpIHRocm93IG5ldyBFcnJvcignY29ycnVwdCBzbGFiJyk7XG4gICAgc2xhYl9uZXh0ID0gbmV4dDtcblxuICAgIHNsYWJbaWR4XSA9IHsgb2JqLCBjbnQ6IDEgfTtcbiAgICByZXR1cm4gaWR4IDw8IDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdfNDEwZDAyOGNjYTgyY2YwNChhcmcwLCBhcmcxKSB7XG4gICAgbGV0IHZhcmcwID0gZ2V0U3RyaW5nRnJvbVdhc20oYXJnMCwgYXJnMSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QobmV3IEZ1bmN0aW9uKHZhcmcwKSk7XG59XG5cbmNvbnN0IF9fd2JnX2NhbGxfY2U5YjRlZTQ0ZjMzMzI2ZF90YXJnZXQgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCB8fCBmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGB3YXNtLWJpbmRnZW46IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsIGRvZXMgbm90IGV4aXN0YCk7XG59O1xuXG5jb25zdCBzdGFjayA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RhY2tFbXB0eSgpIHtcbiAgICBpZiAoc3RhY2subGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzdGFjayBpcyBub3QgY3VycmVudGx5IGVtcHR5Jyk7XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdChpZHgpIHtcbiAgICBpZiAoKGlkeCAmIDEpID09PSAxKSB7XG4gICAgICAgIHJldHVybiBzdGFja1tpZHggPj4gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFsID0gc2xhYltpZHggPj4gMV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiAodmFsKSA9PT0gJ251bWJlcicpIHRocm93IG5ldyBFcnJvcignY29ycnVwdCBzbGFiJyk7XG4gICAgICAgIHJldHVybiB2YWwub2JqO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfY2FsbF9jZTliNGVlNDRmMzMzMjZkKGFyZzAsIGFyZzEpIHtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChfX3diZ19jYWxsX2NlOWI0ZWU0NGYzMzMyNmRfdGFyZ2V0LmNhbGwoZ2V0T2JqZWN0KGFyZzApLCBnZXRPYmplY3QoYXJnMSkpKTtcbn1cblxuY29uc3QgX193Ymdfc2VsZl85NGFmMjVhYjY5ODNmZjIyX3RhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxmO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NlbGZfOTRhZjI1YWI2OTgzZmYyMihhcmcwKSB7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QoX193Ymdfc2VsZl85NGFmMjVhYjY5ODNmZjIyX3RhcmdldC5jYWxsKGdldE9iamVjdChhcmcwKSkpO1xufVxuXG5jb25zdCBfX3diZ19jcnlwdG9fOTI4ZjdhOThkYTMzY2Y1OF90YXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3J5cHRvO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2NyeXB0b185MjhmN2E5OGRhMzNjZjU4KGFyZzApIHtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChfX3diZ19jcnlwdG9fOTI4ZjdhOThkYTMzY2Y1OF90YXJnZXQuY2FsbChnZXRPYmplY3QoYXJnMCkpKTtcbn1cblxuY29uc3QgX193YmdfZ2V0UmFuZG9tVmFsdWVzX2JmODJhNDYzMDIzNzBjYzBfdGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJhbmRvbVZhbHVlcztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19nZXRSYW5kb21WYWx1ZXNfYmY4MmE0NjMwMjM3MGNjMChhcmcwKSB7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QoX193YmdfZ2V0UmFuZG9tVmFsdWVzX2JmODJhNDYzMDIzNzBjYzBfdGFyZ2V0LmNhbGwoZ2V0T2JqZWN0KGFyZzApKSk7XG59XG5cbmNvbnN0IF9fd2JnX2dldFJhbmRvbVZhbHVlc18yYTU3ZjE3ZmViOTU4MDk3X3RhcmdldCA9IGZ1bmN0aW9uICh4MCkge1xuICAgIHJldHVybiB0aGlzLmdldFJhbmRvbVZhbHVlcyh4MCk7XG59O1xuXG5mdW5jdGlvbiBnZXRBcnJheVU4RnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gZ2V0VWludDhNZW1vcnkoKS5zdWJhcnJheShwdHIgLyAxLCBwdHIgLyAxICsgbGVuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dldFJhbmRvbVZhbHVlc18yYTU3ZjE3ZmViOTU4MDk3KGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBsZXQgdmFyZzEgPSBnZXRBcnJheVU4RnJvbVdhc20oYXJnMSwgYXJnMik7XG4gICAgX193YmdfZ2V0UmFuZG9tVmFsdWVzXzJhNTdmMTdmZWI5NTgwOTdfdGFyZ2V0LmNhbGwoZ2V0T2JqZWN0KGFyZzApLCB2YXJnMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19yZXF1aXJlXzQ0M2ZiY2FkMjIyNDI2YjIoYXJnMCwgYXJnMSkge1xuICAgIGxldCB2YXJnMCA9IGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJlcXVpcmUodmFyZzApKTtcbn1cblxuY29uc3QgX193YmdfcmFuZG9tRmlsbFN5bmNfMjk3MzdlMDhmMjliNDhkZl90YXJnZXQgPSBmdW5jdGlvbiAoeDApIHtcbiAgICByZXR1cm4gdGhpcy5yYW5kb21GaWxsU3luYyh4MCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcmFuZG9tRmlsbFN5bmNfMjk3MzdlMDhmMjliNDhkZihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgbGV0IHZhcmcxID0gZ2V0QXJyYXlVOEZyb21XYXNtKGFyZzEsIGFyZzIpO1xuICAgIF9fd2JnX3JhbmRvbUZpbGxTeW5jXzI5NzM3ZTA4ZjI5YjQ4ZGZfdGFyZ2V0LmNhbGwoZ2V0T2JqZWN0KGFyZzApLCB2YXJnMSk7XG59XG5cbmZ1bmN0aW9uIGZyZWVQcm9jZXNzKHB0cikge1xuXG4gICAgd2FzbS5fX3diZ19wcm9jZXNzX2ZyZWUocHRyKTtcbn1cbi8qKlxuKi9cbmV4cG9ydCBjbGFzcyBQcm9jZXNzIHtcblxuICAgIGZyZWUoKSB7XG4gICAgICAgIGNvbnN0IHB0ciA9IHRoaXMucHRyO1xuICAgICAgICB0aGlzLnB0ciA9IDA7XG4gICAgICAgIGZyZWVQcm9jZXNzKHB0cik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICovXG4gICAgZ2V0IHZvbCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHRyID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHQgdG8gdXNlIGEgbW92ZWQgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2FzbS5fX3diZ19nZXRfcHJvY2Vzc192b2wodGhpcy5wdHIpO1xuICAgIH1cbiAgICBzZXQgdm9sKGFyZzApIHtcbiAgICAgICAgaWYgKHRoaXMucHRyID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHQgdG8gdXNlIGEgbW92ZWQgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBfYXNzZXJ0TnVtKGFyZzApO1xuICAgICAgICByZXR1cm4gd2FzbS5fX3diZ19zZXRfcHJvY2Vzc192b2wodGhpcy5wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgcmF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHRyID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHQgdG8gdXNlIGEgbW92ZWQgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2FzbS5fX3diZ19nZXRfcHJvY2Vzc19yYXRlKHRoaXMucHRyKTtcbiAgICB9XG4gICAgc2V0IHJhdGUoYXJnMCkge1xuICAgICAgICBpZiAodGhpcy5wdHIgPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdCB0byB1c2UgYSBtb3ZlZCB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIF9hc3NlcnROdW0oYXJnMCk7XG4gICAgICAgIHJldHVybiB3YXNtLl9fd2JnX3NldF9wcm9jZXNzX3JhdGUodGhpcy5wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgaW5pdGlhbF92YWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHRyID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHQgdG8gdXNlIGEgbW92ZWQgdmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2FzbS5fX3diZ19nZXRfcHJvY2Vzc19pbml0aWFsX3ZhbHVlKHRoaXMucHRyKTtcbiAgICB9XG4gICAgc2V0IGluaXRpYWxfdmFsdWUoYXJnMCkge1xuICAgICAgICBpZiAodGhpcy5wdHIgPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdCB0byB1c2UgYSBtb3ZlZCB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIF9hc3NlcnROdW0oYXJnMCk7XG4gICAgICAgIHJldHVybiB3YXNtLl9fd2JnX3NldF9wcm9jZXNzX2luaXRpYWxfdmFsdWUodGhpcy5wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcwXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMVxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzJcbiAgICAqIEByZXR1cm5zIHt9XG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgICAgIF9hc3NlcnROdW0oYXJnMCk7XG4gICAgICAgIF9hc3NlcnROdW0oYXJnMSk7XG4gICAgICAgIF9hc3NlcnROdW0oYXJnMik7XG4gICAgICAgIHRoaXMucHRyID0gd2FzbS5wcm9jZXNzX25ldyhhcmcwLCBhcmcxLCBhcmcyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzFcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcyXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnM1xuICAgICogQHJldHVybnMge0Zsb2F0NjRBcnJheX1cbiAgICAqL1xuICAgIGNhbGNfcGF0aHMoYXJnMCwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgICAgICBpZiAodGhpcy5wdHIgPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdCB0byB1c2UgYSBtb3ZlZCB2YWx1ZScpO1xuICAgICAgICB9XG4gICAgICAgIF9hc3NlcnROdW0oYXJnMCk7XG4gICAgICAgIF9hc3NlcnROdW0oYXJnMSk7XG4gICAgICAgIF9hc3NlcnROdW0oYXJnMik7XG4gICAgICAgIF9hc3NlcnROdW0oYXJnMyk7XG4gICAgICAgIGNvbnN0IHJldHB0ciA9IGdsb2JhbEFyZ3VtZW50UHRyKCk7XG4gICAgICAgIHdhc20ucHJvY2Vzc19jYWxjX3BhdGhzKHJldHB0ciwgdGhpcy5wdHIsIGFyZzAsIGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgICAgICBjb25zdCBtZW0gPSBnZXRVaW50MzJNZW1vcnkoKTtcbiAgICAgICAgY29uc3QgcnVzdHB0ciA9IG1lbVtyZXRwdHIgLyA0XTtcbiAgICAgICAgY29uc3QgcnVzdGxlbiA9IG1lbVtyZXRwdHIgLyA0ICsgMV07XG5cbiAgICAgICAgY29uc3QgcmVhbFJldCA9IGdldEFycmF5RjY0RnJvbVdhc20ocnVzdHB0ciwgcnVzdGxlbikuc2xpY2UoKTtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUocnVzdHB0ciwgcnVzdGxlbiAqIDgpO1xuICAgICAgICByZXR1cm4gcmVhbFJldDtcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJvcFJlZihpZHgpIHtcblxuICAgIGlmICgoaWR4ICYgMSkgPT09IDEpIHRocm93IG5ldyBFcnJvcignY2Fubm90IGRyb3AgcmVmIG9mIHN0YWNrIG9iamVjdHMnKTtcblxuICAgIGlkeCA9IGlkeCA+PiAxO1xuICAgIGlmIChpZHggPCA0KSByZXR1cm47XG4gICAgbGV0IG9iaiA9IHNsYWJbaWR4XTtcblxuICAgIGlmICh0eXBlb2YgKG9iaikgPT09ICdudW1iZXInKSB0aHJvdyBuZXcgRXJyb3IoJ2NvcnJ1cHQgc2xhYicpO1xuICAgIG9iai5jbnQgLT0gMTtcbiAgICBpZiAob2JqLmNudCA+IDApIHJldHVybjtcblxuICAgIC8vIElmIHdlIGhpdCAwIHRoZW4gZnJlZSB1cCBvdXIgc3BhY2UgaW4gdGhlIHNsYWJcbiAgICBzbGFiW2lkeF0gPSBzbGFiX25leHQ7XG4gICAgc2xhYl9uZXh0ID0gaWR4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYoaSkge1xuICAgIGRyb3BSZWYoaSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZChpZHgpIHtcbiAgICByZXR1cm4gZ2V0T2JqZWN0KGlkeCkgPT09IHVuZGVmaW5lZCA/IDEgOiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9qc3ZhbF9lcShhLCBiKSB7XG4gICAgcmV0dXJuIGdldE9iamVjdChhKSA9PT0gZ2V0T2JqZWN0KGIpID8gMSA6IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3Rocm93KHB0ciwgbGVuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtKHB0ciwgbGVuKSk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=