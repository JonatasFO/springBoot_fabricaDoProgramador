var app = angular.module("appCliente", []);

app.controller("indexController", function($scope, $http) {

	$scope.nome = "Jonatas";
	$scope.sobrenome = "Ferreira";
	$scope.clientes = [];

	$http({ method: 'GET', url: 'http://localhost:8080/clientes' })
	.then(function(response) {
		$scope.clientes = response.data
	
		console.log(response.data);
		console.log(response.status);
	 }, function(response) { 
	 	console.log("deu errado");
	 	console.log(response.data);
		console.log(response.status);
	 });

});