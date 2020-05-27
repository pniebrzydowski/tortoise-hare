import React, { FunctionComponent } from 'react';

import { useFormContext } from 'react-hook-form';

import { StyledInput } from '../../../ui/Input';
import FieldWrapper from '../../FieldWrapper';

interface Props {
  formName: string;
  fieldName: string;
  defaultValue?: string;
  label?: string;
  error?: string;
  required?: boolean;
  pattern?: RegExp;
}

const Time: FunctionComponent<Props> = ({
  formName,
  fieldName,
  label,
  error,
  defaultValue,
  required,
}) => {
  const { register } = useFormContext();
  const fieldId = `${formName}_${fieldName}`;

  return (
    <FieldWrapper fieldId={fieldId} label={label} error={error}>
      <StyledInput
        type="text"
        id={fieldId}
        name={fieldName}
        defaultValue={defaultValue}
        ref={register({
          required,
          pattern: /^\d?\d?:?[0-5]?[0-9]:[0-5][0-9]$/,
        })}
      />
    </FieldWrapper>
  );
};

export default Time;
