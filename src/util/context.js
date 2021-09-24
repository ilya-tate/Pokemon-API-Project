import React, { useState, useContext } from 'react';
import { useFetch } from './useFetch';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const { loading, setLoading, pokemon, setPokemon, pokemonData, error } = useFetch(`pokemon/${pokemonName}`);

  return (
    <AppContext.Provider value={ { loading, setLoading, query, setQuery, pokemon, setPokemon, pokemonName, setPokemonName, pokemonData, error } }>
      { children }
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}
