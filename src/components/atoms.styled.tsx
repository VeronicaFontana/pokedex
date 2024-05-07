import styled, { css } from "styled-components";

export const Stack = styled.div`
  ${(props) => `display: ${props.display ? props.display : "flex"};`};
  ${(props) =>
    `flex-direction: ${props.flexDirection ? props.flexDirection : "column"};`};
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`};
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent};`};
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
`;

export const Column = styled.div`
  height: "100%";
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  justify-content: space-between;
`;


