import React, {useCallback, useMemo} from 'react'
import {useDropzone} from 'react-dropzone'

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
	const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({accept: 'image/*'})
	const onDrop = useCallback((acceptedFiles) => {}, [])
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
