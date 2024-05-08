import React from "react";
import { usePokemonAgility, usePokemonDescription } from "../../hook/swr";
import { Stack } from "../atoms.styled";
import { Column } from "../atoms.styled";

interface IInfoCardProps{
    id: string;
}

export default function InfoCard(props: IInfoCardProps){
    const { id } = props;

    const { pokemonInfo } = usePokemonDescription(id);
    const { pokemonAgility } = usePokemonAgility(id);

    return(
        <Stack flexDirection="row" className="infoBoxDetail">
            <Column width="50%">
                <div>
                    <p><b>Height</b></p>
                    <p>{pokemonAgility?.height / 10}m</p>
                </div>
                <div>
                    <p><b>Weight</b></p>
                    <p>{pokemonAgility?.weight / 10}kg</p>
                </div>
                <div>
                    <p><b>Gender</b></p>
                    <p>...</p>
                </div>
            </Column>
            <Column width="50%">
                <div>
                    <p><b>Capture rate</b></p>
                    <p>{ pokemonInfo?.captureRate }</p>
                </div>
                <div>
                    <p><b>Abilities</b></p>
                    { pokemonAgility?.abilities && pokemonAgility.abilities.length > 0 &&
                        pokemonAgility.abilities.map((ability, index) => {
                            return <p key={index}>{ability}</p>
                        })
                    }
                </div>
                <div>
                    <p><b>Habitat</b></p>
                    <p>{pokemonInfo?.habitat}</p>
                </div>
            </Column>
        </Stack>
    );
}