import { motion } from "framer-motion";
import styled from "styled-components";
import { FlexWrapper } from "../../styles/globalStyles";
import { PlanetSpecsProps } from "../../hooks/usePlanet";

const PlanetsContainer = styled(motion.div)`
  ${FlexWrapper("center")};
  position: relative;
  border-radius: 50%;
  
`;

const SolCircle = styled(motion.div)`
  width: ${({ planetSpecs }) => planetSpecs?.width}vw;
  height: ${({ planetSpecs }) => planetSpecs?.height}vw;
  border-radius: 50%;
  border: 5px solid #ec730f;
  ${({ sunImage }) => {
    return `
    background: url(assets/${sunImage}.jpg);
    `;
  }}

  box-shadow: rgba(248, 213, 14, 0.815) 0px 7px 29px 0px;
`;

export { SolCircle, PlanetsContainer };
