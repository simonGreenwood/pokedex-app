import PokemonCard from "@/components/PokemonCard";
import PokemonGrid from "@/components/PokemonGrid";
import { getClient } from "@/lib/client";
import { fetchAllPokemon } from "@/queries";
import { PokemonInList } from "@/types";
export default async function Home() {
  const { data } = await getClient().query({ query: fetchAllPokemon });
  return (
    <main>
      <div>
        <PokemonGrid data={data} />
        {/*data?.pokemon.nodes.map((pokemon: PokemonInList) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))*/}
      </div>
    </main>
  );
}
