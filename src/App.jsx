import React from 'react';
import { Switch, Route } from 'react-router';
import { Error, Home, Pokemon } from './Pages/index';

const App = () => {
  return (
    <div className="App">

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/pokemon/:id">
          <Pokemon />
        </Route>

        <Route path="*">
          <Error />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
