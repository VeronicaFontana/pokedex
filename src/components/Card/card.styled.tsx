import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  //background-color: ${(props) => props.bgColor};
`;

export const CardComp = styled.div`
  height: 350px;
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  border: 1px solid black;
  border-radius: 5px;
`;
