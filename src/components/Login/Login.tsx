import React, { FunctionComponent, useContext } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { FirebaseContext } from '../firebase';
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
  const firebase = useContext(FirebaseContext);
  const loggedUser = useAuth();
  const form = useForm<LoginFormData>();

  if (!firebase) {
    return null;
  }

  if (loggedUser) {
    return <>Already logged in as {loggedUser.email}</>;
  }

  const onSubmit = ({ email, password }: LoginFormData) => {
    firebase.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
