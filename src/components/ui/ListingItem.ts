import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledListingLink = styled(Link)`
  display: flex;
  text-decoration: none;
  border: ${(props) =>
    `${props.theme.borders.style} ${props.theme.colors.light}`};
  border-radius: ${(props) => props.theme.borders.radius};
  background: #fff;
  padding: ${(props) => props.theme.spacing.medium};

  div:first-of-type {
    margin-right: auto;
  }
`;

export const StyledListing = styled("ul")`
  margin-top: ${(props) => props.theme.spacing.medium};
  width: 100%;
`;

export const StyledListingItem = styled("li")`
  & + & {
    margin-top: ${(props) => props.theme.spacing.small};
  }
`;

export const StyledListingInfo = styled("ul")`
  color: ${(props) => props.theme.colors.secondary};
`;
