<?php

function shortcode_settings_page( $atts ) {
    $a = shortcode_atts( array(
    'usage' => 'show',
    'settings' => 'hide',
    'necessary' => 'show',
    ), $atts );
    
    $accept_usage_option = "";
    $accept_settings_option = "";
    $reject_usage_option = "";
    $reject_settings_option = "";

    $cookies_policy_to_obj = decode_cookie('cookies_policy');

    if ($cookies_policy_to_obj->usage === true) {
        $accept_usage_option = "checked='checked'";
    } else {
        $accept_usage_option = "";
    }

    if ($cookies_policy_to_obj->usage === false) {
        $reject_usage_option = "checked='checked'";
    } else {
        $reject_usage_option = "";
    }

    if ($cookies_policy_to_obj->settings === true) {
        $accept_settings_option = "checked='checked'";
    } else {
        $accept_settings_option = "";
    }

    if ($cookies_policy_to_obj->settings === false) {
        $reject_settings_option = "checked='checked'";
    } else {
        $reject_settings_option = "";
    }

    $output = '<form method="post" action="/latin/legal/cookies/" id="ds-cookie-consent-form" class="tna-form tna-form-engagement">';
    $output .= '<fieldset>';
    $output .= (!empty($_POST)) ? cookie_success_message() : '';
    $output .= '<legend class="sr-only">Cookie settings</legend>';
    $output .= '<h3>' . get_option('our_first_field_headline') . '</h3>';
    $output .= get_option('our_first_field');
    $output .= '<br><br>';
    $output .= '<input type="radio" id="measure_website_use" name="measure-website-use" value="yes" ' . $accept_usage_option . '>';
    $output .= '<label for="measure_website_use">Use cookies that measure my website use</label><br>';
    $output .= '<input type="radio" id="donot_measure_website_use" name="measure-website-use" value="no" ' . $reject_usage_option . '>';
    $output .= '<label for="donot_measure_website_use">Do not use cookies that measure my website use</label><br>';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ? '<h2>' . get_option('our_second_field_headline') . '</h2>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ? get_option('our_second_field') : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<br><br>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<input type="radio" id="remember_your_settings" name="remember-your-settings" value="yes" ' . $accept_settings_option . '>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<label for="remember_your_settings">Use cookies that remember my settings on the site</label><br>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<input type="radio" id="donot_remember_your_settings" name="remember-your-settings" value="no" ' . $reject_settings_option . '>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<label for="donot_remember_your_settings">Do not use cookies that remember my settings on the site</label><br>' : '';
    $output .= '<h3>' . get_option('our_third_field_headline') . '</h3>';
    $output .= get_option('our_third_field');
    $output .= '<br><br>';
    $output .= '<div class="tna-form__row"><input type="submit" name="submit" id="form_submit" value="Save cookies" class="tna-button"></div>';
    $output .= '</fieldset>';
    $output .= '</form>';

    return $output;
}