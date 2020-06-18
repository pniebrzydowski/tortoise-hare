import React, { FunctionComponent } from 'react';

import { useFormContext } from 'react-hook-form';

import { StyledInput } from '../../../ui/Input';
import FieldWrapper from '../../FieldWrapper';

interface Props {
  type?: "text" | "email" | "phone" | "password";
  formName: string;
  fieldName: string;
  defaultValue?: string;
  label?: string;
  error?: string;
  required?: boolean;
}

const Text: FunctionComponent<Props> = ({
  type = "text",
  formName,
  fieldName,
  defaultValue,
  label,
  error,
  required,
}) => {
  const { register } = useFormContext();
  const fieldId = `${formName}_${fieldName}`;

  return (
    <FieldWrapper fieldId={fieldId} label={label} error={error}>
      <StyledInput
        type={type}
        id={fieldId}
        name={fieldName}
        defaultValue={defaultValue}
        ref={register({ required })}
      />
    </FieldWrapper>
  );
};

export default Text;
