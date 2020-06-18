import React, { FunctionComponent } from 'react';

import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import ForgotPassword from '../components/ForgotPassword';
import Login from '../components/Login';
import Register from '../components/Register';
import routes from '../routing/routes';

const StyledFlexBox = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.xLarge};

  & > * {
    width: 100%;
    max-width: 500px;
  }
`;

const LoginPage: FunctionComponent = () => {
  return (
    <StyledFlexBox>
      <Switch>
        <Route exact path={routes.LOGIN}>
          <Login />
        </Route>
        <Route exact path={routes.REGISTER}>
          <Register />
        </Route>
        <Route exact path={routes.FORGOT_PASSWORD}>
          <ForgotPassword />
        </Route>
      </Switch>
    </StyledFlexBox>
  );
};

export default LoginPage;
