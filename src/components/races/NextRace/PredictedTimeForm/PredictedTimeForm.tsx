import React, { FunctionComponent } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { timeStringToSeconds } from '../../../../utils/date';
import Time from '../../../form/fields/Time';
import { PrimaryButton } from '../../../ui/Button';

interface FormData {
  runnerId: string;
  raceId: string;
  predictedTime: string;
}

interface Props {
  raceId: string;
  runnerId: string;
  onSuccess?: (newPredictedTime: number) => void;
}

const StyledFlexBox = styled("div")`
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  margin-left: ${(props) => props.theme.spacing.medium};
  padding: ${(props) => props.theme.spacing.medium};
`;

const PredictedTimeForm: FunctionComponent<Props> = ({
  raceId,
  runnerId,
  onSuccess,
}) => {
  const form = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const timeInSeconds = timeStringToSeconds(data.predictedTime);
    const submitData = {
      ...data,
      predictedTime: timeInSeconds,
    };
    console.log(submitData);

    onSuccess && onSuccess(timeInSeconds);
  };

  return (
    <FormContext {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input
          type="hidden"
          id="predictedTime_raceId"
          name="raceId"
          value={raceId}
          ref={form.register({ required: true })}
        />
        <input
          type="hidden"
          id="predictedTime_runnerId"
          name="runnerId"
          value={runnerId}
          ref={form.register({ required: true })}
        />
        <StyledFlexBox>
          <Time
            formName="predictedTime"
            fieldName="predictedTime"
            required
            error={
              form.errors.predictedTime && "Please enter a time (hh:mm:ss)"
            }
          />
          <StyledPrimaryButton type="submit">Submit</StyledPrimaryButton>
        </StyledFlexBox>
      </form>
    </FormContext>
  );
};

export default PredictedTimeForm;
