import React, { FunctionComponent } from 'react';

import { Runner } from '../../../dummyData/runners';
import useDoc from '../../../firebase/hooks/useDocData';

interface Props {
  id: string;
}

const RunnerDetail: FunctionComponent<Props> = ({ id }) => {
  const runnerDoc = useDoc({ collection: "runners", id }) as Runner;

  if (!runnerDoc) {
    return null;
  }

  return (
    <header>
      <h2>{runnerDoc.name}</h2>
    </header>
  );
};

export default RunnerDetail;
