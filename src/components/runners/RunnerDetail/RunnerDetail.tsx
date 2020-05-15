import React, { FunctionComponent } from 'react';

import { getRunnerById } from '../../../dummyData/runners';

interface Props {
  id: string;
}

const RunnerDetail: FunctionComponent<Props> = ({ id }) => {
  const runner = getRunnerById(id);

  if (!runner) {
    return null;
  }

  return (
    <header>
      <h2>{runner.name}</h2>
    </header>
  );
};

export default RunnerDetail;
