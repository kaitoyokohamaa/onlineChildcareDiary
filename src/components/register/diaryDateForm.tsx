import {Flex, Text, Box} from '@chakra-ui/layout'
import {Input} from '@chakra-ui/react'
import {useState, useContext} from 'react'
import {MdEdit} from 'react-icons/md'
import {tablesRef} from '@/lib/firestore'
import {AuthContext} from '@/contexts/AuthContext'
export const DiaryDateForm = ({...props}) => {
	const [isEdit, setIsEdit] = useState<boolean>(true)
	const [date, setDate] = useState<string>('')
	const {dockey} = useContext(AuthContext)
	const onSave = () => {
		setIsEdit(true)
		tablesRef(dockey).doc(props.id).update({date})
	}

	return (
		<Box>
			{isEdit ? (
				<Flex>
					<Text whiteSpace="pre-wrap">{date}</Text>
					<MdEdit onClick={() => setIsEdit(false)} />
				</Flex>
			) : (
				<Box w="100%">
					<Input
						onBlur={onSave}
						type="time"
						onChange={(e) => {
							setDate(e.target.value)
						}}
					/>
				</Box>
			)}
		</Box>
	)
}
