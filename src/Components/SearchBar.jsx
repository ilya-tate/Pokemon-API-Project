import React from 'react';
import { useAppContext } from "../util/context";
import { PokemonList } from './index';

const SearchBar = () => {
  const { query, setQuery, pokemonData, setLoading, setPokemonName } = useAppContext();

  return (
    <div className="SearchBar">

      <form onSubmit={ e => e.preventDefault() }>
        <input
          type="text"
          className="form-input"
          placeholder="Search Pokemon"
          value={ query }
          onChange={ e => {
            setQuery(e.target.value);
          } }
        />

        <PokemonList />

      </form>

    </div>
  );
}

export default SearchBar;
