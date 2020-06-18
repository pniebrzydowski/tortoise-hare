import { useContext, useEffect, useState } from 'react';

import FirebaseContext from '../FirebaseContext';

const useDoc = (collection: string, ref: string) => {
  const firebase = useContext(FirebaseContext);
  const [doc, setDoc] = useState<firebase.firestore.DocumentData>();

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.firestore
      .collection(collection)
      .doc(ref)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDoc(doc.data());
        }
      })
      .catch((err) => {
        console.error("Error retrieving data", err);
      });

    return () => {};
  }, []);

  return doc;
};

export default useDoc;
