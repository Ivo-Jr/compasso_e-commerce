/* eslint-disable import/extensions */
import React from 'react';

import { ImSpinner3 } from 'react-icons/im';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <ImSpinner3 color="#333" size={45} />
      <h1>Loading...</h1>
    </Container>
  );
}
