import * as admin from 'firebase-admin'

if (!admin.apps.length) {
	const {FIREBASE_PRIVATE_KEY} = process.env
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: String(process.env.FIREBASE_PROJECT_ID),
			clientEmail: String(process.env.FIREBASE_CLIENT_EMAIL),
			privateKey: FIREBASE_PRIVATE_KEY[0] === '-' ? FIREBASE_PRIVATE_KEY : JSON.parse(FIREBASE_PRIVATE_KEY)
		})
	})
}

export default admin
