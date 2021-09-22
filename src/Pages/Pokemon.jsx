import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../util/useFetch';

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, pokemon } = useFetch(`pokemon/${id}`);

  console.log(pokemon);

  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="pokemon">
      <h1>{ pokemon.name }</h1>
    </section>
  );
};

export default SingleMovie;
