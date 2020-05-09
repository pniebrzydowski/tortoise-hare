import styled, { css } from 'styled-components';

export const inputCss = css`
  border-radius: ${(props) => props.theme.borders.radius};
  padding: 8px;
  border: ${(props) =>
    `${props.theme.borders.style} ${props.theme.colors.light}`};
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline-color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const StyledInput = styled("input")`
  ${inputCss}
`;
