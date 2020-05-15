import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';

import { FormWrapper } from '../../../../../.storybook/decorators';
import Text from './Text';

export default {
  title: "UI Components/Form Fields",
  decorators: [FormWrapper],
};

export const TextField = () => {
  const label = text("Label", "Text");
  const error = text("Error", "Error Message");
  const required = boolean("Required", true);

  return (
    <Text
      formName="storybook"
      fieldName="text"
      label={label}
      error={error}
      required={required}
    />
  );
};
