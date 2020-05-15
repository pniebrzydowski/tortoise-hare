import React, { FunctionComponent } from 'react';

import { getRacesForSeries, Race } from '../../../dummyData/races';
import { DEFAULT_DATETIME_FORMAT, formatDate } from '../../../utils/date';
import ListingItem from '../../ui/ListingItem';

interface Props {
  seriesId: string;
}

const RaceList: FunctionComponent<Props> = ({ seriesId }) => {
  const races: Race[] | undefined = getRacesForSeries(seriesId);

  if (!races) {
    return null;
  }

  return (
    <section>
      <header>
        <h2>Races</h2>
      </header>
      <ul>
        {races.map((race) => (
          <ListingItem
            key={race.id}
            linkUrl={`/race/${race.id}`}
            linkText={race.results && "Results"}
            title={race.name}
            info={[
              formatDate(race.startTime, DEFAULT_DATETIME_FORMAT),
              `${race.distance} ${race.unit}`,
            ]}
          />
        ))}
      </ul>
    </section>
  );
};

export default RaceList;
