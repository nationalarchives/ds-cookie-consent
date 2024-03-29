# Cookie banner consent Wordpress plugin

- [Project findings](https://github.com/nationalarchives/ds-cookie-consent/blob/mihai/wp_plugin/docs/about-the-project.md)

## Installation

- Upload, install and activate the plugin

## Create Cookies Settings page

- Add shortcode [ds-cookie-consent-settings] to the website.
- On localhost, use `[ds-cookie-consent-settings usage='show' settings='show' necessary='show']` if you are having issues viewing the form.

- Content for the cookie sections can be added from TNA Cookie Consent dashboard settings page

## Implementation in other applications

- Usage of this code in other applications has some caveats. Since different applications will use different GA (Google Analytics) containers or different domains, the `gtm-script.js` and `domain` that are specified in this repository could be incorrect. Therefore, when implementing this code into another application, the bundled module (i.e. `dist/ds-cookie-consent.js`) should not be copied. Instead, copy the necessary modules into your application, make the appropriate changes (such as changing which `gtm-script.js` is loaded or the `domain` that cookies are being set on), and use a bundling tool such as webpack for building the amended modules.

## Banner

<img width="1263" alt="Screenshot 2021-04-20 at 10 35 43" src="https://user-images.githubusercontent.com/5245264/115373917-3b91b980-a1c4-11eb-82f7-96acab4a45cb.png">

### HTML

[https://github.com/nationalarchives/ds-cookie-consent/blob/mihai/wp_plugin/includes/utils.php#L20-L31](Banner)

### JavaScript

[https://github.com/nationalarchives/ds-cookie-consent/blob/mihai/wp_plugin/src/api/dsCookieConsentBannerAPI.js](API)

### CSS

[https://github.com/nationalarchives/ds-cookie-consent/blob/mihai/wp_plugin/dist/ds-cookie-consent.css](Cascading_Stylesheet)

### Plugin init

[https://github.com/nationalarchives/ds-cookie-consent/blob/mihai/wp_plugin/src/ds-cookie-consent.js](Initialise_the_plugin)

## External usage instructions

- Copy over the HTML banner
- include the CSS and JS library

## Cache

This plugin extends WP Super Cache plugin capabilities to allow the use of `cookies_policy` & `dontShowCookieNotice` cookies and avoid the cache issues

## Cookie flow

![cookies_policy](https://user-images.githubusercontent.com/5245264/115374112-70057580-a1c4-11eb-9188-cf497a3d84fa.png)

### Development machine configuration

**Download the repository.**

Get the latest files from the repository

```sh
# Download the project on your development machine on your preferred location
git clone https://github.com/nationalarchives/ds-cookie-consent
```

**Start developing.**

Navigate into the project’s directory and start it up.

```sh
cd ds-cookie-consent
npm install
npm run dev
```

Optional: Change the development mode to `development` inside webpack.config.js file and revert back to `production` when ready to deploy

#### Core technologies

This repository uses a number of technologies, including:

- [Babel](https://babeljs.io)
- [Webpack](https://webpack.js.org)
