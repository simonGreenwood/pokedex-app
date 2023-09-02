import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
export const query = gql`
  query FetchAllPokemon {
    gen3_species: pokemon_v2_pokemonspecies(where: {}, order_by: { id: asc }) {
      name
      id
    }
    generations: pokemon_v2_generation {
      name
      pokemon_species: pokemon_v2_pokemonspecies_aggregate {
        aggregate {
          count
        }
      }
      pokemon_v2_region {
        id
        name
      }
    }
  }
`;

export default async function Home() {
  const { data } = await getClient().query({ query });
  console.log(data);
  return (
    <main>
      {data.gen3_species.map((p) => (
        <div key="p.id">
          <h1>{p.name}</h1>
          <p>{p.id}</p>
        </div>
      ))}
      {data.generations.map((g) => (
        <div key={g.name}>
          <h1>{g.name}</h1>
          <p>{g.pokemon_species.aggregate.count}</p>
          <p>
            {g.pokemon_v2_region.name}
            {g.pokemon_v2_region.id}
          </p>
        </div>
      ))}
    </main>
  );
}
