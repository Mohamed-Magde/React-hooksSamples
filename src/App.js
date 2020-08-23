import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Example from './components/Example';
import ExampleUseEffect from './components/ExampleUseEffect';
function App() {
  <Fragment>
    <Switch>
    <Route path="/" component={Example} exact />
    <Route path="/useEffect" component={ExampleUseEffect} exact />
    </Switch>
  </Fragment>
}

export default App;
