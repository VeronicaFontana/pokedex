/**
 * Fetches first 150 Pokemon and returns an array of obejcts,
 * where each object represents a Pokemon.
 *
 * @returns {Array.<{
 *   name: string,
 *   url: string
 * }>}
 */

const delay = () => new Promise((res) => setTimeout(() => res(), 2000));

export async function getPokemonList() {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
  ).then((res) => res.json());
  const pokemon = data.results

  const poke = pokemon.map((poke) => {
    const name = poke.name
    const url = poke.url;
    const num = url.match(/\/(\d+)\/$/);
    const id = num[1]
    return {name: name, id: id}
  })

  return poke;
}

// interface IPoke{
//   name:String
//   url:Stringurl
//   num:String
//   id:Number
// }

/**
 * @returns {string} Short description of Pokemon
 */
export async function getPokemonDescription(selectedIndex) {
  await delay();
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${selectedIndex.id}`
  ).then((res) => res.json());

  const pokemonInfo = {
    description: pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " "),
    color: pokemon.color.name,
    habitat: pokemon.habitat.name,
    evolution: pokemon.evolves_from_species,
    generation: pokemon.generation.name.replace(/i/g, "I"),
    captureRate: pokemon.capture_rate,
    pokedexNum: pokemon.pokedex_numbers[0].entry_number,
    evolutionUrl: pokemon.evolution_chain.url
  };

  return pokemonInfo;
}

// interface IPokemonInfo{
  // description:String
  // color:String
  // habitat:String
  // evolution:String
  // generation:String
  // captureRate:Number
  // pokedexNum:Number
  // evolutionUrl:String
// }

/**
 * Returns URL of a Pokemon sprite image
 */
export async function getPokemonSpriteUrl(selectedIndex) {
  await delay();
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedIndex.id}.png`;
}

export async function getPokemonAgility(selectedIndex) {
  await delay();
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${selectedIndex.id}/`
  ).then((res) => res.json());
  const agility = {
    moves: resp.moves,
    abilities: [resp.abilities[0].ability.name, resp.abilities[1]?.ability.name],
    stats: {hp:resp.stats[0].base_stat, attack:resp.stats[1].base_stat, defense:resp.stats[2].base_stat, specialAttack:resp.stats[3].base_stat, specialDefense:resp.stats[4].base_stat, speed:resp.stats[5].base_stat },
    weight: resp.weight,
    height: resp.height
  };


  console.log(agility)
  return agility;
}

// interface IAgility{
//   moves: Array<{move:{name:String; url:String}; version_group_details[{level_learned_at:Number; move_learn_method{name:String; url:String}; version_group{name:String; url:String}}]}>
//   abilities: Array<String>
//   stats: {hp:Number; attack:Number; defense:Number; specialAttack:Number; specialDefense:Number; speed:Number}
//   weight:Number
//   height:Number
// }


export async function getPokemonType(index) {
  await delay();
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${index.id}`
  ).then((res) => res.json());

  const pokemonType = pokemon.types;

  return pokemonType;
}

// Interface IPokemonType{
//   pokemonType:Array<String>
// }
