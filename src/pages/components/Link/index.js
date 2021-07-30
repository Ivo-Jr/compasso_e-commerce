/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

export default function LinkComponent({ reposLink, children }) {
  return (
    // <Container>
    <Link to={`/repository/${encodeURIComponent(reposLink)}`}>{children}</Link>
    // </Container>
  );
}
