import * as admin from 'firebase-admin'

if (!admin.apps.length && process.env.FIREBASE_PRIVATE_KEY) {
	const {privateKey} = JSON.parse(process.env.FIREBASE_PRIVATE_KEY)

	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: String(process.env.FIREBASE_PROJECT_ID),
			clientEmail: String(process.env.FIREBASE_CLIENT_EMAIL),
			privateKey: privateKey
		})
	})
}

export default admin
