import React from 'react';

import App from './App';
import { render } from './utils/tests';

test("renders heading", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Tortoise and Hare/i);
  expect(linkElement).toBeInTheDocument();
});
