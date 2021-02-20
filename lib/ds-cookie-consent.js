"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var data = {
  buttonAccept: {
    text: "Accept optional cookies",
    url: "#",
    id: "accept_optional_cookies",
    "class": "button"
  },
  buttonReject: {
    text: "Reject optional cookies",
    url: "#",
    id: "reject_optional_cookies",
    "class": "button"
  },
  hideThisMessage: {
    text: "Hide this message",
    url: "#",
    id: "hide_this_message",
    "class": "button"
  }
}; // Business logic

var dsCookieConsentBanner = function () {
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
    var getBannerElement = document.querySelector("#ds-cookie-consent-banner");
    var getInnerElem = getBannerElement.querySelector("#btn_preferences");
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

var getBannerElement = document.querySelector("#ds-cookie-consent-banner");
var getCookieForm = document.querySelector("#ds-cookie-consent-form"); // Banner implementation

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var oldCookieNotice = document.querySelector(".cookieNotice"); // Hide the old yellow Cookie banner for the MVP

    if (oldCookieNotice) {
      oldCookieNotice.remove();
    } // Check if cookie banner exists


    if (getBannerElement) {
      // Create Accept Optional Cookies
      dsCookieConsentBanner.createButton(data.buttonAccept.text, data.buttonAccept.url, data.buttonAccept.id, data.buttonAccept["class"]); // Create Reject Optional Cookies

      dsCookieConsentBanner.createButton(data.buttonReject.text, data.buttonReject.url, data.buttonReject.id, data.buttonReject["class"]); // Select the buttons
      // !important - Do not move these above the DOM implementation

      var btnAccept = document.querySelector("#accept_optional_cookies");
      var btnReject = document.querySelector("#reject_optional_cookies");
      var btnPreference = document.querySelector("#btn_preferences");
      var bannerParagraph = document.querySelector(".cookie-p");
      var cookieHead = document.querySelector(".cookie_head"); // Check if the button Accept Optional Cookies exists

      if (btnAccept) {
        // Binding to document (event delegation)
        btnAccept.addEventListener("click", function (e) {
          e.preventDefault(); // Create dontShowCookieNotice cookie

          dsCookieConsentBanner.setCookie("dontShowCookieNotice", "true", {
            "max-age": 3600
          }); // Create/Update cookies_policy cookie

          dsCookieConsentBanner.setCookie("cookies_policy", '{"usage":true,"settings":true,"essential":true}', {
            "max-age": 3600
          });
          dsCookieConsentBanner.createButton(data.hideThisMessage.text, data.hideThisMessage.url, data.hideThisMessage.id, data.hideThisMessage["class"]);

          if (btnAccept) {
            btnAccept.remove();
          }

          if (btnReject) {
            btnReject.remove();
          }

          if (btnPreference) {
            btnPreference.remove();
          }

          if (cookieHead) {
            cookieHead.remove();
          }

          if (bannerParagraph) {
            bannerParagraph.innerHTML = "You have accepted additional cookies. You can <a href='/latin/legal/cookies'>change your cookie settings</a> at any time.";
          }

          var hideThisMessage = document.querySelector("#hide_this_message");

          if (hideThisMessage) {
            hideThisMessage.addEventListener("click", function (e) {
              e.preventDefault(); // Hide the banner after Reject btn was clicked

              if (dsCookieConsentBanner.checkCookie("dontShowCookieNotice")) {
                if (getBannerElement) {
                  getBannerElement.remove();
                }
              }
            });
          }
        });
      } // Check if the button Reject Optional Cookies exists


      if (btnReject) {
        // Binding to document (event delegation)
        btnReject.addEventListener("click", function (e) {
          e.preventDefault(); // Create dontShowCookieNotice cookie

          dsCookieConsentBanner.setCookie("dontShowCookieNotice", "true", {
            "max-age": 3600
          }); // Create/Update cookies_policy cookie

          dsCookieConsentBanner.setCookie("cookies_policy", '{"usage":false,"settings":false,"essential":true}', {
            "max-age": 3600
          }); // Hide the banner after Reject btn was clicked

          if (dsCookieConsentBanner.checkCookie("dontShowCookieNotice")) {
            if (getBannerElement) {
              getBannerElement.remove();
            }
          }
        });
      }
    }
  }); // If the cookie dontShowCookieNotice exists
  // Hide the banner if visible

  if (dsCookieConsentBanner.checkCookie("dontShowCookieNotice")) {
    if (getBannerElement) {
      getBannerElement.remove();
    }
  } // Hide the banner from the cookie settings page


  if (getCookieForm) {
    if (getBannerElement) {
      getBannerElement.remove();
    }
  }
})();