import React, {useCallback, useMemo, useContext, useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {saveStorageRef, storageRef} from '@/lib/firestorage'
import {AuthContext} from '@/contexts/AuthContext'
import {userfiledRef} from '@/lib/firestore'
const baseStyle = {
	flex: 1,
	display: 'flex',
	FlexDirection: 'colmn',
	alignItems: 'center',
	padding: '65px',
	borderWidth: 2,
	borderRadius: '100%',
	borderColor: '#eeeeee',
	borderStyle: 'dashed',
	backgroundColor: '#fafafa',
	color: '#bdbdbd',
	outline: 'none',
	transition: 'border .24s ease-in-out'
}

const activeStyle = {
	borderColor: '#2196f3'
}

const acceptStyle = {
	borderColor: '#00e676'
}
const rejectStyle = {
	borderColor: '#ff1744'
}
export const Dropzone = () => {
	const {loginUser, dockey} = useContext(AuthContext)

	const onDrop = useCallback(async (acceptedFiles) => {
		if (loginUser?.uid) {
			await saveStorageRef(loginUser?.uid, acceptedFiles)

			const ref = storageRef().ref().child(`images/${loginUser?.uid}/${acceptedFiles[0].name}`)

			await ref.getDownloadURL().then((dispayImage) => {
				console.log(dispayImage)
				userfiledRef(dockey).update({
					dispayImage
				})
			})
		}
	}, [])

	const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({
		accept: 'image/*',
		onDrop
	})
	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {})
		}),
		[isDragActive, isDragAccept, isDragReject]
	)
	return (
		<div {...getRootProps({style})}>
			<input {...getInputProps()} />
			{isDragActive ? <p>Drog the file here ...</p> : <p>Drag</p>}
		</div>
	)
}
