import styled from 'styled-components';

import * as colors from '../../configs/colors';

export const Form = styled.form`
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

  label {
    margin-top: 0.4em;
    display: flex;
    font-size: 1.6em;
    font-family: 'Courier New', Courier, monospace;
    color: black;
    box-shadow: 1px 1px 2px black, -2px -2px 4px black;
    align-items: center;
    justify-content: center;
    padding: 0.2em;


    input {
      font-size: 0.7em;
      margin-bottom: 0.07em;
      box-shadow: 1px 1px 2px black;
      align-items: center;
      width: 30vw;
      height: 30px;
      text-align: center;

    }
    input:focus {
      box-shadow: 3px 3px 5px black;
    }
    input:hover {
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
`;

export const DivForm = styled.div`
  height: 20em;
  max-height: 90vh;
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
