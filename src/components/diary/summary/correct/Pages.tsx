import {Box, Flex, Text, Divider} from '@chakra-ui/layout';
import {Textarea, Button} from '@chakra-ui/react';
import {useState, useContext, useEffect} from 'react';
import {summaryRef} from '@/lib/firestore';
import firebase from 'firebase/app';
import {AuthContext} from '@/contexts/AuthContext';
import {MdLocalLibrary} from 'react-icons/md';
import {Layout} from '@/components/common/layout';
import {useRouter} from 'next/router';
import {VFC} from 'react';
export const Pages: VFC<{summaryDocKey: string}> = ({summaryDocKey}) => {
  const [comment, setComment] = useState<string>('');
  const [summaryKey, setSummaryKey] = useState<string>('');

  const router = useRouter();

  useEffect(() => {
    summaryDocKey &&
      summaryRef(summaryDocKey).onSnapshot((res) => {
        res.docs.map((item) => {
          setSummaryKey(item.id);
        });
      });
  }, [summaryDocKey]);

  const submitHandler = () => {
    summaryKey &&
      summaryRef(summaryDocKey).doc(summaryKey).update({
        comment,
      });
    router.push(`/teacher/chat/${summaryDocKey}`);
  };

  return (
    <Layout>
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
            <Text fontWeight="bold">実習指導者からのコメント</Text>
            <Flex mt="2">
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="実習指導者からのコメント"
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
                  bg="#273673"
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
