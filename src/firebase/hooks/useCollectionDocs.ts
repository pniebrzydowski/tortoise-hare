import { useContext, useEffect, useState, useRef } from "react";

import FirebaseContext from "../FirebaseContext";
import { FirebaseQuery } from "../types";

interface Props {
  collectionName: string;
  query?: FirebaseQuery;
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

  const queryRef = useRef<
    firebase.firestore.Query<firebase.firestore.DocumentData> | undefined
  >(firebase?.firestore.collection(collectionName));

  useEffect(() => {
    if (!query || !queryRef.current) {
      return;
    }

    queryRef.current = queryRef.current.where(
      query.field,
      query.operator,
      query.value
    );
  }, [query]);

  useEffect(() => {
    if (!queryRef.current || !sortField) {
      return;
    }

    queryRef.current = queryRef.current.orderBy(sortField, sortOrder);
  }, [sortField, sortOrder]);

  useEffect(() => {
    if (!queryRef.current) {
      return;
    }

    const unsubscribe = queryRef.current.onSnapshot((snapshot) => {
      setCollection(snapshot.docs);
    });

    return () => {
      unsubscribe();
    };
  }, [queryRef]);

  return collection;
};

export default useCollectionDocs;
