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
      <div className="bg-gray-800 rounded-lg">
        <div>
        <div className="text-xl text-white">
            {data.pokemon.species.speciesnames[0].name
              .charAt(0)
              .toUpperCase() +
              data.pokemon.species.speciesnames[0].name.slice(1)}
          </div>
        </div>
        <Image src={generateURL(data.pokemon)} width={300} height={300} alt="pokemon photo"/>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap overflow-x-auto justify-center pb-4 max-width-xs">
            {data.pokemon.types.map((type) => (
              <TypeBadge type={type.type.name} key={type.type.name} />
            ))}
            {data.pokemon.species.is_legendary && <TypeBadge type="legendary"/>}
            {data.pokemon.species.is_mythical && <TypeBadge type="mythical"/>}
          </div>
        </div>
      </div>    
    </div>
  );
}
