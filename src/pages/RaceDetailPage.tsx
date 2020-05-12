import React, { FunctionComponent } from 'react';

import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import RaceDetail from '../components/races/RaceDetail';
import RaceResults from '../components/races/RaceResults';
import { getRaceById, Race } from '../dummyData/races';

const StyledLink = styled(Link)`
  padding-top: ${(props) => props.theme.spacing.small};
  padding-bottom: ${(props) => props.theme.spacing.small};
  text-decoration: none;
  display: block;
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

const RaceDetailPage: FunctionComponent = () => {
  const { raceId } = useParams();
  if (!raceId) {
    return null;
  }

  const race: Race | undefined = getRaceById(raceId);
  if (!race) {
    return null;
  }

  return (
    <>
      <nav>
        <StyledLink to={`/series/${race.seriesId}`}>
          &lt; Back to Series
        </StyledLink>
      </nav>

      <RaceDetail id={raceId} />
      {race.results && <RaceResults results={race.results} />}
    </>
  );
};

export default RaceDetailPage;
