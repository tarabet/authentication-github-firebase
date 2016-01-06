/**
 * Created by Shuriken on 06.11.2015.
 */

(function() {
    'use strict';

    angular
        .module('appConfig', [])
        .config(Config);

        function Config($provide) {

            // CREATE FACTORY TO INJECT SOME URLS ON EXTERNAL DATA
            // START INJECT SERVICE WITH EXTERNAL DATA URLS //
            $provide.factory('extDataUrls', function() {
                return {
                    url: 'some_url_here'
                }
            });
            // END INJECT SERVICE WITH EXTERNAL DATA URLS //
        }

})();