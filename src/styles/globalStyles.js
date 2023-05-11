import { createGlobalStyle } from "styled-components";

export const FlexWrapper = (justfiyType) => `
    display:flex;
    justify-content:${justfiyType};
    align-items:center;
`;

const GlobalStyles = createGlobalStyle`
    body{
       
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
