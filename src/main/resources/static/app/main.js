angular.module('app', ['minhasDiretivas','ngAnimate', 'ngRoute', 'ngResource', 'meusServicos'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/cadastro', {
			templateUrl: 'partials/cadastro.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/medicos', {
			templateUrl: 'partials/medicos/index.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/medicos/cadastro', {
			templateUrl: 'partials/medicos/cadastro.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/medicos/editar/:medicoId', {
			templateUrl: 'partials/medicos/editar.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/medicos/:medicoId', {
			templateUrl: 'partials/medicos/medico.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/new', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/fotos/edit/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});
