import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import { getRaceById } from '../../../dummyData/races';
import { RaceResult } from '../../../dummyData/results';
import {
  DEFAULT_TIME_FORMAT,
  formatDate,
  formattedDateWithTime,
  formatTime,
  sortByDate
} from '../../../utils/date';
import Results from '../../Results';

interface Props {
  results: RaceResult[];
}

const getRaceName = (raceId: string): string | undefined =>
  getRaceById(raceId)?.name;
const getRaceStart = (raceId: string): string | undefined =>
  getRaceById(raceId)?.startTime;

const UpcomingRaces: FunctionComponent<Props> = ({ results }) => {
  const sortedResults = results.sort((a: RaceResult, b: RaceResult) => {
    const startA = getRaceStart(a.raceId);
    const startB = getRaceStart(b.raceId);
    if (!startA || !startB) {
      return 0;
    }
    return sortByDate(startA, startB);
  });

  return (
    <Results
      title="Upcoming Races"
      columns={["Race", "Race Start", "Predicted Time", "Your Start"]}
    >
      {sortedResults.map((result) => {
        const raceStart = getRaceStart(result.raceId);

        return (
          <tr key={result.id}>
            <td>
              <Link to={`/race/${result.raceId}`}>
                {getRaceName(result.raceId)}
              </Link>
            </td>
            <td>{raceStart && formattedDateWithTime(raceStart)}</td>
            <td>{result.predictedTime && formatTime(result.predictedTime)}</td>
            <td>{raceStart && formatDate(raceStart, DEFAULT_TIME_FORMAT)}</td>
          </tr>
        );
      })}
    </Results>
  );
};

export default UpcomingRaces;
