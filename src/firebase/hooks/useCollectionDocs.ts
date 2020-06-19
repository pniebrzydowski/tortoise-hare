import { useContext, useEffect, useState } from 'react';

import FirebaseContext from '../FirebaseContext';

const useCollectionDocs = (
  collectionName: string,
  sortField?: string,
  sortOrder: "asc" | "desc" = "asc"
) => {
  const firebase = useContext(FirebaseContext);
  const [collection, setCollection] = useState<
    firebase.firestore.QueryDocumentSnapshot[]
  >();

  useEffect(() => {
    if (!firebase) {
      return;
    }

    if (sortField) {
      firebase.firestore
        .collection(collectionName)
        .orderBy(sortField)
        .onSnapshot((snapshot) => {
          setCollection(snapshot.docs);
        });
    } else {
      firebase.firestore.collection(collectionName).onSnapshot((snapshot) => {
        setCollection(snapshot.docs);
      });
    }

    return () => {};
  }, [firebase, collectionName, sortField]);

  return collection;
};

export default useCollectionDocs;
