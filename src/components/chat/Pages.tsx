import {VFC, useState, useEffect} from 'react'
import {Box, Flex} from '@chakra-ui/layout'
import {chatRef} from '@/lib/firestore'
import {ChatSidebar} from '@/components/chat/chatSidebar'
import {ChatHeader} from '@/components/chat/chatHeader'
import {Chat} from '@/components/chat/chat'
import {ChatForm} from '@/components/chat/chatForm'
import {Layout} from '@/components/common/layout'
import {Messages} from '@/models/chat'
export const Pages: VFC<{chatKey: string}> = ({chatKey}) => {
  const [chatMessages, setChatMessages] = useState<Messages[]>([])

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
              text: item.data().text
            }
          })
        })
        setChatMessages(chatMessagesArray)
      })
  }, [chatKey])
  return (
    <Layout isHeader>
      <Box p={0} borderTop="2px" borderColor="#E9E9E9" mt="20px">
        <Flex>
          <ChatSidebar />
          <Flex w="75%" justifyContent="center">
            <Box w="95%">
              <ChatHeader />
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
