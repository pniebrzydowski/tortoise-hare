import React, { FunctionComponent, useState } from 'react';

import { getRaceById } from '../../../../dummyData/races';
import {
  DEFAULT_TIME_FORMAT,
  formatDate,
  formatTime
} from '../../../../utils/date';
import { getPredictedTime } from '../../utils';
import PredictedTimeForm from '../PredictedTimeForm';

interface Props {
  raceId: string;
  runnerId: string;
}

const StartTime: FunctionComponent<Props> = ({ raceId, runnerId }) => {
  const [predictedTime, setPredictedTime] = useState(
    getPredictedTime(runnerId, raceId)
  );
  const startTime = getRaceById(raceId)?.startTime;

  return predictedTime > 0 ? (
    <>
      {predictedTime && (
        <p>
          <strong>Your predicted time: </strong>
          {formatTime(predictedTime)}
        </p>
      )}
      {startTime && (
        <p>
          <strong>Your start time: </strong>
          {formatDate(startTime, DEFAULT_TIME_FORMAT)}
        </p>
      )}
    </>
  ) : (
    <>
      <p>You don't have any results yet, please enter your estimated time</p>
      <PredictedTimeForm
        raceId={raceId}
        runnerId={runnerId}
        onSuccess={(newPredictedTime: number) => {
          setPredictedTime(newPredictedTime);
        }}
      />
    </>
  );
};

export default StartTime;
