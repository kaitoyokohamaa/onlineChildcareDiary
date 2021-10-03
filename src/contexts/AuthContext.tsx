import React, {useEffect, useState} from 'react'
import firebase from '@/lib/firebase'
import {useRouter} from 'next/router'
import {userIdRef} from '@/lib/firestore'
export const AuthContext = React.createContext({
	dockey: null,
	loginUser: null,
	setImage: null,
	image: null,
	setDisplayName: null,
	displayName: null
})
export const UseAuthContext = ({children}) => {
	const [dockey, setDocKey] = useState(null)
	const [loginUser, setLoginUser] = useState(null)
	const [displayName, setDisplayName] = useState<string>('')
	const [image, setImage] = useState<string>(null)
	const router = useRouter()
	useEffect(() => {
		firebase.auth().onAuthStateChanged(async (user: firebase.default.User) => {
			if (user) {
				userIdRef(user.uid).onSnapshot((res) => res.forEach((item) => setDocKey(item.id)))
				setLoginUser(user)

				userIdRef(user.uid).onSnapshot((res) =>
					res.forEach((item) => {
						return setDisplayName(item.data().name), setImage(item.data().dispayImage)
					})
				)
				if (router.asPath === '/signup' || router.asPath === '/login') {
					router.push(`/home`)
				}
			} else {
				router.push(`/signup`)
			}
		})
	}, [dockey])
	return (
		<AuthContext.Provider value={{dockey, loginUser, setImage, image, setDisplayName, displayName}}>
			{children}
		</AuthContext.Provider>
	)
}
