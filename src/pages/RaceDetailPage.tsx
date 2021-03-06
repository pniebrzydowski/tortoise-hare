import React, { FunctionComponent } from "react";

import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import styled from "styled-components";

import AddVolunteer from "../components/races/AddVolunteer";
import EditResults from "../components/races/EditResults";
import NextRace from "../components/races/NextRace";
import RaceDetail from "../components/races/RaceDetail";
import RaceResults from "../components/races/RaceResults";
import RaceVolunteers from "../components/races/RaceVolunteers";
import UpcomingRunners from "../components/races/UpcomingRunners";
import { PrimaryButton } from "../components/ui/Button";
import { Race } from "../dummyData/races";
import { allRunners, Runner } from "../dummyData/runners";
import useAdminCheck from "../firebase/hooks/useAdminCheck";
import useAuth from "../firebase/hooks/useAuth";
import useDocData from "../firebase/hooks/useDocData";
import { isDateInFuture } from "../utils/date";

const StyledNavLink = styled(Link)`
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

const StyledLink = styled(Link)`
  display: block;
  margin-top: ${(props) => props.theme.spacing.medium};
`;

const StyledVolunteersWrapper = styled("section")`
  flex: 1 2 auto;
  & > * + * {
    margin-top: ${(props) => props.theme.spacing.medium};
  }
`;

const RaceDetailPage: FunctionComponent = () => {
  const loggedInUser = useAuth();
  const isAdmin = useAdminCheck();
  const { raceId } = useParams();
  const { path } = useRouteMatch();
  const { data: race, loading } = useDocData<Race>({
    collection: "races",
    id: raceId,
  });

  if (!raceId || !race || loading) {
    return null;
  }

  const possibleVolunteers = allRunners.filter((runner) => {
    const volunteerIndex = race.volunteers?.findIndex((volunteer: Runner) => {
      return volunteer.id === runner.id;
    });
    return volunteerIndex === -1;
  });

  return (
    <>
      <nav>
        <StyledNavLink to={`/series/${race.seriesId}`}>
          &lt; Back to Series
        </StyledNavLink>
      </nav>

      <StyledFlexBox>
        <RaceDetail race={race} />
        <Route path={path} exact>
          {!race.isFinished && isDateInFuture(race.startTime) && (
            <NextRace raceId={raceId} runnerId={loggedInUser?.uid} />
          )}
        </Route>
      </StyledFlexBox>
      {race.results &&
        (race.isFinished ? (
          <RaceResults results={race.results} />
        ) : (
          <Switch>
            {isAdmin && (
              <Route path={`${path}/edit`}>
                <EditResults results={race.results} raceId={race.id} />
              </Route>
            )}
            <Route>
              <StyledFlexBox>
                <div>
                  <UpcomingRunners
                    results={race.results}
                    raceStartTime={race.startTime}
                  />
                  {isAdmin && (
                    <StyledLink to={`${race.id}/edit`}>
                      <PrimaryButton>Add results</PrimaryButton>
                    </StyledLink>
                  )}
                </div>
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
            </Route>
          </Switch>
        ))}
    </>
  );
};

export default RaceDetailPage;
