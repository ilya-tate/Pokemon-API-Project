import React from 'react';
import { useFetch } from './util/useFetch';
import { useAppContext } from './util/context';
import './Pages/index';
import './Components/index';

const App = () => {
  const { query, pokemon }  = useAppContext;

  return (
    <div className="App">
      <div className="pokemon-list">
        { pokemon
          .filter(pokemon => pokemon.name.includes(query.toLowerCase()))
          .map(pokemon => { return (
            <div className="pokemon">
              { pokemon.name.split('-').map(section => `${section[0].toUpperCase()}${section.slice(1)}`).join(' ')}
            </div>
          ) })
        }
      </div>
    </div>
  );
}

export default App;
