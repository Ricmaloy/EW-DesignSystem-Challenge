import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background-color: #2F2F33;
        font-family: Poppins, sans-serif;
    }

    input, textarea {
        font-family: Poppins, sans-serif;
    }

    button {
        cursor: pointer;
        font-family: Poppins, sans-serif;
    }
`
export default GlobalStyles;