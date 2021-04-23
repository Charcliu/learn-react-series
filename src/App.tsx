import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import loadable from '@loadable/component';
const Context = loadable(() => import('@context/index'), { fallback: <h1>loading</h1> });
const ErrorBoundary = loadable(() => import('@errorboundary/index'), { fallback: <h1>loading</h1> });
const RefsForWard = loadable(() => import('@/refs/index'), { fallback: <h1>loading</h1> });
const Fragments = loadable(() => import('@/fragments/index'), { fallback: <h1>loading</h1> });
const Hoc = loadable(() => import('@/hoc/index'), { fallback: <h1>loading</h1> });

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
          <li>
            <Link to="/refsForward">refsForward</Link>
          </li>
          <li>
            <Link to="/fragments">fragments</Link>
          </li>
          <li>
            <Link to="/hoc">hoc</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/context">
            <Context></Context>
          </Route>
          <Route path="/errorBoundary">
            <ErrorBoundary></ErrorBoundary>
          </Route>
          <Route path="/refsForward">
            <RefsForWard></RefsForWard>
          </Route>
          <Route path="/fragments">
            <Fragments></Fragments>
          </Route>
          <Route path="/hoc">
            <Hoc></Hoc>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
