import Image from "next/image";
import PokemonCard from "@/components/PokemonCard";
async function getData() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const data = await getData();

  return (
    <div>
      {data.results.map((pokemon: any) => {
        const data = fetch(pokemon.url);
        console.log(data);

        return (
          <div key={"lol"}>
            <PokemonCard data={data} />
          </div>
        );
      })}
    </div>
  );
}
