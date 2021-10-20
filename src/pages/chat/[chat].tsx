import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next'
import {chatRef} from '@/lib/nodedb'
import {Pages} from '@/components/chat/Pages'

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const Key = context.params.chat

  const chatMessages = await chatRef(String(Key)).get()
  const chats = chatMessages.docs.map((item) => {
    const data = {chats: item.data(), id: item.id}
    return data
  })

  const parsedChats = JSON.parse(JSON.stringify(chats))
  return {
    props: {parsedChats},
    revalidate: 30
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

const Chat: NextPage = ({parsedChats}) => {
  return <Pages chatMessages={parsedChats} />
}
export default Chat
