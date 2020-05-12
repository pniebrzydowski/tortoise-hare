import React from 'react';

import { screen, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { getFutureDate, getToday } from '../../../utils/date';
import { renderWithTheme } from '../../../utils/tests';
import NewSeries from './NewSeries';

test("opens and closes the new series form", async () => {
  renderWithTheme(<NewSeries />);
  const newButton = screen.getByRole("button", { name: "Add new series" });
  expect(newButton).toBeInTheDocument();
  await userEvent.click(newButton);

  const saveButton = screen.getByRole("button", { name: "Save" });
  expect(saveButton).toBeInTheDocument();
  const cancelButton = screen.getByRole("button", { name: "Cancel" });
  expect(cancelButton).toBeInTheDocument();

  await userEvent.click(cancelButton);
  expect(
    screen.getByRole("button", { name: "Add new series" })
  ).toBeInTheDocument();
  expect(cancelButton).not.toBeInTheDocument();
  expect(saveButton).not.toBeInTheDocument();
});

test("opens and submits the form with error", async () => {
  jest.spyOn(console, "log").mockImplementation();

  renderWithTheme(<NewSeries />);
  const newButton = screen.getByRole("button", { name: "Add new series" });
  await userEvent.click(newButton);

  const saveButton = screen.getByRole("button", { name: "Save" });
  await userEvent.click(saveButton);

  await wait();

  expect(console.log).not.toHaveBeenCalled();
  expect(screen.getByText("Please enter a name")).toBeInTheDocument();
});

test("opens and submits the form successfully", async () => {
  jest.spyOn(console, "log").mockImplementation();

  renderWithTheme(<NewSeries />);
  const newButton = screen.getByRole("button", { name: "Add new series" });
  await userEvent.click(newButton);

  const nameField = screen.getByLabelText("Series Name");
  await userEvent.type(nameField, "New Series");

  const saveButton = screen.getByRole("button", { name: "Save" });
  await userEvent.click(saveButton);

  await wait();

  expect(console.log).toHaveBeenCalledWith({
    name: "New Series",
    startDate: getToday(),
    endDate: getFutureDate(3, "month"),
    description: "",
  });
});
