import {Box, Flex, Text, Divider} from '@chakra-ui/layout';
import {Input, Textarea, Button} from '@chakra-ui/react';
import {DiaryTabel} from './diaryTabel';
import {useState, useContext} from 'react';
import {registerRef, tablesRef} from '@/lib/firestore';
import firebase from 'firebase/app';
import {AuthContext} from '@/contexts/AuthContext';
import {v1 as uuidv1} from 'uuid';
import {MdLocalLibrary} from 'react-icons/md';
import {Table} from '@/models/diary';
import {Layout} from '@/components/common/layout';
import {useRouter} from 'next/router';
export const Pages = ({projectID}) => {
  const [count, setCount] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [trainingClass, setTrainingClass] = useState<string>('');
  const [studentName, setStudentName] = useState<string>('');
  const [assignedName, setAssignedName] = useState<string>('');
  const [leader, setLeader] = useState<string>('');
  const [goal, setGoal] = useState<string>('');
  const [trainingContent, setTrainingContent] = useState<Table[]>([]);
  const [feeling, setFeeling] = useState<string>('');
  const {dockey} = useContext(AuthContext);
  const router = useRouter();
  const addRow = () => {
    tablesRef(dockey).add({
      projectID,
      id: uuidv1(),
      date: '',
      trainingClass: '',
      childActivities: '',
      childActivitiesFeedback: '',
      assistance: '',
      assistanceFeedback: '',
      activitesAndAwareness: '',
      activitesAndAwarenessFeedback: '',
      createdAt: firebase.firestore.Timestamp.now(),
    });
  };

  const submitHandler = () => {
    registerRef(dockey).add({
      count,
      day,
      studentName,
      trainingClass,
      assignedName,
      leader,
      goal,
      trainingContent,
      feeling,
      createdAt: firebase.firestore.Timestamp.now(),
      updatedAt: null,
    });
    router.push(`/user/diary/${dockey}`);
  };

  return (
    <Layout isHeader>
      <Box mt="10" px={16}>
        <Flex alignItems="center">
          <Box bg="#F8F8F8" p="2" borderRadius="md">
            <MdLocalLibrary color=" #9FD0E8" />
          </Box>
          <Text pl="8" fontWeight="bold">
            日誌登録
          </Text>
        </Flex>
        <Divider mt="5" />
        <Box overflow="scroll" h="79vh">
          <Box my="8">
            <Text fontWeight="bold">担当児クラス</Text>
            <Flex mt="2">
              <Input
                onChange={(e) => setTrainingClass(e.target.value)}
                type="text"
                placeholder="2歳児クラス"
              />
            </Flex>
          </Box>
          <Box my="8">
            <Text fontWeight="bold">日付／名前</Text>
            <Flex mt="2">
              <Input
                onChange={(e) => setCount(e.target.value)}
                type="number"
                placeholder="第何日目(半角入力)"
              />
              <Input
                onChange={(e) => setDay(e.target.value)}
                type="date"
                placeholder="日付"
                ml="10"
              />
              <Input
                onChange={(e) => setStudentName(e.target.value)}
                type="text"
                placeholder="実習生氏名"
                ml="10"
              />
            </Flex>
          </Box>
          <Box my="8">
            <Text fontWeight="bold">配属先/指導者</Text>
            <Flex mt="2">
              <Input
                onChange={(e) => setAssignedName(e.target.value)}
                type="text"
                placeholder="配属先"
              />
              <Input
                onChange={(e) => setLeader(e.target.value)}
                type="text"
                placeholder="指導者名"
                ml="10"
              />
            </Flex>
          </Box>
          <Box my="8">
            <Text fontWeight="bold">本日の目標</Text>
            <Flex mt="2">
              <Textarea
                onChange={(e) => setGoal(e.target.value)}
                type="text"
                placeholder="本日の目標"
              />
            </Flex>
          </Box>
          <Box my="8">
            <Text fontWeight="bold">実習内容</Text>
            <DiaryTabel
              projectID={projectID}
              setTrainingContent={setTrainingContent}
              trainingContent={trainingContent}
              isTeacher={false}
            />
          </Box>

          <Box my="8">
            <Flex w="100%" mt="2" gap={6}>
              <Box
                textAlign="right"
                w="100%"
                bg="#FCFCFC 0% 0% no-repeat padding-box;"
                p="10">
                <Button
                  w="32"
                  bg="#9FD0E8"
                  color="#fff"
                  _hover={{bg: '##9FD0E8'}}
                  onClick={addRow}>
                  + 行を追加
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box my="8">
            <Text fontWeight="bold">
              実習所感(特に印象に残ったこと、考察、課題、反省など)
            </Text>
            <Flex mt="2">
              <Textarea
                onChange={(e) => setFeeling(e.target.value)}
                type="text"
                placeholder="本日の目標"
              />
            </Flex>
          </Box>

          <Box my="8">
            <Flex w="100%" mt="2" gap={6}>
              <Box
                textAlign="right"
                w="100%"
                bg="#FCFCFC 0% 0% no-repeat padding-box;"
                p="10">
                {/* todo:一時保存機能 */}

                <Button
                  onClick={submitHandler}
                  w="32"
                  ml="3"
                  bg="#273264"
                  color="#fff"
                  _hover={{bg: '#141933'}}>
                  保存する
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
