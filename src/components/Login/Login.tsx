import React, { FunctionComponent } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import styled from 'styled-components';

import useAuth from '../firebase/hooks/useAuth';
import Text from '../form/fields/Text';
import { PrimaryButton } from '../ui/Button';

interface LoginFormData {
  email: string;
  password: string;
}

const StyledFormContainer = styled("div")`
  margin-bottom: ${(props) => props.theme.spacing.medium};
  margin-top: ${(props) => props.theme.spacing.medium};
`;

const Login: FunctionComponent = () => {
  const loggedUser = useAuth();
  const form = useForm<LoginFormData>();

  if (loggedUser) {
    return <>Already logged in as {loggedUser.email}</>;
  }

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <section>
      <h2>Login</h2>
      <p>Already have an account? Log in here:</p>

      <FormContext {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <StyledFormContainer>
            <Text
              formName="login"
              fieldName="email"
              label="Email Address"
              required
              error={form.errors.email && "Please enter your email"}
            />
            <Text
              formName="login"
              fieldName="password"
              label="Password"
              required
              error={form.errors.password && "Please enter your password"}
            />
          </StyledFormContainer>
          <PrimaryButton type="submit">Log in</PrimaryButton>
        </form>
      </FormContext>
    </section>
  );
};

export default Login;
