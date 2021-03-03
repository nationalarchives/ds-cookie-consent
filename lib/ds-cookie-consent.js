"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Typed data
var Data = {
  buttonAccept: {
    text: "Accept optional cookies",
    url: "#",
    id: "accept_optional_cookies",
    "class": "button",
    tabIndex: 1
  },
  buttonReject: {
    text: "Reject optional cookies",
    url: "#",
    id: "reject_optional_cookies",
    "class": "button",
    tabIndex: 1
  },
  hideThisMessage: {
    text: "Hide this message",
    url: "#",
    id: "hide_this_message",
    "class": "button",
    tabIndex: 1
  },
  buttonPreferences: {
    id: "#btn_preferences"
  },
  bannerParagraph: {
    id: ".cookie-p"
  },
  bannerHeadline: {
    id: ".cookie_head"
  },
  bannerWrapper: {
    id: "#ds-cookie-consent-banner"
  },
  cookies: {
    cookieOne: "dontShowCookieNotice",
    cookieTwo: "cookies_policy"
  },
  formWrapper: {
    id: "#ds-cookie-consent-form"
  },
  messageAfterInteraction: {
    text: "You have accepted additional cookies. You can <a href='https://test.nationalarchives.gov.uk/latin/legal/cookies'>change your cookie settings</a> at any time."
  },
  oldCookieBannerWrapper: {
    "class": ".cookieNotice"
  },
  cookiesToRemove: {
    one: "_ga",
    two: "_gid",
    three: "_gat_UA-2827241-1"
  }
}; // Business logic

var dsCookieConsentBannerAPI = function () {
  // Delete cookie
  var deleteCookie = function deleteCookie() {
    var cookies = document.cookie.split(";");

    for (var _len = arguments.length, cname = new Array(_len), _key = 0; _key < _len; _key++) {
      cname[_key] = arguments[_key];
    }

    var _loop = function _loop(i) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      cname.forEach(function (c) {
        if (name.trim() === c) {
          document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=\"");
          /*below line is to delete the google analytics cookies. they are set with the domain*/

          document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=").concat(location.hostname.replace(/^www\./i, ""));
        }
      });
    };

    for (var i = 0; i < cookies.length; i++) {
      _loop(i);
    }
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


  var createButton = function createButton(text, url, id, className, tabindex) {
    var getInnerElem = document.querySelector(Data.buttonPreferences.id);
    var createButtonLink = document.createElement("a");
    var linkText = document.createTextNode(text);

    if (getInnerElem) {
      var parentElement = getInnerElem.parentNode;
      createButtonLink.appendChild(linkText);
      createButtonLink.href = url;
      createButtonLink.className = className;
      createButtonLink.id = id;
      createButtonLink.tabIndex = tabindex;
      parentElement.insertBefore(createButtonLink, getInnerElem);
    }
  }; // Revealing public API


  return {
    createButton: createButton,
    setCookie: setCookie,
    checkCookie: checkCookie,
    deleteCookie: deleteCookie
  };
}();

var getBannerElement = document.querySelector(Data.bannerWrapper.id);
var getCookieForm = document.querySelector(Data.formWrapper.id); // Banner DOM implementation

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var oldCookieNotice = document.querySelector(Data.oldCookieBannerWrapper["class"]); // Hide the old yellow Cookie banner for the MVP

    if (oldCookieNotice) {
      oldCookieNotice.remove();
    } // Check if cookie banner exists


    if (getBannerElement) {
      // Create Accept Optional Cookies
      dsCookieConsentBannerAPI.createButton(Data.buttonAccept.text, Data.buttonAccept.url, Data.buttonAccept.id, Data.buttonAccept["class"], Data.buttonAccept.tabIndex); // Create Reject Optional Cookies

      dsCookieConsentBannerAPI.createButton(Data.buttonReject.text, Data.buttonReject.url, Data.buttonReject.id, Data.buttonReject["class"], Data.buttonReject.tabIndex); // Select the buttons
      // !important - Do not move these above the DOM implementation

      var btnAccept = document.querySelector("#".concat(Data.buttonAccept.id));
      var btnReject = document.querySelector("#".concat(Data.buttonReject.id));
      var btnPreference = document.querySelector(Data.buttonPreferences.id);
      var bannerParagraph = document.querySelector(Data.bannerParagraph.id);
      var cookieHead = document.querySelector(Data.bannerHeadline.id); // Check if the button Accept Optional Cookies exists

      if (btnAccept) {
        // Binding to document (event delegation)
        btnAccept.addEventListener("click", function (e) {
          e.preventDefault(); // Create dontShowCookieNotice cookie

          dsCookieConsentBannerAPI.setCookie(Data.cookies.cookieOne, "true", {
            "max-age": 3600
          }); // Create/Update cookies_policy cookie

          dsCookieConsentBannerAPI.setCookie(Data.cookies.cookieTwo, '{"usage":true,"settings":true,"essential":true}', {
            "max-age": 3600
          });
          dsCookieConsentBannerAPI.createButton(Data.hideThisMessage.text, Data.hideThisMessage.url, Data.hideThisMessage.id, Data.hideThisMessage["class"], Data.hideThisMessage.tabIndex);

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
            bannerParagraph.innerHTML = Data.messageAfterInteraction.text;
          }

          var hideThisMessage = document.querySelector("#".concat(Data.hideThisMessage.id));

          if (hideThisMessage) {
            hideThisMessage.addEventListener("click", function (e) {
              e.preventDefault(); // Hide the banner after Reject btn was clicked

              if (dsCookieConsentBannerAPI.checkCookie(Data.cookies.cookieOne)) {
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

          dsCookieConsentBannerAPI.setCookie(Data.cookies.cookieOne, "true", {
            "max-age": 3600
          }); // Create/Update cookies_policy cookie

          dsCookieConsentBannerAPI.setCookie(Data.cookies.cookieTwo, '{"usage":false,"settings":false,"essential":true}', {
            "max-age": 3600
          }); // Hide the banner after Reject btn was clicked

          if (dsCookieConsentBannerAPI.checkCookie(Data.cookies.cookieOne)) {
            if (getBannerElement) {
              getBannerElement.remove();
            }
          }
        });
      }
    }
  }); // If the cookie dontShowCookieNotice exists
  // Hide the banner if visible

  if (dsCookieConsentBannerAPI.checkCookie(Data.cookies.cookieOne)) {
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