import { PokemonInList } from "@/types";
import TypeBadge from "./TypeBadge";
import PokemonCardImage from "./PokemonCardImage";
import Link from "next/link";
export default function PokemonCard({ pokemon }: { pokemon: PokemonInList }) {
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
        <Link href={`/pokemon/${pokemon.id}`}>
          <PokemonCardImage pokemon={pokemon} />
        </Link>
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
