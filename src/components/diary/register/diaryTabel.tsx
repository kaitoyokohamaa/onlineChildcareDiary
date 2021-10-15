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
  const [diaries, setDiaries] = useState([])
  let trainigContensArray = []
  const {dockey} = useContext(AuthContext)
  // タイミングやよな。
  useEffect(() => {
    dockey &&
      tablesRef(dockey)
        .orderBy('createdAt', 'asc')
        .onSnapshot((res) => {
          res.forEach((item) => {
            if (item.data().projectID === projectID) {
              const id = item.id
              trainigContensArray.push({tableID: id, tableData: item.data()})
            }
          })
          //重複処理。最初のtableid === tableidにマッチしたやつだけをfindIndexで確かめているから重複を排除することができる。
          const result = trainigContensArray.filter(
            (res, i) =>
              trainigContensArray.findIndex(
                (item) => item.tableID === res.tableID
              ) === i
          )

          setDiaries(result)
        })
  }, [dockey])

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
      {diaries?.map((res) => {
        return (
          res.tableData.projectID === projectID && (
            <Tbody border="2px">
              <Tr>
                <Td border="1px" w="9">
                  <DiaryDateForm
                    id={res.tableID}
                    date={res.tableData.date}
                    projectID={projectID}
                    setTrainingContent={setTrainingContent}
                    trainingContent={trainingContent}
                  />
                </Td>
                <Td border="1px">
                  <DiaryForm
                    id={res.tableID}
                    content={res.tableData.childActivities}
                    isChildActivities
                    projectID={projectID}
                    setTrainingContent={setTrainingContent}
                    trainingContent={trainingContent}
                  />
                </Td>
                <Td border="1px">
                  <DiaryForm
                    id={res.tableID}
                    content={res.tableData.assistance}
                    isAssistance
                    projectID={projectID}
                    setTrainingContent={setTrainingContent}
                    trainingContent={trainingContent}
                  />
                </Td>
                <Td border="1px">
                  <DiaryForm
                    id={res.tableID}
                    content={res.tableData.activitesAndAwareness}
                    isActivitesAndAwareness
                    projectID={projectID}
                    setTrainingContent={setTrainingContent}
                    trainingContent={trainingContent}
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