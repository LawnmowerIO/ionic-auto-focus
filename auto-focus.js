angular.module('autoFocus', [])

.directive('autoFocus', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    require: '^^ionNavView',
    link: function(scope, el, attrs, ctrl) {

      ctrl.scope.$on('$ionicView.afterEnter', function() {
        var checkAndFocus = function(){
          $timeout(function(){
            el[0].focus();
            if (document.activeElement != el[0]){
              $timeout(checkAndFocus, 500);
            }
          }, 200);
        };

        checkAndFocus();
      });
    }
  };
}]);
