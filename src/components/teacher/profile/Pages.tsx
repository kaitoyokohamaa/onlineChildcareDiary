import {VFC, useEffect, useState} from 'react';
import {Teacher} from '@/models/teacher';
import {Box, Flex, Heading, Text} from '@chakra-ui/layout';
import {Avatar, useColorModeValue, Button, Divider} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {Layout} from '@/components/common/layout';
import {teacherfiledRef} from '@/lib/firestore';
import firebase from 'firebase/app';
export const Pages: VFC = () => {
  const [teacher, setTeacher] = useState<firebase.firestore.DocumentData>();
  const router = useRouter();
  const docKey = router.query.profile;
  useEffect(() => {
    teacherfiledRef(String(docKey)).onSnapshot((res) => {
      const data = res.data();
      setTeacher(data);
    });
  }, [docKey]);
  return (
    <Layout isTeacher>
      <Box mt="16" px={16} overflow="scroll" h="85vh">
        <Text
          fontWeight="bold"
          w="100%"
          fontSize="18px"
          position="relative"
          display="inline-block"
          _after={{
            position: 'absolute',
            top: '50%',
            display: 'inline-block',
            width: '87%',
            height: '1px',
            left: '13%',
            backgroundColor: '#00000029',
            content: '" "',
          }}>
          プロフィール
        </Text>

        <Flex py={1}>
          <Box w="100%" boxShadow={'2xl'} p="14" my="10">
            <Flex>
              <Box mr="10">
                <Avatar size="2xl" src={teacher?.dispayImage} alt={'Author'} />
              </Box>

              <Box pl="5">
                <Flex justifyContent="space-between">
                  <Heading
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontWeight="bold"
                    fontFamily={'body'}>
                    {teacher?.name ? teacher.name : '未記入'}
                  </Heading>
                  <Box mt="-4">
                    <Button
                      background="#263773"
                      color="#fff"
                      _hover={{background: '#1c2956'}}>
                      <Link href={`/teacher/profile/edit/${docKey}`}>
                        <a>プロフィールを編集する</a>
                      </Link>
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>

            <Flex mt="10">
              <Box>
                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'2xl'}
                  fontWeight="bold"
                  fontFamily={'body'}
                  mb="10">
                  基本情報
                </Heading>
              </Box>
            </Flex>
            <Flex>
              <Box w="25%">
                <Text fontWeight="bold" color="#273264">
                  所属園
                </Text>
                <Text pt="2">
                  {teacher?.department ? teacher?.department : '未記入'}
                </Text>
              </Box>

              <Box w="25%">
                <Text fontWeight="bold" color="#273264">
                  役職
                </Text>
                <Text pt="2">{teacher?.post ? teacher.post : '未記入'}</Text>
              </Box>

              <Box w="25%">
                <Text fontWeight="bold" color="#273264">
                  生年月日
                </Text>
                <Text pt="2">
                  {teacher?.birthday ? teacher.birthday : '未記入'}
                </Text>
              </Box>

              <Box>
                <Text fontWeight="bold" color="#273264">
                  メールアドレス
                </Text>
                <Text pt="2">{teacher?.email ? teacher.email : '未記入'}</Text>
              </Box>
            </Flex>
            <Divider mt="10" colorScheme="blue" size="2xl" />
            <Flex py="10">
              <Box w="25%">
                <Text fontWeight="bold" color="#273264">
                  電話番号
                </Text>
                <Text pt="2">
                  {teacher?.number ? teacher.number : '未記入'}
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};
