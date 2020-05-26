import React, { FunctionComponent } from 'react';

import { getStandingsForSeries, Standing } from '../../../dummyData/series';
import Results from '../../Results';

interface Props {
  seriesId: string;
}

const SeriesStandings: FunctionComponent<Props> = ({ seriesId }) => {
  const standings: Standing[] = getStandingsForSeries(seriesId);

  if (!standings.length) {
    return null;
  }

  return (
    <Results title="Current Standings" columns={["Name", "Points"]}>
      {standings.map((entry) => (
        <tr key={entry.runnerId}>
          <td>{entry.runnerName}</td>
          <td>{entry.points}</td>
        </tr>
      ))}
    </Results>
  );
};

export default SeriesStandings;
