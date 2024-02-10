<?php
// enqueue your JavaScript file
function enqueue_view_script() {
    // Register the script first
    wp_register_script( 'view-script', plugins_url( '/view.js', __FILE__ ) );
    
    // Enqueue the script
    wp_enqueue_script( 'view-script' );
}

// Enqueue your CSS file
function enqueue_styles() {
    // Register the stylesheet first
    wp_register_style( 'my-plugin-styles', plugins_url( '/style-view.css', __FILE__ ) );
    
    // Enqueue the stylesheet
    wp_enqueue_style( 'my-plugin-styles' );
}

// Hook into the appropriate action
add_action( 'wp_enqueue_scripts', 'enqueue_view_script' );

// Hook into the appropriate action
add_action( 'wp_enqueue_scripts', 'enqueue_styles' );
?>

<div id="reactRoot"></div>