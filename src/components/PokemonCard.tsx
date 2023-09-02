export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <p>{pokemon.id}</p>
    </div>
  );
}
