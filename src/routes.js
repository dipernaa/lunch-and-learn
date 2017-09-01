import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import AppContainer from './layout/AppContainer';
import PokedexContainer from './pokedex/PokedexContainer';

export const routeNames = {
  pokedex: 'pokedex'
};

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to={routeNames.pokedex}/>
      <Route path={routeNames.pokedex} component={PokedexContainer} title="Pokemon"/>
    </Route>
  </Router>
);

export default routes;
