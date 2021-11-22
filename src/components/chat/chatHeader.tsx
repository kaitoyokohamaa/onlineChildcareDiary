import {VFC} from 'react';
import {Avatar, Stack} from '@chakra-ui/react';
import {Box, Flex, Text} from '@chakra-ui/layout';
import {ArrowBackIcon} from '@chakra-ui/icons';
import {ChatsTeacherInfo} from '@/models/chat';
export const ChatHeader: VFC<ChatsTeacherInfo> = ({name, image}) => {
  return (
    <Box w="100%" pb="10">
      <Box borderBottom="4px" borderColor="#56A9D3" py={4}>
        <Flex alignItems="center">
          <Stack direction="row" spacing={4}>
            <Avatar src={image}></Avatar>
          </Stack>
          <Text pl="3">{name}</Text>
        </Flex>
      </Box>
    </Box>
  );
};
