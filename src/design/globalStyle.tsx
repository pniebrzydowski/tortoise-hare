import { createGlobalStyle } from 'styled-components';

import { Theme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  html, body {
    background-color: ${(props) => props.theme.colors.xLight};
    color: ${(props) => props.theme.colors.dark};
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

  a {
    color: ${(props) => props.theme.colors.secondary}
  }
`;

export default GlobalStyle;
