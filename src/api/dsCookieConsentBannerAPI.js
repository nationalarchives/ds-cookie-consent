import Data from "../data";

// DS COOKIE CONSENT BANNER API
const dsCookieConsentBannerAPI = (() => {
  // Delete cookie
  function deleteCookie(...cname) {
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
        }
      });
    }
  }

  // Set cookie
  function setCookie(name, value, options) {
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
  }

  // Check if cookie exists
  function checkCookie(name) {
    return -1 !== document.cookie.indexOf(name);
  }

  // Create link element inside the banner
  function createLink(text, url, id, className, tabindex) {
    const getInnerElem = document.querySelector(Data.buttonPreferences.id);
    const createLink = document.createElement("a");
    const linkText = document.createTextNode(text);

    if (getInnerElem) {
      const parentElement = getInnerElem.parentNode;
      createLink.appendChild(linkText);
      createLink.href = url;
      createLink.className = className;
      createLink.id = id;
      createLink.tabIndex = tabindex;
      parentElement.insertBefore(createLink, getInnerElem);
    }
  }

  // Get cookie value
  // If cookies_policy get its value, decode it, parse it and return an object
  // For any other cookies return its value as a string
  function getCookieValue(cname) {
    let cookies = document.cookie.split(";");
    let cookieValue = "";

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let equalSignPos = cookie.indexOf("=");
      let cookieValue = cookie.slice(equalSignPos + 1);
      let cookieName =
        equalSignPos > -1 ? cookie.substr(0, equalSignPos).trim() : cookie;

      if (cookieName === cname) {
        cookieValue = decodeURIComponent(cookieValue);
        const parseCookieValue = JSON.parse(cookieValue);
        return parseCookieValue;
      }
    }
    return cookieValue;
  }

  // Create link element inside the banner
  function createButton(text, id, className, tabindex) {
    const getInnerElem = document.querySelector(Data.buttonPreferences.id);
    const createButton = document.createElement("button");
    const linkText = document.createTextNode(text);

    if (getInnerElem) {
      const parentElement = getInnerElem.parentNode;
      createButton.appendChild(linkText);
      createButton.className = className;
      createButton.id = id;
      createButton.tabIndex = tabindex;
      parentElement.insertBefore(createButton, getInnerElem);
    }
  }

  // Revealing public API
  return {
    createButton,
    createLink,
    setCookie,
    checkCookie,
    deleteCookie,
    getCookieValue,
  };
})();

export default dsCookieConsentBannerAPI;
