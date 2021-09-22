import React from 'react';
import { Switch, Route } from 'react-router';
import { useFetch } from './util/useFetch';
import { useAppContext } from './util/context';
import { pages } from './util/constants';
import { Error, Home, pokemon, /* pokemonList */ } from './Pages/index';
import { Loading, SearchBar } from './Components/index';

const App = () => {
  // const { query, pokemon, pokemonList }  = useAppContext();
  // console.log(pokemon, pokemonList);
  // const pokemonL = (
    // pokemonList
      // .filter(pokemon => pokemon.name.includes(query.toLowerCase()))
      // .map(pokemon => { return (
        // <div className="pokemon">
          // { pokemon.name.split('-').map(section => `${section[0].toUpperCase()}${section.slice(1)}`).join(' ') }
        // </div>
      // ) })
  // );

  return (
    <div className="App">

      <Loading />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <Error />
        </Route>

        { pages
            .filter(page => page.name !== ('home' || 'error'))
            .map(page => {
              const { url, component } = page;
              return <Route path={ url }>{ component }</Route>;
            })
        }

      </Switch>

    </div>
  );
}

export default App;
