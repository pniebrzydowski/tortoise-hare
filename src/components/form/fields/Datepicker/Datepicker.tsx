import React, { FunctionComponent } from 'react';

import DatePicker from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';

import {
  DEFAULT_DATEPICKER_FORMAT,
  getDateValue
} from '../../../../utils/date';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  formName: string;
  fieldName: string;
  label?: string;
  defaultValue?: number;
  error?: string;
  required?: boolean;
}

const Datepicker: FunctionComponent<Props> = ({
  formName,
  fieldName,
  label,
  defaultValue,
  error,
  required,
}) => {
  const { control } = useFormContext();

  return (
    <>
      {label && <label htmlFor={`${formName}_${fieldName}`}>{label}</label>}
      <Controller
        as={DatePicker}
        name={fieldName}
        id={`${formName}_${fieldName}`}
        control={control}
        defaultValue={defaultValue}
        valueName="selected"
        rules={{ required }}
        onChange={([selected]) => getDateValue(selected)}
        dateFormat={DEFAULT_DATEPICKER_FORMAT}
      />
      {error && <span>{error}</span>}
    </>
  );
};

export default Datepicker;
