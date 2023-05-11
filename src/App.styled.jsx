import styled from "styled-components";
import { FlexWrapper } from "./styles/globalStyles";


export const MainContainer = styled.div`
  ${FlexWrapper("center")}
  flex-direction: column;
  height: 100vh;
  background: url("assets/stars_milky.jpg");
  background-position:center ;
  background-repeat: no-repeat;
  background-size: cover ;
  gap:4rem;
  @media screen and(max-width:864px){
    ${FlexWrapper("center")}
  }
`;
