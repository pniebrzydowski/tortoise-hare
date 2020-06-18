import React, { FunctionComponent, useContext } from 'react';

import { FirebaseContext } from '../firebase';
import { PrimaryButton } from '../ui/Button';

const Logout: FunctionComponent = () => {
  const firebase = useContext(FirebaseContext);
  if (!firebase) {
    return null;
  }

  return (
    <PrimaryButton onClick={() => firebase.auth.signOut()}>
      Log out
    </PrimaryButton>
  );
};

export default Logout;
