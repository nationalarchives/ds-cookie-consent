/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/dsCookieConsentBannerAPI.ts":
/*!*********************************************!*\
  !*** ./src/api/dsCookieConsentBannerAPI.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ \"./src/data.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n// DS COOKIE CONSENT BANNER API\nvar dsCookieConsentBannerAPI = function () {\n  // Delete cookie\n  function deleteCookie() {\n    var cookies = document.cookie.split(\";\");\n\n    for (var _len = arguments.length, cname = new Array(_len), _key = 0; _key < _len; _key++) {\n      cname[_key] = arguments[_key];\n    }\n\n    var _loop = function _loop(i) {\n      var cookie = cookies[i];\n      var eqPos = cookie.indexOf(\"=\");\n      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;\n      cname.forEach(function (c) {\n        if (name.trim() === c) {\n          document.cookie = \"\".concat(name, \"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=\\\"\");\n          /*below line is to delete the google analytics cookies. they are set with the domain*/\n\n          document.cookie = \"\".concat(name, \"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=\").concat(location.hostname.replace(/^www\\./i, \"\"));\n        }\n      });\n    };\n\n    for (var i = 0; i < cookies.length; i++) {\n      _loop(i);\n    }\n  } // Set cookie\n\n\n  function setCookie(name, value, options) {\n    options = _objectSpread({\n      path: \"/\"\n    }, options);\n\n    if (options.expires instanceof Date) {\n      options.expires = options.expires.toUTCString();\n    }\n\n    var updatedCookie = encodeURIComponent(name) + \"=\" + encodeURIComponent(value);\n\n    for (var optionKey in options) {\n      updatedCookie += \"; \" + optionKey;\n      var optionValue = options[optionKey];\n\n      if (optionValue !== true) {\n        updatedCookie += \"=\" + optionValue;\n      }\n    }\n\n    document.cookie = updatedCookie;\n  } // Check if cookie exists\n\n\n  function checkCookie(name) {\n    return -1 !== document.cookie.indexOf(name);\n  } // Create link element inside the banner\n\n\n  function createLink(text, url, id, className, tabindex) {\n    var getInnerElem = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__.default.buttonPreferences.id);\n    var createLink = document.createElement(\"a\");\n    var linkText = document.createTextNode(text);\n\n    if (getInnerElem) {\n      var parentElement = getInnerElem.parentNode;\n      createLink.appendChild(linkText);\n      createLink.href = url;\n      createLink.className = className;\n      createLink.id = id;\n      createLink.tabIndex = tabindex;\n      parentElement.insertBefore(createLink, getInnerElem);\n    }\n  } // Create link element inside the banner\n\n\n  function createButton(text, id, className, tabindex) {\n    var getInnerElem = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__.default.buttonPreferences.id);\n    var createButton = document.createElement(\"button\");\n    var linkText = document.createTextNode(text);\n\n    if (getInnerElem) {\n      var parentElement = getInnerElem.parentNode;\n      createButton.appendChild(linkText);\n      createButton.className = className;\n      createButton.id = id;\n      createButton.tabIndex = tabindex;\n      parentElement.insertBefore(createButton, getInnerElem);\n    }\n  } // Revealing public API\n\n\n  return {\n    createButton: createButton,\n    createLink: createLink,\n    setCookie: setCookie,\n    checkCookie: checkCookie,\n    deleteCookie: deleteCookie\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dsCookieConsentBannerAPI);\n\n//# sourceURL=webpack://ds-cookie-consentt/./src/api/dsCookieConsentBannerAPI.ts?");

/***/ }),

/***/ "./src/ds-cookie-consent.ts":
/*!**********************************!*\
  !*** ./src/ds-cookie-consent.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/dsCookieConsentBannerAPI */ \"./src/api/dsCookieConsentBannerAPI.ts\");\n\n\nvar getBannerElement = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__.default.bannerWrapper.id);\nvar getCookieForm = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__.default.formWrapper.id); // Banner DOM implementation\n\n(function () {\n  document.addEventListener(\"DOMContentLoaded\", function () {\n    var oldCookieNotice = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__.default.oldCookieBannerWrapper.class); // Hide the old yellow Cookie banner for the MVP\n\n    if (oldCookieNotice) {\n      oldCookieNotice.remove();\n    } // Check if cookie banner exists\n\n\n    if (getBannerElement) {\n      // Create Accept Optional Cookies\n      _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__.default.createButton(_data__WEBPACK_IMPORTED_MODULE_0__.default.buttonAccept.text, _data__WEBPACK_IMPORTED_MODULE_0__.default.buttonAccept.id, _data__WEBPACK_IMPORTED_MODULE_0__.default.buttonAccept.class, _data__WEBPACK_IMPORTED_MODULE_0__.default.buttonAccept.tabIndex); // Create Reject Optional Cookies\n\n      _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__.default.createButton(_data__WEBPACK_IMPORTED_MODULE_0__.default.buttonReject.text, _data__WEBPACK_IMPORTED_MODULE_0__.default.buttonReject.id, _data__WEBPACK_IMPORTED_MODULE_0__.default.buttonReject.class, _data__WEBPACK_IMPORTED_MODULE_0__.default.buttonReject.tabIndex); // Select the buttons\n      // !important - Do not move these above the DOM implementation\n\n      var btnAccept = document.querySelector(\"#\".concat(_data__WEBPACK_IMPORTED_MODULE_0__.default.buttonAccept.id));\n      var btnReject = document.querySelector(\"#\".concat(_data__WEBPACK_IMPORTED_MODULE_0__.default.buttonReject.id));\n      var btnPreference = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__.default.buttonPreferences.id);\n      var bannerParagraph = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__.default.bannerParagraph.id);\n      var cookieHead = document.querySelector(_data__WEBPACK_IMPORTED_MODULE_0__.default.bannerHeadline.id);\n      var getBannerElementContainer = getBannerElement.querySelector(\".container\"); // Check if the button Accept Optional Cookies exists\n\n      if (btnAccept) {\n        // Binding to document (event delegation)\n        btnAccept.addEventListener(\"click\", function (e) {\n          e.preventDefault(); // Create dontShowCookieNotice cookie\n\n          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__.default.setCookie(_data__WEBPACK_IMPORTED_MODULE_0__.default.cookies.cookieOne, \"true\", {\n            \"max-age\": 3600\n          }); // Create/Update cookies_policy cookie\n\n          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__.default.setCookie(_data__WEBPACK_IMPORTED_MODULE_0__.default.cookies.cookieTwo, '{\"usage\":true,\"settings\":true,\"essential\":true}', {\n            \"max-age\": 3600\n          });\n          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__.default.createLink(_data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.text, _data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.url, _data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.id, _data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.class, _data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.tabIndex);\n\n          if (btnAccept) {\n            btnAccept.remove();\n          }\n\n          if (btnReject) {\n            btnReject.remove();\n          }\n\n          if (btnPreference) {\n            btnPreference.remove();\n          }\n\n          if (cookieHead) {\n            cookieHead.remove();\n          }\n\n          if (bannerParagraph) {\n            bannerParagraph.innerHTML = _data__WEBPACK_IMPORTED_MODULE_0__.default.acceptMessageAfterInteraction.text;\n            getBannerElementContainer.setAttribute(\"aria-label\", _data__WEBPACK_IMPORTED_MODULE_0__.default.acceptMessageAfterInteraction.ariaLabel);\n          } // Get the Hide This Message DOM element\n\n\n          var hideThisMessage = document.querySelector(\"#\".concat(_data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.id)); // If Hide This Message DOM exists, hide banner\n\n          if (hideThisMessage) {\n            hideThisMessage.addEventListener(\"click\", function (e) {\n              e.preventDefault(); // Hide the banner after Reject btn was clicked\n\n              if (_api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__.default.checkCookie(_data__WEBPACK_IMPORTED_MODULE_0__.default.cookies.cookieOne)) {\n                if (getBannerElement) {\n                  getBannerElement.remove();\n                }\n              }\n            });\n          }\n        });\n      } // Check if the button Reject Optional Cookies exists\n\n\n      if (btnReject) {\n        // Binding to document (event delegation)\n        btnReject.addEventListener(\"click\", function (e) {\n          e.preventDefault(); // Create dontShowCookieNotice cookie\n\n          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__.default.setCookie(_data__WEBPACK_IMPORTED_MODULE_0__.default.cookies.cookieOne, \"true\", {\n            \"max-age\": 3600\n          }); // Create/Update cookies_policy cookie\n\n          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__.default.setCookie(_data__WEBPACK_IMPORTED_MODULE_0__.default.cookies.cookieTwo, '{\"usage\":false,\"settings\":false,\"essential\":true}', {\n            \"max-age\": 3600\n          });\n          _api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__.default.createLink(_data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.text, _data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.url, _data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.id, _data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.class, _data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.tabIndex);\n\n          if (btnAccept) {\n            btnAccept.remove();\n          }\n\n          if (btnReject) {\n            btnReject.remove();\n          }\n\n          if (btnPreference) {\n            btnPreference.remove();\n          }\n\n          if (cookieHead) {\n            cookieHead.remove();\n          }\n\n          if (bannerParagraph) {\n            bannerParagraph.innerHTML = _data__WEBPACK_IMPORTED_MODULE_0__.default.rejectMessageAfterInteraction.text;\n            getBannerElementContainer.setAttribute(\"aria-label\", _data__WEBPACK_IMPORTED_MODULE_0__.default.rejectMessageAfterInteraction.ariaLabel);\n          } // Get the Hide This Message DOM element\n\n\n          var hideThisMessage = document.querySelector(\"#\".concat(_data__WEBPACK_IMPORTED_MODULE_0__.default.hideThisMessage.id)); // If Hide This Message DOM exists, hide banner\n\n          if (hideThisMessage) {\n            hideThisMessage.addEventListener(\"click\", function (e) {\n              e.preventDefault(); // Hide the banner after Reject btn was clicked\n\n              if (_api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__.default.checkCookie(_data__WEBPACK_IMPORTED_MODULE_0__.default.cookies.cookieOne)) {\n                if (getBannerElement) {\n                  getBannerElement.remove();\n                }\n              }\n            });\n          }\n        });\n      }\n    }\n  }); // If the cookie dontShowCookieNotice exists\n  // Hide the banner if visible\n\n  if (_api_dsCookieConsentBannerAPI__WEBPACK_IMPORTED_MODULE_1__.default.checkCookie(_data__WEBPACK_IMPORTED_MODULE_0__.default.cookies.cookieOne)) {\n    if (getBannerElement) {\n      getBannerElement.remove();\n    }\n  } // Hide the banner from the cookie settings page\n\n\n  if (getCookieForm) {\n    if (getBannerElement) {\n      getBannerElement.remove();\n    }\n  }\n})();\n\n//# sourceURL=webpack://ds-cookie-consentt/./src/ds-cookie-consent.ts?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Typed data\nconst Data = {\n  buttonAccept: {\n    text: \"Accept optional cookies\",\n    url: \"#\",\n    id: \"accept_optional_cookies\",\n    class: \"button\",\n    tabIndex: 1,\n  },\n  buttonReject: {\n    text: \"Reject optional cookies\",\n    url: \"#\",\n    id: \"reject_optional_cookies\",\n    class: \"button\",\n    tabIndex: 1,\n  },\n  hideThisMessage: {\n    text: \"Hide this message\",\n    url: \"#\",\n    id: \"hide_this_message\",\n    class: \"button\",\n    tabIndex: 1,\n  },\n  buttonPreferences: {\n    id: \"#btn_preferences\",\n  },\n  bannerParagraph: {\n    id: \".cookie-p\",\n  },\n  bannerHeadline: {\n    id: \".cookie_head\",\n  },\n  bannerWrapper: {\n    id: \"#ds-cookie-consent-banner\",\n  },\n  cookies: {\n    cookieOne: \"dontShowCookieNotice\",\n    cookieTwo: \"cookies_policy\",\n  },\n  formWrapper: {\n    id: \"#ds-cookie-consent-form\",\n  },\n  acceptMessageAfterInteraction: {\n    text:\n      \"You have accepted optional cookies. You can change your cookie settings on the <a href='/latin/legal/cookies/'>Cookies</a> page.\",\n    ariaLabel: \"Cookie consent confirmation message\",\n  },\n  rejectMessageAfterInteraction: {\n    text:\n      \"You have rejected optional cookies. You can change your cookie settings on the <a href='/latin/legal/cookies/'>Cookies</a> page.\",\n    ariaLabel: \"Cookie consent confirmation message\",\n  },\n  oldCookieBannerWrapper: {\n    class: \".cookieNotice\",\n  },\n  cookiesToRemove: {\n    one: \"_ga\",\n    two: \"_gid\",\n    three: \"_gat_UA-2827241-1\",\n    four: \"_gat_UA-2827241-22\",\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n\n//# sourceURL=webpack://ds-cookie-consentt/./src/data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ds-cookie-consent.ts");
/******/ 	
/******/ })()
;