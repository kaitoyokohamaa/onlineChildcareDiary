import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next';

import {Pages} from '@/components/chat/Pages';
import {adminUsersRef} from '@/lib/nodedb';

import {User} from '@/models/user';
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const chatKey = context.params.chat;
  const user = await adminUsersRef(String(chatKey)).get();
  const data = user.data();

  return {
    props: {chatKey, data},
    revalidate: 30,
  };
};
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
const Chat: NextPage<{chatKey: string; data: any}> = ({chatKey, data}) => {
  return <Pages chatKey={chatKey} data={data} isTeacher />;
};
export default Chat;
