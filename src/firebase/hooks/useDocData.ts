import { useContext, useEffect, useState, useRef } from "react";

import FirebaseContext from "../FirebaseContext";

interface DocDataProps {
  collection: string;
  id: string;
}

const useDocData = <T>({ collection, id }: DocDataProps): T | undefined => {
  const firebase = useContext(FirebaseContext);
  const [docData, setDocData] = useState<T>();
  const queryRef = useRef<
    | firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
    | undefined
  >(firebase?.firestore.collection(collection));

  useEffect(() => {
    if (!queryRef.current) {
      return;
    }

    const unsubscribe = queryRef.current.doc(id).onSnapshot((doc) => {
      setDocData(doc.data() as T);
    });

    return () => {
      unsubscribe();
    };
  }, [id, queryRef]);

  return docData;
};

export default useDocData;
