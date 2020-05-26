import React, { FunctionComponent } from 'react';

import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import RaceRegistration from '../components/races/RaceRegistration';
import RunnerDetail from '../components/runners/RunnerDetail';
import RunnerResults from '../components/runners/RunnerResults';
import UpcomingRaces from '../components/runners/UpcomingRaces';
import { getNextRace } from '../dummyData/races';
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
          <RaceRegistration raceId={nextRace.id} raceName={nextRace.name} />
        )}
      </StyledFlexBox>
      {upcoming.length > 0 && <UpcomingRaces results={upcoming} />}
      {finished.length > 0 && <RunnerResults results={finished} />}
    </>
  );
};

export default RunnerDetailPage;
