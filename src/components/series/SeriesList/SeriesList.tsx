import React, { FunctionComponent } from 'react';

import allSeries from '../../../dummyData/series';
import { formatDate } from '../../../utils/date';
import ListingItem from '../../ui/ListingItem';

const SeriesList: FunctionComponent = () => {
  return (
    <section>
      <header>
        <h2>All Series</h2>
      </header>
      <ul>
        {allSeries.map((series) => (
          <ListingItem
            key={series.id}
            linkUrl={`/series/${series.id}`}
            title={series.name}
            info={[
              `${formatDate(series.startDate)} - ${formatDate(series.endDate)}`,
            ]}
          />
        ))}
      </ul>
    </section>
  );
};

export default SeriesList;
