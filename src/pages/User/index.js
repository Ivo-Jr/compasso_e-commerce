/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// https://api.github.com/users/NOME_USUARIO/starred

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdPeople } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai';

import api from '../../services/api';
import Loading from '../components/Loading';
import { useData } from '../context/Data';
import { useStarred } from '../context/Repository';

import { Card } from './styles';

export default function User({ match }) {
  const { userContext } = useData();
  const { starredContext, setStarredContex } = useStarred([]);
  const [loading, setLoading] = useState(true);
  const { url } = match;

  async function handleStarred() {
    const response = await api.get(`users/${userContext.login}/starred`);

    const data = response.data.map(item => ({
      name: item.name,
      description: item.description,
      language: item.language,
      pushed_at: item.pushed_at,
      forks: item.forks,
      stargazers: item.stargazers_count,
    }));

    setStarredContex(data);
    setLoading(false);
  }

  useEffect(() => {
    handleStarred();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Card>
          <div className="linkMain">
            <Link to="/">Voltar para buscas</Link>
          </div>

          <div className="avatar">
            <img src={userContext.avatar} alt="avatar" />
          </div>

          <div className="title">
            <h1>{userContext.name}</h1>
            <span>{userContext.login}</span>
          </div>

          <p>{userContext.bio}</p>

          <div className="follow">
            <span>
              <IoMdPeople size={15} />
              <strong>{userContext.followers}</strong> followers
            </span>
            <span>
              <strong>{userContext.following}</strong> following
            </span>
            <span>
              <AiOutlineStar size={15} />
              <strong>{starredContext.length}</strong>
            </span>
          </div>

          <div className="links">
            <Link to={`${url}/repo`}>Repository</Link>
            <Link to={`${url}/starred`}>Starred</Link>
          </div>
        </Card>
      )}
    </div>
  );
}
