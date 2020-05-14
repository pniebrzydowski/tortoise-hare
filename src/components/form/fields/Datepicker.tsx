import React, { FunctionComponent, useState } from 'react';

import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';

import {
  DEFAULT_DATEPICKER_FORMAT,
  DEFAULT_DATETIMEPICKER_FORMAT,
  getDateObject,
  getDateString,
  getDateTimeString
} from '../../../utils/date';
import { StyledInput } from '../../ui/Input';
import FieldWrapper from '../FieldWrapper';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  formName: string;
  fieldName: string;
  label?: string;
  defaultValue?: string;
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
  const initialSelected = defaultValue ? getDateObject(defaultValue) : null;
  const [selectedDate, setSelectedDate] = useState(initialSelected);
  const fieldId = `${formName}_${fieldName}`;

  return (
    <FieldWrapper fieldId={fieldId} label={label} error={error}>
      <Controller
        as={(controllerProps) => {
          const { value, defaultValue, ...rest } = controllerProps;
          return (
            <DatePicker
              selected={selectedDate}
              dateFormat={
                includeTime
                  ? DEFAULT_DATETIMEPICKER_FORMAT
                  : DEFAULT_DATEPICKER_FORMAT
              }
              customInput={<StyledInput />}
              showTimeSelect={includeTime}
              {...rest}
            />
          );
        }}
        name={fieldName}
        id={`${formName}_${fieldName}`}
        defaultValue={defaultValue}
        rules={{ required }}
        onChange={([selected]) => {
          setSelectedDate(selected);
          return includeTime
            ? getDateTimeString(selected)
            : getDateString(selected);
        }}
      />
    </FieldWrapper>
  );
};

export default Datepicker;
