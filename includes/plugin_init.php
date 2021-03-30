<?php
require_once plugin_dir_path(__FILE__) . '../functions.php';

$cookie_consent_plugin_options =  new Ds_Cookie_Consent_Fields_Admin_Options();
$manage_acceptable_group_cookie_list = new Manage_Acceptable_Group_Cookie_List(
    array(
        'usage'         => false,
        'settings'      => false,
        'essential'     => true,
    )
);


// if(!isset($_COOKIE['cookies_policy'])) {
//     $cookie_group_list_to_json = json_encode( $manage_acceptable_group_cookie_list );
//     setcookie('cookies_policy', $cookie_group_list_to_json, time()+31556926  ,'/');
//     /** 
//     * Call $_COOKIE directly after was set so it can be accessed 
//     * without having to reload or navigate to a different page 
//     */ 
//     $_COOKIE['cookies_policy'] = $cookie_group_list_to_json;
// }

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