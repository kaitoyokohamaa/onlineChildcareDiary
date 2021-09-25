import firebase from './firebase'

export const firestore = () => {
	return firebase.firestore()
}

export const userRef = () => {
	return firestore().collection('User')
}

export const userIdRef = (uid: string) => {
	return firestore().collection('User').where('uid', 'array-contains', uid)
}

export const registerRef = (docKey: string) => {
	return firestore().collection('User').doc(docKey).collection('register')
}
export const tablesRef = (docKey: string) => {
	return firestore().collection('User').doc(docKey).collection('tables')
}
