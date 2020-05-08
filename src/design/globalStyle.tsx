import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  html, body {
    background-color: #eee9ee;
    color: #282c34;
    min-height: 100vh;
  }

  h1 {
    font-size: 2rem;
  }

  h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }

  td, th {
    padding: 0;
    text-align: left;
    font-weight: normal;
  }
`;

export default GlobalStyle;
