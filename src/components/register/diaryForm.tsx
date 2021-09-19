import {Flex, Text} from '@chakra-ui/layout'
import {Textarea} from '@chakra-ui/react'
import {useState} from 'react'
import {MdEdit} from 'react-icons/md'
import {tablesRef} from '@/lib/firestore'

export const DiaryForm = ({...props}) => {
	const [isEdit, setIsEdit] = useState<boolean>(true)
	const [state, setState] = useState<string>(props.contents)

	const onSave = async () => {
		setIsEdit(true)
		props.isChildActivities && tablesRef().doc(props.id).update({childActivities: state})
		props.isAssistance && tablesRef().doc(props.id).update({assistance: state})
		props.isActivitesAndAwareness && tablesRef().doc(props.id).update({activitesAndAwareness: state})
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
