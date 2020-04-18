import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
`;

export default GlobalStyle;
