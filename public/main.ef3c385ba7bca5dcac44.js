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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/styles.scss":
/*!*************************!*\
  !*** ./css/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/styles.scss?");

/***/ }),

/***/ "./enums/browsers.js":
/*!***************************!*\
  !*** ./enums/browsers.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n  firefox: 'FIREFOX',\n  webkit: 'WEBKIT',\n  ie: 'IE',\n  edge: 'EDGE'\n};\n\n//# sourceURL=webpack:///./enums/browsers.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _scroll = _interopRequireDefault(__webpack_require__(/*! ./js/scroll/scroll */ \"./js/scroll/scroll.js\"));\n\n__webpack_require__(/*! ./css/styles.scss */ \"./css/styles.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  console.log('DOMContentLoaded -->');\n  new _scroll[\"default\"]({\n    selector: '.scrollable-container'\n  });\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/scroll/browserUtils.js":
/*!***********************************!*\
  !*** ./js/scroll/browserUtils.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _browsers = _interopRequireDefault(__webpack_require__(/*! ../../enums/browsers */ \"./enums/browsers.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar detectBrowser = function detectBrowser() {\n  if (!!navigator.userAgent.match(/firefox/i)) return _browsers[\"default\"].firefox;else if ('webkitTransformOriginZ' in document.documentElement.style) return _browsers[\"default\"].webkit;else if (\n  /*@cc_on!@*/\n   false || window.navigator.msPointerEnabled) return _browsers[\"default\"].ie;\n};\n\nmodule.exports = {\n  detectBrowser: detectBrowser\n};\n\n//# sourceURL=webpack:///./js/scroll/browserUtils.js?");

/***/ }),

/***/ "./js/scroll/scroll.js":
/*!*****************************!*\
  !*** ./js/scroll/scroll.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nvar _browsers = _interopRequireDefault(__webpack_require__(/*! ../../enums/browsers */ \"./enums/browsers.js\"));\n\nvar _browserUtils = __webpack_require__(/*! ./browserUtils */ \"./js/scroll/browserUtils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Scroll =\n/*#__PURE__*/\nfunction () {\n  function Scroll(options) {\n    _classCallCheck(this, Scroll);\n\n    var selector = options.selector,\n        scrollWidth = options.scrollWidth,\n        scrollTrackColor = options.scrollTrackColor,\n        scrollThumbBackground = options.scrollThumbBackground,\n        scrollThumbHoverBackground = options.scrollThumbHoverBackground,\n        useArrows = options.useArrows;\n    this.createStylesSheet = this.createStylesSheet.bind(this);\n    this.addStylesSheetToHeadSection = this.addStylesSheetToHeadSection.bind(this);\n    this.addWebkitStyles = this.addWebkitStyles.bind(this);\n    this.addFirefoxStyles = this.addFirefoxStyles.bind(this);\n    this.addIEStyles = this.addIEStyles.bind(this);\n    this.addStylesToElement = this.addStylesToElement.bind(this);\n    this.options = {\n      selector: selector || '',\n      scrollWidth: scrollWidth || 5,\n      scrollTrackColor: scrollTrackColor || '#888',\n      scrollThumbBackground: scrollThumbBackground || 'black',\n      scrollThumbHoverBackground: scrollThumbHoverBackground || 'lightgray',\n      useArrows: useArrows || false\n    };\n    this.addStylesToElement(this.options);\n  }\n\n  _createClass(Scroll, [{\n    key: \"createStylesSheet\",\n    value: function createStylesSheet() {\n      var stylesSheet = document.createElement('style');\n      stylesSheet.type = 'text/css';\n      return stylesSheet;\n    }\n  }, {\n    key: \"addStylesSheetToHeadSection\",\n    value: function addStylesSheetToHeadSection(stylesheet) {\n      debugger;\n      stylesheet && document.head.appendChild(stylesheet);\n    }\n  }, {\n    key: \"addFirefoxStyles\",\n    value: function addFirefoxStyles() {\n      return \"\".concat(this.options.selector, \"{\\n      scrollbar-color: \").concat(this.options.scrollThumbBackground, \" \").concat(this.options.scrollTrackColor, \";\\n      scrollbar-width: \").concat(this.options.scrollWidth, \";\\n    }\");\n    }\n  }, {\n    key: \"addWebkitStyles\",\n    value: function addWebkitStyles() {\n      var webkitCssRulesCollection = [];\n      webkitCssRulesCollection.push(\"\".concat(this.options.selector, \"::-webkit-scrollbar{\\n                                      width:\").concat(this.options.scrollWidth, \"px;}\"));\n      webkitCssRulesCollection.push(\"\".concat(this.options.selector, \"::-webkit-scrollbar-track{\\n                                      background:\").concat(this.options.scrollTrackColor, \";}\"));\n      webkitCssRulesCollection.push(\"\".concat(this.options.selector, \"::-webkit-scrollbar-thumb{\\n                                      background:\").concat(this.options.scrollThumbBackground, \";}\"));\n      webkitCssRulesCollection.push(\"\".concat(this.options.selector, \"::-webkit-scrollbar-thumb:hover{\\n                                      background:\").concat(this.options.scrollThumbHoverBackground, \";}\"));\n\n      if (this.options.useArrows) {\n        webkitCssRulesCollection.push(\"\".concat(this.options.selector, \"::-webkit-scrollbar-button:vertical:increment{\\n                                      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiA5LjI5TDEyIDEzLjE3bDMuODgtMy44OGMuMzktLjM5IDEuMDItLjM5IDEuNDEgMCAuMzkuMzkuMzkgMS4wMiAwIDEuNDFsLTQuNTkgNC41OWMtLjM5LjM5LTEuMDIuMzktMS40MSAwTDYuNyAxMC43Yy0uMzktLjM5LS4zOS0xLjAyIDAtMS40MS4zOS0uMzggMS4wMy0uMzkgMS40MiAweiIvPjwvc3ZnPg==) center center no-repeat;\\n                                      display: block;\\n                                      background-size: contain; }\"));\n        webkitCssRulesCollection.push(\"\".concat(this.options.selector, \"::-webkit-scrollbar-button:vertical:decrement{\\n                                    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4xMiAxNC43MUwxMiAxMC44M2wzLjg4IDMuODhjLjM5LjM5IDEuMDIuMzkgMS40MSAwIC4zOS0uMzkuMzktMS4wMiAwLTEuNDFMMTIuNyA4LjcxYy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMEw2LjcgMTMuM2MtLjM5LjM5LS4zOSAxLjAyIDAgMS40MS4zOS4zOCAxLjAzLjM5IDEuNDIgMHoiLz48L3N2Zz4=) center center no-repeat;\\n                                    display: block;\\n                                    background-size: contain;}\"));\n      }\n\n      return webkitCssRulesCollection;\n    }\n  }, {\n    key: \"addIEStyles\",\n    value: function addIEStyles() {\n      return \"\".concat(this.options.selector, \"{\\n      scrollbar-face-color:\").concat(this.options.scrollThumbBackground, \";\\n      scrollbar-arrow-color:#05B7FF;\\n      scrollbar-track-color:\").concat(this.options.scrollTrackColor, \";\\n      scrollbar-shadow-color:#05B7FF;\\n      scrollbar-highlight-color:#05B7FF;\\n      scrollbar-3dlight-color:#808080;\\n      scrollbar-darkshadow-Color:#202020;\\n    }\");\n    }\n  }, {\n    key: \"addStylesToElement\",\n    value: function addStylesToElement() {\n      var cssRulesCollection = []; //Create stylessheet and at it to head section\n\n      debugger;\n      var stylesheet = this.createStylesSheet();\n      this.addStylesSheetToHeadSection(stylesheet); //General styling\n\n      var generalStyling = \"\".concat(this.options.selector, \"{\\n                            overflow:auto;\\n                          }\");\n      cssRulesCollection.push(generalStyling);\n\n      switch ((0, _browserUtils.detectBrowser)()) {\n        case _browsers[\"default\"].firefox:\n          cssRulesCollection.push(this.addFirefoxStyles());\n          break;\n\n        case _browsers[\"default\"].webkit:\n          //Rules for webkit browsers (Chrome, Safari, Opera)   \n          cssRulesCollection.concat(this.addWebkitStyles());\n          break;\n\n        case _browsers[\"default\"].ie:\n          cssRulesCollection.push(this.addIEStyles());\n          break;\n\n        default:\n          console.log('%cNot supported browser', \"color:red;font-size:18px;font:weight:600\");\n          break;\n      }\n\n      console.log('%cFeel free to contribute here: =>', \"color:blue;font-size:18px;font:weight:600\");\n      var sheet = stylesheet.sheet;\n\n      for (var i = 0; i < cssRulesCollection.length; i++) {\n        sheet.insertRule(cssRulesCollection[i], i);\n      }\n    }\n  }]);\n\n  return Scroll;\n}();\n\nexports[\"default\"] = Scroll;\n\n//# sourceURL=webpack:///./js/scroll/scroll.js?");

/***/ })

/******/ });