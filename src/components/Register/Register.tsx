import React, { FunctionComponent, useContext, useState } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../routing/routes';
import { FirebaseContext } from '../firebase';
import Text from '../form/fields/Text';
import { StyledError } from '../form/FieldWrapper';
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

const StyledFormError = styled(StyledError)`
  display: block;
  padding: ${(props) => props.theme.spacing.small} 0;
`;

const Register: FunctionComponent = () => {
  const form = useForm<RegisterFormData>();
  const firebase = useContext(FirebaseContext);
  const [submitError, setSubmitError] = useState("");

  if (!firebase) {
    return null;
  }

  const onSubmit = ({ email, password }: RegisterFormData) => {
    firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        setSubmitError(err.message);
      });
  };

  return (
    <section>
      <h2>Register</h2>
      <p>
        Already have an account? <Link to={routes.LOGIN}>Log in here</Link>
      </p>

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
          {submitError && <StyledFormError>{submitError}</StyledFormError>}
          <PrimaryButton type="submit">Register</PrimaryButton>
        </form>
      </FormContext>
    </section>
  );
};

export default Register;
