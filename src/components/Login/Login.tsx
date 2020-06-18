import React, { FunctionComponent, useContext, useState } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../routing/routes';
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

const StyledForgotLink = styled(Link)`
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
      <p>
        Don't have an account? <Link to={routes.REGISTER}>Create one now</Link>
      </p>

      <FormContext {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <StyledFormContainer>
            <Text
              type="email"
              formName="login"
              fieldName="email"
              label="Email Address"
              required
              error={form.errors.email && "Please enter your email"}
            />
            <Text
              type="password"
              formName="login"
              fieldName="password"
              label="Password"
              required
              error={form.errors.password && "Please enter your password"}
            />
            <p>
              <StyledForgotLink to={routes.FORGOT_PASSWORD}>
                Forgot your password?
              </StyledForgotLink>
            </p>
          </StyledFormContainer>
          {submitError && <StyledFormError>{submitError}</StyledFormError>}
          <PrimaryButton type="submit">Log in</PrimaryButton>
        </form>
      </FormContext>
    </section>
  );
};

export default Login;
