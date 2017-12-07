angular.module('pokemons').factory('pokemonsService', function($http){

	var _getPokemons = function(){
		return $http.get("http://pokeapi.salestock.net/api/v2/");
	}

	return {
		getPokemons = _getPokemons
	};
});