import React, { FunctionComponent, useContext, useState } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../routing/routes';
import { FirebaseContext } from '../firebase';
import Text from '../form/fields/Text';
import { StyledError } from '../form/FieldWrapper';
import { PrimaryButton } from '../ui/Button';

interface ResetPasswordFormData {
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

const ForgotPassword: FunctionComponent = () => {
  const firebase = useContext(FirebaseContext);
  const form = useForm<ResetPasswordFormData>();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  if (!firebase) {
    return null;
  }

  const onSubmit = ({ email }: ResetPasswordFormData) => {
    firebase.auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        setSubmitError(err.message);
      });
  };

  if (submitted) {
    return (
      <section>
        <h2>Reset your password</h2>
        <p>
          Your request has been submitted. Please check your email for a link to
          reset your password. Once you have completed the reset process, you
          can <Link to={routes.LOGIN}>log in here</Link>
        </p>
      </section>
    );
  }

  return (
    <section>
      <h2>Reset your password</h2>
      <p>
        Enter your email here. An email will be sent containing a link to reset
        your password.
      </p>

      <FormContext {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <StyledFormContainer>
            <Text
              formName="forgotPassword"
              fieldName="email"
              label="Email Address"
              required
              error={form.errors.email && "Please enter your email"}
            />
          </StyledFormContainer>
          {submitError && <StyledFormError>{submitError}</StyledFormError>}
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </form>
      </FormContext>
    </section>
  );
};

export default ForgotPassword;
