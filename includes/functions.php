<?php

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
    'measure' => true
    ), $atts );
    $output = '<h2>Cookies that measure website use</h2>';
    $output .= get_option('our_first_field');
    $output .= '<h2>Cookies that remember your settings</h2>';
    $output .= get_option('our_second_field');
    $output .= '<h2>Strictly necessary cookies</h2>';
    $output .= get_option('our_third_field');
    
    return $output;
}

function ds_cookie_consent_activation() {
    var_dump("Activate");
}

function ds_cookie_consent_deactivation() {
    var_dump("Deactivate");
}

function ds_cookie_consent_uninstall() {
    var_dump("Uninstall");
}
 

register_activation_hook( __FILE__, 'ds_cookie_consent_activation' );
register_deactivation_hook( __FILE__, 'ds_cookie_consent_deactivation' );
register_uninstall_hook( __FILE__, 'ds_cookie_consent_uninstall' );


add_shortcode( 'ds-cookie-consent-settings', 'shortcode_settings_page' );
?>