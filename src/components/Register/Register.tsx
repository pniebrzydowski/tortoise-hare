import React, { FunctionComponent, useContext } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { FirebaseContext } from '../firebase';
import useAuth from '../firebase/hooks/useAuth';
import Text from '../form/fields/Text';
import { PrimaryButton } from '../ui/Button';

interface RegisterFormData {
  email: string;
  password: string;
  passwordConfirm: string;
}

const StyledFormContainer = styled("div")`
  margin-bottom: ${(props) => props.theme.spacing.medium};
  margin-top: ${(props) => props.theme.spacing.medium};
`;

const Register: FunctionComponent = () => {
  const loggedUser = useAuth();
  const form = useForm<RegisterFormData>();
  const firebase = useContext(FirebaseContext);

  if (!firebase) {
    return null;
  }

  if (loggedUser) {
    return <>Already logged in as {loggedUser.email}</>;
  }

  const onSubmit = ({ email, password }: RegisterFormData) => {
    firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <h2>Register</h2>
      <p>Don't have an account? Create one now:</p>

      <FormContext {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <StyledFormContainer>
            <Text
              formName="register"
              fieldName="email"
              label="Email Address"
              required
              error={form.errors.email && "Please enter your email"}
            />
            <Text
              formName="register"
              fieldName="password"
              label="Password"
              required
              error={form.errors.password && "Please enter a password"}
            />
            <Text
              formName="register"
              fieldName="password-confirm"
              label="Confirm Password"
              required
              error={form.errors.password && "Please confirm your password"}
            />
          </StyledFormContainer>
          <PrimaryButton type="submit">Register</PrimaryButton>
        </form>
      </FormContext>
    </section>
  );
};

export default Register;
