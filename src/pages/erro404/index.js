import React from 'react';

import { Container } from '../../styles/styledGlobal';
import { DivConteudo } from './styled';

export default function Erro404() {
  return (
    <Container>
      <DivConteudo>
        <h1>Erro 404</h1>
        <p>Página não encontrada</p>
      </DivConteudo>
    </Container>
  );
}
