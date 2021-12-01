import {Box, Flex, Text, Divider} from '@chakra-ui/layout';
import {Input, Textarea, Button} from '@chakra-ui/react';
import {DiaryTabel} from '@/components/diary/register/diaryTabel';
import {useState, useContext, useEffect} from 'react';
import {registerRef, tablesRef} from '@/lib/firestore';
import firebase from 'firebase/app';
import {AuthContext} from '@/contexts/AuthContext';
import {v1 as uuidv1} from 'uuid';
import {MdLocalLibrary} from 'react-icons/md';
import {Table} from '@/models/diary';
import {VFC} from 'react';
import {EditType} from '@/models/diary/edit';
import {useRouter} from 'next/router';
import {Layout} from '@/components/common/layout';
export const Pages: VFC<EditType> = ({
  detailDiary,
  projectID,
  registerDetailDocKey,
}) => {
  const [count, setCount] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [studentName, setStudentName] = useState<string>('');
  const [assignedName, setAssignedName] = useState<string>('');
  const [leader, setLeader] = useState<string>('');
  const [goal, setGoal] = useState<string>('');
  const [trainingContent, setTrainingContent] = useState<Table[]>([]);
  const [feeling, setFeeling] = useState<string>('');
  const {dockey} = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    setCount(detailDiary.count);
    setDay(detailDiary.day);
    setStudentName(detailDiary.studentName);
    setAssignedName(detailDiary.assignedName);
    setLeader(detailDiary.leader);
    setGoal(detailDiary.goal);
    setTrainingContent(detailDiary.trainingContent);
    setFeeling(detailDiary.feeling);
  }, []);

  const addRow = () => {
    tablesRef(dockey).add({
      projectID,
      id: uuidv1(),
      date: '',
      childActivities: '',
      assistance: '',
      activitesAndAwareness: '',
      createdAt: firebase.firestore.Timestamp.now(),
    });
  };

  const submitHandler = async () => {
    await registerRef(dockey).doc(registerDetailDocKey).update({
      count,
      day,
      studentName,
      assignedName,
      leader,
      goal,
      trainingContent,
      feeling,
    });

    await router.push(
      `/user/diary/detail/user/${registerDetailDocKey}/${dockey}`,
    );
  };
  // todo react hooks formでバリデーションの追加

  return (
    <Layout isHeader>
      <Box mt="10" px={16}>
        <Flex alignItems="center">
          <Box bg="#F8F8F8" p="2" borderRadius="md">
            <MdLocalLibrary color=" #9FD0E8" />
          </Box>
          <Text pl="8" fontWeight="bold">
            日誌を編集
          </Text>
        </Flex>
        <Divider mt="5" />
        <Box overflow="scroll" h="79vh">
          <Box my="8">
            <Text fontWeight="bold">日付／名前</Text>
            <Flex mt="2">
              <Input
                value={count}
                onChange={(e) => setCount(e.target.value)}
                type="number"
                placeholder="第何日目"
              />
              <Input
                value={day}
                onChange={(e) => setDay(e.target.value)}
                type="date"
                placeholder="日付"
                ml="10"
              />
              <Input
                value={studentName}
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
                value={assignedName}
                onChange={(e) => setAssignedName(e.target.value)}
                type="text"
                placeholder="配属先"
              />
              <Input
                value={leader}
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
                value={goal}
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
                  _hover={{bg: '#9FD0E8'}}
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
                value={feeling}
                onChange={(e) => setFeeling(e.target.value)}
                type="text"
                placeholder="実習所感(特に印象に残ったこと、考察、課題、反省など)"
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
                <Button
                  onClick={submitHandler}
                  w="32"
                  ml="3"
                  bg="#273264"
                  color="#fff"
                  _hover={{bg: '#141933'}}>
                  編集する
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
