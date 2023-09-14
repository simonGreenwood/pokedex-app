import { PokemonInList } from "@/types";
import TypeBadge from "./TypeBadge";
import PokemonCardImage from "./PokemonCardImage";
import Link from "next/link";
import { addZeros } from "@/utils/utils";
type Props = {
  pokemon: PokemonInList;
  setCurrentPokemon: (pokemon: PokemonInList | null) => void;
};
export default function PokemonCard(props: Props) {
  return (
    <div key={props.pokemon.id}>
      <div className=" bg-gray-950 rounded-lg  border-gray-600">
        <button onClick={() => props.setCurrentPokemon(props.pokemon)}>
          <PokemonCardImage pokemon={props.pokemon} />
        </button>
        <div className="grid place-items-center">
          <p className="text-gray-400">#{addZeros(props.pokemon.id)}</p>
          <p className="text-xl text-white">
            {props.pokemon.species.speciesnames[0].name
              .charAt(0)
              .toUpperCase() +
              props.pokemon.species.speciesnames[0].name.slice(1)}
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
