<?php

// Add custom stylesheet
function wpse_load_plugin_scripts() {
    $plugin_url = plugin_dir_url( __FILE__ );
    wp_enqueue_style( 'ds-cookie-consent-css', $plugin_url . 'lib/ds-cookie-consent.css');
    wp_enqueue_script( 'ds-cookie-consent-js', $plugin_url . 'lib/ds-cookie-consent.js', array(), '1.0.0', true );
}

// Add custom javascript
function wpse_load_plugin_js() {
    $plugin_url = plugin_dir_url( __FILE__ );
}

class Ds_Cookie_Consent_Fields_Admin_Options {
    public function __construct() {
        // Hook into the admin menu
        add_action( 'admin_menu', array( $this, 'create_plugin_options_page' ) );
        add_action( 'admin_init', array( $this, 'setup_sections' ) );
        add_action( 'admin_init', array( $this, 'setup_fields' ) );
    }

    public function create_plugin_options_page() {
        // Add the menu item and page
        $page_title = 'TNA Cookie Consent';
        $menu_title = 'TNA Cookie Consent';
        $capability = 'manage_options';
        $slug = 'ds_cookie_consent_fields';
        $callback = array( $this, 'plugin_options_page_content' );
        $icon = 'dashicons-privacy';
        $position = 22;
    
        add_menu_page( $page_title, $menu_title, $capability, $slug, $callback, $icon, $position );
    }

    public function section_callback( $arguments ) {
        switch( $arguments['id'] ){
            case 'content_section':
                echo 'The content for the Cookie Settings page goes here';
                break;
        }
    }
                
    public function setup_sections() {
        add_settings_section( 'content_section', 'Cookie Options page', array( $this, 'section_callback' ), 'ds_cookie_consent_fields' );
    }

     public function plugin_options_page_content() { ?>
        <div class="wrap">
            <h2>TNA Cookie Consent</h2>
            <form method="post" action="options.php">
                <?php
                    settings_fields( 'ds_cookie_consent_fields' );
                    do_settings_sections( 'ds_cookie_consent_fields' );
                    submit_button();
                ?>
            </form>
        </div> <?php
    }

    public function setup_fields() {
        $fields = array(
            array(
                'uid' => 'our_first_field',
                'label' => 'Cookies that measure website use',
                'section' => 'content_section',
                'type' => 'textarea',
                'options' => false,
                'placeholder' => '',
                'helper' => '',
                'supplemental' => 'Section description',
                'default' => ''
            ),
            array(
                'uid' => 'our_second_field',
                'label' => 'Cookies that remember your settings',
                'section' => 'content_section',
                'type' => 'textarea',
                'options' => false,
                'placeholder' => '',
                'helper' => '',
                'supplemental' => 'Section description',
                'default' => ''
            ),
            array(
                'uid' => 'our_third_field',
                'label' => 'Strictly necessary cookies',
                'section' => 'content_section',
                'type' => 'textarea',
                'options' => false,
                'placeholder' => '',
                'helper' => '',
                'supplemental' => 'Section description',
                'default' => ''
            )        );
        foreach( $fields as $field ){
            add_settings_field( $field['uid'], $field['label'], array( $this, 'field_callback' ), 'ds_cookie_consent_fields', $field['section'], $field );
            register_setting( 'ds_cookie_consent_fields', $field['uid'] );
        }
    }

    public function field_callback( $arguments ) {
        $value = get_option( $arguments['uid'] ); // Get the current value, if there is one
        if( ! $value ) { // If no value exists
            $value = $arguments['default']; // Set to our default
        }
    
        // Check which type of field we want
        switch( $arguments['type'] ){
            case 'text': // If it is a text field
                printf( '<input name="%1$s" id="%1$s" type="%2$s" placeholder="%3$s" value="%4$s" />', $arguments['uid'], $arguments['type'], $arguments['placeholder'], $value );
                break;
            case 'textarea': // If it is a textarea
                printf( '<textarea name="%1$s" id="%1$s" placeholder="%2$s" rows="5" cols="50">%3$s</textarea>', $arguments['uid'], $arguments['placeholder'], $value );
                break;
            case 'select': // If it is a select dropdown
                if( ! empty ( $arguments['options'] ) && is_array( $arguments['options'] ) ){
                    $options_markup = '';
                    foreach( $arguments['options'] as $key => $label ){
                        $options_markup .= sprintf( '<option value="%s" %s>%s</option>', $key, selected( $value, $key, false ), $label );
                    }
                    printf( '<select name="%1$s" id="%1$s">%2$s</select>', $arguments['uid'], $options_markup );
                }
                break;
        }
    
        // If there is help text
        if( $helper = $arguments['helper'] ){
            printf( '<span class="helper"> %s</span>', $helper ); // Show it
        }
    
        // If there is supplemental text
        if( $supplimental = $arguments['supplemental'] ){
            printf( '<p class="description">%s</p>', $supplimental ); // Show it
        }
    }
}



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

    $output = '<form method="post" action="/latin/legal/cookies" id="ds-cookie-consent-form" class="tna-form tna-form-engagement">';
    $output .= '<fieldset>';
    $output .= (!empty($_POST)) ? cookie_success_message() : '';
    $output .= '<legend class="sr-only">Cookie settings</legend>';
    $output .= '<h2>Cookies that measure website use</h2>';
    $output .= get_option('our_first_field');
    $output .= '<br><br>';
    $output .= '<input type="radio" id="measure_website_use" name="measure-website-use" value="yes" ' . $accept_usage_option . '>';
    $output .= '<label for="measure_website_use">Use cookies that measure my website use</label><br>';
    $output .= '<input type="radio" id="donot_measure_website_use" name="measure-website-use" value="no" ' . $reject_usage_option . '>';
    $output .= '<label for="donot_measure_website_use">Do not use cookies that measure my website use</label><br>';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ? '<h2>Cookies that remember your settings</h2>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ? get_option('our_second_field') : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<br><br>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<input type="radio" id="remember_your_settings" name="remember-your-settings" value="yes" ' . $accept_settings_option . '>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<label for="remember_your_settings">Use cookies that remember my settings on the site</label><br>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<input type="radio" id="donot_remember_your_settings" name="remember-your-settings" value="no" ' . $reject_settings_option . '>' : '';
    $output .= (isset($atts['settings']) && $atts['settings'] == 'show') ?'<label for="donot_remember_your_settings">Do not use cookies that remember my settings on the site</label><br>' : '';
    $output .= '<h2>Strictly necessary cookies</h2>';
    $output .= get_option('our_third_field');
    $output .= '<br><br>';
    $output .= '<input type="radio" id="strictly_necessary" name="strictly-necessary" value="yes" checked disabled>';
    $output .= '<label for="strictly_necessary">Use cookies that are essential to make the site work</label><br>';
    $output .= '<input type="radio" id="donot_strictly_necessary" name="strictly-necessary" value="no" disabled>';
    $output .= '<label for="donot_strictly_necessary">Do not use cookies that are essential to make the site work</label><br>';
    $output .= '<br><br>';
    $output .= '<div class="tna-form__row"><input type="submit" name="submit" id="form_submit" value="Save changes" class="tna-button"></div>';
    $output .= '</fieldset>';
    $output .= '</form>';

    return $output;
}

class Manage_Acceptable_Group_Cookie_List implements JsonSerializable {
    protected $usage;
    protected $settings;
    protected $essential;

    public function __construct(array $cookie_options) 
    {
        $this->usage        = $cookie_options['usage'];
        $this->settings     = $cookie_options['settings'];
        $this->essential    = $cookie_options['essential'];
    }
    
    public function getEssential() 
    {
        return $this->essential;
    }
    
    public function getSettings()
    {
        return $this->settings;
    }

    public function getUsage()
    {
        return $this->usage;
    }

    public function jsonSerialize()
    {
        return 
        [
            'usage'       => $this->getUsage(),
            'settings'    => $this->getSettings(),
            'essential'   => $this->getEssential()
        ];
    }
}

function decode_cookie($cookie_name) {

    if(isset($_COOKIE[$cookie_name])) {
        $cookie = $_COOKIE[$cookie_name];
        $clean_cookie = preg_replace('/\\\\/', '', $cookie);
        return json_decode( $clean_cookie );
    }
    return false;
}

function cookie_success_message() {
    return '<div class="emphasis-block success-message" role="alert"><p class="h3">Your cookie settings were saved</p><p>Thank you!</p></div>';
}

add_action( 'wp_enqueue_scripts', 'wpse_load_plugin_scripts' );
add_shortcode( 'ds-cookie-consent-settings', 'shortcode_settings_page' );
?>