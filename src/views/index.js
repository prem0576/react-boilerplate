import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ROUTES from '../routes';
import { AuthProvider } from '../context/providers/authProvider';
import ErrorBoundary from './shared/errorBoundary';
import Header from './shared/header';
import '../assets/styles/main.scss';

const View = () => {
  const renderRoutes = () => {
    return ROUTES.map((route, i) => (
      <Route
        exact={route.exact}
        key={i}
        path={route.path}
        component={route.component}
      />
    ));
  };
  return (
    <Router basename={'/'}>
      <ErrorBoundary>
        <AuthProvider>
          <div className="root">
            <div className="header">
              <Header />
              {/* {isLoading && <Loader />}
               */}
            </div>
            <div className="body">
              <Switch>{renderRoutes()}</Switch>
            </div>
          </div>
        </AuthProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default View;
