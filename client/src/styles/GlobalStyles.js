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
    transition: background 0.3s, border 0.3s;
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

  button:hover,
  input[type='button']:hover,
  input[type='reset']:hover,
  input[type='submit']:hover {
    border-color: #ffffff;
  }
`;
