import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import loadable from '@loadable/component';
const Context = loadable(() => import('@context/index'), { fallback: <h1>loading</h1> });

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/context">
            <Context></Context>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
