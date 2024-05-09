import useSWR from "swr";
import { CardComp } from "../HomeCard/cardComp.styled";
import { Stack } from "../atoms.styled";
import Loader, { LoaderVariants } from "../Loader/Loader";
import { useHistory } from "react-router-dom";
import { usePokemonDescription, usePokemonSpriteUrl, usePokemonType } from "../../hook/swr";
import React from "react";

interface IHomeCardProps{ 
    id: string;
    name: string;
    width: string;
    onClick?: () => void; 
}

export default function HomeCard(props: IHomeCardProps) {
    const { id, name, width, onClick } = props;

    const { imageUrl, isImageLoading } = usePokemonSpriteUrl(id);
    const { pokemonInfo, isInfoLoading } = usePokemonDescription(id);
    const { pokemonType, isTypeLoading } = usePokemonType(id);

    let history = useHistory();
    function handleClick(){
        if(onClick){
            onClick();
        }
    }

    return (
        <CardComp alignItems="center" style={{width}} onClick={handleClick}>
            <Stack flexDirection="row" justifyContent="center" alignItems="center" className="card__text">
            <p style={{fontSize: "1.7rem"}}>{name} - #{pokemonInfo?.pokedexNum}</p>
            </Stack>
            <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            className="card__img"
            style={{
                backgroundColor: (isInfoLoading? "lightgray" : pokemonInfo?.color)
            }}
            >
            {
                isImageLoading ?
                <Loader variant="circle" />
                :
                <div style={{padding: "30px", borderRadius: "50%", border:"1px solid black", backgroundColor: "white"}}>
                    <img src={imageUrl} />
                </div>
            }
            </Stack>
            <Stack flexDirection="row" justifyContent="space-evenly" alignItems="center" className="card__badges">
            { isTypeLoading ? 
                <Loader variant="badge" />
                :
                pokemonType && pokemonType.length > 0 && 
                pokemonType.map((item, index) => (
                    <div key={index} className="badge">
                        {item.type.name}
                    </div>
                ))
            }
            </Stack>
        </CardComp>
    );
}
