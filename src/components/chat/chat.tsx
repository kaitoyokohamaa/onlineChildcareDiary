import {VFC, useContext} from 'react';

import {ChatText} from '@/components/chat/chatText';
import {Avatar, Stack, Flex, Box} from '@chakra-ui/react';
import {Messages} from '@/models/chat';
import {AuthContext} from '@/contexts/AuthContext';
export const Chat: VFC<{
  chatMessages: Messages[];
  image: string;
}> = ({chatMessages, image}) => {
  const {loginUser} = useContext(AuthContext);
  return (
    <>
      {chatMessages?.map(({senderId, id, text}) => {
        return senderId === loginUser?.uid ? (
          <ChatText key={id} isSender={true} text={text} />
        ) : (
          <>
            <Flex alignItems="center">
              <Stack spacing={4}>
                <Avatar src={image}></Avatar>
              </Stack>
              <Box pl="3">
                <ChatText key={id} isSender={false} text={text} />
              </Box>
            </Flex>
          </>
        );
      })}
    </>
  );
};
