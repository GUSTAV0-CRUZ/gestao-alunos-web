import React from 'react';
import { Switch } from 'react-router-dom';

import MyRouter from './MyRouter';
import Login from '../pages/login';
import Erro404 from '../pages/erro404';
import Alunos from '../pages/alunos';
import ManipulaAlunos from '../pages/manipulaAlunos';
import Cadastro from '../pages/cadastro';
import CriaAluno from '../pages/criaAluno';

export default function Routes() {
  return (
    <Switch>
      <MyRouter exact path="/" component={Alunos} />
      <MyRouter exact path="/register" component={Cadastro} />
      <MyRouter exact path="/login" component={Login} />
      <MyRouter exact path="/aluno" component={CriaAluno} isClose />
      <MyRouter exact path="/aluno/:id" component={ManipulaAlunos} isClose />
      <MyRouter path="*" component={Erro404} />
    </Switch>
  );
}
