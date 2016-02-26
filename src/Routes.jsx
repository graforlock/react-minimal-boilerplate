var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var CreateHistory = require('history/lib/createhashHistory');
//--> Routes imported -->

var History = new CreateHistory({
  queryKey: false
});

var Routes = (
  <Router history={History}>

  </Router>
);

module.exports = Routes;
