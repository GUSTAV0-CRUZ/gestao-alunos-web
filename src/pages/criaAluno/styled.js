import styled from 'styled-components';

import * as colors from '../../configs/colors';

export const DivCentral = styled.div`
  width: 75vw;
  max-width: 75vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4em;
  margin-top: 1em;
  margin-bottom: 1.5em;
  border-radius: 25px;
  border: solid ${colors.colorPrimary} 0.2em;
  background-color: white;
  height: 95%;

  h2 {
    font-size: 2.3em;
  }

  .div-img {
    display: flex;
    flex-direction: column;
    margin-top: 1vh;
    font-size: 10em;
    align-content: end;
    margin-bottom: 1vh;
    width: auto;
    height: 1.5em;
    min-height: 20vh;

    .btn-upload {
      opacity: 0;
      position: absolute;
      z-index: -1;
    }

    .label-upload {
      width: 0.9em;
      height: 200px;
      overflow: hidden;
      border-radius: 50%;
      border: solid ${colors.colorPrimary} 0.03em;
      box-shadow: 3px 3px 7px black, -3px -3px 7px white;
    }

    p {
      background-color: ${colors.bgDark};
      color: ${colors.textMainDark};
      position: absolute;
      font-size: 0.06em;
      margin-top: 5vh;
      border: 2px solid ${colors.colorPrimary};
      border-radius: 1em;
      padding: 5px;
    }

    .icone-faUser {
      font-size: 0.9em;
    }

  }

  img {
    width: 1em;
    height: 0.9em;
  }

  label {
    margin-top: 0.7vh;
    display: flex;
    font-size: 1.5em;
    font-family: 'Courier New', Courier, monospace;
    box-shadow: 1px 1px 2px black, -2px -2px 4px black;
    align-items: center;
    justify-content: center;
    /* padding: 0.2em; */


    input {
      font-size: 0.7em;
      margin-bottom: 0.07em;
      align-items: center;
      width: 30vw;
      height: 20px;
      text-align: center;
      border: none;

    }
    input:focus {
      box-shadow: 3px 3px 5px black;
    }
    input:hover {
      border: solid 1px;
      box-shadow: 3px 3px 5px black;
      transition: all 0.5s ease 0s;
    }
  }

  button {
    margin-top: 10px;
    width: 17em;
    height: 2.7em;
    box-shadow: 3px 3px 5px black;
    box-shadow: 3px 3px 7px black, -3px -3px 7px white;
  }

  button:hover {
    font-size: 0.87em;
    transition: all 0.5s ease 0.1s;
  }

  .div-btn {
    height: 60px;
    display: flex;
    width: 65vw;
    align-items: center;
    justify-content: center;

    .btn-cria {
      font-size: 15px;
      margin: 1vw;
      width: 50vw;
      height: 28px;
      background-color: ${colors.colorSuccess};
    }
  }
`;

export const DivBackground = styled.div`
  height: 40em;
  display: flex;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 1.5em;
  background-color: ${colors.bgDark};
  padding: 0.4em;
  border-radius: 30px;
  border: solid ${colors.colorPrimary} 0.2em;
  box-shadow: 3px 3px 5px black;
  `;
