import React, { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';

import RunnerDetail from '../components/runners/RunnerDetail';
import RunnerResults from '../components/runners/RunnerResults';
import { getResultsForRunner, RaceResult } from '../dummyData/results';

const RunnerDetailPage: FunctionComponent = () => {
  const { runnerId } = useParams();

  if (!runnerId) {
    return null;
  }

  const results: RaceResult[] = getResultsForRunner(runnerId) || [];

  return (
    <>
      <RunnerDetail id={runnerId} />
      <RunnerResults results={results} />
    </>
  );
};

export default RunnerDetailPage;
