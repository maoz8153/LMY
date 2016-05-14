(function() {
    'use strict';

    angular
        .module('app.layout')
        .component('userSearchHistory', {
                templateUrl : 'app/layout/user-search-history/user-search-history.template.html',
                controller : 'userSearchHistory',
                controllerAs: 'vm'
            });


})();
