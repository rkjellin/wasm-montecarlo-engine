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
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./node_modules/montecarlo/montecarlo_bg.wasm":"1b90934fe9d0e033b02f"}[wasmModuleId] + ".wasm");
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb21pc2Utd29ya2VyL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvY2FsY2VuZ2luZS53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9wYXRoLWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUNBQTZCLDBCQUEwQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJOztBQUVKOztBQUVBLDhCQUFzQixxREFBcUQ7O0FBRTNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUFtRCxzRUFBc0U7QUFDekg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFP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QUUseUJBQXlCLENBQUMsQ0FBQztJQUM3RixJQUFNLEdBQUcsR0FBa0IsRUFBRSxDQUFDO0lBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsSUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQU0sTUFBTSxHQUFHLFFBQVEsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDIiwiZmlsZSI6IndvcmtlcmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdHNlbGZbXCJ3ZWJwYWNrQ2h1bmtcIl0gPSBmdW5jdGlvbiB3ZWJwYWNrQ2h1bmtDYWxsYmFjayhjaHVua0lkcywgbW9yZU1vZHVsZXMpIHtcbiBcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdHdoaWxlKGNodW5rSWRzLmxlbmd0aClcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHMucG9wKCldID0gMTtcbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjFcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYnVuZGxlXCI6IDFcbiBcdH07XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgd2FzbSBtb2R1bGVzXG4gXHR2YXIgaW5zdGFsbGVkV2FzbU1vZHVsZXMgPSB7fTtcblxuIFx0ZnVuY3Rpb24gcHJvbWlzZVJlc29sdmUoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfVxuXG4gXHR2YXIgd2FzbUltcG9ydE9iamVjdHMgPSB7XG4gXHRcdFwiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvX2JnLndhc21cIjogZnVuY3Rpb24oKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFwiLi9tb250ZWNhcmxvXCI6IHtcbiBcdFx0XHRcdFx0XCJfX3diZ19hbGVydF9mYzNhYzM5NTQxYWU3M2Y1XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX2FsZXJ0X2ZjM2FjMzk1NDFhZTczZjVcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fdGhyb3dcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmluZGdlbl90aHJvd1wiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfY2FsbF9jZTliNGVlNDRmMzMzMjZkXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX2NhbGxfY2U5YjRlZTQ0ZjMzMzI2ZFwiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193Ymdfc2VsZl85NGFmMjVhYjY5ODNmZjIyXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX3NlbGZfOTRhZjI1YWI2OTgzZmYyMlwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfY3J5cHRvXzkyOGY3YTk4ZGEzM2NmNThcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmdfY3J5cHRvXzkyOGY3YTk4ZGEzM2NmNThcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX2dldFJhbmRvbVZhbHVlc19iZjgyYTQ2MzAyMzcwY2MwXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX2dldFJhbmRvbVZhbHVlc19iZjgyYTQ2MzAyMzcwY2MwXCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19uZXdfNDEwZDAyOGNjYTgyY2YwNFwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19uZXdfNDEwZDAyOGNjYTgyY2YwNFwiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfcmVxdWlyZV80NDNmYmNhZDIyMjQyNmIyXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX3JlcXVpcmVfNDQzZmJjYWQyMjI0MjZiMlwiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfcmFuZG9tRmlsbFN5bmNfMjk3MzdlMDhmMjliNDhkZlwiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19yYW5kb21GaWxsU3luY18yOTczN2UwOGYyOWI0OGRmXCJdKHAwaTMyLHAxaTMyLHAyaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZFwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZFwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmluZGdlbl9qc3ZhbF9lcVwiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX2pzdmFsX2VxXCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZlwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZlwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfZ2V0UmFuZG9tVmFsdWVzXzJhNTdmMTdmZWI5NTgwOTdcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIscDJpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmdfZ2V0UmFuZG9tVmFsdWVzXzJhNTdmMTdmZWI5NTgwOTdcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSxcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG4gXHRcdHByb21pc2VzLnB1c2goUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHQvLyBcIjFcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0XHRpZighaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRpbXBvcnRTY3JpcHRzKFwiXCIgKyBjaHVua0lkICsgXCIud29ya2VyYnVuZGxlLmpzXCIpO1xuIFx0XHRcdH1cbiBcdFx0fSkpO1xuXG4gXHRcdC8vIEZldGNoICsgY29tcGlsZSBjaHVuayBsb2FkaW5nIGZvciB3ZWJhc3NlbWJseVxuXG4gXHRcdHZhciB3YXNtTW9kdWxlcyA9IHtcIjFcIjpbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG9fYmcud2FzbVwiXX1bY2h1bmtJZF0gfHwgW107XG5cbiBcdFx0d2FzbU1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbih3YXNtTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgaW5zdGFsbGVkV2FzbU1vZHVsZURhdGEgPSBpbnN0YWxsZWRXYXNtTW9kdWxlc1t3YXNtTW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIiBvciBcImFscmVhZHkgbG9hZGVkXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkV2FzbU1vZHVsZURhdGEpXG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZFdhc21Nb2R1bGVEYXRhKTtcbiBcdFx0XHRlbHNlIHtcbiBcdFx0XHRcdHZhciBpbXBvcnRPYmplY3QgPSB3YXNtSW1wb3J0T2JqZWN0c1t3YXNtTW9kdWxlSWRdKCk7XG4gXHRcdFx0XHR2YXIgcmVxID0gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIHtcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsb19iZy53YXNtXCI6XCIxYjkwOTM0ZmU5ZDBlMDMzYjAyZlwifVt3YXNtTW9kdWxlSWRdICsgXCIud2FzbVwiKTtcbiBcdFx0XHRcdHZhciBwcm9taXNlO1xuIFx0XHRcdFx0aWYoaW1wb3J0T2JqZWN0IGluc3RhbmNlb2YgUHJvbWlzZSAmJiB0eXBlb2YgV2ViQXNzZW1ibHkuY29tcGlsZVN0cmVhbWluZyA9PT0gJ2Z1bmN0aW9uJykge1xuIFx0XHRcdFx0XHRwcm9taXNlID0gUHJvbWlzZS5hbGwoW1dlYkFzc2VtYmx5LmNvbXBpbGVTdHJlYW1pbmcocmVxKSwgaW1wb3J0T2JqZWN0XSkudGhlbihmdW5jdGlvbihpdGVtcykge1xuIFx0XHRcdFx0XHRcdHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShpdGVtc1swXSwgaXRlbXNbMV0pO1xuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH0gZWxzZSBpZih0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgPT09ICdmdW5jdGlvbicpIHtcbiBcdFx0XHRcdFx0cHJvbWlzZSA9IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlcSwgaW1wb3J0T2JqZWN0KTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHZhciBieXRlc1Byb21pc2UgPSByZXEudGhlbihmdW5jdGlvbih4KSB7IHJldHVybiB4LmFycmF5QnVmZmVyKCk7IH0pO1xuIFx0XHRcdFx0XHRwcm9taXNlID0gYnl0ZXNQcm9taXNlLnRoZW4oZnVuY3Rpb24oYnl0ZXMpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYnl0ZXMsIGltcG9ydE9iamVjdCk7XG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRXYXNtTW9kdWxlc1t3YXNtTW9kdWxlSWRdID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJlcykge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy53W3dhc21Nb2R1bGVJZF0gPSAocmVzLmluc3RhbmNlIHx8IHJlcykuZXhwb3J0cztcbiBcdFx0XHRcdH0pKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvYmplY3Qgd2l0aCBhbGwgV2ViQXNzZW1ibHkuaW5zdGFuY2UgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy53ID0ge307XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VuZ2luZS9jYWxjZW5naW5lLndvcmtlci50c1wiKTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5mdW5jdGlvbiBpc1Byb21pc2UgKG9iaikge1xuICAvLyB2aWEgaHR0cHM6Ly91bnBrZy5jb20vaXMtcHJvbWlzZUAyLjEuMC9pbmRleC5qc1xuICByZXR1cm4gISFvYmogJiYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG5mdW5jdGlvbiByZWdpc3RlclByb21pc2VXb3JrZXIgKGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIHBvc3RPdXRnb2luZ01lc3NhZ2UgKGUsIG1lc3NhZ2VJZCwgZXJyb3IsIHJlc3VsdCkge1xuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlIChtc2cpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHR5cGVvZiBzZWxmLnBvc3RNZXNzYWdlICE9PSAnZnVuY3Rpb24nKSB7IC8vIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgIGUucG9ydHNbMF0ucG9zdE1lc3NhZ2UobXNnKVxuICAgICAgfSBlbHNlIHsgLy8gd2ViIHdvcmtlclxuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKG1zZylcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiAnZXJyb3InIGluIGNvbnNvbGUpIHtcbiAgICAgICAgLy8gVGhpcyBpcyB0byBtYWtlIGVycm9ycyBlYXNpZXIgdG8gZGVidWcuIEkgdGhpbmsgaXQncyBpbXBvcnRhbnRcbiAgICAgICAgLy8gZW5vdWdoIHRvIGp1c3QgbGVhdmUgaGVyZSB3aXRob3V0IGdpdmluZyB0aGUgdXNlciBhbiBvcHRpb25cbiAgICAgICAgLy8gdG8gc2lsZW5jZSBpdC5cbiAgICAgICAgY29uc29sZS5lcnJvcignV29ya2VyIGNhdWdodCBhbiBlcnJvcjonLCBlcnJvcilcbiAgICAgIH1cbiAgICAgIHBvc3RNZXNzYWdlKFttZXNzYWdlSWQsIHtcbiAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgfV0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc3RNZXNzYWdlKFttZXNzYWdlSWQsIG51bGwsIHJlc3VsdF0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2hGdW5jIChjYWxsYmFjaywgbWVzc2FnZSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyByZXM6IGNhbGxiYWNrKG1lc3NhZ2UpIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4geyBlcnI6IGUgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUluY29taW5nTWVzc2FnZSAoZSwgY2FsbGJhY2ssIG1lc3NhZ2VJZCwgbWVzc2FnZSkge1xuICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaEZ1bmMoY2FsbGJhY2ssIG1lc3NhZ2UpXG5cbiAgICBpZiAocmVzdWx0LmVycikge1xuICAgICAgcG9zdE91dGdvaW5nTWVzc2FnZShlLCBtZXNzYWdlSWQsIHJlc3VsdC5lcnIpXG4gICAgfSBlbHNlIGlmICghaXNQcm9taXNlKHJlc3VsdC5yZXMpKSB7XG4gICAgICBwb3N0T3V0Z29pbmdNZXNzYWdlKGUsIG1lc3NhZ2VJZCwgbnVsbCwgcmVzdWx0LnJlcylcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnJlcy50aGVuKGZ1bmN0aW9uIChmaW5hbFJlc3VsdCkge1xuICAgICAgICBwb3N0T3V0Z29pbmdNZXNzYWdlKGUsIG1lc3NhZ2VJZCwgbnVsbCwgZmluYWxSZXN1bHQpXG4gICAgICB9LCBmdW5jdGlvbiAoZmluYWxFcnJvcikge1xuICAgICAgICBwb3N0T3V0Z29pbmdNZXNzYWdlKGUsIG1lc3NhZ2VJZCwgZmluYWxFcnJvcilcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25JbmNvbWluZ01lc3NhZ2UgKGUpIHtcbiAgICB2YXIgcGF5bG9hZCA9IGUuZGF0YVxuICAgIGlmICghQXJyYXkuaXNBcnJheShwYXlsb2FkKSB8fCBwYXlsb2FkLmxlbmd0aCAhPT0gMikge1xuICAgICAgLy8gbWVzc2FnZSBkb2Vucyd0IG1hdGNoIGNvbW11bmljYXRpb24gZm9ybWF0OyBpZ25vcmVcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgbWVzc2FnZUlkID0gcGF5bG9hZFswXVxuICAgIHZhciBtZXNzYWdlID0gcGF5bG9hZFsxXVxuXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcG9zdE91dGdvaW5nTWVzc2FnZShlLCBtZXNzYWdlSWQsIG5ldyBFcnJvcihcbiAgICAgICAgJ1BsZWFzZSBwYXNzIGEgZnVuY3Rpb24gaW50byByZWdpc3RlcigpLicpKVxuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVJbmNvbWluZ01lc3NhZ2UoZSwgY2FsbGJhY2ssIG1lc3NhZ2VJZCwgbWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbkluY29taW5nTWVzc2FnZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWdpc3RlclByb21pc2VXb3JrZXJcbiIsImltcG9ydCByZWdpc3RlclByb21pc2VXb3JrZXIgZnJvbSAncHJvbWlzZS13b3JrZXIvcmVnaXN0ZXInO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBQcmljaW5nUmVxdWVzdCB9IGZyb20gJy4vcHJvdG9jb2wnO1xyXG5pbXBvcnQgeyBmbGF0dGVuUmF3UGF0aHMgfSBmcm9tICcuL3BhdGgtY29udGFpbmVyJztcclxuaW1wb3J0IHsgUHJpY2luZ1Jlc3VsdCB9IGZyb20gJy4vcHJpY2luZyc7XHJcblxyXG5sZXQgbW9kOiB0eXBlb2YgaW1wb3J0KFwibW9udGVjYXJsb1wiKSB8IG51bGwgPSBudWxsO1xyXG5cclxucmVnaXN0ZXJQcm9taXNlV29ya2VyKGFzeW5jIChyZXE6IFJlcXVlc3QpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGByZWNpZXZlZCByZXF1ZXN0ICR7cmVxLmtpbmR9YCk7XHJcbiAgICBpZiAocmVxLmtpbmQgPT09ICdlbmdpbmUtaW5pdGlhbGl6YXRpb24nKSB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KCdtb250ZWNhcmxvJyk7XHJcbiAgICAgICAgbW9kID0gbW9kdWxlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVxLmtpbmQgPT09ICdwYXRocmVxdWVzdCcpIHtcclxuICAgICAgICBjb25zdCBwcm9jZXNzID0gbmV3IG1vZCEuUHJvY2VzcyhyZXEucHJvY2Vzcy52b2wsXHJcbiAgICAgICAgICAgIHJlcS5wcm9jZXNzLnJhdGUsXHJcbiAgICAgICAgICAgIHJlcS5wcm9jZXNzLmluaXRpYWxWYWx1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGZsYXR0ZW5SYXdQYXRocyhwcm9jZXNzLmNhbGNfcGF0aHMocmVxLnRhdSxcclxuICAgICAgICAgICAgcmVxLm5ick9mU3RlcHMsXHJcbiAgICAgICAgICAgIHJlcS5uYnJPZlBhdGhzKSxcclxuICAgICAgICAgICAgcmVxLm5ick9mUGF0aHMsXHJcbiAgICAgICAgICAgIHJlcS5uYnJPZlN0ZXBzKTtcclxuICAgICAgICBwcm9jZXNzLmZyZWUoKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVxLmtpbmQgPT09ICdwcmljaW5nLXJlcXVlc3QnKSB7XHJcbiAgICAgICAgY29uc3QgcHJvY2VzcyA9IG5ldyBtb2QhLlByb2Nlc3MocmVxLnByb2Nlc3Mudm9sLFxyXG4gICAgICAgICAgICByZXEucHJvY2Vzcy5yYXRlLFxyXG4gICAgICAgICAgICByZXEucHJvY2Vzcy5pbml0aWFsVmFsdWUpO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBmbGF0dGVuUmF3UGF0aHMocHJvY2Vzcy5jYWxjX3BhdGhzKHJlcS50YXUsXHJcbiAgICAgICAgICAgIHJlcS5uYnJPZlN0ZXBzLFxyXG4gICAgICAgICAgICByZXEubmJyT2ZQYXRocyksXHJcbiAgICAgICAgICAgIHJlcS5uYnJPZlBhdGhzLFxyXG4gICAgICAgICAgICByZXEubmJyT2ZTdGVwcyk7XHJcbiAgICAgICAgcHJvY2Vzcy5mcmVlKCk7XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbihcInByb2Nlc3NcIiwgcmVxLnBheW9mZlNyYykgYXMgKChwcm9jZXNzOiBudW1iZXJbXSkgPT4gbnVtYmVyKTtcclxuICAgICAgICBjb25zdCBwcmljZXMgPSByZXNcclxuICAgICAgICAgICAgLm1hcChmdW5jKVxyXG4gICAgICAgICAgICAubWFwKGZ3ZHAgPT4gTWF0aC5leHAoLXJlcS5wcm9jZXNzLnJhdGUgKiByZXEudGF1KSAqIGZ3ZHApOyAvLyBGSVhNRTogZGlzY291bnQgdG8gdD0wXHJcbiAgICAgICAgY29uc3QgYXZnUHJpY2UgPSBwcmljZXMucmVkdWNlKChwLCBjKSA9PiBwICsgYywgMCkgLyBwcmljZXMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IHByZXM6IFByaWNpbmdSZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGVzdGltYXRlZFByaWNlOiBhdmdQcmljZSxcclxuICAgICAgICAgICAgcmF3UHJpY2VzOiBwcmljZXMsXHJcbiAgICAgICAgICAgIHBhdGhzOiByZXMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcHJlcztcclxuICAgIH1cclxufSk7XHJcblxyXG4iLCJleHBvcnQgdHlwZSBQYXRoID0gbnVtYmVyW107XHJcblxyXG5leHBvcnQgdHlwZSBQYXRoQ29udGFpbmVyID0gUGF0aFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5SYXdQYXRocyhyYXdkYXRhOiBGbG9hdDY0QXJyYXksXHJcbiAgICBuYnJPZlBhdGhzOiBudW1iZXIsIG51bWJlck9mU3RlcHM6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5hc3NlcnQocmF3ZGF0YS5sZW5ndGggLyBuYnJPZlBhdGhzID09PSBudW1iZXJPZlN0ZXBzICsgMSwgJ2luY29uc2lzdGVudCBpbnB1dCBkYXRhJyk7XHJcbiAgICBjb25zdCByZXM6IFBhdGhDb250YWluZXIgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJyT2ZQYXRoczsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJZHggPSBpICogKG51bWJlck9mU3RlcHMgKyAxKTtcclxuICAgICAgICBjb25zdCBlbmRJZHggPSBzdGFydElkeCArIG51bWJlck9mU3RlcHMgKyAxO1xyXG4gICAgICAgIGNvbnN0IHBhdGggPSBBcnJheS5mcm9tKHJhd2RhdGEuc2xpY2Uoc3RhcnRJZHgsIGVuZElkeCkpO1xyXG4gICAgICAgIHJlcy5wdXNoKHBhdGgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufSJdLCJzb3VyY2VSb290IjoiIn0=