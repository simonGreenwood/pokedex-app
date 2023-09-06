"use client";
import PokemonCard from "./PokemonCard";
import { PokemonInList } from "@/types";
import SearchBar from "./SearchBar";
import { useState } from "react";
interface Props {
  data: any;
}

export default function PokemonGrid(props: Props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <SearchBar
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
      <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 p-5">
        {props.data?.pokemon.nodes
          .filter((pokemon: PokemonInList) =>
            pokemon.name.includes(searchFilter)
          )
          .map((pokemon: PokemonInList) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
      </div>
    </div>
  );
}
