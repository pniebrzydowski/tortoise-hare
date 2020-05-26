import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import { RaceResult } from '../../../dummyData/results';
import { getRunnerName } from '../../../dummyData/runners';
import { formatTime } from '../../../utils/date';
import Results from '../../Results';

interface Props {
  results: RaceResult[];
}

const UpcomingRunners: FunctionComponent<Props> = ({ results }) => {
  const sortedResults = results.sort((a: RaceResult, b: RaceResult) => {
    if (!a.predictedTime || !b.predictedTime) {
      return 0;
    }
    return b.predictedTime - a.predictedTime;
  });

  return (
    <Results title="Runners" columns={["Name", "Predicted Time"]}>
      {sortedResults.map((result) => (
        <tr key={result.id}>
          <td>
            <Link to={`/runner/${result.runnerId}`}>
              {getRunnerName(result.runnerId)}
            </Link>
          </td>
          <td>{result.predictedTime && formatTime(result.predictedTime)}</td>
        </tr>
      ))}
    </Results>
  );
};

export default UpcomingRunners;
