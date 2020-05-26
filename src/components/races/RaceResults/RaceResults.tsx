import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import { RaceResult } from '../../../dummyData/results';
import { getRunnerName } from '../../../dummyData/runners';
import { formatTime } from '../../../utils/date';
import Results from '../../Results';

interface Props {
  results: RaceResult[];
}

const RaceResults: FunctionComponent<Props> = ({ results }) => {
  const sortedResults = results.sort((a: RaceResult, b: RaceResult) => {
    return b.points - a.points;
  });

  return (
    <Results title="Results" columns={["Name", "Time", "Points"]}>
      {sortedResults.map((result) => (
        <tr key={result.id}>
          <td>
            <Link to={`/runner/${result.runnerId}`}>
              {getRunnerName(result.runnerId)}
            </Link>
          </td>
          <td>{result.actualTime && formatTime(result.actualTime)}</td>
          <td>{result.points}</td>
        </tr>
      ))}
    </Results>
  );
};

export default RaceResults;
