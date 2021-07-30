/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import { Container } from '../components/Container';
// eslint-disable-next-line import/named
import { Loading, Owner, IssuesList } from './styles';

export default function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  async function handleRepository() {
    if (match) {
      const repoName = decodeURIComponent(match.params.repository);

      try {
        const [repositoryAPI, issuesAPI] = await Promise.all([
          api.get(`/repos/${repoName}`),
          api.get(`/repos/${repoName}/issues`, {
            params: {
              state: 'open',
              per_page: 5,
            },
          }),
        ]);

        setRepository(repositoryAPI.data);
        setIssues(issuesAPI.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    handleRepository();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading loading={loading}>
          Carregando... <FaSpinner color="#fff" size={26} />{' '}
        </Loading>
      ) : (
        <Container>
          <Owner>
            <Link to="/">Voltar aos repositórios</Link>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
          </Owner>

          <IssuesList>
            {issues.map(issue => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div>
                  <strong>
                    <a href={issue.html_url}>{issue.title}</a>
                  </strong>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))}
          </IssuesList>
        </Container>
      )}
    </div>
  );
}
