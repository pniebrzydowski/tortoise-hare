import React, { FunctionComponent } from 'react';

import NewSeries from '../components/series/NewSeries';
import SeriesList from '../components/series/SeriesList';

const SeriesListPage: FunctionComponent = () => {
  return (
    <>
      <SeriesList />
      <NewSeries />
    </>
  );
};

export default SeriesListPage;
