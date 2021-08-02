/* eslint-disable import/named */
import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { DataProvider } from './pages/context/userData';

function App() {
  return (
    <>
      <DataProvider>
        <Routes />
        <GlobalStyle />
      </DataProvider>
    </>
  );
}

export default App;
