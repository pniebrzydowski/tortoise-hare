import React, { FunctionComponent } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import useAuth from '../../firebase/hooks/useAuth';
import Logout from '../Logout';

const StyledHeader = styled("header")`
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.xLight};
  padding: ${(props) => props.theme.spacing.medium};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SiteHeader: FunctionComponent = () => {
  const loggedUser = useAuth();

  return (
    <StyledHeader>
      <StyledLink to="/">
        <h1>Tortoise and Hare</h1>
      </StyledLink>
      {loggedUser ? (
        <div>
          Logged in as: <strong>{loggedUser.email} </strong>
          <Logout />
        </div>
      ) : (
        <Link to="/login">Login or Register</Link>
      )}
    </StyledHeader>
  );
};

export default SiteHeader;
