# The National Archivs cookie banner consent Wordpress plugin

- [Project findings](https://github.com/nationalarchives/ds-cookie-consent/blob/main/docs/about-the-project.md)

## Installation
- Upload, install and activate the plugin

## Create Cookies Settings page

[ds-cookie-consent-settings]

- Content for the cookie sections ca be added from TNA Cookie Consent dashboard settings page

## Banner
<img width="1263" alt="Screenshot 2021-04-20 at 10 35 43" src="https://user-images.githubusercontent.com/5245264/115373917-3b91b980-a1c4-11eb-82f7-96acab4a45cb.png">


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

## Cache

This plugin extends WP Super Cache plugin capabilities to allow the use of `cookies_policy` & `dontShowCookieNotice` cookies and avoid the cache issues

## Cookie flow
![cookies_policy](https://user-images.githubusercontent.com/5245264/115372663-0a64b980-a1c3-11eb-9ef7-e81ac4cda026.png)

