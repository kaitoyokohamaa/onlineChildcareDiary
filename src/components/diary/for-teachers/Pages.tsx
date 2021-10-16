import {Box, Flex, Text, Divider} from '@chakra-ui/layout'
import {Input, Textarea, Button} from '@chakra-ui/react'
import {DiaryTabel} from '@/components/diary/register/diaryTabel'
import {useState, useContext} from 'react'
import {registerRef, tablesRef} from '@/lib/firestore'
import firebase from 'firebase/app'
import {AuthContext} from '@/contexts/AuthContext'
import {v1 as uuidv1} from 'uuid'
import {MdLocalLibrary} from 'react-icons/md'
import {Table} from '@/models/diary'
import {VFC} from 'react'
import {EditType} from '@/models/diary/edit'
import {useRouter} from 'next/router'

export const Pages: VFC<EditType> = ({
  detailDiary,
  projectID,
  registerDetailDocKey
}) => {
  const [count, setCount] = useState<string>(detailDiary.count)
  const [day, setDay] = useState<string>(detailDiary.day)
  const [studentName, setStudentName] = useState<string>(
    detailDiary.studentName
  )
  const [assignedName, setAssignedName] = useState<string>(
    detailDiary.assignedName
  )
  const [leader, setLeader] = useState<string>(detailDiary.leader)
  const [goal, setGoal] = useState<string>(detailDiary.goal)
  const [trainingContent, setTrainingContent] = useState<Table[]>(
    detailDiary.trainingContent
  )
  const [feeling, setFeeling] = useState<string>(detailDiary.feeling)
  const {dockey} = useContext(AuthContext)
  const router = useRouter()
  // const addRow = () => {
  //   tablesRef(dockey).add({
  //     projectID,
  //     id: uuidv1(),
  //     date: '',
  //     childActivities: '',
  //     assistance: '',
  //     activitesAndAwareness: '',
  //     createdAt: firebase.firestore.Timestamp.now()
  //   })
  // }

  const submitHandler = () => {
    registerRef(dockey).doc(registerDetailDocKey).update({
      count,
      day,
      studentName,
      assignedName,
      leader,
      goal,
      trainingContent,
      feeling
    })

    router.push(`/diary/detail/${registerDetailDocKey}/${dockey}`)
  }
  // todo react hooks formでバリデーションの追加

  return (
    <Box mt="10" px={16}>
      <Flex alignItems="center">
        <Box bg="#F8F8F8" p="2" borderRadius="md">
          <MdLocalLibrary color=" #9FD0E8" />
        </Box>
        <Text pl="8" fontWeight="bold">
          添削する
        </Text>
      </Flex>
      <Divider mt="5" />
      <Box overflow="scroll" h="79vh">
        <Box my="8">
          <Text fontWeight="bold">実習内容</Text>
          <DiaryTabel
            isTeacher
            projectID={projectID}
            setTrainingContent={setTrainingContent}
            trainingContent={trainingContent}
          />
        </Box>

        <Box my="8">
          <Text fontWeight="bold">指導者からのことば</Text>
          <Flex mt="2">
            <Textarea type="text" placeholder="本日の目標" />
          </Flex>
        </Box>

        <Box my="8">
          <Flex w="100%" mt="2" gap={6}>
            <Box
              textAlign="right"
              w="100%"
              bg="#FCFCFC 0% 0% no-repeat padding-box;"
              p="10"
            >
              {/* todo:一時保存機能 */}
              {/* <Button
                ml="3"
                w="32"
                variant="outline"
                colorScheme="blue"
                border="1px"
                borderColor="#273264"
                bg="#fff"
                color="#273264"
              >
                一時保存
              </Button> */}
              <Button
                onClick={submitHandler}
                w="32"
                ml="3"
                bg="#273264"
                color="#fff"
                _hover={{bg: '#141933'}}
              >
                添削する
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
