import React, { FunctionComponent, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getRaceById } from '../../../dummyData/races';
import routes from '../../../routing/routes';
import { DEFAULT_TIME_FORMAT, formatDate } from '../../../utils/date';
import { PrimaryButton } from '../../ui/Button';
import { getPredictedTime, getRunnerResultForRace } from '../utils';

interface Props {
  raceId: string;
  raceName?: string;
  runnerId?: string;
}

const StyledSection = styled("section")`
  & > * + * {
    margin: ${(props) => props.theme.spacing.small} 0;
  }
`;

const NextRace: FunctionComponent<Props> = ({ raceId, raceName, runnerId }) => {
  const registered = runnerId
    ? getRunnerResultForRace(runnerId, raceId)
    : false;
  const [isRegistered, setIsRegistered] = useState(registered);

  const register = () => {
    console.log(`Registered for race ${raceId}`);
    setIsRegistered(true);
  };

  const raceLink = raceName ? (
    <Link to={routes.RACE_DETAIL.replace(":raceId", raceId)}>{raceName}</Link>
  ) : null;

  const startTime = isRegistered ? getRaceById(raceId)?.startTime : null;

  return (
    <StyledSection>
      <header>
        <h3>{raceName ? "Next Race" : "Registration"}</h3>
      </header>
      {isRegistered ? (
        <>
          <p>You are registered for {raceName ? raceLink : "this race"}!</p>
          {runnerId &&
            (getPredictedTime(runnerId, raceId) > 0 ? (
              <p>
                <strong>Your start time: </strong>
                {startTime && formatDate(startTime, DEFAULT_TIME_FORMAT)}
              </p>
            ) : (
              <p>
                You don't have any results yet, please enter your estimated time
              </p>
            ))}
        </>
      ) : (
        <>
          {raceName && <div>{raceLink}</div>}
          <PrimaryButton onClick={register}>Register</PrimaryButton>
        </>
      )}
    </StyledSection>
  );
};

export default NextRace;
