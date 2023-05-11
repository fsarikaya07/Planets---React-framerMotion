import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FlexWrapper } from "../../styles/globalStyles";
import { BsChevronDoubleUp } from "react-icons/bs";

const arrowDownAnimation = keyframes`
0%{
  top: 2rem;
}
100%{
  top: 0rem;
}
`;


export const NavbarPlanetsContainer = styled.div`
  ${FlexWrapper("center")};
  flex-wrap: wrap;
  flex-direction: row-reverse;
  height: fit-content;
  border: none;
  border-radius: 2rem;
  gap: 1rem;
`;

export const PlanetLink = styled(Link)`
  text-decoration: none;
  ${FlexWrapper("center")};
  flex-direction: column;
  gap: 1rem;
  h2 {
    color: #ffffff;
    text-transform: uppercase;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 0.1rem;
  }
`;

export const NavbarPlanetCircle = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: relative;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    border: 3px solid #ffffff;
  }
  ${({ planet }) => {
    return `
    background: url(assets/${planet}.jpg);
    background-position: top;
    background-size: cover;
    `;
  }}
`;


export const Heading = styled.h1`
  color: #ffffff;
  letter-spacing: 0.4rem;
  font-size: 3rem;
  font-weight: 600;
  font-family: "Bebas Neue", cursive;
  ${FlexWrapper("center")}
  text-transform: uppercase;
  flex-direction: column;
`;
export const DetailText = styled.h4`
  color: #58c0bb;
  font-size: 1rem;
  border: 2px solid #58c0bb;
  border-radius: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #58c0bb;
    color: #000000;
    padding: 0.5rem;
    transition: 300ms ease-in-out;
  }
`;
export const DetailTextContainer = styled.div`
  ${FlexWrapper("center")};
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
`;
export const NavbarContainer = styled.div`
  ${FlexWrapper("center")};
  flex-direction: column;
  gap: 2rem;
  /* @media screen and (min-width: 1400px) {
    margin-top: -9rem;
    margin-bottom: 2rem;} */
`;

export const UpArrow = styled(BsChevronDoubleUp)`
  position: relative;
  animation: ${arrowDownAnimation} 2s infinite;
`;
