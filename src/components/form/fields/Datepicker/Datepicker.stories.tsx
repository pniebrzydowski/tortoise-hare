import React, { ReactNode } from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import { FormContext, useForm } from 'react-hook-form';

import { getToday } from '../../../../utils/date';
import Datepicker from './Datepicker';

export default {
  title: "UI Components/Form Fields",
  decorators: [
    (storyFn: () => ReactNode) => {
      const form = useForm();
      return <FormContext {...form}>{storyFn()}</FormContext>;
    },
  ],
};

export const Date = () => {
  const label = text("Label", "Date");
  const error = text("Error", "Error Message");
  const required = boolean("Required", true);
  const includeTime = boolean("Include Time", false);

  return (
    <Datepicker
      formName="storybook"
      fieldName="date"
      label={label}
      defaultValue={getToday()}
      error={error}
      required={required}
      includeTime={includeTime}
    />
  );
};
