import React, { FunctionComponent } from 'react';

import { Race } from '../../../dummyData/races';
import { DEFAULT_DATETIME_FORMAT, formatDate } from '../../../utils/date';
import ListingItem from '../../ui/ListingItem';

interface Props {
  races: Race[];
}

const RaceList: FunctionComponent<Props> = ({ races }) => {
  return (
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
  );
};

export default RaceList;
