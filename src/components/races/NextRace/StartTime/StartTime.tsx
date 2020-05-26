import React, { FunctionComponent } from 'react';

import { getRaceById } from '../../../../dummyData/races';
import { DEFAULT_TIME_FORMAT, formatDate } from '../../../../utils/date';
import { getPredictedTime } from '../../utils';
import PredictedTimeForm from '../PredictedTimeForm';

interface Props {
  raceId: string;
  runnerId: string;
}

const StartTime: FunctionComponent<Props> = ({ raceId, runnerId }) => {
  const predictedTime = getPredictedTime(runnerId, raceId);
  const startTime = getRaceById(raceId)?.startTime;

  return predictedTime > 0 ? (
    <p>
      <strong>Your start time: </strong>
      {startTime && formatDate(startTime, DEFAULT_TIME_FORMAT)}
    </p>
  ) : (
    <>
      <p>You don't have any results yet, please enter your estimated time</p>
      <PredictedTimeForm raceId={raceId} runnerId={runnerId} />
    </>
  );
};

export default StartTime;
