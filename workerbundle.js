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
    console.assert(rawdata.length / nbrOfPaths === numberOfSteps, 'inconsistent input data');
    // if (rawdata.length / nbrOfPaths === numberOfSteps) {
    //     throw new Error('inconsistent input data');
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb21pc2Utd29ya2VyL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvY2FsY2VuZ2luZS53b3JrZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9wYXRoLWNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUNBQTZCLDBCQUEwQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBLGVBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJOztBQUVKOztBQUVBLDhCQUFzQixxREFBcUQ7O0FBRTNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUFtRCxzRUFBc0U7QUFDekg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFP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Q0FBQyxDQUFDO0lBQ3pGLHVEQUF1RDtJQUN2RCxrREFBa0Q7SUFDbEQsSUFBSTtJQUNKLElBQU0sR0FBRyxHQUFrQixFQUFFLENBQUM7SUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsSUFBTSxNQUFNLEdBQUcsUUFBUSxHQUFHLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEI7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMiLCJmaWxlIjoid29ya2VyYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0c2VsZltcIndlYnBhY2tDaHVua1wiXSA9IGZ1bmN0aW9uIHdlYnBhY2tDaHVua0NhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcykge1xuIFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cbiBcdFx0d2hpbGUoY2h1bmtJZHMubGVuZ3RoKVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkcy5wb3AoKV0gPSAxO1xuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMVwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJidW5kbGVcIjogMVxuIFx0fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyB3YXNtIG1vZHVsZXNcbiBcdHZhciBpbnN0YWxsZWRXYXNtTW9kdWxlcyA9IHt9O1xuXG4gXHRmdW5jdGlvbiBwcm9taXNlUmVzb2x2ZSgpIHsgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpOyB9XG5cbiBcdHZhciB3YXNtSW1wb3J0T2JqZWN0cyA9IHtcbiBcdFx0XCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG9fYmcud2FzbVwiOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XCIuL21vbnRlY2FybG9cIjoge1xuIFx0XHRcdFx0XHRcIl9fd2JnX2FsZXJ0X2ZjM2FjMzk1NDFhZTczZjVcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmdfYWxlcnRfZmMzYWMzOTU0MWFlNzNmNVwiXShwMGkzMixwMWkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmluZGdlbl90aHJvd1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diaW5kZ2VuX3Rocm93XCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19jYWxsX2NlOWI0ZWU0NGYzMzMyNmRcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmdfY2FsbF9jZTliNGVlNDRmMzMzMjZkXCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19zZWxmXzk0YWYyNWFiNjk4M2ZmMjJcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193Ymdfc2VsZl85NGFmMjVhYjY5ODNmZjIyXCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19jcnlwdG9fOTI4ZjdhOThkYTMzY2Y1OFwiOiBmdW5jdGlvbihwMGkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19jcnlwdG9fOTI4ZjdhOThkYTMzY2Y1OFwiXShwMGkzMik7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdFwiX193YmdfZ2V0UmFuZG9tVmFsdWVzX2JmODJhNDYzMDIzNzBjYzBcIjogZnVuY3Rpb24ocDBpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmdfZ2V0UmFuZG9tVmFsdWVzX2JmODJhNDYzMDIzNzBjYzBcIl0ocDBpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JnX25ld180MTBkMDI4Y2NhODJjZjA0XCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX25ld180MTBkMDI4Y2NhODJjZjA0XCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19yZXF1aXJlXzQ0M2ZiY2FkMjIyNDI2YjJcIjogZnVuY3Rpb24ocDBpMzIscDFpMzIpIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1tcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsby5qc1wiXS5leHBvcnRzW1wiX193YmdfcmVxdWlyZV80NDNmYmNhZDIyMjQyNmIyXCJdKHAwaTMyLHAxaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19yYW5kb21GaWxsU3luY18yOTczN2UwOGYyOWI0OGRmXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyLHAyaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JnX3JhbmRvbUZpbGxTeW5jXzI5NzM3ZTA4ZjI5YjQ4ZGZcIl0ocDBpMzIscDFpMzIscDJpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5faXNfdW5kZWZpbmVkXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5faXNfdW5kZWZpbmVkXCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diaW5kZ2VuX2pzdmFsX2VxXCI6IGZ1bmN0aW9uKHAwaTMyLHAxaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5fanN2YWxfZXFcIl0ocDBpMzIscDFpMzIpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRcIl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmXCI6IGZ1bmN0aW9uKHAwaTMyKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbXCIuL25vZGVfbW9kdWxlcy9tb250ZWNhcmxvL21vbnRlY2FybG8uanNcIl0uZXhwb3J0c1tcIl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmXCJdKHAwaTMyKTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0XCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfMmE1N2YxN2ZlYjk1ODA5N1wiOiBmdW5jdGlvbihwMGkzMixwMWkzMixwMmkzMikge1xuIFx0XHRcdFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvLmpzXCJdLmV4cG9ydHNbXCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfMmE1N2YxN2ZlYjk1ODA5N1wiXShwMGkzMixwMWkzMixwMmkzMik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9LFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcbiBcdFx0cHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRcdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdGltcG9ydFNjcmlwdHMoXCJcIiArIGNodW5rSWQgKyBcIi53b3JrZXJidW5kbGUuanNcIik7XG4gXHRcdFx0fVxuIFx0XHR9KSk7XG5cbiBcdFx0Ly8gRmV0Y2ggKyBjb21waWxlIGNodW5rIGxvYWRpbmcgZm9yIHdlYmFzc2VtYmx5XG5cbiBcdFx0dmFyIHdhc21Nb2R1bGVzID0ge1wiMVwiOltcIi4vbm9kZV9tb2R1bGVzL21vbnRlY2FybG8vbW9udGVjYXJsb19iZy53YXNtXCJdfVtjaHVua0lkXSB8fCBbXTtcblxuIFx0XHR3YXNtTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKHdhc21Nb2R1bGVJZCkge1xuIFx0XHRcdHZhciBpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSA9IGluc3RhbGxlZFdhc21Nb2R1bGVzW3dhc21Nb2R1bGVJZF07XG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiIG9yIFwiYWxyZWFkeSBsb2FkZWRcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRXYXNtTW9kdWxlRGF0YSlcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkV2FzbU1vZHVsZURhdGEpO1xuIFx0XHRcdGVsc2Uge1xuIFx0XHRcdFx0dmFyIGltcG9ydE9iamVjdCA9IHdhc21JbXBvcnRPYmplY3RzW3dhc21Nb2R1bGVJZF0oKTtcbiBcdFx0XHRcdHZhciByZXEgPSBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsge1wiLi9ub2RlX21vZHVsZXMvbW9udGVjYXJsby9tb250ZWNhcmxvX2JnLndhc21cIjpcIjFiOTA5MzRmZTlkMGUwMzNiMDJmXCJ9W3dhc21Nb2R1bGVJZF0gKyBcIi53YXNtXCIpO1xuIFx0XHRcdFx0dmFyIHByb21pc2U7XG4gXHRcdFx0XHRpZihpbXBvcnRPYmplY3QgaW5zdGFuY2VvZiBQcm9taXNlICYmIHR5cGVvZiBXZWJBc3NlbWJseS5jb21waWxlU3RyZWFtaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gXHRcdFx0XHRcdHByb21pc2UgPSBQcm9taXNlLmFsbChbV2ViQXNzZW1ibHkuY29tcGlsZVN0cmVhbWluZyhyZXEpLCBpbXBvcnRPYmplY3RdKS50aGVuKGZ1bmN0aW9uKGl0ZW1zKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGl0ZW1zWzBdLCBpdGVtc1sxXSk7XG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyA9PT0gJ2Z1bmN0aW9uJykge1xuIFx0XHRcdFx0XHRwcm9taXNlID0gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocmVxLCBpbXBvcnRPYmplY3QpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0dmFyIGJ5dGVzUHJvbWlzZSA9IHJlcS50aGVuKGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHguYXJyYXlCdWZmZXIoKTsgfSk7XG4gXHRcdFx0XHRcdHByb21pc2UgPSBieXRlc1Byb21pc2UudGhlbihmdW5jdGlvbihieXRlcykge1xuIFx0XHRcdFx0XHRcdHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShieXRlcywgaW1wb3J0T2JqZWN0KTtcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZFdhc21Nb2R1bGVzW3dhc21Nb2R1bGVJZF0gPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVzKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLndbd2FzbU1vZHVsZUlkXSA9IChyZXMuaW5zdGFuY2UgfHwgcmVzKS5leHBvcnRzO1xuIFx0XHRcdFx0fSkpO1xuIFx0XHRcdH1cbiBcdFx0fSk7XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9iamVjdCB3aXRoIGFsbCBXZWJBc3NlbWJseS5pbnN0YW5jZSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLncgPSB7fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW5naW5lL2NhbGNlbmdpbmUud29ya2VyLnRzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAob2JqKSB7XG4gIC8vIHZpYSBodHRwczovL3VucGtnLmNvbS9pcy1wcm9taXNlQDIuMS4wL2luZGV4LmpzXG4gIHJldHVybiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIG9iai50aGVuID09PSAnZnVuY3Rpb24nXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyUHJvbWlzZVdvcmtlciAoY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gcG9zdE91dGdvaW5nTWVzc2FnZSAoZSwgbWVzc2FnZUlkLCBlcnJvciwgcmVzdWx0KSB7XG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UgKG1zZykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAodHlwZW9mIHNlbGYucG9zdE1lc3NhZ2UgIT09ICdmdW5jdGlvbicpIHsgLy8gc2VydmljZSB3b3JrZXJcbiAgICAgICAgZS5wb3J0c1swXS5wb3N0TWVzc2FnZShtc2cpXG4gICAgICB9IGVsc2UgeyAvLyB3ZWIgd29ya2VyXG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UobXNnKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmICdlcnJvcicgaW4gY29uc29sZSkge1xuICAgICAgICAvLyBUaGlzIGlzIHRvIG1ha2UgZXJyb3JzIGVhc2llciB0byBkZWJ1Zy4gSSB0aGluayBpdCdzIGltcG9ydGFudFxuICAgICAgICAvLyBlbm91Z2ggdG8ganVzdCBsZWF2ZSBoZXJlIHdpdGhvdXQgZ2l2aW5nIHRoZSB1c2VyIGFuIG9wdGlvblxuICAgICAgICAvLyB0byBzaWxlbmNlIGl0LlxuICAgICAgICBjb25zb2xlLmVycm9yKCdXb3JrZXIgY2F1Z2h0IGFuIGVycm9yOicsIGVycm9yKVxuICAgICAgfVxuICAgICAgcG9zdE1lc3NhZ2UoW21lc3NhZ2VJZCwge1xuICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XSlcbiAgICB9IGVsc2Uge1xuICAgICAgcG9zdE1lc3NhZ2UoW21lc3NhZ2VJZCwgbnVsbCwgcmVzdWx0XSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cnlDYXRjaEZ1bmMgKGNhbGxiYWNrLCBtZXNzYWdlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHJlczogY2FsbGJhY2sobWVzc2FnZSkgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB7IGVycjogZSB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5jb21pbmdNZXNzYWdlIChlLCBjYWxsYmFjaywgbWVzc2FnZUlkLCBtZXNzYWdlKSB7XG4gICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoRnVuYyhjYWxsYmFjaywgbWVzc2FnZSlcblxuICAgIGlmIChyZXN1bHQuZXJyKSB7XG4gICAgICBwb3N0T3V0Z29pbmdNZXNzYWdlKGUsIG1lc3NhZ2VJZCwgcmVzdWx0LmVycilcbiAgICB9IGVsc2UgaWYgKCFpc1Byb21pc2UocmVzdWx0LnJlcykpIHtcbiAgICAgIHBvc3RPdXRnb2luZ01lc3NhZ2UoZSwgbWVzc2FnZUlkLCBudWxsLCByZXN1bHQucmVzKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQucmVzLnRoZW4oZnVuY3Rpb24gKGZpbmFsUmVzdWx0KSB7XG4gICAgICAgIHBvc3RPdXRnb2luZ01lc3NhZ2UoZSwgbWVzc2FnZUlkLCBudWxsLCBmaW5hbFJlc3VsdClcbiAgICAgIH0sIGZ1bmN0aW9uIChmaW5hbEVycm9yKSB7XG4gICAgICAgIHBvc3RPdXRnb2luZ01lc3NhZ2UoZSwgbWVzc2FnZUlkLCBmaW5hbEVycm9yKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkluY29taW5nTWVzc2FnZSAoZSkge1xuICAgIHZhciBwYXlsb2FkID0gZS5kYXRhXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHBheWxvYWQpIHx8IHBheWxvYWQubGVuZ3RoICE9PSAyKSB7XG4gICAgICAvLyBtZXNzYWdlIGRvZW5zJ3QgbWF0Y2ggY29tbXVuaWNhdGlvbiBmb3JtYXQ7IGlnbm9yZVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBtZXNzYWdlSWQgPSBwYXlsb2FkWzBdXG4gICAgdmFyIG1lc3NhZ2UgPSBwYXlsb2FkWzFdXG5cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwb3N0T3V0Z29pbmdNZXNzYWdlKGUsIG1lc3NhZ2VJZCwgbmV3IEVycm9yKFxuICAgICAgICAnUGxlYXNlIHBhc3MgYSBmdW5jdGlvbiBpbnRvIHJlZ2lzdGVyKCkuJykpXG4gICAgfSBlbHNlIHtcbiAgICAgIGhhbmRsZUluY29taW5nTWVzc2FnZShlLCBjYWxsYmFjaywgbWVzc2FnZUlkLCBtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uSW5jb21pbmdNZXNzYWdlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZ2lzdGVyUHJvbWlzZVdvcmtlclxuIiwiaW1wb3J0IHJlZ2lzdGVyUHJvbWlzZVdvcmtlciBmcm9tICdwcm9taXNlLXdvcmtlci9yZWdpc3Rlcic7XHJcbmltcG9ydCB7IFJlcXVlc3QsIFByaWNpbmdSZXF1ZXN0IH0gZnJvbSAnLi9wcm90b2NvbCc7XHJcbmltcG9ydCB7IGZsYXR0ZW5SYXdQYXRocyB9IGZyb20gJy4vcGF0aC1jb250YWluZXInO1xyXG5pbXBvcnQgeyBQcmljaW5nUmVzdWx0IH0gZnJvbSAnLi9wcmljaW5nJztcclxuXHJcbmxldCBtb2Q6IHR5cGVvZiBpbXBvcnQoXCJtb250ZWNhcmxvXCIpIHwgbnVsbCA9IG51bGw7XHJcblxyXG5yZWdpc3RlclByb21pc2VXb3JrZXIoYXN5bmMgKHJlcTogUmVxdWVzdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYHJlY2lldmVkIHJlcXVlc3QgJHtyZXEua2luZH1gKTtcclxuICAgIGlmIChyZXEua2luZCA9PT0gJ2VuZ2luZS1pbml0aWFsaXphdGlvbicpIHtcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ21vbnRlY2FybG8nKTtcclxuICAgICAgICBtb2QgPSBtb2R1bGU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZXEua2luZCA9PT0gJ3BhdGhyZXF1ZXN0Jykge1xyXG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBuZXcgbW9kIS5Qcm9jZXNzKHJlcS5wcm9jZXNzLnZvbCxcclxuICAgICAgICAgICAgcmVxLnByb2Nlc3MucmF0ZSxcclxuICAgICAgICAgICAgcmVxLnByb2Nlc3MuaW5pdGlhbFZhbHVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gZmxhdHRlblJhd1BhdGhzKHByb2Nlc3MuY2FsY19wYXRocyhyZXEudGF1LFxyXG4gICAgICAgICAgICByZXEubmJyT2ZTdGVwcyxcclxuICAgICAgICAgICAgcmVxLm5ick9mUGF0aHMpLFxyXG4gICAgICAgICAgICByZXEubmJyT2ZQYXRocyxcclxuICAgICAgICAgICAgcmVxLm5ick9mU3RlcHMpO1xyXG4gICAgICAgIHByb2Nlc3MuZnJlZSgpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZXEua2luZCA9PT0gJ3ByaWNpbmctcmVxdWVzdCcpIHtcclxuICAgICAgICBjb25zdCBwcm9jZXNzID0gbmV3IG1vZCEuUHJvY2VzcyhyZXEucHJvY2Vzcy52b2wsXHJcbiAgICAgICAgICAgIHJlcS5wcm9jZXNzLnJhdGUsXHJcbiAgICAgICAgICAgIHJlcS5wcm9jZXNzLmluaXRpYWxWYWx1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGZsYXR0ZW5SYXdQYXRocyhwcm9jZXNzLmNhbGNfcGF0aHMocmVxLnRhdSxcclxuICAgICAgICAgICAgcmVxLm5ick9mU3RlcHMsXHJcbiAgICAgICAgICAgIHJlcS5uYnJPZlBhdGhzKSxcclxuICAgICAgICAgICAgcmVxLm5ick9mUGF0aHMsXHJcbiAgICAgICAgICAgIHJlcS5uYnJPZlN0ZXBzKTtcclxuICAgICAgICBwcm9jZXNzLmZyZWUoKTtcclxuICAgICAgICBjb25zdCBmdW5jID0gbmV3IEZ1bmN0aW9uKFwicHJvY2Vzc1wiLCByZXEucGF5b2ZmU3JjKSBhcyAoKHByb2Nlc3M6IG51bWJlcltdKSA9PiBudW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlcyA9IHJlc1xyXG4gICAgICAgICAgICAubWFwKGZ1bmMpXHJcbiAgICAgICAgICAgIC5tYXAoZndkcCA9PiBNYXRoLmV4cCgtcmVxLnByb2Nlc3MucmF0ZSAqIHJlcS50YXUpICogZndkcCk7IC8vIEZJWE1FOiBkaXNjb3VudCB0byB0PTBcclxuICAgICAgICBjb25zdCBhdmdQcmljZSA9IHByaWNlcy5yZWR1Y2UoKHAsIGMpID0+IHAgKyBjLCAwKSAvIHByaWNlcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgcHJlczogUHJpY2luZ1Jlc3VsdCA9IHtcclxuICAgICAgICAgICAgZXN0aW1hdGVkUHJpY2U6IGF2Z1ByaWNlLFxyXG4gICAgICAgICAgICByYXdQcmljZXM6IHByaWNlcyxcclxuICAgICAgICAgICAgcGF0aHM6IHJlcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBwcmVzO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiIsImV4cG9ydCB0eXBlIFBhdGggPSBudW1iZXJbXTtcclxuXHJcbmV4cG9ydCB0eXBlIFBhdGhDb250YWluZXIgPSBQYXRoW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlblJhd1BhdGhzKHJhd2RhdGE6IEZsb2F0NjRBcnJheSxcclxuICAgIG5ick9mUGF0aHM6IG51bWJlciwgbnVtYmVyT2ZTdGVwczogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmFzc2VydChyYXdkYXRhLmxlbmd0aCAvIG5ick9mUGF0aHMgPT09IG51bWJlck9mU3RlcHMsICdpbmNvbnNpc3RlbnQgaW5wdXQgZGF0YScpO1xyXG4gICAgLy8gaWYgKHJhd2RhdGEubGVuZ3RoIC8gbmJyT2ZQYXRocyA9PT0gbnVtYmVyT2ZTdGVwcykge1xyXG4gICAgLy8gICAgIHRocm93IG5ldyBFcnJvcignaW5jb25zaXN0ZW50IGlucHV0IGRhdGEnKTtcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IHJlczogUGF0aENvbnRhaW5lciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYnJPZlBhdGhzOyBpKyspIHtcclxuICAgICAgICBjb25zdCBzdGFydElkeCA9IGkgKiAobnVtYmVyT2ZTdGVwcyArIDEpO1xyXG4gICAgICAgIGNvbnN0IGVuZElkeCA9IHN0YXJ0SWR4ICsgbnVtYmVyT2ZTdGVwcyArIDE7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IEFycmF5LmZyb20ocmF3ZGF0YS5zbGljZShzdGFydElkeCwgZW5kSWR4KSk7XHJcbiAgICAgICAgcmVzLnB1c2gocGF0aCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==