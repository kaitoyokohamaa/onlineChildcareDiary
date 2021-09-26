import React, {useEffect, useState} from 'react'
import firebase from '@/lib/firebase'
import {useRouter} from 'next/router'
import {userIdRef} from '@/lib/firestore'
export const AuthContext = React.createContext({dockey: null, loginUser: null})
export const UseAuthContext = ({children}) => {
	const [dockey, setDocKey] = useState(null)
	const [loginUser, setLoginUser] = useState(null)
	const router = useRouter()
	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user: firebase.default.User) => {
			if (user) {
				userIdRef(user.uid).onSnapshot((res) => res.forEach((item) => setDocKey(item.id)))
				setLoginUser(user)
				router.push(`/home`)
			} else {
				router.push(`/signup`)
			}
		})
	}, [dockey])
	return <AuthContext.Provider value={{dockey, loginUser}}>{children}</AuthContext.Provider>
}
