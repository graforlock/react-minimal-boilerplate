var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var styles = {
  height: '200px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
};

var containerStyles = {
  display: 'inline-block',
    width: '30%'
};

var ContentItem = React.createClass({
  getImage: function(pokemonData) {
    var styleObject = styles;
    styleObject.backgroundImage = 'url(' + pokemonData.imgSrc + ')';
    return styleObject;
  },
  render: function() {
    return(
        <Link to={"/pokemon/" + this.props.id} >
          <article style={containerStyles}>
            <div style={this.getImage(this.props.data)}></div>
            <div>{this.props.data.label}</div>
          </article>
        </Link>
    );
  }
});


module.exports = ContentItem;
