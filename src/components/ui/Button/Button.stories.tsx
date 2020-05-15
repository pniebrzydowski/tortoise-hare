import React from 'react';

import { action } from '@storybook/addon-actions';

import { OutlineButton, PrimaryButton } from './Button';

export default {
  title: "Styled Components/Buttons",
};

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
