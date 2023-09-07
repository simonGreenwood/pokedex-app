import { fetchPokemon } from "@/queries";
import { useRouter } from "next/navigation";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { getClient } from "@/lib/client";
import Gradient from "@/components/CardImageGradient";
import Image from "next/image";
import PokemonImage from "@/components/PokemonImage";
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
  return (
    <div>
      <h1>{data.pokemon.name}</h1>
      <h1>{data.pokemon.text.text.flavor_text}</h1>
    </div>
  );
}
