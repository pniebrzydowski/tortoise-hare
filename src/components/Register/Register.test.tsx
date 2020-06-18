import React from 'react';

import { render, screen, userEvent, wait } from '../../utils/tests';
import { FirebaseContext } from '../firebase';
import Register from './Register';

class FirebaseMock {
  auth: any;

  constructor() {
    this.auth = {
      createUserWithEmailAndPassword: jest.fn(),
      currentUser: {
        updateProfile: jest.fn(),
      },
    };
  }
}

describe("Register form", () => {
  beforeEach(jest.resetAllMocks);

  const firebase = new FirebaseMock();

  const renderWithFirebase = () => {
    render(
      <FirebaseContext.Provider value={firebase}>
        <Register />
      </FirebaseContext.Provider>
    );
  };

  const clickRegister = async () => {
    userEvent.click(screen.getByRole("button", { name: "Register" }));
    await wait();
  };

  it("submits register form", async () => {
    jest
      .spyOn(firebase.auth, "createUserWithEmailAndPassword")
      .mockImplementation(() => new Promise((resolve) => resolve()));
    jest
      .spyOn(firebase.auth.currentUser, "updateProfile")
      .mockImplementation(() => new Promise((resolve) => resolve()));

    const email = "test@test.com";
    const password = "password";
    const name = "Test Test";

    renderWithFirebase();

    userEvent.type(screen.getByLabelText("Name"), name);
    userEvent.type(screen.getByLabelText("Email Address"), email);
    userEvent.type(
      screen.getByLabelText("Password (at least 8 characters)"),
      password
    );
    userEvent.type(screen.getByLabelText("Confirm Password"), password);

    await clickRegister();

    expect(firebase.auth.createUserWithEmailAndPassword).toHaveBeenCalledWith(
      email,
      password
    );
  });

  it("displays submit error", async () => {
    const SUBMIT_ERROR = "Email format error";
    jest
      .spyOn(firebase.auth, "createUserWithEmailAndPassword")
      .mockImplementation(
        () =>
          new Promise((resolve, reject) =>
            reject({
              message: SUBMIT_ERROR,
            })
          )
      );
    const email = "test";
    const password = "password";
    const name = "Test Test";

    renderWithFirebase();

    userEvent.type(screen.getByLabelText("Name"), name);
    userEvent.type(screen.getByLabelText("Email Address"), email);
    userEvent.type(
      screen.getByLabelText("Password (at least 8 characters)"),
      password
    );
    userEvent.type(screen.getByLabelText("Confirm Password"), password);

    await clickRegister();

    expect(firebase.auth.createUserWithEmailAndPassword).toHaveBeenCalledWith(
      email,
      password
    );

    expect(screen.getByText(SUBMIT_ERROR)).toBeVisible();
  });

  it("displays field errors", async () => {
    jest
      .spyOn(firebase.auth, "createUserWithEmailAndPassword")
      .mockImplementation();

    renderWithFirebase();

    await clickRegister();
    expect(screen.getByText("Please enter your name")).toBeVisible();
    expect(screen.getByText("Please enter your email")).toBeVisible();
    expect(screen.getByText("Please enter a password")).toBeVisible();
    expect(screen.getByText("Please confirm your password")).toBeVisible();

    userEvent.type(screen.getByLabelText("Name"), "Test Test");
    userEvent.type(screen.getByLabelText("Email Address"), "test@test.com");
    userEvent.type(
      screen.getByLabelText("Password (at least 8 characters)"),
      "2short"
    );
    userEvent.type(screen.getByLabelText("Confirm Password"), "notthesame");
    await clickRegister();
    expect(
      screen.getByText("Password must be at least 8 characters")
    ).toBeVisible();

    userEvent.type(
      screen.getByLabelText("Password (at least 8 characters)"),
      "LongEnoughPassword"
    );
    await clickRegister();
    expect(screen.getByText("Passwords do not match")).toBeVisible();
  });
});
