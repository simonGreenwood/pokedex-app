import { fetchPokemon } from "@/queries";
import { useRouter } from "next/navigation";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { getClient } from "@/lib/client";
import Gradient from "@/components/CardImageGradient";
import Image from "next/image";
export default async function PokemonPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log(slug);
  const { data } = await getClient().query({
    query: fetchPokemon,
    variables: { id: slug },
  });
  const pokemon = data.pokemon;
  console.log(pokemon.species.species[0].flavortext[0].flavor_text);
  console.log(pokemon.sprites[0].sprites.front_default);
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <Image
        src={pokemon.sprites[0].sprites.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <h1>{pokemon.species.species[0].flavortext[0].flavor_text}</h1>
    </div>
  );
}
