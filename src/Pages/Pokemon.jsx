import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../util/context';
import { useFetch } from '../util/useFetch';

const Pokemon = () => {
  const { id } = useParams();
  const { pokemon } = useFetch(`pokemon/${id}`);

  console.log(pokemon.types);

  return (
    <div className="Pokemon">

      <ul className="info">
        <li>
          <h1>{ pokemon.name }</h1>
        </li>
        <li>
          <p>{ pokemon.weight / 10 } kg { pokemon.height * 10 } cm</p>
        </li>
        <li>
          <p>
          </p>
        </li>
      </ul>

    </div>
  );
};

export default Pokemon;
