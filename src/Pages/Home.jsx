import React from 'react';
import { PokemonList, SearchBar } from '../Components/index';

const Home = () => {

  return (
    <div className="Home">

      <SearchBar />

      <PokemonList />

    </div>
  );
}

export default Home;
