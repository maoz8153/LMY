(function() {
    'use strict';


    angular
        .module('app.services')
        .factory('soundCloudSearch', soundCloudSearch);

    soundCloudSearch.$inject = ['$http', '$q'];

    function soundCloudSearch($http, $q) {

        var soundcloud = {
            url : 'https://api.soundcloud.com/tracks',
            client_id : 'a44b75429f5bb8d3e4e91e2d69f84890',
            limit : 6
        };

        var service = {
            getNewSearchReasults: getNewSearchReasult,
            getNextSearchReasults: getNextSearchReasults,

        };

        return service;




        function getNewSearchReasult(searchText) {
            return getNewResults(searchText).then(function (data) {
                return data.data;
            });
        }

        function getNextSearchReasults(searchText, offset, linked_partitioning) {
            return getNextReasults(searchText, offset, linked_partitioning).then(function (data) {
                return data.data;
            });
        }


        function getNewResults(searchText) {
            return $http({
                            url: soundcloud.url,
                            method: "GET",
                            params: {
                                client_id: soundcloud.client_id,
                                q : searchText,
                                limit : soundcloud.limit,
                                linked_partitioning : 1
                                }
                             })
                            .then(function (res) {
                                if(!res){
                                    return $q.reject('error');
                                }
                                        return res;
                                });
        }

        function getNextReasults(searchText, offset) {
            return $http({
                            url: soundcloud.url,
                            method: "GET",
                            params: {
                                client_id: soundcloud.client_id,
                                q : searchText,
                                offset : offset,
                                limit : soundcloud.limit,
                                linked_partitioning : 1
                                }
                             })
                            .then(function (res) {
                                if(!res){
                                    return $q.reject('error');
                                }
                                        return res;
                                });
                    }

    }

})();

