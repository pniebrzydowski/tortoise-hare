import React, { FunctionComponent, useContext, useState } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import styled from 'styled-components';

import { FirebaseContext } from '../firebase';
import Text from '../form/fields/Text';
import { StyledError } from '../form/FieldWrapper';
import { PrimaryButton } from '../ui/Button';

interface LoginFormData {
  email: string;
  password: string;
}

const StyledFormContainer = styled("div")`
  margin-bottom: ${(props) => props.theme.spacing.medium};
  margin-top: ${(props) => props.theme.spacing.medium};
`;

const StyledFormError = styled(StyledError)`
  display: block;
  padding: ${(props) => props.theme.spacing.small} 0;
`;

const Login: FunctionComponent = () => {
  const firebase = useContext(FirebaseContext);
  const form = useForm<LoginFormData>();
  const [submitError, setSubmitError] = useState("");

  if (!firebase) {
    return null;
  }

  const onSubmit = ({ email, password }: LoginFormData) => {
    firebase.auth.signInWithEmailAndPassword(email, password).catch((err) => {
      setSubmitError(err.message);
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
          {submitError && <StyledFormError>{submitError}</StyledFormError>}
          <PrimaryButton type="submit">Log in</PrimaryButton>
        </form>
      </FormContext>
    </section>
  );
};

export default Login;
