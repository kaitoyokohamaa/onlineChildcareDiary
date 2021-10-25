import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next'

import {Pages} from '@/components/chat/Pages'
import {invitedUserRef} from '@/lib/nodedb'
import {ChatsProps} from '@/models/chat'
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const chatKey = context.params.chat
  const teacher = await invitedUserRef(String(chatKey)).get()
  const data = teacher.docs.map((res) => res.data())[0]
  return {
    props: {chatKey, data},
    revalidate: 30
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
const Chat: NextPage<ChatsProps> = ({chatKey, data}) => {
  return <Pages chatKey={chatKey} data={data} />
}
export default Chat
