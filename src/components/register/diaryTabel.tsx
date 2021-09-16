import {Table, Thead, Tbody, Tr, Th, Td, Button} from '@chakra-ui/react'
import {DiaryForm} from './diaryForm'
import {DiaryDateForm} from './diaryDateForm'

export const DiaryTabel = ({rows}) => {
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
			{rows.length > 1 &&
				rows?.map((res) => {
					return (
						<Tbody border="2px">
							<Tr>
								<Td border="1px" w="9">
									<DiaryDateForm id={res.id} date={res.date} />
								</Td>
								<Td border="1px">
									<DiaryForm id={res.id} contents={res.childActivities} isChildActivities />
								</Td>
								<Td border="1px">
									<DiaryForm id={res.id} contents={res.assistance} isAssistance />
								</Td>
								<Td border="1px">
									<DiaryForm
										id={res.id}
										contents={res.activitesAndAwareness}
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
