import { useContext, useEffect, useState, useRef } from "react";

import FirebaseContext from "../FirebaseContext";
import { FirebaseQuery } from "../types";

interface DocDataProps {
  collection: string;
  queries: FirebaseQuery[];
}

const useDocDataWithQuery = ({
  collection,
  queries,
}: DocDataProps): firebase.firestore.DocumentData | undefined => {
  const firebase = useContext(FirebaseContext);
  const [docData, setDocData] = useState<firebase.firestore.DocumentData>();
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
      setDocData(doc.data());
    });

    return () => {
      unsubscribe();
    };
  }, [queryRef]);

  return docData;
};

export default useDocDataWithQuery;
