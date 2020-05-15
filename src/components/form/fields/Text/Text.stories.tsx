import React, { ReactNode } from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import { FormContext, useForm } from 'react-hook-form';

import Text from './Text';

export default {
  title: "UI Components/Form Fields",
  decorators: [
    (storyFn: () => ReactNode) => {
      const form = useForm();
      return <FormContext {...form}>{storyFn()}</FormContext>;
    },
  ],
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
