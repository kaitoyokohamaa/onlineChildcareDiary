import {useState} from 'react'
import {useRouter} from 'next/router'

import firebase from '@/lib/firebase'
import {userRef} from '@/lib/firestore'
export const UseCertification = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const router = useRouter()
	const signupHandler = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((res) => {
				const users = {uid: [res.user?.uid], address: res.user.email}
				userRef().add(users)
			})
			.then(() => {
				router.push(`/home`)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return {signupHandler, setEmail, setPassword, email, password} as const
}
