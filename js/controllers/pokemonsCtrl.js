angular.module("pokemons").controller("pokemonsCtrl", function($scope, pokemonsService, lowercaseFilter){
    
    $scope.pokemon = {};

    var carregarPokemons = function () {
        //$scope.pokemons = pokemonsService.getPokemons("pikachu").then(function(response){
        //    return $scope.pokemon = response.data;
        //});
    };

    $scope.buscarPokemon = function (nome) {
        $scope.pokemons = pokemonsService.getPokemons( angular.lowercase(nome) ).then(function(response){
            return $scope.pokemon = response.data;
        });
    };

    //carregarPokemons();
});