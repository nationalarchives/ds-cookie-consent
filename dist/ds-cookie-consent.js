!function(){"use strict";var e={buttonAccept:{text:"Accept cookies",url:"#",id:"accept_optional_cookies",class:"button"},buttonReject:{text:"Reject cookies",url:"#",id:"reject_optional_cookies",class:"button"},hideThisMessage:{text:"Hide this message",url:"#",id:"hide_this_message",class:"button"},buttonPreferences:{id:"#btn_preferences"},bannerParagraph:{id:".cookie-p"},bannerHeadline:{id:".cookie_head"},bannerWrapper:{id:"#ds-cookie-consent-banner"},cookies:{cookieOne:"dontShowCookieNotice",cookieTwo:"cookies_policy",gaCookies:["_ga","_gid","_gat_UA-2827241-22","_gat_UA-2827241-1"],settings:["dontAutoStartResultsTour"]},formWrapper:{id:"#ds-cookie-consent-form"},acceptMessageAfterInteraction:{text:"You have accepted optional cookies. You can change your cookie settings on the <a href='https://www.nationalarchives.gov.uk/legal/cookies/'>Cookies page</a>.",ariaLabel:"Cookie consent confirmation message"},rejectMessageAfterInteraction:{text:"You have rejected optional cookies. You can change your cookie settings on the <a href='https://www.nationalarchives.gov.uk/legal/cookies/'>Cookies page</a>.",ariaLabel:"Cookie consent confirmation message"},oldCookieBannerWrapper:{class:".cookieNotice"},cookiesToRemove:{one:"_ga",two:"_gid",three:"_gat_UA-2827241-1",four:"_gat_UA-2827241-22",five:"_ga_2CP7QT8TDG"},DOM:{on:".jsON",off:".jsOFF"},form:{analytics:{measure:"#measure_website_use",doNotMeasure:"#donot_measure_website_use"},settings:{rememberSettings:"#remember_your_settings",doNotRememberSettings:"#donot_remember_your_settings"}}};function o(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function t(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}var n=function(o,t,n){var r=document.querySelector(e.buttonPreferences.id),c=document.createElement("button"),i=document.createTextNode(o);if(r){var a=r.parentNode;c.appendChild(i),c.className=n,c.id=t,a.insertBefore(c,r)}},r=function(e,n,r){(r=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}({path:"/",domain:"nationalarchives.gov.uk",secure:!0},r)).expires instanceof Date&&(r.expires=r.expires.toUTCString());var c=encodeURIComponent(e)+"="+encodeURIComponent(n);for(var i in r){c+="; "+i;var a=r[i];!0!==a&&(c+="="+a)}document.cookie=c},c=function(e){return-1!==document.cookie.indexOf(e)},i=function(){for(var e=document.cookie.split(";"),o=arguments.length,t=new Array(o),n=0;n<o;n++)t[n]=arguments[n];for(var r=function(o){var n=e[o],r=n.indexOf("="),c=r>-1?n.substr(0,r):n;t.forEach((function(e){c.trim()===e&&(document.cookie="".concat(c,'=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain="'),document.cookie="".concat(c,"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=.nationalarchives.gov.uk"),document.cookie="".concat(c,"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=").concat(location.hostname.replace(/^www\./i,"")))}))},c=0;c<e.length;c++)r(c)},a=function(e){for(var o=document.cookie.split(";"),t="",n=0;n<o.length;n++){var r=o[n],c=r.indexOf("=");if(t=r.slice(c+1),(c>-1?r.substr(0,c).trim():r)===e)return t=decodeURIComponent(t),JSON.parse(t)}return t},s=document.querySelector(e.bannerWrapper.id),u=document.querySelector(e.formWrapper.id),d=a(e.cookies.cookieTwo),l=document.querySelector(e.form.analytics.measure),m=document.querySelector(e.form.analytics.doNotMeasure),p=document.querySelector(e.form.settings.rememberSettings),f=document.querySelector(e.form.settings.doNotRememberSettings);[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})),c(e.cookies.cookieOne)&&s&&s.remove(),u&&(c(e.cookies.cookieTwo)||(s&&s.remove(),m.checked=!0,f.checked=!0),s&&s.remove()),document.addEventListener("DOMContentLoaded",(function(){c(e.cookies.cookieTwo)?(d.hasOwnProperty("usage")&&!1===d.usage&&e.cookies.gaCookies.forEach((function(e){i(e)})),d.hasOwnProperty("settings")&&!1===d.settings&&e.cookies.settings.forEach((function(e){i(e)})),u&&(d.hasOwnProperty("usage")&&!0===d.usage&&!l.checked?l.checked=!0:m.checked=!0,d.hasOwnProperty("settings")&&!0===d.settings&&!p.checked?p.checked=!0:f.checked=!0)):(r(e.cookies.cookieTwo,JSON.stringify({usage:!1,settings:!1,essential:!0}),{"max-age":7776e3}),e.cookies.gaCookies.forEach((function(e){i(e)})))})),document.addEventListener("DOMContentLoaded",(function(){var o=document.querySelector(e.oldCookieBannerWrapper.class),t=document.querySelector(e.DOM.on),a=document.querySelector(e.DOM.off);if(t&&(t.style.display="block"),a&&(a.style.display="none"),o&&o.remove(),s){n(e.buttonAccept.text,e.buttonAccept.id,e.buttonAccept.class),n(e.buttonReject.text,e.buttonReject.id,e.buttonReject.class);var u=document.querySelector("#".concat(e.buttonAccept.id)),d=document.querySelector("#".concat(e.buttonReject.id)),l=document.querySelector(e.buttonPreferences.id),m=document.querySelector(e.bannerParagraph.id),p=document.querySelector(e.bannerHeadline.id),f=s.querySelector(".container");u&&u.addEventListener("click",(function(o){o.preventDefault(),r(e.cookies.cookieOne,"true",{"max-age":7776e3}),r(e.cookies.cookieTwo,'{"usage":true,"settings":true,"essential":true}',{"max-age":7776e3}),n(e.hideThisMessage.text,e.hideThisMessage.id,e.hideThisMessage.class),u&&u.remove(),d&&d.remove(),l&&l.remove(),p&&p.remove(),m&&(m.innerHTML=e.acceptMessageAfterInteraction.text,f.setAttribute("aria-label",e.acceptMessageAfterInteraction.ariaLabel));var t=document.querySelector("#".concat(e.hideThisMessage.id));t&&(t.addEventListener("click",(function(o){o.preventDefault(),c(e.cookies.cookieOne)&&s&&s.remove()})),m.focus());var i=document.head,a=document.createElement("script");a.id="frontEndGA",a.src="https://nationalarchives.gov.uk/wp-content/plugins/ds-cookie-consent/dist/gtm-script.js",i.appendChild(a)})),d&&d.addEventListener("click",(function(o){o.preventDefault(),r(e.cookies.cookieOne,"true",{"max-age":7776e3}),r(e.cookies.cookieTwo,'{"usage":false,"settings":false,"essential":true}',{"max-age":7776e3}),n(e.hideThisMessage.text,e.hideThisMessage.id,e.hideThisMessage.class),u&&u.remove(),d&&d.remove(),l&&l.remove(),p&&p.remove(),m&&(m.innerHTML=e.rejectMessageAfterInteraction.text,f.setAttribute("aria-label",e.rejectMessageAfterInteraction.ariaLabel));var t=document.querySelector("#".concat(e.hideThisMessage.id));t&&(t.addEventListener("click",(function(o){o.preventDefault(),c(e.cookies.cookieOne)&&s&&s.remove()})),m.focus());for(var a=0,g=[e.cookiesToRemove.one,e.cookiesToRemove.two,e.cookiesToRemove.three,e.cookiesToRemove.four,e.cookiesToRemove.five];a<g.length;a++){var k=g[a];c(k)&&i(k)}}))}}))}();