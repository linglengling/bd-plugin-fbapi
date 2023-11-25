<?php

if ( ! class_exists( 'ms_Module' ) ) {

	/**
	 * Abstract class to define/implement base methods for all module classes
	 */
	abstract class ms_Module {
		private static $instances = array();
		/**
		 * Public getter for protected variables
		 * @param string $variable
		 * @return mixed
		 */
		public function __get( $variable ) {

			$module = get_called_class();

			if ( in_array( $variable, $module::$readable_properties ) ) {
				return $this->$variable;
			}
            else {
				throw new Exception( __METHOD__ . " error: $" . $variable . " doesn't exist or isn't readable." );
			}

		}
		/**
		 * Public setter for protected variables
		 * @param string $variable
		 * @param mixed  $value
		 */
		public function __set( $variable, $value ) {

			$module = get_called_class();

			if ( in_array( $variable, $module::$writeable_properties ) ) {
				$this->$variable = $value;

				if ( ! $this->is_valid() ) {
					throw new Exception( __METHOD__ . ' error: $' . $value . ' is not valid.' );
				}
			}
            else {
				throw new Exception( __METHOD__ . " error: $" . $variable . " doesn't exist or isn't writable." );
			}
		}

		/*
		 * Non-abstract methods
		 */
		/**
		 * Provides access to a single instance of a module using the singleton pattern
		 * @return object
		 */
		public static function get_instance() {
			$module = get_called_class();

            if ( ! isset( self::$instances[ $module ] ) ) {
				self::$instances[ $module ] = new $module();
			}

			return self::$instances[ $module ];
		}

		/**
		 * Constructor
		 */
		abstract protected function __construct();

	    } // end ms_Module
}
