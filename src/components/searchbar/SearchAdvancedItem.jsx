var React = require('react');


var SearchAdvancedItem = React.createClass({
  render: function() {
    return(
      <section>
        <label htmlFor="search" ><img src={this.props.imgUrl} /></label>
        <input placeholder="Type here..." name="search" id="search" />
      </section>
    );
  }
});


module.exports = SearchAdvancedItem;
