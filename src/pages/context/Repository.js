/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const DataRepository = createContext();

export default function RepositoryProvider({ children }) {
  const [repositoryContext, setRepositoryContext] = useState([]);

  return (
    <DataRepository.Provider
      value={{ repositoryContext, setRepositoryContext }}
    >
      {children}
    </DataRepository.Provider>
  );
}

export function useRepository() {
  const contex = useContext(DataRepository);
  const { repositoryContext, setRepositoryContext } = contex;
  return { repositoryContext, setRepositoryContext };
}
