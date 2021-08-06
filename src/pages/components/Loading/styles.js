/* eslint-disable no-unused-vars */
import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  h1 {
    font-size: 24px;
    margin-top: 10px;
    font-style: italic;
    color: #373e47;
    margin-bottom: 5px;

    /* fundo gradiente */
    /* background-image: linear-gradient(69deg, #333, #fff); */
    /* Fundo gradiente dentro do texto */
    /* background-clip: text; */
    /* -webkit-background-clip: text; */
    /* cor do texto */
    /* color: transparent; */
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    border-radius: 50%;
    animation: rotate 1s infinite;
    width: 30px;
    height: 30px;
    border: 6px solid #373e47;
    border-top-color: transparent;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
