import {Box, Flex, Text, Divider} from '@chakra-ui/layout'
import {Textarea, Button} from '@chakra-ui/react'
import {DiaryTabel} from '@/components/diary/register/diaryTabel'
import {useState} from 'react'
import {registerRef, teaherDiaryHistiryRef} from '@/lib/firestore'
import firebase from 'firebase/app'

import {MdLocalLibrary} from 'react-icons/md'
import {Table} from '@/models/diary'
import {VFC, useContext} from 'react'
import {EditType} from '@/models/diary/edit'
import {useRouter} from 'next/router'
import {AuthContext} from '@/contexts/AuthContext'
export const Pages: VFC<EditType> = ({
  detailDiary,
  projectID,
  registerDetailDocKey,
}) => {
  const [trainingContent, setTrainingContent] = useState<Table[]>(
    detailDiary.trainingContent,
  )

  const [feedback, setFeedback] = useState<string>(
    detailDiary.feedback ? detailDiary.feedback : '',
  )

  const router = useRouter()
  const {dockey} = useContext(AuthContext)
  const userDockkey = router.query.teachers[1]

  const submitHandler = async () => {
    await registerRef(userDockkey).doc(registerDetailDocKey).update({
      feedback,
      trainingContent,
      updateAt: firebase.firestore.Timestamp.now(),
    })
    ;(await userDockkey) !== dockey &&
      teaherDiaryHistiryRef(dockey).add({
        diaryId: registerDetailDocKey,
        updateAt: firebase.firestore.Timestamp.now(),
      })
    router.push(`/teacher/diary/detail/${registerDetailDocKey}/${userDockkey}`)
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
            isTeacher={true}
            projectID={projectID}
            setTrainingContent={setTrainingContent}
            trainingContent={trainingContent}
          />
        </Box>

        <Box my="8">
          <Text fontWeight="bold">指導者からのことば</Text>
          <Flex mt="2">
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              type="text"
              placeholder="指導者からのことば"
            />
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
              <Button
                onClick={submitHandler}
                w="32"
                ml="3"
                bg="#273264"
                color="#fff"
                _hover={{bg: '#141933'}}
              >
                保存する
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
