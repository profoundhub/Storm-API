import ReactStormpath, { Router, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, HomeRoute, Route, browserHistory, useRouterHistory  } from 'react-router';
import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';
import createHashHistory from 'history/lib/createHashHistory';

const history = createBrowserHistory();

ReactStormpath.init({
  // See the API docs for available configuration options.
});

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <HomeRoute path='/' component={MasterPage}>
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
      <Route path='/register' component={RegistrationPage} />
        <AuthenticatedRoute>
          <HomeRoute path='/profile' component={ProfilePage}></HomeRoute>
        </AuthenticatedRoute>
    </HomeRoute>
  </Router>,
  document.getElementById('app-container')
);
