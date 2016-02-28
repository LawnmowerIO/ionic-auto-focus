angular.module('autoFocus', [])

.directive('autoFocus', ['$timeout', function($timeout) {
  return {
    restrict: 'A',
    require: '^^ionNavView',
    link: function(scope, el, attrs, ctrl) {
      ctrl.scope.$on('$ionicView.afterEnter', function() {
        $timeout(function(){
          el[0].focus();
        }, 200);
      });
    }
  };
}]);
