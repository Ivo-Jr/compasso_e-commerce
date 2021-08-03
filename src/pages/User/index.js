/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdPeople } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai';

import { useData } from '../context/Data';
import { useRepository } from '../context/Repository';

import { Card } from './styles';

export default function User({ match }) {
  const { userContext } = useData();
  const { repositoryContext } = useRepository();
  const { url } = match;

  return (
    <div>
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
            <strong>2</strong>
          </span>
        </div>

        <div className="links">
          <Link to={`${url}/repo`}>Repository</Link>
          <Link to="/">Starred</Link>
        </div>
      </Card>
    </div>
  );
}
