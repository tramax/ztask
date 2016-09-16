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
		var allProjects = $scope.projects.todo.concat($scope.projects.progress, $scope.projects.done);

		// Check if the project name is empty
		if (project.length === 0) {
			alert('Please enter a project name.')
			return;
		}

		// Check if the project name is duplicated
		if (allProjects.indexOf(project) > -1) {
			alert('This project name is taken. Please enter a different name.')
			return; 
		}

		// Add the new project to To Do list
		$scope.projects.todo.push(project);

		// Reset input value
		$scope.projects.new = '';
	};
}]);