import * as admin from 'firebase-admin'

if (!admin.apps.length) {
	console.log(process.env.FIREBASE_PRIVATE_KEY)
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: String(process.env.FIREBASE_PROJECT_ID),
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
			privateKey: String(process.env.FIREBASE_PRIVATE_KEY)
		})
	})
}

export default admin
