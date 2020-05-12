import React, { FunctionComponent } from 'react';

import { getRacesForSeries, Race } from '../../../dummyData/races';
import { DEFAULT_DATE_FORMAT, formatDate } from '../../../utils/date';
import {
  StyledListing,
  StyledListingInfo,
  StyledListingItem,
  StyledListingLink
} from '../../ui/ListingItem';

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
      <StyledListing>
        {races.map((race) => (
          <StyledListingItem key={race.id}>
            <StyledListingLink to={`/series/${race.id}`}>
              <div>
                <h3>{race.name}</h3>
                <StyledListingInfo>
                  <li>
                    {formatDate(
                      race.startTime,
                      `${DEFAULT_DATE_FORMAT} hh:mma`
                    )}
                  </li>
                  <li>
                    {race.distance} {race.unit}
                  </li>
                </StyledListingInfo>
              </div>
              <span>{race.results ? "Results" : "Details"} ></span>
            </StyledListingLink>
          </StyledListingItem>
        ))}
      </StyledListing>
    </section>
  );
};

export default RaceList;
