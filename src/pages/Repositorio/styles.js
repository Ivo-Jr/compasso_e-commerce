import styled, { keyframes, css } from 'styled-components';

export const Loading = styled.div.attrs({})`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
        margin-left: 20px;
      }
    `}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #fe8100;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const RepositoryList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    justify-content: space-between;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }
  }

  .title {
    max-width: 480px;
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #fe8100;
          transition: 0.2s;
        }
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }

  .language {
    width: 110px;

    display: flex;
    justify-content: left;
    align-items: center;
  }
`;

export const PageAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  button {
    margin: 10px;
    padding: 2px;
    border-radius: 3px;
    border: 1px solid;
    cursor: pointer;
    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    .rotated {
      transform: rotate(180deg);
    }
  }
  span {
    font-size: 12px;
    font-weight: bold;
  }
  button {
    rotate: 90;
  }
`;
