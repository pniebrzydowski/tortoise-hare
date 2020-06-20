import React from 'react';

import { DistanceUnit } from '../../../dummyData/races';
import { FirebaseContext } from '../../../firebase';
import * as useAdminCheck from '../../../firebase/hooks/useAdminCheck';
import { getFutureDateWithTime } from '../../../utils/date';
import {
  BaseFirebaseMock,
  render,
  screen,
  userEvent,
  wait
} from '../../../utils/tests';
import NewRace from './NewRace';

const SERIES_ID = "1";

describe("New Race", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(useAdminCheck, "default").mockReturnValue(true);
  });

  const firebase = new BaseFirebaseMock();

  const renderWithFirebase = () => {
    render(
      <FirebaseContext.Provider value={firebase}>
        <NewRace seriesId={SERIES_ID} />
      </FirebaseContext.Provider>
    );
  };

  it("opens and closes the new race form", async () => {
    renderWithFirebase();
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

  it("opens and submits the form with error", async () => {
    jest.spyOn(firebase.firestore, "collection");

    renderWithFirebase();
    const newButton = screen.getByRole("button", { name: "Add new race" });
    await userEvent.click(newButton);

    const saveButton = screen.getByRole("button", { name: "Save" });
    await userEvent.click(saveButton);

    await wait();

    expect(firebase.firestore.collection).not.toHaveBeenCalled();
    expect(screen.getByText("Please enter a name")).toBeInTheDocument();
  });

  it("opens and submits the form successfully", async () => {
    const set = () => Promise.resolve();
    const doc = { set };
    const collection = { doc: () => doc };
    jest
      .spyOn(firebase.firestore, "collection")
      .mockImplementation(() => collection);
    jest.spyOn(collection, "doc").mockImplementation(() => doc);
    jest.spyOn(doc, "set").mockImplementation(() => new Promise(() => {}));

    renderWithFirebase();
    const newButton = screen.getByRole("button", { name: "Add new race" });
    await userEvent.click(newButton);

    const nameField = screen.getByLabelText("Race Name");
    await userEvent.type(nameField, "New Race");

    const saveButton = screen.getByRole("button", { name: "Save" });
    await userEvent.click(saveButton);

    await wait();

    expect(doc.set).toHaveBeenCalledWith({
      seriesId: SERIES_ID,
      name: "New Race",
      startTime: getFutureDateWithTime(7, 8),
      distance: 5,
      unit: DistanceUnit.km,
      description: "",
    });
  });
});
