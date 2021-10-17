import React, {VFC, useContext, useEffect, useState} from 'react'
import dynamic from 'next/dynamic'
import {MdLocalLibrary} from 'react-icons/md'
import {Box, Flex, Text, Divider} from '@chakra-ui/layout'
import {Button} from '@chakra-ui/react'
import {DetailDiary, isUserDetailDiary} from '@/models/diary/register'
import {useRouter} from 'next/router'
import {Layout} from '@/components/common/layout'
import {AuthContext} from '@/contexts/AuthContext'
import {userRef} from '@/lib/firestore'
const PDF = dynamic<{detailDiary: DetailDiary}>(
  () => import('./pdf').then((mod) => mod.Pdf),
  {
    ssr: false
  }
)

const UserOrTeacherLayout = ({children, isUser}) => {
  return isUser ? (
    <Layout isHeader>{children}</Layout>
  ) : (
    <Layout>
      <Box pt="10">{children}</Box>
    </Layout>
  )
}

export const Pages: VFC<isUserDetailDiary> = ({detailDiary}) => {
  const router = useRouter()
  const detailDockey = router.query.slug[0]
  const uid = router.query.slug[1]
  const {loginUser, dockey} = useContext(AuthContext)
  const [isUser, setIsUser] = useState<boolean>(false)

  useEffect(() => {
    dockey &&
      (async () => {
        const userInfo = await userRef().doc(dockey).get()
        if (userInfo.data().uid[0] === loginUser.uid) {
          setIsUser(true)
        }
      })()
  }, [dockey])

  return (
    <UserOrTeacherLayout isUser={isUser}>
      <Box mt="10" px={16}>
        <Flex alignItems="center">
          <Box bg="#F8F8F8" p="2" borderRadius="md">
            <MdLocalLibrary color=" #9FD0E8" />
          </Box>
          <>
            {isUser ? (
              <Text pl="8" fontWeight="bold" color="#707070">
                2021年１１月２０日（火）
              </Text>
            ) : (
              <Text pl="8" fontWeight="bold" color="#707070">
                実習記録1日目
              </Text>
            )}
          </>
          <Box textAlign="right" m="0 0 0 auto">
            {isUser ? (
              <>
                <Button
                  background="#F5F5F5"
                  color="#5D5A5A"
                  mr="2"
                  onClick={() => {
                    router.push(`/diary/edit/${detailDockey}/${uid}`)
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
            ) : (
              <>
                <Button
                  background="#F5F5F5"
                  color="#5D5A5A"
                  mr="2"
                  onClick={() => {
                    router.push(`/diary/for-teachers/${detailDockey}/${uid}`)
                  }}
                >
                  添削する
                </Button>
              </>
            )}
          </Box>
        </Flex>
        <Divider mt="5" />
        <PDF detailDiary={detailDiary} />
      </Box>
    </UserOrTeacherLayout>
  )
}
