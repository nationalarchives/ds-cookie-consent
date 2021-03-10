import Data from "./data";
import dsCookieConsentBannerAPI from "./api/dsCookieConsentBannerAPI";

const getBannerElement = document.querySelector(Data.bannerWrapper.id);
const getCookieForm = document.querySelector(Data.formWrapper.id);

// Polyfill the remove() method IE9 and higher
// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty("remove")) {
      return;
    }
    Object.defineProperty(item, "remove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      },
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

// Banner DOM implementation
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const oldCookieNotice = document.querySelector(
      Data.oldCookieBannerWrapper.class
    );

    // Hide the old yellow Cookie banner for the MVP
    if (oldCookieNotice) {
      oldCookieNotice.remove();
    }

    // Check if cookie banner exists
    if (getBannerElement) {
      // Create Accept Optional Cookies
      dsCookieConsentBannerAPI.createButton(
        Data.buttonAccept.text,
        Data.buttonAccept.id,
        Data.buttonAccept.class,
        Data.buttonAccept.tabIndex
      );

      // Create Reject Optional Cookies
      dsCookieConsentBannerAPI.createButton(
        Data.buttonReject.text,
        Data.buttonReject.id,
        Data.buttonReject.class,
        Data.buttonReject.tabIndex
      );

      // Select the buttons
      // !important - Do not move these above the DOM implementation
      const btnAccept = document.querySelector(`#${Data.buttonAccept.id}`);
      const btnReject = document.querySelector(`#${Data.buttonReject.id}`);
      const btnPreference = document.querySelector(Data.buttonPreferences.id);
      const bannerParagraph = document.querySelector(Data.bannerParagraph.id);
      const cookieHead = document.querySelector(Data.bannerHeadline.id);
      const getBannerElementContainer = getBannerElement.querySelector(
        ".container"
      );

      // Check if the button Accept Optional Cookies exists
      if (btnAccept) {
        // Binding to document (event delegation)
        btnAccept.addEventListener("click", (e) => {
          e.preventDefault();

          // Create dontShowCookieNotice cookie
          dsCookieConsentBannerAPI.setCookie(Data.cookies.cookieOne, "true", {
            "max-age": 3600,
          });

          // Create/Update cookies_policy cookie
          dsCookieConsentBannerAPI.setCookie(
            Data.cookies.cookieTwo,
            '{"usage":true,"settings":true,"essential":true}',
            {
              "max-age": 3600,
            }
          );

          dsCookieConsentBannerAPI.createLink(
            Data.hideThisMessage.text,
            Data.hideThisMessage.url,
            Data.hideThisMessage.id,
            Data.hideThisMessage.class,
            Data.hideThisMessage.tabIndex
          );

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
            bannerParagraph.innerHTML = Data.acceptMessageAfterInteraction.text;
            getBannerElementContainer.setAttribute(
              "aria-label",
              Data.acceptMessageAfterInteraction.ariaLabel
            );
          }

          // Get the Hide This Message DOM element
          const hideThisMessage = document.querySelector(
            `#${Data.hideThisMessage.id}`
          );

          // If Hide This Message DOM exists, hide banner
          if (hideThisMessage) {
            hideThisMessage.addEventListener("click", (e) => {
              e.preventDefault();
              // Hide the banner after Reject btn was clicked
              if (
                dsCookieConsentBannerAPI.checkCookie(Data.cookies.cookieOne)
              ) {
                if (getBannerElement) {
                  getBannerElement.remove();
                }
              }
            });
          }
        });
      }

      // Check if the button Reject Optional Cookies exists
      if (btnReject) {
        // Binding to document (event delegation)
        btnReject.addEventListener("click", (e) => {
          e.preventDefault();

          // Create dontShowCookieNotice cookie
          dsCookieConsentBannerAPI.setCookie(Data.cookies.cookieOne, "true", {
            "max-age": 3600,
          });

          // Create/Update cookies_policy cookie
          dsCookieConsentBannerAPI.setCookie(
            Data.cookies.cookieTwo,
            '{"usage":false,"settings":false,"essential":true}',
            {
              "max-age": 3600,
            }
          );

          dsCookieConsentBannerAPI.createLink(
            Data.hideThisMessage.text,
            Data.hideThisMessage.url,
            Data.hideThisMessage.id,
            Data.hideThisMessage.class,
            Data.hideThisMessage.tabIndex
          );

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
            bannerParagraph.innerHTML = Data.rejectMessageAfterInteraction.text;
            getBannerElementContainer.setAttribute(
              "aria-label",
              Data.rejectMessageAfterInteraction.ariaLabel
            );
          }

          // Get the Hide This Message DOM element
          const hideThisMessage = document.querySelector(
            `#${Data.hideThisMessage.id}`
          );

          // If Hide This Message DOM exists, hide banner
          if (hideThisMessage) {
            hideThisMessage.addEventListener("click", (e) => {
              e.preventDefault();
              // Hide the banner after Reject btn was clicked
              if (
                dsCookieConsentBannerAPI.checkCookie(Data.cookies.cookieOne)
              ) {
                if (getBannerElement) {
                  getBannerElement.remove();
                }
              }
            });
          }
        });
      }
    }
  });

  // If the cookie dontShowCookieNotice exists
  // Hide the banner if visible
  if (dsCookieConsentBannerAPI.checkCookie(Data.cookies.cookieOne)) {
    if (getBannerElement) {
      getBannerElement.remove();
    }
  }

  // Hide the banner from the cookie settings page
  if (getCookieForm) {
    if (getBannerElement) {
      getBannerElement.remove();
    }
  }
})();
