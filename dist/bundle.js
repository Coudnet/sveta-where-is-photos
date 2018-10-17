/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_base_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let animationPlay = false;\r\n\r\nlet animationAncorElement = document.querySelector('.animation-ancor');\r\nlet pauseBtn = document.querySelector('.pause-btn');\r\nlet muteBtn = document.querySelector('.mute-btn');\r\n\r\nlet startDate = new Date(2018, 6);\r\n\r\ndocument.querySelector('.activate-element').addEventListener('click', function () {\r\n    muteBtn.innerHTML = \"<i class=\\\"fas fa-volume-down\\\"></i>\";\r\n    audio.play();\r\n    setTimeout(() => {\r\n        animationAncorElement.classList.add('start-animation');\r\n        animationPlay = true;\r\n    }, 4500);\r\n    timeTimer();\r\n});\r\n\r\npauseBtn.addEventListener('click', function () {\r\n    if(animationPlay) {\r\n        animationAncorElement.classList.add('pause-animation');\r\n        animationPlay = false;\r\n        pauseBtn.innerHTML = \"<i class=\\\"fas fa-play\\\"></i>\";\r\n    } else {\r\n        animationAncorElement.classList.remove('pause-animation');\r\n        animationPlay = true;\r\n        pauseBtn.innerHTML = \"<i class=\\\"fas fa-pause\\\"></i>\";\r\n    }\r\n});\r\n\r\nmuteBtn.addEventListener('click', function () {\r\n    if(audio.muted) {\r\n        muteBtn.innerHTML = \"<i class=\\\"fas fa-volume-down\\\"></i>\";\r\n        audio.muted = false;\r\n    } else {\r\n        muteBtn.innerHTML = \"<i class=\\\"fas fa-volume-mute\\\"></i>\";\r\n        audio.muted = true;\r\n    }\r\n});\r\n\r\nfunction timeTimer() {\r\n    let dif = null;\r\n    let timer = setTimeout(function timeCount() {\r\n        let dif = calcDate(Date.now(), startDate);\r\n        document.querySelector('.year-value').innerHTML = dif.years;\r\n        document.querySelector('.month-value').innerHTML = dif.months;\r\n        document.querySelector('.day-value').innerHTML = dif.days;\r\n        document.querySelector('.hour-value').innerHTML = dif.hours;\r\n\r\n        timer = setTimeout(timeCount, 1000);\r\n    }, 1000);\r\n}\r\n\r\nfunction calcDate(date1, date2) {\r\n    let diff = Math.floor(date1 - date2);\r\n    let day = 1000 * 60 * 60 * 24;\r\n\r\n    let hours = Math.floor(diff / (day / 24));\r\n    let days = Math.floor(diff / day);\r\n    let months = Math.floor(days / 31);\r\n    let years = Math.floor(months / 12);\r\n\r\n    months -= years * 12;\r\n    days -= ((years * 12 + months) * 30);\r\n    hours -= ((((years * 12 + months) * 30) + days) * 24);\r\n\r\n    return {\r\n        years: years,\r\n        months: months,\r\n        days: days,\r\n        hours: hours\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/base.scss?");

/***/ })

/******/ });