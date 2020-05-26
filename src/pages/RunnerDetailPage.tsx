import React, { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import NextRace from '../components/races/NextRace';
import { getNextRace } from '../components/races/utils';
import RunnerDetail from '../components/runners/RunnerDetail';
import RunnerResults from '../components/runners/RunnerResults';
import UpcomingRaces from '../components/runners/UpcomingRaces';
import { getResultsForRunner, RaceResult } from '../dummyData/results';

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

const StyledTableWrapper = styled("div")`
  & > * + * {
    margin-top: ${(props) => props.theme.spacing.medium};
  }
  @media screen and (min-width: 1000px) {
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

const RunnerDetailPage: FunctionComponent = () => {
  const { runnerId } = useParams();

  if (!runnerId) {
    return null;
  }

  const results: RaceResult[] = getResultsForRunner(runnerId) || [];
  const finished = results.filter((result) => !!result.actualTime);
  const upcoming = results.filter((result) => !result.actualTime);
  const nextRace = getNextRace();

  return (
    <>
      <StyledFlexBox>
        <RunnerDetail id={runnerId} />
        {nextRace && (
          <NextRace
            raceId={nextRace.id}
            raceName={nextRace.name}
            runnerId={runnerId}
          />
        )}
      </StyledFlexBox>
      <StyledTableWrapper>
        {upcoming.length > 0 && <UpcomingRaces results={upcoming} />}
        {finished.length > 0 && <RunnerResults results={finished} />}
      </StyledTableWrapper>
    </>
  );
};

export default RunnerDetailPage;
