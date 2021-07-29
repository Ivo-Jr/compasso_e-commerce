/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container } from '../components/Container';
import { Form, SubmitButton, List } from './styles';

export default function Main() {
  const [repo, setRepo] = useState([]);
  const [newRepo, setNewRepo] = useState('');
  const [lastRepo, setLastRepo] = useState('');

  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const storageRepo = localStorage.getItem('repositoriesLS');

    if (storageRepo) {
      setRepo(JSON.parse(storageRepo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repositoriesLS', JSON.stringify(repo));
  }, [repo]);

  function handleSubmit(e) {
    e.preventDefault();

    setLastRepo(newRepo);
  }

  useEffect(() => {
    setLoading(true);
    async function handleRepo() {
      try {
        if (lastRepo) {
          const response = await api.get(`/repos/${lastRepo}`);

          const data = {
            name: response.data.full_name,
          };
          setRepo([...repo, newRepo]);
        }
      } catch (err) {
        console.log(err.message);
      }

      setLoading(false);
    }

    setNewRepo('');
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

        <SubmitButton type="button" /* onClick={handleAdd} */ loading={loading}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repo.map(repos => (
          <li key={repos}>
            <span>{repos}</span>
            <Link to={`/repository/${encodeURIComponent(repos)}`}>
              Detalhes
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
