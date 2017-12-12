angular.module("pokemons").controller("pokemonsCtrl", function($scope, pokemonsService){
    
    $scope.pokemon = {};

    var carregarPokemons = function () {
        $scope.pokemons = pokemonsService.getPokemons("pikachu").then(function(response){
            return $scope.pokemon = response.data;
        });
    };

    $scope.buscarPokemon = function (nome) {
        //console.log("ola");
        $scope.pokemons = pokemonsService.getPokemons(nome).then(function(response){
            return $scope.pokemon = response.data;
        });
    };

    //carregarPokemons();
});