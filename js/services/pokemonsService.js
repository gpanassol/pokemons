angular.module('pokemons').factory('pokemonsService', function($http){

	var _getPokemons = function(nomePokemon){
		return $http.get("http://pokeapi.salestock.net/api/v2/pokemon/"+nomePokemon);
	};

	return {
		getPokemons: _getPokemons
	};
});