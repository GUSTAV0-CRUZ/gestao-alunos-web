import React from 'react';
import { Switch } from 'react-router-dom';

import MyRouter from './MyRouter';
import Login from '../pages/login';
import Erro404 from '../pages/erro404';

export default function Routes() {
  return (
    <Switch>
      <MyRouter exact path="/login" component={Login} />
      <MyRouter path="*" component={Erro404} />
    </Switch>
  );
}
