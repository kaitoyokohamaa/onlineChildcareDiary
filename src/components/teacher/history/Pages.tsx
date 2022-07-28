import {VFC, useEffect, useState} from 'react';
import {Box, Flex, Text, Divider} from '@chakra-ui/layout';

import {Table, Thead, Tbody, Tr, Th, Td} from '@chakra-ui/react';
import {MdLocalLibrary} from 'react-icons/md';
import Link from 'next/link';
import {Layout} from '@/components/common/layout';
import {registerRef} from '@/lib/firestore';
import {History} from '@/models/diary/history';

export const Pages: VFC<History> = ({data, userKey}) => {
  const [historyDiaries, setHistoryDiaries] = useState([]);

  useEffect(() => {
    const idList = data.map((res) => {
      return res.diaryId;
    });

    registerRef(userKey).onSnapshot((res) => {
      let historyDiariesArray = [];
      res.forEach((item) => {
        idList.includes(item.id) &&
          historyDiariesArray.push({
            diaryDay: item.data().day,
            trainingClass: item.data().trainingClass,
            id: item.id,
          });
      });

      setHistoryDiaries(historyDiariesArray);
    });
  }, [userKey, data]);

  return (
    <Layout isTeacher>
      <Box mt="10" px={16} h="85vh" overflow="scroll">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Flex alignItems="center">
              <Box bg="#F8F8F8" p="2" borderRadius="md">
                <MdLocalLibrary color=" #9FD0E8" />
              </Box>
              <Text ml="7" fontWeight="bold">
                添削日誌一覧
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Divider mt="5" />
        <Table>
          <Thead>
            <Tr>
              <Th>担当クラス</Th>
              <Th>実習日時</Th>
            </Tr>
          </Thead>
          <Tbody>
            {historyDiaries.length ? (
              historyDiaries.map((res, i) => {
                return (
                  <Tr
                    _hover={{
                      background: '#f5f7f9',
                      p: '14',
                    }}
                    key={i}>
                    <Td color="#273673" fontWeight="bold" cursor="pointer">
                      <Link
                        href={`/teacher/diary/detail/teacher/${res.id}/${userKey}`}>
                        <a>{res?.trainingClass}</a>
                      </Link>
                    </Td>
                    <Td>{res.diaryDay}</Td>
                  </Tr>
                );
              })
            ) : (
              <p>添削した日誌はまだありません</p>
            )}
          </Tbody>
        </Table>
      </Box>
    </Layout>
  );
};
