import Gradient from "./CardImageGradient";
import Image from "next/image";
import { PokemonInList } from "@/types";

export default function PokemonCardImage({
  pokemon,
}: {
  pokemon: PokemonInList;
}) {
  const generateURL = (pokemon: PokemonInList) => {
    const base = "https://raw.githubusercontent.com/PokeAPI/sprites/master";
    const endpoint = JSON.parse(pokemon.sprites[0].sprites).other[
      "official-artwork"
    ].front_default;

    return base + endpoint.slice(6);
  };
  return (
    <div>
      <Gradient type={pokemon.types[0].type.name}>
        <Image
          src={generateURL(pokemon)}
          alt="photo of pokemon sprite"
          width={192}
          height={192}
          className="mx-auto relative p-5 hover:scale-110 transition duration-500 ease-in-out"
        />
      </Gradient>
    </div>
  );
}
