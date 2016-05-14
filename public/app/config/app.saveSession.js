(function() {
    'use strict';

    angular
        .module('app.config')
        .controller('SaveSession', SaveSession);

    SaveSession.$inject = ['$scope', 'userPreferences'];

    function SaveSession($scope, userPreferences) {
            $scope.$on('onBeforeUnload', function (e) {
                userPreferences.saveUserPreferencesToLocalstorage();
                e.preventDefault();
            });
            $scope.$on('onUnload', function (e) {
                userPreferences.saveUserPreferencesToLocalstorage();
                console.log('leaving page');
            });
        }
})();
