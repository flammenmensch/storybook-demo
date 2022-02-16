interface Entity {
  name: string;
  url: string;
}

export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: Entity;
}

export interface GameIndex {
  game_index: number;
  version: Entity;
}

export interface Item {
  item: Entity;
  version_details: {
    rarity: number;
    version: Entity;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Entity;
}

export interface Type {
  slot: number;
  type: Entity;
}

export type Form = Entity;

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: GameIndex[];
  held_items: Item[];
  species: Entity;
  sprites: Record<string, any>;
  stats: Stat[];
  types: Type[];
}
