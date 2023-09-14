import { TypedDocumentNode, gql } from "@apollo/client";
import { PokemonInListQuery, PokemonQuery } from "./types";

export const fetchAllPokemon: TypedDocumentNode<PokemonInListQuery> = gql`
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
        species: pokemon_v2_pokemonspecy {
          is_legendary
          is_mythical
          speciesnames: pokemon_v2_pokemonspeciesnames(
            where: { language_id: { _eq: 9 } }
          ) {
            name
            genus
          }
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

export const fetchPokemon: TypedDocumentNode<PokemonQuery> = gql`
  query fetchPokemon($id: Int!) {
    pokemon: pokemon_v2_pokemon_by_pk(id: $id) {
      id
      pokemon_species_id
      name
      is_default
      weight
      height
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
      species: pokemon_v2_pokemonspecy {
        is_legendary
        is_mythical
        species: pokemon_v2_pokemonspecies {
          flavortext: pokemon_v2_pokemonspeciesflavortexts(
            where: { language_id: { _eq: 9 } }
          ) {
            flavor_text
          }
          speciesnames: pokemon_v2_pokemonspeciesnames {
            name
            genus
            language_id
          }
        }
        evolutions: pokemon_v2_pokemonevolutions {
          trigger: pokemon_v2_evolutiontrigger {
            triggernames: pokemon_v2_evolutiontriggernames(
              where: { language_id: { _eq: 9 } }
            ) {
              name
            }
          }
        }
      }
    }
  }
`;
