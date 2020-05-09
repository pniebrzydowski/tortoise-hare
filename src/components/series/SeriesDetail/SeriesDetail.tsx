import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import { getSeriesById } from '../../../dummyData/series';
import { formatDate } from '../../../utils/date';

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
        <Link to="/series">Back to All Series</Link>
      </header>
      <p>
        <strong>Start: </strong>
        {formatDate(series.startDate)}
      </p>
      <p>
        <strong>End: </strong>
        {formatDate(series.endDate)}
      </p>
      {series.description && <p>{series.description}</p>}
    </article>
  );
};

export default SeriesDetail;
