import React, { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

import RunnerDetail from '../components/runners/RunnerDetail';
import RunnerResults from '../components/runners/RunnerResults';
import UpcomingRaces from '../components/runners/UpcomingRaces';
import { getResultsForRunner, RaceResult } from '../dummyData/results';

const RunnerDetailPage: FunctionComponent = () => {
  const { runnerId } = useParams();

  if (!runnerId) {
    return null;
  }

  const results: RaceResult[] = getResultsForRunner(runnerId) || [];
  const finished = results.filter((result) => !!result.actualTime);
  const upcoming = results.filter((result) => !result.actualTime);

  return (
    <>
      <RunnerDetail id={runnerId} />
      {upcoming.length > 0 && <UpcomingRaces results={upcoming} />}
      {finished.length > 0 && <RunnerResults results={finished} />}
    </>
  );
};

export default RunnerDetailPage;
