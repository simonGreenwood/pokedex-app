import { fetchPokemon } from "@/queries";
import { useRouter } from "next/navigation";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { getClient } from "@/lib/client";
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
  return (
    <div>
      <h1>{data.pokemon.name}</h1>
    </div>
  );
}
