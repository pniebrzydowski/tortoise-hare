import React from 'react';

import { FirebaseContext } from '../../firebase';
import {
  BaseFirebaseMock,
  render,
  screen,
  userEvent,
  wait
} from '../../utils/tests';
import ForgotPassword from './ForgotPassword';

class FirebaseMock extends BaseFirebaseMock {
  constructor() {
    super();
    this.auth.sendPasswordResetEmail = jest.fn();
  }
}

const clickSubmit = async () => {
  userEvent.click(screen.getByRole("button", { name: "Submit" }));
  await wait();
};

describe("Forgot Password form", () => {
  beforeEach(jest.resetAllMocks);

  const firebase = new FirebaseMock();

  const renderWithFirebase = () => {
    render(
      <FirebaseContext.Provider value={firebase}>
        <ForgotPassword />
      </FirebaseContext.Provider>
    );
  };

  it("submits form", async () => {
    jest
      .spyOn(firebase.auth, "sendPasswordResetEmail")
      .mockImplementation(() => new Promise((resolve) => resolve()));
    const email = "test@test.com";

    renderWithFirebase();

    userEvent.type(screen.getByLabelText("Email Address"), email);

    await clickSubmit();

    expect(firebase.auth.sendPasswordResetEmail).toHaveBeenCalledWith(email);
  });

  it("displays submit error", async () => {
    const SUBMIT_ERROR = "Email format error";
    jest.spyOn(firebase.auth, "sendPasswordResetEmail").mockImplementation(
      () =>
        new Promise((resolve, reject) =>
          reject({
            message: SUBMIT_ERROR,
          })
        )
    );
    const email = "test";

    renderWithFirebase();

    userEvent.type(screen.getByLabelText("Email Address"), email);

    await clickSubmit();

    expect(firebase.auth.sendPasswordResetEmail).toHaveBeenCalledWith(email);

    expect(screen.getByText(SUBMIT_ERROR)).toBeVisible();
  });

  it("displays field errors", async () => {
    jest.spyOn(firebase.auth, "sendPasswordResetEmail").mockImplementation();

    renderWithFirebase();

    await clickSubmit();

    expect(firebase.auth.sendPasswordResetEmail).not.toHaveBeenCalled();

    expect(screen.getByText("Please enter your email")).toBeVisible();
  });
});
