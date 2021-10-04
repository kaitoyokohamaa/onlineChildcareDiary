import {VFC} from 'react'
import {Table, Thead, Tbody, Tr, Th, Td} from '@chakra-ui/react'
import {DiaryForm} from './diaryForm'
import {DiaryDateForm} from './diaryDateForm'
import {tablesRef} from '@/lib/firestore'
import {useEffect, useState, useContext} from 'react'
import {AuthContext} from '@/contexts/AuthContext'
import {DiaryTabelProps} from '@/models/diary'
export const DiaryTabel: VFC<DiaryTabelProps> = ({
  projectID,
  setTrainingContent,
  trainingContent
}) => {
  const [rows, setRows] = useState([])
  let rowArray = []
  let trainigContensArray = []
  const {dockey} = useContext(AuthContext)
  useEffect(() => {
    dockey &&
      tablesRef(dockey)
        .orderBy('createdAt', 'asc')
        .onSnapshot((res) => {
          res.forEach((item) => {
            rowArray.push({table: item.data(), tableID: item.id})
            if (item.data().projectID === projectID) {
              trainigContensArray.push({table: item.data()})
            }
          })
          const result = rowArray.filter((element, index) => {
            return (
              rowArray.findIndex((e) => e.table.id === element.table.id) ===
              index
            )
          })
          const resultContentsArray = trainigContensArray.filter(
            (element, index) => {
              return (
                trainigContensArray.findIndex(
                  (e) => e.table.id === element.table.id
                ) === index
              )
            }
          )
          console.log(resultContentsArray)
          setRows(result)
          setTrainingContent(resultContentsArray)
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
          res.table.projectID === projectID && (
            <Tbody border="2px">
              <Tr>
                <Td border="1px" w="9">
                  <DiaryDateForm id={res.tableID} date={res.table.date} />
                </Td>
                <Td border="1px">
                  <DiaryForm
                    id={res.tableID}
                    content={res.table.childActivities}
                    isChildActivities
                  />
                </Td>
                <Td border="1px">
                  <DiaryForm
                    id={res.tableID}
                    content={res.table.assistance}
                    isAssistance
                  />
                </Td>
                <Td border="1px">
                  <DiaryForm
                    id={res.tableID}
                    content={res.table.activitesAndAwareness}
                    isActivitesAndAwareness
                  />
                </Td>
              </Tr>
            </Tbody>
          )
        )
      })}
    </Table>
  )
}
