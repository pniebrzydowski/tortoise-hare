import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/design/globalStyle';
import theme from '../src/design/theme';

addDecorator((storyFn: () => React.ReactNode) => (
  <div style={{ padding: 10 }}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {storyFn()}
      </ThemeProvider>
    </BrowserRouter>
  </div>
));

addDecorator(withKnobs);
