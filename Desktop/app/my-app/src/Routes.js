import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import history from './history';
import { Page404, Profile, Background, Home, Article } from 'components';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route  path={'/home'} component={Home} />
      <Route  path={'/profile'} component={Profile} /> 
      <Route  path={'/login'} component={Background} /> 
      <Route  path={'/registration'} component={Background} /> 
      <Route exact path={'/article/:id'} component={Article} /> 
      <Route component={Page404} /> 
    </Switch>
  </Router>

) 

export default Routes;