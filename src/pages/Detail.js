import React, { useEffect, useState, useMemo } from "react";
import useSWR from "swr";
import {useParams} from "react-router-dom";
import InfoCard from "../components/InfoCard";
import { Stack } from "../components/atoms.styled";
import Stats from "../components/Stats";
import Evolution from "../components/Evolution";
import "../styles/styles.css";
import HomeCard from "../components/HomeCard/HomeCard";
import { getPokemonDescription } from "../api/utils";
import { usePokemonDescription } from "../hook/swr";

export default function Detail() {

  const {name, id} = useParams();

  const { pokemonInfo, isLoadingInfo } = usePokemonDescription(id);

  return (
    <Stack justifyContent="space-between" gap="20px" className="container detail-box">
      <Stack flexDirection="row" justifyContent="space-around" className="detail-box__desc">
        <HomeCard
          name={name}
          id={id}
          width="400px"
        />
        <Stack style={{width:"400px"}}>
          <p><b>Description</b></p>
          <p>{pokemonInfo?.description}</p>
          <div style={{padding:"20px 0"}}>Icons</div>
          <InfoCard
          id={id}
          />
        </Stack>
      </Stack>

      <Stack className="detail-box__stats">
        <p><b>Stats</b></p>
        <Stats
        id={id}
        />
      </Stack>

      <Stack className="detail-box__evolution">
        <p><b>Evolution</b></p>
        <Evolution

        />
      </Stack>
    </Stack>
  );
}
