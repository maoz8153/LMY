(function () {
    'use strict';
    angular
        .module('app.config')
        .run(run);

    run.$inject = ['$rootScope', 'userPreferences', 'searchHistory'];
    function run ($rootScope, userPreferences, searchHistory ) {
        SC.initialize({
            client_id: 'a44b75429f5bb8d3e4e91e2d69f84890'
        });
        $rootScope.$on('destory', function () {
            $rootScope.$broadcast('onUnload');
        });
        userPreferences.setUserPreferences();
    }

})();
