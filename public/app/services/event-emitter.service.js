(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('eventEmitter', eventEmitter);

    function eventEmitter() {

        var listeners_history = [];
        var listeners_search = [];
        var listeners_player = [];
        var service = {
            subscribe_history: subscribe_history,
            publish_history: publish_history,
            subscribe_player : subscribe_player,
            publish_player : publish_player,
            subscribe_search : subscribe_search,
            publish_search : publish_search
        };

        return service;

        function subscribe_history(callback) {
            listeners_history.push(callback);
        }

        function publish_history(obj) {
            angular.forEach(listeners_history, function(value, key) {
                value(obj);
            });
        }

        function subscribe_player(callback) {
            listeners_player.push(callback);
        }

        function publish_player(obj) {
            angular.forEach(listeners_player, function(value, key) {
                value(obj);
            });
        }

        function subscribe_search(callback) {
            listeners_search.push(callback);
        }

        function publish_search(obj) {
            angular.forEach(listeners_search, function(value, key) {
                value(obj);
            });
        }

    }

})();

