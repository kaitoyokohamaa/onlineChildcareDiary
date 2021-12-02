import {VFC} from 'react';
import {useRouter} from 'next/router';
import {Box} from '@chakra-ui/layout';
import {Button, HStack} from '@chakra-ui/react';

import {ChatHeader} from '@/components/chat/chatHeader';
import {Chat} from '@/components/chat/chat';
import {ChatForm} from '@/components/chat/chatForm';
import {Layout} from '@/components/common/layout';
import {AllChatContent} from '@/models/chat';
import {Teacher} from '@/models/teacher';

import {useCollection, useDocument} from '@nandorojo/swr-firestore';
export const Pages: VFC<AllChatContent> = ({
  chatKey,
  profileData,
  isTeacher,
  chatData,
  data,
}) => {
  const {data: chatMessages} = useCollection<AllChatContent['chatData']>(
    `User/${chatKey}/chats/`,
    {
      listen: true,
      orderBy: ['sentAt', 'asc'],
      initialData: chatData,
    },
  );

  const {data: profile} = useCollection<Teacher>(`Teacher`, {
    listen: true,
    where: ['chatKey', 'array-contains', chatKey],
    initialData: profileData,
  });

  const {data: profileUser} = useDocument(`User/${chatKey}`, {
    listen: true,
    initialData: data,
  });

  const router = useRouter();
  const isTeacherOrUser = isTeacher;
  return (
    <Layout isTeacher={isTeacherOrUser ? true : false}>
      {profile && profile[0] ? (
        <HStack
          h="100vh"
          overflow="scroll"
          w="100%"
          p={0}
          border="2px"
          borderColor="#E9E9E9">
          <Box w="100%">
            <ChatHeader
              image={
                profile[0] && isTeacher
                  ? profileUser?.dispayImage
                  : profile[0]?.dispayImage
              }
              name={
                profile[0] && isTeacher
                  ? `${profileUser?.name}(実習生)`
                  : `${profile[0]?.name}(${profile[0]?.department})`
              }
            />
            <Box id="chatContents" h="76vh" px="5" overflow="scroll">
              <Chat
                image={
                  profile[0] && isTeacher
                    ? profileUser?.dispayImage
                    : profile[0]?.dispayImage
                }
                chatMessages={chatMessages}
              />
            </Box>
            <Box mt="4" px="5">
              <ChatForm />
            </Box>
          </Box>
        </HStack>
      ) : (
        <Box h="90vh" textAlign="center">
          <p>保育士の登録がまだ完了しておりません。</p>
          <p>もうしばらくお待ちください。</p>
          <Button
            mt="2"
            background="#263773"
            color="#fff"
            _hover={{background: '#1c2956'}}
            onClick={() => router.push(`/user/home/${chatKey}`)}
            mr="2"
            rounded="full">
            リンクをコピーしに行く
          </Button>
        </Box>
      )}
    </Layout>
  );
};
