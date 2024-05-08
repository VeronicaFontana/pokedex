import {BarChart, Bar, XAxis} from "recharts";
import { Stack } from "../atoms.styled";
import { usePokemonAgility, usePokemonDescription } from "../../hook/swr";
import Loader from "../Loader/Loader";
import React from "react";

interface iStatsProps{
    id: string;
}

export default function Stats(props: iStatsProps){
    const {id} = props;

    const { pokemonAgility, isAgilityLoading } = usePokemonAgility(id);
    const { pokemonInfo } = usePokemonDescription(id);

    let mappedValue: { name: string; back: number; base_stats: string }[] ;
    if(pokemonAgility?.stats){
        const config = {
            hp: {
                name: "Hp",
                back: 200
            },
            attack: {
                name:"Attack",
                back: 200
            },
            defense: {
                name: "Defense",
                back: 200
            },
            specialAttack: {
                name: "Special-Attack",
                back: 200
            },
            specialDefense: {
                name: "Special-Defense",
                back: 200
            },
            speed: {
                name: "Speed",
                back: 200
            }
        }
    
        const statisKey = Object.keys(config);
    
        mappedValue = statisKey.map((key) => {
            return{
                name: config[key].name,
                back: config[key].back,
                base_stats: (pokemonAgility?.stats)[key]
            }
        })
    }
    
    interface IRenderCustomizedLabel{
        x:  number;
        y: number;
        value: string;
        width: number;
        height: number;
    }

    const renderCustomizedLabel = ({x, y, value, width, height}: IRenderCustomizedLabel) => {
        return (
            <text x={x + width/2} y={y + height} fill="white" textAnchor="middle" dominantBaseline="central" dy="-10">
                {value}
            </text>
        );
    };

    return(
        <Stack flexDirection="row" justifyContent="center" alignItems="end" style={{height:"100%", padding:"10px"}}>
            {
                isAgilityLoading ? 
                <Stack flexDirection="row" gap="30px">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <Loader key={i} variant="rectangular" width="130px" height="270px" />
                    ))}
                </Stack>
                :
                <BarChart width={1000} height={290} data={mappedValue}>
                    <Bar dataKey="back" xAxisId="two" fill="grey" />
                    <XAxis xAxisId="two" hide />
                    <Bar dataKey="base_stats" xAxisId="one" fill={pokemonInfo?.color} label={renderCustomizedLabel} />
                    <XAxis dataKey="name" xAxisId="one" />
                </BarChart>
            }
        </Stack>
    );
}