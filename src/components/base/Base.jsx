var React = require('react');
var SearchContainer = require('../searchbar/SearchContainer.jsx');


var Base = React.createClass({
  render: function() {

    return(
      <section>
        <SearchContainer />
        {this.props.children}
      </section>
    );
  }
});


module.exports = Base;
