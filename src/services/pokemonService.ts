import { PokemonService } from '../application/ports';
import { Pokemon } from '../domain';

export const pokemonService: PokemonService = {
  async getPokemon(idOrName) {
    const rawResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${idOrName.toLowerCase()}`,
    );

    if (rawResponse.status !== 200) {
      throw new Error('Pokemon not found');
    }

    const jsonResponse = await rawResponse.json();

    return jsonResponse as Pokemon;
  },
};
