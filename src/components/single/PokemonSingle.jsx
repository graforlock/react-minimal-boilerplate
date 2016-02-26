var React = require('react');


var PokemonSingle = React.createClass({
  componentWillMount: function() {
    // Look for the POKEMON data
  },
  render: function() {
    return(
      <article>{this.props.params.id}</article>
    );
  }
});

module.exports = PokemonSingle;
