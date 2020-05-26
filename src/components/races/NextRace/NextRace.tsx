import React, { FunctionComponent, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../../routing/routes';
import { PrimaryButton } from '../../ui/Button';
import { getRunnerResultForRace } from '../utils';
import StartTime from './StartTime';

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

  return (
    <StyledSection>
      <header>
        <h3>{raceName ? "Next Race" : "Registration"}</h3>
      </header>
      {isRegistered ? (
        <>
          <p>You are registered for {raceName ? raceLink : "this race"}!</p>
          {runnerId && <StartTime raceId={raceId} runnerId={runnerId} />}
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
