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

const StyledGridContainer = styled("div")`
  display: grid;
  grid-gap: ${(props) => props.theme.spacing.medium};
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const GridAreaLarge = styled("div")`
  grid-column-start: 1;
  grid-column-end: 3;
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
  const [visible, setVisible] = useState(false);
  const form = useForm();

  if (!visible) {
    return (
      <PrimaryButton onClick={() => setVisible(true)}>
        Add new series
      </PrimaryButton>
    );
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormContext {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <StyledGridContainer>
          <GridAreaLarge>
            <Text
              formName="newSeries"
              fieldName="name"
              label="Series Name"
              required
              error={form.errors.name && "Please enter a name"}
            />
          </GridAreaLarge>

          <Datepicker
            formName="newSeries"
            fieldName="startDate"
            label="Start Date"
            defaultValue={getToday()}
            required
            error={form.errors.startDate && "Please enter a start date"}
          />

          <Datepicker
            formName="newSeries"
            fieldName="endDate"
            label="End Date"
            defaultValue={getFutureDate(3, "month")}
            required
            error={form.errors.endDate && "Please enter a start date"}
          />

          <GridAreaLarge>
            <Textarea
              formName="newSeries"
              fieldName="description"
              label="Description"
            />
          </GridAreaLarge>
        </StyledGridContainer>

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
