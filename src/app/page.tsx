import PokemonCard from "@/components/PokemonCard";
import { getClient } from "@/lib/client";
import { fetchAllPokemon } from "@/queries";
import { PokemonInList } from "@/types";
export default async function Home() {
  const { data } = await getClient().query({ query: fetchAllPokemon });
  return (
    <main>
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 p-5">
        {data?.pokemon.nodes.map((pokemon: PokemonInList) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </main>
  );
}
