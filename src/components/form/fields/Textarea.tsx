import React, { FunctionComponent } from 'react';

import { useFormContext } from 'react-hook-form';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  formName: string;
  fieldName: string;
  label?: string;
  defaultValue?: string;
  error?: string;
  required?: boolean;
}

const Textarea: FunctionComponent<Props> = ({
  formName,
  fieldName,
  label,
  defaultValue,
  error,
  required,
}) => {
  const { register } = useFormContext();

  return (
    <>
      {label && <label htmlFor={`${formName}_${fieldName}`}>{label}</label>}
      <textarea
        id={`${formName}_${fieldName}`}
        name={fieldName}
        defaultValue={defaultValue}
        ref={register({ required })}
      />
      {error && <span>{error}</span>}
    </>
  );
};

export default Textarea;
