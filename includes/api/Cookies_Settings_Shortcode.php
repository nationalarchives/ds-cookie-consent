<?php
// Shorcode which enables the form
// ont the Cookies Settings page
function shortcode_settings_page( $atts ) {
    $a = shortcode_atts( array(
    'usage' => 'show',
    'settings' => 'hide',
    'necessary' => 'show',
    ), $atts );

    $output = '<form method="post" action="" id="ds-cookie-consent-form" class="tna-form tna-form-engagement">';
    $output .= '<fieldset class="jsOFF">';
    $output .= '<h2>Cookie settings</h2>';
    $output .= '<p>';
    $output .= 'We use Javascript to set most of our cookies. Unfortunately Javascript is not running on your browser, so you cannot change your settings. <br>';
    $output .= '<br>';
    $output .= 'You can try:</p>';
    $output .= '<ul>';
    $output .= '<li>reloading the page</li>';
    $output .= '<li>turning on Javascript in your browser</li>';
    $output .= '</ul>';
    $output .= '</fieldset>';
    $output .= '<fieldset class="jsON">';
    $output .= (!empty($_POST)) ? cookie_success_message() : '';
    $output .= '<legend class="sr-only">Cookie settings</legend>';
    $output .= '<h2>' . get_option('our_first_field_headline') . '</h2>';
    $output .= get_option('our_first_field');
    $output .= '<br><br>';
    $output .= '<div class="form-group">';
    $output .= '<input type="radio" id="measure_website_use" name="measure-website-use" value="yes">';
    $output .= '<label for="measure_website_use">Use cookies that measure my website use</label><br>';
    $output .= '</div>';
    $output .= '<div class="form-group">';
    $output .= '<input type="radio" id="donot_measure_website_use" name="measure-website-use" value="no">';
    $output .= '<label for="donot_measure_website_use">Do not use cookies that measure my website use</label><br>';
    $output .= '</div>';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ? '<h2>' . get_option('our_second_field_headline') . '</h2>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ? get_option('our_second_field') : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ? '<br><br>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<div class="form-group">': '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<input type="radio" id="remember_your_settings" name="remember-your-settings" value="yes">' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<label for="remember_your_settings">Use cookies that remember my preferences</label><br>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'</div>': '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<div class="form-group">': '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<input type="radio" id="donot_remember_your_settings" name="remember-your-settings" value="no">' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<label for="donot_remember_your_settings">Do not use cookies that remember my preferences</label><br>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'</div>': '';
    $output .= '<h2>' . get_option('our_third_field_headline') . '</h2>';
    $output .= get_option('our_third_field');
    $output .= '<br><br>';
    $output .= '<div class="tna-form__row"><input type="submit" name="submit" id="form_submit" value="Save cookies" class="tna-button"></div>';
    $output .= '</fieldset>';
    $output .= '</form>';

    return $output;
}