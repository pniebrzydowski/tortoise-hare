import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import { RaceResult } from '../../../dummyData/results';
import { getRunnerName } from '../../../dummyData/runners';
import {
  DEFAULT_TIME_FORMAT,
  formatDate,
  formatTime
} from '../../../utils/date';
import Results from '../../Results';

interface Props {
  results: RaceResult[];
  raceStartTime: string;
}

const UpcomingRunners: FunctionComponent<Props> = ({
  results,
  raceStartTime,
}) => {
  const sortedResults = results.sort((a: RaceResult, b: RaceResult) => {
    if (!a.predictedTime || !b.predictedTime) {
      return 0;
    }
    return a.predictedTime - b.predictedTime;
  });

  return (
    <Results title="Runners" columns={["Name", "Predicted Time", "Start Time"]}>
      {sortedResults.map((result) => (
        <tr key={result.id}>
          <td>
            <Link to={`/runner/${result.runnerId}`}>
              {getRunnerName(result.runnerId)}
            </Link>
          </td>
          <td>{result.predictedTime && formatTime(result.predictedTime)}</td>
          <td>
            {raceStartTime && formatDate(raceStartTime, DEFAULT_TIME_FORMAT)}
          </td>
        </tr>
      ))}
    </Results>
  );
};

export default UpcomingRunners;
