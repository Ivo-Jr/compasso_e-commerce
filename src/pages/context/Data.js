/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [userContext, setUserContext] = useState([]);

  return (
    <DataContext.Provider value={{ userContext, setUserContext }}>
      {children}
    </DataContext.Provider>
  );
}

// A partir de agora esse hook useData já retorna o que é necessário para o componente

export function useData() {
  const context = useContext(DataContext);

  const { userContext, setUserContext } = context;

  return {
    userContext,
    setUserContext,
  };
}
