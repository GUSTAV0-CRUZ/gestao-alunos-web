import styled from 'styled-components';

import * as color from '../../configs/colors';

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
`;

export const DivButton = styled.div`
  height: 60px;

  button {
    font-size: 15px;
    margin: 10px;
    width: 35vw;
    height: 28px;
  }

  .btn-cancelar {
    background-color: ${color.colorPrimary};
  }
  .btn-prosseguir {
    background-color: ${color.colorError};
  }
`;

export const DivbackgroundBtn = styled.div`
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
