import React, { ReactNode } from 'react';

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from '../design/theme';

export const customRender = (children: ReactNode) =>
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );

export * from "@testing-library/react";

// override render method
export { customRender as render, userEvent };

export class FirebaseMock {
  auth: any;

  constructor() {
    this.auth = {
      signInWithEmailAndPassword: jest.fn(),
      createUserWithEmailAndPassword: jest.fn(),
      currentUser: {
        updateProfile: jest.fn(),
      },
    };
  }
}
