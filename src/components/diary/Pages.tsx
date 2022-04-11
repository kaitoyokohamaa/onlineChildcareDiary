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
    <Layout>
      <Box mt="10" px={16} h="85vh" overflow="scroll">
        <Box>
          <Flex alignItems="center">
            <Text ml="7" fontWeight="bold">
              社員のストレスグラフ
            </Text>
          </Flex>
        </Box>

        <Table>
          <Thead>
            <Tr>
              <Th>
                <Checkbox />
              </Th>
              <Th>日付</Th>
              <Th>実習日</Th>
              <Th>リンクをコピー</Th>
            </Tr>
          </Thead>
          <Tbody>
            {diaryData ? (
              diaryData.map((res, i) => {
                // const day = res?.day.replace('-', '/').replace('-', '/');
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

                    <Td color="#273673" fontWeight="bold" cursor="pointer">
                      <Link
                        href={`/user/diary/detail/user/${res.id}/${userKey}`}>
                        <a>
                          {res?.assignedName}({res?.trainingClass})
                        </a>
                      </Link>
                    </Td>
                    <Td>{`${res?.day}`}</Td>
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
