// Typed data
interface ICookieConsent {
  globalCookieName?: string;
  bannerWrapper?: string;
  innerElemWrapper?: string;
  createButton(text: string, url: string, id: string, className: string): void;
  setCookie(
    name: string,
    value: string,
    options: { secure?: boolean; "max-age": number; domain?: string }
  ): void;
  checkCookie(name: string): boolean;
  deleteCookie(...cname: string[]): void;
}

const Data = {
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
  buttonPreferences: {
    id: "#btn_preferences",
  },
  bannerParagraph: {
    id: ".cookie-p",
  },
  bannerHeadline: {
    id: ".cookie_head",
  },
  bannerWrapper: {
    id: "#ds-cookie-consent-banner",
  },
  cookies: {
    cookieOne: "dontShowCookieNotice",
    cookieTwo: "cookies_policy",
  },
  formWrapper: {
    id: "#ds-cookie-consent-form",
  },
  messageAfterInteraction: {
    text:
      "You have accepted additional cookies. You can <a href='/latin/legal/cookies'>change your cookie settings</a> at any time.",
  },
  oldCookieBannerWrapper: {
    class: ".cookieNotice",
  },
  cookiesToRemove: {
    one: "_ga",
    two: "_gid",
    three: "_gat_UA-2827241-1",
  },
};

// Business logic
const dsCookieConsentBannerAPI: ICookieConsent = ((): any => {
  // Delete cookie
  const deleteCookie = (...cname) => {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

      cname.forEach((c) => {
        if (name.trim() === c) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain="`;
          /*below line is to delete the google analytics cookies. they are set with the domain*/
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=${location.hostname.replace(
            /^www\./i,
            ""
          )}`;
          console.log("done");
        }
      });
    }
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
    const getInnerElem = document.querySelector(Data.buttonPreferences.id);
    const createButtonLink = document.createElement("a");
    const linkText = document.createTextNode(text);

    if (getInnerElem) {
      const parentElement = getInnerElem.parentNode;
      createButtonLink.appendChild(linkText);
      createButtonLink.href = url;
      createButtonLink.className = className;
      createButtonLink.id = id;
      parentElement.insertBefore(createButtonLink, getInnerElem);
    }
  };

  // Revealing public API
  return {
    createButton,
    setCookie,
    checkCookie,
    deleteCookie,
  };
})();

const getBannerElement = document.querySelector(Data.bannerWrapper.id);
const getCookieForm = document.querySelector(Data.formWrapper.id);

// Banner DOM implementation
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const oldCookieNotice = document.querySelector(
      Data.oldCookieBannerWrapper.class
    );

    dsCookieConsentBannerAPI.setCookie("_gaa", "true", {
      "max-age": 3600,
      domain: ".nationalarchives.gov.uk",
    });

    //Delete GA cookies
    dsCookieConsentBannerAPI.deleteCookie(
      "_gaa",
      Data.cookiesToRemove.one,
      Data.cookiesToRemove.two,
      Data.cookiesToRemove.three
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
        Data.buttonAccept.url,
        Data.buttonAccept.id,
        Data.buttonAccept.class
      );

      // Create Reject Optional Cookies
      dsCookieConsentBannerAPI.createButton(
        Data.buttonReject.text,
        Data.buttonReject.url,
        Data.buttonReject.id,
        Data.buttonReject.class
      );

      // Select the buttons
      // !important - Do not move these above the DOM implementation
      const btnAccept = document.querySelector(`#${Data.buttonAccept.id}`);
      const btnReject = document.querySelector(`#${Data.buttonReject.id}`);
      const btnPreference = document.querySelector(Data.buttonPreferences.id);
      const bannerParagraph = document.querySelector(Data.bannerParagraph.id);
      const cookieHead = document.querySelector(Data.bannerHeadline.id);

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

          dsCookieConsentBannerAPI.createButton(
            Data.hideThisMessage.text,
            Data.hideThisMessage.url,
            Data.hideThisMessage.id,
            Data.hideThisMessage.class
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
            bannerParagraph.innerHTML = Data.messageAfterInteraction.text;
          }

          const hideThisMessage = document.querySelector(
            `#${Data.hideThisMessage.id}`
          );

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

          // Hide the banner after Reject btn was clicked
          if (dsCookieConsentBannerAPI.checkCookie(Data.cookies.cookieOne)) {
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
