// Typed data
const Data = {
  buttonAccept: {
    text: "Accept cookies",
    url: "#",
    id: "accept_optional_cookies",
    class: "button",
    tabIndex: 1,
  },
  buttonReject: {
    text: "Reject cookies",
    url: "#",
    id: "reject_optional_cookies",
    class: "button",
    tabIndex: 1,
  },
  hideThisMessage: {
    text: "Hide this message",
    url: "#",
    id: "hide_this_message",
    class: "button",
    tabIndex: 1,
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
    gaCookies: ["_ga", "_gid", "_gat_UA-2827241-22", "_gat_UA-2827241-1"],
  },
  formWrapper: {
    id: "#ds-cookie-consent-form",
  },
  acceptMessageAfterInteraction: {
    text:
      "You have accepted optional cookies. You can change your cookie settings on the <a href='/latin/cookies/' tabindex='1'>Cookies page</a>.",
    ariaLabel: "Cookie consent confirmation message",
  },
  rejectMessageAfterInteraction: {
    text:
      "You have rejected optional cookies. You can change your cookie settings on the <a href='/latin/cookies/' tabindex='1'>Cookies page</a>.",
    ariaLabel: "Cookie consent confirmation message",
  },
  oldCookieBannerWrapper: {
    class: ".cookieNotice",
  },
  cookiesToRemove: {
    one: "_ga",
    two: "_gid",
    three: "_gat_UA-2827241-1",
    four: "_gat_UA-2827241-22",
  },
  DOM: {
    on: ".jsON",
    off: ".jsOFF",
  },
  form: {
    analytics: {
      measure: "#measure_website_use",
      doNotMeasure: "#donot_measure_website_use",
    },
  },
};

export default Data;
