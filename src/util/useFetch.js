import { useState, useEffect } from 'react';

const API_ENDPOINT = 'https://pokeapi.co/api/v2/';

export const useFetch = query => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async url => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data.results || []);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPokemon(`${API_ENDPOINT}${query.toLowerCase()}`);
  }, []);
  
  return { loading, error, pokemon, setPokemon }
}
