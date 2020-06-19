import React, { FunctionComponent } from 'react';

import { Series } from '../../../dummyData/series';
import useCollectionDocs from '../../../firebase/hooks/useCollectionDocs';
import { formatDate, isDateInFuture } from '../../../utils/date';
import ListingItem from '../../ui/ListingItem';

const SeriesList: FunctionComponent = () => {
  const allSeries = useCollectionDocs({
    collectionName: "series",
    sortField: "startDate",
  });

  if (!allSeries) {
    return null;
  }

  const currentSeries = allSeries.filter((doc) => {
    const series = doc.data() as Series;
    return isDateInFuture(series.endDate) && !isDateInFuture(series.startDate);
  });
  const upcomingSeries = allSeries.filter((doc) => {
    const series = doc.data() as Series;
    return isDateInFuture(series.startDate);
  });
  const pastSeries = allSeries.filter((doc) => {
    const series = doc.data() as Series;
    return !isDateInFuture(series.endDate);
  });

  return (
    <>
      <section>
        <header>
          <h2>Current Series</h2>
          {currentSeries && currentSeries.length > 0 && (
            <ul>
              {currentSeries &&
                currentSeries.map((doc) => {
                  const series: firebase.firestore.DocumentData = doc.data();
                  const id: string = doc.id;

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
          )}
          {currentSeries && currentSeries.length === 0 && (
            <p>No current series</p>
          )}
        </header>
      </section>

      {upcomingSeries && upcomingSeries.length > 0 && (
        <section>
          <header>
            <h2>Upcoming Series</h2>
          </header>
          <ul>
            {upcomingSeries.map((doc) => {
              const series: firebase.firestore.DocumentData = doc.data();
              const id: string = doc.id;

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
      )}

      {pastSeries && pastSeries.length > 0 && (
        <section>
          <header>
            <h2>Past Series</h2>
          </header>
          <ul>
            {pastSeries.map((doc) => {
              const series: firebase.firestore.DocumentData = doc.data();
              const id: string = doc.id;

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
      )}
    </>
  );
};

export default SeriesList;
