import React, { FunctionComponent } from 'react';

import { Controller } from 'react-hook-form';

import { StyledInput } from '../../../ui/Input';
import FieldWrapper from '../../FieldWrapper';

interface Props {
  formName: string;
  fieldName: string;
  label?: string;
  type?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  error?: string;
  required?: boolean;
}

const Number: FunctionComponent<Props> = ({
  formName,
  fieldName,
  label,
  min,
  max,
  defaultValue,
  error,
  required,
}) => {
  const fieldId = `${formName}_${fieldName}`;

  return (
    <FieldWrapper fieldId={fieldId} label={label} error={error}>
      <Controller
        as={StyledInput}
        type="number"
        step="0.1"
        id={fieldId}
        min={min}
        max={max}
        name={fieldName}
        defaultValue={defaultValue}
        rules={{ required }}
        onChange={([e]) =>
          !e.target.value ? "" : Math.abs(parseFloat(e.target.value))
        }
      />
    </FieldWrapper>
  );
};

export default Number;
