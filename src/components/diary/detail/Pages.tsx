import React, {VFC} from 'react'
import dynamic from 'next/dynamic'
import {MdLocalLibrary} from 'react-icons/md'
import {Box, Flex, Text, Divider} from '@chakra-ui/layout'
import {Button} from '@chakra-ui/react'
import {DetailDiary, isUserDetailDiary} from '@/models/diary/register'
import {useRouter} from 'next/router'
const PDF = dynamic<{detailDiary: DetailDiary}>(
  () => import('./pdf').then((mod) => mod.Pdf),
  {
    ssr: false
  }
)

export const Pages: VFC<isUserDetailDiary> = ({detailDiary, isUser}) => {
  const router = useRouter()
  const docKey = router.query.slug[0]
  const uid = router.query.slug[1]
  return (
    <Box mt="10" px={16}>
      <Flex alignItems="center">
        <Box bg="#F8F8F8" p="2" borderRadius="md">
          <MdLocalLibrary color=" #9FD0E8" />
        </Box>
        <Text pl="8" fontWeight="bold" color="#707070">
          2021年１１月２０日（火）
        </Text>
        <Box textAlign="right" m="0 0 0 auto">
          {isUser && (
            <>
              <Button
                background="#F5F5F5"
                color="#5D5A5A"
                mr="2"
                onClick={() => {
                  router.push(`/diary/edit/${docKey}/${uid}`)
                }}
              >
                編集する
              </Button>
              <Button
                background="#F5F5F5"
                color="#5D5A5A"
                onClick={() => {
                  router.push(`/diary/${uid}`)
                }}
              >
                日誌一覧にもどる
              </Button>
            </>
          )}
        </Box>
      </Flex>
      <Divider mt="5" />
      <PDF detailDiary={detailDiary} />
    </Box>
  )
}
