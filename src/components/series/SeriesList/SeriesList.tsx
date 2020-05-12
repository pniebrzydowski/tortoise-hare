import React, { FunctionComponent } from 'react';

import allSeries from '../../../dummyData/series';
import { formatDate } from '../../../utils/date';
import {
  StyledListing,
  StyledListingInfo,
  StyledListingItem,
  StyledListingLink
} from '../../ui/ListingItem';

const SeriesList: FunctionComponent = () => {
  return (
    <section>
      <header>
        <h2>All Series</h2>
      </header>
      <StyledListing>
        {allSeries.map((series) => (
          <StyledListingItem key={series.id}>
            <StyledListingLink to={`/series/${series.id}`}>
              <div>
                <h3>{series.name}</h3>
                <StyledListingInfo>
                  <li>
                    {formatDate(series.startDate)} -{" "}
                    {formatDate(series.endDate)}
                  </li>
                </StyledListingInfo>
              </div>
              <span>Details &gt;</span>
            </StyledListingLink>
          </StyledListingItem>
        ))}
      </StyledListing>
    </section>
  );
};

export default SeriesList;
