import React from 'react';
import { Switch } from 'react-router-dom';

import MyRouter from './MyRouter';
import Login from '../pages/login';
import Erro404 from '../pages/erro404';
import Alunos from '../pages/alunos';
import PerfilAlunos from '../pages/perfilAluno';
import Cadastro from '../pages/register';
import CriaAluno from '../pages/criaAluno';
import UserConfigs from '../pages/userConfigs';

export default function Routes() {
  return (
    <Switch>
      <MyRouter exact path="/" component={Alunos} />
      <MyRouter exact path="/register" component={Cadastro} />
      <MyRouter exact path="/userConfigs" component={UserConfigs} isClose />
      <MyRouter exact path="/login" component={Login} />
      <MyRouter exact path="/aluno" component={CriaAluno} isClose />
      <MyRouter exact path="/aluno/:id" component={PerfilAlunos} isClose />
      <MyRouter path="*" component={Erro404} />
    </Switch>
  );
}
