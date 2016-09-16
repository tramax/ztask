angular.module('zt-stage', [])
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