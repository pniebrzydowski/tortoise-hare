import React, { ReactNode } from 'react';

import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../design/theme';

export const renderWithTheme = (children: ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
