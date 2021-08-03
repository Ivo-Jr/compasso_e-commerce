/* eslint-disable import/named */
import React from 'react';

import DataProvider from './pages/context/Data';
import RepositoryProvider from './pages/context/Repository';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <RepositoryProvider>
        <DataProvider>
          <Routes />
          <GlobalStyle />
        </DataProvider>
      </RepositoryProvider>
    </>
  );
}

export default App;
