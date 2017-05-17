angular.module('app', ['ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: '../partials/index.html'
		});

		$routeProvider.when('/cadastro', {
			templateUrl: '../partials/cadastro.html'
		});

		$routeProvider.when('/medicos', {
			templateUrl: '../partials/medicos/index.html',
			controller: 'MedicosController'
		});

		$routeProvider.when('/medicos/cadastro', {
			templateUrl: '../partials/medicos/cadastro.html',
			controller: 'MedicoController'
		});

		$routeProvider.when('/medicos/editar/:medicoId', {
			templateUrl: '../partials/medicos/editar.html',
			controller: 'MedicoController'
		});

		$routeProvider.when('/medicos/:medicoId', {
			templateUrl: '../partials/medicos/medico.html',
			controller: 'MedicoController'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});
