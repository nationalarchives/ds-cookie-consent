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

require_once plugin_dir_path(__FILE__) . 'includes/functions.php';

$cookie_consent_plugin_options =  new Ds_Cookie_Consent_Fields_Admin_Options();
?>