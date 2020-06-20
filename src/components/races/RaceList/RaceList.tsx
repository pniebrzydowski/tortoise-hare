import React, { FunctionComponent } from 'react';

import { DEFAULT_DATETIME_FORMAT, formatDate } from '../../../utils/date';
import ListingItem from '../../ui/ListingItem';

interface Props {
  races: firebase.firestore.QueryDocumentSnapshot<
    firebase.firestore.DocumentData
  >[];
}

const RaceList: FunctionComponent<Props> = ({ races }) => {
  return (
    <ul>
      {races.map((raceDoc) => {
        const race = raceDoc.data();
        const id = raceDoc.id;

        return (
          <ListingItem
            key={id}
            linkUrl={`/race/${id}`}
            linkText={
              race.results?.length && race.isFinished ? "Results" : undefined
            }
            title={race.name}
            info={[
              formatDate(race.startTime, DEFAULT_DATETIME_FORMAT),
              `${race.distance} ${race.unit}`,
            ]}
          />
        );
      })}
    </ul>
  );
};

export default RaceList;
