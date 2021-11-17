import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next'

import {Pages} from '@/components/chat/Pages'
import {teacherRef, chatRef} from '@/lib/nodedb'

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

  const chatData = await chatRef(String(chatKey))
    .get()
    .then((res) => {
      return res.docs.map((item) => {
        return item.data()
      })
    })
  const parsedChatData = JSON.parse(JSON.stringify(chatData))
  console.log(parsedChatData)
  return {
    props: {chatKey, data, parsedChatData},
    revalidate: 30,
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
const Chat = ({chatKey, data, parsedChatData}) => {
  return (
    <Pages chatKey={chatKey} teacherData={data} chatData={parsedChatData} />
  )
}
export default Chat
