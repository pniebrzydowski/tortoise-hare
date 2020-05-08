import React, { FunctionComponent } from 'react';

import { getSeriesById } from '../../dummyData/series';

interface Props {
  id: string;
}

const SeriesDetail: FunctionComponent<Props> = ({ id }) => {
  const series = getSeriesById(id);

  if (!series) {
    return null;
  }

  return (
    <article>
      <header>
        <h2>{series.name}</h2>
      </header>
      <p>
        <strong>Start: </strong>
        {series.startDate}
      </p>
      <p>
        <strong>End: </strong>
        {series.endDate}
      </p>
      {series.description && <p>{series.description}</p>}
    </article>
  );
};

export default SeriesDetail;
