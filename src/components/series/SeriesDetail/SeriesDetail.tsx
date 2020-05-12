import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

import { getSeriesById } from '../../../dummyData/series';
import { formatDate } from '../../../utils/date';

interface Props {
  id: string;
}

const StyledDatesHeader = styled("th")`
  font-weight: bold;
  padding-right: ${(props) => props.theme.spacing.medium};
`;

const StyledDescription = styled("p")`
  padding: ${(props) => props.theme.spacing.medium} 0;
  color: ${(props) => props.theme.colors.secondary};
`;

const SeriesDetail: FunctionComponent<Props> = ({ id }) => {
  const series = getSeriesById(id);

  if (!series) {
    return null;
  }

  return (
    <article>
      <header>
        <h2>{series.name}</h2>
      </header>
      <table>
        <tbody>
          <tr>
            <StyledDatesHeader>Start:</StyledDatesHeader>
            <td>{formatDate(series.startDate)}</td>
          </tr>
          <tr>
            <StyledDatesHeader>End:</StyledDatesHeader>
            <td>{formatDate(series.endDate)}</td>
          </tr>
        </tbody>
      </table>
      {series.description && (
        <StyledDescription>{series.description}</StyledDescription>
      )}
    </article>
  );
};

export default SeriesDetail;
