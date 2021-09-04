import { VFC } from "react";
import { Avatar, AvatarBadge, Stack } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/layout";
export const ChatSidebar: VFC = () => {
  return (
    <Flex w="25%">
      <Box w="100%">
        {[...Array(10)].map(() => {
          return (
            <Box border="1px" py={4} px="10">
              <Flex alignItems="center">
                <Stack direction="row" spacing={4}>
                  <Avatar src="https://bit.ly/dan-abramov">
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                  </Avatar>
                </Stack>
                <Text pl="3">斉藤</Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
};
