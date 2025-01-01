<?php
/**
 * Plugin Name: Persian Field Validation
 * Plugin URI:  https://sajadafsar.ir
 * Description: Restricts input fields to specific character types on the checkout page.
 * Version:     1.2
 * Author:      sajadafsar
 * Author URI:  https://sajadafsar.ir
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

// Enqueue custom script for validation
add_action( 'wp_enqueue_scripts', 'pfv_enqueue_scripts' );

function pfv_enqueue_scripts() {
    wp_enqueue_script( 'pfv-validation', plugin_dir_url( __FILE__ ) . 'validation.js', array( 'jquery' ), '1.2', true );
}
