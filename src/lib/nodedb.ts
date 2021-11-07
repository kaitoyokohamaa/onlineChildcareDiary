import admin from './node'

export const firestore = () => {
  return admin.firestore()
}

export const adminUserRef = () => {
  return firestore().collection('User')
}

export const adminUserIdRef = (uid: string) => {
  return firestore().collection('User').where('uid', 'array-contains', uid)
}
export const adminUsersRef = (docKey: string) => {
  return firestore().collection('User').doc(docKey)
}

export const adminRegisterRef = (docKey: string) => {
  return firestore().collection('User').doc(docKey).collection('register')
}
export const adminRegisterDetailRef = (userKey: string, detailKey: string) => {
  return firestore()
    .collection('User')
    .doc(userKey)
    .collection('register')
    .doc(detailKey)
}

export const adminTablesRef = (docKey: string) => {
  return firestore().collection('User').doc(docKey).collection('tables')
}

export const chatRef = (docKey: string) => {
  return (
    docKey && firestore().collection('User').doc(docKey).collection('chats')
  )
}
export const teacherRef = () => {
  return firestore().collection('Teacher')
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

export const invitedUserRef = (docKey: string) => {
  return (
    docKey && firestore().collection('User').doc(docKey).collection('teacher')
  )
}
