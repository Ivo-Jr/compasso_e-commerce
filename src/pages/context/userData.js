/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [teste, setTeste] = useState('Ivo Junior');

  return (
    <DataContext.Provider value={{ teste, setTeste }}>
      {children}
    </DataContext.Provider>
  );
}

// A partir de agora esse hook useData já retorna o que é necessário para o componente funcionar
export function useData() {
  const context = useContext(DataProvider);
  const { teste, setTeste } = context;

  return { teste, setTeste };
}
