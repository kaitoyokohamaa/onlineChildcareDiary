import {Box, Flex, Text, Divider} from '@chakra-ui/layout';
import {Textarea, Button} from '@chakra-ui/react';
import {useState, useContext, useEffect} from 'react';
import {summaryRef} from '@/lib/firestore';
import firebase from 'firebase/app';
import {AuthContext} from '@/contexts/AuthContext';
import {MdLocalLibrary} from 'react-icons/md';
import {Layout} from '@/components/common/layout';

export const Pages = () => {
  const [goalAndAchievement, setGoalAndAchievement] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const [reflection, setReflection] = useState<string>('');
  const [notice, setNotice] = useState<string>('');
  const [summaryKey, setSummaryKey] = useState<string>('');
  const [summaryData, setSummaryData] =
    useState<firebase.firestore.DocumentData>();
  const {dockey, displayName} = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const summary = dockey && (await summaryRef(dockey).get());
      summary &&
        summary.docs.map((res) => {
          const summaryId = res.id;
          setSummaryKey(summaryId);
          setSummaryData(res.data());
        });
    })();
  }, [dockey]);

  useEffect(() => {
    setGoalAndAchievement(summaryData?.goalAndAchievement);
    setExperience(summaryData?.experience);
    setReflection(summaryData?.reflection);
    setNotice(summaryData?.notice);
  }, [summaryData]);
  const submitHandler = () => {
    summaryKey &&
      summaryRef(dockey).doc(summaryKey).update({
        goalAndAchievement,
        experience,
        reflection,
        notice,
        displayName,
        createdAt: firebase.firestore.Timestamp.now(),
      });
  };

  return (
    <Layout isHeader>
      <Box mt="10" px={16}>
        <Flex alignItems="center">
          <Box bg="#F8F8F8" p="2" borderRadius="md">
            <MdLocalLibrary color=" #9FD0E8" />
          </Box>
          <Text pl="8" fontWeight="bold">
            実習のまとめ
          </Text>
        </Flex>
        <Divider mt="5" />
        <Box overflow="scroll" h="79vh">
          <Box my="8">
            <Text fontWeight="bold">1. 実習の目標とその達成度</Text>
            <Flex mt="2">
              <Textarea
                value={goalAndAchievement}
                onChange={(e) => setGoalAndAchievement(e.target.value)}
                type="text"
                placeholder="実習の目標とその達成度"
              />
            </Flex>
          </Box>

          <Box my="8">
            <Text fontWeight="bold">2. 実習で感銘を受けた体験</Text>
            <Flex mt="2">
              <Textarea
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                type="text"
                placeholder="実習で感銘を受けた体験"
              />
            </Flex>
          </Box>

          <Box my="8">
            <Text fontWeight="bold">3. 実習の反省および新しく発見した課題</Text>
            <Flex mt="2">
              <Textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                type="text"
                placeholder="実習の反省および新しく発見した課題"
              />
            </Flex>
          </Box>
          <Box my="8">
            <Text fontWeight="bold">4. その他気づいたこと</Text>
            <Flex mt="2">
              <Textarea
                value={notice}
                onChange={(e) => setNotice(e.target.value)}
                type="text"
                placeholder="その他気づいたこと"
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
                  ml="3"
                  w="32"
                  variant="outline"
                  colorScheme="blue"
                  border="1px"
                  borderColor="#273264"
                  bg="#fff"
                  color="#273264">
                  一時保存
                </Button>
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
