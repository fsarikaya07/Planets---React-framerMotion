import { Link } from "react-router-dom";
import usePlanet from "../../hooks/usePlanet";
import useRings from "../../hooks/useRings";
import {
  SaturnCircleFix,
  SaturnRings,
  UranusCircleFix,
  UranusRings,
} from "../DetailPlanet/DetailPlanet.styled";
import {
  OrbitLine,
  PlanetBody,
  PlanetBodyContainer,
} from "./OrbitPlanet.styled";

const OrbitPlanet = ({ planet }) => {
  const { planetSpecs } = usePlanet(planet);
  const { ringSpecs } = useRings(planet);
  console.log(planetSpecs);
  return (
    <OrbitLine planetSpecs={planetSpecs}>
      <Link to={`/${planet}`}>
        <PlanetBodyContainer planetSpecs={planetSpecs}>
          <SaturnRings planetType={planet} ringSpecs={ringSpecs} isOrbit/>
          <UranusRings planetType={planet} ringSpecs={ringSpecs} isOrbit/>
          <SaturnCircleFix
            planetType={planet}
            ringSpecs={ringSpecs}
            isOrbit
          />
          <UranusCircleFix
            planetType={planet}
            ringSpecs={ringSpecs}
            isOrbit
          />
          <PlanetBody planetSpecs={planetSpecs}></PlanetBody>
        </PlanetBodyContainer>
      </Link>
    </OrbitLine>
  );
};

export default OrbitPlanet;
