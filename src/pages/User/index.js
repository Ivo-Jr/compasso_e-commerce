/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdPeople } from 'react-icons/io';
import { AiOutlineStar } from 'react-icons/ai';

import { useData } from '../context/userData';

import { Card } from './styles';

export default function User() {
  const { teste, setTeste } = useData();

  return (
    <div>
      <Card>
        <div className="linkMain">
          <Link to="/">Voltar para buscas</Link>
        </div>
        <img src="" alt="" />
        <div className="title">
          <h1>Ivo Júnior</h1>
          <span>Ivo-Jr</span>
        </div>

        <p>Developer Full Stack! | React JS | React Native | NodeJS</p>

        <div className="follow">
          <span>
            <IoMdPeople size={15} />
            <strong>5</strong> followers
          </span>
          <span>
            <strong>6</strong> following
          </span>
          <span>
            <AiOutlineStar size={15} />
            <strong>2</strong>
          </span>
        </div>

        <div className="links">
          <Link to="/">Repository</Link>
          <Link to="/">Starred</Link>
        </div>
      </Card>
    </div>
  );
}
