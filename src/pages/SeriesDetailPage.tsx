import React, { FunctionComponent } from "react";

import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import NewRace from "../components/races/NewRace";
import RaceList from "../components/races/RaceList";
import SeriesDetail from "../components/series/SeriesDetail";
import SeriesStandings from "../components/series/SeriesStandings";
import useCollectionDocs from "../firebase/hooks/useCollectionDocs";
import { FirebaseQueryOperators } from "../firebase/types";
import { isDateInFuture } from "../utils/date";

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
  const seriesRaces = useCollectionDocs({
    collectionName: "races",
    query: {
      field: "seriesId",
      operator: FirebaseQueryOperators.EQUAL,
      value: seriesId,
    },
  });

  const upcomingRaces = seriesRaces?.filter((raceDoc) => {
    const race = raceDoc.data();
    return isDateInFuture(race.startTime) && !race.isFinished;
  });
  const pastRaces = seriesRaces?.filter((raceDoc) => {
    const race = raceDoc.data();
    return race.isFinished || !isDateInFuture(race.startTime);
  });

  return (
    <>
      <nav>
        <StyledLink to="/series">&lt; Back to All Series</StyledLink>
      </nav>

      <SeriesDetail id={seriesId} />

      <StyledFlexBox>
        <StyledFlexContainer>
          <StyledFlexContainer>
            <header>
              <h3 style={{ display: "inline" }}>Upcoming Races</h3>
              <NewRace seriesId={seriesId} />
            </header>
            {upcomingRaces && upcomingRaces.length > 0 ? (
              <RaceList races={upcomingRaces} />
            ) : (
              <p>There are no upcoming races in this series</p>
            )}
          </StyledFlexContainer>

          {pastRaces && pastRaces.length > 0 && (
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
