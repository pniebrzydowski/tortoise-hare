import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';

import { RaceResult } from '../../../dummyData/results';
import { getRunnerById } from '../../../dummyData/runners';
import { formatTime } from '../../../utils/date';
import { StyledTable } from '../../ui/Table';

interface Props {
  results: RaceResult[];
}

const getRunnerName = (runnerId: string) => getRunnerById(runnerId)?.name;

const UpcomingRunners: FunctionComponent<Props> = ({ results }) => {
  const sortedResults = results.sort((a: RaceResult, b: RaceResult) => {
    if (!a.predictedTime || !b.predictedTime) {
      return 0;
    }
    return b.predictedTime - a.predictedTime;
  });

  return (
    <section>
      <h2>Upcoming Races</h2>
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Predicted Time</th>
          </tr>
        </thead>
        <tbody>
          {sortedResults.map((result) => (
            <tr key={result.id}>
              <td>
                <Link to={`/runner/${result.runnerId}`}>
                  {getRunnerName(result.runnerId)}
                </Link>
              </td>
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

export default UpcomingRunners;
