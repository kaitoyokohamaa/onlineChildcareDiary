import * as admin from 'firebase-admin'
const dotenv = require('dotenv')
dotenv.load()

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: String(process.env.FIREBASE_PROJECT_ID),
			clientEmail: String(process.env.FIREBASE_CLIENT_EMAIL),
			privateKey: String(process.env.FIREBASE_PRIVATE_KEY)
				? String(process.env.FIREBASE_PRIVATE_KEY).replace(/\\n/g, '\n')
				: undefined
		})
	})
}

export default admin
