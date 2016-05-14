(function() {
    'use strict';

    angular
        .module('app.layout')
        .component('trackPlayer', {
                templateUrl : 'app/layout/track-player/track-player.template.html',
                controller : 'trackPlayer',
                controllerAs: 'vm'
            });


})();
