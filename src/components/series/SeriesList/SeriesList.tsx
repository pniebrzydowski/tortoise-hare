import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import allSeries from '../../../dummyData/series';
import { formatDate } from '../../../utils/date';

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

const SeriesList: FunctionComponent = () => {
  return (
    <section>
      <header>
        <h2>All Series</h2>
      </header>
      <StyledList>
        {allSeries.map((series) => (
          <StyledListItem>
            <StyledLink to={`/series/${series.id}`} key={series.id}>
              <h3>{series.name}</h3>
              <StyledDates>
                {formatDate(series.startDate)} - {formatDate(series.endDate)}
              </StyledDates>
            </StyledLink>
          </StyledListItem>
        ))}
      </StyledList>
    </section>
  );
};

export default SeriesList;
