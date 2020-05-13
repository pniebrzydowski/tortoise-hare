import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/design/globalStyle';
import theme from '../src/design/theme';

addDecorator((storyFn: () => React.ReactNode) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
));

addDecorator(withKnobs);
