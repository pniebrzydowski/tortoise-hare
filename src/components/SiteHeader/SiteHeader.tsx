import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled("header")`
  background-color: ${(props) => props.theme.colors.dark};
  padding: ${(props) => props.theme.padding.medium};
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.xLight};
  text-decoration: none;
`;

const SiteHeader: FunctionComponent = () => {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <h1>Tortoise and Hare</h1>
      </StyledLink>
    </StyledHeader>
  );
};

export default SiteHeader;
