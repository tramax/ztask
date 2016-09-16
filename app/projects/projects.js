'use strict';

angular.module('myApp.projects', ['ngRoute', 'zt-stage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', ['$scope', function($scope) {
	$scope.projects = {};
	$scope.projects.todo = ["A","B"];
	$scope.projects.progress = ["C","D"];
	$scope.projects.done = ["3.0", "3.1", "3.2", "3.3", "3.4", "3.5"];


}]);