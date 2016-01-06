/**
 * Created by Shuriken on 05.01.2016.
 */

(function (angular) {

    function sessionService(){

        this._authData = angular.fromJson(localStorage.getItem('session.authData'));

        this.getAuthData = function(){
            return this._authData;
        };

        this.setAuthData = function(authData){
            this._authData = authData;
            localStorage.setItem('session.authData', angular.toJson(authData));
            return this;
        };

        this.getGitHubAccessToken = function(){
            if(this._authData && this._authData.github && this._authData.github.accessToken){
                return this._authData.github.accessToken;
            }
            return null;
        };

        this.getFullName = function() {
            if (this._authData) {
                return this._authData.github.displayName;
            }
        };

        /**
         * Destroy session
         */
        this.destroy = function destroy(){
            this.setAuthData(null);
        };

    }

    // Inject dependencies
    sessionService.$inject = [];

    // Export
    angular.module('appServices')
        .service('session', sessionService);

})(angular);
