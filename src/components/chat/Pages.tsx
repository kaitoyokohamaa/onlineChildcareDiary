import {VFC} from 'react'
import {Box, Flex} from '@chakra-ui/layout'

import {ChatSidebar} from '@/components/chat/chatSidebar'
import {ChatHeader} from '@/components/chat/chatHeader'
import {Chat} from '@/components/chat/chat'
import {ChatForm} from '@/components/chat/chatForm'
import {Layout} from '@/components/common/layout'
export const Pages: VFC = ({chatMessages}) => {
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
