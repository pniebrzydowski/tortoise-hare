import React, { FunctionComponent, useState } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Series } from '../../../dummyData/series';
import { getFutureDate, getToday } from '../../../utils/date';
import Datepicker from '../../form/fields/Datepicker';
import Text from '../../form/fields/Text';
import Textarea from '../../form/fields/Textarea';
import { OutlineButton, PrimaryButton } from '../../ui/Button';

import 'react-datepicker/dist/react-datepicker.css';

type FormData = Partial<Omit<Series, "id">>;

const FlexBox = styled("div")`
  display: flex;
  flex-wrap: wrap;

  > div + div {
    margin-top: ${(props) => props.theme.spacing.small};
  }
`;

const FlexLarge = styled("div")`
  width: 100%;
`;

const FlexSmall = styled("div")`
  width: calc(50% - ${(props) => props.theme.spacing.small});

  & + & {
    margin-left: ${(props) => props.theme.spacing.medium};
  }
`;

const StyledButtonContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.spacing.medium};

  button + button {
    margin-left: ${(props) => props.theme.spacing.medium};
  }
`;

const NewSeries: FunctionComponent = () => {
  const [visible, setVisible] = useState(true);
  const form = useForm();

  if (!visible) {
    return <button onClick={() => setVisible(true)}>Add new series</button>;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormContext {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FlexBox>
          <FlexLarge>
            <Text
              formName="newSeries"
              fieldName="name"
              label="Series Name"
              required
              error={form.errors.name && "Please enter a name"}
            />
          </FlexLarge>

          <FlexSmall>
            <Datepicker
              formName="newSeries"
              fieldName="startDate"
              label="Start Date"
              defaultValue={getToday()}
              required
              error={form.errors.startDate && "Please enter a start date"}
            />
          </FlexSmall>

          <FlexSmall>
            <Datepicker
              formName="newSeries"
              fieldName="endDate"
              label="End Date"
              defaultValue={getFutureDate(3, "month")}
              required
              error={form.errors.endDate && "Please enter a start date"}
            />
          </FlexSmall>

          <FlexLarge>
            <Textarea
              formName="newSeries"
              fieldName="description"
              label="Description"
            />
          </FlexLarge>
        </FlexBox>

        <StyledButtonContainer>
          <PrimaryButton type="submit">Save</PrimaryButton>
          <OutlineButton onClick={() => setVisible(false)}>
            Cancel
          </OutlineButton>
        </StyledButtonContainer>
      </form>
    </FormContext>
  );
};

export default NewSeries;
