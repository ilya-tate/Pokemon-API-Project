import React from 'react';
import { Link } from "react-router-dom";
import { useAppContext } from '../util/context';

const PokemonList = () => {
  const { query, setQuery, pokemonData, setLoading, setPokemonName } = useAppContext();

  return (
    <div className="PokemonList">

      { pokemonData
        .filter(pokemon => pokemon.name.includes(query.toLowerCase()))
        .map(pokemon => {
        return (
          <Link to={`/pokemon/${pokemon.name}`} onClick={() => {
            setPokemonName(pokemon.name)
            setLoading(true)}}
          >
            <p className="pokemon">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          </Link>
        );
      }) }

    </div>
  );
}

export default PokemonList;
