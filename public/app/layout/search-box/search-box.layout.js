(function() {
    'use strict';

    angular
        .module('app.layout')
        .component('searchBox', {
            templateUrl : 'app/layout/search-box/search-box.template.html',
            controller: 'searchBox',
            controllerAs: 'vm'
        });

})();
