/* tslint:disable */
import * as wasm from './montecarlo_bg.wasm';

let cachegetFloat64Memory = null;
function getFloat64Memory() {
    if (cachegetFloat64Memory === null || cachegetFloat64Memory.buffer !== wasm.memory.buffer) {
        cachegetFloat64Memory = new Float64Array(wasm.memory.buffer);
    }
    return cachegetFloat64Memory;
}

function getArrayF64FromWasm(ptr, len) {
    return getFloat64Memory().subarray(ptr / 8, ptr / 8 + len);
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}
/**
* @returns {Float64Array}
*/
export function render_path() {
    const retptr = globalArgumentPtr();
    wasm.render_path(retptr);
    const mem = getUint32Memory();
    const rustptr = mem[retptr / 4];
    const rustlen = mem[retptr / 4 + 1];

    const realRet = getArrayF64FromWasm(rustptr, rustlen).slice();
    wasm.__wbindgen_free(rustptr, rustlen * 8);
    return realRet;

}

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbg_alert_fc3ac39541ae73f5(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    alert(varg0);
}
/**
* @returns {void}
*/
export function greet() {
    return wasm.greet();
}

function _assertNum(n) {
    if (typeof (n) !== 'number') throw new Error('expected a number argument');
}

const slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];

export function assertSlabEmpty() {
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

export function __wbg_new_410d028cca82cf04(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
}

const __wbg_call_ce9b4ee44f33326d_target = Function.prototype.call || function () {
    throw new Error(`wasm-bindgen: Function.prototype.call does not exist`);
};

const stack = [];

export function assertStackEmpty() {
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

export function __wbg_call_ce9b4ee44f33326d(arg0, arg1) {
    return addHeapObject(__wbg_call_ce9b4ee44f33326d_target.call(getObject(arg0), getObject(arg1)));
}

const __wbg_self_94af25ab6983ff22_target = function () {
    return this.self;
};

export function __wbg_self_94af25ab6983ff22(arg0) {
    return addHeapObject(__wbg_self_94af25ab6983ff22_target.call(getObject(arg0)));
}

const __wbg_crypto_928f7a98da33cf58_target = function () {
    return this.crypto;
};

export function __wbg_crypto_928f7a98da33cf58(arg0) {
    return addHeapObject(__wbg_crypto_928f7a98da33cf58_target.call(getObject(arg0)));
}

const __wbg_getRandomValues_bf82a46302370cc0_target = function () {
    return this.getRandomValues;
};

export function __wbg_getRandomValues_bf82a46302370cc0(arg0) {
    return addHeapObject(__wbg_getRandomValues_bf82a46302370cc0_target.call(getObject(arg0)));
}

const __wbg_getRandomValues_2a57f17feb958097_target = function (x0) {
    return this.getRandomValues(x0);
};

function getArrayU8FromWasm(ptr, len) {
    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
}

export function __wbg_getRandomValues_2a57f17feb958097(arg0, arg1, arg2) {
    let varg1 = getArrayU8FromWasm(arg1, arg2);
    __wbg_getRandomValues_2a57f17feb958097_target.call(getObject(arg0), varg1);
}

export function __wbg_require_443fbcad222426b2(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(require(varg0));
}

const __wbg_randomFillSync_29737e08f29b48df_target = function (x0) {
    return this.randomFillSync(x0);
};

export function __wbg_randomFillSync_29737e08f29b48df(arg0, arg1, arg2) {
    let varg1 = getArrayU8FromWasm(arg1, arg2);
    __wbg_randomFillSync_29737e08f29b48df_target.call(getObject(arg0), varg1);
}

function freeProcess(ptr) {

    wasm.__wbg_process_free(ptr);
}
/**
*/
export class Process {

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
        return wasm.__wbg_get_process_vol(this.ptr);
    }
    set vol(arg0) {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        _assertNum(arg0);
        return wasm.__wbg_set_process_vol(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get rate() {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        return wasm.__wbg_get_process_rate(this.ptr);
    }
    set rate(arg0) {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        _assertNum(arg0);
        return wasm.__wbg_set_process_rate(this.ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get initial_value() {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        return wasm.__wbg_get_process_initial_value(this.ptr);
    }
    set initial_value(arg0) {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        _assertNum(arg0);
        return wasm.__wbg_set_process_initial_value(this.ptr, arg0);
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
        this.ptr = wasm.process_new(arg0, arg1, arg2);
    }
    /**
    * @param {number} arg0
    * @param {number} arg1
    * @param {number} arg2
    * @returns {Float64Array}
    */
    calc_paths(arg0, arg1, arg2) {
        if (this.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        _assertNum(arg0);
        _assertNum(arg1);
        _assertNum(arg2);
        const retptr = globalArgumentPtr();
        wasm.process_calc_paths(retptr, this.ptr, arg0, arg1, arg2);
        const mem = getUint32Memory();
        const rustptr = mem[retptr / 4];
        const rustlen = mem[retptr / 4 + 1];

        const realRet = getArrayF64FromWasm(rustptr, rustlen).slice();
        wasm.__wbindgen_free(rustptr, rustlen * 8);
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

export function __wbindgen_object_drop_ref(i) {
    dropRef(i);
}

export function __wbindgen_is_undefined(idx) {
    return getObject(idx) === undefined ? 1 : 0;
}

export function __wbindgen_jsval_eq(a, b) {
    return getObject(a) === getObject(b) ? 1 : 0;
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

