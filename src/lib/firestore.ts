import firebase from './firebase'

export const firestore = () => {
  return firebase.firestore()
}

export const userRef = () => {
  return firestore().collection('User')
}

export const userIdRef = (uid: string) => {
  return (
    uid && firestore().collection('User').where('uid', 'array-contains', uid)
  )
}

export const userfiledRef = (docKey: string) => {
  return docKey && firestore().collection('User').doc(docKey)
}

export const registerRef = (docKey: string) => {
  return (
    docKey && firestore().collection('User').doc(docKey).collection('register')
  )
}
export const tablesRef = (docKey: string) => {
  return (
    docKey && firestore().collection('User').doc(docKey).collection('tables')
  )
}

export const adminRegisterDetailRef = (userKey: string, detailKey: string) => {
  return firestore()
    .collection('User')
    .doc(userKey)
    .collection('register')
    .doc(detailKey)
}
