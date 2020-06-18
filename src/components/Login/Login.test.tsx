import React from 'react';

import { render, screen, userEvent, wait } from '../../utils/tests';
import { FirebaseContext } from '../firebase';
import Login from './Login';

class FirebaseMock {
  auth: any;

  constructor() {
    this.auth = {
      signInWithEmailAndPassword: jest.fn(),
    };
  }
}

describe("Login form", () => {
  beforeEach(jest.resetAllMocks);

  const firebase = new FirebaseMock();

  const renderWithFirebase = () => {
    render(
      <FirebaseContext.Provider value={firebase}>
        <Login />
      </FirebaseContext.Provider>
    );
  };

  it("submits login form", async () => {
    jest
      .spyOn(firebase.auth, "signInWithEmailAndPassword")
      .mockImplementation(() => new Promise((resolve) => resolve()));
    const email = "test@test.com";
    const password = "password";

    renderWithFirebase();

    userEvent.type(screen.getByLabelText("Email Address"), email);
    userEvent.type(screen.getByLabelText("Password"), password);

    userEvent.click(screen.getByRole("button", { name: "Log in" }));
    await wait();

    expect(firebase.auth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      email,
      password
    );
  });

  it("displays submit error", async () => {
    const SUBMIT_ERROR = "Email format error";
    jest.spyOn(firebase.auth, "signInWithEmailAndPassword").mockImplementation(
      () =>
        new Promise((resolve, reject) =>
          reject({
            message: SUBMIT_ERROR,
          })
        )
    );
    const email = "test";
    const password = "password";

    renderWithFirebase();

    userEvent.type(screen.getByLabelText("Email Address"), email);
    userEvent.type(screen.getByLabelText("Password"), password);

    userEvent.click(screen.getByRole("button", { name: "Log in" }));
    await wait();

    expect(firebase.auth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      email,
      password
    );

    expect(screen.getByText(SUBMIT_ERROR)).toBeVisible();
  });

  it("displays field errors", async () => {
    jest
      .spyOn(firebase.auth, "signInWithEmailAndPassword")
      .mockImplementation();

    renderWithFirebase();

    userEvent.click(screen.getByRole("button", { name: "Log in" }));
    await wait();

    expect(firebase.auth.signInWithEmailAndPassword).not.toHaveBeenCalled();

    expect(screen.getByText("Please enter your email")).toBeVisible();
    expect(screen.getByText("Please enter your password")).toBeVisible();
  });
});
