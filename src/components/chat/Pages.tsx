import {VFC, useState, useEffect, useContext} from 'react'

import {Box, Flex} from '@chakra-ui/layout'
import {chatRef} from '@/lib/firestore'
import {ChatSidebar} from '@/components/chat/chatSidebar'
import {ChatHeader} from '@/components/chat/chatHeader'
import {Chat} from '@/components/chat/chat'
import {ChatForm} from '@/components/chat/chatForm'
import {Layout} from '@/components/common/layout'
import {Chats, ChatsProps} from '@/models/chat'
import {Teacher} from '@/models/teacher'
import {useCollection} from '@nandorojo/swr-firestore'
export const Pages: VFC = ({chatKey, teacherData, isTeacher, chatData}) => {
  const {data: chatMessages} = useCollection(`User/${chatKey}/chats/`, {
    listen: true,
    orderBy: ['sentAt', 'asc'],
    initialData: chatData,
  })
  console.log(chatMessages)
  const {data: lastMessage} = useCollection<Chats>(`User/${chatKey}/chats/`, {
    ignoreFirestoreDocumentSnapshotField: false,
    limit: 1,
    orderBy: ['sentAt', 'desc'],
    listen: true,
  })

  const {data: teacherProfile} = useCollection<Teacher>(
    `Teacher`,
    {},
    {
      initialData: teacherData[0],
    },
  )

  return (
    <Layout
      isHeader={isTeacher ? false : true}
      isTeacher={isTeacher ? true : false}
    >
      <Box p={0} borderTop="2px" borderColor="#E9E9E9" mt="20px">
        <Flex>
          <ChatSidebar
            lastMessage={lastMessage && lastMessage[0].text}
            name={teacherProfile && teacherProfile[0]?.name}
            image={teacherProfile && teacherProfile[0]?.dispayImage}
          />
          <Flex w="75%" justifyContent="center">
            <Box w="95%">
              <ChatHeader
                image={teacherProfile && teacherProfile[0]?.dispayImage}
                name={teacherProfile && teacherProfile[0]?.name}
              />
              <Box h="65vh" overflow="scroll">
                <Chat chatMessages={chatMessages} />
              </Box>
              <Box mt="4">
                <ChatForm />
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  )
}
