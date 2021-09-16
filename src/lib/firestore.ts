import firebase from './firebase'

export const firestore = () => {
	return firebase.firestore()
}

export const userRef = () => {
	return firestore().collection('User')
}

export const registerRef = () => {
	return firestore().collection('User').doc('vewLQsKPplaDwy3EYZo8').collection('register')
}
