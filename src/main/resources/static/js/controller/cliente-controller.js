app.controller("clienteController", function($scope, $http) {

	$scope.clientes = [];
	$scope.cliente = {};
	
	carregarClientes = function(){
		$http({ method: 'GET', url: 'http://localhost:8080/clientes' })
		.then(function(response) {
			$scope.clientes = response.data
		 }, function(response) { 
		 	console.log("deu errado");
		 	console.log(response.data);
			console.log(response.status);
		 });
	};
	
	$scope.salvarCliente = function(){

		if ($scope.frmCliente.$valid) {

			$http({ method: 'POST', url: 'http://localhost:8080/clientes', data: $scope.cliente })
			.then(function(response) {
				//$scope.clientes.push(response.data);
				carregarClientes();

				$scope.cancelarAlteracaoCliente();
				$scope.frmCliente.$setPristine(true);
			 }, function(response) {
			 	console.log("deu errado");
			 	console.log(response.data);
				console.log(response.status);
			 });

		} else {
			window.alert("Dados Invalidos")
		}
	};

	$scope.excluirCliente = function(cliente){
		$http({ method: 'DELETE', url: 'http://localhost:8080/clientes/'+cliente.id })
		.then(function(response) {
			$scope.clientes.splice(0,1);
		 }, function(response) { 
		 	console.log("deu errado");
		 	console.log(response.data);
			console.log(response.status);
		 });
	};

	$scope.alterarCliente = function(cli){
		$scope.cliente = angular.copy(cli);
	};

	$scope.cancelarAlteracaoCliente = function (){
		$scope.cliente = {};
	};

	carregarClientes();

});