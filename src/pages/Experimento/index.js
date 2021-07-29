/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  const [repo, setRepo] = useState([]);
  const [newRepo, setNewRepo] = useState('');

  function handleAdd() {
    setRepo([...repo, newRepo]);
    setNewRepo('');
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  // }

  useEffect(() => {
    const storageRepo = localStorage.getItem('repoLocaStorage');

    if (storageRepo) {
      setRepo(JSON.parse(storageRepo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repoLocaStorage', JSON.stringify(repo));
  }, [repo]);

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Teste
      </h1>

      <ul>
        {repo.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      {/* <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar repositório"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />

        <SubmitButton type="button" onClick={handleAdd}>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form> */}

      <input value={newRepo} onChange={e => setNewRepo(e.target.value)} />

      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </Container>
  );
}
