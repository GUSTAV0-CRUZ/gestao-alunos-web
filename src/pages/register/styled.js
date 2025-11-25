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
  }

  button {
    margin-top: 10px;
    width: 19em;
    height: 2.5em;
    box-shadow: 3px 3px 5px black;
    box-shadow: 3px 3px 7px black, -3px -3px 7px white;
  }
`;

export const DivForm = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 1.5em;
  background-color: ${colors.bgDark};
  padding: 0.4em;
  border-radius: 30px;
  border: solid ${colors.colorPrimary} 0.2em;
  box-shadow: 3px 3px 5px black;
  max-width: 35em;
`;
