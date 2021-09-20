import React from 'react';
import { useAppContext } from '../util/context';

const Home = () => {
  const { query, setQuery, loading, error, pokemon, setPokemon } = useAppContext;

  return (
    <div className="Home">
      <form onSubmit={ e => e.preventDefault() } className="search-form">
        <input
          type="text"
          className="form-input"
          value={ query }
          onChange={ e => setQuery(e.target.value) }
        />
        { error.show && <div className="error">{ error.msg }</div> }
      </form>
    </div>
  );
}

export default Home
