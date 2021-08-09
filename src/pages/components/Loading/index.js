/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';

import { Container, Loader } from './styles';

export default function Loading() {
  return (
    <Container>
      <h1>Loading...</h1>
      <Loader>
        <section>
          <div />
          <div />
        </section>
      </Loader>
    </Container>
  );
}
