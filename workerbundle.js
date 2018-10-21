/******/ (function(modules) { // webpackBootstrap
/******/ 	self["webpackChunk"] = function webpackChunkCallback(chunkIds, moreModules) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		while(chunkIds.length)
/******/ 			installedChunks[chunkIds.pop()] = 1;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"bundle": 1
/******/ 	};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./node_modules/montecarlo/montecarlo_bg.wasm": function() {
/******/ 			return {
/******/ 				"./montecarlo": {
/******/ 					"__wbg_new_410d028cca82cf04": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_new_410d028cca82cf04"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_94af25ab6983ff22": function(p0i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_self_94af25ab6983ff22"](p0i32);
/******/ 					},
/******/ 					"__wbg_crypto_928f7a98da33cf58": function(p0i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_crypto_928f7a98da33cf58"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_bf82a46302370cc0": function(p0i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_getRandomValues_bf82a46302370cc0"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_2a57f17feb958097": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_getRandomValues_2a57f17feb958097"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_call_ce9b4ee44f33326d": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_call_ce9b4ee44f33326d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_29737e08f29b48df": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_randomFillSync_29737e08f29b48df"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_jsval_eq": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbindgen_jsval_eq"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_require_443fbcad222426b2": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_require_443fbcad222426b2"](p0i32,p1i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/ 		promises.push(Promise.resolve().then(function() {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				importScripts("" + chunkId + ".workerbundle.js");
/******/ 			}
/******/ 		}));
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./node_modules/montecarlo/montecarlo_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./node_modules/montecarlo/montecarlo_bg.wasm":"80b7be7d66235331dc6b"}[wasmModuleId] + ".wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/engine/calcengine.worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/promise-worker/register.js":
/*!*************************************************!*\
  !*** ./node_modules/promise-worker/register.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isPromise (obj) {
  // via https://unpkg.com/is-promise@2.1.0/index.js
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}

function registerPromiseWorker (callback) {
  function postOutgoingMessage (e, messageId, error, result) {
    function postMessage (msg) {
      /* istanbul ignore if */
      if (typeof self.postMessage !== 'function') { // service worker
        e.ports[0].postMessage(msg)
      } else { // web worker
        self.postMessage(msg)
      }
    }
    if (error) {
      /* istanbul ignore else */
      if (typeof console !== 'undefined' && 'error' in console) {
        // This is to make errors easier to debug. I think it's important
        // enough to just leave here without giving the user an option
        // to silence it.
        console.error('Worker caught an error:', error)
      }
      postMessage([messageId, {
        message: error.message
      }])
    } else {
      postMessage([messageId, null, result])
    }
  }

  function tryCatchFunc (callback, message) {
    try {
      return { res: callback(message) }
    } catch (e) {
      return { err: e }
    }
  }

  function handleIncomingMessage (e, callback, messageId, message) {
    var result = tryCatchFunc(callback, message)

    if (result.err) {
      postOutgoingMessage(e, messageId, result.err)
    } else if (!isPromise(result.res)) {
      postOutgoingMessage(e, messageId, null, result.res)
    } else {
      result.res.then(function (finalResult) {
        postOutgoingMessage(e, messageId, null, finalResult)
      }, function (finalError) {
        postOutgoingMessage(e, messageId, finalError)
      })
    }
  }

  function onIncomingMessage (e) {
    var payload = e.data
    if (!Array.isArray(payload) || payload.length !== 2) {
      // message doens't match communication format; ignore
      return
    }
    var messageId = payload[0]
    var message = payload[1]

    if (typeof callback !== 'function') {
      postOutgoingMessage(e, messageId, new Error(
        'Please pass a function into register().'))
    } else {
      handleIncomingMessage(e, callback, messageId, message)
    }
  }

  self.addEventListener('message', onIncomingMessage)
}

module.exports = registerPromiseWorker


/***/ }),

/***/ "./src/engine/calcengine.worker.ts":
/*!*****************************************!*\
  !*** ./src/engine/calcengine.worker.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var promise_worker_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-worker/register */ "./node_modules/promise-worker/register.js");
/* harmony import */ var promise_worker_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(promise_worker_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _path_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path-container */ "./src/engine/path-container.ts");
/* harmony import */ var _pricing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pricing */ "./src/engine/pricing.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = undefined;



var mod = null;
function getNativeScheme(inpScheme) {
    switch (inpScheme) {
        case _pricing__WEBPACK_IMPORTED_MODULE_2__["NamedDiscretizationScheme"].Exact:
            return mod.DiscretizationScheme.Exact;
        case _pricing__WEBPACK_IMPORTED_MODULE_2__["NamedDiscretizationScheme"].EulerMaruyama:
            return mod.DiscretizationScheme.EulerMaruyama;
        default:
            throw new Error("Unknown scheme " + inpScheme);
    }
}
promise_worker_register__WEBPACK_IMPORTED_MODULE_0___default()(function (req) { return __awaiter(_this, void 0, void 0, function () {
    var module_1, process_1, res, process_2, res, func, prices, avgPrice, pres;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("recieved request " + req.kind);
                if (!(req.kind === 'engine-initialization')) return [3 /*break*/, 2];
                return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! montecarlo */ "./node_modules/montecarlo/montecarlo.js"))];
            case 1:
                module_1 = _a.sent();
                mod = module_1;
                return [2 /*return*/, true];
            case 2:
                if (req.kind === 'pathrequest') {
                    process_1 = new mod.Process(req.process.vol, req.process.rate, req.process.initialValue);
                    res = Object(_path_container__WEBPACK_IMPORTED_MODULE_1__["flattenRawPaths"])(process_1.calc_paths(getNativeScheme(req.scheme), req.tau, req.nbrOfSteps, req.nbrOfPaths), req.nbrOfPaths, req.nbrOfSteps);
                    process_1.free();
                    return [2 /*return*/, res];
                }
                else if (req.kind === 'pricing-request') {
                    process_2 = new mod.Process(req.process.vol, req.process.rate, req.process.initialValue);
                    res = Object(_path_container__WEBPACK_IMPORTED_MODULE_1__["flattenRawPaths"])(process_2.calc_paths(getNativeScheme(req.scheme), req.tau, req.nbrOfSteps, req.nbrOfPaths), req.nbrOfPaths, req.nbrOfSteps);
                    process_2.free();
                    func = new Function("process", req.payoffSrc);
                    prices = res
                        .map(func)
                        .map(function (fwdp) { return Math.exp(-req.process.rate * req.tau) * fwdp; });
                    avgPrice = prices.reduce(function (p, c) { return p + c; }, 0) / prices.length;
                    pres = {
                        estimatedPrice: avgPrice,
                        rawPrices: prices,
                        paths: res,
                    };
                    return [2 /*return*/, pres];
                }
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });


/***/ }),

/***/ "./src/engine/path-container.ts":
/*!**************************************!*\
  !*** ./src/engine/path-container.ts ***!
  \**************************************/
/*! exports provided: flattenRawPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenRawPaths", function() { return flattenRawPaths; });
function flattenRawPaths(rawdata, nbrOfPaths, numberOfSteps) {
    console.assert(rawdata.length / nbrOfPaths === numberOfSteps + 1, 'inconsistent input data');
    var res = [];
    for (var i = 0; i < nbrOfPaths; i++) {
        var startIdx = i * (numberOfSteps + 1);
        var endIdx = startIdx + numberOfSteps + 1;
        var path = Array.from(rawdata.slice(startIdx, endIdx));
        res.push(path);
    }
    return res;
}


/***/ }),

/***/ "./src/engine/pricing.ts":
/*!*******************************!*\
  !*** ./src/engine/pricing.ts ***!
  \*******************************/
/*! exports provided: NamedDiscretizationScheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedDiscretizationScheme", function() { return NamedDiscretizationScheme; });
var NamedDiscretizationScheme;
(function (NamedDiscretizationScheme) {
    NamedDiscretizationScheme["Exact"] = "Exact";
    NamedDiscretizationScheme["EulerMaruyama"] = "Euler-Maruyama";
})(NamedDiscretizationScheme || (NamedDiscretizationScheme = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb21pc2Utd29ya2VyL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvY2FsY2VuZ2luZS53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9wYXRoLWNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3ByaWNpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDQUE2QiwwQkFBMEI7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7O0FBRUo7O0FBRUEsOEJBQXNCLHFEQUFxRDs7QUFFM0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQW1ELHNFQUFzRTtBQUN6SDtBQUNBO0FB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LCJzb3VyY2VzQ29udGVudCI6WyIgXHRzZWxmW1wid2VicGFja0NodW5rXCJdID0gZnVuY3Rpb24gd2VicGFja0NodW5rQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuIFx0XHR3aGlsZShjaHVua0lkcy5sZW5ndGgpXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzLnBvcCgpXSA9IDE7XG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImJ1bmRsZVwiOiAxXG4gXHR9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIHdhc20gbW9kdWxlc1xuIFx0dmFyIGluc3RhbGxlZFdhc21Nb2R1bGVzID0ge307XG5cbiBcdGZ1bmN0aW9uIHByb21pc2VSZXNvbHZlKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH1cblxuIFx0dmFyIHdhc21JbXBvcnRPYmplY3RzID0ge1xuIFx0XHRcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsb19iZy53YXNtXCI6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcIi4vbW9udGVjYXJsb1wiOiB7XG4gXHRcdFx0XHRcdFwiX193YmdfbmV3XzQxMGQwMjhjY2E4MmNmMDRcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmdfbmV3XzQxMGQwMjhjY2E4MmNmMDRcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fdGhyb3dcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmluZGdlbl90aHJvd1wiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193Ymdfc2VsZl85NGFmMjVhYjY5ODNmZjIyXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX3NlbGZfOTRhZjI1YWI2OTgzZmYyMlwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfY3J5cHRvXzkyOGY3YTk4ZGEzM2NmNThcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmdfY3J5cHRvXzkyOGY3YTk4ZGEzM2NmNThcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2dldFJhbmRvbVZhbHVlc19iZjgyYTQ2MzAyMzcwY2MwXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX2dldFJhbmRvbVZhbHVlc19iZjgyYTQ2MzAyMzcwY2MwXCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfMmE1N2YxN2ZlYjk1ODA5N1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfMmE1N2YxN2ZlYjk1ODA5N1wiXShwMGkzMixwMWkzMixwMmkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfY2FsbF9jZTliNGVlNDRmMzMzMjZkXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX2NhbGxfY2U5YjRlZTQ0ZjMzMzI2ZFwiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfcmFuZG9tRmlsbFN5bmNfMjk3MzdlMDhmMjliNDhkZlwiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19yYW5kb21GaWxsU3luY18yOTczN2UwOGYyOWI0OGRmXCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZFwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZFwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmluZGdlbl9qc3ZhbF9lcVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX2pzdmFsX2VxXCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZlwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZlwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfcmVxdWlyZV80NDNmYmNhZDIyMjQyNmIyXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX3JlcXVpcmVfNDQzZmJjYWQyMjI0MjZiMlwiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9LFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcbiBcdFx0cHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRcdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdGltcG9ydFNjcmlwdHMoXCJcIiArIGNodW5rSWQgKyBcIi53b3JrZXJidW5kbGUuanNcIik7XG4gXHRcdFx0fVxuIFx0XHR9KSk7XG5cbiBcdFx0Ly8gRmV0Y2ggKyBjb21waWxlIGNodW5rIGxvYWRpbmcgZm9yIHdlYmFzc2VtYmx5XG5cbiBcdFx0dmFyIHdhc21Nb2R1bGVzID0ge1wiMVwiOltcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsb19iZy53YXNtXCJdfVtjaHVua0lkXSB8fCBbXTtcblxuIFx0XHR3YXNtTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHdhc21Nb2R1bGVJZCkge1xuIFx0XHRcdHZhciBpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSA9IGluc3RhbGxlZFdhc21Nb2R1bGVzW3dhc21Nb2R1bGVJZF07XG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiIG9yIFwiYWxyZWFkeSBsb2FkZWRcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSlcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkV2FzbU1vZHVsZURhdGEpO1xuIFx0XHRcdGVsc2Uge1xuIFx0XHRcdFx0dmFyIGltcG9ydE9iamVjdCA9IHdhc21JbXBvcnRPYmplY3RzW3dhc21Nb2R1bGVJZF0oKTtcbiBcdFx0XHRcdHZhciByZXEgPSBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsge1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvX2JnLndhc21cIjpcIjgwYjdiZTdkNjYyMzUzMzFkYzZiXCJ9W3dhc21Nb2R1bGVJZF0gKyBcIi53YXNtXCIpO1xuIFx0XHRcdFx0dmFyIHByb21pc2U7XG4gXHRcdFx0XHRpZihpbXBvcnRPYmplY3QgaW5zdGFuY2VvZiBQcm9taXNlICYmIHR5cGVvZiBXZWJBc3NlbWJseS5jb21waWxlU3RyZWFtaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gXHRcdFx0XHRcdHByb21pc2UgPSBQcm9taXNlLmFsbChbV2ViQXNzZW1ibHkuY29tcGlsZVN0cmVhbWluZyhyZXEpLCBpbXBvcnRPYmplY3RdKS50aGVuKGZ1bmN0aW9uKGl0ZW1zKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGl0ZW1zWzBdLCBpdGVtc1sxXSk7XG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyA9PT0gJ2Z1bmN0aW9uJykge1xuIFx0XHRcdFx0XHRwcm9taXNlID0gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocmVxLCBpbXBvcnRPYmplY3QpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0dmFyIGJ5dGVzUHJvbWlzZSA9IHJlcS50aGVuKGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHguYXJyYXlCdWZmZXIoKTsgfSk7XG4gXHRcdFx0XHRcdHByb21pc2UgPSBieXRlc1Byb21pc2UudGhlbihmdW5jdGlvbihieXRlcykge1xuIFx0XHRcdFx0XHRcdHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShieXRlcywgaW1wb3J0T2JqZWN0KTtcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZFdhc21Nb2R1bGVzW3dhc21Nb2R1bGVJZF0gPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLndbd2FzbU1vZHVsZUlkXSA9IChyZXMuaW5zdGFuY2UgfHwgcmVzKS5leHBvcnRzO1xuIFx0XHRcdFx0fSkpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9iamVjdCB3aXRoIGFsbCBXZWJBc3NlbWJseS5pbnN0YW5jZSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLncgPSB7fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW5naW5lL2NhbGNlbmdpbmUud29ya2VyLnRzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAob2JqKSB7XG4gIC8vIHZpYSBodHRwczovL3VucGtnLmNvbS9pcy1wcm9taXNlQDIuMS4wL2luZGV4LmpzXG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyUHJvbWlzZVdvcmtlciAoY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gcG9zdE91dGdvaW5nTWVzc2FnZSAoZSwgbWVzc2FnZUlkLCBlcnJvciwgcmVzdWx0KSB7XG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UgKG1zZykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAodHlwZW9mIHNlbGYucG9zdE1lc3NhZ2UgIT09ICdmdW5jdGlvbicpIHsgLy8gc2VydmljZSB3b3JrZXJcbiAgICAgICAgZS5wb3J0c1swXS5wb3N0TWVzc2FnZShtc2cpXG4gICAgICB9IGVsc2UgeyAvLyB3ZWIgd29ya2VyXG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UobXNnKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmICdlcnJvcicgaW4gY29uc29sZSkge1xuICAgICAgICAvLyBUaGlzIGlzIHRvIG1ha2UgZXJyb3JzIGVhc2llciB0byBkZWJ1Zy4gSSB0aGluayBpdCdzIGltcG9ydGFudFxuICAgICAgICAvLyBlbm91Z2ggdG8ganVzdCBsZWF2ZSBoZXJlIHdpdGhvdXQgZ2l2aW5nIHRoZSB1c2VyIGFuIG9wdGlvblxuICAgICAgICAvLyB0byBzaWxlbmNlIGl0LlxuICAgICAgICBjb25zb2xlLmVycm9yKCdXb3JrZXIgY2F1Z2h0IGFuIGVycm9yOicsIGVycm9yKVxuICAgICAgfVxuICAgICAgcG9zdE1lc3NhZ2UoW21lc3NhZ2VJZCwge1xuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XSlcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zdE1lc3NhZ2UoW21lc3NhZ2VJZCwgbnVsbCwgcmVzdWx0XSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cnlDYXRjaEZ1bmMgKGNhbGxiYWNrLCBtZXNzYWdlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHJlczogY2FsbGJhY2sobWVzc2FnZSkgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB7IGVycjogZSB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5jb21pbmdNZXNzYWdlIChlLCBjYWxsYmFjaywgbWVzc2FnZUlkLCBtZXNzYWdlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoRnVuYyhjYWxsYmFjaywgbWVzc2FnZSlcblxuICAgIGlmIChyZXN1bHQuZXJyKSB7XG4gICAgICBwb3N0T3V0Z29pbmdNZXNzYWdlKGUsIG1lc3NhZ2VJZCwgcmVzdWx0LmVycilcbiAgICB9IGVsc2UgaWYgKCFpc1Byb21pc2UocmVzdWx0LnJlcykpIHtcbiAgICAgIHBvc3RPdXRnb2luZ01lc3NhZ2UoZSwgbWVzc2FnZUlkLCBudWxsLCByZXN1bHQucmVzKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucmVzLnRoZW4oZnVuY3Rpb24gKGZpbmFsUmVzdWx0KSB7XG4gICAgICAgIHBvc3RPdXRnb2luZ01lc3NhZ2UoZSwgbWVzc2FnZUlkLCBudWxsLCBmaW5hbFJlc3VsdClcbiAgICAgIH0sIGZ1bmN0aW9uIChmaW5hbEVycm9yKSB7XG4gICAgICAgIHBvc3RPdXRnb2luZ01lc3NhZ2UoZSwgbWVzc2FnZUlkLCBmaW5hbEVycm9yKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkluY29taW5nTWVzc2FnZSAoZSkge1xuICAgIHZhciBwYXlsb2FkID0gZS5kYXRhXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBheWxvYWQpIHx8IHBheWxvYWQubGVuZ3RoICE9PSAyKSB7XG4gICAgICAvLyBtZXNzYWdlIGRvZW5zJ3QgbWF0Y2ggY29tbXVuaWNhdGlvbiBmb3JtYXQ7IGlnbm9yZVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBtZXNzYWdlSWQgPSBwYXlsb2FkWzBdXG4gICAgdmFyIG1lc3NhZ2UgPSBwYXlsb2FkWzFdXG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwb3N0T3V0Z29pbmdNZXNzYWdlKGUsIG1lc3NhZ2VJZCwgbmV3IEVycm9yKFxuICAgICAgICAnUGxlYXNlIHBhc3MgYSBmdW5jdGlvbiBpbnRvIHJlZ2lzdGVyKCkuJykpXG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZUluY29taW5nTWVzc2FnZShlLCBjYWxsYmFjaywgbWVzc2FnZUlkLCBtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uSW5jb21pbmdNZXNzYWdlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZ2lzdGVyUHJvbWlzZVdvcmtlclxuIiwiaW1wb3J0IHJlZ2lzdGVyUHJvbWlzZVdvcmtlciBmcm9tICdwcm9taXNlLXdvcmtlci9yZWdpc3Rlcic7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFByaWNpbmdSZXF1ZXN0IH0gZnJvbSAnLi9wcm90b2NvbCc7XHJcbmltcG9ydCB7IGZsYXR0ZW5SYXdQYXRocyB9IGZyb20gJy4vcGF0aC1jb250YWluZXInO1xyXG5pbXBvcnQgeyBQcmljaW5nUmVzdWx0LCBOYW1lZERpc2NyZXRpemF0aW9uU2NoZW1lIH0gZnJvbSAnLi9wcmljaW5nJztcclxuaW1wb3J0IHsgRGlzY3JldGl6YXRpb25TY2hlbWUgfSBmcm9tICdtb250ZWNhcmxvJztcclxuXHJcbmxldCBtb2Q6IHR5cGVvZiBpbXBvcnQoXCJtb250ZWNhcmxvXCIpIHwgbnVsbCA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBnZXROYXRpdmVTY2hlbWUoaW5wU2NoZW1lOiBOYW1lZERpc2NyZXRpemF0aW9uU2NoZW1lKSB7XHJcbiAgICBzd2l0Y2ggKGlucFNjaGVtZSkge1xyXG4gICAgICAgIGNhc2UgTmFtZWREaXNjcmV0aXphdGlvblNjaGVtZS5FeGFjdDpcclxuICAgICAgICAgICAgcmV0dXJuIG1vZCEuRGlzY3JldGl6YXRpb25TY2hlbWUuRXhhY3Q7XHJcbiAgICAgICAgY2FzZSBOYW1lZERpc2NyZXRpemF0aW9uU2NoZW1lLkV1bGVyTWFydXlhbWE6XHJcbiAgICAgICAgICAgIHJldHVybiBtb2QhLkRpc2NyZXRpemF0aW9uU2NoZW1lLkV1bGVyTWFydXlhbWE7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHNjaGVtZSAke2lucFNjaGVtZX1gKTtcclxuICAgIH1cclxufVxyXG5cclxucmVnaXN0ZXJQcm9taXNlV29ya2VyKGFzeW5jIChyZXE6IFJlcXVlc3QpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGByZWNpZXZlZCByZXF1ZXN0ICR7cmVxLmtpbmR9YCk7XHJcbiAgICBpZiAocmVxLmtpbmQgPT09ICdlbmdpbmUtaW5pdGlhbGl6YXRpb24nKSB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KCdtb250ZWNhcmxvJyk7XHJcbiAgICAgICAgbW9kID0gbW9kdWxlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVxLmtpbmQgPT09ICdwYXRocmVxdWVzdCcpIHtcclxuICAgICAgICBjb25zdCBwcm9jZXNzID0gbmV3IG1vZCEuUHJvY2VzcyhyZXEucHJvY2Vzcy52b2wsXHJcbiAgICAgICAgICAgIHJlcS5wcm9jZXNzLnJhdGUsXHJcbiAgICAgICAgICAgIHJlcS5wcm9jZXNzLmluaXRpYWxWYWx1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGZsYXR0ZW5SYXdQYXRocyhwcm9jZXNzLmNhbGNfcGF0aHMoZ2V0TmF0aXZlU2NoZW1lKHJlcS5zY2hlbWUpLFxyXG4gICAgICAgICAgICByZXEudGF1LFxyXG4gICAgICAgICAgICByZXEubmJyT2ZTdGVwcyxcclxuICAgICAgICAgICAgcmVxLm5ick9mUGF0aHMpLFxyXG4gICAgICAgICAgICByZXEubmJyT2ZQYXRocyxcclxuICAgICAgICAgICAgcmVxLm5ick9mU3RlcHMpO1xyXG4gICAgICAgIHByb2Nlc3MuZnJlZSgpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZXEua2luZCA9PT0gJ3ByaWNpbmctcmVxdWVzdCcpIHtcclxuICAgICAgICBjb25zdCBwcm9jZXNzID0gbmV3IG1vZCEuUHJvY2VzcyhyZXEucHJvY2Vzcy52b2wsXHJcbiAgICAgICAgICAgIHJlcS5wcm9jZXNzLnJhdGUsXHJcbiAgICAgICAgICAgIHJlcS5wcm9jZXNzLmluaXRpYWxWYWx1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGZsYXR0ZW5SYXdQYXRocyhwcm9jZXNzLmNhbGNfcGF0aHMoZ2V0TmF0aXZlU2NoZW1lKHJlcS5zY2hlbWUpLFxyXG4gICAgICAgICAgICByZXEudGF1LFxyXG4gICAgICAgICAgICByZXEubmJyT2ZTdGVwcyxcclxuICAgICAgICAgICAgcmVxLm5ick9mUGF0aHMpLFxyXG4gICAgICAgICAgICByZXEubmJyT2ZQYXRocyxcclxuICAgICAgICAgICAgcmVxLm5ick9mU3RlcHMpO1xyXG4gICAgICAgIHByb2Nlc3MuZnJlZSgpO1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBuZXcgRnVuY3Rpb24oXCJwcm9jZXNzXCIsIHJlcS5wYXlvZmZTcmMpIGFzICgocHJvY2VzczogbnVtYmVyW10pID0+IG51bWJlcik7XHJcbiAgICAgICAgY29uc3QgcHJpY2VzID0gcmVzXHJcbiAgICAgICAgICAgIC5tYXAoZnVuYylcclxuICAgICAgICAgICAgLm1hcChmd2RwID0+IE1hdGguZXhwKC1yZXEucHJvY2Vzcy5yYXRlICogcmVxLnRhdSkgKiBmd2RwKTsgLy8gRklYTUU6IGRpc2NvdW50IHRvIHQ9MFxyXG4gICAgICAgIGNvbnN0IGF2Z1ByaWNlID0gcHJpY2VzLnJlZHVjZSgocCwgYykgPT4gcCArIGMsIDApIC8gcHJpY2VzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBwcmVzOiBQcmljaW5nUmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBlc3RpbWF0ZWRQcmljZTogYXZnUHJpY2UsXHJcbiAgICAgICAgICAgIHJhd1ByaWNlczogcHJpY2VzLFxyXG4gICAgICAgICAgICBwYXRoczogcmVzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHByZXM7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIiwiZXhwb3J0IHR5cGUgUGF0aCA9IG51bWJlcltdO1xyXG5cclxuZXhwb3J0IHR5cGUgUGF0aENvbnRhaW5lciA9IFBhdGhbXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuUmF3UGF0aHMocmF3ZGF0YTogRmxvYXQ2NEFycmF5LFxyXG4gICAgbmJyT2ZQYXRoczogbnVtYmVyLCBudW1iZXJPZlN0ZXBzOiBudW1iZXIpIHtcclxuICAgIGNvbnNvbGUuYXNzZXJ0KHJhd2RhdGEubGVuZ3RoIC8gbmJyT2ZQYXRocyA9PT0gbnVtYmVyT2ZTdGVwcyArIDEsICdpbmNvbnNpc3RlbnQgaW5wdXQgZGF0YScpO1xyXG4gICAgY29uc3QgcmVzOiBQYXRoQ29udGFpbmVyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ick9mUGF0aHM7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0SWR4ID0gaSAqIChudW1iZXJPZlN0ZXBzICsgMSk7XHJcbiAgICAgICAgY29uc3QgZW5kSWR4ID0gc3RhcnRJZHggKyBudW1iZXJPZlN0ZXBzICsgMTtcclxuICAgICAgICBjb25zdCBwYXRoID0gQXJyYXkuZnJvbShyYXdkYXRhLnNsaWNlKHN0YXJ0SWR4LCBlbmRJZHgpKTtcclxuICAgICAgICByZXMucHVzaChwYXRoKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn0iLCJpbXBvcnQgeyBQYXRoQ29udGFpbmVyIH0gZnJvbSBcIi4vcGF0aC1jb250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpY2luZ1Jlc3VsdCB7XHJcbiAgICBlc3RpbWF0ZWRQcmljZTogbnVtYmVyO1xyXG4gICAgcmF3UHJpY2VzOiBudW1iZXJbXTtcclxuICAgIHBhdGhzOiBQYXRoQ29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBOYW1lZERpc2NyZXRpemF0aW9uU2NoZW1lIHtcclxuICAgIEV4YWN0ID0gXCJFeGFjdFwiLFxyXG4gICAgRXVsZXJNYXJ1eWFtYSA9IFwiRXVsZXItTWFydXlhbWFcIlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==