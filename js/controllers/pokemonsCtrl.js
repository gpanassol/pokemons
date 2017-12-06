angular.module("pokemons").controller("pokemonsCtrl", function($scope, $http){
    
    $scope.pokemons = [];

    var carregarPokemons = function () {
        //$http.get("http://pokeapi.co/api/v2/pokemon/1/").success(function(data){
        //    $scope.pokemons = data;
        //}).error(function(data, status){
        //    $scope.message = "Error.: " + data;
        //});

        delete $http.defaults.headers.common['X-Requested-With'];

        $http.get("http://pokeapi.co/api/v2/pokemon/1/").then(function (response) {
			$scope.pokemons = response.data;
		});

    };

    carregarPokemons();
});