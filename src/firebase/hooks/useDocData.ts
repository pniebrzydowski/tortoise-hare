import { useContext, useEffect, useState, useRef } from "react";

import FirebaseContext from "../FirebaseContext";
import { FirebaseQuery } from "../types";

interface DocDataProps {
  collection: string;
  id?: string;
  queries?: FirebaseQuery[];
}

const useDocData = ({ collection, id, queries = [] }: DocDataProps) => {
  const firebase = useContext(FirebaseContext);
  const [docData, setDocData] = useState<firebase.firestore.DocumentData>();
  const queryRef = useRef<
    | firebase.firestore.Query<firebase.firestore.DocumentData>
    | firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
    | undefined
  >(firebase?.firestore.collection(collection));

  useEffect(() => {
    if (!queries.length) {
      return;
    }

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

    const unsubscribe = queries
      ? queryRef.current.onSnapshot((snapshot) => {
          const doc = snapshot.docs[0];
          if (!doc) {
            return;
          }
          setDocData(doc.data());
        })
      : (queryRef.current as firebase.firestore.CollectionReference<
          firebase.firestore.DocumentData
        >)
          .doc(id)
          .onSnapshot((doc) => {
            setDocData(doc.data());
          });

    return () => {
      unsubscribe();
    };
  }, [id, queries, queryRef]);

  return docData;
};

export default useDocData;
