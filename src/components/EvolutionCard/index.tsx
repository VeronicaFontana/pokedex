import React from "react";
import { Stack } from "../atoms.styled";

export default function EvolutionCard(props){
    const {image, name} = props;

    return(
        <Stack style={{width:"200px", height:"200px", textAlign:"center"}}>
            <div>
                immagine
            </div>
            <div>
                <p>nome</p>
                <p>Num</p>
            </div>
        </Stack>
    );
}