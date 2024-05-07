import useSWR from "swr";
import { getPokemonList, getPokemonDescription, getPokemonSpriteUrl, getPokemonAgility, getPokemonType } from "../api/utils";

export function usePokemonList(){
    const { data } = useSWR(
        "get-pokemon",
        getPokemonList
    );

    return{
        pokemonList: data
    }
}

export function usePokemonDescription(id){
    const { data, isLoading } = useSWR(
        {id, isInfo:true},
        getPokemonDescription
    );

    return{
        pokemonInfo: data,
        isInfoLoading: isLoading
    }
}

export function usePokemonSpriteUrl(id){
    const { data, isLoading } = useSWR(
        {id, isImage:true},
        getPokemonSpriteUrl
    );

    return{
        imageUrl: data,
        isImageLoading: isLoading
    }
}

export function usePokemonAgility(id){
    const{ data, isLoading } = useSWR(
        {id, isAgility:true},
        getPokemonAgility
    );

    return{
        pokemonAgility: data,
        isAgilityLoading: isLoading
    }
}

export function usePokemonType(id){
    const{ data, isLoading } = useSWR(
        {id, isType:true},
        getPokemonType
    );

    return{
        pokemonType: data,
        isTypeLoading: isLoading
    }
}