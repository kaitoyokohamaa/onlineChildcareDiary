import {Table, Thead, Tbody, Tr, Th, Td, Button} from '@chakra-ui/react'
import {DiaryForm} from './diaryForm'
import {DiaryDateForm} from './diaryDateForm'
import {tablesRef} from '@/lib/firestore'
import {useEffect, useState} from 'react'
export const DiaryTabel = () => {
	const [rows, setRows] = useState([])
	let rowArray = []
	useEffect(() => {
		tablesRef()
			.orderBy('createdAt', 'asc')
			.onSnapshot((res) => {
				res.forEach((item) => {
					rowArray.push({table: item.data(), tableID: item.id})
				})
				const result = rowArray.filter((element, index) => {
					return rowArray.findIndex((e) => e.table.id === element.table.id) === index
				})
				setRows(result)
			})
	}, [])

	return (
		<Table border="2px">
			<Thead border="1px">
				<Tr>
					<Th>時間</Th>
					<Th>子供の活動</Th>
					<Th>指導者の援助環境構成</Th>
					<Th>実習生の活動気づき</Th>
				</Tr>
			</Thead>
			{rows?.map((res) => {
				return (
					<Tbody border="2px">
						<Tr>
							<Td border="1px" w="9">
								<DiaryDateForm id={res.tableID} date={res.table.date} />
							</Td>
							<Td border="1px">
								<DiaryForm id={res.tableID} contents={res.table.childActivities} isChildActivities />
							</Td>
							<Td border="1px">
								<DiaryForm id={res.tableID} contents={res.table.assistance} isAssistance />
							</Td>
							<Td border="1px">
								<DiaryForm
									id={res.tableID}
									contents={res.table.activitesAndAwareness}
									isActivitesAndAwareness
								/>
							</Td>
						</Tr>
					</Tbody>
				)
			})}
		</Table>
	)
}
