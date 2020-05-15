import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import { getRaceById } from '../../../dummyData/races';
import { RaceResult } from '../../../dummyData/results';
import { formatTime, sortByDate } from '../../../utils/date';
import { StyledTable } from '../../ui/Table';

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
    <section>
      <h2>Upcoming Races</h2>
      <StyledTable>
        <thead>
          <tr>
            <th>Race</th>
            <th>Start Time</th>
            <th>Predicted Time</th>
          </tr>
        </thead>
        <tbody>
          {sortedResults.map((result) => (
            <tr key={result.id}>
              <td>
                <Link to={`/race/${result.raceId}`}>
                  {getRaceName(result.raceId)}
                </Link>
              </td>
              <td>{getRaceStart(result.raceId)}</td>
              <td>
                {result.predictedTime && formatTime(result.predictedTime)}
              </td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </section>
  );
};

export default UpcomingRaces;
