(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('userPreferences', userPreferences);

        userPreferences.$inject = ['searchHistory'];

        function userPreferences(searchHistory) {


            var preferences = {
                          view : null,
                          history : []
            };

            var service = {
                saveUserPreferencesToLocalstorage: saveUserPreferencesToLocalstorage,
                setUserPreferences : setUserPreferences,
                getUserPreferencesView : getUserPreferencesView,
                getUserPreferencesHistory : getUserPreferencesHistory,
                setHistory : setHistory,
                setView : setView
            };

            return service;






            function saveUserPreferencesToLocalstorage() {
                localStorage.LMYPreferences = angular.toJson(preferences);
            }

            function  setUserPreferences() {
                if (localStorage.getItem("LMYPreferences")) {
                    preferences =  JSON.parse(localStorage.LMYPreferences);
                    if (preferences.view === null) {
                        preferences.view = 'list';
                    }
                    searchHistory.initHistory(preferences.history);
                }

                console.log(preferences);
            }

            function getUserPreferencesView() {
                return preferences.view;
            }

            function getUserPreferencesHistory() {
                return preferences.history;
            }

            function setHistory(history) {
                preferences.history = history;
            }

            function setView(view) {
                preferences.view = view;
            }


        }

})();

