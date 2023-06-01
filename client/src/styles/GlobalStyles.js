import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /*  Global Styles */
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

  *::-webkit-scrollbar{
    display: none;
  }

  /* Text Styles */
  a, li {
    text-decoration: none;
  }
  
  /* Form Styles */
  label {
    font-size: 12px;
    line-height: 16px;
    margin: 0 0 5px 0;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    height: 50px;
    color: #808080;
    border: 2px solid #313133;
    border-radius: 0;
    padding: 15px 20px 15px 20px;
    margin: 0 0 20px 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    background: rgba(0, 0, 0, 0);
    transition: all 0.3s;

    &:focus {
      border: 2px solid #fff;
      opacity: 0.5;
      transition: all 1s;
    }
  }

  textarea {
    resize: none;
    line-height: 24px;
    height: 230px;
  }

  button,
  input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    display: inline-block;
    width: auto;
    padding: 15px 40px 15px 40px;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    border: 2px solid #313133;
    background: rgba(0, 0, 0, 0);
    transition: background 0.3s, border 0.3s, color 0.3s;
  }

  button:hover:enabled,
  input[type='button']:hover,
  input[type='reset']:hover,
  input[type='submit']:hover {
    border-color: #ffffff;
  }

  button:hover:disabled {
    cursor: default;
  }
`;
