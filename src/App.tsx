import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '@tencent/tsign-component-library/dist/tsign-component.min.css';
import loadable from '@loadable/component';
import { Alert } from '@tencent/tsign-component-library';
import { convertErrorCode } from '@tencent/tsign-tool';

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
      <div className="App">
        {JSON.stringify(
          convertErrorCode([
            {
              ActionName: 'test',
              ErrorCodes: [
                {
                  ErrorCode: 'code01',
                  ErrorMessage: 'saber',
                },
                {
                  ErrorCode: 'code01000000000000000',
                  ErrorMessage: 'saber',
                },
                {
                  ErrorCode: 'code02',
                  ErrorMessage: 'demo',
                },
              ],
            },
          ]),
        )}
        <Alert>{`今天是${new Date().toLocaleString()}`}</Alert>
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
