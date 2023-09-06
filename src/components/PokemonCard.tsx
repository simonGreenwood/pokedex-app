import { PokemonInList } from "@/types";
import Image from "next/image";
import Gradient from "./CardImageGradient";
import TypeBadge from "./TypeBadge";
export default function PokemonCard({ pokemon }: { pokemon: PokemonInList }) {
  const generateURL = (pokemon: PokemonInList) => {
    const base = "https://raw.githubusercontent.com/PokeAPI/sprites/master";
    const endpoint = JSON.parse(pokemon.sprites[0].sprites).other[
      "official-artwork"
    ].front_default;

    return base + endpoint.slice(6);
  };
  const addZeros = (id: number) => {
    if (id < 10) {
      return `00${id}`;
    } else if (id < 100) {
      return `0${id}`;
    } else {
      return id;
    }
  };
  return (
    <div key={pokemon.id}>
      <div className=" bg-gray-800 rounded-lg">
        <Gradient type={pokemon.types[0].type.name}>
          <Image
            src={generateURL(pokemon)}
            alt="photo of pokemon sprite"
            width={192}
            height={192}
            className="mx-auto relative p-5 hover:scale-110 transition duration-500 ease-in-out"
          />
        </Gradient>
        <div className="grid place-items-center">
          <p className="text-gray-400">#{addZeros(pokemon.id)}</p>
          <p className="text-xl ">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </p>
          <div className="flex flex-row">
            {pokemon.types.map((type) => (
              <TypeBadge type={type.type.name} key={type.type.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
