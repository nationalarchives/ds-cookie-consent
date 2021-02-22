"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = require("../data/data");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Business logic
var dsCookieConsentBannerAPI = function () {
  // Delete cookie
  var deleteCookie = function deleteCookie(name) {
    setCookie(name, "", {
      "max-age": -1
    });
  }; // Set cookie


  var setCookie = function setCookie(name, value, options) {
    options = _objectSpread({
      path: "/"
    }, options);

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (var optionKey in options) {
      updatedCookie += "; " + optionKey;
      var optionValue = options[optionKey];

      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  }; // Check if cookie exists


  var checkCookie = function checkCookie(name) {
    return -1 !== document.cookie.indexOf(name);
  }; // Create buttons inside the banner


  var createButton = function createButton(text, url, id, className) {
    var getBannerElement = document.querySelector(_data.Data.bannerWrapper.id);
    var getInnerElem = getBannerElement.querySelector(_data.Data.buttonPreferences.id);
    var createButtonLink = document.createElement("a");
    var linkText = document.createTextNode(text);
    var parentElement = getInnerElem.parentNode;
    createButtonLink.appendChild(linkText);
    createButtonLink.href = url;
    createButtonLink.className = className;
    createButtonLink.id = id;
    parentElement.insertBefore(createButtonLink, getInnerElem);
  }; // Revealing public API


  return {
    createButton: createButton,
    setCookie: setCookie,
    checkCookie: checkCookie
  };
}();

var _default = dsCookieConsentBannerAPI;
exports["default"] = _default;