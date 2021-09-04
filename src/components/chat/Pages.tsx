import { VFC } from "react";
import { Box, Flex } from "@chakra-ui/layout";

import { ChatSidebar } from "@/components/chat/chatSidebar";
import { ChatHeader } from "@/components/chat/chatHeader";
import { Chat } from "@/components/chat/chat";
export const Pages: VFC = () => {
  return (
    <Box p={0}>
      <Flex>
        <ChatSidebar />
        <Flex w="75%" justifyContent="center">
          <Box w="95%">
            <ChatHeader />
            <Box>
              <Chat />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
