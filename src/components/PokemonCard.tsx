import { PokemonInList } from "@/types";
import TypeBadge from "./TypeBadge";
import PokemonCardImage from "./PokemonCardImage";
import Link from "next/link";
type Props = {
  pokemon: PokemonInList;
  setCurrentPokemon: (pokemon: PokemonInList | null) => void;
};
export default function PokemonCard(props: Props) {
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
    <div key={props.pokemon.id}>
      <div className=" bg-gray-800 rounded-lg">
        <button onClick={() => props.setCurrentPokemon(props.pokemon)}>
          <PokemonCardImage pokemon={props.pokemon} />
        </button>
        <div className="grid place-items-center">
          <p className="text-gray-400">#{addZeros(props.pokemon.id)}</p>
          <p className="text-xl ">
            {props.pokemon.name.charAt(0).toUpperCase() +
              props.pokemon.name.slice(1)}
          </p>
          <div className="flex flex-row">
            {props.pokemon.types.map((type) => (
              <TypeBadge type={type.type.name} key={type.type.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
