import styled from 'styled-components';

export const Card = styled.div`
  max-width: 400px;
  max-height: 600px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  padding: 30px;
  margin: 80px auto;

  .avatar {
    display: flex;
    justify-content: center;
    flex-direction: center;

    img {
      margin: 15px 0 5px;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 3px solid #fe8100;
    }
  }

  .linkMain {
    align-items: center;
    text-align: right;

    a {
      color: #768390;
      text-decoration: none;

      &:hover {
        transition: 0.2s;
        color: #ff304a;
      }
    }
  }

  .title {
    margin: 10px 0px;
    display: flex;
    justify-content: left;
    flex-direction: column;

    h1 {
      color: #333;
      font-size: 26px;
      line-height: 1.25;
    }

    span {
      color: #768390;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px;
    }
  }

  p {
    margin: 5px 0 10px;
    font-size: 16px;
  }

  .follow {
    display: flex;

    color: #768390;
    margin: 5px 0 10px;

    span {
      display: flex;
      align-items: center;

      &:first-child {
        margin-right: 0.5rem;
        padding-right: 0.5rem;
        position: relative;

        &::after {
          content: '';
          width: 3px;
          height: 3px;
          border-radius: 2px;
          background: #333;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(50%, -50%);
        }
      }

      &:last-child {
        margin-left: 0.5rem;
      }

      svg {
        margin-right: 3px;
      }
    }

    strong {
      margin-right: 3px;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      margin-top: 10px;

      color: #fff;
      text-decoration: none;

      padding: 3px 10px;
      border: 3px solid #333;
      border-radius: 4px;
      background: #373e47;

      &:first-child {
        margin-right: 65px;
      }

      &:hover {
        transition: 0.2s;
        opacity: 0.8;
      }
    }
  }
`;
