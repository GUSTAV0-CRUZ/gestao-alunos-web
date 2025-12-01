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
    margin-top: 1vh;
    font-size: 10em;
    display: flex;
    align-content: end;
    margin-bottom: 3vh;
  }

  img {
    width: 1.2em;
    border-radius: 50%;
    border: solid ${colors.colorPrimary} 0.05em;
    box-shadow: 3px 3px 7px black, -3px -3px 7px white;
  }


  label {
    margin-top: 0.7vh;
    display: flex;
    font-size: 1.5em;
    font-family: 'Courier New', Courier, monospace;
    box-shadow: 1px 1px 2px black, -2px -2px 4px black;
    align-items: center;
    justify-content: center;
    padding: 0.2em;


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

    .btn-edit-exlude {
      font-size: 15px;
      margin: 1vw;
      width: 34vw;
      height: 28px;
    }

    .btn-excluir-aluno {
      background-color: ${colors.colorError};
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
