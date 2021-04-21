import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import loadable from '@loadable/component';
const Context = loadable(() => import('@context/index'), { fallback: <h1>loading</h1> });
const ErrorBoundary = loadable(() => import('@errorboundary/index'), { fallback: <h1>loading</h1> });

import Test from '@/test/index';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/context">context</Link>
          </li>
          <li>
            <Link to="/errorBoundary">errorBoundary</Link>
          </li>
        </ul>
        <Test></Test>
        <Switch>
          <Route path="/context">
            <Context></Context>
          </Route>
          <Route path="/errorBoundary">
            <ErrorBoundary></ErrorBoundary>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
