/* 
   -  Component applies general styles to the entire project.

    - Applied within App.jsx

*/

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Afacad Flux", serif;
    }

`;

export default GlobalStyles;