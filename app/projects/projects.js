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
	$scope.projects.new = '';
	$scope.projects.todo = [];
	$scope.projects.progress = [];
	$scope.projects.done = [];

	$scope.addProject = function(project) {
		if (project.length === 0) {
			alert('Please enter a project name.')
			return;
		}
		if ($scope.projects.todo.indexOf(project) > -1) {
			alert('This project name is taken. Please enter a different name.')
			return; 
		}
		$scope.projects.todo.push(project);
		$scope.projects.new = '';
	};


}]);