var app = angular.module("appCliente", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider){

  $routeProvider
	.when("/clientes", {
		templateUrl:'view/cliente.html',
		controller:'clienteController'
  	}).when("/clientes/:clienteId", {
		templateUrl:'view/cliente-detalhe.html',
		controller:'clienteDetalheController'
  	}).when("/cidades", {
		templateUrl: 'view/cidade.html',
		controler: 'cidadeController'
	}).when("/estados", {
		templateUrl: 'view/estado.html',
		controler: 'estadoController'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);

});