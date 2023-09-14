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
    <div>
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
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 p-5">
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
