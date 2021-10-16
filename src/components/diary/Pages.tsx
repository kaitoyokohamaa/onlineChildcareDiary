import {useRouter} from 'next/router'
import {VFC, useState, useEffect} from 'react'
import {MdLocalLibrary} from 'react-icons/md'
import {Box, Flex, Text, Divider, Stack} from '@chakra-ui/layout'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Button
} from '@chakra-ui/react'
import Link from 'next/link'
import {AlertDialogPop} from '@/components/common/dialog/alertDialog'
import {Register} from '@/models/diary/register'
import {CopyToClipboard} from 'react-copy-to-clipboard'
export const Pages: VFC<{diary: Register}> = ({diary}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const [currentCheckedId, setCurrentCheckedId] = useState<string>('')

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false)
    }, 500)
  }, [isCopied])
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
            <Th>担当クラス</Th>
            <Th>実習日</Th>
            <Th>リンクをコピー</Th>
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
                      <a>2歳児クラス</a>
                    </Link>
                  </Td>
                  <Td>{`${res.diaryData.day}`}</Td>
                  <Td>
                    <CopyToClipboard
                      // 本番環境のパスに入れ替え
                      text={`https://online-childcare-diary-nv53p7fn9-kaitoyokohamaa.vercel.app/diary/detail/${res.id}/${userKey}`}
                      onCopy={() => setIsCopied(true)}
                    >
                      <Button
                        as="button"
                        height="24px"
                        lineHeight="1.2"
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        border="1px"
                        px="8px"
                        borderRadius="2px"
                        fontSize="14px"
                        fontWeight="semibold"
                        bg="#f5f6f7"
                        borderColor="#ccd0d5"
                        color="#4b4f56"
                        _hover={{bg: '#ebedf0'}}
                        _active={{
                          bg: '#dddfe2',
                          transform: 'scale(0.98)',
                          borderColor: '#bec3c9'
                        }}
                        _focus={{
                          boxShadow:
                            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
                        }}
                      >
                        {isCopied ? 'リンクのコピー完了' : 'リンクをコピーする'}
                      </Button>
                    </CopyToClipboard>
                  </Td>
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
