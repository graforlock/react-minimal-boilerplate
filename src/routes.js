import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router';
import CreateHistory from 'history/lib/createhashHistory';

//--> Routes imported go here -->

//--> End of routes. -->

const History = new CreateHistory({
  queryKey: false
});

const Routes = (
  <Router history={History}>

  </Router>
);

export default Routes;
