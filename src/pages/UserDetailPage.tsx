import React, { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

const UserDetailPage: FunctionComponent = () => {
  const { userId } = useParams();

  return (
    <>
      <h2>User {userId}</h2>
    </>
  );
};

export default UserDetailPage;
