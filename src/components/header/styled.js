import styled from 'styled-components';
import { colorPrimary } from '../../configs/colors';

export const Nav = styled.nav`
  font-size: 30px;
  background: ${colorPrimary};
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: aliceblue;
    margin: 0 2vw;
  }

  .cria-aluno {
    font-size: 1.3em;
  }
`;
