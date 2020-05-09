import React, { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

import SeriesDetail from '../components/series/SeriesDetail';

const SeriesDetailPage: FunctionComponent = () => {
  const { seriesId } = useParams();

  if (!seriesId) {
    return null;
  }

  return (
    <>
      <SeriesDetail id={seriesId} />
    </>
  );
};

export default SeriesDetailPage;
