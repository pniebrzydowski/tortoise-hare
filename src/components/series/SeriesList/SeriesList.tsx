import React, { FunctionComponent } from "react";

import { Series } from "../../../dummyData/series";
import useCollectionDocsData from "../../../firebase/hooks/useCollectionDocsData";
import { isDateInFuture } from "../../../utils/date";
import SeriesSection from "./SeriesSection";

const SeriesList: FunctionComponent = () => {
  const { data: allSeries, loading } = useCollectionDocsData<Series>({
    collection: "series",
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
      {currentSeries.length === 0 ? (
        <section>
          <header>
            <h2>Current Series</h2>
            <p>No current series</p>
          </header>
        </section>
      ) : (
        <SeriesSection series={currentSeries} title="Current Series" />
      )}

      <SeriesSection series={upcomingSeries} title="Upcoming Series" />
      <SeriesSection series={pastSeries} title="Past Series" />
    </>
  );
};

export default SeriesList;
