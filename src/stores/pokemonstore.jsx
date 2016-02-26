var Reflux = require('reflux');
var PokemonActions = require('../actions/pokemonaction.jsx');

var HTTP = require('../services/httpservice');

var IngredientsStore = Reflux.createStore({
  listenables: [PokemonActions],
  getIngredients: function() {
    HTTP.get('/pokemons')
    .then(function(json) {
        this.pokemons = json;
        this.fireUpdate();
    }.bind(this));
  },
  fireUpdate: function() {
    // Sends to the component -> this.pokemons is the updated data
    // It would be refresh() in non bound way.
    this.trigger('change', this.pokemons);
  }
});

module.exports = IngredientsStore;
