import { PokemonInList } from "@/types";
import Image from "next/image";
import Gradient from "./CardImageGradient";
export default function PokemonCard({ pokemon }: { pokemon: PokemonInList }) {
  const generateURL = (pokemon: PokemonInList) => {
    const base = "https://raw.githubusercontent.com/PokeAPI/sprites/master";
    const endpoint = JSON.parse(pokemon.sprites[0].sprites).front_default;

    return base + endpoint.slice(6);
  };
  return (
    <div key={pokemon.id}>
      <div className=" border-2 border-slate-700 rounded-lg">
        <Gradient>
          <Image
            src={generateURL(pokemon)}
            alt="photo of pokemon sprite"
            width={192}
            height={192}
            className="mx-auto relative"
          />
        </Gradient>
        <p>
          {pokemon.species.name.charAt(0).toUpperCase() +
            pokemon.species.name.slice(1)}
          {pokemon.forms[0].names[0] && ` (${pokemon.forms[0].names[0].name})`}
        </p>
        <p>{pokemon.id}</p>
      </div>
    </div>
  );
}
