import { useContext, useEffect, useState, useRef } from "react";

import FirebaseContext from "../FirebaseContext";
import { FirebaseQuery, FirebaseData } from "../types";

interface Props {
  collectionName: string;
  query?: FirebaseQuery;
  sortField?: string;
  sortOrder?: "asc" | "desc";
}

const useCollectionDocsData = <T>({
  collectionName,
  query,
  sortField,
  sortOrder = "asc",
}: Props): FirebaseData<T[]> => {
  const firebase = useContext(FirebaseContext);
  const [loading, setLoading] = useState(true);
  const [collection, setCollection] = useState<T[]>([]);

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

    const unsubscribe = queryRef.current.onSnapshot(
      (snapshot) => {
        setLoading(false);
        const docs = snapshot?.docs ?? [];
        const data = docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as T),
        }));
        setCollection(data);
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
    data: collection,
    loading,
  };
};

export default useCollectionDocsData;
