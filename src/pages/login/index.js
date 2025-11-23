import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import { Container } from '../../styles/styledGlobal';
import * as actions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(actions.clicaBotao);
  }
  return (
    <Container>
      <Title>
        Login
      </Title>
      <p>lorec dcedwcde wcedcedc vfmvfjnfj cfdcdsc dcdcd</p>
      <button type="button" onClick={handleClick}>Enviar</button>
    </Container>
  );
}
