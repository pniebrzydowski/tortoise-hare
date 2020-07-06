import React, { FunctionComponent } from "react";

import { Series } from "../../../dummyData/series";
import useCollectionDocsData from "../../../firebase/hooks/useCollectionDocsData";
import { formatDate, isDateInFuture } from "../../../utils/date";
import ListingItem from "../../ui/ListingItem";

const SeriesList: FunctionComponent = () => {
  const { data: allSeries, loading } = useCollectionDocsData<Series>({
    collectionName: "series",
    sortField: "startDate",
  });

  if (!allSeries || loading) {
    return null;
  }

  const currentSeries: Series[] = [];
  const upcomingSeries: Series[] = [];
  const pastSeries: Series[] = [];

  allSeries.forEach((series) => {
    if (isDateInFuture(series.endDate) && !isDateInFuture(series.startDate)) {
      currentSeries.push(series);
    } else if (isDateInFuture(series.startDate)) {
      upcomingSeries.push(series);
    } else {
      pastSeries.push(series);
    }
  });

  return (
    <>
      <section>
        <header>
          <h2>Current Series</h2>
          {currentSeries.length > 0 && (
            <ul>
              {currentSeries &&
                currentSeries.map((series) => (
                  <ListingItem
                    key={series.id}
                    linkUrl={`/series/${series.id}`}
                    title={series.name}
                    info={[
                      `${formatDate(series.startDate)} - ${formatDate(
                        series.endDate
                      )}`,
                    ]}
                  />
                ))}
            </ul>
          )}
          {currentSeries.length === 0 && <p>No current series</p>}
        </header>
      </section>

      {upcomingSeries.length > 0 && (
        <section>
          <header>
            <h2>Upcoming Series</h2>
          </header>
          <ul>
            {upcomingSeries.map((series) => (
              <ListingItem
                key={series.id}
                linkUrl={`/series/${series.id}`}
                title={series.name}
                info={[
                  `${formatDate(series.startDate)} - ${formatDate(
                    series.endDate
                  )}`,
                ]}
              />
            ))}
          </ul>
        </section>
      )}

      {pastSeries.length > 0 && (
        <section>
          <header>
            <h2>Past Series</h2>
          </header>
          <ul>
            {pastSeries.map((series) => (
              <ListingItem
                key={series.id}
                linkUrl={`/series/${series.id}`}
                title={series.name}
                info={[
                  `${formatDate(series.startDate)} - ${formatDate(
                    series.endDate
                  )}`,
                ]}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default SeriesList;
