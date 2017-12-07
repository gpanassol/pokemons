angular.module("pokemons").controller("pokemonsCtrl", function($scope, pokemonsService){
    
    $scope.pokemons = [];

    var carregarPokemons = function () {
        //$scope.pokemons = pokemonsService.getPokemons().then(function(response){
        //    return $scope.pokemons = response.data;
        //});
    };

    carregarPokemons();
});