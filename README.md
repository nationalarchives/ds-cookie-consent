# The National Archivs cookie banner consent

- [Project findings](https://github.com/nationalarchives/ds-cookie-consent/blob/main/docs/about-the-project.md)

## Create Cookies Settings page

[ds-cookie-consent-settings]

## Banner

### HTML

[https://github.com/nationalarchives/ds-cookie-consent/blob/develop/includes/utils.php#L20-L31](Banner)

### JavaScript

[https://github.com/nationalarchives/ds-cookie-consent/blob/develop/src/api/dsCookieConsentBannerAPI.js](API)

### CSS

[https://github.com/nationalarchives/ds-cookie-consent/blob/develop/dist/ds-cookie-consent.css](Cascading_Stylesheet)

### Plugin init

[https://github.com/nationalarchives/ds-cookie-consent/blob/mihai/wp_plugin/src/ds-cookie-consent.js](Initialise_the_plugin)

## External usage instructions

- Copy over the HTMl banner
- include the CSS and JS library
- If the application has got code that's running on the server side, create the `cookies_policy` cookie at the http request if it doesn't exist

## Cache

This plugin extends WP Super Cache plugin capabilities to allow the use of `cookies_policy` & `dontShowCookieNotice` cookies and avoid the cache issues
