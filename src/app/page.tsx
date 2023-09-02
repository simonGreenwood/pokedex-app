import { getClient } from "@/lib/client";
import { fetchAllPokemon } from "@/queries";
import { PokemonInList } from "@/types";
import Image from "next/image";
export default async function Home() {
  const { data } = await getClient().query({ query: fetchAllPokemon });
  console.log(data);
  console.log(data.pokemon.nodes[0].sprites[0].sprites);

  return (
    <main>
      {data?.pokemon.nodes.map((pokemon: PokemonInList) => {
        return (
          <div key={pokemon.id}>
            <p>
              {`lol ${console.log(data.pokemon.nodes[0].sprites[0].sprites)}`}
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master${JSON.parse(
                  pokemon.sprites[0].sprites
                ).icons.front_default.slice(6)}`}
                alt={pokemon.species.name}
                width={100}
                height={100}
              />

              {pokemon.species.name.charAt(0).toUpperCase() +
                pokemon.species.name.slice(1)}
              {pokemon.forms[0].names[0] &&
                ` (${pokemon.forms[0].names[0].name})`}
            </p>
            <p>{pokemon.id}</p>
          </div>
        );
      })}
    </main>
  );
}
