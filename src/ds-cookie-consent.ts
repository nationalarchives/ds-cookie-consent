interface ICookieConsent {
  createButton(text: string, url: string, id: string, className: string): void;
  setCookie(
    name: string,
    value: string,
    options: { secure?: boolean; "max-age": number }
  ): void;
  checkCookie(name: string): boolean;
}

const data = {
  buttonAccept: {
    text: "Accept optional cookies",
    url: "#",
    id: "accept_optional_cookies",
    class: "button",
  },
  buttonReject: {
    text: "Reject optional cookies",
    url: "#",
    id: "reject_optional_cookies",
    class: "button",
  },
  hideThisMessage: {
    text: "Hide this message",
    url: "#",
    id: "hide_this_message",
    class: "button",
  },
};

// Business logic
const dsCookieConsentBanner: ICookieConsent = ((): any => {
  // Delete cookie
  const deleteCookie = (name) => {
    setCookie(name, "", {
      "max-age": -1,
    });
  };

  // Set cookie
  const setCookie = (name, value, options) => {
    options = {
      path: "/",
      ...options,
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie =
      encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }

    document.cookie = updatedCookie;
  };

  // Check if cookie exists
  const checkCookie = (name) => {
    return -1 !== document.cookie.indexOf(name);
  };

  // Create buttons inside the banner
  const createButton = (text, url, id, className) => {
    const getBannerElement = document.querySelector(
      "#ds-cookie-consent-banner"
    );
    const getInnerElem = getBannerElement.querySelector("#btn_preferences");
    const createButtonLink = document.createElement("a");
    const linkText = document.createTextNode(text);
    const parentElement = getInnerElem.parentNode;

    createButtonLink.appendChild(linkText);
    createButtonLink.href = url;
    createButtonLink.className = className;
    createButtonLink.id = id;
    parentElement.insertBefore(createButtonLink, getInnerElem);
  };

  // Revealing public API
  return {
    createButton,
    setCookie,
    checkCookie,
  };
})();

const getBannerElement = document.querySelector("#ds-cookie-consent-banner");
const getCookieForm = document.querySelector("#ds-cookie-consent-form");

// Banner implementation
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const oldCookieNotice = document.querySelector(".cookieNotice");

    // Hide the old yellow Cookie banner for the MVP
    if (oldCookieNotice) {
      oldCookieNotice.remove();
    }

    // Check if cookie banner exists
    if (getBannerElement) {
      // Create Accept Optional Cookies
      dsCookieConsentBanner.createButton(
        data.buttonAccept.text,
        data.buttonAccept.url,
        data.buttonAccept.id,
        data.buttonAccept.class
      );

      // Create Reject Optional Cookies
      dsCookieConsentBanner.createButton(
        data.buttonReject.text,
        data.buttonReject.url,
        data.buttonReject.id,
        data.buttonReject.class
      );

      // Select the buttons
      // !important - Do not move these above the DOM implementation
      const btnAccept = document.querySelector("#accept_optional_cookies");
      const btnReject = document.querySelector("#reject_optional_cookies");
      const btnPreference = document.querySelector("#btn_preferences");
      const bannerParagraph = document.querySelector(".cookie-p");
      const cookieHead = document.querySelector(".cookie_head");

      // Check if the button Accept Optional Cookies exists
      if (btnAccept) {
        // Binding to document (event delegation)
        btnAccept.addEventListener("click", (e) => {
          e.preventDefault();

          // Create dontShowCookieNotice cookie
          dsCookieConsentBanner.setCookie("dontShowCookieNotice", "true", {
            "max-age": 3600,
          });

          // Create/Update cookies_policy cookie
          dsCookieConsentBanner.setCookie(
            "cookies_policy",
            '{"usage":true,"settings":true,"essential":true}',
            {
              "max-age": 3600,
            }
          );

          dsCookieConsentBanner.createButton(
            data.hideThisMessage.text,
            data.hideThisMessage.url,
            data.hideThisMessage.id,
            data.hideThisMessage.class
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
            bannerParagraph.innerHTML =
              "You have accepted additional cookies. You can <a href='/latin/legal/cookies'>change your cookie settings</a> at any time.";
          }

          const hideThisMessage = document.querySelector("#hide_this_message");

          if (hideThisMessage) {
            hideThisMessage.addEventListener("click", (e) => {
              e.preventDefault();
              // Hide the banner after Reject btn was clicked
              if (dsCookieConsentBanner.checkCookie("dontShowCookieNotice")) {
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
          dsCookieConsentBanner.setCookie("dontShowCookieNotice", "true", {
            "max-age": 3600,
          });

          // Create/Update cookies_policy cookie
          dsCookieConsentBanner.setCookie(
            "cookies_policy",
            '{"usage":false,"settings":false,"essential":true}',
            {
              "max-age": 3600,
            }
          );

          // Hide the banner after Reject btn was clicked
          if (dsCookieConsentBanner.checkCookie("dontShowCookieNotice")) {
            if (getBannerElement) {
              getBannerElement.remove();
            }
          }
        });
      }
    }
  });

  // If the cookie dontShowCookieNotice exists
  // Hide the banner if visible
  if (dsCookieConsentBanner.checkCookie("dontShowCookieNotice")) {
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
