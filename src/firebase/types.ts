import firebase from "firebase";

export interface FirebaseQuery {
  field: string;
  operator: firebase.firestore.WhereFilterOp;
  value?: string;
}

export interface FirebaseData<T> {
  data: T;
  loading: boolean;
}
