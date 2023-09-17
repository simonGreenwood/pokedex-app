"use client";
import PokemonCard from "./PokemonCard";
import { PokemonInList, PokemonInListQuery } from "@/types";
import SearchBar from "./SearchBar";
import { useState } from "react";
import TypeBadge from "./TypeBadge";
import PokemonView from "./PokemonView";
interface Props {
  data: PokemonInListQuery | undefined;
}

export default function PokemonGrid(props: Props) {
  const [searchFilter, setSearchFilter] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState<PokemonInList | null>(
    null
  );
  return (
    <div className="no-scrollbar">
      {currentPokemon && (
        <PokemonView
          pokemonId={currentPokemon.id}
          setCurrentPokemon={setCurrentPokemon}
        />
      )}

      <SearchBar
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <div className="flex flex-wrap items-stretch place-content-between gap-y-5 p-10 no-scrollbar">
        {props.data?.pokemon.nodes
          .filter((pokemon: PokemonInList) =>
            pokemon.name.includes(searchFilter)
          )
          .map((pokemon: PokemonInList) => (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.id}
              setCurrentPokemon={setCurrentPokemon}
            />
          ))}
      </div>
    </div>
  );
}
