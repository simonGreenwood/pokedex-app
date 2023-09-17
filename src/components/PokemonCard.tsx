import { PokemonInList } from "@/types";
import TypeBadge from "./TypeBadge";
import PokemonCardImage from "./PokemonCardImage";
import Link from "next/link";
import { addZeros } from "@/utils/utils";
import { type } from "os";
type Props = {
  pokemon: PokemonInList;
  setCurrentPokemon: (pokemon: PokemonInList | null) => void;
};
export default function PokemonCard(props: Props) {
  return (
    <div key={props.pokemon.id} className="max-w-xs">
      <div className=" bg-gray-950 rounded-lg border-gray-600 ">
        <div className="grid place-items-center ">
          <button
            className="align-center content-center"
            onClick={() => props.setCurrentPokemon(props.pokemon)}
          >
            <PokemonCardImage pokemon={props.pokemon} />
          </button>
          <p className="text-gray-400">#{addZeros(props.pokemon.id)}</p>

          <p className="text-xl text-white">
            {props.pokemon.species.speciesnames[0].name
              .charAt(0)
              .toUpperCase() +
              props.pokemon.species.speciesnames[0].name.slice(1)}
          </p>
          <p className="text-gray-400 text-sm ">
            {/*pokemon genus*/}
            {props.pokemon.species.speciesnames[0].genus}
          </p>
          <div className="flex flex-wrap overflow-x-auto justify-center pb-4 max-width-xs">
            {props.pokemon.types.map((type) => (
              <TypeBadge type={type.type.name} key={type.type.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
