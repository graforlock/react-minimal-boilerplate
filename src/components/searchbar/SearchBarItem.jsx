var React = require('react');


var SearchBarItem = React.createClass({
  render: function() {
    return(
      <section>
        <label htmlFor="main-search"><img src={this.props.imgUrl} /></label>
        <input placeholder="Type here..." name="main-search" id="main-search" />
      </section>
    );
  }
});


module.exports = SearchBarItem;
