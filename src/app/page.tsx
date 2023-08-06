import Image from "next/image";

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const data = await getData();

  return (
    <main>
      {data.results.map((pokemon: any) => (
        <p key={pokemon.name}>{pokemon.name}</p>
      ))}
    </main>
  );
}
