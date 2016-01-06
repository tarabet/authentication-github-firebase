/**
 * Created by Shuriken on 06.11.2015.
 */

(function() {
    'use strict';

        angular
        .module('appRooting', ['ui.router'])
        .config(Rooting);

            function Rooting($stateProvider, $urlRouterProvider) {
                // ROOTING BLOCK STARTS HERE //

                var delay = function ($q, $timeout) {
                    var delay = $q.defer();
                    $timeout(delay.resolve, 1);
                    // SOME DELAYED CODE HERE
                    return delay.promise;
                };

                $urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('home', {
                        url: '/',
                        controller: 'HomepageController',
                        controllerAs: 'vm',
                        templateUrl: 'js/partials/front-page-tmpl.html',
                        data: {requireLogin: false}, //Here we can provide some options for current state
                        resolve: {
                            // I will cause a 0001 second delay
                            delay: delay
                        }
                    })

            }

})();
