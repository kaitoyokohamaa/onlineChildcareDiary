import {VFC} from 'react';
import {useRouter} from 'next/router';
import {Box, Flex} from '@chakra-ui/layout';
import {Button, HStack} from '@chakra-ui/react';
import {ChatSidebar} from '@/components/chat/chatSidebar';
import {ChatHeader} from '@/components/chat/chatHeader';
import {Chat} from '@/components/chat/chat';
import {ChatForm} from '@/components/chat/chatForm';
import {Layout} from '@/components/common/layout';
import {AllChatContent} from '@/models/chat';

import {useCollection} from '@nandorojo/swr-firestore';
export const Pages: VFC<AllChatContent> = ({
  chatKey,
  profileData,
  isTeacher,
  chatData,
}) => {
  const {data: chatMessages} = useCollection<AllChatContent['chatData']>(
    `User/${chatKey}/chats/`,
    {
      listen: true,
      orderBy: ['sentAt', 'asc'],
      initialData: chatData,
    },
  );

  const {data: lastMessage} = useCollection<AllChatContent['chatData']>(
    `User/${chatKey}/chats/`,
    {
      ignoreFirestoreDocumentSnapshotField: false,
      limit: 1,
      orderBy: ['sentAt', 'desc'],
      listen: true,
    },
  );

  const router = useRouter();
  const isTeacherOrUser = isTeacher;
  return (
    <Layout isTeacher={isTeacherOrUser ? true : false}>
      {profileData ? (
        <HStack w="100%" p={0} border="2px" borderColor="#E9E9E9">
          <Box
            h="99vh"
            border="2px"
            borderTop="0px"
            borderLeft="0px"
            borderBottom="0px"
            borderColor="#E9E9E9">
            <ChatSidebar
              lastMessage={lastMessage && lastMessage[0]?.text}
              name={profileData && profileData?.name}
              image={profileData && profileData?.dispayImage}
            />
          </Box>
          <Box w="78%">
            <ChatHeader
              image={profileData && profileData?.dispayImage}
              name={profileData && profileData?.name}
            />
            <Box h="76vh" px="5" overflow="scroll">
              <Chat
                image={profileData && profileData?.dispayImage}
                chatMessages={chatMessages}
              />
            </Box>
            <Box mt="4" px="5">
              <ChatForm />
            </Box>
          </Box>
        </HStack>
      ) : (
        <>
          <p>実習先の保育士に招待リンクを送って登録してもらいましょう！</p>
          <Button
            background="#263773"
            color="#fff"
            _hover={{background: '#1c2956'}}
            onClick={() => router.push(`/user/home/${chatKey}`)}
            mr="2"
            rounded="full">
            リンクをコピーしに行く
          </Button>
        </>
      )}
    </Layout>
  );
};
