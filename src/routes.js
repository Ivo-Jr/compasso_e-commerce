import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';
import Starred from './pages/Starred';
import Experimento from './pages/Experimento';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
        <Route path="/starred" component={Starred} />
        <Route path="/experimento" component={Experimento} />
      </Switch>
    </BrowserRouter>
  );
}
