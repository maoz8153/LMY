/*(function() {
    'use strict';

    angular
        .module('app.services')
        .factory('beforeUnload', beforeUnload);

        beforeUnload.$inject = ['$rootScope', '$window'];
         function beforeUnload($rootScope, $window) {
              // Events are broadcast outside the Scope Lifecycle

              $window.onbeforeunload = function (e) {
                  var confirmation = {};
                  var event = $rootScope.$broadcast('onBeforeUnload', confirmation);
                  if (event.defaultPrevented) {
                      return confirmation.message;
                  }
              };

              $window.onunload = function () {
                  $rootScope.$broadcast('onUnload');
              };
              return {};
          }
    angular
        .module('app.services')
        .run(function (beforeUnload) {

        });

});
*/
