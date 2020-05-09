import React, { FunctionComponent } from 'react';

import DatePicker from 'react-datepicker';
import { Controller, useFormContext } from 'react-hook-form';

import { DEFAULT_DATEPICKER_FORMAT, getDateValue } from '../../../utils/date';
import { StyledInput } from '../../ui/Input';
import FieldWrapper from '../FieldWrapper';

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
  const fieldId = `${formName}_${fieldName}`;

  return (
    <FieldWrapper fieldId={fieldId} label={label} error={error}>
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
        customInput={<StyledInput />}
      />
    </FieldWrapper>
  );
};

export default Datepicker;
