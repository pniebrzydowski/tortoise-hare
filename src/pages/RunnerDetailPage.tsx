import React, { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

import RunnerResults from '../components/results/RunnerResults';
import UpcomingRaces from '../components/results/UpcomingRaces';
import RunnerDetail from '../components/runners/RunnerDetail';
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
      <UpcomingRaces results={upcoming} />
      <RunnerResults results={finished} />
    </>
  );
};

export default RunnerDetailPage;
