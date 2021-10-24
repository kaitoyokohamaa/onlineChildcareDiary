import {NextPage, GetStaticProps, GetStaticPropsContext} from 'next'

import {Pages} from '@/components/chat/Pages'

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const chatKey = context.params.chat

  return {
    props: {chatKey},
    revalidate: 30
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
const Chat: NextPage<{chatKey: string}> = ({chatKey}) => {
  return <Pages chatKey={chatKey} />
}
export default Chat
