import { gql } from "@apollo/client";

export const fetchAllPokemon = gql`
  query fetchAllPokemon {
    pokemon: pokemon_v2_pokemon_aggregate(where: { id: { _lte: 10000 } }) {
      nodes {
        id
        pokemon_species_id
        name
        is_default
        sprites: pokemon_v2_pokemonsprites {
          sprites
        }
        forms: pokemon_v2_pokemonforms {
          names: pokemon_v2_pokemonformnames(
            where: { language_id: { _eq: 9 } }
          ) {
            name
          }
        }
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
          }
        }
      }
    }
  }
`;

export const fetchPokemon = gql`
  query fetchPokemon($id: Int!) {
    pokemon: pokemon_v2_pokemon_by_pk(id: $id) {
      id
      pokemon_species_id
      name
      is_default
      sprites: pokemon_v2_pokemonsprites {
        sprites
      }
      forms: pokemon_v2_pokemonforms {
        names: pokemon_v2_pokemonformnames(where: { language_id: { _eq: 9 } }) {
          name
        }
      }
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
        }
      }
    }
  }
`;
