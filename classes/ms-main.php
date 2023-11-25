<?php

if ( ! class_exists( 'ms_Main' ) ) {

	/**
	 * Main / front controller class
	 */
	class ms_Main extends ms_Module {

		protected $modules;
		const VERSION    = '1.0';
		const PREFIX     = 'ms-';
        const REQUIRED_CAPABILITY = 'administrator';

        /**
         * Plugin directory path value. set in constructor
         * @access public
         * @var string
         */
        public static $plugin_dir;
        /**
         * Plugin url. set in constructor
         * @access public
         * @var string
         */
        public static $plugin_url;

        /**
         * Plugin name. set in constructor
         * @access public
         * @var string
         */
        public static $plugin_name;

        /**
         * The Plugin settings
         *
         * @static
         * @var string
         */
        static $settings;

		/**
		 * Constructor
		 */
		protected function __construct() {

            self::$plugin_dir = plugin_dir_path(__FILE__);
            self::$plugin_url = plugins_url('', __FILE__);
            self::$plugin_name = plugin_basename(__FILE__);
            ms_Settings::get_options();
			$this->register_hook_callbacks();

		}

		public function register_hook_callbacks() {

			add_action( 'wp_enqueue_scripts',    __CLASS__ . '::load_resources' );
			add_action( 'admin_enqueue_scripts', __CLASS__ . '::load_resources' );
            add_action( 'admin_init',             array($this, 'admin_init'));

		}

        public function admin_init() {

			add_action('wp_ajax_ms_set_api_key', array( 'ms_Main', 'ajax_set_api_key'));
			add_action('wp_ajax_ms_set_color_one', array( 'ms_Main', 'ajax_set_color_one'));
			add_action('wp_ajax_ms_set_color_two', array( 'ms_Main', 'ajax_set_color_two'));
			add_action('wp_ajax_ms_set_color_three', array( 'ms_Main', 'ajax_set_color_three'));
			add_action('wp_ajax_ms_set_widget_width', array( 'ms_Main', 'ajax_set_widget_width'));
			add_action('wp_ajax_ms_set_preferential_leagues', array( 'ms_Main', 'ajax_set_preferential_leagues'));
			add_action('wp_ajax_ms_set_up_to_top_button', array( 'ms_Main', 'ajax_set_up_to_top_button'));

        }

        /**
         * Register CSS, JavaScript, etc
         */
        public static function load_resources() {

            wp_enqueue_style( 'wp-color-picker' );

            wp_register_script(
                self::PREFIX . 'admin-js',
                plugins_url( '/js/admin.js', dirname( __FILE__ ) ),
                array( 'jquery', 'wp-color-picker' ),
                self::VERSION,
                true
            );

            wp_register_script(
                'jqueryGlobals',
                plugins_url( '/js/jqueryGlobals.php', dirname( __FILE__ ) ),
                array( 'jquery' ),
                self::VERSION,
                true
            );

            wp_register_script(
                'widgetCountries',
                plugins_url( '/js/jquery.widgetCountries.js', dirname( __FILE__ ) ),
                array( 'jquery' ),
                self::VERSION,
                true
            );

            wp_register_script(
                'widgetLeague',
                plugins_url( '/js/jquery.widgetLeague.js', dirname( __FILE__ ) ),
                array( 'jquery' ),
                self::VERSION,
                true
            );

            wp_register_script(
                'widgetLiveScore',
                plugins_url( '/js/jquery.widgetLiveScore.js', dirname( __FILE__ ) ),
                array( 'jquery' ),
                self::VERSION,
                true
            );

            wp_register_script(
                'widgetMatchResults',
                plugins_url( '/js/jquery.widgetMatchResults.js', dirname( __FILE__ ) ),
                array( 'jquery' ),
                self::VERSION,
                true
            );

            wp_register_script(
                'noImg',
                plugins_url( '/img/no-img.png', dirname( __FILE__ ) ),
                array( 'jquery' ),
                self::VERSION,
                true
            );

            wp_localize_script(self::PREFIX . 'admin-js', 'ajax_object', array(
            	'ajax_url' => admin_url( 'admin-ajax.php' ))
            );
            wp_enqueue_script( self::PREFIX . 'admin-js' );
            wp_localize_script( 'jqueryGlobals', 'noImgLocation', array(
            	'noImgUrl' => plugins_url( '/img/no-img.png', dirname( __FILE__ ) ) )
            );
            wp_enqueue_script( 'jqueryGlobals');
            wp_localize_script( 'widgetCountries', 'widgetCountriesLocation', array(
            	'pluginJsUrl' => plugins_url( '/js/jquery.widgetCountries.js', dirname( __FILE__ ) ) )
            );
            wp_enqueue_script( 'widgetCountries' );
            wp_localize_script( 'widgetLeague', 'widgetLeagueLocation', array(
                'pluginJsUrl' => plugins_url( '/js/jquery.widgetLeague.js', dirname( __FILE__ ) ),
                'pluginHtmlUrl' => plugins_url( '/widgetLeagueInfo.php', dirname( __FILE__ ) ) )
            );
            wp_enqueue_script( 'widgetLeague' );
            wp_localize_script( 'widgetLiveScore', 'widgetLiveScoreLocation', array(
            	'pluginJsUrl' => plugins_url( '/js/jquery.widgetLiveScore.js', dirname( __FILE__ ) ) )
            );
            wp_enqueue_script( 'widgetLiveScore' );
            wp_localize_script( 'widgetMatchResults', 'widgetMatchResultsLocation', array(
                'pluginJsUrl' => plugins_url( '/js/jquery.widgetMatchResults.js', dirname( __FILE__ ) ),
                'pluginHtmlUrl' => plugins_url( '/widgetMatchResults.php', dirname( __FILE__ ) ) )
            );
            wp_enqueue_script( 'widgetMatchResults' );

        }

        /**
         * Creates the markup for the Settings header
         */
        static public function ajax_set_api_key(){
            $options = ms_Main::$settings;
            $options['ms_api_key'] = sanitize_text_field($_POST['state']);
            ms_Settings::update_options($options);
            die();
        }

        static public function ajax_set_color_one(){
            $options = ms_Main::$settings;
            $options['ms_color_one'] = sanitize_text_field($_POST['state']);
            ms_Settings::update_options($options);
            die();
        }

        static public function ajax_set_color_two(){
            $options = ms_Main::$settings;
            $options['ms_color_two'] = sanitize_text_field($_POST['state']);
            ms_Settings::update_options($options);
            die();
        }

        static public function ajax_set_color_three(){
            $options = ms_Main::$settings;
            $options['ms_color_three'] = sanitize_text_field($_POST['state']);
            ms_Settings::update_options($options);
            die();
        }

        static public function ajax_set_widget_width(){
            $options = ms_Main::$settings;
            $options['ms_widget_width'] = sanitize_text_field($_POST['state']);
            ms_Settings::update_options($options);
            die();
        }

        static public function ajax_set_preferential_leagues(){
            $options = ms_Main::$settings;
            $options['ms_preferential_leagues'] = sanitize_text_field($_POST['state']);
            ms_Settings::update_options($options);
            die();
        }

        static public function ajax_set_up_to_top_button(){
            $options = ms_Main::$settings;
            $options['ms_up_to_top_button'] = sanitize_text_field($_POST['state']);
            ms_Settings::update_options($options);
            die();
        }

	} // end ms_Main

}
?>