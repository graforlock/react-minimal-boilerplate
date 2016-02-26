var React = require('react');

var SearchAdvancedItem = require('./SearchAdvancedItem.jsx');
var SearchBarItem = require('./SearchBarItem.jsx');


var SearchContainer = React.createClass({
  // using the same action as ContentContainer but with filters
  render: function() {
    return(
      <nav>
        <SearchBarItem />
        <SearchAdvancedItem />
      </nav>
    );
  }
});


module.exports = SearchContainer;
