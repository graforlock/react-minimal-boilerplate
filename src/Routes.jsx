var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;


var Base = require('./components/base/Base.jsx');
var ContentContainer = require('./components/maincontent/ContentContainer.jsx');
var PokemonSingle = require('./components/single/PokemonSingle.jsx');

var CreateHistory = require('history/lib/createhashHistory');
//--> Routes imported -->

var History = new CreateHistory({
  queryKey: false
});

var Routes = (
  <Router history={History}>
    <Route  path="/" component={Base}>
      <IndexRoute  component={ContentContainer} />
      <Route path="pokemon/:id" component={PokemonSingle} />
    </Route>
  </Router>
);

module.exports = Routes;
