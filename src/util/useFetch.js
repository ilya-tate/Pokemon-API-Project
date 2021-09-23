import { useState, useEffect } from 'react';
import { pokemonListData } from './consts';

const API_ENDPOINT = 'https://pokeapi.co/api/v2/';

export const useFetch = query => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState(pokemonListData)

  const fetchPokemon = async url => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data || []);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPokemon(`${API_ENDPOINT}${query.toLowerCase()}`);
  }, [query]);
  
  return { loading, pokemon, pokemonData }
}
