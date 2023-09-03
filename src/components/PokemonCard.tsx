import { PokemonInList } from "@/types";
import Image from "next/image";
export default function PokemonCard({ pokemon }: { pokemon: PokemonInList }) {
  const generateURL = (pokemon: PokemonInList) => {
    const base = "https://raw.githubusercontent.com/PokeAPI/sprites/master";
    const endpoint = JSON.parse(pokemon.sprites[0].sprites).front_default;

    return base + endpoint.slice(6);
  };
  return (
    <div key={pokemon.id}>
      <div className="bg-gradient-conic from-transparent via-sky-400 via-30%">
        <div className="border-2 border-slate-300 rounded-lg bg-gradient-radial from-green-400">
          <Image
            src={generateURL(pokemon)}
            alt="photo of pokemon sprite"
            width={192}
            height={192}
            className="mx-auto"
          />
          <p>
            {pokemon.species.name.charAt(0).toUpperCase() +
              pokemon.species.name.slice(1)}
            {pokemon.forms[0].names[0] &&
              ` (${pokemon.forms[0].names[0].name})`}
          </p>
          <p>{pokemon.id}</p>
        </div>
      </div>
    </div>
  );
}
