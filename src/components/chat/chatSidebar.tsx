import {VFC} from 'react';
import {Avatar, AvatarBadge, Stack} from '@chakra-ui/react';
import {Box, Flex, Text} from '@chakra-ui/layout';
import {ChatsSidebarProps} from '@/models/chat';
export const ChatSidebar: VFC<ChatsSidebarProps> = ({
  lastMessage,
  name,
  image,
}) => {
  return (
    <Flex w="100%" borderColor="#E9E9E9">
      <Box overflow="scroll">
        <Box py={4} w="100%">
          <Flex alignItems="center">
            <Stack spacing={4}>
              <Avatar src={image}>
                <AvatarBadge boxSize="0.9em" bg="green.500" />
              </Avatar>
            </Stack>
            <Box pl="3" w="100%">
              <Text fontWeight="bold">{name}</Text>
              <Text fontSize="sm" color="#707070">
                {lastMessage && lastMessage.length > 25
                  ? lastMessage.substr(0, 25) + '...'
                  : lastMessage}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
