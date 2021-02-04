# Technical approach

The purpose of this document is to outline a suggested technical approach for Cookie Consent. The primary concerns here are: 

* Delivering a robust, maintainable and inclusive mechanism for ensuring compliance
* Reflecting the GDS Service Manual

## Proposed approach

Adopt the approach used on the broader GOV.UK domain. That would be along the lines outlined in the [overview](#overview). The detail of specific scenarios is outlined in the [scenarios](#scenarios) section.

## Overview

### The banner

* The cookie banner HTML will be included in HTTP responses based on the presence of a cookie named `cookie_preferences_set` in the HTTP request. If this cookie is set the value will be `true`. If the cookie is not set or if the value is anything other than `true`, the banner will be included. 
* The basic banner will have a link to the cookie setting page, but will be progressively enhanced to include buttons that, when clicked, will set permissions within the `cookies_policy` and the `cookie_preferences_set` cookies using JavaScript. 

### Setting cookies

* Cookie preferences will be stored in a `cookie_policy` cookie as a string representation of a JSON object where each property corresponds to an option on the cookie preferences page.
* If the `cookie_policy` cookie is not included in a HTTP request, the `cookie_policy` cookie will be included in the HTTP response with essential cookies set to true and all others set to false. This will ensure only those cookies that have been consented to are set. 
* Upon receiving a HTTP request, each application will query for the presence of this `cookie_policy` cookie to determine which cookies should be set. Unless the relevant category is explicity set as `true` within this cookie, the cookie will not be set. **All code that sets non-essential cookies must therefore be wrapped in a relevant test to ensure user preferences are respected.**
* The Cookie Settings Page will include a standard HTTP form. Upon submission, the confirmation page HTTP response will include the `cookie_policy` cookie with preferences set to reflect the users choices and set the `cookie_preferences_set` cookie. 
* Upon implementation of the new cookie banner, the team will need to determine how they intend to manage existing cookies (i.e. those that were set before users were able to opt out of them). 

## Scenarios

### The 'new' user

These might be genuinely new users or they might be existing users who are using a different browser or who have cleared their browser cookies. 

#### HTTP request

None of the cookies outlined in the [overview](#overview) section will be included in the HTTP request. 

#### HTTP response

In this scenario the HTTP response will include:

* A `cookie_policy` cookie permitting essential cookies only
* The HTML for the basic banner
* The JavaScript to progressively enhance the banner and allow for cookie acceptance/rejection to take place on the current page

**The HTML response should not include any non-essential cookie setting code (for example the Google Tag Manager script block)**

**Note:** we may have to clear any existing cookies at this stage (this is something for the team to discuss).

### The returning user (no preferences set)

#### HTTP request

Requests matching this scenario can be identified by:

* The presence of a `cookie_policy` cookie
* The absence of a `cookie_preferences_set` cookie

#### HTTP response

In this scenario the HTTP response will include: 

* The HTML for the basic banner
* The JavaScript to progressively enhance the banner and allow for cookie acceptance/rejection to take place on the current page
* The cookie setting code which corresponds to the properties in the `cookie_policy` (no other cookie setting code should be included)

### The returning user (preferences set)

#### HTTP request

Requests matching this scenario can be identified by the presence of both the `cookie_policy` and `cookie_preferences_set` cookies. 

#### HTTP response

* The cookie setting code which corresponds to the properties in the `cookie_policy` (no other cookie setting code should be included)

The HTTP response should **not** include the banner or JavaScript which progressively enhances it.

### Upon preference setting - in page

Where the user interacts with the progressively enhanced banner JavaScript will set the relevant cookies client-side. 

#### Cookies set with JavaScript

* `cookie_preferences_set` will be set to `true`
* `cookie_policy` will be set to a string representing a JSON object reflecting their choices

#### Feedback provided to user

Having made a selection the banner will need to be removed and the user presented with feedback/confirmation of the choice made (including use of ARIA).

### Upon preference setting - via Cookie Settings Page

#### HTTP response

Upon processing of form submission (HTTP Post), the HTTP response will include:

* `cookie_preferences_set` will be set to `true`
* `cookie_policy` will be set to a string representing a JSON object reflecting their choices

#### Feedback provided to user

The user will be presented with confirmation of their preferences having been saved. 
