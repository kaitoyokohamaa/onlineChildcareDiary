import {Flex, Text, Box} from '@chakra-ui/layout'
import {Input} from '@chakra-ui/react'
import {useState} from 'react'
import {MdEdit} from 'react-icons/md'
import {tablesRef} from '@/lib/firestore'
export const DiaryDateForm = ({...props}) => {
	const [isEdit, setIsEdit] = useState<boolean>(true)
	const [date, setDate] = useState<string>('')
	const onSave = () => {
		setIsEdit(true)
		tablesRef().doc(props.id).update({date})
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
