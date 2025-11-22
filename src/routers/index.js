import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login';
import Erro404 from '../pages/erro404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="*" component={Erro404} />
    </Switch>
  );
}
