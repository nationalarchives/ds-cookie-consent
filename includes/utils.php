<?php

// Decode cookie
function decode_cookie($cookie_name) {
    if(isset($_COOKIE[$cookie_name])) {
        $cookie = $_COOKIE[$cookie_name];
        $clean_cookie = preg_replace('/\\\\/', '', $cookie);
        return json_decode( $clean_cookie );
    }
    return false;
}

// Success message on the Cookie Settings Page
function cookie_success_message() {
    return '<div class="emphasis-block success-message" role="alert"><p class="h3">Thank you</p><p>Your cookies settings have been saved.</p></div>';
}

// Create the HTML Cookie Banner
function cookie_banner() {
    printf('<div id="ds-cookie-consent-banner" class="cookieConsent" role="region" aria-label="Cookie banner">
        <div class="container" role="region" aria-label="Cookies on The National Archives">
            <div class="row">
                <p class="cookie_head">This website uses cookies</p>
                <p class="cookie-p">
                    We place some essential cookies on your device to make this website work. <br><br>
                    We\'d like to use additional cookies to remember your settings and understand how you use our services. <br><br>
                    This information will help us make improvements to the website.
                </p>
                <a href="/latin/cookies/" id="btn_preferences" class="button">Set cookie preferences</a>
            </div>
        </div>
     </div>');
 }

// Add type="module" to the script tag
function add_type_attribute($tag, $handle, $src) {
    // if not your script, do nothing and return original $tag
    if ( 'ds-cookie-consent-js' !== $handle ) {
        return $tag;
    }
    // change the script tag by adding type="module" and return it.
    $tag = '<script type="module" src="' . esc_url( $src ) . '"></script>';
    return $tag;
}

/*
 * Tell WP Super Cache to cache requests with the cookie "cookies_policy" and "dontShowCookieNotice" 
 */
 function add_wpsc_cookie_banner() {
    do_action( 'wpsc_add_cookie', 'cookies_policy' );
    do_action( 'wpsc_add_cookie', 'dontShowCookieNotice' );
}