
import BottomNavbar from "../../components/BottemNavbar/BottomNavbar";
import OrbitPlanet from "../../components/OrbitPlanet/OrbitPlanet";
import usePlanet from "../../hooks/usePlanet";
import {  PlanetsContainer, SolCircle } from "./Planets.styled";

const Planets = () => {
  const { planetSpecs } = usePlanet("sun");

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
  const planetsMapping = planets?.map((name, index) => (
    <OrbitPlanet planet={name} key={index} />
  ));
  return (
    <>
      
      <PlanetsContainer
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 0.4, scaleY: 0.4 }}
        
        transition={{
          duration: 5,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <SolCircle planetSpecs={planetSpecs} sunImage={"sun"} animate={{ scaleX: 0.4 }} />
        {planetsMapping}
      </PlanetsContainer>
      
      <BottomNavbar />
    </>
  );
};

export default Planets;