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

export const Divbackground = styled.div`
  position: absolute;
  background-color: #00000087;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0;
  left: 0;

  p {
    font-size: 150%;
    color: white;
  }

  button {
    background-color: ${color.colorPrimary};
    width: 35vw;
    height: 28px;
  }
`;
