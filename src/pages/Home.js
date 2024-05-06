import React, { useEffect, useState, useMemo } from "react";
import Card from "../components/Card";
import { useHistory } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { Stack } from "../components/atoms.styled";
import "../styles/styles.css";
import { usePokemonList, usePokemonDescription, usePokemonSpriteUrl, usePokemonAgility, usePokemonType } from "../hook/swr";
import useSWR from "swr";
import HomeCard from "../components/HomeCard/HomeCard";

export default function Home(){

  const {pokemonList} = usePokemonList();
  
  const [search, setSearch] = useState("");

  const filteredPokemon = useMemo(() => {
    return (pokemonList || [])
      .filter(pokemon =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
  }, [pokemonList, search]);

  let history = useHistory();
  function handleClick(name, id){
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
