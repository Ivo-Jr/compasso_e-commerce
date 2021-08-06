/* eslint-disable no-unused-vars */
import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  position: absolute;
  left: 45%;
  top: 45%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  h1 {
    font-size: 24px;
    margin-top: 10px;
    font-style: italic;
  }

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
