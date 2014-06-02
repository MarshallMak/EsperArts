angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/projects', {
			templateUrl: 'views/projects.html',
			controller: 'ProjectsController'
		})
        .when('/team', {
            templateUrl: 'views/team.html',
            controller: 'TeamController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactController'
        })
		.when('/services', {
			templateUrl: 'views/services.html',
			controller: 'ServicesController'
		});

	$locationProvider.html5Mode(true);

}]);