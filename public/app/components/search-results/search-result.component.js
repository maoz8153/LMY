(function() {
    'use strict';

    angular
        .module('app.components')
        .component('searchResult', {
                templateUrl : 'app/components/search-results/search-result.template.html',
                bindings : {
                    results : '=',
                    getNextSearchResults : '&',
                    havePagination : '='
                },
                controller : 'searchResult',
                controllerAs: 'vm'
            });


})();
