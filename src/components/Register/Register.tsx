import React, { FunctionComponent, useContext, useState } from 'react';

import { FormContext, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import routes from '../../routing/routes';
import { FirebaseContext } from '../firebase';
import Text from '../form/fields/Text';
import { StyledError } from '../form/FieldWrapper';
import { PrimaryButton } from '../ui/Button';

interface RegisterFormData {
  name: string;
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
  const history = useHistory();

  if (!firebase) {
    return null;
  }

  const onSubmit = ({
    email,
    password,
    passwordConfirm,
    name,
  }: RegisterFormData) => {
    if (password.length < 8) {
      form.setError("password", "minLength");
      return;
    }
    if (password !== passwordConfirm) {
      form.setError("passwordConfirm", "notMatch");
      return;
    }

    firebase.auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser: firebase.auth.UserCredential) => {
        if (!authUser) {
          return;
        }
        const userId = authUser?.user?.uid;

        firebase.firestore
          .collection("runners")
          .add({
            userId,
            name,
          })
          .then(() => {
            history.push(routes.HOME);
          })
          .catch((err) => {
            setSubmitError(err.message);
          });
      })
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
              fieldName="name"
              label="Name"
              required
              error={form.errors.email && "Please enter your name"}
            />
            <Text
              type="email"
              formName="register"
              fieldName="email"
              label="Email Address"
              required
              error={form.errors.email && "Please enter your email"}
            />
            <Text
              type="password"
              formName="register"
              fieldName="password"
              label="Password (at least 8 characters)"
              required
              error={
                form.errors.password &&
                (form.errors.password.type === "minLength"
                  ? "Password must be at least 8 characters"
                  : "Please enter a password")
              }
            />
            <Text
              type="password"
              formName="register"
              fieldName="passwordConfirm"
              label="Confirm Password"
              required
              error={
                form.errors.passwordConfirm &&
                (form.errors.passwordConfirm.type === "notMatch"
                  ? "Passwords do not match"
                  : "Please confirm your password")
              }
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
