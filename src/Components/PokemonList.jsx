import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../util/context';

const PokemonList = () => {
  const { 
    pokemonData,
    setPokemonName
   } = useAppContext();

  return (
    <div className="PokemonList">

      { pokemonData.map(pokemon => {
        return (
          <Link to={ `/pokemon/${pokemon.name}` }>
            <p className="pokemon" onClick={ () => setPokemonName(pokemon.name) }>{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }</p>
          </Link>
        );
      }) }
  
    </div>
  );
}

export default PokemonList;
