import React, { FunctionComponent } from 'react';

import { RaceResult } from '../../../dummyData/results';
import { getRunnerById } from '../../../dummyData/runners';
import { formatTime } from '../../../utils/date';
import { StyledTable } from '../../ui/Table';

interface Props {
  results: RaceResult[];
}

const getRunnerName = (runnerId: string) => getRunnerById(runnerId)?.name;

const RaceResults: FunctionComponent<Props> = ({ results }) => {
  const sortedResults = results.sort((a: RaceResult, b: RaceResult) => {
    return b.points - a.points;
  });

  return (
    <section>
      <h2>Results</h2>
      <StyledTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {sortedResults.map((result) => (
            <tr key={result.id}>
              <td>{getRunnerName(result.runnerId)}</td>
              <td>{result.actualTime && formatTime(result.actualTime)}</td>
              <td>{result.points}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </section>
  );
};

export default RaceResults;
