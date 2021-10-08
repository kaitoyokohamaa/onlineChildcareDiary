import {useRouter} from 'next/router'
import {VFC} from 'react'
import {MdLocalLibrary} from 'react-icons/md'
import {Box, Flex, Text, Divider} from '@chakra-ui/layout'
import {Table, Thead, Tbody, Tr, Th, Td, Checkbox} from '@chakra-ui/react'
import Link from 'next/link'

import {Register} from '@/models/register'
export const Pages: VFC<{diary: Register}> = ({diary}) => {
  const router = useRouter()
  const userKey = router.query.diary
  return (
    <Box mt="10" px={16}>
      <Flex alignItems="center">
        <Box bg="#F8F8F8" p="2" borderRadius="md">
          <MdLocalLibrary color=" #9FD0E8" />
        </Box>
        <Text pl="8" fontWeight="bold">
          日誌
        </Text>
      </Flex>
      <Divider mt="5" />
      <Table>
        <Thead>
          <Tr>
            <Th>
              <Checkbox />
            </Th>
            <Th>保育園名</Th>
            <Th>実習日</Th>
          </Tr>
        </Thead>
        <Tbody>
          {diary.length ? (
            diary.map((res, i) => {
              return (
                <Tr
                  key={i}
                  _hover={{
                    background: '#f5f7f9',
                    p: '14'
                  }}
                >
                  <Th>
                    <Checkbox />
                  </Th>

                  <Td color="#273264" fontWeight="bold" cursor="pointer">
                    <Link href={`/diary/detail/${res.id}/${userKey}`}>
                      <a>ひまわり保育園</a>
                    </Link>
                  </Td>
                  <Td>{`${res.diaryData.day}`}</Td>
                </Tr>
              )
            })
          ) : (
            <p>日誌はまだ登録されておりません</p>
          )}
        </Tbody>
      </Table>
    </Box>
  )
}
