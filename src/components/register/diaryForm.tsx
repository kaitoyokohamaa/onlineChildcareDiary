import {Flex, Text, Box} from '@chakra-ui/layout'
import {Textarea} from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import {MdEdit} from 'react-icons/md'
import {registerRef} from '@/lib/firestore'
export const DiaryForm = ({...props}) => {
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [state, setState] = useState<string>('')
	const [rowKeym, setRowKey] = useState<number>()
	// useEffect(() => {
	// 	registerRef()
	// 		.doc('Fn3Zcvk9TrONz153Gocs')
	// 		.onSnapshot((res) => {
	// 			console.log(
	// 				res.data().tableDate.map((filed) => {
	// 					console.log(filed.id)
	// 				})
	// 			)
	// 		})
	// }, [])
	const onSave = () => {
		console.log('onsaev')
		setIsEdit(true)

		registerRef()
			.doc('Fn3Zcvk9TrONz153Gocs')
			.onSnapshot(async (res) => {
				console.log(res.data().tableDate[0].date)
				await res.data().tableDate.map((filed) => {
					const activity = filed.childActivities
					console.log(activity)
					console.log(state)
					return (
						filed.id == props.id &&
						props.childActivities &&
						registerRef().doc('Fn3Zcvk9TrONz153Gocs').update({
							activity: state
						})
					)
				})
			})

		// props.isAssistance && registerRef().doc('Fn3Zcvk9TrONz153Gocs').update({assistance: state})
		// props.isActivitesAndAwareness &&
		// 	registerRef().doc('Fn3Zcvk9TrONz153Gocs').update({activitesAndAwareness: state})
	}
	return (
		<div>
			{isEdit ? (
				<Flex>
					<Text whiteSpace="pre-wrap">{state}</Text>
					<MdEdit onClick={() => setIsEdit(false)} />
				</Flex>
			) : (
				<div>
					<Textarea
						rows={10}
						value={state}
						onBlur={onSave}
						onChange={(e) => {
							setState(e.target.value)
						}}
					/>
				</div>
			)}
		</div>
	)
}
