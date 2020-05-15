import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import { getRaceById } from '../../../dummyData/races';
import { RaceResult } from '../../../dummyData/results';
import { formatTime } from '../../../utils/date';
import Results from '../../Results';

interface Props {
  results: RaceResult[];
}

const getRaceName = (raceId: string) => getRaceById(raceId)?.name;

const RunnerResults: FunctionComponent<Props> = ({ results }) => {
  const sortedResults = results.sort((a: RaceResult, b: RaceResult) => {
    return b.points - a.points;
  });

  return (
    <Results title="Previous Results" columns={["Race", "Time", "Points"]}>
      {sortedResults.map((result) => (
        <tr key={result.id}>
          <td>
            <Link to={`/race/${result.raceId}`}>
              {getRaceName(result.raceId)}
            </Link>
          </td>
          <td>{result.actualTime && formatTime(result.actualTime)}</td>
          <td>{result.points}</td>
        </tr>
      ))}
    </Results>
  );
};

export default RunnerResults;
