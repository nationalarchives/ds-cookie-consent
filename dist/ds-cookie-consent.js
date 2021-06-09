!function(){"use strict";var e={text:"Accept cookies",url:"#",id:"accept_optional_cookies",class:"button"},t={text:"Reject cookies",url:"#",id:"reject_optional_cookies",class:"button"},o={text:"Hide this message",url:"#",id:"hide_this_message",class:"button"},n={id:"#btn_preferences"},r={id:".cookie-p"},c={id:".cookie_head"},i={id:"#ds-cookie-consent-banner"},a={cookieOne:"dontShowCookieNotice",cookieTwo:"cookies_policy",gaCookies:["_ga","_gid","_gat_UA-2827241-22","_gat_UA-2827241-1"]},s={id:"#ds-cookie-consent-form"},u={text:"You have accepted optional cookies. You can change your cookie settings on the <a href='https://www.nationalarchives.gov.uk/latin/cookies/'>Cookies page</a>.",ariaLabel:"Cookie consent confirmation message"},d={text:"You have rejected optional cookies. You can change your cookie settings on the <a href='https://www.nationalarchives.gov.uk/latin/cookies/'>Cookies page</a>.",ariaLabel:"Cookie consent confirmation message"},l={class:".cookieNotice"},m={one:"_ga",two:"_gid",three:"_gat_UA-2827241-1",four:"_gat_UA-2827241-22"},p={on:".jsON",off:".jsOFF"},f={analytics:{measure:"#measure_website_use",doNotMeasure:"#donot_measure_website_use"}};function v(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function h(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var k=function(e,t,o){var r=document.querySelector(n.id),c=document.createElement("button"),i=document.createTextNode(e);if(r){var a=r.parentNode;c.appendChild(i),c.className=o,c.id=t,a.insertBefore(c,r)}},y=function(e,t,o){(o=function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?v(Object(o),!0).forEach((function(t){h(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):v(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({path:"/",domain:"nationalarchives.gov.uk",secure:!0},o)).expires instanceof Date&&(o.expires=o.expires.toUTCString());var n=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var r in o){n+="; "+r;var c=o[r];!0!==c&&(n+="="+c)}document.cookie=n},b=function(e){return-1!==document.cookie.indexOf(e)},g=function(){for(var e=document.cookie.split(";"),t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];for(var r=function(t){var n=e[t],r=n.indexOf("="),c=r>-1?n.substr(0,r):n;o.forEach((function(e){c.trim()===e&&(document.cookie="".concat(c,'=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain="'),document.cookie="".concat(c,"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;domain=").concat(location.hostname.replace(/^www\./i,"")))}))},c=0;c<e.length;c++)r(c)},O=function(e){for(var t=document.cookie.split(";"),o="",n=0;n<t.length;n++){var r=t[n],c=r.indexOf("=");if(o=r.slice(c+1),(c>-1?r.substr(0,c).trim():r)===e)return o=decodeURIComponent(o),JSON.parse(o)}return o},w=document.querySelector(i.id);document.querySelector(s.id),O(a.cookieTwo),document.querySelector(f.analytics.measure),document.querySelector(f.analytics.doNotMeasure),console.log("I'm visible!"),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})),document.addEventListener("DOMContentLoaded",(function(){var i=document.querySelector(l.class),s=document.querySelector(p.on),f=document.querySelector(p.off);if(s&&(s.style.display="block"),f&&(f.style.display="none"),i&&i.remove(),w){k(e.text,e.id,e.class),k(t.text,t.id,t.class);var v=document.querySelector("#".concat(e.id)),h=document.querySelector("#".concat(t.id)),O=document.querySelector(n.id),_=document.querySelector(r.id),x=document.querySelector(c.id),S=w.querySelector(".container");v&&v.addEventListener("click",(function(e){e.preventDefault(),y(a.cookieOne,"true",{"max-age":7776e3}),k(o.text,o.id,o.class),v&&v.remove(),h&&h.remove(),O&&O.remove(),x&&x.remove(),_&&(_.innerHTML=u.text,S.setAttribute("aria-label",u.ariaLabel));var t=document.querySelector("#".concat(o.id));t&&(t.addEventListener("click",(function(e){e.preventDefault(),b(a.cookieOne)&&w&&w.remove()})),_.focus());var n=document.head,r=document.createElement("script");r.id="frontEndGA",r.src="https://nationalarchives.gov.uk/wp-content/plugins/ds-cookie-consent/dist/gtm-script.js",n.appendChild(r)})),h&&h.addEventListener("click",(function(e){e.preventDefault(),y(a.cookieOne,"true",{"max-age":7776e3}),k(o.text,o.id,o.class),v&&v.remove(),h&&h.remove(),O&&O.remove(),x&&x.remove(),_&&(_.innerHTML=d.text,S.setAttribute("aria-label",d.ariaLabel));var t=document.querySelector("#".concat(o.id));t&&(t.addEventListener("click",(function(e){e.preventDefault(),b(a.cookieOne)&&w&&w.remove()})),_.focus());for(var n=0,r=[m.one,m.two,m.three,m.four];n<r.length;n++){var c=r[n];b(c)&&g(c)}}))}}))}();