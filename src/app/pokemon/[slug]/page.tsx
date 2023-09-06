"use client";
import { fetchPokemon } from "@/queries";
import { getClient } from "@/lib/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSuspenseQuery } from "@apollo/client";

export default function PokemonPage() {
  // fetch the pokemon data
  const router = useRouter();
  const { data } = useSuspenseQuery(fetchPokemon, {
    variables: { slug: router.query.slug },
  });
  return (
    <div>
      <h1>{data.pokemon.name}</h1>
    </div>
  );
}
