import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../util/context';
import { useFetch } from '../util/useFetch';

const Pokemon = () => {
  const { id } = useParams();
  const { loading, setLoading } = useAppContext();
  const { pokemon } = useFetch(`pokemon/${id}`);

  if (loading) {
  console.log(pokemon);
    return (
      <div className="loading" />
    );
  } else {
  const {
    abilities,
    base_experience: baseExperience,
    game_indices: games,
    height,
    moves,
    name,
    sprites,
    stats,
    types,
    weight
  } = pokemon;
  console.log(pokemon.game_indices[0]);

  const getOriginalGen = () => {

  }

  return (
    <div className="Pokemon">

      <div className="pokemon-wrapper">

        <ul className="info">
          <li className="name">
            <h1>{ name }</h1>
          </li>
          <li className="size">
            <p>{ weight / 10 } kg</p>
            <p>{ height * 10 } cm</p>
          </li>
          {/* <li className="types">
            { types.map(type => {
              return (
                <p>{ type.type.name }</p>
              );
            }) }
          </li> */}
        </ul>

      </div>

    </div>
  );
}

  }


export default Pokemon;
