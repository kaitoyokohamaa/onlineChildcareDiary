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
import {Teacher} from '@/models/teacher';
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

  const {data: profile} = useCollection<Teacher>(`Teacher`, {
    listen: true,
    where: ['chatKey', 'array-contains', chatKey],
    initialData: profileData,
  });

  const router = useRouter();
  const isTeacherOrUser = isTeacher;
  return (
    <Layout isTeacher={isTeacherOrUser ? true : false}>
      {profile ? (
        <HStack w="100%" p={0} border="2px" borderColor="#E9E9E9">
          <Box w="100%">
            <ChatHeader
              image={profile[0] && profile[0]?.dispayImage}
              name={
                profile && isTeacher
                  ? `${profile[0]?.name}(実習生)`
                  : `${profile[0]?.name}(${profile[0]?.department})`
              }
            />
            <Box id="chatContents" h="76vh" px="5" overflow="scroll">
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
