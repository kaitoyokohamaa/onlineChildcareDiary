import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next'

import {Pages} from '@/components/chat/Pages'
import {teacherRef} from '@/lib/nodedb'
import {ChatsProps} from '@/models/chat'
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const chatKey = context.params.chat
  const data = await teacherRef()
    .where('chatKey', 'array-contains', chatKey)
    .get()
    .then((res) => {
      return res.docs.map((item) => {
        return item.data()
      })[0]
    })

  return {
    props: {chatKey, data},
    revalidate: 30,
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
const Chat = ({chatKey, data}) => {
  return <Pages chatKey={chatKey} data={data} />
}
export default Chat
