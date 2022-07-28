import {Box, Flex, Text, Divider} from '@chakra-ui/layout';
import {Textarea, Button} from '@chakra-ui/react';
import {useState, useContext, useEffect} from 'react';
import firebase from 'firebase/app';
import {AuthContext} from '@/contexts/AuthContext';
import {MdLocalLibrary} from 'react-icons/md';
import {Layout} from '@/components/common/layout';
import {introspectionRef} from '@/lib/firestore';
import {useRouter} from 'next/router';

export const Pages = () => {
  const [introspection, setIntrospection] = useState<string>('');
  const [introspectionKey, setIntrospectionKey] = useState<string>('');
  const [introspectionData, setIntrospectionData] =
    useState<firebase.firestore.DocumentData>();
  const {dockey} = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const summary = dockey && (await introspectionRef(dockey).get());
      summary &&
        summary.docs.map((res) => {
          const summaryId = res.id;
          setIntrospectionKey(summaryId);
          setIntrospectionData(res.data());
        });
    })();
  }, [dockey]);

  useEffect(() => {
    setIntrospection(introspectionData?.introspection);
  }, [introspectionData]);

  const submitHandler = () => {
    introspectionKey &&
      introspectionRef(dockey).doc(introspectionKey).update({
        introspection,
        createdAt: firebase.firestore.Timestamp.now(),
      });
    router.push(`/user/diary/introspection/${dockey}`);
  };

  return (
    <Layout>
      <Box mt="10" px={16}>
        <Flex alignItems="center">
          <Box bg="#F8F8F8" p="2" borderRadius="md">
            <MdLocalLibrary color=" #9FD0E8" />
          </Box>
          <Text pl="8" fontWeight="bold">
            反省会の記録
          </Text>
        </Flex>
        <Divider mt="5" />
        <Box overflow="scroll" h="79vh">
          <Box my="8">
            <Flex mt="2">
              <Textarea
                value={introspection}
                size="lg"
                onChange={(e) => setIntrospection(e.target.value)}
                placeholder="反省会の記録"
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
