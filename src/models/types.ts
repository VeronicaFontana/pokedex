// Risposte chiamate

//List
export interface IPokemonDataList{
    count: number;
    next: string;
    previous: null;
    results: INameUrl[]
}

//Species
export interface IPokemonSpecies{
    base_happiness: number;
    capture_rate: number;
    color: INameUrl;
    egg_groups: INameUrl[];
    evolution_chain: { url: string };
    evolves_from_specie: null | INameUrl;
    flavor_text_entries: IFlavorTextEntries[]
    form_descriptions: [];
    form_switchable: boolean;
    gendera_rate: number;
    genera: { genus: string; language: INameUrl }[];
    generation: INameUrl;
    growth_rate: INameUrl;
    habitat: INameUrl;
    has_hender_differences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: { language: INameUrl; name: string }[];
    order: number;
    pal_park_encounters: IPalParkEncounters[];
    pokedex_numbers: { entry_number: number; pokedex: INameUrl }[];
    shape: INameUrl;
    varieties: { is_default: boolean; pokemon: INameUrl }[];
}

interface IFlavorTextEntries{
    flavor_text: string;
    language: INameUrl;
    version: INameUrl;
}

interface IPalParkEncounters{
    area: INameUrl;
    base_score: number;
    rate: number;
}

// Agility
export interface IPokemonAgility{
    abilities: IAbilities[];
    base_experience: number;
    cries: { latest: string, legacy: string};
    forms: INameUrl[];
    game_indices: { game_index: number; version: INameUrl }[];
    height: number;
    held_items: [];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: IMove[];
    name: string;
    order: number;
    past_abilities: [];
    past_types: [];
    species: INameUrl;
    sprites: ISprites;
    stats: IStatsInfo[];
    types: { slot: number; type: INameUrl }[];
    weight: number
}

interface IAbilities{
    ability: INameUrl;
    is_hidden: boolean;
    slot: number;
}

interface ISprites{
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other: ISpritesOther;
    versions: ISpritesVersions;
}

interface ISpritesOther{
    dream_world: { front_default: string; front_female: null};
    home: ISpritesOtherHome;
    officialArtwork: { front_default: string; front_shiny: string };
    showdown: ISpritesOtherShowdown;
}

interface ISpritesOtherHome{
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
}

interface ISpritesOtherShowdown extends IGenerarionIIIFrontBack{
    back_female: null;
    back_shiny_female: null;
    front_female: null;
    front_shiny_female: null;
}

interface ISpritesVersions{
    generationI: IGenerationI;
    generationII: IGenerationII;
    generationIII: IGenerationIII;
    generationIV: IGenerationIV;
    generationV: { blackWhite: IGenerationVBlackWhite };
    generationVI: { omegarubyAlphasapphire: ISpritesOtherHome; xY: ISpritesOtherHome };
    generationVII: IGenerationVII;
    generationVIII: { icons: { front_default: string; front_female: null } }
}

interface IGenerationI{
    redBlue: IGenerationIFrontBack;
    yellow: IGenerationIFrontBack;
}

interface IGenerationIFrontBack{
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
}

interface IGenerationII{
    crystal: IGenerationIIFrontBack;
    gold: IGenerationIIFrontBack;
    silver: IGenerationIIFrontBack;
}

interface IGenerationIIFrontBack extends IGenerarionIIIFrontBack{
    back_shiny_transparent: string;
    back_transparent: string;
    front_shiny_transparent: string;
    front_trasnparent: string;
}

interface IGenerationIII{
    emerald: { front_default: string; front_shiny: string };
    fireredLeafgreen: IGenerarionIIIFrontBack;
    ruby_sapphire: IGenerarionIIIFrontBack;
}

interface IGenerarionIIIFrontBack{
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

interface IGenerationIV{
    diamondPearl: ISpritesOtherShowdown;
    heartgoldSoulsilver: ISpritesOtherShowdown;
    platinum: ISpritesOtherShowdown;
}

interface IGenerationVBlackWhite extends ISpritesOtherShowdown{
    animated: ISpritesOtherShowdown;
}

interface IGenerationVII{
    icons: { front_default: string; front_female: null }; 
    ultraSunUltrMoon: ISpritesOtherHome;
}

interface IStatsInfo{
    base_stat: number;
    effort: number;
    stat: INameUrl;
}

// -------

export interface IPokemon {
    name: string;
    id: string;
}

export interface IPokemonInfo {
    description: string;
    color: string;
    habitat: string;
    generation: string;
    captureRate: number;
    pokedexNum: number;
    evolutionUrl: string;
}

export interface IAgility {
    abilities: string[];
    height: number;
    moves: IMove[];
    stats: IStats;
    weight: number;
}

export interface INameUrl{
    name: string;
    url: string;
}

interface IMove{
    move: INameUrl; 
    version_group_details: IVersionGroupDetails[];
}

interface IVersionGroupDetails{
    level_learned_at: number;
    move_learn_method: INameUrl;
    version_group: INameUrl;
}

interface IStats{
    attack: number;
    defense: number;
    hp: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
}

export interface ITypes{
    slot: number;
    type: INameUrl;
}







