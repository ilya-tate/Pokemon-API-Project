import React from 'react';
import { Switch, Route } from 'react-router';
import { useFetch } from './util/useFetch';
import { useAppContext } from './util/context';
import { pages } from './util/consts';
import { Error, Home, Pokemon } from './Pages/index';

const App = () => {
  const {
    pokemonData
  } = useAppContext();

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
