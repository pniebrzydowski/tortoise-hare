import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  linkUrl: string;
  linkText?: string;
  title: string;
  info: string[];
}

const StyledListingLink = styled(Link)`
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

const StyledListingItem = styled("li")`
  & + & {
    margin-top: ${(props) => props.theme.spacing.small};
  }
`;

const StyledListingInfo = styled("ul")`
  color: ${(props) => props.theme.colors.secondary};
`;

const ListingItem: FunctionComponent<Props> = ({
  linkUrl,
  linkText = "Details",
  title,
  info,
}) => {
  return (
    <StyledListingItem>
      <StyledListingLink to={linkUrl}>
        <div>
          <h3>{title}</h3>
          <StyledListingInfo>
            {info.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </StyledListingInfo>
        </div>
        <span>{linkText} &gt;</span>
      </StyledListingLink>
    </StyledListingItem>
  );
};

export default ListingItem;
