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
/******/ 					"__wbg_alert_fc3ac39541ae73f5": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_alert_fc3ac39541ae73f5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_ce9b4ee44f33326d": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_call_ce9b4ee44f33326d"](p0i32,p1i32);
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
/******/ 					"__wbg_new_410d028cca82cf04": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_new_410d028cca82cf04"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_require_443fbcad222426b2": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_require_443fbcad222426b2"](p0i32,p1i32);
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
/******/ 					"__wbg_getRandomValues_2a57f17feb958097": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_getRandomValues_2a57f17feb958097"](p0i32,p1i32,p2i32);
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
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./node_modules/montecarlo/montecarlo_bg.wasm":"1766548ca0dff0393f21"}[wasmModuleId] + ".wasm");
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
                    res = Object(_path_container__WEBPACK_IMPORTED_MODULE_1__["flattenRawPaths"])(process_1.calc_paths(req.tau, req.nbrOfSteps, req.nbrOfPaths), req.nbrOfPaths, req.nbrOfSteps);
                    process_1.free();
                    return [2 /*return*/, res];
                }
                else if (req.kind === 'pricing-request') {
                    process_2 = new mod.Process(req.process.vol, req.process.rate, req.process.initialValue);
                    res = Object(_path_container__WEBPACK_IMPORTED_MODULE_1__["flattenRawPaths"])(process_2.calc_paths(req.tau, req.nbrOfSteps, req.nbrOfPaths), req.nbrOfPaths, req.nbrOfSteps);
                    process_2.free();
                    func = new Function("process", req.payoffSrc);
                    prices = res
                        .map(func)
                        .map(function (fwdp) { return fwdp; });
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
    console.assert(rawdata.length / nbrOfPaths === numberOfSteps, 'inconsistent input data');
    // if (rawdata.length / nbrOfPaths === numberOfSteps) {
    //     throw new Error('inconsistent input data');
    // }
    var res = [];
    for (var i = 0; i < nbrOfPaths; i++) {
        var startIdx = i * numberOfSteps;
        var endIdx = startIdx + numberOfSteps;
        var path = Array.from(rawdata.slice(startIdx, endIdx));
        res.push(path);
    }
    return res;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb21pc2Utd29ya2VyL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvY2FsY2VuZ2luZS53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9wYXRoLWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUNBQTZCLDBCQUEwQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJOztBQUVKOztBQUVBLDhCQUFzQixxREFBcUQ7O0FBRTNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUFtRCxzRUFBc0U7QUFDekg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1AsY0FBTTtBQUNOO0FBQ0EsY0FBTTtBQUNOLHVEQUErQyx3QkFBd0IsRUFBRTtBQUN6RTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBLFlBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwTVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSxPQUFPLE9BQU87QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQSxzQkFvREE7QUFwRDREO0FBRVQ7QUFHbkQsSUFBSSxHQUFHLEdBQXVDLElBQUksQ0FBQztBQUVuRCw4REFBcUIsQ0FBQyxVQUFPLEdBQVk7Ozs7O2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFvQixHQUFHLENBQUMsSUFBTSxDQUFDLENBQUM7cUJBQ3hDLElBQUcsQ0FBQyxJQUFJLEtBQUssdUJBQXVCLEdBQXBDLHdCQUFvQztnQkFDckIscUJBQU0sa0xBQW9COztnQkFBbkMsV0FBUyxTQUEwQjtnQkFDekMsR0FBRyxHQUFHLFFBQU0sQ0FBQztnQkFDYixzQkFBTyxJQUFJLEVBQUM7O2dCQUVYLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7b0JBQzNCLFlBQVUsSUFBSSxHQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUM1QyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFDaEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFeEIsR0FBRyxHQUFHLHVFQUFlLENBQUMsU0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUNsRCxHQUFHLENBQUMsVUFBVSxFQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFDZixHQUFHLENBQUMsVUFBVSxFQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEIsU0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNmLHNCQUFPLEdBQUcsRUFBQztpQkFDZDtxQkFDSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssaUJBQWlCLEVBQUU7b0JBQy9CLFlBQVUsSUFBSSxHQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUM1QyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFDaEIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFeEIsR0FBRyxHQUFHLHVFQUFlLENBQUMsU0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUNsRCxHQUFHLENBQUMsVUFBVSxFQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFDZixHQUFHLENBQUMsVUFBVSxFQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEIsU0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNULElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBb0MsQ0FBQztvQkFDakYsTUFBTSxHQUFHLEdBQUc7eUJBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQzt5QkFDVCxHQUFHLENBQUMsY0FBSSxJQUFJLFdBQUksRUFBSixDQUFJLENBQUMsQ0FBQztvQkFDakIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLFFBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQzdELElBQUksR0FBa0I7d0JBQ3hCLGNBQWMsRUFBRSxRQUFRO3dCQUN4QixTQUFTLEVBQUUsTUFBTTt3QkFDakIsS0FBSyxFQUFFLEdBQUc7cUJBQ2IsQ0FBQztvQkFDRixzQkFBTyxJQUFJLEVBQUM7aUJBQ2Y7Ozs7O0tBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUNIO0FBQUE7QUFBTyxTQUFTLGVBQWUsQ0FBQyxPQUFxQixFQUNqRCxVQUFrQixFQUFFLGFBQXFCO0lBQ3pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVLEtBQUssYUFBYSxFQUFFLHlCQUF5QixDQUFDLENBQUM7SUFDekYsdURBQXVEO0lBQ3ZELGtEQUFrRDtJQUNsRCxJQUFJO0lBQ0osSUFBTSxHQUFHLEdBQWtCLEVBQUUsQ0FBQztJQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLElBQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBTSxNQUFNLEdBQUcsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN4QyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQyIsImZpbGUiOiJ3b3JrZXJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHRzZWxmW1wid2VicGFja0NodW5rXCJdID0gZnVuY3Rpb24gd2VicGFja0NodW5rQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuIFx0XHR3aGlsZShjaHVua0lkcy5sZW5ndGgpXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzLnBvcCgpXSA9IDE7XG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImJ1bmRsZVwiOiAxXG4gXHR9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIHdhc20gbW9kdWxlc1xuIFx0dmFyIGluc3RhbGxlZFdhc21Nb2R1bGVzID0ge307XG5cbiBcdGZ1bmN0aW9uIHByb21pc2VSZXNvbHZlKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH1cblxuIFx0dmFyIHdhc21JbXBvcnRPYmplY3RzID0ge1xuIFx0XHRcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsb19iZy53YXNtXCI6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcIi4vbW9udGVjYXJsb1wiOiB7XG4gXHRcdFx0XHRcdFwiX193YmdfYWxlcnRfZmMzYWMzOTU0MWFlNzNmNVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19hbGVydF9mYzNhYzM5NTQxYWU3M2Y1XCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diaW5kZ2VuX3Rocm93XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5fdGhyb3dcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2NhbGxfY2U5YjRlZTQ0ZjMzMzI2ZFwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19jYWxsX2NlOWI0ZWU0NGYzMzMyNmRcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3NlbGZfOTRhZjI1YWI2OTgzZmYyMlwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19zZWxmXzk0YWYyNWFiNjk4M2ZmMjJcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2NyeXB0b185MjhmN2E5OGRhMzNjZjU4XCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX2NyeXB0b185MjhmN2E5OGRhMzNjZjU4XCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfYmY4MmE0NjMwMjM3MGNjMFwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfYmY4MmE0NjMwMjM3MGNjMFwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfbmV3XzQxMGQwMjhjY2E4MmNmMDRcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmdfbmV3XzQxMGQwMjhjY2E4MmNmMDRcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3JlcXVpcmVfNDQzZmJjYWQyMjI0MjZiMlwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19yZXF1aXJlXzQ0M2ZiY2FkMjIyNDI2YjJcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX3JhbmRvbUZpbGxTeW5jXzI5NzM3ZTA4ZjI5YjQ4ZGZcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmdfcmFuZG9tRmlsbFN5bmNfMjk3MzdlMDhmMjliNDhkZlwiXShwMGkzMixwMWkzMixwMmkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmluZGdlbl9pc191bmRlZmluZWRcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmluZGdlbl9pc191bmRlZmluZWRcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fanN2YWxfZXFcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmluZGdlbl9qc3ZhbF9lcVwiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWZcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWZcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2dldFJhbmRvbVZhbHVlc18yYTU3ZjE3ZmViOTU4MDk3XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX2dldFJhbmRvbVZhbHVlc18yYTU3ZjE3ZmViOTU4MDk3XCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0sXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuIFx0XHRwcm9taXNlcy5wdXNoKFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0Ly8gXCIxXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdFx0aWYoIWluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0aW1wb3J0U2NyaXB0cyhcIlwiICsgY2h1bmtJZCArIFwiLndvcmtlcmJ1bmRsZS5qc1wiKTtcbiBcdFx0XHR9XG4gXHRcdH0pKTtcblxuIFx0XHQvLyBGZXRjaCArIGNvbXBpbGUgY2h1bmsgbG9hZGluZyBmb3Igd2ViYXNzZW1ibHlcblxuIFx0XHR2YXIgd2FzbU1vZHVsZXMgPSB7XCIxXCI6W1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvX2JnLndhc21cIl19W2NodW5rSWRdIHx8IFtdO1xuXG4gXHRcdHdhc21Nb2R1bGVzLmZvckVhY2goZnVuY3Rpb24od2FzbU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIGluc3RhbGxlZFdhc21Nb2R1bGVEYXRhID0gaW5zdGFsbGVkV2FzbU1vZHVsZXNbd2FzbU1vZHVsZUlkXTtcblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIgb3IgXCJhbHJlYWR5IGxvYWRlZFwiLlxuIFx0XHRcdGlmKGluc3RhbGxlZFdhc21Nb2R1bGVEYXRhKVxuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSk7XG4gXHRcdFx0ZWxzZSB7XG4gXHRcdFx0XHR2YXIgaW1wb3J0T2JqZWN0ID0gd2FzbUltcG9ydE9iamVjdHNbd2FzbU1vZHVsZUlkXSgpO1xuIFx0XHRcdFx0dmFyIHJlcSA9IGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyB7XCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG9fYmcud2FzbVwiOlwiMTc2NjU0OGNhMGRmZjAzOTNmMjFcIn1bd2FzbU1vZHVsZUlkXSArIFwiLndhc21cIik7XG4gXHRcdFx0XHR2YXIgcHJvbWlzZTtcbiBcdFx0XHRcdGlmKGltcG9ydE9iamVjdCBpbnN0YW5jZW9mIFByb21pc2UgJiYgdHlwZW9mIFdlYkFzc2VtYmx5LmNvbXBpbGVTdHJlYW1pbmcgPT09ICdmdW5jdGlvbicpIHtcbiBcdFx0XHRcdFx0cHJvbWlzZSA9IFByb21pc2UuYWxsKFtXZWJBc3NlbWJseS5jb21waWxlU3RyZWFtaW5nKHJlcSksIGltcG9ydE9iamVjdF0pLnRoZW4oZnVuY3Rpb24oaXRlbXMpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoaXRlbXNbMF0sIGl0ZW1zWzFdKTtcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9IGVsc2UgaWYodHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gXHRcdFx0XHRcdHByb21pc2UgPSBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhyZXEsIGltcG9ydE9iamVjdCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHR2YXIgYnl0ZXNQcm9taXNlID0gcmVxLnRoZW4oZnVuY3Rpb24oeCkgeyByZXR1cm4geC5hcnJheUJ1ZmZlcigpOyB9KTtcbiBcdFx0XHRcdFx0cHJvbWlzZSA9IGJ5dGVzUHJvbWlzZS50aGVuKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGJ5dGVzLCBpbXBvcnRPYmplY3QpO1xuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkV2FzbU1vZHVsZXNbd2FzbU1vZHVsZUlkXSA9IHByb21pc2UudGhlbihmdW5jdGlvbihyZXMpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ud1t3YXNtTW9kdWxlSWRdID0gKHJlcy5pbnN0YW5jZSB8fCByZXMpLmV4cG9ydHM7XG4gXHRcdFx0XHR9KSk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gb2JqZWN0IHdpdGggYWxsIFdlYkFzc2VtYmx5Lmluc3RhbmNlIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18udyA9IHt9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbmdpbmUvY2FsY2VuZ2luZS53b3JrZXIudHNcIik7XG4iLCIndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gaXNQcm9taXNlIChvYmopIHtcbiAgLy8gdmlhIGh0dHBzOi8vdW5wa2cuY29tL2lzLXByb21pc2VAMi4xLjAvaW5kZXguanNcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbidcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJQcm9taXNlV29ya2VyIChjYWxsYmFjaykge1xuICBmdW5jdGlvbiBwb3N0T3V0Z29pbmdNZXNzYWdlIChlLCBtZXNzYWdlSWQsIGVycm9yLCByZXN1bHQpIHtcbiAgICBmdW5jdGlvbiBwb3N0TWVzc2FnZSAobXNnKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5wb3N0TWVzc2FnZSAhPT0gJ2Z1bmN0aW9uJykgeyAvLyBzZXJ2aWNlIHdvcmtlclxuICAgICAgICBlLnBvcnRzWzBdLnBvc3RNZXNzYWdlKG1zZylcbiAgICAgIH0gZWxzZSB7IC8vIHdlYiB3b3JrZXJcbiAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShtc2cpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlcnJvcikge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2Vycm9yJyBpbiBjb25zb2xlKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgdG8gbWFrZSBlcnJvcnMgZWFzaWVyIHRvIGRlYnVnLiBJIHRoaW5rIGl0J3MgaW1wb3J0YW50XG4gICAgICAgIC8vIGVub3VnaCB0byBqdXN0IGxlYXZlIGhlcmUgd2l0aG91dCBnaXZpbmcgdGhlIHVzZXIgYW4gb3B0aW9uXG4gICAgICAgIC8vIHRvIHNpbGVuY2UgaXQuXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1dvcmtlciBjYXVnaHQgYW4gZXJyb3I6JywgZXJyb3IpXG4gICAgICB9XG4gICAgICBwb3N0TWVzc2FnZShbbWVzc2FnZUlkLCB7XG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH1dKVxuICAgIH0gZWxzZSB7XG4gICAgICBwb3N0TWVzc2FnZShbbWVzc2FnZUlkLCBudWxsLCByZXN1bHRdKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoRnVuYyAoY2FsbGJhY2ssIG1lc3NhZ2UpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgcmVzOiBjYWxsYmFjayhtZXNzYWdlKSB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHsgZXJyOiBlIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVJbmNvbWluZ01lc3NhZ2UgKGUsIGNhbGxiYWNrLCBtZXNzYWdlSWQsIG1lc3NhZ2UpIHtcbiAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2hGdW5jKGNhbGxiYWNrLCBtZXNzYWdlKVxuXG4gICAgaWYgKHJlc3VsdC5lcnIpIHtcbiAgICAgIHBvc3RPdXRnb2luZ01lc3NhZ2UoZSwgbWVzc2FnZUlkLCByZXN1bHQuZXJyKVxuICAgIH0gZWxzZSBpZiAoIWlzUHJvbWlzZShyZXN1bHQucmVzKSkge1xuICAgICAgcG9zdE91dGdvaW5nTWVzc2FnZShlLCBtZXNzYWdlSWQsIG51bGwsIHJlc3VsdC5yZXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5yZXMudGhlbihmdW5jdGlvbiAoZmluYWxSZXN1bHQpIHtcbiAgICAgICAgcG9zdE91dGdvaW5nTWVzc2FnZShlLCBtZXNzYWdlSWQsIG51bGwsIGZpbmFsUmVzdWx0KVxuICAgICAgfSwgZnVuY3Rpb24gKGZpbmFsRXJyb3IpIHtcbiAgICAgICAgcG9zdE91dGdvaW5nTWVzc2FnZShlLCBtZXNzYWdlSWQsIGZpbmFsRXJyb3IpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uSW5jb21pbmdNZXNzYWdlIChlKSB7XG4gICAgdmFyIHBheWxvYWQgPSBlLmRhdGFcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocGF5bG9hZCkgfHwgcGF5bG9hZC5sZW5ndGggIT09IDIpIHtcbiAgICAgIC8vIG1lc3NhZ2UgZG9lbnMndCBtYXRjaCBjb21tdW5pY2F0aW9uIGZvcm1hdDsgaWdub3JlXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIG1lc3NhZ2VJZCA9IHBheWxvYWRbMF1cbiAgICB2YXIgbWVzc2FnZSA9IHBheWxvYWRbMV1cblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBvc3RPdXRnb2luZ01lc3NhZ2UoZSwgbWVzc2FnZUlkLCBuZXcgRXJyb3IoXG4gICAgICAgICdQbGVhc2UgcGFzcyBhIGZ1bmN0aW9uIGludG8gcmVnaXN0ZXIoKS4nKSlcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlSW5jb21pbmdNZXNzYWdlKGUsIGNhbGxiYWNrLCBtZXNzYWdlSWQsIG1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25JbmNvbWluZ01lc3NhZ2UpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVnaXN0ZXJQcm9taXNlV29ya2VyXG4iLCJpbXBvcnQgcmVnaXN0ZXJQcm9taXNlV29ya2VyIGZyb20gJ3Byb21pc2Utd29ya2VyL3JlZ2lzdGVyJztcclxuaW1wb3J0IHsgUmVxdWVzdCwgUHJpY2luZ1JlcXVlc3QgfSBmcm9tICcuL3Byb3RvY29sJztcclxuaW1wb3J0IHsgZmxhdHRlblJhd1BhdGhzIH0gZnJvbSAnLi9wYXRoLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7IFByaWNpbmdSZXN1bHQgfSBmcm9tICcuL3ByaWNpbmcnO1xyXG5cclxubGV0IG1vZDogdHlwZW9mIGltcG9ydChcIm1vbnRlY2FybG9cIikgfCBudWxsID0gbnVsbDtcclxuXHJcbnJlZ2lzdGVyUHJvbWlzZVdvcmtlcihhc3luYyAocmVxOiBSZXF1ZXN0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgcmVjaWV2ZWQgcmVxdWVzdCAke3JlcS5raW5kfWApO1xyXG4gICAgaWYgKHJlcS5raW5kID09PSAnZW5naW5lLWluaXRpYWxpemF0aW9uJykge1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnbW9udGVjYXJsbycpO1xyXG4gICAgICAgIG1vZCA9IG1vZHVsZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJlcS5raW5kID09PSAncGF0aHJlcXVlc3QnKSB7XHJcbiAgICAgICAgY29uc3QgcHJvY2VzcyA9IG5ldyBtb2QhLlByb2Nlc3MocmVxLnByb2Nlc3Mudm9sLFxyXG4gICAgICAgICAgICByZXEucHJvY2Vzcy5yYXRlLFxyXG4gICAgICAgICAgICByZXEucHJvY2Vzcy5pbml0aWFsVmFsdWUpO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBmbGF0dGVuUmF3UGF0aHMocHJvY2Vzcy5jYWxjX3BhdGhzKHJlcS50YXUsXHJcbiAgICAgICAgICAgIHJlcS5uYnJPZlN0ZXBzLFxyXG4gICAgICAgICAgICByZXEubmJyT2ZQYXRocyksXHJcbiAgICAgICAgICAgIHJlcS5uYnJPZlBhdGhzLFxyXG4gICAgICAgICAgICByZXEubmJyT2ZTdGVwcyk7XHJcbiAgICAgICAgcHJvY2Vzcy5mcmVlKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHJlcS5raW5kID09PSAncHJpY2luZy1yZXF1ZXN0Jykge1xyXG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBuZXcgbW9kIS5Qcm9jZXNzKHJlcS5wcm9jZXNzLnZvbCxcclxuICAgICAgICAgICAgcmVxLnByb2Nlc3MucmF0ZSxcclxuICAgICAgICAgICAgcmVxLnByb2Nlc3MuaW5pdGlhbFZhbHVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gZmxhdHRlblJhd1BhdGhzKHByb2Nlc3MuY2FsY19wYXRocyhyZXEudGF1LFxyXG4gICAgICAgICAgICByZXEubmJyT2ZTdGVwcyxcclxuICAgICAgICAgICAgcmVxLm5ick9mUGF0aHMpLFxyXG4gICAgICAgICAgICByZXEubmJyT2ZQYXRocyxcclxuICAgICAgICAgICAgcmVxLm5ick9mU3RlcHMpO1xyXG4gICAgICAgIHByb2Nlc3MuZnJlZSgpO1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBuZXcgRnVuY3Rpb24oXCJwcm9jZXNzXCIsIHJlcS5wYXlvZmZTcmMpIGFzICgocHJvY2VzczogbnVtYmVyW10pID0+IG51bWJlcik7XHJcbiAgICAgICAgY29uc3QgcHJpY2VzID0gcmVzXHJcbiAgICAgICAgICAgIC5tYXAoZnVuYylcclxuICAgICAgICAgICAgLm1hcChmd2RwID0+IGZ3ZHApOyAvLyBGSVhNRTogZGlzY291bnQgdG8gdD0wXHJcbiAgICAgICAgY29uc3QgYXZnUHJpY2UgPSBwcmljZXMucmVkdWNlKChwLCBjKSA9PiBwICsgYywgMCkgLyBwcmljZXMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IHByZXM6IFByaWNpbmdSZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGVzdGltYXRlZFByaWNlOiBhdmdQcmljZSxcclxuICAgICAgICAgICAgcmF3UHJpY2VzOiBwcmljZXMsXHJcbiAgICAgICAgICAgIHBhdGhzOiByZXMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcHJlcztcclxuICAgIH1cclxufSk7XHJcblxyXG4iLCJleHBvcnQgdHlwZSBQYXRoID0gbnVtYmVyW107XHJcblxyXG5leHBvcnQgdHlwZSBQYXRoQ29udGFpbmVyID0gUGF0aFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5SYXdQYXRocyhyYXdkYXRhOiBGbG9hdDY0QXJyYXksXHJcbiAgICBuYnJPZlBhdGhzOiBudW1iZXIsIG51bWJlck9mU3RlcHM6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5hc3NlcnQocmF3ZGF0YS5sZW5ndGggLyBuYnJPZlBhdGhzID09PSBudW1iZXJPZlN0ZXBzLCAnaW5jb25zaXN0ZW50IGlucHV0IGRhdGEnKTtcclxuICAgIC8vIGlmIChyYXdkYXRhLmxlbmd0aCAvIG5ick9mUGF0aHMgPT09IG51bWJlck9mU3RlcHMpIHtcclxuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luY29uc2lzdGVudCBpbnB1dCBkYXRhJyk7XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCByZXM6IFBhdGhDb250YWluZXIgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJyT2ZQYXRoczsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJZHggPSBpICogbnVtYmVyT2ZTdGVwcztcclxuICAgICAgICBjb25zdCBlbmRJZHggPSBzdGFydElkeCArIG51bWJlck9mU3RlcHM7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IEFycmF5LmZyb20ocmF3ZGF0YS5zbGljZShzdGFydElkeCwgZW5kSWR4KSk7XHJcbiAgICAgICAgcmVzLnB1c2gocGF0aCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==