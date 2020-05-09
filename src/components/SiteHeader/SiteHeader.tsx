import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

const SiteHeader: FunctionComponent = () => {
  return (
    <header>
      <h1>
        <Link to="/">Tortoise and Hare</Link>
      </h1>
    </header>
  );
};

export default SiteHeader;
