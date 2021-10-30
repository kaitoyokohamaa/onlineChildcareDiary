import {VFC, useState, useEffect, useContext} from 'react'

import {Box, Flex} from '@chakra-ui/layout'
import {chatRef} from '@/lib/firestore'
import {ChatSidebar} from '@/components/chat/chatSidebar'
import {ChatHeader} from '@/components/chat/chatHeader'
import {Chat} from '@/components/chat/chat'
import {ChatForm} from '@/components/chat/chatForm'
import {Layout} from '@/components/common/layout'
import {Messages, ChatsProps} from '@/models/chat'
import {AuthContext} from '@/contexts/AuthContext'
export const Pages: VFC<ChatsProps> = ({chatKey, data, isTeacher}) => {
  const [chatMessages, setChatMessages] = useState<Messages[]>([])
  const [lastMessage, setLastMessage] = useState<string>('')
  const [isSender, setIsSender] = useState<boolean>(false)
  const {dockey} = useContext(AuthContext)
  useEffect(() => {
    chatRef(chatKey)
      .orderBy('sentAt', 'asc')
      .onSnapshot((res) => {
        let chatMessagesArray: Messages[] = []
        res.forEach((item) => {
          chatMessagesArray.push({
            chatsId: item.id,
            chats: {
              senderId: item.data().senderId,
              sentAt: item.data().sentAt,
              text: item.data().text,
            },
          })
        })
        setChatMessages(chatMessagesArray)
      })

    chatRef(chatKey)
      .orderBy('sentAt', 'desc')
      .limit(1)
      .onSnapshot((res) => {
        res.forEach((item) => {
          setLastMessage(item.data().text)
        })
      })
  }, [chatKey])

  return (
    <Layout
      isHeader={isTeacher ? false : true}
      isTeacher={isTeacher ? true : false}
    >
      <Box p={0} borderTop="2px" borderColor="#E9E9E9" mt="20px">
        <Flex>
          <ChatSidebar
            lastMessage={lastMessage}
            name={data.name}
            image={data.dispayImage}
          />
          <Flex w="75%" justifyContent="center">
            <Box w="95%">
              <ChatHeader image={data.dispayImage} name={data.name} />
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
