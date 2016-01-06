/**
 * Created by Shuriken on 24.10.2015.
 */

(function() {
    'use strict';

    angular
        .module('appDirectives')
        .directive('myDirective', myDirective);

    function myDirective() {

        function link(scope, element, attrs) {
            var _scope = scope;
            var _element = element;
            var _attrs = attrs;
        }

        return {
            restrict: 'A',
            link: link,
            replace: true,
            templateUrl: "js/partials/dir-tmpl/my-directive-tmpl.html"
        }
    }

})();
