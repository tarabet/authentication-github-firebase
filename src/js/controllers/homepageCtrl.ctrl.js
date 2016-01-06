/**
 * Created by Shuriken on 20.11.2015.
 */

(function() {
    angular
        .module('appControllers')
        .controller('HomepageController', HomepageController);

    function HomepageController ($log) {

        var vm = this;

        vm.welcomeMsg = "This is HomepageController";

        $log.info('This is HomepageController infoMessage');

    }
})();
