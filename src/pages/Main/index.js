/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */

// https://api.github.com/users/NOME_USUARIO;

import React, { useEffect, useState } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner, FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import User from '../User';
import api from '../../services/api';
import { Container } from '../components/Container';
import LinkComponent from '../components/Link';
import { useData } from '../context/Data';

import { Form, SubmitButton, List } from './styles';

export default function Main() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');
  const [loading, setLoading] = useState(null);
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState(null);

  const { userContext, setUserContext } = useData([]);

  useEffect(() => {
    const storageRepo = localStorage.getItem('repositoriesLS');

    if (storageRepo) {
      setUsers(JSON.parse(storageRepo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repositoriesLS', JSON.stringify(users));
  }, [users]);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await api.get(`/users/${newUser}`);

      const data = {
        avatar: response.data.avatar_url,
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        followers: response.data.followers,
        following: response.data.following,
        stars: 'n',
      };

      const userValidation = users.map(user => user.name);

      if (userValidation.includes(data.name)) {
        alarmUser('duplicate');
        throw new Error('Duplicate user');
      }

      if (!data) {
        alarmUser('doesNotExists');
        throw new Error('User does not exists');
      }

      setUsers([...users, data]);
    } catch (err) {
      console.log(err.message);
    }

    setLoading(false);
    setNewUser('');
  }

  function handleDelete(index) {
    users.splice(index, 1);

    localStorage.setItem('repositoriesLS', JSON.stringify(users));
    setUpdate(!update);
  }

  function alarmUser(param) {
    if (param === 'duplicate') {
      alert('User has already been added');
    } else {
      alert('User does not exists');
    }
  }

  return (
    <Container error={false}>
      <h1>
        <FaGithubAlt />
        Search Users
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for user login"
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
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
        {users.map((user, index) => (
          <li key={index}>
            <div>
              <img src={user.avatar} alt="user" />
              {/*  <LinkComponent reposLink={user.name}>
                <span>{user.name}</span>
              </LinkComponent> */}
              {/*               <Link to="/user" onClick={() => setUserContext(user)}>
                <span>{user.name}</span>
              </Link> */}
              <Link
                to={`/user/${encodeURIComponent(user.login)}`}
                onClick={() => setUserContext(user)}
              >
                <span>{user.name}</span>
              </Link>
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
