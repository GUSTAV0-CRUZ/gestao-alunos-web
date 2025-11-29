import styled from 'styled-components';

import * as color from '../../configs/colors';

export const ContainerConfigs = styled.div`
  border: 5px solid ${color.bgDark};
  width: 100%;
  height: 23em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button:hover {
    font-size: 16px;
    transition: all 0.5s ease 0.1s;
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid ${color.bgDark};
  width: 85%;
  height: 300px;
  padding: 0.4em;
  align-items: center;

  input {
    display: block;
    font-size: 80%;
  }

  label {
    font-size: 135%;
    display: block;
    margin-top: 2.6vh;
  }

  button {
    font-size: 15px;
    margin-top: 4vh;
    width: 15em;
  }

  `;

export const DivButton = styled.div`
  height: 60px;

  button {
    font-size: 15px;
    margin: 10px;
    width: 35vw;
    height: 28px;
  }

  .btn-sair-conta {
    background-color: ${color.colorWarning};
  }
  .btn-excluir-conta {
    background-color: ${color.colorError};
  }
  `;
