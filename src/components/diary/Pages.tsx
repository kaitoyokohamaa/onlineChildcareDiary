import {useRouter} from 'next/router';
import {VFC, useState} from 'react';
import {MdLocalLibrary} from 'react-icons/md';
import {Box, Flex, Text, Divider, Stack} from '@chakra-ui/layout';
import {useCollection} from '@nandorojo/swr-firestore';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  useToast,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import {AlertDialogPop} from '@/components/common/dialog/alertDialog';
import {Register, DetailDiary} from '@/models/diary/register';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Layout} from '@/components/common/layout';
import {MdContentCopy} from 'react-icons/md';
export const Pages: VFC<{diary: Register}> = ({diary}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const [currentCheckedId, setCurrentCheckedId] = useState<string>('');
  const toast = useToast();

  const router = useRouter();
  const userKey = router.query.diary;
  const onClickHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    if (e.target.checked) {
      setIsClicked(true);
      setCurrentCheckedId(id);
    } else {
      setIsClicked(false);
      setCurrentCheckedId('');
    }
  };

  const {data: diaryData} = useCollection<DetailDiary>(
    `User/${userKey}/register/`,
    {
      listen: true,
      orderBy: ['createdAt', 'asc'],
      initialData: diary,
    },
  );

  return (
    <Layout isHeader>
      <Box mt="10" px={16} h="85vh" overflow="scroll">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Flex alignItems="center">
              <Box bg="#F8F8F8" p="2" borderRadius="md">
                <MdLocalLibrary color=" #9FD0E8" />
              </Box>

              <Text ml="7" fontWeight="bold">
                日誌
              </Text>
            </Flex>
          </Box>
          <Box>
            <Button
              background="#263773"
              color="#fff"
              _hover={{background: '#1c2956'}}
              onClick={() => router.push(`/user/diary/summary/${userKey}`)}>
              実習のまとめへ
            </Button>
            <Button
              ml="4"
              background="#263773"
              color="#fff"
              _hover={{background: '#1c2956'}}
              onClick={() =>
                router.push(`/user/diary/introspection/${userKey}`)
              }>
              実習の反省会へ
            </Button>
          </Box>
        </Flex>
        <Divider mt="5" />
        <Table>
          <Thead>
            <Tr>
              <Th>
                <Checkbox />
              </Th>
              <Th>担当クラス</Th>
              <Th>実習日</Th>
              <Th>リンクをコピー</Th>
            </Tr>
          </Thead>
          <Tbody>
            {diaryData ? (
              diaryData.map((res, i) => {
                const day = res?.day.replace('-', '/').replace('-', '/');
                return (
                  <Tr
                    key={i}
                    _hover={{
                      background: '#f5f7f9',
                      p: '14',
                    }}>
                    <Th>
                      <Checkbox onChange={(e) => onClickHandler(e, res.id)} />
                    </Th>

                    <Td color="#273264" fontWeight="bold" cursor="pointer">
                      <Link
                        href={`/user/diary/detail/user/${res.id}/${userKey}`}>
                        <a>{res?.trainingClass}</a>
                      </Link>
                    </Td>
                    <Td>{`${day}`}</Td>
                    <Td>
                      <CopyToClipboard
                        cursor="pointer"
                        // 本番環境のパスに入れ替え→もしisUserじゃなかったら保育士の先生が編集できるデザインに変更する。
                        text={`phoenixdiary.vercel.app/teacher/diary/detail/teacher/${res.id}/${userKey}`}>
                        <MdContentCopy
                          onClick={() =>
                            toast({
                              title: `コピーしました`,
                              position: 'bottom',
                              isClosable: true,
                            })
                          }
                        />
                      </CopyToClipboard>
                    </Td>
                  </Tr>
                );
              })
            ) : (
              <p>日誌はまだ登録されておりません</p>
            )}
          </Tbody>
        </Table>
        {isClicked && (
          <Stack
            direction={['column', 'row']}
            spacing="24px"
            ml="-16"
            px="10"
            w="full"
            py="8"
            background="#fcf2e0"
            position="fixed"
            bottom="0"
            alignItems="center"
            justifyContent="space-evenly">
            <Box>
              <Text>1件の日誌を選択</Text>
            </Box>
            <Box>
              <AlertDialogPop
                currentCheckedId={currentCheckedId}
                userKey={userKey}
              />
            </Box>
          </Stack>
        )}
      </Box>
    </Layout>
  );
};
