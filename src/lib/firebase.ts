import firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
console.log(process.env.NEXT_PUBLIC_FIREBASE_KEY)
export const initalFirebase = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
}

// firebase.initializeApp(initalFirebase);

export default !firebase.apps.length
  ? firebase.initializeApp(initalFirebase)
  : firebase.app()
