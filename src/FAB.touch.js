/*----------------------------------------------------------------------------*\
 # Copyright 2017, BuzzingPixel, LLC

 # This program is free software: you can redistribute it and/or modify
 # it under the terms of the Apache License 2.0.
 # http://www.apache.org/licenses/LICENSE-2.0
 \*----------------------------------------------------------------------------*/

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
