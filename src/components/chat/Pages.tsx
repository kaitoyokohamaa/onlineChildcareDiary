import {VFC} from 'react';
import {useRouter} from 'next/router';
import {Box, Flex} from '@chakra-ui/layout';
import {Button} from '@chakra-ui/react';
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
  teacherData,
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

  const {data: teacherProfile} = useCollection<Teacher>(
    `Teacher`,
    {},
    {
      initialData: teacherData && teacherData[0],
    },
  );
  const router = useRouter();
  return (
    <Layout
      isHeader={isTeacher ? false : true}
      isTeacher={isTeacher ? true : false}>
      {teacherProfile && teacherProfile.length ? (
        <Box p={0} borderTop="2px" borderColor="#E9E9E9" mt="20px">
          <Flex>
            <ChatSidebar
              lastMessage={lastMessage && lastMessage[0].text}
              name={teacherProfile && teacherProfile[0]?.name}
              image={teacherProfile && teacherProfile[0]?.dispayImage}
            />
            <Flex w="75%" justifyContent="center">
              <Box w="95%">
                <ChatHeader
                  image={teacherProfile && teacherProfile[0]?.dispayImage}
                  name={teacherProfile && teacherProfile[0]?.name}
                />
                <Box h="65vh" overflow="scroll">
                  <Chat chatMessages={chatMessages} />
                </Box>
                <Box mt="4">
                  <ChatForm />
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
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
