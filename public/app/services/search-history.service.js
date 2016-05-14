(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('searchHistory', searchHistory);

    searchHistory.$inject = ['eventEmitter'];

    function searchHistory(eventEmitter) {

        var history = [];
        var service = {
            initHistory : initHistory,
            addNewSearch: addNewSearch
        };

        return service;

        function initHistory(historyFromStorage) {
            if (historyFromStorage.length > 0) {
                history = historyFromStorage;
            }
        }

        function addNewSearch(searchText) {
            if ( checkIfSearchExsits(searchText) ) {
                if (history.length < 5) {
                    addToFirst(searchText);
                } else {
                    addAndPop(searchText);
                }
                eventEmitter.publish_history(history);
            }
        }

        function checkIfSearchExsits(searchText) {
            if (history.indexOf(searchText) === -1) {
                return true;
            } else {
                return false;
            }
        }

        function addToFirst(searchText) {
            history.unshift(searchText);
        }

        function addAndPop(searchText) {
            history.unshift(searchText);
            history.pop();
        }



    }

})();

