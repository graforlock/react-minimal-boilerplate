import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
//--> Routes imported go here -->

//--> End of routes. -->
const createStoreWithMiddleware = applyMiddleware()(createStore);

const Routes = (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>

    </Router>
  </Provider>
);

export default Routes;
