import React, { FunctionComponent } from 'react';

import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import { inputCss } from '../../ui/Input';
import FieldWrapper from '../FieldWrapper';

interface Props {
  formName: string;
  fieldName: string;
  label?: string;
  defaultValue?: string;
  error?: string;
  required?: boolean;
}

const StyledTextarea = styled("textarea")`
  ${inputCss}
`;

const Textarea: FunctionComponent<Props> = ({
  formName,
  fieldName,
  label,
  defaultValue,
  error,
  required,
}) => {
  const { register } = useFormContext();
  const fieldId = `${formName}_${fieldName}`;

  return (
    <FieldWrapper fieldId={fieldId} label={label} error={error}>
      <StyledTextarea
        id={fieldId}
        name={fieldName}
        defaultValue={defaultValue}
        ref={register({ required })}
      />
    </FieldWrapper>
  );
};

export default Textarea;
