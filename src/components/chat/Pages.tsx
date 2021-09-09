import { VFC } from "react";
import { Box, Flex } from "@chakra-ui/layout";

import { ChatSidebar } from "@/components/chat/chatSidebar";
import { ChatHeader } from "@/components/chat/chatHeader";
import { Chat } from "@/components/chat/chat";
import { ChatForm } from "@/components/chat/chatForm";

export const Pages: VFC = () => {
  return (
    <Box p={0} borderTop="2px" borderColor="#E9E9E9" mt="20px">
      <Flex>
        <ChatSidebar />
        <Flex w="75%" justifyContent="center">
          <Box w="95%">
            <ChatHeader />
            <Box h="65vh" overflow="scroll">
              <Chat />
            </Box>
            <Box mt="4">
              <ChatForm />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
