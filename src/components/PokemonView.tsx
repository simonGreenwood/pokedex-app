import { Pokemon, PokemonInList } from "../types";
import { fetchPokemon } from "@/queries";
export const dynamic = "force-dynamic";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Dispatch } from "react";
import { addZeros } from "@/utils/utils";
import TypeBadge from "./TypeBadge";
import Image from "next/image";
type Props = {
  pokemonId: number;
  setCurrentPokemon: Dispatch<React.SetStateAction<PokemonInList | null>>;
};
export default function PokemonView(props: Props) {
  const generateURL = (pokemon: Pokemon) => {
    const base = "https://raw.githubusercontent.com/PokeAPI/sprites/master";
    const endpoint = JSON.parse(pokemon.sprites[0].sprites).other[
      "official-artwork"
    ].front_default;

    return base + endpoint.slice(6);
  };
  const { data } = useSuspenseQuery(fetchPokemon, {
    variables: { id: props.pokemonId },
  });
  console.log(data);
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-950 bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-gray-800 p-5 rounded-lg ">
        <div className="flex flex-row">
          <div>
            <p className="text-gray-400 text-xl">
              #{addZeros(data.pokemon.id)}
            </p>
            {JSON.stringify(data.pokemon.species.speciesnames)}
            <p className="text-5xl pb-5">
              {data.pokemon.name.charAt(0).toUpperCase() +
                data.pokemon.name.slice(1)}
            </p>
            <p className="text-gray-400 text-xl">
              Height: {data.pokemon.height / 10}m
            </p>
            <p className="text-gray-400 text-xl">
              Weight: {data.pokemon.weight / 10}kg
            </p>
            <div className="flex flex-row">
              {data.pokemon.types.map((type) => (
                <TypeBadge type={type.type.name} key={type.type.name} />
              ))}
            </div>
            <Image
              src={generateURL(data.pokemon)}
              alt="photo of pokemon sprite"
              width={400}
              height={400}
              className="mx-auto relative p-5 hover:scale-110 transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
