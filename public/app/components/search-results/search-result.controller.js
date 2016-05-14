(function() {
    'use strict';

    angular
        .module('app.components')
        .controller('searchResult', searchResult);

    searchResult.$inject = ['eventEmitter', 'userPreferences'];

    function searchResult(eventEmitter, userPreferences) {
        /* jshint validthis: true */
        var vm = this;
        vm.defaultImg = 'assets/images/defaultImg.jpg';
        vm.viewResult;
        vm.setGridView = setGridView;
        vm.setListView = setListView;
        vm.nextPage = nextPage;
        vm.setTrack = setTrack;
        vm.currentTrack = null;

        init();

        function init() {
            vm.viewResult = userPreferences.getUserPreferencesView();
        }

        function setGridView() {
            vm.viewResult =  "grid";
            userPreferences.setView(vm.viewResult);
        }
        function setListView() {
           vm.viewResult =  "list";
           userPreferences.setView(vm.viewResult);
        }
        function nextPage() {
                vm.getNextSearchResults();
        }
        function setTrack(trackObj) {
            if (vm.currentTrack !== trackObj) {
                vm.currentTrack = trackObj;
                eventEmitter.publish_player(trackObj);
            }
        }
    }
})();
