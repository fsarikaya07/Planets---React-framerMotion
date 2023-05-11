import { motion } from "framer-motion";
import styled from "styled-components";
import { FlexWrapper } from "../../styles/globalStyles";

export const PlanetDetailPageContainer = styled(motion.div)`
  ${FlexWrapper("space-between")}
 
  height: 100vh;
  width: 100vw;
  @media screen and (max-width:1200px){
    flex-direction: column;
  }
`;
export const PlanetDetailInnerContainer = styled.div`
  ${FlexWrapper("center")};
  flex-direction: column;
  background-color: #ffffff11;
  width: 80vw;
  height: 100%;
  @media screen and (max-width: 1200px){
        width: 100vw;
    }
`;