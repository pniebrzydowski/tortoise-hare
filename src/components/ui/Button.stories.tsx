import React from 'react';

import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../../design/theme';
import { OutlineButton, PrimaryButton } from './Button';

export default {
  title: "Buttons",
};

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

export const Primary = () => (
  <PrimaryButton onClick={action("primary button clicked")}>
    Primary
  </PrimaryButton>
);

export const Outline = () => (
  <OutlineButton onClick={action("outline button clicked")}>
    Outline
  </OutlineButton>
);
