import { useParams } from "react-router-dom";
import useRings from "../../hooks/useRings";
import {
  DetailPlanetCircle,
  DetailPlanetContainer,
  SaturnCircleFix,
  SaturnRings,
  UranusCircleFix,
  UranusRings,
} from "./DetailPlanet.styled";

const DetailPlanet = () => {
  const { name } = useParams();
  console.log(name);
  const { ringSpecs } = useRings(name);
  return (
    <DetailPlanetContainer>
      <SaturnRings planetType={name} ringSpecs={ringSpecs} isDetail />
      <UranusRings planetType={name} ringSpecs={ringSpecs} isDetail/>
      <DetailPlanetCircle planetType={name}>
        <SaturnCircleFix planetType={name} ringSpecs={ringSpecs} isDetail/>
        <UranusCircleFix planetType={name} ringSpecs={ringSpecs} isDetail/>
      </DetailPlanetCircle>
    </DetailPlanetContainer>
  );
};

export default DetailPlanet;
