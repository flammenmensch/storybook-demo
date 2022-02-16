import { Pokemon } from '../domain';

export interface PokemonService {
  getPokemon: (nameOrId: string) => Promise<Pokemon>;
}
