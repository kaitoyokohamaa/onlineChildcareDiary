import * as admin from 'firebase-admin'

if (!admin.apps.length) {
	const firebase_private_key_b64 = Buffer.from(String(process.env.FIREBASE_PRIVATE_KEY), 'base64')
	const firebase_private_key = firebase_private_key_b64.toString('utf8')
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: String(process.env.FIREBASE_PROJECT_ID),
			clientEmail: String(process.env.FIREBASE_CLIENT_EMAIL),
			privateKey: firebase_private_key
		})
	})
}

export default admin
