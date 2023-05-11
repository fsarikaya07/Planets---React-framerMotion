import { motion } from "framer-motion";
import styled, { css } from "styled-components";



export const rings = (width, height, top, left) => {
  return `
  width: ${width}vw;
  height: ${height}vw;
  border-radius: 50%;
  top: ${top}%;
  left: ${left}%; 
  position: absolute;
  z-index: 2;
  
  `;
};

const ringsFix = (width, height, top, left) => {
  return `
      background-size: cover;
      width: ${width}vw;
      height: ${height}vw;
      position: absolute;
      top: ${top}vw;
      left: ${left}vw; 
      z-index: 3;
    `;
};
const SaturnRings = styled.div`
  ${({ planetType, ringSpecs, isDetail }) => {
    if (planetType === "saturn") {
      return `
      ${
        isDetail
          ? rings(
              ringSpecs?.detail?.width,
              ringSpecs?.detail?.height,
              ringSpecs?.detail?.top,
              ringSpecs?.detail?.left
            )
          : rings(
              ringSpecs?.orbit?.width,
              ringSpecs?.orbit?.height,
              ringSpecs?.orbit?.top,
              ringSpecs?.orbit?.left
            )
      }
      
      
      border: solid ${
        isDetail
          ? ringSpecs?.detail?.borderWidth
          : ringSpecs?.orbit?.borderWidth
      }vw #5c5c5b;
      transform: rotate3d(1, 0, 0, 75deg);
    `;
    }
  }}
`;
export const UranusRings = styled.div`
  ${({ planetType, ringSpecs, isDetail }) => {
    if (planetType === "uranus") {
      return `
      ${
        isDetail
          ? rings(
              ringSpecs?.detail?.width,
              ringSpecs?.detail?.height,
              ringSpecs?.detail?.top,
              ringSpecs?.detail?.left
            )
          : rings(
              ringSpecs?.orbit?.width,
              ringSpecs?.orbit?.height,
              ringSpecs?.orbit?.top,
              ringSpecs?.orbit?.left
            )
      }
     
      border: solid ${
        isDetail
          ? ringSpecs?.detail?.borderWidth
          : ringSpecs?.orbit?.borderWidth
      }vw #85c0e2;
      transform: rotate3d(0.3, 8, 0, 80deg);
    `;
    }
  }}
`;
const DetailPlanetContainer = styled.div`
  position: relative;
`;

const DetailPlanetCircle = styled(motion.div)`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  position: relative;
  ${({ planetType }) => {
    return `
    background: url(assets/${planetType}.jpg);
    background-position: top;
    background-size: cover;
    `;
  }}
`;

const SaturnCircleFix = styled.div`
  ${({ planetType, ringSpecs, isDetail, isOrbit }) => {
    if (planetType === "saturn") {
      return `
      background-position: top;
      border-radius: 10vw 10vw 0 0;
      ${
        isDetail
          ? ringsFix(
              ringSpecs?.detail?.fix?.width,
              ringSpecs?.detail?.fix?.height
            )
          : ringsFix(
              ringSpecs?.orbit?.fix?.width,
              ringSpecs?.orbit?.fix?.height
            )
      }
      
      background: url(src/assets/${planetType}.jpg);
    `;
    }
  }}
`;
export const UranusCircleFix = styled.div`
  ${({ planetType, ringSpecs, isDetail }) => {
    if (planetType === "uranus") {
      return `
      background: url(src/assets/${planetType}.jpg);
      background-position: center;
      border-radius: 0 10vw 10vw 0;
      transform: rotate(180deg);
      ${
        isDetail
          ? ringsFix(
              ringSpecs?.detail?.fix?.width,
              ringSpecs?.detail?.fix?.height
            )
          : ringsFix(
              ringSpecs?.orbit?.fix?.width,
              ringSpecs?.orbit?.fix?.height
            )
      }
    `;
    }
  }}
`;

export {
  DetailPlanetCircle,
  DetailPlanetContainer,
  SaturnRings,
  SaturnCircleFix,
};
