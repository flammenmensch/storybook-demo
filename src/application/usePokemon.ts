import { useQuery } from 'react-query';
import { pokemonService } from '../services/pokemonService';

export const usePokemon = (nameOrId: string) => {
  return useQuery(['pokemon', nameOrId], () =>
    pokemonService.getPokemon(nameOrId),
  );
};
