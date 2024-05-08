/**
 * Fetches first 150 Pokemon and returns an array of obejcts,
 * where each object represents a Pokemon.
 *
 * @returns {Array.<{
 *   name: string,
 *   url: string
 * }>}
 */

import type { INameUrl, IPokemon, IPokemonInfo, IAgility, ITypes, IPokemonDataList, IPokemonSpecies, IPokemonAgility } from "models/types";

const delay = () => new Promise<void>((res) => setTimeout(() => res(), 2000));

export async function getPokemonList(): Promise<IPokemon[]> {
  const data: IPokemonDataList = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
  ).then((res) => res.json());

  const pokemonRes: INameUrl[] = data.results

  const pokemon: IPokemon[] = pokemonRes.map((poke) => {
    const name = poke.name
    const url = poke.url;
    const num = url.match(/\/(\d+)\/$/);
    const id = num[1]

    return {name: name, id: id}
  })

  return pokemon;
}

/**
 * @returns {string} Short description of Pokemon
 */
export async function getPokemonDescription({ id }: {id: string}): Promise<IPokemonInfo> {
  await delay();
  const pokemon: IPokemonSpecies = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  ).then((res) => res.json());

  const pokemonInfo: IPokemonInfo = {
    description: pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " "),
    color: pokemon.color.name,
    habitat: pokemon.habitat.name,
    generation: pokemon.generation.name.replace(/i/g, "I"),
    captureRate: pokemon.capture_rate,
    pokedexNum: pokemon.pokedex_numbers[0].entry_number,
    evolutionUrl: pokemon.evolution_chain.url
  };

  return pokemonInfo;
}

/**
 * Returns URL of a Pokemon sprite image
 */
export async function getPokemonSpriteUrl({ id }: {id: string}) {
  await delay();
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

export async function getPokemonAgility({ id }: {id: string}): Promise<IAgility> {
  await delay();
  const resp: IPokemonAgility = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}/`
  ).then((res) => res.json());

  const agility: IAgility = {
    moves: resp.moves,
    abilities: [resp.abilities[0].ability.name, resp.abilities[1]?.ability.name],
    stats: {hp:resp.stats[0].base_stat, attack:resp.stats[1].base_stat, defense:resp.stats[2].base_stat, specialAttack:resp.stats[3].base_stat, specialDefense:resp.stats[4].base_stat, speed:resp.stats[5].base_stat },
    weight: resp.weight,
    height: resp.height
  };

  return agility;
}

export async function getPokemonType({ id }: {id: string}): Promise<ITypes[]> {
  await delay();
  const pokemon: IPokemonAgility = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  ).then((res) => res.json());

  const pokemonType: ITypes[] = pokemon.types;

  console.log({pokemonType})

  return pokemonType;
}

