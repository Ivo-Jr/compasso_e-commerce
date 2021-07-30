/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner, FaRegTrashAlt } from 'react-icons/fa';

import api from '../../services/api';

import { Container } from '../components/Container';
import { Form, SubmitButton, List } from './styles';
import LinkComponent from '../components/Link';

export default function Main() {
  const [repository, setRepository] = useState([]);
  const [newRepo, setNewRepo] = useState('');
  const [loading, setLoading] = useState(null);

  const [repoArray, setRepoArray] = useState([]);

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const storageRepo = localStorage.getItem('repositoriesLS');

    if (storageRepo) {
      setRepository(JSON.parse(storageRepo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repositoriesLS', JSON.stringify(repository));
  }, [repository]);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
        avatar: response.data.owner.avatar_url,
      };

      setRepository([...repository, data]);
    } catch (err) {
      console.log(err.message);
    }

    setLoading(false);
    setNewRepo('');
  }

  function handleDelete(index) {
    repository.splice(index, 1);

    localStorage.setItem('repositoriesLS', JSON.stringify(repository));
    setUpdate(!update);
  }

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Usuários
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar usuário"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />

        <SubmitButton type="button" loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repository.map((repo, index) => (
          <li key={index}>
            <div>
              <img src={repo.avatar} alt="" />
              <LinkComponent reposLink={repo.name}>
                <span>{repo.name}</span>
              </LinkComponent>
            </div>
            <button type="button">
              <FaRegTrashAlt size={19} onClick={() => handleDelete(index)} />
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
}
