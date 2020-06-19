import React, { FunctionComponent } from 'react';

import useCollectionDocs from '../../../firebase/hooks/useCollectionDocs';
import { formatDate } from '../../../utils/date';
import ListingItem from '../../ui/ListingItem';

const SeriesList: FunctionComponent = () => {
  const allSeries = useCollectionDocs("series", "startDate");

  return (
    <section>
      <header>
        <h2>All Series</h2>
      </header>
      {allSeries && !allSeries.length && <p>No series found</p>}
      <ul>
        {allSeries &&
          allSeries.map((doc) => {
            const series: firebase.firestore.DocumentData = doc.data();
            const id: string = doc.id;

            console.log(series);

            return (
              <ListingItem
                key={id}
                linkUrl={`/series/${id}`}
                title={series.name}
                info={[
                  `${formatDate(series.startDate)} - ${formatDate(
                    series.endDate
                  )}`,
                ]}
              />
            );
          })}
      </ul>
    </section>
  );
};

export default SeriesList;
