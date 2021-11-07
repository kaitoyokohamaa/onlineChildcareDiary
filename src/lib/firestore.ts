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

export const summaryRef = (docKey: string) => {
  return (
    docKey && firestore().collection('User').doc(docKey).collection('summary')
  )
}

export const introspectionRef = (docKey: string) => {
  return (
    docKey &&
    firestore().collection('User').doc(docKey).collection('introspection')
  )
}

export const chatRef = (docKey: string) => {
  return (
    docKey && firestore().collection('User').doc(docKey).collection('chats')
  )
}

export const messageChatRef = (docKey: string, chatId: string) => {
  return (
    docKey &&
    firestore().collection('User').doc(docKey).collection('chat').doc(chatId)
  )
}
export const tablesRef = (docKey: string) => {
  return (
    docKey && firestore().collection('User').doc(docKey).collection('tables')
  )
}
export const invitedUserRef = (docKey: string) => {
  return (
    docKey && firestore().collection('User').doc(docKey).collection('teacher')
  )
}

export const teacherRef = () => {
  return firestore().collection('Teacher')
}
export const adminRegisterDetailRef = (userKey: string, detailKey: string) => {
  return firestore()
    .collection('User')
    .doc(userKey)
    .collection('register')
    .doc(detailKey)
}
