import React, { FunctionComponent, useState } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { DistanceUnit, Race } from '../../../dummyData/races';
import { getFutureDateWithTime } from '../../../utils/date';
import Datepicker from '../../form/fields/Datepicker';
import Number from '../../form/fields/Number';
import Select from '../../form/fields/Select';
import Text from '../../form/fields/Text';
import Textarea from '../../form/fields/Textarea';
import { OutlineButton, PrimaryButton } from '../../ui/Button';

import 'react-datepicker/dist/react-datepicker.css';

type FormData = Partial<Omit<Race, "id">>;

interface Props {
  seriesId: string;
}

const StyledGridContainer = styled("div")`
  display: grid;
  grid-gap: ${(props) => props.theme.spacing.medium};
  grid-template-areas:
    "name name"
    "start start"
    "distance unit"
    "desc desc";
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 480px) {
    grid-template-areas:
      "name name name name"
      "start start distance unit"
      "desc desc desc desc";
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (min-width: 800px) {
    grid-template-areas:
      "name name start start"
      "desc desc distance unit";
  }
`;

const GridAreaName = styled("div")`
  grid-area: name;
`;
const GridAreaStart = styled("div")`
  grid-area: start;
`;
const GridAreaDistance = styled("div")`
  grid-area: distance;
`;
const GridAreaUnit = styled("div")`
  max-width: 150px;
  grid-area: unit;
`;
const GridAreaDesc = styled("div")`
  grid-area: desc;
`;

const StyledButtonContainer = styled("div")`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.spacing.medium};

  button + button {
    margin-left: ${(props) => props.theme.spacing.medium};
  }
`;

const NewRace: FunctionComponent<Props> = ({ seriesId }) => {
  const [visible, setVisible] = useState(false);
  const form = useForm();

  if (!visible) {
    return (
      <PrimaryButton
        style={{ float: "right" }}
        onClick={() => setVisible(true)}
      >
        Add new race
      </PrimaryButton>
    );
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <FormContext {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <input
          type="hidden"
          id="newRace_seriesId"
          name="seriesId"
          value={seriesId}
          ref={form.register({ required: true })}
        />
        <StyledGridContainer>
          <GridAreaName>
            <Text
              formName="newRace"
              fieldName="name"
              label="Race Name"
              required
              error={form.errors.name && "Please enter a name"}
            />
          </GridAreaName>

          <GridAreaStart>
            <Datepicker
              formName="newRace"
              fieldName="startTime"
              label="Start Time"
              defaultValue={getFutureDateWithTime(7, 8)}
              required
              error={form.errors.startTime && "Please enter a start time"}
              includeTime
            />
          </GridAreaStart>

          <GridAreaDistance>
            <Number
              min={0}
              formName="newRace"
              fieldName="distance"
              label="Distance"
              defaultValue={5}
              required
              error={form.errors.distance && "Please enter a distance"}
            />
          </GridAreaDistance>

          <GridAreaUnit>
            <Select
              formName="newRace"
              fieldName="unit"
              label="Unit"
              defaultValue={DistanceUnit.km}
              options={[{ value: "km" }, { value: "mi" }]}
              error={form.errors.unit && "Please enter a unit"}
            />
          </GridAreaUnit>

          <GridAreaDesc>
            <Textarea
              formName="newRace"
              fieldName="description"
              label="Description"
            />
          </GridAreaDesc>
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

export default NewRace;
