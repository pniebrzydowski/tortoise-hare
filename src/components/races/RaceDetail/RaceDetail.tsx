import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

import { getRaceById, Race } from '../../../dummyData/races';
import { DEFAULT_TIME_FORMAT, formatDate } from '../../../utils/date';

interface Props {
  id: string;
}

const StyledSection = styled("section")`
  & > * + * {
    margin: ${(props) => props.theme.spacing.small} 0;
  }
`;

const StyledDatesHeader = styled("th")`
  font-weight: bold;
  padding-right: ${(props) => props.theme.spacing.medium};
`;

const StyledDescription = styled("p")`
  color: ${(props) => props.theme.colors.secondary};
`;

const RaceDetail: FunctionComponent<Props> = ({ id }) => {
  const race: Race | undefined = getRaceById(id);

  if (!race) {
    return null;
  }

  return (
    <StyledSection>
      <header>
        <h2>{race.name}</h2>
      </header>
      <table>
        <tbody>
          <tr>
            <StyledDatesHeader>Start:</StyledDatesHeader>
            <td>{formatDate(race.startTime, DEFAULT_TIME_FORMAT)}</td>
          </tr>
          <tr>
            <StyledDatesHeader>Distance:</StyledDatesHeader>
            <td>
              {race.distance} {race.unit}
            </td>
          </tr>
        </tbody>
      </table>
      {race.description && (
        <StyledDescription>{race.description}</StyledDescription>
      )}
    </StyledSection>
  );
};

export default RaceDetail;
