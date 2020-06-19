import React from 'react';

import { FirebaseContext } from '../../../firebase';
import * as useAdminCheck from '../../../firebase/hooks/useAdminCheck';
import { getFutureDate, getToday } from '../../../utils/date';
import {
  BaseFirebaseMock,
  render,
  screen,
  userEvent,
  wait
} from '../../../utils/tests';
import NewSeries from './NewSeries';

class FirebaseMock extends BaseFirebaseMock {
  constructor() {
    super();
    this.firestore.collection = () => {
      return {
        add: jest.fn(),
      };
    };
  }
}

describe("New Series", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(useAdminCheck, "default").mockReturnValue(true);
  });

  const firebase = new FirebaseMock();

  const renderWithFirebase = () => {
    render(
      <FirebaseContext.Provider value={firebase}>
        <NewSeries />
      </FirebaseContext.Provider>
    );
  };

  it("opens and closes the new series form", async () => {
    renderWithFirebase();
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

  it("opens and submits the form with error", async () => {
    jest.spyOn(firebase.firestore, "collection");

    renderWithFirebase();
    const newButton = screen.getByRole("button", { name: "Add new series" });
    await userEvent.click(newButton);

    const saveButton = screen.getByRole("button", { name: "Save" });
    await userEvent.click(saveButton);

    await wait();

    expect(firebase.firestore.collection).not.toHaveBeenCalled();
    expect(screen.getByText("Please enter a name")).toBeInTheDocument();
  });

  it("opens and submits the form successfully", async () => {
    const set = () => new Promise((resolve) => resolve());
    const doc = { set };
    const collection = { doc: () => doc };
    jest
      .spyOn(firebase.firestore, "collection")
      .mockImplementation(() => collection);
    jest.spyOn(collection, "doc").mockImplementation(() => doc);
    jest.spyOn(doc, "set");

    renderWithFirebase();
    const newButton = screen.getByRole("button", { name: "Add new series" });
    await userEvent.click(newButton);

    const nameField = screen.getByLabelText("Series Name");
    await userEvent.type(nameField, "New Series");

    const saveButton = screen.getByRole("button", { name: "Save" });
    await userEvent.click(saveButton);

    await wait();

    expect(doc.set).toHaveBeenCalledWith({
      name: "New Series",
      startDate: getToday(),
      endDate: getFutureDate(3, "month"),
      description: "",
    });
  });
});
