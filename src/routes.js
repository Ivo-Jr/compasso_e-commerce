import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';
import Starred from './pages/Starred';
import Experimento from './pages/Experimento';
import User from './pages/User';
import Repositorio from './pages/Repositorio';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" exact component={Repository} />
        <Route path="/experimento" exact component={Experimento} />
        <Route path="/starred" exact component={Starred} />
        <Route path="/user/:user" exact component={User} />
        <Route path="/:user/:login/:repo" exact component={Repositorio} />
      </Switch>
    </BrowserRouter>
  );
}
