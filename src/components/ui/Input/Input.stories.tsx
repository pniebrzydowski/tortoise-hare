import React from 'react';

import { select } from '@storybook/addon-knobs';

import { StyledInput, StyledSelect, StyledTextarea } from './Input';

export default {
  title: "Styled Components/Input",
};

export const Input = () => {
  const type = select("Type", ["text", "number"], "text");
  return <StyledInput type={type} />;
};

export const Select = () => {
  const opts = Array.from({ length: 5 }, (v, k) => k + 1);
  return (
    <StyledSelect>
      {opts.map((opt) => (
        <option key={opt} value={opt}>
          Option {opt}
        </option>
      ))}
    </StyledSelect>
  );
};

export const Textarea = () => <StyledTextarea />;
