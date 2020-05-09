import { createGlobalStyle } from 'styled-components';

import { Theme } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: 1.4;
  }

  html, body {
    background-color: ${(props) => props.theme.colors.xLight};
    color: ${(props) => props.theme.colors.xDark};
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6, p, ul, li {
    padding: 0;
    margin: 0;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.6rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  h4 {
    font-size: 1.1rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.8rem;
  }

  td, th {
    padding: 0;
    text-align: left;
    font-weight: normal;
  }

  a {
    color: inherit
  }

  p a {
    color: ${(props) => props.theme.colors.secondary}
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
