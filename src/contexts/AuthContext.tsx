import React, {useEffect, useState} from 'react'
import firebase from '@/lib/firebase'
import {useRouter} from 'next/router'
import {userIdRef} from '@/lib/firestore'
export const AuthContext = React.createContext(null)
export const UseAuthContext = ({children}) => {
	const [dockey, setDocKey] = useState(null)
	const router = useRouter()
	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user: firebase.default.User) => {
			if (user) {
				userIdRef(user.uid).onSnapshot((res) => res.forEach((item) => setDocKey(item.id)))
				router.push(`/home`)
			} else {
				alert('新規登録をしてください')
				router.push(`/signup`)
			}
		})
	}, [dockey])
	return <AuthContext.Provider value={dockey}>{children}</AuthContext.Provider>
}
