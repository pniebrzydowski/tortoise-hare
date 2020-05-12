import React, { FunctionComponent } from 'react';

import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';

import {
  DEFAULT_DATEPICKER_FORMAT,
  DEFAULT_DATETIMEPICKER_FORMAT,
  getDateValue
} from '../../../utils/date';
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
  includeTime?: boolean;
}

const Datepicker: FunctionComponent<Props> = ({
  formName,
  fieldName,
  label,
  defaultValue,
  error,
  required,
  includeTime,
}) => {
  const fieldId = `${formName}_${fieldName}`;

  return (
    <FieldWrapper fieldId={fieldId} label={label} error={error}>
      <Controller
        as={DatePicker}
        name={fieldName}
        id={`${formName}_${fieldName}`}
        defaultValue={defaultValue}
        valueName="selected"
        rules={{ required }}
        onChange={([selected]) => getDateValue(selected)}
        customInput={<StyledInput />}
        dateFormat={
          includeTime
            ? DEFAULT_DATETIMEPICKER_FORMAT
            : DEFAULT_DATEPICKER_FORMAT
        }
        showTimeSelect={includeTime}
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
      />
    </FieldWrapper>
  );
};

export default Datepicker;
