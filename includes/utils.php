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
    return '<div class="emphasis-block success-message" role="alert"><p class="h3">Your cookie settings were saved</p><p>Thank you!</p></div>';
}

// Create the HTML Cookie Banner
function cookie_banner() {
    printf('<div id="ds-cookie-consent-banner" class="cookieConsent" role="region" aria-label="Cookie banner">
     <div class="container" role="region" aria-label="Cookies on The National Archives" tabindex="1">
         <div class="row" >
             <h3 class="cookie_head">This website uses cookies</h3>
             <p class="cookie-p">
                 We place some essential cookies on your device to make this website work.<br><br>
                 Analytics cookies help us improve this website. These cookies are optional. They help us understand how you use our services.
             </p>
             <a href="/latin/legal/cookies/" tabindex="1" id="btn_preferences" class="button">View cookies</a>
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