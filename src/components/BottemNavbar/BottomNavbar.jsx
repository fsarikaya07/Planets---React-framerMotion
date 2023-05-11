import { useState } from "react";
import useRings from "../../hooks/useRings";
import { SaturnRings } from "../DetailPlanet/DetailPlanet.styled";
import {
  NavbarPlanetsContainer,
  NavbarContainer,
  Heading,
  NavbarPlanetCircle,
  PlanetLink,
  DetailTextContainer,
  DetailText,
  UpArrow,
  NavbarSaturnRings,
  NavbarUranusRings,
} from "./BottomNavbar.styled";

const BottomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const planets = [
    "neptune",
    "uranus",
    "saturn",
    "jupiter",
    "mars",
    "earth",
    "venus",
    "mercury",
  ];

  const navbarShowConditional = isOpen && (
    <NavbarPlanetsContainer>
      {planets?.map((planet, index) => {
        return (
          <PlanetLink key={index} to={`/${planet}`}>
            <NavbarPlanetCircle planet={planet}/>             
            
            <h2>{planet}</h2>
          </PlanetLink>
        );
      })}
    </NavbarPlanetsContainer>
  );
  return (
    <NavbarContainer>
      <Heading>
        Sol Planets
        <DetailTextContainer>
          <DetailText onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? "Click here for Details" : "Click here to close..."}
          </DetailText>
          {!isOpen && <UpArrow />}
        </DetailTextContainer>
      </Heading>
      {navbarShowConditional}
    </NavbarContainer>
  );
};

export default BottomNavbar;
