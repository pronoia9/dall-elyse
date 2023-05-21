import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
  }

  body,
  html {
    padding: 0;
    margin: 0;
    min-height: 100%;
  }

  body {
    overflow-x: hidden;
    background: #000000;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 28px;
    font-weight: 500;
    color: #808080;
  }
  a, li {
    text-decoration: none;
  }
`;
