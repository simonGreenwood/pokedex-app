export type PokemonInList = {
  id: number;
  pokemon_species_id: number;
  name: string;
  is_default: boolean;
  sprites: {
    sprites: string;
  }[];
  forms: {
    names: {
      name: string;
    }[];
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
};
