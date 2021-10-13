import {useRouter} from 'next/router'
import {VFC, useState} from 'react'
import {MdLocalLibrary} from 'react-icons/md'
import {Box, Flex, Text, Divider, Stack} from '@chakra-ui/layout'
import {Table, Thead, Tbody, Tr, Th, Td, Checkbox} from '@chakra-ui/react'
import Link from 'next/link'
import {AlertDialogPop} from '@/components/common/dialog/alertDialog'
import {Register} from '@/models/diary/register'
export const Pages: VFC<{diary: Register}> = ({diary}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [currentCheckedId, setCurrentCheckedId] = useState<string>('')
  const router = useRouter()
  const userKey = router.query.diary
  const onClickHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (e.target.checked) {
      setIsClicked(true)
      setCurrentCheckedId(id)
    } else {
      setIsClicked(false)
      setCurrentCheckedId('')
    }
  }
  return (
    <Box mt="10" px={16} h="85vh" overflow="scroll">
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
                    <Checkbox onChange={(e) => onClickHandler(e, res.id)} />
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
          justifyContent="space-evenly"
        >
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
  )
}
