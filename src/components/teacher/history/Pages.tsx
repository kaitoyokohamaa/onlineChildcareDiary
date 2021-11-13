import {VFC, useEffect, useState} from 'react'
import {Box, Flex, Text, Divider} from '@chakra-ui/layout'

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
  Input,
} from '@chakra-ui/react'
import {MdLocalLibrary} from 'react-icons/md'
import Link from 'next/link'
import {Layout} from '@/components/common/layout'
import {registerRef} from '@/lib/firestore'
import {History} from '@/models/diary/history'
export const Pages: VFC<History> = ({data, userKey}) => {
  const [historyDiaries, setHistoryDiaries] = useState([])
  const [diaryIds, setDiaryIds] = useState([])
  useEffect(() => {
    const idList = data.map((res) => {
      return res.diaryId
    })
    setDiaryIds(idList)
  }, [userKey, data])
  useEffect(() => {
    registerRef(userKey).onSnapshot((res) => {
      let historyDiariesArray = []
      res.forEach((item) => {
        diaryIds.includes(item.id) &&
          historyDiariesArray.push({
            diaryDay: item.data().day,
            // updatedDay: res.updateAt,
            id: item.id,
          })
      })
      setHistoryDiaries(historyDiariesArray)
    })
  }, [diaryIds])
  console.log(historyDiaries.length)
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
            {historyDiaries.map((res, i) => {
              return (
                <Tr
                  _hover={{
                    background: '#f5f7f9',
                    p: '14',
                  }}
                  key={i}
                >
                  <Td color="#273264" fontWeight="bold" cursor="pointer">
                    <Link href={`/teacher/diary/detail/${res.id}/${userKey}`}>
                      <a>2歳児クラス</a>
                    </Link>
                  </Td>
                  <Td>{res.diaryDay}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Box>
    </Layout>
  )
}
