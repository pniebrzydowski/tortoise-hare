import React, { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

const UserDetail: FunctionComponent = () => {
  const { userId } = useParams();

  return (
    <>
      <h2>User {userId}</h2>
    </>
  );
};

export default UserDetail;
