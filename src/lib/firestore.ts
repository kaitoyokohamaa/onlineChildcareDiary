import firebase from "./firebase";

export const firestore = () => {
  return firebase.firestore();
};

export const userRef = () => {
  return firestore().collection("User");
};

export const registerRef = () => {
  return firestore()
    .collection("User")
    .doc("0E6SClT2vJWheEtXWlBj")
    .collection("register");
};
