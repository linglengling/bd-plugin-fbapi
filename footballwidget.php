<?php 
    /*
    Plugin Name: Football Widget
    Plugin URI: https://apifootball.com/wordpress/
    Description: Add Football Widget on your website.
    Author: apifootball.com
    Version: 1.0.7
    Author URI: https://apifootball.com
    */

add_shortcode('footballwidget', 'footballwidgets');

function footballwidget_plugin(){
    	add_options_page('Football Widget Settings', 'Football Widget', 'manage_options', 'football-widget-plugin', 'ms_plugin_options');
}

add_action('admin_menu','footballwidget_plugin');

function ms_plugin_options(){
    	include('footballwidgetoptions.php');
}

function footballwidgets(){  ?>

    <?php include ('css/main-style.php');?>
    <?php include ('css/widgetCountries.php');?>
    <?php include ('css/widgetLiveScore.php');?>
    <?php include ('css/widgetMatchResults.php');?>
    <?php include ('css/widgetLeague.php');?>
    <?php include ('css/widgetLeagueInfo.php');?>


   
    <script type="module">
        import translate from "<?php echo plugin_dir_url( __FILE__ ) ?>/data-lang.js";
        
        // function NTNtxt(){
        //     alert('asdfsdfsdf');
        // }
    </script>



    <div class="headerMenuDisplay">
    <div>
        <div class="container-football-widget">
            <div class="mainPageHeader">
                <p class="switchButton"><span></span></p>
            </div>
        </div>
    </div>
    <div class="container-football-widget container-with-errors" style="max-width: 1200px;">
        <section id="widgetCountries"></section>
        <section id="widgetLeague"></section>
        <section id="widgetLiveScore"></section>
    </div>
    </div>

    
    <script type="text/javascript">

        function setCookie(key, value, expiry) {
            var expires = new Date();
            expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
            document.cookie = key + '=' + value + ';path=/' + ';expires=' + expires.toUTCString();
        }

        setCookie('ms_api_key','<?php echo ms_Main::$settings["ms_api_key"]; ?>','365');
        setCookie('ms_color_one','<?php echo ms_Main::$settings["ms_color_one"]; ?>','365');
        setCookie('ms_color_two','<?php echo ms_Main::$settings["ms_color_two"]; ?>','365');
        setCookie('ms_color_three','<?php echo ms_Main::$settings["ms_color_three"]; ?>','365');

        jQuery(document).ready(function() {



            <?php $cleanPreferentialLeaguesData = str_replace(' ', "', '", ms_Main::$settings['ms_preferential_leagues']); ?>

            jQuery('#widgetCountries').widgetCountries({
                widgetLeagueLocation: '#widgetLeague',
                widgetLiveScoreLocation: '#widgetLiveScore',
                widgetWidth: "<?php echo ms_Main::$settings['ms_widget_width']; ?>%",
                preferentialLeagues: ['<?php echo $cleanPreferentialLeaguesData;?>']
            });

            var windowWidthSize = jQuery(window).width();

            if (windowWidthSize < 769) {
                jQuery('.logo-img-size-index').hide();
                jQuery('.switchButton').css('margin', '0 auto');
                jQuery('.mainPageHeader').css('margin', '0');
                jQuery('.mainPageHeader').hide();
            }
            jQuery('.switchButton').click(function() {
                if (jQuery('.widgetLeague').length) {
                    jQuery('.widgetLiveScore').toggle();
                    jQuery('.callendar-select-for-mobile').toggle();
                    jQuery('.widgetLeague').toggle();
                    if (jQuery('.widgetLeague').is(":visible")) {
                        jQuery('.switchButton').html('Back to Live Score');
                    } else {
                        jQuery('.switchButton').html('Back to League Details');
                    }
                }
            });

        });

    </script>

<?php
}

function msplugin_activate() {}
register_activation_hook( __FILE__,'msplugin_activate');
function msplugin_deactivate() {}
register_deactivation_hook( __FILE__,'msplugin_deactivate');

// Include Files
$files = array(
    '/classes/ms-module',
    '/classes/ms-main',
    '/classes/ms-setting'
);

foreach ($files as $file) {
    require_once plugin_dir_path( __FILE__ ).$file.'.php';
}
if ( class_exists( 'ms_Main' ) ) {
    ms_Main::get_instance();
 }
?>