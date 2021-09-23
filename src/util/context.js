import React, { useState, useContext } from 'react';
import { useFetch } from './useFetch';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const {  error, loading, pokemon, setPokemon, pokemonData} = useFetch(`pokemon/${pokemonName}`);

  return (
  <AppContext.Provider value={ { query, setQuery, pokemon, setPokemon, pokemonName, setPokemonName, pokemonData, loading, error } }>
    { children }
  </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
}
