import React, { FunctionComponent, useState } from 'react';

import styled from 'styled-components';

import { getRunnerName, Runner } from '../../../dummyData/runners';
import { OutlineButton, PrimaryButton } from '../../ui/Button';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  raceId: string;
  possibleVolunteers: Runner[];
}

const StyledListItem = styled("li")`
  & + & {
    border-top: ${(props) => props.theme.borders.style};
  }

  &:nth-child(even) button {
    background: #fff;
  }
  button {
    display: flex;
    justify-content: space-between;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
    padding: ${(props) =>
      `${props.theme.spacing.small} ${props.theme.spacing.medium}`};
  }
`;

const StyledButtonContainer = styled("div")`
  display: flex;

  button + button {
    margin-left: ${(props) => props.theme.spacing.medium};
  }
`;

const AddVolunteer: FunctionComponent<Props> = ({
  raceId,
  possibleVolunteers,
}) => {
  const initialSelected: Runner[] = [];
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(initialSelected);

  const isSelected = (runnerId: string): Runner | undefined =>
    selected.find((runner) => runner.id === runnerId);

  const toggleVolunteer = (runner: Runner): void => {
    const inArray = isSelected(runner.id);
    if (!inArray) {
      setSelected([...selected, runner]);
      return;
    }
    setSelected(
      selected.filter((selectedRunner) => runner.id !== selectedRunner.id)
    );
  };

  const onSubmit = (selectedRunners: Runner[]): void => {
    const names = selectedRunners.map((runner) => runner.name);
    alert(`Volunteers added to race ${raceId}: ${names.join(", ")}`);
    setVisible(false);
    setSelected([]);
  };

  if (!visible) {
    return (
      <PrimaryButton onClick={() => setVisible(true)}>
        Add Volunteers
      </PrimaryButton>
    );
  }

  return (
    <>
      <ul>
        {possibleVolunteers.map((runner) => {
          const name = getRunnerName(runner.id);
          if (!name) {
            return null;
          }

          return (
            <StyledListItem key={runner.id}>
              <button onClick={() => toggleVolunteer(runner)}>
                {name}
                {isSelected(runner.id) && <strong>X</strong>}
              </button>
            </StyledListItem>
          );
        })}
      </ul>

      <StyledButtonContainer>
        <PrimaryButton onClick={() => onSubmit(selected)}>
          Add Volunteers
        </PrimaryButton>
        <OutlineButton
          onClick={() => {
            setVisible(false);
            setSelected([]);
          }}
        >
          Cancel
        </OutlineButton>
      </StyledButtonContainer>
    </>
  );
};

export default AddVolunteer;
