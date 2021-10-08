import React, {VFC} from 'react'
import dynamic from 'next/dynamic'
import {MdLocalLibrary} from 'react-icons/md'
import {Box, Flex, Text, Divider} from '@chakra-ui/layout'
import {Button} from '@chakra-ui/react'
import {DetailDiary} from '@/models/register'
const PDF = dynamic<{detailDiary: DetailDiary}>(
  () => import('./pdf').then((mod) => mod.Pdf),
  {
    ssr: false
  }
)
export const Pages: VFC<{detailDiary: DetailDiary}> = ({detailDiary}) => {
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
          <Button background="#F5F5F5" color="#5D5A5A">
            日誌一覧にもどる
          </Button>
        </Box>
      </Flex>
      <Divider mt="5" />
      <PDF detailDiary={detailDiary} />
    </Box>
  )
}
