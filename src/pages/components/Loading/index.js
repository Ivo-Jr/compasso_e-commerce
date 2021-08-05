/* eslint-disable import/extensions */
import React from 'react';

import { Container, Load } from './styles';

export default function Loading() {
  return (
    <Container>
      <Load>
        <h1>Carregando</h1>
      </Load>
    </Container>
  );
}
