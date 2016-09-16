angular.module('zt-stage', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
}])
.directive('ztStage', function() {
  return {
  	restrict: 'E',
  	scope: {
      list: '=ztProjects',
      title: '=ztTitle',
      color: '=ztColor'
    },
    templateUrl: 'common/directives/stage/stage.html'
  };
});