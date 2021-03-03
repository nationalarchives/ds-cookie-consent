<?php
/**
* Plugin Name: TNA Cookie Consent
* Plugin URI: https://nationalarchives.gov.uk
* Description: The National Archives cookie consent banner and cookie settings
* Version: 0.0.1
* Requires at least: 5.0
* Requires PHP: 7.2
* Author: Mihai Diaconita
* Author URI: https://nationalarchives.gov.uk
* License: GPL v2 or later
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain: ds-cookie-consents
*/

/*
TNA Cookie Consent is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

TNA Cookie Consent is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with TNA Cookie Consent. If not, see {URI to Plugin License}.
*/

require_once plugin_dir_path(__FILE__) . 'functions.php';

$cookie_consent_plugin_options =  new Ds_Cookie_Consent_Fields_Admin_Options();
$manage_acceptable_group_cookie_list = new Manage_Acceptable_Group_Cookie_List(
    array(
        'usage'         => false,
        'settings'      => false,
        'essential'     => true,
    )
);


if(!isset($_COOKIE['cookies_policy'])) {
    $cookie_group_list_to_json = json_encode( $manage_acceptable_group_cookie_list );
    setcookie('cookies_policy', $cookie_group_list_to_json, time()+31556926  ,'/');
    /** 
    * Call $_COOKIE directly after was set so it can be accessed 
    * without having to reload or navigate to a different page 
    */ 
    $_COOKIE['cookies_policy'] = $cookie_group_list_to_json;
}

if(isset( $_POST['submit'] )) {

    setcookie('dontShowCookieNotice',  'true', time()+31556926  ,'/');
    /** 
        * Call $_COOKIE directly after was set so it can be accessed 
        * without having to reload or navigate to a different page 
        */ 
    $_COOKIE['dontShowCookieNotice'] = 'true';

    if(isset($_COOKIE['cookies_policy'])) {
        $cookies_policy_to_obj = decode_cookie('cookies_policy');
        
        if(isset($_REQUEST['measure-website-use']) && $_REQUEST['measure-website-use'] == 'yes'){
            $cookies_policy_to_obj->usage = true;
        } else {
            $cookies_policy_to_obj->usage = false;
        }

        if(isset($_REQUEST['remember-your-settings']) && $_REQUEST['remember-your-settings'] == 'yes'){
            $cookies_policy_to_obj->settings = true;
        } else {
            $cookies_policy_to_obj->settings = false;
        }

        $updated_cookie_group_list_to_json = wp_json_encode( $cookies_policy_to_obj );
        
        setcookie('cookies_policy',  $updated_cookie_group_list_to_json, time()+31556926  ,'/');

        /** 
        * Call $_COOKIE directly after was set so it can be accessed 
        * without having to reload or navigate to a different page 
        */ 
        $_COOKIE['cookies_policy'] = $updated_cookie_group_list_to_json;
    }
}

function cookie_banner() {
   printf('<div id="ds-cookie-consent-banner" class="cookieConsent" role="region" aria-label="Cookie banner">
    <div class="container" role="region" aria-label="Cookies on The National Archives" tabindex="1">
        <div class="row" >
            <h3 class="cookie_head">This website uses cookies</h3>
            <p class="cookie-p"t>
                We place some essential cookies on your device to make this website work.<br > We also use optional analytics cookies to understand how you use The National Archives website, and to help us make improvements to our services.
            </p>
            <a href="https://test.nationalarchives.gov.uk/latin/legal/cookies" tabindex="1" id="btn_preferences" class="button">View cookies</a>
        </div>
    </div>
    </div>');
}

if (!isset($_COOKIE['dontShowCookieNotice'])) {
    add_action('wp_cookie_banner_hook', 'cookie_banner');
}
?>