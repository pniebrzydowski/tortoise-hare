import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

const HomePage: FunctionComponent = () => {
  return (
    <>
      <h2>What is it?</h2>
      <Link to="/series">View All Series</Link>
    </>
  );
};

export default HomePage;
