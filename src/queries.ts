import { gql } from "@apollo/client";

export const FETCH_ALL_POKEMON = gql`
  query FetchAllPokemon {
    gen3_species: pokemon_v2_pokemonspecies(
      where: { pokemon_v2_generation: { name: { _eq: "generation-iii" } } }
      order_by: { id: asc }
    ) {
      name
      id
    }
  }
`;
