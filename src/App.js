import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Example from './components/Example';
function App() {
  <Fragment>
    <Switch>
    <Route path="/" component={Example} exact />
    </Switch>
  </Fragment>
}

export default App;
