import React, { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

const RaceDetailPage: FunctionComponent = () => {
  const { raceId } = useParams();

  return (
    <>
      <h2>Race {raceId}</h2>
    </>
  );
};

export default RaceDetailPage;
