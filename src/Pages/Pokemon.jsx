import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../util/context';
import { useFetch } from '../util/useFetch';
import { SearchBar } from '../Components';

const Pokemon = () => {
  const { id } = useParams();
  const { loading } = useAppContext();
  const { pokemon } = useFetch(`pokemon/${id}`);

  if (loading) {
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

    console.log(pokemon);

    const getOriginalGen = () => {
      const gameList = games?.map(game => {
        return game
      });

      return gameList.entries();
    }
    console.log(getOriginalGen())

    return (
      <div className="Pokemon">


        <div className="pokemon-wrapper">

          <a href="/">Go Back</a>

          <ul className="info">
            <li className="name">
              <h1>{ name }</h1>
            </li>
            <li className="sprite">
              <img src={ sprites.front_default } alt={ name } />
            </li>
            <li className="attr">
              <h4>Weight:</h4>
              <p>{ weight / 10 } kg</p>
            </li>
            <li className="attr">
              <h4>Height:</h4>
              <p>{ height * 10 } cm</p>
            </li>
            <li className="attr">
              <h4>Types:</h4>
              { types?.map(type => {
                return (
                  <p>{ type.type.name }</p>
                );
              }) }
            </li>
            <li className="attr">
              <h4>Stats:</h4>
              { stats?.map(stat => {
                return (
                  <p>{ stat.stat.name }: { stat.base_stat }</p>
                );
              }) }
            </li>
            <li className="attr">
              <h4>Base Experience:</h4>
              <p>{ baseExperience }</p>
            </li>
            <li className="attr">
              <h4>Abilities:</h4>
              { abilities?.map(ability => {
                return (
                  <p>{ ability.ability.name } { ability.is_hidden ? '(hidden)' : null}</p>
                );
              }) }
            </li>
            <li className="attr">
              <h4>Moves:</h4>
              { moves?.map(move => {
                return (
                  <p>{ move.move.name }</p>
                );
              }) }
            </li>
          </ul>

        </div>

      </div>
    );
  }
}


export default Pokemon;
