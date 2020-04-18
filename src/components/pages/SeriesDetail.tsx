import React, { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

const SeriesDetail: FunctionComponent = () => {
  const { seriesId } = useParams();

  return (
    <>
      <h2>Series {seriesId}</h2>
    </>
  );
};

export default SeriesDetail;
