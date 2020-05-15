import React, { ReactNode } from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import { FormContext, useForm } from 'react-hook-form';

import Number from './Number';

export default {
  title: "UI Components/Form Fields",
  decorators: [
    (storyFn: () => ReactNode) => {
      const form = useForm();
      return <FormContext {...form}>{storyFn()}</FormContext>;
    },
  ],
};

export const NumberField = () => {
  const label = text("Label", "Number");
  const error = text("Error", "Error Message");
  const required = boolean("Required", true);

  return (
    <Number
      formName="storybook"
      fieldName="number"
      label={label}
      defaultValue={5}
      error={error}
      required={required}
    />
  );
};
