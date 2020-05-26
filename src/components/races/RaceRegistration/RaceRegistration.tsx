import React, { FunctionComponent, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../../routing/routes';
import { PrimaryButton } from '../../ui/Button';

interface Props {
  raceId: string;
  raceName?: string;
}

const StyledSection = styled("section")`
  & > * + * {
    margin: ${(props) => props.theme.spacing.small} 0;
  }
`;

const RaceRegistration: FunctionComponent<Props> = ({ raceId, raceName }) => {
  const [isRegistered, setIsRegistered] = useState(false);

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
        <h3>Registration</h3>
      </header>
      {isRegistered ? (
        <p>You are registered for {raceName ? raceLink : "this race"}!</p>
      ) : (
        <>
          {raceName && (
            <div>
              <strong>Next Race: </strong>
              {raceLink}
            </div>
          )}
          <PrimaryButton onClick={register}>Register</PrimaryButton>
        </>
      )}
    </StyledSection>
  );
};

export default RaceRegistration;
