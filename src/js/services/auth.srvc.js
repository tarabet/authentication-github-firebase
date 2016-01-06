/**
 * Created by Shuriken on 05.01.2016.
 */

(function(angular) {

    function AuthService($log, $q, $firebaseAuth, constants, session){

        var ref = new Firebase(constants.FirebaseUrl);
        var authObj = $firebaseAuth(ref);

        this.getAuthObj = function() {
            return authObj;
        };

        this.isLoggedIn = function isLoggedIn(){
            return session.getAuthData() !== null;
        };

        this.logIn = function(){
            return authObj
                .$authWithOAuthPopup('github', {
                    scope: 'user'
                })
                .then(
                    function(authData){
                        session.setAuthData(authData);
                        return authData;
                    },
                    function(error){
                        $q.reject(error);
                    }
                );
        };

        this.logOut = function(){
            authObj.$unauth();
            session.destroy();
        };

    }

    AuthService.$inject = ['$log', '$q', '$firebaseAuth', 'constants', 'session'];

    angular.module('appServices')
        .service('auth', AuthService);

})(angular);
