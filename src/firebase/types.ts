export enum FirebaseQueryOperators {
  EQUAL = "==",
  LESS_THAN = "<",
  GREATER_THAN = ">",
}

export interface FirebaseQuery {
  field: string;
  operator: FirebaseQueryOperators;
  value?: string;
}
