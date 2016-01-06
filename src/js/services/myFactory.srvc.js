/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    'use strict';

    angular
    .module('appServices')
    .factory('myFactory', myFactory);

    function myFactory() {

        // Creates firebase connection Object
        function testFactory() {
            return "Factory is working";
        }

        return {
            test: testFactory()
        }
    }

})();
