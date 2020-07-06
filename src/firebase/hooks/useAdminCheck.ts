import { useContext, useEffect, useState } from "react";

import FirebaseContext from "../FirebaseContext";
import useAuth from "./useAuth";

const useAdminCheck = () => {
  const firebase = useContext(FirebaseContext);
  const authUser = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    if (!authUser || !firebase) {
      setIsAdmin(false);
      return;
    }

    firebase.firestore
      .collection("runners")
      .doc(authUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsAdmin(doc.data()?.isAdmin || false);
        }
      })
      .catch((err) => {
        console.error("Error retrieving user", err);
      });

    return () => {};
  }, [firebase, authUser]);

  return isAdmin;
};

export default useAdminCheck;
