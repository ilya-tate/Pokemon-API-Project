import React from 'react';
import { Switch, Route } from 'react-router';
import { useFetch } from './util/useFetch';
import { useAppContext } from './util/context';
import { Pages } from './Pages/index';
import { Components } from './Components/index';

const App = () => {
  const { query, pokemon }  = useAppContext();
  const pokemonList = (
    pokemon
      .filter(pokemon => pokemon.name.includes(query.toLowerCase()))
      .map(pokemon => { return (
        <div className="pokemon">
          { pokemon.name.split('-').map(section => `${section[0].toUpperCase()}${section.slice(1)}`).join(' ') }
        </div>
      ) })
  );

  return (
    <div className="App">

      <Switch>

        <Route exact path="/">
          <Pages.Home />
        </Route>

        <Route path="/pokemon/:pokemon">
          <Pages.Pokemon />
        </Route>

        <Route>
          <Pages.Error path="*" />
        </Route>

      </Switch>

      { pokemonList }

    </div>
  );
}

export default App;
