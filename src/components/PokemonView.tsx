import { Pokemon } from "../types";
import { fetchPokemon } from "@/queries";
export const dynamic = "force-dynamic";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
type Props = {
  pokemonId: number;
  setCurrentPokemon: (pokemon: Pokemon | null) => void;
};
export default function PokemonView(props: Props) {
  const { data } = useSuspenseQuery(fetchPokemon, {
    variables: { id: props.pokemonId },
  });
  console.log(data);
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-950 bg-opacity-50 flex justify-center items-center z-10">
      <h1>PokemonView</h1>
      <button onClick={() => props.setCurrentPokemon(null)}>Close</button>
      <div>{data.pokemon.id}</div>
    </div>
  );
}
