import styled from 'styled-components';

export const DivLoad = styled.div`
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

  @keyframes rotacao {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .icone-carregamento {
    animation: rotacao 2s linear infinite;
    font-size: 600%;
    color: white;
  }

  p {
    font-size: 180%;
    color: white;
  }
`;
