import { VFC } from "react";
import { Box, Flex } from "@chakra-ui/layout";

import { ChatSidebar } from "@/components/chat/chatSidebar";
import { ChatHeader } from "@/components/chat/chatHeader";
import { Chat } from "@/components/chat/chat";
import { ChatForm } from "@/components/chat/chatForm";

export const Pages: VFC = () => {
  return (
    <Box p={0}>
      <Flex>
        <ChatSidebar />
        <Flex w="75%" justifyContent="center">
          <Box w="95%">
            <ChatHeader />
            <Box h="75vh" overflow="scroll">
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
