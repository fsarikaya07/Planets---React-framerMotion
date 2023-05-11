import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

import { FlexWrapper } from "../../styles/globalStyles";


const PlanetRotation = keyframes`
  0%{
    transform: rotateZ(0deg);
  }
  100%{
    transform: rotateZ(360deg);
  }
`;

const PlanetRotationCorrect = keyframes`
  0%{
    transform: rotateZ(360deg);
  }
  100%{
    transform: rotateZ(0deg);
  }
`;

const OrbitLine = styled.div`
  width: ${({ planetSpecs }) => planetSpecs?.orbitDistance}vw;
  height: ${({ planetSpecs }) => planetSpecs?.orbitDistance}vw;
  border: 5px #30e3e97a dashed;
  border-radius: 50%;
  position: absolute;

  -webkit-animation: ${PlanetRotation}
      ${({ planetSpecs }) => planetSpecs?.animation}s linear infinite,
    ${({ planetSpecs }) => planetSpecs?.animation}s infinite;
  animation: ${PlanetRotation} ${({ planetSpecs }) => planetSpecs?.animation}s
      linear infinite,
    ${({ planetSpecs }) => planetSpecs?.animation}s infinite;
  &:hover {
    border-color: #d2d1d4;
    cursor: pointer;
  }
`;

const PlanetBody = styled(motion.div)`
  border-radius: 50%;
  border: none;
  transform: scaleX(0.4);
  position: absolute;
  /* overflow: hidden; */
  ${({ planetSpecs }) => {
    return `
    z-index:1;
    background: url(assets/${planetSpecs?.name}.jpg);
    background-position: center;
    background-size: cover;
    `;
  }}
  /* &::after {
    ${({ planetSpecs }) => {
      if (planetSpecs?.name === "saturn") {
        return `
        border:8px solid red;
          
    `;
      }
    }}
  } */
  &:hover {
    border: 10px solid #ffffff;
    border-color: #d2d1d4;
    cursor: pointer;
  }
  ${FlexWrapper("flex-start")};
  width: ${({ planetSpecs }) => planetSpecs?.width}vw;
  height: ${({ planetSpecs }) => planetSpecs?.height}vw;
`;

const PlanetBodyContainer = styled.div`
  position: absolute;
  width: ${({ planetSpecs }) => planetSpecs?.width}vw;
  height: ${({ planetSpecs }) => planetSpecs?.height}vw;
  top: ${({ planetSpecs }) => planetSpecs?.position?.top}vw;
  right: ${({ planetSpecs }) => planetSpecs?.position?.right}vw;
  bottom: ${({ planetSpecs }) => planetSpecs?.position?.bottom}vw;
  left: ${({ planetSpecs }) => planetSpecs?.position?.left}vw;
  animation: ${PlanetRotationCorrect}
    ${({ planetSpecs }) => planetSpecs?.animation}s infinite linear;
`;

export { OrbitLine, PlanetBody, PlanetBodyContainer };
