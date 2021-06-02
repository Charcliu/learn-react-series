import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Alert, Button } from '@tencent/tsign-component-library';
import '@tencent/tsign-component-library/dist/index.css';

import loadable from '@loadable/component';
const Context = loadable(() => import('@context/index'), { fallback: <h1>loading</h1> });
const ErrorBoundary = loadable(() => import('@errorboundary/index'), { fallback: <h1>loading</h1> });
const RefsForWard = loadable(() => import('@/refs/index'), { fallback: <h1>loading</h1> });
const Fragments = loadable(() => import('@/fragments/index'), { fallback: <h1>loading</h1> });
const Hoc = loadable(() => import('@/hoc/index'), { fallback: <h1>loading</h1> });
const Jsx = loadable(() => import('@/jsx/index'), { fallback: <h1>loading</h1> });
const Performance = loadable(() => import('@/performance/index'), { fallback: <h1>loading</h1> });

function App() {
  return (
    <Router>
      <Alert alertType="warn" closeable>
        123
      </Alert>
      <Button btnType="primary">122</Button>
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
          <li>
            <Link to="/jsx">jsx</Link>
          </li>
          <li>
            <Link to="/performance">performance</Link>
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
          <Route path="/jsx">
            <Jsx></Jsx>
          </Route>
          <Route path="/performance">
            <Performance></Performance>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
