import { gql } from "@apollo/client";

export const fetchAllPokemon = gql`
  query fetchAllPokemon {
    pokemon: pokemon_v2_pokemon_aggregate ($where: { id: { _lte: 5 } }}){
      nodes {
        id
        pokemon_species_id
        name
        is_default
        sprites: pokemon_v2_pokemonsprites {
          sprites
        }
        species: pokemon_v2_pokemonspecy {
          name
        }
        forms: pokemon_v2_pokemonforms {
          names: pokemon_v2_pokemonformnames(
            where: { language_id: { _eq: 9 } }
          ) {
            name
          }
        }
      }
    }
  }
`;
