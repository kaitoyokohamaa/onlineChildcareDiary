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
    <Layout>
      <Box mt="10" px={16}>
        <Flex alignItems="center">
          <Box bg="#F8F8F8" p="2" borderRadius="md">
            <MdLocalLibrary color=" #9FD0E8" />
          </Box>
          <Text pl="8" fontWeight="bold">
            診断登録
          </Text>
        </Flex>
        <Divider mt="5" />
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
                bg="#273673"
                color="#fff"
                _hover={{bg: '#141933'}}>
                保存する
              </Button>
              s
            </Box>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};
