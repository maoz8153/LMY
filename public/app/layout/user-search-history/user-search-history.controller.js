(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('userSearchHistory', userSearchHistory);

    userSearchHistory.$inject = ['eventEmitter', 'userPreferences', '$timeout'];

    function userSearchHistory(eventEmitter, userPreferences ,$timeout) {
        /* jshint validthis: true */
        var vm = this;
        vm.history;
        vm.emitSearchFromHistory = emitSearchFromHistory;

        eventEmitter.subscribe_history(function(history) {
            $timeout(function () {
                vm.history =  history;
                userPreferences.setHistory(vm.history);
            });
        });

        function emitSearchFromHistory(searchInput) {
            eventEmitter.publish_search(searchInput);
        }


        init();

        function init() {
            vm.history = userPreferences.getUserPreferencesHistory();
        }


    }
})();
