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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/calcengine.worker.ts");
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

/***/ "./src/calcengine.worker.ts":
/*!**********************************!*\
  !*** ./src/calcengine.worker.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var promise_worker_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-worker/register */ \"./node_modules/promise-worker/register.js\");\n/* harmony import */ var promise_worker_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(promise_worker_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _path_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path-container */ \"./src/path-container.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar _this = undefined;\r\n\r\n\r\nvar mod = null;\r\npromise_worker_register__WEBPACK_IMPORTED_MODULE_0___default()(function (req) { return __awaiter(_this, void 0, void 0, function () {\r\n    var module_1, process_1, res;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                console.log(\"recieved request \" + req.kind);\r\n                if (!(req.kind === 'engine-initialization')) return [3 /*break*/, 2];\r\n                return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! montecarlo */ \"./node_modules/montecarlo/montecarlo.js\"))];\r\n            case 1:\r\n                module_1 = _a.sent();\r\n                mod = module_1;\r\n                return [2 /*return*/, true];\r\n            case 2:\r\n                if (req.kind === 'pathrequest') {\r\n                    process_1 = new mod.Process(req.process.vol, req.process.rate, req.process.initialValue);\r\n                    res = Object(_path_container__WEBPACK_IMPORTED_MODULE_1__[\"flattenRawPaths\"])(process_1.calc_paths(req.tau, req.nbrOfSteps, req.nbrOfPaths), req.nbrOfPaths, req.nbrOfSteps);\r\n                    process_1.free();\r\n                    return [2 /*return*/, res];\r\n                }\r\n                _a.label = 3;\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY2VuZ2luZS53b3JrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2FsY2VuZ2luZS53b3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkE0QkE7QUE1QkEsT0FBTyxxQkFBcUIsTUFBTSx5QkFBeUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbkQsSUFBSSxHQUFHLEdBQXVDLElBQUksQ0FBQztBQUVuRCxxQkFBcUIsQ0FBQyxVQUFPLEdBQVk7Ozs7O2dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFvQixHQUFHLENBQUMsSUFBTSxDQUFDLENBQUM7cUJBQ3hDLENBQUEsR0FBRyxDQUFDLElBQUksS0FBSyx1QkFBdUIsQ0FBQSxFQUFwQyx3QkFBb0M7Z0JBQ3JCLHFCQUFNLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBQTs7Z0JBQW5DLFdBQVMsU0FBMEI7Z0JBQ3pDLEdBQUcsR0FBRyxRQUFNLENBQUM7Z0JBQ2Isc0JBQU8sSUFBSSxFQUFDOztnQkFFWCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO29CQUMzQixZQUFVLElBQUksR0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFDNUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2hCLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRXhCLEdBQUcsR0FBRyxlQUFlLENBQUMsU0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUNsRCxHQUFHLENBQUMsVUFBVSxFQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFDZixHQUFHLENBQUMsVUFBVSxFQUNkLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDcEIsU0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNmLHNCQUFPLEdBQUcsRUFBQztpQkFDZDs7Ozs7S0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVnaXN0ZXJQcm9taXNlV29ya2VyIGZyb20gJ3Byb21pc2Utd29ya2VyL3JlZ2lzdGVyJztcclxuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJy4vcHJvdG9jb2wnO1xyXG5pbXBvcnQgeyBmbGF0dGVuUmF3UGF0aHMgfSBmcm9tICcuL3BhdGgtY29udGFpbmVyJztcclxuXHJcbmxldCBtb2Q6IHR5cGVvZiBpbXBvcnQoXCJtb250ZWNhcmxvXCIpIHwgbnVsbCA9IG51bGw7XHJcblxyXG5yZWdpc3RlclByb21pc2VXb3JrZXIoYXN5bmMgKHJlcTogUmVxdWVzdCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYHJlY2lldmVkIHJlcXVlc3QgJHtyZXEua2luZH1gKTtcclxuICAgIGlmIChyZXEua2luZCA9PT0gJ2VuZ2luZS1pbml0aWFsaXphdGlvbicpIHtcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ21vbnRlY2FybG8nKTtcclxuICAgICAgICBtb2QgPSBtb2R1bGU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChyZXEua2luZCA9PT0gJ3BhdGhyZXF1ZXN0Jykge1xyXG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBuZXcgbW9kIS5Qcm9jZXNzKHJlcS5wcm9jZXNzLnZvbCxcclxuICAgICAgICAgICAgcmVxLnByb2Nlc3MucmF0ZSxcclxuICAgICAgICAgICAgcmVxLnByb2Nlc3MuaW5pdGlhbFZhbHVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gZmxhdHRlblJhd1BhdGhzKHByb2Nlc3MuY2FsY19wYXRocyhyZXEudGF1LFxyXG4gICAgICAgICAgICByZXEubmJyT2ZTdGVwcyxcclxuICAgICAgICAgICAgcmVxLm5ick9mUGF0aHMpLFxyXG4gICAgICAgICAgICByZXEubmJyT2ZQYXRocyxcclxuICAgICAgICAgICAgcmVxLm5ick9mU3RlcHMpO1xyXG4gICAgICAgIHByb2Nlc3MuZnJlZSgpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl19\n\n//# sourceURL=webpack:///./src/calcengine.worker.ts?");

/***/ }),

/***/ "./src/path-container.ts":
/*!*******************************!*\
  !*** ./src/path-container.ts ***!
  \*******************************/
/*! exports provided: flattenRawPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flattenRawPaths\", function() { return flattenRawPaths; });\nfunction flattenRawPaths(rawdata, nbrOfPaths, numberOfSteps) {\r\n    console.assert(rawdata.length / nbrOfPaths === numberOfSteps, 'inconsistent input data');\r\n    // if (rawdata.length / nbrOfPaths === numberOfSteps) {\r\n    //     throw new Error('inconsistent input data');\r\n    // }\r\n    var res = [];\r\n    for (var i = 0; i < nbrOfPaths; i++) {\r\n        var startIdx = i * numberOfSteps;\r\n        var endIdx = startIdx + numberOfSteps;\r\n        var path = Array.from(rawdata.slice(startIdx, endIdx));\r\n        res.push(path);\r\n    }\r\n    return res;\r\n}\r\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aC1jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGF0aC1jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxVQUFVLGVBQWUsQ0FBQyxPQUFxQixFQUNqRCxVQUFrQixFQUFFLGFBQXFCO0lBQ3pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVLEtBQUssYUFBYSxFQUFFLHlCQUF5QixDQUFDLENBQUM7SUFDekYsdURBQXVEO0lBQ3ZELGtEQUFrRDtJQUNsRCxJQUFJO0lBQ0osSUFBTSxHQUFHLEdBQWtCLEVBQUUsQ0FBQztJQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLElBQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBTSxNQUFNLEdBQUcsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUN4QyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIFBhdGggPSBudW1iZXJbXTtcclxuXHJcbmV4cG9ydCB0eXBlIFBhdGhDb250YWluZXIgPSBQYXRoW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlblJhd1BhdGhzKHJhd2RhdGE6IEZsb2F0NjRBcnJheSxcclxuICAgIG5ick9mUGF0aHM6IG51bWJlciwgbnVtYmVyT2ZTdGVwczogbnVtYmVyKSB7XHJcbiAgICBjb25zb2xlLmFzc2VydChyYXdkYXRhLmxlbmd0aCAvIG5ick9mUGF0aHMgPT09IG51bWJlck9mU3RlcHMsICdpbmNvbnNpc3RlbnQgaW5wdXQgZGF0YScpO1xyXG4gICAgLy8gaWYgKHJhd2RhdGEubGVuZ3RoIC8gbmJyT2ZQYXRocyA9PT0gbnVtYmVyT2ZTdGVwcykge1xyXG4gICAgLy8gICAgIHRocm93IG5ldyBFcnJvcignaW5jb25zaXN0ZW50IGlucHV0IGRhdGEnKTtcclxuICAgIC8vIH1cclxuICAgIGNvbnN0IHJlczogUGF0aENvbnRhaW5lciA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYnJPZlBhdGhzOyBpKyspIHtcclxuICAgICAgICBjb25zdCBzdGFydElkeCA9IGkgKiBudW1iZXJPZlN0ZXBzO1xyXG4gICAgICAgIGNvbnN0IGVuZElkeCA9IHN0YXJ0SWR4ICsgbnVtYmVyT2ZTdGVwcztcclxuICAgICAgICBjb25zdCBwYXRoID0gQXJyYXkuZnJvbShyYXdkYXRhLnNsaWNlKHN0YXJ0SWR4LCBlbmRJZHgpKTtcclxuICAgICAgICByZXMucHVzaChwYXRoKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn0iXX0=\n\n//# sourceURL=webpack:///./src/path-container.ts?");

/***/ })

/******/ });