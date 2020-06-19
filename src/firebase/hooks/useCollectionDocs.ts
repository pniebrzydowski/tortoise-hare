import { useContext, useEffect, useState } from 'react';

import FirebaseContext from '../FirebaseContext';

interface CollectionQuery {
  field: string;
  operator: "==" | ">" | "<";
  value: string;
}

interface Props {
  collectionName: string;
  query?: CollectionQuery;
  sortField?: string;
  sortOrder?: "asc" | "desc";
}

const useCollectionDocs = ({
  collectionName,
  query,
  sortField,
  sortOrder = "asc",
}: Props): firebase.firestore.QueryDocumentSnapshot[] | undefined => {
  const firebase = useContext(FirebaseContext);
  const [collection, setCollection] = useState<
    firebase.firestore.QueryDocumentSnapshot[]
  >();

  useEffect(() => {
    if (!firebase) {
      return;
    }

    if (query) {
      firebase.firestore
        .collection(collectionName)
        .where(query.field, query.operator, query.value)
        .onSnapshot((snapshot) => {
          setCollection(snapshot.docs);
        });
    } else if (sortField) {
      firebase.firestore
        .collection(collectionName)
        .orderBy(sortField, sortOrder)
        .onSnapshot((snapshot) => {
          setCollection(snapshot.docs);
        });
    } else {
      firebase.firestore.collection(collectionName).onSnapshot((snapshot) => {
        setCollection(snapshot.docs);
      });
    }

    return () => {};
  }, [firebase, collectionName, query, sortField, sortOrder]);

  return collection;
};

export default useCollectionDocs;
