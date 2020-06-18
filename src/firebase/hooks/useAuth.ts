import { useContext, useEffect, useState } from 'react';

import FirebaseContext from '../FirebaseContext';

const useAuth = () => {
  const firebase = useContext(FirebaseContext);
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
