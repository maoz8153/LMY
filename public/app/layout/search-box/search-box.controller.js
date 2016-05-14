(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('searchBox', searchBox);

    searchBox.$inject = ['soundCloudSearch' , 'searchHistory', 'eventEmitter', '$timeout'];

    function searchBox(soundCloudSearch, searchHistory, eventEmitter , $timeout) {
        /* jshint validthis: true */
        var vm = this;
        vm.search = search;
        vm.havePagination = false;
        vm.offset = 0;
        vm.currentSearchInput;
        vm.nextSearchResults = nextSearchResults;
        vm.searchResultItems;
        vm.searchInput;


        eventEmitter.subscribe_search(function(searchInput) {
            if (vm.searchInput !==  searchInput) {
                $timeout(function () {
                    vm.searchInput =  searchInput;
                    search(searchInput);
                });
            }
        });


        function search(searchInput) {
            if (searchInput.length > 0) {
                soundCloudSearch.getNewSearchReasults(searchInput).then(function(data) {
                    searchHistory.addNewSearch(searchInput);
                     $timeout(function () {
                        vm.currentSearchInput = searchInput;
                         vm.searchResultItems = data.collection;
                         if (data.next_href) {
                            var params = data.next_href.split('offset=');
                            vm.offset = params[1].split('&')[0];
                            vm.havePagination = true;
                         }
                     });
                     console.log(data);
                });
            }
        }

        function nextSearchResults() {
            soundCloudSearch.getNextSearchReasults(vm.currentSearchInput, vm.offset).then(function(data) {
                vm.offset += 1;
                 $timeout(function () {
                     vm.searchResultItems = data.collection;
                     if (data.next_href) {
                        var params = data.next_href.split('offset=');
                        vm.offset = params[1].split('&')[0];
                        vm.havePagination = true;
                     }
                 });
                 console.log(data);
            });
        }


    }
})();
