import {VFC, useContext} from 'react'
import {Table, Thead, Tbody, Tr, Th, Td} from '@chakra-ui/react'
import {DiaryForm} from './diaryForm'
import {DiaryDateForm} from './diaryDateForm'
import {tablesRef} from '@/lib/firestore'
import {useEffect, useState} from 'react'
import {AuthContext} from '@/contexts/AuthContext'
import {DiaryTabelProps} from '@/models/diary'
import {useRouter} from 'next/router'
export const DiaryTabel: VFC<DiaryTabelProps> = ({
  projectID,
  setTrainingContent,
  trainingContent,
  isTeacher
}) => {
  const [diaries, setDiaries] = useState([])
  const [key, setKey] = useState('')
  const {dockey} = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (isTeacher) {
      isTeacher
        ? setKey(router.query.teachers[1])
        : setKey(router.query.edit[1])
    } else {
      setKey(dockey)
    }
  }, [key])
  // タイミングやよな。
  useEffect(() => {
    key &&
      tablesRef(key)
        .orderBy('createdAt', 'asc')
        .onSnapshot((res) => {
          let trainigContensArray = []
          res.forEach((item) => {
            if (item.data().projectID === projectID) {
              const id = item.id
              trainigContensArray.push({tableID: id, tableData: item.data()})
            }
          })

          setDiaries(trainigContensArray)
        })
  }, [key])

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
                    correctedContent={res.tableData.childActivitiesFeedback}
                    isChildActivities
                    projectID={projectID}
                    setTrainingContent={setTrainingContent}
                    trainingContent={trainingContent}
                    isTeacher={isTeacher}
                    dockey={dockey}
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
                    isTeacher={isTeacher}
                    dockey={dockey}
                    correctedContent={res.tableData.assistanceFeedback}
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
                    isTeacher={isTeacher}
                    dockey={dockey}
                    correctedContent={
                      res.tableData.activitesAndAwarenessFeedback
                    }
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
