import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useAuth from '../firebase/hooks/useAuth';
import Logout from '../Logout';

const StyledHeader = styled("header")`
  background-color: ${(props) => props.theme.colors.dark};
  padding: ${(props) => props.theme.spacing.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colors.xLight};
  text-decoration: none;
`;

const StyledLoginLink = styled(Link)`
  color: ${(props) => props.theme.colors.xLight};
`;

const SiteHeader: FunctionComponent = () => {
  const loggedUser = useAuth();

  return (
    <StyledHeader>
      <StyledLink to="/">
        <h1>Tortoise and Hare</h1>
      </StyledLink>
      {loggedUser ? (
        <Logout />
      ) : (
        <StyledLoginLink to="/login">Login or Register</StyledLoginLink>
      )}
    </StyledHeader>
  );
};

export default SiteHeader;
