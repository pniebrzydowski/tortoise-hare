import React, { FunctionComponent } from 'react';

import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import AddVolunteer from '../components/races/AddVolunteer';
import NextRace from '../components/races/NextRace';
import RaceDetail from '../components/races/RaceDetail';
import RaceResults from '../components/races/RaceResults';
import RaceVolunteers from '../components/races/RaceVolunteers';
import UpcomingRunners from '../components/races/UpcomingRunners';
import { getRaceById, Race } from '../dummyData/races';
import { allRunners } from '../dummyData/runners';
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
  @media screen and (min-width: 680px) {
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

const StyledVolunteersWrapper = styled("section")`
  flex: 1 2 auto;
  & > * + * {
    margin-top: ${(props) => props.theme.spacing.medium};
  }
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

  const possibleVolunteers = allRunners.filter((runner) => {
    const volunteerIndex = race.volunteers?.findIndex((volunteer) => {
      return volunteer.id === runner.id;
    });
    return volunteerIndex === -1;
  });

  return (
    <>
      <nav>
        <StyledLink to={`/series/${race.seriesId}`}>
          &lt; Back to Series
        </StyledLink>
      </nav>

      <StyledFlexBox>
        <RaceDetail id={raceId} />
        {!race.isFinished && isDateInFuture(race.startTime) && (
          <NextRace raceId={raceId} />
        )}
      </StyledFlexBox>
      {race.results &&
        (race.isFinished ? (
          <RaceResults results={race.results} />
        ) : (
          <StyledFlexBox>
            <UpcomingRunners results={race.results} />
            <StyledVolunteersWrapper>
              {race.volunteers && (
                <RaceVolunteers volunteers={race.volunteers} />
              )}
              <AddVolunteer
                raceId={race.id}
                possibleVolunteers={possibleVolunteers}
              />
            </StyledVolunteersWrapper>
          </StyledFlexBox>
        ))}
    </>
  );
};

export default RaceDetailPage;
