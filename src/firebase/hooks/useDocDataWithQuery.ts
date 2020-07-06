import { useContext, useEffect, useState, useRef } from "react";

import FirebaseContext from "../FirebaseContext";
import { FirebaseQuery, FirebaseData } from "../types";

interface DocDataProps {
  collection: string;
  queries: FirebaseQuery[];
}

const useDocDataWithQuery = <T>({
  collection,
  queries,
}: DocDataProps): FirebaseData<T | undefined> => {
  const firebase = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<T>();
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

    const unsubscribe = queryRef.current.onSnapshot(
      (snapshot) => {
        setLoading(false);
        const doc = snapshot.docs[0];
        if (!doc) {
          return;
        }
        setData(doc.data() as T);
      },
      (error) => {
        setLoading(false);
        console.error(error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [queryRef]);

  return {
    data,
    loading,
  };
};

export default useDocDataWithQuery;
