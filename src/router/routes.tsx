import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from '../pages/login';
import PublicRoute from './public';

const Routes: React.FC = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/login">
          <Login />
        </PublicRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
