app.controller("clienteDetalheController", function($scope, $routeParams, $http){

	$scope.cliente = {};

	$http.get("clientes/" + $routeParams.clienteId).then(function(response){
	
		console.log(response);
	
		$scope.cliente = response.data;
	
	}, function(response){
	
		console.log(response);
		
	});

});