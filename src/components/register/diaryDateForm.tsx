import {Flex, Text, Box} from '@chakra-ui/layout'
import {Button, Input} from '@chakra-ui/react'
import {useState} from 'react'
import {MdEdit} from 'react-icons/md'
export const DiaryDateForm = ({...props}) => {
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [date, setDate] = useState<string>('')

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
						onBlur={() => setIsEdit(true)}
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
