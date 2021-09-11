import firebase from "./firebase";

export const firestore = () => {
  return firebase.firestore();
};

export const userRef = () => {
  return firestore().collection("User");
};
