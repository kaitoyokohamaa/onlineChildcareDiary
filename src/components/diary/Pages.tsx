import {VFC} from 'react'
import {MdLocalLibrary} from 'react-icons/md'
import {Box, Flex, Text, Divider} from '@chakra-ui/layout'
import {Table, Thead, Tbody, Tr, Th, Td} from '@chakra-ui/react'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import {registerRef} from '@/lib/firestore'
export const Pages: VFC = () => {
	const [diaries, setDiaries] = useState([])
	let diariesArray = []
	useEffect(() => {
		registerRef().onSnapshot((res) => {
			res.forEach((item) => {
				diariesArray.push({diary: item.data(), docID: item.data().id})
			})
			setDiaries(diariesArray)
		})
	}, [])

	return (
		<Box mt="10" px={16}>
			<Flex alignItems="center">
				<Box bg="#F8F8F8" p="2" borderRadius="md">
					<MdLocalLibrary color=" #9FD0E8" />
				</Box>
				<Text pl="8" fontWeight="bold">
					日誌一覧
				</Text>
			</Flex>
			<Divider mt="5" />
			<Table variant="striped" colorScheme="twitter">
				<Thead>
					<Tr>
						<Th>日付</Th>
						<Th isNumeric></Th>
					</Tr>
				</Thead>
				<Tbody>
					{diaries.length ? (
						diaries.map((res) => {
							console.log(res.diary)
							return (
								<Tr
									_hover={{
										boxShadow: 'dark-lg',
										p: '14'
									}}
								>
									<Td>{`${res.diary.day} ${res.diary.assignedName}`}組の保育日誌</Td>
									<Td isNumeric>詳細</Td>
								</Tr>
							)
						})
					) : (
						<p>日誌はまだ登録されておりません</p>
					)}
				</Tbody>
			</Table>
		</Box>
	)
}
