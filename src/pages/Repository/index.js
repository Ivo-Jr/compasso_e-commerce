/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { AiOutlineLaptop } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';

import api from '../../services/api';
import { Container } from '../components/Container';
import { useData } from '../context/Data';
// import {} from '../context/Data';

import { Loading, Owner, RepositoryList, PageAction } from './styles';

export default function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const { login } = match.params;
  const [page, setPage] = useState(1);

  const { userContext } = useData();

  async function handleRepository() {
    if (login) {
      try {
        const response = await api.get(`/users/${login}/repos`, {
          params: {
            per_page: 15,
            page: `${page}`,
          },
        });

        // console.log(response);

        setRepository(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    setLoading(false);
  }

  // function handlePage(action) {
  //   const currentPage = page;

  //   setPage(action === 'back' ? page - 1 : page + 1);

  //   handleRepository();
  // }

  useEffect(() => {
    handleRepository();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading loading={loading}>
          Loading... <FaSpinner color="#fff" size={26} />{' '}
        </Loading>
      ) : (
        <Container>
          <Owner>
            <div className="linkMain">
              <Link to="/">Back to users </Link>
            </div>

            <div className="profile">
              <img src={userContext.avatar} alt={userContext.login} />
              <Link to={`/user/${userContext.login}`}>
                <h1>{userContext.name}</h1>
              </Link>
              <p>{userContext.login}</p>
            </div>
          </Owner>

          <RepositoryList>
            {repository.map(repo => (
              <li key={repo.id}>
                <div className="title">
                  <strong>
                    <a href={repo.html_url} target="_blank">
                      {repo.name}
                    </a>
                  </strong>
                  <p>{repo.description}</p>
                </div>

                <div className="language">
                  {repo.language ? (
                    <>
                      {' '}
                      <AiOutlineLaptop color="orange" size={17} />
                      <small>{repo.language}</small>{' '}
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </li>
            ))}
          </RepositoryList>

          {/* <PageAction>
            <button
              onClick={() => handlePage('back')}
              type="button"
              disabled={page < 2}
            >
              <IoIosArrowBack size={13} />
            </button>
            <span> Page {page} </span>
            <button onClick={() => handlePage('next')} type="button">
              <IoIosArrowBack size={13} className="rotated" />
            </button>
          </PageAction> */}
        </Container>
      )}
    </div>
  );
}
