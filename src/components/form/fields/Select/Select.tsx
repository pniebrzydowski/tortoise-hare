import React, { FunctionComponent } from 'react';

import { useFormContext } from 'react-hook-form';

import { StyledSelect } from '../../../ui/Input';
import FieldWrapper from '../../FieldWrapper';

export interface SelectOption {
  label?: string;
  value: string;
}

interface Props {
  formName: string;
  fieldName: string;
  label?: string;
  options: SelectOption[];
  defaultValue?: string;
  error?: string;
  required?: boolean;
}

const Select: FunctionComponent<Props> = ({
  formName,
  fieldName,
  label,
  options,
  defaultValue,
  error,
  required,
}) => {
  const { register } = useFormContext();
  const fieldId = `${formName}_${fieldName}`;

  return (
    <FieldWrapper fieldId={fieldId} label={label} error={error}>
      <StyledSelect
        id={fieldId}
        name={fieldName}
        defaultValue={defaultValue}
        ref={register({ required })}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value || option.label}>
            {option.value}
          </option>
        ))}
      </StyledSelect>
    </FieldWrapper>
  );
};

export default Select;
