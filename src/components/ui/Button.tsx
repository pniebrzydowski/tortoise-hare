import styled from 'styled-components';

const StyledButton = styled("button")`
  appearance: none;
  background: none;
  border: none;
  font-size: 1rem;
  padding: ${(props) =>
    `${props.theme.spacing.small} ${props.theme.spacing.medium}`};
  border-radius: ${(props) => props.theme.borders.radius};
  border: ${(props) => props.theme.borders.style};
  border-color: transparent;
`;

export const PrimaryButton = styled(StyledButton)`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.xDark};
`;

export const OutlineButton = styled(StyledButton)`
  border: ${(props) => props.theme.borders.style};
  border-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.dark};
`;
