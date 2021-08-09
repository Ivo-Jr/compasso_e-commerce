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

  div:first-child {
    border-radius: 50%;
    animation: rotate 1s cubic-bezier(0.755, 0.05, 0.855, 0.06) infinite;
    width: 40px;
    height: 40px;
    border: 4px solid transparent;
    border-top-color: #333;
    position: absolute;
  }

  div:last-child {
    border-radius: 50%;
    animation: rotate 1s cubic-bezier(0.95, 0.085, 0.8, 0.53) infinite;
    width: 40px;
    height: 40px;
    border: 4px solid transparent;
    border-top-color: #333;
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;
