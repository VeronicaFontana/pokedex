import { css, keyframes } from 'styled-components/macro';
import styled from 'styled-components';
import React from 'react';

export const LoaderVariants = {
    circle: "circle",
    badge: "badge",
    text: "text"
};

const animation = keyframes`
    from { background-color: black }
    to { background-color: white }
`;


const baseStyle = css`
    background: grey;
    animation: ${animation} 3s infinite;
`

const Circle = styled.div`
        padding: 30px;
        border-radius: 50%;
        border: 1px solid black;
    ${baseStyle}
`

const Badge  = styled.div`
        padding: 10px 20px;
        border: 1px solid black;
        border-radius: 5px;
    ${baseStyle}
`


const Rectangular  = styled.div`
        width: ${(props) => props.width || "100%"};
        height: ${(props) => props.height || "100%"};
        border-radius: 5px;
        border: 1px solid black;
    ${baseStyle}
`

interface ILoader{
    variant: "circle" | "badge" | "rectangular";
    width?: string;
    height?: string;
}

export default function Loader({ variant, width, height } : ILoader){
    if(variant === 'circle') return <Circle />
    if(variant === 'badge') return <Badge />
    if(variant === 'rectangular') return <Rectangular width={width} height={height} />
}



