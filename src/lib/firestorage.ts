import firebase from './firebase'

const storageRef = firebase.storage().ref()

export const saveStorageRef = (id: string) => storageRef.child(`images/${id}`)
