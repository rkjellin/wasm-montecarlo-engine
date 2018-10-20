self["webpackChunk"]([1],{

/***/ "./node_modules/montecarlo/montecarlo.js":
/*!***********************************************!*\
  !*** ./node_modules/montecarlo/montecarlo.js ***!
  \***********************************************/
/*! exports provided: render_path, __wbg_alert_fc3ac39541ae73f5, greet, __wbg_new_410d028cca82cf04, __wbg_call_ce9b4ee44f33326d, __wbg_self_94af25ab6983ff22, __wbg_crypto_928f7a98da33cf58, __wbg_getRandomValues_bf82a46302370cc0, __wbg_getRandomValues_2a57f17feb958097, __wbg_require_443fbcad222426b2, __wbg_randomFillSync_29737e08f29b48df, Process, __wbindgen_object_drop_ref, __wbindgen_is_undefined, __wbindgen_jsval_eq, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render_path", function() { return render_path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_alert_fc3ac39541ae73f5", function() { return __wbg_alert_fc3ac39541ae73f5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greet", function() { return greet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_410d028cca82cf04", function() { return __wbg_new_410d028cca82cf04; });
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
* @returns {Float64Array}
*/
function render_path() {
    const retptr = globalArgumentPtr();
    _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["render_path"](retptr);
    const mem = getUint32Memory();
    const rustptr = mem[retptr / 4];
    const rustlen = mem[retptr / 4 + 1];

    const realRet = getArrayF64FromWasm(rustptr, rustlen).slice();
    _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](rustptr, rustlen * 8);
    return realRet;

}

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

function __wbg_alert_fc3ac39541ae73f5(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    alert(varg0);
}
/**
* @returns {void}
*/
function greet() {
    return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["greet"]();
}

const slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];

let slab_next = slab.length;

function addHeapObject(obj) {
    if (slab_next === slab.length) slab.push(slab.length + 1);
    const idx = slab_next;
    const next = slab[idx];

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

function getObject(idx) {
    if ((idx & 1) === 1) {
        return stack[idx >> 1];
    } else {
        const val = slab[idx >> 1];

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
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_get_process_vol"](this.ptr);
    }
    set vol(arg0) {
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_set_process_vol"](this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get rate() {
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_get_process_rate"](this.ptr);
    }
    set rate(arg0) {
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_set_process_rate"](this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get initial_value() {
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_get_process_initial_value"](this.ptr);
    }
    set initial_value(arg0) {
        return _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_set_process_initial_value"](this.ptr, arg0);
    }
    /**
    * @param {number} arg0
    * @param {number} arg1
    * @param {number} arg2
    * @returns {}
    */
    constructor(arg0, arg1, arg2) {
        this.ptr = _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["process_new"](arg0, arg1, arg2);
    }
    /**
    * @param {number} arg0
    * @param {number} arg1
    * @param {number} arg2
    * @returns {Float64Array}
    */
    calc_paths(arg0, arg1, arg2) {
        const retptr = globalArgumentPtr();
        _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["process_calc_paths"](retptr, this.ptr, arg0, arg1, arg2);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayF64FromWasm(rustptr, rustlen).slice();
        _montecarlo_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](rustptr, rustlen * 8);
        return realRet;

    }
}

function dropRef(idx) {

    idx = idx >> 1;
    if (idx < 4) return;
    let obj = slab[idx];

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
/*! exports provided: memory, __indirect_function_table, __heap_base, __data_end, __wbindgen_global_argument_ptr, render_path, greet, __wbg_process_free, __wbg_get_process_vol, __wbg_set_process_vol, __wbg_get_process_rate, __wbg_set_process_rate, __wbg_get_process_initial_value, __wbg_set_process_initial_value, process_new, process_calc_paths, __wbindgen_free */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM2Qzs7QUFFN0M7QUFDQTtBQUNBLDJFQUEyRSwwREFBVztBQUN0RixpREFBaUQsMERBQVc7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0ZBQW1DO0FBQ3JFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUVBQXlFLDBEQUFXO0FBQ3BGLCtDQUErQywwREFBVztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNPO0FBQ1A7QUFDQSxJQUFJLCtEQUFnQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG1FQUFvQjtBQUN4Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUVBQXVFLDBEQUFXO0FBQ2xGLDZDQUE2QywwREFBVztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDTztBQUNQLFdBQVcseURBQVU7QUFDckI7O0FBRUEsZUFBZSxpQkFBaUIsR0FBRyxZQUFZLEdBQUcsWUFBWSxHQUFHLGFBQWE7O0FBRTlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EseUJBQXlCLGdFQUFRLEtBQUssQ0FBQztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSxzRUFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsZUFBZSx5RUFBMEI7QUFDekM7QUFDQTtBQUNBLGVBQWUseUVBQTBCO0FBQ3pDO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGVBQWUsMEVBQTJCO0FBQzFDO0FBQ0E7QUFDQSxlQUFlLDBFQUEyQjtBQUMxQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxlQUFlLG1GQUFvQztBQUNuRDtBQUNBO0FBQ0EsZUFBZSxtRkFBb0M7QUFDbkQ7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrREFBZ0I7QUFDbkM7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUF1QjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG1FQUFvQjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSIsImZpbGUiOiIxLndvcmtlcmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG5pbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vbW9udGVjYXJsb19iZy53YXNtJztcblxubGV0IGNhY2hlZ2V0RmxvYXQ2NE1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRGbG9hdDY0TWVtb3J5KCkge1xuICAgIGlmIChjYWNoZWdldEZsb2F0NjRNZW1vcnkgPT09IG51bGwgfHwgY2FjaGVnZXRGbG9hdDY0TWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0RmxvYXQ2NE1lbW9yeSA9IG5ldyBGbG9hdDY0QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZ2V0RmxvYXQ2NE1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlGNjRGcm9tV2FzbShwdHIsIGxlbikge1xuICAgIHJldHVybiBnZXRGbG9hdDY0TWVtb3J5KCkuc3ViYXJyYXkocHRyIC8gOCwgcHRyIC8gOCArIGxlbik7XG59XG5cbmxldCBjYWNoZWRHbG9iYWxBcmd1bWVudFB0ciA9IG51bGw7XG5mdW5jdGlvbiBnbG9iYWxBcmd1bWVudFB0cigpIHtcbiAgICBpZiAoY2FjaGVkR2xvYmFsQXJndW1lbnRQdHIgPT09IG51bGwpIHtcbiAgICAgICAgY2FjaGVkR2xvYmFsQXJndW1lbnRQdHIgPSB3YXNtLl9fd2JpbmRnZW5fZ2xvYmFsX2FyZ3VtZW50X3B0cigpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkR2xvYmFsQXJndW1lbnRQdHI7XG59XG5cbmxldCBjYWNoZWdldFVpbnQzMk1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50MzJNZW1vcnkoKSB7XG4gICAgaWYgKGNhY2hlZ2V0VWludDMyTWVtb3J5ID09PSBudWxsIHx8IGNhY2hlZ2V0VWludDMyTWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDMyTWVtb3J5ID0gbmV3IFVpbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWdldFVpbnQzMk1lbW9yeTtcbn1cbi8qKlxuKiBAcmV0dXJucyB7RmxvYXQ2NEFycmF5fVxuKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJfcGF0aCgpIHtcbiAgICBjb25zdCByZXRwdHIgPSBnbG9iYWxBcmd1bWVudFB0cigpO1xuICAgIHdhc20ucmVuZGVyX3BhdGgocmV0cHRyKTtcbiAgICBjb25zdCBtZW0gPSBnZXRVaW50MzJNZW1vcnkoKTtcbiAgICBjb25zdCBydXN0cHRyID0gbWVtW3JldHB0ciAvIDRdO1xuICAgIGNvbnN0IHJ1c3RsZW4gPSBtZW1bcmV0cHRyIC8gNCArIDFdO1xuXG4gICAgY29uc3QgcmVhbFJldCA9IGdldEFycmF5RjY0RnJvbVdhc20ocnVzdHB0ciwgcnVzdGxlbikuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShydXN0cHRyLCBydXN0bGVuICogOCk7XG4gICAgcmV0dXJuIHJlYWxSZXQ7XG5cbn1cblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpO1xuXG5sZXQgY2FjaGVnZXRVaW50OE1lbW9yeSA9IG51bGw7XG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeSgpIHtcbiAgICBpZiAoY2FjaGVnZXRVaW50OE1lbW9yeSA9PT0gbnVsbCB8fCBjYWNoZWdldFVpbnQ4TWVtb3J5LmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSB7XG4gICAgICAgIGNhY2hlZ2V0VWludDhNZW1vcnkgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVnZXRVaW50OE1lbW9yeTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20ocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2FsZXJ0X2ZjM2FjMzk1NDFhZTczZjUoYXJnMCwgYXJnMSkge1xuICAgIGxldCB2YXJnMCA9IGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpO1xuICAgIGFsZXJ0KHZhcmcwKTtcbn1cbi8qKlxuKiBAcmV0dXJucyB7dm9pZH1cbiovXG5leHBvcnQgZnVuY3Rpb24gZ3JlZXQoKSB7XG4gICAgcmV0dXJuIHdhc20uZ3JlZXQoKTtcbn1cblxuY29uc3Qgc2xhYiA9IFt7IG9iajogdW5kZWZpbmVkIH0sIHsgb2JqOiBudWxsIH0sIHsgb2JqOiB0cnVlIH0sIHsgb2JqOiBmYWxzZSB9XTtcblxubGV0IHNsYWJfbmV4dCA9IHNsYWIubGVuZ3RoO1xuXG5mdW5jdGlvbiBhZGRIZWFwT2JqZWN0KG9iaikge1xuICAgIGlmIChzbGFiX25leHQgPT09IHNsYWIubGVuZ3RoKSBzbGFiLnB1c2goc2xhYi5sZW5ndGggKyAxKTtcbiAgICBjb25zdCBpZHggPSBzbGFiX25leHQ7XG4gICAgY29uc3QgbmV4dCA9IHNsYWJbaWR4XTtcblxuICAgIHNsYWJfbmV4dCA9IG5leHQ7XG5cbiAgICBzbGFiW2lkeF0gPSB7IG9iaiwgY250OiAxIH07XG4gICAgcmV0dXJuIGlkeCA8PCAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzQxMGQwMjhjY2E4MmNmMDQoYXJnMCwgYXJnMSkge1xuICAgIGxldCB2YXJnMCA9IGdldFN0cmluZ0Zyb21XYXNtKGFyZzAsIGFyZzEpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KG5ldyBGdW5jdGlvbih2YXJnMCkpO1xufVxuXG5jb25zdCBfX3diZ19jYWxsX2NlOWI0ZWU0NGYzMzMyNmRfdGFyZ2V0ID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwgfHwgZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgd2FzbS1iaW5kZ2VuOiBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCBkb2VzIG5vdCBleGlzdGApO1xufTtcblxuY29uc3Qgc3RhY2sgPSBbXTtcblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkge1xuICAgIGlmICgoaWR4ICYgMSkgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrW2lkeCA+PiAxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB2YWwgPSBzbGFiW2lkeCA+PiAxXTtcblxuICAgICAgICByZXR1cm4gdmFsLm9iajtcblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2NhbGxfY2U5YjRlZTQ0ZjMzMzI2ZChhcmcwLCBhcmcxKSB7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QoX193YmdfY2FsbF9jZTliNGVlNDRmMzMzMjZkX3RhcmdldC5jYWxsKGdldE9iamVjdChhcmcwKSwgZ2V0T2JqZWN0KGFyZzEpKSk7XG59XG5cbmNvbnN0IF9fd2JnX3NlbGZfOTRhZjI1YWI2OTgzZmYyMl90YXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZWxmXzk0YWYyNWFiNjk4M2ZmMjIoYXJnMCkge1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KF9fd2JnX3NlbGZfOTRhZjI1YWI2OTgzZmYyMl90YXJnZXQuY2FsbChnZXRPYmplY3QoYXJnMCkpKTtcbn1cblxuY29uc3QgX193YmdfY3J5cHRvXzkyOGY3YTk4ZGEzM2NmNThfdGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmNyeXB0bztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19jcnlwdG9fOTI4ZjdhOThkYTMzY2Y1OChhcmcwKSB7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QoX193YmdfY3J5cHRvXzkyOGY3YTk4ZGEzM2NmNThfdGFyZ2V0LmNhbGwoZ2V0T2JqZWN0KGFyZzApKSk7XG59XG5cbmNvbnN0IF9fd2JnX2dldFJhbmRvbVZhbHVlc19iZjgyYTQ2MzAyMzcwY2MwX3RhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSYW5kb21WYWx1ZXM7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2V0UmFuZG9tVmFsdWVzX2JmODJhNDYzMDIzNzBjYzAoYXJnMCkge1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KF9fd2JnX2dldFJhbmRvbVZhbHVlc19iZjgyYTQ2MzAyMzcwY2MwX3RhcmdldC5jYWxsKGdldE9iamVjdChhcmcwKSkpO1xufVxuXG5jb25zdCBfX3diZ19nZXRSYW5kb21WYWx1ZXNfMmE1N2YxN2ZlYjk1ODA5N190YXJnZXQgPSBmdW5jdGlvbiAoeDApIHtcbiAgICByZXR1cm4gdGhpcy5nZXRSYW5kb21WYWx1ZXMoeDApO1xufTtcblxuZnVuY3Rpb24gZ2V0QXJyYXlVOEZyb21XYXNtKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGdldFVpbnQ4TWVtb3J5KCkuc3ViYXJyYXkocHRyIC8gMSwgcHRyIC8gMSArIGxlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19nZXRSYW5kb21WYWx1ZXNfMmE1N2YxN2ZlYjk1ODA5NyhhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgbGV0IHZhcmcxID0gZ2V0QXJyYXlVOEZyb21XYXNtKGFyZzEsIGFyZzIpO1xuICAgIF9fd2JnX2dldFJhbmRvbVZhbHVlc18yYTU3ZjE3ZmViOTU4MDk3X3RhcmdldC5jYWxsKGdldE9iamVjdChhcmcwKSwgdmFyZzEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcmVxdWlyZV80NDNmYmNhZDIyMjQyNmIyKGFyZzAsIGFyZzEpIHtcbiAgICBsZXQgdmFyZzAgPSBnZXRTdHJpbmdGcm9tV2FzbShhcmcwLCBhcmcxKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXF1aXJlKHZhcmcwKSk7XG59XG5cbmNvbnN0IF9fd2JnX3JhbmRvbUZpbGxTeW5jXzI5NzM3ZTA4ZjI5YjQ4ZGZfdGFyZ2V0ID0gZnVuY3Rpb24gKHgwKSB7XG4gICAgcmV0dXJuIHRoaXMucmFuZG9tRmlsbFN5bmMoeDApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3JhbmRvbUZpbGxTeW5jXzI5NzM3ZTA4ZjI5YjQ4ZGYoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGxldCB2YXJnMSA9IGdldEFycmF5VThGcm9tV2FzbShhcmcxLCBhcmcyKTtcbiAgICBfX3diZ19yYW5kb21GaWxsU3luY18yOTczN2UwOGYyOWI0OGRmX3RhcmdldC5jYWxsKGdldE9iamVjdChhcmcwKSwgdmFyZzEpO1xufVxuXG5mdW5jdGlvbiBmcmVlUHJvY2VzcyhwdHIpIHtcblxuICAgIHdhc20uX193YmdfcHJvY2Vzc19mcmVlKHB0cik7XG59XG4vKipcbiovXG5leHBvcnQgY2xhc3MgUHJvY2VzcyB7XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLnB0cjtcbiAgICAgICAgdGhpcy5wdHIgPSAwO1xuICAgICAgICBmcmVlUHJvY2VzcyhwdHIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCB2b2woKSB7XG4gICAgICAgIHJldHVybiB3YXNtLl9fd2JnX2dldF9wcm9jZXNzX3ZvbCh0aGlzLnB0cik7XG4gICAgfVxuICAgIHNldCB2b2woYXJnMCkge1xuICAgICAgICByZXR1cm4gd2FzbS5fX3diZ19zZXRfcHJvY2Vzc192b2wodGhpcy5wdHIsIGFyZzApO1xuICAgIH1cbiAgICAvKipcbiAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgKi9cbiAgICBnZXQgcmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHdhc20uX193YmdfZ2V0X3Byb2Nlc3NfcmF0ZSh0aGlzLnB0cik7XG4gICAgfVxuICAgIHNldCByYXRlKGFyZzApIHtcbiAgICAgICAgcmV0dXJuIHdhc20uX193Ymdfc2V0X3Byb2Nlc3NfcmF0ZSh0aGlzLnB0ciwgYXJnMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAqL1xuICAgIGdldCBpbml0aWFsX3ZhbHVlKCkge1xuICAgICAgICByZXR1cm4gd2FzbS5fX3diZ19nZXRfcHJvY2Vzc19pbml0aWFsX3ZhbHVlKHRoaXMucHRyKTtcbiAgICB9XG4gICAgc2V0IGluaXRpYWxfdmFsdWUoYXJnMCkge1xuICAgICAgICByZXR1cm4gd2FzbS5fX3diZ19zZXRfcHJvY2Vzc19pbml0aWFsX3ZhbHVlKHRoaXMucHRyLCBhcmcwKTtcbiAgICB9XG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzFcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcyXG4gICAgKiBAcmV0dXJucyB7fVxuICAgICovXG4gICAgY29uc3RydWN0b3IoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgICAgICB0aGlzLnB0ciA9IHdhc20ucHJvY2Vzc19uZXcoYXJnMCwgYXJnMSwgYXJnMik7XG4gICAgfVxuICAgIC8qKlxuICAgICogQHBhcmFtIHtudW1iZXJ9IGFyZzBcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBhcmcxXG4gICAgKiBAcGFyYW0ge251bWJlcn0gYXJnMlxuICAgICogQHJldHVybnMge0Zsb2F0NjRBcnJheX1cbiAgICAqL1xuICAgIGNhbGNfcGF0aHMoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgICAgICBjb25zdCByZXRwdHIgPSBnbG9iYWxBcmd1bWVudFB0cigpO1xuICAgICAgICB3YXNtLnByb2Nlc3NfY2FsY19wYXRocyhyZXRwdHIsIHRoaXMucHRyLCBhcmcwLCBhcmcxLCBhcmcyKTtcbiAgICAgICAgY29uc3QgbWVtID0gZ2V0VWludDMyTWVtb3J5KCk7XG4gICAgICAgIGNvbnN0IHJ1c3RwdHIgPSBtZW1bcmV0cHRyIC8gNF07XG4gICAgICAgIGNvbnN0IHJ1c3RsZW4gPSBtZW1bcmV0cHRyIC8gNCArIDFdO1xuXG4gICAgICAgIGNvbnN0IHJlYWxSZXQgPSBnZXRBcnJheUY2NEZyb21XYXNtKHJ1c3RwdHIsIHJ1c3RsZW4pLnNsaWNlKCk7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9mcmVlKHJ1c3RwdHIsIHJ1c3RsZW4gKiA4KTtcbiAgICAgICAgcmV0dXJuIHJlYWxSZXQ7XG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyb3BSZWYoaWR4KSB7XG5cbiAgICBpZHggPSBpZHggPj4gMTtcbiAgICBpZiAoaWR4IDwgNCkgcmV0dXJuO1xuICAgIGxldCBvYmogPSBzbGFiW2lkeF07XG5cbiAgICBvYmouY250IC09IDE7XG4gICAgaWYgKG9iai5jbnQgPiAwKSByZXR1cm47XG5cbiAgICAvLyBJZiB3ZSBoaXQgMCB0aGVuIGZyZWUgdXAgb3VyIHNwYWNlIGluIHRoZSBzbGFiXG4gICAgc2xhYltpZHhdID0gc2xhYl9uZXh0O1xuICAgIHNsYWJfbmV4dCA9IGlkeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmKGkpIHtcbiAgICBkcm9wUmVmKGkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pc191bmRlZmluZWQoaWR4KSB7XG4gICAgcmV0dXJuIGdldE9iamVjdChpZHgpID09PSB1bmRlZmluZWQgPyAxIDogMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fanN2YWxfZXEoYSwgYikge1xuICAgIHJldHVybiBnZXRPYmplY3QoYSkgPT09IGdldE9iamVjdChiKSA/IDEgOiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl90aHJvdyhwdHIsIGxlbikge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbShwdHIsIGxlbikpO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9