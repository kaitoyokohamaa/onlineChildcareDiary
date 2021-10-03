import 'firebase/functions'
import 'firebase/auth'
import 'firebase/firestore'

import firebase from 'firebase/app'

export const storageRef = (): firebase.storage.Storage => firebase.storage()

export const saveStorageRef = async (id: string, file: File): Promise<firebase.storage.Storage> => {
	const metadata = {
		contentType: 'image/jpeg'
	}
	return await storageRef()
		.ref()
		.child(`images/${id}/${file[0].name}`)
		.put(file[0], metadata)
		.then(() => console.log('Upload successful'))
		.catch((err) => console.log(err))
}
