import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next';

import {Pages} from '@/components/chat/Pages';
import {teacherRef, chatRef} from '@/lib/nodedb';
import {AllChatContent} from '@/models/chat';
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const chatKey = context.params.chat;
  const profileData = await teacherRef()
    .where('chatKey', 'array-contains', chatKey)
    .get()
    .then((res) => {
      if (res.size) {
        return res.docs.map((item) => {
          return item.data();
        })[0];
      } else {
        return null;
      }
    });
  const data = await chatRef(String(chatKey))
    .get()
    .then((res) => {
      return res.docs.map((item) => {
        return item.data();
      });
    });

  const chatData = JSON.parse(JSON.stringify(data));

  return {
    props: {chatKey, profileData, chatData},
    revalidate: 30,
  };
};
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
const Chat: NextPage<AllChatContent> = ({chatKey, profileData, chatData}) => {
  return (
    <Pages chatKey={chatKey} profileData={profileData} chatData={chatData} />
  );
};
export default Chat;
