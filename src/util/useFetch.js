import { useState, useEffect } from 'react';
import { pokemonData } from './constants';

const API_ENDPOINT = 'https://pokeapi.co/api/v2/';

export const useFetch = query => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonList, setPokemonList] = useState(pokemonData)

  const fetchPokemon = async url => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data || []);
      // setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPokemon(`${API_ENDPOINT}${query.toLowerCase()}`);
  }, []);
  
  return { loading, pokemon, pokemonList }
}
