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
    <Flex borderColor="#E9E9E9">
      <Box h="87vh" overflow="scroll">
        <Box
          borderLeft="4px"
          borderColor="#56A9D3"
          bg={'#f5f7f9 0% 0% no-repeat padding-box'}
          py={4}
          px="10">
          <Flex alignItems="center">
            <Stack spacing={4}>
              <Avatar src={image}>
                <AvatarBadge boxSize="0.9em" bg="green.500" />
              </Avatar>
            </Stack>
            <Box pl="3">
              <Text fontWeight="bold">{name}</Text>
              <Text fontSize="sm" color="#707070">
                {lastMessage && lastMessage.length > 15
                  ? lastMessage.substr(0, 15) + '...'
                  : lastMessage}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
