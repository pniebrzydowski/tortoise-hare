import React, { FunctionComponent } from 'react';

import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import NewRace from '../components/races/NewRace';
import RaceList from '../components/races/RaceList';
import SeriesDetail from '../components/series/SeriesDetail';
import SeriesStandings from '../components/series/SeriesStandings';
import { getRacesForSeries, Race } from '../dummyData/races';
import { isDateInFuture } from '../utils/date';

const StyledLink = styled(Link)`
  padding-top: ${(props) => props.theme.spacing.small};
  padding-bottom: ${(props) => props.theme.spacing.small};
  text-decoration: none;
  display: block;
  margin-bottom: ${(props) => props.theme.spacing.small};
`;

const StyledFlexBox = styled("div")`
  & > * + * {
    margin-top: ${(props) => props.theme.spacing.medium};
  }
  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;

    & > * {
      margin-top: 0;
      width: 100%;
    }
    & > * + * {
      margin-left: ${(props) => props.theme.spacing.xLarge};
    }
  }
`;

const StyledFlexContainer = styled("div")`
  & > * + * {
    margin-top: ${(props) => props.theme.spacing.medium};
  }
`;

const SeriesDetailPage: FunctionComponent = () => {
  const { seriesId } = useParams();

  if (!seriesId) {
    return null;
  }

  const seriesRaces: Race[] = getRacesForSeries(seriesId);
  const upcomingRaces: Race[] = seriesRaces.filter(
    (race) => isDateInFuture(race.startTime) && !race.isFinished
  );
  const pastRaces: Race[] = seriesRaces.filter(
    (race) => race.isFinished || !isDateInFuture(race.startTime)
  );

  return (
    <>
      <nav>
        <StyledLink to="/series">&lt; Back to All Series</StyledLink>
      </nav>

      <SeriesDetail id={seriesId} />

      <StyledFlexBox>
        <StyledFlexContainer>
          {upcomingRaces.length > 0 && (
            <StyledFlexContainer>
              <header>
                <h3 style={{ display: "inline" }}>Upcoming Races</h3>
                <NewRace seriesId={seriesId} />
              </header>
              <RaceList races={upcomingRaces} />
            </StyledFlexContainer>
          )}
          {pastRaces.length > 0 && (
            <StyledFlexContainer>
              <header>
                <h3>Past Races</h3>
              </header>
              <RaceList races={pastRaces} />
            </StyledFlexContainer>
          )}
        </StyledFlexContainer>
        <SeriesStandings seriesId={seriesId} />
      </StyledFlexBox>
    </>
  );
};

export default SeriesDetailPage;
