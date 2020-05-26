import React, { FunctionComponent } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import styled from 'styled-components';

import Text from '../../../form/fields/Text';
import { PrimaryButton } from '../../../ui/Button';

interface FormData {
  runnerId: string;
  raceId: string;
  predictedTime: number;
}

interface Props {
  raceId: string;
  runnerId: string;
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

const onSubmit = (data: Record<"data", FormData>) => {
  console.log(data);
};

const PredictedTimeForm: FunctionComponent<Props> = ({ raceId, runnerId }) => {
  const form = useForm();

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
          <Text
            formName="predictedTime"
            fieldName="predictedTime"
            required
            error={form.errors.predictedTime && "Please enter a time"}
          />
          <StyledPrimaryButton type="submit">Submit</StyledPrimaryButton>
        </StyledFlexBox>
      </form>
    </FormContext>
  );
};

export default PredictedTimeForm;
