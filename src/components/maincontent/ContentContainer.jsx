var React = require('react');
var Reflux = require('reflux');

var PokemonActions = require('../../actions/pokemonaction.jsx');
var PokemonStore = require('../../stores/pokemonstore.jsx');

var ContentItem = require('./ContentItem.jsx');

var PokemonDummyData = [
  {
    id: 1,
    imgSrc: 'http://www.studentsoftheworld.info/sites/games/img/14042_pokemon04_01.jpg',
    label: "Pokemon One"
  },
  {
    id: 2,
    imgSrc: 'https://s-media-cache-ak0.pinimg.com/236x/6f/6c/0e/6f6c0edee3c24e5dfcadf6dabbe4f5ea.jpg',
    label: "Pokemon Two"
  },
  {
    id: 3,
    imgSrc: 'http://www.picgifs.com/clip-art/cartoons/pokemon/clip-art-pokemon-150436.jpg',
    label: "Pokemon Three"
  }
];

var ContentContainer = React.createClass({
  mixins: [Reflux.listenTo(PokemonStore, 'onLoad')],
  getInitialState: function() {
    return {"pokemons": PokemonDummyData};
  },
  onLoad: function(event, pokemons) {
    this.setState({"pokemons" : pokemons});
  },
  componentWillMount: function() {
    PokemonActions.getPokemons();
  },
  render: function() {
    var pokemonItems = this.state.pokemons.map(function(pokemon,index) {
      return <ContentItem key={index} id={pokemon.id} data={pokemon} />;
    });
    return(<section>
              {pokemonItems}
           </section>
         );
  }
});

module.exports = ContentContainer;
