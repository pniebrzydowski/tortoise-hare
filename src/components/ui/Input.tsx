import styled, { css } from 'styled-components';

export const inputCss = css`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const StyledInput = styled("input")`
  ${inputCss}
`;
