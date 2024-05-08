import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { Stack } from "../components/atoms.styled";
import "../styles/styles.css";
import { usePokemonList } from "../hook/swr";
import HomeCard from "../components/HomeCard/HomeCard";
import { IPokemon } from "models/types";

export default function Home(){

  const { pokemonList } = usePokemonList();
  
  const [search, setSearch] = useState<string>("");

  const filteredPokemon: IPokemon[] = useMemo(() => {
    return (pokemonList || [])
      .filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
  }, [pokemonList, search]);

  let history = useHistory();
  function handleClick(name: string, id: string){
    history.push(`/detail/${name}/${id}`);
  }

  return (
    <div className="container">
      <p>Search a Pokémon</p>
      <SearchBar setSearch={setSearch} />
      <Stack style={{ flexWrap: "wrap" }} flexDirection="row" gap="20px">
        {filteredPokemon.map((pokemon, index) => (
          <HomeCard
            key={index}
            name={pokemon.name}
            id={pokemon.id}
            width="250px"
            onClick={() => handleClick(pokemon.name, pokemon.id)}
          />
        ))}
      </Stack>
    </div>
  );
}
