(function () {
    'use strict';

    angular
        .module('app.config')
        .factory('beforeUnload', beforeUnload)
        .run(function (beforeUnload) {

        });

    beforeUnload.$inject = ['$rootScope', '$window'];

    function beforeUnload($rootScope, $window) {
        $window.onbeforeunload = function (e) {
            var event = $rootScope.$broadcast('onBeforeUnload');
            if (event.defaultPrevented) {
                 console.log('data saved');
            }
        };

        $window.onunload = function () {
            $rootScope.$broadcast('onUnload');
        };
        return {};
    }


})();

