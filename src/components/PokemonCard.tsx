"use client";
import {
  Card,
  CardBody,
  Text,
  CardHeader,
  Heading,
  Image,
} from "@chakra-ui/react";

interface PokemonCardProps {
  url: string;
  name: string;
  id: number;
}
export default function PokemonCard({
  pokemon,
}: {
  pokemon: PokemonCardProps;
}) {
  return (
    <div>
      <Card key={pokemon.id}>
        <CardHeader>
          <Heading size="md">{pokemon.name}</Heading>
        </CardHeader>
        <CardBody>
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            width={200}
            height={200}
            alt={pokemon.name}
          />
        </CardBody>
      </Card>
    </div>
  );
}
