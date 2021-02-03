# Technical considerations

The purpose of this document is to outline a suggested technical approach for Cookie Consent. The primary concerns here are: 

* Delivering a robust and inclusive mechanism for ensuring compliance
* Reflecting the GDS Service Manual

## Proposed approach

Adopt the approach used on the broader GOV.UK domain. That would be along the lines of:

## The banner

* The cookie banner HTML will be included in HTTP responses based on the presence of a cookie named `cookie_preferences_set` in the HTTP request. If this cookie is set the value will be `true`. If the cookie is not set or if the value is anything other than `true`, the banner will be included. 
* The basic banner will have a link to the cookie setting page, but will be progressively enhanced to include an 'Accept all cookies' button that, when clicked, will set permissions within the `cookies_policy` and the `cookie_preferences_set` cookies via JavaScript. 

## Setting cookies

* Cookie preferences will be stored in a `cookie_policy` cookie as a string representation of a JSON object where each property corresponds to an option on the cookie preferences page.
* If the `cookie_policy` cookie is not included in a HTTP request, the `cookie_policy` cookie will be included in the HTTP response with essential cookies set to true and all others set to false. This will ensure only those cookies that have been consented to are set. 
* Upon receiving a HTTP request, each application will query for the presence of this `cookie_policy` cookie to determine which cookies should be set. Unless the relevant category is explicity set as `true` within this cookie, the cookie will not be set. **All code that sets non-essential cookies will need to be wrapped in a relevant test**
* The Cookie Settings Page will include a standard HTTP form. Upon submission, the confirmation page HTTP response will include the `cookie_policy` cookie with preferences set to reflect the users choices and set the `cookie_preferences_set` cookie. 
