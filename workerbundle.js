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
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_jsval_eq": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbindgen_jsval_eq"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_94af25ab6983ff22": function(p0i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_self_94af25ab6983ff22"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_410d028cca82cf04": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_new_410d028cca82cf04"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_crypto_928f7a98da33cf58": function(p0i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_crypto_928f7a98da33cf58"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_bf82a46302370cc0": function(p0i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_getRandomValues_bf82a46302370cc0"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_2a57f17feb958097": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_getRandomValues_2a57f17feb958097"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_29737e08f29b48df": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/montecarlo/montecarlo.js"].exports["__wbg_randomFillSync_29737e08f29b48df"](p0i32,p1i32,p2i32);
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
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./node_modules/montecarlo/montecarlo_bg.wasm":"6c916c21279b00b072a0"}[wasmModuleId] + ".wasm");
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
eval("\n\nfunction isPromise (obj) {\n  // via https://unpkg.com/is-promise@2.1.0/index.js\n  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'\n}\n\nfunction registerPromiseWorker (callback) {\n  function postOutgoingMessage (e, messageId, error, result) {\n    function postMessage (msg) {\n      /* istanbul ignore if */\n      if (typeof self.postMessage !== 'function') { // service worker\n        e.ports[0].postMessage(msg)\n      } else { // web worker\n        self.postMessage(msg)\n      }\n    }\n    if (error) {\n      /* istanbul ignore else */\n      if (typeof console !== 'undefined' && 'error' in console) {\n        // This is to make errors easier to debug. I think it's important\n        // enough to just leave here without giving the user an option\n        // to silence it.\n        console.error('Worker caught an error:', error)\n      }\n      postMessage([messageId, {\n        message: error.message\n      }])\n    } else {\n      postMessage([messageId, null, result])\n    }\n  }\n\n  function tryCatchFunc (callback, message) {\n    try {\n      return { res: callback(message) }\n    } catch (e) {\n      return { err: e }\n    }\n  }\n\n  function handleIncomingMessage (e, callback, messageId, message) {\n    var result = tryCatchFunc(callback, message)\n\n    if (result.err) {\n      postOutgoingMessage(e, messageId, result.err)\n    } else if (!isPromise(result.res)) {\n      postOutgoingMessage(e, messageId, null, result.res)\n    } else {\n      result.res.then(function (finalResult) {\n        postOutgoingMessage(e, messageId, null, finalResult)\n      }, function (finalError) {\n        postOutgoingMessage(e, messageId, finalError)\n      })\n    }\n  }\n\n  function onIncomingMessage (e) {\n    var payload = e.data\n    if (!Array.isArray(payload) || payload.length !== 2) {\n      // message doens't match communication format; ignore\n      return\n    }\n    var messageId = payload[0]\n    var message = payload[1]\n\n    if (typeof callback !== 'function') {\n      postOutgoingMessage(e, messageId, new Error(\n        'Please pass a function into register().'))\n    } else {\n      handleIncomingMessage(e, callback, messageId, message)\n    }\n  }\n\n  self.addEventListener('message', onIncomingMessage)\n}\n\nmodule.exports = registerPromiseWorker\n\n\n//# sourceURL=webpack:///./node_modules/promise-worker/register.js?");

/***/ }),

/***/ "./src/engine/calcengine.worker.ts":
/*!*****************************************!*\
  !*** ./src/engine/calcengine.worker.ts ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var promise_worker_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-worker/register */ \"./node_modules/promise-worker/register.js\");\n/* harmony import */ var promise_worker_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(promise_worker_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _path_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path-container */ \"./src/engine/path-container.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = undefined;\r\n\r\n\r\nvar mod = null;\r\npromise_worker_register__WEBPACK_IMPORTED_MODULE_0___default()(function (req) { return __awaiter(_this, void 0, void 0, function () {\r\n    var module_1, process_1, res;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                console.log(\"recieved request \" + req.kind);\r\n                if (!(req.kind === 'engine-initialization')) return [3 /*break*/, 2];\r\n                return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! montecarlo */ \"./node_modules/montecarlo/montecarlo.js\"))];\r\n            case 1:\r\n                module_1 = _a.sent();\r\n                mod = module_1;\r\n                return [2 /*return*/, true];\r\n            case 2:\r\n                if (req.kind === 'pathrequest') {\r\n                    process_1 = new mod.Process(req.process.vol, req.process.rate, req.process.initialValue);\r\n                    res = Object(_path_container__WEBPACK_IMPORTED_MODULE_1__[\"flattenRawPaths\"])(process_1.calc_paths(req.tau, req.nbrOfSteps, req.nbrOfPaths), req.nbrOfPaths, req.nbrOfSteps);\r\n                    process_1.free();\r\n                    return [2 /*return*/, res];\r\n                }\r\n                _a.label = 3;\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY2VuZ2luZS53b3JrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW5naW5lL2NhbGNlbmdpbmUud29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBNEJBO0FBNUJBLE9BQU8scUJBQXFCLE1BQU0seUJBQXlCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRW5ELElBQUksR0FBRyxHQUF1QyxJQUFJLENBQUM7QUFFbkQscUJBQXFCLENBQUMsVUFBTyxHQUFZOzs7OztnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBb0IsR0FBRyxDQUFDLElBQU0sQ0FBQyxDQUFDO3FCQUN4QyxDQUFBLEdBQUcsQ0FBQyxJQUFJLEtBQUssdUJBQXVCLENBQUEsRUFBcEMsd0JBQW9DO2dCQUNyQixxQkFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUE7O2dCQUFuQyxXQUFTLFNBQTBCO2dCQUN6QyxHQUFHLEdBQUcsUUFBTSxDQUFDO2dCQUNiLHNCQUFPLElBQUksRUFBQzs7Z0JBRVgsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBRTtvQkFDM0IsWUFBVSxJQUFJLEdBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQzVDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUNoQixHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUV4QixHQUFHLEdBQUcsZUFBZSxDQUFDLFNBQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFDbEQsR0FBRyxDQUFDLFVBQVUsRUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQ2YsR0FBRyxDQUFDLFVBQVUsRUFDZCxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3BCLFNBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDZixzQkFBTyxHQUFHLEVBQUM7aUJBQ2Q7Ozs7O0tBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVyUHJvbWlzZVdvcmtlciBmcm9tICdwcm9taXNlLXdvcmtlci9yZWdpc3Rlcic7XHJcbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICcuL3Byb3RvY29sJztcclxuaW1wb3J0IHsgZmxhdHRlblJhd1BhdGhzIH0gZnJvbSAnLi9wYXRoLWNvbnRhaW5lcic7XHJcblxyXG5sZXQgbW9kOiB0eXBlb2YgaW1wb3J0KFwibW9udGVjYXJsb1wiKSB8IG51bGwgPSBudWxsO1xyXG5cclxucmVnaXN0ZXJQcm9taXNlV29ya2VyKGFzeW5jIChyZXE6IFJlcXVlc3QpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGByZWNpZXZlZCByZXF1ZXN0ICR7cmVxLmtpbmR9YCk7XHJcbiAgICBpZiAocmVxLmtpbmQgPT09ICdlbmdpbmUtaW5pdGlhbGl6YXRpb24nKSB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KCdtb250ZWNhcmxvJyk7XHJcbiAgICAgICAgbW9kID0gbW9kdWxlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocmVxLmtpbmQgPT09ICdwYXRocmVxdWVzdCcpIHtcclxuICAgICAgICBjb25zdCBwcm9jZXNzID0gbmV3IG1vZCEuUHJvY2VzcyhyZXEucHJvY2Vzcy52b2wsXHJcbiAgICAgICAgICAgIHJlcS5wcm9jZXNzLnJhdGUsXHJcbiAgICAgICAgICAgIHJlcS5wcm9jZXNzLmluaXRpYWxWYWx1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGZsYXR0ZW5SYXdQYXRocyhwcm9jZXNzLmNhbGNfcGF0aHMocmVxLnRhdSxcclxuICAgICAgICAgICAgcmVxLm5ick9mU3RlcHMsXHJcbiAgICAgICAgICAgIHJlcS5uYnJPZlBhdGhzKSxcclxuICAgICAgICAgICAgcmVxLm5ick9mUGF0aHMsXHJcbiAgICAgICAgICAgIHJlcS5uYnJPZlN0ZXBzKTtcclxuICAgICAgICBwcm9jZXNzLmZyZWUoKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiJdfQ==\n\n//# sourceURL=webpack:///./src/engine/calcengine.worker.ts?");

/***/ }),

/***/ "./src/engine/path-container.ts":
/*!**************************************!*\
  !*** ./src/engine/path-container.ts ***!
  \**************************************/
/*! exports provided: flattenRawPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flattenRawPaths\", function() { return flattenRawPaths; });\nfunction flattenRawPaths(rawdata, nbrOfPaths, numberOfSteps) {\r\n    console.assert(rawdata.length / nbrOfPaths === numberOfSteps, 'inconsistent input data');\r\n    // if (rawdata.length / nbrOfPaths === numberOfSteps) {\r\n    //     throw new Error('inconsistent input data');\r\n    // }\r\n    var res = [];\r\n    for (var i = 0; i < nbrOfPaths; i++) {\r\n        var startIdx = i * numberOfSteps;\r\n        var endIdx = startIdx + numberOfSteps;\r\n        var path = Array.from(rawdata.slice(startIdx, endIdx));\r\n        res.push(path);\r\n    }\r\n    return res;\r\n}\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC1jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW5naW5lL3BhdGgtY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sVUFBVSxlQUFlLENBQUMsT0FBcUIsRUFDakQsVUFBa0IsRUFBRSxhQUFxQjtJQUN6QyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsVUFBVSxLQUFLLGFBQWEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3pGLHVEQUF1RDtJQUN2RCxrREFBa0Q7SUFDbEQsSUFBSTtJQUNKLElBQU0sR0FBRyxHQUFrQixFQUFFLENBQUM7SUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQU0sTUFBTSxHQUFHLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDeEMsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEI7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBQYXRoID0gbnVtYmVyW107XHJcblxyXG5leHBvcnQgdHlwZSBQYXRoQ29udGFpbmVyID0gUGF0aFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW5SYXdQYXRocyhyYXdkYXRhOiBGbG9hdDY0QXJyYXksXHJcbiAgICBuYnJPZlBhdGhzOiBudW1iZXIsIG51bWJlck9mU3RlcHM6IG51bWJlcikge1xyXG4gICAgY29uc29sZS5hc3NlcnQocmF3ZGF0YS5sZW5ndGggLyBuYnJPZlBhdGhzID09PSBudW1iZXJPZlN0ZXBzLCAnaW5jb25zaXN0ZW50IGlucHV0IGRhdGEnKTtcclxuICAgIC8vIGlmIChyYXdkYXRhLmxlbmd0aCAvIG5ick9mUGF0aHMgPT09IG51bWJlck9mU3RlcHMpIHtcclxuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoJ2luY29uc2lzdGVudCBpbnB1dCBkYXRhJyk7XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCByZXM6IFBhdGhDb250YWluZXIgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJyT2ZQYXRoczsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRJZHggPSBpICogbnVtYmVyT2ZTdGVwcztcclxuICAgICAgICBjb25zdCBlbmRJZHggPSBzdGFydElkeCArIG51bWJlck9mU3RlcHM7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IEFycmF5LmZyb20ocmF3ZGF0YS5zbGljZShzdGFydElkeCwgZW5kSWR4KSk7XHJcbiAgICAgICAgcmVzLnB1c2gocGF0aCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59Il19\n\n//# sourceURL=webpack:///./src/engine/path-container.ts?");

/***/ })

/******/ });