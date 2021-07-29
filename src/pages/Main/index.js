/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  const [repo, setRepo] = useState([]);
  const [newRepo, setNewRepo] = useState('');
  const [lastRepo, setLastRepo] = useState('');

  function handleAdd() {
    setRepo([...repo, newRepo]);
    setLastRepo(newRepo);
    setNewRepo('');
  }

  function handleSubmit(e) {
    e.preventDefault();

    // console.log(lastRepo);
  }

  useEffect(() => {
    async function handleRepo() {
      try {
        if (lastRepo) {
          const response = await api.get(`/repos/${lastRepo}`);

          const data = {
            name: response.data.full_name,
          };
          console.log(response.data);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    handleRepo();
  }, [lastRepo]);

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar repositório"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />

        <SubmitButton type="button" onClick={handleAdd}>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
