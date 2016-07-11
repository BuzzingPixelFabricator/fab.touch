/**
 * Fab Touch
 *
 * @package FAB.touch
 * @author TJ Draper <tj@buzzingpixel.com>
 * @version 1.0.0
 */

// Make sure FAB is defined
window.FAB = window.FAB || {};

(function(F, W, D) {
	'use strict';

	// Supports touch variable
	var support;

	/**
	 * Run check
	 *
	 * called once on demand to populate varible
	 */
	var runCheck = function() {
		support = 'ontouchstart' in W ||
			W.DocumentTouch && D instanceof W.DocumentTouch ||
			W.navigator.maxTouchPoints > 0 ||
			W.navigator.msMaxTouchPoints > 0;
	};

	// Create a FAB object for touch functions
	F.touch = {
		/**
		 * Does the browser support touch?
		 *
		 * @return {bool}
		 */
		support: function() {
			if (support === undefined) {
				runCheck();
			}

			return support;
		}
	};
})(window.FAB, window, document);
