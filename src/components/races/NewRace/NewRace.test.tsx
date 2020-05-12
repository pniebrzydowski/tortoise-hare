import React from 'react';

import { screen, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DistanceUnit } from '../../../dummyData/races';
import { getFutureDateWithTime } from '../../../utils/date';
import { renderWithTheme } from '../../../utils/tests';
import NewRace from './NewRace';

const SERIES_ID = "1";

test("opens and closes the new race form", async () => {
  renderWithTheme(<NewRace seriesId={SERIES_ID} />);
  const newButton = screen.getByRole("button", { name: "Add new race" });
  expect(newButton).toBeInTheDocument();
  await userEvent.click(newButton);

  const saveButton = screen.getByRole("button", { name: "Save" });
  expect(saveButton).toBeInTheDocument();
  const cancelButton = screen.getByRole("button", { name: "Cancel" });
  expect(cancelButton).toBeInTheDocument();

  await userEvent.click(cancelButton);
  expect(
    screen.getByRole("button", { name: "Add new race" })
  ).toBeInTheDocument();
  expect(cancelButton).not.toBeInTheDocument();
  expect(saveButton).not.toBeInTheDocument();
});

test("opens and submits the form with error", async () => {
  jest.spyOn(console, "log").mockImplementation();

  renderWithTheme(<NewRace seriesId={SERIES_ID} />);
  const newButton = screen.getByRole("button", { name: "Add new race" });
  await userEvent.click(newButton);

  const saveButton = screen.getByRole("button", { name: "Save" });
  await userEvent.click(saveButton);

  await wait();

  expect(console.log).not.toHaveBeenCalled();
  expect(screen.getByText("Please enter a name")).toBeInTheDocument();
});

test("opens and submits the form successfully", async () => {
  jest.spyOn(console, "log").mockImplementation();

  renderWithTheme(<NewRace seriesId={SERIES_ID} />);
  const newButton = screen.getByRole("button", { name: "Add new race" });
  await userEvent.click(newButton);

  const nameField = screen.getByLabelText("Race Name");
  await userEvent.type(nameField, "New Race");

  const saveButton = screen.getByRole("button", { name: "Save" });
  await userEvent.click(saveButton);

  await wait();

  expect(console.log).toHaveBeenCalledWith({
    seriesId: SERIES_ID,
    name: "New Race",
    startTime: getFutureDateWithTime(7, 8),
    distance: 5,
    unit: DistanceUnit.km,
    description: "",
  });
});
