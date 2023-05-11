import React from "react";
import { useNavigate } from "react-router";
import {
  Heading,
  NavbarPlanetCircle,
  NavbarPlanetsContainer,
  PlanetLink,
} from "../BottemNavbar/BottomNavbar.styled";
import { BackButton, LeftNavarContainer } from "./LeftNavbar.styled";

const LeftNavar = () => {
  const navigate = useNavigate();
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
  return (
    <LeftNavarContainer>
      <BackButton onClick={() => navigate("/")}> Back to Orbit View</BackButton>
      <Heading>Sol Planets</Heading>
      <NavbarPlanetsContainer>
        {planets?.map((planet, index) => {
          return (
            <PlanetLink key={index} to={`${planet}`}>
              <NavbarPlanetCircle planet={planet} />
              <h2>{planet}</h2>
            </PlanetLink>
          );
        })}
      </NavbarPlanetsContainer>
    </LeftNavarContainer>
  );
};

export default LeftNavar;
