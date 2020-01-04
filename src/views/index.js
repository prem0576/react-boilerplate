import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ROUTES from '../routes';
import ErrorBoundary from './shared/errorBoundary';
import Header from './shared/header';
import '../assets/styles/main.scss';

class View extends React.Component {
  renderRoutes = () => {
    return ROUTES.map((route, i) => (
      <Route
        exact={route.exact}
        key={i}
        path={route.path}
        component={route.component}
      />
    ));
  };

  render = () => {
    return (
      <Router basename={'/'}>
        <ErrorBoundary>
          <div className="root">
            <div className="header">
              <Header />
              {/* {isLoading && <Loader />}
               */}
            </div>
            <div className="body">
              <Switch>{this.renderRoutes()}</Switch>
            </div>
          </div>
        </ErrorBoundary>
      </Router>
    );
  };
}

export default View;
