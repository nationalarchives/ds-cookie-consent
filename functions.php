<?php

// Require Functions and Classes
require_once plugin_dir_path(__FILE__) . '/includes/plugin_init.php';
require_once plugin_dir_path(__FILE__) . '/includes/api/Ds_Cookie_Consent_Fields_Admin_Options.php';
require_once plugin_dir_path(__FILE__) . '/includes/api/Cookies_Settings_Shortcode.php';
require_once plugin_dir_path(__FILE__) . '/includes/api/Manage_Acceptable_Group_Cookie_List.php';
require_once plugin_dir_path(__FILE__) . '/includes/utils.php';

// Add custom stylesheet
function wpse_load_plugin_scripts() {
    $plugin_url =  plugin_dir_url( __FILE__ );
    wp_enqueue_style( 'ds-cookie-consent-css', $plugin_url . 'lib/ds-cookie-consent.css');
    wp_enqueue_script( 'ds-cookie-consent-js', $plugin_url . 'lib/ds-cookie-consent.js', array(), '1.0.0', true );
}

// Enqueue JS and CSS
add_action( 'wp_enqueue_scripts', 'wpse_load_plugin_scripts' );
// Enable shortcode for the Cookie Settings 
add_shortcode( 'ds-cookie-consent-settings', 'shortcode_settings_page' );
// Add type="module" to the script tag
// add_filter('script_loader_tag', 'add_type_attribute' , 10, 3);

if (!isset($_COOKIE['dontShowCookieNotice'])) {
    add_action('wp_cookie_banner_hook', 'cookie_banner');
}
?>