import React, { FunctionComponent } from "react";

import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import NewRace from "../components/races/NewRace";
import RaceList from "../components/races/RaceList";
import SeriesDetail from "../components/series/SeriesDetail";
import SeriesStandings from "../components/series/SeriesStandings";
import useCollectionDocsData from "../firebase/hooks/useCollectionDocsData";
import { FirebaseQueryOperators } from "../firebase/types";
import { isDateInFuture } from "../utils/date";
import { Race } from "../dummyData/races";

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
  const { data: seriesRaces, loading } = useCollectionDocsData<Race>({
    collection: "races",
    query: {
      field: "seriesId",
      operator: FirebaseQueryOperators.EQUAL,
      value: seriesId,
    },
  });

  const upcomingRaces: Race[] = [];
  const pastRaces: Race[] = [];
  seriesRaces.forEach((race) => {
    if (isDateInFuture(race.startTime) && !race.isFinished) {
      upcomingRaces.push(race);
    } else {
      pastRaces.push(race);
    }
  });

  return (
    <>
      <nav>
        <StyledLink to="/series">&lt; Back to All Series</StyledLink>
      </nav>

      <SeriesDetail id={seriesId} />

      <StyledFlexBox>
        {loading ? null : (
          <StyledFlexContainer>
            <StyledFlexContainer>
              <header>
                <h3 style={{ display: "inline" }}>Upcoming Races</h3>
                <NewRace seriesId={seriesId} />
              </header>
              {upcomingRaces.length > 0 ? (
                <RaceList races={upcomingRaces} />
              ) : (
                <p>There are no upcoming races in this series</p>
              )}
            </StyledFlexContainer>

            {pastRaces.length > 0 && (
              <StyledFlexContainer>
                <header>
                  <h3>Past Races</h3>
                </header>
                <RaceList races={pastRaces} />
              </StyledFlexContainer>
            )}
          </StyledFlexContainer>
        )}
        <SeriesStandings seriesId={seriesId} />
      </StyledFlexBox>
    </>
  );
};

export default SeriesDetailPage;
