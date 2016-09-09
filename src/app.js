import ReactStormpath, { Router, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

ReactStormpath.init();
ReactDOM.render(
  <Router history={createHashHistory({ queryKey: false })}>

    <Route path='/' component={MasterPage}>      
      <IndexRoute component={IndexPage} />
      <LoginRoute path='/login' component={LoginPage} />
    </Route>

  </Router>,
  document.getElementById('app-container')
);
