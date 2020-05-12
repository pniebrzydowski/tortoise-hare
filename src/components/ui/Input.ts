import styled, { css } from 'styled-components';

export const inputCss = css`
  appearance: none;
  background: #fff;
  border-radius: ${(props) => props.theme.borders.radius};
  padding: ${(props) => props.theme.spacing.medium};
  border: ${(props) =>
    `${props.theme.borders.style} ${props.theme.colors.light}`};
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline-color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const StyledSelect = styled("select")`
  ${inputCss}
`;

export const StyledInput = styled("input")`
  ${inputCss}
`;
