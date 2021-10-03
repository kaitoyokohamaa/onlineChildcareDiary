import {VFC} from 'react'
import {Flex, Text} from '@chakra-ui/layout'
import {Textarea} from '@chakra-ui/react'
import {useState, useContext} from 'react'
import {MdEdit} from 'react-icons/md'
import {tablesRef} from '@/lib/firestore'
import {AuthContext} from '@/contexts/AuthContext'
import {DiaryFormProps} from '@/models/diary'
export const DiaryForm: VFC<DiaryFormProps> = ({...props}) => {
	const [isEdit, setIsEdit] = useState<boolean>(true)
	const [state, setState] = useState<string>(props.content)
	const {dockey} = useContext(AuthContext)
	const onSave = async () => {
		setIsEdit(true)
		props.isChildActivities && tablesRef(dockey).doc(props.id).update({childActivities: state})
		props.isAssistance && tablesRef(dockey).doc(props.id).update({assistance: state})
		props.isActivitesAndAwareness && tablesRef(dockey).doc(props.id).update({activitesAndAwareness: state})
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
