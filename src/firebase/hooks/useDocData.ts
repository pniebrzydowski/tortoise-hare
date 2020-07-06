import { useContext, useEffect, useState, useRef } from "react";

import FirebaseContext from "../FirebaseContext";

interface DocDataProps {
  collection: string;
  id: string;
}

const useDocData = ({
  collection,
  id,
}: DocDataProps): firebase.firestore.DocumentData | undefined => {
  const firebase = useContext(FirebaseContext);
  const [docData, setDocData] = useState<firebase.firestore.DocumentData>();
  const queryRef = useRef<
    | firebase.firestore.CollectionReference<firebase.firestore.DocumentData>
    | undefined
  >(firebase?.firestore.collection(collection));

  useEffect(() => {
    if (!queryRef.current) {
      return;
    }

    const unsubscribe = queryRef.current.doc(id).onSnapshot((doc) => {
      setDocData(doc.data());
    });

    return () => {
      unsubscribe();
    };
  }, [id, queryRef]);

  return docData;
};

export default useDocData;
