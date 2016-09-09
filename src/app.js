import ReactStormpath, { Router, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, HomeRoute, Route, browserHistory } from 'react-router';
import { MasterPage, IndexPage, LoginPage, useRouterHistory, RegistrationPage, ProfilePage } from './pages';
import createHashHistory from 'history/lib/createHashHistory';


const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactStormpath.init({
  // See the API docs for available configuration options.
});

ReactDOM.render(
  <div>
    <Router history={appHistory}>
      <HomeRoute path='/' component={MasterPage}>
        <IndexRoute component={IndexPage} />
        <LoginRoute path='/login' component={LoginPage} />
        <Route path='/register' component={RegistrationPage} />
          <AuthenticatedRoute>
            <HomeRoute path='/profile' component={ProfilePage}></HomeRoute>
          </AuthenticatedRoute>
      </HomeRoute>
    </Router>
  </div>,
  document.getElementById('app-container')
);
