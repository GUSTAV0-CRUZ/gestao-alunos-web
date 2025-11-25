import Styled, { createGlobalStyle } from 'styled-components';

import * as color from '../configs/colors';
import 'react-toastify/dist/ReactToastify.css';

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
    background: ${color.bgDark};
  }

  .Toastify__toast-theme--colored.Toastify__toast--success {
    background: ${color.colorSuccess};
  }
  .Toastify__toast-theme--colored.Toastify__toast--error {
    background: ${color.colorError};
  }

  a {
    text-decoration: none;
    outline: none;
  }

  button {
    cursor: pointer;
    background-color: ${color.colorPrimary};
    color: ${color.textMainDark};
    width: 60px;
    height: 25px;
  }

  `;

export const Container = Styled.div`
  margin: 4vw auto;
  max-width: 90vw;
  background: #eee;
  padding: 3vw;
  border-radius: 20px;
  box-shadow: 2px 2px 4px ${color.colorPrimary}, -2px -2px 4px ${color.colorPrimary};

  p {
    font-size: 35px;
  }

  h1 {
    color: ${color.colorPrimary};
    box-shadow: -2px 4px ${color.colorPrimary};
  }

`;
