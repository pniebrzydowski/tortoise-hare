import React, { FunctionComponent, useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FirebaseContext } from '../../../firebase';
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
  const firebase = useContext(FirebaseContext);
  const registered = runnerId
    ? getRunnerResultForRace(runnerId, raceId)
    : false;
  const [isRegistered, setIsRegistered] = useState(registered);

  const register = () => {
    if (!firebase) {
      return;
    }

    firebase.firestore
      .collection("raceRegistrations")
      .doc()
      .set({
        raceId,
        runnerId,
        predictedTime: 0,
        actualTime: 0,
        points: 0,
      })
      .then(() => {
        setIsRegistered(true);
      })
      .catch((err) => {
        console.error("Error creating series: ", err);
      });
  };

  if (!raceName && !runnerId) {
    return null;
  }

  const raceLink = raceName ? (
    <Link to={routes.RACE_DETAIL.replace(":raceId", raceId)}>{raceName}</Link>
  ) : null;

  return (
    <StyledSection>
      <header>
        <h3>{raceName ? "Next Race" : "Register for this race"}</h3>
      </header>
      {isRegistered ? (
        <>
          <p>You are registered for {raceName ? raceLink : "this race"}!</p>
          {runnerId && <StartTime raceId={raceId} runnerId={runnerId} />}
        </>
      ) : (
        <>
          {raceName && <div>{raceLink}</div>}
          {runnerId && (
            <PrimaryButton onClick={register}>Register</PrimaryButton>
          )}
        </>
      )}
    </StyledSection>
  );
};

export default NextRace;
