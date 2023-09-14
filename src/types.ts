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
  species: {
    is_legendary: boolean;
    is_mythical: boolean;
    speciesnames: {
      name: string;
      genus: string;
    }[];
  };
};

export type Pokemon = {
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
  text: {
    text: {
      flavor_text: string;
    }[];
  }[];
  species: {
    is_legendary: boolean;
    is_mythical: boolean;
    species: {
      flavor_text: {
        flavor_text: string;
      }[];
    };
    speciesnames: {
      name: string;

      genus: string;
    }[];
  };
  weight: number;
  height: number;
};

export type PokemonInListQuery = {
  pokemon: {
    nodes: PokemonInList[];
  };
};

export type PokemonQuery = {
  pokemon: Pokemon;
};
