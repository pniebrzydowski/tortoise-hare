import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

import Login from '../components/Login';
import Register from '../components/Register';

const StyledFlexBox = styled("div")`
  & > * + * {
    margin-top: ${(props) => props.theme.spacing.medium};
  }
  @media screen and (min-width: 680px) {
    display: flex;
    justify-content: space-between;

    & > * {
      margin-top: 0;
      width: 100%;
    }
    & > * + * {
      margin-left: ${(props) => props.theme.spacing.xLarge};
    }
  }
`;

const LoginPage: FunctionComponent = () => {
  return (
    <StyledFlexBox>
      <Login />
      <Register />
    </StyledFlexBox>
  );
};

export default LoginPage;
