import { useContext, useEffect, useState, useRef } from "react";

import FirebaseContext from "../FirebaseContext";
import { FirebaseQuery } from "../types";

interface DocDataProps {
  collection: string;
  queries: FirebaseQuery[];
}

const useDocDataWithQuery = <T>({
  collection,
  queries,
}: DocDataProps): T | undefined => {
  const firebase = useContext(FirebaseContext);
  const [docData, setDocData] = useState<T>();
  const queryRef = useRef<
    firebase.firestore.Query<firebase.firestore.DocumentData> | undefined
  >(firebase?.firestore.collection(collection));

  useEffect(() => {
    queries.forEach((query) => {
      if (!query.value || !queryRef.current) {
        return;
      }
      queryRef.current = queryRef.current.where(
        query.field,
        query.operator,
        query.value
      );
    });
  }, [queries]);

  useEffect(() => {
    if (!queryRef.current) {
      return;
    }

    const unsubscribe = queryRef.current.onSnapshot((snapshot) => {
      const doc = snapshot.docs[0];
      if (!doc) {
        return;
      }
      setDocData(doc.data() as T);
    });

    return () => {
      unsubscribe();
    };
  }, [queryRef]);

  return docData;
};

export default useDocDataWithQuery;
