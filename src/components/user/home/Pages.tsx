import {VFC} from 'react';
import {Box, Flex, Text, Divider} from '@chakra-ui/layout';
import {Input, Button, useToast} from '@chakra-ui/react';
import {MdLocalLibrary} from 'react-icons/md';
import Link from 'next/link';
import {Layout} from '@/components/common/layout';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {v1 as uuidv1} from 'uuid';
import {Home} from '@/models/user/home';
export const Pages: VFC<Home> = ({homeKey, isSummary, isIntrospection}) => {
  const toast = useToast();
  return (
    <Layout isHeader>
      <Box px={16}>
        <Box mt={10}>
          <Text fontWeight="bold">新規作成</Text>
        </Box>
        <Divider my="4" />
        <Box w="100%">
          <Flex w="60%" justifyContent="space-between">
            <Box>
              <Link href={`/user/diary/register/${uuidv1()}`}>
                <a>
                  <Box
                    _hover={{backgroundColor: '#F8F8F8'}}
                    backgroundColor="#F9FBFB"
                    w="200px"
                    p="24px"
                    borderRadius="md"
                    alignItems="center"
                    border="2px solid #e4eaf1"
                    boxSizing="border-box"
                    textAlign="center">
                    <Box display="flex" justifyContent="center">
                      <MdLocalLibrary size="70" color=" #9FD0E8" />
                    </Box>
                    <Box>
                      <Text fontWeight="bold" pt="4">
                        日誌登録
                      </Text>
                    </Box>
                  </Box>
                </a>
              </Link>
            </Box>
            <Box>
              {!isSummary && (
                <Link href={`/user/diary/summary/register`}>
                  <a>
                    <Box
                      _hover={{backgroundColor: '#F8F8F8'}}
                      w="200px"
                      backgroundColor="#F9FBFB"
                      p="24px"
                      borderRadius="md"
                      alignItems="center"
                      border="2px solid #e4eaf1"
                      boxSizing="border-box"
                      textAlign="center">
                      <Box display="flex" justifyContent="center">
                        <MdLocalLibrary size="70" color=" #9FD0E8" />
                      </Box>
                      <Box>
                        <Text fontWeight="bold" pt="4">
                          実習のまとめ登録
                        </Text>
                      </Box>
                    </Box>
                  </a>
                </Link>
              )}
            </Box>
            <Box>
              {!isIntrospection && (
                <Link href={`/user/diary/introspection/register`}>
                  <a>
                    <Box
                      _hover={{
                        backgroundColor: '#F8F8F8',
                      }}
                      w="200px"
                      backgroundColor="#F9FBFB"
                      p="24px"
                      borderRadius="md"
                      alignItems="center"
                      border="2px solid #e4eaf1"
                      boxSizing="border-box"
                      textAlign="center">
                      <Box display="flex" justifyContent="center">
                        <MdLocalLibrary size="70" color=" #9FD0E8" />
                      </Box>
                      <Box>
                        <Text fontWeight="bold" pt="4">
                          反省会の記録登録
                        </Text>
                      </Box>
                    </Box>
                  </a>
                </Link>
              )}
            </Box>
          </Flex>
          <Box mt={10}>
            <Text fontWeight="bold">一覧</Text>
          </Box>
          <Divider my="4" />
          <Box w="100%">
            <Flex>
              <Box>
                <Link href={`/user/diary/${homeKey}`}>
                  <a>
                    <Box
                      _hover={{backgroundColor: '#F8F8F8'}}
                      w="152px"
                      backgroundColor="#F9FBFB"
                      p="14px"
                      borderRadius="md"
                      alignItems="center"
                      border="2px solid #e4eaf1"
                      boxSizing="border-box"
                      textAlign="center">
                      <Box>
                        <Text fontWeight="bold">日誌一覧</Text>
                      </Box>
                    </Box>
                  </a>
                </Link>
              </Box>
              <Box>
                <Link href={`/user/chat/${homeKey}`}>
                  <a>
                    <Box
                      ml={'10'}
                      _hover={{backgroundColor: '#F8F8F8'}}
                      w="152px"
                      backgroundColor="#F9FBFB"
                      p="14px"
                      borderRadius="md"
                      alignItems="center"
                      border="2px solid #e4eaf1"
                      boxSizing="border-box"
                      textAlign="center">
                      <Box>
                        <Text fontWeight="bold">チャット</Text>
                      </Box>
                    </Box>
                  </a>
                </Link>
              </Box>
            </Flex>
            <Box mt={10}>
              <Text fontWeight="bold">招待URL作成</Text>
            </Box>
            <Divider my="4" />
            <Flex>
              {/* 本番環境への書き換えをしよう */}
              <Input
                w="30%"
                value={`https://phoenixdiary.vercel.app/user/signup/invite/${homeKey}`}
                isReadOnly
                mr="3"
              />
              <CopyToClipboard
                cursor="pointer"
                // 本番環境のパスに入れ替え→もしisUserじゃなかったら保育士の先生が編集できるデザインに変更する。
                text={`https://phoenixdiary.vercel.app/user/signup/invite/${homeKey}`}>
                <Button
                  _hover={{backgroundColor: '#F8F8F8'}}
                  backgroundColor="#F9FBFB"
                  borderRadius="md"
                  alignItems="center"
                  border="2px solid #e4eaf1"
                  boxSizing="border-box"
                  textAlign="center"
                  onClick={() =>
                    toast({
                      title: `コピーしました`,
                      position: 'bottom',
                      isClosable: true,
                    })
                  }>
                  コピー
                </Button>
              </CopyToClipboard>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};
