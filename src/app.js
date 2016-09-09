import ReactStormpath, { Router, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

ReactDOM.render(
  <Router history={createHashHistory({ queryKey: false })}>
  </Router>,
  document.getElementById('app-container')
);
