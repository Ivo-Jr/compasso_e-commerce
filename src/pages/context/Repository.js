/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const DataStarred = createContext();

export default function RepositoryProvider({ children }) {
  const [starredContext, setStarredContex] = useState([]);

  return (
    <DataStarred.Provider value={{ starredContext, setStarredContex }}>
      {children}
    </DataStarred.Provider>
  );
}

export function useStarred() {
  const contex = useContext(DataStarred);
  const { starredContext, setStarredContex } = contex;
  return { starredContext, setStarredContex };
}
