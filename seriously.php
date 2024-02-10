<?php
/**
 * Plugin Name:       Seriously
 * Description:       Seriously
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       seriously
 *
 * @package           seriously
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; 
}

function seriously_seriously_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'seriously_seriously_block_init' );
