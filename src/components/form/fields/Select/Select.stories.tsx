import React, { ReactNode } from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import { FormContext, useForm } from 'react-hook-form';

import Select from './Select';

export default {
  title: "UI Components/Form Fields",
  decorators: [
    (storyFn: () => ReactNode) => {
      const form = useForm();
      return <FormContext {...form}>{storyFn()}</FormContext>;
    },
  ],
};

export const SelectField = () => {
  const label = text("Label", "Select an Option");
  const error = text("Error", "Error Message");
  const required = boolean("Required", true);
  const options = [{ value: "Option 1" }, { value: "Option 2" }];

  return (
    <Select
      formName="storybook"
      fieldName="number"
      label={label}
      defaultValue={options[1].value}
      options={options}
      error={error}
      required={required}
    />
  );
};
