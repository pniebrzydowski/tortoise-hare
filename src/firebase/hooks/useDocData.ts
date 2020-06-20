import { useContext, useEffect, useState } from 'react';

import FirebaseContext from '../FirebaseContext';

const useDocData = (collection: string, id: string) => {
  const firebase = useContext(FirebaseContext);
  const [docData, setDocData] = useState<firebase.firestore.DocumentData>();

  useEffect(() => {
    if (!firebase) {
      return;
    }

    firebase.firestore
      .collection(collection)
      .doc(id)
      .onSnapshot((doc) => {
        setDocData(doc.data());
      });

    return () => {};
  }, [firebase, collection, id]);

  return docData;
};

export default useDocData;
