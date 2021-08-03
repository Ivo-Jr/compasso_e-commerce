import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Starred from './pages/Starred';
import User from './pages/User';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/starred" exact component={Starred} />
        <Route path="/user/:user" exact component={User} />
        <Route path="/:user/:login/:repo" exact component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
