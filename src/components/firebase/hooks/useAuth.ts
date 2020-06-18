import { useContext, useEffect, useState } from 'react';

import Firebase from '../';
import FirebaseContext from '../FirebaseContext';

const useAuth = () => {
  const firebase: Firebase | null = useContext(FirebaseContext);
  const [authUser, setAuthUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    if (!firebase) {
      return;
    }

    const unlisten = firebase.auth.onAuthStateChanged((authUser) => {
      authUser ? setAuthUser(authUser) : setAuthUser(null);
    });
    return () => {
      unlisten();
    };
  });

  return authUser;
};

export default useAuth;
