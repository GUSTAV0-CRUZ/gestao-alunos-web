import styled from 'styled-components';
import { textSecDark, colorPrimary } from '../../configs/colors';

export const DivAluno = styled.div`
  margin-top: 1em;
  background-color: ${textSecDark};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.4em;
  margin-bottom: 1.5em;
  border-radius: 30px;
  border: solid ${colorPrimary} 0.2em;
  box-shadow: 3px 3px 5px black;

  p {
    font-size: 1.5em;
  }

  div {
    font-size: 50px;
    display: flex;
    align-content: end;
  }

  img {
    width: 1.2em;
    border-radius: 50%;
    border: solid ${colorPrimary} 0.05em;
    box-shadow: 3px 3px 7px black, -3px -3px 7px white;
  }

  .icone-faUser {
    border: solid ${colorPrimary} 0.03em;
    font-size: 3.7em;
    border-radius: 50%;
    box-shadow: 3px 3px 7px black, -3px -3px 7px white;
  }

  .icone-edit {
    font-size: 1.5em;
    margin-right: 0.2em;
    color: ${colorPrimary};
  }

  @media (max-width: 768px) {
    .p-email {
      display: none;
    }
  }
`;
