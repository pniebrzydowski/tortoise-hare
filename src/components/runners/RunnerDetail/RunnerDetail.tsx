import React, { FunctionComponent } from 'react';

import useDoc from '../../../firebase/hooks/useDocData';

interface Props {
  id: string;
}

const RunnerDetail: FunctionComponent<Props> = ({ id }) => {
  const runnerDoc = useDoc("runners", id);

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
