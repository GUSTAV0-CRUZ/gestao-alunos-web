import Styled, { createGlobalStyle } from 'styled-components';

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

`;

export const Container = Styled.div`
  max-width: 80vw;
  margin: 5vw auto;
  background: #d2d0d0ff;
`;
