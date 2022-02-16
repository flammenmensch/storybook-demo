import { Pokemon } from '../../domain';
import React from 'react';

interface Props {
  pokemon: Pokemon;
}

const PokemonCard = (props: Props) => (
  <div className="card shadow-lg">
    <img
      className="card-img-top"
      src={props.pokemon.sprites.other['official-artwork'].front_default}
      alt={props.pokemon.name}
    />
    <div className="card-body">
      <h2 className="card-title text-capitalize">
        {props.pokemon.name} <small>#{props.pokemon.id}</small>
      </h2>
      <ul className="list-inline">
        {props.pokemon.types.map((type) => (
          <li className="list-inline-item" key={type.slot}>
            <a
              href={`/?search=${type.type.name}`}
              className="btn btn-sm btn-outline-secondary"
            >
              {type.type.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default PokemonCard;
