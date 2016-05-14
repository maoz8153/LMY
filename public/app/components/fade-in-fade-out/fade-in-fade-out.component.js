(function() {
    'use strict';

    angular
        .module('app.components')
        .directive('fadeInFadeOut', fadeInFadeOut);

        fadeInFadeOut.$inject = ['$animate'];

        function fadeInFadeOut ($animate) {
            var directive = {
                link: link,
                restrict: 'E',
                template : '<img  class="track-image-container img-responsive img-center span3" ng-src="{{imageToDisplay}}" >',
                scope: {
                    newImage : '='
                },
            };
            return directive;

            function link(scope, element) {
                scope.imageToDisplay = 'assets/images/defaultImgLarge.jpg';
                scope.$watch('newImage', function(newValue) {
                    var img = element.children()[0];
                    $animate.addClass(img , 'ng-hide').then(function () {
                        scope.imageToDisplay = newValue;
                       $animate.removeClass(img , 'ng-hide');
                       console.log('change image complite');
                    });
                });


                }


        }
})();
