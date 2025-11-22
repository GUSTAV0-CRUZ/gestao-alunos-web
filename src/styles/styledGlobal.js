import Styled, { createGlobalStyle } from 'styled-components';

import { bgDark, colorPrimary, textMainDark } from '../configs/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: ${bgDark};
  }

  a {
    text-decoration: none;
    outline: none;
  }

  button {
    cursor: pointer;
    background-color: ${colorPrimary};
    color: ${textMainDark};
    width: 60px;
    height: 25px;
  }

  `;

export const Container = Styled.div`
  margin: 4vw auto;
  max-width: 80vw;
  background: #eee;
  padding: 3vw;

  p {
    font-size: 35px;
  }

`;
