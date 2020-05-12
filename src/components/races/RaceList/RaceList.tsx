import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getRacesForSeries, Race } from '../../../dummyData/races';
import { DEFAULT_DATE_FORMAT, formatDate } from '../../../utils/date';

interface Props {
  seriesId: string;
}

const StyledList = styled("ul")`
  margin: ${(props) =>
    `${props.theme.spacing.medium} 0 ${props.theme.spacing.large}`};
  width: 100%;
`;

const StyledListItem = styled("li")`
  & + & {
    margin-top: ${(props) => props.theme.spacing.small};
  }
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  border: ${(props) =>
    `${props.theme.borders.style} ${props.theme.colors.light}`};
  border-radius: ${(props) => props.theme.borders.radius};
  background: #fff;
  padding: ${(props) => props.theme.spacing.medium};
`;

const StyledDates = styled("span")`
  color: ${(props) => props.theme.colors.secondary};
`;

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
      <StyledList>
        {races.map((race) => (
          <StyledListItem key={race.id}>
            <StyledLink to={`/series/${race.id}`}>
              <h3>{race.name}</h3>
              <StyledDates>
                {formatDate(race.startTime, `${DEFAULT_DATE_FORMAT} hh:mm`)}
              </StyledDates>
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </section>
  );
};

export default RaceList;
