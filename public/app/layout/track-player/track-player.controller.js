(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('trackPlayer', trackPlayer);

    trackPlayer.$inject = ['eventEmitter', '$timeout'];

    function trackPlayer(eventEmitter, $timeout) {
        /* jshint validthis: true */
        var vm = this;
        vm.imageToDisplay;
        vm.newImage;
        vm.isTrackSet = false;
        vm.isTrackPlay = false;
        vm.playTrack = playTrack;
        vm.history;

        var widgetIframe = document.getElementById('sc-widget');
        var widget = SC.Widget(widgetIframe);

        function playTrack() {
            if (vm.isTrackSet) {
                if (!vm.isTrackPlay) {
                    widget.play();
                    vm.action = 'Track Play';
                } else {
                    widget.pause();
                    vm.action = 'Track Pause';
                }
                vm.isTrackPlay = !vm.isTrackPlay;
            }
        }

        eventEmitter.subscribe_player(function(obj) {
            widget.load(obj.uri, {
              auto_play: false
            });
            $timeout(function () {
                vm.isTrackSet = true;
                vm.isTrackPlay = false;
                vm.action  = '';
                vm.newImage = obj.artwork_url || 'assets/images/defaultImgLarge.jpg';
            });
        });

    }
})();
